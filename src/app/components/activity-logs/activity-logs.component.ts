import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { mockActivityLogs } from '../../data/mock-activity-logs';
import { ActivityLog } from '../../models/activity-log.model';

@Component({
  selector: 'app-activity-logs',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="logs-page">
      <h1>Journaux d'Activité</h1>

      <div class="filters">
        <input
          type="text"
          [(ngModel)]="searchTerm"
          placeholder="Rechercher..."
          (input)="filterLogs()"
        >

        <select [(ngModel)]="typeFilter" (change)="filterLogs()">
          <option value="">Tous les types</option>
          <option value="nui_generation">Génération NUI</option>
          <option value="nui_deletion">Suppression NUI</option>
          <option value="nui_assignment">Attribution NUI</option>
          <option value="config_change">Configuration</option>
          <option value="system_access">Accès système</option>
        </select>

        <button class="export-btn" (click)="exportLogs()">
          <i class="fas fa-download"></i>
          Exporter
        </button>
      </div>

      <div class="logs-content">
        <div class="log-item" *ngFor="let log of filteredLogs" [class.error]="!log.details.success">
          <div class="log-header">
            <span class="log-timestamp">{{ log.timestamp | date:'medium' }}</span>
            <span class="log-type">{{ log.type }}</span>
          </div>
          
          <div class="log-body">
            <div class="log-user">
              <i class="fas fa-user"></i>
              {{ log.user }}
            </div>
            
            <div class="log-action">{{ log.action }}</div>
            
            <div class="log-details">
              <ng-container [ngSwitch]="log.type">
                <div *ngSwitchCase="'nui_generation'" class="detail-item">
                  <strong>NUIs générés:</strong> {{ log.details.nuis?.join(', ') }}
                </div>
                
                <div *ngSwitchCase="'nui_assignment'" class="detail-item">
                  <strong>NUI:</strong> {{ log.details.nuis?.[0] }}
                  <strong>Appareil:</strong> {{ log.details.device }}
                </div>
                
                <div *ngSwitchCase="'system_access'" class="detail-item">
                  <strong>IP:</strong> {{ log.details.ipAddress }}
                  <div *ngIf="!log.details.success" class="error-message">
                    {{ log.details.reason }}
                  </div>
                </div>
              </ng-container>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .logs-page {
      padding: 20px 20px 20px 270px;
    }

    .filters {
      display: flex;
      gap: 15px;
      margin-bottom: 30px;
    }

    input, select {
      padding: 8px 12px;
      border: 1px solid #ddd;
      border-radius: 4px;
      font-size: 14px;
    }

    input {
      flex: 1;
      max-width: 300px;
    }

    .export-btn {
      padding: 8px 16px;
      background-color: #2c3e50;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .export-btn:hover {
      background-color: #34495e;
    }

    .logs-content {
      display: grid;
      gap: 15px;
    }

    .log-item {
      background: white;
      border-radius: 8px;
      padding: 15px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .log-item.error {
      border-left: 4px solid #e74c3c;
    }

    .log-header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;
      font-size: 14px;
    }

    .log-timestamp {
      color: #666;
    }

    .log-type {
      background: #f8f9fa;
      padding: 2px 8px;
      border-radius: 4px;
      font-size: 12px;
    }

    .log-body {
      display: grid;
      gap: 10px;
    }

    .log-user {
      display: flex;
      align-items: center;
      gap: 8px;
      color: #666;
    }

    .log-action {
      font-weight: 500;
    }

    .log-details {
      font-size: 14px;
      color: #666;
    }

    .detail-item {
      margin-top: 5px;
    }

    .detail-item strong {
      margin-right: 8px;
      color: #2c3e50;
    }

    .error-message {
      color: #e74c3c;
      margin-top: 5px;
    }
  `]
})
export class ActivityLogsComponent {
  logs = mockActivityLogs;
  filteredLogs: ActivityLog[] = [...this.logs];
  
  searchTerm = '';
  typeFilter = '';

  filterLogs() {
    this.filteredLogs = this.logs.filter(log => {
      const matchesSearch = !this.searchTerm || 
        log.user.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        log.action.toLowerCase().includes(this.searchTerm.toLowerCase());
        
      const matchesType = !this.typeFilter || 
        log.type === this.typeFilter;
        
      return matchesSearch && matchesType;
    });
  }

  exportLogs() {
    // TODO: Implémenter l'export
    console.log('Export des logs', this.filteredLogs.length);
  }
}