import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { mockReports } from '../../data/mock-reports';
import { Report, ReportData, ErrorReport } from '../../models/report.model';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="page">
      <h1>Rapports Dynamiques</h1>

      <!-- Filtres -->
      <div class="filters">
        <div class="filter-group">
          <label>Période :</label>
          <select [(ngModel)]="selectedPeriod" (change)="updateSelectedReport()">
            <option value="day">Jour</option>
            <option value="week">Semaine</option>
            <option value="month">Mois</option>
            <option value="year">Année</option>
          </select>
        </div>

        <div class="filter-group">
          <label>Type de rapport :</label>
          <select [(ngModel)]="selectedReportType" (change)="updateSelectedReport()">
            <option value="attribution">Attributions</option>
            <option value="error">Erreurs</option>
          </select>
        </div>
      </div>

      <!-- Contenu du rapport -->
      <div class="report-content" *ngIf="selectedReport">
        <h2>{{ selectedReport.title }}</h2>
        <p>{{ selectedReport.period.start | date }} - {{ selectedReport.period.end | date }}</p>

        <!-- Rapport Attribution -->
        <table *ngIf="selectedReport.type === 'attribution'">
          <thead>
            <tr>
              <th>Date</th>
              <th>Nombre</th>
              <th>Localisation</th>
              <th>Statut</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let item of reportData">
              <td>{{ item.date | date }}</td>
              <td>{{ item.count }}</td>
              <td>{{ item.location || 'N/A' }}</td>
              <td>{{ item.status || 'N/A' }}</td>
            </tr>
          </tbody>
        </table>

        <!-- Rapport Erreurs -->
        <div *ngIf="selectedReport.type === 'error'">
          <p><strong>Total Erreurs :</strong> {{ errorData.length }}</p>
          <p><strong>Résolues :</strong> {{ getResolvedErrorsCount() }}</p>

          <div *ngFor="let error of errorData">
            <p><strong>ID :</strong> {{ error.id }}</p>
            <p><strong>Date :</strong> {{ error.date | date:'short' }}</p>
            <p><strong>Type :</strong> {{ error.type }}</p>
            <p><strong>Description :</strong> {{ error.description }}</p>
            <p *ngIf="error.resolution"><strong>Résolution :</strong> {{ error.resolution }}</p>
            <p><strong>NUIs affectés :</strong> {{ error.affectedNuis.join(', ') }}</p>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .page {
      padding: 20px 20px 20px 270px;
      background-color: #f4f6f8;
      font-family: 'Arial', sans-serif;
    }

    h1 {
      color: #2c3e50;
      font-size: 28px;
      margin-bottom: 20px;
      text-align: center;
    }

    .filters {
      display: flex;
      justify-content: center;
      gap: 20px;
      margin-bottom: 30px;
    }

    .filter-group {
      display: flex;
      flex-direction: column;
      gap: 5px;
    }

    label {
      font-size: 14px;
      color: #555;
      font-weight: bold;
    }

    select {
      padding: 8px 12px;
      border: 1px solid #ccc;
      border-radius: 4px;
      font-size: 14px;
      transition: border 0.3s;
    }

    select:focus {
      outline: none;
      border-color: #3498db;
    }

    .report-content {
      background: #ffffff;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      padding: 25px;
      margin: 0 auto;
      max-width: 1200px;
    }

    h2 {
      color: #34495e;
      font-size: 22px;
      margin-bottom: 10px;
      border-bottom: 2px solid #3498db;
      padding-bottom: 10px;
    }

    p {
      color: #777;
      font-size: 14px;
      margin-bottom: 15px;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 20px;
    }

    th, td {
      padding: 12px;
      text-align: left;
      border-bottom: 1px solid #ddd;
    }

    th {
      background-color: #3498db;
      color: white;
      font-weight: bold;
    }

    tbody tr:nth-child(even) {
      background-color: #f9f9f9;
    }

    tbody tr:hover {
      background-color: #ecf0f1;
      cursor: pointer;
    }

    .report-content .error-report p {
      font-size: 16px;
      color: #333;
      font-weight: bold;
    }

    .report-content .error-report .resolved {
      color: #27ae60;
    }

    .error-report div {
      margin: 10px 0;
      padding: 15px;
      background-color: #fafafa;
      border: 1px solid #ddd;
      border-radius: 5px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    }

    strong {
      color: #2c3e50;
      font-size: 14px;
    }

    button {
      padding: 10px 20px;
      border: none;
      border-radius: 4px;
      background-color: #3498db;
      color: white;
      font-size: 14px;
      cursor: pointer;
      transition: background-color 0.3s;
    }

    button:hover {
      background-color: #2980b9;
    }
  `]
})
export class ReportsComponent implements OnInit {
  reports: Report[] = mockReports;
  selectedPeriod: string = 'month';
  selectedReportType: 'attribution' | 'error' = 'attribution';
  selectedReport: Report | null = null;

  ngOnInit() {
    this.updateSelectedReport();
  }

  updateSelectedReport() {
    this.selectedReport = this.reports.find(
      (report) => report.type === this.selectedReportType
    ) || null;
  }

  get reportData(): ReportData[] {
    return this.selectedReport?.type === 'attribution'
      ? (this.selectedReport.data as ReportData[])
      : [];
  }

  get errorData(): ErrorReport[] {
    return this.selectedReport?.type === 'error'
      ? (this.selectedReport.data as ErrorReport[])
      : [];
  }

  getResolvedErrorsCount(): number {
    return this.errorData.filter((error) => !!error.resolution).length;
  }
}
