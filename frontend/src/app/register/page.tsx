"use client"

import Link from "next/link";
import { BarChart2, User, Mail, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // State for confirm password visibility

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword); // Toggle confirm password visibility
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-gray-800 p-8 rounded-xl shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 via-transparent to-blue-500/20 opacity-50"></div>
        <div className="relative">
          <div className="flex justify-center mb-6">
            <BarChart2 className="h-12 w-12 text-red-500" />
          </div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
            Create your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-400">
            Already have an account?{" "}
            <Link href="/login" className="font-medium text-red-500 hover:text-red-400 transition-colors">
              Sign in
            </Link>
          </p>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <div className="rounded-md shadow-sm -space-y-px">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="relative">
                <Input
                  id="first-name"
                  name="first-name"
                  type="text"
                  autoComplete="given-name"
                  required
                  className="appearance-none rounded-lg relative block w-full px-3 py-2 pl-3 pr-10 border border-gray-700 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm bg-gray-700"
                  placeholder="First name"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-red-500" aria-hidden="true" />
                </div>
              </div>
              <div className="relative">
                <Input
                  id="last-name"
                  name="last-name"
                  type="text"
                  autoComplete="family-name"
                  required
                  className="appearance-none rounded-lg relative block w-full px-3 py-2 pl-3 pr-10 border border-gray-700 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm bg-gray-700"
                  placeholder="Last name"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-red-500" aria-hidden="true" />
                </div>
              </div>
            </div>

            <div className="relative">
              <Input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-lg relative block w-full px-3 py-2 pl-3 mb-4 pr-10 border border-gray-700 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm bg-gray-700"
                placeholder="Email address"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-red-500" aria-hidden="true" />
              </div>
            </div>

            <div className="relative">
              <Input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="new-password"
                required
                className="appearance-none rounded-lg relative block w-full px-3 mb-4 py-2 pl-3 pr-10 border border-gray-700 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm bg-gray-700"
                placeholder="Password"
              />
              <div
                className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {!showPassword ? (
                  <EyeOff className="h-5 w-5 text-red-500" aria-hidden="true" />
                ) : (
                  <Eye className="h-5 w-5 text-red-500" aria-hidden="true" />
                )}
              </div>
            </div>

            {/* Confirm Password input with toggle visibility */}
            <div className="relative">
              <Input
                id="confirm-password"
                name="confirm-password"
                type={showConfirmPassword ? "text" : "password"}
                autoComplete="new-password"
                required
                className="appearance-none rounded-lg relative block w-full px-3 mb-4 py-2 pl-3 pr-10 border border-gray-700 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm bg-gray-700"
                placeholder="Confirm Password"
              />
              <div
                className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                onClick={toggleConfirmPasswordVisibility}
              >
                {!showConfirmPassword ? (
                  <EyeOff className="h-5 w-5 text-red-500" aria-hidden="true" />
                ) : (
                  <Eye className="h-5 w-5 text-red-500" aria-hidden="true" />
                )}
              </div>
            </div>

            <div className="relative">
              <Input
                id="dob"
                name="dob"
                type="date"
                required
                className="appearance-lg rounded-b-md relative block w-full px-3 py-2 px-3 border border-gray-700 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm bg-gray-700"
              />
            </div>
          </div>

          <div>
            <Button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 mb-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors"
            >
              Create Account
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
