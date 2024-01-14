interface HotelProps {
  _id: string;
  name: string;
  rating?: number;
  address?: Addres;
  contact?: number;
  roomType?: RoomType;
  opinion?: string[];
  lat?: number | undefined;
  lng?: number;
  pages?: string[];
  amenities?: string[];
  description?: string;
}

interface Addres {
  street: string;
  city: string;
}

interface RoomType {
  standard: number;
  delux: number;
}

export default HotelProps;
