import { useState } from 'react';
import { SelectChangeEvent } from '@mui/material/Select';

const useStatus = (initialValue: string[]) => {
  const [status, setStatus] = useState(initialValue);

  const handleChangeStatus = (event: SelectChangeEvent<typeof status>) => {
    const {
      target: { value },
    } = event;
    setStatus(typeof value === 'string' ? value.split(',') : value);

  };

  const handleDeleteStatus = (e: MouseEvent, value: string) => {
    e.preventDefault();
    setStatus((current) => current.filter((status) => status !== value));
    
  };

  return { status, handleChangeStatus, handleDeleteStatus };
};

export default useStatus;
