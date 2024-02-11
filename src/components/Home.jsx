import React, { useEffect, useState } from "react";
import portada from "../assets/img/portada2.png";
import ticket from "../assets/img/ticket.png";
import LazyLoad from "react-lazy-load";
import Skeleton from "@mui/material/Skeleton";

export const Home = () => {
  //estado para controlar la carga de la imagen
  const [loading, setLoading] = useState(true);

  //en este efecto, instanciamos Image de javascript asignamos la ruta de la imagen a la instancia y seteamos el estado de setLoading en false cuando la imagen carga
  useEffect(() => {
    const image = new Image();
    image.src = portada;
    image.onload = () => {
      setLoading(false);
    };
  }, []);

  return (
    <div className="flex flex-wrap text-slate-300 top-0 p-5 font-RedHatDisplay mt-5 items-center min-h-screen">
      <div className="flex w-full items-center bg-gradient-to-r from-slate-950 via-gray-500 to-slate-200 px-10 rounded-md h-80">
        <div className="w-[50%] animate-fade-right animate-once animate-duration-[1000ms] animate-ease-in-out animate-normal animate-fill-forwards">
          <h1 className="text-slate-100 text-6xl font-semibold">¡A Rockear!</h1>
          <p className="mt-5">
            El RockFest es una celebración anual de la música rock que reúne a
            aficionados de todo el mundo. Desde el rock clásico hasta el
            alternativo, el festival presenta lo mejor del género con
            actuaciones electrizantes en múltiples escenarios. Además de la
            música, los asistentes pueden disfrutar de una gran variedad de
            opciones de comida y bebida, experiencias interactivas y mucho más.
            Es un fin de semana de pura energía y emoción rockera.
          </p>
        </div>
        <div className="flex w-[50%] items-center justify-center">
          {/* usamos lazyload para cargar la imagen de forma perezosa y mejorar la experiencia de usuario*/}
          <LazyLoad width={530} threshold={0.1}>
            {/* aqui controlamos con el estado que se muestra miestras carga la imagen, en este caso un skeleton de materialUI */}
            {loading ? (
              <div className="flex justify-center animate-pulse animate-infinite animate-duration-[1500ms] animate-ease-in-out animate-fill-forwards">
                <Skeleton variant="rect" width={400} height={200} />
              </div>
            ) : (
              <div className="animate-fade-left animate-once animate-duration-[1000ms] animate-ease-in-out animate-normal animate-fill-forwards">
                <img src={portada} alt="" width={530} />
              </div>
            )}
          </LazyLoad>
        </div>
      </div>
      <div className="flex w-full text-start mt-20 animate-fade-up animate-once animate-duration-[1000ms] animate-ease-in-out animate-normal animate-fill-forwards">
        <div className="flex flex-col w-[50%] pl-12 ">
          <h1 className="text-3xl font-medium text-white">
            Información del evento
          </h1>
          <span className="mt-5">
            <strong>Ubicación: </strong> Medellín - Colombia
          </span>
          <span className="mt-10">
            <strong>Fecha: </strong> 21 - 23 de Julio
          </span>
          <span className="mt-10">
            <strong>Edades: </strong> +16
          </span>
        </div>
        <div className="flex w-[50%]">
          <div className="w-[50%] flex flex-col justify-center">
            <h1 className="font-extrabold mb-5 text-5xl text-white">Consigue tus entradas</h1>
            <p>
              No te pierdas el festival de rock más caliente del año. ¡Asegúrate
              ya tus entradas!
            </p>
          </div>
          <div className="w-[50%] flex flex-wrap justify-center items-center m-5">
            <img src={ticket} alt="" width={150}/>
            <button className="w-full m-5 bg-slate-400 text-white outline-none">Comprar entradas</button>
          </div>
        </div>
      </div>
    </div>
  );
};
