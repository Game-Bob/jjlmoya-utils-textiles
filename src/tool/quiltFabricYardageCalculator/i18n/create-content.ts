import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { SEOSection, ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { QuiltFabricYardageCalculatorUI } from '../ui';

export interface QuiltLocaleCopy {
  slug: string;
  title: string;
  description: string;
  ui: QuiltFabricYardageCalculatorUI;
  faq: Array<{ question: string; answer: string }>;
  howTo: Array<{ name: string; text: string }>;
  seo: SEOSection[];
}

export interface QuiltSeoCopy {
  overviewTitle: string;
  overview: string;
  methodTitle: string;
  method: string;
  tableHeaders: [string, string, string];
  tableRows: Array<[string, string, string]>;
  backingTitle: string;
  backing: string;
  advice: string[];
  patternTitle: string;
  pattern: string;
  limitTitle: string;
  limit: string;
}

export function createSeo(copy: QuiltSeoCopy): SEOSection[] {
  return [
    { type: 'title', text: copy.overviewTitle, level: 2 },
    { type: 'paragraph', html: copy.overview },
    { type: 'title', text: copy.methodTitle, level: 3 },
    { type: 'paragraph', html: copy.method },
    { type: 'table', headers: copy.tableHeaders, rows: copy.tableRows },
    { type: 'title', text: copy.backingTitle, level: 3 },
    { type: 'paragraph', html: copy.backing },
    { type: 'list', items: copy.advice },
    { type: 'title', text: copy.patternTitle, level: 3 },
    { type: 'paragraph', html: copy.pattern },
    { type: 'tip', title: copy.limitTitle, html: copy.limit },
  ];
}

export function createContent(language: string, copy: QuiltLocaleCopy): ToolLocaleContent<QuiltFabricYardageCalculatorUI> {
  const faqSchema: WithContext<FAQPage> = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: copy.faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };
  const howToSchema: WithContext<HowTo> = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: copy.title,
    description: copy.description,
    step: copy.howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })),
  };
  const appSchema: WithContext<SoftwareApplication> = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: copy.title,
    description: copy.description,
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'All',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
    inLanguage: language,
  };
  return { ...copy, bibliography, schemas: [faqSchema, howToSchema, appSchema] };
}
