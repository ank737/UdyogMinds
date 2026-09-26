import { FinancialCalculation, RepaymentQuarter, SchemeDetails } from '../types';

/**
 * Format numbers according to Indian numbering system: ₹ 1,50,000
 */
export function formatINR(amount: number): string {
  if (isNaN(amount)) return '₹0';
  const isNegative = amount < 0;
  const absAmount = Math.round(Math.abs(amount));
  
  const str = absAmount.toString();
  let result = '';
  
  if (str.length <= 3) {
    result = str;
  } else {
    const lastThree = str.substring(str.length - 3);
    const otherNumbers = str.substring(0, str.length - 3);
    const formattedOther = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ',');
    result = `${formattedOther},${lastThree}`;
  }
  
  return `${isNegative ? '-' : ''}₹${result}`;
}

/**
 * Parses user input in Indian colloquial formats:
 * e.g. "1 lakh", "1.5 lakh", "1.5 lac", "50k", "50 hazar", "₹1,50,000", "150000"
 */
export function parseIndianCurrency(input: string): { amount: number; recognized: boolean; displayFormatted: string } {
  if (!input || !input.trim()) {
    return { amount: 100000, recognized: false, displayFormatted: '₹1,00,000' };
  }

  const clean = input.toLowerCase().replace(/,/g, '').replace(/₹/g, '').trim();

  // Pattern: "1.5 lakh", "2 lakhs", "1.5 lac", "1.5 l"
  const lakhMatch = clean.match(/^([\d.]+)\s*(lakh|lakhs|lac|lacs|lac\b|l\b)/i);
  if (lakhMatch) {
    const val = parseFloat(lakhMatch[1]);
    if (!isNaN(val)) {
      const amount = Math.round(val * 100000);
      return { amount, recognized: true, displayFormatted: formatINR(amount) };
    }
  }

  // Pattern: "1 crore", "1.2 cr"
  const crMatch = clean.match(/^([\d.]+)\s*(cr|crore|crores)/i);
  if (crMatch) {
    const val = parseFloat(crMatch[1]);
    if (!isNaN(val)) {
      const amount = Math.round(val * 10000000);
      return { amount, recognized: true, displayFormatted: formatINR(amount) };
    }
  }

  // Pattern: "50k", "10 k"
  const kMatch = clean.match(/^([\d.]+)\s*k\b/i);
  if (kMatch) {
    const val = parseFloat(kMatch[1]);
    if (!isNaN(val)) {
      const amount = Math.round(val * 1000);
      return { amount, recognized: true, displayFormatted: formatINR(amount) };
    }
  }

  // Pattern: "50 hazar", "10 hazaar", "50 thousand"
  const thousandMatch = clean.match(/^([\d.]+)\s*(hazar|hazaar|thousand|k\b)/i);
  if (thousandMatch) {
    const val = parseFloat(thousandMatch[1]);
    if (!isNaN(val)) {
      const amount = Math.round(val * 1000);
      return { amount, recognized: true, displayFormatted: formatINR(amount) };
    }
  }

  // Pure numeric string
  const numOnly = clean.replace(/[^\d.]/g, '');
  const parsedNum = parseFloat(numOnly);
  if (!isNaN(parsedNum) && parsedNum > 0) {
    const amount = Math.round(parsedNum);
    return { amount, recognized: true, displayFormatted: formatINR(amount) };
  }

  // Fallback default
  return { amount: 100000, recognized: false, displayFormatted: '₹1,00,000' };
}

/**
 * Standard rule: Project Cost = Margin Capital * 10
 */
export function calculateProjectCost(marginCapital: number): number {
  return Math.round(marginCapital * 10);
}

/**
 * Standard rule: Maximum Loan = Project Cost * 90%
 */
export function calculateLoanAmount(projectCost: number): number {
  return Math.round(projectCost * 0.90);
}

/**
 * Scheme Router:
 * IF Project Cost <= 1.40 lakh:
 *   Micro Finance Scheme (6.5% p.a., 3 years, 3 months moratorium)
 * IF Project Cost > 1.40 lakh AND <= 50 lakh:
 *   Term Loan Scheme (8.0% p.a., 7 years, 6 months moratorium)
 * IF Project Cost > 50 lakh:
 *   Exceeds configured prototype scheme limit
 */
export function routeScheme(projectCost: number): SchemeDetails {
  if (projectCost <= 140000) {
    return {
      id: 'micro-finance-scheme',
      name: 'Micro Finance Scheme (PMMY Shishu / Mudra Tier 1)',
      nameHi: 'माइक्रो फाइनेंस योजना (मुद्रा शिशु / टियर 1)',
      eligible: true,
      interestRate: 6.5,
      tenureYears: 3,
      moratoriumMonths: 3,
      category: 'Micro Finance Scheme',
      descriptionEn: 'Tailored for small rural setups with quick disbursal and 3 months grace period.',
      descriptionHi: 'छोटे ग्रामीण व्यवसायों के लिए तुरंत स्वीकृति और 3 महीने की रियायती छूट के साथ।',
      subsidyEligible: true,
    };
  } else if (projectCost <= 5000000) {
    return {
      id: 'term-loan-scheme',
      name: 'Term Loan Scheme (PMMY Kishore-Tarun / CGTMSE Backed)',
      nameHi: 'सावधि ऋण योजना (मुद्रा किशोर-तरुण / सीजीटीएमएसई समर्थित)',
      eligible: true,
      interestRate: 8.0,
      tenureYears: 7,
      moratoriumMonths: 6,
      category: 'Term Loan Scheme',
      descriptionEn: 'Medium-to-long term project loan with 6 months moratorium for capital stabilization.',
      descriptionHi: 'मध्यम व बड़े प्रोजेक्ट हेतु 7 वर्षीय ऋण, जिसमें 6 महीने का व्यवसाय स्थिरीकरण अवकाश सम्मिलित है।',
      subsidyEligible: true,
    };
  } else {
    return {
      id: 'exceeds-limit-scheme',
      name: 'Special Enterprise Facility (Limit Warning)',
      nameHi: 'विशेष उद्यम ऋण सुविधा (सीमा पार चेतावनी)',
      eligible: false,
      interestRate: 9.25,
      tenureYears: 10,
      moratoriumMonths: 12,
      category: 'Exceeds Limit',
      descriptionEn: 'Project cost exceeds the configured prototype scheme limit of ₹50,00,000.',
      descriptionHi: 'प्रोजेक्ट लागत निर्धारित प्रोटोटाइप योजना सीमा (₹50,00,000) से अधिक है।',
      subsidyEligible: false,
    };
  }
}

/**
 * EMI Calculator:
 * EMI = P * r * (1+r)^n / ((1+r)^n - 1)
 *
 * For the prototype, assume moratorium interest is capitalized.
 * Effective Loan Amount = P + (P * r * moratoriumMonths)
 */
export function calculateEMI(
  principal: number,
  annualInterestRate: number,
  tenureYears: number,
  moratoriumMonths: number = 0
): { emi: number; totalInterest: number; totalRepayment: number; effectivePrincipal: number } {
  if (principal <= 0) {
    return { emi: 0, totalInterest: 0, totalRepayment: 0, effectivePrincipal: 0 };
  }

  const monthlyRate = annualInterestRate / (12 * 100);
  const totalMonths = tenureYears * 12;

  // Capitalize moratorium simple interest into principal
  const capitalizedInterest = Math.round(principal * monthlyRate * moratoriumMonths);
  const effectivePrincipal = principal + capitalizedInterest;

  // Standard amortized formula
  const numerator = effectivePrincipal * monthlyRate * Math.pow(1 + monthlyRate, totalMonths);
  const denominator = Math.pow(1 + monthlyRate, totalMonths) - 1;
  const emi = Math.round(numerator / denominator);

  const totalRepayment = emi * totalMonths;
  const totalInterest = totalRepayment - principal;

  return {
    emi,
    totalInterest,
    totalRepayment,
    effectivePrincipal,
  };
}

/**
 * Generate quarterly repayment schedule:
 * Quarter, Opening Balance, Interest, Principal, Payment, Closing Balance
 */
export function generateRepaymentSchedule(
  principal: number,
  annualInterestRate: number,
  tenureYears: number,
  moratoriumMonths: number = 0
): RepaymentQuarter[] {
  const { emi, effectivePrincipal } = calculateEMI(principal, annualInterestRate, tenureYears, moratoriumMonths);
  if (effectivePrincipal <= 0) return [];

  const monthlyRate = annualInterestRate / (12 * 100);
  const totalQuarters = tenureYears * 4;
  const quarterlyPayment = emi * 3;

  const schedule: RepaymentQuarter[] = [];
  let balance = effectivePrincipal;

  for (let q = 1; q <= totalQuarters; q++) {
    const openingBalance = balance;
    // 3 months interest for the quarter
    const quarterInterest = Math.round(balance * (monthlyRate * 3));
    let quarterPrincipal = quarterlyPayment - quarterInterest;

    if (q === totalQuarters || quarterPrincipal > balance) {
      quarterPrincipal = balance;
    }

    const actualPayment = quarterInterest + quarterPrincipal;
    balance = Math.max(0, balance - quarterPrincipal);

    schedule.push({
      quarter: q,
      openingBalance,
      interest: quarterInterest,
      principal: quarterPrincipal,
      payment: actualPayment,
      closingBalance: balance,
    });

    if (balance <= 0) break;
  }

  return schedule;
}

/**
 * Master Financial Calculator helper
 */
export function computeFinancialAssessment(
  marginCapital: number,
  rawInput: string = ''
): FinancialCalculation {
  const projectCost = calculateProjectCost(marginCapital);
  const maximumLoan = calculateLoanAmount(projectCost);
  const scheme = routeScheme(projectCost);
  const exceedsLimit = projectCost > 5000000;

  const { emi, totalInterest, totalRepayment, effectivePrincipal } = calculateEMI(
    maximumLoan,
    scheme.interestRate,
    scheme.tenureYears,
    scheme.moratoriumMonths
  );

  const quarterlySchedule = generateRepaymentSchedule(
    maximumLoan,
    scheme.interestRate,
    scheme.tenureYears,
    scheme.moratoriumMonths
  );

  return {
    marginCapital,
    rawCapitalInput: rawInput || formatINR(marginCapital),
    normalizedDisplay: formatINR(marginCapital),
    projectCost,
    maximumLoan,
    scheme,
    monthlyEmi: emi,
    totalInterest,
    totalRepayment,
    effectivePrincipal,
    quarterlySchedule,
    exceedsLimit,
  };
}
