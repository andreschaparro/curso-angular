import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appEstiloHermanos]'
})
export class EstiloHermanosDirective {

  // ElementRef permite que al elemento del DOM donde se ponga la directiva se le apliquen los cambios
  constructor(private element: ElementRef) {
    this.element.nativeElement.style.backgroundColor = 'yellow';
    this.element.nativeElement.style.textTransform = 'capitalize';
  }

}
