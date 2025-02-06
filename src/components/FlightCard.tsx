import React from 'react';
import { Clock, Plane } from 'lucide-react';
import { Flight } from '../types';

interface Props {
  flight: Flight;
}

export default function FlightCard({ flight }: Props) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-center mb-4">
        <span className="text-lg font-semibold">{flight.airline}</span>
        <span className="text-xl font-bold text-blue-600">${flight.price}</span>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex-1">
          <div className="text-2xl font-bold">{flight.departure.time}</div>
          <div className="text-gray-600">{flight.departure.airport}</div>
        </div>

        <div className="flex-1 flex flex-col items-center">
          <div className="text-gray-400 text-sm flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            {flight.duration}
          </div>
          <div className="relative w-full my-2">
            <div className="border-t-2 border-gray-300 w-full absolute top-1/2"></div>
            <Plane className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-blue-600 w-5 h-5" />
          </div>
          <div className="text-gray-400 text-sm">
            {flight.stops === 0 ? 'Direct' : `${flight.stops} stop${flight.stops > 1 ? 's' : ''}`}
          </div>
        </div>

        <div className="flex-1 text-right">
          <div className="text-2xl font-bold">{flight.arrival.time}</div>
          <div className="text-gray-600">{flight.arrival.airport}</div>
        </div>
      </div>
    </div>
  );
}