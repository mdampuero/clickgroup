import { Injectable } from '@angular/core';
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";


@Injectable({
    providedIn: 'root'
})
export class CategoriesService {
    
    constructor(private http: HttpClient) {

    }

    home() {
        return this.http.get(`${environment.baseBEUrl}/api/categories/home`);
    }
    get() {
        return this.http.get(`${environment.baseBEUrl}/api/categories`);
    }

}
