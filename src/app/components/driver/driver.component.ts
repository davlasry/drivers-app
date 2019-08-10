import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
} from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
import { DriversService } from 'src/app/services/drivers.service';
import { IDriver } from 'src/app/interfaces/driver';

@Component({
  selector: 'app-driver',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.scss']
})
export class DriverComponent {
  @Input() driver: IDriver;
  @Input() selectedDriverId: string;
  @Output() driverClicked = new EventEmitter();

  constructor(
    public dialog: MatDialog,
    private driversService: DriversService
  ) {}

  onDriverClick(): void {
    this.driverClicked.emit(this.driver);
  }

  openEditDriverModal(event): void {
    event.stopPropagation();

    const dialogRef = this.dialog.open(EditDialogComponent, {
      width: '350px',
      data: this.driver
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.driversService.editDriver(result);
      }
    });
  }

  openDeleteDriverModal(event): void {
    event.stopPropagation();

    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '350px',
      data: this.driver
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.driversService.deleteDriver(result.id);
      }
    });
  }
}
