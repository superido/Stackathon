import { DecimalPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { AdminService } from '../../../services/admin.service';

@Component({
  selector: 'app-ipo',
  templateUrl: './ipo.component.html',
  styleUrls: ['./ipo.component.css'],
  providers: [AdminService, DecimalPipe],
})
export class IpoComponent implements OnInit {
  datas: any [];

  // @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  constructor(public service: AdminService) {
    // this.datas = service.getCompany;
    this.datas = [{ id: 1 }, { id: 2 }, { id: 3 }];
  }

  ngOnInit(): void {}
}
