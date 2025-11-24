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
