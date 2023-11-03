import { useForm } from "react-hook-form";

const FormularioCrearLibro = () => {
    const { register, handleSubmit,formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="titulo">Titulo</label>
                <imput type="text" {...register("titulo", { required: true })} />
                {errors.titulo && <p>El titulo es obligatorio</p>}
            </div>
            <div>
                <label htmlFor="autor">Autor</label>
                <imput type="text" id="autor" {...register("autor", { required: true })} />
                {errors.autor && <p>El autor es obligatorio</p>}
            </div>
            <div>
                <label htmlFor="precio">Precio</label>
                <imput type="number" id="precio" {...register("precio", { required: true })} />
                {errors.precio && <p>El precio es obligatorio</p>}
            </div>
            <div>
                <label htmlFor="sinopsis">Sinopsis</label>
                <imput type="text" id="sinopsis" {...register("sinopsis", { required: true })} />
                {errors.sinopsis && <p>La sinopsis es obligatoria</p>}
                <div>
                    <label htmlFor="categoria">Categoria</label>
                    <imput type="text" id="categoria" {...register("categoria", { required: true })} />
                    {errors.categoria && <p>La categoria es obligatoria</p>}
                </div>
                <button type="submit">Enviar</button>
            </div>
        </form>
        </>
    );
};

export default FormularioCrearLibro;