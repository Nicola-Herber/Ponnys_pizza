(function () {
  "use strict";

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

      const subject = "Richiesta evento - " + (name || "Nuovo contatto");
      const bodyLines = [
        "Ciao Ponny's Pizza,",
        "",
        "mi chiamo " + (name || "[Nome]") + ".",
        "",
        "Messaggio:",
        message || "[Scrivi qui il tuo messaggio]",
        "",
        "Grazie!",
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
    window.addEventEventListener("hashchange", applyHomeNavActive);

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
