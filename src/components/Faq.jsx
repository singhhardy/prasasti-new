import React, { useState } from 'react';

function Faq() {
  const accordionData = [
    {
      id: '1',
      accTitle: 'Title 1',
      accDescription: 'Hello this is dummy text'
    },
    {
      id: '2',
      accTitle: 'Title 2',
      accDescription: 'Hello this is dummy text'
    },
    {
      id: '3',
      accTitle: 'Title 3',
      accDescription: 'Hello this is dummy text'
    },
  ];

  const [accData, setAccData] = useState(accordionData);

  const [openAccordionId, setOpenAccordionId] = useState(null);

  function toggleAccordion(id) {
    setOpenAccordionId(openAccordionId === id ? null : id);
  }

  return (
    <div>
      {accData.map((item) => (
        <div key={item.id} className=" mx-auto w-4/5 ">
          <div className="border border-gray-300 rounded-lg shadow-sm">
            <div className="p-4">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-medium">{item.accTitle}</h2>
                <button
                  type="button"
                  className="focus:outline-none accordion-button"
                  onClick={() => toggleAccordion(item.id)}
                >
                  <svg
                    className={`w-6 h-6 transform ${
                      openAccordionId === item.id ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              </div>
              {openAccordionId === item.id && (
                <div className="mt-4 accordion-content">
                  <p className="text-gray-500">{item.accDescription}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Faq;
