import { Component } from '@angular/core';
import { SettingsService } from 'src/app/services/api/settings.service';

@Component({
	selector: 'app-banner-home',
	templateUrl: './banner-home.component.html',
	styleUrls: ['./banner-home.component.css']
})
export class BannerHomeComponent {
	public setting: any = {};
	public containerLoading: boolean = true;
	constructor(
		public settingService: SettingsService
	) {

	}

	ngOnInit(): void {
        this.getResult();
    }

	getResult() {
		
        this.settingService.get().subscribe(
            (data: any) => {
				this.containerLoading = false;
                this.setting = data.setting
            }
        );
    }
}
