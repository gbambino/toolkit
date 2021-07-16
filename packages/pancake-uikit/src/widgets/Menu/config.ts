import { LinkStatus } from "./types";

export const status = {
  LIVE: <LinkStatus>{
    text: "LIVE",
    color: "failure",
  },
  SOON: <LinkStatus>{
    text: "SOON",
    color: "warning",
  },
  NEW: <LinkStatus>{
    text: "NEW",
    color: "success",
  },
};

export const links = [
    {
        label: ('Home'),
        icon: 'HomeIcon',
        href: '/',
      },
      {
        label: ('Trade'),
        icon: 'TradeIcon',
        items: [
          {
            label: ('Exchange'),
            href: 'https://exchange.pancakeswap.finance/#/swap',
          },
          {
            label: ('Liquidity'),
            href: 'https://exchange.pancakeswap.finance/#/pool',
          },
        ],
      },
      {
        label: ('TOCO Farms'),
        icon: 'FarmIcon',
        href: '/farms',
      },
      {
        label: ('TOCO Nests'),
        icon: 'PoolIcon',
        href: '/syrup',
      },
      {
        label: ('ITO Hatchery (COMING SOON!)'),
        icon: 'TeamBattleIcon',
        href: '/farms',
      },
      {
        label: ('Docs'),
        icon: 'InfoIcon',
        href: 'https://app.gitbook.com/@gbambino/s/toucanswap-finance/',
      },
      {
        label: ('More'),
        icon: 'MoreIcon',
        items: [
          {
            label: ('Contact'),
            href: 'https://app.gitbook.com/@gbambino/s/toucanswap-finance/general/contact-us',
          },
          {
            label: ('Github'),
            href: 'https://app.gitbook.com/@gbambino/s/toucanswap-finance/general/github',
          },
        ],
    },
];

export const socials = [
    {
        label: "Telegram",
        icon: "TelegramIcon",
        items: [
            {
                label: "English",
                href: "https://t.me/toucanswap",
            },
        ],
    },
    {
        label: "Twitter",
        icon: "TwitterIcon",
        href: "https://twitter.com/toucanswapdex",
    },
];

export const MENU_HEIGHT = 64;
export const MENU_ENTRY_HEIGHT = 48;
export const SIDEBAR_WIDTH_FULL = 240;
export const SIDEBAR_WIDTH_REDUCED = 56;
