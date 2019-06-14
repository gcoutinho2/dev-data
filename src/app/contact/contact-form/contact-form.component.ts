import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Contact } from '../../shared/contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  @Input() contact: Contact;
  @Output() saveContact = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.saveContact.emit(form);
  }

}
