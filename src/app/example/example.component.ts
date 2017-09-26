import { Component } from '@angular/core';

@Component({
  selector: 'example',
  //string interpolation{{x}}
  template: `
        <h2>{{ title }}</h2>
        <img [src]="imageUrl" />
        <table>
          <tr>
            <td [attr.colspan]="colSpan"></td>
          </tr>
        </table>
        <button class="btn btn-primary" [class.active]="isActive" id="bootstrap">One</button>
        <hr>
        <button [style.backgroundColor]="isActive ? 'blue' : 'white'" id="styleBinding">Two</button>
        <hr>
        <div (click)="onDivClicked()">
          <button (click)="onSave($event)" id="eventBinding">Three</button>
        </div>
        <hr>
        <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />
      `
})

export class ExamplesComponent {
  title = "List of Examples";
  imageUrl = "";
  colSpan = 2;
  isActive = false;
  onSave($event){
    $event.stopPropagation();
    console.log("Button was clicked.", $event); /*$event tracks click props*/
  }
  onDivClicked(){
    console.log("Div was clicked.");
  }
  email = "me@example.com"
  onKeyUp() {
    console.log(this.email);
  }
}
