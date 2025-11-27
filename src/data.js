// Data extracted from app.js for use in the React Native app
export const WEAPONS_DATA = [
  { name: 'Bettina', tier: 'S', type: 'Assault Rifle', desc: 'Lower fire rate but massive damage. Excellent at all ranges.', craft: '3 Adv. Mech Components, 3 Heavy Gun Parts' },
  { name: 'Renegade', tier: 'S', type: 'Battle Rifle', desc: 'High fire rate for a semi-auto. Outclasses the Ferro at range.', craft: 'High-tier materials' },
  { name: 'Anvil', tier: 'S', type: 'Hand Cannon', desc: 'Uncommon rarity but S-tier power. Strong armor penetration.', craft: 'Accessible early game' },
  { name: 'Vulcano', tier: 'S', type: 'Shotgun', desc: 'Colossal close-range damage. 4 shots only. Needs mag mod.', craft: 'Epic Rarity' },
  { name: 'Ferro', tier: 'S', type: 'Rifle', desc: 'Best starting weapon. High power, cheap to craft.', craft: '5 Metal Parts, 2 Rubber Parts' },
  { name: 'Tempest', tier: 'A', type: 'Assault Rifle', desc: 'Great all-rounder, but blueprint is rare.', craft: 'Magnetic Accelerator, Medium Gun Parts' },
  { name: 'Jupiter', tier: 'A', type: 'Sniper', desc: 'Endgame sniper. Uses Energy Clips. Massive damage.', craft: 'Queen Reactor, Magnetic Accelerators' },
  { name: 'Osprey', tier: 'A', type: 'Sniper', desc: 'Cheaper alternative to Jupiter. High precision.', craft: '2 Adv. Mech Components, 7 Wires' },
  { name: 'Bobcat', tier: 'A', type: 'SMG', desc: 'Hard hitting close range, difficult recoil.', craft: 'Complex Gun Parts' },
  { name: 'Equalizer', tier: 'A', type: 'Energy Weapon', desc: 'Decimates ARC shields. Less effective vs players.', craft: 'Queen Reactor, 3 Complex Gun Parts' },
  { name: 'Hullcracker', tier: 'A', type: 'Heavy', desc: 'Destroys ARC armor. Slow handling.', craft: 'Magnetic Accelerator, Exodus Module' },
  { name: 'Stitcher', tier: 'B', type: 'SMG', desc: 'Standard free loadout SMG. High fire rate, low range.', craft: 'Common materials' },
  { name: 'Rattler', tier: 'B', type: 'Assault Rifle', desc: 'Solid early game AR. Good balance.', craft: 'Common materials' },
  { name: 'Arpeggio', tier: 'B', type: 'Burst Rifle', desc: 'Three-round burst. Good for PvP, weak vs ARC.', craft: 'Medium Gun Parts' },
  { name: 'Venator', tier: 'B', type: 'Pistol', desc: 'Twin-shot burst pistol. Good backup.', craft: 'Rare materials' },
  { name: 'Il Toro', tier: 'B', type: 'Shotgun', desc: 'Good for free loadouts. Point blank only.', craft: 'Common materials' },
  { name: 'Burletta', tier: 'B', type: 'Pistol', desc: 'Basic sidearm. Reliable but weak.', craft: 'Common materials' },
  { name: 'Torrente', tier: 'C', type: 'LMG', desc: 'High capacity but requires crouching for accuracy.', craft: 'Heavy Gun Parts' },
  { name: 'Hairpin', tier: 'D', type: 'Pistol', desc: 'Silenced but very low damage.', craft: 'Common materials' },
  { name: 'Kettle', tier: 'D', type: 'Shotgun', desc: 'Slow, cumbersome, outclassed by Vulcano.', craft: 'Common materials' },
];

export const ENEMIES_DATA = [
  { name: 'Wasp', type: 'Drone', weakPoint: 'Four thrusters', threat: 'Low', desc: 'Basic scout drone. Flies in groups. Alerts others.', drops: 'ARC Alloy, ARC Powercell' },
  { name: 'Hornet', type: 'Drone', weakPoint: 'Unarmored rear thrusters', threat: 'Medium', desc: 'Armored cousin of the Wasp. Rapid-fire machine gun.', drops: 'Simple Gun Parts, Hornet Driver' },
  { name: 'Snitch', type: 'Recon', weakPoint: 'Thrusters / Center Eye', threat: 'High (Alert)', desc: 'Unarmed but calls in massive reinforcements if not killed instantly.', drops: 'Snitch Scanner, Sensors' },
  { name: 'Spotter', type: 'Support', weakPoint: 'Main optic', threat: 'Medium', desc: 'Paints targets for Bombardiers. Kill first.', drops: 'Sensors, Wires' },
  { name: 'Surveyor', type: 'Support', weakPoint: 'Exposed core during scan', threat: 'Medium', desc: 'Large rolling scanner. Heavily armored until it scans.', drops: 'Surveyor Vault, ARC Circuitry' },
  { name: 'Tick', type: 'Parasite', weakPoint: 'Anywhere (Unarmored)', threat: 'Low', desc: 'Crawls on walls/ceilings inside dark buildings.', drops: 'Tick Pod, ARC Alloy' },
  { name: 'Pop', type: 'Explosive', weakPoint: 'Shoot from distance', threat: 'Medium', desc: 'Rolling ball that self-destructs. Loud rolling noise.', drops: 'Crude Explosives, Pop Trigger' },
  { name: 'Fireball', type: 'Explosive', weakPoint: 'Unarmored core when open', threat: 'High', desc: 'Fast rolling bot with flamethrower.', drops: 'Fireball Burner, Crude Explosives' },
  { name: 'Leaper', type: 'Beast', weakPoint: 'Wait for recovery after leap', threat: 'High', desc: 'Agile four-legged brute. Shockwave attacks.', drops: 'Leaper Pulse Unit, ARC Flex Rubber' },
  { name: 'Bastion', type: 'Walker', weakPoint: 'Rear canister / Yellow leg joints', threat: 'High', desc: 'Slow moving fortress. Dangerous at close range.', drops: 'Bastion Cell, Medium Gun Parts' },
  { name: 'Sentinel', type: 'Turret', weakPoint: 'Yellow fuel tank', threat: 'High', desc: 'Static turret guarding high-loot areas. Long range.', drops: 'Sentinel Firing Core' },
  { name: 'Rocketeer', type: 'Heavy', weakPoint: 'Thrusters (needs armor piercing)', threat: 'High', desc: 'Fires explosive rockets. Very dangerous.', drops: 'Heavy Gun Parts, Adv. ARC Powercell' },
  { name: 'Bombardier', type: 'Artillery', weakPoint: 'Yellow kneecaps / Rear cylinder', threat: 'Extreme', desc: 'Fires mortars. Supported by Spotter drones.', drops: 'Bombardier Cell, Launcher Ammo' },
  { name: 'The Queen', type: 'Boss', weakPoint: 'Exposed vents during phases', threat: 'Extreme', desc: 'Massive event boss. Requires squad coordination.', drops: 'Queen Reactor, Magnetic Accelerator' },
  { name: 'Matriarch', type: 'Boss', weakPoint: 'Energy shield generator', threat: 'Legendary', desc: 'Larger, deadlier version of the Queen. Fires rockets and gas.', drops: 'Matriarch Reactor, High-Tier Loot' },
];

export const MAPS_DATA = [
  { 
    name: 'Dam Battlegrounds', 
    difficulty: 'Normal',
    grid: 'A1-E5',
    imageUrl: 'Dam_Battlegrounds_Map.jpg',
    desc: 'The first unlockable map. A mix of swamps, forests, and industrial complexes.',
    pois: [
      { name: 'Control Tower', loot: 'High (PvP)', type: 'Tech/Security' },
      { name: 'Hydroponic Dome', loot: 'High', type: 'Nature/Industrial' },
      { name: 'Research & Admin', loot: 'High', type: 'Commercial' },
      { name: 'Water Treatment', loot: 'Medium', type: 'Mechanical' },
      { name: 'Power Gen Complex', loot: 'Medium', type: 'Electrical' },
      { name: 'South Swamp Outpost', loot: 'Medium', type: 'General' },
      { name: 'The Breach', loot: 'High', type: 'Combat Zone' },
      { name: 'Pale Apartments', loot: 'Low', type: 'Residential' }
    ]
  },
  { 
    name: 'Buried City', 
    difficulty: 'Hard',
    grid: 'F1-J5',
    desc: 'A sun-blasted desert ruinscape. Vertical gameplay in skyscrapers and cramped streets.',
    pois: [
      { name: 'Hospital', loot: 'High', type: 'Medical' },
      { name: 'Space Travel Agency', loot: 'High', type: 'Tech' },
      { name: 'Town Hall', loot: 'Epic', type: 'Intel/Keys' },
      { name: 'Grandioso Apts', loot: 'Medium', type: 'Residential' },
      { name: 'Plaza Rosa', loot: 'Medium', type: 'Commercial' }
    ]
  },
  { 
    name: 'Spaceport', 
    difficulty: 'Very Hard',
    grid: 'K1-O5',
    desc: 'Massive launch facility. High danger, high reward. Industrial heavy.',
    pois: [
      { name: 'Launch Towers', loot: 'Epic', type: 'High-Tech' },
      { name: 'Arrival Building', loot: 'High', type: 'Commercial' },
      { name: 'Container Storage', loot: 'Medium', type: 'Industrial' },
      { name: 'Vehicle Maintenance', loot: 'Medium', type: 'Mechanical' }
    ]
  },
  { 
    name: 'Blue Gate', 
    difficulty: 'Extreme',
    grid: 'P1-T5',
    desc: 'Wide open areas leading into mountains. Features deep underground sections.',
    pois: [
      { name: 'Pilgrim\'s Peak', loot: 'High', type: 'Tech/Elec' },
      { name: 'Checkpoint', loot: 'High', type: 'Mechanical' },
      { name: 'Ancient Fort', loot: 'Medium', type: 'Historical' },
      { name: 'Village', loot: 'Medium', type: 'Residential' },
      { name: 'Underground Bunkers', loot: 'Epic', type: 'Military' }
    ]
  },
  { 
    name: 'Stella Montis', 
    difficulty: 'Event/Endgame',
    grid: 'U1-Z5',
    desc: 'Carved deep into northern mountains. A cold, sterile, preserved facility.',
    pois: [
      { name: 'Main Facility', loot: 'Epic', type: 'Tech/Science' },
      { name: 'Mountain Pass', loot: 'High', type: 'Nature' },
      { name: 'Loading Dock', loot: 'High', type: 'Industrial' }
    ]
  }
];

export const LOOT_DATA = [
  { name: 'ARC Alloy', source: 'Most ARC Machines', use: 'Essential crafting material' },
  { name: 'Advanced Electrical Comp.', source: 'Electronics / Electronic Areas', use: 'High-tier crafting' },
  { name: 'Exodus Module', source: 'Tough ARCs / Exodus Areas', use: 'Rare weapon crafting' },
  { name: 'Magnetic Accelerator', source: 'Queen / Exodus Areas', use: 'High-tier weapon crafting' },
  { name: 'Fabric', source: 'Commercial/Residential Areas', use: 'Gear crafting' },
  { name: 'Medical Supplies', source: 'Hospitals / Cabinets', use: 'Healing items' },
  { name: 'Crude Explosives', source: 'Industrial Areas / Pops', use: 'Grenades / Explosives' },
  { name: 'Queen Reactor', source: 'The Queen (Boss)', use: 'Jupiter/Equalizer Crafting' },
  { name: 'Heavy Gun Parts', source: 'Rocketeers / Heavy ARCs', use: 'Heavy Weapon Crafting' },
  { name: 'Sensors', source: 'Snitch / Spotter', use: 'Gadget Crafting' },
];

export const PATCH_NOTES_DATA = [
  {
    id: '1.3.0',
    title: 'Balance & Bug Fixes',
    date: 'November 20, 2025',
    summary: 'Major balance changes to items and weapons, plus extensive bug fixes across all maps.',
    sections: [
      {
        title: 'Balance Changes - Items',
        items: [
          { text: 'Deadline', subitems: [
            'Buy value increased from 8,100 to 15,000 Coins',
            'Sell value increased from 3,000 to 5,000 Coins',
            'Crafting changed to 3 Explosive compound + 2 ARC Circuitry',
            'Trader stock reduced from 3 to 1'
          ]},
          'Power cell: Sell value reduced from 640 to 270 Coins',
          { text: 'Launcher ammo', subitems: [
            'Buy value changed to 6 ammo for 4,500 Coins',
            'Sell value increased from 200 to 250 Coins',
            'Crafting changed to 1 ARC Motion Core + 2 Crude Explosives',
            'Crafting now available at Workbench without blueprint'
          ]}
        ]
      },
      {
        title: 'Balance Changes - Weapons',
        items: [
          { text: 'Venator', subitems: [
            'Fire-rate upgrades reduced from 22/44/60% to 13/26/40%',
            'Weight increased from 2 to 5'
          ]},
          { text: 'Explosive Damage', subitems: [
            'Rebalanced against ARC for consistency',
            'Reduced damage on larger enemies like Bastion'
          ]},
          'Hullcracker: Adjusted to require more precision after explosive changes'
        ]
      },
      {
        title: 'ARC Fixes',
        items: [
          'Fixed bug where ARC could call reinforcements outside the map',
          { text: 'Shredder', subitems: [
            'Improved detection and movement toward Lure Grenades',
            'Updated movement handling with reduced turn speed',
            'Improved navigation to prevent getting stuck on corners'
          ]}
        ]
      },
      {
        title: 'Map Fixes',
        items: [
          'Dam Battlegrounds: Fixed elevator shaft stuck issue',
          { text: 'Spaceport', subitems: [
            'Added collision to Hidden Bunker staircase',
            'Fixed wall entry exploit near Launch Tower',
            'Fixed locked room access without key'
          ]},
          'Blue Gate: Fixed railing props blocking bullets',
          { text: 'Stella Montis', subitems: [
            'Fixed terrain fall-through near Train Station',
            'Fixed player stuck locations',
            'Removed spawns too close to ARC areas'
          ]},
          'Barricades can no longer be placed overlapping character'
        ]
      },
      {
        title: 'Other Fixes',
        items: [
          'Fixed crash when using Raider Voice without AVX2 support',
          'Fixed crash when surrendering after reconnecting',
          'Fixed invisible collisions from scavenged Shredder parts',
          'Fixed Trials weekly rollover rank display',
          'Updated AMD driver recommendation to 25.11.1',
          { text: 'Aphelion', subitems: [
            'Fixed excessively bright tracers at distance',
            'Increased blueprint drop rates'
          ]},
          'Stitcher: Corrected reload time scaling display',
          'Audio: Reduced explosion tinnitus volume attenuation',
          'Your Raider Den has been ducked out'
        ]
      }
    ]
  },
  {
    id: '1.2.0',
    title: 'November Update - Stella Montis',
    date: 'November 13, 2025',
    summary: 'New map Stella Montis, Matriarch & Shredder enemies, community unlock event, and major desync improvements.',
    sections: [
      {
        title: 'New Content',
        items: [
          'New Map: Stella Montis',
          'New Boss: Matriarch',
          'New Enemy: Shredder',
          'Community Unlock Event',
          'New items to discover',
          'New quests to accept'
        ]
      },
      {
        title: 'Major Improvements',
        items: [
          'Reduced character movement latency to fix desync issues',
          'Fixed quest completion bug for multiple objectives',
          'Fixed various achievements not working correctly',
          'Reduced delay between shooting ARC and seeing impact effects'
        ]
      },
      {
        title: 'Balance - Items',
        items: [
          { text: 'Wolfpack', subitems: [
            'Value increased from 3,000 to 5,000 Coins',
            'Crafting changed to 3 Refined Explosive + 2 ARC Motion Cores'
          ]},
          { text: 'ARC Motion Core & Circuitry', subitems: [
            'Unlock moved to Refiner LVL 2',
            'Crafting increased to 8 ARC Alloy'
          ]},
          { text: 'Launcher Ammo', subitems: [
            'Value increased from 100 to 200 Coins',
            'Crafting changed to 4 Metal Parts + 1 Refined Explosives'
          ]},
          'Spotter Relay: Value reduced from 5,000 to 2,000 Coins',
          'Security Lockers: Adjusted loot tables'
        ]
      },
      {
        title: 'Balance - XP',
        items: [
          'Reduced XP per Damage from 3 to 2 for Bastion, Bombardier, Rocketeer, Leaper',
          'Bastion looting: XP reduced from 500 to 250',
          'Bombardier looting: XP reduced from 500 to 300',
          'Rocketeer thruster: XP increased from 200 to 500',
          'Leaper leg: XP increased from 200 to 500'
        ]
      },
      {
        title: 'ARC Fixes',
        items: [
          'Fireball: No longer gets stuck on security gates',
          'Surveyor: Fixed fleeing behavior moving out of bounds',
          'Fixed bug causing excessive fire damage to some enemies'
        ]
      },
      {
        title: 'Map Fixes',
        items: [
          { text: 'Dam Battlegrounds', subitems: [
            'Fixed terrain fall-through locations',
            'Fixed collision issues causing stuck players'
          ]},
          { text: 'Buried City', subitems: [
            'Fixed terrain fall-through locations',
            'Fixed flickering and clipping issues',
            'Fixed stuck locations in subway stations'
          ]},
          { text: 'Spaceport', subitems: [
            'Sealed room in Departure Building requiring breach',
            'Fixed door breach issues in Launch Tower'
          ]},
          'Blue Gate: Fixed trap in Control Room'
        ]
      },
      {
        title: 'Gameplay Improvements',
        items: [
          'Vaulting is now smoother',
          'Raider hatches: Fixed immunity to damage when entering',
          'Raider hatches: Increased interaction distance',
          'Field crafting: Selection stays on same item after crafting',
          'Probes, Husks, Raider Caches now count for looting objectives',
          'Fixed looting DBNO players on steep slopes'
        ]
      },
      {
        title: 'UI Improvements',
        items: [
          'Added inventory stack splitting option',
          'Added confirmation message for player reports',
          'Enemy salvage items no longer auto-assign to Quick Slots',
          'Removed Thumb Mouse Button from Escape action',
          'Prevent showing blocked Discord users',
          'Changed styling of UI input hints'
        ]
      },
      {
        title: 'Weapon & Utility Fixes',
        items: [
          'Fixed bullets veering sideways when firing near walls',
          'Blaze Grenade Trap: Fixed excessive damage',
          'Anti-Tick Field: Reduced attachment time from 1s to 0.5s',
          'Trigger Nade: Fixed bypassing DBNO invulnerability',
          'Snap Hook: Fixed out of bounds exploit in Spaceport bunker',
          'Smoke clouds: Now visible at same range as players'
        ]
      },
      {
        title: 'Audio & Animation',
        items: [
          'Added System Default option for voice chat devices',
          'Breathing audio balanced between helmeted and non-helmeted players',
          'Added helmet-specific audio effects for Scrappy',
          'Fixed weapons auto-slinging when throwing grenades',
          'Fixed weapons hidden when using deployables',
          'Improved camera behavior to prevent wall clipping'
        ]
      }
    ]
  }
];
