/**
 * Munitorum Field Manual Parser
 * Converts Munitorum data to our ParsedFaction format
 */

import type { ParsedFaction, ParsedUnit } from './bsDataParser';
import { munitiorumData } from '@/data/munitorum-units';

class MunitiorumParser {
  private generateId(name: string): string {
    return name.toLowerCase()
      .replace(/[^a-z0-9\s]/g, '')
      .replace(/\s+/g, '-')
      .replace(/^-+|-+$/g, '');
  }

  private convertToLoadouts(variations: Array<{ models: string; points: number }>) {
    return variations.map((variation, index) => ({
      id: `variation-${index}`,
      name: `${variation.models} models`,
      wargear: [`${variation.models} models - ${variation.points} points`]
    }));
  }

  private determineCategory(unitName: string): keyof ParsedFaction['units'] {
    const name = unitName.toLowerCase();
    
    // Epic Heroes - Named characters and unique units
    const epicHeroKeywords = [
      'asurmen', 'avatar of khaine', 'baharroth', 'eldrad ulthran', 'fuegan', 
      'jain zar', 'maugan ra', 'the visarch', 'the yncarne', 'yvraine',
      'belisarius cawl', 'morvenn vahl', 'saint celestine', 'junith eruita',
      'daemonifuge', 'aestred thurga', 'trajann valoris', 'valerian', 'aleya',
      'commander dante', 'chief librarian mephiston', 'astorath', 'lemartes',
      'the sanguinor', 'high marshal helbrecht', 'chaplain grimaldus', 
      'emperor\'s champion', 'ursula creed', 'lord solar leontus', 'lord marshal dreir',
      'gaunt\'s ghosts', 'sly marbo', 'nork deddog', 'triumph of saint katherine'
    ];

    if (epicHeroKeywords.some(keyword => name.includes(keyword))) {
      return 'epicHeroes';
    }

    // Characters - HQ units that aren't Epic Heroes
    const characterKeywords = [
      'captain', 'chaplain', 'librarian', 'lieutenant', 'canoness', 'palatine',
      'dialogus', 'dogmata', 'hospitaller', 'imagifier', 'ministorum priest',
      'shield-captain', 'blade champion', 'knight-centura', 'castellan', 'marshal',
      'crusade ancient', 'autarch', 'farseer', 'spiritseer', 'warlock', 'shadowseer',
      'troupe master', 'solitaire', 'death jester', 'tech-priest', 'skitarii marshal',
      'cybernetica datasmith', 'technoarcheologist', 'archon', 'succubus',
      'commissar', 'cadian castellan', 'primaris psyker', 'ogryn bodyguard',
      'sanguinary priest', 'death company captain'
    ];

    if (characterKeywords.some(keyword => name.includes(keyword))) {
      return 'characters';
    }

    // Troops - Basic infantry and core units
    const troopKeywords = [
      'battle sisters squad', 'guardian defenders', 'storm guardians', 'dire avengers',
      'rangers', 'kabalite warriors', 'wyches', 'skitarii rangers', 'skitarii vanguard',
      'corsair voidreavers', 'cadian shock troops', 'catachan jungle fighters',
      'death korps of krieg', 'tempestus scions', 'kasrkin', 'crusader squad',
      'death company marines with bolt rifles'
    ];

    if (troopKeywords.some(keyword => name.includes(keyword))) {
      return 'troops';
    }

    // Heavy Support - Vehicles and heavy weapons
    const heavySupportKeywords = [
      'predator', 'land raider', 'baneblade', 'leman russ', 'basilisk', 'manticore',
      'exorcist', 'castigator', 'rogal dorn', 'fire prism', 'night spinner',
      'wraithknight', 'skorpius disintegrator', 'onager dunecrawler', 'kastelan robots',
      'kataphron', 'dreadnought', 'wraithlord', 'war walker', 'dark reapers',
      'heavy weapons squad', 'retributor squad', 'devastator squad', 'havocs',
      'field ordnance battery', 'deathstrike', 'wyvern', 'hydra', 'shadowsword',
      'stormlord', 'stormsword', 'hellhammer', 'banehammer', 'banesword', 'doomhammer'
    ];

    if (heavySupportKeywords.some(keyword => name.includes(keyword))) {
      return 'heavySupport';
    }

    // Elites - Specialists and veteran units
    const eliteKeywords = [
      'terminators', 'sternguard', 'vanguard', 'sword brethren', 'sanguinary guard',
      'death company marines', 'celestian sacresants', 'repentia squad', 'arco-flagellants',
      'mortifiers', 'penitent engines', 'paragon warsuits', 'sanctifiers', 'custodian',
      'allarus', 'wardens', 'venerable', 'striking scorpions', 'howling banshees',
      'fire dragons', 'warp spiders', 'wraithblades', 'wraithguard', 'incubi',
      'electro-priests', 'sicarian', 'pteraxii', 'bullgryn squad', 'ogryn squad',
      'ratlings', 'krieg combat engineers', 'eversor', 'culexus', 'callidus', 'vindicare'
    ];

    if (eliteKeywords.some(keyword => name.includes(keyword))) {
      return 'elites';
    }

    // Fast Attack - Fast moving units
    const fastAttackKeywords = [
      'seraphim squad', 'zephyrim squad', 'dominion squad', 'sisters novitiate squad',
      'shining spears', 'swooping hawks', 'windriders', 'skyweavers', 'vyper',
      'reavers', 'hellions', 'scourges', 'serberys', 'ironstrider', 'sydonian dragoons',
      'vertus praetors', 'venatari', 'agamatus', 'aquilon', 'attack bike', 'bike squad',
      'assault squad', 'jump pack', 'rough riders', 'death riders', 'scout sentinels',
      'armoured sentinels', 'shroud runners'
    ];

    if (fastAttackKeywords.some(keyword => name.includes(keyword))) {
      return 'fastAttack';
    }

    // Flyer - Aircraft
    const flyerKeywords = [
      'valkyrie', 'vendetta', 'vulture', 'lightning', 'thunderbolt', 'avenger strike fighter',
      'crimson hunter', 'hemlock wraithfighter', 'razorwing jetfighter', 'voidraven bomber',
      'archaeopter', 'storm eagle', 'fire raptor', 'caestus', 'thunderhawk', 'corvus',
      'storm raven', 'storm talon', 'xiphon', 'storm hawk', 'nephilim jetfighter',
      'dark talon', 'ares gunship', 'orion assault dropship'
    ];

    if (flyerKeywords.some(keyword => name.includes(keyword))) {
      return 'flyer';
    }

    // Transport - Dedicated transports
    const transportKeywords = [
      'rhino', 'razorback', 'impulsor', 'repulsor', 'chimera', 'taurox', 'immolator',
      'wave serpent', 'falcon', 'starweaver', 'voidweaver', 'raider', 'venom',
      'skorpius dunerider', 'terrax-pattern', 'hades', 'coronus grav-carrier',
      'caladius grav-tank', 'pallas grav-attack', 'land speeder', 'drop pod'
    ];

    if (transportKeywords.some(keyword => name.includes(keyword))) {
      return 'transport';
    }

    // Fortification - Defensive structures
    const fortificationKeywords = [
      'aegis defence line', 'bastion', 'fortress of redemption', 'firestorm redoubt',
      'vengeance weapon battery', 'plasma obliterator', 'void shield generator',
      'imperial bunker', 'gun emplacement', 'defence line', 'cannon platform',
      'd-cannon platform', 'shadow weaver platform', 'vibro cannon platform'
    ];

    if (fortificationKeywords.some(keyword => name.includes(keyword))) {
      return 'fortification';
    }

    // Default to troops if no category matches
    return 'troops';
  }

  convertMunitiorumUnit(munitiorumUnit: any, factionId: string): ParsedUnit {
    const firstVariation = munitiorumUnit.variations[0];
    
    return {
      id: this.generateId(munitiorumUnit.name),
      name: munitiorumUnit.name,
      points: firstVariation.points,
      minSize: parseInt(firstVariation.models.split(' ')[0]) || 1,
      maxSize: munitiorumUnit.variations.length > 1 ? 
        Math.max(...munitiorumUnit.variations.map((v: any) => parseInt(v.models.split(' ')[0]) || 1)) : 
        undefined,
      unitCost: munitiorumUnit.variations.length > 1 ? 
        Math.round(firstVariation.points / (parseInt(firstVariation.models.split(' ')[0]) || 1)) : 
        undefined,
      stats: 'TBD - Munitorum Field Manual',
      wargear: ['Standard Equipment'],
      abilities: ['TBD - Munitorum Field Manual'],
      loadouts: this.convertToLoadouts(munitiorumUnit.variations),
      wargearOptions: [],
      keywords: []
    };
  }

  convertFaction(factionId: string): ParsedFaction | null {
    const munitiorumFaction = munitiorumData[factionId];
    if (!munitiorumFaction) {
      return null;
    }

    // Get faction metadata from existing mapping
    const factionMetadata = this.getFactionMetadata(factionId);
    if (!factionMetadata) {
      return null;
    }

    const units: ParsedFaction['units'] = {
      epicHeroes: [],
      characters: [],
      troops: [],
      heavySupport: [],
      elites: [],
      fastAttack: [],
      flyer: [],
      transport: [],
      fortification: []
    };

    // Convert units and categorize them
    for (const munitiorumUnit of munitiorumFaction.units) {
      const parsedUnit = this.convertMunitiorumUnit(munitiorumUnit, factionId);
      const category = this.determineCategory(parsedUnit.name);
      units[category].push(parsedUnit);
    }

    return {
      id: factionId,
      name: factionMetadata.name,
      color: factionMetadata.color,
      units
    };
  }

  private getFactionMetadata(factionId: string): { name: string; color: string } | null {
    const metadata: Record<string, { name: string; color: string }> = {
      'adepta-sororitas': { name: 'Adepta Sororitas', color: 'destructive' },
      'custodes': { name: 'Adeptus Custodes', color: 'default' },
      'adeptus-mechanicus': { name: 'Adeptus Mechanicus', color: 'destructive' },
      'aeldari-craftworlds': { name: 'Aeldari - Craftworlds', color: 'accent' },
      'ynnari': { name: 'Ynnari', color: 'accent' },
      'astra-militarum': { name: 'Astra Militarum', color: 'secondary' },
      'black-templars': { name: 'Black Templars', color: 'default' },
      'blood-angels': { name: 'Blood Angels', color: 'destructive' }
    };

    return metadata[factionId] || null;
  }

  getAllFactions(): Record<string, ParsedFaction> {
    const factions: Record<string, ParsedFaction> = {};
    
    for (const factionId of Object.keys(munitiorumData)) {
      const faction = this.convertFaction(factionId);
      if (faction) {
        factions[factionId] = faction;
      }
    }

    return factions;
  }
}

export const munitiorumParser = new MunitiorumParser();