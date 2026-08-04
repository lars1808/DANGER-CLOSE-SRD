# Summary

This chapter is your reference during play. It follows the order of an actual session: set up the [[Mission]], move through [[Sector|Sectors]], fight [[Exchange|Exchanges]], fall back or push through, recover. Rules consulted every round sit here in full. Rules consulted once per mission are compressed to a pointer.

## The Loop

[[Advance]] into a new [[Sector]]. If it holds a Threat, declare a [[Posture|posture]] and make a [[Contact Roll]] and a [[Threat Roll]], then fight the [[Engagement]] in Exchanges. Win and [[Catch Breath]], then Advance again. Lose or withdraw, and [[Retreat]]. Repeat until the [[Objective]] is done or the Squad is.

## Setting Up

A [[Mission]] has one or more Objectives and a [[Difficulty]], which caps the [[Threat Level]] of the opposition. It runs from the LZ through a network of Sectors to the Objective, then to the LZ or a separate EZ.

| 1d6  | Difficulty | Max Threat Level |
| ---- | ---------- | ---------------- |
| 1–3  | Routine    | 2 (Standard)     |
| 4–5  | Hazardous  | 3 (Heavy)        |
| 6    | Desperate  | 4 (Overwhelming) |

Each Sector: **[Name] / [Cover] / [Space] / [Threat Level]**.

- **[[Cover]]** caps how many Troopers can be [[Fortified]]: Exposed 0, Normal 1d4, Dense 5.
- **[[Space]]** caps how many can be [[Flanking]]: Tight 0, Transitional 1d4, Open 5.
- Roll the 1d4 when the Sector is generated and note it down. Where there are fewer slots than takers, choose who fills them.

**[[Sector Contents]]** (roll 1d6 on entering):

| 1d6  | Contents                                                     |
| ---- | ------------------------------------------------------------ |
| 1-2  | **Threat.** Roll Threat Level below.                         |
| 3    | **[[Challenge]].** A problem to solve. Not an Engagement.        |
| 4    | **[[Sign]].** Something that points at what lies ahead. The Sector is empty. |
| 5    | **Nothing.** Advance onward, or Catch Breath.                |
| 6    | **[[Boon]].** Roll on the Boon Table.                            |

Behind the lines, roll 2d6 and keep the highest. Contested ground, roll 1d6. In the teeth of it, roll 2d6 and keep the lowest. For straight frontline combat, skip this table and roll Threat Level directly; on a 6, roll a Boon as well.

| 1d6  | Routine | Hazardous | Desperate |
| ---- | ------- | --------- | --------- |
| 1    | TL 2    | TL 3      | TL 4      |
| 2    | TL 2    | TL 3      | TL 3      |
| 3    | TL 1    | TL 2      | TL 3      |
| 4    | TL 1    | TL 2      | TL 2      |
| 5    | TL 1    | TL 2      | TL 2      |
| 6    | TL 1    | TL 1      | TL 1      |

The last Sector visited stays cleared. Others are not safe forever.

## The Advance

A Sector without a Threat costs nothing to cross. Advance to the next, or Catch Breath. A Sector with a Threat:

**1. Declare posture.** Before the dice. Final.

- **Bounding.** No cost.
- **Assault.** 2 Ammo. Breaks [[Stealth]].
- **Stealth.** Requires Stealth to be active. Broken by declaring [[Assault Posture|Assault]], by fighting an Engagement, or by rolling SPOTTED in Stealth posture.

**2. Check the [[Edge]].** +1 the Squad, -1 the enemy, 0 neither. Applies to the [[Contact Roll]], then carries into the Engagement as ±1 ATK each [[Exchange]].

**3. Roll.** Contact Roll (1d6) plus the Edge, read against posture. Never below 1 or above 6.

| d6   | Bounding | Assault       | Stealth  |
| ---- | -------- | ------------- | -------- |
| 1    | AMBUSHED | AMBUSHED      | AMBUSHED |
| 2    | SPOTTED  | AMBUSHED      | SPOTTED  |
| 3    | SPOTTED  | AMBUSHED      | SPOTTED  |
| 4    | SPOTTED  | SURPRISE      | SPOTTED  |
| 5    | SPOTTED  | SURPRISE      | SURPRISE |
| 6    | SURPRISE | **OVERWHELM** | SURPRISE |

[[Threat Roll]] (1d6) alongside. On the [[Threat Level]] or less, lower the Contact Roll result by the difference, or by 1 if they are equal. Never below the effects of a 1.

- **Fatigue.** -1 to the Threat Roll per 3 [[Advance|Advances]] or [[Retreat|Retreats]] this mission.
- **Pour It On.** Assault only, after both rolls. 2 Ammo per +1 to the final result. Declare together. Final.
- **OVERWHELM.** Enemy routed. No Engagement. Catch Breath.

**4. Set positions and [[Momentum]].** **[[Cover]] and [[Space]]** still cap Fortified and Flanking.

| Result             | Momentum       | Offensive | Defensive |
| ------------------ | -------------- | --------- | --------- |
| AMBUSHED           | LOSING GROUND  | Engaged   | Flanked   |
| SPOTTED            | CONTESTED      | Engaged   | In Cover  |
| SURPRISE           | GAINING GROUND | Flanking  | Fortified |
| SURPRISE (Assault) | GAINING GROUND | Flanking  | In Cover  |

**In Stealth posture**, every Trooper makes a **[[Mobility Check]]** after the Contact Roll. Pass: positions as the table. Fail: both one step worse.

- **Infiltration.** SURPRISE with all Checks passed: bypass the Sector. No Engagement, Stealth holds.
- Otherwise, per 2 passed Checks, pick one: **Cut Comms** (Stealth survives this Engagement), **Target Commanders** (no [[Enemy Tactics]] this Engagement), **Trap** (first [[Hard Target]] takes 2 Hits on arrival), **Exit Route** ([[Disengage]] is automatic, no Injuries).

Set **[[Pressure]]** to the Threat Level. The Engagement begins.

## The Exchange

Track three things: **[[Momentum]]** (who is winning), **[[Pressure]]** (how hard the enemy is firing), and each Trooper's **Position** (Offensive: Flanking / Engaged / Limited. Defensive: Fortified / In Cover / Flanked).

Momentum ladder: DEFEAT, FALTERING, LOSING GROUND, CONTESTED, GAINING GROUND, BREAKING THROUGH, VICTORY.

Pressure starts at [[Threat Level|TL]]. Each point is -1 ATK off the pool. Drops by 1 per point of Momentum gained, by surplus 6s on a [[Offense Roll|Success]], or through the **[[Flamethrower]]**. Never below 0 or above its starting value.

**Defensive Engagements** (sieges, extractions) change both ends of the ladder:

- **DEFEAT.** Retreat to an adjacent Sector, or trapped if there is none. 1 [[Injury]] per Trooper per Exchange spent at DEFEAT.
- **VICTORY.** Roll 1d6, +1 per previous VICTORY this Engagement. Over the TL, the enemy breaks. Otherwise: a **[[Reprieve]]** round, Momentum resets to CONTESTED, Pressure re-arms to TL.
- **Reprieve.** No Offense Roll, no [[Defense Roll]], no Enemy Tactics. Mobility Checks and [[Interact|Interacts]] succeed automatically.
- **Extractions** run a timer of 6 to 9 Exchanges, set before the fight, Reprieves included. On expiry, extract as per [[Disengage]].

Each Exchange runs five steps.

### 1. Intent

Every Trooper not [[Bleeding Out]], [[Stabilized]] or [[Dead]] picks one focus. Resolve in the order most favorable to the Squad.

- **Fire.** 1 ATK. **[[Flanking Bonus]]** +1/+2/+3 by Mobility (0-3 / 4 / 5). 1 Ammo for +1 ATK. [[Limited]] -1 ATK. ATK aimed at a **[[Hard Target]]** is set aside in its own pool.
- **Move.** Mobility Check. **Move Up** to Flanking (pass In Cover, fail Flanked). **Fall Back** to Fortified (pass Engaged, fail Limited). **Reposition** to Engaged and In Cover (pass: +1 ATK this Exchange). [[Cover]] and [[Space]] limits apply.
- **Covering Fire.** +1 DEF to one Trooper, +1 Mobility if they Move. Stacks.
- **Use Special Gear** / **Interact.** Heavy weapons, Stabilizing, charges. Some take multiple Exchanges.
- **Improvise.** [[Oracle Dice]]. The cost paid sets the scale of the gain.
- **Disengage.** The whole Squad falls back. See Falling Back.

A **[[Suppressed]]** Trooper can only Move or Interact.

### 2. Offense Roll

Pool all ATK, roll, take the highest. **+1** if Momentum was gained last Exchange. **-1** per point of Pressure. **±1** for the Edge. At 0 ATK, roll 2d6 keep lowest; no Success at a Cost.

| Result | Outcome                                                      |
| ------ | ------------------------------------------------------------ |
| ≤ 3    | **Pushed Back.** -1 Momentum.                                |
| 4–5    | **Hold Position** (+1 DEF all Troopers, no Momentum change) or **Success at a Cost** (+1 Momentum, -1 DEF to the most at-risk Trooper, +1 Injury if hit). |
| 6      | **Success.** +1 Momentum per 6, max +2. Each 6 beyond the cap removes 1 Pressure or grants 1 Grit. May opt to Hold Position instead. |

Success at a Cost into VICTORY: one final **[[Defense Roll]]** for all, no Suppression available. Success into VICTORY ends the Engagement.

Hard Target pool rolls separately. **6** = 1 Hit. **4-5** = 1 Hit at a Cost (one Trooper -1 DEF, or decline and treat as a miss). Downing a Hard Target grants 1 **[[Grit]]** to a Trooper of choice.

### 3. Defense Roll

Each Trooper rolls alone: base 1 DEF, plus **[[Covering Fire]]** and situational effects. At 1+ DEF, roll that many d6 take highest. At 0 or less, roll (1 + the negative value) d6 keep lowest. Spend 1 Grit to reroll one die. **[[Armor]]** modifies the final result: Heavy +1, Light -1.

| Result | Flanked     | In Cover    | Fortified   |
| ------ | ----------- | ----------- | ----------- |
| 1      | Direct Fire | Direct Fire | Direct Fire |
| 2      | Direct Fire | Direct Fire | Safe        |
| 3      | Direct Fire | Safe        | Safe        |
| 4–6    | Safe        | Safe        | Safe        |

**Direct Fire.** Take the [[Injury|Injuries]] and a **[[Death Save]]**, or go **[[Suppressed]]**. Choose before Injuries are rolled. A **[[Flanked]]** Trooper cannot go Suppressed. A Suppressed Trooper cannot again: a second failed Defense Roll takes the full Injury.

| Threat Level | Injury | Injury (Suppressed) |
| ------------ | ------ | ------------------- |
| 1            | 1      | None                |
| 2            | 1d2    | None                |
| 3            | 1d3    | 1                   |
| 4            | 1d4    | 1                   |

Add Injuries to the tally, then roll a **Death Save**: 1d6, greater than the tally and the Trooper stays in the fight. Otherwise **Bleeding Out**. Injuries taken while Suppressed never call for a Death Save. Each 2 Injuries lower Mobility by 1.

**Suppressed** clears on a passed Defense Roll, or at the end of any Exchange spent Fortified. Becoming Fortified clears it only after that Exchange's Offense Roll; the action is still lost.

**[[Bleeding Out]]**: no actions, dead at the end of the next Exchange unless Stabilized. **[[Stabilize]]** is an Interact, costs the helper a full Exchange, always succeeds. **[[Stabilized]]**: out of the fight, not targeted by normal fire, rejoins when the Engagement ends with Injuries intact. Both die if hit by something big in the fiction, or if the Engagement is lost.

**[[Last Stand]].** A Bleeding Out Trooper can go out fighting. Declare it the moment it happens. They die after acting. Either **+4 ATK** to this Exchange's Offense Roll, or the Squad **Disengages** immediately, no Injury rolls for anyone, including Troopers who already failed one.

### 4. Momentum Gain & Loss

- **On gain.** Pressure -1 per point. Flanking Troopers -1 DEF next Exchange. Fortified Troopers -1 ATK next Exchange.
- **On loss.** Flanked Troopers -1 DEF next Exchange.

### 5. Enemy Tactics

Roll 1d6. Equal to or under [[Threat Level|TL]], the enemy presses. Roll 1d6 again.

| 1d6  | Effect                                                       |
| ---- | ------------------------------------------------------------ |
| 1–3  | **Push.** One Trooper of your choice drops one step of Defensive Position. |
| 4–5  | **Press.** Every Flanking and Engaged Trooper drops one step. |
| 6    | **Overrun.** Every Trooper drops one step.                   |

A Trooper already **[[Flanked]]** who drops a step takes -1 DEF instead. The **[[Sergeant]]**, if Fighting and not Suppressed, nullifies a Tactic for 1 Grit.

Next Exchange.

## Falling Back

**[[Disengage]]** (chosen or forced at DEFEAT): each Trooper rolls for 1 Injury and a Death Save by current Momentum. DEFEAT 4-in-6, FALTERING 3-in-6, LOSING GROUND 2-in-6, CONTESTED 1-in-6, GAINING GROUND or better none. One Trooper may lay down their life; everyone else flees uninjured.

Then **[[Retreat]]** into the previous Sector. **Base TL** is the Threat Level of the force the Squad is fleeing.

**1. Declare a maneuver.** [[Break Contact]] or [[Fighting Withdrawal]].

**2. Every Trooper makes a [[Mobility Check]].** Count the passes: this is the **[[Withdrawal]]**. Track who failed.

| Withdrawal | Break Contact | Fighting Withdrawal |
| ---------- | ------------- | ------------------- |
| 0-1        | DISORDERLY    | DISORDERLY          |
| 2          | HARRIED       | HARRIED             |
| 3          | CLEAN BREAK   | CONTROLLED          |
| 4          | CLEAN BREAK   | CONTROLLED          |
| 5          | CLEAN BREAK   | KILL FUNNEL         |

**3. [[Threat Roll]]** (1d6) against Base TL. On Base TL or less, reduce the Withdrawal by the difference, or by 1 if equal. Degrade within your maneuver's column, never below DISORDERLY.

- **+1** falling back to a known Sector. **+1** more if it was prepared beforehand.
- **Fatigue.** -1 per 3 [[Advance|Advances]] or [[Retreat|Retreats]] this mission.

**4. Read the result.**

- **CLEAN BREAK.** Not pursued. No Engagement. Catch Breath.
- **KILL FUNNEL.** The pursuit is annihilated. Base TL halved, rounding up. No Engagement. Catch Breath.

Otherwise, set Momentum and positions for the Sector the Squad falls back into. Degrade both positions one tier for any Trooper who failed their Mobility Check.

| Result     | Momentum       | Offensive | Defensive |
| ---------- | -------------- | --------- | --------- |
| DISORDERLY | LOSING GROUND  | Engaged   | Flanked   |
| HARRIED    | CONTESTED      | Engaged   | In Cover  |
| CONTROLLED | GAINING GROUND | Flanking  | Fortified |

- **CONTROLLED.** Pursued by TL 1. Base TL drops by that much.
- **HARRIED.** Pursued by TL 1 (Base TL 1-2) or TL 2 (Base TL 3-4). Base TL drops by that much.
- **DISORDERLY.** Same pursuing force as HARRIED. Base TL does not drop.

Mobile Hard Targets choose whether to pursue: 2-in-6 on CONTROLLED, 4-in-6 on DISORDERLY.

The Engagement begins immediately against the pursuing force. The Squad may fall back further: the last Sector visited is always safe, beyond it sum the new Sector's TL and any pursuing TL, maximum 4.

## Catch Breath & After

**[[Catch Breath]]** (cleared or empty Sector): Medic Gear treats Injuries, rolling its Usage Die per Injury removed. **[[Ammo]]** redistributes from a Supply Backpack. A quiet moment.

Each surviving Trooper removes 1 Injury when an Engagement ends. Recovery comes from finishing fights, not from walking quiet ground.

**After the Engagement:** who took the biggest risk, what the Squad will still be talking about, whose reputation changed.

**After the Mission:** **[[Grit]]** refills to Capacity, and Capacity rises by 1 per mission survived, max 3. 1 **[[Requisition]]** per surviving Trooper. Injury recovery runs at whatever rate the campaign uses. Then **[[Bond|Bonds]]**, then the **[[Field Report]]**.
