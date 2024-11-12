import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  // Se crea el formulario utilizando la clase FormGroup
  contactForm: FormGroup;

  // Esto simula información que viene del backend una vez que el usuario se logueo
  activeUser: any = {
    firstName: 'Pedro',
    lastName: 'Pérez',
    document: '12345678'
  };

  activeDocumentType: string = 'DNI';

  // En el constructor se inyecta FormBuilder para utilizar formularios reactivos
  constructor(
    private form: FormBuilder
  ) {
    this.contactForm = this.form.group({
      // Por cada campo del formulario se coloca un valor inicial y un Array de validadores
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: [''],
      documentype: [''],
      document: ['', [Validators.required, Validators.minLength(1)]],
      email: ['', [Validators.required, Validators.email]]
    })
  }

  send(): void {
    console.log(this.contactForm);
  }

  hasErrors(input: string, errorType: string) {
    return this.contactForm.get(input)?.hasError(errorType) && this.contactForm.get(input)?.touched;
  }

  // Esto es útil para mantener un usuario logueado
  ngOnInit(): void {
    // Se agregan validadores por fuera del constructor para un campo
    this.contactForm.get('lastName')?.addValidators([Validators.required, Validators.minLength(3)]);

    // Se quitan los validadores de un campo
    this.contactForm.get('document')?.clearValidators();
    this.contactForm.get('document')?.updateValueAndValidity();

    // Con el método patchValue se puede cargar parte del formulario
    this.contactForm.patchValue({
      firstName: this.activeUser.firstName,
      lastName: this.activeUser.lastName,
      document: this.activeUser.document
    });
    this.contactForm.get('firstName')?.disable();
    this.contactForm.get('lastName')?.disable();

    // Subscripción a un campo del formulario para modificarlo dinámicamente en función del valor que tome
    this.contactForm.get('documentype')?.valueChanges.subscribe(value => { this.activeDocumentType = value });
  }

}
