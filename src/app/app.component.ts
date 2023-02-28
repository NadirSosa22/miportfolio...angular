import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from "@angular/forms";
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-raiz',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'portfolio de Nadir Sosa';

  //campos reactivos
  form: FormGroup = new FormGroup({
    fullname: new FormControl(''),
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    acceptTerms: new FormControl(false),
  });
  submitted = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        fullname: ['', Validators.required],
        username: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(20)
          ]
        ],
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40)
          ]
        ],
        confirmPassword: ['', Validators.required],
        acceptTerms: [false, Validators.requiredTrue]
      }
    );
  }
  //para traer los datos
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

//para enviar los datos
  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    //para ver los datos en el inspeccionador
    console.log(JSON.stringify(this.form.value, null, 2));
  }

//para reiniciar el formulario
  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }

}
