import { describe, it, expect } from 'vitest';
import { ALL_TOOLS } from '../tools';
import { textilesCategory } from '../data';
import type { ToolLocaleContent, CategoryLocaleContent } from '../types';

const SEPARATOR_PATTERN = /[|]| - /;

describe('Title Separator Characters', () => {
  describe('Tools', () => {
    ALL_TOOLS.forEach((tool) => {
      describe(`Tool: ${tool.entry.id}`, () => {
        Object.keys(tool.entry.i18n).forEach((locale) => {
          it(`${locale}: title must not contain | or standalone -`, async () => {
            const loader = tool.entry.i18n[locale as keyof typeof tool.entry.i18n];
            const content = (await loader?.()) as ToolLocaleContent;

            expect(
              SEPARATOR_PATTERN.test(content.title),
              `Tool "${tool.entry.id}" locale "${locale}" title contains a forbidden separator (| or " - "): "${content.title}"`,
            ).toBe(false);
          });
        });
      });
    });
  });

  describe('Category', () => {
    Object.keys(textilesCategory.i18n).forEach((locale) => {
      it(`${locale}: category title must not contain | or standalone -`, async () => {
        const loader = textilesCategory.i18n[locale as keyof typeof textilesCategory.i18n];
        const content = (await loader?.()) as CategoryLocaleContent;

        expect(
          SEPARATOR_PATTERN.test(content.title),
          `Category locale "${locale}" title contains a forbidden separator (| or " - "): "${content.title}"`,
        ).toBe(false);
      });
    });
  });
});
