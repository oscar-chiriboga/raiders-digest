/**
 * STATIC QUESTS DATA
 * Sample data structure for quests - replace with actual API data when available
 */

export const QUESTS_DATA = [
  {
    id: 1,
    name: "First Contact",
    objectives: [
      "Enter the evacuation zone",
      "Locate the ARC signal source",
      "Survive the first encounter"
    ],
    rewards: [
      { item: { name: "ARC Alloy", rarity: "common" }, quantity: 5 },
      { item: { name: "Credits", rarity: "common" }, quantity: 500 }
    ],
    description: "Your first mission into the dangerous ARC-infested territory.",
    difficulty: "Easy",
    repeatable: false
  },
  {
    id: 2,
    name: "Supply Run",
    objectives: [
      "Collect 10 ARC Circuitry",
      "Return to base safely"
    ],
    rewards: [
      { item: { name: "Credits", rarity: "common" }, quantity: 1000 },
      { item: { name: "ARC Circuitry", rarity: "rare" }, quantity: 3 }
    ],
    description: "Gather essential components from the field.",
    difficulty: "Medium",
    repeatable: true
  },
  {
    id: 3,
    name: "Hunter",
    objectives: [
      "Eliminate 5 Wasp units",
      "Collect their components"
    ],
    rewards: [
      { item: { name: "Weapon Parts", rarity: "uncommon" }, quantity: 10 },
      { item: { name: "Credits", rarity: "common" }, quantity: 750 }
    ],
    description: "Clear out the smaller ARC threats.",
    difficulty: "Easy",
    repeatable: true
  },
  {
    id: 4,
    name: "Heavy Ordnance",
    objectives: [
      "Destroy 2 Bastion units",
      "Recover Bastion Cells"
    ],
    rewards: [
      { item: { name: "Bastion Cell", rarity: "epic" }, quantity: 2 },
      { item: { name: "Heavy Ammo", rarity: "uncommon" }, quantity: 50 }
    ],
    description: "Take down the heavily armored targets.",
    difficulty: "Hard",
    repeatable: true
  },
  {
    id: 5,
    name: "The Queen's Lair",
    objectives: [
      "Locate the Queen's nest",
      "Defeat the Queen",
      "Extract the Queen Reactor"
    ],
    rewards: [
      { item: { name: "Queen Reactor", rarity: "legendary" }, quantity: 1 },
      { item: { name: "Credits", rarity: "common" }, quantity: 10000 },
      { item: { name: "Legendary Weapon Blueprint", rarity: "legendary" }, quantity: 1 }
    ],
    description: "Face the ultimate ARC threat and claim your prize.",
    difficulty: "Very Hard",
    repeatable: false
  },
  {
    id: 6,
    name: "Scavenger",
    objectives: [
      "Loot 15 containers in Downtown",
      "Find rare components"
    ],
    rewards: [
      { item: { name: "Random Loot", rarity: "rare" }, quantity: 5 },
      { item: { name: "Credits", rarity: "common" }, quantity: 600 }
    ],
    description: "Search the urban ruins for valuable salvage.",
    difficulty: "Easy",
    repeatable: true
  },
  {
    id: 7,
    name: "Arms Dealer",
    objectives: [
      "Craft 3 weapons at Weapon Bench",
      "Sell them to traders"
    ],
    rewards: [
      { item: { name: "Crafting Materials", rarity: "uncommon" }, quantity: 20 },
      { item: { name: "Credits", rarity: "common" }, quantity: 1500 }
    ],
    description: "Put your crafting skills to the test.",
    difficulty: "Medium",
    repeatable: true
  },
  {
    id: 8,
    name: "Recon Mission",
    objectives: [
      "Scout all 3 map sectors",
      "Mark ARC concentrations",
      "Return with intel"
    ],
    rewards: [
      { item: { name: "Map Data", rarity: "rare" }, quantity: 1 },
      { item: { name: "Credits", rarity: "common" }, quantity: 800 }
    ],
    description: "Gather intelligence on ARC movements.",
    difficulty: "Medium",
    repeatable: false
  },
  {
    id: 9,
    name: "Explosive Situation",
    objectives: [
      "Avoid or eliminate 10 Shrimp units",
      "Collect intact explosives"
    ],
    rewards: [
      { item: { name: "Explosives", rarity: "uncommon" }, quantity: 5 },
      { item: { name: "Credits", rarity: "common" }, quantity: 900 }
    ],
    description: "Deal with the kamikaze threats carefully.",
    difficulty: "Medium",
    repeatable: true
  },
  {
    id: 10,
    name: "Master Raider",
    objectives: [
      "Complete 50 missions",
      "Achieve S-rank in 10 missions",
      "Craft 1 S-tier weapon"
    ],
    rewards: [
      { item: { name: "Master Raider Badge", rarity: "legendary" }, quantity: 1 },
      { item: { name: "Credits", rarity: "common" }, quantity: 25000 },
      { item: { name: "Elite Weapon Skin", rarity: "legendary" }, quantity: 1 }
    ],
    description: "Prove yourself as the ultimate ARC Raider.",
    difficulty: "Very Hard",
    repeatable: false
  }
];

export const QUEST_DIFFICULTIES = ['All', 'Easy', 'Medium', 'Hard', 'Very Hard'];
