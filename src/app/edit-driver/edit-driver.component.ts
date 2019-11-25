import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import {Router,ActivatedRoute} from '@angular/router';
import {DriverServiceService} from '../Services/driver-service.service';
@Component({
  selector: 'app-edit-driver',
  templateUrl: './edit-driver.component.html',
  styleUrls: ['./edit-driver.component.css']
})
export class EditDriverComponent implements OnInit {
driver:any=[];
  constructor(private driverService:DriverServiceService,private router:Router, private route:ActivatedRoute) { }

  ngOnInit() {
    this.driverService.GetDriver(this.route.snapshot.params['id']).subscribe((data)=>{
      this.driver=data;
      console.log(this.driver);
          }
         )}



        onEditDriver(form: NgForm) {
          
          this.driverService.UpdateDriver(this.driver._id,form.value.Name,form.value.Team,form.value.CarNum).subscribe();
          }
  }


