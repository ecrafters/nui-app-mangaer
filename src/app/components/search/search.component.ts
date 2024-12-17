import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { mockNUIs } from '../../data/mock-data';
import { NUI } from '../../models/nui.model';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="search-page">
      <h1>Recherche NUI</h1>
      
      <div class="search-filters">
        <input
          type="text"
          [(ngModel)]="searchTerm"
          placeholder="Rechercher par ID, MAC..."
          (input)="search()"
        >
        
        <select [(ngModel)]="statusFilter" (change)="search()">
          <option value="">Tous les statuts</option>
          <option value="assigned">Attribué</option>
          <option value="pending">En attente</option>
          <option value="invalid">Invalidé</option>
        </select>

        <input
          type="text"
          [(ngModel)]="locationFilter"
          placeholder="Localisation"
          (input)="search()"
        >
      </div>

      <div class="results">
        <table *ngIf="filteredNUIs.length > 0">
          <thead>
            <tr>
              <th>NUI</th>
              <th>Statut</th>
              <th>Adresse MAC</th>
              <th>Localisation</th>
              <th>Utilisateur</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let nui of filteredNUIs">
              <td>{{ nui.id }}</td>
              <td>{{ nui.status }}</td>
              <td>{{ nui.macAddress }}</td>
              <td>{{ nui.location }}</td>
              <td>{{ nui.user || '-' }}</td>
            </tr>
          </tbody>
        </table>
        
        <div *ngIf="filteredNUIs.length === 0" class="no-results">
          Aucun résultat trouvé
        </div>
      </div>
    </div>
  `,
  styles: [`
    .search-page {
      padding: 20px 20px 20px 270px;
    }

    .search-filters {
      display: flex;
      gap: 15px;
      margin-bottom: 20px;
    }

    input, select {
      padding: 8px 12px;
      border: 1px solid #ddd;
      border-radius: 4px;
      font-size: 14px;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      background: white;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
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

    .no-results {
      text-align: center;
      padding: 40px;
      background: white;
      border-radius: 8px;
      color: #666;
    }
  `]
})
export class SearchComponent {
  nuis: NUI[] = mockNUIs;
  filteredNUIs: NUI[] = [...this.nuis];
  
  searchTerm = '';
  statusFilter = '';
  locationFilter = '';

  search() {
    this.filteredNUIs = this.nuis.filter(nui => {
      const matchesSearch = !this.searchTerm || 
        nui.id.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        nui.macAddress.toLowerCase().includes(this.searchTerm.toLowerCase());
        
      const matchesStatus = !this.statusFilter || 
        nui.status === this.statusFilter;
        
      const matchesLocation = !this.locationFilter ||
        (nui.location && nui.location.toLowerCase().includes(this.locationFilter.toLowerCase()));
        
      return matchesSearch && matchesStatus && matchesLocation;
    });
  }
}