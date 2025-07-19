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

// Joriy ko‘rsatilayotgan savol raqami (index) va to‘g‘ri javoblar sonini boshlang‘ich qiymatga tenglab olamiz
let currentQuestion = 0;
let score = 0;

// HTML sahifadagi "quizBox" id ga ega elementni olamiz (savollar shu yerga joylanadi)
const quizBox = document.getElementById("quizBox");

// Savolni yuklash va variantlarni ko‘rsatish funksiyasi
function loadQuestion() {
  // Avvalgi savol va tugmalarni tozalaymiz
  quizBox.innerHTML = "";

  // Agar hali savollar qolgan bo‘lsa, davom etamiz
  if (currentQuestion < questions.length) {
    // Joriy savolni olamiz
    const q = questions[currentQuestion];

    // Savol sarlavhasini hosil qilamiz
    const questionEl = document.createElement("h2");
    questionEl.textContent = `Savol ${currentQuestion + 1}: ${q.question}`;
    quizBox.appendChild(questionEl); // Savolni sahifaga qo‘shamiz

    // Variantlar ro‘yxatini yaratamiz
    const optionsList = document.createElement("ul");

    // Har bir variant uchun <li> (list item) hosil qilamiz
    q.options.forEach((optionText) => {
      const li = document.createElement("li");
      li.classList.add("option"); // Har bir variantga class qo‘shamiz
      li.textContent = optionText;

      // Variant bosilganda ishlovchi hodisa
      li.addEventListener("click", () => {
        // Boshqa variantlarga bosishni bloklaymiz
        const allOptions = document.querySelectorAll(".option");
        allOptions.forEach((opt) => (opt.style.pointerEvents = "none"));

        // Agar bosilgan variant to‘g‘ri bo‘lsa, yashil bo‘yab, ball qo‘shamiz
        if (optionText === q.answer) {
          li.classList.add("correct");
          score++; // Ballni oshiramiz
        } else {
          // Noto‘g‘ri variant qizil rangda ko‘rsatiladi
          li.classList.add("wrong");
        }

        // "Keyingi" yoki "Yakunlash" tugmasini yaratamiz
        const nextBtn = document.createElement("button");
        nextBtn.textContent =
          currentQuestion < questions.length - 1 ? "Next" : "Finish";

        // Tugma bosilganda keyingi savolga o‘tamiz
        nextBtn.addEventListener("click", () => {
          currentQuestion++; // Savol indeksini oshiramiz
          loadQuestion(); // Yangi savolni yuklaymiz
        });

        // Tugmani sahifaga qo‘shamiz
        quizBox.appendChild(nextBtn);
      });

      // Variantni variantlar ro‘yxatiga qo‘shamiz
      optionsList.appendChild(li);
    });

    // Variantlar ro‘yxatini sahifaga qo‘shamiz
    quizBox.appendChild(optionsList);
  } else {
    // Barcha savollar tugagan bo‘lsa, natijani ko‘rsatamiz
    showResult();
  }
}

// Test yakunida natijani chiqaradigan funksiya
function showResult() {
  quizBox.innerHTML = `<div class="result"> Quiz tugadi! <br><br> Sizning natijangiz: <strong>${score} / ${questions.length}</strong></div>`;
}

// Sahifa yuklanganda birinchi savolni yuklaymiz
loadQuestion();
