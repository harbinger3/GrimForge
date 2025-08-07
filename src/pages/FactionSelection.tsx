import { Link, useParams } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Users, Shield, ArrowLeft, Loader2 } from 'lucide-react';
import { useFactionData } from '@/hooks/useFactionData';

const systemNames = {
  "warhammer-40k": "Warhammer 40,000",
  "age-of-sigmar": "Age of Sigmar"
};

// Helper to get faction color based on name
const getFactionColor = (factionName: string): string => {
  const colorMap: Record<string, string> = {
    'Space Marines': 'bg-gradient-to-r from-blue-600 to-blue-800',
    'Orks': 'bg-gradient-to-r from-green-600 to-green-800',
    'Blood Angels': 'bg-gradient-to-r from-red-600 to-red-800',
    'Death Guard': 'bg-gradient-to-r from-green-700 to-green-900',
    'Chaos Space Marines': 'bg-gradient-to-r from-red-800 to-black',
    'T\'au Empire': 'bg-gradient-to-r from-cyan-600 to-blue-700',
    'Necrons': 'bg-gradient-to-r from-green-500 to-green-700',
    'Aeldari': 'bg-gradient-to-r from-purple-600 to-indigo-700',
    'Tyranids': 'bg-gradient-to-r from-purple-700 to-pink-700',
    'Astra Militarum': 'bg-gradient-to-r from-amber-600 to-yellow-700',
    'Adeptus Custodes': 'bg-gradient-to-r from-yellow-500 to-amber-600',
    'Imperial Knights': 'bg-gradient-to-r from-gray-600 to-gray-800',
    'Chaos Knights': 'bg-gradient-to-r from-red-900 to-black',
    'Grey Knights': 'bg-gradient-to-r from-gray-400 to-gray-600',
    'Sisters of Battle': 'bg-gradient-to-r from-red-600 to-red-800',
    'Drukhari': 'bg-gradient-to-r from-purple-800 to-black',
    'Genestealer Cults': 'bg-gradient-to-r from-purple-600 to-purple-800',
    'Leagues of Votann': 'bg-gradient-to-r from-orange-600 to-red-700',
    'Thousand Sons': 'bg-gradient-to-r from-blue-800 to-purple-800',
    'World Eaters': 'bg-gradient-to-r from-red-700 to-red-900',
    'Chaos Daemons': 'bg-gradient-to-r from-purple-900 to-black',
    'Imperial Agents': 'bg-gradient-to-r from-gray-700 to-gray-900'
  };
  
  return colorMap[factionName] || 'bg-gradient-to-r from-gray-600 to-gray-800';
};

const FactionSelection = () => {
  const { systemId } = useParams<{ systemId: string }>();
  const { factions: allFactions, isLoading, error, getFactionList } = useFactionData();
  
  if (!systemId || !systemNames[systemId as keyof typeof systemNames]) {
    return <div>Game system not found</div>;
  }

  // Only show 40k factions for now (AoS will be added later)
  const availableFactions = systemId === 'warhammer-40k' ? getFactionList() : [];
  const systemName = systemNames[systemId as keyof typeof systemNames];
  
  // Handle loading state
  if (systemId === 'warhammer-40k' && isLoading) {
    return (
      <div className="min-h-screen bg-gradient-void">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Game Systems
          </Link>
          
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Loader2 className="h-6 w-6 animate-spin" />
              <h1 className="text-4xl font-bold text-foreground">
                Loading Factions...
              </h1>
            </div>
            <p className="text-lg text-muted-foreground">
              Fetching the latest faction data from BSData repository
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Handle error state
  if (systemId === 'warhammer-40k' && error) {
    return (
      <div className="min-h-screen bg-gradient-void">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Game Systems
          </Link>
          
          <div className="text-center">
            <h1 className="text-4xl font-bold text-foreground mb-2">
              Error Loading Factions
            </h1>
            <p className="text-lg text-muted-foreground mb-4">
              {error}
            </p>
            <Button onClick={() => window.location.reload()}>
              Try Again
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-void">
      {/* Header */}
      <div className="relative overflow-hidden bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
          <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Game Systems
          </Link>
          
          <div className="text-center">
            <h1 className="text-5xl font-bold text-foreground mb-4 animate-glow">
              {systemName} Factions
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Choose your faction and forge your destiny
            </p>
            <Badge variant="secondary" className="bg-gradient-plasma animate-plasma-pulse">
              {systemId === 'warhammer-40k' ? availableFactions.length : 'Coming Soon'} Factions Available
            </Badge>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Factions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {systemId === 'age-of-sigmar' ? (
            <div className="col-span-full text-center py-12">
              <Card className="bg-card/50 border-border border-dashed">
                <CardContent className="p-12">
                  <h3 className="text-2xl font-bold text-muted-foreground mb-2">Age of Sigmar Coming Soon!</h3>
                  <p className="text-muted-foreground">
                    Age of Sigmar factions will be added in a future update.
                  </p>
                </CardContent>
              </Card>
            </div>
          ) : availableFactions.length === 0 ? (
            <div className="col-span-full text-center py-12">
              <Card className="bg-card/50 border-border border-dashed">
                <CardContent className="p-12">
                  <h3 className="text-2xl font-bold text-muted-foreground mb-2">No Factions Available</h3>
                  <p className="text-muted-foreground">
                    Please try refreshing the page or check back later.
                  </p>
                </CardContent>
              </Card>
            </div>
          ) : (
            availableFactions.map((faction) => {
              const factionData = allFactions[faction.id];
              const unitCount = factionData ? Object.values(factionData.units).flat().length : 0;
              const color = getFactionColor(faction.name);
              
              return (
                <Card key={faction.id} className="bg-card border-border shadow-elevation hover:shadow-plasma transition-all duration-300 group">
                  <div className={`h-32 ${color} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/40" />
                    <div className="absolute bottom-4 left-4 z-10">
                      <h3 className="text-xl font-bold text-white">{faction.name}</h3>
                      <p className="text-white/80 text-sm">Official BSData faction</p>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="secondary" className="text-xs">
                        {unitCount} units available
                      </Badge>
                    </div>
                    
                    <div className="space-y-3">
                      <Link to={`/army/${faction.id}`}>
                        <Button className="w-full" variant="default">
                          <Shield className="h-4 w-4 mr-2" />
                          View Army Info
                        </Button>
                      </Link>
                      
                      <Link to={`/army-builder/${faction.id}`}>
                        <Button className="w-full" variant="outline">
                          <Users className="h-4 w-4 mr-2" />
                          Build Army List
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              );
            })
          )}
        </div>

        {/* Info about BSData integration */}
        {systemId === 'warhammer-40k' && availableFactions.length > 0 && (
          <div className="mt-12 text-center">
            <Card className="bg-card/50 border-border">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-foreground mb-2">Powered by BSData</h3>
                <p className="text-muted-foreground">
                  All faction data is automatically synchronized with the official BSData repository, 
                  ensuring up-to-date units, points costs, and rules for competitive play.
                </p>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default FactionSelection;