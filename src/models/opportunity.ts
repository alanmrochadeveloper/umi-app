import { useCallback, useState } from 'react';
import {
  disableOpportunity,
  updateOpportunity,
  createOpportunity,
} from '@/services/opportunity';
import { Opportunity } from '@/types/opportunity';

export interface OpportunityModel {
  disble: (opportunityId?: string) => void;
  update: (opportunity: Opportunity) => void;
  create: (opportunity: Opportunity) => void;
  clearResult: () => void;
  result: { success?: boolean };
}

export default (): OpportunityModel => {
  const [result, setResult] = useState<{}>({
    success: false,
  });

  const disable = useCallback(async (opportunityId?: string) => {
    setResult(await disableOpportunity(opportunityId));
  }, []);

  const update = useCallback(async (opportunity: Opportunity) => {
    setResult(await updateOpportunity(opportunity));
  }, []);

  const create = useCallback(async (opportunity: Opportunity) => {
    setResult(await createOpportunity(opportunity));
  }, []);

  const clearResult = useCallback(
    async () =>
      setResult({
        success: false,
      }),
    [],
  );

  return { disable, update, create, clearResult, result };
};
