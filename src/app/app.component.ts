import { Component, OnInit } from '@angular/core';
import { ArticlesService } from './services/articles.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ArticlesService]
})
export class AppComponent implements OnInit {
  articles: Array<Object>;
  listView = 'list';
  showSwitcher = false;
  constructor(private articleSer: ArticlesService) { }

  ngOnInit() {
    // loading data
    this.articleSer.getArticles().subscribe(res => {
      this.articles = res.articles;
    });
  }
  switchLayout(layout) {
    switch (layout) {
      case 'grid':
        this.listView = 'grid';
        break;
      case 'list':
        this.listView = 'list';
        break;
      case 'cards':
        this.listView = 'cards';
        break;
      default:
        this.listView = 'grid';
        break;
    }
    // hide layout switcher
    this.showSwitcher = false;
  }
}
