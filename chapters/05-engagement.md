# Engagement

An **Engagement** is a zoomed-in firefight: the squad locked in a battle that will decide who holds the field. It plays out in [[Exchange|Exchanges]] - rounds of combat. Besides stats such as Trooper health, we track three main elements: [[Momentum]], [[Pressure]] and Trooper Position.

## Momentum

Momentum shows whether the Squad is winning or losing. It represents control of the battlefield, not necessarily literal meters gained. The Squad wins by driving Momentum high enough to rout the enemy, or loses if it falls too low. "+1 Momentum" means improving Momentum by 1 step, for example from FALTERING to LOSING GROUND.

| Momentum            | Description                                                        |
| ------------------- | ------------------------------------------------------------------ |
| **DEFEAT**          | The Squad is ROUTED; forced to fall back.                          |
| **FALTERING**       | No good options; cut losses and fall back, or commit hard.         |
| **LOSING GROUND**   | The enemy has the initiative. Regroup, fall back or commit.        |
| **CONTESTED**       | Even ground. This could still go either way.                       |
| **GAINING GROUND**  | The enemy is giving ground. Keep up the pressure.                  |
| **BREAKING THROUGH**| One more push and the enemy breaks.                                |
| **VICTORY**         | The enemy is routed and/or destroyed.                              |

**Defensive Engagements** (such as sieges or extractions) add two rules on top of standard Momentum:

- **DEFEAT.** The Squad retreats to an adjacent Sector, or is trapped if none is available or this is an Extraction. Each Trooper takes 1 [[Injury]] per Exchange spent at DEFEAT.
- **VICTORY.** Roll {roll:1d6} (+1 for each previous VICTORY this Engagement). If the result exceeds the [[Threat Level]], the enemy breaks and the Engagement ends. Otherwise the Squad gains a round of Reprieve: no immediate foes to attack or be attacked by (so no Offense or [[Defense Roll]]), and Momentum resets to CONTESTED, and Pressure returns to TL as the fight continues.

**Sieges** last until the enemy breaks. **Extractions** last until the enemy breaks or the exfil arrives: the timer is set before the Engagement begins, 6 (quick) to 9 (long) Exchanges, Reprieve exchanges included. When the timer expires, the Squad extracts as per the [[Disengage]] intent.

## Pressure

First contact is the worst of it. The enemy is set, sighted, and firing before the Squad can answer. That weight of fire is **Pressure**, and it only eases once the Squad takes the initiative.

Pressure starts at [[Threat Level|TL]]. Each point imposes **-1 ATK**, removed from the Squad's total pool before dice are allocated to targets.

- When the Squad gains [[Momentum]], Pressure drops by 1.
- Surplus 6s on a [[Offense Roll|Success]] can strip Pressure (see [[Offense Roll]]).
- The [[Flamethrower]] lowers Pressure through its own rules. It is the only weapon that can.
- Pressure never falls below 0 or rises above its starting value.
- **Defensive Engagements**: each new wave (after a Reprieve) re-arms Pressure to TL.

### Edge

**[[Edge]]** carries over from the [[Advance]] or [[Retreat]] that opened this Engagement: ±1 ATK each Exchange, on top of Pressure, holding until conditions change.

## Trooper Position

Each Trooper holds an **Offensive Position** (ability to attack) and a **Defensive Position** (ability to survive). A better Offensive Position adds more dice to the squad's attack; a stronger Defensive Position makes it harder for enemies to land hits. The two pull against each other: better angles of fire usually mean less cover.

Position is an abstraction, not a location. It covers everything from kneeling behind a low wall instead of standing exposed, to sprinting fifty meters into the open. What matters is the state a Trooper is in, not the ground they are standing on. Troopers try to move into advantageous positions; shifts in the battle also shift position involuntarily.

> [!example] In play
> - **Trooper A** is currently **Engaged and Flanked**. *"Trooper A has been raining lead on the enemy - but a few hostiles have circled around, now threatening Trooper A's position."*
> - **Trooper B** is currently **Limited and Fortified**. *"Trooper B took a serious hit a few Exchanges back - and spent the last Exchange haulin' ass, throwing himself behind a barricade. He can't really fire effectively from here - but at least he's safe."*
> - **Trooper C** is currently **Flanking and In Cover**. *"Trooper C has the high ground - clear line-of-sight against whole groups of enemies from solid cover."*

Offensive and Defensive Position form two axes: sketch them as a 3×3 grid to track five Troopers at once, on paper or in a VTT. This is not the game board of DANGER CLOSE, only a way to hold state in view.

In fiction, moving from Engaged to Flanking can be as simple as jumping a barricade to hose a cluster of foes. Moving from Engaged to Limited but becoming Fortified might be diving face-first behind a pile of rubble: unable to fire back effectively, but safe.

## Sector Cover & Space

The Sector's [[Cover]] sets how many Troopers can be **[[Fortified]]** this Engagement. The number is fixed when the Sector is generated and carried in its notation.

| Cover   | Defensive Position Effect                                 |
| ------- | --------------------------------------------------------- |
| Exposed | Never Fortified.                                          |
| Normal  | 1 to 4 Troopers can be Fortified, set at Sector creation. |
| Dense   | Up to 5 Troopers can be Fortified.                        |

[[Space]] works the same way for **[[Flanking]]**.

| Space        | Offensive Position Effect                                |
| ------------ | -------------------------------------------------------- |
| Tight        | Never Flanking.                                          |
| Transitional | 1 to 4 Troopers can be Flanking, set at Sector creation. |
| Open         | Up to 5 Troopers can be Flanking.                        |

If there are not enough slots for every Trooper who could Flank or be Fortified, choose who fills them.
