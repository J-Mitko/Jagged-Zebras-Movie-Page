import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ModalDirective, ModalModule } from 'ngx-bootstrap';
import { AuthService } from '../../core/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  userSignUpFrom: FormGroup;
  @ViewChild('signupModal') public signupModal: ModalDirective;
  formErrors = {
    'email': '',
    'password': ''
  };

  validationMessages = {
    'email': {
      'required': 'Email is required.',
      'email': 'Email must be a valid email'
    },
    'password': {
      'required': 'Password is required.',
      'pattern': 'Password must be include at one letter and one number.',
      'minlength': 'Password must be at least 4 characters long.',
      'maxlength': 'Password cannot be more than 40 characters long.',
    }
  };

  constructor(public toastr: ToastsManager, vcr: ViewContainerRef,
    private fb: FormBuilder, public auth: AuthService) {
    this.toastr.setRootViewContainerRef(vcr);
    this.buildForm();
  }

  buildForm(): void {
    this.userSignUpFrom = this.fb.group({
      'email': ['', [
        Validators.required,
        Validators.email
      ]
      ],
      'password': ['', [
        Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
        Validators.minLength(3),
        Validators.maxLength(25)
      ]
      ],
    });

    this.userSignUpFrom.valueChanges.subscribe(data => this.onValueChanged(data));
    this.onValueChanged(); // reset validation messages
  }

  ngOnInit() {
  }

  show() {
    this.signupModal.show();
  }
  hide() {
    this.signupModal.hide();
  }

  signInWithGoogle(): void {
    this.auth.googleLogin()
    .then(() => { this.hide(); this.toastr.success('Your are logged in!', 'Success'); })
      .catch((err) => this.toastr.error(err.message, 'Error'));
  }

  signInWithFacebook(): void {
    this.auth.facebookLogin()
      .then(() => { this.hide(); this.toastr.success('Your are logged in!', 'Success'); })
      .catch((err) => this.toastr.error(err.message, 'Error'));
  }

  signup(): void {
    this.auth.emailSignUp(this.userSignUpFrom.value['email'], this.userSignUpFrom.value['password'])
      .then(() => { this.hide(); this.toastr.success('Your are logged in!', 'Success'); })
      .catch((err) => this.toastr.error(err.message, 'Error'));
  }

  // Updates validation state on form changes.
  onValueChanged(data?: any) {
    if (!this.userSignUpFrom) {
      return;
    }
    const form = this.userSignUpFrom;
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        // clear previous error message (if any)
        this.formErrors[field] = '';
        const control = form.get(field);

        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (this.formErrors.hasOwnProperty(field)) {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }
}
