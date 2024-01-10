import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { fileType, isDropEnabled } from '../../context/atoms';

const FileSelector = () => {
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const [dropvalue, setDropvalue] = useState('File Type');
    const setFileType = useSetRecoilState(fileType);
    const setDownEnabled = useSetRecoilState(isDropEnabled)
    const toggleDropdown = () => {
        setDropdownVisible(!isDropdownVisible);
    };

    const onValueClick = (selectedValue, key) => {
        setDropvalue(selectedValue);
        setFileType(key);
        setDownEnabled(false);
        setDropdownVisible(false);
    };

    return (
        <div className="relative inline-block text-left">
            <button
                type="button"
                onClick={toggleDropdown}
                className="inline-flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-200 active:text-gray-800 transition duration-150 ease-in-out"
            >
                {dropvalue}
                <svg
                    className="-mr-1 ml-2 h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
            </button>

            {isDropdownVisible && (
                <div className="origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg">
                    <div className="rounded-md bg-white shadow-xs">
                        <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                            <a
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                                role="menuitem"
                                onClick={() => onValueClick('PDF', "pdf_file")}
                            >
                                PDF
                            </a>
                            <a
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                                role="menuitem"
                                onClick={() => onValueClick('DOC', "doc_file")}
                            >
                                Doc
                            </a>
                            <a
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                                role="menuitem"
                                onClick={() => onValueClick('YT Video', "youtube_video")}
                            >
                                YT Video
                            </a>
                            <a
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                                role="menuitem"
                                onClick={() => onValueClick('Web Url', "web_page")}
                            >
                                Web URL
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FileSelector;
