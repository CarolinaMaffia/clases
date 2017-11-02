/*
- preguntoPosicion(x,y)
- busco el valor de la posición
- determino tipo de barco (1,2,3,4)
- determino hundido o tocado
- contador de hundidos
- contador de tocados
*/var barcos = [
    var colA = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var colB = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var colC = [0, 0, 0, 1, 0, 0, 0, 2, 0, 0];
    var colD = [0, 0, 0, 0, 0, 0, 0, 2, 0, 0];
    var colE = [4, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var colF = [4, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var colG = [4, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var colH = [4, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var colI = [0, 0, 0, 0, 0, 3, 3, 3, 0, 0];
    var colJ = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    ];
  
  /*
  - preguntoPosicion(x, y);
  - busco el valor de la posicion 
  - determino tipo de barco (1, 2, 3, 4)
  - determino hundido o tocado
  - contador de hundidos
  */
  
  var contHundidos = 0;
  var contT2 = 0;
  var conT3 = 0;
  var contT = 0;
  /*
  Submarino(1): [2][2];
  Destructor(22): [4][4], [5][4];
  Crucero(333): [7][2], [7][3], [7][4];
  Acorazado(4444): [6][8], [7][8], [8][8], [9][8];
  */
  while (contHundidos < 4) {
    var x = prompt('Ingrese una fila de 0 a 9');
    var y = prompt('Ingrese una columna de 0 a 9');
  
      if (barcos[x][y] == 0) {
        barcos[x][y] = 'x';
        console.log('Agua');
      }else if (barcos[x][y] == 'x') {
        console.log('Ya me lo dijiste');
      }
  }else{
    switch(barcos[x][y]){
  
      case 1: contHundidos++;
      barcos[x][y] = -1;
      console.log('Hundiste el submarino');
      break;
  
  
      case 2: contT2++;
      barcos[x][y] = -2;
        if (contT2 == 2) {
          contHundidos++;
          console.log('Hundiste el destructor');
        }else if (barcos[x][y] == - 2) {
          console.log('Ya me lo dijiste');
        }
  
      break;
  
      case 3: contT3++;
        if (contT3) {}
  
    }
  }