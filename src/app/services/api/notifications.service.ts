import { Injectable } from '@angular/core';
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";


@Injectable({
    providedIn: 'root'
})
export class NotificationsService {
    
    constructor(private http: HttpClient) {
        
    }

    post(data: any) {
        return this.http.post(`${environment.baseBEUrl}/api/notifications`, data);
    }

}
