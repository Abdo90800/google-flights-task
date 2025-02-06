import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Plane, Calendar, Users } from 'lucide-react';
import { SearchParams } from '../types';

interface Props {
  onSearch: (params: SearchParams) => void;
}

export default function SearchForm({ onSearch }: Props) {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState(new Date());
  const [adults, setAdults] = useState(1);
  const [cabinClass, setCabinClass] = useState<'economy' | 'business' | 'first'>('economy');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({ from, to, date, adults, cabinClass });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">From</label>
          <div className="relative">
            <input
              type="text"
              value={from}
              onChange={(e) => setFrom(e.target.value.toUpperCase())}
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g., LAXA"
              required
            />
            <Plane className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
        </div>

        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">To</label>
          <div className="relative">
            <input
              type="text"
              value={to}
              onChange={(e) => setTo(e.target.value.toUpperCase())}
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g., LOND"
              required
            />
            <Plane className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 transform rotate-90" />
          </div>
        </div>

        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
          <div className="relative">
            <DatePicker
              selected={date}
              onChange={(date: Date) => setDate(date)}
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              minDate={new Date()}
              required
            />
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
        </div>

        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">Passengers</label>
          <div className="relative">
            <input
              type="number"
              min="1"
              max="9"
              value={adults}
              onChange={(e) => setAdults(parseInt(e.target.value))}
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
        </div>
      </div>

      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Cabin Class</label>
        <select
          value={cabinClass}
          onChange={(e) => setCabinClass(e.target.value as 'economy' | 'business' | 'first')}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="economy">Economy</option>
          <option value="business">Business</option>
          <option value="first">First Class</option>
        </select>
      </div>

      <button
        type="submit"
        className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
      >
        Search Flights
      </button>
    </form>
  );
}