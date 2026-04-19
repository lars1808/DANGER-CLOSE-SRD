// Squad scratchpad — 5 troopers, persisted in localStorage.
(function () {
  const KEY = "dcsrd.squad.v1";
  const defaults = () => Array.from({ length: 5 }, (_, i) => ({
    name: `Trooper ${i + 1}`,
    status: "OK",
    grit: 1,
    ammo: 3,
  }));

  const STATUSES = ["OK", "Grazed", "Wounded", "Bleeding", "Dead"];
  const statusClass = (s) => "status-" + s.toLowerCase().split(" ")[0];

  function load() {
    try {
      const raw = JSON.parse(localStorage.getItem(KEY));
      if (Array.isArray(raw) && raw.length === 5) return raw;
    } catch {}
    return defaults();
  }
  function save(list) { localStorage.setItem(KEY, JSON.stringify(list)); }

  window.initSquadPad = function initSquadPad(root) {
    let state = load();

    function render() {
      root.innerHTML = "";
      state.forEach((t, idx) => {
        const el = document.createElement("div");
        el.className = "trooper " + statusClass(t.status);
        el.innerHTML = `
          <div class="tr-name">
            <input type="text" data-f="name" value="${(t.name || "").replace(/"/g, "&quot;")}" />
          </div>
          <div class="tr-row">
            <label>Status <select data-f="status">${STATUSES.map(s => `<option${s===t.status?" selected":""}>${s}</option>`).join("")}</select></label>
            <label>Grit <input type="number" data-f="grit" min="0" max="3" value="${t.grit}" /></label>
            <label>Ammo <input type="number" data-f="ammo" min="0" max="9" value="${t.ammo}" /></label>
          </div>`;
        el.querySelectorAll("[data-f]").forEach(input => {
          input.addEventListener("input", () => {
            const f = input.getAttribute("data-f");
            let v = input.value;
            if (f === "grit" || f === "ammo") v = Math.max(0, Math.min(9, +v || 0));
            state[idx][f] = v;
            save(state);
            if (f === "status") render();
          });
        });
        root.appendChild(el);
      });

      const actions = document.createElement("div");
      actions.className = "pad-actions";
      actions.innerHTML = `
        <button data-a="heal">Heal All</button>
        <button data-a="reset">Reset</button>`;
      actions.querySelector('[data-a="heal"]').onclick = () => {
        state = state.map(t => ({ ...t, status: t.status === "Dead" ? "Dead" : "OK", grit: Math.min(3, t.grit + 1), ammo: 3 }));
        save(state); render();
      };
      actions.querySelector('[data-a="reset"]').onclick = () => {
        if (confirm("Reset the squad?")) { state = defaults(); save(state); render(); }
      };
      root.appendChild(actions);
    }
    render();
  };
})();
