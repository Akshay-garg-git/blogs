import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  	constructor() { }

  	blogs: any [] = [];

  	ngOnInit(): void {

  		this.blogs = JSON.parse(localStorage.getItem('blogs'));
  		console.log(this.blogs);

  	}

}
