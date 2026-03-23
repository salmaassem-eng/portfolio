import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  form = { name: '', email: '', subject: '', message: '' };
  sent = false;

  sendMessage() {
    if (this.form.name && this.form.email && this.form.message) {
      this.sent = true;
      setTimeout(() => {
        this.sent = false;
        this.form = { name: '', email: '', subject: '', message: '' };
      }, 4000);
    }
  }
}
