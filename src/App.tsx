import React, { useState } from 'react';
import { Plane } from 'lucide-react';
import SearchForm from './components/SearchForm';
import FlightCard from './components/FlightCard';
import { searchFlights } from './api';
import { Flight, SearchParams } from './types';

function App() {
  const [flights, setFlights] = useState<Flight[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (params: SearchParams) => {
    setLoading(true);
    setError(null);
    try {
      const data = await searchFlights(params);
      setFlights(data.flights || []);
    } catch (err) {
      setError('Failed to fetch flights. Please try again.');
      setFlights([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center">
            <Plane className="h-8 w-8 text-blue-600 mr-2" />
            <h1 className="text-2xl font-bold text-gray-900">Flight Search</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <SearchForm onSearch={handleSearch} />

        <div className="mt-8">
          {loading && (
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
              <p className="mt-2 text-gray-600">Searching for flights...</p>
            </div>
          )}

          {error && (
            <div className="bg-red-50 border-l-4 border-red-400 p-4 mt-4">
              <p className="text-red-700">{error}</p>
            </div>
          )}

          {!loading && !error && flights.length === 0 && (
            <div className="text-center text-gray-600">
              <p>No flights found. Try different search criteria.</p>
            </div>
          )}

          <div className="space-y-4 mt-4">
            {flights.map((flight, index) => (
              <FlightCard key={index} flight={flight} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;