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
    url: "https://congkctcoywheykqzkby.supabase.co",
    anonKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNvbmdrY3Rjb3l3aGV5a3F6a2J5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ0Nzg2OTcsImV4cCI6MjEwMDA1NDY5N30.NVne78XTX781gRlLj1WaFwEcuIAydG9iXa9O2HBvrr8",
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
