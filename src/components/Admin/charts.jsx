import React from 'react'

const Charts = () => {
  return (
    <div className="max-w-lg w-full bg-white rounded-lg shadow-md dark:bg-gray-800 p-6">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h5 className="text-3xl font-semibold text-gray-900 dark:text-white mb-2">40.4k</h5>
          <p className="text-base text-gray-500 dark:text-gray-400">Users this week</p>
        </div>
        <div className="flex items-center text-sm text-green-500 dark:text-green-500">
          <span>12%</span>
          <svg className="w-3 h-3 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13V1m0 0L1 5m4-4 4 4"/>
          </svg>
        </div>
      </div>

      <div id="area-chart" className="h-40 bg-gray-200 rounded-md mb-6"></div>

      <div className="flex justify-between items-center border-t pt-4 text-sm text-gray-500 dark:text-gray-400">
        <div className="relative">
          <button
            id="dropdownDefaultButton"
            className="text-gray-500 dark:text-gray-400 hover:text-gray-900 flex items-center"
            type="button">
            Last 7 days
            <svg className="w-2.5 h-2.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
            </svg>
          </button>
          <div id="lastDaysdropdown" className="hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 absolute mt-1">
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
              {["Yesterday", "Today", "Last 7 days", "Last 30 days", "Last 90 days"].map((text, index) => (
                <li key={index}>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{text}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <a
          href="#"
          className="uppercase text-sm font-semibold text-blue-600 hover:text-blue-700 dark:hover:text-blue-500 dark:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700 px-3 py-2 flex items-center rounded-lg">
          Users Report
          <svg className="w-2.5 h-2.5 ml-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
          </svg>
        </a>
      </div>
    </div>
  )
}

export default Charts
