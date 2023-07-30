import React from "react";
import "./Input.css";
import { MagnifyingGlassIcon, MapPinIcon } from "@heroicons/react/24/solid";

const Input = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-24">
      {/* First Form Item */}
      <div className="border rounded-xl p-5 flex items-center">
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

      {/* Second Form Item */}
      <div className="border rounded-xl p-5 flex items-center">
        <div>
          <span>
            <MapPinIcon className="h-6 w-6 ml-4 text-yellow-600" />
          </span>
        </div>
        <div>
          <h6 className="font-semibold">Distance</h6>
          <input
            className="input-style"
            type="text"
            placeholder="Distance/km"
            required
          />
        </div>
      </div>

      {/* Third Form Item */}
      <div className="border rounded-xl p-5 flex items-center">
        <div>
          <span>
            <MapPinIcon className="h-6 w-6 ml-4 text-yellow-600" />
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <div>
            <h6 className="font-semibold">Max People</h6>
            <input
              className="input-style"
              type="text"
              placeholder="Max People"
              required
            />
          </div>
          <button>
            <MagnifyingGlassIcon className="h-6 w-6 ml-4 text-yellow-600" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Input;
