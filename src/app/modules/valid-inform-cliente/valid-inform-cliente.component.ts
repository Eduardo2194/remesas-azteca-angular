import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-valid-inform-cliente',
  templateUrl: './valid-inform-cliente.component.html',
  styleUrls: ['./valid-inform-cliente.component.scss']
})
export class ValidInformClienteComponent implements OnInit {

  arrayPais: string[] = ['Perú', 'Argentina', 'Bolivia', 'Colombia'];
  error = false;
  errorMessage = '';
  format = false;

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
