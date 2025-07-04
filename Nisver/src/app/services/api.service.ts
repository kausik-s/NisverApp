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


  //bookOrder
  bookOrder(item) {
    return this.http
      .post(this.env.API_URL+'/order_booking.php', item, {})
      .pipe(
        retry(0),
        catchError(this.handleError)
      )
  }


  //getOrders
  getOrdersList(item) {
    return this.http
      .post(this.env.API_URL+'/order_history_listing.php', item, {})
      .pipe(
        retry(0),
        catchError(this.handleError)
      )
  }

  //acceptOrRejectOrder
  acceptOrRejectOrder(item) {
    return this.http
      .post(this.env.API_URL+'/order_accept_reject.php', item, {})
      .pipe(
        retry(0),
        catchError(this.handleError)
      )
  }

  
//For Admin
    //Feedback List
    getfeedbackList(item) {
      return this.http
        .post(this.env.API_URL+'/feedback_list.php', item, {})
        .pipe(
          retry(0),
          catchError(this.handleError)
        )
    }
  //Customer List
  getCustomerList(item) {
    return this.http
      .post(this.env.API_URL+'/admin_customer_vender_list.php', item, {})
      .pipe(
        retry(0),
        catchError(this.handleError)
      )
  }
  //BlockUnblock User
  setBlockUnblock(item) {
    return this.http
      .post(this.env.API_URL+'/admin_customer_vendor_block_unblock.php', item, {})
      .pipe(
        retry(0),
        catchError(this.handleError)
      )
  } 
  //Category add
  addCategory(item) {
    return this.http
      .post(this.env.API_URL+'/category_add.php', item, {})
      .pipe(
        retry(0),
        catchError(this.handleError)
      )
  }
 //displayTermsAndCondition User
  displayTermsAndCondition(item) {
    return this.http
      .post(this.env.API_URL+'/term_condition.php', item, {})
      .pipe(
        retry(0),
        catchError(this.handleError)
      )
  } 


   //fetchBookingList User
   fetchBookingList(item) {
    return this.http
      .post(this.env.API_URL+'/order_booking_listing.php', item, {})
      .pipe(
        retry(0),
        catchError(this.handleError)
      )
  } 


   //cancel Booking
   cancelBooking(item) {
    return this.http
      .post(this.env.API_URL+'/cancel_my_booking_order.php', item, {})
      .pipe(
        retry(0),
        catchError(this.handleError)
      )
  } 

  //complete order
  completeOrder(item) {
    return this.http
      .post(this.env.API_URL+'/order_progress_to_complete.php', item, {})
      .pipe(
        retry(0),
        catchError(this.handleError)
      )
  } 

   
  //submitRatingForOrder
  submitRatingForOrder(item) {
    return this.http
      .post(this.env.API_URL+'/give_complete_order_rating.php', item, {})
      .pipe(
        retry(0),
        catchError(this.handleError)
      )
  } 


  //add-best work
  addbestwork(item) {
    return this.http
      .post(this.env.API_URL+'/add_bestwork.php', item, {})
      .pipe(
        retry(0),
        catchError(this.handleError)
      )
  } 


  //bestwork listing
    bestworkListing(item) {
    return this.http
      .post(this.env.API_URL+'/my_bestwork_listing.php', item, {})
      .pipe(
        retry(0),
        catchError(this.handleError)
      )
  } 

}
