import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HelperService {
  constructor() {}

  getConfigCaching(key: string): string | null {
    return localStorage.getItem(key);
  }

  updateConfigCaching(key: string, value: string): void {
    localStorage.setItem(key, value);
  }
}
