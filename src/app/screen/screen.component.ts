import { SafePipe } from './../shared/safe.pipe';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, UrlSegment } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.css']
})
export class ScreenComponent implements OnInit {

  url: string;
  src: string;

  constructor(private route: ActivatedRoute, public sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.url = this.route.snapshot.url.join('/').substring(6);
    this.src = `https://www.youtube.com/embed/${this.url}?showinfo=0&modestbranding=0&rel=0`;
  }
}
