# Exchange

During an **Exchange**:

1. The Troopers determine their **[[Intent]]**
2. The Squad makes an **[[Offense Roll]]**
3. Troopers make their **[[Defense Roll|Defense Rolls]]**
4. Impact on [[Momentum]] is resolved
5. Enemies telegraph their **[[Enemy Tactics|Tactics]]**

During a **[[Reprieve]]** round (see [[Engagement]]), there is no Offense Roll, no Defense Roll and no Enemy Tactics. Nobody is moving or working under fire: [[Mobility Check|Mobility Checks]] and [[Interact|Interacts]] automatically succeed, within the Sector's [[Cover]] and [[Space]] limits.

## ATK & DEF

Throughout these rules, **ATK** refers to dice (d6s) added to the Squad's Offense Roll, and **DEF** to dice added to or subtracted from a Trooper's Defense Roll. The Squad attacks as one: all ATK from every Trooper is pooled into a single roll that determines whether the Squad gains ground, holds, or gets pushed back. Each Trooper rolls their own Defense Roll to survive incoming fire.

Intent, **[[Gear]]**, position, **[[Pressure]]** and the **[[Edge]]** all add or subtract dice over the course of the Exchange. Tally ATK when the Offense Roll is made, and DEF when each Trooper rolls to survive.

## Intent

Every Trooper that isn't currently [[Bleeding Out]], [[Stabilized]] or [[Dead]] determines their course of action during this Exchange.

Intent describes where a Trooper's **focus** is. Everyone is assumed to be shooting, ducking, reloading and staying alive. A Trooper not Firing may still pick off enemies, but not enough to shift the battle. A Trooper not Moving isn't frozen in place; their tactical position just stays the same.

A Trooper can only pick one Intent. Resolve these in the order most favorable for the Squad. For instance, if you determine that Trooper Jones will Move Up, you can then determine that Trooper Smith will provide Covering Fire.

### Fire

Firing is the staple action. Each **[[ATK]]** increases the odds of gaining **[[Momentum]]**. If nobody Fires, the Squad will likely lose ground. Gear (weapons, equipment) modifies ATK in various ways.

A Trooper's **[[Flanking Bonus]]** is determined by their [[Mobility]]: +1 by default, +2 if Mobility ≥ 4, +3 if Mobility ≥ 5.

Being **[[Suppressed]]** prevents a Trooper from firing. If firing at a [[Hard Target]], set those ATK aside - they are tracked and rolled separately. Always resolve Hard Targets before the general Offense Roll.

| Factor           | Impact     |
| ---------------- | ---------- |
| Fire             | 1 ATK      |
| Flanking Bonus   | +1/2/3 ATK |
| Using 1 [[Ammo]] | +1 ATK     |
| Being [[Limited]]    | -1 ATK     |

### Move

The Trooper repositions on the battlefield. Make a [[Mobility Check]]. [[Grit]] can be used to reroll. Note that Cover and Space might prevent certain movements. For instance, in a [[Tight Space|Tight]] Sector, you cannot Move Up, as Flanking is prohibited.

- **Move Up.** Offensive Position becomes **[[Flanking]]**. Mobility Check: Success = [[In Cover]], Failure = [[Flanked]].
- **Fall Back.** Defensive Position becomes **[[Fortified]]**. Mobility Check: Success = [[Engaged]], Failure = [[Limited]].
- **Reposition.** Offensive Position becomes [[Engaged]]. Defensive Position becomes [[In Cover]]. Mobility Check: Success = +1 **ATK** this Exchange (as the Trooper manages to Reposition and fire at the enemy).

> *"Fall back to the depot! We can't hold this!"* Kappa-1 fires a burst over the barrier and runs, keeping low. A round clips the dirt behind him. He hits the doorframe hard, shoulder first, and pulls himself inside. Worse angle, but nothing's getting through these walls.

### Covering Fire

The Trooper adds **+1 [[DEF]]** to a fellow Trooper. If the covered Trooper Moves this Exchange, they also gain **+1 Mobility** for that Move. Multiple Troopers can provide covering fire to the same Trooper, stacking the DEF and Mobility bonus.

> *"Keep his head down!"* Lambda-5 rattles off a burst toward the window where the muzzle flash was. He's not trying to hit anyone. He just needs them to flinch long enough for Gamma-2 to make it across the street.

### Use Special Gear

Fire heavy weapons, call in airstrikes, or use other equipment. See Special Weapons and Special Equipment. Some gear takes a whole Exchange to use.

### Interact

Do something outside the firefight: Stabilize a Trooper who is [[Bleeding Out]], unjam a weapon, plant demo charges. Some Interactions take multiple Exchanges (noted as `Interact[2]`, etc.).

### Disengage

The entire Squad [[Retreat|retreats]] and all Troopers fall back. Each Trooper rolls to see if they take 1 [[Injury]] (+[[Death Save]]), depending on current [[Momentum]]. Survivors flee to the previous Sector.

| Momentum      | Injury chance |
| ------------- | ------------- |
| DEFEAT        | 4-in-6        |
| FALTERING     | 3-in-6        |
| LOSING GROUND | 2-in-6        |
| CONTESTED     | 1-in-6        |

Optionally, one Trooper can decide to lay down their life to protect the others. This Trooper is killed, but all other Troopers flee uninjured, no rolls.

See **[[Last Stand]]** for the Bleeding Out version of this. It doesn't wait for a Disengage to already be underway.

### Improvise

When a Trooper wants to do something not covered by the other intents, use the [[Oracle Dice|Oracle Die]]. Define the best and worst outcome, set the likelihood, and roll. The Oracle die determines how well it goes, not whether it happens. The Trooper is committed either way.

The cost the Trooper is willing to pay sets the scale of the gain.

- Choosing *Improvise* is already a minor cost: the Trooper isn't Firing.
- Accepting a worse tactical position earns more.
- Taking -DEF earns more still.
- A guaranteed [[Injury]] (no roll needed) earns something substantial.
- A guaranteed death (no roll needed) earns something absolute: the objective is completed, the charges go off, the squad escapes.

The battlefield is not a blank grid. If the fiction says there's a fuel line, a generator, a watchtower, it can be used, destroyed, or turned to advantage. Describe what the Squad sees. Then let that description give you ideas.

## Offense Roll

Pool all ATK from the Squad and roll that many d6s. Take the highest value.

- Subtract **-1 ATK** per point of current **[[Pressure]]**.
- Add or subtract **1 ATK** for the **[[Edge]]**, if any.
- If the pool is 0 ATK, roll {roll:2d6kl1} and take the lowest. Success at a Cost is not available at 0 ATK.

| Offense Roll Result | Outcome                                    |
| ------------------- | ------------------------------------------ |
| ≤ 3                 | **Pushed Back**                            |
| 4–5                 | **Hold Position** OR **Success at a Cost** |
| 6                   | **Success**                                |

### Pushed Back

Lose -1 Momentum. If Momentum reaches DEFEAT, the Squad is routed, as per the Disengage intent.

### Hold Position

Each Trooper gains +1 DEF this Exchange. No Momentum change.

### Success at a Cost

Gain +1 Momentum. -1 DEF for the most at-risk Trooper (most Injuries in the worst [[Defensive Position]]).

If this applies to multiple Troopers, pick one at random. This Trooper also takes +1 [[Injury]] if hit.

If this Momentum gain pushes Momentum to VICTORY, make one final **[[Defense Roll]]** for all Troopers, in which it's not possible to go **[[Suppressed]]**.

### Success

Gain +1 Momentum per 6 rolled, to a maximum of +2 Momentum this Exchange. Each 6 rolled beyond the cap *either* removes **1 Pressure** *or* grants +1 [[Grit]] to a Trooper of choice.

If this Momentum gain pushes Momentum to VICTORY, the Engagement is won and instantly ends (unless a Hard Target is still present, see below). 

If you obtain a Success you can also opt to **Hold Position** instead (each Trooper +1 DEF), as that might be beneficial during defense or extraction missions.

Momentum cannot pass BREAKING THROUGH while a **Hard Target** holds the field. Momentum gain still applies up to that point and its other effects resolve as normal: Pressure drops, positioning shifts, 6s beyond the cap remove Pressure or grant Grit. The Engagement does not end. Allocate accordingly.

If after the Offense Roll, Momentum is not at DEFEAT or VICTORY, the fight continues. The other effects of Momentum gain/loss are resolved after the Defense Roll.

## Defense Roll

Each Trooper rolls individually to resist incoming attacks. Each Trooper has **1 DEF** by default.

- **Beneficial situations**, such as [[Covering Fire]], can add +1 DEF or more.
- **Risky situations** can subtract -1 DEF or more. These will be noted in the specific rules that apply them.

Tally up a Trooper's total DEF.

- If the total is **1 or higher**, roll that many d6 and take the highest (3 DEF = 3d6, take highest).
- If the total is **0 or less**, roll **1 + the negative value** d6s and keep the lowest. At 0 DEF, that means 'roll 2d6 and keep the lowest'. At -1 DEF, it means '3d6 and keep the lowest', and so on.

Spend 1 [[Grit]] to reroll 1d6. You must take the new result.

**[[Armor]]** modifies the final result: [[Heavy Armor]] adds +1, [[Light Armor]] subtracts -1. For example, a Trooper In Cover with Heavy Armor who rolls a 2 treats it as a 3, avoiding injury.

A Trooper takes **Direct Fire** if their final result is equal to or below the following:

| Defense Roll Result | Flanked     | In Cover    | Fortified   |
| -------------------- | ----------- | ----------- | ----------- |
| 1                    | Direct Fire | Direct Fire | Direct Fire |
| 2                    | Direct Fire | Direct Fire | Safe        |
| 3                    | Direct Fire | Safe        | Safe        |
| 4–6                  | Safe        | Safe        | Safe        |

## Injury & Death

Troopers don't track hit points. Each hit adds **Injuries** to a running tally, and the tally sets the odds that the next hit puts the Trooper down. A Trooper is **Fighting**, **[[Bleeding Out]]**, **[[Stabilized]]** or **[[Dead]]**.

### Direct Fire

The **[[Defense Roll]]** failed, bullets (or an equivalent) are hitting closer and closer. The Trooper chooses:

- Suffer Injuries and make a **[[Death Save]]**.
- Hit the ground and become **[[Suppressed]]**.

### Injuries & the Death Save

The severity of Injury suffered depends on the **[[Threat Level]]**:

| Threat Level     | Injury              | Injury (Suppressed) |
| ---------------- | ------------------- | ------------------- |
| 1 - Light        | 1 Injury            | No Injury           |
| 2 - Standard     | {roll:1d2} Injuries | No Injury           |
| 3 - Heavy        | {roll:1d3} Injuries | 1 Injury            |
| 4 - Overwhelming | {roll:1d4} Injuries | 1 Injury            |

Add the Injuries to the Trooper's tally, then make a **Death Save**: roll 1d6. If the result is **greater than** the number of Injuries, the Trooper stays in the fight. Otherwise, they are **Bleeding Out**.

A Death Save is called for whenever the source could plausibly kill outright: Direct Fire, artillery, a crash, a bad Disengage. Lighter sources of Injury raise the tally but don't call for a roll.

### Suppressed

A Trooper that takes Direct Fire can choose to become **Suppressed** instead of taking the full Injury, but only if they are not Suppressed already. Choose this before the severity of Injury is rolled for. A [[Flanked]] Trooper cannot go Suppressed. Suppressed damage depends on the Threat Level, see above; these Injuries never call for a Death Save.

A Suppressed Trooper is hugging dirt. Next Exchange, they can only **[[Move]]** (any kind) or **[[Interact]]**. No [[Fire]], no [[Covering Fire]], no Special Weapons, no [[Improvise]].

- Suppressed clears when the Trooper passes a [[Defense Roll]] or at the end of any Exchange they spend [[Fortified]].
- Being or becoming Fortified clears Suppressed, but only after that Exchange's Offense Roll. The Trooper still loses their action for that Exchange.
- A Suppressed Trooper who fails a second Defense Roll takes the full Injury. They cannot Suppress out of it again.

### Bleeding Out & Stabilize

A **Bleeding Out** Trooper cannot take actions, and dies at the end of the next Exchange unless Stabilized.

**Stabilize** is an Interact Intent option, and costs a full Exchange for the Trooper that provides aid, and always succeeds. A **Stabilized** Trooper is out of the fight but out of danger: they take no actions and are not targeted by normal enemy fire. When the Engagement ends, they return to the fight, keeping their Injuries.

### Last Stand

A Bleeding Out Trooper can go out fighting instead of waiting for help. Declare it the moment it happens. They die after performing their action. Choose one:

- **+4 ATK** to the next Offense Roll. Go out in a blaze of glory.
- The Squad immediately **Disengages**, no Injury rolls for anyone. If some Troopers already failed their Injury roll in this Disengage before the Last Stand was declared, they're spared too. The Trooper's death guarantees a safe retreat for the others.

### Death

Death occurs when:

- A **Bleeding Out** Trooper isn't Stabilized in time.
- A **Bleeding Out** or **Stabilized** Trooper gets hit by something big in fiction. They aren't targeted by regular enemy fire, but an artillery barrage or something similar can still hit them (unless prevented by other Troopers).
- A Trooper is **Bleeding Out** or **Stabilized** when an Engagement is lost. The Squad is forced to retreat, and those out of action are overrun.

## Momentum Gain & Loss

At the end of the Exchange, after the Defense Rolls, resolve the shift in **[[Momentum]]**.

### Momentum Gain

- [[Pressure]] drops by 1 per point of Momentum gained (see [[Engagement]]).
- [[Flanking]] Troopers outrun their cover: drop one step of **Defensive Position**.
- [[Fortified]] Troopers outrun their angles: **-1 ATK** next Exchange.

### Momentum Loss

- [[Flanked]] Troopers find the enemy closing on them: **-1 DEF** next Exchange.

## Enemy Tactics

The enemy doesn't wait for an opening. When the Squad slows, they push, and the harder the sector, the more often they do. At the end of an Exchange, roll {roll:1d6}. On a roll equal to or under [[Threat Level|TL]], the enemy presses. Roll {roll:1d6} again:

| 1d6  | Effect                                                       |
| ---- | ------------------------------------------------------------ |
| 1-3  | **Push.** One Trooper of your choice drops one step of [[Defensive Position]]. |
| 4-5  | **Press.** Every [[Flanking]] and [[Engaged]] Trooper drops one step of Defensive Position. |
| 6    | **Overrun.** Every Trooper drops one step of Defensive Position. |

Your Squad's **[[Sergeant]]**, if Fighting and not Suppressed, can nullify a Tactic at the cost of 1 Grit.

## The End of the Engagement

The steps that make up an Exchange (Intent, Offense Roll, Defense Roll, Momentum Gain & Loss, Enemy Tactics) are repeated until essentially one of 4 things happen:

- The Squad reaches **VICTORY**, catches their breath, and moves on to the next Sector (returning to the [[Advance]])
- The Squad reaches **DEFEAT**, and is forced to retreat. Use the Disengage intent, and the *Retreat!* section in *Advancing & Retreating*.
- The Squad chooses to disengage, and chooses to retreat. Use the Disengage intent, and the *Retreat!* section in *Advancing & Retreating*.
- The Squad is entirely wiped out.

When the Engagement ends, each surviving Trooper removes 1 Injury. Recovery comes from finishing fights, not from walking quiet ground: a Squad cannot clear Injuries by pacing between empty Sectors. Beyond this, recovery runs through Medic Gear.

## After-Action Report

The fighting's over for now. Before you move on, take a moment to look at what just happened.

Not the numbers, the events. An Engagement is a few minutes of chaos compressed into dice rolls and decisions. These questions help you decompress it back into a scene.

You don't need to write anything down. Just think about it. If something sticks, make a note. These details add up over time.

- Which Trooper took the biggest risk, and did it pay off?
- What moment would the squad still be talking about an hour later?
- Did anyone's reputation change in the last few minutes?

These notes will help you with the **[[Field Report]]** later.
