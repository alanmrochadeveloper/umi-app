import { useEffect } from 'react';
import { listCustomers } from '@/services/customer';
import { PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import ProTable from '@ant-design/pro-table';
import { FormattedMessage, getLocale, useIntl, useModel } from 'umi';
import { PageContainer } from '@ant-design/pro-layout';
import columns from './columns';
import { Customer } from '@/types/customer';
export default function Page() {
  const { disable, update, clearResult, result } = useModel('customer');
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
  }, [result]);
  return (
    <PageContainer>
      <ProTable<Customer>
        rowKey="id"
        headerTitle={<FormattedMessage id="table.customer.title" />}
        search={{ labelWidth: 'auto' }}
        pagination={{ pageSize: 5 }}
        dateFormatter="string"
        locale={getLocale()}
        request={listCustomers}
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
