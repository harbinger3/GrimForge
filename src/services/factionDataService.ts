/**
 * Faction Data Service
 * Manages loading and caching of faction data from BSData
 */

import { bsDataParser, type ParsedFaction } from './bsDataParser';
import { munitiorumParser } from './munitiorumParser';
import { fallbackFactions } from '@/data/fallbackFactions';

class FactionDataService {
  private factionData: Record<string, ParsedFaction> = {};
  private isLoading = false;
  private loadPromise: Promise<void> | null = null;

  async loadFactionData(): Promise<Record<string, ParsedFaction>> {
    // If already loading, wait for the existing promise
    if (this.isLoading && this.loadPromise) {
      await this.loadPromise;
      return this.factionData;
    }

    // If already loaded, return cached data
    if (Object.keys(this.factionData).length > 0) {
      return this.factionData;
    }

    // Start loading
    this.isLoading = true;
    this.loadPromise = this.performLoad();

    try {
      await this.loadPromise;
      return this.factionData;
    } finally {
      this.isLoading = false;
      this.loadPromise = null;
    }
  }

  private async performLoad(): Promise<void> {
    try {
      console.log('Loading faction data from Munitorum Field Manual...');
      const startTime = Date.now();
      
      // Use Munitorum Field Manual data instead of BSData
      this.factionData = munitiorumParser.getAllFactions();
      
      const loadTime = Date.now() - startTime;
      console.log(`Faction data loaded in ${loadTime}ms`);
      
      // Cache the data in localStorage for faster subsequent loads
      try {
        localStorage.setItem('wh40k-faction-data', JSON.stringify({
          data: this.factionData,
          timestamp: Date.now()
        }));
      } catch (error) {
        console.warn('Failed to cache faction data:', error);
      }
    } catch (error) {
      console.error('Failed to load faction data:', error);
      // If loading fails, use fallback data
      console.log('Using fallback faction data');
      this.factionData = fallbackFactions;
    }
  }

  private loadFromCache(): void {
    try {
      const cached = localStorage.getItem('wh40k-faction-data');
      if (cached) {
        const { data, timestamp } = JSON.parse(cached);
        // Force refresh - clear cache to load updated faction mappings
        console.log('Clearing cached faction data to load updated mappings');
        localStorage.removeItem('wh40k-faction-data');
      }
    } catch (error) {
      console.warn('Failed to load from cache:', error);
    }
  }

  getFaction(factionId: string): ParsedFaction | null {
    return this.factionData[factionId] || null;
  }

  getAllFactions(): Record<string, ParsedFaction> {
    return this.factionData;
  }

  getFactionList(): Array<{ id: string; name: string; color: string }> {
    return Object.values(this.factionData).map(faction => ({
      id: faction.id,
      name: faction.name,
      color: faction.color
    }));
  }

  isDataLoaded(): boolean {
    return Object.keys(this.factionData).length > 0;
  }
}

export const factionDataService = new FactionDataService();