// Creado con el comando ng g c contact/document para que aparezca dentro del directorio de contact
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  // El selector es el nombre del elemento html que va a generar el componente
  selector: 'document-input',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})

// Uso del ciclo de vida OnChanges
export class DocumentComponent implements OnChanges {

  // El tipo de documento se recibe desde el padre
  @Input() activeDocumentType: string = 'DNI';

  documentForm: FormGroup;

  // Esta variable solo se utiliza para probar ngOnChanges
  documentType: string = 'DNI';

  constructor(
    private form: FormBuilder
  ) {
    this.documentForm = this.form.group({
      document: ['', [Validators.required, Validators.minLength(1)]]
    })
  }

  hasErrors(input: string, errorType: string) {
    return this.documentForm.get(input)?.hasError(errorType) && this.documentForm.get(input)?.touched;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.documentType = changes?.['activeDocumentType'].currentValue;
  }

}
