import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { UploadService } from '../services/upload.service';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { fileData } from '../models/fileData';
import { AlertifyService } from '../services/alertify.service';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.scss']
})
export class FormComponentComponent implements OnInit {


  @ViewChild('fileInput') fileInput: ElementRef;
  @Input() accept = '*/*';
  @Input() color = 'primary';
  @Input() label = 'Browse...';
  @Input() multiple = true;
  @Output() selected = new EventEmitter<[File[], FormData]>();



  public referer : FormGroup;
  // form = {
  //   filename: '',
  // };
  // JSON.stringify(this.form, null, 2

  fData: fileData;
  
  constructor(private uploadService: UploadService, private fb: FormBuilder, private httpClient: HttpClient, 
    private alertify: AlertifyService,) { 
    
  }
  ngOnInit(): void {
    this.referer = this.fb.group({
      FileName:[''],
  });
  }

  
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


 
  onSubmit() {
 
      this.fData = Object.assign({}, this.referer.value);
      this.uploadService.pushfile(this.fData).subscribe(
      { 
      // next: () =>  this.alertify.success('Registration succesful'),
       error: (e) => this.alertify.error(e.value),
       complete: () => this.alertify.success('Registration succesful')}
        
      );
  }

 
  fileChange = (event: any) => {
    const files: FileList = event.target.files;
    const fileList = new Array<File>();
    const formData = new FormData();

    for (let i = 0; i < files.length; i++) {
      formData.append(files.item(i).name, files.item(i));
      fileList.push(files.item(i));
    }

    this.selected.emit([fileList, formData]);
    this.fileInput.nativeElement.value = null;
    console.log(formData);
  }
 
}
