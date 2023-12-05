import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InstagramService {

  private accessToken = `IGQWRQcThib0s5aXRoVDRudGxDWUNJYk5CbHlRVWQ1M3hHUlhZAVE5iSnZAZAMTBUR0dqZAktRX0kxd2pqMjRTaEVkUmZAPaVhNQ2RkZAG5iNlZAucXpSMThVZAVNxdkxRS3lORzRzWGN0MmhRS0VaLXhLYkYySWxsOVg0ZA28ZD`
  private app_id = '1487706665418963'
  private app_secret = 'e28fd50b701e5fe150ea3dc1f5cc67ef';

  private apiUrl = `https://graph.instagram.com/me/media?fields=id,media_type,media_url,thumbnail_url,media_count,media,profile_picture_url,caption&
  client_id=${this.app_id}&
  client_secret=${this.app_secret}&
  access_token=${this.accessToken}`;

  private apiUrlMe = `https://graph.instagram.com/me?fields=id,profile_picture_url,followers_count&access_token=${this.accessToken}`

  constructor(private http: HttpClient) {}

  getInstagramFeed(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
  getInstagramProfileInfo(): Observable<any> {
    return this.http.get<any>(this.apiUrlMe);
  }

  getMoreInstagramData(nextPage: string): Observable<any> {
    return this.http.get<any>(nextPage);
  }
}
