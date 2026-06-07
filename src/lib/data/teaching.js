export const courses = [
  {
    id: 1,
    code: 'LING 101',
    title: 'Introduction to Applied Linguistics',
    level: 'Undergraduate',
    levelColor: '#27AE60',
    description:
      'A foundational course exploring how language science solves real-world issues. Topics include language education methodology, translation theory, language planning, sociolinguistic applications, and bilingualism.',
    outcomes: [
      'Understand the scope and key domains of applied linguistics',
      'Analyze language acquisition theories and their classroom applications',
      'Critically evaluate language policy and sociolinguistic problems',
    ],
    currentlyTeaching: true,
  },
  {
    id: 2,
    code: 'LING 201',
    title: 'Second Language Acquisition',
    level: 'Advanced Undergraduate',
    levelColor: '#C9A94B',
    description:
      'Explores the processes, stages, and factors involved in acquiring a second language. Students study cognitive, linguistic, and socio-cultural frameworks of language learning alongside pedagogical implications.',
    outcomes: [
      'Contrast major second language acquisition theories and models',
      'Analyze learner errors and interlanguage development patterns',
      'Design pedagogical strategies that support natural L2 acquisition',
    ],
    currentlyTeaching: true,
  },
  {
    id: 3,
    code: 'LING 301',
    title: 'Bilingualism',
    level: 'Advanced Undergraduate',
    levelColor: '#C9A94B',
    description:
      'An investigation into individual and societal bilingualism. The course covers the cognitive impacts of bilingualism, linguistic code-switching, language maintenance, and bilingual education policies.',
    outcomes: [
      'Understand cognitive and neurolinguistic aspects of bilingual processing',
      'Analyze code-switching and bilingual identity in social interaction',
      'Evaluate international models of bilingual and multilingual education',
    ],
    currentlyTeaching: true,
  },
  {
    id: 4,
    code: 'LING 305',
    title: 'Language Endangerment',
    level: 'Advanced Undergraduate / Postgraduate',
    levelColor: '#1B4F72',
    description:
      'Examines the causes and consequences of language shift, endangerment, and extinction globally. Students study language documentation techniques, community-based preservation, and revitalization strategies.',
    outcomes: [
      'Evaluate socio-political and economic factors causing language shift',
      'Apply standard field methodologies to document linguistic data',
      'Formulate action plans for endangered language revitalization',
    ],
    currentlyTeaching: false,
  },
  {
    id: 5,
    code: 'LING 100',
    title: 'Functional English',
    level: 'Undergraduate',
    levelColor: '#27AE60',
    description:
      'A practical skill-based course designed to develop students\' communicative competence in academic and professional English. Focuses on oral presentation, reading analysis, grammar, and writing.',
    outcomes: [
      'Draft well-structured academic essays and professional communications',
      'Deliver clear and persuasive oral presentations in English',
      'Apply advanced English grammatical structures in speech and writing',
    ],
    currentlyTeaching: true,
  },
];

export const teachingPhilosophy = {
  heading: 'Teaching Philosophy',
  summary:
    'I believe effective language education is learner-centered, inclusive, and transformative. My teaching approach combines theoretical understanding with practical application, encouraging students to think critically, engage collaboratively, and connect linguistic concepts to real-world contexts.',
  principles: [
    {
      title: 'Learner-Centered Pedagogy',
      body: 'I design my courses to actively engage students in the learning process, placing their ideas and inquiries at the center of classroom exploration to build critical thinkers.',
    },
    {
      title: 'Inclusivity & Support',
      body: 'I strive to create supportive learning environments that foster intellectual curiosity, academic confidence, and respect for diverse linguistic and cultural backgrounds.',
    },
    {
      title: 'Theory to Application',
      body: 'Linguistics is most powerful when applied. I connect abstract grammatical and sociolinguistic concepts to real-world teaching, learning, and communication contexts.',
    },
    {
      title: 'Collaborative Growth',
      body: 'I encourage collaborative projects and discussions, promoting peer-to-peer learning and helping students develop the collaborative and communication skills needed for their futures.',
    },
  ],
};

export const teacherTraining = {
  stats: [
    { value: '100+', label: 'Teachers Trained' }
  ],
  areas: [
    'Classroom Management Strategies',
    'Inclusive Education',
    'Digital Tools for Teaching',
    '21st Century Skills',
    'Lesson Planning and Time Management',
    'Social Emotional Learning (SEL)',
    'Storytelling in Teaching',
    'Implementation of Digital Skills in the Classroom',
    'Experiential Learning Methods',
    'Teacher Wellness and Self-Care'
  ]
};
