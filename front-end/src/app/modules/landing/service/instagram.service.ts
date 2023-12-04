import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InstagramService {

  private accessToken = `IGQWRNNEc1WmZAUb096ZA2JJZAVhhU2tfSlZAmVUZAVeTZALRDZAHTFY0RGhzNkk2VWRMZAmt4MXF6LUh0bW5paVh0REQ0S0V0a05yU0J2MmlHX01zVmkxQ29XVWVLeE1mUEMyMVZAYZAm1RU1NiQnVFa0dZAR3lFN1d2ZAWxCb0kZD`
  private app_id = '1487706665418963'
  private app_secret = 'e28fd50b701e5fe150ea3dc1f5cc67ef'
  private apiUrl = `https://graph.instagram.com/me/media?fields=id,media_type,media_url,thumbnail_url,caption&
  client_id=${this.app_id}&
  client_secret=${this.app_secret}&
  access_token=${this.accessToken}`//`https://graph.instagram.com/me/media?fields=id,media_type,media_url,thumbnail_url,caption&access_token=${this.accessToken}`;


  private accessTokenUrl = `https://graph.facebook.com/{graph-api-version}/oauth/access_token?
  grant_type=fb_exchange_token&
  client_id=${this.app_id}&
  client_secret=${this.app_secret}&
  fb_exchange_token=${this.accessToken}`

  constructor(private http: HttpClient) {}

  getInstagramFeed(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getMoreInstagramData(nextPage: string): Observable<any> {
    return this.http.get<any>(nextPage);
  }
}
