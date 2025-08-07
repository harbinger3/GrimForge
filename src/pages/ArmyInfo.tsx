import { useParams, Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ArrowLeft, FileText, Download, Users, Sword, Shield, Zap } from 'lucide-react';

// Extended faction data with lore and detailed unit information
const factionData = {
  ultramarines: {
    name: "Ultramarines",
    color: "accent",
    version: "10th Edition",
    heroImage: "bg-gradient-to-r from-blue-900 via-blue-700 to-blue-900",
    lore: "The Ultramarines are considered one of the strongest and most honoured of all the Space Marine Chapters in the Imperium of Man, and were responsible for almost single-handedly holding the Imperium together after the Horus Heresy. Highly disciplined and courageous warriors, the Ultramarines have remained true to the teachings of their Primarch Roboute Guilliman for 10,000 years.",
    specialRules: [
      {
        name: "Courage and Honour",
        description: "Ultramarines units can perform Heroic Interventions as if they were Character units."
      },
      {
        name: "Adeptus Astartes",
        description: "You can re-roll one Hit roll and one Wound roll each time this unit shoots or fights."
      },
      {
        name: "Oath of Moment",
        description: "At the start of your Command phase, select one unit from your opponent's army. All friendly Adeptus Astartes units have the Lethal Hits ability against that unit until the start of your next Command phase."
      }
    ],
    spells: [
      {
        name: "Smite",
        warpCharge: "5+",
        range: "18\"",
        description: "The nearest visible enemy unit within range suffers D3 mortal wounds."
      },
      {
        name: "Veil of Time",
        warpCharge: "6+",
        range: "12\"",
        description: "Select one friendly unit within range. That unit can shoot and charge even if it Advanced this turn."
      }
    ],
    units: {
      hq: [
        {
          id: "captain",
          name: "Captain in Tactical Dreadnought Armour",
          models: "1",
          points: 115,
          stats: {
            movement: "5\"",
            ws: "2+",
            bs: "2+",
            strength: "4",
            toughness: "4",
            wounds: "5",
            attacks: "4",
            leadership: "6+",
            save: "2+"
          },
          wargear: ["Storm bolter", "Power fist", "Frag & Krak grenades"],
          keywords: ["Infantry", "Character", "Imperium", "Terminator", "Captain"],
          abilities: ["Deep Strike", "Rites of Battle", "Teleport Strike"],
          weapons: [
            {
              name: "Storm bolter",
              range: "24\"",
              attacks: "2",
              skill: "2+",
              strength: "4",
              ap: "0",
              damage: "1",
              abilities: ["Rapid Fire 2"]
            },
            {
              name: "Power fist",
              range: "Melee",
              attacks: "3",
              skill: "2+",
              strength: "8",
              ap: "-2",
              damage: "2",
              abilities: []
            }
          ]
        },
        {
          id: "librarian",
          name: "Librarian",
          models: "1",
          points: 90,
          stats: {
            movement: "6\"",
            ws: "3+",
            bs: "3+",
            strength: "4",
            toughness: "4",
            wounds: "4",
            attacks: "3",
            leadership: "6+",
            save: "3+"
          },
          wargear: ["Force weapon", "Bolt pistol", "Frag & Krak grenades"],
          keywords: ["Infantry", "Character", "Imperium", "Psyker", "Librarian"],
          abilities: ["Psychic Powers", "Know No Fear", "Mental Fortress"],
          weapons: [
            {
              name: "Bolt pistol",
              range: "12\"",
              attacks: "1",
              skill: "3+",
              strength: "4",
              ap: "0",
              damage: "1",
              abilities: ["Pistol"]
            },
            {
              name: "Force weapon",
              range: "Melee",
              attacks: "3",
              skill: "3+",
              strength: "6",
              ap: "-1",
              damage: "D3",
              abilities: ["Psychic"]
            }
          ]
        }
      ],
      troops: [
        {
          id: "intercessors",
          name: "Intercessor Squad",
          models: "5-10",
          points: 100,
          minSize: 5,
          maxSize: 10,
          unitCost: 20,
          stats: {
            movement: "6\"",
            ws: "3+",
            bs: "3+",
            strength: "4",
            toughness: "4",
            wounds: "2",
            attacks: "2",
            leadership: "6+",
            save: "3+"
          },
          wargear: ["Bolt rifle", "Frag & Krak grenades"],
          keywords: ["Infantry", "Imperium", "Battleline", "Intercessors"],
          abilities: ["Combat Squads", "Rapid Fire"],
          weapons: [
            {
              name: "Bolt rifle",
              range: "30\"",
              attacks: "1",
              skill: "3+",
              strength: "4",
              ap: "-1",
              damage: "1",
              abilities: ["Assault"]
            }
          ]
        },
        {
          id: "tactical",
          name: "Tactical Squad",
          models: "5-10",
          points: 90,
          minSize: 5,
          maxSize: 10,
          unitCost: 18,
          stats: {
            movement: "6\"",
            ws: "3+",
            bs: "3+",
            strength: "4",
            toughness: "4",
            wounds: "1",
            attacks: "1",
            leadership: "6+",
            save: "3+"
          },
          wargear: ["Boltgun", "Frag & Krak grenades"],
          keywords: ["Infantry", "Imperium", "Battleline", "Tactical Squad"],
          abilities: ["Combat Squads", "Bolter Discipline"],
          weapons: [
            {
              name: "Boltgun",
              range: "24\"",
              attacks: "1",
              skill: "3+",
              strength: "4",
              ap: "0",
              damage: "1",
              abilities: ["Rapid Fire 1"]
            }
          ]
        }
      ],
      heavySupport: [
        {
          id: "devastators",
          name: "Devastator Squad",
          models: "5-10",
          points: 90,
          minSize: 5,
          maxSize: 10,
          unitCost: 18,
          stats: {
            movement: "6\"",
            ws: "3+",
            bs: "3+",
            strength: "4",
            toughness: "4",
            wounds: "1",
            attacks: "1",
            leadership: "6+",
            save: "3+"
          },
          wargear: ["Heavy weapon", "Frag & Krak grenades"],
          keywords: ["Infantry", "Imperium", "Devastator Squad"],
          abilities: ["Signum", "Fire Discipline"],
          weapons: [
            {
              name: "Heavy bolter",
              range: "36\"",
              attacks: "3",
              skill: "3+",
              strength: "5",
              ap: "-1",
              damage: "2",
              abilities: ["Heavy", "Sustained Hits 1"]
            }
          ]
        }
      ]
    }
  },
  orks: {
    name: "Orks",
    color: "destructive",
    version: "10th Edition",
    heroImage: "bg-gradient-to-r from-green-900 via-green-700 to-green-900",
    lore: "Orks are the most widespread and warlike race of aliens in the bloodstained galaxy of the 41st Millennium. They are seen by their enemies as savage, warlike, and crude, but they are the most successful species in the entire galaxy, outnumbering possibly every other race. From the depths of space they come, their ramshackle fleets blotting out the stars.",
    specialRules: [
      {
        name: "Waaagh!",
        description: "Once per battle, at the start of your Command phase, you can call a Waaagh!. If you do, until the start of your next Command phase, add 1 to the Attacks characteristic of weapons equipped by Orks units from your army."
      },
      {
        name: "'Ere We Go",
        description: "You can re-roll Charge rolls made for Orks units from your army."
      },
      {
        name: "Mob Rule",
        description: "Each time a Morale test is taken for an Orks unit from your army, if that unit contains 10 or more models, add 1 to that test."
      }
    ],
    spells: [
      {
        name: "'Eadbanger",
        warpCharge: "6+",
        range: "18\"",
        description: "Select one enemy unit within range. That unit suffers D3 mortal wounds."
      },
      {
        name: "Warpath",
        warpCharge: "6+",
        range: "12\"",
        description: "Select one friendly Orks unit within range. Add 1 to the Attacks characteristic of that unit's melee weapons until your next Psychic phase."
      }
    ],
    units: {
      hq: [
        {
          id: "warboss",
          name: "Warboss",
          models: "1",
          points: 80,
          stats: {
            movement: "6\"",
            ws: "2+",
            bs: "5+",
            strength: "5",
            toughness: "5",
            wounds: "5",
            attacks: "4",
            leadership: "6+",
            save: "4+"
          },
          wargear: ["Power klaw", "Slugga"],
          keywords: ["Infantry", "Character", "Orks", "Warboss"],
          abilities: ["Waaagh!", "'Ere We Go", "Boss Pole"],
          weapons: [
            {
              name: "Slugga",
              range: "12\"",
              attacks: "1",
              skill: "5+",
              strength: "4",
              ap: "0",
              damage: "1",
              abilities: ["Pistol"]
            },
            {
              name: "Power klaw",
              range: "Melee",
              attacks: "3",
              skill: "2+",
              strength: "9",
              ap: "-2",
              damage: "2",
              abilities: []
            }
          ]
        }
      ],
      troops: [
        {
          id: "boyz",
          name: "Boyz",
          models: "10-30",
          points: 90,
          minSize: 10,
          maxSize: 30,
          unitCost: 9,
          stats: {
            movement: "6\"",
            ws: "3+",
            bs: "5+",
            strength: "4",
            toughness: "4",
            wounds: "1",
            attacks: "2",
            leadership: "7+",
            save: "6+"
          },
          wargear: ["Slugga", "Choppa"],
          keywords: ["Infantry", "Battleline", "Orks", "Boyz"],
          abilities: ["Mob Rule", "'Ere We Go"],
          weapons: [
            {
              name: "Slugga",
              range: "12\"",
              attacks: "1",
              skill: "5+",
              strength: "4",
              ap: "0",
              damage: "1",
              abilities: ["Pistol"]
            },
            {
              name: "Choppa",
              range: "Melee",
              attacks: "2",
              skill: "3+",
              strength: "4",
              ap: "0",
              damage: "1",
              abilities: []
            }
          ]
        }
      ],
      heavySupport: [
        {
          id: "lootas",
          name: "Lootas",
          models: "5-15",
          points: 85,
          minSize: 5,
          maxSize: 15,
          unitCost: 17,
          stats: {
            movement: "6\"",
            ws: "3+",
            bs: "5+",
            strength: "4",
            toughness: "4",
            wounds: "1",
            attacks: "2",
            leadership: "7+",
            save: "6+"
          },
          wargear: ["Deffgun"],
          keywords: ["Infantry", "Orks", "Lootas"],
          abilities: ["Dakka Dakka Dakka"],
          weapons: [
            {
              name: "Deffgun",
              range: "36\"",
              attacks: "3",
              skill: "5+",
              strength: "7",
              ap: "-1",
              damage: "1",
              abilities: ["Heavy"]
            }
          ]
        }
      ]
    }
  }
};

const ArmyInfo = () => {
  const { factionId } = useParams<{ factionId: string }>();
  const faction = factionData[factionId as keyof typeof factionData];

  if (!faction) {
    return (
      <div className="min-h-screen bg-gradient-void flex items-center justify-center">
        <Card className="max-w-md">
          <CardContent className="p-6 text-center">
            <h2 className="text-xl font-bold mb-2">Faction Not Found</h2>
            <p className="text-muted-foreground mb-4">The requested faction could not be found.</p>
            <Link to="/">
              <Button>Return Home</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  const StatBlock = ({ unit }: { unit: any }) => (
    <div className="grid grid-cols-9 gap-2 text-xs font-mono bg-muted/30 rounded p-2">
      <div className="text-center font-semibold">M</div>
      <div className="text-center font-semibold">WS</div>
      <div className="text-center font-semibold">BS</div>
      <div className="text-center font-semibold">S</div>
      <div className="text-center font-semibold">T</div>
      <div className="text-center font-semibold">W</div>
      <div className="text-center font-semibold">A</div>
      <div className="text-center font-semibold">Ld</div>
      <div className="text-center font-semibold">Sv</div>
      
      <div className="text-center">{unit.stats.movement}</div>
      <div className="text-center">{unit.stats.ws}</div>
      <div className="text-center">{unit.stats.bs}</div>
      <div className="text-center">{unit.stats.strength}</div>
      <div className="text-center">{unit.stats.toughness}</div>
      <div className="text-center">{unit.stats.wounds}</div>
      <div className="text-center">{unit.stats.attacks}</div>
      <div className="text-center">{unit.stats.leadership}</div>
      <div className="text-center">{unit.stats.save}</div>
    </div>
  );

  const WeaponProfile = ({ weapon }: { weapon: any }) => (
    <div className="grid grid-cols-7 gap-2 text-xs bg-muted/20 rounded p-2">
      <div className="font-semibold">{weapon.name}</div>
      <div className="text-center">{weapon.range}</div>
      <div className="text-center">{weapon.attacks}</div>
      <div className="text-center">{weapon.skill}</div>
      <div className="text-center">{weapon.strength}</div>
      <div className="text-center">{weapon.ap}</div>
      <div className="text-center">{weapon.damage}</div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-void">
      {/* Hero Banner */}
      <div className={`${faction.heroImage} relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
          <div className="flex items-center gap-4 mb-6">
            <Link to="/">
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Factions
              </Button>
            </Link>
            <Badge variant="secondary" className="bg-white/10 text-white border-white/20">
              {faction.version}
            </Badge>
          </div>
          
          <h1 className="text-5xl font-bold text-white mb-4 animate-glow">
            {faction.name}
          </h1>
          
          <div className="flex flex-wrap gap-4">
            <Link to={`/army-builder/${factionId}`}>
              <Button size="lg" className="bg-gradient-plasma">
                <Users className="h-5 w-5 mr-2" />
                Create New List
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
              <FileText className="h-5 w-5 mr-2" />
              View Rules PDF
            </Button>
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
              <Download className="h-5 w-5 mr-2" />
              Ready-to-Play Lists
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Lore & Rules */}
          <div className="lg:col-span-1 space-y-6">
            {/* Lore */}
            <Card className="bg-card border-border shadow-elevation">
              <CardHeader>
                <CardTitle className="text-primary flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Background
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{faction.lore}</p>
              </CardContent>
            </Card>

            {/* Special Rules */}
            <Card className="bg-card border-border shadow-elevation">
              <CardHeader>
                <CardTitle className="text-primary flex items-center gap-2">
                  <Sword className="h-5 w-5" />
                  Special Rules
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {faction.specialRules.map((rule, index) => (
                  <div key={index}>
                    <h4 className="font-semibold text-card-foreground">{rule.name}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{rule.description}</p>
                    {index < faction.specialRules.length - 1 && <Separator className="mt-3" />}
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Psychic Powers */}
            {faction.spells.length > 0 && (
              <Card className="bg-card border-border shadow-elevation">
                <CardHeader>
                  <CardTitle className="text-primary flex items-center gap-2">
                    <Zap className="h-5 w-5" />
                    Psychic Powers
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {faction.spells.map((spell, index) => (
                    <div key={index}>
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="font-semibold text-card-foreground">{spell.name}</h4>
                        <Badge variant="outline" className="text-xs">
                          {spell.warpCharge} • {spell.range}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{spell.description}</p>
                      {index < faction.spells.length - 1 && <Separator className="mt-3" />}
                    </div>
                  ))}
                </CardContent>
              </Card>
            )}
          </div>

          {/* Unit Catalog */}
          <div className="lg:col-span-2">
            <Card className="bg-card border-border shadow-elevation">
              <CardHeader>
                <CardTitle className="text-primary">Unit Catalog</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Complete unit roster with stats, weapons, and abilities
                </p>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[800px]">
                  <div className="space-y-6">
                    {Object.entries(faction.units).map(([category, units]) => (
                      <div key={category}>
                        <h3 className="text-lg font-semibold capitalize mb-4 text-primary">
                          {category.replace(/([A-Z])/g, ' $1').trim()}
                        </h3>
                        <div className="space-y-4">
                          {units.map((unit) => (
                            <Card key={unit.id} className="bg-muted/30 border-border">
                              <CardContent className="p-4">
                                <div className="flex justify-between items-start mb-3">
                                  <div>
                                    <h4 className="font-semibold text-card-foreground">{unit.name}</h4>
                                    <div className="flex gap-2 mt-1">
                                      <Badge variant="secondary" className="text-xs">
                                        {unit.points} pts
                                      </Badge>
                                      <Badge variant="outline" className="text-xs">
                                        {unit.models} models
                                      </Badge>
                                    </div>
                                  </div>
                                </div>

                                {/* Stats */}
                                <div className="mb-3">
                                  <h5 className="text-sm font-medium mb-2">Statistics</h5>
                                  <StatBlock unit={unit} />
                                </div>

                                {/* Weapons */}
                                {unit.weapons && unit.weapons.length > 0 && (
                                  <div className="mb-3">
                                    <h5 className="text-sm font-medium mb-2">Weapons</h5>
                                    <div className="space-y-1">
                                      <div className="grid grid-cols-7 gap-2 text-xs font-semibold text-muted-foreground">
                                        <div>Name</div>
                                        <div className="text-center">Range</div>
                                        <div className="text-center">A</div>
                                        <div className="text-center">Hit</div>
                                        <div className="text-center">S</div>
                                        <div className="text-center">AP</div>
                                        <div className="text-center">D</div>
                                      </div>
                                      {unit.weapons.map((weapon, idx) => (
                                        <WeaponProfile key={idx} weapon={weapon} />
                                      ))}
                                    </div>
                                  </div>
                                )}

                                {/* Keywords */}
                                <div className="mb-3">
                                  <h5 className="text-sm font-medium mb-2">Keywords</h5>
                                  <div className="flex flex-wrap gap-1">
                                    {unit.keywords.map((keyword, idx) => (
                                      <Badge key={idx} variant="outline" className="text-xs">
                                        {keyword}
                                      </Badge>
                                    ))}
                                  </div>
                                </div>

                                {/* Abilities */}
                                <div>
                                  <h5 className="text-sm font-medium mb-2">Abilities</h5>
                                  <div className="text-xs text-muted-foreground">
                                    {unit.abilities.join(', ')}
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArmyInfo;