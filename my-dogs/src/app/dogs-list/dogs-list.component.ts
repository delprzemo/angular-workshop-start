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

  checkIfIdEven(item: DogItem): boolean {
    return item.id % 2 === 0;
  }

  removeDog(dog:DogItem) {
    this.dogListService.removeDog(dog.id);
    this.data = this.dogListService.dogs;
  }

}
