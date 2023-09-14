import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IntegrationsDomainService {
  private apiKey: string;

  constructor(private http: HttpClient) {
    this.apiKey = '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'; 
  }

  validarDomain() {
    const url = 'https://api.sendgrid.com/v3/whitelabel/domains';

    const data = {
      "domain": "gmail.com",
      "subdomain": "news",
      "username": "john@example.com",
      "ips": [
        "192.168.1.1",
        "192.168.1.2"
      ],
      "custom_spf": true,
      "default": true,
      "automatic_security": false
    };

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.apiKey}`
    });

    this.http.post(url, data, { headers })
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.error(error);
        }
      );
  }

  deletarDominio(domainId) {
    const url = `https://api.sendgrid.com/v3/whitelabel/domains/${domainId}`;
    
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.apiKey}`
    });

    this.http.delete(url, { headers })
      .subscribe(
        response => {
        console.log(response);
        },
        error => {
          console.error(error);
        }
      );
  }
}
