const AuthLayout = ({ title, children }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-zinc-950 via-zinc-900 to-black px-4">
      <div className="w-full max-w-md rounded-2xl border border-zinc-800 bg-zinc-900/90 backdrop-blur shadow-xl p-8">
        
        
        <div className="mb-6 text-center">
          <h2 className="text-sm font-medium uppercase tracking-widest text-zinc-400">
            Hobbie Tracker
          </h2>
          <h1 className="mt-2 text-2xl font-semibold text-white">
            {title}
          </h1>
        </div>

        
        <div className="space-y-5">
          {children}
        </div>

      </div>
    </div>
  );
};

export default AuthLayout;
