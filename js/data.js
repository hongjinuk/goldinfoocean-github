// Data for the personality analyzer
const data = {
    bloodType: {
        'A': {
            type: 'A',
            personality: '꼼꼼하고 책임감 있는 성격',
            strengths: '완벽주의, 신뢰성, 인내심, 배려심',
            weaknesses: '지나치게 신중함, 고집, 긴장감',
            compatibility: 'A형, AB형과 잘 맞음',
            description: 'A형은 세심하고 책임감이 강한 성격으로 알려져 있습니다. 완벽주의적 성향이 있으며, 타인에 대한 배려심이 깊습니다.'
        },
        'B': {
            type: 'B',
            personality: '창의적이고 자유로운 성격',
            strengths: '열정적, 활동적, 강인함, 창의적',
            weaknesses: '무책임함, 이기적, 용서하지 못함',
            compatibility: 'B형, AB형과 잘 맞음',
            description: 'B형은 창의적이고 자유로운 영혼의 소유자입니다. 열정적이며 독창적인 사고를 가지고 있습니다.'
        },
        'AB': {
            type: 'AB',
            personality: '합리적이고 적응력 있는 성격',
            strengths: '냉정함, 통제력, 합리적, 사교적',
            weaknesses: '비판적, 우유부단함, 건망증, 무책임함',
            compatibility: '모든 혈액형과 잘 맞음',
            description: 'AB형은 합리적이고 적응력이 뛰어난 성격입니다. 이중적인 면모를 가지고 있어 신비로운 매력이 있습니다.'
        },
        'O': {
            type: 'O',
            personality: '자신감 있고 결단력 있는 성격',
            strengths: '자신감, 자기결정력, 강한 의지, 직관적',
            weaknesses: '냉정함, 예측 불가능, 일중독, 오만함',
            compatibility: 'O형, AB형과 잘 맞음',
            description: 'O형은 자신감 넘치고 결단력 있는 성격입니다. 리더십이 강하며 목표 지향적입니다.'
        }
    },
    mbti: {
        'INTJ': {
            type: 'INTJ',
            description: '전략가형 - 독창적이고 전략적인 사고를 가진 완벽주의자',
            strengths: '독립적, 전략적 사고, 높은 기준',
            weaknesses: '지나치게 비판적, 감정 표현 부족',
            careerPaths: '과학자, 엔지니어, 전략 기획자',
            relationships: '독립적이고 자기 확신이 강함'
        },
        'ENFP': {
            type: 'ENFP',
            description: '재기발랄한 활동가 - 열정적이고 창의적인 자유로운 영혼',
            strengths: '열정적, 창의적, 사교적',
            weaknesses: '집중력 부족, 감정 기복',
            careerPaths: '예술가, 상담가, 마케터',
            relationships: '사람들과의 교류를 즐김'
        },
        'ISTJ': {
            type: 'ISTJ',
            description: '현실주의자 - 실용적이고 사실적인 논리주의자',
            strengths: '책임감, 체계적, 신뢰성',
            weaknesses: '융통성 부족, 고집',
            careerPaths: '회계사, 관리자, 분석가',
            relationships: '전통과 질서를 중시'
        },
        'ESFP': {
            type: 'ESFP',
            description: '연예인형 - 자발적이고 활기찬 엔터테이너',
            strengths: '사교적, 즉흥적, 낙관적',
            weaknesses: '계획성 부족, 쉽게 지루함',
            careerPaths: '연예인, 서비스업, 이벤트 기획',
            relationships: '현재를 즐기며 사람들을 즐겁게 함'
        }
    },
    hormone: {
        'ESTROGEN': {
            type: 'ESTROGEN',
            description: '에스트로겐 우세형 - 섬세하고 감성적인 성향',
            characteristics: '공감능력 높음, 협력적, 소통 능력 우수',
            strengths: '섬세함, 감정 표현 풍부, 관계 중심적',
            challenges: '감정 기복, 우유부단함',
            balanceTips: '규칙적인 운동, 스트레스 관리, 균형잡힌 식단'
        },
        'TESTOSTERONE': {
            type: 'TESTOSTERONE',
            description: '테스토스테론 우세형 - 활동적이고 도전적인 성향',
            characteristics: '목표 지향적, 경쟁력, 결단력',
            strengths: '도전적, 독립적, 리더십',
            challenges: '공격성, 감정 표현 어려움',
            balanceTips: '명상, 감정 인지 훈련, 협력 활동'
        },
        'BALANCED': {
            type: 'BALANCED',
            description: '균형형 - 호르몬 밸런스가 잘 맞는 안정적 성향',
            characteristics: '안정적, 적응력 좋음, 균형잡힌 사고',
            strengths: '융통성, 다재다능함, 중재 능력',
            challenges: '우유부단함, 자기 주장 부족',
            balanceTips: '자기 정체성 확립, 결단력 훈련'
        }
    },
    faceShape: {
        'ROUND': {
            shape: 'ROUND',
            description: '둥근형 얼굴',
            personality: '온화하고 친근한 성격, 사교적',
            strengths: '친화력, 낙천적, 포용력',
            characteristics: '부드러운 인상, 젊어 보임',
            advice: '적극성을 키우고 결단력 있는 모습 보이기'
        },
        'SQUARE': {
            shape: 'SQUARE',
            description: '사각형 얼굴',
            personality: '강인하고 의지가 강한 성격, 리더십',
            strengths: '결단력, 추진력, 책임감',
            characteristics: '카리스마 있는 인상, 신뢰감',
            advice: '부드러운 면모 보여주기, 경청하는 자세'
        },
        'OVAL': {
            shape: 'OVAL',
            description: '계란형 얼굴',
            personality: '균형잡힌 성격, 세련됨',
            strengths: '적응력, 센스, 균형감각',
            characteristics: '이상적인 비율, 조화로움',
            advice: '자신감 갖기, 개성 표현하기'
        },
        'HEART': {
            shape: 'HEART',
            description: '하트형 얼굴',
            personality: '열정적이고 창의적인 성격',
            strengths: '창의력, 감수성, 표현력',
            characteristics: '귀여운 인상, 매력적',
            advice: '끈기 키우기, 계획성 갖기'
        }
    },
    palmReading: {
        'HEART_LINE': {
            lineType: 'HEART_LINE',
            description: '감정선 - 새끼손가락 아래에서 시작하는 선',
            meaning: '감정, 애정, 인간관계',
            interpretation: '길고 깊으면 감정이 풍부하고 애정이 깊음',
            characteristics: '감성적, 로맨틱, 관계 중시',
            advice: '감정 표현을 솔직하게, 관계에 진심을 다하기'
        },
        'HEAD_LINE': {
            lineType: 'HEAD_LINE',
            description: '두뇌선 - 엄지와 검지 사이에서 시작하는 선',
            meaning: '지성, 사고방식, 학습능력',
            interpretation: '길고 깊으면 분석력이 뛰어나고 논리적',
            characteristics: '논리적, 분석적, 학구적',
            advice: '창의성도 키우기, 감성과 이성의 균형'
        },
        'LIFE_LINE': {
            lineType: 'LIFE_LINE',
            description: '생명선 - 엄지손가락 주변을 감싸는 선',
            meaning: '생명력, 건강, 활력',
            interpretation: '길고 깊으면 체력이 좋고 활동적',
            characteristics: '활동적, 건강한, 에너지 넘침',
            advice: '규칙적인 운동, 건강 관리 지속하기'
        },
        'FATE_LINE': {
            lineType: 'FATE_LINE',
            description: '운명선 - 손목에서 중지 방향으로 올라가는 선',
            meaning: '인생 방향, 직업, 성공',
            interpretation: '뚜렷하면 목표가 명확하고 성공 가능성 높음',
            characteristics: '목표 지향적, 커리어 중심적',
            advice: '유연성 갖기, 다양한 가능성 열어두기'
        }
    },
    numerology: {
        '1': {
            number: 1,
            meaning: '리더, 개척자',
            personality: '독립적이고 야심찬 성격',
            strengths: '리더십, 독립성, 창의력, 결단력',
            weaknesses: '독단적, 자기중심적, 참을성 부족',
            careerPaths: '기업가, CEO, 관리자, 발명가',
            description: '숫자 1은 시작과 독립을 상징합니다. 리더십과 개척 정신이 강하며 새로운 일을 시작하는 능력이 뛰어납니다.'
        },
        '2': {
            number: 2,
            meaning: '협력자, 외교관',
            personality: '조화롭고 협력적인 성격',
            strengths: '협력성, 외교력, 섬세함, 인내심',
            weaknesses: '우유부단함, 지나친 민감함, 의존적',
            careerPaths: '상담가, 중재자, 팀 코디네이터, 외교관',
            description: '숫자 2는 조화와 협력을 상징합니다. 타인과의 관계에서 균형을 잡는 능력이 뛰어나며 외교적입니다.'
        },
        '3': {
            number: 3,
            meaning: '표현자, 창조자',
            personality: '창의적이고 표현력이 풍부한 성격',
            strengths: '창의력, 표현력, 낙천성, 사교성',
            weaknesses: '집중력 부족, 피상적, 분산됨',
            careerPaths: '예술가, 작가, 배우, 광고 전문가',
            description: '숫자 3은 창의성과 표현을 상징합니다. 자기표현 능력이 뛰어나며 예술적 감각이 풍부합니다.'
        },
        '4': {
            number: 4,
            meaning: '건설자, 조직자',
            personality: '안정적이고 체계적인 성격',
            strengths: '체계성, 신뢰성, 인내심, 실용성',
            weaknesses: '완고함, 융통성 부족, 지나친 신중함',
            careerPaths: '건축가, 회계사, 엔지니어, 관리자',
            description: '숫자 4는 안정과 질서를 상징합니다. 실용적이고 체계적으로 일을 처리하는 능력이 뛰어납니다.'
        },
        '5': {
            number: 5,
            meaning: '자유인, 모험가',
            personality: '자유롭고 모험을 즐기는 성격',
            strengths: '적응력, 다재다능함, 호기심, 활동성',
            weaknesses: '불안정함, 충동적, 무책임함',
            careerPaths: '여행 가이드, 마케터, 기자, 세일즈',
            description: '숫자 5는 자유와 변화를 상징합니다. 새로운 경험을 즐기며 적응력이 뛰어납니다.'
        },
        '6': {
            number: 6,
            meaning: '양육자, 교사',
            personality: '책임감 있고 돌보는 성격',
            strengths: '책임감, 공감능력, 조화, 봉사정신',
            weaknesses: '지나친 간섭, 완벽주의, 희생적',
            careerPaths: '교사, 상담가, 간호사, 사회복지사',
            description: '숫자 6은 사랑과 책임을 상징합니다. 타인을 돌보고 조화를 만드는 능력이 뛰어납니다.'
        },
        '7': {
            number: 7,
            meaning: '탐구자, 분석가',
            personality: '지적이고 분석적인 성격',
            strengths: '분석력, 직관력, 깊이, 영성',
            weaknesses: '고독함, 비관적, 비밀스러움',
            careerPaths: '연구원, 학자, 분석가, 철학자',
            description: '숫자 7은 지혜와 영성을 상징합니다. 깊이 있는 사고와 직관력이 뛰어납니다.'
        },
        '8': {
            number: 8,
            meaning: '권력자, 성취자',
            personality: '야심차고 목표 지향적인 성격',
            strengths: '야망, 성공 지향, 권위, 판단력',
            weaknesses: '물질주의, 지배욕, 과로',
            careerPaths: '임원, 금융가, 사업가, 정치인',
            description: '숫자 8은 권력과 물질적 성공을 상징합니다. 목표를 달성하는 능력이 뛰어나며 야망이 큽니다.'
        },
        '9': {
            number: 9,
            meaning: '인도주의자, 완성자',
            personality: '이타적이고 완성을 추구하는 성격',
            strengths: '이타심, 관대함, 완성력, 지혜',
            weaknesses: '이상주의적, 비현실적, 감정적',
            careerPaths: '자선가, 예술가, 교육자, 치유사',
            description: '숫자 9는 완성과 인도주의를 상징합니다. 이타적이며 세상을 더 나은 곳으로 만들고자 합니다.'
        }
    },
    zodiac: {
        'ARIES': { sign: '양자리', dateRange: '3월 21일 - 4월 19일', personality: '열정적이고 에너지 넘치는 성격', strengths: '용기, 열정, 자신감, 활동적', weaknesses: '충동적, 조급함, 자기중심적', compatibility: '사자자리, 궁수자리와 잘 맞음' },
        'TAURUS': { sign: '황소자리', dateRange: '4월 20일 - 5월 20일', personality: '안정적이고 실용적인 성격', strengths: '인내심, 신뢰성, 실용성, 헌신적', weaknesses: '완고함, 소유욕, 게으름', compatibility: '처녀자리, 염소자리와 잘 맞음' },
        'GEMINI': { sign: '쌍둥이자리', dateRange: '5월 21일 - 6월 20일', personality: '다재다능하고 호기심 많은 성격', strengths: '적응력, 소통능력, 재치, 호기심', weaknesses: '변덕스러움, 집중력 부족, 피상적', compatibility: '천칭자리, 물병자리와 잘 맞음' },
        'CANCER': { sign: '게자리', dateRange: '6월 21일 - 7월 22일', personality: '감성적이고 보호본능이 강한 성격', strengths: '공감능력, 충성심, 직관력, 보호본능', weaknesses: '지나친 감정적, 의존적, 방어적', compatibility: '전갈자리, 물고기자리와 잘 맞음' },
        'LEO': { sign: '사자자리', dateRange: '7월 23일 - 8월 22일', personality: '당당하고 카리스마 있는 성격', strengths: '자신감, 관대함, 창의력, 리더십', weaknesses: '자만심, 고집, 지배욕', compatibility: '양자리, 궁수자리와 잘 맞음' },
        'VIRGO': { sign: '처녀자리', dateRange: '8월 23일 - 9월 22일', personality: '꼼꼼하고 분석적인 성격', strengths: '분석력, 꼼꼼함, 근면함, 실용성', weaknesses: '비판적, 완벽주의, 걱정 많음', compatibility: '황소자리, 염소자리와 잘 맞음' },
        'LIBRA': { sign: '천칭자리', dateRange: '9월 23일 - 10월 22일', personality: '균형잡히고 공정한 성격', strengths: '공정함, 외교력, 조화, 사교성', weaknesses: '우유부단함, 의존적, 회피적', compatibility: '쌍둥이자리, 물병자리와 잘 맞음' },
        'SCORPIO': { sign: '전갈자리', dateRange: '10월 23일 - 11월 21일', personality: '열정적이고 신비로운 성격', strengths: '열정, 직관력, 집중력, 충성심', weaknesses: '질투심, 의심 많음, 복수심', compatibility: '게자리, 물고기자리와 잘 맞음' },
        'SAGITTARIUS': { sign: '궁수자리', dateRange: '11월 22일 - 12월 21일', personality: '낙천적이고 모험적인 성격', strengths: '낙관적, 모험심, 솔직함, 철학적', weaknesses: '무책임함, 경솔함, 전술 부족', compatibility: '양자리, 사자자리와 잘 맞음' },
        'CAPRICORN': { sign: '염소자리', dateRange: '12월 22일 - 1월 19일', personality: '야심차고 책임감 있는 성격', strengths: '야망, 책임감, 인내심, 실용성', weaknesses: '비관적, 완고함, 냉정함', compatibility: '황소자리, 처녀자리와 잘 맞음' },
        'AQUARIUS': { sign: '물병자리', dateRange: '1월 20일 - 2월 18일', personality: '독창적이고 진보적인 성격', strengths: '독창성, 진보성, 인도주의, 독립성', weaknesses: '냉정함, 고집, 예측 불가능', compatibility: '쌍둥이자리, 천칭자리와 잘 맞음' },
        'PISCES': { sign: '물고기자리', dateRange: '2월 19일 - 3월 20일', personality: '감성적이고 예술적인 성격', strengths: '공감능력, 예술성, 직관력, 동정심', weaknesses: '현실도피적, 우유부단함, 의존적', compatibility: '게자리, 전갈자리와 잘 맞음' }
    },
    chineseZodiac: {
        'RAT': { animal: '쥐', years: '2008, 2020, 2032', personality: '영리하고 재치있는 성격', strengths: '지혜, 적응력, 재치, 매력', weaknesses: '야심과다, 의심 많음, 이기적', compatibility: '용, 원숭이와 잘 맞음' },
        'OX': { animal: '소', years: '2009, 2021, 2033', personality: '성실하고 인내심 있는 성격', strengths: '성실함, 인내심, 신뢰성, 근면함', weaknesses: '완고함, 고집, 융통성 부족', compatibility: '뱀, 닭과 잘 맞음' },
        'TIGER': { animal: '호랑이', years: '2010, 2022, 2034', personality: '용감하고 자신감 넘치는 성격', strengths: '용기, 자신감, 열정, 카리스마', weaknesses: '충동적, 반항적, 무모함', compatibility: '말, 개와 잘 맞음' },
        'RABBIT': { animal: '토끼', years: '2011, 2023, 2035', personality: '온화하고 세심한 성격', strengths: '온화함, 세심함, 외교력, 감수성', weaknesses: '우유부단함, 회피적, 지나친 신중함', compatibility: '양, 돼지와 잘 맞음' },
        'DRAGON': { animal: '용', years: '2012, 2024, 2036', personality: '강인하고 야심찬 성격', strengths: '야망, 자신감, 카리스마, 창의력', weaknesses: '오만함, 고집, 지배욕', compatibility: '쥐, 원숭이와 잘 맞음' },
        'SNAKE': { animal: '뱀', years: '2013, 2025, 2037', personality: '지혜롭고 신비로운 성격', strengths: '지혜, 직관력, 매력, 우아함', weaknesses: '질투심, 의심 많음, 비밀스러움', compatibility: '소, 닭과 잘 맞음' },
        'HORSE': { animal: '말', years: '2014, 2026, 2038', personality: '열정적이고 자유로운 성격', strengths: '열정, 활동적, 낙천적, 독립적', weaknesses: '충동적, 조급함, 끈기 부족', compatibility: '호랑이, 양과 잘 맞음' },
        'GOAT': { animal: '양', years: '2015, 2027, 2039', personality: '온순하고 창의적인 성격', strengths: '창의력, 온화함, 공감능력, 예술성', weaknesses: '우유부단함, 의존적, 비관적', compatibility: '토끼, 돼지와 잘 맞음' },
        'MONKEY': { animal: '원숭이', years: '2016, 2028, 2040', personality: '영리하고 재치있는 성격', strengths: '영리함, 재치, 다재다능함, 호기심', weaknesses: '교활함, 산만함, 경솔함', compatibility: '쥐, 용과 잘 맞음' },
        'ROOSTER': { animal: '닭', years: '2017, 2029, 2041', personality: '성실하고 꼼꼼한 성격', strengths: '성실함, 자신감, 정직함, 근면함', weaknesses: '비판적, 자기중심적, 허영심', compatibility: '소, 뱀과 잘 맞음' },
        'DOG': { animal: '개', years: '2018, 2030, 2042', personality: '충성스럽고 정직한 성격', strengths: '충성심, 정직함, 책임감, 용기', weaknesses: '걱정 많음, 완고함, 비관적', compatibility: '호랑이, 말과 잘 맞음' },
        'PIG': { animal: '돼지', years: '2019, 2031, 2043', personality: '관대하고 정직한 성격', strengths: '관대함, 성실함, 행운, 낙천적', weaknesses: '순진함, 물질주의, 게으름', compatibility: '토끼, 양과 잘 맞음' }
    },
    enneagram: {
        '1': { type: 1, name: '개혁가', personality: '원칙적이고 완벽주의적인 성격', strengths: '정직함, 원칙성, 성실함, 책임감', weaknesses: '비판적, 융통성 부족, 지나친 완벽주의', growthDirection: '7번(낙천가) 방향으로 성장' },
        '2': { type: 2, name: '조력가', personality: '배려심 많고 타인 지향적인 성격', strengths: '공감능력, 관대함, 헌신적, 따뜻함', weaknesses: '지나친 간섭, 인정 욕구, 자기 돌봄 부족', growthDirection: '4번(개인주의자) 방향으로 성장' },
        '3': { type: 3, name: '성취자', personality: '야심차고 성공 지향적인 성격', strengths: '효율성, 적응력, 자신감, 목표 지향적', weaknesses: '이미지 집착, 일중독, 감정 억압', growthDirection: '6번(충성가) 방향으로 성장' },
        '4': { type: 4, name: '개인주의자', personality: '감성적이고 창의적인 성격', strengths: '창의력, 감수성, 진정성, 표현력', weaknesses: '감정 기복, 자기 몰두, 멜랑콜리', growthDirection: '1번(개혁가) 방향으로 성장' },
        '5': { type: 5, name: '탐구자', personality: '분석적이고 독립적인 성격', strengths: '지적 능력, 분석력, 통찰력, 독립성', weaknesses: '고립됨, 감정 표현 부족, 지나친 관찰', growthDirection: '8번(도전자) 방향으로 성장' },
        '6': { type: 6, name: '충성가', personality: '신중하고 책임감 있는 성격', strengths: '충성심, 신뢰성, 책임감, 헌신적', weaknesses: '불안함, 의심 많음, 우유부단함', growthDirection: '9번(평화주의자) 방향으로 성장' },
        '7': { type: 7, name: '낙천가', personality: '열정적이고 낙관적인 성격', strengths: '낙관적, 활동적, 다재다능함, 모험심', weaknesses: '산만함, 충동적, 책임 회피', growthDirection: '5번(탐구자) 방향으로 성장' },
        '8': { type: 8, name: '도전자', personality: '강인하고 자기주장이 강한 성격', strengths: '리더십, 결단력, 자신감, 보호본능', weaknesses: '지배욕, 공격적, 감정 표현 어려움', growthDirection: '2번(조력가) 방향으로 성장' },
        '9': { type: 9, name: '평화주의자', personality: '평화롭고 수용적인 성격', strengths: '평화로움, 수용성, 인내심, 조화', weaknesses: '수동적, 우유부단함, 자기 무시', growthDirection: '3번(성취자) 방향으로 성장' }
    },
    constitution: {
        'TAEYANGIN': {
            type: 'TAEYANGIN',
            name: '태양인',
            icon: '☀️',
            personality: '리더십이 강하고 진취적이며 외향적인 성격',
            characteristics: '목덜미가 실하고 허리가 약한 체형. 폐 기능이 강하고 간 기능이 약함',
            strengths: '추진력이 강하고 창의적이며, 정의감이 뚜렷함. 열정적이고 적극적인 성격',
            weaknesses: '고집이 세고 독선적일 수 있음. 급한 성격으로 인한 실수가 있을 수 있음',
            healthTips: '간 기능 보호에 신경 써야 함. 과로를 피하고 스트레스 관리가 중요',
            recommendedFoods: '담백한 음식, 해산물, 조개류, 포도, 앵두, 감 등',
            foodsToAvoid: '기름진 음식, 육류(특히 붉은 고기), 매운 음식, 술',
            description: '태양인은 전체 인구의 약 5% 미만으로 매우 드문 체질입니다. 리더십이 뛰어나고 창의적이며 추진력이 강한 것이 특징입니다.'
        },
        'TAEUMIN': {
            type: 'TAEUMIN',
            name: '태음인',
            icon: '🌙',
            personality: '차분하고 침착하며 인내심이 강한 성격',
            characteristics: '체격이 크고 살이 잘 찌는 체형. 간 기능이 강하고 폐 기능이 약함',
            strengths: '끈기가 있고 신중하며, 참을성이 많음. 안정적이고 믿음직스러운 성격',
            weaknesses: '소심하고 우유부단할 수 있음. 게으르고 움직이기 싫어하는 경향',
            healthTips: '폐 기능 강화가 중요. 규칙적인 운동으로 땀을 내는 것이 좋음',
            recommendedFoods: '육류(소고기, 돼지고기), 콩류, 배, 밤, 호두, 근채류',
            foodsToAvoid: '기름진 생선, 밀가루 음식, 닭고기, 유제품 과다 섭취',
            description: '태음인은 전체 인구의 약 50% 정도로 가장 많은 체질입니다. 침착하고 끈기 있는 성격으로 큰 일을 차근차근 해내는 능력이 있습니다.'
        },
        'SOYANGIN': {
            type: 'SOYANGIN',
            name: '소양인',
            icon: '🔥',
            personality: '활발하고 사교적이며 순발력이 뛰어난 성격',
            characteristics: '상체가 발달하고 하체가 약한 체형. 비장 기능이 강하고 신장 기능이 약함',
            strengths: '재치가 있고 창의적이며, 사교성이 좋음. 빠른 판단력과 행동력',
            weaknesses: '화를 잘 내고 참을성이 부족함. 산만하고 끈기가 부족할 수 있음',
            healthTips: '신장 기능 보호가 중요. 충분한 수면과 휴식이 필요',
            recommendedFoods: '돼지고기, 해산물, 수박, 참외, 딸기, 오이, 가지 등 시원한 성질의 음식',
            foodsToAvoid: '닭고기, 염소고기, 인삼, 꿀, 카페인, 매운 음식',
            description: '소양인은 전체 인구의 약 30% 정도입니다. 활발하고 적극적인 성격으로 순발력이 뛰어나며, 사람들과 어울리기를 좋아합니다.'
        },
        'SOEUMIN': {
            type: 'SOEUMIN',
            name: '소음인',
            icon: '❄️',
            personality: '섬세하고 조심스러우며 내성적인 성격',
            characteristics: '하체가 발달하고 상체가 약한 체형. 신장 기능이 강하고 비장 기능이 약함',
            strengths: '꼼꼼하고 세심하며, 계획적임. 분석적이고 신중한 성격',
            weaknesses: '소극적이고 걱정이 많음. 소화 기능이 약하고 체력이 약한 편',
            healthTips: '소화기 건강 관리가 중요. 따뜻한 음식을 먹고 몸을 따뜻하게 유지',
            recommendedFoods: '닭고기, 염소고기, 따뜻한 성질의 음식, 인삼, 대추, 생강, 마늘',
            foodsToAvoid: '찬 음식, 냉면, 생채소, 맥주, 아이스크림 등 차가운 음식',
            description: '소음인은 전체 인구의 약 15% 정도입니다. 섬세하고 꼼꼼한 성격으로 계획적이고 분석적인 사고를 잘합니다. 소화 기능이 약한 편입니다.'
        }
    }
};
