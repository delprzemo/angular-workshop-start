import { Component, OnInit } from '@angular/core';
import { DogItem } from './models/dog-item';
import { DogListService } from './services/dog-list.service';

@Component({
  selector: 'app-dogs-list',
  templateUrl: './dogs-list.component.html',
  styleUrls: ['./dogs-list.component.less']
})
export class DogsListComponent {
  data: DogItem[];
  constructor(private dogListService: DogListService) {
    this.dogListService.buildDogList();
    this.data = this.dogListService.dogs;
  }

}
