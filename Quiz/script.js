// Perguntas do quiz
const questions = [
    {
        question: "Qual é a capital do Brasil?",
        options: ["Rio de Janeiro", "Brasília", "São Paulo", "Salvador"],
        answer: 1
    },
    {
        question: "Quem escreveu 'Dom Casmurro'?",
        options: ["Machado de Assis", "José de Alencar", "Clarice Lispector", "Carlos Drummond de Andrade"],
        answer: 0
    },
    {
        question: "Qual é o maior planeta do sistema solar?",
        options: ["Terra", "Júpiter", "Saturno", "Marte"],
        answer: 1
    },
    {
        question: "Qual é o elemento químico com símbolo O?",
        options: ["Oxigênio", "Ouro", "Ósmio", "Oganessônio"],
        answer: 0
    },
    {
        question: "Quem pintou a Mona Lisa?",
        options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Claude Monet"],
        answer: 1
    },
    {
        question: "Qual é o valor de Pi (π)?",
        options: ["3.14", "3.1415", "3.14159", "3.141592"],
        answer: 2
    },
    {
        question: "Em que ano o Brasil se tornou independente?",
        options: ["1822", "1889", "1500", "1930"],
        answer: 0
    },
    {
        question: "Qual é a língua oficial dos Estados Unidos?",
        options: ["Inglês", "Espanhol", "Francês", "Alemão"],
        answer: 0
    },
    {
        question: "Qual é o maior oceano do mundo?",
        options: ["Atlântico", "Índico", "Pacífico", "Ártico"],
        answer: 2
    },
    {
        question: "Qual é o metal mais pesado?",
        options: ["Ouro", "Mercúrio", "Platina", "Urânio"],
        answer: 3
    }
];

let currentQuestionIndex = 0;
let score = 0;

// Função para carregar a pergunta atual
function loadQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById('question').textContent = question.question;

    const options = document.querySelectorAll('.option');
    question.options.forEach((option, index) => {
        options[index].textContent = option;
        options[index].style.backgroundColor = '#6e7dff'; // Cor inicial
    });

    document.getElementById('next-btn-container').style.display = 'none';
}

// Função para verificar a resposta
function checkAnswer(selectedIndex) {
    const correctAnswer = questions[currentQuestionIndex].answer;

    // Marcar a resposta correta
    const options = document.querySelectorAll('.option');
    options.forEach((button, index) => {
        if (index === correctAnswer) {
            button.style.backgroundColor = 'green';
        } else {
            button.style.backgroundColor = 'red';
        }
    });

    // Atualizar a pontuação se a resposta estiver correta
    if (selectedIndex === correctAnswer) {
        score++;
    }

    // Mostrar o botão de próxima pergunta
    document.getElementById('next-btn-container').style.display = 'block';
}

// Função para avançar para a próxima pergunta
function nextQuestion() {
    currentQuestionIndex++;

    // Verificar se há mais perguntas
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

// Função para exibir o resultado
function showResult() {
    document.getElementById('quiz').style.display = 'none';
    document.getElementById('result').style.display = 'block';
    document.getElementById('score').textContent = `Você acertou ${score} de ${questions.length} perguntas!`;
}

// Função para reiniciar o quiz
function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('quiz').style.display = 'block';
    document.getElementById('result').style.display = 'none';
    loadQuestion();
}

// Iniciar o quiz
loadQuestion();

