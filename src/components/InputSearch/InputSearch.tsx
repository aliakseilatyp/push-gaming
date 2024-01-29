import TextField from '@mui/material/TextField';
import { Input } from './styles';

interface IInputSearch {
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputSearch = ({ label, value, onChange }: IInputSearch) => {
  return <Input label={label} value={value} onChange={onChange} size="small" />;
};

export default InputSearch;
