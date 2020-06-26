import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index.component';
import { ImportdataComponent } from '../admin/importdata/importdata.component';
import { ManagecompanyComponent } from '../admin/managecompany/managecompany.component';
import { IpoComponent } from '../customer/ipo/ipo.component';
import { ComparecompanyComponent } from '../customer/comparecompany-charts/comparecompany-charts.component';
import { ComparisonComponent } from '../customer/comparison/comparison.component';
const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    children: [
      {
        path: 'import',
        component: ImportdataComponent,
      },
      {
        path: 'managecompany',
        component: ManagecompanyComponent,
      },
      {
        path: 'ipo',
        component: IpoComponent,
      },
      {
        path: 'comparecompany-chart',
        component: ComparecompanyComponent,
      },
      {
        path: 'comparison',
        component: ComparisonComponent,
      },
    ],
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndexRoutingModule {}
