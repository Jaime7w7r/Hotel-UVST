import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexTitleSubtitle,
  ApexXAxis,
  ApexFill
} from "ng-apexcharts";
import { ApiService } from '../api.service';
import { PaginaService } from '../pagina.service';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  title: ApexTitleSubtitle;
};
@Component({
  selector: 'app-Grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.css']
})
export class GraficaComponent implements OnInit {
  chartOptions: ChartOptions | undefined;
  datos:any[] | undefined;
  fechas:any[]| undefined;
  mesesNombres: string[] = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre'
  ];
  ResevMes:any[] | undefined;
  constructor(private apiService: ApiService, private pagina: PaginaService) {
    pagina.setValor('graficos');
  }
  procesarDatos(){
    this.fechas=[];
    this.ResevMes=[];
    console.log(this.datos);
    for(let Res of this.datos ?? []){
      this.fechas.push(Res.fecha[0]);
    }
    const recuentoPorMes: { [mes: string]: number } = {};
    for(let fecha of this.fechas){
      const mes = new Date(fecha).getMonth();

      if (recuentoPorMes[mes]) {
        recuentoPorMes[mes]++;
      } else {
        recuentoPorMes[mes] = 1;
      }
    }
    this.ResevMes = new Array(12).fill(0);
    for (let mes in recuentoPorMes) {
      console.log(`Mes ${Number(mes) + 1}: ${recuentoPorMes[mes]} fechas`);
      this.ResevMes[parseInt(mes)]=recuentoPorMes[mes];
    }

    console.log(this.ResevMes);
    console.log(this.mesesNombres);

    this.chartOptions = {
      series: [
        {
          name: "Reservaciones",
          data: this.ResevMes
        }
      ],
      chart: {
        height: 350,
        type: "bar"
      },
      plotOptions: {
        bar: {
          dataLabels: {
            position: "top" // top, center, bottom
          }
        }
      },
      dataLabels: {
        enabled: true,
        formatter: function(val) {
          return val + "";
        },
        offsetY: -20,
        style: {
          fontSize: "12px",
          colors: ["#304758"]
        }
      },

      xaxis: {
        categories: [
          'Enero',
          'Febrero',
          'Marzo',
          'Abril',
          'Mayo',
          'Junio',
          'Julio',
          'Agosto',
          'Septiembre',
          'Octubre',
          'Noviembre',
          'Diciembre'
        ],
        position: "top",
        labels: {
          offsetY: -18
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        crosshairs: {
          fill: {
            type: "gradient",
            gradient: {
              colorFrom: "#D8E3F0",
              colorTo: "#BED1E6",
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5
            }
          }
        },
        tooltip: {
          enabled: true,
          offsetY: -35
        }
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "light",
          type: "horizontal",
          shadeIntensity: 0.25,
          gradientToColors: undefined,
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [50, 0, 100, 100]
        }
      },
      yaxis: {
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          show: false,
          formatter: function(val) {
            return val + "";
          }
        }
      },
      title: {
        text: "Reservaciones",
        floating: false,
        offsetY: 320,
        align: "center",
        style: {
          color: "#444"
        }
      }
    };
  }
  ngOnInit() {
    this.apiService.obtenerDatos("getResev").subscribe(
      (response)=>{
        this.datos=response;
        this.procesarDatos();
      },
      (error)=>{
        console.error('Error al obtener los datos',error);
      }
    );


    
   

    //  Llama al evento "resize", actualizando el chart.
    setTimeout(() => (window as any).dispatchEvent(new Event('resize')), 1);
  }

}
