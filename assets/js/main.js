// ---- Theme + language preferences (shared by every page) ----
(function () {
  var root = document.documentElement;
  var THEME_KEY = 'kimsjlab-theme';
  var LANG_KEY = 'kimsjlab-language';

  var UI = {
    'menu': { en: 'Menu', ko: '메뉴' },
    'theme.dark': { en: 'Use dark mode', ko: '다크 모드 사용' },
    'theme.light': { en: 'Use light mode', ko: '라이트 모드 사용' },
    'language': { en: 'Language', ko: '언어' },
    'pager.prev': { en: '\u2039 Prev', ko: '\u2039 이전' },
    'pager.next': { en: 'Next \u203a', ko: '다음 \u203a' }
  };

  // [source text, English, Korean]. Names and publication metadata stay unchanged.
  var TRANSLATIONS = [
  [
    "Viral Pathogenesis & Vaccine Lab",
    "Viral Pathogenesis & Vaccine Lab",
    "바이러스 병인 및 백신 연구실"
  ],
  [
    "Kyungpook National University",
    "Kyungpook National University",
    "경북대학교"
  ],
  [
    "Home",
    "Home",
    "홈"
  ],
  [
    "About",
    "About",
    "연구실 소개"
  ],
  [
    "Members",
    "Members",
    "구성원"
  ],
  [
    "Publications",
    "Publications",
    "논문"
  ],
  [
    "Contact",
    "Contact",
    "연락처"
  ],
  [
    "Get in Touch",
    "Get in Touch",
    "연락하기"
  ],
  [
    "Come",
    "Come",
    "우리와"
  ],
  [
    "join us",
    "join us",
    "함께해요"
  ],
  [
    "We are always looking for motivated people to join the lab. If you are interested in an undergraduate internship, graduate study or a postdoctoral position, feel free to reach out.",
    "We are always looking for motivated people to join the lab. If you are interested in an undergraduate internship, graduate study or a postdoctoral position, feel free to reach out.",
    "함께 연구할 열정적인 분을 언제나 찾고 있습니다. 학부 인턴, 대학원 진학 또는 박사후연구원 과정에 관심이 있다면 편하게 연락해 주세요."
  ],
  [
    "Email",
    "Email",
    "이메일"
  ],
  [
    "Address",
    "Address",
    "주소"
  ],
  [
    "680 Gukchaebosang-ro, Jung-gu, Daegu 41944, South Korea",
    "680 Gukchaebosang-ro, Jung-gu, Daegu 41944, South Korea",
    "대한민국 대구광역시 중구 국채보상로 680 (41944)"
  ],
  [
    "KNU School of Medicine, New Building, Room N329",
    "KNU School of Medicine, New Building, Room N329",
    "경북대학교 의과대학 신관 N329호"
  ],
  [
    "Affiliation",
    "Affiliation",
    "소속"
  ],
  [
    "Department of Microbiology,",
    "Department of Microbiology,",
    "미생물학교실,"
  ],
  [
    "School of Medicine, Kyungpook National University",
    "School of Medicine, Kyungpook National University",
    "경북대학교 의과대학"
  ],
  [
    "KNU Viral Pathogenesis & Vaccine Lab",
    "KNU Viral Pathogenesis & Vaccine Lab",
    "경북대학교 바이러스 병인 및 백신 연구실"
  ],
  [
    "Department of Microbiology",
    "Department of Microbiology",
    "미생물학교실"
  ],
  [
    "School of Medicine",
    "School of Medicine",
    "의과대학"
  ],
  [
    "Explore",
    "Explore",
    "둘러보기"
  ],
  [
    "Connect",
    "Connect",
    "연결"
  ],
  [
    "Seong-Jun Kim · KNU Viral Pathogenesis & Vaccine Lab",
    "Seong-Jun Kim · KNU Viral Pathogenesis & Vaccine Lab",
    "Seong-Jun Kim · 경북대학교 바이러스 병인 및 백신 연구실"
  ],
  [
    "Research Output",
    "Research Output",
    "연구 성과"
  ],
  [
    "Selected",
    "Selected",
    "주요"
  ],
  [
    "publications",
    "publications",
    "연구 논문"
  ],
  [
    "first authors ·",
    "first authors ·",
    "제1저자 ·"
  ],
  [
    "corresponding authors · For the full list, see",
    "corresponding authors · For the full list, see",
    "교신저자 · 전체 논문 목록:"
  ],
  [
    "Our People",
    "Our People",
    "연구실 구성원"
  ],
  [
    "The team",
    "The team",
    "연구를 이끄는"
  ],
  [
    "behind the science",
    "behind the science",
    "사람들"
  ],
  [
    "Current Members",
    "Current Members",
    "현재 구성원"
  ],
  [
    "Assistant Professor",
    "Assistant Professor",
    "조교수"
  ],
  [
    "Department of Microbiology, School of Medicine, Kyungpook National University",
    "Department of Microbiology, School of Medicine, Kyungpook National University",
    "경북대학교 의과대학 미생물학교실"
  ],
  [
    "2025– | Assistant Professor, Department of Microbiology, School of Medicine, KNU",
    "2025– | Assistant Professor, Department of Microbiology, School of Medicine, KNU",
    "2025– | 경북대학교 의과대학 미생물학교실 조교수"
  ],
  [
    "2022–2024 | Director, Center for Convergent Research of Emerging Virus Infection (CEVI), KRICT",
    "2022–2024 | Director, Center for Convergent Research of Emerging Virus Infection (CEVI), KRICT",
    "2022–2024 | 한국화학연구원 신종바이러스융합연구단(CEVI) 단장"
  ],
  [
    "2016–2022 | Vaccine R&D Team Leader, CEVI, KRICT",
    "2016–2022 | Vaccine R&D Team Leader, CEVI, KRICT",
    "2016–2022 | 한국화학연구원 CEVI 백신 연구개발 팀장"
  ],
  [
    "2015–2025 | Principal Researcher, Korea Research Institute of Chemical Technology (KRICT)",
    "2015–2025 | Principal Researcher, Korea Research Institute of Chemical Technology (KRICT)",
    "2015–2025 | 한국화학연구원(KRICT) 책임연구원"
  ],
  [
    "2011–2015 | Assistant Project Scientist, Division of Infectious Diseases, University of California San Diego",
    "2011–2015 | Assistant Project Scientist, Division of Infectious Diseases, University of California San Diego",
    "2011–2015 | 캘리포니아대학교 샌디에이고 감염병 부문 Assistant Project Scientist"
  ],
  [
    "2008–2010 | Postdoctoral Fellow, Harvard Medical School",
    "2008–2010 | Postdoctoral Fellow, Harvard Medical School",
    "2008–2010 | 하버드 의과대학 박사후연구원"
  ],
  [
    "2006–2007 | Postdoctoral Fellow, Yonsei University",
    "2006–2007 | Postdoctoral Fellow, Yonsei University",
    "2006–2007 | 연세대학교 박사후연구원"
  ],
  [
    "2006 | Ph.D. in Biotechnology, Yonsei University",
    "2006 | Ph.D. in Biotechnology, Yonsei University",
    "2006 | 연세대학교 생명공학 박사"
  ],
  [
    "Research interests: viral pathogenesis, molecular virology, mitochondrial and lysosomal dynamics, innate immunity, vaccine development",
    "Research interests: viral pathogenesis, molecular virology, mitochondrial and lysosomal dynamics, innate immunity, vaccine development",
    "연구 관심 분야: 바이러스 병인, 분자바이러스학, 미토콘드리아·리소좀 역동성, 선천면역, 백신 개발"
  ],
  [
    "Graduate Students & Researchers",
    "Graduate Students & Researchers",
    "대학원생 및 연구원"
  ],
  [
    "We are hiring!",
    "We are hiring!",
    "새 구성원을 모집합니다!"
  ],
  [
    "Graduate Student / Postdoc",
    "Graduate Student / Postdoc",
    "대학원생 / 박사후연구원"
  ],
  [
    "Motivated students and researchers interested in molecular virology, virus–host interaction or vaccine development are welcome to join the lab.",
    "Motivated students and researchers interested in molecular virology, virus–host interaction or vaccine development are welcome to join the lab.",
    "분자바이러스학, 바이러스–숙주 상호작용 또는 백신 개발에 관심 있는 열정적인 학생과 연구자를 환영합니다."
  ],
  [
    "Undergraduate Interns",
    "Undergraduate Interns",
    "학부 인턴"
  ],
  [
    "Always welcome",
    "Always welcome",
    "언제나 환영합니다"
  ],
  [
    "Curious about virology research? Undergraduate interns are always welcome to get hands-on experience at the bench.",
    "Curious about virology research? Undergraduate interns are always welcome to get hands-on experience at the bench.",
    "바이러스학 연구가 궁금한가요? 실험실에서 직접 연구를 경험하고 싶은 학부 인턴을 언제나 환영합니다."
  ],
  [
    "About us",
    "About us",
    "연구실 소개"
  ],
  [
    "Understanding",
    "Understanding",
    "질병 예방을 위한"
  ],
  [
    "viruses",
    "viruses",
    "바이러스"
  ],
  [
    "to prevent disease",
    "to prevent disease",
    "이해"
  ],
  [
    "We ask how viruses manipulate host organelles and innate immunity — and turn those answers into vaccines and antivirals for diseases that still have no good options.",
    "We ask how viruses manipulate host organelles and innate immunity — and turn those answers into vaccines and antivirals for diseases that still have no good options.",
    "바이러스가 숙주 세포 소기관과 선천면역을 조절하는 원리를 탐구하고, 그 해답을 효과적인 치료 수단이 부족한 질환의 백신과 항바이러스제로 연결합니다."
  ],
  [
    "Our Mission",
    "Our Mission",
    "연구 목표"
  ],
  [
    "We aim to define the molecular mechanisms of viral pathogenesis, with a particular focus on the mitochondrial, nuclear and lysosomal dynamics that viruses exploit to replicate, evade innate immunity and persist in the host.",
    "We aim to define the molecular mechanisms of viral pathogenesis, with a particular focus on the mitochondrial, nuclear and lysosomal dynamics that viruses exploit to replicate, evade innate immunity and persist in the host.",
    "바이러스가 증식하고 선천면역을 회피하며 숙주에 지속 감염하기 위해 이용하는 미토콘드리아·핵·리소좀의 역동성에 주목하여 바이러스 병인의 분자 기전을 규명합니다."
  ],
  [
    "Our Vision",
    "Our Vision",
    "연구 비전"
  ],
  [
    "Discovery should not stop at the bench. We translate mechanistic insight into vaccine candidates and antiviral strategies for emerging and re-emerging infectious diseases with unmet medical needs.",
    "Discovery should not stop at the bench. We translate mechanistic insight into vaccine candidates and antiviral strategies for emerging and re-emerging infectious diseases with unmet medical needs.",
    "발견은 실험실에 머물러서는 안 됩니다. 기전 연구의 통찰을 미충족 의료 수요가 있는 신종·재출현 감염병의 백신 후보와 항바이러스 전략으로 발전시킵니다."
  ],
  [
    "Research Focus",
    "Research Focus",
    "연구 분야"
  ],
  [
    "Where we concentrate our efforts",
    "Where we concentrate our efforts",
    "집중 연구 분야"
  ],
  [
    "Organelle dynamics in viral pathogenesis",
    "Organelle dynamics in viral pathogenesis",
    "바이러스 병인에서 세포 소기관의 역동성"
  ],
  [
    "— mitochondrial fission and mitophagy, nuclear remodeling and lysosomal function during infection by hepatitis viruses, coronaviruses and flaviviruses.",
    "— mitochondrial fission and mitophagy, nuclear remodeling and lysosomal function during infection by hepatitis viruses, coronaviruses and flaviviruses.",
    "— 간염바이러스, 코로나바이러스 및 플라비바이러스 감염 과정의 미토콘드리아 분열·미토파지, 핵 재구성과 리소좀 기능."
  ],
  [
    "Virus–host interaction and innate immunity",
    "Virus–host interaction and innate immunity",
    "바이러스–숙주 상호작용과 선천면역"
  ],
  [
    "— how viral proteins and RNA modifications tune RIG-I-like receptor signaling, interferon responses and inflammation.",
    "— how viral proteins and RNA modifications tune RIG-I-like receptor signaling, interferon responses and inflammation.",
    "— 바이러스 단백질과 RNA 변형이 RIG-I 유사 수용체 신호전달, 인터페론 반응 및 염증을 조절하는 기전."
  ],
  [
    "Vaccine research and development",
    "Vaccine research and development",
    "백신 연구 및 개발"
  ],
  [
    "— antigen design, platform engineering and preclinical evaluation of vaccines for infectious diseases with unmet medical needs.",
    "— antigen design, platform engineering and preclinical evaluation of vaccines for infectious diseases with unmet medical needs.",
    "— 미충족 의료 수요가 있는 감염병의 백신을 위한 항원 설계, 플랫폼 개발 및 전임상 평가."
  ],
  [
    "Antiviral discovery",
    "Antiviral discovery",
    "항바이러스제 발굴"
  ],
  [
    "— structure-based and phenotypic screening for inhibitors of viral proteases, replication and ribosomal frameshifting.",
    "— structure-based and phenotypic screening for inhibitors of viral proteases, replication and ribosomal frameshifting.",
    "— 바이러스 단백질분해효소, 복제 및 리보솜 프레임시프팅 억제제의 구조·표현형 기반 스크리닝."
  ],
  [
    "Our Approach",
    "Our Approach",
    "연구 방법"
  ],
  [
    "The lab is built on classical molecular virology — infectious clones, replicon systems, BSL-2/3 virology — combined with cell biology, imaging, CRISPR screening and animal models of infection. We work closely with chemists, structural biologists and clinicians, a habit carried over from years of national emerging-virus response programs.",
    "The lab is built on classical molecular virology — infectious clones, replicon systems, BSL-2/3 virology — combined with cell biology, imaging, CRISPR screening and animal models of infection. We work closely with chemists, structural biologists and clinicians, a habit carried over from years of national emerging-virus response programs.",
    "감염성 클론, 레플리콘 시스템, BSL-2/3 바이러스학 등 전통적인 분자바이러스학에 세포생물학, 이미징, CRISPR 스크리닝 및 감염 동물 모델을 결합합니다. 국가 신종바이러스 대응 사업의 오랜 경험을 바탕으로 화학자, 구조생물학자 및 임상의와 긴밀히 협력합니다."
  ],
  [
    "Our Values",
    "Our Values",
    "우리가 추구하는 가치"
  ],
  [
    "Rigorous experiments, honest data and a collegial bench culture. We welcome students and researchers who are curious about how viruses work and willing to follow a question wherever it leads.",
    "Rigorous experiments, honest data and a collegial bench culture. We welcome students and researchers who are curious about how viruses work and willing to follow a question wherever it leads.",
    "엄밀한 실험, 정직한 데이터와 협력적인 연구 문화를 추구합니다. 바이러스의 작동 원리에 호기심을 갖고 연구 질문을 끝까지 탐구할 학생과 연구자를 환영합니다."
  ],
  [
    "Join us / Get in touch",
    "Join us / Get in touch",
    "연구실 지원 및 문의"
  ],
  [
    "Molecular Virology & Vaccine Development",
    "Molecular Virology & Vaccine Development",
    "분자바이러스학 및 백신 개발"
  ],
  [
    "How viruses rewire the",
    "How viruses rewire the",
    "생존을 위해 바이러스는"
  ],
  [
    "cell",
    "cell",
    "세포를"
  ],
  [
    "to survive.",
    "to survive.",
    "어떻게 바꿀까."
  ],
  [
    "We study the mitochondrial, nuclear and lysosomal dynamics that viruses hijack during infection, and translate that biology into vaccines and antivirals for infectious diseases with unmet medical needs.",
    "We study the mitochondrial, nuclear and lysosomal dynamics that viruses hijack during infection, and translate that biology into vaccines and antivirals for infectious diseases with unmet medical needs.",
    "바이러스가 감염 중 이용하는 미토콘드리아·핵·리소좀의 역동성을 연구하고, 이를 미충족 의료 수요가 있는 감염병의 백신과 항바이러스제 개발로 연결합니다."
  ],
  [
    "About the lab",
    "About the lab",
    "연구실 소개"
  ],
  [
    "View publications",
    "View publications",
    "논문 보기"
  ],
  [
    "What we do",
    "What we do",
    "주요 연구"
  ],
  [
    "From organelle dynamics",
    "From organelle dynamics",
    "세포 소기관의 역동성에서"
  ],
  [
    "to protective immunity",
    "to protective immunity",
    "방어 면역까지"
  ],
  [
    "The lab combines molecular virology, cell biology and innate immunology to understand how RNA and DNA viruses remodel host organelles — and uses those insights to build better vaccines and antivirals.",
    "The lab combines molecular virology, cell biology and innate immunology to understand how RNA and DNA viruses remodel host organelles — and uses those insights to build better vaccines and antivirals.",
    "분자바이러스학, 세포생물학과 선천면역학을 결합하여 RNA·DNA 바이러스가 숙주 소기관을 재구성하는 원리를 이해하고, 이를 바탕으로 더 나은 백신과 항바이러스제를 개발합니다."
  ],
  [
    "Organelle Dynamics in Infection",
    "Organelle Dynamics in Infection",
    "감염에서 세포 소기관의 역동성"
  ],
  [
    "Mitochondrial fission and mitophagy, nuclear and lysosomal remodeling — how hepatitis viruses, coronaviruses and flaviviruses reshape organelles to establish persistent infection.",
    "Mitochondrial fission and mitophagy, nuclear and lysosomal remodeling — how hepatitis viruses, coronaviruses and flaviviruses reshape organelles to establish persistent infection.",
    "미토콘드리아 분열과 미토파지, 핵과 리소좀의 재구성 등 간염바이러스·코로나바이러스·플라비바이러스가 지속 감염을 위해 소기관을 변화시키는 원리를 연구합니다."
  ],
  [
    "Viral Pathogenesis & Innate Immunity",
    "Viral Pathogenesis & Innate Immunity",
    "바이러스 병인 및 선천면역"
  ],
  [
    "Dissecting virus–host interactions that tune RIG-I-like receptor signaling, interferon induction and inflammation, using animal models of emerging viral disease.",
    "Dissecting virus–host interactions that tune RIG-I-like receptor signaling, interferon induction and inflammation, using animal models of emerging viral disease.",
    "신종 바이러스 질환 동물 모델을 이용하여 RIG-I 유사 수용체 신호전달, 인터페론 유도 및 염증을 조절하는 바이러스–숙주 상호작용을 분석합니다."
  ],
  [
    "Vaccines for Unmet Needs",
    "Vaccines for Unmet Needs",
    "미충족 의료 수요를 위한 백신"
  ],
  [
    "Antigen design, platform development and preclinical evaluation of vaccines and antiviral candidates against emerging and re-emerging viruses.",
    "Antigen design, platform development and preclinical evaluation of vaccines and antiviral candidates against emerging and re-emerging viruses.",
    "신종·재출현 바이러스에 대한 항원 설계, 플랫폼 개발, 백신 및 항바이러스 후보의 전임상 평가를 수행합니다."
  ],
  [
    "Research Highlights",
    "Research Highlights",
    "주요 연구 성과"
  ],
  [
    "Selected findings",
    "Selected findings",
    "주요 발견"
  ],
  [
    "SARS-CoV-2 rewires mitochondrial bioenergetics",
    "SARS-CoV-2 rewires mitochondrial bioenergetics",
    "SARS-CoV-2에 의한 미토콘드리아 에너지 대사 재편"
  ],
  [
    "— aberrantly elevated oxidative phosphorylation supports robust virus propagation.",
    "— aberrantly elevated oxidative phosphorylation supports robust virus propagation.",
    "— 비정상적으로 증가한 산화적 인산화가 활발한 바이러스 증식을 뒷받침합니다."
  ],
  [
    "Hepatitis viruses hijack mitochondrial dynamics",
    "Hepatitis viruses hijack mitochondrial dynamics",
    "미토콘드리아 역동성을 이용하는 간염바이러스"
  ],
  [
    "— HCV- and HBV-induced fission and mitophagy attenuate apoptosis and sustain persistent infection.",
    "— HCV- and HBV-induced fission and mitophagy attenuate apoptosis and sustain persistent infection.",
    "— HCV와 HBV가 유도하는 미토콘드리아 분열과 미토파지가 세포자멸사를 줄이고 지속 감염을 유지합니다."
  ],
  [
    "Neutralizing and antiviral strategies",
    "Neutralizing and antiviral strategies",
    "중화 및 항바이러스 전략"
  ],
  [
    "— spike receptor-binding domain decoys, frameshifting inhibitors and NS2B-NS3 protease inhibitors against coronaviruses and flaviviruses.",
    "— spike receptor-binding domain decoys, frameshifting inhibitors and NS2B-NS3 protease inhibitors against coronaviruses and flaviviruses.",
    "— 코로나바이러스·플라비바이러스를 표적으로 하는 스파이크 수용체 결합 도메인 미끼, 프레임시프팅 억제제 및 NS2B-NS3 단백질분해효소 억제제."
  ],
  [
    "All publications",
    "All publications",
    "전체 논문"
  ],
  [
    "‹ Prev",
    "‹ Prev",
    "‹ 이전"
  ],
  [
    "Next ›",
    "Next ›",
    "다음 ›"
  ]
];

  var pageMeta = {
  "contact.html": {
    "en": [
      "Contact · KNU Viral Pathogenesis & Vaccine Lab",
      "Contact the KNU Viral Pathogenesis & Vaccine Lab."
    ],
    "ko": [
      "연락처 · 경북대학교 바이러스 병인 및 백신 연구실",
      "연락처 · 경북대학교 바이러스 병인 및 백신 연구실 — 연구 분야, 구성원, 연구 성과 및 연락처를 소개합니다."
    ]
  },
  "publications.html": {
    "en": [
      "Publications · KNU Viral Pathogenesis & Vaccine Lab",
      "Selected publications from the KNU Viral Pathogenesis & Vaccine Lab."
    ],
    "ko": [
      "논문 · 경북대학교 바이러스 병인 및 백신 연구실",
      "논문 · 경북대학교 바이러스 병인 및 백신 연구실 — 연구 분야, 구성원, 연구 성과 및 연락처를 소개합니다."
    ]
  },
  "members.html": {
    "en": [
      "Members · KNU Viral Pathogenesis & Vaccine Lab",
      "People of the KNU Viral Pathogenesis & Vaccine Lab."
    ],
    "ko": [
      "구성원 · 경북대학교 바이러스 병인 및 백신 연구실",
      "구성원 · 경북대학교 바이러스 병인 및 백신 연구실 — 연구 분야, 구성원, 연구 성과 및 연락처를 소개합니다."
    ]
  },
  "about.html": {
    "en": [
      "About · KNU Viral Pathogenesis & Vaccine Lab",
      "Mission, vision and research focus of the KNU Viral Pathogenesis & Vaccine Lab."
    ],
    "ko": [
      "연구실 소개 · 경북대학교 바이러스 병인 및 백신 연구실",
      "연구실 소개 · 경북대학교 바이러스 병인 및 백신 연구실 — 연구 분야, 구성원, 연구 성과 및 연락처를 소개합니다."
    ]
  },
  "index.html": {
    "en": [
      "KNU Viral Pathogenesis & Vaccine Lab",
      "Viral Pathogenesis & Vaccine Lab, Department of Microbiology, School of Medicine, Kyungpook National University — organelle dynamics in viral infection and vaccines for unmet medical needs."
    ],
    "ko": [
      "경북대학교 바이러스 병인 및 백신 연구실",
      "경북대학교 바이러스 병인 및 백신 연구실 — 연구 분야, 구성원, 연구 성과 및 연락처를 소개합니다."
    ]
  }
};

  var translationBySource = {};
  TRANSLATIONS.forEach(function (entry) {
    translationBySource[entry[0]] = { en: entry[1], ko: entry[2] };
  });

  function preference(key) {
    try { return localStorage.getItem(key); } catch (e) { return null; }
  }
  function remember(key, value) {
    try { localStorage.setItem(key, value); } catch (e) { /* private mode */ }
  }
  function language() { return root.lang === 'ko' ? 'ko' : 'en'; }
  function t(key) {
    var item = UI[key];
    return item ? item[language()] : key;
  }
  window.siteT = t;

  function translateTextNode(node, lang) {
    if (node.parentElement && node.parentElement.closest('#pub-list')) return;
    if (!node.parentNode || /^(SCRIPT|STYLE|NOSCRIPT|TEXTAREA)$/i.test(node.parentNode.nodeName)) return;
    if (!Object.prototype.hasOwnProperty.call(node, '_kimsjlabOriginal')) {
      var original = node.nodeValue.trim();
      var trimmed = original.replace(/\s+/g, " ");
      if (!translationBySource[trimmed]) return;
      node._kimsjlabOriginal = trimmed;
      node._kimsjlabPrefix = node.nodeValue.slice(0, node.nodeValue.indexOf(original));
      node._kimsjlabSuffix = node.nodeValue.slice(node.nodeValue.indexOf(original) + original.length);
    }
    var item = translationBySource[node._kimsjlabOriginal];
    if (item) node.nodeValue = node._kimsjlabPrefix + item[lang] + node._kimsjlabSuffix;
  }

  function translateTree(scope) {
    var lang = language();
    var walker = document.createTreeWalker(scope || document.body, NodeFilter.SHOW_TEXT);
    var nodes = [], node;
    while ((node = walker.nextNode())) nodes.push(node);
    nodes.forEach(function (n) { translateTextNode(n, lang); });

    var file = location.pathname.split('/').pop() || 'index.html';
    var meta = pageMeta[file] && pageMeta[file][lang];
    if (meta) {
      document.title = meta[0];
      var desc = document.querySelector('meta[name="description"]');
      if (desc) desc.setAttribute('content', meta[1]);
    }
    var menu = document.querySelector('.nav-toggle');
    if (menu) menu.setAttribute('aria-label', t('menu'));
    var map = document.querySelector('.map-card iframe');
    if (map) map.setAttribute('title', lang === 'ko' ? '연구실 위치 지도' : 'Lab location map');
  }
  window.translatePage = translateTree;

  function updateLanguageButtons() {
    document.querySelectorAll('[data-set-language]').forEach(function (button) {
      var active = button.getAttribute('data-set-language') === language();
      button.classList.toggle('active', active);
      button.setAttribute('aria-pressed', String(active));
    });
    var group = document.querySelector('.language-switch');
    if (group) group.setAttribute('aria-label', t('language'));
  }

  function setLanguage(lang, save) {
    root.lang = lang === 'ko' ? 'ko' : 'en';
    if (save) remember(LANG_KEY, root.lang);
    translateTree(document.body);
    updateLanguageButtons();
    updateThemeButton();
    if (save) document.dispatchEvent(new CustomEvent('site:languagechange', { detail: { language: root.lang } }));
  }

  function theme() { return root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light'; }
  function updateThemeButton() {
    var button = document.querySelector('.theme-toggle');
    if (!button) return;
    var dark = theme() === 'dark';
    button.textContent = dark ? '\u2600\ufe0f' : '\ud83c\udf19';
    button.setAttribute('aria-label', dark ? t('theme.light') : t('theme.dark'));
    button.setAttribute('title', dark ? t('theme.light') : t('theme.dark'));
  }
  function setTheme(next, save) {
    root.setAttribute('data-theme', next === 'dark' ? 'dark' : 'light');
    if (save) remember(THEME_KEY, theme());
    updateThemeButton();
  }

  function addControls() {
    var nav = document.querySelector('.nav');
    if (!nav || nav.querySelector('.nav-actions')) return;
    var actions = document.createElement('div');
    actions.className = 'nav-actions';
    actions.innerHTML = '<div class="language-switch" role="group">' +
      '<button type="button" data-set-language="en">EN</button>' +
      '<button type="button" data-set-language="ko">KO</button></div>' +
      '<button class="theme-toggle" type="button"></button>';
    var menu = nav.querySelector('.nav-toggle');
    nav.insertBefore(actions, menu || null);
    actions.addEventListener('click', function (event) {
      var langButton = event.target.closest('[data-set-language]');
      if (langButton) setLanguage(langButton.getAttribute('data-set-language'), true);
      if (event.target.closest('.theme-toggle')) setTheme(theme() === 'dark' ? 'light' : 'dark', true);
    });
  }

  var savedTheme = preference(THEME_KEY);
  var systemDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  setTheme(savedTheme || (systemDark ? 'dark' : 'light'), false);
  root.lang = preference(LANG_KEY) === 'ko' ? 'ko' : 'en';

  document.addEventListener('DOMContentLoaded', function () {
    addControls();
    setLanguage(root.lang, false);
    updateThemeButton();

    var queued = false;
    new MutationObserver(function (mutations) {
      if (queued || !mutations.some(function (m) { return m.addedNodes.length; })) return;
      queued = true;
      requestAnimationFrame(function () { queued = false; translateTree(document.body); });
    }).observe(document.body, { childList: true, subtree: true });
  });

  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (event) {
      if (!preference(THEME_KEY)) setTheme(event.matches ? 'dark' : 'light', false);
    });
  }
})();

// ---- Scroll reveal (reusable; also runs on dynamically added .reveal) ----
function observeReveal() {
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal:not(.in)').forEach(function (el) { io.observe(el); });
}
window.observeReveal = observeReveal;

// ---- Pagination helpers (shared by news + publications) ----
function currentPage() {
  var p = parseInt(new URLSearchParams(location.search).get('page'), 10);
  return (p && p > 0) ? p : 1;
}
function renderPager(elId, page, total) {
  var el = document.getElementById(elId);
  if (!el || total <= 1) { return; }
  var base = location.pathname.split('/').pop() || 'index.html';
  function cell(p, label, state) {
    if (state === 'disabled') return '<span class="disabled">' + label + '</span>';
    if (state === 'current') return '<span class="current">' + label + '</span>';
    return '<a href="' + base + '?page=' + p + '">' + label + '</a>';
  }
  var html = cell(page - 1, '\u2039 Prev', page <= 1 ? 'disabled' : '');
  for (var i = 1; i <= total; i++) { html += cell(i, i, i === page ? 'current' : ''); }
  html += cell(page + 1, 'Next \u203a', page >= total ? 'disabled' : '');
  el.innerHTML = html;
}
window.currentPage = currentPage;
window.renderPager = renderPager;

// ---- Mobile nav + year ----
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () { links.classList.toggle('open'); });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { links.classList.remove('open'); });
    });
  }
  document.querySelectorAll('[data-year]').forEach(function (el) { el.textContent = new Date().getFullYear(); });
  observeReveal();
});
