import { NgModule } from '@angular/core';

import { NewFeatureComponent } from './new-feature.component';
import { ModalModule } from '../modal/modal.module';


@NgModule({
    imports: [ModalModule],
    exports: [NewFeatureComponent],
    declarations: [NewFeatureComponent],
    providers: [],
})
export class NewFeatureModule { }
