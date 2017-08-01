import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';

import { LoginService } from './article.service';
import { User } from './article';

@Component({
    selector: 'app-article',
    templateUrl: './article.component.html',
    styleUrls: ['./article.component.css']
})
export class LoginComponent implements OnInit {
    //Component properties
    user: User;
    us: string;
    ps: string;
    show: boolean = true;
    showNav: boolean = false;
    statusCode: number;
    requestProcessing = false;
    articleIdToUpdate = null;
    processValidation = false;

    //Create constructor to get service instance
    constructor(private articleService: LoginService) {
    }
    //Create ngOnInit() and and load articles
    ngOnInit(): void {
        this.user = new User("", "");
    }

    onKeyuser(value: string) {
        this.us += value;
    }
    onKeypass(value: string) {
        this.ps += value;
    }
    //Delete article
    login(usn: string, psd: string) {
        console.log(usn);
        console.log(psd);
        this.user = new User(usn, psd);
        this.preProcessConfigurations();
        this.articleService.login(this.user)
            .subscribe(successCode => {
                this.statusCode = successCode;
                this.hidelogin();
            },
            errorCode => this.statusCode = errorCode);
        console.log(this.statusCode);
    }
    //Perform preliminary processing configurations
    preProcessConfigurations() {
        this.statusCode = null;
        this.requestProcessing = true;
    }
    hidelogin(){
        this.show = false;
        this.showNav = true;
     }

}

