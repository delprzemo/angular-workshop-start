import { Component } from '@angular/core';
import { ProgressBarService } from './common/services/progress-bar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'my-dogs';

  constructor(public progressBarService: ProgressBarService) {
  }
}
