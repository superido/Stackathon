import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comparecompany',
  templateUrl: './comparecompany.component.html',
  styleUrls: ['./comparecompany.component.css'],
})
export class ComparecompanyComponent implements OnInit {
  constructor() {
    setTimeout(() => {
      this.showloading = false;
    }, 3000);
  }

  showloading: boolean = true;

  ngOnInit(): void {}
  posList = [
    'left',
    'right',
    'top',
    'bottom',
    'inside',
    'insideTop',
    'insideLeft',
    'insideRight',
    'insideBottom',
    'insideTopLeft',
    'insideTopRight',
    'insideBottomLeft',
    'insideBottomRight',
  ];


  config = {
    rotate: 90,
    align: 'left',
    verticalAlign: 'middle',
    position: 'insideBottom',
    distance: 15,
  };

  labelOption = {
    show: true,
    position: this.config.position,
    distance: this.config.distance,
    align: this.config.align,
    verticalAlign: this.config.verticalAlign,
    rotate: this.config.rotate,
    formatter: '{c}  {name|{a}}',
    fontSize: 16,
    rich: {
      name: {
        textBorderColor: '#fff',
      },
    },
  };

  chartOption: any = {
    color: ['#003366', '#006699', '#4cabce', '#e5323e'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    legend: {
      data: ['Forest', 'Steppe', 'Desert', 'Wetland'],
    },
    toolbox: {
      show: true,
      orient: 'vertical',
      left: 'right',
      top: 'center',
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        magicType: { show: true, type: ['line', 'bar', 'stack', 'tiled'] },
        restore: { show: true },
        saveAsImage: { show: true },
      },
    },
    xAxis: [
      {
        type: 'category',
        axisTick: { show: false },
        data: ['2012', '2013', '2014', '2015', '2016'],
      },
    ],
    yAxis: [
      {
        type: 'value',
      },
    ],
    series: [
      {
        name: 'Forest',
        type: 'bar',
        barGap: 0,
        label: this.labelOption,
        data: [320, 332, 301, 334, 390],
      },
      {
        name: 'Steppe',
        type: 'bar',
        label: this.labelOption,
        data: [220, 182, 191, 234, 290],
      },
      {
        name: 'Desert',
        type: 'bar',
        label: this.labelOption,
        data: [150, 232, 201, 154, 190],
      },
      {
        name: 'Wetland',
        type: 'bar',
        label: this.labelOption,
        data: [98, 77, 101, 99, 40],
      },
    ],
  };
}
