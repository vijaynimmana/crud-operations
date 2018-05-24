import { Component, OnInit } from '@angular/core';
import { DataapiService } from '../dataapi.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-listproducts',
  templateUrl: './listproducts.component.html',
  styleUrls: ['./listproducts.component.css']
})
export class ListproductsComponent implements OnInit {

  public dataAPI: any;
  public deleteAPI: any;
  constructor(private apiData:DataapiService, private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
    this.apiData.getAPIData().subscribe(data =>{ 
      this.dataAPI = data;
      console.log(this.dataAPI)
    },error => {
      alert("ERROR");
    } );
  }

  deleteProduct(id: number){
    if(confirm('Are you sure to delete this record?') == true){
      this.apiData.delete(id).subscribe(data => {
        this.deleteAPI = data;
        this.apiData.getAPIData();
        this.toastr.success('Delete Data Successfully');
        window.location.reload();
      })
    }
  }

}
