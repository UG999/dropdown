import { useState } from "react";
import { Listbox, Transition } from "@headlessui/react";

import styled from 'styled-components'
import { Check } from "@styled-icons/boxicons-regular"
import Container from "../Container/Container";
const fruits = ["Apple", "Orange", "Grape", "Lemon", "Lime", "Blueberry"];
const StyledCheck = styled(Check)`
  color: white;
  width: 5px;
  height:5px
`
export default function index() {
  const [selectedFruit, setSelectedFruit] = useState("CHOOSE UR FAV FRUIT");
  return (
    <Container>
      <Listbox as="div" value={selectedFruit} onChange={setSelectedFruit}>
        {({ open }) => (
          <>
            <Listbox.Label className="text-sm font-medium text-gray-700">
              Favorite fruit
            </Listbox.Label>
            <div className="relative">
              <span className="inline-block w-full">
                <Listbox.Button className="pl-3 py-2 w-full text-left focus:outline-none focus:shadow-outline-blue focus:border-blue-300 relative border shadow-sm border-gray-300 rounded text-gray-800">
                  <span className="block truncate">{selectedFruit}</span>
                </Listbox.Button>
              </span>
              <Transition
                show={open}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options
                  static
                  className="border border-gray-300 rounded mt-1"
                >
                  {fruits.map((fruit) => (
                    <Listbox.Option key={fruit} value={fruit}>
                      {({ selected, active }) => (
                        <div
                          className={`${
                            active
                              ? "text-white bg-indigo-600"
                              : "text-gray-900"
                          } cursor-default select-none relative py-2 pl-10 pr-4`}
                        >
                          <span
                            className={`${
                              selected ? "font-semibold" : "font-normal"
                            }`}
                          >
                            {fruit}
                          </span>

                          {selected && (
                            <span
                              className={`${
                                active ? "text-white" : "text-indigo-600"
                              } absolute inset-y-0 left-0 flex items-center pl-2`}
                            >
                             <StyledCheck/>
                            </span>
                          )}
                        </div>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </>
        )}
      </Listbox>
    </Container>
  );
}
