import { Component, OnInit } from '@angular/core';
import { DogItem } from './models/dog-item';
import { DogListService } from './services/dog-list.service';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-dog-list',
  templateUrl: './dog-list.component.html',
  styleUrls: ['./dog-list.component.less']
})
export class DogListComponent implements OnInit {

  data: DogItem[];

  constructor(private dogListService: DogListService, protected accountService: AccountService) {
    this.dogListService.buildDogList();
    this.data = this.dogListService.getDogList();
  }

  ngOnInit() {
    if(!this.accountService.isLogged()) {
      alert("Please log in");
    }
  }

  removeDog(id: number) {
    this.dogListService.removeDog(id);
    this.data = this.dogListService.getDogList();
  }

}
