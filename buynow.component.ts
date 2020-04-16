import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';



@Component({

  selector: 'app-buynow',

  templateUrl: './buynow.component.html',

  styleUrls: ['./buynow.component.css']

})

export class BuynowComponent implements OnInit {



  constructor(private route: ActivatedRoute, private router: Router) { }



  ngOnInit() {

  }



}