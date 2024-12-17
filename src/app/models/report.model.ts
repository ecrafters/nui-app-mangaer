export interface ReportData {
  date: Date;
  count: number;
  location?: string;
  status?: string;
  device?: string;
  user?: string;
}

export interface ErrorReport {
  id: string;
  type: 'duplicate' | 'invalid_assignment' | 'other';
  date: Date;
  affectedNuis: string[];
  description: string;
  resolution?: string;
  devices?: string[];
  users?: string[];
}

export interface Report {
  id: string;
  title: string;
  period: {
    start: Date;
    end: Date;
  };
  type: 'attribution' | 'error';
  data: ReportData[] | ErrorReport[];
  filters: {
    status?: string[];
    location?: string[];
    operator?: string[];
  };
}
