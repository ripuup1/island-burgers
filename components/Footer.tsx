// Island Burgers & Bites — Footer
import Link from "next/link";
import { Phone, MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-charcoal pb-20 text-cream lg:pb-0">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Logo + tagline */}
          <div>
            <Link href="/" className="flex flex-col leading-none">
              <span className="font-heading text-3xl tracking-wide">
                <span className="text-island-red">ISLAND BURGERS</span>
                <span className="text-sun-yellow">&nbsp;&amp;BITES</span>
              </span>
              <span className="mt-1 text-xs tracking-[0.2em] text-cream/60 uppercase">
                Carolina Beach, NC
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-cream/70">
              Hand-pattied smash burgers, Philly cheesesteaks, and handspun
              milkshakes. Made fresh since 2017.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-heading text-xl tracking-wide text-sun-yellow">
              QUICK LINKS
            </h3>
            <ul className="mt-4 space-y-2">
              {[
                { href: "/#menu", label: "Menu" },
                { href: "/order", label: "Order Online" },
                { href: "/#story", label: "Our Story" },
                { href: "/#contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream/70 transition-colors hover:text-cream"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + hours */}
          <div>
            <h3 className="font-heading text-xl tracking-wide text-sun-yellow">
              CONTACT
            </h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-2 text-sm text-cream/70">
                <MapPin size={16} className="mt-0.5 shrink-0 text-island-red" />
                254 N Lake Park Blvd, Carolina Beach, NC 28428
              </li>
              <li className="flex items-center gap-2 text-sm text-cream/70">
                <Phone size={16} className="shrink-0 text-island-red" />
                <a href="tel:9104586217" className="hover:text-cream">
                  (910) 458-6217
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-cream/70">
                <Clock size={16} className="mt-0.5 shrink-0 text-island-red" />
                <span>
                  Mon–Thu: 11AM–8PM
                  <br />
                  Fri–Sat: 11AM–9PM
                  <br />
                  Sun: 11AM–4PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-cream/10 pt-6 text-center">
          <p className="text-xs text-cream/50">
            &copy; {new Date().getFullYear()} Island Burgers &amp; Bites.
            Locally owned. Carolina Beach, NC.
          </p>
          <p className="mt-1 text-xs text-cream/40">
            Featured in Our State Magazine &middot; Yelp&apos;s #1 Cheeseburger
            in NC
          </p>
        </div>
      </div>
    </footer>
  );
}
