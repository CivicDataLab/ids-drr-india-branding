// Deployment config for the IDS-DRR India deployment. Asset references
// are TS imports rather than URL strings so Next.js bundles them and
// emits content-hashed URLs automatically — no /assets/* URL routing,
// no public-dir bind mount.
//
// `.src` extracts the URL from a StaticImageData object so consumers
// keep receiving plain strings (e.g. for CSS `url(...)`).
//
// Types come from the shared ids-drr-branding-types package; if the
// stub adds or changes a field, this file will fail to type-check
// until updated to match.

import type { DeploymentConfig } from 'ids-drr-branding-types';

import appleIcon from './assets/apple-touch-icon.png';
import favicon from './assets/favicon.ico';
import heroBackground from './assets/brand/heroBackground.png';
import heroForeground from './assets/brand/heroForeground.png';
import logo from './assets/brand/logo.png';
import openGraphImage from './assets/og.png';
import assamIcon from './assets/states/Assam.svg';
import biharIcon from './assets/states/Bihar.svg';
import hpIcon from './assets/states/Hp.svg';
import odishaIcon from './assets/states/Odisha.svg';
import upIcon from './assets/states/Up.svg';
import messagesEn from './messages/en.json';

export const config: DeploymentConfig = {
  logo,
  heroForeground,
  heroBackground: heroBackground.src,
  favicon: favicon.src,
  appleIcon: appleIcon.src,
  openGraphImage: openGraphImage.src,
  states: [
    {
      name: 'Assam',
      slug: 'assam',
      icon: assamIcon,
      status: 'active',
    },
    {
      name: 'Himachal Pradesh',
      slug: 'himachal-pradesh',
      icon: hpIcon,
      status: 'inactive',
      overlay: () => import('./assets/geo_json/himachal-pradesh.json'),
    },
    {
      name: 'Odisha',
      slug: 'odisha',
      icon: odishaIcon,
      status: 'inactive',
    },
    {
      name: 'Bihar',
      slug: 'bihar',
      icon: biharIcon,
      status: 'inactive',
    },
    {
      name: 'Uttar Pradesh',
      slug: 'uttar-pradesh',
      icon: upIcon,
      status: 'inactive',
    },
  ],
  resources: [
    {
      title: 'Assam Tenders Dashboard',
      source: 'Assam Government eProcurement System',
      lastUpdated: '2024-10-01',
      updateFrequency: 'NA',
      referencePeriodFrom: '2017-01',
      referencePeriodTo: '2024-08',
      url: 'https://supersetv2.civicdatalab.in/superset/dashboard/p/Od0XQzvMNmr/',
      tags: ['Financial Data', 'Government Response'],
    },
  ],
  languages: [
    { label: 'English', value: 'en' },
    { label: 'हिन्दी', value: 'hi' },
    { label: 'অসমীয়া', value: 'as' },
  ],
  messages: {
    en: messagesEn,
  },
  userGuideLink:
    'https://drive.google.com/file/d/1TerjJtQrWxziKJ1E5BvfvRELtWJWRw2M/view?usp=drive_link',
  docsLink:
    'https://ids-drr.readthedocs.io/en/latest/architecture/overview.html',
  reportsEnabled: true,
  aboutUsEnabled: true,
};
