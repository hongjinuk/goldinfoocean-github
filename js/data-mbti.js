// MBTI Dimension Comparison Tables (E/I, S/N, T/F, J/P)
const mbtiDimensions = {
    'EI': {
        title: 'E (외향) vs I (내향)',
        dimension: 'E / I',
        rows: [
            { aspect: '에너지 충전', e: '사람들과의 교류로 에너지 충전', i: '혼자만의 시간으로 에너지 충전' },
            { aspect: '의사소통', e: '말하면서 생각 정리', i: '생각 정리 후 말하기' },
            { aspect: '사교성', e: '폭넓은 인간관계 선호', i: '소수의 깊은 관계 선호' },
            { aspect: '행동 방식', e: '먼저 행동하고 생각', i: '먼저 생각하고 행동' },
            { aspect: '주의 방향', e: '외부 세계에 집중', i: '내면 세계에 집중' },
            { aspect: '표현', e: '감정·생각을 솔직하게 표현', i: '감정·생각을 내면에 간직' }
        ]
    },
    'SN': {
        title: 'S (감각) vs N (직관)',
        dimension: 'S / N',
        rows: [
            { aspect: '정보 수집', e: '오감으로 현재 사실 중시', i: '패턴·가능성·미래 중시' },
            { aspect: '학습 방식', e: '단계적·순서적 학습', i: '전체적·개념적 이해' },
            { aspect: '언어 표현', e: '구체적·직접적 표현', i: '비유·은유적 표현' },
            { aspect: '신뢰하는 것', e: '경험과 실제 데이터', i: '영감과 직관' },
            { aspect: '미래 관점', e: '현실적·현재 중심', i: '혁신적·미래 지향' },
            { aspect: '작업 방식', e: '정해진 방법 선호', i: '새로운 방법 탐색 선호' }
        ]
    },
    'TF': {
        title: 'T (사고) vs F (감정)',
        dimension: 'T / F',
        rows: [
            { aspect: '의사결정 기준', e: '논리·객관적 기준', i: '감정·가치 기준' },
            { aspect: '갈등 처리', e: '원칙에 따라 해결', i: '조화를 위해 타협' },
            { aspect: '피드백 방식', e: '솔직하고 직접적', i: '배려하며 완곡하게' },
            { aspect: '설득 방법', e: '논리와 증거로 설득', i: '공감과 관계로 설득' },
            { aspect: '우선순위', e: '공정성과 효율 중시', i: '사람과 감정 중시' },
            { aspect: '강점', e: '분석적·비판적 사고', i: '공감능력·인간관계' }
        ]
    },
    'JP': {
        title: 'J (판단) vs P (인식)',
        dimension: 'J / P',
        rows: [
            { aspect: '생활 방식', e: '계획적·체계적', i: '유연·즉흥적' },
            { aspect: '마감/일정', e: '마감을 철저히 준수', i: '마감 직전에 집중력 발휘' },
            { aspect: '결정 방식', e: '빠르게 결정하고 실행', i: '옵션을 열어두고 탐색' },
            { aspect: '환경', e: '정돈된 환경 선호', i: '자유로운 환경 선호' },
            { aspect: '스트레스', e: '불확실성에서 스트레스', i: '엄격한 일정에서 스트레스' },
            { aspect: '장점', e: '목표 달성·마무리 능력', i: '적응력·창의적 문제해결' }
        ]
    }
};

// MBTI Data - All 16 types
const mbtiData = {
    // ── Analysts (NT) ──────────────────────────────────────────────────────────
    'INTJ': {
        type: 'INTJ',
        nickname: '전략가',
        description: '전략가형 - 독창적이고 전략적인 사고를 가진 완벽주의자',
        strengths: '독립적, 전략적 사고, 높은 기준, 결단력, 자신감',
        weaknesses: '지나치게 비판적, 감정 표현 부족, 완고함, 타인과 어울리기 어려움',
        careerPaths: '과학자, 엔지니어, 전략 기획자, 건축가, 판사',
        relationships: '독립적이고 자기 확신이 강함. 깊고 의미 있는 관계를 선호',
        cognitiveFunction: '주기능: Ni (내향 직관), 부기능: Te (외향 사고)',
        famousPeople: '일론 머스크, 니체, 아놀드 슈워제네거'
    },
    'INTP': {
        type: 'INTP',
        nickname: '논리술사',
        description: '논리술사형 - 혁신적인 발명가로 지식과 논리에 대한 끝없는 갈증을 가진 유형',
        strengths: '분석적, 객관적, 창의적 문제해결, 독립적, 개방적 사고',
        weaknesses: '우유부단함, 감정 표현 어려움, 사회적 상호작용 불편, 현실 안주',
        careerPaths: '프로그래머, 철학자, 수학자, 과학자, 시스템 분석가',
        relationships: '소수의 깊은 관계 선호, 지적 토론을 즐김',
        cognitiveFunction: '주기능: Ti (내향 사고), 부기능: Ne (외향 직관)',
        famousPeople: '알베르트 아인슈타인, 빌 게이츠, 찰스 다윈'
    },
    'ENTJ': {
        type: 'ENTJ',
        nickname: '통솔자',
        description: '통솔자형 - 대담하고 상상력이 풍부하며 강한 의지를 지닌 타고난 리더',
        strengths: '강한 리더십, 자신감, 전략적 사고, 효율성 추구, 결단력',
        weaknesses: '지배적, 감정 표현 부족, 독단적, 인내심 부족',
        careerPaths: 'CEO, 관리자, 변호사, 컨설턴트, 기업가',
        relationships: '목표 지향적 파트너 선호, 파트너의 성장을 지원',
        cognitiveFunction: '주기능: Te (외향 사고), 부기능: Ni (내향 직관)',
        famousPeople: '스티브 잡스, 마거릿 대처, 나폴레옹'
    },
    'ENTP': {
        type: 'ENTP',
        nickname: '변론가',
        description: '변론가형 - 스마트하고 호기심이 넘치며 반론을 즐기는 사상가',
        strengths: '빠른 사고, 혁신적, 자신감, 에너지 넘침, 전략적',
        weaknesses: '논쟁적, 집중력 부족, 실행력 약함, 비민감함',
        careerPaths: '기업가, 발명가, 변호사, 마케터, 컨설턴트',
        relationships: '지적 자극을 주는 파트너 선호, 논쟁을 즐기지만 애정도 깊음',
        cognitiveFunction: '주기능: Ne (외향 직관), 부기능: Ti (내향 사고)',
        famousPeople: '토마스 에디슨, 마크 트웨인, 소크라테스'
    },

    // ── Diplomats (NF) ──────────────────────────────────────────────────────────
    'INFJ': {
        type: 'INFJ',
        nickname: '옹호자',
        description: '옹호자형 - 조용하고 신비로우며 사람들에게 지칠 줄 모르는 영감을 주는 유형',
        strengths: '통찰력, 원칙적, 열정적, 이타적, 창의적',
        weaknesses: '완벽주의, 소진되기 쉬움, 지나친 비밀주의, 갈등 회피',
        careerPaths: '상담가, 작가, 심리학자, 종교 지도자, 사회 활동가',
        relationships: '깊고 의미 있는 관계 추구, 파트너와 성장하기를 원함',
        cognitiveFunction: '주기능: Ni (내향 직관), 부기능: Fe (외향 감정)',
        famousPeople: '넬슨 만델라, 마틴 루터 킹, 마더 테레사'
    },
    'INFP': {
        type: 'INFP',
        nickname: '중재자',
        description: '중재자형 - 항상 선한 일에 봉사할 준비가 된 시적이고 친절한 이상주의자',
        strengths: '공감능력, 개방적, 창의적, 열정적, 이상적',
        weaknesses: '지나친 이상주의, 자기비판, 비실용적, 우유부단',
        careerPaths: '작가, 예술가, 음악가, 상담가, 사회복지사',
        relationships: '감정적으로 깊은 연결을 원함, 파트너의 꿈을 지지',
        cognitiveFunction: '주기능: Fi (내향 감정), 부기능: Ne (외향 직관)',
        famousPeople: 'J.R.R. 톨킨, 윌리엄 셰익스피어, 오드리 헵번'
    },
    'ENFJ': {
        type: 'ENFJ',
        nickname: '선도자',
        description: '선도자형 - 카리스마 있고 영감을 주는 사람으로서 주변 사람들을 이끌어가는 유형',
        strengths: '타고난 리더십, 공감능력, 신뢰성, 관대함, 사교적',
        weaknesses: '지나친 이상주의, 우유부단함, 지나치게 감정적, 자기희생',
        careerPaths: '교사, 상담가, 정치인, 코치, 홍보 전문가',
        relationships: '파트너의 성장을 최우선으로 생각, 헌신적인 관계',
        cognitiveFunction: '주기능: Fe (외향 감정), 부기능: Ni (내향 직관)',
        famousPeople: '오프라 윈프리, 버락 오바마, 마틴 루터 킹'
    },
    'ENFP': {
        type: 'ENFP',
        nickname: '활동가',
        description: '재기발랄한 활동가 - 열정적이고 창의적인 자유로운 영혼',
        strengths: '열정적, 창의적, 사교적, 공감능력, 호기심',
        weaknesses: '집중력 부족, 감정 기복, 과도한 낙관주의, 우유부단',
        careerPaths: '예술가, 상담가, 마케터, 저널리스트, 배우',
        relationships: '사람들과의 교류를 즐기며 깊은 감정적 연결 추구',
        cognitiveFunction: '주기능: Ne (외향 직관), 부기능: Fi (내향 감정)',
        famousPeople: '로빈 윌리엄스, 엘렌 드제네러스, 큐리 부인'
    },

    // ── Sentinels (SJ) ──────────────────────────────────────────────────────────
    'ISTJ': {
        type: 'ISTJ',
        nickname: '현실주의자',
        description: '현실주의자형 - 실용적이고 사실적이며 신뢰할 수 있는 논리주의자',
        strengths: '책임감, 체계적, 신뢰성, 인내심, 성실함',
        weaknesses: '융통성 부족, 고집, 변화 저항, 지나친 규칙 준수',
        careerPaths: '회계사, 관리자, 분석가, 법률가, 군인/경찰',
        relationships: '전통과 질서를 중시, 헌신적이고 충실한 파트너',
        cognitiveFunction: '주기능: Si (내향 감각), 부기능: Te (외향 사고)',
        famousPeople: '앤젤라 메르켈, 조지 워싱턴, 워렌 버핏'
    },
    'ISFJ': {
        type: 'ISFJ',
        nickname: '수호자',
        description: '수호자형 - 헌신적이고 따뜻하며 언제나 사랑하는 이들을 보호할 준비가 된 유형',
        strengths: '지지적, 신뢰성, 인내심, 세심함, 관찰력',
        weaknesses: '지나친 겸손, 변화에 저항, 자기희생, 인정받기를 원함',
        careerPaths: '간호사, 교사, 사회복지사, 행정직, 상담가',
        relationships: '가족과 친구를 소중히 여기며 헌신적인 파트너',
        cognitiveFunction: '주기능: Si (내향 감각), 부기능: Fe (외향 감정)',
        famousPeople: '비욘세, 로저 페더러, 케이트 미들턴'
    },
    'ESTJ': {
        type: 'ESTJ',
        nickname: '경영자',
        description: '경영자형 - 뛰어난 관리자로서 사람들이나 사물들을 관리하는 능력이 탁월한 유형',
        strengths: '체계적, 헌신적, 강한 의지, 직접적, 정직함',
        weaknesses: '완고함, 감정 표현 어려움, 규칙 집착, 판단적',
        careerPaths: '관리자, 교장, 군 장교, 판사, 경찰관',
        relationships: '가족과 사회적 의무를 중시, 안정적인 관계 추구',
        cognitiveFunction: '주기능: Te (외향 사고), 부기능: Si (내향 감각)',
        famousPeople: '도널드 트럼프, 프랭크 시나트라, 힐러리 클린턴'
    },
    'ESFJ': {
        type: 'ESFJ',
        nickname: '집정관',
        description: '집정관형 - 사교성이 높고 인기가 많으며 사람들을 돕는 것을 즐기는 유형',
        strengths: '따뜻함, 사교적, 충성스러움, 실용적, 배려심',
        weaknesses: '인정받기를 원함, 갈등 회피, 남의 시선 의식, 완고함',
        careerPaths: '교사, 간호사, 사회복지사, 이벤트 기획자, 영업직',
        relationships: '사랑하는 사람들을 헌신적으로 돌봄, 조화로운 관계 추구',
        cognitiveFunction: '주기능: Fe (외향 감정), 부기능: Si (내향 감각)',
        famousPeople: '테일러 스위프트, 엘튼 존, 제니퍼 가너'
    },

    // ── Explorers (SP) ──────────────────────────────────────────────────────────
    'ISTP': {
        type: 'ISTP',
        nickname: '장인',
        description: '장인형 - 대담하고 실용적인 탐험가로서 다양한 도구를 능숙하게 다루는 유형',
        strengths: '유연성, 논리적, 관찰력, 실용적, 위기 대처 능력',
        weaknesses: '감정 표현 부족, 고집스러움, 장기 계획 약함, 외로움',
        careerPaths: '엔지니어, 외과의사, 파일럿, 경찰관, 운동선수',
        relationships: '독립적이며 파트너의 공간도 존중, 솔직한 관계 선호',
        cognitiveFunction: '주기능: Ti (내향 사고), 부기능: Se (외향 감각)',
        famousPeople: '클린트 이스트우드, 미하엘 슈마허, 브루스 리'
    },
    'ISFP': {
        type: 'ISFP',
        nickname: '모험가',
        description: '모험가형 - 유연하고 매력적인 예술가로서 항상 새로운 것을 탐색하고 경험하려는 유형',
        strengths: '매력적, 상상력, 열정적, 호기심, 예술적 감각',
        weaknesses: '지나친 경쟁 회피, 예측하기 어려움, 자존감 낮음, 장기 계획 약함',
        careerPaths: '예술가, 디자이너, 음악가, 쉐프, 수의사',
        relationships: '헌신적이고 따뜻하며 파트너를 있는 그대로 받아들임',
        cognitiveFunction: '주기능: Fi (내향 감정), 부기능: Se (외향 감각)',
        famousPeople: '마이클 잭슨, 브리트니 스피어스, 케빈 코스트너'
    },
    'ESTP': {
        type: 'ESTP',
        nickname: '사업가',
        description: '사업가형 - 스마트하고 에너지 넘치며 매우 예리한 통찰력을 지닌 유형',
        strengths: '대담함, 직접적, 사회적 능력, 관찰력, 실용적',
        weaknesses: '충동적, 위험 감수, 비민감함, 인내심 부족',
        careerPaths: '기업가, 마케터, 배우, 경찰관, 금융 트레이더',
        relationships: '즉흥적이고 재미있는 관계 추구, 파트너를 즐겁게 함',
        cognitiveFunction: '주기능: Se (외향 감각), 부기능: Ti (내향 사고)',
        famousPeople: '도널드 트럼프, 어니스트 헤밍웨이, 마돈나'
    },
    'ESFP': {
        type: 'ESFP',
        nickname: '연예인',
        description: '연예인형 - 자발적이고 활기차며 열정적인 엔터테이너',
        strengths: '사교적, 즉흥적, 낙관적, 관찰력, 심미적 감각',
        weaknesses: '계획성 부족, 쉽게 지루함, 집중력 부족, 지나친 감각 추구',
        careerPaths: '연예인, 서비스업, 이벤트 기획, 영업, 코치',
        relationships: '현재를 즐기며 파트너와 함께 재미있는 경험 추구',
        cognitiveFunction: '주기능: Se (외향 감각), 부기능: Fi (내향 감정)',
        famousPeople: '엘튼 존, 아델, 윌 스미스'
    }
};
