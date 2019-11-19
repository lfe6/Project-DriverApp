import { Component, OnInit } from '@angular/core';
import { DriverServiceService } from '../Services/driver-service.service';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-view-driver',
  templateUrl: './view-driver.component.html',
  styleUrls: ['./view-driver.component.css']
})
export class ViewDriverComponent implements OnInit {
  MyDrivers: any = [];
  constructor(private driverService: DriverServiceService) { }

  ngOnInit() {
    this.driverService.PostDriverInformation().subscribe((data) => {
      this.MyDrivers = data.drivers;
      console.log(this.MyDrivers);
    })
  }

  onDelete(id:String){
    console.log("Deleting movie with id:" +id);
    this.driverService.DeleteDriver(id).subscribe();
    }


}
