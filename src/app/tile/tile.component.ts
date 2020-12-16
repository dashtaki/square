import { Component, Input } from '@angular/core';
import { IPost } from '../interface/IPost';
import { TileService } from './service/tile.service';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss'],
})
export class TileComponent {
  @Input() post: IPost;

  constructor(public tileService: TileService) {}
}
