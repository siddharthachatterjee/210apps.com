import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class SearchService {
    private _searchValue: string = '';

    get searchValue(): string {
        return this._searchValue;
    };

    search: Observable<string> = new Observable<string>(subscriber => {
        setInterval(() => {
            subscriber.next(this.searchValue)
        },1)
    })

    set searchValue(val: string) {
        this._searchValue = val
    };
}
