import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InstagramService {
  private accessToken = `IGQWRQQWU5WVJ5eUEwa2hWT0tNRDFZAbmpsV0lpVmRzQVJ5QjNMcjM1dXlDX25iYm80QkxhTDE4cWZAzWmoyZAHhZASWpSZAnZA1dkdESzNhR2N3bm5zSDZAjOFo0YlQtVC1vWmFNRVpvMWxXRkR2ZADFaaG1VWGVaSEdhN28ZD`//'IGQWRPd0pMVElTR0lIbVpFQmNoeXIzSGxWQ0otYkJwdHJnb0lFSWdQbHdsaFYybnNpcXpGbjZACNzhTTTFKZA3VYaTdQOGZAEeGE5M28tWHZAVYklWdFdCbVk5bENCYlhTbGk5U2tVQm1RTDN2RFR4a0JLRVBoTXNBTXMZD'; // Replace with your actual access token
  private apiUrl = `https://graph.instagram.com/me/media?fields=id,media_type,media_url,thumbnail_url,caption&access_token=${this.accessToken}`;

  constructor(private http: HttpClient) {}

  getInstagramFeed(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getMoreInstagramData(nextPage: string): Observable<any> {
    return this.http.get<any>(nextPage);
  }
}
