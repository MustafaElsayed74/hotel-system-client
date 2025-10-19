import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageService } from '../../../auth/services/storage/storage-service';

const BASIC_URL = 'http://localhost:9090/'

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }


  createRoom(roomDto: any): Observable<any> {
    return this.http.post(BASIC_URL + 'api/admin/room', roomDto, {
      headers: this.createAuthorizationHeader()
    })

  }


  getRooms(pageNumber: number): Observable<any> {
    return this.http.get(BASIC_URL + `api/admin/rooms/${pageNumber}`, {
      headers: this.createAuthorizationHeader()
    })

  }


  createAuthorizationHeader() {
    let authHeaders: HttpHeaders = new HttpHeaders();
    return authHeaders.set(
      'Authorization',
      'Bearer ' + StorageService.getToken()
    )
  }



}
