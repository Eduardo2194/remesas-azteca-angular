import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';


@Component({
  selector: 'app-busqueda-cliente',
  templateUrl: './busqueda-cliente.component.html',
  styleUrls: ['./busqueda-cliente.component.scss']
})
export class BusquedaClienteComponent implements OnInit {

  tipodoc: string = '';
  arryTipoDoc: string[] = ['DNI', 'CE'];
  nrodocumento: number = 0;

  minRreeForm = new FormGroup({
    nroDocumento: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]*$'),
    ]),
    serviceCode: new FormControl(''),
    certificationsQuantity: new FormControl('1'),
    paymentAmount: new FormControl('', [
      Validators.required,
      Validators.pattern('(S[/]?[ ]?)?([0-9]+)?(\.[0-9]{1,2})?'),
      this.noCentsValidator(),
    ]),
  });
  nroTicketError = false;

  error = false;
  errorMessage = '';
  format = false;

  constructor() { }

  ngOnInit(): void {
  }

  submit() {
    this.error = false;
    this.format = true;
  }

  noCentsValidator(): ValidatorFn {
    let nameRe = new RegExp('^(S[/]?[ ]?)?([0-9]+)?(\.([0-9][0]?)?)?$', 'i');
    return (control: AbstractControl): {[key: string]: any} | null => {
      return nameRe.test(control.value) ? null :  {noCents: {value: control.value}};
    };
  }

}
