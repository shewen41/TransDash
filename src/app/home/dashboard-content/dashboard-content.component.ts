import { Component, OnInit } from '@angular/core';
import { Chart } from 'node_modules/chart.js';

@Component({
  selector: 'app-dashboard-content',
  templateUrl: './dashboard-content.component.html',
  styleUrls: ['./dashboard-content.component.scss']
})
export class DashboardContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var myChart = new Chart("chLine1", {
      type: 'line',
      data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
          datasets: [{
              label: '# of Votes',
              data: [12, 9, 15, 13, 17],
              backgroundColor: [
                  'rgba(2, 148, 255, 0.126274)'
              ],
              borderColor: [
                  '#0294FF'
              ],
              borderWidth: 1
          }]
      },
      options: {
        legend: {
          display: false
        },
        elements: {
          point:{
              radius: 0
          }
        },
        scales: {
          xAxes: [{

              gridLines: {
                display:false
              } ,
              ticks: {
                  display: false,
                  beginAtZero: true
              }
          }],
          yAxes: [{
              gridLines: {
                display:false
              } ,
              ticks: {
                  display: false,
                  beginAtZero: true
              }
          }]
        }
      }
  });

  var myChart = new Chart("chLine2", {
    type: 'line',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
        datasets: [{
            label: '# of Votes',
            data: [12, 9, 15, 13, 17],
            backgroundColor: [
                'rgba(2, 148, 255, 0.126274)'
            ],
            borderColor: [
                '#0294FF'
            ],
            borderWidth: 1
        }]
    },
    options: {
      legend: {
        display: false
      },
      elements: {
        point:{
            radius: 0
        }
      },
      scales: {
        xAxes: [{

            gridLines: {
              display:false
            } ,
            ticks: {
                display: false,
                beginAtZero: true
            }
        }],
        yAxes: [{
            gridLines: {
              display:false
            } ,
            ticks: {
                display: false,
                beginAtZero: true
            }
        }]
      }
    }
    });

    var myChart = new Chart("chLine3", {
      type: 'line',
      data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
          datasets: [{
              label: '# of Votes',
              data: [12, 9, 15, 13, 17],
              backgroundColor: [
                  'rgba(2, 148, 255, 0.126274)'
              ],
              borderColor: [
                  '#0294FF'
              ],
              borderWidth: 1
          }]
      },
      options: {
        legend: {
          display: false
        },
        elements: {
          point:{
              radius: 0
          }
        },
        scales: {
          xAxes: [{

              gridLines: {
                display:false
              } ,
              ticks: {
                  display: false,
                  beginAtZero: true
              }
          }],
          yAxes: [{
              gridLines: {
                display:false
              } ,
              ticks: {
                  display: false,
                  beginAtZero: true
              }
          }]
        }
      }
  });

  var myChart = new Chart("chLine4", {
    type: 'line',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
        datasets: [{
            label: '# of Votes',
            data: [12, 9, 15, 13, 17],
            backgroundColor: [
                'rgba(2, 148, 255, 0.126274)'
            ],
            borderColor: [
                '#0294FF'
            ],
            borderWidth: 1
        }]
    },
    options: {
      legend: {
        display: false
      },
      elements: {
        point:{
            radius: 0
        }
      },
      scales: {
        xAxes: [{

            gridLines: {
              display:false
            } ,
            ticks: {
                display: false,
                beginAtZero: true
            }
        }],
        yAxes: [{
            gridLines: {
              display:false
            } ,
            ticks: {
                display: false,
                beginAtZero: true
            }
        }]
      }
    }
    });

    var myChart = new Chart("chLine5", {
      type: 'line',
      data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
          datasets: [{
              label: '# of Votes',
              data: [12, 9, 15, 13, 17, 9, 12],
              backgroundColor: [
                  'rgba(2, 148, 255, 0.126274)'
              ],
              borderColor: [
                  '#0294FF'
              ],
              borderWidth: 1
          }]
      },
      options: {
        legend: {
          display: false
        },
        elements: {
          point:{
              radius: 0
          }
        },
        scales: {
          xAxes: [{
  
              gridLines: {
                display:true
              } ,
              ticks: {
                  display: true,
                  beginAtZero: true
              }
          }],
          yAxes: [{
              gridLines: {
                display:false
              } ,
              ticks: {
                  display: false,
                  beginAtZero: true
              }
          }]
        }
      }
      });
  }

}
