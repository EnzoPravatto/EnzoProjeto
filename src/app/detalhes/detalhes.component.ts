import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.scss']
})
export class DetalhesComponent implements OnInit {

  imovelId: string;

  titulo: string = 'Motos';
  foto: string = 'https://img.wtvideo.com/images/original/587.jpg';

  description: string = 'Motociclo ou motocicleta (também conhecida simplesmente por motoca, moto ou ainda mota), é um veículo motorizado de duas rodas e tracção traseira e salvo raras excepções, capaz de desenvolver velocidade de cruzeiro com segurança e conforto. É um meio de transporte bastante utilizado devido ao mais baixo consumo de combustível e por ter um preço mais acessível que a maioria dos automóveis. Entretanto, há motos que consomem mais combustível do que muitos automóveis, variando, entre outros fatores, com a cilindrada do motor. Além de um meio de transporte, a motocicleta pode ser usada por áreas como desportos, lazer, utilitária e veículo militar.';
  description2: string = '';
  warnings: string = '';

  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.paramMap.subscribe(params => {
      this.imovelId = params.get('id') ?? '';
    });
  }

}
