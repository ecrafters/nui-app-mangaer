import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { mockNUIs } from '../../data/mock-data';
import { NUI } from '../../models/nui.model';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="dashboard">
      <h1>Tableau de bord NUI</h1>
      
      <div class="kpi-container">
        <div class="kpi-card">
          <h3>Total NUIs</h3>
          <p>{{ nuis.length }}</p>
        </div>
        <div class="kpi-card">
          <h3>Attribués</h3>
          <p>{{ getStatusCount('assigned') }}</p>
        </div>
        <div class="kpi-card">
          <h3>En attente</h3>
          <p>{{ getStatusCount('pending') }}</p>
        </div>
        <div class="kpi-card">
          <h3>Invalidés</h3>
          <p>{{ getStatusCount('invalid') }}</p>
        </div>
      </div>

      <div class="table-container">
        <table>
          <thead>
            <tr>
              <th>NUI</th>
              <th>Statut</th>
              <th>Date d'attribution</th>
              <th>Adresse MAC</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let nui of nuis">
              <td>{{ nui.id }}</td>
              <td>
                <span [class]="'status-' + nui.status">
                  {{ nui.status }}
                </span>
              </td>
              <td>{{ nui.assignmentDate | date }}</td>
              <td>{{ nui.macAddress }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `,
  styles: [`
    .dashboard {
      padding: 20px 20px 20px 270px;
    }

    .kpi-container {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 20px;
      margin: 20px 0;
    }

    .kpi-card {
      background-color: white;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .kpi-card h3 {
      margin: 0;
      color: #666;
      font-size: 14px;
    }

    .kpi-card p {
      margin: 10px 0 0;
      font-size: 24px;
      font-weight: bold;
      color: #2c3e50;
    }

    .table-container {
      background-color: white;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      overflow: hidden;
    }

    table {
      width: 100%;
      border-collapse: collapse;
    }

    th, td {
      padding: 12px;
      text-align: left;
      border-bottom: 1px solid #eee;
    }

    th {
      background-color: #f8f9fa;
      font-weight: 600;
    }

    .status-assigned {
      color: #2ecc71;
    }

    .status-pending {
      color: #f1c40f;
    }

    .status-invalid {
      color: #e74c3c;
    }
  `]
})
export class DashboardComponent {
  nuis: NUI[] = mockNUIs;

  getStatusCount(status: 'assigned' | 'pending' | 'invalid'): number {
    return this.nuis.filter(nui => nui.status === status).length;
  }
}