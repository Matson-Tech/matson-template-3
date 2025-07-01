
import type React from "react";
import { type Dispatch, type SetStateAction, useState } from "react";
import type { User, WeddingData, WeddingWishType } from "@/types/wedding";
import { WeddingContext } from "./WeddingContext";

export interface WeddingContextType {
   weddingData: WeddingData;
   weddingWishes: WeddingWishType;
   setWeddingWishes: Dispatch<SetStateAction<WeddingWishType>>;
   user: User | null;
   session: any;
   isLoggedIn: boolean;
   globalIsLoading: boolean;
   updateWeddingData: (data: Partial<WeddingData>) => Promise<boolean>;
   updateGalleryImage: (file: File | null, imageCaption: string | null, index: number) => Promise<void>;
   loadAllWeddingWishes: () => Promise<void>;
   saveData: (data: WeddingData) => Promise<boolean>;
   addWish: (data: WeddingWishType[number]) => Promise<void>;
   login: (email: string, password: string) => Promise<{ error: any }>;
   logout: () => Promise<void>;
}

const defaultWeddingData: WeddingData = {
   couple: {
      groomName: "Nithin",
      brideName: "Nithya",
      weddingQuote: "Together We Journey – Two souls, one path, endless love.",
      image: "/placeholder.svg",
   },
   story: {
      title: "Brewing Love",
      content: "We met on a beautiful autumn day in the local coffee shop. What started as a chance encounter over spilled coffee became the beginning of our forever love story.",
      image: "/placeholder.svg",
   },
   weddingDetails: {
      event1: {
         title: "Ceremony",
         date: "June 15, 2024",
         time: "4:00 PM",
         venue: "St. Mary's Cathedral",
         address: "123 Cathedral Street, City, State 12345",
         addressMapLink: "https://maps.app.goo.gl/JDeNeY5MxbVFCeXK6",
      },
      event2: {
         title: "Reception",
         date: "June 15, 2024",
         time: "6:30 PM",
         venue: "Grand Ballroom",
         address: "456 Reception Avenue, City, State 12345",
         addressMapLink: "https://maps.app.goo.gl/JDeNeY5MxbVFCeXK6",
      },
      toKnow1: {
         title: "Getting There",
         description: "The venue is easily accessible by car or public transport.",
      },
      toKnow2: {
         title: "What to wear",
         description: "Semi-formal attire requested.",
      },
      toKnow3: {
         title: "Parking",
         description: "Complimentary valet parking available at both venues.",
      },
   },
   schedule: [
      {
         id: "1",
         time: "3:30 PM",
         event: "Guest Arrival",
         description: "Welcome drinks and mingling",
      },
      {
         id: "2",
         time: "4:00 PM",
         event: "Ceremony",
         description: "Wedding ceremony begins",
      },
   ],
   gallery: [
      {
         id: "0",
         url: "/placeholder.svg",
         caption: null,
      },
   ],
   moreInfo: {
      title: "Additional Information",
      content: "For dietary restrictions, please contact us at least one week before the wedding.",
   },
   contact: {
      phone: "+91 956 5858 855",
      email: "wedding@nithin_nithya.com",
      address: "123 Main Street, City, State 12345",
      addressMapLink: "https://maps.app.goo.gl/JDeNeY5MxbVFCeXK6",
   },
   jeweller: {
      title: "Our Wedding Jeweller",
      description: "Discover exquisite wedding rings and jewellery collections from our trusted partner.",
      shopName: "Edimannickal Gold and Diamonds",
      website: "https://www.instagram.com/edimannickalgoldanddiamonds?igsh=czd3ZzV3bjNvMQ==",
   },
};

export const WeddingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
   const [weddingData, setWeddingData] = useState<WeddingData>(defaultWeddingData);
   const [weddingWishes, setWeddingWishes] = useState<WeddingWishType>([]);
   const [user, setUser] = useState<User | null>(null);
   const [isLoggedIn, setIsLoggedIn] = useState(false);
   const [globalIsLoading, setGlobalIsLoading] = useState(false);

   const updateWeddingData = async (data: Partial<WeddingData>): Promise<boolean> => {
      const updated = { ...weddingData, ...data };
      setWeddingData(updated);
      return true;
   };

   const updateGalleryImage = async (file: File | null, imageCaption: string | null, index: number) => {
      // Placeholder implementation
   };

   const loadAllWeddingWishes = async () => {
      // Placeholder implementation
   };

   const saveData = async (data: WeddingData): Promise<boolean> => {
      return true;
   };

   const addWish = async (wish: WeddingWishType[number]) => {
      setWeddingWishes(prev => [wish, ...prev]);
   };

   const login = async (email: string, password: string) => {
      // Mock login
      if (email && password) {
         setUser({ id: '1', email, isAuthenticated: true });
         setIsLoggedIn(true);
         return { error: null };
      }
      return { error: { message: 'Invalid credentials' } };
   };

   const logout = async () => {
      setUser(null);
      setIsLoggedIn(false);
   };

   return (
      <WeddingContext.Provider
         value={{
            weddingData,
            weddingWishes,
            setWeddingWishes,
            loadAllWeddingWishes,
            user,
            session: null,
            isLoggedIn,
            globalIsLoading,
            updateWeddingData,
            updateGalleryImage,
            saveData,
            addWish,
            login,
            logout,
         }}
      >
         {children}
      </WeddingContext.Provider>
   );
};
