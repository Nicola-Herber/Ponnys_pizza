(function () {
  "use strict";

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
})();
