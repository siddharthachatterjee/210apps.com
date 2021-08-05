import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.css']
})

export class ModalComponent implements OnInit {
    @Input() showExitButton: boolean = true;

     @Input() show: boolean = true

    @Output() closed: EventEmitter<boolean> = new EventEmitter<boolean>()

     
    

    @Input() controlVariable: any 

    constructor() { }

    close() {
        this.show = false;
        // this.controlVariable = false;
        this.closed.emit();
    }

    ngOnInit() { 
        //alert(this.closed)
    }

}