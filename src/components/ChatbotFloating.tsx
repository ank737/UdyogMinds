import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  MessageSquare,
  Sparkles,
  X,
  Send,
  RotateCcw,
  Bot,
  User,
  Copy,
  Check,
  Zap,
  HelpCircle,
  Mic,
  MicOff
} from 'lucide-react';
import { ChatMessage, Language, UserAssessmentState, FeasibilityData, FinancialCalculation } from '../types';
import { formatINR } from '../utils/calculations';
import { getCategoryTranslation } from '../data/categoryTranslations';

interface ChatbotFloatingProps {
  lang: Language;
  assessment: UserAssessmentState;
  feasibility: FeasibilityData;
  financial: FinancialCalculation;
}

const STORAGE_KEY = 'udyogminds_chat_session_history';

export function ChatbotFloating({
  lang,
  assessment,
  feasibility,
  financial,
}: ChatbotFloatingProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [hasUnreadPulse, setHasUnreadPulse] = useState(true);
  const [isListening, setIsListening] = useState(false);

  const recognitionRef = useRef<any>(null);

  // Initialize messages from sessionStorage so history lasts ONLY for current visit/session
  const [messages, setMessages] = useState<ChatMessage[]>(() => {
    try {
      const saved = sessionStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch {
      // sessionStorage unavailable or parse error
    }
    return [];
  });

  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const isHindi = lang === 'hi';

  // Initial welcome greeting if chat is fresh
  useEffect(() => {
    if (messages.length === 0) {
      const categoryName = getCategoryTranslation(lang, assessment.category).name;
      const initialGreeting: ChatMessage = {
        id: 'welcome-1',
        sender: 'bot',
        timestamp: Date.now(),
        text: isHindi
          ? `नमस्ते! मैं **UdyogMinds AI सहायक** हूँ।\n\nमैं **${assessment.location.village}** में आपके **${categoryName}** प्रोजेक्ट (पूंजी: ${formatINR(assessment.capitalAmount)}, अनुमानित लोन: ${formatINR(financial.maximumLoan)}) के लिए सरकारी सब्सिडी (PMEGP/Mudra), बैंक लोन प्रक्रिया और बाजार फिजिबिलिटी में मदद कर सकता हूँ।\n\nआप मुझसे क्या पूछना चाहते हैं?`
          : `Hello! I am the **UdyogMinds AI Business Advisor**.\n\nI can assist you with your **${categoryName}** project in **${assessment.location.village}** (Margin Capital: ${formatINR(assessment.capitalAmount)}, Eligible Bank Debt: ${formatINR(financial.maximumLoan)}). Ask me anything about subsidies (PMEGP/Mudra), bank loan procedures, or customer footfall!`,
      };
      setMessages([initialGreeting]);
      try {
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify([initialGreeting]));
      } catch {
        // ignore storage error
      }
    }
  }, [lang, assessment.category, assessment.location.village, assessment.capitalAmount, financial.maximumLoan]);

  // Persist messages to sessionStorage whenever they change
  useEffect(() => {
    if (messages.length > 0) {
      try {
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
      } catch {
        // ignore
      }
    }
  }, [messages]);

  // Auto-scroll to bottom on new messages
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen, isLoading]);

  // Focus input on open
  useEffect(() => {
    if (isOpen) {
      setHasUnreadPulse(false);
      setTimeout(() => {
        inputRef.current?.focus();
      }, 200);
    }
  }, [isOpen]);

  // Stop voice recognition when the component unmounts.
  useEffect(() => {
    return () => {
      recognitionRef.current?.stop();
    };
  }, []);

  // Clear chat history for present session
  const handleClearChat = () => {
    try {
      sessionStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
    const categoryName = getCategoryTranslation(lang, assessment.category).name;
    const freshGreeting: ChatMessage = {
      id: `welcome-${Date.now()}`,
      sender: 'bot',
      timestamp: Date.now(),
      text: isHindi
        ? `नया सत्र शुरू हुआ। **${assessment.location.village}** में **${categoryName}** के संबंध में अपना प्रश्न पूछें:`
        : `New session started. Ask your question regarding **${categoryName}** at **${assessment.location.village}**:`,
    };
    setMessages([freshGreeting]);
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify([freshGreeting]));
    } catch {
      // ignore
    }
  };

  // Voice-to-text input using the browser Web Speech API.
  const handleVoiceInput = () => {
    const SpeechRecognition =
      (window as any).SpeechRecognition ||
      (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert(
        isHindi
          ? 'आपके ब्राउज़र में Voice Input supported नहीं है। Chrome या Edge इस्तेमाल करें।'
          : 'Voice input is not supported in this browser. Please use Chrome or Edge.'
      );
      return;
    }

    // Stop current recognition.
    if (isListening) {
      recognitionRef.current?.stop();
      setIsListening(false);
      return;
    }

    const recognition = new SpeechRecognition();

    recognition.continuous = false;
    recognition.interimResults = true;
    recognition.lang = isHindi ? 'hi-IN' : 'en-IN';

    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.onresult = (event: any) => {
      let transcript = '';

      for (
        let i = event.resultIndex;
        i < event.results.length;
        i++
      ) {
        transcript += event.results[i][0].transcript;
      }

      setInputMessage(transcript.trim());
    };

    recognition.onerror = (event: any) => {
      console.warn('Voice recognition error:', event.error);
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognitionRef.current = recognition;
    recognition.start();
  };

  const handleSendMessage = async (textToSend?: string) => {
    const query = (textToSend || inputMessage).trim();
    if (!query || isLoading) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: query,
      timestamp: Date.now(),
    };

    const updated = [...messages, userMsg];
    setMessages(updated);
    setInputMessage('');
    setIsLoading(true);

    try {
      const categoryName = getCategoryTranslation(lang, assessment.category).name;
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: query,
          history: updated.slice(-6),
          language: lang,
          context: {
            village: assessment.location.village,
            district: assessment.location.district,
            state: assessment.location.state,
            category: categoryName,
            capital: assessment.capitalAmount,
            projectCost: financial.projectCost,
            maxLoan: financial.maximumLoan,
            scheme: financial.scheme.name,
          },
        }),
      });

      if (!res.ok) {
        throw new Error(`Server returned ${res.status}`);
      }

      const data = await res.json();
      const botMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: data.reply || (isHindi ? 'कोई उत्तर नहीं मिला।' : 'No response received.'),
        timestamp: Date.now(),
        source: data.source,
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (err: any) {
      console.warn('Chat error, using fallback:', err);
      // Client-side fallback if server connection fails
      const fallbackReply: ChatMessage = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: isHindi
          ? `📌 **त्वरित सुझाव (${assessment.location.village}):**\n• आपकी पूंजी: **${formatINR(assessment.capitalAmount)}**\n• अनुमत बैंक लोन: **${formatINR(financial.maximumLoan)}** (${financial.scheme.name})\n• PMEGP e-Portal (kviconline.gov.in) पर 25-35% मार्जिन मनी सब्सिडी के लिए आवेदन करें।`
          : `📌 **Quick Guidance (${assessment.location.village}):**\n• Your Margin Capital: **${formatINR(assessment.capitalAmount)}**\n• Eligible Bank Loan: **${formatINR(financial.maximumLoan)}** under ${financial.scheme.name}\n• Apply on kviconline.gov.in for up to 35% margin money subsidy.`,
        timestamp: Date.now(),
        source: 'local-advisor',
      };
      setMessages((prev) => [...prev, fallbackReply]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Quick Prompt Chips
  const quickPrompts = isHindi
    ? [
        'PMEGP 35% सब्सिडी कैसे मिलेगी?',
        'बैंक लोन के लिए कौन से डॉक्यूमेंट्स चाहिए?',
        'मुनाफा और मासिक कमाई कितनी होगी?',
        '5 किमी में कितने ग्राहक और हाट बाजार हैं?',
      ]
    : [
        'How to get 35% PMEGP subsidy?',
        'What documents are needed for bank loan?',
        'What is the estimated monthly profit?',
        'Market reach within 5 km radius?',
      ];

  // Helper to format text with simple markdown (bold, bullet points)
  const renderFormattedText = (text: string) => {
    const lines = text.split('\n');
    return (
      <div className="space-y-1 text-xs sm:text-[13px] leading-relaxed">
        {lines.map((line, idx) => {
          if (!line.trim()) {
            return <div key={idx} className="h-1" />;
          }

          // Format bold markers **text**
          const parts = line.split(/(\*\*.*?\*\*)/g);
          const renderedLine = parts.map((part, pIdx) => {
            if (part.startsWith('**') && part.endsWith('**')) {
              return (
                <strong key={pIdx} className="font-semibold text-slate-900">
                  {part.slice(2, -2)}
                </strong>
              );
            }
            return <span key={pIdx}>{part}</span>;
          });

          // Bullet points
          if (line.trim().startsWith('•') || line.trim().startsWith('* ') || line.trim().startsWith('- ')) {
            return (
              <div key={idx} className="flex items-start gap-1.5 pl-1">
                <span className="text-emerald-700 font-bold leading-none mt-1">•</span>
                <span className="flex-1">{renderedLine}</span>
              </div>
            );
          }

          // Numbered lists e.g. "1. "
          const numMatch = line.trim().match(/^(\d+)\.\s+(.*)/);
          if (numMatch) {
            return (
              <div key={idx} className="flex items-start gap-1.5 pl-1">
                <span className="font-semibold text-emerald-800 shrink-0 font-mono text-[11px] mt-0.5">
                  {numMatch[1]}.
                </span>
                <span className="flex-1">{renderedLine}</span>
              </div>
            );
          }

          return <p key={idx}>{renderedLine}</p>;
        })}
      </div>
    );
  };

  return (
    <>
      {/* Floating Trigger Button pinned to Bottom-Right */}
      <div className="fixed bottom-6 right-6 z-[80] no-print flex flex-col items-end">
        <motion.button
          id="btn-chatbot-toggle"
          onClick={() => setIsOpen((prev) => !prev)}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.94 }}
          className={`relative flex items-center justify-center rounded-full shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-emerald-300 ${
            isOpen
              ? 'w-13 h-13 bg-slate-900 text-white shadow-slate-900/30'
              : 'w-14 h-14 bg-gradient-to-tr from-emerald-800 via-emerald-700 to-teal-700 text-white shadow-emerald-900/30 ring-2 ring-white/60'
          }`}
          aria-label={isOpen ? 'Close AI Chat' : 'Open AI Chatbot'}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <X className="w-6 h-6" />
              </motion.div>
            ) : (
              <motion.div
                key="open"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="relative flex items-center justify-center"
              >
                <MessageSquare className="w-6 h-6" />
                <Sparkles className="w-3.5 h-3.5 text-amber-300 absolute -top-1.5 -right-1.5 animate-pulse" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Unread pulse ring */}
          {!isOpen && hasUnreadPulse && (
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-4 w-4 bg-amber-500 border-2 border-white" />
            </span>
          )}
        </motion.button>

        {/* Small floating badge hint when closed */}
        {!isOpen && hasUnreadPulse && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-2 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-full text-[11px] font-semibold text-emerald-950 border border-emerald-200/80 shadow-md flex items-center gap-1.5 pointer-events-none"
          >
            <Sparkles className="w-3 h-3 text-emerald-600 shrink-0" />
            <span>{isHindi ? 'AI सहायक से पूछें' : 'Ask AI Sahayak'}</span>
          </motion.div>
        )}
      </div>

      {/* Floating Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="window-chatbot-floating"
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="fixed bottom-22 sm:bottom-24 right-4 sm:right-6 w-[calc(100vw-2rem)] sm:w-[390px] md:w-[410px] h-[540px] max-h-[78vh] flex flex-col rounded-2xl bg-white shadow-2xl shadow-slate-900/30 border border-slate-200/90 overflow-hidden z-[80] no-print"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-slate-900 via-emerald-950 to-slate-900 text-white px-4 py-3.5 flex items-center justify-between border-b border-emerald-900/50">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-emerald-600/30 border border-emerald-400/40 flex items-center justify-center text-emerald-300 shrink-0">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h3 className="text-sm font-bold text-white tracking-tight">
                      {isHindi ? 'UdyogMinds AI सहायक' : 'UdyogMinds AI Sahayak'}
                    </h3>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  </div>
                  <p className="text-[11px] text-emerald-200/80 font-medium">
                    {isHindi ? 'ग्रामीण सूक्ष्म-उद्यम सलाहकार' : 'Rural Business & Financial Advisor'}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                {/* Reset / New Chat Button (clears session history) */}
                <button
                  id="btn-chatbot-clear"
                  onClick={handleClearChat}
                  title={isHindi ? 'नया चैट शुरू करें (इतिहास साफ़ करें)' : 'New Chat (Clear current session)'}
                  className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>

                {/* Close Button */}
                <button
                  id="btn-chatbot-close"
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                  aria-label="Close"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Current Context Mini Bar */}
            <div className="bg-emerald-50/90 border-b border-emerald-100/80 px-3.5 py-1.5 flex items-center justify-between text-[11px] text-emerald-900">
              <div className="flex items-center gap-1.5 truncate">
                <span className="font-semibold text-emerald-950">
                  📍 {assessment.location.village}
                </span>
                <span className="text-emerald-400">•</span>
                <span className="truncate text-emerald-800">
                  {getCategoryTranslation(lang, assessment.category).name}
                </span>
              </div>
              <span className="font-mono font-semibold text-emerald-950 shrink-0 ml-2">
                {formatINR(assessment.capitalAmount)}
              </span>
            </div>

            {/* Messages Body */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-slate-50/50">
              {messages.map((msg) => {
                const isUser = msg.sender === 'user';
                return (
                  <div
                    key={msg.id}
                    className={`flex items-start gap-2 ${
                      isUser ? 'flex-row-reverse' : 'flex-row'
                    }`}
                  >
                    {/* Avatar */}
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-xs font-semibold ${
                        isUser
                          ? 'bg-emerald-700 text-white'
                          : 'bg-slate-200 text-slate-700 border border-slate-300'
                      }`}
                    >
                      {isUser ? <User className="w-3.5 h-3.5" /> : <Bot className="w-4 h-4 text-emerald-800" />}
                    </div>

                    {/* Bubble */}
                    <div
                      className={`relative group max-w-[82%] rounded-2xl px-3.5 py-2.5 shadow-sm text-xs sm:text-[13px] ${
                        isUser
                          ? 'bg-emerald-800 text-white rounded-tr-xs'
                          : 'bg-white text-slate-800 border border-slate-200/90 rounded-tl-xs'
                      }`}
                    >
                      {isUser ? (
                        <p className="whitespace-pre-wrap">{msg.text}</p>
                      ) : (
                        renderFormattedText(msg.text)
                      )}

                      <div
                        className={`flex items-center justify-between gap-2 mt-1.5 pt-1 border-t text-[10px] ${
                          isUser
                            ? 'border-emerald-700/50 text-emerald-200'
                            : 'border-slate-100 text-slate-400'
                        }`}
                      >
                        <span>
                          {new Date(msg.timestamp).toLocaleTimeString([], {
                            hour: '2-digit',
                            minute: '2-digit',
                          })}
                        </span>

                        {!isUser && (
                          <div className="flex items-center gap-1.5">
                            {msg.source === 'gemini-3.8-flash' && (
                              <span className="flex items-center gap-0.5 text-emerald-600 font-mono text-[9px] font-semibold">
                                <Zap className="w-2.5 h-2.5" /> Gemini
                              </span>
                            )}
                            <button
                              onClick={() => handleCopy(msg.id, msg.text)}
                              className="opacity-0 group-hover:opacity-100 hover:text-slate-700 transition-opacity p-0.5"
                              title="Copy response"
                            >
                              {copiedId === msg.id ? (
                                <Check className="w-3 h-3 text-emerald-600" />
                              ) : (
                                <Copy className="w-3 h-3" />
                              )}
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Typing Indicator */}
              {isLoading && (
                <div className="flex items-start gap-2">
                  <div className="w-7 h-7 rounded-full bg-slate-200 text-slate-700 border border-slate-300 flex items-center justify-center shrink-0">
                    <Bot className="w-4 h-4 text-emerald-800" />
                  </div>
                  <div className="bg-white text-slate-600 border border-slate-200/90 rounded-2xl rounded-tl-xs px-4 py-2.5 shadow-sm flex items-center gap-2">
                    <span className="flex gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-bounce" />
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-bounce [animation-delay:0.2s]" />
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-bounce [animation-delay:0.4s]" />
                    </span>
                    <span className="text-[11px] text-slate-400 font-medium">
                      {isHindi ? 'AI उत्तर तैयार कर रहा है...' : 'AI is analyzing...'}
                    </span>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Prompts Carousel */}
            {messages.length <= 2 && (
              <div className="px-3 py-2 bg-slate-100/80 border-t border-slate-200/80 flex gap-1.5 overflow-x-auto no-scrollbar text-[11px]">
                {quickPrompts.map((prompt, pIdx) => (
                  <button
                    key={pIdx}
                    onClick={() => handleSendMessage(prompt)}
                    className="whitespace-nowrap px-2.5 py-1 rounded-full bg-white border border-slate-200 text-slate-700 hover:bg-emerald-50 hover:border-emerald-300 hover:text-emerald-900 transition-colors shadow-2xs shrink-0"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            )}

            {/* Input Footer */}
            <div className="p-2.5 bg-white border-t border-slate-200 flex items-center gap-2">
              {/* Text Input */}
              <input
                ref={inputRef}
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={
                  isHindi
                    ? 'सब्सिडी, लोन या बिज़नेस के बारे में पूछें...'
                    : 'Ask about subsidies, loans, or market...'
                }
                disabled={isLoading}
                className="flex-1 min-w-0 bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white transition-all disabled:opacity-50"
              />

              {/* Voice Input */}
              <button
                id="btn-chatbot-mic"
                type="button"
                onClick={handleVoiceInput}
                disabled={isLoading}
                className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all shrink-0 ${
                  isListening
                    ? 'bg-red-500 text-white hover:bg-red-600 animate-pulse'
                    : 'bg-slate-100 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700'
                } disabled:opacity-40 disabled:cursor-not-allowed`}
                aria-label={
                  isListening
                    ? 'Stop voice input'
                    : 'Start voice input'
                }
                title={
                  isListening
                    ? 'Stop listening'
                    : 'Voice input'
                }
              >
                {isListening ? (
                  <MicOff className="w-4 h-4" />
                ) : (
                  <Mic className="w-4 h-4" />
                )}
              </button>

              {/* Send */}
              <button
                id="btn-chatbot-send"
                type="button"
                onClick={() => handleSendMessage()}
                disabled={!inputMessage.trim() || isLoading}
                className="w-9 h-9 rounded-xl bg-emerald-700 text-white flex items-center justify-center hover:bg-emerald-800 disabled:opacity-40 disabled:cursor-not-allowed transition-colors shadow-sm shrink-0"
                aria-label="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
