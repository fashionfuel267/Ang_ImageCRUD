import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-topmenu',
  templateUrl: './topmenu.component.html',
  styleUrls: ['./topmenu.component.css']
})
export class TopmenuComponent  implements OnInit{
menuForm:FormGroup;
insLst:any=[];
constructor(private service:HttpClient){
this.menuForm=new FormGroup({
  MenuTitle:new FormControl('',[Validators.required]),
  MenuDescription:new FormControl('',[Validators.required]),
  ParentId:new FormControl('',[Validators.required]),
  MenuRouteName:new FormControl('',[Validators.required]),
  DomainName:new FormControl('',[Validators.required]),
  IP:new FormControl('',[Validators.required]),
  InstituteId:new FormControl('',[Validators.required]),
  IsActive:new FormControl('',[Validators.required])
  
    })

}
selectbannerFile(event:any){
console.log(event)
}
ngOnInit(): void {
  this.service.get("https://localhost:7039/api/Institutes").subscribe((data)=>{
    // console.log(data)
   this.insLst=data;

  },(err)=>{console.log(err)})
}
onSubmit(){
  console.log( this.menuForm.value)
}


}
