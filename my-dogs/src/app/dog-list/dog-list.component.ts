import { Component, OnInit } from '@angular/core';
import { DogItem } from './models/dog-item';
import { DogListService } from './services/dog-list.service';

@Component({
  selector: 'app-dog-list',
  templateUrl: './dog-list.component.html',
  styleUrls: ['./dog-list.component.less']
})
export class DogListComponent implements OnInit {

  data: DogItem[];

  constructor(private dogListService: DogListService) {
    this.dogListService.buildDogList();
    this.data = this.dogListService.getDogList();
  }

  ngOnInit() {
  }

}
