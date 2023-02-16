import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
@Component({
  selector: 'app-contactame',
  templateUrl: './contactame.component.html',
  styleUrls: ['./contactame.component.css']
})
export class ContactameComponent implements OnInit {
  miPorfolio:any;
    
  constructor(private datosPorfolio:PorfolioService){}

    ngOnInit(): void {
      this.datosPorfolio.obtenerDatos().subscribe(data =>{
        console.log(data);
        this.miPorfolio=data;
      });
    } 


}
