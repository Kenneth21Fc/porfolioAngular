import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-biografia',
  templateUrl: './biografia.component.html',
  styleUrls: ['./biografia.component.css']
})
export class BiografiaComponent implements OnInit {

  miPorfolio:any;
    
  constructor(private datosPorfolio:PorfolioService){}

    ngOnInit(): void {
      this.datosPorfolio.obtenerDatos().subscribe(data =>{
        console.log(data);
        this.miPorfolio=data;
      });
    }
  }

