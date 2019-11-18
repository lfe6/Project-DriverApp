import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import {DriverServiceService } from '../Services/driver-service.service';

@Component({
  selector: 'app-new-driver',
  templateUrl: './new-driver.component.html',
  styleUrls: ['./new-driver.component.css']
})
export class NewDriverComponent implements OnInit {
  DriverService: any;

  constructor() { }

  ngOnInit() {
  }

  onAddDriver(form: NgForm) {
    console.log(form.value);
    this.DriverService.SendDriverInformation(form.value.name,
    form.value.team, form.value.carnum).subscribe();
    console.log(form.value);
    form.resetForm();
    }
}
