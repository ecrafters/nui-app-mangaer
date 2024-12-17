import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { mockDevices, mockDeviceSyncs } from '../../data/mock-devices';
import { Device, DeviceSync } from '../../models/device.model';

@Component({
  selector: 'app-device-sync',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="sync-page">
      <h1>Suivi des Synchronisations</h1>

      <div class="sync-overview">
        <div class="overview-card">
          <h3>Synchronisations en attente</h3>
          <p class="large-number">{{ getTotalPendingSyncs() }}</p>
        </div>
        
        <div class="overview-card">
          <h3>Dernière synchronisation</h3>
          <p class="timestamp">{{ getLastSyncTime() | date:'medium' }}</p>
        </div>
        
        <div class="overview-card">
          <h3>Taux de réussite</h3>
          <p class="percentage">{{ getSuccessRate() }}%</p>
        </div>
      </div>

      <div class="sync-list">
        <div class="sync-item" *ngFor="let sync of deviceSyncs" [class.failed]="sync.status === 'failed'">
          <div class="sync-header">
            <div class="sync-info">
              <span class="sync-id">{{ sync.id }}</span>
              <span class="sync-device">{{ getDeviceName(sync.deviceId) }}</span>
            </div>
            <span class="sync-timestamp">{{ sync.timestamp | date:'medium' }}</span>
          </div>

          <div class="sync-details">
            <div class="sync-type">
              <i class="fas" [class.fa-database]="sync.type === 'nui'" [class.fa-users]="sync.type === 'user_data'"></i>
              {{ sync.type === 'nui' ? 'Synchronisation NUIs' : 'Données utilisateurs' }}
            </div>

            <div class="sync-status" [class.success]="sync.status === 'success'" [class.error]="sync.status === 'failed'">
              <i class="fas" [class.fa-check-circle]="sync.status === 'success'" [class.fa-times-circle]="sync.status === 'failed'"></i>
              {{ sync.status === 'success' ? 'Succès' : 'Échec' }}
            </div>

            <div class="sync-metrics" *ngIf="sync.status === 'success'">
              <div *ngIf="sync.details.nuisSynced" class="metric">
                <span class="metric-label">NUIs synchronisés:</span>
                <span class="metric-value">{{ sync.details.nuisSynced }}</span>
              </div>
              <div *ngIf="sync.details.userRecords" class="metric">
                <span class="metric-label">Enregistrements utilisateurs:</span>
                <span class="metric-value">{{ sync.details.userRecords }}</span>
              </div>
            </div>

            <div class="error-message" *ngIf="sync.status === 'failed'">
              {{ sync.details.error }}
            </div>
          </div>

          <div class="sync-actions" *ngIf="sync.status === 'failed'">
            <button class="retry-btn" (click)="retrySync(sync)">
              <i class="fas fa-redo"></i>
              Réessayer
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .sync-page {
      padding: 20px 20px 20px 270px;
    }

    .sync-overview {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
      margin-bottom: 30px;
    }

    .overview-card {
      background: white;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      text-align: center;
    }

    .overview-card h3 {
      color: #666;
      font-size: 14px;
      margin-bottom: 10px;
    }

    .large-number {
      font-size: 36px;
      font-weight: bold;
      color: #2c3e50;
    }

    .timestamp {
      font-size: 18px;
      color: #2c3e50;
    }

    .percentage {
      font-size: 24px;
      font-weight: bold;
      color: #27ae60;
    }

    .sync-list {
      display: grid;
      gap: 15px;
    }

    .sync-item {
      background: white;
      border-radius: 8px;
      padding: 20px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .sync-item.failed {
      border-left: 4px solid #e74c3c;
    }

    .sync-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 15px;
    }

    .sync-info {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .sync-id {
      font-weight: bold;
    }

    .sync-device {
      color: #666;
    }

    .sync-timestamp {
      color: #666;
      font-size: 14px;
    }

    .sync-details {
      display: grid;
      gap: 15px;
    }

    .sync-type {
      display: flex;
      align-items: center;
      gap: 8px;
      color: #2c3e50;
    }

    .sync-status {
      display: flex;
      align-items: center;
      gap: 8px;
      font-weight: 500;
    }

    .sync-status.success {
      color: #27ae60;
    }

    .sync-status.error {
      color: #e74c3c;
    }

    .sync-metrics {
      display: grid;
      gap: 8px;
    }

    .metric {
      display: flex;
      justify-content: space-between;
      font-size: 14px;
    }

    .metric-label {
      color: #666;
    }

    .metric-value {
      font-weight: 500;
    }

    .error-message {
      color: #e74c3c;
      font-size: 14px;
      padding: 8px;
      background: #fdf3f2;
      border-radius: 4px;
    }

    .sync-actions {
      margin-top: 15px;
      display: flex;
      justify-content: flex-end;
    }

    .retry-btn {
      padding: 8px 16px;
      background: #e74c3c;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 14px;
    }

    .retry-btn:hover {
      background: #c0392b;
    }
  `]
})
export class DeviceSyncComponent {
  devices = mockDevices;
  deviceSyncs = mockDeviceSyncs;

  getTotalPendingSyncs(): number {
    return this.devices.reduce((total, device) => total + device.pendingSyncs, 0);
  }

  getLastSyncTime(): Date {
    return this.deviceSyncs.reduce((latest, sync) => 
      sync.timestamp > latest ? sync.timestamp : latest,
      new Date(0)
    );
  }

  getSuccessRate(): number {
    const total = this.deviceSyncs.length;
    if (total === 0) return 0;
    
    const successful = this.deviceSyncs.filter(sync => sync.status === 'success').length;
    return Math.round((successful / total) * 100);
  }

  getDeviceName(deviceId: string): string {
    const device = this.devices.find(d => d.id === deviceId);
    return device ? `${device.hardware.brand} ${device.hardware.model}` : deviceId;
  }

  retrySync(sync: DeviceSync) {
    // TODO: Implémenter la réessai de synchronisation
    console.log('Réessai de la synchronisation', sync.id);
  }
}