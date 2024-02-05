import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { jackpotAuditData } from 'mockData/JackpotAuditMockData';
import dayjs from 'dayjs';
import { DATE_FORMAT } from 'constants/constants';
import { DiffEditor } from '@monaco-editor/react';
import { newData, oldData } from 'mockData/DetailsForMonacoMockData';

const JackpotAuditDetails = () => {
  const { id } = useParams();
  const jackpot = jackpotAuditData.find(({ entity }) => entity.jackpotId === id);
  const oldCode = JSON.stringify(oldData, null, '\t');
  const newCode = JSON.stringify(newData, null, '\t');
  
  return (
    <>
      <h1>Jackpot audit details</h1>
      <Box marginBottom="5px">
        Jackpot ID: <strong>{jackpot?.entity.jackpotId}</strong>
      </Box>
      <Box marginBottom="5px">
        Revision date: <strong>{dayjs(jackpot?.metadata.delegate.revisionDate).format(DATE_FORMAT)}</strong>
      </Box>
      <Box marginBottom="5px">
        User ID: <strong>{jackpot?.metadata.delegate.id}</strong>
      </Box>
      <DiffEditor  height="80vh" language="json" theme="vs-dark" original={oldCode} modified={newCode} />
    </>
  );
};

export default JackpotAuditDetails;
