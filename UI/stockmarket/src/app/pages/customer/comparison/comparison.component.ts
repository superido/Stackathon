import { Component, OnInit, Input } from '@angular/core';
import { CompnayService } from '../../../services/compnay.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comparison',
  templateUrl: './comparison.component.html',
  styleUrls: ['./comparison.component.css'],
})
export class ComparisonComponent implements OnInit {
  @Input() companyOrSector: String = '';

  public companyList: any[] = [];

  public stockExchangeList: any[] = [];

  public selectedCompanyName: string = '';

  public selectedStockExchangeName: string = '';

  public fromPeriod: Date;

  public toPeriod: Date;

  public periodSize: string = '';

  public periodUnit: string = '';

  public timeline: any[] = [];

  public priceStack: any[] = [];

  public chartLegend: any[] = [];

  constructor(private compnayService: CompnayService, private router: Router) {
  }

  ngOnInit() {
    this.compnayService.getCompanyList().subscribe((response) => {
      this.companyList = response;
    });
    this.compnayService.getStockExchangeList().subscribe((response) => {
      this.stockExchangeList = response;
    });
  }


  generateMap(){
    this.router.navigate(['/comparecompany-chart']);
  }

  getCompanyName(e) {
    this.selectedCompanyName = e.target.value;
  }

  getStockExchangeName(e) {
    this.selectedStockExchangeName = e.target.value;
  }

  fromPeriodChange(e) {
    this.fromPeriod = e.target.value;
  }

  toPeriodChange(e) {
    this.toPeriod = e.target.value;
  }

  periodUnitChange(e) {
    this.periodUnit = e.target.value;
  }
}
