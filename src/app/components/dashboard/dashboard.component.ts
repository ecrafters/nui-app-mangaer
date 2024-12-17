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
            <tr *ngFor="let nui of paginatedNUIs">
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

      <!-- Pagination -->
      <div class="pagination">
        <button (click)="changePage(-1)" [disabled]="currentPage === 1">&laquo; Précédent</button>
        <span>Page {{ currentPage }} / {{ totalPages }}</span>
        <button (click)="changePage(1)" [disabled]="currentPage === totalPages">Suivant &raquo;</button>
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

    .pagination {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      margin-top: 20px;
    }

    .pagination button {
      padding: 8px 16px;
      border: none;
      border-radius: 4px;
      background-color: #2c3e50;
      color: white;
      font-size: 14px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    .pagination button:disabled {
      background-color: #ccc;
      cursor: not-allowed;
    }

    .pagination button:hover:not(:disabled) {
      background-color: #34495e;
    }

    .pagination span {
      font-size: 16px;
      font-weight: 500;
    }
  `]
})
export class DashboardComponent {
  nuis: NUI[] = mockNUIs;

  // Pagination variables
  currentPage: number = 1;
  itemsPerPage: number = 10;

  // Méthode pour récupérer les NUIs de la page actuelle
  get paginatedNUIs(): NUI[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.nuis.slice(startIndex, endIndex);
  }

  // Nombre total de pages
  get totalPages(): number {
    return Math.ceil(this.nuis.length / this.itemsPerPage);
  }

  // Changer de page
  changePage(direction: number) {
    const newPage = this.currentPage + direction;
    if (newPage > 0 && newPage <= this.totalPages) {
      this.currentPage = newPage;
    }
  }

  getStatusCount(status: 'assigned' | 'pending' | 'invalid'): number {
    return this.nuis.filter(nui => nui.status === status).length;
  }
}
