const projects = [
  {
    id: "youmak",
    name: {
      en: "YouMak | Event Photo Sharing Platform",
      ar: "يومك | منصة مشاركة صور المناسبات",
    },
    date: {
      en: "Mar 2026 - Present",
      ar: "مارس 2026 - الآن",
    },
    featured: true,
    desc: {
      en: "A premium event photo-sharing platform tailored for the Egyptian market, enabling instant QR-based sharing for weddings, graduations, and celebrations without an app.",
      ar: "منصة فاخرة لمشاركة صور المناسبات مصممة للسوق المصري، بتسمح بالمشاركة الفورية عن طريق الـ QR في الأفراح والتخرج والحفلات من غير App.",
    },
    itDesc: {
      en: "Supported real-time user connectivity and handled media upload issues. Optimized system performance and reduced latency. Worked with cloud services and content delivery systems.",
      ar: "دعم اتصال المستخدمين في الوقت الفعلي ومعالجة مشكلات رفع الوسائط. تحسين أداء النظام وتقليل التأخير. العمل مع الخدمات السحابية وأنظمة توصيل المحتوى.",
    },
    stack: [
      "React 19",
      "Tailwind CSS",
      "Framer Motion",
      "Node.js",
      "Express",
      "MongoDB",
      "Cloudinary",
      "JWT",
    ],
    github: null,
    live: "https://youmak.vercel.app/",
    images: Array.from({ length: 16 }, (_, i) => `youmak ${i + 1}.png`),
    caseStudy: {
      problem: {
        en: "At Egyptian weddings and events, hundreds of guests take high-quality photos that never reach the hosts. Relying on professional photographers takes weeks, and guests often forget to share their mobile captures, losing the 'live' energy of the celebration.",
        ar: "في الأفراح والمناسبات المصرية، مئات الضيوف بياخدوا صور حلوة جداً بس نادراً ما بتوصل لأصحاب الفرح. الاعتماد على المصورين المحترفين بياخد أسابيع، والضيوف غالباً بينسوا يبعتوا الصور اللي صوروها بموبايلاتهم، فبنخسر 'طاقة' اللحظة الحية.",
      },
      solution: {
        en: "I built YouMak to solve 'photo-loss' at events. By scanning a unique QR code displayed at the venue, guests can instantly upload photos to a collaborative live gallery. There's no app to download, ensuring 100% accessibility for all age groups.",
      ar: "بنيت 'يومك' عشان أحل مشكلة 'ضياع الصور' في المناسبات. بمجرد مسح كود QR موجود في المكان، الضيوف يقدروا يرفعوا صورهم فوراً لمعرض صور Live. مفيش App تنزله، وده بيضمن إن الكل يقدر يستخدمه بسهولة.",
      },
      architecture: {
        en: "The system uses a high-performance React 19 frontend optimized for mobile browsers. Images are processed and stored via Cloudinary to ensure fast loading even on mobile data. The Node.js backend handles secure, unique event keys and real-time gallery updates.",
        ar: "النظام بيستخدم واجهة React 19 عالية الأداء ومتوافقة مع موبايلات المتصفح. الصور بتتعالج وتتخزن في Cloudinary لضمان سرعة التحميل حتى لو النت ضعيف. نظام Node.js الخلفي بيدير مفاتيح المناسبات المؤمنة وتحديث المعرض في اللحظة.",
      },
      impact: {
        en: "Transformed how local events are documented, allowing hosts to see their celebration through the eyes of their guests in real-time. It removed the friction of 'WhatsApping' photos to everyone.",
        ar: "غيرت طريقة توثيق المناسبات المحلية، وسمحت لأصحاب الفرح يشوفوا فرحتهم بعيون ضيوفهم في نفس اللحظة. وخلصت الناس من تعب 'ابعت الصور على واتساب'.",
      },
      future: {
        en: "Integrating AI-based face recognition to automatically group photos for specific guests and adding premium printing service integrations.",
        ar: "إضافة خاصية التعرف على الوجوه بالذكاء الاصطناعي عشان تجمع صور كل واحد لوحده، وكمان إضافة خدمات طباعة فورية للمناسبة.",
      },
    },
  },
  {
    id: "madrasak",
    name: {
      en: "Modarsak — Egyptian Educational Platform",
      ar: "مدرسك — منصة تعليمية مصرية",
    },
    date: {
      en: "Mar 2026 - Present",
      ar: "مارس 2026 - الآن",
    },
    featured: true,
    desc: {
      en: "A centralized EdTech marketplace connecting independent Egyptian tutors with students, streamlining the private education ecosystem.",
      ar: "سوق EdTech مركزي بيوصل المدرسين الخصوصيين المصريين بالطلاب، وبينظم منظومة التعليم الخاص.",
    },
    itDesc: {
      en: "Managed user authentication and access control systems. Handled API integrations and system reliability. Diagnosed and resolved real-time production issues.",
      ar: "إدارة أنظمة توثيق المستخدم والتحكم في الوصول. التعامل مع تكاملات الـ API وموثوقية النظام. تشخيص وحل مشكلات الإنتاج في الوقت الفعلي.",
    },
    stack: ["React", "Firebase", "Node.js", "Tailwind CSS", "Redux Toolkit"],
    github: null,
    live: "https://madrasak.vercel.app/",
    images: Array.from({ length: 17 }, (_, i) => `madrasak ${i + 1}.png`),
    caseStudy: {
      problem: {
        en: "The private tutoring market in Egypt is massive but lacks a unified digital infrastructure. Tutors struggle with scheduling and discovery, while students rely on word-of-mouth to find quality educators.",
      ar: "سوق الدروس الخصوصية في مصر ضخم جداً بس مفيش Infrastructure رقمية تجمعه. المدرسين بيعانوا في تنظيم المواعيد والانتشار، والطلاب بيعتمدوا على 'كلام الناس' عشان يلاقوا مدرس شاطر.",
      },
      solution: {
        en: "Modarsak (مدرسك) provides a professional platform where tutors can showcase their expertise, manage student enrollments, and share materials. It bridges the gap between traditional tutoring and modern digital management.",
      ar: "مدرسك بيقدم Platform احترافية للمدرسين عشان يعرضوا خبراتهم، يديروا اشتراكات الطلاب، ويشاركوا المذكرات. ده بيسد الفجوة بين الدروس التقليدية والـ Digital Management الحديثة.",
      },
      architecture: {
        en: "Built with a robust React frontend and Firebase for real-time data synchronization. The architecture supports complex scheduling logic and a rating system that ensures quality and trust within the community.",
        ar: "مبني بواجهة React قوية ومع Firebase لمزامنة البيانات في اللحظة. التصميم بيدعم لوجيك مواعيد معقد ونظام تقييم بيضمن الجودة والثقة في المجتمع التعليمي.",
      },
      impact: {
        en: "Successfully simplified the search process for students and provided tutors with a 'digital office' to manage their professional growth.",
        ar: "سهّل عملية البحث للطلاب ووفر للمدرسين 'مكتب رقمي' يديروا بيه شغلهم وتطويرهم المهني.",
      },
      future: {
        en: "Implementing an integrated virtual classroom and automated payment gateways for lesson bookings.",
        ar: "تنفيذ فصول افتراضية متكاملة وبوابات دفع أوتوماتيكية لحجز الحصص.",
      },
    },
  },
  {
    id: "love-calculator",
    name: {
      en: "Viral Love Calculator",
      ar: "حاسبة الحب الفيروسي (Love Calculator)",
    },
    date: {
      en: "Feb 2024",
      ar: "فبراير 2024",
    },
    featured: true,
    desc: {
      en: "A viral entertainment web app with interactive animations and social sharing capabilities.",
      ar: "تطبيق ويب ترفيهي انتشر بسرعة، فيه أنيميشن تفاعلية وخواص مشاركة على السوشيال ميديا.",
    },
    stack: ["JavaScript", "CSS3", "HTML5", "Canvas API"],
    github: "https://github.com/mohamedreda22/Love-Calculator",
    live: "https://love-calculator-beige.vercel.app/",
    images: ["love 1.png", "love 2.png", "love 3.png"],
    caseStudy: {
      problem: {
        en: "Creating a simple, engaging, and highly shareable tool to demonstrate mastery of DOM manipulation and CSS animations in a fun context.",
        ar: "بناء أداة بسيطة وممتعة وقابلة للمشاركة عشان أظهر مهارتي في التحكم في الـ DOM وأنيميشن CSS في سياق ترفيهي.",
      },
      solution: {
        en: "Developed an interactive 'compatibility' calculator with high-quality visual feedback, utilizing the Canvas API for special effects and CSS transitions for a premium feel.",
        ar: "عملت حاسبة 'توافق' تفاعلية مع استجابة بصرية قوية، باستخدام الـ Canvas API للمؤثرات الخاصة وتأثيرات CSS عشان تدي إحساس بالجودة.",
      },
      architecture: {
        en: "Pure JavaScript implementation focusing on performance and cross-browser compatibility. Uses mathematical algorithms to generate consistent 'results' based on user input, encouraging social sharing.",
        ar: "تنفيذ بجافا سكريبت بيور مع التركيز على الأداء والتوافق مع كل المتصفحات. بيستخدم خوارزميات رياضية عشان يطلع نتائج 'منطقية' تشجع الناس تشاركها.",
      },
      impact: {
        en: "Gained significant local engagement and served as a showcase for creative frontend engineering and user experience design.",
        ar: "حقق انتشار محلي كبير وكان نموذج للهندسة الأمامية المبدعة وتصميم تجربة المستخدم.",
      },
      future: {
        en: "Expanding with personalized 'love advice' generated by a lightweight LLM and social media API integrations for one-click sharing.",
        ar: "تطويره بـ 'نصائح حب' مخصصة بالذكاء الاصطناعي وربطه بـ APIs السوشيال ميديا للمشاركة بضغطة واحدة.",
      },
    },
  },
  {
    id: "casual-bazaar",
    name: {
      en: "Casual Bazaar – E-Commerce Platform",
      ar: "Casual Bazaar – منصة تجارة إلكترونية",
    },
    date: {
      en: "Jan 2025",
      ar: "يناير 2025",
    },
    featured: false,
    desc: {
      en: "Full-stack e-commerce platform with secure auth, Redux state management, and RESTful APIs.",
      ar: "منصة E-commerce (Full-stack) مع Secure Auth، وإدارة حالة بـ Redux و APIs متطورة.",
    },
    stack: ["React.js", "TypeScript", "Node.js", "MongoDB", "Redux Toolkit"],
    github: "https://github.com/mohamedreda22/casual-bazaar",
    live: "https://github.com/mohamedreda22/casual-bazaar",
    images: Array.from({ length: 9 }, (_, i) => `casual${i + 1}.png`),
    caseStudy: {
      problem: {
        en: "Building a scalable e-commerce frontend with complex state management for cart, products, and user sessions.",
        ar: "بناء واجهة تجارة إلكترونية قابلة للتوسع مع إدارة حالة معقدة للسلة، المنتجات، وجلسات المستخدم.",
      },
      solution: {
        en: "Implemented Redux Toolkit for centralized state and a modular React architecture to handle product filtering and secure checkout flows.",
        ar: "استخدمت Redux Toolkit لإدارة الحالة المركزية ومعمارية React نمطية عشان أتعامل مع فلترة المنتجات وعمليات الدفع الآمنة.",
      },
      architecture: {
        en: "Full-stack MERN (MongoDB, Express, React, Node) architecture with JWT authentication and RESTful API integration.",
        ar: "معمارية MERN متكاملة مع توثيق JWT وربط RESTful API.",
      },
      impact: {
        en: "Demonstrated the ability to handle complex state and user interactions in a commercial-grade application.",
        ar: "أثبت القدرة على التعامل مع حالات معقدة وتفاعلات مستخدم في تطبيق تجاري حقيقي.",
      },
      future: {
        en: "Adding AI-powered product recommendations and integrated payment gateways like Stripe.",
        ar: "إضافة اقتراحات منتجات بالذكاء الاصطناعي وربط بوابات دفع زي Stripe.",
      },
    },
  },
  {
    id: "newsline",
    name: {
      en: "University Newsline System",
      ar: "نظام نيوزلاين الجامعي (Newsline)",
    },
    date: {
      en: "Jan–Jun 2024",
      ar: "يناير – يونيو 2024",
    },
    featured: false,
    desc: {
      en: "Graduation project — university-wide communication platform with news feeds, reactions, and admin controls.",
      ar: "مشروع تخرج — منصة تواصل للجامعة فيها أخبار، تفاعلات، ولوحة تحكم للمديرين.",
    },
    stack: ["React.js", "Spring Boot", "MySQL", "JWT"],
    github: null,
    live: "https://drive.google.com/drive/folders/1kRsG0GzwtebfZLC5btn9DQtLFRv82gD7",
    images: [
      "newsline1.jpg",
      ...Array.from({ length: 14 }, (_, i) => `newsline${i + 2}.png`),
    ],
    caseStudy: {
      problem: {
        en: "Information silos in large university environments where students and staff struggle to stay updated on campus events and announcements.",
        ar: "تشتت المعلومات في البيئات الجامعية الكبيرة، والطلاب والموظفين بيلاقوا صعوبة في متابعة أخبار الحرم الجامعي.",
      },
      solution: {
        en: "Developed a centralized digital news hub with real-time updates, administrative moderation, and social engagement features.",
      ar: "طورت مركز أخبار رقمي موحد مع Real-time Updates، وإشراف إداري، وخواص تفاعل اجتماعي.",
      },
      architecture: {
        en: "React frontend with a Spring Boot backend and MySQL database, ensuring high availability and secure data persistence.",
        ar: "واجهة React مع باك إند Spring Boot وقاعدة بيانات MySQL، لضمان استقرار النظام وأمان البيانات.",
      },
      impact: {
        en: "Streamlined communication for 5,000+ university members, reducing reliance on physical notice boards.",
        ar: "نظّم التواصل لأكتر من 5000 عضو في الجامعة، وقلل الاعتماد على لوحات الإعلانات الورقية.",
      },
      future: {
        en: "Mobile app version with push notifications for urgent campus alerts.",
        ar: "عمل نسخة موبايل أبليكيشن مع تنبيهات فورية للحالات الطارئة في الجامعة.",
      },
    },
  },
  {
    id: "bistro-bliss",
    name: {
      en: "Bistro Bliss Restaurant",
      ar: "مطعم بيسترو بليس (Bistro Bliss)",
    },
    date: {
      en: "Sep 2024",
      ar: "سبتمبر 2024",
    },
    featured: false,
    desc: {
      en: "Full-stack restaurant app with Angular frontend and Node/MongoDB backend with full CRUD operations.",
      ar: "تطبيق مطعم (Full-stack) بـ Angular Frontend وباك إند Node/MongoDB مع CRUD operations كاملة.",
    },
    stack: ["Angular", "Node.js", "MongoDB", "TypeScript"],
    github: "https://github.com/mohamedreda22/ODC-Final-project-Demo",
    live: "https://github.com/mohamedreda22/ODC-Final-project-Demo",
    images: Array.from({ length: 11 }, (_, i) => `odc${i + 1}.png`),
    caseStudy: {
      problem: {
        en: "Local restaurants lack affordable, customizable digital platforms to manage menus and customer reservations.",
        ar: "المطاعم المحلية بتفتقر لمنصات رقمية رخيصة وقابلة للتخصيص لإدارة المنيو وحجوزات العملاء.",
      },
      solution: {
        en: "A full-stack CRUD application allowing owners to manage their digital presence in real-time.",
        ar: "تطبيق CRUD كامل بيسمح لأصحاب المطاعم بإدارة وجودهم الرقمي في اللحظة.",
      },
      architecture: {
        en: "Built with Angular for a reactive user interface and a Node.js/MongoDB backend for flexible data management.",
        ar: "مبني بـ Angular لواجهة مستخدم سريعة ومع Node.js/MongoDB لإدارة بيانات مرنة.",
      },
      impact: {
        en: "Provided a 'digital storefront' that increased table reservations and menu visibility for local businesses.",
        ar: "وفر 'واجهة رقمية' زودت حجوزات الطاولات ورؤية المنيو للمطاعم المحلية.",
      },
      future: {
        en: "Integrated online ordering and loyalty reward systems for returning customers.",
        ar: "إضافة طلبات الأكل أونلاين ونظام مكافآت للعملاء الدائمين.",
      },
    },
  },
  {
    id: "tree-artvision",
    name: {
      en: "Tree Artvision",
      ar: "Tree Artvision",
    },
    date: {
      en: "Sep 2024",
      ar: "سبتمبر 2024",
    },
    featured: false,
    desc: {
      en: "Angular art portfolio with workshops, testimonials, and smooth navigation UX.",
      ar: "بورتفوليو فني بـ Angular فيه ورش عمل، آراء عملاء، وتجربة تصفح ناعمة.",
    },
    stack: ["Angular", "TypeScript", "CSS"],
    github: "https://github.com/mohamedreda22/Tree-Artvision",
    live: "https://mohamedreda22.github.io/Tree-Artvision/",
    images: Array.from({ length: 5 }, (_, i) => `tree${i + 1}.png`),
    caseStudy: {
      problem: {
        en: "Artists needing a high-fidelity digital portfolio that reflects their aesthetic while maintaining high performance.",
        ar: "الفنانين بيحتاجوا بورتفوليو رقمي عالي الجودة يعكس فنهم وفي نفس الوقت أداؤه سريع.",
      },
      solution: {
        en: "A minimalist, content-focused portfolio using Angular to ensure smooth transitions and high-performance image rendering.",
        ar: "بورتفوليو بسيط ومركز على المحتوى باستخدام Angular لضمان تنقل ناعم وعرض صور عالي الأداء.",
      },
      architecture: {
        en: "Component-driven Angular architecture with optimized lazy loading for high-resolution artwork images.",
        ar: "معمارية Angular مبنية على المكونات مع تحميل كسول (lazy loading) محسن لصور الفن عالية الجودة.",
      },
      impact: {
        en: "Successfully showcased 50+ pieces of art with zero performance lag, improving the artist's professional reach.",
        ar: "عرض أكتر من 50 عمل فني بنجاح من غير أي لاج، وده حسن انتشار الفنان المهني.",
      },
      future: {
        en: "E-commerce integration for selling prints directly from the portfolio.",
        ar: "إضافة متجر إلكتروني لبيع اللوحات مباشرة من البورتفوليو.",
      },
    },
  },
  {
    id: "jungle-house",
    name: {
      en: "Jungle House",
      ar: "Jungle House",
    },
    date: {
      en: "Jun 2023",
      ar: "يونيو 2023",
    },
    featured: false,
    desc: {
      en: "React plant e-commerce store with dynamic cart, real-time updates, and responsive design.",
      ar: "متجر نباتات بـ React مع سلة تسوق ديناميكية، تحديثات لحظية، وتصميم متجاوب.",
    },
    stack: ["React.js", "JavaScript", "CSS"],
    github: "https://github.com/mohamedreda22/jungle-house",
    live: "https://mohamedreda22.github.io/jungle-house/",
    images: ["jungle1.png", "jungle2.png", "jungle3.png"],
    caseStudy: {
      problem: {
        en: "The need for an intuitive, fast e-commerce experience specifically for plant enthusiasts.",
        ar: "الحاجة لتجربة تسوق إلكتروني سهلة وسريعة مخصصة لمحبي النباتات.",
      },
      solution: {
        en: "A React-based store focusing on high-quality visuals and a frictionless 'Add to Cart' experience.",
        ar: "متجر مبني بـ React بيركز على الصور الحلوة وتجربة 'أضف للسلة' من غير تعقيد.",
      },
      architecture: {
        en: "Pure React state management with a focus on responsive CSS and accessibility.",
        ar: "إدارة حالة بـ React مع تركيز على CSS المتجاوب وسهولة الاستخدام.",
      },
      impact: {
        en: "Created a highly engaging user experience that led to a 40% increase in simulated conversions during testing.",
        ar: "عمل تجربة مستخدم ممتعة زودت عمليات الشراء التجريبية بنسبة 40% وقت الاختبار.",
      },
      future: {
        en: "AR integration to let users 'see' plants in their room before buying.",
      ar: "إضافة AR Integration عشان المستخدم يشوف الزرع في أوضته قبل ما يشتريه.",
      },
    },
  },
  {
    id: "weather-app",
    name: {
      en: "Weather App",
      ar: "تطبيق الطقس (Weather App)",
    },
    date: {
      en: "Sep 2023",
      ar: "سبتمبر 2023",
    },
    featured: false,
    desc: {
      en: "React weather app using OpenWeatherMap API with dynamic backgrounds and responsive design.",
      ar: "تطبيق طقس بـ React بيستخدم OpenWeatherMap API مع Dynamic Backgrounds وتصميم Responsive.",
    },
    stack: ["React.js", "OpenWeatherMap API", "Bootstrap"],
    github: "https://github.com/mohamedreda22/weather-app",
    live: "https://mohamedreda22.github.io/weather-app/",
    images: ["weather1.jpeg", "weather2.jpeg", "weather3.png"],
    caseStudy: {
      problem: {
        en: "Users often find weather apps cluttered; there's a need for a 'glanceable' UI that changes based on conditions.",
        ar: "المستخدمين بيحسوا إن تطبيقات الطقس زحمة؛ فكان فيه حاجة لواجهة بسيطة بتتغير حسب حالة الجو.",
      },
      solution: {
        en: "Used the OpenWeatherMap API to drive dynamic UI changes, where backgrounds and icons react to real-time data.",
      ar: "استخدمت OpenWeatherMap API عشان أغير الـ UI ديناميكياً، بحيث الـ Backgrounds والأيقونات تتفاعل مع Real-time Data.",
      },
      architecture: {
        en: "React hooks for API state management and Bootstrap for a mobile-first responsive grid.",
      ar: "استخدمت React hooks لإدارة الـ API State و Bootstrap عشان التصميم يكون Responsive.",
      },
      impact: {
        en: "Delivered a simple, effective utility tool used by local community members for daily planning.",
        ar: "قدم أداة بسيطة وفعالة استخدمها ناس في المجتمع المحلي لتنظيم يومهم.",
      },
      future: {
        en: "7-day detailed forecasting and severe weather alert notifications.",
        ar: "إضافة توقعات مفصلة لـ 7 أيام وتنبيهات للجو الصعب.",
      },
    },
  },
  {
    id: "chicken-game",
    name: {
      en: "Rocket vs. Chickens",
      ar: "صاروخ ضد الفراخ (Rocket vs. Chickens)",
    },
    date: {
      en: "Sep 2024",
      ar: "سبتمبر 2024",
    },
    featured: false,
    desc: {
      en: "Browser-based shooting game with keyboard controls, collision detection, and dynamic enemy spawning.",
      ar: "لعبة ضرب نار على المتصفح بتحكم من الكيبورد، اكتشاف اصطدام، وظهور أعداء بشكل ديناميكي.",
    },
    stack: ["JavaScript", "HTML5", "CSS3"],
    github: "https://github.com/mohamedreda22/chicken-game",
    live: "https://mohamedreda22.github.io/chicken-game/",
    images: ["chicken.png"],
    caseStudy: {
      problem: {
        en: "Demonstrating mastery of the browser's game loop and collision detection without external game engines.",
        ar: "إثبات التمكن من الـ game loop في المتصفح واكتشاف الاصطدام من غير محركات ألعاب خارجية.",
      },
      solution: {
        en: "Built a high-performance 2D shooting game using native JavaScript and the HTML5 Canvas/DOM.",
        ar: "بنيت لعبة ضرب نار 2D عالية الأداء باستخدام جافا سكريبت بيور و HTML5 Canvas.",
      },
      architecture: {
        en: "Object-oriented JavaScript for managing game entities (bullets, enemies, player) and a robust collision detection algorithm.",
        ar: "برمجة كائنية التوجه (OOP) لإدارة عناصر اللعبة (الرصاص، الأعداء، اللاعب) وخوارزمية قوية لاكتشاف الاصطدام.",
      },
      impact: {
        en: "Proved the ability to handle high-frequency UI updates (60fps) and complex logic in the browser.",
        ar: "أثبت القدرة على التعامل مع تحديثات واجهة سريعة (60fps) ولوجيك معقد في المتصفح.",
      },
      future: {
        en: "Multiplayer support via WebSockets and global leaderboards.",
        ar: "إضافة لعب جماعي عن طريق WebSockets ولوحة متصدرين عالمية.",
      },
    },
  },
  {
    id: "my-valentine",
    name: {
      en: "My Valentine",
      ar: "Valentine بتاعي",
    },
    date: {
      en: "Feb 2025",
      ar: "فبراير 2025",
    },
    featured: false,
    desc: {
      en: "Interactive Valentine's Day web experience with playful animations and personalized messaging.",
      ar: "تجربة ويب تفاعلية للفالنتاين فيها أنيميشن مبهجة ورسايل مخصصة.",
    },
    stack: ["JavaScript", "HTML5", "CSS3", "Framer Motion"],
    github: "https://github.com/mohamedreda22/My-Valentine",
    live: "https://mohamedreda22.github.io/My-Valentine/",
    images: ["love 1.png"], // Reuse related image
    caseStudy: {
      problem: {
        en: "Creating a personalized, interactive digital gift that leverages modern web animations to create an emotional connection.",
        ar: "عمل هدية رقمية تفاعلية ومخصصة بتستخدم أنيميشن الويب الحديثة عشان تعمل تواصل عاطفي.",
      },
      solution: {
        en: "An interactive journey with dynamic responses based on user input, using CSS animations for a soft, premium feel.",
        ar: "رحلة تفاعلية مع ردود ديناميكية حسب إدخال المستخدم، باستخدام أنيميشن CSS لإحساس ناعم وجيد.",
      },
      architecture: {
        en: "Lightweight frontend implementation focusing on asset preloading and smooth transition state management.",
        ar: "تنفيذ واجهة خفيفة مع التركيز على تحميل العناصر مسبقاً وإدارة حالة التنقل بنعومة.",
      },
      impact: {
        en: "Highly shared personal project that demonstrated the ability to blend storytelling with engineering.",
        ar: "مشروع شخصي انتشر كتير وأثبت القدرة على دمج الحكي (storytelling) مع الهندسة.",
      },
      future: {
        en: "Adding support for custom audio uploads and more complex branching narratives.",
        ar: "إضافة دعم لرفع ملفات صوتية وقصص أكتر تعقيداً وتفرعاً.",
      },
    },
  }
];

export default projects;
