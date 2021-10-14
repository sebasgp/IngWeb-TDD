import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angularTesting';
  numero: string = '';

  convertirARomano(numero) {
    var numRomanos = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
    var nStr = numero.toString();
    var numLen = nStr.length;
    var romano = '';
    for (var i = 0; i < numLen; i++) {
      var numStr = nStr.substr(i, 1);
      var numPos = (numLen - i - 1) * 2;
      if (numStr > 0 && numStr <= 3) {
        romano += this.duplicarLetras(numRomanos[numPos], numStr);
      } else if (numStr == 4) {
        romano += numRomanos[numPos];
        romano += numRomanos[numPos + 1];
      } else if (numStr >= 5 && numStr <= 8) {
        romano += numRomanos[numPos + 1];
        romano += this.duplicarLetras(numRomanos[numPos], numStr - 5);
      } else if (numStr == 9) {
        romano += numRomanos[numPos];
        romano += numRomanos[numPos + 2];
      }
    }
    const romanot = 'Este es el numero ingresado en romano';
    console.log(numero + ' : ' + romano);
    this.numero=romano;
  }

  duplicarLetras(a, n) {
    var romano = '';
    for (let i = 0; i < n; i++) {
      romano += a;
    }
    return romano;
  }
}
