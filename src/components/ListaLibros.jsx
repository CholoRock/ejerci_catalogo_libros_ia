//dicho componente debe mostrar el listado de libros que se encuentra en el archivo ./data/libros.js
import { Link } from "react-router-dom"; 
//crear el componente
const ListaLibros = ({libros}) => {
    return (
         <div>
          <header>
          <h2>Libros</h2>
          </header>
          <div className="container">
          <Link to="/Libros/crear">Crear Libro</Link>
          <ul>
            {libros.map((libro) => (
              <li key={libro.id}>{libro.titulo}
              {libro.titulo}
              <Link to={`/libros/${libro.id}`}>Detalle Libro</Link>
              </li>
            ))}
          </ul>
          </div>
        </div>
    );
};

export default ListaLibros;

