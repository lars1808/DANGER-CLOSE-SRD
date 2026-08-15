# Advancing & Retreating

Upon landing at an LZ the [[Squad]] will start their advance towards their [[Objective]]. When moving between [[Sector|Sectors]], a Squad will be in one of 4 states.

- **[[Advance]]** - Moving forward to a new Sector. Leads to an Engagement or Catch Breath.
- **[[Engagement]]** - In a firefight to clear a Sector. Leads to Retreat or Catch Breath.
- **[[Retreat]]** - Falling back to a previous Sector. Leads to an Engagement or Catch Breath.
- **[[Catch Breath]]** - Reload, recover. Leads to a new Advance.

## Advance

The default state: pushing forwards towards the Objective. This can be narrated as encountering and overcoming minor resistance; the Squad moves from cover to cover, returning fire, eliminating scattered foes.

A Sector without a Threat costs nothing to cross. Advance to the next, or *Catch Breath*.

When a Sector holds a Threat, contact is imminent. Follow these steps:

1. Determine [[Posture|posture]] of Squad
2. Determine if any side has the [[Edge|edge]]
3. Make a [[Contact Roll]] and a [[Threat Roll]]
4. Assign starting positions and [[Momentum]], and start the [[Engagement]].

### Declare Your Posture

Before rolling, declare how the Squad advances. This is a decision, not a roll. It is made before contact, and it cannot be changed after the dice hit the table.

- **Bounding.** Dispersed, weapons up, moving by bounds. The textbook approach. Nothing committed, nothing gained. You take this posture because you will need your [[Ammo]] and your energy later.
- **Assault.** Guns up, moving fast, violence of action. You have given up the quiet approach and bet everything on shock. Spend 2 Ammo to declare Assault. Assault breaks [[Stealth]].
- **Stealth.** Slow, low, silent. Requires Stealth to be active: the enemy is unaware of the Squad's presence in the mission area. Stealth is active at mission start unless the mission states otherwise, and is broken by declaring [[Assault Posture|Assault]], by fighting an Engagement, or by rolling SPOTTED while in Stealth posture.

### The Edge

Some ground is worse for one side than the other. Check once when the Squad enters a Sector.

Look at the conditions in play: darkness, weather, atmosphere, anything the Squad is fighting through rather than standing on. Then ask: **is one side equipped or trained for this, and the other is not?** When in doubt, use the [[Oracle Dice]]; tally up whether the Squad having the edge is Likely, 50-50 or Unlikely, and roll.

| Edge | Is one side more equipped/trained?                           |
| ---- | ------------------------------------------------------------ |
| +1   | The Squad is. Equipment, optics, sealed suits, cold weather gear, doctrine. |
| -1   | The enemy is. Native forces, proper equipment, training.     |
| 0    | Neither side has a clear advantage.                          |

The Edge modifies the **[[Contact Roll]]** directly, before reading it against [[Posture]]. It also gives ±1 ATK each [[Exchange]] in the Engagement that follows. It holds until the conditions change.

> Storm's rolling in, jungle canopy, no moon. The Squad's night and foul-weather drills go back years. The enemy holds a checkpoint dry under a tarp, searchlights up, nobody expecting company.
> Terrain and prep usually sit with whoever's dug in. But this storm favors whoever trained for it, and that's not the checkpoint crew. Call it Likely the Squad holds the Edge going in.

Oracle, Likely: 5. Yes. Squad advances with Edge.

### Contact Roll

Make a **Contact Roll** (1d6), apply the [[Edge]] if one is in play, then read the result against your Posture. The modified roll cannot go below 1 or above 6.

| d6   | Bounding | Assault       | Stealth  |
| ---- | -------- | ------------- | -------- |
| 1    | AMBUSHED | AMBUSHED      | AMBUSHED |
| 2    | SPOTTED  | AMBUSHED      | SPOTTED  |
| 3    | SPOTTED  | AMBUSHED      | SPOTTED  |
| 4    | SPOTTED  | SPOTTED       | SPOTTED  |
| 5    | SPOTTED  | SURPRISE      | SURPRISE |
| 6    | SURPRISE | **OVERWHELM** | SURPRISE |

**OVERWHELM.** Through shock, guts and violence of action, the Squad routs the enemy outright. No Engagement takes place. Nothing beyond what was already spent is lost. *Catch Breath*.

### Threat Roll

Alongside the [[Contact Roll]], make a **Threat Roll** (1d6). If the Threat Roll shows the **[[Threat Level]] or less**, the enemy hinders the Squad: lower the Contact Roll result by the difference between the **Threat Roll** and the **Threat Level**, or by -1 if the Threat Roll and Threat Level are the same.

> Bravo Squad advances Bounding into a Threat Level 3 Sector. Contact Roll: 3, SPOTTED. Threat Roll: 1. That is equal to or below the Threat Level, so the result degrades. The 3 drops by 2, and is now a 1 - the difference between the Threat Roll and Threat Level. Bravo Squad is AMBUSHED. This can never degrade below the effects of having rolled a 1.

**Fatigue.** -1 to the Threat Roll for every 3 [[Advance|Advances]] or [[Retreat|Retreats]] made this mission.

> Having performed 4 Contact Rolls, Alpha Squad makes a Threat Roll: 1d6-1. If lower or equal to the TL of the upcoming Engagement, their Contact Roll result worsens.

**Pour It On.** After the Contact Roll and Threat Roll are resolved, a Squad performing an [[Assault Posture|Assault]] may spend additional [[Ammo]] to raise the final result of the Contact Roll: 2 Ammo per +1. The roof here is 5 - SURPRISE. OVERWHELM cannot be reached this way.

### Positions and Momentum

The Contact Roll sets [[Momentum]] and every Trooper's positions. All Troopers share the Squad's result.

| Result             | Momentum       | Offensive | Defensive |
| ------------------ | -------------- | --------- | --------- |
| AMBUSHED           | LOSING GROUND  | Engaged   | Flanked   |
| SPOTTED            | CONTESTED      | Engaged   | In Cover  |
| SURPRISE           | GAINING GROUND | Flanking  | Fortified |
| SURPRISE (Assault) | GAINING GROUND | Flanking  | In Cover  |

**[[Cover]] and [[Space]]** of the Sector still limit how many Troopers can be [[Fortified]] or Flanking. If there are not enough 'slots' to have all Troopers who can Flank in a [[Flanking]] position, you may pick the Troopers that Flank.

### Stealth: Mobility Checks

In Stealth posture, after the Contact Roll, every Trooper makes a **[[Mobility Check]]**. This is the approach itself: who moved well, and who is the silhouette in the ditch.

- **Passed:** the Trooper's Offensive Position & Defensive Position are equal to the outcome of the Contact Roll (remaining unchanged).
- **Failed:** the Trooper's Offensive Position (Limited < Engaged < Flanking) and Defensive Position (Flanked < In Cover < Fortified) are both one step worse than the one dictated by the squad's outcome of the contact roll.

**Infiltration.** If the result is SURPRISE and every Trooper passed their Mobility Check, the Squad bypasses the Sector entirely. No Engagement, and Stealth holds. Narrate how you pass like ghosts.

**Exploiting Stealth.** Count passed Mobility Checks. For each 2, pick one:

- **Cut Comms.** Stealth survives this Engagement.
- **Target Commanders.** No [[Enemy Tactics]] this Engagement.
- **Trap.** The first [[Hard Target]] this Engagement takes 2 Hits on arrival.
- **Exit Route.** [[Disengage]] is automatic, no [[Injury|Injuries]].

### Sequence in Summary

1. **Declare posture.** Bounding, Assault, or Stealth. Assault costs 2 Ammo. Stealth requires Stealth to be active.
2. **Make a Contact Roll and a Threat Roll.** Apply Edge to the Contact Roll and Fatigue to the Threat Roll. Lower the Contact Roll result by the difference between the **Threat Roll** and the **Threat Level**, or by -1 if the Threat Roll and Threat Level are the same. On an Assault, *Pour It On* may raise the final result.
3. **In Stealth posture, every Trooper makes a Mobility Check.** On SURPRISE with all passed, Infiltrate past the Sector. Otherwise, each 2 passed Checks buy one Stealth pick.
4. **Read the final result.** Set Momentum, assign each Trooper's positions, apply picks. The Engagement begins.

> **Example of play.** SIERRA Squad, all Medium Armor, advances on a comms uplink. The Sector holds a Threat at Threat Level 2, and the enemy does not know anyone is inbound: Stealth is active. They advance in Stealth posture.
> Contact Roll: 5, SURPRISE on the Stealth column. Threat Roll: 2. That is equal to the Threat Level, so the result drops by 1: the 5 becomes a 4, SPOTTED. A sentry catches movement at bad range. Stealth is broken.
> Mobility Checks: three of five Troopers pass. No Infiltration (the result is not SURPRISE), but Stealth was active this Advance, so the Squad counts its passes: 3, buying one pick. They choose Trap.
> The Squad opens the Engagement at CONTESTED, In Cover and Engaged. The two Troopers who failed their Checks are Flanked and Limited: strung out in the open when the flare goes up. The first Hard Target that shows itself takes 2 Hits from the charge they left on the approach.

## Retreat

The Squad falls back to the previous Sector. This happens because [[Momentum]] reached DEFEAT, or because the Squad chose to [[Disengage|disengage]].

Retreat has no detection question: the enemy is already on you. The only question is how well the Squad moves, so the [[Withdrawal|Retreat Roll]] runs on [[Mobility]] alone.

The **Base TL** is the [[Threat Level]] of the force the Squad is fleeing.

### Declare Your Maneuver

- **Break Contact.** Get out clean. You bet on speed and a broken line of sight, and living to fight another day.
- **Fighting Withdrawal.** Peel the pursuers off and draw them onto chosen ground. You will fight, but on your terms, and a perfect withdrawal can annihilate them. If it fails, however, your Squad might bite off more than they can chew.

### Retreat Rolls

Every Trooper makes a **[[Mobility Check]]**. Count the passes: this is the Squad's **Withdrawal**. Read the Withdrawal against your maneuver. Do keep track of who failed and succeeded as well, because this will be used later. 

| Withdrawal | Break Contact | Fighting Withdrawal |
| ---------- | ------------- | ------------------- |
| 0-1        | DISORDERLY    | DISORDERLY          |
| 2          | HARRIED       | HARRIED             |
| 3          | CLEAN BREAK   | CONTROLLED          |
| 4          | CLEAN BREAK   | CONTROLLED          |
| 5          | CLEAN BREAK   | KILL FUNNEL         |

**CLEAN BREAK.** The Squad manages to cleanly [[Break Contact|break contact]], and is not pursued. No Engagement. *Catch Breath*.

**KILL FUNNEL.** The pursuing force runs straight into the Squad's prepared positions and is annihilated. Base TL is halved, rounding up. No Engagement. *Catch Breath*.

### Threat Roll

Alongside, make a **Threat Roll** (1d6) against **Base TL**. If it shows Base TL or less, the pursuit presses: reduce the **Withdrawal** result by the difference between the Threat Roll and Base TL, or by -1 if those values are equal. Degrade within your maneuver's column. It can never fall below DISORDERLY.

- **+1** falling back to a known Sector. An additional **+1** if the Sector was prepared beforehand.
- **Fatigue.** -1 to the Threat Roll for every 3 Advances or Retreats made this mission.

### Positions and Momentum

The **[[Withdrawal|Retreat Roll]]** sets [[Momentum]] and positions for the Sector the Squad is retreating into. 

Set each Trooper's [[Offensive Position]] and [[Defensive Position]] to the Squad's result; if this Trooper failed their Mobility Check, degrade their Offensive Position and Defensive Position by one tier (Flanking>Engaged>Limited and Fortified>In Cover>Flanked).

| Result     | Momentum       | Offensive | Defensive |
| ---------- | -------------- | --------- | --------- |
| DISORDERLY | LOSING GROUND  | Engaged   | Flanked   |
| HARRIED    | CONTESTED      | Engaged   | In Cover  |
| CONTROLLED | GAINING GROUND | Flanking  | Fortified |

- **CONTROLLED.** The Squad is pursued by a **TL 1 pursuing force**, and the Base TL is lowered by that amount.
- **HARRIED.** The Squad is pursued by a **TL 1** (if Base TL 1 or 2) or **TL 2** (if Base TL is 3 or 4) **pursuing force**, and the Base TL is lowered by that amount.
- **DISORDERLY.** The Squad is pursued by a **TL 1** (if Base TL 1 or 2) or **TL 2** (if Base TL is 3 or 4) pursuing force, and the Base TL is NOT lowered.

**Mobile [[Hard Target|Hard Targets]]** such as Tanks, Brutes or Elite Squads choose whether to pursue: **2-in-6** on CONTROLLED, **4-in-6** on DISORDERLY.

The [[Engagement]] begins immediately in the previous Sector against the pursuing force, with the Momentum and positions from the Retreat Roll.

### Falling Back Further

The Squad may retreat again. The last Sector visited is always safe to fall back to. Falling back beyond it risks running into new forces: sum the TL of the new Sector and any pursuing TL (maximum 4).

### Sequence in Summary

1. **Declare maneuver.** Break Contact or Fighting Withdrawal.
2. **Every Trooper makes a Mobility Check.** Count the passes and read the result against your maneuver.
3. **Make a Threat Roll against the Base TL.** Apply Fatigue modifier. If it shows Base TL or less, the pursuit presses: reduce the **Withdrawal** result by the difference between the Threat Roll and Base TL, or by -1 if those values are equal. 
4. **Read the final result.** On CLEAN BREAK or KILL FUNNEL, no Engagement: *Catch Breath*. Otherwise set Momentum and positions, determine the pursuing force, and fight in the previous Sector.

> **Example of play.** DAGGER Squad hits DEFEAT against a Threat Level 3 garrison and Disengages. They fall back toward the ravine they cleared an hour ago and declare a Fighting Withdrawal: bleed the garrison, make it pay for following.
> Mobility Checks: four of five pass. The Squad's Withdrawal is 4: CONTROLLED on the Fighting Withdrawal column. Threat Roll: 2, with +1 for a known Sector: 3. That is equal to the Base TL, so the Withdrawal drops by 1, from 4 to 3. Still CONTROLLED. The band held.
> The garrison sends a TL 1 element after them, and Base TL drops to 2. The Squad turns to fight in the ravine at GAINING GROUND, Flanking and Fortified. The one Trooper who failed his Check is Engaged and In Cover, caught a half-step behind the line. Win this, and the way back up is softer than it was.

## Catch Breath

If a Squad clears a Sector (or finds it empty), they have a chance to catch their breath and regroup. This allows a Trooper to use Medical Gear to bandage the wounded, or [[Ammo]] to be redistributed from a Supply Backpack, as well as narrative/roleplaying moments.
