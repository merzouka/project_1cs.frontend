const RejecterComponent = () => {
  return (
    <div className="flex items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-red-500"
        viewBox="0 0 20 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M6 6l8 8M14 6l-8 8" />
      </svg>
      <span className="text-red-500 mr-2 font-semibold text-24">Rejecter</span>
    </div>
  );
};

export default RejecterComponent;
