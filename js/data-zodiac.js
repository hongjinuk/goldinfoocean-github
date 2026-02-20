// Zodiac Data
const zodiacData = {
    'ARIES':       { sign: '양자리',      dateRange: '3월 21일 - 4월 19일',   personality: '열정적이고 에너지 넘치는 성격',       strengths: '용기, 열정, 자신감, 활동적',           weaknesses: '충동적, 조급함, 자기중심적',            compatibility: '사자자리, 궁수자리와 잘 맞음' },
    'TAURUS':      { sign: '황소자리',    dateRange: '4월 20일 - 5월 20일',   personality: '안정적이고 실용적인 성격',             strengths: '인내심, 신뢰성, 실용성, 헌신적',       weaknesses: '완고함, 소유욕, 게으름',               compatibility: '처녀자리, 염소자리와 잘 맞음' },
    'GEMINI':      { sign: '쌍둥이자리',  dateRange: '5월 21일 - 6월 20일',   personality: '다재다능하고 호기심 많은 성격',         strengths: '적응력, 소통능력, 재치, 호기심',       weaknesses: '변덕스러움, 집중력 부족, 피상적',       compatibility: '천칭자리, 물병자리와 잘 맞음' },
    'CANCER':      { sign: '게자리',      dateRange: '6월 21일 - 7월 22일',   personality: '감성적이고 보호본능이 강한 성격',       strengths: '공감능력, 충성심, 직관력, 보호본능',   weaknesses: '지나친 감정적, 의존적, 방어적',         compatibility: '전갈자리, 물고기자리와 잘 맞음' },
    'LEO':         { sign: '사자자리',    dateRange: '7월 23일 - 8월 22일',   personality: '당당하고 카리스마 있는 성격',           strengths: '자신감, 관대함, 창의력, 리더십',       weaknesses: '자만심, 고집, 지배욕',                 compatibility: '양자리, 궁수자리와 잘 맞음' },
    'VIRGO':       { sign: '처녀자리',    dateRange: '8월 23일 - 9월 22일',   personality: '꼼꼼하고 분석적인 성격',               strengths: '분석력, 꼼꼼함, 근면함, 실용성',       weaknesses: '비판적, 완벽주의, 걱정 많음',          compatibility: '황소자리, 염소자리와 잘 맞음' },
    'LIBRA':       { sign: '천칭자리',    dateRange: '9월 23일 - 10월 22일',  personality: '균형잡히고 공정한 성격',               strengths: '공정함, 외교력, 조화, 사교성',         weaknesses: '우유부단함, 의존적, 회피적',            compatibility: '쌍둥이자리, 물병자리와 잘 맞음' },
    'SCORPIO':     { sign: '전갈자리',    dateRange: '10월 23일 - 11월 21일', personality: '열정적이고 신비로운 성격',             strengths: '열정, 직관력, 집중력, 충성심',         weaknesses: '질투심, 의심 많음, 복수심',            compatibility: '게자리, 물고기자리와 잘 맞음' },
    'SAGITTARIUS': { sign: '궁수자리',    dateRange: '11월 22일 - 12월 21일', personality: '낙천적이고 모험적인 성격',             strengths: '낙관적, 모험심, 솔직함, 철학적',       weaknesses: '무책임함, 경솔함, 전술 부족',          compatibility: '양자리, 사자자리와 잘 맞음' },
    'CAPRICORN':   { sign: '염소자리',    dateRange: '12월 22일 - 1월 19일',  personality: '야심차고 책임감 있는 성격',             strengths: '야망, 책임감, 인내심, 실용성',         weaknesses: '비관적, 완고함, 냉정함',               compatibility: '황소자리, 처녀자리와 잘 맞음' },
    'AQUARIUS':    { sign: '물병자리',    dateRange: '1월 20일 - 2월 18일',   personality: '독창적이고 진보적인 성격',             strengths: '독창성, 진보성, 인도주의, 독립성',     weaknesses: '냉정함, 고집, 예측 불가능',            compatibility: '쌍둥이자리, 천칭자리와 잘 맞음' },
    'PISCES':      { sign: '물고기자리',  dateRange: '2월 19일 - 3월 20일',   personality: '감성적이고 예술적인 성격',             strengths: '공감능력, 예술성, 직관력, 동정심',     weaknesses: '현실도피적, 우유부단함, 의존적',        compatibility: '게자리, 전갈자리와 잘 맞음' }
};
