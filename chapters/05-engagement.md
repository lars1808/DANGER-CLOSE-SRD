# Engagement

An **Engagement** is a zoomed-in firefight: the squad locked in a battle that will decide who holds the field. It plays out in [[Exchange|Exchanges]] - rounds of combat. Besides stats such as Trooper health, we track three main elements: [[Momentum]], [[Pressure]] and Trooper Position.

## Momentum

Momentum shows whether the Squad is winning or losing. It represents control of the battlefield, not necessarily literal meters gained. The Squad wins by driving Momentum high enough to rout the enemy, or loses if it falls too low.

"+1 Momentum" means improving Momentum by 1 step (for example, from FALTERING to LOSING GROUND).

| Momentum            | Description                                                        |
| ------------------- | ------------------------------------------------------------------ |
| **DEFEAT**          | The Squad is ROUTED; forced to fall back.                          |
| **FALTERING**       | No good options; cut losses and fall back, or commit hard.         |
| **LOSING GROUND**   | The enemy has the initiative. Regroup, fall back or commit.        |
| **CONTESTED**       | Even ground. This could still go either way.                       |
| **GAINING GROUND**  | The enemy is giving ground. Keep up the pressure.                  |
| **BREAKING THROUGH**| One more push and the enemy breaks.                                |
| **VICTORY**         | The enemy is routed and/or destroyed.                              |

## Momentum & Defense

Engagements that revolve around defense follow normal Engagement/Momentum rules, with two additions: DEFEAT consequences and VICTORY Reprieve rounds.

- **DEFEAT**: If Momentum reaches DEFEAT, the Squad retreats to an adjacent Sector. If no Sector is available, or if this is an Extraction, the Squad is trapped. Each Trooper takes 1 Injury for every Exchange spent at DEFEAT.
- **VICTORY**: If Momentum reaches VICTORY, roll {roll:1d6}. If the result is over the [[Threat Level]], the enemy breaks and the Engagement ends. Add +1 for each previous VICTORY reached during this Engagement. If the enemy does not break, the Squad gains a round of Reprieve. No Defense Roll is made during this round. Momentum then resets to CONTESTED and the fight continues.

**Sieges** last until the enemy breaks.

**Extractions** last until the enemy breaks, or the exfil arrives. The exfil timer is set before the Engagement begins, ranging from 6 (quick) to 9 (long) Exchanges. Reprieve exchanges count as well. When the timer 
expires, the Squad extracts as per the Disengage intent.

### Pressure

First contact is the worst of it. The enemy is set, sighted, and firing before the Squad can answer. That weight of fire is **Pressure**, and it only eases once the Squad takes the initiative.

Pressure starts at [[TL]]. Each point imposes **-1 ATK**, removed from the Squad's total pool before dice are allocated to targets.

- When the Squad gains [[Momentum]], Pressure drops by 1.
- Surplus 6s on a [[Offense Roll|Success]] can strip Pressure (see [[Offense Roll]]).
- The [[Flamethrower]] lowers Pressure through its own rules. It is the only weapon that can.
- Pressure never falls below 0 or rises above its starting value.
- **Defensive Engagements**: each new wave re-arms Pressure to [[TL]]. Hold the line and the weight comes back with every assault.

Momentum says who is winning. Pressure says how hard the enemy is firing. The first you fight over. The second you grind down.

## Trooper position

Each Trooper balances their **Offensive Position** (ability to attack) and **Defensive Position** (ability to survive). Better angles of fire often mean less cover; safer positions often limit impact.

A better Offensive Position adds more dice to the squad's attack; a stronger Defensive Position makes it harder for enemies to land hits.

Every round is a tug-of-war: do you risk exposure to build more firepower, or hunker down and hope your squad mates push Momentum forward without you?

> [!example] In play
> - **Trooper A** is currently **Engaged and Flanked**. *"Trooper A has been raining lead on the enemy - but a few hostiles have circled around, now threatening Trooper A's position."*
> - **Trooper B** is currently **Limited and Fortified**. *"Trooper B took a serious hit a few Exchanges back - and spent the last Exchange haulin' ass, throwing himself behind a barricade. He can't really fire effectively from here - but at least he's safe."*
> - **Trooper C** is currently **Flanking and In Cover**. *"Trooper C has the high ground - clear line-of-sight against whole groups of enemies from solid cover."*

Since each Trooper always has an Offensive and Defensive Position, we can envision it as 2 axes, creating a 3×3 grid.

This grid is not the 'game board' of DANGER CLOSE - it is simply a way to visualize the Offensive- and Defensive Position of 5 Troopers at the same time. Sketch it out on paper and use tokens, or use it in a VTT to easily track Troopers during an Engagement.

A Trooper's Offensive- and Defensive Position are **abstractions**. Simply put, they are the dials of risk and reward. Troopers will be trying to move into advantageous positions, while shifts in the battle will also shift their position involuntarily.

In fiction, moving position from Engaged to Flanking can be as simple as "jump over the barricade you've been using as cover to really hose lead on a cluster of foes". Switching from Engaged to Limited but becoming Fortified in the process might be something as simple as "diving face-first behind a pile of rubble"; you're unable to fire back effectively (for the time being), but you are safe.

## Sector Cover & Space

The Sector's [[Cover]] value (as set when initially creating the Sector) determines how many Troopers can be **Fortified** during this Engagement:

| Cover       | Defensive Position Effects                      |
| ----------- | ----------------------------------------------- |
| 0 - Exposed | Never Fortified.                                |
| 1 - Normal  | 1d4 Troopers can be Fortified*.                 |
| 2 - Dense   | No limit on how many Troopers can be Fortified. |

Similarly, the Sector's [[Space]] value determines the space Troopers have for offensive maneuvers, in the form of how many can **Flank** at the same time:

| Space           | Offensive Position Effects                           |
| --------------- | ---------------------------------------------------- |
| 0 - Tight       | Never Flanking.                                      |
| 1 - Transitional | 1d4 Troopers can be Flanking. |
| 2 - Open        | No limit on how many Troopers can be Flanking.       |

*Roll 1d4 to determine Cover and/or Space slots when the Squad first enters this Sector, and note it down in case the Sector gets revisited.

## Tactical Asymmetry

At the start of the Engagement, check the terrain for tactical asymmetry:

- **+1 ATK each Exchange** if the Squad holds a clear advantage the enemy doesn't share: elevation, more cover than the enemy, fortifications, better sightlines.
- **-1 ATK each Exchange** if the enemy holds that advantage and it can't be easily overcome (entrenched positions, high ground, fighting uphill into prepared defenses).
- **No modifier** if neither side has a clear edge, or both stumbled into the fight on equal ground.
