import columns from '../Opportunities/columns';
import styles from './index.less';
import { PageContainer } from '@ant-design/pro-layout';
import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import ProTable from '@ant-design/pro-table';
import { FormattedMessage } from 'umi';


export default function Page() {
  return (
    <PageContainer
      header={{ title: undefined }}
      style={{ minHeight: '90vh' }}
      content={
        <div className={styles.pageHeaderContent}>
          <div className={styles.avatar}>
            <Avatar
              alt="avatar"
              className={styles.avatarComponent}
              size={{ xs: 64, sm: 64, md: 64, lg: 64, xl: 80, xxl: 100 }}
              icon={<UserOutlined />}
            />
          </div>
          <div className={styles.content}>
            <FormattedMessage id="greetings.hello" />
            {' '}John Doe,{' '}
            <FormattedMessage id="greetings.welcome" />
            <div> Inside Sales | Umi Group</div>
          </div>
        </div>
      }>
      <div style={{ width: '100%' }}>
        <ProTable<any>
          headerTitle={<FormattedMessage id="home.recents" />}
          pagination={{ pageSize: 5 }}
          rowKey="id"
          search={false}
          columns={columns}
        />
      </div>
    </PageContainer>
  );
}
