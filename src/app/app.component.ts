import { Component, HostListener } from '@angular/core';
import { AuthService } from './core/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title: string;
  document: Document;
  window: Window;
  rForm: FormGroup;
  post: any;
  name: string;
  password: string;

  constructor(private fb: FormBuilder) {
    this.title = 'The Jagged Zebras Movie Page';
    this.document = document;
    this.window = window;
    this.rForm = fb.group({
      'name': [null, Validators.compose(
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(30)
        ])],
      'password': [null, Validators.compose(
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(30)
        ])]
    });
  }

  @HostListener('window:scroll', ['$event'])

  onScroll(ev) {
    this.window.requestAnimationFrame(this.scrollHandler);
  }

  private scrollHandler = () => {
    if (!this.document.getElementsByClassName('hidden-btn')) {
      return;
    }
    const scrollY = this.window.pageYOffset;
    let btns: any;
    let btnsArr = Array<any>();
    if (scrollY >= 1960) {
      btns = this.document.getElementsByClassName('hidden-btn');
      btnsArr = Array.from(btns);
      btnsArr.forEach((btn) => {
        setTimeout(() => {
          btn.classList.remove('hidden-btn');
          btn.classList.add('is-showing');
        }, 0);
      });
    }
  }

  addPost(post) {
    this.name = post.name;
    this.password = post.password;
    alert(`${this.name}, ${this.password}`);
  }
}
