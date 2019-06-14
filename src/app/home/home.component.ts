import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactService } from '../contact/contact.service';
import { Contact } from './../shared/contact';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  contact: Contact;
  contacts: Contact[];

  constructor(
    private contactService: ContactService
  ) { }

  ngOnInit() {
    this.contact = new Contact();
    this.contacts = this.contactService.list();
  }

  saveContact(form: NgForm) {
    this.contact = form.value;
    this.contact.id = (this.contact.id) ? this.contact.id : new Date().getTime().toString();
    this.contactService.save(this.contact);
    this.contacts = this.contactService.list();
    form.resetForm();
  }

  edit(contact: Contact) {
    this.contact = contact;
  }

  delete(contact: Contact) {
    const index = this.contacts.map((item) => item.id).indexOf(contact.id);
    this.contactService.delete(contact);
    this.contacts.splice(index, 1);
  }

}
