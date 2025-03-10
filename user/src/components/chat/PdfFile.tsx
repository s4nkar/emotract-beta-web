import React, { useState, useRef, useEffect } from "react";

function PdfFile() {
  // useState hook to manage the visibility of the dropdown menu
  const [showDropdown, setShowDropdown] = useState(false);

  // useRef hook to create a reference to the dropdown element, used for click outside detection
  const dropdownRef = useRef(null);

  // Function to handle clicks outside the dropdown, closing it if a click occurs outside
  const handleClickOutside = (event) => {
    // Check if the dropdownRef exists and if the click target is not within the dropdown
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      // Set the showDropdown state to false, closing the dropdown
      setShowDropdown(false);
    }
  };

  // useEffect hook to add and remove the click outside event listener
  useEffect(() => {
    // Check if the dropdown is currently visible
    if (showDropdown) {
      // Add a mousedown event listener to the document to detect clicks outside
      document.addEventListener("mousedown", handleClickOutside);
    }
    // Cleanup function: remove the event listener when the component unmounts or showDropdown changes
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
    // Dependency array: re-run the effect whenever showDropdown changes
  }, [showDropdown]);

  return (
    // Main container div with flex layout and relative positioning
    <div className="flex items-start gap-2.5 relative">
      {/* Image of the person who sent the PDF */}
      <img
        className="w-8 h-8 rounded-full"
        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
        alt="Bonnie Green image"
      />
      {/* Container for the message and PDF details */}
      <div className="flex flex-col gap-1">
        {/* Main message box */}
        <div className="flex flex-col w-full max-w-[326px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
          {/* Sender's name and timestamp */}
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <span className="text-sm font-semibold text-gray-900 dark:text-white">
              Bonnie Green
            </span>
            <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
              11:46
            </span>
          </div>
          {/* PDF file details */}
          <div className="flex items-start my-2.5 bg-gray-50 dark:bg-gray-600 rounded-xl p-2">
            {/* PDF file name and size */}
            <div className="me-2">
              <span className="flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-white pb-2">
                📄 Flowbite Terms & Conditions
              </span>
              <span className="flex text-xs font-normal text-gray-500 dark:text-gray-400 gap-2">
                12 Pages • 18 MB • PDF
              </span>
            </div>
            {/* Download button */}
            <div className="inline-flex self-center items-center">
              <button className="inline-flex self-center items-center p-2 text-sm font-medium text-center text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-600 dark:hover:bg-gray-500 dark:focus:ring-gray-600">
                ⬇️
              </button>
            </div>
          </div>
          {/* Delivery status */}
          <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
            Delivered
          </span>
        </div>
      </div>
      {/* Dropdown toggle button */}
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className="inline-flex self-center items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800 dark:focus:ring-gray-600"
      >
        ⋮
      </button>
      {/* Dropdown menu (conditionally rendered) */}
      {showDropdown && (
        // Dropdown menu container with absolute positioning and reference
        <div
          ref={dropdownRef}
          className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-40 dark:bg-gray-700 dark:divide-gray-600 absolute top-full right-0 mt-1"
        >
          {/* Dropdown menu items */}
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
            <li>
              <button className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                Reply
              </button>
            </li>
            <li>
              <button className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                Forward
              </button>
            </li>
            <li>
              <button className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                Copy
              </button>
            </li>
            <li>
              <button className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                Report
              </button>
            </li>
            <li>
              <button className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                Delete
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default PdfFile;