import { Report, ErrorReport, ReportData } from '../models/report.model';

const generateDailyData = (startDate: Date, days: number): ReportData[] => {
  return Array.from({ length: days }, (_, i) => ({
    date: new Date(startDate.getTime() + i * 24 * 60 * 60 * 1000),
    count: Math.floor(Math.random() * 50) + 10,
    location: ['Dakar', 'Louga', 'Thies'][Math.floor(Math.random() * 3)],
    status: ['assigned', 'pending', 'invalid'][Math.floor(Math.random() * 3)],
  }));
};

const generateErrorReports = (): ErrorReport[] => [
  {
    id: 'ERR001',
    type: 'duplicate',
    date: new Date('2024-01-15'),
    affectedNuis: ['NUI004', 'NUI005'],
    description: 'Doublon détecté lors de la génération',
    resolution: 'NUI005 invalidé automatiquement',
    devices: ['Device003'],
    users: ['John Doe'],
  },
  {
    id: 'ERR002',
    type: 'invalid_assignment',
    date: new Date('2024-01-16'),
    affectedNuis: ['NUI006'],
    description: 'Attribution à un appareil non autorisé',
    devices: ['Device004'],
    users: ['Jane Smith'],
  },
];

export const mockReports: Report[] = [
  {
    id: 'REP001',
    title: 'Attribution NUIs - Janvier 2024',
    period: { start: new Date('2024-01-01'), end: new Date('2024-01-31') },
    type: 'attribution',
    data: generateDailyData(new Date('2024-01-01'), 31),
    filters: { status: ['assigned', 'pending', 'invalid'], location: ['Dakar', 'Louga', 'Thies'], operator: ['Operator1'] },
  },
  {
    id: 'REP002',
    title: 'Rapport d\'erreurs - Janvier 2024',
    period: { start: new Date('2024-01-01'), end: new Date('2024-01-31') },
    type: 'error',
    data: generateErrorReports(),
    filters: { location: ['Dakar', 'Louga', 'Thies'], operator: ['Operator1'] },
  },
];
