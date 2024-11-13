import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

// Uso de los ciclos de vida OnInit y OnDestroy
export class ContactComponent implements OnInit, OnDestroy {

  // Se crea el formulario utilizando la clase FormGroup
  contactForm: FormGroup;

  // Esto simula información que viene del backend una vez que el usuario se logueo
  activeUser: any = {
    firstName: 'Pedro',
    lastName: 'Pérez',
  };

  activeDocumentType: string = 'DNI';

  showDocument: boolean = false;

  // En el constructor se inyecta FormBuilder para utilizar formularios reactivos
  constructor(
    private form: FormBuilder
  ) {
    this.contactForm = this.form.group({
      // Por cada campo del formulario se coloca un valor inicial y un Array de validadores
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: [''],
      documenType: [''],
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

    // Con el método patchValue se puede cargar parte del formulario
    this.contactForm.patchValue({
      firstName: this.activeUser.firstName,
      lastName: this.activeUser.lastName,
    });
    this.contactForm.get('firstName')?.disable();
    this.contactForm.get('lastName')?.disable();

    // Subscripción a un campo del formulario para modificarlo dinámicamente en función del valor que tome
    this.contactForm.get('documenType')?.valueChanges.subscribe(value => {
      this.showDocument = value != '';
      this.activeDocumentType = value;
    });
  }

  ngOnDestroy(): void {
    console.log('Se destruyó el componente');
  }

}
