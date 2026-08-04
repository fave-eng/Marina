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
  },
  {
    "id": "grammar-lesson-6-countable-uncountable",
    "order": 2,
    "title": "Countable and uncountable nouns: a, an, some, any",
    "level": "A2.2",
    "status": "available",
    "linkedLessonId": "lesson-6",
    "page": "grammar-topic.html?id=grammar-lesson-6-countable-uncountable",
    "passScore": 100,
    "showCorrectAnswerOnError": false,
    "overview": {
      "lead": "В английском важно сначала понять, можно ли посчитать существительное поштучно. От этого зависит, можно ли поставить a / an и какую форму выбрать: some или any.",
      "keyRule": "Можно посчитать один предмет — используй a / an. Нельзя посчитать поштучно — a / an не ставится; обычно используй some или any.",
      "subjects": [
        "a / an",
        "some",
        "any"
      ],
      "example": "an apple · some rice · any orange juice"
    },
    "uses": [
      {
        "icon": "1️⃣",
        "title": "Countable — исчисляемые",
        "text": "Можно посчитать: one apple, two apples. Есть форма единственного и множественного числа.",
        "example": "an apple · three apples"
      },
      {
        "icon": "🥣",
        "title": "Uncountable — неисчисляемые",
        "text": "Обычно воспринимаются как масса или вещество и не считаются поштучно.",
        "example": "rice · sugar · broccoli"
      },
      {
        "icon": "➕",
        "title": "Some",
        "text": "Обычно используется в утвердительных предложениях, а также в просьбах и предложениях.",
        "example": "some noodles · Would you like some sugar?"
      },
      {
        "icon": "❓",
        "title": "Any",
        "text": "Обычно используется в вопросах и отрицаниях.",
        "example": "Do we have any cheese? · We haven’t got any juice."
      }
    ],
    "forms": [
      {
        "id": "affirmative",
        "icon": "A",
        "title": "A перед согласным звуком",
        "formula": "a + singular countable noun",
        "example": "a pear",
        "translation": "одна груша",
        "note": "Смотри на первый звук следующего слова."
      },
      {
        "id": "negative",
        "icon": "AN",
        "title": "An перед гласным звуком",
        "formula": "an + singular countable noun",
        "example": "an apple",
        "translation": "одно яблоко",
        "note": "An употребляется перед гласным звуком: an egg, an orange."
      },
      {
        "id": "question",
        "icon": "S",
        "title": "Some",
        "formula": "some + plural countable / uncountable noun",
        "example": "some grapes · some oil",
        "translation": "немного / несколько",
        "note": "Чаще в утверждениях, предложениях и просьбах."
      },
      {
        "id": "short-answer",
        "icon": "?",
        "title": "Any",
        "formula": "any + plural countable / uncountable noun",
        "example": "any carrots · any rice",
        "translation": "какие-нибудь / сколько-нибудь",
        "note": "Чаще в вопросах и отрицаниях."
      }
    ],
    "contrast": {
      "title": "Сначала определи тип существительного",
      "intro": "Один и тот же выбор работает и для еды, и для других предметов.",
      "ordinary": {
        "label": "Countable",
        "verbs": "apple, egg, pear, carrot, grape",
        "affirmative": "a pear / an egg",
        "negative": "some pears / any pears",
        "question": "Do you want an apple?",
        "rule": "В единственном числе нужен a или an; во множественном числе можно использовать some / any."
      },
      "be": {
        "label": "Uncountable",
        "verbs": "rice, sugar, oil, cheese, broccoli",
        "affirmative": "some rice",
        "negative": "not any rice",
        "question": "Do we have any rice?",
        "rule": "Не ставь a / an и обычно не добавляй -s."
      }
    },
    "questionBuilder": {
      "title": "Алгоритм выбора",
      "pattern": [
        "Можно посчитать?",
        "Один предмет?",
        "a / an",
        "Иначе",
        "some / any"
      ],
      "example": "one apple → an apple; rice → some rice",
      "translation": "Сначала тип существительного, затем контекст предложения.",
      "note": "В утвердительном предложении обычно some; в вопросе или отрицании обычно any."
    },
    "memoryRule": {
      "title": "Запомни в четыре шага",
      "steps": [
        "Определи: существительное исчисляемое или неисчисляемое.",
        "Один исчисляемый предмет: a перед согласным звуком, an перед гласным.",
        "Утверждение, просьба или предложение: чаще some.",
        "Вопрос или отрицание: чаще any."
      ]
    },
    "commonMistakes": [
      {
        "wrong": "a rice",
        "right": "some rice",
        "reason": "Rice — неисчисляемое существительное."
      },
      {
        "wrong": "a apple",
        "right": "an apple",
        "reason": "Apple начинается с гласного звука."
      },
      {
        "wrong": "We haven’t got some juice.",
        "right": "We haven’t got any juice.",
        "reason": "В отрицании обычно используется any."
      },
      {
        "wrong": "some carrot",
        "right": "a carrot / some carrots",
        "reason": "Carrot — исчисляемое: один предмет или множественное число."
      }
    ],
    "quiz": [
      {
        "type": "single",
        "difficulty": "1 · Easy",
        "skill": "a или an",
        "prompt": "Choose the correct phrase.",
        "options": [
          "a apple",
          "an apple",
          "some apple"
        ],
        "answer": 1,
        "explanation": "Есть ошибка. Проверь правило для одного исчисляемого предмета."
      },
      {
        "type": "select",
        "difficulty": "2 · Basic",
        "skill": "some или any",
        "prompt": "We haven’t got ___ orange juice.",
        "options": [
          "some",
          "any",
          "an"
        ],
        "answer": 1,
        "explanation": "Есть ошибка. Проверь, какое слово обычно используется в отрицании."
      },
      {
        "type": "gaps",
        "difficulty": "3 · Medium",
        "skill": "два разных типа существительных",
        "prompt": "Complete the sentence: I’d like ___ egg and ___ rice, please.",
        "segments": [
          "I’d like ",
          " egg and ",
          " rice, please."
        ],
        "answers": [
          "an",
          "some"
        ],
        "explanation": "Есть ошибка. Сначала определи тип каждого существительного."
      },
      {
        "type": "text",
        "difficulty": "4 · Challenge",
        "skill": "исправление предложения",
        "prompt": "Correct the sentence: Can I have a broccoli, please?",
        "answer": "Can I have some broccoli, please?",
        "acceptedAnswers": [
          "Can I have some broccoli, please?",
          "Can I have some broccoli please"
        ],
        "placeholder": "Write the complete sentence",
        "explanation": "Есть ошибка. Проверь существительное и слово перед ним."
      }
    ]
  }
];
