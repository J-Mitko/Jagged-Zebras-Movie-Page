import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  rForm: FormGroup;
  post: any;
  name: string;
  password: string;

  constructor(private fb: FormBuilder) {
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

  ngOnInit() {
  }

  addPost(post) {
    this.name = post.name;
    this.password = post.password;
    alert(`${this.name}, ${this.password}`);
  }

}
