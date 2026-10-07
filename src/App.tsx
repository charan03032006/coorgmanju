import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Home from '@/pages/Home';
import PlaceholderPage from '@/pages/PlaceholderPage';
import Hotels from '@/pages/Hotels';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-cream-50">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hotels" element={<Hotels />} />
            <Route path="/hotels/:hotelId" element={<PlaceholderPage title="Hotel Details" description="View room types, amenities, photo gallery, and availability for this property." />} />
            <Route path="/rooms/:roomId" element={<PlaceholderPage title="Room Details" description="Detailed room information including amenities, pricing, and availability." />} />
            <Route path="/offers" element={<PlaceholderPage title="Exclusive Offers" description="Discover all our current offers and promotional packages." />} />
            <Route path="/experiences" element={<PlaceholderPage title="Coorg Experiences" description="Explore the best things to see and do in Coorg during your stay." />} />
            <Route path="/destinations/:destinationId" element={<Hotels />} />
            <Route path="/booking" element={<PlaceholderPage title="Booking" description="Complete your hotel booking in a few simple steps." />} />
            <Route path="/booking/:bookingId" element={<PlaceholderPage title="Booking Confirmation" description="Your booking details and confirmation." />} />
            <Route path="/my-bookings" element={<PlaceholderPage title="My Bookings" description="View and manage your past and upcoming hotel bookings." />} />
            <Route path="/login" element={<PlaceholderPage title="Login" description="Sign in to your Coorg Manju account to manage bookings." />} />
            <Route path="/signup" element={<PlaceholderPage title="Sign Up" description="Create a Coorg Manju account for faster booking and exclusive offers." />} />
            <Route path="/about" element={<PlaceholderPage title="About Us" description="Learn about Coorg Manju Group of Hotels and our passion for Coorg hospitality." />} />
            <Route path="/contact" element={<PlaceholderPage title="Contact Us" description="Get in touch with our team for inquiries, support, and bookings." />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
