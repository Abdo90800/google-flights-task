import axios, { AxiosError } from 'axios';
import { SearchParams, FlightLeg } from './types';

const API_KEY = ''; // User needs to add their RapidAPI key here
const BASE_URL = 'https://sky-scrapper.p.rapidapi.com/api/v1/flights/getFlightDetails';

export const searchFlights = async (params: SearchParams) => {
  try {
    const leg: FlightLeg = {
      origin: params.from,
      destination: params.to,
      date: params.date.toISOString().split('T')[0]
    };

    const queryParams = {
      legs: JSON.stringify([leg]),
      adults: params.adults || 1,
      currency: 'USD',
      locale: 'en-US',
      market: 'en-US',
      cabinClass: params.cabinClass || 'economy',
      countryCode: 'US'
    };

    const response = await axios.get(BASE_URL, {
      headers: {
        'X-RapidAPI-Key': API_KEY,
        'X-RapidAPI-Host': 'sky-scrapper.p.rapidapi.com'
      },
      params: queryParams
    });
    return response.data;
  } catch (error) {
    // Safely handle error logging without non-cloneable properties
    if (error instanceof AxiosError) {
      console.error('API Error:', {
        message: error.message,
        status: error.response?.status,
        statusText: error.response?.statusText
      });
    } else {
      console.error('Error:', error instanceof Error ? error.message : 'Unknown error');
    }
    throw error;
  }
}