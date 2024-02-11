import React from "react";
import { CardsParticipants } from "../constants/CardsParticipants";
import LazyLoad from "react-lazy-load";
import microIcon from "../assets/img/microfono.png";

export const Participants = () => {
  return (
    <div className="flex w-full flex-wrap text-slate-300 top-0 p-5 font-RedHatDisplay min-h-screen">
      <div className="w-full">
        <h1 className="mt-5 text-5xl text-center">Participantes Destacados</h1>
        <div className="flex justify-between mt-5 p-10">
          {CardsParticipants.map(({ name, description, photo }) => (
            <div className="flex flex-col items-center w-[25%]" key={name}>
              <div className="flex justify-center bg-slate-700 w-full h-80 rounded-md rounded-b-none overflow-hidden animate-fade animate-duration-[1500ms] animate-ease-in-out animate-fill-forwards">
                <LazyLoad threshold={0.1}>
                  <img
                    src={photo}
                    alt=""
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      width: "auto",
                      height: "auto",
                    }}
                  />
                </LazyLoad>
              </div>

              <div className="flex flex-wrap bg-white text-slate-400 p-5 h-80 overflow-hidden rounded-b-md w-full">
                <span className="flex space-x-5">
                  <div>
                    <img src={microIcon} alt="" width={20} />
                  </div>
                  <strong>Artista:</strong> {name}
                </span>
                <span>{description}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
