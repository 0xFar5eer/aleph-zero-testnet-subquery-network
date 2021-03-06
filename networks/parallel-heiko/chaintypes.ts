export default {
    "types": {
      "Address": "MultiAddress",
      "LookupSource": "MultiAddress",
      "CurrencyId": {
        "_enum": ["DOT", "KSM", "USDT", "xDOT", "xKSM", "HKO", "PARA"]
      },
      "Currency": "CurrencyId",
      "CurrencyIdOf": "CurrencyId",
      "Amount": "i128",
      "AmountOf": "Amount",
      "Price": "FixedU128",
      "Timestamp": "u64",
      "Public": "AccountId",
      "PriceDetail": "(Price, Timestamp)",
      "PalletId": "MultiAddress",
      "Rate": "FixedU128",
      "Ratio": "Permill",
      "Payload": {
        "list": "Vec<PayloadDetail>",
        "public": "Public"
      },
      "PayloadDetail": {
        "price": "Price",
        "symbol": "CurrencyId",
        "timestamp": "Moment"
      },
      "Deposits": {
        "voucherBalance": "Balance",
        "isCollateral": "bool"
      },
      "BorrowSnapshot": {
        "principal": "Balance",
        "borrowIndex": "u128"
      },
      "EarnedSnapshot": {
        "totalEarnedPrior": "Balance",
        "exchangeRatePrior": "u128"
      },
      "Market": {
        "collateralFactor": "Ratio",
        "reserveFactor": "Ratio",
        "closeFactor": "Ratio",
        "liquidateIncentive": "Rate",
        "rateModel": "InterestRateModel",
        "state": "MarketState",
        "cap": "Balance",
        "ptokenId": "CurrencyId"
      },
      "MarketState": {
        "_enum": ["Active", "Pending", "Supervision"]
      },
      "PendingBalance": {
        "balance": "Balance",
        "timestamp": "Moment"
      },
      "WaitingForLiquidation": {
        "accountId": "Address",
        "liquidateToken": "CurrencyId",
        "collateralToken": "CurrencyId",
        "repayAmount": "Balance"
      },
      "OracleKey": "CurrencyId",
      "OracleValue": "PriceWithDecimal",
      "MomentOf": "Moment",
      "TimestampedValue": {
        "value": "OracleValue",
        "timestamp": "Moment"
      },
      "TimestampedValueOf": "TimestampedValue",
      "RpcDataProviderId": "Text",
      "DataProviderId": {
        "_enum": ["Aggregated"]
      },
      "OrderedSet": "Vec<AccountId>",
      "JumpModel": {
        "baseRate": "Rate",
        "jumpRate": "Rate",
        "fullRate": "Rate",
        "jumpUtilization": "Ratio"
      },
      "CurveModel": {
        "baseRate": "Rate"
      },
      "InterestRateModel": {
        "_enum": {
          "JumpModel": "JumpModel",
          "CurveModel": "CurveModel"
        }
      },
      "UnstakeInfo": {
        "amount": "Balance",
        "blockNumber": "u32",
        "eraIndex": "Option<u32>"
      },
      "OrmlAccountData": {
        "free": "Balance",
        "frozen": "Balance",
        "reserved": "Balance"
      },
      "OrmlBalanceLock": {
        "amount": "Balance",
        "id": "LockIdentifier"
      },
      "PriceWithDecimal": {
        "price": "Price",
        "decimal": "u8"
      },
      "Shortfall": "FixedU128",
      "Liquidity": "FixedU128",
      "ValidatorInfo": {
        "name": "Option<Text>",
        "address": "AccountId",
        "stakes": "u128",
        "score": "u128"
      },
      "ValidatorSet": "Vec<ValidatorInfo>",
      "OrmlVestingSchedule": {
        "start": "BlockNumber",
        "period": "BlockNumber",
        "periodCount": "u32",
        "perPeriod": "Compact<Balance>"
      },
      "VestingScheduleOf": "OrmlVestingSchedule"
    },
    "typesAlias": {
      "tokens": {
        "AccountData": "OrmlAccountData",
        "BalanceLock": "OrmlBalanceLock"
      }
    },
    "typesBundle": {
      "spec": {
        "parallel": {
          "rpc": {
            "oracle": {
              "getValue": {
                "description": "Retrieves the oracle value for a given key.",
                "params": [
                  {
                    "name": "providerId",
                    "type": "RpcDataProviderId"
                  },
                  {
                    "name": "key",
                    "type": "OracleKey"
                  },
                  {
                    "name": "at",
                    "type": "BlockHash",
                    "isHistoric": true,
                    "isOptional": true
                  }
                ],
                "type": "Option<TimestampedValue>",
                "isSubscription": false,
                "jsonrpc": "oracle_getValue",
                "method": "getValue",
                "section": "oracle"
              },
              "getAllValues": {
                "description": "Retrieves all oracle values.",
                "params": [
                  {
                    "name": "providerId",
                    "type": "RpcDataProviderId"
                  },
                  {
                    "name": "at",
                    "type": "BlockHash",
                    "isHistoric": true,
                    "isOptional": true
                  }
                ],
                "type": "Vec<(OracleKey, Option<TimestampedValue>)>",
                "isSubscription": false,
                "jsonrpc": "oracle_getAllValues",
                "method": "getAllValues",
                "section": "oracle"
              }
            },
            "loans": {
              "getAccountLiquidity": {
                "description": "Retrieves the liquidity of an user",
                "params": [
                  {
                    "name": "accountId",
                    "type": "AccountId"
                  },
                  {
                    "name": "at",
                    "type": "Option<Block>"
                  }
                ],
                "type": "(Liquidity, Shortfall)",
                "isSubscription": false,
                "jsonrpc": "loans_getAccountLiquidity",
                "method": "getAccountLiquidity",
                "section": "loans"
              }
            }
          }
        }
      }
    }
  }