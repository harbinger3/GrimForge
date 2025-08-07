/**
 * Fallback faction data for when BSData is unavailable
 * This ensures the app always works while BSData is being loaded
 */

import type { ParsedFaction } from '@/services/bsDataParser';

export const fallbackFactions: Record<string, ParsedFaction> = {
  'space-marines': {
    id: 'space-marines',
    name: 'Space Marines',
    color: 'accent',
    units: {
      epicHeroes: [],
      characters: [],
      troops: [],
      elites: [],
      fastAttack: [],
      heavySupport: [],
      flyer: [],
      transport: [],
      fortification: []
    }
  }
};