# Summary

This chapter is your reference during play. It follows the order of an actual session: set up the Mission, move through Sectors, fight Exchanges, fall back or push through, recover. Rules consulted every round sit here in full. Rules consulted once per mission are compressed to a pointer.

**The loop:** Advance to a new Sector. If it holds a Threat, make an [[Advance Roll]] and fight the [[Engagement]] in [[Exchange|Exchanges]]. Win and Catch Breath, then Advance again. Lose or withdraw, and Retreat. Repeat until the [[Objective]] is done or the Squad is.

## Setting Up

A Mission has an [[Objective]] and a Difficulty (Routine, Hazardous, Desperate), which caps the [[Threat Level]] of opposition. It is a network of [[Sector|Sectors]] from LZ to Objective or EZ.

Each Sector: **[Name] / [Cover] / [Space] / [Threat Level]**.

- **[[Cover]]** caps how many Troopers can be [[Fortified]]: Exposed none, Normal 1d4, Dense no limit.
- **[[Space]]** caps how many can be [[Flanking]]: Tight none, Transitional 1d4, Open no limit.
- Roll the 1d4 when the Squad first enters and note it down.

**Sector Contents** (roll 1d6 on entering):

| 1d6  | Routine | Hazardous | Desperate |
| ---- | ------- | --------- | --------- |
| 1    | TL 2    | TL 3      | TL 4      |
| 2    | TL 1    | TL 2      | TL 3      |
| 3    | TL 1    | TL 1      | TL 3      |
| 4    | Nothing | TL 1      | TL 2      |
| 5    | Nothing | Nothing   | TL 2      |
| 6    | Boon    | Boon      | Boon      |

Nothing or Boon: Advance onward or Catch Breath. Threat: Advance Roll.

## The Advance Roll

Roll 2d6 with modifiers:

- **Threat Level**: subtract TL.
- **Fatigue**: -1 per 3 previous Advance Rolls this mission.
- **Conditions**: -1 bad weather, -2 terrible. +1 if the environment favors the Squad, -1 if it favors the enemy.
- **Assault**: spend 2 [[Ammo]] per +1, before rolling. Forfeits Stealth.
- **[[Stealth]]**: +3 if the enemy is unaware of the Squad. Lost on SPOTTED or worse, for the rest of the mission.
- **Press the Advance**: after rolling, each Trooper may spend 1 [[Grit]] for +1 (max +5). Declare together. Final.

| 2d6  | Result        | Momentum                                   | Defensive Positions |
| ---- | ------------- | ------------------------------------------ | ------------------- |
| ≤ 3  | AMBUSHED      | LOSING GROUND                              | [[Flanked]]         |
| 4–8  | SPOTTED       | CONTESTED                                  | [[In Cover]]        |
| 9–12 | SURPRISE      | GAINING GROUND                             | [[Fortified]]       |
| 13+  | **Overwhelm** | Enemy routed. No Engagement. Catch Breath. |                     |

Each Trooper rolls a [[Mobility Check]] for their [[Offensive Position]]:

| Result   | Check Passed | Check Failed |
| -------- | ------------ | ------------ |
| AMBUSHED | [[Engaged]]  | [[Limited]]  |
| SPOTTED  | [[Flanking]] | [[Engaged]]  |
| SURPRISE | [[Flanking]] | [[Engaged]]  |

**If Stealth is still active** (in practice: only on SURPRISE):

- All Troopers pass: bypass the Sector entirely. No Engagement.
- Otherwise, per 2 passed checks, pick one [[Infiltration]] benefit: **Cut Comms** (Stealth preserved through this Engagement), **Target Commanders** (no [[Enemy Tactics]] this Engagement), **Trap** (first [[Hard Target]] takes 2 Hits on arrival), **Exit Route** ([[Disengage]] is automatic, no Injuries).

Then set [[Pressure]] to TL, and the Engagement begins.

## The Exchange

Track three things: **[[Momentum]]** (who is winning), **[[Pressure]]** (how hard the enemy is firing), and each Trooper's **Position** (Offensive: Flanking / Engaged / Limited. Defensive: Fortified / In Cover / Flanked).

Momentum ladder: DEFEAT, FALTERING, LOSING GROUND, CONTESTED, GAINING GROUND, BREAKING THROUGH, VICTORY.

Pressure: starts at TL. Each point is -1 ATK from the pool. Drops by 1 on Momentum gain, by surplus 6s on a Success, or via the [[Flamethrower]]. Never below 0 or above its starting value.

Each Exchange runs five steps.

### 1. Intent

Every Trooper not [[Bleeding Out]], [[Down]] or Dead picks a focus:

- **[[Fire]]**: contribute ATK. Fire 1 ATK. [[Flanking Bonus]] +1/+2/+3 by [[Mobility]] (0-3 / 4 / 5). 1 [[Ammo]] for +1 ATK. [[Limited]] -1 ATK. [[Wounded]] -1 ATK. ATK aimed at a [[Hard Target]] is set aside in its own pool.
- **[[Move]]**: Mobility Check. **Move Up** to Flanking (pass In Cover, fail Flanked). **Fall Back** to Fortified (pass Engaged, fail Limited). **Reposition** to Engaged/In Cover (pass: +1 ATK this Exchange). Cover and Space limits apply.
- **[[Covering Fire]]**: +1 DEF to one Trooper, +1 Mobility if they Move. Stacks.
- **[[Use Special Gear]]** / **[[Interact]]**: heavy weapons, stabilizing, charges.
- **[[Improvise]]**: [[Oracle Dice]]. The cost paid sets the scale of the gain.
- **[[Disengage]]**: the whole Squad retreats. See Falling Back below.

A [[Suppressed]] Trooper can only Move or Interact.

### 2. Offense Roll

Pool all ATK. Modifiers: +1 if Momentum was gained last Exchange, +1 if a Trooper died last Exchange, -1 per Pressure, +/-1 [[Tactical Asymmetry]]. Roll the pool, take the highest. At 0 ATK, roll 2d6 keep lowest (no Success at a Cost).

| Result | Outcome                                                      |
| ------ | ------------------------------------------------------------ |
| ≤ 3    | **Pushed Back.** -1 Momentum.                                |
| 4–5    | **Hold Position** (+1 DEF all Troopers, no Momentum change) or **Success at a Cost** (+1 Momentum, -1 DEF and +1 Injury if hit for the most at-risk Trooper). |
| 6      | **Success.** +1 Momentum per 6, max +2. Each 6 beyond the cap removes 1 Pressure. May opt to Hold Position instead. |

Hard Target pool: roll separately. 6 = Hit. 4–5 = Hit at a Cost (optional: 1 Hit, one Trooper -1 DEF).

### 3. Defense Roll

Each Trooper: base 1 DEF, plus Covering Fire and situational effects. At 1+ DEF, roll that many d6 take highest. At 0 or less, roll (2 - DEF) d6 keep lowest. Spend 1 Grit to reroll one die. [[Armor]] modifies the final result: Heavy +1, Light -1.

| Result | Flanked     | In Cover    | Fortified   |
| ------ | ----------- | ----------- | ----------- |
| 1      | Direct Fire | Direct Fire | Direct Fire |
| 2      | Direct Fire | Direct Fire | Safe        |
| 3      | Direct Fire | Safe        | Safe        |
| 4–6    | Safe        | Safe        | Safe        |

**Direct Fire**: the Trooper chooses to take the [[Injury]], or go **Suppressed** (Flanked Troopers cannot; a Trooper already Suppressed cannot again).

| Threat Level | Injury | Injury (Suppressed) |
| ------------ | ------ | ------------------- |
| 1            | 1      | None                |
| 2            | 1d2    | None                |
| 3            | 1d3    | 1                   |
| 4            | 1d4    | 1                   |

Status track: OK, Grazed, Wounded, Bleeding Out, Dead. A single hit never moves a Trooper past Bleeding Out. Stabilizing a Bleeding Out Trooper makes them [[Down]]: out of action, back to Wounded after the Engagement. Wounded: -1 ATK, fails all Mobility Checks. Grazed clears when Catching Breath.

Suppressed clears on a passed Defense Roll, or by being or becoming Fortified (after that Exchange's Offense Roll).

**Grit recovery**: surviving Direct Fire without going Suppressed and remaining standing (+1, that Trooper). Downing a Hard Target (+1, one Trooper). Momentum crossing into GAINING GROUND or better from CONTESTED or worse (+1, one Trooper).

### 4. Momentum Resolution

**On gain**: +1 ATK next Exchange. Pressure -1. Flanking Troopers -1 DEF next Exchange. Fortified Troopers -1 ATK next Exchange.

**On loss**: Flanked Troopers -1 DEF next Exchange.

**VICTORY**: Engagement won. **DEFEAT**: routed, resolve as Disengage. (Defensive Engagements modify both: see [[Engagement]].)

### 5. Enemy Tactics

Roll 1d6. If equal to or under TL, the enemy presses. Roll 1d6 again:

| 1d6  | Effect                                                       |
| ---- | ------------------------------------------------------------ |
| 1–3  | **Push.** One Trooper of your choice drops one step of Defensive Position. |
| 4–5  | **Press.** Every Flanking and Engaged Trooper drops one step. |
| 6    | **Overrun.** Every Trooper drops one step.                   |

The Sergeant, if not Bleeding Out or Suppressed, can nullify a Tactic for 1 Grit.

Next Exchange.

## Falling Back

**Disengage** (chosen or forced at DEFEAT): each Trooper risks Injury by current Momentum. DEFEAT 4-in-6, FALTERING 3-in-6, LOSING GROUND 2-in-6, CONTESTED 1-in-6, GAINING GROUND or better none. One Trooper may lay down their life; everyone else escapes uninjured.

Then **Retreat**: declare Break Contact or Fighting Withdrawal, roll Mobility Checks (half or more passing = success), split the enemy into Pursuing and Remnant TL, and make a Retreat Roll in the previous Sector. Full procedure and tables: [[Retreat]] in the Mission Phase chapter.

## Catch Breath & After

**Catch Breath** (cleared or empty Sector): Grazed Troopers return to OK. Medic Gear patches Wounded. Redistribute Ammo from a Supply Backpack. A quiet moment.

**After the Engagement**: who took the biggest risk, what will the squad still be talking about, whose reputation changed.

**After the Mission**: surviving Troopers refill Grit and gain +1 (max 3). All injuries heal. Anyone who ended Wounded or was ever Bleeding Out sits out the next mission. Gain 1 Requisition per survivor.
