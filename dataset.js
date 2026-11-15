
// CodeSwitch Sentinel - Pilot Dataset
// Original illustrative examples for initial testing.
// These are not independent validation data.

const trainingData = [
    // EN: English
    { text: "I am learning artificial intelligence", label: "EN" },
    { text: "The weather is beautiful today", label: "EN" },
    { text: "I want to study computer science", label: "EN" },
    { text: "Technology can improve education", label: "EN" },
    { text: "This is my research project", label: "EN" },

    // BN: Bangla script
    { text: "আমি কৃত্রিম বুদ্ধিমত্তা শিখছি", label: "BN" },
    { text: "আজ আবহাওয়া খুব সুন্দর", label: "BN" },
    { text: "আমি কম্পিউটার বিজ্ঞান পড়তে চাই", label: "BN" },
    { text: "প্রযুক্তি শিক্ষার উন্নতি করতে পারে", label: "BN" },
    { text: "এটি আমার গবেষণা প্রকল্প", label: "BN" },

    // BN-ROM: Romanized Bangla
    { text: "Ami kritrim buddhimotta shikhchi", label: "BN-ROM" },
    { text: "Aj abohawa khub shundor", label: "BN-ROM" },
    { text: "Ami computer biggan porte chai", label: "BN-ROM" },
    { text: "Projukti shikkhar unnati korte pare", label: "BN-ROM" },
    { text: "Eta amar gobeshona prokolpo", label: "BN-ROM" },

    // MIXED: Bangla + English
    { text: "Ami artificial intelligence shikhchi", label: "MIXED" },
    { text: "আজ আমার computer class আছে", label: "MIXED" },
    { text: "আমি research project তৈরি করছি", label: "MIXED" },
    { text: "আজ weather খুব সুন্দর", label: "MIXED" },
    { text: "আমি machine learning শিখতে চাই", label: "MIXED" },
    
    // Additional researcher-written pilot examples

    // EN
    { text: "Education creates new opportunities", label: "EN" },
    { text: "My computer is working properly", label: "EN" },
    { text: "Science helps us understand nature", label: "EN" },
    { text: "I enjoy solving difficult problems", label: "EN" },
    { text: "Learning takes patience and practice", label: "EN" },

    // BN
    { text: "শিক্ষা নতুন সুযোগ তৈরি করে", label: "BN" },
    { text: "আমার কম্পিউটার ঠিকভাবে কাজ করছে", label: "BN" },
    { text: "বিজ্ঞান আমাদের প্রকৃতি বুঝতে সাহায্য করে", label: "BN" },
    { text: "আমি কঠিন সমস্যা সমাধান করতে পছন্দ করি", label: "BN" },
    { text: "শেখার জন্য ধৈর্য ও অনুশীলন দরকার", label: "BN" },

    // BN-ROM
    { text: "Shikkha notun sujog toiri kore", label: "BN-ROM" },
    { text: "Amar computer thikvabe kaj korche", label: "BN-ROM" },
    { text: "Biggan amader prokriti bujhte shahajjo kore", label: "BN-ROM" },
    { text: "Ami kothin shomossha shomadhan korte pochondo kori", label: "BN-ROM" },
    { text: "Shekhar jonno dhoirjo o onushilon dorkar", label: "BN-ROM" },

    // MIXED
    { text: "শিক্ষা new opportunities তৈরি করে", label: "MIXED" },
    { text: "আমার computer ঠিকভাবে কাজ করছে", label: "MIXED" },
    { text: "Science আমাদের প্রকৃতি বুঝতে সাহায্য করে", label: "MIXED" },
    { text: "আমি difficult problems solve করতে পছন্দ করি", label: "MIXED" },
    { text: "Learning এর জন্য ধৈর্য দরকার", label: "MIXED" },

];
  
