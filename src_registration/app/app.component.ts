import { RegistrationService } from './registration.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';
import { forbiddenNameValidator } from './shared/user-name.validator';
import { passwordValidator } from './shared/password.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  
  registrationForm: FormGroup;

  submitted:boolean = false;

  constructor(private formBuilder: FormBuilder, private _registrationService: RegistrationService) {}

  ngOnInit() {

    this.registrationForm = this.formBuilder.group({

      userName: ['', [Validators.required, Validators.minLength(5), forbiddenNameValidator(/admin/)]],
      emailId: ['', [Validators.required, Validators.email]],
      subscribe: [false],
      password: ['', [Validators.required, Validators.pattern('[A-Za-z0-9@$]{6, 14}'), forbiddenNameValidator(/password/)]],
      confirmPassword: [''],
      contactNumber: ['', [Validators.required, Validators.minLength(10)]],
      address: this.formBuilder.group({
        city: [''],
        state: [''],
        nation: [''],
        postalCode: ['']
      }),
      submittedDate: ['', [Validators.required]],
      alternateEmails: this.formBuilder.array([])

    }, {Validator: passwordValidator});

    this.registrationForm.get('subscribe').valueChanges
        .subscribe(checkedValue => {
            const emailId = this.registrationForm.get('emailId');

            if (checkedValue) {
              emailId.setValidators(Validators.required);
            } else {
              emailId.clearValidators();
            }
            emailId.updateValueAndValidity();
        });
  }

  get userName() {
    return this.registrationForm.get('userName');
  }

  get password() {
    return this.registrationForm.get('password');
  }

  get contactNumber() {
    return this.registrationForm.get('contactNumber');
  }

  get emailId() {
    return this.registrationForm.get('emailId');
  }

  get alternateEmails() {
    return this.registrationForm.get('alternateEmails') as FormArray;
  }

  addAlternateEmail() {
    this.alternateEmails.push(this.formBuilder.control(''));
  }
  
  loadApiData() {
    this.registrationForm.patchValue({
        userName:'Supreeth',
        password: 'Suppi@369',
        confirmPassword: 'Suppi@369',
    });
  }

  //onSubmit() {
  //  console.log(this.registrationForm.value);
  //  this._registrationService.register(this.registrationForm.value)
  //  .subscribe(
  //    response => console.log('Success!', response),
  //    error => console.error('Error!', error)
  //  );

  //  alert("Success!");
  //}

  onSubmit(){
    console.log(this.registrationForm.value);
    this.submitted = true;
    if(this.registrationForm.invalid) {
        return;
    }
    alert("Success!");
  }

}
