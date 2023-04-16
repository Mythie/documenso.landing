import { useState } from "react";
import { ComingSoon } from "./components/coming-soon";
import { EarlyAccess } from "./components/early-access";
import { FAQ } from "./components/faq";
import { Features } from "./components/features";
import { Footer } from "./components/footer";
import { Hero } from "./components/hero";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="relative min-h-screen">
      <div className="relative z-50 font-medium top-0 inset-x-0 bg-slate-950 text-center text-white py-3 px-5">
        We're getting ready for our launch!{" "}
        <a href="#" className="underline hover:opacity-90">
          Subscribe to our mailing list to be notified when we're ready.
        </a>
      </div>

      <Hero />

      <EarlyAccess />

      <Features />

      <ComingSoon />

      <FAQ />

      <Footer />
    </div>
  );
}

export default App;
