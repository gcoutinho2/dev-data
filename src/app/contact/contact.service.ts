import { Injectable } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';
import { Contact } from '../shared/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(
    private localStorage: LocalStorageService
  ) { }

  save(contact: Contact) {
    this.localStorage.set(contact.id, contact);
  }

  get(id: string): Contact {
    return this.localStorage.get(id);
  }

  list() {
    return this.localStorage.keys().map(id => this.get(id));
  }

  delete(contact: Contact) {
    this.localStorage.remove(contact.id);
  }
}
