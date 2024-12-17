import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <aside class="sidebar">
      <div class="logo">
        <h1>MSAS NUI Manager</h1>
      </div>
      <nav class="nav-menu">
        <a routerLink="/dashboard" routerLinkActive="active" class="nav-link">
          <i class="fas fa-chart-bar"></i>
          Tableau de bord
        </a>
        <a routerLink="/search" routerLinkActive="active" class="nav-link">
          <i class="fas fa-search"></i>
          Recherche
        </a>
        <a routerLink="/details" routerLinkActive="active" class="nav-link">
          <i class="fas fa-info-circle"></i>
          Détails NUI
        </a>
        <a routerLink="/devices" routerLinkActive="active" class="nav-link">
          <i class="fas fa-tablet-alt"></i>
          Appareils
        </a>
        <a routerLink="/device-sync" routerLinkActive="active" class="nav-link">
          <i class="fas fa-sync"></i>
          Synchronisation
        </a>
        <a routerLink="/reports" routerLinkActive="active" class="nav-link">
          <i class="fas fa-file-alt"></i>
          Rapports
        </a>
        <a routerLink="/activity-logs" routerLinkActive="active" class="nav-link">
          <i class="fas fa-history"></i>
          Journaux
        </a>
      </nav>
    </aside>
  `,
  styles: [`
    .sidebar {
      width: 250px;
      height: 100vh;
      background-color: #1c2120;
      color: white;
      padding: 20px;
      position: fixed;
      left: 0;
      top: 0;
      bottom: 0;
      box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
    }
    
    .logo {
      padding: 20px 0;
      text-align: center;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      margin-bottom: 20px;
    }
    
    .logo h1 {
      font-size: 24px;
      font-weight: bold;
      margin: 0;
      color: white;
    }
    
    .nav-menu {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    
    .nav-link {
      color: white;
      text-decoration: none;
      padding: 12px 15px;
      border-radius: 8px;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      gap: 10px;
    }
    
    .nav-link i {
      width: 20px;
      text-align: center;
    }
    
    .nav-link:hover {
      background-color: black;
    }
    
    .nav-link.active {
      background-color: #d00000;
      font-weight: 500;
    }
  `]
})
export class SidebarComponent {}