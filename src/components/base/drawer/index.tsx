import { Dialog, Transition } from "@headlessui/react";
import { FC, Fragment } from "react";
import { FaXmark } from "react-icons/fa6";
import { TProps } from "./type";

export const Drawer: FC<TProps> = (props) => {
  const {
    children,
    isOpen,
    onClose,
    onOpen,
    position = "right",
    title,
    width,
  } = props;
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={onClose}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div
            className={`fixed inset-0 w-full ${position === "right" ? "right-0 " : "left-0 "}`}
          >
            <div
              className={`flex w-full ${position === "right" ? "justify-end" : "justify-start"}`}
            >
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="min-h-screen w-full max-w-xl transform overflow-hidden bg-white text-left align-middle shadow-xl transition-all duration-200">
                  <Dialog.Title
                    as="h3"
                    className="flex justify-between border-b p-4 text-lg font-medium leading-6 text-gray-900"
                  >
                    <span>{title}</span>
                    <button onClick={onClose}>
                      <FaXmark />
                    </button>
                  </Dialog.Title>
                  <div className="mt-2 px-4">{children}</div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
