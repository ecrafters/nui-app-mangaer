import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { mockNUIs } from '../../data/mock-data';
import { NUI } from '../../models/nui.model';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="details-page">
      <h1>Détails NUI</h1>
      
      <div class="nui-selector">
        <select [(ngModel)]="selectedNuiId" (change)="selectNui()">
          <option value="">Sélectionner un NUI</option>
          <option *ngFor="let nui of nuis" [value]="nui.id">
            {{ nui.id }}
          </option>
        </select>
      </div>

      <div class="details-content" *ngIf="selectedNui">
        <div class="info-card">
          <h2>Informations générales</h2>
          <div class="info-grid">
            <div>
              <label>Statut:</label>
              <span>{{ selectedNui.status }}</span>
            </div>
            <div>
              <label>Date d'attribution:</label>
              <span>{{ selectedNui.assignmentDate | date }}</span>
            </div>
            <div>
              <label>Adresse MAC:</label>
              <span>{{ selectedNui.macAddress }}</span>
            </div>
            <div>
              <label>Localisation:</label>
              <span>{{ selectedNui.location || '-' }}</span>
            </div>
            <div>
              <label>Utilisateur:</label>
              <span>{{ selectedNui.user || '-' }}</span>
            </div>
          </div>
        </div>

        <div class="history-card">
          <h2>Historique</h2>
          <div class="timeline">
            <div class="timeline-item" *ngFor="let event of selectedNui.history">
              <div class="timeline-date">
                {{ event.date | date:'short' }}
              </div>
              <div class="timeline-content">
                <strong>{{ event.action }}</strong>
                <div *ngIf="event.device">
                  Appareil: {{ event.device }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="no-selection" *ngIf="!selectedNui">
        Veuillez sélectionner un NUI pour voir les détails
      </div>
    </div>
  `,
  styles: [`
    .details-page {
      padding: 20px 20px 20px 270px;
  background-color: #f4f6f8;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

h1 {
  text-align: center;
  font-size: 28px;
  color: #2c3e50;
  margin-bottom: 20px;
}

.nui-selector {
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
}

select {
  padding: 10px 15px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
  width: 250px;
  transition: border 0.3s ease;
}

select:focus {
  border-color: #2980b9;
  outline: none;
}

.details-content {
  display: grid;
  gap: 25px;
}

.info-card, .history-card {
  background: #ffffff;
  border-radius: 12px;
  padding: 20px 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.info-card:hover, .history-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.info-card h2, .history-card h2 {
  font-size: 22px;
  margin-bottom: 20px;
  color: #2c3e50;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px 40px;
}

.info-grid label {
  color: #7f8c8d;
  font-weight: 600;
  margin-bottom: 5px;
  display: block;
}

.info-grid span {
  font-size: 16px;
  color: #2c3e50;
  font-weight: 500;
}

.timeline {
  position: relative;
  margin-top: 15px;
}

.timeline-item {
  display: flex;
  gap: 20px;
  padding: 15px 0;
  border-bottom: 1px solid #eee;
  position: relative;
}

.timeline-item::before {
  content: '';
  position: absolute;
  left: -10px;
  top: 0;
  width: 10px;
  height: 10px;
  background: #3498db;
  border-radius: 50%;
  transform: translateX(-50%);
}

.timeline-date {
  color: #7f8c8d;
  font-size: 14px;
  font-weight: bold;
}

.timeline-content {
  background: #ecf0f1;
  padding: 10px 15px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.timeline-content strong {
  font-size: 16px;
  color: #2c3e50;
}

.no-selection {
  text-align: center;
  padding: 50px;
  background: #f8f9fa;
  border-radius: 12px;
  color: #7f8c8d;
  font-size: 18px;
  font-weight: 500;
}
  `]
})
export class DetailsComponent {
  nuis: NUI[] = mockNUIs;
  selectedNuiId = '';
  selectedNui: NUI | null = null;

  selectNui() {
    this.selectedNui = this.nuis.find(nui => nui.id === this.selectedNuiId) || null;
  }
}