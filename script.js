/* =========================================================
   SDG Portfolio — script.js
   Vanilla JS, no build step. Edit the PROJECTS array below
   to change your case studies.
   ========================================================= */

/* ---------- The 17 SDGs ---------- */
const SDGS = [
  "No Poverty", "Zero Hunger", "Good Health & Well-being", "Quality Education",
  "Gender Equality", "Clean Water & Sanitation", "Affordable & Clean Energy",
  "Decent Work & Economic Growth", "Industry, Innovation & Infrastructure",
  "Reduced Inequalities", "Sustainable Cities & Communities",
  "Responsible Consumption & Production", "Climate Action", "Life Below Water",
  "Life on Land", "Peace, Justice & Strong Institutions", "Partnerships for the Goals"
];

/* ---------- Projects ----------
   Every figure here comes from the notebooks and reports in
   github.com/Thuledu/Postgraduate_Projects. Keep it that way.
   mockup: "regression" | "classification" | "nlp" | "bestseller"
   tags:   used by the filter chips
--------------------------------- */
const REPO = "https://github.com/Thuledu/Postgraduate_Projects/tree/main/";
const PROJECTS = [
  {
    id: "medical-costs",
    title: "Predicting Medical Costs",
    subtitle: "Linear Regression · PDAN8411 Part 1",
    sdgs: [3],
    color: "var(--sdg3)",
    tagline: "A linear regression model that forecasts medical insurance charges from patient demographics and lifestyle factors.",
    tags: ["health", "regression"],
    mockup: "regression",
    date: "Apr 2025",
    tools: "Python, scikit-learn, pandas, Seaborn, Jupyter",
    link: REPO + "PDAN8411%20-%20Part%201%3A%20Linear%20Regression",
    objective: "Predict medical aid charges from age, sex, BMI, number of children, smoker status and region, and understand which factors drive cost the most.",
    sdgLens: "SDG 3 includes target 3.8: universal health coverage and financial protection. Knowing what drives medical costs is a step towards fairer, more affordable cover.",
    data: "Medical Cost Personal Dataset (Kaggle): 1,338 records, 6 features, continuous target (charges).",
    steps: ["Checked regression assumptions", "EDA, removed 1 duplicate", "One-hot encoding & scaling", "80/20 train-test split", "Residual & Q-Q diagnostics"],
    results: [
      { stat: "0.81", text: "R² on the test set" },
      { stat: "≈$5,956", text: "RMSE" },
      { stat: "2", text: "strongest drivers: smoker status and age" }
    ],
    limits: "The dataset is from the US, so regions like 'northeast' don't map to South Africa. I recommended mapping to SA provinces or urban/rural areas and validating with local medical aid data."
  },
  {
    id: "lung-cancer",
    title: "Lung Cancer Risk Prediction",
    subtitle: "Classification & Model Improvement · PDAN8411 Part 2",
    sdgs: [3],
    color: "var(--sdg3)",
    tagline: "Comparing Random Forest and KNN to flag lung cancer risk early, tuned for high recall so fewer at-risk patients are missed.",
    tags: ["health", "classification"],
    mockup: "classification",
    date: "May 2025",
    tools: "Python, scikit-learn (Random Forest, KNN), Seaborn",
    link: REPO + "PDAN8411%20-%20Part%202%3A%20Classification%20and%20Model%20Improvement",
    objective: "Build a classification model for a South African medical aid scheme scenario that predicts lung cancer risk from demographics and risk factors.",
    sdgLens: "SDG target 3.4 aims to reduce early deaths from non-communicable diseases like cancer. Early risk flags can support earlier screening.",
    data: "Kaggle Lung Cancer Dataset: 284 records and 15 features. After removing 33 duplicates, 276 rows remained, with an 86/14 class imbalance.",
    steps: ["Removed 33 duplicates", "Encoded features & target", "Ranked feature importance", "Stratified 80/20 split", "Random Forest vs KNN"],
    results: [
      { stat: "97.7%", text: "recall, so very few false negatives" },
      { stat: "0.984", text: "AUC-ROC" },
      { stat: "87.5%", text: "test accuracy (F1 0.925)" }
    ],
    limits: "With only 276 records and a strong class imbalance, the model needs local South African data and resampling (e.g. SMOTE) before anyone could rely on it."
  },
  {
    id: "food-sentiment",
    title: "Food Review Sentiment with LSTMs",
    subtitle: "NLP with a Recurrent Neural Network · PDAN8412 Part 1",
    sdgs: [12],
    color: "var(--sdg12)",
    tagline: "An LSTM neural network that reads consumer food reviews and classifies them as positive or negative, built on around 568,000 reviews.",
    tags: ["nlp"],
    mockup: "nlp",
    date: "Sep 2025",
    tools: "TensorFlow/Keras, PySpark, NLTK, scikit-learn",
    link: REPO + "PDAN8412%20-%20Part%201%3A%20Natural%20Language%20Processing%20Using%20A%20Recurrent%20Neural%20Network%20With%20LSTMs",
    objective: "Use a sequential deep learning model to understand the sentiment of customer reviews at scale, where word order matters ('not great' vs 'great').",
    sdgLens: "SDG 12 is about responsible consumption. Understanding customer sentiment at scale can help producers find product problems early.",
    data: "Amazon Fine Food Reviews (Kaggle): about 568,000 reviews, mostly positive (about 63.9% are 5-star).",
    steps: ["PySpark text cleaning", "Tokenising & stopwords", "Sequence padding", "LSTM with dropout", "Class weights for imbalance"],
    results: [
      { stat: "568k", text: "reviews processed with PySpark" },
      { stat: "LSTM", text: "RNN with dropout layers (0.2–0.5)" },
      { stat: "1", text: "key lesson: imbalance hides weak negative-class recall" }
    ],
    limits: "The model was much better at spotting positive reviews than negative ones, and sarcasm was hard. Next I'd use GloVe embeddings, resampling, or try GRU and Transformer models."
  },
  {
    id: "kindle-bestsellers",
    title: "Kindle Best-Seller Prediction",
    subtitle: "Logistic Regression · PDAN8412 Part 2",
    sdgs: [4],
    color: "var(--sdg4)",
    tagline: "Feature engineering on review data to predict which books become best-sellers, benchmarking Logistic Regression against tree-based models.",
    tags: ["classification"],
    mockup: "bestseller",
    date: "Oct 2025",
    tools: "Python, scikit-learn, pandas, XGBoost",
    link: REPO + "PDAN8412%20-%20Part%202%3A%20Logistic%20Regression",
    objective: "Predict whether a book is likely to be a best-seller using engineered, review-based features, and find the best model for the job.",
    sdgLens: "SDG 4 promotes lifelong learning. The same approach could help libraries and schools surface books that readers find most helpful.",
    data: "Amazon Kindle Books Dataset 2023, aggregated to per-book features: review count, average score, helpful ratio and average review length.",
    steps: ["Median imputation", "One-hot & ordinal encoding", "Per-book feature engineering", "Grid-search tuning", "LogReg vs RF vs XGBoost"],
    results: [
      { stat: "0.92", text: "ROC-AUC with XGBoost (best model)" },
      { stat: "0.88", text: "F1-score with XGBoost" },
      { stat: "≈77%", text: "Logistic Regression baseline accuracy" }
    ],
    limits: "The logistic regression baseline struggled with the minority (best-seller) class, which is why I compared it with non-linear models. Review-based features may also favour popular genres."
  }
];

/* ---------- Experience ---------- */
const JOBS = [
  {
    role: "Graduate Software Developer", org: "MTN", when: "Sep 2025 – Present", where: "Roodepoort, Gauteng",
    sdg: 9, lens: "Digital infrastructure",
    points: [
      "Build backend APIs and microservices in TypeScript and Node.js for enterprise applications",
      "Deliver features in a 15-person team using Git-based workflows, Agile/Scrum and Azure DevOps",
      "Validate audit data, scripts and KPI definitions to strengthen data quality and audit readiness"
    ]
  },
  {
    role: "Data Analyst Graduate (Group Internal Audit)", org: "FirstRand Corporate Centre", when: "Jul 2025 – Aug 2025", where: "Sandton, Gauteng",
    sdg: 16, lens: "Accountable institutions",
    points: [
      "Supported database and data-processing work, including script consolidation and workflow automation",
      "Applied structured data analysis in a financial-services audit environment"
    ]
  },
  {
    role: "SAP Ariba Procurement Functional Analyst", org: "Bayajula Services", when: "Jul 2023 – Jun 2025", where: "Centurion, Gauteng",
    sdg: 12, lens: "Procurement & supply chains",
    points: [
      "Worked across full-lifecycle SAP Ariba implementations, from requirements to go-live and optimisation",
      "Translated business requirements into system configurations and improved supplier onboarding",
      "Produced documentation and delivered user training to support adoption"
    ]
  }
];

/* ---------- Helpers ---------- */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const sdgVar = n => `var(--sdg${n})`;
const MY_GOALS = new Set([...PROJECTS.flatMap(p => p.sdgs), ...JOBS.map(j => j.sdg), 6, 13]); // 6 = water concept, 13 = Carbon & ESG certificate

/* ---------- Year ---------- */
$("#year").textContent = new Date().getFullYear();

/* ---------- Nav ---------- */
const nav = $(".nav");
const toggle = $(".nav__toggle");
const links = $("#nav-links");
toggle.addEventListener("click", () => {
  const open = toggle.getAttribute("aria-expanded") === "true";
  toggle.setAttribute("aria-expanded", String(!open));
  links.classList.toggle("is-open", !open);
});
links.addEventListener("click", e => {
  if (e.target.tagName === "A") { toggle.setAttribute("aria-expanded", "false"); links.classList.remove("is-open"); }
});
window.addEventListener("scroll", () => nav.classList.toggle("is-scrolled", scrollY > 10), { passive: true });

/* ---------- Hero: rotating word ---------- */
const words = [
  { w: "people", c: "var(--sdg5)" },
  { w: "health", c: "var(--sdg3)" },
  { w: "clean water", c: "var(--sdg6)" },
  { w: "communities", c: "var(--sdg11)" },
  { w: "learners", c: "var(--sdg4)" }
];
const rot = $("#rotator");
const rotWrap = $(".hero__rotator");
let wi = 0;
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
if (!reduceMotion) {
  setInterval(() => {
    rot.classList.add("is-out");
    setTimeout(() => {
      wi = (wi + 1) % words.length;
      rot.textContent = words[wi].w;
      rotWrap.style.color = words[wi].c;
      rot.classList.remove("is-out");
    }, 300);
  }, 2400);
}

/* ---------- Hero: SDG wheel ---------- */
const wheel = $("#sdgWheel");
SDGS.forEach((_, i) => {
  const seg = document.createElement("div");
  seg.className = "sdg-wheel__seg";
  seg.style.transform = `rotate(${(360 / 17) * i}deg)`;
  seg.innerHTML = `<i style="background:${sdgVar(i + 1)}"></i>`;
  wheel.appendChild(seg);
});

/* ---------- Count-up stats ---------- */
const countUp = el => {
  const target = +el.dataset.count;
  const suf = el.dataset.suffix || "";
  if (reduceMotion) { el.textContent = target + suf; return; }
  const start = performance.now();
  const dur = 1400;
  const tick = now => {
    const p = Math.min((now - start) / dur, 1);
    el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3))) + suf;
    if (p < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
};

/* ---------- Goals strip ---------- */
const goalsGrid = $("#goalsGrid");
SDGS.forEach((name, i) => {
  const n = i + 1;
  const li = document.createElement("li");
  li.className = "goal" + (MY_GOALS.has(n) ? " is-mine" : "");
  li.style.background = sdgVar(n);
  li.tabIndex = 0;
  li.setAttribute("aria-label", `Goal ${n}: ${name}${MY_GOALS.has(n) ? " — featured in my work" : ""}`);
  li.innerHTML = `${n}<span class="goal__tip" aria-hidden="true">${n}. ${name}</span>`;
  goalsGrid.appendChild(li);
});

/* ---------- Card visuals (pure CSS/SVG, no image files) ---------- */
const bars = hs => `<div class="chart-ui">${hs.map(h => `<span style="height:${h}%"></span>`).join("")}</div>`;
const MOCKUPS = {
  regression: () => `
    <div class="nb">
      <div class="nb__bar"><i></i><i></i><i></i><span>medical_costs.ipynb</span></div>
      <div class="nb__body">
        <svg viewBox="0 0 200 110" class="scatter" aria-hidden="true">
          ${Array.from({length: 38}, (_, i) => { const x = 8 + i * 5; const y = 100 - i * 2.2 - ((i * 37) % 23); return `<circle cx="${x}" cy="${Math.max(8, y)}" r="2.6"/>`; }).join("")}
          <line x1="6" y1="104" x2="196" y2="18"/>
        </svg>
        <code>R² = 0.81</code>
      </div>
    </div>`,
  classification: () => `
    <div class="nb">
      <div class="nb__bar"><i></i><i></i><i></i><span>lung_cancer.ipynb</span></div>
      <div class="nb__body nb__body--split">
        <div class="cm" aria-hidden="true"><b>TN</b><b class="fp">FP</b><b class="fn">FN</b><b>TP</b></div>
        <div class="metrics"><span>Recall<em>0.977</em></span><span>AUC<em>0.984</em></span><span>F1<em>0.925</em></span></div>
      </div>
    </div>`,
  nlp: () => `
    <div class="nb">
      <div class="nb__bar"><i></i><i></i><i></i><span>sentiment_lstm.ipynb</span></div>
      <div class="nb__body">
        <div class="review pos">"Great product, would buy again" <b>+</b></div>
        <div class="review neg">"Not great, arrived stale" <b>−</b></div>
        <div class="lstm"><span>Embedding</span>→<span>LSTM</span>→<span>Dropout</span>→<span>Dense</span></div>
      </div>
    </div>`,
  bestseller: () => `
    <div class="nb">
      <div class="nb__bar"><i></i><i></i><i></i><span>kindle_bestsellers.ipynb</span></div>
      <div class="nb__body">
        <div class="compare">
          <div><span>LogReg</span><i style="width:77%"></i></div>
          <div><span>XGBoost</span><i style="width:92%"></i></div>
        </div>
        ${bars([30, 45, 38, 60, 52, 75, 68, 88])}
      </div>
    </div>`
};

/* ---------- Project cards ---------- */
const projectsEl = $("#projects");
PROJECTS.forEach((p, idx) => {
  const btn = document.createElement("button");
  btn.className = "project reveal";
  btn.style.setProperty("--c", p.color);
  btn.dataset.tags = p.tags.join(" ");
  btn.setAttribute("aria-label", `Open project: ${p.title}`);
  btn.innerHTML = `
    <div class="project__media">
      <span class="project__badge">${p.sdgs.map(n => `<b style="background:${sdgVar(n)}">${n}</b>`).join("")} ${SDGS[p.sdgs[0] - 1]}</span>
      ${MOCKUPS[p.mockup]()}
    </div>
    <div class="project__body">
      <h3>${p.title}</h3>
      <p>${p.tagline}</p>
      <div class="project__meta"><span>${p.subtitle.split(" · ")[0]} · ${p.date}</span><span class="arrow">Read more →</span></div>
    </div>`;
  btn.addEventListener("click", () => openCase(idx));
  projectsEl.appendChild(btn);
});

/* ---------- Filters ---------- */
$$(".chip").forEach(chip => chip.addEventListener("click", () => {
  $$(".chip").forEach(c => { c.classList.remove("is-active"); c.setAttribute("aria-pressed", "false"); });
  chip.classList.add("is-active");
  chip.setAttribute("aria-pressed", "true");
  const f = chip.dataset.filter;
  $$(".project").forEach(card => card.classList.toggle("is-hidden", f !== "all" && !card.dataset.tags.includes(f)));
}));

/* ---------- Case study dialog ---------- */
const dialog = $("#caseDialog");
const body = $("#caseBody");
let current = 0;
let lastFocus = null;

function caseHTML(p, i) {
  const prev = PROJECTS[(i - 1 + PROJECTS.length) % PROJECTS.length];
  const next = PROJECTS[(i + 1) % PROJECTS.length];
  return `
  <header class="case__hero">
    <p class="eyebrow">${p.sdgs.map(n => `SDG ${n} · ${SDGS[n - 1]}`).join("  ·  ")}</p>
    <h2 id="caseTitle">${p.title}</h2>
    <p>${p.tagline}</p>
    <dl class="case__facts">
      <div><dt>Module</dt><dd>${p.subtitle.split(" · ")[1]}</dd></div>
      <div><dt>Date</dt><dd>${p.date}</dd></div>
      <div><dt>Tools</dt><dd>${p.tools}</dd></div>
      <div><dt>Type</dt><dd>Postgraduate project</dd></div>
    </dl>
  </header>
  <div class="case__content">
    <section><h3><small>01</small>Objective</h3><p>${p.objective}</p><p class="hmw">${p.sdgLens}</p></section>
    <section><h3><small>02</small>The data</h3><p>${p.data}</p></section>
    <section><h3><small>03</small>Approach</h3><ol class="flow">${p.steps.map(s => `<li>${s}</li>`).join("")}</ol></section>
    <section><h3><small>04</small>Results</h3>
      <div class="results">${p.results.map(r => `<div class="result"><b>${r.stat}</b><span>${r.text}</span></div>`).join("")}</div></section>
    <section><h3><small>05</small>Limitations &amp; next steps</h3><p>${p.limits}</p></section>
    <p><a class="btn" href="${p.link}" target="_blank" rel="noopener">View code &amp; report on GitHub</a></p>
    <nav class="case__nav" aria-label="Projects">
      <button data-go="${(i - 1 + PROJECTS.length) % PROJECTS.length}">← ${prev.title}</button>
      <button data-go="${(i + 1) % PROJECTS.length}">${next.title} →</button>
    </nav>
  </div>`;
}

function openCase(i) {
  current = i;
  const p = PROJECTS[i];
  dialog.style.setProperty("--c", p.color);
  body.innerHTML = caseHTML(p, i);
  if (!dialog.open) { lastFocus = document.activeElement; dialog.showModal(); }
  dialog.scrollTop = 0;
  history.replaceState(null, "", `#case-${p.id}`);
  $("#caseClose").focus();
}
function closeCase() {
  dialog.close();
}
dialog.addEventListener("close", () => {
  history.replaceState(null, "", location.pathname + "#work");
  lastFocus?.focus();
});
$("#caseClose").addEventListener("click", closeCase);
dialog.addEventListener("click", e => {
  if (e.target === dialog) closeCase();                    // click on backdrop
  const go = e.target.closest("[data-go]");
  if (go) openCase(+go.dataset.go);
});

// Deep-link support: index.html#case-foodloop opens that study
const deep = location.hash.match(/^#case-(.+)$/);
if (deep) {
  const idx = PROJECTS.findIndex(p => p.id === deep[1]);
  if (idx > -1) openCase(idx);
}

/* ---------- Experience ---------- */
const jobsEl = $("#jobs");
JOBS.forEach(j => {
  const li = document.createElement("li");
  li.className = "job reveal";
  li.style.setProperty("--c", sdgVar(j.sdg));
  li.innerHTML = `
    <div class="job__head">
      <div><h3>${j.role}</h3><p class="job__org">${j.org} · ${j.where}</p></div>
      <span class="job__when">${j.when}</span>
    </div>
    <ul>${j.points.map(x => `<li>${x}</li>`).join("")}</ul>
    <span class="job__sdg"><b>${j.sdg}</b> SDG lens: ${j.lens}</span>`;
  jobsEl.appendChild(li);
});

/* ---------- Reveal on scroll ---------- */
$$(".section__head, .process__step, .about__text, .contact__card, .concept__text, .source").forEach(el => el.classList.add("reveal"));
const io = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (!en.isIntersecting) return;
    en.target.classList.add("is-visible");
    io.unobserve(en.target);
  });
}, { threshold: 0.15 });
$$(".reveal").forEach(el => io.observe(el));

const statsObs = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (!en.isIntersecting) return;
    $$("[data-count]", en.target).forEach(countUp);
    statsObs.disconnect();
  });
});
statsObs.observe($(".hero__stats"));
