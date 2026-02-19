// Tab switching functionality
function showTab(event, tabName) {
    // Hide all sections
    const sections = document.querySelectorAll('.personality-section');
    sections.forEach(section => section.classList.remove('active'));
    
    // Remove active class from all tab buttons
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => button.classList.remove('active'));
    
    // Show selected section
    const selectedSection = document.getElementById(tabName);
    if (selectedSection) {
        selectedSection.classList.add('active');
    }
    
    // Add active class to clicked tab button
    event.target.classList.add('active');
    
    // Hide all info cards when switching tabs
    const infoCards = document.querySelectorAll('.info-card');
    infoCards.forEach(card => card.style.display = 'none');
}

// Blood Type functions
function showBloodType(type) {
    const info = data.bloodType[type];
    const infoCard = document.getElementById('bloodtype-info');
    
    if (info) {
        infoCard.innerHTML = `
            <h3>${info.type}형</h3>
            <div class="info-item"><strong>성격:</strong> ${info.personality}</div>
            <div class="info-item"><strong>장점:</strong> ${info.strengths}</div>
            <div class="info-item"><strong>단점:</strong> ${info.weaknesses}</div>
            <div class="info-item"><strong>궁합:</strong> ${info.compatibility}</div>
            <div class="info-item"><strong>설명:</strong> ${info.description}</div>
        `;
        infoCard.style.display = 'block';
    }
}

// MBTI functions
function showMBTI(type) {
    const info = data.mbti[type];
    const infoCard = document.getElementById('mbti-info');
    
    if (info) {
        infoCard.innerHTML = `
            <h3>${info.type}</h3>
            <div class="info-item"><strong>설명:</strong> ${info.description}</div>
            <div class="info-item"><strong>장점:</strong> ${info.strengths}</div>
            <div class="info-item"><strong>단점:</strong> ${info.weaknesses}</div>
            <div class="info-item"><strong>직업:</strong> ${info.careerPaths}</div>
            <div class="info-item"><strong>인간관계:</strong> ${info.relationships}</div>
        `;
        infoCard.style.display = 'block';
    }
}

// Hormone functions
function showHormone(type) {
    const info = data.hormone[type];
    const infoCard = document.getElementById('hormone-info');
    
    const displayNames = {
        'ESTROGEN': '에스트로겐형',
        'TESTOSTERONE': '테스토스테론형',
        'BALANCED': '균형형'
    };
    
    if (info) {
        infoCard.innerHTML = `
            <h3>${displayNames[type]}</h3>
            <div class="info-item"><strong>설명:</strong> ${info.description}</div>
            <div class="info-item"><strong>특성:</strong> ${info.characteristics}</div>
            <div class="info-item"><strong>장점:</strong> ${info.strengths}</div>
            <div class="info-item"><strong>도전과제:</strong> ${info.challenges}</div>
            <div class="info-item"><strong>균형 팁:</strong> ${info.balanceTips}</div>
        `;
        infoCard.style.display = 'block';
    }
}

// Face Shape functions
function showFaceShape(shape) {
    const info = data.faceShape[shape];
    const infoCard = document.getElementById('faceshape-info');
    
    const displayNames = {
        'ROUND': '둥근형',
        'SQUARE': '사각형',
        'OVAL': '계란형',
        'HEART': '하트형'
    };
    
    if (info) {
        infoCard.innerHTML = `
            <h3>${displayNames[shape]}</h3>
            <div class="info-item"><strong>설명:</strong> ${info.description}</div>
            <div class="info-item"><strong>성격:</strong> ${info.personality}</div>
            <div class="info-item"><strong>장점:</strong> ${info.strengths}</div>
            <div class="info-item"><strong>특징:</strong> ${info.characteristics}</div>
            <div class="info-item"><strong>조언:</strong> ${info.advice}</div>
        `;
        infoCard.style.display = 'block';
    }
}

// Palm Reading functions
function showPalmReading(lineType) {
    const info = data.palmReading[lineType];
    const infoCard = document.getElementById('palmreading-info');
    
    const displayNames = {
        'HEART_LINE': '감정선',
        'HEAD_LINE': '두뇌선',
        'LIFE_LINE': '생명선',
        'FATE_LINE': '운명선'
    };
    
    if (info) {
        infoCard.innerHTML = `
            <h3>${displayNames[lineType]}</h3>
            <div class="info-item"><strong>설명:</strong> ${info.description}</div>
            <div class="info-item"><strong>의미:</strong> ${info.meaning}</div>
            <div class="info-item"><strong>해석:</strong> ${info.interpretation}</div>
            <div class="info-item"><strong>특징:</strong> ${info.characteristics}</div>
            <div class="info-item"><strong>조언:</strong> ${info.advice}</div>
        `;
        infoCard.style.display = 'block';
    }
}

// Constitution functions
function showConstitution(type) {
    const info = data.constitution[type];
    const infoCard = document.getElementById('constitution-info');
    
    if (info) {
        infoCard.innerHTML = `
            <h3>${info.icon} ${info.name}</h3>
            <div class="info-item"><strong>📝 성격:</strong> ${info.personality}</div>
            <div class="info-item"><strong>🎯 특징:</strong> ${info.characteristics}</div>
            <div class="info-item"><strong>💪 장점:</strong> ${info.strengths}</div>
            <div class="info-item"><strong>⚠️ 단점:</strong> ${info.weaknesses}</div>
            <div class="info-item"><strong>🏥 건강 조언:</strong> ${info.healthTips}</div>
            <div class="info-item"><strong>✅ 좋은 음식:</strong> ${info.recommendedFoods}</div>
            <div class="info-item"><strong>❌ 피해야 할 음식:</strong> ${info.foodsToAvoid}</div>
            <div class="info-item"><strong>💡 설명:</strong> ${info.description}</div>
        `;
        infoCard.style.display = 'block';
    }
}

// Numerology functions
function showNumerology(number) {
    const info = data.numerology[number];
    const infoCard = document.getElementById('numerology-info');
    
    if (info) {
        infoCard.innerHTML = `
            <h3>${number}번 - ${info.meaning}</h3>
            <div class="info-item"><strong>성격:</strong> ${info.personality}</div>
            <div class="info-item"><strong>장점:</strong> ${info.strengths}</div>
            <div class="info-item"><strong>단점:</strong> ${info.weaknesses}</div>
            <div class="info-item"><strong>적합 직업:</strong> ${info.careerPaths}</div>
            <div class="info-item"><strong>설명:</strong> ${info.description}</div>
        `;
        infoCard.style.display = 'block';
    }
}

// Zodiac functions
function showZodiac(sign) {
    const info = data.zodiac[sign];
    const infoCard = document.getElementById('zodiac-info');
    
    if (info) {
        infoCard.innerHTML = `
            <h3>${info.sign}</h3>
            <div class="info-item"><strong>기간:</strong> ${info.dateRange}</div>
            <div class="info-item"><strong>성격:</strong> ${info.personality}</div>
            <div class="info-item"><strong>장점:</strong> ${info.strengths}</div>
            <div class="info-item"><strong>단점:</strong> ${info.weaknesses}</div>
            <div class="info-item"><strong>궁합:</strong> ${info.compatibility}</div>
        `;
        infoCard.style.display = 'block';
    }
}

// Chinese Zodiac functions
function showChineseZodiac(animal) {
    const info = data.chineseZodiac[animal];
    const infoCard = document.getElementById('chinesezodiac-info');
    
    if (info) {
        infoCard.innerHTML = `
            <h3>${info.animal}띠</h3>
            <div class="info-item"><strong>해당 년도:</strong> ${info.years}</div>
            <div class="info-item"><strong>성격:</strong> ${info.personality}</div>
            <div class="info-item"><strong>장점:</strong> ${info.strengths}</div>
            <div class="info-item"><strong>단점:</strong> ${info.weaknesses}</div>
            <div class="info-item"><strong>궁합:</strong> ${info.compatibility}</div>
        `;
        infoCard.style.display = 'block';
    }
}

// Enneagram functions
function showEnneagram(type) {
    const info = data.enneagram[type];
    const infoCard = document.getElementById('enneagram-info');
    
    if (info) {
        infoCard.innerHTML = `
            <h3>${type}번 - ${info.name}</h3>
            <div class="info-item"><strong>성격:</strong> ${info.personality}</div>
            <div class="info-item"><strong>장점:</strong> ${info.strengths}</div>
            <div class="info-item"><strong>단점:</strong> ${info.weaknesses}</div>
            <div class="info-item"><strong>성장 방향:</strong> ${info.growthDirection}</div>
        `;
        infoCard.style.display = 'block';
    }
}

// Profile Management
let userProfile = null;

function saveProfile() {
    const name = document.getElementById('profile-name').value;
    const interests = document.getElementById('profile-interests').value;
    const bloodType = document.getElementById('profile-bloodtype').value;
    const mbti = document.getElementById('profile-mbti').value;
    
    if (!name) {
        alert('이름을 입력해주세요.');
        return;
    }
    
    userProfile = {
        name: name,
        interests: interests.split(',').map(i => i.trim()).filter(i => i.length > 0),
        bloodType: bloodType,
        mbti: mbti
    };
    
    localStorage.setItem('userProfile', JSON.stringify(userProfile));
    displayProfile();
}

function displayProfile() {
    if (!userProfile) {
        const saved = localStorage.getItem('userProfile');
        if (saved) {
            userProfile = JSON.parse(saved);
        } else {
            return;
        }
    }
    
    const displayDiv = document.getElementById('profile-display');
    displayDiv.innerHTML = `
        <h3>내 프로필</h3>
        <div class="info-item"><strong>이름:</strong> ${userProfile.name}</div>
        <div class="info-item"><strong>관심사:</strong> ${userProfile.interests.join(', ')}</div>
        <div class="info-item"><strong>혈액형:</strong> ${userProfile.bloodType || '미입력'}</div>
        <div class="info-item"><strong>MBTI:</strong> ${userProfile.mbti || '미입력'}</div>
    `;
    displayDiv.style.display = 'block';
}

// Contacts Management
let contacts = [];

function loadContacts() {
    const saved = localStorage.getItem('contacts');
    if (saved) {
        contacts = JSON.parse(saved);
        displayContacts();
    }
}

function addContact() {
    const name = document.getElementById('contact-name').value;
    const relationship = document.getElementById('contact-relationship').value;
    const phone = document.getElementById('contact-phone').value;
    const bloodType = document.getElementById('contact-bloodtype').value;
    const notes = document.getElementById('contact-notes').value;
    
    if (!name) {
        alert('이름을 입력해주세요.');
        return;
    }
    
    // Use timestamp with random suffix to avoid collision
    const contact = {
        id: Date.now().toString() + '-' + Math.random().toString(36).substr(2, 9),
        name: name,
        relationship: relationship,
        phone: phone,
        bloodType: bloodType,
        notes: notes
    };
    
    contacts.push(contact);
    localStorage.setItem('contacts', JSON.stringify(contacts));
    
    // Clear inputs
    document.getElementById('contact-name').value = '';
    document.getElementById('contact-relationship').value = '';
    document.getElementById('contact-phone').value = '';
    document.getElementById('contact-bloodtype').value = '';
    document.getElementById('contact-notes').value = '';
    
    displayContacts();
}

function deleteContact(id) {
    contacts = contacts.filter(c => c.id !== id);
    localStorage.setItem('contacts', JSON.stringify(contacts));
    displayContacts();
}

function displayContacts() {
    const listDiv = document.getElementById('contacts-list');
    
    if (contacts.length === 0) {
        listDiv.innerHTML = '<p style="margin-top: 20px;">등록된 지인이 없습니다.</p>';
        return;
    }
    
    listDiv.innerHTML = '<h3 style="margin-top: 20px;">등록된 지인</h3>';
    contacts.forEach(contact => {
        const contactCard = document.createElement('div');
        contactCard.className = 'info-card';
        contactCard.style.marginBottom = '15px';
        contactCard.innerHTML = `
            <div class="info-item"><strong>이름:</strong> ${contact.name}</div>
            ${contact.relationship ? `<div class="info-item"><strong>관계:</strong> ${contact.relationship}</div>` : ''}
            ${contact.phone ? `<div class="info-item"><strong>전화:</strong> ${contact.phone}</div>` : ''}
            ${contact.bloodType ? `<div class="info-item"><strong>혈액형:</strong> ${contact.bloodType}</div>` : ''}
            ${contact.notes ? `<div class="info-item"><strong>메모:</strong> ${contact.notes}</div>` : ''}
            <button class="type-button" onclick="deleteContact('${contact.id}')" style="margin-top: 10px; background-color: #dc3545;">삭제</button>
        `;
        listDiv.appendChild(contactCard);
    });
}

// Initialize on load
window.addEventListener('DOMContentLoaded', function() {
    displayProfile();
    loadContacts();
});
