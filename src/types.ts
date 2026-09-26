export type Language =
  | 'en' // English
  | 'hi' // Hindi (हिंदी)
  | 'bn' // Bengali (বাংলা)
  | 'mr' // Marathi (मराठी)
  | 'te' // Telugu (తెలుగు)
  | 'ta' // Tamil (தமிழ்)
  | 'gu' // Gujarati (ગુજરાતી)
  | 'ur' // Urdu (اردو)
  | 'kn' // Kannada (ಕನ್ನಡ)
  | 'or' // Odia (ଓଡ଼ିଆ)
  | 'ml' // Malayalam (മലയാളം)
  | 'pa' // Punjabi (ਪੰਜਾਬੀ)
  | 'as' // Assamese (অসমীয়া)
  | 'mai' // Maithili (मैथिली)
  | 'sat' // Santali (ᱥᱟᱱᱛᱟᱲᱤ)
  | 'ks' // Kashmiri (كٲشُر / कॉशुर)
  | 'ne' // Nepali (नेपाली)
  | 'kok' // Konkani (कोंकणी)
  | 'sd' // Sindhi (سنڌي / सिंधी)
  | 'doi' // Dogri (डोगरी)
  | 'mni' // Manipuri (মৈতৈলোন্)
  | 'brx' // Bodo (बड़ो)
  | 'sa'; // Sanskrit (संस्कृतम्)

export type AppView = 'landing' | 'assessment' | 'feasibility' | 'financial' | 'report' | 'schemes' | 'architecture';

export type BusinessCategory =
  | 'grocery'
  | 'dairy'
  | 'poultry'
  | 'pharmacy'
  | 'clothing'
  | 'food_stall'
  | 'bakery'
  | 'mobile_repair'
  | 'hardware'
  | 'tailoring'
  | 'salon'
  | 'agriculture_inputs'
  | 'other';

export interface LocationData {
  state: string;
  district: string;
  block: string;
  village: string;
  pincode?: string;
}

export interface MarketReachMetrics {
  radiusKm: number;
  estimatedPopulation: number;
  nearbyVillages: number;
  nearbyMarkets: number;
  potentialCustomers: number;
  householdCount: number;
}

export interface OpportunityFactor {
  name: string;
  nameHi: string;
  score: number; // 0 - 100
  weight: number;
  reasonEn: string;
  reasonHi: string;
}

export interface CompetitorPin {
  id: string;
  name: string;
  type: string;
  distanceKm: number;
  rating: number;
  isDirect: boolean;
  notes: string;
  latOffset: number; // For static visual map
  lngOffset: number;
}

export interface DistributionChannel {
  name: string;
  nameHi: string;
  feasibility: 'High' | 'Medium' | 'Low';
  sharePercent: number;
  descriptionEn: string;
  descriptionHi: string;
  icon: string;
}

export interface ThreatItem {
  threat: string;
  threatHi: string;
  impact: 'Low' | 'Medium' | 'High';
  mitigation: string;
  mitigationHi: string;
}

export interface PricingAnalysis {
  productSample: string;
  productSampleHi: string;
  estimatedCost: number;
  localPriceMin: number;
  localPriceMax: number;
  suggestedPrice: number;
  estimatedMarginPercent: number;
}

export interface FeasibilityData {
  category: BusinessCategory;
  categoryName: string;
  marketReach5km: MarketReachMetrics;
  marketReach10km: MarketReachMetrics;
  opportunityScore: number;
  factors: OpportunityFactor[];
  scoreExplanationEn: string;
  scoreExplanationHi: string;
  distributionChannels: DistributionChannel[];
  competitors: CompetitorPin[];
  competitorDensity: 'Low' | 'Medium' | 'High';
  competitorCount: number;
  swot: {
    strengths: string[];
    strengthsHi: string[];
    weaknesses: string[];
    weaknessesHi: string[];
    opportunities: string[];
    opportunitiesHi: string[];
    threats: string[];
    threatsHi: string[];
  };
  threatsList: ThreatItem[];
  pricing: PricingAnalysis;
}

export interface SchemeDetails {
  id: string;
  name: string;
  nameHi: string;
  eligible: boolean;
  interestRate: number; // e.g. 6.5 or 8.0
  tenureYears: number; // e.g. 3 or 7
  moratoriumMonths: number; // e.g. 3 or 6
  category: 'Micro Finance Scheme' | 'Term Loan Scheme' | 'Exceeds Limit';
  descriptionEn: string;
  descriptionHi: string;
  subsidyEligible?: boolean;
}

export interface RepaymentQuarter {
  quarter: number;
  openingBalance: number;
  interest: number;
  principal: number;
  payment: number;
  closingBalance: number;
}

export interface FinancialCalculation {
  marginCapital: number;
  rawCapitalInput: string;
  normalizedDisplay: string;
  projectCost: number;
  maximumLoan: number;
  scheme: SchemeDetails;
  monthlyEmi: number;
  totalInterest: number;
  totalRepayment: number;
  effectivePrincipal: number; // after moratorium interest
  quarterlySchedule: RepaymentQuarter[];
  exceedsLimit: boolean;
}

export interface UserAssessmentState {
  location: LocationData;
  capitalInput: string;
  capitalAmount: number;
  category: BusinessCategory;
  customCategoryText?: string;
  businessDescription: string;
}

export interface ExplainContext {
  title: string;
  titleHi: string;
  subtitle: string;
  subtitleHi: string;
  formula?: string;
  steps: Array<{
    labelEn: string;
    labelHi: string;
    value: string;
    noteEn?: string;
    noteHi?: string;
  }>;
  aiRationaleEn: string;
  aiRationaleHi: string;
}

export type SchemeCategoryFilter = 'all' | 'retail_service' | 'agriculture_dairy' | 'manufacturing' | 'artisan';

export interface GovtSchemeInfo {
  id: string;
  code: string;
  name: string;
  nameHi: string;
  fullName: string;
  fullNameHi: string;
  ministry: string;
  ministryHi: string;
  nodalAgency: string;
  nodalAgencyHi: string;
  category: SchemeCategoryFilter;
  categoryLabelEn: string;
  categoryLabelHi: string;
  badge: string;
  badgeHi: string;
  loanLimit: string;
  loanLimitHi: string;
  maxProjectCost: number; // in INR
  maxLoanAmount: number; // in INR
  subsidyPercent: string;
  subsidyPercentHi: string;
  marginRequired: string;
  marginRequiredHi: string;
  interestRate: string;
  interestRateHi: string;
  tenure: string;
  tenureHi: string;
  moratorium: string;
  moratoriumHi: string;
  collateralFree: boolean;
  ruralBonus: boolean;
  womenSpecial: boolean;
  summaryEn: string;
  summaryHi: string;
  keyHighlightsEn: string[];
  keyHighlightsHi: string[];
  eligibilityEn: string[];
  eligibilityHi: string[];
  eligibleActivitiesEn: string[];
  eligibleActivitiesHi: string[];
  documentsRequiredEn: string[];
  documentsRequiredHi: string[];
  applicationProcessEn: string[];
  applicationProcessHi: string[];
  officialPortalUrl: string;
  officialPortalName: string;
  tollFreeNumber: string;
  targetBeneficiariesEn: string;
  targetBeneficiariesHi: string;
  calculatorConfig?: {
    minCost: number;
    maxCost: number;
    defaultCost: number;
    defaultMarginPercent: number;
    defaultSubsidyPercent: number;
    interestRatePercent: number;
    tenureYears: number;
  };
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: number;
  source?: 'gemini-3.8-flash' | 'local-advisor';
}
