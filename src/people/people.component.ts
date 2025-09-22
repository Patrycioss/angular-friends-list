import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-people',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './people.component.html',
  styleUrl: './people.component.css'
})
export class PeopleComponent {
  @Output() public newFavourite = new EventEmitter<string>();
  @Input("people") people : string[] = [];

  onFavourite(person: string) {
    this.newFavourite.emit(person);
  }
}
