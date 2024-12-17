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
    <div class="reports-page astuces">
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
