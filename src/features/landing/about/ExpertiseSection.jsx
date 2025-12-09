import { CheckCircle } from "lucide-react";
import { BrickWall } from "lucide-react";
import { Building } from "lucide-react";
import { Palette } from "lucide-react";
export default function ExpertiseSection() {
  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Section Header */}
        <h2 className="text-4xl font-semibold mb-3">Our Expertise</h2>
        <p className="text-gray-600 mb-12 text-lg">
          Specialized services with proven track record of excellence
        </p>

        {/* Expertise Cards */}
        <div className="grid md:grid-cols-3 gap-8 text-left">
          {/* Structure Work */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 hover:shadow-md transition">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-[#f4f3ef] p-3 rounded-xl">
                <Building className="text-[#d4a373]" />
              </div>
            </div>

            <h3 className="text-xl font-semibold mb-2">Structure Work</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Complete structural construction including foundations, steel
              framing, and concrete work for residential and commercial
              projects.
            </p>

            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center gap-2">
                <CheckCircle size={18} className="text-green-500" /> Foundation
                Design & Construction
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={18} className="text-green-500" />
                Brick Wall & Stone Wall
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={18} className="text-green-500" /> Concrete
                Work & Pouring
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={18} className="text-green-500" /> RCC Work
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={18} className="text-green-500" />{" "}
                Load-bearing Walls
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={18} className="text-green-500" /> Beam &
                Column Installation
              </li>
            </ul>
          </div>

          {/* Plaster & Finishing */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 hover:shadow-md transition">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-[#f4f3ef] p-3 rounded-xl">
                <Palette className="text-[#d4a373]" />
              </div>
            </div>

            <h3 className="text-xl font-semibold mb-2">Plaster & Finishing</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Professional plastering and finishing services for interior and
              exterior surfaces with expert texture work and surface
              preparation.
            </p>

            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center gap-2">
                <CheckCircle size={18} className="text-green-500" /> Interior
                Wall Plastering
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={18} className="text-green-500" /> Exterior
                Rendering
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={18} className="text-green-500" /> Texture &
                Decorative Finishes
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={18} className="text-green-500" /> Surface
                Preparation
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={18} className="text-green-500" /> Crack
                Repair
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={18} className="text-green-500" /> Waterproof
                Coatings
              </li>
            </ul>
          </div>

          {/* Marble & Tiles */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 hover:shadow-md transition">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-[#f4f3ef] p-3 rounded-xl">
                <BrickWall className="text-[#d4a373]" />
              </div>
            </div>

            <h3 className="text-xl font-semibold mb-2">Marble & Tiles</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Expert installation of marble, tiles, and stone surfaces with
              precision cutting, fitting, and waterproofing services.
            </p>

            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center gap-2">
                <CheckCircle size={18} className="text-green-500" /> Marble
                Installation & Polishing
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={18} className="text-green-500" /> Ceramic &
                Porcelain Tiles
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={18} className="text-green-500" /> Natural
                Stone Fitting
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={18} className="text-green-500" /> Precision
                Cutting Services
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={18} className="text-green-500" />{" "}
                Waterproofing
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={18} className="text-green-500" /> Grouting &
                Sealing
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
