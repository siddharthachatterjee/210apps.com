import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopNavComponent } from './top-nav.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { ModalModule } from '../modal/modal.module';


@NgModule({
    imports: [CommonModule, FormsModule, AppRoutingModule, ModalModule],
    exports: [TopNavComponent],
    declarations: [TopNavComponent],
    providers: [],
})
export class TopNavModule { }
