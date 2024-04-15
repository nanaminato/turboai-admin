import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {KeyTypes, Model, SupplierKey} from "../models/keys";
import {ServiceProvider} from "../roots";

@Injectable({
  providedIn: "root"
})
export class KeyCallService{
  constructor(private http: HttpClient,
              private provider: ServiceProvider) {
  }
  getModelsWithKey(keyId?: number){
    if(keyId===undefined){
      return this.http.get<Model[]>(`${this.provider.apiUrl}api/model`);
    }
    return this.http.get<Model[]>(`${this.provider.apiUrl}api/model?keyId=${keyId}`);
  }
  deleteModel(modelId: number){
    return this.http.delete<any>(`${this.provider.apiUrl}api/model/${modelId}`);
  }
  addModel(name: string){
    return this.http.post<any>(`${this.provider.apiUrl}api/model`,{name: name});
  }
  updateModel(model: Model){
    return this.http.put<any>(`${this.provider.apiUrl}api/model/${model.modelId}`,model);
  }
  getKeyById(keyId: number){
    return this.http.get<SupplierKey>(`${this.provider.apiUrl}api/key/${keyId}`);
  }
  getKeysWithModel(modelId?: number){
    if(modelId===undefined){
      return this.http.get<SupplierKey[]>(`${this.provider.apiUrl}api/key`);
    }
    return this.http.get<SupplierKey[]>(`${this.provider.apiUrl}api/key?modelId=${modelId}`);
  }
  deleteKey(keyId: number){
    return this.http.delete<any>(`${this.provider.apiUrl}api/key/${keyId}`);
  }
  addKey(key: SupplierKey){
    return this.http.post<any>(`${this.provider.apiUrl}api/key`,key);
  }
  updateKey(key: SupplierKey){
    return this.http.put<any>(`${this.provider.apiUrl}api/key/${key.supplierKeyId}`,key);
  }
  getKeyTypes(){
    return this.http.get<KeyTypes[]>(`${this.provider.apiUrl}api/key/types`);
  }


}
