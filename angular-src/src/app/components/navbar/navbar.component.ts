import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}


/*
<nav class="navbar navbar-default">
  <div class="container">
    <div class="nav-header">
      <button type="button" class="nav-bar-toggle collapsed" data-toggle="collapsed">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#">MEAN Auth App</a>
    </div>
    <div id="navbar" class="collapse navbar-collapse">
      <ul class="nav navbar-nav navbar-left">
        <li [routerLinkActivate]="['active']" [routerLinkActiveOptions] = "{exact:true}"><a  [routerLink]="['/']">Home</a></li>
      </ul>

      <ul class="nav navbar-nav navbar-right">
        <li [routerLinkActivate]="['active']" [routerLinkActiveOptions] = "{exact:true}"><a  [routerLink]="['/login']">Home</a></li>
        <li [routerLinkActivate]="['active']" [routerLinkActiveOptions] = "{exact:true}"><a  [routerLink]="['/register']">Home</a></li>
      </ul>
    </div>
  </div>
</nav>
*/