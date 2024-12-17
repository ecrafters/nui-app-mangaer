import { Device, DeviceSync } from '../models/device.model';

export const mockDevices: Device[] = [
  {
    id: 'DEV001',
    macAddress: '00:1B:44:11:3A:B7',
    status: 'active',
    hardware: {
      brand: 'Samsung',
      model: 'Galaxy Tab S7',
      os: 'Android',
      version: '12.0'
    },
    location: 'Paris',
    assignedUser: 'John Doe',
    lastSync: new Date('2024-01-15T14:30:00'),
    nuiCount: 150,
    pendingSyncs: 0,
    registrationDate: new Date('2023-12-01')
  },
  {
    id: 'DEV002',
    macAddress: '00:1B:44:11:3A:B8',
    status: 'offline',
    hardware: {
      brand: 'Apple',
      model: 'iPad Pro',
      os: 'iOS',
      version: '17.2'
    },
    location: 'Lyon',
    assignedUser: 'Jane Smith',
    lastSync: new Date('2024-01-14T16:45:00'),
    nuiCount: 85,
    pendingSyncs: 12,
    registrationDate: new Date('2023-12-15')
  },
  {
    id: 'DEV003',
    macAddress: '00:1B:44:11:3A:B9',
    status: 'maintenance',
    hardware: {
      brand: 'Lenovo',
      model: 'Tab P11',
      os: 'Android',
      version: '11.0'
    },
    location: 'Marseille',
    assignedUser: 'Alice Johnson',
    lastSync: new Date('2024-01-13T09:15:00'),
    nuiCount: 0,
    pendingSyncs: 0,
    registrationDate: new Date('2024-01-01')
  }
];

export const mockDeviceSyncs: DeviceSync[] = [
  {
    id: 'SYNC001',
    deviceId: 'DEV001',
    timestamp: new Date('2024-01-15T14:30:00'),
    type: 'nui',
    status: 'success',
    details: {
      nuisSynced: 25
    }
  },
  {
    id: 'SYNC002',
    deviceId: 'DEV002',
    timestamp: new Date('2024-01-14T16:45:00'),
    type: 'user_data',
    status: 'failed',
    details: {
      error: 'Connexion réseau interrompue'
    }
  }
];