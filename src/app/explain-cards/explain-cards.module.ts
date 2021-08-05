import { NgModule } from '@angular/core';

import { ExplainCardsComponent } from './explain-cards.component';
import { ExplainCardComponent } from './explain-card/explain-card.component';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { NewFeatureModule } from '../new-feature/new-feature.module';


@NgModule({
    imports: [CommonModule, AppRoutingModule, NewFeatureModule],
    exports: [ExplainCardsComponent],
    declarations: [ExplainCardsComponent, ExplainCardComponent],
    providers: [],
})
export class ExplainCardsModule { }
