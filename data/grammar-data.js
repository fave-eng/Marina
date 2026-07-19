/** Grammar path for Marina. */
window.GRAMMAR_DATA = [
  {
    "id": "grammar-lesson-1-present-simple",
    "order": 1,
    "title": "Present Simple: I, you, we, they",
    "level": "A2.2",
    "status": "available",
    "linkedLessonId": "lesson-1",
    "page": "grammar-topic.html?id=grammar-lesson-1-present-simple",
    "passScore": 100,
    "overview": {
      "lead": "Present Simple нужен, когда мы говорим о фактах, привычках, регулярных действиях и постоянных ситуациях.",
      "keyRule": "После I, you, we, they обычный глагол используется в базовой форме — без -s.",
      "subjects": [
        "I",
        "you",
        "we",
        "they"
      ],
      "example": "We live in Scotland. They work together."
    },
    "uses": [
      {
        "icon": "🔁",
        "title": "Регулярные действия",
        "text": "То, что происходит обычно или повторяется.",
        "example": "We work from Monday to Friday."
      },
      {
        "icon": "📌",
        "title": "Факты",
        "text": "То, что является правдой или общеизвестным фактом.",
        "example": "They speak English."
      },
      {
        "icon": "🏠",
        "title": "Постоянные ситуации",
        "text": "Где человек живёт, работает или учится.",
        "example": "I live in Scotland."
      }
    ],
    "forms": [
      {
        "id": "affirmative",
        "icon": "✓",
        "title": "Утверждение",
        "formula": "I / You / We / They + verb",
        "example": "They work together.",
        "translation": "Они работают вместе.",
        "note": "Не добавляй -s: they work, не they works."
      },
      {
        "id": "negative",
        "icon": "−",
        "title": "Отрицание",
        "formula": "I / You / We / They + don’t + verb",
        "example": "We don’t live in Poland.",
        "translation": "Мы не живём в Польше.",
        "note": "После don’t глагол остаётся в базовой форме."
      },
      {
        "id": "question",
        "icon": "?",
        "title": "Общий вопрос",
        "formula": "Do + I / you / we / they + verb?",
        "example": "Do your parents like pizza?",
        "translation": "Твоим родителям нравится пицца?",
        "note": "Do ставится перед подлежащим."
      },
      {
        "id": "short-answer",
        "icon": "↔",
        "title": "Краткий ответ",
        "formula": "Yes, ... do. / No, ... don’t.",
        "example": "Yes, they do. / No, they don’t.",
        "translation": "Да. / Нет.",
        "note": "Не повторяй основной глагол в кратком ответе."
      }
    ],
    "contrast": {
      "title": "Сначала найди главный глагол",
      "intro": "Главная трудность — понять, нужен ли do / don’t или форма глагола be.",
      "ordinary": {
        "label": "Обычный глагол",
        "verbs": "work, live, speak, like, know",
        "affirmative": "They work.",
        "negative": "They don’t work.",
        "question": "Do they work?",
        "rule": "Для вопроса и отрицания используй do / don’t."
      },
      "be": {
        "label": "Глагол be",
        "verbs": "am / are",
        "affirmative": "They are scientists.",
        "negative": "They aren’t Spanish.",
        "question": "Are they scientists?",
        "rule": "С be не используй do. Сам be меняет место или получает not."
      }
    },
    "questionBuilder": {
      "title": "Порядок слов в специальном вопросе",
      "pattern": [
        "Question word",
        "do",
        "I / you / we / they",
        "verb",
        "...?"
      ],
      "example": "Where do you come from?",
      "translation": "Откуда ты родом?",
      "note": "Where / What / How ставится в начале, затем do, подлежащее и основной глагол."
    },
    "memoryRule": {
      "title": "Быстрая проверка",
      "steps": [
        "Главный глагол — am / are? Используй be: are, aren’t, Are ...?",
        "Главный глагол обычный? Для отрицания и вопроса используй don’t / do.",
        "После do и don’t всегда ставь базовую форму глагола."
      ]
    },
    "commonMistakes": [
      {
        "wrong": "They works together.",
        "right": "They work together.",
        "reason": "После they окончание -s не нужно."
      },
      {
        "wrong": "They don’t Spanish.",
        "right": "They aren’t Spanish.",
        "reason": "Spanish здесь идёт после be: they are / aren’t."
      },
      {
        "wrong": "Where you do come from?",
        "right": "Where do you come from?",
        "reason": "В вопросе do ставится перед подлежащим."
      },
      {
        "wrong": "Do you speaks English?",
        "right": "Do you speak English?",
        "reason": "После do используется базовая форма speak."
      }
    ],
    "quiz": [
      {
        "difficulty": "1 · Easy",
        "skill": "Утверждение",
        "prompt": "We ___ in Scotland.",
        "options": [
          "live",
          "lives",
          "are live"
        ],
        "answer": 0,
        "explanation": "После we нужен глагол в базовой форме: We live."
      },
      {
        "difficulty": "2 · Basic",
        "skill": "be или don’t",
        "prompt": "They ___ Spanish. They’re Portuguese.",
        "options": [
          "don’t",
          "aren’t",
          "not"
        ],
        "answer": 1,
        "explanation": "Spanish употребляется после be: They aren’t Spanish."
      },
      {
        "difficulty": "3 · Medium",
        "skill": "Общий вопрос",
        "prompt": "___ your parents like pizza?",
        "options": [
          "Are",
          "Do",
          "Does"
        ],
        "answer": 1,
        "explanation": "Parents = they, поэтому вопрос начинается с Do."
      },
      {
        "difficulty": "4 · Challenge",
        "skill": "Порядок слов и ответ",
        "prompt": "Выбери правильную пару «вопрос + ответ».",
        "options": [
          "Where do you come from? — I’m from Turkey.",
          "Where are you come from? — I from Turkey.",
          "Where you do come from? — I’m Turkey."
        ],
        "answer": 0,
        "explanation": "Правильный порядок: Where + do + you + come from?"
      }
    ]
  }
];
