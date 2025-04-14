import React from 'react';
import { School, Phone, Mail, MapPin, Facebook, Instagram, Youtube, ChevronRight, GraduationCap, Users, BookOpen, Trophy } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <div className="bg-green-800 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Mail size={16} className="mr-2" />
              <span className="text-sm">binarjhs@gmail.com</span>
            </div>
          </div>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/share/1W42bHtNVV/" target="_blank" rel="noopener noreferrer">
              <Facebook size={16} className="cursor-pointer hover:text-green-300" />
            </a>
            <a href="https://www.instagram.com/binar_jhs?igsh=dXJ6bDFpbnBtNmR5" target="_blank" rel="noopener noreferrer">
              <Instagram size={16} className="cursor-pointer hover:text-green-300" />
            </a>
            <a href="http://www.youtube.com/@binarjhs2238" target="_blank" rel="noopener noreferrer">
              <Youtube size={16} className="cursor-pointer hover:text-green-300" />
            </a>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <School className="h-8 w-8 text-green-800 mr-2" />
              <span className="text-xl font-bold text-green-800">BINAR JUNIOR HIGH SCHOOL</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-green-800">Home</a>
              <a href="#" className="text-gray-700 hover:text-green-800">About</a>
              <a href="#" className="text-gray-700 hover:text-green-800">Programs</a>
              <a href="#" className="text-gray-700 hover:text-green-800">Facilities</a>
              <a href="#" className="text-gray-700 hover:text-green-800">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-[600px]">
        <img 
          src="https://images.app.goo.gl/GxTg9raPqXWsKvMD9" 
          className="w-full h-full object-cover"
          alt="School building"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
          <div className="container mx-auto px-4">
            <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
              Welcome To Binar Website
            </h1>
            <p className="text-white text-xl mb-8">
              Mengokohkan Adab, Mengembangkan Bakat
            </p>
            <button className="bg-green-800 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition duration-300">
              Selengkapnya
            </button>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <GraduationCap className="w-12 h-12 text-green-800 mx-auto mb-4" />
            <h3 className="text-4xl font-bold text-gray-800 mb-2">77</h3>
            <p className="text-gray-600">Total Siswa</p>
          </div>
          <div className="text-center">
            <Users className="w-12 h-12 text-green-800 mx-auto mb-4" />
            <h3 className="text-4xl font-bold text-gray-800 mb-2">23</h3>
            <p className="text-gray-600">Guru Expert</p>
          </div>
          <div className="text-center">
            <BookOpen className="w-12 h-12 text-green-800 mx-auto mb-4" />
            <h3 className="text-4xl font-bold text-gray-800 mb-2">30+</h3>
            <p className="text-gray-600">Total Program</p>
          </div>
          <div className="text-center">
            <Trophy className="w-12 h-12 text-green-800 mx-auto mb-4" />
            <h3 className="text-4xl font-bold text-gray-800 mb-2">100+</h3>
            <p className="text-gray-600">Prestasi</p>
          </div>
        </div>
      </div>

      {/* Programs Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Program Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
                className="w-full h-48 object-cover"
                alt="Elementary"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Internal</h3>
                <p className="text-gray-600 mb-4">.......</p>
                <a href="#" className="text-green-800 flex items-center hover:text-green-700">
                  Selengkapnya <ChevronRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
                className="w-full h-48 object-cover"
                alt="Junior High"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Eksternal</h3>
                <p className="text-gray-600 mb-4">..........</p>
                <a href="#" className="text-green-800 flex items-center hover:text-green-700">
                  Selengkapnya <ChevronRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1525921429624-479b6a26d84d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
                className="w-full h-48 object-cover"
                alt="Senior High"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Senior High School</h3>
                <p className="text-gray-600 mb-4">Preparing future leaders with strong Islamic principles.</p>
                <a href="#" className="text-green-800 flex items-center hover:text-green-700">
                  Selengkapnya <ChevronRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-green-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <School className="h-8 w-8 mr-2" />
                <span className="text-xl font-bold">BINAR JUNIOR HIGH SCHOOL</span>
              </div>
              <p className="text-gray-300">
                Nurturing minds, cultivating character, building future leaders through Islamic education.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Hubungi Kami</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span>Jl. Strawbery, Utara Jemb., Kebunagung, Kec. Kota Sumenep, Kabupaten Sumenep, Jawa Timur</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-2" />
                  <span>+62 1234-5678-90</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-2" />
                  <span>binarjhs@gmail.com</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-green-300">About Us</a></li>
                <li><a href="#" className="hover:text-green-300">Programs</a></li>
                <li><a href="#" className="hover:text-green-300">Facilities</a></li>
                <li><a href="#" className="hover:text-green-300">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Ikuti Kami</h3>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/share/1W42bHtNVV/" target="_blank" rel="noopener noreferrer">
                  <Facebook className="w-6 h-6 cursor-pointer hover:text-green-300" />
                </a>
                <a href="https://www.instagram.com/binar_jhs?igsh=dXJ6bDFpbnBtNmR5" target="_blank" rel="noopener noreferrer">
                  <Instagram className="w-6 h-6 cursor-pointer hover:text-green-300" />
                </a>
                <a href="http://www.youtube.com/@binarjhs2238" target="_blank" rel="noopener noreferrer">
                  <Youtube className="w-6 h-6 cursor-pointer hover:text-green-300" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-green-800 mt-8 pt-8 text-center">
            <p>&copy; JANUARI 2025 BINAR JUNIOR HIGH SCHOOL. All rights reserved.</p>
            <p className="text-sm text-gray-400 mt-2">Developed by Miqdad Hanif Mutawally</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;