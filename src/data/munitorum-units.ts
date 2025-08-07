/**
 * Munitorum Field Manual Unit Data
 * Source of truth for Warhammer 40K unit points and model counts
 */

export interface MunitiorumUnit {
  name: string;
  variations: Array<{
    models: string;
    points: number;
  }>;
}

export interface MunitiorumFaction {
  name: string;
  units: MunitiorumUnit[];
}

export const munitiorumData: Record<string, MunitiorumFaction> = {
  'adepta-sororitas': {
    name: 'Adepta Sororitas',
    units: [
      {
        name: 'Aestred Thurga and Agathae Dolan',
        variations: [{ models: '2', points: 85 }]
      },
      {
        name: 'Arco-flagellants',
        variations: [
          { models: '3', points: 45 },
          { models: '10', points: 140 }
        ]
      },
      {
        name: 'Battle Sisters Squad',
        variations: [{ models: '10', points: 105 }]
      },
      {
        name: 'Canoness',
        variations: [{ models: '1', points: 50 }]
      },
      {
        name: 'Canoness with Jump Pack',
        variations: [{ models: '1', points: 75 }]
      },
      {
        name: 'Castigator',
        variations: [{ models: '1', points: 160 }]
      },
      {
        name: 'Celestian Sacresants',
        variations: [
          { models: '5', points: 70 },
          { models: '10', points: 130 }
        ]
      },
      {
        name: 'Daemonifuge',
        variations: [{ models: '2', points: 85 }]
      },
      {
        name: 'Dialogus',
        variations: [{ models: '1', points: 40 }]
      },
      {
        name: 'Dogmata',
        variations: [{ models: '1', points: 45 }]
      },
      {
        name: 'Dominion Squad',
        variations: [{ models: '10', points: 115 }]
      },
      {
        name: 'Exorcist',
        variations: [{ models: '1', points: 210 }]
      },
      {
        name: 'Hospitaller',
        variations: [{ models: '1', points: 50 }]
      },
      {
        name: 'Imagifier',
        variations: [{ models: '1', points: 65 }]
      },
      {
        name: 'Immolator',
        variations: [{ models: '1', points: 115 }]
      },
      {
        name: 'Junith Eruita',
        variations: [{ models: '1', points: 80 }]
      },
      {
        name: 'Ministorum Priest',
        variations: [{ models: '1', points: 50 }]
      },
      {
        name: 'Mortifiers',
        variations: [
          { models: '1', points: 70 },
          { models: '2', points: 140 }
        ]
      },
      {
        name: 'Morvenn Vahl',
        variations: [{ models: '1', points: 170 }]
      },
      {
        name: 'Palatine',
        variations: [{ models: '1', points: 50 }]
      },
      {
        name: 'Paragon Warsuits',
        variations: [{ models: '3', points: 210 }]
      },
      {
        name: 'Penitent Engines',
        variations: [
          { models: '1', points: 75 },
          { models: '2', points: 150 }
        ]
      },
      {
        name: 'Repentia Squad',
        variations: [
          { models: '5', points: 75 },
          { models: '10', points: 160 }
        ]
      },
      {
        name: 'Retributor Squad',
        variations: [{ models: '5', points: 115 }]
      },
      {
        name: 'Saint Celestine',
        variations: [{ models: '3', points: 160 }]
      },
      {
        name: 'Sanctifiers',
        variations: [{ models: '9', points: 100 }]
      },
      {
        name: 'Seraphim Squad',
        variations: [
          { models: '5', points: 80 },
          { models: '10', points: 160 }
        ]
      },
      {
        name: 'Sisters Novitiate Squad',
        variations: [{ models: '10', points: 100 }]
      },
      {
        name: 'Sororitas Rhino',
        variations: [{ models: '1', points: 75 }]
      },
      {
        name: 'Triumph of Saint Katherine',
        variations: [{ models: '1', points: 235 }]
      },
      {
        name: 'Zephyrim Squad',
        variations: [
          { models: '5', points: 80 },
          { models: '10', points: 160 }
        ]
      }
    ]
  },
  'custodes': {
    name: 'Adeptus Custodes',
    units: [
      {
        name: 'Aleya',
        variations: [{ models: '1', points: 65 }]
      },
      {
        name: 'Allarus Custodians',
        variations: [
          { models: '2', points: 120 },
          { models: '3', points: 180 },
          { models: '5', points: 300 },
          { models: '6', points: 360 }
        ]
      },
      {
        name: 'Anathema Psykana Rhino',
        variations: [{ models: '1', points: 75 }]
      },
      {
        name: 'Blade Champion',
        variations: [{ models: '1', points: 120 }]
      },
      {
        name: 'Custodian Guard',
        variations: [
          { models: '4', points: 170 },
          { models: '5', points: 215 }
        ]
      },
      {
        name: 'Custodian Wardens',
        variations: [
          { models: '4', points: 210 },
          { models: '5', points: 260 }
        ]
      },
      {
        name: 'Knight-Centura',
        variations: [{ models: '1', points: 55 }]
      },
      {
        name: 'Prosecutors',
        variations: [
          { models: '4', points: 40 },
          { models: '5', points: 50 },
          { models: '9', points: 90 },
          { models: '10', points: 100 }
        ]
      },
      {
        name: 'Shield-Captain',
        variations: [{ models: '1', points: 130 }]
      },
      {
        name: 'Shield-Captain in Allarus Terminator Armour',
        variations: [{ models: '1', points: 130 }]
      },
      {
        name: 'Shield-Captain on Dawneagle Jetbike',
        variations: [{ models: '1', points: 150 }]
      },
      {
        name: 'Trajann Valoris',
        variations: [{ models: '1', points: 140 }]
      },
      {
        name: 'Valerian',
        variations: [{ models: '1', points: 110 }]
      },
      {
        name: 'Venerable Contemptor Dreadnought',
        variations: [{ models: '1', points: 170 }]
      },
      {
        name: 'Venerable Land Raider',
        variations: [{ models: '1', points: 240 }]
      },
      {
        name: 'Vertus Praetors',
        variations: [
          { models: '2', points: 150 },
          { models: '3', points: 225 }
        ]
      },
      {
        name: 'Vigilators',
        variations: [
          { models: '4', points: 50 },
          { models: '5', points: 65 },
          { models: '9', points: 115 },
          { models: '10', points: 125 }
        ]
      },
      {
        name: 'Witchseekers',
        variations: [
          { models: '4', points: 50 },
          { models: '5', points: 65 },
          { models: '9', points: 115 },
          { models: '10', points: 125 }
        ]
      },
      {
        name: 'Agamatus Custodians',
        variations: [
          { models: '3', points: 225 },
          { models: '6', points: 450 }
        ]
      },
      {
        name: 'Aquilon Custodians',
        variations: [
          { models: '3', points: 195 },
          { models: '6', points: 390 }
        ]
      },
      {
        name: 'Ares Gunship',
        variations: [{ models: '1', points: 580 }]
      },
      {
        name: 'Caladius Grav-tank',
        variations: [{ models: '1', points: 215 }]
      },
      {
        name: 'Contemptor-Achillus Dreadnought',
        variations: [{ models: '1', points: 155 }]
      },
      {
        name: 'Contemptor-Galatus Dreadnought',
        variations: [{ models: '1', points: 165 }]
      },
      {
        name: 'Coronus Grav-carrier',
        variations: [{ models: '1', points: 200 }]
      },
      {
        name: 'Custodian Guard with Adrasite and Pyrithite Spears',
        variations: [{ models: '5', points: 250 }]
      },
      {
        name: 'Orion Assault Dropship',
        variations: [{ models: '1', points: 690 }]
      },
      {
        name: 'Pallas Grav-attack',
        variations: [{ models: '1', points: 105 }]
      },
      {
        name: 'Sagittarum Custodians',
        variations: [{ models: '5', points: 225 }]
      },
      {
        name: 'Telemon Heavy Dreadnought',
        variations: [{ models: '1', points: 225 }]
      },
      {
        name: 'Venatari Custodians',
        variations: [
          { models: '3', points: 165 },
          { models: '6', points: 330 }
        ]
      }
    ]
  },
  'adeptus-mechanicus': {
    name: 'Adeptus Mechanicus',
    units: [
      {
        name: 'Archaeopter Fusilave',
        variations: [{ models: '1', points: 160 }]
      },
      {
        name: 'Archaeopter Stratoraptor',
        variations: [{ models: '1', points: 185 }]
      },
      {
        name: 'Archaeopter Transvector',
        variations: [{ models: '1', points: 150 }]
      },
      {
        name: 'Belisarius Cawl',
        variations: [{ models: '1', points: 135 }]
      },
      {
        name: 'Corpuscarii Electro-Priests',
        variations: [
          { models: '5', points: 65 },
          { models: '10', points: 130 }
        ]
      },
      {
        name: 'Cybernetica Datasmith',
        variations: [{ models: '1', points: 35 }]
      },
      {
        name: 'Fulgurite Electro-Priests',
        variations: [
          { models: '5', points: 70 },
          { models: '10', points: 140 }
        ]
      },
      {
        name: 'Ironstrider Ballistarii',
        variations: [
          { models: '1', points: 70 },
          { models: '2', points: 140 },
          { models: '3', points: 210 }
        ]
      },
      {
        name: 'Kastelan Robots',
        variations: [
          { models: '2', points: 180 },
          { models: '4', points: 360 }
        ]
      },
      {
        name: 'Kataphron Breachers',
        variations: [
          { models: '3', points: 160 },
          { models: '6', points: 320 }
        ]
      },
      {
        name: 'Kataphron Destroyers',
        variations: [
          { models: '3', points: 105 },
          { models: '6', points: 210 }
        ]
      },
      {
        name: 'Onager Dunecrawler',
        variations: [{ models: '1', points: 155 }]
      },
      {
        name: 'Pteraxii Skystalkers',
        variations: [
          { models: '5', points: 70 },
          { models: '10', points: 140 }
        ]
      },
      {
        name: 'Pteraxii Sterylizors',
        variations: [
          { models: '5', points: 80 },
          { models: '10', points: 160 }
        ]
      },
      {
        name: 'Serberys Raiders',
        variations: [
          { models: '3', points: 60 },
          { models: '6', points: 120 }
        ]
      },
      {
        name: 'Serberys Sulphurhounds',
        variations: [
          { models: '3', points: 55 },
          { models: '6', points: 110 }
        ]
      },
      {
        name: 'Sicarian Infiltrators',
        variations: [
          { models: '5', points: 70 },
          { models: '10', points: 140 }
        ]
      },
      {
        name: 'Sicarian Ruststalkers',
        variations: [
          { models: '5', points: 75 },
          { models: '10', points: 150 }
        ]
      },
      {
        name: 'Skitarii Marshal',
        variations: [{ models: '1', points: 35 }]
      },
      {
        name: 'Skitarii Rangers',
        variations: [{ models: '10', points: 85 }]
      },
      {
        name: 'Skitarii Vanguard',
        variations: [{ models: '10', points: 95 }]
      },
      {
        name: 'Skorpius Disintegrator',
        variations: [{ models: '1', points: 165 }]
      },
      {
        name: 'Skorpius Dunerider',
        variations: [{ models: '1', points: 85 }]
      },
      {
        name: 'Sydonian Dragoons with Radium Jezzails',
        variations: [
          { models: '1', points: 55 },
          { models: '2', points: 100 },
          { models: '3', points: 150 }
        ]
      },
      {
        name: 'Sydonian Dragoons with Taser Lances',
        variations: [
          { models: '1', points: 65 },
          { models: '2', points: 130 },
          { models: '3', points: 195 }
        ]
      },
      {
        name: 'Sydonian Skatros',
        variations: [{ models: '1', points: 50 }]
      },
      {
        name: 'Tech-Priest Dominus',
        variations: [{ models: '1', points: 65 }]
      },
      {
        name: 'Tech-Priest Enginseer',
        variations: [{ models: '1', points: 55 }]
      },
      {
        name: 'Tech-Priest Manipulus',
        variations: [{ models: '1', points: 60 }]
      },
      {
        name: 'Technoarcheologist',
        variations: [{ models: '1', points: 45 }]
      }
    ]
  },
  'aeldari-craftworlds': {
    name: 'Aeldari',
    units: [
      {
        name: 'Asurmen',
        variations: [{ models: '1', points: 135 }]
      },
      {
        name: 'Autarch',
        variations: [{ models: '1', points: 85 }]
      },
      {
        name: 'Autarch Wayleaper',
        variations: [{ models: '1', points: 80 }]
      },
      {
        name: 'Avatar of Khaine',
        variations: [{ models: '1', points: 300 }]
      },
      {
        name: 'Baharroth',
        variations: [{ models: '1', points: 115 }]
      },
      {
        name: 'Corsair Voidreavers',
        variations: [
          { models: '5', points: 60 },
          { models: '10', points: 120 }
        ]
      },
      {
        name: 'Corsair Voidscarred',
        variations: [
          { models: '5', points: 80 },
          { models: '10', points: 160 }
        ]
      },
      {
        name: 'Crimson Hunter',
        variations: [{ models: '1', points: 160 }]
      },
      {
        name: 'D-cannon Platform',
        variations: [{ models: '1', points: 125 }]
      },
      {
        name: 'Dark Reapers',
        variations: [
          { models: '5', points: 90 },
          { models: '10', points: 195 }
        ]
      },
      {
        name: 'Death Jester',
        variations: [{ models: '1', points: 90 }]
      },
      {
        name: 'Dire Avengers',
        variations: [
          { models: '5', points: 80 },
          { models: '10', points: 160 }
        ]
      },
      {
        name: 'Eldrad Ulthran',
        variations: [{ models: '1', points: 110 }]
      },
      {
        name: 'Falcon',
        variations: [{ models: '1', points: 130 }]
      },
      {
        name: 'Farseer',
        variations: [{ models: '1', points: 70 }]
      },
      {
        name: 'Farseer Skyrunner',
        variations: [{ models: '1', points: 80 }]
      },
      {
        name: 'Fire Dragons',
        variations: [
          { models: '5', points: 120 },
          { models: '10', points: 220 }
        ]
      },
      {
        name: 'Fire Prism',
        variations: [{ models: '1', points: 150 }]
      },
      {
        name: 'Fuegan',
        variations: [{ models: '1', points: 120 }]
      },
      {
        name: 'Guardian Defenders',
        variations: [{ models: '11', points: 100 }]
      },
      {
        name: 'Hemlock Wraithfighter',
        variations: [{ models: '1', points: 155 }]
      },
      {
        name: 'Howling Banshees',
        variations: [
          { models: '5', points: 95 },
          { models: '10', points: 190 }
        ]
      },
      {
        name: 'Jain Zar',
        variations: [{ models: '1', points: 105 }]
      },
      {
        name: 'Lhykhis',
        variations: [{ models: '1', points: 120 }]
      },
      {
        name: 'Maugan Ra',
        variations: [{ models: '1', points: 100 }]
      },
      {
        name: 'Night Spinner',
        variations: [{ models: '1', points: 190 }]
      },
      {
        name: 'Rangers',
        variations: [
          { models: '5', points: 55 },
          { models: '10', points: 110 }
        ]
      },
      {
        name: 'Shadow Weaver Platform',
        variations: [{ models: '1', points: 75 }]
      },
      {
        name: 'Shadowseer',
        variations: [{ models: '1', points: 60 }]
      },
      {
        name: 'Shining Spears',
        variations: [
          { models: '3', points: 110 },
          { models: '6', points: 220 }
        ]
      },
      {
        name: 'Shroud Runners',
        variations: [
          { models: '3', points: 80 },
          { models: '6', points: 160 }
        ]
      },
      {
        name: 'Skyweavers',
        variations: [
          { models: '2', points: 95 },
          { models: '4', points: 190 }
        ]
      },
      {
        name: 'Solitaire',
        variations: [{ models: '1', points: 115 }]
      },
      {
        name: 'Spiritseer',
        variations: [{ models: '1', points: 65 }]
      },
      {
        name: 'Starweaver',
        variations: [{ models: '1', points: 80 }]
      },
      {
        name: 'Storm Guardians',
        variations: [{ models: '11', points: 100 }]
      },
      {
        name: 'Striking Scorpions',
        variations: [
          { models: '5', points: 85 },
          { models: '10', points: 150 }
        ]
      },
      {
        name: 'Swooping Hawks',
        variations: [
          { models: '5', points: 85 },
          { models: '10', points: 170 }
        ]
      },
      {
        name: 'Troupe',
        variations: [
          { models: '5', points: 85 },
          { models: '6', points: 100 },
          { models: '11', points: 190 },
          { models: '12', points: 205 }
        ]
      },
      {
        name: 'Troupe Master',
        variations: [{ models: '1', points: 75 }]
      },
      {
        name: 'Vibro Cannon Platform',
        variations: [{ models: '1', points: 60 }]
      },
      {
        name: 'Voidweaver',
        variations: [{ models: '1', points: 125 }]
      },
      {
        name: 'Vyper',
        variations: [
          { models: '1', points: 65 },
          { models: '2', points: 130 }
        ]
      },
      {
        name: 'War Walker',
        variations: [
          { models: '1', points: 85 },
          { models: '2', points: 170 }
        ]
      },
      {
        name: 'Warlock',
        variations: [{ models: '1', points: 45 }]
      },
      {
        name: 'Warlock Conclave',
        variations: [
          { models: '2', points: 55 },
          { models: '4', points: 130 }
        ]
      },
      {
        name: 'Warlock Skyrunners',
        variations: [
          { models: '1', points: 45 },
          { models: '2', points: 90 }
        ]
      },
      {
        name: 'Warp Spiders',
        variations: [
          { models: '5', points: 95 },
          { models: '10', points: 190 }
        ]
      },
      {
        name: 'Wave Serpent',
        variations: [{ models: '1', points: 125 }]
      },
      {
        name: 'Windriders',
        variations: [
          { models: '3', points: 80 },
          { models: '6', points: 160 }
        ]
      },
      {
        name: 'Wraithblades',
        variations: [{ models: '5', points: 170 }]
      },
      {
        name: 'Wraithguard',
        variations: [{ models: '5', points: 170 }]
      },
      {
        name: 'Wraithknight',
        variations: [{ models: '1', points: 435 }]
      },
      {
        name: 'Wraithknight with Ghostglaive',
        variations: [{ models: '1', points: 420 }]
      },
      {
        name: 'Wraithlord',
        variations: [{ models: '1', points: 140 }]
      }
    ]
  },
  'ynnari': {
    name: 'Ynnari',
    units: [
      {
        name: 'The Visarch',
        variations: [{ models: '1', points: 90 }]
      },
      {
        name: 'The Yncarne',
        variations: [{ models: '1', points: 260 }]
      },
      {
        name: 'Ynnari Archon',
        variations: [{ models: '1', points: 85 }]
      },
      {
        name: 'Ynnari Incubi',
        variations: [
          { models: '5', points: 85 },
          { models: '10', points: 170 }
        ]
      },
      {
        name: 'Ynnari Kabalite Warriors',
        variations: [{ models: '10', points: 110 }]
      },
      {
        name: 'Ynnari Raider',
        variations: [{ models: '1', points: 80 }]
      },
      {
        name: 'Ynnari Reavers',
        variations: [
          { models: '3', points: 65 },
          { models: '3', points: 120 }
        ]
      },
      {
        name: 'Ynnari Succubus',
        variations: [{ models: '1', points: 45 }]
      },
      {
        name: 'Ynnari Venom',
        variations: [{ models: '1', points: 70 }]
      },
      {
        name: 'Ynnari Wyches',
        variations: [{ models: '10', points: 90 }]
      },
      {
        name: 'Yvraine',
        variations: [{ models: '1', points: 100 }]
      },
      {
        name: 'Phantom Titan',
        variations: [{ models: '1', points: 2100 }]
      },
      {
        name: 'Revenant Titan',
        variations: [{ models: '1', points: 1100 }]
      }
    ]
  },
  'astra-militarum': {
    name: 'Astra Militarum',
    units: [
      {
        name: 'Aegis Defence Line',
        variations: [{ models: '1', points: 145 }]
      },
      {
        name: 'Armoured Sentinels',
        variations: [
          { models: '1', points: 65 },
          { models: '2', points: 130 }
        ]
      },
      {
        name: 'Artillery Team',
        variations: [{ models: '1', points: 95 }]
      },
      {
        name: 'Attilan Rough Riders',
        variations: [
          { models: '5', points: 60 },
          { models: '10', points: 120 }
        ]
      },
      {
        name: 'Baneblade',
        variations: [{ models: '1', points: 480 }]
      },
      {
        name: 'Banehammer',
        variations: [{ models: '1', points: 450 }]
      },
      {
        name: 'Banesword',
        variations: [{ models: '1', points: 480 }]
      },
      {
        name: 'Basilisk',
        variations: [{ models: '1', points: 140 }]
      },
      {
        name: 'Bullgryn Squad',
        variations: [
          { models: '3', points: 100 },
          { models: '6', points: 200 }
        ]
      },
      {
        name: 'Cadian Castellan',
        variations: [{ models: '1', points: 55 }]
      },
      {
        name: 'Cadian Command Squad',
        variations: [{ models: '5', points: 65 }]
      },
      {
        name: 'Cadian Heavy Weapons Squad',
        variations: [{ models: '3', points: 65 }]
      },
      {
        name: 'Cadian Shock Troops',
        variations: [
          { models: '10', points: 65 },
          { models: '20', points: 120 }
        ]
      },
      {
        name: 'Catachan Command Squad',
        variations: [{ models: '5', points: 65 }]
      },
      {
        name: 'Catachan Heavy Weapons Squad',
        variations: [{ models: '3', points: 65 }]
      },
      {
        name: 'Catachan Jungle Fighters',
        variations: [
          { models: '10', points: 65 },
          { models: '20', points: 120 }
        ]
      },
      {
        name: 'Chimera',
        variations: [{ models: '1', points: 85 }]
      },
      {
        name: 'Commissar',
        variations: [{ models: '1', points: 30 }]
      },
      {
        name: 'Death Korps of Krieg',
        variations: [
          { models: '10', points: 65 },
          { models: '20', points: 145 }
        ]
      },
      {
        name: 'Death Riders',
        variations: [
          { models: '5', points: 60 },
          { models: '10', points: 120 }
        ]
      },
      {
        name: 'Deathstrike',
        variations: [{ models: '1', points: 145 }]
      },
      {
        name: 'Doomhammer',
        variations: [{ models: '1', points: 445 }]
      },
      {
        name: 'Field Ordnance Battery',
        variations: [{ models: '2', points: 110 }]
      },
      {
        name: 'Gaunt\'s Ghosts',
        variations: [{ models: '6', points: 110 }]
      },
      {
        name: 'Hellhammer',
        variations: [{ models: '1', points: 450 }]
      },
      {
        name: 'Hellhound',
        variations: [{ models: '1', points: 125 }]
      },
      {
        name: 'Hydra',
        variations: [{ models: '1', points: 95 }]
      },
      {
        name: 'Kasrkin',
        variations: [{ models: '10', points: 110 }]
      },
      {
        name: 'Krieg Combat Engineers',
        variations: [
          { models: '5', points: 70 },
          { models: '10', points: 95 }
        ]
      },
      {
        name: 'Krieg Command Squad',
        variations: [{ models: '6', points: 65 }]
      },
      {
        name: 'Krieg Heavy Weapons Squad',
        variations: [{ models: '4', points: 75 }]
      },
      {
        name: 'Leman Russ Battle Tank',
        variations: [{ models: '1', points: 185 }]
      },
      {
        name: 'Leman Russ Commander',
        variations: [{ models: '1', points: 235 }]
      },
      {
        name: 'Leman Russ Demolisher',
        variations: [{ models: '1', points: 190 }]
      },
      {
        name: 'Leman Russ Eradicator',
        variations: [{ models: '1', points: 170 }]
      },
      {
        name: 'Leman Russ Executioner',
        variations: [{ models: '1', points: 170 }]
      },
      {
        name: 'Leman Russ Exterminator',
        variations: [{ models: '1', points: 180 }]
      },
      {
        name: 'Leman Russ Punisher',
        variations: [{ models: '1', points: 150 }]
      },
      {
        name: 'Leman Russ Vanquisher',
        variations: [{ models: '1', points: 145 }]
      },
      {
        name: 'Lord Marshal Dreir',
        variations: [{ models: '1', points: 100 }]
      },
      {
        name: 'Lord Solar Leontus',
        variations: [{ models: '1', points: 150 }]
      },
      {
        name: 'Manticore',
        variations: [{ models: '1', points: 165 }]
      },
      {
        name: 'Militarum Tempestus Command Squad',
        variations: [{ models: '5', points: 85 }]
      },
      {
        name: 'Ministorum Priest',
        variations: [{ models: '1', points: 35 }]
      },
      {
        name: 'Nork Deddog',
        variations: [{ models: '1', points: 60 }]
      },
      {
        name: 'Ogryn Bodyguard',
        variations: [{ models: '1', points: 40 }]
      },
      {
        name: 'Ogryn Squad',
        variations: [
          { models: '3', points: 60 },
          { models: '6', points: 130 }
        ]
      },
      {
        name: 'Primaris Psyker',
        variations: [{ models: '1', points: 60 }]
      },
      {
        name: 'Ratlings',
        variations: [
          { models: '5', points: 60 },
          { models: '10', points: 100 }
        ]
      },
      {
        name: 'Rogal Dorn Battle Tank',
        variations: [{ models: '1', points: 240 }]
      },
      {
        name: 'Rogal Dorn Commander',
        variations: [{ models: '1', points: 265 }]
      },
      {
        name: 'Scout Sentinels',
        variations: [
          { models: '1', points: 55 },
          { models: '2', points: 110 }
        ]
      },
      {
        name: 'Shadowsword',
        variations: [{ models: '1', points: 440 }]
      },
      {
        name: 'Sly Marbo',
        variations: [{ models: '1', points: 55 }]
      },
      {
        name: 'Stormlord',
        variations: [{ models: '1', points: 460 }]
      },
      {
        name: 'Stormsword',
        variations: [{ models: '1', points: 495 }]
      },
      {
        name: 'Taurox',
        variations: [{ models: '1', points: 75 }]
      },
      {
        name: 'Taurox Prime',
        variations: [{ models: '1', points: 90 }]
      },
      {
        name: 'Tech-priest Enginseer',
        variations: [{ models: '1', points: 45 }]
      },
      {
        name: 'Tempestus Aquilons',
        variations: [{ models: '10', points: 100 }]
      },
      {
        name: 'Tempestus Scions',
        variations: [
          { models: '5', points: 70 },
          { models: '10', points: 140 }
        ]
      },
      {
        name: 'Ursula Creed',
        variations: [{ models: '1', points: 85 }]
      },
      {
        name: 'Valkyrie',
        variations: [{ models: '1', points: 190 }]
      },
      {
        name: 'Wyvern',
        variations: [{ models: '1', points: 110 }]
      },
      {
        name: 'Avenger Strike Fighter',
        variations: [{ models: '1', points: 130 }]
      },
      {
        name: 'Cyclops Demolition Vehicle',
        variations: [{ models: '1', points: 25 }]
      }
    ]
  },
  'black-templars': {
    name: 'Black Templars',
    units: [
      {
        name: 'Castellan',
        variations: [{ models: '1', points: 60 }]
      },
      {
        name: 'Chaplain Grimaldus',
        variations: [{ models: '4', points: 110 }]
      },
      {
        name: 'Crusade Ancient',
        variations: [{ models: '1', points: 65 }]
      },
      {
        name: 'Crusader Squad',
        variations: [
          { models: '10 (1 SB, 5 Init., 4 Neo.)', points: 150 },
          { models: '20 (1 SB, 11 Init., 8 Neo.)', points: 310 }
        ]
      },
      {
        name: 'Emperor\'s Champion',
        variations: [{ models: '1', points: 90 }]
      },
      {
        name: 'Execrator',
        variations: [{ models: '1', points: 70 }]
      },
      {
        name: 'Gladiator Lancer',
        variations: [{ models: '1', points: 160 }]
      },
      {
        name: 'Gladiator Reaper',
        variations: [{ models: '1', points: 160 }]
      },
      {
        name: 'Gladiator Valiant',
        variations: [{ models: '1', points: 160 }]
      },
      {
        name: 'High Marshal Helbrecht',
        variations: [{ models: '1', points: 120 }]
      },
      {
        name: 'Impulsor',
        variations: [{ models: '1', points: 85 }]
      },
      {
        name: 'Land Raider Crusader',
        variations: [{ models: '1', points: 220 }]
      },
      {
        name: 'Marshal',
        variations: [{ models: '1', points: 80 }]
      },
      {
        name: 'Sternguard Veteran Squad',
        variations: [
          { models: '5', points: 85 },
          { models: '10', points: 170 }
        ]
      },
      {
        name: 'Sword Brethren',
        variations: [
          { models: '4', points: 105 },
          { models: '5', points: 130 },
          { models: '9', points: 235 },
          { models: '10', points: 260 }
        ]
      },
      {
        name: 'Terminator Squad',
        variations: [
          { models: '5', points: 175 },
          { models: '10', points: 330 }
        ]
      },
      {
        name: 'Repulsor',
        variations: [{ models: '1', points: 180 }]
      },
      {
        name: 'Repulsor Executioner',
        variations: [{ models: '1', points: 220 }]
      }
    ]
  },
  'blood-angels': {
    name: 'Blood Angels',
    units: [
      {
        name: 'Astorath',
        variations: [{ models: '1', points: 95 }]
      },
      {
        name: 'Baal Predator',
        variations: [{ models: '1', points: 125 }]
      },
      {
        name: 'Blood Angels Captain',
        variations: [{ models: '1', points: 80 }]
      },
      {
        name: 'Chief Librarian Mephiston',
        variations: [{ models: '1', points: 120 }]
      },
      {
        name: 'Commander Dante',
        variations: [{ models: '1', points: 120 }]
      },
      {
        name: 'Death Company Captain',
        variations: [{ models: '1', points: 70 }]
      },
      {
        name: 'Death Company Captain with Jump Pack',
        variations: [{ models: '1', points: 75 }]
      },
      {
        name: 'Death Company Dreadnought',
        variations: [{ models: '1', points: 160 }]
      },
      {
        name: 'Death Company Marines',
        variations: [
          { models: '5', points: 85 },
          { models: '10', points: 160 }
        ]
      },
      {
        name: 'Death Company Marines with Bolt Rifles',
        variations: [
          { models: '5', points: 85 },
          { models: '10', points: 160 }
        ]
      },
      {
        name: 'Death Company Marines with Jump Packs',
        variations: [
          { models: '5', points: 120 },
          { models: '10', points: 230 }
        ]
      },
      {
        name: 'Lemartes',
        variations: [{ models: '1', points: 100 }]
      },
      {
        name: 'Sanguinary Guard',
        variations: [
          { models: '3', points: 110 },
          { models: '6', points: 240 }
        ]
      },
      {
        name: 'Sanguinary Priest',
        variations: [{ models: '1', points: 75 }]
      },
      {
        name: 'The Sanguinor',
        variations: [{ models: '1', points: 140 }]
      }
    ]
  }
};