import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ModalDirective, ModalModule } from 'ngx-bootstrap/ng2-bootstrap';
import { AuthService } from '../../core/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  userSignInFrom: FormGroup;
  @ViewChild('signinModal') public signinModal: ModalDirective;

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
      'pattern': 'Password must include at least one letter and one number.',
      'minlength': 'Password must be at least 4 characters long.',
      'maxlength': 'Password cannot be more than 40 characters long.',
    }
  };

  constructor(public toastr: ToastsManager, vcr: ViewContainerRef,
    private fb: FormBuilder, private auth: AuthService) {
    this.toastr.setRootViewContainerRef(vcr);
    this.buildForm();
  }

  ngOnInit() {
  }

  buildForm(): void {
    this.userSignInFrom = this.fb.group({
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

    this.userSignInFrom.valueChanges.subscribe(data => this.onValueChanged(data));
    this.onValueChanged(); // reset validation messages
  }

  show() {
    this.signinModal.show();
  }
  hide() {
    this.signinModal.hide();
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

  login(): void {
    this.auth.emailLogin(this.userSignInFrom.value['email'], this.userSignInFrom.value['password'])
    .then(() => { this.hide(); this.toastr.success('Your are logged in!', 'Success'); })
      .catch((err) => this.toastr.error('User not found', 'Error'));
  }

  onValueChanged(data?: any) {
    if (!this.userSignInFrom) {
      return;
    }
    const form = this.userSignInFrom;

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
