import React from 'react';

const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-background text-foreground">
      <div className="w-full max-w-md bg-card p-8 rounded-2xl shadow-xl">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-muted-foreground">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 mt-1 border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-muted-foreground">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 mt-1 border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary/90"
          >
            Login
          </button>
        </form>

        <div className="my-6 text-center text-gray-500">or</div>

        {/* Google Sign-In Button */}
        <button
          type="button"
          className="w-full flex items-center justify-center gap-2 bg-white text-black py-2 px-4 rounded-lg shadow hover:bg-gray-100"
          onClick={() => alert("Google login coming soon!")}
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="w-5 h-5"
          />
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default Login;




