import { TimeOption } from '@grafana/data';

export const quickOptions: TimeOption[] = [
  { from: 'now-5m', to: 'now', display: '最近 5 分钟', section: 3 },
  { from: 'now-15m', to: 'now', display: '最近 15 分钟', section: 3 },
  { from: 'now-30m', to: 'now', display: '最近 30 分钟', section: 3 },
  { from: 'now-1h', to: 'now', display: '最近 1 小时', section: 3 },
  { from: 'now-3h', to: 'now', display: '最近 3 小时', section: 3 },
  { from: 'now-6h', to: 'now', display: '最近 6 小时', section: 3 },
  { from: 'now-12h', to: 'now', display: '最近 12 小时', section: 3 },
  { from: 'now-24h', to: 'now', display: '最近 24 小时', section: 3 },
  { from: 'now-2d', to: 'now', display: '最近 2 天', section: 3 },
  { from: 'now-7d', to: 'now', display: '最近 7 天', section: 3 },
  { from: 'now-30d', to: 'now', display: '最近 30 天', section: 3 },
  { from: 'now-90d', to: 'now', display: '最近 90 天', section: 3 },
  { from: 'now-6M', to: 'now', display: '最近 6 个月', section: 3 },
  { from: 'now-1y', to: 'now', display: '最近 1 年', section: 3 },
  { from: 'now-2y', to: 'now', display: '最近 2 年', section: 3 },
  { from: 'now-5y', to: 'now', display: '最近 5 年', section: 3 },
];

export const otherOptions: TimeOption[] = [
  { from: 'now-1d/d', to: 'now-1d/d', display: '昨天', section: 3 },
  { from: 'now-2d/d', to: 'now-2d/d', display: '前天', section: 3 },
  { from: 'now-7d/d', to: 'now-7d/d', display: '上周的这一天', section: 3 },
  { from: 'now-1w/w', to: 'now-1w/w', display: '上星期', section: 3 },
  { from: 'now-1M/M', to: 'now-1M/M', display: '上个月', section: 3 },
  { from: 'now-1y/y', to: 'now-1y/y', display: '去年', section: 3 },
  { from: 'now/d', to: 'now/d', display: '今天', section: 3 },
  { from: 'now/d', to: 'now', display: '今天到目前为止', section: 3 },
  { from: 'now/w', to: 'now/w', display: '本周', section: 3 },
  { from: 'now/w', to: 'now', display: '本周到目前为止', section: 3 },
  { from: 'now/M', to: 'now/M', display: '本月', section: 3 },
  { from: 'now/M', to: 'now', display: '本月到目前为止', section: 3 },
  { from: 'now/y', to: 'now/y', display: '今年', section: 3 },
  { from: 'now/y', to: 'now', display: '今年到目前为止', section: 3 },
];
