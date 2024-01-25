import JackpotsTable from 'components/JackpotsTable';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Pagination from '@mui/material/Pagination';
import { useState } from 'react';

const Jackpots = () => {
  const [page, setPage] = useState(1);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  
  return (
    <div>
      <h1>Jackpots</h1>
      <Stack direction="row" justifyContent="right" style={{ margin: '10px 0' }}>
        <Button variant="contained" size="large">
          Create Jackpot
        </Button>
      </Stack>
      <JackpotsTable />
      <Stack direction="row" justifyContent="center" style={{ margin: '10px 0' }}>
        <Pagination count={10} page={page} onChange={handleChange} />
      </Stack>
    </div>
  );
};

export default Jackpots;
