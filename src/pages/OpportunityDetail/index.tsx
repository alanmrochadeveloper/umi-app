import { useEffect, useState } from 'react';
import { getOpportunity, listActivities } from '@/services/opportunity';
import { Opportunity } from '@/types/opportunity';
import ProDescriptions from '@ant-design/pro-descriptions';
import { PageContainer } from '@ant-design/pro-layout';
import ProTable from '@ant-design/pro-table';
import { Breadcrumb, Button, Card, Steps, Tag } from 'antd';
import { useParams, history, FormattedMessage } from 'umi';
import columns from '../Opportunities/columns';
import { PlusOutlined } from '@ant-design/icons';
import { Activity } from '@/types/opportunity';
import activityColumns from './columns';

export default function Page() {
  const { id } = useParams<{ id: string }>();
  const [opportunity, setOpportunity] = useState<Opportunity>([]);
  useEffect(() => {
    const fetchOpportunity = async () => {
      setOpportunity(
        await getOpportunity({
          opportunityId: id,
        }),
      );
    };
    fetchOpportunity();
  }, []);
  return (
    <PageContainer
      extra={[
        <Button icon={<PlusOutlined />} key="activity" type="primary">
          <FormattedMessage id="activity.new" />
        </Button>,
      ]}
      header={{
        title: <FormattedMessage id="table.opportunity.title" />,
        breadcrumb: (
          <Breadcrumb>
            <Breadcrumb.Item>
              <a onClick={() => history.push('/opportunities')}>
                <FormattedMessage id="menu.opportunities" />
              </a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <FormattedMessage id="table.opportunity.title" />
            </Breadcrumb.Item>
          </Breadcrumb>
        ),
      }}
    >
      <Card bordered>
        <Steps current={opportunity?.status}>
          <Steps.Step
            key="quality"
            description={<Tag color="#e379f2" key={0} />}
            title={<FormattedMessage id="step.quality" />}
          />
          <Steps.Step
            key="develop"
            description={<Tag color="#c7f279" key={1} />}
            title={<FormattedMessage id="step.develop" />}
          />
          <Steps.Step
            key="propose"
            description={<Tag color="#8d79f2" key={2} />}
            title={<FormattedMessage id="step.propose" />}
          />
          <Steps.Step
            key="close"
            description={<Tag color="#42c3e3" key={3} />}
            title={<FormattedMessage id="step.close" />}
          />
        </Steps>
        <br />
        <ProDescriptions<Opportunity>
          title={<FormattedMessage id="table.oppotunity.detail" />}
          columns={columns}
          dataSource={opportunity}
        />
      </Card>
      <Card bordered>
        <ProTable<Activity>
          headerTitle={<FormattedMessage id="table.opportunity.activities" />}
          rowKey="id"
          toolbar={{ settings: undefined }}
          search={false}
          pagination={{ pageSize: 5 }}
          columns={activityColumns}
          params={{ customerId: id }}
          request={listActivities}
        />
      </Card>
    </PageContainer>
  );
}
