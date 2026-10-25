/** Grammar path for Marina. Detailed Russian explanations; existing topic IDs and quizzes preserved. */
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
    "intro": {
      "lead": "Present Simple показывает то, что является обычным, повторяющимся или устойчивым. С I, you, we, they обычный смысловой глагол стоит в базовой форме. Для отрицаний и вопросов нужен вспомогательный do.",
      "anchor": "Главный вопрос не «это происходит сейчас?», а «это обычно так / это факт / это регулярное действие?»",
      "example": {
        "en": "We work from Monday to Friday.",
        "ru": "Мы работаем с понедельника по пятницу.",
        "highlights": [
          "work"
        ]
      }
    },
    "chapters": [
      {
        "kicker": "Смысл времени",
        "title": "Present Simple — не «кадр сейчас», а обычная картина жизни",
        "intro": "Это время удобно представлять как линию повторяющихся действий. Отдельный момент «сейчас» не является главным.",
        "blocks": [
          {
            "type": "timeline",
            "title": "Повторение во времени",
            "points": [
              "раньше",
              "обычно",
              "NOW",
              "обычно",
              "дальше"
            ],
            "caption": "Действие повторяется вокруг момента NOW; мы говорим о привычке или постоянной ситуации, а не о процессе в конкретную секунду."
          },
          {
            "type": "cards",
            "items": [
              {
                "title": "Привычка / режим",
                "text": "То, что человек делает регулярно.",
                "example": {
                  "en": "I get up at seven every day.",
                  "ru": "Я встаю в семь каждый день.",
                  "highlights": [
                    "get up"
                  ]
                }
              },
              {
                "title": "Факт",
                "text": "То, что мы считаем фактом или общей правдой.",
                "example": {
                  "en": "They speak English.",
                  "ru": "Они говорят по-английски.",
                  "highlights": [
                    "speak"
                  ]
                }
              },
              {
                "title": "Постоянная ситуация",
                "text": "Место жизни, работа, учёба, предпочтения.",
                "example": {
                  "en": "We live in Ufa.",
                  "ru": "Мы живём в Уфе.",
                  "highlights": [
                    "live"
                  ]
                }
              }
            ]
          },
          {
            "type": "note",
            "variant": "contrast",
            "title": "Сравни смысл",
            "text": "I work at home. = это моя обычная ситуация. I’m working at home now. = процесс идёт именно сейчас. В этой теме мы строим только Present Simple, но важно не путать эти два смысла."
          }
        ]
      },
      {
        "kicker": "Структура",
        "title": "Обычный глагол: утверждение, отрицание, вопрос",
        "intro": "С I, you, we, they глагол в утверждении не меняется. В отрицании и вопросе грамматическую работу берёт на себя do.",
        "blocks": [
          {
            "type": "table",
            "headers": [
              "Форма",
              "Схема",
              "Пример",
              "Перевод"
            ],
            "rows": [
              [
                "Утверждение",
                "I / You / We / They + verb",
                "They work together.",
                "Они работают вместе."
              ],
              [
                "Отрицание",
                "I / You / We / They + do not (don’t) + verb",
                "We don’t live in Poland.",
                "Мы не живём в Польше."
              ],
              [
                "Вопрос",
                "Do + I / you / we / they + verb?",
                "Do your parents like pizza?",
                "Твоим родителям нравится пицца?"
              ],
              [
                "Краткий ответ",
                "Yes, ... do. / No, ... don’t.",
                "Yes, they do. / No, they don’t.",
                "Да. / Нет."
              ]
            ],
            "highlights": [
              "verb",
              "do",
              "don’t",
              "Do"
            ]
          },
          {
            "type": "rule",
            "title": "После do / don’t — только базовая форма",
            "formula": "do / don’t + speak · live · work · like",
            "text": "Вспомогательный do уже показывает грамматическую форму. Поэтому основной глагол не получает дополнительного окончания.",
            "example": {
              "en": "Do you speak English?",
              "ru": "Ты говоришь по-английски?",
              "highlights": [
                "Do",
                "speak"
              ]
            }
          }
        ]
      },
      {
        "kicker": "Ключевое различие",
        "title": "Do или be? Сначала найди главный глагол",
        "intro": "Одна из самых частых ошибок — ставить do рядом с am / are. Эти две системы строят вопрос и отрицание по-разному.",
        "blocks": [
          {
            "type": "compare",
            "columns": [
              {
                "title": "Обычный смысловой глагол",
                "lead": "work, live, speak, like, know",
                "lines": [
                  "+ They work. — Они работают.",
                  "− They don’t work. — Они не работают.",
                  "? Do they work? — Они работают?"
                ],
                "example": {
                  "en": "Do they live here?",
                  "ru": "Они живут здесь?",
                  "highlights": [
                    "Do",
                    "live"
                  ]
                }
              },
              {
                "title": "Глагол be",
                "lead": "am / are",
                "lines": [
                  "+ They are students. — Они студенты.",
                  "− They aren’t students. — Они не студенты.",
                  "? Are they students? — Они студенты?"
                ],
                "example": {
                  "en": "Are they from Spain?",
                  "ru": "Они из Испании?",
                  "highlights": [
                    "Are"
                  ]
                }
              }
            ]
          },
          {
            "type": "note",
            "variant": "warning",
            "title": "Не смешивай системы",
            "text": "Нельзя: Do they are students? Нельзя: They don’t Spanish. Если сказуемое строится с be, do не нужен."
          }
        ]
      },
      {
        "kicker": "Порядок слов",
        "title": "Специальные вопросы: question word + do + subject + verb",
        "intro": "Where, What, When, How ставятся в начале. После них сохраняется обычный порядок общего вопроса с do.",
        "blocks": [
          {
            "type": "wordorder",
            "tokens": [
              "Question word",
              "do",
              "I / you / we / they",
              "verb",
              "...?"
            ],
            "example": {
              "en": "Where do you live?",
              "ru": "Где ты живёшь?",
              "highlights": [
                "Where",
                "do",
                "live"
              ]
            }
          },
          {
            "type": "examples",
            "items": [
              {
                "en": "What do they do?",
                "ru": "Чем они занимаются?",
                "highlights": [
                  "What",
                  "do",
                  "do"
                ]
              },
              {
                "en": "How do you know Anna?",
                "ru": "Откуда ты знаешь Анну?",
                "highlights": [
                  "How",
                  "do",
                  "know"
                ]
              },
              {
                "en": "Where do you come from?",
                "ru": "Откуда ты родом?",
                "highlights": [
                  "Where",
                  "do",
                  "come"
                ]
              }
            ]
          }
        ]
      },
      {
        "kicker": "Подсказки в предложении",
        "title": "Слова, которые часто ведут к Present Simple",
        "blocks": [
          {
            "type": "bullets",
            "items": [
              "every day / every week / every year — регулярный период",
              "usually / often / sometimes / never — обычная частота",
              "on Mondays / at weekends — повторяющийся день или период",
              "always — действие или состояние рассматривается как постоянное"
            ]
          },
          {
            "type": "note",
            "variant": "info",
            "title": "Маркер помогает, но не выбирает время автоматически",
            "text": "Сначала пойми смысл предложения. Слова частоты — подсказка, а не механическое правило."
          }
        ]
      },
      {
        "kicker": "Контроль",
        "title": "Типичные ошибки и как их исправлять",
        "blocks": [
          {
            "type": "mistakes",
            "items": [
              {
                "wrong": "They works together.",
                "right": "They work together. — Они работают вместе.",
                "reason": "После they в этой теме глагол стоит без -s."
              },
              {
                "wrong": "Do you speaks English?",
                "right": "Do you speak English? — Ты говоришь по-английски?",
                "reason": "После do нужен инфинитив без to: speak."
              },
              {
                "wrong": "Where you do live?",
                "right": "Where do you live? — Где ты живёшь?",
                "reason": "После вопросительного слова сначала do, затем подлежащее."
              },
              {
                "wrong": "They don’t Spanish.",
                "right": "They aren’t Spanish. — Они не испанцы.",
                "reason": "Здесь нужен be, а не обычный смысловой глагол."
              }
            ]
          }
        ]
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
    "intro": {
      "lead": "Чтобы правильно выбрать a, an, some или any, сначала нужно определить тип существительного: можно ли посчитать предметы по одному и нужна ли форма единственного или множественного числа.",
      "anchor": "Не начинай с артикля. Сначала спроси: countable или uncountable? singular или plural? утверждение, вопрос или отрицание?",
      "example": {
        "en": "an apple · some rice · any water",
        "ru": "одно яблоко · немного риса · какое-нибудь / сколько-нибудь воды",
        "highlights": [
          "an",
          "some",
          "any"
        ]
      }
    },
    "chapters": [
      {
        "kicker": "Шаг 1",
        "title": "Countable и uncountable: что именно мы считаем",
        "intro": "В английском важно не физическое свойство предмета, а то, как существительное используется в данном значении.",
        "blocks": [
          {
            "type": "compare",
            "columns": [
              {
                "title": "Countable — исчисляемые",
                "lead": "Можно назвать one, two, three… Есть singular и plural.",
                "lines": [
                  "one apple → two apples — одно яблоко → два яблока",
                  "a chair → three chairs — один стул → три стула"
                ],
                "example": {
                  "en": "I bought an apple.",
                  "ru": "Я купил(а) яблоко.",
                  "highlights": [
                    "an apple"
                  ]
                }
              },
              {
                "title": "Uncountable — неисчисляемые",
                "lead": "Обычно воспринимаются как вещество, масса, материал или абстрактное понятие.",
                "lines": [
                  "rice — рис",
                  "water — вода",
                  "sugar — сахар",
                  "cheese — сыр"
                ],
                "example": {
                  "en": "We need some rice.",
                  "ru": "Нам нужен рис.",
                  "highlights": [
                    "some rice"
                  ]
                }
              }
            ]
          },
          {
            "type": "note",
            "variant": "info",
            "title": "Одно слово иногда бывает и countable, и uncountable",
            "text": "Например, chicken = куриное мясо (uncountable), но a chicken = одна курица (countable). Значение определяет грамматику."
          }
        ]
      },
      {
        "kicker": "Шаг 2",
        "title": "A / an: только один исчисляемый предмет",
        "intro": "A и an означают «один / какой-то» и употребляются только с countable noun в единственном числе.",
        "blocks": [
          {
            "type": "table",
            "headers": [
              "Выбор",
              "Когда",
              "Пример",
              "Перевод"
            ],
            "rows": [
              [
                "a",
                "перед согласным звуком",
                "a pear",
                "одна груша"
              ],
              [
                "an",
                "перед гласным звуком",
                "an apple",
                "одно яблоко"
              ],
              [
                "a",
                "смотрим на звук, не на букву",
                "a university",
                "один университет"
              ],
              [
                "an",
                "смотрим на звук, не на букву",
                "an hour",
                "один час"
              ]
            ],
            "highlights": [
              "a",
              "an"
            ]
          },
          {
            "type": "rule",
            "title": "Главное ограничение",
            "formula": "a / an + singular countable noun",
            "text": "Нельзя ставить a/an перед множественным числом или обычным неисчисляемым существительным.",
            "example": {
              "en": "a tomato · an egg",
              "ru": "один помидор · одно яйцо",
              "highlights": [
                "a",
                "an"
              ]
            }
          }
        ]
      },
      {
        "kicker": "Шаг 3",
        "title": "Some и any: выбираем по типу предложения и намерению",
        "intro": "Оба слова могут стоять перед plural countable nouns и uncountable nouns. Разница в типичном контексте.",
        "blocks": [
          {
            "type": "table",
            "headers": [
              "Контекст",
              "Обычно",
              "Пример",
              "Перевод"
            ],
            "rows": [
              [
                "Утверждение",
                "some",
                "We have some tomatoes.",
                "У нас есть несколько помидоров."
              ],
              [
                "Отрицание",
                "any",
                "We don’t have any milk.",
                "У нас нет молока."
              ],
              [
                "Нейтральный вопрос",
                "any",
                "Do you have any cheese?",
                "У тебя есть сыр?"
              ],
              [
                "Предложение / просьба",
                "some",
                "Would you like some tea?",
                "Хотите чаю?"
              ]
            ],
            "highlights": [
              "some",
              "any"
            ]
          },
          {
            "type": "note",
            "variant": "contrast",
            "title": "Почему some возможно в вопросе",
            "text": "В предложениях и просьбах говорящий не просто проверяет наличие. Он предлагает или просит конкретное количество: Would you like some tea? Can I have some water?"
          }
        ]
      },
      {
        "kicker": "Алгоритм",
        "title": "Как выбрать форму без угадывания",
        "blocks": [
          {
            "type": "steps",
            "steps": [
              {
                "title": "1. Определи существительное",
                "text": "Можно посчитать по одному? Если да — countable. Если нет в этом значении — uncountable."
              },
              {
                "title": "2. Если countable — проверь число",
                "text": "Один предмет допускает a/an. Во множественном числе a/an невозможны."
              },
              {
                "title": "3. Посмотри на тип предложения",
                "text": "Утверждение обычно ведёт к some; вопрос или отрицание — к any."
              },
              {
                "title": "4. Проверь особый вопрос",
                "text": "В предложении или просьбе часто сохраняется some: Would you like some…? Can I have some…?"
              }
            ]
          }
        ]
      },
      {
        "kicker": "Когда нужно посчитать",
        "title": "Неисчисляемое существительное можно измерить через единицу",
        "intro": "Мы не говорим two waters в нейтральном значении «вода». Добавляем ёмкость, порцию или единицу.",
        "blocks": [
          {
            "type": "examples",
            "items": [
              {
                "en": "a bottle of water",
                "ru": "бутылка воды",
                "highlights": [
                  "a bottle of"
                ]
              },
              {
                "en": "two cups of coffee",
                "ru": "две чашки кофе",
                "highlights": [
                  "two cups of"
                ]
              },
              {
                "en": "a piece of cheese",
                "ru": "кусок сыра",
                "highlights": [
                  "a piece of"
                ]
              },
              {
                "en": "three bags of rice",
                "ru": "три пакета риса",
                "highlights": [
                  "three bags of"
                ]
              }
            ]
          }
        ]
      },
      {
        "kicker": "Контроль",
        "title": "Типичные ошибки",
        "blocks": [
          {
            "type": "mistakes",
            "items": [
              {
                "wrong": "a rice",
                "right": "some rice — немного риса",
                "reason": "Rice обычно uncountable, поэтому a не ставится."
              },
              {
                "wrong": "an bananas",
                "right": "some bananas — несколько бананов",
                "reason": "An возможно только с singular countable noun."
              },
              {
                "wrong": "We don’t have some milk.",
                "right": "We don’t have any milk. — У нас нет молока.",
                "reason": "В обычном отрицании используем any."
              },
              {
                "wrong": "Do you want any tea? (предложение гостю)",
                "right": "Would you like some tea? — Хотите чаю?",
                "reason": "В предложении чего-либо some звучит естественно."
              }
            ]
          }
        ]
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
    "intro": {
      "lead": "Частоту можно выражать двумя системами: наречиями частоты (always, usually, often, sometimes, hardly ever, never) и фразами, которые называют период или количество повторений (every day, once a week, twice a month).",
      "anchor": "Наречие частоты обычно стоит рядом с глаголом; фраза частоты чаще стоит в конце предложения.",
      "example": {
        "en": "I often walk to work. · I go swimming twice a week.",
        "ru": "Я часто хожу на работу пешком. · Я хожу плавать два раза в неделю.",
        "highlights": [
          "often",
          "twice a week"
        ]
      }
    },
    "chapters": [
      {
        "kicker": "Две системы",
        "title": "Общая частота и точное количество повторений",
        "blocks": [
          {
            "type": "scale",
            "title": "От всегда к никогда",
            "items": [
              "always — всегда",
              "usually — обычно",
              "often — часто",
              "sometimes — иногда",
              "hardly ever — почти никогда",
              "never — никогда"
            ],
            "caption": "Это смысловая шкала, а не точные математические проценты."
          },
          {
            "type": "compare",
            "columns": [
              {
                "title": "Adverbs of frequency",
                "lead": "Показывают, насколько часто что-то происходит в целом.",
                "lines": [
                  "always — всегда",
                  "usually — обычно",
                  "often — часто",
                  "sometimes — иногда",
                  "hardly ever — почти никогда",
                  "never — никогда"
                ],
                "example": {
                  "en": "We usually eat at home.",
                  "ru": "Мы обычно едим дома.",
                  "highlights": [
                    "usually"
                  ]
                }
              },
              {
                "title": "Frequency phrases",
                "lead": "Называют период или число повторений.",
                "lines": [
                  "every day — каждый день",
                  "once a week — раз в неделю",
                  "twice a month — два раза в месяц",
                  "three times a year — три раза в год"
                ],
                "example": {
                  "en": "I call my mother twice a week.",
                  "ru": "Я звоню маме два раза в неделю.",
                  "highlights": [
                    "twice a week"
                  ]
                }
              }
            ]
          }
        ]
      },
      {
        "kicker": "Позиция в предложении",
        "title": "С обычным глаголом наречие ставим перед ним",
        "blocks": [
          {
            "type": "rule",
            "title": "Базовая позиция",
            "formula": "subject + frequency adverb + main verb",
            "text": "Это самая надёжная схема для A2.",
            "example": {
              "en": "She often checks her phone.",
              "ru": "Она часто проверяет телефон.",
              "highlights": [
                "often",
                "checks"
              ]
            }
          },
          {
            "type": "table",
            "headers": [
              "Тип",
              "Схема",
              "Пример",
              "Перевод"
            ],
            "rows": [
              [
                "Обычный глагол",
                "subject + adverb + verb",
                "I usually get up at seven.",
                "Я обычно встаю в семь."
              ],
              [
                "Отрицание",
                "subject + don’t/doesn’t + adverb + verb",
                "We don’t often eat out.",
                "Мы нечасто едим вне дома."
              ],
              [
                "Модальный глагол",
                "subject + can + adverb + verb",
                "I can usually come on Friday.",
                "Обычно я могу прийти в пятницу."
              ]
            ],
            "highlights": [
              "usually",
              "often"
            ]
          }
        ]
      },
      {
        "kicker": "Особая позиция",
        "title": "С глаголом be наречие идёт после am / is / are",
        "blocks": [
          {
            "type": "rule",
            "title": "Be стоит раньше наречия",
            "formula": "subject + be + frequency adverb",
            "text": "Не переносим правило обычного глагола на be.",
            "example": {
              "en": "They are usually at home in the evening.",
              "ru": "Обычно вечером они дома.",
              "highlights": [
                "are",
                "usually"
              ]
            }
          },
          {
            "type": "compare",
            "columns": [
              {
                "title": "Обычный глагол",
                "lead": "наречие перед смысловым глаголом",
                "lines": [
                  "I often work late. — Я часто работаю допоздна."
                ],
                "example": {
                  "en": "I often work late.",
                  "ru": "Я часто работаю допоздна.",
                  "highlights": [
                    "often",
                    "work"
                  ]
                }
              },
              {
                "title": "Be",
                "lead": "наречие после be",
                "lines": [
                  "I am often tired. — Я часто бываю уставшим(ей)."
                ],
                "example": {
                  "en": "I am often tired.",
                  "ru": "Я часто устаю / бываю уставшим.",
                  "highlights": [
                    "am",
                    "often"
                  ]
                }
              }
            ]
          }
        ]
      },
      {
        "kicker": "Фразы частоты",
        "title": "Every day, once, twice, three times — обычно в конце",
        "blocks": [
          {
            "type": "table",
            "headers": [
              "Форма",
              "Значение",
              "Пример",
              "Перевод"
            ],
            "rows": [
              [
                "every day",
                "каждый день",
                "I read every day.",
                "Я читаю каждый день."
              ],
              [
                "once a week",
                "один раз в неделю",
                "We meet once a week.",
                "Мы встречаемся раз в неделю."
              ],
              [
                "twice a month",
                "два раза в месяц",
                "She travels twice a month.",
                "Она путешествует два раза в месяц."
              ],
              [
                "three times a year",
                "три раза в год",
                "They visit us three times a year.",
                "Они навещают нас три раза в год."
              ]
            ],
            "highlights": [
              "every day",
              "once a week",
              "twice a month",
              "three times a year"
            ]
          },
          {
            "type": "note",
            "variant": "info",
            "title": "Once и twice — специальные формы",
            "text": "Говорим once (не one time) и twice (не two times) в обычной речи. Начиная с трёх: three times, four times и т. д."
          }
        ]
      },
      {
        "kicker": "Вопрос",
        "title": "How often…? спрашивает именно о частоте",
        "blocks": [
          {
            "type": "compare",
            "columns": [
              {
                "title": "С обычным глаголом",
                "lead": "How often + do/does + subject + verb?",
                "lines": [
                  "How often do you exercise? — Как часто ты тренируешься?"
                ],
                "example": {
                  "en": "How often do you exercise?",
                  "ru": "Как часто ты тренируешься?",
                  "highlights": [
                    "How often",
                    "do",
                    "exercise"
                  ]
                }
              },
              {
                "title": "С be",
                "lead": "How often + be + subject …?",
                "lines": [
                  "How often are you late? — Как часто ты опаздываешь?"
                ],
                "example": {
                  "en": "How often are you late?",
                  "ru": "Как часто ты опаздываешь?",
                  "highlights": [
                    "How often",
                    "are"
                  ]
                }
              }
            ]
          },
          {
            "type": "examples",
            "items": [
              {
                "en": "I exercise three times a week.",
                "ru": "Я тренируюсь три раза в неделю.",
                "highlights": [
                  "three times a week"
                ]
              },
              {
                "en": "I’m hardly ever late.",
                "ru": "Я почти никогда не опаздываю.",
                "highlights": [
                  "hardly ever"
                ]
              }
            ]
          }
        ]
      },
      {
        "kicker": "Тонкость",
        "title": "Never уже содержит отрицательный смысл",
        "blocks": [
          {
            "type": "note",
            "variant": "warning",
            "title": "Не ставь don’t вместе с never",
            "text": "I never work on Sundays. = Я никогда не работаю по воскресеньям. Форма I don’t never… создаёт двойное отрицание и не подходит для стандартного английского."
          },
          {
            "type": "note",
            "variant": "contrast",
            "title": "Sometimes более подвижно",
            "text": "Sometimes часто стоит перед смысловым глаголом, но может стоять и в начале или конце: Sometimes I walk to work. / I walk to work sometimes. Для остальных наречий на этом уровне лучше использовать базовую позицию."
          }
        ]
      },
      {
        "kicker": "Контроль",
        "title": "Типичные ошибки",
        "blocks": [
          {
            "type": "mistakes",
            "items": [
              {
                "wrong": "I go often to the gym.",
                "right": "I often go to the gym. — Я часто хожу в спортзал.",
                "reason": "С обычным глаголом наречие обычно стоит перед ним."
              },
              {
                "wrong": "She usually is tired.",
                "right": "She is usually tired. — Она обычно уставшая.",
                "reason": "С be наречие ставится после is/am/are."
              },
              {
                "wrong": "I don’t never drink coffee.",
                "right": "I never drink coffee. — Я никогда не пью кофе.",
                "reason": "Never уже выражает отрицание."
              },
              {
                "wrong": "I see him two times a week.",
                "right": "I see him twice a week. — Я вижу его два раза в неделю.",
                "reason": "Для двух раз употребляется twice."
              }
            ]
          }
        ]
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
  },
  {
    "id": "grammar-lesson-12-like-hate-love-ing",
    "order": 4,
    "title": "Like, hate, love + -ing",
    "level": "A2.2",
    "status": "available",
    "linkedLessonId": "lesson-12",
    "page": "grammar-topic.html?id=grammar-lesson-12-like-hate-love-ing",
    "passScore": 100,
    "showCorrectAnswerOnError": false,
    "intro": {
      "lead": "После like, love, hate, enjoy мы часто называем действие как занятие или вид деятельности. Для этого используется форма verb + -ing: reading, cooking, running.",
      "anchor": "Если смысл — «мне нравится / не нравится само занятие», думай о конструкции verb of attitude + -ing.",
      "example": {
        "en": "I love cooking.",
        "ru": "Я люблю готовить.",
        "highlights": [
          "love",
          "cooking"
        ]
      }
    },
    "chapters": [
      {
        "kicker": "Смысл конструкции",
        "title": "-ing превращает действие в занятие, о котором мы говорим в целом",
        "intro": "Здесь -ing не показывает время. Оно помогает назвать деятельность: reading = чтение / процесс чтения, travelling = путешествия.",
        "blocks": [
          {
            "type": "examples",
            "items": [
              {
                "en": "I like reading.",
                "ru": "Мне нравится читать.",
                "highlights": [
                  "like",
                  "reading"
                ]
              },
              {
                "en": "She loves travelling.",
                "ru": "Она обожает путешествовать.",
                "highlights": [
                  "loves",
                  "travelling"
                ]
              },
              {
                "en": "We hate waiting.",
                "ru": "Мы ненавидим ждать.",
                "highlights": [
                  "hate",
                  "waiting"
                ]
              },
              {
                "en": "They enjoy cooking together.",
                "ru": "Им нравится готовить вместе.",
                "highlights": [
                  "enjoy",
                  "cooking"
                ]
              }
            ]
          },
          {
            "type": "note",
            "variant": "info",
            "title": "Важно",
            "text": "Форма -ing здесь относится к глаголу после like/love/hate/enjoy. Это не Present Continuous: вспомогательного be нет."
          }
        ]
      },
      {
        "kicker": "Структура",
        "title": "Утверждение, отрицание и вопрос строятся по Present Simple",
        "blocks": [
          {
            "type": "table",
            "headers": [
              "Форма",
              "Схема",
              "Пример",
              "Перевод"
            ],
            "rows": [
              [
                "Утверждение",
                "subject + like/love/hate/enjoy + verb-ing",
                "I enjoy cooking.",
                "Мне нравится готовить."
              ],
              [
                "3-е лицо",
                "he/she + likes/loves/hates/enjoys + verb-ing",
                "She loves running.",
                "Она любит бегать."
              ],
              [
                "Отрицание",
                "subject + don’t/doesn’t + like + verb-ing",
                "I don’t like driving.",
                "Мне не нравится водить."
              ],
              [
                "Вопрос",
                "Do/Does + subject + like + verb-ing?",
                "Do you like dancing?",
                "Тебе нравится танцевать?"
              ]
            ],
            "highlights": [
              "like",
              "love",
              "hate",
              "enjoy",
              "likes",
              "loves",
              "hates",
              "enjoys",
              "don’t",
              "doesn’t",
              "Do",
              "Does"
            ]
          }
        ]
      },
      {
        "kicker": "Правописание",
        "title": "Как образовать -ing форму",
        "blocks": [
          {
            "type": "table",
            "headers": [
              "Тип глагола",
              "Правило",
              "Пример",
              "Перевод"
            ],
            "rows": [
              [
                "Обычно",
                "+ ing",
                "work → working",
                "работать → работа / занятие"
              ],
              [
                "Конечная -e",
                "убираем e + ing",
                "make → making",
                "делать → процесс делания"
              ],
              [
                "Короткий ударный CVC",
                "удваиваем последнюю согласную",
                "run → running",
                "бегать → бег"
              ],
              [
                "-ie",
                "ie → y + ing",
                "lie → lying",
                "лежать → лежание"
              ]
            ]
          },
          {
            "type": "note",
            "variant": "warning",
            "title": "Не удваивай автоматически",
            "text": "Удвоение зависит от структуры и ударения. Например: visit → visiting, open → opening. На уровне A2 лучше запоминать форму вместе с новым глаголом, если она вызывает сомнение."
          }
        ]
      },
      {
        "kicker": "Сравнение",
        "title": "Like doing и would like to do — разные намерения",
        "intro": "Это различие важно: общая симпатия к занятию и конкретное желание сделать что-то — не одно и то же.",
        "blocks": [
          {
            "type": "compare",
            "columns": [
              {
                "title": "like + -ing",
                "lead": "нравится деятельность вообще",
                "lines": [
                  "общее предпочтение",
                  "занятие / привычная деятельность"
                ],
                "example": {
                  "en": "I like cooking.",
                  "ru": "Мне нравится готовить вообще.",
                  "highlights": [
                    "like",
                    "cooking"
                  ]
                }
              },
              {
                "title": "would like + to + verb",
                "lead": "хочу сделать что-то сейчас или в конкретной ситуации",
                "lines": [
                  "конкретное желание",
                  "вежливая формулировка желания"
                ],
                "example": {
                  "en": "I’d like to cook tonight.",
                  "ru": "Я хотел(а) бы приготовить сегодня вечером.",
                  "highlights": [
                    "would like",
                    "to cook"
                  ]
                }
              }
            ]
          },
          {
            "type": "note",
            "variant": "contrast",
            "title": "Like + to-infinitive тоже возможно",
            "text": "I like to get up early может означать «я предпочитаю / считаю хорошей привычкой вставать рано». I like getting up early сильнее фокусируется на удовольствии от самого действия. В разговорной речи разница не всегда строгая, но для этой темы основной шаблон — like + -ing."
          }
        ]
      },
      {
        "kicker": "Особый глагол",
        "title": "Enjoy требует -ing, а не to-infinitive",
        "blocks": [
          {
            "type": "rule",
            "title": "После enjoy",
            "formula": "enjoy + verb-ing",
            "text": "В стандартном английском нельзя сказать enjoy to do.",
            "example": {
              "en": "We enjoy spending time together.",
              "ru": "Нам нравится проводить время вместе.",
              "highlights": [
                "enjoy",
                "spending"
              ]
            }
          }
        ]
      },
      {
        "kicker": "Контроль",
        "title": "Типичные ошибки",
        "blocks": [
          {
            "type": "mistakes",
            "items": [
              {
                "wrong": "I enjoy to cook.",
                "right": "I enjoy cooking. — Мне нравится готовить.",
                "reason": "После enjoy используется -ing."
              },
              {
                "wrong": "She love running.",
                "right": "She loves running. — Она любит бегать.",
                "reason": "В Present Simple после she глагол love получает -s."
              },
              {
                "wrong": "Do you like cook?",
                "right": "Do you like cooking? — Тебе нравится готовить?",
                "reason": "После like в этой модели нужен verb-ing."
              },
              {
                "wrong": "I would like cooking tonight.",
                "right": "I would like to cook tonight. — Я хотел(а) бы приготовить сегодня вечером.",
                "reason": "Для конкретного желания: would like + to-infinitive."
              }
            ]
          }
        ]
      }
    ],
    "quizExercises": [
      {
        "id": "like-ing-choice",
        "title": "1. Выбери правильную форму",
        "instructions": "Choose the correct answer.",
        "items": [
          {
            "type": "single",
            "skill": "like + -ing",
            "prompt": "I like ___ around the town centre.",
            "options": [
              "walking",
              "walk",
              "to walking"
            ],
            "answer": 0,
            "explanation": "Есть ошибка. После like используй форму -ing."
          },
          {
            "type": "single",
            "skill": "love + -ing",
            "prompt": "We love ___ time with our friends.",
            "options": [
              "spend",
              "spending",
              "to spending"
            ],
            "answer": 1,
            "explanation": "Есть ошибка. После love используй spending."
          },
          {
            "type": "single",
            "skill": "hate + -ing",
            "prompt": "She hates ___ early.",
            "options": [
              "getting up",
              "get up",
              "to getting up"
            ],
            "answer": 0,
            "explanation": "Есть ошибка. После hate используй getting up."
          },
          {
            "type": "single",
            "skill": "would like + to",
            "prompt": "Would you like ___ football?",
            "options": [
              "playing",
              "to play",
              "play"
            ],
            "answer": 1,
            "explanation": "Есть ошибка. После would like используй to + глагол."
          }
        ]
      },
      {
        "id": "like-ing-gaps",
        "title": "2. Поставь глагол в форму -ing",
        "instructions": "Complete each sentence with the -ing form.",
        "items": [
          {
            "type": "text",
            "skill": "do → doing",
            "prompt": "What do you like ___ at the weekend? (do)",
            "answer": "doing",
            "acceptedAnswers": [
              "doing"
            ],
            "placeholder": "One word",
            "explanation": "Есть ошибка. do → doing."
          },
          {
            "type": "text",
            "skill": "swim → swimming",
            "prompt": "I enjoy ___. (swim)",
            "answer": "swimming",
            "acceptedAnswers": [
              "swimming"
            ],
            "placeholder": "One word",
            "explanation": "Есть ошибка. swim → swimming: удвой m."
          },
          {
            "type": "text",
            "skill": "meet → meeting",
            "prompt": "We like ___ for coffee. (meet)",
            "answer": "meeting",
            "acceptedAnswers": [
              "meeting"
            ],
            "placeholder": "One word",
            "explanation": "Есть ошибка. meet → meeting."
          },
          {
            "type": "text",
            "skill": "study → studying",
            "prompt": "I hate ___ at the weekend. (study)",
            "answer": "studying",
            "acceptedAnswers": [
              "studying"
            ],
            "placeholder": "One word",
            "explanation": "Есть ошибка. study → studying."
          }
        ]
      },
      {
        "id": "like-ing-order",
        "title": "3. Собери полное предложение",
        "instructions": "Put the words in the correct order and write the complete sentence.",
        "items": [
          {
            "type": "reorder",
            "skill": "love + -ing",
            "prompt": "I / love / study / English.",
            "tokens": [
              "I",
              "love",
              "studying",
              "English"
            ],
            "answer": "I love studying English.",
            "acceptedAnswers": [
              "I love studying English.",
              "I love studying English"
            ],
            "placeholder": "Write the sentence",
            "explanation": "Есть ошибка. После love используй studying."
          },
          {
            "type": "reorder",
            "skill": "вопрос",
            "prompt": "What / do / you / like / do / at the weekend?",
            "tokens": [
              "What",
              "do",
              "you",
              "like",
              "doing",
              "at the weekend"
            ],
            "answer": "What do you like doing at the weekend?",
            "acceptedAnswers": [
              "What do you like doing at the weekend?",
              "What do you like doing at the weekend"
            ],
            "placeholder": "Write the question",
            "explanation": "Есть ошибка. Проверь порядок слов и форму doing."
          },
          {
            "type": "reorder",
            "skill": "hate + -ing",
            "prompt": "She / hate / get up / early.",
            "tokens": [
              "She",
              "hates",
              "getting up",
              "early"
            ],
            "answer": "She hates getting up early.",
            "acceptedAnswers": [
              "She hates getting up early.",
              "She hates getting up early"
            ],
            "placeholder": "Write the sentence",
            "explanation": "Есть ошибка. С she используй hates; get up → getting up."
          },
          {
            "type": "reorder",
            "skill": "would like + to",
            "prompt": "Would / you / like / play / football?",
            "tokens": [
              "Would",
              "you",
              "like",
              "to play",
              "football"
            ],
            "answer": "Would you like to play football?",
            "acceptedAnswers": [
              "Would you like to play football?",
              "Would you like to play football"
            ],
            "placeholder": "Write the question",
            "explanation": "Есть ошибка. После would like используй to play."
          }
        ]
      },
      {
        "id": "like-ing-conversation",
        "title": "4. Закрепи формы из диалога",
        "instructions": "Write the correct -ing form.",
        "items": [
          {
            "type": "text",
            "skill": "get up",
            "prompt": "I don’t like ___ early. (get up)",
            "answer": "getting up",
            "acceptedAnswers": [
              "getting up"
            ],
            "placeholder": "Two words",
            "explanation": "Есть ошибка. get up → getting up."
          },
          {
            "type": "text",
            "skill": "spend",
            "prompt": "I love ___ time with my friends. (spend)",
            "answer": "spending",
            "acceptedAnswers": [
              "spending"
            ],
            "placeholder": "One word",
            "explanation": "Есть ошибка. spend → spending."
          },
          {
            "type": "text",
            "skill": "shop",
            "prompt": "I like ___ for clothes. (shop)",
            "answer": "shopping",
            "acceptedAnswers": [
              "shopping"
            ],
            "placeholder": "One word",
            "explanation": "Есть ошибка. shop → shopping: удвой p."
          },
          {
            "type": "text",
            "skill": "walk",
            "prompt": "I hate ___ around the town centre. (walk)",
            "answer": "walking",
            "acceptedAnswers": [
              "walking"
            ],
            "placeholder": "One word",
            "explanation": "Есть ошибка. walk → walking."
          }
        ]
      }
    ]
  },
  {
    "id": "grammar-lesson-14-demonstratives-here-there",
    "order": 5,
    "title": "This, that, these, those; here, there",
    "level": "A2.2",
    "status": "available",
    "linkedLessonId": "lesson-14",
    "page": "grammar-topic.html?id=grammar-lesson-14-demonstratives-here-there",
    "passScore": 100,
    "showCorrectAnswerOnError": false,
    "intro": {
      "lead": "This, that, these, those одновременно показывают два признака: расстояние от говорящего и число предметов. Here и there показывают только место.",
      "anchor": "Сначала реши: один предмет или несколько. Затем: близко или дальше. После этого выбор становится механическим.",
      "example": {
        "en": "this chair · those windows · here · there",
        "ru": "этот стул · те окна · здесь · там",
        "highlights": [
          "this",
          "those",
          "here",
          "there"
        ]
      }
    },
    "chapters": [
      {
        "kicker": "Главная схема",
        "title": "Две оси выбора: число × расстояние",
        "blocks": [
          {
            "type": "table",
            "headers": [
              "",
              "Близко к говорящему",
              "Дальше от говорящего"
            ],
            "rows": [
              [
                "Один предмет",
                "this",
                "that"
              ],
              [
                "Несколько предметов",
                "these",
                "those"
              ]
            ],
            "highlights": [
              "this",
              "that",
              "these",
              "those"
            ]
          },
          {
            "type": "examples",
            "items": [
              {
                "en": "This chair is comfortable.",
                "ru": "Этот стул удобный.",
                "highlights": [
                  "This"
                ]
              },
              {
                "en": "That building is old.",
                "ru": "То здание старое.",
                "highlights": [
                  "That"
                ]
              },
              {
                "en": "These keys are mine.",
                "ru": "Эти ключи мои.",
                "highlights": [
                  "These"
                ]
              },
              {
                "en": "Those windows are open.",
                "ru": "Те окна открыты.",
                "highlights": [
                  "Those"
                ]
              }
            ]
          }
        ]
      },
      {
        "kicker": "Два способа употребления",
        "title": "Перед существительным или вместо существительного",
        "intro": "Demonstratives могут определять существительное или сами заменять его, если предмет понятен из ситуации.",
        "blocks": [
          {
            "type": "compare",
            "columns": [
              {
                "title": "Перед существительным",
                "lead": "this/that/these/those + noun",
                "lines": [
                  "this room — эта комната",
                  "those chairs — те стулья"
                ],
                "example": {
                  "en": "This room is small.",
                  "ru": "Эта комната маленькая.",
                  "highlights": [
                    "This room"
                  ]
                }
              },
              {
                "title": "Самостоятельно",
                "lead": "слово заменяет уже понятный предмет",
                "lines": [
                  "This is mine. — Это моё.",
                  "Those are new. — Те / вон те новые."
                ],
                "example": {
                  "en": "Those are my shoes.",
                  "ru": "Вон те — мои туфли.",
                  "highlights": [
                    "Those"
                  ]
                }
              }
            ]
          }
        ]
      },
      {
        "kicker": "Согласование",
        "title": "This/that — singular; these/those — plural",
        "blocks": [
          {
            "type": "table",
            "headers": [
              "Указательное",
              "Глагол be",
              "Вопрос",
              "Перевод"
            ],
            "rows": [
              [
                "this",
                "is",
                "What is this?",
                "Что это? (близко, один предмет)"
              ],
              [
                "that",
                "is",
                "What is that?",
                "Что это / то? (дальше, один предмет)"
              ],
              [
                "these",
                "are",
                "What are these?",
                "Что это? (близко, несколько)"
              ],
              [
                "those",
                "are",
                "What are those?",
                "Что это / те? (дальше, несколько)"
              ]
            ],
            "highlights": [
              "this",
              "that",
              "these",
              "those",
              "is",
              "are"
            ]
          },
          {
            "type": "note",
            "variant": "warning",
            "title": "Число должно совпадать",
            "text": "Нельзя: these chair или that books. Сначала посмотри на существительное: singular → this/that; plural → these/those."
          }
        ]
      },
      {
        "kicker": "Место",
        "title": "Here и there не меняются по числу",
        "intro": "Here = здесь, рядом с говорящим. There = там, в другом месте / дальше. Они относятся к месту, а не к singular/plural.",
        "blocks": [
          {
            "type": "compare",
            "columns": [
              {
                "title": "here",
                "lead": "место рядом",
                "lines": [
                  "Come here. — Иди сюда.",
                  "Put it here. — Положи это здесь."
                ],
                "example": {
                  "en": "Your bag is here.",
                  "ru": "Твоя сумка здесь.",
                  "highlights": [
                    "here"
                  ]
                }
              },
              {
                "title": "there",
                "lead": "место дальше",
                "lines": [
                  "Go there. — Иди туда.",
                  "Put it there. — Положи это там."
                ],
                "example": {
                  "en": "The bus stop is over there.",
                  "ru": "Автобусная остановка вон там.",
                  "highlights": [
                    "there"
                  ]
                }
              }
            ]
          },
          {
            "type": "note",
            "variant": "contrast",
            "title": "Не путай there = «там» и there is / there are",
            "text": "My bag is there. = Моя сумка там (место). There is a bag on the chair. = На стуле есть сумка (мы сообщаем о наличии предмета). Это разные функции слова there."
          }
        ]
      },
      {
        "kicker": "Речь и ситуация",
        "title": "Расстояние определяется ситуацией, а не метрами",
        "blocks": [
          {
            "type": "paragraphs",
            "paragraphs": [
              "This/these обычно относятся к тому, что говорящий воспринимает как «здесь, со мной, в моей текущей ситуации». That/those — к тому, что он отделяет как «там / дальше / не здесь».",
              "Поэтому выбор зависит не только от физического расстояния, но и от того, на что указывает говорящий и как он организует ситуацию в разговоре."
            ]
          },
          {
            "type": "examples",
            "items": [
              {
                "en": "Look at this photo.",
                "ru": "Посмотри на эту фотографию (она у меня / перед нами).",
                "highlights": [
                  "this"
                ]
              },
              {
                "en": "Who is that man over there?",
                "ru": "Кто тот мужчина вон там?",
                "highlights": [
                  "that",
                  "over there"
                ]
              }
            ]
          }
        ]
      },
      {
        "kicker": "Контроль",
        "title": "Типичные ошибки",
        "blocks": [
          {
            "type": "mistakes",
            "items": [
              {
                "wrong": "these chair",
                "right": "this chair — этот стул",
                "reason": "Chair — singular, поэтому this."
              },
              {
                "wrong": "that books",
                "right": "those books — те книги",
                "reason": "Books — plural, поэтому those."
              },
              {
                "wrong": "What is these?",
                "right": "What are these? — Что это?",
                "reason": "These — plural, поэтому нужен are."
              },
              {
                "wrong": "These are my bag.",
                "right": "This is my bag. — Это моя сумка.",
                "reason": "Один предмет требует this + is."
              }
            ]
          }
        ]
      }
    ],
    "quizExercises": [
      {
        "id": "demonstratives-basic-choice",
        "title": "1. Выбери this, that, these или those",
        "instructions": "Choose the correct answer.",
        "items": [
          {
            "type": "single",
            "skill": "near / far + number",
            "prompt": "___ chair here is comfortable.",
            "options": [
              "This",
              "That",
              "These",
              "Those"
            ],
            "answer": 0,
            "explanation": "Есть ошибка. Проверь: один предмет или несколько, рядом он или дальше."
          },
          {
            "type": "single",
            "skill": "near / far + number",
            "prompt": "___ towels over there are clean.",
            "options": [
              "This",
              "That",
              "These",
              "Those"
            ],
            "answer": 3,
            "explanation": "Есть ошибка. Проверь число существительного и подсказку over there."
          },
          {
            "type": "single",
            "skill": "near / far + number",
            "prompt": "___ books here are mine.",
            "options": [
              "This",
              "That",
              "These",
              "Those"
            ],
            "answer": 2,
            "explanation": "Есть ошибка. Сначала определи число, затем расстояние."
          },
          {
            "type": "single",
            "skill": "near / far + number",
            "prompt": "___ lamp over there is new.",
            "options": [
              "This",
              "That",
              "These",
              "Those"
            ],
            "answer": 1,
            "explanation": "Есть ошибка. Проверь: singular + far."
          }
        ]
      },
      {
        "id": "here-there-context",
        "title": "2. Заполни пропуск подходящим словом",
        "instructions": "Write one word: this, that, these, those, here or there.",
        "items": [
          {
            "type": "text",
            "skill": "place",
            "prompt": "Come and put the bags ___, next to me.",
            "answer": "here",
            "acceptedAnswers": [
              "here"
            ],
            "placeholder": "One word",
            "explanation": "Есть ошибка. Определи, находится ли место рядом с говорящим или дальше."
          },
          {
            "type": "text",
            "skill": "place",
            "prompt": "The bike is over ___, next to the garage.",
            "answer": "there",
            "acceptedAnswers": [
              "there"
            ],
            "placeholder": "One word",
            "explanation": "Есть ошибка. Проверь значение места: здесь или там."
          },
          {
            "type": "text",
            "skill": "demonstrative",
            "prompt": "___ keys in my hand are for the front door.",
            "answer": "These",
            "acceptedAnswers": [
              "These",
              "these"
            ],
            "placeholder": "One word",
            "explanation": "Есть ошибка. Проверь число существительного и расстояние."
          },
          {
            "type": "text",
            "skill": "demonstrative",
            "prompt": "I like ___ sofa by the window over there.",
            "answer": "that",
            "acceptedAnswers": [
              "that"
            ],
            "placeholder": "One word",
            "explanation": "Есть ошибка. Проверь число существительного и подсказку over there."
          }
        ]
      },
      {
        "id": "demonstratives-correction",
        "title": "3. Исправь одну ошибку в каждом предложении",
        "instructions": "Write the complete corrected sentence.",
        "items": [
          {
            "type": "text",
            "skill": "correction",
            "prompt": "This chairs here are very comfortable.",
            "answer": "These chairs here are very comfortable.",
            "acceptedAnswers": [
              "These chairs here are very comfortable.",
              "These chairs here are very comfortable"
            ],
            "placeholder": "Write the corrected sentence",
            "explanation": "Есть ошибка. Проверь число существительного и указательное слово."
          },
          {
            "type": "text",
            "skill": "correction",
            "prompt": "These plant here needs some water.",
            "answer": "This plant here needs some water.",
            "acceptedAnswers": [
              "This plant here needs some water.",
              "This plant here needs some water"
            ],
            "placeholder": "Write the corrected sentence",
            "explanation": "Есть ошибка. Проверь: plant — единственное или множественное число?"
          },
          {
            "type": "text",
            "skill": "correction",
            "prompt": "Can you pass me that towels over there?",
            "answer": "Can you pass me those towels over there?",
            "acceptedAnswers": [
              "Can you pass me those towels over there?",
              "Can you pass me those towels over there"
            ],
            "placeholder": "Write the corrected sentence",
            "explanation": "Есть ошибка. Проверь число towels."
          },
          {
            "type": "text",
            "skill": "correction",
            "prompt": "The TV remote is over here, on that shelf across the room.",
            "answer": "The TV remote is over there, on that shelf across the room.",
            "acceptedAnswers": [
              "The TV remote is over there, on that shelf across the room.",
              "The TV remote is over there, on that shelf across the room"
            ],
            "placeholder": "Write the corrected sentence",
            "explanation": "Есть ошибка. Проверь подсказки that shelf и across the room."
          }
        ]
      },
      {
        "id": "demonstratives-build",
        "title": "4. Собери полное предложение или вопрос",
        "instructions": "Put the words in the correct order and write the complete sentence or question.",
        "items": [
          {
            "type": "reorder",
            "skill": "word order",
            "prompt": "Are / those / your / keys / over there ?",
            "tokens": [
              "Are",
              "those",
              "your",
              "keys",
              "over there"
            ],
            "answer": "Are those your keys over there?",
            "acceptedAnswers": [
              "Are those your keys over there?",
              "Are those your keys over there"
            ],
            "placeholder": "Write the question",
            "explanation": "Есть ошибка. Проверь порядок слов и указательное слово."
          },
          {
            "type": "reorder",
            "skill": "word order",
            "prompt": "Can / you / put / this / book / here ?",
            "tokens": [
              "Can",
              "you",
              "put",
              "this",
              "book",
              "here"
            ],
            "answer": "Can you put this book here?",
            "acceptedAnswers": [
              "Can you put this book here?",
              "Can you put this book here"
            ],
            "placeholder": "Write the question",
            "explanation": "Есть ошибка. Проверь порядок слов."
          },
          {
            "type": "reorder",
            "skill": "word order",
            "prompt": "Who / are / those / people / over there ?",
            "tokens": [
              "Who",
              "are",
              "those",
              "people",
              "over there"
            ],
            "answer": "Who are those people over there?",
            "acceptedAnswers": [
              "Who are those people over there?",
              "Who are those people over there"
            ],
            "placeholder": "Write the question",
            "explanation": "Есть ошибка. Проверь порядок слов и форму people."
          },
          {
            "type": "reorder",
            "skill": "word order",
            "prompt": "These / plants / here / need / water / every day .",
            "tokens": [
              "These",
              "plants",
              "here",
              "need",
              "water",
              "every day"
            ],
            "answer": "These plants here need water every day.",
            "acceptedAnswers": [
              "These plants here need water every day.",
              "These plants here need water every day"
            ],
            "placeholder": "Write the sentence",
            "explanation": "Есть ошибка. Проверь порядок слов."
          }
        ]
      }
    ]
  },
  {
    "id": "grammar-lesson-17-have-got",
    "order": 6,
    "title": "Have got",
    "level": "A2.2",
    "status": "available",
    "linkedLessonId": "lesson-17",
    "page": "grammar-topic.html?id=grammar-lesson-17-have-got",
    "passScore": 100,
    "showCorrectAnswerOnError": false,
    "intro": {
      "lead": "Have got — очень частый способ сказать, что у человека или предмета что-то есть, а также описать отношения, признаки и некоторые состояния. По смыслу в настоящем времени have got обычно равно have, но вопрос и отрицание строятся по другой модели.",
      "anchor": "Сначала определи смысл: речь о наличии / принадлежности / состоянии сейчас? Тогда have got возможно. Затем выбери have или has по подлежащему.",
      "example": {
        "en": "I’ve got a new laptop.",
        "ru": "У меня есть новый ноутбук.",
        "highlights": [
          "’ve got"
        ]
      }
    },
    "chapters": [
      {
        "kicker": "Значение",
        "title": "Have got говорит о том, что есть у человека или предмета сейчас",
        "intro": "В этой конструкции got не делает предложение прошедшим. Всё сочетание have got / has got относится к настоящему времени.",
        "blocks": [
          {
            "type": "examples",
            "items": [
              {
                "en": "We’ve got a small garden.",
                "ru": "У нас есть небольшой сад.",
                "highlights": [
                  "’ve got"
                ]
              },
              {
                "en": "She’s got two brothers.",
                "ru": "У неё есть два брата.",
                "highlights": [
                  "’s got"
                ]
              },
              {
                "en": "The house has got three bedrooms.",
                "ru": "В доме три спальни.",
                "highlights": [
                  "has got"
                ]
              },
              {
                "en": "I’ve got a headache.",
                "ru": "У меня болит голова.",
                "highlights": [
                  "’ve got"
                ]
              }
            ]
          },
          {
            "type": "note",
            "variant": "contrast",
            "title": "Это настоящее время",
            "text": "I’ve got a car = У меня есть машина сейчас. Не переводи got отдельно как «получил». В have got слова работают как одна грамматическая конструкция."
          }
        ]
      },
      {
        "kicker": "Утверждение",
        "title": "Have got или has got: форма зависит только от подлежащего",
        "blocks": [
          {
            "type": "table",
            "headers": [
              "Подлежащее",
              "Полная форма",
              "Обычное сокращение",
              "Перевод"
            ],
            "rows": [
              [
                "I",
                "I have got",
                "I’ve got",
                "у меня есть"
              ],
              [
                "you",
                "you have got",
                "you’ve got",
                "у тебя / вас есть"
              ],
              [
                "we",
                "we have got",
                "we’ve got",
                "у нас есть"
              ],
              [
                "they",
                "they have got",
                "they’ve got",
                "у них есть"
              ],
              [
                "he",
                "he has got",
                "he’s got",
                "у него есть"
              ],
              [
                "she",
                "she has got",
                "she’s got",
                "у неё есть"
              ],
              [
                "it",
                "it has got",
                "it’s got",
                "у него / неё (о предмете, животном) есть"
              ]
            ],
            "highlights": [
              "have got",
              "has got",
              "’ve got",
              "’s got"
            ]
          },
          {
            "type": "note",
            "variant": "warning",
            "title": "Не забывай has с he / she / it",
            "text": "Нельзя: She have got. Правильно: She has got / She’s got."
          }
        ]
      },
      {
        "kicker": "Отрицание и вопрос",
        "title": "Do/does здесь не нужны: меняется сама форма have / has",
        "blocks": [
          {
            "type": "table",
            "headers": [
              "Функция",
              "I / you / we / they",
              "he / she / it"
            ],
            "rows": [
              [
                "Утверждение",
                "have got",
                "has got"
              ],
              [
                "Отрицание",
                "haven’t got",
                "hasn’t got"
              ],
              [
                "Вопрос",
                "Have ... got?",
                "Has ... got?"
              ],
              [
                "Короткий ответ +",
                "Yes, ... have.",
                "Yes, ... has."
              ],
              [
                "Короткий ответ −",
                "No, ... haven’t.",
                "No, ... hasn’t."
              ]
            ],
            "highlights": [
              "haven’t got",
              "hasn’t got",
              "Have",
              "Has",
              "have",
              "has"
            ]
          },
          {
            "type": "examples",
            "items": [
              {
                "en": "Have you got a laptop? — Yes, I have.",
                "ru": "У тебя есть ноутбук? — Да.",
                "highlights": [
                  "Have",
                  "got",
                  "have"
                ]
              },
              {
                "en": "Has Kenji got any children? — No, he hasn’t.",
                "ru": "У Кэндзи есть дети? — Нет.",
                "highlights": [
                  "Has",
                  "got",
                  "hasn’t"
                ]
              },
              {
                "en": "We haven’t got any coffee.",
                "ru": "У нас нет кофе.",
                "highlights": [
                  "haven’t got"
                ]
              }
            ]
          },
          {
            "type": "note",
            "variant": "warning",
            "title": "Короткий ответ не заканчивается на got",
            "text": "Правильно: Yes, I have. / No, she hasn’t. Не нужно: Yes, I have got."
          }
        ]
      },
      {
        "kicker": "Have got vs have",
        "title": "По значению «иметь» они часто равны, но грамматика вопросов разная",
        "intro": "В британском английском have got особенно типично для наличия и принадлежности. Обычное have также правильно. В американском английском have часто встречается чаще.",
        "blocks": [
          {
            "type": "compare",
            "columns": [
              {
                "title": "have got",
                "lead": "наличие / принадлежность сейчас",
                "lines": [
                  "I’ve got a car.",
                  "Have you got a car?",
                  "I haven’t got a car."
                ],
                "example": {
                  "en": "She’s got a new phone.",
                  "ru": "У неё есть новый телефон.",
                  "highlights": [
                    "’s got"
                  ]
                }
              },
              {
                "title": "have",
                "lead": "то же значение, но Present Simple",
                "lines": [
                  "I have a car.",
                  "Do you have a car?",
                  "I don’t have a car."
                ],
                "example": {
                  "en": "She has a new phone.",
                  "ru": "У неё есть новый телефон.",
                  "highlights": [
                    "has"
                  ]
                }
              }
            ]
          },
          {
            "type": "note",
            "variant": "contrast",
            "title": "С действиями обычно нужен обычный have",
            "text": "Have breakfast, have a shower, have a class, have a good time — это действия / события. Здесь строим Present Simple: I have breakfast at 8. Do you have breakfast at home? Фраза I’ve got breakfast означает скорее «у меня есть завтрак / завтрак имеется», а не «я завтракаю»."
          }
        ]
      },
      {
        "kicker": "Сокращения",
        "title": "I’ve got и she’s got нужно читать как единый грамматический блок",
        "blocks": [
          {
            "type": "table",
            "headers": [
              "Форма",
              "Что означает",
              "Пример"
            ],
            "rows": [
              [
                "I’ve got",
                "I have got",
                "I’ve got time."
              ],
              [
                "she’s got",
                "she has got",
                "She’s got a car."
              ],
              [
                "haven’t got",
                "have not got",
                "We haven’t got milk."
              ],
              [
                "hasn’t got",
                "has not got",
                "He hasn’t got a laptop."
              ]
            ],
            "highlights": [
              "I’ve got",
              "she’s got",
              "haven’t got",
              "hasn’t got"
            ]
          },
          {
            "type": "note",
            "variant": "contrast",
            "title": "’s может быть is или has",
            "text": "She’s tired = She is tired. She’s got a car = She has got a car. Слово got сразу показывает, что ’s здесь означает has."
          }
        ]
      },
      {
        "kicker": "Алгоритм",
        "title": "Как быстро построить предложение",
        "blocks": [
          {
            "type": "steps",
            "items": [
              {
                "title": "1. Определи подлежащее",
                "text": "I/you/we/they → have; he/she/it → has."
              },
              {
                "title": "2. Выбери тип предложения",
                "text": "Утверждение: have/has got. Отрицание: haven’t/hasn’t got. Вопрос: Have/Has + subject + got?"
              },
              {
                "title": "3. Для короткого ответа убери got",
                "text": "Have you got ...? — Yes, I have. / No, I haven’t."
              },
              {
                "title": "4. Проверь смысл have",
                "text": "Если have означает действие (have breakfast, have a shower), используй обычный Present Simple с do/does."
              }
            ]
          },
          {
            "type": "mistakes",
            "items": [
              {
                "wrong": "Does she have got a car?",
                "right": "Has she got a car? / Does she have a car?",
                "reason": "Нельзя смешивать две модели вопроса."
              },
              {
                "wrong": "He haven’t got a laptop.",
                "right": "He hasn’t got a laptop.",
                "reason": "С he/she/it используется has / hasn’t."
              },
              {
                "wrong": "Have got you any money?",
                "right": "Have you got any money?",
                "reason": "В вопросе подлежащее стоит между Have и got."
              },
              {
                "wrong": "Yes, I’ve.",
                "right": "Yes, I have.",
                "reason": "В коротком ответе have/has не сокращаются таким способом."
              }
            ]
          }
        ]
      }
    ],
    "quizExercises": [
      {
        "id": "have-got-basic",
        "title": "1. Выбери правильную форму",
        "instructions": "Choose the correct answer.",
        "items": [
          {
            "type": "single",
            "skill": "form",
            "prompt": "I ___ a new laptop.",
            "options": [
              "have got",
              "has got",
              "haven’t got"
            ],
            "answer": 0,
            "explanation": "Проверь форму с I."
          },
          {
            "type": "single",
            "skill": "form",
            "prompt": "She ___ two brothers.",
            "options": [
              "have got",
              "has got",
              "haven’t got"
            ],
            "answer": 1,
            "explanation": "Проверь форму с she."
          },
          {
            "type": "single",
            "skill": "negative",
            "prompt": "We ___ any coffee.",
            "options": [
              "haven’t got",
              "hasn’t got",
              "don’t got"
            ],
            "answer": 0,
            "explanation": "Проверь отрицание с we."
          },
          {
            "type": "single",
            "skill": "question",
            "prompt": "___ he got a car?",
            "options": [
              "Have",
              "Has",
              "Does"
            ],
            "answer": 1,
            "explanation": "Вопрос have got не требует does."
          }
        ]
      },
      {
        "id": "have-got-complete",
        "title": "2. Впиши правильную форму",
        "instructions": "Complete each sentence with a form of have got.",
        "items": [
          {
            "type": "text",
            "skill": "affirmative",
            "prompt": "They ___ a new flat.",
            "answer": "have got",
            "acceptedAnswers": [
              "have got",
              "'ve got",
              "’ve got"
            ],
            "placeholder": "have got / ...",
            "explanation": "Есть ошибка. Проверь подлежащее they."
          },
          {
            "type": "text",
            "skill": "affirmative",
            "prompt": "My sister ___ a bike.",
            "answer": "has got",
            "acceptedAnswers": [
              "has got",
              "'s got",
              "’s got"
            ],
            "placeholder": "has got / ...",
            "explanation": "Есть ошибка. Проверь форму с my sister."
          },
          {
            "type": "text",
            "skill": "negative",
            "prompt": "I ___ much time today.",
            "answer": "haven’t got",
            "acceptedAnswers": [
              "haven't got",
              "haven’t got",
              "have not got"
            ],
            "placeholder": "negative form",
            "explanation": "Есть ошибка. Нужна отрицательная форма с I."
          },
          {
            "type": "text",
            "skill": "question",
            "prompt": "___ a lot of homework?",
            "answer": "Have you got",
            "acceptedAnswers": [
              "Have you got",
              "have you got"
            ],
            "placeholder": "question form",
            "explanation": "Есть ошибка. Вспомни порядок Have + subject + got."
          }
        ]
      },
      {
        "id": "have-got-correction",
        "title": "3. Исправь одну ошибку",
        "instructions": "Write the complete corrected sentence.",
        "items": [
          {
            "type": "text",
            "skill": "correction",
            "prompt": "Do you have got a laptop?",
            "answer": "Have you got a laptop?",
            "acceptedAnswers": [
              "Have you got a laptop?",
              "Have you got a laptop"
            ],
            "placeholder": "Correct the sentence",
            "explanation": "Есть ошибка. Не смешивай Do you have...? и Have you got...?"
          },
          {
            "type": "text",
            "skill": "correction",
            "prompt": "She haven’t got a car.",
            "answer": "She hasn’t got a car.",
            "acceptedAnswers": [
              "She hasn't got a car.",
              "She hasn't got a car",
              "She hasn’t got a car.",
              "She hasn’t got a car"
            ],
            "placeholder": "Correct the sentence",
            "explanation": "Есть ошибка. Проверь форму с she."
          },
          {
            "type": "text",
            "skill": "correction",
            "prompt": "Has they got any children?",
            "answer": "Have they got any children?",
            "acceptedAnswers": [
              "Have they got any children?",
              "Have they got any children"
            ],
            "placeholder": "Correct the sentence",
            "explanation": "Есть ошибка. Проверь форму с they."
          },
          {
            "type": "text",
            "skill": "short answer",
            "prompt": "Have you got a car? — Yes, I’ve.",
            "answer": "Have you got a car? — Yes, I have.",
            "acceptedAnswers": [
              "Have you got a car? — Yes, I have.",
              "Have you got a car? - Yes, I have.",
              "Yes, I have.",
              "Yes, I have"
            ],
            "placeholder": "Correct the short answer",
            "explanation": "Есть ошибка. В коротком ответе нужна форма have без got."
          }
        ]
      },
      {
        "id": "have-got-build",
        "title": "4. Собери предложение или вопрос",
        "instructions": "Put the words in the correct order and write the complete sentence or question.",
        "items": [
          {
            "type": "reorder",
            "skill": "word order",
            "prompt": "you / Have / got / a / new / phone ?",
            "tokens": [
              "Have",
              "you",
              "got",
              "a",
              "new",
              "phone"
            ],
            "answer": "Have you got a new phone?",
            "acceptedAnswers": [
              "Have you got a new phone?",
              "Have you got a new phone"
            ],
            "placeholder": "Write the question",
            "explanation": "Есть ошибка. Проверь порядок Have + you + got."
          },
          {
            "type": "reorder",
            "skill": "word order",
            "prompt": "got / hasn’t / He / any / money .",
            "tokens": [
              "He",
              "hasn’t",
              "got",
              "any",
              "money"
            ],
            "answer": "He hasn’t got any money.",
            "acceptedAnswers": [
              "He hasn't got any money.",
              "He hasn't got any money",
              "He hasn’t got any money.",
              "He hasn’t got any money"
            ],
            "placeholder": "Write the sentence",
            "explanation": "Есть ошибка. Проверь порядок слов в отрицании."
          },
          {
            "type": "reorder",
            "skill": "word order",
            "prompt": "many / children / they / Have / got ?",
            "tokens": [
              "Have",
              "they",
              "got",
              "many",
              "children"
            ],
            "answer": "Have they got many children?",
            "acceptedAnswers": [
              "Have they got many children?",
              "Have they got many children"
            ],
            "placeholder": "Write the question",
            "explanation": "Есть ошибка. Проверь порядок слов в вопросе."
          },
          {
            "type": "reorder",
            "skill": "short answer",
            "prompt": "yes / has / she .",
            "tokens": [
              "Yes",
              "she",
              "has"
            ],
            "answer": "Yes, she has.",
            "acceptedAnswers": [
              "Yes, she has.",
              "Yes, she has",
              "Yes she has.",
              "Yes she has"
            ],
            "placeholder": "Write the short answer",
            "explanation": "Есть ошибка. Короткий ответ заканчивается на has, без got."
          }
        ]
      }
    ]
  },
  {
    "id": "grammar-lesson-19-there-is-there-are",
    "order": 7,
    "title": "There is / there are",
    "level": "A2.2",
    "status": "available",
    "linkedLessonId": "lesson-19",
    "page": "grammar-topic.html?id=grammar-lesson-19-there-is-there-are",
    "passScore": 100,
    "showCorrectAnswerOnError": false,
    "intro": {
      "lead": "There is / there are нужны, когда мы сообщаем, что что-то существует или находится в определённом месте. По-русски мы часто начинаем с места: «В городе есть парк». По-английски естественная модель — There is a park in the town.",
      "example": {
        "en": "There are some shops near the flat.",
        "ru": "Рядом с квартирой есть несколько магазинов.",
        "highlights": [
          "There are"
        ]
      }
    },
    "chapters": [
      {
        "kicker": "Смысл конструкции",
        "title": "There is / there are вводят новый объект: «есть / находится / имеются»",
        "intro": "Слово there здесь не переводится как самостоятельное «там». Оно является частью конструкции. Место обычно называется позже: in the kitchen, near here, on King Street.",
        "blocks": [
          {
            "type": "examples",
            "items": [
              {
                "en": "There is a café near the station.",
                "ru": "Рядом со станцией есть кафе.",
                "highlights": [
                  "There is"
                ]
              },
              {
                "en": "There are two bedrooms in the flat.",
                "ru": "В квартире две спальни.",
                "highlights": [
                  "There are"
                ]
              },
              {
                "en": "There is a lot of traffic in the morning.",
                "ru": "Утром здесь много машин / интенсивное движение.",
                "highlights": [
                  "There is"
                ]
              }
            ]
          },
          {
            "type": "note",
            "variant": "contrast",
            "title": "Не путай с there = «там»",
            "text": "There is a park there. Первая часть there is — грамматическая конструкция «есть», последнее there — обычное наречие «там»."
          }
        ]
      },
      {
        "kicker": "Единственное и множественное",
        "title": "Выбирай is или are по существительному после конструкции",
        "blocks": [
          {
            "type": "table",
            "headers": [
              "Что идёт после there",
              "Утверждение",
              "Пример",
              "Перевод"
            ],
            "rows": [
              [
                "одно исчисляемое существительное",
                "There is / There’s",
                "There’s a supermarket nearby.",
                "Рядом есть супермаркет."
              ],
              [
                "неисчисляемое существительное",
                "There is / There’s",
                "There’s some noise outside.",
                "На улице слышен шум."
              ],
              [
                "множественное число",
                "There are",
                "There are some cafés here.",
                "Здесь есть несколько кафе."
              ]
            ],
            "highlights": [
              "There is",
              "There’s",
              "There are"
            ]
          },
          {
            "type": "note",
            "variant": "warning",
            "title": "There’s не употребляй как норму перед множественным числом в учебных заданиях",
            "text": "Для A2 ориентируйся на стандарт: There’s a shop, но There are two shops. В быстрой разговорной речи можно услышать There’s + plural, однако в письменной и учебной речи выбирай there are."
          }
        ]
      },
      {
        "kicker": "Отрицание и вопрос",
        "title": "В отрицании добавляем not, а в вопросе переносим is / are перед there",
        "blocks": [
          {
            "type": "table",
            "headers": [
              "Функция",
              "Singular / uncountable",
              "Plural"
            ],
            "rows": [
              [
                "Утверждение",
                "There is a café.",
                "There are some cafés."
              ],
              [
                "Отрицание",
                "There isn’t a café.",
                "There aren’t any cafés."
              ],
              [
                "Вопрос",
                "Is there a café?",
                "Are there any cafés?"
              ],
              [
                "Короткий ответ +",
                "Yes, there is.",
                "Yes, there are."
              ],
              [
                "Короткий ответ −",
                "No, there isn’t.",
                "No, there aren’t."
              ]
            ],
            "highlights": [
              "There isn’t",
              "There aren’t",
              "Is there",
              "Are there",
              "Yes, there is",
              "No, there aren’t"
            ]
          },
          {
            "type": "examples",
            "items": [
              {
                "en": "Is there a supermarket near here? — Yes, there is.",
                "ru": "Рядом есть супермаркет? — Да.",
                "highlights": [
                  "Is there",
                  "there is"
                ]
              },
              {
                "en": "Are there any restaurants? — No, there aren’t.",
                "ru": "Есть какие-нибудь рестораны? — Нет.",
                "highlights": [
                  "Are there",
                  "there aren’t"
                ]
              }
            ]
          },
          {
            "type": "note",
            "variant": "warning",
            "title": "Короткий ответ должен совпадать по числу",
            "text": "Is there ...? → Yes, there is / No, there isn’t. Are there ...? → Yes, there are / No, there aren’t."
          }
        ]
      },
      {
        "kicker": "Количество",
        "title": "Some / any, much / many и a lot of зависят от типа существительного и вида предложения",
        "blocks": [
          {
            "type": "table",
            "headers": [
              "Форма",
              "С чем употребляется",
              "Где типично",
              "Пример"
            ],
            "rows": [
              [
                "some",
                "множественное / неисчисляемое",
                "утверждение",
                "There are some shops. / There is some noise."
              ],
              [
                "any",
                "множественное / неисчисляемое",
                "вопрос и отрицание",
                "Are there any shops? / There isn’t any noise."
              ],
              [
                "many",
                "исчисляемое множественное",
                "особенно вопрос/отрицание",
                "Are there many cafés?"
              ],
              [
                "much",
                "неисчисляемое",
                "особенно вопрос/отрицание",
                "Is there much traffic?"
              ],
              [
                "a lot of / lots of",
                "оба типа",
                "очень естественно в утверждении",
                "There are lots of parks. / There is a lot of traffic."
              ]
            ],
            "highlights": [
              "some",
              "any",
              "many",
              "much",
              "a lot of",
              "lots of"
            ]
          },
          {
            "type": "compare",
            "columns": [
              {
                "title": "Countable plural",
                "lead": "можно посчитать",
                "lines": [
                  "shops, cafés, people, eggs"
                ],
                "example": {
                  "en": "There aren’t many shops.",
                  "ru": "Магазинов немного.",
                  "highlights": [
                    "many"
                  ]
                }
              },
              {
                "title": "Uncountable",
                "lead": "не считаем отдельными единицами",
                "lines": [
                  "traffic, noise, water, money"
                ],
                "example": {
                  "en": "There isn’t much traffic.",
                  "ru": "Машин / движения немного.",
                  "highlights": [
                    "much"
                  ]
                }
              }
            ]
          },
          {
            "type": "note",
            "variant": "warning",
            "title": "После a lot нужен of",
            "text": "Правильно: a lot of traffic, a lot of shops. Lots of тоже всегда содержит of. Нельзя: a lot traffic."
          }
        ]
      },
      {
        "kicker": "There is vs it is",
        "title": "There is вводит объект, it is говорит об уже известном объекте",
        "blocks": [
          {
            "type": "compare",
            "columns": [
              {
                "title": "There is / are",
                "lead": "сообщаем, что объект существует",
                "lines": [
                  "There is a café near my house.",
                  "There are two parks in this area."
                ],
                "example": {
                  "en": "There’s a new oven in the kitchen.",
                  "ru": "На кухне есть новая духовка.",
                  "highlights": [
                    "There’s"
                  ]
                }
              },
              {
                "title": "It is / they are",
                "lead": "описываем уже названный объект",
                "lines": [
                  "The café is small. It is very quiet.",
                  "The parks are beautiful. They are close to home."
                ],
                "example": {
                  "en": "The oven is new. It is very good.",
                  "ru": "Духовка новая. Она очень хорошая.",
                  "highlights": [
                    "It is"
                  ]
                }
              }
            ]
          },
          {
            "type": "note",
            "variant": "contrast",
            "title": "Типичная последовательность",
            "text": "There is a restaurant near my house. It is small but very good. Сначала вводим restaurant через there is, затем заменяем уже известный объект местоимением it."
          }
        ]
      },
      {
        "kicker": "Алгоритм и ошибки",
        "title": "Проверяй число, тип существительного и порядок слов",
        "blocks": [
          {
            "type": "steps",
            "items": [
              {
                "title": "1. Определи число",
                "text": "Один объект или неисчисляемое → is. Несколько объектов → are."
              },
              {
                "title": "2. Определи тип предложения",
                "text": "Утверждение: There is/are. Отрицание: There isn’t/aren’t. Вопрос: Is/Are there...?"
              },
              {
                "title": "3. Проверь определитель количества",
                "text": "some обычно в утверждении; any — в вопросах/отрицаниях; many — с plural countable; much — с uncountable."
              },
              {
                "title": "4. Если это вопрос, не добавляй do/does",
                "text": "Правильно: Is there...? / Are there...? Конструкция сама образует вопрос перестановкой is/are."
              }
            ]
          },
          {
            "type": "mistakes",
            "items": [
              {
                "wrong": "There are a lot of traffic.",
                "right": "There is a lot of traffic.",
                "reason": "Traffic — неисчисляемое, поэтому there is."
              },
              {
                "wrong": "There are any shops near here?",
                "right": "Are there any shops near here?",
                "reason": "В вопросе are ставится перед there."
              },
              {
                "wrong": "Is there many people?",
                "right": "Are there many people?",
                "reason": "People — множественное число."
              },
              {
                "wrong": "No, there aren’t. (после Is there...?)",
                "right": "No, there isn’t.",
                "reason": "Короткий ответ должен совпадать с формой вопроса."
              }
            ]
          }
        ]
      }
    ],
    "quizExercises": [
      {
        "id": "there-basic",
        "title": "1. Выбери there is или there are",
        "instructions": "Choose the correct form.",
        "items": [
          {
            "type": "single",
            "skill": "number",
            "prompt": "___ a supermarket near my house.",
            "options": [
              "There is",
              "There are"
            ],
            "answer": 0,
            "explanation": "Проверь число существительного."
          },
          {
            "type": "single",
            "skill": "number",
            "prompt": "___ two cafés in this street.",
            "options": [
              "There is",
              "There are"
            ],
            "answer": 1,
            "explanation": "Проверь число существительного."
          },
          {
            "type": "single",
            "skill": "uncountable",
            "prompt": "___ a lot of traffic in the morning.",
            "options": [
              "There is",
              "There are"
            ],
            "answer": 0,
            "explanation": "Traffic — неисчисляемое существительное."
          },
          {
            "type": "single",
            "skill": "plural",
            "prompt": "___ some shops near the station.",
            "options": [
              "There is",
              "There are"
            ],
            "answer": 1,
            "explanation": "Shops — множественное число."
          }
        ]
      },
      {
        "id": "there-forms",
        "title": "2. Построй отрицание или вопрос",
        "instructions": "Complete the sentence with the correct form.",
        "items": [
          {
            "type": "text",
            "skill": "negative",
            "prompt": "There ___ a school near here. (negative)",
            "answer": "isn’t",
            "acceptedAnswers": [
              "isn't",
              "isn’t",
              "is not"
            ],
            "placeholder": "negative form",
            "explanation": "Проверь отрицание с singular."
          },
          {
            "type": "text",
            "skill": "negative",
            "prompt": "There ___ any restaurants in this street. (negative)",
            "answer": "aren’t",
            "acceptedAnswers": [
              "aren't",
              "aren’t",
              "are not"
            ],
            "placeholder": "negative form",
            "explanation": "Проверь отрицание с plural."
          },
          {
            "type": "text",
            "skill": "question",
            "prompt": "___ there a park near your home?",
            "answer": "Is",
            "acceptedAnswers": [
              "Is",
              "is"
            ],
            "placeholder": "one word",
            "explanation": "Проверь вопрос с singular."
          },
          {
            "type": "text",
            "skill": "question",
            "prompt": "___ there any shops nearby?",
            "answer": "Are",
            "acceptedAnswers": [
              "Are",
              "are"
            ],
            "placeholder": "one word",
            "explanation": "Проверь вопрос с plural."
          }
        ]
      },
      {
        "id": "there-quantity",
        "title": "3. Выбери слово количества по контексту",
        "instructions": "Choose the best option.",
        "items": [
          {
            "type": "single",
            "skill": "some-any",
            "prompt": "There are ___ small shops near the flat.",
            "options": [
              "some",
              "any",
              "much"
            ],
            "answer": 0,
            "explanation": "Это утвердительное предложение с plural noun."
          },
          {
            "type": "single",
            "skill": "some-any",
            "prompt": "Are there ___ cafés near here?",
            "options": [
              "some",
              "any",
              "much"
            ],
            "answer": 1,
            "explanation": "Это вопрос с plural noun."
          },
          {
            "type": "single",
            "skill": "much-many",
            "prompt": "There isn’t ___ traffic at night.",
            "options": [
              "many",
              "much",
              "a"
            ],
            "answer": 1,
            "explanation": "Traffic — неисчисляемое."
          },
          {
            "type": "single",
            "skill": "much-many",
            "prompt": "There aren’t ___ people here today.",
            "options": [
              "many",
              "much",
              "a lot"
            ],
            "answer": 0,
            "explanation": "People — множественное исчисляемое."
          }
        ]
      },
      {
        "id": "there-build",
        "title": "4. Собери правильное предложение или вопрос",
        "instructions": "Put the words in the correct order and write the complete sentence or question.",
        "items": [
          {
            "type": "reorder",
            "skill": "word order",
            "prompt": "there / Is / a / supermarket / near / here ?",
            "tokens": [
              "Is",
              "there",
              "a",
              "supermarket",
              "near",
              "here"
            ],
            "answer": "Is there a supermarket near here?",
            "acceptedAnswers": [
              "Is there a supermarket near here?",
              "Is there a supermarket near here"
            ],
            "placeholder": "Write the question",
            "explanation": "Проверь порядок Is + there + noun."
          },
          {
            "type": "reorder",
            "skill": "word order",
            "prompt": "aren’t / There / any / shops / nearby .",
            "tokens": [
              "There",
              "aren’t",
              "any",
              "shops",
              "nearby"
            ],
            "answer": "There aren’t any shops nearby.",
            "acceptedAnswers": [
              "There aren't any shops nearby.",
              "There aren't any shops nearby",
              "There aren’t any shops nearby.",
              "There aren’t any shops nearby"
            ],
            "placeholder": "Write the sentence",
            "explanation": "Проверь отрицательную форму plural."
          },
          {
            "type": "reorder",
            "skill": "quantity",
            "prompt": "a / There / lot / is / of / traffic .",
            "tokens": [
              "There",
              "is",
              "a",
              "lot",
              "of",
              "traffic"
            ],
            "answer": "There is a lot of traffic.",
            "acceptedAnswers": [
              "There is a lot of traffic.",
              "There is a lot of traffic"
            ],
            "placeholder": "Write the sentence",
            "explanation": "Не забудь of после a lot."
          },
          {
            "type": "reorder",
            "skill": "short answer",
            "prompt": "there / No / isn’t .",
            "tokens": [
              "No",
              "there",
              "isn’t"
            ],
            "answer": "No, there isn’t.",
            "acceptedAnswers": [
              "No, there isn't.",
              "No, there isn't",
              "No, there isn’t.",
              "No, there isn’t",
              "No there isn't",
              "No there isn’t"
            ],
            "placeholder": "Write the short answer",
            "explanation": "К Is there...? нужен short answer с is/isn’t."
          }
        ]
      }
    ]
  }
];
