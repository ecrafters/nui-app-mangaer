import { NUI } from '../models/nui.model';

export const mockNUIs: NUI[] = [
  {
    id: 'SN2 763 NY 988 U',
    status: 'assigned',
    assignmentDate: new Date('2024-11-04'),
    macAddress: '00:6C:57:45:2C:DB',
    location: 'Louga',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-27'),
        action: 'Attribué',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN2 875 OD 643 L',
    status: 'assigned',
    assignmentDate: new Date('2024-11-20'),
    macAddress: '00:7F:78:EF:76:77',
    location: 'Matam',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-09'),
        action: 'Créé',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN1 970 MX 591 Y',
    status: 'assigned',
    assignmentDate: new Date('2024-11-30'),
    macAddress: '00:89:4B:B4:83:11',
    location: 'Louga',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-16'),
        action: 'Attribué',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN2 583 PN 134 P',
    status: 'pending',
    assignmentDate: new Date('2024-11-23'),
    macAddress: '00:43:B4:A8:95:A1',
    location: 'Tambacounda',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-04'),
        action: 'Attribué',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN1 425 IX 734 S',
    status: 'pending',
    assignmentDate: new Date('2024-11-17'),
    macAddress: '00:56:61:42:6E:C0',
    location: 'Kaffrine',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-09'),
        action: 'Invalidé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN1 184 TO 215 O',
    status: 'pending',
    assignmentDate: new Date('2024-11-10'),
    macAddress: '00:A6:BD:ED:AC:32',
    location: 'Diourbel',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-16'),
        action: 'Créé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN1 127 IQ 748 K',
    status: 'pending',
    assignmentDate: new Date('2024-11-06'),
    macAddress: '00:1B:AC:99:BF:21',
    location: 'Kaffrine',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-26'),
        action: 'Invalidé',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN1 809 VS 918 B',
    status: 'pending',
    assignmentDate: new Date('2024-11-21'),
    macAddress: '00:07:17:85:F7:D4',
    location: 'Diourbel',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-27'),
        action: 'Créé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN1 957 KC 267 E',
    status: 'pending',
    assignmentDate: new Date('2024-11-17'),
    macAddress: '00:6C:EC:57:BF:1E',
    location: 'Thiès',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-15'),
        action: 'Créé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN1 202 OR 167 V',
    status: 'pending',
    assignmentDate: new Date('2024-11-05'),
    macAddress: '00:CA:94:36:EE:46',
    location: 'Thiès',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-19'),
        action: 'Invalidé',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN1 314 JU 523 S',
    status: 'pending',
    assignmentDate: new Date('2024-11-03'),
    macAddress: '00:58:4A:3B:E0:15',
    location: 'Kolda',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-30'),
        action: 'Créé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN1 422 KN 100 V',
    status: 'pending',
    assignmentDate: new Date('2024-11-19'),
    macAddress: '00:31:95:79:89:B1',
    location: 'Tambacounda',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-11'),
        action: 'Créé',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN2 298 VP 239 Y',
    status: 'pending',
    assignmentDate: new Date('2024-11-17'),
    macAddress: '00:99:52:CC:77:D5',
    location: 'Tambacounda',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-03'),
        action: 'Invalidé',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN1 232 PX 997 X',
    status: 'pending',
    assignmentDate: new Date('2024-11-03'),
    macAddress: '00:65:56:94:19:65',
    location: 'Louga',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-24'),
        action: 'Attribué',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN2 842 JB 756 V',
    status: 'pending',
    assignmentDate: new Date('2024-11-02'),
    macAddress: '00:0E:69:48:2A:E6',
    location: 'Louga',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-31'),
        action: 'Invalidé',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN1 895 JJ 297 X',
    status: 'pending',
    assignmentDate: new Date('2024-11-02'),
    macAddress: '00:1B:98:B2:5F:56',
    location: 'Louga',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-21'),
        action: 'Invalidé',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN1 593 AX 389 P',
    status: 'pending',
    assignmentDate: new Date('2024-11-23'),
    macAddress: '00:42:A2:A4:6B:11',
    location: 'Dakar',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-07'),
        action: 'Attribué',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN1 107 JB 510 P',
    status: 'pending',
    assignmentDate: new Date('2024-11-07'),
    macAddress: '00:C2:8E:5F:CC:34',
    location: 'Kaolack',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-05'),
        action: 'Invalidé',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN2 245 XX 803 U',
    status: 'pending',
    assignmentDate: new Date('2024-11-13'),
    macAddress: '00:44:AB:24:C2:90',
    location: 'Matam',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-22'),
        action: 'Attribué',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN1 169 NT 802 W',
    status: 'pending',
    assignmentDate: new Date('2024-11-07'),
    macAddress: '00:F5:30:7F:A8:19',
    location: 'Sédhiou',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-07'),
        action: 'Créé',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN2 183 ZC 480 Q',
    status: 'invalid',
    assignmentDate: new Date('2024-11-15'),
    macAddress: '00:F1:4A:C9:43:F9',
    location: 'Fatick',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-06'),
        action: 'Attribué',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN2 848 QL 165 C',
    status: 'invalid',
    assignmentDate: new Date('2024-11-23'),
    macAddress: '00:8E:B0:12:9A:F5',
    location: 'Kolda',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-27'),
        action: 'Invalidé',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN2 250 HA 348 A',
    status: 'assigned',
    assignmentDate: new Date('2024-11-04'),
    macAddress: '00:18:20:30:5C:47',
    location: 'Thiès',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-16'),
        action: 'Créé',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN2 903 QQ 973 F',
    status: 'assigned',
    assignmentDate: new Date('2024-11-18'),
    macAddress: '00:EC:74:86:1F:78',
    location: 'Thiès',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-19'),
        action: 'Invalidé',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN1 927 FI 304 E',
    status: 'assigned',
    assignmentDate: new Date('2024-11-25'),
    macAddress: '00:15:4A:CF:50:AF',
    location: 'Kaolack',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-22'),
        action: 'Attribué',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN2 608 CX 355 Q',
    status: 'assigned',
    assignmentDate: new Date('2024-11-20'),
    macAddress: '00:78:96:C5:3D:FD',
    location: 'Diourbel',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-27'),
        action: 'Attribué',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN1 759 PL 845 Q',
    status: 'assigned',
    assignmentDate: new Date('2024-11-16'),
    macAddress: '00:9C:C8:61:46:79',
    location: 'Kolda',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-29'),
        action: 'Créé',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN1 602 IV 302 T',
    status: 'assigned',
    assignmentDate: new Date('2024-11-09'),
    macAddress: '00:FC:1D:E4:70:D5',
    location: 'Tambacounda',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-06'),
        action: 'Invalidé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN2 370 TE 529 A',
    status: 'assigned',
    assignmentDate: new Date('2024-11-24'),
    macAddress: '00:11:BE:70:17:30',
    location: 'Kaolack',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-30'),
        action: 'Attribué',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN1 643 YG 216 B',
    status: 'assigned',
    assignmentDate: new Date('2024-11-06'),
    macAddress: '00:50:26:6F:E1:66',
    location: 'Fatick',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-17'),
        action: 'Invalidé',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN2 652 DH 250 K',
    status: 'assigned',
    assignmentDate: new Date('2024-11-23'),
    macAddress: '00:48:3F:E8:AC:68',
    location: 'Saint-Louis',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-22'),
        action: 'Créé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN1 160 SN 586 L',
    status: 'assigned',
    assignmentDate: new Date('2024-11-27'),
    macAddress: '00:F0:12:97:0A:BC',
    location: 'Kolda',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-18'),
        action: 'Attribué',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN1 648 KU 260 P',
    status: 'assigned',
    assignmentDate: new Date('2024-11-17'),
    macAddress: '00:87:8D:7A:32:8F',
    location: 'Kolda',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-22'),
        action: 'Créé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN1 495 YY 939 H',
    status: 'assigned',
    assignmentDate: new Date('2024-11-20'),
    macAddress: '00:A9:0D:85:08:64',
    location: 'Sédhiou',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-22'),
        action: 'Attribué',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN1 682 ZJ 200 V',
    status: 'assigned',
    assignmentDate: new Date('2024-11-08'),
    macAddress: '00:07:CB:9C:42:C9',
    location: 'Diourbel',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-25'),
        action: 'Créé',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN2 421 YR 561 L',
    status: 'assigned',
    assignmentDate: new Date('2024-11-03'),
    macAddress: '00:E7:05:FE:C0:40',
    location: 'Kaolack',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-04'),
        action: 'Créé',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN1 382 GA 902 J',
    status: 'assigned',
    assignmentDate: new Date('2024-11-11'),
    macAddress: '00:51:87:2D:E5:6B',
    location: 'Sédhiou',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-30'),
        action: 'Invalidé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN2 900 DS 236 K',
    status: 'assigned',
    assignmentDate: new Date('2024-11-02'),
    macAddress: '00:48:F9:B0:F9:00',
    location: 'Thiès',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-29'),
        action: 'Invalidé',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN1 665 XY 778 U',
    status: 'assigned',
    assignmentDate: new Date('2024-11-05'),
    macAddress: '00:34:5D:96:79:09',
    location: 'Diourbel',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-15'),
        action: 'Attribué',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN1 728 NQ 502 T',
    status: 'assigned',
    assignmentDate: new Date('2024-11-10'),
    macAddress: '00:3D:E7:16:2A:82',
    location: 'Matam',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-02'),
        action: 'Attribué',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN1 203 HY 897 B',
    status: 'assigned',
    assignmentDate: new Date('2024-11-08'),
    macAddress: '00:F6:7D:BA:6F:B9',
    location: 'Louga',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-02'),
        action: 'Attribué',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN1 344 XW 340 J',
    status: 'assigned',
    assignmentDate: new Date('2024-11-28'),
    macAddress: '00:B7:E9:BB:47:EA',
    location: 'Matam',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-03'),
        action: 'Créé',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN2 782 JP 406 J',
    status: 'assigned',
    assignmentDate: new Date('2024-11-22'),
    macAddress: '00:34:EB:60:97:A9',
    location: 'Kolda',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-08'),
        action: 'Invalidé',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN2 423 JP 964 G',
    status: 'assigned',
    assignmentDate: new Date('2024-11-25'),
    macAddress: '00:C9:7F:B9:C0:AB',
    location: 'Diourbel',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-06'),
        action: 'Invalidé',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN1 461 HB 233 Y',
    status: 'assigned',
    assignmentDate: new Date('2024-11-28'),
    macAddress: '00:29:79:6C:F3:BE',
    location: 'Kaffrine',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-10'),
        action: 'Créé',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN2 587 VL 406 F',
    status: 'assigned',
    assignmentDate: new Date('2024-11-22'),
    macAddress: '00:25:29:B9:EA:2B',
    location: 'Kaffrine',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-08'),
        action: 'Attribué',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN1 308 CR 736 W',
    status: 'assigned',
    assignmentDate: new Date('2024-11-09'),
    macAddress: '00:98:83:46:7E:F2',
    location: 'Kaffrine',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-08'),
        action: 'Invalidé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN1 687 KA 586 E',
    status: 'assigned',
    assignmentDate: new Date('2024-11-27'),
    macAddress: '00:CE:37:32:D0:77',
    location: 'Diourbel',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-03'),
        action: 'Créé',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN2 480 MF 307 K',
    status: 'assigned',
    assignmentDate: new Date('2024-11-22'),
    macAddress: '00:CA:B3:F1:E5:69',
    location: 'Saint-Louis',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-14'),
        action: 'Attribué',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN2 919 GQ 285 H',
    status: 'assigned',
    assignmentDate: new Date('2024-11-03'),
    macAddress: '00:89:2A:C1:C6:60',
    location: 'Fatick',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-17'),
        action: 'Attribué',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN2 826 WM 822 F',
    status: 'assigned',
    assignmentDate: new Date('2024-11-13'),
    macAddress: '00:20:02:AC:71:9A',
    location: 'Thiès',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-20'),
        action: 'Créé',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN1 753 NT 702 O',
    status: 'assigned',
    assignmentDate: new Date('2024-11-17'),
    macAddress: '00:F0:6F:4F:55:AA',
    location: 'Kaffrine',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-23'),
        action: 'Invalidé',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN1 686 DE 294 G',
    status: 'assigned',
    assignmentDate: new Date('2024-11-27'),
    macAddress: '00:72:3E:13:C2:7B',
    location: 'Dakar',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-07'),
        action: 'Créé',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN2 205 GE 582 X',
    status: 'assigned',
    assignmentDate: new Date('2024-11-05'),
    macAddress: '00:83:62:6F:2A:B3',
    location: 'Diourbel',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-26'),
        action: 'Attribué',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN2 800 IV 151 Q',
    status: 'assigned',
    assignmentDate: new Date('2024-11-21'),
    macAddress: '00:35:FD:83:E9:12',
    location: 'Dakar',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-19'),
        action: 'Invalidé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN1 971 HX 925 F',
    status: 'assigned',
    assignmentDate: new Date('2024-11-07'),
    macAddress: '00:20:4F:E0:AB:66',
    location: 'Ziguinchor',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-06'),
        action: 'Invalidé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN1 726 IM 763 E',
    status: 'assigned',
    assignmentDate: new Date('2024-11-10'),
    macAddress: '00:06:53:B8:33:7F',
    location: 'Dakar',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-31'),
        action: 'Invalidé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN1 135 JL 628 Q',
    status: 'assigned',
    assignmentDate: new Date('2024-11-10'),
    macAddress: '00:CD:B5:29:94:88',
    location: 'Kolda',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-06'),
        action: 'Créé',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN1 337 ML 602 Q',
    status: 'assigned',
    assignmentDate: new Date('2024-11-14'),
    macAddress: '00:C2:90:C3:0E:91',
    location: 'Kolda',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-21'),
        action: 'Attribué',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN1 584 SM 793 L',
    status: 'assigned',
    assignmentDate: new Date('2024-11-02'),
    macAddress: '00:17:E4:02:6C:29',
    location: 'Kaffrine',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-07'),
        action: 'Créé',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN2 606 OY 487 S',
    status: 'assigned',
    assignmentDate: new Date('2024-11-19'),
    macAddress: '00:B6:E9:CB:D8:7A',
    location: 'Kaolack',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-31'),
        action: 'Créé',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN2 455 UQ 263 S',
    status: 'assigned',
    assignmentDate: new Date('2024-11-12'),
    macAddress: '00:63:EF:BF:F7:7B',
    location: 'Thiès',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-10'),
        action: 'Créé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN2 306 PW 530 E',
    status: 'assigned',
    assignmentDate: new Date('2024-11-12'),
    macAddress: '00:DF:C7:E7:49:1D',
    location: 'Kolda',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-11'),
        action: 'Créé',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN1 981 GG 802 N',
    status: 'assigned',
    assignmentDate: new Date('2024-11-07'),
    macAddress: '00:B3:C7:22:35:01',
    location: 'Dakar',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-28'),
        action: 'Invalidé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN1 911 MJ 727 S',
    status: 'assigned',
    assignmentDate: new Date('2024-11-02'),
    macAddress: '00:27:BF:37:BE:33',
    location: 'Sédhiou',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-24'),
        action: 'Créé',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN1 198 ZO 435 R',
    status: 'assigned',
    assignmentDate: new Date('2024-11-17'),
    macAddress: '00:96:8F:47:A5:49',
    location: 'Thiès',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-10'),
        action: 'Invalidé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN1 103 XF 821 M',
    status: 'assigned',
    assignmentDate: new Date('2024-11-25'),
    macAddress: '00:98:55:87:DF:86',
    location: 'Thiès',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-28'),
        action: 'Invalidé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN2 639 EN 415 K',
    status: 'assigned',
    assignmentDate: new Date('2024-11-08'),
    macAddress: '00:28:C1:D0:B7:FE',
    location: 'Matam',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-20'),
        action: 'Attribué',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN1 328 ER 344 F',
    status: 'assigned',
    assignmentDate: new Date('2024-11-12'),
    macAddress: '00:4A:54:D2:89:29',
    location: 'Matam',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-15'),
        action: 'Attribué',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN2 941 CB 405 B',
    status: 'assigned',
    assignmentDate: new Date('2024-11-27'),
    macAddress: '00:C7:47:9F:D6:48',
    location: 'Matam',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-08'),
        action: 'Invalidé',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN1 700 DV 607 T',
    status: 'assigned',
    assignmentDate: new Date('2024-11-10'),
    macAddress: '00:5B:F9:92:C5:B3',
    location: 'Sédhiou',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-30'),
        action: 'Invalidé',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN2 752 IK 323 U',
    status: 'assigned',
    assignmentDate: new Date('2024-11-05'),
    macAddress: '00:09:6D:9D:B4:8A',
    location: 'Tambacounda',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-07'),
        action: 'Attribué',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN2 757 YG 323 A',
    status: 'assigned',
    assignmentDate: new Date('2024-11-29'),
    macAddress: '00:03:58:60:56:B2',
    location: 'Saint-Louis',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-13'),
        action: 'Créé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN2 191 LG 735 D',
    status: 'assigned',
    assignmentDate: new Date('2024-11-23'),
    macAddress: '00:EB:D0:98:07:2E',
    location: 'Diourbel',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-13'),
        action: 'Invalidé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN1 317 TO 474 V',
    status: 'assigned',
    assignmentDate: new Date('2024-11-02'),
    macAddress: '00:C1:17:77:86:29',
    location: 'Tambacounda',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-28'),
        action: 'Attribué',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN2 205 IZ 779 A',
    status: 'assigned',
    assignmentDate: new Date('2024-11-30'),
    macAddress: '00:E0:62:EB:A1:57',
    location: 'Kaolack',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-14'),
        action: 'Invalidé',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN2 698 ZR 721 T',
    status: 'assigned',
    assignmentDate: new Date('2024-11-19'),
    macAddress: '00:A1:31:90:F5:7A',
    location: 'Sédhiou',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-10'),
        action: 'Attribué',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN2 568 VU 186 T',
    status: 'assigned',
    assignmentDate: new Date('2024-11-13'),
    macAddress: '00:46:83:10:7E:CE',
    location: 'Kaolack',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-11'),
        action: 'Invalidé',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN2 513 LS 956 C',
    status: 'assigned',
    assignmentDate: new Date('2024-11-02'),
    macAddress: '00:D5:63:49:EE:8B',
    location: 'Kolda',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-13'),
        action: 'Créé',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN1 515 ZJ 601 Q',
    status: 'assigned',
    assignmentDate: new Date('2024-11-12'),
    macAddress: '00:F0:3E:8B:DD:44',
    location: 'Kaolack',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-30'),
        action: 'Créé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN2 588 IB 954 O',
    status: 'assigned',
    assignmentDate: new Date('2024-11-15'),
    macAddress: '00:F9:39:DF:3E:5F',
    location: 'Saint-Louis',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-21'),
        action: 'Invalidé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN2 825 ON 485 A',
    status: 'assigned',
    assignmentDate: new Date('2024-11-20'),
    macAddress: '00:0F:64:22:56:2B',
    location: 'Fatick',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-04'),
        action: 'Créé',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN2 979 UU 648 O',
    status: 'assigned',
    assignmentDate: new Date('2024-11-26'),
    macAddress: '00:3A:E9:A5:57:FA',
    location: 'Ziguinchor',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-03'),
        action: 'Attribué',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN2 438 KF 443 B',
    status: 'assigned',
    assignmentDate: new Date('2024-11-19'),
    macAddress: '00:FB:2B:B5:B0:0C',
    location: 'Dakar',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-07'),
        action: 'Créé',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN1 809 FB 555 V',
    status: 'assigned',
    assignmentDate: new Date('2024-11-02'),
    macAddress: '00:80:7E:E4:55:2A',
    location: 'Kolda',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-05'),
        action: 'Créé',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN1 423 BQ 385 P',
    status: 'assigned',
    assignmentDate: new Date('2024-11-12'),
    macAddress: '00:DB:91:9A:24:5C',
    location: 'Sédhiou',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-21'),
        action: 'Créé',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN2 587 OL 485 D',
    status: 'assigned',
    assignmentDate: new Date('2024-11-13'),
    macAddress: '00:67:AD:A6:AA:AE',
    location: 'Tambacounda',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-18'),
        action: 'Attribué',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN1 195 PO 555 E',
    status: 'assigned',
    assignmentDate: new Date('2024-11-04'),
    macAddress: '00:8B:4B:08:CF:6B',
    location: 'Thiès',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-11'),
        action: 'Créé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN1 840 TG 554 H',
    status: 'assigned',
    assignmentDate: new Date('2024-11-23'),
    macAddress: '00:FB:A2:69:AD:B0',
    location: 'Dakar',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-13'),
        action: 'Invalidé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN1 387 LV 513 H',
    status: 'assigned',
    assignmentDate: new Date('2024-11-25'),
    macAddress: '00:71:3E:6E:68:3E',
    location: 'Kaolack',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-21'),
        action: 'Attribué',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN2 255 XQ 683 C',
    status: 'assigned',
    assignmentDate: new Date('2024-11-23'),
    macAddress: '00:ED:A1:59:58:D2',
    location: 'Tambacounda',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-24'),
        action: 'Créé',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN2 120 JS 721 A',
    status: 'assigned',
    assignmentDate: new Date('2024-11-22'),
    macAddress: '00:9C:70:22:D7:49',
    location: 'Sédhiou',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-07'),
        action: 'Créé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN1 210 IU 278 W',
    status: 'assigned',
    assignmentDate: new Date('2024-11-09'),
    macAddress: '00:A6:FE:D0:94:90',
    location: 'Kolda',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-30'),
        action: 'Invalidé',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN1 309 HT 686 N',
    status: 'assigned',
    assignmentDate: new Date('2024-11-03'),
    macAddress: '00:63:55:7F:F1:95',
    location: 'Diourbel',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-21'),
        action: 'Invalidé',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN2 293 TI 158 Y',
    status: 'assigned',
    assignmentDate: new Date('2024-11-12'),
    macAddress: '00:04:B3:A5:31:37',
    location: 'Kaffrine',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-04'),
        action: 'Invalidé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN2 880 JW 559 I',
    status: 'assigned',
    assignmentDate: new Date('2024-11-23'),
    macAddress: '00:24:5E:81:29:BC',
    location: 'Fatick',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-26'),
        action: 'Créé',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN1 372 HO 387 T',
    status: 'assigned',
    assignmentDate: new Date('2024-11-03'),
    macAddress: '00:3D:B0:E6:E5:F2',
    location: 'Tambacounda',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-28'),
        action: 'Créé',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN2 398 YJ 988 J',
    status: 'assigned',
    assignmentDate: new Date('2024-11-02'),
    macAddress: '00:CD:8A:D3:B2:79',
    location: 'Fatick',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-17'),
        action: 'Invalidé',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN2 325 NH 442 X',
    status: 'assigned',
    assignmentDate: new Date('2024-11-17'),
    macAddress: '00:1E:79:30:1C:89',
    location: 'Fatick',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-28'),
        action: 'Invalidé',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN1 575 UP 137 L',
    status: 'assigned',
    assignmentDate: new Date('2024-11-13'),
    macAddress: '00:26:95:A6:75:09',
    location: 'Dakar',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-15'),
        action: 'Invalidé',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN2 664 RD 725 T',
    status: 'assigned',
    assignmentDate: new Date('2024-11-06'),
    macAddress: '00:73:38:CE:75:D4',
    location: 'Kolda',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-07'),
        action: 'Attribué',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN2 533 BQ 407 L',
    status: 'assigned',
    assignmentDate: new Date('2024-11-07'),
    macAddress: '00:8B:58:C9:66:21',
    location: 'Kolda',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-02'),
        action: 'Attribué',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN2 488 BA 488 R',
    status: 'assigned',
    assignmentDate: new Date('2024-11-12'),
    macAddress: '00:B9:43:89:BC:3C',
    location: 'Tambacounda',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-13'),
        action: 'Invalidé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN1 233 FW 182 R',
    status: 'assigned',
    assignmentDate: new Date('2024-11-07'),
    macAddress: '00:4D:B1:79:E7:24',
    location: 'Kaffrine',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-30'),
        action: 'Attribué',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN1 978 SW 289 K',
    status: 'assigned',
    assignmentDate: new Date('2024-11-08'),
    macAddress: '00:D2:27:AD:C5:F7',
    location: 'Saint-Louis',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-06'),
        action: 'Invalidé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN2 202 BD 669 T',
    status: 'assigned',
    assignmentDate: new Date('2024-11-02'),
    macAddress: '00:BE:F5:89:62:C6',
    location: 'Dakar',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-26'),
        action: 'Invalidé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN2 773 PQ 353 D',
    status: 'assigned',
    assignmentDate: new Date('2024-11-05'),
    macAddress: '00:18:81:90:32:7D',
    location: 'Ziguinchor',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-14'),
        action: 'Attribué',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN1 232 CO 230 Q',
    status: 'assigned',
    assignmentDate: new Date('2024-11-12'),
    macAddress: '00:DF:C0:73:64:A3',
    location: 'Sédhiou',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-10'),
        action: 'Invalidé',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN2 547 ER 800 W',
    status: 'assigned',
    assignmentDate: new Date('2024-11-31'),
    macAddress: '00:63:AC:FD:09:38',
    location: 'Fatick',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-08'),
        action: 'Invalidé',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN1 153 OL 248 R',
    status: 'assigned',
    assignmentDate: new Date('2024-11-24'),
    macAddress: '00:8D:50:DF:AB:F0',
    location: 'Thiès',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-24'),
        action: 'Attribué',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN2 140 NP 778 O',
    status: 'assigned',
    assignmentDate: new Date('2024-11-18'),
    macAddress: '00:5E:16:89:37:33',
    location: 'Ziguinchor',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-06'),
        action: 'Créé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN1 706 YM 251 K',
    status: 'assigned',
    assignmentDate: new Date('2024-11-12'),
    macAddress: '00:CB:BE:54:DC:5D',
    location: 'Dakar',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-20'),
        action: 'Attribué',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN2 478 IO 754 G',
    status: 'assigned',
    assignmentDate: new Date('2024-11-21'),
    macAddress: '00:E9:EA:40:0D:41',
    location: 'Kaolack',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-24'),
        action: 'Créé',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN2 572 XW 389 E',
    status: 'assigned',
    assignmentDate: new Date('2024-11-23'),
    macAddress: '00:C4:BC:F5:F2:97',
    location: 'Ziguinchor',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-30'),
        action: 'Créé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN1 670 HP 536 K',
    status: 'assigned',
    assignmentDate: new Date('2024-11-19'),
    macAddress: '00:BB:AC:C5:A8:F9',
    location: 'Saint-Louis',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-26'),
        action: 'Attribué',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN1 864 CI 667 K',
    status: 'assigned',
    assignmentDate: new Date('2024-11-04'),
    macAddress: '00:D0:3D:1F:72:DF',
    location: 'Kolda',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-08'),
        action: 'Invalidé',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN1 702 PK 415 X',
    status: 'assigned',
    assignmentDate: new Date('2024-11-15'),
    macAddress: '00:03:0B:5B:2A:03',
    location: 'Thiès',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-21'),
        action: 'Invalidé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN1 401 RG 283 P',
    status: 'assigned',
    assignmentDate: new Date('2024-11-22'),
    macAddress: '00:C9:52:9E:A1:84',
    location: 'Dakar',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-11'),
        action: 'Attribué',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN2 611 WL 773 H',
    status: 'assigned',
    assignmentDate: new Date('2024-11-05'),
    macAddress: '00:93:E5:F0:A9:EF',
    location: 'Tambacounda',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-03'),
        action: 'Invalidé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN2 765 KS 682 L',
    status: 'assigned',
    assignmentDate: new Date('2024-11-02'),
    macAddress: '00:88:25:F9:EF:F5',
    location: 'Ziguinchor',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-31'),
        action: 'Invalidé',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN1 542 TG 417 A',
    status: 'assigned',
    assignmentDate: new Date('2024-11-15'),
    macAddress: '00:EC:8F:DF:42:41',
    location: 'Sédhiou',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-25'),
        action: 'Attribué',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN1 228 BM 452 X',
    status: 'assigned',
    assignmentDate: new Date('2024-11-20'),
    macAddress: '00:8C:4D:3B:7A:67',
    location: 'Sédhiou',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-24'),
        action: 'Créé',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN1 609 EV 213 Q',
    status: 'assigned',
    assignmentDate: new Date('2024-11-12'),
    macAddress: '00:5C:30:33:C7:B6',
    location: 'Matam',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-18'),
        action: 'Invalidé',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN1 631 FA 135 I',
    status: 'assigned',
    assignmentDate: new Date('2024-11-12'),
    macAddress: '00:BB:6D:DF:8D:9A',
    location: 'Sédhiou',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-16'),
        action: 'Attribué',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN1 629 VC 367 C',
    status: 'assigned',
    assignmentDate: new Date('2024-11-04'),
    macAddress: '00:63:38:A7:23:42',
    location: 'Fatick',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-08'),
        action: 'Attribué',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN1 382 JF 586 U',
    status: 'assigned',
    assignmentDate: new Date('2024-11-17'),
    macAddress: '00:CC:67:7A:86:C9',
    location: 'Matam',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-26'),
        action: 'Créé',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN2 406 TV 315 W',
    status: 'assigned',
    assignmentDate: new Date('2024-11-21'),
    macAddress: '00:24:10:9F:D2:7A',
    location: 'Louga',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-28'),
        action: 'Créé',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN1 988 CT 280 A',
    status: 'assigned',
    assignmentDate: new Date('2024-11-31'),
    macAddress: '00:50:D7:37:25:5D',
    location: 'Thiès',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-31'),
        action: 'Invalidé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN1 825 JG 698 Z',
    status: 'assigned',
    assignmentDate: new Date('2024-11-22'),
    macAddress: '00:59:09:EC:8E:E8',
    location: 'Saint-Louis',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-21'),
        action: 'Attribué',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN2 937 JR 861 R',
    status: 'assigned',
    assignmentDate: new Date('2024-11-24'),
    macAddress: '00:8E:33:90:74:A8',
    location: 'Ziguinchor',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-12'),
        action: 'Invalidé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN1 978 YK 977 D',
    status: 'assigned',
    assignmentDate: new Date('2024-11-21'),
    macAddress: '00:06:28:25:6A:4B',
    location: 'Fatick',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-25'),
        action: 'Créé',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN2 372 RQ 357 U',
    status: 'assigned',
    assignmentDate: new Date('2024-11-14'),
    macAddress: '00:6D:4E:BB:86:E8',
    location: 'Thiès',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-08'),
        action: 'Invalidé',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN2 456 KH 874 O',
    status: 'assigned',
    assignmentDate: new Date('2024-11-20'),
    macAddress: '00:9C:79:22:37:AC',
    location: 'Tambacounda',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-08'),
        action: 'Créé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN1 218 BY 480 R',
    status: 'assigned',
    assignmentDate: new Date('2024-11-24'),
    macAddress: '00:C4:C1:FC:71:B7',
    location: 'Ziguinchor',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-10'),
        action: 'Invalidé',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN2 802 IP 901 P',
    status: 'assigned',
    assignmentDate: new Date('2024-11-25'),
    macAddress: '00:12:EF:E9:CD:2C',
    location: 'Louga',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-12'),
        action: 'Créé',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN2 319 RN 492 K',
    status: 'assigned',
    assignmentDate: new Date('2024-11-08'),
    macAddress: '00:63:1D:5B:1B:BA',
    location: 'Diourbel',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-13'),
        action: 'Invalidé',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN2 296 JD 884 K',
    status: 'assigned',
    assignmentDate: new Date('2024-11-23'),
    macAddress: '00:B6:25:F1:DF:2B',
    location: 'Fatick',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-24'),
        action: 'Créé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN1 260 HH 584 U',
    status: 'assigned',
    assignmentDate: new Date('2024-11-17'),
    macAddress: '00:5D:5C:25:C8:58',
    location: 'Louga',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-08'),
        action: 'Invalidé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN1 325 QC 187 G',
    status: 'assigned',
    assignmentDate: new Date('2024-11-25'),
    macAddress: '00:C1:1D:6A:D3:95',
    location: 'Diourbel',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-18'),
        action: 'Invalidé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN2 154 PY 754 S',
    status: 'assigned',
    assignmentDate: new Date('2024-11-28'),
    macAddress: '00:BB:F1:AA:56:A2',
    location: 'Ziguinchor',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-05'),
        action: 'Attribué',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN1 466 LJ 602 Y',
    status: 'assigned',
    assignmentDate: new Date('2024-11-13'),
    macAddress: '00:DF:95:A1:70:75',
    location: 'Kaolack',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-14'),
        action: 'Attribué',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN1 635 TD 846 W',
    status: 'assigned',
    assignmentDate: new Date('2024-11-15'),
    macAddress: '00:65:4C:59:07:0E',
    location: 'Fatick',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-11'),
        action: 'Attribué',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN1 379 CB 251 R',
    status: 'assigned',
    assignmentDate: new Date('2024-11-26'),
    macAddress: '00:39:80:0E:D1:4B',
    location: 'Dakar',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-08'),
        action: 'Créé',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN1 134 TO 974 V',
    status: 'assigned',
    assignmentDate: new Date('2024-11-20'),
    macAddress: '00:AB:9C:7B:21:B2',
    location: 'Diourbel',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-20'),
        action: 'Invalidé',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN2 324 PY 753 Q',
    status: 'assigned',
    assignmentDate: new Date('2024-11-12'),
    macAddress: '00:20:6A:91:FC:EB',
    location: 'Louga',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-13'),
        action: 'Invalidé',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN2 207 XT 480 A',
    status: 'assigned',
    assignmentDate: new Date('2024-11-20'),
    macAddress: '00:80:67:5D:9A:9D',
    location: 'Matam',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-08'),
        action: 'Créé',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN2 287 BH 425 D',
    status: 'assigned',
    assignmentDate: new Date('2024-11-02'),
    macAddress: '00:12:0C:21:1E:5B',
    location: 'Thiès',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-25'),
        action: 'Créé',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN2 913 SX 148 B',
    status: 'assigned',
    assignmentDate: new Date('2024-11-17'),
    macAddress: '00:EC:37:68:80:23',
    location: 'Matam',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-14'),
        action: 'Invalidé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN1 975 KX 659 N',
    status: 'assigned',
    assignmentDate: new Date('2024-11-17'),
    macAddress: '00:65:03:9F:E5:93',
    location: 'Sédhiou',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-03'),
        action: 'Invalidé',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN1 671 ZI 870 I',
    status: 'assigned',
    assignmentDate: new Date('2024-11-30'),
    macAddress: '00:48:B5:F3:85:71',
    location: 'Saint-Louis',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-16'),
        action: 'Invalidé',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN1 409 OY 292 G',
    status: 'assigned',
    assignmentDate: new Date('2024-11-07'),
    macAddress: '00:7A:B2:E2:C7:71',
    location: 'Matam',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-08'),
        action: 'Attribué',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN2 274 EQ 852 D',
    status: 'assigned',
    assignmentDate: new Date('2024-11-26'),
    macAddress: '00:83:6E:34:9B:8C',
    location: 'Ziguinchor',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-23'),
        action: 'Invalidé',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN1 465 GA 683 S',
    status: 'assigned',
    assignmentDate: new Date('2024-11-26'),
    macAddress: '00:8D:24:A1:59:19',
    location: 'Fatick',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-30'),
        action: 'Invalidé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN2 886 LO 635 B',
    status: 'assigned',
    assignmentDate: new Date('2024-11-24'),
    macAddress: '00:A1:3A:91:3D:08',
    location: 'Tambacounda',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-09'),
        action: 'Attribué',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN1 880 TH 315 F',
    status: 'assigned',
    assignmentDate: new Date('2024-11-13'),
    macAddress: '00:75:A7:A8:C6:12',
    location: 'Dakar',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-13'),
        action: 'Créé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN2 750 HY 829 D',
    status: 'assigned',
    assignmentDate: new Date('2024-11-26'),
    macAddress: '00:10:21:06:90:51',
    location: 'Ziguinchor',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-10'),
        action: 'Invalidé',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN1 671 OD 532 X',
    status: 'assigned',
    assignmentDate: new Date('2024-11-18'),
    macAddress: '00:71:F2:6E:3A:64',
    location: 'Tambacounda',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-25'),
        action: 'Créé',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN1 861 GI 570 S',
    status: 'assigned',
    assignmentDate: new Date('2024-11-12'),
    macAddress: '00:CA:A4:F8:2D:AE',
    location: 'Fatick',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-07'),
        action: 'Créé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN2 551 QS 519 I',
    status: 'assigned',
    assignmentDate: new Date('2024-11-22'),
    macAddress: '00:02:08:EF:FC:41',
    location: 'Louga',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-26'),
        action: 'Créé',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN1 830 RC 360 X',
    status: 'assigned',
    assignmentDate: new Date('2024-11-26'),
    macAddress: '00:1D:E7:3F:8B:25',
    location: 'Fatick',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-16'),
        action: 'Invalidé',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN2 419 SH 133 I',
    status: 'assigned',
    assignmentDate: new Date('2024-11-29'),
    macAddress: '00:DC:9E:8E:F2:49',
    location: 'Matam',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-27'),
        action: 'Créé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN2 522 HG 390 P',
    status: 'assigned',
    assignmentDate: new Date('2024-11-22'),
    macAddress: '00:CB:4D:05:2C:DF',
    location: 'Saint-Louis',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-12'),
        action: 'Invalidé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN1 864 PH 476 K',
    status: 'assigned',
    assignmentDate: new Date('2024-11-09'),
    macAddress: '00:99:7B:78:6B:BC',
    location: 'Kolda',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-07'),
        action: 'Invalidé',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN2 781 SO 407 W',
    status: 'assigned',
    assignmentDate: new Date('2024-11-31'),
    macAddress: '00:99:20:C7:A0:72',
    location: 'Fatick',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-07'),
        action: 'Invalidé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN1 425 PE 142 K',
    status: 'assigned',
    assignmentDate: new Date('2024-11-24'),
    macAddress: '00:B7:65:8D:72:35',
    location: 'Dakar',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-15'),
        action: 'Attribué',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN1 329 KR 225 R',
    status: 'assigned',
    assignmentDate: new Date('2024-11-28'),
    macAddress: '00:D0:77:8E:C2:E3',
    location: 'Diourbel',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-27'),
        action: 'Invalidé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN1 679 YH 664 B',
    status: 'assigned',
    assignmentDate: new Date('2024-11-27'),
    macAddress: '00:A5:48:D4:CD:7A',
    location: 'Saint-Louis',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-04'),
        action: 'Attribué',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN2 667 HD 939 N',
    status: 'assigned',
    assignmentDate: new Date('2024-11-22'),
    macAddress: '00:52:06:8E:6B:01',
    location: 'Louga',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-21'),
        action: 'Attribué',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN1 377 QA 148 N',
    status: 'assigned',
    assignmentDate: new Date('2024-11-04'),
    macAddress: '00:22:7A:02:EC:06',
    location: 'Diourbel',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-25'),
        action: 'Attribué',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN1 203 LG 971 C',
    status: 'assigned',
    assignmentDate: new Date('2024-11-18'),
    macAddress: '00:E1:B3:31:48:21',
    location: 'Diourbel',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-21'),
        action: 'Attribué',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN2 524 OG 448 X',
    status: 'assigned',
    assignmentDate: new Date('2024-11-08'),
    macAddress: '00:60:AE:19:44:B1',
    location: 'Sédhiou',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-04'),
        action: 'Créé',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN2 283 PV 604 G',
    status: 'assigned',
    assignmentDate: new Date('2024-11-12'),
    macAddress: '00:6E:DB:68:A7:13',
    location: 'Dakar',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-02'),
        action: 'Invalidé',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN2 691 MK 135 L',
    status: 'assigned',
    assignmentDate: new Date('2024-11-11'),
    macAddress: '00:93:B5:E0:37:5F',
    location: 'Dakar',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-15'),
        action: 'Invalidé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN2 844 YX 383 G',
    status: 'assigned',
    assignmentDate: new Date('2024-11-09'),
    macAddress: '00:C1:F0:C4:8D:98',
    location: 'Matam',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-17'),
        action: 'Créé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN1 799 ZX 525 U',
    status: 'assigned',
    assignmentDate: new Date('2024-11-15'),
    macAddress: '00:F6:EB:CA:A4:DF',
    location: 'Ziguinchor',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-10'),
        action: 'Attribué',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN2 309 MV 415 B',
    status: 'assigned',
    assignmentDate: new Date('2024-11-22'),
    macAddress: '00:DE:33:A3:C5:A7',
    location: 'Kolda',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-06'),
        action: 'Attribué',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN1 408 UI 347 S',
    status: 'assigned',
    assignmentDate: new Date('2024-11-17'),
    macAddress: '00:3D:19:42:B1:64',
    location: 'Kaffrine',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-19'),
        action: 'Créé',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN1 931 FM 151 V',
    status: 'assigned',
    assignmentDate: new Date('2024-11-17'),
    macAddress: '00:3B:59:EE:CC:C4',
    location: 'Thiès',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-20'),
        action: 'Attribué',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN1 269 YP 942 C',
    status: 'assigned',
    assignmentDate: new Date('2024-11-28'),
    macAddress: '00:EF:7F:A1:0F:DF',
    location: 'Kaolack',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-05'),
        action: 'Attribué',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN1 892 EL 694 Y',
    status: 'assigned',
    assignmentDate: new Date('2024-11-10'),
    macAddress: '00:F4:55:90:9F:10',
    location: 'Kaolack',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-29'),
        action: 'Créé',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN2 790 HL 972 P',
    status: 'assigned',
    assignmentDate: new Date('2024-11-08'),
    macAddress: '00:FC:AD:D1:D4:6E',
    location: 'Louga',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-22'),
        action: 'Créé',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN1 483 AJ 593 L',
    status: 'assigned',
    assignmentDate: new Date('2024-11-18'),
    macAddress: '00:C3:36:91:EF:2B',
    location: 'Kolda',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-21'),
        action: 'Créé',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN1 544 GA 976 B',
    status: 'assigned',
    assignmentDate: new Date('2024-11-24'),
    macAddress: '00:65:0A:12:7D:97',
    location: 'Thiès',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-27'),
        action: 'Attribué',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN1 485 WV 628 W',
    status: 'assigned',
    assignmentDate: new Date('2024-11-16'),
    macAddress: '00:A6:D0:87:69:A0',
    location: 'Kaffrine',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-09'),
        action: 'Créé',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN2 951 DX 743 A',
    status: 'assigned',
    assignmentDate: new Date('2024-11-25'),
    macAddress: '00:10:B8:11:61:EA',
    location: 'Diourbel',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-18'),
        action: 'Créé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN2 909 MR 313 C',
    status: 'assigned',
    assignmentDate: new Date('2024-11-07'),
    macAddress: '00:15:39:64:3E:41',
    location: 'Matam',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-18'),
        action: 'Créé',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN1 451 JU 882 L',
    status: 'assigned',
    assignmentDate: new Date('2024-11-11'),
    macAddress: '00:76:6C:F8:2F:C6',
    location: 'Ziguinchor',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-07'),
        action: 'Créé',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN2 132 NI 837 W',
    status: 'assigned',
    assignmentDate: new Date('2024-11-07'),
    macAddress: '00:1B:DF:4E:C3:3C',
    location: 'Matam',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-22'),
        action: 'Invalidé',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN2 398 GS 478 W',
    status: 'assigned',
    assignmentDate: new Date('2024-11-08'),
    macAddress: '00:25:17:CE:FB:1B',
    location: 'Thiès',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-31'),
        action: 'Attribué',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN1 708 ZE 104 I',
    status: 'assigned',
    assignmentDate: new Date('2024-11-28'),
    macAddress: '00:BB:30:78:E3:73',
    location: 'Thiès',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-09'),
        action: 'Invalidé',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN2 590 MV 126 O',
    status: 'assigned',
    assignmentDate: new Date('2024-11-31'),
    macAddress: '00:AA:60:B9:A9:88',
    location: 'Saint-Louis',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-15'),
        action: 'Attribué',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN1 689 CI 858 N',
    status: 'assigned',
    assignmentDate: new Date('2024-11-09'),
    macAddress: '00:91:E6:F1:60:BD',
    location: 'Matam',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-28'),
        action: 'Attribué',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN1 204 RX 222 H',
    status: 'assigned',
    assignmentDate: new Date('2024-11-14'),
    macAddress: '00:9D:2A:7F:54:FC',
    location: 'Fatick',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-09'),
        action: 'Créé',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN2 217 RQ 251 I',
    status: 'assigned',
    assignmentDate: new Date('2024-11-05'),
    macAddress: '00:C7:EC:40:2E:10',
    location: 'Kolda',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-25'),
        action: 'Créé',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN1 461 UC 324 W',
    status: 'assigned',
    assignmentDate: new Date('2024-11-19'),
    macAddress: '00:43:D4:D8:76:5F',
    location: 'Dakar',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-07'),
        action: 'Créé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN2 590 TT 193 B',
    status: 'assigned',
    assignmentDate: new Date('2024-11-02'),
    macAddress: '00:D1:C6:F7:9A:C4',
    location: 'Ziguinchor',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-27'),
        action: 'Créé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN2 328 CH 856 T',
    status: 'assigned',
    assignmentDate: new Date('2024-11-27'),
    macAddress: '00:83:51:F9:42:15',
    location: 'Kaolack',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-07'),
        action: 'Attribué',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN1 680 JC 792 T',
    status: 'assigned',
    assignmentDate: new Date('2024-11-31'),
    macAddress: '00:F1:44:D5:25:46',
    location: 'Kolda',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-10'),
        action: 'Invalidé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN1 385 IG 577 W',
    status: 'assigned',
    assignmentDate: new Date('2024-11-17'),
    macAddress: '00:4C:41:66:1F:2A',
    location: 'Sédhiou',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-02'),
        action: 'Attribué',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN1 973 UV 861 A',
    status: 'assigned',
    assignmentDate: new Date('2024-11-21'),
    macAddress: '00:6D:81:9F:74:60',
    location: 'Diourbel',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-15'),
        action: 'Invalidé',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN1 976 LP 583 I',
    status: 'assigned',
    assignmentDate: new Date('2024-11-02'),
    macAddress: '00:D7:87:23:96:F6',
    location: 'Matam',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-13'),
        action: 'Attribué',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN1 353 RW 432 N',
    status: 'assigned',
    assignmentDate: new Date('2024-11-06'),
    macAddress: '00:7A:1B:6C:FB:59',
    location: 'Ziguinchor',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-05'),
        action: 'Invalidé',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN1 486 WD 417 I',
    status: 'assigned',
    assignmentDate: new Date('2024-11-22'),
    macAddress: '00:A0:61:0C:CB:2C',
    location: 'Diourbel',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-02'),
        action: 'Créé',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN2 823 MF 339 P',
    status: 'assigned',
    assignmentDate: new Date('2024-11-27'),
    macAddress: '00:FC:18:93:11:D1',
    location: 'Louga',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-16'),
        action: 'Attribué',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN1 564 BI 914 T',
    status: 'assigned',
    assignmentDate: new Date('2024-11-27'),
    macAddress: '00:E5:80:0B:A0:CA',
    location: 'Louga',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-11'),
        action: 'Attribué',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN2 826 YM 898 C',
    status: 'assigned',
    assignmentDate: new Date('2024-11-09'),
    macAddress: '00:06:0D:0F:46:FB',
    location: 'Saint-Louis',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-09'),
        action: 'Créé',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN2 420 AS 843 K',
    status: 'assigned',
    assignmentDate: new Date('2024-11-31'),
    macAddress: '00:6C:B1:17:A5:DD',
    location: 'Louga',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-24'),
        action: 'Créé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN2 467 MX 182 H',
    status: 'assigned',
    assignmentDate: new Date('2024-11-07'),
    macAddress: '00:8B:EC:C5:79:A7',
    location: 'Kaffrine',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-19'),
        action: 'Attribué',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN1 280 JF 841 N',
    status: 'assigned',
    assignmentDate: new Date('2024-11-05'),
    macAddress: '00:30:27:6F:C5:76',
    location: 'Matam',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-23'),
        action: 'Créé',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN1 813 CD 181 J',
    status: 'assigned',
    assignmentDate: new Date('2024-11-18'),
    macAddress: '00:DF:3A:CF:5E:54',
    location: 'Kaffrine',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-15'),
        action: 'Invalidé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN2 851 WL 484 Q',
    status: 'assigned',
    assignmentDate: new Date('2024-11-14'),
    macAddress: '00:C5:EB:E6:7F:0F',
    location: 'Diourbel',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-21'),
        action: 'Créé',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN1 267 RO 724 V',
    status: 'assigned',
    assignmentDate: new Date('2024-11-24'),
    macAddress: '00:84:BE:D0:1E:3A',
    location: 'Kolda',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-02'),
        action: 'Créé',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN2 990 CE 869 C',
    status: 'assigned',
    assignmentDate: new Date('2024-11-18'),
    macAddress: '00:0E:41:DD:A8:B0',
    location: 'Kaolack',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-25'),
        action: 'Invalidé',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN1 439 NN 803 F',
    status: 'assigned',
    assignmentDate: new Date('2024-11-25'),
    macAddress: '00:EE:5F:C2:4F:CD',
    location: 'Sédhiou',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-05'),
        action: 'Attribué',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN1 486 GA 409 Y',
    status: 'assigned',
    assignmentDate: new Date('2024-11-14'),
    macAddress: '00:2E:60:60:D6:D6',
    location: 'Dakar',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-13'),
        action: 'Créé',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN1 347 BF 263 S',
    status: 'assigned',
    assignmentDate: new Date('2024-11-04'),
    macAddress: '00:3C:71:33:7E:9F',
    location: 'Ziguinchor',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-25'),
        action: 'Créé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN1 349 AT 911 A',
    status: 'assigned',
    assignmentDate: new Date('2024-11-25'),
    macAddress: '00:B8:75:0B:6C:25',
    location: 'Thiès',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-18'),
        action: 'Créé',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN1 723 XW 935 O',
    status: 'assigned',
    assignmentDate: new Date('2024-11-15'),
    macAddress: '00:79:CF:E8:23:06',
    location: 'Sédhiou',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-02'),
        action: 'Invalidé',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN2 796 RN 704 J',
    status: 'assigned',
    assignmentDate: new Date('2024-11-18'),
    macAddress: '00:B4:83:F1:B3:35',
    location: 'Matam',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-22'),
        action: 'Créé',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN2 767 QY 641 L',
    status: 'assigned',
    assignmentDate: new Date('2024-11-15'),
    macAddress: '00:77:03:B4:09:5D',
    location: 'Dakar',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-02'),
        action: 'Attribué',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN1 495 OD 137 J',
    status: 'assigned',
    assignmentDate: new Date('2024-11-19'),
    macAddress: '00:8E:E5:72:4E:E1',
    location: 'Diourbel',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-17'),
        action: 'Créé',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN2 915 LM 570 W',
    status: 'assigned',
    assignmentDate: new Date('2024-11-13'),
    macAddress: '00:A8:13:A5:62:2A',
    location: 'Ziguinchor',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-04'),
        action: 'Créé',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN1 586 ZZ 917 B',
    status: 'assigned',
    assignmentDate: new Date('2024-11-14'),
    macAddress: '00:CE:3E:26:26:42',
    location: 'Thiès',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-20'),
        action: 'Invalidé',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN2 395 EL 282 G',
    status: 'assigned',
    assignmentDate: new Date('2024-11-29'),
    macAddress: '00:66:D9:50:F2:49',
    location: 'Dakar',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-21'),
        action: 'Créé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN2 221 ZL 814 T',
    status: 'assigned',
    assignmentDate: new Date('2024-11-26'),
    macAddress: '00:23:EC:34:01:F2',
    location: 'Louga',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-21'),
        action: 'Créé',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN1 485 JN 983 S',
    status: 'assigned',
    assignmentDate: new Date('2024-11-04'),
    macAddress: '00:31:CF:D2:7B:FF',
    location: 'Fatick',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-18'),
        action: 'Invalidé',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN2 928 PL 935 V',
    status: 'assigned',
    assignmentDate: new Date('2024-11-19'),
    macAddress: '00:16:84:94:DC:40',
    location: 'Thiès',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-22'),
        action: 'Créé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN2 289 AI 553 V',
    status: 'assigned',
    assignmentDate: new Date('2024-11-20'),
    macAddress: '00:92:C1:CE:48:CB',
    location: 'Fatick',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-26'),
        action: 'Attribué',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN1 301 LB 256 I',
    status: 'assigned',
    assignmentDate: new Date('2024-11-06'),
    macAddress: '00:FE:06:6E:BD:F9',
    location: 'Diourbel',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-04'),
        action: 'Attribué',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN2 309 GP 750 A',
    status: 'assigned',
    assignmentDate: new Date('2024-11-04'),
    macAddress: '00:8C:D5:28:B5:EE',
    location: 'Tambacounda',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-28'),
        action: 'Attribué',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN2 109 WU 271 A',
    status: 'assigned',
    assignmentDate: new Date('2024-11-17'),
    macAddress: '00:24:C4:C8:1E:39',
    location: 'Tambacounda',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-26'),
        action: 'Attribué',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN1 957 HK 439 T',
    status: 'assigned',
    assignmentDate: new Date('2024-11-24'),
    macAddress: '00:AF:03:AD:1E:62',
    location: 'Kaolack',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-16'),
        action: 'Invalidé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN1 373 GG 921 N',
    status: 'assigned',
    assignmentDate: new Date('2024-11-27'),
    macAddress: '00:25:46:D6:6B:94',
    location: 'Matam',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-29'),
        action: 'Invalidé',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN1 982 DH 749 S',
    status: 'assigned',
    assignmentDate: new Date('2024-11-03'),
    macAddress: '00:9A:AD:B9:0B:63',
    location: 'Kaffrine',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-14'),
        action: 'Invalidé',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN2 438 LH 538 O',
    status: 'assigned',
    assignmentDate: new Date('2024-11-20'),
    macAddress: '00:BF:7B:6C:C3:8C',
    location: 'Kolda',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-23'),
        action: 'Invalidé',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN1 441 IP 753 Q',
    status: 'assigned',
    assignmentDate: new Date('2024-11-25'),
    macAddress: '00:79:BE:81:C4:AD',
    location: 'Louga',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-03'),
        action: 'Créé',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN1 337 XG 955 O',
    status: 'assigned',
    assignmentDate: new Date('2024-11-17'),
    macAddress: '00:69:8E:3C:A8:92',
    location: 'Ziguinchor',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-26'),
        action: 'Attribué',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN1 715 HH 849 D',
    status: 'assigned',
    assignmentDate: new Date('2024-11-05'),
    macAddress: '00:3C:87:91:47:0E',
    location: 'Kaffrine',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-05'),
        action: 'Créé',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN1 820 HN 230 Y',
    status: 'assigned',
    assignmentDate: new Date('2024-11-25'),
    macAddress: '00:7F:27:C2:E1:0D',
    location: 'Kolda',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-19'),
        action: 'Invalidé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN1 560 BJ 686 U',
    status: 'assigned',
    assignmentDate: new Date('2024-11-20'),
    macAddress: '00:FD:68:D1:F9:A5',
    location: 'Sédhiou',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-28'),
        action: 'Créé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN1 260 CI 305 A',
    status: 'assigned',
    assignmentDate: new Date('2024-11-06'),
    macAddress: '00:EA:D7:37:46:E4',
    location: 'Saint-Louis',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-02'),
        action: 'Invalidé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN1 590 OJ 743 Q',
    status: 'assigned',
    assignmentDate: new Date('2024-11-22'),
    macAddress: '00:34:57:34:85:68',
    location: 'Fatick',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-28'),
        action: 'Invalidé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN1 695 FI 332 T',
    status: 'assigned',
    assignmentDate: new Date('2024-11-05'),
    macAddress: '00:62:71:40:4F:31',
    location: 'Kaffrine',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-02'),
        action: 'Attribué',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN1 705 NV 574 W',
    status: 'assigned',
    assignmentDate: new Date('2024-11-05'),
    macAddress: '00:5F:76:4F:30:A9',
    location: 'Diourbel',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-05'),
        action: 'Créé',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN2 573 LP 210 H',
    status: 'assigned',
    assignmentDate: new Date('2024-11-03'),
    macAddress: '00:98:15:8A:F5:EC',
    location: 'Dakar',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-22'),
        action: 'Créé',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN1 984 GF 496 C',
    status: 'assigned',
    assignmentDate: new Date('2024-11-03'),
    macAddress: '00:57:A2:B2:DE:5C',
    location: 'Sédhiou',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-08'),
        action: 'Créé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN1 485 FB 460 B',
    status: 'assigned',
    assignmentDate: new Date('2024-11-06'),
    macAddress: '00:BB:45:DF:75:48',
    location: 'Thiès',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-03'),
        action: 'Créé',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN2 459 VU 499 F',
    status: 'assigned',
    assignmentDate: new Date('2024-11-19'),
    macAddress: '00:C2:65:AE:1A:EB',
    location: 'Diourbel',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-04'),
        action: 'Invalidé',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN2 202 SZ 222 B',
    status: 'assigned',
    assignmentDate: new Date('2024-11-08'),
    macAddress: '00:90:08:0F:5A:72',
    location: 'Sédhiou',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-03'),
        action: 'Invalidé',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN2 159 NV 429 O',
    status: 'assigned',
    assignmentDate: new Date('2024-11-03'),
    macAddress: '00:5C:03:61:FF:21',
    location: 'Louga',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-20'),
        action: 'Créé',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN2 727 NP 649 L',
    status: 'assigned',
    assignmentDate: new Date('2024-11-04'),
    macAddress: '00:33:95:FE:4C:F2',
    location: 'Fatick',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-21'),
        action: 'Créé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN1 879 QZ 564 N',
    status: 'assigned',
    assignmentDate: new Date('2024-11-05'),
    macAddress: '00:9C:D3:8D:D7:11',
    location: 'Dakar',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-05'),
        action: 'Invalidé',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN1 769 QV 407 L',
    status: 'assigned',
    assignmentDate: new Date('2024-11-07'),
    macAddress: '00:AF:F2:B7:EC:6F',
    location: 'Matam',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-04'),
        action: 'Créé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN2 574 IK 995 R',
    status: 'assigned',
    assignmentDate: new Date('2024-11-16'),
    macAddress: '00:7B:65:EF:4A:11',
    location: 'Thiès',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-25'),
        action: 'Invalidé',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN2 526 XQ 647 S',
    status: 'assigned',
    assignmentDate: new Date('2024-11-28'),
    macAddress: '00:1A:78:97:C5:82',
    location: 'Tambacounda',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-13'),
        action: 'Créé',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN2 935 YL 990 Z',
    status: 'assigned',
    assignmentDate: new Date('2024-11-13'),
    macAddress: '00:5E:BC:66:D3:5A',
    location: 'Fatick',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-19'),
        action: 'Attribué',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN1 853 YE 285 L',
    status: 'assigned',
    assignmentDate: new Date('2024-11-17'),
    macAddress: '00:6F:05:F4:E6:B8',
    location: 'Sédhiou',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-07'),
        action: 'Attribué',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN1 722 ZI 818 I',
    status: 'assigned',
    assignmentDate: new Date('2024-11-25'),
    macAddress: '00:17:E7:14:C5:A0',
    location: 'Saint-Louis',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-09'),
        action: 'Attribué',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN2 971 AP 313 P',
    status: 'assigned',
    assignmentDate: new Date('2024-11-06'),
    macAddress: '00:DA:2C:A2:5B:DF',
    location: 'Tambacounda',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-07'),
        action: 'Invalidé',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN1 484 QS 348 M',
    status: 'assigned',
    assignmentDate: new Date('2024-11-26'),
    macAddress: '00:81:32:B9:2B:3E',
    location: 'Sédhiou',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-19'),
        action: 'Invalidé',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN1 519 XX 703 B',
    status: 'assigned',
    assignmentDate: new Date('2024-11-25'),
    macAddress: '00:4D:73:82:9F:34',
    location: 'Fatick',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-06'),
        action: 'Invalidé',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN1 535 NL 207 X',
    status: 'assigned',
    assignmentDate: new Date('2024-11-25'),
    macAddress: '00:CC:16:D1:AE:E0',
    location: 'Louga',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-03'),
        action: 'Invalidé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN1 329 LZ 981 D',
    status: 'assigned',
    assignmentDate: new Date('2024-11-17'),
    macAddress: '00:33:CF:A3:87:DE',
    location: 'Tambacounda',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-17'),
        action: 'Attribué',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN1 748 GF 493 A',
    status: 'assigned',
    assignmentDate: new Date('2024-11-25'),
    macAddress: '00:32:EE:6D:65:9C',
    location: 'Saint-Louis',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-12'),
        action: 'Attribué',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN2 784 TT 589 X',
    status: 'assigned',
    assignmentDate: new Date('2024-11-24'),
    macAddress: '00:7B:90:72:CE:14',
    location: 'Fatick',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-14'),
        action: 'Créé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN1 373 WD 152 F',
    status: 'assigned',
    assignmentDate: new Date('2024-11-03'),
    macAddress: '00:18:F1:24:8F:A9',
    location: 'Kaolack',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-08'),
        action: 'Attribué',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN2 579 TT 692 M',
    status: 'assigned',
    assignmentDate: new Date('2024-11-28'),
    macAddress: '00:BE:78:EA:5D:44',
    location: 'Matam',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-23'),
        action: 'Attribué',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN1 136 WS 862 H',
    status: 'assigned',
    assignmentDate: new Date('2024-11-22'),
    macAddress: '00:F9:95:F6:EB:86',
    location: 'Ziguinchor',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-29'),
        action: 'Attribué',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN1 274 XV 968 U',
    status: 'assigned',
    assignmentDate: new Date('2024-11-28'),
    macAddress: '00:F8:A9:60:F9:D6',
    location: 'Tambacounda',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-04'),
        action: 'Attribué',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN2 356 QL 495 S',
    status: 'assigned',
    assignmentDate: new Date('2024-11-11'),
    macAddress: '00:64:DE:F1:E8:6C',
    location: 'Kaffrine',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-19'),
        action: 'Créé',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN2 725 DH 400 V',
    status: 'assigned',
    assignmentDate: new Date('2024-11-09'),
    macAddress: '00:BB:73:92:40:DB',
    location: 'Kolda',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-20'),
        action: 'Créé',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN2 948 OX 251 S',
    status: 'assigned',
    assignmentDate: new Date('2024-11-12'),
    macAddress: '00:71:5A:01:D6:D0',
    location: 'Kolda',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-20'),
        action: 'Créé',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN1 762 JD 786 B',
    status: 'assigned',
    assignmentDate: new Date('2024-11-12'),
    macAddress: '00:21:F1:4E:AB:1F',
    location: 'Saint-Louis',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-03'),
        action: 'Créé',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN2 183 SR 629 N',
    status: 'assigned',
    assignmentDate: new Date('2024-11-09'),
    macAddress: '00:03:36:5C:50:BA',
    location: 'Kolda',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-09'),
        action: 'Invalidé',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN1 216 JB 929 M',
    status: 'assigned',
    assignmentDate: new Date('2024-11-05'),
    macAddress: '00:29:B8:4B:A5:30',
    location: 'Dakar',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-14'),
        action: 'Attribué',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN1 460 YD 136 F',
    status: 'assigned',
    assignmentDate: new Date('2024-11-02'),
    macAddress: '00:8C:4C:4B:FE:FD',
    location: 'Sédhiou',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-20'),
        action: 'Créé',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN1 216 IG 449 E',
    status: 'assigned',
    assignmentDate: new Date('2024-11-11'),
    macAddress: '00:ED:E1:56:E0:B1',
    location: 'Matam',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-14'),
        action: 'Créé',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN1 385 ET 955 E',
    status: 'assigned',
    assignmentDate: new Date('2024-11-13'),
    macAddress: '00:AB:46:33:96:8E',
    location: 'Dakar',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-09'),
        action: 'Créé',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN1 483 NN 176 Y',
    status: 'assigned',
    assignmentDate: new Date('2024-11-15'),
    macAddress: '00:17:2C:9E:A7:13',
    location: 'Dakar',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-31'),
        action: 'Créé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN2 177 HA 328 C',
    status: 'assigned',
    assignmentDate: new Date('2024-11-05'),
    macAddress: '00:13:D6:89:7C:BD',
    location: 'Saint-Louis',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-27'),
        action: 'Attribué',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN2 683 MD 286 O',
    status: 'assigned',
    assignmentDate: new Date('2024-11-30'),
    macAddress: '00:44:57:2F:C1:23',
    location: 'Saint-Louis',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-18'),
        action: 'Invalidé',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN1 193 TG 776 A',
    status: 'assigned',
    assignmentDate: new Date('2024-11-16'),
    macAddress: '00:60:12:59:94:BD',
    location: 'Sédhiou',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-18'),
        action: 'Créé',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN2 983 ML 308 A',
    status: 'assigned',
    assignmentDate: new Date('2024-11-05'),
    macAddress: '00:06:23:B8:FF:72',
    location: 'Saint-Louis',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-12'),
        action: 'Attribué',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN2 652 PN 756 E',
    status: 'assigned',
    assignmentDate: new Date('2024-11-25'),
    macAddress: '00:C6:99:AA:2F:08',
    location: 'Diourbel',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-18'),
        action: 'Créé',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN1 654 QZ 553 J',
    status: 'assigned',
    assignmentDate: new Date('2024-11-05'),
    macAddress: '00:1D:5F:6F:1E:B6',
    location: 'Dakar',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-10'),
        action: 'Invalidé',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN2 256 GE 301 Y',
    status: 'assigned',
    assignmentDate: new Date('2024-11-31'),
    macAddress: '00:3D:81:56:B5:E9',
    location: 'Sédhiou',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-18'),
        action: 'Invalidé',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN1 451 YT 905 M',
    status: 'assigned',
    assignmentDate: new Date('2024-11-05'),
    macAddress: '00:4A:6F:F9:86:8C',
    location: 'Matam',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-24'),
        action: 'Invalidé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN1 747 EI 587 O',
    status: 'assigned',
    assignmentDate: new Date('2024-11-23'),
    macAddress: '00:61:1E:5F:A0:E2',
    location: 'Saint-Louis',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-15'),
        action: 'Invalidé',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN1 846 XU 812 G',
    status: 'assigned',
    assignmentDate: new Date('2024-11-27'),
    macAddress: '00:59:85:DF:C5:A6',
    location: 'Sédhiou',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-04'),
        action: 'Créé',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN2 792 CG 134 D',
    status: 'assigned',
    assignmentDate: new Date('2024-11-09'),
    macAddress: '00:66:6F:EB:03:D5',
    location: 'Kolda',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-10'),
        action: 'Attribué',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN2 671 UQ 938 Z',
    status: 'assigned',
    assignmentDate: new Date('2024-11-19'),
    macAddress: '00:05:04:48:70:6E',
    location: 'Dakar',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-17'),
        action: 'Créé',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN2 472 MI 167 D',
    status: 'assigned',
    assignmentDate: new Date('2024-11-24'),
    macAddress: '00:63:2D:D0:44:48',
    location: 'Kaolack',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-05'),
        action: 'Invalidé',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN2 966 ZY 163 Q',
    status: 'assigned',
    assignmentDate: new Date('2024-11-14'),
    macAddress: '00:A4:BC:6E:F2:8C',
    location: 'Kaffrine',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-06'),
        action: 'Attribué',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN1 848 QJ 349 S',
    status: 'assigned',
    assignmentDate: new Date('2024-11-10'),
    macAddress: '00:26:9A:8D:86:2E',
    location: 'Tambacounda',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-08'),
        action: 'Attribué',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN2 615 SN 585 S',
    status: 'assigned',
    assignmentDate: new Date('2024-11-10'),
    macAddress: '00:DE:4F:4F:52:0F',
    location: 'Diourbel',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-12'),
        action: 'Invalidé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN2 834 XL 643 C',
    status: 'assigned',
    assignmentDate: new Date('2024-11-10'),
    macAddress: '00:FE:48:BB:9B:07',
    location: 'Kaolack',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-06'),
        action: 'Attribué',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN2 386 WW 434 U',
    status: 'assigned',
    assignmentDate: new Date('2024-11-30'),
    macAddress: '00:8A:8B:29:75:48',
    location: 'Tambacounda',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-23'),
        action: 'Attribué',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN1 631 FT 870 C',
    status: 'assigned',
    assignmentDate: new Date('2024-11-15'),
    macAddress: '00:BD:97:B8:61:20',
    location: 'Kolda',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-29'),
        action: 'Attribué',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN2 815 QA 830 M',
    status: 'assigned',
    assignmentDate: new Date('2024-11-07'),
    macAddress: '00:CC:74:EC:83:E7',
    location: 'Louga',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-17'),
        action: 'Attribué',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN2 942 WV 287 E',
    status: 'assigned',
    assignmentDate: new Date('2024-11-11'),
    macAddress: '00:BC:26:3C:C5:35',
    location: 'Ziguinchor',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-08'),
        action: 'Attribué',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN1 267 QA 101 K',
    status: 'assigned',
    assignmentDate: new Date('2024-11-12'),
    macAddress: '00:EA:91:76:06:95',
    location: 'Ziguinchor',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-18'),
        action: 'Attribué',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN1 309 YK 368 W',
    status: 'assigned',
    assignmentDate: new Date('2024-11-27'),
    macAddress: '00:E0:31:74:39:DF',
    location: 'Ziguinchor',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-25'),
        action: 'Attribué',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN2 653 HP 441 F',
    status: 'assigned',
    assignmentDate: new Date('2024-11-20'),
    macAddress: '00:DB:07:83:EC:EC',
    location: 'Kaolack',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-20'),
        action: 'Attribué',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN2 711 RN 471 H',
    status: 'assigned',
    assignmentDate: new Date('2024-11-30'),
    macAddress: '00:6F:3C:79:1A:B9',
    location: 'Tambacounda',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-23'),
        action: 'Créé',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN2 795 TV 180 K',
    status: 'assigned',
    assignmentDate: new Date('2024-11-24'),
    macAddress: '00:D1:71:F1:A5:8F',
    location: 'Ziguinchor',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-14'),
        action: 'Créé',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN2 418 DU 311 H',
    status: 'assigned',
    assignmentDate: new Date('2024-11-02'),
    macAddress: '00:76:5A:DC:0C:04',
    location: 'Matam',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-09'),
        action: 'Attribué',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN2 829 FE 232 Y',
    status: 'assigned',
    assignmentDate: new Date('2024-11-07'),
    macAddress: '00:B6:5D:8A:C1:16',
    location: 'Kaffrine',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-26'),
        action: 'Attribué',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN1 155 MB 993 R',
    status: 'assigned',
    assignmentDate: new Date('2024-11-19'),
    macAddress: '00:9A:93:58:3C:90',
    location: 'Kolda',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-15'),
        action: 'Attribué',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN1 119 TZ 955 K',
    status: 'assigned',
    assignmentDate: new Date('2024-11-09'),
    macAddress: '00:2B:37:20:5C:7D',
    location: 'Fatick',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-11'),
        action: 'Invalidé',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN2 595 OR 534 Z',
    status: 'assigned',
    assignmentDate: new Date('2024-11-08'),
    macAddress: '00:D3:D2:2B:C8:AB',
    location: 'Matam',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-19'),
        action: 'Créé',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN1 616 VI 977 E',
    status: 'assigned',
    assignmentDate: new Date('2024-11-07'),
    macAddress: '00:F3:E9:36:87:58',
    location: 'Tambacounda',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-09'),
        action: 'Créé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN1 553 GI 679 X',
    status: 'assigned',
    assignmentDate: new Date('2024-11-10'),
    macAddress: '00:5E:B7:02:1C:73',
    location: 'Fatick',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-29'),
        action: 'Créé',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN2 470 OX 772 K',
    status: 'assigned',
    assignmentDate: new Date('2024-11-14'),
    macAddress: '00:1F:CD:0C:77:13',
    location: 'Dakar',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-30'),
        action: 'Attribué',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN1 463 PP 287 P',
    status: 'assigned',
    assignmentDate: new Date('2024-11-19'),
    macAddress: '00:B5:47:33:7F:C5',
    location: 'Tambacounda',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-04'),
        action: 'Invalidé',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN1 845 RM 599 C',
    status: 'assigned',
    assignmentDate: new Date('2024-11-13'),
    macAddress: '00:D7:E3:C0:02:08',
    location: 'Diourbel',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-14'),
        action: 'Attribué',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN1 544 KR 931 N',
    status: 'assigned',
    assignmentDate: new Date('2024-11-13'),
    macAddress: '00:8B:17:57:68:0D',
    location: 'Sédhiou',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-22'),
        action: 'Créé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN2 233 LM 407 D',
    status: 'assigned',
    assignmentDate: new Date('2024-11-06'),
    macAddress: '00:2F:44:C8:1B:30',
    location: 'Kaolack',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-20'),
        action: 'Créé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN1 772 ZQ 290 H',
    status: 'assigned',
    assignmentDate: new Date('2024-11-28'),
    macAddress: '00:24:CF:C9:A2:EA',
    location: 'Tambacounda',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-10'),
        action: 'Créé',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN2 888 NU 711 A',
    status: 'assigned',
    assignmentDate: new Date('2024-11-22'),
    macAddress: '00:FA:F7:27:72:52',
    location: 'Ziguinchor',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-26'),
        action: 'Invalidé',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN2 177 KU 861 J',
    status: 'assigned',
    assignmentDate: new Date('2024-11-05'),
    macAddress: '00:A8:7E:D6:D4:47',
    location: 'Louga',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-19'),
        action: 'Créé',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN1 839 ZN 809 E',
    status: 'assigned',
    assignmentDate: new Date('2024-11-27'),
    macAddress: '00:41:75:1C:56:B3',
    location: 'Ziguinchor',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-10'),
        action: 'Créé',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN2 824 DN 325 F',
    status: 'assigned',
    assignmentDate: new Date('2024-11-30'),
    macAddress: '00:51:64:A5:F9:8C',
    location: 'Sédhiou',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-04'),
        action: 'Invalidé',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN2 253 FF 341 Z',
    status: 'assigned',
    assignmentDate: new Date('2024-11-29'),
    macAddress: '00:57:12:B4:A0:A2',
    location: 'Thiès',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-30'),
        action: 'Créé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN1 435 CI 612 Z',
    status: 'assigned',
    assignmentDate: new Date('2024-11-15'),
    macAddress: '00:A3:B0:50:8D:7E',
    location: 'Louga',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-05'),
        action: 'Créé',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN2 773 TZ 210 E',
    status: 'assigned',
    assignmentDate: new Date('2024-11-24'),
    macAddress: '00:20:D9:09:86:14',
    location: 'Matam',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-09'),
        action: 'Invalidé',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN2 917 DL 144 Y',
    status: 'assigned',
    assignmentDate: new Date('2024-11-20'),
    macAddress: '00:70:E1:12:03:8D',
    location: 'Matam',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-19'),
        action: 'Attribué',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN2 670 IF 684 W',
    status: 'assigned',
    assignmentDate: new Date('2024-11-10'),
    macAddress: '00:70:7A:BA:52:A6',
    location: 'Tambacounda',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-17'),
        action: 'Invalidé',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN2 179 EQ 461 F',
    status: 'assigned',
    assignmentDate: new Date('2024-11-06'),
    macAddress: '00:0B:84:EC:DC:D3',
    location: 'Kaolack',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-20'),
        action: 'Invalidé',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN1 184 SD 666 V',
    status: 'assigned',
    assignmentDate: new Date('2024-11-05'),
    macAddress: '00:9E:72:E3:A9:89',
    location: 'Fatick',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-27'),
        action: 'Attribué',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN1 667 JY 790 I',
    status: 'assigned',
    assignmentDate: new Date('2024-11-23'),
    macAddress: '00:D1:D9:83:4A:D7',
    location: 'Louga',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-05'),
        action: 'Invalidé',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN1 779 XG 928 Q',
    status: 'assigned',
    assignmentDate: new Date('2024-11-10'),
    macAddress: '00:E3:97:14:B7:A5',
    location: 'Fatick',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-26'),
        action: 'Invalidé',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN1 576 XA 249 A',
    status: 'assigned',
    assignmentDate: new Date('2024-11-31'),
    macAddress: '00:0C:B7:37:80:2E',
    location: 'Diourbel',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-28'),
        action: 'Créé',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN1 457 PL 911 J',
    status: 'assigned',
    assignmentDate: new Date('2024-11-19'),
    macAddress: '00:9B:88:6E:F6:5C',
    location: 'Matam',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-14'),
        action: 'Créé',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN1 271 NI 219 A',
    status: 'assigned',
    assignmentDate: new Date('2024-11-03'),
    macAddress: '00:BA:8B:83:FA:2E',
    location: 'Fatick',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-13'),
        action: 'Créé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN2 688 MG 582 G',
    status: 'assigned',
    assignmentDate: new Date('2024-11-07'),
    macAddress: '00:1A:75:71:06:15',
    location: 'Kaolack',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-16'),
        action: 'Invalidé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN1 205 JB 330 L',
    status: 'assigned',
    assignmentDate: new Date('2024-11-16'),
    macAddress: '00:48:83:17:BC:2B',
    location: 'Fatick',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-12'),
        action: 'Créé',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN2 210 NG 711 S',
    status: 'assigned',
    assignmentDate: new Date('2024-11-24'),
    macAddress: '00:98:05:00:81:94',
    location: 'Ziguinchor',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-24'),
        action: 'Créé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN2 681 XR 835 D',
    status: 'assigned',
    assignmentDate: new Date('2024-11-22'),
    macAddress: '00:D7:02:22:4F:60',
    location: 'Sédhiou',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-31'),
        action: 'Attribué',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN2 672 KI 310 U',
    status: 'assigned',
    assignmentDate: new Date('2024-11-05'),
    macAddress: '00:DD:F8:61:92:5A',
    location: 'Kolda',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-21'),
        action: 'Créé',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN1 212 YF 296 G',
    status: 'assigned',
    assignmentDate: new Date('2024-11-03'),
    macAddress: '00:BD:F4:1B:51:53',
    location: 'Kaolack',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-20'),
        action: 'Invalidé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN1 508 AX 352 Z',
    status: 'assigned',
    assignmentDate: new Date('2024-11-29'),
    macAddress: '00:6E:2B:39:B3:50',
    location: 'Saint-Louis',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-03'),
        action: 'Attribué',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN2 870 RC 451 U',
    status: 'assigned',
    assignmentDate: new Date('2024-11-31'),
    macAddress: '00:F4:A0:F1:34:1B',
    location: 'Fatick',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-10'),
        action: 'Créé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN1 630 LH 503 O',
    status: 'assigned',
    assignmentDate: new Date('2024-11-09'),
    macAddress: '00:B4:32:79:B4:78',
    location: 'Kaolack',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-20'),
        action: 'Créé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN1 564 QC 567 A',
    status: 'assigned',
    assignmentDate: new Date('2024-11-08'),
    macAddress: '00:83:2D:01:0A:A7',
    location: 'Saint-Louis',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-03'),
        action: 'Invalidé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN2 488 MD 693 D',
    status: 'assigned',
    assignmentDate: new Date('2024-11-11'),
    macAddress: '00:BD:E0:2B:F6:B4',
    location: 'Diourbel',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-30'),
        action: 'Invalidé',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN2 145 MV 359 Y',
    status: 'assigned',
    assignmentDate: new Date('2024-11-11'),
    macAddress: '00:4D:0D:38:15:7F',
    location: 'Dakar',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-11'),
        action: 'Créé',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN2 695 TT 242 Z',
    status: 'assigned',
    assignmentDate: new Date('2024-11-06'),
    macAddress: '00:B7:98:69:61:9F',
    location: 'Dakar',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-26'),
        action: 'Attribué',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN1 486 GH 893 F',
    status: 'assigned',
    assignmentDate: new Date('2024-11-24'),
    macAddress: '00:3F:3F:E3:B8:78',
    location: 'Thiès',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-02'),
        action: 'Invalidé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN2 336 PQ 977 E',
    status: 'assigned',
    assignmentDate: new Date('2024-11-18'),
    macAddress: '00:2D:C8:FD:1D:1A',
    location: 'Kolda',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-14'),
        action: 'Attribué',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN1 658 YB 625 W',
    status: 'assigned',
    assignmentDate: new Date('2024-11-19'),
    macAddress: '00:DC:B0:F8:65:11',
    location: 'Sédhiou',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-15'),
        action: 'Attribué',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN2 999 DE 310 R',
    status: 'assigned',
    assignmentDate: new Date('2024-11-12'),
    macAddress: '00:89:9A:53:CF:77',
    location: 'Dakar',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-10'),
        action: 'Invalidé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN2 205 XY 176 G',
    status: 'assigned',
    assignmentDate: new Date('2024-11-25'),
    macAddress: '00:A4:9E:A0:18:F8',
    location: 'Sédhiou',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-05'),
        action: 'Créé',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN2 228 PF 206 Z',
    status: 'assigned',
    assignmentDate: new Date('2024-11-16'),
    macAddress: '00:35:EE:23:EC:0F',
    location: 'Kaffrine',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-02'),
        action: 'Créé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN2 554 DA 436 M',
    status: 'assigned',
    assignmentDate: new Date('2024-11-16'),
    macAddress: '00:7C:83:67:CE:E5',
    location: 'Fatick',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-11'),
        action: 'Attribué',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN1 638 XR 443 O',
    status: 'assigned',
    assignmentDate: new Date('2024-11-02'),
    macAddress: '00:9E:24:80:CE:03',
    location: 'Kaffrine',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-12'),
        action: 'Invalidé',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN1 875 PI 865 Y',
    status: 'assigned',
    assignmentDate: new Date('2024-11-31'),
    macAddress: '00:F9:6D:68:68:68',
    location: 'Fatick',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-17'),
        action: 'Invalidé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN1 651 YX 543 B',
    status: 'assigned',
    assignmentDate: new Date('2024-11-18'),
    macAddress: '00:35:67:62:D3:B5',
    location: 'Sédhiou',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-10'),
        action: 'Créé',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN2 291 DX 533 K',
    status: 'assigned',
    assignmentDate: new Date('2024-11-26'),
    macAddress: '00:0F:76:7D:93:18',
    location: 'Diourbel',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-08'),
        action: 'Créé',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN1 484 MI 608 P',
    status: 'assigned',
    assignmentDate: new Date('2024-11-21'),
    macAddress: '00:0B:EE:E1:09:9C',
    location: 'Kaffrine',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-23'),
        action: 'Attribué',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN2 348 DE 465 N',
    status: 'assigned',
    assignmentDate: new Date('2024-11-05'),
    macAddress: '00:EE:13:E0:8C:0A',
    location: 'Diourbel',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-15'),
        action: 'Invalidé',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN2 731 EX 269 D',
    status: 'assigned',
    assignmentDate: new Date('2024-11-12'),
    macAddress: '00:92:15:B7:E0:9E',
    location: 'Matam',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-30'),
        action: 'Attribué',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN2 664 IZ 377 X',
    status: 'assigned',
    assignmentDate: new Date('2024-11-06'),
    macAddress: '00:A2:25:7F:EA:EF',
    location: 'Diourbel',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-19'),
        action: 'Attribué',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN1 779 ZD 145 P',
    status: 'assigned',
    assignmentDate: new Date('2024-11-30'),
    macAddress: '00:DE:A3:3E:B1:53',
    location: 'Diourbel',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-11'),
        action: 'Invalidé',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN2 410 MH 976 Q',
    status: 'assigned',
    assignmentDate: new Date('2024-11-22'),
    macAddress: '00:87:12:97:18:04',
    location: 'Saint-Louis',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-10'),
        action: 'Créé',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN1 303 ZN 488 Y',
    status: 'assigned',
    assignmentDate: new Date('2024-11-08'),
    macAddress: '00:92:9B:3F:05:6D',
    location: 'Dakar',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-24'),
        action: 'Invalidé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN2 687 UT 634 Q',
    status: 'assigned',
    assignmentDate: new Date('2024-11-26'),
    macAddress: '00:B5:B2:CF:03:A2',
    location: 'Sédhiou',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-06'),
        action: 'Créé',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN2 244 KJ 388 K',
    status: 'assigned',
    assignmentDate: new Date('2024-11-20'),
    macAddress: '00:50:66:8A:97:98',
    location: 'Ziguinchor',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-20'),
        action: 'Créé',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN1 904 EN 461 X',
    status: 'assigned',
    assignmentDate: new Date('2024-11-03'),
    macAddress: '00:9A:DC:C2:66:11',
    location: 'Kaffrine',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-30'),
        action: 'Invalidé',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN2 334 BP 584 L',
    status: 'assigned',
    assignmentDate: new Date('2024-11-09'),
    macAddress: '00:15:EE:D5:1E:AA',
    location: 'Tambacounda',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-15'),
        action: 'Invalidé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN2 328 MQ 510 X',
    status: 'assigned',
    assignmentDate: new Date('2024-11-11'),
    macAddress: '00:FD:FB:E4:C2:BC',
    location: 'Kolda',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-25'),
        action: 'Attribué',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN2 518 LN 383 R',
    status: 'assigned',
    assignmentDate: new Date('2024-11-24'),
    macAddress: '00:B1:6D:9C:0D:0F',
    location: 'Thiès',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-17'),
        action: 'Invalidé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN2 750 XM 386 H',
    status: 'assigned',
    assignmentDate: new Date('2024-11-14'),
    macAddress: '00:DA:76:53:E6:61',
    location: 'Louga',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-13'),
        action: 'Créé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN2 555 OO 607 S',
    status: 'assigned',
    assignmentDate: new Date('2024-11-20'),
    macAddress: '00:F6:2A:98:8F:DC',
    location: 'Kaolack',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-30'),
        action: 'Attribué',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN2 334 XG 429 P',
    status: 'assigned',
    assignmentDate: new Date('2024-11-08'),
    macAddress: '00:1F:80:F6:4F:5A',
    location: 'Matam',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-23'),
        action: 'Invalidé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN1 478 HT 225 K',
    status: 'assigned',
    assignmentDate: new Date('2024-11-07'),
    macAddress: '00:5E:12:74:EF:27',
    location: 'Dakar',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-05'),
        action: 'Invalidé',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN2 667 EE 487 P',
    status: 'assigned',
    assignmentDate: new Date('2024-11-25'),
    macAddress: '00:5F:4F:46:C3:31',
    location: 'Kaffrine',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-06'),
        action: 'Invalidé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN1 768 AQ 131 E',
    status: 'assigned',
    assignmentDate: new Date('2024-11-06'),
    macAddress: '00:6D:41:4F:BB:93',
    location: 'Thiès',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-28'),
        action: 'Créé',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN2 690 EN 486 D',
    status: 'assigned',
    assignmentDate: new Date('2024-11-18'),
    macAddress: '00:38:D2:E4:FA:AF',
    location: 'Tambacounda',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-31'),
        action: 'Invalidé',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN1 938 OU 758 L',
    status: 'assigned',
    assignmentDate: new Date('2024-11-30'),
    macAddress: '00:36:8C:D4:2C:F5',
    location: 'Louga',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-05'),
        action: 'Attribué',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN2 963 CH 698 B',
    status: 'assigned',
    assignmentDate: new Date('2024-11-14'),
    macAddress: '00:3C:CC:14:A9:3F',
    location: 'Sédhiou',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-25'),
        action: 'Attribué',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN1 194 HH 178 S',
    status: 'assigned',
    assignmentDate: new Date('2024-11-04'),
    macAddress: '00:A1:6E:7B:83:35',
    location: 'Diourbel',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-20'),
        action: 'Attribué',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN1 728 XB 995 K',
    status: 'assigned',
    assignmentDate: new Date('2024-11-13'),
    macAddress: '00:12:D8:BE:F1:86',
    location: 'Dakar',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-20'),
        action: 'Créé',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN1 146 AG 562 G',
    status: 'assigned',
    assignmentDate: new Date('2024-11-18'),
    macAddress: '00:F7:E8:0B:5C:83',
    location: 'Kaffrine',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-25'),
        action: 'Invalidé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN1 195 GD 620 S',
    status: 'assigned',
    assignmentDate: new Date('2024-11-20'),
    macAddress: '00:50:2D:BE:C9:F3',
    location: 'Fatick',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-24'),
        action: 'Créé',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN1 115 MU 680 F',
    status: 'assigned',
    assignmentDate: new Date('2024-11-14'),
    macAddress: '00:B6:FE:AC:1D:AA',
    location: 'Louga',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-23'),
        action: 'Créé',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN1 951 UU 837 N',
    status: 'assigned',
    assignmentDate: new Date('2024-11-27'),
    macAddress: '00:9B:F3:47:13:A0',
    location: 'Tambacounda',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-31'),
        action: 'Créé',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN1 703 LL 983 W',
    status: 'assigned',
    assignmentDate: new Date('2024-11-19'),
    macAddress: '00:0D:7B:02:0E:0D',
    location: 'Tambacounda',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-20'),
        action: 'Attribué',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN1 344 TJ 712 I',
    status: 'assigned',
    assignmentDate: new Date('2024-11-15'),
    macAddress: '00:80:AF:B6:91:71',
    location: 'Sédhiou',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-03'),
        action: 'Créé',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN2 806 PS 497 L',
    status: 'assigned',
    assignmentDate: new Date('2024-11-25'),
    macAddress: '00:37:60:9B:96:14',
    location: 'Kaffrine',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-25'),
        action: 'Invalidé',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN2 583 HW 564 R',
    status: 'assigned',
    assignmentDate: new Date('2024-11-10'),
    macAddress: '00:A5:A8:37:71:26',
    location: 'Diourbel',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-16'),
        action: 'Invalidé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN2 285 BQ 901 W',
    status: 'assigned',
    assignmentDate: new Date('2024-11-20'),
    macAddress: '00:43:43:4D:E1:1A',
    location: 'Kolda',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-14'),
        action: 'Créé',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN2 256 QD 388 J',
    status: 'assigned',
    assignmentDate: new Date('2024-11-15'),
    macAddress: '00:14:E6:40:84:30',
    location: 'Kaffrine',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-02'),
        action: 'Invalidé',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN1 160 HR 586 T',
    status: 'assigned',
    assignmentDate: new Date('2024-11-26'),
    macAddress: '00:0E:29:4E:35:2A',
    location: 'Fatick',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-24'),
        action: 'Attribué',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN2 860 BG 566 O',
    status: 'assigned',
    assignmentDate: new Date('2024-11-05'),
    macAddress: '00:98:C4:5A:CF:DE',
    location: 'Thiès',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-04'),
        action: 'Attribué',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN2 568 BN 202 W',
    status: 'assigned',
    assignmentDate: new Date('2024-11-11'),
    macAddress: '00:C1:5D:19:12:E2',
    location: 'Kaolack',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-06'),
        action: 'Créé',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN1 700 YA 311 F',
    status: 'assigned',
    assignmentDate: new Date('2024-11-20'),
    macAddress: '00:35:C2:F1:96:14',
    location: 'Fatick',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-29'),
        action: 'Créé',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN1 773 CA 341 Z',
    status: 'assigned',
    assignmentDate: new Date('2024-11-07'),
    macAddress: '00:CA:E7:56:42:01',
    location: 'Ziguinchor',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-19'),
        action: 'Créé',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN1 748 WY 915 P',
    status: 'assigned',
    assignmentDate: new Date('2024-11-13'),
    macAddress: '00:58:2E:A5:A9:03',
    location: 'Saint-Louis',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-11'),
        action: 'Invalidé',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN2 240 PC 467 U',
    status: 'assigned',
    assignmentDate: new Date('2024-11-10'),
    macAddress: '00:16:4A:45:7E:19',
    location: 'Tambacounda',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-16'),
        action: 'Invalidé',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN1 693 NB 293 J',
    status: 'assigned',
    assignmentDate: new Date('2024-11-13'),
    macAddress: '00:79:E1:09:F6:10',
    location: 'Matam',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-20'),
        action: 'Attribué',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN1 331 IB 712 H',
    status: 'assigned',
    assignmentDate: new Date('2024-11-04'),
    macAddress: '00:36:EA:41:BA:BF',
    location: 'Matam',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-24'),
        action: 'Attribué',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN2 832 AP 613 N',
    status: 'assigned',
    assignmentDate: new Date('2024-11-07'),
    macAddress: '00:04:C6:95:6D:5F',
    location: 'Kaolack',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-17'),
        action: 'Créé',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN2 925 SX 573 Z',
    status: 'assigned',
    assignmentDate: new Date('2024-11-05'),
    macAddress: '00:6F:69:AD:BF:5A',
    location: 'Fatick',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-23'),
        action: 'Créé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN2 130 EF 484 C',
    status: 'assigned',
    assignmentDate: new Date('2024-11-05'),
    macAddress: '00:4A:37:F1:B1:2F',
    location: 'Louga',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-16'),
        action: 'Invalidé',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN2 159 ZJ 552 K',
    status: 'assigned',
    assignmentDate: new Date('2024-11-22'),
    macAddress: '00:97:02:C3:E3:9F',
    location: 'Matam',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-15'),
        action: 'Invalidé',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN2 787 GS 956 K',
    status: 'assigned',
    assignmentDate: new Date('2024-11-26'),
    macAddress: '00:5C:E7:CA:27:3B',
    location: 'Tambacounda',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-19'),
        action: 'Attribué',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN2 138 GC 107 R',
    status: 'assigned',
    assignmentDate: new Date('2024-11-23'),
    macAddress: '00:5F:8B:95:41:3A',
    location: 'Tambacounda',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-21'),
        action: 'Créé',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN1 554 FK 204 D',
    status: 'assigned',
    assignmentDate: new Date('2024-11-08'),
    macAddress: '00:19:F3:0E:D5:E9',
    location: 'Ziguinchor',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-07'),
        action: 'Attribué',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN2 745 SX 160 K',
    status: 'assigned',
    assignmentDate: new Date('2024-11-23'),
    macAddress: '00:11:3B:EE:69:80',
    location: 'Diourbel',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-13'),
        action: 'Créé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN1 930 EZ 995 L',
    status: 'assigned',
    assignmentDate: new Date('2024-11-10'),
    macAddress: '00:4A:C6:F2:73:C5',
    location: 'Dakar',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-21'),
        action: 'Créé',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN1 496 YJ 411 I',
    status: 'assigned',
    assignmentDate: new Date('2024-11-26'),
    macAddress: '00:75:73:38:B2:9B',
    location: 'Kaolack',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-14'),
        action: 'Attribué',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN1 343 CJ 797 B',
    status: 'assigned',
    assignmentDate: new Date('2024-11-31'),
    macAddress: '00:BA:F6:64:4B:E9',
    location: 'Diourbel',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-27'),
        action: 'Attribué',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN1 882 SQ 146 A',
    status: 'assigned',
    assignmentDate: new Date('2024-11-13'),
    macAddress: '00:0F:7F:7B:47:28',
    location: 'Kolda',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-08'),
        action: 'Invalidé',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN2 673 VB 333 L',
    status: 'assigned',
    assignmentDate: new Date('2024-11-23'),
    macAddress: '00:50:49:8B:E4:52',
    location: 'Dakar',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-18'),
        action: 'Attribué',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN1 985 HB 982 D',
    status: 'assigned',
    assignmentDate: new Date('2024-11-19'),
    macAddress: '00:C5:E2:39:59:7F',
    location: 'Tambacounda',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-10'),
        action: 'Attribué',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN2 566 GR 338 W',
    status: 'assigned',
    assignmentDate: new Date('2024-11-23'),
    macAddress: '00:28:A0:5A:C8:46',
    location: 'Fatick',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-15'),
        action: 'Invalidé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN2 888 YS 549 F',
    status: 'assigned',
    assignmentDate: new Date('2024-11-25'),
    macAddress: '00:9D:D1:D5:14:55',
    location: 'Dakar',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-26'),
        action: 'Créé',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN1 392 DK 338 X',
    status: 'assigned',
    assignmentDate: new Date('2024-11-19'),
    macAddress: '00:B8:A5:4F:6E:BB',
    location: 'Thiès',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-26'),
        action: 'Attribué',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN2 817 EP 873 C',
    status: 'assigned',
    assignmentDate: new Date('2024-11-26'),
    macAddress: '00:A3:82:B4:98:64',
    location: 'Louga',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-26'),
        action: 'Invalidé',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN2 872 NK 264 C',
    status: 'assigned',
    assignmentDate: new Date('2024-11-05'),
    macAddress: '00:6B:00:70:05:23',
    location: 'Saint-Louis',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-18'),
        action: 'Attribué',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN2 889 JY 627 C',
    status: 'assigned',
    assignmentDate: new Date('2024-11-22'),
    macAddress: '00:7A:8C:F4:BF:A3',
    location: 'Kaffrine',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-10'),
        action: 'Attribué',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN2 345 NS 607 J',
    status: 'assigned',
    assignmentDate: new Date('2024-11-05'),
    macAddress: '00:BD:98:9D:2C:7A',
    location: 'Kaffrine',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-24'),
        action: 'Invalidé',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN2 668 KB 183 J',
    status: 'assigned',
    assignmentDate: new Date('2024-11-14'),
    macAddress: '00:4D:5B:D3:5B:24',
    location: 'Saint-Louis',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-22'),
        action: 'Attribué',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN2 489 PR 452 K',
    status: 'assigned',
    assignmentDate: new Date('2024-11-23'),
    macAddress: '00:C4:6E:81:55:6A',
    location: 'Matam',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-07'),
        action: 'Créé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN2 988 FT 826 O',
    status: 'assigned',
    assignmentDate: new Date('2024-11-20'),
    macAddress: '00:1D:1A:4A:FE:BF',
    location: 'Diourbel',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-16'),
        action: 'Invalidé',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN2 606 LI 719 Z',
    status: 'assigned',
    assignmentDate: new Date('2024-11-12'),
    macAddress: '00:E0:41:A4:61:10',
    location: 'Kolda',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-23'),
        action: 'Invalidé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN1 133 NL 472 B',
    status: 'assigned',
    assignmentDate: new Date('2024-11-31'),
    macAddress: '00:3B:98:88:07:10',
    location: 'Tambacounda',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-13'),
        action: 'Invalidé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN2 721 EA 563 X',
    status: 'assigned',
    assignmentDate: new Date('2024-11-20'),
    macAddress: '00:5B:7E:07:3A:3E',
    location: 'Kolda',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-27'),
        action: 'Invalidé',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN1 181 RZ 181 T',
    status: 'assigned',
    assignmentDate: new Date('2024-11-24'),
    macAddress: '00:A9:53:A1:04:2B',
    location: 'Matam',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-03'),
        action: 'Attribué',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN1 778 AD 877 K',
    status: 'assigned',
    assignmentDate: new Date('2024-11-13'),
    macAddress: '00:F3:47:7A:ED:55',
    location: 'Fatick',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-18'),
        action: 'Créé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN1 881 NP 768 I',
    status: 'assigned',
    assignmentDate: new Date('2024-11-04'),
    macAddress: '00:C0:F4:26:77:D7',
    location: 'Kaffrine',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-30'),
        action: 'Invalidé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN1 420 AW 839 C',
    status: 'assigned',
    assignmentDate: new Date('2024-11-10'),
    macAddress: '00:98:AE:2D:75:C8',
    location: 'Saint-Louis',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-08'),
        action: 'Attribué',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN1 649 AO 223 T',
    status: 'assigned',
    assignmentDate: new Date('2024-11-09'),
    macAddress: '00:EE:A0:26:6F:4E',
    location: 'Kolda',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-08'),
        action: 'Attribué',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN1 658 AT 268 H',
    status: 'assigned',
    assignmentDate: new Date('2024-11-29'),
    macAddress: '00:3C:96:A4:08:D2',
    location: 'Diourbel',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-27'),
        action: 'Attribué',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN2 413 GR 677 E',
    status: 'assigned',
    assignmentDate: new Date('2024-11-26'),
    macAddress: '00:74:00:39:7E:B1',
    location: 'Kaffrine',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-03'),
        action: 'Invalidé',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN1 154 FX 274 L',
    status: 'assigned',
    assignmentDate: new Date('2024-11-05'),
    macAddress: '00:D0:12:39:5D:BB',
    location: 'Kolda',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-06'),
        action: 'Attribué',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN1 162 OY 884 Y',
    status: 'assigned',
    assignmentDate: new Date('2024-11-24'),
    macAddress: '00:44:0B:1A:6E:83',
    location: 'Tambacounda',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-11'),
        action: 'Créé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN1 377 FB 780 A',
    status: 'assigned',
    assignmentDate: new Date('2024-11-29'),
    macAddress: '00:FF:2F:2F:5A:91',
    location: 'Sédhiou',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-17'),
        action: 'Attribué',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN2 561 TA 889 Z',
    status: 'assigned',
    assignmentDate: new Date('2024-11-09'),
    macAddress: '00:2D:19:50:35:8F',
    location: 'Kaolack',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-21'),
        action: 'Créé',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN1 578 CL 321 Z',
    status: 'assigned',
    assignmentDate: new Date('2024-11-24'),
    macAddress: '00:8E:2F:D3:7E:6E',
    location: 'Louga',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-04'),
        action: 'Attribué',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN1 454 DT 117 A',
    status: 'assigned',
    assignmentDate: new Date('2024-11-23'),
    macAddress: '00:C9:2C:42:A8:81',
    location: 'Ziguinchor',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-06'),
        action: 'Invalidé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN2 791 BX 245 K',
    status: 'assigned',
    assignmentDate: new Date('2024-11-13'),
    macAddress: '00:2A:3D:5B:7F:6F',
    location: 'Kaolack',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-22'),
        action: 'Attribué',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN2 330 GR 407 V',
    status: 'assigned',
    assignmentDate: new Date('2024-11-12'),
    macAddress: '00:BC:64:46:67:3F',
    location: 'Ziguinchor',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-11'),
        action: 'Invalidé',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN1 204 JG 620 I',
    status: 'assigned',
    assignmentDate: new Date('2024-11-22'),
    macAddress: '00:82:F9:0D:55:D7',
    location: 'Thiès',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-15'),
        action: 'Invalidé',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN1 322 AS 915 I',
    status: 'assigned',
    assignmentDate: new Date('2024-11-13'),
    macAddress: '00:80:34:36:CD:DF',
    location: 'Fatick',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-31'),
        action: 'Créé',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN2 917 DU 858 M',
    status: 'assigned',
    assignmentDate: new Date('2024-11-06'),
    macAddress: '00:B1:00:16:15:3D',
    location: 'Sédhiou',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-09'),
        action: 'Attribué',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN1 197 VC 105 T',
    status: 'assigned',
    assignmentDate: new Date('2024-11-19'),
    macAddress: '00:05:63:BD:E6:F0',
    location: 'Kaolack',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-02'),
        action: 'Créé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN2 975 PH 129 X',
    status: 'assigned',
    assignmentDate: new Date('2024-11-20'),
    macAddress: '00:C8:FD:5C:B9:62',
    location: 'Kaffrine',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-13'),
        action: 'Invalidé',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN1 578 AY 980 H',
    status: 'assigned',
    assignmentDate: new Date('2024-11-20'),
    macAddress: '00:4A:D7:ED:22:19',
    location: 'Louga',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-08'),
        action: 'Attribué',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN1 921 IP 349 X',
    status: 'assigned',
    assignmentDate: new Date('2024-11-19'),
    macAddress: '00:D3:C0:E0:A9:35',
    location: 'Louga',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-25'),
        action: 'Créé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN1 517 MM 572 J',
    status: 'assigned',
    assignmentDate: new Date('2024-11-08'),
    macAddress: '00:B6:24:A1:E7:27',
    location: 'Tambacounda',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-13'),
        action: 'Créé',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN1 942 IC 992 K',
    status: 'assigned',
    assignmentDate: new Date('2024-11-27'),
    macAddress: '00:24:8B:9E:8F:BE',
    location: 'Saint-Louis',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-30'),
        action: 'Attribué',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN2 164 LJ 440 W',
    status: 'assigned',
    assignmentDate: new Date('2024-11-22'),
    macAddress: '00:0E:77:86:F1:7F',
    location: 'Sédhiou',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-20'),
        action: 'Invalidé',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN1 847 EW 245 J',
    status: 'assigned',
    assignmentDate: new Date('2024-11-19'),
    macAddress: '00:E4:D2:CE:0A:EB',
    location: 'Matam',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-10'),
        action: 'Invalidé',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN2 486 HW 842 R',
    status: 'assigned',
    assignmentDate: new Date('2024-11-15'),
    macAddress: '00:26:D3:08:55:5E',
    location: 'Diourbel',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-26'),
        action: 'Attribué',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN1 533 EC 276 A',
    status: 'assigned',
    assignmentDate: new Date('2024-11-03'),
    macAddress: '00:33:C5:B4:CB:C6',
    location: 'Saint-Louis',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-07'),
        action: 'Créé',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN2 670 LC 100 X',
    status: 'assigned',
    assignmentDate: new Date('2024-11-22'),
    macAddress: '00:38:EE:06:97:7D',
    location: 'Kolda',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-29'),
        action: 'Créé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN1 890 XG 218 T',
    status: 'assigned',
    assignmentDate: new Date('2024-11-29'),
    macAddress: '00:A2:AF:B6:46:A5',
    location: 'Fatick',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-05'),
        action: 'Attribué',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN2 308 WS 981 J',
    status: 'assigned',
    assignmentDate: new Date('2024-11-03'),
    macAddress: '00:CC:47:7C:F3:E1',
    location: 'Saint-Louis',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-10'),
        action: 'Invalidé',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN1 663 GH 819 W',
    status: 'assigned',
    assignmentDate: new Date('2024-11-19'),
    macAddress: '00:2A:2A:72:60:34',
    location: 'Diourbel',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-22'),
        action: 'Attribué',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN2 485 AG 373 Y',
    status: 'assigned',
    assignmentDate: new Date('2024-11-31'),
    macAddress: '00:2B:2A:DD:51:47',
    location: 'Louga',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-29'),
        action: 'Invalidé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN2 846 XJ 965 P',
    status: 'assigned',
    assignmentDate: new Date('2024-11-11'),
    macAddress: '00:F1:47:5E:15:42',
    location: 'Louga',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-30'),
        action: 'Invalidé',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN2 108 LO 836 G',
    status: 'assigned',
    assignmentDate: new Date('2024-11-21'),
    macAddress: '00:AB:0E:1B:2A:BE',
    location: 'Dakar',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-24'),
        action: 'Attribué',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN1 870 RU 495 T',
    status: 'assigned',
    assignmentDate: new Date('2024-11-30'),
    macAddress: '00:7E:CB:D6:F4:B1',
    location: 'Kaffrine',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-30'),
        action: 'Attribué',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN2 461 JI 208 H',
    status: 'assigned',
    assignmentDate: new Date('2024-11-08'),
    macAddress: '00:29:56:25:82:64',
    location: 'Dakar',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-08'),
        action: 'Créé',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN2 214 PF 595 X',
    status: 'assigned',
    assignmentDate: new Date('2024-11-17'),
    macAddress: '00:91:3E:D7:B4:E1',
    location: 'Ziguinchor',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-19'),
        action: 'Invalidé',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN2 697 SQ 735 K',
    status: 'assigned',
    assignmentDate: new Date('2024-11-14'),
    macAddress: '00:33:7A:2A:F1:56',
    location: 'Louga',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-13'),
        action: 'Créé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN2 988 RR 864 H',
    status: 'assigned',
    assignmentDate: new Date('2024-11-02'),
    macAddress: '00:A3:5E:83:03:6E',
    location: 'Kaolack',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-15'),
        action: 'Attribué',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN2 606 QD 985 Z',
    status: 'assigned',
    assignmentDate: new Date('2024-11-04'),
    macAddress: '00:BE:6F:3F:51:7E',
    location: 'Sédhiou',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-19'),
        action: 'Attribué',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN1 226 AY 115 N',
    status: 'assigned',
    assignmentDate: new Date('2024-11-09'),
    macAddress: '00:8E:16:B4:5D:DD',
    location: 'Kaolack',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-05'),
        action: 'Créé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN1 752 TC 103 F',
    status: 'assigned',
    assignmentDate: new Date('2024-11-24'),
    macAddress: '00:A7:76:CE:FB:3A',
    location: 'Saint-Louis',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-07'),
        action: 'Attribué',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN2 494 LM 320 B',
    status: 'assigned',
    assignmentDate: new Date('2024-11-20'),
    macAddress: '00:D9:31:0C:36:77',
    location: 'Sédhiou',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-15'),
        action: 'Attribué',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN1 766 HM 164 O',
    status: 'assigned',
    assignmentDate: new Date('2024-11-08'),
    macAddress: '00:41:99:CD:5A:05',
    location: 'Matam',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-24'),
        action: 'Créé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN2 660 OQ 200 V',
    status: 'assigned',
    assignmentDate: new Date('2024-11-02'),
    macAddress: '00:20:BB:F9:B3:3E',
    location: 'Kolda',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-15'),
        action: 'Attribué',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN1 704 WV 951 W',
    status: 'assigned',
    assignmentDate: new Date('2024-11-17'),
    macAddress: '00:82:0F:FF:C4:2C',
    location: 'Matam',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-16'),
        action: 'Invalidé',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN1 988 NL 916 N',
    status: 'assigned',
    assignmentDate: new Date('2024-11-02'),
    macAddress: '00:75:84:B9:72:06',
    location: 'Diourbel',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-05'),
        action: 'Invalidé',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN2 590 MF 560 L',
    status: 'assigned',
    assignmentDate: new Date('2024-11-25'),
    macAddress: '00:5A:16:62:59:07',
    location: 'Kaffrine',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-25'),
        action: 'Attribué',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN1 807 EU 719 X',
    status: 'assigned',
    assignmentDate: new Date('2024-11-23'),
    macAddress: '00:0C:7E:73:72:BA',
    location: 'Thiès',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-17'),
        action: 'Attribué',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN2 659 DR 632 P',
    status: 'assigned',
    assignmentDate: new Date('2024-11-27'),
    macAddress: '00:C8:BA:EE:5D:81',
    location: 'Kolda',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-22'),
        action: 'Invalidé',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN2 288 HI 702 N',
    status: 'assigned',
    assignmentDate: new Date('2024-11-08'),
    macAddress: '00:C6:A8:63:1C:C8',
    location: 'Louga',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-15'),
        action: 'Attribué',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN2 957 XN 546 F',
    status: 'assigned',
    assignmentDate: new Date('2024-11-12'),
    macAddress: '00:B3:7D:40:97:F2',
    location: 'Kolda',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-31'),
        action: 'Invalidé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN1 380 NH 504 R',
    status: 'assigned',
    assignmentDate: new Date('2024-11-28'),
    macAddress: '00:74:E7:60:6C:2B',
    location: 'Kaolack',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-31'),
        action: 'Invalidé',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN1 905 IK 232 R',
    status: 'assigned',
    assignmentDate: new Date('2024-11-02'),
    macAddress: '00:E7:7B:CA:17:24',
    location: 'Sédhiou',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-20'),
        action: 'Créé',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN1 345 QC 905 K',
    status: 'assigned',
    assignmentDate: new Date('2024-11-29'),
    macAddress: '00:5A:C9:0B:85:5E',
    location: 'Kolda',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-18'),
        action: 'Attribué',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN1 114 LU 627 P',
    status: 'assigned',
    assignmentDate: new Date('2024-11-13'),
    macAddress: '00:6C:84:19:69:5B',
    location: 'Thiès',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-22'),
        action: 'Invalidé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN2 450 VT 106 S',
    status: 'assigned',
    assignmentDate: new Date('2024-11-28'),
    macAddress: '00:FA:C7:8E:E5:B6',
    location: 'Thiès',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-24'),
        action: 'Invalidé',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN1 438 ZM 567 S',
    status: 'assigned',
    assignmentDate: new Date('2024-11-24'),
    macAddress: '00:5D:89:29:86:AB',
    location: 'Fatick',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-08'),
        action: 'Créé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN2 556 UI 207 Q',
    status: 'assigned',
    assignmentDate: new Date('2024-11-29'),
    macAddress: '00:09:2B:23:5C:37',
    location: 'Diourbel',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-09'),
        action: 'Attribué',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN2 499 YE 459 Z',
    status: 'assigned',
    assignmentDate: new Date('2024-11-21'),
    macAddress: '00:7F:33:3A:27:EA',
    location: 'Ziguinchor',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-03'),
        action: 'Créé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN2 388 WB 833 A',
    status: 'assigned',
    assignmentDate: new Date('2024-11-07'),
    macAddress: '00:CE:1A:07:48:91',
    location: 'Diourbel',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-31'),
        action: 'Créé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN2 110 NI 839 V',
    status: 'assigned',
    assignmentDate: new Date('2024-11-17'),
    macAddress: '00:30:9F:CE:14:8B',
    location: 'Ziguinchor',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-02'),
        action: 'Créé',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN1 851 JJ 707 Q',
    status: 'assigned',
    assignmentDate: new Date('2024-11-07'),
    macAddress: '00:C5:C9:48:7E:BF',
    location: 'Kaffrine',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-02'),
        action: 'Créé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN1 817 DG 862 J',
    status: 'assigned',
    assignmentDate: new Date('2024-11-23'),
    macAddress: '00:A7:74:6B:CD:A9',
    location: 'Saint-Louis',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-31'),
        action: 'Attribué',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN2 714 MP 584 K',
    status: 'assigned',
    assignmentDate: new Date('2024-11-17'),
    macAddress: '00:39:98:7C:3A:41',
    location: 'Ziguinchor',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-12'),
        action: 'Invalidé',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN1 176 PQ 296 G',
    status: 'assigned',
    assignmentDate: new Date('2024-11-06'),
    macAddress: '00:86:F5:6D:80:EF',
    location: 'Kolda',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-29'),
        action: 'Invalidé',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN1 931 BI 582 P',
    status: 'assigned',
    assignmentDate: new Date('2024-11-25'),
    macAddress: '00:B5:36:5A:B2:F6',
    location: 'Diourbel',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-31'),
        action: 'Attribué',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN1 187 VW 412 G',
    status: 'assigned',
    assignmentDate: new Date('2024-11-19'),
    macAddress: '00:CC:CA:F8:2D:1A',
    location: 'Matam',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-10'),
        action: 'Invalidé',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN1 835 RU 691 W',
    status: 'assigned',
    assignmentDate: new Date('2024-11-31'),
    macAddress: '00:53:8D:1A:B4:38',
    location: 'Louga',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-14'),
        action: 'Attribué',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN2 883 OH 594 R',
    status: 'assigned',
    assignmentDate: new Date('2024-11-22'),
    macAddress: '00:61:ED:E8:1C:9E',
    location: 'Kolda',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-15'),
        action: 'Créé',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN2 451 QJ 250 F',
    status: 'assigned',
    assignmentDate: new Date('2024-11-26'),
    macAddress: '00:48:97:F2:A2:46',
    location: 'Saint-Louis',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-07'),
        action: 'Attribué',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN1 300 ZC 843 M',
    status: 'assigned',
    assignmentDate: new Date('2024-11-28'),
    macAddress: '00:32:1B:30:19:ED',
    location: 'Kolda',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-09'),
        action: 'Attribué',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN2 768 DQ 913 E',
    status: 'assigned',
    assignmentDate: new Date('2024-11-07'),
    macAddress: '00:8D:23:81:07:17',
    location: 'Sédhiou',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-22'),
        action: 'Invalidé',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN2 272 IN 693 R',
    status: 'assigned',
    assignmentDate: new Date('2024-11-04'),
    macAddress: '00:42:3C:68:44:84',
    location: 'Saint-Louis',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-11'),
        action: 'Attribué',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN2 580 HK 649 K',
    status: 'assigned',
    assignmentDate: new Date('2024-11-20'),
    macAddress: '00:89:7E:AC:E0:51',
    location: 'Kaffrine',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-21'),
        action: 'Invalidé',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN1 403 AO 618 K',
    status: 'assigned',
    assignmentDate: new Date('2024-11-13'),
    macAddress: '00:DB:C5:57:DC:0A',
    location: 'Fatick',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-31'),
        action: 'Créé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN2 483 BM 350 U',
    status: 'assigned',
    assignmentDate: new Date('2024-11-07'),
    macAddress: '00:28:59:9B:4D:5D',
    location: 'Kolda',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-17'),
        action: 'Invalidé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN2 705 MN 528 N',
    status: 'assigned',
    assignmentDate: new Date('2024-11-12'),
    macAddress: '00:35:EB:FD:A3:20',
    location: 'Thiès',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-14'),
        action: 'Invalidé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN2 887 VB 656 O',
    status: 'assigned',
    assignmentDate: new Date('2024-11-13'),
    macAddress: '00:7A:8A:7D:56:09',
    location: 'Diourbel',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-09'),
        action: 'Invalidé',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN1 485 VF 724 D',
    status: 'assigned',
    assignmentDate: new Date('2024-11-28'),
    macAddress: '00:DA:F9:AF:F7:92',
    location: 'Kolda',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-19'),
        action: 'Invalidé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN2 743 TW 389 L',
    status: 'assigned',
    assignmentDate: new Date('2024-11-28'),
    macAddress: '00:E8:48:8D:04:BF',
    location: 'Kaffrine',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-09'),
        action: 'Invalidé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN2 563 JM 644 O',
    status: 'assigned',
    assignmentDate: new Date('2024-11-22'),
    macAddress: '00:C1:71:DB:5F:2A',
    location: 'Tambacounda',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-20'),
        action: 'Attribué',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN2 877 QX 397 I',
    status: 'assigned',
    assignmentDate: new Date('2024-11-18'),
    macAddress: '00:0E:B5:F8:6C:39',
    location: 'Thiès',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-04'),
        action: 'Créé',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN2 410 VG 538 Z',
    status: 'assigned',
    assignmentDate: new Date('2024-11-13'),
    macAddress: '00:E6:EF:98:32:D4',
    location: 'Kaffrine',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-31'),
        action: 'Créé',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN1 703 WY 765 P',
    status: 'assigned',
    assignmentDate: new Date('2024-11-09'),
    macAddress: '00:AA:AB:30:86:D5',
    location: 'Dakar',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-08'),
        action: 'Créé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN2 438 SG 569 U',
    status: 'assigned',
    assignmentDate: new Date('2024-11-08'),
    macAddress: '00:27:72:4C:F3:3B',
    location: 'Matam',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-23'),
        action: 'Créé',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN2 269 HV 907 V',
    status: 'assigned',
    assignmentDate: new Date('2024-11-03'),
    macAddress: '00:DC:1A:86:29:1A',
    location: 'Kaolack',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-09'),
        action: 'Attribué',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN1 147 PE 633 U',
    status: 'assigned',
    assignmentDate: new Date('2024-11-27'),
    macAddress: '00:44:55:F5:68:63',
    location: 'Louga',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-14'),
        action: 'Attribué',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN2 287 QR 608 M',
    status: 'assigned',
    assignmentDate: new Date('2024-11-08'),
    macAddress: '00:65:80:98:F9:A4',
    location: 'Matam',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-02'),
        action: 'Créé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN2 631 IE 325 O',
    status: 'assigned',
    assignmentDate: new Date('2024-11-26'),
    macAddress: '00:75:23:8B:AC:85',
    location: 'Thiès',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-19'),
        action: 'Attribué',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN1 581 UB 271 R',
    status: 'assigned',
    assignmentDate: new Date('2024-11-16'),
    macAddress: '00:DE:31:C3:8B:AE',
    location: 'Tambacounda',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-15'),
        action: 'Attribué',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN1 132 ZI 516 U',
    status: 'assigned',
    assignmentDate: new Date('2024-11-18'),
    macAddress: '00:67:87:6A:00:41',
    location: 'Dakar',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-27'),
        action: 'Invalidé',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN2 355 YG 863 T',
    status: 'assigned',
    assignmentDate: new Date('2024-11-29'),
    macAddress: '00:5F:79:24:A3:B4',
    location: 'Kaffrine',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-07'),
        action: 'Créé',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN2 251 UE 248 C',
    status: 'assigned',
    assignmentDate: new Date('2024-11-02'),
    macAddress: '00:55:FD:8A:08:AC',
    location: 'Dakar',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-10'),
        action: 'Créé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN2 530 QH 226 V',
    status: 'assigned',
    assignmentDate: new Date('2024-11-05'),
    macAddress: '00:C3:EF:EF:F2:EB',
    location: 'Matam',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-11'),
        action: 'Invalidé',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN2 438 CO 978 I',
    status: 'assigned',
    assignmentDate: new Date('2024-11-14'),
    macAddress: '00:47:67:A0:39:9B',
    location: 'Kolda',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-16'),
        action: 'Créé',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN1 339 GU 955 L',
    status: 'assigned',
    assignmentDate: new Date('2024-11-28'),
    macAddress: '00:81:72:D8:96:9C',
    location: 'Sédhiou',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-18'),
        action: 'Attribué',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN2 888 RF 856 T',
    status: 'assigned',
    assignmentDate: new Date('2024-11-27'),
    macAddress: '00:91:C7:75:23:FF',
    location: 'Sédhiou',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-11'),
        action: 'Invalidé',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN1 911 AD 548 V',
    status: 'assigned',
    assignmentDate: new Date('2024-11-18'),
    macAddress: '00:7C:C3:62:CC:C1',
    location: 'Louga',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-11'),
        action: 'Attribué',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN2 346 JG 713 O',
    status: 'assigned',
    assignmentDate: new Date('2024-11-21'),
    macAddress: '00:50:8F:46:53:C0',
    location: 'Louga',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-23'),
        action: 'Attribué',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN1 842 DN 404 Q',
    status: 'assigned',
    assignmentDate: new Date('2024-11-30'),
    macAddress: '00:F3:56:84:C3:CB',
    location: 'Saint-Louis',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-08'),
        action: 'Invalidé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN2 423 TP 729 P',
    status: 'assigned',
    assignmentDate: new Date('2024-11-15'),
    macAddress: '00:EE:A9:CE:49:EF',
    location: 'Matam',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-22'),
        action: 'Invalidé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN2 185 SH 355 P',
    status: 'assigned',
    assignmentDate: new Date('2024-11-17'),
    macAddress: '00:74:50:9E:21:70',
    location: 'Diourbel',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-22'),
        action: 'Invalidé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN1 602 LZ 141 O',
    status: 'assigned',
    assignmentDate: new Date('2024-11-08'),
    macAddress: '00:EE:22:81:CD:A8',
    location: 'Louga',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-23'),
        action: 'Attribué',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN2 329 TS 960 N',
    status: 'assigned',
    assignmentDate: new Date('2024-11-20'),
    macAddress: '00:6E:1D:FB:45:89',
    location: 'Louga',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-11'),
        action: 'Attribué',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN2 558 GR 589 E',
    status: 'assigned',
    assignmentDate: new Date('2024-11-26'),
    macAddress: '00:D7:47:4B:3C:DD',
    location: 'Sédhiou',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-02'),
        action: 'Invalidé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN2 866 DR 568 B',
    status: 'assigned',
    assignmentDate: new Date('2024-11-06'),
    macAddress: '00:9F:3B:A0:AA:36',
    location: 'Fatick',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-18'),
        action: 'Créé',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN2 348 BZ 452 O',
    status: 'assigned',
    assignmentDate: new Date('2024-11-25'),
    macAddress: '00:D8:CE:EB:8E:FD',
    location: 'Louga',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-15'),
        action: 'Attribué',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN1 922 HJ 867 D',
    status: 'assigned',
    assignmentDate: new Date('2024-11-24'),
    macAddress: '00:C7:4B:B1:AF:95',
    location: 'Kaffrine',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-14'),
        action: 'Créé',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN1 308 TM 169 W',
    status: 'assigned',
    assignmentDate: new Date('2024-11-18'),
    macAddress: '00:39:09:B1:17:B0',
    location: 'Thiès',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-21'),
        action: 'Invalidé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN1 176 ST 871 Y',
    status: 'assigned',
    assignmentDate: new Date('2024-11-18'),
    macAddress: '00:17:27:AC:00:B9',
    location: 'Thiès',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-22'),
        action: 'Créé',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN1 358 FU 473 B',
    status: 'assigned',
    assignmentDate: new Date('2024-11-13'),
    macAddress: '00:0B:B9:4B:05:2F',
    location: 'Tambacounda',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-29'),
        action: 'Attribué',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN1 540 VC 249 H',
    status: 'assigned',
    assignmentDate: new Date('2024-11-25'),
    macAddress: '00:8A:2B:F9:CC:68',
    location: 'Ziguinchor',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-31'),
        action: 'Attribué',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN1 696 IZ 476 P',
    status: 'assigned',
    assignmentDate: new Date('2024-11-13'),
    macAddress: '00:88:02:C8:25:33',
    location: 'Ziguinchor',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-17'),
        action: 'Créé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN2 794 CH 440 H',
    status: 'assigned',
    assignmentDate: new Date('2024-11-11'),
    macAddress: '00:10:2D:FD:3B:BE',
    location: 'Fatick',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-10'),
        action: 'Attribué',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN1 815 XJ 643 U',
    status: 'assigned',
    assignmentDate: new Date('2024-11-10'),
    macAddress: '00:66:24:62:2D:11',
    location: 'Ziguinchor',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-12'),
        action: 'Créé',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN2 705 JC 902 S',
    status: 'assigned',
    assignmentDate: new Date('2024-11-16'),
    macAddress: '00:2B:90:B1:DA:EB',
    location: 'Louga',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-20'),
        action: 'Créé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN2 233 TL 860 B',
    status: 'assigned',
    assignmentDate: new Date('2024-11-10'),
    macAddress: '00:69:0E:4D:B8:46',
    location: 'Louga',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-20'),
        action: 'Attribué',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN1 199 XB 760 R',
    status: 'assigned',
    assignmentDate: new Date('2024-11-28'),
    macAddress: '00:5C:6E:A7:26:C0',
    location: 'Kolda',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-15'),
        action: 'Invalidé',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN2 114 XM 647 U',
    status: 'assigned',
    assignmentDate: new Date('2024-11-14'),
    macAddress: '00:CC:02:4E:F7:FE',
    location: 'Dakar',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-31'),
        action: 'Invalidé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN1 821 ZX 694 U',
    status: 'assigned',
    assignmentDate: new Date('2024-11-23'),
    macAddress: '00:33:EF:9E:A5:C2',
    location: 'Diourbel',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-19'),
        action: 'Attribué',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN1 228 ZT 169 Q',
    status: 'assigned',
    assignmentDate: new Date('2024-11-03'),
    macAddress: '00:67:C0:9D:81:FE',
    location: 'Fatick',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-26'),
        action: 'Attribué',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN1 938 PT 947 I',
    status: 'assigned',
    assignmentDate: new Date('2024-11-10'),
    macAddress: '00:7C:8A:E1:31:04',
    location: 'Kaolack',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-13'),
        action: 'Invalidé',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN1 434 EI 414 O',
    status: 'assigned',
    assignmentDate: new Date('2024-11-26'),
    macAddress: '00:76:E1:3E:FF:BC',
    location: 'Fatick',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-21'),
        action: 'Invalidé',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN1 277 VE 384 V',
    status: 'assigned',
    assignmentDate: new Date('2024-11-25'),
    macAddress: '00:F4:09:77:12:9C',
    location: 'Louga',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-30'),
        action: 'Invalidé',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN1 961 UX 873 Z',
    status: 'assigned',
    assignmentDate: new Date('2024-11-05'),
    macAddress: '00:EB:96:54:C7:32',
    location: 'Diourbel',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-18'),
        action: 'Attribué',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN2 781 RH 196 M',
    status: 'assigned',
    assignmentDate: new Date('2024-11-19'),
    macAddress: '00:3C:07:23:81:AB',
    location: 'Louga',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-26'),
        action: 'Invalidé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN1 442 BQ 988 I',
    status: 'assigned',
    assignmentDate: new Date('2024-11-05'),
    macAddress: '00:9C:D8:BD:72:8A',
    location: 'Fatick',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-23'),
        action: 'Créé',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN2 233 GU 893 T',
    status: 'assigned',
    assignmentDate: new Date('2024-11-04'),
    macAddress: '00:6B:17:5D:EE:0F',
    location: 'Kolda',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-14'),
        action: 'Invalidé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN2 574 ET 633 T',
    status: 'assigned',
    assignmentDate: new Date('2024-11-08'),
    macAddress: '00:65:99:9D:50:62',
    location: 'Tambacounda',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-09'),
        action: 'Créé',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN2 454 UX 444 W',
    status: 'assigned',
    assignmentDate: new Date('2024-11-19'),
    macAddress: '00:3D:E0:0B:8B:95',
    location: 'Louga',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-11'),
        action: 'Invalidé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN1 891 TQ 828 B',
    status: 'assigned',
    assignmentDate: new Date('2024-11-02'),
    macAddress: '00:E3:DE:B8:4F:8B',
    location: 'Diourbel',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-03'),
        action: 'Créé',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN1 697 CH 385 P',
    status: 'assigned',
    assignmentDate: new Date('2024-11-07'),
    macAddress: '00:3E:00:18:6E:91',
    location: 'Matam',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-08'),
        action: 'Invalidé',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN2 501 LR 171 B',
    status: 'assigned',
    assignmentDate: new Date('2024-11-13'),
    macAddress: '00:5E:96:81:CF:A2',
    location: 'Saint-Louis',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-02'),
        action: 'Créé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN2 539 XC 996 W',
    status: 'assigned',
    assignmentDate: new Date('2024-11-10'),
    macAddress: '00:82:83:5F:26:CE',
    location: 'Ziguinchor',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-08'),
        action: 'Attribué',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN2 748 BL 164 O',
    status: 'assigned',
    assignmentDate: new Date('2024-11-19'),
    macAddress: '00:0E:9E:CA:99:6D',
    location: 'Fatick',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-23'),
        action: 'Attribué',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN2 956 FZ 688 S',
    status: 'assigned',
    assignmentDate: new Date('2024-11-21'),
    macAddress: '00:32:E3:31:F9:CB',
    location: 'Kaffrine',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-07'),
        action: 'Créé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN2 818 XM 268 V',
    status: 'assigned',
    assignmentDate: new Date('2024-11-22'),
    macAddress: '00:27:5E:28:90:5C',
    location: 'Fatick',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-03'),
        action: 'Créé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN1 262 QN 918 T',
    status: 'assigned',
    assignmentDate: new Date('2024-11-26'),
    macAddress: '00:01:5E:FB:AD:C8',
    location: 'Diourbel',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-20'),
        action: 'Attribué',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN2 662 RJ 559 H',
    status: 'assigned',
    assignmentDate: new Date('2024-11-25'),
    macAddress: '00:84:80:B7:1F:C6',
    location: 'Diourbel',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-09'),
        action: 'Attribué',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN2 212 MD 326 F',
    status: 'assigned',
    assignmentDate: new Date('2024-11-20'),
    macAddress: '00:6A:99:A7:78:A5',
    location: 'Kaffrine',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-09'),
        action: 'Attribué',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN2 934 TE 177 G',
    status: 'assigned',
    assignmentDate: new Date('2024-11-26'),
    macAddress: '00:B9:30:81:28:51',
    location: 'Fatick',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-29'),
        action: 'Attribué',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN2 610 GM 865 U',
    status: 'assigned',
    assignmentDate: new Date('2024-11-08'),
    macAddress: '00:2E:08:32:43:FD',
    location: 'Tambacounda',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-26'),
        action: 'Attribué',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN2 647 SI 927 N',
    status: 'assigned',
    assignmentDate: new Date('2024-11-31'),
    macAddress: '00:DD:AA:E5:80:F7',
    location: 'Kolda',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-23'),
        action: 'Attribué',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN1 161 ON 893 D',
    status: 'assigned',
    assignmentDate: new Date('2024-11-02'),
    macAddress: '00:66:34:D5:CE:6C',
    location: 'Dakar',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-05'),
        action: 'Attribué',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN1 757 FR 519 N',
    status: 'assigned',
    assignmentDate: new Date('2024-11-13'),
    macAddress: '00:70:AF:96:81:47',
    location: 'Diourbel',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-22'),
        action: 'Invalidé',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN1 835 PT 746 Z',
    status: 'assigned',
    assignmentDate: new Date('2024-11-24'),
    macAddress: '00:C3:6D:38:EC:99',
    location: 'Matam',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-14'),
        action: 'Attribué',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN1 491 LP 685 Q',
    status: 'assigned',
    assignmentDate: new Date('2024-11-07'),
    macAddress: '00:21:78:17:91:CF',
    location: 'Dakar',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-04'),
        action: 'Invalidé',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN2 920 KW 200 R',
    status: 'assigned',
    assignmentDate: new Date('2024-11-05'),
    macAddress: '00:64:F8:31:D1:C5',
    location: 'Diourbel',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-03'),
        action: 'Créé',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN1 400 UL 164 P',
    status: 'assigned',
    assignmentDate: new Date('2024-11-05'),
    macAddress: '00:F1:3C:06:ED:9F',
    location: 'Louga',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-29'),
        action: 'Créé',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN1 722 PP 896 Y',
    status: 'assigned',
    assignmentDate: new Date('2024-11-14'),
    macAddress: '00:C3:DA:CA:A1:D0',
    location: 'Fatick',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-26'),
        action: 'Créé',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN1 657 ZH 593 B',
    status: 'assigned',
    assignmentDate: new Date('2024-11-19'),
    macAddress: '00:C8:CB:EB:DB:0E',
    location: 'Saint-Louis',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-05'),
        action: 'Créé',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN1 579 BD 260 U',
    status: 'assigned',
    assignmentDate: new Date('2024-11-31'),
    macAddress: '00:2E:18:7B:06:19',
    location: 'Tambacounda',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-09'),
        action: 'Créé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN2 403 QU 171 P',
    status: 'assigned',
    assignmentDate: new Date('2024-11-11'),
    macAddress: '00:19:C7:98:C1:E2',
    location: 'Kaolack',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-26'),
        action: 'Invalidé',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN2 509 XT 350 O',
    status: 'assigned',
    assignmentDate: new Date('2024-11-18'),
    macAddress: '00:DB:EE:26:57:0E',
    location: 'Ziguinchor',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-04'),
        action: 'Attribué',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN1 428 WP 671 A',
    status: 'assigned',
    assignmentDate: new Date('2024-11-26'),
    macAddress: '00:A7:AF:01:B2:4D',
    location: 'Thiès',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-03'),
        action: 'Invalidé',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN2 110 RW 109 O',
    status: 'assigned',
    assignmentDate: new Date('2024-11-28'),
    macAddress: '00:47:AD:E9:70:A4',
    location: 'Ziguinchor',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-29'),
        action: 'Attribué',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN1 969 XH 984 J',
    status: 'assigned',
    assignmentDate: new Date('2024-11-10'),
    macAddress: '00:4C:BE:D7:D3:A7',
    location: 'Tambacounda',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-06'),
        action: 'Invalidé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN2 929 NH 884 T',
    status: 'assigned',
    assignmentDate: new Date('2024-11-27'),
    macAddress: '00:DB:5D:95:8D:ED',
    location: 'Louga',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-27'),
        action: 'Créé',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN1 973 GX 575 J',
    status: 'assigned',
    assignmentDate: new Date('2024-11-14'),
    macAddress: '00:4B:29:28:F7:3D',
    location: 'Matam',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-06'),
        action: 'Attribué',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN1 787 GM 284 C',
    status: 'assigned',
    assignmentDate: new Date('2024-11-20'),
    macAddress: '00:C2:66:95:9A:AD',
    location: 'Thiès',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-06'),
        action: 'Attribué',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN1 982 PU 631 W',
    status: 'assigned',
    assignmentDate: new Date('2024-11-03'),
    macAddress: '00:A2:4E:78:02:CC',
    location: 'Ziguinchor',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-09'),
        action: 'Invalidé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN2 223 TG 875 E',
    status: 'assigned',
    assignmentDate: new Date('2024-11-08'),
    macAddress: '00:27:94:AB:6B:15',
    location: 'Kaolack',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-27'),
        action: 'Créé',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN2 901 BH 853 B',
    status: 'assigned',
    assignmentDate: new Date('2024-11-07'),
    macAddress: '00:42:0C:37:5A:46',
    location: 'Kaffrine',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-18'),
        action: 'Créé',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN1 118 QH 765 O',
    status: 'assigned',
    assignmentDate: new Date('2024-11-27'),
    macAddress: '00:FD:35:FC:82:B3',
    location: 'Dakar',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-05'),
        action: 'Attribué',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN2 138 LM 823 F',
    status: 'assigned',
    assignmentDate: new Date('2024-11-31'),
    macAddress: '00:58:1A:39:DF:0E',
    location: 'Thiès',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-24'),
        action: 'Attribué',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN2 697 EP 783 P',
    status: 'assigned',
    assignmentDate: new Date('2024-11-05'),
    macAddress: '00:A5:47:B7:C5:DE',
    location: 'Tambacounda',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-09'),
        action: 'Attribué',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN2 498 GN 200 F',
    status: 'assigned',
    assignmentDate: new Date('2024-11-18'),
    macAddress: '00:34:F1:BE:A8:32',
    location: 'Kaolack',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-14'),
        action: 'Attribué',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN1 744 OQ 719 E',
    status: 'assigned',
    assignmentDate: new Date('2024-11-20'),
    macAddress: '00:90:57:AC:28:42',
    location: 'Kaffrine',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-05'),
        action: 'Attribué',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN1 420 ZR 245 L',
    status: 'assigned',
    assignmentDate: new Date('2024-11-26'),
    macAddress: '00:73:22:84:58:AB',
    location: 'Kaffrine',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-18'),
        action: 'Invalidé',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN1 509 CF 653 H',
    status: 'assigned',
    assignmentDate: new Date('2024-11-05'),
    macAddress: '00:B5:FD:53:4D:5A',
    location: 'Saint-Louis',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-11'),
        action: 'Créé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN1 526 IA 661 S',
    status: 'assigned',
    assignmentDate: new Date('2024-11-13'),
    macAddress: '00:BB:12:96:CF:0E',
    location: 'Dakar',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-16'),
        action: 'Créé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN2 314 BT 780 F',
    status: 'assigned',
    assignmentDate: new Date('2024-11-04'),
    macAddress: '00:DA:D6:30:DD:ED',
    location: 'Dakar',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-21'),
        action: 'Créé',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN1 114 NJ 115 J',
    status: 'assigned',
    assignmentDate: new Date('2024-11-22'),
    macAddress: '00:F8:0F:13:F7:10',
    location: 'Sédhiou',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-18'),
        action: 'Invalidé',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN2 875 BC 335 H',
    status: 'assigned',
    assignmentDate: new Date('2024-11-19'),
    macAddress: '00:7D:85:84:C0:2E',
    location: 'Ziguinchor',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-09'),
        action: 'Créé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN1 956 IM 709 O',
    status: 'assigned',
    assignmentDate: new Date('2024-11-29'),
    macAddress: '00:D8:19:54:B4:0A',
    location: 'Fatick',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-28'),
        action: 'Invalidé',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN2 231 AX 360 I',
    status: 'assigned',
    assignmentDate: new Date('2024-11-02'),
    macAddress: '00:AC:0F:69:B2:45',
    location: 'Tambacounda',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-20'),
        action: 'Attribué',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN1 244 QW 942 P',
    status: 'assigned',
    assignmentDate: new Date('2024-11-07'),
    macAddress: '00:50:77:CE:65:36',
    location: 'Sédhiou',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-09'),
        action: 'Créé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN2 459 JA 176 K',
    status: 'assigned',
    assignmentDate: new Date('2024-11-30'),
    macAddress: '00:A9:1F:AA:9C:07',
    location: 'Dakar',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-21'),
        action: 'Attribué',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN2 669 TA 903 V',
    status: 'assigned',
    assignmentDate: new Date('2024-11-30'),
    macAddress: '00:F2:98:0A:34:4B',
    location: 'Dakar',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-31'),
        action: 'Créé',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN1 414 GW 331 L',
    status: 'assigned',
    assignmentDate: new Date('2024-11-04'),
    macAddress: '00:CD:AE:08:DA:61',
    location: 'Saint-Louis',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-29'),
        action: 'Créé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN2 481 YF 137 N',
    status: 'assigned',
    assignmentDate: new Date('2024-11-24'),
    macAddress: '00:38:45:66:F5:81',
    location: 'Ziguinchor',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-16'),
        action: 'Attribué',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN2 140 ZT 636 S',
    status: 'assigned',
    assignmentDate: new Date('2024-11-23'),
    macAddress: '00:4F:BE:64:B8:B9',
    location: 'Fatick',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-02'),
        action: 'Invalidé',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN2 680 QN 860 I',
    status: 'assigned',
    assignmentDate: new Date('2024-11-13'),
    macAddress: '00:39:36:7E:E2:D5',
    location: 'Fatick',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-14'),
        action: 'Créé',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN1 443 LJ 355 O',
    status: 'assigned',
    assignmentDate: new Date('2024-11-02'),
    macAddress: '00:FC:FD:12:0E:12',
    location: 'Sédhiou',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-18'),
        action: 'Créé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN2 285 DQ 280 W',
    status: 'assigned',
    assignmentDate: new Date('2024-11-22'),
    macAddress: '00:CE:8F:FA:28:DB',
    location: 'Kolda',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-15'),
        action: 'Créé',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN1 478 FQ 304 A',
    status: 'assigned',
    assignmentDate: new Date('2024-11-17'),
    macAddress: '00:39:52:C8:88:A1',
    location: 'Saint-Louis',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-18'),
        action: 'Créé',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN2 217 BQ 115 O',
    status: 'assigned',
    assignmentDate: new Date('2024-11-22'),
    macAddress: '00:A0:01:4A:59:BA',
    location: 'Kolda',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-10'),
        action: 'Attribué',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN2 368 KD 803 M',
    status: 'assigned',
    assignmentDate: new Date('2024-11-16'),
    macAddress: '00:8A:8C:43:70:32',
    location: 'Matam',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-02'),
        action: 'Attribué',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN2 692 YW 182 B',
    status: 'assigned',
    assignmentDate: new Date('2024-11-27'),
    macAddress: '00:04:07:E1:5F:DA',
    location: 'Sédhiou',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-17'),
        action: 'Invalidé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN1 400 KQ 357 J',
    status: 'assigned',
    assignmentDate: new Date('2024-11-06'),
    macAddress: '00:82:D9:1A:45:66',
    location: 'Dakar',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-07'),
        action: 'Créé',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN2 817 LN 806 W',
    status: 'assigned',
    assignmentDate: new Date('2024-11-24'),
    macAddress: '00:2B:FD:79:3C:68',
    location: 'Thiès',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-06'),
        action: 'Invalidé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN2 343 DZ 908 U',
    status: 'assigned',
    assignmentDate: new Date('2024-11-12'),
    macAddress: '00:CF:E2:07:EF:9F',
    location: 'Matam',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-23'),
        action: 'Attribué',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN1 228 KH 536 Y',
    status: 'assigned',
    assignmentDate: new Date('2024-11-30'),
    macAddress: '00:51:FA:D9:15:42',
    location: 'Sédhiou',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-24'),
        action: 'Attribué',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN2 432 QQ 397 J',
    status: 'assigned',
    assignmentDate: new Date('2024-11-31'),
    macAddress: '00:98:D8:09:44:51',
    location: 'Matam',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-08'),
        action: 'Attribué',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN1 401 ES 456 Q',
    status: 'assigned',
    assignmentDate: new Date('2024-11-17'),
    macAddress: '00:57:4C:88:5E:6E',
    location: 'Thiès',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-15'),
        action: 'Attribué',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN2 283 RG 226 Y',
    status: 'assigned',
    assignmentDate: new Date('2024-11-11'),
    macAddress: '00:B1:DD:62:D7:13',
    location: 'Kolda',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-08'),
        action: 'Attribué',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN1 832 NK 700 L',
    status: 'assigned',
    assignmentDate: new Date('2024-11-28'),
    macAddress: '00:63:2C:DE:F8:91',
    location: 'Louga',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-21'),
        action: 'Invalidé',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN1 329 EB 450 R',
    status: 'assigned',
    assignmentDate: new Date('2024-11-10'),
    macAddress: '00:0E:47:17:93:62',
    location: 'Kaffrine',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-27'),
        action: 'Invalidé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN1 398 YQ 280 V',
    status: 'assigned',
    assignmentDate: new Date('2024-11-31'),
    macAddress: '00:7E:93:DE:DF:96',
    location: 'Kaolack',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-06'),
        action: 'Créé',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN2 480 YP 155 T',
    status: 'assigned',
    assignmentDate: new Date('2024-11-26'),
    macAddress: '00:44:98:00:CB:A9',
    location: 'Saint-Louis',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-02'),
        action: 'Attribué',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN1 789 NC 490 P',
    status: 'assigned',
    assignmentDate: new Date('2024-11-11'),
    macAddress: '00:80:FF:C3:99:26',
    location: 'Matam',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-26'),
        action: 'Invalidé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN2 470 HB 581 Y',
    status: 'assigned',
    assignmentDate: new Date('2024-11-06'),
    macAddress: '00:24:39:C1:9C:E6',
    location: 'Sédhiou',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-23'),
        action: 'Attribué',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN1 729 ZW 670 U',
    status: 'assigned',
    assignmentDate: new Date('2024-11-02'),
    macAddress: '00:97:48:5A:D8:7F',
    location: 'Thiès',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-14'),
        action: 'Attribué',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN2 738 BY 645 U',
    status: 'assigned',
    assignmentDate: new Date('2024-11-03'),
    macAddress: '00:BE:41:98:A6:E1',
    location: 'Tambacounda',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-30'),
        action: 'Invalidé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN1 519 RN 810 F',
    status: 'assigned',
    assignmentDate: new Date('2024-11-16'),
    macAddress: '00:E4:DE:BA:7B:9A',
    location: 'Saint-Louis',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-22'),
        action: 'Invalidé',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN2 993 AW 503 Y',
    status: 'assigned',
    assignmentDate: new Date('2024-11-19'),
    macAddress: '00:9D:00:BB:6C:30',
    location: 'Saint-Louis',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-28'),
        action: 'Invalidé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN1 620 RP 226 I',
    status: 'assigned',
    assignmentDate: new Date('2024-11-30'),
    macAddress: '00:15:BF:71:5B:11',
    location: 'Kolda',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-03'),
        action: 'Attribué',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN2 444 EI 539 X',
    status: 'assigned',
    assignmentDate: new Date('2024-11-06'),
    macAddress: '00:AF:42:D7:9A:78',
    location: 'Louga',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-16'),
        action: 'Créé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN2 693 KA 760 R',
    status: 'assigned',
    assignmentDate: new Date('2024-11-30'),
    macAddress: '00:EA:3F:AC:08:D7',
    location: 'Louga',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-15'),
        action: 'Créé',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN2 716 BW 107 J',
    status: 'assigned',
    assignmentDate: new Date('2024-11-17'),
    macAddress: '00:ED:8D:74:45:ED',
    location: 'Dakar',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-19'),
        action: 'Invalidé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN1 300 PJ 587 R',
    status: 'assigned',
    assignmentDate: new Date('2024-11-22'),
    macAddress: '00:51:DA:FA:82:42',
    location: 'Kaolack',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-25'),
        action: 'Attribué',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN2 579 PJ 966 F',
    status: 'assigned',
    assignmentDate: new Date('2024-11-18'),
    macAddress: '00:9F:B9:C9:44:E2',
    location: 'Sédhiou',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-28'),
        action: 'Attribué',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN2 409 OK 879 W',
    status: 'assigned',
    assignmentDate: new Date('2024-11-27'),
    macAddress: '00:B3:A5:60:9B:91',
    location: 'Tambacounda',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-10'),
        action: 'Créé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN1 401 HD 972 N',
    status: 'assigned',
    assignmentDate: new Date('2024-11-17'),
    macAddress: '00:EB:97:EC:FC:58',
    location: 'Fatick',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-23'),
        action: 'Attribué',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN2 125 MP 382 A',
    status: 'assigned',
    assignmentDate: new Date('2024-11-06'),
    macAddress: '00:A0:83:16:20:CC',
    location: 'Saint-Louis',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-23'),
        action: 'Attribué',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN1 403 EW 270 H',
    status: 'assigned',
    assignmentDate: new Date('2024-11-28'),
    macAddress: '00:23:67:AE:A7:1F',
    location: 'Saint-Louis',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-16'),
        action: 'Invalidé',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN2 962 KX 812 I',
    status: 'assigned',
    assignmentDate: new Date('2024-11-21'),
    macAddress: '00:CA:AD:82:5E:47',
    location: 'Diourbel',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-25'),
        action: 'Invalidé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN2 247 GJ 493 O',
    status: 'assigned',
    assignmentDate: new Date('2024-11-09'),
    macAddress: '00:7E:F0:17:51:60',
    location: 'Matam',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-05'),
        action: 'Attribué',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN2 953 IZ 246 K',
    status: 'assigned',
    assignmentDate: new Date('2024-11-30'),
    macAddress: '00:BF:C0:DA:7F:E9',
    location: 'Kaolack',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-10'),
        action: 'Invalidé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN1 596 KN 757 X',
    status: 'assigned',
    assignmentDate: new Date('2024-11-11'),
    macAddress: '00:FF:D2:15:CB:B3',
    location: 'Thiès',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-02'),
        action: 'Attribué',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN2 164 TP 992 F',
    status: 'assigned',
    assignmentDate: new Date('2024-11-04'),
    macAddress: '00:A3:16:5C:3E:37',
    location: 'Tambacounda',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-18'),
        action: 'Invalidé',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN1 839 NU 961 U',
    status: 'assigned',
    assignmentDate: new Date('2024-11-14'),
    macAddress: '00:4A:98:D2:76:14',
    location: 'Kaffrine',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-22'),
        action: 'Attribué',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN2 385 CT 975 S',
    status: 'assigned',
    assignmentDate: new Date('2024-11-06'),
    macAddress: '00:88:D5:A7:2D:06',
    location: 'Sédhiou',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-13'),
        action: 'Créé',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN2 259 MO 971 L',
    status: 'assigned',
    assignmentDate: new Date('2024-11-03'),
    macAddress: '00:38:77:F4:9F:66',
    location: 'Ziguinchor',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-29'),
        action: 'Attribué',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN1 755 ZS 556 O',
    status: 'assigned',
    assignmentDate: new Date('2024-11-30'),
    macAddress: '00:44:9B:A1:1A:C4',
    location: 'Kaffrine',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-11'),
        action: 'Attribué',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN1 759 UB 981 B',
    status: 'assigned',
    assignmentDate: new Date('2024-11-18'),
    macAddress: '00:95:63:C6:9F:A2',
    location: 'Dakar',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-13'),
        action: 'Attribué',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN1 215 AN 698 P',
    status: 'assigned',
    assignmentDate: new Date('2024-11-26'),
    macAddress: '00:29:04:4A:07:85',
    location: 'Sédhiou',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-17'),
        action: 'Créé',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN2 722 YR 763 A',
    status: 'assigned',
    assignmentDate: new Date('2024-11-27'),
    macAddress: '00:33:15:E6:C6:18',
    location: 'Matam',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-04'),
        action: 'Créé',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN1 258 YD 969 K',
    status: 'assigned',
    assignmentDate: new Date('2024-11-17'),
    macAddress: '00:89:5E:2E:D4:D6',
    location: 'Diourbel',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-12'),
        action: 'Invalidé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN1 814 VB 246 M',
    status: 'assigned',
    assignmentDate: new Date('2024-11-06'),
    macAddress: '00:87:FA:B0:7B:66',
    location: 'Thiès',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-12'),
        action: 'Attribué',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN2 561 YA 655 K',
    status: 'assigned',
    assignmentDate: new Date('2024-11-20'),
    macAddress: '00:1F:0B:31:03:21',
    location: 'Fatick',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-02'),
        action: 'Attribué',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN1 705 TB 139 O',
    status: 'assigned',
    assignmentDate: new Date('2024-11-12'),
    macAddress: '00:A8:79:4F:07:6D',
    location: 'Matam',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-13'),
        action: 'Invalidé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN1 888 ON 114 X',
    status: 'assigned',
    assignmentDate: new Date('2024-11-07'),
    macAddress: '00:C8:46:39:D0:36',
    location: 'Thiès',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-16'),
        action: 'Créé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN2 226 KS 956 Q',
    status: 'assigned',
    assignmentDate: new Date('2024-11-29'),
    macAddress: '00:CE:E7:70:B7:F2',
    location: 'Kaolack',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-08'),
        action: 'Attribué',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN2 147 WN 809 R',
    status: 'assigned',
    assignmentDate: new Date('2024-11-02'),
    macAddress: '00:FE:57:22:00:50',
    location: 'Ziguinchor',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-31'),
        action: 'Invalidé',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN1 758 BZ 207 N',
    status: 'assigned',
    assignmentDate: new Date('2024-11-08'),
    macAddress: '00:AE:01:2C:7B:62',
    location: 'Saint-Louis',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-11'),
        action: 'Créé',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN2 683 MH 378 B',
    status: 'assigned',
    assignmentDate: new Date('2024-11-05'),
    macAddress: '00:FA:A3:87:14:23',
    location: 'Thiès',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-23'),
        action: 'Créé',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN1 749 AJ 146 P',
    status: 'assigned',
    assignmentDate: new Date('2024-11-25'),
    macAddress: '00:12:21:2E:14:1C',
    location: 'Saint-Louis',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-26'),
        action: 'Attribué',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN2 183 EZ 937 H',
    status: 'assigned',
    assignmentDate: new Date('2024-11-05'),
    macAddress: '00:A1:5B:4E:15:E1',
    location: 'Louga',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-15'),
        action: 'Attribué',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN1 782 QP 295 H',
    status: 'assigned',
    assignmentDate: new Date('2024-11-15'),
    macAddress: '00:43:08:97:68:8D',
    location: 'Thiès',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-28'),
        action: 'Attribué',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN2 651 CJ 846 K',
    status: 'assigned',
    assignmentDate: new Date('2024-11-09'),
    macAddress: '00:E9:4B:66:8A:5B',
    location: 'Tambacounda',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-17'),
        action: 'Créé',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN2 782 KE 465 V',
    status: 'assigned',
    assignmentDate: new Date('2024-11-21'),
    macAddress: '00:49:E2:8E:5F:08',
    location: 'Diourbel',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-15'),
        action: 'Créé',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN2 149 XM 752 V',
    status: 'assigned',
    assignmentDate: new Date('2024-11-31'),
    macAddress: '00:1E:69:CD:8B:40',
    location: 'Diourbel',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-15'),
        action: 'Attribué',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN2 527 ZE 392 O',
    status: 'assigned',
    assignmentDate: new Date('2024-11-27'),
    macAddress: '00:1C:43:B3:19:B0',
    location: 'Ziguinchor',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-19'),
        action: 'Attribué',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN1 248 GE 695 B',
    status: 'assigned',
    assignmentDate: new Date('2024-11-23'),
    macAddress: '00:46:72:49:3B:5B',
    location: 'Dakar',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-16'),
        action: 'Attribué',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN1 936 HM 669 Y',
    status: 'assigned',
    assignmentDate: new Date('2024-11-19'),
    macAddress: '00:D8:35:8D:67:4E',
    location: 'Tambacounda',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-12'),
        action: 'Attribué',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN1 808 GY 915 K',
    status: 'assigned',
    assignmentDate: new Date('2024-11-03'),
    macAddress: '00:D9:D9:08:68:A4',
    location: 'Louga',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-02'),
        action: 'Attribué',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN2 590 ZR 368 P',
    status: 'assigned',
    assignmentDate: new Date('2024-11-17'),
    macAddress: '00:D3:18:DF:5B:54',
    location: 'Dakar',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-06'),
        action: 'Invalidé',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN1 881 FQ 409 V',
    status: 'assigned',
    assignmentDate: new Date('2024-11-07'),
    macAddress: '00:81:67:11:C5:EA',
    location: 'Tambacounda',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-30'),
        action: 'Attribué',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN2 186 AU 527 L',
    status: 'assigned',
    assignmentDate: new Date('2024-11-09'),
    macAddress: '00:64:02:6D:BC:5B',
    location: 'Kaolack',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-25'),
        action: 'Attribué',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN2 498 UK 280 O',
    status: 'assigned',
    assignmentDate: new Date('2024-11-06'),
    macAddress: '00:94:7A:E1:92:2B',
    location: 'Fatick',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-08'),
        action: 'Créé',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN2 974 DO 984 X',
    status: 'assigned',
    assignmentDate: new Date('2024-11-04'),
    macAddress: '00:B8:AC:2A:A4:B1',
    location: 'Tambacounda',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-21'),
        action: 'Invalidé',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN1 610 RI 191 R',
    status: 'assigned',
    assignmentDate: new Date('2024-11-08'),
    macAddress: '00:E6:E4:FA:13:8A',
    location: 'Kaffrine',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-14'),
        action: 'Attribué',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN1 713 NL 379 P',
    status: 'assigned',
    assignmentDate: new Date('2024-11-06'),
    macAddress: '00:C4:47:BB:6B:EC',
    location: 'Kolda',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-04'),
        action: 'Invalidé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN2 679 YN 247 T',
    status: 'assigned',
    assignmentDate: new Date('2024-11-03'),
    macAddress: '00:26:9C:DD:BC:3E',
    location: 'Ziguinchor',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-11'),
        action: 'Invalidé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN1 435 MX 246 P',
    status: 'assigned',
    assignmentDate: new Date('2024-11-25'),
    macAddress: '00:BC:9A:40:C5:AD',
    location: 'Matam',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-27'),
        action: 'Créé',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN2 347 BG 996 F',
    status: 'assigned',
    assignmentDate: new Date('2024-11-31'),
    macAddress: '00:28:5E:17:C6:C3',
    location: 'Kolda',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-07'),
        action: 'Invalidé',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN1 461 XE 711 L',
    status: 'assigned',
    assignmentDate: new Date('2024-11-28'),
    macAddress: '00:92:F6:6A:95:6D',
    location: 'Fatick',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-21'),
        action: 'Invalidé',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN1 374 AR 342 D',
    status: 'assigned',
    assignmentDate: new Date('2024-11-28'),
    macAddress: '00:17:2F:59:6B:F4',
    location: 'Matam',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-18'),
        action: 'Invalidé',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN1 105 ET 366 L',
    status: 'assigned',
    assignmentDate: new Date('2024-11-08'),
    macAddress: '00:08:EE:A6:27:7A',
    location: 'Tambacounda',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-13'),
        action: 'Invalidé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN2 757 RA 823 W',
    status: 'assigned',
    assignmentDate: new Date('2024-11-29'),
    macAddress: '00:0C:59:57:FD:51',
    location: 'Dakar',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-21'),
        action: 'Créé',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN2 467 FB 992 A',
    status: 'assigned',
    assignmentDate: new Date('2024-11-30'),
    macAddress: '00:70:58:6B:9C:C4',
    location: 'Thiès',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-11'),
        action: 'Créé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN2 807 OQ 189 Y',
    status: 'assigned',
    assignmentDate: new Date('2024-11-26'),
    macAddress: '00:64:49:26:5A:25',
    location: 'Dakar',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-02'),
        action: 'Invalidé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN2 510 FG 841 B',
    status: 'assigned',
    assignmentDate: new Date('2024-11-25'),
    macAddress: '00:98:71:53:02:6F',
    location: 'Matam',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-11'),
        action: 'Créé',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN1 866 TN 458 Y',
    status: 'assigned',
    assignmentDate: new Date('2024-11-29'),
    macAddress: '00:D7:62:B8:97:B7',
    location: 'Dakar',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-14'),
        action: 'Créé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN2 900 UB 471 M',
    status: 'assigned',
    assignmentDate: new Date('2024-11-27'),
    macAddress: '00:5F:32:9E:85:CB',
    location: 'Dakar',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-03'),
        action: 'Créé',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN1 619 UH 379 J',
    status: 'assigned',
    assignmentDate: new Date('2024-11-21'),
    macAddress: '00:C4:6D:34:AB:1A',
    location: 'Ziguinchor',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-19'),
        action: 'Attribué',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN2 204 UI 198 J',
    status: 'assigned',
    assignmentDate: new Date('2024-11-19'),
    macAddress: '00:30:3C:FF:5D:27',
    location: 'Tambacounda',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-18'),
        action: 'Créé',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN1 320 AC 639 D',
    status: 'assigned',
    assignmentDate: new Date('2024-11-24'),
    macAddress: '00:DC:E6:C3:AE:CC',
    location: 'Fatick',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-23'),
        action: 'Créé',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN2 705 JQ 953 A',
    status: 'assigned',
    assignmentDate: new Date('2024-11-15'),
    macAddress: '00:E5:E0:F4:46:3C',
    location: 'Matam',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-07'),
        action: 'Invalidé',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN2 598 PR 392 X',
    status: 'assigned',
    assignmentDate: new Date('2024-11-12'),
    macAddress: '00:63:0B:83:49:94',
    location: 'Ziguinchor',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-07'),
        action: 'Invalidé',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN1 979 VD 576 Q',
    status: 'assigned',
    assignmentDate: new Date('2024-11-05'),
    macAddress: '00:22:9C:AC:3B:E1',
    location: 'Saint-Louis',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-08'),
        action: 'Créé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN2 927 XH 500 O',
    status: 'assigned',
    assignmentDate: new Date('2024-11-02'),
    macAddress: '00:FC:A8:BE:91:EF',
    location: 'Kaolack',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-15'),
        action: 'Créé',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN1 307 ZB 889 N',
    status: 'assigned',
    assignmentDate: new Date('2024-11-05'),
    macAddress: '00:34:E0:88:FB:58',
    location: 'Kaffrine',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-02'),
        action: 'Invalidé',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN2 814 JD 268 D',
    status: 'assigned',
    assignmentDate: new Date('2024-11-18'),
    macAddress: '00:50:8E:F3:A8:AA',
    location: 'Ziguinchor',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-27'),
        action: 'Attribué',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN1 147 XB 605 O',
    status: 'assigned',
    assignmentDate: new Date('2024-11-24'),
    macAddress: '00:C0:41:64:70:D5',
    location: 'Thiès',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-03'),
        action: 'Attribué',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN2 195 MC 784 E',
    status: 'assigned',
    assignmentDate: new Date('2024-11-18'),
    macAddress: '00:75:F2:19:8A:0A',
    location: 'Louga',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-09'),
        action: 'Attribué',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN1 823 ID 315 A',
    status: 'assigned',
    assignmentDate: new Date('2024-11-27'),
    macAddress: '00:8E:9F:F2:4B:82',
    location: 'Saint-Louis',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-23'),
        action: 'Créé',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN2 683 GY 940 S',
    status: 'assigned',
    assignmentDate: new Date('2024-11-23'),
    macAddress: '00:E4:50:CE:38:09',
    location: 'Ziguinchor',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-19'),
        action: 'Invalidé',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN1 502 AK 991 O',
    status: 'assigned',
    assignmentDate: new Date('2024-11-31'),
    macAddress: '00:FD:AA:6B:B2:3E',
    location: 'Dakar',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-16'),
        action: 'Invalidé',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN1 425 BX 473 Z',
    status: 'assigned',
    assignmentDate: new Date('2024-11-19'),
    macAddress: '00:DC:4B:0A:80:C7',
    location: 'Thiès',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-19'),
        action: 'Créé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN2 505 TD 589 C',
    status: 'assigned',
    assignmentDate: new Date('2024-11-08'),
    macAddress: '00:09:BD:1A:8F:0E',
    location: 'Matam',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-09'),
        action: 'Créé',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN1 201 QG 254 I',
    status: 'assigned',
    assignmentDate: new Date('2024-11-06'),
    macAddress: '00:62:3E:6C:BB:40',
    location: 'Saint-Louis',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-20'),
        action: 'Créé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN1 684 FC 942 I',
    status: 'assigned',
    assignmentDate: new Date('2024-11-21'),
    macAddress: '00:80:26:B5:30:7E',
    location: 'Saint-Louis',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-08'),
        action: 'Attribué',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN2 201 LX 791 J',
    status: 'assigned',
    assignmentDate: new Date('2024-11-09'),
    macAddress: '00:96:B3:F9:AA:1D',
    location: 'Sédhiou',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-23'),
        action: 'Créé',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN2 466 XF 139 V',
    status: 'assigned',
    assignmentDate: new Date('2024-11-07'),
    macAddress: '00:08:53:18:28:B4',
    location: 'Louga',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-13'),
        action: 'Créé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN2 301 EC 526 C',
    status: 'assigned',
    assignmentDate: new Date('2024-11-07'),
    macAddress: '00:1E:08:7F:0E:F4',
    location: 'Thiès',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-30'),
        action: 'Invalidé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN1 553 NX 347 P',
    status: 'assigned',
    assignmentDate: new Date('2024-11-13'),
    macAddress: '00:EE:2C:C4:E1:5A',
    location: 'Louga',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-02'),
        action: 'Créé',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN2 342 NK 656 W',
    status: 'assigned',
    assignmentDate: new Date('2024-11-11'),
    macAddress: '00:DD:CD:DD:A7:9F',
    location: 'Tambacounda',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-29'),
        action: 'Invalidé',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN2 171 YQ 987 N',
    status: 'assigned',
    assignmentDate: new Date('2024-11-14'),
    macAddress: '00:69:26:74:25:34',
    location: 'Dakar',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-10'),
        action: 'Attribué',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN1 467 PD 470 L',
    status: 'assigned',
    assignmentDate: new Date('2024-11-14'),
    macAddress: '00:45:6E:3B:A8:04',
    location: 'Tambacounda',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-05'),
        action: 'Attribué',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN2 700 NO 551 L',
    status: 'assigned',
    assignmentDate: new Date('2024-11-28'),
    macAddress: '00:73:7A:21:CD:8B',
    location: 'Sédhiou',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-10'),
        action: 'Invalidé',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN2 486 OL 251 K',
    status: 'assigned',
    assignmentDate: new Date('2024-11-26'),
    macAddress: '00:7F:A2:A4:CE:DC',
    location: 'Saint-Louis',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-03'),
        action: 'Attribué',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN1 743 SS 995 M',
    status: 'assigned',
    assignmentDate: new Date('2024-11-14'),
    macAddress: '00:B2:E7:75:6E:1D',
    location: 'Matam',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-31'),
        action: 'Invalidé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN1 130 GX 859 L',
    status: 'assigned',
    assignmentDate: new Date('2024-11-09'),
    macAddress: '00:C5:6F:64:54:57',
    location: 'Tambacounda',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-26'),
        action: 'Invalidé',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN2 160 VP 498 S',
    status: 'assigned',
    assignmentDate: new Date('2024-11-09'),
    macAddress: '00:14:2D:BB:EE:F9',
    location: 'Fatick',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-16'),
        action: 'Attribué',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN2 411 VP 466 T',
    status: 'assigned',
    assignmentDate: new Date('2024-11-17'),
    macAddress: '00:38:6F:70:E4:E6',
    location: 'Fatick',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-30'),
        action: 'Attribué',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN1 693 PS 143 L',
    status: 'assigned',
    assignmentDate: new Date('2024-11-26'),
    macAddress: '00:E5:B9:C7:72:AB',
    location: 'Saint-Louis',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-16'),
        action: 'Invalidé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN1 798 MN 333 P',
    status: 'assigned',
    assignmentDate: new Date('2024-11-19'),
    macAddress: '00:30:25:79:8A:C8',
    location: 'Kaffrine',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-19'),
        action: 'Attribué',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN2 926 GS 594 F',
    status: 'assigned',
    assignmentDate: new Date('2024-11-17'),
    macAddress: '00:0E:0B:53:70:5F',
    location: 'Tambacounda',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-02'),
        action: 'Créé',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN2 856 MG 956 V',
    status: 'assigned',
    assignmentDate: new Date('2024-11-02'),
    macAddress: '00:05:B2:18:94:D6',
    location: 'Dakar',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-19'),
        action: 'Attribué',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN2 713 ZJ 553 X',
    status: 'assigned',
    assignmentDate: new Date('2024-11-28'),
    macAddress: '00:81:D3:B4:35:81',
    location: 'Saint-Louis',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-02'),
        action: 'Attribué',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN2 484 FP 869 X',
    status: 'assigned',
    assignmentDate: new Date('2024-11-28'),
    macAddress: '00:F2:15:A8:B1:71',
    location: 'Sédhiou',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-25'),
        action: 'Attribué',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN1 737 FD 457 U',
    status: 'assigned',
    assignmentDate: new Date('2024-11-24'),
    macAddress: '00:E8:12:DA:47:5B',
    location: 'Louga',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-08'),
        action: 'Attribué',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN2 830 LR 321 H',
    status: 'assigned',
    assignmentDate: new Date('2024-11-23'),
    macAddress: '00:73:CB:0D:61:3E',
    location: 'Diourbel',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-22'),
        action: 'Créé',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN1 924 XT 917 H',
    status: 'assigned',
    assignmentDate: new Date('2024-11-30'),
    macAddress: '00:42:04:1B:3B:CB',
    location: 'Diourbel',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-12'),
        action: 'Créé',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN1 255 ZD 285 P',
    status: 'assigned',
    assignmentDate: new Date('2024-11-15'),
    macAddress: '00:0E:30:DE:A0:CC',
    location: 'Thiès',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-22'),
        action: 'Invalidé',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN1 628 BZ 315 W',
    status: 'assigned',
    assignmentDate: new Date('2024-11-11'),
    macAddress: '00:1F:86:DA:3D:CF',
    location: 'Saint-Louis',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-13'),
        action: 'Créé',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN2 583 PA 837 H',
    status: 'assigned',
    assignmentDate: new Date('2024-11-04'),
    macAddress: '00:6D:04:F5:2B:02',
    location: 'Ziguinchor',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-18'),
        action: 'Invalidé',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN2 628 ZI 935 J',
    status: 'assigned',
    assignmentDate: new Date('2024-11-18'),
    macAddress: '00:26:74:C9:6D:24',
    location: 'Matam',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-07'),
        action: 'Invalidé',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN1 654 CJ 858 V',
    status: 'assigned',
    assignmentDate: new Date('2024-11-10'),
    macAddress: '00:79:67:D4:62:58',
    location: 'Thiès',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-06'),
        action: 'Invalidé',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN1 957 MJ 710 F',
    status: 'assigned',
    assignmentDate: new Date('2024-11-26'),
    macAddress: '00:D3:98:01:F5:52',
    location: 'Louga',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-06'),
        action: 'Invalidé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN1 398 PV 872 K',
    status: 'assigned',
    assignmentDate: new Date('2024-11-19'),
    macAddress: '00:DF:E3:AC:76:59',
    location: 'Ziguinchor',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-11'),
        action: 'Invalidé',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN2 319 MG 361 C',
    status: 'assigned',
    assignmentDate: new Date('2024-11-07'),
    macAddress: '00:F5:DA:3C:F8:71',
    location: 'Tambacounda',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-08'),
        action: 'Créé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN1 634 FR 680 J',
    status: 'assigned',
    assignmentDate: new Date('2024-11-04'),
    macAddress: '00:04:8D:0C:0C:F4',
    location: 'Kaolack',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-26'),
        action: 'Invalidé',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN1 572 OD 666 F',
    status: 'assigned',
    assignmentDate: new Date('2024-11-23'),
    macAddress: '00:92:F1:75:11:1B',
    location: 'Kaolack',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-06'),
        action: 'Invalidé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN2 885 II 756 M',
    status: 'assigned',
    assignmentDate: new Date('2024-11-13'),
    macAddress: '00:43:6F:BA:9C:AF',
    location: 'Thiès',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-03'),
        action: 'Invalidé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN1 279 NA 880 K',
    status: 'assigned',
    assignmentDate: new Date('2024-11-13'),
    macAddress: '00:82:A4:E3:3A:8B',
    location: 'Kolda',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-14'),
        action: 'Attribué',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN2 886 XX 698 K',
    status: 'assigned',
    assignmentDate: new Date('2024-11-03'),
    macAddress: '00:64:43:FD:C9:A3',
    location: 'Sédhiou',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-04'),
        action: 'Attribué',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN2 920 OD 756 A',
    status: 'assigned',
    assignmentDate: new Date('2024-11-07'),
    macAddress: '00:C0:A5:88:20:72',
    location: 'Saint-Louis',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-22'),
        action: 'Attribué',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN2 837 FV 444 D',
    status: 'assigned',
    assignmentDate: new Date('2024-11-31'),
    macAddress: '00:C2:46:55:74:62',
    location: 'Matam',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-29'),
        action: 'Invalidé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN2 482 FW 922 D',
    status: 'assigned',
    assignmentDate: new Date('2024-11-07'),
    macAddress: '00:AE:6B:BA:43:1D',
    location: 'Kaolack',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-20'),
        action: 'Créé',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN1 817 FH 199 H',
    status: 'assigned',
    assignmentDate: new Date('2024-11-30'),
    macAddress: '00:3D:1E:B6:2B:50',
    location: 'Kaffrine',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-04'),
        action: 'Créé',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN1 834 PS 563 X',
    status: 'assigned',
    assignmentDate: new Date('2024-11-19'),
    macAddress: '00:B1:F1:72:AC:CD',
    location: 'Diourbel',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-07'),
        action: 'Invalidé',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN2 172 AG 633 T',
    status: 'assigned',
    assignmentDate: new Date('2024-11-29'),
    macAddress: '00:EA:92:C6:52:99',
    location: 'Sédhiou',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-21'),
        action: 'Créé',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN2 324 CJ 371 Q',
    status: 'assigned',
    assignmentDate: new Date('2024-11-23'),
    macAddress: '00:46:4A:DB:FE:5E',
    location: 'Matam',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-15'),
        action: 'Invalidé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN2 896 XN 264 K',
    status: 'assigned',
    assignmentDate: new Date('2024-11-22'),
    macAddress: '00:29:18:74:72:24',
    location: 'Dakar',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-18'),
        action: 'Invalidé',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN1 398 LP 157 M',
    status: 'assigned',
    assignmentDate: new Date('2024-11-24'),
    macAddress: '00:33:D4:70:E0:52',
    location: 'Diourbel',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-18'),
        action: 'Créé',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN1 411 EB 987 G',
    status: 'assigned',
    assignmentDate: new Date('2024-11-31'),
    macAddress: '00:D6:D7:94:81:20',
    location: 'Dakar',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-16'),
        action: 'Attribué',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN2 118 AA 222 L',
    status: 'assigned',
    assignmentDate: new Date('2024-11-10'),
    macAddress: '00:79:95:CB:50:BE',
    location: 'Kaffrine',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-31'),
        action: 'Invalidé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN2 832 RE 490 C',
    status: 'assigned',
    assignmentDate: new Date('2024-11-17'),
    macAddress: '00:54:22:B9:B9:F8',
    location: 'Ziguinchor',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-17'),
        action: 'Invalidé',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN2 728 OH 855 G',
    status: 'assigned',
    assignmentDate: new Date('2024-11-03'),
    macAddress: '00:72:89:0C:27:15',
    location: 'Kaffrine',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-11'),
        action: 'Créé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN1 357 WE 408 L',
    status: 'assigned',
    assignmentDate: new Date('2024-11-29'),
    macAddress: '00:90:3F:18:B9:78',
    location: 'Saint-Louis',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-17'),
        action: 'Invalidé',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN2 143 BB 751 C',
    status: 'assigned',
    assignmentDate: new Date('2024-11-16'),
    macAddress: '00:10:40:F0:98:3C',
    location: 'Dakar',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-22'),
        action: 'Invalidé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN2 500 XH 935 U',
    status: 'assigned',
    assignmentDate: new Date('2024-11-08'),
    macAddress: '00:47:8C:97:E7:B7',
    location: 'Kolda',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-29'),
        action: 'Invalidé',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN2 727 QX 846 I',
    status: 'assigned',
    assignmentDate: new Date('2024-11-24'),
    macAddress: '00:93:F5:C1:7F:19',
    location: 'Fatick',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-10'),
        action: 'Attribué',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN1 999 XW 718 B',
    status: 'assigned',
    assignmentDate: new Date('2024-11-20'),
    macAddress: '00:1D:44:B7:BD:19',
    location: 'Dakar',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-12'),
        action: 'Créé',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN2 884 BQ 594 G',
    status: 'assigned',
    assignmentDate: new Date('2024-11-03'),
    macAddress: '00:69:B4:22:C1:01',
    location: 'Fatick',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-24'),
        action: 'Attribué',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN1 866 LT 436 U',
    status: 'assigned',
    assignmentDate: new Date('2024-11-04'),
    macAddress: '00:6C:9D:5E:E0:A0',
    location: 'Ziguinchor',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-17'),
        action: 'Créé',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN2 930 ZI 894 V',
    status: 'assigned',
    assignmentDate: new Date('2024-11-29'),
    macAddress: '00:AB:34:0B:8C:B3',
    location: 'Kaffrine',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-05'),
        action: 'Créé',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN2 292 WS 650 V',
    status: 'assigned',
    assignmentDate: new Date('2024-11-25'),
    macAddress: '00:A6:C3:1F:79:5C',
    location: 'Ziguinchor',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-16'),
        action: 'Attribué',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN2 590 DP 311 Z',
    status: 'assigned',
    assignmentDate: new Date('2024-11-27'),
    macAddress: '00:1C:CF:C5:0A:20',
    location: 'Tambacounda',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-10'),
        action: 'Invalidé',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN1 902 FH 704 I',
    status: 'assigned',
    assignmentDate: new Date('2024-11-09'),
    macAddress: '00:56:B5:B8:6D:47',
    location: 'Louga',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-20'),
        action: 'Attribué',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN2 842 PP 825 T',
    status: 'assigned',
    assignmentDate: new Date('2024-11-13'),
    macAddress: '00:EA:AD:D1:60:7B',
    location: 'Tambacounda',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-03'),
        action: 'Attribué',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN1 178 PB 119 G',
    status: 'assigned',
    assignmentDate: new Date('2024-11-15'),
    macAddress: '00:C9:F9:4C:E7:CF',
    location: 'Ziguinchor',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-30'),
        action: 'Invalidé',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN2 193 IY 375 A',
    status: 'assigned',
    assignmentDate: new Date('2024-11-25'),
    macAddress: '00:AD:6A:69:CD:0F',
    location: 'Sédhiou',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-12'),
        action: 'Créé',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN2 541 CQ 772 J',
    status: 'assigned',
    assignmentDate: new Date('2024-11-18'),
    macAddress: '00:6F:E8:FE:13:9A',
    location: 'Louga',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-27'),
        action: 'Invalidé',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN2 137 CI 607 V',
    status: 'assigned',
    assignmentDate: new Date('2024-11-15'),
    macAddress: '00:A4:66:30:8E:7A',
    location: 'Louga',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-23'),
        action: 'Invalidé',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN1 475 GX 875 W',
    status: 'assigned',
    assignmentDate: new Date('2024-11-31'),
    macAddress: '00:02:3C:19:D4:57',
    location: 'Louga',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-03'),
        action: 'Créé',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN2 700 XY 348 O',
    status: 'assigned',
    assignmentDate: new Date('2024-11-16'),
    macAddress: '00:66:87:CB:C4:BD',
    location: 'Matam',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-05'),
        action: 'Attribué',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN2 169 OI 283 I',
    status: 'assigned',
    assignmentDate: new Date('2024-11-29'),
    macAddress: '00:2F:C2:DE:A0:A5',
    location: 'Louga',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-25'),
        action: 'Créé',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN1 149 OT 427 N',
    status: 'assigned',
    assignmentDate: new Date('2024-11-26'),
    macAddress: '00:37:B2:C4:09:40',
    location: 'Dakar',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-24'),
        action: 'Attribué',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN2 841 SG 558 W',
    status: 'assigned',
    assignmentDate: new Date('2024-11-12'),
    macAddress: '00:CD:4B:3C:F6:19',
    location: 'Kaolack',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-18'),
        action: 'Créé',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN2 560 BR 976 T',
    status: 'assigned',
    assignmentDate: new Date('2024-11-19'),
    macAddress: '00:84:D5:41:C9:6C',
    location: 'Diourbel',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-11'),
        action: 'Attribué',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN2 230 FB 945 K',
    status: 'assigned',
    assignmentDate: new Date('2024-11-18'),
    macAddress: '00:F5:F1:55:8B:14',
    location: 'Tambacounda',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-30'),
        action: 'Créé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN1 429 GO 966 D',
    status: 'assigned',
    assignmentDate: new Date('2024-11-28'),
    macAddress: '00:5E:75:0A:ED:6C',
    location: 'Tambacounda',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-04'),
        action: 'Invalidé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN1 634 AC 362 R',
    status: 'assigned',
    assignmentDate: new Date('2024-11-18'),
    macAddress: '00:A2:0B:48:25:89',
    location: 'Matam',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-18'),
        action: 'Attribué',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN2 470 HL 147 I',
    status: 'assigned',
    assignmentDate: new Date('2024-11-21'),
    macAddress: '00:00:4B:0E:BD:55',
    location: 'Dakar',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-12'),
        action: 'Créé',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN1 862 VL 741 Y',
    status: 'assigned',
    assignmentDate: new Date('2024-11-28'),
    macAddress: '00:4C:31:A9:DC:73',
    location: 'Kaffrine',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-15'),
        action: 'Invalidé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN2 430 TH 703 O',
    status: 'assigned',
    assignmentDate: new Date('2024-11-12'),
    macAddress: '00:C9:42:B9:A8:84',
    location: 'Fatick',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-05'),
        action: 'Créé',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN1 737 GP 806 O',
    status: 'assigned',
    assignmentDate: new Date('2024-11-13'),
    macAddress: '00:EF:54:74:01:19',
    location: 'Louga',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-16'),
        action: 'Attribué',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN2 190 DW 437 N',
    status: 'assigned',
    assignmentDate: new Date('2024-11-16'),
    macAddress: '00:DA:C6:5F:28:39',
    location: 'Sédhiou',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-25'),
        action: 'Invalidé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN2 646 OV 794 P',
    status: 'assigned',
    assignmentDate: new Date('2024-11-12'),
    macAddress: '00:DC:04:3C:C9:AB',
    location: 'Kaffrine',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-05'),
        action: 'Invalidé',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN1 516 RM 477 U',
    status: 'assigned',
    assignmentDate: new Date('2024-11-30'),
    macAddress: '00:CE:84:00:50:BC',
    location: 'Thiès',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-21'),
        action: 'Attribué',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN1 399 NI 950 Q',
    status: 'assigned',
    assignmentDate: new Date('2024-11-03'),
    macAddress: '00:FD:E3:F1:4A:01',
    location: 'Matam',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-02'),
        action: 'Attribué',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN2 919 QY 575 X',
    status: 'assigned',
    assignmentDate: new Date('2024-11-03'),
    macAddress: '00:E2:5E:3B:0C:50',
    location: 'Louga',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-10'),
        action: 'Invalidé',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN1 217 KD 335 R',
    status: 'assigned',
    assignmentDate: new Date('2024-11-21'),
    macAddress: '00:6D:20:AE:2E:64',
    location: 'Kaolack',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-28'),
        action: 'Invalidé',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN2 310 MS 684 U',
    status: 'assigned',
    assignmentDate: new Date('2024-11-31'),
    macAddress: '00:68:71:CD:36:23',
    location: 'Matam',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-30'),
        action: 'Invalidé',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN1 366 MO 331 P',
    status: 'assigned',
    assignmentDate: new Date('2024-11-05'),
    macAddress: '00:73:83:78:E4:A9',
    location: 'Diourbel',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-08'),
        action: 'Invalidé',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN1 912 TC 494 Q',
    status: 'assigned',
    assignmentDate: new Date('2024-11-03'),
    macAddress: '00:42:2A:44:3C:64',
    location: 'Kaolack',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-12'),
        action: 'Créé',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN2 287 PL 196 L',
    status: 'assigned',
    assignmentDate: new Date('2024-11-26'),
    macAddress: '00:09:42:90:0E:93',
    location: 'Saint-Louis',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-05'),
        action: 'Invalidé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN1 919 XB 331 K',
    status: 'assigned',
    assignmentDate: new Date('2024-11-20'),
    macAddress: '00:5C:16:6C:4E:08',
    location: 'Saint-Louis',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-27'),
        action: 'Attribué',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN1 131 UN 538 V',
    status: 'assigned',
    assignmentDate: new Date('2024-11-20'),
    macAddress: '00:BC:27:7F:4C:1F',
    location: 'Louga',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-20'),
        action: 'Invalidé',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN2 245 XN 974 O',
    status: 'assigned',
    assignmentDate: new Date('2024-11-07'),
    macAddress: '00:68:96:23:01:00',
    location: 'Kaolack',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-11'),
        action: 'Attribué',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN1 380 YL 151 W',
    status: 'assigned',
    assignmentDate: new Date('2024-11-14'),
    macAddress: '00:BA:56:BC:FC:31',
    location: 'Thiès',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-18'),
        action: 'Invalidé',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN1 728 DM 194 Z',
    status: 'assigned',
    assignmentDate: new Date('2024-11-12'),
    macAddress: '00:E8:18:95:41:A3',
    location: 'Louga',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-13'),
        action: 'Attribué',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN1 128 TA 657 D',
    status: 'assigned',
    assignmentDate: new Date('2024-11-16'),
    macAddress: '00:15:BC:DA:3F:49',
    location: 'Kaffrine',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-25'),
        action: 'Créé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN2 819 CA 641 H',
    status: 'assigned',
    assignmentDate: new Date('2024-11-20'),
    macAddress: '00:E6:5A:E6:C3:00',
    location: 'Saint-Louis',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-16'),
        action: 'Attribué',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN2 881 ZC 548 T',
    status: 'assigned',
    assignmentDate: new Date('2024-11-28'),
    macAddress: '00:A7:A0:1D:FF:82',
    location: 'Louga',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-19'),
        action: 'Attribué',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN1 406 GO 374 R',
    status: 'assigned',
    assignmentDate: new Date('2024-11-24'),
    macAddress: '00:11:60:7E:CB:E2',
    location: 'Kolda',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-02'),
        action: 'Créé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN1 146 QV 951 O',
    status: 'assigned',
    assignmentDate: new Date('2024-11-14'),
    macAddress: '00:8C:06:A2:69:72',
    location: 'Tambacounda',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-26'),
        action: 'Attribué',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN2 970 SG 367 K',
    status: 'assigned',
    assignmentDate: new Date('2024-11-17'),
    macAddress: '00:01:9C:76:58:07',
    location: 'Sédhiou',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-06'),
        action: 'Attribué',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN1 252 US 467 T',
    status: 'assigned',
    assignmentDate: new Date('2024-11-16'),
    macAddress: '00:91:16:16:4E:B8',
    location: 'Kaffrine',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-31'),
        action: 'Attribué',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN1 709 XM 338 L',
    status: 'assigned',
    assignmentDate: new Date('2024-11-05'),
    macAddress: '00:58:55:13:D3:3E',
    location: 'Louga',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-17'),
        action: 'Créé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN2 234 MK 654 E',
    status: 'assigned',
    assignmentDate: new Date('2024-11-09'),
    macAddress: '00:3E:17:A6:48:36',
    location: 'Louga',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-03'),
        action: 'Invalidé',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN1 200 MT 415 M',
    status: 'assigned',
    assignmentDate: new Date('2024-11-03'),
    macAddress: '00:91:AD:A8:A5:51',
    location: 'Kaffrine',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-21'),
        action: 'Créé',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN2 792 AX 796 J',
    status: 'assigned',
    assignmentDate: new Date('2024-11-30'),
    macAddress: '00:81:C9:16:51:AB',
    location: 'Fatick',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-10'),
        action: 'Invalidé',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN2 280 GT 254 F',
    status: 'assigned',
    assignmentDate: new Date('2024-11-24'),
    macAddress: '00:A1:53:2D:82:EE',
    location: 'Dakar',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-15'),
        action: 'Créé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN2 102 CX 217 U',
    status: 'assigned',
    assignmentDate: new Date('2024-11-09'),
    macAddress: '00:91:7D:86:20:BB',
    location: 'Kaolack',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-09'),
        action: 'Attribué',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN1 166 BE 616 C',
    status: 'assigned',
    assignmentDate: new Date('2024-11-27'),
    macAddress: '00:20:D8:10:0A:50',
    location: 'Tambacounda',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-16'),
        action: 'Créé',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN2 901 WY 593 E',
    status: 'assigned',
    assignmentDate: new Date('2024-11-26'),
    macAddress: '00:58:D2:3D:99:72',
    location: 'Tambacounda',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-03'),
        action: 'Attribué',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN1 311 DA 497 Q',
    status: 'assigned',
    assignmentDate: new Date('2024-11-09'),
    macAddress: '00:66:63:F8:73:0C',
    location: 'Louga',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-21'),
        action: 'Créé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN2 242 ET 432 U',
    status: 'assigned',
    assignmentDate: new Date('2024-11-24'),
    macAddress: '00:EA:08:29:F9:D0',
    location: 'Kaffrine',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-29'),
        action: 'Créé',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN2 912 DK 702 C',
    status: 'assigned',
    assignmentDate: new Date('2024-11-20'),
    macAddress: '00:1B:7A:A9:A0:4B',
    location: 'Diourbel',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-24'),
        action: 'Invalidé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN2 291 JL 239 U',
    status: 'assigned',
    assignmentDate: new Date('2024-11-21'),
    macAddress: '00:96:8A:A1:02:AE',
    location: 'Saint-Louis',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-14'),
        action: 'Attribué',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN2 204 TN 851 E',
    status: 'assigned',
    assignmentDate: new Date('2024-11-08'),
    macAddress: '00:98:E1:07:4B:24',
    location: 'Saint-Louis',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-16'),
        action: 'Invalidé',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN1 395 FK 781 E',
    status: 'assigned',
    assignmentDate: new Date('2024-11-04'),
    macAddress: '00:70:78:46:4D:A9',
    location: 'Matam',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-21'),
        action: 'Créé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN1 107 AF 922 S',
    status: 'assigned',
    assignmentDate: new Date('2024-11-31'),
    macAddress: '00:1C:0D:06:6F:2F',
    location: 'Louga',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-12'),
        action: 'Créé',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN2 430 CY 237 X',
    status: 'assigned',
    assignmentDate: new Date('2024-11-16'),
    macAddress: '00:57:88:3A:9C:CA',
    location: 'Kolda',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-30'),
        action: 'Créé',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN2 545 RX 672 L',
    status: 'assigned',
    assignmentDate: new Date('2024-11-22'),
    macAddress: '00:16:57:DA:97:BB',
    location: 'Dakar',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-19'),
        action: 'Créé',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN1 225 QH 109 A',
    status: 'assigned',
    assignmentDate: new Date('2024-11-11'),
    macAddress: '00:82:F6:59:D2:2F',
    location: 'Fatick',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-15'),
        action: 'Attribué',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN1 579 LK 165 Y',
    status: 'assigned',
    assignmentDate: new Date('2024-11-06'),
    macAddress: '00:29:F7:56:4A:CA',
    location: 'Matam',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-05'),
        action: 'Invalidé',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN2 849 CH 654 A',
    status: 'assigned',
    assignmentDate: new Date('2024-11-16'),
    macAddress: '00:27:B8:A9:E7:54',
    location: 'Louga',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-28'),
        action: 'Créé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN2 243 DY 329 J',
    status: 'assigned',
    assignmentDate: new Date('2024-11-31'),
    macAddress: '00:93:A3:56:CC:A7',
    location: 'Kaffrine',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-19'),
        action: 'Créé',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN1 388 AO 119 H',
    status: 'assigned',
    assignmentDate: new Date('2024-11-31'),
    macAddress: '00:1F:E0:E9:69:55',
    location: 'Thiès',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-10'),
        action: 'Invalidé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN2 445 PI 491 D',
    status: 'assigned',
    assignmentDate: new Date('2024-11-24'),
    macAddress: '00:F5:97:EA:FD:51',
    location: 'Kolda',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-11'),
        action: 'Attribué',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN2 139 KK 412 H',
    status: 'assigned',
    assignmentDate: new Date('2024-11-25'),
    macAddress: '00:2C:93:53:70:57',
    location: 'Kolda',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-16'),
        action: 'Créé',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN2 324 EE 347 Q',
    status: 'assigned',
    assignmentDate: new Date('2024-11-24'),
    macAddress: '00:2B:49:87:93:5C',
    location: 'Sédhiou',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-31'),
        action: 'Créé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN1 925 WX 732 D',
    status: 'assigned',
    assignmentDate: new Date('2024-11-05'),
    macAddress: '00:EC:02:28:E5:94',
    location: 'Tambacounda',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-02'),
        action: 'Attribué',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN1 376 IW 640 E',
    status: 'assigned',
    assignmentDate: new Date('2024-11-19'),
    macAddress: '00:3A:0B:29:7A:7C',
    location: 'Fatick',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-08'),
        action: 'Créé',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN2 224 DB 568 A',
    status: 'assigned',
    assignmentDate: new Date('2024-11-15'),
    macAddress: '00:00:72:74:09:14',
    location: 'Dakar',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-31'),
        action: 'Invalidé',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN1 689 DX 530 Y',
    status: 'assigned',
    assignmentDate: new Date('2024-11-06'),
    macAddress: '00:A3:81:73:BB:03',
    location: 'Diourbel',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-20'),
        action: 'Attribué',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN1 329 HK 660 D',
    status: 'assigned',
    assignmentDate: new Date('2024-11-19'),
    macAddress: '00:1D:BF:15:98:CD',
    location: 'Kaffrine',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-13'),
        action: 'Créé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN1 663 UG 832 W',
    status: 'assigned',
    assignmentDate: new Date('2024-11-28'),
    macAddress: '00:CA:FF:56:93:87',
    location: 'Saint-Louis',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-31'),
        action: 'Attribué',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN1 890 UQ 331 S',
    status: 'assigned',
    assignmentDate: new Date('2024-11-09'),
    macAddress: '00:01:90:C9:8A:75',
    location: 'Tambacounda',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-29'),
        action: 'Créé',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN1 566 QW 738 T',
    status: 'assigned',
    assignmentDate: new Date('2024-11-21'),
    macAddress: '00:23:0A:3D:9E:FD',
    location: 'Thiès',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-06'),
        action: 'Attribué',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN2 750 OD 937 F',
    status: 'assigned',
    assignmentDate: new Date('2024-11-20'),
    macAddress: '00:53:93:AC:07:03',
    location: 'Kaffrine',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-15'),
        action: 'Attribué',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN2 372 JA 189 B',
    status: 'assigned',
    assignmentDate: new Date('2024-11-19'),
    macAddress: '00:38:ED:44:95:65',
    location: 'Diourbel',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-03'),
        action: 'Créé',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN1 824 ZQ 829 W',
    status: 'assigned',
    assignmentDate: new Date('2024-11-31'),
    macAddress: '00:EB:9A:76:44:BE',
    location: 'Kaffrine',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-15'),
        action: 'Attribué',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN1 892 WI 359 W',
    status: 'assigned',
    assignmentDate: new Date('2024-11-15'),
    macAddress: '00:43:F4:CE:15:93',
    location: 'Louga',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-03'),
        action: 'Attribué',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN2 987 GZ 824 J',
    status: 'assigned',
    assignmentDate: new Date('2024-11-06'),
    macAddress: '00:D2:28:61:F1:94',
    location: 'Louga',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-07'),
        action: 'Invalidé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN2 620 LL 348 T',
    status: 'assigned',
    assignmentDate: new Date('2024-11-10'),
    macAddress: '00:DD:3D:CE:E3:77',
    location: 'Diourbel',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-26'),
        action: 'Créé',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN1 251 EE 973 R',
    status: 'assigned',
    assignmentDate: new Date('2024-11-21'),
    macAddress: '00:EF:1C:82:B0:10',
    location: 'Tambacounda',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-12'),
        action: 'Créé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN1 977 IO 683 Y',
    status: 'assigned',
    assignmentDate: new Date('2024-11-31'),
    macAddress: '00:98:2E:EC:F1:B6',
    location: 'Matam',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-16'),
        action: 'Créé',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN1 254 FR 857 I',
    status: 'assigned',
    assignmentDate: new Date('2024-11-30'),
    macAddress: '00:06:31:1A:8C:8C',
    location: 'Sédhiou',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-25'),
        action: 'Invalidé',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN1 625 WO 791 H',
    status: 'assigned',
    assignmentDate: new Date('2024-11-15'),
    macAddress: '00:96:61:68:B9:79',
    location: 'Louga',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-13'),
        action: 'Invalidé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN2 568 XV 426 W',
    status: 'assigned',
    assignmentDate: new Date('2024-11-16'),
    macAddress: '00:4B:56:44:C2:4C',
    location: 'Saint-Louis',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-13'),
        action: 'Invalidé',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN1 106 SJ 156 J',
    status: 'assigned',
    assignmentDate: new Date('2024-11-23'),
    macAddress: '00:8C:6D:99:2A:F9',
    location: 'Sédhiou',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-27'),
        action: 'Attribué',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN2 566 BX 582 V',
    status: 'assigned',
    assignmentDate: new Date('2024-11-23'),
    macAddress: '00:86:A4:F1:DB:B9',
    location: 'Louga',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-20'),
        action: 'Créé',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN2 140 XH 281 A',
    status: 'assigned',
    assignmentDate: new Date('2024-11-11'),
    macAddress: '00:F4:A7:DD:ED:64',
    location: 'Kaffrine',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-23'),
        action: 'Invalidé',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN1 242 CP 771 E',
    status: 'assigned',
    assignmentDate: new Date('2024-11-20'),
    macAddress: '00:3F:A3:84:C9:5B',
    location: 'Diourbel',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-22'),
        action: 'Invalidé',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN1 533 DW 508 S',
    status: 'assigned',
    assignmentDate: new Date('2024-11-09'),
    macAddress: '00:68:26:F4:08:98',
    location: 'Kolda',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-23'),
        action: 'Attribué',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN1 854 TX 796 V',
    status: 'assigned',
    assignmentDate: new Date('2024-11-09'),
    macAddress: '00:14:B8:C0:E4:E7',
    location: 'Sédhiou',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-11'),
        action: 'Attribué',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN1 613 MK 832 N',
    status: 'assigned',
    assignmentDate: new Date('2024-11-27'),
    macAddress: '00:47:39:46:4E:38',
    location: 'Sédhiou',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-23'),
        action: 'Créé',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN1 922 CK 779 J',
    status: 'assigned',
    assignmentDate: new Date('2024-11-30'),
    macAddress: '00:00:BD:70:1E:E1',
    location: 'Kaolack',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-29'),
        action: 'Attribué',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN2 692 NN 346 I',
    status: 'assigned',
    assignmentDate: new Date('2024-11-07'),
    macAddress: '00:BD:F6:EE:34:4E',
    location: 'Dakar',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-04'),
        action: 'Créé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN1 198 RI 519 L',
    status: 'assigned',
    assignmentDate: new Date('2024-11-06'),
    macAddress: '00:2C:D6:C1:C2:DA',
    location: 'Sédhiou',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-29'),
        action: 'Créé',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN2 705 AF 157 D',
    status: 'assigned',
    assignmentDate: new Date('2024-11-04'),
    macAddress: '00:47:AD:B8:A3:1B',
    location: 'Ziguinchor',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-24'),
        action: 'Invalidé',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN2 193 RT 499 F',
    status: 'assigned',
    assignmentDate: new Date('2024-11-25'),
    macAddress: '00:C5:A9:A4:A9:01',
    location: 'Ziguinchor',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-25'),
        action: 'Attribué',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN1 334 ML 941 L',
    status: 'assigned',
    assignmentDate: new Date('2024-11-03'),
    macAddress: '00:F4:FF:E9:F0:45',
    location: 'Ziguinchor',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-09'),
        action: 'Invalidé',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN2 557 RL 628 S',
    status: 'assigned',
    assignmentDate: new Date('2024-11-23'),
    macAddress: '00:50:30:6D:A5:C4',
    location: 'Sédhiou',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-24'),
        action: 'Attribué',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN2 175 YY 484 A',
    status: 'assigned',
    assignmentDate: new Date('2024-11-07'),
    macAddress: '00:81:6C:15:9E:EF',
    location: 'Kaffrine',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-16'),
        action: 'Créé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN1 755 YW 848 T',
    status: 'assigned',
    assignmentDate: new Date('2024-11-29'),
    macAddress: '00:AC:B0:DA:8B:D8',
    location: 'Diourbel',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-09'),
        action: 'Attribué',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN1 263 MQ 804 V',
    status: 'assigned',
    assignmentDate: new Date('2024-11-14'),
    macAddress: '00:A2:B3:93:53:1E',
    location: 'Tambacounda',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-08'),
        action: 'Créé',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN1 333 BR 121 C',
    status: 'assigned',
    assignmentDate: new Date('2024-11-27'),
    macAddress: '00:E7:6D:87:DF:56',
    location: 'Thiès',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-12'),
        action: 'Invalidé',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN2 462 OB 900 W',
    status: 'assigned',
    assignmentDate: new Date('2024-11-29'),
    macAddress: '00:7B:11:C2:E5:50',
    location: 'Louga',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-18'),
        action: 'Créé',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN1 928 CN 245 C',
    status: 'assigned',
    assignmentDate: new Date('2024-11-23'),
    macAddress: '00:92:F9:01:4A:45',
    location: 'Kaffrine',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-02'),
        action: 'Créé',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN1 197 DP 417 K',
    status: 'assigned',
    assignmentDate: new Date('2024-11-26'),
    macAddress: '00:A9:7A:CE:63:10',
    location: 'Saint-Louis',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-14'),
        action: 'Invalidé',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN2 253 KD 586 J',
    status: 'assigned',
    assignmentDate: new Date('2024-11-08'),
    macAddress: '00:D5:82:C1:4B:20',
    location: 'Thiès',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-15'),
        action: 'Invalidé',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN1 274 DB 708 R',
    status: 'assigned',
    assignmentDate: new Date('2024-11-31'),
    macAddress: '00:00:8E:31:78:AC',
    location: 'Dakar',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-23'),
        action: 'Créé',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN1 345 HY 877 F',
    status: 'assigned',
    assignmentDate: new Date('2024-11-11'),
    macAddress: '00:6E:64:39:F2:62',
    location: 'Matam',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-19'),
        action: 'Créé',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN1 337 SQ 334 F',
    status: 'assigned',
    assignmentDate: new Date('2024-11-06'),
    macAddress: '00:E3:9E:CA:A8:73',
    location: 'Kaolack',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-24'),
        action: 'Attribué',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN2 385 BN 630 B',
    status: 'assigned',
    assignmentDate: new Date('2024-11-19'),
    macAddress: '00:73:7E:CD:74:AE',
    location: 'Dakar',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-13'),
        action: 'Attribué',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN2 853 RG 980 Y',
    status: 'assigned',
    assignmentDate: new Date('2024-11-27'),
    macAddress: '00:54:EF:9A:AA:5E',
    location: 'Fatick',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-19'),
        action: 'Attribué',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN1 829 UG 530 P',
    status: 'assigned',
    assignmentDate: new Date('2024-11-15'),
    macAddress: '00:52:ED:51:71:25',
    location: 'Kaolack',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-25'),
        action: 'Invalidé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN2 711 HX 450 G',
    status: 'assigned',
    assignmentDate: new Date('2024-11-20'),
    macAddress: '00:85:21:86:AD:4E',
    location: 'Diourbel',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-17'),
        action: 'Attribué',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN1 230 JT 227 U',
    status: 'assigned',
    assignmentDate: new Date('2024-11-20'),
    macAddress: '00:51:B3:AC:A9:C0',
    location: 'Saint-Louis',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-03'),
        action: 'Créé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN1 339 ZJ 396 B',
    status: 'assigned',
    assignmentDate: new Date('2024-11-12'),
    macAddress: '00:E7:A1:40:01:BD',
    location: 'Ziguinchor',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-04'),
        action: 'Créé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN1 521 IS 250 C',
    status: 'assigned',
    assignmentDate: new Date('2024-11-09'),
    macAddress: '00:5E:9F:32:24:FE',
    location: 'Ziguinchor',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-16'),
        action: 'Attribué',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN1 309 CW 451 N',
    status: 'assigned',
    assignmentDate: new Date('2024-11-16'),
    macAddress: '00:8A:67:1A:52:25',
    location: 'Diourbel',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-02'),
        action: 'Invalidé',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN1 978 QR 316 W',
    status: 'assigned',
    assignmentDate: new Date('2024-11-25'),
    macAddress: '00:BF:A1:12:52:5F',
    location: 'Fatick',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-02'),
        action: 'Créé',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN2 101 GF 840 M',
    status: 'assigned',
    assignmentDate: new Date('2024-11-20'),
    macAddress: '00:AE:70:2C:26:3C',
    location: 'Tambacounda',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-19'),
        action: 'Créé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN2 963 MY 868 O',
    status: 'assigned',
    assignmentDate: new Date('2024-11-11'),
    macAddress: '00:D2:79:9F:21:67',
    location: 'Dakar',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-08'),
        action: 'Invalidé',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN2 123 QU 617 A',
    status: 'assigned',
    assignmentDate: new Date('2024-11-27'),
    macAddress: '00:29:4E:F7:BA:38',
    location: 'Thiès',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-06'),
        action: 'Attribué',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN2 387 JR 788 E',
    status: 'assigned',
    assignmentDate: new Date('2024-11-05'),
    macAddress: '00:98:36:79:85:9F',
    location: 'Sédhiou',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-09'),
        action: 'Attribué',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN2 993 BE 965 W',
    status: 'assigned',
    assignmentDate: new Date('2024-11-23'),
    macAddress: '00:DF:C5:AF:7C:EA',
    location: 'Kaolack',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-11'),
        action: 'Attribué',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN1 408 IV 738 G',
    status: 'assigned',
    assignmentDate: new Date('2024-11-14'),
    macAddress: '00:EA:CE:A2:ED:06',
    location: 'Kolda',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-07'),
        action: 'Attribué',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN2 841 WT 188 S',
    status: 'assigned',
    assignmentDate: new Date('2024-11-20'),
    macAddress: '00:DC:9C:8B:71:E6',
    location: 'Matam',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-25'),
        action: 'Invalidé',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN2 786 MU 717 Z',
    status: 'assigned',
    assignmentDate: new Date('2024-11-21'),
    macAddress: '00:3C:EB:6F:E6:EF',
    location: 'Kaolack',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-30'),
        action: 'Attribué',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN1 596 MA 678 E',
    status: 'assigned',
    assignmentDate: new Date('2024-11-31'),
    macAddress: '00:90:27:D2:BC:D6',
    location: 'Kaolack',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-11'),
        action: 'Créé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN2 617 DQ 462 M',
    status: 'assigned',
    assignmentDate: new Date('2024-11-22'),
    macAddress: '00:D8:E0:D5:99:C3',
    location: 'Fatick',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-06'),
        action: 'Créé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN1 597 IV 264 I',
    status: 'assigned',
    assignmentDate: new Date('2024-11-12'),
    macAddress: '00:E2:C5:B9:CE:4E',
    location: 'Louga',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-16'),
        action: 'Attribué',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN1 875 HI 881 N',
    status: 'assigned',
    assignmentDate: new Date('2024-11-17'),
    macAddress: '00:EE:50:C8:6C:AA',
    location: 'Saint-Louis',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-13'),
        action: 'Créé',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN1 858 GK 560 Z',
    status: 'assigned',
    assignmentDate: new Date('2024-11-12'),
    macAddress: '00:43:99:A5:C1:15',
    location: 'Fatick',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-08'),
        action: 'Invalidé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN1 960 ZA 662 G',
    status: 'assigned',
    assignmentDate: new Date('2024-11-22'),
    macAddress: '00:01:34:22:E1:CF',
    location: 'Diourbel',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-04'),
        action: 'Attribué',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN2 601 VP 469 J',
    status: 'assigned',
    assignmentDate: new Date('2024-11-04'),
    macAddress: '00:D4:3F:47:A2:DD',
    location: 'Kolda',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-14'),
        action: 'Créé',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN2 901 BE 839 P',
    status: 'assigned',
    assignmentDate: new Date('2024-11-09'),
    macAddress: '00:3B:39:EE:F0:8F',
    location: 'Dakar',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-30'),
        action: 'Invalidé',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN1 823 BT 201 A',
    status: 'assigned',
    assignmentDate: new Date('2024-11-17'),
    macAddress: '00:DD:D1:E8:CB:19',
    location: 'Fatick',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-05'),
        action: 'Attribué',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN2 602 MR 309 E',
    status: 'assigned',
    assignmentDate: new Date('2024-11-30'),
    macAddress: '00:5D:50:3F:EA:09',
    location: 'Kaolack',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-09'),
        action: 'Invalidé',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN1 659 MW 937 Q',
    status: 'assigned',
    assignmentDate: new Date('2024-11-06'),
    macAddress: '00:90:92:4C:C9:0E',
    location: 'Saint-Louis',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-02'),
        action: 'Attribué',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN2 914 UT 319 K',
    status: 'assigned',
    assignmentDate: new Date('2024-11-07'),
    macAddress: '00:01:05:22:E6:85',
    location: 'Kaffrine',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-26'),
        action: 'Invalidé',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN2 817 UB 579 V',
    status: 'assigned',
    assignmentDate: new Date('2024-11-18'),
    macAddress: '00:DD:00:32:F0:3E',
    location: 'Ziguinchor',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-14'),
        action: 'Invalidé',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN2 821 LF 146 I',
    status: 'assigned',
    assignmentDate: new Date('2024-11-03'),
    macAddress: '00:EC:12:40:76:95',
    location: 'Diourbel',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-26'),
        action: 'Attribué',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN2 732 JI 424 V',
    status: 'assigned',
    assignmentDate: new Date('2024-11-03'),
    macAddress: '00:35:75:14:D5:F7',
    location: 'Kaffrine',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-30'),
        action: 'Créé',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN1 124 YW 467 U',
    status: 'assigned',
    assignmentDate: new Date('2024-11-12'),
    macAddress: '00:56:6E:EE:80:E9',
    location: 'Kaolack',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-24'),
        action: 'Invalidé',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN2 856 RN 671 O',
    status: 'assigned',
    assignmentDate: new Date('2024-11-05'),
    macAddress: '00:FC:26:B6:9B:D2',
    location: 'Matam',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-19'),
        action: 'Attribué',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN2 838 GY 647 B',
    status: 'assigned',
    assignmentDate: new Date('2024-11-19'),
    macAddress: '00:02:FC:FF:0D:80',
    location: 'Saint-Louis',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-16'),
        action: 'Invalidé',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN2 618 RK 567 B',
    status: 'assigned',
    assignmentDate: new Date('2024-11-21'),
    macAddress: '00:71:86:2F:81:78',
    location: 'Kolda',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-07'),
        action: 'Attribué',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN1 203 HI 326 H',
    status: 'assigned',
    assignmentDate: new Date('2024-11-02'),
    macAddress: '00:8E:0D:58:52:96',
    location: 'Kolda',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-21'),
        action: 'Attribué',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN2 230 IS 960 S',
    status: 'assigned',
    assignmentDate: new Date('2024-11-25'),
    macAddress: '00:4D:13:F6:31:95',
    location: 'Fatick',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-15'),
        action: 'Invalidé',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN1 879 QH 428 V',
    status: 'assigned',
    assignmentDate: new Date('2024-11-04'),
    macAddress: '00:3E:CA:75:7C:8D',
    location: 'Diourbel',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-15'),
        action: 'Invalidé',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN2 646 OK 582 Z',
    status: 'assigned',
    assignmentDate: new Date('2024-11-11'),
    macAddress: '00:3E:57:7A:77:1F',
    location: 'Kaolack',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-24'),
        action: 'Invalidé',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN1 396 TC 906 K',
    status: 'assigned',
    assignmentDate: new Date('2024-11-17'),
    macAddress: '00:51:52:56:69:3C',
    location: 'Ziguinchor',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-26'),
        action: 'Invalidé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN2 486 BF 869 I',
    status: 'assigned',
    assignmentDate: new Date('2024-11-11'),
    macAddress: '00:D2:6C:C6:1E:DA',
    location: 'Saint-Louis',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-12'),
        action: 'Attribué',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN1 793 AL 275 K',
    status: 'assigned',
    assignmentDate: new Date('2024-11-25'),
    macAddress: '00:B5:08:1A:12:9C',
    location: 'Thiès',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-09'),
        action: 'Invalidé',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN2 592 ZM 734 R',
    status: 'assigned',
    assignmentDate: new Date('2024-11-30'),
    macAddress: '00:AD:03:AA:EF:9C',
    location: 'Kaolack',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-29'),
        action: 'Créé',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN2 452 IP 900 C',
    status: 'assigned',
    assignmentDate: new Date('2024-11-17'),
    macAddress: '00:2A:FB:C9:92:8A',
    location: 'Matam',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-24'),
        action: 'Invalidé',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN1 981 TE 947 H',
    status: 'assigned',
    assignmentDate: new Date('2024-11-18'),
    macAddress: '00:1B:80:96:C6:40',
    location: 'Kolda',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-15'),
        action: 'Attribué',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN1 337 BD 486 O',
    status: 'assigned',
    assignmentDate: new Date('2024-11-11'),
    macAddress: '00:68:0A:46:FD:61',
    location: 'Ziguinchor',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-13'),
        action: 'Créé',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN1 588 WM 333 S',
    status: 'assigned',
    assignmentDate: new Date('2024-11-04'),
    macAddress: '00:46:33:50:F7:23',
    location: 'Diourbel',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-02'),
        action: 'Invalidé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN2 673 AQ 985 S',
    status: 'assigned',
    assignmentDate: new Date('2024-11-25'),
    macAddress: '00:D4:6E:B4:D1:2B',
    location: 'Kaolack',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-13'),
        action: 'Créé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN1 862 DY 826 F',
    status: 'assigned',
    assignmentDate: new Date('2024-11-26'),
    macAddress: '00:59:93:15:41:DE',
    location: 'Tambacounda',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-27'),
        action: 'Créé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN1 635 TH 449 M',
    status: 'assigned',
    assignmentDate: new Date('2024-11-16'),
    macAddress: '00:0F:6F:60:B1:9A',
    location: 'Louga',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-12'),
        action: 'Invalidé',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN2 218 CR 263 Q',
    status: 'assigned',
    assignmentDate: new Date('2024-11-08'),
    macAddress: '00:82:C3:DA:13:52',
    location: 'Ziguinchor',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-22'),
        action: 'Invalidé',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN1 446 NI 330 W',
    status: 'assigned',
    assignmentDate: new Date('2024-11-25'),
    macAddress: '00:E9:B6:8D:DB:D6',
    location: 'Saint-Louis',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-31'),
        action: 'Attribué',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN2 430 MR 785 S',
    status: 'assigned',
    assignmentDate: new Date('2024-11-30'),
    macAddress: '00:59:E8:1D:2B:CE',
    location: 'Saint-Louis',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-05'),
        action: 'Attribué',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN2 336 LK 740 O',
    status: 'assigned',
    assignmentDate: new Date('2024-11-13'),
    macAddress: '00:6B:E1:0C:84:1E',
    location: 'Ziguinchor',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-24'),
        action: 'Créé',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN2 355 IH 288 Z',
    status: 'assigned',
    assignmentDate: new Date('2024-11-19'),
    macAddress: '00:E9:91:46:02:DA',
    location: 'Fatick',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-19'),
        action: 'Créé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN2 248 OL 383 J',
    status: 'assigned',
    assignmentDate: new Date('2024-11-17'),
    macAddress: '00:F7:1C:EF:0A:D6',
    location: 'Kaffrine',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-03'),
        action: 'Attribué',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN2 202 MX 343 Q',
    status: 'assigned',
    assignmentDate: new Date('2024-11-15'),
    macAddress: '00:A0:3F:04:48:B8',
    location: 'Kolda',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-19'),
        action: 'Créé',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN2 133 QE 543 Z',
    status: 'assigned',
    assignmentDate: new Date('2024-11-08'),
    macAddress: '00:F8:6C:A3:F6:31',
    location: 'Ziguinchor',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-30'),
        action: 'Créé',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN2 699 KC 126 U',
    status: 'assigned',
    assignmentDate: new Date('2024-11-23'),
    macAddress: '00:0B:C9:10:35:15',
    location: 'Tambacounda',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-20'),
        action: 'Créé',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN1 730 XA 968 B',
    status: 'assigned',
    assignmentDate: new Date('2024-11-15'),
    macAddress: '00:29:86:A9:0F:77',
    location: 'Diourbel',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-08'),
        action: 'Attribué',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN2 706 CY 538 W',
    status: 'assigned',
    assignmentDate: new Date('2024-11-10'),
    macAddress: '00:31:4C:63:D0:11',
    location: 'Kolda',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-23'),
        action: 'Attribué',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN1 537 GB 859 L',
    status: 'assigned',
    assignmentDate: new Date('2024-11-18'),
    macAddress: '00:53:CC:99:41:1A',
    location: 'Kaffrine',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-11'),
        action: 'Invalidé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN1 360 LH 491 C',
    status: 'assigned',
    assignmentDate: new Date('2024-11-12'),
    macAddress: '00:66:78:DB:96:76',
    location: 'Louga',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-10'),
        action: 'Créé',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN1 863 OY 101 F',
    status: 'assigned',
    assignmentDate: new Date('2024-11-25'),
    macAddress: '00:CE:48:91:BC:FA',
    location: 'Diourbel',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-23'),
        action: 'Créé',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN1 589 PI 612 R',
    status: 'assigned',
    assignmentDate: new Date('2024-11-17'),
    macAddress: '00:A1:03:D8:3E:29',
    location: 'Kolda',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-10'),
        action: 'Invalidé',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN1 879 FP 868 J',
    status: 'assigned',
    assignmentDate: new Date('2024-11-21'),
    macAddress: '00:E1:F7:F1:43:72',
    location: 'Sédhiou',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-10'),
        action: 'Invalidé',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN1 147 ET 958 P',
    status: 'assigned',
    assignmentDate: new Date('2024-11-09'),
    macAddress: '00:B0:D2:BC:CE:D8',
    location: 'Ziguinchor',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-26'),
        action: 'Invalidé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN1 438 ER 545 G',
    status: 'assigned',
    assignmentDate: new Date('2024-11-04'),
    macAddress: '00:A7:64:3E:E9:8F',
    location: 'Sédhiou',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-07'),
        action: 'Invalidé',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN1 879 CJ 489 U',
    status: 'assigned',
    assignmentDate: new Date('2024-11-03'),
    macAddress: '00:69:4D:52:84:36',
    location: 'Tambacounda',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-06'),
        action: 'Créé',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN1 294 JS 467 R',
    status: 'assigned',
    assignmentDate: new Date('2024-11-11'),
    macAddress: '00:86:6C:1D:66:FA',
    location: 'Thiès',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-19'),
        action: 'Invalidé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN2 269 OK 507 Y',
    status: 'assigned',
    assignmentDate: new Date('2024-11-15'),
    macAddress: '00:AF:C2:70:76:18',
    location: 'Saint-Louis',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-05'),
        action: 'Attribué',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN2 403 DP 754 D',
    status: 'assigned',
    assignmentDate: new Date('2024-11-08'),
    macAddress: '00:B5:BF:87:42:FB',
    location: 'Ziguinchor',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-31'),
        action: 'Créé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN1 655 DS 276 W',
    status: 'assigned',
    assignmentDate: new Date('2024-11-28'),
    macAddress: '00:1C:1B:5A:4D:9E',
    location: 'Fatick',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-25'),
        action: 'Invalidé',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN2 301 GH 621 F',
    status: 'assigned',
    assignmentDate: new Date('2024-11-16'),
    macAddress: '00:47:9A:EA:C8:A0',
    location: 'Matam',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-21'),
        action: 'Invalidé',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN2 255 HP 660 G',
    status: 'assigned',
    assignmentDate: new Date('2024-11-23'),
    macAddress: '00:E4:8D:B4:DC:3D',
    location: 'Sédhiou',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-31'),
        action: 'Attribué',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN2 252 EL 691 R',
    status: 'assigned',
    assignmentDate: new Date('2024-11-18'),
    macAddress: '00:47:D2:06:4F:1D',
    location: 'Ziguinchor',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-12'),
        action: 'Invalidé',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN1 287 DX 223 D',
    status: 'assigned',
    assignmentDate: new Date('2024-11-14'),
    macAddress: '00:AE:35:28:4B:43',
    location: 'Diourbel',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-07'),
        action: 'Créé',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN2 351 FA 937 L',
    status: 'assigned',
    assignmentDate: new Date('2024-11-22'),
    macAddress: '00:93:08:A8:46:54',
    location: 'Dakar',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-15'),
        action: 'Créé',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN2 462 UD 996 P',
    status: 'assigned',
    assignmentDate: new Date('2024-11-27'),
    macAddress: '00:C3:51:F8:BE:8E',
    location: 'Sédhiou',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-20'),
        action: 'Créé',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN1 669 ZM 580 V',
    status: 'assigned',
    assignmentDate: new Date('2024-11-13'),
    macAddress: '00:24:75:41:1B:50',
    location: 'Ziguinchor',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-22'),
        action: 'Invalidé',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN1 922 HL 275 R',
    status: 'assigned',
    assignmentDate: new Date('2024-11-02'),
    macAddress: '00:47:04:68:BB:C0',
    location: 'Tambacounda',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-13'),
        action: 'Créé',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN2 695 TA 117 O',
    status: 'assigned',
    assignmentDate: new Date('2024-11-20'),
    macAddress: '00:82:D4:32:C1:37',
    location: 'Kaolack',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-17'),
        action: 'Invalidé',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN2 501 UY 422 D',
    status: 'assigned',
    assignmentDate: new Date('2024-11-28'),
    macAddress: '00:3D:75:38:23:50',
    location: 'Kolda',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-22'),
        action: 'Invalidé',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN1 228 WF 493 E',
    status: 'assigned',
    assignmentDate: new Date('2024-11-26'),
    macAddress: '00:22:45:17:9E:93',
    location: 'Matam',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-09'),
        action: 'Créé',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN2 940 XQ 783 W',
    status: 'assigned',
    assignmentDate: new Date('2024-11-10'),
    macAddress: '00:BD:61:F1:59:B0',
    location: 'Matam',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-26'),
        action: 'Invalidé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN2 542 GR 665 D',
    status: 'assigned',
    assignmentDate: new Date('2024-11-30'),
    macAddress: '00:B9:7C:DF:CD:5C',
    location: 'Tambacounda',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-27'),
        action: 'Attribué',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN1 268 OS 703 J',
    status: 'assigned',
    assignmentDate: new Date('2024-11-04'),
    macAddress: '00:91:24:68:60:0C',
    location: 'Saint-Louis',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-20'),
        action: 'Attribué',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN2 343 CD 157 X',
    status: 'assigned',
    assignmentDate: new Date('2024-11-26'),
    macAddress: '00:29:A1:44:BD:6D',
    location: 'Matam',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-19'),
        action: 'Attribué',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN1 119 VU 552 Z',
    status: 'assigned',
    assignmentDate: new Date('2024-11-19'),
    macAddress: '00:2C:72:47:8F:9B',
    location: 'Kaolack',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-19'),
        action: 'Créé',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN2 807 MC 824 E',
    status: 'assigned',
    assignmentDate: new Date('2024-11-23'),
    macAddress: '00:C5:62:D4:DF:65',
    location: 'Kaolack',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-29'),
        action: 'Créé',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN1 878 RT 213 J',
    status: 'assigned',
    assignmentDate: new Date('2024-11-16'),
    macAddress: '00:D8:5F:3D:7C:B6',
    location: 'Kaffrine',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-21'),
        action: 'Créé',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN1 325 OM 796 N',
    status: 'assigned',
    assignmentDate: new Date('2024-11-29'),
    macAddress: '00:E8:1E:E8:8C:E2',
    location: 'Sédhiou',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-20'),
        action: 'Créé',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN1 692 OZ 367 Z',
    status: 'assigned',
    assignmentDate: new Date('2024-11-13'),
    macAddress: '00:86:E2:F5:7E:50',
    location: 'Kaffrine',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-13'),
        action: 'Attribué',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN2 417 RL 807 M',
    status: 'assigned',
    assignmentDate: new Date('2024-11-31'),
    macAddress: '00:5B:58:48:73:E8',
    location: 'Fatick',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-21'),
        action: 'Attribué',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN1 341 IF 935 R',
    status: 'assigned',
    assignmentDate: new Date('2024-11-28'),
    macAddress: '00:E8:9E:91:F4:00',
    location: 'Fatick',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-03'),
        action: 'Invalidé',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN1 158 SD 180 U',
    status: 'assigned',
    assignmentDate: new Date('2024-11-15'),
    macAddress: '00:CE:06:D8:3F:D8',
    location: 'Louga',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-18'),
        action: 'Attribué',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN2 809 OW 591 X',
    status: 'assigned',
    assignmentDate: new Date('2024-11-09'),
    macAddress: '00:50:D8:13:67:F2',
    location: 'Diourbel',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-16'),
        action: 'Attribué',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN2 973 ZM 624 Y',
    status: 'assigned',
    assignmentDate: new Date('2024-11-06'),
    macAddress: '00:EC:E9:E0:EF:8C',
    location: 'Kaolack',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-29'),
        action: 'Invalidé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN1 594 ND 136 R',
    status: 'assigned',
    assignmentDate: new Date('2024-11-21'),
    macAddress: '00:E4:DE:E3:F3:88',
    location: 'Sédhiou',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-10'),
        action: 'Invalidé',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN1 826 MB 138 H',
    status: 'assigned',
    assignmentDate: new Date('2024-11-16'),
    macAddress: '00:BE:01:31:AF:92',
    location: 'Tambacounda',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-26'),
        action: 'Créé',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN2 785 FD 519 C',
    status: 'assigned',
    assignmentDate: new Date('2024-11-12'),
    macAddress: '00:27:EB:BD:95:8E',
    location: 'Kolda',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-29'),
        action: 'Invalidé',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN1 289 XJ 374 A',
    status: 'assigned',
    assignmentDate: new Date('2024-11-18'),
    macAddress: '00:33:4A:0F:F5:90',
    location: 'Sédhiou',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-07'),
        action: 'Attribué',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN1 496 TB 367 I',
    status: 'assigned',
    assignmentDate: new Date('2024-11-24'),
    macAddress: '00:DE:5F:39:B0:3B',
    location: 'Tambacounda',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-05'),
        action: 'Invalidé',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN1 397 JN 422 C',
    status: 'assigned',
    assignmentDate: new Date('2024-11-17'),
    macAddress: '00:7E:89:15:88:E5',
    location: 'Ziguinchor',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-02'),
        action: 'Créé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN2 873 WS 459 U',
    status: 'assigned',
    assignmentDate: new Date('2024-11-04'),
    macAddress: '00:01:4D:FE:80:3F',
    location: 'Kaffrine',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-18'),
        action: 'Attribué',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN1 683 UJ 901 X',
    status: 'assigned',
    assignmentDate: new Date('2024-11-26'),
    macAddress: '00:E3:D1:C6:A5:6D',
    location: 'Tambacounda',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-21'),
        action: 'Créé',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN1 740 WJ 134 Z',
    status: 'assigned',
    assignmentDate: new Date('2024-11-07'),
    macAddress: '00:64:EC:6D:8E:0A',
    location: 'Fatick',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-15'),
        action: 'Créé',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN2 707 ZD 296 J',
    status: 'assigned',
    assignmentDate: new Date('2024-11-07'),
    macAddress: '00:56:CB:92:6D:E6',
    location: 'Ziguinchor',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-25'),
        action: 'Créé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN2 193 BM 266 C',
    status: 'assigned',
    assignmentDate: new Date('2024-11-18'),
    macAddress: '00:D0:7D:5A:D4:C6',
    location: 'Thiès',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-11'),
        action: 'Invalidé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN2 970 NM 564 A',
    status: 'assigned',
    assignmentDate: new Date('2024-11-29'),
    macAddress: '00:5C:D2:C5:04:E3',
    location: 'Kolda',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-19'),
        action: 'Invalidé',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN2 958 PF 944 Q',
    status: 'assigned',
    assignmentDate: new Date('2024-11-22'),
    macAddress: '00:5B:E0:4B:E2:C3',
    location: 'Thiès',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-21'),
        action: 'Créé',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN1 174 LF 571 I',
    status: 'assigned',
    assignmentDate: new Date('2024-11-02'),
    macAddress: '00:62:6D:9B:CA:E4',
    location: 'Ziguinchor',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-02'),
        action: 'Invalidé',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN2 795 OH 407 C',
    status: 'assigned',
    assignmentDate: new Date('2024-11-26'),
    macAddress: '00:28:9A:41:00:F7',
    location: 'Kaolack',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-07'),
        action: 'Attribué',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN1 308 UO 139 G',
    status: 'assigned',
    assignmentDate: new Date('2024-11-29'),
    macAddress: '00:47:32:10:3E:CA',
    location: 'Kaolack',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-26'),
        action: 'Créé',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN1 139 UJ 858 T',
    status: 'assigned',
    assignmentDate: new Date('2024-11-02'),
    macAddress: '00:68:A8:49:F5:27',
    location: 'Kaolack',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-12'),
        action: 'Attribué',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN2 182 PA 984 L',
    status: 'assigned',
    assignmentDate: new Date('2024-11-09'),
    macAddress: '00:E9:4F:09:D3:49',
    location: 'Diourbel',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-15'),
        action: 'Invalidé',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN2 143 EN 238 N',
    status: 'assigned',
    assignmentDate: new Date('2024-11-13'),
    macAddress: '00:6A:5C:AF:1A:C9',
    location: 'Ziguinchor',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-13'),
        action: 'Invalidé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN2 763 NY 988 U',
    status: 'assigned',
    assignmentDate: new Date('2024-11-04'),
    macAddress: '00:6C:57:45:2C:DB',
    location: 'Louga',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-27'),
        action: 'Attribué',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN2 875 OD 643 L',
    status: 'assigned',
    assignmentDate: new Date('2024-11-20'),
    macAddress: '00:7F:78:EF:76:77',
    location: 'Matam',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-09'),
        action: 'Créé',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN1 970 MX 591 Y',
    status: 'assigned',
    assignmentDate: new Date('2024-11-30'),
    macAddress: '00:89:4B:B4:83:11',
    location: 'Louga',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-16'),
        action: 'Attribué',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN2 583 PN 134 P',
    status: 'pending',
    assignmentDate: new Date('2024-11-23'),
    macAddress: '00:43:B4:A8:95:A1',
    location: 'Tambacounda',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-04'),
        action: 'Attribué',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN1 425 IX 734 S',
    status: 'pending',
    assignmentDate: new Date('2024-11-17'),
    macAddress: '00:56:61:42:6E:C0',
    location: 'Kaffrine',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-09'),
        action: 'Invalidé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN1 184 TO 215 O',
    status: 'pending',
    assignmentDate: new Date('2024-11-10'),
    macAddress: '00:A6:BD:ED:AC:32',
    location: 'Diourbel',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-16'),
        action: 'Créé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN1 127 IQ 748 K',
    status: 'pending',
    assignmentDate: new Date('2024-11-06'),
    macAddress: '00:1B:AC:99:BF:21',
    location: 'Kaffrine',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-26'),
        action: 'Invalidé',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN1 809 VS 918 B',
    status: 'pending',
    assignmentDate: new Date('2024-11-21'),
    macAddress: '00:07:17:85:F7:D4',
    location: 'Diourbel',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-27'),
        action: 'Créé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN1 957 KC 267 E',
    status: 'pending',
    assignmentDate: new Date('2024-11-17'),
    macAddress: '00:6C:EC:57:BF:1E',
    location: 'Thiès',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-15'),
        action: 'Créé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN1 202 OR 167 V',
    status: 'pending',
    assignmentDate: new Date('2024-11-05'),
    macAddress: '00:CA:94:36:EE:46',
    location: 'Thiès',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-19'),
        action: 'Invalidé',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN1 314 JU 523 S',
    status: 'pending',
    assignmentDate: new Date('2024-11-03'),
    macAddress: '00:58:4A:3B:E0:15',
    location: 'Kolda',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-30'),
        action: 'Créé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN1 422 KN 100 V',
    status: 'pending',
    assignmentDate: new Date('2024-11-19'),
    macAddress: '00:31:95:79:89:B1',
    location: 'Tambacounda',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-11'),
        action: 'Créé',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN2 298 VP 239 Y',
    status: 'pending',
    assignmentDate: new Date('2024-11-17'),
    macAddress: '00:99:52:CC:77:D5',
    location: 'Tambacounda',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-03'),
        action: 'Invalidé',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN1 232 PX 997 X',
    status: 'pending',
    assignmentDate: new Date('2024-11-03'),
    macAddress: '00:65:56:94:19:65',
    location: 'Louga',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-24'),
        action: 'Attribué',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN2 842 JB 756 V',
    status: 'pending',
    assignmentDate: new Date('2024-11-02'),
    macAddress: '00:0E:69:48:2A:E6',
    location: 'Louga',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-31'),
        action: 'Invalidé',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN1 895 JJ 297 X',
    status: 'pending',
    assignmentDate: new Date('2024-11-02'),
    macAddress: '00:1B:98:B2:5F:56',
    location: 'Louga',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-21'),
        action: 'Invalidé',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN1 593 AX 389 P',
    status: 'pending',
    assignmentDate: new Date('2024-11-23'),
    macAddress: '00:42:A2:A4:6B:11',
    location: 'Dakar',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-07'),
        action: 'Attribué',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN1 107 JB 510 P',
    status: 'pending',
    assignmentDate: new Date('2024-11-07'),
    macAddress: '00:C2:8E:5F:CC:34',
    location: 'Kaolack',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-05'),
        action: 'Invalidé',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN2 245 XX 803 U',
    status: 'pending',
    assignmentDate: new Date('2024-11-13'),
    macAddress: '00:44:AB:24:C2:90',
    location: 'Matam',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-22'),
        action: 'Attribué',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN1 169 NT 802 W',
    status: 'pending',
    assignmentDate: new Date('2024-11-07'),
    macAddress: '00:F5:30:7F:A8:19',
    location: 'Sédhiou',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-07'),
        action: 'Créé',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN2 183 ZC 480 Q',
    status: 'invalid',
    assignmentDate: new Date('2024-11-15'),
    macAddress: '00:F1:4A:C9:43:F9',
    location: 'Fatick',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-06'),
        action: 'Attribué',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN2 848 QL 165 C',
    status: 'invalid',
    assignmentDate: new Date('2024-11-23'),
    macAddress: '00:8E:B0:12:9A:F5',
    location: 'Kolda',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-27'),
        action: 'Invalidé',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN2 250 HA 348 A',
    status: 'assigned',
    assignmentDate: new Date('2024-11-04'),
    macAddress: '00:18:20:30:5C:47',
    location: 'Thiès',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-16'),
        action: 'Créé',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN2 903 QQ 973 F',
    status: 'assigned',
    assignmentDate: new Date('2024-11-18'),
    macAddress: '00:EC:74:86:1F:78',
    location: 'Thiès',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-19'),
        action: 'Invalidé',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN1 927 FI 304 E',
    status: 'assigned',
    assignmentDate: new Date('2024-11-25'),
    macAddress: '00:15:4A:CF:50:AF',
    location: 'Kaolack',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-22'),
        action: 'Attribué',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN2 608 CX 355 Q',
    status: 'assigned',
    assignmentDate: new Date('2024-11-20'),
    macAddress: '00:78:96:C5:3D:FD',
    location: 'Diourbel',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-27'),
        action: 'Attribué',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN1 759 PL 845 Q',
    status: 'assigned',
    assignmentDate: new Date('2024-11-16'),
    macAddress: '00:9C:C8:61:46:79',
    location: 'Kolda',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-29'),
        action: 'Créé',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN1 602 IV 302 T',
    status: 'assigned',
    assignmentDate: new Date('2024-11-09'),
    macAddress: '00:FC:1D:E4:70:D5',
    location: 'Tambacounda',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-06'),
        action: 'Invalidé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN2 370 TE 529 A',
    status: 'assigned',
    assignmentDate: new Date('2024-11-24'),
    macAddress: '00:11:BE:70:17:30',
    location: 'Kaolack',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-30'),
        action: 'Attribué',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN1 643 YG 216 B',
    status: 'assigned',
    assignmentDate: new Date('2024-11-06'),
    macAddress: '00:50:26:6F:E1:66',
    location: 'Fatick',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-17'),
        action: 'Invalidé',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN2 652 DH 250 K',
    status: 'assigned',
    assignmentDate: new Date('2024-11-23'),
    macAddress: '00:48:3F:E8:AC:68',
    location: 'Saint-Louis',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-22'),
        action: 'Créé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN1 160 SN 586 L',
    status: 'assigned',
    assignmentDate: new Date('2024-11-27'),
    macAddress: '00:F0:12:97:0A:BC',
    location: 'Kolda',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-18'),
        action: 'Attribué',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN1 648 KU 260 P',
    status: 'assigned',
    assignmentDate: new Date('2024-11-17'),
    macAddress: '00:87:8D:7A:32:8F',
    location: 'Kolda',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-22'),
        action: 'Créé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN1 495 YY 939 H',
    status: 'assigned',
    assignmentDate: new Date('2024-11-20'),
    macAddress: '00:A9:0D:85:08:64',
    location: 'Sédhiou',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-22'),
        action: 'Attribué',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN1 682 ZJ 200 V',
    status: 'assigned',
    assignmentDate: new Date('2024-11-08'),
    macAddress: '00:07:CB:9C:42:C9',
    location: 'Diourbel',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-25'),
        action: 'Créé',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN2 421 YR 561 L',
    status: 'assigned',
    assignmentDate: new Date('2024-11-03'),
    macAddress: '00:E7:05:FE:C0:40',
    location: 'Kaolack',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-04'),
        action: 'Créé',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN1 382 GA 902 J',
    status: 'assigned',
    assignmentDate: new Date('2024-11-11'),
    macAddress: '00:51:87:2D:E5:6B',
    location: 'Sédhiou',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-30'),
        action: 'Invalidé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN2 900 DS 236 K',
    status: 'assigned',
    assignmentDate: new Date('2024-11-02'),
    macAddress: '00:48:F9:B0:F9:00',
    location: 'Thiès',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-29'),
        action: 'Invalidé',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN1 665 XY 778 U',
    status: 'assigned',
    assignmentDate: new Date('2024-11-05'),
    macAddress: '00:34:5D:96:79:09',
    location: 'Diourbel',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-15'),
        action: 'Attribué',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN1 728 NQ 502 T',
    status: 'assigned',
    assignmentDate: new Date('2024-11-10'),
    macAddress: '00:3D:E7:16:2A:82',
    location: 'Matam',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-02'),
        action: 'Attribué',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN1 203 HY 897 B',
    status: 'assigned',
    assignmentDate: new Date('2024-11-08'),
    macAddress: '00:F6:7D:BA:6F:B9',
    location: 'Louga',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-02'),
        action: 'Attribué',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN1 344 XW 340 J',
    status: 'assigned',
    assignmentDate: new Date('2024-11-28'),
    macAddress: '00:B7:E9:BB:47:EA',
    location: 'Matam',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-03'),
        action: 'Créé',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN2 782 JP 406 J',
    status: 'assigned',
    assignmentDate: new Date('2024-11-22'),
    macAddress: '00:34:EB:60:97:A9',
    location: 'Kolda',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-08'),
        action: 'Invalidé',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN2 423 JP 964 G',
    status: 'assigned',
    assignmentDate: new Date('2024-11-25'),
    macAddress: '00:C9:7F:B9:C0:AB',
    location: 'Diourbel',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-06'),
        action: 'Invalidé',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN1 461 HB 233 Y',
    status: 'assigned',
    assignmentDate: new Date('2024-11-28'),
    macAddress: '00:29:79:6C:F3:BE',
    location: 'Kaffrine',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-10'),
        action: 'Créé',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN2 587 VL 406 F',
    status: 'assigned',
    assignmentDate: new Date('2024-11-22'),
    macAddress: '00:25:29:B9:EA:2B',
    location: 'Kaffrine',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-08'),
        action: 'Attribué',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN1 308 CR 736 W',
    status: 'assigned',
    assignmentDate: new Date('2024-11-09'),
    macAddress: '00:98:83:46:7E:F2',
    location: 'Kaffrine',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-08'),
        action: 'Invalidé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN1 687 KA 586 E',
    status: 'assigned',
    assignmentDate: new Date('2024-11-27'),
    macAddress: '00:CE:37:32:D0:77',
    location: 'Diourbel',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-03'),
        action: 'Créé',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN2 480 MF 307 K',
    status: 'assigned',
    assignmentDate: new Date('2024-11-22'),
    macAddress: '00:CA:B3:F1:E5:69',
    location: 'Saint-Louis',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-14'),
        action: 'Attribué',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN2 919 GQ 285 H',
    status: 'assigned',
    assignmentDate: new Date('2024-11-03'),
    macAddress: '00:89:2A:C1:C6:60',
    location: 'Fatick',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-17'),
        action: 'Attribué',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN2 826 WM 822 F',
    status: 'assigned',
    assignmentDate: new Date('2024-11-13'),
    macAddress: '00:20:02:AC:71:9A',
    location: 'Thiès',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-20'),
        action: 'Créé',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN1 753 NT 702 O',
    status: 'assigned',
    assignmentDate: new Date('2024-11-17'),
    macAddress: '00:F0:6F:4F:55:AA',
    location: 'Kaffrine',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-23'),
        action: 'Invalidé',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN1 686 DE 294 G',
    status: 'assigned',
    assignmentDate: new Date('2024-11-27'),
    macAddress: '00:72:3E:13:C2:7B',
    location: 'Dakar',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-07'),
        action: 'Créé',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN2 205 GE 582 X',
    status: 'assigned',
    assignmentDate: new Date('2024-11-05'),
    macAddress: '00:83:62:6F:2A:B3',
    location: 'Diourbel',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-26'),
        action: 'Attribué',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN2 800 IV 151 Q',
    status: 'assigned',
    assignmentDate: new Date('2024-11-21'),
    macAddress: '00:35:FD:83:E9:12',
    location: 'Dakar',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-19'),
        action: 'Invalidé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN1 971 HX 925 F',
    status: 'assigned',
    assignmentDate: new Date('2024-11-07'),
    macAddress: '00:20:4F:E0:AB:66',
    location: 'Ziguinchor',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-06'),
        action: 'Invalidé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN1 726 IM 763 E',
    status: 'assigned',
    assignmentDate: new Date('2024-11-10'),
    macAddress: '00:06:53:B8:33:7F',
    location: 'Dakar',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-31'),
        action: 'Invalidé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN1 135 JL 628 Q',
    status: 'assigned',
    assignmentDate: new Date('2024-11-10'),
    macAddress: '00:CD:B5:29:94:88',
    location: 'Kolda',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-06'),
        action: 'Créé',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN1 337 ML 602 Q',
    status: 'assigned',
    assignmentDate: new Date('2024-11-14'),
    macAddress: '00:C2:90:C3:0E:91',
    location: 'Kolda',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-21'),
        action: 'Attribué',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN1 584 SM 793 L',
    status: 'assigned',
    assignmentDate: new Date('2024-11-02'),
    macAddress: '00:17:E4:02:6C:29',
    location: 'Kaffrine',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-07'),
        action: 'Créé',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN2 606 OY 487 S',
    status: 'assigned',
    assignmentDate: new Date('2024-11-19'),
    macAddress: '00:B6:E9:CB:D8:7A',
    location: 'Kaolack',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-31'),
        action: 'Créé',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN2 455 UQ 263 S',
    status: 'assigned',
    assignmentDate: new Date('2024-11-12'),
    macAddress: '00:63:EF:BF:F7:7B',
    location: 'Thiès',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-10'),
        action: 'Créé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN2 306 PW 530 E',
    status: 'assigned',
    assignmentDate: new Date('2024-11-12'),
    macAddress: '00:DF:C7:E7:49:1D',
    location: 'Kolda',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-11'),
        action: 'Créé',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN1 981 GG 802 N',
    status: 'assigned',
    assignmentDate: new Date('2024-11-07'),
    macAddress: '00:B3:C7:22:35:01',
    location: 'Dakar',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-28'),
        action: 'Invalidé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN1 911 MJ 727 S',
    status: 'assigned',
    assignmentDate: new Date('2024-11-02'),
    macAddress: '00:27:BF:37:BE:33',
    location: 'Sédhiou',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-24'),
        action: 'Créé',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN1 198 ZO 435 R',
    status: 'assigned',
    assignmentDate: new Date('2024-11-17'),
    macAddress: '00:96:8F:47:A5:49',
    location: 'Thiès',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-10'),
        action: 'Invalidé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN1 103 XF 821 M',
    status: 'assigned',
    assignmentDate: new Date('2024-11-25'),
    macAddress: '00:98:55:87:DF:86',
    location: 'Thiès',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-28'),
        action: 'Invalidé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN2 639 EN 415 K',
    status: 'assigned',
    assignmentDate: new Date('2024-11-08'),
    macAddress: '00:28:C1:D0:B7:FE',
    location: 'Matam',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-20'),
        action: 'Attribué',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN1 328 ER 344 F',
    status: 'assigned',
    assignmentDate: new Date('2024-11-12'),
    macAddress: '00:4A:54:D2:89:29',
    location: 'Matam',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-15'),
        action: 'Attribué',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN2 941 CB 405 B',
    status: 'assigned',
    assignmentDate: new Date('2024-11-27'),
    macAddress: '00:C7:47:9F:D6:48',
    location: 'Matam',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-08'),
        action: 'Invalidé',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN1 700 DV 607 T',
    status: 'assigned',
    assignmentDate: new Date('2024-11-10'),
    macAddress: '00:5B:F9:92:C5:B3',
    location: 'Sédhiou',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-30'),
        action: 'Invalidé',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN2 752 IK 323 U',
    status: 'assigned',
    assignmentDate: new Date('2024-11-05'),
    macAddress: '00:09:6D:9D:B4:8A',
    location: 'Tambacounda',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-07'),
        action: 'Attribué',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN2 757 YG 323 A',
    status: 'assigned',
    assignmentDate: new Date('2024-11-29'),
    macAddress: '00:03:58:60:56:B2',
    location: 'Saint-Louis',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-13'),
        action: 'Créé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN2 191 LG 735 D',
    status: 'assigned',
    assignmentDate: new Date('2024-11-23'),
    macAddress: '00:EB:D0:98:07:2E',
    location: 'Diourbel',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-13'),
        action: 'Invalidé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN1 317 TO 474 V',
    status: 'assigned',
    assignmentDate: new Date('2024-11-02'),
    macAddress: '00:C1:17:77:86:29',
    location: 'Tambacounda',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-28'),
        action: 'Attribué',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN2 205 IZ 779 A',
    status: 'assigned',
    assignmentDate: new Date('2024-11-30'),
    macAddress: '00:E0:62:EB:A1:57',
    location: 'Kaolack',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-14'),
        action: 'Invalidé',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN2 698 ZR 721 T',
    status: 'assigned',
    assignmentDate: new Date('2024-11-19'),
    macAddress: '00:A1:31:90:F5:7A',
    location: 'Sédhiou',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-10'),
        action: 'Attribué',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN2 568 VU 186 T',
    status: 'assigned',
    assignmentDate: new Date('2024-11-13'),
    macAddress: '00:46:83:10:7E:CE',
    location: 'Kaolack',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-11'),
        action: 'Invalidé',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN2 513 LS 956 C',
    status: 'assigned',
    assignmentDate: new Date('2024-11-02'),
    macAddress: '00:D5:63:49:EE:8B',
    location: 'Kolda',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-13'),
        action: 'Créé',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN1 515 ZJ 601 Q',
    status: 'assigned',
    assignmentDate: new Date('2024-11-12'),
    macAddress: '00:F0:3E:8B:DD:44',
    location: 'Kaolack',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-30'),
        action: 'Créé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN2 588 IB 954 O',
    status: 'assigned',
    assignmentDate: new Date('2024-11-15'),
    macAddress: '00:F9:39:DF:3E:5F',
    location: 'Saint-Louis',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-21'),
        action: 'Invalidé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN2 825 ON 485 A',
    status: 'assigned',
    assignmentDate: new Date('2024-11-20'),
    macAddress: '00:0F:64:22:56:2B',
    location: 'Fatick',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-04'),
        action: 'Créé',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN2 979 UU 648 O',
    status: 'assigned',
    assignmentDate: new Date('2024-11-26'),
    macAddress: '00:3A:E9:A5:57:FA',
    location: 'Ziguinchor',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-03'),
        action: 'Attribué',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN2 438 KF 443 B',
    status: 'assigned',
    assignmentDate: new Date('2024-11-19'),
    macAddress: '00:FB:2B:B5:B0:0C',
    location: 'Dakar',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-07'),
        action: 'Créé',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN1 809 FB 555 V',
    status: 'assigned',
    assignmentDate: new Date('2024-11-02'),
    macAddress: '00:80:7E:E4:55:2A',
    location: 'Kolda',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-05'),
        action: 'Créé',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN1 423 BQ 385 P',
    status: 'assigned',
    assignmentDate: new Date('2024-11-12'),
    macAddress: '00:DB:91:9A:24:5C',
    location: 'Sédhiou',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-21'),
        action: 'Créé',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN2 587 OL 485 D',
    status: 'assigned',
    assignmentDate: new Date('2024-11-13'),
    macAddress: '00:67:AD:A6:AA:AE',
    location: 'Tambacounda',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-18'),
        action: 'Attribué',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN1 195 PO 555 E',
    status: 'assigned',
    assignmentDate: new Date('2024-11-04'),
    macAddress: '00:8B:4B:08:CF:6B',
    location: 'Thiès',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-11'),
        action: 'Créé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN1 840 TG 554 H',
    status: 'assigned',
    assignmentDate: new Date('2024-11-23'),
    macAddress: '00:FB:A2:69:AD:B0',
    location: 'Dakar',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-13'),
        action: 'Invalidé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN1 387 LV 513 H',
    status: 'assigned',
    assignmentDate: new Date('2024-11-25'),
    macAddress: '00:71:3E:6E:68:3E',
    location: 'Kaolack',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-21'),
        action: 'Attribué',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN2 255 XQ 683 C',
    status: 'assigned',
    assignmentDate: new Date('2024-11-23'),
    macAddress: '00:ED:A1:59:58:D2',
    location: 'Tambacounda',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-24'),
        action: 'Créé',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN2 120 JS 721 A',
    status: 'assigned',
    assignmentDate: new Date('2024-11-22'),
    macAddress: '00:9C:70:22:D7:49',
    location: 'Sédhiou',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-07'),
        action: 'Créé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN1 210 IU 278 W',
    status: 'assigned',
    assignmentDate: new Date('2024-11-09'),
    macAddress: '00:A6:FE:D0:94:90',
    location: 'Kolda',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-30'),
        action: 'Invalidé',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN1 309 HT 686 N',
    status: 'assigned',
    assignmentDate: new Date('2024-11-03'),
    macAddress: '00:63:55:7F:F1:95',
    location: 'Diourbel',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-21'),
        action: 'Invalidé',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN2 293 TI 158 Y',
    status: 'assigned',
    assignmentDate: new Date('2024-11-12'),
    macAddress: '00:04:B3:A5:31:37',
    location: 'Kaffrine',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-04'),
        action: 'Invalidé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN2 880 JW 559 I',
    status: 'assigned',
    assignmentDate: new Date('2024-11-23'),
    macAddress: '00:24:5E:81:29:BC',
    location: 'Fatick',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-26'),
        action: 'Créé',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN1 372 HO 387 T',
    status: 'assigned',
    assignmentDate: new Date('2024-11-03'),
    macAddress: '00:3D:B0:E6:E5:F2',
    location: 'Tambacounda',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-28'),
        action: 'Créé',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN2 398 YJ 988 J',
    status: 'assigned',
    assignmentDate: new Date('2024-11-02'),
    macAddress: '00:CD:8A:D3:B2:79',
    location: 'Fatick',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-17'),
        action: 'Invalidé',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN2 325 NH 442 X',
    status: 'assigned',
    assignmentDate: new Date('2024-11-17'),
    macAddress: '00:1E:79:30:1C:89',
    location: 'Fatick',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-28'),
        action: 'Invalidé',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN1 575 UP 137 L',
    status: 'assigned',
    assignmentDate: new Date('2024-11-13'),
    macAddress: '00:26:95:A6:75:09',
    location: 'Dakar',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-15'),
        action: 'Invalidé',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN2 664 RD 725 T',
    status: 'assigned',
    assignmentDate: new Date('2024-11-06'),
    macAddress: '00:73:38:CE:75:D4',
    location: 'Kolda',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-07'),
        action: 'Attribué',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN2 533 BQ 407 L',
    status: 'assigned',
    assignmentDate: new Date('2024-11-07'),
    macAddress: '00:8B:58:C9:66:21',
    location: 'Kolda',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-02'),
        action: 'Attribué',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN2 488 BA 488 R',
    status: 'assigned',
    assignmentDate: new Date('2024-11-12'),
    macAddress: '00:B9:43:89:BC:3C',
    location: 'Tambacounda',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-13'),
        action: 'Invalidé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN1 233 FW 182 R',
    status: 'assigned',
    assignmentDate: new Date('2024-11-07'),
    macAddress: '00:4D:B1:79:E7:24',
    location: 'Kaffrine',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-30'),
        action: 'Attribué',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN1 978 SW 289 K',
    status: 'assigned',
    assignmentDate: new Date('2024-11-08'),
    macAddress: '00:D2:27:AD:C5:F7',
    location: 'Saint-Louis',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-06'),
        action: 'Invalidé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN2 202 BD 669 T',
    status: 'assigned',
    assignmentDate: new Date('2024-11-02'),
    macAddress: '00:BE:F5:89:62:C6',
    location: 'Dakar',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-26'),
        action: 'Invalidé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN2 773 PQ 353 D',
    status: 'assigned',
    assignmentDate: new Date('2024-11-05'),
    macAddress: '00:18:81:90:32:7D',
    location: 'Ziguinchor',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-14'),
        action: 'Attribué',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN1 232 CO 230 Q',
    status: 'assigned',
    assignmentDate: new Date('2024-11-12'),
    macAddress: '00:DF:C0:73:64:A3',
    location: 'Sédhiou',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-10'),
        action: 'Invalidé',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN2 547 ER 800 W',
    status: 'assigned',
    assignmentDate: new Date('2024-11-31'),
    macAddress: '00:63:AC:FD:09:38',
    location: 'Fatick',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-08'),
        action: 'Invalidé',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN1 153 OL 248 R',
    status: 'assigned',
    assignmentDate: new Date('2024-11-24'),
    macAddress: '00:8D:50:DF:AB:F0',
    location: 'Thiès',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-24'),
        action: 'Attribué',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN2 140 NP 778 O',
    status: 'assigned',
    assignmentDate: new Date('2024-11-18'),
    macAddress: '00:5E:16:89:37:33',
    location: 'Ziguinchor',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-06'),
        action: 'Créé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN1 706 YM 251 K',
    status: 'assigned',
    assignmentDate: new Date('2024-11-12'),
    macAddress: '00:CB:BE:54:DC:5D',
    location: 'Dakar',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-20'),
        action: 'Attribué',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN2 478 IO 754 G',
    status: 'assigned',
    assignmentDate: new Date('2024-11-21'),
    macAddress: '00:E9:EA:40:0D:41',
    location: 'Kaolack',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-24'),
        action: 'Créé',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN2 572 XW 389 E',
    status: 'assigned',
    assignmentDate: new Date('2024-11-23'),
    macAddress: '00:C4:BC:F5:F2:97',
    location: 'Ziguinchor',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-30'),
        action: 'Créé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN1 670 HP 536 K',
    status: 'assigned',
    assignmentDate: new Date('2024-11-19'),
    macAddress: '00:BB:AC:C5:A8:F9',
    location: 'Saint-Louis',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-26'),
        action: 'Attribué',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN1 864 CI 667 K',
    status: 'assigned',
    assignmentDate: new Date('2024-11-04'),
    macAddress: '00:D0:3D:1F:72:DF',
    location: 'Kolda',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-08'),
        action: 'Invalidé',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN1 702 PK 415 X',
    status: 'assigned',
    assignmentDate: new Date('2024-11-15'),
    macAddress: '00:03:0B:5B:2A:03',
    location: 'Thiès',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-21'),
        action: 'Invalidé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN1 401 RG 283 P',
    status: 'assigned',
    assignmentDate: new Date('2024-11-22'),
    macAddress: '00:C9:52:9E:A1:84',
    location: 'Dakar',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-11'),
        action: 'Attribué',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN2 611 WL 773 H',
    status: 'assigned',
    assignmentDate: new Date('2024-11-05'),
    macAddress: '00:93:E5:F0:A9:EF',
    location: 'Tambacounda',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-03'),
        action: 'Invalidé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN2 765 KS 682 L',
    status: 'assigned',
    assignmentDate: new Date('2024-11-02'),
    macAddress: '00:88:25:F9:EF:F5',
    location: 'Ziguinchor',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-31'),
        action: 'Invalidé',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN1 542 TG 417 A',
    status: 'assigned',
    assignmentDate: new Date('2024-11-15'),
    macAddress: '00:EC:8F:DF:42:41',
    location: 'Sédhiou',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-25'),
        action: 'Attribué',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN1 228 BM 452 X',
    status: 'assigned',
    assignmentDate: new Date('2024-11-20'),
    macAddress: '00:8C:4D:3B:7A:67',
    location: 'Sédhiou',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-24'),
        action: 'Créé',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN1 609 EV 213 Q',
    status: 'assigned',
    assignmentDate: new Date('2024-11-12'),
    macAddress: '00:5C:30:33:C7:B6',
    location: 'Matam',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-18'),
        action: 'Invalidé',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN1 631 FA 135 I',
    status: 'assigned',
    assignmentDate: new Date('2024-11-12'),
    macAddress: '00:BB:6D:DF:8D:9A',
    location: 'Sédhiou',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-16'),
        action: 'Attribué',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN1 629 VC 367 C',
    status: 'assigned',
    assignmentDate: new Date('2024-11-04'),
    macAddress: '00:63:38:A7:23:42',
    location: 'Fatick',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-08'),
        action: 'Attribué',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN1 382 JF 586 U',
    status: 'assigned',
    assignmentDate: new Date('2024-11-17'),
    macAddress: '00:CC:67:7A:86:C9',
    location: 'Matam',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-26'),
        action: 'Créé',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN2 406 TV 315 W',
    status: 'assigned',
    assignmentDate: new Date('2024-11-21'),
    macAddress: '00:24:10:9F:D2:7A',
    location: 'Louga',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-28'),
        action: 'Créé',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN1 988 CT 280 A',
    status: 'assigned',
    assignmentDate: new Date('2024-11-31'),
    macAddress: '00:50:D7:37:25:5D',
    location: 'Thiès',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-31'),
        action: 'Invalidé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN1 825 JG 698 Z',
    status: 'assigned',
    assignmentDate: new Date('2024-11-22'),
    macAddress: '00:59:09:EC:8E:E8',
    location: 'Saint-Louis',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-21'),
        action: 'Attribué',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN2 937 JR 861 R',
    status: 'assigned',
    assignmentDate: new Date('2024-11-24'),
    macAddress: '00:8E:33:90:74:A8',
    location: 'Ziguinchor',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-12'),
        action: 'Invalidé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN1 978 YK 977 D',
    status: 'assigned',
    assignmentDate: new Date('2024-11-21'),
    macAddress: '00:06:28:25:6A:4B',
    location: 'Fatick',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-25'),
        action: 'Créé',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN2 372 RQ 357 U',
    status: 'assigned',
    assignmentDate: new Date('2024-11-14'),
    macAddress: '00:6D:4E:BB:86:E8',
    location: 'Thiès',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-08'),
        action: 'Invalidé',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN2 456 KH 874 O',
    status: 'assigned',
    assignmentDate: new Date('2024-11-20'),
    macAddress: '00:9C:79:22:37:AC',
    location: 'Tambacounda',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-08'),
        action: 'Créé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN1 218 BY 480 R',
    status: 'assigned',
    assignmentDate: new Date('2024-11-24'),
    macAddress: '00:C4:C1:FC:71:B7',
    location: 'Ziguinchor',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-10'),
        action: 'Invalidé',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN2 802 IP 901 P',
    status: 'assigned',
    assignmentDate: new Date('2024-11-25'),
    macAddress: '00:12:EF:E9:CD:2C',
    location: 'Louga',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-12'),
        action: 'Créé',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN2 319 RN 492 K',
    status: 'assigned',
    assignmentDate: new Date('2024-11-08'),
    macAddress: '00:63:1D:5B:1B:BA',
    location: 'Diourbel',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-13'),
        action: 'Invalidé',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN2 296 JD 884 K',
    status: 'assigned',
    assignmentDate: new Date('2024-11-23'),
    macAddress: '00:B6:25:F1:DF:2B',
    location: 'Fatick',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-24'),
        action: 'Créé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN1 260 HH 584 U',
    status: 'assigned',
    assignmentDate: new Date('2024-11-17'),
    macAddress: '00:5D:5C:25:C8:58',
    location: 'Louga',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-08'),
        action: 'Invalidé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN1 325 QC 187 G',
    status: 'assigned',
    assignmentDate: new Date('2024-11-25'),
    macAddress: '00:C1:1D:6A:D3:95',
    location: 'Diourbel',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-18'),
        action: 'Invalidé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN2 154 PY 754 S',
    status: 'assigned',
    assignmentDate: new Date('2024-11-28'),
    macAddress: '00:BB:F1:AA:56:A2',
    location: 'Ziguinchor',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-05'),
        action: 'Attribué',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN1 466 LJ 602 Y',
    status: 'assigned',
    assignmentDate: new Date('2024-11-13'),
    macAddress: '00:DF:95:A1:70:75',
    location: 'Kaolack',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-14'),
        action: 'Attribué',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN1 635 TD 846 W',
    status: 'assigned',
    assignmentDate: new Date('2024-11-15'),
    macAddress: '00:65:4C:59:07:0E',
    location: 'Fatick',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-11'),
        action: 'Attribué',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN1 379 CB 251 R',
    status: 'assigned',
    assignmentDate: new Date('2024-11-26'),
    macAddress: '00:39:80:0E:D1:4B',
    location: 'Dakar',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-08'),
        action: 'Créé',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN1 134 TO 974 V',
    status: 'assigned',
    assignmentDate: new Date('2024-11-20'),
    macAddress: '00:AB:9C:7B:21:B2',
    location: 'Diourbel',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-20'),
        action: 'Invalidé',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN2 324 PY 753 Q',
    status: 'assigned',
    assignmentDate: new Date('2024-11-12'),
    macAddress: '00:20:6A:91:FC:EB',
    location: 'Louga',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-13'),
        action: 'Invalidé',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN2 207 XT 480 A',
    status: 'assigned',
    assignmentDate: new Date('2024-11-20'),
    macAddress: '00:80:67:5D:9A:9D',
    location: 'Matam',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-08'),
        action: 'Créé',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN2 287 BH 425 D',
    status: 'assigned',
    assignmentDate: new Date('2024-11-02'),
    macAddress: '00:12:0C:21:1E:5B',
    location: 'Thiès',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-25'),
        action: 'Créé',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN2 913 SX 148 B',
    status: 'assigned',
    assignmentDate: new Date('2024-11-17'),
    macAddress: '00:EC:37:68:80:23',
    location: 'Matam',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-14'),
        action: 'Invalidé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN1 975 KX 659 N',
    status: 'assigned',
    assignmentDate: new Date('2024-11-17'),
    macAddress: '00:65:03:9F:E5:93',
    location: 'Sédhiou',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-03'),
        action: 'Invalidé',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN1 671 ZI 870 I',
    status: 'assigned',
    assignmentDate: new Date('2024-11-30'),
    macAddress: '00:48:B5:F3:85:71',
    location: 'Saint-Louis',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-16'),
        action: 'Invalidé',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN1 409 OY 292 G',
    status: 'assigned',
    assignmentDate: new Date('2024-11-07'),
    macAddress: '00:7A:B2:E2:C7:71',
    location: 'Matam',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-08'),
        action: 'Attribué',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN2 274 EQ 852 D',
    status: 'assigned',
    assignmentDate: new Date('2024-11-26'),
    macAddress: '00:83:6E:34:9B:8C',
    location: 'Ziguinchor',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-23'),
        action: 'Invalidé',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN1 465 GA 683 S',
    status: 'assigned',
    assignmentDate: new Date('2024-11-26'),
    macAddress: '00:8D:24:A1:59:19',
    location: 'Fatick',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-30'),
        action: 'Invalidé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN2 886 LO 635 B',
    status: 'assigned',
    assignmentDate: new Date('2024-11-24'),
    macAddress: '00:A1:3A:91:3D:08',
    location: 'Tambacounda',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-09'),
        action: 'Attribué',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN1 880 TH 315 F',
    status: 'assigned',
    assignmentDate: new Date('2024-11-13'),
    macAddress: '00:75:A7:A8:C6:12',
    location: 'Dakar',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-13'),
        action: 'Créé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN2 750 HY 829 D',
    status: 'assigned',
    assignmentDate: new Date('2024-11-26'),
    macAddress: '00:10:21:06:90:51',
    location: 'Ziguinchor',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-10'),
        action: 'Invalidé',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN1 671 OD 532 X',
    status: 'assigned',
    assignmentDate: new Date('2024-11-18'),
    macAddress: '00:71:F2:6E:3A:64',
    location: 'Tambacounda',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-25'),
        action: 'Créé',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN1 861 GI 570 S',
    status: 'assigned',
    assignmentDate: new Date('2024-11-12'),
    macAddress: '00:CA:A4:F8:2D:AE',
    location: 'Fatick',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-07'),
        action: 'Créé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN2 551 QS 519 I',
    status: 'assigned',
    assignmentDate: new Date('2024-11-22'),
    macAddress: '00:02:08:EF:FC:41',
    location: 'Louga',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-26'),
        action: 'Créé',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN1 830 RC 360 X',
    status: 'assigned',
    assignmentDate: new Date('2024-11-26'),
    macAddress: '00:1D:E7:3F:8B:25',
    location: 'Fatick',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-16'),
        action: 'Invalidé',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN2 419 SH 133 I',
    status: 'assigned',
    assignmentDate: new Date('2024-11-29'),
    macAddress: '00:DC:9E:8E:F2:49',
    location: 'Matam',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-27'),
        action: 'Créé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN2 522 HG 390 P',
    status: 'assigned',
    assignmentDate: new Date('2024-11-22'),
    macAddress: '00:CB:4D:05:2C:DF',
    location: 'Saint-Louis',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-12'),
        action: 'Invalidé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN1 864 PH 476 K',
    status: 'assigned',
    assignmentDate: new Date('2024-11-09'),
    macAddress: '00:99:7B:78:6B:BC',
    location: 'Kolda',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-07'),
        action: 'Invalidé',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN2 781 SO 407 W',
    status: 'assigned',
    assignmentDate: new Date('2024-11-31'),
    macAddress: '00:99:20:C7:A0:72',
    location: 'Fatick',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-07'),
        action: 'Invalidé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN1 425 PE 142 K',
    status: 'assigned',
    assignmentDate: new Date('2024-11-24'),
    macAddress: '00:B7:65:8D:72:35',
    location: 'Dakar',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-15'),
        action: 'Attribué',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN1 329 KR 225 R',
    status: 'assigned',
    assignmentDate: new Date('2024-11-28'),
    macAddress: '00:D0:77:8E:C2:E3',
    location: 'Diourbel',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-27'),
        action: 'Invalidé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN1 679 YH 664 B',
    status: 'assigned',
    assignmentDate: new Date('2024-11-27'),
    macAddress: '00:A5:48:D4:CD:7A',
    location: 'Saint-Louis',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-04'),
        action: 'Attribué',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN2 667 HD 939 N',
    status: 'assigned',
    assignmentDate: new Date('2024-11-22'),
    macAddress: '00:52:06:8E:6B:01',
    location: 'Louga',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-21'),
        action: 'Attribué',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN1 377 QA 148 N',
    status: 'assigned',
    assignmentDate: new Date('2024-11-04'),
    macAddress: '00:22:7A:02:EC:06',
    location: 'Diourbel',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-25'),
        action: 'Attribué',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN1 203 LG 971 C',
    status: 'assigned',
    assignmentDate: new Date('2024-11-18'),
    macAddress: '00:E1:B3:31:48:21',
    location: 'Diourbel',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-21'),
        action: 'Attribué',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN2 524 OG 448 X',
    status: 'assigned',
    assignmentDate: new Date('2024-11-08'),
    macAddress: '00:60:AE:19:44:B1',
    location: 'Sédhiou',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-04'),
        action: 'Créé',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN2 283 PV 604 G',
    status: 'assigned',
    assignmentDate: new Date('2024-11-12'),
    macAddress: '00:6E:DB:68:A7:13',
    location: 'Dakar',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-02'),
        action: 'Invalidé',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN2 691 MK 135 L',
    status: 'assigned',
    assignmentDate: new Date('2024-11-11'),
    macAddress: '00:93:B5:E0:37:5F',
    location: 'Dakar',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-15'),
        action: 'Invalidé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN2 844 YX 383 G',
    status: 'assigned',
    assignmentDate: new Date('2024-11-09'),
    macAddress: '00:C1:F0:C4:8D:98',
    location: 'Matam',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-17'),
        action: 'Créé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN1 799 ZX 525 U',
    status: 'assigned',
    assignmentDate: new Date('2024-11-15'),
    macAddress: '00:F6:EB:CA:A4:DF',
    location: 'Ziguinchor',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-10'),
        action: 'Attribué',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN2 309 MV 415 B',
    status: 'assigned',
    assignmentDate: new Date('2024-11-22'),
    macAddress: '00:DE:33:A3:C5:A7',
    location: 'Kolda',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-06'),
        action: 'Attribué',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN1 408 UI 347 S',
    status: 'assigned',
    assignmentDate: new Date('2024-11-17'),
    macAddress: '00:3D:19:42:B1:64',
    location: 'Kaffrine',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-19'),
        action: 'Créé',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN1 931 FM 151 V',
    status: 'assigned',
    assignmentDate: new Date('2024-11-17'),
    macAddress: '00:3B:59:EE:CC:C4',
    location: 'Thiès',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-20'),
        action: 'Attribué',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN1 269 YP 942 C',
    status: 'assigned',
    assignmentDate: new Date('2024-11-28'),
    macAddress: '00:EF:7F:A1:0F:DF',
    location: 'Kaolack',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-05'),
        action: 'Attribué',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN1 892 EL 694 Y',
    status: 'assigned',
    assignmentDate: new Date('2024-11-10'),
    macAddress: '00:F4:55:90:9F:10',
    location: 'Kaolack',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-29'),
        action: 'Créé',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN2 790 HL 972 P',
    status: 'assigned',
    assignmentDate: new Date('2024-11-08'),
    macAddress: '00:FC:AD:D1:D4:6E',
    location: 'Louga',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-22'),
        action: 'Créé',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN1 483 AJ 593 L',
    status: 'assigned',
    assignmentDate: new Date('2024-11-18'),
    macAddress: '00:C3:36:91:EF:2B',
    location: 'Kolda',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-21'),
        action: 'Créé',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN1 544 GA 976 B',
    status: 'assigned',
    assignmentDate: new Date('2024-11-24'),
    macAddress: '00:65:0A:12:7D:97',
    location: 'Thiès',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-27'),
        action: 'Attribué',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN1 485 WV 628 W',
    status: 'assigned',
    assignmentDate: new Date('2024-11-16'),
    macAddress: '00:A6:D0:87:69:A0',
    location: 'Kaffrine',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-09'),
        action: 'Créé',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN2 951 DX 743 A',
    status: 'assigned',
    assignmentDate: new Date('2024-11-25'),
    macAddress: '00:10:B8:11:61:EA',
    location: 'Diourbel',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-18'),
        action: 'Créé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN2 909 MR 313 C',
    status: 'assigned',
    assignmentDate: new Date('2024-11-07'),
    macAddress: '00:15:39:64:3E:41',
    location: 'Matam',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-18'),
        action: 'Créé',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN1 451 JU 882 L',
    status: 'assigned',
    assignmentDate: new Date('2024-11-11'),
    macAddress: '00:76:6C:F8:2F:C6',
    location: 'Ziguinchor',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-07'),
        action: 'Créé',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN2 132 NI 837 W',
    status: 'assigned',
    assignmentDate: new Date('2024-11-07'),
    macAddress: '00:1B:DF:4E:C3:3C',
    location: 'Matam',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-22'),
        action: 'Invalidé',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN2 398 GS 478 W',
    status: 'assigned',
    assignmentDate: new Date('2024-11-08'),
    macAddress: '00:25:17:CE:FB:1B',
    location: 'Thiès',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-31'),
        action: 'Attribué',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN1 708 ZE 104 I',
    status: 'assigned',
    assignmentDate: new Date('2024-11-28'),
    macAddress: '00:BB:30:78:E3:73',
    location: 'Thiès',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-09'),
        action: 'Invalidé',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN2 590 MV 126 O',
    status: 'assigned',
    assignmentDate: new Date('2024-11-31'),
    macAddress: '00:AA:60:B9:A9:88',
    location: 'Saint-Louis',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-15'),
        action: 'Attribué',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN1 689 CI 858 N',
    status: 'assigned',
    assignmentDate: new Date('2024-11-09'),
    macAddress: '00:91:E6:F1:60:BD',
    location: 'Matam',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-28'),
        action: 'Attribué',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN1 204 RX 222 H',
    status: 'assigned',
    assignmentDate: new Date('2024-11-14'),
    macAddress: '00:9D:2A:7F:54:FC',
    location: 'Fatick',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-09'),
        action: 'Créé',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN2 217 RQ 251 I',
    status: 'assigned',
    assignmentDate: new Date('2024-11-05'),
    macAddress: '00:C7:EC:40:2E:10',
    location: 'Kolda',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-25'),
        action: 'Créé',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN1 461 UC 324 W',
    status: 'assigned',
    assignmentDate: new Date('2024-11-19'),
    macAddress: '00:43:D4:D8:76:5F',
    location: 'Dakar',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-07'),
        action: 'Créé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN2 590 TT 193 B',
    status: 'assigned',
    assignmentDate: new Date('2024-11-02'),
    macAddress: '00:D1:C6:F7:9A:C4',
    location: 'Ziguinchor',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-27'),
        action: 'Créé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN2 328 CH 856 T',
    status: 'assigned',
    assignmentDate: new Date('2024-11-27'),
    macAddress: '00:83:51:F9:42:15',
    location: 'Kaolack',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-07'),
        action: 'Attribué',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN1 680 JC 792 T',
    status: 'assigned',
    assignmentDate: new Date('2024-11-31'),
    macAddress: '00:F1:44:D5:25:46',
    location: 'Kolda',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-10'),
        action: 'Invalidé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN1 385 IG 577 W',
    status: 'assigned',
    assignmentDate: new Date('2024-11-17'),
    macAddress: '00:4C:41:66:1F:2A',
    location: 'Sédhiou',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-02'),
        action: 'Attribué',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN1 973 UV 861 A',
    status: 'assigned',
    assignmentDate: new Date('2024-11-21'),
    macAddress: '00:6D:81:9F:74:60',
    location: 'Diourbel',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-15'),
        action: 'Invalidé',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN1 976 LP 583 I',
    status: 'assigned',
    assignmentDate: new Date('2024-11-02'),
    macAddress: '00:D7:87:23:96:F6',
    location: 'Matam',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-13'),
        action: 'Attribué',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN1 353 RW 432 N',
    status: 'assigned',
    assignmentDate: new Date('2024-11-06'),
    macAddress: '00:7A:1B:6C:FB:59',
    location: 'Ziguinchor',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-05'),
        action: 'Invalidé',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN1 486 WD 417 I',
    status: 'assigned',
    assignmentDate: new Date('2024-11-22'),
    macAddress: '00:A0:61:0C:CB:2C',
    location: 'Diourbel',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-02'),
        action: 'Créé',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN2 823 MF 339 P',
    status: 'assigned',
    assignmentDate: new Date('2024-11-27'),
    macAddress: '00:FC:18:93:11:D1',
    location: 'Louga',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-16'),
        action: 'Attribué',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN1 564 BI 914 T',
    status: 'assigned',
    assignmentDate: new Date('2024-11-27'),
    macAddress: '00:E5:80:0B:A0:CA',
    location: 'Louga',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-11'),
        action: 'Attribué',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN2 826 YM 898 C',
    status: 'assigned',
    assignmentDate: new Date('2024-11-09'),
    macAddress: '00:06:0D:0F:46:FB',
    location: 'Saint-Louis',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-09'),
        action: 'Créé',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN2 420 AS 843 K',
    status: 'assigned',
    assignmentDate: new Date('2024-11-31'),
    macAddress: '00:6C:B1:17:A5:DD',
    location: 'Louga',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-24'),
        action: 'Créé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN2 467 MX 182 H',
    status: 'assigned',
    assignmentDate: new Date('2024-11-07'),
    macAddress: '00:8B:EC:C5:79:A7',
    location: 'Kaffrine',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-19'),
        action: 'Attribué',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN1 280 JF 841 N',
    status: 'assigned',
    assignmentDate: new Date('2024-11-05'),
    macAddress: '00:30:27:6F:C5:76',
    location: 'Matam',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-23'),
        action: 'Créé',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN1 813 CD 181 J',
    status: 'assigned',
    assignmentDate: new Date('2024-11-18'),
    macAddress: '00:DF:3A:CF:5E:54',
    location: 'Kaffrine',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-15'),
        action: 'Invalidé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN2 851 WL 484 Q',
    status: 'assigned',
    assignmentDate: new Date('2024-11-14'),
    macAddress: '00:C5:EB:E6:7F:0F',
    location: 'Diourbel',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-21'),
        action: 'Créé',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN1 267 RO 724 V',
    status: 'assigned',
    assignmentDate: new Date('2024-11-24'),
    macAddress: '00:84:BE:D0:1E:3A',
    location: 'Kolda',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-02'),
        action: 'Créé',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN2 990 CE 869 C',
    status: 'assigned',
    assignmentDate: new Date('2024-11-18'),
    macAddress: '00:0E:41:DD:A8:B0',
    location: 'Kaolack',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-25'),
        action: 'Invalidé',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN1 439 NN 803 F',
    status: 'assigned',
    assignmentDate: new Date('2024-11-25'),
    macAddress: '00:EE:5F:C2:4F:CD',
    location: 'Sédhiou',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-05'),
        action: 'Attribué',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN1 486 GA 409 Y',
    status: 'assigned',
    assignmentDate: new Date('2024-11-14'),
    macAddress: '00:2E:60:60:D6:D6',
    location: 'Dakar',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-13'),
        action: 'Créé',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN1 347 BF 263 S',
    status: 'assigned',
    assignmentDate: new Date('2024-11-04'),
    macAddress: '00:3C:71:33:7E:9F',
    location: 'Ziguinchor',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-25'),
        action: 'Créé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN1 349 AT 911 A',
    status: 'assigned',
    assignmentDate: new Date('2024-11-25'),
    macAddress: '00:B8:75:0B:6C:25',
    location: 'Thiès',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-18'),
        action: 'Créé',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN1 723 XW 935 O',
    status: 'assigned',
    assignmentDate: new Date('2024-11-15'),
    macAddress: '00:79:CF:E8:23:06',
    location: 'Sédhiou',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-02'),
        action: 'Invalidé',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN2 796 RN 704 J',
    status: 'assigned',
    assignmentDate: new Date('2024-11-18'),
    macAddress: '00:B4:83:F1:B3:35',
    location: 'Matam',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-22'),
        action: 'Créé',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN2 767 QY 641 L',
    status: 'assigned',
    assignmentDate: new Date('2024-11-15'),
    macAddress: '00:77:03:B4:09:5D',
    location: 'Dakar',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-02'),
        action: 'Attribué',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN1 495 OD 137 J',
    status: 'assigned',
    assignmentDate: new Date('2024-11-19'),
    macAddress: '00:8E:E5:72:4E:E1',
    location: 'Diourbel',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-17'),
        action: 'Créé',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN2 915 LM 570 W',
    status: 'assigned',
    assignmentDate: new Date('2024-11-13'),
    macAddress: '00:A8:13:A5:62:2A',
    location: 'Ziguinchor',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-04'),
        action: 'Créé',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN1 586 ZZ 917 B',
    status: 'assigned',
    assignmentDate: new Date('2024-11-14'),
    macAddress: '00:CE:3E:26:26:42',
    location: 'Thiès',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-20'),
        action: 'Invalidé',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN2 395 EL 282 G',
    status: 'assigned',
    assignmentDate: new Date('2024-11-29'),
    macAddress: '00:66:D9:50:F2:49',
    location: 'Dakar',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-21'),
        action: 'Créé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN2 221 ZL 814 T',
    status: 'assigned',
    assignmentDate: new Date('2024-11-26'),
    macAddress: '00:23:EC:34:01:F2',
    location: 'Louga',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-21'),
        action: 'Créé',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN1 485 JN 983 S',
    status: 'assigned',
    assignmentDate: new Date('2024-11-04'),
    macAddress: '00:31:CF:D2:7B:FF',
    location: 'Fatick',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-18'),
        action: 'Invalidé',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN2 928 PL 935 V',
    status: 'assigned',
    assignmentDate: new Date('2024-11-19'),
    macAddress: '00:16:84:94:DC:40',
    location: 'Thiès',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-22'),
        action: 'Créé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN2 289 AI 553 V',
    status: 'assigned',
    assignmentDate: new Date('2024-11-20'),
    macAddress: '00:92:C1:CE:48:CB',
    location: 'Fatick',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-26'),
        action: 'Attribué',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN1 301 LB 256 I',
    status: 'assigned',
    assignmentDate: new Date('2024-11-06'),
    macAddress: '00:FE:06:6E:BD:F9',
    location: 'Diourbel',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-04'),
        action: 'Attribué',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN2 309 GP 750 A',
    status: 'assigned',
    assignmentDate: new Date('2024-11-04'),
    macAddress: '00:8C:D5:28:B5:EE',
    location: 'Tambacounda',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-28'),
        action: 'Attribué',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN2 109 WU 271 A',
    status: 'assigned',
    assignmentDate: new Date('2024-11-17'),
    macAddress: '00:24:C4:C8:1E:39',
    location: 'Tambacounda',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-26'),
        action: 'Attribué',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN1 957 HK 439 T',
    status: 'assigned',
    assignmentDate: new Date('2024-11-24'),
    macAddress: '00:AF:03:AD:1E:62',
    location: 'Kaolack',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-16'),
        action: 'Invalidé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN1 373 GG 921 N',
    status: 'assigned',
    assignmentDate: new Date('2024-11-27'),
    macAddress: '00:25:46:D6:6B:94',
    location: 'Matam',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-29'),
        action: 'Invalidé',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN1 982 DH 749 S',
    status: 'assigned',
    assignmentDate: new Date('2024-11-03'),
    macAddress: '00:9A:AD:B9:0B:63',
    location: 'Kaffrine',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-14'),
        action: 'Invalidé',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN2 438 LH 538 O',
    status: 'assigned',
    assignmentDate: new Date('2024-11-20'),
    macAddress: '00:BF:7B:6C:C3:8C',
    location: 'Kolda',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-23'),
        action: 'Invalidé',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN1 441 IP 753 Q',
    status: 'assigned',
    assignmentDate: new Date('2024-11-25'),
    macAddress: '00:79:BE:81:C4:AD',
    location: 'Louga',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-03'),
        action: 'Créé',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN1 337 XG 955 O',
    status: 'assigned',
    assignmentDate: new Date('2024-11-17'),
    macAddress: '00:69:8E:3C:A8:92',
    location: 'Ziguinchor',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-26'),
        action: 'Attribué',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN1 715 HH 849 D',
    status: 'assigned',
    assignmentDate: new Date('2024-11-05'),
    macAddress: '00:3C:87:91:47:0E',
    location: 'Kaffrine',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-05'),
        action: 'Créé',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN1 820 HN 230 Y',
    status: 'assigned',
    assignmentDate: new Date('2024-11-25'),
    macAddress: '00:7F:27:C2:E1:0D',
    location: 'Kolda',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-19'),
        action: 'Invalidé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN1 560 BJ 686 U',
    status: 'assigned',
    assignmentDate: new Date('2024-11-20'),
    macAddress: '00:FD:68:D1:F9:A5',
    location: 'Sédhiou',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-28'),
        action: 'Créé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN1 260 CI 305 A',
    status: 'assigned',
    assignmentDate: new Date('2024-11-06'),
    macAddress: '00:EA:D7:37:46:E4',
    location: 'Saint-Louis',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-02'),
        action: 'Invalidé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN1 590 OJ 743 Q',
    status: 'assigned',
    assignmentDate: new Date('2024-11-22'),
    macAddress: '00:34:57:34:85:68',
    location: 'Fatick',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-28'),
        action: 'Invalidé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN1 695 FI 332 T',
    status: 'assigned',
    assignmentDate: new Date('2024-11-05'),
    macAddress: '00:62:71:40:4F:31',
    location: 'Kaffrine',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-02'),
        action: 'Attribué',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN1 705 NV 574 W',
    status: 'assigned',
    assignmentDate: new Date('2024-11-05'),
    macAddress: '00:5F:76:4F:30:A9',
    location: 'Diourbel',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-05'),
        action: 'Créé',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN2 573 LP 210 H',
    status: 'assigned',
    assignmentDate: new Date('2024-11-03'),
    macAddress: '00:98:15:8A:F5:EC',
    location: 'Dakar',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-22'),
        action: 'Créé',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN1 984 GF 496 C',
    status: 'assigned',
    assignmentDate: new Date('2024-11-03'),
    macAddress: '00:57:A2:B2:DE:5C',
    location: 'Sédhiou',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-08'),
        action: 'Créé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN1 485 FB 460 B',
    status: 'assigned',
    assignmentDate: new Date('2024-11-06'),
    macAddress: '00:BB:45:DF:75:48',
    location: 'Thiès',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-03'),
        action: 'Créé',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN2 459 VU 499 F',
    status: 'assigned',
    assignmentDate: new Date('2024-11-19'),
    macAddress: '00:C2:65:AE:1A:EB',
    location: 'Diourbel',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-04'),
        action: 'Invalidé',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN2 202 SZ 222 B',
    status: 'assigned',
    assignmentDate: new Date('2024-11-08'),
    macAddress: '00:90:08:0F:5A:72',
    location: 'Sédhiou',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-03'),
        action: 'Invalidé',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN2 159 NV 429 O',
    status: 'assigned',
    assignmentDate: new Date('2024-11-03'),
    macAddress: '00:5C:03:61:FF:21',
    location: 'Louga',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-20'),
        action: 'Créé',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN2 727 NP 649 L',
    status: 'assigned',
    assignmentDate: new Date('2024-11-04'),
    macAddress: '00:33:95:FE:4C:F2',
    location: 'Fatick',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-21'),
        action: 'Créé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN1 879 QZ 564 N',
    status: 'assigned',
    assignmentDate: new Date('2024-11-05'),
    macAddress: '00:9C:D3:8D:D7:11',
    location: 'Dakar',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-05'),
        action: 'Invalidé',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN1 769 QV 407 L',
    status: 'assigned',
    assignmentDate: new Date('2024-11-07'),
    macAddress: '00:AF:F2:B7:EC:6F',
    location: 'Matam',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-04'),
        action: 'Créé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN2 574 IK 995 R',
    status: 'assigned',
    assignmentDate: new Date('2024-11-16'),
    macAddress: '00:7B:65:EF:4A:11',
    location: 'Thiès',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-25'),
        action: 'Invalidé',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN2 526 XQ 647 S',
    status: 'assigned',
    assignmentDate: new Date('2024-11-28'),
    macAddress: '00:1A:78:97:C5:82',
    location: 'Tambacounda',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-13'),
        action: 'Créé',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN2 935 YL 990 Z',
    status: 'assigned',
    assignmentDate: new Date('2024-11-13'),
    macAddress: '00:5E:BC:66:D3:5A',
    location: 'Fatick',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-19'),
        action: 'Attribué',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN1 853 YE 285 L',
    status: 'assigned',
    assignmentDate: new Date('2024-11-17'),
    macAddress: '00:6F:05:F4:E6:B8',
    location: 'Sédhiou',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-07'),
        action: 'Attribué',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN1 722 ZI 818 I',
    status: 'assigned',
    assignmentDate: new Date('2024-11-25'),
    macAddress: '00:17:E7:14:C5:A0',
    location: 'Saint-Louis',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-09'),
        action: 'Attribué',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN2 971 AP 313 P',
    status: 'assigned',
    assignmentDate: new Date('2024-11-06'),
    macAddress: '00:DA:2C:A2:5B:DF',
    location: 'Tambacounda',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-07'),
        action: 'Invalidé',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN1 484 QS 348 M',
    status: 'assigned',
    assignmentDate: new Date('2024-11-26'),
    macAddress: '00:81:32:B9:2B:3E',
    location: 'Sédhiou',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-19'),
        action: 'Invalidé',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN1 519 XX 703 B',
    status: 'assigned',
    assignmentDate: new Date('2024-11-25'),
    macAddress: '00:4D:73:82:9F:34',
    location: 'Fatick',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-06'),
        action: 'Invalidé',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN1 535 NL 207 X',
    status: 'assigned',
    assignmentDate: new Date('2024-11-25'),
    macAddress: '00:CC:16:D1:AE:E0',
    location: 'Louga',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-03'),
        action: 'Invalidé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN1 329 LZ 981 D',
    status: 'assigned',
    assignmentDate: new Date('2024-11-17'),
    macAddress: '00:33:CF:A3:87:DE',
    location: 'Tambacounda',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-17'),
        action: 'Attribué',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN1 748 GF 493 A',
    status: 'assigned',
    assignmentDate: new Date('2024-11-25'),
    macAddress: '00:32:EE:6D:65:9C',
    location: 'Saint-Louis',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-12'),
        action: 'Attribué',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN2 784 TT 589 X',
    status: 'assigned',
    assignmentDate: new Date('2024-11-24'),
    macAddress: '00:7B:90:72:CE:14',
    location: 'Fatick',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-14'),
        action: 'Créé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN1 373 WD 152 F',
    status: 'assigned',
    assignmentDate: new Date('2024-11-03'),
    macAddress: '00:18:F1:24:8F:A9',
    location: 'Kaolack',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-08'),
        action: 'Attribué',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN2 579 TT 692 M',
    status: 'assigned',
    assignmentDate: new Date('2024-11-28'),
    macAddress: '00:BE:78:EA:5D:44',
    location: 'Matam',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-23'),
        action: 'Attribué',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN1 136 WS 862 H',
    status: 'assigned',
    assignmentDate: new Date('2024-11-22'),
    macAddress: '00:F9:95:F6:EB:86',
    location: 'Ziguinchor',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-29'),
        action: 'Attribué',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN1 274 XV 968 U',
    status: 'assigned',
    assignmentDate: new Date('2024-11-28'),
    macAddress: '00:F8:A9:60:F9:D6',
    location: 'Tambacounda',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-04'),
        action: 'Attribué',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN2 356 QL 495 S',
    status: 'assigned',
    assignmentDate: new Date('2024-11-11'),
    macAddress: '00:64:DE:F1:E8:6C',
    location: 'Kaffrine',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-19'),
        action: 'Créé',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN2 725 DH 400 V',
    status: 'assigned',
    assignmentDate: new Date('2024-11-09'),
    macAddress: '00:BB:73:92:40:DB',
    location: 'Kolda',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-20'),
        action: 'Créé',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN2 948 OX 251 S',
    status: 'assigned',
    assignmentDate: new Date('2024-11-12'),
    macAddress: '00:71:5A:01:D6:D0',
    location: 'Kolda',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-20'),
        action: 'Créé',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN1 762 JD 786 B',
    status: 'assigned',
    assignmentDate: new Date('2024-11-12'),
    macAddress: '00:21:F1:4E:AB:1F',
    location: 'Saint-Louis',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-03'),
        action: 'Créé',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN2 183 SR 629 N',
    status: 'assigned',
    assignmentDate: new Date('2024-11-09'),
    macAddress: '00:03:36:5C:50:BA',
    location: 'Kolda',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-09'),
        action: 'Invalidé',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN1 216 JB 929 M',
    status: 'assigned',
    assignmentDate: new Date('2024-11-05'),
    macAddress: '00:29:B8:4B:A5:30',
    location: 'Dakar',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-14'),
        action: 'Attribué',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN1 460 YD 136 F',
    status: 'assigned',
    assignmentDate: new Date('2024-11-02'),
    macAddress: '00:8C:4C:4B:FE:FD',
    location: 'Sédhiou',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-20'),
        action: 'Créé',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN1 216 IG 449 E',
    status: 'assigned',
    assignmentDate: new Date('2024-11-11'),
    macAddress: '00:ED:E1:56:E0:B1',
    location: 'Matam',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-14'),
        action: 'Créé',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN1 385 ET 955 E',
    status: 'assigned',
    assignmentDate: new Date('2024-11-13'),
    macAddress: '00:AB:46:33:96:8E',
    location: 'Dakar',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-09'),
        action: 'Créé',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN1 483 NN 176 Y',
    status: 'assigned',
    assignmentDate: new Date('2024-11-15'),
    macAddress: '00:17:2C:9E:A7:13',
    location: 'Dakar',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-31'),
        action: 'Créé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN2 177 HA 328 C',
    status: 'assigned',
    assignmentDate: new Date('2024-11-05'),
    macAddress: '00:13:D6:89:7C:BD',
    location: 'Saint-Louis',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-27'),
        action: 'Attribué',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN2 683 MD 286 O',
    status: 'assigned',
    assignmentDate: new Date('2024-11-30'),
    macAddress: '00:44:57:2F:C1:23',
    location: 'Saint-Louis',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-18'),
        action: 'Invalidé',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN1 193 TG 776 A',
    status: 'assigned',
    assignmentDate: new Date('2024-11-16'),
    macAddress: '00:60:12:59:94:BD',
    location: 'Sédhiou',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-18'),
        action: 'Créé',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN2 983 ML 308 A',
    status: 'assigned',
    assignmentDate: new Date('2024-11-05'),
    macAddress: '00:06:23:B8:FF:72',
    location: 'Saint-Louis',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-12'),
        action: 'Attribué',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN2 652 PN 756 E',
    status: 'assigned',
    assignmentDate: new Date('2024-11-25'),
    macAddress: '00:C6:99:AA:2F:08',
    location: 'Diourbel',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-18'),
        action: 'Créé',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN1 654 QZ 553 J',
    status: 'assigned',
    assignmentDate: new Date('2024-11-05'),
    macAddress: '00:1D:5F:6F:1E:B6',
    location: 'Dakar',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-10'),
        action: 'Invalidé',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN2 256 GE 301 Y',
    status: 'assigned',
    assignmentDate: new Date('2024-11-31'),
    macAddress: '00:3D:81:56:B5:E9',
    location: 'Sédhiou',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-18'),
        action: 'Invalidé',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN1 451 YT 905 M',
    status: 'assigned',
    assignmentDate: new Date('2024-11-05'),
    macAddress: '00:4A:6F:F9:86:8C',
    location: 'Matam',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-24'),
        action: 'Invalidé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN1 747 EI 587 O',
    status: 'assigned',
    assignmentDate: new Date('2024-11-23'),
    macAddress: '00:61:1E:5F:A0:E2',
    location: 'Saint-Louis',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-15'),
        action: 'Invalidé',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN1 846 XU 812 G',
    status: 'assigned',
    assignmentDate: new Date('2024-11-27'),
    macAddress: '00:59:85:DF:C5:A6',
    location: 'Sédhiou',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-04'),
        action: 'Créé',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN2 792 CG 134 D',
    status: 'assigned',
    assignmentDate: new Date('2024-11-09'),
    macAddress: '00:66:6F:EB:03:D5',
    location: 'Kolda',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-10'),
        action: 'Attribué',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN2 671 UQ 938 Z',
    status: 'assigned',
    assignmentDate: new Date('2024-11-19'),
    macAddress: '00:05:04:48:70:6E',
    location: 'Dakar',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-17'),
        action: 'Créé',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN2 472 MI 167 D',
    status: 'assigned',
    assignmentDate: new Date('2024-11-24'),
    macAddress: '00:63:2D:D0:44:48',
    location: 'Kaolack',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-05'),
        action: 'Invalidé',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN2 966 ZY 163 Q',
    status: 'assigned',
    assignmentDate: new Date('2024-11-14'),
    macAddress: '00:A4:BC:6E:F2:8C',
    location: 'Kaffrine',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-06'),
        action: 'Attribué',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN1 848 QJ 349 S',
    status: 'assigned',
    assignmentDate: new Date('2024-11-10'),
    macAddress: '00:26:9A:8D:86:2E',
    location: 'Tambacounda',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-08'),
        action: 'Attribué',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN2 615 SN 585 S',
    status: 'assigned',
    assignmentDate: new Date('2024-11-10'),
    macAddress: '00:DE:4F:4F:52:0F',
    location: 'Diourbel',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-12'),
        action: 'Invalidé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN2 834 XL 643 C',
    status: 'assigned',
    assignmentDate: new Date('2024-11-10'),
    macAddress: '00:FE:48:BB:9B:07',
    location: 'Kaolack',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-06'),
        action: 'Attribué',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN2 386 WW 434 U',
    status: 'assigned',
    assignmentDate: new Date('2024-11-30'),
    macAddress: '00:8A:8B:29:75:48',
    location: 'Tambacounda',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-23'),
        action: 'Attribué',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN1 631 FT 870 C',
    status: 'assigned',
    assignmentDate: new Date('2024-11-15'),
    macAddress: '00:BD:97:B8:61:20',
    location: 'Kolda',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-29'),
        action: 'Attribué',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN2 815 QA 830 M',
    status: 'assigned',
    assignmentDate: new Date('2024-11-07'),
    macAddress: '00:CC:74:EC:83:E7',
    location: 'Louga',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-17'),
        action: 'Attribué',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN2 942 WV 287 E',
    status: 'assigned',
    assignmentDate: new Date('2024-11-11'),
    macAddress: '00:BC:26:3C:C5:35',
    location: 'Ziguinchor',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-08'),
        action: 'Attribué',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN1 267 QA 101 K',
    status: 'assigned',
    assignmentDate: new Date('2024-11-12'),
    macAddress: '00:EA:91:76:06:95',
    location: 'Ziguinchor',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-18'),
        action: 'Attribué',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN1 309 YK 368 W',
    status: 'assigned',
    assignmentDate: new Date('2024-11-27'),
    macAddress: '00:E0:31:74:39:DF',
    location: 'Ziguinchor',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-25'),
        action: 'Attribué',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN2 653 HP 441 F',
    status: 'assigned',
    assignmentDate: new Date('2024-11-20'),
    macAddress: '00:DB:07:83:EC:EC',
    location: 'Kaolack',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-20'),
        action: 'Attribué',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN2 711 RN 471 H',
    status: 'assigned',
    assignmentDate: new Date('2024-11-30'),
    macAddress: '00:6F:3C:79:1A:B9',
    location: 'Tambacounda',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-23'),
        action: 'Créé',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN2 795 TV 180 K',
    status: 'assigned',
    assignmentDate: new Date('2024-11-24'),
    macAddress: '00:D1:71:F1:A5:8F',
    location: 'Ziguinchor',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-14'),
        action: 'Créé',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN2 418 DU 311 H',
    status: 'assigned',
    assignmentDate: new Date('2024-11-02'),
    macAddress: '00:76:5A:DC:0C:04',
    location: 'Matam',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-09'),
        action: 'Attribué',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN2 829 FE 232 Y',
    status: 'assigned',
    assignmentDate: new Date('2024-11-07'),
    macAddress: '00:B6:5D:8A:C1:16',
    location: 'Kaffrine',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-26'),
        action: 'Attribué',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN1 155 MB 993 R',
    status: 'assigned',
    assignmentDate: new Date('2024-11-19'),
    macAddress: '00:9A:93:58:3C:90',
    location: 'Kolda',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-15'),
        action: 'Attribué',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN1 119 TZ 955 K',
    status: 'assigned',
    assignmentDate: new Date('2024-11-09'),
    macAddress: '00:2B:37:20:5C:7D',
    location: 'Fatick',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-11'),
        action: 'Invalidé',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN2 595 OR 534 Z',
    status: 'assigned',
    assignmentDate: new Date('2024-11-08'),
    macAddress: '00:D3:D2:2B:C8:AB',
    location: 'Matam',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-19'),
        action: 'Créé',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN1 616 VI 977 E',
    status: 'assigned',
    assignmentDate: new Date('2024-11-07'),
    macAddress: '00:F3:E9:36:87:58',
    location: 'Tambacounda',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-09'),
        action: 'Créé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN1 553 GI 679 X',
    status: 'assigned',
    assignmentDate: new Date('2024-11-10'),
    macAddress: '00:5E:B7:02:1C:73',
    location: 'Fatick',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-29'),
        action: 'Créé',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN2 470 OX 772 K',
    status: 'assigned',
    assignmentDate: new Date('2024-11-14'),
    macAddress: '00:1F:CD:0C:77:13',
    location: 'Dakar',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-30'),
        action: 'Attribué',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN1 463 PP 287 P',
    status: 'assigned',
    assignmentDate: new Date('2024-11-19'),
    macAddress: '00:B5:47:33:7F:C5',
    location: 'Tambacounda',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-04'),
        action: 'Invalidé',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN1 845 RM 599 C',
    status: 'assigned',
    assignmentDate: new Date('2024-11-13'),
    macAddress: '00:D7:E3:C0:02:08',
    location: 'Diourbel',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-14'),
        action: 'Attribué',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN1 544 KR 931 N',
    status: 'assigned',
    assignmentDate: new Date('2024-11-13'),
    macAddress: '00:8B:17:57:68:0D',
    location: 'Sédhiou',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-22'),
        action: 'Créé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN2 233 LM 407 D',
    status: 'assigned',
    assignmentDate: new Date('2024-11-06'),
    macAddress: '00:2F:44:C8:1B:30',
    location: 'Kaolack',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-20'),
        action: 'Créé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN1 772 ZQ 290 H',
    status: 'assigned',
    assignmentDate: new Date('2024-11-28'),
    macAddress: '00:24:CF:C9:A2:EA',
    location: 'Tambacounda',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-10'),
        action: 'Créé',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN2 888 NU 711 A',
    status: 'assigned',
    assignmentDate: new Date('2024-11-22'),
    macAddress: '00:FA:F7:27:72:52',
    location: 'Ziguinchor',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-26'),
        action: 'Invalidé',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN2 177 KU 861 J',
    status: 'assigned',
    assignmentDate: new Date('2024-11-05'),
    macAddress: '00:A8:7E:D6:D4:47',
    location: 'Louga',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-19'),
        action: 'Créé',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN1 839 ZN 809 E',
    status: 'assigned',
    assignmentDate: new Date('2024-11-27'),
    macAddress: '00:41:75:1C:56:B3',
    location: 'Ziguinchor',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-10'),
        action: 'Créé',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN2 824 DN 325 F',
    status: 'assigned',
    assignmentDate: new Date('2024-11-30'),
    macAddress: '00:51:64:A5:F9:8C',
    location: 'Sédhiou',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-04'),
        action: 'Invalidé',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN2 253 FF 341 Z',
    status: 'assigned',
    assignmentDate: new Date('2024-11-29'),
    macAddress: '00:57:12:B4:A0:A2',
    location: 'Thiès',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-30'),
        action: 'Créé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN1 435 CI 612 Z',
    status: 'assigned',
    assignmentDate: new Date('2024-11-15'),
    macAddress: '00:A3:B0:50:8D:7E',
    location: 'Louga',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-05'),
        action: 'Créé',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN2 773 TZ 210 E',
    status: 'assigned',
    assignmentDate: new Date('2024-11-24'),
    macAddress: '00:20:D9:09:86:14',
    location: 'Matam',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-09'),
        action: 'Invalidé',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN2 917 DL 144 Y',
    status: 'assigned',
    assignmentDate: new Date('2024-11-20'),
    macAddress: '00:70:E1:12:03:8D',
    location: 'Matam',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-19'),
        action: 'Attribué',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN2 670 IF 684 W',
    status: 'assigned',
    assignmentDate: new Date('2024-11-10'),
    macAddress: '00:70:7A:BA:52:A6',
    location: 'Tambacounda',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-17'),
        action: 'Invalidé',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN2 179 EQ 461 F',
    status: 'assigned',
    assignmentDate: new Date('2024-11-06'),
    macAddress: '00:0B:84:EC:DC:D3',
    location: 'Kaolack',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-20'),
        action: 'Invalidé',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN1 184 SD 666 V',
    status: 'assigned',
    assignmentDate: new Date('2024-11-05'),
    macAddress: '00:9E:72:E3:A9:89',
    location: 'Fatick',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-27'),
        action: 'Attribué',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN1 667 JY 790 I',
    status: 'assigned',
    assignmentDate: new Date('2024-11-23'),
    macAddress: '00:D1:D9:83:4A:D7',
    location: 'Louga',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-05'),
        action: 'Invalidé',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN1 779 XG 928 Q',
    status: 'assigned',
    assignmentDate: new Date('2024-11-10'),
    macAddress: '00:E3:97:14:B7:A5',
    location: 'Fatick',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-26'),
        action: 'Invalidé',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN1 576 XA 249 A',
    status: 'assigned',
    assignmentDate: new Date('2024-11-31'),
    macAddress: '00:0C:B7:37:80:2E',
    location: 'Diourbel',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-28'),
        action: 'Créé',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN1 457 PL 911 J',
    status: 'assigned',
    assignmentDate: new Date('2024-11-19'),
    macAddress: '00:9B:88:6E:F6:5C',
    location: 'Matam',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-14'),
        action: 'Créé',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN1 271 NI 219 A',
    status: 'assigned',
    assignmentDate: new Date('2024-11-03'),
    macAddress: '00:BA:8B:83:FA:2E',
    location: 'Fatick',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-13'),
        action: 'Créé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN2 688 MG 582 G',
    status: 'assigned',
    assignmentDate: new Date('2024-11-07'),
    macAddress: '00:1A:75:71:06:15',
    location: 'Kaolack',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-16'),
        action: 'Invalidé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN1 205 JB 330 L',
    status: 'assigned',
    assignmentDate: new Date('2024-11-16'),
    macAddress: '00:48:83:17:BC:2B',
    location: 'Fatick',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-12'),
        action: 'Créé',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN2 210 NG 711 S',
    status: 'assigned',
    assignmentDate: new Date('2024-11-24'),
    macAddress: '00:98:05:00:81:94',
    location: 'Ziguinchor',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-24'),
        action: 'Créé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN2 681 XR 835 D',
    status: 'assigned',
    assignmentDate: new Date('2024-11-22'),
    macAddress: '00:D7:02:22:4F:60',
    location: 'Sédhiou',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-31'),
        action: 'Attribué',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN2 672 KI 310 U',
    status: 'assigned',
    assignmentDate: new Date('2024-11-05'),
    macAddress: '00:DD:F8:61:92:5A',
    location: 'Kolda',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-21'),
        action: 'Créé',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN1 212 YF 296 G',
    status: 'assigned',
    assignmentDate: new Date('2024-11-03'),
    macAddress: '00:BD:F4:1B:51:53',
    location: 'Kaolack',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-20'),
        action: 'Invalidé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN1 508 AX 352 Z',
    status: 'assigned',
    assignmentDate: new Date('2024-11-29'),
    macAddress: '00:6E:2B:39:B3:50',
    location: 'Saint-Louis',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-03'),
        action: 'Attribué',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN2 870 RC 451 U',
    status: 'assigned',
    assignmentDate: new Date('2024-11-31'),
    macAddress: '00:F4:A0:F1:34:1B',
    location: 'Fatick',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-10'),
        action: 'Créé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN1 630 LH 503 O',
    status: 'assigned',
    assignmentDate: new Date('2024-11-09'),
    macAddress: '00:B4:32:79:B4:78',
    location: 'Kaolack',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-20'),
        action: 'Créé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN1 564 QC 567 A',
    status: 'assigned',
    assignmentDate: new Date('2024-11-08'),
    macAddress: '00:83:2D:01:0A:A7',
    location: 'Saint-Louis',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-03'),
        action: 'Invalidé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN2 488 MD 693 D',
    status: 'assigned',
    assignmentDate: new Date('2024-11-11'),
    macAddress: '00:BD:E0:2B:F6:B4',
    location: 'Diourbel',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-30'),
        action: 'Invalidé',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN2 145 MV 359 Y',
    status: 'assigned',
    assignmentDate: new Date('2024-11-11'),
    macAddress: '00:4D:0D:38:15:7F',
    location: 'Dakar',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-11'),
        action: 'Créé',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN2 695 TT 242 Z',
    status: 'assigned',
    assignmentDate: new Date('2024-11-06'),
    macAddress: '00:B7:98:69:61:9F',
    location: 'Dakar',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-26'),
        action: 'Attribué',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN1 486 GH 893 F',
    status: 'assigned',
    assignmentDate: new Date('2024-11-24'),
    macAddress: '00:3F:3F:E3:B8:78',
    location: 'Thiès',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-02'),
        action: 'Invalidé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN2 336 PQ 977 E',
    status: 'assigned',
    assignmentDate: new Date('2024-11-18'),
    macAddress: '00:2D:C8:FD:1D:1A',
    location: 'Kolda',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-14'),
        action: 'Attribué',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN1 658 YB 625 W',
    status: 'assigned',
    assignmentDate: new Date('2024-11-19'),
    macAddress: '00:DC:B0:F8:65:11',
    location: 'Sédhiou',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-15'),
        action: 'Attribué',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN2 999 DE 310 R',
    status: 'assigned',
    assignmentDate: new Date('2024-11-12'),
    macAddress: '00:89:9A:53:CF:77',
    location: 'Dakar',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-10'),
        action: 'Invalidé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN2 205 XY 176 G',
    status: 'assigned',
    assignmentDate: new Date('2024-11-25'),
    macAddress: '00:A4:9E:A0:18:F8',
    location: 'Sédhiou',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-05'),
        action: 'Créé',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN2 228 PF 206 Z',
    status: 'assigned',
    assignmentDate: new Date('2024-11-16'),
    macAddress: '00:35:EE:23:EC:0F',
    location: 'Kaffrine',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-02'),
        action: 'Créé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN2 554 DA 436 M',
    status: 'assigned',
    assignmentDate: new Date('2024-11-16'),
    macAddress: '00:7C:83:67:CE:E5',
    location: 'Fatick',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-11'),
        action: 'Attribué',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN1 638 XR 443 O',
    status: 'assigned',
    assignmentDate: new Date('2024-11-02'),
    macAddress: '00:9E:24:80:CE:03',
    location: 'Kaffrine',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-12'),
        action: 'Invalidé',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN1 875 PI 865 Y',
    status: 'assigned',
    assignmentDate: new Date('2024-11-31'),
    macAddress: '00:F9:6D:68:68:68',
    location: 'Fatick',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-17'),
        action: 'Invalidé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN1 651 YX 543 B',
    status: 'assigned',
    assignmentDate: new Date('2024-11-18'),
    macAddress: '00:35:67:62:D3:B5',
    location: 'Sédhiou',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-10'),
        action: 'Créé',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN2 291 DX 533 K',
    status: 'assigned',
    assignmentDate: new Date('2024-11-26'),
    macAddress: '00:0F:76:7D:93:18',
    location: 'Diourbel',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-08'),
        action: 'Créé',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN1 484 MI 608 P',
    status: 'assigned',
    assignmentDate: new Date('2024-11-21'),
    macAddress: '00:0B:EE:E1:09:9C',
    location: 'Kaffrine',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-23'),
        action: 'Attribué',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN2 348 DE 465 N',
    status: 'assigned',
    assignmentDate: new Date('2024-11-05'),
    macAddress: '00:EE:13:E0:8C:0A',
    location: 'Diourbel',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-15'),
        action: 'Invalidé',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN2 731 EX 269 D',
    status: 'assigned',
    assignmentDate: new Date('2024-11-12'),
    macAddress: '00:92:15:B7:E0:9E',
    location: 'Matam',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-30'),
        action: 'Attribué',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN2 664 IZ 377 X',
    status: 'assigned',
    assignmentDate: new Date('2024-11-06'),
    macAddress: '00:A2:25:7F:EA:EF',
    location: 'Diourbel',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-19'),
        action: 'Attribué',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN1 779 ZD 145 P',
    status: 'assigned',
    assignmentDate: new Date('2024-11-30'),
    macAddress: '00:DE:A3:3E:B1:53',
    location: 'Diourbel',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-11'),
        action: 'Invalidé',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN2 410 MH 976 Q',
    status: 'assigned',
    assignmentDate: new Date('2024-11-22'),
    macAddress: '00:87:12:97:18:04',
    location: 'Saint-Louis',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-10'),
        action: 'Créé',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN1 303 ZN 488 Y',
    status: 'assigned',
    assignmentDate: new Date('2024-11-08'),
    macAddress: '00:92:9B:3F:05:6D',
    location: 'Dakar',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-24'),
        action: 'Invalidé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN2 687 UT 634 Q',
    status: 'assigned',
    assignmentDate: new Date('2024-11-26'),
    macAddress: '00:B5:B2:CF:03:A2',
    location: 'Sédhiou',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-06'),
        action: 'Créé',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN2 244 KJ 388 K',
    status: 'assigned',
    assignmentDate: new Date('2024-11-20'),
    macAddress: '00:50:66:8A:97:98',
    location: 'Ziguinchor',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-20'),
        action: 'Créé',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN1 904 EN 461 X',
    status: 'assigned',
    assignmentDate: new Date('2024-11-03'),
    macAddress: '00:9A:DC:C2:66:11',
    location: 'Kaffrine',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-30'),
        action: 'Invalidé',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN2 334 BP 584 L',
    status: 'assigned',
    assignmentDate: new Date('2024-11-09'),
    macAddress: '00:15:EE:D5:1E:AA',
    location: 'Tambacounda',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-15'),
        action: 'Invalidé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN2 328 MQ 510 X',
    status: 'assigned',
    assignmentDate: new Date('2024-11-11'),
    macAddress: '00:FD:FB:E4:C2:BC',
    location: 'Kolda',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-25'),
        action: 'Attribué',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN2 518 LN 383 R',
    status: 'assigned',
    assignmentDate: new Date('2024-11-24'),
    macAddress: '00:B1:6D:9C:0D:0F',
    location: 'Thiès',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-17'),
        action: 'Invalidé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN2 750 XM 386 H',
    status: 'assigned',
    assignmentDate: new Date('2024-11-14'),
    macAddress: '00:DA:76:53:E6:61',
    location: 'Louga',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-13'),
        action: 'Créé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN2 555 OO 607 S',
    status: 'assigned',
    assignmentDate: new Date('2024-11-20'),
    macAddress: '00:F6:2A:98:8F:DC',
    location: 'Kaolack',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-30'),
        action: 'Attribué',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN2 334 XG 429 P',
    status: 'assigned',
    assignmentDate: new Date('2024-11-08'),
    macAddress: '00:1F:80:F6:4F:5A',
    location: 'Matam',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-23'),
        action: 'Invalidé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN1 478 HT 225 K',
    status: 'assigned',
    assignmentDate: new Date('2024-11-07'),
    macAddress: '00:5E:12:74:EF:27',
    location: 'Dakar',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-05'),
        action: 'Invalidé',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN2 667 EE 487 P',
    status: 'assigned',
    assignmentDate: new Date('2024-11-25'),
    macAddress: '00:5F:4F:46:C3:31',
    location: 'Kaffrine',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-06'),
        action: 'Invalidé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN1 768 AQ 131 E',
    status: 'assigned',
    assignmentDate: new Date('2024-11-06'),
    macAddress: '00:6D:41:4F:BB:93',
    location: 'Thiès',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-28'),
        action: 'Créé',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN2 690 EN 486 D',
    status: 'assigned',
    assignmentDate: new Date('2024-11-18'),
    macAddress: '00:38:D2:E4:FA:AF',
    location: 'Tambacounda',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-31'),
        action: 'Invalidé',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN1 938 OU 758 L',
    status: 'assigned',
    assignmentDate: new Date('2024-11-30'),
    macAddress: '00:36:8C:D4:2C:F5',
    location: 'Louga',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-05'),
        action: 'Attribué',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN2 963 CH 698 B',
    status: 'assigned',
    assignmentDate: new Date('2024-11-14'),
    macAddress: '00:3C:CC:14:A9:3F',
    location: 'Sédhiou',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-25'),
        action: 'Attribué',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN1 194 HH 178 S',
    status: 'assigned',
    assignmentDate: new Date('2024-11-04'),
    macAddress: '00:A1:6E:7B:83:35',
    location: 'Diourbel',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-20'),
        action: 'Attribué',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN1 728 XB 995 K',
    status: 'assigned',
    assignmentDate: new Date('2024-11-13'),
    macAddress: '00:12:D8:BE:F1:86',
    location: 'Dakar',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-20'),
        action: 'Créé',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN1 146 AG 562 G',
    status: 'assigned',
    assignmentDate: new Date('2024-11-18'),
    macAddress: '00:F7:E8:0B:5C:83',
    location: 'Kaffrine',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-25'),
        action: 'Invalidé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN1 195 GD 620 S',
    status: 'assigned',
    assignmentDate: new Date('2024-11-20'),
    macAddress: '00:50:2D:BE:C9:F3',
    location: 'Fatick',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-24'),
        action: 'Créé',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN1 115 MU 680 F',
    status: 'assigned',
    assignmentDate: new Date('2024-11-14'),
    macAddress: '00:B6:FE:AC:1D:AA',
    location: 'Louga',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-23'),
        action: 'Créé',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN1 951 UU 837 N',
    status: 'assigned',
    assignmentDate: new Date('2024-11-27'),
    macAddress: '00:9B:F3:47:13:A0',
    location: 'Tambacounda',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-31'),
        action: 'Créé',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN1 703 LL 983 W',
    status: 'assigned',
    assignmentDate: new Date('2024-11-19'),
    macAddress: '00:0D:7B:02:0E:0D',
    location: 'Tambacounda',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-20'),
        action: 'Attribué',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN1 344 TJ 712 I',
    status: 'assigned',
    assignmentDate: new Date('2024-11-15'),
    macAddress: '00:80:AF:B6:91:71',
    location: 'Sédhiou',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-03'),
        action: 'Créé',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN2 806 PS 497 L',
    status: 'assigned',
    assignmentDate: new Date('2024-11-25'),
    macAddress: '00:37:60:9B:96:14',
    location: 'Kaffrine',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-25'),
        action: 'Invalidé',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN2 583 HW 564 R',
    status: 'assigned',
    assignmentDate: new Date('2024-11-10'),
    macAddress: '00:A5:A8:37:71:26',
    location: 'Diourbel',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-16'),
        action: 'Invalidé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN2 285 BQ 901 W',
    status: 'assigned',
    assignmentDate: new Date('2024-11-20'),
    macAddress: '00:43:43:4D:E1:1A',
    location: 'Kolda',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-14'),
        action: 'Créé',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN2 256 QD 388 J',
    status: 'assigned',
    assignmentDate: new Date('2024-11-15'),
    macAddress: '00:14:E6:40:84:30',
    location: 'Kaffrine',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-02'),
        action: 'Invalidé',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN1 160 HR 586 T',
    status: 'assigned',
    assignmentDate: new Date('2024-11-26'),
    macAddress: '00:0E:29:4E:35:2A',
    location: 'Fatick',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-24'),
        action: 'Attribué',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN2 860 BG 566 O',
    status: 'assigned',
    assignmentDate: new Date('2024-11-05'),
    macAddress: '00:98:C4:5A:CF:DE',
    location: 'Thiès',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-04'),
        action: 'Attribué',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN2 568 BN 202 W',
    status: 'assigned',
    assignmentDate: new Date('2024-11-11'),
    macAddress: '00:C1:5D:19:12:E2',
    location: 'Kaolack',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-06'),
        action: 'Créé',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN1 700 YA 311 F',
    status: 'assigned',
    assignmentDate: new Date('2024-11-20'),
    macAddress: '00:35:C2:F1:96:14',
    location: 'Fatick',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-29'),
        action: 'Créé',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN1 773 CA 341 Z',
    status: 'assigned',
    assignmentDate: new Date('2024-11-07'),
    macAddress: '00:CA:E7:56:42:01',
    location: 'Ziguinchor',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-19'),
        action: 'Créé',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN1 748 WY 915 P',
    status: 'assigned',
    assignmentDate: new Date('2024-11-13'),
    macAddress: '00:58:2E:A5:A9:03',
    location: 'Saint-Louis',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-11'),
        action: 'Invalidé',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN2 240 PC 467 U',
    status: 'assigned',
    assignmentDate: new Date('2024-11-10'),
    macAddress: '00:16:4A:45:7E:19',
    location: 'Tambacounda',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-16'),
        action: 'Invalidé',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN1 693 NB 293 J',
    status: 'assigned',
    assignmentDate: new Date('2024-11-13'),
    macAddress: '00:79:E1:09:F6:10',
    location: 'Matam',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-20'),
        action: 'Attribué',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN1 331 IB 712 H',
    status: 'assigned',
    assignmentDate: new Date('2024-11-04'),
    macAddress: '00:36:EA:41:BA:BF',
    location: 'Matam',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-24'),
        action: 'Attribué',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN2 832 AP 613 N',
    status: 'assigned',
    assignmentDate: new Date('2024-11-07'),
    macAddress: '00:04:C6:95:6D:5F',
    location: 'Kaolack',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-17'),
        action: 'Créé',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN2 925 SX 573 Z',
    status: 'assigned',
    assignmentDate: new Date('2024-11-05'),
    macAddress: '00:6F:69:AD:BF:5A',
    location: 'Fatick',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-23'),
        action: 'Créé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN2 130 EF 484 C',
    status: 'assigned',
    assignmentDate: new Date('2024-11-05'),
    macAddress: '00:4A:37:F1:B1:2F',
    location: 'Louga',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-16'),
        action: 'Invalidé',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN2 159 ZJ 552 K',
    status: 'assigned',
    assignmentDate: new Date('2024-11-22'),
    macAddress: '00:97:02:C3:E3:9F',
    location: 'Matam',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-15'),
        action: 'Invalidé',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN2 787 GS 956 K',
    status: 'assigned',
    assignmentDate: new Date('2024-11-26'),
    macAddress: '00:5C:E7:CA:27:3B',
    location: 'Tambacounda',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-19'),
        action: 'Attribué',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN2 138 GC 107 R',
    status: 'assigned',
    assignmentDate: new Date('2024-11-23'),
    macAddress: '00:5F:8B:95:41:3A',
    location: 'Tambacounda',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-21'),
        action: 'Créé',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN1 554 FK 204 D',
    status: 'assigned',
    assignmentDate: new Date('2024-11-08'),
    macAddress: '00:19:F3:0E:D5:E9',
    location: 'Ziguinchor',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-07'),
        action: 'Attribué',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN2 745 SX 160 K',
    status: 'assigned',
    assignmentDate: new Date('2024-11-23'),
    macAddress: '00:11:3B:EE:69:80',
    location: 'Diourbel',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-13'),
        action: 'Créé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN1 930 EZ 995 L',
    status: 'assigned',
    assignmentDate: new Date('2024-11-10'),
    macAddress: '00:4A:C6:F2:73:C5',
    location: 'Dakar',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-21'),
        action: 'Créé',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN1 496 YJ 411 I',
    status: 'assigned',
    assignmentDate: new Date('2024-11-26'),
    macAddress: '00:75:73:38:B2:9B',
    location: 'Kaolack',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-14'),
        action: 'Attribué',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN1 343 CJ 797 B',
    status: 'assigned',
    assignmentDate: new Date('2024-11-31'),
    macAddress: '00:BA:F6:64:4B:E9',
    location: 'Diourbel',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-27'),
        action: 'Attribué',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN1 882 SQ 146 A',
    status: 'assigned',
    assignmentDate: new Date('2024-11-13'),
    macAddress: '00:0F:7F:7B:47:28',
    location: 'Kolda',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-08'),
        action: 'Invalidé',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN2 673 VB 333 L',
    status: 'assigned',
    assignmentDate: new Date('2024-11-23'),
    macAddress: '00:50:49:8B:E4:52',
    location: 'Dakar',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-18'),
        action: 'Attribué',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN1 985 HB 982 D',
    status: 'assigned',
    assignmentDate: new Date('2024-11-19'),
    macAddress: '00:C5:E2:39:59:7F',
    location: 'Tambacounda',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-10'),
        action: 'Attribué',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN2 566 GR 338 W',
    status: 'assigned',
    assignmentDate: new Date('2024-11-23'),
    macAddress: '00:28:A0:5A:C8:46',
    location: 'Fatick',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-15'),
        action: 'Invalidé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN2 888 YS 549 F',
    status: 'assigned',
    assignmentDate: new Date('2024-11-25'),
    macAddress: '00:9D:D1:D5:14:55',
    location: 'Dakar',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-26'),
        action: 'Créé',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN1 392 DK 338 X',
    status: 'assigned',
    assignmentDate: new Date('2024-11-19'),
    macAddress: '00:B8:A5:4F:6E:BB',
    location: 'Thiès',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-26'),
        action: 'Attribué',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN2 817 EP 873 C',
    status: 'assigned',
    assignmentDate: new Date('2024-11-26'),
    macAddress: '00:A3:82:B4:98:64',
    location: 'Louga',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-26'),
        action: 'Invalidé',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN2 872 NK 264 C',
    status: 'assigned',
    assignmentDate: new Date('2024-11-05'),
    macAddress: '00:6B:00:70:05:23',
    location: 'Saint-Louis',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-18'),
        action: 'Attribué',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN2 889 JY 627 C',
    status: 'assigned',
    assignmentDate: new Date('2024-11-22'),
    macAddress: '00:7A:8C:F4:BF:A3',
    location: 'Kaffrine',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-10'),
        action: 'Attribué',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN2 345 NS 607 J',
    status: 'assigned',
    assignmentDate: new Date('2024-11-05'),
    macAddress: '00:BD:98:9D:2C:7A',
    location: 'Kaffrine',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-24'),
        action: 'Invalidé',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN2 668 KB 183 J',
    status: 'assigned',
    assignmentDate: new Date('2024-11-14'),
    macAddress: '00:4D:5B:D3:5B:24',
    location: 'Saint-Louis',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-22'),
        action: 'Attribué',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN2 489 PR 452 K',
    status: 'assigned',
    assignmentDate: new Date('2024-11-23'),
    macAddress: '00:C4:6E:81:55:6A',
    location: 'Matam',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-07'),
        action: 'Créé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN2 988 FT 826 O',
    status: 'assigned',
    assignmentDate: new Date('2024-11-20'),
    macAddress: '00:1D:1A:4A:FE:BF',
    location: 'Diourbel',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-16'),
        action: 'Invalidé',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN2 606 LI 719 Z',
    status: 'assigned',
    assignmentDate: new Date('2024-11-12'),
    macAddress: '00:E0:41:A4:61:10',
    location: 'Kolda',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-23'),
        action: 'Invalidé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN1 133 NL 472 B',
    status: 'assigned',
    assignmentDate: new Date('2024-11-31'),
    macAddress: '00:3B:98:88:07:10',
    location: 'Tambacounda',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-13'),
        action: 'Invalidé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN2 721 EA 563 X',
    status: 'assigned',
    assignmentDate: new Date('2024-11-20'),
    macAddress: '00:5B:7E:07:3A:3E',
    location: 'Kolda',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-27'),
        action: 'Invalidé',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN1 181 RZ 181 T',
    status: 'assigned',
    assignmentDate: new Date('2024-11-24'),
    macAddress: '00:A9:53:A1:04:2B',
    location: 'Matam',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-03'),
        action: 'Attribué',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN1 778 AD 877 K',
    status: 'assigned',
    assignmentDate: new Date('2024-11-13'),
    macAddress: '00:F3:47:7A:ED:55',
    location: 'Fatick',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-18'),
        action: 'Créé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN1 881 NP 768 I',
    status: 'assigned',
    assignmentDate: new Date('2024-11-04'),
    macAddress: '00:C0:F4:26:77:D7',
    location: 'Kaffrine',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-30'),
        action: 'Invalidé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN1 420 AW 839 C',
    status: 'assigned',
    assignmentDate: new Date('2024-11-10'),
    macAddress: '00:98:AE:2D:75:C8',
    location: 'Saint-Louis',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-08'),
        action: 'Attribué',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN1 649 AO 223 T',
    status: 'assigned',
    assignmentDate: new Date('2024-11-09'),
    macAddress: '00:EE:A0:26:6F:4E',
    location: 'Kolda',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-08'),
        action: 'Attribué',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN1 658 AT 268 H',
    status: 'assigned',
    assignmentDate: new Date('2024-11-29'),
    macAddress: '00:3C:96:A4:08:D2',
    location: 'Diourbel',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-27'),
        action: 'Attribué',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN2 413 GR 677 E',
    status: 'assigned',
    assignmentDate: new Date('2024-11-26'),
    macAddress: '00:74:00:39:7E:B1',
    location: 'Kaffrine',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-03'),
        action: 'Invalidé',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN1 154 FX 274 L',
    status: 'assigned',
    assignmentDate: new Date('2024-11-05'),
    macAddress: '00:D0:12:39:5D:BB',
    location: 'Kolda',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-06'),
        action: 'Attribué',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN1 162 OY 884 Y',
    status: 'assigned',
    assignmentDate: new Date('2024-11-24'),
    macAddress: '00:44:0B:1A:6E:83',
    location: 'Tambacounda',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-11'),
        action: 'Créé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN1 377 FB 780 A',
    status: 'assigned',
    assignmentDate: new Date('2024-11-29'),
    macAddress: '00:FF:2F:2F:5A:91',
    location: 'Sédhiou',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-17'),
        action: 'Attribué',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN2 561 TA 889 Z',
    status: 'assigned',
    assignmentDate: new Date('2024-11-09'),
    macAddress: '00:2D:19:50:35:8F',
    location: 'Kaolack',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-21'),
        action: 'Créé',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN1 578 CL 321 Z',
    status: 'assigned',
    assignmentDate: new Date('2024-11-24'),
    macAddress: '00:8E:2F:D3:7E:6E',
    location: 'Louga',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-04'),
        action: 'Attribué',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN1 454 DT 117 A',
    status: 'assigned',
    assignmentDate: new Date('2024-11-23'),
    macAddress: '00:C9:2C:42:A8:81',
    location: 'Ziguinchor',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-06'),
        action: 'Invalidé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN2 791 BX 245 K',
    status: 'assigned',
    assignmentDate: new Date('2024-11-13'),
    macAddress: '00:2A:3D:5B:7F:6F',
    location: 'Kaolack',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-22'),
        action: 'Attribué',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN2 330 GR 407 V',
    status: 'assigned',
    assignmentDate: new Date('2024-11-12'),
    macAddress: '00:BC:64:46:67:3F',
    location: 'Ziguinchor',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-11'),
        action: 'Invalidé',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN1 204 JG 620 I',
    status: 'assigned',
    assignmentDate: new Date('2024-11-22'),
    macAddress: '00:82:F9:0D:55:D7',
    location: 'Thiès',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-15'),
        action: 'Invalidé',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN1 322 AS 915 I',
    status: 'assigned',
    assignmentDate: new Date('2024-11-13'),
    macAddress: '00:80:34:36:CD:DF',
    location: 'Fatick',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-31'),
        action: 'Créé',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN2 917 DU 858 M',
    status: 'assigned',
    assignmentDate: new Date('2024-11-06'),
    macAddress: '00:B1:00:16:15:3D',
    location: 'Sédhiou',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-09'),
        action: 'Attribué',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN1 197 VC 105 T',
    status: 'assigned',
    assignmentDate: new Date('2024-11-19'),
    macAddress: '00:05:63:BD:E6:F0',
    location: 'Kaolack',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-02'),
        action: 'Créé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN2 975 PH 129 X',
    status: 'assigned',
    assignmentDate: new Date('2024-11-20'),
    macAddress: '00:C8:FD:5C:B9:62',
    location: 'Kaffrine',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-13'),
        action: 'Invalidé',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN1 578 AY 980 H',
    status: 'assigned',
    assignmentDate: new Date('2024-11-20'),
    macAddress: '00:4A:D7:ED:22:19',
    location: 'Louga',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-08'),
        action: 'Attribué',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN1 921 IP 349 X',
    status: 'assigned',
    assignmentDate: new Date('2024-11-19'),
    macAddress: '00:D3:C0:E0:A9:35',
    location: 'Louga',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-25'),
        action: 'Créé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN1 517 MM 572 J',
    status: 'assigned',
    assignmentDate: new Date('2024-11-08'),
    macAddress: '00:B6:24:A1:E7:27',
    location: 'Tambacounda',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-13'),
        action: 'Créé',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN1 942 IC 992 K',
    status: 'assigned',
    assignmentDate: new Date('2024-11-27'),
    macAddress: '00:24:8B:9E:8F:BE',
    location: 'Saint-Louis',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-30'),
        action: 'Attribué',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN2 164 LJ 440 W',
    status: 'assigned',
    assignmentDate: new Date('2024-11-22'),
    macAddress: '00:0E:77:86:F1:7F',
    location: 'Sédhiou',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-20'),
        action: 'Invalidé',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN1 847 EW 245 J',
    status: 'assigned',
    assignmentDate: new Date('2024-11-19'),
    macAddress: '00:E4:D2:CE:0A:EB',
    location: 'Matam',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-10'),
        action: 'Invalidé',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN2 486 HW 842 R',
    status: 'assigned',
    assignmentDate: new Date('2024-11-15'),
    macAddress: '00:26:D3:08:55:5E',
    location: 'Diourbel',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-26'),
        action: 'Attribué',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN1 533 EC 276 A',
    status: 'assigned',
    assignmentDate: new Date('2024-11-03'),
    macAddress: '00:33:C5:B4:CB:C6',
    location: 'Saint-Louis',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-07'),
        action: 'Créé',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN2 670 LC 100 X',
    status: 'assigned',
    assignmentDate: new Date('2024-11-22'),
    macAddress: '00:38:EE:06:97:7D',
    location: 'Kolda',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-29'),
        action: 'Créé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN1 890 XG 218 T',
    status: 'assigned',
    assignmentDate: new Date('2024-11-29'),
    macAddress: '00:A2:AF:B6:46:A5',
    location: 'Fatick',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-05'),
        action: 'Attribué',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN2 308 WS 981 J',
    status: 'assigned',
    assignmentDate: new Date('2024-11-03'),
    macAddress: '00:CC:47:7C:F3:E1',
    location: 'Saint-Louis',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-10'),
        action: 'Invalidé',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN1 663 GH 819 W',
    status: 'assigned',
    assignmentDate: new Date('2024-11-19'),
    macAddress: '00:2A:2A:72:60:34',
    location: 'Diourbel',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-22'),
        action: 'Attribué',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN2 485 AG 373 Y',
    status: 'assigned',
    assignmentDate: new Date('2024-11-31'),
    macAddress: '00:2B:2A:DD:51:47',
    location: 'Louga',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-29'),
        action: 'Invalidé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN2 846 XJ 965 P',
    status: 'assigned',
    assignmentDate: new Date('2024-11-11'),
    macAddress: '00:F1:47:5E:15:42',
    location: 'Louga',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-30'),
        action: 'Invalidé',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN2 108 LO 836 G',
    status: 'assigned',
    assignmentDate: new Date('2024-11-21'),
    macAddress: '00:AB:0E:1B:2A:BE',
    location: 'Dakar',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-24'),
        action: 'Attribué',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN1 870 RU 495 T',
    status: 'assigned',
    assignmentDate: new Date('2024-11-30'),
    macAddress: '00:7E:CB:D6:F4:B1',
    location: 'Kaffrine',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-30'),
        action: 'Attribué',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN2 461 JI 208 H',
    status: 'assigned',
    assignmentDate: new Date('2024-11-08'),
    macAddress: '00:29:56:25:82:64',
    location: 'Dakar',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-08'),
        action: 'Créé',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN2 214 PF 595 X',
    status: 'assigned',
    assignmentDate: new Date('2024-11-17'),
    macAddress: '00:91:3E:D7:B4:E1',
    location: 'Ziguinchor',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-19'),
        action: 'Invalidé',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN2 697 SQ 735 K',
    status: 'assigned',
    assignmentDate: new Date('2024-11-14'),
    macAddress: '00:33:7A:2A:F1:56',
    location: 'Louga',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-13'),
        action: 'Créé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN2 988 RR 864 H',
    status: 'assigned',
    assignmentDate: new Date('2024-11-02'),
    macAddress: '00:A3:5E:83:03:6E',
    location: 'Kaolack',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-15'),
        action: 'Attribué',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN2 606 QD 985 Z',
    status: 'assigned',
    assignmentDate: new Date('2024-11-04'),
    macAddress: '00:BE:6F:3F:51:7E',
    location: 'Sédhiou',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-19'),
        action: 'Attribué',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN1 226 AY 115 N',
    status: 'assigned',
    assignmentDate: new Date('2024-11-09'),
    macAddress: '00:8E:16:B4:5D:DD',
    location: 'Kaolack',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-05'),
        action: 'Créé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN1 752 TC 103 F',
    status: 'assigned',
    assignmentDate: new Date('2024-11-24'),
    macAddress: '00:A7:76:CE:FB:3A',
    location: 'Saint-Louis',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-07'),
        action: 'Attribué',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN2 494 LM 320 B',
    status: 'assigned',
    assignmentDate: new Date('2024-11-20'),
    macAddress: '00:D9:31:0C:36:77',
    location: 'Sédhiou',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-15'),
        action: 'Attribué',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN1 766 HM 164 O',
    status: 'assigned',
    assignmentDate: new Date('2024-11-08'),
    macAddress: '00:41:99:CD:5A:05',
    location: 'Matam',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-24'),
        action: 'Créé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN2 660 OQ 200 V',
    status: 'assigned',
    assignmentDate: new Date('2024-11-02'),
    macAddress: '00:20:BB:F9:B3:3E',
    location: 'Kolda',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-15'),
        action: 'Attribué',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN1 704 WV 951 W',
    status: 'assigned',
    assignmentDate: new Date('2024-11-17'),
    macAddress: '00:82:0F:FF:C4:2C',
    location: 'Matam',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-16'),
        action: 'Invalidé',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN1 988 NL 916 N',
    status: 'assigned',
    assignmentDate: new Date('2024-11-02'),
    macAddress: '00:75:84:B9:72:06',
    location: 'Diourbel',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-05'),
        action: 'Invalidé',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN2 590 MF 560 L',
    status: 'assigned',
    assignmentDate: new Date('2024-11-25'),
    macAddress: '00:5A:16:62:59:07',
    location: 'Kaffrine',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-25'),
        action: 'Attribué',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN1 807 EU 719 X',
    status: 'assigned',
    assignmentDate: new Date('2024-11-23'),
    macAddress: '00:0C:7E:73:72:BA',
    location: 'Thiès',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-17'),
        action: 'Attribué',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN2 659 DR 632 P',
    status: 'assigned',
    assignmentDate: new Date('2024-11-27'),
    macAddress: '00:C8:BA:EE:5D:81',
    location: 'Kolda',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-22'),
        action: 'Invalidé',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN2 288 HI 702 N',
    status: 'assigned',
    assignmentDate: new Date('2024-11-08'),
    macAddress: '00:C6:A8:63:1C:C8',
    location: 'Louga',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-15'),
        action: 'Attribué',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN2 957 XN 546 F',
    status: 'assigned',
    assignmentDate: new Date('2024-11-12'),
    macAddress: '00:B3:7D:40:97:F2',
    location: 'Kolda',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-31'),
        action: 'Invalidé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN1 380 NH 504 R',
    status: 'assigned',
    assignmentDate: new Date('2024-11-28'),
    macAddress: '00:74:E7:60:6C:2B',
    location: 'Kaolack',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-31'),
        action: 'Invalidé',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN1 905 IK 232 R',
    status: 'assigned',
    assignmentDate: new Date('2024-11-02'),
    macAddress: '00:E7:7B:CA:17:24',
    location: 'Sédhiou',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-20'),
        action: 'Créé',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN1 345 QC 905 K',
    status: 'assigned',
    assignmentDate: new Date('2024-11-29'),
    macAddress: '00:5A:C9:0B:85:5E',
    location: 'Kolda',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-18'),
        action: 'Attribué',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN1 114 LU 627 P',
    status: 'assigned',
    assignmentDate: new Date('2024-11-13'),
    macAddress: '00:6C:84:19:69:5B',
    location: 'Thiès',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-22'),
        action: 'Invalidé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN2 450 VT 106 S',
    status: 'assigned',
    assignmentDate: new Date('2024-11-28'),
    macAddress: '00:FA:C7:8E:E5:B6',
    location: 'Thiès',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-24'),
        action: 'Invalidé',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN1 438 ZM 567 S',
    status: 'assigned',
    assignmentDate: new Date('2024-11-24'),
    macAddress: '00:5D:89:29:86:AB',
    location: 'Fatick',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-08'),
        action: 'Créé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN2 556 UI 207 Q',
    status: 'assigned',
    assignmentDate: new Date('2024-11-29'),
    macAddress: '00:09:2B:23:5C:37',
    location: 'Diourbel',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-09'),
        action: 'Attribué',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN2 499 YE 459 Z',
    status: 'assigned',
    assignmentDate: new Date('2024-11-21'),
    macAddress: '00:7F:33:3A:27:EA',
    location: 'Ziguinchor',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-03'),
        action: 'Créé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN2 388 WB 833 A',
    status: 'assigned',
    assignmentDate: new Date('2024-11-07'),
    macAddress: '00:CE:1A:07:48:91',
    location: 'Diourbel',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-31'),
        action: 'Créé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN2 110 NI 839 V',
    status: 'assigned',
    assignmentDate: new Date('2024-11-17'),
    macAddress: '00:30:9F:CE:14:8B',
    location: 'Ziguinchor',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-02'),
        action: 'Créé',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN1 851 JJ 707 Q',
    status: 'assigned',
    assignmentDate: new Date('2024-11-07'),
    macAddress: '00:C5:C9:48:7E:BF',
    location: 'Kaffrine',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-02'),
        action: 'Créé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN1 817 DG 862 J',
    status: 'assigned',
    assignmentDate: new Date('2024-11-23'),
    macAddress: '00:A7:74:6B:CD:A9',
    location: 'Saint-Louis',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-31'),
        action: 'Attribué',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN2 714 MP 584 K',
    status: 'assigned',
    assignmentDate: new Date('2024-11-17'),
    macAddress: '00:39:98:7C:3A:41',
    location: 'Ziguinchor',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-12'),
        action: 'Invalidé',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN1 176 PQ 296 G',
    status: 'assigned',
    assignmentDate: new Date('2024-11-06'),
    macAddress: '00:86:F5:6D:80:EF',
    location: 'Kolda',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-29'),
        action: 'Invalidé',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN1 931 BI 582 P',
    status: 'assigned',
    assignmentDate: new Date('2024-11-25'),
    macAddress: '00:B5:36:5A:B2:F6',
    location: 'Diourbel',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-31'),
        action: 'Attribué',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN1 187 VW 412 G',
    status: 'assigned',
    assignmentDate: new Date('2024-11-19'),
    macAddress: '00:CC:CA:F8:2D:1A',
    location: 'Matam',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-10'),
        action: 'Invalidé',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN1 835 RU 691 W',
    status: 'assigned',
    assignmentDate: new Date('2024-11-31'),
    macAddress: '00:53:8D:1A:B4:38',
    location: 'Louga',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-14'),
        action: 'Attribué',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN2 883 OH 594 R',
    status: 'assigned',
    assignmentDate: new Date('2024-11-22'),
    macAddress: '00:61:ED:E8:1C:9E',
    location: 'Kolda',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-15'),
        action: 'Créé',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN2 451 QJ 250 F',
    status: 'assigned',
    assignmentDate: new Date('2024-11-26'),
    macAddress: '00:48:97:F2:A2:46',
    location: 'Saint-Louis',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-07'),
        action: 'Attribué',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN1 300 ZC 843 M',
    status: 'assigned',
    assignmentDate: new Date('2024-11-28'),
    macAddress: '00:32:1B:30:19:ED',
    location: 'Kolda',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-09'),
        action: 'Attribué',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN2 768 DQ 913 E',
    status: 'assigned',
    assignmentDate: new Date('2024-11-07'),
    macAddress: '00:8D:23:81:07:17',
    location: 'Sédhiou',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-22'),
        action: 'Invalidé',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN2 272 IN 693 R',
    status: 'assigned',
    assignmentDate: new Date('2024-11-04'),
    macAddress: '00:42:3C:68:44:84',
    location: 'Saint-Louis',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-11'),
        action: 'Attribué',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN2 580 HK 649 K',
    status: 'assigned',
    assignmentDate: new Date('2024-11-20'),
    macAddress: '00:89:7E:AC:E0:51',
    location: 'Kaffrine',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-21'),
        action: 'Invalidé',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN1 403 AO 618 K',
    status: 'assigned',
    assignmentDate: new Date('2024-11-13'),
    macAddress: '00:DB:C5:57:DC:0A',
    location: 'Fatick',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-31'),
        action: 'Créé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN2 483 BM 350 U',
    status: 'assigned',
    assignmentDate: new Date('2024-11-07'),
    macAddress: '00:28:59:9B:4D:5D',
    location: 'Kolda',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-17'),
        action: 'Invalidé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN2 705 MN 528 N',
    status: 'assigned',
    assignmentDate: new Date('2024-11-12'),
    macAddress: '00:35:EB:FD:A3:20',
    location: 'Thiès',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-14'),
        action: 'Invalidé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN2 887 VB 656 O',
    status: 'assigned',
    assignmentDate: new Date('2024-11-13'),
    macAddress: '00:7A:8A:7D:56:09',
    location: 'Diourbel',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-09'),
        action: 'Invalidé',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN1 485 VF 724 D',
    status: 'assigned',
    assignmentDate: new Date('2024-11-28'),
    macAddress: '00:DA:F9:AF:F7:92',
    location: 'Kolda',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-19'),
        action: 'Invalidé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN2 743 TW 389 L',
    status: 'assigned',
    assignmentDate: new Date('2024-11-28'),
    macAddress: '00:E8:48:8D:04:BF',
    location: 'Kaffrine',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-09'),
        action: 'Invalidé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN2 563 JM 644 O',
    status: 'assigned',
    assignmentDate: new Date('2024-11-22'),
    macAddress: '00:C1:71:DB:5F:2A',
    location: 'Tambacounda',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-20'),
        action: 'Attribué',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN2 877 QX 397 I',
    status: 'assigned',
    assignmentDate: new Date('2024-11-18'),
    macAddress: '00:0E:B5:F8:6C:39',
    location: 'Thiès',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-04'),
        action: 'Créé',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN2 410 VG 538 Z',
    status: 'assigned',
    assignmentDate: new Date('2024-11-13'),
    macAddress: '00:E6:EF:98:32:D4',
    location: 'Kaffrine',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-31'),
        action: 'Créé',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN1 703 WY 765 P',
    status: 'assigned',
    assignmentDate: new Date('2024-11-09'),
    macAddress: '00:AA:AB:30:86:D5',
    location: 'Dakar',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-08'),
        action: 'Créé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN2 438 SG 569 U',
    status: 'assigned',
    assignmentDate: new Date('2024-11-08'),
    macAddress: '00:27:72:4C:F3:3B',
    location: 'Matam',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-23'),
        action: 'Créé',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN2 269 HV 907 V',
    status: 'assigned',
    assignmentDate: new Date('2024-11-03'),
    macAddress: '00:DC:1A:86:29:1A',
    location: 'Kaolack',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-09'),
        action: 'Attribué',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN1 147 PE 633 U',
    status: 'assigned',
    assignmentDate: new Date('2024-11-27'),
    macAddress: '00:44:55:F5:68:63',
    location: 'Louga',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-14'),
        action: 'Attribué',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN2 287 QR 608 M',
    status: 'assigned',
    assignmentDate: new Date('2024-11-08'),
    macAddress: '00:65:80:98:F9:A4',
    location: 'Matam',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-02'),
        action: 'Créé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN2 631 IE 325 O',
    status: 'assigned',
    assignmentDate: new Date('2024-11-26'),
    macAddress: '00:75:23:8B:AC:85',
    location: 'Thiès',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-19'),
        action: 'Attribué',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN1 581 UB 271 R',
    status: 'assigned',
    assignmentDate: new Date('2024-11-16'),
    macAddress: '00:DE:31:C3:8B:AE',
    location: 'Tambacounda',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-15'),
        action: 'Attribué',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN1 132 ZI 516 U',
    status: 'assigned',
    assignmentDate: new Date('2024-11-18'),
    macAddress: '00:67:87:6A:00:41',
    location: 'Dakar',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-27'),
        action: 'Invalidé',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN2 355 YG 863 T',
    status: 'assigned',
    assignmentDate: new Date('2024-11-29'),
    macAddress: '00:5F:79:24:A3:B4',
    location: 'Kaffrine',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-07'),
        action: 'Créé',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN2 251 UE 248 C',
    status: 'assigned',
    assignmentDate: new Date('2024-11-02'),
    macAddress: '00:55:FD:8A:08:AC',
    location: 'Dakar',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-10'),
        action: 'Créé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN2 530 QH 226 V',
    status: 'assigned',
    assignmentDate: new Date('2024-11-05'),
    macAddress: '00:C3:EF:EF:F2:EB',
    location: 'Matam',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-11'),
        action: 'Invalidé',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN2 438 CO 978 I',
    status: 'assigned',
    assignmentDate: new Date('2024-11-14'),
    macAddress: '00:47:67:A0:39:9B',
    location: 'Kolda',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-16'),
        action: 'Créé',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN1 339 GU 955 L',
    status: 'assigned',
    assignmentDate: new Date('2024-11-28'),
    macAddress: '00:81:72:D8:96:9C',
    location: 'Sédhiou',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-18'),
        action: 'Attribué',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN2 888 RF 856 T',
    status: 'assigned',
    assignmentDate: new Date('2024-11-27'),
    macAddress: '00:91:C7:75:23:FF',
    location: 'Sédhiou',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-11'),
        action: 'Invalidé',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN1 911 AD 548 V',
    status: 'assigned',
    assignmentDate: new Date('2024-11-18'),
    macAddress: '00:7C:C3:62:CC:C1',
    location: 'Louga',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-11'),
        action: 'Attribué',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN2 346 JG 713 O',
    status: 'assigned',
    assignmentDate: new Date('2024-11-21'),
    macAddress: '00:50:8F:46:53:C0',
    location: 'Louga',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-23'),
        action: 'Attribué',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN1 842 DN 404 Q',
    status: 'assigned',
    assignmentDate: new Date('2024-11-30'),
    macAddress: '00:F3:56:84:C3:CB',
    location: 'Saint-Louis',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-08'),
        action: 'Invalidé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN2 423 TP 729 P',
    status: 'assigned',
    assignmentDate: new Date('2024-11-15'),
    macAddress: '00:EE:A9:CE:49:EF',
    location: 'Matam',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-22'),
        action: 'Invalidé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN2 185 SH 355 P',
    status: 'assigned',
    assignmentDate: new Date('2024-11-17'),
    macAddress: '00:74:50:9E:21:70',
    location: 'Diourbel',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-22'),
        action: 'Invalidé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN1 602 LZ 141 O',
    status: 'assigned',
    assignmentDate: new Date('2024-11-08'),
    macAddress: '00:EE:22:81:CD:A8',
    location: 'Louga',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-23'),
        action: 'Attribué',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN2 329 TS 960 N',
    status: 'assigned',
    assignmentDate: new Date('2024-11-20'),
    macAddress: '00:6E:1D:FB:45:89',
    location: 'Louga',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-11'),
        action: 'Attribué',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN2 558 GR 589 E',
    status: 'assigned',
    assignmentDate: new Date('2024-11-26'),
    macAddress: '00:D7:47:4B:3C:DD',
    location: 'Sédhiou',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-02'),
        action: 'Invalidé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN2 866 DR 568 B',
    status: 'assigned',
    assignmentDate: new Date('2024-11-06'),
    macAddress: '00:9F:3B:A0:AA:36',
    location: 'Fatick',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-18'),
        action: 'Créé',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN2 348 BZ 452 O',
    status: 'assigned',
    assignmentDate: new Date('2024-11-25'),
    macAddress: '00:D8:CE:EB:8E:FD',
    location: 'Louga',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-15'),
        action: 'Attribué',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN1 922 HJ 867 D',
    status: 'assigned',
    assignmentDate: new Date('2024-11-24'),
    macAddress: '00:C7:4B:B1:AF:95',
    location: 'Kaffrine',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-14'),
        action: 'Créé',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN1 308 TM 169 W',
    status: 'assigned',
    assignmentDate: new Date('2024-11-18'),
    macAddress: '00:39:09:B1:17:B0',
    location: 'Thiès',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-21'),
        action: 'Invalidé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN1 176 ST 871 Y',
    status: 'assigned',
    assignmentDate: new Date('2024-11-18'),
    macAddress: '00:17:27:AC:00:B9',
    location: 'Thiès',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-22'),
        action: 'Créé',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN1 358 FU 473 B',
    status: 'assigned',
    assignmentDate: new Date('2024-11-13'),
    macAddress: '00:0B:B9:4B:05:2F',
    location: 'Tambacounda',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-29'),
        action: 'Attribué',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN1 540 VC 249 H',
    status: 'assigned',
    assignmentDate: new Date('2024-11-25'),
    macAddress: '00:8A:2B:F9:CC:68',
    location: 'Ziguinchor',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-31'),
        action: 'Attribué',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN1 696 IZ 476 P',
    status: 'assigned',
    assignmentDate: new Date('2024-11-13'),
    macAddress: '00:88:02:C8:25:33',
    location: 'Ziguinchor',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-17'),
        action: 'Créé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN2 794 CH 440 H',
    status: 'assigned',
    assignmentDate: new Date('2024-11-11'),
    macAddress: '00:10:2D:FD:3B:BE',
    location: 'Fatick',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-10'),
        action: 'Attribué',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN1 815 XJ 643 U',
    status: 'assigned',
    assignmentDate: new Date('2024-11-10'),
    macAddress: '00:66:24:62:2D:11',
    location: 'Ziguinchor',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-12'),
        action: 'Créé',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN2 705 JC 902 S',
    status: 'assigned',
    assignmentDate: new Date('2024-11-16'),
    macAddress: '00:2B:90:B1:DA:EB',
    location: 'Louga',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-20'),
        action: 'Créé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN2 233 TL 860 B',
    status: 'assigned',
    assignmentDate: new Date('2024-11-10'),
    macAddress: '00:69:0E:4D:B8:46',
    location: 'Louga',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-20'),
        action: 'Attribué',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN1 199 XB 760 R',
    status: 'assigned',
    assignmentDate: new Date('2024-11-28'),
    macAddress: '00:5C:6E:A7:26:C0',
    location: 'Kolda',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-15'),
        action: 'Invalidé',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN2 114 XM 647 U',
    status: 'assigned',
    assignmentDate: new Date('2024-11-14'),
    macAddress: '00:CC:02:4E:F7:FE',
    location: 'Dakar',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-31'),
        action: 'Invalidé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN1 821 ZX 694 U',
    status: 'assigned',
    assignmentDate: new Date('2024-11-23'),
    macAddress: '00:33:EF:9E:A5:C2',
    location: 'Diourbel',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-19'),
        action: 'Attribué',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN1 228 ZT 169 Q',
    status: 'assigned',
    assignmentDate: new Date('2024-11-03'),
    macAddress: '00:67:C0:9D:81:FE',
    location: 'Fatick',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-26'),
        action: 'Attribué',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN1 938 PT 947 I',
    status: 'assigned',
    assignmentDate: new Date('2024-11-10'),
    macAddress: '00:7C:8A:E1:31:04',
    location: 'Kaolack',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-13'),
        action: 'Invalidé',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN1 434 EI 414 O',
    status: 'assigned',
    assignmentDate: new Date('2024-11-26'),
    macAddress: '00:76:E1:3E:FF:BC',
    location: 'Fatick',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-21'),
        action: 'Invalidé',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN1 277 VE 384 V',
    status: 'assigned',
    assignmentDate: new Date('2024-11-25'),
    macAddress: '00:F4:09:77:12:9C',
    location: 'Louga',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-30'),
        action: 'Invalidé',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN1 961 UX 873 Z',
    status: 'assigned',
    assignmentDate: new Date('2024-11-05'),
    macAddress: '00:EB:96:54:C7:32',
    location: 'Diourbel',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-18'),
        action: 'Attribué',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN2 781 RH 196 M',
    status: 'assigned',
    assignmentDate: new Date('2024-11-19'),
    macAddress: '00:3C:07:23:81:AB',
    location: 'Louga',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-26'),
        action: 'Invalidé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN1 442 BQ 988 I',
    status: 'assigned',
    assignmentDate: new Date('2024-11-05'),
    macAddress: '00:9C:D8:BD:72:8A',
    location: 'Fatick',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-23'),
        action: 'Créé',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN2 233 GU 893 T',
    status: 'assigned',
    assignmentDate: new Date('2024-11-04'),
    macAddress: '00:6B:17:5D:EE:0F',
    location: 'Kolda',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-14'),
        action: 'Invalidé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN2 574 ET 633 T',
    status: 'assigned',
    assignmentDate: new Date('2024-11-08'),
    macAddress: '00:65:99:9D:50:62',
    location: 'Tambacounda',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-09'),
        action: 'Créé',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN2 454 UX 444 W',
    status: 'assigned',
    assignmentDate: new Date('2024-11-19'),
    macAddress: '00:3D:E0:0B:8B:95',
    location: 'Louga',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-11'),
        action: 'Invalidé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN1 891 TQ 828 B',
    status: 'assigned',
    assignmentDate: new Date('2024-11-02'),
    macAddress: '00:E3:DE:B8:4F:8B',
    location: 'Diourbel',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-03'),
        action: 'Créé',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN1 697 CH 385 P',
    status: 'assigned',
    assignmentDate: new Date('2024-11-07'),
    macAddress: '00:3E:00:18:6E:91',
    location: 'Matam',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-08'),
        action: 'Invalidé',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN2 501 LR 171 B',
    status: 'assigned',
    assignmentDate: new Date('2024-11-13'),
    macAddress: '00:5E:96:81:CF:A2',
    location: 'Saint-Louis',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-02'),
        action: 'Créé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN2 539 XC 996 W',
    status: 'assigned',
    assignmentDate: new Date('2024-11-10'),
    macAddress: '00:82:83:5F:26:CE',
    location: 'Ziguinchor',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-08'),
        action: 'Attribué',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN2 748 BL 164 O',
    status: 'assigned',
    assignmentDate: new Date('2024-11-19'),
    macAddress: '00:0E:9E:CA:99:6D',
    location: 'Fatick',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-23'),
        action: 'Attribué',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN2 956 FZ 688 S',
    status: 'assigned',
    assignmentDate: new Date('2024-11-21'),
    macAddress: '00:32:E3:31:F9:CB',
    location: 'Kaffrine',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-07'),
        action: 'Créé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN2 818 XM 268 V',
    status: 'assigned',
    assignmentDate: new Date('2024-11-22'),
    macAddress: '00:27:5E:28:90:5C',
    location: 'Fatick',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-03'),
        action: 'Créé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN1 262 QN 918 T',
    status: 'assigned',
    assignmentDate: new Date('2024-11-26'),
    macAddress: '00:01:5E:FB:AD:C8',
    location: 'Diourbel',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-20'),
        action: 'Attribué',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN2 662 RJ 559 H',
    status: 'assigned',
    assignmentDate: new Date('2024-11-25'),
    macAddress: '00:84:80:B7:1F:C6',
    location: 'Diourbel',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-09'),
        action: 'Attribué',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN2 212 MD 326 F',
    status: 'assigned',
    assignmentDate: new Date('2024-11-20'),
    macAddress: '00:6A:99:A7:78:A5',
    location: 'Kaffrine',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-09'),
        action: 'Attribué',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN2 934 TE 177 G',
    status: 'assigned',
    assignmentDate: new Date('2024-11-26'),
    macAddress: '00:B9:30:81:28:51',
    location: 'Fatick',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-29'),
        action: 'Attribué',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN2 610 GM 865 U',
    status: 'assigned',
    assignmentDate: new Date('2024-11-08'),
    macAddress: '00:2E:08:32:43:FD',
    location: 'Tambacounda',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-26'),
        action: 'Attribué',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN2 647 SI 927 N',
    status: 'assigned',
    assignmentDate: new Date('2024-11-31'),
    macAddress: '00:DD:AA:E5:80:F7',
    location: 'Kolda',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-23'),
        action: 'Attribué',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN1 161 ON 893 D',
    status: 'assigned',
    assignmentDate: new Date('2024-11-02'),
    macAddress: '00:66:34:D5:CE:6C',
    location: 'Dakar',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-05'),
        action: 'Attribué',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN1 757 FR 519 N',
    status: 'assigned',
    assignmentDate: new Date('2024-11-13'),
    macAddress: '00:70:AF:96:81:47',
    location: 'Diourbel',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-22'),
        action: 'Invalidé',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN1 835 PT 746 Z',
    status: 'assigned',
    assignmentDate: new Date('2024-11-24'),
    macAddress: '00:C3:6D:38:EC:99',
    location: 'Matam',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-14'),
        action: 'Attribué',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN1 491 LP 685 Q',
    status: 'assigned',
    assignmentDate: new Date('2024-11-07'),
    macAddress: '00:21:78:17:91:CF',
    location: 'Dakar',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-04'),
        action: 'Invalidé',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN2 920 KW 200 R',
    status: 'assigned',
    assignmentDate: new Date('2024-11-05'),
    macAddress: '00:64:F8:31:D1:C5',
    location: 'Diourbel',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-03'),
        action: 'Créé',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN1 400 UL 164 P',
    status: 'assigned',
    assignmentDate: new Date('2024-11-05'),
    macAddress: '00:F1:3C:06:ED:9F',
    location: 'Louga',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-29'),
        action: 'Créé',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN1 722 PP 896 Y',
    status: 'assigned',
    assignmentDate: new Date('2024-11-14'),
    macAddress: '00:C3:DA:CA:A1:D0',
    location: 'Fatick',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-26'),
        action: 'Créé',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN1 657 ZH 593 B',
    status: 'assigned',
    assignmentDate: new Date('2024-11-19'),
    macAddress: '00:C8:CB:EB:DB:0E',
    location: 'Saint-Louis',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-05'),
        action: 'Créé',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN1 579 BD 260 U',
    status: 'assigned',
    assignmentDate: new Date('2024-11-31'),
    macAddress: '00:2E:18:7B:06:19',
    location: 'Tambacounda',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-09'),
        action: 'Créé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN2 403 QU 171 P',
    status: 'assigned',
    assignmentDate: new Date('2024-11-11'),
    macAddress: '00:19:C7:98:C1:E2',
    location: 'Kaolack',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-26'),
        action: 'Invalidé',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN2 509 XT 350 O',
    status: 'assigned',
    assignmentDate: new Date('2024-11-18'),
    macAddress: '00:DB:EE:26:57:0E',
    location: 'Ziguinchor',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-04'),
        action: 'Attribué',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN1 428 WP 671 A',
    status: 'assigned',
    assignmentDate: new Date('2024-11-26'),
    macAddress: '00:A7:AF:01:B2:4D',
    location: 'Thiès',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-03'),
        action: 'Invalidé',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN2 110 RW 109 O',
    status: 'assigned',
    assignmentDate: new Date('2024-11-28'),
    macAddress: '00:47:AD:E9:70:A4',
    location: 'Ziguinchor',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-29'),
        action: 'Attribué',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN1 969 XH 984 J',
    status: 'assigned',
    assignmentDate: new Date('2024-11-10'),
    macAddress: '00:4C:BE:D7:D3:A7',
    location: 'Tambacounda',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-06'),
        action: 'Invalidé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN2 929 NH 884 T',
    status: 'assigned',
    assignmentDate: new Date('2024-11-27'),
    macAddress: '00:DB:5D:95:8D:ED',
    location: 'Louga',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-27'),
        action: 'Créé',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN1 973 GX 575 J',
    status: 'assigned',
    assignmentDate: new Date('2024-11-14'),
    macAddress: '00:4B:29:28:F7:3D',
    location: 'Matam',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-06'),
        action: 'Attribué',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN1 787 GM 284 C',
    status: 'assigned',
    assignmentDate: new Date('2024-11-20'),
    macAddress: '00:C2:66:95:9A:AD',
    location: 'Thiès',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-06'),
        action: 'Attribué',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN1 982 PU 631 W',
    status: 'assigned',
    assignmentDate: new Date('2024-11-03'),
    macAddress: '00:A2:4E:78:02:CC',
    location: 'Ziguinchor',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-09'),
        action: 'Invalidé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN2 223 TG 875 E',
    status: 'assigned',
    assignmentDate: new Date('2024-11-08'),
    macAddress: '00:27:94:AB:6B:15',
    location: 'Kaolack',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-27'),
        action: 'Créé',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN2 901 BH 853 B',
    status: 'assigned',
    assignmentDate: new Date('2024-11-07'),
    macAddress: '00:42:0C:37:5A:46',
    location: 'Kaffrine',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-18'),
        action: 'Créé',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN1 118 QH 765 O',
    status: 'assigned',
    assignmentDate: new Date('2024-11-27'),
    macAddress: '00:FD:35:FC:82:B3',
    location: 'Dakar',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-05'),
        action: 'Attribué',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN2 138 LM 823 F',
    status: 'assigned',
    assignmentDate: new Date('2024-11-31'),
    macAddress: '00:58:1A:39:DF:0E',
    location: 'Thiès',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-24'),
        action: 'Attribué',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN2 697 EP 783 P',
    status: 'assigned',
    assignmentDate: new Date('2024-11-05'),
    macAddress: '00:A5:47:B7:C5:DE',
    location: 'Tambacounda',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-09'),
        action: 'Attribué',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN2 498 GN 200 F',
    status: 'assigned',
    assignmentDate: new Date('2024-11-18'),
    macAddress: '00:34:F1:BE:A8:32',
    location: 'Kaolack',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-14'),
        action: 'Attribué',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN1 744 OQ 719 E',
    status: 'assigned',
    assignmentDate: new Date('2024-11-20'),
    macAddress: '00:90:57:AC:28:42',
    location: 'Kaffrine',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-05'),
        action: 'Attribué',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN1 420 ZR 245 L',
    status: 'assigned',
    assignmentDate: new Date('2024-11-26'),
    macAddress: '00:73:22:84:58:AB',
    location: 'Kaffrine',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-18'),
        action: 'Invalidé',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN1 509 CF 653 H',
    status: 'assigned',
    assignmentDate: new Date('2024-11-05'),
    macAddress: '00:B5:FD:53:4D:5A',
    location: 'Saint-Louis',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-11'),
        action: 'Créé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN1 526 IA 661 S',
    status: 'assigned',
    assignmentDate: new Date('2024-11-13'),
    macAddress: '00:BB:12:96:CF:0E',
    location: 'Dakar',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-16'),
        action: 'Créé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN2 314 BT 780 F',
    status: 'assigned',
    assignmentDate: new Date('2024-11-04'),
    macAddress: '00:DA:D6:30:DD:ED',
    location: 'Dakar',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-21'),
        action: 'Créé',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN1 114 NJ 115 J',
    status: 'assigned',
    assignmentDate: new Date('2024-11-22'),
    macAddress: '00:F8:0F:13:F7:10',
    location: 'Sédhiou',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-18'),
        action: 'Invalidé',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN2 875 BC 335 H',
    status: 'assigned',
    assignmentDate: new Date('2024-11-19'),
    macAddress: '00:7D:85:84:C0:2E',
    location: 'Ziguinchor',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-09'),
        action: 'Créé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN1 956 IM 709 O',
    status: 'assigned',
    assignmentDate: new Date('2024-11-29'),
    macAddress: '00:D8:19:54:B4:0A',
    location: 'Fatick',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-28'),
        action: 'Invalidé',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN2 231 AX 360 I',
    status: 'assigned',
    assignmentDate: new Date('2024-11-02'),
    macAddress: '00:AC:0F:69:B2:45',
    location: 'Tambacounda',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-20'),
        action: 'Attribué',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN1 244 QW 942 P',
    status: 'assigned',
    assignmentDate: new Date('2024-11-07'),
    macAddress: '00:50:77:CE:65:36',
    location: 'Sédhiou',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-09'),
        action: 'Créé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN2 459 JA 176 K',
    status: 'assigned',
    assignmentDate: new Date('2024-11-30'),
    macAddress: '00:A9:1F:AA:9C:07',
    location: 'Dakar',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-21'),
        action: 'Attribué',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN2 669 TA 903 V',
    status: 'assigned',
    assignmentDate: new Date('2024-11-30'),
    macAddress: '00:F2:98:0A:34:4B',
    location: 'Dakar',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-31'),
        action: 'Créé',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN1 414 GW 331 L',
    status: 'assigned',
    assignmentDate: new Date('2024-11-04'),
    macAddress: '00:CD:AE:08:DA:61',
    location: 'Saint-Louis',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-29'),
        action: 'Créé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN2 481 YF 137 N',
    status: 'assigned',
    assignmentDate: new Date('2024-11-24'),
    macAddress: '00:38:45:66:F5:81',
    location: 'Ziguinchor',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-16'),
        action: 'Attribué',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN2 140 ZT 636 S',
    status: 'assigned',
    assignmentDate: new Date('2024-11-23'),
    macAddress: '00:4F:BE:64:B8:B9',
    location: 'Fatick',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-02'),
        action: 'Invalidé',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN2 680 QN 860 I',
    status: 'assigned',
    assignmentDate: new Date('2024-11-13'),
    macAddress: '00:39:36:7E:E2:D5',
    location: 'Fatick',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-14'),
        action: 'Créé',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN1 443 LJ 355 O',
    status: 'assigned',
    assignmentDate: new Date('2024-11-02'),
    macAddress: '00:FC:FD:12:0E:12',
    location: 'Sédhiou',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-18'),
        action: 'Créé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN2 285 DQ 280 W',
    status: 'assigned',
    assignmentDate: new Date('2024-11-22'),
    macAddress: '00:CE:8F:FA:28:DB',
    location: 'Kolda',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-15'),
        action: 'Créé',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN1 478 FQ 304 A',
    status: 'assigned',
    assignmentDate: new Date('2024-11-17'),
    macAddress: '00:39:52:C8:88:A1',
    location: 'Saint-Louis',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-18'),
        action: 'Créé',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN2 217 BQ 115 O',
    status: 'assigned',
    assignmentDate: new Date('2024-11-22'),
    macAddress: '00:A0:01:4A:59:BA',
    location: 'Kolda',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-10'),
        action: 'Attribué',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN2 368 KD 803 M',
    status: 'assigned',
    assignmentDate: new Date('2024-11-16'),
    macAddress: '00:8A:8C:43:70:32',
    location: 'Matam',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-02'),
        action: 'Attribué',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN2 692 YW 182 B',
    status: 'assigned',
    assignmentDate: new Date('2024-11-27'),
    macAddress: '00:04:07:E1:5F:DA',
    location: 'Sédhiou',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-17'),
        action: 'Invalidé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN1 400 KQ 357 J',
    status: 'assigned',
    assignmentDate: new Date('2024-11-06'),
    macAddress: '00:82:D9:1A:45:66',
    location: 'Dakar',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-07'),
        action: 'Créé',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN2 817 LN 806 W',
    status: 'assigned',
    assignmentDate: new Date('2024-11-24'),
    macAddress: '00:2B:FD:79:3C:68',
    location: 'Thiès',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-06'),
        action: 'Invalidé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN2 343 DZ 908 U',
    status: 'assigned',
    assignmentDate: new Date('2024-11-12'),
    macAddress: '00:CF:E2:07:EF:9F',
    location: 'Matam',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-23'),
        action: 'Attribué',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN1 228 KH 536 Y',
    status: 'assigned',
    assignmentDate: new Date('2024-11-30'),
    macAddress: '00:51:FA:D9:15:42',
    location: 'Sédhiou',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-24'),
        action: 'Attribué',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN2 432 QQ 397 J',
    status: 'assigned',
    assignmentDate: new Date('2024-11-31'),
    macAddress: '00:98:D8:09:44:51',
    location: 'Matam',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-08'),
        action: 'Attribué',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN1 401 ES 456 Q',
    status: 'assigned',
    assignmentDate: new Date('2024-11-17'),
    macAddress: '00:57:4C:88:5E:6E',
    location: 'Thiès',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-15'),
        action: 'Attribué',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN2 283 RG 226 Y',
    status: 'assigned',
    assignmentDate: new Date('2024-11-11'),
    macAddress: '00:B1:DD:62:D7:13',
    location: 'Kolda',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-08'),
        action: 'Attribué',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN1 832 NK 700 L',
    status: 'assigned',
    assignmentDate: new Date('2024-11-28'),
    macAddress: '00:63:2C:DE:F8:91',
    location: 'Louga',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-21'),
        action: 'Invalidé',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN1 329 EB 450 R',
    status: 'assigned',
    assignmentDate: new Date('2024-11-10'),
    macAddress: '00:0E:47:17:93:62',
    location: 'Kaffrine',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-27'),
        action: 'Invalidé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN1 398 YQ 280 V',
    status: 'assigned',
    assignmentDate: new Date('2024-11-31'),
    macAddress: '00:7E:93:DE:DF:96',
    location: 'Kaolack',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-06'),
        action: 'Créé',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN2 480 YP 155 T',
    status: 'assigned',
    assignmentDate: new Date('2024-11-26'),
    macAddress: '00:44:98:00:CB:A9',
    location: 'Saint-Louis',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-02'),
        action: 'Attribué',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN1 789 NC 490 P',
    status: 'assigned',
    assignmentDate: new Date('2024-11-11'),
    macAddress: '00:80:FF:C3:99:26',
    location: 'Matam',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-26'),
        action: 'Invalidé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN2 470 HB 581 Y',
    status: 'assigned',
    assignmentDate: new Date('2024-11-06'),
    macAddress: '00:24:39:C1:9C:E6',
    location: 'Sédhiou',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-23'),
        action: 'Attribué',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN1 729 ZW 670 U',
    status: 'assigned',
    assignmentDate: new Date('2024-11-02'),
    macAddress: '00:97:48:5A:D8:7F',
    location: 'Thiès',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-14'),
        action: 'Attribué',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN2 738 BY 645 U',
    status: 'assigned',
    assignmentDate: new Date('2024-11-03'),
    macAddress: '00:BE:41:98:A6:E1',
    location: 'Tambacounda',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-30'),
        action: 'Invalidé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN1 519 RN 810 F',
    status: 'assigned',
    assignmentDate: new Date('2024-11-16'),
    macAddress: '00:E4:DE:BA:7B:9A',
    location: 'Saint-Louis',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-22'),
        action: 'Invalidé',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN2 993 AW 503 Y',
    status: 'assigned',
    assignmentDate: new Date('2024-11-19'),
    macAddress: '00:9D:00:BB:6C:30',
    location: 'Saint-Louis',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-28'),
        action: 'Invalidé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN1 620 RP 226 I',
    status: 'assigned',
    assignmentDate: new Date('2024-11-30'),
    macAddress: '00:15:BF:71:5B:11',
    location: 'Kolda',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-03'),
        action: 'Attribué',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN2 444 EI 539 X',
    status: 'assigned',
    assignmentDate: new Date('2024-11-06'),
    macAddress: '00:AF:42:D7:9A:78',
    location: 'Louga',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-16'),
        action: 'Créé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN2 693 KA 760 R',
    status: 'assigned',
    assignmentDate: new Date('2024-11-30'),
    macAddress: '00:EA:3F:AC:08:D7',
    location: 'Louga',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-15'),
        action: 'Créé',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN2 716 BW 107 J',
    status: 'assigned',
    assignmentDate: new Date('2024-11-17'),
    macAddress: '00:ED:8D:74:45:ED',
    location: 'Dakar',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-19'),
        action: 'Invalidé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN1 300 PJ 587 R',
    status: 'assigned',
    assignmentDate: new Date('2024-11-22'),
    macAddress: '00:51:DA:FA:82:42',
    location: 'Kaolack',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-25'),
        action: 'Attribué',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN2 579 PJ 966 F',
    status: 'assigned',
    assignmentDate: new Date('2024-11-18'),
    macAddress: '00:9F:B9:C9:44:E2',
    location: 'Sédhiou',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-28'),
        action: 'Attribué',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN2 409 OK 879 W',
    status: 'assigned',
    assignmentDate: new Date('2024-11-27'),
    macAddress: '00:B3:A5:60:9B:91',
    location: 'Tambacounda',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-10'),
        action: 'Créé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN1 401 HD 972 N',
    status: 'assigned',
    assignmentDate: new Date('2024-11-17'),
    macAddress: '00:EB:97:EC:FC:58',
    location: 'Fatick',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-23'),
        action: 'Attribué',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN2 125 MP 382 A',
    status: 'assigned',
    assignmentDate: new Date('2024-11-06'),
    macAddress: '00:A0:83:16:20:CC',
    location: 'Saint-Louis',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-23'),
        action: 'Attribué',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN1 403 EW 270 H',
    status: 'assigned',
    assignmentDate: new Date('2024-11-28'),
    macAddress: '00:23:67:AE:A7:1F',
    location: 'Saint-Louis',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-16'),
        action: 'Invalidé',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN2 962 KX 812 I',
    status: 'assigned',
    assignmentDate: new Date('2024-11-21'),
    macAddress: '00:CA:AD:82:5E:47',
    location: 'Diourbel',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-25'),
        action: 'Invalidé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN2 247 GJ 493 O',
    status: 'assigned',
    assignmentDate: new Date('2024-11-09'),
    macAddress: '00:7E:F0:17:51:60',
    location: 'Matam',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-05'),
        action: 'Attribué',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN2 953 IZ 246 K',
    status: 'assigned',
    assignmentDate: new Date('2024-11-30'),
    macAddress: '00:BF:C0:DA:7F:E9',
    location: 'Kaolack',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-10'),
        action: 'Invalidé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN1 596 KN 757 X',
    status: 'assigned',
    assignmentDate: new Date('2024-11-11'),
    macAddress: '00:FF:D2:15:CB:B3',
    location: 'Thiès',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-02'),
        action: 'Attribué',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN2 164 TP 992 F',
    status: 'assigned',
    assignmentDate: new Date('2024-11-04'),
    macAddress: '00:A3:16:5C:3E:37',
    location: 'Tambacounda',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-18'),
        action: 'Invalidé',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN1 839 NU 961 U',
    status: 'assigned',
    assignmentDate: new Date('2024-11-14'),
    macAddress: '00:4A:98:D2:76:14',
    location: 'Kaffrine',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-22'),
        action: 'Attribué',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN2 385 CT 975 S',
    status: 'assigned',
    assignmentDate: new Date('2024-11-06'),
    macAddress: '00:88:D5:A7:2D:06',
    location: 'Sédhiou',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-13'),
        action: 'Créé',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN2 259 MO 971 L',
    status: 'assigned',
    assignmentDate: new Date('2024-11-03'),
    macAddress: '00:38:77:F4:9F:66',
    location: 'Ziguinchor',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-29'),
        action: 'Attribué',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN1 755 ZS 556 O',
    status: 'assigned',
    assignmentDate: new Date('2024-11-30'),
    macAddress: '00:44:9B:A1:1A:C4',
    location: 'Kaffrine',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-11'),
        action: 'Attribué',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN1 759 UB 981 B',
    status: 'assigned',
    assignmentDate: new Date('2024-11-18'),
    macAddress: '00:95:63:C6:9F:A2',
    location: 'Dakar',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-13'),
        action: 'Attribué',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN1 215 AN 698 P',
    status: 'assigned',
    assignmentDate: new Date('2024-11-26'),
    macAddress: '00:29:04:4A:07:85',
    location: 'Sédhiou',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-17'),
        action: 'Créé',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN2 722 YR 763 A',
    status: 'assigned',
    assignmentDate: new Date('2024-11-27'),
    macAddress: '00:33:15:E6:C6:18',
    location: 'Matam',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-04'),
        action: 'Créé',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN1 258 YD 969 K',
    status: 'assigned',
    assignmentDate: new Date('2024-11-17'),
    macAddress: '00:89:5E:2E:D4:D6',
    location: 'Diourbel',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-12'),
        action: 'Invalidé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN1 814 VB 246 M',
    status: 'assigned',
    assignmentDate: new Date('2024-11-06'),
    macAddress: '00:87:FA:B0:7B:66',
    location: 'Thiès',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-12'),
        action: 'Attribué',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN2 561 YA 655 K',
    status: 'assigned',
    assignmentDate: new Date('2024-11-20'),
    macAddress: '00:1F:0B:31:03:21',
    location: 'Fatick',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-02'),
        action: 'Attribué',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN1 705 TB 139 O',
    status: 'assigned',
    assignmentDate: new Date('2024-11-12'),
    macAddress: '00:A8:79:4F:07:6D',
    location: 'Matam',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-13'),
        action: 'Invalidé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN1 888 ON 114 X',
    status: 'assigned',
    assignmentDate: new Date('2024-11-07'),
    macAddress: '00:C8:46:39:D0:36',
    location: 'Thiès',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-16'),
        action: 'Créé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN2 226 KS 956 Q',
    status: 'assigned',
    assignmentDate: new Date('2024-11-29'),
    macAddress: '00:CE:E7:70:B7:F2',
    location: 'Kaolack',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-08'),
        action: 'Attribué',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN2 147 WN 809 R',
    status: 'assigned',
    assignmentDate: new Date('2024-11-02'),
    macAddress: '00:FE:57:22:00:50',
    location: 'Ziguinchor',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-31'),
        action: 'Invalidé',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN1 758 BZ 207 N',
    status: 'assigned',
    assignmentDate: new Date('2024-11-08'),
    macAddress: '00:AE:01:2C:7B:62',
    location: 'Saint-Louis',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-11'),
        action: 'Créé',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN2 683 MH 378 B',
    status: 'assigned',
    assignmentDate: new Date('2024-11-05'),
    macAddress: '00:FA:A3:87:14:23',
    location: 'Thiès',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-23'),
        action: 'Créé',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN1 749 AJ 146 P',
    status: 'assigned',
    assignmentDate: new Date('2024-11-25'),
    macAddress: '00:12:21:2E:14:1C',
    location: 'Saint-Louis',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-26'),
        action: 'Attribué',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN2 183 EZ 937 H',
    status: 'assigned',
    assignmentDate: new Date('2024-11-05'),
    macAddress: '00:A1:5B:4E:15:E1',
    location: 'Louga',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-15'),
        action: 'Attribué',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN1 782 QP 295 H',
    status: 'assigned',
    assignmentDate: new Date('2024-11-15'),
    macAddress: '00:43:08:97:68:8D',
    location: 'Thiès',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-28'),
        action: 'Attribué',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN2 651 CJ 846 K',
    status: 'assigned',
    assignmentDate: new Date('2024-11-09'),
    macAddress: '00:E9:4B:66:8A:5B',
    location: 'Tambacounda',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-17'),
        action: 'Créé',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN2 782 KE 465 V',
    status: 'assigned',
    assignmentDate: new Date('2024-11-21'),
    macAddress: '00:49:E2:8E:5F:08',
    location: 'Diourbel',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-15'),
        action: 'Créé',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN2 149 XM 752 V',
    status: 'assigned',
    assignmentDate: new Date('2024-11-31'),
    macAddress: '00:1E:69:CD:8B:40',
    location: 'Diourbel',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-15'),
        action: 'Attribué',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN2 527 ZE 392 O',
    status: 'assigned',
    assignmentDate: new Date('2024-11-27'),
    macAddress: '00:1C:43:B3:19:B0',
    location: 'Ziguinchor',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-19'),
        action: 'Attribué',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN1 248 GE 695 B',
    status: 'assigned',
    assignmentDate: new Date('2024-11-23'),
    macAddress: '00:46:72:49:3B:5B',
    location: 'Dakar',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-16'),
        action: 'Attribué',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN1 936 HM 669 Y',
    status: 'assigned',
    assignmentDate: new Date('2024-11-19'),
    macAddress: '00:D8:35:8D:67:4E',
    location: 'Tambacounda',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-12'),
        action: 'Attribué',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN1 808 GY 915 K',
    status: 'assigned',
    assignmentDate: new Date('2024-11-03'),
    macAddress: '00:D9:D9:08:68:A4',
    location: 'Louga',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-02'),
        action: 'Attribué',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN2 590 ZR 368 P',
    status: 'assigned',
    assignmentDate: new Date('2024-11-17'),
    macAddress: '00:D3:18:DF:5B:54',
    location: 'Dakar',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-06'),
        action: 'Invalidé',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN1 881 FQ 409 V',
    status: 'assigned',
    assignmentDate: new Date('2024-11-07'),
    macAddress: '00:81:67:11:C5:EA',
    location: 'Tambacounda',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-30'),
        action: 'Attribué',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN2 186 AU 527 L',
    status: 'assigned',
    assignmentDate: new Date('2024-11-09'),
    macAddress: '00:64:02:6D:BC:5B',
    location: 'Kaolack',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-25'),
        action: 'Attribué',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN2 498 UK 280 O',
    status: 'assigned',
    assignmentDate: new Date('2024-11-06'),
    macAddress: '00:94:7A:E1:92:2B',
    location: 'Fatick',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-08'),
        action: 'Créé',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN2 974 DO 984 X',
    status: 'assigned',
    assignmentDate: new Date('2024-11-04'),
    macAddress: '00:B8:AC:2A:A4:B1',
    location: 'Tambacounda',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-21'),
        action: 'Invalidé',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN1 610 RI 191 R',
    status: 'assigned',
    assignmentDate: new Date('2024-11-08'),
    macAddress: '00:E6:E4:FA:13:8A',
    location: 'Kaffrine',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-14'),
        action: 'Attribué',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN1 713 NL 379 P',
    status: 'assigned',
    assignmentDate: new Date('2024-11-06'),
    macAddress: '00:C4:47:BB:6B:EC',
    location: 'Kolda',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-04'),
        action: 'Invalidé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN2 679 YN 247 T',
    status: 'assigned',
    assignmentDate: new Date('2024-11-03'),
    macAddress: '00:26:9C:DD:BC:3E',
    location: 'Ziguinchor',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-11'),
        action: 'Invalidé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN1 435 MX 246 P',
    status: 'assigned',
    assignmentDate: new Date('2024-11-25'),
    macAddress: '00:BC:9A:40:C5:AD',
    location: 'Matam',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-27'),
        action: 'Créé',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN2 347 BG 996 F',
    status: 'assigned',
    assignmentDate: new Date('2024-11-31'),
    macAddress: '00:28:5E:17:C6:C3',
    location: 'Kolda',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-07'),
        action: 'Invalidé',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN1 461 XE 711 L',
    status: 'assigned',
    assignmentDate: new Date('2024-11-28'),
    macAddress: '00:92:F6:6A:95:6D',
    location: 'Fatick',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-21'),
        action: 'Invalidé',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN1 374 AR 342 D',
    status: 'assigned',
    assignmentDate: new Date('2024-11-28'),
    macAddress: '00:17:2F:59:6B:F4',
    location: 'Matam',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-18'),
        action: 'Invalidé',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN1 105 ET 366 L',
    status: 'assigned',
    assignmentDate: new Date('2024-11-08'),
    macAddress: '00:08:EE:A6:27:7A',
    location: 'Tambacounda',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-13'),
        action: 'Invalidé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN2 757 RA 823 W',
    status: 'assigned',
    assignmentDate: new Date('2024-11-29'),
    macAddress: '00:0C:59:57:FD:51',
    location: 'Dakar',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-21'),
        action: 'Créé',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN2 467 FB 992 A',
    status: 'assigned',
    assignmentDate: new Date('2024-11-30'),
    macAddress: '00:70:58:6B:9C:C4',
    location: 'Thiès',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-11'),
        action: 'Créé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN2 807 OQ 189 Y',
    status: 'assigned',
    assignmentDate: new Date('2024-11-26'),
    macAddress: '00:64:49:26:5A:25',
    location: 'Dakar',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-02'),
        action: 'Invalidé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN2 510 FG 841 B',
    status: 'assigned',
    assignmentDate: new Date('2024-11-25'),
    macAddress: '00:98:71:53:02:6F',
    location: 'Matam',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-11'),
        action: 'Créé',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN1 866 TN 458 Y',
    status: 'assigned',
    assignmentDate: new Date('2024-11-29'),
    macAddress: '00:D7:62:B8:97:B7',
    location: 'Dakar',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-14'),
        action: 'Créé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN2 900 UB 471 M',
    status: 'assigned',
    assignmentDate: new Date('2024-11-27'),
    macAddress: '00:5F:32:9E:85:CB',
    location: 'Dakar',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-03'),
        action: 'Créé',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN1 619 UH 379 J',
    status: 'assigned',
    assignmentDate: new Date('2024-11-21'),
    macAddress: '00:C4:6D:34:AB:1A',
    location: 'Ziguinchor',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-19'),
        action: 'Attribué',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN2 204 UI 198 J',
    status: 'assigned',
    assignmentDate: new Date('2024-11-19'),
    macAddress: '00:30:3C:FF:5D:27',
    location: 'Tambacounda',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-18'),
        action: 'Créé',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN1 320 AC 639 D',
    status: 'assigned',
    assignmentDate: new Date('2024-11-24'),
    macAddress: '00:DC:E6:C3:AE:CC',
    location: 'Fatick',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-23'),
        action: 'Créé',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN2 705 JQ 953 A',
    status: 'assigned',
    assignmentDate: new Date('2024-11-15'),
    macAddress: '00:E5:E0:F4:46:3C',
    location: 'Matam',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-07'),
        action: 'Invalidé',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN2 598 PR 392 X',
    status: 'assigned',
    assignmentDate: new Date('2024-11-12'),
    macAddress: '00:63:0B:83:49:94',
    location: 'Ziguinchor',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-07'),
        action: 'Invalidé',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN1 979 VD 576 Q',
    status: 'assigned',
    assignmentDate: new Date('2024-11-05'),
    macAddress: '00:22:9C:AC:3B:E1',
    location: 'Saint-Louis',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-08'),
        action: 'Créé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN2 927 XH 500 O',
    status: 'assigned',
    assignmentDate: new Date('2024-11-02'),
    macAddress: '00:FC:A8:BE:91:EF',
    location: 'Kaolack',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-15'),
        action: 'Créé',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN1 307 ZB 889 N',
    status: 'assigned',
    assignmentDate: new Date('2024-11-05'),
    macAddress: '00:34:E0:88:FB:58',
    location: 'Kaffrine',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-02'),
        action: 'Invalidé',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN2 814 JD 268 D',
    status: 'assigned',
    assignmentDate: new Date('2024-11-18'),
    macAddress: '00:50:8E:F3:A8:AA',
    location: 'Ziguinchor',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-27'),
        action: 'Attribué',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN1 147 XB 605 O',
    status: 'assigned',
    assignmentDate: new Date('2024-11-24'),
    macAddress: '00:C0:41:64:70:D5',
    location: 'Thiès',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-03'),
        action: 'Attribué',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN2 195 MC 784 E',
    status: 'assigned',
    assignmentDate: new Date('2024-11-18'),
    macAddress: '00:75:F2:19:8A:0A',
    location: 'Louga',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-09'),
        action: 'Attribué',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN1 823 ID 315 A',
    status: 'assigned',
    assignmentDate: new Date('2024-11-27'),
    macAddress: '00:8E:9F:F2:4B:82',
    location: 'Saint-Louis',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-23'),
        action: 'Créé',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN2 683 GY 940 S',
    status: 'assigned',
    assignmentDate: new Date('2024-11-23'),
    macAddress: '00:E4:50:CE:38:09',
    location: 'Ziguinchor',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-19'),
        action: 'Invalidé',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN1 502 AK 991 O',
    status: 'assigned',
    assignmentDate: new Date('2024-11-31'),
    macAddress: '00:FD:AA:6B:B2:3E',
    location: 'Dakar',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-16'),
        action: 'Invalidé',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN1 425 BX 473 Z',
    status: 'assigned',
    assignmentDate: new Date('2024-11-19'),
    macAddress: '00:DC:4B:0A:80:C7',
    location: 'Thiès',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-19'),
        action: 'Créé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN2 505 TD 589 C',
    status: 'assigned',
    assignmentDate: new Date('2024-11-08'),
    macAddress: '00:09:BD:1A:8F:0E',
    location: 'Matam',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-09'),
        action: 'Créé',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN1 201 QG 254 I',
    status: 'assigned',
    assignmentDate: new Date('2024-11-06'),
    macAddress: '00:62:3E:6C:BB:40',
    location: 'Saint-Louis',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-20'),
        action: 'Créé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN1 684 FC 942 I',
    status: 'assigned',
    assignmentDate: new Date('2024-11-21'),
    macAddress: '00:80:26:B5:30:7E',
    location: 'Saint-Louis',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-08'),
        action: 'Attribué',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN2 201 LX 791 J',
    status: 'assigned',
    assignmentDate: new Date('2024-11-09'),
    macAddress: '00:96:B3:F9:AA:1D',
    location: 'Sédhiou',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-23'),
        action: 'Créé',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN2 466 XF 139 V',
    status: 'assigned',
    assignmentDate: new Date('2024-11-07'),
    macAddress: '00:08:53:18:28:B4',
    location: 'Louga',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-13'),
        action: 'Créé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN2 301 EC 526 C',
    status: 'assigned',
    assignmentDate: new Date('2024-11-07'),
    macAddress: '00:1E:08:7F:0E:F4',
    location: 'Thiès',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-30'),
        action: 'Invalidé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN1 553 NX 347 P',
    status: 'assigned',
    assignmentDate: new Date('2024-11-13'),
    macAddress: '00:EE:2C:C4:E1:5A',
    location: 'Louga',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-02'),
        action: 'Créé',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN2 342 NK 656 W',
    status: 'assigned',
    assignmentDate: new Date('2024-11-11'),
    macAddress: '00:DD:CD:DD:A7:9F',
    location: 'Tambacounda',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-29'),
        action: 'Invalidé',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN2 171 YQ 987 N',
    status: 'assigned',
    assignmentDate: new Date('2024-11-14'),
    macAddress: '00:69:26:74:25:34',
    location: 'Dakar',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-10'),
        action: 'Attribué',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN1 467 PD 470 L',
    status: 'assigned',
    assignmentDate: new Date('2024-11-14'),
    macAddress: '00:45:6E:3B:A8:04',
    location: 'Tambacounda',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-05'),
        action: 'Attribué',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN2 700 NO 551 L',
    status: 'assigned',
    assignmentDate: new Date('2024-11-28'),
    macAddress: '00:73:7A:21:CD:8B',
    location: 'Sédhiou',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-10'),
        action: 'Invalidé',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN2 486 OL 251 K',
    status: 'assigned',
    assignmentDate: new Date('2024-11-26'),
    macAddress: '00:7F:A2:A4:CE:DC',
    location: 'Saint-Louis',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-03'),
        action: 'Attribué',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN1 743 SS 995 M',
    status: 'assigned',
    assignmentDate: new Date('2024-11-14'),
    macAddress: '00:B2:E7:75:6E:1D',
    location: 'Matam',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-31'),
        action: 'Invalidé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN1 130 GX 859 L',
    status: 'assigned',
    assignmentDate: new Date('2024-11-09'),
    macAddress: '00:C5:6F:64:54:57',
    location: 'Tambacounda',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-26'),
        action: 'Invalidé',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN2 160 VP 498 S',
    status: 'assigned',
    assignmentDate: new Date('2024-11-09'),
    macAddress: '00:14:2D:BB:EE:F9',
    location: 'Fatick',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-16'),
        action: 'Attribué',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN2 411 VP 466 T',
    status: 'assigned',
    assignmentDate: new Date('2024-11-17'),
    macAddress: '00:38:6F:70:E4:E6',
    location: 'Fatick',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-30'),
        action: 'Attribué',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN1 693 PS 143 L',
    status: 'assigned',
    assignmentDate: new Date('2024-11-26'),
    macAddress: '00:E5:B9:C7:72:AB',
    location: 'Saint-Louis',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-16'),
        action: 'Invalidé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN1 798 MN 333 P',
    status: 'assigned',
    assignmentDate: new Date('2024-11-19'),
    macAddress: '00:30:25:79:8A:C8',
    location: 'Kaffrine',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-19'),
        action: 'Attribué',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN2 926 GS 594 F',
    status: 'assigned',
    assignmentDate: new Date('2024-11-17'),
    macAddress: '00:0E:0B:53:70:5F',
    location: 'Tambacounda',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-02'),
        action: 'Créé',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN2 856 MG 956 V',
    status: 'assigned',
    assignmentDate: new Date('2024-11-02'),
    macAddress: '00:05:B2:18:94:D6',
    location: 'Dakar',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-19'),
        action: 'Attribué',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN2 713 ZJ 553 X',
    status: 'assigned',
    assignmentDate: new Date('2024-11-28'),
    macAddress: '00:81:D3:B4:35:81',
    location: 'Saint-Louis',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-02'),
        action: 'Attribué',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN2 484 FP 869 X',
    status: 'assigned',
    assignmentDate: new Date('2024-11-28'),
    macAddress: '00:F2:15:A8:B1:71',
    location: 'Sédhiou',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-25'),
        action: 'Attribué',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN1 737 FD 457 U',
    status: 'assigned',
    assignmentDate: new Date('2024-11-24'),
    macAddress: '00:E8:12:DA:47:5B',
    location: 'Louga',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-08'),
        action: 'Attribué',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN2 830 LR 321 H',
    status: 'assigned',
    assignmentDate: new Date('2024-11-23'),
    macAddress: '00:73:CB:0D:61:3E',
    location: 'Diourbel',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-22'),
        action: 'Créé',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN1 924 XT 917 H',
    status: 'assigned',
    assignmentDate: new Date('2024-11-30'),
    macAddress: '00:42:04:1B:3B:CB',
    location: 'Diourbel',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-12'),
        action: 'Créé',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN1 255 ZD 285 P',
    status: 'assigned',
    assignmentDate: new Date('2024-11-15'),
    macAddress: '00:0E:30:DE:A0:CC',
    location: 'Thiès',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-22'),
        action: 'Invalidé',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN1 628 BZ 315 W',
    status: 'assigned',
    assignmentDate: new Date('2024-11-11'),
    macAddress: '00:1F:86:DA:3D:CF',
    location: 'Saint-Louis',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-13'),
        action: 'Créé',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN2 583 PA 837 H',
    status: 'assigned',
    assignmentDate: new Date('2024-11-04'),
    macAddress: '00:6D:04:F5:2B:02',
    location: 'Ziguinchor',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-18'),
        action: 'Invalidé',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN2 628 ZI 935 J',
    status: 'assigned',
    assignmentDate: new Date('2024-11-18'),
    macAddress: '00:26:74:C9:6D:24',
    location: 'Matam',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-07'),
        action: 'Invalidé',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN1 654 CJ 858 V',
    status: 'assigned',
    assignmentDate: new Date('2024-11-10'),
    macAddress: '00:79:67:D4:62:58',
    location: 'Thiès',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-06'),
        action: 'Invalidé',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN1 957 MJ 710 F',
    status: 'assigned',
    assignmentDate: new Date('2024-11-26'),
    macAddress: '00:D3:98:01:F5:52',
    location: 'Louga',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-06'),
        action: 'Invalidé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN1 398 PV 872 K',
    status: 'assigned',
    assignmentDate: new Date('2024-11-19'),
    macAddress: '00:DF:E3:AC:76:59',
    location: 'Ziguinchor',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-11'),
        action: 'Invalidé',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN2 319 MG 361 C',
    status: 'assigned',
    assignmentDate: new Date('2024-11-07'),
    macAddress: '00:F5:DA:3C:F8:71',
    location: 'Tambacounda',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-08'),
        action: 'Créé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN1 634 FR 680 J',
    status: 'assigned',
    assignmentDate: new Date('2024-11-04'),
    macAddress: '00:04:8D:0C:0C:F4',
    location: 'Kaolack',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-26'),
        action: 'Invalidé',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN1 572 OD 666 F',
    status: 'assigned',
    assignmentDate: new Date('2024-11-23'),
    macAddress: '00:92:F1:75:11:1B',
    location: 'Kaolack',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-06'),
        action: 'Invalidé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN2 885 II 756 M',
    status: 'assigned',
    assignmentDate: new Date('2024-11-13'),
    macAddress: '00:43:6F:BA:9C:AF',
    location: 'Thiès',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-03'),
        action: 'Invalidé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN1 279 NA 880 K',
    status: 'assigned',
    assignmentDate: new Date('2024-11-13'),
    macAddress: '00:82:A4:E3:3A:8B',
    location: 'Kolda',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-14'),
        action: 'Attribué',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN2 886 XX 698 K',
    status: 'assigned',
    assignmentDate: new Date('2024-11-03'),
    macAddress: '00:64:43:FD:C9:A3',
    location: 'Sédhiou',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-04'),
        action: 'Attribué',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN2 920 OD 756 A',
    status: 'assigned',
    assignmentDate: new Date('2024-11-07'),
    macAddress: '00:C0:A5:88:20:72',
    location: 'Saint-Louis',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-22'),
        action: 'Attribué',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN2 837 FV 444 D',
    status: 'assigned',
    assignmentDate: new Date('2024-11-31'),
    macAddress: '00:C2:46:55:74:62',
    location: 'Matam',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-29'),
        action: 'Invalidé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN2 482 FW 922 D',
    status: 'assigned',
    assignmentDate: new Date('2024-11-07'),
    macAddress: '00:AE:6B:BA:43:1D',
    location: 'Kaolack',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-20'),
        action: 'Créé',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN1 817 FH 199 H',
    status: 'assigned',
    assignmentDate: new Date('2024-11-30'),
    macAddress: '00:3D:1E:B6:2B:50',
    location: 'Kaffrine',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-04'),
        action: 'Créé',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN1 834 PS 563 X',
    status: 'assigned',
    assignmentDate: new Date('2024-11-19'),
    macAddress: '00:B1:F1:72:AC:CD',
    location: 'Diourbel',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-07'),
        action: 'Invalidé',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN2 172 AG 633 T',
    status: 'assigned',
    assignmentDate: new Date('2024-11-29'),
    macAddress: '00:EA:92:C6:52:99',
    location: 'Sédhiou',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-21'),
        action: 'Créé',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN2 324 CJ 371 Q',
    status: 'assigned',
    assignmentDate: new Date('2024-11-23'),
    macAddress: '00:46:4A:DB:FE:5E',
    location: 'Matam',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-15'),
        action: 'Invalidé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN2 896 XN 264 K',
    status: 'assigned',
    assignmentDate: new Date('2024-11-22'),
    macAddress: '00:29:18:74:72:24',
    location: 'Dakar',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-18'),
        action: 'Invalidé',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN1 398 LP 157 M',
    status: 'assigned',
    assignmentDate: new Date('2024-11-24'),
    macAddress: '00:33:D4:70:E0:52',
    location: 'Diourbel',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-18'),
        action: 'Créé',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN1 411 EB 987 G',
    status: 'assigned',
    assignmentDate: new Date('2024-11-31'),
    macAddress: '00:D6:D7:94:81:20',
    location: 'Dakar',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-16'),
        action: 'Attribué',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN2 118 AA 222 L',
    status: 'assigned',
    assignmentDate: new Date('2024-11-10'),
    macAddress: '00:79:95:CB:50:BE',
    location: 'Kaffrine',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-31'),
        action: 'Invalidé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN2 832 RE 490 C',
    status: 'assigned',
    assignmentDate: new Date('2024-11-17'),
    macAddress: '00:54:22:B9:B9:F8',
    location: 'Ziguinchor',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-17'),
        action: 'Invalidé',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN2 728 OH 855 G',
    status: 'assigned',
    assignmentDate: new Date('2024-11-03'),
    macAddress: '00:72:89:0C:27:15',
    location: 'Kaffrine',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-11'),
        action: 'Créé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN1 357 WE 408 L',
    status: 'assigned',
    assignmentDate: new Date('2024-11-29'),
    macAddress: '00:90:3F:18:B9:78',
    location: 'Saint-Louis',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-17'),
        action: 'Invalidé',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN2 143 BB 751 C',
    status: 'assigned',
    assignmentDate: new Date('2024-11-16'),
    macAddress: '00:10:40:F0:98:3C',
    location: 'Dakar',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-22'),
        action: 'Invalidé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN2 500 XH 935 U',
    status: 'assigned',
    assignmentDate: new Date('2024-11-08'),
    macAddress: '00:47:8C:97:E7:B7',
    location: 'Kolda',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-29'),
        action: 'Invalidé',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN2 727 QX 846 I',
    status: 'assigned',
    assignmentDate: new Date('2024-11-24'),
    macAddress: '00:93:F5:C1:7F:19',
    location: 'Fatick',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-10'),
        action: 'Attribué',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN1 999 XW 718 B',
    status: 'assigned',
    assignmentDate: new Date('2024-11-20'),
    macAddress: '00:1D:44:B7:BD:19',
    location: 'Dakar',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-12'),
        action: 'Créé',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN2 884 BQ 594 G',
    status: 'assigned',
    assignmentDate: new Date('2024-11-03'),
    macAddress: '00:69:B4:22:C1:01',
    location: 'Fatick',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-24'),
        action: 'Attribué',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN1 866 LT 436 U',
    status: 'assigned',
    assignmentDate: new Date('2024-11-04'),
    macAddress: '00:6C:9D:5E:E0:A0',
    location: 'Ziguinchor',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-17'),
        action: 'Créé',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN2 930 ZI 894 V',
    status: 'assigned',
    assignmentDate: new Date('2024-11-29'),
    macAddress: '00:AB:34:0B:8C:B3',
    location: 'Kaffrine',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-05'),
        action: 'Créé',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN2 292 WS 650 V',
    status: 'assigned',
    assignmentDate: new Date('2024-11-25'),
    macAddress: '00:A6:C3:1F:79:5C',
    location: 'Ziguinchor',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-16'),
        action: 'Attribué',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN2 590 DP 311 Z',
    status: 'assigned',
    assignmentDate: new Date('2024-11-27'),
    macAddress: '00:1C:CF:C5:0A:20',
    location: 'Tambacounda',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-10'),
        action: 'Invalidé',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN1 902 FH 704 I',
    status: 'assigned',
    assignmentDate: new Date('2024-11-09'),
    macAddress: '00:56:B5:B8:6D:47',
    location: 'Louga',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-20'),
        action: 'Attribué',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN2 842 PP 825 T',
    status: 'assigned',
    assignmentDate: new Date('2024-11-13'),
    macAddress: '00:EA:AD:D1:60:7B',
    location: 'Tambacounda',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-03'),
        action: 'Attribué',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN1 178 PB 119 G',
    status: 'assigned',
    assignmentDate: new Date('2024-11-15'),
    macAddress: '00:C9:F9:4C:E7:CF',
    location: 'Ziguinchor',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-30'),
        action: 'Invalidé',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN2 193 IY 375 A',
    status: 'assigned',
    assignmentDate: new Date('2024-11-25'),
    macAddress: '00:AD:6A:69:CD:0F',
    location: 'Sédhiou',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-12'),
        action: 'Créé',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN2 541 CQ 772 J',
    status: 'assigned',
    assignmentDate: new Date('2024-11-18'),
    macAddress: '00:6F:E8:FE:13:9A',
    location: 'Louga',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-27'),
        action: 'Invalidé',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN2 137 CI 607 V',
    status: 'assigned',
    assignmentDate: new Date('2024-11-15'),
    macAddress: '00:A4:66:30:8E:7A',
    location: 'Louga',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-23'),
        action: 'Invalidé',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN1 475 GX 875 W',
    status: 'assigned',
    assignmentDate: new Date('2024-11-31'),
    macAddress: '00:02:3C:19:D4:57',
    location: 'Louga',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-03'),
        action: 'Créé',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN2 700 XY 348 O',
    status: 'assigned',
    assignmentDate: new Date('2024-11-16'),
    macAddress: '00:66:87:CB:C4:BD',
    location: 'Matam',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-05'),
        action: 'Attribué',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN2 169 OI 283 I',
    status: 'assigned',
    assignmentDate: new Date('2024-11-29'),
    macAddress: '00:2F:C2:DE:A0:A5',
    location: 'Louga',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-25'),
        action: 'Créé',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN1 149 OT 427 N',
    status: 'assigned',
    assignmentDate: new Date('2024-11-26'),
    macAddress: '00:37:B2:C4:09:40',
    location: 'Dakar',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-24'),
        action: 'Attribué',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN2 841 SG 558 W',
    status: 'assigned',
    assignmentDate: new Date('2024-11-12'),
    macAddress: '00:CD:4B:3C:F6:19',
    location: 'Kaolack',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-18'),
        action: 'Créé',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN2 560 BR 976 T',
    status: 'assigned',
    assignmentDate: new Date('2024-11-19'),
    macAddress: '00:84:D5:41:C9:6C',
    location: 'Diourbel',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-11'),
        action: 'Attribué',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN2 230 FB 945 K',
    status: 'assigned',
    assignmentDate: new Date('2024-11-18'),
    macAddress: '00:F5:F1:55:8B:14',
    location: 'Tambacounda',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-30'),
        action: 'Créé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN1 429 GO 966 D',
    status: 'assigned',
    assignmentDate: new Date('2024-11-28'),
    macAddress: '00:5E:75:0A:ED:6C',
    location: 'Tambacounda',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-04'),
        action: 'Invalidé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN1 634 AC 362 R',
    status: 'assigned',
    assignmentDate: new Date('2024-11-18'),
    macAddress: '00:A2:0B:48:25:89',
    location: 'Matam',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-18'),
        action: 'Attribué',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN2 470 HL 147 I',
    status: 'assigned',
    assignmentDate: new Date('2024-11-21'),
    macAddress: '00:00:4B:0E:BD:55',
    location: 'Dakar',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-12'),
        action: 'Créé',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN1 862 VL 741 Y',
    status: 'assigned',
    assignmentDate: new Date('2024-11-28'),
    macAddress: '00:4C:31:A9:DC:73',
    location: 'Kaffrine',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-15'),
        action: 'Invalidé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN2 430 TH 703 O',
    status: 'assigned',
    assignmentDate: new Date('2024-11-12'),
    macAddress: '00:C9:42:B9:A8:84',
    location: 'Fatick',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-05'),
        action: 'Créé',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN1 737 GP 806 O',
    status: 'assigned',
    assignmentDate: new Date('2024-11-13'),
    macAddress: '00:EF:54:74:01:19',
    location: 'Louga',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-16'),
        action: 'Attribué',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN2 190 DW 437 N',
    status: 'assigned',
    assignmentDate: new Date('2024-11-16'),
    macAddress: '00:DA:C6:5F:28:39',
    location: 'Sédhiou',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-25'),
        action: 'Invalidé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN2 646 OV 794 P',
    status: 'assigned',
    assignmentDate: new Date('2024-11-12'),
    macAddress: '00:DC:04:3C:C9:AB',
    location: 'Kaffrine',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-05'),
        action: 'Invalidé',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN1 516 RM 477 U',
    status: 'assigned',
    assignmentDate: new Date('2024-11-30'),
    macAddress: '00:CE:84:00:50:BC',
    location: 'Thiès',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-21'),
        action: 'Attribué',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN1 399 NI 950 Q',
    status: 'assigned',
    assignmentDate: new Date('2024-11-03'),
    macAddress: '00:FD:E3:F1:4A:01',
    location: 'Matam',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-02'),
        action: 'Attribué',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN2 919 QY 575 X',
    status: 'assigned',
    assignmentDate: new Date('2024-11-03'),
    macAddress: '00:E2:5E:3B:0C:50',
    location: 'Louga',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-10'),
        action: 'Invalidé',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN1 217 KD 335 R',
    status: 'assigned',
    assignmentDate: new Date('2024-11-21'),
    macAddress: '00:6D:20:AE:2E:64',
    location: 'Kaolack',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-28'),
        action: 'Invalidé',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN2 310 MS 684 U',
    status: 'assigned',
    assignmentDate: new Date('2024-11-31'),
    macAddress: '00:68:71:CD:36:23',
    location: 'Matam',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-30'),
        action: 'Invalidé',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN1 366 MO 331 P',
    status: 'assigned',
    assignmentDate: new Date('2024-11-05'),
    macAddress: '00:73:83:78:E4:A9',
    location: 'Diourbel',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-08'),
        action: 'Invalidé',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN1 912 TC 494 Q',
    status: 'assigned',
    assignmentDate: new Date('2024-11-03'),
    macAddress: '00:42:2A:44:3C:64',
    location: 'Kaolack',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-12'),
        action: 'Créé',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN2 287 PL 196 L',
    status: 'assigned',
    assignmentDate: new Date('2024-11-26'),
    macAddress: '00:09:42:90:0E:93',
    location: 'Saint-Louis',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-05'),
        action: 'Invalidé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN1 919 XB 331 K',
    status: 'assigned',
    assignmentDate: new Date('2024-11-20'),
    macAddress: '00:5C:16:6C:4E:08',
    location: 'Saint-Louis',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-27'),
        action: 'Attribué',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN1 131 UN 538 V',
    status: 'assigned',
    assignmentDate: new Date('2024-11-20'),
    macAddress: '00:BC:27:7F:4C:1F',
    location: 'Louga',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-20'),
        action: 'Invalidé',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN2 245 XN 974 O',
    status: 'assigned',
    assignmentDate: new Date('2024-11-07'),
    macAddress: '00:68:96:23:01:00',
    location: 'Kaolack',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-11'),
        action: 'Attribué',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN1 380 YL 151 W',
    status: 'assigned',
    assignmentDate: new Date('2024-11-14'),
    macAddress: '00:BA:56:BC:FC:31',
    location: 'Thiès',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-18'),
        action: 'Invalidé',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN1 728 DM 194 Z',
    status: 'assigned',
    assignmentDate: new Date('2024-11-12'),
    macAddress: '00:E8:18:95:41:A3',
    location: 'Louga',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-13'),
        action: 'Attribué',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN1 128 TA 657 D',
    status: 'assigned',
    assignmentDate: new Date('2024-11-16'),
    macAddress: '00:15:BC:DA:3F:49',
    location: 'Kaffrine',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-25'),
        action: 'Créé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN2 819 CA 641 H',
    status: 'assigned',
    assignmentDate: new Date('2024-11-20'),
    macAddress: '00:E6:5A:E6:C3:00',
    location: 'Saint-Louis',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-16'),
        action: 'Attribué',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN2 881 ZC 548 T',
    status: 'assigned',
    assignmentDate: new Date('2024-11-28'),
    macAddress: '00:A7:A0:1D:FF:82',
    location: 'Louga',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-19'),
        action: 'Attribué',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN1 406 GO 374 R',
    status: 'assigned',
    assignmentDate: new Date('2024-11-24'),
    macAddress: '00:11:60:7E:CB:E2',
    location: 'Kolda',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-02'),
        action: 'Créé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN1 146 QV 951 O',
    status: 'assigned',
    assignmentDate: new Date('2024-11-14'),
    macAddress: '00:8C:06:A2:69:72',
    location: 'Tambacounda',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-26'),
        action: 'Attribué',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN2 970 SG 367 K',
    status: 'assigned',
    assignmentDate: new Date('2024-11-17'),
    macAddress: '00:01:9C:76:58:07',
    location: 'Sédhiou',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-06'),
        action: 'Attribué',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN1 252 US 467 T',
    status: 'assigned',
    assignmentDate: new Date('2024-11-16'),
    macAddress: '00:91:16:16:4E:B8',
    location: 'Kaffrine',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-31'),
        action: 'Attribué',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN1 709 XM 338 L',
    status: 'assigned',
    assignmentDate: new Date('2024-11-05'),
    macAddress: '00:58:55:13:D3:3E',
    location: 'Louga',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-17'),
        action: 'Créé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN2 234 MK 654 E',
    status: 'assigned',
    assignmentDate: new Date('2024-11-09'),
    macAddress: '00:3E:17:A6:48:36',
    location: 'Louga',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-03'),
        action: 'Invalidé',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN1 200 MT 415 M',
    status: 'assigned',
    assignmentDate: new Date('2024-11-03'),
    macAddress: '00:91:AD:A8:A5:51',
    location: 'Kaffrine',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-21'),
        action: 'Créé',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN2 792 AX 796 J',
    status: 'assigned',
    assignmentDate: new Date('2024-11-30'),
    macAddress: '00:81:C9:16:51:AB',
    location: 'Fatick',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-10'),
        action: 'Invalidé',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN2 280 GT 254 F',
    status: 'assigned',
    assignmentDate: new Date('2024-11-24'),
    macAddress: '00:A1:53:2D:82:EE',
    location: 'Dakar',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-15'),
        action: 'Créé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN2 102 CX 217 U',
    status: 'assigned',
    assignmentDate: new Date('2024-11-09'),
    macAddress: '00:91:7D:86:20:BB',
    location: 'Kaolack',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-09'),
        action: 'Attribué',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN1 166 BE 616 C',
    status: 'assigned',
    assignmentDate: new Date('2024-11-27'),
    macAddress: '00:20:D8:10:0A:50',
    location: 'Tambacounda',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-16'),
        action: 'Créé',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN2 901 WY 593 E',
    status: 'assigned',
    assignmentDate: new Date('2024-11-26'),
    macAddress: '00:58:D2:3D:99:72',
    location: 'Tambacounda',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-03'),
        action: 'Attribué',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN1 311 DA 497 Q',
    status: 'assigned',
    assignmentDate: new Date('2024-11-09'),
    macAddress: '00:66:63:F8:73:0C',
    location: 'Louga',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-21'),
        action: 'Créé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN2 242 ET 432 U',
    status: 'assigned',
    assignmentDate: new Date('2024-11-24'),
    macAddress: '00:EA:08:29:F9:D0',
    location: 'Kaffrine',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-29'),
        action: 'Créé',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN2 912 DK 702 C',
    status: 'assigned',
    assignmentDate: new Date('2024-11-20'),
    macAddress: '00:1B:7A:A9:A0:4B',
    location: 'Diourbel',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-24'),
        action: 'Invalidé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN2 291 JL 239 U',
    status: 'assigned',
    assignmentDate: new Date('2024-11-21'),
    macAddress: '00:96:8A:A1:02:AE',
    location: 'Saint-Louis',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-14'),
        action: 'Attribué',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN2 204 TN 851 E',
    status: 'assigned',
    assignmentDate: new Date('2024-11-08'),
    macAddress: '00:98:E1:07:4B:24',
    location: 'Saint-Louis',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-16'),
        action: 'Invalidé',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN1 395 FK 781 E',
    status: 'assigned',
    assignmentDate: new Date('2024-11-04'),
    macAddress: '00:70:78:46:4D:A9',
    location: 'Matam',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-21'),
        action: 'Créé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN1 107 AF 922 S',
    status: 'assigned',
    assignmentDate: new Date('2024-11-31'),
    macAddress: '00:1C:0D:06:6F:2F',
    location: 'Louga',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-12'),
        action: 'Créé',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN2 430 CY 237 X',
    status: 'assigned',
    assignmentDate: new Date('2024-11-16'),
    macAddress: '00:57:88:3A:9C:CA',
    location: 'Kolda',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-30'),
        action: 'Créé',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN2 545 RX 672 L',
    status: 'assigned',
    assignmentDate: new Date('2024-11-22'),
    macAddress: '00:16:57:DA:97:BB',
    location: 'Dakar',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-19'),
        action: 'Créé',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN1 225 QH 109 A',
    status: 'assigned',
    assignmentDate: new Date('2024-11-11'),
    macAddress: '00:82:F6:59:D2:2F',
    location: 'Fatick',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-15'),
        action: 'Attribué',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN1 579 LK 165 Y',
    status: 'assigned',
    assignmentDate: new Date('2024-11-06'),
    macAddress: '00:29:F7:56:4A:CA',
    location: 'Matam',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-05'),
        action: 'Invalidé',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN2 849 CH 654 A',
    status: 'assigned',
    assignmentDate: new Date('2024-11-16'),
    macAddress: '00:27:B8:A9:E7:54',
    location: 'Louga',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-28'),
        action: 'Créé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN2 243 DY 329 J',
    status: 'assigned',
    assignmentDate: new Date('2024-11-31'),
    macAddress: '00:93:A3:56:CC:A7',
    location: 'Kaffrine',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-19'),
        action: 'Créé',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN1 388 AO 119 H',
    status: 'assigned',
    assignmentDate: new Date('2024-11-31'),
    macAddress: '00:1F:E0:E9:69:55',
    location: 'Thiès',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-10'),
        action: 'Invalidé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN2 445 PI 491 D',
    status: 'assigned',
    assignmentDate: new Date('2024-11-24'),
    macAddress: '00:F5:97:EA:FD:51',
    location: 'Kolda',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-11'),
        action: 'Attribué',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN2 139 KK 412 H',
    status: 'assigned',
    assignmentDate: new Date('2024-11-25'),
    macAddress: '00:2C:93:53:70:57',
    location: 'Kolda',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-16'),
        action: 'Créé',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN2 324 EE 347 Q',
    status: 'assigned',
    assignmentDate: new Date('2024-11-24'),
    macAddress: '00:2B:49:87:93:5C',
    location: 'Sédhiou',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-31'),
        action: 'Créé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN1 925 WX 732 D',
    status: 'assigned',
    assignmentDate: new Date('2024-11-05'),
    macAddress: '00:EC:02:28:E5:94',
    location: 'Tambacounda',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-02'),
        action: 'Attribué',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN1 376 IW 640 E',
    status: 'assigned',
    assignmentDate: new Date('2024-11-19'),
    macAddress: '00:3A:0B:29:7A:7C',
    location: 'Fatick',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-08'),
        action: 'Créé',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN2 224 DB 568 A',
    status: 'assigned',
    assignmentDate: new Date('2024-11-15'),
    macAddress: '00:00:72:74:09:14',
    location: 'Dakar',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-31'),
        action: 'Invalidé',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN1 689 DX 530 Y',
    status: 'assigned',
    assignmentDate: new Date('2024-11-06'),
    macAddress: '00:A3:81:73:BB:03',
    location: 'Diourbel',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-20'),
        action: 'Attribué',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN1 329 HK 660 D',
    status: 'assigned',
    assignmentDate: new Date('2024-11-19'),
    macAddress: '00:1D:BF:15:98:CD',
    location: 'Kaffrine',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-13'),
        action: 'Créé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN1 663 UG 832 W',
    status: 'assigned',
    assignmentDate: new Date('2024-11-28'),
    macAddress: '00:CA:FF:56:93:87',
    location: 'Saint-Louis',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-31'),
        action: 'Attribué',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN1 890 UQ 331 S',
    status: 'assigned',
    assignmentDate: new Date('2024-11-09'),
    macAddress: '00:01:90:C9:8A:75',
    location: 'Tambacounda',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-29'),
        action: 'Créé',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN1 566 QW 738 T',
    status: 'assigned',
    assignmentDate: new Date('2024-11-21'),
    macAddress: '00:23:0A:3D:9E:FD',
    location: 'Thiès',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-06'),
        action: 'Attribué',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN2 750 OD 937 F',
    status: 'assigned',
    assignmentDate: new Date('2024-11-20'),
    macAddress: '00:53:93:AC:07:03',
    location: 'Kaffrine',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-15'),
        action: 'Attribué',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN2 372 JA 189 B',
    status: 'assigned',
    assignmentDate: new Date('2024-11-19'),
    macAddress: '00:38:ED:44:95:65',
    location: 'Diourbel',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-03'),
        action: 'Créé',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN1 824 ZQ 829 W',
    status: 'assigned',
    assignmentDate: new Date('2024-11-31'),
    macAddress: '00:EB:9A:76:44:BE',
    location: 'Kaffrine',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-15'),
        action: 'Attribué',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN1 892 WI 359 W',
    status: 'assigned',
    assignmentDate: new Date('2024-11-15'),
    macAddress: '00:43:F4:CE:15:93',
    location: 'Louga',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-03'),
        action: 'Attribué',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN2 987 GZ 824 J',
    status: 'assigned',
    assignmentDate: new Date('2024-11-06'),
    macAddress: '00:D2:28:61:F1:94',
    location: 'Louga',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-07'),
        action: 'Invalidé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN2 620 LL 348 T',
    status: 'assigned',
    assignmentDate: new Date('2024-11-10'),
    macAddress: '00:DD:3D:CE:E3:77',
    location: 'Diourbel',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-26'),
        action: 'Créé',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN1 251 EE 973 R',
    status: 'assigned',
    assignmentDate: new Date('2024-11-21'),
    macAddress: '00:EF:1C:82:B0:10',
    location: 'Tambacounda',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-12'),
        action: 'Créé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN1 977 IO 683 Y',
    status: 'assigned',
    assignmentDate: new Date('2024-11-31'),
    macAddress: '00:98:2E:EC:F1:B6',
    location: 'Matam',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-16'),
        action: 'Créé',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN1 254 FR 857 I',
    status: 'assigned',
    assignmentDate: new Date('2024-11-30'),
    macAddress: '00:06:31:1A:8C:8C',
    location: 'Sédhiou',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-25'),
        action: 'Invalidé',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN1 625 WO 791 H',
    status: 'assigned',
    assignmentDate: new Date('2024-11-15'),
    macAddress: '00:96:61:68:B9:79',
    location: 'Louga',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-13'),
        action: 'Invalidé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN2 568 XV 426 W',
    status: 'assigned',
    assignmentDate: new Date('2024-11-16'),
    macAddress: '00:4B:56:44:C2:4C',
    location: 'Saint-Louis',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-13'),
        action: 'Invalidé',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN1 106 SJ 156 J',
    status: 'assigned',
    assignmentDate: new Date('2024-11-23'),
    macAddress: '00:8C:6D:99:2A:F9',
    location: 'Sédhiou',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-27'),
        action: 'Attribué',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN2 566 BX 582 V',
    status: 'assigned',
    assignmentDate: new Date('2024-11-23'),
    macAddress: '00:86:A4:F1:DB:B9',
    location: 'Louga',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-20'),
        action: 'Créé',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN2 140 XH 281 A',
    status: 'assigned',
    assignmentDate: new Date('2024-11-11'),
    macAddress: '00:F4:A7:DD:ED:64',
    location: 'Kaffrine',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-23'),
        action: 'Invalidé',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN1 242 CP 771 E',
    status: 'assigned',
    assignmentDate: new Date('2024-11-20'),
    macAddress: '00:3F:A3:84:C9:5B',
    location: 'Diourbel',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-22'),
        action: 'Invalidé',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN1 533 DW 508 S',
    status: 'assigned',
    assignmentDate: new Date('2024-11-09'),
    macAddress: '00:68:26:F4:08:98',
    location: 'Kolda',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-23'),
        action: 'Attribué',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN1 854 TX 796 V',
    status: 'assigned',
    assignmentDate: new Date('2024-11-09'),
    macAddress: '00:14:B8:C0:E4:E7',
    location: 'Sédhiou',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-11'),
        action: 'Attribué',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN1 613 MK 832 N',
    status: 'assigned',
    assignmentDate: new Date('2024-11-27'),
    macAddress: '00:47:39:46:4E:38',
    location: 'Sédhiou',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-23'),
        action: 'Créé',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN1 922 CK 779 J',
    status: 'assigned',
    assignmentDate: new Date('2024-11-30'),
    macAddress: '00:00:BD:70:1E:E1',
    location: 'Kaolack',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-29'),
        action: 'Attribué',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN2 692 NN 346 I',
    status: 'assigned',
    assignmentDate: new Date('2024-11-07'),
    macAddress: '00:BD:F6:EE:34:4E',
    location: 'Dakar',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-04'),
        action: 'Créé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN1 198 RI 519 L',
    status: 'assigned',
    assignmentDate: new Date('2024-11-06'),
    macAddress: '00:2C:D6:C1:C2:DA',
    location: 'Sédhiou',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-29'),
        action: 'Créé',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN2 705 AF 157 D',
    status: 'assigned',
    assignmentDate: new Date('2024-11-04'),
    macAddress: '00:47:AD:B8:A3:1B',
    location: 'Ziguinchor',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-24'),
        action: 'Invalidé',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN2 193 RT 499 F',
    status: 'assigned',
    assignmentDate: new Date('2024-11-25'),
    macAddress: '00:C5:A9:A4:A9:01',
    location: 'Ziguinchor',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-25'),
        action: 'Attribué',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN1 334 ML 941 L',
    status: 'assigned',
    assignmentDate: new Date('2024-11-03'),
    macAddress: '00:F4:FF:E9:F0:45',
    location: 'Ziguinchor',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-09'),
        action: 'Invalidé',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN2 557 RL 628 S',
    status: 'assigned',
    assignmentDate: new Date('2024-11-23'),
    macAddress: '00:50:30:6D:A5:C4',
    location: 'Sédhiou',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-24'),
        action: 'Attribué',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN2 175 YY 484 A',
    status: 'assigned',
    assignmentDate: new Date('2024-11-07'),
    macAddress: '00:81:6C:15:9E:EF',
    location: 'Kaffrine',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-16'),
        action: 'Créé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN1 755 YW 848 T',
    status: 'assigned',
    assignmentDate: new Date('2024-11-29'),
    macAddress: '00:AC:B0:DA:8B:D8',
    location: 'Diourbel',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-09'),
        action: 'Attribué',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN1 263 MQ 804 V',
    status: 'assigned',
    assignmentDate: new Date('2024-11-14'),
    macAddress: '00:A2:B3:93:53:1E',
    location: 'Tambacounda',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-08'),
        action: 'Créé',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN1 333 BR 121 C',
    status: 'assigned',
    assignmentDate: new Date('2024-11-27'),
    macAddress: '00:E7:6D:87:DF:56',
    location: 'Thiès',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-12'),
        action: 'Invalidé',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN2 462 OB 900 W',
    status: 'assigned',
    assignmentDate: new Date('2024-11-29'),
    macAddress: '00:7B:11:C2:E5:50',
    location: 'Louga',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-18'),
        action: 'Créé',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN1 928 CN 245 C',
    status: 'assigned',
    assignmentDate: new Date('2024-11-23'),
    macAddress: '00:92:F9:01:4A:45',
    location: 'Kaffrine',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-02'),
        action: 'Créé',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN1 197 DP 417 K',
    status: 'assigned',
    assignmentDate: new Date('2024-11-26'),
    macAddress: '00:A9:7A:CE:63:10',
    location: 'Saint-Louis',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-14'),
        action: 'Invalidé',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN2 253 KD 586 J',
    status: 'assigned',
    assignmentDate: new Date('2024-11-08'),
    macAddress: '00:D5:82:C1:4B:20',
    location: 'Thiès',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-15'),
        action: 'Invalidé',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN1 274 DB 708 R',
    status: 'assigned',
    assignmentDate: new Date('2024-11-31'),
    macAddress: '00:00:8E:31:78:AC',
    location: 'Dakar',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-23'),
        action: 'Créé',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN1 345 HY 877 F',
    status: 'assigned',
    assignmentDate: new Date('2024-11-11'),
    macAddress: '00:6E:64:39:F2:62',
    location: 'Matam',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-19'),
        action: 'Créé',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN1 337 SQ 334 F',
    status: 'assigned',
    assignmentDate: new Date('2024-11-06'),
    macAddress: '00:E3:9E:CA:A8:73',
    location: 'Kaolack',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-24'),
        action: 'Attribué',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN2 385 BN 630 B',
    status: 'assigned',
    assignmentDate: new Date('2024-11-19'),
    macAddress: '00:73:7E:CD:74:AE',
    location: 'Dakar',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-13'),
        action: 'Attribué',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN2 853 RG 980 Y',
    status: 'assigned',
    assignmentDate: new Date('2024-11-27'),
    macAddress: '00:54:EF:9A:AA:5E',
    location: 'Fatick',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-19'),
        action: 'Attribué',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN1 829 UG 530 P',
    status: 'assigned',
    assignmentDate: new Date('2024-11-15'),
    macAddress: '00:52:ED:51:71:25',
    location: 'Kaolack',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-25'),
        action: 'Invalidé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN2 711 HX 450 G',
    status: 'assigned',
    assignmentDate: new Date('2024-11-20'),
    macAddress: '00:85:21:86:AD:4E',
    location: 'Diourbel',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-17'),
        action: 'Attribué',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN1 230 JT 227 U',
    status: 'assigned',
    assignmentDate: new Date('2024-11-20'),
    macAddress: '00:51:B3:AC:A9:C0',
    location: 'Saint-Louis',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-03'),
        action: 'Créé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN1 339 ZJ 396 B',
    status: 'assigned',
    assignmentDate: new Date('2024-11-12'),
    macAddress: '00:E7:A1:40:01:BD',
    location: 'Ziguinchor',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-04'),
        action: 'Créé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN1 521 IS 250 C',
    status: 'assigned',
    assignmentDate: new Date('2024-11-09'),
    macAddress: '00:5E:9F:32:24:FE',
    location: 'Ziguinchor',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-16'),
        action: 'Attribué',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN1 309 CW 451 N',
    status: 'assigned',
    assignmentDate: new Date('2024-11-16'),
    macAddress: '00:8A:67:1A:52:25',
    location: 'Diourbel',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-02'),
        action: 'Invalidé',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN1 978 QR 316 W',
    status: 'assigned',
    assignmentDate: new Date('2024-11-25'),
    macAddress: '00:BF:A1:12:52:5F',
    location: 'Fatick',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-02'),
        action: 'Créé',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN2 101 GF 840 M',
    status: 'assigned',
    assignmentDate: new Date('2024-11-20'),
    macAddress: '00:AE:70:2C:26:3C',
    location: 'Tambacounda',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-19'),
        action: 'Créé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN2 963 MY 868 O',
    status: 'assigned',
    assignmentDate: new Date('2024-11-11'),
    macAddress: '00:D2:79:9F:21:67',
    location: 'Dakar',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-08'),
        action: 'Invalidé',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN2 123 QU 617 A',
    status: 'assigned',
    assignmentDate: new Date('2024-11-27'),
    macAddress: '00:29:4E:F7:BA:38',
    location: 'Thiès',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-06'),
        action: 'Attribué',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN2 387 JR 788 E',
    status: 'assigned',
    assignmentDate: new Date('2024-11-05'),
    macAddress: '00:98:36:79:85:9F',
    location: 'Sédhiou',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-09'),
        action: 'Attribué',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN2 993 BE 965 W',
    status: 'assigned',
    assignmentDate: new Date('2024-11-23'),
    macAddress: '00:DF:C5:AF:7C:EA',
    location: 'Kaolack',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-11'),
        action: 'Attribué',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN1 408 IV 738 G',
    status: 'assigned',
    assignmentDate: new Date('2024-11-14'),
    macAddress: '00:EA:CE:A2:ED:06',
    location: 'Kolda',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-07'),
        action: 'Attribué',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN2 841 WT 188 S',
    status: 'assigned',
    assignmentDate: new Date('2024-11-20'),
    macAddress: '00:DC:9C:8B:71:E6',
    location: 'Matam',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-25'),
        action: 'Invalidé',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN2 786 MU 717 Z',
    status: 'assigned',
    assignmentDate: new Date('2024-11-21'),
    macAddress: '00:3C:EB:6F:E6:EF',
    location: 'Kaolack',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-30'),
        action: 'Attribué',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN1 596 MA 678 E',
    status: 'assigned',
    assignmentDate: new Date('2024-11-31'),
    macAddress: '00:90:27:D2:BC:D6',
    location: 'Kaolack',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-11'),
        action: 'Créé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN2 617 DQ 462 M',
    status: 'assigned',
    assignmentDate: new Date('2024-11-22'),
    macAddress: '00:D8:E0:D5:99:C3',
    location: 'Fatick',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-06'),
        action: 'Créé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN1 597 IV 264 I',
    status: 'assigned',
    assignmentDate: new Date('2024-11-12'),
    macAddress: '00:E2:C5:B9:CE:4E',
    location: 'Louga',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-16'),
        action: 'Attribué',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN1 875 HI 881 N',
    status: 'assigned',
    assignmentDate: new Date('2024-11-17'),
    macAddress: '00:EE:50:C8:6C:AA',
    location: 'Saint-Louis',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-13'),
        action: 'Créé',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN1 858 GK 560 Z',
    status: 'assigned',
    assignmentDate: new Date('2024-11-12'),
    macAddress: '00:43:99:A5:C1:15',
    location: 'Fatick',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-08'),
        action: 'Invalidé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN1 960 ZA 662 G',
    status: 'assigned',
    assignmentDate: new Date('2024-11-22'),
    macAddress: '00:01:34:22:E1:CF',
    location: 'Diourbel',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-04'),
        action: 'Attribué',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN2 601 VP 469 J',
    status: 'assigned',
    assignmentDate: new Date('2024-11-04'),
    macAddress: '00:D4:3F:47:A2:DD',
    location: 'Kolda',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-14'),
        action: 'Créé',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN2 901 BE 839 P',
    status: 'assigned',
    assignmentDate: new Date('2024-11-09'),
    macAddress: '00:3B:39:EE:F0:8F',
    location: 'Dakar',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-30'),
        action: 'Invalidé',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN1 823 BT 201 A',
    status: 'assigned',
    assignmentDate: new Date('2024-11-17'),
    macAddress: '00:DD:D1:E8:CB:19',
    location: 'Fatick',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-05'),
        action: 'Attribué',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN2 602 MR 309 E',
    status: 'assigned',
    assignmentDate: new Date('2024-11-30'),
    macAddress: '00:5D:50:3F:EA:09',
    location: 'Kaolack',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-09'),
        action: 'Invalidé',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN1 659 MW 937 Q',
    status: 'assigned',
    assignmentDate: new Date('2024-11-06'),
    macAddress: '00:90:92:4C:C9:0E',
    location: 'Saint-Louis',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-02'),
        action: 'Attribué',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN2 914 UT 319 K',
    status: 'assigned',
    assignmentDate: new Date('2024-11-07'),
    macAddress: '00:01:05:22:E6:85',
    location: 'Kaffrine',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-26'),
        action: 'Invalidé',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN2 817 UB 579 V',
    status: 'assigned',
    assignmentDate: new Date('2024-11-18'),
    macAddress: '00:DD:00:32:F0:3E',
    location: 'Ziguinchor',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-14'),
        action: 'Invalidé',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN2 821 LF 146 I',
    status: 'assigned',
    assignmentDate: new Date('2024-11-03'),
    macAddress: '00:EC:12:40:76:95',
    location: 'Diourbel',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-26'),
        action: 'Attribué',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN2 732 JI 424 V',
    status: 'assigned',
    assignmentDate: new Date('2024-11-03'),
    macAddress: '00:35:75:14:D5:F7',
    location: 'Kaffrine',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-30'),
        action: 'Créé',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN1 124 YW 467 U',
    status: 'assigned',
    assignmentDate: new Date('2024-11-12'),
    macAddress: '00:56:6E:EE:80:E9',
    location: 'Kaolack',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-24'),
        action: 'Invalidé',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN2 856 RN 671 O',
    status: 'assigned',
    assignmentDate: new Date('2024-11-05'),
    macAddress: '00:FC:26:B6:9B:D2',
    location: 'Matam',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-19'),
        action: 'Attribué',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN2 838 GY 647 B',
    status: 'assigned',
    assignmentDate: new Date('2024-11-19'),
    macAddress: '00:02:FC:FF:0D:80',
    location: 'Saint-Louis',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-16'),
        action: 'Invalidé',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN2 618 RK 567 B',
    status: 'assigned',
    assignmentDate: new Date('2024-11-21'),
    macAddress: '00:71:86:2F:81:78',
    location: 'Kolda',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-07'),
        action: 'Attribué',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN1 203 HI 326 H',
    status: 'assigned',
    assignmentDate: new Date('2024-11-02'),
    macAddress: '00:8E:0D:58:52:96',
    location: 'Kolda',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-21'),
        action: 'Attribué',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN2 230 IS 960 S',
    status: 'assigned',
    assignmentDate: new Date('2024-11-25'),
    macAddress: '00:4D:13:F6:31:95',
    location: 'Fatick',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-15'),
        action: 'Invalidé',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN1 879 QH 428 V',
    status: 'assigned',
    assignmentDate: new Date('2024-11-04'),
    macAddress: '00:3E:CA:75:7C:8D',
    location: 'Diourbel',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-15'),
        action: 'Invalidé',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN2 646 OK 582 Z',
    status: 'assigned',
    assignmentDate: new Date('2024-11-11'),
    macAddress: '00:3E:57:7A:77:1F',
    location: 'Kaolack',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-24'),
        action: 'Invalidé',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN1 396 TC 906 K',
    status: 'assigned',
    assignmentDate: new Date('2024-11-17'),
    macAddress: '00:51:52:56:69:3C',
    location: 'Ziguinchor',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-26'),
        action: 'Invalidé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN2 486 BF 869 I',
    status: 'assigned',
    assignmentDate: new Date('2024-11-11'),
    macAddress: '00:D2:6C:C6:1E:DA',
    location: 'Saint-Louis',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-12'),
        action: 'Attribué',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN1 793 AL 275 K',
    status: 'assigned',
    assignmentDate: new Date('2024-11-25'),
    macAddress: '00:B5:08:1A:12:9C',
    location: 'Thiès',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-09'),
        action: 'Invalidé',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN2 592 ZM 734 R',
    status: 'assigned',
    assignmentDate: new Date('2024-11-30'),
    macAddress: '00:AD:03:AA:EF:9C',
    location: 'Kaolack',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-29'),
        action: 'Créé',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN2 452 IP 900 C',
    status: 'assigned',
    assignmentDate: new Date('2024-11-17'),
    macAddress: '00:2A:FB:C9:92:8A',
    location: 'Matam',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-24'),
        action: 'Invalidé',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN1 981 TE 947 H',
    status: 'assigned',
    assignmentDate: new Date('2024-11-18'),
    macAddress: '00:1B:80:96:C6:40',
    location: 'Kolda',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-15'),
        action: 'Attribué',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN1 337 BD 486 O',
    status: 'assigned',
    assignmentDate: new Date('2024-11-11'),
    macAddress: '00:68:0A:46:FD:61',
    location: 'Ziguinchor',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-13'),
        action: 'Créé',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN1 588 WM 333 S',
    status: 'assigned',
    assignmentDate: new Date('2024-11-04'),
    macAddress: '00:46:33:50:F7:23',
    location: 'Diourbel',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-02'),
        action: 'Invalidé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN2 673 AQ 985 S',
    status: 'assigned',
    assignmentDate: new Date('2024-11-25'),
    macAddress: '00:D4:6E:B4:D1:2B',
    location: 'Kaolack',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-13'),
        action: 'Créé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN1 862 DY 826 F',
    status: 'assigned',
    assignmentDate: new Date('2024-11-26'),
    macAddress: '00:59:93:15:41:DE',
    location: 'Tambacounda',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-27'),
        action: 'Créé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN1 635 TH 449 M',
    status: 'assigned',
    assignmentDate: new Date('2024-11-16'),
    macAddress: '00:0F:6F:60:B1:9A',
    location: 'Louga',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-12'),
        action: 'Invalidé',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN2 218 CR 263 Q',
    status: 'assigned',
    assignmentDate: new Date('2024-11-08'),
    macAddress: '00:82:C3:DA:13:52',
    location: 'Ziguinchor',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-22'),
        action: 'Invalidé',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN1 446 NI 330 W',
    status: 'assigned',
    assignmentDate: new Date('2024-11-25'),
    macAddress: '00:E9:B6:8D:DB:D6',
    location: 'Saint-Louis',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-31'),
        action: 'Attribué',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN2 430 MR 785 S',
    status: 'assigned',
    assignmentDate: new Date('2024-11-30'),
    macAddress: '00:59:E8:1D:2B:CE',
    location: 'Saint-Louis',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-05'),
        action: 'Attribué',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN2 336 LK 740 O',
    status: 'assigned',
    assignmentDate: new Date('2024-11-13'),
    macAddress: '00:6B:E1:0C:84:1E',
    location: 'Ziguinchor',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-24'),
        action: 'Créé',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN2 355 IH 288 Z',
    status: 'assigned',
    assignmentDate: new Date('2024-11-19'),
    macAddress: '00:E9:91:46:02:DA',
    location: 'Fatick',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-19'),
        action: 'Créé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN2 248 OL 383 J',
    status: 'assigned',
    assignmentDate: new Date('2024-11-17'),
    macAddress: '00:F7:1C:EF:0A:D6',
    location: 'Kaffrine',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-03'),
        action: 'Attribué',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN2 202 MX 343 Q',
    status: 'assigned',
    assignmentDate: new Date('2024-11-15'),
    macAddress: '00:A0:3F:04:48:B8',
    location: 'Kolda',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-19'),
        action: 'Créé',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN2 133 QE 543 Z',
    status: 'assigned',
    assignmentDate: new Date('2024-11-08'),
    macAddress: '00:F8:6C:A3:F6:31',
    location: 'Ziguinchor',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-30'),
        action: 'Créé',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN2 699 KC 126 U',
    status: 'assigned',
    assignmentDate: new Date('2024-11-23'),
    macAddress: '00:0B:C9:10:35:15',
    location: 'Tambacounda',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-20'),
        action: 'Créé',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN1 730 XA 968 B',
    status: 'assigned',
    assignmentDate: new Date('2024-11-15'),
    macAddress: '00:29:86:A9:0F:77',
    location: 'Diourbel',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-08'),
        action: 'Attribué',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN2 706 CY 538 W',
    status: 'assigned',
    assignmentDate: new Date('2024-11-10'),
    macAddress: '00:31:4C:63:D0:11',
    location: 'Kolda',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-23'),
        action: 'Attribué',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN1 537 GB 859 L',
    status: 'assigned',
    assignmentDate: new Date('2024-11-18'),
    macAddress: '00:53:CC:99:41:1A',
    location: 'Kaffrine',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-11'),
        action: 'Invalidé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN1 360 LH 491 C',
    status: 'assigned',
    assignmentDate: new Date('2024-11-12'),
    macAddress: '00:66:78:DB:96:76',
    location: 'Louga',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-10'),
        action: 'Créé',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN1 863 OY 101 F',
    status: 'assigned',
    assignmentDate: new Date('2024-11-25'),
    macAddress: '00:CE:48:91:BC:FA',
    location: 'Diourbel',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-23'),
        action: 'Créé',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN1 589 PI 612 R',
    status: 'assigned',
    assignmentDate: new Date('2024-11-17'),
    macAddress: '00:A1:03:D8:3E:29',
    location: 'Kolda',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-10'),
        action: 'Invalidé',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN1 879 FP 868 J',
    status: 'assigned',
    assignmentDate: new Date('2024-11-21'),
    macAddress: '00:E1:F7:F1:43:72',
    location: 'Sédhiou',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-10'),
        action: 'Invalidé',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN1 147 ET 958 P',
    status: 'assigned',
    assignmentDate: new Date('2024-11-09'),
    macAddress: '00:B0:D2:BC:CE:D8',
    location: 'Ziguinchor',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-26'),
        action: 'Invalidé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN1 438 ER 545 G',
    status: 'assigned',
    assignmentDate: new Date('2024-11-04'),
    macAddress: '00:A7:64:3E:E9:8F',
    location: 'Sédhiou',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-07'),
        action: 'Invalidé',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN1 879 CJ 489 U',
    status: 'assigned',
    assignmentDate: new Date('2024-11-03'),
    macAddress: '00:69:4D:52:84:36',
    location: 'Tambacounda',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-06'),
        action: 'Créé',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN1 294 JS 467 R',
    status: 'assigned',
    assignmentDate: new Date('2024-11-11'),
    macAddress: '00:86:6C:1D:66:FA',
    location: 'Thiès',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-19'),
        action: 'Invalidé',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN2 269 OK 507 Y',
    status: 'assigned',
    assignmentDate: new Date('2024-11-15'),
    macAddress: '00:AF:C2:70:76:18',
    location: 'Saint-Louis',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-05'),
        action: 'Attribué',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN2 403 DP 754 D',
    status: 'assigned',
    assignmentDate: new Date('2024-11-08'),
    macAddress: '00:B5:BF:87:42:FB',
    location: 'Ziguinchor',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-31'),
        action: 'Créé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN1 655 DS 276 W',
    status: 'assigned',
    assignmentDate: new Date('2024-11-28'),
    macAddress: '00:1C:1B:5A:4D:9E',
    location: 'Fatick',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-25'),
        action: 'Invalidé',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN2 301 GH 621 F',
    status: 'assigned',
    assignmentDate: new Date('2024-11-16'),
    macAddress: '00:47:9A:EA:C8:A0',
    location: 'Matam',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-21'),
        action: 'Invalidé',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN2 255 HP 660 G',
    status: 'assigned',
    assignmentDate: new Date('2024-11-23'),
    macAddress: '00:E4:8D:B4:DC:3D',
    location: 'Sédhiou',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-31'),
        action: 'Attribué',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN2 252 EL 691 R',
    status: 'assigned',
    assignmentDate: new Date('2024-11-18'),
    macAddress: '00:47:D2:06:4F:1D',
    location: 'Ziguinchor',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-12'),
        action: 'Invalidé',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN1 287 DX 223 D',
    status: 'assigned',
    assignmentDate: new Date('2024-11-14'),
    macAddress: '00:AE:35:28:4B:43',
    location: 'Diourbel',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-07'),
        action: 'Créé',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN2 351 FA 937 L',
    status: 'assigned',
    assignmentDate: new Date('2024-11-22'),
    macAddress: '00:93:08:A8:46:54',
    location: 'Dakar',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-15'),
        action: 'Créé',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN2 462 UD 996 P',
    status: 'assigned',
    assignmentDate: new Date('2024-11-27'),
    macAddress: '00:C3:51:F8:BE:8E',
    location: 'Sédhiou',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-20'),
        action: 'Créé',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN1 669 ZM 580 V',
    status: 'assigned',
    assignmentDate: new Date('2024-11-13'),
    macAddress: '00:24:75:41:1B:50',
    location: 'Ziguinchor',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-22'),
        action: 'Invalidé',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN1 922 HL 275 R',
    status: 'assigned',
    assignmentDate: new Date('2024-11-02'),
    macAddress: '00:47:04:68:BB:C0',
    location: 'Tambacounda',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-13'),
        action: 'Créé',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN2 695 TA 117 O',
    status: 'assigned',
    assignmentDate: new Date('2024-11-20'),
    macAddress: '00:82:D4:32:C1:37',
    location: 'Kaolack',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-17'),
        action: 'Invalidé',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN2 501 UY 422 D',
    status: 'assigned',
    assignmentDate: new Date('2024-11-28'),
    macAddress: '00:3D:75:38:23:50',
    location: 'Kolda',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-22'),
        action: 'Invalidé',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN1 228 WF 493 E',
    status: 'assigned',
    assignmentDate: new Date('2024-11-26'),
    macAddress: '00:22:45:17:9E:93',
    location: 'Matam',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-09'),
        action: 'Créé',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN2 940 XQ 783 W',
    status: 'assigned',
    assignmentDate: new Date('2024-11-10'),
    macAddress: '00:BD:61:F1:59:B0',
    location: 'Matam',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-26'),
        action: 'Invalidé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN2 542 GR 665 D',
    status: 'assigned',
    assignmentDate: new Date('2024-11-30'),
    macAddress: '00:B9:7C:DF:CD:5C',
    location: 'Tambacounda',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-27'),
        action: 'Attribué',
        device: 'Device001'
      }
    ]
  },
  {
    id: 'SN1 268 OS 703 J',
    status: 'assigned',
    assignmentDate: new Date('2024-11-04'),
    macAddress: '00:91:24:68:60:0C',
    location: 'Saint-Louis',
    user: 'Khadija Faye',
    history: [
      {
        date: new Date('2024-11-20'),
        action: 'Attribué',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN2 343 CD 157 X',
    status: 'assigned',
    assignmentDate: new Date('2024-11-26'),
    macAddress: '00:29:A1:44:BD:6D',
    location: 'Matam',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-19'),
        action: 'Attribué',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN1 119 VU 552 Z',
    status: 'assigned',
    assignmentDate: new Date('2024-11-19'),
    macAddress: '00:2C:72:47:8F:9B',
    location: 'Kaolack',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-19'),
        action: 'Créé',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN2 807 MC 824 E',
    status: 'assigned',
    assignmentDate: new Date('2024-11-23'),
    macAddress: '00:C5:62:D4:DF:65',
    location: 'Kaolack',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-29'),
        action: 'Créé',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN1 878 RT 213 J',
    status: 'assigned',
    assignmentDate: new Date('2024-11-16'),
    macAddress: '00:D8:5F:3D:7C:B6',
    location: 'Kaffrine',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-21'),
        action: 'Créé',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN1 325 OM 796 N',
    status: 'assigned',
    assignmentDate: new Date('2024-11-29'),
    macAddress: '00:E8:1E:E8:8C:E2',
    location: 'Sédhiou',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-20'),
        action: 'Créé',
        device: 'Device004'
      }
    ]
  },
  {
    id: 'SN1 692 OZ 367 Z',
    status: 'assigned',
    assignmentDate: new Date('2024-11-13'),
    macAddress: '00:86:E2:F5:7E:50',
    location: 'Kaffrine',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-13'),
        action: 'Attribué',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN2 417 RL 807 M',
    status: 'assigned',
    assignmentDate: new Date('2024-11-31'),
    macAddress: '00:5B:58:48:73:E8',
    location: 'Fatick',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-21'),
        action: 'Attribué',
        device: 'Device008'
      }
    ]
  },
  {
    id: 'SN1 341 IF 935 R',
    status: 'assigned',
    assignmentDate: new Date('2024-11-28'),
    macAddress: '00:E8:9E:91:F4:00',
    location: 'Fatick',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-03'),
        action: 'Invalidé',
        device: 'Device009'
      }
    ]
  },
  {
    id: 'SN1 158 SD 180 U',
    status: 'assigned',
    assignmentDate: new Date('2024-11-15'),
    macAddress: '00:CE:06:D8:3F:D8',
    location: 'Louga',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-18'),
        action: 'Attribué',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN2 809 OW 591 X',
    status: 'assigned',
    assignmentDate: new Date('2024-11-09'),
    macAddress: '00:50:D8:13:67:F2',
    location: 'Diourbel',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-16'),
        action: 'Attribué',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN2 973 ZM 624 Y',
    status: 'assigned',
    assignmentDate: new Date('2024-11-06'),
    macAddress: '00:EC:E9:E0:EF:8C',
    location: 'Kaolack',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-29'),
        action: 'Invalidé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN1 594 ND 136 R',
    status: 'assigned',
    assignmentDate: new Date('2024-11-21'),
    macAddress: '00:E4:DE:E3:F3:88',
    location: 'Sédhiou',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-10'),
        action: 'Invalidé',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN1 826 MB 138 H',
    status: 'assigned',
    assignmentDate: new Date('2024-11-16'),
    macAddress: '00:BE:01:31:AF:92',
    location: 'Tambacounda',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-26'),
        action: 'Créé',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN2 785 FD 519 C',
    status: 'assigned',
    assignmentDate: new Date('2024-11-12'),
    macAddress: '00:27:EB:BD:95:8E',
    location: 'Kolda',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-29'),
        action: 'Invalidé',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN1 289 XJ 374 A',
    status: 'assigned',
    assignmentDate: new Date('2024-11-18'),
    macAddress: '00:33:4A:0F:F5:90',
    location: 'Sédhiou',
    user: 'Cheikh Sy',
    history: [
      {
        date: new Date('2024-11-07'),
        action: 'Attribué',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN1 496 TB 367 I',
    status: 'assigned',
    assignmentDate: new Date('2024-11-24'),
    macAddress: '00:DE:5F:39:B0:3B',
    location: 'Tambacounda',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-05'),
        action: 'Invalidé',
        device: 'Device003'
      }
    ]
  },
  {
    id: 'SN1 397 JN 422 C',
    status: 'assigned',
    assignmentDate: new Date('2024-11-17'),
    macAddress: '00:7E:89:15:88:E5',
    location: 'Ziguinchor',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-02'),
        action: 'Créé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN2 873 WS 459 U',
    status: 'assigned',
    assignmentDate: new Date('2024-11-04'),
    macAddress: '00:01:4D:FE:80:3F',
    location: 'Kaffrine',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-18'),
        action: 'Attribué',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN1 683 UJ 901 X',
    status: 'assigned',
    assignmentDate: new Date('2024-11-26'),
    macAddress: '00:E3:D1:C6:A5:6D',
    location: 'Tambacounda',
    user: 'Fatou Sall',
    history: [
      {
        date: new Date('2024-11-21'),
        action: 'Créé',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN1 740 WJ 134 Z',
    status: 'assigned',
    assignmentDate: new Date('2024-11-07'),
    macAddress: '00:64:EC:6D:8E:0A',
    location: 'Fatick',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-15'),
        action: 'Créé',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN2 707 ZD 296 J',
    status: 'assigned',
    assignmentDate: new Date('2024-11-07'),
    macAddress: '00:56:CB:92:6D:E6',
    location: 'Ziguinchor',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-25'),
        action: 'Créé',
        device: 'Device002'
      }
    ]
  },
  {
    id: 'SN2 193 BM 266 C',
    status: 'assigned',
    assignmentDate: new Date('2024-11-18'),
    macAddress: '00:D0:7D:5A:D4:C6',
    location: 'Thiès',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-11'),
        action: 'Invalidé',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN2 970 NM 564 A',
    status: 'assigned',
    assignmentDate: new Date('2024-11-29'),
    macAddress: '00:5C:D2:C5:04:E3',
    location: 'Kolda',
    user: 'Amadou Ba',
    history: [
      {
        date: new Date('2024-11-19'),
        action: 'Invalidé',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN2 958 PF 944 Q',
    status: 'assigned',
    assignmentDate: new Date('2024-11-22'),
    macAddress: '00:5B:E0:4B:E2:C3',
    location: 'Thiès',
    user: 'Ibrahima Sarr',
    history: [
      {
        date: new Date('2024-11-21'),
        action: 'Créé',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN1 174 LF 571 I',
    status: 'assigned',
    assignmentDate: new Date('2024-11-02'),
    macAddress: '00:62:6D:9B:CA:E4',
    location: 'Ziguinchor',
    user: 'Moussa Ndiaye',
    history: [
      {
        date: new Date('2024-11-02'),
        action: 'Invalidé',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN2 795 OH 407 C',
    status: 'assigned',
    assignmentDate: new Date('2024-11-26'),
    macAddress: '00:28:9A:41:00:F7',
    location: 'Kaolack',
    user: 'Awa Diop',
    history: [
      {
        date: new Date('2024-11-07'),
        action: 'Attribué',
        device: 'Device007'
      }
    ]
  },
  {
    id: 'SN1 308 UO 139 G',
    status: 'assigned',
    assignmentDate: new Date('2024-11-29'),
    macAddress: '00:47:32:10:3E:CA',
    location: 'Kaolack',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-26'),
        action: 'Créé',
        device: 'Device005'
      }
    ]
  },
  {
    id: 'SN1 139 UJ 858 T',
    status: 'assigned',
    assignmentDate: new Date('2024-11-02'),
    macAddress: '00:68:A8:49:F5:27',
    location: 'Kaolack',
    user: 'Baye Fall',
    history: [
      {
        date: new Date('2024-11-12'),
        action: 'Attribué',
        device: 'Device010'
      }
    ]
  },
  {
    id: 'SN2 182 PA 984 L',
    status: 'assigned',
    assignmentDate: new Date('2024-11-09'),
    macAddress: '00:E9:4F:09:D3:49',
    location: 'Diourbel',
    user: 'Ousmane Diallo',
    history: [
      {
        date: new Date('2024-11-15'),
        action: 'Invalidé',
        device: 'Device006'
      }
    ]
  },
  {
    id: 'SN2 143 EN 238 N',
    status: 'assigned',
    assignmentDate: new Date('2024-11-13'),
    macAddress: '00:6A:5C:AF:1A:C9',
    location: 'Ziguinchor',
    user: 'Mame Diarra',
    history: [
      {
        date: new Date('2024-11-13'),
        action: 'Invalidé',
        device: 'Device002'
      }
    ]
  },
  
];