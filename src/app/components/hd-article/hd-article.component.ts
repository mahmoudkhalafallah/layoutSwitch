import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'hd-article',
  styleUrls: ['hd-article.component.css'],
  templateUrl: 'hd-article.component.html'
})

export class HDArticleComponent implements OnInit {
  @Input() article: Object;
  @Input() index: Number;
  constructor() { }

  ngOnInit() {
    // console.log(this.article)
   }
}
