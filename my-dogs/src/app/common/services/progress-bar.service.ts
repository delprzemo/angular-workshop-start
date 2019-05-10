import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProgressBarService {

  constructor() { }

  public showProgressBar = false;

  public turnOnProgressBar() {
    this.showProgressBar = true;
  }

  public turnOffProgressBar() {
    this.showProgressBar = false;
  }
}
