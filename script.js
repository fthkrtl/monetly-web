const translations = {
    tr: {
        heroTitle: "Paranı Akıllıca Yönet",
        heroDesc: "Gelir ve giderlerini takip et, bütçeni planla ve finansal özgürlüğüne kavuş. Sade, şık ve güçlü.",
        f1Title: "Detaylı Analiz",
        f1Desc: "Harcamalarını kategorilere ayır ve grafiklerle nereye ne kadar harcadığını anında gör.",
        f2Title: "Bütçe Takibi",
        f2Desc: "Aylık bütçeni oluştur ve limitlerini aşmadan tasarruf etmeye başla.",
        f3Title: "%100 Güvenli",
        f3Desc: "Verilerin sadece senin cihazında saklanır. Gizliliğin bizim bir numaralı önceliğimizdir.",
        privacyLink: "Gizlilik Politikası",
        supportLink: "Destek",
        langBtn: "EN",
        privacyHtml: `
      <h1>Gizlilik Politikası</h1>
      <p>Son güncelleme: 30 Aralık 2025</p>
      <br>
      <h3>1. Veri Toplama</h3>
      <p>GelirGider uygulaması, kullanıcı verilerinin gizliliğine önem verir. Uygulama, finansal verilerinizi (gelirler, giderler, bütçe kayıtları) yerel olarak cihazınızda saklar. Sunucularımıza herhangi bir şahsi finansal veri aktarılmaz.</p>
      <br>
      <h3>2. Veri Kullanımı</h3>
      <p>Toplanan yerel veriler sadece uygulama içindeki grafiklerin oluşturulması ve raporlama yapılması amacıyla kullanılır.</p>
      <br>
      <h3>3. Reklamlar</h3>
      <p>Uygulama içerisinde Google AdMob aracılığıyla reklamlar gösterilebilir. Bu servisler, reklam kişiselleştirmesi için cihaz tanımlayıcılarını kullanabilir.</p>
      <br>
      <h3>4. İletişim</h3>
      <p>Gizlilik politikası hakkında sorularınız için bizimle fthkrtl.35@gmail.com adresinden iletişime geçebilirsiniz.</p>
    `
    },
    en: {
        heroTitle: "Manage Your Money Wisely",
        heroDesc: "Track your income and expenses, plan your budget, and achieve financial freedom. Simple, sleek, and powerful.",
        f1Title: "Detailed Analysis",
        f1Desc: "Categorize your spending and instantly see where your money goes with charts.",
        f2Title: "Budget Tracking",
        f2Desc: "Create your monthly budget and start saving without exceeding your limits.",
        f3Title: "100% Secure",
        f3Desc: "Your data is stored only on your device. Your privacy is our number one priority.",
        privacyLink: "Privacy Policy",
        supportLink: "Support",
        langBtn: "TR",
        privacyHtml: `
      <h1>Privacy Policy</h1>
      <p>Last updated: December 30, 2025</p>
      <br>
      <h3>1. Data Collection</h3>
      <p>GelirGider values user data privacy. The app stores your financial data (income, expenses, budget records) locally on your device. No personal financial data is transmitted to our servers.</p>
      <br>
      <h3>2. Data Usage</h3>
      <p>Collected local data is used solely for generating charts and reporting within the app.</p>
      <br>
      <h3>3. Advertisements</h3>
      <p>The app may display ads via Google AdMob. These services may use device identifiers for ad personalization.</p>
      <br>
      <h3>4. Contact</h3>
      <p>For questions about the privacy policy, please contact us at fthkrtl.35@gmail.com.</p>
    `
    }
};

let currentLang = 'en';

function toggleLang() {
    currentLang = currentLang === 'tr' ? 'en' : 'tr';
    updateContent();
}

function updateContent() {
    const t = translations[currentLang];
    document.getElementById('heroTitle').textContent = t.heroTitle;
    document.getElementById('heroDesc').textContent = t.heroDesc;
    document.getElementById('f1Title').textContent = t.f1Title;
    document.getElementById('f1Desc').textContent = t.f1Desc;
    document.getElementById('f2Title').textContent = t.f2Title;
    document.getElementById('f2Desc').textContent = t.f2Desc;
    document.getElementById('f3Title').textContent = t.f3Title;
    document.getElementById('f3Desc').textContent = t.f3Desc;
    document.getElementById('privacyLink').textContent = t.privacyLink;
    document.getElementById('supportLink').textContent = t.supportLink;
    document.getElementById('langBtn').textContent = t.langBtn;
    document.documentElement.lang = currentLang;
}

function openPrivacy() {
    const modal = document.getElementById('privacyModal');
    const content = document.getElementById('privacyText');
    content.innerHTML = translations[currentLang].privacyHtml;
    modal.style.display = 'block';
}

function closePrivacy() {
    document.getElementById('privacyModal').style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function (event) {
    const modal = document.getElementById('privacyModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Initial update
updateContent();
