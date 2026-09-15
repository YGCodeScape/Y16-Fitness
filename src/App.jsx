import CustomCursor from './components/ui/CustomCursor';
import Navbar from './components/sections/Navbar';
import HeroSection from './components/sections/HeroSection';
import HealthMetrics from './components/sections/HealthMetrics';
import NutritionSection from './components/sections/NutritionSection';
import YogaSection from './components/sections/YogaSection';
import EventsSection from './components/sections/EventsSection';
import Footer from './components/sections/Footer';

export default function App() {
  return (
    <>
      {/* Custom dual-circle cursor — rendered outside layout flow */}
      <CustomCursor />
      <div className="min-h-screen">
        <Navbar />
        <main>
          <HeroSection />
          <HealthMetrics />
          <NutritionSection />
          <YogaSection />
          <EventsSection />
        </main>
        <Footer />
      </div>
    </>
  );
}