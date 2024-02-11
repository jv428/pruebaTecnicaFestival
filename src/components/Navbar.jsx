import React from "react";
import logo from "../assets/img/logoFestival.png";
import { NavMenu } from "../constants/NavMenu";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="flex max-sm:flex-wrap justify-between w-full top-0 animate-fade-down animate-once animate-duration-[1500ms] animate-delay-100 animate-ease-in-out animate-normal animate-fill-forwards">
      <div className="m-8 flex space-x-5 items-center max-sm:w-full">
        <div>
          <img src={logo} alt="" width={100} />
        </div>
        <div className="font-ProtestStrike text-5xl">
          RockFest
          <br />
          2024
        </div>
      </div>
      <div className="flex justify-between w-[35%] items-center mr-16 text-lg max-sm:w-full max-sm:justify-around max-sm:mr-5">
        {/* se mapea el objeto NavMenu donde se itera cada una de sus propiedades y mostrarlas en el menu */}
        {NavMenu.map(({ title, url }) => (
          <div className="flex font-RedHatDisplay font-light" key={title}>
            {/* usamos NavLink de react-router-dom para la navegacion entre componentes en el menu */}
            <NavLink to={url}>
              {/* desestructuramos isActive de NavLink para visualmente mostrar en que parte del menu estoy ubicado */}
              {({ isActive }) => (
                <div
                  className={
                    isActive
                      ? "cursor-pointer border-b text-white text-center"
                      : "cursor-pointer hover:border-b text-white text-center"
                  }
                >
                  {title}
                </div>
              )}
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};
