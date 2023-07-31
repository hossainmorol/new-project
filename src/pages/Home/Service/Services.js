import React, { useEffect, useState } from "react";
import ServiceItem from "./ServiceItem";

const Services = () => {
  const [services, setServies] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServies(data));
  }, []);
  return (
    <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-3 gap-5 py-24 ">
      {services.map((service) => (
        <ServiceItem key={service.id} service={service}></ServiceItem>
      ))}
    </div>
  );
};

export default Services;
