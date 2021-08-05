import { NgModule } from '@angular/core';
import { LearnComponent } from './learn.component';

import { LearnRoutingModule } from './learn-routing.module'
 

@NgModule({
    imports: [LearnRoutingModule],
    exports: [],
    declarations: [LearnComponent],
    providers: [],
})
export class LearnModule { }
