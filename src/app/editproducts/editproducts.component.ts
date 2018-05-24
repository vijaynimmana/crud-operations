import { Component, OnInit } from '@angular/core';
import { DataapiService } from '../dataapi.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editproducts',
  templateUrl: './editproducts.component.html',
  styleUrls: ['./editproducts.component.css']
})
export class EditproductsComponent implements OnInit {

  public stuID ='';
  public productData = {};
  public sat: any;
  constructor(private apidata: DataapiService, private route: ActivatedRoute, private router: Router) {
    this.stuID = route.snapshot.params['id'];
   }

  ngOnInit() {
    this.apidata.editProduct(this.stuID ).subscribe(data => {
      this.productData = data;
      console.log(this.productData)
    },error =>{
      alert("Error Message");
    })
  }

  editProduct(){
    this.apidata.updateProduct(this.productData,this.stuID).subscribe(data => {
      this.sat = data;
      this.router.navigate(['']);
      console.log(this.sat)
    },error => {
      alert('Error Message');
    })
  }
}
