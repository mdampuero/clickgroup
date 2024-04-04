import { Injectable } from '@angular/core';
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class SettingsService {

    constructor(private http: HttpClient) {

    }

    get() {
        return this.http.get(`${environment.baseBEUrl}/api/settings`);
    }

}
