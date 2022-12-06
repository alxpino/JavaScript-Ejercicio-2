// Crea un nuevo archivo JS que contenga una lista con los siguientes elementos:

// - Tu nombre (string)

// - Tu edad (number)

// - ¿Eres desarrollador? (boolean)

// - Tu fecha de nacimiento (Date)

// - Tu libro favorito (Objeto con propiedades: titulo, autor, fecha, url)
const libro = {
    titulo: "El ojo del mundo",
    autor: "Robert Jordan",
    fecha: new Date(1990, 00, 16),
    url: "https://books.google.com.uy/books/about/La_Rueda_del_Tiempo_no_01_14_El_ojo_del.html?id=w_a2DwAAQBAJ&redir_esc=y"
}
const lista = new Array("Alex", 22, true, new Date(2000, 7, 25) , libro);
console.log(lista)

