import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DogItem } from '../models/dog-item';

@Component({
  selector: 'app-dog-list-item',
  templateUrl: './dog-list-item.component.html',
  styleUrls: ['./dog-list-item.component.less']
})
export class DogListItemComponent implements OnInit {
  @Input() dog: DogItem;
  @Output() remove: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  removeDog() {
    this.remove.emit(this.dog.id);
  }
}
