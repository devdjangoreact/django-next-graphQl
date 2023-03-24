import Link from "next/link";
import React from "react";

function Register() {
  return (
    <div className="container py-16">
      <div className="max-w-lg mx-auto px-6 py-7 shadow rounded overflow-hidden ">
        <h2 className="text-2xl uppercase font-medium mb-1">
          Create an account
        </h2>
        <p className="text-gray-600 mb-6 text-sm">
          Register here if you don't have account
        </p>

        <form method="" action="">
          <div className="space-y-4">
            <div>
              <label className="text-gray-600 mb-2 block">
                Full Name <span className="text-primary">*</span>
              </label>
              <input
                type="text"
                className="input-box"
                placeholder="Type Name"
              />
            </div>

            <div>
              <label className="text-gray-600 mb-2 block">
                Email Address <span className="text-primary">*</span>
              </label>
              <input
                type="email"
                className="input-box"
                placeholder="example@mail.com"
              />
            </div>

            <div>
              <label className="text-gray-600 mb-2 block">
                Password <span className="text-primary">*</span>
              </label>
              <input
                type="password"
                className="input-box"
                placeholder="Type Password"
              />
            </div>

            <div>
              <label className="text-gray-600 mb-2 block">
                Confirm Password <span className="text-primary">*</span>
              </label>
              <input
                type="password"
                className="input-box"
                placeholder="Confirm your password"
              />
            </div>
          </div>

          <div className="flex items-center justify-center mt-6 ">
            <div className="flex items-center ">
              <input
                type="checkbox"
                id="agrement"
                className="text-primary focus:ring-0 rounded-sm cursor-pointer "
              />
              <label
                htmlFor="agrement"
                className="text-gray-600 ml-3 cursor-pointer"
              >
                I have read and agree to the
              </label>
            </div>
            <a href="#" className="text-primary">
              terms & conditions
            </a>
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="block w-full py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium "
            >
              Create account
            </button>
          </div>

          <div className="mt-6 flex justify-center relative">
            <div className="absolute left-0 top-3 w-full border-b-2 border-gray-200 "></div>
            <div className="text-gray-600 uppercase px-3 bg-white relative z-10 ">
              OR LOGIN IN WITH
            </div>
          </div>

          <div className="mt-4 flex gap-4 ">
            <Link
              href="#"
              className="block w-1/2 py-2 text-center text-white bg-blue-800 rounded uppercase font-roboto font-medium text-sm "
            >
              Facebook
            </Link>

            <Link
              href="#"
              className="block w-1/2 py-2 text-center text-white bg-red-600 rounded uppercase font-roboto font-medium text-sm "
            >
              Google
            </Link>
          </div>

          <p className="mt-4 text-gray-600 text-center ">
            have an account?
            <Link href="/auth/login" className="text-primary">
              LOGIN IN
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
