import columns from './columns';
import { listOpportunities } from '@/services/opportunity';
import { Opportunity } from '@/types/opportunity';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Form } from 'antd';
import ProTable from '@ant-design/pro-table';
import {
  FormattedMessage,
  formatMessage,
  getLocale,
  useIntl,
  useModel,
} from 'umi';
import { PageContainer } from '@ant-design/pro-layout';
import { useEffect } from 'react';

const { disable, update, clearResult, result } = useModel('opportunity');
const { formatMessage } = useIntl();

useEffect(() => {
  if (result?.success) {
    message.success(
      formatMessage({
        id: 'messages.success.operation',
      }),
    );
    clearResult();
  }
}, []);
export default function Page() {
  return (
    <PageContainer>
      <ProTable<Opportunity>
        rowKey="id"
        headerTitle={<FormattedMessage id="table.opportunity.title" />}
        search={{ labelWidth: 'auto' }}
        pagination={{ pageSize: 5 }}
        dateFormatter="string"
        locale={getLocale()}
        request={listOpportunities}
        toolBarRender={() => [
          <Button key="button" icon={<PlusOutlined />} type="primary">
            <FormattedMessage id="table.new" />
          </Button>,
        ]}
        columns={columns}
        editable={{
          type: 'multiple',
          deletePopconfirmMessage: <FormattedMessage id="table.confirm" />,
          deleteText: <FormattedMessage id="table.disable" />,
          onDelete: async (key) => disable(key as string),
          onSave: async (_, record) => update(record),
        }}
      />
    </PageContainer>
  );
}
