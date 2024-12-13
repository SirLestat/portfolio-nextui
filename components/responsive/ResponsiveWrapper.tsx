// components/ResponsiveWrapper.tsx

const ResponsiveWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 mx-auto max-w-screen-xl">
      {children}
    </div>
  );
};

export default ResponsiveWrapper;
