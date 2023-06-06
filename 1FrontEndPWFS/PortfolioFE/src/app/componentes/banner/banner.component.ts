import { Component } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
  miPorfolio: any;
 
  
  constructor(private datosPortfolio: PortfolioService){}
  ngOnInit(): void{
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      console.log(data);
      this.miPorfolio = data;
    });
  }

}
