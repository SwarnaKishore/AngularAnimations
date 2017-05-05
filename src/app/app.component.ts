import { Component } from '@angular/core';
import { trigger, style, transition, keyframes, animate, group, NgZone, state }
    from '@angular/core';
    import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('wobble', [
      transition('* => *', animate('2000ms ease-out', keyframes([
        style({transform: 'translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)', offset: .15}),
        style({transform: 'translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)', offset: .30}),
        style({transform: 'translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)', offset: .45}),
        style({transform: 'translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)', offset: .60}),
        style({transform: 'translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)', offset: .75}),
        style({transform: 'none', offset: 1}),
      ]))),
    ]),
    trigger('flyInOut', [
    transition('void => *', [
      style({
        opacity: 0,
        transform: 'translateX(-100%)'
      }),
      animate('1000ms ease-out')
    ]),
    transition('* => void', [
      animate('2000ms', style({
        opacity: 0,
        transform: 'translateX(100%)'
      }))
    ])
  ]),
  trigger('flyInOutBounce', [
    transition('void => *', [
      animate(300, keyframes([
        style({opacity: 0, transform: 'translateX(-100%)', offset: 0}),
        style({opacity: 1, transform: 'translateX(15px)',  offset: 0.3}),
        style({opacity: 1, transform: 'translateX(0)',     offset: 1.0})
      ]))
    ]),
    transition('* => void', [
      animate(300, keyframes([
        style({opacity: 1, transform: 'translateX(0)',     offset: 0}),
        style({opacity: 1, transform: 'translateX(-15px)', offset: 0.7}),
        style({opacity: 0, transform: 'translateX(100%)',  offset: 1.0})
      ]))
    ])
  ])
  ]
  
})
export class AppComponent {
  wobble = 'I am wobble';
  flyInOut = 'I am flyInOut';
  flyInOutBounce = 'I am flyInOut Bounce'
  flyIn:boolean = false;
  bounce:boolean = false;

  toggle()
  {
     if(this.flyIn == true)
        this.flyIn = false;
     else 
        this.flyIn = true;
  }
   toggleBounce()
  {
     if(this.bounce == true)
        this.bounce = false;
     else 
        this.bounce = true;
  }
  

}
