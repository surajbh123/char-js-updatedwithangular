import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-chart-comp',
  templateUrl: './chart-comp.component.html',
  styleUrls: ['./chart-comp.component.scss']
})

// SELECT date(t.Record_Insert_Date),count(*) 
// FROM fmcfinbulawayobranchdb.receipt_table as t
//  group by  date(t.Record_Insert_Date);

export class ChartCompComponent implements OnInit {

  constructor() { }

  @ViewChild('myChart') chartRef!: ElementRef;
  chartElementRef!: HTMLCanvasElement;
  myChart!: Chart;
  charType: string = "bar";
  ngAfterViewInit(): void {
    console.log("hii");
    this.chartElementRef = this.chartRef.nativeElement;
    this.chart();
  }
  ngOnInit(): void {
  }
  chart() {
    let data = [12, 19, 3, 5, 2, 3];

    let isDought = this.charType === "doughnut" ? true : false;
    //@ts-ignore
    this.myChart = this.myChart !== undefined ? this.myChart.destroy() : {};
    this.myChart = new Chart(this.chartElementRef, {
      type: this.charType,
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        
        tooltips: {
          //enabled:false,
        },
        plugins:{
          datalables:{
            formatter:() =>{
            
            }
          }
        }
        ,
        animation: {
          easing: 'easeInOutBack',
          duration: 2000
        },

        scales: {
          
          yAxes: [{
            display: !isDought,
            gridLines:{
              drawOnChartArea:false
            },
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });

 
  }

 

}
