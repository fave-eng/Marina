window.APP_CONFIG = {
  student: {
    id: "marina",
    nameRu: "Марина",
    nameEn: "Marina",
    level: "A2.2",
    textbook: "Speakout",
    textbookEdition: "3rd edition A2"
  },

  supabase: {
    url: "",
    anonKey: "",
    authMode: "none",
    tables: {
      homework: "homework_progress",
      vocabulary: "vocabulary_progress",
      vocabularyTopics: "vocabulary_topic_progress",
      grammar: "grammar_progress"
    }
  },

  features: {
    homework: true,
    vocabulary: true,
    grammar: true,
    cloudSync: true,
    telegramNotifications: false
  }
};
