import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { Title, Meta } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import {LanguageService} from "src/app/services/language/language.service"
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'brandonwadley-portfolio';
  
  constructor(
    private titleService: Title,
    private metaService: Meta,
    private translateService: TranslateService,
    private location: Location,
    private languageService: LanguageService
    ){
    }
  ngOnInit(): void{
    
    this.languageService.initLanguage()

    this.titleService.setTitle( "Brandon Wadley | Senior Full Stack Developer" );

    this.metaService.addTags([
      {name: 'keywords', content: 'Frontend, software, developer'},
      {name: 'description', content: 'Senior Full Stack Developer with over 9 years of experience in designing and developing robust web applications. Proficient in JavaScript/TypeScript, Java, and Python. Expertise in integrating AWS services and managing CI/CD pipelines. Strong background in cloud computing, containerization, and cross-platform mobile development. Proven track record of leading development teams, mentoring junior developers, and driving continuous improvement in software projects. Adept at critical thinking, time management, and adaptability. Excellent communication skills, ensuring effective collaboration and project success.'},
    ]);
    
    
    AOS.init(); 

  }
}
