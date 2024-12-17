import { Device, DeviceSync } from '../models/device.model';

export const mockDevices: Device[] = [
  {
    id: 'DEV001',
    macAddress: '00:39:4E:0F:EF:0F',
    status: 'active',
    hardware: {
      brand: 'Samsung',
      model: 'Galaxy Tab A8',
      os: 'iOS',
      version: '16.0'
    },
    location: 'Kaffrine',
    assignedUser: 'Awa Diop',
    lastSync: new Date('2024-01-29T00:00:00'),
    nuiCount: 80,
    pendingSyncs: 6,
    registrationDate: new Date('2024-01-16')
  },
  {
    id: 'DEV002',
    macAddress: '00:B0:CB:4B:04:B3',
    status: 'active',
    hardware: {
      brand: 'Huawei',
      model: 'MatePad Pro',
      os: 'iOS',
      version: '12.4'
    },
    location: 'Matam',
    assignedUser: 'Fatou Sall',
    lastSync: new Date('2023-12-24T00:00:00'),
    nuiCount: 1,
    pendingSyncs: 6,
    registrationDate: new Date('2023-12-03')
  },
  {
    id: 'DEV003',
    macAddress: '00:E6:AD:83:74:13',
    status: 'offline',
    hardware: {
      brand: 'Samsung',
      model: 'Galaxy Tab S7',
      os: 'HarmonyOS',
      version: '12.4'
    },
    location: 'Fatick',
    assignedUser: 'Fatou Sall',
    lastSync: new Date('2024-02-08T00:00:00'),
    nuiCount: 26,
    pendingSyncs: 8,
    registrationDate: new Date('2024-01-24')
  },
  {
    id: 'DEV004',
    macAddress: '00:13:8A:53:47:5A',
    status: 'active',
    hardware: {
      brand: 'Lenovo',
      model: 'Tab P11',
      os: 'Android',
      version: '17.1'
    },
    location: 'Saint-Louis',
    assignedUser: 'Awa Diop',
    lastSync: new Date('2024-02-20T00:00:00'),
    nuiCount: 81,
    pendingSyncs: 3,
    registrationDate: new Date('2024-01-30')
  },
  {
    id: 'DEV005',
    macAddress: '00:EE:52:1E:19:A9',
    status: 'offline',
    hardware: {
      brand: 'Lenovo',
      model: 'ThinkPad X1',
      os: 'iOS',
      version: '16.4'
    },
    location: 'Dakar',
    assignedUser: 'Ibrahima Sarr',
    lastSync: new Date('2024-02-08T00:00:00'),
    nuiCount: 53,
    pendingSyncs: 16,
    registrationDate: new Date('2024-01-22')
  },
  {
    id: 'DEV006',
    macAddress: '00:58:8F:FC:84:0B',
    status: 'active',
    hardware: {
      brand: 'Apple',
      model: 'iPad Air',
      os: 'HarmonyOS',
      version: '10.4'
    },
    location: 'Tambacounda',
    assignedUser: 'Ibrahima Sarr',
    lastSync: new Date('2024-02-09T00:00:00'),
    nuiCount: 30,
    pendingSyncs: 7,
    registrationDate: new Date('2024-01-25')
  },
  {
    id: 'DEV007',
    macAddress: '00:60:DB:BA:F3:41',
    status: 'active',
    hardware: {
      brand: 'Tecno',
      model: 'Camon 18',
      os: 'iOS',
      version: '10.5'
    },
    location: 'Saint-Louis',
    assignedUser: 'Fatou Sall',
    lastSync: new Date('2024-02-13T00:00:00'),
    nuiCount: 41,
    pendingSyncs: 3,
    registrationDate: new Date('2024-01-14')
  },
  {
    id: 'DEV008',
    macAddress: '00:91:E0:C6:A4:38',
    status: 'active',
    hardware: {
      brand: 'Huawei',
      model: 'MatePad Pro',
      os: 'iOS',
      version: '10.4'
    },
    location: 'Kaffrine',
    assignedUser: 'Awa Diop',
    lastSync: new Date('2023-12-14T00:00:00'),
    nuiCount: 38,
    pendingSyncs: 7,
    registrationDate: new Date('2023-12-03')
  },
  {
    id: 'DEV009',
    macAddress: '00:C6:CF:E8:E8:26',
    status: 'active',
    hardware: {
      brand: 'Lenovo',
      model: 'Yoga Smart Tab',
      os: 'HarmonyOS',
      version: '10.5'
    },
    location: 'Kolda',
    assignedUser: 'Amadou Ba',
    lastSync: new Date('2024-01-04T00:00:00'),
    nuiCount: 95,
    pendingSyncs: 0,
    registrationDate: new Date('2023-12-27')
  },
  {
    id: 'DEV010',
    macAddress: '00:2E:5B:61:6C:68',
    status: 'active',
    hardware: {
      brand: 'Lenovo',
      model: 'ThinkPad X1',
      os: 'Android',
      version: '17.2'
    },
    location: 'Dakar',
    assignedUser: 'Amadou Ba',
    lastSync: new Date('2023-12-24T00:00:00'),
    nuiCount: 76,
    pendingSyncs: 15,
    registrationDate: new Date('2023-12-09')
  },
  {
    id: 'DEV011',
    macAddress: '00:71:11:AC:78:3E',
    status: 'active',
    hardware: {
      brand: 'Tecno',
      model: 'Pouvoir 4',
      os: 'iOS',
      version: '12.0'
    },
    location: 'Kaolack',
    assignedUser: 'Ibrahima Sarr',
    lastSync: new Date('2023-12-14T00:00:00'),
    nuiCount: 98,
    pendingSyncs: 4,
    registrationDate: new Date('2023-12-13')
  },
  {
    id: 'DEV012',
    macAddress: '00:82:6E:00:DB:21',
    status: 'offline',
    hardware: {
      brand: 'Apple',
      model: 'iPad Pro',
      os: 'Android',
      version: '15.5'
    },
    location: 'Ziguinchor',
    assignedUser: 'Amadou Ba',
    lastSync: new Date('2024-01-30T00:00:00'),
    nuiCount: 13,
    pendingSyncs: 18,
    registrationDate: new Date('2024-01-01')
  },
  {
    id: 'DEV013',
    macAddress: '00:69:38:AE:F1:E2',
    status: 'active',
    hardware: {
      brand: 'Tecno',
      model: 'Camon 18',
      os: 'HarmonyOS',
      version: '15.4'
    },
    location: 'Kaffrine',
    assignedUser: 'Awa Diop',
    lastSync: new Date('2024-02-15T00:00:00'),
    nuiCount: 52,
    pendingSyncs: 16,
    registrationDate: new Date('2024-01-25')
  },
  {
    id: 'DEV014',
    macAddress: '00:FA:8B:C9:3C:7E',
    status: 'active',
    hardware: {
      brand: 'Tecno',
      model: 'Spark 10',
      os: 'iOS',
      version: '12.2'
    },
    location: 'Tambacounda',
    assignedUser: 'Amadou Ba',
    lastSync: new Date('2024-01-17T00:00:00'),
    nuiCount: 64,
    pendingSyncs: 0,
    registrationDate: new Date('2024-01-10')
  },
  {
    id: 'DEV015',
    macAddress: '00:BA:D3:48:6B:52',
    status: 'active',
    hardware: {
      brand: 'Apple',
      model: 'iPhone 13',
      os: 'HarmonyOS',
      version: '13.2'
    },
    location: 'Ziguinchor',
    assignedUser: 'Fatou Sall',
    lastSync: new Date('2024-02-09T00:00:00'),
    nuiCount: 183,
    pendingSyncs: 9,
    registrationDate: new Date('2024-01-10')
  },
  {
    id: 'DEV016',
    macAddress: '00:39:F8:FB:90:D1',
    status: 'active',
    hardware: {
      brand: 'Huawei',
      model: 'MatePad Pro',
      os: 'HarmonyOS',
      version: '16.5'
    },
    location: 'Dakar',
    assignedUser: 'Amadou Ba',
    lastSync: new Date('2024-01-17T00:00:00'),
    nuiCount: 34,
    pendingSyncs: 11,
    registrationDate: new Date('2023-12-19')
  },
  {
    id: 'DEV017',
    macAddress: '00:1B:E8:89:5F:89',
    status: 'active',
    hardware: {
      brand: 'Tecno',
      model: 'Camon 18',
      os: 'Android',
      version: '12.3'
    },
    location: 'Tambacounda',
    assignedUser: 'Amadou Ba',
    lastSync: new Date('2024-01-27T00:00:00'),
    nuiCount: 156,
    pendingSyncs: 16,
    registrationDate: new Date('2024-01-09')
  },
  {
    id: 'DEV018',
    macAddress: '00:CC:65:C6:C2:16',
    status: 'active',
    hardware: {
      brand: 'Apple',
      model: 'iPad Pro',
      os: 'iOS',
      version: '10.0'
    },
    location: 'Fatick',
    assignedUser: 'Amadou Ba',
    lastSync: new Date('2023-12-14T00:00:00'),
    nuiCount: 124,
    pendingSyncs: 13,
    registrationDate: new Date('2023-12-03')
  },
  {
    id: 'DEV019',
    macAddress: '00:95:1F:1E:44:7A',
    status: 'active',
    hardware: {
      brand: 'Lenovo',
      model: 'Tab P11',
      os: 'HarmonyOS',
      version: '10.3'
    },
    location: 'Fatick',
    assignedUser: 'Fatou Sall',
    lastSync: new Date('2023-12-15T00:00:00'),
    nuiCount: 194,
    pendingSyncs: 0,
    registrationDate: new Date('2023-12-06')
  },
  {
    id: 'DEV020',
    macAddress: '00:DF:51:EE:7D:80',
    status: 'active',
    hardware: {
      brand: 'Samsung',
      model: 'Galaxy Tab S7',
      os: 'HarmonyOS',
      version: '12.4'
    },
    location: 'Saint-Louis',
    assignedUser: 'Awa Diop',
    lastSync: new Date('2024-01-11T00:00:00'),
    nuiCount: 61,
    pendingSyncs: 15,
    registrationDate: new Date('2023-12-21')
  },
  {
    id: 'DEV021',
    macAddress: '00:0D:A5:13:33:7E',
    status: 'active',
    hardware: {
      brand: 'Samsung',
      model: 'Galaxy Tab S7',
      os: 'HarmonyOS',
      version: '15.0'
    },
    location: 'Louga',
    assignedUser: 'Awa Diop',
    lastSync: new Date('2024-01-21T00:00:00'),
    nuiCount: 138,
    pendingSyncs: 10,
    registrationDate: new Date('2024-01-08')
  },
  {
    id: 'DEV022',
    macAddress: '00:BB:63:74:40:26',
    status: 'active',
    hardware: {
      brand: 'Tecno',
      model: 'Pouvoir 4',
      os: 'iOS',
      version: '12.5'
    },
    location: 'Diourbel',
    assignedUser: 'Awa Diop',
    lastSync: new Date('2024-01-15T00:00:00'),
    nuiCount: 3,
    pendingSyncs: 12,
    registrationDate: new Date('2023-12-20')
  },
  {
    id: 'DEV023',
    macAddress: '00:B9:7C:5D:BC:BB',
    status: 'active',
    hardware: {
      brand: 'Tecno',
      model: 'Spark 10',
      os: 'HarmonyOS',
      version: '12.1'
    },
    location: 'Tambacounda',
    assignedUser: 'Ibrahima Sarr',
    lastSync: new Date('2024-01-21T00:00:00'),
    nuiCount: 158,
    pendingSyncs: 0,
    registrationDate: new Date('2023-12-26')
  },
  {
    id: 'DEV024',
    macAddress: '00:07:E4:16:E7:C7',
    status: 'active',
    hardware: {
      brand: 'Apple',
      model: 'iPhone 13',
      os: 'iOS',
      version: '15.5'
    },
    location: 'Matam',
    assignedUser: 'Awa Diop',
    lastSync: new Date('2023-12-25T00:00:00'),
    nuiCount: 23,
    pendingSyncs: 3,
    registrationDate: new Date('2023-12-06')
  },
  {
    id: 'DEV025',
    macAddress: '00:8D:7A:ED:B9:90',
    status: 'active',
    hardware: {
      brand: 'Tecno',
      model: 'Camon 18',
      os: 'HarmonyOS',
      version: '15.4'
    },
    location: 'Ziguinchor',
    assignedUser: 'Amadou Ba',
    lastSync: new Date('2024-02-09T00:00:00'),
    nuiCount: 123,
    pendingSyncs: 2,
    registrationDate: new Date('2024-01-12')
  },
  {
    id: 'DEV026',
    macAddress: '00:86:0F:47:69:BC',
    status: 'active',
    hardware: {
      brand: 'Tecno',
      model: 'Camon 18',
      os: 'iOS',
      version: '10.5'
    },
    location: 'Thiès',
    assignedUser: 'Fatou Sall',
    lastSync: new Date('2023-12-10T00:00:00'),
    nuiCount: 172,
    pendingSyncs: 20,
    registrationDate: new Date('2023-12-07')
  },
  {
    id: 'DEV027',
    macAddress: '00:9A:46:78:44:4F',
    status: 'active',
    hardware: {
      brand: 'Huawei',
      model: 'Nova 7',
      os: 'Android',
      version: '14.0'
    },
    location: 'Matam',
    assignedUser: 'Moussa Ndiaye',
    lastSync: new Date('2024-01-22T00:00:00'),
    nuiCount: 64,
    pendingSyncs: 15,
    registrationDate: new Date('2024-01-16')
  },
  {
    id: 'DEV028',
    macAddress: '00:EF:D9:99:77:07',
    status: 'active',
    hardware: {
      brand: 'Huawei',
      model: 'P30 Lite',
      os: 'HarmonyOS',
      version: '17.5'
    },
    location: 'Diourbel',
    assignedUser: 'Ibrahima Sarr',
    lastSync: new Date('2023-12-21T00:00:00'),
    nuiCount: 109,
    pendingSyncs: 4,
    registrationDate: new Date('2023-12-20')
  },
  {
    id: 'DEV029',
    macAddress: '00:7B:34:3D:A8:AF',
    status: 'active',
    hardware: {
      brand: 'Tecno',
      model: 'Pouvoir 4',
      os: 'Android',
      version: '17.1'
    },
    location: 'Ziguinchor',
    assignedUser: 'Amadou Ba',
    lastSync: new Date('2024-01-22T00:00:00'),
    nuiCount: 147,
    pendingSyncs: 14,
    registrationDate: new Date('2024-01-06')
  },
  {
    id: 'DEV030',
    macAddress: '00:0E:19:30:C1:68',
    status: 'active',
    hardware: {
      brand: 'Samsung',
      model: 'Galaxy Tab S7',
      os: 'HarmonyOS',
      version: '16.2'
    },
    location: 'Thiès',
    assignedUser: 'Awa Diop',
    lastSync: new Date('2024-01-24T00:00:00'),
    nuiCount: 107,
    pendingSyncs: 10,
    registrationDate: new Date('2024-01-03')
  },
  {
    id: 'DEV031',
    macAddress: '00:91:54:EE:93:D6',
    status: 'active',
    hardware: {
      brand: 'Samsung',
      model: 'Galaxy Tab S7',
      os: 'Android',
      version: '14.5'
    },
    location: 'Fatick',
    assignedUser: 'Amadou Ba',
    lastSync: new Date('2024-01-08T00:00:00'),
    nuiCount: 23,
    pendingSyncs: 17,
    registrationDate: new Date('2023-12-10')
  },
  {
    id: 'DEV032',
    macAddress: '00:DA:18:85:A7:40',
    status: 'active',
    hardware: {
      brand: 'Lenovo',
      model: 'Tab P11',
      os: 'Android',
      version: '13.4'
    },
    location: 'Kaffrine',
    assignedUser: 'Ibrahima Sarr',
    lastSync: new Date('2024-02-01T00:00:00'),
    nuiCount: 20,
    pendingSyncs: 2,
    registrationDate: new Date('2024-01-06')
  },
  {
    id: 'DEV033',
    macAddress: '00:5B:6D:E2:16:64',
    status: 'active',
    hardware: {
      brand: 'Apple',
      model: 'iPad Pro',
      os: 'HarmonyOS',
      version: '17.2'
    },
    location: 'Diourbel',
    assignedUser: 'Fatou Sall',
    lastSync: new Date('2024-01-29T00:00:00'),
    nuiCount: 63,
    pendingSyncs: 20,
    registrationDate: new Date('2024-01-12')
  },
  {
    id: 'DEV034',
    macAddress: '00:4B:CB:92:09:82',
    status: 'active',
    hardware: {
      brand: 'Samsung',
      model: 'Galaxy Tab A8',
      os: 'iOS',
      version: '14.5'
    },
    location: 'Kaffrine',
    assignedUser: 'Ibrahima Sarr',
    lastSync: new Date('2024-01-21T00:00:00'),
    nuiCount: 194,
    pendingSyncs: 16,
    registrationDate: new Date('2023-12-27')
  },
  {
    id: 'DEV035',
    macAddress: '00:47:CA:C6:76:40',
    status: 'active',
    hardware: {
      brand: 'Lenovo',
      model: 'ThinkPad X1',
      os: 'Android',
      version: '13.3'
    },
    location: 'Ziguinchor',
    assignedUser: 'Awa Diop',
    lastSync: new Date('2024-01-25T00:00:00'),
    nuiCount: 174,
    pendingSyncs: 13,
    registrationDate: new Date('2023-12-30')
  },
  {
    id: 'DEV036',
    macAddress: '00:C3:BB:11:36:9B',
    status: 'active',
    hardware: {
      brand: 'Huawei',
      model: 'Nova 7',
      os: 'Android',
      version: '10.1'
    },
    location: 'Tambacounda',
    assignedUser: 'Moussa Ndiaye',
    lastSync: new Date('2024-01-16T00:00:00'),
    nuiCount: 74,
    pendingSyncs: 16,
    registrationDate: new Date('2023-12-19')
  },
  {
    id: 'DEV037',
    macAddress: '00:58:51:E9:F9:D6',
    status: 'active',
    hardware: {
      brand: 'Samsung',
      model: 'Galaxy Note 20',
      os: 'HarmonyOS',
      version: '15.5'
    },
    location: 'Kaolack',
    assignedUser: 'Moussa Ndiaye',
    lastSync: new Date('2024-02-13T00:00:00'),
    nuiCount: 134,
    pendingSyncs: 15,
    registrationDate: new Date('2024-01-16')
  },
  {
    id: 'DEV038',
    macAddress: '00:22:21:D6:7C:D9',
    status: 'active',
    hardware: {
      brand: 'Lenovo',
      model: 'Yoga Smart Tab',
      os: 'iOS',
      version: '14.4'
    },
    location: 'Dakar',
    assignedUser: 'Moussa Ndiaye',
    lastSync: new Date('2024-01-05T00:00:00'),
    nuiCount: 44,
    pendingSyncs: 11,
    registrationDate: new Date('2023-12-15')
  },
  {
    id: 'DEV039',
    macAddress: '00:81:05:6E:5D:56',
    status: 'active',
    hardware: {
      brand: 'Tecno',
      model: 'Spark 10',
      os: 'HarmonyOS',
      version: '12.2'
    },
    location: 'Kolda',
    assignedUser: 'Ibrahima Sarr',
    lastSync: new Date('2023-12-26T00:00:00'),
    nuiCount: 125,
    pendingSyncs: 1,
    registrationDate: new Date('2023-12-10')
  },
  {
    id: 'DEV040',
    macAddress: '00:02:7C:AE:1A:E9',
    status: 'active',
    hardware: {
      brand: 'Lenovo',
      model: 'ThinkPad X1',
      os: 'iOS',
      version: '15.1'
    },
    location: 'Saint-Louis',
    assignedUser: 'Moussa Ndiaye',
    lastSync: new Date('2024-01-04T00:00:00'),
    nuiCount: 27,
    pendingSyncs: 6,
    registrationDate: new Date('2023-12-21')
  },
  {
    id: 'DEV041',
    macAddress: '00:37:3B:CF:E9:D6',
    status: 'active',
    hardware: {
      brand: 'Lenovo',
      model: 'Tab P11',
      os: 'HarmonyOS',
      version: '14.1'
    },
    location: 'Louga',
    assignedUser: 'Fatou Sall',
    lastSync: new Date('2024-01-28T00:00:00'),
    nuiCount: 176,
    pendingSyncs: 11,
    registrationDate: new Date('2024-01-18')
  },
  {
    id: 'DEV042',
    macAddress: '00:5B:6F:69:93:6B',
    status: 'active',
    hardware: {
      brand: 'Samsung',
      model: 'Galaxy Tab A8',
      os: 'iOS',
      version: '11.1'
    },
    location: 'Thiès',
    assignedUser: 'Fatou Sall',
    lastSync: new Date('2023-12-11T00:00:00'),
    nuiCount: 192,
    pendingSyncs: 1,
    registrationDate: new Date('2023-12-02')
  },
  {
    id: 'DEV043',
    macAddress: '00:CC:5C:9F:39:F5',
    status: 'active',
    hardware: {
      brand: 'Apple',
      model: 'iPad Pro',
      os: 'Android',
      version: '14.4'
    },
    location: 'Fatick',
    assignedUser: 'Fatou Sall',
    lastSync: new Date('2024-02-05T00:00:00'),
    nuiCount: 100,
    pendingSyncs: 7,
    registrationDate: new Date('2024-01-19')
  },
  {
    id: 'DEV044',
    macAddress: '00:45:2C:61:B0:D9',
    status: 'active',
    hardware: {
      brand: 'Tecno',
      model: 'Spark 10',
      os: 'Android',
      version: '17.2'
    },
    location: 'Kaffrine',
    assignedUser: 'Amadou Ba',
    lastSync: new Date('2024-01-03T00:00:00'),
    nuiCount: 3,
    pendingSyncs: 17,
    registrationDate: new Date('2023-12-22')
  },
  {
    id: 'DEV045',
    macAddress: '00:BB:69:7B:4E:91',
    status: 'active',
    hardware: {
      brand: 'Lenovo',
      model: 'Yoga Smart Tab',
      os: 'iOS',
      version: '13.5'
    },
    location: 'Matam',
    assignedUser: 'Fatou Sall',
    lastSync: new Date('2023-12-27T00:00:00'),
    nuiCount: 147,
    pendingSyncs: 15,
    registrationDate: new Date('2023-12-24')
  },
  {
    id: 'DEV046',
    macAddress: '00:70:1A:59:2C:72',
    status: 'active',
    hardware: {
      brand: 'Lenovo',
      model: 'Tab P11',
      os: 'iOS',
      version: '14.4'
    },
    location: 'Kaffrine',
    assignedUser: 'Amadou Ba',
    lastSync: new Date('2024-01-12T00:00:00'),
    nuiCount: 174,
    pendingSyncs: 10,
    registrationDate: new Date('2024-01-05')
  },
  {
    id: 'DEV047',
    macAddress: '00:81:2C:66:AA:43',
    status: 'active',
    hardware: {
      brand: 'Tecno',
      model: 'Spark 10',
      os: 'Android',
      version: '17.0'
    },
    location: 'Fatick',
    assignedUser: 'Ibrahima Sarr',
    lastSync: new Date('2024-02-03T00:00:00'),
    nuiCount: 3,
    pendingSyncs: 2,
    registrationDate: new Date('2024-01-10')
  },
  {
    id: 'DEV048',
    macAddress: '00:90:59:CC:F1:12',
    status: 'active',
    hardware: {
      brand: 'Tecno',
      model: 'Camon 18',
      os: 'Android',
      version: '17.1'
    },
    location: 'Thiès',
    assignedUser: 'Amadou Ba',
    lastSync: new Date('2023-12-20T00:00:00'),
    nuiCount: 158,
    pendingSyncs: 19,
    registrationDate: new Date('2023-12-17')
  },
  {
    id: 'DEV049',
    macAddress: '00:14:E4:5D:35:57',
    status: 'active',
    hardware: {
      brand: 'Tecno',
      model: 'Spark 10',
      os: 'HarmonyOS',
      version: '15.5'
    },
    location: 'Kaolack',
    assignedUser: 'Awa Diop',
    lastSync: new Date('2024-01-19T00:00:00'),
    nuiCount: 195,
    pendingSyncs: 10,
    registrationDate: new Date('2024-01-15')
  },
  {
    id: 'DEV050',
    macAddress: '00:F8:76:43:78:FD',
    status: 'active',
    hardware: {
      brand: 'Apple',
      model: 'iPad Pro',
      os: 'Android',
      version: '14.1'
    },
    location: 'Fatick',
    assignedUser: 'Ibrahima Sarr',
    lastSync: new Date('2024-02-11T00:00:00'),
    nuiCount: 19,
    pendingSyncs: 16,
    registrationDate: new Date('2024-01-22')
  },
  {
    id: 'DEV051',
    macAddress: '00:D0:CB:D1:14:FB',
    status: 'active',
    hardware: {
      brand: 'Huawei',
      model: 'P30 Lite',
      os: 'Android',
      version: '13.5'
    },
    location: 'Louga',
    assignedUser: 'Awa Diop',
    lastSync: new Date('2023-12-13T00:00:00'),
    nuiCount: 43,
    pendingSyncs: 5,
    registrationDate: new Date('2023-12-09')
  },
  {
    id: 'DEV052',
    macAddress: '00:31:6B:70:7C:8A',
    status: 'active',
    hardware: {
      brand: 'Samsung',
      model: 'Galaxy Tab S7',
      os: 'iOS',
      version: '15.3'
    },
    location: 'Louga',
    assignedUser: 'Moussa Ndiaye',
    lastSync: new Date('2024-02-08T00:00:00'),
    nuiCount: 96,
    pendingSyncs: 1,
    registrationDate: new Date('2024-01-18')
  },
  {
    id: 'DEV053',
    macAddress: '00:F7:77:25:69:2A',
    status: 'active',
    hardware: {
      brand: 'Lenovo',
      model: 'ThinkPad X1',
      os: 'HarmonyOS',
      version: '10.2'
    },
    location: 'Dakar',
    assignedUser: 'Fatou Sall',
    lastSync: new Date('2023-12-27T00:00:00'),
    nuiCount: 48,
    pendingSyncs: 10,
    registrationDate: new Date('2023-12-09')
  },
  {
    id: 'DEV054',
    macAddress: '00:97:DF:2E:E4:B2',
    status: 'active',
    hardware: {
      brand: 'Huawei',
      model: 'P30 Lite',
      os: 'HarmonyOS',
      version: '12.3'
    },
    location: 'Diourbel',
    assignedUser: 'Ibrahima Sarr',
    lastSync: new Date('2024-02-06T00:00:00'),
    nuiCount: 126,
    pendingSyncs: 13,
    registrationDate: new Date('2024-01-29')
  },
  {
    id: 'DEV055',
    macAddress: '00:F9:0B:EB:57:73',
    status: 'active',
    hardware: {
      brand: 'Apple',
      model: 'iPad Pro',
      os: 'Android',
      version: '13.3'
    },
    location: 'Matam',
    assignedUser: 'Moussa Ndiaye',
    lastSync: new Date('2024-01-08T00:00:00'),
    nuiCount: 63,
    pendingSyncs: 3,
    registrationDate: new Date('2023-12-29')
  },
  {
    id: 'DEV056',
    macAddress: '00:54:EF:C8:AB:91',
    status: 'active',
    hardware: {
      brand: 'Apple',
      model: 'iPhone 13',
      os: 'iOS',
      version: '10.4'
    },
    location: 'Kaolack',
    assignedUser: 'Fatou Sall',
    lastSync: new Date('2023-12-07T00:00:00'),
    nuiCount: 75,
    pendingSyncs: 3,
    registrationDate: new Date('2023-12-01')
  },
  {
    id: 'DEV057',
    macAddress: '00:D4:45:DA:0D:07',
    status: 'active',
    hardware: {
      brand: 'Apple',
      model: 'iPad Pro',
      os: 'HarmonyOS',
      version: '11.4'
    },
    location: 'Kaffrine',
    assignedUser: 'Awa Diop',
    lastSync: new Date('2023-12-08T00:00:00'),
    nuiCount: 24,
    pendingSyncs: 2,
    registrationDate: new Date('2023-12-03')
  },
  {
    id: 'DEV058',
    macAddress: '00:D7:0A:E9:56:93',
    status: 'active',
    hardware: {
      brand: 'Apple',
      model: 'iPhone 13',
      os: 'Android',
      version: '17.3'
    },
    location: 'Ziguinchor',
    assignedUser: 'Ibrahima Sarr',
    lastSync: new Date('2023-12-29T00:00:00'),
    nuiCount: 43,
    pendingSyncs: 11,
    registrationDate: new Date('2023-12-16')
  },
  {
    id: 'DEV059',
    macAddress: '00:FD:69:F9:94:BA',
    status: 'active',
    hardware: {
      brand: 'Samsung',
      model: 'Galaxy Tab A8',
      os: 'iOS',
      version: '17.5'
    },
    location: 'Ziguinchor',
    assignedUser: 'Ibrahima Sarr',
    lastSync: new Date('2024-01-03T00:00:00'),
    nuiCount: 97,
    pendingSyncs: 18,
    registrationDate: new Date('2023-12-24')
  },
  {
    id: 'DEV060',
    macAddress: '00:07:D7:81:7F:5C',
    status: 'active',
    hardware: {
      brand: 'Tecno',
      model: 'Camon 18',
      os: 'iOS',
      version: '10.2'
    },
    location: 'Kaffrine',
    assignedUser: 'Ibrahima Sarr',
    lastSync: new Date('2024-01-05T00:00:00'),
    nuiCount: 122,
    pendingSyncs: 1,
    registrationDate: new Date('2023-12-27')
  },
  {
    id: 'DEV061',
    macAddress: '00:E2:FA:3C:18:4B',
    status: 'active',
    hardware: {
      brand: 'Tecno',
      model: 'Pouvoir 4',
      os: 'Android',
      version: '16.2'
    },
    location: 'Sédhiou',
    assignedUser: 'Awa Diop',
    lastSync: new Date('2023-12-25T00:00:00'),
    nuiCount: 137,
    pendingSyncs: 13,
    registrationDate: new Date('2023-12-14')
  },
  {
    id: 'DEV062',
    macAddress: '00:D8:F2:F3:E9:2B',
    status: 'active',
    hardware: {
      brand: 'Tecno',
      model: 'Spark 10',
      os: 'Android',
      version: '15.1'
    },
    location: 'Sédhiou',
    assignedUser: 'Ibrahima Sarr',
    lastSync: new Date('2024-02-08T00:00:00'),
    nuiCount: 65,
    pendingSyncs: 12,
    registrationDate: new Date('2024-01-19')
  },
  {
    id: 'DEV063',
    macAddress: '00:02:F6:BD:E4:0B',
    status: 'active',
    hardware: {
      brand: 'Samsung',
      model: 'Galaxy Note 20',
      os: 'HarmonyOS',
      version: '13.5'
    },
    location: 'Diourbel',
    assignedUser: 'Moussa Ndiaye',
    lastSync: new Date('2024-01-15T00:00:00'),
    nuiCount: 7,
    pendingSyncs: 2,
    registrationDate: new Date('2023-12-17')
  },
  {
    id: 'DEV064',
    macAddress: '00:A2:C3:84:90:2B',
    status: 'active',
    hardware: {
      brand: 'Apple',
      model: 'iPhone 13',
      os: 'iOS',
      version: '10.2'
    },
    location: 'Dakar',
    assignedUser: 'Moussa Ndiaye',
    lastSync: new Date('2024-01-22T00:00:00'),
    nuiCount: 183,
    pendingSyncs: 6,
    registrationDate: new Date('2023-12-26')
  },
  {
    id: 'DEV065',
    macAddress: '00:DF:63:0B:AC:D0',
    status: 'active',
    hardware: {
      brand: 'Tecno',
      model: 'Spark 10',
      os: 'iOS',
      version: '14.1'
    },
    location: 'Fatick',
    assignedUser: 'Amadou Ba',
    lastSync: new Date('2024-02-04T00:00:00'),
    nuiCount: 10,
    pendingSyncs: 6,
    registrationDate: new Date('2024-01-30')
  },
  {
    id: 'DEV066',
    macAddress: '00:41:D6:15:9F:85',
    status: 'active',
    hardware: {
      brand: 'Tecno',
      model: 'Camon 18',
      os: 'Android',
      version: '13.4'
    },
    location: 'Ziguinchor',
    assignedUser: 'Fatou Sall',
    lastSync: new Date('2023-12-25T00:00:00'),
    nuiCount: 185,
    pendingSyncs: 2,
    registrationDate: new Date('2023-12-13')
  },
  {
    id: 'DEV067',
    macAddress: '00:11:28:D0:39:97',
    status: 'active',
    hardware: {
      brand: 'Lenovo',
      model: 'Yoga Smart Tab',
      os: 'iOS',
      version: '10.3'
    },
    location: 'Kaffrine',
    assignedUser: 'Moussa Ndiaye',
    lastSync: new Date('2024-01-27T00:00:00'),
    nuiCount: 75,
    pendingSyncs: 17,
    registrationDate: new Date('2024-01-12')
  },
  {
    id: 'DEV068',
    macAddress: '00:F5:AD:3A:18:2F',
    status: 'active',
    hardware: {
      brand: 'Lenovo',
      model: 'Yoga Smart Tab',
      os: 'HarmonyOS',
      version: '15.1'
    },
    location: 'Louga',
    assignedUser: 'Moussa Ndiaye',
    lastSync: new Date('2023-12-05T00:00:00'),
    nuiCount: 1,
    pendingSyncs: 1,
    registrationDate: new Date('2023-12-04')
  },
  {
    id: 'DEV069',
    macAddress: '00:88:B4:00:BC:5B',
    status: 'active',
    hardware: {
      brand: 'Huawei',
      model: 'Nova 7',
      os: 'iOS',
      version: '14.2'
    },
    location: 'Ziguinchor',
    assignedUser: 'Amadou Ba',
    lastSync: new Date('2024-01-07T00:00:00'),
    nuiCount: 112,
    pendingSyncs: 4,
    registrationDate: new Date('2023-12-10')
  },
  {
    id: 'DEV070',
    macAddress: '00:2B:1E:FB:90:FD',
    status: 'active',
    hardware: {
      brand: 'Samsung',
      model: 'Galaxy Note 20',
      os: 'iOS',
      version: '17.3'
    },
    location: 'Sédhiou',
    assignedUser: 'Awa Diop',
    lastSync: new Date('2024-01-12T00:00:00'),
    nuiCount: 162,
    pendingSyncs: 1,
    registrationDate: new Date('2023-12-21')
  },
  {
    id: 'DEV071',
    macAddress: '00:2B:BA:2F:8A:91',
    status: 'active',
    hardware: {
      brand: 'Samsung',
      model: 'Galaxy Tab A8',
      os: 'HarmonyOS',
      version: '13.1'
    },
    location: 'Saint-Louis',
    assignedUser: 'Amadou Ba',
    lastSync: new Date('2024-01-13T00:00:00'),
    nuiCount: 43,
    pendingSyncs: 17,
    registrationDate: new Date('2023-12-18')
  },
  {
    id: 'DEV072',
    macAddress: '00:55:D0:A6:21:84',
    status: 'active',
    hardware: {
      brand: 'Lenovo',
      model: 'Yoga Smart Tab',
      os: 'HarmonyOS',
      version: '13.4'
    },
    location: 'Diourbel',
    assignedUser: 'Moussa Ndiaye',
    lastSync: new Date('2024-01-31T00:00:00'),
    nuiCount: 7,
    pendingSyncs: 9,
    registrationDate: new Date('2024-01-09')
  },
  {
    id: 'DEV073',
    macAddress: '00:D5:4F:16:E4:22',
    status: 'active',
    hardware: {
      brand: 'Tecno',
      model: 'Pouvoir 4',
      os: 'Android',
      version: '15.3'
    },
    location: 'Fatick',
    assignedUser: 'Awa Diop',
    lastSync: new Date('2024-01-07T00:00:00'),
    nuiCount: 31,
    pendingSyncs: 9,
    registrationDate: new Date('2024-01-04')
  },
  {
    id: 'DEV074',
    macAddress: '00:DE:A6:67:B4:DF',
    status: 'active',
    hardware: {
      brand: 'Lenovo',
      model: 'Tab P11',
      os: 'iOS',
      version: '17.1'
    },
    location: 'Fatick',
    assignedUser: 'Moussa Ndiaye',
    lastSync: new Date('2024-01-14T00:00:00'),
    nuiCount: 66,
    pendingSyncs: 10,
    registrationDate: new Date('2023-12-21')
  },
  {
    id: 'DEV075',
    macAddress: '00:86:60:CB:94:E4',
    status: 'active',
    hardware: {
      brand: 'Samsung',
      model: 'Galaxy Tab A8',
      os: 'HarmonyOS',
      version: '16.3'
    },
    location: 'Louga',
    assignedUser: 'Ibrahima Sarr',
    lastSync: new Date('2024-02-02T00:00:00'),
    nuiCount: 69,
    pendingSyncs: 2,
    registrationDate: new Date('2024-01-20')
  },
  {
    id: 'DEV076',
    macAddress: '00:1D:90:26:F9:1D',
    status: 'active',
    hardware: {
      brand: 'Samsung',
      model: 'Galaxy Note 20',
      os: 'Android',
      version: '14.4'
    },
    location: 'Louga',
    assignedUser: 'Fatou Sall',
    lastSync: new Date('2024-02-11T00:00:00'),
    nuiCount: 99,
    pendingSyncs: 12,
    registrationDate: new Date('2024-01-15')
  },
  {
    id: 'DEV077',
    macAddress: '00:96:59:B2:0A:78',
    status: 'active',
    hardware: {
      brand: 'Samsung',
      model: 'Galaxy Tab S7',
      os: 'Android',
      version: '14.1'
    },
    location: 'Kaffrine',
    assignedUser: 'Awa Diop',
    lastSync: new Date('2023-12-11T00:00:00'),
    nuiCount: 11,
    pendingSyncs: 14,
    registrationDate: new Date('2023-12-07')
  },
  {
    id: 'DEV078',
    macAddress: '00:00:5B:D5:C8:FC',
    status: 'active',
    hardware: {
      brand: 'Samsung',
      model: 'Galaxy Note 20',
      os: 'HarmonyOS',
      version: '15.1'
    },
    location: 'Thiès',
    assignedUser: 'Amadou Ba',
    lastSync: new Date('2024-01-02T00:00:00'),
    nuiCount: 89,
    pendingSyncs: 17,
    registrationDate: new Date('2023-12-14')
  },
  {
    id: 'DEV079',
    macAddress: '00:5D:84:5A:DC:8C',
    status: 'active',
    hardware: {
      brand: 'Samsung',
      model: 'Galaxy Note 20',
      os: 'Android',
      version: '13.1'
    },
    location: 'Matam',
    assignedUser: 'Fatou Sall',
    lastSync: new Date('2024-01-18T00:00:00'),
    nuiCount: 162,
    pendingSyncs: 2,
    registrationDate: new Date('2023-12-24')
  },
  {
    id: 'DEV080',
    macAddress: '00:32:26:0F:3D:8C',
    status: 'active',
    hardware: {
      brand: 'Samsung',
      model: 'Galaxy Tab S7',
      os: 'Android',
      version: '13.4'
    },
    location: 'Dakar',
    assignedUser: 'Awa Diop',
    lastSync: new Date('2024-01-03T00:00:00'),
    nuiCount: 11,
    pendingSyncs: 6,
    registrationDate: new Date('2023-12-29')
  },
  {
    id: 'DEV081',
    macAddress: '00:FB:4F:D8:95:CD',
    status: 'active',
    hardware: {
      brand: 'Samsung',
      model: 'Galaxy Tab S7',
      os: 'iOS',
      version: '16.5'
    },
    location: 'Tambacounda',
    assignedUser: 'Ibrahima Sarr',
    lastSync: new Date('2024-01-15T00:00:00'),
    nuiCount: 41,
    pendingSyncs: 18,
    registrationDate: new Date('2023-12-28')
  },
  {
    id: 'DEV082',
    macAddress: '00:1C:8F:C3:C7:03',
    status: 'active',
    hardware: {
      brand: 'Lenovo',
      model: 'Tab P11',
      os: 'Android',
      version: '16.3'
    },
    location: 'Dakar',
    assignedUser: 'Ibrahima Sarr',
    lastSync: new Date('2024-01-13T00:00:00'),
    nuiCount: 161,
    pendingSyncs: 17,
    registrationDate: new Date('2023-12-14')
  },
  {
    id: 'DEV083',
    macAddress: '00:15:44:3F:2D:B9',
    status: 'active',
    hardware: {
      brand: 'Tecno',
      model: 'Pouvoir 4',
      os: 'HarmonyOS',
      version: '14.0'
    },
    location: 'Sédhiou',
    assignedUser: 'Ibrahima Sarr',
    lastSync: new Date('2023-12-20T00:00:00'),
    nuiCount: 139,
    pendingSyncs: 1,
    registrationDate: new Date('2023-12-08')
  },
  {
    id: 'DEV084',
    macAddress: '00:C7:59:C0:6F:BA',
    status: 'active',
    hardware: {
      brand: 'Apple',
      model: 'iPad Air',
      os: 'Android',
      version: '16.5'
    },
    location: 'Diourbel',
    assignedUser: 'Amadou Ba',
    lastSync: new Date('2024-01-29T00:00:00'),
    nuiCount: 2,
    pendingSyncs: 7,
    registrationDate: new Date('2024-01-06')
  },
  {
    id: 'DEV085',
    macAddress: '00:CA:BE:9B:E3:4B',
    status: 'active',
    hardware: {
      brand: 'Tecno',
      model: 'Spark 10',
      os: 'HarmonyOS',
      version: '13.4'
    },
    location: 'Ziguinchor',
    assignedUser: 'Fatou Sall',
    lastSync: new Date('2024-01-09T00:00:00'),
    nuiCount: 184,
    pendingSyncs: 13,
    registrationDate: new Date('2023-12-27')
  },
  {
    id: 'DEV086',
    macAddress: '00:7E:ED:91:6B:17',
    status: 'active',
    hardware: {
      brand: 'Samsung',
      model: 'Galaxy Tab A8',
      os: 'iOS',
      version: '14.0'
    },
    location: 'Kaolack',
    assignedUser: 'Ibrahima Sarr',
    lastSync: new Date('2024-01-22T00:00:00'),
    nuiCount: 114,
    pendingSyncs: 5,
    registrationDate: new Date('2024-01-04')
  },
  {
    id: 'DEV087',
    macAddress: '00:F2:68:09:5C:83',
    status: 'active',
    hardware: {
      brand: 'Apple',
      model: 'iPad Air',
      os: 'Android',
      version: '15.5'
    },
    location: 'Tambacounda',
    assignedUser: 'Awa Diop',
    lastSync: new Date('2024-01-31T00:00:00'),
    nuiCount: 189,
    pendingSyncs: 16,
    registrationDate: new Date('2024-01-29')
  },
  {
    id: 'DEV088',
    macAddress: '00:98:A9:4D:45:04',
    status: 'active',
    hardware: {
      brand: 'Lenovo',
      model: 'Yoga Smart Tab',
      os: 'Android',
      version: '12.0'
    },
    location: 'Dakar',
    assignedUser: 'Amadou Ba',
    lastSync: new Date('2024-01-08T00:00:00'),
    nuiCount: 14,
    pendingSyncs: 8,
    registrationDate: new Date('2023-12-20')
  },
  {
    id: 'DEV089',
    macAddress: '00:02:BE:40:F9:E5',
    status: 'active',
    hardware: {
      brand: 'Apple',
      model: 'iPad Pro',
      os: 'Android',
      version: '17.5'
    },
    location: 'Sédhiou',
    assignedUser: 'Moussa Ndiaye',
    lastSync: new Date('2024-01-17T00:00:00'),
    nuiCount: 79,
    pendingSyncs: 4,
    registrationDate: new Date('2023-12-29')
  },
  {
    id: 'DEV090',
    macAddress: '00:78:2D:3E:62:CA',
    status: 'active',
    hardware: {
      brand: 'Lenovo',
      model: 'Yoga Smart Tab',
      os: 'iOS',
      version: '13.2'
    },
    location: 'Saint-Louis',
    assignedUser: 'Amadou Ba',
    lastSync: new Date('2024-02-14T00:00:00'),
    nuiCount: 127,
    pendingSyncs: 8,
    registrationDate: new Date('2024-01-27')
  },
  {
    id: 'DEV091',
    macAddress: '00:9B:BD:5C:32:E7',
    status: 'active',
    hardware: {
      brand: 'Samsung',
      model: 'Galaxy Note 20',
      os: 'iOS',
      version: '14.1'
    },
    location: 'Louga',
    assignedUser: 'Moussa Ndiaye',
    lastSync: new Date('2023-12-30T00:00:00'),
    nuiCount: 52,
    pendingSyncs: 14,
    registrationDate: new Date('2023-12-07')
  },
  {
    id: 'DEV092',
    macAddress: '00:8F:80:5E:80:D0',
    status: 'active',
    hardware: {
      brand: 'Apple',
      model: 'iPhone 13',
      os: 'iOS',
      version: '15.0'
    },
    location: 'Matam',
    assignedUser: 'Amadou Ba',
    lastSync: new Date('2024-02-02T00:00:00'),
    nuiCount: 176,
    pendingSyncs: 17,
    registrationDate: new Date('2024-01-17')
  },
  {
    id: 'DEV093',
    macAddress: '00:E9:C7:A3:AA:30',
    status: 'active',
    hardware: {
      brand: 'Samsung',
      model: 'Galaxy Tab S7',
      os: 'iOS',
      version: '12.5'
    },
    location: 'Diourbel',
    assignedUser: 'Ibrahima Sarr',
    lastSync: new Date('2024-01-27T00:00:00'),
    nuiCount: 3,
    pendingSyncs: 13,
    registrationDate: new Date('2024-01-17')
  },
  {
    id: 'DEV094',
    macAddress: '00:9F:AF:77:C4:2C',
    status: 'active',
    hardware: {
      brand: 'Apple',
      model: 'iPad Air',
      os: 'Android',
      version: '15.2'
    },
    location: 'Kolda',
    assignedUser: 'Awa Diop',
    lastSync: new Date('2023-12-16T00:00:00'),
    nuiCount: 175,
    pendingSyncs: 15,
    registrationDate: new Date('2023-12-15')
  },
  {
    id: 'DEV095',
    macAddress: '00:65:2D:7D:B9:55',
    status: 'maintenance',
    hardware: {
      brand: 'Lenovo',
      model: 'Yoga Smart Tab',
      os: 'HarmonyOS',
      version: '17.1'
    },
    location: 'Kolda',
    assignedUser: 'Awa Diop',
    lastSync: new Date('2023-12-29T00:00:00'),
    nuiCount: 46,
    pendingSyncs: 0,
    registrationDate: new Date('2023-12-19')
  },
  {
    id: 'DEV096',
    macAddress: '00:09:F0:D4:33:51',
    status: 'maintenance',
    hardware: {
      brand: 'Apple',
      model: 'iPad Pro',
      os: 'iOS',
      version: '13.5'
    },
    location: 'Diourbel',
    assignedUser: 'Ibrahima Sarr',
    lastSync: new Date('2024-01-16T00:00:00'),
    nuiCount: 3,
    pendingSyncs: 4,
    registrationDate: new Date('2024-01-12')
  },
  {
    id: 'DEV097',
    macAddress: '00:6F:D5:85:A4:4E',
    status: 'active',
    hardware: {
      brand: 'Lenovo',
      model: 'Tab P11',
      os: 'Android',
      version: '15.0'
    },
    location: 'Kaolack',
    assignedUser: 'Fatou Sall',
    lastSync: new Date('2023-12-14T00:00:00'),
    nuiCount: 194,
    pendingSyncs: 9,
    registrationDate: new Date('2023-12-09')
  },
  {
    id: 'DEV098',
    macAddress: '00:6B:29:25:11:30',
    status: 'active',
    hardware: {
      brand: 'Apple',
      model: 'iPad Pro',
      os: 'Android',
      version: '12.0'
    },
    location: 'Tambacounda',
    assignedUser: 'Fatou Sall',
    lastSync: new Date('2024-01-04T00:00:00'),
    nuiCount: 12,
    pendingSyncs: 16,
    registrationDate: new Date('2023-12-13')
  },
  {
    id: 'DEV099',
    macAddress: '00:0B:D7:87:37:33',
    status: 'active',
    hardware: {
      brand: 'Apple',
      model: 'iPad Air',
      os: 'Android',
      version: '14.2'
    },
    location: 'Kolda',
    assignedUser: 'Amadou Ba',
    lastSync: new Date('2023-12-28T00:00:00'),
    nuiCount: 150,
    pendingSyncs: 6,
    registrationDate: new Date('2023-12-17')
  },
  {
    id: 'DEV100',
    macAddress: '00:73:2B:4B:A5:1F',
    status: 'maintenance',
    hardware: {
      brand: 'Apple',
      model: 'iPad Air',
      os: 'Android',
      version: '15.5'
    },
    location: 'Dakar',
    assignedUser: 'Moussa Ndiaye',
    lastSync: new Date('2023-12-22T00:00:00'),
    nuiCount: 150,
    pendingSyncs: 10,
    registrationDate: new Date('2023-12-17')
  },
  {
    id: 'DEV101',
    macAddress: '00:1A:53:19:56:93',
    status: 'maintenance',
    hardware: {
      brand: 'Huawei',
      model: 'P30 Lite',
      os: 'iOS',
      version: '14.5'
    },
    location: 'Tambacounda',
    assignedUser: 'Moussa Ndiaye',
    lastSync: new Date('2024-01-28T00:00:00'),
    nuiCount: 153,
    pendingSyncs: 19,
    registrationDate: new Date('2024-01-08')
  },
  {
    id: 'DEV102',
    macAddress: '00:14:A4:D1:93:B6',
    status: 'active',
    hardware: {
      brand: 'Samsung',
      model: 'Galaxy Tab A8',
      os: 'Android',
      version: '15.0'
    },
    location: 'Kaffrine',
    assignedUser: 'Amadou Ba',
    lastSync: new Date('2023-12-23T00:00:00'),
    nuiCount: 146,
    pendingSyncs: 6,
    registrationDate: new Date('2023-12-19')
  },
  {
    id: 'DEV103',
    macAddress: '00:DF:9C:4F:30:FC',
    status: 'maintenance',
    hardware: {
      brand: 'Apple',
      model: 'iPhone 13',
      os: 'HarmonyOS',
      version: '16.2'
    },
    location: 'Fatick',
    assignedUser: 'Awa Diop',
    lastSync: new Date('2023-12-29T00:00:00'),
    nuiCount: 119,
    pendingSyncs: 13,
    registrationDate: new Date('2023-12-23')
  },
  {
    id: 'DEV104',
    macAddress: '00:60:02:B2:CD:18',
    status: 'maintenance',
    hardware: {
      brand: 'Apple',
      model: 'iPad Air',
      os: 'iOS',
      version: '11.1'
    },
    location: 'Tambacounda',
    assignedUser: 'Ibrahima Sarr',
    lastSync: new Date('2023-12-21T00:00:00'),
    nuiCount: 161,
    pendingSyncs: 7,
    registrationDate: new Date('2023-12-02')
  },
  {
    id: 'DEV105',
    macAddress: '00:50:8C:9B:6C:13',
    status: 'active',
    hardware: {
      brand: 'Samsung',
      model: 'Galaxy Tab S7',
      os: 'Android',
      version: '15.2'
    },
    location: 'Kolda',
    assignedUser: 'Amadou Ba',
    lastSync: new Date('2024-02-02T00:00:00'),
    nuiCount: 10,
    pendingSyncs: 17,
    registrationDate: new Date('2024-01-07')
  },
  {
    id: 'DEV106',
    macAddress: '00:BE:E3:4F:D3:12',
    status: 'active',
    hardware: {
      brand: 'Samsung',
      model: 'Galaxy Tab S7',
      os: 'Android',
      version: '12.0'
    },
    location: 'Louga',
    assignedUser: 'Amadou Ba',
    lastSync: new Date('2023-12-09T00:00:00'),
    nuiCount: 92,
    pendingSyncs: 10,
    registrationDate: new Date('2023-12-04')
  },
  {
    id: 'DEV107',
    macAddress: '00:A7:7B:24:64:81',
    status: 'maintenance',
    hardware: {
      brand: 'Samsung',
      model: 'Galaxy Tab S7',
      os: 'HarmonyOS',
      version: '13.1'
    },
    location: 'Matam',
    assignedUser: 'Moussa Ndiaye',
    lastSync: new Date('2024-01-02T00:00:00'),
    nuiCount: 36,
    pendingSyncs: 2,
    registrationDate: new Date('2023-12-11')
  },
  {
    id: 'DEV108',
    macAddress: '00:8F:82:CC:6C:49',
    status: 'active',
    hardware: {
      brand: 'Samsung',
      model: 'Galaxy Note 20',
      os: 'HarmonyOS',
      version: '17.0'
    },
    location: 'Dakar',
    assignedUser: 'Moussa Ndiaye',
    lastSync: new Date('2024-01-18T00:00:00'),
    nuiCount: 170,
    pendingSyncs: 6,
    registrationDate: new Date('2024-01-02')
  },
  {
    id: 'DEV109',
    macAddress: '00:D4:D1:73:1B:78',
    status: 'active',
    hardware: {
      brand: 'Huawei',
      model: 'MatePad Pro',
      os: 'Android',
      version: '13.0'
    },
    location: 'Matam',
    assignedUser: 'Moussa Ndiaye',
    lastSync: new Date('2024-02-19T00:00:00'),
    nuiCount: 1,
    pendingSyncs: 18,
    registrationDate: new Date('2024-01-29')
  },
  {
    id: 'DEV110',
    macAddress: '00:B7:A9:E5:C3:C0',
    status: 'active',
    hardware: {
      brand: 'Apple',
      model: 'iPad Air',
      os: 'HarmonyOS',
      version: '16.3'
    },
    location: 'Kaffrine',
    assignedUser: 'Ibrahima Sarr',
    lastSync: new Date('2023-12-16T00:00:00'),
    nuiCount: 17,
    pendingSyncs: 15,
    registrationDate: new Date('2023-12-08')
  },
  {
    id: 'DEV111',
    macAddress: '00:E8:3D:E5:21:CC',
    status: 'active',
    hardware: {
      brand: 'Lenovo',
      model: 'Yoga Smart Tab',
      os: 'Android',
      version: '11.1'
    },
    location: 'Diourbel',
    assignedUser: 'Moussa Ndiaye',
    lastSync: new Date('2024-01-08T00:00:00'),
    nuiCount: 123,
    pendingSyncs: 14,
    registrationDate: new Date('2023-12-20')
  },
  {
    id: 'DEV112',
    macAddress: '00:88:5D:98:1F:33',
    status: 'active',
    hardware: {
      brand: 'Lenovo',
      model: 'Tab P11',
      os: 'HarmonyOS',
      version: '13.5'
    },
    location: 'Kolda',
    assignedUser: 'Fatou Sall',
    lastSync: new Date('2024-01-22T00:00:00'),
    nuiCount: 22,
    pendingSyncs: 12,
    registrationDate: new Date('2024-01-09')
  },
  {
    id: 'DEV113',
    macAddress: '00:8B:14:6A:43:A4',
    status: 'maintenance',
    hardware: {
      brand: 'Tecno',
      model: 'Camon 18',
      os: 'HarmonyOS',
      version: '16.5'
    },
    location: 'Tambacounda',
    assignedUser: 'Ibrahima Sarr',
    lastSync: new Date('2024-01-21T00:00:00'),
    nuiCount: 134,
    pendingSyncs: 7,
    registrationDate: new Date('2024-01-07')
  },
  {
    id: 'DEV114',
    macAddress: '00:F5:29:4D:72:9D',
    status: 'maintenance',
    hardware: {
      brand: 'Tecno',
      model: 'Spark 10',
      os: 'iOS',
      version: '11.3'
    },
    location: 'Louga',
    assignedUser: 'Amadou Ba',
    lastSync: new Date('2023-12-28T00:00:00'),
    nuiCount: 146,
    pendingSyncs: 12,
    registrationDate: new Date('2023-12-26')
  },
  {
    id: 'DEV115',
    macAddress: '00:0B:65:98:BF:11',
    status: 'maintenance',
    hardware: {
      brand: 'Samsung',
      model: 'Galaxy Tab S7',
      os: 'Android',
      version: '11.0'
    },
    location: 'Matam',
    assignedUser: 'Amadou Ba',
    lastSync: new Date('2024-01-06T00:00:00'),
    nuiCount: 41,
    pendingSyncs: 8,
    registrationDate: new Date('2023-12-24')
  },
  {
    id: 'DEV116',
    macAddress: '00:EB:AF:F2:39:D1',
    status: 'active',
    hardware: {
      brand: 'Apple',
      model: 'iPad Air',
      os: 'HarmonyOS',
      version: '12.2'
    },
    location: 'Sédhiou',
    assignedUser: 'Fatou Sall',
    lastSync: new Date('2024-02-18T00:00:00'),
    nuiCount: 29,
    pendingSyncs: 15,
    registrationDate: new Date('2024-01-28')
  },
  {
    id: 'DEV117',
    macAddress: '00:B2:A3:1F:57:A1',
    status: 'maintenance',
    hardware: {
      brand: 'Huawei',
      model: 'MatePad Pro',
      os: 'iOS',
      version: '12.3'
    },
    location: 'Kaffrine',
    assignedUser: 'Amadou Ba',
    lastSync: new Date('2024-01-14T00:00:00'),
    nuiCount: 188,
    pendingSyncs: 19,
    registrationDate: new Date('2023-12-16')
  },
  {
    id: 'DEV118',
    macAddress: '00:9E:5A:BA:8F:47',
    status: 'active',
    hardware: {
      brand: 'Apple',
      model: 'iPhone 13',
      os: 'iOS',
      version: '10.3'
    },
    location: 'Thiès',
    assignedUser: 'Fatou Sall',
    lastSync: new Date('2023-12-14T00:00:00'),
    nuiCount: 84,
    pendingSyncs: 20,
    registrationDate: new Date('2023-12-04')
  },
  {
    id: 'DEV119',
    macAddress: '00:EE:B4:0C:C1:EA',
    status: 'active',
    hardware: {
      brand: 'Huawei',
      model: 'MatePad Pro',
      os: 'iOS',
      version: '14.3'
    },
    location: 'Diourbel',
    assignedUser: 'Awa Diop',
    lastSync: new Date('2024-01-05T00:00:00'),
    nuiCount: 120,
    pendingSyncs: 3,
    registrationDate: new Date('2023-12-13')
  },
  {
    id: 'DEV120',
    macAddress: '00:FB:18:7C:11:A2',
    status: 'active',
    hardware: {
      brand: 'Tecno',
      model: 'Pouvoir 4',
      os: 'Android',
      version: '14.4'
    },
    location: 'Kolda',
    assignedUser: 'Ibrahima Sarr',
    lastSync: new Date('2024-01-21T00:00:00'),
    nuiCount: 143,
    pendingSyncs: 9,
    registrationDate: new Date('2024-01-12')
  },
  {
    id: 'DEV121',
    macAddress: '00:12:07:F1:9D:FE',
    status: 'active',
    hardware: {
      brand: 'Lenovo',
      model: 'Yoga Smart Tab',
      os: 'iOS',
      version: '16.4'
    },
    location: 'Diourbel',
    assignedUser: 'Moussa Ndiaye',
    lastSync: new Date('2024-01-23T00:00:00'),
    nuiCount: 67,
    pendingSyncs: 13,
    registrationDate: new Date('2024-01-16')
  },
  {
    id: 'DEV122',
    macAddress: '00:C2:6E:29:8D:A9',
    status: 'maintenance',
    hardware: {
      brand: 'Huawei',
      model: 'Nova 7',
      os: 'HarmonyOS',
      version: '16.0'
    },
    location: 'Kaolack',
    assignedUser: 'Ibrahima Sarr',
    lastSync: new Date('2023-12-15T00:00:00'),
    nuiCount: 186,
    pendingSyncs: 3,
    registrationDate: new Date('2023-12-11')
  },
  {
    id: 'DEV123',
    macAddress: '00:F4:47:30:A6:DE',
    status: 'active',
    hardware: {
      brand: 'Tecno',
      model: 'Pouvoir 4',
      os: 'iOS',
      version: '13.2'
    },
    location: 'Louga',
    assignedUser: 'Moussa Ndiaye',
    lastSync: new Date('2024-02-27T00:00:00'),
    nuiCount: 60,
    pendingSyncs: 15,
    registrationDate: new Date('2024-01-30')
  },
  {
    id: 'DEV124',
    macAddress: '00:E3:A7:3E:BB:21',
    status: 'active',
    hardware: {
      brand: 'Tecno',
      model: 'Spark 10',
      os: 'Android',
      version: '13.0'
    },
    location: 'Dakar',
    assignedUser: 'Moussa Ndiaye',
    lastSync: new Date('2024-01-29T00:00:00'),
    nuiCount: 1,
    pendingSyncs: 20,
    registrationDate: new Date('2024-01-03')
  },
  {
    id: 'DEV125',
    macAddress: '00:BC:AD:33:1A:0A',
    status: 'active',
    hardware: {
      brand: 'Lenovo',
      model: 'ThinkPad X1',
      os: 'Android',
      version: '10.0'
    },
    location: 'Dakar',
    assignedUser: 'Awa Diop',
    lastSync: new Date('2024-01-14T00:00:00'),
    nuiCount: 170,
    pendingSyncs: 20,
    registrationDate: new Date('2024-01-10')
  },
  {
    id: 'DEV126',
    macAddress: '00:77:77:84:2C:04',
    status: 'active',
    hardware: {
      brand: 'Samsung',
      model: 'Galaxy Tab S7',
      os: 'iOS',
      version: '16.1'
    },
    location: 'Kolda',
    assignedUser: 'Fatou Sall',
    lastSync: new Date('2024-02-05T00:00:00'),
    nuiCount: 15,
    pendingSyncs: 20,
    registrationDate: new Date('2024-01-27')
  },
  {
    id: 'DEV127',
    macAddress: '00:13:66:69:4C:3B',
    status: 'active',
    hardware: {
      brand: 'Tecno',
      model: 'Spark 10',
      os: 'iOS',
      version: '10.5'
    },
    location: 'Fatick',
    assignedUser: 'Awa Diop',
    lastSync: new Date('2024-02-01T00:00:00'),
    nuiCount: 136,
    pendingSyncs: 17,
    registrationDate: new Date('2024-01-20')
  },
  {
    id: 'DEV128',
    macAddress: '00:90:0F:96:4B:A7',
    status: 'maintenance',
    hardware: {
      brand: 'Tecno',
      model: 'Camon 18',
      os: 'HarmonyOS',
      version: '15.0'
    },
    location: 'Dakar',
    assignedUser: 'Fatou Sall',
    lastSync: new Date('2024-01-13T00:00:00'),
    nuiCount: 114,
    pendingSyncs: 15,
    registrationDate: new Date('2023-12-17')
  },
  {
    id: 'DEV129',
    macAddress: '00:5E:B8:1E:7F:3E',
    status: 'maintenance',
    hardware: {
      brand: 'Huawei',
      model: 'Nova 7',
      os: 'Android',
      version: '15.0'
    },
    location: 'Kaffrine',
    assignedUser: 'Amadou Ba',
    lastSync: new Date('2023-12-28T00:00:00'),
    nuiCount: 115,
    pendingSyncs: 16,
    registrationDate: new Date('2023-12-05')
  },
  {
    id: 'DEV130',
    macAddress: '00:83:79:E6:A9:A5',
    status: 'active',
    hardware: {
      brand: 'Apple',
      model: 'iPad Air',
      os: 'iOS',
      version: '15.3'
    },
    location: 'Kaffrine',
    assignedUser: 'Moussa Ndiaye',
    lastSync: new Date('2024-01-17T00:00:00'),
    nuiCount: 163,
    pendingSyncs: 11,
    registrationDate: new Date('2023-12-22')
  },
  {
    id: 'DEV131',
    macAddress: '00:A1:B9:29:30:FF',
    status: 'active',
    hardware: {
      brand: 'Tecno',
      model: 'Pouvoir 4',
      os: 'Android',
      version: '15.0'
    },
    location: 'Kaolack',
    assignedUser: 'Awa Diop',
    lastSync: new Date('2024-01-30T00:00:00'),
    nuiCount: 138,
    pendingSyncs: 14,
    registrationDate: new Date('2024-01-14')
  },
  {
    id: 'DEV132',
    macAddress: '00:BD:8F:68:90:07',
    status: 'offline',
    hardware: {
      brand: 'Apple',
      model: 'iPad Air',
      os: 'HarmonyOS',
      version: '15.4'
    },
    location: 'Saint-Louis',
    assignedUser: 'Awa Diop',
    lastSync: new Date('2023-12-27T00:00:00'),
    nuiCount: 47,
    pendingSyncs: 9,
    registrationDate: new Date('2023-12-03')
  },
  {
    id: 'DEV133',
    macAddress: '00:C9:0D:59:3E:B6',
    status: 'offline',
    hardware: {
      brand: 'Samsung',
      model: 'Galaxy Tab A8',
      os: 'iOS',
      version: '15.3'
    },
    location: 'Tambacounda',
    assignedUser: 'Moussa Ndiaye',
    lastSync: new Date('2024-01-27T00:00:00'),
    nuiCount: 167,
    pendingSyncs: 9,
    registrationDate: new Date('2023-12-31')
  },
  {
    id: 'DEV134',
    macAddress: '00:11:F6:D6:0B:43',
    status: 'active',
    hardware: {
      brand: 'Huawei',
      model: 'P30 Lite',
      os: 'HarmonyOS',
      version: '17.1'
    },
    location: 'Sédhiou',
    assignedUser: 'Fatou Sall',
    lastSync: new Date('2024-01-01T00:00:00'),
    nuiCount: 65,
    pendingSyncs: 14,
    registrationDate: new Date('2023-12-04')
  },
  {
    id: 'DEV135',
    macAddress: '00:0D:1B:3D:FA:BE',
    status: 'active',
    hardware: {
      brand: 'Apple',
      model: 'iPad Pro',
      os: 'iOS',
      version: '13.5'
    },
    location: 'Thiès',
    assignedUser: 'Fatou Sall',
    lastSync: new Date('2024-01-12T00:00:00'),
    nuiCount: 42,
    pendingSyncs: 7,
    registrationDate: new Date('2023-12-15')
  },
  {
    id: 'DEV136',
    macAddress: '00:2D:27:60:59:06',
    status: 'active',
    hardware: {
      brand: 'Samsung',
      model: 'Galaxy Tab A8',
      os: 'Android',
      version: '14.4'
    },
    location: 'Dakar',
    assignedUser: 'Awa Diop',
    lastSync: new Date('2024-01-29T00:00:00'),
    nuiCount: 169,
    pendingSyncs: 19,
    registrationDate: new Date('2024-01-02')
  },
  {
    id: 'DEV137',
    macAddress: '00:18:BD:21:0D:4D',
    status: 'active',
    hardware: {
      brand: 'Huawei',
      model: 'Nova 7',
      os: 'HarmonyOS',
      version: '14.3'
    },
    location: 'Kolda',
    assignedUser: 'Amadou Ba',
    lastSync: new Date('2024-01-14T00:00:00'),
    nuiCount: 163,
    pendingSyncs: 17,
    registrationDate: new Date('2023-12-28')
  },
  {
    id: 'DEV138',
    macAddress: '00:AB:A7:8E:41:C5',
    status: 'offline',
    hardware: {
      brand: 'Apple',
      model: 'iPhone 13',
      os: 'Android',
      version: '17.1'
    },
    location: 'Tambacounda',
    assignedUser: 'Fatou Sall',
    lastSync: new Date('2024-01-20T00:00:00'),
    nuiCount: 142,
    pendingSyncs: 6,
    registrationDate: new Date('2024-01-14')
  },
  {
    id: 'DEV139',
    macAddress: '00:5E:79:68:CF:00',
    status: 'active',
    hardware: {
      brand: 'Lenovo',
      model: 'ThinkPad X1',
      os: 'Android',
      version: '12.0'
    },
    location: 'Kolda',
    assignedUser: 'Awa Diop',
    lastSync: new Date('2024-01-04T00:00:00'),
    nuiCount: 187,
    pendingSyncs: 8,
    registrationDate: new Date('2023-12-31')
  },
  {
    id: 'DEV140',
    macAddress: '00:93:2E:92:74:2C',
    status: 'offline',
    hardware: {
      brand: 'Samsung',
      model: 'Galaxy Note 20',
      os: 'HarmonyOS',
      version: '11.1'
    },
    location: 'Matam',
    assignedUser: 'Ibrahima Sarr',
    lastSync: new Date('2023-12-26T00:00:00'),
    nuiCount: 128,
    pendingSyncs: 7,
    registrationDate: new Date('2023-12-23')
  },
  {
    id: 'DEV141',
    macAddress: '00:E1:8D:9C:33:0F',
    status: 'active',
    hardware: {
      brand: 'Samsung',
      model: 'Galaxy Note 20',
      os: 'iOS',
      version: '15.2'
    },
    location: 'Diourbel',
    assignedUser: 'Ibrahima Sarr',
    lastSync: new Date('2024-01-25T00:00:00'),
    nuiCount: 106,
    pendingSyncs: 8,
    registrationDate: new Date('2024-01-23')
  },
  {
    id: 'DEV142',
    macAddress: '00:26:C2:8E:7F:D5',
    status: 'active',
    hardware: {
      brand: 'Tecno',
      model: 'Camon 18',
      os: 'HarmonyOS',
      version: '17.2'
    },
    location: 'Ziguinchor',
    assignedUser: 'Ibrahima Sarr',
    lastSync: new Date('2024-01-19T00:00:00'),
    nuiCount: 117,
    pendingSyncs: 8,
    registrationDate: new Date('2024-01-14')
  },
  {
    id: 'DEV143',
    macAddress: '00:3B:25:36:7C:FD',
    status: 'active',
    hardware: {
      brand: 'Huawei',
      model: 'MatePad Pro',
      os: 'Android',
      version: '16.2'
    },
    location: 'Diourbel',
    assignedUser: 'Ibrahima Sarr',
    lastSync: new Date('2024-02-14T00:00:00'),
    nuiCount: 156,
    pendingSyncs: 7,
    registrationDate: new Date('2024-01-26')
  },
  {
    id: 'DEV144',
    macAddress: '00:B5:AF:AC:F0:47',
    status: 'active',
    hardware: {
      brand: 'Lenovo',
      model: 'Tab P11',
      os: 'HarmonyOS',
      version: '14.3'
    },
    location: 'Thiès',
    assignedUser: 'Fatou Sall',
    lastSync: new Date('2024-02-22T00:00:00'),
    nuiCount: 27,
    pendingSyncs: 12,
    registrationDate: new Date('2024-01-25')
  },
  {
    id: 'DEV145',
    macAddress: '00:56:A6:DC:D9:44',
    status: 'active',
    hardware: {
      brand: 'Lenovo',
      model: 'Yoga Smart Tab',
      os: 'HarmonyOS',
      version: '15.1'
    },
    location: 'Fatick',
    assignedUser: 'Moussa Ndiaye',
    lastSync: new Date('2024-01-09T00:00:00'),
    nuiCount: 158,
    pendingSyncs: 16,
    registrationDate: new Date('2023-12-18')
  },
  {
    id: 'DEV146',
    macAddress: '00:BB:85:24:B4:2E',
    status: 'active',
    hardware: {
      brand: 'Tecno',
      model: 'Camon 18',
      os: 'HarmonyOS',
      version: '12.2'
    },
    location: 'Saint-Louis',
    assignedUser: 'Amadou Ba',
    lastSync: new Date('2023-12-23T00:00:00'),
    nuiCount: 1,
    pendingSyncs: 2,
    registrationDate: new Date('2023-12-13')
  },
  {
    id: 'DEV147',
    macAddress: '00:94:8A:6E:5B:B7',
    status: 'active',
    hardware: {
      brand: 'Huawei',
      model: 'P30 Lite',
      os: 'iOS',
      version: '13.3'
    },
    location: 'Kaolack',
    assignedUser: 'Fatou Sall',
    lastSync: new Date('2023-12-11T00:00:00'),
    nuiCount: 22,
    pendingSyncs: 14,
    registrationDate: new Date('2023-12-02')
  },
  {
    id: 'DEV148',
    macAddress: '00:C3:CF:0D:4D:FD',
    status: 'active',
    hardware: {
      brand: 'Lenovo',
      model: 'ThinkPad X1',
      os: 'HarmonyOS',
      version: '14.0'
    },
    location: 'Kolda',
    assignedUser: 'Amadou Ba',
    lastSync: new Date('2024-02-12T00:00:00'),
    nuiCount: 68,
    pendingSyncs: 20,
    registrationDate: new Date('2024-01-21')
  },
  {
    id: 'DEV149',
    macAddress: '00:6D:8D:DA:5B:37',
    status: 'active',
    hardware: {
      brand: 'Apple',
      model: 'iPhone 13',
      os: 'HarmonyOS',
      version: '13.0'
    },
    location: 'Thiès',
    assignedUser: 'Awa Diop',
    lastSync: new Date('2024-01-28T00:00:00'),
    nuiCount: 150,
    pendingSyncs: 12,
    registrationDate: new Date('2024-01-09')
  },
  {
    id: 'DEV150',
    macAddress: '00:ED:5B:76:83:9B',
    status: 'active',
    hardware: {
      brand: 'Samsung',
      model: 'Galaxy Note 20',
      os: 'iOS',
      version: '13.3'
    },
    location: 'Tambacounda',
    assignedUser: 'Awa Diop',
    lastSync: new Date('2023-12-31T00:00:00'),
    nuiCount: 105,
    pendingSyncs: 5,
    registrationDate: new Date('2023-12-06')
  },
];

export const mockDeviceSyncs: DeviceSync[] = [
  {
    id: 'SYNC001',
    deviceId: 'DEV001',
    timestamp: new Date('2024-01-29T00:00:00'),
    type: 'nui',
    status: 'success',
    details: { nuisSynced: 1 }
  },
  {
    id: 'SYNC002',
    deviceId: 'DEV002',
    timestamp: new Date('2023-12-24T00:00:00'),
    type: 'user_data',
    status: 'success',
    details: { nuisSynced: 3 }
  },
  {
    id: 'SYNC003',
    deviceId: 'DEV003',
    timestamp: new Date('2024-02-08T00:00:00'),
    type: 'nui',
    status: 'success',
    details: { nuisSynced: 24 }
  },
  {
    id: 'SYNC004',
    deviceId: 'DEV004',
    timestamp: new Date('2024-02-20T00:00:00'),
    type: 'nui',
    status: 'success',
    details: { nuisSynced: 10 }
  },
  {
    id: 'SYNC005',
    deviceId: 'DEV005',
    timestamp: new Date('2024-02-08T00:00:00'),
    type: 'nui',
    status: 'success',
    details: { nuisSynced: 3 }
  },
  {
    id: 'SYNC006',
    deviceId: 'DEV006',
    timestamp: new Date('2024-02-09T00:00:00'),
    type: 'user_data',
    status: 'success',
    details: { nuisSynced: 24 }
  },
  {
    id: 'SYNC007',
    deviceId: 'DEV007',
    timestamp: new Date('2024-02-13T00:00:00'),
    type: 'nui',
    status: 'success',
    details: { nuisSynced: 2 }
  },
  {
    id: 'SYNC008',
    deviceId: 'DEV008',
    timestamp: new Date('2023-12-14T00:00:00'),
    type: 'nui',
    status: 'success',
    details: { nuisSynced: 28 }
  },
  {
    id: 'SYNC009',
    deviceId: 'DEV009',
    timestamp: new Date('2024-01-04T00:00:00'),
    type: 'user_data',
    status: 'success',
    details: { nuisSynced: 19 }
  },
  {
    id: 'SYNC010',
    deviceId: 'DEV010',
    timestamp: new Date('2023-12-24T00:00:00'),
    type: 'user_data',
    status: 'success',
    details: { nuisSynced: 5 }
  },
  {
    id: 'SYNC011',
    deviceId: 'DEV011',
    timestamp: new Date('2023-12-14T00:00:00'),
    type: 'nui',
    status: 'success',
    details: { nuisSynced: 21 }
  },
  {
    id: 'SYNC012',
    deviceId: 'DEV012',
    timestamp: new Date('2024-01-30T00:00:00'),
    type: 'nui',
    status: 'failed',
    details: { nuisSynced: 29 }
  },
  {
    id: 'SYNC013',
    deviceId: 'DEV013',
    timestamp: new Date('2024-12-15T00:00:00'),
    type: 'user_data',
    status: 'failed',
    details: { nuisSynced: 26 }
  },
  {
    id: 'SYNC014',
    deviceId: 'DEV014',
    timestamp: new Date('2024-01-17T00:00:00'),
    type: 'nui',
    status: 'failed',
    details: { nuisSynced: 7 }
  },
  {
    id: 'SYNC015',
    deviceId: 'DEV015',
    timestamp: new Date('2024-02-09T00:00:00'),
    type: 'nui',
    status: 'success',
    details: { error: 'Problème de réseau' }
  },
  {
    id: 'SYNC016',
    deviceId: 'DEV016',
    timestamp: new Date('2024-01-17T00:00:00'),
    type: 'nui',
    status: 'success',
    details: { nuisSynced: 30 }
  },
  {
    id: 'SYNC017',
    deviceId: 'DEV017',
    timestamp: new Date('2024-01-27T00:00:00'),
    type: 'user_data',
    status: 'success',
    details: { error: 'Problème de réseau' }
  },
  {
    id: 'SYNC018',
    deviceId: 'DEV018',
    timestamp: new Date('2023-12-14T00:00:00'),
    type: 'nui',
    status: 'success',
    details: { nuisSynced: 12 }
  },
  {
    id: 'SYNC019',
    deviceId: 'DEV019',
    timestamp: new Date('2023-12-15T00:00:00'),
    type: 'nui',
    status: 'success',
    details: { nuisSynced: 12 }
  },
  {
    id: 'SYNC020',
    deviceId: 'DEV020',
    timestamp: new Date('2024-01-11T00:00:00'),
    type: 'nui',
    status: 'success',
    details: { nuisSynced: 10 }
  },
  {
    id: 'SYNC021',
    deviceId: 'DEV021',
    timestamp: new Date('2024-01-21T00:00:00'),
    type: 'user_data',
    status: 'success',
    details: { error: 'Problème de réseau' }
  },
  {
    id: 'SYNC022',
    deviceId: 'DEV022',
    timestamp: new Date('2024-01-15T00:00:00'),
    type: 'nui',
    status: 'success',
    details: { nuisSynced: 6 }
  },
  {
    id: 'SYNC023',
    deviceId: 'DEV023',
    timestamp: new Date('2024-01-21T00:00:00'),
    type: 'nui',
    status: 'success',
    details: { nuisSynced: 24 }
  },
  {
    id: 'SYNC024',
    deviceId: 'DEV024',
    timestamp: new Date('2023-12-25T00:00:00'),
    type: 'nui',
    status: 'success',
    details: { nuisSynced: 18 }
  },
  {
    id: 'SYNC025',
    deviceId: 'DEV025',
    timestamp: new Date('2024-02-09T00:00:00'),
    type: 'user_data',
    status: 'success',
    details: { nuisSynced: 22 }
  },
  {
    id: 'SYNC026',
    deviceId: 'DEV026',
    timestamp: new Date('2023-12-10T00:00:00'),
    type: 'nui',
    status: 'success',
    details: { nuisSynced: 7 }
  },
  {
    id: 'SYNC027',
    deviceId: 'DEV027',
    timestamp: new Date('2024-01-22T00:00:00'),
    type: 'nui',
    status: 'success',
    details: { nuisSynced: 27 }
  },
  {
    id: 'SYNC028',
    deviceId: 'DEV028',
    timestamp: new Date('2023-12-21T00:00:00'),
    type: 'user_data',
    status: 'success',
    details: { nuisSynced: 15 }
  },
  {
    id: 'SYNC029',
    deviceId: 'DEV029',
    timestamp: new Date('2024-01-22T00:00:00'),
    type: 'nui',
    status: 'success',
    details: { error: 'Problème de réseau' }
  },
  {
    id: 'SYNC030',
    deviceId: 'DEV030',
    timestamp: new Date('2024-01-24T00:00:00'),
    type: 'nui',
    status: 'success',
    details: { nuisSynced: 3 }
  },
  {
    id: 'SYNC031',
    deviceId: 'DEV031',
    timestamp: new Date('2024-01-08T00:00:00'),
    type: 'nui',
    status: 'success',
    details: { nuisSynced: 10 }
  },
  {
    id: 'SYNC032',
    deviceId: 'DEV032',
    timestamp: new Date('2024-02-01T00:00:00'),
    type: 'nui',
    status: 'success',
    details: { error: 'Problème de réseau' }
  },
  {
    id: 'SYNC033',
    deviceId: 'DEV033',
    timestamp: new Date('2024-01-29T00:00:00'),
    type: 'nui',
    status: 'success',
    details: { nuisSynced: 15 }
  },
  {
    id: 'SYNC034',
    deviceId: 'DEV034',
    timestamp: new Date('2024-01-21T00:00:00'),
    type: 'user_data',
    status: 'success',
    details: { nuisSynced: 2 }
  },
  {
    id: 'SYNC035',
    deviceId: 'DEV035',
    timestamp: new Date('2024-01-25T00:00:00'),
    type: 'nui',
    status: 'success',
    details: { nuisSynced: 2 }
  },
  {
    id: 'SYNC036',
    deviceId: 'DEV036',
    timestamp: new Date('2024-01-16T00:00:00'),
    type: 'user_data',
    status: 'success',
    details: { nuisSynced: 20 }
  },
  {
    id: 'SYNC037',
    deviceId: 'DEV037',
    timestamp: new Date('2024-02-13T00:00:00'),
    type: 'nui',
    status: 'success',
    details: { nuisSynced: 12 }
  },
  {
    id: 'SYNC038',
    deviceId: 'DEV038',
    timestamp: new Date('2024-01-05T00:00:00'),
    type: 'nui',
    status: 'success',
    details: { nuisSynced: 4 }
  },
  {
    id: 'SYNC039',
    deviceId: 'DEV039',
    timestamp: new Date('2023-12-26T00:00:00'),
    type: 'nui',
    status: 'success',
    details: { nuisSynced: 14 }
  },
  {
    id: 'SYNC040',
    deviceId: 'DEV040',
    timestamp: new Date('2024-01-04T00:00:00'),
    type: 'user_data',
    status: 'success',
    details: { nuisSynced: 29 }
  },
  {
    id: 'SYNC041',
    deviceId: 'DEV041',
    timestamp: new Date('2024-01-28T00:00:00'),
    type: 'user_data',
    status: 'success',
    details: { nuisSynced: 8 }
  },
  {
    id: 'SYNC042',
    deviceId: 'DEV042',
    timestamp: new Date('2023-12-11T00:00:00'),
    type: 'user_data',
    status: 'success',
    details: { error: 'Problème de réseau' }
  },
  {
    id: 'SYNC043',
    deviceId: 'DEV043',
    timestamp: new Date('2024-02-05T00:00:00'),
    type: 'nui',
    status: 'success',
    details: { nuisSynced: 4 }
  },
  {
    id: 'SYNC044',
    deviceId: 'DEV044',
    timestamp: new Date('2024-01-03T00:00:00'),
    type: 'user_data',
    status: 'success',
    details: { nuisSynced: 8 }
  },
  {
    id: 'SYNC045',
    deviceId: 'DEV045',
    timestamp: new Date('2023-12-27T00:00:00'),
    type: 'user_data',
    status: 'success',
    details: { nuisSynced: 26 }
  },
  {
    id: 'SYNC046',
    deviceId: 'DEV046',
    timestamp: new Date('2024-01-12T00:00:00'),
    type: 'user_data',
    status: 'success',
    details: { nuisSynced: 16 }
  },
  {
    id: 'SYNC047',
    deviceId: 'DEV047',
    timestamp: new Date('2024-02-03T00:00:00'),
    type: 'nui',
    status: 'success',
    details: { nuisSynced: 4 }
  },
  {
    id: 'SYNC048',
    deviceId: 'DEV048',
    timestamp: new Date('2023-12-20T00:00:00'),
    type: 'nui',
    status: 'success',
    details: { nuisSynced: 11 }
  },
  {
    id: 'SYNC049',
    deviceId: 'DEV049',
    timestamp: new Date('2024-01-19T00:00:00'),
    type: 'nui',
    status: 'success',
    details: { nuisSynced: 1 }
  },
  {
    id: 'SYNC050',
    deviceId: 'DEV050',
    timestamp: new Date('2024-02-11T00:00:00'),
    type: 'nui',
    status: 'success',
    details: { error: 'Problème de réseau' }
  },
  {
    id: 'SYNC051',
    deviceId: 'DEV051',
    timestamp: new Date('2023-12-13T00:00:00'),
    type: 'nui',
    status: 'success',
    details: { nuisSynced: 11 }
  },
  {
    id: 'SYNC052',
    deviceId: 'DEV052',
    timestamp: new Date('2024-02-08T00:00:00'),
    type: 'nui',
    status: 'success',
    details: { nuisSynced: 13 }
  },
  {
    id: 'SYNC053',
    deviceId: 'DEV053',
    timestamp: new Date('2023-12-27T00:00:00'),
    type: 'nui',
    status: 'success',
    details: { nuisSynced: 1 }
  },
  {
    id: 'SYNC054',
    deviceId: 'DEV054',
    timestamp: new Date('2024-02-06T00:00:00'),
    type: 'nui',
    status: 'success',
    details: { error: 'Problème de réseau' }
  },
  {
    id: 'SYNC055',
    deviceId: 'DEV055',
    timestamp: new Date('2024-01-08T00:00:00'),
    type: 'nui',
    status: 'success',
    details: { error: 'Problème de réseau' }
  },
  {
    id: 'SYNC056',
    deviceId: 'DEV056',
    timestamp: new Date('2023-12-07T00:00:00'),
    type: 'nui',
    status: 'success',
    details: { error: 'Problème de réseau' }
  },
  {
    id: 'SYNC057',
    deviceId: 'DEV057',
    timestamp: new Date('2023-12-08T00:00:00'),
    type: 'nui',
    status: 'success',
    details: { nuisSynced: 8 }
  },
  {
    id: 'SYNC058',
    deviceId: 'DEV058',
    timestamp: new Date('2023-12-29T00:00:00'),
    type: 'user_data',
    status: 'success',
    details: { nuisSynced: 8 }
  },
  {
    id: 'SYNC059',
    deviceId: 'DEV059',
    timestamp: new Date('2024-01-03T00:00:00'),
    type: 'nui',
    status: 'success',
    details: { nuisSynced: 30 }
  },
  {
    id: 'SYNC060',
    deviceId: 'DEV060',
    timestamp: new Date('2024-01-05T00:00:00'),
    type: 'nui',
    status: 'success',
    details: { nuisSynced: 19 }
  },
  {
    id: 'SYNC061',
    deviceId: 'DEV061',
    timestamp: new Date('2023-12-25T00:00:00'),
    type: 'nui',
    status: 'success',
    details: { error: 'Problème de réseau' }
  },
  {
    id: 'SYNC062',
    deviceId: 'DEV062',
    timestamp: new Date('2024-02-08T00:00:00'),
    type: 'nui',
    status: 'success',
    details: { error: 'Problème de réseau' }
  },
  {
    id: 'SYNC063',
    deviceId: 'DEV063',
    timestamp: new Date('2024-01-15T00:00:00'),
    type: 'user_data',
    status: 'success',
    details: { nuisSynced: 9 }
  },
  {
    id: 'SYNC064',
    deviceId: 'DEV064',
    timestamp: new Date('2024-01-22T00:00:00'),
    type: 'nui',
    status: 'success',
    details: { nuisSynced: 0 }
  },
  {
    id: 'SYNC065',
    deviceId: 'DEV065',
    timestamp: new Date('2024-02-04T00:00:00'),
    type: 'user_data',
    status: 'success',
    details: { error: 'Problème de réseau' }
  },
  {
    id: 'SYNC066',
    deviceId: 'DEV066',
    timestamp: new Date('2023-12-25T00:00:00'),
    type: 'user_data',
    status: 'success',
    details: { nuisSynced: 18 }
  },
  {
    id: 'SYNC067',
    deviceId: 'DEV067',
    timestamp: new Date('2024-01-27T00:00:00'),
    type: 'user_data',
    status: 'success',
    details: { nuisSynced: 29 }
  },
  {
    id: 'SYNC068',
    deviceId: 'DEV068',
    timestamp: new Date('2023-12-05T00:00:00'),
    type: 'nui',
    status: 'success',
    details: { nuisSynced: 15 }
  },
  {
    id: 'SYNC069',
    deviceId: 'DEV069',
    timestamp: new Date('2024-01-07T00:00:00'),
    type: 'nui',
    status: 'success',
    details: { nuisSynced: 7 }
  },
  {
    id: 'SYNC070',
    deviceId: 'DEV070',
    timestamp: new Date('2024-01-12T00:00:00'),
    type: 'nui',
    status: 'success',
    details: { error: 'Problème de réseau' }
  },
  {
    id: 'SYNC071',
    deviceId: 'DEV071',
    timestamp: new Date('2024-01-13T00:00:00'),
    type: 'nui',
    status: 'success',
    details: { nuisSynced: 19 }
  },
  {
    id: 'SYNC072',
    deviceId: 'DEV072',
    timestamp: new Date('2024-01-31T00:00:00'),
    type: 'nui',
    status: 'success',
    details: { nuisSynced: 16 }
  },
  {
    id: 'SYNC073',
    deviceId: 'DEV073',
    timestamp: new Date('2024-01-07T00:00:00'),
    type: 'nui',
    status: 'success',
    details: { nuisSynced: 21 }
  },
  {
    id: 'SYNC074',
    deviceId: 'DEV074',
    timestamp: new Date('2024-01-14T00:00:00'),
    type: 'user_data',
    status: 'success',
    details: { nuisSynced: 11 }
  },
  {
    id: 'SYNC075',
    deviceId: 'DEV075',
    timestamp: new Date('2024-02-02T00:00:00'),
    type: 'nui',
    status: 'success',
    details: { nuisSynced: 13 }
  },
  {
    id: 'SYNC076',
    deviceId: 'DEV076',
    timestamp: new Date('2024-02-11T00:00:00'),
    type: 'user_data',
    status: 'success',
    details: { error: 'Problème de réseau' }
  },
  {
    id: 'SYNC077',
    deviceId: 'DEV077',
    timestamp: new Date('2023-12-11T00:00:00'),
    type: 'user_data',
    status: 'success',
    details: { nuisSynced: 21 }
  },
  {
    id: 'SYNC078',
    deviceId: 'DEV078',
    timestamp: new Date('2024-01-02T00:00:00'),
    type: 'nui',
    status: 'success',
    details: { nuisSynced: 25 }
  },
  {
    id: 'SYNC079',
    deviceId: 'DEV079',
    timestamp: new Date('2024-01-18T00:00:00'),
    type: 'nui',
    status: 'success',
    details: { nuisSynced: 11 }
  },
  {
    id: 'SYNC080',
    deviceId: 'DEV080',
    timestamp: new Date('2024-01-03T00:00:00'),
    type: 'user_data',
    status: 'success',
    details: { nuisSynced: 28 }
  },
  {
    id: 'SYNC081',
    deviceId: 'DEV081',
    timestamp: new Date('2024-01-15T00:00:00'),
    type: 'user_data',
    status: 'success',
    details: { nuisSynced: 5 }
  },
  {
    id: 'SYNC082',
    deviceId: 'DEV082',
    timestamp: new Date('2024-01-13T00:00:00'),
    type: 'nui',
    status: 'success',
    details: { nuisSynced: 2 }
  },
  {
    id: 'SYNC083',
    deviceId: 'DEV083',
    timestamp: new Date('2023-12-20T00:00:00'),
    type: 'user_data',
    status: 'success',
    details: { nuisSynced: 10 }
  },
  {
    id: 'SYNC084',
    deviceId: 'DEV084',
    timestamp: new Date('2024-01-29T00:00:00'),
    type: 'nui',
    status: 'success',
    details: { error: 'Problème de réseau' }
  },
  {
    id: 'SYNC085',
    deviceId: 'DEV085',
    timestamp: new Date('2024-01-09T00:00:00'),
    type: 'nui',
    status: 'success',
    details: { nuisSynced: 3 }
  },
  {
    id: 'SYNC086',
    deviceId: 'DEV086',
    timestamp: new Date('2024-01-22T00:00:00'),
    type: 'nui',
    status: 'success',
    details: { nuisSynced: 1 }
  },
  {
    id: 'SYNC087',
    deviceId: 'DEV087',
    timestamp: new Date('2024-01-31T00:00:00'),
    type: 'nui',
    status: 'success',
    details: { nuisSynced: 28 }
  },
  {
    id: 'SYNC088',
    deviceId: 'DEV088',
    timestamp: new Date('2024-01-08T00:00:00'),
    type: 'nui',
    status: 'success',
    details: { nuisSynced: 0 }
  },
  {
    id: 'SYNC089',
    deviceId: 'DEV089',
    timestamp: new Date('2024-01-17T00:00:00'),
    type: 'nui',
    status: 'success',
    details: { nuisSynced: 17 }
  },
  {
    id: 'SYNC090',
    deviceId: 'DEV090',
    timestamp: new Date('2024-02-14T00:00:00'),
    type: 'user_data',
    status: 'success',
    details: { error: 'Problème de réseau' }
  },
  {
    id: 'SYNC091',
    deviceId: 'DEV091',
    timestamp: new Date('2023-12-30T00:00:00'),
    type: 'user_data',
    status: 'success',
    details: { error: 'Problème de réseau' }
  },
  {
    id: 'SYNC092',
    deviceId: 'DEV092',
    timestamp: new Date('2024-02-02T00:00:00'),
    type: 'nui',
    status: 'success',
    details: { nuisSynced: 5 }
  },
  {
    id: 'SYNC093',
    deviceId: 'DEV093',
    timestamp: new Date('2024-01-27T00:00:00'),
    type: 'nui',
    status: 'success',
    details: { nuisSynced: 29 }
  },
  {
    id: 'SYNC094',
    deviceId: 'DEV094',
    timestamp: new Date('2023-12-16T00:00:00'),
    type: 'nui',
    status: 'success',
    details: { nuisSynced: 1 }
  },
  {
    id: 'SYNC095',
    deviceId: 'DEV095',
    timestamp: new Date('2023-12-29T00:00:00'),
    type: 'nui',
    status: 'success',
    details: { nuisSynced: 2 }
  },
  {
    id: 'SYNC096',
    deviceId: 'DEV096',
    timestamp: new Date('2024-01-16T00:00:00'),
    type: 'nui',
    status: 'success',
    details: { error: 'Problème de réseau' }
  },
  {
    id: 'SYNC097',
    deviceId: 'DEV097',
    timestamp: new Date('2023-12-14T00:00:00'),
    type: 'user_data',
    status: 'success',
    details: { nuisSynced: 24 }
  },
  {
    id: 'SYNC098',
    deviceId: 'DEV098',
    timestamp: new Date('2024-01-04T00:00:00'),
    type: 'user_data',
    status: 'success',
    details: { nuisSynced: 30 }
  },
  {
    id: 'SYNC099',
    deviceId: 'DEV099',
    timestamp: new Date('2023-12-28T00:00:00'),
    type: 'nui',
    status: 'success',
    details: { nuisSynced: 29 }
  },
  {
    id: 'SYNC100',
    deviceId: 'DEV100',
    timestamp: new Date('2023-12-22T00:00:00'),
    type: 'nui',
    status: 'success',
    details: { nuisSynced: 27 }
  },
  {
    id: 'SYNC101',
    deviceId: 'DEV101',
    timestamp: new Date('2024-01-28T00:00:00'),
    type: 'user_data',
    status: 'success',
    details: { error: 'Problème de réseau' }
  },
  {
    id: 'SYNC102',
    deviceId: 'DEV102',
    timestamp: new Date('2023-12-23T00:00:00'),
    type: 'user_data',
    status: 'success',
    details: { nuisSynced: 12 }
  },
  {
    id: 'SYNC103',
    deviceId: 'DEV103',
    timestamp: new Date('2023-12-29T00:00:00'),
    type: 'nui',
    status: 'success',
    details: { nuisSynced: 30 }
  },
  {
    id: 'SYNC104',
    deviceId: 'DEV104',
    timestamp: new Date('2023-12-21T00:00:00'),
    type: 'user_data',
    status: 'success',
    details: { nuisSynced: 29 }
  },
  {
    id: 'SYNC105',
    deviceId: 'DEV105',
    timestamp: new Date('2024-02-02T00:00:00'),
    type: 'user_data',
    status: 'success',
    details: { nuisSynced: 22 }
  },
  {
    id: 'SYNC106',
    deviceId: 'DEV106',
    timestamp: new Date('2023-12-09T00:00:00'),
    type: 'user_data',
    status: 'success',
    details: { nuisSynced: 28 }
  },
  {
    id: 'SYNC107',
    deviceId: 'DEV107',
    timestamp: new Date('2024-01-02T00:00:00'),
    type: 'nui',
    status: 'success',
    details: { error: 'Problème de réseau' }
  },
  {
    id: 'SYNC108',
    deviceId: 'DEV108',
    timestamp: new Date('2024-01-18T00:00:00'),
    type: 'user_data',
    status: 'success',
    details: { error: 'Problème de réseau' }
  },
  {
    id: 'SYNC109',
    deviceId: 'DEV109',
    timestamp: new Date('2024-02-19T00:00:00'),
    type: 'user_data',
    status: 'success',
    details: { error: 'Problème de réseau' }
  },
  {
    id: 'SYNC110',
    deviceId: 'DEV110',
    timestamp: new Date('2023-12-16T00:00:00'),
    type: 'nui',
    status: 'success',
    details: { error: 'Problème de réseau' }
  },
  {
    id: 'SYNC111',
    deviceId: 'DEV111',
    timestamp: new Date('2024-01-08T00:00:00'),
    type: 'nui',
    status: 'success',
    details: { error: 'Problème de réseau' }
  },
  {
    id: 'SYNC112',
    deviceId: 'DEV112',
    timestamp: new Date('2024-01-22T00:00:00'),
    type: 'nui',
    status: 'success',
    details: { nuisSynced: 4 }
  },
  {
    id: 'SYNC113',
    deviceId: 'DEV113',
    timestamp: new Date('2024-01-21T00:00:00'),
    type: 'nui',
    status: 'success',
    details: { nuisSynced: 15 }
  },
  {
    id: 'SYNC114',
    deviceId: 'DEV114',
    timestamp: new Date('2023-12-28T00:00:00'),
    type: 'user_data',
    status: 'success',
    details: { error: 'Problème de réseau' }
  },
  {
    id: 'SYNC115',
    deviceId: 'DEV115',
    timestamp: new Date('2024-01-06T00:00:00'),
    type: 'nui',
    status: 'success',
    details: { nuisSynced: 12 }
  },
  {
    id: 'SYNC116',
    deviceId: 'DEV116',
    timestamp: new Date('2024-02-18T00:00:00'),
    type: 'nui',
    status: 'success',
    details: { nuisSynced: 10 }
  },
  {
    id: 'SYNC117',
    deviceId: 'DEV117',
    timestamp: new Date('2024-01-14T00:00:00'),
    type: 'user_data',
    status: 'success',
    details: { error: 'Problème de réseau' }
  },
  {
    id: 'SYNC118',
    deviceId: 'DEV118',
    timestamp: new Date('2023-12-14T00:00:00'),
    type: 'nui',
    status: 'success',
    details: { error: 'Problème de réseau' }
  },
  {
    id: 'SYNC119',
    deviceId: 'DEV119',
    timestamp: new Date('2024-01-05T00:00:00'),
    type: 'nui',
    status: 'success',
    details: { error: 'Problème de réseau' }
  },
  {
    id: 'SYNC120',
    deviceId: 'DEV120',
    timestamp: new Date('2024-01-21T00:00:00'),
    type: 'nui',
    status: 'success',
    details: { nuisSynced: 7 }
  },
  {
    id: 'SYNC121',
    deviceId: 'DEV121',
    timestamp: new Date('2024-01-23T00:00:00'),
    type: 'nui',
    status: 'success',
    details: { error: 'Problème de réseau' }
  },
  {
    id: 'SYNC122',
    deviceId: 'DEV122',
    timestamp: new Date('2023-12-15T00:00:00'),
    type: 'user_data',
    status: 'success',
    details: { nuisSynced: 16 }
  },
  {
    id: 'SYNC123',
    deviceId: 'DEV123',
    timestamp: new Date('2024-02-27T00:00:00'),
    type: 'user_data',
    status: 'success',
    details: { nuisSynced: 10 }
  },
  {
    id: 'SYNC124',
    deviceId: 'DEV124',
    timestamp: new Date('2024-01-29T00:00:00'),
    type: 'user_data',
    status: 'success',
    details: { nuisSynced: 12 }
  },
  {
    id: 'SYNC125',
    deviceId: 'DEV125',
    timestamp: new Date('2024-01-14T00:00:00'),
    type: 'user_data',
    status: 'success',
    details: { nuisSynced: 20 }
  },
  {
    id: 'SYNC126',
    deviceId: 'DEV126',
    timestamp: new Date('2024-02-05T00:00:00'),
    type: 'nui',
    status: 'success',
    details: { nuisSynced: 16 }
  },
  {
    id: 'SYNC127',
    deviceId: 'DEV127',
    timestamp: new Date('2024-02-01T00:00:00'),
    type: 'user_data',
    status: 'success',
    details: { nuisSynced: 19 }
  },
  {
    id: 'SYNC128',
    deviceId: 'DEV128',
    timestamp: new Date('2024-01-13T00:00:00'),
    type: 'user_data',
    status: 'success',
    details: { nuisSynced: 29 }
  },
  {
    id: 'SYNC129',
    deviceId: 'DEV129',
    timestamp: new Date('2023-12-28T00:00:00'),
    type: 'user_data',
    status: 'success',
    details: { nuisSynced: 18 }
  },
  {
    id: 'SYNC130',
    deviceId: 'DEV130',
    timestamp: new Date('2024-01-17T00:00:00'),
    type: 'nui',
    status: 'success',
    details: { nuisSynced: 29 }
  },
  {
    id: 'SYNC131',
    deviceId: 'DEV131',
    timestamp: new Date('2024-01-30T00:00:00'),
    type: 'nui',
    status: 'success',
    details: { nuisSynced: 24 }
  },
  {
    id: 'SYNC132',
    deviceId: 'DEV132',
    timestamp: new Date('2023-12-27T00:00:00'),
    type: 'nui',
    status: 'success',
    details: { nuisSynced: 20 }
  },
  {
    id: 'SYNC133',
    deviceId: 'DEV133',
    timestamp: new Date('2024-01-27T00:00:00'),
    type: 'user_data',
    status: 'success',
    details: { nuisSynced: 6 }
  },
  {
    id: 'SYNC134',
    deviceId: 'DEV134',
    timestamp: new Date('2024-01-01T00:00:00'),
    type: 'nui',
    status: 'success',
    details: { error: 'Problème de réseau' }
  },
  {
    id: 'SYNC135',
    deviceId: 'DEV135',
    timestamp: new Date('2024-01-12T00:00:00'),
    type: 'nui',
    status: 'success',
    details: { nuisSynced: 7 }
  },
  {
    id: 'SYNC136',
    deviceId: 'DEV136',
    timestamp: new Date('2024-01-29T00:00:00'),
    type: 'nui',
    status: 'success',
    details: { error: 'Problème de réseau' }
  },
  {
    id: 'SYNC137',
    deviceId: 'DEV137',
    timestamp: new Date('2024-01-14T00:00:00'),
    type: 'nui',
    status: 'success',
    details: { nuisSynced: 4 }
  },
  {
    id: 'SYNC138',
    deviceId: 'DEV138',
    timestamp: new Date('2024-01-20T00:00:00'),
    type: 'nui',
    status: 'success',
    details: { nuisSynced: 4 }
  },
  {
    id: 'SYNC139',
    deviceId: 'DEV139',
    timestamp: new Date('2024-01-04T00:00:00'),
    type: 'nui',
    status: 'success',
    details: { nuisSynced: 19 }
  },
  {
    id: 'SYNC140',
    deviceId: 'DEV140',
    timestamp: new Date('2023-12-26T00:00:00'),
    type: 'nui',
    status: 'success',
    details: { nuisSynced: 30 }
  },
  {
    id: 'SYNC141',
    deviceId: 'DEV141',
    timestamp: new Date('2024-01-25T00:00:00'),
    type: 'nui',
    status: 'success',
    details: { error: 'Problème de réseau' }
  },
  {
    id: 'SYNC142',
    deviceId: 'DEV142',
    timestamp: new Date('2024-01-19T00:00:00'),
    type: 'nui',
    status: 'success',
    details: { nuisSynced: 14 }
  },
  {
    id: 'SYNC143',
    deviceId: 'DEV143',
    timestamp: new Date('2024-02-14T00:00:00'),
    type: 'nui',
    status: 'success',
    details: { error: 'Problème de réseau' }
  },
  {
    id: 'SYNC144',
    deviceId: 'DEV144',
    timestamp: new Date('2024-02-22T00:00:00'),
    type: 'nui',
    status: 'success',
    details: { nuisSynced: 22 }
  },
  {
    id: 'SYNC145',
    deviceId: 'DEV145',
    timestamp: new Date('2024-01-09T00:00:00'),
    type: 'nui',
    status: 'success',
    details: { nuisSynced: 29 }
  },
  {
    id: 'SYNC146',
    deviceId: 'DEV146',
    timestamp: new Date('2023-12-23T00:00:00'),
    type: 'nui',
    status: 'success',
    details: { nuisSynced: 22 }
  },
  {
    id: 'SYNC147',
    deviceId: 'DEV147',
    timestamp: new Date('2023-12-11T00:00:00'),
    type: 'user_data',
    status: 'success',
    details: { nuisSynced: 11 }
  },
  {
    id: 'SYNC148',
    deviceId: 'DEV148',
    timestamp: new Date('2024-02-12T00:00:00'),
    type: 'user_data',
    status: 'success',
    details: { error: 'Problème de réseau' }
  },
  {
    id: 'SYNC149',
    deviceId: 'DEV149',
    timestamp: new Date('2024-01-28T00:00:00'),
    type: 'user_data',
    status: 'success',
    details: { nuisSynced: 29 }
  },
  {
    id: 'SYNC150',
    deviceId: 'DEV150',
    timestamp: new Date('2023-12-31T00:00:00'),
    type: 'nui',
    status: 'success',
    details: { nuisSynced: 29 }
  },
];