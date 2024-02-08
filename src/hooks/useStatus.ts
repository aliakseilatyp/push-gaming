import { useSearchParams } from 'react-router-dom';
import { SelectChangeEvent } from '@mui/material/Select';
import { useMemo } from 'react';

const useStatus = (initialValue: string[]) => {
  const [searchParams, setSearchParams] = useSearchParams({ status: JSON.stringify(initialValue) });
  const params = useMemo(() => Object.fromEntries(searchParams.entries()), [searchParams]);

  const handleChangeStatus = (event: SelectChangeEvent<string[]>) => {
    const {
      target: { value },
    } = event;
    setSearchParams({ ...params, status: JSON.stringify(value) });
  };

  const handleDeleteStatus = (e: MouseEvent, value: string) => {
    e.preventDefault();
    const status = JSON.stringify(JSON.parse(params.status).filter((status: string) => status !== value));
    setSearchParams({
      ...params,
      status,
    });
  };

  return { status: JSON.parse(params.status ?? JSON.stringify(initialValue)), handleChangeStatus, handleDeleteStatus };
};

export default useStatus;
