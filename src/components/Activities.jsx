import React from "react";
import { scheduleData } from "../constants/Schedule";
import { AttractionsData } from "../constants/Attractions";

export const Activities = () => {
  return (
    <div className="flex w-full flex-wrap text-slate-300 top-0 p-5 font-RedHatDisplay min-h-screen">
      <div className="w-full text-5xl">
        <h1 className="text-center w-full">Calendario y eventos</h1>
      </div>
      {/* mapeo al objeto scheduleData para iterar y mostrar propiedades */}
      <div className="flex flex-wrap w-full p-5 justify-between mt-10 bg-slate-200 rounded-md animate-fade animate-once animate-duration-[1500ms] animate-ease-in-out animate-fill-forwards">
        {scheduleData.map((daySchedule, index) => (
          <div key={index}>
            <h2 className="text-slate-800">
              <strong>{daySchedule.day}</strong>
            </h2>
            <ul className="text-slate-600 mt-5">
              {daySchedule.events.map((event, index) => (
                <li key={index}>
                  <span>{event.time}</span> - <span>{event.activity}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="space-y-4 grid grid-cols-1 gap-4 sm:grid-cols-2 mt-14 ">
        {/* mapeo al objeto AttractionsData para iterar y mostrar propiedades */}
        {AttractionsData.map(({ title, description, photo }) => (
          <div className="flex items-center gap-4" key={title}>
            <img
              alt="Attraction 1"
              className="rounded-lg object-cover"
              height="200"
              src={photo}
              style={{
                aspectRatio: "200/200",
                objectFit: "cover",
              }}
              width="200"
            />
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
