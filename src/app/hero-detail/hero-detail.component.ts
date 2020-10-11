import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Hero } from '../hero.model';
import { HeroService } from '../hero.service';



@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;
  error: any;

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      if (params.id !== undefined) {
        const id: string = params.id;
        this.heroService.getHero(id).subscribe(hero => (this.hero = hero));
      }
    });
  }

}
