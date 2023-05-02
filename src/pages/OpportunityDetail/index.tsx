import { Opportunity } from '@/types/opportunity';
import ProDescriptions from '@ant-design/pro-descriptions';
import { PageContainer } from '@ant-design/pro-layout';
import ProTable from '@ant-design/pro-table';
import { Breadcrumb, Button, Card, Steps, Tag } from 'antd';
import { useParams, history, FormattedMessage } from 'umi';
import columns from '../Opportunities/columns';
import { PlusOutlined } from '@ant-design/icons';
import { Activity } from '@/types/opportunity';
import styles from './index.less';

export default function Page() {
  const { id } = useParams<{ id: string }>();
  return (
    <PageContainer
      extra={[
        <Button icon={<PlusOutlined />} key="activity" type="primary">
          <FormattedMessage id="activity.new" />
        </Button>,
      ]}
    >
      <Card bordered>
        <ProDescriptions<Opportunity>
          title={<FormattedMessage id="table.oppotunity.detail" />}
          columns={columns}
          dataSource={[]}
        />
      </Card>
      <Card bordered>
        <ProTable<Activity>
          headerTitle={<FormattedMessage id="table.opportunity.activities" />}
          rowKey="id"
          toolbar={{ settings: undefined }}
          search={false}
          pagination={{ pageSize: 5 }}
          columns={[]}
          params={{ customerId: id }}
          request={() => {}}
        />
      </Card>
    </PageContainer>
  );
}
