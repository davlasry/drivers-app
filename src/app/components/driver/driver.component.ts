import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges
} from '@angular/core';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.scss']
})
export class DriverComponent {
  @Input() driver: any;
  @Input() selectedDriverId: boolean;
  @Output() driverClicked = new EventEmitter();

  onDriverClick(): void {
    this.driverClicked.emit(this.driver);
  }

  openEditDriverModal(event) {
    event.stopPropagation();
  }

  openDeleteDriverModal(event) {
    event.stopPropagation();
  }
}
