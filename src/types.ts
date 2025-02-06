export interface Flight {
  airline: string;
  price: number;
  departure: {
    airport: string;
    time: string;
  };
  arrival: {
    airport: string;
    time: string;
  };
  duration: string;
  stops: number;
}

export interface SearchParams {
  from: string;
  to: string;
  date: Date;
  adults?: number;
  cabinClass?: 'economy' | 'business' | 'first';
}

export interface FlightLeg {
  origin: string;
  destination: string;
  date: string;
}