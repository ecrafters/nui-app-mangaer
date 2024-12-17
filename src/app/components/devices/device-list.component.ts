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
  background-color: #f4f6f8;
  font-family: 'Arial', sans-serif;
}

h1 {
  text-align: center;
  font-size: 28px;
  color: #2c3e50;
  margin-bottom: 20px;
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
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: background-color 0.3s ease;
}

.primary-btn:hover {
  background-color: #27ae60;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 30px;
}

.stat-card {
  background: #ffffff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-5px);
}

.stat-card h3 {
  color: #666;
  font-size: 14px;
  margin-bottom: 10px;
}

.stat-card p {
  font-size: 28px;
  font-weight: bold;
  color: #2c3e50;
  margin: 0;
}

.devices-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 20px;
}

.device-card {
  background: #ffffff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.device-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.device-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.device-id {
  font-size: 18px;
  font-weight: bold;
  color: #34495e;
}

.status-badge {
  padding: 5px 10px;
  border-radius: 8px;
  font-size: 12px;
  font-weight: bold;
  text-transform: capitalize;
}

.status-badge.active {
  background-color: #e8f5e9;
  color: #27ae60;
}

.status-badge.offline {
  background-color: #fbeeee;
  color: #c0392b;
}

.status-badge.maintenance {
  background-color: #fff8e1;
  color: #f39c12;
}

.device-info {
  margin-bottom: 15px;
}

.info-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  font-size: 14px;
}

.label {
  color: #888;
  font-weight: bold;
}

.device-stats {
  display: flex;
  justify-content: space-between;
  gap: 10px;
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
  font-size: 20px;
  font-weight: bold;
  color: #2c3e50;
}

.device-actions {
  display: flex;
  gap: 10px;
}

.action-btn {
  flex: 1;
  padding: 8px;
  border: none;
  border-radius: 8px;
  background: #ecf0f1;
  color: #2c3e50;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.action-btn:hover {
  background: #bdc3c7;
  transform: scale(1.05);
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