export interface ActivityLog {
  id: string;
  timestamp: Date;
  type: 'nui_generation' | 'nui_deletion' | 'nui_assignment' | 'config_change' | 'system_access';
  user: string;
  action: string;
  details: {
    nuis?: string[];
    device?: string;
    ipAddress?: string;
    changes?: Record<string, any>;
    success?: boolean;
    reason?: string;
  };
}