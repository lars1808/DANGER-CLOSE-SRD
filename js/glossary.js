// Glossary of key terms for DANGER CLOSE SRD.
// Keys are canonical names (case-insensitive match). Aliases list alternate forms [[Trooper|Troopers]] handles.
// Each entry: def (short definition), xref (related terms), chapter (slug) and anchor (heading slug).

window.GLOSSARY = {
  "Squad": {
    def: "A unit of 5 Troopers under the player's command. The core tactical element of DANGER CLOSE.",
    xref: ["Trooper", "Mission"],
    chapter: "the-squad"
  },
  "Trooper": {
    def: "A single soldier. Has Status, Gear, Grit, Ammo, and Mobility. Five of them make a Squad.",
    xref: ["Squad", "Status", "Grit", "Ammo", "Mobility"],
    chapter: "the-squad"
  },
  "Status": {
    def: "A Trooper's health track: OK → Grazed → Wounded → Bleeding Out → Dead.",
    xref: ["Injury", "Trooper"],
    chapter: "exchange",
    anchor: "injury"
  },
  "Gear": {
    def: "A Trooper's equipped Armor and Weapon. Can be default issue or specialized.",
    xref: ["Armor", "Weapon"],
    chapter: "equipment-and-gear"
  },
  "Armor": {
    def: "Light, Medium or Heavy. Modifies final DEF result and carries a Mobility cost.",
    xref: ["Defense Roll", "Mobility"],
    chapter: "equipment-and-gear",
    anchor: "armor"
  },
  "Weapon": {
    def: "Carbine, Assault Rifle, Marksman Rifle, or a Special Weapon (LMG, Plasma Rifle, Sniper, etc.)",
    xref: ["Gear"],
    chapter: "equipment-and-gear",
    anchor: "weapon-properties"
  },
  "Grit": {
    def: "Expendable resource. Spend once per Mission to re-roll a Movement or Defensive Roll. Survivors gain +1 Grit after a mission (max 3).",
    xref: ["Mobility Check", "Defense Roll"],
    chapter: "the-squad"
  },
  "Ammo": {
    def: "Abstracted munitions. Troopers start with 3 (max 3). Spend to boost attacks or fire Special Weapons.",
    xref: ["Trooper"],
    chapter: "the-squad"
  },
  "Mobility": {
    def: "Base 5, reduced by armor/gear. Target number for all Mobility Checks (roll 1d6 equal or under).",
    xref: ["Mobility Check", "Armor"],
    chapter: "equipment-and-gear",
    anchor: "mobility"
  },
  "Mobility Check": {
    def: "Roll 1d6 equal or under the Trooper's Mobility to succeed. Being wounded imposes −1.",
    xref: ["Mobility", "Grit"],
    chapter: "equipment-and-gear",
    anchor: "mobility"
  },
  "Mission": {
    def: "An effort to achieve one or more Objectives across multiple Sectors, starting at an LZ.",
    xref: ["Objective", "Sector", "Threat Level"],
    chapter: "the-mission"
  },
  "Objective": {
    def: "What the mission is for: Seize & Secure, Hit & Run, Free Roam, or Defensive.",
    xref: ["Mission"],
    chapter: "the-mission",
    anchor: "mission-objective"
  },
  "Sector": {
    def: "A distinct location visited during a mission. Defined by Cover, Space and Threat Level.",
    xref: ["Cover", "Space", "Threat Level"],
    chapter: "the-mission",
    anchor: "sectors"
  },
  "Cover": {
    def: "How much physical protection a Sector offers. 0 — Exposed, 1 — Normal, 2 — Dense. Limits how many Troopers can be Fortified.",
    xref: ["Space", "Sector"],
    chapter: "the-mission",
    anchor: "cover"
  },
  "Space": {
    def: "How open a Sector is. 0 — Tight, 1 — Transitional, 2 — Open. Limits how many Troopers can Flank.",
    xref: ["Cover", "Sector"],
    chapter: "the-mission",
    anchor: "space"
  },
  "Threat Level": {
    def: "The strength of enemy forces, 1 (Light) to 4 (Overwhelming). Drives injury severity and Enemy Tactics.",
    xref: ["Mission", "Sector"],
    chapter: "the-mission",
    anchor: "difficulty"
  },
  "Mission Phase": {
    def: "Moving between Sectors: Advance!, Retreat!, Catch Breath, Infiltrate.",
    xref: ["Advance Roll", "Sector"],
    chapter: "mission-phase"
  },
  "Advance Roll": {
    def: "2d6 + modifiers when entering a threatened Sector. Determines starting Momentum and Defensive Positions.",
    xref: ["Mission Phase", "Momentum"],
    chapter: "mission-phase",
    anchor: "advance-roll"
  },
  "Engagement": {
    def: "A zoomed-in firefight to clear a Sector. Played out in Exchanges until VICTORY or DEFEAT.",
    xref: ["Exchange", "Momentum"],
    chapter: "engagement"
  },
  "Exchange": {
    def: "One round of an Engagement: Intent → Offense Roll → Defense Roll → Momentum → Enemy Tactics.",
    xref: ["Engagement", "Offense Roll", "Defense Roll"],
    chapter: "exchange"
  },
  "Momentum": {
    def: "The Squad's control of the battlefield. Track: DEFEAT, FALTERING, LOSING GROUND, CONTESTED, GAINING GROUND, BREAKING THROUGH, VICTORY.",
    xref: ["Engagement", "Offense Roll"],
    chapter: "engagement",
    anchor: "momentum"
  },
  "Offense Roll": {
    def: "Pool all ATK from Firing Troopers, roll d6, take highest. 6 = Success, 4–5 = Hold or Success at a Cost, ≤3 = Pushed Back.",
    xref: ["Exchange", "Momentum"],
    chapter: "exchange",
    anchor: "offense-roll"
  },
  "Defense Roll": {
    def: "Each Trooper rolls DEF d6 and takes highest. Armor modifies result. Outcome depends on Defensive Position.",
    xref: ["Exchange", "Injury", "Armor"],
    chapter: "exchange",
    anchor: "defense-roll"
  },
  "Injury": {
    def: "Moves the Trooper one step down the Status track. Severity scales with Threat Level.",
    xref: ["Status", "Trooper"],
    chapter: "exchange",
    anchor: "injury"
  },
  "Hard Target": {
    def: "Tanks, gun nests, brutes. Fired on in a separate dice pool. 6 = Hit, 4–5 = Hit at a Cost.",
    xref: ["Offense Roll"],
    chapter: "hard-targets"
  },
  "Oracle Dice": {
    def: "Roll 1d6 for a 50/50 question. 2d6 keep lowest for Unlikely, 2d6 keep highest for Likely.",
    xref: [],
    chapter: "introduction",
    anchor: "oracle-dice"
  }
};

// Aliases — alternate forms that map to a canonical glossary key.
window.GLOSSARY_ALIASES = {
  "troopers": "Trooper",
  "squads": "Squad",
  "sectors": "Sector",
  "engagements": "Engagement",
  "exchanges": "Exchange",
  "objectives": "Objective",
  "missions": "Mission",
  "hard targets": "Hard Target",
  "oracle die": "Oracle Dice",
  "mobility checks": "Mobility Check",
  "advance rolls": "Advance Roll",
  "offense rolls": "Offense Roll",
  "defense rolls": "Defense Roll",
  "injuries": "Injury"
};
