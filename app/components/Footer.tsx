'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Facebook } from 'lucide-react';
import { useCMSStore } from '@/lib/cms-store';

export default function Footer() {
  const { content } = useCMSStore();

  const getSocialIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'instagram':
        return <Instagram className="w-5 h-5" />;
      case 'facebook':
        return <Facebook className="w-5 h-5" />;
      case 'x':
        return <Image src="/images/logo-black.png" alt="X" width={20} height={20} className="w-5 h-5 invert" />;
      default:
        return null;
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 xl:px-16 2xl:px-24 py-16 xl:mx-0 xl:max-w-none">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <Image
                src="/images/lumiere.png"
                alt={content.siteName}
                width={140}
                height={50}
                className="h-12 w-auto brightness-0 invert"
              />
            </Link>
            <p className="mt-4 text-gray-400 leading-relaxed">
              {content.siteTagline}. Din destination för professionell hudvård och välmående.
            </p>
            <div className="flex gap-4 mt-6">
              {content.socialLinks.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                >
                  {getSocialIcon(link.platform)}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medium text-lg mb-4">Snabblänkar</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Hem
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Behandlingar
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                  Om oss
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-medium text-lg mb-4">Behandlingar</h4>
            <ul className="space-y-3">
              {content.services.slice(0, 4).map((service) => (
                <li key={service.id}>
                  <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-medium text-lg mb-4">Kontakt</h4>
            <ul className="space-y-3 text-gray-400">
              <li>{content.address}</li>
              <li>
                <a href={`tel:${content.phone}`} className="hover:text-white transition-colors">
                  {content.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${content.email}`} className="hover:text-white transition-colors">
                  {content.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <p className="text-gray-400 text-sm">{content.footerText}</p>
            <p className="text-gray-500 text-xs font-light mt-1">
              Design & development by{' '}
              <a href="https://www.intenzze.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                Intenzze
              </a>
            </p>
          </div>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">
              Integritetspolicy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Villkor
            </a>
            <Link href="/admin" className="hover:text-white transition-colors">
              Admin
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
