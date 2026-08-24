# Equipment, Gear & Support

Troopers can be equipped with various armor and weaponry. Beyond what the Squad carries into a [[Sector]], Command can be called on for fire from outside it.

All Troopers are, by default, equipped with **[[Medium Armor]]**, **[[Assault Rifle|Assault Rifles]]** and plenty of [[Ammo|ammo]]. They can swap out their basic gear, and elect to bring either Special Weapon and/or Special Equipment. Gear can be acquired in the field, or through **[[Requisition]]**.

## Requisition

**Requisition** measures a Squad's access to rare gear, earned through success and Command's favor. After each [[Mission]], gain 1 Requisition per surviving Trooper; an abstract resource representing commendations, salvage rights, or supply drops.

Spend Requisition between missions to equip Special Weapons, Special Gear, or better [[Armor]]. The Squad may pool their points for pricier items, reflecting collective bargaining or pure luck. Costs are listed as `[REQ X]`; items without a cost are freely available.

## Mobility

Each Trooper has a **base Mobility of 4**. Armor and gear reduce this value. Mobility is the target number for all 
Mobility Checks: roll 1d6 equal or under to succeed. A Trooper with Mobility 0 automatically fails all Mobility Checks. 

Each 2 [[Injury|Injuries]] lower Mobility by 1.

| Mobility | Flanking Bonus |
| -------- | -------------- |
| 0-3      | **+1 ATK**     |
| 4        | **+2 ATK**     |
| 5        | **+3 ATK**     |

## Armor

| Armor  | Properties              | Mobility Cost |
| ------ | ----------------------- | ------------- |
| Light  | -1 to final DEF result. | +1            |
| Medium | -                       | 0             |
| Heavy  | +1 to final DEF result. | -1            |

### Special Armor

| Armor              | Properties              | Mobility Cost | REQ Cost |
| ------------------ | ----------------------- | ------------- | -------- |
| Power Armor Mk. I  | +1 to final DEF result. | 0             | 3        |
| Power Armor Mk. II | +1 to final DEF result. | +1            | 5        |

**Integrated Gear (2 REQ on top of the gear's own cost).** Integrate one piece of Special Equipment into a Trooper's armor. It no longer has an effect on mobility and doesn't occupy an equipment slot. If the Trooper dies in combat, the armor is ruined and the gear is lost.

## Weapon Properties

| Weapon         | Properties                                                   |
| -------------- | ------------------------------------------------------------ |
| Carbine        | **+1 ATK** when [[Engaged]] in [[Tight Space]]. **-1 ATK** when [[Engaged]] in [[Open Space]]. |
| Assault Rifle  | No special properties. The reliable workhorse.               |
| Marksman Rifle | **+1 ATK** when [[Engaged]] in [[Exposed Cover]]. **-1 ATK** when [[Engaged]] in [[Dense Cover]]. |

## Special Weapons

A Trooper can carry **1 Special Weapon**. Special Weapons can have passive conditional functions and/or active applications that require [[Ammo]] to use.

### Utility Kit

`REQ: 0 // Mobility: No cost`

Smokes, flares, flashbangs. The essentials. 

Active (1 Ammo each):

- **Smoke.** Pop smoke. The entire Squad gains +1 Mobility this [[Exchange]]. The user may also [[Move]].
- **Flashbang.** Tight spaces only. The user can still fire this Exchange, and gains the ATK benefit of [[Flanking]].
- **Flare.** Outdoors only. Signal for an aerial strike, if available. +2 ATK if sky is obstructed (canopy, alleyways), +3 ATK normally, +4 ATK under explicitly open sky. All Troopers must make a [[Mobility Check]] or take an [[Injury]] (no [[Death Save]]).

### LMG 

`REQ: 1 // Mobility: -1`

Light automatic weapon for mobile suppression and supporting fire.

*Passive:* 

- An additional +1 DEF for a Trooper receiving Covering Fire.

### HMG 

`REQ: 2 // Mobility: -2`

Heavy-caliber weapon best deployed from a braced or fortified position.

*Active:* 

- Provide [[Covering Fire]] for up to 3 Troopers this round. Costs 1 Ammo regardless of number of Troopers covered.

*Passive:* 

- **+1 ATK** when [[Fortified]].

### Sniper Rifle

`REQ: 1 // Mobility: -1`

Long-range rifle optimized for precision shots from cover.

*Passive:* 

- **+1 ATK** when [[Fortified]]. An additional **+1 ATK** when [[Fortified]] and didn't [[Move]] in the previous Exchange.

### Grenade Launcher 

`REQ: 1 // Mobility: -1`

Indirect-fire weapon used to flush enemies or hit hard targets.

*Active:* 

- Launch a grenade against a [[Hard Target]] (counts as a Hit), or at another Trooper's target, granting them the benefit of [[Flanking]] in the next Offense Roll. Multiple grenades can be fired in one attack - each costing 1 Ammo.

### Melee Weapon 

`REQ: 0 // Mobility: -1`

A large maul, chainsaw sword or similar device. Not available in every setting.

*Passive:* 

- Instead of a Move action, a Trooper with a Melee Weapon can close to melee: set [[Defensive Position]] to **[[Flanked]]** and gain a flat **+3 ATK** this Exchange. This works even in [[Tight Space]], where Flanking is normally prohibited.

### Rocket Launcher

`REQ: 1 // Mobility: -1`

Anti-armor launcher designed to destroy vehicles and strongpoints.

*Active:* 

- **+3 ATK** - or deal direct damage to a [[Hard Target]], counting as 2 Hits. Single use.

### Flamethrower

`REQ: 2 // Mobility: -2`

Short-range incendiary weapon. Clears bottlenecks, denies ground.

*Active:*

- At the cost of 1 Ammo, instead of contributing [[ATK]] to the [[Offense Roll]], reduce [[Pressure]]. -3 Pressure in [[Tight]], -2 in [[Transitional]], -1 in [[Open]].

### Plasma Rifle

`REQ: 3 // Mobility: -1`

A devastating energy weapon prone to catastrophic feedback.

*Active:* 

- Roll {roll:1d6|Plasma} on use. Does not require Ammo. Injuries trigger a [[Death Save]].

| 1d6 | Result |
| --- | ------ |
| 1   | **Catastrophic Failure.** Trooper suffers +2 Injury, weapon is destroyed. |
| 2–3 | **Dangerous Discharge.** Trooper suffers +1 Injury. +1 ATK. |
| 4–5 | **Stable Discharge.** +2 ATK, or deal 1 Hit to a Hard Target. |
| 6   | **Overcharged Blast.** +3 ATK, or deal 2 Hits to a Hard Target. |

## Special Equipment

A Trooper can carry **1 piece of Special Equipment**.

### Demolition Charges

`REQ: 0 // Mobility: -1`

*Bulky, high-power charges. No use in a fight - but crucial if a mission revolves around destroying critical infrastructure.*

Placing charges can be done once a [[Sector]] is cleared, or during an [[Engagement]]. If done during an Engagement, Momentum must be GAINING GROUND or greater. The Trooper must commit 2 [[Exchange|Exchanges]] to placing the charges: 1 to move towards a suitable point to place them (acts as [[Move|Moving Up]]), 1 to set the charges. 

### Jump Pack

`REQ: 2 // Mobility: -1`

*Back-mounted miniature jet engine. Takes quite some time to recharge after use.*

Once per Engagement, the Trooper can instantly shift to an [[Offensive Position|Offensive]]/[[Defensive Position|Defensive]] position of choice, as long as it's permitted by the [[Cover]] and [[Space]].

### Drone Gear

`REQ: 0 // Mobility: -1`

*Backpack with a deployable aerial recon drone.*

Add +1 to each [[Contact Roll]]. Does not stack with multiple Drone Gear.

### Ballistic Shield

`REQ: 1 // Mobility: -2`

*Full-body ballistic shield. Heavy, slow, and the only thing between the Squad and open ground.*

A Trooper can use their Intent to **Raise Shield.** Defensive Position becomes Fortified, ignoring Cover limits. Opens one additional Fortified slot this Exchange for another Trooper to Move into. Can be used while Suppressed. Can be held multiple Exchanges.

### Medic Gear 

`REQ: 0 // Mobility: -1`

*Bandages, combat stims, splints and sprays.*

Can be used out of combat to heal [[Injury|Injuries]]. Has a **Usage Die** of **d8** when fully stocked. Roll the Usage Die for each Injury removed. If the die comes up on a 1 or a 2, reduce its size (d8>d6>d4). If rolling a 1-2 on a d4, it's fully depleted.

### Radio Gear

`REQ: 1 // Mobility: -1`

*Bulky backpack-sized transmitter and receiver, allowing one to reach command - even over electrostatic disruptions.*

Required to call in exfil and call in **[[Support]]**. When used in combat, requires [[Interact]][1].

### Supply Backpack

`REQ: 1 // Mobility: -1`

*Tactical sack stuffed with a variety of ammo, munitions and grenades.*

Holds 6 extra [[Ammo]], which can be redistributed outside of combat.

### Environmental Gear

`REQ: 0 // Mobility: -1`

*Gear for special traversal or dangerous environments, such as climbing gear or hazmat suits. Define what the gear is upon pickup.*

Allows Troopers to withstand dangerous environments or traverse hazardous terrain. One set provides equipment for 2 Troopers.

## Support

The Squad can call on firepower from beyond the [[Sector]]: artillery, naval guns, mine drops, orbital strikes, whatever the setting offers. This is abstracted as **Support**, called in through Radio Gear by a Trooper acting as **Radio Operator**.

### Support Priority

Each mission has a **Support Priority** pool, set during the [[Mission]] alongside [[Difficulty]] and [[Airspace]]. It measures how much Command cares.

| Mission Importance               | Support Priority |
| -------------------------------- | ---------------- |
| Routine patrol or independent op | 2                |
| Standard mission                 | 4                |
| High-priority operation          | 6                |
| Set-piece offensive              | 8+               |

The pool is shared across the Squad and persists for the entire mission.

### Calling Support

Calling Support is an Interact[1] action. The Radio Operator must be present and able to act. A Trooper who is [[Bleeding Out]] or [[Dead]] cannot call. 

Roll 1d6. The result must be equal to or under the current Support Priority pool.

- **Success.** Support is called in. Subtract its cost from the pool.
- **Failure.** The Radio Operator can push through by paying double the cost. Support is called in. If the pool cannot cover double, the call fails and the  window closes. Try again next Exchange.

Support cannot be attempted if the pool is below the base cost.

### Support Options

| Support                | Cost | Use                                                 |
| ---------------------- | ---- | --------------------------------------------------- |
| Danger Close Artillery | 1    | During an Engagement, on the Squad's current Sector |
| Minefield Drop         | 2    | Called down on area between Sectors                 |
| Heavy Bombardment      | 3    | On a known Sector with confirmed enemy presence     |
| Command, Air, Evac     | 1-2  | Calls in a Support Character*                       |

*Found in the Commander's Toolkit

### Danger Close Artillery

Call in a strike on the Squad's current Sector. It lands 1d2 Exchanges from now. 

When it lands, gain **+2 [[Momentum]]** and all ground-based [[Hard Targets]] are destroyed. Every Trooper makes a [[Mobility Check]] or takes {roll:1d3} Injuries and a **[[Death Save]]**.

### Minefield

Called between Sectors. A lane between two adjacent Sectors of the Squad's choosing is now mined. The mines persist for the rest of the mission. The Squad knows the safe paths and may cross the lane freely.

When any other force attempts to cross the mined lane, roll 1d6.

For thinking enemies (professional military, organized forces, anything with normal self-preservation):

- 1-3: Mines spotted. The force halts or reroutes. Pursuit fails; the lane is closed to them.
- 4-6: Mines triggered. The force takes severe losses and halts, losing 1 [[Threat Level|TL]]. Pursuit fails. Any subsequent pursuit through this lane during the mission is blocked entirely.

For mindless or fanatic enemies (Horde modifier*, drones, fanatics, anything that pushes regardless of cost):

- 1-3: Mines triggered, force pushes through. Pursuing TL is reduced by 1 (minimum 1). They keep coming.
- 4-6: Mines triggered, severe losses. Pursuing TL is reduced by 2 (minimum 1). They keep coming.

Mindless enemies always trigger mines. They do not detect or reroute.

*Found in the Commander's Toolkit

### Heavy Bombardment

A devastating long-range strike (artillery, naval guns, orbital bombardment, whatever the setting supports). Reshapes the ground and kills anything caught in the open.

Can be called during [[Catch Breath]].

**Targeting.** Can be called on any [[Sector]] with known enemy presence. This includes Sectors the Squad has previously entered, Sectors revealed through Intel (Boons, Recon missions, intercepted comms), or Sectors scouted by other means.

**Cannot be called on the Squad's current Sector. If somehow targeted on the Squad's Sector, every Trooper is killed. No save, no roll. The bombardment does not distinguish friend from foe.**

**Effects on the target Sector:**

- [[Threat Level]] is reduced by 2.
- Redefines the Sector's [[Cover]] and [[Space]] based on what was there. See below.
- **[[Mobility]]** is reduced by 1 in the Sector for the rest of the mission. Rubble, debris, and lingering dust make the ground hard to cross.
- Strategic objectives in the Sector (AA installations, comms relays, fuel storage, etc.) are destroyed, unless explicitly hardened or dug in.
- Hard Targets in the open are destroyed. Hard Targets in fortified positions take 2 Hits.

**Redefine the Sector's Cover and Space based on its contents.** A few examples:

- Forests gets leveled. The canopy is gone, trees are splintered. Cover is generally reduced, Space is increased.
- Fields are cratered. Impact sites provide more cover than before. Space remains Open, Cover is increased from Exposed to Normal.
- Light urban sprawl (single-or two-story buildings) gets reduced to rubble. Space is generally increased (you can now more easily move through the remnants of buildings). Cover is reduced to Normal if it was Dense before.
- Dense urban sprawl (city streets, tall buildings) collapses into the streets. Cover increases as large chunks of rubble are scattered everywhere. Space is decreased, as the debris collapses into the streets, plazas and alleyways.
- A bunker complex's surface structures crack and rupture. Tunnels may collapse outright, removing the Sector from the map.
