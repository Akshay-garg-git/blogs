import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  	constructor() { }

  	blogs: any [] = [];

  	loader: boolean = false;

  	ngOnInit(): void {

  		this.loader = true;

  		this.blogs = JSON.parse(localStorage.getItem('blogs'));
  		console.log(this.blogs);

      if(this.blogs)
  		  this.blogs.reverse();

  		this.loader = false;

  	}

}
