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
            "bio": "Specializing in scalable systems, architectural precision, and viral product growth. Merging military discipline with engineering excellence to build the high-performance future of the web.",
            "status_label": "Status:",
            "status_value": "Service Completed (Mar 2026)",
            "mission_label": "Current Mission:",
            "mission_value": "Scaling Global Products (Available for Hire)",
            "download_cv": "⬇ Download Portfolio CV",
            "explore_projects": "Explore Case Studies →",
            "stat_deployments": "Deployments",
            "stat_institutions": "Institutions",
            "stat_mission_ready": "Mission Ready"
          },
          "about": {
            "eyebrow": "The Narrative",
            "heading": "High-Performance Engineering",
            "p1": "I am a Software Engineer who treats code like a mission-critical operation. My background is defined by a unique intersection: the tactical precision of the <1>Egyptian Border Guard</1> and the architectural depth of modern full-stack engineering.",
            "p2": "Having completed my military service in <1>March 2026</1>, I have transitioned back into full-time engineering with a renewed focus on building systems that don't just work—they scale. I specialize in the <1>MERN</1> and <1>MEAN</1> stacks, with a particular emphasis on <1>React 19</1>, <1>Node.js</1>, and distributed system design.",
            "p3": "My approach to software is holistic. I don't just 'write features'; I architect solutions. Whether it's solving the 'photo-loss' problem for thousands of event guests with <1>YouMak</1> or bridging the educational gap with <1>Modarsak</1>, my goal is always to deliver viral impact through technical excellence.",
            "p4": "Currently, I am operating as a <1>Freelance Full-Stack Engineer</1>, helping startups and established businesses deploy high-performance web applications while I look for my next high-stakes engineering challenge.",
            "card1_title": "Operational Precision",
            "card1_desc": "Military-grade resilience applied to system uptime and bug-free deployments",
            "card2_title": "Product Architecture",
            "card2_desc": "Expertise in designing scalable MERN/MEAN ecosystems from the ground up",
            "card3_title": "Viral Engineering",
            "card3_desc": "Building for massive scale, performance, and user-centric viral growth",
            "card4_title": "Systems Thinker",
            "card4_desc": "Deep understanding of how frontend, backend, and infrastructure interact"
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
            "bio": "متخصص في الـ Scalable Systems، الـ Architectural Precision، والـ Viral Product Growth. بدمج الانضباط العسكري مع التميز الهندسي عشان أبني مستقبل الويب الـ High-Performance.",
            "status_label": "Status:",
            "status_value": "خلصت الخدمة (مارس 2026)",
            "mission_label": "Current Mission:",
            "mission_value": "Scaling Global Products (متاح للشغل)",
            "download_cv": "⬇ نزل الـ Portfolio CV",
            "explore_projects": "شوف الـ Case Studies ←",
            "stat_deployments": "Deployments",
            "stat_institutions": "Institutions",
            "stat_mission_ready": "Mission Ready"
          },
          "about": {
            "eyebrow": "الحكاية",
            "heading": "High-Performance Engineering",
            "p1": "أنا Software Engineer بتعامل مع الكود كأنه Mission-Critical Operation. خلفيتي بتجمع بين دقة حرس الحدود المصري وعمق الـ Full-Stack Engineering الحديث.",
            "p2": "بعد ما خلصت خدمتي العسكرية في مارس 2026، رجعت للـ Engineering بتركيز على بناء أنظمة مش بس بتشتغل، لا دي بتعمل Scale. متخصص في الـ MERN و الـ MEAN Stacks، وبالأخص React 19، Node.js، والـ Distributed System Design.",
            "p3": "طريقتي في السوفت وير Holistic. أنا مش بس 'بكتب Features'، أنا بصمم Solutions. سواء كان حل مشكلة 'ضياع الصور' لآلاف الضيوف مع YouMak أو سد الفجوة التعليمية مع Modarsak، هدفي دايماً هو الـ Viral Impact من خلال الـ Technical Excellence.",
            "p4": "حالياً، شغال Freelance Full-Stack Engineer، بساعد الـ Startups والشركات إنها تعمل Deploy لتطبيقات ويب High-Performance، وفي نفس الوقت بدور على تحدي هندسي جديد.",
            "card1_title": "Operational Precision",
            "card1_desc": "Military-grade resilience مطبقة على الـ System Uptime والـ Bug-free Deployments",
            "card2_title": "Product Architecture",
            "card2_desc": "خبرة في تصميم MERN/MEAN Ecosystems قابلة للتوسع من الصفر",
            "card3_title": "Viral Engineering",
            "card3_desc": "بناء أنظمة للـ Massive Scale، الـ Performance، والـ Viral Growth",
            "card4_title": "Systems Thinker",
            "card4_desc": "فهم عميق لإزاي الـ Frontend والـ Backend والـ Infrastructure بيتفاعلوا مع بعض"
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
          "footer": {
            "copy": "© {{year}} Built with discipline & React 19."
          }
        }
      }
    }
  });

export default i18n;
