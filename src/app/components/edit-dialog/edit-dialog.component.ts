import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IDriver } from 'src/app/interfaces/driver';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss']
})
export class EditDialogComponent implements OnInit {
  driverForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<EditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IDriver
  ) {}

  ngOnInit() {
    // Create driver's form and set initial values
    this.driverForm = this.fb.group({
      name: [this.data.name, [Validators.required]],
      phone: [this.data.phone, [Validators.required]],
      email: [this.data.email]
    });
  }

  onSave(): void {
    const newDriverData = { ...this.data, ...this.driverForm.value };
    this.dialogRef.close(newDriverData);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
