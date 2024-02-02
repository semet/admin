import React, { FC, Fragment, useRef, useState } from "react";
import { TProps } from "./type";
import { Menu, Transition } from "@headlessui/react";
import { FaChevronDown } from "react-icons/fa6";

const timeoutDuration = 120;

export const Popover: FC<TProps> = (props) => {
  const { showIcon = false, children, title } = props;
  const triggerRef = useRef<HTMLButtonElement>(null);
  const timeOutRef = useRef<NodeJS.Timeout>();

  const handleEnter = (isOpen: boolean) => {
    clearTimeout(timeOutRef.current);
    !isOpen && triggerRef.current?.click();
  };

  const handleLeave = (isOpen: boolean) => {
    timeOutRef.current = setTimeout(() => {
      isOpen && triggerRef.current?.click();
    }, timeoutDuration);
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      {({ open }) => (
        <div
          onMouseEnter={() => handleEnter(open)}
          onMouseLeave={() => handleLeave(open)}
        >
          <Menu.Button
            ref={triggerRef}
            className="inline-flex w-full justify-center rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
          >
            {title ?? "Menu"}
            {showIcon && (
              <FaChevronDown
                className="-mr-1 ml-2 h-5 w-5 text-violet-200 hover:text-violet-100"
                aria-hidden="true"
              />
            )}
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 mt-2 origin-top-right rounded-md bg-white shadow-lg">
              {children}
            </Menu.Items>
          </Transition>
        </div>
      )}
    </Menu>
  );
};
