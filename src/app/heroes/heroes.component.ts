import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero.model';
import { HeroService } from '../hero.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})

export class HeroesComponent implements OnInit {
  error: string;

  displayedColumns: string[] = ['id', 'name', 'realName', 'team', 'hasPowers', 'action'];
  dataSource: Hero[];

  constructor(private heroService: HeroService) {}

  getHeroes(): void {
    this.heroService
      .getHeroes()
      .subscribe(
        heroes => (this.dataSource = heroes),
        error => (this.error = error)
      );
  }

  deleteHero(hero: Hero){
    if (window.confirm('Are you sure you want to delete ' + hero.name + '?')) {
      this.heroService.delete(hero).subscribe( () => {
        this.dataSource = this.dataSource.filter(h => h !== hero);
      }, error => (this.error = error));
  }

  }

  ngOnInit() {
    this.getHeroes();
  }

}
