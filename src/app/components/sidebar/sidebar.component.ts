import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <aside class="sidebar">
      <div class="logo">
        <img 
          src="https://samadpp.eyone.net/assets/images/logo.svg" 
          alt="Logo MSAS NUI" 
          class="logo-img"
        />
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
      background-color:rgb(54, 63, 62);
      color: white;
      padding: 20px;
      position: fixed;
      left: 0;
      top: 0;
      bottom: 0;
      box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
    }
    
    /* Logo Container */
    .logo {
      padding: 20px 0;
      text-align: center;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      margin-bottom: 20px;
    }
    
    .logo-img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      margin-bottom: 10px;
      animation: floatLogo 3s ease-in-out infinite; /* Animation de flottement */
      transition: transform 0.3s ease;
    }

    .logo-img:hover {
      transform: scale(1.1); /* Effet zoom au survol */
    }

    .logo h1 {
      font-size: 20px;
      font-weight: bold;
      margin: 0;
      color: #fff;
    }

    /* Navigation Menu */
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
      background-color: #333;
      transform: translateX(5px);
    }
    
    .nav-link.active {
      background-color: #d00000;
      font-weight: 500;
    }

    /* Animation du logo flottant */
    @keyframes floatLogo {
      0% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-10px);
      }
      100% {
        transform: translateY(0);
      }
    }
  `]
})
export class SidebarComponent {}
