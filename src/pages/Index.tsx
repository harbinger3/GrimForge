import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Users, Shield, Sword } from 'lucide-react';

// Game systems data
const gameSystems = [
  {
    id: "warhammer-40k",
    name: "Warhammer 40,000",
    description: "In the grim darkness of the far future, there is only war",
    version: "10th Edition",
    factionCount: 25,
    color: "bg-gradient-to-r from-red-600 to-orange-600"
  },
  {
    id: "age-of-sigmar",
    name: "Age of Sigmar",
    description: "Forge your legend in the Mortal Realms",
    version: "4th Edition",
    factionCount: 25,
    color: "bg-gradient-to-r from-purple-600 to-blue-600"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-void">
      {/* Header */}
      <div className="relative overflow-hidden bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 text-center">
          <h1 className="text-6xl font-bold text-foreground mb-4 animate-glow">
            FORGE THE SPEARHEAD
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Build armies for the grim darkness of the far future
          </p>
          <Badge variant="secondary" className="bg-gradient-plasma animate-plasma-pulse">
            Army Builder v2.0
          </Badge>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Game Systems Selection */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-center text-primary mb-4">Choose Your Game System</h2>
          <p className="text-center text-muted-foreground mb-8">Select a game system to explore factions and build your army</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {gameSystems.map((system) => (
            <Link key={system.id} to={`/system/${system.id}`}>
              <Card className="bg-card border-border shadow-elevation hover:shadow-plasma transition-all duration-300 group cursor-pointer h-full">
                <div className={`h-48 ${system.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/40" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <h3 className="text-3xl font-bold text-white mb-2">{system.name}</h3>
                      <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                        {system.version}
                      </Badge>
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-8">
                  <p className="text-muted-foreground mb-6 text-center">{system.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-sm">
                      {system.factionCount} Factions Available
                    </Badge>
                    <div className="flex items-center text-primary">
                      <span className="text-sm mr-2">Explore Factions</span>
                      <Users className="h-4 w-4" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-card/50 border-border text-center">
            <CardContent className="p-6">
              <Shield className="h-8 w-8 mx-auto mb-2 text-primary" />
              <h3 className="text-2xl font-bold text-primary">2</h3>
              <p className="text-muted-foreground">Game Systems</p>
            </CardContent>
          </Card>
          
          <Card className="bg-card/50 border-border text-center">
            <CardContent className="p-6">
              <Sword className="h-8 w-8 mx-auto mb-2 text-primary" />
              <h3 className="text-2xl font-bold text-primary">50</h3>
              <p className="text-muted-foreground">Total Factions</p>
            </CardContent>
          </Card>
          
          <Card className="bg-card/50 border-border text-center">
            <CardContent className="p-6">
              <Users className="h-8 w-8 mx-auto mb-2 text-primary" />
              <h3 className="text-2xl font-bold text-primary">∞</h3>
              <p className="text-muted-foreground">Army Combinations</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
