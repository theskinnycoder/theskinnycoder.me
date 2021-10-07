import useDarkMode from '@/hooks/useDarkMode';
import { Switch } from '@headlessui/react';
import { MoonIcon, SunIcon } from '../Icons';

const ThemeSwitch = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <Switch
      checked={darkMode}
      onChange={() => toggleDarkMode()}
      className="focus:outline-none dark:bg-gray-700 md:w-16 md:h-8 group relative inline-flex items-center w-12 h-6 bg-gray-600 rounded-full outline-none"
    >
      <span className="sr-only">Toggle Light/Dark Mode</span>
      <span
        className={`${
          darkMode
            ? 'md:translate-x-9 translate-x-7'
            : 'md:translate-x-1 translate-x-1'
        } inline-block md:w-6 md:h-6 w-4 h-4 transform bg-white transition ease-in-out duration-200 rounded-full group-hover:ring-4 ring-brand`}
      />
      {darkMode ? (
        <SunIcon className="md:w-5 md:h-5 w-4 h-4 transform -translate-x-3 md:-translate-x-4 text-[#FEC500]" />
      ) : (
        <MoonIcon className="md:w-5 md:h-5 w-4 h-4 transform translate-x-3 text-[#FEC500]" />
      )}
    </Switch>
  );
};

export default ThemeSwitch;
