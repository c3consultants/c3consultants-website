import { FaLinkedin, FaFacebook, FaWhatsapp } from 'react-icons/fa'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-primary-700 text-white py-8 md:py-12">
      <div className="container-custom px-4 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Logo & Tagline */}
          <div className="text-center sm:text-left">
            <Image 
              src="/images/c3-logo.jpg" 
              alt="C3 Career Consultants" 
              width={75} 
              height={26}
              className="object-contain mb-3 md:mb-4 drop-shadow-lg mx-auto sm:mx-0"
            />
            <p className="text-gray-300 text-xs md:text-sm font-medium">
              <span className="text-accent-400 font-bold">C3 Career Consultants</span>
            </p>
            <p className="text-gray-400 text-xs md:text-sm mt-1">
              Empowering careers for 23+ years
            </p>
          </div>

          {/* Contact */}
          <div className="text-center">
            <h4 className="font-bold text-base md:text-lg mb-2 md:mb-3 text-accent-400">Contact C3</h4>
            <p className="text-gray-300 text-xs md:text-sm">Sangrur, Punjab, India</p>
            <p className="text-gray-300 text-xs md:text-sm mt-1">+91 9781312020</p>
          </div>

          {/* Social Links */}
          <div className="text-center sm:col-span-2 lg:col-span-1 lg:text-right">
            <h4 className="font-bold text-base md:text-lg mb-2 md:mb-3 text-accent-400">Follow C3</h4>
            <div className="flex gap-2 md:gap-3 justify-center lg:justify-end">
              <a 
                href="https://wa.me/919781312020" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 md:w-10 md:h-10 bg-white/10 hover:bg-success-500 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
              >
                <FaWhatsapp className="text-base md:text-lg" />
              </a>
              <a 
                href="https://www.linkedin.com/in/manik-raj-singla-career-counsellor-and-consultant-5b154a203" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 md:w-10 md:h-10 bg-white/10 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
              >
                <FaLinkedin className="text-base md:text-lg" />
              </a>
              <a 
                href="https://www.facebook.com/manikrajsingla.CareerConsultant" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 md:w-10 md:h-10 bg-white/10 hover:bg-blue-500 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
              >
                <FaFacebook className="text-base md:text-lg" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 mt-6 md:mt-8 pt-6 md:pt-8 text-center">
          <p className="text-gray-400 text-xs md:text-sm">
            © {new Date().getFullYear()} <span className="text-accent-400 font-bold">C3 Career Consultants</span>. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs mt-1">
            Demo by <span className="text-accent-400 font-semibold">EaseBuilds</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
