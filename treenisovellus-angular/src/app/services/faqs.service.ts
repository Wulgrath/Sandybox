import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

const FAQS_URL: string = 'https://website-api.livelshopping.com/faqs';

@Injectable({
  providedIn: 'root',
})
export class FaqsService {
  constructor(private http: HttpClient) {}
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  getFaqs(): Observable<any[]> {
    return this.http.get<any[]>(FAQS_URL);
  }

  removeFaq(id: string): Observable<any> {
    console.log(`${FAQS_URL}/${id}`);

    return this.http.delete<any>(`${FAQS_URL}/${id}`);
  }

  createFaq(faq: any): Observable<any> {
    console.log(faq);
    return this.http.post<any>(FAQS_URL, faq, this.httpOptions);
  }

  updateFaq(faq: any): Observable<any> {
    console.log(faq);
    return this.http.put<any>(`${FAQS_URL}/${faq.id}`, faq);
  }
}
