import { Component, OnInit, Input } from '@angular/core';
import { DogItem } from '../models/dog-item';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.less']
})
export class ListItemComponent implements OnInit {
  @Input() dog: DogItem;
  constructor() { }

  ngOnInit() {
  }

}
