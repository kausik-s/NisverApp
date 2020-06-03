import { Injectable } from '@angular/core';
import { EnvService } from './env.service';
import { AuthResponse } from  '../model/auth-response';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders,HttpErrorResponse} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private  http:  HttpClient,private env:EnvService){ }


// Http Options
httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'multipart/form-data'
  })
}

// Handle API errors
handleError(error: HttpErrorResponse) {
  if (error.error instanceof ErrorEvent) {
    // A client-side or network error occurred. Handle it accordingly.
    console.error('An error occurred:', error.error.message);
  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong,
    console.error(
      `Backend returned code ${error.status}, ` +
      `body was: ${error.error}`);
  }
  // return an observable with a user-facing error message
  return throwError(
    'Something bad happened; please try again later.');
};


  //Feedback
  addFeedback(item) {
    return this.http
      .post(this.env.API_URL+'/feedback_add.php', item, {})
      .pipe(
        retry(0),
        catchError(this.handleError)
      )
  }
   
  //update profile
  updateProfile(item) {
    return this.http
      .post(this.env.API_URL+'/my_profile_update.php', item, {})
      .pipe(
        retry(0),
        catchError(this.handleError)
      )
  }

  //get category list
  getCategoryList(item) {
    return this.http
      .post(this.env.API_URL+'/category_list.php', item, {})
      .pipe(
        retry(0),
        catchError(this.handleError)
      )
  }

  //search vendor
  searchVendorList(item) {
    return this.http
      .post(this.env.API_URL+'/search_vender_list.php', item, {})
      .pipe(
        retry(0),
        catchError(this.handleError)
      )
  }


}
