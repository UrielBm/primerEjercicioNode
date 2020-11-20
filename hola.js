const name = "Uriel";
const apellido = "Benítez";
console.log(`Hola yo soy: ${name} y mi apellido es: ${apellido}`);

const numero1 = 20;
const numero2 = 4;
console.log(`La suma de los números es: ${numero1 + numero2}`);

const arrPeliLibrosSeries = [
  "Your name",
  "Viaje de chihiro",
  "Hercules",
  "Robots",
  "Rey Leon",
  "La granja",
  "Historias de una geisha",
  "HIMYM",
  "Malcolm in the Middle",
];
console.log(arrPeliLibrosSeries);
const objetoUriel = {
  name: `${name}`,
  apellido: `${apellido}`,
  peliFavorita: `${arrPeliLibrosSeries[0]}`,
  LibroFavorito: `${arrPeliLibrosSeries[6]}`,
  SerieFavorita: `${arrPeliLibrosSeries[7]}`,
};
console.log(objetoUriel);
console.log(
  `Nombre: ${objetoUriel.name} Apellido: ${objetoUriel.apellido} pelicula Favorita: ${objetoUriel.peliFavorita} Libro Favorito: ${objetoUriel.LibroFavorito} Serie Favorita: ${objetoUriel.SerieFavorita}`
);
