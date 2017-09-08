// import { SafePipe } from './../../shared/safe.pipe';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-movie-thumbnail',
  templateUrl: './movie-thumbnail.component.html',
  styleUrls: ['./movie-thumbnail.component.css']
})
export class MovieThumbnailComponent implements OnInit {
  url: string;
  src: string;

  @Input() movie;
  constructor(private route: ActivatedRoute, public sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.url = this.route.snapshot.url.join('/').substring(6);
    this.src = `https://www.youtube.com/embed/${this.url}?showinfo=0&modestbranding=0&rel=0`;
  }
}
