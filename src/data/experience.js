const experiences = [
  {
    title: {
      en: "Full-Stack Freelance Engineer",
      ar: "مهندس برمجيات حر (Full-Stack)",
    },
    company: {
      en: "Self-Employed",
      ar: "عمل حر",
    },
    type: "freelance",
    duration: {
      en: "Mar 2026 – Present",
      ar: "مارس 2026 – الآن",
    },
    desc: {
      en: "Architecting and deploying end-to-end web applications for clients, including the YouMak photo-sharing platform and the Modarsak educational marketplace. Focusing on high-performance React 19 frontends and scalable Node.js backends.",
      ar: "بصمم وبنفذ End-to-end Web Applications للعملاء، زي منصة 'يومك' لمشاركة الصور وسوق 'مدرسك' التعليمي. مركز على React 19 Frontends عالية الأداء و Scalable Node.js Backends.",
    },
    skills: ["React 19", "Node.js", "System Architecture", "Product Design"],
  },
  {
    title: {
      en: "Soldier (Completed)",
      ar: "جندي (تمت الخدمة)",
    },
    company: {
      en: "Egyptian Border Guard",
      ar: "سلاح حرس الحدود المصري",
    },
    type: "military",
    duration: {
      en: "Feb 2025 – Mar 2026",
      ar: "فبراير 2025 – مارس 2026",
    },
    desc: {
      en: "Successfully completed mandatory military service with the Egyptian Border Guard. This period instilled deep discipline, operational precision, and the ability to perform under high-pressure environments—traits I now apply to complex software engineering challenges.",
      ar: "أنهيت الخدمة العسكرية الإلزامية في سلاح حرس الحدود المصري. الفترة دي علمتني الانضباط الشديد، الدقة في التنفيذ، والقدرة على العمل تحت ضغط عالي—وديه صفات بطبقها دلوقتي في حل التحديات البرمجية المعقدة.",
    },
  },
  {
    title: {
      en: "MEAN-Stack Training Program",
      ar: "برنامج تدريب MEAN-Stack",
    },
    company: {
      en: "National Telecommunication Institute (NTI)",
      ar: "المعهد القومي للاتصالات (NTI)",
    },
    type: "internship",
    duration: {
      en: "Dec 2024 – Feb 2025",
      ar: "ديسمبر 2024 – فبراير 2025",
    },
    desc: {
      en: "Intensive MEAN-stack training covering advanced JavaScript, web security, SEO, and freelancing modules.",
      ar: "تدريب مكثف على MEAN-stack شمل Advanced JavaScript، و Web Security، و SEO، ووحدات عن الـ Freelancing.",
    },
    itDesc: {
      en: "Built full-stack applications with focus on debugging and system reliability. Hands-on experience supporting PCs, laptops, and workstations for performance issues.",
      ar: "بنيت تطبيقات full-stack مع التركيز على التصحيح وموثوقية النظام. خبرة عملية في دعم أجهزة الكمبيوتر واللاب توب ومحطات العمل لمشاكل الأداء.",
    },
    skills: ["MongoDB", "Angular", "Node.js", "Express.js"],
    itSkills: ["PC Support", "Laptop Maintenance", "Workstation Troubleshooting", "System Reliability"],
  },
  {
    title: {
      en: "AI Model Reviewer",
      ar: "مُراجع نماذج ذكاء اصطناعي",
    },
    company: {
      en: "Outlier",
      ar: "أوتلاير (Outlier)",
    },
    type: "freelance",
    duration: {
      en: "Nov 2024",
      ar: "نوفمبر 2024",
    },
    desc: {
      en: "Reviewed and assessed AI model performance and quality on a freelance project basis, contributing to the refinement of LLM outputs.",
      ar: "راجعت وقيمت أداء وجودة AI Models في مشروع Freelance، وساهمت في تحسين مخرجات الـ LLMs.",
    },
  },
  {
    title: {
      en: "MEAN Stack Developer Intern",
      ar: "متدرب مطور MEAN Stack",
    },
    company: {
      en: "Orange Digital Center Egypt",
      ar: "أورنج ديجيتال سنتر مصر",
    },
    type: "internship",
    duration: {
      en: "Sep 2024",
      ar: "سبتمبر 2024",
    },
    desc: {
      en: "Advanced MEAN stack development collaboration between Orange Digital Center and AMIT Learning.",
      ar: "تطوير Advanced MEAN stack بالتعاون بين Orange Digital Center و AMIT Learning.",
    },
    itDesc: {
      en: "Diagnosed and resolved system & application issues, improving uptime. Provided troubleshooting support for Microsoft 365 & Microsoft Office and user hardware issues.",
      ar: "تشخيص وحل مشكلات الأنظمة والتطبيقات، مما أدى إلى تحسين وقت التشغيل. تقديم دعم استكشاف الأخطاء وإصلاحها لـ Microsoft 365 و Microsoft Office ومشكلات أجهزة المستخدم.",
    },
    skills: ["MongoDB", "AngularJS", "TypeScript", "Express.js", "Node.js"],
    itSkills: ["System Troubleshooting", "Microsoft 365", "Hardware Support", "Network Protocols"],
  },
  {
    title: {
      en: "React Developer Intern",
      ar: "متدرب مطور React",
    },
    company: {
      en: "Learn2Earn Education",
      ar: "Learn2Earn Education",
    },
    type: "internship",
    duration: {
      en: "May 2024 – Jul 2024",
      ar: "مايو 2024 – يوليو 2024",
    },
    desc: {
      en: "Long-term internship honing React.js and front-end development skills on production-grade projects.",
      ar: "Long-term Internship لتحسين مهارات React.js و Front-end Development في مشاريع حقيقية.",
    },
    skills: ["React.js", "Front-End Development"],
  },
  {
    title: {
      en: "React Developer Intern",
      ar: "متدرب مطور React",
    },
    company: {
      en: "SYNC INTERN'S",
      ar: "SYNC INTERN'S",
    },
    type: "internship",
    duration: {
      en: "Oct 2023",
      ar: "أكتوبر 2023",
    },
    desc: {
      en: "Focused on modular React components and state management for real-world applications.",
      ar: "تركيز على Modular React Components و State Management في تطبيقات حقيقية.",
    },
    skills: ["React.js"],
  },
  {
    title: {
      en: "Web Development & Design Intern",
      ar: "متدرب تطوير وتصميم مواقع",
    },
    company: {
      en: "Code Casa",
      ar: "Code Casa",
    },
    type: "internship",
    duration: {
      en: "Sep 2023",
      ar: "سبتمبر 2023",
    },
    desc: {
      en: "Developed capstone projects including interactive game engines and productivity tools.",
      ar: "طورت Capstone Projects شملت Interactive Game Engines وأدوات إنتاجية.",
    },
    skills: ["React.js", "Web Development"],
  },
  {
    title: {
      en: "Web Development Intern",
      ar: "متدرب تطوير مواقع",
    },
    company: {
      en: "CodSoft",
      ar: "CodSoft",
    },
    type: "internship",
    duration: {
      en: "Aug 2023",
      ar: "أغسطس 2023",
    },
    desc: {
      en: "Built and tested web applications using HTML, CSS, JS and React.js. Contributed to code reviews and UI optimization.",
      ar: "بنيت واختبرت Web Applications باستخدام HTML و CSS و JS و React.js. ساهمت في الـ Code Reviews وتحسين الـ UI.",
    },
    skills: ["React.js", "HTML", "CSS", "JavaScript"],
  },
];

export default experiences;
