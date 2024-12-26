import React from 'react';

const SignUpSection = () => {
  return (
    <section className="w-full mx-auto px-4 py-8 bg-[#F9F9F9]">
      <div className="rounded-xl max-w-4xl mx-auto p-10 space-y-6">
        <h2 className="text-3xl font-semibold text-center mb-8">Sign Up</h2>

        <form className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm  text-black  font-semibold mb-1"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              className="w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-pink-300 focus:border-pink-300"
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm  text-black  font-semibold mb-1"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email address"
              className="w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-pink-300 focus:border-pink-300"
              required
            />
          </div>

          <div>
            <label
              htmlFor="role"
              className="block text-sm  text-black  font-semibold mb-1"
            >
              Role
            </label>
            <input
              type="text"
              id="role"
              name="role"
              placeholder="Enter role"
              className="w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-pink-300 focus:border-pink-300"
              required
            />
          </div>

          {/* Centered Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-btn-gradient text-white py-2 px-6 rounded-full hover:opacity-90 transition-opacity"
            >
              Get Early Access
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SignUpSection;
