'use client';
import Image from 'next/image';
import { IoMenu } from 'react-icons/io5';
import SearchBar from '../SearchBar';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { GoLocation } from 'react-icons/go';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { AnimatePresence, motion } from 'framer-motion';

const Header = () => {
  const pathname = usePathname();
  const hideSearchBarPaths = [
    '/pages/itinerary-record',
    '/pages/create-itinerary'
  ];

  return (
    <header className="bg-primary px-4 py-2">
      <div className="flex h-[70px] items-center justify-between container-mobile">
        {/* <Link href='/' >
          <Image
            src="/images/main-logo.png"
            width={136}
            height={36}
            alt="Itineract Logo"
            priority
          />
        </Link> */}
        <div className="flex items-center justify-center gap-5 text-white">
          <IoMenu
            width={48}
            height={48}
            className="text-[32px] text-base-100"
          />
          <h1 className="font-bold text-xl">Hello! John</h1>
        </div>
        <div>
          <Menu>
            {({ open }) => (
              <>
                <MenuButton>
                  <GoLocation color="white" size="30" />
                </MenuButton>
                <AnimatePresence>
                  {open && (
                    <MenuItems
                      static
                      as={motion.div}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      anchor="bottom end"
                      className="bg-white text-black p-4 rounded-2xl shadow-lg w-52 -mt-2"
                    >
                      <div>
                        <h1 className="font-bold text-blue mb-2">
                          Select location
                        </h1>
                        <div className="form-control mb-2">
                          <label className="text-slate-800 flex items-center justify-start gap-x-2 cursor-pointer">
                            <input
                              type="radio"
                              name="radio-10"
                              className="radio checked:bg-blue peer"
                              defaultChecked
                            />
                            <span className="peer-checked:text-blue text-slate-700">
                              Singapore
                            </span>
                          </label>
                        </div>
                        <div className="form-control">
                          <label className="text-slate-800 flex items-center justify-start gap-x-2 cursor-pointer">
                            <input
                              type="radio"
                              name="radio-10"
                              className="radio checked:bg-blue peer"
                              defaultChecked
                            />
                            <span className="peer-checked:text-blue text-slate-700">
                              Philipines
                            </span>
                          </label>
                        </div>
                      </div>
                    </MenuItems>
                  )}
                </AnimatePresence>
              </>
            )}
          </Menu>
        </div>
      </div>
      {pathname && !hideSearchBarPaths.includes(pathname) && <SearchBar />}
    </header>
  );
};

export default Header;
