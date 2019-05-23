import { Component, OnInit, Input } from '@angular/core';
import { DogItem } from '../models/dog-item';

@Component({
  selector: 'app-dog-list-item',
  templateUrl: './dog-list-item.component.html',
  styleUrls: ['./dog-list-item.component.less']
})
export class DogListItemComponent implements OnInit {
  @Input() dog: DogItem;
  
  constructor() { }

  ngOnInit() {
  }

}
