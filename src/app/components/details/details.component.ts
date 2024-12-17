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
    }

    .nui-selector {
      margin-bottom: 20px;
    }

    select {
      padding: 8px 12px;
      border: 1px solid #ddd;
      border-radius: 4px;
      font-size: 14px;
      width: 200px;
    }

    .details-content {
      display: grid;
      gap: 20px;
    }

    .info-card, .history-card {
      background: white;
      border-radius: 8px;
      padding: 20px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .info-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 15px;
      margin-top: 15px;
    }

    .info-grid label {
      color: #666;
      display: block;
      margin-bottom: 5px;
    }

    .timeline {
      margin-top: 15px;
    }

    .timeline-item {
      display: grid;
      grid-template-columns: 150px 1fr;
      gap: 20px;
      padding: 15px 0;
      border-bottom: 1px solid #eee;
    }

    .timeline-date {
      color: #666;
    }

    .no-selection {
      text-align: center;
      padding: 40px;
      background: white;
      border-radius: 8px;
      color: #666;
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