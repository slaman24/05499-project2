import { Carousel } from "@/components/Carousel";
import { Waves, MapPin, Calendar, Users } from "lucide-react";

const SURF_IMAGES = [
  "https://images.unsplash.com/photo-1520116468816-95b69f847357?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1471922694854-ff1b63b20054?auto=format&fit=crop&q=80&w=1200",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#e0f7ff] via-[#fff9e6] to-[#ffe8d6] font-sans text-slate-900">
      {/* Hero Section */}
      <header className="relative py-12 px-6 text-center md:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-10 left-10 w-32 h-32 bg-orange-300 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-cyan-300 rounded-full blur-3xl"></div>
        </div>
        <div className="mx-auto max-w-4xl relative z-10">
          <div className="mb-6 flex justify-center">
            <div className="animate-bounce">
              <Waves className="h-16 w-16 text-orange-500" />
            </div>
          </div>
          <h1 className="mb-4 text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-cyan-500 md:text-8xl">
            SUNSHINE SURF
          </h1>
          <h2 className="mb-6 text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">
            CAMP
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-lg md:text-xl leading-relaxed text-slate-700 font-semibold">
            🌊 Experience the ultimate wave-riding adventure in paradise 🌴<br/>
            From beginners to pros, catch the vibe and ride the dream
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="rounded-full bg-gradient-to-r from-orange-400 to-pink-500 px-10 py-4 text-lg font-black text-white shadow-xl transition-all hover:shadow-2xl hover:scale-110 active:scale-95 uppercase tracking-wide">
              🏄 Book Your Spot
            </button>
            <button className="rounded-full bg-white px-10 py-4 text-lg font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-cyan-600 shadow-md border-2 border-orange-400 transition-all hover:shadow-xl hover:scale-110 active:scale-95 uppercase tracking-wide">
              Learn More
            </button>
          </div>
        </div>
      </header>

      {/* Carousel Section */}
      <section className="bg-gradient-to-br from-white via-cyan-50 to-blue-50 py-20 px-6 border-t-8 border-orange-300">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="mb-4 text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">
            LIFE AT SUNSHINE
          </h2>
          <p className="mb-12 text-orange-600 font-bold text-lg">Moments that make memories 📸</p>
          <Carousel images={SURF_IMAGES} />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-[#fff9e6] to-[#ffe8d6]">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-16 text-center text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-600">
            WHY CHOOSE SUNSHINE?
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center text-center p-8 bg-white rounded-3xl shadow-lg border-4 border-orange-200 hover:shadow-2xl transition-all hover:scale-105">
              <div className="mb-4 rounded-full bg-gradient-to-br from-orange-300 to-pink-300 p-6 font-bold text-white">
                <MapPin className="h-10 w-10" />
              </div>
              <h3 className="mb-3 text-2xl font-black text-orange-600">Secret Spots</h3>
              <p className="text-slate-600 font-semibold">Access to the most exclusive and uncrowded breaks in the region. Find your perfect wave.</p>
            </div>
            <div className="flex flex-col items-center text-center p-8 bg-white rounded-3xl shadow-lg border-4 border-cyan-200 hover:shadow-2xl transition-all hover:scale-105">
              <div className="mb-4 rounded-full bg-gradient-to-br from-cyan-400 to-blue-400 p-6 font-bold text-white">
                <Calendar className="h-10 w-10" />
              </div>
              <h3 className="mb-3 text-2xl font-black text-cyan-600">Weekly Camps</h3>
              <p className="text-slate-600 font-semibold">Immersive 7-day experiences starting every Monday year-round. Your adventure awaits!</p>
            </div>
            <div className="flex flex-col items-center text-center p-8 bg-white rounded-3xl shadow-lg border-4 border-pink-200 hover:shadow-2xl transition-all hover:scale-105">
              <div className="mb-4 rounded-full bg-gradient-to-br from-pink-400 to-red-400 p-6 font-bold text-white">
                <Users className="h-10 w-10" />
              </div>
              <h3 className="mb-3 text-2xl font-black text-pink-600">Expert Coaches</h3>
              <p className="text-slate-600 font-semibold">Learn from pro surfers with decades of experience. Level up your skills in paradise.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-slate-800 via-slate-900 to-black py-12 px-6 text-white border-t-8 border-orange-500">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-xl font-bold">© 2026 Sunshine Surf Camp 🤙</p>
          <p className="text-orange-400 font-semibold mt-2">Ride the vibe. Live the dream. 🌊🏄‍♂️🌴</p>
        </div>
      </footer>
    </div>
  );
}
