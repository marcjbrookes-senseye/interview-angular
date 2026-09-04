import { Component, input } from '@angular/core';
import { IServer } from '../../models/server';

@Component({
  selector: 'app-server-list',
  templateUrl: './server-list.component.html',
  styleUrls: ['./server-list.component.scss'],
  standalone: true,
})
export class ServerListComponent {
  readonly servers = input.required<readonly IServer[]>();
}
