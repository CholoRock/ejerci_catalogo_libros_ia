import { useParams } from "react-router-dom";

const DetalleLibro = ({ Libros }) => {
  const { id } = useParams();
  const libro = Libros.find(libro => libro.id === parseInt (id));
  return (
    <div>
      <h2>{libro.titulo}</h2>
      <p>{libro.sinopsis}</p>
      <p>Autor: {libro.autor}</p>
      <p>Precio: {libro.precio}</p>
      <p>Categoria: {libro.categoria}</p>
    </div>
  );
};

export default DetalleLibro;
