import { Component, OnInit } from '@angular/core';
import { ArticlesService } from './services/articles.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ArticlesService]
})
export class AppComponent implements OnInit {
  constructor(private articleSer: ArticlesService) { }

  ngOnInit() {
    // loading data
    this.articleSer.getArticles().subscribe(res => {
      console.log(res);
    })
  }
}
