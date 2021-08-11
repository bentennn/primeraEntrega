function User(dato1) {
    this.nombre = dato1.nombre;
    this.edad = dato1.edad;
    this.ciudad = dato1.ciudad;
}
const User0 = new User({
    nombre: prompt("ingrese su nombre"),
    edad: prompt("ingrese su edad"),
    ciudad: prompt("ingrese ciudad de residencia")
})
alert(`DATOS DE USUARIO:\nNOMBRE: ${User0.nombre}\nEDAD: ${User0.edad}\nRESIDENCIA: ${User0.ciudad}`)

let envio = 0
let iva = 0
let aduana = 0

impuestos()
function impuestos() { 
    let precio = (prompt("ingrese el precio de el producto a comprar"))

    iva = (precio * 1.5 + 0.10)
}

viaje()
function viaje() {
    let valor = (prompt("ingrese la zona del pais, a la que pertenece:\nnorte\ncentro\nsur"))

    switch (valor) {

        case "norte":
            valor = 10
            break;

        case "centro":
            valor = 20
            break;

        case "sur":
            valor = 30
            break;

        default: alert("no llegamos a ese territorio")

    }
    envio = (valor * 0.2)
}

ingreso()
function ingreso() {

    let costo = (prompt("ingrese el pais al que pertenece:\nuruguay\nchile\ncolombia"))

    switch (costo) {

        case "uruguay":
            costo = 10
            break;

        case "chile":
            costo = 15
            break;

        case "colombia":
            costo = 9
            break;

        default: alert("pais invalido")

    }
    aduana = (costo * 0.2)
}



alert(`DETALLES DE TU COMPRA\niva: ${iva}USD\nEnvio: ${envio}USD\nImpuesto de Aduanas: ${aduana}USD`)

const valoraduana = [
    {pais:'uruguay',valor:2},
    {pais: 'chile',valor:3},
    {pais: 'colombia',valor:1.8}
    
    ]
    
    const precioaduana = valoraduana.sort((pais1, pais2)=>{
        return pais1.valor - pais2.valor
    })
    
    console.log(precioaduana)