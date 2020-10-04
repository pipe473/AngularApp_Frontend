import { Component, OnInit } from '@angular/core';
import { Disco } from '../../model/disco';
import { DiscoService } from '../../shared/disco.service';

@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html',
  styleUrls: ['./vista.component.scss']
})
export class VistaComponent implements OnInit {

  public discos: any[] = [];
  // public discos: string;

constructor(public discoService: DiscoService){ }
public mostrarDisco(id: number)
  {
    this.discoService.obtenerDisco(id).subscribe((data:any[]) => {
      this.mostrarDisco = data[0];
      console.log(data);      
    }
    )
  }

  ngOnInit(): void {
  }

}
