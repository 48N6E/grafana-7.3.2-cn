import { getDatasourceSrv } from 'app/features/plugins/datasource_srv';
import { getBackendSrv } from 'app/core/services/backend_srv';
import store from 'app/core/store';
import { SetupStep } from './types';

const step1TutorialTitle = 'Grafana基本方面';
const step2TutorialTitle = 'Create users and teams';
const keyPrefix = 'getting.started.';
const step1Key = `${keyPrefix}${step1TutorialTitle
  .replace(' ', '-')
  .trim()
  .toLowerCase()}`;
const step2Key = `${keyPrefix}${step2TutorialTitle
  .replace(' ', '-')
  .trim()
  .toLowerCase()}`;

export const getSteps = (): SetupStep[] => [
  {
    heading: 'Welcome to Grafana',
    subheading: 'The steps below will guide you to quickly finish setting up your Grafana installation.',
    title: '基本信息',
    info: '下面的步骤将指导您快速完成设置您的Grafana安装。',
    done: false,
    cards: [
      {
        type: 'tutorial',
        heading: '数据源和仪表板',
        title: step1TutorialTitle,
        info:
          '如果你没有相关经验，请建立并理解监控平台。本教程将指导您完成整个过程，并介绍向右的“数据源”和“仪表板”步骤。',
        href: 'https://grafana.com/tutorials/grafana-fundamentals',
        icon: 'grafana',
        check: () => Promise.resolve(store.get(step1Key)),
        key: step1Key,
        done: false,
      },
      {
        type: 'docs',
        title: '添加数据源',
        heading: 'data sources',
        icon: 'database',
        learnHref: 'https://grafana.com/docs/grafana/latest/features/datasources/add-a-data-source',
        href: 'datasources/new',
        check: () => {
          return new Promise(resolve => {
            resolve(
              getDatasourceSrv()
                .getMetricSources()
                .filter(item => {
                  return item.meta.builtIn !== true;
                }).length > 0
            );
          });
        },
        done: false,
      },
      {
        type: 'docs',
        heading: 'dashboards',
        title: '新建仪表板',
        icon: 'apps',
        href: 'dashboard/new',
        learnHref: 'https://grafana.com/docs/grafana/latest/guides/getting_started/#create-a-dashboard',
        check: async () => {
          const result = await getBackendSrv().search({ limit: 1 });
          return result.length > 0;
        },
        done: false,
      },
    ],
  },
  {
    heading: 'Setup complete!',
    subheading:
      'All necessary steps to use Grafana are done. Now tackle advanced steps or make the best use of this home dashboard – it is, after all, a fully customizable dashboard – and remove this panel.',
    title: '高级',
    info: ' 管理您的用户和团队，并添加插件。这些步骤是可选的。',
    done: false,
    cards: [
      {
        type: 'tutorial',
        heading: 'Users',
        title: '邀请用户和团队',
        info: '了解如何在团队中组织用户并管理资源访问和角色。',
        href: 'https://grafana.com/tutorials/create-users-and-teams',
        icon: 'users-alt',
        key: step2Key,
        check: () => Promise.resolve(store.get(step2Key)),
        done: false,
      },
      {
        type: 'docs',
        heading: 'plugins',
        title: '探索和安装插件',
        learnHref: 'https://grafana.com/docs/grafana/latest/plugins/installation',
        href: 'plugins',
        icon: 'plug',
        check: async () => {
          const plugins = await getBackendSrv().get('/api/plugins', { embedded: 0, core: 0 });
          return Promise.resolve(plugins.length > 0);
        },
        done: false,
      },
    ],
  },
];
