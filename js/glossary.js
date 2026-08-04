// Glossary of key terms for DANGER CLOSE SRD.
// Keys are canonical names (case-insensitive match). Aliases list alternate forms [[Trooper|Troopers]] handles.
// Each entry: def (short definition), xref (related terms), chapter (slug) and anchor (heading slug).

window.GLOSSARY = {
  "Squad": {
    def: "A unit of 5 Troopers under the player's command. The core tactical element of DANGER CLOSE.",
    xref: ["Trooper", "Mission", "Sergeant"],
    chapter: "the-squad"
  },
  "Trooper": {
    def: "A single soldier. Has Gear, Grit, Ammo, Mobility, Injuries, and a Tag. Five of them make a Squad.",
    xref: ["Squad", "Grit", "Ammo", "Mobility", "Injury", "Tags"],
    chapter: "the-squad"
  },
  "Sergeant": {
    def: "One Trooper designated as the Squad's leader. Spend 1 Grit to nullify an Enemy Tactic. Cannot do this while Bleeding Out or Suppressed.",
    xref: ["Squad", "Grit", "Enemy Tactics"],
    chapter: "the-squad",
    anchor: "the-sergeant"
  },
  "Grit": {
    def: "Expendable resource. Spend 1 to reroll a Mobility Check, one d6 of a Defense Roll, or a Death Save. Troopers start with 1 Grit (capacity 1); capacity rises by 1 per mission survived, up to a max of 3, and refills between missions. Recovered in the field when a Hard Target goes down or the Offense Roll runs hot past the Momentum cap.",
    xref: ["Mobility Check", "Defense Roll", "Death Save", "Hard Target", "Offense Roll"],
    chapter: "the-squad",
    anchor: "grit"
  },
  "Ammo": {
    def: "Abstracted munitions. Troopers start with 3 (max 3). Spend to fire Special Weapons, add +1 ATK, declare Assault Posture, or Pour It On.",
    xref: ["Trooper", "ATK", "Assault Posture", "Pour It On"],
    chapter: "the-squad",
    anchor: "ammo"
  },
  "Mobility": {
    def: "Base 4, lowered by selected armor, weapons and gear. Target number for all Mobility Checks (roll 1d6 equal or under). Each 2 Injuries lower Mobility by 1. Also sets the Flanking Bonus.",
    xref: ["Mobility Check", "Armor", "Flanking Bonus", "Injury"],
    chapter: "equipment-and-gear",
    anchor: "mobility"
  },
  "Mobility Check": {
    def: "Roll 1d6 equal or under the Trooper's Mobility to succeed. A Trooper at Mobility 0 automatically fails.",
    xref: ["Mobility", "Grit"],
    chapter: "equipment-and-gear",
    anchor: "mobility"
  },
  "Flanking Bonus": {
    def: "ATK bonus when Flanking, set by Mobility: +1 at Mobility 0-3, +2 at Mobility 4, +3 at Mobility 5.",
    xref: ["Mobility", "Flanking", "Fire"],
    chapter: "equipment-and-gear",
    anchor: "mobility"
  },
  "Tags": {
    def: "A Trooper's personality descriptor: Forceful, Technical, Steady, or Sharp. Answers the Skill question in a Trooper Roll and guides roleplay outside a firefight.",
    xref: ["Trooper", "Trooper Roll"],
    chapter: "the-squad",
    anchor: "tags"
  },
  "Injury": {
    def: "Troopers have no hit points. Each hit that calls for one adds Injuries to a running tally, and the tally sets the odds the next hit puts the Trooper down. Each 2 Injuries lower Mobility by 1. A hit that could plausibly kill outright also calls for a Death Save.",
    xref: ["Death Save", "Bleeding Out", "Mobility", "Trooper"],
    chapter: "exchange",
    anchor: "injury--death"
  },
  "Death Save": {
    def: "Roll 1d6 against a Trooper's current Injury tally. A result greater than the tally means the Trooper stays in the fight; a 6 always holds. Otherwise the Trooper is Bleeding Out. Called for whenever the source of Injury could plausibly kill outright; lighter sources raise the tally without a roll.",
    xref: ["Injury", "Bleeding Out", "Grit"],
    chapter: "exchange",
    anchor: "injuries--the-death-save"
  },
  "Bleeding Out": {
    def: "A Trooper who failed a Death Save. Cannot take actions and dies at the end of the next Exchange unless Stabilized. May instead declare a Last Stand.",
    xref: ["Death Save", "Stabilized", "Last Stand", "Dead"],
    chapter: "exchange",
    anchor: "bleeding-out--stabilize"
  },
  "Stabilized": {
    def: "A Bleeding Out Trooper who was aided by an Interact. Out of the fight and out of danger: takes no actions and isn't targeted by normal enemy fire. Returns to the fight with Injuries intact once the Engagement ends.",
    xref: ["Bleeding Out", "Interact"],
    chapter: "exchange",
    anchor: "bleeding-out--stabilize"
  },
  "Dead": {
    def: "KIA. Occurs when a Bleeding Out Trooper isn't Stabilized in time, when a Bleeding Out or Stabilized Trooper is hit by something big in the fiction, or when the Engagement is lost while they're out of action. Permanently removed from the Squad.",
    xref: ["Bleeding Out", "Stabilized"],
    chapter: "exchange",
    anchor: "death"
  },
  "Last Stand": {
    def: "A Bleeding Out Trooper goes out fighting instead of waiting for help. Declared the moment it happens; they die after acting. Choose +4 ATK to this Exchange's Offense Roll, or an immediate Squad Disengage with no Injury rolls for anyone, including Troopers who already failed one.",
    xref: ["Bleeding Out", "Offense Roll", "Disengage"],
    chapter: "exchange",
    anchor: "last-stand"
  },
  "Suppressed": {
    def: "Chosen instead of taking Injuries on a failed Defense Roll, if not already Suppressed. A Flanked Trooper cannot go Suppressed. Limits the next Exchange to Move or Interact only. Clears on a passed Defense Roll or at the end of an Exchange spent Fortified. A second failed Defense Roll while Suppressed takes the full Injury.",
    xref: ["Defense Roll", "Fortified", "Injury", "Flanked"],
    chapter: "exchange",
    anchor: "suppressed"
  },
  "Gear": {
    def: "A Trooper's equipped Armor, Weapon, and any Special Weapon or Special Equipment. What makes one Trooper different from another, and what slows them down.",
    xref: ["Armor", "Weapon", "Mobility"],
    chapter: "equipment-and-gear"
  },
  "Armor": {
    def: "Light, Medium or Heavy. Modifies the final Defense Roll result and carries a Mobility cost.",
    xref: ["Defense Roll", "Mobility"],
    chapter: "equipment-and-gear",
    anchor: "armor"
  },
  "Light Armor": {
    def: "-1 to the final Defense Roll result. +1 Mobility. Favors speed over protection.",
    xref: ["Armor", "Defense Roll", "Mobility"],
    chapter: "equipment-and-gear",
    anchor: "armor"
  },
  "Medium Armor": {
    def: "No DEF modifier, no Mobility change. The default loadout.",
    xref: ["Armor", "Defense Roll", "Mobility"],
    chapter: "equipment-and-gear",
    anchor: "armor"
  },
  "Heavy Armor": {
    def: "+1 to the final Defense Roll result. -1 Mobility. Maximum protection at the cost of maneuverability.",
    xref: ["Armor", "Defense Roll", "Mobility"],
    chapter: "equipment-and-gear",
    anchor: "armor"
  },
  "Weapon": {
    def: "Carbine, Assault Rifle, Marksman Rifle, or a Special Weapon (LMG, Plasma Rifle, Sniper, etc.)",
    xref: ["Gear"],
    chapter: "equipment-and-gear",
    anchor: "weapon-properties"
  },
  "Carbine": {
    def: "+1 ATK when Engaged in Tight Space. -1 ATK when Engaged in Open Space.",
    xref: ["Weapon", "Assault Rifle", "Marksman Rifle"],
    chapter: "equipment-and-gear",
    anchor: "weapon-properties"
  },
  "Assault Rifle": {
    def: "No special properties. The reliable workhorse. Default weapon for all Troopers.",
    xref: ["Weapon", "Carbine", "Marksman Rifle"],
    chapter: "equipment-and-gear",
    anchor: "weapon-properties"
  },
  "Marksman Rifle": {
    def: "+1 ATK when Engaged in Exposed Cover. -1 ATK when Engaged in Dense Cover.",
    xref: ["Weapon", "Carbine", "Assault Rifle"],
    chapter: "equipment-and-gear",
    anchor: "weapon-properties"
  },
  "Flamethrower": {
    def: "Special Weapon. Spend 1 Ammo to reduce Pressure instead of contributing ATK: -3 in Tight Space, -2 in Transitional Space, -1 in Open Space. The only weapon that can lower Pressure directly.",
    xref: ["Weapon", "Pressure", "Ammo"],
    chapter: "equipment-and-gear",
    anchor: "flamethrower"
  },
  "Requisition": {
    def: "Measures the Squad's access to rare gear. Gain 1 per surviving Trooper after each mission. Spend between missions on Special Weapons, Special Equipment, or better Armor; costs are listed as [REQ X].",
    xref: ["Gear", "Squad"],
    chapter: "equipment-and-gear",
    anchor: "requisition"
  },
  "Mission": {
    def: "An effort to achieve one or more Objectives across multiple Sectors, starting at a Landing Zone (LZ) and ending at the LZ or a separate Extraction Zone (EZ).",
    xref: ["Objective", "Sector", "Threat Level", "Difficulty"],
    chapter: "the-mission"
  },
  "Objective": {
    def: "What the mission is for: Capture, Destroy, Neutralize, Extract, Recover, Disrupt, or Hold, depending on Mission Type.",
    xref: ["Mission"],
    chapter: "the-mission",
    anchor: "mission-objective"
  },
  "Difficulty": {
    def: "A Mission's set difficulty, capping the maximum Threat Level of Sectors encountered: Routine (max TL 2), Hazardous (max TL 3), or Desperate (max TL 4).",
    xref: ["Threat Level", "Mission"],
    chapter: "the-mission",
    anchor: "difficulty-threat-level"
  },
  "Threat Level": {
    def: "The strength of enemy forces in a Sector, 1 (Light) to 4 (Overwhelming). Drives Injury severity, the odds of Enemy Tactics, and how badly a bad Contact or Threat Roll can degrade. Relative to the Squad, not an objective measure of enemy strength.",
    xref: ["Sector", "Mission", "Injury", "Enemy Tactics", "Difficulty"],
    chapter: "the-mission",
    anchor: "difficulty-threat-level"
  },
  "Airspace": {
    def: "Who currently holds air superiority: Clear, Contested, or Hostile. Sets the odds of the Squad's transport taking fire en route to a mission or on extraction.",
    xref: ["Mission"],
    chapter: "the-mission",
    anchor: "airspace"
  },
  "Sector": {
    def: "A distinct location visited during a mission. Defined by Cover, Space and Threat Level.",
    xref: ["Cover", "Space", "Threat Level"],
    chapter: "sectors"
  },
  "Cover": {
    def: "How much physical protection a Sector offers. 0 - Exposed, 1 to 4 - Normal, 5 - Dense. Limits how many Troopers can be Fortified.",
    xref: ["Space", "Sector", "Fortified"],
    chapter: "sectors",
    anchor: "cover"
  },
  "Exposed Cover": {
    def: "Cover 0. No real cover. No Troopers can be Fortified.",
    xref: ["Cover", "Normal Cover", "Dense Cover"],
    chapter: "sectors",
    anchor: "cover"
  },
  "Normal Cover": {
    def: "Scattered cover. 1d4 Troopers can be Fortified, rolled when the Squad first enters the Sector.",
    xref: ["Cover", "Exposed Cover", "Dense Cover"],
    chapter: "sectors",
    anchor: "cover"
  },
  "Dense Cover": {
    def: "Cover 5. Rubble, solid walls, barricades. Up to 5 Troopers can be Fortified.",
    xref: ["Cover", "Exposed Cover", "Normal Cover"],
    chapter: "sectors",
    anchor: "cover"
  },
  "Space": {
    def: "How open a Sector is. Tight, Transitional, or Open. Limits how many Troopers can Flank.",
    xref: ["Cover", "Sector", "Flanking"],
    chapter: "sectors",
    anchor: "space"
  },
  "Tight Space": {
    def: "Tunnels, narrow corridors, trenches. No Troopers can be Flanking.",
    xref: ["Space", "Transitional Space", "Open Space"],
    chapter: "sectors",
    anchor: "space"
  },
  "Transitional Space": {
    def: "Courtyards, broken streets, alleyways, scattered ruins. 1d4 Troopers can be Flanking, rolled when the Squad first enters the Sector.",
    xref: ["Space", "Tight Space", "Open Space"],
    chapter: "sectors",
    anchor: "space"
  },
  "Open Space": {
    def: "Plazas, squares, promenades, fields. Up to 5 Troopers can be Flanking.",
    xref: ["Space", "Tight Space", "Transitional Space"],
    chapter: "sectors",
    anchor: "space"
  },
  "Sector Contents": {
    def: "Roll 1d6 on entering a Sector to see what's waiting: Threat, Challenge, Sign, Nothing, or Boon. Roll 2d6 keep highest behind the lines, 1d6 on contested ground, or 2d6 keep lowest in the teeth of it.",
    xref: ["Threat Level", "Challenge", "Sign", "Boon"],
    chapter: "sectors",
    anchor: "sector-contents"
  },
  "Challenge": {
    def: "A problem caused by terrain, environment, the mission, or the people in the area. Not an Engagement, though failure may create one. Resolved with Oracle Dice, a Trooper Roll, or a Squad Roll.",
    xref: ["Oracle Dice", "Trooper Roll", "Squad Roll", "Sector Contents"],
    chapter: "sectors",
    anchor: "challenge"
  },
  "Sign": {
    def: "A Sector Contents result: the Sector itself is empty, but something tells the Squad what lies ahead. A Sign is information the Squad has to act on, not information handed to them.",
    xref: ["Sector Contents"],
    chapter: "sectors",
    anchor: "sign"
  },
  "Boon": {
    def: "A Sector Contents result: light resistance and something worth having. Roll on the Boon Table for effects like extra Ammo, Advance intel, or Attached Forces.",
    xref: ["Sector Contents", "Attached Forces"],
    chapter: "sectors",
    anchor: "boon-table"
  },
  "Trooper Roll": {
    def: "Resolves a task for a single Trooper by asking three questions: Time, Context, and Skill (their Tag). Count the yeses: 3 means it just works, 2 means roll the Oracle Die with the missing element as the stake, 1 or fewer means it isn't happening.",
    xref: ["Tags", "Oracle Dice"],
    chapter: "introduction",
    anchor: "trooper-roll"
  },
  "Squad Roll": {
    def: "Resolves a scene the Squad attempts together (patrols, cordons, standoffs, crowd control) by asking four questions: Time, Ground, Read, Kit. Roll 1d6 plus 1d6 per 'yes', take the highest. 6 resolves cleanly, 4-5 succeeds at a cost, 1-3 loses control.",
    xref: ["Trooper Roll", "Oracle Dice"],
    chapter: "introduction",
    anchor: "squad-roll"
  },
  "Oracle Dice": {
    def: "Roll 1d6 for a 50/50 question when the fiction demands an answer and no rule covers it. 2d6 keep lowest for Unlikely outcomes, 2d6 keep highest for Likely outcomes.",
    xref: ["Improvise", "Trooper Roll", "Squad Roll"],
    chapter: "introduction",
    anchor: "oracle-dice"
  },
  "Advance": {
    def: "The default state between Sectors: pushing toward the Objective. A Sector without a Threat costs nothing to cross. A Sector with a Threat calls for a declared Posture, then a Contact Roll and a Threat Roll before the Engagement begins.",
    xref: ["Posture", "Contact Roll", "Threat Roll", "Engagement", "Retreat", "Catch Breath"],
    chapter: "advancing-retreating",
    anchor: "advance"
  },
  "Posture": {
    def: "A Squad's declared approach before rolling Contact, locked in before the dice hit the table: Bounding (default), Assault Posture (2 Ammo, breaks Stealth), or Stealth (requires Stealth to be active).",
    xref: ["Bounding", "Assault Posture", "Stealth", "Contact Roll"],
    chapter: "advancing-retreating",
    anchor: "declare-your-posture"
  },
  "Bounding": {
    def: "The default Posture. Dispersed, weapons up, moving by bounds. No cost, no bonus.",
    xref: ["Posture", "Contact Roll"],
    chapter: "advancing-retreating",
    anchor: "declare-your-posture"
  },
  "Assault Posture": {
    def: "A Posture that trades the quiet approach for shock. Costs 2 Ammo to declare and breaks Stealth. Enables Pour It On after the Contact and Threat Rolls.",
    xref: ["Posture", "Pour It On", "Stealth"],
    chapter: "advancing-retreating",
    anchor: "declare-your-posture"
  },
  "Stealth": {
    def: "The enemy is unaware of the Squad's presence. Active at mission start by default. Broken by declaring Assault Posture, fighting an Engagement, or rolling SPOTTED while in Stealth Posture. Enables Infiltration and Stealth picks on a strong Contact Roll.",
    xref: ["Posture", "Infiltration", "Contact Roll"],
    chapter: "advancing-retreating",
    anchor: "declare-your-posture"
  },
  "Edge": {
    def: "A ±1 modifier checked once when the Squad enters a Sector: does one side hold an equipment or training advantage for the specific conditions in play? +1 if the Squad does, -1 if the enemy does, 0 otherwise. Modifies the Contact Roll directly, then carries into the Engagement as ±1 ATK each Exchange until conditions change.",
    xref: ["Contact Roll", "ATK", "Engagement"],
    chapter: "advancing-retreating",
    anchor: "the-edge"
  },
  "Contact Roll": {
    def: "1d6, modified by the Edge, read against the Squad's Posture to produce AMBUSHED, SPOTTED, SURPRISE, or (on an Assault) OVERWHELM. Sets starting Momentum and every Trooper's Offensive and Defensive Position. A Threat Roll made alongside it can degrade the result.",
    xref: ["Posture", "Edge", "Threat Roll", "Momentum"],
    chapter: "advancing-retreating",
    anchor: "contact-roll"
  },
  "Threat Roll": {
    def: "1d6 rolled against the Threat Level (during an Advance) or Base TL (during a Retreat). At or under that number, the enemy presses: the Contact Roll or Withdrawal result is reduced by the difference, or by 1 if the values are equal. Modified by Fatigue.",
    xref: ["Contact Roll", "Withdrawal", "Fatigue", "Threat Level"],
    chapter: "advancing-retreating",
    anchor: "threat-roll"
  },
  "Fatigue": {
    def: "-1 to the Threat Roll for every 3 Advances or Retreats made this mission.",
    xref: ["Threat Roll"],
    chapter: "advancing-retreating",
    anchor: "threat-roll"
  },
  "Pour It On": {
    def: "After the Contact Roll and Threat Roll are resolved, a Squad performing an Assault Posture may spend 2 Ammo per +1 to raise the final Contact Roll result. Declare and spend together; the new result is final.",
    xref: ["Assault Posture", "Contact Roll", "Ammo"],
    chapter: "advancing-retreating",
    anchor: "threat-roll"
  },
  "Infiltration": {
    def: "If the Contact Roll result is SURPRISE and every Trooper passes their Mobility Check in Stealth Posture, the Squad bypasses the Sector entirely. No Engagement, and Stealth holds.",
    xref: ["Stealth", "Contact Roll", "Mobility Check"],
    chapter: "advancing-retreating",
    anchor: "stealth-mobility-checks"
  },
  "Retreat": {
    def: "The Squad falls back to the previous Sector, chosen or forced at DEFEAT. Declare Break Contact or Fighting Withdrawal, then every Trooper makes a Mobility Check to determine the Squad's Withdrawal, which a Threat Roll against Base TL can degrade.",
    xref: ["Break Contact", "Fighting Withdrawal", "Withdrawal", "Threat Roll", "Disengage"],
    chapter: "advancing-retreating",
    anchor: "retreat"
  },
  "Break Contact": {
    def: "A Retreat maneuver: get out clean, betting on speed and a broken line of sight.",
    xref: ["Retreat", "Withdrawal"],
    chapter: "advancing-retreating",
    anchor: "declare-your-maneuver"
  },
  "Fighting Withdrawal": {
    def: "A Retreat maneuver: peel pursuers off and draw them onto chosen ground. Fights on the Squad's terms; a strong result can annihilate the pursuit, a weak one can bite off more than the Squad can chew.",
    xref: ["Retreat", "Withdrawal"],
    chapter: "advancing-retreating",
    anchor: "declare-your-maneuver"
  },
  "Withdrawal": {
    def: "The count of passed Mobility Checks during a Retreat, read against the declared maneuver to produce DISORDERLY, HARRIED, CLEAN BREAK, CONTROLLED, or KILL FUNNEL. Degraded by the Retreat's Threat Roll against Base TL.",
    xref: ["Retreat", "Break Contact", "Fighting Withdrawal", "Mobility Check"],
    chapter: "advancing-retreating",
    anchor: "retreat-rolls"
  },
  "Catch Breath": {
    def: "The state after clearing or finding an empty Sector. Lets a Trooper use Medic Gear to treat Injuries or redistribute Ammo from a Supply Backpack, plus narrative moments, before the next Advance.",
    xref: ["Advance", "Injury"],
    chapter: "advancing-retreating",
    anchor: "catch-breath"
  },
  "Engagement": {
    def: "A zoomed-in firefight to clear a Sector, opened by a Contact Roll or a Retreat. Played out in Exchanges until VICTORY or DEFEAT. Tracks Momentum, Pressure, and each Trooper's Position.",
    xref: ["Exchange", "Momentum", "Pressure", "Offensive Position", "Defensive Position"],
    chapter: "engagement"
  },
  "Momentum": {
    def: "The Squad's control of the battlefield. Track: DEFEAT, FALTERING, LOSING GROUND, CONTESTED, GAINING GROUND, BREAKING THROUGH, VICTORY.",
    xref: ["Engagement", "Offense Roll"],
    chapter: "engagement",
    anchor: "momentum"
  },
  "Pressure": {
    def: "Enemy fire weight during an Engagement. Starts at the Sector's Threat Level. Each point imposes -1 ATK. Drops by 1 per point of Momentum gained, by surplus 6s past the Momentum cap on a Success, or through the Flamethrower's own rules. Re-arms to Threat Level each new wave in a Defensive Engagement.",
    xref: ["ATK", "Momentum", "Flamethrower", "Threat Level", "Reprieve"],
    chapter: "engagement",
    anchor: "pressure"
  },
  "Reprieve": {
    def: "A round in a Defensive Engagement after a VICTORY roll fails to break the enemy. No Offense Roll, Defense Roll, or Enemy Tactics; Mobility Checks and Interacts succeed automatically. Momentum resets to CONTESTED and Pressure re-arms to Threat Level.",
    xref: ["Engagement", "Momentum", "Pressure"],
    chapter: "engagement",
    anchor: "momentum"
  },
  "Offensive Position": {
    def: "A Trooper's ability to attack. Three levels: Limited, Engaged, Flanking. Better position means more ATK.",
    xref: ["Defensive Position", "Limited", "Engaged", "Flanking"],
    chapter: "engagement",
    anchor: "trooper-position"
  },
  "Defensive Position": {
    def: "A Trooper's ability to survive incoming fire. Three levels: Flanked, In Cover, Fortified. Better position means an easier Defense Roll.",
    xref: ["Offensive Position", "Flanked", "In Cover", "Fortified"],
    chapter: "engagement",
    anchor: "trooper-position"
  },
  "Limited": {
    def: "Lowest Offensive Position. The Trooper can Fire but at -1 ATK. Poor angles, obstructed sight lines.",
    xref: ["Offensive Position", "Engaged", "Flanking"],
    chapter: "engagement",
    anchor: "trooper-position"
  },
  "Engaged": {
    def: "Middle Offensive Position. The Trooper contributes standard ATK when Firing.",
    xref: ["Offensive Position", "Limited", "Flanking"],
    chapter: "engagement",
    anchor: "trooper-position"
  },
  "Flanking": {
    def: "Best Offensive Position. The Trooper adds their Flanking Bonus ATK when Firing. Limited by Sector Space.",
    xref: ["Offensive Position", "Flanking Bonus", "Space", "Momentum"],
    chapter: "engagement",
    anchor: "trooper-position"
  },
  "Flanked": {
    def: "Worst Defensive Position. Direct Fire on a roll of 3 or less. Cannot go Suppressed, and takes -1 DEF next Exchange after a Momentum Loss.",
    xref: ["Defensive Position", "In Cover", "Fortified", "Suppressed"],
    chapter: "engagement",
    anchor: "trooper-position"
  },
  "In Cover": {
    def: "Middle Defensive Position. Direct Fire on a roll of 2 or less.",
    xref: ["Defensive Position", "Flanked", "Fortified"],
    chapter: "engagement",
    anchor: "trooper-position"
  },
  "Fortified": {
    def: "Best Defensive Position. Direct Fire on a roll of 1 only. Limited by Sector Cover. Clears Suppressed, but only after that Exchange's Offense Roll.",
    xref: ["Defensive Position", "In Cover", "Flanked", "Cover", "Suppressed"],
    chapter: "engagement",
    anchor: "trooper-position"
  },
  "Exchange": {
    def: "One round of an Engagement: Intent, Offense Roll, Defense Roll, Momentum, Enemy Tactics.",
    xref: ["Engagement", "Offense Roll", "Defense Roll"],
    chapter: "exchange"
  },
  "ATK": {
    def: "Attack dice (d6s) added to the Squad's Offense Roll. Pooled from all Firing Troopers into a single roll.",
    xref: ["Offense Roll", "Fire", "DEF"],
    chapter: "exchange",
    anchor: "atk--def"
  },
  "DEF": {
    def: "Defense dice (d6s) for a Trooper's individual Defense Roll. Modified by Covering Fire, Armor, and situational effects.",
    xref: ["Defense Roll", "Covering Fire", "Armor", "ATK"],
    chapter: "exchange",
    anchor: "atk--def"
  },
  "Intent": {
    def: "What every Trooper not Bleeding Out, Stabilized, or Dead decides each Exchange: Fire, Move, Covering Fire, Use Special Gear, Interact, Disengage, or Improvise. Resolved in the order most favorable to the Squad.",
    xref: ["Fire", "Move", "Covering Fire", "Use Special Gear", "Interact", "Disengage", "Improvise"],
    chapter: "exchange",
    anchor: "intent"
  },
  "Fire": {
    def: "Intent: contribute ATK to the Offense Roll. Flanking Bonus and spending Ammo can increase ATK; being Limited reduces it. Prevented by Suppressed. ATK aimed at a Hard Target is set aside in its own pool.",
    xref: ["ATK", "Offense Roll", "Flanking Bonus", "Suppressed", "Hard Target"],
    chapter: "exchange",
    anchor: "fire"
  },
  "Move": {
    def: "Intent: reposition on the battlefield via a Mobility Check. Move Up (toward Flanking), Fall Back (toward Fortified), or Reposition (toward Engaged and In Cover, +1 ATK on a pass). Cover and Space may prohibit certain moves.",
    xref: ["Mobility Check", "Offensive Position", "Defensive Position"],
    chapter: "exchange",
    anchor: "move"
  },
  "Covering Fire": {
    def: "Intent: grant +1 DEF to a fellow Trooper. If they Move this Exchange, also grants +1 Mobility for that Move. Stacks with multiple providers.",
    xref: ["DEF", "Defense Roll", "Move", "Mobility"],
    chapter: "exchange",
    anchor: "covering-fire"
  },
  "Use Special Gear": {
    def: "Intent: fire heavy weapons, call in airstrikes, or use other Special Equipment or Special Weapons. Some take a full Exchange.",
    xref: ["Gear"],
    chapter: "exchange",
    anchor: "use-special-gear"
  },
  "Interact": {
    def: "Intent: do something outside the firefight. Stabilize a Bleeding Out Trooper, unjam a weapon, plant demo charges. Some take multiple Exchanges.",
    xref: ["Bleeding Out", "Stabilized"],
    chapter: "exchange",
    anchor: "interact"
  },
  "Disengage": {
    def: "Intent: the entire Squad retreats. Each Trooper rolls a chance of 1 Injury and a Death Save based on current Momentum (DEFEAT down to CONTESTED). One Trooper may sacrifice themselves so the rest flee uninjured. See Last Stand for the Bleeding Out version.",
    xref: ["Retreat", "Momentum", "Injury", "Death Save", "Last Stand"],
    chapter: "exchange",
    anchor: "disengage"
  },
  "Improvise": {
    def: "Intent: attempt something not covered by other intents. Use Oracle Dice. The cost the Trooper pays sets the scale of the gain.",
    xref: ["Oracle Dice"],
    chapter: "exchange",
    anchor: "improvise"
  },
  "Offense Roll": {
    def: "Pool all ATK from Firing Troopers and roll that many d6s, taking the highest. +1 ATK if Momentum was gained last Exchange, -1 ATK per point of Pressure, ±1 ATK for the Edge. At 0 ATK, roll 2d6 and keep the lowest instead; Success at a Cost isn't available. 6 = Success, 4-5 = Hold Position or Success at a Cost, 3 or less = Pushed Back.",
    xref: ["Exchange", "Momentum", "ATK", "Pressure", "Edge", "Flanking"],
    chapter: "exchange",
    anchor: "offense-roll"
  },
  "Defense Roll": {
    def: "Each Trooper rolls individually against incoming fire. Base 1 DEF, modified by Covering Fire and situational effects. At 1+ DEF roll that many d6 and take the highest; at 0 or less, roll (1 + the negative value) d6 and keep the lowest. Armor modifies the final result: Heavy +1, Light -1.",
    xref: ["DEF", "Armor", "Covering Fire", "Injury"],
    chapter: "exchange",
    anchor: "defense-roll"
  },
  "Enemy Tactics": {
    def: "End-of-Exchange check: roll 1d6. Equal to or under the Threat Level, the enemy presses. Roll 1d6 again: 1-3 Push (one Trooper drops a Defensive Position step), 4-5 Press (every Flanking and Engaged Trooper drops a step), 6 Overrun (every Trooper drops a step). A Trooper already Flanked takes -1 DEF instead. The Sergeant can nullify a Tactic for 1 Grit.",
    xref: ["Exchange", "Threat Level", "Defensive Position", "Sergeant", "Grit"],
    chapter: "exchange",
    anchor: "enemy-tactics"
  },
  "Hard Target": {
    def: "Tanks, gun nests, brutes. Fired on in a separate dice pool during the Offense Roll. A 6 deals 1 Hit. A 4-5 deals 1 Hit at a Cost: one Trooper takes -1 DEF, or decline and treat it as a miss.",
    xref: ["Offense Roll", "Grit"],
    chapter: "hard-targets"
  },
  "Attached Forces": {
    def: "Additional fighters accompanying the Squad, worth +1/+2/+3 ATK by rough size. Don't participate in Contact Rolls. Committed dice roll alongside the Squad's in the Offense Roll; any that come up 1 are removed as casualties. A VIP is always the last die in the group and is killed if that die rolls a 1.",
    xref: ["Offense Roll", "ATK", "Boon"],
    chapter: "hard-targets",
    anchor: "attached-forces"
  },
  "Support": {
    def: "Firepower called in from beyond the Sector: artillery, naval guns, mine drops, orbital strikes. Drawn from a mission's Support Priority pool and called in through Radio Gear by a Radio Operator.",
    xref: ["Support Priority", "Requisition"],
    chapter: "equipment-and-gear",
    anchor: "support"
  },
  "Support Priority": {
    def: "A pool set during Mission setup alongside Difficulty and Airspace, measuring how much Command cares: 2 for a routine patrol up to 8+ for a set-piece offensive. Shared across the Squad and spent on Support calls for the whole mission.",
    xref: ["Support", "Difficulty", "Airspace"],
    chapter: "equipment-and-gear",
    anchor: "support-priority"
  },
  "Bond": {
    def: "A relationship two Troopers may form after a mission, if the fiction supports it. Once per mission, either bonded Trooper can negate an Injury the other would suffer. If a bonded Trooper dies, the survivor gains +1 ATK to every Offense Roll for the rest of the mission, then rolls to see if they sit out the next one.",
    xref: ["Injury", "Trooper", "ATK"],
    chapter: "after-the-mission",
    anchor: "bond"
  },
  "Field Report": {
    def: "Post-mission narrative exercise. Answer prompts about the mission to turn dice rolls into your regiment's history.",
    xref: ["Mission"],
    chapter: "after-the-mission",
    anchor: "the-field-report"
  }
};

// Aliases — alternate forms that map to a canonical glossary key.
window.GLOSSARY_ALIASES = {
  "troopers": "Trooper",
  "squads": "Squad",
  "sergeants": "Sergeant",
  "sectors": "Sector",
  "engagements": "Engagement",
  "exchanges": "Exchange",
  "objectives": "Objective",
  "missions": "Mission",
  "hard targets": "Hard Target",
  "oracle die": "Oracle Dice",
  "trooper rolls": "Trooper Roll",
  "squad rolls": "Squad Roll",
  "mobility checks": "Mobility Check",
  "mobility check": "Mobility Check",
  "contact roll": "Contact Roll",
  "contact rolls": "Contact Roll",
  "threat rolls": "Threat Roll",
  "advance roll": "Contact Roll",
  "advance rolls": "Contact Roll",
  "mission phase": "Advance",
  "postures": "Posture",
  "the edge": "Edge",
  "withdrawals": "Withdrawal",
  "reprieves": "Reprieve",
  "intents": "Intent",
  "death saves": "Death Save",
  "stabilize": "Stabilized",
  "stabilizes": "Stabilized",
  "challenges": "Challenge",
  "signs": "Sign",
  "boons": "Boon",
  "bonds": "Bond",
  "offense rolls": "Offense Roll",
  "defense rolls": "Defense Roll",
  "defense roll": "Defense Roll",
  "injuries": "Injury",
  "field reports": "Field Report",
  "tags": "Tags",
  "tag": "Tags",
  "flanking bonus": "Flanking Bonus",
  "exposed": "Exposed Cover",
  "exposed cover": "Exposed Cover",
  "normal": "Normal Cover",
  "normal cover": "Normal Cover",
  "dense": "Dense Cover",
  "dense cover": "Dense Cover",
  "tight": "Tight Space",
  "tight space": "Tight Space",
  "transitional": "Transitional Space",
  "transitional space": "Transitional Space",
  "open": "Open Space",
  "open space": "Open Space",
  "attached force": "Attached Forces",
  "offensive positions": "Offensive Position",
  "defensive positions": "Defensive Position",
  "light armor": "Light Armor",
  "medium armor": "Medium Armor",
  "heavy armor": "Heavy Armor",
  "carbines": "Carbine",
  "assault rifles": "Assault Rifle",
  "marksman rifles": "Marksman Rifle",
  "infiltrate": "Infiltration",
  "enemy tactic": "Enemy Tactics",
  "tactics": "Enemy Tactics",
  "stealth bonus": "Stealth",
  "fire": "Fire",
  "move up": "Move",
  "fall back": "Move",
  "reposition": "Move",
  "covering fire": "Covering Fire",
  "special gear": "Use Special Gear",
  "interact": "Interact",
  "disengage": "Disengage",
  "improvise": "Improvise",
  "atk": "ATK",
  "def": "DEF",
  "suppressed": "Suppressed",
  "pressure": "Pressure",
  "retreat": "Retreat",
  "retreat!": "Retreat",
  "retreats": "Retreat",
  "dead": "Dead",
  "bleeding out": "Bleeding Out",
  "stabilized": "Stabilized",
  "flamethrower": "Flamethrower",
  "limited": "Limited",
  "engaged": "Engaged",
  "flanking": "Flanking",
  "flanked": "Flanked",
  "in cover": "In Cover",
  "fortified": "Fortified"
};
