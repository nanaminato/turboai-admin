import {ModelFee} from "./model-fee";

export interface SupplierKey{
  supplierKeyId?: number;
  baseUrl?: string;
  apiKey?:string;
  requestIdentifier: number;
  modelFees?: ModelFee[];
}
