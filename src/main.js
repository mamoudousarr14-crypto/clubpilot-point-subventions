import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Bell,
  BellRing,
  CalendarDays,
  Check,
  ChevronRight,
  CircleDashed,
  CirclePlay,
  Clock3,
  Cookie,
  Database,
  DatabaseZap,
  FileCheck2,
  FileQuestion,
  FolderCheck,
  FolderOpen,
  Info,
  Landmark,
  LoaderCircle,
  Mail,
  MapPin,
  Menu,
  Minus,
  Plus,
  Quote,
  Radar,
  RefreshCw,
  ScanSearch,
  Search,
  Settings2,
  Shield,
  ShieldAlert,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  TimerOff,
  Users,
  X,
  createIcons,
} from "lucide";
import "../styles.css";

const icons = {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Bell,
  BellRing,
  CalendarDays,
  Check,
  ChevronRight,
  CircleDashed,
  CirclePlay,
  Clock3,
  Cookie,
  Database,
  DatabaseZap,
  FileCheck2,
  FileQuestion,
  FolderCheck,
  FolderOpen,
  Info,
  Landmark,
  LoaderCircle,
  Mail,
  MapPin,
  Menu,
  Minus,
  Plus,
  Quote,
  Radar,
  RefreshCw,
  ScanSearch,
  Search,
  Settings2,
  Shield,
  ShieldAlert,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  TimerOff,
  Users,
  X,
};

createIcons({ icons, attrs: { "stroke-width": 1.8 } });

const header = document.querySelector("[data-header]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const mobileMenu = document.querySelector("[data-mobile-menu]");
const toastBox = document.querySelector("[data-toast-box]");
const toastMessage = document.querySelector("[data-toast-message]");
let toastTimer;

const showToast = (message) => {
  if (!toastBox || !toastMessage) return;
  window.clearTimeout(toastTimer);
  toastMessage.textContent = message;
  toastBox.hidden = false;
  requestAnimationFrame(() => toastBox.classList.add("is-visible"));
  toastTimer = window.setTimeout(() => {
    toastBox.classList.remove("is-visible");
    window.setTimeout(() => {
      toastBox.hidden = true;
    }, 220);
  }, 4200);
};

const closeMobileMenu = () => {
  if (!mobileMenu || !menuToggle) return;
  mobileMenu.hidden = true;
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Ouvrir le menu");
  menuToggle.innerHTML = '<i data-lucide="menu" aria-hidden="true"></i>';
  createIcons({ icons, attrs: { "stroke-width": 1.8 } });
};

menuToggle?.addEventListener("click", () => {
  const willOpen = mobileMenu.hidden;
  mobileMenu.hidden = !willOpen;
  menuToggle.setAttribute("aria-expanded", String(willOpen));
  menuToggle.setAttribute("aria-label", willOpen ? "Fermer le menu" : "Ouvrir le menu");
  menuToggle.innerHTML = `<i data-lucide="${willOpen ? "x" : "menu"}" aria-hidden="true"></i>`;
  createIcons({ icons, attrs: { "stroke-width": 1.8 } });
});

mobileMenu?.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMobileMenu));

window.addEventListener(
  "scroll",
  () => {
    header?.classList.toggle("is-scrolled", window.scrollY > 24);
  },
  { passive: true },
);

document.querySelectorAll("[data-toast]").forEach((trigger) => {
  trigger.addEventListener("click", () => showToast(trigger.dataset.toast));
});

toastBox?.querySelector("button")?.addEventListener("click", () => {
  toastBox.classList.remove("is-visible");
  window.setTimeout(() => {
    toastBox.hidden = true;
  }, 220);
});

document.querySelectorAll("[data-accordion] .accordion-item button").forEach((button) => {
  button.addEventListener("click", () => {
    const item = button.closest(".accordion-item");
    const panel = item.querySelector(".accordion-panel");
    const isOpen = item.classList.contains("is-open");

    document.querySelectorAll("[data-accordion] .accordion-item").forEach((otherItem) => {
      otherItem.classList.remove("is-open");
      otherItem.querySelector("button")?.setAttribute("aria-expanded", "false");
      const otherPanel = otherItem.querySelector(".accordion-panel");
      if (otherPanel) otherPanel.hidden = true;
    });

    if (!isOpen) {
      item.classList.add("is-open");
      button.setAttribute("aria-expanded", "true");
      panel.hidden = false;
    }
  });
});

const auditForm = document.querySelector("#audit-form");
const auditResult = document.querySelector("[data-audit-result]");
const clubResult = document.querySelector("[data-club-result]");

const setFieldError = (field, message) => {
  const error = document.querySelector(`[data-error-for="${field.id}"]`);
  field.closest(".form-field")?.classList.toggle("has-error", Boolean(message));
  field.setAttribute("aria-invalid", String(Boolean(message)));
  if (error) error.textContent = message;
};

auditForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const requiredFields = [...auditForm.querySelectorAll("[required]")];
  let isValid = true;

  requiredFields.forEach((field) => {
    let message = "";
    if (!field.value.trim()) message = "Ce champ est nécessaire.";
    else if (field.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value)) {
      message = "Saisissez une adresse email valide.";
    } else if (field.type === "number" && (Number(field.value) < 1 || Number(field.value) > 5000)) {
      message = "Indiquez un nombre entre 1 et 5 000.";
    }
    setFieldError(field, message);
    if (message) isValid = false;
  });

  if (!isValid) {
    auditForm.querySelector('[aria-invalid="true"]')?.focus();
    return;
  }

  if (clubResult) clubResult.textContent = auditForm.elements.clubName.value.trim();
  auditForm.hidden = true;
  auditResult.hidden = false;
  auditResult.focus?.();
});

auditForm?.querySelectorAll("input").forEach((field) => {
  field.addEventListener("input", () => {
    if (field.getAttribute("aria-invalid") === "true") setFieldError(field, "");
  });
});

document.querySelector("[data-reset-audit]")?.addEventListener("click", () => {
  auditResult.hidden = true;
  auditForm.hidden = false;
  auditForm.querySelector("input")?.focus();
});

const revealItems = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px" },
  );
  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

const cookieBanner = document.querySelector("[data-cookie-banner]");
const openCookieButtons = document.querySelectorAll("[data-open-cookies]");
const cookieKey = "clubpilot-cookie-choice";

const openCookieBanner = () => {
  if (!cookieBanner) return;
  cookieBanner.hidden = false;
  requestAnimationFrame(() => cookieBanner.classList.add("is-visible"));
};

const closeCookieBanner = () => {
  if (!cookieBanner) return;
  cookieBanner.classList.remove("is-visible");
  window.setTimeout(() => {
    cookieBanner.hidden = true;
  }, 240);
};

document.querySelectorAll("[data-cookie-choice]").forEach((button) => {
  button.addEventListener("click", () => {
    localStorage.setItem(cookieKey, button.dataset.cookieChoice);
    closeCookieBanner();
    showToast(
      button.dataset.cookieChoice === "accepted"
        ? "Préférences enregistrées. Aucun outil de mesure n’est connecté dans ce prototype."
        : "Cookies optionnels refusés. Votre choix est enregistré.",
    );
  });
});

openCookieButtons.forEach((button) => button.addEventListener("click", openCookieBanner));

if (!localStorage.getItem(cookieKey)) {
  window.setTimeout(openCookieBanner, 900);
}

document.querySelectorAll("[data-year]").forEach((year) => {
  year.textContent = new Date().getFullYear();
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href");
    if (!targetId || targetId === "#") return;
    const target = document.querySelector(targetId);
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  document.documentElement.classList.add("reduce-motion");
}

const subsidySurvey = document.querySelector("#subsidy-survey");

if (subsidySurvey) {
  const steps = [...subsidySurvey.querySelectorAll("[data-survey-step]")];
  const progressBar = document.querySelector("[data-progress-bar]");
  const stepLabel = document.querySelector("[data-step-label]");
  const backButton = subsidySurvey.querySelector("[data-survey-back]");
  const nextButton = subsidySurvey.querySelector("[data-survey-next]");
  const submitButton = subsidySurvey.querySelector("[data-survey-submit]");
  const errorSummary = subsidySurvey.querySelector("[data-error-summary]");
  const result = document.querySelector("[data-survey-result]");
  let currentStep = 0;

  const clearErrors = () => {
    errorSummary.hidden = true;
    errorSummary.textContent = "";
    subsidySurvey.querySelectorAll(".has-error").forEach((element) => element.classList.remove("has-error"));
    subsidySurvey.querySelectorAll(".field-error").forEach((error) => { error.textContent = ""; });
    subsidySurvey.querySelectorAll('[aria-invalid="true"]').forEach((field) => field.removeAttribute("aria-invalid"));
  };

  const showError = (message, target) => {
    errorSummary.textContent = message;
    errorSummary.hidden = false;
    if (target instanceof HTMLFieldSetElement) target.classList.add("has-error");
    target?.setAttribute("aria-invalid", "true");
    errorSummary.focus();
  };

  const validateStep = () => {
    clearErrors();
    const step = steps[currentStep];
    const group = step.querySelector("fieldset");

    if (group) {
      const firstChoice = group.querySelector("input");
      const selected = group.querySelectorAll("input:checked");
      if (!selected.length) {
        const error = group.querySelector("[data-group-error]");
        const message = "Sélectionnez une réponse avant de continuer.";
        if (error) error.textContent = message;
        showError(message, group);
        firstChoice?.focus();
        return false;
      }
    }

    if (currentStep === steps.length - 1) {
      const club = subsidySurvey.elements.clubName;
      const email = subsidySurvey.elements.email;
      const fields = [
        [club, !club.value.trim() ? "Saisissez le nom du club." : ""],
        [email, !email.value.trim() ? "Saisissez une adresse email." : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim()) ? "Saisissez une adresse email valide." : ""],
      ];
      const invalid = fields.find(([, message]) => message);
      fields.forEach(([field, message]) => {
        const error = subsidySurvey.querySelector(`[data-error-for="${field.id}"]`);
        field.closest(".form-field")?.classList.toggle("has-error", Boolean(message));
        field.setAttribute("aria-invalid", String(Boolean(message)));
        if (error) error.textContent = message;
      });
      if (invalid) {
        showError(invalid[1], invalid[0]);
        invalid[0].focus();
        return false;
      }
    }
    return true;
  };

  const displayStep = (index) => {
    currentStep = Math.max(0, Math.min(index, steps.length - 1));
    steps.forEach((step, stepIndex) => {
      const active = stepIndex === currentStep;
      step.hidden = !active;
      step.classList.toggle("is-active", active);
    });
    clearErrors();
    progressBar.style.width = `${((currentStep + 1) / steps.length) * 100}%`;
    stepLabel.textContent = `Étape ${currentStep + 1} sur ${steps.length}`;
    backButton.hidden = currentStep === 0;
    nextButton.hidden = currentStep === steps.length - 1;
    submitButton.hidden = currentStep !== steps.length - 1;
    steps[currentStep].querySelector("input")?.focus({ preventScroll: true });
  };

  subsidySurvey.querySelectorAll('input[name="financeurs"]').forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      const choices = [...subsidySurvey.querySelectorAll('input[name="financeurs"]')];
      if (checkbox.dataset.exclusive !== undefined && checkbox.checked) {
        choices.forEach((choice) => { if (choice !== checkbox) choice.checked = false; });
      } else if (checkbox.checked) {
        const exclusive = choices.find((choice) => choice.dataset.exclusive !== undefined);
        if (exclusive) exclusive.checked = false;
      }
      clearErrors();
    });
  });

  subsidySurvey.querySelectorAll("input").forEach((input) => {
    input.addEventListener("change", clearErrors);
    input.addEventListener("input", () => {
      if (input.getAttribute("aria-invalid") === "true") clearErrors();
    });
  });

  nextButton.addEventListener("click", () => {
    if (validateStep()) displayStep(currentStep + 1);
  });
  backButton.addEventListener("click", () => displayStep(currentStep - 1));

  subsidySurvey.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!validateStep()) return;
    const endpoint = document.querySelector('meta[name="clubpilot-form-endpoint"]')?.content.trim();
    const submitStatus = subsidySurvey.querySelector("[data-submit-status]");

    if (!endpoint) {
      submitStatus.textContent = "Le point de réception Google Sheets doit encore être configuré.";
      return;
    }

    const formData = new FormData(subsidySurvey);
    const financeurs = formData.getAll("financeurs").join(", ");
    formData.delete("financeurs");
    formData.append("financeurs", financeurs);
    const body = new URLSearchParams(formData);

    submitButton.disabled = true;
    submitButton.setAttribute("aria-busy", "true");
    submitStatus.textContent = "Envoi en cours…";

    try {
      // Apps Script répond sur un autre domaine : no-cors permet l'envoi public
      // sans exposer le tableur ni demander de compte Google au répondant.
      await fetch(endpoint, { method: "POST", mode: "no-cors", body });
    } catch {
      submitStatus.textContent = "L’envoi a échoué. Vérifiez votre connexion et réessayez.";
      submitButton.disabled = false;
      submitButton.removeAttribute("aria-busy");
      return;
    }

    const clubName = subsidySurvey.elements.clubName.value.trim();
    const clubResult = document.querySelector("[data-club-result]");
    if (clubResult) clubResult.textContent = `au ${clubName}`;
    subsidySurvey.hidden = true;
    document.querySelector(".survey-meta").hidden = true;
    document.querySelector(".survey-progress").hidden = true;
    result.hidden = false;
    result.focus();
    submitStatus.textContent = "";
    submitButton.disabled = false;
    submitButton.removeAttribute("aria-busy");
  });

  document.querySelector("[data-survey-reset]")?.addEventListener("click", () => {
    result.hidden = true;
    subsidySurvey.hidden = false;
    document.querySelector(".survey-meta").hidden = false;
    document.querySelector(".survey-progress").hidden = false;
    displayStep(0);
  });

  displayStep(0);
}
