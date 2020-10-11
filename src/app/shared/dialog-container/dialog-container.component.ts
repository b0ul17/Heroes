import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dialog-container',
  templateUrl: './dialog-container.component.html',
  styleUrls: ['./dialog-container.component.css']
})
export class DialogContainerComponent {
  @Input() caption: string;
}
