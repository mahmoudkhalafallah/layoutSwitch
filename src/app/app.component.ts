import { Component, OnInit } from '@angular/core';
import { ArticlesService } from './services/articles.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ArticlesService]
})
export class AppComponent implements OnInit {
  articles: Array<Object>
  constructor(private articleSer: ArticlesService) { }

  ngOnInit() {
    // loading data
    this.articleSer.getArticles().subscribe(res => {
      this.articles = res.articles;
      console.log(res);
    })
  }
}
