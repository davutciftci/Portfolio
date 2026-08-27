export default {
  navbar: {
    home: "Home",
    about: "About",
    services: "Services",
    projects: "My Projects",
    contact: "Contact"
  },
  home: {
    greeting: "Hi, I'm Barzan Davut",
    subtitle: "Full Stack Developer",
    role_1: "Hi, I'm Barzan Davut.",
    role_2: "I am a Software Developer.",
    role_3: "I am a Psychologist.",
    role_4: "I am Barista.",
    desc: "Driven by a passion for software development, I build user-focused, scalable applications using modern web technologies like React, TypeScript, and Node.js.",
    btnHire: "Hire me",
    btnAbout: "About me"
  },
  about: {
    title: "About Me",
    subtitle: "Who am I? Let me decrypt that for you...",
    whoIAm: "Who I Am",
    bio: "I am a multifaceted professional working at the intersection of software, psychology, and human connection. As a Full Stack Developer, I build scalable web and mobile applications with the React, TypeScript, and Node.js ecosystem, while my Psychology degree gives me a deep understanding of user behavior and empathy-driven design. I provide couples counseling for deaf individuals using Turkish Sign Language, bridging communication in all its forms. My freelance experience on global remote projects has taught me to adapt quickly to diverse cultures and workflows. My time as a barista instilled valuable skills in customer satisfaction, time management, and performing under pressure. With 10+ completed projects, I continue to transform technology into products that truly touch people's lives.",
    topLanguages: "Top Languages (Github)",
    techTools: "Technologies & Tools",
    experience: "Experience & Education",
    timeline_fullstack: "Full Stack Developer",
    timeline_fullstack_desc: "Developing scalable, performance-driven web and mobile applications with React, TypeScript, and Node.js. Delivering end-to-end solutions from frontend interfaces to backend APIs and database architecture.",
    timeline_psychology: "Psychology Bachelor's Degree",
    timeline_psychology_desc: "Trained in understanding human behavior and cognitive processes; bringing a psychological perspective to UX design and building empathy-centered, user-first products.",
    timeline_signlanguage: "Couples Counseling with Deaf Individuals",
    timeline_signlanguage_desc: "Providing professional couples counseling for deaf and hard-of-hearing individuals using Turkish Sign Language (TID); specializing in accessibility and inclusive communication.",
    timeline_projects: "10+ Completed Projects",
    timeline_projects_desc: "Successfully delivered projects spanning e-commerce platforms, farm management systems, portfolio websites, and mobile applications across a wide range of domains.",
    timeline_freelance: "Freelance & Remote Work",
    timeline_freelance_desc: "Collaborating remotely with clients from different industries and geographies on global projects; demonstrating self-discipline and cross-cultural communication skills.",
    timeline_barista: "Barista",
    timeline_barista_desc: "Professional coffee preparation and presentation experience; customer satisfaction-focused work in fast-paced environments, developing strong time management, team coordination, and high-performance skills under pressure."
  },
  services: {
    title: "My Services",
    subtitle: "What I Can Do For You",
    s1_title: "Website Development",
    s1_desc: "Building fast, responsive, and performance-optimized frontends using modern frameworks like React and Next.js.",
    s2_title: "E-Commerce Systems",
    s2_desc: "Developing custom e-commerce platforms with secure checkouts, scalable backends, and intuitive admin dashboards.",
    s3_title: "Full-Stack Web Apps",
    s3_desc: "End-to-end application development featuring robust API architectures (Node.js, NestJS) and secure database design.",
    s4_title: "UI/UX & Interfaces",
    s4_desc: "Crafting beautiful and intuitive user interfaces focusing on interactive elements, micro-animations, and fluid layouts.",
    s5_title: "Android & iOS App Development",
    s5_desc: "Building performant, native-feeling mobile applications for both Android and iOS from a single codebase using React Native. I manage the entire lifecycle — from user-friendly UI design, push notification infrastructure, offline support, and device API integrations to end-to-end app store publishing.",
    learnMore: "Learn More ➔",
    ctaText: "Have a specific project in mind?",
    ctaBtn: "Let's Discuss"
  },
  projects: {
    title: "My Projects",
    subtitle: "Selected product and platform work",
    feedoCardTitle: "Feedo — Livestock farm management",
    feedoCardDesc:
      "A multi-tenant farm management product that unifies animals, flocks, and day-to-day operational records for small and large livestock operations in one app.",
    feedoCardAria: "Open Feedo project details",
    viewDetails: "View details"
  },
  feedo: {
    logoAlt: "Feedo wordmark",
    backToProjects: "Back to projects",
    pageTitle: "Feedo",
    pageSubtitle: "Feedo Farm Management",
    intro:
      "Feedo is a farm management product for livestock operations. It brings animals, flocks, and day-to-day operational records into one mobile app, backed by a multi-tenant API. Data stays tenant-scoped, with notification and alarm infrastructure for critical dates and compliance-style reminders.",
    sections: {
      identity: {
        title: "Identity and movements (animals & flocks)",
        body:
          "Animal profiles, flock definitions, detail views, and a lineage visualization. Animal and flock movement concepts are supported in the data model."
      },
      earTag: {
        title: "Ear tag scanning",
        body:
          "Barcode/QR scanning for quick identification and faster in-field workflows."
      },
      reproduction: {
        title: "Reproduction and births",
        body:
          "Breeding records, birth forms, and expected-birth workflows, including reminders for post-birth official reporting where applicable."
      },
      ration: {
        title: "Ration and feeding",
        body:
          "Daily feed entries per animal or flock, summaries, and FCR/trend-style insights; flock feeding can be tied to barn-period context."
      },
      health: {
        title: "Health",
        body:
          "Treatments, vaccinations (with templates), and health observations to document care and veterinary follow-up."
      },
      productivity: {
        title: "Productivity",
        body:
          "Production metrics such as eggs, tracked in animal/flock context (e.g. flock productivity)."
      },
      shearing: {
        title: "Shearing",
        body:
          "Shearing session records, including data that can feed financial reporting (e.g. sale proceeds)."
      },
      financial: {
        title: "Financial management",
        body:
          "Income and expense lines, year-over-year views, and per-animal profitability, linked to the farm and, where applicable, to animals/flocks."
      },
      reports: {
        title: "Reports and charts",
        body:
          "Yield/production charts and a reports hub that ties financial and production views together."
      },
      homeOps: {
        title: "Home and operations",
        body:
          "Dashboard summaries, farm alarms (e.g. due dates, regulatory birth reminders), and space/capacity planning."
      },
      account: {
        title: "Account, subscription, and notifications",
        body:
          "Authentication, profile, subscription/plan management, push device registration, and alarm-driven alerts."
      },
      offline: {
        title: "Offline and reliability",
        body:
          "Offline-first patterns (outbox/sync), error boundaries, and observability (e.g. error reporting in production) for real-world field use."
      },
      i18n: {
        title: "Internationalization",
        body:
          "The UI is built for Turkish and English (i18n)."
      },
      capacity: {
        title: "Capacity Control",
        body:
          "Depending on the area of your different farms, you can add any animal to your farm to see its capacity and easily keep track of which animal belongs to which farm."
      }
    },
    store: {
      comingSoon: "Coming soon",
      groupAria: "Download Feedo on the App Store or Google Play",
      badgeAltAppStore: "Download on the App Store",
      badgeAltGooglePlay: "Get it on Google Play",
    },
    legal: {
      sectionTitle: "Legal notices (Feedo)",
      kvkCardTitle: "KVKK disclosure — Feedo",
      kvkCardDesc:
        "Information notice under Law No. 6698 on how personal data are processed in the Feedo app.",
      privacyCardTitle: "Privacy policy — Feedo",
      privacyCardDesc:
        "Principles for personal data, security, retention, and your rights in connection with Feedo.",
      openDocument: "Open page →",
      backToFeedo: "Back to Feedo project",
      kvkLinkAria: "Open KVKK disclosure for Feedo",
      privacyLinkAria: "Open privacy policy for Feedo",
      seePrivacy: "Privacy policy — Feedo",
      seeKvk: "KVKK disclosure — Feedo",
      relatedLabel: "Related legal page"
    }
  },
  contact: {
    title: "Contact Me",
    subtitle: "Let's Contact Me",
    email: "Email",
    phone: "Phone",
    btnSendUrl: "Send Email"
  },
  footer: {
    copyright: "Copyright © 2026 by Barzan Davut Ciftci | All Rights Reserved.",
    backToTop: "Scroll to Top"
  },
  seo: {
    defaultDescription: "Barzan Davut Ciftci - Full-stack Developer & Sign Language Counselor Portfolio. Modern web solutions and professional counselor services.",
    defaultKeywords: "Barzan Davut Ciftci, Portfolio, Full-stack Developer, Sign Language, React, TypeScript, Web Development",
    home: {
      title: "Home",
      description: "Welcome to Barzan Davut Ciftci's professional portfolio. Discover my software development projects and counseling services."
    },
    about: {
      title: "About Me",
      description: "Learn more about Barzan Davut Ciftci's background, skills, and experience in full-stack development and psychology."
    },
    services: {
      title: "Services",
      description: "Explore the professional services offered by Barzan Davut Ciftci, including web development, e-commerce, and full-stack solutions."
    },
    contact: {
      title: "Contact",
      description: "Get in touch with Barzan Davut Ciftci for collaboration, projects, or professional counseling inquiries."
    },
    projects: {
      title: "My Projects",
      description: "Product and platform projects by Barzan Davut Ciftci, including Feedo farm management."
    },
    feedo: {
      title: "Feedo",
      description:
        "Feedo farm management: animal and flock identity, health, feeding, reproduction, finance, reports, and offline field use.",
      kvkDisclosure: {
        title: "Feedo — KVKK disclosure",
        description:
          "Personal data disclosure under Turkish Law No. 6698 (KVKK) for the Feedo mobile app.",
      },
      privacyPolicy: {
        title: "Feedo — Privacy policy",
        description:
          "Personal data protection and privacy policy for the Feedo mobile application.",
      },
    }
  }
};
