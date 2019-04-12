function setCuotasSlider(){
  let slider = (<HTMLInputElement>document.getElementById("range-slider__range_1")).value;
  let sliderFormat = (Intl.NumberFormat('es-CL').format(parseInt(slider)));
  (<HTMLInputElement>document.getElementById("form-control-ncuotas")).value = sliderFormat;
  /*console.log(slider);*/
}

function setMontoPrestamo(){
  let slider = (<HTMLInputElement>document.getElementById("range-slider__range_2")).value;
  let sliderFormat = "$" + Intl.NumberFormat('es-CL').format(parseInt(slider));
  (<HTMLInputElement>document.getElementById("form-control-montoprestamo")).value = sliderFormat;
  /*console.log(sliderFormat);*/
}

function setMontoCuota(){
  let slider = (<HTMLInputElement>document.getElementById("range-slider__range_3")).value;
  let sliderFormat = "$" +  Intl.NumberFormat('es-CL').format(parseInt(slider));
  (<HTMLInputElement>document.getElementById("form-control-montocuota")).value = sliderFormat;
  /*console.log(sliderFormat);*/
}

function setBlurPrestamo(){
  let monto = (<HTMLInputElement>document.getElementById("form-control-montoprestamo")).value;
  let montoFormat = "$" + Intl.NumberFormat('es-CL').format(parseInt(monto));
  (<HTMLInputElement>document.getElementById("form-control-montoprestamo")).value = montoFormat;
}