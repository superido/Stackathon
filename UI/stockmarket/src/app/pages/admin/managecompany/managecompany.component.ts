import { DecimalPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { AdminService } from '../../../services/admin.service';
import {
  NgbdSortableHeader,
  SortEvent,
} from '../../../direct/sortable.directive';

@Component({
  selector: 'app-managecompany',
  templateUrl: './managecompany.component.html',
  styleUrls: ['./managecompany.component.css'],
  providers: [AdminService, DecimalPipe],
})
export class ManagecompanyComponent implements OnInit {
  datas: any [];

  // @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  constructor(public service: AdminService) {
    // this.datas = service.getCompany;
    this.datas = [{ id: 1 }, { id: 2 }, { id: 3 }];
  }

  // onSort({ column, direction }: SortEvent) {
  //   // resetting other headers
  //   this.headers.forEach((header) => {
  //     if (header.sortable !== column) {
  //       header.direction = '';
  //     }
  //   });

  //   this.service.sortColumn = column;
  //   this.service.sortDirection = direction;
  // }

  ngOnInit(): void {}
}
