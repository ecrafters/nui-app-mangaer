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
  background-color: #f4f6f8;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

h1 {
  text-align: center;
  font-size: 28px;
  margin-bottom: 30px;
  color: #2c3e50;
}

.kpi-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 40px;
}

.kpi-card {
  background-color: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.kpi-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.kpi-card h3 {
  margin: 0;
  color: #7f8c8d;
  font-size: 16px;
  font-weight: 600;
}

.kpi-card p {
  margin: 10px 0 0;
  font-size: 32px;
  font-weight: bold;
  color: #2c3e50;
}

.kpi-card:nth-child(1) p {
  color: #3498db; /* Bleu */
}

.kpi-card:nth-child(2) p {
  color: #2ecc71; /* Vert */
}

.kpi-card:nth-child(3) p {
  color: #f1c40f; /* Jaune */
}

.kpi-card:nth-child(4) p {
  color: #e74c3c; /* Rouge */
}

.table-container {
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin-top: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 15px;
  text-align: left;
}

th {
  background-color: #2c3e50;
  color: white;
  font-weight: 600;
  text-transform: uppercase;
  position: sticky;
  top: 0;
}

tr:nth-child(even) {
  background-color: #f9f9f9;
}

tr:hover {
  background-color: #f1f1f1;
  transition: background-color 0.3s ease;
}

.status-assigned {
  color: #27ae60;
  font-weight: bold;
}

.status-pending {
  color: #f39c12;
  font-weight: bold;
}

.status-invalid {
  color: #c0392b;
  font-weight: bold;
}

  `]
})
export class DashboardComponent {
  nuis: NUI[] = mockNUIs;

  getStatusCount(status: 'assigned' | 'pending' | 'invalid'): number {
    return this.nuis.filter(nui => nui.status === status).length;
  }
}