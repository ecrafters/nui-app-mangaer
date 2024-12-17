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
        <table *ngIf="paginatedNUIs.length > 0">
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
            <tr *ngFor="let nui of paginatedNUIs">
              <td>{{ nui.id }}</td>
              <td>{{ nui.status }}</td>
              <td>{{ nui.macAddress }}</td>
              <td>{{ nui.location }}</td>
              <td>{{ nui.user || '-' }}</td>
            </tr>
          </tbody>
        </table>
        
        <div *ngIf="paginatedNUIs.length === 0" class="no-results">
          Aucun résultat trouvé
        </div>
      </div>

      <!-- Pagination -->
      <div class="pagination" *ngIf="filteredNUIs.length > itemsPerPage">
        <button (click)="changePage(-1)" [disabled]="currentPage === 1">
          &laquo; Précédent
        </button>
        <span>Page {{ currentPage }} / {{ totalPages }}</span>
        <button (click)="changePage(1)" [disabled]="currentPage === totalPages">
          Suivant &raquo;
        </button>
      </div>
    </div>
  `,
  styles: [`
    .search-page {
      padding: 20px 20px 20px 270px;
      background-color: #f4f6f8;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    h1 {
      text-align: center;
      font-size: 28px;
      color: #2c3e50;
      margin-bottom: 30px;
    }

    .search-filters {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 15px;
      margin-bottom: 30px;
    }

    input, select {
      padding: 10px 15px;
      border: 1px solid #ddd;
      border-radius: 8px;
      font-size: 16px;
      width: 100%;
      transition: border 0.3s ease;
    }

    input:focus, select:focus {
      border-color: #2980b9;
      outline: none;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      background: #ffffff;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      margin-top: 30px;
    }

    th, td {
      padding: 16px;
      text-align: left;
      font-size: 16px;
      border-bottom: 1px solid #eee;
    }

    th {
      background-color: #2c3e50;
      color: white;
      font-weight: bold;
      text-transform: uppercase;
    }

    tr:nth-child(even) {
      background-color: #f9f9f9;
    }

    tr:hover {
      background-color: #f1f1f1;
      transition: background-color 0.3s ease;
    }

    .no-results {
      text-align: center;
      padding: 40px;
      background-color: #ffffff;
      border-radius: 8px;
      color: #666;
      font-size: 18px;
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
export class SearchComponent {
  nuis: NUI[] = mockNUIs;
  filteredNUIs: NUI[] = [...this.nuis];

  searchTerm = '';
  statusFilter = '';
  locationFilter = '';

  // Pagination
  currentPage = 1;
  itemsPerPage = 10;

  get totalPages(): number {
    return Math.ceil(this.filteredNUIs.length / this.itemsPerPage);
  }

  get paginatedNUIs(): NUI[] {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return this.filteredNUIs.slice(start, end);
  }

  search() {
    this.currentPage = 1;
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

  changePage(direction: number) {
    const newPage = this.currentPage + direction;
    if (newPage > 0 && newPage <= this.totalPages) {
      this.currentPage = newPage;
    }
  }
}
