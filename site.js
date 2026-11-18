/* PREMAX SYSTEM — shared page renderer (footer, brand, page content, i18n) */
window.PREMAX_SITE = (function () {
  function esc(s){ return String(s == null ? '' : s).replace(/[&<>"']/g, function(c){ return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]; }); }
  function L(obj, field){
    if (!obj) return '';
    var lang = (window.PREMAX_I18N && PREMAX_I18N.get) ? PREMAX_I18N.get() : 'ar';
    return obj[field + '_' + lang] || obj[field] || '';
  }
  function brandBadge(){
    var b = (window.PREMAX_DATA || {}).brand || {};
    var el = document.getElementById('brandBadge'); if (!el) return;
    el.innerHTML = b.logo ? '<img src="' + esc(b.logo) + '" alt="' + esc(b.siteName || 'PREMAX') + '">' : 'P';
  }
  function footer(){
    var D = window.PREMAX_DATA || {};
    var f = D.footer || {}, b = D.brand || {};
    var el = document.getElementById('siteFooter'); if (!el) return;
    var email = f.email || 'premaxsystem@gmail.com';
    var fb = f.fb || 'facebook.com/Premaxsystem';
    var logoHtml = b.logo ? '<img src="' + esc(b.logo) + '" alt="' + esc(b.siteName || 'PREMAX') + '">' : 'P';
    el.innerHTML =
      '<div class="container footer-grid">' +
        '<div class="f-brand"><div class="f-logo">' + logoHtml + '</div>' +
          '<div><b>' + esc(b.siteName || 'PREMAX SYSTEM') + '</b><p>' + esc(b.tagline || '') + ' — ' + esc(f.rights || '') + '</p></div>' +
        '</div>' +
        '<div class="f-col"><h5 data-i18n="footer.company">الشركة</h5>' +
          '<a href="index.html">الرئيسية</a><a href="about.html">من نحن</a><a href="contact.html">اتصل بنا</a><a href="terms.html">سياسة الاستخدام</a><a href="privacy.html">سياسة الخصوصية</a>' +
        '</div>' +
        '<div class="f-col"><h5 data-i18n="footer.contact">تواصل</h5>' +
          '<a href="https://wa.me/201033379719">واتساب — 01033379719</a>' +
          '<a href="mailto:' + esc(email) + '">' + esc(email) + '</a>' +
          '<a href="https://' + esc(fb) + '/" target="_blank" rel="noopener">' + esc(fb) + '</a>' +
        '</div>' +
      '</div>' +
      '<div class="f-bottom"><div class="container">' + esc(f.info || '') + ' &nbsp;·&nbsp; © 2026 جميع الحقوق محفوظة لـ ' + esc(b.siteName || 'PREMAX SYSTEM') + '</div></div>';
  }
  function page(key){
    var D = window.PREMAX_DATA || {};
    var p = ((D.pages || {})[key]) || {};
    var titleEl = document.getElementById('pageTitle');
    var bodyEl = document.getElementById('pageContent');
    if (titleEl) titleEl.textContent = L(p, 'title');
    if (bodyEl) bodyEl.innerHTML = L(p, 'body');
    document.title = L(p, 'title') + ' — PREMAX SYSTEM';
    var m = document.querySelector('meta[name="description"]');
    if (m) m.setAttribute('content', L(p, 'title') + ' — بريماكس سيستم: تطوير وبناء الأنظمة والبرامج، أوفلاين 100% وبدون اشتراكات.');
  }
  function init(){
    brandBadge();
    footer();
    if (window.PREMAX_I18N) PREMAX_I18N.apply();
  }
  return { brandBadge: brandBadge, footer: footer, page: page, init: init, esc: esc, L: L };
})();
