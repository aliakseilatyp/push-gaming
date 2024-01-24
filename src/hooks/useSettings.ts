import { useQuery } from '@tanstack/react-query';
import Api from 'services/api';

const useSettings = () => useQuery({ queryKey: ['settings'], queryFn: Api.getJackpot });

export default useSettings;
