import { ReactNode } from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import CloseIcon from '@mui/icons-material/Close';
import { FormControlWrapper, StatusChip } from './styles';
import { statusColor } from 'constants/colors';

interface IMultipleSelect {
  children: ReactNode;
  status: string[];
  handleChangeStatus: (event: SelectChangeEvent<string[]>) => void;
  handleDeleteStatus: (e: globalThis.MouseEvent, value: string) => void;
}

const MultipleSelect = ({ children, status, handleChangeStatus, handleDeleteStatus }: IMultipleSelect) => {
  return (
    <FormControlWrapper>
      <InputLabel id="multiple-chip-label" size="small">
        Status
      </InputLabel>
      <Select
        labelId="multiple-chip-label"
        id="multiple-chip"
        multiple
        value={status}
        onChange={handleChangeStatus}
        size="small"
        input={<OutlinedInput id="select-multiple-chip" label="Status" />}
        renderValue={(selectedStatus) => (
          <Stack direction="row" flexWrap="wrap" spacing={0.5}>
            {selectedStatus.map((status) => {
              return (
                <StatusChip
                  key={status}
                  label={status}
                  deleteIcon={<CloseIcon onMouseDown={(event) => event.stopPropagation()} />}
                  onDelete={(e) => handleDeleteStatus(e, status)}
                  sx={{ color: statusColor[status] }}
                />
              );
            })}
          </Stack>
        )}
      >
        {children}
      </Select>
    </FormControlWrapper>
  );
};

export default MultipleSelect;
