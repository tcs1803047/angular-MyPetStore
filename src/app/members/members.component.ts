import { Component, OnInit } from '@angular/core';
//import { Hero } from '../hero';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  /*
  hero = 'Windstorm';
  */
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };


  constructor() { }

  ngOnInit() {
  }

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/