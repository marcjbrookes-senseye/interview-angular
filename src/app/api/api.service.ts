import { Injectable, signal } from '@angular/core';
import { IServer, MOCK_SERVERS } from '../models/server';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly serversState = signal<readonly IServer[]>(MOCK_SERVERS);

  // Simplistic representation of asynchronous HTTP call to API
  readonly servers = this.serversState.asReadonly();
}
