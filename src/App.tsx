import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Home from '@/pages/Home';
import PlaceholderPage from '@/pages/PlaceholderPage';
import Hotels from '@/pages/Hotels';
import HotelDetails from '@/pages/HotelDetails';
import Booking from '@/pages/Booking';
import StickyBookingBar from '@/components/StickyBookingBar';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-cream-50">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hotels" element={<Hotels />} />
            <Route path="/hotels/:hotelId" element={<HotelDetails />} />
            <Route path="/rooms/:roomId" element={<PlaceholderPage title="Room Details" description="Room details are confirmed as part of your availability enquiry." />} />
            <Route path="/offers" element={<PlaceholderPage title="Exclusive Offers" description="Discover all our current offers and promotional packages." />} />
            <Route path="/experiences" element={<PlaceholderPage title="Coorg Experiences" description="Explore the best things to see and do in Coorg during your stay." />} />
            <Route path="/destinations/:destinationId" element={<Hotels />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/booking/:bookingId" element={<PlaceholderPage title="Booking Confirmation" description="Your enquiry confirmation will be shared by the Coorg Manju team." />} />
            <Route path="/my-bookings" element={<PlaceholderPage title="My Bookings" description="Booking management will be available after the direct booking system is enabled." />} />
            <Route path="/login" element={<PlaceholderPage title="Login" description="Account booking features will be enabled after the direct booking system is enabled." />} />
            <Route path="/signup" element={<PlaceholderPage title="Sign Up" description="Account booking features will be enabled after the direct booking system is enabled." />} />
            <Route path="/about" element={<PlaceholderPage title="About Us" description="Learn about Coorg Manju Group of Hotels and our passion for Mysuru and Coorg hospitality." />} />
            <Route path="/contact" element={<Booking />} />
          </Routes>
        </main>
        <Footer />
        <StickyBookingBar />
      </div>
    </BrowserRouter>
  );
}
