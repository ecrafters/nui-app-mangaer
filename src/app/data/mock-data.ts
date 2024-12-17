import { NUI } from '../models/nui.model';

export const mockNUIs: NUI[] = [
  {
    id: 'NUI001',
    status: 'assigned',
    assignmentDate: new Date('2024-01-15'),
    macAddress: '00:1B:44:11:3A:B7',
    location: 'Paris',
    user: 'John Doe',
    history: [
      {
        date: new Date('2024-01-15'),
        action: 'Assigned',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'NUI002',
    status: 'pending',
    assignmentDate: new Date('2024-01-16'),
    macAddress: '00:1B:44:11:3A:B8',
    location: 'Lyon',
    history: [
      {
        date: new Date('2024-01-16'),
        action: 'Created'
      }
    ]
  },
  {
    id: 'NUI003',
    status: 'invalid',
    assignmentDate: new Date('2024-01-14'),
    macAddress: '00:1B:44:11:3A:B9',
    location: 'Marseille',
    user: 'Jane Smith',
    history: [
      {
        date: new Date('2024-01-14'),
        action: 'Assigned',
        device: 'Device002'
      },
      {
        date: new Date('2024-01-15'),
        action: 'Invalidated'
      }
    ]
  }
];