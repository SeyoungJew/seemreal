const lessonData = {
    session1: {
        title: "'Seem'의 첫인상",
        subtitle: "기본 의미 및 'seem + 형용사' 구문 학습",
        time: [5, 15, 20, 5],
        labels: ['도입', '개념 학습', '활동 1', '정리'],
        activities: [
            {
                icon: '👋',
                title: '도입: 흥미 유발 (5분)',
                content: `다양한 인물 사진을 보여주며 "이 사람 어때 보여?" 질문 (예: He looks happy.)을 통해 'look'과 'seem'의 차이를 자연스럽게 느끼게 합니다.`
            },
            {
                icon: '🧠',
                title: '개념 학습: Seem + 형용사 (15분)',
                content: `<strong>파인만 기법 1단계 (학습):</strong><br>'seem'의 기본 의미(~처럼 보이다)와 'seem + 형용사' 구조를 간결하게 설명합니다.<br><strong>예시:</strong> He seems tired. It seems difficult.`
            },
            {
                icon: '🎲',
                title: "활동 1: 문장 만들기 놀이 (20분)",
                content: `<strong>파인만 기법 2단계 (설명):</strong><br>모둠별로 배운 내용을 서로 설명하게 합니다. 이후, 교사가 제시하는 그림 카드를 보고 'This book seems interesting.'처럼 'seem + 형용사' 문장을 만들어 발표합니다.`
            },
            {
                icon: '📝',
                title: '정리 및 예고 (5분)',
                content: `오늘 배운 핵심 내용을 강조하고 다음 차시에 배울 'seem to be' 구문을 간략하게 예고합니다.`
            }
        ]
    },
    session2: {
        title: "'Seem to be'는 뭘까?",
        subtitle: "'seem to be + 형용사' 구문 활용",
        time: [5, 15, 20, 5],
        labels: ['도입', '개념 학습', '활동 2', '정리'],
        activities: [
            {
                icon: '🤔',
                title: '도입: 전 차시 복습 (5분)',
                content: `지난 시간 'seem + 형용사'로 만든 문장을 복습하고, "He seems tired."와 "He seems to be tired."의 차이가 무엇일까 질문하며 자연스럽게 유도.`
            },
            {
                icon: '🧠',
                title: "개념 학습: Seem to be + 형용사 (15분)",
                content: `<strong>파인만 기법 1단계 (학습):</strong><br>'seem to be + 형용사' 구문의 형태와 의미를 설명합니다. 'to be'는 생략 가능하며, 뉘앙스 차이는 크지 않음을 강조합니다.<br><strong>예시:</strong> She seems to be angry. It seems to be true.`
            },
            {
                icon: '🎭',
                title: "활동 2: 미스터리 해결! 'Seem to be' 역할극 (20분)",
                content: `<strong>파인만 기법 2단계 (설명):</strong><br>모둠별로 배운 내용을 서로 설명하게 합니다. 이후, 다양한 상황 카드를 보고 'seem to be'를 사용한 짧은 역할극을 만들어 발표합니다.`
            },
            {
                icon: '📝',
                title: '정리 및 예고 (5분)',
                content: `'seem to be' 구문의 활용을 강조하고 다음 차시에 배울 'It seems that~' 구문을 간략하게 예고합니다.`
            }
        ]
    },
    session3: {
        title: "'It seems that~'의 마법",
        subtitle: "'It seems that~' 구문 활용 및 총정리",
        time: [5, 15, 20, 5],
        labels: ['도입', '개념 학습', '활동 3', '정리'],
        activities: [
            {
                icon: '✨',
                title: '도입: 문장 전환 (5분)',
                content: `'He seems happy.'를 'It'으로 시작하는 문장으로 바꿀 수 있을지 질문하며 'It seems that~' 구문을 자연스럽게 이끌어냅니다.`
            },
            {
                icon: '🧠',
                title: "개념 학습: It seems that~ (15분)",
                content: `<strong>파인만 기법 1단계 (학습):</strong><br>'It seems that + 주어 + 동사'의 구조와 의미를 설명하고, 'He seems to be rich.' ↔ 'It seems that he is rich.' 와 같이 문장 전환을 연습합니다.`
            },
            {
                icon: '✍️',
                title: "활동 3: 'Seem'으로 이야기 만들기 (20분)",
                content: `<strong>파인만 기법 2단계 (설명):</strong><br>모둠별로 배운 내용을 설명한 후, 주어진 주제에 대해 'seem'의 세 가지 형태를 모두 사용해 짧은 이야기를 만들고 발표합니다. 이후 퀴즈 게임으로 복습합니다.`
            },
            {
                icon: '✅',
                title: '총정리 및 피드백 (5분)',
                content: `3차시에 걸쳐 배운 'seem'의 모든 활용법을 총정리하고, 학생들의 소감을 나누며 수업에 대한 자신감을 심어줍니다.`
            }
        ]
    }
};

function createAccordion(sessionKey) {
    const accordionContainer = document.getElementById(`accordion${sessionKey.slice(-1)}`);
    const data = lessonData[sessionKey].activities;
    accordionContainer.innerHTML = '';
    data.forEach((item, index) => {
        const div = document.createElement('div');
        div.classList.add('bg-white', 'rounded-xl', 'shadow-sm', 'border', 'border-slate-200');
        div.innerHTML = `
            <div class="accordion-header flex items-center justify-between p-4" onclick="toggleAccordion(this)">
                <h3 class="font-semibold text-lg text-slate-700 flex items-center"><span class="text-2xl mr-3">${item.icon}</span> ${item.title}</h3>
                <span class="transform transition-transform duration-300 text-teal-600 font-bold text-2xl ">+</span>
            </div>
            <div class="accordion-content text-slate-600">
                <p>${item.content}</p>
            </div>
        `;
        accordionContainer.appendChild(div);
    });
}

function toggleAccordion(element) {
    const content = element.nextElementSibling;
    const icon = element.querySelector('span:last-child');
    const allContents = document.querySelectorAll('.accordion-content');

    allContents.forEach(c => {
        if (c !== content && c.classList.contains('open')) {
            c.classList.remove('open');
            c.previousElementSibling.querySelector('span:last-child').classList.remove('rotate-45');
            c.previousElementSibling.querySelector('span:last-child').innerHTML = '+';
        }
    });

    content.classList.toggle('open');
    if (content.classList.contains('open')) {
        icon.classList.add('rotate-45');
        icon.innerHTML = '−';
    } else {
        icon.classList.remove('rotate-45');
        icon.innerHTML = '+';
    }
}

function createChart(sessionKey) {
    const ctx = document.getElementById(`chart${sessionKey.slice(-1)}`).getContext('2d');
    const data = lessonData[sessionKey];
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: data.labels,
            datasets: [{
                label: '분',
                data: data.time,
                backgroundColor: [
                    '#99f6e4',
                    '#5eead4',
                    '#2dd4bf',
                    '#14b8a6',
                ],
                borderColor: '#f8fafc',
                borderWidth: 4,
                hoverOffset: 8
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        font: {
                            size: 14,
                            family: 'Pretendard'
                        },
                        padding: 20
                    }
                },
                tooltip: {
                    callbacks: {
                        title: function(tooltipItems) {
                            const item = tooltipItems[0];
                            let label = item.chart.data.labels[item.dataIndex];
                            if (Array.isArray(label)) {
                              return label.join(' ');
                            }
                            return label;
                        },
                        label: function(context) {
                            let label = context.label || '';
                            if (label) {
                                label += ': ';
                            }
                            if (context.parsed !== null) {
                                label += context.parsed + '분';
                            }
                            return label;
                        }
                    }
                }
            },
            cutout: '50%'
        }
    });
}

function showContent(sessionId) {
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sessionId).classList.add('active');

    document.querySelectorAll('.nav-button').forEach(button => {
        button.classList.remove('active');
        if(button.getAttribute('onclick').includes(sessionId)) {
            button.classList.add('active');
        }
    });
}

window.onload = () => {
    createAccordion('session1');
    createChart('session1');
    createAccordion('session2');
    createChart('session2');
    createAccordion('session3');
    createChart('session3');
};