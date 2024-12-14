const personalityDimensions = {
    EI: {name: "Energy", left: "Extroversion", right: "Introversion"},
    SN: {name: "Information", left: "Sensing", right: "Intuition"},
    FT: {name: "Decisions", left: "Feeling", right: "Thinking"},
    JP: {name: "Lifestyle", left: "Judging", right: "Perceiving"}
}

const questions = [
    {
        scenario: "You suddenly got teleported to another realm and everything went white for a second. You slowly regain your sight as you step into a vast, celestial realm, you are greeted by a Council of Angels, each eager to welcome you. But only one of them will be chosen to be your guardian angel. To decide, the Council wants to understand your true nature, so they have created a series of tests. You stand in front of a large door leading to a grand celebration. The sounds of laughter and music spill through the cracks. All the angels observe from the shadows, each wondering how you will react to this new environment.",
        question: "What do you do next?",
        dimension: "EI",
        choices: [
            {
                text: "You step through the door confidently, eager to meet new people, share stories, and enjoy the energy of the celebration.",
                score: "E"
            },
            {
                text: "You pause, feeling uncertain, and decide to stand back for a moment, watching from afar to see if you feel comfortable enough to enter.",
                score: "I"
            }
        ]
    },
    {
        scenario: "After the celebration, you find yourself standing at a crossroads with two paths ahead. One path is well-lit, clearly marked, and straightforward. The other is dark and winding, filled with uncertainty but a sense of hidden potential.",
        question: "What do you do next?",
        dimension: "SN",
        choices: [
            {
                text: "You choose the familiar path, preferring the comfort of what you know and the certainty it offers.",
                score: "S"
            },
            {
                text: "You choose the mysterious, winding path, feeling drawn to what might lie ahead, trusting in your intuition.",
                score: "N"
            }
        ]
    },
    {
        scenario: "As you continue along your journey, you come across a group of travelers debating a moral dilemma: whether to take a valuable object they’ve found or return it to its rightful owner. You feel compelled to voice your opinion, but you sense that your approach could reveal a lot about you.",
        question: "What do you do next?",
        dimension: "FT",
        choices: [
            {
                text: "You calmly present your logical reasoning, emphasizing fairness and the importance of sticking to principles. ",
                score: "T"
            },
            {
                text: "You focus on the emotional impact of the decision, considering how each choice will affect the people involved. ",
                score: "F"
            }
        ]
    },
    {
        scenario: "As you approach a grand tower, you are given a task: to organize a library of ancient scrolls, each containing important knowledge. The task can be completed in any order, but there is a set deadline.",
        question: "What do you do next?",
        dimension: "JP",
        choices: [
            {
                text: "You immediately create a detailed plan, organizing the scrolls by category and setting a clear timeline to finish.",
                score: "J"
            },
            {
                text: "You decide to start organizing, but you leave room for flexibility, knowing you might have to adjust as new scrolls arrive. ",
                score: "P"
            }
        ]
    },
    {
        scenario: "After the celebration, you find yourself standing at a crossroads with two paths ahead. One path is well-lit, clearly marked, and straightforward. The other is dark and winding, filled with uncertainty but a sense of hidden potential.",
        question: "What do you do next?",
        dimension: "EI",
        choices: [
            {
                text: "You feel ready to lead the group, offering guidance and encouragement as you all move forward together.",
                score: "E"
            },
            {
                text: "You decide to travel alone, feeling more focused and at ease with the solitude of the journey. ",
                score: "I"
            }
        ]
    },
    {
        scenario: "The Council now presents you with a riddl of an ancient puzzle that has stumped many. You must decide how to approach it: logically, based on past patterns, or creatively, looking for abstract connections.",
        question: "What do you do next?",
        dimension: "SN",
        choices: [
            {
                text: "You start by examining the puzzle in a methodical way, looking for clear patterns and using logical steps to solve it.",
                score: "S"
            },
            {
                text: "You feel the answer is hidden in a more abstract way, looking for deeper meanings and hidden connections.",
                score: "N"
            }
        ]
    },
];

const angelTypes = {
    ESTJ: {
        name: "Michael - Archangel of Leadership",
        traits: "Michael is disciplined, decisive, and assertive. He is a protector who values law, structure, and order, providing clarity and guidance for those seeking stability.",
        power: "Michael can create protective shields, enforce order in chaotic situations, and summon righteous authority. His presence strengthens resolve and leadership in others.",
        compatibility: "Gabriel, Raziel",
        archEnemy: "Azazel - Demon of Chaos",
        conflict: "Azazel tempts individuals to rebel against the status quo, making them question authority and fostering a desire for chaos."
    },
    ESFJ: {
        name: "Gabriel - Archangel of Compassion",
        traits: "Gabriel is warm, empathetic, and socially attuned. She excels in understanding the emotional needs of others, encouraging kindness and connection.",
        power: "Gabriel can heal emotional wounds, bring peace to troubled hearts, and amplify empathy. She has the power to connect people through emotional bonds, fostering unity.",
        compatibility: "Michael, Ariel",
        archEnemy: "Lilith - Demon of Isolation",
        conflict: "Lilith pushes people away from their relationships, encouraging them to focus on self-reliance to the detriment of others, creating emotional distance and hurt."
    },
    ESTP: {
        name: "Azrael - Archangel of Action",
        traits: "Bold, energetic, adaptable, and pragmatic. Azrael pushes individuals to act decisively, face challenges head-on, and embrace adventure.",
        power: "Azrael enhances physical strength and quick reflexes, enabling individuals to take swift action. He encourages dynamic thinking and problem-solving.",
        compatibility: "Samael",
        archEnemy: "Leviathan - Demon of Inaction",
        conflict: "Leviathan paralyzes action by fostering doubt, making people reluctant to make decisions or pursue their goals."
    },
    ESFP: {
        name: "Jophiel - Archangel of Joy",
        traits: "Fun-loving, spontaneous, playful, and socially engaging. Zophiel inspires joy and creativity in the world, encouraging people to embrace life’s pleasures.",
        power: "Zophiel can amplify joy, inspire creativity, and lift spirits. She fosters an environment of fun and positivity.",
        compatibility: "Raphael",
        archEnemy: "Beelzebub - Demon of Gluttony",
        conflict: "Beelzebub tempts individuals to chase instant gratification and forget the value of deeper, more meaningful connections."
    },
    ENFJ: {
        name: "Raphael - Archangel of Healing",
        traits: "Raphael is charismatic, idealistic, and nurturing. He guides people toward self-actualization, healing them emotionally and spiritually.",
        power: "Raphael has the ability to heal both physical and emotional wounds, guiding people toward enlightenment and fulfillment. His powers focus on bringing out the best in people, helping them to heal and grow.",
        compatibility: "Sandalphon, Zophiel",
        archEnemy: "Baal - Demon of Deception",
        conflict: "Baal causes individuals to question their self-worth and the authenticity of their relationships, often leading them into toxic, self-destructive patterns."
    },
    ENFP: {
        name: "Metatron - Archangel of Wisdom",
        traits: "Metatron is creative, visionary, and a master of insight. He encourages individuals to follow their dreams and tap into their limitless imagination.",
        power: "Metatron has the ability to foresee potential futures and inspire great creativity. He can guide people to see beyond their current circumstances, helping them visualize paths that lead to their highest potential.",
        compatibility: "Uriel, Jophiel, Raguel",
        archEnemy: "Mammon - Demon of Greed",
        conflict: "Mammon distracts individuals from their higher calling, encouraging them to settle for shallow rewards rather than pursuing what truly aligns with their authentic selves."
    },
    ENTP: {
        name: "Jophiel - Archangel of Change",
        traits: "Inventive, argumentative, energetic, and highly adaptable. Jophiel encourages challenging ideas, innovation, and the pursuit of new concepts.",
        power: "Jophiel sparks creativity, clarity of thought, and drives people to engage in intellectual debates and growth.",
        compatibility: "Metatron",
        archEnemy: "Amon - Demon of Stagnation",
        conflict: "Amon hinders intellectual curiosity, keeping people trapped in outdated systems and preventing innovation."
    },
    ENTJ: {
        name: "Raziel - Archangel of Strategy",
        traits: "Assertive, visionary, strategic, and determined. Raziel excels at creating and executing complex plans and fostering leadership in others.",
        power: "Raziel enhances strategic foresight, leadership capabilities, and the ability to enact large-scale change. He helps individuals make bold moves with calculated risks.",
        compatibility: "Michael",
        archEnemy: "Samael - Demon of Recklessness",
        conflict: "Samael tempts individuals to abandon their well-thought-out plans, replacing them with hasty actions that may lead to failure."
    },
    ISTJ: {
        name: "Zadkiel - Archangel of Order",
        traits: "Zadkiel is practical, responsible, and methodical. He values order, reliability, and personal responsibility, ensuring his charges maintain stability in their lives.",
        power: "Zadkiel can organize chaotic situations, instill discipline, and provide clarity in complex situations. He aids in maintaining the integrity of systems and processes, ensuring progress is made through structure.",
        compatibility: "Uriel",
        archEnemy: "Belial - Demon of Disorder",
        conflict: "Belial’s influence weakens resolve and prevents individuals from following through on their responsibilities, leading them into confusion and inefficiency."
    },
    ISTP: {
        name: "Samael - Archangel of Independence",
        traits: "Practical, resourceful, observant, and calm under pressure. Samael encourages self-reliance and skill development.",
        power: "Samael enhances strategic thinking, dexterity, and problem-solving abilities. He guides people to trust their skills and intuition.",
        compatibility: "Azrael",
        archEnemy: "Dantalion - Demon of Confusion",
        conflict: "Dantalion creates mental blocks, causing individuals to second-guess their abilities or become overwhelmed by uncertainty."
    },
    ISFJ: {
        name: "Ariel - Archangel of Protection",
        traits: "Ariel is caring, protective, and selfless. She is dedicated to maintaining peace and safety for those she guards, often working quietly behind the scenes to ensure the well-being of others.",
        power: "Ariel can shield her charges from physical harm and provide emotional security. She helps her charges create stable, loving environments, offering quiet support when needed.",
        compatibility: "Gabriel",
        archEnemy: "Asmodeus - Demon of Temptation",
        conflict: "Asmodeus leads people into self-destructive patterns, encouraging them to break their promises and disregard their values for immediate pleasure."
    },
    ISFP: {
        name: "Jeremiel - Archangel of Freedom",
        traits: "Artistic, introspective, spontaneous, and emotionally in tune with the world. Jeremiel encourages individuals to express themselves freely and follow their heart’s desires.",
        power: "Jeremiel inspires creativity, inner peace, and emotional clarity, helping individuals express their truest form of self.",
        compatibility: "Sandalphon",
        archEnemy: "Moloch - Demon of Conformity",
        conflict: "Moloch stifles creativity and discourages people from living authentically, pushing them to conform to societal expectations."
    },
    INTJ: {
        name: "Metatron - Archangel of Wisdom",
        traits: "Metatron is creative, visionary, and a master of insight. He encourages individuals to follow their dreams and tap into their limitless imagination.",
        power: "Metatron has the ability to foresee potential futures and inspire great creativity. He can guide people to see beyond their current circumstances, helping them visualize paths that lead to their highest potential.",
        compatibility: "Uriel, Jophiel, Raguel",
        archEnemy: "Mammon - Demon of Greed",
        conflict: "Mammon distracts individuals from their higher calling, encouraging them to settle for shallow rewards rather than pursuing what truly aligns with their authentic selves."
    },
    INFJ: {
        name: "Uriel - Archangel of Insight",
        traits: "Uriel is wise, intuitive, and deeply empathetic. He guides individuals toward spiritual enlightenment and personal growth, helping them understand the deeper meaning behind life’s challenges.",
        power: "Uriel can offer profound insight into situations, helping individuals see the world through a deeper, more spiritual lens. He empowers them to fulfill their soul's purpose.",
        compatibility: "Metatron, Zadkiel",
        archEnemy: "Iblis - Demon of Doubt",
        conflict: "Iblis leads individuals into indecision and existential crises, causing them to lose sight of their true path."
    },
    INFP: {
        name: "Sandalphon - Archangel of Dreams",
        traits: "Sandalphon is idealistic, gentle, and spiritually attuned. She encourages individuals to follow their dreams and stay true to their inner values, helping them find peace and fulfillment through authenticity.",
        power: "Sandalphon has the ability to manifest dreams, inspire artistic expression, and guide people to follow their heart’s deepest desires. She offers clarity and inner peace, leading them toward self-actualization.",
        compatibility: "Raphael, Jeremiel",
        archEnemy: "Ahriman - Demon of Despair",
        conflict: "Ahriman leads individuals into despair and disillusionment, causing them to doubt their dreams and their ability to make a difference in the world."
    },
    INTP: {
        name: "Raguel - Archangel of Clarity",
        traits: "Logical, curious, independent, and analytical. Raguel helps people understand complex systems and find clear solutions to life’s mysteries.",
        power: "Raguel clears mental fog, allowing individuals to solve problems with precision and clarity. He assists in understanding intricate systems and finding innovative solutions.",
        compatibility: "Metatron",
        archEnemy: "Baphomet - Demon of Confusion",
        conflict: "Baphomet twists logic and understanding, leading individuals into paradoxes and making clarity seem unattainable."
    },
}

let currentQuestionIndex = 0;
let scores = {
    E: 0, I: 0,
    S: 0, N: 0,
    F: 0, T: 0,
    J: 0, P: 0
};

function initializeTest() {
    currentQuestionIndex = 0;
    scores = { E: 0, I: 0, S: 0, N: 0, F: 0, T: 0, J: 0, P: 0 };
    showQuestion();
    document.getElementById('result-container').style.display = 'none';
    document.getElementById('questionContainer').style.display = 'block';
}

function showQuestion() {
    const question = questions[currentQuestionIndex];
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    
    document.getElementById('progress').style.width = `${progress}%`;
    document.getElementById('questionCounter').textContent = 
        `Question ${currentQuestionIndex + 1}/${questions.length}`;
    document.getElementById('dimensionIndicator').textContent = 
        `Exploring Your ${personalityDimensions[question.dimension].name}`;
    
    document.getElementById('scenario').textContent = question.scenario;
    document.getElementById('currentQuestion').textContent = question.question;
    
    document.getElementById('choice1').textContent = question.choices[0].text;
    document.getElementById('choice2').textContent = question.choices[1].text;
    
    document.getElementById('choice1').onclick = () => handleChoice(question.choices[0].score);
    document.getElementById('choice2').onclick = () => handleChoice(question.choices[1].score);
}

function handleChoice(score) {
    scores[score]++;
    currentQuestionIndex++;
    
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } 
    else {
        showResult();
    }
}

function calculateType() {
    const type = [
        scores.E > scores.I ? 'E' : 'I',
        scores.S > scores.N ? 'S' : 'N',
        scores.F > scores.T ? 'F' : 'T',
        scores.J > scores.P ? 'J' : 'P'
    ].join('');
    
    return type;
}

function calculateDimensionStrength(dim1, dim2) {
    const total = scores[dim1] + scores[dim2];
    return Math.round((scores[dim1] / total) * 100);
}

function showResult() {
    const type = calculateType();
    const result = angelTypes[type];
    
    document.getElementById('questionContainer').style.display = 'none';
    document.getElementById('result-container').style.display = 'block';
    
    document.getElementById('type-result').textContent = type;
    document.getElementById('angel-name').textContent = result.name;
    document.getElementById('angelTraits').textContent = result.traits;
    document.getElementById('angelPower').textContent = result.power;
    document.getElementById('angelCompability').textContent = result.compatibility;
    document.getElementById('angelArchEnemy').textContent = result.archEnemy;
    document.getElementById('angelConflict').textContent = result.conflict;
    
    document.getElementById('ei-result').textContent = 
        `${calculateDimensionStrength('E', 'I')}% E - ${calculateDimensionStrength('I', 'E')}% I`;
    document.getElementById('sn-result').textContent = 
        `${calculateDimensionStrength('S', 'N')}% S - ${calculateDimensionStrength('N', 'S')}% N`;
    document.getElementById('ft-result').textContent = 
        `${calculateDimensionStrength('F', 'T')}% F - ${calculateDimensionStrength('T', 'F')}% T`;
    document.getElementById('jp-result').textContent = 
        `${calculateDimensionStrength('J', 'P')}% J - ${calculateDimensionStrength('P', 'J')}% P`;
}

document.getElementById('restart-btn').addEventListener('click', initializeTest);
document.addEventListener('DOMContentLoaded', initializeTest);