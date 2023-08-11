import { Component } from '@angular/core';

@Component({
  selector: 'app-rodape',
  templateUrl: './rodape.component.html',
  styleUrls: ['./rodape.component.scss']
})
export class RodapeComponent {
    title: string = 'Rocket Motors';
    copyright: string = 'Start Tech TOTVS';
    developer: string = 'Todos os direitos reservɑdos®';

    redesSociais: Array<any> = [
      {
        nome: 'GitHub',
        link: 'https://github.com/EnzoPravatto',
        icone: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg1yT3iHMb9OdNnmC1qodWRciImpxI9qeTKA&usqp=CAU'
    
      },
      {
        nome: 'LinkedIn',
        link: 'www.linkedin.com/in/enzo-pravatto-de-moraes-928901215',
        icone: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEoiwOqNX0bhKfKEEbZtsAYAu3ui0OzoaltQ&usqp=CAU'
      }
      
    ]
}
