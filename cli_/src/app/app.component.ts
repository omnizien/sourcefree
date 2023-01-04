import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IProduct } from 'src/shared/models/product';
import { IPagination } from 'src/shared/models/pagination';
import { from, map, Observable } from 'rxjs';
import { UploadService } from './services/upload.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  

  products!: IProduct[];
  registerForm!: FormGroup;
  submitted = false;
  fileformats = '.txt, .pptx'
  name = new FormControl('');
 
  constructor(private http:HttpClient, 
    private uploadService:UploadService){
  }
 
 
  ngOnInit(): void {}

  handleInput(event:Event){
    let files = (event.target as HTMLInputElement).files; 
    if(files){
      for(let index = 0; index < files.length; index++){
        if(files.item(index)){
          this.postFile(files.item(index) as File)
        }
      }
    }

    (event.target as HTMLInputElement).files = null;
    (event.target as HTMLInputElement).value = "";

  }

  postFile(file:File){
    this.uploadService.postFile(file).subscribe(()=>{})
 
  }
 
  onReset() {
      this.submitted = false;
      this.registerForm.reset();
  }
 
}


 