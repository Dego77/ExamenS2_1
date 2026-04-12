import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface LoginResponse {
  message: string;
  user: {
    id: number;
    username: string;
    nombre: string;
    email: string;
    rol: string | null;
    is_staff: boolean;
    is_superuser: boolean;
  };
}

export interface RegisterTallerPayload {
  nombreCompleto: string;
  email: string;
  telefono: string;
  password: string;
  confirmPassword: string;
  aceptaTerminos: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient);
  private loginUrl = 'http://127.0.0.1:8000/api/auth/login/';
  private registerUrl = 'http://127.0.0.1:8000/api/auth/register-taller/';

  login(email: string, password: string, accessType: 'taller' | 'admin'): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.loginUrl, {
      email,
      password,
      access_type: accessType
    });
  }

  registerTaller(payload: RegisterTallerPayload): Observable<any> {
    return this.http.post<any>(this.registerUrl, payload);
  }
}