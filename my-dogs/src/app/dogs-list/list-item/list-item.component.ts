import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DogItem } from '../models/dog-item';
import { DogListService } from '../services/dog-list.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.less']
})
export class ListItemComponent implements OnInit {
  @Input() dog: DogItem;
  @Output() removed: EventEmitter<DogItem> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  remove(dog:DogItem) {
    this.removed.emit(dog);
  }

}
