// ===== TRANSLATIONS SYSTEM =====
const translations = {
    en: {
        siteTitle: "Nutrition Hub",
        navFoods: "Foods",
        navCalculator: "Diet Calculator",
        heroTitle: "Discover Your Perfect Nutrition Plan",
        heroSubtitle: "Explore thousands of foods, track nutrients, and create your personalized diet plan",
        searchPlaceholder: "Search for foods...",
        searchLabel: "Search Food",
        dietInfoTitle: "What is Diet?",
        dietInfoWhatTitle: "Definition",
        dietInfoWhatText: "Diet is the set of foods that a person habitually consumes. It doesn't necessarily mean calorie restriction, but rather a balanced way of eating to maintain or improve one's health.",
        dietInfoBenefitsTitle: "Benefits",
        dietInfoBenefitsText: "A balanced diet offers numerous benefits: improves daily energy, supports the immune system, helps maintain a healthy weight, improves cardiovascular health, and promotes mental well-being.",
        dietInfoBalanceTitle: "Nutritional Balance",
        dietInfoBalanceText: "A balanced diet includes proteins for muscle building, carbohydrates for energy, healthy fats for vital functions, and essential vitamins and minerals for proper body function.",
        dietInfoGoalsTitle: "Goals",
        dietInfoGoalsText: "Whether you want to lose weight, gain weight, or simply maintain your current weight, a personalized diet based on your needs is essential to achieve your goals in a healthy and sustainable way.",
        foodsTitle: "Nutritional Database",
        foodsSubtitle: "Browse our comprehensive collection of foods with detailed nutritional information",
        filterAll: "All",
        filterFruits: "Fruits",
        filterVegetables: "Vegetables",
        filterProteins: "Proteins",
        filterGrains: "Grains",
        filterDairy: "Dairy",
        filterNuts: "Nuts & Seeds",
        filterBeverages: "Beverages",
        filterOils: "Oils & Fats",
        sugar: "Sugar",
        sodium: "Sodium",
        standardPortion: "Standard Portion",
        calculatorTitle: "Personalized Diet Calculator",
        calculatorSubtitle: "Get your custom meal plan based on your goals and body metrics",
        formTitle: "Your Information",
        labelGender: "Gender",
        genderMale: "Male",
        genderFemale: "Female",
        labelAge: "Age",
        labelHeight: "Height (cm)",
        labelWeight: "Weight (kg)",
        labelActivity: "Activity Level",
        activitySedentary: "Sedentary (little or no exercise)",
        activityLight: "Lightly active (light exercise 1-3 days/week)",
        activityModerate: "Moderately active (moderate exercise 3-5 days/week)",
        activityActive: "Very active (hard exercise 6-7 days/week)",
        activityExtra: "Extra active (very hard exercise, physical job)",
        labelGoal: "Goal",
        goalLose: "Lose Weight",
        goalMaintain: "Maintain Weight",
        goalGain: "Gain Weight",
        labelGoalAmount: "Weekly Weight Change (g)",
        goalAmountHint: "Recommended: 500g per week for healthy progress",
        btnCalculate: "Calculate My Diet Plan",
        resultsTitle: "Your Diet Plan",
        footerText: "© 2024 Nutrition Hub - Your complete nutrition guide",
        calories: "Calories",
        protein: "Protein",
        carbs: "Carbs",
        fat: "Fat",
        fiber: "Fiber",
        per100g: "per 100g",
        noResults: "No results found",
        bmr: "Basal Metabolic Rate (BMR)",
        tdee: "Total Daily Energy Expenditure (TDEE)",
        dailyCalories: "Daily Calories Needed",
        dailyProtein: "Daily Protein (g)",
        dailyCarbs: "Daily Carbs (g)",
        dailyFat: "Daily Fat (g)",
        mealPlan: "Meal Plan",
        breakfast: "Breakfast",
        lunch: "Lunch",
        dinner: "Dinner",
        snack: "Snack",
        loginBtn: "Login",
        loginTitle: "Login",
        loginEmail: "Email",
        loginPassword: "Password",
        loginSubmit: "Login",
        loginNoAccount: "Don't have an account?",
        loginRegister: "Register",
        logoutBtn: "Logout",
        registerTitle: "Register",
        registerName: "Name",
        registerSubmit: "Register",
        registerHasAccount: "Already have an account?",
        registerLogin: "Login",
        weeklyPlan: "Weekly Meal Plan",
        weeklyPlanLogin: "Login to view your personalized weekly meal plan",
        monday: "Monday",
        tuesday: "Tuesday",
        wednesday: "Wednesday",
        thursday: "Thursday",
        friday: "Friday",
        saturday: "Saturday",
        sunday: "Sunday",
        loginSuccess: "Login successful!",
        loginError: "Invalid email or password",
        registerSuccess: "Registration successful!",
        registerError: "Email already registered",
        loggingIn: "Logging in...",
        registering: "Registering..."
    },
    it: {
        siteTitle: "Centro Nutrizione",
        navFoods: "Alimenti",
        navCalculator: "Calcolatore Dieta",
        heroTitle: "Scopri il Tuo Piano Nutrizionale Perfetto",
        heroSubtitle: "Esplora migliaia di alimenti, monitora i nutrienti e crea il tuo piano dietetico personalizzato",
        searchPlaceholder: "Cerca alimenti...",
        searchLabel: "Ricerca alimento",
        dietInfoTitle: "Cos'è la Dieta?",
        dietInfoWhatTitle: "Definizione",
        dietInfoWhatText: "La dieta è l'insieme degli alimenti che una persona assume abitualmente. Non significa necessariamente restrizione calorica, ma piuttosto un modo equilibrato di nutrirsi per mantenere o migliorare la propria salute.",
        dietInfoBenefitsTitle: "Benefici",
        dietInfoBenefitsText: "Una dieta equilibrata offre numerosi benefici: migliora l'energia quotidiana, supporta il sistema immunitario, aiuta a mantenere un peso sano, migliora la salute cardiovascolare e promuove il benessere mentale.",
        dietInfoBalanceTitle: "Equilibrio Nutrizionale",
        dietInfoBalanceText: "Un'alimentazione bilanciata include proteine per la costruzione muscolare, carboidrati per l'energia, grassi sani per le funzioni vitali, vitamine e minerali essenziali per il corretto funzionamento dell'organismo.",
        dietInfoGoalsTitle: "Obiettivi",
        dietInfoGoalsText: "Che tu voglia dimagrire, aumentare di peso o semplicemente mantenere il tuo peso attuale, una dieta personalizzata basata sulle tue esigenze è fondamentale per raggiungere i tuoi obiettivi in modo sano e sostenibile.",
        foodsTitle: "Database Nutrizionale",
        foodsSubtitle: "Sfoglia la nostra collezione completa di alimenti con informazioni nutrizionali dettagliate",
        filterAll: "Tutti",
        filterFruits: "Frutta",
        filterVegetables: "Verdure",
        filterProteins: "Proteine",
        filterGrains: "Cereali",
        filterDairy: "Latticini",
        filterNuts: "Noci e Semi",
        filterBeverages: "Bevande",
        filterOils: "Oli e Grassi",
        sugar: "Zuccheri",
        sodium: "Sodio",
        standardPortion: "Porzione Standard",
        calculatorTitle: "Calcolatore Dieta Personalizzato",
        calculatorSubtitle: "Ottieni il tuo piano alimentare personalizzato in base ai tuoi obiettivi e alle tue misure corporee",
        formTitle: "Le Tue Informazioni",
        labelGender: "Sesso",
        genderMale: "Maschio",
        genderFemale: "Femmina",
        labelAge: "Età",
        labelHeight: "Altezza (cm)",
        labelWeight: "Peso (kg)",
        labelActivity: "Livello di Attività",
        activitySedentary: "Sedentario (poco o nessun esercizio)",
        activityLight: "Leggermente attivo (esercizio leggero 1-3 giorni/settimana)",
        activityModerate: "Moderatamente attivo (esercizio moderato 3-5 giorni/settimana)",
        activityActive: "Molto attivo (esercizio intenso 6-7 giorni/settimana)",
        activityExtra: "Extra attivo (esercizio molto intenso, lavoro fisico)",
        labelGoal: "Obiettivo",
        goalLose: "Dimagrire",
        goalMaintain: "Mantenere Peso",
        goalGain: "Aumentare Peso",
        labelGoalAmount: "Variazione Peso Settimanale (g)",
        goalAmountHint: "Consigliato: 500g a settimana per un progresso sano",
        btnCalculate: "Calcola il Mio Piano Dietetico",
        resultsTitle: "Il Tuo Piano Dietetico",
        footerText: "© 2024 Centro Nutrizione - La tua guida nutrizionale completa",
        calories: "Calorie",
        protein: "Proteine",
        carbs: "Carboidrati",
        fat: "Grassi",
        fiber: "Fibre",
        per100g: "per 100g",
        noResults: "Nessun risultato trovato",
        bmr: "Metabolismo Basale (BMR)",
        tdee: "Dispendio Energetico Totale Giornaliero (TDEE)",
        dailyCalories: "Calorie Giornaliere Necessarie",
        dailyProtein: "Proteine Giornaliere (g)",
        dailyCarbs: "Carboidrati Giornalieri (g)",
        dailyFat: "Grassi Giornalieri (g)",
        mealPlan: "Piano Pasti",
        breakfast: "Colazione",
        lunch: "Pranzo",
        dinner: "Cena",
        snack: "Spuntino",
        loginBtn: "Accedi",
        loginTitle: "Accedi",
        loginEmail: "Email",
        loginPassword: "Password",
        loginSubmit: "Accedi",
        loginNoAccount: "Non hai un account?",
        loginRegister: "Registrati",
        logoutBtn: "Esci",
        registerTitle: "Registrati",
        registerName: "Nome",
        registerSubmit: "Registrati",
        registerHasAccount: "Hai già un account?",
        registerLogin: "Accedi",
        weeklyPlan: "Piano Settimanale",
        weeklyPlanLogin: "Accedi per visualizzare il tuo piano settimanale personalizzato",
        monday: "Lunedì",
        tuesday: "Martedì",
        wednesday: "Mercoledì",
        thursday: "Giovedì",
        friday: "Venerdì",
        saturday: "Sabato",
        sunday: "Domenica",
        loginSuccess: "Accesso effettuato con successo!",
        loginError: "Email o password non valide",
        registerSuccess: "Registrazione completata con successo!",
        registerError: "Email già registrata",
        loggingIn: "Accesso in corso...",
        registering: "Registrazione in corso..."
    },
    fr: {
        siteTitle: "Hub Nutrition",
        navFoods: "Aliments",
        navCalculator: "Calculateur Régime",
        heroTitle: "Découvrez Votre Plan Nutritionnel Parfait",
        heroSubtitle: "Explorez des milliers d'aliments, suivez les nutriments et créez votre plan alimentaire personnalisé",
        searchPlaceholder: "Rechercher des aliments...",
        searchLabel: "Recherche Aliment",
        dietInfoTitle: "Qu'est-ce que le Régime?",
        dietInfoWhatTitle: "Définition",
        dietInfoWhatText: "Le régime est l'ensemble des aliments qu'une personne consomme habituellement. Cela ne signifie pas nécessairement restriction calorique, mais plutôt une façon équilibrée de se nourrir pour maintenir ou améliorer sa santé.",
        dietInfoBenefitsTitle: "Avantages",
        dietInfoBenefitsText: "Un régime équilibré offre de nombreux avantages: améliore l'énergie quotidienne, soutient le système immunitaire, aide à maintenir un poids sain, améliore la santé cardiovasculaire et favorise le bien-être mental.",
        dietInfoBalanceTitle: "Équilibre Nutritionnel",
        dietInfoBalanceText: "Une alimentation équilibrée comprend des protéines pour la construction musculaire, des glucides pour l'énergie, des graisses saines pour les fonctions vitales, et des vitamines et minéraux essentiels pour le bon fonctionnement de l'organisme.",
        dietInfoGoalsTitle: "Objectifs",
        dietInfoGoalsText: "Que vous souhaitiez perdre du poids, prendre du poids ou simplement maintenir votre poids actuel, un régime personnalisé basé sur vos besoins est essentiel pour atteindre vos objectifs de manière saine et durable.",
        foodsTitle: "Base de Données Nutritionnelle",
        foodsSubtitle: "Parcourez notre collection complète d'aliments avec des informations nutritionnelles détaillées",
        filterAll: "Tous",
        filterFruits: "Fruits",
        filterVegetables: "Légumes",
        filterProteins: "Protéines",
        filterGrains: "Céréales",
        filterDairy: "Produits Laitiers",
        filterNuts: "Noix et Graines",
        filterBeverages: "Boissons",
        filterOils: "Huiles et Graisses",
        sugar: "Sucres",
        sodium: "Sodium",
        standardPortion: "Portion Standard",
        calculatorTitle: "Calculateur de Régime Personnalisé",
        calculatorSubtitle: "Obtenez votre plan de repas personnalisé basé sur vos objectifs et vos mesures corporelles",
        formTitle: "Vos Informations",
        labelGender: "Sexe",
        genderMale: "Homme",
        genderFemale: "Femme",
        labelAge: "Âge",
        labelHeight: "Taille (cm)",
        labelWeight: "Poids (kg)",
        labelActivity: "Niveau d'Activité",
        activitySedentary: "Sédentaire (peu ou pas d'exercice)",
        activityLight: "Légèrement actif (exercice léger 1-3 jours/semaine)",
        activityModerate: "Modérément actif (exercice modéré 3-5 jours/semaine)",
        activityActive: "Très actif (exercice intense 6-7 jours/semaine)",
        activityExtra: "Extra actif (exercice très intense, travail physique)",
        labelGoal: "Objectif",
        goalLose: "Perdre du Poids",
        goalMaintain: "Maintenir le Poids",
        goalGain: "Prendre du Poids",
        labelGoalAmount: "Changement de Poids Hebdomadaire (g)",
        goalAmountHint: "Recommandé: 500g par semaine pour un progrès sain",
        btnCalculate: "Calculer Mon Plan Alimentaire",
        resultsTitle: "Votre Plan Alimentaire",
        footerText: "© 2024 Hub Nutrition - Votre guide nutritionnel complet",
        calories: "Calories",
        protein: "Protéines",
        carbs: "Glucides",
        fat: "Graisses",
        fiber: "Fibres",
        per100g: "pour 100g",
        noResults: "Aucun résultat trouvé",
        bmr: "Métabolisme de Base (BMR)",
        tdee: "Dépense Énergétique Totale Quotidienne (TDEE)",
        dailyCalories: "Calories Quotidiennes Nécessaires",
        dailyProtein: "Protéines Quotidiennes (g)",
        dailyCarbs: "Glucides Quotidiens (g)",
        dailyFat: "Graisses Quotidiennes (g)",
        mealPlan: "Plan de Repas",
        breakfast: "Petit-déjeuner",
        lunch: "Déjeuner",
        dinner: "Dîner",
        snack: "Collation",
        loginBtn: "Connexion",
        loginTitle: "Connexion",
        loginEmail: "Email",
        loginPassword: "Mot de passe",
        loginSubmit: "Connexion",
        loginNoAccount: "Vous n'avez pas de compte?",
        loginRegister: "S'inscrire",
        logoutBtn: "Déconnexion",
        registerTitle: "S'inscrire",
        registerName: "Nom",
        registerSubmit: "S'inscrire",
        registerHasAccount: "Vous avez déjà un compte?",
        registerLogin: "Connexion",
        weeklyPlan: "Plan Hebdomadaire",
        weeklyPlanLogin: "Connectez-vous pour voir votre plan hebdomadaire personnalisé",
        monday: "Lundi",
        tuesday: "Mardi",
        wednesday: "Mercredi",
        thursday: "Jeudi",
        friday: "Vendredi",
        saturday: "Samedi",
        sunday: "Dimanche",
        loginSuccess: "Connexion réussie!",
        loginError: "Email ou mot de passe invalide",
        registerSuccess: "Inscription réussie!",
        registerError: "Email déjà enregistré",
        loggingIn: "Connexion en cours...",
        registering: "Inscription en cours..."
    },
    es: {
        siteTitle: "Centro de Nutrición",
        navFoods: "Alimentos",
        navCalculator: "Calculadora de Dieta",
        heroTitle: "Descubre Tu Plan Nutricional Perfecto",
        heroSubtitle: "Explora miles de alimentos, rastrea nutrientes y crea tu plan dietético personalizado",
        searchPlaceholder: "Buscar alimentos...",
        searchLabel: "Buscar Alimento",
        dietInfoTitle: "¿Qué es la Dieta?",
        dietInfoWhatTitle: "Definición",
        dietInfoWhatText: "La dieta es el conjunto de alimentos que una persona consume habitualmente. No significa necesariamente restricción calórica, sino más bien una forma equilibrada de alimentarse para mantener o mejorar la salud.",
        dietInfoBenefitsTitle: "Beneficios",
        dietInfoBenefitsText: "Una dieta equilibrada ofrece numerosos beneficios: mejora la energía diaria, apoya el sistema inmunológico, ayuda a mantener un peso saludable, mejora la salud cardiovascular y promueve el bienestar mental.",
        dietInfoBalanceTitle: "Equilibrio Nutricional",
        dietInfoBalanceText: "Una alimentación equilibrada incluye proteínas para la construcción muscular, carbohidratos para la energía, grasas saludables para las funciones vitales, y vitaminas y minerales esenciales para el correcto funcionamiento del organismo.",
        dietInfoGoalsTitle: "Objetivos",
        dietInfoGoalsText: "Ya sea que quieras perder peso, ganar peso o simplemente mantener tu peso actual, una dieta personalizada basada en tus necesidades es fundamental para alcanzar tus objetivos de manera saludable y sostenible.",
        foodsTitle: "Base de Datos Nutricional",
        foodsSubtitle: "Navega por nuestra colección completa de alimentos con información nutricional detallada",
        filterAll: "Todos",
        filterFruits: "Frutas",
        filterVegetables: "Verduras",
        filterProteins: "Proteínas",
        filterGrains: "Granos",
        filterDairy: "Lácteos",
        filterNuts: "Frutos Secos y Semillas",
        filterBeverages: "Bebidas",
        filterOils: "Aceites y Grasas",
        sugar: "Azúcares",
        sodium: "Sodio",
        standardPortion: "Porción Estándar",
        calculatorTitle: "Calculadora de Dieta Personalizada",
        calculatorSubtitle: "Obtén tu plan de comidas personalizado basado en tus objetivos y medidas corporales",
        formTitle: "Tu Información",
        labelGender: "Género",
        genderMale: "Hombre",
        genderFemale: "Mujer",
        labelAge: "Edad",
        labelHeight: "Altura (cm)",
        labelWeight: "Peso (kg)",
        labelActivity: "Nivel de Actividad",
        activitySedentary: "Sedentario (poco o nada de ejercicio)",
        activityLight: "Ligeramente activo (ejercicio ligero 1-3 días/semana)",
        activityModerate: "Moderadamente activo (ejercicio moderado 3-5 días/semana)",
        activityActive: "Muy activo (ejercicio intenso 6-7 días/semana)",
        activityExtra: "Extra activo (ejercicio muy intenso, trabajo físico)",
        labelGoal: "Objetivo",
        goalLose: "Perder Peso",
        goalMaintain: "Mantener Peso",
        goalGain: "Aumentar Peso",
        labelGoalAmount: "Cambio de Peso Semanal (g)",
        goalAmountHint: "Recomendado: 500g por semana para un progreso saludable",
        btnCalculate: "Calcular Mi Plan Dietético",
        resultsTitle: "Tu Plan Dietético",
        footerText: "© 2024 Centro de Nutrición - Tu guía nutricional completa",
        calories: "Calorías",
        protein: "Proteína",
        carbs: "Carbohidratos",
        fat: "Grasas",
        fiber: "Fibra",
        per100g: "por 100g",
        noResults: "No se encontraron resultados",
        bmr: "Tasa Metabólica Basal (BMR)",
        tdee: "Gasto Energético Total Diario (TDEE)",
        dailyCalories: "Calorías Diarias Necesarias",
        dailyProtein: "Proteína Diaria (g)",
        dailyCarbs: "Carbohidratos Diarios (g)",
        dailyFat: "Grasas Diarias (g)",
        mealPlan: "Plan de Comidas",
        breakfast: "Desayuno",
        lunch: "Almuerzo",
        dinner: "Cena",
        snack: "Merienda",
        loginBtn: "Iniciar sesión",
        loginTitle: "Iniciar sesión",
        loginEmail: "Email",
        loginPassword: "Contraseña",
        loginSubmit: "Iniciar sesión",
        loginNoAccount: "¿No tienes una cuenta?",
        loginRegister: "Registrarse",
        logoutBtn: "Cerrar sesión",
        registerTitle: "Registrarse",
        registerName: "Nombre",
        registerSubmit: "Registrarse",
        registerHasAccount: "¿Ya tienes una cuenta?",
        registerLogin: "Iniciar sesión",
        weeklyPlan: "Plan Semanal",
        weeklyPlanLogin: "Inicia sesión para ver tu plan semanal personalizado",
        monday: "Lunes",
        tuesday: "Martes",
        wednesday: "Miércoles",
        thursday: "Jueves",
        friday: "Viernes",
        saturday: "Sábado",
        sunday: "Domingo",
        loginSuccess: "¡Inicio de sesión exitoso!",
        loginError: "Email o contraseña inválidos",
        registerSuccess: "¡Registro exitoso!",
        registerError: "Email ya registrado",
        loggingIn: "Iniciando sesión...",
        registering: "Registrando..."
    },
    de: {
        siteTitle: "Ernährungszentrum",
        navFoods: "Lebensmittel",
        navCalculator: "Diät-Rechner",
        heroTitle: "Entdecken Sie Ihren Perfekten Ernährungsplan",
        heroSubtitle: "Erkunden Sie Tausende von Lebensmitteln, verfolgen Sie Nährstoffe und erstellen Sie Ihren personalisierten Ernährungsplan",
        searchPlaceholder: "Lebensmittel suchen...",
        searchLabel: "Lebensmittel Suchen",
        dietInfoTitle: "Was ist Diät?",
        dietInfoWhatTitle: "Definition",
        dietInfoWhatText: "Die Diät ist die Gesamtheit der Lebensmittel, die eine Person regelmäßig zu sich nimmt. Es bedeutet nicht unbedingt Kalorienrestriktion, sondern vielmehr eine ausgewogene Art der Ernährung, um die Gesundheit zu erhalten oder zu verbessern.",
        dietInfoBenefitsTitle: "Vorteile",
        dietInfoBenefitsText: "Eine ausgewogene Ernährung bietet zahlreiche Vorteile: verbessert die tägliche Energie, unterstützt das Immunsystem, hilft ein gesundes Gewicht zu halten, verbessert die Herz-Kreislauf-Gesundheit und fördert das geistige Wohlbefinden.",
        dietInfoBalanceTitle: "Ernährungsgleichgewicht",
        dietInfoBalanceText: "Eine ausgewogene Ernährung umfasst Proteine für den Muskelaufbau, Kohlenhydrate für Energie, gesunde Fette für lebenswichtige Funktionen und essentielle Vitamine und Mineralien für die ordnungsgemäße Körperfunktion.",
        dietInfoGoalsTitle: "Ziele",
        dietInfoGoalsText: "Ob Sie abnehmen, zunehmen oder einfach Ihr aktuelles Gewicht halten möchten, eine personalisierte Diät basierend auf Ihren Bedürfnissen ist entscheidend, um Ihre Ziele auf gesunde und nachhaltige Weise zu erreichen.",
        foodsTitle: "Nährstoffdatenbank",
        foodsSubtitle: "Durchsuchen Sie unsere umfassende Sammlung von Lebensmitteln mit detaillierten Nährwertinformationen",
        filterAll: "Alle",
        filterFruits: "Früchte",
        filterVegetables: "Gemüse",
        filterProteins: "Proteine",
        filterGrains: "Getreide",
        filterDairy: "Milchprodukte",
        filterNuts: "Nüsse & Samen",
        filterBeverages: "Getränke",
        filterOils: "Öle & Fette",
        sugar: "Zucker",
        sodium: "Natrium",
        standardPortion: "Standardportion",
        calculatorTitle: "Personalisierter Diät-Rechner",
        calculatorSubtitle: "Erhalten Sie Ihren maßgeschneiderten Ernährungsplan basierend auf Ihren Zielen und Körpermaßen",
        formTitle: "Ihre Informationen",
        labelGender: "Geschlecht",
        genderMale: "Männlich",
        genderFemale: "Weiblich",
        labelAge: "Alter",
        labelHeight: "Größe (cm)",
        labelWeight: "Gewicht (kg)",
        labelActivity: "Aktivitätsniveau",
        activitySedentary: "Sitzend (wenig oder keine Bewegung)",
        activityLight: "Leicht aktiv (leichte Bewegung 1-3 Tage/Woche)",
        activityModerate: "Mäßig aktiv (mäßige Bewegung 3-5 Tage/Woche)",
        activityActive: "Sehr aktiv (intensive Bewegung 6-7 Tage/Woche)",
        activityExtra: "Extra aktiv (sehr intensive Bewegung, körperliche Arbeit)",
        labelGoal: "Ziel",
        goalLose: "Abnehmen",
        goalMaintain: "Gewicht Halten",
        goalGain: "Zunehmen",
        labelGoalAmount: "Wöchentliche Gewichtsänderung (g)",
        goalAmountHint: "Empfohlen: 500g pro Woche für gesunden Fortschritt",
        btnCalculate: "Meinen Ernährungsplan Berechnen",
        resultsTitle: "Ihr Ernährungsplan",
        footerText: "© 2024 Ernährungszentrum - Ihr vollständiger Ernährungsführer",
        calories: "Kalorien",
        protein: "Protein",
        carbs: "Kohlenhydrate",
        fat: "Fett",
        fiber: "Ballaststoffe",
        per100g: "pro 100g",
        noResults: "Keine Ergebnisse gefunden",
        bmr: "Grundumsatz (BMR)",
        tdee: "Gesamter Täglicher Energieverbrauch (TDEE)",
        dailyCalories: "Tägliche Kalorien Benötigt",
        dailyProtein: "Tägliches Protein (g)",
        dailyCarbs: "Tägliche Kohlenhydrate (g)",
        dailyFat: "Tägliches Fett (g)",
        mealPlan: "Essensplan",
        breakfast: "Frühstück",
        lunch: "Mittagessen",
        dinner: "Abendessen",
        snack: "Snack",
        loginBtn: "Anmelden",
        loginTitle: "Anmelden",
        loginEmail: "E-Mail",
        loginPassword: "Passwort",
        loginSubmit: "Anmelden",
        loginNoAccount: "Haben Sie kein Konto?",
        loginRegister: "Registrieren",
        logoutBtn: "Abmelden",
        registerTitle: "Registrieren",
        registerName: "Name",
        registerSubmit: "Registrieren",
        registerHasAccount: "Haben Sie bereits ein Konto?",
        registerLogin: "Anmelden",
        weeklyPlan: "Wöchentlicher Plan",
        weeklyPlanLogin: "Melden Sie sich an, um Ihren personalisierten wöchentlichen Plan zu sehen",
        monday: "Montag",
        tuesday: "Dienstag",
        wednesday: "Mittwoch",
        thursday: "Donnerstag",
        friday: "Freitag",
        saturday: "Samstag",
        sunday: "Sonntag",
        loginSuccess: "Anmeldung erfolgreich!",
        loginError: "Ungültige E-Mail oder Passwort",
        registerSuccess: "Registrierung erfolgreich!",
        registerError: "E-Mail bereits registriert",
        loggingIn: "Anmeldung läuft...",
        registering: "Registrierung läuft..."
    },
    zh: {
        siteTitle: "营养中心",
        navFoods: "食物",
        navCalculator: "饮食计算器",
        heroTitle: "发现您的完美营养计划",
        heroSubtitle: "探索数千种食物，追踪营养素，创建您的个性化饮食计划",
        searchPlaceholder: "搜索食物...",
        searchLabel: "搜索食物",
        dietInfoTitle: "什么是饮食？",
        dietInfoWhatTitle: "定义",
        dietInfoWhatText: "饮食是一个人习惯性摄入的食物集合。它不一定意味着卡路里限制，而是一种均衡的饮食方式，以维持或改善健康。",
        dietInfoBenefitsTitle: "好处",
        dietInfoBenefitsText: "均衡饮食提供许多好处：改善日常能量，支持免疫系统，帮助保持健康体重，改善心血管健康，促进心理健康。",
        dietInfoBalanceTitle: "营养平衡",
        dietInfoBalanceText: "均衡饮食包括用于肌肉构建的蛋白质、用于能量的碳水化合物、用于生命功能的健康脂肪，以及用于身体正常功能的必需维生素和矿物质。",
        dietInfoGoalsTitle: "目标",
        dietInfoGoalsText: "无论您想减肥、增重还是简单地保持当前体重，基于您需求的个性化饮食对于以健康和可持续的方式实现目标至关重要。",
        foodsTitle: "营养数据库",
        foodsSubtitle: "浏览我们全面的食物收藏，包含详细的营养信息",
        filterAll: "全部",
        filterFruits: "水果",
        filterVegetables: "蔬菜",
        filterProteins: "蛋白质",
        filterGrains: "谷物",
        filterDairy: "乳制品",
        filterNuts: "坚果和种子",
        filterBeverages: "饮料",
        filterOils: "油和脂肪",
        sugar: "糖",
        sodium: "钠",
        standardPortion: "标准份量",
        calculatorTitle: "个性化饮食计算器",
        calculatorSubtitle: "根据您的目标和身体指标获得定制的膳食计划",
        formTitle: "您的信息",
        labelGender: "性别",
        genderMale: "男性",
        genderFemale: "女性",
        labelAge: "年龄",
        labelHeight: "身高 (厘米)",
        labelWeight: "体重 (公斤)",
        labelActivity: "活动水平",
        activitySedentary: "久坐 (很少或没有运动)",
        activityLight: "轻度活动 (每周1-3天轻度运动)",
        activityModerate: "中度活动 (每周3-5天中度运动)",
        activityActive: "非常活跃 (每周6-7天剧烈运动)",
        activityExtra: "极度活跃 (非常剧烈的运动，体力工作)",
        labelGoal: "目标",
        goalLose: "减重",
        goalMaintain: "维持体重",
        goalGain: "增重",
        labelGoalAmount: "每周体重变化 (克)",
        goalAmountHint: "推荐：每周500克以获得健康进展",
        btnCalculate: "计算我的饮食计划",
        resultsTitle: "您的饮食计划",
        footerText: "© 2024 营养中心 - 您的完整营养指南",
        calories: "卡路里",
        protein: "蛋白质",
        carbs: "碳水化合物",
        fat: "脂肪",
        fiber: "纤维",
        per100g: "每100克",
        noResults: "未找到结果",
        bmr: "基础代谢率 (BMR)",
        tdee: "每日总能量消耗 (TDEE)",
        dailyCalories: "每日所需卡路里",
        dailyProtein: "每日蛋白质 (克)",
        dailyCarbs: "每日碳水化合物 (克)",
        dailyFat: "每日脂肪 (克)",
        mealPlan: "膳食计划",
        breakfast: "早餐",
        lunch: "午餐",
        dinner: "晚餐",
        snack: "零食",
        loginBtn: "登录",
        loginTitle: "登录",
        loginEmail: "电子邮件",
        loginPassword: "密码",
        loginSubmit: "登录",
        loginNoAccount: "没有账户？",
        loginRegister: "注册",
        logoutBtn: "登出",
        registerTitle: "注册",
        registerName: "姓名",
        registerSubmit: "注册",
        registerHasAccount: "已有账户？",
        registerLogin: "登录",
        weeklyPlan: "周计划",
        weeklyPlanLogin: "登录以查看您的个性化周计划",
        monday: "星期一",
        tuesday: "星期二",
        wednesday: "星期三",
        thursday: "星期四",
        friday: "星期五",
        saturday: "星期六",
        sunday: "星期日",
        loginSuccess: "登录成功！",
        loginError: "电子邮件或密码无效",
        registerSuccess: "注册成功！",
        registerError: "电子邮件已注册",
        loggingIn: "登录中...",
        registering: "注册中..."
    }
};

// Current language (default: English)
let currentLang = 'en';

// Translation function
function translate(key) {
    return translations[currentLang][key] || translations['en'][key] || key;
}

// Food names translations
const foodNamesTranslations = {
    en: {
        'Apple': 'Apple', 'Banana': 'Banana', 'Orange': 'Orange', 'Strawberry': 'Strawberry', 'Blueberry': 'Blueberry',
        'Grape': 'Grape', 'Watermelon': 'Watermelon', 'Pineapple': 'Pineapple', 'Mango': 'Mango', 'Avocado': 'Avocado',
        'Cherry': 'Cherry', 'Peach': 'Peach', 'Pear': 'Pear', 'Plum': 'Plum', 'Kiwi': 'Kiwi', 'Lemon': 'Lemon',
        'Lime': 'Lime', 'Grapefruit': 'Grapefruit', 'Raspberry': 'Raspberry', 'Blackberry': 'Blackberry', 'Cranberry': 'Cranberry',
        'Pomegranate': 'Pomegranate', 'Papaya': 'Papaya', 'Coconut': 'Coconut', 'Fig': 'Fig', 'Date': 'Date', 'Apricot': 'Apricot',
        'Broccoli': 'Broccoli', 'Carrot': 'Carrot', 'Spinach': 'Spinach', 'Tomato': 'Tomato', 'Cucumber': 'Cucumber',
        'Bell Pepper': 'Bell Pepper', 'Onion': 'Onion', 'Potato': 'Potato', 'Sweet Potato': 'Sweet Potato', 'Zucchini': 'Zucchini',
        'Cauliflower': 'Cauliflower', 'Cabbage': 'Cabbage', 'Lettuce': 'Lettuce', 'Celery': 'Celery', 'Asparagus': 'Asparagus',
        'Mushroom': 'Mushroom', 'Eggplant': 'Eggplant', 'Corn': 'Corn', 'Peas': 'Peas', 'Green Beans': 'Green Beans',
        'Radish': 'Radish', 'Beetroot': 'Beetroot', 'Artichoke': 'Artichoke', 'Brussels Sprouts': 'Brussels Sprouts', 'Kale': 'Kale',
        'Chicken Breast': 'Chicken Breast', 'Salmon': 'Salmon', 'Eggs': 'Eggs', 'Beef (Lean)': 'Beef (Lean)', 'Turkey Breast': 'Turkey Breast',
        'Tuna': 'Tuna', 'Tofu': 'Tofu', 'Lentils': 'Lentils', 'Chickpeas': 'Chickpeas', 'Black Beans': 'Black Beans',
        'Pork (Lean)': 'Pork (Lean)', 'Cod': 'Cod', 'Shrimp': 'Shrimp', 'Chicken Thigh': 'Chicken Thigh', 'Duck': 'Duck',
        'Sardines': 'Sardines', 'Mackerel': 'Mackerel', 'Tilapia': 'Tilapia', 'White Beans': 'White Beans', 'Kidney Beans': 'Kidney Beans',
        'Edamame': 'Edamame', 'Tempeh': 'Tempeh', 'Seitan': 'Seitan', 'Whey Protein': 'Whey Protein', 'Casein Protein': 'Casein Protein',
        'Rice (White)': 'Rice (White)', 'Brown Rice': 'Brown Rice', 'Oats': 'Oats', 'Quinoa': 'Quinoa', 'Pasta': 'Pasta',
        'Bread (White)': 'Bread (White)', 'Whole Wheat Bread': 'Whole Wheat Bread', 'Barley': 'Barley',
        'Buckwheat': 'Buckwheat', 'Millet': 'Millet', 'Bulgur': 'Bulgur', 'Couscous': 'Couscous', 'Wild Rice': 'Wild Rice',
        'Milk (Whole)': 'Milk (Whole)', 'Greek Yogurt': 'Greek Yogurt', 'Cheese (Cheddar)': 'Cheese (Cheddar)',
        'Cottage Cheese': 'Cottage Cheese', 'Butter': 'Butter', 'Mozzarella': 'Mozzarella', 'Parmesan': 'Parmesan',
        'Feta Cheese': 'Feta Cheese', 'Ricotta': 'Ricotta', 'Yogurt': 'Yogurt', 'Kefir': 'Kefir', 'Sour Cream': 'Sour Cream',
        'Almonds': 'Almonds', 'Walnuts': 'Walnuts', 'Peanuts': 'Peanuts', 'Chia Seeds': 'Chia Seeds',
        'Flax Seeds': 'Flax Seeds', 'Sunflower Seeds': 'Sunflower Seeds', 'Pistachios': 'Pistachios', 'Cashews': 'Cashews',
        'Hazelnuts': 'Hazelnuts', 'Brazil Nuts': 'Brazil Nuts', 'Macadamia Nuts': 'Macadamia Nuts', 'Pecans': 'Pecans',
        'Pumpkin Seeds': 'Pumpkin Seeds', 'Sesame Seeds': 'Sesame Seeds', 'Pine Nuts': 'Pine Nuts',
        'Water': 'Water', 'Coffee': 'Coffee', 'Green Tea': 'Green Tea', 'Orange Juice': 'Orange Juice',
        'Apple Juice': 'Apple Juice', 'Milk (Low Fat)': 'Milk (Low Fat)', 'Almond Milk': 'Almond Milk', 'Soy Milk': 'Soy Milk',
        'Olive Oil': 'Olive Oil', 'Coconut Oil': 'Coconut Oil', 'Avocado Oil': 'Avocado Oil', 'Canola Oil': 'Canola Oil', 'Sunflower Oil': 'Sunflower Oil',
        'Pizza': 'Pizza', 'Hamburger': 'Hamburger',
        'Tomato Sauce': 'Tomato Sauce', 'Ketchup': 'Ketchup', 'Mayonnaise': 'Mayonnaise', 'Mustard': 'Mustard', 'BBQ Sauce': 'BBQ Sauce',
        'Ranch Dressing': 'Ranch Dressing', 'Caesar Dressing': 'Caesar Dressing', 'Italian Dressing': 'Italian Dressing', 'Honey Mustard': 'Honey Mustard',
        'Soy Sauce': 'Soy Sauce', 'Hot Sauce': 'Hot Sauce', 'Pesto': 'Pesto', 'Tartar Sauce': 'Tartar Sauce', 'Sriracha': 'Sriracha',
        'Worcestershire Sauce': 'Worcestershire Sauce', 'Teriyaki Sauce': 'Teriyaki Sauce', 'Alfredo Sauce': 'Alfredo Sauce',
        'Marinara Sauce': 'Marinara Sauce', 'Hollandaise Sauce': 'Hollandaise Sauce', 'Barbecue Sauce': 'Barbecue Sauce'
    },
    it: {
        'Apple': 'Mela', 'Banana': 'Banana', 'Orange': 'Arancia', 'Strawberry': 'Fragola', 'Blueberry': 'Mirtillo',
        'Grape': 'Uva', 'Watermelon': 'Anguria', 'Pineapple': 'Ananas', 'Mango': 'Mango', 'Avocado': 'Avocado',
        'Cherry': 'Ciliegia', 'Peach': 'Pesca', 'Pear': 'Pera', 'Plum': 'Prugna', 'Kiwi': 'Kiwi', 'Lemon': 'Limone',
        'Lime': 'Lime', 'Grapefruit': 'Pompelmo', 'Raspberry': 'Lampone', 'Blackberry': 'Mora', 'Cranberry': 'Mirtillo Rosso',
        'Pomegranate': 'Melagrana', 'Papaya': 'Papaya', 'Coconut': 'Cocco', 'Fig': 'Fico', 'Date': 'Dattero', 'Apricot': 'Albicocca',
        'Broccoli': 'Broccoli', 'Carrot': 'Carota', 'Spinach': 'Spinaci', 'Tomato': 'Pomodoro', 'Cucumber': 'Cetriolo',
        'Bell Pepper': 'Peperone', 'Onion': 'Cipolla', 'Potato': 'Patata', 'Sweet Potato': 'Patata Dolce', 'Zucchini': 'Zucchina',
        'Cauliflower': 'Cavolfiore', 'Cabbage': 'Cavolo', 'Lettuce': 'Lattuga', 'Celery': 'Sedano', 'Asparagus': 'Asparago',
        'Mushroom': 'Funghi', 'Eggplant': 'Melanzana', 'Corn': 'Mais', 'Peas': 'Piselli', 'Green Beans': 'Fagiolini',
        'Radish': 'Ravanello', 'Beetroot': 'Barbabietola', 'Artichoke': 'Carciofo', 'Brussels Sprouts': 'Cavolini di Bruxelles', 'Kale': 'Cavolo Nero',
        'Chicken Breast': 'Petto di Pollo', 'Salmon': 'Salmone', 'Eggs': 'Uova', 'Beef (Lean)': 'Manzo (Magro)', 'Turkey Breast': 'Petto di Tacchino',
        'Tuna': 'Tonno', 'Tofu': 'Tofu', 'Lentils': 'Lenticchie', 'Chickpeas': 'Ceci', 'Black Beans': 'Fagioli Neri',
        'Pork (Lean)': 'Maiale (Magro)', 'Cod': 'Merluzzo', 'Shrimp': 'Gamberi', 'Chicken Thigh': 'Coscia di Pollo', 'Duck': 'Anatra',
        'Sardines': 'Sardine', 'Mackerel': 'Sgombro', 'Tilapia': 'Tilapia', 'White Beans': 'Fagioli Bianchi', 'Kidney Beans': 'Fagioli Rossi',
        'Edamame': 'Edamame', 'Tempeh': 'Tempeh', 'Seitan': 'Seitan', 'Whey Protein': 'Proteine del Siero', 'Casein Protein': 'Caseina',
        'Rice (White)': 'Riso (Bianco)', 'Brown Rice': 'Riso Integrale', 'Oats': 'Avena', 'Quinoa': 'Quinoa', 'Pasta': 'Pasta',
        'Bread (White)': 'Pane (Bianco)', 'Whole Wheat Bread': 'Pane Integrale', 'Barley': 'Orzo',
        'Buckwheat': 'Grano Saraceno', 'Millet': 'Miglio', 'Bulgur': 'Bulgur', 'Couscous': 'Couscous', 'Wild Rice': 'Riso Selvatico',
        'Milk (Whole)': 'Latte (Intero)', 'Greek Yogurt': 'Yogurt Greco', 'Cheese (Cheddar)': 'Formaggio (Cheddar)',
        'Cottage Cheese': 'Ricotta', 'Butter': 'Burro', 'Mozzarella': 'Mozzarella', 'Parmesan': 'Parmigiano',
        'Feta Cheese': 'Feta', 'Ricotta': 'Ricotta', 'Yogurt': 'Yogurt', 'Kefir': 'Kefir', 'Sour Cream': 'Panna Acida',
        'Almonds': 'Mandorle', 'Walnuts': 'Noci', 'Peanuts': 'Arachidi', 'Chia Seeds': 'Semi di Chia',
        'Flax Seeds': 'Semi di Lino', 'Sunflower Seeds': 'Semi di Girasole', 'Pistachios': 'Pistacchi', 'Cashews': 'Anacardi',
        'Hazelnuts': 'Nocciole', 'Brazil Nuts': 'Noci del Brasile', 'Macadamia Nuts': 'Noci di Macadamia', 'Pecans': 'Noci Pecan',
        'Pumpkin Seeds': 'Semi di Zucca', 'Sesame Seeds': 'Semi di Sesamo', 'Pine Nuts': 'Pinoli',
        'Water': 'Acqua', 'Coffee': 'Caffè', 'Green Tea': 'Tè Verde', 'Orange Juice': 'Succo d\'Arancia',
        'Apple Juice': 'Succo di Mela', 'Milk (Low Fat)': 'Latte (Magro)', 'Almond Milk': 'Latte di Mandorla', 'Soy Milk': 'Latte di Soia',
        'Olive Oil': 'Olio d\'Oliva', 'Coconut Oil': 'Olio di Cocco', 'Avocado Oil': 'Olio di Avocado', 'Canola Oil': 'Olio di Colza', 'Sunflower Oil': 'Olio di Girasole',
        'Pizza': 'Pizza', 'Hamburger': 'Hamburger',
        'Tomato Sauce': 'Salsa di Pomodoro', 'Ketchup': 'Ketchup', 'Mayonnaise': 'Maionese', 'Mustard': 'Mostarda', 'BBQ Sauce': 'Salsa BBQ',
        'Ranch Dressing': 'Salsa Ranch', 'Caesar Dressing': 'Salsa Caesar', 'Italian Dressing': 'Condimento Italiano', 'Honey Mustard': 'Mostarda al Miele',
        'Soy Sauce': 'Salsa di Soia', 'Hot Sauce': 'Salsa Piccante', 'Pesto': 'Pesto', 'Tartar Sauce': 'Salsa Tartara', 'Sriracha': 'Sriracha',
        'Worcestershire Sauce': 'Salsa Worcestershire', 'Teriyaki Sauce': 'Salsa Teriyaki', 'Alfredo Sauce': 'Salsa Alfredo',
        'Marinara Sauce': 'Salsa Marinara', 'Hollandaise Sauce': 'Salsa Olandese', 'Barbecue Sauce': 'Salsa Barbecue'
    },
    fr: {
        'Apple': 'Pomme', 'Banana': 'Banane', 'Orange': 'Orange', 'Strawberry': 'Fraise', 'Blueberry': 'Myrtille',
        'Grape': 'Raisin', 'Watermelon': 'Pastèque', 'Pineapple': 'Ananas', 'Mango': 'Mangue', 'Avocado': 'Avocat',
        'Cherry': 'Cerise', 'Peach': 'Pêche', 'Pear': 'Poire', 'Plum': 'Prune', 'Kiwi': 'Kiwi', 'Lemon': 'Citron',
        'Lime': 'Citron Vert', 'Grapefruit': 'Pamplemousse', 'Raspberry': 'Framboise', 'Blackberry': 'Mûre', 'Cranberry': 'Canneberge',
        'Pomegranate': 'Grenade', 'Papaya': 'Papaye', 'Coconut': 'Noix de Coco', 'Fig': 'Figue', 'Date': 'Datte', 'Apricot': 'Abricot',
        'Broccoli': 'Brocoli', 'Carrot': 'Carotte', 'Spinach': 'Épinards', 'Tomato': 'Tomate', 'Cucumber': 'Concombre',
        'Bell Pepper': 'Poivron', 'Onion': 'Oignon', 'Potato': 'Pomme de Terre', 'Sweet Potato': 'Patate Douce', 'Zucchini': 'Courgette',
        'Cauliflower': 'Chou-fleur', 'Cabbage': 'Chou', 'Lettuce': 'Laitue', 'Celery': 'Céleri', 'Asparagus': 'Asperge',
        'Mushroom': 'Champignon', 'Eggplant': 'Aubergine', 'Corn': 'Maïs', 'Peas': 'Pois', 'Green Beans': 'Haricots Verts',
        'Radish': 'Radis', 'Beetroot': 'Betterave', 'Artichoke': 'Artichaut', 'Brussels Sprouts': 'Choux de Bruxelles', 'Kale': 'Chou Frisé',
        'Chicken Breast': 'Blanc de Poulet', 'Salmon': 'Saumon', 'Eggs': 'Œufs', 'Beef (Lean)': 'Bœuf (Maigre)', 'Turkey Breast': 'Blanc de Dinde',
        'Tuna': 'Thon', 'Tofu': 'Tofu', 'Lentils': 'Lentilles', 'Chickpeas': 'Pois Chiches', 'Black Beans': 'Haricots Noirs',
        'Pork (Lean)': 'Porc (Maigre)', 'Cod': 'Morue', 'Shrimp': 'Crevette', 'Chicken Thigh': 'Cuisse de Poulet', 'Duck': 'Canard',
        'Sardines': 'Sardine', 'Mackerel': 'Maquereau', 'Tilapia': 'Tilapia', 'White Beans': 'Haricots Blancs', 'Kidney Beans': 'Haricots Rouges',
        'Edamame': 'Edamame', 'Tempeh': 'Tempeh', 'Seitan': 'Seitan', 'Whey Protein': 'Protéine de Lactosérum', 'Casein Protein': 'Caséine',
        'Rice (White)': 'Riz (Blanc)', 'Brown Rice': 'Riz Complet', 'Oats': 'Avoine', 'Quinoa': 'Quinoa', 'Pasta': 'Pâtes',
        'Bread (White)': 'Pain (Blanc)', 'Whole Wheat Bread': 'Pain Complet', 'Barley': 'Orge',
        'Buckwheat': 'Sarrasin', 'Millet': 'Mil', 'Bulgur': 'Boulgour', 'Couscous': 'Couscous', 'Wild Rice': 'Riz Sauvage',
        'Milk (Whole)': 'Lait (Entier)', 'Greek Yogurt': 'Yaourt Grec', 'Cheese (Cheddar)': 'Fromage (Cheddar)',
        'Cottage Cheese': 'Fromage Blanc', 'Butter': 'Beurre', 'Mozzarella': 'Mozzarella', 'Parmesan': 'Parmesan',
        'Feta Cheese': 'Feta', 'Ricotta': 'Ricotta', 'Yogurt': 'Yaourt', 'Kefir': 'Kéfir', 'Sour Cream': 'Crème Sûre',
        'Almonds': 'Amandes', 'Walnuts': 'Noix', 'Peanuts': 'Cacahuètes', 'Chia Seeds': 'Graines de Chia',
        'Flax Seeds': 'Graines de Lin', 'Sunflower Seeds': 'Graines de Tournesol', 'Pistachios': 'Pistaches', 'Cashews': 'Noix de Cajou',
        'Hazelnuts': 'Noisettes', 'Brazil Nuts': 'Noix du Brésil', 'Macadamia Nuts': 'Noix de Macadamia', 'Pecans': 'Pécan',
        'Pumpkin Seeds': 'Graines de Citrouille', 'Sesame Seeds': 'Graines de Sésame', 'Pine Nuts': 'Pignons de Pin',
        'Water': 'Eau', 'Coffee': 'Café', 'Green Tea': 'Thé Vert', 'Orange Juice': 'Jus d\'Orange',
        'Apple Juice': 'Jus de Pomme', 'Milk (Low Fat)': 'Lait (Écrémé)', 'Almond Milk': 'Lait d\'Amande', 'Soy Milk': 'Lait de Soja',
        'Olive Oil': 'Huile d\'Olive', 'Coconut Oil': 'Huile de Coco', 'Avocado Oil': 'Huile d\'Avocat', 'Canola Oil': 'Huile de Colza', 'Sunflower Oil': 'Huile de Tournesol',
        'Pizza': 'Pizza', 'Hamburger': 'Hamburger',
        'Tomato Sauce': 'Sauce Tomate', 'Ketchup': 'Ketchup', 'Mayonnaise': 'Mayonnaise', 'Mustard': 'Moutarde', 'BBQ Sauce': 'Sauce BBQ',
        'Ranch Dressing': 'Vinaigrette Ranch', 'Caesar Dressing': 'Vinaigrette César', 'Italian Dressing': 'Vinaigrette Italienne', 'Honey Mustard': 'Moutarde au Miel',
        'Soy Sauce': 'Sauce Soja', 'Hot Sauce': 'Sauce Piquante', 'Pesto': 'Pesto', 'Tartar Sauce': 'Sauce Tartare', 'Sriracha': 'Sriracha',
        'Worcestershire Sauce': 'Sauce Worcestershire', 'Teriyaki Sauce': 'Sauce Teriyaki', 'Alfredo Sauce': 'Sauce Alfredo',
        'Marinara Sauce': 'Sauce Marinara', 'Hollandaise Sauce': 'Sauce Hollandaise', 'Barbecue Sauce': 'Sauce Barbecue'
    },
    es: {
        'Apple': 'Manzana', 'Banana': 'Plátano', 'Orange': 'Naranja', 'Strawberry': 'Fresa', 'Blueberry': 'Arándano',
        'Grape': 'Uva', 'Watermelon': 'Sandía', 'Pineapple': 'Piña', 'Mango': 'Mango', 'Avocado': 'Aguacate',
        'Cherry': 'Cereza', 'Peach': 'Melocotón', 'Pear': 'Pera', 'Plum': 'Ciruela', 'Kiwi': 'Kiwi', 'Lemon': 'Limón',
        'Lime': 'Lima', 'Grapefruit': 'Pomelo', 'Raspberry': 'Frambuesa', 'Blackberry': 'Mora', 'Cranberry': 'Arándano Rojo',
        'Pomegranate': 'Granada', 'Papaya': 'Papaya', 'Coconut': 'Coco', 'Fig': 'Higo', 'Date': 'Dátil', 'Apricot': 'Albaricoque',
        'Broccoli': 'Brócoli', 'Carrot': 'Zanahoria', 'Spinach': 'Espinaca', 'Tomato': 'Tomate', 'Cucumber': 'Pepino',
        'Bell Pepper': 'Pimiento', 'Onion': 'Cebolla', 'Potato': 'Patata', 'Sweet Potato': 'Batata', 'Zucchini': 'Calabacín',
        'Cauliflower': 'Coliflor', 'Cabbage': 'Repollo', 'Lettuce': 'Lechuga', 'Celery': 'Apio', 'Asparagus': 'Espárrago',
        'Mushroom': 'Champiñón', 'Eggplant': 'Berenjena', 'Corn': 'Maíz', 'Peas': 'Guisantes', 'Green Beans': 'Judías Verdes',
        'Radish': 'Rábano', 'Beetroot': 'Remolacha', 'Artichoke': 'Alcachofa', 'Brussels Sprouts': 'Coles de Bruselas', 'Kale': 'Col Rizada',
        'Chicken Breast': 'Pechuga de Pollo', 'Salmon': 'Salmón', 'Eggs': 'Huevos', 'Beef (Lean)': 'Carne de Res (Magra)', 'Turkey Breast': 'Pechuga de Pavo',
        'Tuna': 'Atún', 'Tofu': 'Tofu', 'Lentils': 'Lentejas', 'Chickpeas': 'Garbanzos', 'Black Beans': 'Frijoles Negros',
        'Pork (Lean)': 'Cerdo (Magro)', 'Cod': 'Bacalao', 'Shrimp': 'Camarón', 'Chicken Thigh': 'Muslo de Pollo', 'Duck': 'Pato',
        'Sardines': 'Sardina', 'Mackerel': 'Caballa', 'Tilapia': 'Tilapia', 'White Beans': 'Frijoles Blancos', 'Kidney Beans': 'Frijoles Rojos',
        'Edamame': 'Edamame', 'Tempeh': 'Tempeh', 'Seitan': 'Seitán', 'Whey Protein': 'Proteína de Suero', 'Casein Protein': 'Caseína',
        'Rice (White)': 'Arroz (Blanco)', 'Brown Rice': 'Arroz Integral', 'Oats': 'Avena', 'Quinoa': 'Quinoa', 'Pasta': 'Pasta',
        'Bread (White)': 'Pan (Blanco)', 'Whole Wheat Bread': 'Pan Integral', 'Barley': 'Cebada',
        'Buckwheat': 'Trigo Sarraceno', 'Millet': 'Mijo', 'Bulgur': 'Bulgur', 'Couscous': 'Cuscús', 'Wild Rice': 'Arroz Salvaje',
        'Milk (Whole)': 'Leche (Entera)', 'Greek Yogurt': 'Yogur Griego', 'Cheese (Cheddar)': 'Queso (Cheddar)',
        'Cottage Cheese': 'Requesón', 'Butter': 'Mantequilla', 'Mozzarella': 'Mozzarella', 'Parmesan': 'Parmesano',
        'Feta Cheese': 'Queso Feta', 'Ricotta': 'Ricotta', 'Yogurt': 'Yogur', 'Kefir': 'Kéfir', 'Sour Cream': 'Crema Agria',
        'Almonds': 'Almendras', 'Walnuts': 'Nueces', 'Peanuts': 'Cacahuetes', 'Chia Seeds': 'Semillas de Chía',
        'Flax Seeds': 'Semillas de Lino', 'Sunflower Seeds': 'Semillas de Girasol', 'Pistachios': 'Pistachos', 'Cashews': 'Anacardos',
        'Hazelnuts': 'Avellanas', 'Brazil Nuts': 'Nueces de Brasil', 'Macadamia Nuts': 'Nueces de Macadamia', 'Pecans': 'Pecanas',
        'Pumpkin Seeds': 'Semillas de Calabaza', 'Sesame Seeds': 'Semillas de Sésamo', 'Pine Nuts': 'Piñones',
        'Water': 'Agua', 'Coffee': 'Café', 'Green Tea': 'Té Verde', 'Orange Juice': 'Zumo de Naranja',
        'Apple Juice': 'Zumo de Manzana', 'Milk (Low Fat)': 'Leche (Desnatada)', 'Almond Milk': 'Leche de Almendras', 'Soy Milk': 'Leche de Soja',
        'Olive Oil': 'Aceite de Oliva', 'Coconut Oil': 'Aceite de Coco', 'Avocado Oil': 'Aceite de Aguacate', 'Canola Oil': 'Aceite de Canola', 'Sunflower Oil': 'Aceite de Girasol',
        'Pizza': 'Pizza', 'Hamburger': 'Hamburguesa',
        'Tomato Sauce': 'Salsa de Tomate', 'Ketchup': 'Ketchup', 'Mayonnaise': 'Mayonesa', 'Mustard': 'Mostaza', 'BBQ Sauce': 'Salsa BBQ',
        'Ranch Dressing': 'Aderezo Ranch', 'Caesar Dressing': 'Aderezo César', 'Italian Dressing': 'Aderezo Italiano', 'Honey Mustard': 'Mostaza con Miel',
        'Soy Sauce': 'Salsa de Soja', 'Hot Sauce': 'Salsa Picante', 'Pesto': 'Pesto', 'Tartar Sauce': 'Salsa Tartara', 'Sriracha': 'Sriracha',
        'Worcestershire Sauce': 'Salsa Worcestershire', 'Teriyaki Sauce': 'Salsa Teriyaki', 'Alfredo Sauce': 'Salsa Alfredo',
        'Marinara Sauce': 'Salsa Marinara', 'Hollandaise Sauce': 'Salsa Holandesa', 'Barbecue Sauce': 'Salsa Barbacoa'
    },
    de: {
        'Apple': 'Apfel', 'Banana': 'Banane', 'Orange': 'Orange', 'Strawberry': 'Erdbeere', 'Blueberry': 'Heidelbeere',
        'Grape': 'Traube', 'Watermelon': 'Wassermelone', 'Pineapple': 'Ananas', 'Mango': 'Mango', 'Avocado': 'Avocado',
        'Cherry': 'Kirsche', 'Peach': 'Pfirsich', 'Pear': 'Birne', 'Plum': 'Pflaume', 'Kiwi': 'Kiwi', 'Lemon': 'Zitrone',
        'Lime': 'Limette', 'Grapefruit': 'Grapefruit', 'Raspberry': 'Himbeere', 'Blackberry': 'Brombeere', 'Cranberry': 'Preiselbeere',
        'Pomegranate': 'Granatapfel', 'Papaya': 'Papaya', 'Coconut': 'Kokosnuss', 'Fig': 'Feige', 'Date': 'Dattel', 'Apricot': 'Aprikose',
        'Broccoli': 'Brokkoli', 'Carrot': 'Karotte', 'Spinach': 'Spinat', 'Tomato': 'Tomate', 'Cucumber': 'Gurke',
        'Bell Pepper': 'Paprika', 'Onion': 'Zwiebel', 'Potato': 'Kartoffel', 'Sweet Potato': 'Süßkartoffel', 'Zucchini': 'Zucchini',
        'Cauliflower': 'Blumenkohl', 'Cabbage': 'Kohl', 'Lettuce': 'Salat', 'Celery': 'Sellerie', 'Asparagus': 'Spargel',
        'Mushroom': 'Pilz', 'Eggplant': 'Aubergine', 'Corn': 'Mais', 'Peas': 'Erbsen', 'Green Beans': 'Grüne Bohnen',
        'Radish': 'Rettich', 'Beetroot': 'Rote Bete', 'Artichoke': 'Artischocke', 'Brussels Sprouts': 'Rosenkohl', 'Kale': 'Grünkohl',
        'Chicken Breast': 'Hähnchenbrust', 'Salmon': 'Lachs', 'Eggs': 'Eier', 'Beef (Lean)': 'Rindfleisch (Mager)', 'Turkey Breast': 'Putenbrust',
        'Tuna': 'Thunfisch', 'Tofu': 'Tofu', 'Lentils': 'Linsen', 'Chickpeas': 'Kichererbsen', 'Black Beans': 'Schwarze Bohnen',
        'Pork (Lean)': 'Schweinefleisch (Mager)', 'Cod': 'Kabeljau', 'Shrimp': 'Garnelen', 'Chicken Thigh': 'Hähnchenschenkel', 'Duck': 'Ente',
        'Sardines': 'Sardine', 'Mackerel': 'Makrele', 'Tilapia': 'Tilapia', 'White Beans': 'Weiße Bohnen', 'Kidney Beans': 'Kidneybohnen',
        'Edamame': 'Edamame', 'Tempeh': 'Tempeh', 'Seitan': 'Seitan', 'Whey Protein': 'Molkenprotein', 'Casein Protein': 'Casein',
        'Rice (White)': 'Reis (Weiß)', 'Brown Rice': 'Vollkornreis', 'Oats': 'Hafer', 'Quinoa': 'Quinoa', 'Pasta': 'Nudeln',
        'Bread (White)': 'Brot (Weiß)', 'Whole Wheat Bread': 'Vollkornbrot', 'Barley': 'Gerste',
        'Buckwheat': 'Buchweizen', 'Millet': 'Hirse', 'Bulgur': 'Bulgur', 'Couscous': 'Couscous', 'Wild Rice': 'Wildreis',
        'Milk (Whole)': 'Milch (Vollmilch)', 'Greek Yogurt': 'Griechischer Joghurt', 'Cheese (Cheddar)': 'Käse (Cheddar)',
        'Cottage Cheese': 'Hüttenkäse', 'Butter': 'Butter', 'Mozzarella': 'Mozzarella', 'Parmesan': 'Parmesan',
        'Feta Cheese': 'Feta', 'Ricotta': 'Ricotta', 'Yogurt': 'Joghurt', 'Kefir': 'Kefir', 'Sour Cream': 'Sauerrahm',
        'Almonds': 'Mandel', 'Walnuts': 'Walnüsse', 'Peanuts': 'Erdnüsse', 'Chia Seeds': 'Chiasamen',
        'Flax Seeds': 'Leinsamen', 'Sunflower Seeds': 'Sonnenblumenkerne', 'Pistachios': 'Pistazien', 'Cashews': 'Cashewnüsse',
        'Hazelnuts': 'Haselnüsse', 'Brazil Nuts': 'Paranüsse', 'Macadamia Nuts': 'Macadamianüsse', 'Pecans': 'Pekannüsse',
        'Pumpkin Seeds': 'Kürbiskerne', 'Sesame Seeds': 'Sesamsamen', 'Pine Nuts': 'Pinienkerne',
        'Water': 'Wasser', 'Coffee': 'Kaffee', 'Green Tea': 'Grüner Tee', 'Orange Juice': 'Orangensaft',
        'Apple Juice': 'Apfelsaft', 'Milk (Low Fat)': 'Milch (Fettarm)', 'Almond Milk': 'Mandelmilch', 'Soy Milk': 'Sojamilch',
        'Olive Oil': 'Olivenöl', 'Coconut Oil': 'Kokosöl', 'Avocado Oil': 'Avocadoöl', 'Canola Oil': 'Rapsöl', 'Sunflower Oil': 'Sonnenblumenöl',
        'Pizza': 'Pizza', 'Hamburger': 'Hamburger',
        'Tomato Sauce': 'Tomatensauce', 'Ketchup': 'Ketchup', 'Mayonnaise': 'Mayonnaise', 'Mustard': 'Senf', 'BBQ Sauce': 'BBQ-Sauce',
        'Ranch Dressing': 'Ranch-Dressing', 'Caesar Dressing': 'Caesar-Dressing', 'Italian Dressing': 'Italienisches Dressing', 'Honey Mustard': 'Honigsenf',
        'Soy Sauce': 'Sojasauce', 'Hot Sauce': 'Scharfe Sauce', 'Pesto': 'Pesto', 'Tartar Sauce': 'Tartarensauce', 'Sriracha': 'Sriracha',
        'Worcestershire Sauce': 'Worcestershiresauce', 'Teriyaki Sauce': 'Teriyakisauce', 'Alfredo Sauce': 'Alfredosauce',
        'Marinara Sauce': 'Marinarasauce', 'Hollandaise Sauce': 'Hollandaise', 'Barbecue Sauce': 'Barbecuesauce'
    },
    zh: {
        'Apple': '苹果', 'Banana': '香蕉', 'Orange': '橙子', 'Strawberry': '草莓', 'Blueberry': '蓝莓',
        'Grape': '葡萄', 'Watermelon': '西瓜', 'Pineapple': '菠萝', 'Mango': '芒果', 'Avocado': '牛油果',
        'Cherry': '樱桃', 'Peach': '桃子', 'Pear': '梨', 'Plum': '李子', 'Kiwi': '猕猴桃', 'Lemon': '柠檬',
        'Lime': '青柠', 'Grapefruit': '葡萄柚', 'Raspberry': '覆盆子', 'Blackberry': '黑莓', 'Cranberry': '蔓越莓',
        'Pomegranate': '石榴', 'Papaya': '木瓜', 'Coconut': '椰子', 'Fig': '无花果', 'Date': '枣', 'Apricot': '杏',
        'Broccoli': '西兰花', 'Carrot': '胡萝卜', 'Spinach': '菠菜', 'Tomato': '番茄', 'Cucumber': '黄瓜',
        'Bell Pepper': '甜椒', 'Onion': '洋葱', 'Potato': '土豆', 'Sweet Potato': '红薯', 'Zucchini': '西葫芦',
        'Cauliflower': '花椰菜', 'Cabbage': '卷心菜', 'Lettuce': '生菜', 'Celery': '芹菜', 'Asparagus': '芦笋',
        'Mushroom': '蘑菇', 'Eggplant': '茄子', 'Corn': '玉米', 'Peas': '豌豆', 'Green Beans': '青豆',
        'Radish': '萝卜', 'Beetroot': '甜菜根', 'Artichoke': '洋蓟', 'Brussels Sprouts': '抱子甘蓝', 'Kale': '羽衣甘蓝',
        'Chicken Breast': '鸡胸肉', 'Salmon': '三文鱼', 'Eggs': '鸡蛋', 'Beef (Lean)': '瘦牛肉', 'Turkey Breast': '火鸡胸',
        'Tuna': '金枪鱼', 'Tofu': '豆腐', 'Lentils': '扁豆', 'Chickpeas': '鹰嘴豆', 'Black Beans': '黑豆',
        'Pork (Lean)': '瘦猪肉', 'Cod': '鳕鱼', 'Shrimp': '虾', 'Chicken Thigh': '鸡腿', 'Duck': '鸭',
        'Sardines': '沙丁鱼', 'Mackerel': '鲭鱼', 'Tilapia': '罗非鱼', 'White Beans': '白豆', 'Kidney Beans': '芸豆',
        'Edamame': '毛豆', 'Tempeh': '天贝', 'Seitan': '面筋', 'Whey Protein': '乳清蛋白', 'Casein Protein': '酪蛋白',
        'Rice (White)': '白米', 'Brown Rice': '糙米', 'Oats': '燕麦', 'Quinoa': '藜麦', 'Pasta': '意大利面',
        'Bread (White)': '白面包', 'Whole Wheat Bread': '全麦面包', 'Barley': '大麦',
        'Buckwheat': '荞麦', 'Millet': '小米', 'Bulgur': '碎小麦', 'Couscous': '库斯库斯', 'Wild Rice': '野米',
        'Milk (Whole)': '全脂牛奶', 'Greek Yogurt': '希腊酸奶', 'Cheese (Cheddar)': '切达奶酪',
        'Cottage Cheese': '白软干酪', 'Butter': '黄油', 'Mozzarella': '马苏里拉', 'Parmesan': '帕尔马干酪',
        'Feta Cheese': '羊奶酪', 'Ricotta': '里科塔', 'Yogurt': '酸奶', 'Kefir': '开菲尔', 'Sour Cream': '酸奶油',
        'Almonds': '杏仁', 'Walnuts': '核桃', 'Peanuts': '花生', 'Chia Seeds': '奇亚籽',
        'Flax Seeds': '亚麻籽', 'Sunflower Seeds': '葵花籽', 'Pistachios': '开心果', 'Cashews': '腰果',
        'Hazelnuts': '榛子', 'Brazil Nuts': '巴西坚果', 'Macadamia Nuts': '澳洲坚果', 'Pecans': '山核桃',
        'Pumpkin Seeds': '南瓜籽', 'Sesame Seeds': '芝麻', 'Pine Nuts': '松子',
        'Water': '水', 'Coffee': '咖啡', 'Green Tea': '绿茶', 'Orange Juice': '橙汁',
        'Apple Juice': '苹果汁', 'Milk (Low Fat)': '低脂牛奶', 'Almond Milk': '杏仁奶', 'Soy Milk': '豆奶',
        'Olive Oil': '橄榄油', 'Coconut Oil': '椰子油', 'Avocado Oil': '牛油果油', 'Canola Oil': '菜籽油', 'Sunflower Oil': '葵花籽油',
        'Pizza': '披萨', 'Hamburger': '汉堡',
        'Tomato Sauce': '番茄酱', 'Ketchup': '番茄酱', 'Mayonnaise': '蛋黄酱', 'Mustard': '芥末', 'BBQ Sauce': '烧烤酱',
        'Ranch Dressing': '牧场沙拉酱', 'Caesar Dressing': '凯撒沙拉酱', 'Italian Dressing': '意大利沙拉酱', 'Honey Mustard': '蜂蜜芥末',
        'Soy Sauce': '酱油', 'Hot Sauce': '辣酱', 'Pesto': '香蒜酱', 'Tartar Sauce': '塔塔酱', 'Sriracha': '是拉差',
        'Worcestershire Sauce': '伍斯特沙司', 'Teriyaki Sauce': '照烧酱', 'Alfredo Sauce': '阿尔弗雷多酱',
        'Marinara Sauce': '马利纳拉酱', 'Hollandaise Sauce': '荷兰酱', 'Barbecue Sauce': '烧烤酱'
    }
};

// Get translated food name
function getFoodName(foodName) {
    return foodNamesTranslations[currentLang]?.[foodName] || foodName;
}

// Apply translations
function applyTranslations() {
    document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.getAttribute('data-translate');
        el.textContent = translate(key);
    });
    
    document.querySelectorAll('[data-translate-placeholder]').forEach(el => {
        const key = el.getAttribute('data-translate-placeholder');
        el.placeholder = translate(key);
    });
    
    // Update select options
    document.querySelectorAll('select option[data-translate]').forEach(option => {
        const key = option.getAttribute('data-translate');
        option.textContent = translate(key);
    });
    
    // Re-render foods with translated names (including per100g)
    renderFoods(currentCategory);
    
    // Update calculator results if visible
    updateCalculatorResults();
}

// ===== FOODS DATABASE =====
const foodsDatabase = [
    // FRUITS
    { id: 'apple', name: 'Apple', category: 'fruits', emoji: '🍎', calories: 52, protein: 0.3, carbs: 14, fat: 0.2, fiber: 2.4, sugar: 10, sodium: 1, portion: '1 media (182g)' },
    { id: 'banana', name: 'Banana', category: 'fruits', emoji: '🍌', calories: 89, protein: 1.1, carbs: 23, fat: 0.3, fiber: 2.6, sugar: 12, sodium: 1, portion: '1 media (118g)' },
    { id: 'orange', name: 'Orange', category: 'fruits', emoji: '🍊', calories: 47, protein: 0.9, carbs: 12, fat: 0.1, fiber: 2.4, sugar: 9, sodium: 0, portion: '1 media (154g)' },
    { id: 'strawberry', name: 'Strawberry', category: 'fruits', emoji: '🍓', calories: 32, protein: 0.7, carbs: 8, fat: 0.3, fiber: 2.0, sugar: 4.9, sodium: 1, portion: '1 tazza (144g)' },
    { id: 'blueberry', name: 'Blueberry', category: 'fruits', emoji: '🫐', calories: 57, protein: 0.7, carbs: 14, fat: 0.3, fiber: 2.4, sugar: 10, sodium: 1, portion: '1 tazza (148g)' },
    { id: 'grape', name: 'Grape', category: 'fruits', emoji: '🍇', calories: 69, protein: 0.7, carbs: 18, fat: 0.2, fiber: 0.9 },
    { id: 'watermelon', name: 'Watermelon', category: 'fruits', emoji: '🍉', calories: 30, protein: 0.6, carbs: 8, fat: 0.2, fiber: 0.4 },
    { id: 'pineapple', name: 'Pineapple', category: 'fruits', emoji: '🍍', calories: 50, protein: 0.5, carbs: 13, fat: 0.1, fiber: 1.4 },
    { id: 'mango', name: 'Mango', category: 'fruits', emoji: '🥭', calories: 60, protein: 0.8, carbs: 15, fat: 0.4, fiber: 1.6 },
    { id: 'avocado', name: 'Avocado', category: 'fruits', emoji: '🥑', calories: 160, protein: 2, carbs: 9, fat: 15, fiber: 7 },
    { id: 'cherry', name: 'Cherry', category: 'fruits', emoji: '🍒', calories: 50, protein: 1, carbs: 12, fat: 0.3, fiber: 1.6, sugar: 8, sodium: 0, portion: '1 tazza (154g)' },
    { id: 'peach', name: 'Peach', category: 'fruits', emoji: '🍑', calories: 39, protein: 0.9, carbs: 10, fat: 0.3, fiber: 1.5 },
    { id: 'pear', name: 'Pear', category: 'fruits', emoji: '🍐', calories: 57, protein: 0.4, carbs: 15, fat: 0.1, fiber: 3.1 },
    { id: 'plum', name: 'Plum', category: 'fruits', emoji: '🟣', calories: 46, protein: 0.7, carbs: 11, fat: 0.3, fiber: 1.4 },
    { id: 'kiwi', name: 'Kiwi', category: 'fruits', emoji: '🥝', calories: 61, protein: 1.1, carbs: 15, fat: 0.5, fiber: 3 },
    { id: 'lemon', name: 'Lemon', category: 'fruits', emoji: '🍋', calories: 29, protein: 1.1, carbs: 9, fat: 0.3, fiber: 2.8 },
    { id: 'lime', name: 'Lime', category: 'fruits', emoji: '🟢', calories: 30, protein: 0.7, carbs: 11, fat: 0.2, fiber: 2.8 },
    { id: 'grapefruit', name: 'Grapefruit', category: 'fruits', emoji: '🍊', calories: 42, protein: 0.8, carbs: 11, fat: 0.1, fiber: 1.6 },
    { id: 'raspberry', name: 'Raspberry', category: 'fruits', emoji: '🫐', calories: 52, protein: 1.2, carbs: 12, fat: 0.7, fiber: 6.5 },
    { id: 'blackberry', name: 'Blackberry', category: 'fruits', emoji: '🫐', calories: 43, protein: 1.4, carbs: 10, fat: 0.5, fiber: 5.3 },
    { id: 'cranberry', name: 'Cranberry', category: 'fruits', emoji: '🫐', calories: 46, protein: 0.4, carbs: 12, fat: 0.1, fiber: 4.6 },
    { id: 'pomegranate', name: 'Pomegranate', category: 'fruits', emoji: '🫐', calories: 83, protein: 1.7, carbs: 19, fat: 1.2, fiber: 4 },
    { id: 'papaya', name: 'Papaya', category: 'fruits', emoji: '🥭', calories: 43, protein: 0.5, carbs: 11, fat: 0.3, fiber: 1.7 },
    { id: 'coconut', name: 'Coconut', category: 'fruits', emoji: '🥥', calories: 354, protein: 3.3, carbs: 15, fat: 33, fiber: 9 },
    { id: 'fig', name: 'Fig', category: 'fruits', emoji: '🟣', calories: 74, protein: 0.8, carbs: 19, fat: 0.3, fiber: 2.9 },
    { id: 'date', name: 'Date', category: 'fruits', emoji: '🟤', calories: 282, protein: 2.5, carbs: 75, fat: 0.4, fiber: 8 },
    { id: 'apricot', name: 'Apricot', category: 'fruits', emoji: '🟠', calories: 48, protein: 1.4, carbs: 11, fat: 0.4, fiber: 2 },
    
    // VEGETABLES
    { id: 'broccoli', name: 'Broccoli', category: 'vegetables', emoji: '🥦', calories: 34, protein: 2.8, carbs: 7, fat: 0.4, fiber: 2.6 },
    { id: 'carrot', name: 'Carrot', category: 'vegetables', emoji: '🥕', calories: 41, protein: 0.9, carbs: 10, fat: 0.2, fiber: 2.8 },
    { id: 'spinach', name: 'Spinach', category: 'vegetables', emoji: '🥬', calories: 23, protein: 2.9, carbs: 4, fat: 0.4, fiber: 2.2 },
    { id: 'tomato', name: 'Tomato', category: 'vegetables', emoji: '🍅', calories: 18, protein: 0.9, carbs: 4, fat: 0.2, fiber: 1.2 },
    { id: 'cucumber', name: 'Cucumber', category: 'vegetables', emoji: '🥒', calories: 16, protein: 0.7, carbs: 4, fat: 0.1, fiber: 0.5 },
    { id: 'bell-pepper', name: 'Bell Pepper', category: 'vegetables', emoji: '🫑', calories: 31, protein: 1, carbs: 7, fat: 0.3, fiber: 2.5 },
    { id: 'onion', name: 'Onion', category: 'vegetables', emoji: '🧅', calories: 40, protein: 1.1, carbs: 9, fat: 0.1, fiber: 1.7 },
    { id: 'potato', name: 'Potato', category: 'vegetables', emoji: '🥔', calories: 77, protein: 2, carbs: 17, fat: 0.1, fiber: 2.2 },
    { id: 'sweet-potato', name: 'Sweet Potato', category: 'vegetables', emoji: '🍠', calories: 86, protein: 1.6, carbs: 20, fat: 0.1, fiber: 3 },
    { id: 'zucchini', name: 'Zucchini', category: 'vegetables', emoji: '🥒', calories: 17, protein: 1.2, carbs: 3, fat: 0.3, fiber: 1 },
    { id: 'cauliflower', name: 'Cauliflower', category: 'vegetables', emoji: '🥦', calories: 25, protein: 1.9, carbs: 5, fat: 0.3, fiber: 2 },
    { id: 'cabbage', name: 'Cabbage', category: 'vegetables', emoji: '🥬', calories: 25, protein: 1.3, carbs: 6, fat: 0.1, fiber: 2.5 },
    { id: 'lettuce', name: 'Lettuce', category: 'vegetables', emoji: '🥬', calories: 15, protein: 1.4, carbs: 3, fat: 0.2, fiber: 1.3 },
    { id: 'celery', name: 'Celery', category: 'vegetables', emoji: '🥬', calories: 16, protein: 0.7, carbs: 3, fat: 0.2, fiber: 1.6 },
    { id: 'asparagus', name: 'Asparagus', category: 'vegetables', emoji: '🥬', calories: 20, protein: 2.2, carbs: 4, fat: 0.1, fiber: 2.1 },
    { id: 'mushroom', name: 'Mushroom', category: 'vegetables', emoji: '🍄', calories: 22, protein: 3.1, carbs: 3, fat: 0.3, fiber: 1 },
    { id: 'eggplant', name: 'Eggplant', category: 'vegetables', emoji: '🍆', calories: 25, protein: 1, carbs: 6, fat: 0.2, fiber: 3 },
    { id: 'corn', name: 'Corn', category: 'vegetables', emoji: '🌽', calories: 86, protein: 3.3, carbs: 19, fat: 1.2, fiber: 2.7 },
    { id: 'peas', name: 'Peas', category: 'vegetables', emoji: '🟢', calories: 81, protein: 5.4, carbs: 14, fat: 0.4, fiber: 5.1 },
    { id: 'green-beans', name: 'Green Beans', category: 'vegetables', emoji: '🟢', calories: 31, protein: 1.8, carbs: 7, fat: 0.2, fiber: 2.7 },
    { id: 'radish', name: 'Radish', category: 'vegetables', emoji: '🔴', calories: 16, protein: 0.7, carbs: 3, fat: 0.1, fiber: 1.6 },
    { id: 'beetroot', name: 'Beetroot', category: 'vegetables', emoji: '🔴', calories: 43, protein: 1.6, carbs: 10, fat: 0.2, fiber: 2.8 },
    { id: 'artichoke', name: 'Artichoke', category: 'vegetables', emoji: '🥬', calories: 47, protein: 3.3, carbs: 11, fat: 0.2, fiber: 5.4 },
    { id: 'brussels-sprouts', name: 'Brussels Sprouts', category: 'vegetables', emoji: '🥬', calories: 43, protein: 3.4, carbs: 9, fat: 0.3, fiber: 3.8 },
    { id: 'kale', name: 'Kale', category: 'vegetables', emoji: '🥬', calories: 49, protein: 4.3, carbs: 9, fat: 0.9, fiber: 2 },
    
    // PROTEINS
    { id: 'chicken-breast', name: 'Chicken Breast', category: 'proteins', emoji: '🍗', calories: 165, protein: 31, carbs: 0, fat: 3.6, fiber: 0, sugar: 0, sodium: 74, portion: '100g (1 petto medio)' },
    { id: 'salmon', name: 'Salmon', category: 'proteins', emoji: '🐟', calories: 208, protein: 20, carbs: 0, fat: 13, fiber: 0, sugar: 0, sodium: 44, portion: '100g (1 filetto)' },
    { id: 'eggs', name: 'Eggs', category: 'proteins', emoji: '🥚', calories: 155, protein: 13, carbs: 1.1, fat: 11, fiber: 0, sugar: 1.1, sodium: 124, portion: '1 uovo grande (50g)' },
    { id: 'beef', name: 'Beef (Lean)', category: 'proteins', emoji: '🥩', calories: 250, protein: 26, carbs: 0, fat: 17, fiber: 0 },
    { id: 'turkey', name: 'Turkey Breast', category: 'proteins', emoji: '🦃', calories: 135, protein: 30, carbs: 0, fat: 1, fiber: 0 },
    { id: 'tuna', name: 'Tuna', category: 'proteins', emoji: '🐟', calories: 144, protein: 30, carbs: 0, fat: 1, fiber: 0 },
    { id: 'tofu', name: 'Tofu', category: 'proteins', emoji: '🧈', calories: 76, protein: 8, carbs: 2, fat: 5, fiber: 0.3 },
    { id: 'lentils', name: 'Lentils', category: 'proteins', emoji: '🫘', calories: 116, protein: 9, carbs: 20, fat: 0.4, fiber: 8 },
    { id: 'chickpeas', name: 'Chickpeas', category: 'proteins', emoji: '🫘', calories: 164, protein: 9, carbs: 27, fat: 2.6, fiber: 8 },
    { id: 'black-beans', name: 'Black Beans', category: 'proteins', emoji: '🫘', calories: 132, protein: 9, carbs: 24, fat: 0.5, fiber: 8.7 },
    { id: 'pork-lean', name: 'Pork (Lean)', category: 'proteins', emoji: '🥩', calories: 242, protein: 27, carbs: 0, fat: 14, fiber: 0 },
    { id: 'cod', name: 'Cod', category: 'proteins', emoji: '🐟', calories: 82, protein: 18, carbs: 0, fat: 0.7, fiber: 0 },
    { id: 'shrimp', name: 'Shrimp', category: 'proteins', emoji: '🦐', calories: 99, protein: 24, carbs: 0.2, fat: 0.3, fiber: 0 },
    { id: 'chicken-thigh', name: 'Chicken Thigh', category: 'proteins', emoji: '🍗', calories: 209, protein: 26, carbs: 0, fat: 10, fiber: 0 },
    { id: 'duck', name: 'Duck', category: 'proteins', emoji: '🦆', calories: 337, protein: 19, carbs: 0, fat: 28, fiber: 0 },
    { id: 'sardines', name: 'Sardines', category: 'proteins', emoji: '🐟', calories: 208, protein: 25, carbs: 0, fat: 11, fiber: 0 },
    { id: 'mackerel', name: 'Mackerel', category: 'proteins', emoji: '🐟', calories: 205, protein: 19, carbs: 0, fat: 14, fiber: 0 },
    { id: 'tilapia', name: 'Tilapia', category: 'proteins', emoji: '🐟', calories: 128, protein: 26, carbs: 0, fat: 2.7, fiber: 0 },
    { id: 'white-beans', name: 'White Beans', category: 'proteins', emoji: '🫘', calories: 139, protein: 9, carbs: 25, fat: 0.4, fiber: 6.3 },
    { id: 'kidney-beans', name: 'Kidney Beans', category: 'proteins', emoji: '🫘', calories: 127, protein: 8.7, carbs: 23, fat: 0.5, fiber: 6.4 },
    { id: 'edamame', name: 'Edamame', category: 'proteins', emoji: '🟢', calories: 122, protein: 11, carbs: 10, fat: 5, fiber: 5 },
    { id: 'tempeh', name: 'Tempeh', category: 'proteins', emoji: '🧈', calories: 193, protein: 19, carbs: 9, fat: 11, fiber: 0 },
    { id: 'seitan', name: 'Seitan', category: 'proteins', emoji: '🧈', calories: 370, protein: 75, carbs: 14, fat: 1.9, fiber: 0.6 },
    { id: 'whey-protein', name: 'Whey Protein', category: 'proteins', emoji: '🥤', calories: 103, protein: 25, carbs: 1, fat: 0.5, fiber: 0 },
    { id: 'casein-protein', name: 'Casein Protein', category: 'proteins', emoji: '🥤', calories: 103, protein: 25, carbs: 1, fat: 0.5, fiber: 0 },
    
    // GRAINS
    { id: 'rice', name: 'Rice (White)', category: 'grains', emoji: '🍚', calories: 130, protein: 2.7, carbs: 28, fat: 0.3, fiber: 0.4 },
    { id: 'brown-rice', name: 'Brown Rice', category: 'grains', emoji: '🌾', calories: 111, protein: 2.6, carbs: 23, fat: 0.9, fiber: 1.8 },
    { id: 'oats', name: 'Oats', category: 'grains', emoji: '🌾', calories: 389, protein: 17, carbs: 66, fat: 7, fiber: 11 },
    { id: 'quinoa', name: 'Quinoa', category: 'grains', emoji: '🌾', calories: 368, protein: 14, carbs: 64, fat: 6, fiber: 7 },
    { id: 'pasta', name: 'Pasta', category: 'grains', emoji: '🍝', calories: 131, protein: 5, carbs: 25, fat: 1.1, fiber: 1.8 },
    { id: 'bread', name: 'Bread (White)', category: 'grains', emoji: '🍞', calories: 265, protein: 9, carbs: 49, fat: 3.2, fiber: 2.7 },
    { id: 'whole-wheat-bread', name: 'Whole Wheat Bread', category: 'grains', emoji: '🍞', calories: 247, protein: 13, carbs: 41, fat: 4.2, fiber: 7 },
    { id: 'barley', name: 'Barley', category: 'grains', emoji: '🌾', calories: 123, protein: 2.3, carbs: 28, fat: 0.4, fiber: 3.8 },
    { id: 'buckwheat', name: 'Buckwheat', category: 'grains', emoji: '🌾', calories: 343, protein: 13, carbs: 72, fat: 3.4, fiber: 10 },
    { id: 'millet', name: 'Millet', category: 'grains', emoji: '🌾', calories: 378, protein: 11, carbs: 73, fat: 4.2, fiber: 8.5 },
    { id: 'bulgur', name: 'Bulgur', category: 'grains', emoji: '🌾', calories: 83, protein: 3.1, carbs: 19, fat: 0.2, fiber: 4.5 },
    { id: 'couscous', name: 'Couscous', category: 'grains', emoji: '🌾', calories: 112, protein: 3.8, carbs: 23, fat: 0.2, fiber: 1.4 },
    { id: 'wild-rice', name: 'Wild Rice', category: 'grains', emoji: '🌾', calories: 101, protein: 4, carbs: 21, fat: 0.3, fiber: 1.8 },
    
    // DAIRY
    { id: 'milk', name: 'Milk (Whole)', category: 'dairy', emoji: '🥛', calories: 61, protein: 3.2, carbs: 4.8, fat: 3.3, fiber: 0 },
    { id: 'greek-yogurt', name: 'Greek Yogurt', category: 'dairy', emoji: '🥛', calories: 59, protein: 10, carbs: 3.6, fat: 0.4, fiber: 0 },
    { id: 'cheese', name: 'Cheese (Cheddar)', category: 'dairy', emoji: '🧀', calories: 402, protein: 25, carbs: 1.3, fat: 33, fiber: 0 },
    { id: 'cottage-cheese', name: 'Cottage Cheese', category: 'dairy', emoji: '🧀', calories: 98, protein: 11, carbs: 3.4, fat: 4.3, fiber: 0 },
    { id: 'butter', name: 'Butter', category: 'dairy', emoji: '🧈', calories: 717, protein: 0.9, carbs: 0.1, fat: 81, fiber: 0 },
    { id: 'mozzarella', name: 'Mozzarella', category: 'dairy', emoji: '🧀', calories: 300, protein: 22, carbs: 2.2, fat: 22, fiber: 0 },
    { id: 'parmesan', name: 'Parmesan', category: 'dairy', emoji: '🧀', calories: 431, protein: 38, carbs: 4.1, fat: 29, fiber: 0 },
    { id: 'feta-cheese', name: 'Feta Cheese', category: 'dairy', emoji: '🧀', calories: 264, protein: 14, carbs: 4, fat: 21, fiber: 0 },
    { id: 'ricotta', name: 'Ricotta', category: 'dairy', emoji: '🧀', calories: 174, protein: 11, carbs: 3, fat: 13, fiber: 0 },
    { id: 'yogurt', name: 'Yogurt', category: 'dairy', emoji: '🥛', calories: 59, protein: 10, carbs: 3.6, fat: 0.4, fiber: 0 },
    { id: 'kefir', name: 'Kefir', category: 'dairy', emoji: '🥛', calories: 41, protein: 3.3, carbs: 4.5, fat: 1, fiber: 0 },
    { id: 'sour-cream', name: 'Sour Cream', category: 'dairy', emoji: '🥛', calories: 198, protein: 2.3, carbs: 4.6, fat: 19, fiber: 0 },
    
    // NUTS & SEEDS
    { id: 'almonds', name: 'Almonds', category: 'nuts', emoji: '🥜', calories: 579, protein: 21, carbs: 22, fat: 50, fiber: 12 },
    { id: 'walnuts', name: 'Walnuts', category: 'nuts', emoji: '🥜', calories: 654, protein: 15, carbs: 14, fat: 65, fiber: 6.7 },
    { id: 'peanuts', name: 'Peanuts', category: 'nuts', emoji: '🥜', calories: 567, protein: 26, carbs: 16, fat: 49, fiber: 8.5 },
    { id: 'chia-seeds', name: 'Chia Seeds', category: 'nuts', emoji: '🌱', calories: 486, protein: 17, carbs: 42, fat: 31, fiber: 34 },
    { id: 'flax-seeds', name: 'Flax Seeds', category: 'nuts', emoji: '🌱', calories: 534, protein: 18, carbs: 29, fat: 42, fiber: 27 },
    { id: 'sunflower-seeds', name: 'Sunflower Seeds', category: 'nuts', emoji: '🌻', calories: 584, protein: 21, carbs: 20, fat: 51, fiber: 8.6 },
    { id: 'pistachios', name: 'Pistachios', category: 'nuts', emoji: '🥜', calories: 560, protein: 20, carbs: 28, fat: 45, fiber: 10 },
    { id: 'cashews', name: 'Cashews', category: 'nuts', emoji: '🥜', calories: 553, protein: 18, carbs: 30, fat: 44, fiber: 3.3 },
    { id: 'hazelnuts', name: 'Hazelnuts', category: 'nuts', emoji: '🥜', calories: 628, protein: 15, carbs: 17, fat: 61, fiber: 10 },
    { id: 'brazil-nuts', name: 'Brazil Nuts', category: 'nuts', emoji: '🥜', calories: 659, protein: 14, carbs: 12, fat: 67, fiber: 7.5 },
    { id: 'macadamia-nuts', name: 'Macadamia Nuts', category: 'nuts', emoji: '🥜', calories: 718, protein: 8, carbs: 14, fat: 76, fiber: 8.6 },
    { id: 'pecans', name: 'Pecans', category: 'nuts', emoji: '🥜', calories: 691, protein: 9, carbs: 14, fat: 72, fiber: 9.6 },
    { id: 'pumpkin-seeds', name: 'Pumpkin Seeds', category: 'nuts', emoji: '🌱', calories: 559, protein: 30, carbs: 11, fat: 49, fiber: 6 },
    { id: 'sesame-seeds', name: 'Sesame Seeds', category: 'nuts', emoji: '🌱', calories: 573, protein: 18, carbs: 23, fat: 50, fiber: 12 },
    { id: 'pine-nuts', name: 'Pine Nuts', category: 'nuts', emoji: '🌱', calories: 673, protein: 14, carbs: 13, fat: 68, fiber: 3.7, sugar: 3.6, sodium: 2, portion: '1 cucchiaio (9g)' },
    
    // BEVERAGES
    { id: 'water', name: 'Water', category: 'beverages', emoji: '💧', calories: 0, protein: 0, carbs: 0, fat: 0, fiber: 0, sugar: 0, sodium: 7, portion: '1 bicchiere (250ml)' },
    { id: 'coffee', name: 'Coffee', category: 'beverages', emoji: '☕', calories: 2, protein: 0.3, carbs: 0, fat: 0, fiber: 0, sugar: 0, sodium: 5, portion: '1 tazza (240ml)' },
    { id: 'green-tea', name: 'Green Tea', category: 'beverages', emoji: '🍵', calories: 2, protein: 0, carbs: 0, fat: 0, fiber: 0, sugar: 0, sodium: 3, portion: '1 tazza (240ml)' },
    { id: 'orange-juice', name: 'Orange Juice', category: 'beverages', emoji: '🧃', calories: 45, protein: 0.7, carbs: 10, fat: 0.2, fiber: 0.2, sugar: 8.4, sodium: 1, portion: '1 bicchiere (248ml)' },
    { id: 'apple-juice', name: 'Apple Juice', category: 'beverages', emoji: '🧃', calories: 46, protein: 0.1, carbs: 11, fat: 0.1, fiber: 0.2, sugar: 9.6, sodium: 4, portion: '1 bicchiere (248ml)' },
    { id: 'milk-lowfat', name: 'Milk (Low Fat)', category: 'beverages', emoji: '🥛', calories: 42, protein: 3.4, carbs: 5, fat: 1, fiber: 0, sugar: 5, sodium: 44, portion: '1 bicchiere (244ml)' },
    { id: 'almond-milk', name: 'Almond Milk', category: 'beverages', emoji: '🥛', calories: 17, protein: 0.6, carbs: 1.5, fat: 1.2, fiber: 0, sugar: 0.2, sodium: 63, portion: '1 bicchiere (240ml)' },
    { id: 'soy-milk', name: 'Soy Milk', category: 'beverages', emoji: '🥛', calories: 33, protein: 2.9, carbs: 1.8, fat: 1.6, fiber: 0.6, sugar: 0.6, sodium: 51, portion: '1 bicchiere (243ml)' },
    
    // OILS & FATS
    { id: 'olive-oil', name: 'Olive Oil', category: 'oils', emoji: '🫒', calories: 884, protein: 0, carbs: 0, fat: 100, fiber: 0, sugar: 0, sodium: 2, portion: '1 cucchiaio (14g)' },
    { id: 'coconut-oil', name: 'Coconut Oil', category: 'oils', emoji: '🥥', calories: 862, protein: 0, carbs: 0, fat: 100, fiber: 0, sugar: 0, sodium: 0, portion: '1 cucchiaio (14g)' },
    { id: 'avocado-oil', name: 'Avocado Oil', category: 'oils', emoji: '🥑', calories: 884, protein: 0, carbs: 0, fat: 100, fiber: 0, sugar: 0, sodium: 0, portion: '1 cucchiaio (14g)' },
    { id: 'canola-oil', name: 'Canola Oil', category: 'oils', emoji: '🫒', calories: 884, protein: 0, carbs: 0, fat: 100, fiber: 0, sugar: 0, sodium: 0, portion: '1 cucchiaio (14g)' },
    { id: 'sunflower-oil', name: 'Sunflower Oil', category: 'oils', emoji: '🌻', calories: 884, protein: 0, carbs: 0, fat: 100, fiber: 0, sugar: 0, sodium: 0, portion: '1 cucchiaio (14g)' },
    
    // FAST FOOD
    { id: 'pizza', name: 'Pizza', category: 'grains', emoji: '🍕', calories: 266, protein: 11, carbs: 33, fat: 10, fiber: 2.3, sugar: 3.5, sodium: 551, portion: '1 fetta (107g)' },
    { id: 'hamburger', name: 'Hamburger', category: 'proteins', emoji: '🍔', calories: 295, protein: 17, carbs: 33, fat: 10, fiber: 1.5, sugar: 5, sodium: 497, portion: '1 hamburger (105g)' },
    
    // SAUCES
    { id: 'tomato-sauce', name: 'Tomato Sauce', category: 'vegetables', emoji: '🍅', calories: 29, protein: 1.2, carbs: 7, fat: 0.2, fiber: 1.5, sugar: 4.8, sodium: 430, portion: '100g' },
    { id: 'ketchup', name: 'Ketchup', category: 'vegetables', emoji: '🍅', calories: 112, protein: 1.7, carbs: 26, fat: 0.1, fiber: 0.4, sugar: 22, sodium: 907, portion: '100g' },
    { id: 'mayonnaise', name: 'Mayonnaise', category: 'oils', emoji: '🥄', calories: 680, protein: 1, carbs: 0.6, fat: 75, fiber: 0, sugar: 0.3, sodium: 635, portion: '100g' },
    { id: 'mustard', name: 'Mustard', category: 'vegetables', emoji: '🌶️', calories: 66, protein: 4, carbs: 5, fat: 3.7, fiber: 3.2, sugar: 2.8, sodium: 1135, portion: '100g' },
    { id: 'bbq-sauce', name: 'BBQ Sauce', category: 'vegetables', emoji: '🍖', calories: 132, protein: 0.8, carbs: 31, fat: 0.6, fiber: 0.8, sugar: 25, sodium: 950, portion: '100g' },
    { id: 'ranch-dressing', name: 'Ranch Dressing', category: 'oils', emoji: '🥗', calories: 320, protein: 1, carbs: 3, fat: 33, fiber: 0, sugar: 2, sodium: 800, portion: '100g' },
    { id: 'caesar-dressing', name: 'Caesar Dressing', category: 'oils', emoji: '🥗', calories: 542, protein: 2.5, carbs: 3, fat: 58, fiber: 0, sugar: 1.5, sodium: 1200, portion: '100g' },
    { id: 'italian-dressing', name: 'Italian Dressing', category: 'oils', emoji: '🥗', calories: 292, protein: 0.3, carbs: 7, fat: 30, fiber: 0.2, sugar: 4.5, sodium: 1200, portion: '100g' },
    { id: 'honey-mustard', name: 'Honey Mustard', category: 'vegetables', emoji: '🍯', calories: 304, protein: 1.2, carbs: 28, fat: 22, fiber: 0.3, sugar: 24, sodium: 600, portion: '100g' },
    { id: 'soy-sauce', name: 'Soy Sauce', category: 'vegetables', emoji: '🫙', calories: 53, protein: 8, carbs: 5, fat: 0.1, fiber: 0.8, sugar: 0.4, sodium: 5493, portion: '100g' },
    { id: 'hot-sauce', name: 'Hot Sauce', category: 'vegetables', emoji: '🌶️', calories: 36, protein: 1.5, carbs: 7, fat: 0.2, fiber: 1.5, sugar: 4.5, sodium: 2640, portion: '100g' },
    { id: 'pesto', name: 'Pesto', category: 'oils', emoji: '🌿', calories: 263, protein: 5, carbs: 5, fat: 24, fiber: 1.2, sugar: 1.5, sodium: 420, portion: '100g' },
    { id: 'tartar-sauce', name: 'Tartar Sauce', category: 'oils', emoji: '🥄', calories: 211, protein: 0.8, carbs: 5, fat: 20, fiber: 0.1, sugar: 3.5, sodium: 600, portion: '100g' },
    { id: 'sriracha', name: 'Sriracha', category: 'vegetables', emoji: '🌶️', calories: 100, protein: 2, carbs: 20, fat: 0.5, fiber: 1, sugar: 16, sodium: 2200, portion: '100g' },
    { id: 'worcestershire-sauce', name: 'Worcestershire Sauce', category: 'vegetables', emoji: '🫙', calories: 78, protein: 0, carbs: 19, fat: 0, fiber: 0, sugar: 18, sodium: 1040, portion: '100g' },
    { id: 'teriyaki-sauce', name: 'Teriyaki Sauce', category: 'vegetables', emoji: '🍯', calories: 89, protein: 1.5, carbs: 19, fat: 0, fiber: 0.2, sugar: 16, sodium: 2300, portion: '100g' },
    { id: 'alfredo-sauce', name: 'Alfredo Sauce', category: 'dairy', emoji: '🍝', calories: 300, protein: 5, carbs: 3, fat: 30, fiber: 0, sugar: 2, sodium: 800, portion: '100g' },
    { id: 'marinara-sauce', name: 'Marinara Sauce', category: 'vegetables', emoji: '🍝', calories: 29, protein: 1.2, carbs: 7, fat: 0.2, fiber: 1.5, sugar: 4.8, sodium: 430, portion: '100g' },
    { id: 'hollandaise-sauce', name: 'Hollandaise Sauce', category: 'dairy', emoji: '🥄', calories: 504, protein: 3, carbs: 1.5, fat: 54, fiber: 0, sugar: 0.5, sodium: 500, portion: '100g' },
    { id: 'barbecue-sauce', name: 'Barbecue Sauce', category: 'vegetables', emoji: '🍖', calories: 132, protein: 0.8, carbs: 31, fat: 0.6, fiber: 0.8, sugar: 25, sodium: 950, portion: '100g' }
];

// ===== FIREBASE AUTHENTICATION SYSTEM =====
let currentUser = null;
let firebaseAuth = null;
let firebaseApp = null;

// Initialize Firebase (will be called when Firebase SDK loads)
async function initializeFirebase() {
    try {
        // Wait for Firebase to be available
        if (typeof window.firebaseAuth === 'undefined') {
            // Try to get from module import
            const { initializeApp } = await import('https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js');
            const { getAuth } = await import('https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js');
            
            // Firebase configuration - IMPORTANTE: Sostituisci con le tue credenziali
            const firebaseConfig = {
                apiKey: "YOUR_API_KEY",
                authDomain: "YOUR_AUTH_DOMAIN",
                projectId: "YOUR_PROJECT_ID",
                storageBucket: "YOUR_STORAGE_BUCKET",
                messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
                appId: "YOUR_APP_ID"
            };
            
            firebaseApp = initializeApp(firebaseConfig);
            firebaseAuth = getAuth(firebaseApp);
        } else {
            firebaseAuth = window.firebaseAuth;
        }
        
        // Listen for auth state changes
        const { onAuthStateChanged } = await import('https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js');
        onAuthStateChanged(firebaseAuth, (user) => {
            if (user) {
                currentUser = {
                    uid: user.uid,
                    email: user.email,
                    name: user.displayName || user.email
                };
                updateUIForLoggedIn();
            } else {
                currentUser = null;
                updateUIForLoggedOut();
            }
        });
        
        return true;
    } catch (error) {
        console.error('Firebase initialization error:', error);
        // Fallback to check if user was previously logged in
        checkAuthFallback();
        return false;
    }
}

// Fallback check for auth state
function checkAuthFallback() {
    try {
        const userData = localStorage.getItem('currentUser');
        if (userData) {
            currentUser = JSON.parse(userData);
            if (currentUser && currentUser.email) {
                updateUIForLoggedIn();
            } else {
                localStorage.removeItem('currentUser');
                currentUser = null;
                updateUIForLoggedOut();
            }
        } else {
            currentUser = null;
            updateUIForLoggedOut();
        }
    } catch (error) {
        console.error('Auth check error:', error);
        currentUser = null;
        updateUIForLoggedOut();
    }
}

function checkAuth() {
    if (firebaseAuth) {
        // Firebase will handle this via onAuthStateChanged
        return;
    }
    checkAuthFallback();
}

function updateUIForLoggedIn() {
    const loginBtn = document.getElementById('loginBtn');
    const userInfo = document.getElementById('userInfo');
    const userName = document.getElementById('userName');
    
    if (loginBtn) loginBtn.style.display = 'none';
    if (userInfo) {
        userInfo.style.display = 'flex';
        if (userName && currentUser) {
            userName.textContent = currentUser.name || currentUser.email;
        }
    }
}

function updateUIForLoggedOut() {
    const loginBtn = document.getElementById('loginBtn');
    const userInfo = document.getElementById('userInfo');
    
    if (loginBtn) loginBtn.style.display = 'block';
    if (userInfo) userInfo.style.display = 'none';
}

async function login(email, password) {
    try {
        if (!firebaseAuth) {
            await initializeFirebase();
        }
        
        if (!firebaseAuth) {
            alert(translate('loginError') || 'Firebase not initialized. Please check your configuration.');
            return false;
        }
        
        const { signInWithEmailAndPassword } = await import('https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js');
        
        const userCredential = await signInWithEmailAndPassword(firebaseAuth, email, password);
        const user = userCredential.user;
        
        currentUser = {
            uid: user.uid,
            email: user.email,
            name: user.displayName || user.email
        };
        
        // Save to localStorage as backup
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        
        updateUIForLoggedIn();
        applyTranslations();
        return true;
    } catch (error) {
        console.error('Login error:', error);
        let errorMessage = translate('loginError') || 'Invalid email or password';
        
        if (error.code === 'auth/user-not-found') {
            errorMessage = translate('loginError') || 'User not found';
        } else if (error.code === 'auth/wrong-password') {
            errorMessage = translate('loginError') || 'Wrong password';
        } else if (error.code === 'auth/invalid-email') {
            errorMessage = translate('loginError') || 'Invalid email';
        } else if (error.code === 'auth/too-many-requests') {
            errorMessage = translate('loginError') || 'Too many attempts. Please try again later.';
        }
        
        alert(errorMessage);
        return false;
    }
}

async function register(name, email, password) {
    try {
        // Validate input
        if (!name || !email || !password) {
            alert(translate('registerError') || 'Please fill in all fields');
            return false;
        }
        
        if (password.length < 6) {
            alert(translate('registerError') || 'Password must be at least 6 characters');
            return false;
        }
        
        if (!firebaseAuth) {
            await initializeFirebase();
        }
        
        if (!firebaseAuth) {
            alert(translate('registerError') || 'Firebase not initialized. Please check your configuration.');
            return false;
        }
        
        const { createUserWithEmailAndPassword, updateProfile } = await import('https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js');
        
        // Create user
        const userCredential = await createUserWithEmailAndPassword(firebaseAuth, email, password);
        const user = userCredential.user;
        
        // Update profile with display name
        await updateProfile(user, {
            displayName: name
        });
        
        currentUser = {
            uid: user.uid,
            email: user.email,
            name: name
        };
        
        // Save to localStorage as backup
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        
        updateUIForLoggedIn();
        applyTranslations();
        return true;
    } catch (error) {
        console.error('Registration error:', error);
        let errorMessage = translate('registerError') || 'Registration failed';
        
        if (error.code === 'auth/email-already-in-use') {
            errorMessage = translate('registerError') || 'Email already registered';
        } else if (error.code === 'auth/invalid-email') {
            errorMessage = translate('registerError') || 'Invalid email';
        } else if (error.code === 'auth/weak-password') {
            errorMessage = translate('registerError') || 'Password is too weak';
        }
        
        alert(errorMessage);
        return false;
    }
}

async function logout() {
    try {
        if (firebaseAuth) {
            const { signOut } = await import('https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js');
            await signOut(firebaseAuth);
        }
        
        currentUser = null;
        localStorage.removeItem('currentUser');
        updateUIForLoggedOut();
        applyTranslations();
    } catch (error) {
        console.error('Logout error:', error);
        currentUser = null;
        localStorage.removeItem('currentUser');
        updateUIForLoggedOut();
        applyTranslations();
    }
}

function isLoggedIn() {
    return currentUser !== null;
}

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', async () => {
    initializeLanguage();
    await initializeFirebase();
    checkAuth();
    renderFoods();
    setupEventListeners();
    applyTranslations();
    setupMobileHeaderToggle();
    setupLoginSystem();
});

// Mobile header toggle functionality
function setupMobileHeaderToggle() {
    const toggleBtn = document.getElementById('mobileHeaderToggle');
    const headerContent = document.getElementById('headerContent');
    const mainHeader = document.getElementById('mainHeader');
    
    if (!toggleBtn || !headerContent) return;
    
    // Check if mobile on load
    function checkMobile() {
        if (window.innerWidth <= 768) {
            headerContent.classList.remove('header-visible');
        } else {
            headerContent.classList.add('header-visible');
        }
    }
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    toggleBtn.addEventListener('click', () => {
        headerContent.classList.toggle('header-visible');
    });
    
    // Close header when clicking on a link (mobile) - use event delegation
    headerContent.addEventListener('click', (e) => {
        if (window.innerWidth <= 768 && e.target.tagName === 'A') {
            setTimeout(() => {
                headerContent.classList.remove('header-visible');
            }, 300);
        }
    });
}

// Language initialization
function initializeLanguage() {
    const savedLang = localStorage.getItem('preferredLanguage') || 'en';
    currentLang = savedLang;
    document.getElementById('languageSelect').value = savedLang;
    document.documentElement.lang = savedLang;
}

// Language change handler
document.getElementById('languageSelect').addEventListener('change', (e) => {
    currentLang = e.target.value;
    localStorage.setItem('preferredLanguage', currentLang);
    document.documentElement.lang = currentLang;
    applyTranslations();
    renderFoods();
    updateCalculatorResults();
});

// ===== FOODS RENDERING =====
let currentCategory = 'all';

function renderFoods(category = 'all') {
    currentCategory = category;
    const foodsGrid = document.getElementById('foodsGrid');
    const filteredFoods = category === 'all' 
        ? foodsDatabase 
        : foodsDatabase.filter(food => food.category === category);
    
    foodsGrid.innerHTML = '';
    
    filteredFoods.forEach((food, index) => {
        const foodCard = createFoodCard(food, index);
        foodsGrid.appendChild(foodCard);
    });
}

function createFoodCard(food, index) {
    const card = document.createElement('div');
    card.className = 'food-card';
    card.style.animationDelay = `${index * 0.05}s`;
    card.id = `food-${food.id}`;
    
    // Set default values if not present
    food.fiber = food.fiber !== undefined ? food.fiber : 0;
    food.sugar = food.sugar !== undefined ? food.sugar : null;
    food.sodium = food.sodium !== undefined ? food.sodium : null;
    
    const translatedName = getFoodName(food.name);
    
    card.innerHTML = `
        <div class="food-card-image">${food.emoji}</div>
        <div class="food-card-content">
            <h3 class="food-card-title">${translatedName}</h3>
            <span class="food-card-category">${translate(`filter${food.category.charAt(0).toUpperCase() + food.category.slice(1)}`)}</span>
            <div class="food-card-nutrients">
                <div class="nutrient-item">
                    <span class="nutrient-label">${translate('calories')}</span>
                    <span class="nutrient-value highlight">${food.calories}</span>
                </div>
                <div class="nutrient-item">
                    <span class="nutrient-label">${translate('protein')}</span>
                    <span class="nutrient-value">${food.protein}g</span>
                </div>
                <div class="nutrient-item">
                    <span class="nutrient-label">${translate('carbs')}</span>
                    <span class="nutrient-value">${food.carbs}g</span>
                </div>
                <div class="nutrient-item">
                    <span class="nutrient-label">${translate('fat')}</span>
                    <span class="nutrient-value">${food.fat}g</span>
                </div>
                ${food.fiber > 0 ? `
                <div class="nutrient-item">
                    <span class="nutrient-label">${translate('fiber')}</span>
                    <span class="nutrient-value">${food.fiber}g</span>
                </div>
                ` : ''}
                ${food.sugar !== null && food.sugar !== undefined ? `
                <div class="nutrient-item">
                    <span class="nutrient-label">${translate('sugar')}</span>
                    <span class="nutrient-value">${food.sugar}g</span>
                </div>
                ` : ''}
                ${food.sodium !== null && food.sodium !== undefined ? `
                <div class="nutrient-item">
                    <span class="nutrient-label">${translate('sodium')}</span>
                    <span class="nutrient-value">${food.sodium}mg</span>
                </div>
                ` : ''}
            </div>
            ${food.portion ? `
            <div style="margin-top: 0.75rem; padding-top: 0.75rem; border-top: 1px solid var(--border); font-size: 0.8rem; color: var(--text-secondary);">
                <strong>${translate('standardPortion')}:</strong> ${food.portion}
            </div>
            ` : ''}
            <div style="margin-top: 0.5rem; font-size: 0.75rem; color: var(--text-muted);">
                ${translate('per100g')}
            </div>
        </div>
    `;
    
    return card;
}

// ===== CATEGORY FILTERS =====
function setupEventListeners() {
    // Category filters
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const category = btn.getAttribute('data-category');
            renderFoods(category);
            
            // Scroll to foods section
            document.getElementById('foods').scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
    
    // Search functionality
    const searchInput = document.getElementById('foodSearch');
    const searchBtn = document.getElementById('searchBtn');
    const searchResults = document.getElementById('searchResults');
    
    let searchTimeout;
    let searchResultClickHandlers = [];
    
    function cleanupSearchHandlers() {
        searchResultClickHandlers.forEach(handler => {
            // Remove old handlers if any
        });
        searchResultClickHandlers = [];
    }
    
    searchInput.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        const query = e.target.value.toLowerCase().trim();
        
        if (query.length === 0) {
            searchResults.classList.remove('active');
            cleanupSearchHandlers();
            return;
        }
        
        // Mostra i suggerimenti immediatamente mentre l'utente digita
        searchTimeout = setTimeout(() => {
            const queryLower = query.toLowerCase();
            const results = foodsDatabase.filter(food => {
                // Search in English name
                if (food.name.toLowerCase().includes(queryLower)) return true;
                
                // Search in all language translations
                for (const lang in foodNamesTranslations) {
                    const translatedName = foodNamesTranslations[lang]?.[food.name];
                    if (translatedName && translatedName.toLowerCase().includes(queryLower)) {
                        return true;
                    }
                }
                return false;
            })
            // Ordina per rilevanza: prima quelli che iniziano con la query
            .sort((a, b) => {
                const aName = getFoodName(a.name).toLowerCase();
                const bName = getFoodName(b.name).toLowerCase();
                const aStarts = aName.startsWith(queryLower);
                const bStarts = bName.startsWith(queryLower);
                
                if (aStarts && !bStarts) return -1;
                if (!aStarts && bStarts) return 1;
                return aName.localeCompare(bName);
            })
            .slice(0, 10); // Mostra fino a 10 risultati
            
            cleanupSearchHandlers();
            
            if (results.length > 0) {
                searchResults.innerHTML = results.map(food => {
                    const foodName = getFoodName(food.name);
                    const highlightedName = highlightMatch(foodName, query);
                    return `
                        <div class="search-result-item" data-food-id="${food.id}">
                            <strong>${food.emoji} ${highlightedName}</strong>
                            <div style="font-size: 0.85rem; color: var(--text-muted); margin-top: 0.25rem;">
                                ${food.calories} ${translate('calories').toLowerCase()} ${translate('per100g')} • ${translate(`filter${food.category.charAt(0).toUpperCase() + food.category.slice(1)}`)}
                            </div>
                        </div>
                    `;
                }).join('');
                
                searchResults.classList.add('active');
                
                // Add click handlers
                searchResults.querySelectorAll('.search-result-item').forEach(item => {
                    const handler = () => {
                        const foodId = item.getAttribute('data-food-id');
                        scrollToFood(foodId);
                        searchInput.value = '';
                        searchResults.classList.remove('active');
                        cleanupSearchHandlers();
                    };
                    item.addEventListener('click', handler);
                    searchResultClickHandlers.push(handler);
                });
            } else {
                searchResults.innerHTML = `<div class="search-result-item" style="text-align: center; color: var(--text-muted); padding: 1.5rem;">${translate('noResults') || 'Nessun risultato trovato'}</div>`;
                searchResults.classList.add('active');
            }
        }, 150); // Ridotto il timeout per risposta più rapida
    });
    
    // Funzione per evidenziare la parte corrispondente nella ricerca
    function highlightMatch(text, query) {
        if (!query) return text;
        const regex = new RegExp(`(${query})`, 'gi');
        return text.replace(regex, '<mark style="background: rgba(99, 102, 241, 0.2); padding: 0 2px; border-radius: 3px;">$1</mark>');
    }
    
    searchBtn.addEventListener('click', () => {
        const query = searchInput.value.toLowerCase().trim();
        if (query) {
            const queryLower = query.toLowerCase();
            const food = foodsDatabase.find(f => {
                // Search in English name
                if (f.name.toLowerCase().includes(queryLower)) return true;
                
                // Search in all language translations
                for (const lang in foodNamesTranslations) {
                    const translatedName = foodNamesTranslations[lang]?.[f.name];
                    if (translatedName && translatedName.toLowerCase().includes(queryLower)) {
                        return true;
                    }
                }
                return false;
            });
            if (food) {
                scrollToFood(food.id);
            }
        }
    });
    
    // Close search results on outside click
    document.addEventListener('click', (e) => {
        if (!searchInput.contains(e.target) && !searchResults.contains(e.target) && !searchBtn.contains(e.target)) {
            searchResults.classList.remove('active');
        }
    });
    
    // Calculator form
    const goalSelect = document.getElementById('goal');
    const goalAmountGroup = document.getElementById('goalAmountGroup');
    
    goalSelect.addEventListener('change', (e) => {
        if (e.target.value !== 'maintain') {
            goalAmountGroup.style.display = 'block';
        } else {
            goalAmountGroup.style.display = 'none';
        }
    });
    
    document.getElementById('calculateBtn').addEventListener('click', calculateDiet);
}

// Setup login system
function setupLoginSystem() {
    const loginBtn = document.getElementById('loginBtn');
    const loginModal = document.getElementById('loginModal');
    const loginClose = document.getElementById('loginClose');
    const loginForm = document.getElementById('loginForm');
    const registerLink = document.getElementById('registerLink');
    const logoutBtn = document.getElementById('logoutBtn');
    
    if (loginBtn) {
        loginBtn.addEventListener('click', () => {
            if (loginModal) loginModal.style.display = 'block';
        });
    }
    
    if (loginClose) {
        loginClose.addEventListener('click', () => {
            if (loginModal) loginModal.style.display = 'none';
        });
    }
    
    if (loginModal) {
        loginModal.addEventListener('click', (e) => {
            if (e.target === loginModal) {
                loginModal.style.display = 'none';
            }
        });
    }
    
    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const emailInput = document.getElementById('loginEmail');
            const passwordInput = document.getElementById('loginPassword');
            
            if (!emailInput || !passwordInput) {
                alert(translate('loginError') || 'Invalid email or password');
                return;
            }
            
            const email = emailInput.value.trim();
            const password = passwordInput.value;
            
            if (!email || !password) {
                alert(translate('loginError') || 'Please fill in all fields');
                return;
            }
            
            // Disable button during login
            const submitBtn = loginForm.querySelector('button[type="submit"]');
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.textContent = translate('loggingIn') || 'Logging in...';
            }
            
            const success = await login(email, password);
            
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.textContent = translate('loginSubmit') || 'Login';
            }
            
            if (success) {
                loginModal.style.display = 'none';
                loginForm.reset();
                // Update calculator results if visible
                updateCalculatorResults();
            }
        });
    }
    
    if (registerLink) {
        registerLink.addEventListener('click', (e) => {
            e.preventDefault();
            showRegisterForm();
        });
    }
    
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            logout();
        });
    }
}

function showRegisterForm() {
    const loginModal = document.getElementById('loginModal');
    if (!loginModal) return;
    
    const modalContent = loginModal.querySelector('.login-modal-content');
    if (!modalContent) return;
    
    modalContent.innerHTML = `
        <span class="login-close" id="loginClose">&times;</span>
        <h3 data-translate="registerTitle">Register</h3>
        <form id="registerForm">
            <div class="form-group">
                <label data-translate="registerName">Name</label>
                <input type="text" id="registerName" required>
            </div>
            <div class="form-group">
                <label data-translate="loginEmail">Email</label>
                <input type="email" id="registerEmail" required placeholder="your@email.com">
            </div>
            <div class="form-group">
                <label data-translate="loginPassword">Password</label>
                <input type="password" id="registerPassword" required>
            </div>
            <button type="submit" class="calculate-btn" data-translate="registerSubmit">Register</button>
        </form>
        <p class="login-register" data-translate="registerHasAccount">Already have an account? <a href="#" id="loginLink" data-translate="registerLogin">Login</a></p>
    `;
    
    applyTranslations();
    
    const loginClose = document.getElementById('loginClose');
    const loginLink = document.getElementById('loginLink');
    const registerForm = document.getElementById('registerForm');
    
    if (loginClose) {
        loginClose.addEventListener('click', () => {
            loginModal.style.display = 'none';
        });
    }
    
    if (loginLink) {
        loginLink.addEventListener('click', (e) => {
            e.preventDefault();
            showLoginForm();
        });
    }
    
    if (registerForm) {
        registerForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const nameInput = document.getElementById('registerName');
            const emailInput = document.getElementById('registerEmail');
            const passwordInput = document.getElementById('registerPassword');
            
            if (!nameInput || !emailInput || !passwordInput) {
                alert(translate('registerError') || 'Please fill in all fields');
                return;
            }
            
            const name = nameInput.value.trim();
            const email = emailInput.value.trim();
            const password = passwordInput.value;
            
            if (!name || !email || !password) {
                alert(translate('registerError') || 'Please fill in all fields');
                return;
            }
            
            // Disable button during registration
            const submitBtn = registerForm.querySelector('button[type="submit"]');
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.textContent = translate('registering') || 'Registering...';
            }
            
            const success = await register(name, email, password);
            
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.textContent = translate('registerSubmit') || 'Register';
            }
            
            if (success) {
                loginModal.style.display = 'none';
                // Update calculator results if visible
                updateCalculatorResults();
            }
        });
    }
}

function showLoginForm() {
    const loginModal = document.getElementById('loginModal');
    if (!loginModal) return;
    
    const modalContent = loginModal.querySelector('.login-modal-content');
    if (!modalContent) return;
    
    modalContent.innerHTML = `
        <span class="login-close" id="loginClose">&times;</span>
        <h3 data-translate="loginTitle">Login</h3>
        <form id="loginForm">
            <div class="form-group">
                <label data-translate="loginEmail">Email</label>
                <input type="email" id="loginEmail" required placeholder="your@email.com">
            </div>
            <div class="form-group">
                <label data-translate="loginPassword">Password</label>
                <input type="password" id="loginPassword" required>
            </div>
            <button type="submit" class="calculate-btn" data-translate="loginSubmit">Login</button>
        </form>
        <p class="login-register" data-translate="loginNoAccount">Don't have an account? <a href="#" id="registerLink" data-translate="loginRegister">Register</a></p>
    `;
    
    applyTranslations();
    
    // Re-setup event listeners for the new form
    const loginClose = document.getElementById('loginClose');
    const loginForm = document.getElementById('loginForm');
    const registerLink = document.getElementById('registerLink');
    
    if (loginClose) {
        loginClose.addEventListener('click', () => {
            loginModal.style.display = 'none';
        });
    }
    
    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const emailInput = document.getElementById('loginEmail');
            const passwordInput = document.getElementById('loginPassword');
            
            if (!emailInput || !passwordInput) {
                alert(translate('loginError') || 'Invalid email or password');
                return;
            }
            
            const email = emailInput.value.trim();
            const password = passwordInput.value;
            
            if (!email || !password) {
                alert(translate('loginError') || 'Please fill in all fields');
                return;
            }
            
            // Disable button during login
            const submitBtn = loginForm.querySelector('button[type="submit"]');
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.textContent = translate('loggingIn') || 'Logging in...';
            }
            
            const success = await login(email, password);
            
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.textContent = translate('loginSubmit') || 'Login';
            }
            
            if (success) {
                loginModal.style.display = 'none';
                loginForm.reset();
                updateCalculatorResults();
            }
        });
    }
    
    if (registerLink) {
        registerLink.addEventListener('click', (e) => {
            e.preventDefault();
            showRegisterForm();
        });
    }
}

function scrollToFood(foodId) {
    // First, make sure the food is visible
    const food = foodsDatabase.find(f => f.id === foodId);
    if (!food) return;
    
    // Filter to show the food's category
    if (currentCategory !== food.category && currentCategory !== 'all') {
        document.querySelectorAll('.filter-btn').forEach(btn => {
            if (btn.getAttribute('data-category') === food.category) {
                btn.click();
            }
        });
    } else {
        renderFoods(food.category);
    }
    
    // Wait for render, then scroll
    setTimeout(() => {
        const foodElement = document.getElementById(`food-${foodId}`);
        if (foodElement) {
            foodElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
            // Highlight effect
            foodElement.style.transform = 'scale(1.05)';
            foodElement.style.boxShadow = '0 20px 60px rgba(99, 102, 241, 0.5)';
            setTimeout(() => {
                foodElement.style.transform = '';
                foodElement.style.boxShadow = '';
            }, 2000);
        }
    }, 100);
}

// ===== DIET CALCULATOR =====
function calculateDiet() {
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const age = parseFloat(document.getElementById('age').value);
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const activityLevel = parseFloat(document.getElementById('activityLevel').value);
    const goal = document.getElementById('goal').value;
    const goalAmount = parseFloat(document.getElementById('goalAmount').value) || 500;
    
    // Validation
    if (!age || !height || !weight) {
        alert('Please fill in all required fields');
        return;
    }
    
    // Calculate BMR (Basal Metabolic Rate) using Mifflin-St Jeor Equation
    let bmr;
    if (gender === 'male') {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }
    
    // Calculate TDEE (Total Daily Energy Expenditure)
    const tdee = bmr * activityLevel;
    
    // Adjust for goal
    // Per perdere/aumentare peso: 1kg = ~7700 calorie
    // Per 500g a settimana = 3850 calorie a settimana = ~550 calorie al giorno
    // Formula: (goalAmount in grammi / 1000) * 7700 / 7
    const dailyCalorieChange = (goalAmount / 1000) * 7700 / 7;
    
    let targetCalories;
    if (goal === 'lose') {
        targetCalories = Math.round(tdee - dailyCalorieChange);
    } else if (goal === 'gain') {
        targetCalories = Math.round(tdee + dailyCalorieChange);
    } else {
        targetCalories = Math.round(tdee);
    }
    
    // Assicurati che le calorie target non siano troppo basse (minimo 1200 per donne, 1500 per uomini)
    const minCalories = gender === 'male' ? 1500 : 1200;
    if (targetCalories < minCalories) {
        targetCalories = minCalories;
    }
    
    // Macronutrient distribution (distribuzione ottimale)
    // Proteine: 25-30% (circa 1.6-2.2g per kg di peso corporeo, usiamo 2g/kg)
    // Carboidrati: 45-50% 
    // Grassi: 25-30%
    
    // Calcolo proteine basato su peso corporeo (minimo 2g per kg)
    const proteinPerKg = 2.0;
    const proteinGramsFromWeight = Math.round(weight * proteinPerKg);
    const proteinCaloriesFromWeight = proteinGramsFromWeight * 4;
    
    // Se le proteine dal peso superano il 30% delle calorie, usiamo il 30%
    // Altrimenti usiamo il calcolo basato sul peso
    const maxProteinCalories = targetCalories * 0.30;
    let proteinGrams;
    if (proteinCaloriesFromWeight > maxProteinCalories) {
        proteinGrams = Math.round(maxProteinCalories / 4);
    } else {
        proteinGrams = proteinGramsFromWeight;
    }
    
    const proteinCalories = proteinGrams * 4;
    
    // Grassi: 25% delle calorie rimanenti
    const fatCalories = Math.round(targetCalories * 0.25);
    const fatGrams = Math.round(fatCalories / 9);
    
    // Carboidrati: calorie rimanenti
    const remainingCalories = targetCalories - proteinCalories - fatCalories;
    let carbsGrams = Math.round(remainingCalories / 4);
    
    // Verifica che la somma sia corretta (può esserci una piccola differenza per arrotondamenti)
    const totalCalculatedCalories = (proteinGrams * 4) + (carbsGrams * 4) + (fatGrams * 9);
    if (Math.abs(totalCalculatedCalories - targetCalories) > 50) {
        // Aggiusta i carboidrati per compensare
        const adjustment = targetCalories - totalCalculatedCalories;
        carbsGrams = Math.round(carbsGrams + (adjustment / 4));
    }
    
    // Generate meal plan
    const mealPlan = generateMealPlan(targetCalories, proteinGrams, carbsGrams, fatGrams);
    
    // Display results
    displayResults({
        bmr: Math.round(bmr),
        tdee: Math.round(tdee),
        targetCalories,
        proteinGrams,
        carbsGrams,
        fatGrams,
        mealPlan
    });
    
    // Scroll to results
    document.getElementById('calculatorResults').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function generateMealPlan(calories, protein, carbs, fat) {
    // Meal distribution: Breakfast 25%, Lunch 35%, Dinner 30%, Snack 10%
    const breakfastCal = Math.round(calories * 0.25);
    const lunchCal = Math.round(calories * 0.35);
    const dinnerCal = Math.round(calories * 0.30);
    const snackCal = Math.round(calories * 0.10);
    
    // Select foods for each meal
    const breakfast = selectFoodsForMeal(breakfastCal, ['fruits', 'grains', 'dairy', 'nuts']);
    const lunch = selectFoodsForMeal(lunchCal, ['proteins', 'vegetables', 'grains']);
    const dinner = selectFoodsForMeal(dinnerCal, ['proteins', 'vegetables', 'grains']);
    const snack = selectFoodsForMeal(snackCal, ['fruits', 'nuts', 'dairy']);
    
    return { breakfast, lunch, dinner, snack };
}

function selectFoodsForMeal(targetCalories, allowedCategories) {
    const availableFoods = foodsDatabase.filter(f => allowedCategories.includes(f.category));
    const selected = [];
    let currentCalories = 0;
    
    // Try to reach target calories
    while (currentCalories < targetCalories * 0.8 && selected.length < 5) {
        const randomFood = availableFoods[Math.floor(Math.random() * availableFoods.length)];
        const portion = Math.min(200, Math.round((targetCalories - currentCalories) / randomFood.calories * 100));
        
        if (portion >= 50) {
            selected.push({
                name: randomFood.name,
                translatedName: getFoodName(randomFood.name),
                emoji: randomFood.emoji,
                portion: portion,
                calories: Math.round(randomFood.calories * portion / 100)
            });
            currentCalories += randomFood.calories * portion / 100;
        } else {
            break;
        }
    }
    
    return selected;
}

function generateWeeklyPlan(targetCalories, proteinGrams, carbsGrams, fatGrams) {
    const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
    const weeklyPlan = {};
    
    days.forEach(day => {
        weeklyPlan[day] = generateMealPlan(targetCalories, proteinGrams, carbsGrams, fatGrams);
    });
    
    return weeklyPlan;
}

function displayResults(data) {
    const resultsDiv = document.getElementById('calculatorResults');
    const contentDiv = document.getElementById('resultsContent');
    
    if (!resultsDiv || !contentDiv) {
        console.error('Results elements not found');
        return;
    }
    
    const loggedIn = isLoggedIn();
    let weeklyPlanHTML = '';
    
    if (loggedIn) {
        const weeklyPlan = generateWeeklyPlan(data.targetCalories, data.proteinGrams, data.carbsGrams, data.fatGrams);
        const days = [
            { key: 'monday', label: translate('monday') },
            { key: 'tuesday', label: translate('tuesday') },
            { key: 'wednesday', label: translate('wednesday') },
            { key: 'thursday', label: translate('thursday') },
            { key: 'friday', label: translate('friday') },
            { key: 'saturday', label: translate('saturday') },
            { key: 'sunday', label: translate('sunday') }
        ];
        
        weeklyPlanHTML = `
            <div class="weekly-plan-section" style="margin-top: 2rem; padding-top: 2rem; border-top: 2px solid var(--border);">
                <h4 style="font-size: 1.5rem; margin-bottom: 1.5rem; color: var(--text-primary);">${translate('weeklyPlan')}</h4>
                <div class="weekly-plan-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem;">
                    ${days.map(day => {
                        const dayPlan = weeklyPlan[day.key];
                        return `
                            <div class="weekly-day-card" style="background: rgba(248, 250, 252, 0.8); border: 2px solid var(--border); border-radius: 16px; padding: 1.5rem;">
                                <h5 style="font-size: 1.2rem; font-weight: 700; margin-bottom: 1rem; color: var(--primary-light);">${day.label}</h5>
                                
                                <div class="weekly-meal" style="margin-bottom: 1rem;">
                                    <div style="font-weight: 600; color: var(--text-primary); margin-bottom: 0.5rem;">${translate('breakfast')}</div>
                                    <div style="font-size: 0.9rem; color: var(--text-secondary);">
                                        ${dayPlan.breakfast.map(f => `${f.emoji} ${f.translatedName || getFoodName(f.name)} (${f.portion}g)`).join(', ')}
                                    </div>
                                </div>
                                
                                <div class="weekly-meal" style="margin-bottom: 1rem;">
                                    <div style="font-weight: 600; color: var(--text-primary); margin-bottom: 0.5rem;">${translate('lunch')}</div>
                                    <div style="font-size: 0.9rem; color: var(--text-secondary);">
                                        ${dayPlan.lunch.map(f => `${f.emoji} ${f.translatedName || getFoodName(f.name)} (${f.portion}g)`).join(', ')}
                                    </div>
                                </div>
                                
                                <div class="weekly-meal" style="margin-bottom: 1rem;">
                                    <div style="font-weight: 600; color: var(--text-primary); margin-bottom: 0.5rem;">${translate('dinner')}</div>
                                    <div style="font-size: 0.9rem; color: var(--text-secondary);">
                                        ${dayPlan.dinner.map(f => `${f.emoji} ${f.translatedName || getFoodName(f.name)} (${f.portion}g)`).join(', ')}
                                    </div>
                                </div>
                                
                                <div class="weekly-meal">
                                    <div style="font-weight: 600; color: var(--text-primary); margin-bottom: 0.5rem;">${translate('snack')}</div>
                                    <div style="font-size: 0.9rem; color: var(--text-secondary);">
                                        ${dayPlan.snack.map(f => `${f.emoji} ${f.translatedName || getFoodName(f.name)} (${f.portion}g)`).join(', ')}
                                    </div>
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
        `;
    } else {
        weeklyPlanHTML = `
            <div class="weekly-plan-login-prompt" style="margin-top: 2rem; padding: 2rem; background: rgba(99, 102, 241, 0.1); border: 2px solid var(--primary); border-radius: 16px; text-align: center;">
                <h4 style="font-size: 1.3rem; margin-bottom: 1rem; color: var(--text-primary);">${translate('weeklyPlan')}</h4>
                <p style="color: var(--text-secondary); margin-bottom: 1.5rem;">${translate('weeklyPlanLogin')}</p>
                <button class="login-btn" id="weeklyPlanLoginBtn" style="padding: 0.75rem 2rem; background: var(--gradient-1); border: none; border-radius: 12px; color: white; font-weight: 600; cursor: pointer; transition: all 0.3s ease;">
                    ${translate('loginBtn')}
                </button>
            </div>
        `;
    }
    
    contentDiv.innerHTML = `
        <div class="result-card">
            <div class="result-card-title">${translate('bmr')}</div>
            <div class="result-value">${data.bmr}</div>
            <div class="result-label">${translate('calories')}/day</div>
        </div>
        
        <div class="result-card">
            <div class="result-card-title">${translate('tdee')}</div>
            <div class="result-value">${data.tdee}</div>
            <div class="result-label">${translate('calories')}/day</div>
        </div>
        
        <div class="result-card">
            <div class="result-card-title">${translate('dailyCalories')}</div>
            <div class="result-value" style="color: var(--primary-light);">${data.targetCalories}</div>
            <div class="result-label">${translate('calories')}/day</div>
        </div>
        
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin-top: 1rem;">
            <div class="result-card">
                <div class="result-card-title">${translate('dailyProtein')}</div>
                <div class="result-value" style="font-size: 2rem;">${data.proteinGrams}g</div>
            </div>
            <div class="result-card">
                <div class="result-card-title">${translate('dailyCarbs')}</div>
                <div class="result-value" style="font-size: 2rem;">${data.carbsGrams}g</div>
            </div>
            <div class="result-card">
                <div class="result-card-title">${translate('dailyFat')}</div>
                <div class="result-value" style="font-size: 2rem;">${data.fatGrams}g</div>
            </div>
        </div>
        
        <div class="meal-plan">
            <h4>${translate('mealPlan')}</h4>
            
            <div class="meal-item">
                <div class="meal-item-title">${translate('breakfast')} (${data.mealPlan.breakfast.reduce((sum, f) => sum + f.calories, 0)} ${translate('calories').toLowerCase()})</div>
                <div class="meal-item-foods">
                    ${data.mealPlan.breakfast.map(f => `${f.emoji} ${f.translatedName || getFoodName(f.name)} (${f.portion}g)`).join(', ')}
                </div>
            </div>
            
            <div class="meal-item">
                <div class="meal-item-title">${translate('lunch')} (${data.mealPlan.lunch.reduce((sum, f) => sum + f.calories, 0)} ${translate('calories').toLowerCase()})</div>
                <div class="meal-item-foods">
                    ${data.mealPlan.lunch.map(f => `${f.emoji} ${f.translatedName || getFoodName(f.name)} (${f.portion}g)`).join(', ')}
                </div>
            </div>
            
            <div class="meal-item">
                <div class="meal-item-title">${translate('dinner')} (${data.mealPlan.dinner.reduce((sum, f) => sum + f.calories, 0)} ${translate('calories').toLowerCase()})</div>
                <div class="meal-item-foods">
                    ${data.mealPlan.dinner.map(f => `${f.emoji} ${f.translatedName || getFoodName(f.name)} (${f.portion}g)`).join(', ')}
                </div>
            </div>
            
            <div class="meal-item">
                <div class="meal-item-title">${translate('snack')} (${data.mealPlan.snack.reduce((sum, f) => sum + f.calories, 0)} ${translate('calories').toLowerCase()})</div>
                <div class="meal-item-foods">
                    ${data.mealPlan.snack.map(f => `${f.emoji} ${f.translatedName || getFoodName(f.name)} (${f.portion}g)`).join(', ')}
                </div>
            </div>
        </div>
        
        ${weeklyPlanHTML}
    `;
    
    resultsDiv.style.display = 'block';
    
    // Add event listener for login button in weekly plan prompt
    if (!loggedIn) {
        const weeklyPlanLoginBtn = document.getElementById('weeklyPlanLoginBtn');
        if (weeklyPlanLoginBtn) {
            weeklyPlanLoginBtn.addEventListener('click', () => {
                const loginModal = document.getElementById('loginModal');
                if (loginModal) {
                    loginModal.style.display = 'block';
                }
            });
        }
    }
}

function updateCalculatorResults() {
    const resultsDiv = document.getElementById('calculatorResults');
    if (resultsDiv.style.display === 'block') {
        // Recalculate if results are shown
        calculateDiet();
    }
}

