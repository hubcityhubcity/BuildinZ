# Polygon Genesis contract prototype — November 3, 2026

## Status: source and automated tests PASS; NOT deployable for public sale

- Draft source: [contracts/BuildinZGenesis.sol](../contracts/BuildinZGenesis.sol)
- Foundry tests: [test/BuildinZGenesis.t.sol](../test/BuildinZGenesis.t.sol)
- Foundry settings: [foundry.toml](../foundry.toml)
- CI evidence: [GitHub Actions run 41728482051](https://github.com/hubcityhubcity/BuildinZ/actions/runs/41728482051) — compilation and Solidity test job **passed** on November 3, 2026.
- Uses the audited OpenZeppelin Contracts **v5.6.1** tag in CI, plus forge-std v1.9.7. Pinned to explicit tags, not a changing development branch.
- No deployment address, live blockchain transactions, token sales, funded wallets or contract security audit.

## Scope implemented in this prelaunch draft

- Fixed 1,000-token max supply; sequential token IDs 1–1,000; per-call batch limit 20; no burns or replacement mints.
- ERC-721 transfer and ownership from OpenZeppelin; owner-only administration through Ownable2Step.
- Public mint disabled by default. Minting and owner allocations require metadata configuration to be permanently frozen first.
- Editable mint price in native wei, exact-payment enforcement, and owner-controlled withdraw function.
- IPFS-root folder validation and irreversible root freeze. For token 42 at Stage II, tokenURI format is: ipfs://CID/42/2.json.
- Each token starts at Stage I, can evolve only forward through II and III, cannot skip or go past III, and retains stage through ownership transfer.
- Only the current holder can trigger evolution, which is disabled by default.
- ERC-4906 MetadataUpdate event on evolution and interface support.
- Reentrancy protection around minting and withdraw; safe ERC-721 mint callbacks.

## Critical outstanding design/security gates

1. **No BRICK/points payment integration.** The current draft evolution call is *free* when manually enabled by the owner. This is strictly a testable lifecycle mechanism, not the approved Genesis evolution economics. Keep evolutions disabled; replace or extend this mechanism only after cross-workstream tokenomics are finalized and tested.
2. **Do not deploy this draft to mainnet.** Pricing, allowlist/reserved allocations, sale opening policy, treasury wallet details, admin multisig, metadata finalization, security review, and owner consent remain unresolved.
3. **Metadata content does not yet exist.** An IPFS-looking URI string is not evidence of a pinned, accessible asset. All 3,000 edition-stage files must pass artwork, JSON/URI, permanence, metadata and cache-refresh verification before any sale. Freezing an unverified CID can permanently brick token images.
4. The prototype's 1,000 planned token IDs and canonical identity mapping are enforced in offchain registry tooling, **not onchain as a per-token identity trait**. Verify correct mint/edition distribution and URI pairing, possibly with an immutable onchain commitment to the final release manifest.
5. Run fuzz/invariant, ownership-transfer, receiver callback, reentrancy, payments/withdraw, admin control, metadata consistency and gas tests; complete independent contract security review before any deployment.
6. Public testnet mint/evolve/transfer/marketplace metadata-refresh verification and production wallet UI are not implemented.
7. No compiler-bytecode verification or reproducible Polygon mainnet deployment process has been completed.

## Next bounded contract engineering batch

- Decide and implement a holder-authorized evolution settlement mechanism aligned with finalized points/BRICK policy without claiming a live token or liquidity.
- Add adversarial and invariant tests, then verify a publicly accessible testnet contract only after content storage and owner approval of nonfinancial testing scope.
- Review release URI layout against the actual metadata builder output before freezing a root.
- Keep the main site labeled demo; never advertise token sales before final owner authorization.

## Progress accounting

This work establishes a real compiled/tested **contract prototype**, but production contract, wallet integration, external review, testnet verification and mainnet authorization remain unchecked on the canonical launch checklist.
