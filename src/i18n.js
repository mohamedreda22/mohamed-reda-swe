import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          // General
          "nav": {
            "about": "About",
            "skills": "Skills",
            "education": "Education",
            "projects": "Projects",
            "experience": "Experience",
            "certifications": "Certifications",
            "contact": "Contact"
          },
          "hero": {
            "badge": "The Soldier Who Codes 🪖",
            "role": "Staff-Level Software Engineer & Product Architect",
            "role_it": "IT Support & Networking Specialist | Systems Troubleshooting & Automation",
            "bio": "Specializing in scalable systems, architectural precision, and viral product growth. Merging military discipline with engineering excellence to build the high-performance future of the web.",
            "bio_it": "IT Support & Networking Specialist with a Computer Science background and hands-on experience in systems, networks, and troubleshooting. I am skilled at diagnosing and resolving technical issues, supporting users, and maintaining hardware/software environments.",
            "status_label": "Status:",
            "status_value": "Service Completed (Mar 2026)",
            "mission_label": "Current Mission:",
            "mission_value": "Scaling Global Products (Available for Hire)",
            "download_cv": "⬇ Download Portfolio CV",
            "explore_projects": "Explore Case Studies →",
            "stat_deployments": "Deployments",
            "stat_institutions": "Institutions",
            "stat_users_supported": "Users Supported",
            "stat_mission_ready": "Mission Ready"
          },
          "about": {
            "eyebrow": "The Narrative",
            "heading": "High-Performance Engineering",
            "heading_it": "Systems & Networking Expertise",
            "p1": "I am a Software Engineer who treats code like a mission-critical operation. My background is defined by a unique intersection: the tactical precision of the <1>Egyptian Border Guard</1> and the architectural depth of modern full-stack engineering.",
            "p2": "Having completed my military service in <1>March 2026</1>, I have transitioned back into full-time engineering with a renewed focus on building systems that don't just work—they scale. I specialize in the <1>MERN</1> and <1>MEAN</1> stacks, with a particular emphasis on <1>React 19</1>, <1>Node.js</1>, and distributed system design.",
            "p3": "My approach to software is holistic. I don't just 'write features'; I architect solutions. Whether it's solving the 'photo-loss' problem for thousands of event guests with <1>YouMak</1> or bridging the educational gap with <1>Modarsak</1>, my goal is always to deliver viral impact through technical excellence.",
            "p4": "Currently, I am operating as a <1>Freelance Full-Stack Engineer</1>, helping startups and established businesses deploy high-performance web applications while I look for my next high-stakes engineering challenge.",
            "p1_it": "IT Support & Networking Specialist with a Computer Science background. I am skilled at diagnosing and resolving technical issues, supporting users, and maintaining hardware/software environments.",
            "p2_it": "Experienced with Windows, Linux, TCP/IP, client-server architectures, and Microsoft 365. I bring software engineering expertise for automation, problem-solving, and optimizing system performance.",
            "p3_it": "Strong knowledge of technical software used in contracting and engineering, including Autodesk systems. I apply structured problem-solving approaches to diagnose and resolve technical issues efficiently.",
            "card1_title": "Operational Precision",
            "card1_desc": "Military-grade resilience applied to system uptime and bug-free deployments",
            "card2_title": "Product Architecture",
            "card2_desc": "Expertise in designing scalable MERN/MEAN ecosystems from the ground up",
            "card3_title": "Viral Engineering",
            "card3_desc": "Building for massive scale, performance, and user-centric viral growth",
            "card4_title": "Systems Thinker",
            "card4_desc": "Deep understanding of how frontend, backend, and infrastructure interact",
            "card1_title_it": "Network Infrastructure",
            "card1_desc_it": "Expertise in TCP/IP, DNS, DHCP, and troubleshooting connectivity issues",
            "card2_title_it": "System Administration",
            "card2_desc_it": "Managing Windows and Linux environments with focus on stability",
            "card3_title_it": "Technical Support",
            "card3_desc_it": "Providing step-by-step guidance and resolving hardware/software problems",
            "card4_title_it": "Automation & Tools",
            "card4_desc_it": "Leveraging engineering background to automate IT tasks and optimize performance"
          },
          "contact": {
            "eyebrow": "Get in Touch",
            "heading": "Let's Talk",
            "text": "I'm actively seeking full-time software engineering roles. Whether you have an opportunity, a project idea, or just want to connect, my inbox is always open.",
            "placeholder_name": "Your Name",
            "placeholder_email": "Your Email",
            "placeholder_message": "Your Message",
            "send_button": "Send Message →"
          },
          "projects": {
            "eyebrow": "Portfolio",
            "heading": "Featured Case Studies",
            "subheading": "Selected projects from my engineering career. These case studies explore the architectural challenges, technical solutions, and high-stakes impact of my work.",
            "read_case_study": "Read Case Study",
            "problem": "The Problem",
            "solution": "The Solution",
            "architecture": "Architecture",
            "impact": "Impact & Results",
            "future": "Future Roadmap",
            "launch": "Launch Project ↗",
            "codebase": "Codebase",
            "gallery": "Gallery",
            "live": "↗ Live"
          },
          "experience": {
            "eyebrow": "Career",
            "heading": "Experience & Journey",
            "search_placeholder": "Search by skill, title or company...",
            "all": "All",
            "tech": "Tech",
            "military": "Military",
            "career_break": "Career Break",
            "freelance": "Freelance",
            "internship": "Internship"
          },
          "education": {
            "eyebrow": "Background",
            "major": "Major",
            "minor": "Minor"
          },
          "certifications": {
            "eyebrow": "Learning"
          },
          "it_capabilities": {
            "heading": "IT Support Capabilities",
            "item1": "Diagnose and resolve network connectivity issues",
            "item2": "Support end-users with hardware and software problems",
            "item3": "Configure basic network settings: IP, DNS, DHCP",
            "item4": "Troubleshoot system performance issues",
            "item5": "Resolve Microsoft 365 & Microsoft Office technical issues",
            "item6": "Provide step-by-step guidance for end-users and technical troubleshooting"
          },
          "footer": {
            "copy": "© {{year}} Built with discipline & React 19."
          }
        }
      },
      ar: {
        translation: {
          "nav": {
            "about": "عني",
            "skills": "مهاراتي",
            "education": "التعليم",
            "projects": "مشاريعي",
            "experience": "خبرتي",
            "certifications": "شهاداتي",
            "contact": "تواصل معايا"
          },
          "hero": {
            "badge": "العسكري اللي بيكود 🪖",
            "role": "Staff-Level Software Engineer & Product Architect",
            "role_it": "متخصص دعم فني وشبكات | حل أعطال الأنظمة والأتمتة",
            "bio": "متخصص في الـ Scalable Systems، الـ Architectural Precision، والـ Viral Product Growth. بدمج الانضباط العسكري مع التميز الهندسي عشان أبني مستقبل الويب الـ High-Performance.",
            "bio_it": "متخصص في الدعم الفني والشبكات بخلفية في علوم الحاسب وخبرة عملية في الأنظمة والشبكات وحل الأعطال. ماهر في تشخيص وحل المشكلات التقنية، ودعم المستخدمين، وصيانة بيئات الهاردوير والسوفت وير.",
            "status_label": "Status:",
            "status_value": "خلصت الخدمة (مارس 2026)",
            "mission_label": "Current Mission:",
            "mission_value": "Scaling Global Products (متاح للشغل)",
            "download_cv": "⬇ نزل الـ Portfolio CV",
            "explore_projects": "شوف الـ Case Studies ←",
            "stat_deployments": "Deployments",
            "stat_institutions": "Institutions",
            "stat_users_supported": "مستخدم تم دعمهم",
            "stat_mission_ready": "Mission Ready"
          },
          "about": {
            "eyebrow": "الحكاية",
            "heading": "High-Performance Engineering",
            "heading_it": "خبرة الأنظمة والشبكات",
            "p1": "أنا Software Engineer بتعامل مع الكود كأنه Mission-Critical Operation. خلفيتي بتجمع بين دقة حرس الحدود المصري وعمق الـ Full-Stack Engineering الحديث.",
            "p2": "بعد ما خلصت خدمتي العسكرية في مارس 2026، رجعت للـ Engineering بتركيز على بناء أنظمة مش بس بتشتغل، لا دي بتعمل Scale. متخصص في الـ MERN و الـ MEAN Stacks، وبالأخص React 19، Node.js، والـ Distributed System Design.",
            "p3": "طريقتي في السوفت وير Holistic. أنا مش بس 'بكتب Features'، أنا بصمم Solutions. سواء كان حل مشكلة 'ضياع الصور' لآلاف الضيوف مع YouMak أو سد الفجوة التعليمية مع Modarsak، هدفي دايماً هو الـ Viral Impact من خلال الـ Technical Excellence.",
            "p4": "حالياً، شغال Freelance Full-Stack Engineer، بساعد الـ Startups والشركات إنها تعمل Deploy لتطبيقات ويب High-Performance، وفي نفس الوقت بدور على تحدي هندسي جديد.",
            "p1_it": "متخصص دعم فني وشبكات بخلفية في علوم الحاسب. ماهر في تشخيص وحل المشكلات التقنية، ودعم المستخدمين، وصيانة بيئات الأجهزة والبرامج.",
            "p2_it": "خبير في Windows و Linux و TCP/IP و Microsoft 365. أستخدم خبرتي في هندسة البرمجيات للأتمتة وحل المشكلات وتحسين أداء الأنظمة.",
            "p3_it": "معرفة قوية بالبرامج التقنية المستخدمة في المقاولات والهندسة، بما في ذلك أنظمة Autodesk. أطبق أساليب منظمة لحل المشكلات لتشخيص وحل الأعطال التقنية بكفاءة.",
            "card1_title": "Operational Precision",
            "card1_desc": "Military-grade resilience مطبقة على الـ System Uptime والـ Bug-free Deployments",
            "card2_title": "Product Architecture",
            "card2_desc": "خبرة في تصميم MERN/MEAN Ecosystems قابلة للتوسع من الصفر",
            "card3_title": "Viral Engineering",
            "card3_desc": "بناء أنظمة للـ Massive Scale، الـ Performance، والـ Viral Growth",
            "card4_title": "Systems Thinker",
            "card4_desc": "فهم عميق لإزاي الـ Frontend والـ Backend والـ Infrastructure بيتفاعلوا مع بعض",
            "card1_title_it": "البنية التحتية للشبكات",
            "card1_desc_it": "خبرة في TCP/IP و DNS و DHCP وحل مشكلات الاتصال",
            "card2_title_it": "إدارة الأنظمة",
            "card2_desc_it": "إدارة بيئات Windows و Linux مع التركيز على الاستقرار",
            "card3_title_it": "الدعم الفني",
            "card3_desc_it": "تقديم توجيه خطوة بخطوة وحل مشكلات الهاردوير والسوفت وير",
            "card4_title_it": "الأتمتة والأدوات",
            "card4_desc_it": "استغلال الخلفية الهندسية لأتمتة مهام تكنولوجيا المعلومات وتحسين الأداء"
          },
          "contact": {
            "eyebrow": "Get in Touch",
            "heading": "Let's Talk",
            "text": "بدور حالياً على Full-time Software Engineering roles. سواء عندك فرصة، فكرة مشروع، أو حتى عاوز تسلم، الـ Inbox بتاعي مفتوح دايماً.",
            "placeholder_name": "اسمك",
            "placeholder_email": "إيميلك",
            "placeholder_message": "رسالتك",
            "send_button": "ابعت Message ←"
          },
          "projects": {
            "eyebrow": "Portfolio",
            "heading": "دراسات حالة مختارة",
            "subheading": "مجموعة مختارة من المشاريع خلال مسيرتي الهندسية. دراسات الحالة ديه بتستعرض التحديات المعمارية، الحلول التقنية، والتأثير القوي لشغلي.",
            "read_case_study": "اقرأ دراسة الحالة",
            "problem": "المشكلة",
            "solution": "الحل",
            "architecture": "المعمارية",
            "impact": "التأثير والنتائج",
            "future": "خطة المستقبل",
            "launch": "فتح المشروع ↗",
            "codebase": "كود المشروع",
            "gallery": "معرض الصور",
            "live": "↗ لايف"
          },
          "experience": {
            "eyebrow": "المسيرة المهنية",
            "heading": "الخبرات والرحلة",
            "search_placeholder": "ابحث بالمهارة أو المسمى الوظيفي...",
            "all": "الكل",
            "tech": "تقني",
            "military": "عسكري",
            "career_break": "استراحة محارب",
            "freelance": "عمل حر",
            "internship": "تدريب"
          },
          "education": {
            "eyebrow": "الخلفية التعليمية",
            "major": "التخصص الأساسي",
            "minor": "التخصص الفرعي"
          },
          "certifications": {
            "eyebrow": "التعلم والتطوير"
          },
          "it_capabilities": {
            "heading": "قدرات الدعم الفني",
            "item1": "تشخيص وحل مشكلات اتصال الشبكة",
            "item2": "دعم المستخدمين النهائيين في مشكلات الأجهزة والبرامج",
            "item3": "تكوين إعدادات الشبكة الأساسية: IP ، DNS ، DHCP",
            "item4": "استكشاف أخطاء أداء النظام وإصلاحها",
            "item5": "حل المشكلات التقنية لـ Microsoft 365 و Microsoft Office",
            "item6": "تقديم إرشادات خطوة بخطوة للمستخدمين وحل الأعطال التقنية"
          },
          "footer": {
            "copy": "© {{year}} Built with discipline & React 19."
          }
        }
      }
    }
  });

export default i18n;
