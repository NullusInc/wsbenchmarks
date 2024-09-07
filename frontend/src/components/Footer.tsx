import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-12">
        <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
            <div>
            <h3 className="text-lg font-semibold mb-4">About WSBenchmarks</h3>
            <p className="text-sm text-gray-400">Empowering investors with cutting-edge benchmarking tools and analytics since 2024.</p>
            </div>
            <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#features" className="hover:text-red-500 transition-colors">Features</a></li>
                <li><a href="#pricing" className="hover:text-red-500 transition-colors">Pricing</a></li>
                <li><a href="#testimonials" className="hover:text-red-500 transition-colors">Testimonials</a></li>
            </ul>
            </div>
            <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-red-500 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-red-500 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-red-500 transition-colors">Cookie Policy</a></li>
            </ul>
            </div>
            <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-red-500 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-red-500 transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-red-500 transition-colors">Contact Support</a></li>
            </ul>
            </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
            <p>&copy; 2024 Nullus Inc. All rights reserved.</p>
        </div>
        </div>
    </footer>
  );
}
