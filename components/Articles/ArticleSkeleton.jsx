const ArticleSkeleton = () => {
  return (
    <div className="animate-pulse mt-28 container flex flex-col max-w-5xl mx-auto">
      {/* Title Section */}
      <div className="bg-tuna-100 bg-opacity-20 h-20 p-3 mb-4 rounded shadow-lg"></div>

      {/* Sub Title Section */}
      <div className="bg-tuna-100 bg-opacity-20 w-3/4 h-12 p-3 m-2 mx-auto rounded shadow-lg"></div>

      {/* Cover Pic */}
      <div className="bg-tuna-100 h-80 bg-opacity-20 p-5 m-5 rounded shadow-lg"></div>

      {/* Content */}
      <div className="bg-tuna-100 bg-opacity-20 h-48 p-5 my-1 rounded shadow-lg"></div>
      <div className="bg-tuna-100 bg-opacity-20 h-48 p-5 my-1 rounded shadow-lg"></div>
      <div className="bg-tuna-100 bg-opacity-20 h-48 p-5 my-1 rounded shadow-lg"></div>
    </div>
  );
};

export default ArticleSkeleton;
