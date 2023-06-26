function calcularCompra(){
    let cantidad = parseInt(document.getElementById("cantidadInput").value);
    let precio = parseInt(document.getElementById("valorInput").value);
    let total = cantidad * precio;
    let totalCompra
    if (cantidad >= 3) {
        totalCompra = total * 0.85
        let totalResultadoElement = document.getElementById("totalResultado")
        totalResultadoElement.textContent = "El total de la cantidad de productos es: " + total;
    
        let totalConDescuento = document.getElementById("totalCompraResultado")
        totalConDescuento.textContent = "El total con descuento fue de : " + totalCompra;

        let obsequio = document.getElementById("obsequio")
        obsequio.textContent = " Por la compra de " + cantidad + " docenas, te obsequiamos " + cantidad + " unidades. " 
    }
    else{
        totalCompra = total * 0.90
        let totalResultadoElement = document.getElementById("totalResultado")
        totalResultadoElement.textContent = "La cantidad total de productos es: " + total;
    
        let totalConDescuento = document.getElementById("totalCompraResultado")
        totalConDescuento.textContent = "El total con descuento fue de : " + totalCompra;
    }

}