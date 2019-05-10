import { Component, OnInit } from '@angular/core';
import { DogItem } from './models/dog-item';
import { DogListService } from './services/dog-list.service';
import { Router } from '@angular/router';
import { ProgressBarService } from '../common/services/progress-bar.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-dogs-list', 
  templateUrl: './dogs-list.component.html',
  styleUrls: ['./dogs-list.component.less']
})  

export class DogsListComponent implements OnInit {
  dogs: DogItem[] 

  constructor(public dogListService: DogListService, 
    private router: Router,
    private progressBarService: ProgressBarService,
    private snackBar: MatSnackBar) {
    this.dogListService.buildDogList();
    this.syncData();
  }

  ngOnInit() {
  }

  syncData(isElementRemoved = false) {
    this.progressBarService.turnOnProgressBar();
    this.dogListService.getDogs().subscribe(result =>{
      this.dogs = result;
      this.progressBarService.turnOffProgressBar();
      if(isElementRemoved) {
        this.snackBar.open("Item removed", "Close");
      }
    })
  }

  redirectToHelp() {
    this.router.navigate(['/help'], { queryParams: { redirected: true } });
  }

  removeDog(dog: DogItem) {
    this.dogListService.removeDog(dog.id);
    this.syncData(true);
  }

  checkIfIdEven(item: DogItem) {
    return item.id % 2;
  }
}
