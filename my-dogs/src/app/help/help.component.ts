import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({ 
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.less'],
  animations: [
    trigger('openClose', [
      state('open', style({
        color: "green",
        height: '400px',
        opacity: 1.5,
      })),
      state('closed', style({
        color: "blue",
        height: '100px',
        opacity: 0.5,
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('1s')
      ])
    ])
  ]
})
export class HelpComponent implements OnInit {

  isShowed = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const parameters = params as {redirected: boolean};
      const redirected: boolean = parameters.redirected;
      if(redirected) {
        alert("Redirected");
      }
    });
  }

  buttonClick() {
    this.isShowed = !this.isShowed;
  }

}
