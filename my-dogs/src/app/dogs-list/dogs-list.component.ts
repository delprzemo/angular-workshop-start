import { Component, OnInit } from '@angular/core';
import { DogItem } from './models/dog-item';
import { DogListService } from './services/dog-list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dogs-list',
  templateUrl: './dogs-list.component.html',
  styleUrls: ['./dogs-list.component.less']
})
export class DogsListComponent {
  data: DogItem[];
  constructor(private dogListService: DogListService, private router: Router) {
    this.dogListService.buildDogList();
    this.syncData();
  }

  checkIfIdEven(item: DogItem): boolean {
    return item.id % 2 === 0;
  }

  removeDog(dog:DogItem) {
    this.dogListService.removeDog(dog.id);
    this.data = this.dogListService.dogs;
  }

  isDataEmpty(): boolean {
    return this.data && this.data.length === 0;
  }

  redirectToHelp() {
    this.router.navigate(['/help'], { queryParams: { redirected: true } });
  }

  syncData() {
    this.dogListService.getDogsAsync().subscribe(result => {
      this.data = result;
    })
  }
}
