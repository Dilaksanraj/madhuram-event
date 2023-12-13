import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InstagramService {

  private accessToken = environment.accessToken
  private app_id = '1487706665418963'
  private app_secret = 'e28fd50b701e5fe150ea3dc1f5cc67ef';

  private apiUrl = `https://graph.instagram.com/me/media?fields=id,media_type,media_url,thumbnail_url,media_count,media,profile_picture_url,caption,permalink,timestamp&
  client_id=${this.app_id}&
  client_secret=${this.app_secret}&
  access_token=${this.accessToken}`;

  private apiUrlMe = `https://graph.instagram.com/me?fields=id,profile_picture_url,followers_count&access_token=${this.accessToken}`

  private apiUrlLongAccessToken = `https://graph.facebook.com/v18.0/oauth/access_token?
  grant_type=fb_exchange_token&
  client_id=1487706665418963&
  client_secret=e28fd50b701e5fe150ea3dc1f5cc67ef&
  fb_exchange_token=${this.accessToken}`

  constructor(private http: HttpClient) {}

  getInstagramFeed(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }


  getInstagramProfileInfo(): Observable<any> {
    return this.http.get<any>(this.apiUrlMe);
  }

  getLongCode(): Observable<any> {
    return this.http.get<any>(this.apiUrlLongAccessToken);
  }

  getMoreInstagramData(nextPage: string): Observable<any> {
    return this.http.get<any>(nextPage);
  }
}
