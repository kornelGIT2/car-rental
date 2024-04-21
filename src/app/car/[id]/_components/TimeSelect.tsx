import React from "react";

function TimeSelect({
  timeType,
  onChange,
}: {
  timeType: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <div className="gap-2 flex flex-col">
      <label
        htmlFor="time"
        className="block  text-sm font-medium text-muted-foreground dark:text-white"
      >
        Select {timeType} time:
      </label>
      <div className="flex">
        <input
          onChange={(e) => {
            onChange(e.target.value);
          }}
          type="time"
          id="time"
          className="rounded-none rounded-s-lg bg-gray-50 border text-gray-900 leading-none focus:ring-primary focus:border-primary block flex-1 w-full text-sm border-gray-300 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
          required
        />

        <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-s-0 border-s-0 border-gray-300 rounded-e-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fill-rule="evenodd"
              d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z"
              clip-rule="evenodd"
            />
          </svg>
        </span>
      </div>
    </div>
  );
}

export default TimeSelect;
