import { Component, OnInit } from '@angular/core';
import { renderVue } from 'src/assets/vue/renderVue';

@Component({
    selector: 'app-learn',
    templateUrl: './learn.component.html'
})

export class LearnComponent implements OnInit {

    constructor() { }

    ngOnInit() { 
       renderVue('./assets/vue/to-do/ToDo.js', '#vue-root')
    }
}