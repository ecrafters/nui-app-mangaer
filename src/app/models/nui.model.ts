export interface NUI {
  id: string;
  status: 'assigned' | 'pending' | 'invalid';
  assignmentDate: Date;
  macAddress: string;
  location?: string;
  user?: string;
  history: {
    date: Date;
    action: string;
    device?: string;
  }[];
}