import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpErrorResponse} from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Plugins } from '@capacitor/core';
//import { Observable, BehaviorSubject } from  'rxjs';
import { EnvService } from './env.service';
import { AuthResponse } from  '../model/auth-response';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

const { Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(private  http:  HttpClient,private env:EnvService) { 
   
  }

  /*
  login(data): Observable<AuthResponse> {
    return this.httpClient.post(`${this.env.API_URL}/login.php`, data).pipe(
      tap(async (res: AuthResponse) => {
        if (res.status==1) {
          
          await Storage.set({
            key: 'userInfo',
            value: JSON.stringify(res)
          });
          this.authSubject.next(true);
        }
      })
    );
  }
  */
 // Http Options
 /*
 httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'multipart/form-data'
  })
}
*/
httpOptions = {
  headers: new HttpHeaders({
    
  })
}

headers={
  headers: {'Content-Type':'text/plain'}
};

/*
 headers= new HttpHeaders()
  .delete('Content-Type');
  */
  
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

/*
uploadFileToUrl = function(file, title, text, uploadUrl){
  var payload = new FormData();

  payload.append("title", title);
  payload.append('text', text);
  payload.append('file', file);

  return this.$http({
      url: uploadUrl,
      method: 'POST',
      data: payload,
      //assign content-type as undefined, the browser
      //will assign the correct boundary for us
      headers: { 'Content-Type': undefined},
      //prevents serializing payload.  don't do it.
      transformRequest: angular.identity
  });
}
*/

//login service call
login(item): Observable<AuthResponse> {


  return this.http
    .post<AuthResponse>(this.env.API_URL+'/login.php', item,{})
    .pipe(
      retry(0),
      catchError(this.handleError)
    )
}




//fecth about us
fecthAboutusContent(item) {
  return this.http
    .post(this.env.API_URL+'/aboutus.php', item, {})
    .pipe(
      retry(0),
      catchError(this.handleError)
    )
}

//fecth about us
fecthPrivacyPolicyContent(item) {
  return this.http
    .post(this.env.API_URL+'/privacy_policy.php', item, {})
    .pipe(
      retry(0),
      catchError(this.handleError)
    )
}


//forgot password
forgotpassword(item) {
  return this.http
    .post(this.env.API_URL+'/forget_password.php', item, {
      headers: {'Content-Type':'application/x-www-form-urlencoded'}
    })
    .pipe(
      retry(0),
      catchError(this.handleError)
    )
}

//validateForgotPasswordOTP
validateForgotPasswordOTP(item) {
  return this.http
    .post(this.env.API_URL+'/forget_password_otp.php', item, {})
    .pipe(
      retry(0),
      catchError(this.handleError)
    )
}

//resetPassword
resetPassword(item) {
  return this.http
    .post(this.env.API_URL+'/reset_password.php', item, {})
    .pipe(
      retry(0),
      catchError(this.handleError)
    )
}


//changePassword
changePassword(item) {
  return this.http
    .post(this.env.API_URL+'/change_password.php', item, {})
    .pipe(
      retry(0),
      catchError(this.handleError)
    )
}

//validateRegOtp
validateRegOtp(item) {
  return this.http
    .post(this.env.API_URL+'/registration_otp.php', item, {})
    .pipe(
      retry(0),
      catchError(this.handleError)
    )
}


 
}
