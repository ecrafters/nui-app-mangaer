import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SearchComponent } from './components/search/search.component';
import { DetailsComponent } from './components/details/details.component';
import { ReportsComponent } from './components/reports/reports.component';
import { ActivityLogsComponent } from './components/activity-logs/activity-logs.component';
import { DeviceListComponent } from './components/devices/device-list.component';
import { DeviceSyncComponent } from './components/devices/device-sync.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'search', component: SearchComponent },
  { path: 'details', component: DetailsComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'activity-logs', component: ActivityLogsComponent },
  { path: 'devices', component: DeviceListComponent },
  { path: 'device-sync', component: DeviceSyncComponent }
];