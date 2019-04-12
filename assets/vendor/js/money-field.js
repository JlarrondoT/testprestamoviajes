function setFormatNCuotas(){
  document.getElementById('form-control-ncuotas').innerHTML = new Intl.NumberFormat('es-MX').format(numero);
}