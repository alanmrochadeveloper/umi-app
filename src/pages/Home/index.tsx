import styles from './index.less';
import { PageContainer } from '@ant-design/pro-layout';
import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import ProTable from '@ant-design/pro-table';


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
            <div className={styles.contentTitle}>
              Hello John Doe, welcome.
            </div>
            <div> Inside Sales | Umi Group</div>
          </div>
        </div>
      }>
      <div style={{ width: '100%' }}>
        <ProTable<any>
          headerTitle="Recent opportunities"
          pagination={{ pageSize: 5 }}
          rowKey="id"
          search={false}
        />
      </div>
    </PageContainer>
  );
}
