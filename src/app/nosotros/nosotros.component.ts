import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { PaginaService } from '../pagina.service';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule, ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { ThemePalette } from '@angular/material/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';


export interface OPINION {
  position: number;
  name: string;
  opinion: string;
  calificacion: number;
  edad: string;
}

const OPINIONES: OPINION[] = [
  {
    position: 1,
    name: 'Juan Perez',
    opinion: 'Este hotel es maravilloso para pasar unas lindas vacaciones con la familia',
    calificacion: 4,
    edad: '40'
  },
  {
    position: 2,
    name: 'María López',
    opinion: 'Increíble atención y servicio, definitivamente volveré',
    calificacion: 5,
    edad: '35'
  },
  {
    position: 3,
    name: 'Pedro Ramirez',
    opinion: 'Las instalaciones son impresionantes, muy cómodas y bien cuidadas',
    calificacion: 4.5,
    edad: '45'
  },
  {
    position: 4,
    name: 'Laura Torres',
    opinion: 'El personal es amable y siempre dispuesto a ayudar en todo momento',
    calificacion: 4.2,
    edad: '28'
  },
  {
    position: 5,
    name: 'Carlos Sanchez',
    opinion: 'La comida en el restaurante es deliciosa, especialmente los postres',
    calificacion: 4.8,
    edad: '50'
  },
  {
    position: 6,
    name: 'Ana González',
    opinion: 'La piscina es espectacular, ideal para relajarse y disfrutar del sol',
    calificacion: 4.3,
    edad: '33'
  },
  {
    position: 7,
    name: 'Roberto Gómez',
    opinion: 'La ubicación del hotel es perfecta, cerca de todas las atracciones turísticas',
    calificacion: 4.6,
    edad: '42'
  },
  {
    position: 8,
    name: 'Marcela Fernández',
    opinion: 'Me encantó el gimnasio, muy bien equipado y con vistas increíbles',
    calificacion: 4.7,
    edad: '39'
  },
  {
    position: 9,
    name: 'Sofía Rodríguez',
    opinion: 'El acceso a internet de alta velocidad fue muy útil durante mi estancia',
    calificacion: 4.1,
    edad: '31'
  },
  {
    position: 10,
    name: 'Ricardo Mendoza',
    opinion: 'Recomendaría este hotel a todos mis amigos, la experiencia fue excepcional',
    calificacion: 4.9,
    edad: '48'
  }
];

const suma = OPINIONES.reduce((total, opinion) => total + opinion.calificacion, 0);
const num = OPINIONES.length;


export{OPINIONES}


@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})



export class NosotrosComponent {
  constructor(private pagina: PaginaService) {
    pagina.setValor('nosotros');
  }

  com: boolean = true;
  row: number = 1;
  promedio: number = parseFloat((suma / num).toFixed(1));

  ver() {
    this.com = false;
    this.row = 8;
  }

  nover() {
    this.com = true;
    this.row = 1;
  }

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(OPINIONES);


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  integrante = [
    {
      name: 'Leonardo Javier Hernandez Martinez',
      id: 'ID : 245439',
      foto: 'assets/perfil/LJHM.jpg',
      desc: 'Un brindis por todos.'
    },
    {
      name: 'Alfredo Quezada Márquez',
      id: 'ID : 274258',
      foto: 'assets/perfil/AQM.jpg',
      desc: 'El pollo es lo maximo. :v'
    },
    {
      name: 'Bárbara Jimena Silva Jaime',
      id: 'ID : 244923',
      foto: 'assets/perfil/BJSJ.jpg',
      desc: 'Me encanta el poder recorrer el mundo, conociendo nuevas personas y culturas.'
    },
    {
      name: 'Jaime Adolfo Varela Martínez',
      id: 'ID : 295482',
      foto: 'assets/perfil/JAVM.jpg',
      desc: 'Hola'
    },
  ];

  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'determinate';
  value = 90.2;

}

