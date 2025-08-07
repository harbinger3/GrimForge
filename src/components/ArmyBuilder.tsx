import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Plus, Minus, ChevronDown, Printer, Download, Trash2, Loader2 } from 'lucide-react';
import { useFactionData } from '@/hooks/useFactionData';
import type { ParsedUnit, ParsedFaction } from '@/services/bsDataParser';

// Legacy unit structure for migration compatibility
type LegacyUnit = ParsedUnit;

type Loadout = {
  id: string;
  name: string;
  wargear: string[];
};

type WargearOption = {
  id: string;
  name: string;
  points: number;
};

type Unit = ParsedUnit;

type ArmyUnit = {
  unit: Unit;
  size: number;
  category: string;
  selectedLoadout?: string;
  selectedWargear: string[];
};

interface ArmyBuilderProps {
  factionId: string;
}

const ArmyBuilder = ({ factionId }: ArmyBuilderProps) => {
  const { factions, isLoading, error, getFaction } = useFactionData();
  const [army, setArmy] = useState<ArmyUnit[]>([]);
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    epicHeroes: true,
    characters: true,
    troops: true,
    elites: false,
    fastAttack: false,
    heavySupport: false,
    flyer: false,
    transport: false,
    fortification: false
  });

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const addUnit = (unit: Unit, category: string) => {
    const newUnit: ArmyUnit = {
      unit,
      size: unit.minSize || 1,
      category,
      selectedLoadout: unit.loadouts?.[0]?.id,
      selectedWargear: []
    };
    setArmy(prev => [...prev, newUnit]);
  };

  const removeUnit = (index: number) => {
    setArmy(prev => prev.filter((_, i) => i !== index));
  };

  const updateUnitSize = (index: number, change: number) => {
    setArmy(prev => prev.map((armyUnit, i) => {
      if (i === index) {
        const newSize = Math.max(
          armyUnit.unit.minSize || 1,
          Math.min(armyUnit.unit.maxSize || 1, armyUnit.size + change)
        );
        return { ...armyUnit, size: newSize };
      }
      return armyUnit;
    }));
  };

  const updateUnitLoadout = (index: number, loadoutId: string) => {
    setArmy(prev => prev.map((armyUnit, i) => {
      if (i === index) {
        return { ...armyUnit, selectedLoadout: loadoutId };
      }
      return armyUnit;
    }));
  };

  const toggleWargear = (index: number, wargearId: string) => {
    setArmy(prev => prev.map((armyUnit, i) => {
      if (i === index) {
        const selectedWargear = armyUnit.selectedWargear.includes(wargearId)
          ? armyUnit.selectedWargear.filter(id => id !== wargearId)
          : [...armyUnit.selectedWargear, wargearId];
        return { ...armyUnit, selectedWargear };
      }
      return armyUnit;
    }));
  };

  const calculateUnitPoints = (armyUnit: ArmyUnit) => {
    let basePoints = armyUnit.unit.points;
    
    // Add unit size cost
    if (armyUnit.unit.unitCost) {
      basePoints += armyUnit.unit.unitCost * (armyUnit.size - (armyUnit.unit.minSize || 1));
    }
    
    // Add wargear costs
    if (armyUnit.unit.wargearOptions) {
      const wargearCost = armyUnit.selectedWargear.reduce((total, wargearId) => {
        const wargear = armyUnit.unit.wargearOptions?.find(w => w.id === wargearId);
        return total + (wargear?.points || 0);
      }, 0);
      basePoints += wargearCost;
    }
    
    return basePoints;
  };

  const totalPoints = army.reduce((total, armyUnit) => total + calculateUnitPoints(armyUnit), 0);

  const faction = getFaction(factionId);

  // Handle loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-void p-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Loader2 className="h-6 w-6 animate-spin" />
            <h1 className="text-4xl font-bold text-foreground">
              Loading Faction Data...
            </h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Fetching the latest unit data from BSData repository
          </p>
        </div>
      </div>
    );
  }

  // Handle error state
  if (error) {
    return (
      <div className="min-h-screen bg-gradient-void p-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-foreground mb-2">
            Error Loading Data
          </h1>
          <p className="text-lg text-muted-foreground mb-4">
            {error}
          </p>
          <Button onClick={() => window.location.reload()}>
            Try Again
          </Button>
        </div>
      </div>
    );
  }

  // Handle case where faction doesn't exist
  if (!faction) {
    return (
      <div className="min-h-screen bg-gradient-void p-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-foreground mb-2">
            Faction Not Found
          </h1>
          <p className="text-lg text-muted-foreground">
            The requested faction "{factionId}" could not be found.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-void p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-2 animate-glow">
            WARHAMMER 40,000
          </h1>
          <p className="text-lg text-muted-foreground">Army Builder - {faction.name}</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Unit Browser */}
          <div className="lg:col-span-2 space-y-6">
            {/* Unit Browser */}
            <Card className="bg-card border-border shadow-elevation">
              <CardHeader>
                <CardTitle className="text-primary">{faction.name} Units</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {Object.entries(faction.units).map(([category, units]) => (
                  <Collapsible
                    key={category}
                    open={openSections[category]}
                    onOpenChange={() => toggleSection(category)}
                  >
                    <CollapsibleTrigger asChild>
                      <Button variant="ghost" className="w-full justify-between p-4 h-auto">
                        <span className="text-lg font-semibold capitalize">
                          {category.replace(/([A-Z])/g, ' $1').trim()}
                        </span>
                        <ChevronDown className={`h-4 w-4 transition-transform ${openSections[category] ? 'rotate-180' : ''}`} />
                      </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="space-y-3 mt-3">
                      {units.map((unit) => (
                        <Card key={unit.id} className="bg-muted border-border">
                          <CardContent className="p-4">
                            <div className="flex justify-between items-start mb-3">
                              <div>
                                <h4 className="font-semibold text-card-foreground">{unit.name}</h4>
                                <Badge variant="secondary" className="mt-1">
                                  {unit.points} pts
                                  {unit.unitCost && ` + ${unit.unitCost}/model`}
                                </Badge>
                              </div>
                              <Button
                                size="sm"
                                onClick={() => addUnit(unit, category)}
                                className="shrink-0"
                              >
                                <Plus className="h-4 w-4" />
                              </Button>
                            </div>
                            <div className="text-sm text-muted-foreground space-y-1">
                              <div>{unit.stats}</div>
                              <div><strong>Wargear:</strong> {unit.wargear.join(', ')}</div>
                              <div><strong>Abilities:</strong> {unit.abilities.join(', ')}</div>
                              {unit.loadouts && unit.loadouts.length > 1 && (
                                <div><strong>Loadouts:</strong> {unit.loadouts.length} options available</div>
                              )}
                              {unit.wargearOptions && unit.wargearOptions.length > 0 && (
                                <div><strong>Wargear Options:</strong> {unit.wargearOptions.length} upgrades available</div>
                              )}
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </CollapsibleContent>
                  </Collapsible>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Army List */}
          <div className="space-y-6">
            <Card className="bg-card border-border shadow-plasma sticky top-4">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle className="text-primary">Army Roster</CardTitle>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="text-xs">
                      <Printer className="h-3 w-3 mr-1" />
                      Print
                    </Button>
                    <Button size="sm" variant="outline" className="text-xs">
                      <Download className="h-3 w-3 mr-1" />
                      Export
                    </Button>
                  </div>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-sm text-muted-foreground">{faction.name}</span>
                  <Badge variant="default" className="bg-gradient-plasma animate-plasma-pulse">
                    {totalPoints} Points
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-96">
                  {army.length === 0 ? (
                    <div className="text-center text-muted-foreground py-8">
                      <p>No units selected</p>
                      <p className="text-xs mt-1">Add units from the browser to build your army</p>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {army.map((armyUnit, index) => (
                        <Card key={index} className="bg-muted/50 border-border">
                          <CardContent className="p-3">
                            <div className="flex justify-between items-start mb-2">
                              <div className="flex-1 min-w-0">
                                <h5 className="font-medium text-sm text-card-foreground truncate">
                                  {armyUnit.unit.name}
                                </h5>
                                <Badge variant="outline" className="text-xs mt-1">
                                  {armyUnit.category.replace(/([A-Z])/g, ' $1').trim()}
                                </Badge>
                              </div>
                              <Button
                                size="sm"
                                variant="ghost"
                                onClick={() => removeUnit(index)}
                                className="text-destructive hover:text-destructive h-6 w-6 p-0"
                              >
                                <Trash2 className="h-3 w-3" />
                              </Button>
                            </div>

                            {/* Loadout Selection */}
                            {armyUnit.unit.loadouts && armyUnit.unit.loadouts.length > 1 && (
                              <div className="mb-2">
                                <label className="text-xs text-muted-foreground">Loadout:</label>
                                <select
                                  value={armyUnit.selectedLoadout || ''}
                                  onChange={(e) => updateUnitLoadout(index, e.target.value)}
                                  className="w-full text-xs p-1 rounded bg-background border border-border"
                                >
                                  {armyUnit.unit.loadouts.map((loadout) => (
                                    <option key={loadout.id} value={loadout.id}>
                                      {loadout.name}
                                    </option>
                                  ))}
                                </select>
                              </div>
                            )}

            {/* Wargear Options (Characters and Epic Heroes only) */}
            {(['characters', 'epicHeroes'].includes(armyUnit.category as any)) && armyUnit.unit.wargearOptions && armyUnit.unit.wargearOptions.length > 0 && (
                              <div className="mb-2">
                                <label className="text-xs text-muted-foreground">Wargear:</label>
                                <div className="space-y-1">
                                  {armyUnit.unit.wargearOptions.map((wargear) => (
                                    <div key={wargear.id} className="flex items-center justify-between">
                                      <label className="flex items-center text-xs">
                                        <input
                                          type="checkbox"
                                          checked={armyUnit.selectedWargear.includes(wargear.id)}
                                          onChange={() => toggleWargear(index, wargear.id)}
                                          className="mr-1 h-3 w-3"
                                        />
                                        {wargear.name}
                                      </label>
                                      <span className="text-xs text-muted-foreground">+{wargear.points}pts</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}
                            
                            {armyUnit.unit.unitCost ? (
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    onClick={() => updateUnitSize(index, -1)}
                                    disabled={armyUnit.size <= (armyUnit.unit.minSize || 1)}
                                    className="h-6 w-6 p-0"
                                  >
                                    <Minus className="h-3 w-3" />
                                  </Button>
                                  <span className="text-sm font-medium w-8 text-center">
                                    {armyUnit.size}
                                  </span>
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    onClick={() => updateUnitSize(index, 1)}
                                    disabled={armyUnit.size >= (armyUnit.unit.maxSize || 1)}
                                    className="h-6 w-6 p-0"
                                  >
                                    <Plus className="h-3 w-3" />
                                  </Button>
                                </div>
                                <Badge variant="secondary" className="text-xs">
                                  {calculateUnitPoints(armyUnit)} pts
                                </Badge>
                              </div>
                            ) : (
                              <div className="flex justify-end">
                                <Badge variant="secondary" className="text-xs">
                                  {armyUnit.unit.points} pts
                                </Badge>
                              </div>
                            )}
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  )}
                </ScrollArea>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArmyBuilder;