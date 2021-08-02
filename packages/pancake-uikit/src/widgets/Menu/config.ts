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
    label: "Home",
    icon: "HomeIcon",
    href: "/",
  },
  {
    label: "Trade",
    icon: "TradeIcon",
    items: [
      {
        label: "Exchange",
        href: "https://exchange.zenithswap.finance",
      },
      {
        label: "Liquidity",
        href: "https://exchange.zenithswap.finance/#/pool",
      },
    ],
  },
  {
    label: "Farms",
    icon: "FarmIcon",
    href: "/farms",
    status: status.LIVE,
  },
  {
    label: "Pools",
    icon: "PoolIcon",
    href: "/syrup",
  },
  {
    label: "Lottery",
    icon: "TicketIcon",
    href: "/lottery",
  },
  {
    label: "NFT",
    icon: "NftIcon",
    href: "/nft",
  },
  {
    label: "Team Battle",
    icon: "TeamBattleIcon",
    href: "/competition",
    status: status.SOON,
  },
  {
    label: "Profile & Teams",
    icon: "GroupsIcon",
    status: status.LIVE,
    items: [
      {
        label: "Leaderboard",
        href: "/teams",
        status: status.NEW,
      },
      {
        label: "YourProfile",
        href: "/",
      },
    ],
    calloutClass: "rainbow",
  },
  {
    label: "Info",
    icon: "InfoIcon",
    items: [
      {
        label: "Overview",
        href: "https://zenithswap.info",
      },
      {
        label: "Tokens",
        href: "https://zenithswap.info/tokens",
      },
      {
        label: "Pairs",
        href: "https://zenithswap.info/pairs",
      },
      {
        label: "Accounts",
        href: "https://zenithswap.info/accounts",
      },
    ],
  },
  {
    label: "IFO",
    icon: "IfoIcon",
    items: [
      {
        label: "Next",
        href: "/ifo",
      },
      {
        label: "History",
        href: "/ifo/history",
      },
    ],
  },
  {
    label: "More",
    icon: "MoreIcon",
    items: [
      {
        label: "Voting",
        href: "https://voting.zenithswap.finance",
      },
      {
        label: "Github",
        href: "https://github.com/zenithswap",
      },
      {
        label: "Docs",
        href: "https://docs.zenithswap.finance",
      },
      {
        label: "Blog",
        href: "https://zenithswap.medium.com",
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
        href: "https://t.me/zenithswap",
      },
      {
        label: "Bahasa Indonesia",
        href: "https://t.me/ZenithSwapIndonesia",
      },
      {
        label: "中文",
        href: "https://t.me/ZenithSwap_CN",
      },
      {
        label: "Tiếng Việt",
        href: "https://t.me/ZenithSwapVN",
      },
      {
        label: "Italiano",
        href: "https://t.me/zenithswap_ita",
      },
      {
        label: "русский",
        href: "https://t.me/zenithswap_ru",
      },
      {
        label: "Türkiye",
        href: "https://t.me/zenithswapturkiye",
      },
      {
        label: "Português",
        href: "https://t.me/ZenithSwapPortuguese",
      },
      {
        label: "Español",
        href: "https://t.me/ZenithswapEs",
      },
      {
        label: "日本語",
        href: "https://t.me/zenithswapjp",
      },
      {
        label: "Français",
        href: "https://t.me/zenithswapfr",
      },
      {
        label: "Announcements",
        href: "https://t.me/ZenithSwapAnn",
      },
      {
        label: "Whale Alert",
        href: "https://t.me/ZenithSwapWhales",
      },
    ],
  },
  {
    label: "Twitter",
    icon: "TwitterIcon",
    href: "https://twitter.com/zenithswap",
  },
];

export const MENU_HEIGHT = 64;
export const MENU_ENTRY_HEIGHT = 48;
export const SIDEBAR_WIDTH_FULL = 240;
export const SIDEBAR_WIDTH_REDUCED = 56;
