import { Component } from '@angular/core';
import { NotificationsService } from 'src/app/services/api/notifications.service';
import { Observer } from 'rxjs';
import { NgxSpinnerService } from "ngx-spinner";
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';
import { MsgErrorsService } from 'src/app/services/msg-errors.service';
@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.css']
})
export class ContactComponent {

	public form: any = {
		first_name: '',
		last_name: '',
		email: '',
		subject: '',
		message: '',
	};

	constructor(
		private msgErrorsService: MsgErrorsService,
		private spinner: NgxSpinnerService,
		private toastr: ToastrService,
		public notificationService: NotificationsService
	) { }

	send() {
		this.spinner.show();
		const payload = {
			"name": "Formulario de contacto FE",
			"type": "CONTACT",
			"payload": this.form
		}
		this.notificationService.post(payload).subscribe({
			next: (data) => {
				this.form = {
					first_name: '',
					last_name: '',
					email: '',
					subject: '',
					message: '',
				}
				this.spinner.hide();
			},
			error: (error) => {
				this.spinner.hide();
				this.msgErrorsService.show(error)
				// if (error.status == 400) {
				// 	const errors = error.error.data.errors;
				// 	errors.forEach((err: any) => {
				// 		this.toastr.error(err.msg, 'Atención');
				// 	});
				// }
				// this.toastr.error("Coso" ,'Atención');
				// Swal.fire({
				// 	title: "Error",
				// 	text: "Por favor complete todos los campos.",
				// 	icon: "error",
				// 	confirmButtonText: "Aceptar",
				// });
				
			},
			complete: () => {
				Swal.fire({
					title: "Muchas gracias",
					text: "Tu consulta ha sido enviada, a la brevedad te responderemos por el mismo medio.",
					icon: "success",
					confirmButtonText: "Aceptar",
				});
				this.spinner.hide();
			}
		});
	}

}
