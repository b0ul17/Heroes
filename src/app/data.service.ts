
import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo, STATUS } from 'angular-in-memory-web-api';

import { Hero } from './hero.model';

interface LocalDb {
  heroes: Hero[];
}

// Pseudo guid generator
function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  constructor() { }

  createDb(): LocalDb {
    return {
      heroes: [
        { id: '1', name: 'Black Panther', realName: 'TChalla', team: 'avenger', hasPowers: false },
        { id: '2', name: 'Spiderman', realName: 'Peter Parker', team: 'avenger', hasPowers: true },
        ]
    };
  }

  post(reqInfo: RequestInfo) {
    const hero: Hero = reqInfo.utils.getJsonBody(reqInfo.req);
    hero.id = guid();

    const db = reqInfo.utils.getDb() as LocalDb;
    db.heroes.push(hero);

    return reqInfo.utils.createResponse$(() => {
      return {
        status: STATUS.OK,
        body: hero
      };
    });
  }

}
