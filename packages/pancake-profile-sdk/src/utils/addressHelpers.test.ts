import addresses from "../constants/contracts";
import { MAINNET_CHAIN_ID, TESTNET_CHAIN_ID } from "../constants/common";
import { getZenithProfileAddress } from "./addressHelpers";

describe("addressHelpers", () => {
  it("getAddress returns correct mainnet address", () => {
    const profileAddress = getZenithProfileAddress(MAINNET_CHAIN_ID);
    expect(profileAddress).toBe(addresses.zenithProfile[MAINNET_CHAIN_ID]);
  });
  it("getAddress returns correct testnet address", () => {
    const profileAddress = getZenithProfileAddress(TESTNET_CHAIN_ID);
    expect(profileAddress).toBe(addresses.zenithProfile[TESTNET_CHAIN_ID]);
  });
});
