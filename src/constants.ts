import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum ChainId {
  MAINNET = 2000,
  TESTNET = 69,
  HARDHAT = 31337
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

export const FACTORY_ADDRESS = '0xF4bc79D32A7dEfd87c8A9C100FD83206bbF19Af5'

export const INIT_CODE_HASH = '0xcac27a3deb12764156265fb78d54dcb0d65ecc938272597dd22a45ed05e02e7a'

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const _998 = JSBI.BigInt(998)
export const _1000 = JSBI.BigInt(1000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}
