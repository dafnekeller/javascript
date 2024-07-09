//ENTRADA DE DATOS
let nombreCliente = prompt("Ingrese su nombre: ");

while (nombreCliente != "ESC") {
    let textoTipoCliente = "Ingrese forma de consumo:\n\n";
    textoTipoCliente += "1-Take away\n";
    textoTipoCliente += "2-Come aquí";
    let tipoCliente = prompt(textoTipoCliente);
    let TipoCombo = "Ingrese el combo que desee:\n\n";
    textoTipoCombo += "1-Cefé con leche + medialunas\n";
    textoTipoCombo += "2-Cefé + tostado\n";
    textoTipoCombo += "3-Cortado + medialunas con jyq";
    let tipoCombo = prompt(textoTipoCombo);
    let adicional = "¿Desea agregar algo más a su orden?:\n\n";
    textoAdicional += "1-Si\n";
    textoAdicional += "2-No";
    let Adicional = prompt(textoAdicional);

    //PROCESAMIENTO DE DATOS
    let Combo1;
    let Combo2;
    let Combo3;

    if (tipoCliente == 1) {
        Combo1 = 1800;
        Combo2 = 3900;
        Combo3 = 2700;
    } else if (tipoCliente == 2) {
        Combo1 = 1500;
        Combo2 = 3500;
        Combo3 = 2500;   
    }

    let Bebida;
    let Alimento;

    if (Adicional == 1) {
        Bebida = 1000;
        Alimento = 1800;
    } else {
        Bebida = 0;
        Alimento = 0;
    }

    let totalCompra = tipoCliente + Adicional;
    let descuentoEF = calcularDescuentoEF (tipoCliente, tipoCombo);
    let recargoTC = calcularRecargoTC (tipoCliente, tipoCombo);
    resumenCompra(nombreCliente, tipoCombo, adicional, totalCompra);

    nombreCliente = prompt("Ingrese otro nombre: (ESC para salir)");
}

function calcularDescuentoEF (tipoCliente, tipoCombo) {
    let EF;
    if (tipoCliente == 1) {
        Combo1 = 1800;
        Combo2 = 3900;
        Combo3 = 2700;
    } else if (tipoCliente == 2) {
        Combo1 = 1500;
        Combo2 = 3500;
        Combo3 = 2500;   
    }
    return (tipoCombo * 10/100);
}

function calcularRecargoTC (tipoCliente, tipoCombo) {
   let TC;

    if (tipoCliente == 1) {
        Combo1 = 1800;
        Combo2 = 3900;
        Combo3 = 2700;
    } else if (tipoCliente == 2) {
        Combo1 = 1500;
        Combo2 = 3500;
        Combo3 = 2500;   
    }
    return (tipoCombo * 5/100);  
}


function resumenCompra(nombre, combo, adicional, totalCompra){
    alert("Cliente: " + nombreCliente + "\nCombo: $" + tipoCombo + "\nAdicional: $" + "Total: $" + totalCompra);
}




const Combo = [
    {id: 1, nombre: "Combo1", precio:1800},
    {id: 2, nombre: "Combo2", precio:3900},
    {id: 3, nombre: "Combo3", precio:2700}
]

class Productos {
    constructor (productos) {
        this.items = productos;
    }

    agregarProducto(nombreP, precioP) {
        const producto = {id: this.generarId(), nombre: nombreP, precio: precioP};
        this.items.push(producto);
        console.log("Producto agregado");
    }

    buscarProducto (id) {
        return this.items.find(pepe => pepe.id == id)
    }

    listaProductos() {
        let salida = "";
        for (const producto of this.items) {
            salida += '${producto.id} - ${producto.nombre} $${producto.precio}\n';
        }
        alert(salida);
    }

    totalProductos() { 
        return this.items.length;
    }
    
    generarId() {
        let max = 0;
        this.items.forEach(item => {
            if (item.id > max) {
                max = item.id;
            }
        })
        return max + 1;
    }

    eliminarProducto(id) {
        let pos = this.items.findIndex(item => item.id == id);
        this.items.splice(pos, 1);
        console.log("Se elimino el producto: # " + id);
    }
}

const Menu = new Productos(Combo)
console.log(Menu.obtenerProductos());
Menu.agregarProducto("Jugo de Naranja", 800);
Menu.agregarProducto("Alfajor", 700);
console.log(Menu.obtenerProductos())
console.log(Menu.eliminarProducto())


let nombreProducto = prompt("Ingrese el nombre del combo: ");
let precioProducto = parseFloat(prompt("Ingrese el precio del combo: "));
Menu.agregarProducto(nombreProducto, precioProducto);
console.log(Menu.obtenerProductos());

let producto = Menu.buscarProducto()
alert(producto.nombre + "$" + producto.precio);






