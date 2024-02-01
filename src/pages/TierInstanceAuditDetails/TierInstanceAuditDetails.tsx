import { useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import dayjs from 'dayjs';
import { DATE_FORMAT } from 'constants/constants';
import { tierInstanceAuditMockData } from 'mockData/TierInstanceAuditMockData';

const TierInstanceAuditDetails = () => {
  const { id } = useParams();
  const jackpot = tierInstanceAuditMockData.find(({ entity }) => entity.jackpotId === id);
  return (
    <>
      <h1>Jackpot audit details</h1>
      <Box marginBottom="5px">
        Jackpot ID: <strong>{jackpot?.entity.jackpotId}</strong>
      </Box>
      <Box marginBottom="5px">
        Instance ID: <strong>{jackpot?.entity.instanceId}</strong>
      </Box>
      <Box marginBottom="5px">
        Revision date: <strong>{dayjs(jackpot?.metadata.delegate.revisionDate).format(DATE_FORMAT)}</strong>
      </Box>
      <Box marginBottom="5px">
        User ID: <strong>{jackpot?.metadata.delegate.id}</strong>
      </Box>
    </>
  );
};

export default TierInstanceAuditDetails;
