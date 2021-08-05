import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html'
})

export class NavbarComponent {
    constructor(private route: ActivatedRoute) { }

    get currentRoute() {
        return this.route
    }
    classes(link) {
    //    console.log(this.route.snapshot)
        const condition: boolean = this.route.snapshot.url[0] === link
        return {
            active: condition,
            inactive: !condition
        }
    }
}