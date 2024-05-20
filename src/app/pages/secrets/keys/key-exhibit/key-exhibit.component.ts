import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NzCardComponent} from "ng-zorro-antd/card";
import {NzPopconfirmDirective} from "ng-zorro-antd/popconfirm";
import {RouterLink} from "@angular/router";
import {NzMessageService} from "ng-zorro-antd/message";
import {KeyCallService} from "../../../../services";
import {SupplierKey} from "../../../../models/keys";
import { admin_routes } from '../../../../routes';
import {ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-key-exhibit',
  standalone: true,
    imports: [
        NzCardComponent,
        NzPopconfirmDirective,
        RouterLink,
        ReactiveFormsModule
    ],
  templateUrl: './key-exhibit.component.html',
  styleUrl: './key-exhibit.component.css'
})
export class KeyExhibitComponent {
  constructor(private call: KeyCallService,private message: NzMessageService) {
  }
  @Output()
  refresh = new EventEmitter<boolean>();
  @Input()
  key: SupplierKey | undefined;
  delete(id: number){
    this.call.deleteKey(id)
      .subscribe({
        next: msg=>{
          this.message.success("删除成功")
          this.refresh.next(true);
        },
        error: err=>{
          this.message.error(err.error)
        }
      })
  }

  protected readonly admin_routes = admin_routes;
}
