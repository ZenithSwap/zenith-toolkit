import fs from "fs";
import path from "path";
import { getAddress } from "@ethersproject/address";
import zenithswapDefault from "./tokens/zenithswap-default.json";
import zenithswapExtended from "./tokens/zenithswap-extended.json";
import zenithswapTop100 from "./tokens/zenithswap-top-100.json";
import zenithswapTop15 from "./tokens/zenithswap-top-15.json";

const lists = {
  "zenithswap-default": zenithswapDefault,
  "zenithswap-extended": zenithswapExtended,
  "zenithswap-top-100": zenithswapTop100,
  "zenithswap-top-15": zenithswapTop15
};

const checksumAddresses = (listName: string): void => {
  let badChecksumCount = 0;
  const listToChecksum = lists[listName];
  const updatedList = listToChecksum.reduce((tokenList, token) => {
    const checksummedAddress = getAddress(token.address);
    if (checksummedAddress !== token.address) {
      badChecksumCount += 1;
      const updatedToken = { ...token, address: checksummedAddress };
      return [...tokenList, updatedToken];
    }
    return [...tokenList, token];
  }, []);

  if (badChecksumCount > 0) {
    console.info(`Found and fixed ${badChecksumCount} non-checksummed addreses`);
    const tokenListPath = `${path.resolve()}/src/tokens/${listName}.json`;
    console.info("Saving updated list to ", tokenListPath);
    const stringifiedList = JSON.stringify(updatedList, null, 2);
    fs.writeFileSync(tokenListPath, stringifiedList);
    console.info("Checksumming done!");
  } else {
    console.info("All addresses are already checksummed");
  }
};

export default checksumAddresses;
