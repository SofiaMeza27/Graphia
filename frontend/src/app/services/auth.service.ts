import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators'; 

@Injectable({ providedIn: 'root' })
export class AuthService {
    private apiUrl = 'http://localhost:5000/api/auth';

    constructor(private http: HttpClient) { }
    register(
        username: string,
        password: string,
        rut: string,
        email: string,
        region: string,
        comuna: string
    ): Observable<any> {
        return this.http.post(`${this.apiUrl}/register`, {
            username,
            password,
            rut,
            email,
            region,
            comuna
        });
    }
    // Método para iniciar sesión usando el nombre de usuario y la contraseña (webtoken)
    login(username: string, password: string) {
        return this.http.post<{ token: string }>(`${this.apiUrl}/login`, { username, password })
            .pipe(
                tap(res => {
                    localStorage.setItem('token', res.token);
                })
            );
    }
    // (JWT)
    saveToken(token: string) {
        localStorage.setItem('token', token);
    }

    getToken(): string | null {
        return localStorage.getItem('token');
    }

    logout() {
        localStorage.removeItem('token');
    }

    isLoggedIn(): boolean {
        return !!localStorage.getItem('token');
    }
}