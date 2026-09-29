import { Language } from '../types';
import { REGIONAL_TRANSLATIONS } from './regionalTranslations';
import { MINOR_REGIONAL_TRANSLATIONS } from './minorRegionalTranslations';
import { REPORT_SECTION_TRANSLATIONS } from './reportSectionTranslations';

const BASE_TRANSLATIONS: Record<'en' | 'hi', Record<string, string>> = {
  en: {
    // Header & Brand
    appTitle: 'UdyogMinds',
    sihBadge: 'AI Rural Business Advisory',
    problemStatement: 'Problem: Rural Micro-Enterprise & Financial Structuring',
    navHome: 'Overview',
    navAssessment: 'Assessment',
    navFeasibility: 'Feasibility',
    navFinancial: 'Financials',
    navReport: 'Advisory Report',
    navSchemes: 'Govt Schemes',
    navArchitecture: 'Govt Schemes',
    demoScenarios: 'Quick Demos',

    // Landing Page
    heroTitle: 'Smart Business Advisory for Rural Entrepreneurs',
    heroSubtitle: 'Understand your local market. Evaluate opportunities. Structure your finances.',
    primaryCta: 'Start Business Assessment',
    secondaryCta: 'Financial Calculator',
    corePrincipleTag: 'Core Principle',
    corePrinciple: 'AI ANALYZES → DATA VALIDATES → RULES CALCULATE → HUMAN DECIDES',
    
    // Feature Cards
    feature1Title: 'Hyper-Local Market Analysis',
    feature1Desc: 'Evaluates village population clusters, customer reach within 5-10 km, competitor density, and distribution networks.',
    feature2Title: 'Smart Financial Structuring',
    feature2Desc: 'Computes project cost (10x margin) and 90% loan eligibility with automated routing to Micro Finance or Term Loan schemes.',
    feature3Title: 'Explainable Business Advisory',
    feature3Desc: 'Zero black-box AI. Every formula, opportunity factor, and risk score is backed by transparent calculation steps you can inspect.',

    // Pipeline
    pipelineTitle: 'The 4-Step Rural Advisory Journey',
    step1Pipeline: 'Your Inputs',
    step2Pipeline: 'Market Analysis',
    step3Pipeline: 'Financial Analysis',
    step4Pipeline: 'Business Advisory',

    // Assessment Wizard
    assessmentTitle: 'Micro-Enterprise Feasibility Assessment',
    assessmentSubtitle: 'Step-by-step diagnostic to evaluate viability and capital matching.',
    stepLabel1: 'Location',
    stepLabel2: 'Capital',
    stepLabel3: 'Business Type',
    stepLabel4: 'Description',

    // Step 1: Location
    stateLabel: 'State',
    districtLabel: 'District',
    blockLabel: 'Tehsil / Block',
    villageLabel: 'Gram Panchayat / Village',
    presetLocationsPrompt: 'Or choose an Indian rural demo cluster:',

    // Step 2: Capital
    capitalQuestion: 'How much capital do you have?',
    capitalSub: 'Select a standard margin tier or enter in natural language (e.g. 1.5 lakh, 50k):',
    manualCapitalLabel: 'Type your available capital:',
    capitalPlaceholder: 'e.g. 1 lakh, 50k, 1.5 lakh, 150000',
    understoodCapitalPrefix: 'I understood your capital as',
    capitalNote: 'This capital will serve as your 10% own contribution (Margin Capital) for institutional bank financing.',

    // Step 3: Business Category
    categoryQuestion: 'Which business do you want to start?',
    categorySub: 'Choose the rural business category closest to your plan:',

    // Step 4: Description
    descriptionQuestion: 'Tell us a bit about your plan (Optional)',
    descriptionSub: 'Type in English, Hindi, or Hinglish. Our AI checks local compatibility.',
    descriptionPlaceholder: 'e.g. I want to open a grocery shop near the village crossroads with daily staples, snacks, and milk.',
    voiceInputSim: 'Tap to use voice note (Simulated)',

    // Buttons
    btnNext: 'Next Step',
    btnBack: 'Previous',
    btnSubmitAssessment: 'Generate Feasibility & Financial Advisory',
    btnViewFeasibility: 'View Feasibility Dashboard',
    btnOpenCalculator: 'Open Financial Structuring',
    btnDownloadPdf: 'Download Advisory Report (JSON/PDF)',
    btnPrint: 'Print Report',
    btnStartNew: 'Start New Assessment',
    btnWhy: 'Why this result?',
    btnViewCalculation: 'View Calculation',

    // Feasibility Dashboard
    feasibilityTitle: 'Hyper-Local Feasibility Dashboard',
    marketReachTitle: 'Market Reach & Demographics',
    radius5km: '5 km Radius (Primary Catchment)',
    radius10km: '10 km Radius (Extended Catchment)',
    statPopulation: 'Estimated Population',
    statVillages: 'Nearby Villages',
    statMarkets: 'Nearby Weekly Markets',
    statCustomers: 'Potential Customer Base',
    statHouseholds: 'Rural Households',
    disclaimerData: 'Data shown is illustrative prototype demonstration data calibrated for rural Indian clusters.',

    // Opportunity Analysis
    opportunityScoreTitle: 'Opportunity Score',
    opportunityScale: 'Calculated out of 100 based on local parameters',
    whyThisScore: 'Why this score?',
    scoreExplainSubtitle: 'Detailed mathematical breakdown of the 5 weighted feasibility pillars',

    // Distribution Channels
    distributionTitle: 'Recommended Distribution Channels',
    distributionSub: 'High-yield avenues to reach customers in your block',
    channelFeasibility: 'Feasibility',

    // Competitor Analysis
    competitorTitle: 'Competitor Landscape & Density',
    competitorSub: 'Spatial distribution of existing players in your immediate cluster',
    competitorCountLabel: 'Identified Competitors',
    densityLabel: 'Cluster Density',
    directCompetitor: 'Direct Competitor',
    indirectCompetitor: 'Indirect / Informal',
    mapNote: 'Interactive Map Simulation (Visual spatial markers representing nearby businesses)',

    // SWOT
    swotTitle: 'SWOT Matrix (Category-Specific)',
    swotStrengths: 'Strengths (Internal)',
    swotWeaknesses: 'Weaknesses (Internal)',
    swotOpportunities: 'Opportunities (External)',
    swotThreats: 'Threats (External)',

    // Threats & Mitigation
    threatsTitle: 'Local Threats & Actionable Mitigations',
    threatColName: 'Identified Risk',
    impactColName: 'Impact Level',
    mitigationColName: 'Suggested Actionable Mitigation',

    // Pricing
    pricingTitle: 'Hyper-Local Pricing & Margin Analysis',
    pricingNote: 'Pricing shown is illustrative prototype data based on regional rural Mandi surveys.',
    productBenchmark: 'Benchmark Product Basket',
    estimatedCostLabel: 'Estimated Wholesale Cost',
    localRangeLabel: 'Prevailing Village Price Range',
    suggestedPriceLabel: 'Suggested Retail Price',
    marginLabel: 'Estimated Gross Margin',

    // Financial Structuring
    financialTitle: 'Smart Financial Structuring & Scheme Router',
    financialSub: 'Transparent debt-equity structuring aligned with Reserve Bank of India & PMMY guidelines.',
    marginCapitalCard: 'Available Margin Capital (Own Funds)',
    projectCostCard: 'Total Project Cost (10x Multiplier)',
    loanCard: 'Maximum Bank Loan (90% Financing)',
    calculationFlowTitle: 'Transparent Financial Logic Chain',

    // Scheme Router
    schemeRouterTitle: 'Configured Financing Scheme Matching',
    schemeCategory: 'Matched Scheme Category',
    interestRateLabel: 'Interest Rate',
    tenureLabel: 'Loan Tenure',
    moratoriumLabel: 'Moratorium Period',
    schemeRuleExplain: 'Scheme Routing Rule Applied',

    // EMI
    emiTitle: 'Monthly Repayment & EMI Breakdown',
    monthlyEmiLabel: 'Estimated Monthly EMI',
    totalInterestLabel: 'Total Interest Payable',
    totalRepaymentLabel: 'Total Lifetime Repayment',
    effectivePrincipalLabel: 'Principal (incl. Capitalized Moratorium)',
    repaymentTableTitle: 'Quarterly Repayment Schedule (Amortized)',
    moratoriumNotice: 'Prototype assumption: Interest during moratorium period is capitalized into loan balance. Verify official bank guidelines.',

    // Final Report
    reportTitle: 'Rural Micro-Enterprise Advisory Report',
    reportSubtitle: 'Smart India Hackathon 2026 Evaluation Ready Prototype Document',
    section1: '1. Executive Business Summary',
    section2: '2. Geographical Location Coordinates',
    section3: '3. Entrepreneur Margin Capital',
    section4: '4. Market Catchment & Reach',
    section5: '5. Opportunity Scoring Breakdown',
    section6: '6. Competition & Market Density',
    section7: '7. SWOT Assessment',
    section8: '8. Local Operational Risks & Mitigations',
    section9: '9. Pricing Benchmarks & Margins',
    section10: '10. Project Cost Structure',
    section11: '11. Bank Loan Requirement',
    section12: '12. Recommended Financing Scheme',
    section13: '13. Monthly Repayment & EMI',
    section14: '14. Amortization Schedule',
    section15: '15. Key Methodology & Regulatory Assumptions',
  },
  hi: {
    // Header & Brand
    appTitle: 'उद्योगमाइंड्स (UdyogMinds)',
    sihBadge: 'AI ग्रामीण व्यवसाय सलाहकार',
    problemStatement: 'समस्या: ग्रामीण सूक्ष्म उद्यम व वित्तीय संरचना',
    navHome: 'होम',
    navAssessment: 'मूल्यांकन',
    navFeasibility: 'संभावना',
    navFinancial: 'वित्त व ऋण',
    navReport: 'सलाहकार रिपोर्ट',
    navSchemes: 'सरकारी योजनाएं',
    navArchitecture: 'सरकारी योजनाएं',
    demoScenarios: 'त्वरित डेमो',

    // Landing Page
    heroTitle: 'ग्रामीण उद्यमियों के लिए स्मार्ट व्यवसाय सलाहकार',
    heroSubtitle: 'अपने स्थानीय बाजार को समझें। अवसरों का मूल्यांकन करें। अपने वित्त को सही आकार दें।',
    primaryCta: 'व्यवसाय मूल्यांकन शुरू करें',
    secondaryCta: 'वित्तीय कैलकुलेटर',
    corePrincipleTag: 'मूल सिद्धांत',
    corePrinciple: 'AI विश्लेषण करता है → डेटा सत्यापित करता है → नियम गणना करते हैं → मानव निर्णय लेता है',

    // Feature Cards
    feature1Title: 'अति-स्थानीय बाजार विश्लेषण',
    feature1Desc: '5-10 किमी दायरे में गांव की आबादी, ग्राहक क्षमता, प्रतिस्पर्धी घनत्व और आपूर्ति व्यवस्था का आकलन।',
    feature2Title: 'स्मार्ट वित्तीय संरचना व ऋण',
    feature2Desc: 'प्रोजेक्ट लागत (10 गुना पूंजी) और 90% ऋण पात्रता की गणना कर सही सरकारी ऋण योजना से मिलान।',
    feature3Title: 'पारदर्शी व व्याख्या योग्य सलाह',
    feature3Desc: 'कोई गोपनीय ब्लैक-बॉक्स नहीं। हर गणना, अवसर स्कोर और ईएमआई फॉर्मूला स्पष्ट रूप से देखने योग्य है।',

    // Pipeline
    pipelineTitle: '4-चरणीय ग्रामीण व्यवसाय यात्रा',
    step1Pipeline: 'आपके इनपुट',
    step2Pipeline: 'बाजार विश्लेषण',
    step3Pipeline: 'वित्तीय विश्लेषण',
    step4Pipeline: 'व्यवसाय सलाह',

    // Assessment Wizard
    assessmentTitle: 'सूक्ष्म-उद्यम व्यवहार्यता मूल्यांकन',
    assessmentSubtitle: 'व्यवसाय की सफलता और ऋण पात्रता जांचने का सरल चरण-दर-चरण फॉर्म।',
    stepLabel1: 'स्थान',
    stepLabel2: 'पूंजी',
    stepLabel3: 'व्यवसाय प्रकार',
    stepLabel4: 'विवरण',

    // Step 1: Location
    stateLabel: 'राज्य',
    districtLabel: 'जिला',
    blockLabel: 'तहसील / ब्लॉक',
    villageLabel: 'ग्राम पंचायत / गांव',
    presetLocationsPrompt: 'या डेमो के लिए कोई ग्रामीण क्षेत्र चुनें:',

    // Step 2: Capital
    capitalQuestion: 'आपके पास कितनी पूंजी उपलब्ध है?',
    capitalSub: 'दिए गए विकल्पों में से चुनें या सरल भाषा में लिखें (उदा. 1.5 लाख, 50k, 1 लाख):',
    manualCapitalLabel: 'अपनी उपलब्ध पूंजी दर्ज करें:',
    capitalPlaceholder: 'उदा. 1 lakh, 50k, 1.5 lakh, 150000',
    understoodCapitalPrefix: 'मैंने आपकी पूंजी को',
    capitalNote: 'यह पूंजी बैंक ऋण प्राप्त करने के लिए आपका 10% स्वयं का अंशदान (मार्जिन मनी) बनेगी।',

    // Step 3: Business Category
    categoryQuestion: 'आप कौन सा व्यवसाय शुरू करना चाहते हैं?',
    categorySub: 'अपनी योजना के अनुसार उपयुक्त श्रेणी का चयन करें:',

    // Step 4: Description
    descriptionQuestion: 'अपनी योजना के बारे में थोड़ा बताएं (वैकल्पिक)',
    descriptionSub: 'हिंदी, अंग्रेजी या हिंग्लिश में लिख सकते हैं। AI स्थानीय आवश्यकताओं से मिलान करेगा।',
    descriptionPlaceholder: 'उदा. मैं गांव के मुख्य तिराहे पर किराना दुकान खोलना चाहता हूं जिसमें दैनिक राशन, मसाले और दूध का सामान हो।',
    voiceInputSim: 'बोलकर बताएं (वॉयस इनपुट सिमुलेशन)',

    // Buttons
    btnNext: 'आगे बढ़ें',
    btnBack: 'पीछे जाएं',
    btnSubmitAssessment: 'संभावना व वित्तीय रिपोर्ट तैयार करें',
    btnViewFeasibility: 'बाजार संभावना देखें',
    btnOpenCalculator: 'वित्तीय कैलकुलेटर खोलें',
    btnDownloadPdf: 'सलाहकार रिपोर्ट डाउनलोड करें (JSON/प्रिंट)',
    btnPrint: 'रिपोर्ट प्रिंट करें',
    btnStartNew: 'नया मूल्यांकन शुरू करें',
    btnWhy: 'यह परिणाम क्यों आया?',
    btnViewCalculation: 'गणना देखें',

    // Feasibility Dashboard
    feasibilityTitle: 'अति-स्थानीय व्यवहार्यता डैशबोर्ड',
    prototypeBadge: 'प्रोटोटाइप विश्लेषण — प्रदर्शन डेटा',
    marketReachTitle: 'बाजार पहुंच व जनसांख्यिकी',
    radius5km: '5 किमी दायरा (प्राथमिक क्षेत्र)',
    radius10km: '10 किमी दायरा (विस्तृत क्षेत्र)',
    statPopulation: 'अनुमानित जनसंख्या',
    statVillages: 'आस-पास के गांव',
    statMarkets: 'साप्ताहिक हाट/बाजार',
    statCustomers: 'संभावित ग्राहक संख्या',
    statHouseholds: 'ग्रामीण परिवार',
    disclaimerData: 'प्रदर्शित आंकड़े भारतीय ग्रामीण क्लस्टर के आधार पर तैयार किया गया प्रोटोटाइप प्रदर्शन डेटा है।',

    // Opportunity Analysis
    opportunityScoreTitle: 'अवसर स्कोर (Opportunity Score)',
    opportunityScale: 'स्थानीय मानकों के आधार पर 100 में से गणना की गई',
    whyThisScore: 'यह स्कोर क्यों मिला?',
    scoreExplainSubtitle: 'अवसर स्कोर बनाने वाले 5 प्रमुख घटकों का विस्तृत गणितीय विश्लेषण',

    // Distribution Channels
    distributionTitle: 'अनुशंसित वितरण माध्यम',
    distributionSub: 'आपके क्षेत्र में ग्राहकों तक माल पहुंचाने के प्रभावी तरीके',
    channelFeasibility: 'उपयुक्तता',

    // Competitor Analysis
    competitorTitle: 'प्रतिस्पर्धी विश्लेषण व घनत्व',
    competitorSub: 'आपके आसपास मौजूद अन्य दुकानों और विक्रेताओं की स्थिति',
    competitorCountLabel: 'पहचाने गए प्रतिस्पर्धी',
    densityLabel: 'प्रतिस्पर्धा स्तर',
    directCompetitor: 'सीधा प्रतिस्पर्धी',
    indirectCompetitor: 'अप्रत्यक्ष / छोटा विक्रेता',
    mapNote: 'इंटरएक्टिव मैप सिमुलेशन (आसपास के व्यवसाय दर्शाने वाले सांकेतिक मार्कर)',

    // SWOT
    swotTitle: 'SWOT विश्लेषण (श्रेणी-अनुसार)',
    swotStrengths: 'ताकत (Strengths)',
    swotWeaknesses: 'कमजोरी (Weaknesses)',
    swotOpportunities: 'अवसर (Opportunities)',
    swotThreats: 'जोखिम व चुनौतियां (Threats)',

    // Threats & Mitigation
    threatsTitle: 'स्थानीय जोखिम व समाधान',
    threatColName: 'पहचाना गया जोखिम',
    impactColName: 'प्रभाव स्तर',
    mitigationColName: 'सुझाया गया व्यावहारिक समाधान',

    // Pricing
    pricingTitle: 'स्थानीय मूल्य व मुनाफा विश्लेषण',
    pricingNote: 'मूल्य आंकड़े क्षेत्रीय ग्रामीण मंडियों के प्रोटोटाइप सर्वेक्षण पर आधारित हैं।',
    productBenchmark: 'मानक उत्पाद बास्केट',
    estimatedCostLabel: 'अनुमानित थोक खरीद लागत',
    localRangeLabel: 'गांव में प्रचलित मूल्य सीमा',
    suggestedPriceLabel: 'सुझाया गया विक्रय मूल्य',
    marginLabel: 'अनुमानित सकल मुनाफा (मार्जिन)',

    // Financial Structuring
    financialTitle: 'स्मार्ट वित्तीय संरचना व योजना चयन',
    financialSub: 'भारतीय रिजर्व बैंक और पीएम मुद्रा योजना के 90:10 नियम पर आधारित पारदर्शी गणना।',
    marginCapitalCard: 'उपलब्ध मार्जिन पूंजी (स्वयं का पैसा)',
    projectCostCard: 'कुल प्रोजेक्ट लागत (10 गुना)',
    loanCard: 'अधिकतम बैंक ऋण (90% वित्तीय सहायता)',
    calculationFlowTitle: 'पारदर्शी वित्तीय गणना श्रृंखला',

    // Scheme Router
    schemeRouterTitle: 'ऋण योजना चयन व पात्रता',
    schemeCategory: 'अनुशंसित योजना श्रेणी',
    interestRateLabel: 'ब्याज दर (वार्षिक)',
    tenureLabel: 'ऋण अवधि',
    moratoriumLabel: 'रियायती अवधि (Moratorium)',
    schemeRuleExplain: 'लागू किया गया योजना नियम',

    // EMI
    emiTitle: 'मासिक किस्त (EMI) व भुगतान विवरण',
    monthlyEmiLabel: 'अनुमानित मासिक किस्त (EMI)',
    totalInterestLabel: 'कुल देय ब्याज',
    totalRepaymentLabel: 'कुल चुकाई जाने वाली राशि',
    effectivePrincipalLabel: 'मूलधन (रियायती ब्याज सहित)',
    repaymentTableTitle: 'त्रैमासिक पुनर्भुगतान तालिका (Quarterly Schedule)',
    moratoriumNotice: 'प्रोटोटाइप मान्यता: रियायती अवधि (मोरेटोरियम) का ब्याज मूलधन में जोड़ा गया है। बैंक नियमावली से सत्यापित करें।',

    // Final Report
    reportTitle: 'ग्रामीण सूक्ष्म-उद्यम अंतिम सलाहकार रिपोर्ट',
    reportSubtitle: 'स्मार्ट इंडिया हैकथॉन 2026 मूल्यांकन हेतु तैयार प्रोटोटाइप दस्तावेज',
    section1: '1. व्यवसाय कार्यकारी सारांश',
    section2: '2. भौगोलिक स्थिति व स्थान',
    section3: '3. उद्यमी की मार्जिन पूंजी',
    section4: '4. बाजार पहुंच व प्रभाव क्षेत्र',
    section5: '5. अवसर स्कोर व मांग विश्लेषण',
    section6: '6. स्थानीय प्रतिस्पर्धा व बाजार घनत्व',
    section7: '7. विस्तृत SWOT विश्लेषण',
    section8: '8. परिचालन जोखिम व बचाव के उपाय',
    section9: '9. मूल्य निर्धारण व लाभ मार्जिन',
    section10: '10. कुल प्रोजेक्ट लागत संरचना',
    section11: '11. बैंक ऋण की आवश्यकता',
    section12: '12. अनुशंसित सरकारी/बैंक ऋण योजना',
    section13: '13. मासिक किस्त (EMI) व ब्याज गणना',
    section14: '14. त्रैमासिक ऋण वापसी तालिका',
    section15: '15. मुख्य मान्यताएं व नियम विवरण',
  },
};

const ALL_LANG_CODES: Language[] = [
  'en', 'hi', 'bn', 'mr', 'te', 'ta', 'gu', 'ur', 'kn', 'or', 
  'ml', 'pa', 'as', 'mai', 'sat', 'ks', 'ne', 'kok', 'sd', 'doi', 
  'mni', 'brx', 'sa'
];

export const TRANSLATIONS: Record<Language, Record<string, string>> = ALL_LANG_CODES.reduce((acc, code) => {
  const regional = REGIONAL_TRANSLATIONS[code] || MINOR_REGIONAL_TRANSLATIONS[code] || {};
  const base = code === 'hi' ? BASE_TRANSLATIONS.hi : BASE_TRANSLATIONS.en;
  const reportSections = REPORT_SECTION_TRANSLATIONS[code] || REPORT_SECTION_TRANSLATIONS.en;
  acc[code] = {
    ...BASE_TRANSLATIONS.en,
    ...base,
    ...regional,
    ...reportSections,
  };
  return acc;
}, {} as Record<Language, Record<string, string>>);

export const getTranslation = (lang: Language): Record<string, string> => {
  return TRANSLATIONS[lang] || TRANSLATIONS.en;
};

