(function () {
  "use strict";

  /* ── i18n ── */
  var I18N = {
    it: {
      nav_menu: "Il Menù",
      nav_gallery: "Galleria",
      nav_contact: "Contattaci",
      hero_title: "PROVALA, FIDATI!",
      hero_intro: "Ecco le nostre pizze per la festa di questa sera! Scegli la tua preferita!",
      th_size: "Taglia",
      size_full: "Intera",
      size_half: "Mezza",
      size_slice: "Fetta",
      ing_mozzarella: "Mozzarella",
      ing_pomodoro: "Pomodoro",
      ing_prosciutto: "Prosciutto",
      ing_salame: "Salame piccante",
      ing_olio: "Olio",
      ing_sale: "Sale",
      ing_nutella: "Nutella",
      gallery_title: "Galleria",
      gallery_intro: "Alcune delle nostre pizze in scena, da mangiare sono ancora più buone!",
      footer_copy: "\u00a9 2026 Ponny\u2019s Pizza. Tutti i diritti riservati.",
      insta_text: "Seguici su Instagram",
      insta_follow: "Segui",
      chef_title: "INCONTRA LO CHEF",
      chef_bio_1: "Ti \u00e9 piaciuta la pizza? Stai organizzando la tua festa o vuoi uno chef per una serata tra amici? Contattaci! Siamo pronti a venire alla tua festa per prepararti la tua pizza preferita!",
      chef_bio_2: "Tu dicci dove, quando e quante persone ci aspettano e noi pensiamo al resto!",
      contact_title: "CONTATTACI PER IL TUO PROSSIMO EVENTO!",
      contact_note: "Compila e invia: si aprira' la tua app Mail con il messaggio pronto. Ti risponderemo il prima possibile!",
      label_name: "Nome",
      ph_name: "Il tuo nome",
      label_message: "Messaggio",
      ph_message: "Raccontaci data, numero ospiti e preferenze...",
      btn_send: "Apri Mail e Invia Richiesta"
    },
    en: {
      nav_menu: "The Menu",
      nav_gallery: "Gallery",
      nav_contact: "Contact Us",
      hero_title: "TRY IT, TRUST US!",
      hero_intro: "Here are our pizzas for tonight\u2019s party! Choose your favourite!",
      th_size: "Size",
      size_full: "Whole",
      size_half: "Half",
      size_slice: "Slice",
      ing_mozzarella: "Mozzarella",
      ing_pomodoro: "Tomato",
      ing_prosciutto: "Ham",
      ing_salame: "Spicy Salami",
      ing_olio: "Oil",
      ing_sale: "Salt",
      ing_nutella: "Nutella",
      gallery_title: "Gallery",
      gallery_intro: "Some of our pizzas on display \u2014 they taste even better!",
      footer_copy: "\u00a9 2026 Ponny\u2019s Pizza. All rights reserved.",
      insta_text: "Follow us on Instagram",
      insta_follow: "Follow",
      chef_title: "MEET THE CHEF",
      chef_bio_1: "Did you enjoy the pizza? Are you organising a party or want a chef for an evening with friends? Contact us! We\u2019re ready to come to your party and make your favourite pizza!",
      chef_bio_2: "Just tell us where, when and how many guests to expect \u2014 we\u2019ll take care of the rest!",
      contact_title: "CONTACT US FOR YOUR NEXT EVENT!",
      contact_note: "Fill in and send: your Mail app will open with the message ready. We\u2019ll get back to you as soon as possible!",
      label_name: "Name",
      ph_name: "Your name",
      label_message: "Message",
      ph_message: "Tell us about date, number of guests and preferences\u2026",
      btn_send: "Open Mail and Send Request"
    },
    de: {
      nav_menu: "Speisekarte",
      nav_gallery: "Galerie",
      nav_contact: "Kontakt",
      hero_title: "PROBIER\u2019S, VERTRAU UNS!",
      hero_intro: "Hier sind unsere Pizzen f\u00fcr die heutige Party! W\u00e4hle deine Lieblingspizza!",
      th_size: "Gr\u00f6\u00dfe",
      size_full: "Ganz",
      size_half: "Halb",
      size_slice: "St\u00fcck",
      ing_mozzarella: "Mozzarella",
      ing_pomodoro: "Tomate",
      ing_prosciutto: "Schinken",
      ing_salame: "Scharfe Salami",
      ing_olio: "\u00d6l",
      ing_sale: "Salz",
      ing_nutella: "Nutella",
      gallery_title: "Galerie",
      gallery_intro: "Einige unserer Pizzen in Szene \u2014 sie schmecken noch besser!",
      footer_copy: "\u00a9 2026 Ponny\u2019s Pizza. Alle Rechte vorbehalten.",
      insta_text: "Folge uns auf Instagram",
      insta_follow: "Folgen",
      chef_title: "TRIFF DEN CHEF",
      chef_bio_1: "Hat dir die Pizza geschmeckt? Planst du eine Party oder m\u00f6chtest du einen Koch f\u00fcr einen Abend mit Freunden? Kontaktiere uns! Wir kommen gerne zu deiner Feier und bereiten deine Lieblingspizza zu!",
      chef_bio_2: "Sag uns einfach wo, wann und wie viele G\u00e4ste kommen \u2014 wir k\u00fcmmern uns um den Rest!",
      contact_title: "KONTAKTIERE UNS F\u00dcR DEIN N\u00c4CHSTES EVENT!",
      contact_note: "Ausf\u00fcllen und absenden: Deine Mail-App \u00f6ffnet sich mit der fertigen Nachricht. Wir antworten so schnell wie m\u00f6glich!",
      label_name: "Name",
      ph_name: "Dein Name",
      label_message: "Nachricht",
      ph_message: "Erz\u00e4hl uns Datum, G\u00e4stezahl und W\u00fcnsche\u2026",
      btn_send: "Mail \u00f6ffnen und Anfrage senden"
    }
  };

  var currentLang = "it";

  function applyLang(lang) {
    var dict = I18N[lang];
    if (!dict) return;
    currentLang = lang;
    try { localStorage.setItem("ppLang", lang); } catch (e) {}
    document.documentElement.lang = lang === "it" ? "it" : lang;

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) el.textContent = dict[key];
    });

    document.querySelectorAll("[data-i18n-ph]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-ph");
      if (dict[key] !== undefined) el.placeholder = dict[key];
    });

    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
    });
  }

  (function initLangSwitcher() {
    var saved;
    try { saved = localStorage.getItem("ppLang"); } catch (e) {}
    if (saved && I18N[saved]) {
      applyLang(saved);
    }

    document.addEventListener("click", function (e) {
      var btn = e.target.closest(".lang-btn");
      if (!btn) return;
      var lang = btn.getAttribute("data-lang");
      if (lang && I18N[lang]) applyLang(lang);
    });
  })();

  /* Image loading: shimmer → fade-in */
  (function initImageLoading() {
    var containers = document.querySelectorAll(".pizza-menu-visual, .gallery-media");
    containers.forEach(function (container) {
      var img = container.querySelector("img");
      if (!img) return;
      container.classList.add("img-loading");
      if (img.complete && img.naturalWidth > 0) {
        container.classList.remove("img-loading");
        container.classList.add("img-loaded");
      } else {
        img.addEventListener("load", function () {
          container.classList.remove("img-loading");
          container.classList.add("img-loaded");
        });
        img.addEventListener("error", function () {
          container.classList.remove("img-loading");
        });
      }
    });
  })();

  const cards = document.querySelectorAll("[data-pizza-flip]");

  cards.forEach(function (card) {
    const scene = card.querySelector(".pizza-flip-scene");
    const titleEl = card.querySelector(".pizza-flip-front h3");
    const name = titleEl ? titleEl.textContent.trim() : "Pizza";

    function setFlipped(on) {
      card.classList.toggle("is-flipped", on);
      card.setAttribute("aria-expanded", on ? "true" : "false");
      card.setAttribute(
        "aria-label",
        on
          ? name + " — clicca la scheda per tornare al menù"
          : name + " — clicca la scheda per vedere gli ingredienti"
      );
    }

    if (!scene) {
      return;
    }

    scene.addEventListener("click", function () {
      setFlipped(!card.classList.contains("is-flipped"));
    });

    card.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        setFlipped(!card.classList.contains("is-flipped"));
      }
      if (e.key === "Escape" && card.classList.contains("is-flipped")) {
        e.preventDefault();
        setFlipped(false);
      }
    });
  });

  const mobileMenus = document.querySelectorAll(".mobile-nav");

  mobileMenus.forEach(function (mobileNav) {
    const toggleBtn = mobileNav.querySelector(".mobile-nav-toggle");
    const popup = mobileNav.querySelector(".mobile-nav-popup");
    const links = mobileNav.querySelectorAll(".mobile-nav-link");

    if (!toggleBtn || !popup) {
      return;
    }

    function setOpen(on) {
      mobileNav.classList.toggle("is-open", on);
      toggleBtn.setAttribute("aria-expanded", on ? "true" : "false");
    }

    toggleBtn.addEventListener("click", function () {
      setOpen(!mobileNav.classList.contains("is-open"));
    });

    links.forEach(function (link) {
      link.addEventListener("click", function () {
        setOpen(false);
      });
    });

    document.addEventListener("click", function (event) {
      if (!mobileNav.contains(event.target)) {
        setOpen(false);
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    });
  });

  const mailForms = document.querySelectorAll("[data-mailto-form]");

  mailForms.forEach(function (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      const mailTo = form.getAttribute("data-mailto") || "ponnypizzas@gmail.com";
      const nameInput = form.querySelector('input[name="name"]');
      const messageInput = form.querySelector('textarea[name="message"]');

      const name = nameInput ? nameInput.value.trim() : "";
      const message = messageInput ? messageInput.value.trim() : "";

      var mailTexts = {
        it: { subj: "Richiesta evento", hello: "Ciao Ponny's Pizza,", iam: "mi chiamo", msg: "Messaggio:", namePh: "[Nome]", msgPh: "[Scrivi qui il tuo messaggio]", thanks: "Grazie!" },
        en: { subj: "Event request", hello: "Hello Ponny's Pizza,", iam: "my name is", msg: "Message:", namePh: "[Name]", msgPh: "[Write your message here]", thanks: "Thank you!" },
        de: { subj: "Eventanfrage", hello: "Hallo Ponny's Pizza,", iam: "mein Name ist", msg: "Nachricht:", namePh: "[Name]", msgPh: "[Schreibe hier deine Nachricht]", thanks: "Danke!" }
      };
      var mt = mailTexts[currentLang] || mailTexts.it;
      const subject = mt.subj + " - " + (name || mt.namePh);
      const bodyLines = [
        mt.hello,
        "",
        mt.iam + " " + (name || mt.namePh) + ".",
        "",
        mt.msg,
        message || mt.msgPh,
        "",
        mt.thanks,
      ];
      const body = bodyLines.join("\n");

      const mailtoUrl =
        "mailto:" +
        mailTo +
        "?subject=" +
        encodeURIComponent(subject) +
        "&body=" +
        encodeURIComponent(body);

      window.location.href = mailtoUrl;
    });
  });

  const instaPopup = document.getElementById("insta-popup");
  if (instaPopup) {
    const closeBtn = instaPopup.querySelector(".insta-popup-close");
    setTimeout(function () {
      instaPopup.classList.add("is-visible");
    }, 5000);

    if (closeBtn) {
      closeBtn.addEventListener("click", function () {
        instaPopup.classList.remove("is-visible");
      });
    }
  }

  /* Home (index): evidenzia «Galleria» in nav quando la sezione galleria è in vista (scroll o click ancore) */
  (function initHomeNavScrollState() {
    const gallerySection = document.querySelector(".gallery-section");
    if (!gallerySection) {
      return;
    }

    const navLinks = document.querySelectorAll(".nav-link");
    const mobileLinks = document.querySelectorAll(".mobile-nav-link");

    function gallerySectionTop() {
      return gallerySection.getBoundingClientRect().top + window.scrollY;
    }

    function isGalleryActive() {
      return window.scrollY + 20 >= gallerySectionTop();
    }

    function applyHomeNavActive() {
      const gallery = isGalleryActive();
      navLinks.forEach(function (link) {
        const href = link.getAttribute("href") || "";
        const isGalleria = href === "#galleria" || /#galleria$/.test(href);
        const isMenuHome =
          href === "index.html" ||
          href === "./index.html" ||
          href === "/" ||
          href === "";
        link.classList.toggle("active", gallery ? isGalleria : isMenuHome && !href.includes("about"));
      });
      mobileLinks.forEach(function (link) {
        const href = link.getAttribute("href") || "";
        const isGalleria = href === "#galleria" || /#galleria$/.test(href);
        const isMenuHome =
          href === "index.html" ||
          href === "./index.html" ||
          href === "/" ||
          href === "";
        link.classList.toggle("active", gallery ? isGalleria : isMenuHome && !href.includes("about"));
      });
    }

    let ticking = false;
    function onScrollOrResize() {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(function () {
          ticking = false;
          applyHomeNavActive();
        });
      }
    }

    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);
    window.addEventListener("hashchange", applyHomeNavActive);

    document.querySelectorAll('a[href="#galleria"], a[href$="#galleria"]').forEach(function (a) {
      a.addEventListener("click", function () {
        requestAnimationFrame(function () {
          setTimeout(applyHomeNavActive, 450);
        });
      });
    });

    function applyAfterLayout() {
      applyHomeNavActive();
      requestAnimationFrame(applyHomeNavActive);
    }

    if (document.readyState === "complete") {
      applyAfterLayout();
      setTimeout(applyHomeNavActive, 120);
    } else {
      window.addEventListener("load", function () {
        applyAfterLayout();
        setTimeout(applyHomeNavActive, 120);
      });
    }
    applyHomeNavActive();
  })();
})();
