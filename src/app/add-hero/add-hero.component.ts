import { Component, Input,  OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from '../hero.model';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-add-hero',
  templateUrl: './add-hero.component.html',
  styleUrls: ['./add-hero.component.scss']
})
export class AddHeroComponent implements OnInit {
  @Input() hero: Hero;
  error: any;
  powers = [true, false];
  teams = ['avenger', 'villain'];



  constructor(
    private heroService: HeroService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.hero = {id: '', name: '', realName: '', team: 'avenger', hasPowers: false};
  }

  addHero(): void {
    this.heroService.save(this.hero).subscribe( () => {
      this.router.navigate(['/']);
    }, error => (this.error = error));
  }


}
