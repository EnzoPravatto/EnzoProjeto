import { Component } from '@angular/core';

@Component({
  selector: 'app-rodape',
  templateUrl: './rodape.component.html',
  styleUrls: ['./rodape.component.scss']
})
export class RodapeComponent {
    title: string = 'Lar Feliz Imóveis';
    copyright: string = 'Desenvolvido em 2023';
    developer: string = 'Start Tech TOTVS';

    redesSociais: Array<any> = [
      {
        nome: 'Facebook',
        link: 'http://www.facebook.com',
        icone: 'https://i.ibb.co/LZYBg8Q/logotipo-circular-do-facebook.png'
      },
      {
        nome: 'GitHub',
        link: 'https://github.com/EnzoPravatto',
        icone: 'https://ibb.co/7KNpBZs'
      },
      {
        nome: 'LinkedIn',
        link: 'www.linkedin.com/in/enzo-pravatto-de-moraes-928901215',
        icone: 'https://i.ibb.co/12YfRcr/linkedin.png'
      }
      
    ]
}
