import fs from "fs";
import path from "path";
import { TokenList } from "@uniswap/token-lists";
import { version as zenithswapDefaultVersion } from "../lists/zenithswap-default.json";
import { version as zenithswapExtendedVersion } from "../lists/zenithswap-extended.json";
import { version as zenithswapTop15Version } from "../lists/zenithswap-top-15.json";
import { version as zenithswapTop100Version } from "../lists/zenithswap-top-100.json";
import zenithswapDefault from "./tokens/zenithswap-default.json";
import zenithswapExtended from "./tokens/zenithswap-extended.json";
import zenithswapTop100 from "./tokens/zenithswap-top-100.json";
import zenithswapTop15 from "./tokens/zenithswap-top-15.json";

export enum VersionBump {
  "major" = "major",
  "minor" = "minor",
  "patch" = "patch",
}

type Version = {
  major: number;
  minor: number;
  patch: number;
};

const lists = {
  "zenithswap-default": {
    list: zenithswapDefault,
    name: "ZenithSwap Default",
    keywords: ["zenithswap", "default"],
    logoURI:
      "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82/logo.png",
    sort: false,
    currentVersion: zenithswapDefaultVersion,
  },
  "zenithswap-extended": {
    list: zenithswapExtended,
    name: "ZenithSwap Extended",
    keywords: ["zenithswap", "extended"],
    logoURI:
      "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82/logo.png",
    sort: true,
    currentVersion: zenithswapExtendedVersion,
  },
  "zenithswap-top-100": {
    list: zenithswapTop100,
    name: "ZenithSwap Top 100",
    keywords: ["zenithswap", "top 100"],
    logoURI:
      "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82/logo.png",
    sort: true,
    currentVersion: zenithswapTop100Version,
  },
  "zenithswap-top-15": {
    list: zenithswapTop15,
    name: "ZenithSwap Top 15",
    keywords: ["zenithswap", "top 15"],
    logoURI:
      "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82/logo.png",
    sort: true,
    currentVersion: zenithswapTop15Version,
  },
};

const getNextVersion = (currentVersion: Version, versionBump?: VersionBump) => {
  const { major, minor, patch } = currentVersion;
  switch (versionBump) {
    case VersionBump.major:
      return { major: major + 1, minor, patch };
    case VersionBump.minor:
      return { major, minor: minor + 1, patch };
    case VersionBump.patch:
    default:
      return { major, minor, patch: patch + 1 };
  }
};

export const buildList = (listName: string, versionBump?: VersionBump): TokenList => {
  const { list, name, keywords, logoURI, sort, currentVersion } = lists[listName];
  const version = getNextVersion(currentVersion, versionBump);
  return {
    name,
    timestamp: new Date().toISOString(),
    version,
    logoURI,
    keywords,
    // sort them by symbol for easy readability (not applied to default list)
    tokens: sort
      ? list.sort((t1, t2) => {
          if (t1.chainId === t2.chainId) {
            // CAKE first in extended list
            if ((t1.symbol === "CAKE") !== (t2.symbol === "CAKE")) {
              return t1.symbol === "CAKE" ? -1 : 1;
            }
            return t1.symbol.toLowerCase() < t2.symbol.toLowerCase() ? -1 : 1;
          }
          return t1.chainId < t2.chainId ? -1 : 1;
        })
      : list,
  };
};

export const saveList = (tokenList: TokenList, listName: string): void => {
  const tokenListPath = `${path.resolve()}/lists/${listName}.json`;
  const stringifiedList = JSON.stringify(tokenList, null, 2);
  fs.writeFileSync(tokenListPath, stringifiedList);
  console.info("Token list saved to ", tokenListPath);
};
