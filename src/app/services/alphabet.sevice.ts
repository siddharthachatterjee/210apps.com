import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({ 
    providedIn: 'root' 
})
export class AlphabetService  {
    private _alphabet: string[] = [
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
        'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x',
        'y', 'z' 
    ];

    get alphabet(): string[] {
        return this._alphabet;
    };

    constructor() {  };
}

export const letters: string[ ] = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x',
    'y', 'z'
]