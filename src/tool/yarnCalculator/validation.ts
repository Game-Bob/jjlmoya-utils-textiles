export const validation = {
  reviewedAt: '2026-09-01',
  methodology: 'Reference yarn lengths are compared with the published project table, then adjusted for cable-work overhead and ball capacity using the calculator formulas.',
  sources: [
    'https://www.craftyarncouncil.com/standards/yarn-weight-system',
    'https://woolery.com/blogs/the-woolery-blog/yarn-weight-charts-helpful-guide/',
  ],
  referenceCases: [
    { project: 'sweater', size: 'm', weight: 'fingering', expectedBaseMeters: 1250 },
    { project: 'hat', size: 'm', weight: 'dk', expectedBaseMeters: 190 },
    { project: 'scarf', size: 'm', weight: 'worsted', expectedBaseMeters: 400 },
  ],
  limitations: [
    'The result is a planning estimate, not a substitute for a gauge swatch or the exact pattern yardage.',
    'Actual consumption varies with stitch pattern, tension, finishing, and individual construction choices.',
  ],
};
