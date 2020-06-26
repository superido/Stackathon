import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index.component';
import { IndexRoutingModule } from './index-routing.module';

import { NgxEchartsModule } from 'ngx-echarts';

import { ImportdataComponent } from '../admin/importdata/importdata.component';
import { ManagecompanyComponent } from '../admin/managecompany/managecompany.component';
import { IpoComponent } from '../customer/ipo/ipo.component';
import { ComparecompanyComponent } from '../customer/comparecompany-charts/comparecompany-charts.component';
import { ComparisonComponent } from '../customer/comparison/comparison.component';
import { NavbarComponent } from '../../component/navbar/navbar.component';
// import { TUserModule } from '../../models/t-user.module';
// import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AdminService } from '../../services/Admin.service';
import { CompanyService } from '../../services/company.service';

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
    ComparecompanyComponent,
    ComparisonComponent,
    NavbarComponent
  ],
  providers: [AdminService, CompanyService],
})
export class IndexModule {}
