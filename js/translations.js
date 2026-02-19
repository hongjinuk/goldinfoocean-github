// Translation data for the application
const translations = {
    ko: {
        header: {
            title: "🌟 금빛 정보 바다 🌟",
            subtitle: "Gold Info Ocean - 성격 분석 플랫폼"
        },
        tabs: {
            bloodtype: "🩸 혈액형",
            mbti: "🧠 MBTI",
            hormone: "💊 호르몬 성향",
            faceshape: "😊 관상학",
            palmreading: "✋ 손금",
            constitution: "🏥 체질",
            numerology: "🔢 수비학",
            zodiac: "⭐ 별자리",
            chinesezodiac: "🐉 띠",
            enneagram: "🎭 에니어그램",
            profile: "👤 내 프로필",
            contacts: "📋 지인 관리"
        },
        bloodtype: {
            title: "🩸 혈액형 (Blood Type)",
            description: "혈액형별 성격 특성과 궁합 정보입니다.",
            personality: "성격",
            strengths: "장점",
            weaknesses: "단점",
            compatibility: "궁합"
        },
        mbti: {
            title: "🧠 MBTI",
            description: "16가지 성격 유형 분석입니다. 자신의 유형을 확인해보세요!"
        },
        hormone: {
            title: "💊 호르몬 성향",
            description: "호르몬 성향에 따른 성격 특성과 건강 관리 방법입니다."
        },
        faceshape: {
            title: "😊 관상학 (얼굴형)",
            description: "얼굴형에 따른 성격 특성과 운세 분석입니다."
        },
        palmreading: {
            title: "✋ 손금",
            description: "손금으로 보는 성격, 건강, 운세 분석입니다."
        },
        constitution: {
            title: "🏥 사상체질 (Four Constitution Medicine)",
            description: "한의학의 사상체질론에 따른 체질 분석입니다. 각 체질마다 성격, 건강, 음식 등이 다릅니다."
        },
        numerology: {
            title: "🔢 수비학 (Numerology)"
        },
        zodiac: {
            title: "⭐ 별자리 (Zodiac)"
        },
        chinesezodiac: {
            title: "🐉 띠 (Chinese Zodiac)"
        },
        enneagram: {
            title: "🎭 에니어그램 (Enneagram)"
        },
        profile: {
            title: "👤 내 프로필 관리",
            inputTitle: "내 정보 입력",
            name: "이름",
            interests: "관심사 (쉼표로 구분)",
            bloodtype: "혈액형",
            mbti: "MBTI",
            save: "저장"
        },
        contacts: {
            title: "📋 지인 관리",
            addTitle: "지인 추가",
            name: "이름",
            relationship: "관계 (예: 친구, 가족)",
            phone: "전화번호",
            bloodtype: "혈액형",
            notes: "메모",
            add: "추가"
        },
        footer: {
            copyright: "© 2026 Gold Info Ocean. All rights reserved."
        }
    },
    en: {
        header: {
            title: "🌟 Gold Info Ocean 🌟",
            subtitle: "Gold Info Ocean - Personality Analysis Platform"
        },
        tabs: {
            bloodtype: "🩸 Blood Type",
            mbti: "🧠 MBTI",
            hormone: "💊 Hormone Type",
            faceshape: "😊 Face Reading",
            palmreading: "✋ Palm Reading",
            constitution: "🏥 Constitution",
            numerology: "🔢 Numerology",
            zodiac: "⭐ Zodiac",
            chinesezodiac: "🐉 Chinese Zodiac",
            enneagram: "🎭 Enneagram",
            profile: "👤 My Profile",
            contacts: "📋 Contacts"
        },
        bloodtype: {
            title: "🩸 Blood Type",
            description: "Personality traits and compatibility information by blood type.",
            personality: "Personality",
            strengths: "Strengths",
            weaknesses: "Weaknesses",
            compatibility: "Compatibility"
        },
        mbti: {
            title: "🧠 MBTI",
            description: "Analysis of 16 personality types. Find your type!"
        },
        hormone: {
            title: "💊 Hormone Type",
            description: "Personality traits and health management methods based on hormone tendencies."
        },
        faceshape: {
            title: "😊 Face Reading",
            description: "Personality analysis and fortune based on face shape."
        },
        palmreading: {
            title: "✋ Palm Reading",
            description: "Personality, health, and fortune analysis through palm reading."
        },
        constitution: {
            title: "🏥 Four Constitution Medicine",
            description: "Constitutional analysis based on Korean traditional medicine. Each constitution has different personality, health, and dietary characteristics."
        },
        numerology: {
            title: "🔢 Numerology"
        },
        zodiac: {
            title: "⭐ Zodiac"
        },
        chinesezodiac: {
            title: "🐉 Chinese Zodiac"
        },
        enneagram: {
            title: "🎭 Enneagram"
        },
        profile: {
            title: "👤 My Profile",
            inputTitle: "Enter Your Information",
            name: "Name",
            interests: "Interests (comma separated)",
            bloodtype: "Blood Type",
            mbti: "MBTI",
            save: "Save"
        },
        contacts: {
            title: "📋 Contact Management",
            addTitle: "Add Contact",
            name: "Name",
            relationship: "Relationship (e.g., Friend, Family)",
            phone: "Phone Number",
            bloodtype: "Blood Type",
            notes: "Notes",
            add: "Add"
        },
        footer: {
            copyright: "© 2026 Gold Info Ocean. All rights reserved."
        }
    }
};

// Current language state
let currentLanguage = 'ko';

// Function to get translation
function t(key) {
    const keys = key.split('.');
    let value = translations[currentLanguage];
    
    for (const k of keys) {
        if (value && typeof value === 'object') {
            value = value[k];
        } else {
            return key; // Return key if translation not found
        }
    }
    
    return value || key;
}

// Function to update all translations on the page
function updatePageTranslations() {
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        element.textContent = t(key);
    });
    
    // Update placeholders
    const namePlaceholder = document.getElementById('profile-name');
    if (namePlaceholder) namePlaceholder.placeholder = t('profile.name');
    
    const interestsPlaceholder = document.getElementById('profile-interests');
    if (interestsPlaceholder) interestsPlaceholder.placeholder = t('profile.interests');
    
    const profileBloodtypePlaceholder = document.getElementById('profile-bloodtype');
    if (profileBloodtypePlaceholder) profileBloodtypePlaceholder.placeholder = t('profile.bloodtype');
    
    const profileMbtiPlaceholder = document.getElementById('profile-mbti');
    if (profileMbtiPlaceholder) profileMbtiPlaceholder.placeholder = t('profile.mbti');
    
    const contactNamePlaceholder = document.getElementById('contact-name');
    if (contactNamePlaceholder) contactNamePlaceholder.placeholder = t('contacts.name');
    
    const contactRelationshipPlaceholder = document.getElementById('contact-relationship');
    if (contactRelationshipPlaceholder) contactRelationshipPlaceholder.placeholder = t('contacts.relationship');
    
    const contactPhonePlaceholder = document.getElementById('contact-phone');
    if (contactPhonePlaceholder) contactPhonePlaceholder.placeholder = t('contacts.phone');
    
    const contactBloodtypePlaceholder = document.getElementById('contact-bloodtype');
    if (contactBloodtypePlaceholder) contactBloodtypePlaceholder.placeholder = t('contacts.bloodtype');
    
    const contactNotesPlaceholder = document.getElementById('contact-notes');
    if (contactNotesPlaceholder) contactNotesPlaceholder.placeholder = t('contacts.notes');
    
    // Update section titles and descriptions
    updateSectionContent();
}

// Function to update section content
function updateSectionContent() {
    // Blood Type section
    const bloodtypeSection = document.querySelector('#bloodtype h2');
    if (bloodtypeSection) bloodtypeSection.textContent = t('bloodtype.title');
    
    const bloodtypeDesc = document.querySelector('#bloodtype .section-description');
    if (bloodtypeDesc) bloodtypeDesc.textContent = t('bloodtype.description');
    
    // MBTI section
    const mbtiSection = document.querySelector('#mbti h2');
    if (mbtiSection) mbtiSection.textContent = t('mbti.title');
    
    const mbtiDesc = document.querySelector('#mbti .section-description');
    if (mbtiDesc) mbtiDesc.textContent = t('mbti.description');
    
    // Hormone section
    const hormoneSection = document.querySelector('#hormone h2');
    if (hormoneSection) hormoneSection.textContent = t('hormone.title');
    
    const hormoneDesc = document.querySelector('#hormone .section-description');
    if (hormoneDesc) hormoneDesc.textContent = t('hormone.description');
    
    // Face Shape section
    const faceshapeSection = document.querySelector('#faceshape h2');
    if (faceshapeSection) faceshapeSection.textContent = t('faceshape.title');
    
    const faceshapeDesc = document.querySelector('#faceshape .section-description');
    if (faceshapeDesc) faceshapeDesc.textContent = t('faceshape.description');
    
    // Palm Reading section
    const palmreadingSection = document.querySelector('#palmreading h2');
    if (palmreadingSection) palmreadingSection.textContent = t('palmreading.title');
    
    const palmreadingDesc = document.querySelector('#palmreading .section-description');
    if (palmreadingDesc) palmreadingDesc.textContent = t('palmreading.description');
    
    // Constitution section
    const constitutionSection = document.querySelector('#constitution h2');
    if (constitutionSection) constitutionSection.textContent = t('constitution.title');
    
    const constitutionDesc = document.querySelector('#constitution .section-description');
    if (constitutionDesc) constitutionDesc.textContent = t('constitution.description');
    
    // Numerology section
    const numerologySection = document.querySelector('#numerology h2');
    if (numerologySection) numerologySection.textContent = t('numerology.title');
    
    // Zodiac section
    const zodiacSection = document.querySelector('#zodiac h2');
    if (zodiacSection) zodiacSection.textContent = t('zodiac.title');
    
    // Chinese Zodiac section
    const chinesezodiacSection = document.querySelector('#chinesezodiac h2');
    if (chinesezodiacSection) chinesezodiacSection.textContent = t('chinesezodiac.title');
    
    // Enneagram section
    const enneagramSection = document.querySelector('#enneagram h2');
    if (enneagramSection) enneagramSection.textContent = t('enneagram.title');
    
    // Profile section
    const profileSection = document.querySelector('#profile h2');
    if (profileSection) profileSection.textContent = t('profile.title');
    
    const profileInputTitle = document.querySelector('#profile h3');
    if (profileInputTitle) profileInputTitle.textContent = t('profile.inputTitle');
    
    // Contacts section
    const contactsSection = document.querySelector('#contacts h2');
    if (contactsSection) contactsSection.textContent = t('contacts.title');
    
    const contactsAddTitle = document.querySelector('#contacts h3');
    if (contactsAddTitle) contactsAddTitle.textContent = t('contacts.addTitle');
    
    // Footer
    const footerText = document.querySelector('.app-footer p');
    if (footerText) footerText.textContent = t('footer.copyright');
}

// Function to toggle language
function toggleLanguage() {
    currentLanguage = currentLanguage === 'ko' ? 'en' : 'ko';
    
    // Update language button text
    const langText = document.getElementById('langText');
    if (langText) {
        langText.textContent = currentLanguage === 'ko' ? 'English' : '한국어';
    }
    
    // Update all translations
    updatePageTranslations();
    
    // Save language preference
    localStorage.setItem('preferredLanguage', currentLanguage);
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', function() {
    // Load saved language preference
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage && (savedLanguage === 'ko' || savedLanguage === 'en')) {
        currentLanguage = savedLanguage;
        const langText = document.getElementById('langText');
        if (langText) {
            langText.textContent = currentLanguage === 'ko' ? 'English' : '한국어';
        }
    }
    
    // Apply initial translations
    updatePageTranslations();
});
