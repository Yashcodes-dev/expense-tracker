import React from "react";

const Loginpage = () => {
  return (
    <div className="flex justify-center items-center h-screen ">
        <div className=" border border-gray-200 rounded-xl shadow-2xs  bg-[#fef9f4] ">
  {/* Sign In */}
  <div className="p-4 sm:p-7">
    <div className="text-center">
       
       <div className="flex mb-8">
        <h1 className='font-extrabold leading-[0.9] tracking-wider '> <span className='text-[#e26d3a]'>Ex</span>pensease</h1>
       </div>

      <h3 id="hs-modal-signin-label" className="block text-2xl font-bold text-[#14100c]">Sign in</h3>
      <p className="mt-2 text-sm text-gray-600">
        Don't have an account yet?
        <a className="text-[#e26d3a] decoration-2 hover:underline focus:outline-hidden focus:underline font-medium" href="#">
          Sign up here
        </a>
      </p>
    </div>

    <div className="mt-5">
      <a className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg bg-[#EFE9E3] border border-gray-200 text-gray-800 shadow-2xs hover:opacity-85 disabled:pointer-events-none focus:outline-hidden hover:scale-95 transition-all duration-300 ease-in-out" href="#">
        <svg className="w-4 h-auto" width="46" height="47" viewBox="0 0 46 47" fill="none">
          <path d="M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z" fill="#4285F4"/>
          <path d="M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z" fill="#34A853"/>
          <path d="M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z" fill="#FBBC05"/>
          <path d="M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z" fill="#EB4335"/>
        </svg>
        Sign in with Google
      </a>

      <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6">Or</div>
    </div>

      {/* Form */}
      <form>
        <div className="grid gap-y-4">
          {/* Form Group */}
          <div>
            <label htmlFor="email" className="block text-sm mb-2 text-gray-800">Email address</label>
            <div className="relative">
              <input type="email" id="email" name="email" className="py-2.5 sm:py-3 px-4 block w-full bg-white border-gray-200 rounded-lg sm:text-sm text-gray-800 placeholder:text-gray-500 focus:border-blue-700 focus:ring-blue-700 disabled:opacity-50 disabled:pointer-events-none" required aria-describedby="email-error" />
              <div className="hidden absolute inset-y-0 inset-e-0 pointer-events-none pe-3">
                <svg className="size-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                </svg>
              </div>
            </div>
            <p className="hidden text-xs text-red-600 mt-2" id="email-error">Please include a valid email address so we can get back to you</p>
          </div>
          {/* End Form Group */}

          {/* Form Group */}
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <label htmlFor="password" className="block text-sm mb-2 text-gray-800">Password</label>
            </div>
            <div className="relative">
              <input type="password" id="password" name="password" className="py-2.5 sm:py-3 px-4 block w-full bg-white border-gray-200 rounded-lg sm:text-sm text-gray-800 placeholder:text-gray-500 focus:border-blue-700 focus:ring-blue-700 disabled:opacity-50 disabled:pointer-events-none" required aria-describedby="password-error" />
              <div className="hidden absolute inset-y-0 inset-e-0 pointer-events-none pe-3">
                <svg className="size-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                </svg>
              </div>
            </div>
            <p className="hidden text-xs text-red-600 mt-2" id="password-error">8+ characters required</p>
          </div>
          {/* End Form Group */}

          {/* Checkbox */}
          <div className="flex items-center">
            <div className="flex">
              <input id="checkbox" name="checkbox" type="checkbox" className="shrink-0 size-4 bg-transparent border-gray-300 rounded-sm shadow-2xs text-[#14100c] focus:ring-0 focus:ring-offset-0 checked:bg-[#14100c] checked:border-[#14100c] disabled:opacity-50 disabled:pointer-events-none" />
            </div>
            <div className="ms-3">
              <label htmlFor="checkbox" className="text-sm text-gray-800">
                Remember me
              </label>
            </div>
          </div>
          {/* End Checkbox */}

          <button type="submit"  className='bg-[#e26d3a] mt-3 text-white px-7 py-2 outline-none flex justify-center items-center rounded-lg cursor-pointer text-sm h-10 hover:opacity-85 transition-all duration-300 ease-in-out hover:scale-95'>Sign in</button>
        </div>
      </form>
      {/* End Form */}
  </div>
  {/* End Sign In */}

</div>
    </div>
  );
};

export default Loginpage;
