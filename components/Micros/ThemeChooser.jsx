import useTheme from '@/hooks/useTheme';
import { RadioGroup } from '@headlessui/react';
import { useEffect, useState } from 'react';
import { TickIcon } from '../Icons';
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
                backgroundColor: theme.color,
              }}
              className="hover:scale-125 p-4 duration-200 ease-in-out rounded-full cursor-pointer"
            >
              {({ checked }) => (
                <>
                  {checked && (
                    <>
                      <TickIcon className="animate-bounce w-4 h-4 text-black" />
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
