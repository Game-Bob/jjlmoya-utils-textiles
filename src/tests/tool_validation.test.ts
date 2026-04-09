import { describe, it, expect } from 'vitest';
import { ALL_TOOLS } from '../tools';
import { textilesCategory } from '../data';

describe('Tool Validation Suite', () => {
  describe('Library Registration', () => {
    it('should have 9 tools in ALL_TOOLS', () => {
      expect(ALL_TOOLS.length).toBe(12);
    });

    it('textilesCategory should be defined', () => {
      expect(textilesCategory).toBeDefined();
      expect(textilesCategory.i18n).toBeDefined();
    });
  });
});

