import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { mockDevices } from '../../data/mock-devices';
import { Device } from '../../models/device.model';

@Component({
  selector: 'app-device-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="devices-page">
      <h1>Gestion des Appareils</h1>

      <div class="actions">
        <button class="primary-btn" (click)="openRegistrationForm()">
          <i class="fas fa-plus"></i>
          Nouvel Appareil
        </button>

        <div class="filters">
          <select [(ngModel)]="statusFilter" (change)="filterDevices()">
            <option value="">Tous les statuts</option>
            <option value="active">Actif</option>
            <option value="offline">Hors ligne</option>
            <option value="maintenance">En maintenance</option>
          </select>

          <input
            type="text"
            [(ngModel)]="searchTerm"
            placeholder="Rechercher..."
            (input)="filterDevices()"
          >
        </div>
      </div>

      <div class="stats-grid">
        <div class="stat-card">
          <h3>Total Appareils</h3>
          <p>{{ devices.length }}</p>
        </div>
        <div class="stat-card">
          <h3>Actifs</h3>
          <p>{{ getStatusCount('active') }}</p>
        </div>
        <div class="stat-card">
          <h3>Hors ligne</h3>
          <p>{{ getStatusCount('offline') }}</p>
        </div>
        <div class="stat-card">
          <h3>En maintenance</h3>
          <p>{{ getStatusCount('maintenance') }}</p>
        </div>
      </div>

      <div class="devices-grid">
        <div class="device-card" *ngFor="let device of filteredDevices">
          <div class="device-header">
            <span class="device-id">{{ device.id }}</span>
            <span [class]="'status-badge ' + device.status">
              {{ device.status }}
            </span>
          </div>

          <div class="device-info">
            <div class="info-row">
              <span class="label">MAC:</span>
              <span>{{ device.macAddress }}</span>
            </div>
            <div class="info-row">
              <span class="label">Modèle:</span>
              <span>{{ device.hardware.brand }} {{ device.hardware.model }}</span>
            </div>
            <div class="info-row">
              <span class="label">OS:</span>
              <span>{{ device.hardware.os }} {{ device.hardware.version }}</span>
            </div>
            <div class="info-row">
              <span class="label">Localisation:</span>
              <span>{{ device.location }}</span>
            </div>
            <div class="info-row">
              <span class="label">Utilisateur:</span>
              <span>{{ device.assignedUser }}</span>
            </div>
          </div>

          <div class="device-stats">
            <div class="stat">
              <span class="stat-label">NUIs</span>
              <span class="stat-value">{{ device.nuiCount }}</span>
            </div>
            <div class="stat">
              <span class="stat-label">Syncs en attente</span>
              <span class="stat-value" [class.has-pending]="device.pendingSyncs > 0">
                {{ device.pendingSyncs }}
              </span>
            </div>
          </div>

          <div class="device-actions">
            <button class="action-btn" (click)="forceSync(device)">
              <i class="fas fa-sync"></i>
              Forcer sync
            </button>
            <button class="action-btn" (click)="toggleStatus(device)">
              <i class="fas fa-power-off"></i>
              Changer statut
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .devices-page {
      padding: 20px 20px 20px 270px;
    }

    .actions {
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;
    }

    .filters {
      display: flex;
      gap: 15px;
    }

    .primary-btn {
      padding: 8px 16px;
      background-color: #2ecc71;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .stats-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 20px;
      margin-bottom: 30px;
    }

    .stat-card {
      background: white;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      text-align: center;
    }

    .stat-card h3 {
      color: #666;
      font-size: 14px;
      margin-bottom: 10px;
    }

    .stat-card p {
      font-size: 24px;
      font-weight: bold;
      color: #2c3e50;
      margin: 0;
    }

    .devices-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 20px;
    }

    .device-card {
      background: white;
      border-radius: 8px;
      padding: 20px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .device-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 15px;
    }

    .device-id {
      font-weight: bold;
      font-size: 18px;
    }

    .status-badge {
      padding: 4px 8px;
      border-radius: 4px;
      font-size: 12px;
      font-weight: 500;
    }

    .status-badge.active {
      background-color: #e8f5e9;
      color: #2e7d32;
    }

    .status-badge.offline {
      background-color: #fafafa;
      color: #616161;
    }

    .status-badge.maintenance {
      background-color: #fff3e0;
      color: #ef6c00;
    }

    .device-info {
      margin-bottom: 20px;
    }

    .info-row {
      display: flex;
      justify-content: space-between;
      margin-bottom: 8px;
      font-size: 14px;
    }

    .label {
      color: #666;
    }

    .device-stats {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 15px;
      margin-bottom: 20px;
      padding: 15px;
      background: #f8f9fa;
      border-radius: 4px;
    }

    .stat {
      text-align: center;
    }

    .stat-label {
      display: block;
      font-size: 12px;
      color: #666;
      margin-bottom: 5px;
    }

    .stat-value {
      font-size: 18px;
      font-weight: bold;
      color: #2c3e50;
    }

    .has-pending {
      color: #e74c3c;
    }

    .device-actions {
      display: flex;
      gap: 10px;
    }

    .action-btn {
      flex: 1;
      padding: 8px;
      border: 1px solid #ddd;
      border-radius: 4px;
      background: white;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      font-size: 14px;
      color: #666;
      transition: all 0.3s ease;
    }

    .action-btn:hover {
      background: #f8f9fa;
      border-color: #2c3e50;
      color: #2c3e50;
    }
  `]
})
export class DeviceListComponent {
  devices = mockDevices;
  filteredDevices = [...this.devices];
  statusFilter = '';
  searchTerm = '';

  getStatusCount(status: 'active' | 'offline' | 'maintenance'): number {
    return this.devices.filter(device => device.status === status).length;
  }

  filterDevices() {
    this.filteredDevices = this.devices.filter(device => {
      const matchesStatus = !this.statusFilter || device.status === this.statusFilter;
      const matchesSearch = !this.searchTerm || 
        device.id.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        device.macAddress.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        device.assignedUser.toLowerCase().includes(this.searchTerm.toLowerCase());
      
      return matchesStatus && matchesSearch;
    });
  }

  openRegistrationForm() {
    // TODO: Implémenter le formulaire d'enregistrement
    console.log('Ouverture du formulaire d\'enregistrement');
  }

  forceSync(device: Device) {
    // TODO: Implémenter la synchronisation forcée
    console.log('Synchronisation forcée pour', device.id);
  }

  toggleStatus(device: Device) {
    // TODO: Implémenter le changement de statut
    console.log('Changement de statut pour', device.id);
  }
}