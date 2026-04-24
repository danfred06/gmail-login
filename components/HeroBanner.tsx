"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function HeroBanner() {
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      
    
      <div className="w-full max-w-[1000px] min-h-[400px] bg-white rounded-[16px] shadow-lg p-12 flex flex-col md:flex-row gap-16">
        
   
        <div className="flex flex-col justify-center w-full md:w-1/2 gap-6">
          
         
          <Image
            src="https://cdn-icons-png.flaticon.com/128/300/300221.png"
            alt="Google"
            width={44}
            height={44}
          />

          <div>
            <h1 className="text-[36px] font-semibold text-gray-800">
              Sign in
            </h1>
            <p className="text-[16px] text-gray-600 mt-2">
              to continue to Gmail
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center w-full md:w-1/2 gap-6">
          
          {/* INPUT */}
          <div className="relative">
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="peer w-full border border-gray-300 rounded-[10px] px-4 pt-6 pb-3 text-base outline-none focus:border-blue-500"
            />

            <label
              className={`absolute left-4 text-gray-500 transition-all
              ${
                email
                  ? "top-1 text-[12px] text-blue-600"
                  : "top-4 peer-focus:top-1 peer-focus:text-[12px] peer-focus:text-blue-600"
              }`}
            >
              Email or phone
            </label>
          </div>

          {/* FORGOT EMAIL */}
          <span className="text-[14px] text-blue-600 cursor-pointer hover:underline">
            Forgot email?
          </span>

          {/* INFO TEXT */}
          <p className="text-[13px] text-gray-600 leading-relaxed">
            Not your computer? Use Guest mode to sign in privately.{" "}
            <span className="text-blue-600 cursor-pointer hover:underline">
              Learn more
            </span>
          </p>

          {/* BUTTONS (CLOSE + CLEAN LIKE GMAIL) */}
          <div className="flex items-center justify-end gap-3 mt-6">
            
            <button className="text-blue-600 text-sm font-medium px-4 py-2 rounded-full hover:bg-blue-50">
              Create account
            </button>

            <button className="bg-blue-600 text-white px-8 py-2.5 rounded-full text-sm hover:bg-blue-700">
              Next
            </button>

          </div>
        </div>
      </div>

      {/* FOOTER (OUTSIDE CARD LIKE REAL GMAIL) */}
      <div className="w-full max-w-[1000px] flex items-center justify-between mt-6 px-2">
        
        <select className="text-[12px] text-gray-600 bg-transparent outline-none">
          <option>English (United States)</option>
        </select>

        <div className="flex gap-4 text-[12px] text-gray-500">
          <span className="cursor-pointer hover:underline">Help</span>
          <span className="cursor-pointer hover:underline">Privacy</span>
          <span className="cursor-pointer hover:underline">Terms</span>
        </div>

      </div>
    </div>
  );
}