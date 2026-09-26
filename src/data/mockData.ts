import { BusinessCategory, FeasibilityData, LocationData } from '../types';

export interface CategoryInfo {
  id: BusinessCategory;
  nameEn: string;
  nameHi: string;
  taglineEn: string;
  taglineHi: string;
  iconName: string;
  defaultDescription: string;
}

export const BUSINESS_CATEGORIES: CategoryInfo[] = [
  {
    id: 'grocery',
    nameEn: 'Grocery & Daily Essentials',
    nameHi: 'किराना दुकान व दैनिक आवश्यकताएं',
    taglineEn: 'FMCG, grains, spices, packaged staples',
    taglineHi: 'अनाज, तेल, मसाले, साबुन और दैनिक राशन',
    iconName: 'ShoppingBag',
    defaultDescription: 'I want to open a well-stocked daily essentials & grocery shop on the main village road with digital payments.',
  },
  {
    id: 'dairy',
    nameEn: 'Dairy & Milk Chilling Unit',
    nameHi: 'डेयरी व दुग्ध संकलन केंद्र',
    taglineEn: 'Milk aggregation, curd, ghee & paneer',
    taglineHi: 'दूध एकत्रीकरण, पनीर, घी और दही उत्पादन',
    iconName: 'Milk',
    defaultDescription: 'Setup a small dairy collection and chilling booth serving 4 nearby villages with direct cooperative tie-up.',
  },
  {
    id: 'poultry',
    nameEn: 'Poultry & Layer Farm',
    nameHi: 'मुर्गी पालन (ब्रॉयलर व लेयर फार्म)',
    taglineEn: 'Broiler chicken, farm eggs, feed',
    taglineHi: 'देशी व ब्रॉयलर मुर्गी, अंडे और स्थानीय आपूर्ति',
    iconName: 'Egg',
    defaultDescription: 'Establish a 500-bird eco-friendly broiler unit to cater to the weekly village haat and local dhabas.',
  },
  {
    id: 'pharmacy',
    nameEn: 'Pharmacy & Health Clinic',
    nameHi: 'दवा दुकान (जन औषधि केंद्र)',
    taglineEn: 'Essential generic medicines & first aid',
    taglineHi: 'जेनेरिक दवाएं, प्राथमिक चिकित्सा किट व ओआरएस',
    iconName: 'Pill',
    defaultDescription: 'Open a licensed village pharmacy to provide affordable generic medicines and emergency first-aid.',
  },
  {
    id: 'clothing',
    nameEn: 'Garments & Readymade Clothing',
    nameHi: 'रेडीमेड गारमेंट्स व कपड़ा दुकान',
    taglineEn: 'Daily wear, festive clothes, school uniforms',
    taglineHi: 'दैनिक वस्त्र, साड़ियां, बच्चों के कपड़े व स्कूल यूनिफॉर्म',
    iconName: 'Shirt',
    defaultDescription: 'Start a clothing outlet catering to festive seasons, weddings, and local school uniform requirements.',
  },
  {
    id: 'food_stall',
    nameEn: 'Food Stall & Rural Eatery',
    nameHi: 'चाय-नाश्ता / ग्रामीण भोजनालय',
    taglineEn: 'Tea, samosa, thali, quick local meals',
    taglineHi: 'चाय, समोसा, कचौरी, ताज़ा नाश्ता व थाली भोजन',
    iconName: 'UtensilsCrossed',
    defaultDescription: 'Set up an hygienic tea and snacks food stall near the bus stop and weekly market crossing.',
  },
  {
    id: 'bakery',
    nameEn: 'Bakery & Confectionery',
    nameHi: 'बेकरी व कन्फेक्शनरी यूनिट',
    taglineEn: 'Fresh bread, rusks, biscuits, custom cakes',
    taglineHi: 'ताजा पाव, बिस्कुट, रस्क और जन्मदिन केक',
    iconName: 'Cake',
    defaultDescription: 'Produce affordable fresh bread, pav, and festive cakes directly to eliminate reliance on town suppliers.',
  },
  {
    id: 'mobile_repair',
    nameEn: 'Mobile & Electronics Repair',
    nameHi: 'मोबाइल व इलेक्ट्रॉनिक्स रिपेयर',
    taglineEn: 'Smartphone screen, recharge, accessories',
    taglineHi: 'स्मार्टफोन रिपेयरिंग, रिचार्ज, कवर व एक्सेसरीज़',
    iconName: 'Smartphone',
    defaultDescription: 'Smartphone repairing center offering screen replacement, battery fixing, recharge, and accessories.',
  },
  {
    id: 'hardware',
    nameEn: 'Hardware & Construction Supplies',
    nameHi: 'हार्डवेयर व निर्माण सामग्री',
    taglineEn: 'Pipes, cement, electrical fixtures, tools',
    taglineHi: 'पाइप, सीमेंट, तार, बिजली के सामान व टूल्स',
    iconName: 'Wrench',
    defaultDescription: 'Provide basic sanitary fittings, PVC pipes, tools, and electrical items for local house constructions.',
  },
  {
    id: 'tailoring',
    nameEn: 'Tailoring & Boutique Center',
    nameHi: 'सिलाई व बुटीक सेंटर',
    taglineEn: 'Blouse stitching, alterations, embroidery',
    taglineHi: 'सूट, ब्लाउज, फॉल-पिको व आधुनिक बुटीक कार्य',
    iconName: 'Scissors',
    defaultDescription: 'Establish a women-led stitching and boutique shop with motorized sewing machines.',
  },
  {
    id: 'salon',
    nameEn: 'Grooming Salon & Parlour',
    nameHi: 'सैलून व ब्यूटी पार्लर',
    taglineEn: 'Haircut, facial, bridal styling, grooming',
    taglineHi: 'हेयरकट, दाढ़ी संवारना, फेशियल व ब्राइडल मेकअप',
    iconName: 'Sparkles',
    defaultDescription: 'Hygienic grooming salon with air cooling to offer quality styling at village price points.',
  },
  {
    id: 'agriculture_inputs',
    nameEn: 'Agri-Inputs & Seeds Store',
    nameHi: 'कृषि सेवा केंद्र (खाद, बीज व कीटनाशक)',
    taglineEn: 'Certified seeds, bio-fertilizers, sprayers',
    taglineHi: 'प्रमाणित बीज, जैव उर्वरक, स्प्रेयर व कीटनाशक',
    iconName: 'Sprout',
    defaultDescription: 'Licensed agri-input outlet advising farmers on season-specific hybrid seeds, bio-fertilizers, and equipment.',
  },
  {
    id: 'other',
    nameEn: 'Custom Rural Enterprise',
    nameHi: 'अन्य ग्रामीण सूक्ष्म उद्यम',
    taglineEn: 'Flour mill, cold storage, craft work',
    taglineHi: 'आटा चक्की, कुटीर उद्योग, हस्तशिल्प आदि',
    iconName: 'Building2',
    defaultDescription: 'Rural micro-enterprise catering to specific village cluster needs.',
  },
];

export const SAMPLE_LOCATIONS: LocationData[] = [
  {
    state: 'Uttar Pradesh',
    district: 'Mirzapur',
    block: 'Majhawan Block',
    village: 'Kachhwa Village',
    pincode: '231501',
  },
  {
    state: 'Uttar Pradesh',
    district: 'Varanasi',
    block: 'Arajiline Block',
    village: 'Rameshwar Village',
    pincode: '221405',
  },
  {
    state: 'Bihar',
    district: 'Madhubani',
    block: 'Pandaul Block',
    village: 'Rampur Village',
    pincode: '847234',
  },
  {
    state: 'Maharashtra',
    district: 'Satara',
    block: 'Wai Block',
    village: 'Bhuinj Village',
    pincode: '415515',
  },
  {
    state: 'Karnataka',
    district: 'Mandya',
    block: 'Maddur Block',
    village: 'Shivapura Village',
    pincode: '571428',
  },
];

/**
 * Detailed mock feasibility generators tailored to category
 */
export function getMockFeasibilityData(
  category: BusinessCategory,
  location: LocationData,
  capitalAmount: number
): FeasibilityData {
  const cat = BUSINESS_CATEGORIES.find((c) => c.id === category) || BUSINESS_CATEGORIES[0];

  // Specific profiles for categories
  switch (category) {
    case 'dairy':
      return {
        category: 'dairy',
        categoryName: cat.nameEn,
        marketReach5km: {
          radiusKm: 5,
          estimatedPopulation: 11800,
          nearbyVillages: 6,
          nearbyMarkets: 2,
          potentialCustomers: 1850,
          householdCount: 2200,
        },
        marketReach10km: {
          radiusKm: 10,
          estimatedPopulation: 34500,
          nearbyVillages: 18,
          nearbyMarkets: 5,
          potentialCustomers: 5900,
          householdCount: 6500,
        },
        opportunityScore: 78,
        factors: [
          {
            name: 'Demand Potential',
            nameHi: 'मांग की संभावना',
            score: 88,
            weight: 25,
            reasonEn: 'Daily fresh milk, curd, and paneer demand is consistently inelastic in rural clusters.',
            reasonHi: 'ग्रामीण क्लस्टर में दैनिक ताजे दूध, दही और पनीर की मांग निरंतर बनी रहती है।',
          },
          {
            name: 'Market Gap',
            nameHi: 'बाजार का खाली स्थान',
            score: 75,
            weight: 20,
            reasonEn: 'Absence of chilling storage forces farmers to sell at distress rates to middlemen.',
            reasonHi: 'शीतलन भंडारण के अभाव में किसानों को बिचौलियों को सस्ते दाम पर बेचना पड़ता है।',
          },
          {
            name: 'Competition',
            nameHi: 'प्रतिस्पर्धा स्तर',
            score: 68,
            weight: 20,
            reasonEn: 'Two unorganized milkmen operating locally with limited quality testing equipment.',
            reasonHi: 'दो असंगठित दूधिए काम कर रहे हैं, जिनके पास फैट/क्वालिटी टेस्टिंग की आधुनिक सुविधा नहीं है।',
          },
          {
            name: 'Accessibility',
            nameHi: 'पहुंच और कनेक्टिविटी',
            score: 82,
            weight: 20,
            reasonEn: 'Located near State Highway connector road enabling swift morning collection vans.',
            reasonHi: 'राज्य राजमार्ग संपर्क मार्ग के निकट स्थित होने से सुबह की वैन आवाजाही सुगम है।',
          },
          {
            name: 'Purchasing Potential',
            nameHi: 'क्रय शक्ति व नकदी प्रवाह',
            score: 76,
            weight: 15,
            reasonEn: 'Regular rural household expenditure on pure milk and festive sweets is steady.',
            reasonHi: 'शुद्ध दूध और त्योहारों पर मिठाइयों के लिए ग्रामीण परिवारों का नकद खर्च नियमित है।',
          },
        ],
        scoreExplanationEn:
          'Demand appears strongly favorable because the prototype dataset indicates daily recurring consumption, proximity to milk-yielding cattle sheds, and high customer dissatisfaction with watered-down town supply.',
        scoreExplanationHi:
          'मांग अत्यंत अनुकूल प्रतीत होती है क्योंकि प्रोटोटाइप डेटासेट दैनिक आवर्ती खपत, दुधारू पशुपालकों की निकटता और शहर से आने वाले मिलावटी दूध के विकल्प की आवश्यकता दर्शाता है।',
        distributionChannels: [
          {
            name: 'Local Collection Center',
            nameHi: 'स्थानीय संकलन केंद्र',
            feasibility: 'High',
            sharePercent: 45,
            descriptionEn: 'Daily direct morning & evening walk-in sales to village households.',
            descriptionHi: 'गांव के परिवारों को सुबह और शाम सीधे काउंटर से ताजा दूध बिक्री।',
            icon: 'Store',
          },
          {
            name: 'Weekly Haat & Sweet Shops',
            nameHi: 'साप्ताहिक हाट व हलवाई दुकानें',
            feasibility: 'High',
            sharePercent: 30,
            descriptionEn: 'Bulk supply of high-fat milk, paneer, and mawa to local confectioners.',
            descriptionHi: 'स्थानीय हलवाइयों को पनीर, खोया/मावा और गाढ़े दूध की थोक आपूर्ति।',
            icon: 'Truck',
          },
          {
            name: 'Dairy Cooperative Linkage',
            nameHi: 'डेयरी सहकारी समिति लिंकेज',
            feasibility: 'High',
            sharePercent: 15,
            descriptionEn: 'Guaranteed off-take contract with state dairy federation chilling tanker.',
            descriptionHi: 'राज्य डेयरी संघ के टैंकर के साथ अधिशेष दूध का सुनिश्चित खरीद अनुबंध।',
            icon: 'Building',
          },
          {
            name: 'WhatsApp Pre-Order & Delivery',
            nameHi: 'व्हाट्सएप प्री-ऑर्डर व होम डिलीवरी',
            feasibility: 'Medium',
            sharePercent: 10,
            descriptionEn: 'Direct doorstep morning subscription for senior citizens & teachers.',
            descriptionHi: 'वरिष्ठ नागरिकों और स्थानीय शिक्षकों के लिए दैनिक सुबह डोरस्टेप डिलीवरी।',
            icon: 'Smartphone',
          },
        ],
        competitors: [
          {
            id: 'c1',
            name: 'Kisan Dudh Kendra (Unorganized)',
            type: 'Local Milk Aggregator',
            distanceKm: 1.4,
            rating: 3.4,
            isDirect: true,
            notes: 'Traditional manual fat testing; frequent supply interruptions during peak summer.',
            latOffset: 25,
            lngOffset: -35,
          },
          {
            id: 'c2',
            name: 'Ganga Dairy Booth',
            type: 'Small Chilling Hub',
            distanceKm: 3.8,
            rating: 4.1,
            isDirect: true,
            notes: 'Located at junction; sells packaged curd and buttermilk.',
            latOffset: -40,
            lngOffset: 50,
          },
          {
            id: 'c3',
            name: 'Town Milk Vendor Route',
            type: 'Motorcycle Vendor',
            distanceKm: 6.2,
            rating: 3.2,
            isDirect: false,
            notes: 'Visits only between 6:00 AM - 7:00 AM; charges high transit premium.',
            latOffset: 60,
            lngOffset: 40,
          },
        ],
        competitorDensity: 'Low',
        competitorCount: 3,
        swot: {
          strengths: [
            'Immediate daily cash liquidity from milk collection',
            'Direct relationships with local dairy farmers',
            'Low perishable spoilage if mini cold unit is installed',
          ],
          strengthsHi: [
            'दूध संकलन से प्रतिदिन तत्काल नकद तरलता प्राप्त होती है',
            'स्थानीय पशुपालकों के साथ प्रत्यक्ष और पारिवारिक संबंध',
            'मिनी कोल्ड यूनिट से दूध खराब होने का जोखिम न्यूनतम',
          ],
          weaknesses: [
            'Requires continuous electricity or solar backup for chilling',
            'Stringent daily hygiene and milk quality testing required',
          ],
          weaknessesHi: [
            'दूध ठंडा रखने हेतु निरंतर बिजली या सोलर बैकअप की आवश्यकता',
            'प्रतिदिन कड़े स्वच्छता मानकों और फैट जांच की आवश्यकता',
          ],
          opportunities: [
            'Value addition into Ghee, Paneer, and Flavored Buttermilk',
            'Tie-up with nearby marriage gardens and school midday meal programs',
          ],
          opportunitiesHi: [
            'घी, पनीर और छाछ जैसे मूल्य-वर्धित उत्पादों में 25-35% तक अतिरिक्त मार्जिन',
            'स्थानीय वैवाहिक कार्यक्रमों और स्कूल कैंटीन से थोक ऑर्डर',
          ],
          threats: [
            'Cattle disease outbreaks in monsoon affecting local milk yield',
            'Seasonal drop in milk volume during peak dry summer months',
          ],
          threatsHi: [
            'मानसून में पशु रोगों से दूध उत्पादन में आकस्मिक कमी',
            'गर्मी के महीनों में दुग्ध आपूर्ति में मौसमी गिरावट',
          ],
        },
        threatsList: [
          {
            threat: 'Summer supply contraction (Lactation cycle)',
            threatHi: 'गर्मी के मौसम में दुग्ध आपूर्ति में मौसमी गिरावट',
            impact: 'Medium',
            mitigation: 'Encourage silage feed supply & contract 2 additional neighboring village hamlets.',
            mitigationHi: 'साइलेज पशु आहार का स्टॉक रखें व 2 अतिरिक्त पड़ोसी बस्तियों से आपूर्ति तय करें।',
          },
          {
            threat: 'Rural grid power fluctuations',
            threatHi: 'ग्रामीण विद्युत आपूर्ति में वोल्टेज उतार-चढ़ाव',
            impact: 'High',
            mitigation: 'Utilize solar-assisted bulk milk cooler (BMC) subsidy under animal husbandry mission.',
            mitigationHi: 'पशुपालन मिशन के तहत सौर-ऊर्जा समर्थित बल्क मिल्क कूलर सब्सिडी का लाभ लें।',
          },
          {
            threat: 'Adulteration rumors in unorganized market',
            threatHi: 'असंगठित बाजार में मिलावट की अफवाहें',
            impact: 'Low',
            mitigation: 'Install transparent digital milk analyzer display showing fat/SNF directly to farmers.',
            mitigationHi: 'पारदर्शी डिजिटल फैट/एसएनएफ एनालाइज़र स्क्रीन लगाएं जिससे किसानों का विश्वास बढ़े।',
          },
        ],
        pricing: {
          productSample: 'Cow Milk (1 Litre with 4.5% Fat)',
          productSampleHi: 'गाय का ताजा दूध (1 लीटर - 4.5% फैट)',
          estimatedCost: 42,
          localPriceMin: 48,
          localPriceMax: 56,
          suggestedPrice: 52,
          estimatedMarginPercent: 23.8,
        },
      };

    case 'pharmacy':
      return {
        category: 'pharmacy',
        categoryName: cat.nameEn,
        marketReach5km: {
          radiusKm: 5,
          estimatedPopulation: 16500,
          nearbyVillages: 7,
          nearbyMarkets: 2,
          potentialCustomers: 2800,
          householdCount: 2900,
        },
        marketReach10km: {
          radiusKm: 10,
          estimatedPopulation: 48000,
          nearbyVillages: 21,
          nearbyMarkets: 6,
          potentialCustomers: 9200,
          householdCount: 8800,
        },
        opportunityScore: 84,
        factors: [
          {
            name: 'Demand Potential',
            nameHi: 'मांग की संभावना',
            score: 92,
            weight: 25,
            reasonEn: 'Critical shortage of OTC fever, diabetes, blood pressure meds and oral rehydration.',
            reasonHi: 'बुखार, मधुमेह, बीपी और ओआरएस जैसी आवश्यक दवाओं की भारी ग्रामीण कमी।',
          },
          {
            name: 'Market Gap',
            nameHi: 'बाजार का खाली स्थान',
            score: 88,
            weight: 20,
            reasonEn: 'Villagers currently travel 14 km to district town for basic prescriptions.',
            reasonHi: 'ग्रामीणों को सामान्य नुस्खे के लिए भी 14 किमी दूर जिला मुख्यालय जाना पड़ता है।',
          },
          {
            name: 'Competition',
            nameHi: 'प्रतिस्पर्धा स्तर',
            score: 80,
            weight: 20,
            reasonEn: 'Only one legacy chemist at block road with erratic stock availability.',
            reasonHi: 'ब्लॉक मार्ग पर सिर्फ एक पुरानी मेडिकल दुकान है जहां अक्सर दवाएं उपलब्ध नहीं रहतीं।',
          },
          {
            name: 'Accessibility',
            nameHi: 'पहुंच और कनेक्टिविटी',
            score: 85,
            weight: 20,
            reasonEn: 'Close to Primary Health Centre (PHC) substation and main crossroads.',
            reasonHi: 'प्राथमिक स्वास्थ्य केंद्र (पीएचसी) उप-केंद्र व मुख्य चौराहे के पास उत्तम स्थिति।',
          },
          {
            name: 'Purchasing Potential',
            nameHi: 'क्रय शक्ति व नकदी प्रवाह',
            score: 75,
            weight: 15,
            reasonEn: 'Healthcare spends are prioritized by rural families even in lean agricultural periods.',
            reasonHi: 'फसल की मंदी में भी ग्रामीण परिवार स्वास्थ्य खर्च को सर्वोच्च प्राथमिकता देते हैं।',
          },
        ],
        scoreExplanationEn:
          'Very high opportunity score due to acute local healthcare access barrier, high volume of recurring lifestyle medicine needs, and Prime Minister Jan Aushadhi generic price competitiveness.',
        scoreExplanationHi:
          'अत्यंत उच्च अवसर स्कोर क्योंकि गांव में दवाओं की तत्काल अनुपलब्धता एक गंभीर समस्या है, और जेनेरिक दवाओं की कम कीमत से भारी मांग पैदा होगी।',
        distributionChannels: [
          {
            name: 'Retail Chemist Counter',
            nameHi: 'रिटेल मेडिकल काउंटर',
            feasibility: 'High',
            sharePercent: 65,
            descriptionEn: 'Direct prescription dispensing and OTC wellness items.',
            descriptionHi: 'डॉक्टर पर्ची की दवाएं और प्राथमिक फर्स्ट-एड काउंटर बिक्री।',
            icon: 'Store',
          },
          {
            name: 'Village Health Worker Tie-up',
            nameHi: 'आशा व स्वास्थ्य कार्यकर्ता सहयोग',
            feasibility: 'High',
            sharePercent: 20,
            descriptionEn: 'Stocking maternal supplements, iron-folic, and pediatric drops.',
            descriptionHi: 'गर्भवती महिलाओं व बच्चों हेतु सप्लीमेंट्स व ओआरएस की त्वरित आपूर्ति।',
            icon: 'Users',
          },
          {
            name: 'Emergency WhatsApp & Home Drop',
            nameHi: 'आपातकालीन व्हाट्सएप व होम डिलीवरी',
            feasibility: 'Medium',
            sharePercent: 15,
            descriptionEn: 'Night delivery for elderly patients in nearby 3 km radius.',
            descriptionHi: 'बुजुर्गों और दूरस्थ घरों के लिए आपातकालीन दवा आपूर्ति।',
            icon: 'Smartphone',
          },
        ],
        competitors: [
          {
            id: 'c1',
            name: 'Shree Ram Medical Hall',
            type: 'Legacy Chemist',
            distanceKm: 2.1,
            rating: 3.6,
            isDirect: true,
            notes: 'High branded medicine prices; lacks generic Jan Aushadhi alternatives.',
            latOffset: -30,
            lngOffset: 25,
          },
          {
            id: 'c2',
            name: 'Town Super Specialty Pharmacy',
            type: 'Town Hospital Chemist',
            distanceKm: 12.5,
            rating: 4.4,
            isDirect: false,
            notes: 'Full stock but requires ₹60 bus fare and 2 hours round trip for villagers.',
            latOffset: 70,
            lngOffset: -60,
          },
        ],
        competitorDensity: 'Low',
        competitorCount: 2,
        swot: {
          strengths: [
            'Inelastic and non-cyclical demand throughout the calendar year',
            'High gross margins on generic formulations (30% - 50%)',
            'Community respect and footfall loyalty',
          ],
          strengthsHi: [
            'साल भर निरंतर और मंदी-मुक्त रहने वाली आवश्यक मांग',
            'जेनेरिक दवाओं पर 30% से 50% तक का आकर्षक ग्रॉस मार्जिन',
            'समाज में उच्च सम्मान और ग्राहकों का अटूट भरोसा',
          ],
          weaknesses: [
            'Requires registered D.Pharm / B.Pharm licenseholder on premises',
            'Working capital tied up in slow-moving medicine inventory',
          ],
          weaknessesHi: [
            'दुकान हेतु पंजीकृत फार्मासिस्ट (डी.फार्मा / बी.फार्मा) लाइसेंस अनिवार्य',
            'कुछ विशेष दवाओं में इन्वेंटरी लागत लंबे समय तक बंधे रहने का जोखिम',
          ],
          opportunities: [
            'Jan Aushadhi scheme subsidy & zero-cost branding support',
            'Point-of-care diagnostics: Blood sugar & BP monitoring services',
          ],
          opportunitiesHi: [
            'प्रधानमंत्री जन औषधि योजना के तहत 2.5 लाख तक की प्रोत्साहन सहायता',
            'ब्लड प्रेशर व शुगर जांच जैसी अतिरिक्त स्वास्थ्य सेवाएं शुरू करना',
          ],
          threats: [
            'Expiry of unsold batches if inventory rotation is sloppy',
            'Regulatory compliance audits by state drug controllers',
          ],
          threatsHi: [
            'इन्वेंटरी नियंत्रण ढीला होने पर दवाओं की एक्सपायरी का नुकसान',
            'औषधि नियंत्रक विभाग द्वारा नियमित निरीक्षण व रिकॉर्ड संधारण',
          ],
        },
        threatsList: [
          {
            threat: 'Stock batch expiry before sale',
            threatHi: 'बिक्री से पूर्व दवाओं की एक्सपायरी होना',
            impact: 'Medium',
            mitigation: 'Implement automated FIFO (First-In, First-Out) shelf software & vendor return policy.',
            mitigationHi: 'सॉफ्टवेयर आधारित पहले एक्सपायर होने वाली दवाओं की ट्रैकिंग व सप्लायर रिटर्न समझौता रखें।',
          },
          {
            threat: 'Strict drug license delays',
            threatHi: 'ड्रग लाइसेंस प्रक्रिया में समय लगना',
            impact: 'High',
            mitigation: 'Prepare audited premises layout and apply via state single-window Nivesh Mitra portal.',
            mitigationHi: 'मानक दुकान का नक्शा व डी.फार्मा दस्तावेज तैयार कर सिंगल-विंडो पोर्टल से आवेदन करें।',
          },
        ],
        pricing: {
          productSample: 'Generic Paracetamol + Cetirizine Strip',
          productSampleHi: 'जेनेरिक पैरासिटामोल + सिट्रीज़ीन स्ट्रिप (10 गोलियां)',
          estimatedCost: 11,
          localPriceMin: 25,
          localPriceMax: 40,
          suggestedPrice: 22,
          estimatedMarginPercent: 50.0,
        },
      };

    // Default / Grocery case
    default:
      return {
        category: category,
        categoryName: cat.nameEn,
        marketReach5km: {
          radiusKm: 5,
          estimatedPopulation: 14200,
          nearbyVillages: 8,
          nearbyMarkets: 3,
          potentialCustomers: 2450,
          householdCount: 2600,
        },
        marketReach10km: {
          radiusKm: 10,
          estimatedPopulation: 42800,
          nearbyVillages: 24,
          nearbyMarkets: 7,
          potentialCustomers: 7800,
          householdCount: 7900,
        },
        opportunityScore: 72,
        factors: [
          {
            name: 'Demand Potential',
            nameHi: 'मांग की संभावना',
            score: 82,
            weight: 25,
            reasonEn: 'Steady recurring demand for staple rations, spices, cooking oils, and toiletries.',
            reasonHi: 'दैनिक राशन, मसाले, तेल और साबुन की निरंतर और आवर्ती मांग।',
          },
          {
            name: 'Market Gap',
            nameHi: 'बाजार का खाली स्थान',
            score: 70,
            weight: 20,
            reasonEn: 'Existing shops lack digital UPI payments, cold beverages, and transparent weighing.',
            reasonHi: 'वर्तमान दुकानों में यूपीआई क्यूआर कोड, कोल्ड स्टोरेज और इलेक्ट्रॉनिक तराजू की कमी।',
          },
          {
            name: 'Competition',
            nameHi: 'प्रतिस्पर्धा स्तर',
            score: 64,
            weight: 20,
            reasonEn: 'Four small traditional kirana stores within 2 km radius operating with limited stock.',
            reasonHi: '2 किमी दायरे में चार छोटी पारंपरिक दुकानें हैं जिनमें सीमित सामान मिलता है।',
          },
          {
            name: 'Accessibility',
            nameHi: 'पहुंच और कनेक्टिविटी',
            score: 78,
            weight: 20,
            reasonEn: 'Central village bus stand node with steady vehicular and pedestrian footfall.',
            reasonHi: 'गांव के मुख्य बस अड्डे पर केंद्रीय स्थिति जहां प्रतिदिन भारी आवागमन रहता है।',
          },
          {
            name: 'Purchasing Potential',
            nameHi: 'क्रय शक्ति व नकदी प्रवाह',
            score: 66,
            weight: 15,
            reasonEn: 'Moderate ticket size per purchase; spiked during monthly harvest cycles and festivals.',
            reasonHi: 'प्रति बिल औसत खर्च मध्यम है, जो फसल कटाई और शादी-ब्याह के मौसम में दुगुना हो जाता है।',
          },
        ],
        scoreExplanationEn:
          'Demand appears favorable because the prototype dataset indicates a large potential customer base of over 2,400 households within 5 km, moderate competition from unorganized kiosks, and clear willingness to pay for quality packaged staples.',
        scoreExplanationHi:
          'मांग अनुकूल प्रतीत होती है क्योंकि प्रोटोटाइप डेटासेट 5 किमी के भीतर 2,400 से अधिक परिवारों के ग्राहक आधार, केवल छोटी असंगठित दुकानों की मौजूदगी और ब्रांडेड शुद्ध राशन के प्रति बढ़ती मांग को दर्शाता है।',
        distributionChannels: [
          {
            name: 'Local Kirana Storefront',
            nameHi: 'मुख्य सड़क पर किराना दुकान',
            feasibility: 'High',
            sharePercent: 55,
            descriptionEn: 'Direct walk-in retail sales to villagers from 7:00 AM to 9:00 PM.',
            descriptionHi: 'सुबह 7 से रात 9 बजे तक ग्रामीणों को सीधा काउंटर विक्रय।',
            icon: 'Store',
          },
          {
            name: 'Weekly Haat (Bazaar) Stall',
            nameHi: 'साप्ताहिक हाट स्टॉल',
            feasibility: 'High',
            sharePercent: 20,
            descriptionEn: 'Special discounted wholesale packs sold on weekly market days.',
            descriptionHi: 'साप्ताहिक बाजार के दिन थोक डिस्काउंट पैक की अतिरिक्त बिक्री।',
            icon: 'ShoppingBag',
          },
          {
            name: 'WhatsApp & Call Orders',
            nameHi: 'व्हाट्सएप व फोन ऑर्डर',
            feasibility: 'Medium',
            sharePercent: 15,
            descriptionEn: 'Pre-packed grocery lists ready for pickup during farmer commute.',
            descriptionHi: 'खेत से लौटते समय किसानों के लिए पहले से तैयार पैक किए गए राशन के थैले।',
            icon: 'Smartphone',
          },
          {
            name: 'Doorstep Village Delivery',
            nameHi: 'गांव में होम डिलीवरी',
            feasibility: 'Medium',
            sharePercent: 10,
            descriptionEn: 'Monthly ration delivery for bulk orders exceeding ₹2,000.',
            descriptionHi: '₹2,000 से अधिक के मासिक राशन ऑर्डर पर गांव में निःशुल्क डिलीवरी।',
            icon: 'Truck',
          },
        ],
        competitors: [
          {
            id: 'c1',
            name: 'Gupta General Store',
            type: 'Traditional Kirana',
            distanceKm: 0.4,
            rating: 3.5,
            isDirect: true,
            notes: 'Established 15 years ago; no UPI; customer complaints regarding slow billing.',
            latOffset: 20,
            lngOffset: -15,
          },
          {
            id: 'c2',
            name: 'Maa Durga Traders',
            type: 'Wholesale & Retail',
            distanceKm: 1.2,
            rating: 3.8,
            isDirect: true,
            notes: 'Located on bypass; specializes in 50kg grain bags, poor retail variety.',
            latOffset: -35,
            lngOffset: 45,
          },
          {
            id: 'c3',
            name: 'Chhotu Mini Kiosk',
            type: 'Pan & Petty Shop',
            distanceKm: 0.2,
            rating: 3.1,
            isDirect: false,
            notes: 'Only sells chips, biscuits, cigarettes; lacks staple kitchen rations.',
            latOffset: 10,
            lngOffset: 30,
          },
          {
            id: 'c4',
            name: 'Kisan Seva Kendra Grocery',
            type: 'Cooperative Outlet',
            distanceKm: 2.8,
            rating: 4.0,
            isDirect: true,
            notes: 'Subsidized items but limited hours (10 AM - 4 PM) and erratic inventory.',
            latOffset: -50,
            lngOffset: -40,
          },
        ],
        competitorDensity: 'Medium',
        competitorCount: 4,
        swot: {
          strengths: [
            'Essential daily needs with zero demand obsolescence',
            'Strong customer retention through polite service and fair pricing',
            'High inventory velocity for fast-moving consumer goods (FMCG)',
          ],
          strengthsHi: [
            'दैनिक राशन कभी पुराना नहीं होता; साल के 365 दिन स्थिर मांग',
            'विनम्र व्यवहार और सही तौल से पक्के ग्राहकों का तेजी से निर्माण',
            'दाल, तेल, चायपत्ती जैसे सामानों की तेजी से होने वाली बिक्री',
          ],
          weaknesses: [
            'Pressure from customers for traditional informal credit (Udhaar)',
            'Thin profit margins on open commodities like sugar and wheat flour',
          ],
          weaknessesHi: [
            'ग्रामीण ग्राहकों द्वारा उधारी मांगने का पारंपरिक सामाजिक दबाव',
            'खुले अनाज व चीनी जैसी वस्तुओं पर 4-6% का कम लाभ मार्जिन',
          ],
          opportunities: [
            'Stocking high-margin spices, packaged snacks, and cleaning products (18-25%)',
            'Digital payment cashback & mini-banking micro-ATM kiosk integration',
          ],
          opportunitiesHi: [
            'मसालों, पैकेटबंद नमकीन व साबुन-सर्फ पर 18-25% तक का बेहतर मुनाफा',
            'दुकान पर माइक्रो-एटीएम (नकद निकासी) शुरू कर अतिरिक्त आय कमाना',
          ],
          threats: [
            'Damage from rodents and monsoon moisture if storage racks are poor',
            'Price volatility in wholesale mandis impacting procurement cost',
          ],
          threatsHi: [
            'मानसून में सीलन व चूहों से खुले राशन का नुकसान होने का खतरा',
            'थोक मंडी में अचानक कीमतों में उछाल से खरीद लागत बढ़ना',
          ],
        },
        threatsList: [
          {
            threat: 'Customer informal credit (Udhaar) default risk',
            threatHi: 'ग्राहकों द्वारा उधारी में पैसा अटकने का जोखिम',
            impact: 'High',
            mitigation: 'Set strict ₹500 credit limit and offer 2% discount incentive for prompt cash/UPI.',
            mitigationHi: 'उधारी की सीमा अधिकतम ₹500 रखें व नकद/यूपीआई पर 2% की तत्काल छूट दें।',
          },
          {
            threat: 'Monsoon dampness & rodent infestation',
            threatHi: 'बरसात में सीलन व कीट-पतंगों से अनाज की बर्बादी',
            impact: 'Medium',
            mitigation: 'Install elevated galvanised slotted angle iron racks and moisture-proof plastic pallets.',
            mitigationHi: 'जमीन से 6 इंच ऊपर लोहे के रैक व एयरटाइट प्लास्टिक ड्रमों का प्रयोग करें।',
          },
          {
            threat: 'Seasonal agricultural lean period sales dip',
            threatHi: 'फसल बोने के बाद के महीनों में ग्रामीणों के पास नकदी की कमी',
            impact: 'Medium',
            mitigation: 'Diversify product mix with school stationery and mobile recharge vouchers.',
            mitigationHi: 'स्कूल कॉपी-किताब, कलम और मोबाइल रिचार्ज जैसी अतिरिक्त वस्तुएं रखें।',
          },
        ],
        pricing: {
          productSample: 'Standard Daily Ration Basket (Mustard Oil, Arhar Dal, Basmati Rice)',
          productSampleHi: 'मानक दैनिक राशन बास्केट (सरसों तेल, अरहर दाल, चावल 1 किग्रा प्रत्येक)',
          estimatedCost: 285,
          localPriceMin: 320,
          localPriceMax: 360,
          suggestedPrice: 335,
          estimatedMarginPercent: 17.5,
        },
      };
  }
}

/**
 * Preconfigured Demo Scenarios for Instant SIH Judge Evaluation
 */
export interface DemoScenario {
  id: string;
  title: string;
  subtitle: string;
  capital: number;
  category: BusinessCategory;
  location: LocationData;
  expectedCost: number;
  expectedLoan: number;
  expectedScheme: string;
  description: string;
}

export const DEMO_SCENARIOS: DemoScenario[] = [
  {
    id: 'demo-grocery',
    title: 'Demo 1: Village Grocery Store',
    subtitle: 'Standard Rural SME (PMMY Term Loan Eligible)',
    capital: 100000,
    category: 'grocery',
    location: SAMPLE_LOCATIONS[0], // Mirzapur
    expectedCost: 1000000,
    expectedLoan: 900000,
    expectedScheme: 'Term Loan Scheme (8.0% p.a., 7 yrs, 6 mos moratorium)',
    description: 'A scalable daily grocery shop with ₹1.00 Lakh self-contribution creating ₹10.00 Lakh economic asset.',
  },
  {
    id: 'demo-micro',
    title: 'Demo 2: Small Dairy / Micro Kiosk',
    subtitle: 'Ultra-Micro Setup (PMMY Shishu Micro Finance)',
    capital: 10000,
    category: 'dairy',
    location: SAMPLE_LOCATIONS[2], // Madhubani
    expectedCost: 100000,
    expectedLoan: 90000,
    expectedScheme: 'Micro Finance Scheme (6.5% p.a., 3 yrs, 3 mos moratorium)',
    description: 'Low-capital entry for marginal farmers with ₹10,000 margin capital generating ₹1.00 Lakh project value.',
  },
  {
    id: 'demo-large',
    title: 'Demo 3: Commercial Agri-Input Hub',
    subtitle: 'High Capital Project (Exceeds Prototype Limit)',
    capital: 600000,
    category: 'agriculture_inputs',
    location: SAMPLE_LOCATIONS[3], // Satara
    expectedCost: 6000000,
    expectedLoan: 5400000,
    expectedScheme: 'Outside Configured Prototype Scheme Limit (> ₹50 Lakh)',
    description: 'Demonstrates rule-guardrails when project cost hits ₹60.00 Lakh, requiring special Stand-Up India facility.',
  },
];
