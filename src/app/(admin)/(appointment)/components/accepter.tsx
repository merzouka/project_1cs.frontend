"use client";

const AccepterComponent = () => {
  return (
    <div className="flex items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-green-500"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M10 0a10 10 0 1 1 0 20 10 10 0 0 1 0-20zm4.95 7.977a.75.75 0 1 0-1.06-1.062l-5.445 5.47-2.343-2.338a.75.75 0 1 0-1.063 1.062l2.82 2.817a.75.75 0 0 0 1.061 0l5.707-5.718z"
          clipRule="evenodd"
        />
      </svg>
      <span className="text-green-500 mr-2 font-semibold text-24">
        Accepter
      </span>
    </div>
  );
};

export default AccepterComponent;
