import { Component, OnInit } from '@angular/core';

import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import { Router } from '@angular/router';

import { FormControl, FormGroup } from '@angular/forms';

import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {

	public Editor = ClassicEditor;

	btnPost: boolean = false;
	show_content_error: boolean = false;

  	constructor(private dataService: DataService, private router: Router) { }

  	createBlogForm = new FormGroup ({

    username: new FormControl(),
		title:new FormControl(),
		content:new FormControl(),
		
	});

	

  	ngOnInit(): void {


  	}

  	createBlog() {

  		var post_array = [];

  		this.show_content_error = false;

  		var blog_data = this.createBlogForm.value;

  		if( !blog_data.content ){
  			this.show_content_error = true;
  			return;
  		}

      this.btnPost = true;

  		post_array = JSON.parse(localStorage.getItem('blogs')) || [];
  	
  		post_array.push(blog_data);
  	
  		localStorage.setItem('blogs', JSON.stringify(post_array));

      this.btnPost = false;

  		this.router.navigateByUrl("/blogs");


  	}

}
