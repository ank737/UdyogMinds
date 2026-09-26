import { GovtSchemeInfo } from '../types';

export const GOVT_SCHEMES: GovtSchemeInfo[] = [
  {
    id: 'pmmy',
    code: 'PMMY',
    name: 'Pradhan Mantri Mudra Yojana',
    nameHi: 'प्रधानमंत्री मुद्रा योजना (PMMY)',
    fullName: 'Pradhan Mantri Mudra Yojana (Shishu, Kishore, Tarun & Tarun Plus)',
    fullNameHi: 'प्रधानमंत्री मुद्रा योजना (शिशु, किशोर, तरुण एवं तरुण प्लस)',
    ministry: 'Ministry of Finance / Department of Financial Services (DFS)',
    ministryHi: 'वित्त मंत्रालय / वित्तीय सेवाएं विभाग (भारत सरकार)',
    nodalAgency: 'MUDRA Ltd. / Scheduled Commercial Banks, RRBs, SFBs & MFIs',
    nodalAgencyHi: 'मुद्रा लिमिटेड / सभी वाणिज्यिक, ग्रामीण एवं लघु वित्त बैंक',
    category: 'retail_service',
    categoryLabelEn: 'Retail & Micro-Enterprises',
    categoryLabelHi: 'खुदरा व सूक्ष्म उद्यम',
    badge: 'Zero Collateral Guaranteed',
    badgeHi: 'बिना किसी गारंटी / बंधक के',
    loanLimit: 'Up to ₹20.00 Lakh (Tiered: Shishu ₹50K, Kishore ₹5L, Tarun ₹10L, Tarun Plus ₹20L)',
    loanLimitHi: '₹20 लाख तक (शिशु ₹50,000, किशोर ₹5 लाख, तरुण ₹10 लाख, तरुण प्लस ₹20 लाख)',
    maxProjectCost: 2000000,
    maxLoanAmount: 2000000,
    subsidyPercent: 'Interest Subvention on prompt repayment; No direct capital subsidy',
    subsidyPercentHi: 'समय पर भुगतान पर ब्याज छूट; सीधा पूंजीगत अनुदान नहीं',
    marginRequired: '0% for Shishu (up to ₹50K); 10% - 15% for Kishore & Tarun',
    marginRequiredHi: 'शिशु के लिए 0%; किशोर व तरुण के लिए 10% से 15%',
    interestRate: '8.00% – 11.50% p.a. (linked to MCLR / EBLR benchmark)',
    interestRateHi: '8.00% से 11.50% वार्षिक (बैंक के आधार दर अनुसार)',
    tenure: '3 to 5 Years (extendable up to 7 years based on cash flow)',
    tenureHi: '3 से 5 वर्ष (कैश-फ्लो के आधार पर 7 वर्ष तक)',
    moratorium: '3 to 6 Months grace period',
    moratoriumHi: '3 से 6 महीने की प्रारंभिक छूट',
    collateralFree: true,
    ruralBonus: true,
    womenSpecial: true,
    summaryEn: 'Flagship central government scheme providing formal institutional loans up to ₹20 Lakh to non-farm, non-corporate micro and small enterprises without third-party collateral or property mortgage.',
    summaryHi: 'गैर-कृषि, गैर-कॉर्पोरेट ग्रामीण व अर्ध-शहरी सूक्ष्म व्यवसायों को बिना किसी संपत्ति बंधक या तीसरे व्यक्ति की गारंटी के ₹20 लाख तक संस्थागत बैंक ऋण उपलब्ध कराने वाली प्रमुख योजना।',
    keyHighlightsEn: [
      'Covered by Credit Guarantee Fund for Micro Units (CGFMU) - 100% guarantee to lending banks',
      'Mudra Debit Card issued for seamless working capital drawdowns and digital transactions',
      'Available across 4 structured tiers: Shishu (₹50k), Kishore (₹50k - ₹5L), Tarun (₹5L - ₹10L), Tarun Plus (₹10L - ₹20L)',
      'Zero processing fee for Shishu and Kishore loans at public sector banks',
      'Encourages women entrepreneurs through special 0.25% interest concession at several public banks'
    ],
    keyHighlightsHi: [
      'सूक्ष्म इकाई क्रेडिट गारंटी फंड (CGFMU) द्वारा संरक्षित - बैंक को 100% सुरक्षा',
      'कार्यशील पूंजी की दैनिक निकासी के लिए रूपे मुद्रा डेबिट कार्ड की सुविधा',
      '4 स्तरों में उपलब्ध: शिशु (₹50,000 तक), किशोर (₹5 लाख तक), तरुण (₹10 लाख तक), तरुण प्लस (₹20 लाख तक)',
      'सार्वजनिक क्षेत्र के बैंकों में शिशु व किशोर ऋण पर शून्य प्रोसेसिंग फीस',
      'महिला उद्यमियों को विभिन्न बैंकों में ब्याज दर में 0.25% तक की विशेष छूट'
    ],
    eligibilityEn: [
      'Any Indian citizen having a viable business idea for non-farm income generation',
      'Age: Minimum 18 years; no rigid upper limit if business is operational',
      'No formal educational qualifications mandated for Shishu tier',
      'Borrower must not be a defaulter with any formal financial institution or bank',
      'Applicable for both greenfield (new setup) and brownfield (expansion/modernization)'
    ],
    eligibilityHi: [
      'कोई भी भारतीय नागरिक जिसके पास गैर-कृषि आय सृजन का व्यावहारिक व्यावसायिक विचार हो',
      'आयु: न्यूनतम 18 वर्ष; व्यवसाय सक्रिय होने पर कोई सख्त अधिकतम आयु सीमा नहीं',
      'शिशु श्रेणी के लिए किसी औपचारिक शैक्षणिक योग्यता की बाध्यता नहीं',
      'आवेदक किसी भी बैंक या वित्तीय संस्था का डिफॉल्टर नहीं होना चाहिए',
      'नए व्यवसाय की स्थापना तथा मौजूदा व्यवसाय के विस्तार दोनों के लिए मान्य'
    ],
    eligibleActivitiesEn: [
      'Village Grocery, Kirana Stores & General Merchants',
      'Medical Stores, Rural Chemist Shops & Diagnostics',
      'Apparel, Cloth Stores, Ready-made Garments & Tailoring',
      'Hardware, Electrical, Electronics & Mobile Repair Outlets',
      'Rural Transport (e-rickshaws, small goods carriers, tractors for commercial use)',
      'Bakeries, Dhabas, Sweet Stalls, Catering & Food Outlets'
    ],
    eligibleActivitiesHi: [
      'गांव के किराना स्टोर, जनरल मर्चेंट व राशन की दुकानें',
      'दवा की दुकानें (केमिस्ट) व ग्रामीण क्लीनिक उपकरण',
      'कपड़ा दुकानें, सिलाई केंद्र, बुटीक व रेडीमेड वस्त्र भंडार',
      'हार्डवेयर, बिजली सामान, मोबाइल मरम्मत व इलेक्ट्रॉनिक्स दुकान',
      'ग्रामीण परिवहन (ई-रिक्शा, छोटा हाथी/पिकअप, मालवाहक वाहन)',
      'बेकरी, ढाबा, मिठाई की दुकान, चाय-नाश्ता स्टॉल'
    ],
    documentsRequiredEn: [
      'Aadhaar Card and PAN Card of the applicant',
      'Proof of Residence (Voter ID, Ration Card, Domicile Certificate or Utility Bill)',
      'Proof of Business Identity / Address (Udyam Registration, Gram Panchayat NOC, Trade License)',
      'Bank Account Statement for the last 6 months (for Kishore & Tarun tiers)',
      'Quotation / Proforma Invoice of machinery, equipment, or stock to be purchased',
      'Passport size photographs (2 copies)'
    ],
    documentsRequiredHi: [
      'आवेदक का आधार कार्ड और पैन कार्ड',
      'निवास प्रमाण पत्र (मतदाता पहचान पत्र, राशन कार्ड, मूल निवास या बिजली बिल)',
      'व्यवसाय पहचान / पता प्रमाण (उद्यम आधार, ग्राम पंचायत अनापत्ति प्रमाण पत्र)',
      'पिछले 6 महीने का बैंक खाता विवरण (किशोर व तरुण ऋण के लिए)',
      'खरीदे जाने वाले सामान, मशीनरी या स्टॉक का कच्चा बिल / कोटेशन',
      'पासपोर्ट आकार की 2 रंगीन फोटो'
    ],
    applicationProcessEn: [
      'Step 1: Obtain Udyam Registration (free online on udyamregistration.gov.in)',
      'Step 2: Log into the official JanSamarth portal (www.jansamarth.in) or visit your nearest Bank branch / CSC center',
      'Step 3: Select "Business Activity Loan" and choose "Pradhan Mantri Mudra Yojana"',
      'Step 4: Fill applicant KYC details, village address, and upload quotation of required assets',
      'Step 5: Get in-principle digital approval letter and submit hard copies to the assigned branch manager for sanction & disbursement'
    ],
    applicationProcessHi: [
      'चरण 1: उद्यम रजिस्ट्रेशन प्राप्त करें (udyamregistration.gov.in पर मुफ्त व तुरंत)',
      'चरण 2: सरकारी जनसमर्थ पोर्टल (www.jansamarth.in) पर जाएं या नजदीकी बैंक शाखा / सीएससी केंद्र जाएं',
      'चरण 3: "Business Activity Loan" चुनकर प्रधानमंत्री मुद्रा योजना का चयन करें',
      'चरण 4: आधार, पैन, गांव का पता व मशीनरी/स्टॉक का कोटेशन अपलोड करें',
      'चरण 5: ऑनलाइन सैद्धांतिक स्वीकृति पत्र प्राप्त कर बैंक शाखा में मूल दस्तावेज सत्यापित कराकर ऋण प्राप्त करें'
    ],
    officialPortalUrl: 'https://www.jansamarth.in',
    officialPortalName: 'JanSamarth National Credit Portal',
    tollFreeNumber: '1800-180-1111 / 1800-11-0001',
    targetBeneficiariesEn: 'Rural retail shopkeepers, artisans, small traders, transport operators, and micro-manufacturers.',
    targetBeneficiariesHi: 'ग्रामीण दुकानदार, छोटे व्यापारी, कारीगर, वाहन चालक तथा सेवा प्रदाता।',
    calculatorConfig: {
      minCost: 50000,
      maxCost: 2000000,
      defaultCost: 500000,
      defaultMarginPercent: 10,
      defaultSubsidyPercent: 0,
      interestRatePercent: 8.5,
      tenureYears: 5
    }
  },
  {
    id: 'pmegp',
    code: 'PMEGP',
    name: "Prime Minister's Employment Generation Programme",
    nameHi: "प्रधानमंत्री रोजगार सृजन कार्यक्रम (PMEGP)",
    fullName: "Prime Minister's Employment Generation Programme (PMEGP Credit Linked Subsidy)",
    fullNameHi: "प्रधानमंत्री रोजगार सृजन कार्यक्रम (PMEGP पूंजीगत सब्सिडी योजना)",
    ministry: 'Ministry of Micro, Small and Medium Enterprises (MoMSME)',
    ministryHi: 'सूक्ष्म, लघु एवं मध्यम उद्यम मंत्रालय (भारत सरकार)',
    nodalAgency: 'KVIC (Khadi and Village Industries Commission) / State KVIB / DIC',
    nodalAgencyHi: 'खादी और ग्रामोद्योग आयोग (KVIC) / जिला उद्योग केंद्र (DIC)',
    category: 'manufacturing',
    categoryLabelEn: 'Manufacturing & Service Units',
    categoryLabelHi: 'विनिर्माण व सेवा उद्यम',
    badge: 'Up to 35% Govt Capital Subsidy',
    badgeHi: '35% तक सरकारी पूंजीगत अनुदान (सब्सिडी)',
    loanLimit: 'Up to ₹50 Lakh for Manufacturing; Up to ₹20 Lakh for Service / Business',
    loanLimitHi: 'विनिर्माण के लिए ₹50 लाख तक; सेवा व व्यापार के लिए ₹20 लाख तक',
    maxProjectCost: 5000000,
    maxLoanAmount: 4750000,
    subsidyPercent: 'Rural Special (Women/SC/ST/OBC/Minority): 35% | Rural General: 25%',
    subsidyPercentHi: 'ग्रामीण विशेष वर्ग (महिला/SC/ST/OBC): 35% | ग्रामीण सामान्य: 25%',
    marginRequired: '5% for Special Category (SC/ST/OBC/Women); 10% for General Category',
    marginRequiredHi: 'विशेष श्रेणी (महिला/SC/ST/OBC) के लिए 5%; सामान्य वर्ग के लिए 10%',
    interestRate: '8.50% – 10.50% p.a. (standard commercial lending rates)',
    interestRateHi: '8.50% से 10.50% वार्षिक',
    tenure: '3 to 7 Years (including moratorium)',
    tenureHi: '3 से 7 वर्ष (मोराटोरियम सहित)',
    moratorium: '6 to 12 Months initial moratorium on principal repayment',
    moratoriumHi: '6 से 12 महीने का मोराटोरियम (मूलधन अदायगी में छूट)',
    collateralFree: true,
    ruralBonus: true,
    womenSpecial: true,
    summaryEn: 'One of India\'s largest credit-linked subsidy schemes where the Government pays up to 35% of your total project cost as a direct financial grant (Margin Money subsidy), making micro-manufacturing highly viable.',
    summaryHi: 'भारत की सबसे लोकप्रिय क्रेडिट-लिंक्ड सब्सिडी योजना जिसमें केंद्र सरकार आपकी कुल प्रोजेक्ट लागत का 35% तक का हिस्सा सीधे अनुदान (सब्सिडी) के रूप में वहन करती है जिसे वापस नहीं लौटाना होता।',
    keyHighlightsEn: [
      'Tremendous capital subsidy: 35% for rural special categories (Women, SC, ST, OBC, Ex-Servicemen, Differently-abled)',
      'Subsidized funds are kept in a Term Deposit Receipt (TDR) for 3 years without interest charge, then credited to loan account',
      'No collateral security required for project outlays up to ₹10 Lakh (covered under CGTMSE)',
      'Entrepreneurship Development Programme (EDP) training provided free of cost',
      'Second loan up to ₹1 Crore for existing high-performing PMEGP units with 15% subsidy'
    ],
    keyHighlightsHi: [
      'ग्रामीण विशेष वर्ग (महिलाएं, SC, ST, OBC) के लिए प्रोजेक्ट लागत का 35% सीधा सरकारी अनुदान',
      'सब्सिडी राशि 3 साल तक बैंक में टीडीआर (TDR) के रूप में सुरक्षित रखी जाती है और बाद में खाते में जमा हो जाती है',
      '₹10 लाख तक के ऋण पर बिना किसी बैंक गारंटी (CGTMSE गारंटी कवर)',
      'उद्यमिता विकास प्रशिक्षण (EDP ट्रेनिंग) सरकार द्वारा मुफ्त में उपलब्ध कराया जाता है',
      'अच्छा प्रदर्शन करने वाली इकाइयों को ₹1 करोड़ तक का दूसरा ऋण 15% सब्सिडी के साथ'
    ],
    eligibilityEn: [
      'Age: Minimum 18 years. No upper age ceiling',
      'Educational Qualification: Minimum 8th class pass for projects above ₹10 Lakh in manufacturing and above ₹5 Lakh in services',
      'Only for new (greenfield) enterprise projects; existing units not eligible for first loan',
      'Only one person from a single household (family) can avail PMEGP subsidy',
      'Self Help Groups (SHGs) and Charitable Trusts not registered under any other subsidy scheme are also eligible'
    ],
    eligibilityHi: [
      'आयु: न्यूनतम 18 वर्ष; कोई ऊपरी आयु सीमा नहीं',
      'शैक्षणिक योग्यता: विनिर्माण में ₹10 लाख से अधिक तथा सेवा में ₹5 लाख से अधिक के प्रोजेक्ट के लिए कम से कम 8वीं पास',
      'केवल नए (Greenfield) उद्यमों के लिए मान्य; पहले से चल रही इकाइयों को पहली बार में लाभ नहीं',
      'एक परिवार से केवल एक सदस्य ही PMEGP सब्सिडी प्राप्त कर सकता है',
      'स्वयं सहायता समूह (SHG) जिन्होंने किसी अन्य योजना का लाभ न लिया हो वे भी पात्र हैं'
    ],
    eligibleActivitiesEn: [
      'Agro & Food Processing (Flour Mills / Atta Chakki, Oil Expeller, Rice Mills, Spice Grinding)',
      'Forest & Wood Based Industry (Carpentry, Furniture, Bamboo craft, Honey processing)',
      'Rural Engineering & Workshop (Fabrication, Welding, Motor rewinding, Agri-implement repair)',
      'Textiles & Apparel (Readymade Garment manufacturing, Powerloom/Handloom weaving, Embroidery)',
      'Mineral & Chemical products (Fly ash bricks, detergent making, agarbatti manufacturing)',
      'Service sector (Vehicle Service Centers, Cyber Cafe / CSC, Cold storage transport)'
    ],
    eligibleActivitiesHi: [
      'कृषि व खाद्य प्रसंस्करण (आटा चक्की, तेल एक्सपेलर, दाल मिल, मसाला पिसाई, पोहा निर्माण)',
      'लकड़ी व वनोपज (फर्नीचर निर्माण, बढ़ईगीरी, बांस के उत्पाद, शहद प्रसंस्करण)',
      'इंजीनियरिंग व फैब्रिकेशन (वेल्डिंग वर्कशॉप, कृषि यंत्र मरम्मत, मोटर रिवाइंडिंग)',
      'वस्त्र निर्माण (रेडीमेड गारमेंट सिलाई फैक्ट्री, कढ़ाई व बुनाई केंद्र)',
      'घरेलू उत्पाद (अगरबत्ती निर्माण, साबुन व सर्फ निर्माण, सीमेंट ईंट भट्ठा)',
      'सेवा क्षेत्र (ऑटोमोबाइल सर्विस सेंटर, फोटो स्टूडियो व डिजिटल सेवा केंद्र)'
    ],
    documentsRequiredEn: [
      'Aadhaar Card, PAN Card and Rural Residence Certificate',
      'Caste / Category Certificate (SC/ST/OBC/Minority/PH/Ex-Servicemen) for 35% rural subsidy claim',
      'Highest Educational Qualification Certificate / 8th Marksheet',
      'Detailed Project Report (DPR) showing machinery cost, working capital, and expected revenue',
      'Machinery Quotations from registered equipment vendors with GST numbers',
      'Rural Area Certificate issued by Gram Panchayat / Block Development Officer (BDO)'
    ],
    documentsRequiredHi: [
      'आधार कार्ड, पैन कार्ड तथा मूल निवास प्रमाण पत्र',
      'जाति प्रमाण पत्र (SC/ST/OBC) या महिला/दिव्यांग प्रमाण पत्र (35% सब्सिडी का लाभ पाने हेतु)',
      'शैक्षणिक योग्यता प्रमाण पत्र (कम से कम 8वीं पास की अंकतालिका)',
      'विस्तृत प्रोजेक्ट रिपोर्ट (DPR) जिसमें मशीनरी लागत व लाभ का अनुमान हो',
      'मशीनरी विक्रेताओं का जीएसटी सहित पक्का कोटेशन',
      'ग्राम पंचायत या बीडीओ (BDO) द्वारा जारी ग्रामीण क्षेत्र प्रमाण पत्र'
    ],
    applicationProcessEn: [
      'Step 1: Visit the official KVIC PMEGP e-Portal (www.kviconline.gov.in/pmegpeportal)',
      'Step 2: Click on "Online Application for Individual" and fill Aadhaar verification & personal profile',
      'Step 3: Select Sponsoring Agency: KVIC, KVIB, or District Industries Centre (DIC)',
      'Step 4: Enter project financial details (Machinery cost + Working Capital) and upload DPR & quotations',
      'Step 5: Application is scrutinized by District Level Task Force Committee (DLTFC) and forwarded to the preferred financing bank'
    ],
    applicationProcessHi: [
      'चरण 1: केवीआईसी PMEGP आधिकारिक ई-पोर्टल (www.kviconline.gov.in/pmegpeportal) पर जाएं',
      'चरण 2: "Online Application for Individual" पर क्लिक कर आधार कार्ड नंबर दर्ज करें',
      'चरण 3: प्रायोजक एजेंसी चुनें: DIC (जिला उद्योग केंद्र) या KVIC',
      'चरण 4: प्रोजेक्ट का ब्यौरा (मशीन लागत + कार्यशील पूंजी) भरें और प्रोजेक्ट रिपोर्ट व कोटेशन अपलोड करें',
      'चरण 5: जिला स्तरीय टास्क फोर्स कमेटी (DLTFC) द्वारा आवेदन की जांच के बाद बैंक को ऋण स्वीकृति हेतु भेजा जाता है'
    ],
    officialPortalUrl: 'https://www.kviconline.gov.in/pmegpeportal',
    officialPortalName: 'KVIC PMEGP e-Portal & JanSamarth',
    tollFreeNumber: '1800-3000-0034 / 022-26711000',
    targetBeneficiariesEn: 'Unemployed rural youth, traditional artisans, women entrepreneurs, and rural micro-manufacturers.',
    targetBeneficiariesHi: 'ग्रामीण बेरोजगार युवा, महिला उद्यमी, कारीगर तथा विनिर्माण उद्योग लगाने के इच्छुक उद्यमी।',
    calculatorConfig: {
      minCost: 100000,
      maxCost: 5000000,
      defaultCost: 1000000,
      defaultMarginPercent: 5,
      defaultSubsidyPercent: 35,
      interestRatePercent: 9.0,
      tenureYears: 7
    }
  },
  {
    id: 'pmfme',
    code: 'PMFME',
    name: 'PM Formalisation of Micro Food Processing Enterprises',
    nameHi: 'प्रधानमंत्री सूक्ष्म खाद्य उद्योग उन्नयन योजना (PMFME)',
    fullName: 'Pradhan Mantri Formalisation of Micro Food Processing Enterprises Scheme',
    fullNameHi: 'प्रधानमंत्री सूक्ष्म खाद्य उद्योग उन्नयन योजना (PMFME)',
    ministry: 'Ministry of Food Processing Industries (MoFPI)',
    ministryHi: 'खाद्य प्रसंस्करण उद्योग मंत्रालय (भारत सरकार)',
    nodalAgency: 'State Nodal Agencies (SNA) / District Resource Persons (DRP) / Commercial Banks',
    nodalAgencyHi: 'राज्य खाद्य प्रसंस्करण मिशन / जिला रिसोर्स पर्सन (DRP) व बैंक',
    category: 'manufacturing',
    categoryLabelEn: 'Food Processing & Agro Units',
    categoryLabelHi: 'खाद्य प्रसंस्करण व कृषि उत्पाद',
    badge: '35% Credit-Linked Subsidy (Max ₹10L)',
    badgeHi: '35% पूंजीगत सब्सिडी (अधिकतम ₹10 लाख)',
    loanLimit: 'Up to ₹30 Lakh project outlay with 35% capital subsidy capped at ₹10 Lakh',
    loanLimitHi: '₹30 लाख तक प्रोजेक्ट पर 35% अनुदान (अधिकतम ₹10 लाख तक सरकारी सब्सिडी)',
    maxProjectCost: 3000000,
    maxLoanAmount: 2700000,
    subsidyPercent: '35% of the eligible project cost (Maximum ceiling: ₹10,00,000)',
    subsidyPercentHi: 'पात्र प्रोजेक्ट लागत का 35% (अधिकतम सीमा: ₹10,00,000)',
    marginRequired: '10% minimum promoter margin contribution',
    marginRequiredHi: 'कम से कम 10% उद्यमी का स्वयं का अंशदान',
    interestRate: '8.25% – 9.75% p.a. (priority sector agri-lending rates)',
    interestRateHi: '8.25% से 9.75% वार्षिक',
    tenure: '5 to 7 Years',
    tenureHi: '5 से 7 वर्ष',
    moratorium: '6 to 12 Months',
    moratoriumHi: '6 से 12 महीने की छूट',
    collateralFree: true,
    ruralBonus: true,
    womenSpecial: true,
    summaryEn: 'A central initiative under Atmanirbhar Bharat to upgrade informal rural food processors into formal, branded, hygienic packaging businesses with 35% capital subsidy up to ₹10 Lakh and free branding assistance.',
    summaryHi: 'आत्मनिर्भर भारत अभियान के अंतर्गत असंगठित ग्रामीण खाद्य उत्पादकों (मसाला, तेल, अचार, पापड़, बेकरी, आटा) को 35% सब्सिडी (₹10 लाख तक) देकर आधुनिक व ब्रांडेड खाद्य उद्यम में बदलने की योजना।',
    keyHighlightsEn: [
      'Direct 35% capital subsidy credited to beneficiary bank account up to ₹10,00,000',
      'Free handholding support from government-appointed District Resource Persons (DRP) for DPR preparation and bank loan filing',
      'Assistance for FSSAI registration, packaging, branding, and barcoding',
      'One District One Product (ODOP) focused, but non-ODOP existing enterprises are also eligible',
      'Seed capital of ₹40,000 per member provided for SHG women engaged in food processing'
    ],
    keyHighlightsHi: [
      'बैंक खाते में 35% पूंजीगत सब्सिडी (अधिकतम ₹10 लाख) का सीधा क्रेडिट',
      'जिला रिसोर्स पर्सन (DRP) द्वारा डीपीआर बनाने, दस्तावेज तैयार करने व बैंक लोन के लिए मुफ्त सहायता',
      'FSSAI खाद्य लाइसेंस, पैकेजिंग, ब्रांडिंग व बारकोडिंग के लिए वित्तीय व तकनीकी सहायता',
      'एक जिला एक उत्पाद (ODOP) को प्राथमिकता, परंतु अन्य खाद्य इकाइयां भी पात्र',
      'खाद्य प्रसंस्करण से जुड़ी SHG महिलाओं को ₹40,000 प्रति सदस्य प्रारंभिक बीज पूंजी'
    ],
    eligibilityEn: [
      'Individual micro-food processors, Farmer Producer Organizations (FPOs), SHGs, and Producer Cooperatives',
      'Applicant should be an Indian resident aged 18 years or above',
      'Existing informal food processing units upgrading technology or new greenfield units under ODOP',
      'Must have ownership or registered lease agreement for enterprise premises',
      'Willingness to achieve formal FSSAI food safety compliance within 1 year'
    ],
    eligibilityHi: [
      'व्यक्तिगत सूक्ष्म खाद्य प्रसंस्करणकर्ता, किसान उत्पादक संगठन (FPO), महिला स्वयं सहायता समूह',
      'आवेदक भारतीय नागरिक हो तथा आयु 18 वर्ष से अधिक हो',
      'पहले से कार्यरत असंगठित खाद्य इकाइयां जो आधुनिक मशीन लगाना चाहती हैं, या नए ODOP प्रोजेक्ट',
      'दुकान / शेड का स्वामित्व या पंजीकृत किराया अनुबंध होना चाहिए',
      '1 वर्ष के भीतर FSSAI खाद्य सुरक्षा लाइसेंस लेने की सहमति'
    ],
    eligibleActivitiesEn: [
      'Oil Expeller Units (Mustard oil, groundnut, sesame, sunflower extraction)',
      'Spice Processing & Powdering (Turmeric, chili, coriander, garam masala packaging)',
      'Flour Mills & Grain Processing (Atta, Besan, Sattu, Suji, Daliya, Rice flakes/Poha)',
      'Pickle, Murabba, Chutney, Jam & Fruit Pulp preservation units',
      'Dairy Processing (Paneer making, Ghee packaging, Khoa/Mawa, Curd/Chhach packaging)',
      'Bakery & Snack Units (Rusk, Cookies, Namkeen, Chips, Roasted snacks)'
    ],
    eligibleActivitiesHi: [
      'तेल मिल व एक्सपेलर (सरसों, मूंगफली, तिल तेल निष्कर्षण व पैकिंग)',
      'मसाला उद्योग (हल्दी, धनिया, मिर्च पिसाई व आधुनिक पैकेजिंग)',
      'अनाज प्रसंस्करण (आटा, बेसन, सत्तू, सूजी, दलिया, पोहा मिल)',
      'अचार, मुरब्बा, चटनी, सिरका व फल गूदा (पल्प) प्रसंस्करण',
      'दुग्ध प्रसंस्करण (पनीर निर्माण, शुद्ध घी पैकिंग, खोया/मावा, छाछ पैकिंग)',
      'बेकरी व नमकीन उद्योग (टोस्ट, बिस्कुट, भुजिया, मक्का/आलू चिप्स)'
    ],
    documentsRequiredEn: [
      'Aadhaar Card and PAN Card of the promoter',
      'Electricity Bill / Land Title / Rent agreement of manufacturing premises',
      'Quotations of Food Processing Machinery from ISO / GST registered suppliers',
      'Existing turnover proof (if brownfield unit) or Bank Statement for last 6 months',
      'FSSAI Registration / Basic food safety declaration (or undertaking to apply)'
    ],
    documentsRequiredHi: [
      'उद्यमी का आधार कार्ड और पैन कार्ड',
      'इकाई स्थल का बिजली बिल, जमीन के कागज या रेंट एग्रीमेंट',
      'खाद्य प्रसंस्करण मशीनरी का जीएसटी पंजीकृत विक्रेता से पक्का कोटेशन',
      'पिछले 6 महीने का बैंक स्टेटमेंट',
      'FSSAI बेसिक खाद्य लाइसेंस या आवेदन करने का शपथ पत्र'
    ],
    applicationProcessEn: [
      'Step 1: Visit the PMFME official portal at pmfme.mofpi.gov.in',
      'Step 2: Register with Mobile & Email; select District and District Resource Person (DRP)',
      'Step 3: Upload KYC, machine quotation, and enterprise details with DRP assistance',
      'Step 4: State Nodal Agency reviews the dossier and routes it to the designated bank branch',
      'Step 5: Bank sanctions credit; capital subsidy is sanctioned by MoFPI and adjusted in loan'
    ],
    applicationProcessHi: [
      'चरण 1: PMFME की आधिकारिक वेबसाइट pmfme.mofpi.gov.in पर जाएं',
      'चरण 2: मोबाइल नंबर से रजिस्टर करें और अपने जिले के DRP (रिसोर्स पर्सन) को चुनें',
      'चरण 3: DRP की सहायता से मशीन कोटेशन और प्रोजेक्ट का विवरण ऑनलाइन अपलोड करें',
      'चरण 4: राज्य नोडल एजेंसी सत्यापन कर आपकी पसंदीदा बैंक शाखा को फाइल भेजती है',
      'चरण 5: बैंक द्वारा ऋण स्वीकृति के बाद 35% सरकारी सब्सिडी बैंक खाते में समायोजित की जाती है'
    ],
    officialPortalUrl: 'https://pmfme.mofpi.gov.in',
    officialPortalName: 'MoFPI PMFME Portal',
    tollFreeNumber: '1800-11-2673 / 011-26492212',
    targetBeneficiariesEn: 'Rural food artisans, pickle & spice makers, oil millers, dairy product processors, and women SHG groups.',
    targetBeneficiariesHi: 'ग्रामीण खाद्य उत्पादक, आटा चक्की मालिक, तेल मिलर, मसाला उद्यमी व स्वयं सहायता समूह।',
    calculatorConfig: {
      minCost: 100000,
      maxCost: 3000000,
      defaultCost: 1000000,
      defaultMarginPercent: 10,
      defaultSubsidyPercent: 35,
      interestRatePercent: 8.5,
      tenureYears: 5
    }
  },
  {
    id: 'pm-vishwakarma',
    code: 'PM-VISHWAKARMA',
    name: 'PM Vishwakarma Scheme',
    nameHi: 'पीएम विश्वकर्मा योजना',
    fullName: 'Pradhan Mantri Vishwakarma Kaushal Samman Yojana',
    fullNameHi: 'प्रधानमंत्री विश्वकर्मा कौशल सम्मान योजना (पारंपरिक कारीगर व शिल्पकार)',
    ministry: 'Ministry of MSME & Ministry of Skill Development and Entrepreneurship',
    ministryHi: 'सूक्ष्म, लघु एवं मध्यम उद्यम मंत्रालय तथा कौशल विकास मंत्रालय',
    nodalAgency: 'MSME / NSDC / Scheduled Commercial Banks',
    nodalAgencyHi: 'एमएसएमई / राष्ट्रीय कौशल विकास निगम (NSDC) व बैंक',
    category: 'artisan',
    categoryLabelEn: 'Traditional Artisans & Craftsmen',
    categoryLabelHi: 'पारंपरिक कारीगर व शिल्पकार',
    badge: 'Concessional 5% Fixed Interest',
    badgeHi: 'मात्र 5% ब्याज दर + ₹15,000 टूलकिट अनुदान',
    loanLimit: 'Up to ₹3.00 Lakh in two tranches (Tranche 1: ₹1 Lakh, Tranche 2: ₹2 Lakh)',
    loanLimitHi: '₹3.00 लाख तक (प्रथम किस्त: ₹1 लाख, द्वितीय किस्त: ₹2 लाख)',
    maxProjectCost: 300000,
    maxLoanAmount: 300000,
    subsidyPercent: '8% Interest Subvention (Borrower pays only 5%) + ₹15,000 Free Toolkit Voucher',
    subsidyPercentHi: '8% ब्याज अनुदान (उद्यमी को केवल 5% ब्याज देना है) + ₹15,000 का मुफ्त टूलकिट वाउचर',
    marginRequired: '0% promoter margin required (100% financed)',
    marginRequiredHi: '0% अंशदान (100% बैंक द्वारा वित्तपोषित)',
    interestRate: 'Flat 5.00% p.a. subsidized rate (rest 8% borne by Central Govt)',
    interestRateHi: 'सटीक 5.00% वार्षिक रियायती ब्याज दर (बाकी 8% केंद्र सरकार भरती है)',
    tenure: 'Tranche 1: 18 Months; Tranche 2: 30 Months',
    tenureHi: 'प्रथम किस्त: 18 महीने; द्वितीय किस्त: 30 महीने',
    moratorium: '3 to 6 Months',
    moratoriumHi: '3 से 6 महीने की छूट',
    collateralFree: true,
    ruralBonus: true,
    womenSpecial: true,
    summaryEn: 'Comprehensive social-economic scheme for 18 traditional family trades and crafts providing PM Vishwakarma ID card, 5-7 days skill training with ₹500/day stipend, ₹15,000 modern toolkit grant, and collateral-free loan up to ₹3 Lakh at only 5% interest.',
    summaryHi: '18 पारंपरिक पारिवारिक व्यवसायों व शिल्पकारों के लिए समर्पित योजना, जिसमें डिजिटल पहचान पत्र, ₹500 दैनिक भत्ते के साथ 5-7 दिन का प्रशिक्षण, ₹15,000 का आधुनिक टूलकिट वाउचर तथा केवल 5% ब्याज पर ₹3 लाख का बंधक-मुक्त ऋण मिलता है।',
    keyHighlightsEn: [
      'Borrower pays only flat 5% interest rate; Government pays up to 8% interest subvention',
      'Free modern toolkit e-voucher worth ₹15,000 via UPI / Digital voucher to buy professional tools',
      '5 to 7 days Basic Skill Training with daily stipend of ₹500 credited to bank account',
      'Digital incentive of ₹1 per transaction for up to 100 digital transactions monthly',
      'Zero processing fee, zero stamp duty, and zero collateral security required'
    ],
    keyHighlightsHi: [
      'उद्यमी को केवल 5% वार्षिक ब्याज देना होता है, शेष 8% ब्याज भारत सरकार वहन करती है',
      'पेशेवर औजार खरीदने हेतु ₹15,000 का डिजिटल टूलकिट ई-वाउचर मुफ्त',
      '5 से 7 दिनों का बुनियादी प्रशिक्षण और ₹500 प्रतिदिन का नकद वजीफा (Stipend)',
      'प्रति डिजिटल लेनदेन ₹1 का प्रोत्साहन (महीने में 100 लेनदेन तक ₹100 अतिरिक्त लाभ)',
      'बिना किसी गारंटी (Collateral-Free) तथा शून्य प्रोसेसिंग फीस'
    ],
    eligibilityEn: [
      'Artisan engaged in one of the 18 eligible traditional family trades using hands and tools',
      'Age: Minimum 18 years on the date of registration',
      'Should not have availed loan under similar credit-based schemes (PMEGP, Mudra, PM SVANidhi) in last 5 years',
      'Only one member from a family (husband, wife, and unmarried children) is eligible',
      'Must pass Gram Panchayat verification / Urban Local Body verification'
    ],
    eligibilityHi: [
      'हाथों व औजारों से कार्य करने वाले 18 पारंपरिक व्यवसायों में से किसी एक में कार्यरत कारीगर',
      'पंजीकरण की तिथि को न्यूनतम आयु 18 वर्ष',
      'पिछले 5 वर्षों में PMEGP, मुद्रा या स्वनिधि योजना में कोई बकाया ऋण न हो',
      'एक परिवार (पति, पत्नी व अविवाहित बच्चे) से केवल एक सदस्य ही पात्र',
      'ग्राम प्रधान / पंचायत सचिव द्वारा सत्यापन अनिवार्य'
    ],
    eligibleActivitiesEn: [
      'Darzi (Tailor / Clothing & stitching)',
      'Badhai (Carpenter / Furniture maker)',
      'Lohar (Blacksmith / Iron tool fabrication)',
      'Sonar (Goldsmith / Silversmith)',
      'Kumhaar (Potter / Clay crafts & tiles)',
      'Charmakar (Cobbler / Footwear artisan)',
      'Makaar (Mason / Bricklayer)',
      'Basket / Mat / Broom Maker / Coir weaver',
      'Barber (Naai), Washerman (Dhobi), Garland maker (Malakaar)',
      'Boat maker, Armourer, Locksmith, Sculptor / Stone carver'
    ],
    eligibleActivitiesHi: [
      'दर्जी (सिलाई, कपड़े सिलाई व मरम्मत केंद्र)',
      'बढ़ई (लकड़ी के सामान व फर्नीचर निर्माता)',
      'लोहार (लोहे के कृषि यंत्र व घरेलू औजार निर्माता)',
      'सुनार (सोने-चांदी के पारंपरिक आभूषण कारीगर)',
      'कुम्हार (मिट्टी के बर्तन, दीपक व मटके निर्माता)',
      'चर्मकार (मोची / चमड़े के जूते-चप्पल निर्माता)',
      'राजमिस्त्री (भवन निर्माण कारीगर)',
      'टोकरी / चटाई / झाड़ू निर्माता व रस्सी बुनकर',
      'नाई (बाल काटने वाले), धोबी (कपड़े धोने वाले), मालाकार (फूल माला विक्रेता)',
      'नाव निर्माता, ताला बनाने वाले, मूर्तिकार'
    ],
    documentsRequiredEn: [
      'Aadhaar Card linked with active Mobile Number',
      'Bank Account Details (Passbook copy / Account Number & IFSC Code)',
      'Ration Card / Family Composition Proof (to verify one member per family)',
      'Skill Trade self-declaration with trade experience details',
      'Gram Panchayat verification endorsement'
    ],
    documentsRequiredHi: [
      'मोबाइल नंबर से लिंक आधार कार्ड',
      'बैंक खाता पासबुक की प्रति (खाता संख्या व IFSC कोड)',
      'राशन कार्ड या परिवार पहचान पत्र (परिवार सत्यापन हेतु)',
      'पारंपरिक पेशे का स्व-घोषणा पत्र व कार्य अनुभव का ब्यौरा',
      'ग्राम प्रधान / पंचायत सचिव की संस्तुति'
    ],
    applicationProcessEn: [
      'Step 1: Visit your nearest Common Service Centre (CSC) with Aadhaar and Mobile',
      'Step 2: Complete biometric authentication and register on pmvishwakarma.gov.in',
      'Step 3: Three-tier verification: Gram Panchayat level -> District Committee -> Screening Committee',
      'Step 4: Receive PM Vishwakarma Digital ID & Certificate upon approval',
      'Step 5: Attend 5-day training, get ₹15k toolkit voucher, and receive ₹1 Lakh Tranche 1 loan in bank'
    ],
    applicationProcessHi: [
      'चरण 1: अपने नजदीकी कॉमन सर्विस सेंटर (CSC / जनसेवा केंद्र) पर आधार व मोबाइल ले जाएं',
      'चरण 2: बायोमेट्रिक फिंगरप्रिंट लगाकर pmvishwakarma.gov.in पर निःशुल्क आवेदन करें',
      'चरण 3: तीन स्तरीय सत्यापन: ग्राम पंचायत स्तर → जिला समिति → स्क्रीनिंग समिति',
      'चरण 4: डिजिटल विश्वकर्मा प्रमाण पत्र व आईडी कार्ड जारी होगा',
      'चरण 5: 5 दिवसीय प्रशिक्षण पूर्ण कर ₹15,000 टूलकिट वाउचर व ₹1 लाख की पहली किस्त बैंक में प्राप्त करें'
    ],
    officialPortalUrl: 'https://pmvishwakarma.gov.in',
    officialPortalName: 'PM Vishwakarma Official Portal',
    tollFreeNumber: '1800-267-7777 / 011-23061500',
    targetBeneficiariesEn: 'Tailors, carpenters, blacksmiths, potters, cobblers, masons, barbers, and traditional rural artisans.',
    targetBeneficiariesHi: 'दर्जी, बढ़ई, लोहार, कुम्हार, मोची, राजमिस्त्री, नाई व अन्य पारंपरिक ग्रामीण शिल्पकार।',
    calculatorConfig: {
      minCost: 50000,
      maxCost: 300000,
      defaultCost: 100000,
      defaultMarginPercent: 0,
      defaultSubsidyPercent: 15,
      interestRatePercent: 5.0,
      tenureYears: 3
    }
  },
  {
    id: 'stand-up-india',
    code: 'STAND-UP-INDIA',
    name: 'Stand-Up India Scheme',
    nameHi: 'स्टैंड-अप इंडिया योजना',
    fullName: 'Stand-Up India Scheme for SC/ST and Women Entrepreneurs',
    fullNameHi: 'अनुसूचित जाति/जनजाति एवं महिला उद्यमियों हेतु स्टैंड-अप इंडिया योजना',
    ministry: 'Ministry of Finance / Department of Financial Services (DFS)',
    ministryHi: 'वित्त मंत्रालय / वित्तीय सेवाएं विभाग (भारत सरकार)',
    nodalAgency: 'SIDBI / All Scheduled Commercial Bank Branches',
    nodalAgencyHi: 'सिडबी (SIDBI) / सभी बैंक शाखाएं',
    category: 'manufacturing',
    categoryLabelEn: 'Women & SC/ST High-Value Enterprises',
    categoryLabelHi: 'महिला व SC/ST उच्च-मूल्य उद्यम',
    badge: '₹10 Lakh to ₹1 Crore Financing',
    badgeHi: '₹10 लाख से ₹1 करोड़ तक बड़ा ऋण',
    loanLimit: '₹10 Lakh to ₹1 Crore composite loan (Term Loan + Working Capital)',
    loanLimitHi: '₹10 लाख से ₹1 करोड़ तक समग्र ऋण (मशीनरी + कार्यशील पूंजी)',
    maxProjectCost: 10000000,
    maxLoanAmount: 8500000,
    subsidyPercent: 'Convergence with State capital subsidies; credit guarantee coverage under CGFSI',
    subsidyPercentHi: 'राज्य सरकार की सब्सिडी से तालमेल; CGFSI के तहत बैंक को पूर्ण गारंटी कवर',
    marginRequired: '15% margin money (can be reduced with Central/State subsidy converge to 10%)',
    marginRequiredHi: '15% अंशदान (राज्य सब्सिडी मिलाकर 10% तक कम हो सकता है)',
    interestRate: 'Lowest applicable rate of bank for that category (MCLR + 3% + Tenor Premium)',
    interestRateHi: 'बैंक की न्यूनतम लागू दर (लगभग 8.00% से 9.50%)',
    tenure: 'Up to 7 Years',
    tenureHi: '7 वर्ष तक',
    moratorium: 'Up to 18 Months maximum moratorium period',
    moratoriumHi: '18 महीने तक का मोराटोरियम (प्रोजेक्ट तैयार होने तक)',
    collateralFree: false,
    ruralBonus: true,
    womenSpecial: true,
    summaryEn: 'Mandates every single bank branch of scheduled commercial banks in India to facilitate at least one SC or ST borrower and at least one Woman borrower with a bank loan between ₹10 Lakh and ₹1 Crore to set up a greenfield enterprise.',
    summaryHi: 'भारत के प्रत्येक बैंक शाखा को अनिवार्य रूप से कम से कम एक SC/ST उद्यमी और कम से कम एक महिला उद्यमी को नया उद्यम लगाने के लिए ₹10 लाख से ₹1 करोड़ तक का ऋण देने का सरकारी निर्देश।',
    keyHighlightsEn: [
      'Statutory target: Every bank branch must fund at least 2 enterprises (1 SC/ST + 1 Woman)',
      'Composite loan covering both Capex (machinery, shed) and Opex (working capital via Rupay card)',
      'Repayable in 7 years with an extensive 18-month moratorium window',
      'SIDBI handholding support through nationwide Connect Centers and financial literacy',
      'Can be clubbed with State Government capital subsidies and tax waivers'
    ],
    keyHighlightsHi: [
      'हर बैंक शाखा के लिए कानूनी लक्ष्य: प्रति शाखा कम से कम 1 SC/ST तथा 1 महिला उद्यमी को ऋण देना अनिवार्य',
      'मशीनरी व कार्यशील पूंजी दोनों के लिए एक साथ समग्र ऋण (Composite Loan)',
      '7 साल में आसान अदायगी और प्रोजेक्ट शुरू होने तक 18 महीने की छूट',
      'सिडबी (SIDBI) के जरिए प्रोजेक्ट रिपोर्ट बनाने व मेंटरशिप की सुविधा',
      'राज्य सरकार की उद्योग सब्सिडी के साथ सीधे तालमेल का लाभ'
    ],
    eligibilityEn: [
      'SC/ST and/or Woman entrepreneurs above 18 years of age',
      'Loans under the scheme are available ONLY for greenfield (first-time) ventures',
      'Greenfield signifies the first-time venture of the beneficiary in manufacturing, services, or trading sector',
      'In case of non-individual enterprises, at least 51% of the shareholding and controlling stake held by SC/ST or Woman',
      'Borrower should not be in default to any bank or financial institution'
    ],
    eligibilityHi: [
      'अनुसूचित जाति (SC), अनुसूचित जनजाति (ST) अथवा महिला उद्यमी जिनकी आयु 18 वर्ष से अधिक हो',
      'केवल नए (Greenfield) उद्यमों की स्थापना हेतु मान्य',
      'विनिर्माण (मैन्युफैक्चरिंग), सेवा (सर्विसेज) या व्यापार (ट्रेडिंग) क्षेत्र',
      'साझेदारी या कंपनी फर्म की स्थिति में कम से कम 51% हिस्सेदारी SC/ST या महिला की होनी चाहिए',
      'आवेदक किसी बैंक का डिफाल्टर न हो'
    ],
    eligibleActivitiesEn: [
      'Food Processing & Cold Chain Infrastructure',
      'Textile Garment manufacturing, Embroidery & Powerloom units',
      'Automobile Service & Diagnostic Centers, Commercial Logistics',
      'Pharmaceutical manufacturing, Medical Diagnostic Labs & Hospitals',
      'Plastics, Packaging, Corrugated Box & Paper bag manufacturing',
      'Wholesale Trading, Agri-Warehousing & Supermarket retail hubs'
    ],
    eligibleActivitiesHi: [
      'खाद्य प्रसंस्करण, कोल्ड स्टोरेज व एग्री-वेयरहाउसिंग',
      'रेडीमेड गारमेंट सिलाई, टेक्सटाइल व एम्ब्रॉयडरी फैक्ट्री',
      'ऑटोमोबाइल सर्विस हब व लॉजिस्टिक्स परिवहन केंद्र',
      'दवा निर्माण, मेडिकल डायग्नोस्टिक लैब व पॉलीक्लिनिक',
      'पैकेजिंग बॉक्स, पेपर बैग व प्लास्टिक मोल्डिंग इकाई',
      'थोक व्यापार, सुपरमार्केट व ग्रामीण एग्री-मॉल'
    ],
    documentsRequiredEn: [
      'Aadhaar Card, PAN Card, and Caste Certificate (for SC/ST category)',
      'Proof of registered address for business premises and domicile proof',
      'Detailed Project Report (DPR) with cash flows, break-even analysis, and balance sheet projections',
      'Pollution control NOC (if required for manufacturing units)',
      'Quotations for plant, machinery, electrical installations, and civil works',
      'Company incorporation / Partnership deed (if not sole proprietorship)'
    ],
    documentsRequiredHi: [
      'आधार कार्ड, पैन कार्ड तथा जाति प्रमाण पत्र (SC/ST वर्ग हेतु)',
      'व्यवसाय स्थल का स्वामित्व / पंजीकृत लीज डीड तथा मूल निवास',
      'विस्तृत प्रोजेक्ट रिपोर्ट (DPR), कैश-फ्लो व लाभ-हानि का अनुमान',
      'प्रदूषण नियंत्रण बोर्ड की सहमति (यदि विनिर्माण में आवश्यक हो)',
      'मशीनरी, शेड निर्माण व प्लांट का पक्का कोटेशन',
      'पार्टनरशिप डीड या कंपनी रजिस्ट्रेशन (यदि लागू हो)'
    ],
    applicationProcessEn: [
      'Step 1: Apply directly through www.standupmitra.in portal or via Lead Bank',
      'Step 2: Choose your preference: Direct to Bank, or through Handholding Support agency (SIDBI / NABARD)',
      'Step 3: System checks credit feasibility and generates tracking application ID',
      'Step 4: Assigned branch invites candidate for interview and factory site inspection',
      'Step 5: Loan sanctioned and disbursed in phases aligned with civil construction and equipment arrival'
    ],
    applicationProcessHi: [
      'चरण 1: आधिकारिक पोर्टल www.standupmitra.in पर ऑनलाइन आवेदन करें',
      'चरण 2: बैंक शाखा चुनें अथवा सिडबी (SIDBI) हैंडहोल्डिंग सहायता का विकल्प चुनें',
      'चरण 3: पोर्टल पर आवेदन संख्या दर्ज होगी और दस्तावेज बैंक शाखा को प्रेषित होंगे',
      'चरण 4: बैंक शाखा प्रबंधक द्वारा साक्षात्कार व प्रस्तावित स्थल का मुआयना',
      'चरण 5: ऋण की स्वीकृति और मशीनरी की आपूर्ति के अनुसार सीधे वेंडर को भुगतान'
    ],
    officialPortalUrl: 'https://www.standupmitra.in',
    officialPortalName: 'Stand-Up Mitra Portal (SIDBI)',
    tollFreeNumber: '1800-180-1111 / 022-67531100',
    targetBeneficiariesEn: 'SC, ST, and Women aspiring to launch high-scale manufacturing, service, or retail establishments.',
    targetBeneficiariesHi: 'अनुसूचित जाति/जनजाति एवं महिला उद्यमी जो बड़ा उद्योग, सर्विस सेंटर या थोक व्यापार शुरू करना चाहते हैं।',
    calculatorConfig: {
      minCost: 1000000,
      maxCost: 10000000,
      defaultCost: 2500000,
      defaultMarginPercent: 15,
      defaultSubsidyPercent: 0,
      interestRatePercent: 8.5,
      tenureYears: 7
    }
  },
  {
    id: 'day-nrlm',
    code: 'DAY-NRLM',
    name: 'DAY-NRLM (Aajeevika)',
    nameHi: 'दीनदयाल अंत्योदय योजना - राष्ट्रीय ग्रामीण आजीविका मिशन (DAY-NRLM)',
    fullName: 'Deendayal Antyodaya Yojana - National Rural Livelihoods Mission',
    fullNameHi: 'दीनदयाल अंत्योदय योजना - राष्ट्रीय ग्रामीण आजीविका मिशन (SHG बैंक लिंकेज)',
    ministry: 'Ministry of Rural Development (MoRD)',
    ministryHi: 'ग्रामीण विकास मंत्रालय (भारत सरकार)',
    nodalAgency: 'State Rural Livelihoods Mission (SRLM) / NABARD / Commercial Banks & RRBs',
    nodalAgencyHi: 'राज्य ग्रामीण आजीविका मिशन / नाबार्ड व क्षेत्रीय ग्रामीण बैंक',
    category: 'agriculture_dairy',
    categoryLabelEn: 'Women SHGs & Village Collectives',
    categoryLabelHi: 'महिला स्वयं सहायता समूह व ग्रामीण क्लस्टर',
    badge: '7% Interest Subvention for SHGs',
    badgeHi: 'मात्र 7% ब्याज दर (ब्याज अनुदान सहायता)',
    loanLimit: 'Up to ₹20 Lakh collateral-free loan for Women Self Help Groups (SHGs)',
    loanLimitHi: 'महिला स्वयं सहायता समूहों को ₹20 लाख तक बिना किसी बंधक के बैंक ऋण',
    maxProjectCost: 2000000,
    maxLoanAmount: 2000000,
    subsidyPercent: 'Interest Subvention: Difference between bank lending rate and 7% is paid by Government',
    subsidyPercentHi: 'ब्याज अनुदान: बैंक दर और 7% के बीच का पूरा अंतर केंद्र सरकार वहन करती है',
    marginRequired: '0% margin for loans up to ₹10 Lakh; nominal margin above ₹10L',
    marginRequiredHi: '₹10 लाख तक शून्य मार्जिन मनी (100% बैंक लिंकेज)',
    interestRate: 'Effective 7.00% p.a. (Further 3% subvention for prompt repayment in 250 districts = 4% net)',
    interestRateHi: 'प्रभावी मात्र 7.00% (समय पर चुकाने पर 3% अतिरिक्त छूट = केवल 4% शुद्ध ब्याज)',
    tenure: '3 to 5 Years',
    tenureHi: '3 से 5 वर्ष',
    moratorium: 'Immediate revolving credit / 6 months moratorium for term loans',
    moratoriumHi: 'रिवॉल्विंग क्रेडिट अथवा 6 माह की छूट',
    collateralFree: true,
    ruralBonus: true,
    womenSpecial: true,
    summaryEn: 'The flagship rural anti-poverty program enabling women to form Self-Help Groups (SHGs) and access low-cost capital at just 7% interest for collective farming, dairy cooperatives, micro-shops, and handicraft enterprises.',
    summaryHi: 'ग्रामीण महिलाओं के सशक्तिकरण की सबसे बड़ी योजना जिसमें स्वयं सहायता समूहों (SHG) को मात्र 7% रियायती ब्याज दर पर ₹20 लाख तक बिना किसी गारंटी के बैंक ऋण मिलता है।',
    keyHighlightsEn: [
      'No collateral security and no third-party guarantee for loans up to ₹20 Lakh to Women SHGs',
      'Effective interest rate is only 7% per annum; in special category districts it drops to 4% on prompt repayment',
      'Community Investment Fund (CIF) support up to ₹1.50 Lakh per SHG from Gram Sangathan',
      'Revolving Fund (RF) of ₹15,000 provided directly to newly formed SHGs meeting Panchasutra criteria',
      'Lakhpati Didi program integration: Target to train rural women to earn at least ₹1,00,000 annually'
    ],
    keyHighlightsHi: [
      'महिला SHG समूहों को ₹20 लाख तक बिना किसी संपत्ति बंधक व बिना गारंटी के ऋण',
      'प्रभावी ब्याज दर केवल 7% वार्षिक; समय पर चुकाने वाले जिलों में मात्र 4% शुद्ध ब्याज',
      'ग्राम संगठन द्वारा प्रत्येक समूह को ₹1.50 लाख तक का सामुदायिक निवेश कोष (CIF)',
      'पंचसूत्र का पालन करने वाले नए समूहों को ₹15,000 की रिवॉल्विंग फंड (RF) सहायता',
      '"लखपति दीदी" पहल से जुड़ाव: प्रत्येक ग्रामीण महिला को सालाना ₹1 लाख से अधिक कमाने में सहायता'
    ],
    eligibilityEn: [
      'Women Self Help Groups (SHGs) having 10 to 20 rural women members',
      'Must practice "Panchasutra": Regular meetings, regular savings, regular internal lending, timely repayment, and proper bookkeeping',
      'SHG must be active for at least 6 months with satisfactory internal transaction record',
      'Must have opened an active SB bank account in the local branch',
      'Graded and certified as viable by Village Organization (VO) / Block Mission Management Unit (BMMU)'
    ],
    eligibilityHi: [
      'ग्रामीण महिलाओं का स्वयं सहायता समूह (10 से 20 सदस्य)',
      '"पंचसूत्र" का नियमित पालन: नियमित बैठक, नियमित बचत, नियमित आंतरिक लेनदेन, समय पर वापसी व बहीखाता संधारण',
      'समूह कम से कम 6 माह पुराना हो और आंतरिक लेनदेन सक्रिय हो',
      'स्थानीय बैंक शाखा में सक्रिय बचत खाता खुला हो',
      'ग्राम संगठन (VO) या ब्लॉक मिशन मैनेजमेंट यूनिट द्वारा ग्रेडिंग में उत्तीर्ण'
    ],
    eligibleActivitiesEn: [
      'Collective Dairy & Milk Collection Centers (Chilling, fat testing, bulk supply)',
      'Poultry, Goat Rearing, Backyard Fishery & Honey bee farming',
      'Sanitary Napkin manufacturing, Soap & Detergent making units',
      'Village Grocery (Village Mart / Aajeevika Store), Spice & Pickle packing',
      'School Uniform Stitching, Tailoring clusters & Traditional handicrafts',
      'Custom Hiring Centers for agricultural machinery & drones (Kisan Drone Didi)'
    ],
    eligibleActivitiesHi: [
      'सामूहिक डेयरी व दुग्ध संकलन केंद्र (दूध फैट टेस्टिंग, पनीर व घी निर्माण)',
      'बकरी पालन, मुर्गी पालन, मछली पालन व मधुमक्खी पालन',
      'सेनेटरी पैड निर्माण, साबुन व फिनाइल निर्माण केंद्र',
      'आजीविका ग्रामीण मार्ट, किराना दुकान, मसाला व पापड़ पैकेजिंग',
      'स्कूल ड्रेस सिलाई, बुटीक क्लस्टर व हस्तशिल्प वस्तुएं',
      'कृषि उपकरण बैंक (कस्टम हायरिंग सेंटर) व किसान ड्रोन दीदी सेवाएं'
    ],
    documentsRequiredEn: [
      'SHG Resolution copy passed by all members demanding bank loan',
      'Panchasutra Register / Minutes book & Cash book showing 6 months history',
      'Aadhaar and Bank Account details of all SHG office bearers (President, Secretary, Treasurer)',
      'Grading Sheet / Micro Credit Plan (MCP) certified by Cluster Coordinator'
    ],
    documentsRequiredHi: [
      'बैंक ऋण लेने हेतु सभी सदस्यों द्वारा हस्ताक्षरित समूह प्रस्ताव की प्रति',
      'पंचसूत्र रजिस्टर, बैठक पुस्तिका व पिछले 6 महीने की बचत/लेनदेन बही',
      'समूह की पदाधिकारियों (अध्यक्ष, सचिव, कोषाध्यक्ष) के आधार कार्ड व बैंक पासबुक',
      'क्लस्टर कोऑर्डिनेटर द्वारा प्रमाणित ग्रेडिंग प्रपत्र व सूक्ष्म ऋण योजना (MCP)'
    ],
    applicationProcessEn: [
      'Step 1: SHG members hold a meeting and pass resolution approving loan amount and individual share',
      'Step 2: Community Resource Person (CRP / Bank Sakhi) prepares Micro Credit Plan (MCP)',
      'Step 3: Submit application to the local Bank Branch through the Village Organization (VO)',
      'Step 4: Bank branch manager conducts basic verification of registers and approves Cash Credit Limit (CCL)',
      'Step 5: Funds disbursed to SHG account; interest subvention automatically credited quarterly'
    ],
    applicationProcessHi: [
      'चरण 1: समूह बैठक में ऋण राशि व सदस्यों के वितरण का सर्वसम्मत प्रस्ताव पारित करें',
      'चरण 2: बैंक सखी या सीआरपी (CRP) की मदद से माइक्रो क्रेडिट प्लान (MCP) तैयार करें',
      'चरण 3: ग्राम संगठन (VO) के माध्यम से स्थानीय बैंक शाखा में आवेदन प्रस्तुत करें',
      'चरण 4: शाखा प्रबंधक द्वारा समूह रजिस्टरों की जांच के बाद कैश क्रेडिट लिमिट (CCL) स्वीकृत',
      'चरण 5: ऋण राशि समूह खाते में जमा और ब्याज अनुदान सरकार द्वारा सीधे खाते में भेजा जाता है'
    ],
    officialPortalUrl: 'https://nrlm.gov.in',
    officialPortalName: 'NRLM Aajeevika National Portal',
    tollFreeNumber: '1800-110-001 / 011-23382343',
    targetBeneficiariesEn: 'Rural women in Self Help Groups (SHGs), rural mothers, Lakhpati Didi candidates, and village producers.',
    targetBeneficiariesHi: 'स्वयं सहायता समूहों की ग्रामीण बहनें, आजीविका दीदियां व ग्रामीण महिला उत्पादक।',
    calculatorConfig: {
      minCost: 100000,
      maxCost: 2000000,
      defaultCost: 600000,
      defaultMarginPercent: 0,
      defaultSubsidyPercent: 0,
      interestRatePercent: 7.0,
      tenureYears: 5
    }
  },
  {
    id: 'ahidf',
    code: 'AHIDF',
    name: 'Animal Husbandry Infrastructure Development Fund',
    nameHi: 'पशुपालन अवसंरचना विकास निधि (AHIDF)',
    fullName: 'Animal Husbandry Infrastructure Development Fund (AHIDF & DIDF)',
    fullNameHi: 'पशुपालन अवसंरचना विकास निधि (डेयरी, पोल्ट्री व पशु आहार संयंत्र)',
    ministry: 'Ministry of Fisheries, Animal Husbandry and Dairying',
    ministryHi: 'मत्स्य पालन, पशुपालन एवं डेयरी मंत्रालय (भारत सरकार)',
    nodalAgency: 'Department of Animal Husbandry & Dairying (DAHD) / SIDBI / Commercial Banks',
    nodalAgencyHi: 'पशुपालन एवं डेयरी विभाग / सिडबी व बैंक',
    category: 'agriculture_dairy',
    categoryLabelEn: 'Dairy, Poultry & Livestock Processing',
    categoryLabelHi: 'डेयरी, पोल्ट्री व पशुपालन प्रसंस्करण',
    badge: '3% Interest Subvention + Credit Guarantee',
    badgeHi: '3% ब्याज छूट + 25% तक क्रेडिट गारंटी',
    loanLimit: 'Up to 90% of Project Cost financed (Loans from ₹10 Lakh to several Crores)',
    loanLimitHi: 'प्रोजेक्ट लागत का 90% तक ऋण (₹10 लाख से कई करोड़ रुपये तक)',
    maxProjectCost: 15000000,
    maxLoanAmount: 13500000,
    subsidyPercent: '3% Interest Subvention for 8 years + Credit guarantee coverage up to 25% by NABARD/DAHD',
    subsidyPercentHi: '8 वर्षों तक 3% की सीधी ब्याज छूट + 25% तक सरकारी क्रेडिट गारंटी कवर',
    marginRequired: '10% for Micro & Small Enterprises; 15% for Medium Enterprises',
    marginRequiredHi: 'सूक्ष्म व लघु इकाइयों के लिए मात्र 10% अंशदान; मध्यम इकाइयों के लिए 15%',
    interestRate: 'Subsidized rate: Bank Lending Rate minus 3.00% (Effective ~6.5% - 7.5% p.a.)',
    interestRateHi: 'रियायती दर: बैंक दर में से 3.00% घटाकर (प्रभावी ~6.5% से 7.5% वार्षिक)',
    tenure: 'Up to 8 Years repayment period',
    tenureHi: '8 वर्ष तक की लंबी अदायगी अवधि',
    moratorium: 'Up to 2 Years (24 Months) moratorium on principal',
    moratoriumHi: '2 वर्ष (24 माह) तक का लंबा मोराटोरियम',
    collateralFree: true,
    ruralBonus: true,
    womenSpecial: false,
    summaryEn: 'Central government fund of ₹15,000 Crore encouraging rural entrepreneurs, dairy farmers, and dairy cooperatives to set up modern milk chilling, ice-cream, paneer processing, cattle feed plants, and meat/egg processing facilities.',
    summaryHi: 'ग्रामीण उद्यमियों, डेयरी फार्म संचालकों व पशुपालकों को आधुनिक मिल्क चिलिंग प्लांट, पनीर-घी पैकेजिंग, पशु आहार (कैटल फीड) व पोल्ट्री प्रसंस्करण इकाई लगाने हेतु 3% ब्याज छूट व 90% ऋण सहायता।',
    keyHighlightsEn: [
      '3% Interest Subvention credited directly by the Government for up to 8 continuous years',
      'Credit Guarantee Fund provides up to 25% credit guarantee to lending institutions for MSMEs',
      'Maximum 90% loan component; promoter needs to invest only 10% margin for micro units',
      'Generous 2-year moratorium on principal repayment while civil infrastructure is being built',
      'Open to individual entrepreneurs, Farmer Producer Organizations (FPOs), Section 8 companies, and MSMEs'
    ],
    keyHighlightsHi: [
      'लगातार 8 वर्षों तक सरकार द्वारा 3% वार्षिक ब्याज अनुदान का सीधा भुगतान',
      'एमएसएमई इकाइयों के लिए 25% तक का क्रेडिट गारंटी कवर (बिना किसी भारी गिरवी के)',
      'प्रोजेक्ट लागत का 90% तक भारी बैंक ऋण; उद्यमी को मात्र 10% अंशदान लगाना होगा',
      'मशीनरी व प्लांट स्थापना के दौरान मूलधन अदायगी पर पूरे 2 साल (24 माह) की छूट',
      'व्यक्तिगत किसान, ग्रामीण युवा, डेयरी उद्यमी, FPO व कंपनियां सभी पात्र'
    ],
    eligibilityEn: [
      'Individual entrepreneurs, private micro/small firms, FPOs, Cooperatives, and SHGs',
      'Land ownership or registered lease agreement for at least 10 years for plant construction',
      'Techno-economic viability report detailing milk / animal feed sourcing pipeline',
      'Valid FSSAI and local panchayat trade consent for food processing units',
      'Clear bank track record with CIBIL score above standard threshold (650+)'
    ],
    eligibilityHi: [
      'व्यक्तिगत उद्यमी, निजी फर्म, किसान उत्पादक संगठन (FPO), डेयरी सहकारी समितियां',
      'प्लांट स्थापना हेतु भूमि का स्वामित्व अथवा कम से कम 10 वर्ष का पंजीकृत लीज अनुबंध',
      'दूध या पशु आहार की स्थानीय उपलब्धता दर्शाने वाली व्यवहार्यता रिपोर्ट',
      'FSSAI व ग्राम पंचायत अनापत्ति प्रमाण पत्र',
      'साफ-सुथरा बैंक रिकॉर्ड (सिबिल स्कोर 650 से अधिक)'
    ],
    eligibleActivitiesEn: [
      'Dairy Processing Infrastructure (Bulk Milk Coolers, Paneer, Ghee, Butter, Yogurt units)',
      'Cattle Feed & Poultry Feed Manufacturing Plants, Silage making units',
      'Meat & Egg Processing, hygienic packaging and cold chain refrigerated vans',
      'Animal Waste to Wealth (Biogas plants, Cow dung log and organic fertilizer units)',
      'Veterinary vaccine and animal medicine formulation micro-laboratories'
    ],
    eligibleActivitiesHi: [
      'दुग्ध प्रसंस्करण अवसंरचना (बल्क मिल्क कूलर, पनीर, घी, मक्खन व दही निर्माण इकाई)',
      'पशु आहार व मुर्गी दाना निर्माण संयंत्र, साइलेज (हरा चारा) पैकिंग इकाई',
      'अंडा व मांस प्रसंस्करण, स्वच्छ पैकेजिंग व रेफ्रिजरेटेड वैन (शीतगृह वाहन)',
      'गोबर व पशु अपशिष्ट से जैविक खाद, बायो-सीएनजी व उपले निर्माण संयंत्र',
      'पशु चिकित्सा एवं प्राथमिक पशु स्वास्थ्य देखभाल केंद्र'
    ],
    documentsRequiredEn: [
      'Aadhaar, PAN, and Entity Registration (Udyam, Partnership or LLP/Pvt Ltd)',
      'Land Documents (Khatauni / Sale deed or registered 10-year lease agreement)',
      'Bank approved Detailed Project Report (DPR) with civil estimates and machinery quotes',
      'Milk / Raw material supply tie-up agreements with local village dairy farmers',
      'Pollution Control Board Consent to Establish (CTE) if applicable'
    ],
    documentsRequiredHi: [
      'उद्यमी का आधार, पैन व उद्यम रजिस्ट्रेशन',
      'जमीन के कागजात (खतौनी, बैनामा या 10 साल का पंजीकृत किरायानामा)',
      'विस्तृत प्रोजेक्ट रिपोर्ट (DPR), शेड निर्माण का एस्टीमेट व मशीनरी कोटेशन',
      'स्थानीय पशुपालकों से कच्चा दूध या कच्चा माल आपूर्ति का सहमति पत्र',
      'प्रदूषण नियंत्रण बोर्ड की अनापत्ति (यदि लागू हो)'
    ],
    applicationProcessEn: [
      'Step 1: Prepare DPR and register on the dedicated portal ahidf.udyamimitra.in',
      'Step 2: Upload KYC, land documents, machinery quotes, and select preferred lending bank',
      'Step 3: Ministry of Animal Husbandry conducts preliminary techno-economic screening',
      'Step 4: Bank branch conducts appraisal, issues formal sanction, and disburses loan',
      'Step 5: Upon disbursement, 3% interest subvention is automatically tagged and credited quarterly'
    ],
    applicationProcessHi: [
      'चरण 1: प्रोजेक्ट रिपोर्ट तैयार कर आधिकारिक पोर्टल ahidf.udyamimitra.in पर ऑनलाइन पंजीकरण करें',
      'चरण 2: आधार, जमीन के दस्तावेज, मशीनरी कोटेशन अपलोड कर पसंदीदा बैंक चुनें',
      'चरण 3: पशुपालन मंत्रालय द्वारा तकनीकी व आर्थिक जांच के बाद बैंक को संस्तुति',
      'चरण 4: बैंक शाखा द्वारा स्थल निरीक्षण व औपचारिक ऋण स्वीकृति',
      'चरण 5: ऋण वितरण के पश्चात 3% ब्याज अनुदान स्वतः खाते में समायोजित होता है'
    ],
    officialPortalUrl: 'https://ahidf.udyamimitra.in',
    officialPortalName: 'AHIDF Udyami Mitra Portal',
    tollFreeNumber: '1800-180-1551 / 011-23382753',
    targetBeneficiariesEn: 'Dairy farmers, livestock rearers, milk chiller operators, cattle feed manufacturers, and agro-entrepreneurs.',
    targetBeneficiariesHi: 'डेयरी किसान, पशुपालक, मिल्क चिलर संचालक, पशु आहार निर्माता व ग्रामीण उद्यमी।',
    calculatorConfig: {
      minCost: 1000000,
      maxCost: 15000000,
      defaultCost: 2000000,
      defaultMarginPercent: 10,
      defaultSubsidyPercent: 0,
      interestRatePercent: 7.0,
      tenureYears: 8
    }
  },
  {
    id: 'pm-svanidhi',
    code: 'PM-SVANIDHI',
    name: 'PM SVANidhi Scheme',
    nameHi: 'पीएम स्वनिधि योजना',
    fullName: "PM Street Vendor's AtmaNirbhar Nidhi",
    fullNameHi: "प्रधानमंत्री स्ट्रीट वेंडर्स आत्मनिर्भर निधि (पीएम स्वनिधि)",
    ministry: 'Ministry of Housing and Urban Affairs (MoHUA)',
    ministryHi: 'आवासन और शहरी कार्य मंत्रालय (भारत सरकार)',
    nodalAgency: 'SIDBI / Scheduled Commercial Banks, RRBs, Cooperative Banks & SHGs',
    nodalAgencyHi: 'सिडबी (SIDBI) / सभी बैंक व सीएससी केंद्र',
    category: 'retail_service',
    categoryLabelEn: 'Street Vendors & Tiny Stalls',
    categoryLabelHi: 'रेहड़ी, पटरी व छोटे स्टॉल विक्रेता',
    badge: 'Collateral-Free Working Capital',
    badgeHi: 'बिना किसी बंधक के कार्यशील पूंजी ऋण',
    loanLimit: 'Up to ₹80,000 in 3 escalating tranches (Tranche 1: ₹10K, Tranche 2: ₹20K, Tranche 3: ₹50K)',
    loanLimitHi: '₹80,000 तक (प्रथम किस्त ₹10,000, द्वितीय किस्त ₹20,000, तृतीय किस्त ₹50,000)',
    maxProjectCost: 80000,
    maxLoanAmount: 80000,
    subsidyPercent: '7% Interest Subsidy directly credited to bank account + ₹1,200/year digital cashback',
    subsidyPercentHi: '7% ब्याज अनुदान सीधा बैंक खाते में + सालाना ₹1,200 तक का डिजिटल कैशबैक',
    marginRequired: '0% margin money required (100% financed by bank)',
    marginRequiredHi: '0% मार्जिन (100% बैंक द्वारा उपलब्ध)',
    interestRate: 'Commercial rate (~9.00% - 10.50%), but 7% is refunded as subsidy by Govt',
    interestRateHi: 'बैंक दर से 7% ब्याज सरकार वापस लौटा देती है (प्रभावी ब्याज मात्र ~2% से 3%)',
    tenure: 'Tranche 1: 1 Year; Tranche 2: 1.5 Years; Tranche 3: 3 Years',
    tenureHi: 'प्रथम किस्त: 1 वर्ष; द्वितीय किस्त: 1.5 वर्ष; तृतीय किस्त: 3 वर्ष',
    moratorium: 'None (Immediate working capital for purchase of daily merchandise)',
    moratoriumHi: 'कोई नहीं (दैनिक कच्चा माल खरीदने हेतु त्वरित ऋण)',
    collateralFree: true,
    ruralBonus: true,
    womenSpecial: true,
    summaryEn: 'Micro-credit working capital facility providing instant collateral-free loans starting from ₹10,000 up to ₹50,000 with a 7% interest rebate and up to ₹100 per month digital payment cashback for roadside vendors, food carts, and tiny kiosk operators.',
    summaryHi: 'छोटे रेहड़ी-पटरी विक्रेताओं, चाय-नाश्ता स्टॉल व फल-सब्जी विक्रेताओं के लिए ₹10,000 से ₹50,000 तक का त्वरित बैंक ऋण, जिस पर 7% ब्याज सब्सिडी और ₹1,200 का वार्षिक डिजिटल कैशबैक मिलता है।',
    keyHighlightsEn: [
      'No collateral security or guarantee required; sanction based purely on Aadhaar and vending identity',
      'Timely repayment of first ₹10,000 loan makes vendor immediately eligible for ₹20,000 second loan',
      'Timely repayment of second loan qualifies for ₹50,000 third loan, building formal bank credit score',
      '7% interest subsidy is credited directly to the borrower\'s bank account on a quarterly basis',
      'Vendors receive up to ₹100 per month (₹1,200 per year) cashback for accepting digital QR payments'
    ],
    keyHighlightsHi: [
      'बिना किसी संपत्ति बंधक व बिना गारंटी; मात्र आधार व वेंडिंग पहचान पत्र पर स्वीकृति',
      'प्रथम ₹10,000 का ऋण समय पर चुकाने पर सीधे ₹20,000 का दूसरा ऋण स्वीकृत',
      'दूसरा ऋण चुकाने पर ₹50,000 का तीसरा बड़ा ऋण उपलब्ध, जिससे सिबिल स्कोर मजबूत होता है',
      '7% ब्याज अनुदान हर तिमाही सीधे बैंक खाते में वापस जमा',
      'क्यूआर (QR) कोड से डिजिटल भुगतान लेने पर हर महीने ₹100 (सालाना ₹1,200) का नकद कैशबैक'
    ],
    eligibilityEn: [
      'Street vendors, roadside kiosk owners, hawkers, and thela operators',
      'Applicable in peri-urban, rural town outskirts, and statutory town markets',
      'Possession of Certificate of Vending / Identity Card issued by Urban Local Body or Town Vending Committee (TVC)',
      'Vendors left out of survey can apply with a Recommendation Letter (LoR) from ULB or Local Panchayat',
      'Should have active Aadhaar linked with mobile and savings bank account'
    ],
    eligibilityHi: [
      'रेहड़ी-पटरी विक्रेता, ठेला संचालक, साप्ताहिक हाट-बाजार के छोटे व्यापारी',
      'ग्रामीण कस्बों, नगर पंचायत व अर्ध-शहरी मंडियों में व्यवसाय करने वाले',
      'स्थानीय निकाय अथवा टाउन वेंडिंग कमेटी (TVC) द्वारा जारी वेंडर पहचान पत्र',
      'पहचान पत्र न होने पर ग्राम पंचायत या नगर पालिका से अनुशंसा पत्र (LoR) मान्य',
      'मोबाइल से लिंक आधार कार्ड व बैंक खाता'
    ],
    eligibleActivitiesEn: [
      'Fruit & Vegetable stalls, Green grocery carts',
      'Tea stalls, Pakoda, Chaat, Samosa, Dosa & Street food carts',
      'Barber kiosks, Cobblers, Footwear and Leather repair booths',
      'Pan, Bidi, Cigarette, and General provision kiosks',
      'Flower sellers, Puja item vendors, and Book/Stationery carts',
      'Artisan toy sellers, Plastic goods, and Utensil hawkers'
    ],
    eligibleActivitiesHi: [
      'फल व हरी सब्जी के ठेले, फुटकर सब्जी विक्रेता',
      'चाय-नाश्ता स्टॉल, चाट, समोसा, डोसा व फास्ट फूड ठेला',
      'सड़क किनारे बाल काटने वाले (नाई), जूता गांठने वाले (मोची)',
      'पान-बीड़ी की गुमटी, जनरल सामान के छोटे खोखे',
      'फूल-माला विक्रेता, पूजा सामग्री स्टॉल व स्टेशनरी विक्रेता',
      'खिलौने, प्लास्टिक बर्तन व फेरी लगाकर सामान बेचने वाले'
    ],
    documentsRequiredEn: [
      'Aadhaar Card with linked active Mobile Number for OTP authentication',
      'Vending Certificate / Identity Card / Letter of Recommendation (LoR)',
      'Active Savings Bank Account Passbook copy with IFSC Code',
      'Self-declaration of street vending activity and location details'
    ],
    documentsRequiredHi: [
      'ओटीपी सत्यापन हेतु मोबाइल से लिंक आधार कार्ड',
      'स्ट्रीट वेंडर पहचान पत्र या नगर पालिका/पंचायत से अनुशंसा पत्र (LoR)',
      'सक्रिय बैंक खाता पासबुक (खाता संख्या व IFSC कोड)',
      'व्यवसाय स्थल का स्व-घोषणा पत्र'
    ],
    applicationProcessEn: [
      'Step 1: Visit pmsvanidhi.mohua.gov.in or nearest CSC / Bank branch',
      'Step 2: Enter Aadhaar number and verify via OTP',
      'Step 3: Enter Vending identity / Certificate of Vending number',
      'Step 4: Select loan amount (₹10,000 for 1st loan) and preferred financing bank',
      'Step 5: Loan sanctioned digitally and credited directly to savings bank account within 3 to 7 days'
    ],
    applicationProcessHi: [
      'चरण 1: आधिकारिक पोर्टल pmsvanidhi.mohua.gov.in या नजदीकी CSC / बैंक जाएं',
      'चरण 2: आधार नंबर दर्ज कर मोबाइल पर आए ओटीपी (OTP) से सत्यापन करें',
      'चरण 3: वेंडर प्रमाण पत्र संख्या अथवा नगर पंचायत का सिफारिश पत्र नंबर भरें',
      'चरण 4: ऋण राशि चुनें (पहली बार में ₹10,000) तथा नजदीकी बैंक शाखा चुनें',
      'चरण 5: बैंक द्वारा डिजिटल सत्यापन के बाद 3 से 7 दिनों में राशि सीधे बैंक खाते में जमा'
    ],
    officialPortalUrl: 'https://pmsvanidhi.mohua.gov.in',
    officialPortalName: 'PM SVANidhi Portal',
    tollFreeNumber: '1800-11-1979 / 011-23062334',
    targetBeneficiariesEn: 'Street vendors, food thela operators, weekly market sellers, and tiny micro-traders.',
    targetBeneficiariesHi: 'रेहड़ी-पटरी विक्रेता, ठेले वाले, चाय-नाश्ता दुकानदार व छोटे फेरीवाले।',
    calculatorConfig: {
      minCost: 10000,
      maxCost: 80000,
      defaultCost: 20000,
      defaultMarginPercent: 0,
      defaultSubsidyPercent: 0,
      interestRatePercent: 9.0,
      tenureYears: 1
    }
  }
];
