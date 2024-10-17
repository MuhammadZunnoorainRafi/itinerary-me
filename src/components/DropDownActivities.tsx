'use client';
import React, { useState, ReactNode } from 'react';
import { BiChevronDown } from 'react-icons/bi';

interface DropDownActivitiesProps {
  children: ReactNode; // Define the type for children
}

const DropDownActivities: React.FC<DropDownActivitiesProps> = ({
  children
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(true); // Define the state type

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-group mt-2" data-accordion="default-accordion">
      <div
        className={`accordion border-gray-300 rounded-xl transition duration-500`}
      >
        <div className="bg-[#E9E8FF]">
          <button
            className="max-w-[755px] border-t border-base-200 accordion-toggle group inline-flex items-center justify-between text-left text-lg font-normal text-gray-900 w-full transition duration-500 hover:text-indigo-600"
            aria-controls="basic-collapse-one-with-icon"
            onClick={toggleAccordion}
          >
            <div className="flex max-w-screen-md items-center justify-stretch">
              <p className="grow font-medium text-base text-dark-blue leading-[14px] pl-3">
                Activities
              </p>
            </div>
            <BiChevronDown
              size={25}
              className={`cursor-pointer text-dark-blue font-semibold transition-transform ease-in-out delay-75 duration-300 ${isOpen ? 'rotate-180' : ''}`}
            />
          </button>
          <div
            id="basic-collapse-one-with-icon"
            className={`accordion-content w-full overflow-hidden transition-[max-height] duration-500 ease-in-out ${isOpen ? 'max-h-[250px]' : 'max-h-0'}`}
            aria-labelledby="basic-heading-one"
          >
            {isOpen && children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropDownActivities;
