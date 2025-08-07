import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import ArmyBuilderComponent from '@/components/ArmyBuilder';

const ArmyBuilder = () => {
  const { factionId } = useParams<{ factionId: string }>();

  return (
    <div className="min-h-screen bg-gradient-void">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center gap-4 mb-6">
          <Link to={`/army/${factionId}`}>
            <Button variant="ghost" size="sm" className="text-foreground hover:bg-muted">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Army Info
            </Button>
          </Link>
        </div>
        <ArmyBuilderComponent factionId={factionId!} />
      </div>
    </div>
  );
};

export default ArmyBuilder;