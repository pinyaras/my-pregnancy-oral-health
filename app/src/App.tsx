import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import WhyItMatters from './sections/WhyItMatters';
import CommonIssues from './sections/CommonIssues';
import HomeCare from './sections/HomeCare';
import DentalVisits from './sections/DentalVisits';
import MythsVsFacts from './sections/MythsVsFacts';
import KeyTakeaways from './sections/KeyTakeaways';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#FAFBFC]">
      <Navigation />
      <main>
        <Hero />
        <WhyItMatters />
        <CommonIssues />
        <HomeCare />
        <DentalVisits />
        <MythsVsFacts />
        <KeyTakeaways />
      </main>
      <Footer />
    </div>
  );
}

export default App;
