# Mission Phase

Upon landing at an LZ the [[Squad]] will start their advance towards their [[Objective]]. When moving between [[Sector|Sectors]], a Squad will be in one of 4 states.

- **Advance** - Moving forward to a new Sector. Leads to an **Engagement** or **Catch Breath**.
- **Engagement** - In a firefight to clear a Sector. Leads to **Retreat** or **Catch Breath**.
- **Retreat** - Falling back to a previous Sector. Leads to an **Engagement** or **Catch Breath**.
- **Catch Breath** - Reload, recover. Leads to a new **Advance**.

## Advance!

The default state - pushing forwards towards the Objective. This can be narrated as encountering and overcoming minor resistance; the Squad moves from cover to cover, returning fire, eliminating scattered foes.

When arriving in a Sector, its contents determine the next step:

| Sector Content | Next Step                                |
| -------------- | ---------------------------------------- |
| Boon           | *Advance!* to the next or *Catch Breath* |
| Nothing        | *Advance!* to the next or *Catch Breath* |
| Threat         | Make an [[Advance Roll]]                 |

## Advance Roll

The **[[Advance Roll]]** determines the starting position of the Squad in an [[Engagement]], or might even skip the Engagement altogether, if the Squad is lucky/well-equipped.

Determine relevant modifiers:

- **Fatigue**. -1 for each 3 Advance Rolls previously made during this mission.
- **Weather/Environmental Conditions**. -1 if bad, -2 if terrible. If the Squad is clearly advantaged by the environment, gain +1. If clearly disadvantaged, -1.
- **Threat Level**. Negative modifier equal to TL.
- **Assault**. Before rolling the Advance Roll, you may spend [[Ammo]] to enhance the roll, at a rate of 2 Ammo for a +1. You cannot [[Infiltration|Infiltrate]]on the same Advance.
- **Stealth**. If the enemy is unaware of any hostile presence in this mission area, gain +3 on the roll. Using Assault or rolling SPOTTED or worse forfeits this bonus for the rest of the mission.

### Momentum & Defensive Positions

Then, roll {roll:2d6|Advance} and apply the modifiers.

| 2d6      | Result       | Momentum           | Defensive Positions |
| -------- | ------------ | ------------------ | ------------------- |
| ≤ 3      | AMBUSHED     | LOSING GROUND      | [[Flanked]]         |
| 4–8     | SPOTTED      | CONTESTED          | [[In Cover]]        |
| 9–12   | SURPRISE     | GAINING GROUND     | [[Fortified]]       |
| 13+     | **Overwhelm** | -                 | -                   |

**Overwhelm.** Due to a mixture of luck, guts, training and teamwork, the Squad manages to absolutely overwhelm the enemy force. No resources are lost, and the enemy is routed. *Catch Breath*.

### Offensive Position & Infiltration

Each Trooper rolls an individual [[Mobility Check]]. If everyone passes their Mobility Check: The Squad bypasses the Sector entirely. No Engagement, no resources spent. Proceed to the next Sector. Narrate how you pass like ghost.

If not everyone passes, first assign individual [[Offensive Position|Offensive Positions]]. Note that the [[Cover]]/[[Space ]]of the Sector might still limit how many Troopers can be [[Fortified]]/[[Flanking]].

| Result   | Mobility Check Success | Mobility Check Failure |
| -------- | ---------------------- | ---------------------- |
| AMBUSHED | [[Engaged]]            | [[Limited]]            |
| SPOTTED  | [[Flanking]]           | [[Engaged]]            |
| SURPRISE | [[Flanking]]           | [[Engaged]]            |

Then, if Stealth is still active, count the number of successful Mobility Checks among your Troopers. For each 2 Successes, pick one of the  following: 

- **Cut Comms**. [[Stealth]] is preserved throughout and after this  Engagement.
- **Target Commanders**. No [[Enemy Tactics]] this Engagement. 
- **Trap**. The first [[Hard Target]] this engagement takes 2 Hits when it  appears. 
- **Exit Route**. [[Disengage]] is automatic, no Injuries.

## Retreat!

The Squad falls back to their previous Sector. This can happen because Momentum reached DEFEAT, or because the Squad chose to disengage on their own terms.

The Squad declares one of two maneuvers:

- **Break Contact.** Disengage cleanly and avoid pursuit.
- **Fighting Withdrawal.** Draw pursuers out, peeling them off the original Sector and onto chosen ground.

Each Trooper makes a Mobility Check. **Half or more succeeding** means the Squad executed their maneuver well.

| Maneuver            | Half or More Succeed                  | Less Than Half Succeed     |
| ------------------- | ------------------------------------- | -------------------------- |
| Break Contact       | No pursuit. Squad falls back cleanly. | Minor Pursuit              |
| Fighting Withdrawal | Successful Fighting Withdrawal        | Failed Fighting Withdrawal |

The TL of the force the Squad is fleeing from is referred to as **Base TL**.

**Threat Level is abstract.** TL measures enemy capability, not body count. The same group of foes can rate higher in TL when they're ferocious, well-equipped, or coordinated, and lower when they're scattered, demoralized, or worn down. A Remnant TL of 0 doesn't even have to mean that a position is completely abandoned. It might just mean what's left isn't worth tracking as a threat to the Squad.

**Patrol or Position.** If fleeing from a defended position rather than a patrol or hunting force, reduce Pursuing TL by 1 (minimum 1) and increase Remnant TL by 1 (maximum 4). Mobile Hard Targets do not pursue. Defenders hold their ground.

### Minor Pursuit

The Squad is pursued by a TL 1 force. Base TL is not lowered.

### Successful  Fighting Withdrawal

| Base TL | Pursuing TL | Remnant TL |
| ------- | ----------- | ---------- |
| 1       | 1           | 0          |
| 2       | 1           | 1          |
| 3       | 2           | 1          |
| 4       | 3           | 2          |

Mobile Hard Targets, such as Tanks, Brutes, Elite Squads etc. have a 2-in-6 chance of choosing to pursue.

### Failed  Fighting Withdrawal

| Base TL | Pursuing TL | Remnant TL | Starting Pressure |
| ------- | ----------- | ---------- | ----------------- |
| 1       | 1           | 0          | 1                 |
| 2       | 2           | 1          | 2                 |
| 3       | 2           | 2          | 3                 |
| 4       | 3           | 2          | 4                 |

Mobile Hard Targets, such as Tanks, Brutes, Elite Squads etc. have a 4-in-6 chance of choosing to pursue.

### Retreat Roll

Make an Advance Roll, with these changes:

- Pursuing TL is the modifier (not Sector TL)
- +1 for falling back to a known Sector. An additional +1 if Sector is prepared beforehand (defenses and such).
- +1 on a Successful Fighting Withdrawal
- Stealth does not apply

The results of the Advance Roll are interpreted in the context of a retreat:

- AMBUSHED becomes **DISORDERLY RETREAT**. The fall-back collapses into chaos. The Squad is scattered, the enemy on their heels.
- SPOTTED becomes **HARRIED**. The Squad gives ground but holds formation. Pursuers harass without breaking through.
- SURPRISE becomes **CONTROLLED RETREAT**. The Squad falls back in good order, choosing their ground.
- Overwhelm becomes **KILL FUNNEL**. The pursuing force runs straight into the Squad's prepared positions and is annihilated. No Engagement.

Effects on Momentum and Defensive Positions are identical to the Advance Roll. Offensive Position is set by individual Mobility Checks, as normal.

The Engagement begins immediately in the previous Sector with the Pursuing TL, the Momentum and Defensive Positions from the Retreat Roll, and any listed Starting Pressure already on the track.

### Falling Back Further

The Squad can choose to retreat *again*.

The last Sector visited is always safe to fall back to. Falling back beyond that risks running into additional forces. If caught between new forces and pursuing forces, sum up the TL of the new Sector and any pursuing TL (to a maximum of 4), and set Pressure to its cap immediately.

## Catch Breath

If a Squad clears a Sector (or finds it empty), they have a chance to catch their breath and regroup. This allows a Trooper to use Medical Gear to bandage the wounded, or Ammo to be redistributed from a Supply Backpack, as well as narrative/roleplaying moments.
