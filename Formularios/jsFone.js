function agregarFilas() {
  var numFilas = document.getElementById("tablita").rows.length;
  /* alert(numFilas); */
  let tablaDatos = document.getElementById("tablita").insertRow(numFilas - 1);
  let columna1 = tablaDatos.insertCell(0);
  let columna2 = tablaDatos.insertCell(1);
  let columna3 = tablaDatos.insertCell(2);
  let columna4 = tablaDatos.insertCell(3);
  
  columna1.innerHTML = '<select class="cbx"><option selected></option><option>Atletico de Madrid</option><option>Betis</option><option>FC. Barcelona</option><option>Real Madrid</option><option>Zaragoza</option></select>';
  columna2.innerHTML = "<input type='text' class='form-control ph-center' style='width: 40%;' placeholder='cod...' >";
  columna3.innerHTML = '<input type="text" class="form-control ph-center" style="width: 40%;" placeholder="%" >';
  columna4.innerHTML = '<input type="text" class="form-control ph-center" style="width: 40%;" placeholder="$" >';
  



}
