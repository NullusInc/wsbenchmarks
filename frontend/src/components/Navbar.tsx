import React from 'react'

export default function Navbar() {
  return (
    <nav>
        <ul className="flex space-x-6">
        <li><a href="#features" className="hover:text-red-500 transition-colors">Features</a></li>
        <li><a href="#calculator" className="hover:text-red-500 transition-colors">Calculator</a></li>
        <li><a href="#testimonials" className="hover:text-red-500 transition-colors">Testimonials</a></li>
        <li><a href="#pricing" className="hover:text-red-500 transition-colors">Pricing</a></li>
        <li><a href="#login" className="hover:text-red-500 transition-colors">Login</a></li>
        </ul>
    </nav>
  )
}
