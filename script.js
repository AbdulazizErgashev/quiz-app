const questions = [
  {
    question: "HTML nima uchun ishlatiladi?",
    options: [
      "Ma'lumotlarni saqlash",
      "Veb sahifa yaratish",
      "Veb dizayn qilish",
      "Server yaratish",
    ],
    answer: "Veb sahifa yaratish",
  },
  {
    question: "CSS yordamida nima qilinadi?",
    options: [
      "JavaScriptni ishga tushirish",
      "Sahifa tarkibini o'zgartirish",
      "Sahifaga uslub berish",
      "Ma'lumotlarni yuborish",
    ],
    answer: "Sahifaga uslub berish",
  },
  {
    question: "JavaScript nima qiladi?",
    options: [
      "Fayllarni yuklaydi",
      "Veb sahifaga interaktivlik qo‘shadi",
      "Rasmlar chizadi",
      "Tarmoq quradi",
    ],
    answer: "Veb sahifaga interaktivlik qo‘shadi",
  },
  {
    question: "HTMLda `<img>` tagi nima uchun ishlatiladi?",
    options: [
      "Matn yozish uchun",
      "Rasm joylash uchun",
      "Formani yaratish uchun",
      "Skript yozish uchun",
    ],
    answer: "Rasm joylash uchun",
  },
  {
    question: "CSS da `color` nima qiladi?",
    options: [
      "Orqa fon rangini belgilaydi",
      "Ramka rangini belgilaydi",
      "Matn rangini belgilaydi",
      "Butun sahifa o‘lchamini belgilaydi",
    ],
    answer: "Matn rangini belgilaydi",
  },
  {
    question: "`onclick` hodisasi qachon ishga tushadi?",
    options: [
      "Sahifa yuklanganda",
      "Foydalanuvchi biror elementga bosganda",
      "Sahifa yopilganda",
      "Forma jo‘natilganda",
    ],
    answer: "Foydalanuvchi biror elementga bosganda",
  },
  {
    question: "JavaScriptda `let` nima uchun ishlatiladi?",
    options: [
      "O‘zgaruvchi e’lon qilish uchun",
      "Funksiya chaqirish uchun",
      "Matn chiqarish uchun",
      "Rasm yuklash uchun",
    ],
    answer: "O‘zgaruvchi e’lon qilish uchun",
  },
  {
    question: "CSS faylini HTMLga qanday ulaymiz?",
    options: [
      "`<script>` bilan",
      "`<img>` bilan",
      "`<link>` bilan",
      "`<style>` bilan",
    ],
    answer: "`<link>` bilan",
  },
  {
    question: "JavaScript faylini HTMLga ulash uchun qaysi teg ishlatiladi?",
    options: ["`<link>`", "`<style>`", "`<script>`", "`<meta>`"],
    answer: "`<script>`",
  },
  {
    question: "HTML hujjatining bosh qismi qayerda yoziladi?",
    options: [
      "`<header>` ichida",
      "`<body>` ichida",
      "`<html>` ichida",
      "`<head>` ichida",
    ],
    answer: "`<head>` ichida",
  },
];

let currentQuestion = 0;
let score = 0;

const quizBox = document.getElementById("quizBox");

function loadQuestion() {
  quizBox.innerHTML = "";

  if (currentQuestion < questions.length) {
    const q = questions[currentQuestion];

    const questionEl = document.createElement("h2");
    questionEl.textContent = `Savol ${currentQuestion + 1}: ${q.question}`;
    quizBox.appendChild(questionEl);

    const optionsList = document.createElement("ul");

    q.options.forEach((optionText) => {
      const li = document.createElement("li");
      li.classList.add("option");
      li.textContent = optionText;

      li.addEventListener("click", () => {
        const allOptions = document.querySelectorAll(".option");
        allOptions.forEach((opt) => (opt.style.pointerEvents = "none"));

        if (optionText === q.answer) {
          li.classList.add("correct");
          score++;
        } else {
          li.classList.add("wrong");
        }

        const nextBtn = document.createElement("button");
        nextBtn.textContent =
          currentQuestion < questions.length - 1 ? "Next" : "Finish";
        nextBtn.addEventListener("click", () => {
          currentQuestion++;
          loadQuestion();
        });

        quizBox.appendChild(nextBtn);
      });

      optionsList.appendChild(li);
    });

    quizBox.appendChild(optionsList);
  } else {
    showResult();
  }
}

function showResult() {
  quizBox.innerHTML = `<div class="result"> Quiz tugadi! <br><br> Sizning natijangiz: <strong>${score} / ${questions.length}</strong></div>`;
}

loadQuestion();
