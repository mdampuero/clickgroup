import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Injectable({
	providedIn: 'root'
})
export class MsgErrorsService {
	constructor(private toastr: ToastrService) { }
	show(error: any) {
		if (error.status == 400) {
			const errors = error.error.data.errors;
			errors.forEach((err: any) => {
				this.toastr.error(err.msg, 'Atención');
			});
		}
	}
}
