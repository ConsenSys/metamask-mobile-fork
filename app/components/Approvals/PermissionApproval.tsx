// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
import useApprovalRequest from '../hooks/useApprovalRequest';
import { ApprovalTypes } from '../../core/RPCMethods/RPCMethodMiddleware';
import AnalyticsV2 from '../../util/analyticsV2';
import { MetaMetricsEvents } from '../../core/Analytics';
import { createAccountConnectNavDetails } from '../Views/AccountConnect';

export interface PermissionApprovalProps {
  accountsLength: number;
  navigation: any;
}

const PermissionApproval = (props: PermissionApprovalProps) => {
  const { approvalRequest } = useApprovalRequest();

  if (approvalRequest?.type !== ApprovalTypes.REQUEST_PERMISSIONS) return null;

  const requestData = approvalRequest?.requestData;

  if (!requestData?.permissions?.eth_accounts) return null;

  const {
    metadata: { id },
  } = requestData;

  const totalAccounts = props.accountsLength;

  AnalyticsV2.trackEvent(MetaMetricsEvents.CONNECT_REQUEST_STARTED, {
    number_of_accounts: totalAccounts,
    source: 'PERMISSION SYSTEM',
  });

  props.navigation.navigate(
    ...createAccountConnectNavDetails({
      hostInfo: requestData,
      permissionRequestId: id,
    }),
  );

  return null;
};

export default PermissionApproval;
