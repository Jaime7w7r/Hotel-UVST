
import { Component } from '@angular/core';
import * as QRCode from 'qrcode';

@Component({
  selector: 'app-qr-code-generator',
  templateUrl: './qr-code-generator.component.html',
  styleUrls: ['./qr-code-generator.component.css']
})
export class QrCodeGeneratorComponent {

  public qrCodeText: string = '';
  public qrCodeImageUrl: string = '';

  dataObjects = [
    { 
      'tipo habitacion 1': 'Suite Deluxe Premium Level',
      'informacion': 'Conexión Wi-Fi (sin cargo), Caja fuerte y Escritorio',
      'precio': 'Desde $2,792 MXN/noche',
      'capacidad': '4 Personas 4 adultos máx. / 2 niños máx'
    },
    {
      'tipo habitacion 2': 'Familiar',
      'informacion': 'Conexión Wi-Fi (sin cargo), Caja fuerte y Escritorio',
      'precio': 'Desde $3,286 MXN/noche',
      'capacidad': '5 Personas 5 adultos máx. / 3 niños máx.'
    },
    {
      'tipo habitacion 3': 'Familiar Premium Level',
      'informacion': 'Conexión Wi-Fi (sin cargo), Caja fuerte y Escritorio',
      'precio': 'Desde $2,792 MXN/noche',
      'capacidad': '4 Personas 4 adultos máx. / 2 niños máx'
    },
    {
      'tipo habitacion 4': 'Grand Master Suite Vista Mar Frontal Premium Level',
      'informacion': 'Conexión Wi-Fi (sin cargo), Caja fuerte y Escritorio',
      'precio': 'Desde $4,002 MXN/noche',
      'capacidad': '2 Personas 2 adultos máx.'
    }
  ];
  
  generateQRCode() {
    const randomIndex = Math.floor(Math.random() * this.dataObjects.length);
    const randomObject = this.dataObjects[randomIndex];
    const qrCodeText = JSON.stringify(randomObject);

    QRCode.toDataURL(qrCodeText)
      .then((url: string) => {
        this.qrCodeImageUrl = url;
      })
      .catch((err: Error) => {
        console.error(err);
      });
  }
}
