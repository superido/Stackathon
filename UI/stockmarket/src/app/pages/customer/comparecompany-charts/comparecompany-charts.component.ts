import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../../services/company.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-comparecompany',
  templateUrl: './comparecompany-charts.component.html',
  styleUrls: ['./comparecompany-charts.component.css'],
})
export class ComparecompanyComponent implements OnInit {
  constructor(private companyService: CompanyService, public activatedRoute: ActivatedRoute, private router: Router) {
    setTimeout(() => {
      this.showloading = false;
    }, 3000);
  }

  showloading: boolean = true;
  public companyList: any[] = [];
  public queryParams: any = {};

  chartOption: any =  {
    color: ['#3398DB'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: 'Price',
            type: 'bar',
            barWidth: '60%',
            data: [10, 52, 200, 334, 390, 330, 220]
        }
    ]
  };


  ngOnInit(): void {
    this.companyList = this.companyList.slice(this.companyList.length + 1);
    this.activatedRoute.queryParams.subscribe(params => {
      this.queryParams = params["queryParams"];
    });
    this.companyService.getStockPrice(this.queryParams).subscribe((response: any) => {
      this.companyList = response.result;
    });
  }
}
