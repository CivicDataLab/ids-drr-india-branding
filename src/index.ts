import type { Exports } from 'ids-drr-branding-types';

import { AboutPage } from './about-us/page';
import { About } from './components/about';
import { Partners } from './components/partners';
import { DataStories } from './components/data-stories';
import { Footer } from './components/footer';
import { Credits } from './components/credits';
import { PartnerLogos } from './components/partner-logos';
import { config } from './config';

export {
  AboutPage,
  About,
  Partners,
  DataStories,
  Footer,
  Credits,
  PartnerLogos,
  config,
};

// Compile-time contract check; tree-shaken at runtime.
({
  AboutPage,
  About,
  Partners,
  DataStories,
  Footer,
  Credits,
  PartnerLogos,
  config,
}) satisfies Exports;
