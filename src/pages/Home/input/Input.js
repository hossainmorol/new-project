import React from "react";
import "./Input.css";
import { MagnifyingGlassIcon, MapPinIcon } from "@heroicons/react/24/solid";

const Input = () => {
  return (
    <div>
      <form className=" flex">
        <div className=" w-52 border flex justify-center items-center   rounded-xl p-5 ">
          <div>
            <span>
              <MapPinIcon className="h-6 w-6 ml-4 text-yellow-600" />
            </span>
          </div>
          <div>
            <h6 className="font-semibold">Location</h6>
            <input
              className="input-style"
              type="text"
              placeholder="Where are you going"
              required
            />
          </div>
        </div>
        <div className=" w-52 border flex justify-center items-center rounded-xl p-5">
          <div>
            <span>
              <MapPinIcon
                className="h-6 w-6 ml-4 text-yellow-600
          <div>"
              />
            </span>
          </div>
          <div>
            <h6 className="font-semibold">Distance</h6>
            <input
              className="input-style"
              type="text"
              placeholder=" Distance/km"
              required
            />
          </div>
        </div>
        <div className=" w-72 border flex justify-center items-center rounded-xl p-5">
          <div>
            <span>
              <MapPinIcon
                className="h-6 w-6 ml-4 text-yellow-600
          <div>"
              />
            </span>
          </div>
          <div className="flex justify-center items-center">
            <div>
              <h6 className="font-semibold">Max pepole</h6>
              <input
                className="input-style"
                type="text"
                placeholder="Max pepole"
                required
              />
            </div>

            <button>
              <MagnifyingGlassIcon className="h-6 w-6 ml-4 text-yellow-600"></MagnifyingGlassIcon>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Input;
