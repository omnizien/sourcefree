import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Observable
//  } from 'rxjs';
 import { readFileSync, writeFileSync, promises as fsPromises } from 'fs';
import { join } from 'path';
import { fileData } from '../models/fileData';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*')
  .set('customer-header', 'custom')

  baseUrl='http://localhost:5001/api/material'

  constructor(private httpClient:HttpClient) {

  }
  // append json with file here::
  // https://tutorial.eyehunts.com/js/javascript-formdata-append-array/

  postFile(fileToUpload: File){

    const formData = new FormData();
    formData.append('file', fileToUpload);
    const headers = new HttpHeaders().append('Content-Disposition', 'multipart/form-data')
    console.log(fileToUpload)

    return this.httpClient.post(this.baseUrl + '/upload2', formData, {headers})

    }
 
    pushfile(user: fileData) {
      return this.httpClient.post(this.baseUrl + '/pushfiledata', user);
    }

    // this.httpClient.post(
    //   `/api/upload/uploadFiles/${userId}`,

    uploadFiles = (formData: FormData, userId: number): Promise<boolean> =>
    new Promise((resolve) => {
      this.httpClient.post(this.baseUrl + '/upload2',
        formData 
      )
      .subscribe(
        () => {
         
          resolve(true);
        },
        err => {
        console.log('error')
          resolve(false);
        }
      )
    });
 
}


  // this.http.get<IPagination>('http://localhost:5001/api/material?pageSize=50')
    // .pipe(
    //   map(response => {
    //    this.products = response.data;
    //   // this.products = response.data[1]
       
    //   })
    // ).subscribe(val => console.log(val))