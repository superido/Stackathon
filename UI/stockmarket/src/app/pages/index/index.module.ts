import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index.component';
import { IndexRoutingModule } from './index-routing.module';

import { NgxEchartsModule } from 'ngx-echarts';

import { ImportdataComponent } from '../admin/importdata/importdata.component';
import { ManagecompanyComponent } from '../admin/managecompany/managecompany.component';
import { IpoComponent } from '../customer/ipo/ipo.component';
import { ComparecompanyComponent } from '../customer/comparecompany/comparecompany.component';
// import { TUserModule } from '../../models/t-user.module';
// import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AdminService } from '../../services/Admin.service';

@NgModule({
  imports: [
    CommonModule,
    IndexRoutingModule,
    NgxEchartsModule,
    // TUserModule,
  ],
  declarations: [
    IndexComponent,
    ImportdataComponent,
    ManagecompanyComponent,
    IpoComponent,
    ComparecompanyComponent
  ],
  providers: [AdminService],
})
export class IndexModule {}
