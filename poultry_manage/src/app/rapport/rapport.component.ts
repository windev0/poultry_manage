import { Component } from '@angular/core';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-rapport',
  templateUrl: './rapport.component.html',
  styleUrls: ['./rapport.component.css']
})
export class RapportComponent {
  chart!: Chart;
  errorMessage! : string;

  constructor() { }

  ngOnInit(): void {
    // Récupérer les données de ventes
    const salesData = [100, 200, 300, 400, 500];

    // Créer le graphique de ventes
    this.chart = new Chart('salesChart', {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [{
          label: 'Sales',
          data: salesData,
          borderColor: 'blue',
          fill: false
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          // yAxes: [{
          //   ticks: {
          //     beginAtZero: true
          //   }
          // }]
        }
      }
    });
  }
}
