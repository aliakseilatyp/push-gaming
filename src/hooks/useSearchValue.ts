import { useState } from 'react';

const useSearchValue = (): [string, (event: React.ChangeEvent<HTMLInputElement>) => void] => {
  const [value, setValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return [value, handleChange];
};

export default useSearchValue;
