// veiculo.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VeiculoService {
  private apiUrl = '/api/veiculos'; // Ajuste conforme a rota do seu backend

  constructor(private http: HttpClient) {}

  getAllVeiculos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getVeiculoById(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<any>(url);
  }

  createVeiculo(veiculo: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, veiculo);
  }

  updateVeiculo(id: number, newData: any): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<any>(url, newData);
  }

  deleteVeiculo(id: number): Observable<any[]> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<any[]>(url);
  }
}
