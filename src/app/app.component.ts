import { Component } from '@angular/core';
import {ConfigService} from "./services/config.service";
import {ServiceProvider} from "./roots";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'turbo';
  constructor(private configService: ConfigService,private provider: ServiceProvider) {

  }
  ngOnInit(){
    this.configService.getConfig().subscribe((data: any) => {
      this.provider.apiUrl = data.apiUrl;
    });
  }
}
