interface ToastMessageProps {
  show: boolean;
  message: string;
  hide: () => void;
}

export const ToastMessage: React.FC<ToastMessageProps> = ({
  show,
  message,
  hide,
}) => {
  return show ? (
    <div
      id="toast-default"
      className="flex items-center w-full max-w-xs p-4 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      role="alert"
    >
      <div className="ml-3 text-sm font-normal text-red-500">
        {message}
      </div>
      <button
        type="button"
        className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
        data-dismiss-target="#toast-default"
        aria-label="Close"
        onClick={() => {
          hide();
        }}
      >
        <span className="sr-only">Close</span>
        <svg
          aria-hidden="true"
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
    </div>
  ) : null;
};
