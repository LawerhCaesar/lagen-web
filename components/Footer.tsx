import Link from "next/link";
import { ChevronRight, ChevronDown } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-black text-white border-t border-white/10 pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Column 1: Customer Care */}
          <div>
            <h3 className="text-sm font-medium mb-6">Customer Care</h3>
            <ul className="space-y-4 text-xs text-white/70">
              <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
              <li><Link href="/shipping" className="hover:text-white transition">Shipping & Delivery</Link></li>
              <li><Link href="/returns" className="hover:text-white transition">Returns</Link></li>
              <li><Link href="/afterpay" className="hover:text-white transition">Afterpay</Link></li>
              <li><Link href="/klarna" className="hover:text-white transition">Klarna</Link></li>
              <li><Link href="/faq" className="hover:text-white transition">FAQ</Link></li>
              <li><Link href="/gift-cards" className="hover:text-white transition">Gift Cards</Link></li>
            </ul>
          </div>

          {/* Column 2: Info */}
          <div>
            <h3 className="text-sm font-medium mb-6">Info</h3>
            <ul className="space-y-4 text-xs text-white/70">
              <li><Link href="/about" className="hover:text-white transition">Our Story</Link></li>
              <li><Link href="/values" className="hover:text-white transition">Values</Link></li>
              <li><Link href="/loyalty" className="hover:text-white transition">Loyalty</Link></li>
              <li><Link href="/size-guide" className="hover:text-white transition">Size Guide</Link></li>
              <li><Link href="/stores" className="hover:text-white transition">Stores</Link></li>
              <li><Link href="/stockists" className="hover:text-white transition">Stockists</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Column 3: Join Us */}
          <div>
            <h3 className="text-sm font-medium mb-6">Join Us</h3>
            <ul className="space-y-4 text-xs text-white/70">
              <li><a href="#" className="hover:text-white transition">Tiktok</a></li>
              <li><a href="#" className="hover:text-white transition">Instagram</a></li>
              <li><a href="#" className="hover:text-white transition">Pinterest</a></li>
              <li><a href="#" className="hover:text-white transition">Facebook</a></li>
              <li><a href="#" className="hover:text-white transition">Join LA&apos;EGEN SMS</a></li>
              <li><Link href="/loyalty" className="hover:text-white transition">Loyalty</Link></li>
              <li><a href="#" className="hover:text-white transition">Linkedin</a></li>
            </ul>
          </div>

          {/* Column 4: Newsletter & Contact */}
          <div>
            <h3 className="text-sm font-medium mb-6">Receive 10% Off Your First Order</h3>
            
            <div className="relative border-b border-white pb-2 mb-8">
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full bg-transparent border-none outline-none text-xs text-white placeholder:text-white/60 focus:ring-0 px-0"
              />
              <button 
                type="button" 
                aria-label="Subscribe"
                className="absolute right-0 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-4 text-xs text-white/70">
              <p>We&apos;re located in Adelaide, Australia</p>
              
              <div className="space-y-1">
                <p>Customer Care hours:</p>
                <p>Sun - Thurs | 3pm - 10pm PST</p>
              </div>
              
              <p>Email: <a href="mailto:customercare@laegen.com" className="hover:text-white transition">customercare@laegen.com</a></p>
              <p>Phone: <a href="tel:+61881234567" className="hover:text-white transition">+61 8 8123 4567</a></p>
              <p>WhatsApp: <a href="tel:+61881234567" className="hover:text-white transition">+61 8 8123 4567</a></p>
              
              <div className="pt-6">
                <button className="flex items-center gap-2 uppercase tracking-wider hover:text-white transition text-[11px] font-medium">
                  REGION: INTERNATIONAL <ChevronDown className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
          
        </div>

        {/* Bottom Acknowledgement Section */}
        <div className="mt-16 md:mt-24 pt-8 text-center border-t border-white/10">
          <p className="max-w-4xl mx-auto text-[10px] italic text-white/50 leading-relaxed font-serif">
            LA&apos;EGEN acknowledges the Kaurna People as the Traditional Custodians of the Adelaide Plains, where our story begins. We honour Elders past, present, and emerging, and extend our respect to all Aboriginal and Torres Strait Islander people as the Traditional Owners of Country.
          </p>
        </div>
      </div>
    </footer>
  );
}
