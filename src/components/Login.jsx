import React, { useState } from 'react';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div 
      className="min-h-screen flex flex-col justify-between relative px-4 py-8 sm:px-6 lg:px-8"
      style={{
        backgroundImage: 'radial-gradient(circle at 15% 85%, rgba(199, 212, 253, 0.6) 0%, rgba(255, 255, 255, 1) 100%)'
      }}
    >
      {/* Header / Logo */}
      <div className="flex items-center gap-2 sm:pl-4">
        {/* Diamond logo icon */}
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L22 12L12 22L2 12L12 2Z" stroke="#081C44" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span className="font-bold text-[#081C44] text-base tracking-tight">Outright Associates</span>
      </div>

      {/* Main Content Centered */}
      <div className="flex-1 flex items-center justify-center py-10 w-full max-w-[320px] mx-auto">
        {/* Main Login Card */}
        <div 
          className="bg-white w-full p-6 sm:p-7 flex flex-col gap-5"
          style={{
            borderRadius: '24px',
            boxShadow: '0 10px 40px -10px rgba(0,0,0,0.08)'
          }}
        >
          <div className="flex flex-col gap-2 text-center pb-1">
            <h1 className="text-xl md:text-2xl font-bold text-[#081C44]">
              Welcome to the Work
            </h1>
          </div>

          <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
            <div className="relative mt-2">
              <input
                type="text"
                id="username"
                placeholder=" "
                className="peer w-full bg-white border border-[#E2E8F0] px-4 py-3 text-[#334155] focus:outline-none focus:border-[#081C44] transition-colors text-sm"
                style={{ borderRadius: '12px' }}
              />
              <label 
                htmlFor="username"
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#94A3B8] flex items-center gap-2 pointer-events-none transition-all duration-200
                           peer-focus:top-0 peer-focus:left-3 peer-focus:-translate-y-1/2 peer-focus:text-xs peer-focus:bg-white peer-focus:px-1 peer-focus:text-[#081C44]
                           peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:left-3 peer-[:not(:placeholder-shown)]:-translate-y-1/2 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-1"
              >
                <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Username</span>
              </label>
            </div>

            <div className="relative mt-2">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder=" "
                className="peer w-full bg-white border border-[#E2E8F0] pl-4 pr-10 py-3 text-[#334155] focus:outline-none focus:border-[#081C44] transition-colors text-sm"
                style={{ borderRadius: '12px' }}
              />
              <label 
                htmlFor="password"
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#94A3B8] flex items-center gap-2 pointer-events-none transition-all duration-200
                           peer-focus:top-0 peer-focus:left-3 peer-focus:-translate-y-1/2 peer-focus:text-xs peer-focus:bg-white peer-focus:px-1 peer-focus:text-[#081C44]
                           peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:left-3 peer-[:not(:placeholder-shown)]:-translate-y-1/2 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-1"
              >
                <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 11H5C3.89543 11 3 11.8954 3 13V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V13C21 11.8954 20.1046 11 19 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Password</span>
              </label>
              <div 
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#94A3B8] cursor-pointer hover:text-[#334155] z-10 transition-all duration-200 opacity-0 pointer-events-none peer-focus:opacity-100 peer-focus:pointer-events-auto peer-[:not(:placeholder-shown)]:opacity-100 peer-[:not(:placeholder-shown)]:pointer-events-auto"
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 14A9 9 0 0121 14" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
                    <circle cx="12" cy="14" r="3" stroke="currentColor" strokeWidth="2" />
                  </svg>
                ) : (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 14A9 9 0 0121 14" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
                    <circle cx="12" cy="14" r="3" stroke="currentColor" strokeWidth="2" />
                    <path d="M3 3L21 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                )}
              </div>
            </div>

            <div className="flex flex-col items-center gap-4 mt-1">
              <button
                type="submit"
                className="w-full bg-[#081C44] hover:bg-[#153472] text-white font-medium py-3 transition-colors text-sm"
                style={{ borderRadius: '9999px' }}
              >
                Log In
              </button>
              <a href="#" className="text-xs text-[#94A3B8] hover:text-[#334155] font-medium transition-colors">
                Forgot Password?
              </a>
            </div>
          </form>
        </div>
      </div>

      {/* Footer / Watermark */}
      <div className="flex justify-center w-full">
         <p className="text-[10px] uppercase tracking-widest text-[#94A3B8] flex items-center justify-center gap-2 text-center">
           <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
           </svg>
           Secured by Outright Security Suite
         </p>
      </div>
    </div>
  );
};

export default Login;
