import { ActivityLog } from '../models/activity-log.model';

export const mockActivityLogs: ActivityLog[] = [
  {
    id: 'LOG001',
    timestamp: new Date('2024-01-15T10:30:00'),
    type: 'nui_generation',
    user: 'admin@example.com',
    action: 'Génération de nouveaux NUIs',
    details: {
      nuis: ['NUI007', 'NUI008', 'NUI009'],
      success: true
    }
  },
  {
    id: 'LOG002',
    timestamp: new Date('2024-01-15T11:45:00'),
    type: 'nui_assignment',
    user: 'operator@example.com',
    action: 'Attribution de NUI',
    details: {
      nuis: ['NUI007'],
      device: 'Device005',
      success: true
    }
  },
  {
    id: 'LOG003',
    timestamp: new Date('2024-01-15T14:20:00'),
    type: 'system_access',
    user: 'unknown',
    action: 'Tentative de connexion échouée',
    details: {
      ipAddress: '192.168.1.100',
      success: false,
      reason: 'Identifiants invalides'
    }
  }
];