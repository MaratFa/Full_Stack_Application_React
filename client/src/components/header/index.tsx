import { TeamOutlined } from '@ant-design/icons';
import {Button, Layout, Space, Typography} from 'antd';
import styles from './index.module.css';

export const Header = () => {
  return (
    <Layout.Header className={styles.header}>
        <Space>
            <TeamOutlined className={styles.teamIcon}/>
            <Button type='link'>Click</Button>
        </Space>
    </Layout.Header>
  )
}
