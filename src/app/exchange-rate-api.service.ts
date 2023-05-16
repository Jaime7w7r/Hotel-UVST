import { Injectable } from '@angular/core';
import axios, { AxiosResponse } from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ExchangeRateAPIService {
  private apiKey = '68df09a1398576094797ac46'; // Reemplaza con tu clave de API de ExchangeRate-API

  getExchangeRates(baseCurrency: string): Promise<any> {
    const url = `https://v6.exchangerate-api.com/v6/${this.apiKey}/latest/${baseCurrency}`;

    return axios.get(url).then(response => response.data);
  }
}