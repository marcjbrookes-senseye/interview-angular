import { Component, inject } from '@angular/core';
import { ApiService } from '../../api/api.service';
import { ServerListComponent } from '../server-list/server-list.component';

@Component({
  selector: 'app-overview-page',
  templateUrl: './overview-page.component.html',
  styleUrls: ['./overview-page.component.scss'],
  standalone: true,
  imports: [ServerListComponent],
})
export class OverviewPageComponent {
  private readonly apiService = inject(ApiService);

  protected readonly allServers = this.apiService.servers;

}
