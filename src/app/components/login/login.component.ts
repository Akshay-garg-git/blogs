import { Component, OnInit, Output, EventEmitter  } from '@angular/core';

import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  	constructor(private dataService: DataService, private router: Router) { }

  	login_data: any = {};

	btnlogin: boolean = false;

	showError: boolean = false;

  	ngOnInit(): void {



  	}

  	loginSubmit() {

		var login_data = this.login_data;
		
		this.showError = false;

		if( !login_data.username || !login_data.password ){
			this.showError = true;
			return;			
		}

		this.router.navigateByUrl("/blogs");

	}

}
