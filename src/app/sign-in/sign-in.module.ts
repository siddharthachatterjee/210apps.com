import { NgModule } from '@angular/core';

import { SignInComponent } from './sign-in.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@NgModule({
    imports: [CommonModule, FormsModule],
    exports: [SignInComponent],
    declarations: [SignInComponent],
    providers: [],
})
export class SignInModule { }
