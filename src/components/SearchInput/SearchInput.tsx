import TextField from '@mui/material/TextField';
import { useState } from 'react';

export default function StateTextFields() {
  const [name, setName] = useState('Cat in the Hat');

  const handleSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  return (
    <TextField id="outlined-controlled" value={name} onChange={handleSearchInput} size="small" />
  );
}
