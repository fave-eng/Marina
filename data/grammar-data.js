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
  },
  {
    "id": "grammar-lesson-8-frequency",
    "order": 3,
    "title": "Adverbs and phrases of frequency",
    "level": "A2.2",
    "status": "available",
    "linkedLessonId": "lesson-8",
    "page": "grammar-topic.html?id=grammar-lesson-8-frequency",
    "passScore": 100,
    "showCorrectAnswerOnError": false,
    "overview": {
      "lead": "Наречия и фразы частотности показывают, как часто происходит действие: всегда, обычно, часто, иногда, почти никогда, никогда; раз в неделю, два раза в месяц и т. п.",
      "keyRule": "always, usually, often, sometimes, hardly ever, never обычно стоят перед смысловым глаголом, но после am / is / are. Фразы once/twice/every ... чаще стоят в конце предложения.",
      "subjects": [
        "always",
        "usually",
        "often",
        "sometimes",
        "hardly ever",
        "never"
      ],
      "example": "I often check my messages. · She is usually busy. · We meet once a week."
    },
    "uses": [
      {
        "icon": "🔁",
        "title": "Привычки и регулярность",
        "text": "Используй наречие частотности, чтобы сказать, как часто ты обычно что-то делаешь.",
        "example": "I sometimes go running after work."
      },
      {
        "icon": "📅",
        "title": "Точная частота",
        "text": "once, twice и ... times + a/an + период показывают конкретное количество повторений.",
        "example": "We meet twice a day."
      },
      {
        "icon": "🗓️",
        "title": "Every + период",
        "text": "every ставится перед существительным в единственном числе: every day, every weekend, every Sunday.",
        "example": "I call my parents every Sunday."
      },
      {
        "icon": "❓",
        "title": "Вопрос о частоте",
        "text": "Чтобы спросить «как часто?», начинай вопрос с How often.",
        "example": "How often do you check your emails?"
      }
    ],
    "forms": [
      {
        "id": "affirmative",
        "icon": "+",
        "title": "С обычным глаголом",
        "formula": "subject + adverb + main verb",
        "example": "They usually have lunch at home.",
        "translation": "Они обычно обедают дома.",
        "note": "Наречие ставится перед смысловым глаголом."
      },
      {
        "id": "negative",
        "icon": "−",
        "title": "В отрицании",
        "formula": "subject + don’t / doesn’t + adverb + verb",
        "example": "He doesn’t often work late.",
        "translation": "Он нечасто работает допоздна.",
        "note": "После don’t / doesn’t идёт наречие, затем базовая форма глагола. Never уже имеет отрицательное значение: не используй с ним don’t / doesn’t."
      },
      {
        "id": "question",
        "icon": "?",
        "title": "В вопросе",
        "formula": "How often + do / does + subject + verb?",
        "example": "How often does Anna go shopping?",
        "translation": "Как часто Анна ходит за покупками?",
        "note": "После does основной глагол остаётся в базовой форме."
      },
      {
        "id": "short-answer",
        "icon": "BE",
        "title": "С глаголом be",
        "formula": "subject + am / is / are + adverb",
        "example": "I am sometimes tired in the morning.",
        "translation": "Я иногда устаю утром.",
        "note": "С am / is / are наречие частотности ставится после формы be."
      }
    ],
    "contrast": {
      "title": "Обычный глагол или be?",
      "intro": "Позиция наречия зависит от того, какой глагол является главным.",
      "ordinary": {
        "label": "Обычный глагол",
        "verbs": "work, go, check, meet, read",
        "affirmative": "She often reads at night.",
        "negative": "She doesn’t usually read at work.",
        "question": "Does she often read on the bus?",
        "rule": "Наречие обычно стоит перед смысловым глаголом; в вопросе — после подлежащего и перед смысловым глаголом."
      },
      "be": {
        "label": "Глагол be",
        "verbs": "am, is, are",
        "affirmative": "She is often tired.",
        "negative": "She isn’t usually late.",
        "question": "Is she often tired?",
        "rule": "Наречие ставится после am / is / are; в вопросе be выходит перед подлежащим, а наречие остаётся после подлежащего."
      }
    },
    "questionBuilder": {
      "title": "Как построить вопрос How often",
      "pattern": [
        "How often",
        "do / does",
        "subject",
        "verb",
        "...?"
      ],
      "example": "How often do you go running?",
      "translation": "Как часто ты бегаешь?",
      "note": "How often стоит в начале. Затем do / does, подлежащее и глагол в базовой форме."
    },
    "memoryRule": {
      "title": "Быстрая проверка позиции",
      "steps": [
        "Есть обычный смысловой глагол? Поставь always / usually / often / sometimes / hardly ever / never перед ним.",
        "Главный глагол — am / is / are? Поставь наречие после be.",
        "Нужна точная частота? Используй once / twice / three times + a/an + period или every + singular noun.",
        "Спрашиваешь «как часто»? Начни с How often + do/does."
      ]
    },
    "commonMistakes": [
      {
        "wrong": "She goes usually by bus.",
        "right": "She usually goes by bus.",
        "reason": "С обычным глаголом usually обычно стоит перед глаголом."
      },
      {
        "wrong": "They never are late.",
        "right": "They are never late.",
        "reason": "После am / is / are наречие ставится после формы be."
      },
      {
        "wrong": "I don’t never check messages.",
        "right": "I never check messages.",
        "reason": "Never уже отрицательное по смыслу, поэтому don’t здесь не нужно."
      },
      {
        "wrong": "We meet every Sundays.",
        "right": "We meet every Sunday.",
        "reason": "После every существительное времени обычно стоит в единственном числе."
      }
    ],
    "quizExercises": [
      {
        "id": "frequency-easy",
        "title": "1. Лёгкое",
        "instructions": "Choose the correct option.",
        "items": [
          {
            "type": "single",
            "skill": "позиция с обычным глаголом",
            "prompt": "Choose the correct sentence.",
            "options": [
              "I usually check my messages before work.",
              "I check usually my messages before work.",
              "Usually I check my messages before work always."
            ],
            "answer": 0,
            "explanation": "Есть ошибка. Проверь позицию наречия перед обычным смысловым глаголом."
          },
          {
            "type": "single",
            "skill": "позиция с be",
            "prompt": "Choose the correct sentence.",
            "options": [
              "She always is busy on Mondays.",
              "She is always busy on Mondays.",
              "She is busy always on Mondays."
            ],
            "answer": 1,
            "explanation": "Есть ошибка. Проверь, где стоит наречие после am / is / are."
          },
          {
            "type": "single",
            "skill": "фраза частотности",
            "prompt": "Choose the correct phrase.",
            "options": [
              "once day",
              "once a day",
              "one time a days"
            ],
            "answer": 1,
            "explanation": "Есть ошибка. Проверь модель once + a/an + period."
          },
          {
            "type": "single",
            "skill": "How often",
            "prompt": "Choose the correct question.",
            "options": [
              "How often do you go running?",
              "How do often you go running?",
              "How often you do go running?"
            ],
            "answer": 0,
            "explanation": "Есть ошибка. Проверь порядок слов после How often."
          }
        ]
      },
      {
        "id": "frequency-medium",
        "title": "2. Среднее",
        "instructions": "Complete each sentence with one word.",
        "items": [
          {
            "type": "gaps",
            "skill": "точная частота",
            "prompt": "Complete the sentence.",
            "segments": [
              "We meet for coffee twice ",
              " week."
            ],
            "answers": [
              "a"
            ],
            "explanation": "Есть ошибка. Проверь конструкцию twice + a/an + period."
          },
          {
            "type": "gaps",
            "skill": "точная частота",
            "prompt": "Complete the sentence.",
            "segments": [
              "I check my messages once ",
              " evening."
            ],
            "answers": [
              "an"
            ],
            "explanation": "Есть ошибка. Проверь слово перед evening."
          },
          {
            "type": "gaps",
            "skill": "be + adverb",
            "prompt": "Complete the sentence.",
            "segments": [
              "My sister ",
              " usually at home in the evening."
            ],
            "answers": [
              "is"
            ],
            "explanation": "Есть ошибка. Проверь форму be перед наречием частотности."
          },
          {
            "type": "gaps",
            "skill": "How often",
            "prompt": "Complete the question.",
            "segments": [
              "How ",
              " do you visit your grandparents?"
            ],
            "answers": [
              "often"
            ],
            "explanation": "Есть ошибка. Вспомни вопрос со значением «как часто?»."
          }
        ]
      },
      {
        "id": "frequency-reorder",
        "title": "3. Повышенной сложности",
        "instructions": "Put the words in the correct order and write the complete sentence.",
        "items": [
          {
            "type": "reorder",
            "skill": "обычный глагол",
            "prompt": "Put the words in the correct order.",
            "tokens": [
              "I",
              "hardly ever",
              "watch TV",
              "in the morning"
            ],
            "answer": "I hardly ever watch TV in the morning",
            "acceptedAnswers": [
              "I hardly ever watch TV in the morning",
              "I hardly ever watch TV in the morning."
            ],
            "explanation": "Есть ошибка. Проверь место hardly ever относительно смыслового глагола."
          },
          {
            "type": "reorder",
            "skill": "be + usually",
            "prompt": "Put the words in the correct order.",
            "tokens": [
              "my sister",
              "is",
              "usually",
              "at home",
              "on Sundays"
            ],
            "answer": "My sister is usually at home on Sundays",
            "acceptedAnswers": [
              "My sister is usually at home on Sundays",
              "My sister is usually at home on Sundays."
            ],
            "explanation": "Есть ошибка. Проверь положение usually после be."
          },
          {
            "type": "reorder",
            "skill": "вопрос",
            "prompt": "Put the words in the correct order.",
            "tokens": [
              "How often",
              "does",
              "Tom",
              "go running"
            ],
            "answer": "How often does Tom go running?",
            "acceptedAnswers": [
              "How often does Tom go running?",
              "How often does Tom go running"
            ],
            "explanation": "Есть ошибка. Проверь порядок слов в вопросе с does."
          },
          {
            "type": "reorder",
            "skill": "фраза частотности",
            "prompt": "Put the words in the correct order.",
            "tokens": [
              "we",
              "go to the cinema",
              "once a day"
            ],
            "answer": "We go to the cinema once a day",
            "acceptedAnswers": [
              "We go to the cinema once a day",
              "We go to the cinema once a day."
            ],
            "explanation": "Есть ошибка. Фраза точной частоты обычно стоит в конце предложения."
          }
        ]
      },
      {
        "id": "frequency-challenge",
        "title": "4. Самое сложное",
        "instructions": "Write the complete sentence or question. Use all the information.",
        "items": [
          {
            "type": "text",
            "skill": "отрицание",
            "prompt": "I / not usually / check emails / at night.",
            "answer": "I don't usually check emails at night.",
            "acceptedAnswers": [
              "I don't usually check emails at night.",
              "I don't usually check emails at night"
            ],
            "placeholder": "Write the complete sentence",
            "explanation": "Есть ошибка. Проверь порядок don’t + adverb + base verb."
          },
          {
            "type": "text",
            "skill": "вопрос How often",
            "prompt": "Ask: you / meet your friends — how often?",
            "answer": "How often do you meet your friends?",
            "acceptedAnswers": [
              "How often do you meet your friends?",
              "How often do you meet your friends"
            ],
            "placeholder": "Write the complete question",
            "explanation": "Есть ошибка. Проверь порядок слов после How often."
          },
          {
            "type": "text",
            "skill": "be + never",
            "prompt": "my parents / never / late for work.",
            "answer": "My parents are never late for work.",
            "acceptedAnswers": [
              "My parents are never late for work.",
              "My parents are never late for work"
            ],
            "placeholder": "Write the complete sentence",
            "explanation": "Есть ошибка. Проверь форму be и место never."
          },
          {
            "type": "text",
            "skill": "частота + третье лицо",
            "prompt": "she / go shopping / twice / week.",
            "answer": "She goes shopping twice a week.",
            "acceptedAnswers": [
              "She goes shopping twice a week.",
              "She goes shopping twice a week"
            ],
            "placeholder": "Write the complete sentence",
            "explanation": "Есть ошибка. Проверь форму глагола с she и выражение twice + a + period."
          }
        ]
      }
    ]
  }

];
