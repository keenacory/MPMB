var iFileName = "Eldritch_Hunt_Magic_Items.js";
RequiredSheetVersion("14.0.0");
SourceList.TW = {
    name: "Steinhardt's Guide to the Eldritch Hunt: Trick Weapons",
    abbreviation: "TW",
    abbreviationSpellsheet: "TW",
    group: "3rd Party Campaign Sourcebooks",
    date: "2026/02/19",
};

//Ammo List
AmmoList["lead bullets"] = {
    name: "Bullets, Lead",
    infoname: "Bullets, Lead [1 gp]",
    source: [
        ["TW", 208]
    ],
    icon: "Bullets",
    invName: "Lead bullets",
    weight: 0.1,
	toNotesPage: [{
        name: "Lead Bullets",
        note: "The lead bullet is the default ammunition for every firearm, unless stated otherwise. The lead bullets of Luyarnha are alloyed with silver; they count as silvered for the purposes of overcoming resistances and immunities.",
		page3notes: true,
    }],
};
AmmoList["scatter bullet"] = {
    name: "Bullets, Scatter",
	infoname: "Bullets, Scatter [15 gp]",
    source: [
        ["TW", 208]
    ],
    weight: 0.1,
    icon: "Bullets",
    invName: "Bullets, Scatter",
    toNotesPage: [{
        name: "Scatter Bullets",
        note: "This bullet ignores the spread fire property and is fired like a standard bullet. On a hit, the target takes your normal weapon damage and the bullet explodes, sending shrapnel flying in a 15-foot cone behind the target. Each creature in the area must succeed on a Dexterity saving throw against your Firearm save DC or take damage equal to your weapon damage.",
		page3notes: true,
    }],
};
AmmoList["explosive bullet"] = {
    name: "Bullets, Explosive",
	infoname: "Bullets, Explosive [40 gp]",
    source: [
        ["TW", 208]
    ],
    weight: 0.1,
    icon: "Bullets",
    invName: "Bullets, Explosive",
    toNotesPage: [{
        name: "Explosive Bullets",
        note: "On a hit, each creature within 5 feet of the target must make a Dexterity saving throw against your Firearm save DC or take 1d8 fire damage. If the weapon misses, the ammunition fails to detonate.",
		page3notes: true,
    }],
};
AmmoList["cannonball"] = {
    name: "Cannonball",
	infoname: "Cannonball [3 gp]",
    source: [
        ["TW", 208]
    ],
    weight: 9,
    icon: "Bullets",
};
AmmoList["explosive cannonball"] = {
    name: "Cannonball, Explosive",
	infoname: "Cannonball, Explosive [30 gp]",
    source: [
        ["TW", 208]
    ],
    weight: 12,
    icon: "Bullets",
    invName: "Cannonball, Explosive",
    toNotesPage: [{
        name: "Explosive Cannonball",
        note: "On a hit, each creature within 10 feet of the target must make a Dexterity saving throw against your Firearm save DC or take 2d8 fire damage. If the weapon misses, the ammunition fails to detonate.",
		page3notes: true,
    }],
};

//Firearms
WeaponsList["cannon"] = {
    name: "Cannon",
	infoname: "Cannonball, Explosive [30 gp]",
    source: [
        ["TW", 208]
    ],
	regExpSearch: /cannon/i,
    list: "firearm",
    ability: 1,
	abilitytodamage: true,
    type: "Martial",
    damage: [3, 10, "piercing"],
    range: "120/240 ft",
    weight: 90,
    description: "Artillery, Booming, Concussive, Two-Handed",
    ammo: "cannonball",
};
WeaponsList["rifle"] = {
    name: "Rifle",
	infoname: "Rifle [25 gp]",
    source: [
        ["TW", 208]
    ],
	regExpSearch: /rifle/i,
    list: "firearm",
    ability: 2,
    type: "Martial",
    damage: [1, 10, "piercing"],
    range: "120/240 ft",
    weight: 8,
    description: "Ammunition, Barrel 2(S), Blaring, Steady, Twinned Barrel, Two-Handed",
    abilitytodamage: true,
    ammo: "lead bullets",
};
WeaponsList["pistol"] = {
    name: "Pistol",
	infoname: "Pistol [10 gp]",
    source: [
        ["TW", 208]
    ],
	regExpSearch: /Pistol/i,
    list: "firearm",
    ability: 2,
    type: "Martial",
    damage: [1, 6, "piercing"],
    range: "40/120 ft",
    weight: 3,
    description: "Ammunition, Barrel 6 (S), Blaring, Fan Fire",
    abilitytodamage: true,
    ammo: "lead bullets",
};
WeaponsList["flintlock"] = {
    name: "Flintlock",
	infoname: "Flintlock [8 gp]",
    source: [
        ["TW", 208]
    ],
	regExpSearch: /Flintlock/i,
    list: "firearm",
    ability: 2,
    type: "Simple",
    damage: [1, 8, "piercing"],
    range: "100/320 ft",
    weight: 3,
    description: "Ammunition, Barrel 1 (F), Blaring, Light",
    abilitytodamage: true,
    ammo: "lead bullets",
};
WeaponsList["blunderbuss"] = {
    name: "Blunderbuss",
	infoname: "Blunderbuss [20 gp]",
    source: [
        ["TW", 208]
    ],
	regExpSearch: /Blunderbuss/i,
    list: "firearm",
    ability: 2,
    type: "Simple",
    damage: [2, 4, "piercing"],
    range: "20 ft cone",
    weight: 10,
    description: "Ammunition, Barrel 2 (S), Blaring, Twinned Barrel: can fire both barrels for 2d6 dmg, Two-Handed",
    abilitytodamage: true,
    ammo: "lead bullets",
	dc: true
};

//Melee Weapons
WeaponsList["scythe"] = {
    name: "Scythe",
    infoname: "Scythe [5 sp]",
    source: [
        ["TW", 214]
    ],
    regExpSearch: /Scythe/i,
    type: "Martial",
    ability: 1,
    abilitytodamage: true,
    damage: [1, 10, "slashing"],
    range: "Melee",
    description: "Finesse, Heavy, Two-Handed, Reach; Graze",
    list: "melee",
    weight: 6,
    monkweapon: false,
};
WeaponsList["cleaver"] = {
    name: "Cleaver",
    infoname: "Cleaver [3 sp]",
    source: [
        ["TW", 214]
    ],
    regExpSearch: /Cleaver/i,
    type: "Martial",
    ability: 1,
    abilitytodamage: true,
    damage: [1, 8, "slashing"],
    range: "Melee",
    description: "Heavy, Versatile (1d12); Cleave",
    list: "melee",
    weight: 4,
    monkweapon: false,
};

//Magic Cannons
MagicItemsList["sanctified cannon"] = {
    name: "Sanctified Cannon",
    source: [
        ["TW", 211]
    ],
    type: "weapon (cannon)",
    rarity: "uncommon",
    magicItemTable: "?",
    description: "**Charged Shot:** Once per turn, if you haven't moved, you can replace a cannon attack with a charged shot. Each creature in a 120ft line makes a Dex save against your Firearm save DC or take 3d12 bludgeoning damage and be knocked prone. Your speed is 0 until the end of the current turn.", 
    descriptionFull: "Charged Shot: Once on each of your turns you can replace one of your cannon attacks with a charged shot. Instead of a regular attack, you let loose a ball of destruction and death. Each creature in a 120-foot- long, 5-foot-wide line in front of you must succeed on a Dexterity saving throw against your Firearm save DC or take 3d12 bludgeoning damage and be knocked prone. You can use this property only if you haven’t moved during this turn, and after you use the property, your speed is 0 until the end of the current turn.",
    action: [
        ["action", "Charged Shot"]
    ],
	weaponsAdd: {
		select: ["Sanctified Cannon"],
	},
	weaponOptions : [{
		baseWeapon: "cannon",
        regExpSearch: /^(?=.*sanctified)(?=.*cannon).*$/i,
        name: "Sanctified Cannon",
        source: [
            ["TW", 211]
        ],
        description: "Charged Shot, Artillery, Booming, Concussive, Two-Handed",
    }],
	toNotesPage: [{
		name: "Cannon Properties",
		note: [
			"\n**Firearm Save DC** = 8 + your proficiency bonus + your Dexterity modifier. \n**Artillery.** You must use Strength instead of Dexterity for the Firearm save DC and the attack and damage rolls of this weapon. Such a weapon can be fired once before it must be reloaded with an action. \n**Booming.** The deflagration from firing this weapon makes a stupendous booming sound. The sound can be heard from up to 500 feet away. Firing this weapon makes it impossible to go undetected; you automatically fail Stealth checks to hide until the start of your next turn. In addition, if a creature is within the area of the sound blast, it automatically succeeds on Perception checks against you. \n**Concussive.** These weapons bludgeon as much as they pierce. When determining a creature's resistance or immunity to damage from this weapon, use the weaker of the target's resistance or immunity to piercing or to bludgeoning damage. For instance, if a creature is immune to piercing damage and has no resistance or immunity to bludgeoning damage, it would take full damage from a concussive weapon. Resistance to all physical damage applies as normal."
		]
	}]
};
MagicItemsList["big bertha"] = {
    name: "Big Bertha",
    source: [
        ["TW", 212]
    ],
    type: "weapon (cannon)",
    rarity: "rare",
    magicItemTable: "?",
    description: "This magical cannon is inlaid with Moongold, dealing an extra 1d4 damage to any non-humanoid it hits. As a bonus action, you can rotate the dials on the cannon to infuse your loaded ammo with violent powers (see notes).",
    descriptionFull: "\n*Why bother cutting beasts when you can just blow them to smithereens.* \nThis moongold inlaid cannon deals an extra 1d4 damage to any non-humanoid creatures it hits. Moongold acts as a guiding light in the darknes; creatures holding or wearing moongold have advantage on saving throws against being frightened and madness. \nYou gain a +1 bonus to attack and damage rolls made with this weapon. \nAs a bonus action, you can rotate the dials on the cannon to infuse your loaded ammo with violent powers. Your next attack deals magical damage and you can choose one of the following effects. \n**Forceful Infusion.** On a hit, the target takes an extra 1d6 bludgeoning damage and must succeed on a Strength saving throw or be pushed 15 feet away and knocked prone. Alternatively, if you are standing on a solid surface and instead fire the cannon directly at your feet, the explosion pushes you into the air and you land in a square of your choice within 30 feet of the explosion’s origin. \n**Incendiary Infusion.** On a hit, the target takes an extra 3d4 fire damage. \n**Unstable Infusion.** On a hit, the target takes an extra 1d8 cold damage and the terrain in a 10-foot radius centered on the target is covered in arcane mist, becoming difficult terrain for the next minute.",
    action: [
        ["bonus action", "Big Bertha Infusion"]
    ],
	savetxt: {
        adv_vs : ["frightened", "madness"]
    },
	weaponsAdd: {
		select: ["Big Bertha"],
	},
	weaponOptions : [{
		baseWeapon: "cannon",
        regExpSearch: /^(?=.*big)(?=.*bertha).*$/i,
        name: "Big Bertha",
        source: [
            ["TW", 212]
        ],
        description: "Moongold (+1d4 against non-humanoids), Infusions, Artillery, Booming, Concussive, Two-Handed",
		modifiers : [1, 1],
    },	{
		name: "Big Bertha (Forceful)",
		source: [
			["TW", 212]
		],
		regExpSearch : /^(?=.*big)(?=.*bertha)(?=.*forceful).*$/i,
		list: "firearm",
		ability: 1,
		abilitytodamage: true,
		type: "Martial",
		damage: [3, 10, "piercing"],
		range: "120/240 ft",
		weight: 90,
		description: "+1d6 bludg. dmg, target makes Str save or pushed 15ft and knocked prone. Or fire down to launch 30 ft.",
		modifiers: [1, 1],
		ammo: "cannonball",
	},	{
		name: "Big Bertha (Incindiary)",
		source: [
			["TW", 212]
		],
		regExpSearch : /^(?=.*big)(?=.*bertha)(?=.*incindiary).*$/i,
		list: "firearm",
		ability: 1,
		abilitytodamage: true,
		type: "Martial",
		damage:	[3, 10, "piercing"], 
		range: "120/240 ft",
		weight: 90,
		description: "+3d4 fire dmg.",
		modifiers: [1, 1],
		ammo: "cannonball",
	},	{
		name: "Big Bertha (Unstable)",
		source: [
			["TW", 212]
		],
		regExpSearch : /^(?=.*big)(?=.*bertha)(?=.*unstable).*$/i,
		list: "firearm",
		ability: 1,
		abilitytodamage: true,
		type: "Martial",
		damage:	[3, 10, "piercing"], 
		range: "120/240 ft",
		weight: 90,
		description: "+1d8 cold dmg, 10-foot radius of arcane mist around target: difficult terrain for 1 minute.",
		modifiers: [1, 1],
		ammo: "cannonball",
	}],
	toNotesPage: [{
		name: "Big Bertha Properties and Infusions",
		note: [
			"\n**Firearm Save DC** = 8 + your proficiency bonus + your Dexterity modifier. \n**Artillery.** You must use Strength instead of Dexterity for the Firearm save DC and the attack and damage rolls of this weapon. Such a weapon can be fired once before it must be reloaded with an action. \n**Booming.** The deflagration from firing this weapon makes a stupendous booming sound. The sound can be heard from up to 500 feet away. Firing this weapon makes it impossible to go undetected; you automatically fail Stealth checks to hide until the start of your next turn. In addition, if a creature is within the area of the sound blast, it automatically succeeds on Perception checks against you. \n**Concussive.** These weapons bludgeon as much as they pierce. When determining a creature's resistance or immunity to damage from this weapon, use the weaker of the target's resistance or immunity to piercing or to bludgeoning damage. For instance, if a creature is immune to piercing damage and has no resistance or immunity to bludgeoning damage, it would take full damage from a concussive weapon. Resistance to all physical damage applies as normal.",
			"\n#Infusions:#",
			" \u2022 **Forceful Infusion.** On a hit, the target takes an extra 1d6 bludgeoning damage and must succeed on a Strength saving throw or be pushed 15 feet away and knocked prone. Alternatively, if you are standing on a solid surface and instead fire the cannon directly at your feet, the explosion pushes you into the air and you land in a square of your choice within 30 feet of the explosion’s origin.",
			" \u2022 **Incendiary Infusion.** On a hit, the target takes an extra 3d4 fire damage.",
			" \u2022 **Unstable Infusion.** On a hit, the target takes an extra 1d8 cold damage and the terrain in a 10-foot radius centered on the target is covered in arcane mist, becoming difficult terrain for the next minute.",
		]
	}]
};

//Choice Magic Options
//TODO: Figure out how to type in "Moongold Longsword" and get it to populate. 
MagicItemsList["moongold weapon"] = {
    name: "Moongold Weapon",
    source: [
        ["TW", 213]
    ],
    magicItemTable: "?",
    type: "weapon (any melee)",
    rarity: "uncommon",
    description: "A weapon coated with moongold gives a 1d4 bonus to damage rolls against non-humanoid creatures. While holding or wearing moongold, you have advantage on saving throws against madness and being frightened.",
    descriptionFull: "Moongold gives a 1d4 bonus to damage rolls against nonhumanoid creatures. Moongold acts as a guiding light in the darkness; creatures holding or wearing moongold have advantage on saving throws against being frightened and madness. \nYou can moongild a single weapon or ten pieces of ammunition for 1000 gp. This cost represents not only the price of the moongold, but the time and expertise needed to add moongold to the weapon without making it less effective. Moongold loses its effectiveness over time; if a moongilded weapon has not been recoated in moongold after 3 months, the coating falls off, ending its effects. Recoating a weapon before it loses its moongilding costs 500 gp and refreshes the duration of the moongold.",
    allowDuplicates: true,
	savetxt: {
        adv_vs : ["frightened", "madness"]
    },
    chooseGear: {
        type: "weapon",
        prefixOrSuffix: ["suffix", "Moongold"],
        excludeCheck: function(inObjKey, inObj) {
            return inObj.list != "melee";
        }
    },
    calcChanges: {
        atkAdd: [
            function(fields, v) {
                if (v.theWea.list == "melee" && /moongold/i.test(v.WeaponTextName)) {
                    fields.Description += (fields.Description ? '; ' : '') + '+1d4 dmg against non-humanoids;';
                }
            },
            'If I include the word "Moongold" in the name of a melee weapon, it will be treated as the magic item Moongold Weapon. It deals +1d4 damage against non-humanoids and gives me advantage on saving throws against being frightened and madness.'
        ]
    }
};
MagicItemsList["moongold ammunition"] = {
    name: "Moongold Ammunition",
    source: [
        ["TW", 213]
    ],
    magicItemTable: "?",
    type: "weapon (any ammunition)",
    rarity: "uncommon",
    description: "Whenever ammunition coated with moongold hits an object, the hit deals an additional 1d4 damage against non-humanoid creatures.",
    descriptionFull: "Moongold gives a 1d4 bonus to damage rolls against nonhumanoid creatures. \nYou can moongild ten pieces of ammunition for 1000 gp. This cost represents not only the price of the moongold, but the time and expertise needed to add moongold to the ammunition without making it less effective.",
    allowDuplicates: true,
    chooseGear: {
        type: "ammo",
        prefixOrSuffix: "brackets",
        itemName1stPage: ["suffix", "Moongold"],
        descriptionChange: ["replace", "ammunition"],
        excludeCheck: function(inObjKey, inObj) {
            return /vials|flasks/i.test(inObj.icon);
        }
    }
};
MagicItemsList["scionic melee weapon"] = {
    name: "Scionic Melee Weapon",
    source: [
        ["TW", 230]
    ],
    magicItemTable: "?",
    type: "weapon (any melee)",
    rarity: "rare",
	attunement: true,
    description: "Constructed from monster bones and tortured with lightning, this scionic armament gets a +1 bonus to attack and damage rolls and deals an extra 1d6 lightning damage. With Explosive Retreat, I can detonate a creature. It must make a DC 14 Dex save or takes 3d8 lightning damage, and I am pushed 10 ft away.",
    descriptionFull: "Scionic weapons all require attunement. When attuning to such a weapon, a creature takes 2d8 lightning damage. \nYou gain a +1 bonus to attack and damage rolls made with this magic weapon, which deals an extra 1d6 lightning damage on a hit. This weapon has the Explosive Retreat property. \n**Explosive Retreat:** When you hit a creature with this weapon, you can choose to detonate the creature. The creature must make a DC 14 Dexterity saving throw, taking 3d8 lightning damage on a failed save, or half as much damage on a successful one. The detonation pushes you 10 feet away from the creature. Once used, this property can't be used again until the next dawn.",
    allowDuplicates: true,
    chooseGear: {
        type: "weapon",
        prefixOrSuffix: ["suffix", "Scionic"],
        excludeCheck: function(inObjKey, inObj) {
            return inObj.list != "melee";
        }
    },
    calcChanges: {
        atkAdd: [
            function(fields, v) {
                if (v.theWea.list == "melee" && /scionic/i.test(v.WeaponTextName)) {
                    fields.Description += (fields.Description ? '; ' : '') + '+1d6 lightning dmg; Explosive Retreat: DC 14 Dex save, 3d8 lightning dmg, pushes me 10ft.';
                }
            },
            'If I include the word "Scionic" in the name of a melee weapon, it will be treated as the magic item Scionic Armament. It deals +1d6 lightning damage and gains the Explosive Retreat property.'
        ],
		atkCalc: [
            function(fields, v, output) {
                if (v.isMeleeWeapon && /scionic/i.test(v.WeaponTextName)) {
                    output.magic = v.thisWeapon[1] + 1;
                }
            }, ''
        ],
    },
	toNotesPage: [{
        name: "Scionic Melee Weapon",
        note: [
			"**Explosive Retreat:** When you hit a creature with this weapon, you can choose to detonate the creature. The creature must make a DC 16 Dexterity saving throw, taking 4d8 lightning damage on a failed save, or half as much damage on a successful one. The detonation pushes you 10 feet away from the creature. Once used, this property can't be used again until the next dawn.",
		]
    }],
};
MagicItemsList["scionic ranged weapon"] = {
    name: "Scionic Ranged Weapon",
	nameTest: /^(?=.*scionic)(?=.*ranged).*$/i,
    source: [
        ["TW", 230]
    ],
    magicItemTable: "?",
    type: "weapon (any ranged)",
    rarity: "rare",
	attunement: true,
    description: "This scionic ranged armament gets a +1 bonus to attack and damage rolls and deals lightning damage instead of its normal damage, ignoring ammunition, barrel, and reload properties. With Guiding Fury, I can chain lightning to another creature on a hit. On a second hit, it streaks again.",
    descriptionFull: "Scionic weapons all require attunement. When attuning to such a weapon, a creature takes 2d8 lightning damage. \nYou gain a +1 bonus to attack and damage rolls made with this magic weapon. When you make attacks using this weapon, you fire electricity generated from the armament and can ignore the ammunition, barrel, or reload property of the weapon, dealing lightning damage instead of the weapon’s normal damage. This weapon has the Guiding Fury property. \n**Guiding Fury:** While holding this weapon, you can unleash the rage held within its bones to make a ranged weapon attack with advantage. On a hit, you deal the weapon’s damage and lightning streaks from the target to a different creature of your choice within 30 feet of it. Make a ranged weapon attack against the new target, and on a hit, deal the weapon’s damage and the lightning streaks again. A creature can be targeted only once by each use of guiding fury. Once used, this property can't be used again until the next dawn.",
    allowDuplicates: true,
    chooseGear: {
        type: "weapon",
        prefixOrSuffix: ["suffix", "Scionic"],
        excludeCheck: function(inObjKey, inObj) {
            return inObj.list != "ranged";
        }
	},
	calcChanges: {
		atkAdd: [
			function (fields, v) {
				if (v.isRangedWeapon && (/scionic/i).test(v.WeaponTextName)) { 
					fields.Description += '; Guiding Fury: on hit, chain atk to second target, streaks again on 2nd hit;';
					fields.Damage_Type = 'Lightning';
				}
			},
		],
		atkCalc: [
            function(fields, v, output) {
                if (v.isRangedWeapon && /scionic/i.test(v.WeaponTextName)) {
                    output.magic = v.thisWeapon[1] + 1;
                }
            }, ''
        ],
	},
	toNotesPage: [{
        name: "Scionic Ranged Weapon",
        note: [
			"**Guiding Fury:** While holding this weapon, you can unleash the rage held within its bones to make a ranged weapon attack with advantage. On a hit, you deal the weapon’s damage and lightning streaks from the target to a different creature of your choice within 30 feet of it. Make a ranged weapon attack against the new target, and on a hit, deal the weapon’s damage and the lightning streaks again. A creature can be targeted only once by each use of guiding fury. Once used, this property can't be used again until the next dawn.",
		]
    }],
};
MagicItemsList["scionic spellcasting focus"] = {
    name: "Scionic Spellcasting Focus",
    source: [
        ["TW", 231]
    ],
    magicItemTable: "?",
    type: "spellcasting focus",
    rarity: "rare",
	attunement: true,
    description: "This scionic focus gives me a +1 to spell attack rolls, and I can reroll a 1 or 2 on damage dice for lightning damage spells (I must use the new roll). As a bonus action, I can use Ionized Conduit to give creatures wearing or carrying metal a -3 penalty on Dex saves against my lightning spells for the next minute.",
    descriptionFull: "This spellcasting focus is constructed from the bones of formidable monsters which are then tortured with strong lightning, granting twisted appearance and savage fury to the armament. \nYou gain a +1 bonus to spell attack rolls made with this focus and can cast the *shocking grasp* cantrip, using your spellcasting modifier. When you roll a 1 or 2 on a damage die for a spell that deals lightning damage, you can reroll the die and must use the new roll, even if the new roll is a 1 or a 2. This weapon has the Ionized Conduit property. \n**Ionized Conduit:** As a bonus action, you can increase the polarity of the focus. For the next minute, creatures you target with spells that deal lightning damage have a -3 penalty to their saving throw against that spell if they are wearing or carrying metal. Once used, this property can't be used again until the next dawn.",
	calcChanges: {	
		spellCalc: [
			function (type, spellcasters, ability) {
				if (type == "attack") return 1;
			},
			"I add +1 to my spell attack rolls with my Scionic Spellcasting Focus.",
		],
	},
	spellcastingBonus: [{
		name : "Scionic Spellcasting Focus",
		selection: ["shocking grasp"],
		spellcastingAbility : "class",
	}],
	toNotesPage: [{
        name: "Scionic Spellcasting Focus",
        note: [
			"**Ionized Conduit:** As a bonus action, you can increase the polarity of the focus. For the next minute, creatures you target with spells that deal lightning damage have a -3 penalty to their saving throw against that spell if they are wearing or carrying metal. Once used, this property can't be used again until the next dawn.",
		]
    }],
};
MagicItemsList["roaring scionic melee weapon"] = {
    name: "Roaring Scionic Melee Weapon",
    source: [
        ["TW", 251]
    ],
    magicItemTable: "?",
    type: "weapon (any melee)",
    rarity: "very rare",
	attunement: true,
    description: "Constructed from monster bones and tortured with lightning, this scionic armament gets a +2 bonus to attack and damage rolls and deals an extra 2d6 lightning damage. With the Explosive Retreat and Galvanic Engage properties, I can deal extra lightning damage to creatures.",
    descriptionFull: "Scionic weapons all require attunement. When attuning to such a weapon, a creature takes 5d8 lightning damage. \nYou gain a +2 bonus to attack and damage rolls made with this magic weapon, which deals an extra 2d6 lightning damage on a hit. This weapon has the Explosive Retreat and Galvanic Engage properties. \n**Explosive Retreat:** When you hit a creature with this weapon, you can choose to detonate the creature. The creature must make a DC 16 Dexterity saving throw, taking 4d8 lightning damage on a failed save, or half as much damage on a successful one. The detonation pushes you 10 feet away from the creature. Once used, this property can't be used again until the next dawn. \n**Galvanic Engage:** On your first turn in combat, you can use your bonus action to move up to half your speed towards an enemy creature. If you end this movement within 5 feet of an enemy, your next weapon attack releases explosive energy, dealing an extra 4d8 lightning damage. Once used, this property can't be used again until the next dawn.",
    allowDuplicates: true,
    chooseGear: {
        type: "weapon",
        prefixOrSuffix: ["suffix", "Roaring Scionic"],
        excludeCheck: function(inObjKey, inObj) {
            return inObj.list != "melee";
        },
		modifiers: [2, 2],
    },
	action: [
        ["bonus action", "Galvanic Engage"],
    ],
    calcChanges: {
        atkAdd: [
            function(fields, v) {
                if (v.theWea.list == "melee" && /roaring scionic/i.test(v.WeaponTextName)) {
                    fields.Description += (fields.Description ? '; ' : '') + '+2d6 lightning dmg; Explosive Retreat, Galvanic Engage (see notes);';
                }
            },
            'If I include the words "Roaring Scionic" in the name of a melee weapon, it will be treated as the magic item Roaring Scionic Armament. It deals +2d6 lightning damage and gains the Explosive Retreat and Galvanic Engage properties.'
        ],
		atkCalc: [
            function(fields, v, output) {
                if (v.isMeleeWeapon && /roaring scionic/i.test(v.WeaponTextName)) {
                    output.magic = v.thisWeapon[2] + 1;
                }
            }, ''
        ],
    },
	toNotesPage: [{
        name: "Roaring Scionic Melee Weapon",
        note: [
			"**Explosive Retreat:** When you hit a creature with this weapon, you can choose to detonate the creature. The creature must make a DC 16 Dexterity saving throw, taking 4d8 lightning damage on a failed save, or half as much damage on a successful one. The detonation pushes you 10 feet away from the creature. Once used, this property can't be used again until the next dawn.",
			"\n**Galvanic Engage:** On your first turn in combat, you can use your bonus action to move up to half your speed towards an enemy creature. If you end this movement within 5 feet of an enemy, your next weapon attack releases explosive energy, dealing an extra 4d8 lightning damage. Once used, this property can't be used again until the next dawn.",
		]
    }],
};
MagicItemsList["roaring scionic ranged weapon"] = {
    name: "Roaring Scionic Ranged Weapon",
	nameTest: /^(?=.*roaring)(?=.*scionic)(?=.*ranged).*$/i,
    source: [
        ["TW", 251]
    ],
    magicItemTable: "?",
    type: "weapon (any ranged)",
    rarity: "very rare",
	attunement: true,
    description: "This scionic ranged armament gets a +2 bonus to attack and damage rolls and deals lightning damage instead of its normal damage, ignoring ammunition, barrel, and reload properties. With Guiding Fury, I can chain lightning to additional targets, and Lightning Surge increases my movement when I hit.",
    descriptionFull: "Scionic weapons all require attunement. When attuning to such a weapon, a creature takes 2d8 lightning damage. \nYou gain a +1 bonus to attack and damage rolls made with this magic weapon. When you make attacks using this weapon, you fire electricity generated from the armament and can ignore the ammunition, barrel, or reload property of the weapon, dealing lightning damage instead of the weapon’s normal damage. This weapon has the Guiding Fury property. \n**Guiding Fury:** While holding this weapon, you can unleash the rage held within its bones to make a ranged weapon attack with advantage. On a hit, you deal the weapon’s damage and lightning streaks from the target to a different creature of your choice within 30 feet of it. Make a ranged weapon attack against the new target, and on a hit, deal the weapon’s damage and the lightning streaks again. A creature can be targeted only once by each use of guiding fury. Once used, this property can't be used again until the next dawn.",
    allowDuplicates: true,
    chooseGear: {
        type: "weapon",
        prefixOrSuffix: ["suffix", "Roaring Scionic"],
        excludeCheck: function(inObjKey, inObj) {
            return inObj.list != "ranged";
        }
	},
	calcChanges: {
		atkAdd: [
			function (fields, v) {
				if (v.isRangedWeapon && (/roaring scionic/i).test(v.WeaponTextName)) { 
					fields.Description += '; Guiding Fury: on hit, chain attacks; Lightning Surge: +5 speed for each hit;';
					fields.Damage_Type = 'Lightning';
				}
			},
		],
		atkCalc: [
            function(fields, v, output) {
                if (v.isRangedWeapon && /roaring scionic/i.test(v.WeaponTextName)) {
                    output.magic = v.thisWeapon[2] + 1;
                }
            }, ''
        ],
	},
	toNotesPage: [{
        name: "Roaring Scionic Ranged Weapon",
        note: [
			"**Guiding Fury:** While holding this weapon, you can unleash the rage held within its bones to make a ranged weapon attack with advantage. On a hit, you deal the weapon’s damage and lightning streaks from the target to a different creature of your choice within 30 feet of it. Make a ranged weapon attack against the new target, and on a hit, deal the weapon’s damage and the lightning streaks again. A creature can be targeted only once by each use of guiding fury. Once used, this property can't be used again until the next dawn.",
			"\n**Lightning Surge:** When you hit a creature with this weapon, your speed increases by 5 feet until the end of your next turn, increasing with each subsequent hit.",
		]
    }],
};
MagicItemsList["roaring scionic spellcasting focus"] = {
    name: "Roaring Scionic Spellcasting Focus",
    source: [
        ["TW", 251]
    ],
    magicItemTable: "?",
    type: "spellcasting focus",
    rarity: "very rare",
	attunement: true,
    description: "This scionic focus gives me a +2 to spell attack rolls, and I can reroll a 1 or 2 on damage dice for spells that deals lightning damage. As a bonus action, I can use Ionized Conduit to inflict a penalty on Dex saves against my lightning spells, and when I take lightning damage, I can gain a flying speed as a reaction.",
    descriptionFull: "This spellcasting focus is constructed from the bones of formidable monsters which are then tortured with strong lightning, granting twisted appearance and savage fury to the armament. \nYou gain a +2 bonus to spell attack rolls made with this focus and can cast the *shocking grasp* cantrip, using your spellcasting modifier. When you roll a 1 or 2 on a damage die for a spell that deals lightning damage, you can reroll the die and must use the new roll, even if the new roll is a 1 or a 2. This weapon has the Ionized Conduit and Lighting Harness properties. \n**Ionized Conduit:** As a bonus action, you can increase the polarity of the focus. For the next minute, creatures you target with spells that deal lightning damage have a -5 penalty to their saving throw against that spell if they are wearing or carrying metal. Once used, this property can't be used again until the next dawn. \n**Lightning Harness:** As a reaction to taking lightning damage, you can harness the energy, granting yourself a 30-foot flying speed for the next minute. You must concentrate on this effect as you would a spell. When the effect ends, you fall if you are still aloft at a rate of 30 feet per round, unless you can stop the fall.",
	calcChanges: {	
		spellCalc: [
			function (type, spellcasters, ability) {
				if (type == "attack") return 2;
			},
			"I add +2 to my spell attack rolls with my Scionic Spellcasting Focus.",
		],
	},
	spellcastingBonus: [{
		name : "Roaring Scionic Spellcasting Focus",
		selection: ["shocking grasp"],
		spellcastingAbility : "class",
	}],
	toNotesPage: [{
        name: "Roaring Scionic Spellcasting Focus",
        note: [
			"**Ionized Conduit:** As a bonus action, you can increase the polarity of the focus. For the next minute, creatures you target with spells that deal lightning damage have a -5 penalty to their saving throw against that spell if they are wearing or carrying metal. Once used, this property can't be used again until the next dawn.",
			"\n**Lightning Harness:** As a reaction to taking lightning damage, you can harness the energy, granting yourself a 30-foot flying speed for the next minute. You must concentrate on this effect as you would a spell. When the effect ends, you fall if you are still aloft at a rate of 30 feet per round, unless you can stop the fall.",
		]
    }],
};

//Trick Weapons
MagicItemsList["guillotine shears"] = {
    name: "Guillotine Shears",
    source: [
        ["TW", 215]
    ],
    type: "Trick weapon (shortsword & longsword, shears)",
    rarity: "uncommon",
    magicItemTable: "?",
    description: "This mechanical trick weapon was designed to sever limbs. In its untransformed state, it's a light longsword and shortsword. As a bonus action I can transform them into a one-handed set of shears with Guillotine which allows me to snap the blades together to deal an extra 1d12 dmg, plus an extra 1d12 on a crit.",
    descriptionFull: "**Trick Weapon:** As a bonus action, you can switch between the transformed and untransformed states of this weapon. In its untransformed state, the guillotine is two one-handed weapons—a longsword and a shortsword. \nIn its transformed state, the weapon is a single one-handed weapon—shears. \nAs part of this bonus action, you can do the following: When transforming the swords into shears: you can make a single melee weapon attack with the shears. You don’t add your ability modifier to the damage of the bonus attack, unless that modifier is negative, and you can’t use the Guillotine property on this attack. When transforming the shears into swords: you can slide the longsword forward as part of dismounting it, making a single melee weapon attack with it. You don’t add your ability modifier to the damage of the bonus attack, unless that modifier is negative. If you have the Two-Weapon Fighting Style, you can ignore this limitation. \n**Untransformed.** While wielding both swords, the longsword is considered light. The shortsword deals your choice of slashing or piercing damage. \n**Transformed.** The shears are a one-handed martial weapon that deals 1d10 slashing damage on a hit. In addition, it has the Guillotine property. \n**Guillotine.** Immediately after hitting a target with the shears, if you have a free hand, you can use your reaction to pull the lever, snapping the blades together and dealing an extra 1d12 slashing damage to the target. If the triggering attack was a critical hit, you deal an extra 1d12 slashing damage. If this attack deals more than one-quarter of a creature’s hit point maximum, you also chop off one the creature's limbs (anything but the head) at the GM’s discretion. If this attack reduces a creature to 0 hit points, it is decapitated.",
    action: [
        ["bonus action", "Guillotine Shears (Transform)"],
		["bonus action", "Transform (Shears Attack)"],
		["bonus action", "Transform (Longsword Attack)"],
		["reaction", "Guillotine"],
    ],
	weaponsAdd: {
		select: ["Guillotine Shears (Longsword)", "Guillotine Shears (Shortsword)", "Transformed Guillotine Shears"],
	},
	weaponOptions: [{
		name: "Guillotine Shears (Longsword)",
		source: [
			["TW", 215]
		],
		regExpSearch: /^(?=.*Guillotine)(?=.*Shears)(?=.*Longsword).*$/i,    
		type: "Martial",
		ability: 1,
		abilitytodamage: true,
		damage: [1, 8, "slashing"],
		range: "Melee",
		description: "Light; Sap",
		list: "melee",
		weight: 3,
		monkweapon: false,
	},	{
		name: "Guillotine Shears (Shortsword)",
		source: [
			["TW", 215]
		],
		regExpSearch: /^(?=.*Guillotine)(?=.*Shears)(?=.*shortsword).*$/i,     
		type: "Martial",
		ability: 1,
		abilitytodamage: true,
		damage: [1, 6, "piercing"],
		range: "Melee",
		description: "Deals piercing or slashing damage, Finesse, Light; Vex",
		list: "melee",
		weight: 3,
		monkweapon: true,
	},	{
		name: "Transformed Guillotine Shears",
		source: [
			["TW", 215]
		],
		regExpSearch: /guillotine shears/i,     
		type: "Martial",
		ability: 1,
		abilitytodamage: true,
		damage: [1, 10, "slashing"],
		range: "Melee",
		description: "Guillotine: On hit, reaction to deal +1d12 dmg, (2d12 on crit); See notes;",
		list: "melee",
		weight: 6,
		monkweapon: false,
	}],
	toNotesPage: [{
		name: "Guillotine Shears",
		note: [
			"\n**Trick Weapon:** As a bonus action, you can switch between the transformed and untransformed states of this weapon.",
			" \u2022 In its untransformed state, the guillotine is two one-handed weapons — a longsword and a shortsword.",
			" \u2022 In its transformed state, the weapon is a single one-handed weapon — shears.",
			"\nAs part of this bonus action, you can do the following:",
			" \u2022 When transforming the swords into shears: you can make a single melee weapon attack with the shears. You don’t add your ability modifier to the damage of the bonus attack, unless that modifier is negative, and you can’t use the Guillotine property on this attack.",
			" \u2022 When transforming the shears into swords: you can slide the longsword forward as part of dismounting it, making a single melee weapon attack with it. You don’t add your ability modifier to the damage of the bonus attack, unless that modifier is negative. If you have the Two-Weapon Fighting Style, you can ignore this limitation.",
			"\n**Guillotine.** Immediately after hitting a target with the shears, if you have a free hand, you can use your reaction to pull the lever, snapping the blades together and dealing an extra 1d12 slashing damage to the target. If the triggering attack was a critical hit, you deal an extra 1d12 slashing damage. If this attack deals more than one-quarter of a creature’s hit point maximum, you also chop off one the creature's limbs (anything but the head) at the GM’s discretion. If this attack reduces a creature to 0 hit points, it is decapitated.",
		]
	}]
};
MagicItemsList["meat hookshot"] = {
    name: "Meat Hookshot",
    source: [
        ["TW", 216]
    ],
    type: "Trick weapon (blunderbuss & sickle)",
    rarity: "uncommon",
    magicItemTable: "?",
    description: "The hookshot is a trick weapon used by hunters to help close the gap to their prey. In its untransformed state, it's a sickle and blunderbuss connected by a chain. Transformed, the sickle becomes a bladed attachment on the blunderbuss which I can fire to deal extra slashing dmg and reel in a creature.",
    descriptionFull: "**Trick Weapon:** As a bonus action, you can switch between the transformed and untransformed states of this weapon. In its untransformed state, the hookshot is two one-handed weapons connected by a short length of chain; a sickle and a blunderbuss. In its transformed state, the weapon is a single two-handed weapon; a blunderbuss with a bladed attachment that can act as a battleaxe. \n**Untransformed.** While untransformed, the sickle has the finesse property, and the blunderbuss doesn't have the two-handed property. Using this pair of weapons together requires the sickle to be held in one hand and the blunderbuss in the other. When you take the Attack action with the sickle, you can make an attack with the blunderbuss as a bonus action, ignoring the barrel property. \n**Transformed.** When you take the Attack action, you can attack with either the blunderbuss or the bladed attachment (which uses the stats of a battleaxe wielded with two hands). In addition, this item gains the Hookshot property. \n**Hookshot.** As an action, you can launch the sickle from the blunderbuss, to which it remains attached by a length of sturdy chain. Make a ranged weapon attack against a creature you can see within 30 feet of you. On a hit, the target takes slashing damage equal to 1d4 plus your Dexterity modifier. If the creature is of your size or smaller, it must succeed on a DC 13 Strength saving throw or be pulled in a straight line to the nearest unoccupied space adjacent to you. If the creature is of a size larger than yours, you are pulled in a straight line to the nearest unoccupied space adjacent to it. At the end of your turn, the hook detaches from the creature and reattaches itself to the blunderbuss.",
    action: [
        ["bonus action", "Meat Hookshot (Transform)"],
		["bonus action", "Blunderbuss (after Sickle Attack)"],
		["action", "Hookshot"],
    ],
	weaponsAdd: {
		select: ["Meat Hookshot (Blunderbuss)", "Meat Hookshot (Sickle)", "Transformed Meat Hookshot"],
	},
	weaponOptions: [{
		name: "Meat Hookshot (Blunderbuss)",
		source: [
			["TW", 216]
		],
		regExpSearch: /^(?=.*meat)(?=.*hookshot)(?=.*blunderbuss).*$/i,    
		type: "Simple",
		ability: 2,
		abilitytodamage: true,
		damage: [2, 4, "piercing"],
		range: "20 ft cone",
		description: "Barrel 2 (S), Blaring, Twinned Barrel: can fire both barrels for 2d6 dmg, bonus action atk after attacking with sickle.",
		list: "firearm",
		ammo: "lead bullets",
		weight: 10,
		dc: true
	},	{
		name: "Meat Hookshot (Sickle)",
		source: [
			["TW", 216]
		],
		regExpSearch: /^(?=.*meat)(?=.*hookshot)(?=.*sickle).*$/i,     
		type: "Simple",
		ability: 1,
		abilitytodamage: true,
		damage: [1, 4, "slashing"],
		range: "Melee",
		description: "Finesse, Light; Nick",
		list: "melee",
		weight: 2,
		monkweapon: true,
	},	{
		name: "Transformed Meat Hookshot",
		source: [
			["TW", 216]
		],
		regExpSearch: /Meat Hookshot/i,     
		type: "Martial",
		ability: 1,
		abilitytodamage: true,
		damage: [1, 10, "slashing"],
		range: "Melee",
		description: "Blunderbuss or melee. Hookshot: fire sickle as ranged atk, range 30ft, 1d4+Dex slash. dmg. See notes.",
		list: "melee",
		weight: 12,
		monkweapon: false,
	}],
	toNotesPage: [{
		name: "Meat Hookshot",
		note: [
			"\n**Trick Weapon.** As a bonus action, you can switch between the transformed and untransformed states of this weapon.",
			" \u2022 In its untransformed state, the hookshot is two one-handed weapons — a sickle and a blunderbuss connected by a short length of chain.",
			" \u2022 In its transformed state, the weapon is a single two-handed weapon — a blunderbuss with a bladed attachment that can act as a battleaxe.",
			"\n**Untransformed.** Using this pair of weapons together requires the sickle to be held in one hand and the blunderbuss in the other. When you take the Attack action with the sickle, you can make an attack with the blunderbuss as a bonus action, ignoring the barrel property.",
			"\n**Transformed.** When you take the Attack action, you can attack with either the blunderbuss or the bladed attachment (which uses the stats of a battleaxe wielded with two hands). In addition, this item gains the **Hookshot** property.",
			"\n**Hookshot.** As an action, you can launch the sickle from the blunderbuss, to which it remains attached by a length of sturdy chain. Make a ranged weapon attack against a creature you can see within 30 feet of you. On a hit, the target takes slashing damage equal to 1d4 + Dex Mod. If the creature is of your size or smaller, it must succeed on a DC 13 Strength saving throw or be pulled in a straight line to the nearest unoccupied space adjacent to you. If the creature is of a size larger than yours, you are pulled in a straight line to the nearest unoccupied space adjacent to it. At the end of your turn, the hook detaches from the creature and reattaches itself to the blunderbuss.",
			"\n#Blunderbuss Properties:#",
			" \u2022 **Barrel 2.** The weapon can be fired twice before it must be reloaded.", 
			" \u2022 **Slow reload.** You must use an attack or an action to reload this firearm. You must have one free hand to do so.",
			" \u2022 **Blaring.** Firing this weapon makes a thunderous crack. The sound can be heard from up to 100 feet away. Firing a weapon with this property makes it hard to go undetected; you have disadvantage on Stealth checks to hide until the start of your next turn. In addition, if a creature is within the area of the sound blast, it has advantage on Perception checks against you.",
			" \u2022 **Twinned Barrel.** This weapon has two barrels that can each hold a bullet and can both be loaded as part of reloading the weapon. You can fire both barrels of a double barrel weapon as part of an attack, instead of each barrel individually. Doing so empties the barrel of the weapon (as per the Barrel property) but increases the damage die of the weapon on a hit (from d4 to d6).",
		]
	}]
};
MagicItemsList["sanctified partisan"] = {
    name: "Sanctified Partisan",
    source: [
        ["TW", 217]
    ],
    type: "Trick weapon (shield & spear, glaive)",
    rarity: "uncommon",
    magicItemTable: "?",
    description: "This versatile trick weapon is a shield and spear in its untransformed state. As a reaction, I can deflect a melee attack and counterattack. As a bonus action, I can transform the partisan by sheathing the spear into the shield which retracts into a massive blade and becomes a glaive that can impale foes.",
    descriptionFull: "**Trick Weapon.** As a bonus action, you can switch between the transformed and untransformed states of this weapon. In its untransformed state, the sanctified partisan is a spear and a shield. In its transformed state, the spear is sheathed by the shield, which retracts into a massive blade; the weapon becomes a glaive. \n**Untransformed:** Using this pair of weapons together requires the spear to be held in one hand and the shield in the other. When you are targeted by a melee weapon attack, you can use your reaction to deflect with the shield, gaining a +2 bonus to AC against that attack. If the attack misses, you can immediately make a single melee weapon attack with the spear as part of the same reaction. \n**Transformed:** This glaive doesn’t have the heavy property. When you hit with an attack using this weapon, as part of the attack, you can pierce the target, transform the weapon, and only pull out the spear. The shield remains in the target's body, impaling it. An impaled creature takes 1d4 slashing damage at the start of each of its turns, and its speed is reduced by 15 feet. To remove the shield, the impaled target can use its action to make a DC 12 Strength check. On a success, the shield is removed and falls at the target’s feet. If you are within 5 feet of the shield, you can use a bonus action to retrieve and don it.",
    action: [
        ["bonus action", "Sanctified Partisan (Transform)"],
		["reaction", "Deflect (+2 AC)"],
		["reaction", "Spear Counterattack (with Deflect)"],
    ],
	weaponsAdd: {
		select: ["Sanctified Partisan (Spear)", "Transformed Sanctified Partisan"],
	},
	weaponOptions: [{
		name: "Sanctified Partisan (Spear)",
		source: [
			["TW", 217]
		],
		regExpSearch: /^(?=.*sanctified)(?=.*partisan)(?=.*spear).*$/i,    
		type: "Simple",
		ability: 1,
		abilitytodamage: true,
		damage: [1, 6, "piercing"],
		range: "Melee, 20/60 ft",
		description: "Thrown, Versatile (1d8); Sap; Counterattack when parrying with shield causes a melee atk to miss;",
		list: "melee",
		weight: 3,
		ammo: "spear",
		monkweapon: true,
	},	{
		name: "Transformed Sanctified Partisan",
		source: [
			["TW", 217]
		],
		regExpSearch: /Transformed Sanctified Partisan/i,    
		type: "Martial",
		ability: 1,
		abilitytodamage: true,
		damage: [1, 10, "slashing"],
		range: "Melee",
		description: "Reach, Two-Handed; Graze; Impale: target takes 2d4 slashing dmg/turn, its speed is 0, DC 14 Str save to remove;",
		list: "melee",
		weight: 6,
		monkweapon: false,
	}],
	shieldAdd: "Sanctified Partisan Shield",
	toNotesPage: [{
		name: "Sanctified Partisan",
		note: [
			"\n**Trick Weapon.** As a bonus action, you can switch between the transformed and untransformed states of this weapon.",
			" \u2022 In its untransformed state, the *sanctified partisan* is a spear and a shield.",
			" \u2022 In its transformed state, the spear is sheathed by the shield, which retracts into a massive blade; the weapon becomes a glaive.",
			"\n**Untransformed.** Using this pair of weapons together requires the spear to be held in one hand and the shield in the other. When you are targeted by a melee weapon attack, you can use your reaction to deflect with the shield, gaining a +2 bonus to AC against that attack. If the attack misses, you can immediately make a single melee weapon attack with the spear as part of the same reaction.",
			"\n**Transformed.** This glaive doesn’t have the heavy property. When you hit with an attack using this weapon, as part of the attack, you can pierce the target, transform the weapon, and only pull out the spear. The shield remains in the target's body, impaling it. An impaled creature takes 1d4 slashing damage at the start of each of its turns, and its speed is reduced by 15 feet. To remove the shield, the impaled target can use its action to make a DC 12 Strength check. On a success, the shield is removed and falls at the target’s feet. If you are within 5 feet of the shield, you can use a bonus action to retrieve and don it.",
		]
	}]
};
MagicItemsList["stick"] = {
    name: "Stick",
    source: [
        ["TW", 206]
    ],
    type: "Trick weapon (stick)",
    rarity: "uncommon",
    magicItemTable: "?",
    description: "As a last resort, I reach for something to defend myself after losing my weapon. In its untransformed state, it's a stick. As a bonus action, I can break it over my knee to become two sticks. When i roll a 1 on an attack roll, the stick is destroyed (untransformed) or one half is destroyed (transformed).",
    descriptionFull: "**Trick Weapon:** As a bonus action, you can switch between the transformed and untransformed states of this weapon. In its untransformed state, it's a stick. In its transformed state, you break it over your knee and it’s two sticks. The stick may only return to its untransformed state over the course of an hour as you use glue and bandages to bind the  two pieces back together and wait for it to cure. It has the Ill Advised Weapon property.\n   **Untransformed:** It's a stick, has the light property, and if you hit with it, it deals 1d4 bludgeoning damage.\n   **Transformed:** It's two sticks, each held in a hand. A hit with either stick deals 1 + your Strength modifier bludgeoning damage (minimum of 0).\n   **Ill-Advised Weapon.** When you attack with the stick, if you roll a 1 on the d20, it is destroyed and unusable. If this occurs during the transformed state of the stick, the stick not used in the attack remains, but cannot be untransformed. If the remaining stick also is destroyed by this property, you no longer have a stick.",
    action: [
        ["bonus action", "Stick (Transform)"]
    ],
	weaponsAdd: {
		select: ["Untransformed Stick", "Transformed Stick"],
	},
	weaponOptions: [{
		name: "Untransformed Stick",
		source: [
			["TW", 206]
		],
		regExpSearch: /^(?=.*stick)(?=.*untransformed).*$/i,    
		type: "Simple",
		ability: 1,
		abilitytodamage: true,
		damage: [1, "", "bludgeoning"],
		range: "Melee",
		description: "Light, is destroyed when I roll a 1 on an attack roll.",
		list: "melee",
		weight: 1,
		monkweapon: true,
	},	{
		name: "Transformed Stick",
		source: [
			["TW", 206]
		],
		regExpSearch: /^(?=.*stick)(?=.*transformed).*$/i,    
		type: "Simple",
		ability: 1,
		abilitytodamage: true,
		damage: [1, "", "bludgeoning"],
		range: "Melee",
		description: "Light, one half is destroyed when I roll a 1 on an attack roll.",
		list: "melee",
		weight: 1,
		monkweapon: true,
	}],
};
MagicItemsList["rifling cleaver"] = {
    name: "Rifling Cleaver",
    source: [
        ["TW", 219]
    ],
    type: "Trick weapon (cleaver, rifle)",
    rarity: "uncommon",
    magicItemTable: "?",
    description: "Both a rifle and an enormous cleaver, this weapon allows hunters to fight at range and rend flesh when beasts get close. After I make an attack with the untransformed cleaver, I can fire at a creature directly behind me and transform it into a rifle.",
    descriptionFull: "Rather than carrying separate firearms, which often become ineffective when beasts get close, many hunters conceal them within enormous cleavers designed to rend flesh. Such creations of gunpowder and metal are aptly named *rifling cleavers.* \n**Trick Weapon.** As a bonus action, you can switch between the transformed and untransformed states of this weapon. In its untransformed state, it is is a large cleaver. In its transformed state, the weapon is a rifle. You can reload the rifle even in its untransformed state. \n**Untransformed.** After making a melee weapon attack with this weapon, you can immediately use your bonus action to make a ranged weapon attack with the rifle against a creature within range that is behind you and in a straight line with you and your first target. This shot extends the weapon, transforming it. \n**Transformed.** Though unwieldy in melee, you can use a bonus action to make a melee attack with the opposite end of the rifle. This attack uses your choice of your Strength or Dexterity modifier. The damage die for this attack is a d4, and it deals bludgeoning damage. Your weapon then reverts to its untransformed state.",
    action: [
        ["bonus action", "Rifling Cleaver (Transform)"],
		["bonus action", "Backwards Rifle Shot"],
		["bonus action", "Rifle End Attack"],
		["bonus action", "Steady"],
    ],
	weaponsAdd: {
		select: ["Rifling Cleaver (Cleaver)", "Rifling Cleaver (Rifle)"],
	},
	weaponOptions: [{
		name: "Rifling Cleaver (Cleaver)",
		source: [
			["TW", 219]
		],
		regExpSearch: /^(?=.*rifling)(?=.*cleaver).*$/i,
		baseWeapon: "cleaver",
		description: "Heavy, Versatile (1d12); Cleave; See notes for additional actions.",
	},	{
		name: "Rifling Cleaver (Rifle)",
		source: [
			["TW", 219]
		],
		regExpSearch: /^(?=.*cleaver)(?=.*rifle).*$/i,
		baseWeapon: "rifle",
		description: "Barrel 2 (S), Blaring, Steady, Twinned Barrel, Two-Handed; See notes for additional actions.",
	}],
	toNotesPage: [{
        name: "Rifling Cleaver",
        note: [
                "**Trick Weapon.** As a bonus action, you can switch between the transformed and untransformed states of this weapon.",
				" \u2022 In its untransformed state, it is is a large cleaver.",
				" \u2022 In its transformed state, the weapon is a rifle. You can reload the rifle even in its untransformed state.",
				"\n**Untransformed:** After making a melee weapon attack with this weapon, you can immediately use your bonus action to make a ranged weapon attack with the rifle against a creature within range that is behind you and in a straight line with you and your first target. This shot extends the weapon, transforming it.",
				"\n**Transformed:** Though unwieldy in melee, you can use a bonus action to make a melee attack with the opposite end of the rifle. This attack uses your choice of your Strength or Dexterity modifier. The damage die for this attack is a d4, and it deals bludgeoning damage. Your weapon then reverts to its untransformed state.",
				"\n#Rifle Properties.#",
				" \u2022 **Barrel 2:** The weapon can be fired twice before it must be reloaded.",
				" \u2022 **Slow Reload:** You must use an attack or an action to reload this firearm. You must have one free hand to do so.",
				" \u2022 **Blaring:** Firing this weapon makes a thunderous crack. The sound can be heard from up to 100 feet away. Firing this weapon makes it hard to go undetected; you have disadvantage on Stealth checks to hide until the start of your next turn. In addition, if a creature is within the area of the sound blast, it has advantage on Perception checks against you.",
				" \u2022 **Steady:** This weapon can be stabilized for greater accuracy. As a bonus action, you give yourself a bonus to your next attack roll with this weapon this turn equal to your proficiency bonus, and attacking at long range doesn’t impose disadvantage on the attack roll. You can use this bonus action only if you haven’t moved during your turn, and after you use the bonus action, your speed is halved until the end of your turn.",
				" \u2022 **Twinned Barrel:** This weapon has two barrels that can each hold a bullet and can both be loaded as part of reloading the weapon. You can fire both barrels of a double barrel weapon as part of an attack, instead of each barrel individually. Doing so empties the barrel of the weapon but increases the damage die of the weapon on a hit (from d10 to d12).",
        ],
    }],
};
MagicItemsList["abyss warden's axeblade"] = {
    name: "Abyss Warden’s Axeblade",
    source: [
        ["TW", 219]
    ],
    type: "Trick weapon (longsword, battleaxe)",
    rarity: "rare",
    magicItemTable: "?",
    description: "This dark blade, forged from the remains of slain monsters, deals extra radiant dmg to aberrations. As a bonus action, I can transform it between battleaxe and longsword states. When I transform it, I can emit a burst of radiance. Creatures within 5 ft of me make a DC 13 Con save or take 1d6 radiant damage.",
    descriptionFull: "Infused with otherworldly ichor, this dark blade is given to warriors of the Abyss Warden, forged from the remains of the monsters they’ve slain. The elegant and virtuous design of the weapon hides its macabre origins, mirroring the order it came from. \n**Trick Weapon.** As a bonus action, you can switch between the transformed and untransformed states of this weapon by sliding the pommel up and down on the blade. \n \u2022 In its untransformed state, the abyss warden's axeblade is a longsword. \n \u2022 In its transformed state, the weapon becomes a battleaxe. \nAs part of this bonus action, you can slam the weapon down, emitting a wave of radiance centered on you. Each creature within 5 feet of you must succeed on a DC 13 Constitution saving throw or take 1d6 radiant damage. Both forms of the weapon deal an extra 1d6 radiant damage on a hit. This damage increases to 2d6 for the longsword against Medium or smaller aberrations and to 2d6 for the battleaxe against Large or larger aberrations.",
    action: [
        ["bonus action", "Axeblade (Transform)"],
    ],
	weaponsAdd: {
		select: ["Abyss Warden's Longsword", "Abyss Warden's Battleaxe"],
	},
	weaponOptions: [{
		name: "Abyss Warden's Longsword",
		source: [
			["TW", 219]
		],
		regExpSearch: /^(?=.*abyss)(?=.*warden)(?=.*longsword).*$/i,
		baseWeapon: "longsword",
		description: "Versatile (1d10); Sap; +1d6 Radiant dmg, +2d6 Radiant dmg against Medium or smaller aberrations;",
	},	{
		name: "Abyss Warden's Battleaxe",
		source: [
			["TW", 219]
		],
		regExpSearch: /^(?=.*abyss)(?=.*warden)(?=.*battleaxe).*$/i,
		baseWeapon: "battleaxe",
		description: "Versatile (1d10); Topple; +1d6 Radiant dmg, +2d6 against Large or larger aberrations;",
	}],
	toNotesPage: [{
        name: "Abyss Warden’s Axeblade",
        note: [
                "**Trick Weapon.** As a bonus action, you can switch between the transformed and untransformed states of this weapon by sliding the pommel up and down on the blade.",
				" \u2022 In its untransformed state, the *abyss warden's axeblade* is a longsword.",
				" \u2022 In its transformed state, the weapon becomes a battleaxe.",
				" \u2022 As part of this bonus action, you can slam the weapon down, emitting a wave of radiance centered on you. Each creature within 5 feet of you must succeed on a DC 13 Constitution saving throw or take 1d6 radiant damage.",
				"\nBoth forms of the weapon deal an extra 1d6 radiant damage on a hit. This damage increases to 2d6 for the longsword against Medium or smaller aberrations and to 2d6 for the battleaxe against Large or larger aberrations.",
        ],
    }],
};
MagicItemsList["cordyceps sinensis (infection)"] = {
    name: "Cordyceps Sinensis (Infection)",
    source: [
        ["TW", 220]
    ],
    type: "Trick weapon (special)",
    rarity: "rare",
    description: "I become infected by *cordyceps sinensis* by ingesting it or grafting it underneath my skin. After 24 hours of incubation, the parasite can only be removed by a 6th level+ *remove curse* spell. While infected, if I am reduced to 0 HP but not killed, I can drop to 1 HP instead (property refreshes at dawn).",
    descriptionFull: "To gain the benefits of the cordyceps sinensis, you must ingest it, or graft it underneath your skin. For 24 hours, the fungus will incubate within you; during that time, if you swallow liquid flames or light the grafted area ablaze, you will kill the parasite. After 24 hours have passed, the only way to remove the parasite is with a remove curse spell cast at 6th level or higher. If you receive Nawre’s Blessing, nothing short of a wish spell will remove the fungus. \nWhile infected with the cordyceps sinensis, when you are reduced to 0 hit points but not killed outright, you can drop to 1 hit point instead. Once this property has been used, it can't be used again until the next dawn. \n*If you have Nawre’s Blessing tattooed or carved onto your body, the parasite becomes a trick weapon for you.*",
    extraLimitedFeatures: [{
        name: "Cordyceps Sinensis",
        usages: 1,
        recovery: "dawn",
    }],
};
MagicItemsList["cordyceps sinensis (nawre’s blessing)"] = {
    name: "Cordyceps Sinensis (Nawre’s Blessing)",
    source: [
        ["TW", 220]
    ],
    type: "Trick weapon (special)",
    rarity: "rare",
    description: "I become infected by *cordyceps sinensis* by ingesting it or grafting it underneath my skin. While infected, if I am reduced to 0 HP but not killed, I can drop to 1 HP instead (property refreshes at dawn). If I have a Nawre’s Blessing tattoo or carving, the parasite becomes a trick weapon.",
    descriptionFull: "To gain the benefits of the cordyceps sinensis, you must ingest it, or graft it underneath your skin. For 24 hours, the fungus will incubate within you; during that time, if you swallow liquid flames or light the grafted area ablaze, you will kill the parasite. After 24 hours have passed, the only way to remove the parasite is with a remove curse spell cast at 6th level or higher. If you receive Nawre’s Blessing, nothing short of a wish spell will remove the fungus. \nWhile infected with the cordyceps sinensis, when you are reduced to 0 hit points but not killed outright, you can drop to 1 hit point instead. Once this property has been used, it can't be used again until the next dawn. \n*If you have Nawre’s Blessing tattooed or carved onto your body, the parasite becomes a trick weapon for you.* \nYou can use your choice of Intelligence, Wisdom, or Charisma, instead of Strength or Dexterity, for the attack and damage rolls made with this magic weapon Trick Weapon. As a bonus action, you can switch between the transformed and untransformed states of this magic weapon. \nIn its untransformed state, it is a squashy tendril that emerges from your chest. \nIn its transformed state, the parasite turns both your arms into grotesque elastic appendages of flesh. \n**Untransformed:** The tendril is a simple melee weapon for you that deals 1d8 bludgeoning damage on a hit and has the reach property. You can use a bonus action to make a melee weapon attack with the weapon. In addition, your walking speed increases by 10 feet. \n**Transformed:** The tendrils infiltrate your arms, turning them into massive clobbering weapons. In this form, you cannot wield any weapon or shield in your hands. These tendrils count as simple melee weapons for you, deal 1d10 bludgeoning damage on a hit, and have the reach property. When you make an attack on your turn, you can choose to do so with both arms at once, treating them as a two-handed weapon that deals 2d8 damage on a hit. \n**Curse:** Evolved Parasite. If you die while infected with the cordyceps sinensis, the parasite gains more control over your body; if you die three times, you become an NPC under the GM’s control, and your goals become aligned with that of Nawre. A GM can devise a way for the host to regain control over their body.",
    prerequisite: "Requires Nawre’s Blessing tattooed or carved onto your body.",
    prereqeval: function(v) {
		for (var i = 0; i < CurrentMagicItems.known.length; i++) {
			if (CurrentMagicItems.known[i].indexOf("nawre’s blessing") !== -1) {
				return true;
			}
		}
        return false;
    },
    weight: 2,
    weaponsAdd: {
		select: ["Cordyceps Sinensis (Untransformed)", "Cordyceps Sinensis (Transformed)"],
	},
	weaponOptions: [{
		name: "Cordyceps Sinensis (Untransformed)",
		source: [
			["TW", 220]
		],
		regExpSearch: /^(?=.*Cordyceps)(?=.*Sinensis)(?=.*Untransformed).*$/i,    
		type: "Simple",
		ability: 1,
		abilitytodamage: true,
		damage: [1, 8, "bludgeoning"],
		range: "Melee",
		description: "Tendril extending from your chest; Reach; Bonus action to make melee attack; +10 walking speed;",
		list: "melee",
		weight: 1,
		monkweapon: true,
		isAlwaysProf: true,
	},	{
		name: "Cordyceps Sinensis (Transformed)",
		source: [
			["TW", 220]
		],
		regExpSearch: /^(?=.*Cordyceps)(?=.*Sinensis)(?=.*Transformed).*$/i,    
		type: "Simple",
		ability: 1,
		abilitytodamage: true,
		damage: [1, 10, "bludgeoning"],
		range: "Melee",
		description: "Cannot wield a weapon or shield; Reach; can atk w/ both arms as two-handed weapon (2d8 dmg);",
		list: "melee",
		weight: 1,
		monkweapon: true,
		isAlwaysProf: true,
	}],
    toNotesPage: [{
        name: "Cordyceps Sinensis",
        note: [
			"\n**Trick Weapon:** As a bonus action, you can switch between the transformed and untransformed states of this weapon.",
			"\n**Untransformed:** The tendril is a simple melee weapon for you that deals 1d8 bludgeoning damage on a hit and has the reach property. You can use a bonus action to make a melee weapon attack with the weapon. In addition, your walking speed increases by 10 feet.",
			"\n**Transformed:** The tendrils infiltrate your arms, turning them into massive clobbering weapons. In this form, you cannot wield any weapon or shield in your hands. These tendrils count as simple melee weapons for you, deal 1d10 bludgeoning damage on a hit, and have the reach property. When you make an attack on your turn, you can choose to do so with both arms at once, treating them as a two-handed weapon that deals 2d8 damage on a hit.",
			"\n**Curse: Evolved Parasite.** If you die while infected with the cordyceps sinensis, the parasite gains more control over your body; if you die three times, you become an NPC under the GM’s control, and your goals become aligned with that of Nawre. A GM can devise a way forthe host to regain control over their body.",
		]
    }],
    action: [
        ["bonus action", "Cordyceps Sinensis (Transform)"],
		["bonus action", "Tendril Melee Attack"],
    ],
    extraLimitedFeatures: [{
        name: "Cordyceps Sinensis",
        usages: 1,
        recovery: "dawn",
    }],
};
MagicItemsList["dream executioner"] = {
    name: "Dream Executioner",
    source: [
        ["TW", 221]
    ],
    type: "Trick weapon (scythe, maul)",
    rarity: "rare",
    magicItemTable: "?",
    description: "This magical trick weapon has a +1 bonus to hit/dmg and can transform to be a scythe and lantern or a maul. I can deal dmg to a second creature on a hit with the scythe, and the lantern can harvest a soul from nearby dead. I can release a trapped soul in a burst of radiant and necrotic damage with the maul.",
    descriptionFull: "**Trick Weapon:** As a bonus action, you can switch between the transformed and untransformed states of this weapon. In its untransformed state, the executioner is a scythe and a lantern. In its transformed state, the weapon is a single massive maul. \nYou gain a +1 bonus to attack and damage rolls made with this magic weapon. \n**Untransformed:** When you hit a creature with the scythe, as part of the same attack, you can choose another creature within 5 feet of the original target and within your reach to attack. If the original attack roll would hit the second creature, it takes damage equal to half your initial hit. If you do so, your speed is halved until the end of your turn. In addition, the executioner has the Harvest Property. \n**Harvest.** Whenever a creature of CR 1 or higher (or 1st level or higher) dies within 15 feet of you, the lantern harvests the creature’s soul. The soul becomes trapped in the lantern and the creature cannot be resurrected until the soul is freed. As an action, you can free a soul trapped in the lantern. The lantern can hold a maximum of one soul. \n**Transformed:** The maul gains the Soul Explosion property. \n**Soul Explosion.** When you hit a creature with this weapon, you can sacrifice one of the souls held in the lantern to create a massive explosion of ghostflame, permanently destroying the soul. Each creature of your choice within 15 feet of you must make a DC 14 Dexterity saving throw, taking 2d8 radiant damage and 2d8 necrotic damage on a failed save, or half as much damage on a successful one. Undead automatically fail the saving throw.",
	attunement: true,
    action: [
        ["bonus action", "Dream Executioner (Transform)"],
		["action", "Free Trapped Soul"],
    ],
	weaponsAdd: {
		select: ["Dream Executioner (Scythe and Lantern)", "Dream Executioner (Maul)"],
	},
	weaponOptions: [{
		name: "Dream Executioner (Scythe and Lantern)",
		source: [
			["TW", 221]
		],
		regExpSearch: /^(?=.*Dream)(?=.*Executioner)(?=.*scythe)(?=.*lantern).*$/i,    
		baseWeapon: "Scythe",
		description: "Finesse, Heavy, Two-Handed, Reach; Graze; Harvest; See notes.",
		modifiers: [1, 1]
	},	{
		name: "Dream Executioner (Maul)",
		source: [
			["TW", 221]
		],
		regExpSearch: /^(?=.*Dream)(?=.*Executioner)(?=.*maul).*$/i,     
		baseWeapon: "maul",
		description: "Heavy, Two-Handed; Topple; Soul Explosion: See notes.",
		modifiers: [1, 1]
	}],
	toNotesPage: [{
        name: "Dream Executioner",
        note: [
                "**Trick Weapon.** As a bonus action, you can switch between the transformed and untransformed states of this weapon.",
				" \u2022 In its untransformed state, the executioner is a scythe and a lantern.",
				" \u2022 In its transformed state, the weapon is a single massive maul.",
				"\n**Untransformed.** When you hit a creature with the scythe, as part of the same attack, you can choose another creature within 5 feet of the original target and within your reach to attack. If the original attack roll would hit the second creature, it takes damage equal to half your initial hit. If you do so, your speed is halved until the end of your turn. In addition, the executioner has the Harvest Property.",
				"**Harvest.** Whenever a creature of CR 1 or higher (or 1st level or higher) dies within 15 feet of you, the lantern harvests the creature’s soul. The soul becomes trapped in the lantern and the creature cannot be resurrected until the soul is freed. As an action, you can free a soul trapped in the lantern. The lantern can hold a maximum of one soul.",
				"\n**Transformed.** The maul gains the Soul Explosion property.",
				"**Soul Explosion.** When you hit a creature with this weapon, you can sacrifice one of the souls held in the lantern to create a massive explosion of ghostflame, permanently destroying the soul. Each creature of your choice within 15 feet of you must make a DC 14 Dexterity saving throw, taking 2d8 radiant damage and 2d8 necrotic damage on a failed save, or half as much damage on a successful one. Undead automatically fail the saving throw.",
        ],
    }],
};
MagicItemsList["electric sawblade"] = {
    name: "Electric Sawblade",
    source: [
        ["TW", 222]
    ],
    type: "Trick weapon (longsword)",
    rarity: "rare",
    magicItemTable: "?",
    description: "This silvered longsword deals +1d6 slashing dmg and gets +1 on atk/dmg rolls against creatures not wearing metal armor. It has 3 charges that I can expend to transform it. Untransformed, I can use a reaction to parry. Transformed, it deals +1d6 slashing & lightning dmg, and my speed increases by 10ft.",
    descriptionFull: [
				"**Trick Weapon.** This longsword has 3 charges. You can expend 1 charge as a bonus action to pull the trigger under the blade to transform and infuse it with electricity for 1 minute, until you fall unconscious, or until you use a bonus action to stop the current. This weapon regains 1 charge for each 10 minutes that it spends inside a miniature Galespire Coil (often found inside hunter's workshops).",
				" \u2022 This silvered longsword deals an extra 1d6 slashing damage on a hit, and you gain a +1 bonus to attack and damage rolls against creatures not wearing metal armor, as long as the sword has at least 1 charge.",
				"\n**Untransformed.** When a melee attack that you can see would hit you, you can use your reaction to parry the attack, adding a bonus to your AC equal to your proficiency bonus against that attack. If this causes the attack to miss you and it was made with a nonmagical weapon, the weapon is destroyed by the teeth of the sawblade.",
				"\n**Transformed.** The surge of electricity causes the blade to rev faster, requiring both hands to control it. If you use one hand to attack with this sword while it is transformed, you have disadvantage on attack rolls made with it. While transformed, the longsword deals an extra 1d6 slashing and 1d6 lightning damage. In addition, the momentum generated from it propels you. Your walking speed increases by 10 feet.",
				],
    action: [
        ["bonus action", "Electric Sawblade (Transform)"],
		["reaction", "Parry (AC bonus = Prof. Mod.)"],
    ],
	weaponsAdd: {
		select: ["Electric Sawblade", "Electric Sawblade (Activated)"],
	},
	weaponOptions: [{
		name: "Electric Sawblade",
		source: [
			["TW", 222]
		],
		regExpSearch: /^(?=.*Electric)(?=.*Sawblade).*$/i,    
		baseWeapon: "longsword",
		description: "Silvered; Sap; Parry; +1d6 slashing dmg; +1 on atk/dmg rolls vs. creatures w/o metal armor; See notes.",
	},	{
		name: "Electric Sawblade (Activated)",
		source: [
			["TW", 222]
		],
		regExpSearch: /^(?=.*Electric)(?=.*Sawblade)(?=.*Activated).*$/i,     
		type: "Martial",
		ability: 1,
		abilitytodamage: true,
		damage: [1, 10, "slashing"],
		range: "Melee",
		description: "Silvered; Sap; +2d6 slashing & +1d6 lightning dmg.; Speed +10ft; +1 on atk/dmg rolls vs. creatures w/o metal armor;",
		list: "melee",
		weight: 3,
		monkweapon: false,
	}],
	extraLimitedFeatures: [{
        name: "Electric Sawblade (Transform)",
        usages: 3,
        recovery: "Special",
    }],
	toNotesPage: [{
        name: "Electric Sawblade",
        note: [
                "**Trick Weapon.** This longsword has 3 charges. You can expend 1 charge as a bonus action to pull the trigger under the blade to transform and infuse it with electricity for 1 minute, until you fall unconscious, or until you use a bonus action to stop the current. This weapon regains 1 charge for each 10 minutes that it spends inside a miniature Galespire Coil (often found inside hunter's workshops).",
				" \u2022 This silvered longsword deals an extra 1d6 slashing damage on a hit, and you gain a +1 bonus to attack and damage rolls against creatures not wearing metal armor, as long as the sword has at least 1 charge.",
				"\n**Untransformed.** When a melee attack that you can see would hit you, you can use your reaction to parry the attack, adding a bonus to your AC equal to your proficiency bonus against that attack. If this causes the attack to miss you and it was made with a nonmagical weapon, the weapon is destroyed by the teeth of the sawblade.",
				"\n**Transformed.** The surge of electricity causes the blade to rev faster, requiring both hands to control it. If you use one hand to attack with this sword while it is transformed, you have disadvantage on attack rolls made with it. While transformed, the longsword deals an extra 1d6 slashing and 1d6 lightning damage. In addition, the momentum generated from it propels you. Your walking speed increases by 10 feet.",
        ],
    }],
};
MagicItemsList["gravitational partisan"] = {
    name: "Gravitational Partisan",
    source: [
        ["TW", 223]
    ],
    type: "Trick weapon (shield & spear, glaive)",
    rarity: "rare",
    magicItemTable: "?",
    description: "This *sanctified partisan* was reinforced by gravity magic. In its untransformed state, it's a shield and spear. As a reaction, I can deflect a melee attack and counterattack. When I hit with the spear, I can transform it and get +4 AC until my next turn. In its transformed state, it becomes a glaive that can impale foes.",
    descriptionFull: "**Trick Weapon.** As a bonus action, you can switch between the transformed and untransformed states of this weapon. In its untransformed state, the sanctified partisan is a spear and a shield. In its transformed state, the spear is sheathed by the shield, which retracts into a massive blade; the weapon becomes a glaive. \n**Untransformed:** Using this pair of weapons together requires the spear to be held in one hand and the shield in the other. When you are targeted by a melee weapon attack, you can use your reaction to deflect with the shield, gaining a +2 bonus to AC against that attack. If the attack misses, you can immediately make a single melee weapon attack with the spear as part of the same reaction. \n**Transformed:** This glaive doesn’t have the heavy property. When you hit with an attack using this weapon, as part of the attack, you can pierce the target, transform the weapon, and only pull out the spear. The shield remains in the target's body, impaling it. An impaled creature takes 1d4 slashing damage at the start of each of its turns, and its speed is reduced by 15 feet. To remove the shield, the impaled target can use its action to make a DC 12 Strength check. On a success, the shield is removed and falls at the target’s feet. If you are within 5 feet of the shield, you can use a bonus action to retrieve and don it.",
    action: [
        ["bonus action", "Gravitational Partisan (Transform)"],
		["reaction", "Deflect (+4 AC)"],
		["reaction", "Spear Counterattack (with Deflect)"],
    ],
	weaponsAdd: {
		select: ["Gravitational Partisan (Spear)", "Transformed Gravitational Partisan"],
	},
	weaponOptions: [{
		name: "Gravitational Partisan (Spear)",
		source: [
			["TW", 223]
		],
		regExpSearch: /^(?=.*gravitational)(?=.*partisan)(?=.*spear).*$/i,    
		type: "Simple",
		ability: 1,
		abilitytodamage: true,
		damage: [1, 6, "piercing"],
		range: "Melee, 20/60 ft",
		description: "Thrown, Sap; Deflect; Counterattack on a successful parry; Gravity barrier on a hit (+4 AC until next turn);",
		list: "melee",
		weight: 3,
		ammo: "spear",
		monkweapon: true,
	},	{
		name: "Transformed Gravitational Partisan",
		source: [
			["TW", 223]
		],
		regExpSearch: /^(?=.*transformed)(?=.*gravitational)(?=.*partisan).*$/i,    
		type: "Martial",
		ability: 1,
		abilitytodamage: true,
		damage: [1, 10, "slashing"],
		range: "Melee",
		description: "Reach, Two-Handed; Graze; Impale: target takes 2d4 slashing dmg/turn, its speed is 0, DC 14 Str save to remove;",
		list: "melee",
		weight: 6,
		monkweapon: false,
	}],
	shieldAdd: "Gravitational Partisan Shield",
	toNotesPage: [{
		name: "Gravitational Partisan",
		note: [
			"\n**Trick Weapon.** As a bonus action, you can switch between the transformed and untransformed states of this weapon.",
			" \u2022 In its untransformed state, the *gravitational partisan* is a spear and a shield.",
			" \u2022 In its transformed state, the spear is sheathed by the shield, which retracts into a massive blade; the weapon becomes a glaive.",
			"\n**Untransformed.** Using this pair of weapons together requires the spear to be held in one hand and the shield in the other.",
			" \u2022 When you are targeted by a melee weapon attack, you can use your reaction to deflect with the shield, gaining a +4 bonus to AC against that attack. If the attack misses, you can immediately make a single melee weapon attack with the spear as part of the same reaction.", 
			" \u2022 On a hit, as part of the attack, you can transform the weapon and a gravity barrier forms in front of you, granting you a +4 bonus to AC until the start of your next turn.",
			"\n**Transformed.** This glaive doesn't have the heavy property. When you hit with an attack using this weapon, as part of the attack, you can pierce the target, transform the weapon, and only pull out the spear. The shield remains in the target's body, impaling it.", 
			" \u2022 An impaled creature takes 2d4 slashing damage at the start of each of its turns, and its speed is reduced to 0. To remove the shield, the impaled target can use its action to make a DC 14 Strength check. Medium or smaller creatures have disadvantage on the check.", 
			" \u2022 On a success, the shield is removed and falls at the target's feet. If you are within 5 feet of the shield, you can use a bonus action to retrieve and don it.",
		]
	}]
};
MagicItemsList["improved meat hookshot"] = {
    name: "Improved Meat Hookshot",
    source: [
        ["TW", 224]
    ],
    type: "Trick weapon (blunderbuss & sickle)",
    rarity: "rare",
    magicItemTable: "?",
    description: "This improved trick weapon gets a +1 bonus to attack and damage rolls. In its untransformed state, it's a sickle and blunderbuss connected by a chain. Transformed, the sickle becomes a bladed attachment on the blunderbuss which I can fire to deal extra slashing dmg and reel in a creature.",
    descriptionFull: "**Trick Weapon:** As a bonus action, you can switch between the transformed and untransformed states of this weapon. In its untransformed state, the hookshot is two one-handed weapons connected by a short length of chain; a sickle and a blunderbuss. In its transformed state, the weapon is a single two-handed weapon; a blunderbuss with a bladed attachment that can act as a battleaxe. \n**Untransformed:** While untransformed, the sickle has the finesse property, and the blunderbuss doesn't have the two-handed property. Using this pair of weapons together requires the sickle to be held in one hand and the blunderbuss in the other. When you take the Attack action with the sickle, you can make an attack with the blunderbuss as a bonus action, ignoring the barrel property. If you hit a creature with the sickle and the blunderbuss on the same turn, it has disadvantage on Strength checks and Strength saving throws until the end of your next turn. \n**Transformed:** When you take the Attack action, you can attack with either the blunderbuss or the bladed attachment (which uses the stats of a battleaxe wielded with two hands). In addition, this item gains the Hookshot property. \n**Hookshot. As an action, you can launch the sickle from the blunderbuss, to which it remains attached by a length of sturdy chain. Make a ranged weapon attack against a creature you can see within 60 feet of you. On a hit, the target takes slashing damage equal to 1d4 plus your Dexterity modifier. If the creature is of your size or smaller, it must succeed on a DC 15 Strength saving throw or be pulled in a straight line to the nearest unoccupied space adjacent to you. If the creature is of a size larger than yours, you are pulled in a straight line to the nearest unoccupied space adjacent to it. At the end of your turn, you can detach the hook from the creature and reattach it to the blunderbuss; if you don't, the creature is grappled by you.",
    action: [
        ["bonus action", "Improved Hookshot (Transform)"],
		["bonus action", "Blunderbuss (after Sickle Attack)"],
		["action", "Hookshot"],
    ],
	weaponsAdd: {
		select: ["Improved Hookshot (Blunderbuss)", "Improved Hookshot (Sickle)", "Transformed Improved Hookshot"],
	},
	weaponOptions: [{
		name: "Improved Hookshot (Blunderbuss)",
		source: [
			["TW", 224]
		],
		regExpSearch: /^(?=.*improved)(?=.*hookshot)(?=.*blunderbuss).*$/i,    
		type: "Simple",
		ability: 2,
		abilitytodamage: true,
		damage: [2, 4, "piercing"],
		range: "20 ft cone",
		description: "Barrel 2 (S), Blaring, Twinned Barrel: can fire both barrels for 2d6 dmg, bonus action atk after attacking with sickle.",
		list: "firearm",
		ammo: "lead bullets",
		weight: 10,
		dc: true,
		modifiers: [1, 1],
	},	{
		name: "Improved Hookshot (Sickle)",
		source: [
			["TW", 224]
		],
		regExpSearch: /^(?=.*improved)(?=.*hookshot)(?=.*sickle).*$/i,     
		type: "Simple",
		ability: 1,
		abilitytodamage: true,
		damage: [1, 4, "slashing"],
		range: "Melee",
		description: "Finesse, Light; Nick; If you hit a creat. w/ sickle & blunderbuss in same turn, it has Disadv. on Str checks/saves.",
		list: "melee",
		weight: 2,
		monkweapon: true,
		modifiers: [1, 1],
	},	{
		name: "Transformed Improved Hookshot",
		source: [
			["TW", 224]
		],
		regExpSearch: /^(?=.*improved)(?=.*hookshot)(?=.*transformed).*$/i,     
		type: "Martial",
		ability: 1,
		abilitytodamage: true,
		damage: [1, 10, "slashing"],
		range: "Melee",
		description: "Blunderbuss or melee. Hookshot: fire sickle as ranged atk, range 30ft, 1d4+Dex slash. dmg. See notes.",
		list: "melee",
		weight: 12,
		monkweapon: false,
		modifiers: [1, 1],
	}],
	toNotesPage: [{
		name: "Meat Hookshot",
		note: [
			"\n**Trick Weapon.** As a bonus action, you can switch between the transformed and untransformed states of this weapon.",
			" \u2022 In its untransformed state, the hookshot is two one-handed weapons — a sickle and a blunderbuss connected by a short length of chain.",
			" \u2022 In its transformed state, the weapon is a single two-handed weapon — a blunderbuss with a bladed attachment that can act as a battleaxe.",
			"\n**Untransformed.** Using this pair of weapons together requires the sickle to be held in one hand and the blunderbuss in the other. When you take the Attack action with the sickle, you can make an attack with the blunderbuss as a bonus action, ignoring the barrel property. If you hit a creature with the sickle and the blunderbuss on the same turn, it has disadvantage on Strength checks and Strength saving throws until the end of your next turn.",
			"\n**Transformed.** When you take the Attack action, you can attack with either the blunderbuss or the bladed attachment (which uses the stats of a battleaxe wielded with two hands). In addition, this item gains the **Hookshot** property.",
			"\n**Hookshot.** As an action, you can launch the sickle from the blunderbuss, to which it remains attached by a length of sturdy chain. Make a ranged weapon attack against a creature you can see within 60 feet of you. On a hit, the target takes slashing damage equal to 1d4 plus your Dexterity modifier.",
			" \u2022 If the creature is of your size or smaller, it must succeed on a DC 15 Strength saving throw or be pulled in a straight line to the nearest unoccupied space adjacent to you. If the creature is of a size larger than yours, you are pulled in a straight line to the nearest unoccupied space adjacent to it.",
			" \u2022 At the end of your turn, you can detach the hook from the creature and reattach it to the blunderbuss; if you don't, the creature is grappled by you.",
			"\n#Blunderbuss Properties:#",
			" \u2022 **Barrel 2.** The weapon can be fired twice before it must be reloaded.", 
			" \u2022 **Slow reload.** You must use an attack or an action to reload this firearm. You must have one free hand to do so.",
			" \u2022 **Blaring.** Firing this weapon makes a thunderous crack. The sound can be heard from up to 100 feet away. Firing a weapon with this property makes it hard to go undetected; you have disadvantage on Stealth checks to hide until the start of your next turn. In addition, if a creature is within the area of the sound blast, it has advantage on Perception checks against you.",
			" \u2022 **Twinned Barrel.** This weapon has two barrels that can each hold a bullet and can both be loaded as part of reloading the weapon. You can fire both barrels of a double barrel weapon as part of an attack, instead of each barrel individually. Doing so empties the barrel of the weapon (as per the Barrel property) but increases the damage die of the weapon on a hit (from d4 to d6).",
		]
	}]
};
MagicItemsList["improved rifling cleaver"] = {
    name: "Improved Rifling Cleaver",
    source: [
        ["TW", 225]
    ],
    type: "Trick weapon (cleaver, rifle)",
    rarity: "rare",
    magicItemTable: "?",
    description: "This magic trick weapon gets a +1 bonus to attack and damage rolls. Both a rifle and an enormous cleaver, this weapon allows hunters to fight at range and rend flesh when beasts get close.  After I make an attack with the untransformed cleaver, I can fire at a creature directly behind me and transform it into a rifle.",
    descriptionFull: "Rather than carrying separate firearms, which often become ineffective when beasts get close, many hunters conceal them within enormous cleavers designed to rend flesh. Such creations of gunpowder and metal are aptly named *rifling cleavers.* You have a +1 to attack and damage rolls made with both forms of this magic weapon. \n**Trick Weapon.** As a bonus action, you can switch between the transformed and untransformed states of this weapon. In its untransformed state, it is is a large cleaver. In its transformed state, the weapon is a rifle. You can reload the rifle even in its untransformed state. \n**Untransformed.** After making a melee weapon attack with this weapon, you can immediately use your bonus action to make a ranged weapon attack with the rifle against a creature within range that is behind you and in a straight line with you and your first target. This shot extends the weapon, transforming it. \n**Transformed.** This rifle has the Barrel (F) property instead of the Barrel (S) property. Though unwieldy in melee, you can use a bonus action to make a melee attack with the opposite end of the rifle. This attack uses your choice of your Strength or Dexterity modifier. The damage die for this attack is a d8, and it deals bludgeoning damage. Your weapon then reverts to its untransformed state.",
    action: [
        ["bonus action", "Rifling Cleaver (Transform)"],
		["bonus action", "Backwards Rifle Shot"],
		["bonus action", "Rifle End Attack"],
		["bonus action", "Steady"],
    ],
	weaponsAdd: {
		select: ["Improved Rifling Cleaver (Cleaver)", "Improved Rifling Cleaver (Rifle)"],
	},
	weaponOptions: [{
		name: "Improved Rifling Cleaver (Cleaver)",
		source: [
			["TW", 225]
		],
		regExpSearch: /^(?=.*improved)(?=.*rifling)(?=.*cleaver).*$/i,
		baseWeapon: "cleaver",
		description: "Heavy, Versatile (1d12); Cleave; See notes for additional actions.",
		modifiers: [1, 1],
	},	{
		name: "Improved Rifling Cleaver (Rifle)",
		source: [
			["TW", 225]
		],
		regExpSearch: /^(?=.*improved)(?=.*cleaver)(?=.*rifle).*$/i,
		baseWeapon: "rifle",
		description: "Barrel 2 (F), Blaring, Steady, Twinned Barrel, Two-Handed; See notes for additional actions.",
		modifiers: [1, 1],
	}],
	toNotesPage: [{
        name: "Improved Rifling Cleaver",
        note: [
                "**Trick Weapon.** As a bonus action, you can switch between the transformed and untransformed states of this weapon.",
				" \u2022 In its untransformed state, it is is a large cleaver.",
				" \u2022 In its transformed state, the weapon is a rifle. You can reload the rifle even in its untransformed state.",
				" \u2022 You have a +1 to attack and damage rolls made with both forms of this magic weapon.",
				"\n**Untransformed:** After making a melee weapon attack with this weapon, you can immediately use your bonus action to make a ranged weapon attack with the rifle against a creature within range that is behind you and in a straight line with you and your first target. This shot extends the weapon, transforming it.",
				"\n**Transformed:** This rifle has the Barrel (F) property instead of the Barrel (S) property. Though unwieldy in melee, you can use a bonus action to make a melee attack with the opposite end of the rifle. This attack uses your choice of your Strength or Dexterity modifier. The damage die for this attack is a d8, and it deals bludgeoning damage. Your weapon then reverts to its untransformed state.",
				"\n#Rifle Properties.#",
				" \u2022 **Barrel 2:** The weapon can be fired twice before it must be reloaded.",
				" \u2022 **Fast reload:** You must use an attack, an action, or a bonus action to reload this firearm. You must have one free hand to do so.",
				" \u2022 **Blaring:** Firing this weapon makes a thunderous crack. The sound can be heard from up to 100 feet away. Firing this weapon makes it hard to go undetected; you have disadvantage on Stealth checks to hide until the start of your next turn. In addition, if a creature is within the area of the sound blast, it has advantage on Perception checks against you.",
				" \u2022 **Steady:** This weapon can be stabilized for greater accuracy. As a bonus action, you give yourself a bonus to your next attack roll with this weapon this turn equal to your proficiency bonus, and attacking at long range doesn’t impose disadvantage on the attack roll. You can use this bonus action only if you haven’t moved during your turn, and after you use the bonus action, your speed is halved until the end of your turn.",
				" \u2022 **Twinned Barrel:** This weapon has two barrels that can each hold a bullet and can both be loaded as part of reloading the weapon. You can fire both barrels of a double barrel weapon as part of an attack, instead of each barrel individually. Doing so empties the barrel of the weapon but increases the damage die of the weapon on a hit (from d10 to d12).",
        ],
    }],
};
MagicItemsList["moongilded tarblood"] = {
    name: "Moongilded Tarblood",
    source: [
        ["TW", 226]
    ],
    type: "Trick weapon (longbow, longsword)",
    rarity: "rare",
    description: "While attuned to this weapon, I get access to a Blood Shot option from the Blood Archer Fighter subclass. This magical trick weapon transforms between a longsword, which can regenerate a use of Blood Shot when I deal 25 dmg in a turn, and a longbow which can use either arrows or lead bullets.",
    descriptionFull: "This weapon, crafted with moongold, gives you a 1d4 bonus to damage rolls against nonhumanoid creatures. Moongold acts as a guiding light in the darkness; creatures holding or wearing moongold have advantage on saving throws against being frightened and madness. In addition, you gain a +1 bonus to attack and damage rolls made with this weapon. \n**Special Attunement:** While you are attuned to this weapon, you know one Blood Shot option of your choice from the Blood Archer Fighter (choose between Bloodboil, Constraining, Shadowblood, or Thunderblood Arrow). You can use this option when you make an attack with this bow. You can use this option twice, and you regain all expended uses daily at dawn. If you are a Blood Archer Fighter, you instead gain 2 additional uses of your Blood Shot feature. \n**Trick Weapon:** As a bonus action, you can switch between the transformed and untransformed states of this weapon. In its untransformed state, the moongilded tarblood is a longbow. In its transformed state, it’s a longsword. By breaking the string, the tarblood melts and flows around the ivory handle, congealing into a longsword; if the sword handle is forcefully shoved into the blade, the weapon reverts into a longbow. Whenever you transform the weapon, the tarblood becomes unstable; your next hit with this weapon reduces the target’s speed by 10 feet until the start of your next turn as the tar wraps around them, before retreating to the weapon. \nUntransformed. The bow can fire regular ammunition, or it can fire lead bullets, the tarblood melting them into arrows. \nTransformed. While this weapon is transformed, if you inflict 25 points of damage with it in a single turn against a creature that has blood, and you have no more than one use of your Blood Shot remaining, you regain one use of your Blood Shot.",
    attunement: true,
	weight: 3,
    weaponsAdd: {
		select: ["Moongilded Tarblood (Longsword)", "Moongilded Tarblood (Longbow)"],
	},
	weaponOptions : [{
		name: "Moongilded Tarblood (Longsword)",
		source: [
			["TW", 226]
		],
		regExpSearch: /^(?=.*moongilded)(?=.*tarblood)(?=.*longsword).*$/i,
		baseWeapon: "longsword",
		description: "Versatile (1d10); Sap; Moongold (+1d4 against non-humanoids); See notes;",
		modifiers: [1, 1],
	},	{
		name: "Moongilded Tarblood (Longbow)",
		source: [
			["TW", 226]
		],
		regExpSearch: /^(?=.*moongilded)(?=.*tarblood)(?=.*longbow).*$/i,
		baseWeapon: "longbow",
		description: "Two-Handed, Heavy; Slow; Moongold (+1d4 against non-humanoids), can use lead bullets or arrows;",
		modifiers: [1, 1],
		ammo: "lead bullets",
		ammo: "arrows",
	}],
    toNotesPage: [{
        name: "Moongilded Tarblood",
        note: [
			"\n**Trick Weapon:** As a bonus action, you can switch between the transformed and untransformed states of this weapon. Whenever you transform the weapon, the tarblood becomes unstable; your next hit with this weapon reduces the target’s speed by 10 feet until the start of your next turn as the tar wraps around them, before retreating to the weapon.",
			" \u2022 In its untransformed state, the moongilded tarblood is a longbow.",
			" \u2022 In its transformed state, it’s a longsword.",
			" \u2022 You have a +1 to attack and damage rolls made with both forms of this magic weapon.",
			"\n**Untransformed:** The bow can fire regular ammunition, or it can fire lead bullets, the tarblood melting them into arrows.",
			"\n**Transformed:** While this weapon is transformed, if you inflict 25 points of damage with it in a single turn against a creature that has blood, and you have no more than one use of your Blood Shot remaining, you regain one use of your Blood Shot.",
			"\n**Special Attunement:** While you are attuned to this weapon, you know one **Blood Shot** option of your choice from the Blood Archer Fighter (choose between Bloodboil, Constraining, Shadowblood, or Thunderblood Arrow). You can use this option when you make an attack with this bow. You can use this option twice, and you regain all expended uses daily at dawn. If you are a Blood Archer Fighter, you instead gain 2 additional uses of your Blood Shot feature.",
			" \u2022 *Bloodboil Arrow:* The arrow detonates in a cloud of ignited blood after your attack. Immediately after the arrow hits the creature, the target and all other creatures within 10 feet of it take 2d6 fire damage as their bodies start burning. This fire damage ignores resistance. The fire damage increases to 4d6 when you reach 18th level.",
			" \u2022 *Constraining Arrow:* The creature hit by the arrow takes an extra 2d6 acid damage, its speed is reduced by 10 feet, and it takes 2d6 acid damage the first time on each turn it moves 1 foot or more without teleporting. A creature can use its action to make an Athletics check against your Blood Shot save DC, removing the tendrils from itself or another creature within its reach on a success. Otherwise, the tendrils last for 1 minute or until you use this option again. \nBoth acid damages increase to 4d6 when you reach 18th level.", 
			" \u2022 *Shadowblood Arrow:* The creature hit by the arrow takes an extra 2d6 necrotic damage and its blood forms a dark red mist that rises in a 10- foot radius around the target. This mist is magical darkness and spreads around corners. A creature with darkvision can't see through this darkness, and nonmagical light can't illuminate it. It lasts until the start of your next turn. \nThe necrotic damage increases to 4d6 when you reach 18th level.",
			" \u2022 *Thunderblood Arrow:* The arrow detonates immediately after it hits your target; the creature takes an extra 2d6 thunder damage and is pushed back 15 feet. In addition, it must succeed on a Strength saving throw against your Blood Shot save DC or be knocked prone. \nThe thunder damage increases to 4d6 when you reach 18th level.",
		]
    }],
    action: [
        ["bonus action", "Moongilded Tarblood (Transform)"],
    ],
	savetxt: {
        adv_vs : ["frightened", "madness"],
    },
    extraLimitedFeatures: [{
        name: "Blood Shot",
        usages: 2,
        recovery: "dawn",
	}],
};
MagicItemsList["moongold equalizer"] = {
    name: "Moongold Equalizer",
    source: [
        ["TW", 226]
    ],
    type: "Trick weapon (flintlock, rifle)",
    rarity: "rare",
    description: "This moongilded trick weapon can transform between a flintlock and a rifle. I don't get disadvantage on attacks against creatures within 5 ft with the flintlock. With the rifle, I can make replace my attack with a violent shot that deals +2d8 damage as long as I don't move that turn, then it changes back into its flintlock state.",
    descriptionFull: "This weapon, crafted with moongold, gives you a 1d4 bonus to damage rolls against nonhumanoid creatures. Moongold acts as a guiding light in the darkness; creatures holding or wearing moongold have advantage on saving throws against being frightened and madness. \nAs a bonus action, you can magically melt the moongold before solidifying it, switching between the transformed and untransformed states of this weapon. In its untransformed state, the equalizer is a flintlock. In its transformed state, the weapon is an ornate, two-handed weapon; a rifle. \nUntransformed. This flintlock has the Barrel 2 (F) property. In addition, being within 5 feet of a hostile creature doesn’t impose disadvantage on your ranged attack rolls with this flintlock. \nTransformed. When you attack with this weapon, you can choose to replace your attack with a particularly violent shot. Make a ranged weapon attack. On a hit, the target takes the weapon’s damage plus an extra 2d8 piercing damage. Hit or miss, this causes the weapon to partially liquefy and turn back into its untransformed state; it can’t be transformed again until the end of your next turn. You can use this attack only if you haven’t moved during this turn, and after you use this attack, your speed is 0 until the end of your turn.",
	weight: 8,
    weaponsAdd: {
		select: ["Moongold Equalizer (Flintlock)", "Moongold Equalizer (Rifle)"],
	},
	weaponOptions : [{
		name: "Moongold Equalizer (Flintlock)",
		source: [
			["TW", 227]
		],
		regExpSearch: /^(?=.*moongold)(?=.*equalizer)(?=.*flintlock).*$/i,
		baseWeapon: "flintlock",
		description: "Barrel 2 (F), Blaring, Light; Moongold (+1d4 against non-humanoids); No disadv. on atks w/i 5ft;",
		ammo: "lead bullets",
	},	{
		name: "Moongold Equalizer (Rifle)",
		source: [
			["TW", 227]
		],
		regExpSearch: /^(?=.*moongold)(?=.*equalizer)(?=.*rifle).*$/i,
		baseWeapon: "rifle",
		description: "Barrel 2(S), Blaring, Steady, Twinned Barrel; Moongold (+1d4 against non-humanoids); See notes;",
		ammo: "lead bullets",
	}],
    toNotesPage: [{
        name: "Moongold Equalizer",
        note: [
			"\n**Trick Weapon:** As a bonus action, As a bonus action, you can magically melt the moongold before solidifying it, switching between the transformed and untransformed states of this weapon.",
			" \u2022 In its untransformed state, the equalizer is a flintlock.",
			" \u2022 In its transformed state, the weapon is an ornate, two-handed weapon; a rifle.",
			" \u2022 This weapon, crafted with moongold, gives you a 1d4 bonus to damage rolls against nonhumanoid creatures. Moongold acts as a guiding light in the darkness; creatures holding or wearing moongold have advantage on saving throws against being frightened and madness.",
			"\n**Untransformed:** This flintlock has the Barrel 2 (F) property. In addition, being within 5 feet of a hostile creature doesn’t impose disadvantage on your ranged attack rolls with this flintlock.",
			"\n**Transformed:** When you attack with this weapon, you can choose to replace your attack with a particularly violent shot. Make a ranged weapon attack. On a hit, the target takes the weapon’s damage plus an extra 2d8 piercing damage. Hit or miss, this causes the weapon to partially liquefy and turn back into its untransformed state; it can’t be transformed again until the end of your next turn. You can use this attack only if you haven’t moved during this turn, and after you use this attack, your speed is 0 until the end of your turn.",
			"\n#Firearm Properties.#",
			" \u2022 **Barrel 2:** The weapon can be fired twice before it must be reloaded.",
			" \u2022 **Fast Reload (Flintlock):** You must use an attack, an action, or a bonus action to reload this firearm. You must have one free hand to do so.",
			" \u2022 **Slow Reload (Rifle):** You must use an attack or an action to reload this firearm. You must have one free hand to do so.",
			" \u2022 **Blaring:** Firing this weapon makes a thunderous crack. The sound can be heard from up to 100 feet away. Firing this weapon makes it hard to go undetected; you have disadvantage on Stealth checks to hide until the start of your next turn. In addition, if a creature is within the area of the sound blast, it has advantage on Perception checks against you.",
			" \u2022 **Steady:** This weapon can be stabilized for greater accuracy. As a bonus action, you give yourself a bonus to your next attack roll with this weapon this turn equal to your proficiency bonus, and attacking at long range doesn’t impose disadvantage on the attack roll. You can use this bonus action only if you haven’t moved during your turn, and after you use the bonus action, your speed is halved until the end of your turn.",
			" \u2022 **Twinned Barrel:** This weapon has two barrels that can each hold a bullet and can both be loaded as part of reloading the weapon. You can fire both barrels of a double barrel weapon as part of an attack, instead of each barrel individually. Doing so empties the barrel of the weapon but increases the damage die of the weapon on a hit (from d10 to d12).",
		]
    }],
    action: [
        ["bonus action", "Moongold Equalizer (Transform)"],
    ],
	savetxt: {
        adv_vs : ["frightened", "madness"],
    },
};
MagicItemsList["phantom limb"] = {
    name: "Phantom Limb",
    source: [
        ["TW", 228]
    ],
    type: "Trick weapon (unarmed, shortsword)",
    rarity: "rare",
	attunement: true,
    description: "Infused with the bones of a beast with a mixture of quicksilver, mithral, and osteomantic magic, this trick weapon can transform between a metallic hand that can help deflect incoming attacks and a shortsword that can illuminate undead that I hit, even when they're invisible.",
    descriptionFull: "**Attunement:** When you attune to this item, the cold, lifeless hand merges with your flesh and either replaces a missing arm or consumes one of your existing arms (your choice when you attune to this weapon). An arm consumed in this way does not reappear when you unattune from the item. **Trick Weapon:** As a bonus action, you can switch between the transformed and untransformed states of this weapon. In its untransformed state, the phantom limb is a metallic, articulating hand. In its transformed state, the weapon is a shortsword. **Untransformed:** Unarmed strikes you make with the phantom limb deal magical bludgeoning damage. In addition, the limb reacts to deflect incoming blows, granting you a +1 bonus to AC. **Transformed:** You gain a +1 bonus to attack and damage rolls made with this shortsword, which gains the Haunting Mark property. **Haunting Mark:** Whenever you hit an undead creature with an attack using this blade then, for the next minute, you can see its form as a glowing outline, even if it is invisible, and you always know the direction and distance to the creature while it is on the same plane as you. This effect ends early if you hit a different undead creature with an attack using this blade, or if the phantom limb is no longer in its transformed state.",
	weight: 2,
    weaponsAdd: {
		select: ["Phantom Limb", "Transformed Phantom Limb"],
	},
	weaponOptions : [{
		name: "Phantom Limb",
		source: [
			["TW", 228]
		],
		regExpSearch: /phantom limb/i,
		baseWeapon: "unarmed strike",
		description: "Deals magical bludgeoning damage; +1 to AC;",
	},	{
		name: "Transformed Phantom Limb",
		source: [
			["TW", 228]
		],
		regExpSearch: /^(?=.*phantom)(?=.*limb)(?=.*transformed).*$/i,
		baseWeapon: "shortsword",
		description: "Finesse, Light; Vex; Haunting Mark: When I hit an undead, I can see it and know it's location at all times;",
		modifiers: [1, 1],
	}],
    toNotesPage: [{
        name: "Phantom Limb",
        note: [
			"\n**Attunement:** When you attune to this item, the cold, lifeless hand merges with your flesh and either replaces a missing arm or consumes one of your existing arms (your choice when you attune to this weapon). An arm consumed in this way does not reappear when you unattune from the item.",
			"\n**Trick Weapon:** As a bonus action, you can switch between the transformed and untransformed states of this weapon.",
			" \u2022 In its untransformed state, the *phantom limb* is a metallic, articulating hand.",
			" \u2022 In its transformed state, the weapon is a shortsword.",
			"\n**Untransformed:** Unarmed strikes you make with the *phantom limb* deal magical bludgeoning damage. In addition, the limb reacts to deflect incoming blows, granting you a +1 bonus to AC.",
			"\n**Transformed:** You gain a +1 bonus to attack and damage rolls made with this shortsword, which gains the Haunting Mark property.",
			"\n**Haunting Mark:** Whenever you hit an undead creature with an attack using this blade then, for the next minute, you can see its form as a glowing outline, even if it is invisible, and you always know the direction and distance to the creature while it is on the same plane as you. This effect ends early if you hit a different undead creature with an attack using this blade, or if the phantom limb is no longer in its transformed state.",
		]
    }],
    action: [
        ["bonus action", "Phantom Limb (Transform)"],
    ],
	extraAC : [{
		mod: 1,
		name: "Phantom Limb",
		magic: true, 
	}],
};
MagicItemsList["ravenous gazer"] = {
    name: "Ravenous Gazer",
    source: [
        ["TW", 229]
    ],
    type: "Trick weapon (glaive)",
    rarity: "rare",
	attunement: true,
    description: "I can feed my blood into this magical glaive to transform it into a glaive that also acts as a spellcasting focus, gives me a +2 bonus to spell attack rolls, increases my Spell Save DC by 1, and gives me truesight to 30 ft.",
    descriptionFull: "Any creature that attunes to this glaive is considered proficient with it. You gain a +1 bonus to attack and damage rolls made with this magic weapon. **Trick Weapon:** As a bonus action, you can switch between the transformed and untransformed states of this weapon. In its untransformed state, the gazer is a glaive. In its transformed state, the gazer is a glaive which can be used as a spellcasting focus. \nTo transform this weapon, you must feed it your blood: each time you shift this weapon into its transformed state, or start your turn with the glaive in its transformed state, you take 1d4 necrotic damage, which cannot be reduced in any way. This damage cannot break your concentration. **Transformed:** While the glaive is in its transformed state, it grants you a +2 bonus to spell attack rolls, increases your spell save DC by 1, and gives you truesight out to 30 feet.",
	weight: 6,
    weaponsAdd: {
		select: ["Ravenous Gazer", "Transformed Ravenous Gazer"],
	},
	weaponOptions : [{
		name: "Ravenous Gazer",
		source: [
			["TW", 228]
		],
		regExpSearch: /ravenous gazer/i,
		isAlwaysProf: true,
		baseWeapon: "glaive",
		description: "Heavy, Reach, Two-Handed; Graze; I take 1d4 necrotic dmg each turn when I transform this weapon.",
		modifiers: [1, 1],
	},	{
		name: "Transformed Ravenous Gazer",
		source: [
			["TW", 228]
		],
		regExpSearch: /^(?=.*ravenous)(?=.*gazer)(?=.*transformed).*$/i,
		isAlwaysProf: true,
		baseWeapon: "glaive",
		description: "Heavy, Reach, Two-Handed; Graze; +2 to spell attack rolls, spell save DC +1, truesight 30 ft.",
		modifiers: [1, 1],
	}],
    toNotesPage: [{
        name: "Ravenous Gazer",
        note: [
			"Any creature that attunes to this glaive is considered proficient with it. You gain a +1 bonus to attack and damage rolls made with this magic weapon.",
			"\n**Trick Weapon:** As a bonus action, you can switch between the transformed and untransformed states of this weapon.",
			" \u2022 In its untransformed state, gazer is a glaive.",
			" \u2022 In its transformed state, the gazer is a glaive which can be used as a spellcasting focus.",
			" \u2022 To transform this weapon, you must feed it your blood: each time you shift this weapon into its transformed state, or start your turn with the glaive in its transformed state, you take 1d4 necrotic damage, which cannot be reduced in any way. This damage cannot break your concentration.",
			"\n**Transformed:** While the glaive is in its transformed state, it grants you a +2 bonus to spell attack rolls, increases your spell save DC by 1, and gives you truesight out to 30 feet.",
		]
    }],
    action: [
        ["bonus action", "Ravenous Gazer (Transform)"],
    ],
	vision: [
		["Truesight", 30],
	],
	calcChanges: {	
		spellCalc: [
			function (type, spellcasters, ability) {
				if (type == "dc") return 1;
				if (type == "attack") return 2;
			},
			"I add +1 to all the saving throw DCs of my spells when my Ravenous Gazer is transformed.",
			"I add +2 to my spell attack rolls when my Ravenous Gazer is transformed.",
		],	
	},
};
MagicItemsList["serpent bladewhip"] = {
    name: "Serpent Bladewhip",
    source: [
        ["TW", 231]
    ],
    type: "Trick weapon (whip, rapier)",
    rarity: "rare",
	attunement: true,
    description: "This cold, magical snake buries itself into my forearm. This trick weapon can transform between a whip and a rapier. As a whip, my reach is 15ft and deals an extra 2d4 dmg when I hit a creature twice in a turn. Transformed, I take 1 dmg per turn to power the bladewhip's Fireblood Poison (see notes).",
    descriptionFull: "**Attunement:** When you attune to this weapon, it inflicts 1d4 piercing damage, and you can't be disarmed of this weapon. **Trick Weapon:** As a bonus action, you can switch between the transformed and untransformed states of this weapon. **Untransformed:** Attacks you make with the serpent bladewhip add an additional 5 feet to your reach, as well as when determining your reach for opportunity attacks with it. In addition, if you hit a creature twice in a turn with this weapon, the whip’s devouring hunger awakens and tears out more of its flesh, dealing an extra 2d4 slashing damage. **Transformed:** While transformed, you take 1 piercing damage at the start of each of your turns as the blade drains your blood to empower itself. This rapier gains the Fireblood Poison property and is considered silvered. **Fireblood Poison:** Once on each of your turns when you hit a creature with an attack using this blade, you can coat the wound with poison and the target must make a DC 14 Constitution saving throw. On a failure, it is poisoned for the next minute as its innards start to boil. This **can** affect creatures immune to the poisoned condition. While poisoned in this way, the creature takes 1d6 fire damage at the start of each of its turns. This damage ignores resistance to fire damage. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the blade's Fireblood Poison for the next 24 hours.",
	weight: 3,
    weaponsAdd: {
		select: ["Serpent Bladewhip", "Transformed Serpent Bladewhip"],
	},
	weaponOptions : [{
		name: "Serpent Bladewhip",
		source: [
			["TW", 231]
		],
		regExpSearch: /serpent bladewhip/i,
		baseWeapon: "whip",
		range: "15 ft",
		description: "Finesse, Reach; Slow; If I hit a creature twice in one turn, deals an extra 2d4 slashing dmg.",
		modifiers: [1, 1],
	},	{
		name: "Transformed Serpent Bladewhip",
		source: [
			["TW", 231]
		],
		regExpSearch: /^(?=.*serpent)(?=.*bladewhip)(?=.*transformed).*$/i,
		baseWeapon: "rapier",
		description: "Silvered, Finesse; Vex; I take 1 dmg each turn; Fireblood Poison: DC 14 Con save or poisoned, see notes;",
		modifiers: [1, 1],
	}],
	toNotesPage: [{
        name: "Serpent Bladewhip",
        note: [
			"**Attunement:** When you attune to this weapon, the cold, lifeless snake wraps around your forearm and bites your flesh, burying its head beneath it and inflicting 1d4 piercing damage. While attuned, you cannot be disarmed of this magical weapon. Ending the attunement causes the head to retract and the item to fall to the ground.",
			"\n**Trick Weapon:** As a bonus action, you can switch between the transformed and untransformed states of this weapon.",
			" \u2022 In its untransformed state, the bladewhip is a metallic whip. ",
			" \u2022 In its transformed state, the weapon solidifies by coagulating your blood to form a rapier.",
			"\n**Untransformed:** Attacks you make with the *serpent bladewhip* add an additional 5 feet to your reach, as well as when determining your reach for opportunity attacks with it. In addition, if you hit a creature twice in a turn with this weapon, the whip’s devouring hunger awakens and tears out more of its flesh, dealing an extra 2d4 slashing damage.",
			"\n**Transformed:** While transformed, you take 1 piercing damage at the start of each of your turns as the blade drains your blood to empower itself. This rapier gains the **Fireblood Poison** property and is considered silvered.",
			"\n**Fireblood Poison:** Once on each of your turns when you hit a creature with an attack using this blade, you can coat the wound with poison and the target must make a DC 14 Constitution saving throw. On a failure, it is poisoned for the next minute as its innards start to boil. This can affect creatures immune to the poisoned condition. While poisoned in this way, the creature takes 1d6 fire damage at the start of each of its turns. This damage ignores resistance to fire damage.",
			" \u2022 A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the blade's Fireblood Poison for the next 24 hours.",
		]
    }],
    action: [
        ["bonus action", "Serpent Bladewhip (Transform)"],
    ],
};
MagicItemsList["uncharged claw"] = {
    name: "Uncharged Claw",
    source: [
        ["TW", 232]
    ],
    type: "Trick weapon",
    rarity: "rare",
	attunement: true,
    description: "This gauntlet can transform into an aberrant claw. As a gauntlet, I can spend a hit die to deal +1d6 lightning dmg on a hit, or +1d8 as a claw. As a reaction, I can spend a charge to take no damage and regain 1 hit die when I'm hit with lightning or thunder dmg. The claw gives me bonuses to my unarmed strikes.",
    descriptionFull: "While attuned to this weapon, you have resistance to lightning damage. **Trick Weapon:**  As a bonus action, if you've taken lightning damage or spent a hit die since the start of your last turn, you can switch between the transformed and untransformed states of this weapon. In its untransformed state, the claw is a sinewy leather gauntlet, made from the muscle and hide of a galvanized prowler. In its transformed state, the claw surges with electrical energy, merging with its wearer's forearm and turning into a monstrous claw. **Untransformed:** The bestial hide feeds off of you in exchange for power; you have advantage on initiative rolls. In addition, this gauntlet devours your life force. When you hit with a melee attack, you can spend a hit die to deal an extra 1d6 lightning damage. The gauntlet has 2 charges and regains all expended charges daily at dawn. When you take lighting or thunder damage, you can use your reaction to expend 1 charge to instead take no damage and regain 1 hit die. **Transformed:**  The gauntlet merges with your form, turning your hand into an aberrant claw that you cannot be disarmed of. This claw changes the damage of your unarmed strikes to 1d8, the damage type to slashing, and you can use your Dexterity or Strength modifier for the attack and damage rolls made with it. In addition, when you hit with a melee attack using this claw, you can spend a hit die to deal an extra 1d8 lightning damage. The claw is too unwieldy to use for delicate handling, such as activating intricate mechanisms (like the trigger of a firearm) or picking locks with thieves' tools.",
	weight: 3,
	advantages: [
            ["Initiative", true]
        ],
	dmgres: [
		"Lightning",
	],
    weaponsAdd: {
		select: ["Uncharged Gauntlet", "Uncharged Claw"],
	},
	weaponOptions : [{
		name: "Uncharged Gauntlet",
		source: [
			["TW", 232]
		],
		regExpSearch: /^(?=.*uncharged)(?=.*gauntlet).*$/i,
		baseWeapon: "unarmed strike",
		description: "Spend HD to deal +1d6 lightning dmg on melee hit; Reaction to negate lightning/thunder dmg (see notes).",
	},	{
		name: "Uncharged Claw",
		source: [
			["TW", 232]
		],
		regExpSearch: /uncharged claw/i,
		baseWeapon: "unarmed strike",
		description: "Finesse; Spend a hit die to deal +1d8 lightning dmg on melee hit;",
	}],
    toNotesPage: [{
        name: "Uncharged Claw",
        note: [
			"\n**Trick Weapon:** As a bonus action, if you've taken lightning damage or spent a hit die since the start of your last turn, you can switch between the transformed and untransformed states of this weapon.",
			" \u2022 In its untransformed state, the claw is a sinewy leather gauntlet, made from the muscle and hide of a galvanized prowler. ",
			" \u2022 In its transformed state, the claw surges with electrical energy, merging with its wearer's forearm and turning into a monstrous claw.",
			"\n**Untransformed:** The bestial hide feeds off of you in exchange for power; you have advantage on initiative rolls. In addition, this gauntlet devours your life force. When you hit with a melee attack, you can spend a hit die to deal an extra 1d6 lightning damage. The gauntlet has 2 charges and regains all expended charges daily at dawn. When you take lighting or thunder damage, you can use your reaction to expend 1 charge to instead take no damage and regain 1 hit die.",
			"\n**Transformed:** The gauntlet merges with your form, turning your hand into an aberrant claw that you cannot be disarmed of. This claw changes the damage of your unarmed strikes to 1d8, the damage type to slashing, and you can use your Dexterity or Strength modifier for the attack and damage rolls made with it.",
			" \u2022 In addition, when you hit with a melee attack using this claw, you can spend a hit die to deal an extra 1d8 lightning damage.",
			" \u2022 The claw is too unwieldy to use for delicate handling, such as activating intricate mechanisms (like the trigger of a firearm) or picking locks with thieves' tools.",
		]
    }],
    action: [
        ["bonus action", "Uncharged Claw (Transform)"],
		["reaction", "Uncharged Gauntlet"],
    ],
	extraLimitedFeatures: [{
		name : "Uncharged Gauntlet",
		usages : 2,
		recovery : "dawn",
	}],
	calcChanges: {
		atkAdd: [
			function (fields, v) {
				if (v.WeaponName == 'uncharged claw') {
				if (fields.Damage_Die == 1 || fields.Damage_Die == "1d4" || fields.Damage_Die == "1d6")
					fields.Damage_Die = "1d8";
					fields.Damage_Type = "Slashing";
				}
			},
		],
	},
};
MagicItemsList["unstable crumbler"] = {
    name: "Unstable Crumbler",
    source: [
        ["TW", 233]
    ],
    type: "Trick weapon (cannon, maul)",
    rarity: "rare",
	attunement: true,
    description: "This trick weapon can transform between a roaring cannon and an unstable maul. When I roll a 15+ on the d20 when attacking with the cannon, it fires an explosive cannonball. When I roll an 18+ on the d20 when attacking with the maul, the head detonates into an effect similar to *fireball* (DC 15).",
    descriptionFull: "While holding this weapon, your attacks and spells deal double damage to structures, and fire damage you take is reduced by an amount equal to your Constitution modifier (minimum of 1). **Trick Weapon:**  As a bonus action, you can switch between the transformed and untransformed states of this weapon. In its untransformed state, the crumbler is a roaring cannon with smoke coming out of its mouth. In its transformed state, the handle extends, turning the cannon into a highly unstable and destructive maul. As part of this bonus action, you can do the following: \u2022 When transforming the cannon into a maul, you can shoot at your feet, even if the cannon isn't loaded, using the deflagration to propel yourself and jump up to 30 feet in any direction. This jump doesn't cost you any movement. \u2022 When transforming the maul into a cannon, you can reload the cannon and retain its unstable force. If you load it in this way, the next time you hit with an attack with the cannon attack on your turn, it will push you back 30 feet in a straight line. **Untransformed:** The *unstable crumbler* heats up cannonballs, transforming them into infernal ammunition. Whenever you roll a 15 or higher on the d20 when making an attack roll with this weapon, the cannonball becomes overheated and explodes on impact. When the cannonball explodes in this way, it is considered an explosive cannonball. **Transformed:**  Whenever you roll a 18 or higher on the d20 while making an attack roll with this weapon, the maul's head detonates, causing an effect that acts as the fireball spell (DC 15) centered on the target. If you succeed on this saving throw, you take no damage.",
	weight: 3,
	savetxt: {
		text: ["Fire dmg reduced by Con mod;"],
	},
    weaponsAdd: {
		select: ["Unstable Crumbler (Cannon)", "Unstable Crumbler (Maul)"],
	},
	weaponOptions : [{
		name: "Unstable Crumbler (Cannon)",
		source: [
			["TW", 233]
		],
		regExpSearch: /^(?=.*unstable)(?=.*crumbler)(?=.*cannon).*$/i,
		baseWeapon: "cannon",
		description: "Artillery, Booming, Concussive, Two-Handed; 15+ on d20 roll, cannonball becomes explosive cannonball;",
	},	{
		name: "Unstable Crumbler (Maul)",
		source: [
			["TW", 233]
		],
		regExpSearch: /^(?=.*unstable)(?=.*crumbler)(?=.*maul).*$/i,
		baseWeapon: "maul",
		description: "Heavy, Two-Handed; Topple; 18+ on d20 roll, fireball detonation (DC 15, I take no dmg on save);",
	}],
    toNotesPage: [{
        name: "Unstable Crumbler",
        note: [
			"**Trick Weapon:** As a bonus action, you can switch between the transformed and untransformed states of this weapon. As part of this bonus action, you can do the following:",
			" \u2022 When transforming the cannon into a maul, you can shoot at your feet, even if the cannon isn't loaded, using the deflagration to propel yourself and jump up to 30 feet in any direction. This jump doesn't cost you any movement.",
			" \u2022 When transforming the maul into a cannon, you can reload the cannon and retain its unstable force. If you load it in this way, the next time you hit with an attack with the cannon attack on your turn, it will push you back 30 feet in a straight line.",
			" \u2022 In its untransformed state, the crumbler is a roaring cannon with smoke coming out of its mouth.",
			" \u2022 In its transformed state, the handle extends, turning the cannon into a highly unstable and destructive maul.",
			"**Untransformed:** The *unstable crumbler* heats up cannonballs, transforming them into infernal ammunition. Whenever you roll a 15 or higher on the d20 when making an attack roll with this weapon, the cannonball becomes overheated and explodes on impact. When the cannonball explodes in this way, it is considered an explosive cannonball.",
			"**Transformed:** Whenever you roll a 18 or higher on the d20 while making an attack roll with this weapon, the maul's head detonates, causing an effect that acts as the fireball spell (DC 15) centered on the target. If you succeed on this saving throw, you take no damage.",
			"\n#Cannon Properties:#",
			" \u2022 **Firearm Save DC** = 8 + your proficiency bonus + your Dexterity modifier.",
			" \u2022 **Artillery.** You must use Strength instead of Dexterity for the Firearm save DC and the attack and damage rolls of this weapon. Such a weapon can be fired once before it must be reloaded with an action.",
			" \u2022 **Booming.** The deflagration from firing this weapon makes a stupendous booming sound. The sound can be heard from up to 500 feet away. Firing this weapon makes it impossible to go undetected; you automatically fail Stealth checks to hide until the start of your next turn. In addition, if a creature is within the area of the sound blast, it automatically succeeds on Perception checks against you.",
			" \u2022 **Concussive.** These weapons bludgeon as much as they pierce. When determining a creature's resistance or immunity to damage from this weapon, use the weaker of the target's resistance or immunity to piercing or to bludgeoning damage. For instance, if a creature is immune to piercing damage and has no resistance or immunity to bludgeoning damage, it would take full damage from a concussive weapon. Resistance to all physical damage applies as normal.",
			" \u2022 **Explosive Cannonball:** On a hit, each creature within 10 feet of the target must make a Dexterity saving throw against your Firearm save DC or take 2d8 fire damage. If the weapon misses, the ammunition fails to detonate.",
		]
    }],
    action: [
        ["bonus action", "Unstable Crumbler (Transform)"],
    ],
};
MagicItemsList["awakened abyss warden's axeblade"] = {
    name: "Awakened Abyss Warden’s Axeblade",
    source: [
        ["TW", 234]
    ],
    type: "Trick weapon (longsword, battleaxe)",
    rarity: "very rare",
    magicItemTable: "?",
    description: "This dark blade deals extra radiant dmg to aberrations. When I transform it, I can emit a burst of radiance. When I hit with the longsword, I can deal extra damage to a second creature, and when I hit with the battleaxe, the target makes a Con save or has disadvantage on attacks that don't target me.",
    descriptionFull: "**Trick Weapon.** As a bonus action, you can switch between the transformed and untransformed states of this weapon by sliding the pommel up and down on the blade. \n \u2022 In its untransformed state, the abyss warden's axeblade is a longsword. \n \u2022 In its transformed state, the weapon becomes a battleaxe. \nAs part of this bonus action, you can slam the weapon down, emitting a wave of radiance centered on you. Each creature within 5 feet of you must succeed on a DC 17 Constitution saving throw or take 1d6 radiant damage. Both forms of the weapon deal an extra 1d6 radiant damage on a hit. This damage increases to 2d6 for the longsword against Medium or smaller aberrations and to 2d6 for the battleaxe against Large or larger aberrations. \n**Untransformed:** When you hit a creature with an attack using this longsword, you can cause another creature of your choice within 5 feet of it to take radiant damage equal to 1d6 + your Strength modifier (minimum of 1). \n**Transformed:** When you hit a creature with an attack using this battleaxe, it must succeed on a DC 17 Constitution saving throw or have disadvantage on attack rolls made against creatures other than you until the end of its next turn.",
    action: [
        ["bonus action", "Awakened Axeblade (Transform)"],
    ],
	weaponsAdd: {
		select: ["Abyss Warden's Awakened Longsword", "Abyss Warden's Awakened Battleaxe"],
	},
	weaponOptions : [{
		name: "Abyss Warden's Awakened Longsword",
		source: [
			["TW", 234]
		],
		regExpSearch: /^(?=.*abyss)(?=.*warden)(?=.*awakened)(?=.*longsword).*$/i,
		baseWeapon: "longsword",
		description: "Versatile (1d10); Sap; On hit, deal 1d6 + Str radiant dmg to second creature w/i 5 ft; See notes;"
	},	{
		name: "Abyss Warden's Awakened Battleaxe",
		source: [
			["TW", 234]
		],
		regExpSearch: /^(?=.*abyss)(?=.*warden)(?=.*awakened)(?=.*battleaxe).*$/i,
		baseWeapon: "battleaxe",
		description: "Versatile (1d10); Topple; On hit, target makes DC 17 Con save or disadv. on other targets; See notes;",
	}],
	toNotesPage: [{
        name: "Abyss Warden’s Awakened Axeblade",
        note: [
                "\n**Trick Weapon.** As a bonus action, you can switch between the transformed and untransformed states of this weapon by sliding the pommel up and down on the blade.",
				" \u2022 In its untransformed state, the *abyss warden's axeblade* is a longsword.",
				" \u2022 In its transformed state, the weapon becomes a battleaxe.",
				" \u2022 As part of this bonus action, you can slam the weapon down, emitting a wave of radiance centered on you. Each creature within 5 feet of you must succeed on a DC 17 Constitution saving throw or take 1d6 radiant damage.",
				"\n**Untransformed:** When you hit a creature with an attack using this longsword, you can cause another creature of your choice within 5 feet of it to take radiant damage equal to 1d6 + your Strength modifier (minimum of 1).",
				"\n**Transformed:** When you hit a creature with an attack using this battleaxe, it must succeed on a DC 17 Constitution saving throw or have disadvantage on attack rolls made against creatures other than you until the end of its next turn.",
				"\nBoth forms of the weapon deal an extra 1d6 radiant damage on a hit. This damage increases to 2d6 for the longsword against Medium or smaller aberrations and to 2d6 for the battleaxe against Large or larger aberrations.",
        ],
    }],
};
MagicItemsList["calamitous crumbler"] = {
    name: "Calamitous Crumbler",
    source: [
        ["TW", 234]
    ],
    type: "Trick weapon (cannon, maul)",
    rarity: "very rare",
	attunement: true,
    description: "This trick weapon can transform between a roaring cannon and an unstable maul. When I roll a 15+ on the d20 when attacking with the cannon, it fires an explosive cannonball. When I roll an 18+ on the d20 when attacking with the maul, the head detonates into an effect similar to *fireball* (DC 15).",
    descriptionFull: "While holding this weapon, your attacks and spells deal double damage to structures, and fire damage you take is reduced by an amount equal to your Constitution modifier (minimum of 1). **Trick Weapon:**  As a bonus action, you can switch between the transformed and untransformed states of this weapon. In its untransformed state, the crumbler is a roaring cannon with smoke coming out of its mouth. In its transformed state, the handle extends, turning the cannon into a highly unstable and destructive maul. As part of this bonus action, you can do the following: \u2022 When transforming the cannon into a maul, you can shoot at your feet, even if the cannon isn't loaded, using the deflagration to propel yourself and jump up to 30 feet in any direction. This jump doesn't cost you any movement. \u2022 When transforming the maul into a cannon, you can reload the cannon and retain its unstable force. If you load it in this way, the next time you hit with an attack with the cannon attack on your turn, it will push you back 30 feet in a straight line. **Untransformed:** The *unstable crumbler* heats up cannonballs, transforming them into infernal ammunition. Whenever you roll a 15 or higher on the d20 when making an attack roll with this weapon, the cannonball becomes overheated and explodes on impact. When the cannonball explodes in this way, it is considered an explosive cannonball. **Transformed:**  Whenever you roll a 18 or higher on the d20 while making an attack roll with this weapon, the maul's head detonates, causing an effect that acts as the fireball spell (DC 15) centered on the target. If you succeed on this saving throw, you take no damage.",
	weight: 3,
	savetxt: {
		text: ["Fire dmg reduced by Con mod;"],
	},
    weaponsAdd: {
		select: ["Calamitous Crumbler (Cannon)", "Calamitous Crumbler (Maul)"],
	},
	weaponOptions : [{
		name: "Calamitous Crumbler (Cannon)",
		source: [
			["TW", 234]
		],
		regExpSearch: /^(?=.*calamitous)(?=.*crumbler)(?=.*cannon).*$/i,
		baseWeapon: "cannon",
		description: "Artillery, Booming, Concussive, Two-Handed; 10+ on d20 roll, fires explosive cannonball; See notes;",
		modifiers: [1, 1],
	},	{
		name: "Calamitous Crumbler (Maul)",
		source: [
			["TW", 234]
		],
		regExpSearch: /^(?=.*calamitous)(?=.*crumbler)(?=.*maul).*$/i,
		baseWeapon: "maul",
		description: "Heavy, Two-Handed; Topple; 15+ on d20 roll, detonation (DC 17, I take no dmg on save); See notes;",
		modifiers: [1, 1],
	}],
    toNotesPage: [{
        name: "Calamitous Crumbler",
        note: [
			"While holding this weapon, your attacks and spells deal double damage to structures.",
			"\n**Trick Weapon:** As a bonus action, you can switch between the transformed and untransformed states of this weapon. As part of this bonus action, you can do the following:",
			" \u2022 When transforming the cannon into a maul, you can shoot at your feet, even if the cannon isn't loaded, using the deflagration to propel yourself and jump up to 30 feet in any direction. This jump doesn't cost you any movement.",
			" \u2022 When transforming the maul into a cannon, you can reload the cannon and retain its unstable force. If you load it in this way, the next time you hit with an attack with the cannon attack on your turn, it will push you back 30 feet in a straight line.",
			" \u2022 In its untransformed state, the crumbler is a roaring cannon with smoke coming out of its mouth.",
			" \u2022 In its transformed state, the handle extends, turning the cannon into a highly unstable and destructive maul.",
			"**Untransformed:** The *calamitous crumbler* heats up cannonballs, transforming them into infernal ammunition. Whenever you roll a 10 or higher on the d20 when making an attack roll with this weapon, the cannonball becomes overheated and explodes on impact. When the cannonball explodes in this way, it is considered an explosive cannonball.",
			"**Transformed:** Whenever you roll a 15 or higher on the d20 while making an attack roll with this weapon, the maul's head detonates, causing an effect that acts as the fireball spell (DC 17) centered on the target. You have a +5 bonus to this saving throw, and if you succeed on this saving throw, you take no damage.",
			"\n#Cannon Properties:#",
			" \u2022 **Firearm Save DC** = 8 + your proficiency bonus + your Dexterity modifier.",
			" \u2022 **Artillery.** You must use Strength instead of Dexterity for the Firearm save DC and the attack and damage rolls of this weapon. Such a weapon can be fired once before it must be reloaded with an action.",
			" \u2022 **Booming.** The deflagration from firing this weapon makes a stupendous booming sound. The sound can be heard from up to 500 feet away. Firing this weapon makes it impossible to go undetected; you automatically fail Stealth checks to hide until the start of your next turn. In addition, if a creature is within the area of the sound blast, it automatically succeeds on Perception checks against you.",
			" \u2022 **Concussive.** These weapons bludgeon as much as they pierce. When determining a creature's resistance or immunity to damage from this weapon, use the weaker of the target's resistance or immunity to piercing or to bludgeoning damage. For instance, if a creature is immune to piercing damage and has no resistance or immunity to bludgeoning damage, it would take full damage from a concussive weapon. Resistance to all physical damage applies as normal.",
			" \u2022 **Explosive Cannonball:** On a hit, each creature within 10 feet of the target must make a Dexterity saving throw against your Firearm save DC or take 2d8 fire damage. If the weapon misses, the ammunition fails to detonate.",
		]
    }],
    action: [
        ["bonus action", "Calamitous Crumbler (Transform)"],
    ],
};
MagicItemsList["caldera"] = {
    name: "Caldera",
    source: [
        ["TW", 235]
    ],
    type: "Trick weapon (cleaver, rifle)",
    rarity: "uncommon",
	attunement: true,
    magicItemTable: "?",
    description: "In its battleaxe form, the Caldera is crowned with a black-hole-like orb that bubbles menacingly with molten metal that serves as the ammunition for the transformed pistols. I can cover a target in molten lead when I hit it with the battleaxe, and I can unleash Bullet Hell with the transformed pistols. See notes.",
    descriptionFull: "Rather than carrying separate firearms, which often become ineffective when beasts get close, many hunters conceal them within enormous cleavers designed to rend flesh. Such creations of gunpowder and metal are aptly named *rifling cleavers.* \n**Trick Weapon.** As a bonus action, you can switch between the transformed and untransformed states of this weapon. In its untransformed state, it is is a large cleaver. In its transformed state, the weapon is a rifle. You can reload the rifle even in its untransformed state. \n**Untransformed.** After making a melee weapon attack with this weapon, you can immediately use your bonus action to make a ranged weapon attack with the rifle against a creature within range that is behind you and in a straight line with you and your first target. This shot extends the weapon, transforming it. \n**Transformed.** Though unwieldy in melee, you can use a bonus action to make a melee attack with the opposite end of the rifle. This attack uses your choice of your Strength or Dexterity modifier. The damage die for this attack is a d4, and it deals bludgeoning damage. Your weapon then reverts to its untransformed state.",
    action: [
        ["bonus action", "Caldera (Transform)"],
		["action", "Bullet Hell"],
		["action", "Fan Fire"],
    ],
	weaponsAdd: {
		select: ["Caldera Battleaxe", "Caldera Pistols"],
	},
	weaponOptions : [{
		name: "Caldera Battleaxe",
		source: [
			["TW", 235]
		],
		regExpSearch: /^(?=.*battleaxe)(?=.*caldera).*$/i,
		baseWeapon: "battleaxe",
		description: "Versatile (1d10); Topple; On hit, can cover target in molten lead (see notes);",
		modifiers: [1, 1],
	},	{
		name: "Caldera Pistols",
		source: [
			["TW", 235]
		],
		regExpSearch: /^(?=.*pistols)(?=.*caldera).*$/i,
		baseWeapon: "pistol",
		description: "Barrel 6 (S), Blaring, Fan Fire (fire dmg); Bullet Hell (see notes); Can use Str instead of Dex;",
		modifiers: [1, 1],
	}],
	toNotesPage: [{
        name: "Caldera",
        note: [
                "**Trick Weapon.** As a bonus action, you can switch between the transformed and untransformed states of this weapon. Each time you transform the weapon, you take 1d4 fire damage as the liquid-fire reservoir that serves as a material catalyst surges with thermal energy. The boiling metal can contain up to 60 lead bullets, and the weapon can’t transform unless it contains at least 7 lead bullets. As an action, you can feed the crucible in either state by throwing lead bullets in it or by adding a cannonball, which counts as 30 bullets.",
				" \u2022 In its untransformed state, the Caldera is a battleaxe that can devour its haft to reform into a pair of pistols, each holding half of the crucible. When you switch to the untransformed state of the weapon, any unfired lead bullets are re-added to the boiling metal.",
				" \u2022 In its transformed state, the weapon is two pistols that can be slammed together to reform the crucible, alongside the rest of the battleaxe. When you transform this weapon into pistols, the crucible refills each of the barrels with 6 lead bullets (12 total), filling up one pistol fully, then the other.",
				"\n**Untransformed:** When you hit with this battleaxe, you can expend 3 lead bullets from the boiling metal to cover the target in molten lead. The target takes an extra 1d6 fire damage, and it takes that damage again at the start of each of its turns unless it rolls on the floor (prone) or uses a bonus action to wipe off the lead.",
				"\n**Transformed:** You pull out two fiery pistols from the molten metal. When you attack with them, you can use your Strength modifier, instead of Dexterity, for the attack and damage rolls. These pistols are each loaded to full capacity, if there are enough lead bullets in the boiling metal.",
				"\n#Pistol Properties.#",
				" \u2022 **Barrel 6:** Each pistol can be fired six times before it must be reloaded.",
				" \u2022 **Slow Reload:** You must use an attack or an action to reload this firearm. You must have one free hand to do so.",
				" \u2022 **Blaring:** Firing this weapon makes a thunderous crack. The sound can be heard from up to 100 feet away. Firing this weapon makes it hard to go undetected; you have disadvantage on Stealth checks to hide until the start of your next turn. In addition, if a creature is within the area of the sound blast, it has advantage on Perception checks against you.",
				" \u2022 **Fan Fire:** You can quickly fire this weapon by slamming the hammer repeatedly. As an action, you fire a number of bullets in a row equal to your Dexterity modifier (minimum of 2, up to the entirety of the barrel). Each attack after the first suffers a cumulative -2 penalty to the attack roll and the pistol deals fire damage instead of piercing damage. You cannot add any modifier to the damage roll of these attacks beyond the first (such as the bonus from your Dexterity modifier, the Sharp-shooter feat, or a magic weapon's bonus to damage rolls). When you use this action, your speed becomes 0 until the end of your turn, and attacks you make using the long range of the weapon automatically miss. In addition, if you roll a 1, the gun doesn’t jam, and you instead take 1d6 fire damage.",
				" \u2022 **Bullet Hell:** As an action, if both pistols are fully loaded, you can fire both of them in rapid succession, emptying all 12 bullets. Make 6 ranged attacks with the pistols, each dealing 1d6 piercing damage and 1d6 fire damage on a hit. Each attack after the first suffers a cumulative -2 penalty to the attack roll. You cannot add any modifier to the damage roll of these attacks beyond the first—such as the bonus from your Dexterity modifier or the Sharp-Shooter feat—apart from this weapon's bonus to damage rolls. The weapon then reverts to its untransformed state.",
        ],
    }],
};
MagicItemsList["epee sanguine"] = {
    name: "Epee Sanguine",
    source: [
        ["TW", 237]
    ],
    type: "Trick weapon (longsword, greatsword)",
    rarity: "very rare",
	attunement: true,
    magicItemTable: "?",
    description: "This sword, formed of coagulated blood, gets bonuses in each state based on the amount of blood the target has. Each time I use it to deal damage to a creature that has blood, it gains 1 charge. When I hit a creature with the épée, I can expend 1 or more charges to unleash the blood accumulated in the blade.",
    descriptionFull: "You gain a +1 bonus to attack and damage rolls made with this magic weapon, which deals an extra 1d8 necrotic damage on a hit. **Trick Weapon.** As a bonus action, you can switch between the transformed and untransformed states of this weapon. To transform this weapon, you must feed it blood. Each time you deal damage with this weapon to a creature that possesses blood, the épée gains 1 charge. The épée can hold up to 4 charges. Each charge lasts for 1 minute or until it is consumed. If this weapon has 1 or more charges, you can use your bonus action to transform it. \n\u2022 In its untransformed state, the blade is a vile longsword glowing with echoes of blood. \n\u2022 \n**Untransformed:** You gain a 1d4 bonus to attack rolls you make with this weapon against creatures that have more than half their hit points. \n**Transformed:** You gain a 1d4 bonus to attack rolls you make with this weapon against creatures that are bloodied (half of its hit points or fewer). In this form, the épée sanguine consumes 1 charge at the end of each of your turns, unless you’ve expended 1 or more charges that turn. It reverts back to its untransformed state if it loses all charges. When you hit a creature with an attack using the épée, you can expend 1 or more charges to unleash the blood accumulated in the blade.",
    action: [
        ["bonus action", "Épée Sanguine (Transform)"],
    ],
	weaponsAdd: {
		select: ["Épée Sanguine (Longsword)", "Épée Sanguine (Greatsword)"],
	},
	weaponOptions : [{
		name: "Épée Sanguine (Longsword)",
		source: [
			["TW", 237]
		],
		regExpSearch: /^(?=.*epee)(?=.*sanguine)(?=.*longsword).*$/i,
		baseWeapon: "longsword",
		description: "Versatile (1d10); Sap; +1d8 necrotic dmg, +1d4 to attack rolls against creatures with >50% HP; See notes;",
		modifiers: [1, 1],
	},	{
		name: "Épée Sanguine (Greatsword)",
		source: [
			["TW", 237]
		],
		regExpSearch: /^(?=.*epee)(?=.*sanguine)(?=.*greatsword).*$/i,
		baseWeapon: "greatsword",
		description: "Heavy, Two-Handed; Graze; +1d8 necrotic dmg, +1d4 to attack rolls against creatures with <50% HP; See notes;",
		modifiers: [1, 1],
	}],
	toNotesPage: [{
        name: "Épée Sanguine",
        note: [
                "\n**Trick Weapon.** As a bonus action, you can switch between the transformed and untransformed states of this weapon.",
				" \u2022 In its untransformed state, the blade is a vile longsword glowing with echoes of blood.",
				" \u2022 In its transformed state, the weapon is a greatsword with an even more nefarious aspect.",
				" \u2022 To transform this weapon, you must feed it blood. Each time you deal damage with this weapon to a creature that possesses blood, the épée gains 1 charge. The épée can hold up to 4 charges. Each charge lasts for 1 minute or until it is consumed. If this weapon has 1 or more charges, you can use your bonus action to transform it.",
				"\n**Untransformed:** You gain a 1d4 bonus to attack rolls you make with this weapon against creatures that have more than half their hit points.",
				"\n**Transformed:** You gain a 1d4 bonus to attack rolls you make with this weapon against creatures that are bloodied (half of its hit points or fewer). In this form, the épée sanguine consumes 1 charge at the end of each of your turns, unless you’ve expended 1 or more charges that turn. It reverts back to its untransformed state if it loses all charges.",
				"\nWhen you hit a creature with an attack using the épée, you can expend 1 or more charges to unleash the blood accumulated in the blade:",
				" \u2022 1 Charge: You heal a number of hit points equal to the necrotic damage you dealt.",
				" \u2022 2 Charges: You deal an extra 1d8 necrotic damage and heal a number of hit points equal to the necrotic damage you dealt.",
				" \u2022 3 Charges: The target becomes bound in blood and must make a DC 14 Dexterity saving throw. On a failed save, it takes 2d6 necrotic damage and is restrained until the start of your next turn. On a successful save, it takes half as much damage and isn’t restrained.",
				" \u2022 4 Charges: Blood covers the creature’s face and chokes it. The creature must make a DC 14 Dexterity saving throw. On a failed save, it takes 2d10 necrotic damage and is stunned until the start of your next turn. On a successful save, it takes half as much damage and isn’t stunned.",
        ],
    }],
};
MagicItemsList["epee solaire"] = {
	name: "Epee Solaire",
    source: [
        ["TW", 238]
    ],
    type: "Trick weapon (greatsword, shortsword)",
    rarity: "very rare",
	attunement: true,
    magicItemTable: "?",
    description: "This magical trick weapon deals extra radiant damage, and I can use a reaction to impose disadvantage on attacks. Its greatsword state grants me +1 to my Strength, Dexterity, and Constitution saving throws, and when I hit a target twice in one turn with the shortswords, I can deal even more radiant damage against it.",
    descriptionFull: "You gain a +1 bonus to attack and damage rolls made with this magic weapon, which deals an extra 1d4 radiant damage on a hit. When you hit an aberration or undead with it, the extra radiant damage increases to 2d4. **Trick Weapon.** As a bonus action, you can switch between the transformed and untransformed states of this weapon. The weapon's blade emits bright light in a 10-foot radius and dim light for an additional 10 feet. You can summon or extinguish the light at will (no action required). This weapon has the Deflective Light property. \n**Deflective Light** When you are attacked by a creature within 30 feet of you that you can see, you can use your reaction to cause a burst of sunlight to flare before the attacker, imposing disadvantage on the attack roll and transforming the weapon. An attacker that can't be blinded is immune to this property. This property can be used three times, regaining all expended uses daily at dawn. \n**Untransformed:** While wielding this greatsword, your reflexes are enhanced. You gain a +1 bonus to Strength, Dexterity, and Constitution saving throws. \n**Transformed:** When you engage in two-weapon fighting with these shortswords, you can add your ability modifier to the damage of the second attack. In addition, this weapon gains the Brightburn property. \n**Brightburn:** Once on each of your turns when you hit a creature two times with these shortswords, the accumulated solar energy singes them. The target must make a DC 13 Constitution saving throw, taking 2d8 radiant damage on a failed save, or half as much damage on a successful one.",
    action: [
        ["bonus action", "Épée Solaire (Transform)"],
		["reaction", "Deflective Light"],
    ],
	extraLimitedFeatures: [{
		name: "Deflective Light",
		usages: 3,
		recovery: "dawn",
	}],
	weaponProfs: [false, false, ["shortsword", "greatsword"]],
	weaponsAdd: {
		select: ["Épée Solaire (Greatsword)", "Épée Solaire (Two Shortswords)"],
	},
	weaponOptions : [{
		name: "Épée Solaire (Greatsword)",
		source: [
			["TW", 238]
		],
		regExpSearch: /^(?=.*epee)(?=.*solaire)(?=.*greatsword).*$/i,
		baseWeapon: "greatsword",
		description: "Heavy, Two-Handed; Graze; +1d4 radiant dmg, 2d4 vs. aberrations & undead; Deflective Light;",
		modifiers: [1, 1],
	},	{
		name: "Épée Solaire (Two Shortswords)",
		source: [
			["TW", 238]
		],
		regExpSearch: /^(?=.*epee)(?=.*solaire)(?=.*shortsword).*$/i,
		baseWeapon: "shortsword",
		description: "Finesse, Light; Vex; +1d4 radiant dmg, 2d4 vs. aberrations & undead; Deflective Light, Brightburn;",
		modifiers: [1, 1],
	}],
	addMod: [
		{type: "save", field: "str", mod: 1, text: "While I'm weilding the Épée Solaire in its greatsword state, I add +1 to my Strength, Dexterity, and Constitution saving throws."},
		{type: "save", field: "dex", mod: 1, text: "While I'm weilding the Épée Solaire in its greatsword state, I add +1 to my Strength, Dexterity, and Constitution saving throws."},
		{type: "save", field: "con", mod: 1, text: "While I'm weilding the Épée Solaire in its greatsword state, I add +1 to my Strength, Dexterity, and Constitution saving throws."},
	],
	toNotesPage: [{
        name: "Épée Solaire",
        note: [
                "While attuned to this weapon, you gain the following benefits:",
				" \u2022 You are proficient with greatswords and shortswords.",
				" \u2022 You gain a +1 bonus to attack and damage rolls made with this magic weapon, which deals an extra 1d4 radiant damage on a hit. When you hit an aberration or undead with it, the extra radiant damage increases to 2d4.",
				"\n**Trick Weapon.** As a bonus action, you can switch between the transformed and untransformed states of this weapon.",
				" \u2022 In its untransformed state, the blade is a metallic greatsword glowing with light.",
				" \u2022 In its transformed state, the weapon is two shortswords emitting the same glow.",
				" \u2022 The weapon's blade emits bright light in a 10-foot radius and dim light for an additional 10 feet. You can summon or extinguish the light at will (no action required). This weapon has the **Deflective Light** property.",
				"\n**Deflective Light:** When you are attacked by a creature within 30 feet of you that you can see, you can use your reaction to cause a burst of sunlight to flare before the attacker, imposing disadvantage on the attack roll and transforming the weapon. An attacker that can't be blinded is immune to this property. This property can be used three times, regaining all expended uses daily at dawn.",
				"\n**Untransformed:** While wielding this greatsword, your reflexes are enhanced. You gain a +1 bonus to Strength, Dexterity, and Constitution saving throws.",
				"\n**Transformed:** When you engage in two-weapon fighting with these shortswords, you can add your ability modifier to the damage of the second attack. In addition, this weapon gains the **Brightburn** property.",
				"\n**Brightburn:** Once on each of your turns when you hit a creature two times with these shortswords, the accumulated solar energy singes them. The target must make a DC 13 Constitution saving throw, taking 2d8 radiant damage on a failed save, or half as much damage on a successful one.",
        ],
    }],
};
MagicItemsList["ethereal moongold equalizer"] = {
    name: "Ethereal Moongold Equalizer",
    source: [
        ["TW", 239]
    ],
    type: "Trick weapon (flintlock, rifle)",
    rarity: "very rare",
	attunement: true,
    description: "This moongilded trick weapon can transform between a flintlock and a rifle and has five charges that I can use to become ephemeral. I don't get disadvantage against prone or adjacent creatures with the flintlock. With the rifle, I can make a special attack that deals +2d8 damage or more if I expend charges.",
    descriptionFull: "This weapon has 5 charges and regains them daily at midnight. While attuned to this weapon, you can expend a charge to turn ephemeral, granting you the ability to walk through objects and creatures as if they were difficult terrain until the end of your turn. If you end your turn inside an object or creature, you are immediately shunted to the nearest unoccupied space and take force damage equal to twice the number of feet you are moved. This weapon, crafted with moongold, gives you a 1d4 bonus to damage rolls against nonhumanoid creatures. Moongold acts as a guiding light in the darkness; creatures holding or wearing moongold have advantage on saving throws against being frightened and madness. \nAs a bonus action, you can switch between the transformed and untransformed states of this weapon. In its untransformed state, the equalizer is a flintlock. In its transformed state, the weapon is a rifle. \nUntransformed. This flintlock has the Barrel 2 (F) property. In addition, being within 5 feet of a hostile creature or targeting a prone creature doesn’t impose disadvantage on your ranged attack rolls with this flintlock. \nTransformed. When you attack with this weapon, you can choose to replace your attack with a particularly violent shot. Make a ranged weapon attack and expend up to 5 charges. On a hit, the target takes the weapon's damage plus an extra 2d8 piercing damage + an extra 1d8 radiant damage for each charge expended. If you expended more than 2 charges for the attack, the target is also blinded until the end of its next turn. Hit or miss, this causes the weapon to partially liquefy and turn back into its untransformed state; it can’t be transformed again until the end of your next turn. You can use this attack only if you haven’t moved during this turn, and after you use this attack, your speed is 0 until the end of your turn.",
	weight: 8,
    weaponsAdd: {
		select: ["Ethereal Equalizer (Flintlock)", "Ethereal Equalizer (Rifle)"],
	},
	weaponOptions : [{
		name: "Ethereal Equalizer (Flintlock)",
		source: [
			["TW", 239]
		],
		regExpSearch: /^(?=.*ethereal)(?=.*equalizer)(?=.*flintlock).*$/i,
		baseWeapon: "flintlock",
		description: "Barrel 2 (F), Blaring, Light; Moongold; No disadv. on atks vs. prone or adjacent;",
		ammo: "lead bullets",
	},	{
		name: "Ethereal Equalizer (Rifle)",
		source: [
			["TW", 239]
		],
		regExpSearch: /^(?=.*ethereal)(?=.*equalizer)(?=.*rifle).*$/i,
		baseWeapon: "rifle",
		description: "Barrel 2 (S), Blaring, Steady, Twinned Barrel; Moongold; See notes;",
		ammo: "lead bullets",
	}],
    toNotesPage: [{
        name: "Ethereal Moongold Equalizer",
        note: [
			"**Attunement:** This weapon has 5 charges and regains them daily at midnight. While attuned to this weapon, you can expend a charge to turn ephemeral, granting you the ability to walk through objects and creatures as if they were difficult terrain until the end of your turn. If you end your turn inside an object or creature, you are immediately shunted to the nearest unoccupied space and take force damage equal to twice the number of feet you are moved.",
			"\n**Trick Weapon:** As a bonus action, As a bonus action, you can magically melt the moongold before solidifying it, switching between the transformed and untransformed states of this weapon.",
			" \u2022 In its untransformed state, the equalizer is a flintlock.",
			" \u2022 In its transformed state, the weapon is an ornate, two-handed weapon; a rifle.",
			" \u2022 This weapon, crafted with moongold, gives you a 1d4 bonus to damage rolls against nonhumanoid creatures. Moongold acts as a guiding light in the darkness; creatures holding or wearing moongold have advantage on saving throws against being frightened and madness.",
			"\n**Untransformed:** This flintlock has the Barrel 2 (F) property. In addition, being within 5 feet of a hostile creature or targeting a prone creature doesn’t impose disadvantage on your ranged attack rolls with this flintlock.",
			"\n**Transformed:** When you attack with this weapon, you can choose to replace your attack with a particularly violent shot. Make a ranged weapon attack and expend up to 5 charges. On a hit, the target takes the weapon's damage plus an extra 2d8 piercing damage + an extra 1d8 radiant damage for each charge expended. If you expended more than 2 charges for the attack, the target is also blinded until the end of its next turn. Hit or miss, this causes the weapon to partially liquefy and turn back into its untransformed state; it can’t be transformed again until the end of your next turn. You can use this attack only if you haven’t moved during this turn, and after you use this attack, your speed is 0 until the end of your turn.",
			"\n#Firearm Properties.#",
			" \u2022 **Barrel 2:** The weapon can be fired twice before it must be reloaded.",
			" \u2022 **Fast Reload (Flintlock):** You must use an attack, an action, or a bonus action to reload this firearm. You must have one free hand to do so.",
			" \u2022 **Slow Reload (Rifle):** You must use an attack or an action to reload this firearm. You must have one free hand to do so.",
			" \u2022 **Blaring:** Firing this weapon makes a thunderous crack. The sound can be heard from up to 100 feet away. Firing this weapon makes it hard to go undetected; you have disadvantage on Stealth checks to hide until the start of your next turn. In addition, if a creature is within the area of the sound blast, it has advantage on Perception checks against you.",
			" \u2022 **Steady:** This weapon can be stabilized for greater accuracy. As a bonus action, you give yourself a bonus to your next attack roll with this weapon this turn equal to your proficiency bonus, and attacking at long range doesn’t impose disadvantage on the attack roll. You can use this bonus action only if you haven’t moved during your turn, and after you use the bonus action, your speed is halved until the end of your turn.",
			" \u2022 **Twinned Barrel:** This weapon has two barrels that can each hold a bullet and can both be loaded as part of reloading the weapon. You can fire both barrels of a double barrel weapon as part of an attack, instead of each barrel individually. Doing so empties the barrel of the weapon but increases the damage die of the weapon on a hit (from d10 to d12).",
		]
    }],
    action: [
        ["bonus action", "Ethereal Equalizer (Transform)"],
    ],
	extraLimitedFeatures: [{
		name : "Ethereal Equalizer",
		usages : 5,
		recovery : "midnight",
	}],
	savetxt: {
        adv_vs : ["frightened", "madness"],
    },
};
MagicItemsList["faux lunaire"] = {
    name: "Faux Lunaire",
    source: [
        ["TW", 240]
    ],
    type: "Trick weapon (scythe, longbow)",
    rarity: "very rare",
    magicItemTable: "?",
    description: "This lunar trick weapon can transform between a scythe and a longbow. If I cast the *light* cantrip on it, it grants me +2 Wisdom and sight through magical and nonmagical darkness to 60ft. The scythe can affect targets with the *faerie fire* spell, while I can cast the spells *moonbeam* or *darkness* with the longbow.",
    descriptionFull: "If you cast the light cantrip targeting this weapon, the carved runes activate. For the duration of the spell, as long as you hold the weapon, your Wisdom score increases by 2, to a maximum of 20, and you can see normally in darkness, both magical and nonmagical, to a distance of 60 feet. \n**Trick Weapon.** As a bonus action, you can switch between the transformed (longbow) and untransformed (scythe) states of this weapon. As part of the bonus action, you can also magically teleport up to 10 feet to an unoccupied space that you can see. \n**Untransformed.** Once on each of your turns when you damage a creature with this weapon, you can force it to make a DC 17 Dexterity saving throw, becoming affected by the faerie fire spell on a failure. You do not need to concentrate on this spell, but it ends early if you put another creature under the effect of the spell, or if you fall unconscious. \n**Transformed.** In its transformed state, the Faux Lunaire has 2 charges. When you attack a creature with this bow, you can expend 1 charge to cast one of the following spells (save DC 17) from it (no action required): *moonbeam* or *darkness*. The spell is centered on the creature’s space and lasts until the end of your next turn. You do not need to concentrate on it, and you can only have one of these spells active at a time. If your attack misses, you expend the charge but the effect fails. The Faux Lunaire regains 1 expended charge each time it is targeted by the light cantrip.",
	attunement: true,
    action: [
        ["bonus action", "Faux Lunaire (Transform)"],
    ],
	weaponsAdd: {
		select: ["Faux Lunaire (Scythe)", "Faux Lunaire (Longbow)"],
	},
	weaponOptions : [{
		name: "Faux Lunaire (Scythe)",
		source: [
			["TW", 240]
		],
		regExpSearch: /^(?=.*faux)(?=.*lunaire)(?=.*scythe).*$/i,    
		baseWeapon: "scythe",
		description: "Finesse, Heavy, Two-Handed, Reach; Graze; 1/turn, Faerie Fire on hit (DC 17, no concentration);",
	},	{
		name: "Faux Lunaire (Longbow)",
		source: [
			["TW", 240]
		],
		regExpSearch: /^(?=.*faux)(?=.*lunaire)(?=.*longbow).*$/i,     
		baseWeapon: "longbow",
		description: "Two-Handed, Heavy; Slow; Can expend a charge to cast moonbeam or darkness (see notes);",
	}],
	extraLimitedFeatures: [{
		name : "Faux Lunaire (Longbow)",
		usages : 2,
		recovery : "Light",
	}],
	vision: [
		["Devil’s Sight (when Faux Lunaire is affected by *light* cantrip)", 60],
	],
	toNotesPage: [{
        name: "Faux Lunaire",
        note: [
                "If you cast the *light* cantrip targeting this weapon, the carved runes activate. For the duration of the spell, as long as you hold the weapon, your Wisdom score increases by 2, to a maximum of 20, and you can see normally in darkness, both magical and nonmagical, to a distance of 60 feet.",
				"**Trick Weapon.** As a bonus action, you can switch between the transformed and untransformed states of this weapon. As part of the bonus action, you can also magically teleport up to 10 feet to an unoccupied space that you can see.",
				" \u2022 In its untransformed state, the weapon is a scythe.",
				" \u2022 In its transformed state, it's a longbow.",
				"\n**Untransformed.** Once on each of your turns when you damage a creature with this weapon, you can force it to make a DC 17 Dexterity saving throw, becoming affected by the *faerie fire* spell on a failure. You do not need to concentrate on this spell, but it ends early if you put another creature under the effect of the spell, or if you fall unconscious.",
				"\n**Transformed.** In its transformed state, the Faux Lunaire has 2 charges. When you attack a creature with this bow, you can expend 1 charge to cast one of the following spells (save DC 17) from it (no action required): *moonbeam* or *darkness*. The spell is centered on the creature’s space and lasts until the end of your next turn. You do not need to concentrate on it, and you can only have one of these spells active at a time. If your attack misses, you expend the charge but the effect fails. The Faux Lunaire regains 1 expended charge each time it is targeted by the *light* cantrip.",
        ],
    }],
};
MagicItemsList["galvanized claw"] = {
    name: "Galvanized Claw",
    source: [
        ["TW", 241]
    ],
    type: "Trick weapon",
    rarity: "very rare",
	attunement: true,
    description: "While I have temporary hit points, I deal +1d6 lightning damage with the gauntlet or +1d8 with the claw. As a reaction to being hit by lightning or thunder damage, I can expend a charge to turn the damage into temporary hit points instead. The claw gives me bonuses to my unarmed strikes.",
    descriptionFull: "While attuned to this weapon, you have resistance to lightning and thunder damage. **Trick Weapon:**  As a bonus action, you can switch between the transformed (claw) and untransformed (gauntlet) states of this weapon. **Untransformed:** You have advantage on initiative rolls. If you have temporary hit points when you hit with a melee attack, you deal an extra 1d6 lightning damage. The gauntlet has 3 charges and regains all expended charges daily at dawn. When you take lighting or thunder damage, you can use your reaction to expend 1 charge to instead take no damage and gain a number of temporary hit points equal to the damage you would have taken. **Transformed:** This claw changes the damage of your unarmed strikes to 1d8, the damage type to slashing, and you can use your Dexterity or Strength modifier for the attack and damage rolls made with it. Further, you gain a +1 bonus to attack and damage rolls made with it. When you use the Attack action with this claw, you can make one attack with it as a bonus action. In addition, if you have temporary hit points, when you hit with a melee attack using this claw, you deal an extra 1d8 lightning damage.In addition, when you hit with a melee attack using this claw, you can spend a hit die to deal an extra 1d8 lightning damage. The claw is too unwieldy to use for delicate handling, such as activating intricate mechanisms (like the trigger of a firearm) or picking locks with thieves' tools.",
	weight: 3,
	advantages: [
            ["Initiative", true]
        ],
	dmgres: [
		"Lightning",
		"Thunder",
	],
    weaponsAdd: {
		select: ["Galvanized Gauntlet", "Galvanized Claw"],
	},
	weaponOptions : [{
		name: "Galvanized Gauntlet",
		source: [
			["TW", 241]
		],
		regExpSearch: /^(?=.*galvanized)(?=.*gauntlet).*$/i,
		baseWeapon: "unarmed strike",
		description: "If I have temp HP, +1d6 lightning dmg on melee hit; Reaction to negate lightning/thunder dmg (see notes).",
	},	{
		name: "Galvanized Claw",
		source: [
			["TW", 241]
		],
		regExpSearch: /galvanized claw/i,
		baseWeapon: "unarmed strike",
		description: "Finesse; If I have temp HP, +1d8 lightning dmg on melee hit; bonus action attack after attack action;",
		modifiers: [1, 1],
	}],
    toNotesPage: [{
        name: "Galvanized Claw",
        note: [
			"\n**Trick Weapon:** As a bonus action, if you've taken lightning damage or spent a hit die since the start of your last turn, you can switch between the transformed and untransformed states of this weapon.",
			" \u2022 In its untransformed state, the claw is a sinewy leather gauntlet, made from the muscle and hide of a galvanized prowler. ",
			" \u2022 In its transformed state, the claw surges with electrical energy, merging with its wearer's forearm and turning into a monstrous claw.",
			"\n**Untransformed:** The bestial hide invigorates you, giving you the lightning fast reflexes of the galvanized prowler slaughtered to make this gauntlet; you have advantage on initiative rolls. In addition, this gauntlet feeds off of your power. If you have temporary hit points when you hit with a melee attack, you deal an extra 1d6 lightning damage.",
			" \u2022 The gauntlet has 3 charges and regains all expended charges daily at dawn. When you take lighting or thunder damage, you can use your reaction to expend 1 charge to instead take no damage and gain a number of temporary hit points equal to the damage you would have taken.",
			"\n**Transformed:** The gauntlet merges with your form, turning your hand into an aberrant claw that you cannot be disarmed of. This claw changes the damage of your unarmed strikes to 1d8, the damage type to slashing, and you can use your Dexterity or Strength modifier for the attack and damage rolls made with it.",
			" \u2022 When you use the Attack action with this claw, you can make one attack with it as a bonus action. In addition, if you have temporary hit points, when you hit with a melee attack using this claw, you deal an extra 1d8 lightning damage.",
			" \u2022 The claw is too unwieldy to use for delicate handling, such as activating intricate mechanisms (like the trigger of a firearm) or picking locks with thieves' tools.",
		]
    }],
    action: [
        ["bonus action", "Galvanized Claw (Transform)"],
		["bonus action", "Galvanized Claw Attack"],
		["reaction", "Galvanized Gauntlet"],
    ],
	extraLimitedFeatures: [{
		name : "Galvanized Gauntlet",
		usages : 3,
		recovery : "dawn",
	}],
	calcChanges: {
		atkAdd: [
			function (fields, v) {
				if (v.WeaponName == 'galvanized claw') {
				if (fields.Damage_Die == 1 || fields.Damage_Die == "1d4" || fields.Damage_Die == "1d6")
					fields.Damage_Die = "1d8";
					fields.Damage_Type = "Slashing";
				}
			},
		],
	},
};
MagicItemsList["improved guillotine shears"] = {
    name: "Improved Guillotine Shears",
    source: [
        ["TW", 242]
    ],
    type: "Trick weapon (shortsword & longsword, shears)",
    rarity: "very rare",
    magicItemTable: "?",
    description: "This mechanical trick weapon was designed to sever limbs. In its untransformed state, it's a light longsword and shortsword. As a bonus action I can transform them into a one-handed set of shears with Guillotine which allows me to snap the blades together to deal an extra 1d12 dmg, plus an extra 3d12 on a crit.",
    descriptionFull: "**Trick Weapon:** As a bonus action, you can switch between the transformed (shears) and untransformed (longsword and shortsword) states of this weapon. \nAs part of this bonus action, you can do the following: When transforming the swords into shears: you can make a single melee weapon attack with the shears. You don’t add your ability modifier to the damage of the bonus attack, unless that modifier is negative, and you can’t use the Guillotine property on this attack. When transforming the shears into swords: you can slide the longsword forward as part of dismounting it, making a single melee weapon attack with it. You don’t add your ability modifier to the damage of the bonus attack, unless that modifier is negative. If you have the Two-Weapon Fighting Style, you can ignore this limitation. \n**Untransformed.** While wielding both swords, the longsword is considered light. The shortsword deals your choice of slashing or piercing damage. Whenever you damage a creature with both swords on the same turn, it takes extra slashing damage equal to your choice of either your Strength or Dexterity modifier (minimum of 1). \n**Transformed.** The shears are a one-handed martial weapon that deals 1d12 slashing damage on a hit and scores a critical hit on a 19 or 20. In addition, it has the Guillotine property. \n**Guillotine.** Immediately after hitting a target with the shears, if you have a free hand, you can use your reaction to pull the lever, snapping the blades together and dealing an extra 1d12 slashing damage to the target. If the triggering attack was a critical hit, you deal an extra 3d12 slashing damage. If this attack deals more than one quarter of a creature's hit point maximum, you also chop off one the creature's limbs (anything but the head) at the GM's discretion. If this attack reduces a creature to 0 hit points, it is decapitated.",
    action: [
        ["bonus action", "Improved Shears (Transform)"],
		["bonus action", "Transform (Shears Attack)"],
		["bonus action", "Transform (Longsword Attack)"],
		["reaction", "Guillotine"],
    ],
	weaponsAdd: {
		select: ["Improved Guillotine Shears (Longsword)", "Improved Guillotine Shears (Shortsword)", "Transformed Improved Shears"],
	},
	weaponOptions : [{
		name: "Improved Guillotine Shears (Longsword)",
		source: [
			["TW", 242]
		],
		regExpSearch: /^(?=.*improved)(?=.*guillotine)(?=.*shears)(?=.*longsword).*$/i,    
		baseWeapon: "longsword",
		description: "Light; Sap; When I hit with both swords in same turn, target takes extra dmg = higher of Str or Dex mod;",
		modifiers: [2, 2],
	},	{
		name: "Improved Guillotine Shears (Shortsword)",
		source: [
			["TW", 242]
		],
		regExpSearch: /^(?=.*improved)(?=.*guillotine)(?=.*shears)(?=.*shortsword).*$/i,      
		baseWeapon: "shortsword",
		description: "Deals piercing or slashing damage, Finesse, Light; Vex",
		modifiers: [2, 2],
	},	{
		name: "Transformed Improved Shears",
		source: [
			["TW", 242]
		],
		regExpSearch: /^(?=.*improved)(?=.*shears)(?=.*transformed).*$/i,      
		type: "Martial",
		ability: 1,
		abilitytodamage: true,
		damage: [1, 12, "slashing"],
		range: "Melee",
		description: "Crits on 19 or 20; Guillotine: On hit, reaction to deal +1d12 dmg, (4d12 on crit); See notes;",
		list: "melee",
		weight: 6,
		monkweapon: false,
		modifiers: [2, 2],
	}],
	toNotesPage: [{
		name: "Improved Guillotine Shears",
		note: [
			"You have a +2 to attack and damage rolls made with both forms of this weapon.",
			"\n**Trick Weapon:** As a bonus action, you can switch between the transformed and untransformed states of this weapon.",
			" \u2022 In its untransformed state, the guillotine is two one-handed weapons — a longsword and a shortsword.",
			" \u2022 In its transformed state, the weapon is a single one-handed weapon — shears.",
			"\nAs part of this bonus action, you can do the following:",
			" \u2022 When transforming the swords into shears: you can make a single melee weapon attack with the shears. You don’t add your ability modifier to the damage of the bonus attack, unless that modifier is negative, and you can’t use the Guillotine property on this attack.",
			" \u2022 When transforming the shears into swords: you can slide the longsword forward as part of dismounting it, making a single melee weapon attack with it. You don’t add your ability modifier to the damage of the bonus attack, unless that modifier is negative. If you have the Two-Weapon Fighting Style, you can ignore this limitation.",
			"\n**Untransformed:** While wielding both swords, the longsword is considered light. The shortsword deals your choice of slashing or piercing damage. Whenever you damage a creature with both swords on the same turn, it takes extra slashing damage equal to your choice of either your Strength or Dexterity modifier (minimum of 1).",
			"\n**Transformed:** The shears are a one-handed martial weapon that deals 1d12 slashing damage on a hit and scores a critical hit on a 19 or 20. In addition, it has the Guillotine property.",
			"\n**Guillotine.** Immediately after hitting a target with the shears, if you have a free hand, you can use your reaction to pull the lever, snapping the blades together and dealing an extra 1d12 slashing damage to the target. If the triggering attack was a critical hit, you deal an extra 3d12 slashing damage. If this attack deals more than one quarter of a creature's hit point maximum, you also chop off one the creature's limbs (anything but the head) at the GM's discretion. If this attack reduces a creature to 0 hit points, it is decapitated.",
		]
	}]
};
MagicItemsList["improved phantom limb"] = {
    name: "Improved Phantom Limb",
    source: [
        ["TW", 243]
    ],
    type: "Trick weapon (unarmed, shortsword)",
    rarity: "very rare",
	attunement: true,
    description: "Infused with the bones of a beast with a mixture of quicksilver, mithral, and osteomantic magic, this trick weapon can transform between a metallic hand that can help deflect incoming attacks and a shortsword that can illuminate undead that I hit, even when they're invisible.",
    descriptionFull: "**Attunement:** When you attune to this item, the cold, lifeless hand merges with your flesh and either replaces a missing arm or consumes one of your existing arms (your choice when you attune to this weapon). An arm consumed in this way does not reappear when you unattune from the item. **Trick Weapon:** As a bonus action, you can switch between the transformed and untransformed states of this weapon. In its untransformed state, the phantom limb is a metallic, articulating hand. In its transformed state, the weapon is a shortsword. **Untransformed:** Unarmed strikes you make with the phantom limb deal magical bludgeoning damage. If a creature damaged by your unarmed strikes has an ability that would allow it to walk through objects and creatures (such as a ghost’s incorporeal movement), it loses that ability until the start of your next turn. In addition, the limb reacts to deflect incoming blows, granting you a +2 bonus to AC. **Transformed:** You gain a +2 bonus to attack and damage rolls made with this shortsword, which gains the Haunting Mark property. While the weapon is in this form, you can’t be possessed. **Haunting Mark:** Whenever you hit an undead creature with an attack using this blade then, for the next minute, you can see its form as a glowing outline, even if it is invisible, and you always know the direction and distance to the creature while it is on the same plane as you. This effect ends early if you hit a different undead creature with an attack using this blade, or if the phantom limb is no longer in its transformed state.",
	weight: 2,
    weaponsAdd: {
		select: ["Improved Phantom Limb", "Transformed Phantom Limb"],
	},
	weaponOptions : [{
		name: "Improved Phantom Limb",
		source: [
			["TW", 243]
		],
		regExpSearch: /improved phantom limb/i,
		baseWeapon: "unarmed strike",
		description: "Counts as magical; +2 to AC; Creatures I hit lose incorporeal abilities until my next turn;",
	},	{
		name: "Transformed Phantom Limb",
		source: [
			["TW", 243]
		],
		regExpSearch: /^(?=.*phantom)(?=.*limb)(?=.*transformed).*$/i,
		baseWeapon: "shortsword",
		description: "Finesse, Light; Vex; Haunting Mark: When I hit an undead, I can see it and know it's location at all times;",
		modifiers: [2, 2],
	}],
    toNotesPage: [{
        name: "Improved Phantom Limb",
        note: [
			"\n**Attunement:** When you attune to this item, the cold, lifeless hand merges with your flesh and either replaces a missing arm or consumes one of your existing arms (your choice when you attune to this weapon). An arm consumed in this way does not reappear when you unattune from the item.",
			"\n**Trick Weapon:** As a bonus action, you can switch between the transformed and untransformed states of this weapon.",
			" \u2022 In its untransformed state, the *phantom limb* is a metallic, articulating hand.",
			" \u2022 In its transformed state, the weapon is a shortsword.",
			"\n**Untransformed:** Unarmed strikes you make with the *phantom limb* deal magical bludgeoning damage. In addition, the limb reacts to deflect incoming blows, granting you a +2 bonus to AC.",
			"\n**Transformed:** You gain a +2 bonus to attack and damage rolls made with this shortsword, which gains the Haunting Mark property. While the weapon is in this form, you can’t be possessed.",
			"\n**Haunting Mark:** Whenever you hit an undead creature with an attack using this blade then, for the next minute, you can see its form as a glowing outline, even if it is invisible, and you always know the direction and distance to the creature while it is on the same plane as you. This effect ends early if you hit a different undead creature with an attack using this blade, or if the phantom limb is no longer in its transformed state.",
		]
    }],
    action: [
        ["bonus action", "Improved Phantom Limb (Transform)"],
    ],
	extraAC : [{
		mod: 2,
		name: "Improved Phantom Limb",
		magic: true, 
	}],
};
MagicItemsList["improved ravenous gazer"] = {
    name: "Improved Ravenous Gazer",
    source: [
        ["TW", 229]
    ],
    type: "Trick weapon (glaive)",
    rarity: "very rare",
	attunement: true,
    description: "I can feed my blood into this magical glaive to transform it into a glaive that also acts as a spellcasting focus, gives me a +2 bonus to spell attack rolls, increases my Spell Save DC by 1, and gives me truesight to 30 ft, and gives me advantage on Strength and Dexterity saving throws.",
    descriptionFull: "Any creature that attunes to this glaive is considered proficient with it. You gain a +2 bonus to attack and damage rolls made with this magic weapon. **Trick Weapon:** As a bonus action, you can switch between the transformed and untransformed states of this weapon. In its untransformed state, the gazer is a glaive. In its transformed state, the gazer is a glaive which can be used as a spellcasting focus. \nTo transform this weapon, you must feed it your blood: each time you shift this weapon into its transformed state, or start your turn with the glaive in its transformed state, you take 1d4 necrotic damage, which cannot be reduced in any way. This damage cannot break your concentration. **Untransformed:** While the glaive is in its untransformed state, you can use your spellcasting ability modifier in place of your Strength modifier when making attack rolls using the glaive. **Transformed:** While the glaive is in its transformed state, it grants you a +2 bonus to spell attack rolls, increases your spell save DC by 1, and gives you truesight out to 30 feet. Further, while you aren't incapacitated, you have advantage on Strength and Dexterity saving throws against effects that you can see.",
	weight: 6,
    weaponsAdd: {
		select: ["Improved Ravenous Gazer", "Transformed Improved Ravenous Gazer"],
	},
	weaponOptions : [{
		name: "Improved Ravenous Gazer",
		source: [
			["TW", 228]
		],
		regExpSearch: /improved ravenous gazer/i,
		isAlwaysProf: true,
		baseWeapon: "glaive",
		description: "Heavy, Reach, Two-Handed; Graze; Can use Spellcasting mod. instead of Str; See notes;",
		modifiers: [2, 2],
	},	{
		name: "Transformed Ravenous Gazer",
		source: [
			["TW", 228]
		],
		regExpSearch: /^(?=.*ravenous)(?=.*gazer)(?=.*transformed).*$/i,
		isAlwaysProf: true,
		baseWeapon: "glaive",
		description: "Heavy, Reach, Two-Handed; Graze; +2 to spell attack rolls, spell save DC +1, truesight 30 ft.",
		modifiers: [2, 2],
	}],
    toNotesPage: [{
        name: "Improved Ravenous Gazer",
        note: [
			"Any creature that attunes to this glaive is considered proficient with it. You gain a +2 bonus to attack and damage rolls made with this magic weapon.",
			"\n**Trick Weapon:** As a bonus action, you can switch between the transformed and untransformed states of this weapon.",
			" \u2022 In its untransformed state, gazer is a glaive.",
			" \u2022 In its transformed state, the gazer is a glaive which can be used as a spellcasting focus.",
			" \u2022 To transform this weapon, you must feed it your blood: each time you shift this weapon into its transformed state, or start your turn with the glaive in its transformed state, you take 1d4 necrotic damage, which cannot be reduced in any way. This damage cannot break your concentration.",
			"**Untransformed:** While the glaive is in its untransformed state, you can use your spellcasting ability modifier in place of your Strength modifier when making attack rolls using the glaive.",
			"\n**Transformed:** While the glaive is in its transformed state, it grants you a +2 bonus to spell attack rolls, increases your spell save DC by 1, and gives you truesight out to 30 feet. Further, while you aren't incapacitated, you have advantage on Strength and Dexterity saving throws against effects that you can see.",
		]
    }],
    action: [
        ["bonus action", "Improved Ravenous Gazer (Transform)"],
    ],
	vision: [
		["Truesight", 30],
	],
	savetxt: {
		text: ["Adv. on Str and Dex saves when Ravenous Gazer is transformed;"],
	},
	calcChanges: {	
		spellCalc: [
			function (type, spellcasters, ability) {
				if (type == "dc") return 1;
				if (type == "attack") return 2;
			},
			"I add +1 to all the saving throw DCs of my spells when my Ravenous Gazer is transformed.",
			"I add +2 to my spell attack rolls when my Ravenous Gazer is transformed.",
		],	
	},
};
MagicItemsList["maiden's osteosymbiosis"] = {
    name: "Maiden's Osteosymbiosis",
    source: [
        ["TW", 245]
    ],
    type: "Trick weapon (special)",
    rarity: "very rare",
	attunement: true,
    description: "The osteosymbiosis replaces the bones in my arm when I attune to it. Untransformed, bony spikes protrude from my knuckles, adding to my unarmed strikes. Transformed, it generates a weapon made of bones. Both states embed bone shards into my targets, which I can detonate for extra piercing damage in an area.",
    descriptionFull: "You gain a +2 bonus to attack rolls and damage rolls made with this magic weapon, and it has the Bone Explosion property. **Trick Weapon:**  In its untransformed state, the osteosymbiosis is embedded in your flesh, with spikes protruding from your knuckles, changing your unarmed strikes. In its transformed state, it generates a weapon made of bones. When it transforms, roll a d8 to determine the weapon’s type. You are proficient with all the forms of this weapon. **Untransformed:** Your unarmed attacks deal an extra 1d8 piercing damage. Once on each of your turns when you hit a target with an unarmed strike, you can rupture the bone spikes that grow from your hands, leaving them embedded in your prey. You deal an extra 1d4 piercing damage to your target and it gains 1 bone shard. **Transformed:** Your attacks with this weapon deal an extra 1d4 slashing damage and score critical hits on a roll of 19 or 20. Further, the osseous nature of this armament renders it frail. If you score a critical hit against a creature, the weapon breaks upon the target's flesh, dealing an extra 4d4 piercing damage, and the target gains 4 bone shards. The weapon then reverts to its untransformed state. **Bone Explosion:** As a bonus action, you can detonate all the bone shards embedded in  ne of your prey. If the target is dead, the shards fail to detonate. Each creature other than you within 15 feet of the target must make a DC 15 Dexterity saving throw. On a failure, a creature takes 1d4 piercing damage for each bone shard that detonated. On a success, it takes half as much damage. The bone shards shatter into dust and disappear. A creature with more than 2 bone shards embedded in its body has disadvantage on this saving throw.",
	weight: 2,
    weaponsAdd: {
		select: ["Maiden's Osteosymbiosis", "Select Osteosymbiosis Weapon"],
	},
	weaponOptions : [{
			name: "Maiden's Osteosymbiosis",
			source: [
				["TW", 245]
			],
			regExpSearch: /Maiden's Osteosymbiosis/i,
			baseWeapon: "unarmed strike",
			description: "+1d8 piercing dmg, 1/turn on hit, rupture bone spikes (see notes); Bone Explosion;",
			modifiers: [2, 2],
		},	{
			name: "Osteosymbiosis Battleaxe",
			source: [
				["TW", 245]
			],
			regExpSearch: /^(?=.*osteosymbiosis)(?=.*battleaxe).*$/i,
			isAlwaysProf: true,
			baseWeapon: "battleaxe",
			description: "Versatile (1d10); Topple; +1d4 slashing dmg; crit on 19 or 20, weapon breaks (see notes);",
			modifiers: [2, 2],
		},	{
			name: "Osteosymbiosis Maul",
			source: [
				["TW", 245]
			],
			regExpSearch: /^(?=.*osteosymbiosis)(?=.*maul).*$/i,
			isAlwaysProf: true,
			baseWeapon: "maul",
			description: "Heavy, Two-Handed; Topple; +1d4 slashing dmg; crit on 19 or 20, weapon breaks (see notes);",
			modifiers: [2, 2],
		},	{
			name: "Osteosymbiosis Lance",
			source: [
				["TW", 245]
			],
			regExpSearch: /^(?=.*osteosymbiosis)(?=.*lance).*$/i,
			isAlwaysProf: true,
			baseWeapon: "lance",
			description: "Heavy, Reach, Two-Handed (unless mounted); Topple; +1d4 slashing dmg; crit on 19 or 20, weapon breaks (see notes);",
			modifiers: [2, 2],
		},	{
			name: "Osteosymbiosis Longsword",
			source: [
				["TW", 245]
			],
			regExpSearch: /^(?=.*osteosymbiosis)(?=.*longsword).*$/i,
			isAlwaysProf: true,
			baseWeapon: "longsword",
			description: "Versatile (1d10); Sap; +1d4 slashing dmg; crit on 19 or 20, weapon breaks (see notes);",
			modifiers: [2, 2],
		},	{
			name: "Osteosymbiosis Rapier",
			source: [
				["TW", 245]
			],
			regExpSearch: /^(?=.*osteosymbiosis)(?=.*rapier).*$/i,
			isAlwaysProf: true,
			baseWeapon: "rapier",
			description: "Finesse; Vex; +1d4 slashing dmg; crit on 19 or 20, weapon breaks (see notes);",
			modifiers: [2, 2],
		},	{
			name: "Osteosymbiosis Flail",
			source: [
				["TW", 245]
			],
			regExpSearch: /^(?=.*osteosymbiosis)(?=.*flail).*$/i,
			isAlwaysProf: true,
			baseWeapon: "flail",
			description: "Sap; +1d4 slashing dmg; crit on 19 or 20, weapon breaks (see notes);",
			modifiers: [2, 2],
		},	{
			name: "Osteosymbiosis Whip",
			source: [
				["TW", 245]
			],
			regExpSearch: /^(?=.*osteosymbiosis)(?=.*whip).*$/i,
			isAlwaysProf: true,
			baseWeapon: "whip",
			description: "Finesse, Reach; Slow; +1d4 slashing dmg; crit on 19 or 20, weapon breaks (see notes);",
			modifiers: [2, 2],
		},	{
			name: "Osteosymbiosis Pike",
			source: [
				["TW", 245]
			],
			regExpSearch: /^(?=.*osteosymbiosis)(?=.*pike).*$/i,
			isAlwaysProf: true,
			baseWeapon: "pike",
			description: "Heavy, Reach, Two-Handed; Push; +1d4 slashing dmg; crit on 19 or 20, weapon breaks (see notes);",
			modifiers: [2, 2],
		},
	],
    toNotesPage: [{
        name: "Maiden's Osteosymbiosis",
        note: [
			"\n**Attunement:** When you attune to this item, the warm, still moving spine merges with the bones in your arm and replaces them. Bones consumed in this way do not reappear when you unattune from the item. You gain a +2 bonus to attack rolls and damage rolls made with this magic weapon, and it has the Bone Explosion property.",
			"\n**Trick Weapon:** As a bonus action, you can switch between the transformed and untransformed states of this weapon.",
			" \u2022 In its untransformed state, the osteosymbiosis is embedded in your flesh, with spikes protruding from your knuckles, changing your unarmed strikes.",
			" \u2022 In its transformed state, it generates a weapon made of bones. When it transforms, roll a d8 to determine the weapon’s type, according to the table below. You are proficient with all the forms of this weapon.",
		[ 
			["D8", "WEAPON",], 
			["1", "Battleaxe",], 
			["2", "Maul",], 
			["3", "Lance",], 
			["4", "Longsword",], 
			["5", "Rapier",], 
			["6", "Flail",], 
			["7", "Whip",], 
			["8", "Pike",], 
		],
			"\n**Untransformed:**  Your unarmed attacks deal an extra 1d8 piercing damage. Once on each of your turns when you hit a target with an unarmed strike, you can rupture the bone spikes that grow from your hands, leaving them embedded in your prey. You deal an extra 1d4 piercing damage to your target and it gains 1 bone shard. Your bone protrusions regrow immediately.",
			"\n**Transformed:** Your attacks with this weapon deal an extra 1d4 slashing damage and score critical hits on a roll of 19 or 20. Further, the osseous nature of this armament renders it frail. If you score a critical hit against a creature, the weapon breaks upon the target's flesh, dealing an extra 4d4 piercing damage, and the target gains 4 bone shards. The weapon then reverts to its untransformed state.",
			"\n**Bone Explosion:** As a bonus action, you can detonate all the bone shards embedded in one of your prey. If the target is dead, the shards fail to detonate. Each creature other than you within 15 feet of the target must make a DC 15 Dexterity saving throw. On a failure, a creature takes 1d4 piercing damage for each bone shard that detonated. On a success, it takes half as much damage. The bone shards shatter into dust and disappear. A creature with more than 2 bone shards embedded in its body has disadvantage on this saving throw.",
		]
    }],
    action: [
        ["bonus action", "Maiden's Osteosymbiosis (Transform)"],
		["bonus action", "Bone Explosion"],
    ],
};
MagicItemsList["orphan’s cradle"] = {
    name: "Orphan’s Cradle",
    source: [
        ["TW", 246]
    ],
    type: "Trick weapon (morningstar)",
    rarity: "very rare",
	attunement: true,
    description: "In symbiosis with the sanctified metal around it, the Orphan's Tear bloom possesses near-flawless regenerative abilities. Untransformed, the Orphan's Cradle exudes a calming aura and can heal allies or harm foes. Transformed, the blazing flower deals extra fire damage and withers enemies when I hit them.",
    descriptionFull: "**Trick Weapon:** As a bonus action, you can switch between the transformed and untransformed states of this weapon. In both states, the weapon is a morningstar with the reach property.	**Untransformed:** Humanoids within 10 feet of the cradle have advantage on saving throws against the charmed and frightened condition. In addition, the cradle has the Vile Miasma and Cleansing Miasma properties. **Vile Miasma:** When you hit a beast or an undead with orphan's cradle, the target must succeed on a DC 16 Constitution saving throw or become poisoned for 1 minute, even if the target is immune to the poisoned condition. **Cleansing Miasma:** As an action, you can cleanse one humanoid you can see within 10 feet of you. It gains 1d12 temporary hit points and can end one of the following conditions: charmed, frightened, or poisoned. \n**Transformed:** When transformed, the cradle's plants ignite, and it deals an extra 2d6 fire damage on a hit. In addition, the weapon gains the Fanned Flames and Withering Flames properties. **Fanned Flames:** As an action you can rotate the cradle wildly around you, fanning the flames. Each creature in a 20-foot cone in front of you must make a DC 16 Dexterity saving throw, taking 3d6 fire damage and 3d6 poison damage on a failed save, or half as much damage on a successful one. Beasts and undead have disadvantage on this saving throw. After using this property, orphan's cradle reverts to its untransformed state and can't be transformed again for 1d4-1 rounds. **Withering Flames:** When you hit a beast or an undead with orphan's cradle, you can force the target to make a DC 16 Constitution saving throw. On a failure, the target becomes vulnerable to your choice of one of the following damage types until the start of its next turn: acid, cold, fire, lightning, poison, or radiant.",
	weight: 2,
    weaponsAdd: {
		select: ["Orphan’s Cradle", "Transformed Orphan’s Cradle"],
	},
	weaponOptions : [{
		name: "Orphan’s Cradle",
		source: [
			["TW", 246]
		],
		regExpSearch: /orphan’s cradle/i,
		baseWeapon: "morningstar",
		description: "Reach; Sap; Humanoids w/i 10ft have adv. on saves vs. charmed & frightened; Vile and Cleansing Miasmas;",
		modifiers: [1, 1],
	},	{
		name: "Transformed Orphan’s Cradle",
		source: [
			["TW", 246]
		],
		regExpSearch: /^(?=.*orphan’s)(?=.*cradle)(?=.*transformed).*$/i,
		baseWeapon: "morningstar",
		description: "Reach; Sap; +2d6 fire damage; Fanned Flames, Withering Flames;",
		modifiers: [1, 1],
	}],
    toNotesPage: [{
        name: "Orphan’s Cradle",
        note: [
			"\n**Trick Weapon:** As a bonus action, you can switch between the transformed and untransformed states of this weapon. In both states, the weapon is a morningstar with the reach property.",
			"\n**Untransformed:** The flowers growing in the cradle exude a sickly sweet scent that calms the mind of men and chases away nightmares. Humanoids within 10 feet of the cradle have advantage on saving throws against the charmed and frightened condition. In addition, the cradle has the Vile Miasma and Cleansing Miasma properties.",
			" \u2022 **Vile Miasma:** When you hit a beast or an undead with orphan's cradle, the target must succeed on a DC 16 Constitution saving throw or become poisoned for 1 minute, even if the target is immune to the poisoned condition. A poisoned creature can repeat the saving throw at the end of each of its turns, ending the effect on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to Vile Miasma for the next 24 hours.",
			" \u2022 **Cleansing Miasma:** As an action, you can cleanse one humanoid you can see within 10 feet of you. It gains 1d12 temporary hit points and can end one of the following conditions: charmed, frightened, or poisoned. Once a creature has benefited from this property, it can't benefit from it again for 1 hour.",
			"\n**Transformed:** When transformed, the cradle's plants ignite, and it deals an extra 2d6 fire damage on a hit. In addition, the weapon gains the Fanned Flames and Withering Flames properties.",
			" \u2022 **Fanned Flames:** As an action you can rotate the cradle wildly around you, fanning the flames. Each creature in a 20-foot cone in front of you must make a DC 16 Dexterity saving throw, taking 3d6 fire damage and 3d6 poison damage on a failed save, or half as much damage on a successful one. Beasts and undead have disadvantage on this saving throw. After using this property, orphan's cradle reverts to its untransformed state and can't be transformed again for 1d4-1 rounds.",
			" \u2022 **Withering Flames:** When you hit a beast or an undead with orphan's cradle, you can force the target to make a DC 16 Constitution saving throw. On a failure, the target becomes vulnerable to your choice of one of the following damage types until the start of its next turn: acid, cold, fire, lightning, poison, or radiant. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the cradle's Withering Flames for the next 24 hours.",
		]
    }],
    action: [
        ["bonus action", "Orphan’s Cradle (Transform)"],
		["action", "Cleansing Miasma"],
		["action", "Fanned Flames"],
    ],
};
MagicItemsList["phantasmal executioner"] = {
    name: "Phantasmal Executioner",
    source: [
        ["TW", 247]
    ],
    type: "Trick weapon (scythe, maul)",
    rarity: "rare",
    magicItemTable: "?",
    description: "The blade harvests the souls of the depraved and the blasphemous. The lantern collects and gives them purpose anew. Let the screams of these accursed spirits rend the flesh of the unholy.",
    descriptionFull: "**Trick Weapon:** As a bonus action, you can switch between the transformed and untransformed states of this weapon. In its untransformed state, the executioner is a scythe and a lantern. In its transformed state, the weapon is a single massive maul. \nYou gain a +1 bonus to attack and damage rolls made with this magic weapon. \n**Untransformed:** When you hit a creature with the scythe, as part of the same attack, you can choose another creature within 5 feet of the original target and within your reach to attack. If the original attack roll would hit the second creature, it takes damage equal to half your initial hit. If you do so, your speed is halved until the end of your turn. In addition, the executioner has the Harvest Property. \n**Harvest.** Whenever a creature of CR 1 or higher (or 1st level or higher) dies within 15 feet of you, the lantern harvests the creature’s soul. The soul becomes trapped in the lantern and the creature cannot be resurrected until the soul is freed. As an action, you can free a soul trapped in the lantern. The lantern can hold a maximum of one soul. \n**Transformed:** The maul gains the Soul Explosion property. \n**Soul Explosion.** When you hit a creature with this weapon, you can sacrifice one of the souls held in the lantern to create a massive explosion of ghostflame, permanently destroying the soul. Each creature of your choice within 15 feet of you must make a DC 14 Dexterity saving throw, taking 2d8 radiant damage and 2d8 necrotic damage on a failed save, or half as much damage on a successful one. Undead automatically fail the saving throw.",
	attunement: true,
    action: [
        ["bonus action", "Phantasmal Executioner (Transform)"],
		["action", "Free Trapped Soul"],
    ],
	weaponsAdd: {
		select: ["Phantasmal Executioner (Scythe and Lantern)", "Phantasmal Executioner (Maul)"],
	},
	weaponOptions : [{
			name: "Phantasmal Executioner (Scythe and Lantern)",
			source: [
				["TW", 247]
			],
			regExpSearch: /^(?=.*phantasmal)(?=.*executioner)(?=.*scythe)(?=.*lantern).*$/i,    
			baseWeapon: "scythe",
			description: "Finesse, Heavy, Two-Handed, Reach; Graze; Can deal dmg to second target on hit; Harvest; See notes.",
			modifiers: [1, 1]
	},	{
			name: "Phantasmal Executioner (Maul)",
			source: [
				["TW", 247]
			],
			regExpSearch: /^(?=.*phantasmal)(?=.*executioner)(?=.*maul).*$/i,     
			baseWeapon: "maul",
			description: "Heavy, Two-Handed; Topple; Soul Explosion, Undying Light (See notes);",
			modifiers: [1, 1]
		},
	],
	toNotesPage: [{
        name: "Phantasmal Executioner",
        note: [
                "**Trick Weapon.** As a bonus action, you can switch between the transformed and untransformed states of this weapon.",
				" \u2022 In its untransformed state, the executioner is a scythe and a lantern.",
				" \u2022 In its transformed state, the weapon is a single massive maul.",
				"\n**Untransformed.** When you hit a creature with the scythe, as part of the same attack, you can choose another creature within 5 feet of the original target and within your reach to attack. If the original attack roll would hit the second creature, it takes damage equal to your initial hit. If you do so, your speed is halved until the end of your turn. In addition, the executioner has the Harvest property.",
				"**Harvest.** Whenever a creature of CR 1 or higher (or 1st level or higher) dies within 15 feet of you, the lantern harvests the creature’s soul. The soul becomes trapped in the lantern and the creature cannot be resurrected until the soul is freed. As an action, you can free a soul trapped in the lantern. The lantern can hold a maximum of three souls.",
				"\n**Transformed.** The maul gains the Soul Explosion and Undying Light properties.",
				" \u2022 **Soul Explosion.** When you hit a creature with this weapon, you can sacrifice one of the souls held in the lantern to create a massive explosion of ghostflame, permanently destroying the soul. Each creature of your choice within 15 feet of you must make a DC 16 Dexterity saving throw, taking 3d8 radiant damage and 3d8 necrotic damage on a failed save, or half as much damage on a successful one. Undead automatically fail the saving throw.",
				" \u2022 **Undying Light.** If the lantern is holding at least one soul, the maul sheds bright light in a 10-foot radius and dim light for an additional 20 feet. Each creature of your choice that enters the bright light for the first time on a turn or start its turn there must make a DC 16 Wisdom saving throw. On a failed save, it has disadvantage on any attack roll that isn't against you until the start of its next turn. Undead automatically fail the saving throw.",
        ],
    }],
};
MagicItemsList["revelations"] = {
    name: "Revelations",
    source: [
        ["TW", 248]
    ],
    type: "Trick weapon (cleaver, whip)",
    rarity: "very rare",
    description: "This ghastly sword is studded with dozens of eyes making it so that I can't be surprised or blinded. As an untransformed cleaver, I curse creatures I hit, giving me bonuses on attacks against them. The whip it transforms into is heavier than a regular whip, giving it a damage bonus and the ability to crush enemies.",
    descriptionFull: "You gain a +1 bonus to attack and damage rolls made with this magic weapon. While attuned to it, your sight improves as your vision starts echoing with that of the blade. While holding revelations, you gain the following benefits: You can’t be surprised. Other creatures don’t gain advantage on attack rolls against you as a result of being unseen by you. You are immune to being blinded, as the sword absorbs the effect and closes two of its eyes instead, before regrowing them. \n**Trick Weapon.** As a bonus action, you can switch between the transformed and untransformed states of this weapon. In its untransformed state, the weapon is a cleaver studded with eyeballs. In its transformed state, the weapon is a whip composed of metal shards held together by a sinew of blood and flesh. \n**Untransformed.** When you hit a creature with this cleaver, you curse them for the next hour. For the duration, you gain a +1 bonus to damage rolls made with the weapon against the target, any attack roll you make with the weapon against the cursed target is a critical hit on a roll of 19 or 20 on the d20, and you have advantage on any Perception or Survival check you make to find the target. The curse ends early if you transform the weapon or if you fall unconscious. \n**Transformed.** This whip deals 1d6 slashing damage on a hit, has the versatile (1d6/1d8) property, but does not have the finesse property. Once on each of your turns when you hit a creature with this weapon, you can attempt to crush them under the weight of the whip. The target must succeed on a Strength saving throw (DC = 8 + your proficiency bonus + your Strength modifier) or take 1d6 slashing damage and be knocked prone.",
    prerequisite: "Requires attunement by a creature with a Strength of 15 or higher.",
    prereqeval: function(v) {
        return What('Str') >= 15;
    },
    weight: 2,
	savetxt: {
        immune: ["blinded", "surprised"]
    },
    weaponsAdd: {
		select: ["Revelations (Cleaver)", "Revelations (Whip)"],
	},
	weaponOptions : [{
		name: "Revelations (Cleaver)",
		source: [
			["TW", 248]
		],
		regExpSearch: /^(?=.*revelations)(?=.*cleaver).*$/i,
		baseWeapon: "cleaver",
		description: "Heavy, Versatile (1d12); Cleave; Curse on hit (+1 dmg, crit on 19-20, adv. on checks to locate);",
		modifiers: [1, 1],
	},	{
		name: "Revelations (Whip)",
		source: [
			["TW", 248]
		],
		regExpSearch: /^(?=.*revelations)(?=.*whip).*$/i,
		type: "Martial",
		ability: 1,
		abilitytodamage: true,
		damage: [1, 6, "slashing"],
		range: "Melee",
		list: "melee",
		weight: 3,
		monkweapon: false,
		description: "Versatile (1d8), Reach; Slow; 1/turn on hit, target makes Str save (DC 8+Prof+Str) or +1d6 slashing dmg & prone;",
		modifiers: [1, 1],
	}],
    toNotesPage: [{
        name: "Revelations",
        note: [
			"**Attunement:** While attuned to it, your sight improves as your vision starts echoing with that of the blade. While holding *revelations*, you gain the following benefits:", 
			" \u2022 You can’t be surprised.",
			" \u2022 Other creatures don’t gain advantage on attack rolls against you as a result of being unseen by you.",
			" \u2022 You are immune to being blinded, as the sword absorbs the effect and closes two of its eyes instead, before regrowing them.",
			"\n**Trick Weapon:** As a bonus action, you can switch between the transformed and untransformed states of this weapon.",
			" \u2022 In its untransformed state, the weapon is a cleaver studded with eyeballs.",
			" \u2022 In its transformed state, the weapon is a whip composed of metal shards held together by a sinew of blood and flesh.",
			"\n**Untransformed:** When you hit a creature with this cleaver, you curse them for the next hour. For the duration, you gain a +1 bonus to damage rolls made with the weapon against the target, any attack roll you make with the weapon against the cursed target is a critical hit on a roll of 19 or 20 on the d20, and you have advantage on any Perception or Survival check you make to find the target. The curse ends early if you transform the weapon or if you fall unconscious.",
			"\n**Transformed:** This whip deals 1d6 slashing damage on a hit, has the versatile (1d6/1d8) property, but does not have the finesse property. Once on each of your turns when you hit a creature with this weapon, you can attempt to crush them under the weight of the whip. The target must succeed on a Strength saving throw (DC = 8 + your proficiency bonus + your Strength modifier) or take 1d6 slashing damage and be knocked prone.",
			"\n**Curse: Devour Sight:** While attuned to this weapon, your sight deteriorates rapidly. For each five days that pass, you gain a permanent -1 penalty to all Perception checks made using your sight. When this penalty reaches -5, your eyes rot and melt out, leaving you permanently blinded as two new eyes appear on the blade. The sword’s curse is insidious: while you remain attuned to the weapon, you do not suffer the penalty to your Perception checks, and you do not realize that your sight is worsening. The blade’s influence makes you perceive the world in a clearer light. Demidritches are immune to this curse.",
		]
    }],
    action: [
        ["bonus action", "Revelations (Transform)"],
    ],
};
MagicItemsList["prophecy"] = {
    name: "Prophecy",
    source: [
        ["TW", 249]
    ],
    type: "Trick weapon (cleaver, whip)",
    rarity: "artifact",
    description: "This ghastly sword is studded with dozens of eyes making it so that I can't be surprised or blinded. As an untransformed cleaver, I curse creatures I hit, giving me bonuses on attacks against them. The whip it transforms into is heavier than a regular whip, giving it a damage bonus and the ability to crush enemies.",
    descriptionFull: "You gain a +1 bonus to attack and damage rolls made with this magic weapon. While attuned to it, your sight improves as your vision starts echoing with that of the blade. While holding revelations, you gain the following benefits: You can’t be surprised. Other creatures don’t gain advantage on attack rolls against you as a result of being unseen by you. You are immune to being blinded, as the sword absorbs the effect and closes two of its eyes instead, before regrowing them. \n**Trick Weapon.** As a bonus action, you can switch between the transformed and untransformed states of this weapon. In its untransformed state, the weapon is a cleaver studded with eyeballs. In its transformed state, the weapon is a whip composed of metal shards held together by a sinew of blood and flesh. \n**Untransformed.** When you hit a creature with this cleaver, you curse them for the next hour. For the duration, you gain a +1 bonus to damage rolls made with the weapon against the target, any attack roll you make with the weapon against the cursed target is a critical hit on a roll of 19 or 20 on the d20, and you have advantage on any Perception or Survival check you make to find the target. The curse ends early if you transform the weapon or if you fall unconscious. \n**Transformed.** This whip deals 1d6 slashing damage on a hit, has the versatile (1d6/1d8) property, but does not have the finesse property. Once on each of your turns when you hit a creature with this weapon, you can attempt to crush them under the weight of the whip. The target must succeed on a Strength saving throw (DC = 8 + your proficiency bonus + your Strength modifier) or take 1d6 slashing damage and be knocked prone.",
    prerequisite: "Requires attunement by a creature with a Strength of 15 or higher.",
    prereqeval: function(v) {
        return What('Str') >= 15;
    },
    weight: 2,
	savetxt: {
        immune: ["blinded", "surprised"]
    },
	vision: [
		["Truesight", 30],
	],
	spellcastingBonus: [{
		name : "Prophecy",
		selection: ["arcane eye"],
		spellcastingAbility : "class",
		firstCol: "atwill",
		magicItemComponents : false,
	}],
	spellChanges : {
		"arcane eye" : {
			changes : "The magical eye has Truesight out to 30 feet."
		}
	},
    weaponsAdd: {
		select: ["Prophecy (Cleaver)", "Prophecy (Whip)"],
	},
	weaponOptions : [{
		name: "Prophecy (Cleaver)",
		source: [
			["TW", 249]
		],
		regExpSearch: /^(?=.*prophecy)(?=.*cleaver).*$/i,
		baseWeapon: "cleaver",
		description: "Heavy, Versatile (1d12); Cleave; Curse on hit (+2 dmg, crit on 18-20, adv. on checks to locate);",
		modifiers: [2, 2],
	},	{
		name: "Prophecy (Whip)",
		source: [
			["TW", 249]
		],
		regExpSearch: /^(?=.*prophecy)(?=.*whip).*$/i,
		type: "Martial",
		ability: 1,
		abilitytodamage: true,
		damage: [1, 6, "slashing"],
		range: "Melee, Reach",
		list: "melee",
		weight: 3,
		monkweapon: false,
		description: "Versatile (1d8), Slow; 1/turn, target makes Str save (DC 8+Prof+Str) or +3d6 slashing dmg, prone & restrained;",
		modifiers: [2, 2],
	}],
    toNotesPage: [{
        name: "Prophecy",
        note: [
			"**Attunement:** You gain a +2 bonus to attack and damage rolls made with this magic weapon. While attuned to it, your sight improves as your vision starts echoing with that of the blade. While holding *prophecy*, you gain the following benefits:", 
			" \u2022 You can’t be surprised.",
			" \u2022 Other creatures don’t gain advantage on attack rolls against you as a result of being unseen by you.",
			" \u2022 You are immune to being blinded, as the sword absorbs the effect and closes two of its eyes instead, before regrowing them.",
			" \u2022 You have truesight out to 30 feet.",
			" \u2022 You can cast the *arcane eye* spell at will, requiring no material components and using *prophecy* as your spellcasting focus. When cast in this way, the magical eye also has truesight out to 30 feet.",
			"\n**Trick Weapon:** As a bonus action, you can switch between the transformed and untransformed states of this weapon.",
			" \u2022 In its untransformed state, the weapon is a cleaver studded with eyeballs.",
			" \u2022 In its transformed state, the weapon is a whip composed of metal shards held together by a sinew of blood and flesh.",
			"\n**Untransformed:** When you hit a creature with this cleaver, you curse them for the next hour. For the duration, you gain a +2 bonus to damage rolls made with the weapon against the target, any attack roll you make with the weapon against the cursed target is a critical hit on a roll of 18, 19, or 20 on the d20, and you have advantage on any Perception or Survival check you make to find the target. The curse ends early if you transform the weapon or if you fall unconscious.",
			"\n**Transformed:** This whip deals 1d6 slashing damage on a hit, has the versatile (1d6/1d8) property, but does not have the finesse property. Once on each of your turns when you hit a creature with this weapon, you can attempt to crush them under the weight of the whip. The target must succeed on a Strength saving throw (DC = 8 + your proficiency bonus + your Strength modifier) or take 3d6 slashing damage and be knocked prone and restrained.",
			"\n**Curse: All Devouring Sight:** While attuned to this weapon, your sight deteriorates rapidly. For each five days that pass, you gain a permanent -1 penalty to all Perception checks made using your sight. When this penalty reaches -5, your eyes rot and melt out, leaving you permanently blinded as two new eyes appear on the blade. However when you kill a creature of a CR equal to your level or greater, if the creature had eyes, your curse’s penalty regresses by 1 (e.g., from -2 penalty to -1) to a minimum of 0.", 
			" \u2022 The sword's curse is insidious: while you remain attuned to the weapon, you do not suffer the penalty to your Perception checks, and you do not realize that your sight is worsening. The blade's influence makes you perceive the world in a clearer light. Demidritches are immune to this curse.",
		]
    }],
    action: [
        ["bonus action", "Prophecy (Transform)"],
    ],
};
MagicItemsList["python bladewhip"] = {
    name: "Python Bladewhip",
    source: [
        ["TW", 250]
    ],
    type: "Trick weapon (whip, rapier)",
    rarity: "rare",
	attunement: true,
    description: "This cold, magical snake buries itself into my forearm and becomes a trick weapon. As a whip, my reach is 15ft. When I hit a creature twice in the same turn, it takes an extra 4d4 dmg, plus an extra 2d4 dmg on its next turn. Transformed, I take 1 dmg per turn to power the bladewhip's Fireblood Poison (see notes).",
    descriptionFull: "**Attunement:** When you attune to this weapon, it inflicts 1d4 piercing damage, and you can't be disarmed of this weapon. **Trick Weapon:** As a bonus action, you can switch between the transformed and untransformed states of this weapon. **Untransformed:** Attacks you make with the serpent bladewhip add an additional 5 feet to your reach, as well as when determining your reach for opportunity attacks with it. In addition, if you hit a creature twice in a turn with this weapon, the whip deals an extra 4d4 slashing damage, and at the start of the target’s next turn, it takes an extra 2d4 slashing damage. **Transformed:** While transformed, you take 1 piercing damage at the start of each of your turns as the blade drains your blood to empower itself. In addition, you gain immunity to the poisoned condition and to curses from spells (such as from bestow curse). This rapier gains the Fireblood Poison property and is considered silvered. **Fireblood Poison:** Once on each of your turns when you hit a creature with an attack using this blade, you can coat the wound with poison and the target must make a DC 16 Constitution saving throw. On a failure, it is poisoned for the next minute as its innards start to boil. This **can** affect creatures immune to the poisoned condition. While poisoned in this way, the creature takes 3d6 fire damage at the start of each of its turns. This damage ignores resistance to fire damage.",
	weight: 3,
    weaponsAdd: {
		select: ["Python Bladewhip", "Transformed Python Bladewhip"],
	},
	weaponOptions : [{
		name: "Python Bladewhip",
		source: [
			["TW", 250]
		],
		regExpSearch: /python bladewhip/i,
		baseWeapon: "whip",
		range: "15 ft",
		description: "Finesse, Reach; Slow; If I hit a creature twice in one turn, deals +4d4 slashing dmg (+2d4 dmg on next turn);",
		modifiers: [2, 2],
	},	{
		name: "Transformed Python Bladewhip",
		source: [
			["TW", 250]
		],
		regExpSearch: /^(?=.*python)(?=.*bladewhip)(?=.*transformed).*$/i,
		baseWeapon: "rapier",
		description: "Silvered, Finesse; Vex; I take 1 dmg each turn; Fireblood Poison: DC 16 Con save or poisoned, see notes;",
		modifiers: [2, 2],
	}],
	savetxt: {
        immune: ["poisoned", "cursed"]
    },
	toNotesPage: [{
        name: "Python Bladewhip",
        note: [
			"**Attunement:** When you attune to this weapon, the cold, lifeless snake wraps around your forearm and bites your flesh, burying its head beneath it and inflicting 1d4 piercing damage. While attuned, you cannot be disarmed of this magical weapon. Ending the attunement causes the head to retract and the item to fall to the ground.",
			"\n**Trick Weapon:** As a bonus action, you can switch between the transformed and untransformed states of this weapon.",
			" \u2022 In its untransformed state, the bladewhip is a metallic whip. ",
			" \u2022 In its transformed state, the weapon solidifies by coagulating your blood to form a rapier.",
			"\n**Untransformed:** Attacks you make with the *serpent bladewhip* add an additional 5 feet to your reach, as well as when determining your reach for opportunity attacks with it. In addition, if you hit a creature twice in a turn with this weapon, the whip’s devouring hunger awakens and tears out more of its flesh, dealing an extra 4d4 slashing damage, and at the start of the target’s next turn, it takes an extra 2d4 slashing damage.",
			"\n**Transformed:** While transformed, you take 1 piercing damage at the start of each of your turns as the blade drains your blood to empower itself. In addition, you gain immunity to the poisoned condition and to curses from spells (such as from bestow curse). This rapier gains the **Fireblood Poison** property and is considered silvered.",
			"\n**Fireblood Poison:** Once on each of your turns when you hit a creature with an attack using this blade, you can coat the wound with poison and the target must make a DC 16 Constitution saving throw. On a failure, it is poisoned for the next minute as its innards start to boil. This can affect creatures immune to the poisoned condition. While poisoned in this way, the creature takes 3d6 fire damage at the start of each of its turns. This damage ignores resistance to fire damage.",
			" \u2022 A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the blade's Fireblood Poison for the next 24 hours.",
		]
    }],
    action: [
        ["bonus action", "Python Bladewhip (Transform)"],
    ],
};
MagicItemsList["shard of moonlight"] = {
    name: "Shard of Moonlight",
    source: [
        ["TW", 252]
    ],
    type: "Trick weapon (longsword, greatsword)",
    rarity: "artifact",
    description: "This sentient trick weapon adds +3 to hit and damage and deals extra radiant damage. As a longsword, I can make an extra attack and absorb spells to charge the Shard. When transformed into a greatsword, I can expend charges to empower my attacks. See notes page.",
    descriptionFull: "While attuned to this weapon, you are proficient with greatswords and longswords; you gain a +3 bonus to attack and damage rolls made with this magic weapon, and the blade deals an extra 1d6 radiant damage on a hit; you have advantage on Wisdom saving throws, except those made to resist madness; and you can use this shard as a spellcasting focus. \n**Untransformed:** The blade seems to guide your strikes. Once on each of your turns when you make an attack with the shard, you can immediately make a second attack (no action required). It has the Void Absorption property. **Void Absorption:** While holding the untransformed shard, you can use your reaction to absorb a spell that is targeting you, including spells with an area of effect. The absorbed spell's effect is canceled, and the spell's energy—not the spell itself— is stored in the shard in the form of charges. The number of charges gained is equivalent to the level of the spell when it was cast (minimum of 1 for cantrips). The shard can absorb and store up to 10 charges. If the shard doesn’t have enough empty charges for a spell, it fails to absorb it. The blade regains all charges each time the moon changes. \n**Transformed:** To transform this blade, you must use a bonus action while under direct moonlight. The transformation lasts for 1 minute, or until you end it early as a bonus action. When it transforms, you can expend the charges stored within the blade, and when the blade loses all charges, the transformation ends. While the blade is transformed, the extra radiant damage it deals on a hit increases from 1d6 to 2d6. Each time you make an attack in the transformed state, you can expend a number of charges to create special effects: **Revealing Glow:** As part of making an attack, you can expend 1 charge to empower the shard. On a hit, it deals an extra 1d12 radiant damage, and until the start of your next turn, the target sheds dim light in a 10-foot radius. While affected by the light, attack rolls against the target have advantage if the attacker can see them, and the affected target can't turn invisible. **Transient Moonlight:** As part of making an attack, you can expend 2 charges to release a wave of moonlight where the shard slashes, creating a 5-foot-wide, 60-foot- long line of moonlight in front of you. A creature in the path of the moonlight must make a DC 18 Constitution saving throw, taking 2d12 radiant damage on a failed save, or half as much damage on a successful one. **Lunar Explosion:** Instead of making an attack, you can expend 3 charges to raise the shard upward and release a burst of moonlight energy. Each creature within 30 feet of you must make a DC 18 Dexterity saving throw, taking 3d12 radiant damage and is knocked prone on a failed save, or half as much damage and isn’t knocked prone on a successful one. If a creature falls prone within 5 feet of you, you can use your reaction to immediately make a melee weapon attack against them with the shard.",
    attunement: true,
	weaponProfs: [false, false, ["longsword", "greatsword"]],
    weight: 6,
	action: [
        ["bonus action", "Shard of Moonlight (Transform)"],
		["reaction", "Void Absorption"],
    ],
	weaponsAdd: {
		select: ["Shard of Moonlight (Longsword)", "Shard of Moonlight (Greatsword)"],
	},
    weaponOptions: [{
        baseWeapon: "longsword",
        regExpSearch: /^(?=.*shard)(?=.*moonlight)(?=.*longsword).*$/i,
        name: "Shard of Moonlight (Longsword)",
        source: [
            ["TW", 252]
        ],
        description: "Light, Versatile (1d10); Sap; +1d6 radiant dmg; 1/turn, additional attack (no action); Void Absorption;",
        modifiers: [3, 3],
    },	{
		baseWeapon: "greatsword",
        regExpSearch: /^(?=.*shard)(?=.*moonlight)(?=.*greatsword).*$/i,
        name: "Shard of Moonlight (Greatsword)",
        source: [
            ["TW", 252]
        ],
        description: "Light, Two-Handed; Graze; +2d6 radiant dmg; Expend charges on attacks (see notes);",
        modifiers: [3, 3],
	}],
    toNotesPage: [{
        name: "Shard of Moonlight",
        note: [
			"This weapon is the flesh of a Great One carved away in pain and fashioned into a blade. The Shard of Moonlight is the reason the Shattered Moon exists and the Devouring Moon is no more. He who wields the blade is overwhelmed by hope, however misguided it might be…",
			"**Attunement:** While attuned to this weapon, you gain the following benefits:",
			" \u2022 You are proficient with greatswords and longswords.",
			" \u2022 You gain a +3 bonus to attack and damage rolls made with this magic weapon, and the blade deals an extra 1d6 radiant damage on a hit.",
			" \u2022 You have advantage on Wisdom saving throws, except those made to resist madness.",
			" \u2022 You can use this shard as a spellcasting focus.",
			"\n**Sentience:** The Shard of Moonlight is a sentient weapon, with the same personality as the Great One whose flesh it was carved from. The weapon sporadically communicates telepathically with its wielder through images and sounds, though it doesn’t speak.",
			"\n**Trick Weapon:** As a bonus action, you can switch between the transformed and untransformed states of this weapon.",
			" \u2022 In its untransformed state, the blade is a metallic longsword that absorbs light.",
			" \u2022 In its transformed state, the weapon is a greatsword that pulses with lunar energy.",
			" \u2022 In both states, this weapon has the light property.",
			"\n**Untransformed:** The blade seems to guide your strikes. Once on each of your turns when you make an attack with the shard, you can immediately make a second attack (no action required). It has the Void Absorption property.",
			" \u2022 **Void Absorption:** The void that fills the blade is capable of absorbing magic. While holding the untransformed shard, you can use your reaction to absorb a spell that is targeting you, including spells with an area of effect. The absorbed spell's effect is canceled, and the spell's energy—not the spell itself— is stored in the shard in the form of charges. The number of charges gained is equivalent to the level of the spell when it was cast (minimum of 1 for cantrips). The shard can absorb and store up to 10 charges. If the shard doesn’t have enough empty charges for a spell, it fails to absorb it. The blade regains all charges each time the moon changes.",
			"\n**Transformed:** To transform this blade, you must use a bonus action while under direct moonlight. The transformation lasts for 1 minute, or until you end it early as a bonus action. When it transforms, you can expend the charges stored within the blade, and when the blade loses all charges, the transformation ends. While the blade is transformed, the extra radiant damage it deals on a hit increases from 1d6 to 2d6. Each time you make an attack in the transformed state, you can expend a number of charges to create special effects:",
			" \u2022 **Revealing Glow:** As part of making an attack, you can expend 1 charge to empower the shard. On a hit, it deals an extra 1d12 radiant damage, and until the start of your next turn, the target sheds dim light in a 10-foot radius. While affected by the light, attack rolls against the target have advantage if the attacker can see them, and the affected target can't turn invisible.",
			" \u2022 **Transient Moonlight:** As part of making an attack, you can expend 2 charges to release a wave of moonlight where the shard slashes, creating a 5-foot-wide, 60-foot- long line of moonlight in front of you. A creature in the path of the moonlight must make a DC 18 Constitution saving throw, taking 2d12 radiant damage on a failed save, or half as much damage on a successful one.",
			" \u2022 **Lunar Explosion:** Instead of making an attack, you can expend 3 charges to raise the shard upward and release a burst of moonlight energy. Each creature within 30 feet of you must make a DC 18 Dexterity saving throw, taking 3d12 radiant damage and is knocked prone on a failed save, or half as much damage and isn’t knocked prone on a successful one. If a creature falls prone within 5 feet of you, you can use your reaction to immediately make a melee weapon attack against them with the shard.",
		]
    }],
    savetxt: {
        adv_vs: ["Wisdom saves, except vs. madness"]
    },
};
MagicItemsList["sword of the radiant watcher"] = {
    name: "Sword of the Radiant Watcher",
    source: [
        ["TW", 253]
    ],
    type: "Trick weapon (longsword)",
    rarity: "artifact",
    description: "This sentient longsword has two distinct personalities, each linked to its corresponding transformed state. In its Angelic light form, I can bind a target to my light and bolster my allies against it. In its Hateful shadow form, I can tether my target and deal extra damage. See notes page.",
    descriptionFull: "See notes page.",
    attunement: true,
    weight: 3,
	action: [
        ["bonus action", "Sword of the Radiant Watcher (Transform)"],
		["bonus action", "Retribution of Light"],
		["bonus action", "Shadow Chain (End)"],
    ],
	weaponsAdd: {
		select: ["Radiant Watcher Light Form", "Radiant Watcher Shadow Form"],
	},
    weaponOptions: [{
        baseWeapon: "longsword",
        regExpSearch: /^(?=.*radiant)(?=.*watcher)(?=.*light).*$/i,
        name: "Radiant Watcher Light Form",
        source: [
            ["TW", 253]
        ],
        description: "Versatile (1d10); Sap; +1d8 radiant dmg; Curse of Light, Retribution of Light, Abhorrent Existence (see notes);",
    },	{
		baseWeapon: "longsword",
        regExpSearch: /^(?=.*radiant)(?=.*watcher)(?=.*shadow).*$/i,
        name: "Radiant Watcher Shadow Form",
        source: [
            ["TW", 253]
        ],
        description: "Versatile (1d10); Sap; +1d8 necrotic dmg; Shadow Chain, Shadow Consumption, Aborrhant Existence (see notes);",
	}],
    toNotesPage: [{
        name: "Sword of the Radiant Watcher",
        note: [
			"The Sword of the Radiant Watcher is an ancient weapon, meant to contain two entities bound into eternal hatred. One was a hunter and one was a beast, though no one knows which aspect of the blade they were bound to.",
			"\n**Sentience:** This sentient weapon has two distinct personalities, each linked to its corresponding transformed state. The Angelic personality (alignment: lawful good) is protective and nurturing, while the Hateful personality (alignment: chaotic evil) is cunning and ruthless. The weapon has an Intelligence of 14, a Wisdom of 12, and a Charisma of 17. It has hearing and darkvision out to a range of 120 feet. The dominant personality may attempt to influence the wielder's actions, particularly when it comes to matters of morality or strategy. However, the sword cannot force its wielder to act against their will. The sword communicates telepathically with its wielder and can speak, read, and understand Common and Deep Speech.",
			"\n**Trick Weapon:** As a bonus action, you can switch between the transformed and untransformed states of this weapon by letting hatred or hope overwhelm you.",
			" \u2022 In both states, the weapon is a longsword.",
			" \u2022 When the weapon's form changes, so too does its dominant personality.",
			" \u2022 The two personalities within the Sword of the Radiant Watcher are in constant struggle for dominance. When the wielder attempts to switch the weapon’s forms, they must exert their force of will to do so, making a DC 16 Charisma saving throw. On a success, the sword changes form, and on a failure, it stubbornly refuses to do so until the start of your next turn, at which point you can attempt to switch the weapon’s forms again.",
			"\n**Untransformed: Light Form:** The Angelic personality is dominant and the sword deals an extra 1d8 radiant damage on a hit.",
			" \u2022 **Curse of Light:** When you hit a creature with this sword, you can bind the target to your light (no action required). For the next minute, you are under the effect of the sanctuary spell, but only the bound target must make the saving throw. This effect ends as normal if you take an action that would break it but returns at the start of your next turn.",
			" \u2022 **Retribution of Light:** When a target is under the effect of the Curse of Light, as a bonus action, you can bolster up to four creatures of your choice that can hear you within 30 feet for the duration of the curse. While bolstered, they have advantage on their first attack roll against the target each turn, and if the attack hits, it deals extra damage equal to their proficiency bonus of the damage type they dealt. This property of the weapon can be used three times, regaining all expended uses daily at dawn.",
			"\n**Transformed: Shadow Form:** The Hateful personality is dominant and the sword deals an extra 1d8 necrotic damage on a hit.",
			" \u2022 **Shadow Chain:** When you hit a creature with this sword, you can tether the target to you with a chain of shadowy energy (no action required). While tethered, the creature's speed is reduced by 10 feet, and neither you nor the creature can willingly move or teleport more than 30 feet away from each other. The tether lasts for 1 minute, until you use this property on another creature, if you start your turn more than 30 feet away from the target, or end the tether as a bonus action.",
			" \u2022 **Shadow Consumption:** While tethered to a creature with your Shadow Chain, once on each of your turns when you hit the target with this weapon, you can inflict an extra 3d6 necrotic damage and gain temporary hit points equal to the necrotic damage dealt. This property of the weapon can be used three times, regaining all expended uses daily at dawn.",
			" \u2022 **Aborrhant Existence:** The sentient entities within the sword are antithetical to each other, and no creature can withstand their presence at once, which is why the blade was sealed in such a way. Once on each of your turns, if both forms of the sword damage the same creature in a single turn, it must succeed on a DC 16 Wisdom saving throw or gain a short-term madness.",
			"In addition, if you deal necrotic damage with the shadow form of sword while the Curse of Light is in effect; or oppositely, if you deal radiant damage with the light form of the sword while the Shadow Chain is in effect, the effect ends and detonates. Each creature within a 10-foot radius of the target must succeed on a DC 16 Constitution saving throw or take 2d6 radiant damage and 2d6 necrotic damage as the antithetical energies resonate and self-destruct. You have advantage on this saving throw.",
		]
    }],
	extraLimitedFeatures: [
		{
		name : "Retribution of Light",
		usages : 3,
		recovery : "dawn",
	},	{
		name : "Shadow Consumption",
		usages : 3,
		recovery : "dawn",
	}],
};
MagicItemsList["thirsting epee sanguine"] = {
    name: "Thirsting Epee Sanguine",
    source: [
        ["TW", 255]
    ],
    type: "Trick weapon (longsword, greatsword)",
    rarity: "artifact",
	attunement: true,
    magicItemTable: "?",
    description: "This sword, formed of coagulated blood, gets bonuses in each state based on the target's hit points. Each time I use it to deal damage to a creature that has blood, it gains 1 charge. When I hit a creature, I can expend charges to unleash the accumulated blood, and the blade gains properties that help protect me.",
    descriptionFull: "See notes page.",
    action: [
        ["bonus action", "Thirsting Épée Sanguine (Transform)"],
    ],
	weaponsAdd: {
		select: ["Thirsting Épée Sanguine (Longsword)", "Thirsting Épée Sanguine (Greatsword)"],
	},
	weaponOptions : [{
		name: "Thirsting Épée Sanguine (Longsword)",
		source: [
			["TW", 255]
		],
		regExpSearch: /^(?=.*thirsting)(?=.*epee)(?=.*sanguine)(?=.*longsword).*$/i,
		baseWeapon: "longsword",
		description: "Versatile (1d10); Sap; +1d8 necrotic dmg, +1d12 dmg against creatures at max HP, Blood Shield; See notes;",
		modifiers: [3, 3],
	},	{
		name: "Thirsting Épée Sanguine (Greatsword)",
		source: [
			["TW", 255]
		],
		regExpSearch: /^(?=.*thirsting)(?=.*epee)(?=.*sanguine)(?=.*greatsword).*$/i,
		baseWeapon: "greatsword",
		description: "Heavy, Two-Handed; Graze; +1d8 necrotic dmg, +1d6 to hit against creatures <100% HP, expend charges; See notes;",
		modifiers: [3, 3],
	}],
	toNotesPage: [{
        name: "Thirsting Épée Sanguine",
        note: [
				"**Attunement:** While attuned to this weapon, you gain the following benefits:",
				" \u2022 You gain a +3 bonus to attack and damage rolls made with this magic weapon, which deals an extra 1d8 necrotic damage on a hit. When you hit a creature with blood with this weapon, the target takes an extra 1d8 necrotic damage.",
				" \u2022 You are immune to poison and necrotic damage and the poisoned condition.",
				" \u2022 You know the exact location of any creature with blood within a 30-foot radius, even if they are invisible or on the Ethereal plane.",
				" \u2022 The weapon has the Lifestealing property.",
				" \u2022 **Lifestealing:** In dire situations, the épée grants you the power to take the life of others. If you are reduced to one-quarter of your hit points or fewer, you can immediately use this property (no action required). Until the end of your next turn, whenever you deal damage using this weapon, you regain hit points equal to the damage dealt. Once this property of the weapon has been used, it can't be used again until the next dawn.",
				"\n**Trick Weapon.** As a bonus action, you can switch between the transformed and untransformed states of this weapon.",
				" \u2022 In its untransformed state, the blade is a vile longsword glowing with echoes of blood.",
				" \u2022 In its transformed state, the weapon is a greatsword with an even more nefarious aspect.",
				" \u2022 To transform this weapon, you must feed it blood. Each time you deal damage with this weapon to a creature that possesses blood, the épée gains 1 charge. The épée can hold up to 6 charges. Each charge lasts for 1 minute or until it is consumed. If this weapon has 1 or more charges, you can use your bonus action to transform it.",
				"\n**Untransformed:** You gain a 1d12 bonus to attack rolls you make with this weapon against creatures that are at their hit point maximum. In addition, the weapon has the Blood Shield property.",
				" \u2022 **Blood Shield:** The épée forms a barrier of blood around you with the blood it has absorbed. You gain a +1 bonus to AC for each 2 charges within the épée.",
				"\n**Transformed:** You gain a 1d6 bonus to attack rolls you make with this weapon against creatures that are below their hit point maximum. In this form, the épée sanguine consumes 1 charge at the end of each of your turns, unless you've expended 1 or more charges that turn. It reverts back to its untransformed state if it loses all charges.",
				"\nWhen you hit a creature with an attack using the épée, you can expend 1 or more charges to unleash the blood accumulated in the blade:",
				" \u2022 1 Charge: You heal a number of hit points equal to the necrotic damage you dealt.",
				" \u2022 2 Charges: You deal an extra 2d8 necrotic damage and heal a number of hit points equal to the necrotic damage you dealt.",
				" \u2022 3 Charges: The target becomes bound in blood and must make a DC 18 Dexterity saving throw. On a failed save, it takes 4d6 necrotic damage and is restrained until the start of your next turn. On a successful save, it takes half as much damage and isn't restrained.",
				" \u2022 4 Charges: Blood covers the creature’s face and chokes it. The creature must make a DC 18 Dexterity saving throw. On a failed save, it takes 4d10 necrotic damage and is stunned until the start of your next turn. On a successful save, it takes half as much damage and isn’t stunned.",
        ],
    }],
	savetxt: {
        immune: ["Necrotic damage", "Poisoned condition"]
    },
	extraLimitedFeatures: [{
		name : "Lifestealing",
		usages : 1,
		recovery : "dawn",
	}],
};
MagicItemsList["unbound epee solaire"] = {
	name: "Unbound Epee Solaire",
    source: [
        ["TW", 256]
    ],
    type: "Trick weapon (greatsword, shortsword)",
    rarity: "artifact",
	attunement: true,
    description: "Bathed in the blood of the sun, this magical blade deals extra radiant damage, and I can use a reaction to impose disadvantage on attacks. Its greatsword state grants me +1 to my AC and saving throws. Both states of this weapon can create explosions of radiant damage, see notes page.",
    descriptionFull: "See notes page.",
    action: [
        ["bonus action", "Unbound Épée Solaire (Transform)"],
		["reaction", "Deflective Light"],
		["bonus action", "Light of Judgment"],
    ],
	weaponProfs: [false, false, ["shortsword", "greatsword"]],
	weaponsAdd: {
		select: ["Unbound Épée Solaire (Greatsword)", "Unbound Épée Solaire (Two Shortswords)"],
	},
	weaponOptions : [{
		name: "Unbound Épée Solaire (Greatsword)",
		source: [
			["TW", 256]
		],
		regExpSearch: /^(?=.*unbound)(?=.*epee)(?=.*solaire)(?=.*greatsword).*$/i,
		baseWeapon: "greatsword",
		description: "Heavy, Two-Handed; Graze; +1d8 radiant dmg, 2d8 vs. aberrations & undead; Light of Judgment;",
		modifiers: [3, 3],
	},	{
		name: "Unbound Épée Solaire (Two Shortswords)",
		source: [
			["TW", 256]
		],
		regExpSearch: /^(?=.*unbound)(?=.*epee)(?=.*solaire)(?=.*shortsword).*$/i,
		baseWeapon: "shortsword",
		description: "Finesse, Light; Vex; add ability mod to offhand; +1d8 radiant dmg, 2d8 vs. aberrations & undead; Brightburn;",
		modifiers: [3, 3],
	}],
	addMod: [
		{type: "save", field: "all", mod: 1, text: "While I'm weilding the Unbound Épée Solaire in its greatsword state, I add +1 to my AC and saving throws."},
	],
	extraAC: [{
		mod: 1,
		name : "Unbound Épée Solaire (Greatsword)",
		magic : true,
	}],
	savetxt: {
        adv_vs: ["Wisdom saves vs. madness"]
    },
	toNotesPage: [{
        name: "Unbound Épée Solaire",
        note: [
                "The method to create the Épée Solaire is a tight-lipped secret, involving harnessing the power of the sun, a method that only devout followers of the Radiant One can grasp. As time went on, the sun faded from the skies of Luyarnha, replaced by a never ending night, and so, the creation of this weapon became impossible. This Épée Solaire was bathed in the blood of the sun, unleashing its potential.",
				"While attuned to this weapon, you gain the following benefits:",
				" \u2022 You are proficient with greatswords and shortswords.",
				" \u2022 You gain a +3 bonus to attack and damage rolls made with this magic weapon, which deals an extra 1d8 radiant damage on a hit. When you hit an aberration or undead with it, the extra radiant damage increases to 2d8.",
				" \u2022 You have advantage on saving throws against madness.",
				"\n**Trick Weapon.** As a bonus action, you can switch between the transformed and untransformed states of this weapon.",
				" \u2022 In its untransformed state, the blade is a metallic greatsword glowing with light.",
				" \u2022 In its transformed state, the weapon is two shortswords emitting the same glow.",
				" \u2022 The weapon’s blade emits bright light in a 30-foot radius and dim light for an additional 30 feet. The light is sunlight. You can summon or extinguish the light at will (no action required). Each creature of your choice in the light has resistance to radiant damage. This weapon has the **Deflective Light** property.",
				" \u2022 **Deflective Light:** When you are attacked by a creature within 30 feet of you that you can see, you can use your reaction to cause a burst of sunlight to flare before the attacker, imposing disadvantage on the attack roll and transforming the weapon. An attacker that can't be blinded is immune to this property.",
				"\n**Untransformed:** While wielding this greatsword, your senses are pushed to their limit. You gain a +1 bonus to AC and saving throws. In addition, the weapon has the **Light of Judgment** property.",
				" \u2022 **Light of Judgment:** As a bonus action, you can unleash judgment upon the heretics. The blade’s light is summoned for the next minute or until you fall unconscious or transform the weapon. You and all hostile creatures within the bright light immediately take 2d8 radiant damage. In addition, for the duration, you deal an extra 2d8 radiant damage whenever you damage a creature with the épée, and radiant damage you deal ignores resistance to radiant damage.",
				"\n**Transformed:** When you engage in two-weapon fighting with these shortswords, you can add your ability modifier to the damage of the second attack. In addition, this weapon gains the **Sunscorch** property.",
				" \u2022 **Sunscorch:** Whenever you hit a creature two times in a turn with these shortswords, the accumulated solar energy detonates. Each creature in a 15-foot radius must make a DC 17 Constitution saving throw, taking 3d10 radiant damage on a failed save, or half as much damage on a successful one.",
        ],
    }],
};

//Eldritch Carvings
MagicItemsList["curse of moon-blood"] = {
    name: "Curse of Moon-Blood",
    source: [["TW", 258]],
    type: "Eldritch Carving",
    rarity: "drawn: rare, tattooed: very rare, carved: legendary",
    attunement: true,
    description: "",
    descriptionFull: "",
	allowDuplicates: false,
	choices: ["Drawn", "Tattooed", "Scarified"],
	drawn: {
		name: "Drawn Curse of Moon-Blood",
		description:
			"This eldritch rune engraved upon my flesh allows the control of the curse it was created from, giving me the power to shape my blood into weapons.",
		action: [
			["bonus action", "Curse of Moon-Blood"],
			["bonus action", "Curse of Moon-Blood (End)"],
			["bonus action", "Barbed Tail Attack"],
		],
		weaponOptions : [{
			name: "Barbed Tail",
			source: [
				["TW", 258]
			],
			regExpSearch: /^(?=.*barbed)(?=.*tail).*$/i,
			isAlwaysProf: true,
			type: "Simple",
			ability: 1,
			abilitytodamage: true,
			damage: [1, 8, "piercing"],
			isMagicWeapon: true,
			range: "Melee",
			description: "Finesse, Reach; Can make an attack as part of transformation and as a bonus action;",
			list: "melee",
		},	{
			name: "Razor Claws",
			source: [
				["TW", 258]
			],
			regExpSearch: /^(?=.*razor)(?=.*claws).*$/i,
			isAlwaysProf: true,
			baseWeapon: "unarmed strike",
			isMagicWeapon: true,
			description: "Gain climb speed equal to walking speed; unarmed attacks deal +1d6 magical slashing dmg;",
		}],
		toNotesPage: [{
			name: "Curse of Moon-Blood Eldritch Carving",
			note: [
				"\n**Drawn:** A creature that has a carving drawn on its flesh must succeed on a DC 13 Constitution saving throw. On a failure, it gains a short-term madness, takes 2d10 force damage, and the carving isn’t drawn.",
				"\nAs a bonus action, you unleash the powers held within the carving, transforming into a crimson beast. You take necrotic damage equal to one roll of your hit die, which cannot be reduced in any way, and suffer this damage again for each minute you remain transformed. This transformation ends early if you fall unconscious or end it as a bonus action. The blood you lose shapes itself into one of the following powers:",
				" \u2022 **Barbed Tail:** A bloody tail erupts from your lower spine. As part of transforming and on subsequent turns as a bonus action, you can make a melee weapon attack with it. The tail is considered a simple melee weapon you are proficient with, has the finesse and reach properties, and deals 1d8 magical piercing damage on a hit.",
				" \u2022 **Razor Claws:** Your hands grow sharp claws that you can climb and kill with. You gain a climbing speed equal to your walking speed, and your unarmed strikes deal an extra 1d6 magical slashing damage.",
			]
		}],
	},
	tattooed: {
		name: "Tattooed Curse of Moon-Blood",
		description:
			"This eldritch rune engraved upon my flesh allows the control of the curse it was created from, giving me the power to shape my blood into weapons and use it to deflect deadly blows. While attuned to this item, my AC increases by 2 when I am below half my hit point maximum.",
		action: [
			["bonus action", "Curse of Moon-Blood"],
			["bonus action", "Curse of Moon-Blood (End)"],
			["bonus action", "Barbed Tail Attack"],
		],
		weaponOptions : [{
			name: "Barbed Tail",
			source: [
				["TW", 258]
			],
			regExpSearch: /^(?=.*barbed)(?=.*tail).*$/i,
			isAlwaysProf: true,
			type: "Simple",
			ability: 1,
			abilitytodamage: true,
			damage: [1, 8, "piercing"],
			isMagicWeapon: true,
			range: "Melee",
			description: "Finesse, Reach; Can make an attack as part of transformation and as a bonus action;",
			list: "melee",
		},	{
			name: "Razor Claws",
			source: [
				["TW", 258]
			],
			regExpSearch: /^(?=.*razor)(?=.*claws).*$/i,
			isAlwaysProf: true,
			baseWeapon: "unarmed strike",
			isMagicWeapon: true,
			description: "Gain climb speed equal to walking speed; unarmed attacks deal +1d6 magical slashing dmg;",
		}],
		toNotesPage: [{
			name: "Curse of Moon-Blood Eldritch Carving",
			note: [
				"\n**Tattooed:* A creature that has a carving tattooed on its flesh must succeed on a DC 20 Constitution saving throw. On a failure, it gains a long-term madness, takes 10d10 force damage, and the carving isn’t tattooed.",
				"\nAs a bonus action, you unleash the powers held within the carving, transforming into a crimson beast. You take necrotic damage equal to one roll of your hit die, which cannot be reduced in any way, and suffer this damage again for each minute you remain transformed. This transformation ends early if you fall unconscious or end it as a bonus action. The blood you lose shapes itself into one of the following powers:",
				" \u2022 **Barbed Tail:** A bloody tail erupts from your lower spine. As part of transforming and on subsequent turns as a bonus action, you can make a melee weapon attack with it. The tail is considered a simple melee weapon you are proficient with, has the finesse and reach properties, and deals 1d8 magical piercing damage on a hit.",
				" \u2022 **Razor Claws:** Your hands grow sharp claws that you can climb and kill with. You gain a climbing speed equal to your walking speed, and your unarmed strikes deal an extra 1d6 magical slashing damage.",
				"\nThe carving’s power protects your body when the situation is most dire. While attuned to this item, your AC increases by 2 while you are below half your hit point maximum.",
			]
		}],
	},
	scarified: {
		name: "Scarified Curse of Moon-Blood",
		description:
			"This eldritch rune engraved upon my flesh allows the control of the curse it was created from. I can shape my blood into weapons and use it to deflect deadly blows. Though powerful, if too much blood is spilled, the ancient curse awakens anew, devouring life and unleashing the terrifying crimson beast of old.",
		action: [
			["bonus action", "Curse of Moon-Blood"],
			["bonus action", "Curse of Moon-Blood (End)"],
			["bonus action", "Barbed Tail Attack"],
		],
		weaponOptions : [{
			name: "Scarified Barbed Tail",
			source: [
				["TW", 258]
			],
			regExpSearch: /^(?=.*scarified)(?=.*barbed)(?=.*tail).*$/i,
			isAlwaysProf: true,
			type: "Simple",
			ability: 1,
			abilitytodamage: true,
			damage: [3, 8, "piercing"],
			isMagicWeapon: true,
			range: "Melee",
			description: "Finesse, Reach; Can make an attack as part of transformation and as a bonus action;",
			list: "melee",
		},	{
			name: "Scarified Razor Claws",
			source: [
				["TW", 258]
			],
			regExpSearch: /^(?=.*scarified)(?=.*razor)(?=.*claws).*$/i,
			isAlwaysProf: true,
			baseWeapon: "unarmed strike",
			isMagicWeapon: true,
			description: "Gain climb speed equal to walking speed; unarmed attacks deal +2d6 magical slashing dmg;",
		}],
		toNotesPage: [{
			name: "Curse of Moon-Blood Eldritch Carving",
			note: [
				"\n**Scarified:** A creature that has a carving scarred on its flesh must succeed on a DC 29 Constitution saving throw. On a failure, it gains an indefinite madness, takes 25d10 force damage, and the carving isn’t scarified.",
				"\nAs a bonus action, you unleash the powers held within the carving, transforming into a crimson beast. You take necrotic damage equal to one roll of your hit die, which cannot be reduced in any way, and suffer this damage again for each minute you remain transformed. This transformation ends early if you fall unconscious or end it as a bonus action. The blood you lose shapes itself into one of the following powers:",
				" \u2022 **Blood Wings:** You sprout wings from your back, giving you a flying speed equal to your walking speed.",
				" \u2022 **Barbed Tail:** A bloody tail erupts from your lower spine. As part of transforming and on subsequent turns as a bonus action, you can make a melee weapon attack with it. The tail is considered a simple melee weapon you are proficient with, has the finesse and reach properties, and deals 3d8 magical piercing damage on a hit.",
				" \u2022 **Razor Claws:** Your hands grow sharp claws that you can climb and kill with. You gain a climbing speed equal to your walking speed, and your unarmed strikes deal an extra 2d6 magical slashing damage.",
				"\nIn addition, when you are reduced to 0 hit points, you lose control of yourself as your blood takes a life of its own and you go berserk. You regain 1 hit point and gain a number of temporary hit points equal to your hit point maximum. While berserk, you gain all the abilities of your crimson beast transformation and on each of your turns, you attack the nearest creature you can see. If no creature is near enough to move to and attack, you attack an object, with preference for an object smaller than yourself. Once you go berserk, you stay in that state for 1 minute or until you fall unconscious. When it ends, you immediately drop to 0 hit points, are dying, and have 2 failed death saving throws. After you’ve gone berserk, you lose all the abilities from the eldritch carving for 1 week.",
			]
		}],
	},
};
MagicItemsList["leaded blood"] = {
    name: "Leaded Blood",
    source: [["TW", 260]],
    type: "Eldritch Carving",
    rarity: "drawn: uncommon, tattooed: rare, carved: very rare",
    attunement: true,
    description: "",
    descriptionFull: "",
	allowDuplicates: false,
	choices: ["Drawn", "Tattooed", "Scarified"],
	drawn: {
		name: "Drawn Leaded Blood",
		description:
			"The Scions have manufactured enough perfect replicas to make this one of the most widely distributed eldritch carvings, having shared them with the Church and the hunters in an apparent selfless effort to aid against the Scourge. With this drawing on my skin, I can convert my blood into bullets.",
		action: [
			["bonus action", "Leaded Blood (3 Bullets)"],
		],
		toNotesPage: [{
			name: "Leaded Blood Eldritch Carving",
			note: [
				"\n**Drawn:** A creature that has a carving drawn on its flesh must succeed on a DC 13 Constitution saving throw. On a failure, it gains a short-term madness, takes 2d10 force damage, and the carving isn’t drawn.",
				"\nYou can convert your blood into bullets. As a bonus action, you can sacrifice 3 hit points to generate 3 blood bullets. These bullets function as regular lead bullets. You can only ever have 3 blood bullets present at once; any additional bullets you create immediately liquefy. The bullets last until they're used or until you finish a short or long rest.",
			]
		}],
	},
	tattooed: {
		name: "Tattooed Leaded Blood",
		description:
			"The Scions have manufactured enough perfect replicas to make this one of the most widely distributed eldritch carvings, having shared them with the Church and the hunters in an apparent selfless effort to aid against the Scourge. With this tattoo on my skin, I can convert my blood into bullets.",
		action: [
			["bonus action", "Leaded Blood (5 Bullets)"],
		],
		toNotesPage: [{
			name: "Leaded Blood Eldritch Carving",
			note: [
				"\n**Tattooed:* A creature that has a carving tattooed on its flesh must succeed on a DC 20 Constitution saving throw. On a failure, it gains a long-term madness, takes 10d10 force damage, and the carving isn’t tattooed.",
				"\nYou can convert your blood into bullets. As a bonus action, you can sacrifice 3 hit points to generate 5 blood bullets. These bullets function as regular lead bullets. You can only ever have 5 blood bullets present at once; any additional bullets you create immediately liquefy. The bullets last until they're used or until you finish a short or long rest.",
			]
		}],
	},
	scarified: {
		name: "Scarified Leaded Blood",
		description:
			"The Scions have manufactured enough perfect replicas to make this one of the most widely distributed eldritch carvings, having shared them with the Church and the hunters in an apparent selfless effort to aid against the Scourge. With this carving on my skin, I can convert my blood into bullets.",
		action: [
			["bonus action", "Leaded Blood (10 Bullets/Cannonball)"],
		],
		toNotesPage: [{
			name: "Leaded Blood Eldritch Carving",
			note: [
				"\n**Scarified:** A creature that has a carving scarred on its flesh must succeed on a DC 29 Constitution saving throw. On a failure, it gains an indefinite madness, takes 25d10 force damage, and the carving isn’t scarified.",
				"\nYou can convert your blood into bullets. As a bonus action, you can sacrifice 3 hit points to generate 10 blood bullets or a blood cannonball. These function as their regular counterparts. You can only ever have 10 blood bullets or a blood cannonball present at once; any additional bullets or cannonballs you create immediately liquefy. The bullets last until they're used or until you finish a short or long rest.",
			]
		}],
	},
};
MagicItemsList["sacrificial brand"] = {
    name: "Sacrificial Brand",
    source: [["TW", 260]],
    type: "Eldritch Carving",
    rarity: "drawn: common, tattooed: uncommon, scarified: rare",
    attunement: true,
    description: "",
    descriptionFull: "",
	allowDuplicates: false,
	choices: ["Drawn", "Tattooed", "Scarified"],
	drawn: {
		name: "Drawn Sacrificial Brand",
		description:
			"During the three days of the Blood Moon, all evil-aligned creatures within Luyarnha gain advantage on Perception or Survival checks to locate me.",
		toNotesPage: [{
			name: "Sacrificial Brand Eldritch Carving",
			note: [
				"\n**Drawn:** A creature that has a carving drawn on its flesh must succeed on a DC 13 Constitution saving throw. On a failure, it gains a short-term madness, takes 2d10 force damage, and the carving isn’t drawn.",
			]
		}],
	},
	tattooed: {
		name: "Tattooed Sacrificial Brand",
		description:
			"During the three days of the Blood Moon, all evil-aligned creatures within Luyarnha gain advantage on Perception or Survival checks to locate me. If they are within 120 feet of me, they know my exact location and receive a +1 bonus to attack and damage rolls against me.",
		toNotesPage: [{
			name: "Sacrificial Brand Eldritch Carving",
			note: [
				"\n**Tattooed:* A creature that has a carving tattooed on its flesh must succeed on a DC 20 Constitution saving throw. On a failure, it gains a long-term madness, takes 10d10 force damage, and the carving isn’t tattooed.",
			]
		}],
	},
	scarified: {
		name: "Scarified Sacrificial Brand",
		description:
			"During the Blood Moon, I cannot be surprised, and all evil- aligned creatures within Luyarnha gain advantage on Perception or Survival checks to locate me. If they are within 300ft of me, they know my exact location and get +1d4 to attack/damage rolls against me and I bleed painfully from the carving.",
		toNotesPage: [{
			name: "Sacrificial Brand Eldritch Carving",
			note: [
				"\n**Scarified:** A creature that has a carving scarred on its flesh must succeed on a DC 29 Constitution saving throw. On a failure, it gains an indefinite madness, takes 25d10 force damage, and the carving isn’t scarified.",
			]
		}],
	},
};
MagicItemsList["lightning scion"] = {
    name: "Lightning Scion",
    source: [["TW", 262]],
    type: "Eldritch Carving",
    rarity: "drawn: uncommon, tattooed: rare, carved: very rare",
    attunement: true,
    description: "",
    descriptionFull: "",
	allowDuplicates: false,
	choices: ["Drawn", "Tattooed", "Scarified"],
	drawn: {
		name: "Drawn Lightning Scion",
		description:
			"This carving embodies the raw power that serves as the bedrock of the Scions, infusing me with the force of lightning. I gain resistance to lightning damage and can teleport up to 20 feet as a bonus action.",
		action: [
			["bonus action", "Lightning Scion"],
		],
		usages : [2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6],
		recovery : "long rest",
		dmgres: [
			"Lightning",
		],
		toNotesPage: [{
			name: "Lightning Scion Eldritch Carving",
			note: [
				"\n**Drawn:** A creature that has a carving drawn on its flesh must succeed on a DC 13 Constitution saving throw. On a failure, it gains a short-term madness, takes 2d10 force damage, and the carving isn’t drawn.",
				"\nYou gain resistance to lightning damage. In addition, as a bonus action, you can teleport up to 20 feet to an unoccupied space you can see. This carving can be used a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
			]
		}],
	},
	tattooed: {
		name: "Tattooed Lightning Scion",
		description:
			"This carving embodies the raw power that serves as the bedrock of the Scions, infusing me with the force of lightning. I gain resistance to lightning damage and can teleport up to 30 feet as a bonus action, and the next attack I make before the end of my next turn deals an extra 1d12 lightning damage.",
		action: [
			["bonus action", "Tattooed Lightning Scion"],
		],
		usages : [2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6],
		recovery : "long rest",
		dmgres: [
			"Lightning",
		],
		toNotesPage: [{
			name: "Lightning Scion Eldritch Carving",
			note: [
				"\n**Tattooed:* A creature that has a carving tattooed on its flesh must succeed on a DC 20 Constitution saving throw. On a failure, it gains a long-term madness, takes 10d10 force damage, and the carving isn’t tattooed.",
				"\nYou gain resistance to lightning damage. In addition, as a bonus action, you can teleport up to 30 feet to an unoccupied space you can see. After you teleport, your body becomes overcharged with electricity, and the next attack you make before the end of your next turn deals an extra 1d12 lightning damage on a hit. This carving can be used a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
			]
		}],
	},
	scarified: {
		name: "Scarified Lightning Scion",
		description:
			"This carving infuses me with the force of lightning. I gain immunity to lightning damage and can teleport up to 60 feet as a bonus action. When I do so, my next attack deals an extra 2d12 lightning damage. Once per long rest, I can also cast *create undead* without expending a spell slot.",
		action: [
			["bonus action", "Scarified Lightning Scion"],
		],
		usages : [4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8],
		recovery : "long rest",
		savetxt: {
			immune: ["Lightning"],
		},
		extraLimitedFeatures: [{
			name : "Create Undead",
			usages : 1,
			recovery : "long rest",
		}],
		spellcastingBonus: [{
			name : "Scarified Lightning Scion",
			selection: ["create undead"],
			firstCol : "oncelr",
		}],
		toNotesPage: [{
			name: "Lightning Scion Eldritch Carving",
			note: [
				"\n**Scarified:** A creature that has a carving scarred on its flesh must succeed on a DC 29 Constitution saving throw. On a failure, it gains an indefinite madness, takes 25d10 force damage, and the carving isn’t scarified.",
				"\nYou gain immunity to lightning damage. In addition, as a bonus action, you can teleport up to 60 feet to an unoccupied space you can see. After you teleport, your body becomes overcharged with electricity, and the next attack you make before the end of your next turn deals an extra 2d12 lightning damage on a hit. This carving can be used a number of times equal to 2 + your proficiency bonus, and you regain all expended uses when you finish a long rest.",
				" \u2022 Additionally, you can use the rampaging electricity that courses through you to cast the create undead spell without expending a spell slot or material components. Once you use this carving to cast this spell, you can’t do so again until you finish a long rest.",
			]
		}],
	},
};
MagicItemsList["nawre’s blessing (uninfected)"] = {
    name: "Nawre’s Blessing (Uninfected)",
    source: [["TW", 263]],
    type: "Eldritch Carving",
    rarity: "drawn: rare, tattooed: very rare, scarified: legendary",
    attunement: true,
    description: "",
    descriptionFull: "",
	allowDuplicates: false,
	prerequisite: "Cannot be infected with cordyceps sinensis.",
    prereqeval: function(v) {
		for (var i = 0; i < CurrentMagicItems.known.length; i++) {
			if (CurrentMagicItems.known[i].indexOf("cordyceps sinensis (infection)") !== -1) {
				return false;
			}
		}
        return true;
    },
	choices: ["Drawn", "Tattooed", "Scarified"],
	drawn: {
		name: "Drawn Nawre’s Blessing",
		description:
			"I start grasping the depth of the eldritch truth. If my body is not infected with the *cordyceps sinensis*, I gain a 1d4 bonus to any Arcana, Insight, or Religion checks I make.",
		toNotesPage: [{
			name: "Nawre’s Blessing Eldritch Carving",
			note: [
				"\n**Drawn:** A creature that has a carving drawn on its flesh must succeed on a DC 13 Constitution saving throw. On a failure, it gains a short-term madness, takes 2d10 force damage, and the carving isn’t drawn.",
			]
		}],
	},
	tattooed: {
		name: "Tattooed Nawre’s Blessing",
		description:
			"My mind gazes deep into the revelations of the void. If I am not infected with the *cordyceps sinensis*, I gain +1d8 to any Arcana, Insight, or Religion checks I make. In addition, I gain +1d4 to all Wisdom, Intelligence and Charisma saving throws I make, or +1d8 on saving throws against madness.",
		toNotesPage: [{
			name: "Nawre’s Blessing Eldritch Carving",
			note: [
				"\n**Tattooed:* A creature that has a carving tattooed on its flesh must succeed on a DC 20 Constitution saving throw. On a failure, it gains a long-term madness, takes 10d10 force damage, and the carving isn’t tattooed.",
				"\nIf your body is not infected with the cordyceps sinensis, you gain a 1d8 bonus to any Intelligence (Arcana), Wisdom (Insight), or Intelligence (Religion) checks you make. In addition, you gain a 1d4 bonus to all Wisdom, Intelligence and Charisma saving throws you make. This bonus increases to 1d8 on saving throws against madness.",
			]
		}],
	},
	scarified: {
		name: "Scarified Nawre’s Blessing",
		description:
			"I become one with the eldritch truth. I die.",
		toNotesPage: [{
			name: "Nawre’s Blessing Eldritch Carving",
			note: [
				"\n**Scarified:** A creature that has a carving scarred on its flesh must succeed on a DC 29 Constitution saving throw. On a failure, it gains an indefinite madness, takes 25d10 force damage, and the carving isn’t scarified.",
			]
		}],
	},
};
MagicItemsList["nawre’s blessing"] = {
    name: "Nawre’s Blessing",
    source: [["TW", 263]],
    type: "Eldritch Carving",
    rarity: "drawn: rare, tattooed: very rare, scarified: legendary",
    attunement: true,
    description: "",
    descriptionFull: "",
	allowDuplicates: false,
	prerequisite: "Requires infection by cordyceps sinensis.",
	prereqeval: function(v) {
		for (var i = 0; i < CurrentMagicItems.known.length; i++) {
			if (CurrentMagicItems.known[i].indexOf("cordyceps sinensis (infection)") !== -1) {
				return true;
			}
		}
        return false;
    },
	choices: ["Drawn", "Tattooed", "Scarified"],
	drawn: {
		name: "Drawn Nawre’s Blessing",
		description:
			"My symbiotic relationship with *cordyceps sinensis* begins. I learn two Warlock cantrips of my choice.",
		spellcastingBonus: [{
			name : "Nawre’s Blessing",
			times : 2,
			'class': "warlock",
			level: [0, 0],
			spellcastingAbility: [4, 5, 6],
		}],
		toNotesPage: [{
			name: "Nawre’s Blessing Eldritch Carving",
			note: [
				"\n**Drawn:** A creature that has a carving drawn on its flesh must succeed on a DC 13 Constitution saving throw. On a failure, it gains a short-term madness, takes 2d10 force damage, and the carving isn’t drawn.",
				"If your body is infected with the cordyceps sinensis, your symbiotic relationship with the fungus begins. You learn 2 warlock cantrips of your choice, using Intelligence, Charisma, or Wisdom (choose one when you first receive this carving) as your spellcasting ability for these spells.",
			]
		}],
	},
	tattooed: {
		name: "Tattooed Nawre’s Blessing",
		description:
			"My symbiotic relationship with *cordyceps sinensis* begins. I learn two Warlock cantrips of my choice and a warlock invocation that I meet the prerequisites for (using my character level in place of a warlock class level requirement).",
		spellcastingBonus: [{
			name : "Nawre’s Blessing",
			times : 2,
			'class': "warlock",
			level: [0, 0],
			spellcastingAbility: [4, 5, 6],
		}],
		bonusClassExtrachoices : [{
			"class" : "warlock",
			feature : "eldritch invocations",
			bonus : 1
		}],
		toNotesPage: [{
			name: "Nawre’s Blessing Eldritch Carving",
			note: [
				"\n**Tattooed:* A creature that has a carving tattooed on its flesh must succeed on a DC 20 Constitution saving throw. On a failure, it gains a long-term madness, takes 10d10 force damage, and the carving isn’t tattooed.",
				"\nIf your body is infected with the cordyceps sinensis, your symbiotic relationship with the fungus begins. You learn 2 warlock cantrips of your choice, using Intelligence, Charisma, or Wisdom (choose one when you first receive this carving) as your spellcasting ability for these spells. In addition, you learn a warlock invocation of your choice for which you meet the prerequisites (you can treat invocations that require a certain warlock level as if they instead require a certain character level). When you gain a level, you can replace this invocation with another that you meet the prerequisites for.",
			]
		}],
	},
	scarified: {
		name: "Scarified Nawre’s Blessing",
		description:
			"I die, and the *cordyceps sinensis* infection resurrects me. It closes all wounds, neutralizes any poison, cures all diseases, and lifts any curses that were affecting me. The fungus replaces damaged or missing organs or limbs. I learn two Warlock cantrips and a warlock invocation and slowly regenerate when I reach 0 HP.",
		spellcastingBonus: [{
			name : "Nawre’s Blessing",
			times : 2,
			'class': "warlock",
			level: [0, 0],
			spellcastingAbility: [4, 5, 6],
		}],
		bonusClassExtrachoices : [{
			"class" : "warlock",
			feature : "eldritch invocations",
			bonus : 1
		}],
		toNotesPage: [{
			name: "Nawre’s Blessing Eldritch Carving",
			note: [
				"\n**Scarified:** A creature that has a carving scarred on its flesh must succeed on a DC 29 Constitution saving throw. On a failure, it gains an indefinite madness, takes 25d10 force damage, and the carving isn’t scarified.",
				"\nYou become one with the eldritch truth. You die. If your body is infected with the *cordyceps sinensis*, it wipes this understanding away from your brain, and if you were not dead for longer than 100 years, you come back to life over the course of an hour. The carving closes all wounds, neutralizes any poison, cures all diseases, and lifts any curses that were affecting you when you died. The fungus replaces damaged or missing organs or limbs. The more tissue you were missing, the more fungic your appearance. In addition, you gain the following benefits:", 
				" \u2022 You learn 2 warlock cantrips of your choice, using Intelligence, Charisma, or Wisdom (choose one when you first receive this carving) as your spellcasting ability for these spells. In addition, you learn a warlock invocation of your choice for which you meet the prerequisites (you can treat invocations that require a certain warlock level as if they instead require a certain character level). When you gain a level, you can replace this invocation with another that you meet the prerequisites for.",
				" \u2022 If you are reduced to 0 hit points, you do not fall unconscious. You still make death saving throws and can be stabilized as normal. If you are stable for 1 minute, you regain 1 hit point.",
				" \u2022 If you die and haven’t taken fire or radiant damage within the last minute, you come back to life with 1 hit point after an hour. If you are exposed to fire or radiant damage during that period, you do not resurrect.",
			]
		}],
	},
};
MagicItemsList["mephitic seal"] = {
    name: "Mephitic Seal",
    source: [["TW", 264]],
    type: "Eldritch Carving",
    rarity: "drawn: uncommon, tattooed: rare, carved: very rare",
    attunement: true,
    description: "",
    descriptionFull: "",
	allowDuplicates: false,
	choices: ["Drawn", "Tattooed", "Scarified"],
	drawn: {
		name: "Drawn Mephitic Seal",
		description:
			"This intricate carving is a rotten word, nauseating to those who hear it and causing plagues upon the world. I can use it to conjure a Miasma of Death as an action (see notes).",
		action: [
			["action", "Miasma of Death"],
			["bonus action", "Duration Miasma (Move)"],
		],
		usages : 2,
		recovery : "long rest",
		toNotesPage: [{
			name: "Mephitic Seal Eldritch Carving",
			note: [
				"\n**Drawn:** A creature that has a carving drawn on its flesh must succeed on a DC 13 Constitution saving throw. On a failure, it gains a short-term madness, takes 2d10 force damage, and the carving isn’t drawn.",
				"\n**Miasma of Death:** As an action, you can conjure a toxic miasma in a 15-foot-radius sphere at a point you can see within 30 feet of you. The sphere spreads around corners. The miasma remains there until the end of your next turn. Each creature that is completely within the miasma at the start of its turn must make a DC 18 Constitution saving throw, taking a number of d6s of poison damage equal to your proficiency bonus and becoming poisoned for the duration of the miasma on a failed save. A poisoned creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. You can use this carving twice, and you regain all expended uses when you finish a long rest.",
				"When you summon the miasma, it gains your choice of 1 property from the following list of options:",
				" \u2022 *Obfuscation*: The area becomes heavily obscured.",
				" \u2022 *Immunity*: You are immune to and ignore the effects of the miasma.",
				" \u2022 *Duration*: The miasma lasts for 1 minute or until a wind of moderate or greater speed (at least 10 miles per hour) disperses it. You can move the miasma up to 10 feet as a bonus action on each of your turns.",
				" \u2022 *Radius*: The radius increases to 25 feet.",
				" \u2022 *Virulent*: The damage dice become d12s instead of d6s.",
				" \u2022 *Lingering*: On a successful save, a creature takes half as much damage and isn't poisoned.",
			]
		}],
	},
	tattooed: {
		name: "Tattooed Mephitic Seal",
		description:
			"This intricate carving is a rotten word, nauseating to those who hear it and causing plagues upon the world. I can use it to conjure a Miasma of Death as an action (see notes).",
		action: [
			["action", "Miasma of Death"],
			["bonus action", "Duration Miasma (Move)"],
		],
		usages : [2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6],
		recovery : "long rest",
		toNotesPage: [{
			name: "Mephitic Seal Eldritch Carving",
			note: [
				"\n**Tattooed:* A creature that has a carving tattooed on its flesh must succeed on a DC 20 Constitution saving throw. On a failure, it gains a long-term madness, takes 10d10 force damage, and the carving isn’t tattooed.",
				"\n**Miasma of Death:** As an action, you can conjure a toxic miasma in a 15-foot-radius sphere at a point you can see within 30 feet of you. The sphere spreads around corners. The miasma remains there until the end of your next turn. Each creature that is completely within the miasma at the start of its turn must make a DC 18 Constitution saving throw, taking a number of d6s of poison damage equal to your proficiency bonus and becoming poisoned for the duration of the miasma on a failed save. A poisoned creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. You can use this carving twice, and you regain all expended uses when you finish a long rest.",
				"When you summon the miasma, it gains your choice of 2 properties from the following list of options:",
				" \u2022 *Obfuscation*: The area becomes heavily obscured.",
				" \u2022 *Immunity*: You are immune to and ignore the effects of the miasma.",
				" \u2022 *Duration*: The miasma lasts for 1 minute or until a wind of moderate or greater speed (at least 10 miles per hour) disperses it. You can move the miasma up to 10 feet as a bonus action on each of your turns.",
				" \u2022 *Radius*: The radius increases to 25 feet.",
				" \u2022 *Virulent*: The damage dice become d12s instead of d6s.",
				" \u2022 *Lingering*: On a successful save, a creature takes half as much damage and isn't poisoned.",
				" \u2022 *Corrosion*: The miasma deals an extra number of d4s of acid damage equal to your proficiency bonus on a failed save. Creatures that fail the saving throw by 5 or more are blinded until the end of your next turn.",
				" \u2022 *Destruction*: You can cause the miasma to exude a corrosive substance that can eat through 1-inch- thick nonmagical wood, metal, or stone each round. If you do so, the miasma ignores resistance and immunity to poison damage and the poisoned condition, and constructs have disadvantage on the saving throw.",
			]
		}],
	},
	scarified: {
		name: "Scarified Mephitic Seal",
		description:
			"This intricate carving is a rotten word, nauseating to those who hear it and causing plagues upon the world. I can use it to conjure a Miasma of Death as an action (see notes).",
		action: [
			["action", "Miasma of Death"],
			["bonus action", "Duration Miasma (Move)"],
		],
		usages : [2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6],
		recovery : "long rest",
		toNotesPage: [{
			name: "Mephitic Seal Eldritch Carving",
			note: [
				"\n**Scarified:** A creature that has a carving scarred on its flesh must succeed on a DC 29 Constitution saving throw. On a failure, it gains an indefinite madness, takes 25d10 force damage, and the carving isn’t scarified.",
				"\n**Miasma of Death:** As an action, you can conjure a toxic miasma in a 15-foot-radius sphere at a point you can see within 30 feet of you. The sphere spreads around corners. The miasma remains there until the end of your next turn. Each creature that is completely within the miasma at the start of its turn must make a DC 18 Constitution saving throw, taking a number of d6s of poison damage equal to your proficiency bonus and becoming poisoned for the duration of the miasma on a failed save. A poisoned creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. You can use this carving twice, and you regain all expended uses when you finish a long rest.",
				"When you summon the miasma, it gains your choice of 4 properties from the following list of options:",
				" \u2022 *Obfuscation*: The area becomes heavily obscured.",
				" \u2022 *Immunity*: You are immune to and ignore the effects of the miasma.",
				" \u2022 *Duration*: The miasma lasts for 1 minute or until a wind of moderate or greater speed (at least 10 miles per hour) disperses it. You can move the miasma up to 30 feet as a bonus action on each of your turns.",
				" \u2022 *Radius*: The radius increases to 25 feet.",
				" \u2022 *Virulent*: The damage dice become d12s instead of d6s.",
				" \u2022 *Lingering*: On a successful save, a creature takes half as much damage and isn't poisoned.",
				" \u2022 *Corrosion*: The miasma deals an extra number of d4s of acid damage equal to your proficiency bonus on a failed save. Creatures that fail the saving throw by 5 or more are blinded until the end of your next turn.",
				" \u2022 *Destruction*: You can cause the miasma to exude a corrosive substance that can eat through 1-inch- thick nonmagical wood, metal, or stone each round. If you do so, the miasma ignores resistance and immunity to poison damage and the poisoned condition, and constructs have disadvantage on the saving throw.",
				" \u2022 *Protection*: When you summon the miasma, you can choose a number of creatures other than yourself equal to your proficiency bonus; they are immune to the effects of the miasma. You must concentrate on this carving as you would concentrate on a spell.", 
				" \u2022 *Hallucinatory Toxins*: You turn your miasma into powerful hallucinogens, changing its damage type from poison to psychic. The saving throw becomes an Intelligence saving throw instead. Any other property of the miasma that inflicts poison damage instead inflicts psychic damage. You cannot use the Destruction property alongside this one.",
			]
		}],
	},
};
MagicItemsList["third carving"] = {
    name: "Third Carving",
    source: [["TW", 265]],
    type: "Eldritch Carving",
    rarity: "drawn: rare, tattooed: very rare, scarified: legendary",
    attunement: true,
    description: "",
    descriptionFull: "",
	allowDuplicates: false,
	choices: ["Drawn", "Tattooed", "Scarified"],
	drawn: {
		name: "Drawn Third Carving",
		description:
			"When I roll initiative, I can choose to let the carving consume me for 1 minute, gaining Wings of Judgment which give me a flying speed of 30 feet that I can only use to move toward a hostile creature, and a Seraphic Blade.",
		usages : 1,
		recovery : "long rest",
		weaponsAdd: {
			select: ["Seraphic Blade"],
		},
		weaponOptions : [{
			name: "Seraphic Blade",
			source: [
				["TW", 265]
			],
			regExpSearch: /^(?=.*seraphic)(?=.*blade).*$/i,
			type: "Martial",
			ability: 1,
			abilitytodamage: true,
			damage: [1, 6, "fire"],
			range: "Melee",
			description: "Finesse, +1d6 psychic damage;",
			list: "melee",
			weight: 2,
			monkweapon: true,
			isMagicWeapon: true,
		}],
		toNotesPage: [{
			name: "Third Carving Eldritch Carving",
			note: [
				"\n**Drawn:** A creature that has a carving drawn on its flesh must succeed on a DC 13 Constitution saving throw. On a failure, it gains a short-term madness, takes 2d10 force damage, and the carving isn’t drawn.",
				"\nWhen you roll initiative, you can choose to let the carving consume you for 1 minute (no action required). You gain the following benefits:",
				" \u2022 *Wings of Judgement*: Wings sprout on your back, granting you a flying speed of 30 feet. You can only use this speed to move towards a hostile creature that you can see.",
				" \u2022 *Seraphic Blade*: A blade of eldritch—or perhaps divine—energy appears in your hand. This blade is a magic weapon that has the finesse property and deals 1d6 fire and 1d6 psychic damage on a hit.",
				"Once you use this carving, you can’t do so again until you finish a long rest.",
			]
		}],
	},
	tattooed: {
		name: "Tattooed Third Carving",
		description:
			"When I roll initiative, I can choose to let the carving consume me for 1 minute, gaining Wings of Judgment which give me a flying speed of 60 feet that I can only use to move toward a hostile creature, and a Seraphic Blade. I can enact Righteous Punishment as a reaction against those who would attack me.",
		usages : 1,
		recovery : "long rest",
		action: [
			["reaction", "Righteous Punishment"],
		],
		extraLimitedFeatures: [{
			name : "Righteous Punishment (Stun)",
			usages : 1,
			recovery : "long rest",
		}],
		weaponsAdd: {
			select: ["Seraphic Blade"],
		},
		weaponOptions : [{
			name: "Seraphic Blade",
			source: [
				["TW", 265]
			],
			regExpSearch: /^(?=.*seraphic)(?=.*blade).*$/i,
			type: "Martial",
			ability: 1,
			abilitytodamage: true,
			damage: [1, 8, "fire"],
			range: "Melee, 60/120 ft",
			description: "Finesse, Thrown (returns), +1d8 psychic damage; Alt: fuse w/ nonmagical weap. (+1 to atk/dmg, +1d6 fire & psychic dmg);",
			list: "melee",
			weight: 2,
			monkweapon: true,
			isMagicWeapon: true,
		}],
		toNotesPage: [{
			name: "Third Carving Eldritch Carving",
			note: [
				"\n**Tattooed:* A creature that has a carving tattooed on its flesh must succeed on a DC 20 Constitution saving throw. On a failure, it gains a long-term madness, takes 10d10 force damage, and the carving isn’t tattooed.",
				"\nWhen you roll initiative, you can choose to let the carving consume you for 1 minute (no action required). You gain the following benefits:",
				" \u2022 *Wings of Judgement*: Wings sprout on your back, granting you a flying speed of 60 feet. You can only use this speed to move towards a hostile creature that you can see.",
				" \u2022 *Righteous Punishment*: Creatures that raise their hand against you—a chosen one—must be punished. When you take damage from a creature you can see within 120 feet, you can use your reaction to emit a psychic shockwave in its direction. The attacking creature must make an Intelligence saving throw (DC = 8 + your proficiency bonus + your Constitution modifier). On a failed save, it takes psychic damage equal to your character level. On a success, it takes half as much damage. As part of the same reaction, you can cause a creature that failed its saving throw to be stunned until the end of your next turn. Once you stun a creature in this way, you can’t do so again until you finish a long rest.",
				" \u2022 *Seraphic Blade*: A blade of eldritch—or perhaps divine—energy appears in your hand. This blade is a magic weapon that has the finesse and thrown (range 60/120) properties, and it deals 1d8 fire and 1d8 psychic damage on a hit. Each time you throw the blade, it flies back to your hand after the attack.",
				"Alternatively, you can cause the blade to fuse with a nonmagical weapon you are holding. If you do so, for the duration, you gain a +1 bonus to attack and damage rolls made with it, and you deal an extra 1d6 fire and 1d6 psychic damage on a hit.",
				"Once you use this carving, you can’t do so again until you finish a long rest.",
			]
		}],
	},
	scarified: {
		name: "Scarified Third Carving",
		description:
			"I permanently gain the benefits of the Third Carving, gaining Wings of Judgment which give me a flying speed of 60 feet that I can only use to move toward a hostile creature, and a Seraphic Blade. I can enact Righteous Punishment as a reaction against those who would attack me.",
		action: [
			["reaction", "Righteous Punishment"],
		],
		extraLimitedFeatures: [{
			name : "Righteous Punishment (Stun)",
			usages : 1,
			recovery : "1 min",
		}],
		weaponsAdd: {
			select: ["Seraphic Blade"],
		},
		weaponOptions : [{
			name: "Seraphic Blade",
			source: [
				["TW", 265]
			],
			regExpSearch: /^(?=.*seraphic)(?=.*blade).*$/i,
			type: "Martial",
			ability: 1,
			abilitytodamage: true,
			damage: [1, 8, "fire"],
			range: "Melee, 60/120 ft",
			description: "Finesse, Thrown (returns), +1d8 psychic damage; Alt: fuse w/ other weap. (+1 to atk/dmg, +1d6 fire & psychic dmg);",
			list: "melee",
			weight: 2,
			monkweapon: true,
			isMagicWeapon: true,
		}],
		toNotesPage: [{
			name: "Third Carving Eldritch Carving",
			note: [
				"\n**Scarified:** A creature that has a carving scarred on its flesh must succeed on a DC 29 Constitution saving throw. On a failure, it gains an indefinite madness, takes 25d10 force damage, and the carving isn’t scarified.",
				"\nYou permanently gain the following benefits:",
				" \u2022 *Wings of Judgement*: Wings sprout on your back, granting you a flying speed of 60 feet. You can only use this speed to move towards a hostile creature that you can see.",
				" \u2022 *Righteous Punishment*: Creatures that raise their hand against you—a chosen one—must be punished. When you take damage from a creature you can see within 120 feet, you can use your reaction to emit a psychic shockwave in its direction. The attacking creature must make an Intelligence saving throw (DC = 8 + your proficiency bonus + your Constitution modifier). On a failed save, it takes psychic damage equal to your character level. On a success, it takes half as much damage. As part of the same reaction, you can cause a creature that failed its saving throw to be stunned until the end of your next turn. When you stun a creature in this way, you can do so again after 1 minute.",
				" \u2022 *Seraphic Blade*: A blade of eldritch—or perhaps divine—energy appears in your hand. This blade is a magic weapon that has the finesse and thrown (range 60/120) properties, and it deals 1d8 fire and 1d8 psychic damage on a hit. Each time you throw the blade, it flies back to your hand after the attack.",
				"Alternatively, you can cause the blade to fuse with a magical or nonmagical weapon you are holding. If you do so, you gain a +1 bonus to attack and damage rolls made with it, and you deal an extra 1d6 fire and 1d6 psychic damage on a hit.",
			]
		}],
	},
};
MagicItemsList["second carving"] = {
    name: "Second Carving",
    source: [["TW", 266]],
    type: "Eldritch Carving",
    rarity: "drawn: rare, tattooed: very rare, scarified: legendary",
    attunement: true,
    description: "",
    descriptionFull: "",
	allowDuplicates: false,
	choices: ["Drawn", "Tattooed", "Scarified"],
	drawn: {
		name: "Drawn Second Carving",
		description:
			"I understand Celestial and Deep Speech, and I am imbued with righteous power and gain the ability to cast three decrees using Constitution or Wisdom as my spellcasting modifier, whichever is higher. I can cast each decree once per long rest and only require the verbal component of the spell.",
		languageProfs: ["Celestial", "Deep Speech"],
		spellcastingBonus: [{
			name: "King's Decrees",
			times: 3,
			selection: ["command", "bless", "healing word"],
			firstCol: "oncelr",
			spellcastingAbility : [3, 5],
			magicItemComponents: false,
		}],
		spellChanges: {
			"command": {
				changes: "I can only use the 'grovel' command.",
			},	
			"bless": {
				changes: "Affected targets can reroll a 1 on the d4 (must use the new roll), and take 1d4 necrotic damage (cannot be reduced) at the start of their turns.",
			},	
			"healing word": {
				changes: "Until end of target's next turn, they get +1 to attack and damage rolls, but each time it takes damage, it takes an extra 1d4 damage of the same type.",
			},
		},
		extraLimitedFeatures: [
			{
			name : "Decree of Obedience",
			usages : 1,
			recovery : "long rest",
		},	{
			name : "Decree of Power",
			usages : 1,
			recovery : "long rest",
		},	{
			name : "Decree of Blood",
			usages : 1,
			recovery : "long rest",
		}],
		toNotesPage: [{
			name: "Second Carving Eldritch Carving",
			note: [
				"\n**Drawn:** A creature that has a carving drawn on its flesh must succeed on a DC 13 Constitution saving throw. On a failure, it gains a short-term madness, takes 2d10 force damage, and the carving isn’t drawn.",
				"\nYou understand Celestial and Deep Speech. Further, you are imbued with righteous power and gain the ability to cast spells. Constitution or Wisdom is your spellcasting modifier for these spells, whichever is higher. You can use each of the following decrees once, and you regain all expended uses when you finish a long rest. Each decree only requires the verbal component of the spell.",
				"\n**King’s Decrees:**",
				" \u2022 *Decree of Obedience*: You force the heretic to kneel and worship. You can cast the *command* spell, using only the grovel command.",
				" \u2022 *Decree of Power*: You unleash destructive might. You can cast the *bless* spell on willing creatures. When a creature rolls a 1 on the d4 as part of this spell, it can reroll the die and must use the new roll, even if the new roll is a 1. Creatures under the effect of the spell also take 1d4 necrotic damage (which cannot be reduced) at the start of each of their turns.",
				" \u2022 *Decree of Blood*: You harangue your soldiers to endure. You can cast the *healing word* spell on a willing creature. Until the end of the target’s next turn, it gains a +1 bonus to attack and damage rolls, but each time it takes damage, it takes an extra 1d4 damage of the same type.",
			]
		}],
	},
	tattooed: {
		name: "Tattooed Second Carving",
		description:
			"I can speak Celestial and Deep Speech, and I am imbued with righteous power and gain the ability to cast three decrees. Aegis of the Almighty grants me resistance to radiant damage and the ability to share that resistance with another creature for 24 hours, so long as they are within 10 feet of me.",
		languageProfs: ["Celestial", "Deep Speech"],
		dmgres: [
			"Radiant",
		],
		spellcastingBonus: [{
			name: "King's Decrees",
			times: 3,
			selection: ["command", "bless", "healing word"],
			firstCol: "oncelr",
			spellcastingAbility : [3, 5],
			magicItemComponents: false,
		}],
		spellChanges: {
			"command": {
				changes: "I can only use the 'grovel' command.",
			},	
			"bless": {
				changes: "Affected targets can reroll a 1 on the d4 (must use the new roll), and take 1d4 necrotic damage (cannot be reduced) at the start of their turns.",
			},	
			"healing word": {
				changes: "Until end of target's next turn, they get +1 to attack and damage rolls, but each time it takes damage, it takes an extra 1d4 damage of the same type.",
			},
		},
		extraLimitedFeatures: [
			{
			name : "Decree of Obedience",
			usages : 1,
			usagescalc: "event.value = Math.max(What('Con Mod'), What('Wis Mod'));",
			recovery : "long rest",
		},	{
			name : "Decree of Power",
			usages : 1,
			usagescalc: "event.value = Math.max(What('Con Mod'), What('Wis Mod'));",
			recovery : "long rest",
		},	{
			name : "Decree of Blood",
			usages : 1,
			usagescalc: "event.value = Math.max(What('Con Mod'), What('Wis Mod'));",
			recovery : "long rest",
		}],
		toNotesPage: [{
			name: "Second Carving Eldritch Carving",
			note: [
				"\n**Tattooed:* A creature that has a carving tattooed on its flesh must succeed on a DC 20 Constitution saving throw. On a failure, it gains a long-term madness, takes 10d10 force damage, and the carving isn’t tattooed.",
				"\nYou can speak Celestial and Deep Speech. Further, you are imbued with righteous power and gain the ability to cast spells. Constitution or Wisdom is your spellcasting modifier for these spells, whichever is higher. You can use each of the following decrees a number of times equal to your Constitution or Wisdom modifier, whichever is higher, and you regain all expended uses when you finish a long rest. Each decree only requires the verbal component of the spell.",
				"\n**King’s Decrees:**",
				" \u2022 *Decree of Obedience*: You force the heretic to kneel and worship. You can cast the *command* spell, using only the grovel command.",
				" \u2022 *Decree of Power*: You unleash destructive might. You can cast the *bless* spell on willing creatures. When a creature rolls a 1 on the d4 as part of this spell, it can reroll the die and must use the new roll, even if the new roll is a 1. Creatures under the effect of the spell also take 1d4 necrotic damage (which cannot be reduced) at the start of each of their turns.",
				" \u2022 *Decree of Blood*: You harangue your soldiers to endure. You can cast the *healing word* spell on a willing creature. Until the end of the target’s next turn, it gains a +1 bonus to attack and damage rolls, but each time it takes damage, it takes an extra 1d4 damage of the same type.",
				"\n**Aegis of the Almighty:** You gain resistance to radiant damage. Each day at dawn, you can choose one creature that you can see. For the next 24 hours, it has resistance to radiant damage as long as it remains within 10 feet of you and you are conscious.",
			]
		}],
	},
	scarified: {
		name: "Scarified Second Carving",
		description:
			"I can speak Celestial and Deep Speech, and I am imbued with righteous power and gain the ability to cast three decrees as well as amplified versions of each decree. Aegis of the Almighty grants me and friendly creatures within 15 feet of me resistance to radiant damage.",
		languageProfs: ["Celestial", "Deep Speech"],
		dmgres: [
			"Radiant",
		],
		spellcastingBonus: [{
			name: "King's Decrees",
			times: 3,
			selection: ["command", "bless", "healing word"],
			firstCol: "oncelr",
			spellcastingAbility : [3, 5],
			magicItemComponents: false,
		}],
		spellChanges: {
			"command": {
				changes: "I can only use the 'grovel' command.",
			},	
			"bless": {
				changes: "Affected targets can reroll a 1 on the d4 (must use the new roll), and take 1d4 necrotic damage (cannot be reduced) at the start of their turns.",
			},	
			"healing word": {
				changes: "Until end of target's next turn, they get +1 to attack and damage rolls, but each time it takes damage, it takes an extra 1d4 damage of the same type.",
			},
		},
		extraLimitedFeatures: [
			{
			name : "Decree of Obedience",
			usages : 1,
			usagescalc: "event.value = Math.max(What('Con Mod'), What('Wis Mod'));",
			recovery : "long rest",
		},	{
			name : "Decree of Power",
			usages : 1,
			usagescalc: "event.value = Math.max(What('Con Mod'), What('Wis Mod'));",
			recovery : "long rest",
		},	{
			name : "Decree of Blood",
			usages : 1,
			usagescalc: "event.value = Math.max(What('Con Mod'), What('Wis Mod'));",
			recovery : "long rest",
		}],
		toNotesPage: [{
			name: "Second Carving Eldritch Carving",
			note: [
				"\n**Scarified:** A creature that has a carving scarred on its flesh must succeed on a DC 29 Constitution saving throw. On a failure, it gains an indefinite madness, takes 25d10 force damage, and the carving isn’t scarified.",
				"\nYou can speak Celestial and Deep Speech. Further, you are imbued with righteous power and gain the ability to cast spells. Constitution or Wisdom is your spellcasting modifier for these spells, whichever is higher. You can use each of the following decrees a number of times equal to your Constitution or Wisdom modifier, whichever is higher, and you regain all expended uses when you finish a long rest. Each decree only requires the verbal component of the spell.",
				"\n**King’s Decrees:**",
				" \u2022 *Decree of Obedience*: You force the heretic to kneel and worship. You can cast the *command* spell, using only the grovel command.",
				" \u2022 *Decree of Power*: You unleash destructive might. You can cast the *bless* spell on willing creatures. When a creature rolls a 1 on the d4 as part of this spell, it can reroll the die and must use the new roll, even if the new roll is a 1. Creatures under the effect of the spell also take 1d4 necrotic damage (which cannot be reduced) at the start of each of their turns.",
				" \u2022 *Decree of Blood*: You harangue your soldiers to endure. You can cast the *healing word* spell on a willing creature. Until the end of the target’s next turn, it gains a +1 bonus to attack and damage rolls, but each time it takes damage, it takes an extra 1d4 damage of the same type.",
				"\n**Improved King’s Decrees (cost two uses):**",
				" \u2022 *Improved Decree of Obedience*: When you cast *command* with this decree, you can target a number of creatures of your choice you can see within range equal to your Constitution or Wisdom modifier, whichever is higher.",
				" \u2022 *Improved Decree of Power*: When you cast *bless* with this decree, creatures under the effect of the spell gain an additional action on each of their turns. That action can be used only to take the Attack (one weapon attack only), Dash, Disengage, Hide, or Use an Object action. The damage they take at the start of their turn increases to 2d4.",
				" \u2022 *Improved Decree of Blood*: When you cast *healing word* with this decree, it is cast at 7th level. Until the end of the target’s next turn, it gains a +3 bonus to attack and damage rolls, but each time it takes damage, it takes an extra 2d4 damage of the same type.",
				"\n**Aegis of the Almighty:** You gain resistance to radiant damage. Friendly creatures of your choice within 15 feet of you have resistance to radiant damage while you are conscious.",
			]
		}],
	},
};
MagicItemsList["first carving"] = {
    name: "First Carving",
    source: [["TW", 266]],
    type: "Eldritch Carving",
    rarity: "drawn: rare, tattooed: very rare, scarified: legendary",
    attunement: true,
    description: "",
    descriptionFull: "",
	allowDuplicates: false,
	choices: ["Drawn", "Tattooed", "Scarified"],
	drawn: {
		name: "Drawn First Carving",
		description:
			"At the end of a long rest, I gain the effect of a *sanctuary* spell that lasts until the start of my next long rest (the spell can end early as normal). As a reaction, I can use Wings of Salvation to pull an ally out of danger.",
		action: [
			["reaction", "Wings of Salvation"],
		],
		extraLimitedFeatures: [{
			name : "Wings of Salvation",
			usages : 1,
			recovery : "long rest",
		}],
		spellcastingBonus: [{
			name: "First Carving",
			selection: ["sanctuary"],
			firstCol: "oncelr",
			spellcastingAbility : [3, 5],
			magicItemComponents: false,
		}],
		toNotesPage: [{
			name: "First Carving Eldritch Carving",
			note: [
				"\n**Drawn:** A creature that has a carving drawn on its flesh must succeed on a DC 13 Constitution saving throw. On a failure, it gains a short-term madness, takes 2d10 force damage, and the carving isn’t drawn.",
				"\nAt the end of a long rest, you gain the effect of a *sanctuary* spell that lasts until the start of your next long rest (the spell can end early as normal). The saving throw DC for the spell equals 8 + your Constitution or Wisdom modifier (whichever is higher) + your proficiency bonus.",
				"\n**Wings of Salvation:** In addition, when a willing creature you can see within 60 feet of you is targeted by an attack roll or forced to make a saving throw, you can use your reaction to give them wings to fly out of danger. A pair of angelic wings sprout on their back, which carries them in a straight line to you, where they land in an unoccupied space next to you. This can potentially cause the harmful effect to miss if the creature leaves the range of the effect. The wings then vanish. Once you use this property, you can’t do so again until you finish a long rest.",
			]
		}],
	},
	tattooed: {
		name: "Tattooed First Carving",
		description:
			"At the end of a long rest, I gain the effect of a *sanctuary* spell that lasts until the start of my next long rest (the spell can end early as normal), and I gain the effect of a *death ward* spell. As a reaction, I can use Wings of Salvation to pull an ally out of danger.",
		action: [
			["reaction", "Wings of Salvation"],
		],
		extraLimitedFeatures: [{
			name : "Wings of Salvation",
			usages : 2,
			recovery : "long rest",
		}],
		spellcastingBonus: [{
			name: "First Carving",
			selection: ["sanctuary"],
			firstCol: "markedbox",
			spellcastingAbility : [3, 5],
			magicItemComponents: false,
		},	{
			name: "First Carving",
			selection: ["death ward"],
			firstCol: "markedbox",
			spellcastingAbility : [3, 5],
			magicItemComponents: false,
		},	{
			name: "Wings of Salvation ",
			selection: ["warding bond"],
			firstCol: "markedbox",
			spellcastingAbility : [3, 5],
			magicItemComponents: false,
		}],
		spellChanges: {
			"sanctuary": {
				changes: "I gain the benefit of this spell at the end of a long rest. It lasts until my next long rest unless it ends early as normal.",
			},	
			"death ward": {
				changes: "I gain the benefit of this spell at the end of a long rest.",
			},	
			"warding bond": {
				changes: "I can cast this spell as part of the Wings of Salvation reaction. It does not use a spell slot or material components, but I do concentrate on it as normal.",
			},
		},
		toNotesPage: [{
			name: "First Carving Eldritch Carving",
			note: [
				"\n**Tattooed:* A creature that has a carving tattooed on its flesh must succeed on a DC 20 Constitution saving throw. On a failure, it gains a long-term madness, takes 10d10 force damage, and the carving isn’t tattooed.",
				"\nAt the end of a long rest, you gain the effect of a *sanctuary* spell that lasts until the start of your next long rest (the spell can end early as normal). The saving throw DC for the spell equals 8 + your Constitution or Wisdom modifier (whichever is higher) + your proficiency bonus.",
				"\nAt the end of a long rest, you gain the effect of the death ward spell cast on yourself.",
				"\n**Wings of Salvation:** In addition, when a willing creature you can see within 60 feet of you is targeted by an attack roll or forced to make a saving throw, you can use your reaction to give them wings to fly out of danger. A pair of angelic wings sprout on their back, which carries them in a straight line to you, where they land in an unoccupied space next to you. This can potentially cause the harmful effect to miss if the creature leaves the range of the effect. The wings then vanish. You can use Wings of Salvation twice, regaining all expended uses when you finish a long rest.",
				" \u2022 Further, when you use Wings of Salvation, as part of the reaction, you can cast *warding bond* on the target. You do not need to provide the spell slot or material components for the spell, but you need to concentrate on this spell to maintain it.",
			]
		}],
	},
	scarified: {
		name: "Scarified First Carving",
		description:
			"At the end of a long rest, I gain the effect of a *sanctuary* spell that lasts until the start of my next long rest (the spell can end early as normal), and I gain the effect of a *death ward* spell. As a reaction, I can use Wings of Salvation to pull an ally out of danger.",
		action: [
			["reaction", "Wings of Salvation"],
		],
		extraLimitedFeatures: [{
			name : "Wings of Salvation",
			usages : 2,
			usagescalc: "event.value = Math.max(2, What('Con Mod'), What('Wis Mod'));",
			recovery : "long rest",
		},	{
			name : "Devour Sin",
			usages : 1,
			recovery : "3 days",
		}],
		spellcastingBonus: [{
			name: "First Carving",
			selection: ["sanctuary"],
			firstCol: "markedbox",
			spellcastingAbility : [3, 5],
			magicItemComponents: false,
		},	{
			name: "First Carving",
			selection: ["death ward"],
			firstCol: "markedbox",
			spellcastingAbility : [3, 5],
			magicItemComponents: false,
		},	{
			name: "Wings of Salvation ",
			selection: ["warding bond"],
			firstCol: "markedbox",
			spellcastingAbility : [3, 5],
			magicItemComponents: false,
		},	{
			name: "Devour Sin",
			selection: ["true resurrection"],
			firstCol: "markedbox",
			spellcastingAbility : [3, 5],
			magicItemComponents: false,
		}],
		spellChanges: {
			"sanctuary": {
				changes: "I gain the benefit of this spell at the end of a long rest. It lasts until my next long rest unless it ends early as normal.",
			},	
			"death ward": {
				changes: "I gain the benefit of this spell at the end of a long rest.",
			},	
			"warding bond": {
				changes: "I can cast this spell as part of the Wings of Salvation reaction. It does not use a spell slot or material components, but I do concentrate on it as normal.",
			},
			"true resurrection": {
				changes: "This spell is cast immediately on my death while attuned to the First Carving. Alternatively, this spell affects a creature under my Wings of Salvation warding bond.",
			},
		},
		toNotesPage: [{
			name: "First Carving Eldritch Carving",
			note: [
				"\n**Scarified:** A creature that has a carving scarred on its flesh must succeed on a DC 29 Constitution saving throw. On a failure, it gains an indefinite madness, takes 25d10 force damage, and the carving isn’t scarified.",
				"\nAt the end of a long rest, you gain the effect of a *sanctuary* spell that lasts until the start of your next long rest (the spell can end early as normal). The saving throw DC for the spell equals 8 + your Constitution or Wisdom modifier (whichever is higher) + your proficiency bonus.",
				"\nAt the end of a long rest, you gain the effect of the death ward spell cast on yourself.",
				"\n**Wings of Salvation:** In addition, when a willing creature you can see within 60 feet of you is targeted by an attack roll or forced to make a saving throw, you can use your reaction to give them wings to fly out of danger. A pair of angelic wings sprout on their back, which carries them in a straight line to you, where they land in an unoccupied space next to you. This can potentially cause the harmful effect to miss if the creature leaves the range of the effect. The wings then vanish. You can use Wings of Salvation a number of times equal to Constitution or Wisdom modifier, whichever is higher, and you regain all expended uses when you finish a long rest.",
				" \u2022 Further, when you use Wings of Salvation, as part of the reaction, you can cast *warding bond* on the target. You do not need to provide the spell slot or material components for the spell, but you need to concentrate on this spell to maintain it.",
				"\n**Devour Sin:** Upon death, your body is immediately struck by the *true resurrection* spell. Alternatively, if a creature dies while under the effect of *warding bond* cast through your Wings of Salvation, the creature is affected by *true resurrection*. Once Devour Sin grants its effects, the carving loses all power for 3 days.",
			]
		}],
	},
};
