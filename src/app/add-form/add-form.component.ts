import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent {
  category = [
    { id: 0, name: 'N/A' },
    { id: 1, name: 'Development' },
    { id: 2, name: 'Art' },
    { id: 3, name: 'Languages' },
  ];
  submit(f){
      console.log(f.value);
  }
}
