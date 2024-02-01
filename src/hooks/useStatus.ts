import { useSearchParams } from 'react-router-dom';
import { SelectChangeEvent } from '@mui/material/Select';

const useStatus = (initialValue: string[]) => {
  const [searchParams, setSearchParams] = useSearchParams({ status: JSON.stringify(initialValue) });
  const { status } = Object.fromEntries(searchParams.entries());
  const statusArray = JSON.parse(status);

  const handleChangeStatus = (event: SelectChangeEvent<string[]>) => {
    const {
      target: { value },
    } = event;

    setSearchParams((params) => {
      params.set('status', JSON.stringify(value));
      return params;
    });
  };

  const handleDeleteStatus = (e: MouseEvent, value: string) => {
    e.preventDefault();
    setSearchParams((params) => {
      params.set('status', JSON.stringify(statusArray.filter((status: string) => status !== value)));
      return params;
    });
  };

  return { status: statusArray, handleChangeStatus, handleDeleteStatus };
};

export default useStatus;
