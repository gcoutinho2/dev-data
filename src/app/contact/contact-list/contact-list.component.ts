import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contact } from './../../shared/contact';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  @Input() contacts: Contact[];
  @Output() editContact = new EventEmitter();
  @Output() deleteContact = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  edit(contact: Contact) {
    this.editContact.emit(contact);
  }

  delete(contact: Contact) {
    this.deleteContact.emit(contact);
  }

}
