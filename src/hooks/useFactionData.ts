/**
 * React hook for managing faction data loading
 */

import { useState, useEffect } from 'react';
import { factionDataService } from '@/services/factionDataService';
import type { ParsedFaction } from '@/services/bsDataParser';

interface UseFactionDataResult {
  factions: Record<string, ParsedFaction>;
  isLoading: boolean;
  error: string | null;
  getFaction: (factionId: string) => ParsedFaction | null;
  getFactionList: () => Array<{ id: string; name: string; color: string }>;
}

export const useFactionData = (): UseFactionDataResult => {
  const [factions, setFactions] = useState<Record<string, ParsedFaction>>({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        const data = await factionDataService.loadFactionData();
        setFactions(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load faction data');
        console.error('Error loading faction data:', err);
      } finally {
        setIsLoading(false);
      }
    };

    // Check if data is already loaded
    if (factionDataService.isDataLoaded()) {
      setFactions(factionDataService.getAllFactions());
      setIsLoading(false);
    } else {
      loadData();
    }
  }, []);

  const getFaction = (factionId: string): ParsedFaction | null => {
    return factionDataService.getFaction(factionId);
  };

  const getFactionList = () => {
    return factionDataService.getFactionList();
  };

  return {
    factions,
    isLoading,
    error,
    getFaction,
    getFactionList
  };
};