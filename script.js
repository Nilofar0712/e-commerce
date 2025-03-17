function googleTranslateElementInit() {
    new google.translate.TranslateElement({
            pageLanguage: "en",
            includedLanguages: "ta,hi,kn,ml,te,th,vi,ar",
            layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        "google_translate_element"
    );
}