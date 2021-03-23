import { Component, OnInit } from '@angular/core';

import { MyserviceService } from './myservice.service';
import { FilterPipe }from './filter.pipe'
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  myData:any ;
 dataSource:any;
 filteredData:any[]=[];
  searchText:string;
  
  constructor(private myservice:MyserviceService)
  {
  
  }
  ngOnInit(): void {
  //  this.dataSource = new MatTableDataSource(this.myData);
    this.myservice.getAll().subscribe((data:any)=>{
      this.myData=data.data.children;
      this.filteredData=this.myData
      console.log('posts'+(this.myData.length));
    })
    
  }

  applyFilter(filterValue: string) {
    this.filteredData=this.myData
    this.filteredData=this.myData.filter(element => 
     element.data.title.toLowerCase().includes(filterValue.trim().toLowerCase()))
    
//this.myData.filter = filterValue.trim().toLowerCase();

 
  }
  }
 
