import { Component, OnInit } from '@angular/core';
import { DataapiService } from '../dataapi.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-addproducts',
  templateUrl: './addproducts.component.html',
  styleUrls: ['./addproducts.component.css']
})
export class AddproductsComponent implements OnInit {

  constructor(private apiData : DataapiService, private router: Router, private toastr: ToastrService) { }
  public sss : any = "";
  public productData = {};
  ngOnInit() {
      
    // this.apiData.getAPIData().subscribe(data =>{ 
    //   this.dataAPI = data;
    //   console.log(this.dataAPI)
    // },error => {
    //   alert("ERROR");
    // } );
  }
  addNewProduct(){
    debugger;
    this.apiData.addAPIData(this.productData).subscribe(data => {
      this.sss = data;
      console.log(this.sss);
      this.toastr.success('Hello world!', 'Toastr fun!');
      this.router.navigate(['']);
    })
  }

}
