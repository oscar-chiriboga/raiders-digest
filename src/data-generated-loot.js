// Auto-generated from Metaforge API
// Generated: 2025-11-25T00:08:22.666Z
// Total Items: 440

export const LOOT_DATA = [
  {
    "id": "energy-ammo",
    "name": "Energy Clip",
    "description": "Ammo used for energy weapons. One clip will fully charge a single weapon.",
    "category": "Ammo",
    "subcategory": "Ammunition",
    "rarity": "Rare",
    "value": 5,
    "weight": 0.3,
    "stackSize": 5,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/energy-ammo.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [
      {
        "quantity": 1,
        "component": {
          "id": "advanced-arc-powercell",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/advanced-arc-powercell.webp",
          "name": "Advanced ARC Powercell",
          "rarity": "Rare",
          "item_type": "Topside Material"
        }
      },
      {
        "quantity": 2,
        "component": {
          "id": "battery",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/battery.webp",
          "name": "Battery",
          "rarity": "Uncommon",
          "item_type": "Topside Material"
        }
      }
    ],
    "usedIn": []
  },
  {
    "id": "launcher-ammo",
    "name": "Launcher Ammo",
    "description": "Anti-ARC payloads used mainly by the Hullcracker",
    "category": "Ammo",
    "subcategory": "Ammunition",
    "rarity": "Rare",
    "value": 250,
    "weight": 1,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/launcher-ammo.webp",
    "lootArea": "Unknown",
    "workbench": "Workbench",
    "uses": "Compatible with Hullcracker",
    "recycleComponents": [],
    "droppedBy": [
      {
        "id": "e762a63c-0232-4e0a-a528-4b21ec7b9f25",
        "arc": {
          "id": "bombardier",
          "icon": "https://unhbvkszwhczbjxgetgk.supabase.co/storage/v1/object/public/images/arc-raiders/icons/bombardier.webp",
          "name": "Bombardier",
          "description": "The Bombardier is an armored ARC that functions as heavy, mobile artillery. Its movement is slow and loud. Armed with a multi-rocket launcher, it unleashes devastating, long-range barrages that can obliterate your entire squad. Do not engage this unit. If you hear its grinding approach, silence your movement and escape the area immediately, as its attention is a death sentence."
        },
        "arc_id": "bombardier",
        "created_at": "2025-11-04T15:56:37.290049+00:00"
      }
    ],
    "components": [
      {
        "quantity": 1,
        "component": {
          "id": "arc-motion-core",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/arc-motion-core.webp",
          "name": "ARC Motion Core",
          "rarity": "Rare",
          "item_type": "Topside Material"
        }
      },
      {
        "quantity": 2,
        "component": {
          "id": "crude-explosives",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/crude-explosives.webp",
          "name": "Crude Explosives",
          "rarity": "Uncommon",
          "item_type": "Refined Material"
        }
      }
    ],
    "usedIn": []
  },
  {
    "id": "heavy-ammo",
    "name": "Heavy Ammo",
    "description": "Heavy bullets used mainly with large-caliber weapons.",
    "category": "Ammo",
    "subcategory": "Ammunition",
    "rarity": "Common",
    "value": 12,
    "weight": 0.05,
    "stackSize": 40,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/heavy-ammo.webp",
    "lootArea": "Unknown",
    "workbench": "Workbench",
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [
      {
        "id": "bb0b7bf1-92cb-43fc-b129-5ccbb65222ba",
        "arc": {
          "id": "rocketeer",
          "icon": "https://unhbvkszwhczbjxgetgk.supabase.co/storage/v1/object/public/images/arc-raiders/icons/rocketeer.webp",
          "name": "Rocketeer",
          "description": "This is a formidable flying ARC, a pure engine of destruction that dominates the airspace. It poses a significant threat not just because it flies, but because of its powerful rocket attacks and devastating focus on area-of-effect (AoE) damage. This unit is designed to saturate an area, turning cover into a liability and forcing Raiders to constantly relocate or be wiped out by the sheer force of its explosions. Treat it like a mobile artillery piece—it hits hard and wide."
        },
        "arc_id": "rocketeer",
        "created_at": "2025-11-04T16:34:18.669309+00:00"
      },
      {
        "id": "a9efe448-1b25-49b3-911a-66fcfb40e418",
        "arc": {
          "id": "sentinel",
          "icon": "https://unhbvkszwhczbjxgetgk.supabase.co/storage/v1/object/public/images/arc-raiders/icons/sentinel.webp",
          "name": "Sentinel",
          "description": "A large unarmored turret that sits atop buildings and ledges. Always found outside and usually very high up. Contains a small vulnerable capsule attached to it's swiveling arm.\n\nTraces movement and will fire off a single Heavy round every 5 seconds while having line-of-sight on a Raider."
        },
        "arc_id": "sentinel",
        "created_at": "2025-11-04T16:35:09.353207+00:00"
      }
    ],
    "components": [
      {
        "quantity": 3,
        "component": {
          "id": "metal-parts",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/metal-parts.webp",
          "name": "Metal Parts",
          "rarity": "Common",
          "item_type": "Basic Material"
        }
      },
      {
        "quantity": 2,
        "component": {
          "id": "chemicals",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/chemicals.webp",
          "name": "Chemicals",
          "rarity": "Common",
          "item_type": "Basic Material"
        }
      }
    ],
    "usedIn": []
  },
  {
    "id": "light-ammo",
    "name": "Light Ammo",
    "description": "Light bullets used mainly with SMGs and light handguns. Such as Kettle, Stitcher, Burletta, Hairpin and Bobcat.",
    "category": "Ammo",
    "subcategory": "Ammunition",
    "rarity": "Common",
    "value": 4,
    "weight": 0.017,
    "stackSize": 100,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/light-ammo.webp",
    "lootArea": "Unknown",
    "workbench": "Workbench",
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [
      {
        "id": "9e55182c-26bd-43ff-95ff-899f485ba091",
        "arc": {
          "id": "wasp",
          "icon": "https://unhbvkszwhczbjxgetgk.supabase.co/storage/v1/object/public/images/arc-raiders/icons/wasp.webp",
          "name": "Wasp",
          "description": "This is the Wasp, a baseline enemy drone that poses a threat through sheer numbers. It is a small, unarmored flyer that peppers Raiders with light-caliber ammunition. You'll almost never encounter a Wasp alone; they operate in tight patrols alongside other Wasps or as escorts for their more dangerous counterpart, the Hornet. The moment it turns aggressive, look for a small red laser to lock onto you for one second—that's your cue to dodge before it unleashes a quick 1.5-second burst of gunfire."
        },
        "arc_id": "wasp",
        "created_at": "2025-11-04T00:46:26.731323+00:00"
      },
      {
        "id": "1a37d45b-08cd-4585-aaa5-b4bb50b4c20d",
        "arc": {
          "id": "turret",
          "icon": "https://unhbvkszwhczbjxgetgk.supabase.co/storage/v1/object/public/images/arc-raiders/icons/turret.webp",
          "name": "Turret",
          "description": "This is a small, unarmored turret that provides close-quarters defense for the ARC. Its primary function is to scan constantly for movement, and you’ll typically find it mounted on interior walls inside buildings. Do not confuse this swift little gun with the massive, high-altitude Sentinel turrets you find outside. When it spots a Raider, it immediately opens fire, unleashing a two-second hail of bullets in an attempt to suppress and eliminate the threat quickly. Its lack of armor makes it fragile, but its location makes it dangerous."
        },
        "arc_id": "turret",
        "created_at": "2025-11-04T16:37:04.438328+00:00"
      }
    ],
    "components": [
      {
        "quantity": 3,
        "component": {
          "id": "metal-parts",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/metal-parts.webp",
          "name": "Metal Parts",
          "rarity": "Common",
          "item_type": "Basic Material"
        }
      },
      {
        "quantity": 2,
        "component": {
          "id": "chemicals",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/chemicals.webp",
          "name": "Chemicals",
          "rarity": "Common",
          "item_type": "Basic Material"
        }
      }
    ],
    "usedIn": []
  },
  {
    "id": "medium-ammo",
    "name": "Medium Ammo",
    "description": "Medium bullets used mainly with medium-caliber weapons. Such as Rattler, Tempest, Arpeggio, Renegade and Torrente.",
    "category": "Ammo",
    "subcategory": "Ammunition",
    "rarity": "Common",
    "value": 6,
    "weight": 0.025,
    "stackSize": 80,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/medium-ammo.webp",
    "lootArea": "Unknown",
    "workbench": "Workbench",
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [
      {
        "id": "fa5bf0c5-70ec-42d4-bde7-0ac43df4f3d3",
        "arc": {
          "id": "hornet",
          "icon": "https://unhbvkszwhczbjxgetgk.supabase.co/storage/v1/object/public/images/arc-raiders/icons/hornet.webp",
          "name": "Hornet",
          "description": "This is a medium-class drone, easily recognizable by the pair of armored rotors mounted prominently on its front. It rarely operates alone, preferring to patrol the skies alongside a swarm of Wasps or to act as an aerial shield for a larger, ground-based ARC. Its main attack is a focused, high-speed projectile. Watch for the brief, one-second pulse of a red aiming laser—that's your warning before it fires a specialized stun round designed to shred Raider shields and tear through light armor almost instantly."
        },
        "arc_id": "hornet",
        "created_at": "2025-11-04T15:57:35.118713+00:00"
      },
      {
        "id": "87bb0237-527e-41ee-8b62-f79ce5c61728",
        "arc": {
          "id": "bastion",
          "icon": "https://unhbvkszwhczbjxgetgk.supabase.co/storage/v1/object/public/images/arc-raiders/icons/bastion.webp",
          "name": "Bastion",
          "description": "A massive, heavily armored ARC unit, built around a terrifying, fully automatic minigun. It rarely moves without air support overhead, which helps it pin down and suppress Raider movement. Listen for its loud, distinct screech—that's your warning before it unleashes a three-second hail of bullets toward the last known enemy position."
        },
        "arc_id": "bastion",
        "created_at": "2025-11-04T15:53:56.825634+00:00"
      }
    ],
    "components": [
      {
        "quantity": 3,
        "component": {
          "id": "metal-parts",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/metal-parts.webp",
          "name": "Metal Parts",
          "rarity": "Common",
          "item_type": "Basic Material"
        }
      },
      {
        "quantity": 2,
        "component": {
          "id": "chemicals",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/chemicals.webp",
          "name": "Chemicals",
          "rarity": "Common",
          "item_type": "Basic Material"
        }
      }
    ],
    "usedIn": []
  },
  {
    "id": "shotgun-ammo",
    "name": "Shotgun ammo",
    "description": "Shotgun shells used for shotguns.",
    "category": "Ammo",
    "subcategory": "Ammunition",
    "rarity": "Common",
    "value": 20,
    "weight": 0.085,
    "stackSize": 20,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/shotgun-ammo.webp",
    "lootArea": "Unknown",
    "workbench": "Workbench",
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [
      {
        "id": "bbe30ec0-8e13-4e6f-bb7c-a3eaa8c193d9",
        "arc": {
          "id": "shredder",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/shredder.webp",
          "name": "Shredder",
          "description": "When this relentless lump of menace was first encountered at the Stella Montis facility, it left behind a trail of downed Raiders. It was dubbed the \"Shredder\" by what few Raiders managed to get back to safety; a name that wasn't so much clever as it was painfully literal."
        },
        "arc_id": "shredder",
        "created_at": "2025-11-14T18:52:50.636795+00:00"
      }
    ],
    "components": [
      {
        "quantity": 3,
        "component": {
          "id": "metal-parts",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/metal-parts.webp",
          "name": "Metal Parts",
          "rarity": "Common",
          "item_type": "Basic Material"
        }
      },
      {
        "quantity": 2,
        "component": {
          "id": "chemicals",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/chemicals.webp",
          "name": "Chemicals",
          "rarity": "Common",
          "item_type": "Basic Material"
        }
      }
    ],
    "usedIn": []
  },
  {
    "id": "angled-grip-ii-recipe",
    "name": "Angled Grip II Blueprint",
    "description": "Lets you craft an Angled Grip II",
    "category": "Blueprints",
    "subcategory": "Blueprint",
    "rarity": "Legendary",
    "value": 0,
    "weight": 0,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/angled-grip-ii-recipe.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "angled-grip-iii-recipe",
    "name": "Angled Grip III Blueprint",
    "description": "Lets you craft an Angled Grip III",
    "category": "Blueprints",
    "subcategory": "Blueprint",
    "rarity": "Legendary",
    "value": 0,
    "weight": 0,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/angled-grip-iii-recipe.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "anvil-recipe",
    "name": "Anvil Blueprint",
    "description": "Lets you craft an Anvil - Has high damage output and headshot damage, but slow handling.",
    "category": "Blueprints",
    "subcategory": "Blueprint",
    "rarity": "Legendary",
    "value": 5000,
    "weight": 0,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/anvil-recipe.webp",
    "lootArea": "Unknown",
    "workbench": "Weapon Bench",
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": [
      {
        "item": {
          "id": "anvil-i",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/anvil-i.webp",
          "name": "Anvil I",
          "rarity": "Uncommon",
          "item_type": "Weapon",
          "description": "Single-action hand cannon with high damage output and headshot damage, but slow handling."
        },
        "quantity": 1
      }
    ]
  },
  {
    "id": "anvil-splitter-recipe",
    "name": "Anvil Splitter Blueprint",
    "description": "Lets you craft an Anvil Splitter",
    "category": "Blueprints",
    "subcategory": "Blueprint",
    "rarity": "Legendary",
    "value": 0,
    "weight": 0,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/anvil-splitter-recipe.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "aphelion-rifle-blueprint",
    "name": "Aphelion Rifle Blueprint",
    "description": "Lets you craft an Aphelion Rifle",
    "category": "Blueprints",
    "subcategory": "Blueprint",
    "rarity": "Legendary",
    "value": 5000,
    "weight": 0,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/aphelion-rifle-blueprint.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "barricade-kit-recipe",
    "name": "Barricade Kit Blueprint",
    "description": "Lets you craft a Barricade Kit",
    "category": "Blueprints",
    "subcategory": "Blueprint",
    "rarity": "Legendary",
    "value": 0,
    "weight": 0,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/barricade-kit-recipe.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "bettina-blueprint",
    "name": "Bettina Blueprint",
    "description": "Has slow fire rate and high damage output.",
    "category": "Blueprints",
    "subcategory": "Blueprint",
    "rarity": "Legendary",
    "value": 5000,
    "weight": 0,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/bettina-blueprint.webp",
    "lootArea": "Unknown",
    "workbench": "Gunsmith III",
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "blaze-grenade-blueprint",
    "name": "Blaze Grenade Blueprint",
    "description": "Lets you craft a Blaze Grenade",
    "category": "Blueprints",
    "subcategory": "Blueprint",
    "rarity": "Legendary",
    "value": 0,
    "weight": 0,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/blaze-grenade-blueprint.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "blue-light-stick-blueprint",
    "name": "Blue Light Stick Blueprint",
    "description": "Lets you craft a Blue Light Stick.",
    "category": "Blueprints",
    "subcategory": "Blueprint",
    "rarity": "Legendary",
    "value": 5000,
    "weight": 0,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/blue-light-stick-blueprint.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "bobcat-i-recipe",
    "name": "Bobcat Blueprint",
    "description": "Lets you craft a Bobcat I",
    "category": "Blueprints",
    "subcategory": "Blueprint",
    "rarity": "Legendary",
    "value": 0,
    "weight": 0,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/bobcat-i-recipe.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": [
      {
        "item": {
          "id": "bobcat-i",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/bobcat-ii.webp",
          "name": "Bobcat I",
          "rarity": "Epic",
          "item_type": "Weapon",
          "description": "Fully automatic SMG with high fire rate but low accuracy."
        },
        "quantity": 1
      }
    ]
  },
  {
    "id": "burltetta-recipe",
    "name": "Burletta Blueprint",
    "description": "Lets you craft a Burletta",
    "category": "Blueprints",
    "subcategory": "Blueprint",
    "rarity": "Legendary",
    "value": 0,
    "weight": 0,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/burltetta-recipe.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": [
      {
        "item": {
          "id": "burletta-i",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/burletta-i.webp",
          "name": "Burletta I",
          "rarity": "Uncommon",
          "item_type": "Weapon",
          "description": "Semi-automatic pistol with decent damage output and accuracy. Can be fired as fast as you can pull the trigger."
        },
        "quantity": 1
      }
    ]
  },
  {
    "id": "combat-mk-3-flanking",
    "name": "Combat Mk. 3 (Flanking) Blueprint",
    "description": "Lets you craft a Combat Mk. 3 (Flanking)",
    "category": "Blueprints",
    "subcategory": "Blueprint",
    "rarity": "Legendary",
    "value": 5000,
    "weight": 0,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/combat-mk-3-flanking.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "combat-mk3-aggressive-blueprint",
    "name": "Combat Mk.3 (Aggressive) Blueprint",
    "description": "An improved version of the Combat II augment. Supports more shield types and comes with extra space for grenades",
    "category": "Blueprints",
    "subcategory": "Blueprint",
    "rarity": "Legendary",
    "value": 5000,
    "weight": 0,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/combat-mk3-aggressive-blueprint.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "compensator-ii-recipe",
    "name": "Compensator II Blueprint",
    "description": "Lets you craft a Compensator II",
    "category": "Blueprints",
    "subcategory": "Blueprint",
    "rarity": "Legendary",
    "value": 5000,
    "weight": 0,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/compensator-ii-recipe.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "compensator-iii-recipe",
    "name": "Compensator III Blueprint",
    "description": "Lets you craft a Compensator III",
    "category": "Blueprints",
    "subcategory": "Blueprint",
    "rarity": "Legendary",
    "value": 0,
    "weight": 0,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/compensator-iii-recipe.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "complex-gun-parts-blueprint",
    "name": "Complex Gun Parts Blueprint",
    "description": "Used to craft advanced weapons.",
    "category": "Blueprints",
    "subcategory": "Blueprint",
    "rarity": "Legendary",
    "value": 5000,
    "weight": 0,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/complex-gun-parts-blueprint.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "deadline-blueprint",
    "name": "Deadline Blueprint",
    "description": "Lets you craft a Deadline Mine",
    "category": "Blueprints",
    "subcategory": "Blueprint",
    "rarity": "Legendary",
    "value": 0,
    "weight": 0,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/deadline-blueprint.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "defibrillator-recipe",
    "name": "Defibrillator Blueprint",
    "description": "Lets you craft a Defibrillator",
    "category": "Blueprints",
    "subcategory": "Blueprint",
    "rarity": "Legendary",
    "value": 5000,
    "weight": 0,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/defibrillator-recipe.webp",
    "lootArea": "Unknown",
    "workbench": "Medical Lab II",
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "door-blocker-recipe",
    "name": "Door Blocker Blueprint",
    "description": "Lets you craft Door Blocker",
    "category": "Blueprints",
    "subcategory": "Blueprint",
    "rarity": "Legendary",
    "value": 0,
    "weight": 0,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/door-blocker-recipe.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "energy-ammo-recipe",
    "name": "Energy Ammo Blueprint",
    "description": "Lets you craft an Energy Ammo",
    "category": "Blueprints",
    "subcategory": "Blueprint",
    "rarity": "Legendary",
    "value": 0,
    "weight": 0,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/energy-ammo-recipe.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "equalizer-recipe",
    "name": "Equalizer Blueprint",
    "description": "A high capacity experimental beam rifle.",
    "category": "Blueprints",
    "subcategory": "Blueprint",
    "rarity": "Legendary",
    "value": 0,
    "weight": 0,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/equalizer-recipe.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "explosive-mine-blueprint",
    "name": "Explosive Mine Blueprint",
    "description": "Lets you craft an Explosive Mine",
    "category": "Blueprints",
    "subcategory": "Blueprint",
    "rarity": "Legendary",
    "value": 5000,
    "weight": 0,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/explosive-mine-blueprint.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "extended-barrel-recipe",
    "name": "Extended Barrel Blueprint",
    "description": "Lets you craft an Extended Barrel",
    "category": "Blueprints",
    "subcategory": "Blueprint",
    "rarity": "Legendary",
    "value": 0,
    "weight": 0,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/extended-barrel-recipe.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "extended-light-mag-ii-recipe",
    "name": "Extended Light Mag II Blueprint",
    "description": "Lets you craft a Extended Light Mag II",
    "category": "Blueprints",
    "subcategory": "Blueprint",
    "rarity": "Legendary",
    "value": 0,
    "weight": 0,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/extended-light-mag-ii-recipe.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "extended-light-mag-iii-recipe",
    "name": "Extended Light Mag III Blueprint",
    "description": "Lets you craft a Extended Light Mag III",
    "category": "Blueprints",
    "subcategory": "Blueprint",
    "rarity": "Legendary",
    "value": 0,
    "weight": 0,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/extended-light-mag-iii-recipe.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "extended-medium-mag-ii-recipe",
    "name": "Extended Medium Mag II Blueprint",
    "description": "Lets you craft a Extended Medium Mag II",
    "category": "Blueprints",
    "subcategory": "Blueprint",
    "rarity": "Legendary",
    "value": 0,
    "weight": 0,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/extended-medium-mag-ii-recipe.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "extended-medium-mag-iii-blueprint",
    "name": "Extended Medium Mag III Blueprint",
    "description": "Lets you craft the Medium Mag III",
    "category": "Blueprints",
    "subcategory": "Blueprint",
    "rarity": "Legendary",
    "value": 0,
    "weight": 0,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/extended-medium-mag-iii-blueprint.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "extended-shotgun-mag-ii-recipe",
    "name": "Extended Shotgun Mag II Blueprint",
    "description": "Lets you craft a Extended Shotgun Mag II - Moderately extends the ammo capacity of shotguns.",
    "category": "Blueprints",
    "subcategory": "Blueprint",
    "rarity": "Legendary",
    "value": 5000,
    "weight": 0,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/extended-shotgun-mag-ii-recipe.webp",
    "lootArea": "Unknown",
    "workbench": "Weapon Bench",
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "extended-shotgun-mag-iii-recipe",
    "name": "Extended Shotgun Mag III Blueprint",
    "description": "Lets you craft a Extended Shotgun Mag III",
    "category": "Blueprints",
    "subcategory": "Blueprint",
    "rarity": "Legendary",
    "value": 0,
    "weight": 0,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/extended-shotgun-mag-iii-recipe.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "gas-mine-blueprint",
    "name": "Gas Mine Blueprint",
    "description": "Lets you craft a Gas Mine",
    "category": "Blueprints",
    "subcategory": "Blueprint",
    "rarity": "Legendary",
    "value": 0,
    "weight": 0,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/gas-mine-blueprint.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "green-light-stick-blueprint",
    "name": "Green Light Stick Blueprint",
    "description": "Lets you craft a Green Light Stick.",
    "category": "Blueprints",
    "subcategory": "Blueprint",
    "rarity": "Legendary",
    "value": 5000,
    "weight": 0,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/green-light-stick-blueprint.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "heavy-fuse-grenade-recipe",
    "name": "Heavy Fuse Grenade Blueprint",
    "description": "Lets you craft a Heavy Fuse Grenade",
    "category": "Blueprints",
    "subcategory": "Blueprint",
    "rarity": "Legendary",
    "value": 0,
    "weight": 0,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/heavy-fuse-grenade-recipe.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "heavy-gun-parts-recipe",
    "name": "Heavy Gun Parts Blueprint",
    "description": "Used directly in crafting items of all tiers.",
    "category": "Blueprints",
    "subcategory": "Blueprint",
    "rarity": "Legendary",
    "value": 5000,
    "weight": 0,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/heavy-gun-parts-recipe.webp",
    "lootArea": "Unknown",
    "workbench": "Refiner II",
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [
      {
        "quantity": 4,
        "component": {
          "id": "simple-gun-parts",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/simple-gun-parts.webp",
          "name": "Simple Gun Parts",
          "rarity": "Uncommon",
          "item_type": "Topside Material"
        }
      }
    ],
    "usedIn": []
  },
  {
    "id": "horizontal-grip-blueprint",
    "name": "Horizontal Grip Blueprint",
    "description": "Allows you to craft the Horizontal Grip.",
    "category": "Blueprints",
    "subcategory": "Blueprint",
    "rarity": "Legendary",
    "value": 5000,
    "weight": 0,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/horizontal-grip-blueprint.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "hullcracker-blueprint",
    "name": "Hullcracker Blueprint",
    "description": "Lets you craft an Hullcracker",
    "category": "Blueprints",
    "subcategory": "Blueprint",
    "rarity": "Legendary",
    "value": 0,
    "weight": 0,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/hullcracker-blueprint.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "il-toro-recipe",
    "name": "Il Toro Blueprint",
    "description": "Lets you craft an Il Toro",
    "category": "Blueprints",
    "subcategory": "Blueprint",
    "rarity": "Legendary",
    "value": 0,
    "weight": 0,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/il-toro-recipe.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "jolt-mine-recipe",
    "name": "Jolt Mine Blueprint",
    "description": "Lets you craft a Jolt Mine",
    "category": "Blueprints",
    "subcategory": "Blueprint",
    "rarity": "Legendary",
    "value": 5000,
    "weight": 0,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/jolt-mine-recipe.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "jupiter-i-recipe",
    "name": "Jupiter Blueprint",
    "description": "Fires projectiles at an incredible velocity, capable of damaging multiple targets with one shot.",
    "category": "Blueprints",
    "subcategory": "Blueprint",
    "rarity": "Legendary",
    "value": 5000,
    "weight": 0,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/jupiter-i-recipe.webp",
    "lootArea": "Unknown",
    "workbench": "Gunsmith III",
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "kinetic-converter-recipe",
    "name": "Kinetic Converter Blueprint",
    "description": "Lets you craft a Kinetic Converter",
    "category": "Blueprints",
    "subcategory": "Blueprint",
    "rarity": "Legendary",
    "value": 0,
    "weight": 0,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/kinetic-converter-recipe.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "laser-trap-fire-recipe",
    "name": "Laser Trap: Fire Blueprint",
    "description": "Lets you craft Laser Trap: Fire",
    "category": "Blueprints",
    "subcategory": "Blueprint",
    "rarity": "Legendary",
    "value": 0,
    "weight": 0,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/laser-trap-fire-recipe.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "laser-trap-gas-recipe",
    "name": "Laser Trap: Gas Blueprint",
    "description": "Lets you craft Laser Trap: Gas",
    "category": "Blueprints",
    "subcategory": "Blueprint",
    "rarity": "Legendary",
    "value": 0,
    "weight": 0,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/laser-trap-gas-recipe.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "launcher-ammo-blueprint",
    "name": "Launcher Ammo Blueprint",
    "description": "Anti-ARC payloads used mainly by the Hullcracker.",
    "category": "Blueprints",
    "subcategory": "Blueprint",
    "rarity": "Legendary",
    "value": 5000,
    "weight": 0,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/launcher-ammo-blueprint.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "light-gun-parts-recipe",
    "name": "Light Gun Parts Blueprint",
    "description": "Lets you craft Light Gun Parts",
    "category": "Blueprints",
    "subcategory": "Blueprint",
    "rarity": "Legendary",
    "value": 5000,
    "weight": 0,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/light-gun-parts-recipe.webp",
    "lootArea": "Unknown",
    "workbench": "Refiner",
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "lightweight-stock-recipe",
    "name": "Lightweight Stock Blueprint",
    "description": "Lets you craft a Lightweight Stock",
    "category": "Blueprints",
    "subcategory": "Blueprint",
    "rarity": "Legendary",
    "value": 0,
    "weight": 0,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/lightweight-stock-recipe.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "looting-mk-3-survivor-blueprint",
    "name": "Looting MK. 3 (Survivor) Blueprint",
    "description": "A heavy-duty pack mule augment. Large weight capacity and large backpack space.",
    "category": "Blueprints",
    "subcategory": "Blueprint",
    "rarity": "Legendary",
    "value": 5000,
    "weight": 0,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/looting-mk-3-survivor-blueprint.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "lure-grenade-recipe",
    "name": "Lure Grenade Blueprint",
    "description": "Lets you craft a Lure Grenade",
    "category": "Blueprints",
    "subcategory": "Blueprint",
    "rarity": "Legendary",
    "value": 5000,
    "weight": 0,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/lure-grenade-recipe.webp",
    "lootArea": "Unknown",
    "workbench": "Utility Bench",
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "medium-gun-parts-recipe",
    "name": "Medium Gun Parts Blueprint",
    "description": "Lets you craft Medium Gun Parts",
    "category": "Blueprints",
    "subcategory": "Blueprint",
    "rarity": "Legendary",
    "value": 0,
    "weight": 0,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/medium-gun-parts-recipe.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "muzzle-brake-ii-recipe",
    "name": "Muzzle Brake II Blueprint",
    "description": "Lets you craft a Muzzle Brake II",
    "category": "Blueprints",
    "subcategory": "Blueprint",
    "rarity": "Legendary",
    "value": 5000,
    "weight": 0,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/muzzle-brake-ii-recipe.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "muzzle-brake-iii-recipe",
    "name": "Muzzle Brake III Blueprint",
    "description": "Lets you craft a Muzzle Brake III",
    "category": "Blueprints",
    "subcategory": "Blueprint",
    "rarity": "Legendary",
    "value": 0,
    "weight": 0,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/muzzle-brake-iii-recipe.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "osprey-recipe",
    "name": "Osprey Blueprint",
    "description": "Has reliable damage output and accuracy.",
    "category": "Blueprints",
    "subcategory": "Blueprint",
    "rarity": "Legendary",
    "value": 5000,
    "weight": 0,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/osprey-recipe.webp",
    "lootArea": "Unknown",
    "workbench": "Gunsmith II",
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "padded-stock-recipe",
    "name": "Padded Stock Blueprint",
    "description": "Lets you craft a Padded Stock",
    "category": "Blueprints",
    "subcategory": "Blueprint",
    "rarity": "Legendary",
    "value": 0,
    "weight": 0,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/padded-stock-recipe.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "power-rod-recipe",
    "name": "Power Rod Blueprint",
    "description": "Lets you craft a Power Rod",
    "category": "Blueprints",
    "subcategory": "Blueprint",
    "rarity": "Legendary",
    "value": 0,
    "weight": 0,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/power-rod-recipe.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "pulse-mine-blueprint",
    "name": "Pulse Mine Blueprint",
    "description": "Lets you craft a Pulse Mine",
    "category": "Blueprints",
    "subcategory": "Blueprint",
    "rarity": "Legendary",
    "value": 0,
    "weight": 0,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/pulse-mine-blueprint.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "red-light-stick-blueprint",
    "name": "Red Light Stick Blueprint",
    "description": "Lets you craft a Red Light Stick.",
    "category": "Blueprints",
    "subcategory": "Blueprint",
    "rarity": "Legendary",
    "value": 5000,
    "weight": 0,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/red-light-stick-blueprint.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "remote-raider-flare-blueprint",
    "name": "Remote Raider Flare Blueprint",
    "description": "Allows you to craft the Remote Raider Flare.",
    "category": "Blueprints",
    "subcategory": "Blueprint",
    "rarity": "Legendary",
    "value": 5000,
    "weight": 0,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/remote-raider-flare-blueprint.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "renegade-recipe",
    "name": "Renegade Blueprint",
    "description": "Lets you craft a Renegade",
    "category": "Blueprints",
    "subcategory": "Blueprint",
    "rarity": "Legendary",
    "value": 0,
    "weight": 0,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/renegade-recipe.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "seeker-grenade-blueprint",
    "name": "Seeker Grenade Blueprint",
    "description": "Lets you craft a Seeker Grenade",
    "category": "Blueprints",
    "subcategory": "Blueprint",
    "rarity": "Legendary",
    "value": 0,
    "weight": 0,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/seeker-grenade-blueprint.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "shotgun-choke-ii-recipe",
    "name": "Shotgun Choke II Blueprint",
    "description": "Lets you craft a Shotgun Choke II",
    "category": "Blueprints",
    "subcategory": "Blueprint",
    "rarity": "Legendary",
    "value": 5000,
    "weight": 0,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/shotgun-choke-ii-recipe.webp",
    "lootArea": "Unknown",
    "workbench": "Weapon Bench",
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "shotgun-choke-iii-recipe",
    "name": "Shotgun Choke III Blueprint",
    "description": "Lets you craft a Shotgun Choke III",
    "category": "Blueprints",
    "subcategory": "Blueprint",
    "rarity": "Legendary",
    "value": 0,
    "weight": 0,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/shotgun-choke-iii-recipe.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "shotgun-parts-recipe",
    "name": "Shotgun Parts Blueprint",
    "description": "Lets you craft Shotgun Parts",
    "category": "Blueprints",
    "subcategory": "Blueprint",
    "rarity": "Legendary",
    "value": 0,
    "weight": 0,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/shotgun-parts-recipe.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "shotgun-silencer-blueprint",
    "name": "Shotgun Silencer Blueprint",
    "description": "Lets you craft a Shotgun Silencer. Moderately reduces the amount of noise produced when firing.",
    "category": "Blueprints",
    "subcategory": "Blueprint",
    "rarity": "Legendary",
    "value": 5000,
    "weight": 0,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/shotgun-silencer-blueprint.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "showstopper-blueprint",
    "name": "Showstopper Blueprint",
    "description": "Lets you craft a Showstopper.",
    "category": "Blueprints",
    "subcategory": "Blueprint",
    "rarity": "Legendary",
    "value": 5000,
    "weight": 0,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/showstopper-blueprint.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "silencer-i-recipe",
    "name": "Silencer I Blueprint",
    "description": "Lets you craft a Silencer I",
    "category": "Blueprints",
    "subcategory": "Blueprint",
    "rarity": "Legendary",
    "value": 0,
    "weight": 0,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/silencer-i-recipe.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "silencer-ii-recipe",
    "name": "Silencer II Blueprint",
    "description": "Lets you craft a Silencer II",
    "category": "Blueprints",
    "subcategory": "Blueprint",
    "rarity": "Legendary",
    "value": 0,
    "weight": 0,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/silencer-ii-recipe.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "silencer-iii-recipe",
    "name": "Silencer III Blueprint",
    "description": "Lets you craft a Silencer III",
    "category": "Blueprints",
    "subcategory": "Blueprint",
    "rarity": "Legendary",
    "value": 0,
    "weight": 0,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/silencer-iii-recipe.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "smoke-grenade-blueprint",
    "name": "Smoke Grenade Blueprint",
    "description": "Lets you craft a Smoke Grenade",
    "category": "Blueprints",
    "subcategory": "Blueprint",
    "rarity": "Legendary",
    "value": 5000,
    "weight": 0,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/smoke-grenade-blueprint.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "snap-hook-recipe",
    "name": "Snap Hook Blueprint",
    "description": "Lets you craft a Snap Hook",
    "category": "Blueprints",
    "subcategory": "Blueprint",
    "rarity": "Legendary",
    "value": 5000,
    "weight": 0,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/snap-hook-recipe.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "stable-stock-ii-recipe",
    "name": "Stable Stock II Blueprint",
    "description": "Lets you craft a Stable Stock II",
    "category": "Blueprints",
    "subcategory": "Blueprint",
    "rarity": "Legendary",
    "value": 0,
    "weight": 0,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/stable-stock-ii-recipe.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "stable-stock-iii-recipe",
    "name": "Stable Stock III Blueprint",
    "description": "Lets you craft a Stable Stock III",
    "category": "Blueprints",
    "subcategory": "Blueprint",
    "rarity": "Legendary",
    "value": 0,
    "weight": 0,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/stable-stock-iii-recipe.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "sterilized-bandage-recipe",
    "name": "Sterilized Bandage Blueprint",
    "description": "Lets you craft a Sterilized Bandage",
    "category": "Blueprints",
    "subcategory": "Blueprint",
    "rarity": "Legendary",
    "value": 0,
    "weight": 0,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/sterilized-bandage-recipe.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "tactical-mk3-defensive-blueprint",
    "name": "Tactical MK.3 (Defensive) Blueprint",
    "description": "a defense-focused augment for keeping Shields topped up",
    "category": "Blueprints",
    "subcategory": "Blueprint",
    "rarity": "Legendary",
    "value": 5000,
    "weight": 0,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/tactical-mk3-defensive-blueprint.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "tacical-mk3-healing-blueprint",
    "name": "Tactical MK.3 (Healing) Blueprint",
    "description": "A healing-focused augment which adds extra slots for healing items.",
    "category": "Blueprints",
    "subcategory": "Blueprint",
    "rarity": "Legendary",
    "value": 5000,
    "weight": 0,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/tacical-mk3-healing-blueprint.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "tagging-grenade-recipe",
    "name": "Tagging Grenade Blueprint",
    "description": "Lets you craft a Tagging Grenade",
    "category": "Blueprints",
    "subcategory": "Blueprint",
    "rarity": "Legendary",
    "value": 0,
    "weight": 0,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/tagging-grenade-recipe.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "tempest-i-recipe",
    "name": "Tempest I Blueprint",
    "description": "Lets you craft a Tempest I",
    "category": "Blueprints",
    "subcategory": "Blueprint",
    "rarity": "Legendary",
    "value": 5000,
    "weight": 0,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/tempest-i-recipe.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "torrent-i-recipe",
    "name": "Torrente Blueprint",
    "description": "Lets you craft a Torrente",
    "category": "Blueprints",
    "subcategory": "Blueprint",
    "rarity": "Legendary",
    "value": 5000,
    "weight": 0,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/torrent-i-recipe.webp",
    "lootArea": "Unknown",
    "workbench": "Gunsmith II",
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "trailblazer-grenade-blueprint",
    "name": "Trailblazer Grenade Blueprint",
    "description": "Lets you craft a Trailblazer Grenade",
    "category": "Blueprints",
    "subcategory": "Blueprint",
    "rarity": "Legendary",
    "value": 0,
    "weight": 0,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/trailblazer-grenade-blueprint.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "trigger-nade-recipe",
    "name": "Trigger Nade Blueprint",
    "description": "Lets you craft a Trigger Nade",
    "category": "Blueprints",
    "subcategory": "Blueprint",
    "rarity": "Legendary",
    "value": 5000,
    "weight": 0,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/trigger-nade-recipe.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "venator-recipe",
    "name": "Venator Blueprint",
    "description": "Lets you craft a Venator. Fires two shots at a time.",
    "category": "Blueprints",
    "subcategory": "Blueprint",
    "rarity": "Legendary",
    "value": 5000,
    "weight": 0,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/venator-recipe.webp",
    "lootArea": "Unknown",
    "workbench": "Gunsmith II",
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "vertical-grip-ii-recipe",
    "name": "Vertical Grip II Blueprint",
    "description": "Lets you craft a Vertical Grip II",
    "category": "Blueprints",
    "subcategory": "Blueprint",
    "rarity": "Legendary",
    "value": 0,
    "weight": 0,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/vertical-grip-ii-recipe.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "vertical-grip-iii-recipe",
    "name": "Vertical Grip III Blueprint",
    "description": "Lets you craft a Vertical Grip III",
    "category": "Blueprints",
    "subcategory": "Blueprint",
    "rarity": "Legendary",
    "value": 0,
    "weight": 0,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/vertical-grip-iii-recipe.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "vita-shot-recipe",
    "name": "Vita Shot Blueprint",
    "description": "Lets you craft a Vita Shot - A medical item that restores a large amount of health.",
    "category": "Blueprints",
    "subcategory": "Blueprint",
    "rarity": "Legendary",
    "value": 5000,
    "weight": 0,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/vita-shot-recipe.webp",
    "lootArea": "Unknown",
    "workbench": "Med Station",
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "vita-spray-recipe",
    "name": "Vita Spray Blueprint",
    "description": "Lets you craft a Vita Spray",
    "category": "Blueprints",
    "subcategory": "Blueprint",
    "rarity": "Legendary",
    "value": 5000,
    "weight": 0,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/vita-spray-recipe.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "vulcano-blueprint",
    "name": "Vulcano Blueprint",
    "description": "Allows you to craft the Vulcano.",
    "category": "Blueprints",
    "subcategory": "Blueprint",
    "rarity": "Legendary",
    "value": 5000,
    "weight": 0,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/vulcano-blueprint.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "wolfpack-recipe",
    "name": "Wolfpack Blueprint",
    "description": "Lets you craft a Wolfpack",
    "category": "Blueprints",
    "subcategory": "Blueprint",
    "rarity": "Legendary",
    "value": 5000,
    "weight": 0,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/wolfpack-recipe.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "yellow-light-stick-blueprint",
    "name": "Yellow Light Stick Blueprint",
    "description": "Lets you craft a Yellow Light Stick",
    "category": "Blueprints",
    "subcategory": "Blueprint",
    "rarity": "Legendary",
    "value": 5000,
    "weight": 0,
    "stackSize": 1,
    "icon": "",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "breathtaking-snow-globe",
    "name": "Breathtaking Snow Globe",
    "description": "The envy of every Speranzan. Proof that this world was once thriving and magical.",
    "category": "Collectibles",
    "subcategory": "Trinket",
    "rarity": "Epic",
    "value": 7000,
    "weight": 0.2,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/breathtaking-snow-globe.webp",
    "lootArea": "Residential, Old World, Commercial",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "lances-mixtape-5th-edition",
    "name": "Lance's Mixtape (5th Edition)",
    "description": "Lance has personally planted a number of these around the Rust Belt, for some reason.",
    "category": "Collectibles",
    "subcategory": "Trinket",
    "rarity": "Epic",
    "value": 10000,
    "weight": 0.2,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/lances-mixtape-5th-edition.webp",
    "lootArea": "Commercial, Residential",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "film-reel",
    "name": "Film Reel",
    "description": "May be worth a few coins.",
    "category": "Collectibles",
    "subcategory": "Trinket",
    "rarity": "Rare",
    "value": 2000,
    "weight": 0.2,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/film-reel.webp",
    "lootArea": "Residential, Old World",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "fine-wristwatch",
    "name": "Fine Wristwatch",
    "description": "Perfect for telling the time, and showcasing that you're an exceedingly dignified person.",
    "category": "Collectibles",
    "subcategory": "Trinket",
    "rarity": "Rare",
    "value": 3000,
    "weight": 0.2,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/fine-wristwatch.webp",
    "lootArea": "Commercial, Residential",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "music-album",
    "name": "Music Album",
    "description": "Perfect for relaxing nights at home, casual get-togethers, and private air and guitar concerts.",
    "category": "Collectibles",
    "subcategory": "Trinket",
    "rarity": "Rare",
    "value": 3000,
    "weight": 0.3,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/music-album.webp",
    "lootArea": "Residential, Commercial",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "music-box",
    "name": "Music Box",
    "description": "Worth a small fortune.",
    "category": "Collectibles",
    "subcategory": "Trinket",
    "rarity": "Rare",
    "value": 5000,
    "weight": 0.4,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/music-box.webp",
    "lootArea": "Old World, Commercial, Residential",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "playing-cards",
    "name": "Playing Cards",
    "description": "Speranzans love to see who can build the tallest tower - before the tremors knock them down.",
    "category": "Collectibles",
    "subcategory": "Trinket",
    "rarity": "Rare",
    "value": 5000,
    "weight": 0.2,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/playing-cards.webp",
    "lootArea": "Commercial, Residential",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "red-coral-jewelry",
    "name": "Red Coral Jewelry",
    "description": "Valued for its fine craftmanship, and effortless ability to make your eyes pop.",
    "category": "Collectibles",
    "subcategory": "Trinket",
    "rarity": "Rare",
    "value": 5000,
    "weight": 0.3,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/red-coral-jewelry.webp",
    "lootArea": "Old World, Residential, Commercial",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "rosary",
    "name": "Rosary",
    "description": "May be worth a few coins.",
    "category": "Collectibles",
    "subcategory": "Trinket",
    "rarity": "Rare",
    "value": 2000,
    "weight": 0.3,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/rosary.webp",
    "lootArea": "Old World, Residential",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "silver-teaspoon-set",
    "name": "Silver Teaspoon Set",
    "description": "A shining, shimmering set  of refinement and elegance.",
    "category": "Collectibles",
    "subcategory": "Trinket",
    "rarity": "Rare",
    "value": 3000,
    "weight": 0.3,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/silver-teaspoon-set.webp",
    "lootArea": "Old World, Commercial, Residential",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "statuette",
    "name": "Statuette",
    "description": "A small decorative statuette.",
    "category": "Collectibles",
    "subcategory": "Trinket",
    "rarity": "Rare",
    "value": 3000,
    "weight": 0.3,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/statuette.webp",
    "lootArea": "Old World, Residential",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "vase",
    "name": "Vase",
    "description": "A decorative vase, possibly valuable.",
    "category": "Collectibles",
    "subcategory": "Trinket",
    "rarity": "Rare",
    "value": 3000,
    "weight": 0.3,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/vase.webp",
    "lootArea": "Old World, Commercial, Residential",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "air-freshener",
    "name": "Air Freshener",
    "description": "May be worth a few coins.",
    "category": "Collectibles",
    "subcategory": "Trinket",
    "rarity": "Uncommon",
    "value": 2000,
    "weight": 0.3,
    "stackSize": 5,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/air-freshener.webp",
    "lootArea": "Mechanical",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": [
      {
        "item": {
          "id": "flame-spray",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/flame-spray.webp",
          "name": "Flame Spray",
          "rarity": "Uncommon",
          "item_type": "Quick use",
          "description": "A classic makeshift weapon, sure to leave scorch marks."
        },
        "quantity": 1
      }
    ]
  },
  {
    "id": "cat-bed",
    "name": "Cat Bed",
    "description": "At least a tiny bit more comfortable than your face.",
    "category": "Collectibles",
    "subcategory": "Trinket",
    "rarity": "Uncommon",
    "value": 1000,
    "weight": 0.5,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/cat-bed.webp",
    "lootArea": "Commercial, Residential",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "dart-board",
    "name": "Dart Board",
    "description": "Some Raiders use it to practice dexterity. Others just like throwing things at other things.",
    "category": "Collectibles",
    "subcategory": "Trinket",
    "rarity": "Uncommon",
    "value": 2000,
    "weight": 1,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/dart-board.webp",
    "lootArea": "Commercial, Residential",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "light-bulb",
    "name": "Light Bulb",
    "description": "Without light, life underground would be impossible.",
    "category": "Collectibles",
    "subcategory": "Trinket",
    "rarity": "Uncommon",
    "value": 2000,
    "weight": 0.2,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/light-bulb.webp",
    "lootArea": "Electrical",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "painted-box",
    "name": "Painted Box",
    "description": "May be worth a few coins.",
    "category": "Collectibles",
    "subcategory": "Trinket",
    "rarity": "Uncommon",
    "value": 2000,
    "weight": 0.3,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/painted-box.webp",
    "lootArea": "Old World",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "poster-natural-wonder",
    "name": "Poster of Natural Wonder",
    "description": "If you stand close and squint your eyes, it's like the world never came crumbling down.",
    "category": "Collectibles",
    "subcategory": "Trinket",
    "rarity": "Uncommon",
    "value": 2000,
    "weight": 0.3,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/poster-natural-wonder.webp",
    "lootArea": "Residential, Commercial",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "pottery",
    "name": "Pottery",
    "description": "A piece of hand-crafted pottery.",
    "category": "Collectibles",
    "subcategory": "Trinket",
    "rarity": "Uncommon",
    "value": 2000,
    "weight": 0.3,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/pottery.webp",
    "lootArea": "Old World, Residential",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "recorder",
    "name": "Recorder",
    "description": "A playable recorder used to attract ARC's attention and impress other Raiders.",
    "category": "Collectibles",
    "subcategory": "Trinket",
    "rarity": "Uncommon",
    "value": 1000,
    "weight": 0.2,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/recorded.webp",
    "lootArea": "Residential",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 10,
        "component": {
          "id": "plastic-parts",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/plastic-parts.webp",
          "name": "Plastic Parts",
          "rarity": "Common",
          "item_type": "Basic Material",
          "description": "Used to craft a wide range of items."
        }
      }
    ],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "very-comfortable-pillow",
    "name": "Very Comfortable Pillow",
    "description": "The envy of every Raider. Like sleeping on an especially ergonomic cloud.",
    "category": "Collectibles",
    "subcategory": "Trinket",
    "rarity": "Uncommon",
    "value": 2000,
    "weight": 0.3,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/very-comfortable-pillow.webp",
    "lootArea": "Residential, Commercial",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "aviator-outfit",
    "name": "Aviator (Outfit)",
    "description": "Aviator outfit is a quest reward from Armored Transports.",
    "category": "Collectibles",
    "subcategory": "Misc",
    "rarity": "Common",
    "value": 0,
    "weight": 0,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/aviator-outfit.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "bag-radio-renegade-variant",
    "name": "Bag (Radio Renegade Variant)",
    "description": "Radio Renegade Bag Variant - Unlock by completing Power Out Quest.",
    "category": "Collectibles",
    "subcategory": "Misc",
    "rarity": "Common",
    "value": 0,
    "weight": 0,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/bag-radio-renegade-variant.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "banana-backpack-charm",
    "name": "Banana (Backpack Charm)",
    "description": "Banana backpack charm from Medical Merchandise quest.",
    "category": "Collectibles",
    "subcategory": "Misc",
    "rarity": "Common",
    "value": 0,
    "weight": 0,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/banana-backpack-charm.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "black-hiker-colour",
    "name": "Black (Hiker Colour)",
    "description": "A new cosmetic variant will be added to your collection for the Hiker backpack",
    "category": "Collectibles",
    "subcategory": "Misc",
    "rarity": "Common",
    "value": 0,
    "weight": 0,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/black-hiker-colour.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": "COSMETIC - Hiker Colour",
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "black-and-white-origin-color",
    "name": "Black & White (Origin Color)",
    "description": "A new cosmetic variant will be added to your collection. Complete Off the Radar Quest.",
    "category": "Collectibles",
    "subcategory": "Misc",
    "rarity": "Common",
    "value": 0,
    "weight": 0,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/black-and-white-origin-color.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "black-eye-face-style",
    "name": "Black Eye (Face Style)",
    "description": "Maintain at least Rookie III rank in trials until season end.",
    "category": "Collectibles",
    "subcategory": "Misc",
    "rarity": "Common",
    "value": 0,
    "weight": 0,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/black-eye-face-style.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "bloated-tuna-can",
    "name": "Bloated Tuna Can",
    "description": "A can of tuna, suspiciously bloated.",
    "category": "Collectibles",
    "subcategory": "Trinket",
    "rarity": "Common",
    "value": 1000,
    "weight": 0.2,
    "stackSize": 15,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/bloated-tuna-can.webp",
    "lootArea": "Commercial, Residential",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "blue-radio-renegade-color",
    "name": "Blue (Radio Renegade Color)",
    "description": "A new cosmetic variant will be added to your collection. Complete the Switching the Supply Quest.",
    "category": "Collectibles",
    "subcategory": "Misc",
    "rarity": "Common",
    "value": 0,
    "weight": 0,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/blue-radio-renegade-color.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "blue-yellow-aviator-color",
    "name": "Blue Yellow (Aviator Color)",
    "description": "A new cosmetic variant will be added to your collection.",
    "category": "Collectibles",
    "subcategory": "Misc",
    "rarity": "Common",
    "value": 0,
    "weight": 0,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/blue-yellow-aviator-color.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "bow-and-arrow-emote",
    "name": "Bow and Arrow (Emote)",
    "description": "Emote is rewarded for maintaining at least a Wildcard III rank in trials until the season end.",
    "category": "Collectibles",
    "subcategory": "Misc",
    "rarity": "Common",
    "value": 0,
    "weight": 0,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/bow-and-arrow-emote.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "briefcase-backpack-attachment",
    "name": "Briefcase (Backpack Attachment)",
    "description": "Maintain at least Tryhard III rank in Trials until the season end.",
    "category": "Collectibles",
    "subcategory": "Misc",
    "rarity": "Common",
    "value": 0,
    "weight": 0,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/briefcase-backpack-attachment.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "burgerboy-backpack-charm",
    "name": "Burgerboy (Backpack Charm)",
    "description": "Burgerboy backpack charm from Into The Fray quest.",
    "category": "Collectibles",
    "subcategory": "Misc",
    "rarity": "Common",
    "value": 0,
    "weight": 0,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/burgerboy-backpack-charm.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "cans-backpack-attachment",
    "name": "Cans (Backpack Attachment)",
    "description": "A set of cans that are a backpack attachment from the quest Safe Passage.",
    "category": "Collectibles",
    "subcategory": "Cosmetic",
    "rarity": "Common",
    "value": 0,
    "weight": 0,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/cans-backpack-attachment.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "cheer-emote",
    "name": "Cheer (Emote)",
    "description": "Cheer Emote - Quest reward from The Right Tool",
    "category": "Collectibles",
    "subcategory": "Misc",
    "rarity": "Common",
    "value": 0,
    "weight": 0,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/cheer-emote.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "coffee-pot",
    "name": "Coffee Pot",
    "description": "The power to face a new day, one drip at a time.",
    "category": "Collectibles",
    "subcategory": "Trinket",
    "rarity": "Common",
    "value": 1000,
    "weight": 0.3,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/coffee-pot.webp",
    "lootArea": "Residential",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "crimson-racer-aviator-colour",
    "name": "Crimson Racer (Aviator Colour)",
    "description": "Crimson Racer (Aviator Colour) is a quest reward from Communication Hideout",
    "category": "Collectibles",
    "subcategory": "Misc",
    "rarity": "Common",
    "value": 0,
    "weight": 0,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/crimson-racer-aviator-colour.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "empty-wine-bottle",
    "name": "Empty Wine Bottle",
    "description": "Yes, it really is empty.",
    "category": "Collectibles",
    "subcategory": "Trinket",
    "rarity": "Common",
    "value": 1000,
    "weight": 0.2,
    "stackSize": 5,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/empty-wine-bottle.webp",
    "lootArea": "Commercial, Residential",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": [
      {
        "item": {
          "id": "agave-juice",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/agave-juice.webp",
          "name": "Agave Juice",
          "rarity": "Common",
          "item_type": "Consumable",
          "description": "A concoction that temporarily increases stamina regeneration, at a small initial cost to health."
        },
        "quantity": 1
      }
    ]
  },
  {
    "id": "expired-pasta",
    "name": "Expired Pasta",
    "description": "Way pasta its prime.",
    "category": "Collectibles",
    "subcategory": "Trinket",
    "rarity": "Common",
    "value": 1000,
    "weight": 0.1,
    "stackSize": 15,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/expired-pasta.webp",
    "lootArea": "Commercial, Residential",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "faded-photograph",
    "name": "Faded Photograph",
    "description": "A snapshot of the world before, faded by sunlight and time.",
    "category": "Collectibles",
    "subcategory": "Trinket",
    "rarity": "Common",
    "value": 640,
    "weight": 0.3,
    "stackSize": 15,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/faded-photograph.webp",
    "lootArea": "Residential",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "goggles-radio-renegade-variant",
    "name": "Goggles (Radio Renegade Variant)",
    "description": "Radio Renegade cosmetic variant - unlocked by completing A Warm Place to Rest quest.",
    "category": "Collectibles",
    "subcategory": "Misc",
    "rarity": "Common",
    "value": 0,
    "weight": 0,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/goggles-radio-renegade-variant.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "happy-jig-emote",
    "name": "Happy Jig (Emote)",
    "description": "Maintain at least a  Rookie II rank in trials until season end.",
    "category": "Collectibles",
    "subcategory": "Misc",
    "rarity": "Common",
    "value": 0,
    "weight": 0,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/happy-jig-emote.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "helmet-radio-renegade-variant",
    "name": "Helmet (Radio Renegade Variant)",
    "description": "Radio Renegade Helmet Variant - Unlocks by completing Flickering Threat Quest",
    "category": "Collectibles",
    "subcategory": "Misc",
    "rarity": "Common",
    "value": 0,
    "weight": 0,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/helmet-radio-renegade-variant.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "junior-outfit",
    "name": "Junior (Outfit)",
    "description": "This is the Junior cosmetic outfit",
    "category": "Collectibles",
    "subcategory": "Cosmetic",
    "rarity": "Common",
    "value": 0,
    "weight": 0,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/junior-outfit.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "lidar-scanner",
    "name": "Lidar Scanner",
    "description": "A laser-based scanner used to detect the subtlest changer to the Earth's surface.",
    "category": "Collectibles",
    "subcategory": "Trinket",
    "rarity": "Common",
    "value": 0,
    "weight": 0.25,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/lidar-scanner.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "mastery-medal-backpack-charm",
    "name": "Mastery Medal (Backpack Charm)",
    "description": "Maintain Wildcard I trials rank until the season end.",
    "category": "Collectibles",
    "subcategory": "Misc",
    "rarity": "Common",
    "value": 0,
    "weight": 0,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/mastery-medal-backpack-charm.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "orange-camo-origin-outfit",
    "name": "Orange Camo (Origin Outfit)",
    "description": "Orange camo color is unlocked for completing The Trifecta quest.",
    "category": "Collectibles",
    "subcategory": "Misc",
    "rarity": "Common",
    "value": 0,
    "weight": 0,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/orange-camo-origin-outfit.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "patrol-outfit",
    "name": "Patrol (Outfit)",
    "description": "Rewarded for maintaining at least  a Daredevil I rank in the trials until the season ends.",
    "category": "Collectibles",
    "subcategory": "Misc",
    "rarity": "Common",
    "value": 0,
    "weight": 0,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/patrol-outfit.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "radio-renegade-outfit",
    "name": "Radio Renegade (Outfit)",
    "description": "Radio Renegade outfit is given to you as a reward from the quest Switching The Supply",
    "category": "Collectibles",
    "subcategory": "Misc",
    "rarity": "Common",
    "value": 0,
    "weight": 0,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/radio-renegade-outfit.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "rubber-duck",
    "name": "Rubber Duck",
    "description": "Always there to lend an ear, should you need it.",
    "category": "Collectibles",
    "subcategory": "Trinket",
    "rarity": "Common",
    "value": 1000,
    "weight": 0.3,
    "stackSize": 15,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/rubber-duck.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "succulent-backpack-charm",
    "name": "Succulent (Backpack Charm)",
    "description": "Complete the quest The Root Of The Matter to get this charm.",
    "category": "Collectibles",
    "subcategory": "Misc",
    "rarity": "Common",
    "value": 0,
    "weight": 0,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/succulent-backpack-charm.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "torn-book",
    "name": "Torn Book",
    "description": "What pages remain speak of chosen heroes, vampires, and lots of longing glances.",
    "category": "Collectibles",
    "subcategory": "Trinket",
    "rarity": "Common",
    "value": 1000,
    "weight": 0.3,
    "stackSize": 5,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/torn-book.webp",
    "lootArea": "Residential, Old World",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "volcanic-rock",
    "name": "Volcanic Rock",
    "description": "No description available.",
    "category": "Collectibles",
    "subcategory": "Misc",
    "rarity": "Common",
    "value": 270,
    "weight": 0.5,
    "stackSize": 5,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/volcanic-rock.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "combat-mk-3-aggressive",
    "name": "Combat Mk. 3 (Aggressive)",
    "description": "An improved version of the Combat II augment. Supports more shield types, and comes with extra space for grenades.",
    "category": "Equipment",
    "subcategory": "Augment",
    "rarity": "Epic",
    "value": 5000,
    "weight": 5,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/combat-mk-3-aggressive.webp",
    "lootArea": "Unknown",
    "workbench": "Gear Bench III",
    "uses": "Restores 2 health every 5 seconds. When damage is taken, the effect is paused for 30 seconds.",
    "recycleComponents": [],
    "droppedBy": [],
    "components": [
      {
        "quantity": 2,
        "component": {
          "id": "advanced-electrical-components",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/advanced-electrical-components.webp",
          "name": "Advanced Electrical Components",
          "rarity": "Rare",
          "item_type": "Refined Material"
        }
      },
      {
        "quantity": 3,
        "component": {
          "id": "processor",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/processor.webp",
          "name": "Processor",
          "rarity": "Rare",
          "item_type": "Topside Material"
        }
      }
    ],
    "usedIn": []
  },
  {
    "id": "combat-mk3-flanking",
    "name": "Combat Mk.3 (Flanking) ",
    "description": "A Combat augment more focused on maneuverability than absorbing damage.",
    "category": "Equipment",
    "subcategory": "Augment",
    "rarity": "Epic",
    "value": 5000,
    "weight": 3,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/combat-mk3-flanking.webp",
    "lootArea": "Unknown",
    "workbench": "Gunsmith III",
    "uses": "Stowed or unequipped Pistols and Hand Cannon are 33% faster to equip.",
    "recycleComponents": [],
    "droppedBy": [],
    "components": [
      {
        "quantity": 2,
        "component": {
          "id": "advanced-electrical-components",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/advanced-electrical-components.webp",
          "name": "Advanced Electrical Components",
          "rarity": "Rare",
          "item_type": "Refined Material"
        }
      },
      {
        "quantity": 3,
        "component": {
          "id": "processor",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/processor.webp",
          "name": "Processor",
          "rarity": "Rare",
          "item_type": "Topside Material"
        }
      }
    ],
    "usedIn": []
  },
  {
    "id": "heavy-shield",
    "name": "Heavy Shield",
    "description": "A heavy shield that blocks a large portion of incoming damage, but carries a significant cost to mobility.",
    "category": "Equipment",
    "subcategory": "Shield",
    "rarity": "Epic",
    "value": 5500,
    "weight": 9,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/heavy-shield.webp",
    "lootArea": "Unknown",
    "workbench": "Gear Bench 3",
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [
      {
        "quantity": 1,
        "component": {
          "id": "power-rod",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/power-rod.webp",
          "name": "Power Rod",
          "rarity": "Epic",
          "item_type": "Advanced Material"
        }
      },
      {
        "quantity": 2,
        "component": {
          "id": "voltage-converter",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/voltage-converter.webp",
          "name": "Voltage Converter",
          "rarity": "Rare",
          "item_type": "Topside Material"
        }
      }
    ],
    "usedIn": []
  },
  {
    "id": "looting-mk-3-cautious",
    "name": "Looting MK. 3 (Cautious)",
    "description": "A looting augment that swaps some carry capacity to increase survivability.",
    "category": "Equipment",
    "subcategory": "Augment",
    "rarity": "Epic",
    "value": 5000,
    "weight": 3,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/looting-mk-3-cautious.webp",
    "lootArea": "Unknown",
    "workbench": "Equipment Bench",
    "uses": "Upon Shield break, automatically administers a weak Adrenaline Shot. Has a fixed cooldown.",
    "recycleComponents": [],
    "droppedBy": [],
    "components": [
      {
        "quantity": 2,
        "component": {
          "id": "advanced-electrical-components",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/advanced-electrical-components.webp",
          "name": "Advanced Electrical Components",
          "rarity": "Rare",
          "item_type": "Refined Material"
        }
      },
      {
        "quantity": 3,
        "component": {
          "id": "processor",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/processor.webp",
          "name": "Processor",
          "rarity": "Rare",
          "item_type": "Topside Material"
        }
      }
    ],
    "usedIn": []
  },
  {
    "id": "looting-mk-3-survivor",
    "name": "Looting MK. 3 (Survivor)",
    "description": "A heavy-duty pack mule augment. Large weight capacity and large backpack space.",
    "category": "Equipment",
    "subcategory": "Augment",
    "rarity": "Epic",
    "value": 5000,
    "weight": 4,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/looting-mk-3-survivor.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": "While downed and stationary, health regenerates up to 75% of max downed health.",
    "recycleComponents": [
      {
        "quantity": 1,
        "component": {
          "id": "advanced-electrical-components",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/advanced-electrical-components.webp",
          "name": "Advanced Electrical Components",
          "rarity": "Rare",
          "item_type": "Refined Material",
          "description": "Used to craft a wide range of items. Can be recycled into crafting materials."
        }
      },
      {
        "quantity": 1,
        "component": {
          "id": "processor",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/processor.webp",
          "name": "Processor",
          "rarity": "Rare",
          "item_type": "Topside Material",
          "description": "Used in crafting."
        }
      }
    ],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "tactical-mk-3-healing",
    "name": "Tactical Mk. 3 (Healing)",
    "description": "A healing-focused augment which adds extra slots for healing items.",
    "category": "Equipment",
    "subcategory": "Augment",
    "rarity": "Epic",
    "value": 5000,
    "weight": 4,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/tactical-mk-3-healing.webp",
    "lootArea": "Unknown",
    "workbench": "Gear Bench III",
    "uses": "When revived from being downed, released a healing cloud that restores 20 health over 10 seconds. Has a 30-second cooldown.",
    "recycleComponents": [],
    "droppedBy": [],
    "components": [
      {
        "quantity": 2,
        "component": {
          "id": "advanced-electrical-components",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/advanced-electrical-components.webp",
          "name": "Advanced Electrical Components",
          "rarity": "Rare",
          "item_type": "Refined Material"
        }
      },
      {
        "quantity": 3,
        "component": {
          "id": "processor",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/processor.webp",
          "name": "Processor",
          "rarity": "Rare",
          "item_type": "Topside Material"
        }
      }
    ],
    "usedIn": []
  },
  {
    "id": "tactical-mk3-defensive",
    "name": "Tactical Mk.3 (Defensive)",
    "description": "A defence-focused augment for keeping shields topped up.",
    "category": "Equipment",
    "subcategory": "Augment",
    "rarity": "Epic",
    "value": 5000,
    "weight": 5,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/tactical-mk3-defensive.webp",
    "lootArea": "Unknown",
    "workbench": "Gear Bench III",
    "uses": "Allows Shield Rechargers to be used while running.",
    "recycleComponents": [],
    "droppedBy": [],
    "components": [
      {
        "quantity": 2,
        "component": {
          "id": "advanced-electrical-components",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/advanced-electrical-components.webp",
          "name": "Advanced Electrical Components",
          "rarity": "Rare",
          "item_type": "Refined Material"
        }
      },
      {
        "quantity": 3,
        "component": {
          "id": "processor",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/processor.webp",
          "name": "Processor",
          "rarity": "Rare",
          "item_type": "Topside Material"
        }
      }
    ],
    "usedIn": []
  },
  {
    "id": "combat-mk-2",
    "name": "Combat Mk. 2",
    "description": "A Combat augment more focused on manoeuvrability than absorbing damage. ",
    "category": "Equipment",
    "subcategory": "Augment",
    "rarity": "Rare",
    "value": 2000,
    "weight": 0,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/combat-mk-2.webp",
    "lootArea": "Unknown",
    "workbench": "Equipment Bench",
    "uses": "Restores 1 health every 5 seconds. When damage is taken, the effect is paused for 30 seconds.",
    "recycleComponents": [
      {
        "quantity": 1,
        "component": {
          "id": "electrical-components",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/electrical-components.webp",
          "name": "Electrical Components",
          "rarity": "Uncommon",
          "item_type": "Refined Material",
          "description": "Used to craft a wide range of items. Can be recycled into crafting materials."
        }
      },
      {
        "quantity": 1,
        "component": {
          "id": "magnet",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/magnet.webp",
          "name": "Magnet",
          "rarity": "Uncommon",
          "item_type": "Topside Material",
          "description": "Fun thing to put on a fridgerator."
        }
      }
    ],
    "droppedBy": [],
    "components": [
      {
        "quantity": 2,
        "component": {
          "id": "electrical-components",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/electrical-components.webp",
          "name": "Electrical Components",
          "rarity": "Uncommon",
          "item_type": "Refined Material"
        }
      },
      {
        "quantity": 3,
        "component": {
          "id": "magnet",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/magnet.webp",
          "name": "Magnet",
          "rarity": "Uncommon",
          "item_type": "Topside Material"
        }
      }
    ],
    "usedIn": []
  },
  {
    "id": "looting-mk-2",
    "name": "Looting Mk. 2",
    "description": "Significantly increases looting potential; adds slots for trinkets.",
    "category": "Equipment",
    "subcategory": "Augment",
    "rarity": "Rare",
    "value": 2000,
    "weight": 2,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/looting-mk-2.webp",
    "lootArea": "Unknown",
    "workbench": "Equipment Bench",
    "uses": "Automatically throws off attached Ticks after 1s.",
    "recycleComponents": [],
    "droppedBy": [],
    "components": [
      {
        "quantity": 2,
        "component": {
          "id": "electrical-components",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/electrical-components.webp",
          "name": "Electrical Components",
          "rarity": "Uncommon",
          "item_type": "Refined Material"
        }
      },
      {
        "quantity": 3,
        "component": {
          "id": "magnet",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/magnet.webp",
          "name": "Magnet",
          "rarity": "Uncommon",
          "item_type": "Topside Material"
        }
      }
    ],
    "usedIn": []
  },
  {
    "id": "medium-shield",
    "name": "Medium Shield",
    "description": "A standard shield that blocks a medium portion of incoming damage at a moderate cost to mobility.",
    "category": "Equipment",
    "subcategory": "Shield",
    "rarity": "Rare",
    "value": 2000,
    "weight": 7,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/medium-shield.webp",
    "lootArea": "Unknown",
    "workbench": "Equipment Bench",
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 1,
        "component": {
          "id": "arc-circuitry",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/arc-circuitry.webp",
          "name": "ARC Circuitry",
          "rarity": "Rare",
          "item_type": "Topside Material",
          "description": " Obtained from ARC enemies or activities. Used to craft components. Can be recycled into ARC Alloy."
        }
      }
    ],
    "droppedBy": [],
    "components": [
      {
        "quantity": 1,
        "component": {
          "id": "arc-circuitry",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/arc-circuitry.webp",
          "name": "ARC Circuitry",
          "rarity": "Rare",
          "item_type": "Topside Material"
        }
      },
      {
        "quantity": 4,
        "component": {
          "id": "battery",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/battery.webp",
          "name": "Battery",
          "rarity": "Uncommon",
          "item_type": "Topside Material"
        }
      }
    ],
    "usedIn": []
  },
  {
    "id": "tactical-mk-2",
    "name": "Tactical Mk. 2",
    "description": "Adds more backpack space and an extra utility item slot.",
    "category": "Equipment",
    "subcategory": "Augment",
    "rarity": "Rare",
    "value": 2000,
    "weight": 2,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/tactical-mk-2.webp",
    "lootArea": "Unknown",
    "workbench": "Equipment Bench",
    "uses": "Upon Shield break, deploys a small smoke grenade. Has a fixed cooldown.",
    "recycleComponents": [],
    "droppedBy": [],
    "components": [
      {
        "quantity": 2,
        "component": {
          "id": "electrical-components",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/electrical-components.webp",
          "name": "Electrical Components",
          "rarity": "Uncommon",
          "item_type": "Refined Material"
        }
      },
      {
        "quantity": 3,
        "component": {
          "id": "magnet",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/magnet.webp",
          "name": "Magnet",
          "rarity": "Uncommon",
          "item_type": "Topside Material"
        }
      }
    ],
    "usedIn": []
  },
  {
    "id": "combat-mk-1",
    "name": "Combat Mk. 1",
    "description": "Basic combat augment. Supports stronger shields, but with limited backpack capacity and Quick Use slots.",
    "category": "Equipment",
    "subcategory": "Augment",
    "rarity": "Uncommon",
    "value": 640,
    "weight": 0,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/combat-mk-1.webp",
    "lootArea": "Unknown",
    "workbench": "Equipment Bench",
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 3,
        "component": {
          "id": "plastic-parts",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/plastic-parts.webp",
          "name": "Plastic Parts",
          "rarity": "Common",
          "item_type": "Basic Material",
          "description": "Used to craft a wide range of items."
        }
      },
      {
        "quantity": 3,
        "component": {
          "id": "rubber-parts-recipe",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/rubber-parts-recipe.webp",
          "name": "Rubber Parts",
          "rarity": "Common",
          "item_type": "Basic Material",
          "description": "Used to craft a wide range of items."
        }
      }
    ],
    "droppedBy": [],
    "components": [
      {
        "quantity": 6,
        "component": {
          "id": "plastic-parts",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/plastic-parts.webp",
          "name": "Plastic Parts",
          "rarity": "Common",
          "item_type": "Basic Material"
        }
      },
      {
        "quantity": 6,
        "component": {
          "id": "rubber-parts-recipe",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/rubber-parts-recipe.webp",
          "name": "Rubber Parts",
          "rarity": "Common",
          "item_type": "Basic Material"
        }
      }
    ],
    "usedIn": []
  },
  {
    "id": "light-shield",
    "name": "Light Shield",
    "description": "A lightweight shield that offers limited protection without severely impacting mobility.",
    "category": "Equipment",
    "subcategory": "Shield",
    "rarity": "Uncommon",
    "value": 640,
    "weight": 5,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/light-shield.webp",
    "lootArea": "Unknown",
    "workbench": "Equipment Bench 1",
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 4,
        "component": {
          "id": "plastic-parts",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/plastic-parts.webp",
          "name": "Plastic Parts",
          "rarity": "Common",
          "item_type": "Basic Material",
          "description": "Used to craft a wide range of items."
        }
      }
    ],
    "droppedBy": [],
    "components": [
      {
        "quantity": 2,
        "component": {
          "id": "arc-alloy",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/arc-alloy.webp",
          "name": "ARC Alloy",
          "rarity": "Uncommon",
          "item_type": "Topside Material"
        }
      },
      {
        "quantity": 4,
        "component": {
          "id": "plastic-parts",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/plastic-parts.webp",
          "name": "Plastic Parts",
          "rarity": "Common",
          "item_type": "Basic Material"
        }
      }
    ],
    "usedIn": []
  },
  {
    "id": "looting-mk-1",
    "name": "Looting Mk. 1",
    "description": "Basic looting augment. More backpack slots and weight capacity, but low defensive and tactical capability.",
    "category": "Equipment",
    "subcategory": "Augment",
    "rarity": "Uncommon",
    "value": 640,
    "weight": 0,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/looting-mk-1.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 3,
        "component": {
          "id": "plastic-parts",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/plastic-parts.webp",
          "name": "Plastic Parts",
          "rarity": "Common",
          "item_type": "Basic Material",
          "description": "Used to craft a wide range of items."
        }
      },
      {
        "quantity": 3,
        "component": {
          "id": "rubber-parts-recipe",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/rubber-parts-recipe.webp",
          "name": "Rubber Parts",
          "rarity": "Common",
          "item_type": "Basic Material",
          "description": "Used to craft a wide range of items."
        }
      }
    ],
    "droppedBy": [],
    "components": [
      {
        "quantity": 6,
        "component": {
          "id": "plastic-parts",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/plastic-parts.webp",
          "name": "Plastic Parts",
          "rarity": "Common",
          "item_type": "Basic Material"
        }
      },
      {
        "quantity": 6,
        "component": {
          "id": "rubber-parts-recipe",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/rubber-parts-recipe.webp",
          "name": "Rubber Parts",
          "rarity": "Common",
          "item_type": "Basic Material"
        }
      }
    ],
    "usedIn": []
  },
  {
    "id": "tactical-mk-1",
    "name": "Tactical Mk. 1",
    "description": "Basic tactical augment. More Quick Use slots for more tactical choice, but limited survivability and slightly lower looting potential.",
    "category": "Equipment",
    "subcategory": "Augment",
    "rarity": "Uncommon",
    "value": 640,
    "weight": 0,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/tactical-mk-1.webp",
    "lootArea": "Unknown",
    "workbench": "Equipment Bench",
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 3,
        "component": {
          "id": "plastic-parts",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/plastic-parts.webp",
          "name": "Plastic Parts",
          "rarity": "Common",
          "item_type": "Basic Material",
          "description": "Used to craft a wide range of items."
        }
      },
      {
        "quantity": 3,
        "component": {
          "id": "rubber-parts-recipe",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/rubber-parts-recipe.webp",
          "name": "Rubber Parts",
          "rarity": "Common",
          "item_type": "Basic Material",
          "description": "Used to craft a wide range of items."
        }
      }
    ],
    "droppedBy": [],
    "components": [
      {
        "quantity": 6,
        "component": {
          "id": "plastic-parts",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/plastic-parts.webp",
          "name": "Plastic Parts",
          "rarity": "Common",
          "item_type": "Basic Material"
        }
      },
      {
        "quantity": 6,
        "component": {
          "id": "rubber-parts-recipe",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/rubber-parts-recipe.webp",
          "name": "Rubber Parts",
          "rarity": "Common",
          "item_type": "Basic Material"
        }
      }
    ],
    "usedIn": []
  },
  {
    "id": "binoculars",
    "name": "Binoculars",
    "description": "A basic pair of binoculars with two levels of magnification.",
    "category": "Equipment",
    "subcategory": "Gadget",
    "rarity": "Common",
    "value": 640,
    "weight": 0.5,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/binoculars.webp",
    "lootArea": "Unknown",
    "workbench": "Utility Bench",
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 4,
        "component": {
          "id": "plastic-parts",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/plastic-parts.webp",
          "name": "Plastic Parts",
          "rarity": "Common",
          "item_type": "Basic Material",
          "description": "Used to craft a wide range of items."
        }
      },
      {
        "quantity": 2,
        "component": {
          "id": "rubber-parts-recipe",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/rubber-parts-recipe.webp",
          "name": "Rubber Parts",
          "rarity": "Common",
          "item_type": "Basic Material",
          "description": "Used to craft a wide range of items."
        }
      }
    ],
    "droppedBy": [],
    "components": [
      {
        "quantity": 8,
        "component": {
          "id": "plastic-parts",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/plastic-parts.webp",
          "name": "Plastic Parts",
          "rarity": "Common",
          "item_type": "Basic Material"
        }
      },
      {
        "quantity": 4,
        "component": {
          "id": "rubber-parts-recipe",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/rubber-parts-recipe.webp",
          "name": "Rubber Parts",
          "rarity": "Common",
          "item_type": "Basic Material"
        }
      }
    ],
    "usedIn": []
  },
  {
    "id": "free-loadout-augment",
    "name": "Free Loadout Augment",
    "description": "Basic augment for rookie Raiders, offering slightly more backpack space and carry capacity.",
    "category": "Equipment",
    "subcategory": "Augment",
    "rarity": "Common",
    "value": 100,
    "weight": 0,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/free-loadout-augment.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "blue-gate-confiscation-room-key",
    "name": "Blue Gate Confiscation Room Key",
    "description": "Unlocks a door to the confiscated goods area within the Blue Gate tunnels",
    "category": "Keys",
    "subcategory": "Key",
    "rarity": "Epic",
    "value": 100,
    "weight": 0.25,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/blue-gate-confiscation-room-key.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "buried-city-town-hall-key",
    "name": "Buried City Town Hall Key",
    "description": "Unlocks the door to the Town Hall in Buried City",
    "category": "Keys",
    "subcategory": "Key",
    "rarity": "Epic",
    "value": 100,
    "weight": 0.25,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/buried-city-town-hall-key.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "dam-control-center-tower-key",
    "name": "Dam Control Center Tower Key",
    "description": "Unlocks a door in the Control Centre Tower on the top floor.",
    "category": "Keys",
    "subcategory": "Key",
    "rarity": "Epic",
    "value": 100,
    "weight": 0.25,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/dam-control-center-tower-key.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "stella-montis-archives-key",
    "name": "Stella Montis Archives Key",
    "description": "Unlocks a door in the Archives in Stella Montis",
    "category": "Keys",
    "subcategory": "Key",
    "rarity": "Epic",
    "value": 100,
    "weight": 0.25,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/stella-montis-archives-key.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "blue-gate-communication-tower-key",
    "name": "Blue Gate Communication Tower Key",
    "description": "Unlocks a door by the Communication Tower near the Blue Gate",
    "category": "Keys",
    "subcategory": "Key",
    "rarity": "Rare",
    "value": 100,
    "weight": 0,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/blue-gate-communication-tower-key.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "blue-gate-village-key",
    "name": "Blue Gate Village Key",
    "description": "Unlocks a door to one of the old village buildings near the Blue Gate.",
    "category": "Keys",
    "subcategory": "Key",
    "rarity": "Rare",
    "value": 100,
    "weight": 0.25,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/blue-gate-village-key.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "dam-testing-annex-key",
    "name": "Dam Testing Annex Key",
    "description": "Unlocks a door in the Testing Annex on Dam Battlegrounds.",
    "category": "Keys",
    "subcategory": "Key",
    "rarity": "Rare",
    "value": 100,
    "weight": 0.25,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/dam-testing-annex-key.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "raider-hatch-key",
    "name": "Raider Hatch Key",
    "description": "Unlocks a Raider Hatch.",
    "category": "Keys",
    "subcategory": "Key",
    "rarity": "Rare",
    "value": 2000,
    "weight": 0.01,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/raider-hatch-key.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [
      {
        "quantity": 1,
        "component": {
          "id": "advanced-electrical-components",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/advanced-electrical-components.webp",
          "name": "Advanced Electrical Components",
          "rarity": "Rare",
          "item_type": "Refined Material"
        }
      },
      {
        "quantity": 3,
        "component": {
          "id": "sensors-recipe",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/sensors-recipe.webp",
          "name": "Sensors",
          "rarity": "Rare",
          "item_type": "Topside Material"
        }
      }
    ],
    "usedIn": []
  },
  {
    "id": "spaceport-ground-control-key",
    "name": "Spaceport Control Tower Key",
    "description": "Unlocks a door to the Ground Control Tower in Spaceport",
    "category": "Keys",
    "subcategory": "Key",
    "rarity": "Rare",
    "value": 100,
    "weight": 0.25,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/spaceport-ground-control-key.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "spaceport-outskirts-bunker-key",
    "name": "Spaceport Outskirts Bunker Key",
    "description": "A makeshift key that lets you open the Outskirts Bunker on Spaceport",
    "category": "Keys",
    "subcategory": "Key",
    "rarity": "Rare",
    "value": 100,
    "weight": 0.01,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/spaceport-outskirts-bunker-key.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "stella-montis-security-checkpoint-key",
    "name": "Stella Montis Security Checkpoint Key",
    "description": "Unlocks a door in the Security Checkpoint in Stella Montis",
    "category": "Keys",
    "subcategory": "Key",
    "rarity": "Rare",
    "value": 100,
    "weight": 0.25,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/stella-montis-security-checkpoint-key.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "blue-gate-cellar-key",
    "name": "Blue Gate Cellar Key",
    "description": "Unlocks certain cellar doors near the Blue Gate.",
    "category": "Keys",
    "subcategory": "Key",
    "rarity": "Uncommon",
    "value": 100,
    "weight": 0.25,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/blue-gate-cellar-key.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "buried-city-hospital-key",
    "name": "Buried City Hospital Key",
    "description": "Opens a locked room in the North West corner of the Hospital in Buried City on the Second Floor.",
    "category": "Keys",
    "subcategory": "Quest Item",
    "rarity": "Uncommon",
    "value": 100,
    "weight": 0.25,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/buried-city-hospital-key.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "buried-city-jkv-employee-access-card",
    "name": "Buried City JKV Employee Access Card",
    "description": "Unlocks a door in the J Kozma Ventures company building in Buried City",
    "category": "Keys",
    "subcategory": "Key",
    "rarity": "Uncommon",
    "value": 100,
    "weight": 0.25,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/buried-city-jkv-employee-access-card.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "buried-city-residential-master-key",
    "name": "Buried City Residential Master Key",
    "description": "Unlocks certain apartment doors in Buried City",
    "category": "Keys",
    "subcategory": "Key",
    "rarity": "Uncommon",
    "value": 100,
    "weight": 0.25,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/buried-city-residential-master-key.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "dam-staff-room-key",
    "name": "Dam Staff Room Key",
    "description": "Unlocks the Dam Staff Room in the Control Tower.",
    "category": "Keys",
    "subcategory": "Key",
    "rarity": "Uncommon",
    "value": 100,
    "weight": 0.25,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/dam-staff-room-key.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "dam-surveillance-key",
    "name": "Dam Surveillance Key",
    "description": "Unlocks a door in the Water Treatment Control building in The Dam.",
    "category": "Keys",
    "subcategory": "Key",
    "rarity": "Uncommon",
    "value": 100,
    "weight": 0.25,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/dam-surveillance-key.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "dam-utility-key",
    "name": "Dam Utility Key",
    "description": "Location is currently unknown except that it is on Dam Battlegrounds.",
    "category": "Keys",
    "subcategory": "Quest Item",
    "rarity": "Uncommon",
    "value": 100,
    "weight": 0.25,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/dam-utility-key.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "patrol-car-key",
    "name": "Patrol Car Key",
    "description": "Unlocks the rear door of a patrol car",
    "category": "Keys",
    "subcategory": "Key",
    "rarity": "Uncommon",
    "value": 100,
    "weight": 0.25,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/patrol-car-key.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "spaceport-container-storage-key",
    "name": "Spaceport Container Storage Key",
    "description": "Unlocks a door in the Container Storage in Spaceport",
    "category": "Keys",
    "subcategory": "Quest Item",
    "rarity": "Uncommon",
    "value": 100,
    "weight": 0.25,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/spaceport-container-storage-key.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "spaceport-trench-tower-key",
    "name": "Spaceport Trench Tower Key",
    "description": "Unlocks a door to the Trench Towers in Spaceport",
    "category": "Keys",
    "subcategory": "Key",
    "rarity": "Uncommon",
    "value": 100,
    "weight": 0.25,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/spaceport-trench-tower-key.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "spaceport-warehouse-key",
    "name": "Spaceport Warehouse Key",
    "description": "Unlocks a door in the Shipping Warehouse in Spaceport",
    "category": "Keys",
    "subcategory": "Key",
    "rarity": "Uncommon",
    "value": 100,
    "weight": 0.25,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/spaceport-warehouse-key.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "stella-montis-assembly-admin-key",
    "name": "Stella Montis Assembly Admin Key",
    "description": "Unlocks a door in Assembly in Stella Montis",
    "category": "Keys",
    "subcategory": "Key",
    "rarity": "Uncommon",
    "value": 100,
    "weight": 0.25,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/stella-montis-assembly-admin-key.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "stella-montis-medical-storage-key",
    "name": "Stella Montis Medical Storage Key",
    "description": "Unlocks a door in Medical Research in Stella Montis",
    "category": "Keys",
    "subcategory": "Key",
    "rarity": "Uncommon",
    "value": 100,
    "weight": 0.25,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/stella-montis-medical-storage-key.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "esr-analyzer",
    "name": "ESR Analyzer",
    "description": "A portable analyzer from the world before, complete with several spare tubes.",
    "category": "Keys",
    "subcategory": "Quest Item",
    "rarity": "Common",
    "value": 0,
    "weight": 0.25,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/esr-analyzer.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "key-card",
    "name": "Key Card",
    "description": "A security key card used to access restricted areas.",
    "category": "Keys",
    "subcategory": "Key",
    "rarity": "Common",
    "value": 0,
    "weight": 0,
    "stackSize": 1,
    "icon": "key-card",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "complex-gun-parts",
    "name": "Complex Gun Parts",
    "description": "Used to craft advanced weapons.",
    "category": "Materials",
    "subcategory": "Topside Material",
    "rarity": "Epic",
    "value": 3000,
    "weight": 1,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/complex-gun-parts.webp",
    "lootArea": "Security",
    "workbench": "Refiner",
    "uses": "Used to craft: Equalizer, Aphelion, Jupiter",
    "recycleComponents": [
      {
        "quantity": 3,
        "component": {
          "id": "simple-gun-parts",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/simple-gun-parts.webp",
          "name": "Simple Gun Parts",
          "rarity": "Uncommon",
          "item_type": "Topside Material",
          "description": "Used to craft weapons. Can be recycled into scrap metal."
        }
      }
    ],
    "droppedBy": [],
    "components": [
      {
        "quantity": 2,
        "component": {
          "id": "light-gun-parts",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/light-gun-parts.webp",
          "name": "Light Gun Parts",
          "rarity": "Rare",
          "item_type": "Topside Material"
        }
      },
      {
        "quantity": 2,
        "component": {
          "id": "medium-gun-parts",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/medium-gun-parts.webp",
          "name": "Medium Gun Parts",
          "rarity": "Rare",
          "item_type": "Topside Material"
        }
      },
      {
        "quantity": 2,
        "component": {
          "id": "heavy-gun-parts",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/heavy-gun-parts.webp",
          "name": "Heavy Gun Parts",
          "rarity": "Rare",
          "item_type": "Topside Material"
        }
      }
    ],
    "usedIn": [
      {
        "item": {
          "id": "jupiter-i",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/jupiter-i.webp",
          "name": "Jupiter",
          "rarity": "Legendary",
          "item_type": "Weapon",
          "description": "A bolt-action sniper rifle with exceptional damage output and accuracy, but slow handling."
        },
        "quantity": 3
      },
      {
        "item": {
          "id": "aphelion-rifle",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/aphelion-rifle.webp",
          "name": "Aphelion Rifle",
          "rarity": "Legendary",
          "item_type": "Weapon",
          "description": "Fires high velocity energy rounds."
        },
        "quantity": 3
      },
      {
        "item": {
          "id": "equalizer-i",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/equalizer-i.webp",
          "name": "Equalizer",
          "rarity": "Legendary",
          "item_type": "Weapon",
          "description": "A high capacity experimental beam rifle."
        },
        "quantity": 3
      }
    ]
  },
  {
    "id": "exodus-modules",
    "name": "Exodus Modules",
    "description": "Used to craft a wide range of items.",
    "category": "Materials",
    "subcategory": "Topside Material",
    "rarity": "Epic",
    "value": 2750,
    "weight": 1,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/exodus-modules.webp",
    "lootArea": "Exodus",
    "workbench": null,
    "uses": "Used to craft: Tempest, Vulcano, Hullcracker, Bobcat, Snap Hook",
    "recycleComponents": [
      {
        "quantity": 2,
        "component": {
          "id": "magnet",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/magnet.webp",
          "name": "Magnet",
          "rarity": "Uncommon",
          "item_type": "Topside Material",
          "description": "Fun thing to put on a fridgerator."
        }
      },
      {
        "quantity": 2,
        "component": {
          "id": "processor",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/processor.webp",
          "name": "Processor",
          "rarity": "Rare",
          "item_type": "Topside Material",
          "description": "Used in crafting."
        }
      }
    ],
    "droppedBy": [],
    "components": [],
    "usedIn": [
      {
        "item": {
          "id": "vulcano-i",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/vulcano-i.webp",
          "name": "Vulcano I",
          "rarity": "Epic",
          "item_type": "Weapon",
          "description": "Semi-automatic shotgun with good bullet spread but sharp falloff."
        },
        "quantity": 1
      },
      {
        "item": {
          "id": "tempest-i",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/tempest-i.webp",
          "name": "Tempest I",
          "rarity": "Epic",
          "item_type": "Weapon",
          "description": "Fully automatic assault rifle with moderate fire rate and accuracy."
        },
        "quantity": 2
      },
      {
        "item": {
          "id": "bobcat-i",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/bobcat-ii.webp",
          "name": "Bobcat I",
          "rarity": "Epic",
          "item_type": "Weapon",
          "description": "Fully automatic SMG with high fire rate but low accuracy."
        },
        "quantity": 2
      },
      {
        "item": {
          "id": "hullcracker-i",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/hullcracker.webp",
          "name": "Hullcracker I",
          "rarity": "Epic",
          "item_type": "Weapon",
          "description": "Fires explosive projectiles that only detonate when hitting ARC."
        },
        "quantity": 1
      },
      {
        "item": {
          "id": "snap-hook",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/snap-hook.webp",
          "name": "Snap Hook",
          "rarity": "Legendary",
          "item_type": "Quick Use",
          "description": "A gadget that allows the user to scale structures and cover large distances."
        },
        "quantity": 1
      }
    ]
  },
  {
    "id": "magnetic-accelerator",
    "name": "Magnetic Accelerator",
    "description": "Used to craft advanced weapons.",
    "category": "Materials",
    "subcategory": "Refined Material",
    "rarity": "Epic",
    "value": 5500,
    "weight": 1,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/magnetic-accelerator.webp",
    "lootArea": "Exodus",
    "workbench": "Refiner",
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 1,
        "component": {
          "id": "advanced-mechanical-components",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/advanced-mechanical-components.webp",
          "name": "Advanced Mechanical Components",
          "rarity": "Rare",
          "item_type": "Advanced Material",
          "description": "Mostly used to craft advanced weapons. Can be recycled into crafting materials."
        }
      },
      {
        "quantity": 1,
        "component": {
          "id": "arc-motion-core",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/arc-motion-core.webp",
          "name": "ARC Motion Core",
          "rarity": "Rare",
          "item_type": "Topside Material",
          "description": "Obtained from ARC enemies or activities. Used to craft components. Can be recycled into ARC Alloy."
        }
      }
    ],
    "droppedBy": [
      {
        "id": "7cee00a7-d8c5-41b3-b494-efd9b06ea114",
        "arc": {
          "id": "queen",
          "icon": "https://unhbvkszwhczbjxgetgk.supabase.co/storage/v1/object/public/images/arc-raiders/icons/queen.webp",
          "name": "Queen",
          "description": "This is the Goliath of the ARC forces, a colossal machine whose presence defines the battlefield. It is only deployed during the critical Harvester Event, acting as the immovable guardian of the Harvester unit. Its incredible durability and lethal arsenal make it the single greatest threat on the map; attempting to scratch its armor alone is a fool's errand—you'll need a full squad of Raiders working in concert just to stand a chance.\n\nIts attacks are devastating:\n\nMortar Barrage: The dome atop the unit launches three massive mortars that land in a cluster around a targeted Raider. Two seconds after impact, they detonate in a fiery, engulfing inferno.\n\nSustained Laser: It periodically sweeps its primary weapon, firing a continuous laser beam at any Raider it acquires in its line-of-sight.\n\nClose-Quarters Deterrents: Should Raiders try to get up close and personal, the Goliath switches modes, delivering either a disruptive EMP pulse to shut down technology or a crushing ground slam to obliterate anything nearby."
        },
        "arc_id": "queen",
        "created_at": "2025-11-04T16:33:19.486695+00:00"
      }
    ],
    "components": [
      {
        "quantity": 2,
        "component": {
          "id": "advanced-mechanical-components",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/advanced-mechanical-components.webp",
          "name": "Advanced Mechanical Components",
          "rarity": "Rare",
          "item_type": "Advanced Material"
        }
      },
      {
        "quantity": 2,
        "component": {
          "id": "arc-motion-core",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/arc-motion-core.webp",
          "name": "ARC Motion Core",
          "rarity": "Rare",
          "item_type": "Topside Material"
        }
      }
    ],
    "usedIn": [
      {
        "item": {
          "id": "jupiter-i",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/jupiter-i.webp",
          "name": "Jupiter",
          "rarity": "Legendary",
          "item_type": "Weapon",
          "description": "A bolt-action sniper rifle with exceptional damage output and accuracy, but slow handling."
        },
        "quantity": 3
      },
      {
        "item": {
          "id": "vulcano-i",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/vulcano-i.webp",
          "name": "Vulcano I",
          "rarity": "Epic",
          "item_type": "Weapon",
          "description": "Semi-automatic shotgun with good bullet spread but sharp falloff."
        },
        "quantity": 1
      },
      {
        "item": {
          "id": "tempest-i",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/tempest-i.webp",
          "name": "Tempest I",
          "rarity": "Epic",
          "item_type": "Weapon",
          "description": "Fully automatic assault rifle with moderate fire rate and accuracy."
        },
        "quantity": 1
      },
      {
        "item": {
          "id": "bobcat-i",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/bobcat-ii.webp",
          "name": "Bobcat I",
          "rarity": "Epic",
          "item_type": "Weapon",
          "description": "Fully automatic SMG with high fire rate but low accuracy."
        },
        "quantity": 1
      },
      {
        "item": {
          "id": "aphelion-rifle",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/aphelion-rifle.webp",
          "name": "Aphelion Rifle",
          "rarity": "Legendary",
          "item_type": "Weapon",
          "description": "Fires high velocity energy rounds."
        },
        "quantity": 3
      },
      {
        "item": {
          "id": "hullcracker-i",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/hullcracker.webp",
          "name": "Hullcracker I",
          "rarity": "Epic",
          "item_type": "Weapon",
          "description": "Fires explosive projectiles that only detonate when hitting ARC."
        },
        "quantity": 1
      },
      {
        "item": {
          "id": "equalizer-i",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/equalizer-i.webp",
          "name": "Equalizer",
          "rarity": "Legendary",
          "item_type": "Weapon",
          "description": "A high capacity experimental beam rifle."
        },
        "quantity": 3
      }
    ]
  },
  {
    "id": "power-rod",
    "name": "Power Rod",
    "description": "Used to open the Locked room near the Loading Bay. Also Used to craft shields. Can be recycled into crafting materials.",
    "category": "Materials",
    "subcategory": "Advanced Material",
    "rarity": "Epic",
    "value": 5500,
    "weight": 2,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/power-rod.webp",
    "lootArea": "Exodus",
    "workbench": "Refiner",
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 1,
        "component": {
          "id": "advanced-electrical-components",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/advanced-electrical-components.webp",
          "name": "Advanced Electrical Components",
          "rarity": "Rare",
          "item_type": "Refined Material",
          "description": "Used to craft a wide range of items. Can be recycled into crafting materials."
        }
      },
      {
        "quantity": 1,
        "component": {
          "id": "arc-circuitry",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/arc-circuitry.webp",
          "name": "ARC Circuitry",
          "rarity": "Rare",
          "item_type": "Topside Material",
          "description": " Obtained from ARC enemies or activities. Used to craft components. Can be recycled into ARC Alloy."
        }
      }
    ],
    "droppedBy": [],
    "components": [
      {
        "quantity": 2,
        "component": {
          "id": "arc-circuitry",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/arc-circuitry.webp",
          "name": "ARC Circuitry",
          "rarity": "Rare",
          "item_type": "Topside Material"
        }
      },
      {
        "quantity": 2,
        "component": {
          "id": "advanced-electrical-components",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/advanced-electrical-components.webp",
          "name": "Advanced Electrical Components",
          "rarity": "Rare",
          "item_type": "Refined Material"
        }
      }
    ],
    "usedIn": [
      {
        "item": {
          "id": "heavy-shield",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/heavy-shield.webp",
          "name": "Heavy Shield",
          "rarity": "Epic",
          "item_type": "Shield",
          "description": "A heavy shield that blocks a large portion of incoming damage, but carries a significant cost to mobility."
        },
        "quantity": 1
      },
      {
        "item": {
          "id": "snap-hook",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/snap-hook.webp",
          "name": "Snap Hook",
          "rarity": "Legendary",
          "item_type": "Quick Use",
          "description": "A gadget that allows the user to scale structures and cover large distances."
        },
        "quantity": 2
      }
    ]
  },
  {
    "id": "advanced-arc-powercell",
    "name": "Advanced ARC Powercell",
    "description": "Very valuable resource that drops from certain ARC enemies",
    "category": "Materials",
    "subcategory": "Topside Material",
    "rarity": "Rare",
    "value": 640,
    "weight": 0.5,
    "stackSize": 5,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/advanced-arc-powercell.webp",
    "lootArea": "ARC",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 2,
        "component": {
          "id": "arc-powercell",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/arc-powercell.webp",
          "name": "ARC Powercell",
          "rarity": "Common",
          "item_type": "Topside Material",
          "description": "Valuable resource that drops from all ARC enemies. Used to craft: Shield Recharger"
        }
      }
    ],
    "droppedBy": [
      {
        "id": "0211e0dc-a172-44cb-a536-d5d18be67cba",
        "arc": {
          "id": "bison",
          "icon": "https://unhbvkszwhczbjxgetgk.supabase.co/storage/v1/object/public/images/arc-raiders/icons/bison.webp",
          "name": "Leaper",
          "description": "This isn't just an ARC; it's a massive, arachnid-like siege engine. Its heavy armor gives it a hulking, near-indestructible presence on the battlefield, but don't mistake its bulk for sluggishness. This mechanized spider possesses an unnerving, gravity-defying ability to leap vast distances. Reports confirm it has been seen clearing impossible gaps, even bounding effortlessly to the summit of a Spaceport tower. It's a vertical threat you can't simply hide from."
        },
        "arc_id": "bison",
        "created_at": "2025-11-04T15:59:19.422889+00:00"
      },
      {
        "id": "ff18dbd3-906a-4096-93b7-c4442ab90368",
        "arc": {
          "id": "queen",
          "icon": "https://unhbvkszwhczbjxgetgk.supabase.co/storage/v1/object/public/images/arc-raiders/icons/queen.webp",
          "name": "Queen",
          "description": "This is the Goliath of the ARC forces, a colossal machine whose presence defines the battlefield. It is only deployed during the critical Harvester Event, acting as the immovable guardian of the Harvester unit. Its incredible durability and lethal arsenal make it the single greatest threat on the map; attempting to scratch its armor alone is a fool's errand—you'll need a full squad of Raiders working in concert just to stand a chance.\n\nIts attacks are devastating:\n\nMortar Barrage: The dome atop the unit launches three massive mortars that land in a cluster around a targeted Raider. Two seconds after impact, they detonate in a fiery, engulfing inferno.\n\nSustained Laser: It periodically sweeps its primary weapon, firing a continuous laser beam at any Raider it acquires in its line-of-sight.\n\nClose-Quarters Deterrents: Should Raiders try to get up close and personal, the Goliath switches modes, delivering either a disruptive EMP pulse to shut down technology or a crushing ground slam to obliterate anything nearby."
        },
        "arc_id": "queen",
        "created_at": "2025-11-04T16:33:19.486695+00:00"
      },
      {
        "id": "6ed23cbe-564b-4ca6-9a6f-5b66d3e4a8cb",
        "arc": {
          "id": "rocketeer",
          "icon": "https://unhbvkszwhczbjxgetgk.supabase.co/storage/v1/object/public/images/arc-raiders/icons/rocketeer.webp",
          "name": "Rocketeer",
          "description": "This is a formidable flying ARC, a pure engine of destruction that dominates the airspace. It poses a significant threat not just because it flies, but because of its powerful rocket attacks and devastating focus on area-of-effect (AoE) damage. This unit is designed to saturate an area, turning cover into a liability and forcing Raiders to constantly relocate or be wiped out by the sheer force of its explosions. Treat it like a mobile artillery piece—it hits hard and wide."
        },
        "arc_id": "rocketeer",
        "created_at": "2025-11-04T16:34:18.669309+00:00"
      },
      {
        "id": "2368cd99-061c-44cd-a5cf-162b3129ac09",
        "arc": {
          "id": "bastion",
          "icon": "https://unhbvkszwhczbjxgetgk.supabase.co/storage/v1/object/public/images/arc-raiders/icons/bastion.webp",
          "name": "Bastion",
          "description": "A massive, heavily armored ARC unit, built around a terrifying, fully automatic minigun. It rarely moves without air support overhead, which helps it pin down and suppress Raider movement. Listen for its loud, distinct screech—that's your warning before it unleashes a three-second hail of bullets toward the last known enemy position."
        },
        "arc_id": "bastion",
        "created_at": "2025-11-04T15:53:56.825634+00:00"
      },
      {
        "id": "3dde6de4-07d2-4af7-97d2-ee9bf7fff7b0",
        "arc": {
          "id": "bombardier",
          "icon": "https://unhbvkszwhczbjxgetgk.supabase.co/storage/v1/object/public/images/arc-raiders/icons/bombardier.webp",
          "name": "Bombardier",
          "description": "The Bombardier is an armored ARC that functions as heavy, mobile artillery. Its movement is slow and loud. Armed with a multi-rocket launcher, it unleashes devastating, long-range barrages that can obliterate your entire squad. Do not engage this unit. If you hear its grinding approach, silence your movement and escape the area immediately, as its attention is a death sentence."
        },
        "arc_id": "bombardier",
        "created_at": "2025-11-04T15:56:37.290049+00:00"
      },
      {
        "id": "a2864121-214f-4da8-b31c-f29fa4ee83e5",
        "arc": {
          "id": "sentinel",
          "icon": "https://unhbvkszwhczbjxgetgk.supabase.co/storage/v1/object/public/images/arc-raiders/icons/sentinel.webp",
          "name": "Sentinel",
          "description": "A large unarmored turret that sits atop buildings and ledges. Always found outside and usually very high up. Contains a small vulnerable capsule attached to it's swiveling arm.\n\nTraces movement and will fire off a single Heavy round every 5 seconds while having line-of-sight on a Raider."
        },
        "arc_id": "sentinel",
        "created_at": "2025-11-04T16:35:09.353207+00:00"
      },
      {
        "id": "793a05b1-41eb-434f-a394-20947770b6ec",
        "arc": {
          "id": "rollbot",
          "icon": "https://unhbvkszwhczbjxgetgk.supabase.co/storage/v1/object/public/images/arc-raiders/icons/rollbot.webp",
          "name": "Surveyor",
          "description": "This is the largest of the rolling ARCs, a massive, spherical construct designed to dominate open ground. Its primary tactic is to stop periodically on the battlefield to transmit disruptive signals, acting as a massive relay for the ARC network. Be warned, however, its most unique (and dangerous) trait is its resilience: as it takes damage, its outer shell breaks apart into many smaller, armored pieces. Its final attack is a relentless one: it will roll directly at high speed toward any Raider it detects, essentially turning itself into a giant, high-impact bowling ball."
        },
        "arc_id": "rollbot",
        "created_at": "2025-11-04T16:36:31.267363+00:00"
      }
    ],
    "components": [],
    "usedIn": [
      {
        "item": {
          "id": "surge-shield-recharger",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/surge-shield-recharger.webp",
          "name": "Surge Shield Recharger",
          "rarity": "Rare",
          "item_type": "Quick Use",
          "description": "A handkeld kit that recharges a shield"
        },
        "quantity": 1
      },
      {
        "item": {
          "id": "energy-ammo",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/energy-ammo.webp",
          "name": "Energy Clip",
          "rarity": "Rare",
          "item_type": "Ammunition",
          "description": "Ammo used for energy weapons. One clip will fully charge a single weapon."
        },
        "quantity": 1
      }
    ]
  },
  {
    "id": "advanced-electrical-components",
    "name": "Advanced Electrical Components",
    "description": "Used to craft a wide range of items. Can be recycled into crafting materials.",
    "category": "Materials",
    "subcategory": "Refined Material",
    "rarity": "Rare",
    "value": 1750,
    "weight": 1,
    "stackSize": 5,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/advanced-electrical-components.webp",
    "lootArea": "Electrical",
    "workbench": "Refiner",
    "uses": "Used to craft: Tactical Mk. 3 (Defensive), Combat Mk. 3 (Flanking), Combat Mk. 3 (Aggressive), Looting Mk. 3 (Cautious), Tactical Mk. 3 (Healing)",
    "recycleComponents": [
      {
        "quantity": 1,
        "component": {
          "id": "electrical-components",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/electrical-components.webp",
          "name": "Electrical Components",
          "rarity": "Uncommon",
          "item_type": "Refined Material",
          "description": "Used to craft a wide range of items. Can be recycled into crafting materials."
        }
      },
      {
        "quantity": 1,
        "component": {
          "id": "wires-recipe",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/wires-recipe.webp",
          "name": "Wires",
          "rarity": "Uncommon",
          "item_type": "Topside Material",
          "description": "A bundle of old wires. Used to craft a wide range of items. Can be recycled into scrap metal."
        }
      }
    ],
    "droppedBy": [
      {
        "id": "7993577e-0637-42e4-b396-180f38e63a6f",
        "arc": {
          "id": "queen",
          "icon": "https://unhbvkszwhczbjxgetgk.supabase.co/storage/v1/object/public/images/arc-raiders/icons/queen.webp",
          "name": "Queen",
          "description": "This is the Goliath of the ARC forces, a colossal machine whose presence defines the battlefield. It is only deployed during the critical Harvester Event, acting as the immovable guardian of the Harvester unit. Its incredible durability and lethal arsenal make it the single greatest threat on the map; attempting to scratch its armor alone is a fool's errand—you'll need a full squad of Raiders working in concert just to stand a chance.\n\nIts attacks are devastating:\n\nMortar Barrage: The dome atop the unit launches three massive mortars that land in a cluster around a targeted Raider. Two seconds after impact, they detonate in a fiery, engulfing inferno.\n\nSustained Laser: It periodically sweeps its primary weapon, firing a continuous laser beam at any Raider it acquires in its line-of-sight.\n\nClose-Quarters Deterrents: Should Raiders try to get up close and personal, the Goliath switches modes, delivering either a disruptive EMP pulse to shut down technology or a crushing ground slam to obliterate anything nearby."
        },
        "arc_id": "queen",
        "created_at": "2025-11-04T16:33:19.486695+00:00"
      }
    ],
    "components": [
      {
        "quantity": 3,
        "component": {
          "id": "wires-recipe",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/wires-recipe.webp",
          "name": "Wires",
          "rarity": "Uncommon",
          "item_type": "Topside Material"
        }
      },
      {
        "quantity": 2,
        "component": {
          "id": "electrical-components",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/electrical-components.webp",
          "name": "Electrical Components",
          "rarity": "Uncommon",
          "item_type": "Refined Material"
        }
      }
    ],
    "usedIn": [
      {
        "item": {
          "id": "raider-hatch-key",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/raider-hatch-key.webp",
          "name": "Raider Hatch Key",
          "rarity": "Rare",
          "item_type": "Key",
          "description": "Unlocks a Raider Hatch."
        },
        "quantity": 1
      },
      {
        "item": {
          "id": "photoelectric-cloak",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/photoelectric-cloak.webp",
          "name": "Photoelectric Cloak",
          "rarity": "Epic",
          "item_type": "Quick Use",
          "description": "A gadget that allows the user to conceal themselves from ARC."
        },
        "quantity": 2
      },
      {
        "item": {
          "id": "combat-mk-3-aggressive",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/combat-mk-3-aggressive.webp",
          "name": "Combat Mk. 3 (Aggressive)",
          "rarity": "Epic",
          "item_type": "Augment",
          "description": "An improved version of the Combat II augment. Supports more shield types, and comes with extra space for grenades."
        },
        "quantity": 2
      },
      {
        "item": {
          "id": "showstopper",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/showstopper.webp",
          "name": "Showstopper",
          "rarity": "Rare",
          "item_type": "Throwable",
          "description": "A grenade that detonates after a delay, stunning enemies within its radius."
        },
        "quantity": 1
      },
      {
        "item": {
          "id": "tactical-mk-3-healing",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/tactical-mk-3-healing.webp",
          "name": "Tactical Mk. 3 (Healing)",
          "rarity": "Epic",
          "item_type": "Augment",
          "description": "A healing-focused augment which adds extra slots for healing items."
        },
        "quantity": 2
      },
      {
        "item": {
          "id": "power-rod",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/power-rod.webp",
          "name": "Power Rod",
          "rarity": "Epic",
          "item_type": "Advanced Material",
          "description": "Used to open the Locked room near the Loading Bay. Also Used to craft shields. Can be recycled into crafting materials."
        },
        "quantity": 2
      },
      {
        "item": {
          "id": "tactical-mk3-defensive",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/tactical-mk3-defensive.webp",
          "name": "Tactical Mk.3 (Defensive)",
          "rarity": "Epic",
          "item_type": "Augment",
          "description": "A defence-focused augment for keeping shields topped up."
        },
        "quantity": 2
      },
      {
        "item": {
          "id": "looting-mk-3-cautious",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/looting-mk-3-cautious.webp",
          "name": "Looting MK. 3 (Cautious)",
          "rarity": "Epic",
          "item_type": "Augment",
          "description": "A looting augment that swaps some carry capacity to increase survivability."
        },
        "quantity": 2
      },
      {
        "item": {
          "id": "combat-mk3-flanking",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/combat-mk3-flanking.webp",
          "name": "Combat Mk.3 (Flanking) ",
          "rarity": "Epic",
          "item_type": "Augment",
          "description": "A Combat augment more focused on maneuverability than absorbing damage."
        },
        "quantity": 2
      }
    ]
  },
  {
    "id": "advanced-mechanical-components",
    "name": "Advanced Mechanical Components",
    "description": "Mostly used to craft advanced weapons. Can be recycled into crafting materials.",
    "category": "Materials",
    "subcategory": "Advanced Material",
    "rarity": "Rare",
    "value": 1750,
    "weight": 1,
    "stackSize": 5,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/advanced-mechanical-components.webp",
    "lootArea": "Mechanical",
    "workbench": "Refiner",
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 1,
        "component": {
          "id": "mechanical-components",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/mechanical-components.webp",
          "name": "Mechanical Components",
          "rarity": "Uncommon",
          "item_type": "Refined Material",
          "description": "Used to craft a wide range of items. Can be recycled into crafting materials."
        }
      },
      {
        "quantity": 1,
        "component": {
          "id": "spring",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/spring.webp",
          "name": "Steel Spring",
          "rarity": "Uncommon",
          "item_type": "Topside Material",
          "description": "A tightly wound coil of metal. Used to craft a wide range of items. Can be recycled into scrap metal."
        }
      }
    ],
    "droppedBy": [
      {
        "id": "286f3dfa-aa33-4d6f-9bbd-22386046cf12",
        "arc": {
          "id": "queen",
          "icon": "https://unhbvkszwhczbjxgetgk.supabase.co/storage/v1/object/public/images/arc-raiders/icons/queen.webp",
          "name": "Queen",
          "description": "This is the Goliath of the ARC forces, a colossal machine whose presence defines the battlefield. It is only deployed during the critical Harvester Event, acting as the immovable guardian of the Harvester unit. Its incredible durability and lethal arsenal make it the single greatest threat on the map; attempting to scratch its armor alone is a fool's errand—you'll need a full squad of Raiders working in concert just to stand a chance.\n\nIts attacks are devastating:\n\nMortar Barrage: The dome atop the unit launches three massive mortars that land in a cluster around a targeted Raider. Two seconds after impact, they detonate in a fiery, engulfing inferno.\n\nSustained Laser: It periodically sweeps its primary weapon, firing a continuous laser beam at any Raider it acquires in its line-of-sight.\n\nClose-Quarters Deterrents: Should Raiders try to get up close and personal, the Goliath switches modes, delivering either a disruptive EMP pulse to shut down technology or a crushing ground slam to obliterate anything nearby."
        },
        "arc_id": "queen",
        "created_at": "2025-11-04T16:33:19.486695+00:00"
      }
    ],
    "components": [
      {
        "quantity": 2,
        "component": {
          "id": "spring",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/spring.webp",
          "name": "Steel Spring",
          "rarity": "Uncommon",
          "item_type": "Topside Material"
        }
      },
      {
        "quantity": 2,
        "component": {
          "id": "mechanical-components",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/mechanical-components.webp",
          "name": "Mechanical Components",
          "rarity": "Uncommon",
          "item_type": "Refined Material"
        }
      }
    ],
    "usedIn": [
      {
        "item": {
          "id": "vulcano-ii",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/vulcano-ii.webp",
          "name": "Vulcano II",
          "rarity": "Epic",
          "item_type": "Weapon",
          "description": "Semi-automatic shotgun with good bullet spread but sharp falloff."
        },
        "quantity": 1
      },
      {
        "item": {
          "id": "renegade-i",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/renegade-i.webp",
          "name": "Renegade I",
          "rarity": "Rare",
          "item_type": "Weapon",
          "description": "Lever-action battle rifle with high damage output, accuracy, and headshot damage."
        },
        "quantity": 2
      },
      {
        "item": {
          "id": "osprey-ii",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/osprey-ii.webp",
          "name": "Osprey II",
          "rarity": "Rare",
          "item_type": "Weapon",
          "description": "A scoped bolt-action sniper rifle with reliable damage output and accuracy."
        },
        "quantity": 1
      },
      {
        "item": {
          "id": "bettina-ii",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/bettina-ii.webp",
          "name": "Bettina II",
          "rarity": "Epic",
          "item_type": "Weapon",
          "description": "Has slow fire rate and high damage output."
        },
        "quantity": 1
      },
      {
        "item": {
          "id": "venator-ii",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/venator-ii.webp",
          "name": "Venator II",
          "rarity": "Rare",
          "item_type": "Weapon",
          "description": "Semi-automatic pistol. Fires two shots at a time."
        },
        "quantity": 1
      },
      {
        "item": {
          "id": "torrente-ii",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/torrente-ii.webp",
          "name": "Torrente II",
          "rarity": "Rare",
          "item_type": "Weapon",
          "description": "Has large ammo capacity, but is only accurate while crouched. "
        },
        "quantity": 1
      },
      {
        "item": {
          "id": "osprey-i",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/osprey-i.webp",
          "name": "Osprey I",
          "rarity": "Rare",
          "item_type": "Weapon",
          "description": "A scoped bolt-action sniper rifle with reliable damage output and accuracy."
        },
        "quantity": 2
      },
      {
        "item": {
          "id": "bobcat-iv",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/bobcat-iv.webp",
          "name": "Bobcat IV",
          "rarity": "Epic",
          "item_type": "Weapon",
          "description": "Fully automatic SMG with high fire rate but low accuracy."
        },
        "quantity": 2
      },
      {
        "item": {
          "id": "vulcano-iv",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/vulcano-iv.webp",
          "name": "Vulcano IV",
          "rarity": "Epic",
          "item_type": "Weapon",
          "description": "Semi-automatic shotgun with good bullet spread but sharp falloff"
        },
        "quantity": 2
      },
      {
        "item": {
          "id": "tempest-iv",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/tempest-iv.webp",
          "name": "Tempest IV",
          "rarity": "Epic",
          "item_type": "Weapon",
          "description": "Fully automatic assault rifle with moderate fire rate and accuracy."
        },
        "quantity": 2
      },
      {
        "item": {
          "id": "osprey-iii",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/osprey-iii.webp",
          "name": "Osprey III",
          "rarity": "Rare",
          "item_type": "Weapon",
          "description": "A scoped bolt-action sniper rifle with reliable damage output and accuracy."
        },
        "quantity": 1
      },
      {
        "item": {
          "id": "bettina-iii",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/bettina-iii.webp",
          "name": "Bettina III",
          "rarity": "Epic",
          "item_type": "Weapon",
          "description": "Has slow fire rate and high damage output."
        },
        "quantity": 1
      },
      {
        "item": {
          "id": "torrente-iii",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/torrente-iii.webp",
          "name": "Torrente III",
          "rarity": "Rare",
          "item_type": "Weapon",
          "description": "Has large ammo capacity, but is only accurate while crouched. "
        },
        "quantity": 1
      },
      {
        "item": {
          "id": "vulcano-iii",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/vulcano-iii.webp",
          "name": "Vulcano III",
          "rarity": "Epic",
          "item_type": "Weapon",
          "description": "Semi-automatic shotgun with good bullet spread but sharp falloff"
        },
        "quantity": 2
      },
      {
        "item": {
          "id": "renegade-ii",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/renegade-ii.webp",
          "name": "Renegade II",
          "rarity": "Rare",
          "item_type": "Weapon",
          "description": "Lever-action battle rifle with high damage output, accuracy, and headshot damage."
        },
        "quantity": 1
      },
      {
        "item": {
          "id": "osprey-iv",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/osprey-iv.webp",
          "name": "Osprey IV",
          "rarity": "Rare",
          "item_type": "Weapon",
          "description": "A scoped bolt-action sniper rifle with reliable damage output and accuracy."
        },
        "quantity": 2
      },
      {
        "item": {
          "id": "venator-i",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/venator-i.webp",
          "name": "Venator I",
          "rarity": "Rare",
          "item_type": "Weapon",
          "description": "Semi-automatic pistol. Fires two shots at a time."
        },
        "quantity": 2
      },
      {
        "item": {
          "id": "venator-iii",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/venator-iii.webp",
          "name": "Venator III",
          "rarity": "Rare",
          "item_type": "Weapon",
          "description": "Semi-automatic pistol. Fires two shots at a time"
        },
        "quantity": 1
      },
      {
        "item": {
          "id": "torrente-iv",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/torrente-iv.webp",
          "name": "Torrente IV",
          "rarity": "Rare",
          "item_type": "Weapon",
          "description": "Has large ammo capacity, but is only accurate while crouched. "
        },
        "quantity": 3
      },
      {
        "item": {
          "id": "bettina-iv",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/bettina-iv.webp",
          "name": "Bettina IV",
          "rarity": "Epic",
          "item_type": "Weapon",
          "description": "Has slow rate of fire and high damage output."
        },
        "quantity": 2
      },
      {
        "item": {
          "id": "bobcat-ii",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/bobcat-ii.webp",
          "name": "Bobcat II",
          "rarity": "Epic",
          "item_type": "Weapon",
          "description": "Fully automatic SMG with high fire rate but low accuracy."
        },
        "quantity": 2
      },
      {
        "item": {
          "id": "bettina-i",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/bettina-i.webp",
          "name": "Bettina I",
          "rarity": "Epic",
          "item_type": "Weapon",
          "description": "Has slow fire rate and high damage output."
        },
        "quantity": 3
      },
      {
        "item": {
          "id": "bobcat-iii",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/bobcat-iii.webp",
          "name": "Bobcat III",
          "rarity": "Epic",
          "item_type": "Weapon",
          "description": "Fully automatic SMG with high fire rate but low accuracy."
        },
        "quantity": 2
      },
      {
        "item": {
          "id": "tempest-ii",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/tempest-ii.webp",
          "name": "Tempest II",
          "rarity": "Epic",
          "item_type": "Weapon",
          "description": "Fully automatic assault rifle with moderate fire rate and accuracy."
        },
        "quantity": 2
      },
      {
        "item": {
          "id": "hullcracker-ii",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/hullcracker-ii.webp",
          "name": "Hullcracker II",
          "rarity": "Epic",
          "item_type": "Weapon",
          "description": "Fires explosive projectiles that only detonate when hitting ARC"
        },
        "quantity": 1
      },
      {
        "item": {
          "id": "renegade-iii",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/renegade-iii.webp",
          "name": "Renegade III",
          "rarity": "Rare",
          "item_type": "Weapon",
          "description": "Lever-action battle rifle with high damage output, accuracy, and headshot damage."
        },
        "quantity": 1
      },
      {
        "item": {
          "id": "venator-iv",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/venator-iv.webp",
          "name": "Venator IV",
          "rarity": "Rare",
          "item_type": "Weapon",
          "description": "Semi-automatic pistol. Fires two shots at a time"
        },
        "quantity": 1
      },
      {
        "item": {
          "id": "magnetic-accelerator",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/magnetic-accelerator.webp",
          "name": "Magnetic Accelerator",
          "rarity": "Epic",
          "item_type": "Refined Material",
          "description": "Used to craft advanced weapons."
        },
        "quantity": 2
      },
      {
        "item": {
          "id": "hullcracker-iii",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/hullcracker-iii.webp",
          "name": "Hullcracker III",
          "rarity": "Epic",
          "item_type": "Weapon",
          "description": "Fires explosive projectiles that only detonate when hitting ARC"
        },
        "quantity": 2
      },
      {
        "item": {
          "id": "renegade-iv",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/renegade-iv.webp",
          "name": "Renegade IV",
          "rarity": "Rare",
          "item_type": "Weapon",
          "description": "Lever-action battle rifle with high damage output, accuracy, and headshot damage."
        },
        "quantity": 2
      },
      {
        "item": {
          "id": "torrente-i",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/torrente-i.webp",
          "name": "Torrente I",
          "rarity": "Rare",
          "item_type": "Weapon",
          "description": "Has large ammo capacity, but is only accurate while crouched. "
        },
        "quantity": 1
      },
      {
        "item": {
          "id": "tempest-iii",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/tempest-iii.webp",
          "name": "Tempest III",
          "rarity": "Epic",
          "item_type": "Weapon",
          "description": "Fully automatic assault rifle with moderate fire rate and accuracy."
        },
        "quantity": 2
      },
      {
        "item": {
          "id": "hullcracker-iv",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/hullcracker-iv.webp",
          "name": "Hullcracker IV ",
          "rarity": "Epic",
          "item_type": "Weapon",
          "description": "Fires explosive projectiles that only detonate when hitting ARC"
        },
        "quantity": 2
      }
    ]
  },
  {
    "id": "antiseptic",
    "name": "Antiseptic",
    "description": "Used to craft medical supplies. Can be recycled into chemicals.",
    "category": "Materials",
    "subcategory": "Refined Material",
    "rarity": "Rare",
    "value": 1000,
    "weight": 1,
    "stackSize": 5,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/antiseptic.webp",
    "lootArea": "Medical",
    "workbench": "Refiner",
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 10,
        "component": {
          "id": "chemicals",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/chemicals.webp",
          "name": "Chemicals",
          "rarity": "Common",
          "item_type": "Basic Material",
          "description": "Used to craft medical supplies, explosives, and utility items."
        }
      }
    ],
    "droppedBy": [],
    "components": [
      {
        "quantity": 10,
        "component": {
          "id": "chemicals",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/chemicals.webp",
          "name": "Chemicals",
          "rarity": "Common",
          "item_type": "Basic Material"
        }
      },
      {
        "quantity": 2,
        "component": {
          "id": "great-muullein",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/great-muullein.webp",
          "name": "Great Mullein",
          "rarity": "Uncommon",
          "item_type": "Nature"
        }
      }
    ],
    "usedIn": [
      {
        "item": {
          "id": "sterilized-bandage",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/sterilized-bandage.webp",
          "name": "Sterilized Bandage",
          "rarity": "Rare",
          "item_type": "Quick Use",
          "description": "A medical item that gradually restores a large amount health over time."
        },
        "quantity": 1
      },
      {
        "item": {
          "id": "vita-shot",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/vita-shot.webp",
          "name": "Vita Shot",
          "rarity": "Rare",
          "item_type": "Quick Use",
          "description": "A medical item that restores a large amount of health."
        },
        "quantity": 1
      },
      {
        "item": {
          "id": "vita-spray",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/vita-spray.webp",
          "name": "Vita Spray",
          "rarity": "Epic",
          "item_type": "Quick Use",
          "description": "A medical item that continuously restores health during use. Can be used on yourself or your allies."
        },
        "quantity": 2
      }
    ]
  },
  {
    "id": "arc-circuitry",
    "name": "ARC Circuitry",
    "description": " Obtained from ARC enemies or activities. Used to craft components. Can be recycled into ARC Alloy.",
    "category": "Materials",
    "subcategory": "Topside Material",
    "rarity": "Rare",
    "value": 1000,
    "weight": 0.3,
    "stackSize": 5,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/arc-circuitry.webp",
    "lootArea": "ARC",
    "workbench": "Refiner II",
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 2,
        "component": {
          "id": "arc-alloy",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/arc-alloy.webp",
          "name": "ARC Alloy",
          "rarity": "Uncommon",
          "item_type": "Topside Material",
          "description": "Obtained from ARC enemies or activities, or by recycling certain ARC parts. Used to craft components."
        }
      }
    ],
    "droppedBy": [
      {
        "id": "b2cdcd54-60b7-421d-bd3c-4f19fa34e286",
        "arc": {
          "id": "bison",
          "icon": "https://unhbvkszwhczbjxgetgk.supabase.co/storage/v1/object/public/images/arc-raiders/icons/bison.webp",
          "name": "Leaper",
          "description": "This isn't just an ARC; it's a massive, arachnid-like siege engine. Its heavy armor gives it a hulking, near-indestructible presence on the battlefield, but don't mistake its bulk for sluggishness. This mechanized spider possesses an unnerving, gravity-defying ability to leap vast distances. Reports confirm it has been seen clearing impossible gaps, even bounding effortlessly to the summit of a Spaceport tower. It's a vertical threat you can't simply hide from."
        },
        "arc_id": "bison",
        "created_at": "2025-11-04T15:59:19.422889+00:00"
      },
      {
        "id": "6010a07d-75e8-4a9f-8f3b-5be6b3b16764",
        "arc": {
          "id": "queen",
          "icon": "https://unhbvkszwhczbjxgetgk.supabase.co/storage/v1/object/public/images/arc-raiders/icons/queen.webp",
          "name": "Queen",
          "description": "This is the Goliath of the ARC forces, a colossal machine whose presence defines the battlefield. It is only deployed during the critical Harvester Event, acting as the immovable guardian of the Harvester unit. Its incredible durability and lethal arsenal make it the single greatest threat on the map; attempting to scratch its armor alone is a fool's errand—you'll need a full squad of Raiders working in concert just to stand a chance.\n\nIts attacks are devastating:\n\nMortar Barrage: The dome atop the unit launches three massive mortars that land in a cluster around a targeted Raider. Two seconds after impact, they detonate in a fiery, engulfing inferno.\n\nSustained Laser: It periodically sweeps its primary weapon, firing a continuous laser beam at any Raider it acquires in its line-of-sight.\n\nClose-Quarters Deterrents: Should Raiders try to get up close and personal, the Goliath switches modes, delivering either a disruptive EMP pulse to shut down technology or a crushing ground slam to obliterate anything nearby."
        },
        "arc_id": "queen",
        "created_at": "2025-11-04T16:33:19.486695+00:00"
      },
      {
        "id": "e48415f8-f59e-4c5d-ba5c-69ab63d16e34",
        "arc": {
          "id": "rocketeer",
          "icon": "https://unhbvkszwhczbjxgetgk.supabase.co/storage/v1/object/public/images/arc-raiders/icons/rocketeer.webp",
          "name": "Rocketeer",
          "description": "This is a formidable flying ARC, a pure engine of destruction that dominates the airspace. It poses a significant threat not just because it flies, but because of its powerful rocket attacks and devastating focus on area-of-effect (AoE) damage. This unit is designed to saturate an area, turning cover into a liability and forcing Raiders to constantly relocate or be wiped out by the sheer force of its explosions. Treat it like a mobile artillery piece—it hits hard and wide."
        },
        "arc_id": "rocketeer",
        "created_at": "2025-11-04T16:34:18.669309+00:00"
      },
      {
        "id": "364e4729-661a-4213-9b3c-cc601ef6c16f",
        "arc": {
          "id": "bastion",
          "icon": "https://unhbvkszwhczbjxgetgk.supabase.co/storage/v1/object/public/images/arc-raiders/icons/bastion.webp",
          "name": "Bastion",
          "description": "A massive, heavily armored ARC unit, built around a terrifying, fully automatic minigun. It rarely moves without air support overhead, which helps it pin down and suppress Raider movement. Listen for its loud, distinct screech—that's your warning before it unleashes a three-second hail of bullets toward the last known enemy position."
        },
        "arc_id": "bastion",
        "created_at": "2025-11-04T15:53:56.825634+00:00"
      },
      {
        "id": "8b7d1abc-c7d0-493b-9ce8-6c656da02cc6",
        "arc": {
          "id": "rollbot",
          "icon": "https://unhbvkszwhczbjxgetgk.supabase.co/storage/v1/object/public/images/arc-raiders/icons/rollbot.webp",
          "name": "Surveyor",
          "description": "This is the largest of the rolling ARCs, a massive, spherical construct designed to dominate open ground. Its primary tactic is to stop periodically on the battlefield to transmit disruptive signals, acting as a massive relay for the ARC network. Be warned, however, its most unique (and dangerous) trait is its resilience: as it takes damage, its outer shell breaks apart into many smaller, armored pieces. Its final attack is a relentless one: it will roll directly at high speed toward any Raider it detects, essentially turning itself into a giant, high-impact bowling ball."
        },
        "arc_id": "rollbot",
        "created_at": "2025-11-04T16:36:31.267363+00:00"
      }
    ],
    "components": [
      {
        "quantity": 8,
        "component": {
          "id": "arc-alloy",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/arc-alloy.webp",
          "name": "ARC Alloy",
          "rarity": "Uncommon",
          "item_type": "Topside Material"
        }
      }
    ],
    "usedIn": [
      {
        "item": {
          "id": "medium-shield",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/medium-shield.webp",
          "name": "Medium Shield",
          "rarity": "Rare",
          "item_type": "Shield",
          "description": "A standard shield that blocks a medium portion of incoming damage at a moderate cost to mobility."
        },
        "quantity": 1
      },
      {
        "item": {
          "id": "deadline",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/deadline.webp",
          "name": "Deadline",
          "rarity": "Epic",
          "item_type": "Quick Use",
          "description": "A mine that deals damage to anything within its radius once the timer runs out"
        },
        "quantity": 2
      },
      {
        "item": {
          "id": "power-rod",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/power-rod.webp",
          "name": "Power Rod",
          "rarity": "Epic",
          "item_type": "Advanced Material",
          "description": "Used to open the Locked room near the Loading Bay. Also Used to craft shields. Can be recycled into crafting materials."
        },
        "quantity": 2
      }
    ]
  },
  {
    "id": "arc-motion-core",
    "name": "ARC Motion Core",
    "description": "Obtained from ARC enemies or activities. Used to craft components. Can be recycled into ARC Alloy.",
    "category": "Materials",
    "subcategory": "Topside Material",
    "rarity": "Rare",
    "value": 1000,
    "weight": 0.3,
    "stackSize": 5,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/arc-motion-core.webp",
    "lootArea": "ARC",
    "workbench": "Refiner II",
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 2,
        "component": {
          "id": "arc-alloy",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/arc-alloy.webp",
          "name": "ARC Alloy",
          "rarity": "Uncommon",
          "item_type": "Topside Material",
          "description": "Obtained from ARC enemies or activities, or by recycling certain ARC parts. Used to craft components."
        }
      }
    ],
    "droppedBy": [
      {
        "id": "305a4762-f620-4108-868f-6ff0b1b66bf3",
        "arc": {
          "id": "bison",
          "icon": "https://unhbvkszwhczbjxgetgk.supabase.co/storage/v1/object/public/images/arc-raiders/icons/bison.webp",
          "name": "Leaper",
          "description": "This isn't just an ARC; it's a massive, arachnid-like siege engine. Its heavy armor gives it a hulking, near-indestructible presence on the battlefield, but don't mistake its bulk for sluggishness. This mechanized spider possesses an unnerving, gravity-defying ability to leap vast distances. Reports confirm it has been seen clearing impossible gaps, even bounding effortlessly to the summit of a Spaceport tower. It's a vertical threat you can't simply hide from."
        },
        "arc_id": "bison",
        "created_at": "2025-11-04T15:59:19.422889+00:00"
      },
      {
        "id": "23f19570-f499-47c0-84dc-4cd7e803f874",
        "arc": {
          "id": "queen",
          "icon": "https://unhbvkszwhczbjxgetgk.supabase.co/storage/v1/object/public/images/arc-raiders/icons/queen.webp",
          "name": "Queen",
          "description": "This is the Goliath of the ARC forces, a colossal machine whose presence defines the battlefield. It is only deployed during the critical Harvester Event, acting as the immovable guardian of the Harvester unit. Its incredible durability and lethal arsenal make it the single greatest threat on the map; attempting to scratch its armor alone is a fool's errand—you'll need a full squad of Raiders working in concert just to stand a chance.\n\nIts attacks are devastating:\n\nMortar Barrage: The dome atop the unit launches three massive mortars that land in a cluster around a targeted Raider. Two seconds after impact, they detonate in a fiery, engulfing inferno.\n\nSustained Laser: It periodically sweeps its primary weapon, firing a continuous laser beam at any Raider it acquires in its line-of-sight.\n\nClose-Quarters Deterrents: Should Raiders try to get up close and personal, the Goliath switches modes, delivering either a disruptive EMP pulse to shut down technology or a crushing ground slam to obliterate anything nearby."
        },
        "arc_id": "queen",
        "created_at": "2025-11-04T16:33:19.486695+00:00"
      },
      {
        "id": "7fb029a1-dfdd-4c3c-a912-568e90b0958d",
        "arc": {
          "id": "rocketeer",
          "icon": "https://unhbvkszwhczbjxgetgk.supabase.co/storage/v1/object/public/images/arc-raiders/icons/rocketeer.webp",
          "name": "Rocketeer",
          "description": "This is a formidable flying ARC, a pure engine of destruction that dominates the airspace. It poses a significant threat not just because it flies, but because of its powerful rocket attacks and devastating focus on area-of-effect (AoE) damage. This unit is designed to saturate an area, turning cover into a liability and forcing Raiders to constantly relocate or be wiped out by the sheer force of its explosions. Treat it like a mobile artillery piece—it hits hard and wide."
        },
        "arc_id": "rocketeer",
        "created_at": "2025-11-04T16:34:18.669309+00:00"
      },
      {
        "id": "89894907-8b09-42da-bf3a-c474e10e0a85",
        "arc": {
          "id": "bastion",
          "icon": "https://unhbvkszwhczbjxgetgk.supabase.co/storage/v1/object/public/images/arc-raiders/icons/bastion.webp",
          "name": "Bastion",
          "description": "A massive, heavily armored ARC unit, built around a terrifying, fully automatic minigun. It rarely moves without air support overhead, which helps it pin down and suppress Raider movement. Listen for its loud, distinct screech—that's your warning before it unleashes a three-second hail of bullets toward the last known enemy position."
        },
        "arc_id": "bastion",
        "created_at": "2025-11-04T15:53:56.825634+00:00"
      },
      {
        "id": "3801b934-451e-4ac7-be2c-4b82d850096b",
        "arc": {
          "id": "sentinel",
          "icon": "https://unhbvkszwhczbjxgetgk.supabase.co/storage/v1/object/public/images/arc-raiders/icons/sentinel.webp",
          "name": "Sentinel",
          "description": "A large unarmored turret that sits atop buildings and ledges. Always found outside and usually very high up. Contains a small vulnerable capsule attached to it's swiveling arm.\n\nTraces movement and will fire off a single Heavy round every 5 seconds while having line-of-sight on a Raider."
        },
        "arc_id": "sentinel",
        "created_at": "2025-11-04T16:35:09.353207+00:00"
      },
      {
        "id": "50c04e4b-3b24-47ee-9bb9-2abf13e83a48",
        "arc": {
          "id": "rollbot",
          "icon": "https://unhbvkszwhczbjxgetgk.supabase.co/storage/v1/object/public/images/arc-raiders/icons/rollbot.webp",
          "name": "Surveyor",
          "description": "This is the largest of the rolling ARCs, a massive, spherical construct designed to dominate open ground. Its primary tactic is to stop periodically on the battlefield to transmit disruptive signals, acting as a massive relay for the ARC network. Be warned, however, its most unique (and dangerous) trait is its resilience: as it takes damage, its outer shell breaks apart into many smaller, armored pieces. Its final attack is a relentless one: it will roll directly at high speed toward any Raider it detects, essentially turning itself into a giant, high-impact bowling ball."
        },
        "arc_id": "rollbot",
        "created_at": "2025-11-04T16:36:31.267363+00:00"
      }
    ],
    "components": [
      {
        "quantity": 8,
        "component": {
          "id": "arc-alloy",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/arc-alloy.webp",
          "name": "ARC Alloy",
          "rarity": "Uncommon",
          "item_type": "Topside Material"
        }
      }
    ],
    "usedIn": [
      {
        "item": {
          "id": "launcher-ammo",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/launcher-ammo.webp",
          "name": "Launcher Ammo",
          "rarity": "Rare",
          "item_type": "Ammunition",
          "description": "Anti-ARC payloads used mainly by the Hullcracker"
        },
        "quantity": 1
      },
      {
        "item": {
          "id": "magnetic-accelerator",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/magnetic-accelerator.webp",
          "name": "Magnetic Accelerator",
          "rarity": "Epic",
          "item_type": "Refined Material",
          "description": "Used to craft advanced weapons."
        },
        "quantity": 2
      },
      {
        "item": {
          "id": "wolfpack",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/wolfpack.webp",
          "name": "WolfPack",
          "rarity": "Epic",
          "item_type": "Quick Use",
          "description": "A grenade that scatters into multiple homing missiles, each one targeting ARC and dealing explosive damage on impact."
        },
        "quantity": 2
      }
    ]
  },
  {
    "id": "explosive-compound",
    "name": "Explosive Compound",
    "description": "Used to craft explosives.",
    "category": "Materials",
    "subcategory": "Refined Material",
    "rarity": "Rare",
    "value": 1000,
    "weight": 0.3,
    "stackSize": 5,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/explosive-compound.webp",
    "lootArea": "Security, Industrial",
    "workbench": "Refiner",
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 1,
        "component": {
          "id": "crude-explosives",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/crude-explosives.webp",
          "name": "Crude Explosives",
          "rarity": "Uncommon",
          "item_type": "Refined Material",
          "description": "Used to craft explosives. Can be recycled into crafting materials."
        }
      }
    ],
    "droppedBy": [
      {
        "id": "6e04396f-d7f4-4641-91e9-91d493953a08",
        "arc": {
          "id": "bison",
          "icon": "https://unhbvkszwhczbjxgetgk.supabase.co/storage/v1/object/public/images/arc-raiders/icons/bison.webp",
          "name": "Leaper",
          "description": "This isn't just an ARC; it's a massive, arachnid-like siege engine. Its heavy armor gives it a hulking, near-indestructible presence on the battlefield, but don't mistake its bulk for sluggishness. This mechanized spider possesses an unnerving, gravity-defying ability to leap vast distances. Reports confirm it has been seen clearing impossible gaps, even bounding effortlessly to the summit of a Spaceport tower. It's a vertical threat you can't simply hide from."
        },
        "arc_id": "bison",
        "created_at": "2025-11-04T15:59:19.422889+00:00"
      }
    ],
    "components": [
      {
        "quantity": 2,
        "component": {
          "id": "crude-explosives",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/crude-explosives.webp",
          "name": "Crude Explosives",
          "rarity": "Uncommon",
          "item_type": "Refined Material"
        }
      },
      {
        "quantity": 2,
        "component": {
          "id": "oil",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/oil.webp",
          "name": "Oil",
          "rarity": "Uncommon",
          "item_type": "Topside Material"
        }
      }
    ],
    "usedIn": [
      {
        "item": {
          "id": "explosive-mine",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/jump-mine.webp",
          "name": "Explosive Mine",
          "rarity": "Rare",
          "item_type": "Quick Use",
          "description": "A proximity triggered mine that pops up and explodes, dealing damage to anything within its radius."
        },
        "quantity": 1
      },
      {
        "item": {
          "id": "heavy-fuze-grenade",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/heavy-fuze-grenade.webp",
          "name": "Heavy Fuze Grenade",
          "rarity": "Rare",
          "item_type": "Quick Use",
          "description": "A grenade that detonates after a delay, dealing explosive damage in its radius."
        },
        "quantity": 1
      },
      {
        "item": {
          "id": "deadline",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/deadline.webp",
          "name": "Deadline",
          "rarity": "Epic",
          "item_type": "Quick Use",
          "description": "A mine that deals damage to anything within its radius once the timer runs out"
        },
        "quantity": 3
      },
      {
        "item": {
          "id": "wolfpack",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/wolfpack.webp",
          "name": "WolfPack",
          "rarity": "Epic",
          "item_type": "Quick Use",
          "description": "A grenade that scatters into multiple homing missiles, each one targeting ARC and dealing explosive damage on impact."
        },
        "quantity": 3
      }
    ]
  },
  {
    "id": "heavy-gun-parts",
    "name": "Heavy Gun Parts",
    "description": "Used directly in crafting items of all tiers.",
    "category": "Materials",
    "subcategory": "Topside Material",
    "rarity": "Rare",
    "value": 700,
    "weight": 0.5,
    "stackSize": 5,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/heavy-gun-parts.webp",
    "lootArea": "Raider, Security",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 2,
        "component": {
          "id": "simple-gun-parts",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/simple-gun-parts.webp",
          "name": "Simple Gun Parts",
          "rarity": "Uncommon",
          "item_type": "Topside Material",
          "description": "Used to craft weapons. Can be recycled into scrap metal."
        }
      }
    ],
    "droppedBy": [
      {
        "id": "40b6996a-9edc-4588-aa4a-1c90477e6c91",
        "arc": {
          "id": "rocketeer",
          "icon": "https://unhbvkszwhczbjxgetgk.supabase.co/storage/v1/object/public/images/arc-raiders/icons/rocketeer.webp",
          "name": "Rocketeer",
          "description": "This is a formidable flying ARC, a pure engine of destruction that dominates the airspace. It poses a significant threat not just because it flies, but because of its powerful rocket attacks and devastating focus on area-of-effect (AoE) damage. This unit is designed to saturate an area, turning cover into a liability and forcing Raiders to constantly relocate or be wiped out by the sheer force of its explosions. Treat it like a mobile artillery piece—it hits hard and wide."
        },
        "arc_id": "rocketeer",
        "created_at": "2025-11-04T16:34:18.669309+00:00"
      }
    ],
    "components": [
      {
        "quantity": 2,
        "component": {
          "id": "simple-gun-parts",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/simple-gun-parts.webp",
          "name": "Simple Gun Parts",
          "rarity": "Uncommon",
          "item_type": "Topside Material"
        }
      },
      {
        "quantity": 8,
        "component": {
          "id": "rubber-parts-recipe",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/rubber-parts-recipe.webp",
          "name": "Rubber Parts",
          "rarity": "Common",
          "item_type": "Basic Material"
        }
      }
    ],
    "usedIn": [
      {
        "item": {
          "id": "il-toro-iiii",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/il-toro-iiii.webp",
          "name": "Il Toro III",
          "rarity": "Uncommon",
          "item_type": "Weapon",
          "description": "Pump-action shotgun with large bullet spread, sharp falloff, and high damage output."
        },
        "quantity": 1
      },
      {
        "item": {
          "id": "il-toro-iv",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/il-toro-iv.webp",
          "name": "Il Toro IV",
          "rarity": "Uncommon",
          "item_type": "Weapon",
          "description": "Pump-action shotgun with large bullet spread, sharp falloff, and high damage output."
        },
        "quantity": 1
      },
      {
        "item": {
          "id": "vulcano-ii",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/vulcano-ii.webp",
          "name": "Vulcano II",
          "rarity": "Epic",
          "item_type": "Weapon",
          "description": "Semi-automatic shotgun with good bullet spread but sharp falloff."
        },
        "quantity": 2
      },
      {
        "item": {
          "id": "bettina-ii",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/bettina-ii.webp",
          "name": "Bettina II",
          "rarity": "Epic",
          "item_type": "Weapon",
          "description": "Has slow fire rate and high damage output."
        },
        "quantity": 2
      },
      {
        "item": {
          "id": "vulcano-iv",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/vulcano-iv.webp",
          "name": "Vulcano IV",
          "rarity": "Epic",
          "item_type": "Weapon",
          "description": "Semi-automatic shotgun with good bullet spread but sharp falloff"
        },
        "quantity": 3
      },
      {
        "item": {
          "id": "anvil-iii",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/anvil-iii.webp",
          "name": "Anvil III",
          "rarity": "Uncommon",
          "item_type": "Weapon",
          "description": "Single-action hand cannon with high damage output and headshot damage, but slow handling."
        },
        "quantity": 1
      },
      {
        "item": {
          "id": "bettina-iii",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/bettina-iii.webp",
          "name": "Bettina III",
          "rarity": "Epic",
          "item_type": "Weapon",
          "description": "Has slow fire rate and high damage output."
        },
        "quantity": 2
      },
      {
        "item": {
          "id": "vulcano-i",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/vulcano-i.webp",
          "name": "Vulcano I",
          "rarity": "Epic",
          "item_type": "Weapon",
          "description": "Semi-automatic shotgun with good bullet spread but sharp falloff."
        },
        "quantity": 3
      },
      {
        "item": {
          "id": "vulcano-iii",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/vulcano-iii.webp",
          "name": "Vulcano III",
          "rarity": "Epic",
          "item_type": "Weapon",
          "description": "Semi-automatic shotgun with good bullet spread but sharp falloff"
        },
        "quantity": 1
      },
      {
        "item": {
          "id": "complex-gun-parts",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/complex-gun-parts.webp",
          "name": "Complex Gun Parts",
          "rarity": "Epic",
          "item_type": "Topside Material",
          "description": "Used to craft advanced weapons."
        },
        "quantity": 2
      },
      {
        "item": {
          "id": "bettina-iv",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/bettina-iv.webp",
          "name": "Bettina IV",
          "rarity": "Epic",
          "item_type": "Weapon",
          "description": "Has slow rate of fire and high damage output."
        },
        "quantity": 2
      },
      {
        "item": {
          "id": "bettina-i",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/bettina-i.webp",
          "name": "Bettina I",
          "rarity": "Epic",
          "item_type": "Weapon",
          "description": "Has slow fire rate and high damage output."
        },
        "quantity": 3
      },
      {
        "item": {
          "id": "hullcracker-ii",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/hullcracker-ii.webp",
          "name": "Hullcracker II",
          "rarity": "Epic",
          "item_type": "Weapon",
          "description": "Fires explosive projectiles that only detonate when hitting ARC"
        },
        "quantity": 2
      },
      {
        "item": {
          "id": "anvil-iv",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/anvil-iv.webp",
          "name": "Anvil IV",
          "rarity": "Uncommon",
          "item_type": "Weapon",
          "description": "Single-action hand cannon with high damage output and headshot damage, but slow handling."
        },
        "quantity": 1
      },
      {
        "item": {
          "id": "hullcracker-i",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/hullcracker.webp",
          "name": "Hullcracker I",
          "rarity": "Epic",
          "item_type": "Weapon",
          "description": "Fires explosive projectiles that only detonate when hitting ARC."
        },
        "quantity": 3
      },
      {
        "item": {
          "id": "hullcracker-iii",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/hullcracker-iii.webp",
          "name": "Hullcracker III",
          "rarity": "Epic",
          "item_type": "Weapon",
          "description": "Fires explosive projectiles that only detonate when hitting ARC"
        },
        "quantity": 1
      },
      {
        "item": {
          "id": "hullcracker-iv",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/hullcracker-iv.webp",
          "name": "Hullcracker IV ",
          "rarity": "Epic",
          "item_type": "Weapon",
          "description": "Fires explosive projectiles that only detonate when hitting ARC"
        },
        "quantity": 3
      }
    ]
  },
  {
    "id": "light-gun-parts",
    "name": "Light Gun Parts",
    "description": "Assorted spare parts used for pistols and SMGs.",
    "category": "Materials",
    "subcategory": "Topside Material",
    "rarity": "Rare",
    "value": 700,
    "weight": 0.3,
    "stackSize": 5,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/light-gun-parts.webp",
    "lootArea": "Security, Raider",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 2,
        "component": {
          "id": "simple-gun-parts",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/simple-gun-parts.webp",
          "name": "Simple Gun Parts",
          "rarity": "Uncommon",
          "item_type": "Topside Material",
          "description": "Used to craft weapons. Can be recycled into scrap metal."
        }
      }
    ],
    "droppedBy": [],
    "components": [
      {
        "quantity": 2,
        "component": {
          "id": "simple-gun-parts",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/simple-gun-parts.webp",
          "name": "Simple Gun Parts",
          "rarity": "Uncommon",
          "item_type": "Topside Material"
        }
      },
      {
        "quantity": 8,
        "component": {
          "id": "rubber-parts-recipe",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/rubber-parts-recipe.webp",
          "name": "Rubber Parts",
          "rarity": "Common",
          "item_type": "Basic Material"
        }
      }
    ],
    "usedIn": [
      {
        "item": {
          "id": "bobcat-iv",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/bobcat-iv.webp",
          "name": "Bobcat IV",
          "rarity": "Epic",
          "item_type": "Weapon",
          "description": "Fully automatic SMG with high fire rate but low accuracy."
        },
        "quantity": 3
      },
      {
        "item": {
          "id": "complex-gun-parts",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/complex-gun-parts.webp",
          "name": "Complex Gun Parts",
          "rarity": "Epic",
          "item_type": "Topside Material",
          "description": "Used to craft advanced weapons."
        },
        "quantity": 2
      },
      {
        "item": {
          "id": "bobcat-i",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/bobcat-ii.webp",
          "name": "Bobcat I",
          "rarity": "Epic",
          "item_type": "Weapon",
          "description": "Fully automatic SMG with high fire rate but low accuracy."
        },
        "quantity": 3
      },
      {
        "item": {
          "id": "bobcat-ii",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/bobcat-ii.webp",
          "name": "Bobcat II",
          "rarity": "Epic",
          "item_type": "Weapon",
          "description": "Fully automatic SMG with high fire rate but low accuracy."
        },
        "quantity": 1
      },
      {
        "item": {
          "id": "bobcat-iii",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/bobcat-iii.webp",
          "name": "Bobcat III",
          "rarity": "Epic",
          "item_type": "Weapon",
          "description": "Fully automatic SMG with high fire rate but low accuracy."
        },
        "quantity": 3
      },
      {
        "item": {
          "id": "burletta-iv",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/burletta-iv.webp",
          "name": "Burletta IV",
          "rarity": "Uncommon",
          "item_type": "Weapon",
          "description": "Semi-automatic pistol with decent damage output and accuracy. Can be fired as fast as you can pull the trigger."
        },
        "quantity": 1
      }
    ]
  },
  {
    "id": "medium-gun-parts",
    "name": "Medium Gun Parts",
    "description": "Assorted spare parts used for rifles. ",
    "category": "Materials",
    "subcategory": "Topside Material",
    "rarity": "Rare",
    "value": 700,
    "weight": 0.4,
    "stackSize": 5,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/medium-gun-parts.webp",
    "lootArea": "Raider, Security",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 2,
        "component": {
          "id": "simple-gun-parts",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/simple-gun-parts.webp",
          "name": "Simple Gun Parts",
          "rarity": "Uncommon",
          "item_type": "Topside Material",
          "description": "Used to craft weapons. Can be recycled into scrap metal."
        }
      }
    ],
    "droppedBy": [
      {
        "id": "c649d1e2-69a3-453d-9585-94e81777b2e8",
        "arc": {
          "id": "bastion",
          "icon": "https://unhbvkszwhczbjxgetgk.supabase.co/storage/v1/object/public/images/arc-raiders/icons/bastion.webp",
          "name": "Bastion",
          "description": "A massive, heavily armored ARC unit, built around a terrifying, fully automatic minigun. It rarely moves without air support overhead, which helps it pin down and suppress Raider movement. Listen for its loud, distinct screech—that's your warning before it unleashes a three-second hail of bullets toward the last known enemy position."
        },
        "arc_id": "bastion",
        "created_at": "2025-11-04T15:53:56.825634+00:00"
      },
      {
        "id": "52f86a74-8a0c-4706-9358-2c18bf68f9f5",
        "arc": {
          "id": "bombardier",
          "icon": "https://unhbvkszwhczbjxgetgk.supabase.co/storage/v1/object/public/images/arc-raiders/icons/bombardier.webp",
          "name": "Bombardier",
          "description": "The Bombardier is an armored ARC that functions as heavy, mobile artillery. Its movement is slow and loud. Armed with a multi-rocket launcher, it unleashes devastating, long-range barrages that can obliterate your entire squad. Do not engage this unit. If you hear its grinding approach, silence your movement and escape the area immediately, as its attention is a death sentence."
        },
        "arc_id": "bombardier",
        "created_at": "2025-11-04T15:56:37.290049+00:00"
      }
    ],
    "components": [],
    "usedIn": [
      {
        "item": {
          "id": "renegade-i",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/renegade-i.webp",
          "name": "Renegade I",
          "rarity": "Rare",
          "item_type": "Weapon",
          "description": "Lever-action battle rifle with high damage output, accuracy, and headshot damage."
        },
        "quantity": 3
      },
      {
        "item": {
          "id": "osprey-ii",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/osprey-ii.webp",
          "name": "Osprey II",
          "rarity": "Rare",
          "item_type": "Weapon",
          "description": "A scoped bolt-action sniper rifle with reliable damage output and accuracy."
        },
        "quantity": 2
      },
      {
        "item": {
          "id": "venator-ii",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/venator-ii.webp",
          "name": "Venator II",
          "rarity": "Rare",
          "item_type": "Weapon",
          "description": "Semi-automatic pistol. Fires two shots at a time."
        },
        "quantity": 2
      },
      {
        "item": {
          "id": "torrente-ii",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/torrente-ii.webp",
          "name": "Torrente II",
          "rarity": "Rare",
          "item_type": "Weapon",
          "description": "Has large ammo capacity, but is only accurate while crouched. "
        },
        "quantity": 2
      },
      {
        "item": {
          "id": "osprey-i",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/osprey-i.webp",
          "name": "Osprey I",
          "rarity": "Rare",
          "item_type": "Weapon",
          "description": "A scoped bolt-action sniper rifle with reliable damage output and accuracy."
        },
        "quantity": 3
      },
      {
        "item": {
          "id": "tempest-iv",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/tempest-iv.webp",
          "name": "Tempest IV",
          "rarity": "Epic",
          "item_type": "Weapon",
          "description": "Fully automatic assault rifle with moderate fire rate and accuracy."
        },
        "quantity": 3
      },
      {
        "item": {
          "id": "osprey-iii",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/osprey-iii.webp",
          "name": "Osprey III",
          "rarity": "Rare",
          "item_type": "Weapon",
          "description": "A scoped bolt-action sniper rifle with reliable damage output and accuracy."
        },
        "quantity": 2
      },
      {
        "item": {
          "id": "torrente-iii",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/torrente-iii.webp",
          "name": "Torrente III",
          "rarity": "Rare",
          "item_type": "Weapon",
          "description": "Has large ammo capacity, but is only accurate while crouched. "
        },
        "quantity": 2
      },
      {
        "item": {
          "id": "renegade-ii",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/renegade-ii.webp",
          "name": "Renegade II",
          "rarity": "Rare",
          "item_type": "Weapon",
          "description": "Lever-action battle rifle with high damage output, accuracy, and headshot damage."
        },
        "quantity": 2
      },
      {
        "item": {
          "id": "tempest-i",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/tempest-i.webp",
          "name": "Tempest I",
          "rarity": "Epic",
          "item_type": "Weapon",
          "description": "Fully automatic assault rifle with moderate fire rate and accuracy."
        },
        "quantity": 3
      },
      {
        "item": {
          "id": "osprey-iv",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/osprey-iv.webp",
          "name": "Osprey IV",
          "rarity": "Rare",
          "item_type": "Weapon",
          "description": "A scoped bolt-action sniper rifle with reliable damage output and accuracy."
        },
        "quantity": 2
      },
      {
        "item": {
          "id": "venator-i",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/venator-i.webp",
          "name": "Venator I",
          "rarity": "Rare",
          "item_type": "Weapon",
          "description": "Semi-automatic pistol. Fires two shots at a time."
        },
        "quantity": 3
      },
      {
        "item": {
          "id": "venator-iii",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/venator-iii.webp",
          "name": "Venator III",
          "rarity": "Rare",
          "item_type": "Weapon",
          "description": "Semi-automatic pistol. Fires two shots at a time"
        },
        "quantity": 2
      },
      {
        "item": {
          "id": "complex-gun-parts",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/complex-gun-parts.webp",
          "name": "Complex Gun Parts",
          "rarity": "Epic",
          "item_type": "Topside Material",
          "description": "Used to craft advanced weapons."
        },
        "quantity": 2
      },
      {
        "item": {
          "id": "torrente-iv",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/torrente-iv.webp",
          "name": "Torrente IV",
          "rarity": "Rare",
          "item_type": "Weapon",
          "description": "Has large ammo capacity, but is only accurate while crouched. "
        },
        "quantity": 3
      },
      {
        "item": {
          "id": "tempest-ii",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/tempest-ii.webp",
          "name": "Tempest II",
          "rarity": "Epic",
          "item_type": "Weapon",
          "description": "Fully automatic assault rifle with moderate fire rate and accuracy."
        },
        "quantity": 1
      },
      {
        "item": {
          "id": "renegade-iii",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/renegade-iii.webp",
          "name": "Renegade III",
          "rarity": "Rare",
          "item_type": "Weapon",
          "description": "Lever-action battle rifle with high damage output, accuracy, and headshot damage."
        },
        "quantity": 2
      },
      {
        "item": {
          "id": "venator-iv",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/venator-iv.webp",
          "name": "Venator IV",
          "rarity": "Rare",
          "item_type": "Weapon",
          "description": "Semi-automatic pistol. Fires two shots at a time"
        },
        "quantity": 2
      },
      {
        "item": {
          "id": "renegade-iv",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/renegade-iv.webp",
          "name": "Renegade IV",
          "rarity": "Rare",
          "item_type": "Weapon",
          "description": "Lever-action battle rifle with high damage output, accuracy, and headshot damage."
        },
        "quantity": 2
      },
      {
        "item": {
          "id": "arpeggio-iv",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/arpeggio-ii.webp",
          "name": "Arpeggio IV",
          "rarity": "Uncommon",
          "item_type": "Weapon",
          "description": "A 3-round burst assault rifle with decent damage output and accuracy."
        },
        "quantity": 2
      },
      {
        "item": {
          "id": "torrente-i",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/torrente-i.webp",
          "name": "Torrente I",
          "rarity": "Rare",
          "item_type": "Weapon",
          "description": "Has large ammo capacity, but is only accurate while crouched. "
        },
        "quantity": 2
      },
      {
        "item": {
          "id": "tempest-iii",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/tempest-iii.webp",
          "name": "Tempest III",
          "rarity": "Epic",
          "item_type": "Weapon",
          "description": "Fully automatic assault rifle with moderate fire rate and accuracy."
        },
        "quantity": 3
      }
    ]
  },
  {
    "id": "mod-components",
    "name": "Mod Components",
    "description": "Used to craft weapon mods. Can be recycled into crafting materials.",
    "category": "Materials",
    "subcategory": "Refined Material",
    "rarity": "Rare",
    "value": 1750,
    "weight": 1,
    "stackSize": 5,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/mod-components.webp",
    "lootArea": "Security",
    "workbench": "Refiner",
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 1,
        "component": {
          "id": "mechanical-components",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/mechanical-components.webp",
          "name": "Mechanical Components",
          "rarity": "Uncommon",
          "item_type": "Refined Material",
          "description": "Used to craft a wide range of items. Can be recycled into crafting materials."
        }
      },
      {
        "quantity": 1,
        "component": {
          "id": "spring",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/spring.webp",
          "name": "Steel Spring",
          "rarity": "Uncommon",
          "item_type": "Topside Material",
          "description": "A tightly wound coil of metal. Used to craft a wide range of items. Can be recycled into scrap metal."
        }
      }
    ],
    "droppedBy": [],
    "components": [
      {
        "quantity": 2,
        "component": {
          "id": "mechanical-components",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/mechanical-components.webp",
          "name": "Mechanical Components",
          "rarity": "Uncommon",
          "item_type": "Refined Material"
        }
      },
      {
        "quantity": 2,
        "component": {
          "id": "spring",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/spring.webp",
          "name": "Steel Spring",
          "rarity": "Uncommon",
          "item_type": "Topside Material"
        }
      }
    ],
    "usedIn": [
      {
        "item": {
          "id": "stable-stock-iii",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/stable-stock-iii.webp",
          "name": "Stable Stock III",
          "rarity": "Rare",
          "item_type": "Modification",
          "description": "Significantly improves dispersion & recoil recovery over time."
        },
        "quantity": 1
      },
      {
        "item": {
          "id": "extended-medium-mag-iii",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/extended-medium-mag-iii.webp",
          "name": "Extended Medium Mag III",
          "rarity": "Rare",
          "item_type": "Modification",
          "description": "Moderately extends the ammo capacity of compatible weapons that use medium ammo"
        },
        "quantity": 1
      },
      {
        "item": {
          "id": "padded-stock",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/padded-stock.webp",
          "name": "Padded Stock",
          "rarity": "Epic",
          "item_type": "Modification",
          "description": "Significantly improves stability."
        },
        "quantity": 2
      },
      {
        "item": {
          "id": "lightweight-stock",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/lightweight-stock.webp",
          "name": "Lightweight Stock",
          "rarity": "Epic",
          "item_type": "Modification",
          "description": "Moderately improves ADS & draw speed."
        },
        "quantity": 1
      },
      {
        "item": {
          "id": "vertical-grip-iii",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/vertical-grip-iii.webp",
          "name": "Vertical Grip III",
          "rarity": "Rare",
          "item_type": "Modification",
          "description": "Significantly reduces vertical recoil."
        },
        "quantity": 2
      },
      {
        "item": {
          "id": "extended-light-mag-iii",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/extended-light-mag-iii.webp",
          "name": "Extended Light Mag III",
          "rarity": "Rare",
          "item_type": "Modification",
          "description": "Significantly extends the ammo capacity of the compatible weapons that use light ammo."
        },
        "quantity": 1
      },
      {
        "item": {
          "id": "extended-shotgun-mag-iii",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/extended-shotgun-mag-iii.webp",
          "name": "Extended Shotgun Mag III",
          "rarity": "Rare",
          "item_type": "Modification",
          "description": "Significantly extends the ammo capacity of compatible weapons that use shotgun ammo."
        },
        "quantity": 1
      },
      {
        "item": {
          "id": "shotgun-silencer",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/shotgun-silencer.webp",
          "name": "Shotgun Silencer",
          "rarity": "Epic",
          "item_type": "Mods",
          "description": "Moderately reduces the amount of noise produced when firing."
        },
        "quantity": 1
      }
    ]
  },
  {
    "id": "moss",
    "name": "Moss",
    "description": "Can be used to regain a small amount of health.",
    "category": "Materials",
    "subcategory": "Topside Material",
    "rarity": "Rare",
    "value": 500,
    "weight": 0.3,
    "stackSize": 10,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/moss.webp",
    "lootArea": "Nature",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 3,
        "component": {
          "id": "assorted-seeds",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/assorted-seeds.webp",
          "name": "Assorted Seeds",
          "rarity": "Common",
          "item_type": "Nature",
          "description": "A handful of seeds. Celeste might be looking for these."
        }
      }
    ],
    "droppedBy": [],
    "components": [],
    "usedIn": [
      {
        "item": {
          "id": "defibrillator",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/defibrillator.webp",
          "name": "Defibrillator",
          "rarity": "Rare",
          "item_type": "Quick Use",
          "description": "An injection that quickly revives downed raiders and restores some health."
        },
        "quantity": 1
      }
    ]
  },
  {
    "id": "processor",
    "name": "Processor",
    "description": "Used in crafting.",
    "category": "Materials",
    "subcategory": "Topside Material",
    "rarity": "Rare",
    "value": 500,
    "weight": 0.2,
    "stackSize": 5,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/processor.webp",
    "lootArea": "Technological",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 1,
        "component": {
          "id": "plastic-parts",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/plastic-parts.webp",
          "name": "Plastic Parts",
          "rarity": "Common",
          "item_type": "Basic Material",
          "description": "Used to craft a wide range of items."
        }
      },
      {
        "quantity": 1,
        "component": {
          "id": "wires-recipe",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/wires-recipe.webp",
          "name": "Wires",
          "rarity": "Uncommon",
          "item_type": "Topside Material",
          "description": "A bundle of old wires. Used to craft a wide range of items. Can be recycled into scrap metal."
        }
      }
    ],
    "droppedBy": [],
    "components": [],
    "usedIn": [
      {
        "item": {
          "id": "trigger-nade",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/trigger-nade.webp",
          "name": "Trigger Nade",
          "rarity": "Rare",
          "item_type": "Quick Use",
          "description": "A remote-detonated grenade that can stick to surfaces and ARC, dealing explosive damage when triggered."
        },
        "quantity": 1
      },
      {
        "item": {
          "id": "combat-mk-3-aggressive",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/combat-mk-3-aggressive.webp",
          "name": "Combat Mk. 3 (Aggressive)",
          "rarity": "Epic",
          "item_type": "Augment",
          "description": "An improved version of the Combat II augment. Supports more shield types, and comes with extra space for grenades."
        },
        "quantity": 3
      },
      {
        "item": {
          "id": "tactical-mk-3-healing",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/tactical-mk-3-healing.webp",
          "name": "Tactical Mk. 3 (Healing)",
          "rarity": "Epic",
          "item_type": "Augment",
          "description": "A healing-focused augment which adds extra slots for healing items."
        },
        "quantity": 3
      },
      {
        "item": {
          "id": "tactical-mk3-defensive",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/tactical-mk3-defensive.webp",
          "name": "Tactical Mk.3 (Defensive)",
          "rarity": "Epic",
          "item_type": "Augment",
          "description": "A defence-focused augment for keeping shields topped up."
        },
        "quantity": 3
      },
      {
        "item": {
          "id": "looting-mk-3-cautious",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/looting-mk-3-cautious.webp",
          "name": "Looting MK. 3 (Cautious)",
          "rarity": "Epic",
          "item_type": "Augment",
          "description": "A looting augment that swaps some carry capacity to increase survivability."
        },
        "quantity": 3
      },
      {
        "item": {
          "id": "combat-mk3-flanking",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/combat-mk3-flanking.webp",
          "name": "Combat Mk.3 (Flanking) ",
          "rarity": "Epic",
          "item_type": "Augment",
          "description": "A Combat augment more focused on maneuverability than absorbing damage."
        },
        "quantity": 3
      }
    ]
  },
  {
    "id": "rope",
    "name": "Rope",
    "description": "Used in crafting.",
    "category": "Materials",
    "subcategory": "Topside Material",
    "rarity": "Rare",
    "value": 500,
    "weight": 0.3,
    "stackSize": 5,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/rope.webp",
    "lootArea": "Commercial, Residential",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 5,
        "component": {
          "id": "fabric",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/fabric.webp",
          "name": "Fabric",
          "rarity": "Common",
          "item_type": "Basic Material",
          "description": "Used to craft medical supplies and shields."
        }
      }
    ],
    "droppedBy": [],
    "components": [],
    "usedIn": [
      {
        "item": {
          "id": "zipline",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/zipline.webp",
          "name": "Zipline",
          "rarity": "Rare",
          "item_type": "Quick Use",
          "description": "A deployable zipline that allows you to quickly move between two locations."
        },
        "quantity": 1
      },
      {
        "item": {
          "id": "snap-hook",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/snap-hook.webp",
          "name": "Snap Hook",
          "rarity": "Legendary",
          "item_type": "Quick Use",
          "description": "A gadget that allows the user to scale structures and cover large distances."
        },
        "quantity": 3
      }
    ]
  },
  {
    "id": "sensors-recipe",
    "name": "Sensors",
    "description": "Used to craft utility items and explosives. Can be recycled into scrap metal.",
    "category": "Materials",
    "subcategory": "Topside Material",
    "rarity": "Rare",
    "value": 500,
    "weight": 0.3,
    "stackSize": 5,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/sensors-recipe.webp",
    "lootArea": "Security, Technological",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 1,
        "component": {
          "id": "metal-parts",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/metal-parts.webp",
          "name": "Metal Parts",
          "rarity": "Common",
          "item_type": "Basic Material",
          "description": "Used to craft a wide range of items."
        }
      },
      {
        "quantity": 1,
        "component": {
          "id": "wires-recipe",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/wires-recipe.webp",
          "name": "Wires",
          "rarity": "Uncommon",
          "item_type": "Topside Material",
          "description": "A bundle of old wires. Used to craft a wide range of items. Can be recycled into scrap metal."
        }
      }
    ],
    "droppedBy": [
      {
        "id": "06b92865-8014-4c59-b376-07a64c28c0b0",
        "arc": {
          "id": "snitch",
          "icon": "https://unhbvkszwhczbjxgetgk.supabase.co/storage/v1/object/public/images/arc-raiders/icons/snitch.webp",
          "name": "Snitch",
          "description": "This little flyer is a swift and unarmored scout drone, often identifiable by its cluster of three rotors. While individually fragile, its primary danger is its role as an aerial alarm system. Once it spots Raiders, it immediately triggers a wide-band signal, effectively calling in a wave of flying ARC reinforcements—usually a swarm of Wasps or Hornets—to descend on your position. Taking it out before it completes its transmission is essential, as its light frame means a single, well-aimed burst will shatter it."
        },
        "arc_id": "snitch",
        "created_at": "2025-11-04T16:36:02.882962+00:00"
      },
      {
        "id": "b8564741-a5e7-48b1-8500-fa8e6c3e82a5",
        "arc": {
          "id": "rollbot",
          "icon": "https://unhbvkszwhczbjxgetgk.supabase.co/storage/v1/object/public/images/arc-raiders/icons/rollbot.webp",
          "name": "Surveyor",
          "description": "This is the largest of the rolling ARCs, a massive, spherical construct designed to dominate open ground. Its primary tactic is to stop periodically on the battlefield to transmit disruptive signals, acting as a massive relay for the ARC network. Be warned, however, its most unique (and dangerous) trait is its resilience: as it takes damage, its outer shell breaks apart into many smaller, armored pieces. Its final attack is a relentless one: it will roll directly at high speed toward any Raider it detects, essentially turning itself into a giant, high-impact bowling ball."
        },
        "arc_id": "rollbot",
        "created_at": "2025-11-04T16:36:31.267363+00:00"
      }
    ],
    "components": [],
    "usedIn": [
      {
        "item": {
          "id": "raider-hatch-key",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/raider-hatch-key.webp",
          "name": "Raider Hatch Key",
          "rarity": "Rare",
          "item_type": "Key",
          "description": "Unlocks a Raider Hatch."
        },
        "quantity": 3
      },
      {
        "item": {
          "id": "explosive-mine",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/jump-mine.webp",
          "name": "Explosive Mine",
          "rarity": "Rare",
          "item_type": "Quick Use",
          "description": "A proximity triggered mine that pops up and explodes, dealing damage to anything within its radius."
        },
        "quantity": 1
      }
    ]
  },
  {
    "id": "shotgun-gun-parts",
    "name": "Shotgun Parts",
    "description": "Specialized components from shotgun-type weapons, used in crafting.",
    "category": "Materials",
    "subcategory": "Material",
    "rarity": "Rare",
    "value": 700,
    "weight": 0.4,
    "stackSize": 5,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/shotgun-gun-parts.webp",
    "lootArea": "Raider, Security",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [
      {
        "quantity": 2,
        "component": {
          "id": "simple-gun-parts",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/simple-gun-parts.webp",
          "name": "Simple Gun Parts",
          "rarity": "Uncommon",
          "item_type": "Topside Material"
        }
      }
    ],
    "usedIn": []
  },
  {
    "id": "speaker-component",
    "name": "Speaker Component",
    "description": "Used in crafting.",
    "category": "Materials",
    "subcategory": "Topside Material",
    "rarity": "Rare",
    "value": 500,
    "weight": 0.3,
    "stackSize": 5,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/speaker-component.webp",
    "lootArea": "Commercial",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 2,
        "component": {
          "id": "plastic-parts",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/plastic-parts.webp",
          "name": "Plastic Parts",
          "rarity": "Common",
          "item_type": "Basic Material",
          "description": "Used to craft a wide range of items."
        }
      },
      {
        "quantity": 3,
        "component": {
          "id": "rubber-parts-recipe",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/rubber-parts-recipe.webp",
          "name": "Rubber Parts",
          "rarity": "Common",
          "item_type": "Basic Material",
          "description": "Used to craft a wide range of items."
        }
      }
    ],
    "droppedBy": [],
    "components": [],
    "usedIn": [
      {
        "item": {
          "id": "photoelectric-cloak",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/photoelectric-cloak.webp",
          "name": "Photoelectric Cloak",
          "rarity": "Epic",
          "item_type": "Quick Use",
          "description": "A gadget that allows the user to conceal themselves from ARC."
        },
        "quantity": 4
      },
      {
        "item": {
          "id": "lure-grenade",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/lure-grenade.webp",
          "name": "Lure Grenade",
          "rarity": "Uncommon",
          "item_type": "Quick Use",
          "description": "A noisy device that sticks to surfaces, distracting nearby ARC machines and drawing their fire."
        },
        "quantity": 2
      }
    ]
  },
  {
    "id": "synthesized-fuel",
    "name": "Synthesized Fuel",
    "description": "Used to craft utility items and explosives. Can be recycled into chemicals.",
    "category": "Materials",
    "subcategory": "Topside Material",
    "rarity": "Rare",
    "value": 700,
    "weight": 0.5,
    "stackSize": 5,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/synthesized-fuel.webp",
    "lootArea": "Exodus",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 1,
        "component": {
          "id": "oil",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/oil.webp",
          "name": "Oil",
          "rarity": "Uncommon",
          "item_type": "Topside Material",
          "description": "Used to craft weapons and explosives. Can be recycled into chemicals."
        }
      },
      {
        "quantity": 1,
        "component": {
          "id": "plastic-parts",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/plastic-parts.webp",
          "name": "Plastic Parts",
          "rarity": "Common",
          "item_type": "Basic Material",
          "description": "Used to craft a wide range of items."
        }
      }
    ],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "syringe",
    "name": "Syringe",
    "description": "A sterile syringe for medical use. Used to craft medical supplies. Can be recycled into plastic.",
    "category": "Materials",
    "subcategory": "Topside Material",
    "rarity": "Rare",
    "value": 500,
    "weight": 0.3,
    "stackSize": 5,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/syringe.webp",
    "lootArea": "Medical",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 2,
        "component": {
          "id": "chemicals",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/chemicals.webp",
          "name": "Chemicals",
          "rarity": "Common",
          "item_type": "Basic Material",
          "description": "Used to craft medical supplies, explosives, and utility items."
        }
      },
      {
        "quantity": 3,
        "component": {
          "id": "plastic-parts",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/plastic-parts.webp",
          "name": "Plastic Parts",
          "rarity": "Common",
          "item_type": "Basic Material",
          "description": "Used to craft a wide range of items."
        }
      }
    ],
    "droppedBy": [],
    "components": [],
    "usedIn": [
      {
        "item": {
          "id": "vita-shot",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/vita-shot.webp",
          "name": "Vita Shot",
          "rarity": "Rare",
          "item_type": "Quick Use",
          "description": "A medical item that restores a large amount of health."
        },
        "quantity": 1
      }
    ]
  },
  {
    "id": "voltage-converter",
    "name": "Voltage Converter",
    "description": "A device that adjusts electrical voltage for various crafting purposes.",
    "category": "Materials",
    "subcategory": "Topside Material",
    "rarity": "Rare",
    "value": 500,
    "weight": 0.3,
    "stackSize": 5,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/voltage-converter.webp",
    "lootArea": "Electrical",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 1,
        "component": {
          "id": "rubber-parts-recipe",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/rubber-parts-recipe.webp",
          "name": "Rubber Parts",
          "rarity": "Common",
          "item_type": "Basic Material",
          "description": "Used to craft a wide range of items."
        }
      },
      {
        "quantity": 1,
        "component": {
          "id": "wires-recipe",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/wires-recipe.webp",
          "name": "Wires",
          "rarity": "Uncommon",
          "item_type": "Topside Material",
          "description": "A bundle of old wires. Used to craft a wide range of items. Can be recycled into scrap metal."
        }
      }
    ],
    "droppedBy": [],
    "components": [],
    "usedIn": [
      {
        "item": {
          "id": "heavy-shield",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/heavy-shield.webp",
          "name": "Heavy Shield",
          "rarity": "Epic",
          "item_type": "Shield",
          "description": "A heavy shield that blocks a large portion of incoming damage, but carries a significant cost to mobility."
        },
        "quantity": 2
      },
      {
        "item": {
          "id": "showstopper",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/showstopper.webp",
          "name": "Showstopper",
          "rarity": "Rare",
          "item_type": "Throwable",
          "description": "A grenade that detonates after a delay, stunning enemies within its radius."
        },
        "quantity": 1
      }
    ]
  },
  {
    "id": "arc-alloy",
    "name": "ARC Alloy",
    "description": "Obtained from ARC enemies or activities, or by recycling certain ARC parts. Used to craft components.",
    "category": "Materials",
    "subcategory": "Topside Material",
    "rarity": "Uncommon",
    "value": 200,
    "weight": 0.25,
    "stackSize": 15,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/arc-alloy.webp",
    "lootArea": "ARC",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 2,
        "component": {
          "id": "metal-parts",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/metal-parts.webp",
          "name": "Metal Parts",
          "rarity": "Common",
          "item_type": "Basic Material",
          "description": "Used to craft a wide range of items."
        }
      }
    ],
    "droppedBy": [
      {
        "id": "e38838cd-314f-4b1d-8141-65c67f795286",
        "arc": {
          "id": "fireball",
          "icon": "https://unhbvkszwhczbjxgetgk.supabase.co/storage/v1/object/public/images/arc-raiders/icons/fireball.webp",
          "name": "Fireball",
          "description": "A small armored rolling ARC that spits flame. Will open up it's front panel when near Raiders to burn them alive. While the front is open its soft unarmored core is exposed."
        },
        "arc_id": "fireball",
        "created_at": "2025-11-04T15:57:06.302102+00:00"
      },
      {
        "id": "d72521e4-6793-494c-aa45-83d22d7f319c",
        "arc": {
          "id": "hornet",
          "icon": "https://unhbvkszwhczbjxgetgk.supabase.co/storage/v1/object/public/images/arc-raiders/icons/hornet.webp",
          "name": "Hornet",
          "description": "This is a medium-class drone, easily recognizable by the pair of armored rotors mounted prominently on its front. It rarely operates alone, preferring to patrol the skies alongside a swarm of Wasps or to act as an aerial shield for a larger, ground-based ARC. Its main attack is a focused, high-speed projectile. Watch for the brief, one-second pulse of a red aiming laser—that's your warning before it fires a specialized stun round designed to shred Raider shields and tear through light armor almost instantly."
        },
        "arc_id": "hornet",
        "created_at": "2025-11-04T15:57:35.118713+00:00"
      },
      {
        "id": "5743c1ee-6844-447b-b754-127e7c4ec36f",
        "arc": {
          "id": "bison",
          "icon": "https://unhbvkszwhczbjxgetgk.supabase.co/storage/v1/object/public/images/arc-raiders/icons/bison.webp",
          "name": "Leaper",
          "description": "This isn't just an ARC; it's a massive, arachnid-like siege engine. Its heavy armor gives it a hulking, near-indestructible presence on the battlefield, but don't mistake its bulk for sluggishness. This mechanized spider possesses an unnerving, gravity-defying ability to leap vast distances. Reports confirm it has been seen clearing impossible gaps, even bounding effortlessly to the summit of a Spaceport tower. It's a vertical threat you can't simply hide from."
        },
        "arc_id": "bison",
        "created_at": "2025-11-04T15:59:19.422889+00:00"
      },
      {
        "id": "4f2d8b04-9592-4b9a-ad15-885ed3de8d61",
        "arc": {
          "id": "tick",
          "icon": "https://unhbvkszwhczbjxgetgk.supabase.co/storage/v1/object/public/images/arc-raiders/icons/tick.webp",
          "name": "Tick",
          "description": "This terrifying enemy, often called the Tick, is a small, unarmored ARC that specializes in the perfect ambush. It uses dark, indoor spaces—particularly the undersides of ceilings and dark corners of walls—as its hunting ground. It waits in absolute stillness until a Raider passes underneath. Then, without warning, it lunges for your head, aiming to latch directly onto your face or helmet. Once attached, it relentlessly drains your health and shield meter simultaneously. The panic is compounded by the fact that you must hold the [Interact] button to forcibly pry the parasite off, an agonizing process that leaves you exposed to other threats."
        },
        "arc_id": "tick",
        "created_at": "2025-10-08T15:31:30.012249+00:00"
      },
      {
        "id": "a6de21a2-17bd-4c86-9536-e6750fbb908f",
        "arc": {
          "id": "pop",
          "icon": "https://unhbvkszwhczbjxgetgk.supabase.co/storage/v1/object/public/images/arc-raiders/icons/pop.webp",
          "name": "Pop",
          "description": "This little menace is a Fireball ARC—a small, unarmored rolling unit that hides its true potential. It operates by rapidly closing the distance, looking like nothing more than a simple, harmless sphere until it's right on top of you. Once a Raider is nearby, it snaps open its side panels to reveal twin flamethrowers, quickly bathing the area in fire and burning targets to a crisp. It's a close-range ambush specialist designed to punish anyone caught off-guard."
        },
        "arc_id": "pop",
        "created_at": "2025-11-04T16:00:06.760318+00:00"
      },
      {
        "id": "431ec90e-b722-42df-b9a3-a0805034114c",
        "arc": {
          "id": "queen",
          "icon": "https://unhbvkszwhczbjxgetgk.supabase.co/storage/v1/object/public/images/arc-raiders/icons/queen.webp",
          "name": "Queen",
          "description": "This is the Goliath of the ARC forces, a colossal machine whose presence defines the battlefield. It is only deployed during the critical Harvester Event, acting as the immovable guardian of the Harvester unit. Its incredible durability and lethal arsenal make it the single greatest threat on the map; attempting to scratch its armor alone is a fool's errand—you'll need a full squad of Raiders working in concert just to stand a chance.\n\nIts attacks are devastating:\n\nMortar Barrage: The dome atop the unit launches three massive mortars that land in a cluster around a targeted Raider. Two seconds after impact, they detonate in a fiery, engulfing inferno.\n\nSustained Laser: It periodically sweeps its primary weapon, firing a continuous laser beam at any Raider it acquires in its line-of-sight.\n\nClose-Quarters Deterrents: Should Raiders try to get up close and personal, the Goliath switches modes, delivering either a disruptive EMP pulse to shut down technology or a crushing ground slam to obliterate anything nearby."
        },
        "arc_id": "queen",
        "created_at": "2025-11-04T16:33:19.486695+00:00"
      },
      {
        "id": "7d90ad16-0ad9-4140-bd8b-65d816c398a0",
        "arc": {
          "id": "rocketeer",
          "icon": "https://unhbvkszwhczbjxgetgk.supabase.co/storage/v1/object/public/images/arc-raiders/icons/rocketeer.webp",
          "name": "Rocketeer",
          "description": "This is a formidable flying ARC, a pure engine of destruction that dominates the airspace. It poses a significant threat not just because it flies, but because of its powerful rocket attacks and devastating focus on area-of-effect (AoE) damage. This unit is designed to saturate an area, turning cover into a liability and forcing Raiders to constantly relocate or be wiped out by the sheer force of its explosions. Treat it like a mobile artillery piece—it hits hard and wide."
        },
        "arc_id": "rocketeer",
        "created_at": "2025-11-04T16:34:18.669309+00:00"
      },
      {
        "id": "0b569e5c-9598-4d15-ba41-2e0b6921084d",
        "arc": {
          "id": "wasp",
          "icon": "https://unhbvkszwhczbjxgetgk.supabase.co/storage/v1/object/public/images/arc-raiders/icons/wasp.webp",
          "name": "Wasp",
          "description": "This is the Wasp, a baseline enemy drone that poses a threat through sheer numbers. It is a small, unarmored flyer that peppers Raiders with light-caliber ammunition. You'll almost never encounter a Wasp alone; they operate in tight patrols alongside other Wasps or as escorts for their more dangerous counterpart, the Hornet. The moment it turns aggressive, look for a small red laser to lock onto you for one second—that's your cue to dodge before it unleashes a quick 1.5-second burst of gunfire."
        },
        "arc_id": "wasp",
        "created_at": "2025-11-04T00:46:26.731323+00:00"
      },
      {
        "id": "bc4a3a1e-0107-49f9-9199-6a6c70371882",
        "arc": {
          "id": "bastion",
          "icon": "https://unhbvkszwhczbjxgetgk.supabase.co/storage/v1/object/public/images/arc-raiders/icons/bastion.webp",
          "name": "Bastion",
          "description": "A massive, heavily armored ARC unit, built around a terrifying, fully automatic minigun. It rarely moves without air support overhead, which helps it pin down and suppress Raider movement. Listen for its loud, distinct screech—that's your warning before it unleashes a three-second hail of bullets toward the last known enemy position."
        },
        "arc_id": "bastion",
        "created_at": "2025-11-04T15:53:56.825634+00:00"
      },
      {
        "id": "fdc2344c-bdab-4f1b-857c-36c57d9a87c5",
        "arc": {
          "id": "bombardier",
          "icon": "https://unhbvkszwhczbjxgetgk.supabase.co/storage/v1/object/public/images/arc-raiders/icons/bombardier.webp",
          "name": "Bombardier",
          "description": "The Bombardier is an armored ARC that functions as heavy, mobile artillery. Its movement is slow and loud. Armed with a multi-rocket launcher, it unleashes devastating, long-range barrages that can obliterate your entire squad. Do not engage this unit. If you hear its grinding approach, silence your movement and escape the area immediately, as its attention is a death sentence."
        },
        "arc_id": "bombardier",
        "created_at": "2025-11-04T15:56:37.290049+00:00"
      },
      {
        "id": "faa96278-b6f4-4ff4-8c64-8c6617a57fd9",
        "arc": {
          "id": "sentinel",
          "icon": "https://unhbvkszwhczbjxgetgk.supabase.co/storage/v1/object/public/images/arc-raiders/icons/sentinel.webp",
          "name": "Sentinel",
          "description": "A large unarmored turret that sits atop buildings and ledges. Always found outside and usually very high up. Contains a small vulnerable capsule attached to it's swiveling arm.\n\nTraces movement and will fire off a single Heavy round every 5 seconds while having line-of-sight on a Raider."
        },
        "arc_id": "sentinel",
        "created_at": "2025-11-04T16:35:09.353207+00:00"
      },
      {
        "id": "12dd57e5-c785-41e6-a344-048858d80ae6",
        "arc": {
          "id": "snitch",
          "icon": "https://unhbvkszwhczbjxgetgk.supabase.co/storage/v1/object/public/images/arc-raiders/icons/snitch.webp",
          "name": "Snitch",
          "description": "This little flyer is a swift and unarmored scout drone, often identifiable by its cluster of three rotors. While individually fragile, its primary danger is its role as an aerial alarm system. Once it spots Raiders, it immediately triggers a wide-band signal, effectively calling in a wave of flying ARC reinforcements—usually a swarm of Wasps or Hornets—to descend on your position. Taking it out before it completes its transmission is essential, as its light frame means a single, well-aimed burst will shatter it."
        },
        "arc_id": "snitch",
        "created_at": "2025-11-04T16:36:02.882962+00:00"
      },
      {
        "id": "c35ee729-4c9e-4eca-bb32-a46d1ada863b",
        "arc": {
          "id": "rollbot",
          "icon": "https://unhbvkszwhczbjxgetgk.supabase.co/storage/v1/object/public/images/arc-raiders/icons/rollbot.webp",
          "name": "Surveyor",
          "description": "This is the largest of the rolling ARCs, a massive, spherical construct designed to dominate open ground. Its primary tactic is to stop periodically on the battlefield to transmit disruptive signals, acting as a massive relay for the ARC network. Be warned, however, its most unique (and dangerous) trait is its resilience: as it takes damage, its outer shell breaks apart into many smaller, armored pieces. Its final attack is a relentless one: it will roll directly at high speed toward any Raider it detects, essentially turning itself into a giant, high-impact bowling ball."
        },
        "arc_id": "rollbot",
        "created_at": "2025-11-04T16:36:31.267363+00:00"
      },
      {
        "id": "5b15e861-5314-487d-94ad-787de81cbbe8",
        "arc": {
          "id": "turret",
          "icon": "https://unhbvkszwhczbjxgetgk.supabase.co/storage/v1/object/public/images/arc-raiders/icons/turret.webp",
          "name": "Turret",
          "description": "This is a small, unarmored turret that provides close-quarters defense for the ARC. Its primary function is to scan constantly for movement, and you’ll typically find it mounted on interior walls inside buildings. Do not confuse this swift little gun with the massive, high-altitude Sentinel turrets you find outside. When it spots a Raider, it immediately opens fire, unleashing a two-second hail of bullets in an attempt to suppress and eliminate the threat quickly. Its lack of armor makes it fragile, but its location makes it dangerous."
        },
        "arc_id": "turret",
        "created_at": "2025-11-04T16:37:04.438328+00:00"
      },
      {
        "id": "7ae6e4e3-b00d-4a5e-85bc-138e688faa00",
        "arc": {
          "id": "shredder",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/shredder.webp",
          "name": "Shredder",
          "description": "When this relentless lump of menace was first encountered at the Stella Montis facility, it left behind a trail of downed Raiders. It was dubbed the \"Shredder\" by what few Raiders managed to get back to safety; a name that wasn't so much clever as it was painfully literal."
        },
        "arc_id": "shredder",
        "created_at": "2025-11-14T18:52:50.636795+00:00"
      }
    ],
    "components": [],
    "usedIn": [
      {
        "item": {
          "id": "light-shield",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/light-shield.webp",
          "name": "Light Shield",
          "rarity": "Uncommon",
          "item_type": "Shield",
          "description": "A lightweight shield that offers limited protection without severely impacting mobility."
        },
        "quantity": 2
      },
      {
        "item": {
          "id": "arc-motion-core",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/arc-motion-core.webp",
          "name": "ARC Motion Core",
          "rarity": "Rare",
          "item_type": "Topside Material",
          "description": "Obtained from ARC enemies or activities. Used to craft components. Can be recycled into ARC Alloy."
        },
        "quantity": 8
      },
      {
        "item": {
          "id": "arc-circuitry",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/arc-circuitry.webp",
          "name": "ARC Circuitry",
          "rarity": "Rare",
          "item_type": "Topside Material",
          "description": " Obtained from ARC enemies or activities. Used to craft components. Can be recycled into ARC Alloy."
        },
        "quantity": 8
      }
    ]
  },
  {
    "id": "battery",
    "name": "Battery",
    "description": "Used to craft medical supplies. Can be recycled into scrap metal.",
    "category": "Materials",
    "subcategory": "Topside Material",
    "rarity": "Uncommon",
    "value": 250,
    "weight": 0.25,
    "stackSize": 15,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/battery.webp",
    "lootArea": "Technological, Electrical",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 2,
        "component": {
          "id": "metal-parts",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/metal-parts.webp",
          "name": "Metal Parts",
          "rarity": "Common",
          "item_type": "Basic Material",
          "description": "Used to craft a wide range of items."
        }
      }
    ],
    "droppedBy": [],
    "components": [],
    "usedIn": [
      {
        "item": {
          "id": "energy-ammo",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/energy-ammo.webp",
          "name": "Energy Clip",
          "rarity": "Rare",
          "item_type": "Ammunition",
          "description": "Ammo used for energy weapons. One clip will fully charge a single weapon."
        },
        "quantity": 2
      },
      {
        "item": {
          "id": "medium-shield",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/medium-shield.webp",
          "name": "Medium Shield",
          "rarity": "Rare",
          "item_type": "Shield",
          "description": "A standard shield that blocks a medium portion of incoming damage at a moderate cost to mobility."
        },
        "quantity": 4
      },
      {
        "item": {
          "id": "jolt-mine",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/jolt-mine.webp",
          "name": "Jolt Mine",
          "rarity": "Rare",
          "item_type": "Quick Use",
          "description": "A proximity triggered mine that pops up and stuns anything within its radius."
        },
        "quantity": 1
      }
    ]
  },
  {
    "id": "canister",
    "name": "Canister",
    "description": "Used to craft a wide range of items. Can be recycled into plastic.",
    "category": "Materials",
    "subcategory": "Topside Material",
    "rarity": "Uncommon",
    "value": 300,
    "weight": 0.25,
    "stackSize": 15,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/canister.webp",
    "lootArea": "Commercial",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 3,
        "component": {
          "id": "plastic-parts",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/plastic-parts.webp",
          "name": "Plastic Parts",
          "rarity": "Common",
          "item_type": "Basic Material",
          "description": "Used to craft a wide range of items."
        }
      }
    ],
    "droppedBy": [],
    "components": [],
    "usedIn": [
      {
        "item": {
          "id": "smoke-grenade",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/smoke-grenade.webp",
          "name": "Smoke Grenade",
          "rarity": "Rare",
          "item_type": "Quick Use",
          "description": "A grenade that creates a lingering smoke cloud on impact, blocking visibility from other Raiders."
        },
        "quantity": 1
      },
      {
        "item": {
          "id": "bettina-i",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/bettina-i.webp",
          "name": "Bettina I",
          "rarity": "Epic",
          "item_type": "Weapon",
          "description": "Has slow fire rate and high damage output."
        },
        "quantity": 3
      },
      {
        "item": {
          "id": "heavy-fuze-grenade",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/heavy-fuze-grenade.webp",
          "name": "Heavy Fuze Grenade",
          "rarity": "Rare",
          "item_type": "Quick Use",
          "description": "A grenade that detonates after a delay, dealing explosive damage in its radius."
        },
        "quantity": 2
      },
      {
        "item": {
          "id": "vita-spray",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/vita-spray.webp",
          "name": "Vita Spray",
          "rarity": "Epic",
          "item_type": "Quick Use",
          "description": "A medical item that continuously restores health during use. Can be used on yourself or your allies."
        },
        "quantity": 4
      }
    ]
  },
  {
    "id": "crude-explosives",
    "name": "Crude Explosives",
    "description": "Used to craft explosives. Can be recycled into crafting materials.",
    "category": "Materials",
    "subcategory": "Refined Material",
    "rarity": "Uncommon",
    "value": 270,
    "weight": 0.5,
    "stackSize": 10,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/crude-explosives.webp",
    "lootArea": "Security, Industrial",
    "workbench": "Refiner",
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 3,
        "component": {
          "id": "chemicals",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/chemicals.webp",
          "name": "Chemicals",
          "rarity": "Common",
          "item_type": "Basic Material",
          "description": "Used to craft medical supplies, explosives, and utility items."
        }
      }
    ],
    "droppedBy": [
      {
        "id": "0acd1a4b-2922-47c2-a266-557d8ab246f5",
        "arc": {
          "id": "fireball",
          "icon": "https://unhbvkszwhczbjxgetgk.supabase.co/storage/v1/object/public/images/arc-raiders/icons/fireball.webp",
          "name": "Fireball",
          "description": "A small armored rolling ARC that spits flame. Will open up it's front panel when near Raiders to burn them alive. While the front is open its soft unarmored core is exposed."
        },
        "arc_id": "fireball",
        "created_at": "2025-11-04T15:57:06.302102+00:00"
      },
      {
        "id": "e16e8447-0068-4e6a-bd78-347bd5aec947",
        "arc": {
          "id": "pop",
          "icon": "https://unhbvkszwhczbjxgetgk.supabase.co/storage/v1/object/public/images/arc-raiders/icons/pop.webp",
          "name": "Pop",
          "description": "This little menace is a Fireball ARC—a small, unarmored rolling unit that hides its true potential. It operates by rapidly closing the distance, looking like nothing more than a simple, harmless sphere until it's right on top of you. Once a Raider is nearby, it snaps open its side panels to reveal twin flamethrowers, quickly bathing the area in fire and burning targets to a crisp. It's a close-range ambush specialist designed to punish anyone caught off-guard."
        },
        "arc_id": "pop",
        "created_at": "2025-11-04T16:00:06.760318+00:00"
      }
    ],
    "components": [
      {
        "quantity": 6,
        "component": {
          "id": "chemicals",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/chemicals.webp",
          "name": "Chemicals",
          "rarity": "Common",
          "item_type": "Basic Material"
        }
      }
    ],
    "usedIn": [
      {
        "item": {
          "id": "trigger-nade",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/trigger-nade.webp",
          "name": "Trigger Nade",
          "rarity": "Rare",
          "item_type": "Quick Use",
          "description": "A remote-detonated grenade that can stick to surfaces and ARC, dealing explosive damage when triggered."
        },
        "quantity": 2
      },
      {
        "item": {
          "id": "launcher-ammo",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/launcher-ammo.webp",
          "name": "Launcher Ammo",
          "rarity": "Rare",
          "item_type": "Ammunition",
          "description": "Anti-ARC payloads used mainly by the Hullcracker"
        },
        "quantity": 2
      },
      {
        "item": {
          "id": "explosive-compound",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/explosive-compound.webp",
          "name": "Explosive Compound",
          "rarity": "Rare",
          "item_type": "Refined Material",
          "description": "Used to craft explosives."
        },
        "quantity": 2
      },
      {
        "item": {
          "id": "shrapnel-grenade",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/shrapnel-grenade.webp",
          "name": "Shrapnel Grenade",
          "rarity": "Uncommon",
          "item_type": "Throwable",
          "description": "A makeshift fuze grenade that bursts into razor-sharp fragments upon detonation."
        },
        "quantity": 1
      },
      {
        "item": {
          "id": "snap-blast-grenade",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/snap-blast-grenade.webp",
          "name": "Snap Blast Grenade",
          "rarity": "Uncommon",
          "item_type": "Quick Use",
          "description": "A grenade that sticks to surfaces, dealing explosive damage after a short delay."
        },
        "quantity": 2
      }
    ]
  },
  {
    "id": "duct-tape-recipe",
    "name": "Duct Tape",
    "description": "Used to craft a wide range of items. Can be recycled into crafting materials",
    "category": "Materials",
    "subcategory": "Topside Material",
    "rarity": "Uncommon",
    "value": 300,
    "weight": 0.25,
    "stackSize": 15,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/duct-tape-recipe.webp",
    "lootArea": "Residential, Commercial",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 3,
        "component": {
          "id": "fabric",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/fabric.webp",
          "name": "Fabric",
          "rarity": "Common",
          "item_type": "Basic Material",
          "description": "Used to craft medical supplies and shields."
        }
      }
    ],
    "droppedBy": [],
    "components": [],
    "usedIn": [
      {
        "item": {
          "id": "stable-stock-iii",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/stable-stock-iii.webp",
          "name": "Stable Stock III",
          "rarity": "Rare",
          "item_type": "Modification",
          "description": "Significantly improves dispersion & recoil recovery over time."
        },
        "quantity": 6
      },
      {
        "item": {
          "id": "vertical-grip-i",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/vertical-grip-i.webp",
          "name": "Vertical Grip I",
          "rarity": "Common",
          "item_type": "Modification",
          "description": "Slightly reduces vertical recoil."
        },
        "quantity": 1
      },
      {
        "item": {
          "id": "angled-grip-ii",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/angled-grip-ii.webp",
          "name": "Angled Grip II",
          "rarity": "Uncommon",
          "item_type": "Modification",
          "description": "Moderately reduces horizontal recoil."
        },
        "quantity": 1
      },
      {
        "item": {
          "id": "padded-stock",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/padded-stock.webp",
          "name": "Padded Stock",
          "rarity": "Epic",
          "item_type": "Modification",
          "description": "Significantly improves stability."
        },
        "quantity": 5
      },
      {
        "item": {
          "id": "lightweight-stock",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/lightweight-stock.webp",
          "name": "Lightweight Stock",
          "rarity": "Epic",
          "item_type": "Modification",
          "description": "Moderately improves ADS & draw speed."
        },
        "quantity": 6
      },
      {
        "item": {
          "id": "vertical-grip-iii",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/vertical-grip-iii.webp",
          "name": "Vertical Grip III",
          "rarity": "Rare",
          "item_type": "Modification",
          "description": "Significantly reduces vertical recoil."
        },
        "quantity": 5
      },
      {
        "item": {
          "id": "stable-stock-i",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/stable-stock-i.webp",
          "name": "Stable Stock I",
          "rarity": "Common",
          "item_type": "Modification",
          "description": "Slightly improves dispersion & recoil recovery time. Compatible with: Rattler, Ferro, Arpeggio, Bettina, Kettle."
        },
        "quantity": 1
      },
      {
        "item": {
          "id": "stable-stock-ii",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/stable-stock-ii.webp",
          "name": "Stable Stock II",
          "rarity": "Uncommon",
          "item_type": "Modification",
          "description": "Moderately improves dispersion & recoil recovery time."
        },
        "quantity": 1
      },
      {
        "item": {
          "id": "angled-grip-i",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/angled-grip-i.webp",
          "name": "Angled Grip I",
          "rarity": "Common",
          "item_type": "Modification",
          "description": "Slightly reduces horizontal recoil."
        },
        "quantity": 1
      }
    ]
  },
  {
    "id": "durable-cloth",
    "name": "Durable Cloth",
    "description": "Used to craft medical Supplies such as Herbal Bandage and Sterilized Bandage.",
    "category": "Materials",
    "subcategory": "Refined Material",
    "rarity": "Uncommon",
    "value": 640,
    "weight": 0.25,
    "stackSize": 10,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/durable-cloth.webp",
    "lootArea": "Commercial, Medical",
    "workbench": "Refiner",
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 6,
        "component": {
          "id": "fabric",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/fabric.webp",
          "name": "Fabric",
          "rarity": "Common",
          "item_type": "Basic Material",
          "description": "Used to craft medical supplies and shields."
        }
      }
    ],
    "droppedBy": [],
    "components": [
      {
        "quantity": 14,
        "component": {
          "id": "fabric",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/fabric.webp",
          "name": "Fabric",
          "rarity": "Common",
          "item_type": "Basic Material"
        }
      }
    ],
    "usedIn": [
      {
        "item": {
          "id": "sterilized-bandage",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/sterilized-bandage.webp",
          "name": "Sterilized Bandage",
          "rarity": "Rare",
          "item_type": "Quick Use",
          "description": "A medical item that gradually restores a large amount health over time."
        },
        "quantity": 2
      },
      {
        "item": {
          "id": "herbal-bandage",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/herbal-bandage.webp",
          "name": "Herbal Bandage",
          "rarity": "Uncommon",
          "item_type": "Quick Use",
          "description": "An improvised medical item that gradually restores health over time."
        },
        "quantity": 1
      }
    ]
  },
  {
    "id": "electrical-components",
    "name": "Electrical Components",
    "description": "Used to craft a wide range of items. Can be recycled into crafting materials.",
    "category": "Materials",
    "subcategory": "Refined Material",
    "rarity": "Uncommon",
    "value": 640,
    "weight": 0.5,
    "stackSize": 10,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/electrical-components.webp",
    "lootArea": "Electrical",
    "workbench": "Refiner",
    "uses": "Used to craft: Tactical Mk.2, Combat Mk.2, Looting Mk.2, Advanced Electrical Components, Surge Shield Recharger",
    "recycleComponents": [
      {
        "quantity": 3,
        "component": {
          "id": "plastic-parts",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/plastic-parts.webp",
          "name": "Plastic Parts",
          "rarity": "Common",
          "item_type": "Basic Material",
          "description": "Used to craft a wide range of items."
        }
      },
      {
        "quantity": 3,
        "component": {
          "id": "rubber-parts-recipe",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/rubber-parts-recipe.webp",
          "name": "Rubber Parts",
          "rarity": "Common",
          "item_type": "Basic Material",
          "description": "Used to craft a wide range of items."
        }
      }
    ],
    "droppedBy": [],
    "components": [
      {
        "quantity": 8,
        "component": {
          "id": "plastic-parts",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/plastic-parts.webp",
          "name": "Plastic Parts",
          "rarity": "Common",
          "item_type": "Basic Material"
        }
      },
      {
        "quantity": 4,
        "component": {
          "id": "rubber-parts-recipe",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/rubber-parts-recipe.webp",
          "name": "Rubber Parts",
          "rarity": "Common",
          "item_type": "Basic Material"
        }
      }
    ],
    "usedIn": [
      {
        "item": {
          "id": "surge-shield-recharger",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/surge-shield-recharger.webp",
          "name": "Surge Shield Recharger",
          "rarity": "Rare",
          "item_type": "Quick Use",
          "description": "A handkeld kit that recharges a shield"
        },
        "quantity": 1
      },
      {
        "item": {
          "id": "looting-mk-2",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/looting-mk-2.webp",
          "name": "Looting Mk. 2",
          "rarity": "Rare",
          "item_type": "Augment",
          "description": "Significantly increases looting potential; adds slots for trinkets."
        },
        "quantity": 2
      },
      {
        "item": {
          "id": "tactical-mk-2",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/tactical-mk-2.webp",
          "name": "Tactical Mk. 2",
          "rarity": "Rare",
          "item_type": "Augment",
          "description": "Adds more backpack space and an extra utility item slot."
        },
        "quantity": 2
      },
      {
        "item": {
          "id": "combat-mk-2",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/combat-mk-2.webp",
          "name": "Combat Mk. 2",
          "rarity": "Rare",
          "item_type": "Augment",
          "description": "A Combat augment more focused on manoeuvrability than absorbing damage. "
        },
        "quantity": 2
      },
      {
        "item": {
          "id": "jolt-mine",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/jolt-mine.webp",
          "name": "Jolt Mine",
          "rarity": "Rare",
          "item_type": "Quick Use",
          "description": "A proximity triggered mine that pops up and stuns anything within its radius."
        },
        "quantity": 1
      },
      {
        "item": {
          "id": "advanced-electrical-components",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/advanced-electrical-components.webp",
          "name": "Advanced Electrical Components",
          "rarity": "Rare",
          "item_type": "Refined Material",
          "description": "Used to craft a wide range of items. Can be recycled into crafting materials."
        },
        "quantity": 2
      }
    ]
  },
  {
    "id": "great-muullein",
    "name": "Great Mullein",
    "description": "Used to craft medical supplies.",
    "category": "Materials",
    "subcategory": "Nature",
    "rarity": "Uncommon",
    "value": 300,
    "weight": 0.25,
    "stackSize": 15,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/great-muullein.webp",
    "lootArea": "Nature",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 2,
        "component": {
          "id": "assorted-seeds",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/assorted-seeds.webp",
          "name": "Assorted Seeds",
          "rarity": "Common",
          "item_type": "Nature",
          "description": "A handful of seeds. Celeste might be looking for these."
        }
      }
    ],
    "droppedBy": [],
    "components": [],
    "usedIn": [
      {
        "item": {
          "id": "antiseptic",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/antiseptic.webp",
          "name": "Antiseptic",
          "rarity": "Rare",
          "item_type": "Refined Material",
          "description": "Used to craft medical supplies. Can be recycled into chemicals."
        },
        "quantity": 2
      },
      {
        "item": {
          "id": "herbal-bandage",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/herbal-bandage.webp",
          "name": "Herbal Bandage",
          "rarity": "Uncommon",
          "item_type": "Quick Use",
          "description": "An improvised medical item that gradually restores health over time."
        },
        "quantity": 1
      }
    ]
  },
  {
    "id": "magnet",
    "name": "Magnet",
    "description": "Fun thing to put on a fridgerator.",
    "category": "Materials",
    "subcategory": "Topside Material",
    "rarity": "Uncommon",
    "value": 300,
    "weight": 0.25,
    "stackSize": 15,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/magnet.webp",
    "lootArea": "Exodus",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 2,
        "component": {
          "id": "metal-parts",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/metal-parts.webp",
          "name": "Metal Parts",
          "rarity": "Common",
          "item_type": "Basic Material",
          "description": "Used to craft a wide range of items."
        }
      }
    ],
    "droppedBy": [],
    "components": [],
    "usedIn": [
      {
        "item": {
          "id": "looting-mk-2",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/looting-mk-2.webp",
          "name": "Looting Mk. 2",
          "rarity": "Rare",
          "item_type": "Augment",
          "description": "Significantly increases looting potential; adds slots for trinkets."
        },
        "quantity": 3
      },
      {
        "item": {
          "id": "tactical-mk-2",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/tactical-mk-2.webp",
          "name": "Tactical Mk. 2",
          "rarity": "Rare",
          "item_type": "Augment",
          "description": "Adds more backpack space and an extra utility item slot."
        },
        "quantity": 3
      },
      {
        "item": {
          "id": "combat-mk-2",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/combat-mk-2.webp",
          "name": "Combat Mk. 2",
          "rarity": "Rare",
          "item_type": "Augment",
          "description": "A Combat augment more focused on manoeuvrability than absorbing damage. "
        },
        "quantity": 3
      },
      {
        "item": {
          "id": "venator-i",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/venator-i.webp",
          "name": "Venator I",
          "rarity": "Rare",
          "item_type": "Weapon",
          "description": "Semi-automatic pistol. Fires two shots at a time."
        },
        "quantity": 5
      },
      {
        "item": {
          "id": "snap-blast-grenade",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/snap-blast-grenade.webp",
          "name": "Snap Blast Grenade",
          "rarity": "Uncommon",
          "item_type": "Quick Use",
          "description": "A grenade that sticks to surfaces, dealing explosive damage after a short delay."
        },
        "quantity": 1
      }
    ]
  },
  {
    "id": "mechanical-components",
    "name": "Mechanical Components",
    "description": "Used to craft a wide range of items. Can be recycled into crafting materials.",
    "category": "Materials",
    "subcategory": "Refined Material",
    "rarity": "Uncommon",
    "value": 640,
    "weight": 0.5,
    "stackSize": 10,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/mechanical-components.webp",
    "lootArea": "Mechanical",
    "workbench": "Refiner",
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 3,
        "component": {
          "id": "metal-parts",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/metal-parts.webp",
          "name": "Metal Parts",
          "rarity": "Common",
          "item_type": "Basic Material",
          "description": "Used to craft a wide range of items."
        }
      },
      {
        "quantity": 2,
        "component": {
          "id": "rubber-parts-recipe",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/rubber-parts-recipe.webp",
          "name": "Rubber Parts",
          "rarity": "Common",
          "item_type": "Basic Material",
          "description": "Used to craft a wide range of items."
        }
      }
    ],
    "droppedBy": [
      {
        "id": "2afbf094-1df8-4a9e-b45a-6b69fc6b395d",
        "arc": {
          "id": "bison",
          "icon": "https://unhbvkszwhczbjxgetgk.supabase.co/storage/v1/object/public/images/arc-raiders/icons/bison.webp",
          "name": "Leaper",
          "description": "This isn't just an ARC; it's a massive, arachnid-like siege engine. Its heavy armor gives it a hulking, near-indestructible presence on the battlefield, but don't mistake its bulk for sluggishness. This mechanized spider possesses an unnerving, gravity-defying ability to leap vast distances. Reports confirm it has been seen clearing impossible gaps, even bounding effortlessly to the summit of a Spaceport tower. It's a vertical threat you can't simply hide from."
        },
        "arc_id": "bison",
        "created_at": "2025-11-04T15:59:19.422889+00:00"
      },
      {
        "id": "f16c35fe-c9fe-4ffc-9dc2-275aba5f1242",
        "arc": {
          "id": "bastion",
          "icon": "https://unhbvkszwhczbjxgetgk.supabase.co/storage/v1/object/public/images/arc-raiders/icons/bastion.webp",
          "name": "Bastion",
          "description": "A massive, heavily armored ARC unit, built around a terrifying, fully automatic minigun. It rarely moves without air support overhead, which helps it pin down and suppress Raider movement. Listen for its loud, distinct screech—that's your warning before it unleashes a three-second hail of bullets toward the last known enemy position."
        },
        "arc_id": "bastion",
        "created_at": "2025-11-04T15:53:56.825634+00:00"
      },
      {
        "id": "29d643e0-3bc2-4e47-8953-21cf040cac3e",
        "arc": {
          "id": "bombardier",
          "icon": "https://unhbvkszwhczbjxgetgk.supabase.co/storage/v1/object/public/images/arc-raiders/icons/bombardier.webp",
          "name": "Bombardier",
          "description": "The Bombardier is an armored ARC that functions as heavy, mobile artillery. Its movement is slow and loud. Armed with a multi-rocket launcher, it unleashes devastating, long-range barrages that can obliterate your entire squad. Do not engage this unit. If you hear its grinding approach, silence your movement and escape the area immediately, as its attention is a death sentence."
        },
        "arc_id": "bombardier",
        "created_at": "2025-11-04T15:56:37.290049+00:00"
      }
    ],
    "components": [
      {
        "quantity": 7,
        "component": {
          "id": "metal-parts",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/metal-parts.webp",
          "name": "Metal Parts",
          "rarity": "Common",
          "item_type": "Basic Material"
        }
      },
      {
        "quantity": 3,
        "component": {
          "id": "rubber-parts-recipe",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/rubber-parts-recipe.webp",
          "name": "Rubber Parts",
          "rarity": "Common",
          "item_type": "Basic Material"
        }
      }
    ],
    "usedIn": [
      {
        "item": {
          "id": "il-toro-ii",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/il-toro-ii.webp",
          "name": "Il Toro II",
          "rarity": "Uncommon",
          "item_type": "Weapon",
          "description": "Pump-action shotgun with large bullet spread, sharp falloff, and high damage output."
        },
        "quantity": 3
      },
      {
        "item": {
          "id": "il-toro-iiii",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/il-toro-iiii.webp",
          "name": "Il Toro III",
          "rarity": "Uncommon",
          "item_type": "Weapon",
          "description": "Pump-action shotgun with large bullet spread, sharp falloff, and high damage output."
        },
        "quantity": 4
      },
      {
        "item": {
          "id": "il-toro-iv",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/il-toro-iv.webp",
          "name": "Il Toro IV",
          "rarity": "Uncommon",
          "item_type": "Weapon",
          "description": "Pump-action shotgun with large bullet spread, sharp falloff, and high damage output."
        },
        "quantity": 4
      },
      {
        "item": {
          "id": "arpeggio-i",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/arpeggio-i.webp",
          "name": "Arpeggio I",
          "rarity": "Uncommon",
          "item_type": "Weapon",
          "description": "Has decent damage output and accuracy."
        },
        "quantity": 6
      },
      {
        "item": {
          "id": "angled-grip-ii",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/angled-grip-ii.webp",
          "name": "Angled Grip II",
          "rarity": "Uncommon",
          "item_type": "Modification",
          "description": "Moderately reduces horizontal recoil."
        },
        "quantity": 1
      },
      {
        "item": {
          "id": "silencer-i",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/silencer-i.webp",
          "name": "Silencer I",
          "rarity": "Uncommon",
          "item_type": "Modification",
          "description": "Slightly reduces the amount of noise produced when firing."
        },
        "quantity": 1
      },
      {
        "item": {
          "id": "hairpin-iv",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/hairpin-iv.webp",
          "name": "Hairpin IV",
          "rarity": "Common",
          "item_type": "Weapon",
          "description": "Single-action pistol with a built-in silencer. Great for stealth, but tricky in combat."
        },
        "quantity": 1
      },
      {
        "item": {
          "id": "rattler-iv",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/rattler-iv.webp",
          "name": "Rattler IV",
          "rarity": "Common",
          "item_type": "Weapon",
          "description": "Fully automatic assault rifle. A cheap offensive option, but has to be reloaded 2 bullets at a time."
        },
        "quantity": 3
      },
      {
        "item": {
          "id": "burletta-ii",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/burletta-ii.webp",
          "name": "Burletta II",
          "rarity": "Uncommon",
          "item_type": "Weapon",
          "description": "Semi-automatic pistol with decent damage output and accuracy. Can be fired as fast as you can pull the trigger."
        },
        "quantity": 3
      },
      {
        "item": {
          "id": "il-toro-i",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/il%20Toro-i.webp",
          "name": "Il Toro I",
          "rarity": "Uncommon",
          "item_type": "Weapon",
          "description": "Pump-action shotgun with large bullet spread, sharp falloff, and high damage output."
        },
        "quantity": 5
      },
      {
        "item": {
          "id": "anvil-iii",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/anvil-iii.webp",
          "name": "Anvil III",
          "rarity": "Uncommon",
          "item_type": "Weapon",
          "description": "Single-action hand cannon with high damage output and headshot damage, but slow handling."
        },
        "quantity": 4
      },
      {
        "item": {
          "id": "advanced-mechanical-components",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/advanced-mechanical-components.webp",
          "name": "Advanced Mechanical Components",
          "rarity": "Rare",
          "item_type": "Advanced Material",
          "description": "Mostly used to craft advanced weapons. Can be recycled into crafting materials."
        },
        "quantity": 2
      },
      {
        "item": {
          "id": "mod-components",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/mod-components.webp",
          "name": "Mod Components",
          "rarity": "Rare",
          "item_type": "Refined Material",
          "description": "Used to craft weapon mods. Can be recycled into crafting materials."
        },
        "quantity": 2
      },
      {
        "item": {
          "id": "zipline",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/zipline.webp",
          "name": "Zipline",
          "rarity": "Rare",
          "item_type": "Quick Use",
          "description": "A deployable zipline that allows you to quickly move between two locations."
        },
        "quantity": 1
      },
      {
        "item": {
          "id": "ferro-iv",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/ferro-iv.webp",
          "name": "Ferro IV",
          "rarity": "Common",
          "item_type": "Weapon",
          "description": "Heavy break-action rifle. Packs a punch, but must be reloaded between every shot."
        },
        "quantity": 1
      },
      {
        "item": {
          "id": "rattler-iii",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/rattler-iii.webp",
          "name": "Rattler III",
          "rarity": "Common",
          "item_type": "Weapon",
          "description": "Fully automatic assault rifle. A cheap offensive option, but has to be reloaded 2 bullets at a time."
        },
        "quantity": 3
      },
      {
        "item": {
          "id": "extended-light-mag-ii",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/extended-light-mag-ii.webp",
          "name": "Extended Light Mag II",
          "rarity": "Uncommon",
          "item_type": "Modification",
          "description": "Moderately extends the ammo capacity of the compatible weapons that use light ammo."
        },
        "quantity": 1
      },
      {
        "item": {
          "id": "anvil-iv",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/anvil-iv.webp",
          "name": "Anvil IV",
          "rarity": "Uncommon",
          "item_type": "Weapon",
          "description": "Single-action hand cannon with high damage output and headshot damage, but slow handling."
        },
        "quantity": 4
      },
      {
        "item": {
          "id": "burletta-i",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/burletta-i.webp",
          "name": "Burletta I",
          "rarity": "Uncommon",
          "item_type": "Weapon",
          "description": "Semi-automatic pistol with decent damage output and accuracy. Can be fired as fast as you can pull the trigger."
        },
        "quantity": 3
      },
      {
        "item": {
          "id": "anvil-i",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/anvil-i.webp",
          "name": "Anvil I",
          "rarity": "Uncommon",
          "item_type": "Weapon",
          "description": "Single-action hand cannon with high damage output and headshot damage, but slow handling."
        },
        "quantity": 5
      },
      {
        "item": {
          "id": "anvil-ii",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/anvil-ii.webp",
          "name": "Anvil II",
          "rarity": "Uncommon",
          "item_type": "Weapon",
          "description": "Single-action hand cannon with high damage output and headshot damage, but slow handling."
        },
        "quantity": 3
      },
      {
        "item": {
          "id": "burletta-iiii",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/burletta-iiii.webp",
          "name": "Burletta III",
          "rarity": "Uncommon",
          "item_type": "Weapon",
          "description": "Semi-automatic pistol with decent damage output and accuracy. Can be fired as fast as you can pull the trigger."
        },
        "quantity": 3
      },
      {
        "item": {
          "id": "stable-stock-ii",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/stable-stock-ii.webp",
          "name": "Stable Stock II",
          "rarity": "Uncommon",
          "item_type": "Modification",
          "description": "Moderately improves dispersion & recoil recovery time."
        },
        "quantity": 1
      },
      {
        "item": {
          "id": "burletta-iv",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/burletta-iv.webp",
          "name": "Burletta IV",
          "rarity": "Uncommon",
          "item_type": "Weapon",
          "description": "Semi-automatic pistol with decent damage output and accuracy. Can be fired as fast as you can pull the trigger."
        },
        "quantity": 4
      },
      {
        "item": {
          "id": "arpeggio-iv",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/arpeggio-ii.webp",
          "name": "Arpeggio IV",
          "rarity": "Uncommon",
          "item_type": "Weapon",
          "description": "A 3-round burst assault rifle with decent damage output and accuracy."
        },
        "quantity": 1
      },
      {
        "item": {
          "id": "kettle-iv",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/kettle-iv.webp",
          "name": "Kettle IV",
          "rarity": "Common",
          "item_type": "Weapon",
          "description": "Semi-automatic assault rifle. Quick and accurate, but has low bullet velocity and takes a long time reload."
        },
        "quantity": 3
      },
      {
        "item": {
          "id": "compensator-ii",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/compensator-ii.webp",
          "name": "Compensator II",
          "rarity": "Uncommon",
          "item_type": "Modification",
          "description": "Moderately reduces per-shot dispersion."
        },
        "quantity": 2
      },
      {
        "item": {
          "id": "shotgun-choke-ii",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/shotgun-choke-ii.webp",
          "name": "Shotgun Choke II",
          "rarity": "Uncommon",
          "item_type": "Modification",
          "description": "Moderately reduces base dispersion."
        },
        "quantity": 1
      },
      {
        "item": {
          "id": "stitcher-iv",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/stitcher-iv.webp",
          "name": "Stitcher IV",
          "rarity": "Common",
          "item_type": "Weapon",
          "description": "Full automatic SMG. Deals good damage, but has quite a low fire-rate and can be hard to control."
        },
        "quantity": 3
      },
      {
        "item": {
          "id": "extended-shotgun-mag-ii",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/extended-shotgun-mag-ii.webp",
          "name": "Extended Shotgun Mag II",
          "rarity": "Uncommon",
          "item_type": "Modification",
          "description": "Moderately extends the ammo capacity of compatible weapons that use shotgun ammo."
        },
        "quantity": 2
      }
    ]
  },
  {
    "id": "mushroom",
    "name": "Mushroom",
    "description": "Can be consumed to regain a small amount of health.",
    "category": "Materials",
    "subcategory": "Nature",
    "rarity": "Uncommon",
    "value": 1000,
    "weight": 0.2,
    "stackSize": 10,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/mushroom.webp",
    "lootArea": "Nature",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "oil",
    "name": "Oil",
    "description": "Used to craft weapons and explosives. Can be recycled into chemicals.",
    "category": "Materials",
    "subcategory": "Topside Material",
    "rarity": "Uncommon",
    "value": 300,
    "weight": 0.25,
    "stackSize": 15,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/oil.webp",
    "lootArea": "Mechanical",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 3,
        "component": {
          "id": "chemicals",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/chemicals.webp",
          "name": "Chemicals",
          "rarity": "Common",
          "item_type": "Basic Material",
          "description": "Used to craft medical supplies, explosives, and utility items."
        }
      }
    ],
    "droppedBy": [],
    "components": [],
    "usedIn": [
      {
        "item": {
          "id": "renegade-i",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/renegade-i.webp",
          "name": "Renegade I",
          "rarity": "Rare",
          "item_type": "Weapon",
          "description": "Lever-action battle rifle with high damage output, accuracy, and headshot damage."
        },
        "quantity": 5
      },
      {
        "item": {
          "id": "explosive-compound",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/explosive-compound.webp",
          "name": "Explosive Compound",
          "rarity": "Rare",
          "item_type": "Refined Material",
          "description": "Used to craft explosives."
        },
        "quantity": 2
      },
      {
        "item": {
          "id": "blaze-grenade",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/blaze-grenade.webp",
          "name": "Blaze Grenade",
          "rarity": "Rare",
          "item_type": "Throwable",
          "description": "A grenade that detonates on impact, covering an area in fire that deals damage over time."
        },
        "quantity": 2
      }
    ]
  },
  {
    "id": "olives",
    "name": "Olives",
    "description": "Can be consumed for a small amount of stamina.",
    "category": "Materials",
    "subcategory": "Nature",
    "rarity": "Uncommon",
    "value": 640,
    "weight": 0.2,
    "stackSize": 10,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/olives.webp",
    "lootArea": "Nature",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "roots",
    "name": "Roots",
    "description": "May be worth a few coins.",
    "category": "Materials",
    "subcategory": "Nature",
    "rarity": "Uncommon",
    "value": 640,
    "weight": 0.2,
    "stackSize": 10,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/roots.webp",
    "lootArea": "Nature",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 1,
        "component": {
          "id": "assorted-seeds",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/assorted-seeds.webp",
          "name": "Assorted Seeds",
          "rarity": "Common",
          "item_type": "Nature",
          "description": "A handful of seeds. Celeste might be looking for these."
        }
      }
    ],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "simple-gun-parts",
    "name": "Simple Gun Parts",
    "description": "Used to craft weapons. Can be recycled into scrap metal.",
    "category": "Materials",
    "subcategory": "Topside Material",
    "rarity": "Uncommon",
    "value": 330,
    "weight": 0.3,
    "stackSize": 10,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/simple-gun-parts.webp",
    "lootArea": "Raider, Security",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 2,
        "component": {
          "id": "metal-parts",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/metal-parts.webp",
          "name": "Metal Parts",
          "rarity": "Common",
          "item_type": "Basic Material",
          "description": "Used to craft a wide range of items."
        }
      }
    ],
    "droppedBy": [
      {
        "id": "867be66e-0b8f-47fe-bfd3-519bbffb361a",
        "arc": {
          "id": "hornet",
          "icon": "https://unhbvkszwhczbjxgetgk.supabase.co/storage/v1/object/public/images/arc-raiders/icons/hornet.webp",
          "name": "Hornet",
          "description": "This is a medium-class drone, easily recognizable by the pair of armored rotors mounted prominently on its front. It rarely operates alone, preferring to patrol the skies alongside a swarm of Wasps or to act as an aerial shield for a larger, ground-based ARC. Its main attack is a focused, high-speed projectile. Watch for the brief, one-second pulse of a red aiming laser—that's your warning before it fires a specialized stun round designed to shred Raider shields and tear through light armor almost instantly."
        },
        "arc_id": "hornet",
        "created_at": "2025-11-04T15:57:35.118713+00:00"
      },
      {
        "id": "a85c5c41-1f03-439f-a039-f3f7f3c4c750",
        "arc": {
          "id": "turret",
          "icon": "https://unhbvkszwhczbjxgetgk.supabase.co/storage/v1/object/public/images/arc-raiders/icons/turret.webp",
          "name": "Turret",
          "description": "This is a small, unarmored turret that provides close-quarters defense for the ARC. Its primary function is to scan constantly for movement, and you’ll typically find it mounted on interior walls inside buildings. Do not confuse this swift little gun with the massive, high-altitude Sentinel turrets you find outside. When it spots a Raider, it immediately opens fire, unleashing a two-second hail of bullets in an attempt to suppress and eliminate the threat quickly. Its lack of armor makes it fragile, but its location makes it dangerous."
        },
        "arc_id": "turret",
        "created_at": "2025-11-04T16:37:04.438328+00:00"
      },
      {
        "id": "101d4d78-0b69-4c70-95fa-07e67ba2006d",
        "arc": {
          "id": "shredder",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/shredder.webp",
          "name": "Shredder",
          "description": "When this relentless lump of menace was first encountered at the Stella Montis facility, it left behind a trail of downed Raiders. It was dubbed the \"Shredder\" by what few Raiders managed to get back to safety; a name that wasn't so much clever as it was painfully literal."
        },
        "arc_id": "shredder",
        "created_at": "2025-11-14T18:52:50.636795+00:00"
      }
    ],
    "components": [],
    "usedIn": [
      {
        "item": {
          "id": "il-toro-ii",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/il-toro-ii.webp",
          "name": "Il Toro II",
          "rarity": "Uncommon",
          "item_type": "Weapon",
          "description": "Pump-action shotgun with large bullet spread, sharp falloff, and high damage output."
        },
        "quantity": 1
      },
      {
        "item": {
          "id": "hairpin-iii",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/hairpin-iii.webp",
          "name": "Hairpin III",
          "rarity": "Common",
          "item_type": "Weapon",
          "description": "Single-action pistol with a built-in silencer. Great for stealth, but tricky in combat."
        },
        "quantity": 1
      },
      {
        "item": {
          "id": "arpeggio-i",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/arpeggio-i.webp",
          "name": "Arpeggio I",
          "rarity": "Uncommon",
          "item_type": "Weapon",
          "description": "Has decent damage output and accuracy."
        },
        "quantity": 6
      },
      {
        "item": {
          "id": "heavy-gun-parts-recipe",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/heavy-gun-parts-recipe.webp",
          "name": "Heavy Gun Parts Blueprint",
          "rarity": "Legendary",
          "item_type": "Blueprint",
          "description": "Used directly in crafting items of all tiers."
        },
        "quantity": 4
      },
      {
        "item": {
          "id": "hairpin-iv",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/hairpin-iv.webp",
          "name": "Hairpin IV",
          "rarity": "Common",
          "item_type": "Weapon",
          "description": "Single-action pistol with a built-in silencer. Great for stealth, but tricky in combat."
        },
        "quantity": 1
      },
      {
        "item": {
          "id": "unusable-weapon",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/unusable-weapon.webp",
          "name": "Unusable Weapon",
          "rarity": "Rare",
          "item_type": "Recyclable",
          "description": "Can be recycled into crafting materials."
        },
        "quantity": 5
      },
      {
        "item": {
          "id": "rattler-iv",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/rattler-iv.webp",
          "name": "Rattler IV",
          "rarity": "Common",
          "item_type": "Weapon",
          "description": "Fully automatic assault rifle. A cheap offensive option, but has to be reloaded 2 bullets at a time."
        },
        "quantity": 1
      },
      {
        "item": {
          "id": "burletta-ii",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/burletta-ii.webp",
          "name": "Burletta II",
          "rarity": "Uncommon",
          "item_type": "Weapon",
          "description": "Semi-automatic pistol with decent damage output and accuracy. Can be fired as fast as you can pull the trigger."
        },
        "quantity": 1
      },
      {
        "item": {
          "id": "il-toro-i",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/il%20Toro-i.webp",
          "name": "Il Toro I",
          "rarity": "Uncommon",
          "item_type": "Weapon",
          "description": "Pump-action shotgun with large bullet spread, sharp falloff, and high damage output."
        },
        "quantity": 6
      },
      {
        "item": {
          "id": "shotgun-gun-parts",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/shotgun-gun-parts.webp",
          "name": "Shotgun Parts",
          "rarity": "Rare",
          "item_type": "Material",
          "description": "Specialized components from shotgun-type weapons, used in crafting."
        },
        "quantity": 2
      },
      {
        "item": {
          "id": "heavy-gun-parts",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/heavy-gun-parts.webp",
          "name": "Heavy Gun Parts",
          "rarity": "Rare",
          "item_type": "Topside Material",
          "description": "Used directly in crafting items of all tiers."
        },
        "quantity": 2
      },
      {
        "item": {
          "id": "ferro-iv",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/ferro-iv.webp",
          "name": "Ferro IV",
          "rarity": "Common",
          "item_type": "Weapon",
          "description": "Heavy break-action rifle. Packs a punch, but must be reloaded between every shot."
        },
        "quantity": 1
      },
      {
        "item": {
          "id": "rattler-iii",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/rattler-iii.webp",
          "name": "Rattler III",
          "rarity": "Common",
          "item_type": "Weapon",
          "description": "Fully automatic assault rifle. A cheap offensive option, but has to be reloaded 2 bullets at a time."
        },
        "quantity": 1
      },
      {
        "item": {
          "id": "burletta-i",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/burletta-i.webp",
          "name": "Burletta I",
          "rarity": "Uncommon",
          "item_type": "Weapon",
          "description": "Semi-automatic pistol with decent damage output and accuracy. Can be fired as fast as you can pull the trigger."
        },
        "quantity": 3
      },
      {
        "item": {
          "id": "anvil-i",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/anvil-i.webp",
          "name": "Anvil I",
          "rarity": "Uncommon",
          "item_type": "Weapon",
          "description": "Single-action hand cannon with high damage output and headshot damage, but slow handling."
        },
        "quantity": 6
      },
      {
        "item": {
          "id": "anvil-ii",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/anvil-ii.webp",
          "name": "Anvil II",
          "rarity": "Uncommon",
          "item_type": "Weapon",
          "description": "Single-action hand cannon with high damage output and headshot damage, but slow handling."
        },
        "quantity": 1
      },
      {
        "item": {
          "id": "ferro-iii",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/ferro-iii.webp",
          "name": "Ferro III",
          "rarity": "Common",
          "item_type": "Weapon",
          "description": "Heavy break-action rifle. Packs a punch, but must be reloaded between every shot."
        },
        "quantity": 1
      },
      {
        "item": {
          "id": "burletta-iiii",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/burletta-iiii.webp",
          "name": "Burletta III",
          "rarity": "Uncommon",
          "item_type": "Weapon",
          "description": "Semi-automatic pistol with decent damage output and accuracy. Can be fired as fast as you can pull the trigger."
        },
        "quantity": 1
      },
      {
        "item": {
          "id": "arpeggio-ii",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/arpeggio-ii.webp",
          "name": "Arpeggio II",
          "rarity": "Uncommon",
          "item_type": "Weapon",
          "description": "A 3-round burst assault rifle with decent damage output and accuracy."
        },
        "quantity": 3
      },
      {
        "item": {
          "id": "arpeggio-iii",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/arpeggio-ii.webp",
          "name": "Arpeggio III",
          "rarity": "Uncommon",
          "item_type": "Weapon",
          "description": "A 3-round burst assault rifle with decent damage output and accuracy."
        },
        "quantity": 4
      },
      {
        "item": {
          "id": "kettle-iii",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/kettle-iii.webp",
          "name": "Kettle III",
          "rarity": "Common",
          "item_type": "Weapon",
          "description": "Semi-automatic assault rifle. Quick and accurate, but has low bullet velocity and takes a long time reload."
        },
        "quantity": 1
      },
      {
        "item": {
          "id": "kettle-iv",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/kettle-iv.webp",
          "name": "Kettle IV",
          "rarity": "Common",
          "item_type": "Weapon",
          "description": "Semi-automatic assault rifle. Quick and accurate, but has low bullet velocity and takes a long time reload."
        },
        "quantity": 1
      },
      {
        "item": {
          "id": "stitcher-iii",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/stitcher-iii.webp",
          "name": "Stitcher III",
          "rarity": "Common",
          "item_type": "Weapon",
          "description": "Full automatic SMG. Deals good damage, but has quite a low fire-rate and can be hard to control."
        },
        "quantity": 1
      },
      {
        "item": {
          "id": "stitcher-iv",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/stitcher-iv.webp",
          "name": "Stitcher IV",
          "rarity": "Common",
          "item_type": "Weapon",
          "description": "Full automatic SMG. Deals good damage, but has quite a low fire-rate and can be hard to control."
        },
        "quantity": 1
      },
      {
        "item": {
          "id": "light-gun-parts",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/light-gun-parts.webp",
          "name": "Light Gun Parts",
          "rarity": "Rare",
          "item_type": "Topside Material",
          "description": "Assorted spare parts used for pistols and SMGs."
        },
        "quantity": 2
      }
    ]
  },
  {
    "id": "spring",
    "name": "Steel Spring",
    "description": "A tightly wound coil of metal. Used to craft a wide range of items. Can be recycled into scrap metal.",
    "category": "Materials",
    "subcategory": "Topside Material",
    "rarity": "Uncommon",
    "value": 300,
    "weight": 0.25,
    "stackSize": 15,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/spring.webp",
    "lootArea": "Industrial",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 2,
        "component": {
          "id": "metal-parts",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/metal-parts.webp",
          "name": "Metal Parts",
          "rarity": "Common",
          "item_type": "Basic Material",
          "description": "Used to craft a wide range of items."
        }
      }
    ],
    "droppedBy": [],
    "components": [],
    "usedIn": [
      {
        "item": {
          "id": "extended-shotgun-mag-i",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/extended-shotgun-mag-i.webp",
          "name": "Extended Shotgun Mag I",
          "rarity": "Common",
          "item_type": "Modification",
          "description": "Slightly extends the ammo capacity of compatible weapons that use shotgun ammo."
        },
        "quantity": 1
      },
      {
        "item": {
          "id": "barricade-kit",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/barricade-kit.webp",
          "name": "Barricade Kit",
          "rarity": "Uncommon",
          "item_type": "Quick Use",
          "description": "A deployable cover that can block incoming damage until it breaks."
        },
        "quantity": 1
      },
      {
        "item": {
          "id": "extended-medium-mag-iii",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/extended-medium-mag-iii.webp",
          "name": "Extended Medium Mag III",
          "rarity": "Rare",
          "item_type": "Modification",
          "description": "Moderately extends the ammo capacity of compatible weapons that use medium ammo"
        },
        "quantity": 6
      },
      {
        "item": {
          "id": "advanced-mechanical-components",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/advanced-mechanical-components.webp",
          "name": "Advanced Mechanical Components",
          "rarity": "Rare",
          "item_type": "Advanced Material",
          "description": "Mostly used to craft advanced weapons. Can be recycled into crafting materials."
        },
        "quantity": 2
      },
      {
        "item": {
          "id": "mod-components",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/mod-components.webp",
          "name": "Mod Components",
          "rarity": "Rare",
          "item_type": "Refined Material",
          "description": "Used to craft weapon mods. Can be recycled into crafting materials."
        },
        "quantity": 2
      },
      {
        "item": {
          "id": "extended-light-mag-iii",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/extended-light-mag-iii.webp",
          "name": "Extended Light Mag III",
          "rarity": "Rare",
          "item_type": "Modification",
          "description": "Significantly extends the ammo capacity of the compatible weapons that use light ammo."
        },
        "quantity": 6
      },
      {
        "item": {
          "id": "shrapnel-grenade",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/shrapnel-grenade.webp",
          "name": "Shrapnel Grenade",
          "rarity": "Uncommon",
          "item_type": "Throwable",
          "description": "A makeshift fuze grenade that bursts into razor-sharp fragments upon detonation."
        },
        "quantity": 2
      },
      {
        "item": {
          "id": "extended-shotgun-mag-iii",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/extended-shotgun-mag-iii.webp",
          "name": "Extended Shotgun Mag III",
          "rarity": "Rare",
          "item_type": "Modification",
          "description": "Significantly extends the ammo capacity of compatible weapons that use shotgun ammo."
        },
        "quantity": 6
      },
      {
        "item": {
          "id": "extended-light-mag-i",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/extended-light-mag-i.webp",
          "name": "Extended Light Mag I",
          "rarity": "Common",
          "item_type": "Modification",
          "description": "Slightly extends the ammo capacity of the compatible weapons that use light ammo."
        },
        "quantity": 1
      },
      {
        "item": {
          "id": "extended-medium-mag-i",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/extended-medium-mag-i.webp",
          "name": "Extended Medium Mag I",
          "rarity": "Common",
          "item_type": "Modification",
          "description": "Slightly extends the ammo capacity of compatible weapons that use medium ammo."
        },
        "quantity": 1
      },
      {
        "item": {
          "id": "extended-medium-mag-ii",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/extended-medium-mag-ii.webp",
          "name": "Extended Medium Mag II",
          "rarity": "Uncommon",
          "item_type": "Modification",
          "description": "Moderately extends the ammo capacity of compatible weapons that use medium ammo"
        },
        "quantity": 1
      },
      {
        "item": {
          "id": "extended-light-mag-ii",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/extended-light-mag-ii.webp",
          "name": "Extended Light Mag II",
          "rarity": "Uncommon",
          "item_type": "Modification",
          "description": "Moderately extends the ammo capacity of the compatible weapons that use light ammo."
        },
        "quantity": 1
      },
      {
        "item": {
          "id": "extended-shotgun-mag-ii",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/extended-shotgun-mag-ii.webp",
          "name": "Extended Shotgun Mag II",
          "rarity": "Uncommon",
          "item_type": "Modification",
          "description": "Moderately extends the ammo capacity of compatible weapons that use shotgun ammo."
        },
        "quantity": 3
      }
    ]
  },
  {
    "id": "torch-ginger",
    "name": "Torch Ginger",
    "description": "A plant used to craft medical supplies.",
    "category": "Materials",
    "subcategory": "Material",
    "rarity": "Uncommon",
    "value": 300,
    "weight": 0.25,
    "stackSize": 15,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/torch-ginger.webp",
    "lootArea": "Nature",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 3,
        "component": {
          "id": "chemicals",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/chemicals.webp",
          "name": "Chemicals",
          "rarity": "Common",
          "item_type": "Basic Material",
          "description": "Used to craft medical supplies, explosives, and utility items."
        }
      }
    ],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "wires-recipe",
    "name": "Wires",
    "description": "A bundle of old wires. Used to craft a wide range of items. Can be recycled into scrap metal.",
    "category": "Materials",
    "subcategory": "Topside Material",
    "rarity": "Uncommon",
    "value": 200,
    "weight": 0.25,
    "stackSize": 15,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/wires-recipe.webp",
    "lootArea": "Electrical, Technological",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 2,
        "component": {
          "id": "rubber-parts-recipe",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/rubber-parts-recipe.webp",
          "name": "Rubber Parts",
          "rarity": "Common",
          "item_type": "Basic Material",
          "description": "Used to craft a wide range of items."
        }
      }
    ],
    "droppedBy": [],
    "components": [],
    "usedIn": [
      {
        "item": {
          "id": "silencer-i",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/silencer-i.webp",
          "name": "Silencer I",
          "rarity": "Uncommon",
          "item_type": "Modification",
          "description": "Slightly reduces the amount of noise produced when firing."
        },
        "quantity": 1
      },
      {
        "item": {
          "id": "osprey-i",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/osprey-i.webp",
          "name": "Osprey I",
          "rarity": "Rare",
          "item_type": "Weapon",
          "description": "A scoped bolt-action sniper rifle with reliable damage output and accuracy."
        },
        "quantity": 7
      },
      {
        "item": {
          "id": "compensator-i",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/compensator-i.webp",
          "name": "Compensator I",
          "rarity": "Common",
          "item_type": "Modification",
          "description": "Slightly reduces per-shot dispersion."
        },
        "quantity": 1
      },
      {
        "item": {
          "id": "shotgun-choke-i",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/shotgun-choke-i.webp",
          "name": "Shotgun Choke I",
          "rarity": "Common",
          "item_type": "Modification",
          "description": "Slightly reduces base dispersion."
        },
        "quantity": 1
      },
      {
        "item": {
          "id": "muzzle-brake-i",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/muzzle-brake-i.webp",
          "name": "Muzzle Brake I",
          "rarity": "Common",
          "item_type": "Modification",
          "description": "Slightly reduces both vertical recoil & horizontal recoil."
        },
        "quantity": 1
      },
      {
        "item": {
          "id": "compensator-ii",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/compensator-ii.webp",
          "name": "Compensator II",
          "rarity": "Uncommon",
          "item_type": "Modification",
          "description": "Moderately reduces per-shot dispersion."
        },
        "quantity": 4
      },
      {
        "item": {
          "id": "shotgun-choke-ii",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/shotgun-choke-ii.webp",
          "name": "Shotgun Choke II",
          "rarity": "Uncommon",
          "item_type": "Modification",
          "description": "Moderately reduces base dispersion."
        },
        "quantity": 1
      },
      {
        "item": {
          "id": "shotgun-silencer",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/shotgun-silencer.webp",
          "name": "Shotgun Silencer",
          "rarity": "Epic",
          "item_type": "Mods",
          "description": "Moderately reduces the amount of noise produced when firing."
        },
        "quantity": 9
      },
      {
        "item": {
          "id": "advanced-electrical-components",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/advanced-electrical-components.webp",
          "name": "Advanced Electrical Components",
          "rarity": "Rare",
          "item_type": "Refined Material",
          "description": "Used to craft a wide range of items. Can be recycled into crafting materials."
        },
        "quantity": 3
      }
    ]
  },
  {
    "id": "agave",
    "name": "Agave",
    "description": "A piece of an agave leaf. Can be used to regain a small amount of health.",
    "category": "Materials",
    "subcategory": "Nature",
    "rarity": "Common",
    "value": 1000,
    "weight": 0.2,
    "stackSize": 10,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/agave.webp",
    "lootArea": "Nature",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 3,
        "component": {
          "id": "assorted-seeds",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/assorted-seeds.webp",
          "name": "Assorted Seeds",
          "rarity": "Common",
          "item_type": "Nature",
          "description": "A handful of seeds. Celeste might be looking for these."
        }
      }
    ],
    "droppedBy": [],
    "components": [],
    "usedIn": [
      {
        "item": {
          "id": "agave-juice",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/agave-juice.webp",
          "name": "Agave Juice",
          "rarity": "Common",
          "item_type": "Consumable",
          "description": "A concoction that temporarily increases stamina regeneration, at a small initial cost to health."
        },
        "quantity": 1
      }
    ]
  },
  {
    "id": "apricot",
    "name": "Apricot",
    "description": "A sun ripe apricot. Can be consumed for a small amount of stamina.",
    "category": "Materials",
    "subcategory": "Nature",
    "rarity": "Common",
    "value": 640,
    "weight": 0.2,
    "stackSize": 10,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/apricot.webp",
    "lootArea": "Nature",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 3,
        "component": {
          "id": "assorted-seeds",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/assorted-seeds.webp",
          "name": "Assorted Seeds",
          "rarity": "Common",
          "item_type": "Nature",
          "description": "A handful of seeds. Celeste might be looking for these."
        }
      }
    ],
    "droppedBy": [],
    "components": [],
    "usedIn": [
      {
        "item": {
          "id": "fruit-mix",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/fruit-mix.webp",
          "name": "Fruit Mix",
          "rarity": "Common",
          "item_type": "Medical",
          "description": "A food item that moderately increases both health and stamina."
        },
        "quantity": 1
      }
    ]
  },
  {
    "id": "arc-powercell",
    "name": "ARC Powercell",
    "description": "Valuable resource that drops from all ARC enemies. Used to craft: Shield Recharger",
    "category": "Materials",
    "subcategory": "Topside Material",
    "rarity": "Common",
    "value": 270,
    "weight": 0.5,
    "stackSize": 5,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/arc-powercell.webp",
    "lootArea": "ARC",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [
      {
        "id": "dba2014f-a902-4855-8b68-0dd1b4c7e98f",
        "arc": {
          "id": "fireball",
          "icon": "https://unhbvkszwhczbjxgetgk.supabase.co/storage/v1/object/public/images/arc-raiders/icons/fireball.webp",
          "name": "Fireball",
          "description": "A small armored rolling ARC that spits flame. Will open up it's front panel when near Raiders to burn them alive. While the front is open its soft unarmored core is exposed."
        },
        "arc_id": "fireball",
        "created_at": "2025-11-04T15:57:06.302102+00:00"
      },
      {
        "id": "09615860-43e8-4535-b3dc-7e499451fe46",
        "arc": {
          "id": "hornet",
          "icon": "https://unhbvkszwhczbjxgetgk.supabase.co/storage/v1/object/public/images/arc-raiders/icons/hornet.webp",
          "name": "Hornet",
          "description": "This is a medium-class drone, easily recognizable by the pair of armored rotors mounted prominently on its front. It rarely operates alone, preferring to patrol the skies alongside a swarm of Wasps or to act as an aerial shield for a larger, ground-based ARC. Its main attack is a focused, high-speed projectile. Watch for the brief, one-second pulse of a red aiming laser—that's your warning before it fires a specialized stun round designed to shred Raider shields and tear through light armor almost instantly."
        },
        "arc_id": "hornet",
        "created_at": "2025-11-04T15:57:35.118713+00:00"
      },
      {
        "id": "ec1a5aa4-bd9c-4d23-8ac6-b80295a9ddf5",
        "arc": {
          "id": "bison",
          "icon": "https://unhbvkszwhczbjxgetgk.supabase.co/storage/v1/object/public/images/arc-raiders/icons/bison.webp",
          "name": "Leaper",
          "description": "This isn't just an ARC; it's a massive, arachnid-like siege engine. Its heavy armor gives it a hulking, near-indestructible presence on the battlefield, but don't mistake its bulk for sluggishness. This mechanized spider possesses an unnerving, gravity-defying ability to leap vast distances. Reports confirm it has been seen clearing impossible gaps, even bounding effortlessly to the summit of a Spaceport tower. It's a vertical threat you can't simply hide from."
        },
        "arc_id": "bison",
        "created_at": "2025-11-04T15:59:19.422889+00:00"
      },
      {
        "id": "acc8f0c5-6aa2-4f57-a978-151911a97834",
        "arc": {
          "id": "pop",
          "icon": "https://unhbvkszwhczbjxgetgk.supabase.co/storage/v1/object/public/images/arc-raiders/icons/pop.webp",
          "name": "Pop",
          "description": "This little menace is a Fireball ARC—a small, unarmored rolling unit that hides its true potential. It operates by rapidly closing the distance, looking like nothing more than a simple, harmless sphere until it's right on top of you. Once a Raider is nearby, it snaps open its side panels to reveal twin flamethrowers, quickly bathing the area in fire and burning targets to a crisp. It's a close-range ambush specialist designed to punish anyone caught off-guard."
        },
        "arc_id": "pop",
        "created_at": "2025-11-04T16:00:06.760318+00:00"
      },
      {
        "id": "2357638b-bd34-4d07-96f7-dd2d8e04e717",
        "arc": {
          "id": "rocketeer",
          "icon": "https://unhbvkszwhczbjxgetgk.supabase.co/storage/v1/object/public/images/arc-raiders/icons/rocketeer.webp",
          "name": "Rocketeer",
          "description": "This is a formidable flying ARC, a pure engine of destruction that dominates the airspace. It poses a significant threat not just because it flies, but because of its powerful rocket attacks and devastating focus on area-of-effect (AoE) damage. This unit is designed to saturate an area, turning cover into a liability and forcing Raiders to constantly relocate or be wiped out by the sheer force of its explosions. Treat it like a mobile artillery piece—it hits hard and wide."
        },
        "arc_id": "rocketeer",
        "created_at": "2025-11-04T16:34:18.669309+00:00"
      },
      {
        "id": "8c9849fa-e2ef-45f3-8b13-b7ef425c5af9",
        "arc": {
          "id": "wasp",
          "icon": "https://unhbvkszwhczbjxgetgk.supabase.co/storage/v1/object/public/images/arc-raiders/icons/wasp.webp",
          "name": "Wasp",
          "description": "This is the Wasp, a baseline enemy drone that poses a threat through sheer numbers. It is a small, unarmored flyer that peppers Raiders with light-caliber ammunition. You'll almost never encounter a Wasp alone; they operate in tight patrols alongside other Wasps or as escorts for their more dangerous counterpart, the Hornet. The moment it turns aggressive, look for a small red laser to lock onto you for one second—that's your cue to dodge before it unleashes a quick 1.5-second burst of gunfire."
        },
        "arc_id": "wasp",
        "created_at": "2025-11-04T00:46:26.731323+00:00"
      },
      {
        "id": "1e0cd1fd-f2cd-4cc2-b3ab-633315ade89f",
        "arc": {
          "id": "bastion",
          "icon": "https://unhbvkszwhczbjxgetgk.supabase.co/storage/v1/object/public/images/arc-raiders/icons/bastion.webp",
          "name": "Bastion",
          "description": "A massive, heavily armored ARC unit, built around a terrifying, fully automatic minigun. It rarely moves without air support overhead, which helps it pin down and suppress Raider movement. Listen for its loud, distinct screech—that's your warning before it unleashes a three-second hail of bullets toward the last known enemy position."
        },
        "arc_id": "bastion",
        "created_at": "2025-11-04T15:53:56.825634+00:00"
      },
      {
        "id": "4a012c4f-eb0a-4a7d-8d6b-38d8f09a5cd3",
        "arc": {
          "id": "bombardier",
          "icon": "https://unhbvkszwhczbjxgetgk.supabase.co/storage/v1/object/public/images/arc-raiders/icons/bombardier.webp",
          "name": "Bombardier",
          "description": "The Bombardier is an armored ARC that functions as heavy, mobile artillery. Its movement is slow and loud. Armed with a multi-rocket launcher, it unleashes devastating, long-range barrages that can obliterate your entire squad. Do not engage this unit. If you hear its grinding approach, silence your movement and escape the area immediately, as its attention is a death sentence."
        },
        "arc_id": "bombardier",
        "created_at": "2025-11-04T15:56:37.290049+00:00"
      },
      {
        "id": "f0753d6e-2655-42fe-bcf8-530e49a99fa2",
        "arc": {
          "id": "snitch",
          "icon": "https://unhbvkszwhczbjxgetgk.supabase.co/storage/v1/object/public/images/arc-raiders/icons/snitch.webp",
          "name": "Snitch",
          "description": "This little flyer is a swift and unarmored scout drone, often identifiable by its cluster of three rotors. While individually fragile, its primary danger is its role as an aerial alarm system. Once it spots Raiders, it immediately triggers a wide-band signal, effectively calling in a wave of flying ARC reinforcements—usually a swarm of Wasps or Hornets—to descend on your position. Taking it out before it completes its transmission is essential, as its light frame means a single, well-aimed burst will shatter it."
        },
        "arc_id": "snitch",
        "created_at": "2025-11-04T16:36:02.882962+00:00"
      },
      {
        "id": "bfb32557-8444-4afd-9ca3-4c73029d3c3d",
        "arc": {
          "id": "rollbot",
          "icon": "https://unhbvkszwhczbjxgetgk.supabase.co/storage/v1/object/public/images/arc-raiders/icons/rollbot.webp",
          "name": "Surveyor",
          "description": "This is the largest of the rolling ARCs, a massive, spherical construct designed to dominate open ground. Its primary tactic is to stop periodically on the battlefield to transmit disruptive signals, acting as a massive relay for the ARC network. Be warned, however, its most unique (and dangerous) trait is its resilience: as it takes damage, its outer shell breaks apart into many smaller, armored pieces. Its final attack is a relentless one: it will roll directly at high speed toward any Raider it detects, essentially turning itself into a giant, high-impact bowling ball."
        },
        "arc_id": "rollbot",
        "created_at": "2025-11-04T16:36:31.267363+00:00"
      },
      {
        "id": "b82caf67-c9b0-4a4a-9c52-69e50e49476f",
        "arc": {
          "id": "shredder",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/shredder.webp",
          "name": "Shredder",
          "description": "When this relentless lump of menace was first encountered at the Stella Montis facility, it left behind a trail of downed Raiders. It was dubbed the \"Shredder\" by what few Raiders managed to get back to safety; a name that wasn't so much clever as it was painfully literal."
        },
        "arc_id": "shredder",
        "created_at": "2025-11-14T18:52:50.636795+00:00"
      }
    ],
    "components": [],
    "usedIn": [
      {
        "item": {
          "id": "shield-recharger",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/shield-recharger.webp",
          "name": "Shield Recharger",
          "rarity": "Uncommon",
          "item_type": "Quick Use",
          "description": "A handheld repair kit that recharges a shield on use."
        },
        "quantity": 1
      }
    ]
  },
  {
    "id": "assorted-seeds",
    "name": "Assorted Seeds",
    "description": "A handful of seeds. Celeste might be looking for these.",
    "category": "Materials",
    "subcategory": "Nature",
    "rarity": "Common",
    "value": 100,
    "weight": 0.05,
    "stackSize": 100,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/assorted-seeds.webp",
    "lootArea": "Nature",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "chemicals",
    "name": "Chemicals",
    "description": "Used to craft medical supplies, explosives, and utility items.",
    "category": "Materials",
    "subcategory": "Basic Material",
    "rarity": "Common",
    "value": 50,
    "weight": 0.1,
    "stackSize": 50,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/chemicals.webp",
    "lootArea": "Mechanical, Residential, Medical",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": [
      {
        "item": {
          "id": "light-ammo",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/light-ammo.webp",
          "name": "Light Ammo",
          "rarity": "Common",
          "item_type": "Ammunition",
          "description": "Light bullets used mainly with SMGs and light handguns. Such as Kettle, Stitcher, Burletta, Hairpin and Bobcat."
        },
        "quantity": 2
      },
      {
        "item": {
          "id": "gas-grenade",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/gas-grenade.webp",
          "name": "Gas Grenade",
          "rarity": "Common",
          "item_type": "Quick Use",
          "description": "A grenade that emites lingering toxic cloud on impact, draining the stamina of any Raiders within its area of effect."
        },
        "quantity": 4
      },
      {
        "item": {
          "id": "smoke-grenade",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/smoke-grenade.webp",
          "name": "Smoke Grenade",
          "rarity": "Rare",
          "item_type": "Quick Use",
          "description": "A grenade that creates a lingering smoke cloud on impact, blocking visibility from other Raiders."
        },
        "quantity": 7
      },
      {
        "item": {
          "id": "heavy-ammo",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/heavy-ammo.webp",
          "name": "Heavy Ammo",
          "rarity": "Common",
          "item_type": "Ammunition",
          "description": "Heavy bullets used mainly with large-caliber weapons."
        },
        "quantity": 2
      },
      {
        "item": {
          "id": "shotgun-ammo",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/shotgun-ammo.webp",
          "name": "Shotgun ammo",
          "rarity": "Common",
          "item_type": "Ammunition",
          "description": "Shotgun shells used for shotguns."
        },
        "quantity": 2
      },
      {
        "item": {
          "id": "adrenaline-shot",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/adrenaline-shot.webp",
          "name": "Adrenaline Shot",
          "rarity": "Common",
          "item_type": "Quick Use",
          "description": "A serum that fully restores stamina and temporarily increases stamina regeneration"
        },
        "quantity": 3
      },
      {
        "item": {
          "id": "antiseptic",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/antiseptic.webp",
          "name": "Antiseptic",
          "rarity": "Rare",
          "item_type": "Refined Material",
          "description": "Used to craft medical supplies. Can be recycled into chemicals."
        },
        "quantity": 10
      },
      {
        "item": {
          "id": "light-impact-grenade",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/light-impact-grenade.webp",
          "name": "Light Impact Grenade",
          "rarity": "Common",
          "item_type": "Quick Use",
          "description": "A grenade that detonates on impact, dealing explosive damage in a small radius."
        },
        "quantity": 3
      },
      {
        "item": {
          "id": "medium-ammo",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/medium-ammo.webp",
          "name": "Medium Ammo",
          "rarity": "Common",
          "item_type": "Ammunition",
          "description": "Medium bullets used mainly with medium-caliber weapons. Such as Rattler, Tempest, Arpeggio, Renegade and Torrente."
        },
        "quantity": 2
      },
      {
        "item": {
          "id": "crude-explosives",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/crude-explosives.webp",
          "name": "Crude Explosives",
          "rarity": "Uncommon",
          "item_type": "Refined Material",
          "description": "Used to craft explosives. Can be recycled into crafting materials."
        },
        "quantity": 6
      },
      {
        "item": {
          "id": "lil-smoke-grenade",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/lil-smoke-grenade.webp",
          "name": "Li'l Smoke Grenade",
          "rarity": "Common",
          "item_type": "Quick Use",
          "description": "A grenade that pops a thick but small smoke cloud on impact, blocking visibility from ARC and other Raiders."
        },
        "quantity": 5
      }
    ]
  },
  {
    "id": "fabric",
    "name": "Fabric",
    "description": "Used to craft medical supplies and shields.",
    "category": "Materials",
    "subcategory": "Basic Material",
    "rarity": "Common",
    "value": 50,
    "weight": 0.1,
    "stackSize": 50,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/fabric.webp",
    "lootArea": "Commercial, Residential, Medical",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": [
      {
        "item": {
          "id": "durable-cloth",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/durable-cloth.webp",
          "name": "Durable Cloth",
          "rarity": "Uncommon",
          "item_type": "Refined Material",
          "description": "Used to craft medical Supplies such as Herbal Bandage and Sterilized Bandage."
        },
        "quantity": 14
      },
      {
        "item": {
          "id": "bandage",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/bandage.webp",
          "name": "Bandage",
          "rarity": "Common",
          "item_type": "Quick Use",
          "description": "A medical item that gradually restores health over time."
        },
        "quantity": 5
      }
    ]
  },
  {
    "id": "fertilizer",
    "name": "Fertilizer",
    "description": "May be worth a few coins.",
    "category": "Materials",
    "subcategory": "Nature",
    "rarity": "Common",
    "value": 1000,
    "weight": 0.4,
    "stackSize": 10,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/fertilizer.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "lemon",
    "name": "Lemon",
    "description": "Can be consumed for a small amount of stamina",
    "category": "Materials",
    "subcategory": "Nature",
    "rarity": "Common",
    "value": 640,
    "weight": 0.2,
    "stackSize": 10,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/lemon.webp",
    "lootArea": "Nature",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 3,
        "component": {
          "id": "assorted-seeds",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/assorted-seeds.webp",
          "name": "Assorted Seeds",
          "rarity": "Common",
          "item_type": "Nature",
          "description": "A handful of seeds. Celeste might be looking for these."
        }
      }
    ],
    "droppedBy": [],
    "components": [],
    "usedIn": [
      {
        "item": {
          "id": "fruit-mix",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/fruit-mix.webp",
          "name": "Fruit Mix",
          "rarity": "Common",
          "item_type": "Medical",
          "description": "A food item that moderately increases both health and stamina."
        },
        "quantity": 1
      }
    ]
  },
  {
    "id": "metal-parts",
    "name": "Metal Parts",
    "description": "Used to craft a wide range of items.",
    "category": "Materials",
    "subcategory": "Basic Material",
    "rarity": "Common",
    "value": 75,
    "weight": 0.15,
    "stackSize": 50,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/metal-parts.webp",
    "lootArea": "Mechanical, Industrial, Electrical, Technological",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": [
      {
        "item": {
          "id": "hairpin-iii",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/hairpin-iii.webp",
          "name": "Hairpin III",
          "rarity": "Common",
          "item_type": "Weapon",
          "description": "Single-action pistol with a built-in silencer. Great for stealth, but tricky in combat."
        },
        "quantity": 9
      },
      {
        "item": {
          "id": "ferro-ii",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/ferro-ii.webp",
          "name": "Ferro II",
          "rarity": "Common",
          "item_type": "Weapon",
          "description": "Heavy break-action rifle. Packs a punch, but must be reloaded between every shot."
        },
        "quantity": 7
      },
      {
        "item": {
          "id": "light-ammo",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/light-ammo.webp",
          "name": "Light Ammo",
          "rarity": "Common",
          "item_type": "Ammunition",
          "description": "Light bullets used mainly with SMGs and light handguns. Such as Kettle, Stitcher, Burletta, Hairpin and Bobcat."
        },
        "quantity": 3
      },
      {
        "item": {
          "id": "kettle-ii",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/kettle-ii.webp",
          "name": "Kettle II",
          "rarity": "Common",
          "item_type": "Weapon",
          "description": "Semi-automatic assault rifle. Quick and accurate, but has low bullet velocity and takes a long time reload."
        },
        "quantity": 8
      },
      {
        "item": {
          "id": "barricade-kit",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/barricade-kit.webp",
          "name": "Barricade Kit",
          "rarity": "Uncommon",
          "item_type": "Quick Use",
          "description": "A deployable cover that can block incoming damage until it breaks."
        },
        "quantity": 5
      },
      {
        "item": {
          "id": "stitcher-i",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/stitcher-ii.webp",
          "name": "Stitcher I",
          "rarity": "Common",
          "item_type": "Weapon",
          "description": "Full automatic SMG. Deals good damage, but has quite a low fire-rate and can be hard to control."
        },
        "quantity": 8
      },
      {
        "item": {
          "id": "mechanical-components",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/mechanical-components.webp",
          "name": "Mechanical Components",
          "rarity": "Uncommon",
          "item_type": "Refined Material",
          "description": "Used to craft a wide range of items. Can be recycled into crafting materials."
        },
        "quantity": 7
      },
      {
        "item": {
          "id": "door-blocker",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/door-blocker.webp",
          "name": "Door Blocker",
          "rarity": "Common",
          "item_type": "Quick Use",
          "description": "A locking mechanism that can be placed on large metal doors to limit access."
        },
        "quantity": 3
      },
      {
        "item": {
          "id": "heavy-ammo",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/heavy-ammo.webp",
          "name": "Heavy Ammo",
          "rarity": "Common",
          "item_type": "Ammunition",
          "description": "Heavy bullets used mainly with large-caliber weapons."
        },
        "quantity": 3
      },
      {
        "item": {
          "id": "shotgun-ammo",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/shotgun-ammo.webp",
          "name": "Shotgun ammo",
          "rarity": "Common",
          "item_type": "Ammunition",
          "description": "Shotgun shells used for shotguns."
        },
        "quantity": 3
      },
      {
        "item": {
          "id": "rattler-ii",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/rattler-ii.webp",
          "name": "Rattler II",
          "rarity": "Common",
          "item_type": "Weapon",
          "description": "Fully automatic assault rifle. A cheap offensive option, but has to be reloaded 2 bullets at a time."
        },
        "quantity": 10
      },
      {
        "item": {
          "id": "hairpin-ii",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/hairpin-ii.webp",
          "name": "Hairpin II",
          "rarity": "Common",
          "item_type": "Weapon",
          "description": "Single-action pistol with a built-in silencer. Great for stealth, but tricky in combat."
        },
        "quantity": 8
      },
      {
        "item": {
          "id": "rattler-i",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/rattler-i.webp",
          "name": "Rattler I",
          "rarity": "Common",
          "item_type": "Weapon",
          "description": "Fully automatic assault rifle. A cheap offensive option, but has to be reloaded 2 bullets at a time."
        },
        "quantity": 16
      },
      {
        "item": {
          "id": "blaze-grenade",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/blaze-grenade.webp",
          "name": "Blaze Grenade",
          "rarity": "Rare",
          "item_type": "Throwable",
          "description": "A grenade that detonates on impact, covering an area in fire that deals damage over time."
        },
        "quantity": 7
      },
      {
        "item": {
          "id": "ferro-i",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/ferro-i.webp",
          "name": "Ferro I",
          "rarity": "Common",
          "item_type": "Weapon",
          "description": "Heavy break-action rifle. Packs a punch, but must be reloaded between every shot."
        },
        "quantity": 5
      },
      {
        "item": {
          "id": "kettle-i",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/kettle-i.webp",
          "name": "Kettle I",
          "rarity": "Common",
          "item_type": "Weapon",
          "description": "Semi-automatic assault rifle. Quick and accurate, but has low bullet velocity and takes a long time reload."
        },
        "quantity": 6
      },
      {
        "item": {
          "id": "compensator-i",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/compensator-i.webp",
          "name": "Compensator I",
          "rarity": "Common",
          "item_type": "Modification",
          "description": "Slightly reduces per-shot dispersion."
        },
        "quantity": 6
      },
      {
        "item": {
          "id": "shotgun-choke-i",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/shotgun-choke-i.webp",
          "name": "Shotgun Choke I",
          "rarity": "Common",
          "item_type": "Modification",
          "description": "Slightly reduces base dispersion."
        },
        "quantity": 6
      },
      {
        "item": {
          "id": "ferro-iii",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/ferro-iii.webp",
          "name": "Ferro III",
          "rarity": "Common",
          "item_type": "Weapon",
          "description": "Heavy break-action rifle. Packs a punch, but must be reloaded between every shot."
        },
        "quantity": 9
      },
      {
        "item": {
          "id": "medium-ammo",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/medium-ammo.webp",
          "name": "Medium Ammo",
          "rarity": "Common",
          "item_type": "Ammunition",
          "description": "Medium bullets used mainly with medium-caliber weapons. Such as Rattler, Tempest, Arpeggio, Renegade and Torrente."
        },
        "quantity": 3
      },
      {
        "item": {
          "id": "muzzle-brake-i",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/muzzle-brake-i.webp",
          "name": "Muzzle Brake I",
          "rarity": "Common",
          "item_type": "Modification",
          "description": "Slightly reduces both vertical recoil & horizontal recoil."
        },
        "quantity": 6
      },
      {
        "item": {
          "id": "stitcher-ii",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/stitcher-ii.webp",
          "name": "Stitcher II",
          "rarity": "Common",
          "item_type": "Weapon",
          "description": "Full automatic SMG. Deals good damage, but has quite a low fire-rate and can be hard to control."
        },
        "quantity": 8
      },
      {
        "item": {
          "id": "hairpin-i",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/hairpin-i.webp",
          "name": "Hairpin I",
          "rarity": "Common",
          "item_type": "Weapon",
          "description": "Single-action pistol with a built-in silencer. Great for stealth, but tricky in combat."
        },
        "quantity": 2
      },
      {
        "item": {
          "id": "arpeggio-ii",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/arpeggio-ii.webp",
          "name": "Arpeggio II",
          "rarity": "Uncommon",
          "item_type": "Weapon",
          "description": "A 3-round burst assault rifle with decent damage output and accuracy."
        },
        "quantity": 14
      },
      {
        "item": {
          "id": "arpeggio-iii",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/arpeggio-ii.webp",
          "name": "Arpeggio III",
          "rarity": "Uncommon",
          "item_type": "Weapon",
          "description": "A 3-round burst assault rifle with decent damage output and accuracy."
        },
        "quantity": 10
      },
      {
        "item": {
          "id": "kettle-iii",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/kettle-iii.webp",
          "name": "Kettle III",
          "rarity": "Common",
          "item_type": "Weapon",
          "description": "Semi-automatic assault rifle. Quick and accurate, but has low bullet velocity and takes a long time reload."
        },
        "quantity": 10
      },
      {
        "item": {
          "id": "stitcher-iii",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/stitcher-iii.webp",
          "name": "Stitcher III",
          "rarity": "Common",
          "item_type": "Weapon",
          "description": "Full automatic SMG. Deals good damage, but has quite a low fire-rate and can be hard to control."
        },
        "quantity": 10
      }
    ]
  },
  {
    "id": "plastic-parts",
    "name": "Plastic Parts",
    "description": "Used to craft a wide range of items.",
    "category": "Materials",
    "subcategory": "Basic Material",
    "rarity": "Common",
    "value": 60,
    "weight": 0.1,
    "stackSize": 50,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/plastic-parts.webp",
    "lootArea": "Technological, Commercial, Residential",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": [
      {
        "item": {
          "id": "vertical-grip-i",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/vertical-grip-i.webp",
          "name": "Vertical Grip I",
          "rarity": "Common",
          "item_type": "Modification",
          "description": "Slightly reduces vertical recoil."
        },
        "quantity": 6
      },
      {
        "item": {
          "id": "electrical-components",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/electrical-components.webp",
          "name": "Electrical Components",
          "rarity": "Uncommon",
          "item_type": "Refined Material",
          "description": "Used to craft a wide range of items. Can be recycled into crafting materials."
        },
        "quantity": 8
      },
      {
        "item": {
          "id": "extended-shotgun-mag-i",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/extended-shotgun-mag-i.webp",
          "name": "Extended Shotgun Mag I",
          "rarity": "Common",
          "item_type": "Modification",
          "description": "Slightly extends the ammo capacity of compatible weapons that use shotgun ammo."
        },
        "quantity": 6
      },
      {
        "item": {
          "id": "defibrillator",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/defibrillator.webp",
          "name": "Defibrillator",
          "rarity": "Rare",
          "item_type": "Quick Use",
          "description": "An injection that quickly revives downed raiders and restores some health."
        },
        "quantity": 3
      },
      {
        "item": {
          "id": "kettle-ii",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/kettle-ii.webp",
          "name": "Kettle II",
          "rarity": "Common",
          "item_type": "Weapon",
          "description": "Semi-automatic assault rifle. Quick and accurate, but has low bullet velocity and takes a long time reload."
        },
        "quantity": 10
      },
      {
        "item": {
          "id": "light-shield",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/light-shield.webp",
          "name": "Light Shield",
          "rarity": "Uncommon",
          "item_type": "Shield",
          "description": "A lightweight shield that offers limited protection without severely impacting mobility."
        },
        "quantity": 4
      },
      {
        "item": {
          "id": "binoculars",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/binoculars.webp",
          "name": "Binoculars",
          "rarity": "Common",
          "item_type": "Gadget",
          "description": "A basic pair of binoculars with two levels of magnification."
        },
        "quantity": 8
      },
      {
        "item": {
          "id": "adrenaline-shot",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/adrenaline-shot.webp",
          "name": "Adrenaline Shot",
          "rarity": "Common",
          "item_type": "Quick Use",
          "description": "A serum that fully restores stamina and temporarily increases stamina regeneration"
        },
        "quantity": 3
      },
      {
        "item": {
          "id": "lure-grenade",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/lure-grenade.webp",
          "name": "Lure Grenade",
          "rarity": "Uncommon",
          "item_type": "Quick Use",
          "description": "A noisy device that sticks to surfaces, distracting nearby ARC machines and drawing their fire."
        },
        "quantity": 2
      },
      {
        "item": {
          "id": "extended-light-mag-i",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/extended-light-mag-i.webp",
          "name": "Extended Light Mag I",
          "rarity": "Common",
          "item_type": "Modification",
          "description": "Slightly extends the ammo capacity of the compatible weapons that use light ammo."
        },
        "quantity": 6
      },
      {
        "item": {
          "id": "extended-medium-mag-i",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/extended-medium-mag-i.webp",
          "name": "Extended Medium Mag I",
          "rarity": "Common",
          "item_type": "Modification",
          "description": "Slightly extends the ammo capacity of compatible weapons that use medium ammo."
        },
        "quantity": 6
      },
      {
        "item": {
          "id": "extended-medium-mag-ii",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/extended-medium-mag-ii.webp",
          "name": "Extended Medium Mag II",
          "rarity": "Uncommon",
          "item_type": "Modification",
          "description": "Moderately extends the ammo capacity of compatible weapons that use medium ammo"
        },
        "quantity": 6
      },
      {
        "item": {
          "id": "light-impact-grenade",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/light-impact-grenade.webp",
          "name": "Light Impact Grenade",
          "rarity": "Common",
          "item_type": "Quick Use",
          "description": "A grenade that detonates on impact, dealing explosive damage in a small radius."
        },
        "quantity": 2
      },
      {
        "item": {
          "id": "looting-mk-1",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/looting-mk-1.webp",
          "name": "Looting Mk. 1",
          "rarity": "Uncommon",
          "item_type": "Augment",
          "description": "Basic looting augment. More backpack slots and weight capacity, but low defensive and tactical capability."
        },
        "quantity": 6
      },
      {
        "item": {
          "id": "combat-mk-1",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/combat-mk-1.webp",
          "name": "Combat Mk. 1",
          "rarity": "Uncommon",
          "item_type": "Augment",
          "description": "Basic combat augment. Supports stronger shields, but with limited backpack capacity and Quick Use slots."
        },
        "quantity": 6
      },
      {
        "item": {
          "id": "tactical-mk-1",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/tactical-mk-1.webp",
          "name": "Tactical Mk. 1",
          "rarity": "Uncommon",
          "item_type": "Augment",
          "description": "Basic tactical augment. More Quick Use slots for more tactical choice, but limited survivability and slightly lower looting potential."
        },
        "quantity": 6
      },
      {
        "item": {
          "id": "angled-grip-i",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/angled-grip-i.webp",
          "name": "Angled Grip I",
          "rarity": "Common",
          "item_type": "Modification",
          "description": "Slightly reduces horizontal recoil."
        },
        "quantity": 6
      },
      {
        "item": {
          "id": "hairpin-i",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/hairpin-i.webp",
          "name": "Hairpin I",
          "rarity": "Common",
          "item_type": "Weapon",
          "description": "Single-action pistol with a built-in silencer. Great for stealth, but tricky in combat."
        },
        "quantity": 5
      },
      {
        "item": {
          "id": "lil-smoke-grenade",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/lil-smoke-grenade.webp",
          "name": "Li'l Smoke Grenade",
          "rarity": "Common",
          "item_type": "Quick Use",
          "description": "A grenade that pops a thick but small smoke cloud on impact, blocking visibility from ARC and other Raiders."
        },
        "quantity": 1
      }
    ]
  },
  {
    "id": "prickly-pear",
    "name": "Prickly Pear",
    "description": "Can be consumed for a small amount of stamina.",
    "category": "Materials",
    "subcategory": "Nature",
    "rarity": "Common",
    "value": 640,
    "weight": 0.2,
    "stackSize": 10,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/prickly-pear.webp",
    "lootArea": "Nature",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 3,
        "component": {
          "id": "assorted-seeds",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/assorted-seeds.webp",
          "name": "Assorted Seeds",
          "rarity": "Common",
          "item_type": "Nature",
          "description": "A handful of seeds. Celeste might be looking for these."
        }
      }
    ],
    "droppedBy": [],
    "components": [],
    "usedIn": [
      {
        "item": {
          "id": "fruit-mix",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/fruit-mix.webp",
          "name": "Fruit Mix",
          "rarity": "Common",
          "item_type": "Medical",
          "description": "A food item that moderately increases both health and stamina."
        },
        "quantity": 1
      }
    ]
  },
  {
    "id": "refinement-1",
    "name": "Refinement 1",
    "description": "A refined material used in crafting.",
    "category": "Materials",
    "subcategory": "Refinement",
    "rarity": "Common",
    "value": 0,
    "weight": 0,
    "stackSize": 1,
    "icon": null,
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "resin",
    "name": "Resin",
    "description": "Can be used to gradually restore a small amount of health over time.",
    "category": "Materials",
    "subcategory": "Nature",
    "rarity": "Common",
    "value": 1000,
    "weight": 0.4,
    "stackSize": 10,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/resin.webp",
    "lootArea": "Nature",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "rubber-parts-recipe",
    "name": "Rubber Parts",
    "description": "Used to craft a wide range of items.",
    "category": "Materials",
    "subcategory": "Basic Material",
    "rarity": "Common",
    "value": 50,
    "weight": 0.1,
    "stackSize": 50,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/rubber-parts-recipe.webp",
    "lootArea": "Medical, Industrial, Technological",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": [
      {
        "item": {
          "id": "electrical-components",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/electrical-components.webp",
          "name": "Electrical Components",
          "rarity": "Uncommon",
          "item_type": "Refined Material",
          "description": "Used to craft a wide range of items. Can be recycled into crafting materials."
        },
        "quantity": 4
      },
      {
        "item": {
          "id": "gas-grenade",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/gas-grenade.webp",
          "name": "Gas Grenade",
          "rarity": "Common",
          "item_type": "Quick Use",
          "description": "A grenade that emites lingering toxic cloud on impact, draining the stamina of any Raiders within its area of effect."
        },
        "quantity": 2
      },
      {
        "item": {
          "id": "stitcher-i",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/stitcher-ii.webp",
          "name": "Stitcher I",
          "rarity": "Common",
          "item_type": "Weapon",
          "description": "Full automatic SMG. Deals good damage, but has quite a low fire-rate and can be hard to control."
        },
        "quantity": 4
      },
      {
        "item": {
          "id": "shield-recharger",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/shield-recharger.webp",
          "name": "Shield Recharger",
          "rarity": "Uncommon",
          "item_type": "Quick Use",
          "description": "A handheld repair kit that recharges a shield on use."
        },
        "quantity": 5
      },
      {
        "item": {
          "id": "mechanical-components",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/mechanical-components.webp",
          "name": "Mechanical Components",
          "rarity": "Uncommon",
          "item_type": "Refined Material",
          "description": "Used to craft a wide range of items. Can be recycled into crafting materials."
        },
        "quantity": 3
      },
      {
        "item": {
          "id": "binoculars",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/binoculars.webp",
          "name": "Binoculars",
          "rarity": "Common",
          "item_type": "Gadget",
          "description": "A basic pair of binoculars with two levels of magnification."
        },
        "quantity": 4
      },
      {
        "item": {
          "id": "door-blocker",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/door-blocker.webp",
          "name": "Door Blocker",
          "rarity": "Common",
          "item_type": "Quick Use",
          "description": "A locking mechanism that can be placed on large metal doors to limit access."
        },
        "quantity": 3
      },
      {
        "item": {
          "id": "kettle-i",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/kettle-i.webp",
          "name": "Kettle I",
          "rarity": "Common",
          "item_type": "Weapon",
          "description": "Semi-automatic assault rifle. Quick and accurate, but has low bullet velocity and takes a long time reload."
        },
        "quantity": 8
      },
      {
        "item": {
          "id": "rattler-ii",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/rattler-ii.webp",
          "name": "Rattler II",
          "rarity": "Common",
          "item_type": "Weapon",
          "description": "Fully automatic assault rifle. A cheap offensive option, but has to be reloaded 2 bullets at a time."
        },
        "quantity": 10
      },
      {
        "item": {
          "id": "heavy-gun-parts",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/heavy-gun-parts.webp",
          "name": "Heavy Gun Parts",
          "rarity": "Rare",
          "item_type": "Topside Material",
          "description": "Used directly in crafting items of all tiers."
        },
        "quantity": 8
      },
      {
        "item": {
          "id": "rattler-i",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/rattler-i.webp",
          "name": "Rattler I",
          "rarity": "Common",
          "item_type": "Weapon",
          "description": "Fully automatic assault rifle. A cheap offensive option, but has to be reloaded 2 bullets at a time."
        },
        "quantity": 12
      },
      {
        "item": {
          "id": "ferro-i",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/ferro-i.webp",
          "name": "Ferro I",
          "rarity": "Common",
          "item_type": "Weapon",
          "description": "Heavy break-action rifle. Packs a punch, but must be reloaded between every shot."
        },
        "quantity": 2
      },
      {
        "item": {
          "id": "stable-stock-i",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/stable-stock-i.webp",
          "name": "Stable Stock I",
          "rarity": "Common",
          "item_type": "Modification",
          "description": "Slightly improves dispersion & recoil recovery time. Compatible with: Rattler, Ferro, Arpeggio, Bettina, Kettle."
        },
        "quantity": 7
      },
      {
        "item": {
          "id": "looting-mk-1",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/looting-mk-1.webp",
          "name": "Looting Mk. 1",
          "rarity": "Uncommon",
          "item_type": "Augment",
          "description": "Basic looting augment. More backpack slots and weight capacity, but low defensive and tactical capability."
        },
        "quantity": 6
      },
      {
        "item": {
          "id": "combat-mk-1",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/combat-mk-1.webp",
          "name": "Combat Mk. 1",
          "rarity": "Uncommon",
          "item_type": "Augment",
          "description": "Basic combat augment. Supports stronger shields, but with limited backpack capacity and Quick Use slots."
        },
        "quantity": 6
      },
      {
        "item": {
          "id": "tactical-mk-1",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/tactical-mk-1.webp",
          "name": "Tactical Mk. 1",
          "rarity": "Uncommon",
          "item_type": "Augment",
          "description": "Basic tactical augment. More Quick Use slots for more tactical choice, but limited survivability and slightly lower looting potential."
        },
        "quantity": 6
      },
      {
        "item": {
          "id": "stitcher-ii",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/stitcher-ii.webp",
          "name": "Stitcher II",
          "rarity": "Common",
          "item_type": "Weapon",
          "description": "Full automatic SMG. Deals good damage, but has quite a low fire-rate and can be hard to control."
        },
        "quantity": 12
      },
      {
        "item": {
          "id": "light-gun-parts",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/light-gun-parts.webp",
          "name": "Light Gun Parts",
          "rarity": "Rare",
          "item_type": "Topside Material",
          "description": "Assorted spare parts used for pistols and SMGs."
        },
        "quantity": 8
      }
    ]
  },
  {
    "id": "snap-hook",
    "name": "Snap Hook",
    "description": "A gadget that allows the user to scale structures and cover large distances.",
    "category": "Medical",
    "subcategory": "Quick Use",
    "rarity": "Legendary",
    "value": 14000,
    "weight": 5,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/snap-hook.webp",
    "lootArea": "Unknown",
    "workbench": "Utility Bench 3",
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 1,
        "component": {
          "id": "power-rod",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/power-rod.webp",
          "name": "Power Rod",
          "rarity": "Epic",
          "item_type": "Advanced Material",
          "description": "Used to open the Locked room near the Loading Bay. Also Used to craft shields. Can be recycled into crafting materials."
        }
      },
      {
        "quantity": 3,
        "component": {
          "id": "rope",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/rope.webp",
          "name": "Rope",
          "rarity": "Rare",
          "item_type": "Topside Material",
          "description": "Used in crafting."
        }
      }
    ],
    "droppedBy": [],
    "components": [
      {
        "quantity": 3,
        "component": {
          "id": "rope",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/rope.webp",
          "name": "Rope",
          "rarity": "Rare",
          "item_type": "Topside Material"
        }
      },
      {
        "quantity": 2,
        "component": {
          "id": "power-rod",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/power-rod.webp",
          "name": "Power Rod",
          "rarity": "Epic",
          "item_type": "Advanced Material"
        }
      },
      {
        "quantity": 1,
        "component": {
          "id": "exodus-modules",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/exodus-modules.webp",
          "name": "Exodus Modules",
          "rarity": "Epic",
          "item_type": "Topside Material"
        }
      }
    ],
    "usedIn": []
  },
  {
    "id": "deadline",
    "name": "Deadline",
    "description": "A mine that deals damage to anything within its radius once the timer runs out",
    "category": "Medical",
    "subcategory": "Quick Use",
    "rarity": "Epic",
    "value": 5000,
    "weight": 1,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/deadline.webp",
    "lootArea": "Unknown",
    "workbench": "Explosives Bench III",
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 1,
        "component": {
          "id": "explosive-compound",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/explosive-compound.webp",
          "name": "Explosive Compound",
          "rarity": "Rare",
          "item_type": "Refined Material",
          "description": "Used to craft explosives."
        }
      }
    ],
    "droppedBy": [],
    "components": [
      {
        "quantity": 3,
        "component": {
          "id": "explosive-compound",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/explosive-compound.webp",
          "name": "Explosive Compound",
          "rarity": "Rare",
          "item_type": "Refined Material"
        }
      },
      {
        "quantity": 2,
        "component": {
          "id": "arc-circuitry",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/arc-circuitry.webp",
          "name": "ARC Circuitry",
          "rarity": "Rare",
          "item_type": "Topside Material"
        }
      }
    ],
    "usedIn": []
  },
  {
    "id": "photoelectric-cloak",
    "name": "Photoelectric Cloak",
    "description": "A gadget that allows the user to conceal themselves from ARC.",
    "category": "Medical",
    "subcategory": "Quick Use",
    "rarity": "Epic",
    "value": 5000,
    "weight": 1,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/photoelectric-cloak.webp",
    "lootArea": "Unknown",
    "workbench": "Utility Bench",
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 1,
        "component": {
          "id": "advanced-electrical-components",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/advanced-electrical-components.webp",
          "name": "Advanced Electrical Components",
          "rarity": "Rare",
          "item_type": "Refined Material",
          "description": "Used to craft a wide range of items. Can be recycled into crafting materials."
        }
      },
      {
        "quantity": 1,
        "component": {
          "id": "speaker-component",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/speaker-component.webp",
          "name": "Speaker Component",
          "rarity": "Rare",
          "item_type": "Topside Material",
          "description": "Used in crafting."
        }
      }
    ],
    "droppedBy": [],
    "components": [
      {
        "quantity": 2,
        "component": {
          "id": "advanced-electrical-components",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/advanced-electrical-components.webp",
          "name": "Advanced Electrical Components",
          "rarity": "Rare",
          "item_type": "Refined Material"
        }
      },
      {
        "quantity": 4,
        "component": {
          "id": "speaker-component",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/speaker-component.webp",
          "name": "Speaker Component",
          "rarity": "Rare",
          "item_type": "Topside Material"
        }
      }
    ],
    "usedIn": []
  },
  {
    "id": "vita-spray",
    "name": "Vita Spray",
    "description": "A medical item that continuously restores health during use. Can be used on yourself or your allies.",
    "category": "Medical",
    "subcategory": "Quick Use",
    "rarity": "Epic",
    "value": 2880,
    "weight": 1,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/vita-spray.webp",
    "lootArea": "Unknown",
    "workbench": "Med Station",
    "uses": "Health Per Second: 10/s",
    "recycleComponents": [],
    "droppedBy": [],
    "components": [
      {
        "quantity": 2,
        "component": {
          "id": "antiseptic",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/antiseptic.webp",
          "name": "Antiseptic",
          "rarity": "Rare",
          "item_type": "Refined Material"
        }
      },
      {
        "quantity": 4,
        "component": {
          "id": "canister",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/canister.webp",
          "name": "Canister",
          "rarity": "Uncommon",
          "item_type": "Topside Material"
        }
      }
    ],
    "usedIn": []
  },
  {
    "id": "wolfpack",
    "name": "WolfPack",
    "description": "A grenade that scatters into multiple homing missiles, each one targeting ARC and dealing explosive damage on impact.",
    "category": "Medical",
    "subcategory": "Quick Use",
    "rarity": "Epic",
    "value": 5000,
    "weight": 1,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/wolfpack.webp",
    "lootArea": "Unknown",
    "workbench": "Explosives Bench III",
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 1,
        "component": {
          "id": "arc-motion-core",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/arc-motion-core.webp",
          "name": "ARC Motion Core",
          "rarity": "Rare",
          "item_type": "Topside Material",
          "description": "Obtained from ARC enemies or activities. Used to craft components. Can be recycled into ARC Alloy."
        }
      },
      {
        "quantity": 1,
        "component": {
          "id": "explosive-compound",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/explosive-compound.webp",
          "name": "Explosive Compound",
          "rarity": "Rare",
          "item_type": "Refined Material",
          "description": "Used to craft explosives."
        }
      }
    ],
    "droppedBy": [],
    "components": [
      {
        "quantity": 3,
        "component": {
          "id": "explosive-compound",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/explosive-compound.webp",
          "name": "Explosive Compound",
          "rarity": "Rare",
          "item_type": "Refined Material"
        }
      },
      {
        "quantity": 2,
        "component": {
          "id": "arc-motion-core",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/arc-motion-core.webp",
          "name": "ARC Motion Core",
          "rarity": "Rare",
          "item_type": "Topside Material"
        }
      }
    ],
    "usedIn": []
  },
  {
    "id": "blaze-grenade-trap",
    "name": "Blaze Grenade Trap",
    "description": "A laser trip wire that detonates a Blaze Grenade",
    "category": "Medical",
    "subcategory": "Quick Use",
    "rarity": "Rare",
    "value": 1000,
    "weight": 0.3,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/blaze-grenade-trap.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "defibrillator",
    "name": "Defibrillator",
    "description": "An injection that quickly revives downed raiders and restores some health.",
    "category": "Medical",
    "subcategory": "Quick Use",
    "rarity": "Rare",
    "value": 1000,
    "weight": 0.75,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/defibrillator.webp",
    "lootArea": "Unknown",
    "workbench": "Med Station 3",
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 1,
        "component": {
          "id": "moss",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/moss.webp",
          "name": "Moss",
          "rarity": "Rare",
          "item_type": "Topside Material",
          "description": "Can be used to regain a small amount of health."
        }
      },
      {
        "quantity": 1,
        "component": {
          "id": "plastic-parts",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/plastic-parts.webp",
          "name": "Plastic Parts",
          "rarity": "Common",
          "item_type": "Basic Material",
          "description": "Used to craft a wide range of items."
        }
      }
    ],
    "droppedBy": [],
    "components": [
      {
        "quantity": 3,
        "component": {
          "id": "plastic-parts",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/plastic-parts.webp",
          "name": "Plastic Parts",
          "rarity": "Common",
          "item_type": "Basic Material"
        }
      },
      {
        "quantity": 1,
        "component": {
          "id": "moss",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/moss.webp",
          "name": "Moss",
          "rarity": "Rare",
          "item_type": "Topside Material"
        }
      }
    ],
    "usedIn": []
  },
  {
    "id": "explosive-mine",
    "name": "Explosive Mine",
    "description": "A proximity triggered mine that pops up and explodes, dealing damage to anything within its radius.",
    "category": "Medical",
    "subcategory": "Quick Use",
    "rarity": "Rare",
    "value": 1500,
    "weight": 0.4,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/jump-mine.webp",
    "lootArea": "Unknown",
    "workbench": "Explosives Bench 3",
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [
      {
        "quantity": 1,
        "component": {
          "id": "sensors-recipe",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/sensors-recipe.webp",
          "name": "Sensors",
          "rarity": "Rare",
          "item_type": "Topside Material"
        }
      },
      {
        "quantity": 1,
        "component": {
          "id": "explosive-compound",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/explosive-compound.webp",
          "name": "Explosive Compound",
          "rarity": "Rare",
          "item_type": "Refined Material"
        }
      }
    ],
    "usedIn": []
  },
  {
    "id": "heavy-fuze-grenade",
    "name": "Heavy Fuze Grenade",
    "description": "A grenade that detonates after a delay, dealing explosive damage in its radius.",
    "category": "Medical",
    "subcategory": "Quick Use",
    "rarity": "Rare",
    "value": 1600,
    "weight": 0.2,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/heavy-fuze-grenade.webp",
    "lootArea": "Unknown",
    "workbench": "Explosives Bench",
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 1,
        "component": {
          "id": "oil",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/oil.webp",
          "name": "Oil",
          "rarity": "Uncommon",
          "item_type": "Topside Material",
          "description": "Used to craft weapons and explosives. Can be recycled into chemicals."
        }
      },
      {
        "quantity": 2,
        "component": {
          "id": "rubber-parts-recipe",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/rubber-parts-recipe.webp",
          "name": "Rubber Parts",
          "rarity": "Common",
          "item_type": "Basic Material",
          "description": "Used to craft a wide range of items."
        }
      }
    ],
    "droppedBy": [],
    "components": [
      {
        "quantity": 1,
        "component": {
          "id": "explosive-compound",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/explosive-compound.webp",
          "name": "Explosive Compound",
          "rarity": "Rare",
          "item_type": "Refined Material"
        }
      },
      {
        "quantity": 2,
        "component": {
          "id": "canister",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/canister.webp",
          "name": "Canister",
          "rarity": "Uncommon",
          "item_type": "Topside Material"
        }
      }
    ],
    "usedIn": []
  },
  {
    "id": "jolt-mine",
    "name": "Jolt Mine",
    "description": "A proximity triggered mine that pops up and stuns anything within its radius.",
    "category": "Medical",
    "subcategory": "Quick Use",
    "rarity": "Rare",
    "value": 850,
    "weight": 0.2,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/jolt-mine.webp",
    "lootArea": "Unknown",
    "workbench": "Explosives Bench II",
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [
      {
        "quantity": 1,
        "component": {
          "id": "electrical-components",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/electrical-components.webp",
          "name": "Electrical Components",
          "rarity": "Uncommon",
          "item_type": "Refined Material"
        }
      },
      {
        "quantity": 1,
        "component": {
          "id": "battery",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/battery.webp",
          "name": "Battery",
          "rarity": "Uncommon",
          "item_type": "Topside Material"
        }
      }
    ],
    "usedIn": []
  },
  {
    "id": "smoke-grenade",
    "name": "Smoke Grenade",
    "description": "A grenade that creates a lingering smoke cloud on impact, blocking visibility from other Raiders.",
    "category": "Medical",
    "subcategory": "Quick Use",
    "rarity": "Rare",
    "value": 1000,
    "weight": 0.2,
    "stackSize": 5,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/smoke-grenade.webp",
    "lootArea": "Unknown",
    "workbench": "Utility Bench 1 or Basic Bench",
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 1,
        "component": {
          "id": "canister",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/canister.webp",
          "name": "Canister",
          "rarity": "Uncommon",
          "item_type": "Topside Material",
          "description": "Used to craft a wide range of items. Can be recycled into plastic."
        }
      },
      {
        "quantity": 2,
        "component": {
          "id": "chemicals",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/chemicals.webp",
          "name": "Chemicals",
          "rarity": "Common",
          "item_type": "Basic Material",
          "description": "Used to craft medical supplies, explosives, and utility items."
        }
      }
    ],
    "droppedBy": [],
    "components": [
      {
        "quantity": 7,
        "component": {
          "id": "chemicals",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/chemicals.webp",
          "name": "Chemicals",
          "rarity": "Common",
          "item_type": "Basic Material"
        }
      },
      {
        "quantity": 1,
        "component": {
          "id": "canister",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/canister.webp",
          "name": "Canister",
          "rarity": "Uncommon",
          "item_type": "Topside Material"
        }
      }
    ],
    "usedIn": []
  },
  {
    "id": "sterilized-bandage",
    "name": "Sterilized Bandage",
    "description": "A medical item that gradually restores a large amount health over time.",
    "category": "Medical",
    "subcategory": "Quick Use",
    "rarity": "Rare",
    "value": 2000,
    "weight": 0.2,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/sterilized-bandage.webp",
    "lootArea": "Unknown",
    "workbench": "Med Station 2",
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 1,
        "component": {
          "id": "antiseptic",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/antiseptic.webp",
          "name": "Antiseptic",
          "rarity": "Rare",
          "item_type": "Refined Material",
          "description": "Used to craft medical supplies. Can be recycled into chemicals."
        }
      },
      {
        "quantity": 1,
        "component": {
          "id": "fabric",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/fabric.webp",
          "name": "Fabric",
          "rarity": "Common",
          "item_type": "Basic Material",
          "description": "Used to craft medical supplies and shields."
        }
      }
    ],
    "droppedBy": [],
    "components": [
      {
        "quantity": 1,
        "component": {
          "id": "antiseptic",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/antiseptic.webp",
          "name": "Antiseptic",
          "rarity": "Rare",
          "item_type": "Refined Material"
        }
      },
      {
        "quantity": 2,
        "component": {
          "id": "durable-cloth",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/durable-cloth.webp",
          "name": "Durable Cloth",
          "rarity": "Uncommon",
          "item_type": "Refined Material"
        }
      }
    ],
    "usedIn": []
  },
  {
    "id": "surge-shield-recharger",
    "name": "Surge Shield Recharger",
    "description": "A handkeld kit that recharges a shield",
    "category": "Medical",
    "subcategory": "Quick Use",
    "rarity": "Rare",
    "value": 1200,
    "weight": 0.2,
    "stackSize": 5,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/surge-shield-recharger.webp",
    "lootArea": "Unknown",
    "workbench": "Medical Lab II",
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 1,
        "component": {
          "id": "electrical-components",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/electrical-components.webp",
          "name": "Electrical Components",
          "rarity": "Uncommon",
          "item_type": "Refined Material",
          "description": "Used to craft a wide range of items. Can be recycled into crafting materials."
        }
      }
    ],
    "droppedBy": [],
    "components": [
      {
        "quantity": 1,
        "component": {
          "id": "electrical-components",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/electrical-components.webp",
          "name": "Electrical Components",
          "rarity": "Uncommon",
          "item_type": "Refined Material"
        }
      },
      {
        "quantity": 1,
        "component": {
          "id": "advanced-arc-powercell",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/advanced-arc-powercell.webp",
          "name": "Advanced ARC Powercell",
          "rarity": "Rare",
          "item_type": "Topside Material"
        }
      }
    ],
    "usedIn": []
  },
  {
    "id": "tagging-grenade",
    "name": "Tagging Grenade",
    "description": "A grenade that detonates after a delay, tagging Raiders and ARC enemies in an area, allowing you to briefly track their location.",
    "category": "Medical",
    "subcategory": "Quick Use",
    "rarity": "Rare",
    "value": 1000,
    "weight": 0.4,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/tagging-grenade.webp",
    "lootArea": "Unknown",
    "workbench": "Utility Bench 3",
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 1,
        "component": {
          "id": "plastic-parts",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/plastic-parts.webp",
          "name": "Plastic Parts",
          "rarity": "Common",
          "item_type": "Basic Material",
          "description": "Used to craft a wide range of items."
        }
      },
      {
        "quantity": 1,
        "component": {
          "id": "sensors-recipe",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/sensors-recipe.webp",
          "name": "Sensors",
          "rarity": "Rare",
          "item_type": "Topside Material",
          "description": "Used to craft utility items and explosives. Can be recycled into scrap metal."
        }
      }
    ],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "trailblazer-grenade",
    "name": "Trailblazer Grenade",
    "description": "A grenade that emits a trail of flammable gas along its path, causing an explosive chain reaction when it ignites.",
    "category": "Medical",
    "subcategory": "Quick Use",
    "rarity": "Rare",
    "value": 1600,
    "weight": 1,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/trailblazer-grenade.webp",
    "lootArea": "Unknown",
    "workbench": "Explosives Bench II",
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 2,
        "component": {
          "id": "crude-explosives",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/crude-explosives.webp",
          "name": "Crude Explosives",
          "rarity": "Uncommon",
          "item_type": "Refined Material",
          "description": "Used to craft explosives. Can be recycled into crafting materials."
        }
      }
    ],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "trigger-nade",
    "name": "Trigger Nade",
    "description": "A remote-detonated grenade that can stick to surfaces and ARC, dealing explosive damage when triggered.",
    "category": "Medical",
    "subcategory": "Quick Use",
    "rarity": "Rare",
    "value": 1000,
    "weight": 0.4,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/trigger-nade.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [
      {
        "quantity": 2,
        "component": {
          "id": "crude-explosives",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/crude-explosives.webp",
          "name": "Crude Explosives",
          "rarity": "Uncommon",
          "item_type": "Refined Material"
        }
      },
      {
        "quantity": 1,
        "component": {
          "id": "processor",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/processor.webp",
          "name": "Processor",
          "rarity": "Rare",
          "item_type": "Topside Material"
        }
      }
    ],
    "usedIn": []
  },
  {
    "id": "vita-shot",
    "name": "Vita Shot",
    "description": "A medical item that restores a large amount of health.",
    "category": "Medical",
    "subcategory": "Quick Use",
    "rarity": "Rare",
    "value": 2000,
    "weight": 0.4,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/vita-shot.webp",
    "lootArea": "Unknown",
    "workbench": "Med Station 3",
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 4,
        "component": {
          "id": "chemicals",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/chemicals.webp",
          "name": "Chemicals",
          "rarity": "Common",
          "item_type": "Basic Material",
          "description": "Used to craft medical supplies, explosives, and utility items."
        }
      },
      {
        "quantity": 1,
        "component": {
          "id": "syringe",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/syringe.webp",
          "name": "Syringe",
          "rarity": "Rare",
          "item_type": "Topside Material",
          "description": "A sterile syringe for medical use. Used to craft medical supplies. Can be recycled into plastic."
        }
      }
    ],
    "droppedBy": [],
    "components": [
      {
        "quantity": 1,
        "component": {
          "id": "antiseptic",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/antiseptic.webp",
          "name": "Antiseptic",
          "rarity": "Rare",
          "item_type": "Refined Material"
        }
      },
      {
        "quantity": 1,
        "component": {
          "id": "syringe",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/syringe.webp",
          "name": "Syringe",
          "rarity": "Rare",
          "item_type": "Topside Material"
        }
      }
    ],
    "usedIn": []
  },
  {
    "id": "zipline",
    "name": "Zipline",
    "description": "A deployable zipline that allows you to quickly move between two locations.",
    "category": "Medical",
    "subcategory": "Quick Use",
    "rarity": "Rare",
    "value": 1000,
    "weight": 0.4,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/zipline.webp",
    "lootArea": "Unknown",
    "workbench": "Utility Station II",
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 1,
        "component": {
          "id": "metal-parts",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/metal-parts.webp",
          "name": "Metal Parts",
          "rarity": "Common",
          "item_type": "Basic Material",
          "description": "Used to craft a wide range of items."
        }
      },
      {
        "quantity": 1,
        "component": {
          "id": "rope",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/rope.webp",
          "name": "Rope",
          "rarity": "Rare",
          "item_type": "Topside Material",
          "description": "Used in crafting."
        }
      }
    ],
    "droppedBy": [],
    "components": [
      {
        "quantity": 1,
        "component": {
          "id": "rope",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/rope.webp",
          "name": "Rope",
          "rarity": "Rare",
          "item_type": "Topside Material"
        }
      },
      {
        "quantity": 1,
        "component": {
          "id": "mechanical-components",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/mechanical-components.webp",
          "name": "Mechanical Components",
          "rarity": "Uncommon",
          "item_type": "Refined Material"
        }
      }
    ],
    "usedIn": []
  },
  {
    "id": "barricade-kit",
    "name": "Barricade Kit",
    "description": "A deployable cover that can block incoming damage until it breaks.",
    "category": "Medical",
    "subcategory": "Quick Use",
    "rarity": "Uncommon",
    "value": 640,
    "weight": 0.4,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/barricade-kit.webp",
    "lootArea": "Unknown",
    "workbench": "Utility Bench 1",
    "uses": "Health: 500",
    "recycleComponents": [
      {
        "quantity": 4,
        "component": {
          "id": "metal-parts",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/metal-parts.webp",
          "name": "Metal Parts",
          "rarity": "Common",
          "item_type": "Basic Material",
          "description": "Used to craft a wide range of items."
        }
      }
    ],
    "droppedBy": [],
    "components": [
      {
        "quantity": 5,
        "component": {
          "id": "metal-parts",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/metal-parts.webp",
          "name": "Metal Parts",
          "rarity": "Common",
          "item_type": "Basic Material"
        }
      },
      {
        "quantity": 1,
        "component": {
          "id": "spring",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/spring.webp",
          "name": "Steel Spring",
          "rarity": "Uncommon",
          "item_type": "Topside Material"
        }
      }
    ],
    "usedIn": []
  },
  {
    "id": "herbal-bandage",
    "name": "Herbal Bandage",
    "description": "An improvised medical item that gradually restores health over time.",
    "category": "Medical",
    "subcategory": "Quick Use",
    "rarity": "Uncommon",
    "value": 640,
    "weight": 0.15,
    "stackSize": 5,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/herbal-bandage.webp",
    "lootArea": "Unknown",
    "workbench": "Med Station",
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 2,
        "component": {
          "id": "assorted-seeds",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/assorted-seeds.webp",
          "name": "Assorted Seeds",
          "rarity": "Common",
          "item_type": "Nature",
          "description": "A handful of seeds. Celeste might be looking for these."
        }
      },
      {
        "quantity": 5,
        "component": {
          "id": "fabric",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/fabric.webp",
          "name": "Fabric",
          "rarity": "Common",
          "item_type": "Basic Material",
          "description": "Used to craft medical supplies and shields."
        }
      }
    ],
    "droppedBy": [],
    "components": [
      {
        "quantity": 1,
        "component": {
          "id": "durable-cloth",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/durable-cloth.webp",
          "name": "Durable Cloth",
          "rarity": "Uncommon",
          "item_type": "Refined Material"
        }
      },
      {
        "quantity": 1,
        "component": {
          "id": "great-muullein",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/great-muullein.webp",
          "name": "Great Mullein",
          "rarity": "Uncommon",
          "item_type": "Nature"
        }
      }
    ],
    "usedIn": []
  },
  {
    "id": "laser-trap-smoke-recipe",
    "name": "Laser Trap: Smoke",
    "description": "Lets you craft Laser Trap: Smoke",
    "category": "Medical",
    "subcategory": "Quick Use",
    "rarity": "Uncommon",
    "value": 0,
    "weight": 0.5,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/laser-trap-smoke-recipe.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "lure-grenade",
    "name": "Lure Grenade",
    "description": "A noisy device that sticks to surfaces, distracting nearby ARC machines and drawing their fire.",
    "category": "Medical",
    "subcategory": "Quick Use",
    "rarity": "Uncommon",
    "value": 1000,
    "weight": 0.4,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/lure-grenade.webp",
    "lootArea": "Unknown",
    "workbench": "Utility Bench 2",
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 1,
        "component": {
          "id": "speaker-component",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/speaker-component.webp",
          "name": "Speaker Component",
          "rarity": "Rare",
          "item_type": "Topside Material",
          "description": "Used in crafting."
        }
      }
    ],
    "droppedBy": [],
    "components": [
      {
        "quantity": 2,
        "component": {
          "id": "speaker-component",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/speaker-component.webp",
          "name": "Speaker Component",
          "rarity": "Rare",
          "item_type": "Topside Material"
        }
      },
      {
        "quantity": 2,
        "component": {
          "id": "plastic-parts",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/plastic-parts.webp",
          "name": "Plastic Parts",
          "rarity": "Common",
          "item_type": "Basic Material"
        }
      }
    ],
    "usedIn": []
  },
  {
    "id": "pulse-mine",
    "name": "Pulse Mine",
    "description": "A proximity-triggered mine that pops up and knocks back anything within its radius",
    "category": "Medical",
    "subcategory": "Quick Use",
    "rarity": "Uncommon",
    "value": 470,
    "weight": 0.25,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/pulse-mine.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 6,
        "component": {
          "id": "chemicals",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/chemicals.webp",
          "name": "Chemicals",
          "rarity": "Common",
          "item_type": "Basic Material",
          "description": "Used to craft medical supplies, explosives, and utility items."
        }
      }
    ],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "seeker-grenade",
    "name": "Seeker Grenade",
    "description": "A homing grenade that targets a single nearby ARC dealing explosive damage on impact",
    "category": "Medical",
    "subcategory": "Quick Use",
    "rarity": "Uncommon",
    "value": 640,
    "weight": 0.2,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/seeker-grenade.webp",
    "lootArea": "Unknown",
    "workbench": "Explosives Bench I",
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 1,
        "component": {
          "id": "crude-explosives",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/crude-explosives.webp",
          "name": "Crude Explosives",
          "rarity": "Uncommon",
          "item_type": "Refined Material",
          "description": "Used to craft explosives. Can be recycled into crafting materials."
        }
      }
    ],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "shield-recharger",
    "name": "Shield Recharger",
    "description": "A handheld repair kit that recharges a shield on use.",
    "category": "Medical",
    "subcategory": "Quick Use",
    "rarity": "Uncommon",
    "value": 520,
    "weight": 0.15,
    "stackSize": 5,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/shield-recharger.webp",
    "lootArea": "Unknown",
    "workbench": "Equipment Bench",
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 4,
        "component": {
          "id": "rubber-parts-recipe",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/rubber-parts-recipe.webp",
          "name": "Rubber Parts",
          "rarity": "Common",
          "item_type": "Basic Material",
          "description": "Used to craft a wide range of items."
        }
      }
    ],
    "droppedBy": [],
    "components": [
      {
        "quantity": 5,
        "component": {
          "id": "rubber-parts-recipe",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/rubber-parts-recipe.webp",
          "name": "Rubber Parts",
          "rarity": "Common",
          "item_type": "Basic Material"
        }
      },
      {
        "quantity": 1,
        "component": {
          "id": "arc-powercell",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/arc-powercell.webp",
          "name": "ARC Powercell",
          "rarity": "Common",
          "item_type": "Topside Material"
        }
      }
    ],
    "usedIn": []
  },
  {
    "id": "snap-blast-grenade",
    "name": "Snap Blast Grenade",
    "description": "A grenade that sticks to surfaces, dealing explosive damage after a short delay.",
    "category": "Medical",
    "subcategory": "Quick Use",
    "rarity": "Uncommon",
    "value": 800,
    "weight": 0.2,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/snap-blast-grenade.webp",
    "lootArea": "Unknown",
    "workbench": "Explosives Bench",
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 1,
        "component": {
          "id": "chemicals",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/chemicals.webp",
          "name": "Chemicals",
          "rarity": "Common",
          "item_type": "Basic Material",
          "description": "Used to craft medical supplies, explosives, and utility items."
        }
      },
      {
        "quantity": 1,
        "component": {
          "id": "magnet",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/magnet.webp",
          "name": "Magnet",
          "rarity": "Uncommon",
          "item_type": "Topside Material",
          "description": "Fun thing to put on a fridgerator."
        }
      }
    ],
    "droppedBy": [],
    "components": [
      {
        "quantity": 2,
        "component": {
          "id": "crude-explosives",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/crude-explosives.webp",
          "name": "Crude Explosives",
          "rarity": "Uncommon",
          "item_type": "Refined Material"
        }
      },
      {
        "quantity": 1,
        "component": {
          "id": "magnet",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/magnet.webp",
          "name": "Magnet",
          "rarity": "Uncommon",
          "item_type": "Topside Material"
        }
      }
    ],
    "usedIn": []
  },
  {
    "id": "adrenaline-shot",
    "name": "Adrenaline Shot",
    "description": "A serum that fully restores stamina and temporarily increases stamina regeneration",
    "category": "Medical",
    "subcategory": "Quick Use",
    "rarity": "Common",
    "value": 300,
    "weight": 0.2,
    "stackSize": 5,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/adrenaline-shot.webp",
    "lootArea": "Unknown",
    "workbench": "Med Stations 1",
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 1,
        "component": {
          "id": "chemicals",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/chemicals.webp",
          "name": "Chemicals",
          "rarity": "Common",
          "item_type": "Basic Material",
          "description": "Used to craft medical supplies, explosives, and utility items."
        }
      },
      {
        "quantity": 1,
        "component": {
          "id": "plastic-parts",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/plastic-parts.webp",
          "name": "Plastic Parts",
          "rarity": "Common",
          "item_type": "Basic Material",
          "description": "Used to craft a wide range of items."
        }
      }
    ],
    "droppedBy": [],
    "components": [
      {
        "quantity": 3,
        "component": {
          "id": "plastic-parts",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/plastic-parts.webp",
          "name": "Plastic Parts",
          "rarity": "Common",
          "item_type": "Basic Material"
        }
      },
      {
        "quantity": 3,
        "component": {
          "id": "chemicals",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/chemicals.webp",
          "name": "Chemicals",
          "rarity": "Common",
          "item_type": "Basic Material"
        }
      }
    ],
    "usedIn": []
  },
  {
    "id": "agave-juice",
    "name": "Agave Juice",
    "description": "A concoction that temporarily increases stamina regeneration, at a small initial cost to health.",
    "category": "Medical",
    "subcategory": "Consumable",
    "rarity": "Common",
    "value": 123,
    "weight": 0,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/agave-juice.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [
      {
        "quantity": 1,
        "component": {
          "id": "agave",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/agave.webp",
          "name": "Agave",
          "rarity": "Common",
          "item_type": "Nature"
        }
      },
      {
        "quantity": 1,
        "component": {
          "id": "empty-wine-bottle",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/empty-wine-bottle.webp",
          "name": "Empty Wine Bottle",
          "rarity": "Common",
          "item_type": "Trinket"
        }
      }
    ],
    "usedIn": []
  },
  {
    "id": "bandage",
    "name": "Bandage",
    "description": "A medical item that gradually restores health over time.",
    "category": "Medical",
    "subcategory": "Quick Use",
    "rarity": "Common",
    "value": 250,
    "weight": 0.1,
    "stackSize": 5,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/bandage.webp",
    "lootArea": "Unknown",
    "workbench": "Basic Bench or Med Station 1",
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 2,
        "component": {
          "id": "fabric",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/fabric.webp",
          "name": "Fabric",
          "rarity": "Common",
          "item_type": "Basic Material",
          "description": "Used to craft medical supplies and shields."
        }
      }
    ],
    "droppedBy": [],
    "components": [
      {
        "quantity": 5,
        "component": {
          "id": "fabric",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/fabric.webp",
          "name": "Fabric",
          "rarity": "Common",
          "item_type": "Basic Material"
        }
      }
    ],
    "usedIn": []
  },
  {
    "id": "blue-light-stick",
    "name": "Blue Light Stick",
    "description": "A throwable chemical light that illuminates the area around it.",
    "category": "Medical",
    "subcategory": "Quick Use",
    "rarity": "Common",
    "value": 150,
    "weight": 0.15,
    "stackSize": 5,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/blue-light-stick.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": "Illumination Radius 7m",
    "recycleComponents": [
      {
        "quantity": 1,
        "component": {
          "id": "chemicals",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/chemicals.webp",
          "name": "Chemicals",
          "rarity": "Common",
          "item_type": "Basic Material",
          "description": "Used to craft medical supplies, explosives, and utility items."
        }
      }
    ],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "door-blocker",
    "name": "Door Blocker",
    "description": "A locking mechanism that can be placed on large metal doors to limit access.",
    "category": "Medical",
    "subcategory": "Quick Use",
    "rarity": "Common",
    "value": 270,
    "weight": 0.2,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/door-blocker.webp",
    "lootArea": "Unknown",
    "workbench": "Utility Bench I ",
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [
      {
        "quantity": 3,
        "component": {
          "id": "metal-parts",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/metal-parts.webp",
          "name": "Metal Parts",
          "rarity": "Common",
          "item_type": "Basic Material"
        }
      },
      {
        "quantity": 3,
        "component": {
          "id": "rubber-parts-recipe",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/rubber-parts-recipe.webp",
          "name": "Rubber Parts",
          "rarity": "Common",
          "item_type": "Basic Material"
        }
      }
    ],
    "usedIn": []
  },
  {
    "id": "fruit-mix",
    "name": "Fruit Mix",
    "description": "A food item that moderately increases both health and stamina.",
    "category": "Medical",
    "subcategory": "Medical",
    "rarity": "Common",
    "value": 0,
    "weight": 0,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/fruit-mix.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [
      {
        "quantity": 1,
        "component": {
          "id": "lemon",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/lemon.webp",
          "name": "Lemon",
          "rarity": "Common",
          "item_type": "Nature"
        }
      },
      {
        "quantity": 1,
        "component": {
          "id": "apricot",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/apricot.webp",
          "name": "Apricot",
          "rarity": "Common",
          "item_type": "Nature"
        }
      },
      {
        "quantity": 1,
        "component": {
          "id": "prickly-pear",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/prickly-pear.webp",
          "name": "Prickly Pear",
          "rarity": "Common",
          "item_type": "Nature"
        }
      }
    ],
    "usedIn": []
  },
  {
    "id": "gas-grenade",
    "name": "Gas Grenade",
    "description": "A grenade that emites lingering toxic cloud on impact, draining the stamina of any Raiders within its area of effect.",
    "category": "Medical",
    "subcategory": "Quick Use",
    "rarity": "Common",
    "value": 270,
    "weight": 0.2,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/gas-grenade.webp",
    "lootArea": "Unknown",
    "workbench": "Explosive Bench 1",
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 1,
        "component": {
          "id": "chemicals",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/chemicals.webp",
          "name": "Chemicals",
          "rarity": "Common",
          "item_type": "Basic Material",
          "description": "Used to craft medical supplies, explosives, and utility items."
        }
      },
      {
        "quantity": 1,
        "component": {
          "id": "rubber-parts-recipe",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/rubber-parts-recipe.webp",
          "name": "Rubber Parts",
          "rarity": "Common",
          "item_type": "Basic Material",
          "description": "Used to craft a wide range of items."
        }
      }
    ],
    "droppedBy": [],
    "components": [
      {
        "quantity": 4,
        "component": {
          "id": "chemicals",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/chemicals.webp",
          "name": "Chemicals",
          "rarity": "Common",
          "item_type": "Basic Material"
        }
      },
      {
        "quantity": 2,
        "component": {
          "id": "rubber-parts-recipe",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/rubber-parts-recipe.webp",
          "name": "Rubber Parts",
          "rarity": "Common",
          "item_type": "Basic Material"
        }
      }
    ],
    "usedIn": []
  },
  {
    "id": "gas-grenade-trap",
    "name": "Gas Grenade Trap",
    "description": "A laser trip wire that detonates a Gas Grenade",
    "category": "Medical",
    "subcategory": "Quick Use",
    "rarity": "Common",
    "value": 300,
    "weight": 0.25,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/gas-grenade-trap.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "gas-mine",
    "name": "Gas Mine",
    "description": "A proximity-triggered mine that pops up and deploys a gas cloud that rapidly drains stamina",
    "category": "Medical",
    "subcategory": "Quick Use",
    "rarity": "Common",
    "value": 270,
    "weight": 0.25,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/gas-mine.webp",
    "lootArea": "Unknown",
    "workbench": "Explosives Bench I",
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 1,
        "component": {
          "id": "chemicals",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/chemicals.webp",
          "name": "Chemicals",
          "rarity": "Common",
          "item_type": "Basic Material",
          "description": "Used to craft medical supplies, explosives, and utility items."
        }
      },
      {
        "quantity": 1,
        "component": {
          "id": "rubber-parts-recipe",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/rubber-parts-recipe.webp",
          "name": "Rubber Parts",
          "rarity": "Common",
          "item_type": "Basic Material",
          "description": "Used to craft a wide range of items."
        }
      }
    ],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "green-light-stick",
    "name": "Green Light Stick",
    "description": "A throwable chemical light that illuminates the area around it.",
    "category": "Medical",
    "subcategory": "Quick Use",
    "rarity": "Common",
    "value": 150,
    "weight": 0.15,
    "stackSize": 5,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/green-light-stick.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": "Illumination Radius 7m",
    "recycleComponents": [
      {
        "quantity": 1,
        "component": {
          "id": "chemicals",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/chemicals.webp",
          "name": "Chemicals",
          "rarity": "Common",
          "item_type": "Basic Material",
          "description": "Used to craft medical supplies, explosives, and utility items."
        }
      }
    ],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "laser-trap-lure-recipe",
    "name": "Laser Trap: Lure",
    "description": "A deployable laser trip wire that detonates a Lure Grenade.",
    "category": "Medical",
    "subcategory": "Quick Use",
    "rarity": "Common",
    "value": 0,
    "weight": 0.5,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/laser-trap-lure.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "lil-smoke-grenade",
    "name": "Li'l Smoke Grenade",
    "description": "A grenade that pops a thick but small smoke cloud on impact, blocking visibility from ARC and other Raiders.",
    "category": "Medical",
    "subcategory": "Quick Use",
    "rarity": "Common",
    "value": 300,
    "weight": 0.15,
    "stackSize": 5,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/lil-smoke-grenade.webp",
    "lootArea": "Unknown",
    "workbench": "Utility Bench",
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 1,
        "component": {
          "id": "chemicals",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/chemicals.webp",
          "name": "Chemicals",
          "rarity": "Common",
          "item_type": "Basic Material",
          "description": "Used to craft medical supplies, explosives, and utility items."
        }
      },
      {
        "quantity": 1,
        "component": {
          "id": "plastic-parts",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/plastic-parts.webp",
          "name": "Plastic Parts",
          "rarity": "Common",
          "item_type": "Basic Material",
          "description": "Used to craft a wide range of items."
        }
      }
    ],
    "droppedBy": [],
    "components": [
      {
        "quantity": 5,
        "component": {
          "id": "chemicals",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/chemicals.webp",
          "name": "Chemicals",
          "rarity": "Common",
          "item_type": "Basic Material"
        }
      },
      {
        "quantity": 1,
        "component": {
          "id": "plastic-parts",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/plastic-parts.webp",
          "name": "Plastic Parts",
          "rarity": "Common",
          "item_type": "Basic Material"
        }
      }
    ],
    "usedIn": []
  },
  {
    "id": "light-impact-grenade",
    "name": "Light Impact Grenade",
    "description": "A grenade that detonates on impact, dealing explosive damage in a small radius.",
    "category": "Medical",
    "subcategory": "Quick Use",
    "rarity": "Common",
    "value": 270,
    "weight": 0.1,
    "stackSize": 5,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/light-impact-grenade.webp",
    "lootArea": "Unknown",
    "workbench": "Explosive Bench 1 or Basic Bench",
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 1,
        "component": {
          "id": "chemicals",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/chemicals.webp",
          "name": "Chemicals",
          "rarity": "Common",
          "item_type": "Basic Material",
          "description": "Used to craft medical supplies, explosives, and utility items."
        }
      },
      {
        "quantity": 1,
        "component": {
          "id": "plastic-parts",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/plastic-parts.webp",
          "name": "Plastic Parts",
          "rarity": "Common",
          "item_type": "Basic Material",
          "description": "Used to craft a wide range of items."
        }
      }
    ],
    "droppedBy": [],
    "components": [
      {
        "quantity": 2,
        "component": {
          "id": "plastic-parts",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/plastic-parts.webp",
          "name": "Plastic Parts",
          "rarity": "Common",
          "item_type": "Basic Material"
        }
      },
      {
        "quantity": 3,
        "component": {
          "id": "chemicals",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/chemicals.webp",
          "name": "Chemicals",
          "rarity": "Common",
          "item_type": "Basic Material"
        }
      }
    ],
    "usedIn": []
  },
  {
    "id": "noisemaker",
    "name": "Noisemaker",
    "description": "A deployable proximity sensor that sounds an alarm when enemy raiders are detected.",
    "category": "Medical",
    "subcategory": "Quick Use",
    "rarity": "Common",
    "value": 640,
    "weight": 0.3,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/noisemaker.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": "Trigger Radius 8m",
    "recycleComponents": [
      {
        "quantity": 1,
        "component": {
          "id": "speaker-component",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/speaker-component.webp",
          "name": "Speaker Component",
          "rarity": "Rare",
          "item_type": "Topside Material",
          "description": "Used in crafting."
        }
      }
    ],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "red-light-stick",
    "name": "Red Light Stick",
    "description": "A throwable chemical light that illuminates the area around it.",
    "category": "Medical",
    "subcategory": "Quick Use",
    "rarity": "Common",
    "value": 150,
    "weight": 0.15,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/red-light-stick.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 1,
        "component": {
          "id": "chemicals",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/chemicals.webp",
          "name": "Chemicals",
          "rarity": "Common",
          "item_type": "Basic Material",
          "description": "Used to craft medical supplies, explosives, and utility items."
        }
      }
    ],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "remote-raider-flare",
    "name": "Remote Raider Flare",
    "description": "A deployable device that, when manually triggered, launches a Raider Distress Flare.",
    "category": "Medical",
    "subcategory": "Quick Use",
    "rarity": "Common",
    "value": 270,
    "weight": 0.2,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/remote-raider-flare.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 1,
        "component": {
          "id": "chemicals",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/chemicals.webp",
          "name": "Chemicals",
          "rarity": "Common",
          "item_type": "Basic Material",
          "description": "Used to craft medical supplies, explosives, and utility items."
        }
      },
      {
        "quantity": 1,
        "component": {
          "id": "rubber-parts-recipe",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/rubber-parts-recipe.webp",
          "name": "Rubber Parts",
          "rarity": "Common",
          "item_type": "Basic Material",
          "description": "Used to craft a wide range of items."
        }
      }
    ],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "yellow-light-stick",
    "name": "Yellow Light Stick",
    "description": "A throwable chemical light that illuminates the area around it.",
    "category": "Medical",
    "subcategory": "Quick Use",
    "rarity": "Common",
    "value": 150,
    "weight": 0.15,
    "stackSize": 5,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/yellow-light-stick.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": "Illumination Radius 7m",
    "recycleComponents": [
      {
        "quantity": 1,
        "component": {
          "id": "chemicals",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/chemicals.webp",
          "name": "Chemicals",
          "rarity": "Common",
          "item_type": "Basic Material",
          "description": "Used to craft medical supplies, explosives, and utility items."
        }
      }
    ],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "anvil-splitter",
    "name": "Anvil Splitter",
    "description": "Compatible with: Anvil  - Tech mod for the Anvil that replaces its bullets with ones that split into 4 weaker projectiles.",
    "category": "Mods",
    "subcategory": "Modification",
    "rarity": "Legendary",
    "value": 7000,
    "weight": 0.5,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/anvil-splitter.webp",
    "lootArea": "Unknown",
    "workbench": "Gunsmith III",
    "uses": "70% Reduced Projectile Damage & +3 Projectiles Per Shot",
    "recycleComponents": [
      {
        "quantity": 1,
        "component": {
          "id": "mod-components",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/mod-components.webp",
          "name": "Mod Components",
          "rarity": "Rare",
          "item_type": "Refined Material",
          "description": "Used to craft weapon mods. Can be recycled into crafting materials."
        }
      },
      {
        "quantity": 1,
        "component": {
          "id": "processor",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/processor.webp",
          "name": "Processor",
          "rarity": "Rare",
          "item_type": "Topside Material",
          "description": "Used in crafting."
        }
      }
    ],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "kinetic-converter",
    "name": "Kinetic Converter",
    "description": "Moderately increases fire rate.",
    "category": "Mods",
    "subcategory": "Modification",
    "rarity": "Legendary",
    "value": 7000,
    "weight": 0.75,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/kinetic-converter.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "extended-barrel",
    "name": "Extended Barrel",
    "description": "Moderately increases bullet velocity.",
    "category": "Mods",
    "subcategory": "Modification",
    "rarity": "Epic",
    "value": 5000,
    "weight": 0.5,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/extended-barrel.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": "25% Increased Bullet Velocity",
    "recycleComponents": [
      {
        "quantity": 1,
        "component": {
          "id": "mod-components",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/mod-components.webp",
          "name": "Mod Components",
          "rarity": "Rare",
          "item_type": "Refined Material",
          "description": "Used to craft weapon mods. Can be recycled into crafting materials."
        }
      },
      {
        "quantity": 1,
        "component": {
          "id": "wires-recipe",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/wires-recipe.webp",
          "name": "Wires",
          "rarity": "Uncommon",
          "item_type": "Topside Material",
          "description": "A bundle of old wires. Used to craft a wide range of items. Can be recycled into scrap metal."
        }
      }
    ],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "horizontal-grip",
    "name": "Horizontal Grip",
    "description": "Moderately reduces both vertical and horizontal recoil.",
    "category": "Mods",
    "subcategory": "Modification",
    "rarity": "Epic",
    "value": 7000,
    "weight": 0.5,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/horizontal-grip.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": "Compatible with: Ferro, Kettle, Rattler, Stitcher, Arpeggio, Il Toro, Venator, Bobcat, Tempest, Vulcano",
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "lightweight-stock",
    "name": "Lightweight Stock",
    "description": "Moderately improves ADS & draw speed.",
    "category": "Mods",
    "subcategory": "Modification",
    "rarity": "Epic",
    "value": 5000,
    "weight": 0.25,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/lightweight-stock.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [
      {
        "quantity": 1,
        "component": {
          "id": "mod-components",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/mod-components.webp",
          "name": "Mod Components",
          "rarity": "Rare",
          "item_type": "Refined Material"
        }
      },
      {
        "quantity": 6,
        "component": {
          "id": "duct-tape-recipe",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/duct-tape-recipe.webp",
          "name": "Duct Tape",
          "rarity": "Uncommon",
          "item_type": "Topside Material"
        }
      }
    ],
    "usedIn": []
  },
  {
    "id": "padded-stock",
    "name": "Padded Stock",
    "description": "Significantly improves stability.",
    "category": "Mods",
    "subcategory": "Modification",
    "rarity": "Epic",
    "value": 0,
    "weight": 0.5,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/padded-stock.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [
      {
        "quantity": 2,
        "component": {
          "id": "mod-components",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/mod-components.webp",
          "name": "Mod Components",
          "rarity": "Rare",
          "item_type": "Refined Material"
        }
      },
      {
        "quantity": 5,
        "component": {
          "id": "duct-tape-recipe",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/duct-tape-recipe.webp",
          "name": "Duct Tape",
          "rarity": "Uncommon",
          "item_type": "Topside Material"
        }
      }
    ],
    "usedIn": []
  },
  {
    "id": "shotgun-silencer",
    "name": "Shotgun Silencer",
    "description": "Moderately reduces the amount of noise produced when firing.",
    "category": "Mods",
    "subcategory": "Mods",
    "rarity": "Epic",
    "value": 5000,
    "weight": 0.5,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/shotgun-silencer.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 1,
        "component": {
          "id": "mod-components",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/mod-components.webp",
          "name": "Mod Components",
          "rarity": "Rare",
          "item_type": "Refined Material",
          "description": "Used to craft weapon mods. Can be recycled into crafting materials."
        }
      },
      {
        "quantity": 1,
        "component": {
          "id": "wires-recipe",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/wires-recipe.webp",
          "name": "Wires",
          "rarity": "Uncommon",
          "item_type": "Topside Material",
          "description": "A bundle of old wires. Used to craft a wide range of items. Can be recycled into scrap metal."
        }
      }
    ],
    "droppedBy": [],
    "components": [
      {
        "quantity": 1,
        "component": {
          "id": "mod-components",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/mod-components.webp",
          "name": "Mod Components",
          "rarity": "Rare",
          "item_type": "Refined Material"
        }
      },
      {
        "quantity": 9,
        "component": {
          "id": "wires-recipe",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/wires-recipe.webp",
          "name": "Wires",
          "rarity": "Uncommon",
          "item_type": "Topside Material"
        }
      }
    ],
    "usedIn": []
  },
  {
    "id": "silencer-iii",
    "name": "Silencer III",
    "description": "Significantly reduces the amount of noise produced when firing.",
    "category": "Mods",
    "subcategory": "Modification",
    "rarity": "Epic",
    "value": 7000,
    "weight": 0,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/silencer-iii.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": "60% Reduced Noise. Plus it also has 20% Increased Durability Burn Rate",
    "recycleComponents": [
      {
        "quantity": 1,
        "component": {
          "id": "mod-components",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/mod-components.webp",
          "name": "Mod Components",
          "rarity": "Rare",
          "item_type": "Refined Material",
          "description": "Used to craft weapon mods. Can be recycled into crafting materials."
        }
      },
      {
        "quantity": 3,
        "component": {
          "id": "wires-recipe",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/wires-recipe.webp",
          "name": "Wires",
          "rarity": "Uncommon",
          "item_type": "Topside Material",
          "description": "A bundle of old wires. Used to craft a wide range of items. Can be recycled into scrap metal."
        }
      }
    ],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "angled-grip-iii",
    "name": "Angled Grip III",
    "description": "Significantly reduces horizontal recoil.",
    "category": "Mods",
    "subcategory": "Modification",
    "rarity": "Rare",
    "value": 5000,
    "weight": 0.5,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/angled-grip-iii.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": "Compatible with: Ferro, Kettle, Rattler, Stitcher, Arpeggio, Il Toro, Venator, Bobcat, Tempest, Vulcano",
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "compensator-iii",
    "name": "Compensator III",
    "description": "30% Reduced Max-Shot Dispersion",
    "category": "Mods",
    "subcategory": "Modification",
    "rarity": "Rare",
    "value": 5000,
    "weight": 0.75,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/compensator-iii.webp",
    "lootArea": "Unknown",
    "workbench": "Gunsmith III",
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "extended-light-mag-iii",
    "name": "Extended Light Mag III",
    "description": "Significantly extends the ammo capacity of the compatible weapons that use light ammo.",
    "category": "Mods",
    "subcategory": "Modification",
    "rarity": "Rare",
    "value": 0,
    "weight": 0,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/extended-light-mag-iii.webp",
    "lootArea": "Unknown",
    "workbench": "Weapon Bench III",
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [
      {
        "quantity": 1,
        "component": {
          "id": "mod-components",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/mod-components.webp",
          "name": "Mod Components",
          "rarity": "Rare",
          "item_type": "Refined Material"
        }
      },
      {
        "quantity": 6,
        "component": {
          "id": "spring",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/spring.webp",
          "name": "Steel Spring",
          "rarity": "Uncommon",
          "item_type": "Topside Material"
        }
      }
    ],
    "usedIn": []
  },
  {
    "id": "extended-medium-mag-iii",
    "name": "Extended Medium Mag III",
    "description": "Moderately extends the ammo capacity of compatible weapons that use medium ammo",
    "category": "Mods",
    "subcategory": "Modification",
    "rarity": "Rare",
    "value": 0,
    "weight": 0,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/extended-medium-mag-iii.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [
      {
        "quantity": 1,
        "component": {
          "id": "mod-components",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/mod-components.webp",
          "name": "Mod Components",
          "rarity": "Rare",
          "item_type": "Refined Material"
        }
      },
      {
        "quantity": 6,
        "component": {
          "id": "spring",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/spring.webp",
          "name": "Steel Spring",
          "rarity": "Uncommon",
          "item_type": "Topside Material"
        }
      }
    ],
    "usedIn": []
  },
  {
    "id": "extended-shotgun-mag-iii",
    "name": "Extended Shotgun Mag III",
    "description": "Significantly extends the ammo capacity of compatible weapons that use shotgun ammo.",
    "category": "Mods",
    "subcategory": "Modification",
    "rarity": "Rare",
    "value": 0,
    "weight": 0,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/extended-shotgun-mag-iii.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [
      {
        "quantity": 1,
        "component": {
          "id": "mod-components",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/mod-components.webp",
          "name": "Mod Components",
          "rarity": "Rare",
          "item_type": "Refined Material"
        }
      },
      {
        "quantity": 6,
        "component": {
          "id": "spring",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/spring.webp",
          "name": "Steel Spring",
          "rarity": "Uncommon",
          "item_type": "Topside Material"
        }
      }
    ],
    "usedIn": []
  },
  {
    "id": "muzzle-brake-iii",
    "name": "Muzzle Brake III",
    "description": "Significantly reduces both vertical recoil & horizontal recoil.",
    "category": "Mods",
    "subcategory": "Modification",
    "rarity": "Rare",
    "value": 0,
    "weight": 0.5,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/muzzle-brake-iii.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "shotgun-choke-iii",
    "name": "Shotgun Choke III",
    "description": "Significantly reduces base dispersion. Compatible with: II Toro, Vulcano",
    "category": "Mods",
    "subcategory": "Modification",
    "rarity": "Rare",
    "value": 5000,
    "weight": 0.75,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/shotgun-choke-iii.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": "30% Reduced Base Dispersion. - 20% Increased Durability Burn Rate.",
    "recycleComponents": [
      {
        "quantity": 1,
        "component": {
          "id": "mod-components",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/mod-components.webp",
          "name": "Mod Components",
          "rarity": "Rare",
          "item_type": "Refined Material",
          "description": "Used to craft weapon mods. Can be recycled into crafting materials."
        }
      },
      {
        "quantity": 2,
        "component": {
          "id": "wires-recipe",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/wires-recipe.webp",
          "name": "Wires",
          "rarity": "Uncommon",
          "item_type": "Topside Material",
          "description": "A bundle of old wires. Used to craft a wide range of items. Can be recycled into scrap metal."
        }
      }
    ],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "silencer-ii",
    "name": "Silencer II",
    "description": "Moderately reduces the amount of noise produced when firing.  Compatible with: Rattler,  Ferro, Tempest, Arpeggio, Bettina.",
    "category": "Mods",
    "subcategory": "Modification",
    "rarity": "Rare",
    "value": 5000,
    "weight": 0.5,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/silencer-ii.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": "40% Reduced Noise",
    "recycleComponents": [
      {
        "quantity": 1,
        "component": {
          "id": "mod-components",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/mod-components.webp",
          "name": "Mod Components",
          "rarity": "Rare",
          "item_type": "Refined Material",
          "description": "Used to craft weapon mods. Can be recycled into crafting materials."
        }
      },
      {
        "quantity": 2,
        "component": {
          "id": "wires-recipe",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/wires-recipe.webp",
          "name": "Wires",
          "rarity": "Uncommon",
          "item_type": "Topside Material",
          "description": "A bundle of old wires. Used to craft a wide range of items. Can be recycled into scrap metal."
        }
      }
    ],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "stable-stock-iii",
    "name": "Stable Stock III",
    "description": "Significantly improves dispersion & recoil recovery over time.",
    "category": "Mods",
    "subcategory": "Modification",
    "rarity": "Rare",
    "value": 5000,
    "weight": 0.75,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/stable-stock-iii.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 2,
        "component": {
          "id": "duct-tape-recipe",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/duct-tape-recipe.webp",
          "name": "Duct Tape",
          "rarity": "Uncommon",
          "item_type": "Topside Material",
          "description": "Used to craft a wide range of items. Can be recycled into crafting materials"
        }
      },
      {
        "quantity": 1,
        "component": {
          "id": "mod-components",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/mod-components.webp",
          "name": "Mod Components",
          "rarity": "Rare",
          "item_type": "Refined Material",
          "description": "Used to craft weapon mods. Can be recycled into crafting materials."
        }
      }
    ],
    "droppedBy": [],
    "components": [
      {
        "quantity": 1,
        "component": {
          "id": "mod-components",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/mod-components.webp",
          "name": "Mod Components",
          "rarity": "Rare",
          "item_type": "Refined Material"
        }
      },
      {
        "quantity": 6,
        "component": {
          "id": "duct-tape-recipe",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/duct-tape-recipe.webp",
          "name": "Duct Tape",
          "rarity": "Uncommon",
          "item_type": "Topside Material"
        }
      }
    ],
    "usedIn": []
  },
  {
    "id": "vertical-grip-iii",
    "name": "Vertical Grip III",
    "description": "Significantly reduces vertical recoil.",
    "category": "Mods",
    "subcategory": "Modification",
    "rarity": "Rare",
    "value": 0,
    "weight": 0,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/vertical-grip-iii.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [
      {
        "quantity": 2,
        "component": {
          "id": "mod-components",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/mod-components.webp",
          "name": "Mod Components",
          "rarity": "Rare",
          "item_type": "Refined Material"
        }
      },
      {
        "quantity": 5,
        "component": {
          "id": "duct-tape-recipe",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/duct-tape-recipe.webp",
          "name": "Duct Tape",
          "rarity": "Uncommon",
          "item_type": "Topside Material"
        }
      }
    ],
    "usedIn": []
  },
  {
    "id": "angled-grip-ii",
    "name": "Angled Grip II",
    "description": "Moderately reduces horizontal recoil.",
    "category": "Mods",
    "subcategory": "Modification",
    "rarity": "Uncommon",
    "value": 0,
    "weight": 0.5,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/angled-grip-ii.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": "Compatible with: Ferro, Kettle, Rattler, Stitcher, Arpeggio, Il Toro, Venator, Bobcat, Tempest, Vulcano",
    "recycleComponents": [],
    "droppedBy": [],
    "components": [
      {
        "quantity": 1,
        "component": {
          "id": "mechanical-components",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/mechanical-components.webp",
          "name": "Mechanical Components",
          "rarity": "Uncommon",
          "item_type": "Refined Material"
        }
      },
      {
        "quantity": 1,
        "component": {
          "id": "duct-tape-recipe",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/duct-tape-recipe.webp",
          "name": "Duct Tape",
          "rarity": "Uncommon",
          "item_type": "Topside Material"
        }
      }
    ],
    "usedIn": []
  },
  {
    "id": "compensator-ii",
    "name": "Compensator II",
    "description": "Moderately reduces per-shot dispersion.",
    "category": "Mods",
    "subcategory": "Modification",
    "rarity": "Uncommon",
    "value": 2000,
    "weight": 0.5,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/compensator-ii.webp",
    "lootArea": "Unknown",
    "workbench": "Gunsmith II",
    "uses": "40% Reduced Per-Shot Dispersion 20% Reduced Max Shot Dispersion",
    "recycleComponents": [],
    "droppedBy": [],
    "components": [
      {
        "quantity": 2,
        "component": {
          "id": "mechanical-components",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/mechanical-components.webp",
          "name": "Mechanical Components",
          "rarity": "Uncommon",
          "item_type": "Refined Material"
        }
      },
      {
        "quantity": 4,
        "component": {
          "id": "wires-recipe",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/wires-recipe.webp",
          "name": "Wires",
          "rarity": "Uncommon",
          "item_type": "Topside Material"
        }
      }
    ],
    "usedIn": []
  },
  {
    "id": "extended-light-mag-ii",
    "name": "Extended Light Mag II",
    "description": "Moderately extends the ammo capacity of the compatible weapons that use light ammo.",
    "category": "Mods",
    "subcategory": "Modification",
    "rarity": "Uncommon",
    "value": 2000,
    "weight": 0,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/extended-light-mag-ii.webp",
    "lootArea": "Unknown",
    "workbench": "Weapon Bench II",
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [
      {
        "quantity": 1,
        "component": {
          "id": "mechanical-components",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/mechanical-components.webp",
          "name": "Mechanical Components",
          "rarity": "Uncommon",
          "item_type": "Refined Material"
        }
      },
      {
        "quantity": 1,
        "component": {
          "id": "spring",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/spring.webp",
          "name": "Steel Spring",
          "rarity": "Uncommon",
          "item_type": "Topside Material"
        }
      }
    ],
    "usedIn": []
  },
  {
    "id": "extended-medium-mag-ii",
    "name": "Extended Medium Mag II",
    "description": "Moderately extends the ammo capacity of compatible weapons that use medium ammo",
    "category": "Mods",
    "subcategory": "Modification",
    "rarity": "Uncommon",
    "value": 2000,
    "weight": 0.5,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/extended-medium-mag-ii.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": "+8 Magazine Size",
    "recycleComponents": [],
    "droppedBy": [],
    "components": [
      {
        "quantity": 6,
        "component": {
          "id": "plastic-parts",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/plastic-parts.webp",
          "name": "Plastic Parts",
          "rarity": "Common",
          "item_type": "Basic Material"
        }
      },
      {
        "quantity": 1,
        "component": {
          "id": "spring",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/spring.webp",
          "name": "Steel Spring",
          "rarity": "Uncommon",
          "item_type": "Topside Material"
        }
      }
    ],
    "usedIn": []
  },
  {
    "id": "extended-shotgun-mag-ii",
    "name": "Extended Shotgun Mag II",
    "description": "Moderately extends the ammo capacity of compatible weapons that use shotgun ammo.",
    "category": "Mods",
    "subcategory": "Modification",
    "rarity": "Uncommon",
    "value": 2000,
    "weight": 0.5,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/extended-shotgun-mag-ii.webp",
    "lootArea": "Unknown",
    "workbench": "Gunsmith II",
    "uses": "+4 Magazine Size",
    "recycleComponents": [
      {
        "quantity": 1,
        "component": {
          "id": "mechanical-components",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/mechanical-components.webp",
          "name": "Mechanical Components",
          "rarity": "Uncommon",
          "item_type": "Refined Material",
          "description": "Used to craft a wide range of items. Can be recycled into crafting materials."
        }
      },
      {
        "quantity": 1,
        "component": {
          "id": "spring",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/spring.webp",
          "name": "Steel Spring",
          "rarity": "Uncommon",
          "item_type": "Topside Material",
          "description": "A tightly wound coil of metal. Used to craft a wide range of items. Can be recycled into scrap metal."
        }
      }
    ],
    "droppedBy": [],
    "components": [
      {
        "quantity": 2,
        "component": {
          "id": "mechanical-components",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/mechanical-components.webp",
          "name": "Mechanical Components",
          "rarity": "Uncommon",
          "item_type": "Refined Material"
        }
      },
      {
        "quantity": 3,
        "component": {
          "id": "spring",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/spring.webp",
          "name": "Steel Spring",
          "rarity": "Uncommon",
          "item_type": "Topside Material"
        }
      }
    ],
    "usedIn": []
  },
  {
    "id": "muzzle-brake-ii",
    "name": "Muzzle Brake II",
    "description": "Moderately reduces both vertical recoil & horizontal recoil.",
    "category": "Mods",
    "subcategory": "Modification",
    "rarity": "Uncommon",
    "value": 2000,
    "weight": 0.5,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/muzzle-brake-ii.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": "20% Reduced Horizontal Recoil & 20% Reduced Vertical Recoil",
    "recycleComponents": [
      {
        "quantity": 1,
        "component": {
          "id": "mechanical-components",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/mechanical-components.webp",
          "name": "Mechanical Components",
          "rarity": "Uncommon",
          "item_type": "Refined Material",
          "description": "Used to craft a wide range of items. Can be recycled into crafting materials."
        }
      },
      {
        "quantity": 1,
        "component": {
          "id": "wires-recipe",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/wires-recipe.webp",
          "name": "Wires",
          "rarity": "Uncommon",
          "item_type": "Topside Material",
          "description": "A bundle of old wires. Used to craft a wide range of items. Can be recycled into scrap metal."
        }
      }
    ],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "shotgun-choke-ii",
    "name": "Shotgun Choke II",
    "description": "Moderately reduces base dispersion.",
    "category": "Mods",
    "subcategory": "Modification",
    "rarity": "Uncommon",
    "value": 2000,
    "weight": 0.5,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/shotgun-choke-ii.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 1,
        "component": {
          "id": "mechanical-components",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/mechanical-components.webp",
          "name": "Mechanical Components",
          "rarity": "Uncommon",
          "item_type": "Refined Material",
          "description": "Used to craft a wide range of items. Can be recycled into crafting materials."
        }
      },
      {
        "quantity": 1,
        "component": {
          "id": "wires-recipe",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/wires-recipe.webp",
          "name": "Wires",
          "rarity": "Uncommon",
          "item_type": "Topside Material",
          "description": "A bundle of old wires. Used to craft a wide range of items. Can be recycled into scrap metal."
        }
      }
    ],
    "droppedBy": [],
    "components": [
      {
        "quantity": 1,
        "component": {
          "id": "mechanical-components",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/mechanical-components.webp",
          "name": "Mechanical Components",
          "rarity": "Uncommon",
          "item_type": "Refined Material"
        }
      },
      {
        "quantity": 1,
        "component": {
          "id": "wires-recipe",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/wires-recipe.webp",
          "name": "Wires",
          "rarity": "Uncommon",
          "item_type": "Topside Material"
        }
      }
    ],
    "usedIn": []
  },
  {
    "id": "silencer-i",
    "name": "Silencer I",
    "description": "Slightly reduces the amount of noise produced when firing.",
    "category": "Mods",
    "subcategory": "Modification",
    "rarity": "Uncommon",
    "value": 0,
    "weight": 0.25,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/silencer-i.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": "20% Reduced Noise",
    "recycleComponents": [],
    "droppedBy": [],
    "components": [
      {
        "quantity": 1,
        "component": {
          "id": "wires-recipe",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/wires-recipe.webp",
          "name": "Wires",
          "rarity": "Uncommon",
          "item_type": "Topside Material"
        }
      },
      {
        "quantity": 1,
        "component": {
          "id": "mechanical-components",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/mechanical-components.webp",
          "name": "Mechanical Components",
          "rarity": "Uncommon",
          "item_type": "Refined Material"
        }
      }
    ],
    "usedIn": []
  },
  {
    "id": "stable-stock-ii",
    "name": "Stable Stock II",
    "description": "Moderately improves dispersion & recoil recovery time.",
    "category": "Mods",
    "subcategory": "Modification",
    "rarity": "Uncommon",
    "value": 2000,
    "weight": 0.5,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/stable-stock-ii.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": "35% Reduced Recoil Recovery Time 35% Reduced Dispersion Recovery Time",
    "recycleComponents": [
      {
        "quantity": 1,
        "component": {
          "id": "duct-tape-recipe",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/duct-tape-recipe.webp",
          "name": "Duct Tape",
          "rarity": "Uncommon",
          "item_type": "Topside Material",
          "description": "Used to craft a wide range of items. Can be recycled into crafting materials"
        }
      },
      {
        "quantity": 1,
        "component": {
          "id": "mechanical-components",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/mechanical-components.webp",
          "name": "Mechanical Components",
          "rarity": "Uncommon",
          "item_type": "Refined Material",
          "description": "Used to craft a wide range of items. Can be recycled into crafting materials."
        }
      }
    ],
    "droppedBy": [],
    "components": [
      {
        "quantity": 1,
        "component": {
          "id": "mechanical-components",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/mechanical-components.webp",
          "name": "Mechanical Components",
          "rarity": "Uncommon",
          "item_type": "Refined Material"
        }
      },
      {
        "quantity": 1,
        "component": {
          "id": "duct-tape-recipe",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/duct-tape-recipe.webp",
          "name": "Duct Tape",
          "rarity": "Uncommon",
          "item_type": "Topside Material"
        }
      }
    ],
    "usedIn": []
  },
  {
    "id": "vertical-grip-ii",
    "name": "Vertical Grip II",
    "description": "Moderately reduces vertical recoil.",
    "category": "Mods",
    "subcategory": "Modification",
    "rarity": "Uncommon",
    "value": 2000,
    "weight": 0.5,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/vertical-grip-ii.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 1,
        "component": {
          "id": "duct-tape-recipe",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/duct-tape-recipe.webp",
          "name": "Duct Tape",
          "rarity": "Uncommon",
          "item_type": "Topside Material",
          "description": "Used to craft a wide range of items. Can be recycled into crafting materials"
        }
      },
      {
        "quantity": 1,
        "component": {
          "id": "mechanical-components",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/mechanical-components.webp",
          "name": "Mechanical Components",
          "rarity": "Uncommon",
          "item_type": "Refined Material",
          "description": "Used to craft a wide range of items. Can be recycled into crafting materials."
        }
      }
    ],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "angled-grip-i",
    "name": "Angled Grip I",
    "description": "Slightly reduces horizontal recoil.",
    "category": "Mods",
    "subcategory": "Modification",
    "rarity": "Common",
    "value": 640,
    "weight": 0.25,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/angled-grip-i.webp",
    "lootArea": "Unknown",
    "workbench": "Weapon Bench",
    "uses": "Compatible with Ferro, Kettle, Rattler, Stitcher, Arpeggio, Il Toro, Venator, Bobcat, Tempest, Vulcano",
    "recycleComponents": [],
    "droppedBy": [],
    "components": [
      {
        "quantity": 6,
        "component": {
          "id": "plastic-parts",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/plastic-parts.webp",
          "name": "Plastic Parts",
          "rarity": "Common",
          "item_type": "Basic Material"
        }
      },
      {
        "quantity": 1,
        "component": {
          "id": "duct-tape-recipe",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/duct-tape-recipe.webp",
          "name": "Duct Tape",
          "rarity": "Uncommon",
          "item_type": "Topside Material"
        }
      }
    ],
    "usedIn": []
  },
  {
    "id": "compensator-i",
    "name": "Compensator I",
    "description": "Slightly reduces per-shot dispersion.",
    "category": "Mods",
    "subcategory": "Modification",
    "rarity": "Common",
    "value": 640,
    "weight": 0.25,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/compensator-i.webp",
    "lootArea": "Unknown",
    "workbench": "Gunsmith",
    "uses": "20% Reduced Per-Shot Dispersion.   10% Reduced Max Shot Dispersion.",
    "recycleComponents": [
      {
        "quantity": 5,
        "component": {
          "id": "metal-parts",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/metal-parts.webp",
          "name": "Metal Parts",
          "rarity": "Common",
          "item_type": "Basic Material",
          "description": "Used to craft a wide range of items."
        }
      }
    ],
    "droppedBy": [],
    "components": [
      {
        "quantity": 6,
        "component": {
          "id": "metal-parts",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/metal-parts.webp",
          "name": "Metal Parts",
          "rarity": "Common",
          "item_type": "Basic Material"
        }
      },
      {
        "quantity": 1,
        "component": {
          "id": "wires-recipe",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/wires-recipe.webp",
          "name": "Wires",
          "rarity": "Uncommon",
          "item_type": "Topside Material"
        }
      }
    ],
    "usedIn": []
  },
  {
    "id": "extended-light-mag-i",
    "name": "Extended Light Mag I",
    "description": "Slightly extends the ammo capacity of the compatible weapons that use light ammo.",
    "category": "Mods",
    "subcategory": "Modification",
    "rarity": "Common",
    "value": 640,
    "weight": 0.25,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/extended-light-mag-i.webp",
    "lootArea": "Unknown",
    "workbench": "Gunsmith",
    "uses": "+5 Magazine Size",
    "recycleComponents": [
      {
        "quantity": 6,
        "component": {
          "id": "plastic-parts",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/plastic-parts.webp",
          "name": "Plastic Parts",
          "rarity": "Common",
          "item_type": "Basic Material",
          "description": "Used to craft a wide range of items."
        }
      }
    ],
    "droppedBy": [],
    "components": [
      {
        "quantity": 6,
        "component": {
          "id": "plastic-parts",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/plastic-parts.webp",
          "name": "Plastic Parts",
          "rarity": "Common",
          "item_type": "Basic Material"
        }
      },
      {
        "quantity": 1,
        "component": {
          "id": "spring",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/spring.webp",
          "name": "Steel Spring",
          "rarity": "Uncommon",
          "item_type": "Topside Material"
        }
      }
    ],
    "usedIn": []
  },
  {
    "id": "extended-medium-mag-i",
    "name": "Extended Medium Mag I",
    "description": "Slightly extends the ammo capacity of compatible weapons that use medium ammo.",
    "category": "Mods",
    "subcategory": "Modification",
    "rarity": "Common",
    "value": 640,
    "weight": 0.25,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/extended-medium-mag-i.webp",
    "lootArea": "Unknown",
    "workbench": "Weapon Bench I",
    "uses": "+4 Magazine Size",
    "recycleComponents": [
      {
        "quantity": 6,
        "component": {
          "id": "plastic-parts",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/plastic-parts.webp",
          "name": "Plastic Parts",
          "rarity": "Common",
          "item_type": "Basic Material",
          "description": "Used to craft a wide range of items."
        }
      }
    ],
    "droppedBy": [],
    "components": [
      {
        "quantity": 6,
        "component": {
          "id": "plastic-parts",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/plastic-parts.webp",
          "name": "Plastic Parts",
          "rarity": "Common",
          "item_type": "Basic Material"
        }
      },
      {
        "quantity": 1,
        "component": {
          "id": "spring",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/spring.webp",
          "name": "Steel Spring",
          "rarity": "Uncommon",
          "item_type": "Topside Material"
        }
      }
    ],
    "usedIn": []
  },
  {
    "id": "extended-shotgun-mag-i",
    "name": "Extended Shotgun Mag I",
    "description": "Slightly extends the ammo capacity of compatible weapons that use shotgun ammo.",
    "category": "Mods",
    "subcategory": "Modification",
    "rarity": "Common",
    "value": 640,
    "weight": 0.25,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/extended-shotgun-mag-i.webp",
    "lootArea": "Unknown",
    "workbench": "Gunsmith",
    "uses": "+2 Magazine Size",
    "recycleComponents": [
      {
        "quantity": 6,
        "component": {
          "id": "plastic-parts",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/plastic-parts.webp",
          "name": "Plastic Parts",
          "rarity": "Common",
          "item_type": "Basic Material",
          "description": "Used to craft a wide range of items."
        }
      }
    ],
    "droppedBy": [],
    "components": [
      {
        "quantity": 6,
        "component": {
          "id": "plastic-parts",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/plastic-parts.webp",
          "name": "Plastic Parts",
          "rarity": "Common",
          "item_type": "Basic Material"
        }
      },
      {
        "quantity": 1,
        "component": {
          "id": "spring",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/spring.webp",
          "name": "Steel Spring",
          "rarity": "Uncommon",
          "item_type": "Topside Material"
        }
      }
    ],
    "usedIn": []
  },
  {
    "id": "muzzle-brake-i",
    "name": "Muzzle Brake I",
    "description": "Slightly reduces both vertical recoil & horizontal recoil.",
    "category": "Mods",
    "subcategory": "Modification",
    "rarity": "Common",
    "value": 640,
    "weight": 0.25,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/muzzle-brake-i.webp",
    "lootArea": "Unknown",
    "workbench": "Weapon Bench",
    "uses": "15% Reduced Horizontal Recoil  & 15% Reduced Vertical Recoil",
    "recycleComponents": [
      {
        "quantity": 5,
        "component": {
          "id": "metal-parts",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/metal-parts.webp",
          "name": "Metal Parts",
          "rarity": "Common",
          "item_type": "Basic Material",
          "description": "Used to craft a wide range of items."
        }
      }
    ],
    "droppedBy": [],
    "components": [
      {
        "quantity": 6,
        "component": {
          "id": "metal-parts",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/metal-parts.webp",
          "name": "Metal Parts",
          "rarity": "Common",
          "item_type": "Basic Material"
        }
      },
      {
        "quantity": 1,
        "component": {
          "id": "wires-recipe",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/wires-recipe.webp",
          "name": "Wires",
          "rarity": "Uncommon",
          "item_type": "Topside Material"
        }
      }
    ],
    "usedIn": []
  },
  {
    "id": "shotgun-choke-i",
    "name": "Shotgun Choke I",
    "description": "Slightly reduces base dispersion.",
    "category": "Mods",
    "subcategory": "Modification",
    "rarity": "Common",
    "value": 640,
    "weight": 0.25,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/shotgun-choke-i.webp",
    "lootArea": "Unknown",
    "workbench": "Gunsmith 1",
    "uses": "10% Reduced Base Dispersion",
    "recycleComponents": [
      {
        "quantity": 5,
        "component": {
          "id": "metal-parts",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/metal-parts.webp",
          "name": "Metal Parts",
          "rarity": "Common",
          "item_type": "Basic Material",
          "description": "Used to craft a wide range of items."
        }
      }
    ],
    "droppedBy": [],
    "components": [
      {
        "quantity": 6,
        "component": {
          "id": "metal-parts",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/metal-parts.webp",
          "name": "Metal Parts",
          "rarity": "Common",
          "item_type": "Basic Material"
        }
      },
      {
        "quantity": 1,
        "component": {
          "id": "wires-recipe",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/wires-recipe.webp",
          "name": "Wires",
          "rarity": "Uncommon",
          "item_type": "Topside Material"
        }
      }
    ],
    "usedIn": []
  },
  {
    "id": "stable-stock-i",
    "name": "Stable Stock I",
    "description": "Slightly improves dispersion & recoil recovery time. Compatible with: Rattler, Ferro, Arpeggio, Bettina, Kettle.",
    "category": "Mods",
    "subcategory": "Modification",
    "rarity": "Common",
    "value": 640,
    "weight": 0.25,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/stable-stock-i.webp",
    "lootArea": "Unknown",
    "workbench": "Gunsmith",
    "uses": "20% Reduced Recoil Recovery Time. 20% Reduced Dispersion Recovery Time.",
    "recycleComponents": [
      {
        "quantity": 6,
        "component": {
          "id": "rubber-parts-recipe",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/rubber-parts-recipe.webp",
          "name": "Rubber Parts",
          "rarity": "Common",
          "item_type": "Basic Material",
          "description": "Used to craft a wide range of items."
        }
      }
    ],
    "droppedBy": [],
    "components": [
      {
        "quantity": 7,
        "component": {
          "id": "rubber-parts-recipe",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/rubber-parts-recipe.webp",
          "name": "Rubber Parts",
          "rarity": "Common",
          "item_type": "Basic Material"
        }
      },
      {
        "quantity": 1,
        "component": {
          "id": "duct-tape-recipe",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/duct-tape-recipe.webp",
          "name": "Duct Tape",
          "rarity": "Uncommon",
          "item_type": "Topside Material"
        }
      }
    ],
    "usedIn": []
  },
  {
    "id": "vertical-grip-i",
    "name": "Vertical Grip I",
    "description": "Slightly reduces vertical recoil.",
    "category": "Mods",
    "subcategory": "Modification",
    "rarity": "Common",
    "value": 640,
    "weight": 0.25,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/vertical-grip-i.webp",
    "lootArea": "Unknown",
    "workbench": "Gunsmith 1",
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 6,
        "component": {
          "id": "plastic-parts",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/plastic-parts.webp",
          "name": "Plastic Parts",
          "rarity": "Common",
          "item_type": "Basic Material",
          "description": "Used to craft a wide range of items."
        }
      }
    ],
    "droppedBy": [],
    "components": [
      {
        "quantity": 6,
        "component": {
          "id": "plastic-parts",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/plastic-parts.webp",
          "name": "Plastic Parts",
          "rarity": "Common",
          "item_type": "Basic Material"
        }
      },
      {
        "quantity": 1,
        "component": {
          "id": "duct-tape-recipe",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/duct-tape-recipe.webp",
          "name": "Duct Tape",
          "rarity": "Uncommon",
          "item_type": "Topside Material"
        }
      }
    ],
    "usedIn": []
  },
  {
    "id": "flame-spray",
    "name": "Flame Spray",
    "description": "A classic makeshift weapon, sure to leave scorch marks.",
    "category": "Other",
    "subcategory": "Quick use",
    "rarity": "Uncommon",
    "value": 640,
    "weight": 1,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/flame-spray.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [
      {
        "quantity": 1,
        "component": {
          "id": "air-freshener",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/air-freshener.webp",
          "name": "Air Freshener",
          "rarity": "Uncommon",
          "item_type": "Trinket"
        }
      },
      {
        "quantity": 1,
        "component": {
          "id": "fireball-burner",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/fireball-burner.webp",
          "name": "Fireball Burner",
          "rarity": "Uncommon",
          "item_type": "Recyclable"
        }
      }
    ],
    "usedIn": []
  },
  {
    "id": "matriarch-reactor",
    "name": "Matriarch Reactor",
    "description": "Can be recycled into crafting materials.",
    "category": "Recyclables",
    "subcategory": "Recyclable",
    "rarity": "Legendary",
    "value": 13000,
    "weight": 10,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/matriarch-reactor.webp",
    "lootArea": "ARC",
    "workbench": null,
    "uses": "Used to Craft: Aphelion",
    "recycleComponents": [
      {
        "quantity": 1,
        "component": {
          "id": "magnetic-accelerator",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/magnetic-accelerator.webp",
          "name": "Magnetic Accelerator",
          "rarity": "Epic",
          "item_type": "Refined Material",
          "description": "Used to craft advanced weapons."
        }
      },
      {
        "quantity": 1,
        "component": {
          "id": "power-rod",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/power-rod.webp",
          "name": "Power Rod",
          "rarity": "Epic",
          "item_type": "Advanced Material",
          "description": "Used to open the Locked room near the Loading Bay. Also Used to craft shields. Can be recycled into crafting materials."
        }
      }
    ],
    "droppedBy": [
      {
        "id": "c93e35ae-26d2-433b-a055-3b4a452a6b11",
        "arc": {
          "id": "matriarch",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/matriarch.webp",
          "name": "Matriarch",
          "description": "One of the latest Arcs to visit us Topside. This ARC shoots rockets, gas and a big shield which you need to be inside of to shoot it."
        },
        "arc_id": "matriarch",
        "created_at": "2025-11-16T17:24:37.10499+00:00"
      }
    ],
    "components": [],
    "usedIn": [
      {
        "item": {
          "id": "aphelion-rifle",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/aphelion-rifle.webp",
          "name": "Aphelion Rifle",
          "rarity": "Legendary",
          "item_type": "Weapon",
          "description": "Fires high velocity energy rounds."
        },
        "quantity": 1
      }
    ]
  },
  {
    "id": "queen-reactor",
    "name": "Queen Reactor",
    "description": "Can be recycled into crafting materials. Used to craft: Equalizer, Jupiter",
    "category": "Recyclables",
    "subcategory": "Recyclable",
    "rarity": "Legendary",
    "value": 13000,
    "weight": 10,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/queen-reactor.webp",
    "lootArea": "ARC",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 1,
        "component": {
          "id": "magnetic-accelerator",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/magnetic-accelerator.webp",
          "name": "Magnetic Accelerator",
          "rarity": "Epic",
          "item_type": "Refined Material",
          "description": "Used to craft advanced weapons."
        }
      },
      {
        "quantity": 1,
        "component": {
          "id": "power-rod",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/power-rod.webp",
          "name": "Power Rod",
          "rarity": "Epic",
          "item_type": "Advanced Material",
          "description": "Used to open the Locked room near the Loading Bay. Also Used to craft shields. Can be recycled into crafting materials."
        }
      }
    ],
    "droppedBy": [
      {
        "id": "661ae3c9-10b6-47fd-9d81-0c8946aa8e2e",
        "arc": {
          "id": "queen",
          "icon": "https://unhbvkszwhczbjxgetgk.supabase.co/storage/v1/object/public/images/arc-raiders/icons/queen.webp",
          "name": "Queen",
          "description": "This is the Goliath of the ARC forces, a colossal machine whose presence defines the battlefield. It is only deployed during the critical Harvester Event, acting as the immovable guardian of the Harvester unit. Its incredible durability and lethal arsenal make it the single greatest threat on the map; attempting to scratch its armor alone is a fool's errand—you'll need a full squad of Raiders working in concert just to stand a chance.\n\nIts attacks are devastating:\n\nMortar Barrage: The dome atop the unit launches three massive mortars that land in a cluster around a targeted Raider. Two seconds after impact, they detonate in a fiery, engulfing inferno.\n\nSustained Laser: It periodically sweeps its primary weapon, firing a continuous laser beam at any Raider it acquires in its line-of-sight.\n\nClose-Quarters Deterrents: Should Raiders try to get up close and personal, the Goliath switches modes, delivering either a disruptive EMP pulse to shut down technology or a crushing ground slam to obliterate anything nearby."
        },
        "arc_id": "queen",
        "created_at": "2025-11-04T16:33:19.486695+00:00"
      }
    ],
    "components": [],
    "usedIn": [
      {
        "item": {
          "id": "jupiter-i",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/jupiter-i.webp",
          "name": "Jupiter",
          "rarity": "Legendary",
          "item_type": "Weapon",
          "description": "A bolt-action sniper rifle with exceptional damage output and accuracy, but slow handling."
        },
        "quantity": 1
      },
      {
        "item": {
          "id": "equalizer-i",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/equalizer-i.webp",
          "name": "Equalizer",
          "rarity": "Legendary",
          "item_type": "Weapon",
          "description": "A high capacity experimental beam rifle."
        },
        "quantity": 1
      }
    ]
  },
  {
    "id": "bastion-part",
    "name": "Bastion Cell",
    "description": "A salvaged component from a Bastion unit. Can be recycled into crafting materials.",
    "category": "Recyclables",
    "subcategory": "Recyclable",
    "rarity": "Epic",
    "value": 5000,
    "weight": 0.25,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/bastion-part.webp",
    "lootArea": "ARC",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 2,
        "component": {
          "id": "advanced-mechanical-components",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/advanced-mechanical-components.webp",
          "name": "Advanced Mechanical Components",
          "rarity": "Rare",
          "item_type": "Advanced Material",
          "description": "Mostly used to craft advanced weapons. Can be recycled into crafting materials."
        }
      },
      {
        "quantity": 2,
        "component": {
          "id": "arc-alloy",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/arc-alloy.webp",
          "name": "ARC Alloy",
          "rarity": "Uncommon",
          "item_type": "Topside Material",
          "description": "Obtained from ARC enemies or activities, or by recycling certain ARC parts. Used to craft components."
        }
      }
    ],
    "droppedBy": [
      {
        "id": "d4aaa728-f53f-4108-b37b-e9db626ef700",
        "arc": {
          "id": "bastion",
          "icon": "https://unhbvkszwhczbjxgetgk.supabase.co/storage/v1/object/public/images/arc-raiders/icons/bastion.webp",
          "name": "Bastion",
          "description": "A massive, heavily armored ARC unit, built around a terrifying, fully automatic minigun. It rarely moves without air support overhead, which helps it pin down and suppress Raider movement. Listen for its loud, distinct screech—that's your warning before it unleashes a three-second hail of bullets toward the last known enemy position."
        },
        "arc_id": "bastion",
        "created_at": "2025-11-04T15:53:56.825634+00:00"
      }
    ],
    "components": [],
    "usedIn": []
  },
  {
    "id": "bombardier-cell",
    "name": "Bombardier Cell",
    "description": "Can be recycled into crafting materials",
    "category": "Recyclables",
    "subcategory": "Recyclable",
    "rarity": "Epic",
    "value": 5000,
    "weight": 1,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/bombardier-cell.webp",
    "lootArea": "ARC",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 2,
        "component": {
          "id": "advanced-mechanical-components",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/advanced-mechanical-components.webp",
          "name": "Advanced Mechanical Components",
          "rarity": "Rare",
          "item_type": "Advanced Material",
          "description": "Mostly used to craft advanced weapons. Can be recycled into crafting materials."
        }
      },
      {
        "quantity": 2,
        "component": {
          "id": "arc-alloy",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/arc-alloy.webp",
          "name": "ARC Alloy",
          "rarity": "Uncommon",
          "item_type": "Topside Material",
          "description": "Obtained from ARC enemies or activities, or by recycling certain ARC parts. Used to craft components."
        }
      }
    ],
    "droppedBy": [
      {
        "id": "9700cbd2-6f30-4ba8-8116-2380c38f5bf1",
        "arc": {
          "id": "bombardier",
          "icon": "https://unhbvkszwhczbjxgetgk.supabase.co/storage/v1/object/public/images/arc-raiders/icons/bombardier.webp",
          "name": "Bombardier",
          "description": "The Bombardier is an armored ARC that functions as heavy, mobile artillery. Its movement is slow and loud. Armed with a multi-rocket launcher, it unleashes devastating, long-range barrages that can obliterate your entire squad. Do not engage this unit. If you hear its grinding approach, silence your movement and escape the area immediately, as its attention is a death sentence."
        },
        "arc_id": "bombardier",
        "created_at": "2025-11-04T15:56:37.290049+00:00"
      }
    ],
    "components": [],
    "usedIn": []
  },
  {
    "id": "geiger-counter",
    "name": "Geiger Counter",
    "description": "Can be recycled into crafting materials.",
    "category": "Recyclables",
    "subcategory": "Recyclable",
    "rarity": "Epic",
    "value": 3500,
    "weight": 1.5,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/geiger-counter.webp",
    "lootArea": "Exodus",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 3,
        "component": {
          "id": "battery",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/battery.webp",
          "name": "Battery",
          "rarity": "Uncommon",
          "item_type": "Topside Material",
          "description": "Used to craft medical supplies. Can be recycled into scrap metal."
        }
      },
      {
        "quantity": 1,
        "component": {
          "id": "exodus-modules",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/exodus-modules.webp",
          "name": "Exodus Modules",
          "rarity": "Epic",
          "item_type": "Topside Material",
          "description": "Used to craft a wide range of items."
        }
      }
    ],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "ion-sputter",
    "name": "Ion Sputter",
    "description": "Can be recycled into Crafting Materials ",
    "category": "Recyclables",
    "subcategory": "Recyclable",
    "rarity": "Epic",
    "value": 6000,
    "weight": 1.5,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/ion-sputter.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 1,
        "component": {
          "id": "exodus-modules",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/exodus-modules.webp",
          "name": "Exodus Modules",
          "rarity": "Epic",
          "item_type": "Topside Material",
          "description": "Used to craft a wide range of items."
        }
      },
      {
        "quantity": 4,
        "component": {
          "id": "voltage-converter",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/voltage-converter.webp",
          "name": "Voltage Converter",
          "rarity": "Rare",
          "item_type": "Topside Material",
          "description": "A device that adjusts electrical voltage for various crafting purposes."
        }
      }
    ],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "magnetron",
    "name": "Magnetron",
    "description": "Can be recycled into crafting materials",
    "category": "Recyclables",
    "subcategory": "Recyclable",
    "rarity": "Epic",
    "value": 6000,
    "weight": 1.5,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/magnetron.webp",
    "lootArea": "Exodus",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 1,
        "component": {
          "id": "magnetic-accelerator",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/magnetic-accelerator.webp",
          "name": "Magnetic Accelerator",
          "rarity": "Epic",
          "item_type": "Refined Material",
          "description": "Used to craft advanced weapons."
        }
      },
      {
        "quantity": 1,
        "component": {
          "id": "spring",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/spring.webp",
          "name": "Steel Spring",
          "rarity": "Uncommon",
          "item_type": "Topside Material",
          "description": "A tightly wound coil of metal. Used to craft a wide range of items. Can be recycled into scrap metal."
        }
      }
    ],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "rocketeer-part",
    "name": "Rocketeer Driver",
    "description": "A salvaged component from a Rocketeer unit.",
    "category": "Recyclables",
    "subcategory": "Recyclable",
    "rarity": "Epic",
    "value": 5000,
    "weight": 1,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/rocketeer-part.webp",
    "lootArea": "ARC",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 2,
        "component": {
          "id": "advanced-electrical-components",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/advanced-electrical-components.webp",
          "name": "Advanced Electrical Components",
          "rarity": "Rare",
          "item_type": "Refined Material",
          "description": "Used to craft a wide range of items. Can be recycled into crafting materials."
        }
      },
      {
        "quantity": 3,
        "component": {
          "id": "arc-alloy",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/arc-alloy.webp",
          "name": "ARC Alloy",
          "rarity": "Uncommon",
          "item_type": "Topside Material",
          "description": "Obtained from ARC enemies or activities, or by recycling certain ARC parts. Used to craft components."
        }
      }
    ],
    "droppedBy": [
      {
        "id": "f56af820-2a4c-4782-ad0d-ce8ed61b1d50",
        "arc": {
          "id": "rocketeer",
          "icon": "https://unhbvkszwhczbjxgetgk.supabase.co/storage/v1/object/public/images/arc-raiders/icons/rocketeer.webp",
          "name": "Rocketeer",
          "description": "This is a formidable flying ARC, a pure engine of destruction that dominates the airspace. It poses a significant threat not just because it flies, but because of its powerful rocket attacks and devastating focus on area-of-effect (AoE) damage. This unit is designed to saturate an area, turning cover into a liability and forcing Raiders to constantly relocate or be wiped out by the sheer force of its explosions. Treat it like a mobile artillery piece—it hits hard and wide."
        },
        "arc_id": "rocketeer",
        "created_at": "2025-11-04T16:34:18.669309+00:00"
      }
    ],
    "components": [],
    "usedIn": []
  },
  {
    "id": "spectrum-analyzer",
    "name": "Spectrum Analyzer",
    "description": "Can be recycled into crafting materials",
    "category": "Recyclables",
    "subcategory": "Recyclable",
    "rarity": "Epic",
    "value": 3500,
    "weight": 1.5,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/spectrum-analyzer.webp",
    "lootArea": "Exodus",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 1,
        "component": {
          "id": "exodus-modules",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/exodus-modules.webp",
          "name": "Exodus Modules",
          "rarity": "Epic",
          "item_type": "Topside Material",
          "description": "Used to craft a wide range of items."
        }
      },
      {
        "quantity": 1,
        "component": {
          "id": "sensors-recipe",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/sensors-recipe.webp",
          "name": "Sensors",
          "rarity": "Rare",
          "item_type": "Topside Material",
          "description": "Used to craft utility items and explosives. Can be recycled into scrap metal."
        }
      }
    ],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "alarm-clock",
    "name": "Alarm Clock",
    "description": "Can be recycled into crafting materials.",
    "category": "Recyclables",
    "subcategory": "Recyclable",
    "rarity": "Rare",
    "value": 1000,
    "weight": 2,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/alarm-clock.webp",
    "lootArea": "Residential",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 6,
        "component": {
          "id": "plastic-parts",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/plastic-parts.webp",
          "name": "Plastic Parts",
          "rarity": "Common",
          "item_type": "Basic Material",
          "description": "Used to craft a wide range of items."
        }
      },
      {
        "quantity": 1,
        "component": {
          "id": "processor",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/processor.webp",
          "name": "Processor",
          "rarity": "Rare",
          "item_type": "Topside Material",
          "description": "Used in crafting."
        }
      }
    ],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "arc-coolant",
    "name": "ARC Coolant",
    "description": "Obtained from ARC enemies or activities. Can be recycled into chemicals",
    "category": "Recyclables",
    "subcategory": "Recyclable",
    "rarity": "Rare",
    "value": 1000,
    "weight": 1,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/arc-coolant.webp",
    "lootArea": "ARC",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 16,
        "component": {
          "id": "chemicals",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/chemicals.webp",
          "name": "Chemicals",
          "rarity": "Common",
          "item_type": "Basic Material",
          "description": "Used to craft medical supplies, explosives, and utility items."
        }
      }
    ],
    "droppedBy": [
      {
        "id": "fdeeba25-c8f7-4e65-8282-ecf673a7a4cd",
        "arc": {
          "id": "queen",
          "icon": "https://unhbvkszwhczbjxgetgk.supabase.co/storage/v1/object/public/images/arc-raiders/icons/queen.webp",
          "name": "Queen",
          "description": "This is the Goliath of the ARC forces, a colossal machine whose presence defines the battlefield. It is only deployed during the critical Harvester Event, acting as the immovable guardian of the Harvester unit. Its incredible durability and lethal arsenal make it the single greatest threat on the map; attempting to scratch its armor alone is a fool's errand—you'll need a full squad of Raiders working in concert just to stand a chance.\n\nIts attacks are devastating:\n\nMortar Barrage: The dome atop the unit launches three massive mortars that land in a cluster around a targeted Raider. Two seconds after impact, they detonate in a fiery, engulfing inferno.\n\nSustained Laser: It periodically sweeps its primary weapon, firing a continuous laser beam at any Raider it acquires in its line-of-sight.\n\nClose-Quarters Deterrents: Should Raiders try to get up close and personal, the Goliath switches modes, delivering either a disruptive EMP pulse to shut down technology or a crushing ground slam to obliterate anything nearby."
        },
        "arc_id": "queen",
        "created_at": "2025-11-04T16:33:19.486695+00:00"
      },
      {
        "id": "ece3a60c-6512-42de-a670-31c71e18b490",
        "arc": {
          "id": "sentinel",
          "icon": "https://unhbvkszwhczbjxgetgk.supabase.co/storage/v1/object/public/images/arc-raiders/icons/sentinel.webp",
          "name": "Sentinel",
          "description": "A large unarmored turret that sits atop buildings and ledges. Always found outside and usually very high up. Contains a small vulnerable capsule attached to it's swiveling arm.\n\nTraces movement and will fire off a single Heavy round every 5 seconds while having line-of-sight on a Raider."
        },
        "arc_id": "sentinel",
        "created_at": "2025-11-04T16:35:09.353207+00:00"
      }
    ],
    "components": [],
    "usedIn": []
  },
  {
    "id": "arc-flex-rubber",
    "name": "ARC Flex Rubber",
    "description": "Obtained from ARC enemies or activities. Can be recycled into rubber.",
    "category": "Recyclables",
    "subcategory": "Recyclable",
    "rarity": "Rare",
    "value": 1000,
    "weight": 1,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/arc-flex-rubber.webp",
    "lootArea": "ARC",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [
      {
        "id": "62a9a205-4889-47e1-9e4f-a0dbcdc82470",
        "arc": {
          "id": "bison",
          "icon": "https://unhbvkszwhczbjxgetgk.supabase.co/storage/v1/object/public/images/arc-raiders/icons/bison.webp",
          "name": "Leaper",
          "description": "This isn't just an ARC; it's a massive, arachnid-like siege engine. Its heavy armor gives it a hulking, near-indestructible presence on the battlefield, but don't mistake its bulk for sluggishness. This mechanized spider possesses an unnerving, gravity-defying ability to leap vast distances. Reports confirm it has been seen clearing impossible gaps, even bounding effortlessly to the summit of a Spaceport tower. It's a vertical threat you can't simply hide from."
        },
        "arc_id": "bison",
        "created_at": "2025-11-04T15:59:19.422889+00:00"
      },
      {
        "id": "b4bce3a9-c498-42e5-8097-1e721f3c1016",
        "arc": {
          "id": "queen",
          "icon": "https://unhbvkszwhczbjxgetgk.supabase.co/storage/v1/object/public/images/arc-raiders/icons/queen.webp",
          "name": "Queen",
          "description": "This is the Goliath of the ARC forces, a colossal machine whose presence defines the battlefield. It is only deployed during the critical Harvester Event, acting as the immovable guardian of the Harvester unit. Its incredible durability and lethal arsenal make it the single greatest threat on the map; attempting to scratch its armor alone is a fool's errand—you'll need a full squad of Raiders working in concert just to stand a chance.\n\nIts attacks are devastating:\n\nMortar Barrage: The dome atop the unit launches three massive mortars that land in a cluster around a targeted Raider. Two seconds after impact, they detonate in a fiery, engulfing inferno.\n\nSustained Laser: It periodically sweeps its primary weapon, firing a continuous laser beam at any Raider it acquires in its line-of-sight.\n\nClose-Quarters Deterrents: Should Raiders try to get up close and personal, the Goliath switches modes, delivering either a disruptive EMP pulse to shut down technology or a crushing ground slam to obliterate anything nearby."
        },
        "arc_id": "queen",
        "created_at": "2025-11-04T16:33:19.486695+00:00"
      }
    ],
    "components": [],
    "usedIn": []
  },
  {
    "id": "arc-performance-steel",
    "name": "ARC Performance Steel",
    "description": "Obtained from ARC enemies or activities. Can be recycled into scrap metal.",
    "category": "Recyclables",
    "subcategory": "Recyclable",
    "rarity": "Rare",
    "value": 1000,
    "weight": 1,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/arc-performance-steel.webp",
    "lootArea": "ARC",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 12,
        "component": {
          "id": "metal-parts",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/metal-parts.webp",
          "name": "Metal Parts",
          "rarity": "Common",
          "item_type": "Basic Material",
          "description": "Used to craft a wide range of items."
        }
      }
    ],
    "droppedBy": [
      {
        "id": "1fc14af0-8e7a-4f07-98ab-a2867a42fef7",
        "arc": {
          "id": "bison",
          "icon": "https://unhbvkszwhczbjxgetgk.supabase.co/storage/v1/object/public/images/arc-raiders/icons/bison.webp",
          "name": "Leaper",
          "description": "This isn't just an ARC; it's a massive, arachnid-like siege engine. Its heavy armor gives it a hulking, near-indestructible presence on the battlefield, but don't mistake its bulk for sluggishness. This mechanized spider possesses an unnerving, gravity-defying ability to leap vast distances. Reports confirm it has been seen clearing impossible gaps, even bounding effortlessly to the summit of a Spaceport tower. It's a vertical threat you can't simply hide from."
        },
        "arc_id": "bison",
        "created_at": "2025-11-04T15:59:19.422889+00:00"
      },
      {
        "id": "1be7da73-17d9-4d45-be25-979284375667",
        "arc": {
          "id": "queen",
          "icon": "https://unhbvkszwhczbjxgetgk.supabase.co/storage/v1/object/public/images/arc-raiders/icons/queen.webp",
          "name": "Queen",
          "description": "This is the Goliath of the ARC forces, a colossal machine whose presence defines the battlefield. It is only deployed during the critical Harvester Event, acting as the immovable guardian of the Harvester unit. Its incredible durability and lethal arsenal make it the single greatest threat on the map; attempting to scratch its armor alone is a fool's errand—you'll need a full squad of Raiders working in concert just to stand a chance.\n\nIts attacks are devastating:\n\nMortar Barrage: The dome atop the unit launches three massive mortars that land in a cluster around a targeted Raider. Two seconds after impact, they detonate in a fiery, engulfing inferno.\n\nSustained Laser: It periodically sweeps its primary weapon, firing a continuous laser beam at any Raider it acquires in its line-of-sight.\n\nClose-Quarters Deterrents: Should Raiders try to get up close and personal, the Goliath switches modes, delivering either a disruptive EMP pulse to shut down technology or a crushing ground slam to obliterate anything nearby."
        },
        "arc_id": "queen",
        "created_at": "2025-11-04T16:33:19.486695+00:00"
      },
      {
        "id": "333ec531-7afc-4920-93c1-4a8a40abb0df",
        "arc": {
          "id": "bombardier",
          "icon": "https://unhbvkszwhczbjxgetgk.supabase.co/storage/v1/object/public/images/arc-raiders/icons/bombardier.webp",
          "name": "Bombardier",
          "description": "The Bombardier is an armored ARC that functions as heavy, mobile artillery. Its movement is slow and loud. Armed with a multi-rocket launcher, it unleashes devastating, long-range barrages that can obliterate your entire squad. Do not engage this unit. If you hear its grinding approach, silence your movement and escape the area immediately, as its attention is a death sentence."
        },
        "arc_id": "bombardier",
        "created_at": "2025-11-04T15:56:37.290049+00:00"
      }
    ],
    "components": [],
    "usedIn": []
  },
  {
    "id": "arc-synthetic-resin",
    "name": "ARC Synthetic Resin",
    "description": "Obtained from ARC enemies or activities. Can be recycled into plastic.",
    "category": "Recyclables",
    "subcategory": "Recyclable",
    "rarity": "Rare",
    "value": 1000,
    "weight": 1,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/arc-synthetic-resin.webp",
    "lootArea": "ARC",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 14,
        "component": {
          "id": "plastic-parts",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/plastic-parts.webp",
          "name": "Plastic Parts",
          "rarity": "Common",
          "item_type": "Basic Material",
          "description": "Used to craft a wide range of items."
        }
      }
    ],
    "droppedBy": [
      {
        "id": "d848334a-def8-4542-8fda-c64274a3fb22",
        "arc": {
          "id": "queen",
          "icon": "https://unhbvkszwhczbjxgetgk.supabase.co/storage/v1/object/public/images/arc-raiders/icons/queen.webp",
          "name": "Queen",
          "description": "This is the Goliath of the ARC forces, a colossal machine whose presence defines the battlefield. It is only deployed during the critical Harvester Event, acting as the immovable guardian of the Harvester unit. Its incredible durability and lethal arsenal make it the single greatest threat on the map; attempting to scratch its armor alone is a fool's errand—you'll need a full squad of Raiders working in concert just to stand a chance.\n\nIts attacks are devastating:\n\nMortar Barrage: The dome atop the unit launches three massive mortars that land in a cluster around a targeted Raider. Two seconds after impact, they detonate in a fiery, engulfing inferno.\n\nSustained Laser: It periodically sweeps its primary weapon, firing a continuous laser beam at any Raider it acquires in its line-of-sight.\n\nClose-Quarters Deterrents: Should Raiders try to get up close and personal, the Goliath switches modes, delivering either a disruptive EMP pulse to shut down technology or a crushing ground slam to obliterate anything nearby."
        },
        "arc_id": "queen",
        "created_at": "2025-11-04T16:33:19.486695+00:00"
      },
      {
        "id": "96811227-d3d1-46e0-98a6-6c2ebff83cfc",
        "arc": {
          "id": "sentinel",
          "icon": "https://unhbvkszwhczbjxgetgk.supabase.co/storage/v1/object/public/images/arc-raiders/icons/sentinel.webp",
          "name": "Sentinel",
          "description": "A large unarmored turret that sits atop buildings and ledges. Always found outside and usually very high up. Contains a small vulnerable capsule attached to it's swiveling arm.\n\nTraces movement and will fire off a single Heavy round every 5 seconds while having line-of-sight on a Raider."
        },
        "arc_id": "sentinel",
        "created_at": "2025-11-04T16:35:09.353207+00:00"
      },
      {
        "id": "97c36cd8-8c8b-4d14-9839-e1ed39b3f19d",
        "arc": {
          "id": "snitch",
          "icon": "https://unhbvkszwhczbjxgetgk.supabase.co/storage/v1/object/public/images/arc-raiders/icons/snitch.webp",
          "name": "Snitch",
          "description": "This little flyer is a swift and unarmored scout drone, often identifiable by its cluster of three rotors. While individually fragile, its primary danger is its role as an aerial alarm system. Once it spots Raiders, it immediately triggers a wide-band signal, effectively calling in a wave of flying ARC reinforcements—usually a swarm of Wasps or Hornets—to descend on your position. Taking it out before it completes its transmission is essential, as its light frame means a single, well-aimed burst will shatter it."
        },
        "arc_id": "snitch",
        "created_at": "2025-11-04T16:36:02.882962+00:00"
      }
    ],
    "components": [],
    "usedIn": []
  },
  {
    "id": "arc-thermo-lining",
    "name": "ARC Thermo Lining",
    "description": "Obtained from ARC enemies and activities. Can be recycled into fabric.",
    "category": "Recyclables",
    "subcategory": "Recyclable",
    "rarity": "Rare",
    "value": 1000,
    "weight": 1,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/arc-thermo-lining.webp",
    "lootArea": "ARC",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 16,
        "component": {
          "id": "fabric",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/fabric.webp",
          "name": "Fabric",
          "rarity": "Common",
          "item_type": "Basic Material",
          "description": "Used to craft medical supplies and shields."
        }
      }
    ],
    "droppedBy": [
      {
        "id": "beddebd5-b419-4668-9452-d66bd8cd6e6f",
        "arc": {
          "id": "pop",
          "icon": "https://unhbvkszwhczbjxgetgk.supabase.co/storage/v1/object/public/images/arc-raiders/icons/pop.webp",
          "name": "Pop",
          "description": "This little menace is a Fireball ARC—a small, unarmored rolling unit that hides its true potential. It operates by rapidly closing the distance, looking like nothing more than a simple, harmless sphere until it's right on top of you. Once a Raider is nearby, it snaps open its side panels to reveal twin flamethrowers, quickly bathing the area in fire and burning targets to a crisp. It's a close-range ambush specialist designed to punish anyone caught off-guard."
        },
        "arc_id": "pop",
        "created_at": "2025-11-04T16:00:06.760318+00:00"
      },
      {
        "id": "37e33d49-722a-4050-af76-5cb593da4593",
        "arc": {
          "id": "queen",
          "icon": "https://unhbvkszwhczbjxgetgk.supabase.co/storage/v1/object/public/images/arc-raiders/icons/queen.webp",
          "name": "Queen",
          "description": "This is the Goliath of the ARC forces, a colossal machine whose presence defines the battlefield. It is only deployed during the critical Harvester Event, acting as the immovable guardian of the Harvester unit. Its incredible durability and lethal arsenal make it the single greatest threat on the map; attempting to scratch its armor alone is a fool's errand—you'll need a full squad of Raiders working in concert just to stand a chance.\n\nIts attacks are devastating:\n\nMortar Barrage: The dome atop the unit launches three massive mortars that land in a cluster around a targeted Raider. Two seconds after impact, they detonate in a fiery, engulfing inferno.\n\nSustained Laser: It periodically sweeps its primary weapon, firing a continuous laser beam at any Raider it acquires in its line-of-sight.\n\nClose-Quarters Deterrents: Should Raiders try to get up close and personal, the Goliath switches modes, delivering either a disruptive EMP pulse to shut down technology or a crushing ground slam to obliterate anything nearby."
        },
        "arc_id": "queen",
        "created_at": "2025-11-04T16:33:19.486695+00:00"
      },
      {
        "id": "68a230fe-2929-4644-b673-41f13115fdc4",
        "arc": {
          "id": "sentinel",
          "icon": "https://unhbvkszwhczbjxgetgk.supabase.co/storage/v1/object/public/images/arc-raiders/icons/sentinel.webp",
          "name": "Sentinel",
          "description": "A large unarmored turret that sits atop buildings and ledges. Always found outside and usually very high up. Contains a small vulnerable capsule attached to it's swiveling arm.\n\nTraces movement and will fire off a single Heavy round every 5 seconds while having line-of-sight on a Raider."
        },
        "arc_id": "sentinel",
        "created_at": "2025-11-04T16:35:09.353207+00:00"
      }
    ],
    "components": [],
    "usedIn": []
  },
  {
    "id": "bicycle-pump",
    "name": "Bicycle Pump",
    "description": "Can be recycled into crafting materials.",
    "category": "Recyclables",
    "subcategory": "Recyclable",
    "rarity": "Rare",
    "value": 2000,
    "weight": 3,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/bicycle-pump.webp",
    "lootArea": "Residential",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 4,
        "component": {
          "id": "canister",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/canister.webp",
          "name": "Canister",
          "rarity": "Uncommon",
          "item_type": "Topside Material",
          "description": "Used to craft a wide range of items. Can be recycled into plastic."
        }
      },
      {
        "quantity": 10,
        "component": {
          "id": "metal-parts",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/metal-parts.webp",
          "name": "Metal Parts",
          "rarity": "Common",
          "item_type": "Basic Material",
          "description": "Used to craft a wide range of items."
        }
      }
    ],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "bison-driver",
    "name": "Bison Driver",
    "description": "A critical control component from a Bison vehicle.",
    "category": "Recyclables",
    "subcategory": "Recyclable",
    "rarity": "Rare",
    "value": 2500,
    "weight": 1,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/bison-driver.webp",
    "lootArea": "ARC",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 2,
        "component": {
          "id": "arc-alloy",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/arc-alloy.webp",
          "name": "ARC Alloy",
          "rarity": "Uncommon",
          "item_type": "Topside Material",
          "description": "Obtained from ARC enemies or activities, or by recycling certain ARC parts. Used to craft components."
        }
      },
      {
        "quantity": 2,
        "component": {
          "id": "arc-motion-core",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/arc-motion-core.webp",
          "name": "ARC Motion Core",
          "rarity": "Rare",
          "item_type": "Topside Material",
          "description": "Obtained from ARC enemies or activities. Used to craft components. Can be recycled into ARC Alloy."
        }
      }
    ],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "broken-flashlight",
    "name": "Broken Flashlight",
    "description": "Can be recycled into crafting materials.",
    "category": "Recyclables",
    "subcategory": "Recyclable",
    "rarity": "Rare",
    "value": 1000,
    "weight": 2,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/broken-flashlight.webp",
    "lootArea": "Security",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 2,
        "component": {
          "id": "battery",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/battery.webp",
          "name": "Battery",
          "rarity": "Uncommon",
          "item_type": "Topside Material",
          "description": "Used to craft medical supplies. Can be recycled into scrap metal."
        }
      },
      {
        "quantity": 6,
        "component": {
          "id": "metal-parts",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/metal-parts.webp",
          "name": "Metal Parts",
          "rarity": "Common",
          "item_type": "Basic Material",
          "description": "Used to craft a wide range of items."
        }
      }
    ],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "broken-guidance-system",
    "name": "Broken Guidance System",
    "description": "Can be recycled into crafting materials.",
    "category": "Recyclables",
    "subcategory": "Recyclable",
    "rarity": "Rare",
    "value": 2000,
    "weight": 3,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/broken-guidance-system.webp",
    "lootArea": "Exodus",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 4,
        "component": {
          "id": "processor",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/processor.webp",
          "name": "Processor",
          "rarity": "Rare",
          "item_type": "Topside Material",
          "description": "Used in crafting."
        }
      }
    ],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "broken-handheld-radio",
    "name": "Broken Handheld Radio",
    "description": "Can be recycled into crafting materials.",
    "category": "Recyclables",
    "subcategory": "Recyclable",
    "rarity": "Rare",
    "value": 2000,
    "weight": 3,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/broken-handheld-radio.webp",
    "lootArea": "Security",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 3,
        "component": {
          "id": "sensors-recipe",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/sensors-recipe.webp",
          "name": "Sensors",
          "rarity": "Rare",
          "item_type": "Topside Material",
          "description": "Used to craft utility items and explosives. Can be recycled into scrap metal."
        }
      },
      {
        "quantity": 2,
        "component": {
          "id": "wires-recipe",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/wires-recipe.webp",
          "name": "Wires",
          "rarity": "Uncommon",
          "item_type": "Topside Material",
          "description": "A bundle of old wires. Used to craft a wide range of items. Can be recycled into scrap metal."
        }
      }
    ],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "broken-riot-shield",
    "name": "Broken Riot Shield",
    "description": "Can be recycled into crafting materials.",
    "category": "Recyclables",
    "subcategory": "Recyclable",
    "rarity": "Rare",
    "value": 1000,
    "weight": 2,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/broken-riot-shield.webp",
    "lootArea": "Security",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 10,
        "component": {
          "id": "plastic-parts",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/plastic-parts.webp",
          "name": "Plastic Parts",
          "rarity": "Common",
          "item_type": "Basic Material",
          "description": "Used to craft a wide range of items."
        }
      }
    ],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "broken-taser",
    "name": "Broken Taser",
    "description": "Can be recycled into crafting materials.",
    "category": "Recyclables",
    "subcategory": "Recyclable",
    "rarity": "Rare",
    "value": 1000,
    "weight": 2,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/broken-taser.webp",
    "lootArea": "Security",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 2,
        "component": {
          "id": "battery",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/battery.webp",
          "name": "Battery",
          "rarity": "Uncommon",
          "item_type": "Topside Material",
          "description": "Used to craft medical supplies. Can be recycled into scrap metal."
        }
      },
      {
        "quantity": 2,
        "component": {
          "id": "wires-recipe",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/wires-recipe.webp",
          "name": "Wires",
          "rarity": "Uncommon",
          "item_type": "Topside Material",
          "description": "A bundle of old wires. Used to craft a wide range of items. Can be recycled into scrap metal."
        }
      }
    ],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "coolant",
    "name": "Coolant",
    "description": "Can be recycled into crafting materials.",
    "category": "Recyclables",
    "subcategory": "Recyclable",
    "rarity": "Rare",
    "value": 1000,
    "weight": 2,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/coolant.webp",
    "lootArea": "Mechanical",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 5,
        "component": {
          "id": "chemicals",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/chemicals.webp",
          "name": "Chemicals",
          "rarity": "Common",
          "item_type": "Basic Material",
          "description": "Used to craft medical supplies, explosives, and utility items."
        }
      },
      {
        "quantity": 2,
        "component": {
          "id": "oil",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/oil.webp",
          "name": "Oil",
          "rarity": "Uncommon",
          "item_type": "Topside Material",
          "description": "Used to craft weapons and explosives. Can be recycled into chemicals."
        }
      }
    ],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "cooling-coil",
    "name": "Cooling Coil",
    "description": "Can be recycled into crafting materials.",
    "category": "Recyclables",
    "subcategory": "Recyclable",
    "rarity": "Rare",
    "value": 1000,
    "weight": 2,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/cooling-coil.webp",
    "lootArea": "Industrial",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 6,
        "component": {
          "id": "chemicals",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/chemicals.webp",
          "name": "Chemicals",
          "rarity": "Common",
          "item_type": "Basic Material",
          "description": "Used to craft medical supplies, explosives, and utility items."
        }
      },
      {
        "quantity": 2,
        "component": {
          "id": "spring",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/spring.webp",
          "name": "Steel Spring",
          "rarity": "Uncommon",
          "item_type": "Topside Material",
          "description": "A tightly wound coil of metal. Used to craft a wide range of items. Can be recycled into scrap metal."
        }
      }
    ],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "cooling-fan",
    "name": "Cooling Fan",
    "description": "Can be recycled into crafting materials.",
    "category": "Recyclables",
    "subcategory": "Recyclable",
    "rarity": "Rare",
    "value": 2000,
    "weight": 3,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/cooling-fan.webp",
    "lootArea": "Technological",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 14,
        "component": {
          "id": "plastic-parts",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/plastic-parts.webp",
          "name": "Plastic Parts",
          "rarity": "Common",
          "item_type": "Basic Material",
          "description": "Used to craft a wide range of items."
        }
      },
      {
        "quantity": 4,
        "component": {
          "id": "wires-recipe",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/wires-recipe.webp",
          "name": "Wires",
          "rarity": "Uncommon",
          "item_type": "Topside Material",
          "description": "A bundle of old wires. Used to craft a wide range of items. Can be recycled into scrap metal."
        }
      }
    ],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "cracked-bioscanner",
    "name": "Cracked Bioscanner",
    "description": "Can be recycled into crafting materials.",
    "category": "Recyclables",
    "subcategory": "Recyclable",
    "rarity": "Rare",
    "value": 1000,
    "weight": 2,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/cracked-bioscanner.webp",
    "lootArea": "Medical",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 3,
        "component": {
          "id": "battery",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/battery.webp",
          "name": "Battery",
          "rarity": "Uncommon",
          "item_type": "Topside Material",
          "description": "Used to craft medical supplies. Can be recycled into scrap metal."
        }
      },
      {
        "quantity": 3,
        "component": {
          "id": "rubber-parts-recipe",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/rubber-parts-recipe.webp",
          "name": "Rubber Parts",
          "rarity": "Common",
          "item_type": "Basic Material",
          "description": "Used to craft a wide range of items."
        }
      }
    ],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "damaged-heat-sink",
    "name": "Damaged Heat Sink",
    "description": "Can be recycled into crafting materials.",
    "category": "Recyclables",
    "subcategory": "Recyclable",
    "rarity": "Rare",
    "value": 1000,
    "weight": 2,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/damaged-heat-sink.webp",
    "lootArea": "Technological",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 6,
        "component": {
          "id": "metal-parts",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/metal-parts.webp",
          "name": "Metal Parts",
          "rarity": "Common",
          "item_type": "Basic Material",
          "description": "Used to craft a wide range of items."
        }
      },
      {
        "quantity": 2,
        "component": {
          "id": "wires-recipe",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/wires-recipe.webp",
          "name": "Wires",
          "rarity": "Uncommon",
          "item_type": "Topside Material",
          "description": "A bundle of old wires. Used to craft a wide range of items. Can be recycled into scrap metal."
        }
      }
    ],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "diving-googles",
    "name": "Diving Googles",
    "description": "Can be recycled into crafting materials.",
    "category": "Recyclables",
    "subcategory": "Recyclable",
    "rarity": "Rare",
    "value": 640,
    "weight": 2,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/diving-googles.webp",
    "lootArea": "Residential",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 12,
        "component": {
          "id": "rubber-parts-recipe",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/rubber-parts-recipe.webp",
          "name": "Rubber Parts",
          "rarity": "Common",
          "item_type": "Basic Material",
          "description": "Used to craft a wide range of items."
        }
      }
    ],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "dog-collar",
    "name": "Dog Collar",
    "description": "After all this time, you can still smell the goodness.",
    "category": "Recyclables",
    "subcategory": "Recyclable",
    "rarity": "Rare",
    "value": 640,
    "weight": 0.8,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/dog-collar.webp",
    "lootArea": "Residential",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 8,
        "component": {
          "id": "fabric",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/fabric.webp",
          "name": "Fabric",
          "rarity": "Common",
          "item_type": "Basic Material",
          "description": "Used to craft medical supplies and shields."
        }
      },
      {
        "quantity": 1,
        "component": {
          "id": "metal-parts",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/metal-parts.webp",
          "name": "Metal Parts",
          "rarity": "Common",
          "item_type": "Basic Material",
          "description": "Used to craft a wide range of items."
        }
      }
    ],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "expired-respirator",
    "name": "Expired Respirator",
    "description": "The filters are clogged with sand and noxious fumes. Long past its lifespan.",
    "category": "Recyclables",
    "subcategory": "Recyclable",
    "rarity": "Rare",
    "value": 640,
    "weight": 2,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/expired-respirator.webp",
    "lootArea": "Medical",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 4,
        "component": {
          "id": "fabric",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/fabric.webp",
          "name": "Fabric",
          "rarity": "Common",
          "item_type": "Basic Material",
          "description": "Used to craft medical supplies and shields."
        }
      },
      {
        "quantity": 8,
        "component": {
          "id": "rubber-parts-recipe",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/rubber-parts-recipe.webp",
          "name": "Rubber Parts",
          "rarity": "Common",
          "item_type": "Basic Material",
          "description": "Used to craft a wide range of items."
        }
      }
    ],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "flow-controller",
    "name": "Flow Controller",
    "description": "Can be recycled into crafting materials",
    "category": "Recyclables",
    "subcategory": "Recyclable",
    "rarity": "Rare",
    "value": 3000,
    "weight": 1.5,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/flow-controller.webp",
    "lootArea": "Exodus",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 1,
        "component": {
          "id": "advanced-mechanical-components",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/advanced-mechanical-components.webp",
          "name": "Advanced Mechanical Components",
          "rarity": "Rare",
          "item_type": "Advanced Material",
          "description": "Mostly used to craft advanced weapons. Can be recycled into crafting materials."
        }
      },
      {
        "quantity": 1,
        "component": {
          "id": "sensors-recipe",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/sensors-recipe.webp",
          "name": "Sensors",
          "rarity": "Rare",
          "item_type": "Topside Material",
          "description": "Used to craft utility items and explosives. Can be recycled into scrap metal."
        }
      }
    ],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "frequency-modulation-box",
    "name": "Frequency Modulation Box",
    "description": "Can be recycled into crafting materials",
    "category": "Recyclables",
    "subcategory": "Recyclable",
    "rarity": "Rare",
    "value": 3000,
    "weight": 1.5,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/frequency-modulation-box.webp",
    "lootArea": "Exodus",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 1,
        "component": {
          "id": "advanced-electrical-components",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/advanced-electrical-components.webp",
          "name": "Advanced Electrical Components",
          "rarity": "Rare",
          "item_type": "Refined Material",
          "description": "Used to craft a wide range of items. Can be recycled into crafting materials."
        }
      },
      {
        "quantity": 1,
        "component": {
          "id": "speaker-component",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/speaker-component.webp",
          "name": "Speaker Component",
          "rarity": "Rare",
          "item_type": "Topside Material",
          "description": "Used in crafting."
        }
      }
    ],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "fried-motherboard",
    "name": "Fried Motherboard",
    "description": "Can be recycled into crafting materials.",
    "category": "Recyclables",
    "subcategory": "Recyclable",
    "rarity": "Rare",
    "value": 2000,
    "weight": 3,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/fried-motherboard.webp",
    "lootArea": "Technological",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 2,
        "component": {
          "id": "electrical-components",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/electrical-components.webp",
          "name": "Electrical Components",
          "rarity": "Uncommon",
          "item_type": "Refined Material",
          "description": "Used to craft a wide range of items. Can be recycled into crafting materials."
        }
      },
      {
        "quantity": 5,
        "component": {
          "id": "plastic-parts",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/plastic-parts.webp",
          "name": "Plastic Parts",
          "rarity": "Common",
          "item_type": "Basic Material",
          "description": "Used to craft a wide range of items."
        }
      }
    ],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "frying-pan",
    "name": "Frying Pan",
    "description": "Can be recycled into crafting materials.",
    "category": "Recyclables",
    "subcategory": "Recyclable",
    "rarity": "Rare",
    "value": 640,
    "weight": 2,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/frying-pan.webp",
    "lootArea": "Residential",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 8,
        "component": {
          "id": "metal-parts",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/metal-parts.webp",
          "name": "Metal Parts",
          "rarity": "Common",
          "item_type": "Basic Material",
          "description": "Used to craft a wide range of items."
        }
      }
    ],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "headphones",
    "name": "Headphones",
    "description": "Can be recycled into crafting materials.",
    "category": "Recyclables",
    "subcategory": "Recyclable",
    "rarity": "Rare",
    "value": 1000,
    "weight": 2,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/headphones.webp",
    "lootArea": "Commercial, Residential",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 7,
        "component": {
          "id": "rubber-parts-recipe",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/rubber-parts-recipe.webp",
          "name": "Rubber Parts",
          "rarity": "Common",
          "item_type": "Basic Material",
          "description": "Used to craft a wide range of items."
        }
      },
      {
        "quantity": 1,
        "component": {
          "id": "speaker-component",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/speaker-component.webp",
          "name": "Speaker Component",
          "rarity": "Rare",
          "item_type": "Topside Material",
          "description": "Used in crafting."
        }
      }
    ],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "hornet-driver",
    "name": "Hornet Driver",
    "description": "A control module used to operate Hornet drones or vehicles.",
    "category": "Recyclables",
    "subcategory": "Recyclable",
    "rarity": "Rare",
    "value": 2000,
    "weight": 0.75,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/hornet-driver.webp",
    "lootArea": "ARC",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 2,
        "component": {
          "id": "arc-alloy",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/arc-alloy.webp",
          "name": "ARC Alloy",
          "rarity": "Uncommon",
          "item_type": "Topside Material",
          "description": "Obtained from ARC enemies or activities, or by recycling certain ARC parts. Used to craft components."
        }
      },
      {
        "quantity": 2,
        "component": {
          "id": "electrical-components",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/electrical-components.webp",
          "name": "Electrical Components",
          "rarity": "Uncommon",
          "item_type": "Refined Material",
          "description": "Used to craft a wide range of items. Can be recycled into crafting materials."
        }
      }
    ],
    "droppedBy": [
      {
        "id": "ed9d96c7-1b75-4830-b92c-66b4293b4f42",
        "arc": {
          "id": "hornet",
          "icon": "https://unhbvkszwhczbjxgetgk.supabase.co/storage/v1/object/public/images/arc-raiders/icons/hornet.webp",
          "name": "Hornet",
          "description": "This is a medium-class drone, easily recognizable by the pair of armored rotors mounted prominently on its front. It rarely operates alone, preferring to patrol the skies alongside a swarm of Wasps or to act as an aerial shield for a larger, ground-based ARC. Its main attack is a focused, high-speed projectile. Watch for the brief, one-second pulse of a red aiming laser—that's your warning before it fires a specialized stun round designed to shred Raider shields and tear through light armor almost instantly."
        },
        "arc_id": "hornet",
        "created_at": "2025-11-04T15:57:35.118713+00:00"
      }
    ],
    "components": [],
    "usedIn": []
  },
  {
    "id": "humidifier",
    "name": "Humidifier",
    "description": "Can be recycled into crafting materials.",
    "category": "Recyclables",
    "subcategory": "Recyclable",
    "rarity": "Rare",
    "value": 1000,
    "weight": 2,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/humidifier.webp",
    "lootArea": "Residential",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 2,
        "component": {
          "id": "canister",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/canister.webp",
          "name": "Canister",
          "rarity": "Uncommon",
          "item_type": "Topside Material",
          "description": "Used to craft a wide range of items. Can be recycled into plastic."
        }
      },
      {
        "quantity": 2,
        "component": {
          "id": "wires-recipe",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/wires-recipe.webp",
          "name": "Wires",
          "rarity": "Uncommon",
          "item_type": "Topside Material",
          "description": "A bundle of old wires. Used to craft a wide range of items. Can be recycled into scrap metal."
        }
      }
    ],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "industrial-battery",
    "name": "Industrial Battery",
    "description": "Can be recycled into crafting materials.",
    "category": "Recyclables",
    "subcategory": "Recyclable",
    "rarity": "Rare",
    "value": 1000,
    "weight": 2,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/industrial-battery.webp",
    "lootArea": "Industrial",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 2,
        "component": {
          "id": "battery",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/battery.webp",
          "name": "Battery",
          "rarity": "Uncommon",
          "item_type": "Topside Material",
          "description": "Used to craft medical supplies. Can be recycled into scrap metal."
        }
      },
      {
        "quantity": 7,
        "component": {
          "id": "chemicals",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/chemicals.webp",
          "name": "Chemicals",
          "rarity": "Common",
          "item_type": "Basic Material",
          "description": "Used to craft medical supplies, explosives, and utility items."
        }
      }
    ],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "industrial-charger",
    "name": "Industrial Charger",
    "description": "Can be recycled into crafting materials.",
    "category": "Recyclables",
    "subcategory": "Recyclable",
    "rarity": "Rare",
    "value": 1000,
    "weight": 2,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/industrial-charger.webp",
    "lootArea": "Industrial",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 5,
        "component": {
          "id": "metal-parts",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/metal-parts.webp",
          "name": "Metal Parts",
          "rarity": "Common",
          "item_type": "Basic Material",
          "description": "Used to craft a wide range of items."
        }
      },
      {
        "quantity": 1,
        "component": {
          "id": "voltage-converter",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/voltage-converter.webp",
          "name": "Voltage Converter",
          "rarity": "Rare",
          "item_type": "Topside Material",
          "description": "A device that adjusts electrical voltage for various crafting purposes."
        }
      }
    ],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "industrial-magnet",
    "name": "Industrial Magnet",
    "description": "Can be recycled into crafting materials.",
    "category": "Recyclables",
    "subcategory": "Recyclable",
    "rarity": "Rare",
    "value": 1000,
    "weight": 2,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/industrial-magnet.webp",
    "lootArea": "Industrial",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 2,
        "component": {
          "id": "magnet",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/magnet.webp",
          "name": "Magnet",
          "rarity": "Uncommon",
          "item_type": "Topside Material",
          "description": "Fun thing to put on a fridgerator."
        }
      },
      {
        "quantity": 4,
        "component": {
          "id": "metal-parts",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/metal-parts.webp",
          "name": "Metal Parts",
          "rarity": "Common",
          "item_type": "Basic Material",
          "description": "Used to craft a wide range of items."
        }
      }
    ],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "laboratory-reagents",
    "name": "Laboratory Reagents",
    "description": "Can be recycled into crafting materials.",
    "category": "Recyclables",
    "subcategory": "Recyclable",
    "rarity": "Rare",
    "value": 2000,
    "weight": 3,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/laboratory-reagents.webp",
    "lootArea": "Medical",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 16,
        "component": {
          "id": "chemicals",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/chemicals.webp",
          "name": "Chemicals",
          "rarity": "Common",
          "item_type": "Basic Material",
          "description": "Used to craft medical supplies, explosives, and utility items."
        }
      },
      {
        "quantity": 3,
        "component": {
          "id": "crude-explosives",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/crude-explosives.webp",
          "name": "Crude Explosives",
          "rarity": "Uncommon",
          "item_type": "Refined Material",
          "description": "Used to craft explosives. Can be recycled into crafting materials."
        }
      }
    ],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "microscope",
    "name": "Microscope",
    "description": "Can be recycled into crafting materials.",
    "category": "Recyclables",
    "subcategory": "Recyclable",
    "rarity": "Rare",
    "value": 3000,
    "weight": 1.5,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/microscope.webp",
    "lootArea": "Exodus",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 1,
        "component": {
          "id": "advanced-mechanical-components",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/advanced-mechanical-components.webp",
          "name": "Advanced Mechanical Components",
          "rarity": "Rare",
          "item_type": "Advanced Material",
          "description": "Mostly used to craft advanced weapons. Can be recycled into crafting materials."
        }
      },
      {
        "quantity": 3,
        "component": {
          "id": "magnet",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/magnet.webp",
          "name": "Magnet",
          "rarity": "Uncommon",
          "item_type": "Topside Material",
          "description": "Fun thing to put on a fridgerator."
        }
      }
    ],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "mini-centrifuge",
    "name": "Mini Centrifuge",
    "description": "Can be recycled into crafting materials",
    "category": "Recyclables",
    "subcategory": "Recyclable",
    "rarity": "Rare",
    "value": 3000,
    "weight": 1.5,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/mini-centrifuge.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 1,
        "component": {
          "id": "advanced-mechanical-components",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/advanced-mechanical-components.webp",
          "name": "Advanced Mechanical Components",
          "rarity": "Rare",
          "item_type": "Advanced Material",
          "description": "Mostly used to craft advanced weapons. Can be recycled into crafting materials."
        }
      },
      {
        "quantity": 2,
        "component": {
          "id": "canister",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/canister.webp",
          "name": "Canister",
          "rarity": "Uncommon",
          "item_type": "Topside Material",
          "description": "Used to craft a wide range of items. Can be recycled into plastic."
        }
      }
    ],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "motor",
    "name": "Motor",
    "description": "Can be recycled into crafting materials.",
    "category": "Recyclables",
    "subcategory": "Recyclable",
    "rarity": "Rare",
    "value": 2000,
    "weight": 3,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/motor.webp",
    "lootArea": "Mechanical",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 2,
        "component": {
          "id": "mechanical-components",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/mechanical-components.webp",
          "name": "Mechanical Components",
          "rarity": "Uncommon",
          "item_type": "Refined Material",
          "description": "Used to craft a wide range of items. Can be recycled into crafting materials."
        }
      },
      {
        "quantity": 2,
        "component": {
          "id": "oil",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/oil.webp",
          "name": "Oil",
          "rarity": "Uncommon",
          "item_type": "Topside Material",
          "description": "Used to craft weapons and explosives. Can be recycled into chemicals."
        }
      }
    ],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "polluted-air-filter",
    "name": "Polluted Air Filter",
    "description": "Can be recycled into crafting materials.",
    "category": "Recyclables",
    "subcategory": "Recyclable",
    "rarity": "Rare",
    "value": 1000,
    "weight": 0.8,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/polluted-air-filter.webp",
    "lootArea": "Industrial",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 6,
        "component": {
          "id": "fabric",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/fabric.webp",
          "name": "Fabric",
          "rarity": "Common",
          "item_type": "Basic Material",
          "description": "Used to craft medical supplies and shields."
        }
      },
      {
        "quantity": 2,
        "component": {
          "id": "oil",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/oil.webp",
          "name": "Oil",
          "rarity": "Uncommon",
          "item_type": "Topside Material",
          "description": "Used to craft weapons and explosives. Can be recycled into chemicals."
        }
      }
    ],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "portable-television",
    "name": "Portable TV",
    "description": "Can be recycled into crafting materials.",
    "category": "Recyclables",
    "subcategory": "Recyclable",
    "rarity": "Rare",
    "value": 2000,
    "weight": 3,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/portable-television.webp",
    "lootArea": "Residential",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 2,
        "component": {
          "id": "battery",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/battery.webp",
          "name": "Battery",
          "rarity": "Uncommon",
          "item_type": "Topside Material",
          "description": "Used to craft medical supplies. Can be recycled into scrap metal."
        }
      },
      {
        "quantity": 6,
        "component": {
          "id": "wires-recipe",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/wires-recipe.webp",
          "name": "Wires",
          "rarity": "Uncommon",
          "item_type": "Topside Material",
          "description": "A bundle of old wires. Used to craft a wide range of items. Can be recycled into scrap metal."
        }
      }
    ],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "power-bank",
    "name": "Power Bank",
    "description": "Can be recycled into crafting materials.",
    "category": "Recyclables",
    "subcategory": "Recyclable",
    "rarity": "Rare",
    "value": 1000,
    "weight": 2,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/power-bank.webp",
    "lootArea": "Electrical, Commercial, Residential",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 2,
        "component": {
          "id": "battery",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/battery.webp",
          "name": "Battery",
          "rarity": "Uncommon",
          "item_type": "Topside Material",
          "description": "Used to craft medical supplies. Can be recycled into scrap metal."
        }
      },
      {
        "quantity": 2,
        "component": {
          "id": "wires-recipe",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/wires-recipe.webp",
          "name": "Wires",
          "rarity": "Uncommon",
          "item_type": "Topside Material",
          "description": "A bundle of old wires. Used to craft a wide range of items. Can be recycled into scrap metal."
        }
      }
    ],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "power-cable",
    "name": "Power Cable",
    "description": "Can be recycled into crafting materials.",
    "category": "Recyclables",
    "subcategory": "Recyclable",
    "rarity": "Rare",
    "value": 1000,
    "weight": 2,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/power-cable.webp",
    "lootArea": "Electrical, Commercial, Residential",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 4,
        "component": {
          "id": "wires-recipe",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/wires-recipe.webp",
          "name": "Wires",
          "rarity": "Uncommon",
          "item_type": "Topside Material",
          "description": "A bundle of old wires. Used to craft a wide range of items. Can be recycled into scrap metal."
        }
      }
    ],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "projector",
    "name": "Projector",
    "description": "Can be recycled into crafting materials.",
    "category": "Recyclables",
    "subcategory": "Recyclable",
    "rarity": "Rare",
    "value": 1000,
    "weight": 2,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/projector.webp",
    "lootArea": "Residential",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 1,
        "component": {
          "id": "processor",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/processor.webp",
          "name": "Processor",
          "rarity": "Rare",
          "item_type": "Topside Material",
          "description": "Used in crafting."
        }
      },
      {
        "quantity": 2,
        "component": {
          "id": "wires-recipe",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/wires-recipe.webp",
          "name": "Wires",
          "rarity": "Uncommon",
          "item_type": "Topside Material",
          "description": "A bundle of old wires. Used to craft a wide range of items. Can be recycled into scrap metal."
        }
      }
    ],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "radio",
    "name": "Radio",
    "description": "Can be recycled into crafting materials.",
    "category": "Recyclables",
    "subcategory": "Recyclable",
    "rarity": "Rare",
    "value": 1000,
    "weight": 2,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/radio.webp",
    "lootArea": "Commercial, Residential",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 1,
        "component": {
          "id": "sensors-recipe",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/sensors-recipe.webp",
          "name": "Sensors",
          "rarity": "Rare",
          "item_type": "Topside Material",
          "description": "Used to craft utility items and explosives. Can be recycled into scrap metal."
        }
      },
      {
        "quantity": 1,
        "component": {
          "id": "speaker-component",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/speaker-component.webp",
          "name": "Speaker Component",
          "rarity": "Rare",
          "item_type": "Topside Material",
          "description": "Used in crafting."
        }
      }
    ],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "radio-relay",
    "name": "Radio Relay",
    "description": "Can be recycled into crafting materials.",
    "category": "Recyclables",
    "subcategory": "Recyclable",
    "rarity": "Rare",
    "value": 3000,
    "weight": 1.5,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/radio-relay.webp",
    "lootArea": "Exodus",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 2,
        "component": {
          "id": "sensors-recipe",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/sensors-recipe.webp",
          "name": "Sensors",
          "rarity": "Rare",
          "item_type": "Topside Material",
          "description": "Used to craft utility items and explosives. Can be recycled into scrap metal."
        }
      },
      {
        "quantity": 2,
        "component": {
          "id": "speaker-component",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/speaker-component.webp",
          "name": "Speaker Component",
          "rarity": "Rare",
          "item_type": "Topside Material",
          "description": "Used in crafting."
        }
      }
    ],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "remote-control",
    "name": "Remote Control",
    "description": "Can be recycled into crafting materials.",
    "category": "Recyclables",
    "subcategory": "Recyclable",
    "rarity": "Rare",
    "value": 1000,
    "weight": 0.8,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/remote-control.webp",
    "lootArea": "Residential",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 7,
        "component": {
          "id": "plastic-parts",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/plastic-parts.webp",
          "name": "Plastic Parts",
          "rarity": "Common",
          "item_type": "Basic Material",
          "description": "Used to craft a wide range of items."
        }
      },
      {
        "quantity": 1,
        "component": {
          "id": "sensors-recipe",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/sensors-recipe.webp",
          "name": "Sensors",
          "rarity": "Rare",
          "item_type": "Topside Material",
          "description": "Used to craft utility items and explosives. Can be recycled into scrap metal."
        }
      }
    ],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "rocket-thruster",
    "name": "Rocket Thruster",
    "description": "Can be recycled into crafting materials.",
    "category": "Recyclables",
    "subcategory": "Recyclable",
    "rarity": "Rare",
    "value": 2000,
    "weight": 3,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/rocket-thruster.webp",
    "lootArea": "Exodus",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 6,
        "component": {
          "id": "metal-parts",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/metal-parts.webp",
          "name": "Metal Parts",
          "rarity": "Common",
          "item_type": "Basic Material",
          "description": "Used to craft a wide range of items."
        }
      },
      {
        "quantity": 2,
        "component": {
          "id": "synthesized-fuel",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/synthesized-fuel.webp",
          "name": "Synthesized Fuel",
          "rarity": "Rare",
          "item_type": "Topside Material",
          "description": "Used to craft utility items and explosives. Can be recycled into chemicals."
        }
      }
    ],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "rotary-encoder",
    "name": "Rotary Encoder",
    "description": "Can be recycled into crafting materials. ",
    "category": "Recyclables",
    "subcategory": "Recyclable",
    "rarity": "Rare",
    "value": 3000,
    "weight": 1.5,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/rotary-encoder.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 2,
        "component": {
          "id": "electrical-components",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/electrical-components.webp",
          "name": "Electrical Components",
          "rarity": "Uncommon",
          "item_type": "Refined Material",
          "description": "Used to craft a wide range of items. Can be recycled into crafting materials."
        }
      },
      {
        "quantity": 2,
        "component": {
          "id": "processor",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/processor.webp",
          "name": "Processor",
          "rarity": "Rare",
          "item_type": "Topside Material",
          "description": "Used in crafting."
        }
      }
    ],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "rubber-pad",
    "name": "Rubber Pad",
    "description": "Can be recycled into rubber parts.",
    "category": "Recyclables",
    "subcategory": "Recyclable",
    "rarity": "Rare",
    "value": 1000,
    "weight": 2,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/rubber-pad.webp",
    "lootArea": "Electrical",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 18,
        "component": {
          "id": "rubber-parts-recipe",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/rubber-parts-recipe.webp",
          "name": "Rubber Parts",
          "rarity": "Common",
          "item_type": "Basic Material",
          "description": "Used to craft a wide range of items."
        }
      }
    ],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "ruined-accordion",
    "name": "Ruined Accordion",
    "description": "Can be recycled into crafting materials.",
    "category": "Recyclables",
    "subcategory": "Recyclable",
    "rarity": "Rare",
    "value": 2000,
    "weight": 3,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/ruined-accordion.webp",
    "lootArea": "Residential",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 18,
        "component": {
          "id": "rubber-parts-recipe",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/rubber-parts-recipe.webp",
          "name": "Rubber Parts",
          "rarity": "Common",
          "item_type": "Basic Material",
          "description": "Used to craft a wide range of items."
        }
      },
      {
        "quantity": 3,
        "component": {
          "id": "spring",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/spring.webp",
          "name": "Steel Spring",
          "rarity": "Uncommon",
          "item_type": "Topside Material",
          "description": "A tightly wound coil of metal. Used to craft a wide range of items. Can be recycled into scrap metal."
        }
      }
    ],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "ruined-riot-shield",
    "name": "Ruined Riot Shield",
    "description": "Can be recycled into crafting materials.",
    "category": "Recyclables",
    "subcategory": "Recyclable",
    "rarity": "Rare",
    "value": 1000,
    "weight": 2,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/ruined-riot-shield.webp",
    "lootArea": "Security",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 10,
        "component": {
          "id": "plastic-parts",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/plastic-parts.webp",
          "name": "Plastic Parts",
          "rarity": "Common",
          "item_type": "Basic Material",
          "description": "Used to craft a wide range of items."
        }
      },
      {
        "quantity": 6,
        "component": {
          "id": "rubber-parts-recipe",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/rubber-parts-recipe.webp",
          "name": "Rubber Parts",
          "rarity": "Common",
          "item_type": "Basic Material",
          "description": "Used to craft a wide range of items."
        }
      }
    ],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "rusted-gear",
    "name": "Rusted Gear",
    "description": "Can be recycled into crafting materials.",
    "category": "Recyclables",
    "subcategory": "Recyclable",
    "rarity": "Rare",
    "value": 2000,
    "weight": 3,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/rusted-gear.webp",
    "lootArea": "Industrial",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 2,
        "component": {
          "id": "mechanical-components",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/mechanical-components.webp",
          "name": "Mechanical Components",
          "rarity": "Uncommon",
          "item_type": "Refined Material",
          "description": "Used to craft a wide range of items. Can be recycled into crafting materials."
        }
      },
      {
        "quantity": 4,
        "component": {
          "id": "metal-parts",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/metal-parts.webp",
          "name": "Metal Parts",
          "rarity": "Common",
          "item_type": "Basic Material",
          "description": "Used to craft a wide range of items."
        }
      }
    ],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "rusted-shut-medical-kit",
    "name": "Rusted Shut Medical Kit",
    "description": "Can be recycled into crafting material.",
    "category": "Recyclables",
    "subcategory": "Recyclable",
    "rarity": "Rare",
    "value": 2000,
    "weight": 3,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/rusted-shut-medical-kit.webp",
    "lootArea": "Medical",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 1,
        "component": {
          "id": "antiseptic",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/antiseptic.webp",
          "name": "Antiseptic",
          "rarity": "Rare",
          "item_type": "Refined Material",
          "description": "Used to craft medical supplies. Can be recycled into chemicals."
        }
      },
      {
        "quantity": 2,
        "component": {
          "id": "syringe",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/syringe.webp",
          "name": "Syringe",
          "rarity": "Rare",
          "item_type": "Topside Material",
          "description": "A sterile syringe for medical use. Used to craft medical supplies. Can be recycled into plastic."
        }
      }
    ],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "rusted-tools",
    "name": "Rusted Tools",
    "description": "Can be recycled into metal parts.",
    "category": "Recyclables",
    "subcategory": "Recyclable",
    "rarity": "Rare",
    "value": 1000,
    "weight": 2,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/rusted-tools.webp",
    "lootArea": "Mechanical, Industrial",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 8,
        "component": {
          "id": "metal-parts",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/metal-parts.webp",
          "name": "Metal Parts",
          "rarity": "Common",
          "item_type": "Basic Material",
          "description": "Used to craft a wide range of items."
        }
      },
      {
        "quantity": 1,
        "component": {
          "id": "spring",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/spring.webp",
          "name": "Steel Spring",
          "rarity": "Uncommon",
          "item_type": "Topside Material",
          "description": "A tightly wound coil of metal. Used to craft a wide range of items. Can be recycled into scrap metal."
        }
      }
    ],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "sample-cleaner",
    "name": "Sample Cleaner",
    "description": "Can be recycled into crafting materials.",
    "category": "Recyclables",
    "subcategory": "Recyclable",
    "rarity": "Rare",
    "value": 3000,
    "weight": 1.5,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/sample-cleaner.webp",
    "lootArea": "Exodus",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 14,
        "component": {
          "id": "assorted-seeds",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/assorted-seeds.webp",
          "name": "Assorted Seeds",
          "rarity": "Common",
          "item_type": "Nature",
          "description": "A handful of seeds. Celeste might be looking for these."
        }
      },
      {
        "quantity": 2,
        "component": {
          "id": "electrical-components",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/electrical-components.webp",
          "name": "Electrical Components",
          "rarity": "Uncommon",
          "item_type": "Refined Material",
          "description": "Used to craft a wide range of items. Can be recycled into crafting materials."
        }
      }
    ],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "sentinel-part",
    "name": "Sentinel Firing Core",
    "description": "Can be recycled into crafting materials.",
    "category": "Recyclables",
    "subcategory": "Recyclable",
    "rarity": "Rare",
    "value": 3000,
    "weight": 1,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/sentinel-part.webp",
    "lootArea": "ARC",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 2,
        "component": {
          "id": "arc-alloy",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/arc-alloy.webp",
          "name": "ARC Alloy",
          "rarity": "Uncommon",
          "item_type": "Topside Material",
          "description": "Obtained from ARC enemies or activities, or by recycling certain ARC parts. Used to craft components."
        }
      },
      {
        "quantity": 3,
        "component": {
          "id": "mechanical-components",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/mechanical-components.webp",
          "name": "Mechanical Components",
          "rarity": "Uncommon",
          "item_type": "Refined Material",
          "description": "Used to craft a wide range of items. Can be recycled into crafting materials."
        }
      }
    ],
    "droppedBy": [
      {
        "id": "b96623f8-15d5-4149-8264-c9bc476ec96b",
        "arc": {
          "id": "sentinel",
          "icon": "https://unhbvkszwhczbjxgetgk.supabase.co/storage/v1/object/public/images/arc-raiders/icons/sentinel.webp",
          "name": "Sentinel",
          "description": "A large unarmored turret that sits atop buildings and ledges. Always found outside and usually very high up. Contains a small vulnerable capsule attached to it's swiveling arm.\n\nTraces movement and will fire off a single Heavy round every 5 seconds while having line-of-sight on a Raider."
        },
        "arc_id": "sentinel",
        "created_at": "2025-11-04T16:35:09.353207+00:00"
      }
    ],
    "components": [],
    "usedIn": []
  },
  {
    "id": "signal-amplifier",
    "name": "Signal Amplifier",
    "description": "Can be recycled into crafting materials.",
    "category": "Recyclables",
    "subcategory": "Recyclable",
    "rarity": "Rare",
    "value": 3000,
    "weight": 1.5,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/signal-amplifier.webp",
    "lootArea": "Exodus",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 2,
        "component": {
          "id": "electrical-components",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/electrical-components.webp",
          "name": "Electrical Components",
          "rarity": "Uncommon",
          "item_type": "Refined Material",
          "description": "Used to craft a wide range of items. Can be recycled into crafting materials."
        }
      },
      {
        "quantity": 2,
        "component": {
          "id": "voltage-converter",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/voltage-converter.webp",
          "name": "Voltage Converter",
          "rarity": "Rare",
          "item_type": "Topside Material",
          "description": "A device that adjusts electrical voltage for various crafting purposes."
        }
      }
    ],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "spectrometer",
    "name": "Spectrometer",
    "description": "Can be recycled into crafting materials",
    "category": "Recyclables",
    "subcategory": "Recyclable",
    "rarity": "Rare",
    "value": 3000,
    "weight": 1.5,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/spectrometer.webp",
    "lootArea": "Exodus",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 1,
        "component": {
          "id": "advanced-electrical-components",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/advanced-electrical-components.webp",
          "name": "Advanced Electrical Components",
          "rarity": "Rare",
          "item_type": "Refined Material",
          "description": "Used to craft a wide range of items. Can be recycled into crafting materials."
        }
      },
      {
        "quantity": 1,
        "component": {
          "id": "sensors-recipe",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/sensors-recipe.webp",
          "name": "Sensors",
          "rarity": "Rare",
          "item_type": "Topside Material",
          "description": "Used to craft utility items and explosives. Can be recycled into scrap metal."
        }
      }
    ],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "spring-cushion",
    "name": "Spring Cushion",
    "description": "Can be recycled into crafting materials.",
    "category": "Recyclables",
    "subcategory": "Recyclable",
    "rarity": "Rare",
    "value": 2000,
    "weight": 2,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/spring-cushion.webp",
    "lootArea": "Commercial, Residential",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 2,
        "component": {
          "id": "durable-cloth",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/durable-cloth.webp",
          "name": "Durable Cloth",
          "rarity": "Uncommon",
          "item_type": "Refined Material",
          "description": "Used to craft medical Supplies such as Herbal Bandage and Sterilized Bandage."
        }
      },
      {
        "quantity": 2,
        "component": {
          "id": "spring",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/spring.webp",
          "name": "Steel Spring",
          "rarity": "Uncommon",
          "item_type": "Topside Material",
          "description": "A tightly wound coil of metal. Used to craft a wide range of items. Can be recycled into scrap metal."
        }
      }
    ],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "surveyor-vault",
    "name": "Surveyor Vault",
    "description": "Can be recycled into crafting materials.",
    "category": "Recyclables",
    "subcategory": "Recyclable",
    "rarity": "Rare",
    "value": 2000,
    "weight": 1,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/surveyor-vault.webp",
    "lootArea": "ARC",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 2,
        "component": {
          "id": "arc-alloy",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/arc-alloy.webp",
          "name": "ARC Alloy",
          "rarity": "Uncommon",
          "item_type": "Topside Material",
          "description": "Obtained from ARC enemies or activities, or by recycling certain ARC parts. Used to craft components."
        }
      },
      {
        "quantity": 2,
        "component": {
          "id": "mechanical-components",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/mechanical-components.webp",
          "name": "Mechanical Components",
          "rarity": "Uncommon",
          "item_type": "Refined Material",
          "description": "Used to craft a wide range of items. Can be recycled into crafting materials."
        }
      }
    ],
    "droppedBy": [
      {
        "id": "1eeaf482-9324-4e0e-a4c5-f4c4952af64a",
        "arc": {
          "id": "rollbot",
          "icon": "https://unhbvkszwhczbjxgetgk.supabase.co/storage/v1/object/public/images/arc-raiders/icons/rollbot.webp",
          "name": "Surveyor",
          "description": "This is the largest of the rolling ARCs, a massive, spherical construct designed to dominate open ground. Its primary tactic is to stop periodically on the battlefield to transmit disruptive signals, acting as a massive relay for the ARC network. Be warned, however, its most unique (and dangerous) trait is its resilience: as it takes damage, its outer shell breaks apart into many smaller, armored pieces. Its final attack is a relentless one: it will roll directly at high speed toward any Raider it detects, essentially turning itself into a giant, high-impact bowling ball."
        },
        "arc_id": "rollbot",
        "created_at": "2025-11-04T16:36:31.267363+00:00"
      }
    ],
    "components": [],
    "usedIn": []
  },
  {
    "id": "telemetry-transceiver",
    "name": "Telemetry Transceiver",
    "description": "Can be recycled into crafting materials",
    "category": "Recyclables",
    "subcategory": "Recyclable",
    "rarity": "Rare",
    "value": 3000,
    "weight": 1.5,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/telemetry-transceiver.webp",
    "lootArea": "Exodus",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 1,
        "component": {
          "id": "advanced-electrical-components",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/advanced-electrical-components.webp",
          "name": "Advanced Electrical Components",
          "rarity": "Rare",
          "item_type": "Refined Material",
          "description": "Used to craft a wide range of items. Can be recycled into crafting materials."
        }
      },
      {
        "quantity": 1,
        "component": {
          "id": "processor",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/processor.webp",
          "name": "Processor",
          "rarity": "Rare",
          "item_type": "Topside Material",
          "description": "Used in crafting."
        }
      }
    ],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "thermostat",
    "name": "Thermostat",
    "description": "Can be recycled into crafting materials.",
    "category": "Recyclables",
    "subcategory": "Recyclable",
    "rarity": "Rare",
    "value": 1000,
    "weight": 2,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/thermostat.webp",
    "lootArea": "Residential",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 7,
        "component": {
          "id": "rubber-parts-recipe",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/rubber-parts-recipe.webp",
          "name": "Rubber Parts",
          "rarity": "Common",
          "item_type": "Basic Material",
          "description": "Used to craft a wide range of items."
        }
      },
      {
        "quantity": 1,
        "component": {
          "id": "sensors-recipe",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/sensors-recipe.webp",
          "name": "Sensors",
          "rarity": "Rare",
          "item_type": "Topside Material",
          "description": "Used to craft utility items and explosives. Can be recycled into scrap metal."
        }
      }
    ],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "toaster",
    "name": "Toaster",
    "description": "Can be recycled into crafting materials.",
    "category": "Recyclables",
    "subcategory": "Recyclable",
    "rarity": "Rare",
    "value": 1000,
    "weight": 2,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/toaster.webp",
    "lootArea": "Residential",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 5,
        "component": {
          "id": "plastic-parts",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/plastic-parts.webp",
          "name": "Plastic Parts",
          "rarity": "Common",
          "item_type": "Basic Material",
          "description": "Used to craft a wide range of items."
        }
      },
      {
        "quantity": 3,
        "component": {
          "id": "wires-recipe",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/wires-recipe.webp",
          "name": "Wires",
          "rarity": "Uncommon",
          "item_type": "Topside Material",
          "description": "A bundle of old wires. Used to craft a wide range of items. Can be recycled into scrap metal."
        }
      }
    ],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "torn-blanket",
    "name": "Torn Blanket",
    "description": "A tattered piece of cloth.",
    "category": "Recyclables",
    "subcategory": "Recyclable",
    "rarity": "Rare",
    "value": 640,
    "weight": 2,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/torn-blanket.webp",
    "lootArea": "Residential, Medical",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 12,
        "component": {
          "id": "fabric",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/fabric.webp",
          "name": "Fabric",
          "rarity": "Common",
          "item_type": "Basic Material",
          "description": "Used to craft medical supplies and shields."
        }
      }
    ],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "turbo-pump",
    "name": "Turbo Pump",
    "description": "Can be recycled into crafting materials.",
    "category": "Recyclables",
    "subcategory": "Recyclable",
    "rarity": "Rare",
    "value": 2000,
    "weight": 3,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/turbo-pump.webp",
    "lootArea": "Exodus",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 1,
        "component": {
          "id": "mechanical-components",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/mechanical-components.webp",
          "name": "Mechanical Components",
          "rarity": "Uncommon",
          "item_type": "Refined Material",
          "description": "Used to craft a wide range of items. Can be recycled into crafting materials."
        }
      },
      {
        "quantity": 3,
        "component": {
          "id": "oil",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/oil.webp",
          "name": "Oil",
          "rarity": "Uncommon",
          "item_type": "Topside Material",
          "description": "Used to craft weapons and explosives. Can be recycled into chemicals."
        }
      }
    ],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "unusable-weapon",
    "name": "Unusable Weapon",
    "description": "Can be recycled into crafting materials.",
    "category": "Recyclables",
    "subcategory": "Recyclable",
    "rarity": "Rare",
    "value": 2000,
    "weight": 3,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/unusable-weapon.webp",
    "lootArea": "Security",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 4,
        "component": {
          "id": "metal-parts",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/metal-parts.webp",
          "name": "Metal Parts",
          "rarity": "Common",
          "item_type": "Basic Material",
          "description": "Used to craft a wide range of items."
        }
      }
    ],
    "droppedBy": [],
    "components": [
      {
        "quantity": 5,
        "component": {
          "id": "simple-gun-parts",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/simple-gun-parts.webp",
          "name": "Simple Gun Parts",
          "rarity": "Uncommon",
          "item_type": "Topside Material"
        }
      }
    ],
    "usedIn": []
  },
  {
    "id": "wasp-driver",
    "name": "Wasp Driver",
    "description": "A control module used to operate Wasp drones or vehicles. Can be recycled into ARC Alloy.",
    "category": "Recyclables",
    "subcategory": "Recyclable",
    "rarity": "Rare",
    "value": 1000,
    "weight": 0.6,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/wasp-driver.webp",
    "lootArea": "ARC",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 1,
        "component": {
          "id": "arc-alloy",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/arc-alloy.webp",
          "name": "ARC Alloy",
          "rarity": "Uncommon",
          "item_type": "Topside Material",
          "description": "Obtained from ARC enemies or activities, or by recycling certain ARC parts. Used to craft components."
        }
      },
      {
        "quantity": 1,
        "component": {
          "id": "electrical-components",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/electrical-components.webp",
          "name": "Electrical Components",
          "rarity": "Uncommon",
          "item_type": "Refined Material",
          "description": "Used to craft a wide range of items. Can be recycled into crafting materials."
        }
      }
    ],
    "droppedBy": [
      {
        "id": "234959b5-6434-41ed-a8ad-776e3e815c60",
        "arc": {
          "id": "wasp",
          "icon": "https://unhbvkszwhczbjxgetgk.supabase.co/storage/v1/object/public/images/arc-raiders/icons/wasp.webp",
          "name": "Wasp",
          "description": "This is the Wasp, a baseline enemy drone that poses a threat through sheer numbers. It is a small, unarmored flyer that peppers Raiders with light-caliber ammunition. You'll almost never encounter a Wasp alone; they operate in tight patrols alongside other Wasps or as escorts for their more dangerous counterpart, the Hornet. The moment it turns aggressive, look for a small red laser to lock onto you for one second—that's your cue to dodge before it unleashes a quick 1.5-second burst of gunfire."
        },
        "arc_id": "wasp",
        "created_at": "2025-11-04T00:46:26.731323+00:00"
      }
    ],
    "components": [],
    "usedIn": []
  },
  {
    "id": "water-filter",
    "name": "Water Filter",
    "description": "Can be recycled into crafting materials.",
    "category": "Recyclables",
    "subcategory": "Recyclable",
    "rarity": "Rare",
    "value": 1000,
    "weight": 2,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/water-filter.webp",
    "lootArea": "Industrial",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 3,
        "component": {
          "id": "canister",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/canister.webp",
          "name": "Canister",
          "rarity": "Uncommon",
          "item_type": "Topside Material",
          "description": "Used to craft a wide range of items. Can be recycled into plastic."
        }
      },
      {
        "quantity": 2,
        "component": {
          "id": "rubber-parts-recipe",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/rubber-parts-recipe.webp",
          "name": "Rubber Parts",
          "rarity": "Common",
          "item_type": "Basic Material",
          "description": "Used to craft a wide range of items."
        }
      }
    ],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "water-pump",
    "name": "Water Pump",
    "description": "Can be recycled into crafting materials.",
    "category": "Recyclables",
    "subcategory": "Recyclable",
    "rarity": "Rare",
    "value": 1000,
    "weight": 2,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/water-pump.webp",
    "lootArea": "Mechanical, Industrial",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 4,
        "component": {
          "id": "metal-parts",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/metal-parts.webp",
          "name": "Metal Parts",
          "rarity": "Common",
          "item_type": "Basic Material",
          "description": "Used to craft a wide range of items."
        }
      },
      {
        "quantity": 2,
        "component": {
          "id": "oil",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/oil.webp",
          "name": "Oil",
          "rarity": "Uncommon",
          "item_type": "Topside Material",
          "description": "Used to craft weapons and explosives. Can be recycled into chemicals."
        }
      }
    ],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "broken-handcuffs",
    "name": "Broken Handcuffs",
    "description": "Can be recycled into crafting materials.",
    "category": "Recyclables",
    "subcategory": "Recyclable",
    "rarity": "Uncommon",
    "value": 270,
    "weight": 0.8,
    "stackSize": 5,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/broken-handcuffs.webp",
    "lootArea": "Security",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "burned-arc-circuitry",
    "name": "Burned ARC Circuitry",
    "description": "Can be recycled into crafting materials.",
    "category": "Recyclables",
    "subcategory": "Recyclable",
    "rarity": "Uncommon",
    "value": 640,
    "weight": 1,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/burned-arc-circuitry.webp",
    "lootArea": "ARC",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 2,
        "component": {
          "id": "arc-alloy",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/arc-alloy.webp",
          "name": "ARC Alloy",
          "rarity": "Uncommon",
          "item_type": "Topside Material",
          "description": "Obtained from ARC enemies or activities, or by recycling certain ARC parts. Used to craft components."
        }
      }
    ],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "camera-lens",
    "name": "Camera Lens",
    "description": "Can be recycled into crafting materials.",
    "category": "Recyclables",
    "subcategory": "Recyclable",
    "rarity": "Uncommon",
    "value": 640,
    "weight": 0.8,
    "stackSize": 5,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/camera-lens.webp",
    "lootArea": "Security",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 8,
        "component": {
          "id": "plastic-parts",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/plastic-parts.webp",
          "name": "Plastic Parts",
          "rarity": "Common",
          "item_type": "Basic Material",
          "description": "Used to craft a wide range of items."
        }
      }
    ],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "candle-holder",
    "name": "Candle Holder",
    "description": "Can be recycled into crafting materials.",
    "category": "Recyclables",
    "subcategory": "Recyclable",
    "rarity": "Uncommon",
    "value": 640,
    "weight": 2,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/candle-holder.webp",
    "lootArea": "Residential",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 8,
        "component": {
          "id": "metal-parts",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/metal-parts.webp",
          "name": "Metal Parts",
          "rarity": "Common",
          "item_type": "Basic Material",
          "description": "Used to craft a wide range of items."
        }
      }
    ],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "crumpled-plastic-bottle",
    "name": "Crumpled Plastic Bottle",
    "description": "Can be recycled into plastic parts.",
    "category": "Recyclables",
    "subcategory": "Recyclable",
    "rarity": "Uncommon",
    "value": 270,
    "weight": 0.8,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/crumpled-plastic-bottle.webp",
    "lootArea": "Residential",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 4,
        "component": {
          "id": "plastic-parts",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/plastic-parts.webp",
          "name": "Plastic Parts",
          "rarity": "Common",
          "item_type": "Basic Material",
          "description": "Used to craft a wide range of items."
        }
      }
    ],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "damaged-arc-motion-core",
    "name": "Damaged ARC Motion Core",
    "description": "Can be recycled into ARC Alloy.",
    "category": "Recyclables",
    "subcategory": "Recyclable",
    "rarity": "Uncommon",
    "value": 640,
    "weight": 0.25,
    "stackSize": 5,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/damaged-arc-motion-core.webp",
    "lootArea": "ARC",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 2,
        "component": {
          "id": "arc-alloy",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/arc-alloy.webp",
          "name": "ARC Alloy",
          "rarity": "Uncommon",
          "item_type": "Topside Material",
          "description": "Obtained from ARC enemies or activities, or by recycling certain ARC parts. Used to craft components."
        }
      }
    ],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "deflated-football",
    "name": "Deflated Football",
    "description": "Just by looking at this, you too start to feel slightly deflated.",
    "category": "Recyclables",
    "subcategory": "Recyclable",
    "rarity": "Uncommon",
    "value": 1000,
    "weight": 0.8,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/deflated-football.webp",
    "lootArea": "Residential",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 9,
        "component": {
          "id": "fabric",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/fabric.webp",
          "name": "Fabric",
          "rarity": "Common",
          "item_type": "Basic Material",
          "description": "Used to craft medical supplies and shields."
        }
      },
      {
        "quantity": 9,
        "component": {
          "id": "rubber-parts-recipe",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/rubber-parts-recipe.webp",
          "name": "Rubber Parts",
          "rarity": "Common",
          "item_type": "Basic Material",
          "description": "Used to craft a wide range of items."
        }
      }
    ],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "degraded-arc-rubber",
    "name": "Degraded ARC Rubber",
    "description": "Can be recycled into crafting materials.",
    "category": "Recyclables",
    "subcategory": "Recyclable",
    "rarity": "Uncommon",
    "value": 640,
    "weight": 1,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/degraded-arc-rubber.webp",
    "lootArea": "ARC",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 11,
        "component": {
          "id": "rubber-parts-recipe",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/rubber-parts-recipe.webp",
          "name": "Rubber Parts",
          "rarity": "Common",
          "item_type": "Basic Material",
          "description": "Used to craft a wide range of items."
        }
      }
    ],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "dried-out-arc-resin",
    "name": "Dried-Out ARC Resin",
    "description": "Obtained from ARC enemies or Activities. Can be recycled into plastic.",
    "category": "Recyclables",
    "subcategory": "Recyclable",
    "rarity": "Uncommon",
    "value": 640,
    "weight": 1,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/dried-out-arc-resin.webp",
    "lootArea": "ARC",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "fireball-burner",
    "name": "Fireball Burner",
    "description": "Can be recycled into ARC Alloy.",
    "category": "Recyclables",
    "subcategory": "Recyclable",
    "rarity": "Uncommon",
    "value": 640,
    "weight": 0.5,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/fireball-burner.webp",
    "lootArea": "ARC",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 1,
        "component": {
          "id": "arc-alloy",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/arc-alloy.webp",
          "name": "ARC Alloy",
          "rarity": "Uncommon",
          "item_type": "Topside Material",
          "description": "Obtained from ARC enemies or activities, or by recycling certain ARC parts. Used to craft components."
        }
      },
      {
        "quantity": 1,
        "component": {
          "id": "crude-explosives",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/crude-explosives.webp",
          "name": "Crude Explosives",
          "rarity": "Uncommon",
          "item_type": "Refined Material",
          "description": "Used to craft explosives. Can be recycled into crafting materials."
        }
      }
    ],
    "droppedBy": [
      {
        "id": "cdb0c4ab-c1af-47a1-b276-f4f6d8193e02",
        "arc": {
          "id": "fireball",
          "icon": "https://unhbvkszwhczbjxgetgk.supabase.co/storage/v1/object/public/images/arc-raiders/icons/fireball.webp",
          "name": "Fireball",
          "description": "A small armored rolling ARC that spits flame. Will open up it's front panel when near Raiders to burn them alive. While the front is open its soft unarmored core is exposed."
        },
        "arc_id": "fireball",
        "created_at": "2025-11-04T15:57:06.302102+00:00"
      }
    ],
    "components": [],
    "usedIn": [
      {
        "item": {
          "id": "flame-spray",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/flame-spray.webp",
          "name": "Flame Spray",
          "rarity": "Uncommon",
          "item_type": "Quick use",
          "description": "A classic makeshift weapon, sure to leave scorch marks."
        },
        "quantity": 1
      }
    ]
  },
  {
    "id": "garlic-press",
    "name": "Garlic Press",
    "description": "It'll press garlic, olives, and probably many other things.",
    "category": "Recyclables",
    "subcategory": "Recyclable",
    "rarity": "Uncommon",
    "value": 1000,
    "weight": 0.8,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/garlic-press.webp",
    "lootArea": "Commercial, Residential",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 12,
        "component": {
          "id": "metal-parts",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/metal-parts.webp",
          "name": "Metal Parts",
          "rarity": "Common",
          "item_type": "Basic Material",
          "description": "Used to craft a wide range of items."
        }
      }
    ],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "household-cleaner",
    "name": "Household Cleaner",
    "description": "Can be recycled into chemicals.",
    "category": "Recyclables",
    "subcategory": "Recyclable",
    "rarity": "Uncommon",
    "value": 640,
    "weight": 0.8,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/household-cleaner.webp",
    "lootArea": "Residential",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 11,
        "component": {
          "id": "chemicals",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/chemicals.webp",
          "name": "Chemicals",
          "rarity": "Common",
          "item_type": "Basic Material",
          "description": "Used to craft medical supplies, explosives, and utility items."
        }
      }
    ],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "ice-cream-scooper",
    "name": "Ice Cream Scooper",
    "description": "It is theorized that scooping things was a favorite pastime in the world before.",
    "category": "Recyclables",
    "subcategory": "Recyclable",
    "rarity": "Uncommon",
    "value": 640,
    "weight": 0.8,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/ice-cream-scooper.webp",
    "lootArea": "Commercial",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 7,
        "component": {
          "id": "metal-parts",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/metal-parts.webp",
          "name": "Metal Parts",
          "rarity": "Common",
          "item_type": "Basic Material",
          "description": "Used to craft a wide range of items."
        }
      }
    ],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "impure-arc-coolant",
    "name": "Impure ARC Coolant",
    "description": "Obtained from ARC enemies or activities. Can be recycled into chemicals.",
    "category": "Recyclables",
    "subcategory": "Recyclable",
    "rarity": "Uncommon",
    "value": 640,
    "weight": 1,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/impure-arc-coolant.webp",
    "lootArea": "ARC",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 12,
        "component": {
          "id": "chemicals",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/chemicals.webp",
          "name": "Chemicals",
          "rarity": "Common",
          "item_type": "Basic Material",
          "description": "Used to craft medical supplies, explosives, and utility items."
        }
      }
    ],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "metal-brackets",
    "name": "Metal Brackets",
    "description": "Can be recycled into metal parts.",
    "category": "Recyclables",
    "subcategory": "Recyclable",
    "rarity": "Uncommon",
    "value": 640,
    "weight": 0.8,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/metal-brackets.webp",
    "lootArea": "Mechanical, Electrical",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 8,
        "component": {
          "id": "metal-parts",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/metal-parts.webp",
          "name": "Metal Parts",
          "rarity": "Common",
          "item_type": "Basic Material",
          "description": "Used to craft a wide range of items."
        }
      }
    ],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "number-plate",
    "name": "Number Plate",
    "description": "Can be recycled into metal parts.",
    "category": "Recyclables",
    "subcategory": "Recyclable",
    "rarity": "Uncommon",
    "value": 80,
    "weight": 0.8,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/number-plate.webp",
    "lootArea": "Mechanical",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 3,
        "component": {
          "id": "metal-parts",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/metal-parts.webp",
          "name": "Metal Parts",
          "rarity": "Common",
          "item_type": "Basic Material",
          "description": "Used to craft a wide range of items."
        }
      }
    ],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "ripped-safety-vest",
    "name": "Ripped Safety Vest",
    "description": "A remnant of a time long lost, when it was fashionable to stand out.",
    "category": "Recyclables",
    "subcategory": "Recyclable",
    "rarity": "Uncommon",
    "value": 1000,
    "weight": 0.8,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/ripped-safety-vest.webp",
    "lootArea": "Industrial",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 1,
        "component": {
          "id": "durable-cloth",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/durable-cloth.webp",
          "name": "Durable Cloth",
          "rarity": "Uncommon",
          "item_type": "Refined Material",
          "description": "Used to craft medical Supplies such as Herbal Bandage and Sterilized Bandage."
        }
      },
      {
        "quantity": 1,
        "component": {
          "id": "magnet",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/magnet.webp",
          "name": "Magnet",
          "rarity": "Uncommon",
          "item_type": "Topside Material",
          "description": "Fun thing to put on a fridgerator."
        }
      }
    ],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "ruined-baton",
    "name": "Ruined Baton",
    "description": "Can be recycled into crafting materials.",
    "category": "Recyclables",
    "subcategory": "Recyclable",
    "rarity": "Uncommon",
    "value": 640,
    "weight": 0.8,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/ruined-baton.webp",
    "lootArea": "Security",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 6,
        "component": {
          "id": "metal-parts",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/metal-parts.webp",
          "name": "Metal Parts",
          "rarity": "Common",
          "item_type": "Basic Material",
          "description": "Used to craft a wide range of items."
        }
      },
      {
        "quantity": 3,
        "component": {
          "id": "rubber-parts-recipe",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/rubber-parts-recipe.webp",
          "name": "Rubber Parts",
          "rarity": "Common",
          "item_type": "Basic Material",
          "description": "Used to craft a wide range of items."
        }
      }
    ],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "ruined-handcuffs",
    "name": "Ruined Handcuffs",
    "description": "Can be recycled into crafting materials.",
    "category": "Recyclables",
    "subcategory": "Recyclable",
    "rarity": "Uncommon",
    "value": 640,
    "weight": 0.8,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/ruined-handcuffs.webp",
    "lootArea": "Security",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 8,
        "component": {
          "id": "metal-parts",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/metal-parts.webp",
          "name": "Metal Parts",
          "rarity": "Common",
          "item_type": "Basic Material",
          "description": "Used to craft a wide range of items."
        }
      }
    ],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "ruined-parachute",
    "name": "Ruined Parachute",
    "description": "Can be recycled into crafting materials.",
    "category": "Recyclables",
    "subcategory": "Recyclable",
    "rarity": "Uncommon",
    "value": 640,
    "weight": 0.8,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/ruined-parachute.webp",
    "lootArea": "Exodus",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 10,
        "component": {
          "id": "fabric",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/fabric.webp",
          "name": "Fabric",
          "rarity": "Common",
          "item_type": "Basic Material",
          "description": "Used to craft medical supplies and shields."
        }
      }
    ],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "ruined-tactical-vest",
    "name": "Ruined Tactical Vest",
    "description": "Can be recycled into crafting materials.",
    "category": "Recyclables",
    "subcategory": "Recyclable",
    "rarity": "Uncommon",
    "value": 640,
    "weight": 0.8,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/ruined-tactical-vest.webp",
    "lootArea": "Security",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 5,
        "component": {
          "id": "fabric",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/fabric.webp",
          "name": "Fabric",
          "rarity": "Common",
          "item_type": "Basic Material",
          "description": "Used to craft medical supplies and shields."
        }
      },
      {
        "quantity": 1,
        "component": {
          "id": "magnet",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/magnet.webp",
          "name": "Magnet",
          "rarity": "Uncommon",
          "item_type": "Topside Material",
          "description": "Fun thing to put on a fridgerator."
        }
      }
    ],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "rusted-bolts",
    "name": "Rusted Bolts",
    "description": "Some rusted old bolts",
    "category": "Recyclables",
    "subcategory": "Recyclable",
    "rarity": "Uncommon",
    "value": 640,
    "weight": 0.8,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/rusted-bolts.webp",
    "lootArea": "Industrial, Mechanical",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 8,
        "component": {
          "id": "metal-parts",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/metal-parts.webp",
          "name": "Metal Parts",
          "rarity": "Common",
          "item_type": "Basic Material",
          "description": "Used to craft a wide range of items."
        }
      }
    ],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "rusty-arc-steel",
    "name": "Rusty ARC Steel",
    "description": "Obtained from ARC enemies and activities. Can be recycled into scrap metal.",
    "category": "Recyclables",
    "subcategory": "Recyclable",
    "rarity": "Uncommon",
    "value": 640,
    "weight": 1,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/rusty-arc-steel.webp",
    "lootArea": "ARC",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "shredder-gyro",
    "name": "Shredder Gyro",
    "description": "Can be recycled into crafting materials.",
    "category": "Recyclables",
    "subcategory": "Recyclable",
    "rarity": "Uncommon",
    "value": 3000,
    "weight": 1,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/shredder-gyro.webp",
    "lootArea": "ARC",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 3,
        "component": {
          "id": "arc-alloy",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/arc-alloy.webp",
          "name": "ARC Alloy",
          "rarity": "Uncommon",
          "item_type": "Topside Material",
          "description": "Obtained from ARC enemies or activities, or by recycling certain ARC parts. Used to craft components."
        }
      },
      {
        "quantity": 3,
        "component": {
          "id": "mechanical-components",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/mechanical-components.webp",
          "name": "Mechanical Components",
          "rarity": "Uncommon",
          "item_type": "Refined Material",
          "description": "Used to craft a wide range of items. Can be recycled into crafting materials."
        }
      }
    ],
    "droppedBy": [
      {
        "id": "e282e49c-6e9f-46d9-904f-f6d8ca7557a2",
        "arc": {
          "id": "shredder",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/shredder.webp",
          "name": "Shredder",
          "description": "When this relentless lump of menace was first encountered at the Stella Montis facility, it left behind a trail of downed Raiders. It was dubbed the \"Shredder\" by what few Raiders managed to get back to safety; a name that wasn't so much clever as it was painfully literal."
        },
        "arc_id": "shredder",
        "created_at": "2025-11-14T18:52:50.636795+00:00"
      }
    ],
    "components": [],
    "usedIn": []
  },
  {
    "id": "snitch-scanner",
    "name": "Snitch Scanner",
    "description": "Gathered from ARC Snitches. Can be recycled into ARC Alloy.",
    "category": "Recyclables",
    "subcategory": "Recyclable",
    "rarity": "Uncommon",
    "value": 2000,
    "weight": 0.75,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/snitch-scanner.webp",
    "lootArea": "ARC",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 1,
        "component": {
          "id": "arc-alloy",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/arc-alloy.webp",
          "name": "ARC Alloy",
          "rarity": "Uncommon",
          "item_type": "Topside Material",
          "description": "Obtained from ARC enemies or activities, or by recycling certain ARC parts. Used to craft components."
        }
      },
      {
        "quantity": 2,
        "component": {
          "id": "electrical-components",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/electrical-components.webp",
          "name": "Electrical Components",
          "rarity": "Uncommon",
          "item_type": "Refined Material",
          "description": "Used to craft a wide range of items. Can be recycled into crafting materials."
        }
      }
    ],
    "droppedBy": [
      {
        "id": "1b1cfcef-da95-49a3-b563-65f614904f2f",
        "arc": {
          "id": "snitch",
          "icon": "https://unhbvkszwhczbjxgetgk.supabase.co/storage/v1/object/public/images/arc-raiders/icons/snitch.webp",
          "name": "Snitch",
          "description": "This little flyer is a swift and unarmored scout drone, often identifiable by its cluster of three rotors. While individually fragile, its primary danger is its role as an aerial alarm system. Once it spots Raiders, it immediately triggers a wide-band signal, effectively calling in a wave of flying ARC reinforcements—usually a swarm of Wasps or Hornets—to descend on your position. Taking it out before it completes its transmission is essential, as its light frame means a single, well-aimed burst will shatter it."
        },
        "arc_id": "snitch",
        "created_at": "2025-11-04T16:36:02.882962+00:00"
      }
    ],
    "components": [],
    "usedIn": []
  },
  {
    "id": "spotter-relay",
    "name": "Spotter Relay",
    "description": "Can be recycled into crafting materials",
    "category": "Recyclables",
    "subcategory": "Recyclable",
    "rarity": "Uncommon",
    "value": 2000,
    "weight": 1,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/spotter-relay.webp",
    "lootArea": "ARC",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 1,
        "component": {
          "id": "arc-alloy",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/arc-alloy.webp",
          "name": "ARC Alloy",
          "rarity": "Uncommon",
          "item_type": "Topside Material",
          "description": "Obtained from ARC enemies or activities, or by recycling certain ARC parts. Used to craft components."
        }
      },
      {
        "quantity": 2,
        "component": {
          "id": "electrical-components",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/electrical-components.webp",
          "name": "Electrical Components",
          "rarity": "Uncommon",
          "item_type": "Refined Material",
          "description": "Used to craft a wide range of items. Can be recycled into crafting materials."
        }
      }
    ],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "tattered-arc-lining",
    "name": "Tattered ARC Lining",
    "description": "Obtained from ARC enemies or activities. Can be recycled into fabric.",
    "category": "Recyclables",
    "subcategory": "Recyclable",
    "rarity": "Uncommon",
    "value": 640,
    "weight": 1,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/tattered-arc-lining.webp",
    "lootArea": "ARC",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 12,
        "component": {
          "id": "fabric",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/fabric.webp",
          "name": "Fabric",
          "rarity": "Common",
          "item_type": "Basic Material",
          "description": "Used to craft medical supplies and shields."
        }
      }
    ],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "tattered-clothes",
    "name": "Tattered Clothes",
    "description": "Can be recycled into fabric.",
    "category": "Recyclables",
    "subcategory": "Recyclable",
    "rarity": "Uncommon",
    "value": 640,
    "weight": 0.8,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/tattered-clothes.webp",
    "lootArea": "Residential",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 11,
        "component": {
          "id": "fabric",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/fabric.webp",
          "name": "Fabric",
          "rarity": "Common",
          "item_type": "Basic Material",
          "description": "Used to craft medical supplies and shields."
        }
      }
    ],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "tick-pod",
    "name": "Tick Pod",
    "description": "The explosive pod from a Tick. Can be recycled into ARC Alloy.",
    "category": "Recyclables",
    "subcategory": "Recyclable",
    "rarity": "Uncommon",
    "value": 640,
    "weight": 0.5,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/tick-pod.webp",
    "lootArea": "ARC",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 2,
        "component": {
          "id": "arc-alloy",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/arc-alloy.webp",
          "name": "ARC Alloy",
          "rarity": "Uncommon",
          "item_type": "Topside Material",
          "description": "Obtained from ARC enemies or activities, or by recycling certain ARC parts. Used to craft components."
        }
      },
      {
        "quantity": 2,
        "component": {
          "id": "chemicals",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/chemicals.webp",
          "name": "Chemicals",
          "rarity": "Common",
          "item_type": "Basic Material",
          "description": "Used to craft medical supplies, explosives, and utility items."
        }
      }
    ],
    "droppedBy": [
      {
        "id": "8dcbd3b6-b1bb-4d3c-ae44-c7e3b6ab34de",
        "arc": {
          "id": "tick",
          "icon": "https://unhbvkszwhczbjxgetgk.supabase.co/storage/v1/object/public/images/arc-raiders/icons/tick.webp",
          "name": "Tick",
          "description": "This terrifying enemy, often called the Tick, is a small, unarmored ARC that specializes in the perfect ambush. It uses dark, indoor spaces—particularly the undersides of ceilings and dark corners of walls—as its hunting ground. It waits in absolute stillness until a Raider passes underneath. Then, without warning, it lunges for your head, aiming to latch directly onto your face or helmet. Once attached, it relentlessly drains your health and shield meter simultaneously. The panic is compounded by the fact that you must hold the [Interact] button to forcibly pry the parasite off, an agonizing process that leaves you exposed to other threats."
        },
        "arc_id": "tick",
        "created_at": "2025-10-08T15:31:30.012249+00:00"
      }
    ],
    "components": [],
    "usedIn": []
  },
  {
    "id": "damaged-arc-powercell",
    "name": "Damaged ARC Powercell",
    "description": "Can be recycled into crafting materials.",
    "category": "Recyclables",
    "subcategory": "Recyclable",
    "rarity": "Common",
    "value": 293,
    "weight": 0.25,
    "stackSize": 5,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/damaged-arc-powercell.webp",
    "lootArea": "ARC",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 1,
        "component": {
          "id": "arc-alloy",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/arc-alloy.webp",
          "name": "ARC Alloy",
          "rarity": "Uncommon",
          "item_type": "Topside Material",
          "description": "Obtained from ARC enemies or activities, or by recycling certain ARC parts. Used to craft components."
        }
      }
    ],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "damaged-fireball-burner",
    "name": "Damaged Fireball Burner",
    "description": "Can be recycled into crafting materials.",
    "category": "Recyclables",
    "subcategory": "Recyclable",
    "rarity": "Common",
    "value": 270,
    "weight": 1,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/damaged-fireball-burner.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 1,
        "component": {
          "id": "arc-alloy",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/arc-alloy.webp",
          "name": "ARC Alloy",
          "rarity": "Uncommon",
          "item_type": "Topside Material",
          "description": "Obtained from ARC enemies or activities, or by recycling certain ARC parts. Used to craft components."
        }
      }
    ],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "danaged-hornet-driver",
    "name": "Damaged Hornet Driver",
    "description": "Can be recycled into crafting materials",
    "category": "Recyclables",
    "subcategory": "Recyclable",
    "rarity": "Common",
    "value": 640,
    "weight": 0.3,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/danaged.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "damaged-rocketeer-part",
    "name": "Damaged Rocketeer Driver",
    "description": "Can be recycled into ARC Alloy.",
    "category": "Recyclables",
    "subcategory": "Recyclable",
    "rarity": "Common",
    "value": 2000,
    "weight": 0.25,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/damaged-rocketeer-part.webp",
    "lootArea": "ARC",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 3,
        "component": {
          "id": "arc-alloy",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/arc-alloy.webp",
          "name": "ARC Alloy",
          "rarity": "Uncommon",
          "item_type": "Topside Material",
          "description": "Obtained from ARC enemies or activities, or by recycling certain ARC parts. Used to craft components."
        }
      }
    ],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "damaged-tick-pod",
    "name": "Damaged Tick Pod",
    "description": "Can be recycled into crafting materials",
    "category": "Recyclables",
    "subcategory": "Recyclable",
    "rarity": "Common",
    "value": 270,
    "weight": 0.25,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/damaged-tick-pod.webp",
    "lootArea": "ARC",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 1,
        "component": {
          "id": "arc-alloy",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/arc-alloy.webp",
          "name": "ARC Alloy",
          "rarity": "Uncommon",
          "item_type": "Topside Material",
          "description": "Obtained from ARC enemies or activities, or by recycling certain ARC parts. Used to craft components."
        }
      }
    ],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "damaged-wasp-driver",
    "name": "Damaged Wasp Driver",
    "description": "Can be recycled into crafting materials.",
    "category": "Recyclables",
    "subcategory": "Recyclable",
    "rarity": "Common",
    "value": 270,
    "weight": 0.25,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/damaged-wasp-driver.webp",
    "lootArea": "ARC",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 1,
        "component": {
          "id": "arc-alloy",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/arc-alloy.webp",
          "name": "ARC Alloy",
          "rarity": "Uncommon",
          "item_type": "Topside Material",
          "description": "Obtained from ARC enemies or activities, or by recycling certain ARC parts. Used to craft components."
        }
      }
    ],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "pop-trigger",
    "name": "Pop Trigger",
    "description": "Can be recycled into crafting materials.",
    "category": "Recyclables",
    "subcategory": "Recyclable",
    "rarity": "Common",
    "value": 640,
    "weight": 0.5,
    "stackSize": 3,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/pop-trigger.webp",
    "lootArea": "ARC",
    "workbench": null,
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 1,
        "component": {
          "id": "arc-alloy",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/arc-alloy.webp",
          "name": "ARC Alloy",
          "rarity": "Uncommon",
          "item_type": "Topside Material",
          "description": "Obtained from ARC enemies or activities, or by recycling certain ARC parts. Used to craft components."
        }
      },
      {
        "quantity": 1,
        "component": {
          "id": "crude-explosives",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/crude-explosives.webp",
          "name": "Crude Explosives",
          "rarity": "Uncommon",
          "item_type": "Refined Material",
          "description": "Used to craft explosives. Can be recycled into crafting materials."
        }
      }
    ],
    "droppedBy": [
      {
        "id": "db5d94bd-0fae-4c8a-b0ee-be1312118ec8",
        "arc": {
          "id": "pop",
          "icon": "https://unhbvkszwhczbjxgetgk.supabase.co/storage/v1/object/public/images/arc-raiders/icons/pop.webp",
          "name": "Pop",
          "description": "This little menace is a Fireball ARC—a small, unarmored rolling unit that hides its true potential. It operates by rapidly closing the distance, looking like nothing more than a simple, harmless sphere until it's right on top of you. Once a Raider is nearby, it snaps open its side panels to reveal twin flamethrowers, quickly bathing the area in fire and burning targets to a crisp. It's a close-range ambush specialist designed to punish anyone caught off-guard."
        },
        "arc_id": "pop",
        "created_at": "2025-11-04T16:00:06.760318+00:00"
      }
    ],
    "components": [],
    "usedIn": []
  },
  {
    "id": "ruined-augment",
    "name": "Ruined Augment",
    "description": "An augment ruined beyond repair",
    "category": "Recyclables",
    "subcategory": "Recyclable",
    "rarity": "Common",
    "value": 270,
    "weight": 3,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/ruined-augment.webp",
    "lootArea": "Unknown",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [],
    "components": [],
    "usedIn": []
  },
  {
    "id": "leaper-pulse-unit",
    "name": "Leaper Pulse Unit",
    "description": "Can be thrown to create a violent singularity",
    "category": "Throwables",
    "subcategory": "Throwable",
    "rarity": "Epic",
    "value": 5000,
    "weight": 1,
    "stackSize": 1,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/leaper-pulse-unit.webp",
    "lootArea": "ARC",
    "workbench": null,
    "uses": null,
    "recycleComponents": [],
    "droppedBy": [
      {
        "id": "6192a3c2-1174-4157-a291-2886a4a01fcc",
        "arc": {
          "id": "bison",
          "icon": "https://unhbvkszwhczbjxgetgk.supabase.co/storage/v1/object/public/images/arc-raiders/icons/bison.webp",
          "name": "Leaper",
          "description": "This isn't just an ARC; it's a massive, arachnid-like siege engine. Its heavy armor gives it a hulking, near-indestructible presence on the battlefield, but don't mistake its bulk for sluggishness. This mechanized spider possesses an unnerving, gravity-defying ability to leap vast distances. Reports confirm it has been seen clearing impossible gaps, even bounding effortlessly to the summit of a Spaceport tower. It's a vertical threat you can't simply hide from."
        },
        "arc_id": "bison",
        "created_at": "2025-11-04T15:59:19.422889+00:00"
      }
    ],
    "components": [],
    "usedIn": []
  },
  {
    "id": "blaze-grenade",
    "name": "Blaze Grenade",
    "description": "A grenade that detonates on impact, covering an area in fire that deals damage over time.",
    "category": "Throwables",
    "subcategory": "Throwable",
    "rarity": "Rare",
    "value": 1600,
    "weight": 0.2,
    "stackSize": 5,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/blaze-grenade.webp",
    "lootArea": "Unknown",
    "workbench": "Explosive Bench 3",
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 4,
        "component": {
          "id": "metal-parts",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/metal-parts.webp",
          "name": "Metal Parts",
          "rarity": "Common",
          "item_type": "Basic Material",
          "description": "Used to craft a wide range of items."
        }
      },
      {
        "quantity": 2,
        "component": {
          "id": "oil",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/oil.webp",
          "name": "Oil",
          "rarity": "Uncommon",
          "item_type": "Topside Material",
          "description": "Used to craft weapons and explosives. Can be recycled into chemicals."
        }
      }
    ],
    "droppedBy": [],
    "components": [
      {
        "quantity": 2,
        "component": {
          "id": "oil",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/oil.webp",
          "name": "Oil",
          "rarity": "Uncommon",
          "item_type": "Topside Material"
        }
      },
      {
        "quantity": 7,
        "component": {
          "id": "metal-parts",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/metal-parts.webp",
          "name": "Metal Parts",
          "rarity": "Common",
          "item_type": "Basic Material"
        }
      }
    ],
    "usedIn": []
  },
  {
    "id": "showstopper",
    "name": "Showstopper",
    "description": "A grenade that detonates after a delay, stunning enemies within its radius.",
    "category": "Throwables",
    "subcategory": "Throwable",
    "rarity": "Rare",
    "value": 2200,
    "weight": 0.4,
    "stackSize": 5,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/showstopper.webp",
    "lootArea": "Unknown",
    "workbench": "Explosives Bench III",
    "uses": null,
    "recycleComponents": [
      {
        "quantity": 2,
        "component": {
          "id": "battery",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/battery.webp",
          "name": "Battery",
          "rarity": "Uncommon",
          "item_type": "Topside Material",
          "description": "Used to craft medical supplies. Can be recycled into scrap metal."
        }
      },
      {
        "quantity": 1,
        "component": {
          "id": "electrical-components",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/electrical-components.webp",
          "name": "Electrical Components",
          "rarity": "Uncommon",
          "item_type": "Refined Material",
          "description": "Used to craft a wide range of items. Can be recycled into crafting materials."
        }
      }
    ],
    "droppedBy": [],
    "components": [
      {
        "quantity": 1,
        "component": {
          "id": "advanced-electrical-components",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/advanced-electrical-components.webp",
          "name": "Advanced Electrical Components",
          "rarity": "Rare",
          "item_type": "Refined Material"
        }
      },
      {
        "quantity": 1,
        "component": {
          "id": "voltage-converter",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/voltage-converter.webp",
          "name": "Voltage Converter",
          "rarity": "Rare",
          "item_type": "Topside Material"
        }
      }
    ],
    "usedIn": []
  },
  {
    "id": "shrapnel-grenade",
    "name": "Shrapnel Grenade",
    "description": "A makeshift fuze grenade that bursts into razor-sharp fragments upon detonation.",
    "category": "Throwables",
    "subcategory": "Throwable",
    "rarity": "Uncommon",
    "value": 800,
    "weight": 0.15,
    "stackSize": 5,
    "icon": "https://cdn.metaforge.app/arc-raiders/icons/shrapnel-grenade.webp",
    "lootArea": "Unknown",
    "workbench": "Explosives Bench",
    "uses": "Weak against ARC armor plating.",
    "recycleComponents": [
      {
        "quantity": 1,
        "component": {
          "id": "crude-explosives",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/crude-explosives.webp",
          "name": "Crude Explosives",
          "rarity": "Uncommon",
          "item_type": "Refined Material",
          "description": "Used to craft explosives. Can be recycled into crafting materials."
        }
      },
      {
        "quantity": 1,
        "component": {
          "id": "metal-parts",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/metal-parts.webp",
          "name": "Metal Parts",
          "rarity": "Common",
          "item_type": "Basic Material",
          "description": "Used to craft a wide range of items."
        }
      }
    ],
    "droppedBy": [],
    "components": [
      {
        "quantity": 1,
        "component": {
          "id": "crude-explosives",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/crude-explosives.webp",
          "name": "Crude Explosives",
          "rarity": "Uncommon",
          "item_type": "Refined Material"
        }
      },
      {
        "quantity": 2,
        "component": {
          "id": "spring",
          "icon": "https://cdn.metaforge.app/arc-raiders/icons/spring.webp",
          "name": "Steel Spring",
          "rarity": "Uncommon",
          "item_type": "Topside Material"
        }
      }
    ],
    "usedIn": []
  }
];

export const LOOT_CATEGORIES = [
  "Ammo",
  "Blueprints",
  "Collectibles",
  "Equipment",
  "Keys",
  "Materials",
  "Medical",
  "Mods",
  "Other",
  "Recyclables",
  "Throwables"
];

export const LOOT_RARITIES = [
  "Legendary",
  "Epic",
  "Rare",
  "Uncommon",
  "Common"
];

export const CATEGORY_STATS = {
  "Ammo": 6,
  "Blueprints": 85,
  "Collectibles": 53,
  "Equipment": 17,
  "Keys": 26,
  "Materials": 56,
  "Medical": 43,
  "Mods": 37,
  "Other": 1,
  "Recyclables": 112,
  "Throwables": 4
};

export const RARITY_STATS = {
  "Rare": 134,
  "Common": 88,
  "Legendary": 90,
  "Epic": 35,
  "Uncommon": 93
};
