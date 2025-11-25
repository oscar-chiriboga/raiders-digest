/**
 * STATIC TRADERS DATA
 * Sample data structure for traders - replace with actual API data when available
 */

export const TRADERS_DATA = [
  {
    id: 1,
    name: "Marcus 'The Forge' Chen",
    location: "Industrial Zone - Safe House Alpha",
    description: "Former military weapons specialist turned independent arms dealer. Specializes in high-tier weapons and modifications.",
    specialty: "Weapons & Modifications",
    inventory: [
      {
        item: { name: "Jupiter Sniper Rifle", type: "Weapon", rarity: "legendary" },
        costs: [
          { item: { name: "Credits" }, quantity: 15000 },
          { item: { name: "Weapon Parts" }, quantity: 50 }
        ]
      },
      {
        item: { name: "Tempest Assault Rifle", type: "Weapon", rarity: "legendary" },
        costs: [
          { item: { name: "Credits" }, quantity: 12000 },
          { item: { name: "ARC Alloy" }, quantity: 30 }
        ]
      },
      {
        item: { name: "Weapon Modification Kit", type: "Upgrade", rarity: "epic" },
        costs: [
          { item: { name: "Credits" }, quantity: 5000 },
          { item: { name: "ARC Circuitry" }, quantity: 10 }
        ]
      },
      {
        item: { name: "Heavy Ammo Box", type: "Ammunition", rarity: "uncommon" },
        costs: [
          { item: { name: "Credits" }, quantity: 500 }
        ]
      }
    ]
  },
  {
    id: 2,
    name: "Elena 'Ghost' Volkov",
    location: "Downtown - Hidden Market",
    description: "Black market specialist dealing in rare components and restricted items. Ask no questions, she tells no lies.",
    specialty: "Rare Components & Black Market",
    inventory: [
      {
        item: { name: "Queen Reactor", type: "Component", rarity: "legendary" },
        costs: [
          { item: { name: "Credits" }, quantity: 50000 },
          { item: { name: "Bastion Cell" }, quantity: 5 }
        ]
      },
      {
        item: { name: "Bastion Cell", type: "Component", rarity: "epic" },
        costs: [
          { item: { name: "Credits" }, quantity: 8000 }
        ]
      },
      {
        item: { name: "ARC Circuitry", type: "Component", rarity: "rare" },
        costs: [
          { item: { name: "Credits" }, quantity: 1500 }
        ]
      },
      {
        item: { name: "Experimental Tech", type: "Component", rarity: "legendary" },
        costs: [
          { item: { name: "Credits" }, quantity: 20000 },
          { item: { name: "Queen Reactor" }, quantity: 1 }
        ]
      }
    ]
  },
  {
    id: 3,
    name: "Dr. Sarah Mitchell",
    location: "Outskirts - Research Station",
    description: "Field medic and researcher. Provides medical supplies and survival equipment.",
    specialty: "Medical & Survival Gear",
    inventory: [
      {
        item: { name: "Advanced Med Kit", type: "Consumable", rarity: "rare" },
        costs: [
          { item: { name: "Credits" }, quantity: 800 }
        ]
      },
      {
        item: { name: "Armor Plate", type: "Equipment", rarity: "uncommon" },
        costs: [
          { item: { name: "Credits" }, quantity: 1200 }
        ]
      },
      {
        item: { name: "Survival Pack", type: "Equipment", rarity: "common" },
        costs: [
          { item: { name: "Credits" }, quantity: 300 }
        ]
      },
      {
        item: { name: "Stimulant Injector", type: "Consumable", rarity: "epic" },
        costs: [
          { item: { name: "Credits" }, quantity: 2500 }
        ]
      }
    ]
  },
  {
    id: 4,
    name: "Viktor 'Wrench' Petrov",
    location: "Industrial Zone - Scrapyard",
    description: "Master craftsman and engineer. Can build or repair almost anything from salvaged parts.",
    specialty: "Crafting & Repairs",
    inventory: [
      {
        item: { name: "Weapon Bench Upgrade", type: "Blueprint", rarity: "epic" },
        costs: [
          { item: { name: "Credits" }, quantity: 10000 },
          { item: { name: "ARC Alloy" }, quantity: 50 }
        ]
      },
      {
        item: { name: "Repair Kit", type: "Tool", rarity: "uncommon" },
        costs: [
          { item: { name: "Credits" }, quantity: 600 }
        ]
      },
      {
        item: { name: "Crafting Materials Bundle", type: "Material", rarity: "common" },
        costs: [
          { item: { name: "Credits" }, quantity: 1000 }
        ]
      },
      {
        item: { name: "Advanced Tool Set", type: "Tool", rarity: "rare" },
        costs: [
          { item: { name: "Credits" }, quantity: 3500 }
        ]
      }
    ]
  },
  {
    id: 5,
    name: "Jackson 'Trade Route' Williams",
    location: "Downtown - Central Hub",
    description: "General merchant with a wide variety of common goods and fair prices.",
    specialty: "General Supplies",
    inventory: [
      {
        item: { name: "Light Ammo Box", type: "Ammunition", rarity: "common" },
        costs: [
          { item: { name: "Credits" }, quantity: 250 }
        ]
      },
      {
        item: { name: "Medium Ammo Box", type: "Ammunition", rarity: "common" },
        costs: [
          { item: { name: "Credits" }, quantity: 350 }
        ]
      },
      {
        item: { name: "Basic Med Kit", type: "Consumable", rarity: "common" },
        costs: [
          { item: { name: "Credits" }, quantity: 200 }
        ]
      },
      {
        item: { name: "Backpack Upgrade", type: "Equipment", rarity: "uncommon" },
        costs: [
          { item: { name: "Credits" }, quantity: 1500 }
        ]
      },
      {
        item: { name: "Flashlight", type: "Tool", rarity: "common" },
        costs: [
          { item: { name: "Credits" }, quantity: 100 }
        ]
      }
    ]
  },
  {
    id: 6,
    name: "Aria 'Intel' Santos",
    location: "Outskirts - Communication Tower",
    description: "Information broker and tactical consultant. Sells maps, intel, and mission data.",
    specialty: "Intelligence & Maps",
    inventory: [
      {
        item: { name: "Detailed Map Pack", type: "Data", rarity: "rare" },
        costs: [
          { item: { name: "Credits" }, quantity: 2000 }
        ]
      },
      {
        item: { name: "ARC Movement Tracker", type: "Tool", rarity: "epic" },
        costs: [
          { item: { name: "Credits" }, quantity: 5000 }
        ]
      },
      {
        item: { name: "Mission Intel Package", type: "Data", rarity: "uncommon" },
        costs: [
          { item: { name: "Credits" }, quantity: 800 }
        ]
      },
      {
        item: { name: "Loot Location Database", type: "Data", rarity: "rare" },
        costs: [
          { item: { name: "Credits" }, quantity: 3000 }
        ]
      }
    ]
  }
];

export const TRADER_SPECIALTIES = [
  'All',
  'Weapons & Modifications',
  'Rare Components & Black Market',
  'Medical & Survival Gear',
  'Crafting & Repairs',
  'General Supplies',
  'Intelligence & Maps'
];
