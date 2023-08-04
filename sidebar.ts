import { DefaultTheme } from 'vitepress'

export default [
  { text: 'Overview', link: '/farmart/' },
  {
    text: 'Prologue',
    items: [
      { text: 'Release Notes', link: '/farmart/releases' },
      { text: 'Upgrade Guide', link: '/farmart/upgrade' },
    ],
  },
  {
    text: 'Getting Started',
    items: [
      { text: 'Installation', link: '/farmart/installation' },
      { text: 'SSL', link: '/farmart/ssl' },
      { text: 'License', link: '/farmart/license' },
    ],
  },
  {
    text: 'Usage',
    items: [
      { text: 'Setup homepage', link: '/farmart/usage-homepage' },
      { text: 'Menu', link: '/farmart/usage-menu' },
      { text: 'Theme options', link: '/farmart/usage-theme-options' },
      { text: 'Widgets', link: '/farmart/usage-widgets' },
      { text: 'Custom CSS/JS', link: '/farmart/usage-custom-css-js' },
      { text: 'Translation', link: '/farmart/usage-translation' },
      { text: 'Email', link: '/farmart/usage-email' },
      { text: 'Multi-language', link: '/farmart/usage-multi-language' },
      { text: 'Currencies', link: '/farmart/usage-currencies' },
      { text: 'Ads', link: '/farmart/usage-ads' },
      { text: 'Media - Setup Amazon S3', link: '/farmart/usage-media-s3' },
      { text: 'Media - Setup BunnyCDN', link: '/farmart/usage-media-bunnycdn' },
      { text: 'Media - Setup Wasabi', link: '/farmart/usage-media-wasabi' },
      { text: 'Analytics', link: '/farmart/usage-analytics' },
      { text: 'Backup', link: '/farmart/usage-backup' },
      { text: 'Location', link: '/farmart/usage-location' },
      { text: 'Invoice template', link: '/farmart/invoice-template' },
    ],
  },
] satisfies DefaultTheme.SidebarItem[];