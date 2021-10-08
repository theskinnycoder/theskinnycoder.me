import { useTheme } from '@/hooks';
import { TickIcon } from '@/icons';
import { RadioGroup } from '@headlessui/react';
import { useEffect, useState } from 'react';
import themes from './themes';

const ThemeChooser = () => {
  const { theme, setThemeTo } = useTheme();
  const [selected, setSelected] = useState(theme);

  useEffect(() => {
    setThemeTo(selected);
  }, [selected, setThemeTo]);

  return (
    <div className="flex flex-col items-center justify-center space-y-2">
      <h3 className="capitalize">
        Current Theme :{' '}
        <span className="text-brand text-lg font-semibold">{theme}</span>
      </h3>
      <RadioGroup value={selected} onChange={setSelected}>
        <div className="flex items-center justify-center space-x-2">
          {themes.map((theme) => (
            <RadioGroup.Option
              key={theme.name}
              value={theme.name}
              style={{
                backgroundColor: theme.brandColor,
              }}
              className="hover:scale-125 sm:p-4 dark:border-white p-3 duration-300 ease-in-out border-2 border-black rounded-full cursor-pointer"
            >
              {({ checked }) => (
                <>
                  {checked && (
                    <>
                      <TickIcon className="animate-bounce sm:w-4 sm:h-4 text-brand-contrast-text w-3 h-3" />
                    </>
                  )}
                </>
              )}
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>
    </div>
  );
};

export default ThemeChooser;
