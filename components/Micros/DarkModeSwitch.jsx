import { useDarkMode } from '@/hooks';
import { MoonIcon, SunIcon } from '@/icons';

const DarkModeSwitch = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <button
      className="focus:outline-none bg-brand-divide dark:text-black text-brand hover:opacity-90 hover:scale-105 dark:hover:scale-105 p-2 transition duration-150 ease-in-out rounded-lg outline-none opacity-100"
      onClick={toggleDarkMode}
    >
      {darkMode ? (
        <SunIcon className="md:w-5 md:h-5 w-4 h-4" />
      ) : (
        <MoonIcon className="md:w-5 md:h-5 w-4 h-4" />
      )}
    </button>
  );
};

export default DarkModeSwitch;
