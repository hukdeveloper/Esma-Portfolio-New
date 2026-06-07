export const publications = [
  {
    id: 1,
    title: 'Anaphoric expressions used in English and the Urdu language',
    journal: 'Journal of Applied Linguistics and TESOL (JALT)',
    year: 2025,
    volume: '8(3)',
    pages: '1333–1345',
    type: 'Journal Article',
    featured: true,
    abstract: 'This comparative study analyzes the syntactic and semantic distribution of anaphoric expressions in English and Urdu. By examining pronoun resolution, binding principles, and conversational contexts, the research highlights linguistic variations and structural differences in reference tracking across the two languages, offering practical insights for bilingual education and translation.',
    keywords: ['anaphoric expressions', 'Urdu syntax', 'English grammar', 'contrastive linguistics'],
  },
  {
    id: 2,
    title: 'Gender differences in indirectness of conversation: A comparative study of male and female communication styles',
    journal: 'Contemporary Journal of Social Science Review',
    year: 2025,
    volume: '3(3)',
    pages: '1470–1485',
    type: 'Journal Article',
    featured: true,
    abstract: 'An empirical investigation exploring gender-specific patterns of linguistic indirectness, politeness strategies, and conversational styles. Drawing on sociolinguistic frameworks, the study analyzes spoken discourse to understand how men and women navigate conversational dynamics, social power, and face-saving acts in daily interactions.',
    keywords: ['gender and language', 'indirectness', 'conversational styles', 'sociolinguistics', 'politeness'],
  },
  {
    id: 3,
    title: 'Language Shift in Wakhi: A Case Study from Northern Pakistan',
    journal: 'Research Under Review',
    year: 'Under Review',
    type: 'Under Review',
    featured: false,
    abstract: 'A sociolinguistic case study examining the shift, endangerment, and maintenance patterns of the Wakhi language in the multilingual context of Gilgit-Baltistan. The paper discusses factors contributing to the decline of mother-tongue usage among younger generations and evaluates community-led preservation initiatives.',
    keywords: ['Wakhi language', 'language shift', 'endangered languages', 'Northern Pakistan', 'language preservation'],
  },
  {
    id: 4,
    title: 'Punjabi as a Foul Language: A Case Study of the Punjabi Christian Community in Gilgit',
    journal: 'Research Under Review',
    year: 'Under Review',
    type: 'Under Review',
    featured: false,
    abstract: 'This research examines sociolinguistic attitudes, language valuation, and identity among the Punjabi-speaking Christian minority in Gilgit. It explores the social stigma associated with the Punjabi language in specific regions, the linguistic discrimination experienced by the community, and subsequent language shift patterns.',
    keywords: ['sociolinguistics', 'Punjabi Christian community', 'Gilgit', 'language attitudes', 'marginalized languages'],
  },
  {
    id: 5,
    title: 'Acquisition of English Attributive Adjective Order by Saudi EFL Students',
    journal: 'Ongoing Research',
    year: 'Ongoing',
    type: 'Ongoing',
    featured: false,
    abstract: 'A study in second language acquisition examining the acquisition patterns of English attributive adjective ordering by Saudi EFL learners. The research identifies common syntactic errors, investigates the influence of first language (Arabic) transfer, and provides pedagogical implications for teaching English syntax.',
    keywords: ['second language acquisition', 'EFL learning', 'adjective order', 'attributive adjectives', 'first language transfer'],
  }
];

export const featuredPublications = publications.filter((p) => p.featured);
export const recentPublications = publications.filter((p) => p.type === 'Journal Article');
