import {HttpClient} from "@angular/common/http";
import {ComplexFormValue} from "../models/complex-form-value.model";
import {catchError, delay, mapTo, Observable, of} from "rxjs";
import {environment} from "../../../environments/environment.prod";
import {Injectable} from "@angular/core";

@Injectable()
export class ComplexFormService {
  constructor(private http: HttpClient) {}

  saveUserInfo(formValue: ComplexFormValue): Observable<boolean> {
    return this.http.post(`${environment.apiUrl}/users`, formValue).pipe(
      mapTo(true),
      delay(1000),
      catchError(() => of(false).pipe(
        delay(1000)
      ))
    );
  }
}
