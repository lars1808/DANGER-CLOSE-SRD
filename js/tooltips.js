// Tooltip logic for [[Term]] spans.
(function () {
  const normalize = (s) => String(s).toLowerCase().trim();

  function resolve(term) {
    const g = window.GLOSSARY || {};
    const a = window.GLOSSARY_ALIASES || {};
    if (g[term]) return { key: term, entry: g[term] };
    const lower = normalize(term);
    // direct case-insensitive
    for (const k of Object.keys(g)) if (normalize(k) === lower) return { key: k, entry: g[k] };
    // alias
    if (a[lower]) { const k = a[lower]; return { key: k, entry: g[k] }; }
    return null;
  }

  window.resolveTerm = resolve;

  let current = null;
  function closeTip() {
    if (current) { current.remove(); current = null; }
    document.querySelectorAll('.term[data-open="1"]').forEach(el => el.removeAttribute("data-open"));
  }

  function openTip(el) {
    closeTip();
    const term = el.getAttribute("data-term");
    const found = resolve(term);
    const pop = document.createElement("div");
    pop.className = "tip-pop";

    if (!found) {
      pop.innerHTML = `
        <div class="tip-title">Undefined Term</div>
        <div class="tip-name">${term}</div>
        <div class="tip-def">This term isn't in the glossary yet.</div>`;
      el.classList.add("unknown");
    } else {
      const { key, entry } = found;
      const xref = (entry.xref || []).map(t => `<a href="#" data-xref="${t}">${t}</a>`).join("");
      const jump = entry.chapter
        ? `<a class="tip-go" href="#${entry.chapter}${entry.anchor ? "/" + entry.anchor : ""}">Jump to section →</a>`
        : "";
      pop.innerHTML = `
        <div class="tip-title">Key Term</div>
        <div class="tip-name">${key}</div>
        <div class="tip-def">${entry.def}</div>
        ${xref ? `<div class="tip-xref"><span class="xlabel">Related</span>${xref}</div>` : ""}
        ${jump}`;
    }

    document.body.appendChild(pop);
    positionTip(pop, el);
    el.setAttribute("data-open", "1");
    current = pop;

    pop.querySelectorAll("[data-xref]").forEach(a => {
      a.addEventListener("click", (e) => {
        e.preventDefault();
        const t = a.getAttribute("data-xref");
        const fake = document.createElement("span");
        fake.setAttribute("data-term", t);
        fake.className = "term";
        // reuse position of original el
        el.parentNode.insertBefore(fake, el);
        // position relative to original anchor
        openTip(el);
        // but update pop to new term
        setTimeout(() => {
          const f2 = resolve(t);
          if (!f2) return;
          const { key, entry } = f2;
          current.querySelector(".tip-name").textContent = key;
          current.querySelector(".tip-def").textContent = entry.def;
          const xr = current.querySelector(".tip-xref");
          if (xr) {
            xr.innerHTML = `<span class="xlabel">Related</span>` + (entry.xref || []).map(x => `<a href="#" data-xref="${x}">${x}</a>`).join("");
            xr.querySelectorAll("[data-xref]").forEach(a2 => a2.addEventListener("click", (ev)=>{ev.preventDefault(); a2.click && a2.click(); }));
          }
          const go = current.querySelector(".tip-go");
          if (go && entry.chapter) go.setAttribute("href", `#${entry.chapter}${entry.anchor ? "/" + entry.anchor : ""}`);
        }, 0);
        fake.remove();
      });
    });

    pop.querySelector(".tip-go")?.addEventListener("click", () => closeTip());
  }

  function positionTip(pop, el) {
    const r = el.getBoundingClientRect();
    const popR = pop.getBoundingClientRect();
    const margin = 8;
    let left = r.left + window.scrollX + (r.width / 2) - (popR.width / 2);
    left = Math.max(margin, Math.min(left, window.innerWidth - popR.width - margin));
    let top = r.bottom + window.scrollY + 6;
    if (r.bottom + popR.height + 20 > window.innerHeight) {
      top = r.top + window.scrollY - popR.height - 6;
    }
    pop.style.left = left + "px";
    pop.style.top = top + "px";
  }

  window.initTooltips = function (root) {
    root.addEventListener("click", (e) => {
      const t = e.target.closest(".term");
      if (t) {
        e.stopPropagation();
        if (current && t.getAttribute("data-open") === "1") closeTip();
        else openTip(t);
        return;
      }
      if (!e.target.closest(".tip-pop")) closeTip();
    });
    // Hover on desktop
    if (window.matchMedia("(hover: hover)").matches) {
      root.addEventListener("mouseover", (e) => {
        const t = e.target.closest(".term");
        if (t && current === null) openTip(t);
      });
      root.addEventListener("mouseout", (e) => {
        const t = e.target.closest(".term");
        if (!t) return;
        // Delay close to allow moving into tooltip
        setTimeout(() => {
          if (!current) return;
          if (current.matches(":hover") || t.matches(":hover")) return;
          closeTip();
        }, 150);
      });
    }

    document.addEventListener("click", (e) => {
      if (!e.target.closest(".tip-pop") && !e.target.closest(".term")) closeTip();
    });
    window.addEventListener("scroll", closeTip, { passive: true });
    window.addEventListener("resize", closeTip);
  };

  window.closeTooltip = closeTip;
})();
