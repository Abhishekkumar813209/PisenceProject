import React from 'react';
import { servicesData } from '../../data/data';
import Card from "./Card"

function Services() {
  return (
    <section
      id="services"
      className="w-full py-20 mt-8"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-8 gap-6">
        {servicesData.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
}

export default Services;
