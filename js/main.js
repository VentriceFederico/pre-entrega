//Carrito de compras - Patchcords de Fibra Optica.

/*
    La funcion main es la funcion principal del programa.
    Es la encargada de llamar a las otras funciones y mantener los valores de las variables guardados.
*/
//---------------------Globales--------------------------------
const   PATCH_1 = "PATCH SM LC/PC == LC/PC",
        PATCH_2 = "PATCH SM LC/PC == SC/PC",
        PATCH_3 = "PATCH SM LC/PC == SC/APC",
        PRECIO_PATCH_1 = 10,
        PRECIO_PATCH_2 = 12,
        PRECIO_PATCH_3 = 15;
//---------------------Globales--------------------------------

function main() {
    let patch_usr, verf = 0, total = 0, aux = true;

    let cant_patch_1 = 0,
        cant_patch_2 = 0,
        cant_patch_3 = 0;



    while (aux) {
        patch_usr = ingreso();

        while (verf == 0) {
            verf = verf_patch(patch_usr, verf);
            if (verf == 0) {
                patch_usr = ingreso();
            }
        }

        switch (verf) {
            case PRECIO_PATCH_1:    //lc == lc
                cant_patch_1 = cantidad(patch_usr) + cant_patch_1;
                break;

            case PRECIO_PATCH_2:    //lc == sc
                cant_patch_2 = cantidad(patch_usr) + cant_patch_2;
                break;
            case PRECIO_PATCH_3:    //lc == sc/apc
                cant_patch_3 = cantidad(patch_usr) + cant_patch_3;
                break;
        }

        console.log(cant_patch_1 +  "\n" + cant_patch_2 + "\n" + cant_patch_3);

        aux = otro_ingreso();
        if (aux == true) {
            verf = 0;
        }  
    }
    total = cart(cant_patch_1, cant_patch_2, cant_patch_3, total) + total;
    imprimir(cant_patch_1, cant_patch_2, cant_patch_3, total);

}

/*
    Funcion ingreso:
    Se encarga del ingreso del usuario.
    Solamente le pide que ingrese una de las opciones en pantalla.
*/

function ingreso() {
    let patch_usr;

    patch_usr = prompt("Bienvenido, porfavor indicar que tipo de patchcord quiere comprar.\n-Patch SM LC/PC == LC/PC ($10).\n-Patch SM LC/PC == SC/PC. ($12)\n-Patch SM LC/PC == SC/APC. ($15)\n");

    patch_usr = patch_usr.toUpperCase();

    return patch_usr;
}

/*
    Funcion verf_patch:
    Esta funcion se encarga de verificar si lo que ingreso el usuario corresponde a alguna de las opciones mostradas.

    Retorna el valor de la concectorizacion.

    Esta funcion recibe dos parametros de entrada.

    patch_usr -> string a verificar.

    verf -> variable que indica si el string ingresado es valido (verf > 0 = 'valido').

 */

function verf_patch(patch_usr, verf) {

    let i = true;
    while (i) {
        if (patch_usr == PATCH_1) {
            i = false;
            return 10;
        }
        if (patch_usr == PATCH_2) {
            i = false;
            return 12;
        }
        if (patch_usr == PATCH_3) {
            i = false;
            return 15;
        }
        else {
            alert("Opcion ingresada invalida.\nPorfavor volver a ingresar.");
            return 0;
        }
    }
}

/*
    Funcion cart:
    Esta funcion actua como un "carrito".
    Recibe 3 parametros:

    verf -> Verificacion del patch.

    suma lo que el usuario vaya agregando, al recibir acum por parametro lo sumo a lo verificado del patch que seria su precio y retorno ese valor.
    Si el usuario sigue ingresando mas productos estos se van a volver a pasar y a sumar.
*/

function cart(cant_patch_1, cant_patch_2, cant_patch_3) {
    let total = 0, sub_total_1 = 0, sub_total_2 = 0, sub_total_3 = 0;

    sub_total_1 = cant_patch_1 * PRECIO_PATCH_1;
    sub_total_2 = cant_patch_2 * PRECIO_PATCH_2;
    sub_total_3 = cant_patch_3 * PRECIO_PATCH_3;

    total = sub_total_1 + sub_total_2 + sub_total_3;

    return total;
}

/*
    Funcion otro_ingreso:
    Solamente le pregunta al usuario si quiere seguir ingresando productos.
*/

function otro_ingreso() {
    return confirm("Quiere seguir agregando productos?");
}

function cantidad(patch_usr) {
    let cant;
    cant = prompt("Ingrese la cantida de " + patch_usr + ":");

    cant = parseInt(cant);
    
    return cant;
}

function imprimir(cant_patch_1, cant_patch_2, cant_patch_3, total){
    alert(
            "CARRITO:\n-" + PATCH_1 + ":\n\tCantidad: " + cant_patch_1 + "\n\tSub-total: " + (cant_patch_1 * PRECIO_PATCH_1) + "\n-"  + PATCH_2 + ":\n\tCantidad: " + cant_patch_2 + "\n\tSub-total: " + (cant_patch_2 * PRECIO_PATCH_2) + "\n-"  + PATCH_3 + ":\n\tCantidad: " + cant_patch_3 + "\n\tSub-total: " + (cant_patch_3 * PRECIO_PATCH_3) + "\n-" + "-TOTAL: " + total
        )
}

main();

