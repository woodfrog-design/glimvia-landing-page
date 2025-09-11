"use client";
import { useState, useEffect } from "react";

export default function CookiesNotice() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const cookiesAccepted = localStorage.getItem('glimvia-cookies-accepted');
    if (!cookiesAccepted) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('glimvia-cookies-accepted', 'true');
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem('glimvia-cookies-accepted', 'false');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="glass p-4 md:p-6 rounded-2xl border border-slate-200/50 dark:border-slate-700/50">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            
            {/* Cookie icon and text */}
            <div className="flex items-start gap-3 flex-1">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 flex items-center justify-center">
                <CookieIcon />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-1">
                  We use cookies
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  We use essential cookies to make our site work and analytics cookies to understand how you interact with our website. 
                  <a 
                    href="/privacy" 
                    className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 underline ml-1"
                  >
                    Learn more in our Privacy Notice
                  </a>.
                </p>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex items-center gap-3 w-full md:w-auto">
              <button
                onClick={declineCookies}
                className="flex-1 md:flex-initial px-4 py-2 text-sm border border-slate-300 dark:border-slate-600 rounded-full hover:bg-slate-50 dark:hover:bg-slate-800 transition"
              >
                Decline
              </button>
              <button
                onClick={acceptCookies}
                className="flex-1 md:flex-initial px-4 py-2 text-sm bg-slate-900 text-white dark:bg-white dark:text-slate-900 rounded-full hover:opacity-90 transition"
              >
                Accept All
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CookieIcon() {
  return (
    <svg 
      width="16" 
      height="16" 
      viewBox="0 0 24 24" 
      fill="currentColor"
      className="text-white"
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
      <circle cx="15.5" cy="8.5" r="1.5" fill="rgba(255,255,255,0.8)"/>
      <circle cx="8.5" cy="13.5" r="1" fill="rgba(255,255,255,0.6)"/>
      <circle cx="15" cy="16" r="1" fill="rgba(255,255,255,0.6)"/>
    </svg>
  );
}