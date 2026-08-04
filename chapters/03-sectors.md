# Sectors

A **Sector** is a distinct location visited during a mission, defined by its [[Cover]], [[Space]] and [[Threat Level]]. The contents of Sectors can be determined in advance for the entire mission, or upon entering a Sector for the first time.

A Sector is not a fixed distance. Two places a hundred meters apart are separate Sectors if they would feel different under fire. A loading yard, the catwalk above it, and the elevator platform at the far end are three Sectors: crossing open ground, fighting along a narrow walkway, then holding position while the lift arrives.

A kilometer of wilderness is one Sector if the fight only matters at one point: a bridge, a roadblock, a ravine, a fortified ridge. The rest is approach and aftermath.

When the scale changes, only the fiction changes. The [[Contact Roll]] is a valley crossing or the breaching of a single room. [[Fortified]] is a dugout or a doorframe. [[Flanking]] is a ridgeline or a corner. The positions are the same abstractions.

## Notation

Sectors are noted down as

> **[Sector Name] / [Cover] / [Space] / Threat Level**

For example: Fortified Promenade / C3 / S5 / TL2.

The numbers after C and S indicate how many Troopers can be Fortified and Flanking, respectively.

## Cover

A Sector's Cover describes how much of the ground can stop a bullet. A Sector with high cover will have plenty of solid objects for Troopers to hide behind.

Roll {roll:1d6|Cover}. Cover is expanded upon in [[Engagement|Engagements]].

| 1d6  | Cover                                       | Max. Fortified |
| ---- | ------------------------------------------- | -------------- |
| 1    | **Exposed.** No real cover.                 | 0              |
| 2-4  | **Normal.** Scattered cover.                | Variable (1d4) |
| 5-6  | **Dense.** Rubble, solid walls, barricades. | 5              |

The keywords **[[Exposed Cover|Exposed]]**, **[[Normal Cover|Normal]]** and **[[Dense Cover|Dense]]** are used elsewhere as easy references. It is both natural language ("The Squad is exposed on this ridge") as well as mechanical ("Troopers cannot be Fortified in this Sector").

## Space

A Sector's **Space** describes the degree to which the battlefield is open or cramped, and allows Troopers to maneuver. Whereas Cover is about defense, Space is about the ability to flank and attack. See Engagements. Roll {roll:1d6|Space}.

| 1d6  | Space                                                        | Max. Flanking  |
| ---- | ------------------------------------------------------------ | -------------- |
| 1    | **Tight.** Tunnels, narrow corridors, trenches.              | 0              |
| 2–4  | **Transitional.** Courtyards, broken streets, alleyways, scattered ruins. | Variable (1d4) |
| 5–6  | **Open.** Plazas, squares, promenades, fields.               | 5              |

## Sector Identity

Give the Sector a name, drawn from its Cover, Space and the Area of Operation: Ruined Carpark, Ravaged Square, Fortified Promenade.

Write one sentence on what the Squad sees: Burnt-out vehicles, Collapsed scaffolding, Flickering floodlights.  They are what Troopers reach for when [[Advance|Advancing]], or through the *Improvise* intent during an [[Engagement]].

Then ask what makes this ground different from the last: a ridge, a fuel tank, waist-deep water. One thing is enough. See **Sector Features** at the end of this chapter if nothing comes to mind.

### Examples

| Sector               | Cover   | Space        | Feature                             |
| -------------------- | ------- | ------------ | ----------------------------------- |
| Shell-torn boulevard | Exposed | Open         | Long sightlines, few safe crossings |
| Bunker corridor      | Dense   | Tight        | Blind corners, sealed doors         |
| Flooded underpass    | Normal  | Transitional | Waist-high water, stalled vehicles  |
| Metal catwalk        | Exposed | Tight        | Drop below, no room to spread out   |
| Engine room          | Dense   | Tight        | Pipes, heat, volatile machinery     |
| Forest acre          | Normal  | Transitional | Trees, mud, poor visibility         |

## Sector Contents

On entering a Sector, roll {roll:1d6|Sector contents} to find what is waiting.

| 1d6  | Contents      |                                                 |
| ---- | ------------- | ----------------------------------------------- |
| 1-2  | **Threat**    | Roll on the **Threat Level** table below.       |
| 3    | **[[Challenge]]** | A problem the Squad has to solve. See below.    |
| 4    | **[[Sign]]**      | Something that tells the Squad what lies ahead. |
| 5    | **Nothing**   | [[Advance]] onward, or [[Catch Breath]].                |
| 6    | **[[Boon]]**      | Roll on the Boon Table.                         |

How much of the mission is fighting is a decision, not a die roll. Ask where the Squad is:

- **Behind the lines.** [[Infiltration]], long approaches, ground the enemy does not hold in strength. Roll 2d6 and keep the highest.
- **Contested ground.** The default. Roll 1d6.
- **In the teeth of it.** Assaults into prepared positions, counterattacks, the collapse of a front. Roll 2d6 and keep the lowest.

If the Mission is straight-up frontline combat, skip this table entirely and roll Threat Level directly. On a **6**, the Squad meets light resistance and finds something worth having: roll on the Boon Table as well.

### Threat Level

Enemy forces hold the Sector. Roll {roll:1d6|Threat Level} and read across from the Mission's [[Difficulty]].

| 1d6  | Routine | Hazardous | Desperate |
| ---- | ------- | --------- | --------- |
| 1    | TL 2    | TL 3      | TL 4      |
| 2    | TL 2    | TL 3      | TL 3      |
| 3    | TL 1    | TL 2      | TL 3      |
| 4    | TL 1    | TL 2      | TL 2      |
| 5    | TL 1    | TL 2      | TL 2      |
| 6    | TL 1    | TL 1      | TL 1      |

Threat Level ranges from 1 to 4, also named *Light - Standard - Heavy - Overwhelming*. Difficulty sets how hard the fights are. The Sector Contents roll sets how often they happen.

The last Sector visited stays cleared. Others are not safe forever. Patrols roam.

**Optional: Tempo.** The last Threat Level roll shapes the next one. Read the die, not the resulting Threat Level.

- Rolled a **1-2**: the next Threat Level roll is 2d6, keep the highest. 
- Rolled a **3-4**: roll 1d6 as normal. 
- Rolled a **5-6**: the next Threat Level roll is 2d6, keep the lowest. 

Modifiers do not stack, and each roll sets the tempo for the one after it. A brutal fight buys the Squad a quiet approach. Quiet ground means something is coming.

### Challenge

A problem caused by the terrain, the environment, the mission, or the people in the area. It is not an [[Engagement]], though failure may create one.

Resolve it with the [[Oracle Dice|Oracle Die]], a [[Trooper Roll]] if one Trooper takes point, or a [[Squad Roll]] if the Squad works the problem together.

| 1d6  | Challenge                                                    |
| ---- | ------------------------------------------------------------ |
| 1    | **Blocked Route.** Rubble, wreckage, fallen trees, sealed bulkheads, collapsed tunnels, blown bridges. |
| 2    | **Dangerous Ground.** Mines, fire, flooding, radiation, thin ice, toxic air, unstable ruins. |
| 3    | **Failing Systems.** Dead power, jammed comms, locked doors, damaged controls, failing life support. |
| 4    | **Human Problem.** Civilians, prisoners, wounded friendlies, deserters, panicked locals, rival troops. |
| 5    | **Time Pressure.** Patrols closing in, weather worsening, extraction window shrinking, enemy forces redeploying. |
| 6    | **Bad Information.** False intel, wrong coordinates, changed terrain, missing landmark, compromised route. |

Get through cleanly, or get through at a cost: lost time, spent [[Ammo]], reduced [[Mobility]], a Grazed Trooper, a worsened position, a Threat waiting in the next Sector. Fail badly and the situation escalates. The route closes. The [[Objective]] moves. The shooting starts.

### Sign

The Squad reads the ground. Tracks in the mud, a body left where it fell, cook fires, engine noise carrying across the valley, a wire running somewhere it should not.

A Sign is not information handed over. It is information the Squad has to act on. Decide what it points at, and where. The Sector itself is empty.

| 1d6  | Sign                                                         |
| ---- | ------------------------------------------------------------ |
| 1    | **Passage.** Something moved through here, and not long ago. What was it, and where did it go? |
| 2    | **The Fallen.** Someone died here and was left. Who, and what killed them? |
| 3    | **Preparation.** Someone worked this ground before you. What did they build, and what is it protecting? |
| 4    | **Absence.** Something should be here and is not. What is missing, and what took it? |
| 5    | **Distance.** Something carries across the ground. Noise, light, movement, a smell. What is it, and how long until it matters? |
| 6    | **Compromise.** The enemy knows something they should not. What, and who told them? |

## Boon Table

Roll {roll:1d6|Boon}.

| d6   | Boon                                                         |
| ---- | ------------------------------------------------------------ |
| 1    | **Ammo Cache.** All Troopers gain +1 Ammo.                   |
| 2    | **Enemy Intel.** A vantage point, wounded scout or intercepted comms signal gives you +1 on the next [[Contact Roll]]. |
| 3    | **Prepared Ground.** Someone was here before you, and they left gifts. Razor wire, traps, pre-sighted kill zones, a friendly mine field. Easily avoided by your Squad. If enemy forces pursue you into this Sector, gain +1 [[Momentum]] automatically. |
| 4    | **Fallen Friendlies.** A slain friendly squad, with {roll:1d3} [[Ammo]] and Special Weapons ({roll:1d6}): 1-3 an LMG // 4-5 a Sniper Rifle // 6 Rocket Launcher |
| 5    | **Positions Revealed.** A comms relay, interrogated foe or briefing from Command informs you of the Threat Level and Cover of all adjoining Sectors. |
| 6    | **Rookies.** An eager squad of rookies, local militia or fresh recruits joins up with you. Their awe of the Squad is palpable. They act as a sizable group (**+2 ATK**). See [[Attached Forces]] in the Engagement section. |

## Sector Features

Optional. Roll {roll:1d6|Sector feature} or pick one element that makes this Sector different from the last.

Each entry is a fiction prompt. The mechanical effects are suggestions, not fixed rules. Some reference terms from the Engagement chapter. Ignore them on a first read.

1. **Elevated Position.** A ridge, rooftop, gantry, or cliff face. Whoever holds it has the advantage. If the Squad holds the high ground, Fortified Troopers might gain **+1 ATK** from clear sight lines. If the enemy holds it, the Squad might suffer **-1 ATK** shooting uphill. Can change hands through movement. The [[Contact Roll]] result suggests who starts with it.
2. **Volatile Element.** Fuel storage, ammunition stockpile, gas pockets, unstable machinery. Before the Engagement starts, define what it is and where it sits. Either side can target it: treat it as a separate [[Hard Target]] pool. If it blows, it might deal **+3 ATK** worth of damage, reduce Defensive Positions, or create smoke.
3. **Concealment.** Underbrush, fog, smoke, tall grass, industrial haze. Can grant +1 on the Contact Roll. In combat, it might grant **+1 DEF** for the first [[Exchange]], or for the whole Engagement if the fiction supports it.
4. **Unstable Ground.** Mud, rubble, ice, shifting debris, flooded terrain. **-1 [[Mobility]]** for all Troopers this Engagement. Movement becomes riskier, [[Flanking Bonus|Flanking Bonuses]] might drop a tier. The enemy suffers too.
5. **Collateral Risk.** Civilians, prisoners, fragile objectives, sacred ground, volatile cargo. If the Squad's **ATK** pool reaches 7 or higher, roll {roll:1d6}: on a **1-2**, something goes wrong. Consequences are fictional but real. Precision matters. Heavy weapons become liabilities.
6. **Interactable.** Floodlights, blast doors, bridge controls, generators, cranes, consoles. A Trooper can spend their [[Intent]] to activate it. Cutting the lights might grant Concealment. Opening a door might create a flanking route. Activating machinery might crush a Hard Target.