import { Component, OnInit } from '@angular/core';

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
  
  constructor() { }

  ngOnInit(): void {
  }

  submit() {
    this.error = false;
    this.format = true;
  }

}
