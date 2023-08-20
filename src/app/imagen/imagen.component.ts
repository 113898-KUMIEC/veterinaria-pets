import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-imagen',
  templateUrl: './imagen.component.html',
  styleUrls: ['./imagen.component.css']
})
export class ImagenComponent {
 @Input() rutaFoto: string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuTvnNJus8_mKnZwaUQgvLmQrV9WS95yw8S_ryMdW0mw&s';
}
