import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class ServiceProvider{
  public apiUrl: string | undefined = '';
  constructor() {
    // this.apiUrl = "https://localhost:44301/";
    // this.apiUrl = environment.baseUrl;
  }
}
