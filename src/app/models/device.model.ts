export interface Device {
  id: string;
  macAddress: string;
  status: 'active' | 'offline' | 'maintenance';
  hardware: {
    brand: string;
    model: string;
    os: string;
    version: string;
  };
  location: string;
  assignedUser: string;
  lastSync?: Date;
  nuiCount: number;
  pendingSyncs: number;
  registrationDate: Date;
}

export interface DeviceSync {
  id: string;
  deviceId: string;
  timestamp: Date;
  type: 'nui' | 'user_data';
  status: 'success' | 'failed';
  details: {
    nuisSynced?: number;
    userRecords?: number;
    error?: string;
  };
}