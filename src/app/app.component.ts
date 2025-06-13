import { Component } from '@angular/core';
import {ConfigService} from "./services/config.service";
import {ServiceProvider} from "./roots";
import {environment} from "../environments/environment";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'turbo';
  constructor(private configService: ConfigService,private provider: ServiceProvider) {

  }
  ngOnInit(){
    if(!environment.production){
      this.configService.getConfig().subscribe((data: any) => {
        this.provider.apiUrl = data.apiUrl;
      });
    }else{
      this.provider.apiUrl = "/";
    }
  }
}
