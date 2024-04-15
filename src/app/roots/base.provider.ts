import {Injectable} from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ServiceProvider{
  public apiUrl: string | undefined = '';
  constructor() {
    this.apiUrl = "https://localhost:44301/";
  }
}
