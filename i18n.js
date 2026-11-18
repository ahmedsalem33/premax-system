/* =========================================================
   PREMAX SYSTEM — i18n (Translation Engine)
   إضافة لغة جديدة: انسخ أي قاموس وعدّل القيم باسم اللغة
   (ar, en, fr, tr, ru, es, de, pt, zh, hi)
   ========================================================= */
window.PREMAX_I18N = (function () {
  var KEY = 'premax_lang';

  var dicts = {
    ar: {
      'nav.pos': 'POS', 'nav.admin': 'الإدارة', 'nav.networks': 'الشبكات', 'nav.websites': 'المواقع',
      'nav.bots': 'البوتات', 'nav.mobile': 'الموبايل', 'nav.products': 'المنتجات', 'nav.works': 'أعمالنا',
      'cta.quote': 'اطلب عرض سعر', 'cta.whatsapp': 'واتساب مباشرة', 'cta.explore': 'استكشف الأقسام', 'cta.wa_start': 'ابدأ على واتساب',
      'sec.cap.k': 'Capabilities', 'sec.cap.h': 'قدراتنا الستة', 'sec.cap.s': 'ست وحدات متكاملة — كل وحدة كاملة بذاتها، وتكاملها مع بعض بيصنع منظومة واحدة متصلة',
      'sec.prod.k': 'Ready to Deploy', 'sec.prod.h': 'المنظومة الجاهزة', 'sec.prod.s': 'حلول كاملة متاحة للتنفيذ على الفور — بيع وفواتير وحسابات وموظفين وجرد لحظي بترخيص دائم بدون اشتراك',
      'sec.shots.k': 'Inside the Software', 'sec.shots.h': 'من داخل البرنامج', 'sec.shots.s': 'واجهات حقيقية من برامجنا زي ما بتشتغل عند عملائنا — مش صور مرسومة',
      'sec.works.k': 'Selected Work', 'sec.works.h': 'أعمال نفخر بها', 'sec.works.s': 'مواقع ومنصات وسيرفرات طلعت للنور وتعمل يوميًا عند عملائنا',
      'sec.why.k': 'Why Premax', 'sec.why.h': 'لماذا بريماكس؟',
      'sec.how.k': 'How We Work', 'sec.how.h': 'رحلة التنفيذ', 'sec.how.s': 'من أول مكالمة لحد التسليم والدعم — خمس خطوات واضحة بلا مفاجآت',
      'why.1.t': 'أوفلاين بالكامل', 'why.1.d': 'البيانات محلية على جهازك — مفيش اعتماد على إنترنت أو سيرفر خارجي للعمل.',
      'why.2.t': 'بدون اشتراك شهري', 'why.2.d': 'ترخيص دائم وسعر واحد واضح — بدون رسوم شهرية أو سنوية.',
      'why.3.t': 'دعم فني محلي', 'why.3.d': 'فريق موجود على الأرض: تركيب، تدريب، صيانة دورية، وحل أي مشكلة بسرعة.',
      'why.4.t': 'هوية عربية RTL', 'why.4.d': 'كل الأنظمة مصممة بالعربي لبيئة المشروعات المصرية والعربية من الفطرة.',
      'how.1.t': 'تواصل أولي', 'how.1.d': 'مكالمة أو رسالة واتساب — نفهم نشاطك ومشكلتك ونوع الحل المناسب.',
      'how.2.t': 'معاينة وتحقيق', 'how.2.d': 'نشوف طريقة عملك الحالية ونحلل الجداول والورق ونقرر المطلوب بدقة.',
      'how.3.t': 'عرض وسعر', 'how.3.d': 'نعرضلك الحل المناسب وسعره وجدولته — مرنة وقبل أي التزام.',
      'how.4.t': 'تنفيذ وتركيب', 'how.4.d': 'نركّب، نهيّج البيانات، ندرّب فريقك — ونسلم النظام شغال عندك.',
      'how.5.t': 'دعم وضمان', 'how.5.d': 'ضمان وتحديثات وقناة اتصال مباشرة — م/ أحمد سالم، 01033379719.',
      'contact.title': 'جاهز نبني نظامك؟',
      'footer.company': 'الشركة', 'footer.contact': 'تواصل'
    },
    en: {
      'nav.pos': 'POS', 'nav.admin': 'Management', 'nav.networks': 'Networks', 'nav.websites': 'Websites',
      'nav.bots': 'Bots', 'nav.mobile': 'Mobile', 'nav.products': 'Products', 'nav.works': 'Our Work',
      'cta.quote': 'Request a Quote', 'cta.whatsapp': 'WhatsApp Direct', 'cta.explore': 'Explore Sections', 'cta.wa_start': 'Start on WhatsApp',
      'sec.cap.k': 'Capabilities', 'sec.cap.h': 'Our Six Capabilities', 'sec.cap.s': 'Six integrated units — each complete on its own, together they build one connected system',
      'sec.prod.k': 'Ready to Deploy', 'sec.prod.h': 'The Ready Ecosystem', 'sec.prod.s': 'Complete solutions ready to deploy instantly — sales, invoices, accounting, staff and live inventory with a permanent license and no subscriptions',
      'sec.shots.k': 'Inside the Software', 'sec.shots.h': 'Inside the Software', 'sec.shots.s': 'Real interfaces from our software, running exactly as they do for our clients — not mockups',
      'sec.works.k': 'Selected Work', 'sec.works.h': "Work We're Proud Of", 'sec.works.s': 'Websites, platforms and servers that went live and run daily for our clients',
      'sec.why.k': 'Why Premax', 'sec.why.h': 'Why Premax?',
      'sec.how.k': 'How We Work', 'sec.how.h': 'The Delivery Journey', 'sec.how.s': 'From the first call to delivery and support — five clear steps, no surprises',
      'why.1.t': 'Fully Offline', 'why.1.d': 'Your data stays local on your machine — no dependency on internet or external servers.',
      'why.2.t': 'No Monthly Fees', 'why.2.d': 'One permanent license and one clear price — no monthly or annual charges.',
      'why.3.t': 'Local Support', 'why.3.d': 'A team on the ground: installation, training, periodic maintenance and fast fixes.',
      'why.4.t': 'Arabic RTL Identity', 'why.4.d': 'Every system is designed in Arabic for Egyptian and Arab business environments.',
      'how.1.t': 'First Contact', 'how.1.d': 'A call or WhatsApp message — we understand your business, problem and the right solution.',
      'how.2.t': 'On-site Review', 'how.2.d': 'We examine how you work today, analyze your sheets and define exactly what is needed.',
      'how.3.t': 'Offer & Pricing', 'how.3.d': 'We present the right solution, its price and timeline — flexible and before any commitment.',
      'how.4.t': 'Implementation', 'how.4.d': 'We install, prepare your data, train your team — and hand you a working system.',
      'how.5.t': 'Support & Warranty', 'how.5.d': 'Warranty, updates and a direct line — Eng. Ahmed Salem, 01033379719.',
      'contact.title': 'Ready to build your system?',
      'footer.company': 'Company', 'footer.contact': 'Contact'
    },
    fr: {
      'nav.pos': 'POS', 'nav.admin': 'Gestion', 'nav.networks': 'Réseaux', 'nav.websites': 'Sites Web',
      'nav.bots': 'Bots', 'nav.mobile': 'Mobile', 'nav.products': 'Produits', 'nav.works': 'Réalisations',
      'cta.quote': 'Demander un devis', 'cta.whatsapp': 'WhatsApp direct', 'cta.explore': 'Explorer les sections', 'cta.wa_start': 'Commencer sur WhatsApp',
      'sec.cap.k': 'Capacités', 'sec.cap.h': 'Nos six capacités', 'sec.cap.s': "Six unités intégrées — chacune complète, et ensemble elles forment un système connecté",
      'sec.prod.k': 'Prêt à déployer', 'sec.prod.h': "L'écosystème prêt", 'sec.prod.s': 'Des solutions complètes prêtes à être déployées — ventes, factures, comptabilité, personnel et stock en temps réel, licence permanente sans abonnement',
      'sec.shots.k': 'Dans le logiciel', 'sec.shots.h': 'Dans le logiciel', 'sec.shots.s': "Des interfaces réelles de nos logiciels, telles qu'elles tournent chez nos clients — pas de maquettes",
      'sec.works.k': 'Réalisations', 'sec.works.h': 'Des réalisations dont nous sommes fiers', 'sec.works.s': 'Sites, plateformes et serveurs mis en ligne qui tournent quotidiennement chez nos clients',
      'sec.why.k': 'Pourquoi Premax', 'sec.why.h': 'Pourquoi Premax ?',
      'sec.how.k': 'Notre méthode', 'sec.how.h': 'Le parcours de livraison', 'sec.how.s': "Du premier appel à la livraison et au support — cinq étapes claires, sans surprise",
      'why.1.t': '100% hors ligne', 'why.1.d': "Vos données restent locales — aucune dépendance à Internet ni à un serveur externe.",
      'why.2.t': 'Sans abonnement', 'why.2.d': 'Licence permanente, prix unique et clair — sans frais mensuels ni annuels.',
      'why.3.t': 'Support local', 'why.3.d': 'Une équipe sur le terrain : installation, formation, maintenance et réparations rapides.',
      'why.4.t': 'Identité arabe RTL', 'why.4.d': 'Chaque système est conçu en arabe pour les entreprises égyptiennes et arabes.',
      'how.1.t': 'Premier contact', 'how.1.d': 'Un appel ou un message WhatsApp — nous comprenons votre activité et la solution adéquate.',
      'how.2.t': 'Visite et analyse', 'how.2.d': 'Nous examinons votre façon de travailler et définissons précisément le besoin.',
      'how.3.t': 'Offre et prix', 'how.3.d': 'Nous présentons la solution, son prix et son calendrier — avant tout engagement.',
      'how.4.t': 'Réalisation', 'how.4.d': 'Nous installons, préparons vos données, formons votre équipe et livrons un système opérationnel.',
      'how.5.t': 'Support et garantie', 'how.5.d': 'Garantie, mises à jour et ligne directe — Ing. Ahmed Salem, 01033379719.',
      'contact.title': 'Prêt à construire votre système ?',
      'footer.company': 'Société', 'footer.contact': 'Contact'
    },
    tr: {
      'nav.pos': 'POS', 'nav.admin': 'Yönetim', 'nav.networks': 'Ağlar', 'nav.websites': 'Web Siteleri',
      'nav.bots': 'Botlar', 'nav.mobile': 'Mobil', 'nav.products': 'Ürünler', 'nav.works': 'İşlerimiz',
      'cta.quote': 'Teklif İste', 'cta.whatsapp': "WhatsApp'tan Yazın", 'cta.explore': 'Bölümleri Keşfet', 'cta.wa_start': "WhatsApp'ta Başla",
      'sec.cap.k': 'Yetenekler', 'sec.cap.h': 'Altı Yeteneğimiz', 'sec.cap.s': 'Altı bütünleşik birim — her biri kendi başına tam, birlikte tek bir bağlı sistem kurar',
      'sec.prod.k': 'Kuruluma Hazır', 'sec.prod.h': 'Hazır Ekosistem', 'sec.prod.s': 'Anında kurulabilen eksiksiz çözümler — satış, fatura, muhasebe, personel ve anlık stok; kalıcı lisans, abonelik yok',
      'sec.shots.k': 'Yazılımın İçinden', 'sec.shots.h': 'Yazılımın İçinden', 'sec.shots.s': 'Müşterilerimizde çalıştığı gibi gerçek arayüzler — maket değil',
      'sec.works.k': 'Seçili İşler', 'sec.works.h': 'Gurur Duyduğumuz İşler', 'sec.works.s': 'Yayına alınan ve müşterilerimizde günlük çalışan siteler, platformlar ve sunucular',
      'sec.why.k': 'Neden Premax', 'sec.why.h': 'Neden Premax?',
      'sec.how.k': 'Nasıl Çalışırız', 'sec.how.h': 'Teslimat Yolculuğu', 'sec.how.s': 'İlk aramadan teslimata ve desteğe — beş net adım, sürpriz yok',
      'why.1.t': 'Tamamen Çevrimdışı', 'why.1.d': 'Verileriniz cihazınızda kalır — internete veya dış sunucuya bağımlılık yok.',
      'why.2.t': 'Abonelik Yok', 'why.2.d': 'Kalıcı lisans ve tek net fiyat — aylık ya da yıllık ücret yok.',
      'why.3.t': 'Yerel Destek', 'why.3.d': 'Sahada bir ekip: kurulum, eğitim, periyodik bakım ve hızlı çözümler.',
      'why.4.t': 'Arapça RTL Kimlik', 'why.4.d': 'Her sistem Mısır ve Arap iş ortamları için Arapça tasarlanır.',
      'how.1.t': 'İlk İletişim', 'how.1.d': 'Bir arama veya WhatsApp mesajı — işinizi ve doğru çözümü anlarız.',
      'how.2.t': 'Yerinde İnceleme', 'how.2.d': 'Çalışma biçiminizi inceler ve ihtiyacı net şekilde tanımlarız.',
      'how.3.t': 'Teklif ve Fiyat', 'how.3.d': 'Çözümü, fiyatını ve takvimi sunarız — her taahhütten önce.',
      'how.4.t': 'Uygulama', 'how.4.d': 'Kurarız, verilerinizi hazırlar, ekibinizi eğitir ve sistemi teslim ederiz.',
      'how.5.t': 'Destek ve Garanti', 'how.5.d': 'Garanti, güncellemeler ve doğrudan hat — Müh. Ahmed Salem, 01033379719.',
      'contact.title': 'Sisteminizi kurmaya hazır mısınız?',
      'footer.company': 'Şirket', 'footer.contact': 'İletişim'
    },
    ru: {
      'nav.pos': 'POS', 'nav.admin': 'Управление', 'nav.networks': 'Сети', 'nav.websites': 'Сайты',
      'nav.bots': 'Боты', 'nav.mobile': 'Мобильные', 'nav.products': 'Продукты', 'nav.works': 'Работы',
      'cta.quote': 'Запросить цену', 'cta.whatsapp': 'WhatsApp напрямую', 'cta.explore': 'Разделы', 'cta.wa_start': 'Начать в WhatsApp',
      'sec.cap.k': 'Возможности', 'sec.cap.h': 'Шесть возможностей', 'sec.cap.s': 'Шесть интегрированных модулей — каждый сам по себе закончен, вместе они образуют единую систему',
      'sec.prod.k': 'Готово к запуску', 'sec.prod.h': 'Готовая экосистема', 'sec.prod.s': 'Полные решения, готовые к немедленному запуску — продажи, счета, учёт, персонал и склад в реальном времени; постоянная лицензия без подписок',
      'sec.shots.k': 'Внутри ПО', 'sec.shots.h': 'Внутри программы', 'sec.shots.s': 'Реальные интерфейсы наших программ — так, как они работают у клиентов, а не макеты',
      'sec.works.k': 'Избранные работы', 'sec.works.h': 'Работы, которыми мы гордимся', 'sec.works.s': 'Сайты, платформы и серверы, запущенные в работу у наших клиентов',
      'sec.why.k': 'Почему Premax', 'sec.why.h': 'Почему Premax?',
      'sec.how.k': 'Как мы работаем', 'sec.how.h': 'Путь к запуску', 'sec.how.s': 'От первого звонка до запуска и поддержки — пять понятных шагов без сюрпризов',
      'why.1.t': 'Полностью офлайн', 'why.1.d': 'Данные остаются на вашем устройстве — без зависимости от интернета и внешних серверов.',
      'why.2.t': 'Без подписки', 'why.2.d': 'Постоянная лицензия и одна понятная цена — без ежемесячных платежей.',
      'why.3.t': 'Местная поддержка', 'why.3.d': 'Команда на местах: установка, обучение, обслуживание и быстрые исправления.',
      'why.4.t': 'Арабская RTL-идентичность', 'why.4.d': 'Каждая система создана на арабском для египетской и арабской бизнес-среды.',
      'how.1.t': 'Первый контакт', 'how.1.d': 'Звонок или сообщение WhatsApp — мы понимаем ваш бизнес и подходящее решение.',
      'how.2.t': 'Анализ на месте', 'how.2.d': 'Изучаем вашу текущую работу и точно определяем задачу.',
      'how.3.t': 'Предложение и цена', 'how.3.d': 'Представляем решение, цену и сроки — до любых обязательств.',
      'how.4.t': 'Внедрение', 'how.4.d': 'Устанавливаем, готовим данные, обучаем команду и передаём работающую систему.',
      'how.5.t': 'Поддержка и гарантия', 'how.5.d': 'Гарантия, обновления и прямая линия — инж. Ахмед Салем, 01033379719.',
      'contact.title': 'Готовы построить свою систему?',
      'footer.company': 'Компания', 'footer.contact': 'Контакты'
    },
    es: {
      'nav.pos': 'POS', 'nav.admin': 'Gestión', 'nav.networks': 'Redes', 'nav.websites': 'Sitios Web',
      'nav.bots': 'Bots', 'nav.mobile': 'Móvil', 'nav.products': 'Productos', 'nav.works': 'Proyectos',
      'cta.quote': 'Solicitar cotización', 'cta.whatsapp': 'WhatsApp directo', 'cta.explore': 'Explorar secciones', 'cta.wa_start': 'Empezar en WhatsApp',
      'sec.cap.k': 'Capacidades', 'sec.cap.h': 'Nuestras seis capacidades', 'sec.cap.s': 'Seis unidades integradas — cada una completa, y juntas forman un sistema conectado',
      'sec.prod.k': 'Listo para desplegar', 'sec.prod.h': 'El ecosistema listo', 'sec.prod.s': 'Soluciones completas listas para implementar al instante — ventas, facturas, contabilidad, personal e inventario en vivo con licencia permanente y sin suscripciones',
      'sec.shots.k': 'Dentro del software', 'sec.shots.h': 'Dentro del software', 'sec.shots.s': 'Interfaces reales de nuestros programas, tal como funcionan para nuestros clientes — no maquetas',
      'sec.works.k': 'Trabajos seleccionados', 'sec.works.h': 'Trabajos de los que nos enorgullecemos', 'sec.works.s': 'Sitios, plataformas y servidores en producción que operan a diario para nuestros clientes',
      'sec.why.k': 'Por qué Premax', 'sec.why.h': '¿Por qué Premax?',
      'sec.how.k': 'Cómo trabajamos', 'sec.how.h': 'El recorrido de entrega', 'sec.how.s': 'Desde la primera llamada hasta la entrega y el soporte — cinco pasos claros, sin sorpresas',
      'why.1.t': 'Totalmente offline', 'why.1.d': 'Tus datos se quedan en tu equipo — sin depender de internet ni de servidores externos.',
      'why.2.t': 'Sin cuotas mensuales', 'why.2.d': 'Licencia permanente y un precio claro — sin pagos mensuales ni anuales.',
      'why.3.t': 'Soporte local', 'why.3.d': 'Un equipo en el terreno: instalación, formación, mantenimiento y soluciones rápidas.',
      'why.4.t': 'Identidad árabe RTL', 'why.4.d': 'Cada sistema está diseñado en árabe para el entorno empresarial egipcio y árabe.',
      'how.1.t': 'Primer contacto', 'how.1.d': 'Una llamada o un mensaje de WhatsApp — entendemos tu negocio y la solución adecuada.',
      'how.2.t': 'Visita y análisis', 'how.2.d': 'Analizamos cómo trabajas hoy y definimos con precisión lo necesario.',
      'how.3.t': 'Oferta y precio', 'how.3.d': 'Presentamos la solución, su precio y calendario — antes de cualquier compromiso.',
      'how.4.t': 'Implementación', 'how.4.d': 'Instalamos, preparamos tus datos, formamos a tu equipo y entregamos el sistema funcionando.',
      'how.5.t': 'Soporte y garantía', 'how.5.d': 'Garantía, actualizaciones y línea directa — Ing. Ahmed Salem, 01033379719.',
      'contact.title': '¿Listo para construir tu sistema?',
      'footer.company': 'Empresa', 'footer.contact': 'Contacto'
    },
    de: {
      'nav.pos': 'POS', 'nav.admin': 'Verwaltung', 'nav.networks': 'Netzwerke', 'nav.websites': 'Websites',
      'nav.bots': 'Bots', 'nav.mobile': 'Mobil', 'nav.products': 'Produkte', 'nav.works': 'Referenzen',
      'cta.quote': 'Angebot anfragen', 'cta.whatsapp': 'WhatsApp direkt', 'cta.explore': 'Bereiche erkunden', 'cta.wa_start': 'Auf WhatsApp starten',
      'sec.cap.k': 'Kompetenzen', 'sec.cap.h': 'Unsere sechs Kompetenzen', 'sec.cap.s': 'Sechs integrierte Einheiten — jede für sich vollständig, gemeinsam bilden sie ein zusammenhängendes System',
      'sec.prod.k': 'Sofort einsatzbereit', 'sec.prod.h': 'Das fertige Ökosystem', 'sec.prod.s': 'Komplette Lösungen für die sofortige Implementierung — Verkauf, Rechnungen, Buchhaltung, Personal und Live-Bestand; dauerhafte Lizenz ohne Abonnement',
      'sec.shots.k': 'Im Software-Innenraum', 'sec.shots.h': 'Im Software-Innenraum', 'sec.shots.s': 'Echte Oberflächen unserer Programme, so wie sie bei unseren Kunden laufen — keine Mocks',
      'sec.works.k': 'Ausgewählte Arbeiten', 'sec.works.h': 'Arbeiten, auf die wir stolz sind', 'sec.works.s': 'Websites, Plattformen und Server, die live sind und täglich für unsere Kunden laufen',
      'sec.why.k': 'Warum Premax', 'sec.why.h': 'Warum Premax?',
      'sec.how.k': 'So arbeiten wir', 'sec.how.h': 'Der Lieferprozess', 'sec.how.s': 'Vom ersten Anruf bis zur Übergabe und Support — fünf klare Schritte ohne Überraschungen',
      'why.1.t': 'Vollständig offline', 'why.1.d': 'Deine Daten bleiben lokal — keine Abhängigkeit von Internet oder externen Servern.',
      'why.2.t': 'Keine monatlichen Gebühren', 'why.2.d': 'Dauerhafte Lizenz und ein klarer Preis — keine monatlichen oder jährlichen Kosten.',
      'why.3.t': 'Lokaler Support', 'why.3.d': 'Ein Team vor Ort: Installation, Schulung, Wartung und schnelle Hilfe.',
      'why.4.t': 'Arabische RTL-Identität', 'why.4.d': 'Jedes System ist auf Arabisch für ägyptische und arabische Geschäftsumgebungen ausgelegt.',
      'how.1.t': 'Erster Kontakt', 'how.1.d': 'Ein Anruf oder eine WhatsApp-Nachricht — wir verstehen dein Geschäft und die passende Lösung.',
      'how.2.t': 'Vor-Ort-Prüfung', 'how.2.d': 'Wir sehen uns deine Arbeitsweise an und definieren den Bedarf genau.',
      'how.3.t': 'Angebot und Preis', 'how.3.d': 'Wir präsentieren die Lösung, den Preis und den Zeitplan — vor jeder Verpflichtung.',
      'how.4.t': 'Umsetzung', 'how.4.d': 'Wir installieren, bereiten deine Daten vor, schulen dein Team und übergeben ein lauffähiges System.',
      'how.5.t': 'Support und Garantie', 'how.5.d': 'Garantie, Updates und direkte Linie — Ing. Ahmed Salem, 01033379719.',
      'contact.title': 'Bereit, dein System zu bauen?',
      'footer.company': 'Unternehmen', 'footer.contact': 'Kontakt'
    },
    pt: {
      'nav.pos': 'POS', 'nav.admin': 'Gestão', 'nav.networks': 'Redes', 'nav.websites': 'Sites',
      'nav.bots': 'Bots', 'nav.mobile': 'Mobile', 'nav.products': 'Produtos', 'nav.works': 'Projetos',
      'cta.quote': 'Pedir orçamento', 'cta.whatsapp': 'WhatsApp direto', 'cta.explore': 'Explorar seções', 'cta.wa_start': 'Começar no WhatsApp',
      'sec.cap.k': 'Capacidades', 'sec.cap.h': 'As nossas seis capacidades', 'sec.cap.s': 'Seis unidades integradas — cada uma completa, juntas formam um sistema conectado',
      'sec.prod.k': 'Pronto a implementar', 'sec.prod.h': 'O ecossistema pronto', 'sec.prod.s': 'Soluções completas prontas para implementação imediata — vendas, faturas, contabilidade, funcionários e inventário em tempo real com licença permanente e sem assinaturas',
      'sec.shots.k': 'Dentro do software', 'sec.shots.h': 'Dentro do software', 'sec.shots.s': 'Interfaces reais dos nossos programas, tal como funcionam para os nossos clientes — não são maquetes',
      'sec.works.k': 'Trabalhos selecionados', 'sec.works.h': 'Trabalhos de que nos orgulhamos', 'sec.works.s': 'Sites, plataformas e servidores no ar que operam diariamente para os nossos clientes',
      'sec.why.k': 'Porquê Premax', 'sec.why.h': 'Porquê Premax?',
      'sec.how.k': 'Como trabalhamos', 'sec.how.h': 'A jornada de entrega', 'sec.how.s': 'Do primeiro contacto à entrega e ao suporte — cinco passos claros, sem surpresas',
      'why.1.t': 'Totalmente offline', 'why.1.d': 'Os seus dados ficam no seu equipamento — sem dependência de internet ou servidores externos.',
      'why.2.t': 'Sem mensalidades', 'why.2.d': 'Licença permanente e um preço claro — sem pagamentos mensais ou anuais.',
      'why.3.t': 'Suporte local', 'why.3.d': 'Uma equipa no terreno: instalação, formação, manutenção e soluções rápidas.',
      'why.4.t': 'Identidade árabe RTL', 'why.4.d': 'Cada sistema é desenhado em árabe para o ambiente empresarial egípcio e árabe.',
      'how.1.t': 'Primeiro contacto', 'how.1.d': 'Uma chamada ou mensagem de WhatsApp — entendemos o seu negócio e a solução certa.',
      'how.2.t': 'Visita e análise', 'how.2.d': 'Analisamos como trabalha hoje e definimos exatamente o necessário.',
      'how.3.t': 'Proposta e preço', 'how.3.d': 'Apresentamos a solução, o preço e o calendário — antes de qualquer compromisso.',
      'how.4.t': 'Implementação', 'how.4.d': 'Instalamos, preparamos os seus dados, formamos a sua equipa e entregamos o sistema a funcionar.',
      'how.5.t': 'Suporte e garantia', 'how.5.d': 'Garantia, atualizações e linha direta — Eng. Ahmed Salem, 01033379719.',
      'contact.title': 'Pronto para construir o seu sistema?',
      'footer.company': 'Empresa', 'footer.contact': 'Contacto'
    },
    zh: {
      'nav.pos': 'POS', 'nav.admin': '管理', 'nav.networks': '网络', 'nav.websites': '网站',
      'nav.bots': '机器人', 'nav.mobile': '移动端', 'nav.products': '产品', 'nav.works': '案例',
      'cta.quote': '获取报价', 'cta.whatsapp': 'WhatsApp 直连', 'cta.explore': '浏览板块', 'cta.wa_start': '在 WhatsApp 开始',
      'sec.cap.k': '核心能力', 'sec.cap.h': '我们的六大能力', 'sec.cap.s': '六个完整的集成单元——各自独立完整，合在一起构成一个连通系统',
      'sec.prod.k': '开箱即用', 'sec.prod.h': '现成体系', 'sec.prod.s': '可立即部署的完整方案——销售、发票、会计、员工与实时库存；永久授权，无订阅',
      'sec.shots.k': '软件内部', 'sec.shots.h': '软件内部', 'sec.shots.s': '我们软件的真实界面，与客户使用中的一致——非效果图',
      'sec.works.k': '精选案例', 'sec.works.h': '引以为傲的作品', 'sec.works.s': '已上线并每天为客户运行的网站、平台与服务器',
      'sec.why.k': '为什么选择 Premax', 'sec.why.h': '为什么选择 Premax？',
      'sec.how.k': '工作流程', 'sec.how.h': '交付之旅', 'sec.how.s': '从第一通电话到交付与售后——五个清晰步骤，绝无意外',
      'why.1.t': '完全离线', 'why.1.d': '数据保存在本地设备上——不依赖互联网或外部服务器。',
      'why.2.t': '无月费', 'why.2.d': '永久授权，价格清晰——无月费或年费。',
      'why.3.t': '本地支持', 'why.3.d': '本地团队：安装、培训、定期维护与快速解决。',
      'why.4.t': '阿拉伯语 RTL 体验', 'why.4.d': '每个系统都为埃及与阿拉伯商业环境量身设计。',
      'how.1.t': '初步联系', 'how.1.d': '一通电话或一条 WhatsApp 消息——我们了解您的业务与合适方案。',
      'how.2.t': '现场调研', 'how.2.d': '我们考察您当前的工作方式，精准定义需求。',
      'how.3.t': '方案与报价', 'how.3.d': '我们展示方案、价格与时间表——在任何承诺之前。',
      'how.4.t': '实施部署', 'how.4.d': '我们安装、准备数据、培训团队，并交付可运行的系统。',
      'how.5.t': '支持与保修', 'how.5.d': '保修、更新与直通热线——Ahmed Salem 工程师，01033379719。',
      'contact.title': '准备好构建您的系统了吗？',
      'footer.company': '公司', 'footer.contact': '联系我们'
    },
    hi: {
      'nav.pos': 'POS', 'nav.admin': 'प्रबंधन', 'nav.networks': 'नेटवर्क', 'nav.websites': 'वेबसाइट',
      'nav.bots': 'बॉट', 'nav.mobile': 'मोबाइल', 'nav.products': 'उत्पाद', 'nav.works': 'हमारा काम',
      'cta.quote': 'कोटेशन मांगें', 'cta.whatsapp': 'सीधे WhatsApp', 'cta.explore': 'खंड देखें', 'cta.wa_start': 'WhatsApp पर शुरू करें',
      'sec.cap.k': 'क्षमताएँ', 'sec.cap.h': 'हमारी छह क्षमताएँ', 'sec.cap.s': 'छह एकीकृत इकाइयाँ — हर एक अपने आप में पूर्ण, मिलकर एक जुड़ी हुई प्रणाली बनाती हैं',
      'sec.prod.k': 'तैयार', 'sec.prod.h': 'तैयार प्रणाली', 'sec.prod.s': 'तुरंत तैनात करने योग्य पूर्ण समाधान — बिक्री, इनवॉइस, लेखा, कर्मचारी और लाइव इन्वेंटरी; स्थायी लाइसेंस, कोई सदस्यता नहीं',
      'sec.shots.k': 'सॉफ्टवेयर के अंदर', 'sec.shots.h': 'सॉफ्टवेयर के अंदर', 'sec.shots.s': 'हमारे सॉफ्टवेयर के असली इंटरफ़ेस, वैसे जैसे क्लाइंट के पास चलते हैं — मॉकअप नहीं',
      'sec.works.k': 'चुनिंदा कार्य', 'sec.works.h': 'ऐसे कार्य जिन पर हमें गर्व है', 'sec.works.s': 'वेबसाइटें, प्लेटफ़ॉर्म और सर्वर जो लाइव हैं और क्लाइंट के लिए रोज़ चलते हैं',
      'sec.why.k': 'Premax क्यों', 'sec.why.h': 'Premax ही क्यों?',
      'sec.how.k': 'हम कैसे काम करते हैं', 'sec.how.h': 'संचालन यात्रा', 'sec.how.s': 'पहली कॉल से सुपुर्दगी और सपोर्ट तक — पाँच स्पष्ट चरण, कोई आश्चर्य नहीं',
      'why.1.t': 'पूरी तरह ऑफ़लाइन', 'why.1.d': 'आपका डेटा आपके डिवाइस पर रहता है — इंटरनेट या बाहरी सर्वर पर कोई निर्भरता नहीं।',
      'why.2.t': 'कोई मासिक शुल्क नहीं', 'why.2.d': 'स्थायी लाइसेंस और एक स्पष्ट कीमत — कोई मासिक या वार्षिक शुल्क नहीं।',
      'why.3.t': 'स्थानीय सपोर्ट', 'why.3.d': 'ज़मीनी टीम: इंस्टॉलेशन, प्रशिक्षण, रखरखाव और तेज़ समाधान।',
      'why.4.t': 'अरबी RTL पहचान', 'why.4.d': 'हर प्रणाली मिस्र और अरब कारोबार वातावरण के लिए अरबी में बनी है।',
      'how.1.t': 'पहला संपर्क', 'how.1.d': 'एक कॉल या WhatsApp संदेश — हम आपका कारोबार और सही समाधान समझते हैं।',
      'how.2.t': 'स्थल परीक्षण', 'how.2.d': 'हम आपके मौजूदा तरीके का विश्लेषण कर ज़रूरत को सटीक तय करते हैं।',
      'how.3.t': 'प्रस्ताव और कीमत', 'how.3.d': 'हम समाधान, उसकी कीमत और समय-सारणी पेश करते हैं — किसी भी प्रतिबद्धता से पहले।',
      'how.4.t': 'क्रियान्वयन', 'how.4.d': 'हम इंस्टॉल करते हैं, डेटा तैयार करते हैं, आपकी टीम को प्रशिक्षित करते हैं और काम करती प्रणाली सौंपते हैं।',
      'how.5.t': 'सपोर्ट और वारंटी', 'how.5.d': 'वारंटी, अपडेट और सीधी लाइन — इंजी. अहमद सालेम, 01033379719।',
      'contact.title': 'अपनी प्रणाली बनाने के लिए तैयार?',
      'footer.company': 'कंपनी', 'footer.contact': 'संपर्क'
    }
  };

  /* Location section labels */
  dicts.ar['sec.location.k'] = 'Find Us'; dicts.ar['sec.location.h'] = 'موقعنا على الخريطة'; dicts.ar['sec.location.s'] = 'موقعنا على الخريطة — ممكن توصلنا في أي وقت.';
  dicts.en['sec.location.k'] = 'Find Us'; dicts.en['sec.location.h'] = 'Find Us on the Map'; dicts.en['sec.location.s'] = 'Our location on the map — reach us any time.';
  dicts.fr['sec.location.k'] = 'Nous Trouver'; dicts.fr['sec.location.h'] = 'Notre emplacement'; dicts.fr['sec.location.s'] = 'Notre position sur la carte — contactez-nous à tout moment.';
  dicts.tr['sec.location.k'] = 'Bizi Bulun'; dicts.tr['sec.location.h'] = 'Haritadaki Yerimiz'; dicts.tr['sec.location.s'] = 'Haritadaki konumumuz — istediğiniz zaman ulaşın.';
  dicts.ru['sec.location.k'] = 'Где мы'; dicts.ru['sec.location.h'] = 'Мы на карте'; dicts.ru['sec.location.s'] = 'Наше местоположение на карте — свяжитесь с нами в любое время.';
  dicts.es['sec.location.k'] = 'Encuéntranos'; dicts.es['sec.location.h'] = 'Dónde estamos'; dicts.es['sec.location.s'] = 'Nuestra ubicación en el mapa — escríbenos cuando quieras.';
  dicts.de['sec.location.k'] = 'Finde uns'; dicts.de['sec.location.h'] = 'Unser Standort'; dicts.de['sec.location.s'] = 'Unser Standort auf der Karte — erreiche uns jederzeit.';
  dicts.pt['sec.location.k'] = 'Encontre-nos'; dicts.pt['sec.location.h'] = 'Onde estamos'; dicts.pt['sec.location.s'] = 'Nossa localização no mapa — fale connosco quando quiser.';
  dicts.zh['sec.location.k'] = '找到我们'; dicts.zh['sec.location.h'] = '我们的位置'; dicts.zh['sec.location.s'] = '我们在地图上的位置——随时联系我们。';
  dicts.hi['sec.location.k'] = 'हमें खोजें'; dicts.hi['sec.location.h'] = 'नक्शे पर हमारा स्थान'; dicts.hi['sec.location.s'] = 'नक्शे पर हमारी जगह — किसी भी समय संपर्क करें।';

  var RTL = { ar: true, he: true, ur: true, fa: true };

  function get() { try { return localStorage.getItem(KEY) || 'ar'; } catch (e) { return 'ar'; } }
  function t(k) {
    var l = get();
    return (dicts[l] && dicts[l][k]) || (dicts.ar && dicts.ar[k]) || k;
  }
  function apply() {
    var l = get();
    document.documentElement.lang = l;
    document.documentElement.dir = RTL[l] ? 'rtl' : 'ltr';
    var nodes = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i];
      var v = t(el.getAttribute('data-i18n'));
      if (v != null) el.textContent = v;
    }
    var htmlNodes = document.querySelectorAll('[data-i18n-html]');
    for (var j = 0; j < htmlNodes.length; j++) {
      var el2 = htmlNodes[j];
      var v2 = t(el2.getAttribute('data-i18n-html'));
      if (v2 != null) el2.innerHTML = v2;
    }
    var sel = document.getElementById('langSelect');
    if (sel) sel.value = l;
  }
  function set(l) {
    try { localStorage.setItem(KEY, l); } catch (e) {}
    apply();
  }
  return { t: t, get: get, set: set, apply: apply };
})();
