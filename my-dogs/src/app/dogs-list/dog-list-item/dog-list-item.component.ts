import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { DogItem } from '../models/dog-item';
import { DogListService } from '../services/dog-list.service';
import { ProgressBarService } from 'src/app/common/services/progress-bar.service';

@Component({
  selector: 'app-dog-list-item',
  templateUrl: './dog-list-item.component.html',
  styleUrls: ['./dog-list-item.component.less']
})

export class DogListItemComponent implements OnInit {
  @Input() item: DogItem;
  @Output() remove: EventEmitter<DogItem> = new EventEmitter();

  constructor() {

   }

  ngOnInit() {
  }

  removeItem() { 
    this.remove.emit(this.item);
  }
}
