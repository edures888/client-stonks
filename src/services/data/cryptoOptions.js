const cryptoOptions = [
  {
    value: { id: '78', name: 'Bitcoin US Dollar', decimal: '2', symbol: 'BTC/USD' },
    label: 'BTC/USD, Bitcoin US Dollar'
  },
  {
    value: { id: '79', name: 'Ethereum US Dollar', decimal: '2', symbol: 'ETH/USD' },
    label: 'ETH/USD, Ethereum US Dollar'
  },
  {
    value: { id: '80', name: 'XRP US Dollar', decimal: '5', symbol: 'XRP/USD' },
    label: 'XRP/USD, XRP US Dollar'
  },
  {
    value: { id: '81', name: 'Litecoin US Dollar', decimal: '2', symbol: 'LTC/USD' },
    label: 'LTC/USD, Litecoin US Dollar'
  },
  {
    value: { id: '82', name: 'Ethereum Classic US Dollar', decimal: '3', symbol: 'ETC/USD' },
    label: 'ETC/USD, Ethereum Classic US Dollar'
  },
  {
    value: { id: '83', name: 'XRP Euro', decimal: '5', symbol: 'XRP/EUR' },
    label: 'XRP/EUR, XRP Euro'
  },
  {
    value: { id: '84', name: 'Ethereum Euro', decimal: '2', symbol: 'ETH/EUR' },
    label: 'ETH/EUR, Ethereum Euro'
  },
  {
    value: { id: '85', name: 'Litecoin Euro', decimal: '2', symbol: 'LTC/EUR' },
    label: 'LTC/EUR, Litecoin Euro'
  },
  {
    value: { id: '86', name: 'Bitcoin Euro', decimal: '2', symbol: 'BTC/EUR' },
    label: 'BTC/EUR, Bitcoin Euro'
  },
  {
    value: { id: '87', name: 'Bitcoin Australian Dollar', decimal: '2', symbol: 'BTC/AUD' },
    label: 'BTC/AUD, Bitcoin Australian Dollar'
  },
  {
    value: { id: '88', name: 'Ethereum Australian Dollar', decimal: '2', symbol: 'ETH/AUD' },
    label: 'ETH/AUD, Ethereum Australian Dollar'
  },
  {
    value: { id: '89', name: 'XRP Australian Dollar', decimal: '2', symbol: 'XRP/AUD' },
    label: 'XRP/AUD, XRP Australian Dollar'
  },
  {
    value: { id: '90', name: 'Litecoin Australian Dollar', decimal: '2', symbol: 'LTC/AUD' },
    label: 'LTC/AUD, Litecoin Australian Dollar'
  },
  {
    value: {
      id: '91',
      name: 'Ethereum Classic Australian Dollar',
      decimal: '2',
      symbol: 'ETC/AUD'
    },
    label: 'ETC/AUD, Ethereum Classic Australian Dollar'
  },
  {
    value: { id: '92', name: 'Bitcoin Japanese Yen', decimal: '0', symbol: 'BTC/JPY' },
    label: 'BTC/JPY, Bitcoin Japanese Yen'
  },
  {
    value: { id: '93', name: 'Ethereum Japanese Yen', decimal: '0', symbol: 'ETH/JPY' },
    label: 'ETH/JPY, Ethereum Japanese Yen'
  },
  {
    value: { id: '94', name: 'Bitcoin British Pound', decimal: '2', symbol: 'BTC/GBP' },
    label: 'BTC/GBP, Bitcoin British Pound'
  },
  {
    value: { id: '95', name: 'Ethereum British Pound', decimal: '2', symbol: 'ETH/GBP' },
    label: 'ETH/GBP, Ethereum British Pound'
  },
  {
    value: { id: '96', name: 'Litecoin British Pound', decimal: '2', symbol: 'LTC/GBP' },
    label: 'LTC/GBP, Litecoin British Pound'
  },
  {
    value: { id: '97', name: 'XRP British Pound', decimal: '4', symbol: 'XRP/GBP' },
    label: 'XRP/GBP, XRP British Pound'
  },
  {
    value: { id: '98', name: 'Bitcoin Swiss Franc', decimal: '4', symbol: 'BTC/CHF' },
    label: 'BTC/CHF, Bitcoin Swiss Franc'
  },
  {
    value: { id: '99', name: 'Litecoin Swiss Franc', decimal: '2', symbol: 'LTC/CHF' },
    label: 'LTC/CHF, Litecoin Swiss Franc'
  },
  {
    value: { id: '100', name: 'XRP Swiss Franc', decimal: '4', symbol: 'XRP/CHF' },
    label: 'XRP/CHF, XRP Swiss Franc'
  },
  {
    value: { id: '101', name: 'Ethereum Swiss Franc', decimal: '2', symbol: 'ETH/CHF' },
    label: 'ETH/CHF, Ethereum Swiss Franc'
  },
  {
    value: { id: '102', name: 'Bitcoin Canadian Dollar', decimal: '2', symbol: 'BTC/CAD' },
    label: 'BTC/CAD, Bitcoin Canadian Dollar'
  },
  {
    value: { id: '103', name: 'XRP Canadian Dollar', decimal: '5', symbol: 'XRP/CAD' },
    label: 'XRP/CAD, XRP Canadian Dollar'
  },
  {
    value: { id: '104', name: 'Ethereum Canadian Dollar', decimal: '2', symbol: 'ETH/CAD' },
    label: 'ETH/CAD, Ethereum Canadian Dollar'
  },
  {
    value: { id: '105', name: 'Litecoin Canadian Dollar', decimal: '2', symbol: 'LTC/CAD' },
    label: 'LTC/CAD, Litecoin Canadian Dollar'
  },
  {
    value: { id: '106', name: 'Bitcoin New Zealand Dollar', decimal: '2', symbol: 'BTC/NZD' },
    label: 'BTC/NZD, Bitcoin New Zealand Dollar'
  },
  {
    value: {
      id: '107',
      name: 'Ethereum Classic South African Rand',
      decimal: '2',
      symbol: 'ETC/ZAR'
    },
    label: 'ETC/ZAR, Ethereum Classic South African Rand'
  },
  {
    value: { id: '108', name: 'Bitcoin South African Rand', decimal: '0', symbol: 'BTC/ZAR' },
    label: 'BTC/ZAR, Bitcoin South African Rand'
  },
  {
    value: { id: '109', name: 'XRP South African Rand', decimal: '4', symbol: 'XRP/ZAR' },
    label: 'XRP/ZAR, XRP South African Rand'
  },
  {
    value: { id: '110', name: 'Ethereum South African Rand', decimal: '2', symbol: 'ETH/ZAR' },
    label: 'ETH/ZAR, Ethereum South African Rand'
  },
  {
    value: { id: '111', name: 'Litecoin South African Rand', decimal: '2', symbol: 'LTC/ZAR' },
    label: 'LTC/ZAR, Litecoin South African Rand'
  },
  {
    value: { id: '2046', name: 'Litecoin Bitcoin', decimal: '8', symbol: 'LTC/BTC' },
    label: 'LTC/BTC, Litecoin Bitcoin'
  },
  {
    value: { id: '2047', name: 'Ethereum Bitcoin', decimal: '6', symbol: 'ETH/BTC' },
    label: 'ETH/BTC, Ethereum Bitcoin'
  },
  {
    value: { id: '2051', name: 'IOTA US Dollar', decimal: '5', symbol: 'IOTA/USD' },
    label: 'IOTA/USD, IOTA US Dollar'
  },
  {
    value: { id: '2052', name: 'Monero US Dollar', decimal: '2', symbol: 'XMR/USD' },
    label: 'XMR/USD, Monero US Dollar'
  },
  {
    value: { id: '2054', name: 'Dash US Dollar', decimal: '2', symbol: 'DASH/USD' },
    label: 'DASH/USD, Dash US Dollar'
  },
  {
    value: { id: '2055', name: 'NEO US Dollar', decimal: '4', symbol: 'NEO/USD' },
    label: 'NEO/USD, NEO US Dollar'
  },
  {
    value: { id: '2056', name: 'Zcash US Dollar', decimal: '2', symbol: 'ZEC/USD' },
    label: 'ZEC/USD, Zcash US Dollar'
  },
  {
    value: { id: '2059', name: '10M Token Ethereum', decimal: '8', symbol: '10MT/ETH' },
    label: '10MT/ETH, 10M Token Ethereum'
  },
  {
    value: { id: '2060', name: '10M Token US Dollar', decimal: '6', symbol: '10MT/USD' },
    label: '10MT/USD, 10M Token US Dollar'
  },
  {
    value: { id: '2069', name: '2GIVE US Dollar', decimal: '6', symbol: '2GIVE/USD' },
    label: '2GIVE/USD, 2GIVE US Dollar'
  },
  {
    value: { id: '2070', name: '300 Token Bitcoin', decimal: '6', symbol: '300/BTC' },
    label: '300/BTC, 300 Token Bitcoin'
  },
  {
    value: { id: '2073', name: '300 Token US Dollar', decimal: '2', symbol: '300/USD' },
    label: '300/USD, 300 Token US Dollar'
  },
  {
    value: { id: '2077', name: '42-coin US Dollar', decimal: '2', symbol: '42/USD' },
    label: '42/USD, 42-coin US Dollar'
  },
  {
    value: { id: '2078', name: 'SixEleven Bitcoin', decimal: '8', symbol: '611/BTC' },
    label: '611/BTC, SixEleven Bitcoin'
  },
  {
    value: { id: '2081', name: 'SixEleven US Dollar', decimal: '5', symbol: '611/USD' },
    label: '611/USD, SixEleven US Dollar'
  },
  {
    value: { id: '2083', name: '808Coin Dogecoin', decimal: '6', symbol: '808/DOGE' },
    label: '808/DOGE, 808Coin Dogecoin'
  },
  {
    value: { id: '2085', name: '808Coin US Dollar', decimal: '8', symbol: '808/USD' },
    label: '808/USD, 808Coin US Dollar'
  },
  {
    value: { id: '2089', name: 'OctoCoin US Dollar', decimal: '6', symbol: '888/USD' },
    label: '888/USD, OctoCoin US Dollar'
  },
  {
    value: { id: '2090', name: '8Bit Bitcoin', decimal: '8', symbol: '8BIT/BTC' },
    label: '8BIT/BTC, 8Bit Bitcoin'
  },
  {
    value: { id: '2093', name: '8Bit US Dollar', decimal: '5', symbol: '8BIT/USD' },
    label: '8BIT/USD, 8Bit US Dollar'
  },
  {
    value: { id: '2094', name: 'Acute Angle Cloud Bitcoin', decimal: '8', symbol: 'AAC/BTC' },
    label: 'AAC/BTC, Acute Angle Cloud Bitcoin'
  },
  {
    value: { id: '2095', name: 'Acute Angle Cloud Ethereum', decimal: '6', symbol: 'AAC/ETH' },
    label: 'AAC/ETH, Acute Angle Cloud Ethereum'
  },
  {
    value: { id: '2096', name: 'Acute Angle Cloud US Dollar', decimal: '6', symbol: 'AAC/USD' },
    label: 'AAC/USD, Acute Angle Cloud US Dollar'
  },
  {
    value: { id: '2097', name: 'ABBC Coin Bitcoin', decimal: '8', symbol: 'ABBC/BTC' },
    label: 'ABBC/BTC, ABBC Coin Bitcoin'
  },
  {
    value: { id: '2098', name: 'ABBC Coin Ethereum', decimal: '8', symbol: 'ABBC/ETH' },
    label: 'ABBC/ETH, ABBC Coin Ethereum'
  },
  {
    value: { id: '2099', name: 'ABBC Coin US Dollar', decimal: '6', symbol: 'ABBC/USD' },
    label: 'ABBC/USD, ABBC Coin US Dollar'
  },
  {
    value: { id: '2100', name: 'Alphabit Bitcoin', decimal: '6', symbol: 'ABC/BTC' },
    label: 'ABC/BTC, Alphabit Bitcoin'
  },
  {
    value: { id: '2103', name: 'Alphabit US Dollar', decimal: '3', symbol: 'ABC/USD' },
    label: 'ABC/USD, Alphabit US Dollar'
  },
  {
    value: { id: '2104', name: 'Abncoin Bitcoin', decimal: '8', symbol: 'ABN/BTC' },
    label: 'ABN/BTC, Abncoin Bitcoin'
  },
  {
    value: { id: '2105', name: 'Abncoin US Dollar', decimal: '6', symbol: 'ABN/USD' },
    label: 'ABN/USD, Abncoin US Dollar'
  },
  {
    value: { id: '2107', name: 'Arcblock Ethereum', decimal: '6', symbol: 'ABT/ETH' },
    label: 'ABT/ETH, Arcblock Ethereum'
  },
  {
    value: { id: '2108', name: 'Arcblock US Dollar', decimal: '5', symbol: 'ABT/USD' },
    label: 'ABT/USD, Arcblock US Dollar'
  },
  {
    value: { id: '2112', name: 'ArtByte US Dollar', decimal: '6', symbol: 'ABY/USD' },
    label: 'ABY/USD, ArtByte US Dollar'
  },
  {
    value: { id: '2116', name: 'AsiaCoin US Dollar', decimal: '6', symbol: 'AC/USD' },
    label: 'AC/USD, AsiaCoin US Dollar'
  },
  {
    value: { id: '2117', name: 'Alphacat Bitcoin', decimal: '8', symbol: 'ACAT/BTC' },
    label: 'ACAT/BTC, Alphacat Bitcoin'
  },
  {
    value: { id: '2118', name: 'Alphacat US Dollar', decimal: '6', symbol: 'ACAT/USD' },
    label: 'ACAT/USD, Alphacat US Dollar'
  },
  {
    value: { id: '2119', name: 'AdCoin Bitcoin', decimal: '8', symbol: 'ACC/BTC' },
    label: 'ACC/BTC, AdCoin Bitcoin'
  },
  {
    value: { id: '2123', name: 'AdCoin US Dollar', decimal: '6', symbol: 'ACC/USD' },
    label: 'ACC/USD, AdCoin US Dollar'
  },
  {
    value: { id: '2127', name: 'Aces Bitcoin', decimal: '8', symbol: 'ACES/BTC' },
    label: 'ACES/BTC, Aces Bitcoin'
  },
  {
    value: { id: '2128', name: 'Aces US Dollar', decimal: '6', symbol: 'ACES/USD' },
    label: 'ACES/USD, Aces US Dollar'
  },
  {
    value: { id: '2129', name: 'Avoncoin Bitcoin', decimal: '8', symbol: 'ACN/BTC' },
    label: 'ACN/BTC, Avoncoin Bitcoin'
  },
  {
    value: { id: '2130', name: 'Avoncoin US Dollar', decimal: '4', symbol: 'ACN/USD' },
    label: 'ACN/USD, Avoncoin US Dollar'
  },
  {
    value: { id: '2134', name: 'Acoin US Dollar', decimal: '6', symbol: 'ACOIN/USD' },
    label: 'ACOIN/USD, Acoin US Dollar'
  },
  {
    value: { id: '2135', name: 'AnarchistsPrime Bitcoin', decimal: '8', symbol: 'ACP/BTC' },
    label: 'ACP/BTC, AnarchistsPrime Bitcoin'
  },
  {
    value: { id: '2136', name: 'AnarchistsPrime US Dollar', decimal: '6', symbol: 'ACP/USD' },
    label: 'ACP/USD, AnarchistsPrime US Dollar'
  },
  {
    value: { id: '2138', name: 'Achain Bitcoin', decimal: '8', symbol: 'ACT/BTC' },
    label: 'ACT/BTC, Achain Bitcoin'
  },
  {
    value: { id: '2140', name: 'Achain US Dollar', decimal: '5', symbol: 'ACT/USD' },
    label: 'ACT/USD, Achain US Dollar'
  },
  {
    value: { id: '2141', name: 'Cardano Australian Dollar', decimal: '5', symbol: 'ADA/AUD' },
    label: 'ADA/AUD, Cardano Australian Dollar'
  },
  {
    value: { id: '2142', name: 'Cardano Binance Coin', decimal: '6', symbol: 'ADA/BNB' },
    label: 'ADA/BNB, Cardano Binance Coin'
  },
  {
    value: { id: '2143', name: 'Cardano Bitcoin', decimal: '8', symbol: 'ADA/BTC' },
    label: 'ADA/BTC, Cardano Bitcoin'
  },
  {
    value: { id: '2144', name: 'Cardano Canadian Dollar', decimal: '5', symbol: 'ADA/CAD' },
    label: 'ADA/CAD, Cardano Canadian Dollar'
  },
  {
    value: { id: '2145', name: 'Cardano Chinese Yuan', decimal: '5', symbol: 'ADA/CNY' },
    label: 'ADA/CNY, Cardano Chinese Yuan'
  },
  {
    value: { id: '2146', name: 'Cardano Ethereum', decimal: '6', symbol: 'ADA/ETH' },
    label: 'ADA/ETH, Cardano Ethereum'
  },
  {
    value: { id: '2147', name: 'Cardano Euro', decimal: '6', symbol: 'ADA/EUR' },
    label: 'ADA/EUR, Cardano Euro'
  },
  {
    value: { id: '2148', name: 'Cardano Hong Kong Dollar', decimal: '5', symbol: 'ADA/HKD' },
    label: 'ADA/HKD, Cardano Hong Kong Dollar'
  },
  {
    value: { id: '2149', name: 'Cardano Israeli Shekel', decimal: '5', symbol: 'ADA/ILS' },
    label: 'ADA/ILS, Cardano Israeli Shekel'
  },
  {
    value: { id: '2150', name: 'Cardano Indian Rupee', decimal: '4', symbol: 'ADA/INR' },
    label: 'ADA/INR, Cardano Indian Rupee'
  },
  {
    value: { id: '2152', name: 'Cardano Mexican Peso', decimal: '4', symbol: 'ADA/MXN' },
    label: 'ADA/MXN, Cardano Mexican Peso'
  },
  {
    value: { id: '2153', name: 'Cardano Malaysian Ringgit', decimal: '5', symbol: 'ADA/MYR' },
    label: 'ADA/MYR, Cardano Malaysian Ringgit'
  },
  {
    value: { id: '2154', name: 'Cardano Polish Zloty', decimal: '5', symbol: 'ADA/PLN' },
    label: 'ADA/PLN, Cardano Polish Zloty'
  },
  {
    value: { id: '2155', name: 'Cardano Russian Ruble', decimal: '4', symbol: 'ADA/RUB' },
    label: 'ADA/RUB, Cardano Russian Ruble'
  },
  {
    value: { id: '2156', name: 'Cardano Saudi Riyal', decimal: '5', symbol: 'ADA/SAR' },
    label: 'ADA/SAR, Cardano Saudi Riyal'
  },
  {
    value: { id: '2157', name: 'Cardano Swedish Krona', decimal: '5', symbol: 'ADA/SEK' },
    label: 'ADA/SEK, Cardano Swedish Krona'
  },
  {
    value: { id: '2158', name: 'Cardano Thai Baht', decimal: '2', symbol: 'ADA/THB' },
    label: 'ADA/THB, Cardano Thai Baht'
  },
  {
    value: { id: '2159', name: 'Cardano Turkish Lira', decimal: '2', symbol: 'ADA/TRY' },
    label: 'ADA/TRY, Cardano Turkish Lira'
  },
  {
    value: { id: '2160', name: 'Cardano US Dollar', decimal: '5', symbol: 'ADA/USD' },
    label: 'ADA/USD, Cardano US Dollar'
  },
  {
    value: { id: '2161', name: 'Cardano Vietnamese Dong', decimal: '2', symbol: 'ADA/VND' },
    label: 'ADA/VND, Cardano Vietnamese Dong'
  },
  {
    value: { id: '2162', name: 'Cardano South African Rand', decimal: '5', symbol: 'ADA/ZAR' },
    label: 'ADA/ZAR, Cardano South African Rand'
  },
  {
    value: { id: '2166', name: 'AudioCoin US Dollar', decimal: '6', symbol: 'ADC/USD' },
    label: 'ADC/USD, AudioCoin US Dollar'
  },
  {
    value: { id: '2167', name: 'Asiadigicoin Bitcoin', decimal: '8', symbol: 'ADCN/BTC' },
    label: 'ADCN/BTC, Asiadigicoin Bitcoin'
  },
  {
    value: { id: '2168', name: 'Asiadigicoin US Dollar', decimal: '6', symbol: 'ADCN/USD' },
    label: 'ADCN/USD, Asiadigicoin US Dollar'
  },
  {
    value: { id: '2173', name: 'AdShares US Dollar', decimal: '5', symbol: 'ADST/USD' },
    label: 'ADST/USD, AdShares US Dollar'
  },
  {
    value: { id: '2174', name: 'adToken Bitcoin', decimal: '8', symbol: 'ADT/BTC' },
    label: 'ADT/BTC, adToken Bitcoin'
  },
  {
    value: { id: '2176', name: 'adToken US Dollar', decimal: '6', symbol: 'ADT/USD' },
    label: 'ADT/USD, adToken US Dollar'
  },
  {
    value: { id: '2178', name: 'AdEx Bitcoin', decimal: '6', symbol: 'ADX/BTC' },
    label: 'ADX/BTC, AdEx Bitcoin'
  },
  {
    value: { id: '2179', name: 'AdEx Ethereum', decimal: '6', symbol: 'ADX/ETH' },
    label: 'ADX/ETH, AdEx Ethereum'
  },
  {
    value: { id: '2184', name: 'Aeternity Bitcoin', decimal: '6', symbol: 'AE/BTC' },
    label: 'AE/BTC, Aeternity Bitcoin'
  },
  {
    value: { id: '2185', name: 'Aeternity Ethereum', decimal: '6', symbol: 'AE/ETH' },
    label: 'AE/ETH, Aeternity Ethereum'
  },
  {
    value: { id: '2186', name: 'Aeternity Korean Won', decimal: '0', symbol: 'AE/KRW' },
    label: 'AE/KRW, Aeternity Korean Won'
  },
  {
    value: { id: '2187', name: 'Aeternity US Dollar', decimal: '5', symbol: 'AE/USD' },
    label: 'AE/USD, Aeternity US Dollar'
  },
  {
    value: { id: '2188', name: 'AEON Bitcoin', decimal: '6', symbol: 'AEON/BTC' },
    label: 'AEON/BTC, AEON Bitcoin'
  },
  {
    value: { id: '2189', name: 'AEON US Dollar', decimal: '5', symbol: 'AEON/USD' },
    label: 'AEON/USD, AEON US Dollar'
  },
  {
    value: { id: '2190', name: 'Aerium Bitcoin', decimal: '8', symbol: 'AERM/BTC' },
    label: 'AERM/BTC, Aerium Bitcoin'
  },
  {
    value: { id: '2191', name: 'Aerium US Dollar', decimal: '6', symbol: 'AERM/USD' },
    label: 'AERM/USD, Aerium US Dollar'
  },
  {
    value: { id: '2193', name: 'SingularityNET Bitcoin', decimal: '8', symbol: 'AGI/BTC' },
    label: 'AGI/BTC, SingularityNET Bitcoin'
  },
  {
    value: { id: '2195', name: 'SingularityNET US Dollar', decimal: '6', symbol: 'AGI/USD' },
    label: 'AGI/USD, SingularityNET US Dollar'
  },
  {
    value: { id: '2196', name: 'Agoras Tokens Bitcoin', decimal: '6', symbol: 'AGRS/BTC' },
    label: 'AGRS/BTC, Agoras Tokens Bitcoin'
  },
  {
    value: { id: '2197', name: 'Agoras Tokens US Dollar', decimal: '5', symbol: 'AGRS/USD' },
    label: 'AGRS/USD, Agoras Tokens US Dollar'
  },
  {
    value: { id: '2198', name: 'AgaveCoin Bitcoin', decimal: '8', symbol: 'AGVC/BTC' },
    label: 'AGVC/BTC, AgaveCoin Bitcoin'
  },
  {
    value: { id: '2199', name: 'AgaveCoin US Dollar', decimal: '6', symbol: 'AGVC/USD' },
    label: 'AGVC/USD, AgaveCoin US Dollar'
  },
  {
    value: { id: '2200', name: 'Bowhead Bitcoin', decimal: '8', symbol: 'AHT/BTC' },
    label: 'AHT/BTC, Bowhead Bitcoin'
  },
  {
    value: { id: '2201', name: 'Bowhead US Dollar', decimal: '6', symbol: 'AHT/USD' },
    label: 'AHT/USD, Bowhead US Dollar'
  },
  {
    value: { id: '2203', name: 'POLY AI Bitcoin', decimal: '8', symbol: 'AI/BTC' },
    label: 'AI/BTC, POLY AI Bitcoin'
  },
  {
    value: { id: '2205', name: 'POLY AI US Dollar', decimal: '6', symbol: 'AI/USD' },
    label: 'AI/USD, POLY AI US Dollar'
  },
  {
    value: {
      id: '2206',
      name: 'Advanced Internet Blocks Ethereum',
      decimal: '7',
      symbol: 'AIB/ETH'
    },
    label: 'AIB/ETH, Advanced Internet Blocks Ethereum'
  },
  {
    value: {
      id: '2207',
      name: 'Advanced Internet Blocks US Dollar',
      decimal: '6',
      symbol: 'AIB/USD'
    },
    label: 'AIB/USD, Advanced Internet Blocks US Dollar'
  },
  {
    value: { id: '2208', name: 'AI Doctor Bitcoin', decimal: '8', symbol: 'AIDOC/BTC' },
    label: 'AIDOC/BTC, AI Doctor Bitcoin'
  },
  {
    value: { id: '2209', name: 'AI Doctor Ethereum', decimal: '8', symbol: 'AIDOC/ETH' },
    label: 'AIDOC/ETH, AI Doctor Ethereum'
  },
  {
    value: { id: '2211', name: 'Aion Binance Coin', decimal: '6', symbol: 'AION/BNB' },
    label: 'AION/BNB, Aion Binance Coin'
  },
  {
    value: { id: '2212', name: 'Aion Bitcoin', decimal: '6', symbol: 'AION/BTC' },
    label: 'AION/BTC, Aion Bitcoin'
  },
  {
    value: { id: '2213', name: 'Aion Ethereum', decimal: '6', symbol: 'AION/ETH' },
    label: 'AION/ETH, Aion Ethereum'
  },
  {
    value: { id: '2215', name: 'Aion US Dollar', decimal: '5', symbol: 'AION/USD' },
    label: 'AION/USD, Aion US Dollar'
  },
  {
    value: { id: '2216', name: 'AirToken Bitcoin', decimal: '8', symbol: 'AIR/BTC' },
    label: 'AIR/BTC, AirToken Bitcoin'
  },
  {
    value: { id: '2218', name: 'AirToken US Dollar', decimal: '6', symbol: 'AIR/USD' },
    label: 'AIR/USD, AirToken US Dollar'
  },
  {
    value: { id: '2221', name: 'Aigang US Dollar', decimal: '6', symbol: 'AIX/USD' },
    label: 'AIX/USD, Aigang US Dollar'
  },
  {
    value: { id: '2222', name: 'Akuya Coin Bitcoin', decimal: '8', symbol: 'AKY/BTC' },
    label: 'AKY/BTC, Akuya Coin Bitcoin'
  },
  {
    value: { id: '2223', name: 'Akuya Coin US Dollar', decimal: '6', symbol: 'AKY/USD' },
    label: 'AKY/USD, Akuya Coin US Dollar'
  },
  {
    value: { id: '2228', name: 'ALIS US Dollar', decimal: '6', symbol: 'ALIS/USD' },
    label: 'ALIS/USD, ALIS US Dollar'
  },
  {
    value: { id: '2230', name: 'ALQO US Dollar', decimal: '5', symbol: 'ALQO/USD' },
    label: 'ALQO/USD, ALQO US Dollar'
  },
  {
    value: { id: '2231', name: 'Altcoin Bitcoin', decimal: '6', symbol: 'ALT/BTC' },
    label: 'ALT/BTC, Altcoin Bitcoin'
  },
  {
    value: { id: '2234', name: 'Altcoin US Dollar', decimal: '4', symbol: 'ALT/USD' },
    label: 'ALT/USD, Altcoin US Dollar'
  },
  {
    value: { id: '2235', name: 'Antilitecoin Bitcoin', decimal: '8', symbol: 'ALTC/BTC' },
    label: 'ALTC/BTC, Antilitecoin Bitcoin'
  },
  {
    value: { id: '2236', name: 'Antilitecoin US Dollar', decimal: '6', symbol: 'ALTC/USD' },
    label: 'ALTC/USD, Antilitecoin US Dollar'
  },
  {
    value: { id: '2237', name: 'AltCommunity Coin Bitcoin', decimal: '8', symbol: 'ALTCOM/BTC' },
    label: 'ALTCOM/BTC, AltCommunity Coin Bitcoin'
  },
  {
    value: { id: '2238', name: 'AltCommunity Coin US Dollar', decimal: '6', symbol: 'ALTCOM/USD' },
    label: 'ALTCOM/USD, AltCommunity Coin US Dollar'
  },
  {
    value: { id: '2240', name: 'Ambrosus Bitcoin', decimal: '8', symbol: 'AMB/BTC' },
    label: 'AMB/BTC, Ambrosus Bitcoin'
  },
  {
    value: { id: '2242', name: 'Ambrosus US Dollar', decimal: '5', symbol: 'AMB/USD' },
    label: 'AMB/USD, Ambrosus US Dollar'
  },
  {
    value: { id: '2243', name: 'AmberCoin Bitcoin', decimal: '8', symbol: 'AMBER/BTC' },
    label: 'AMBER/BTC, AmberCoin Bitcoin'
  },
  {
    value: { id: '2244', name: 'AmberCoin US Dollar', decimal: '6', symbol: 'AMBER/USD' },
    label: 'AMBER/USD, AmberCoin US Dollar'
  },
  {
    value: { id: '2249', name: 'Ammo Reloaded Bitcoin', decimal: '8', symbol: 'AMMO/BTC' },
    label: 'AMMO/BTC, Ammo Reloaded Bitcoin'
  },
  {
    value: { id: '2250', name: 'Ammo Reloaded US Dollar', decimal: '6', symbol: 'AMMO/USD' },
    label: 'AMMO/USD, Ammo Reloaded US Dollar'
  },
  {
    value: { id: '2251', name: 'Synereo Bitcoin', decimal: '8', symbol: 'AMP/BTC' },
    label: 'AMP/BTC, Synereo Bitcoin'
  },
  {
    value: { id: '2254', name: 'Synereo US Dollar', decimal: '5', symbol: 'AMP/USD' },
    label: 'AMP/USD, Synereo US Dollar'
  },
  {
    value: { id: '2255', name: 'AmsterdamCoin Bitcoin', decimal: '8', symbol: 'AMS/BTC' },
    label: 'AMS/BTC, AmsterdamCoin Bitcoin'
  },
  {
    value: { id: '2256', name: 'AmsterdamCoin US Dollar', decimal: '6', symbol: 'AMS/USD' },
    label: 'AMS/USD, AmsterdamCoin US Dollar'
  },
  {
    value: { id: '2257', name: 'Animecoin Bitcoin', decimal: '8', symbol: 'ANI/BTC' },
    label: 'ANI/BTC, Animecoin Bitcoin'
  },
  {
    value: { id: '2260', name: 'Animecoin US Dollar', decimal: '6', symbol: 'ANI/USD' },
    label: 'ANI/USD, Animecoin US Dollar'
  },
  {
    value: { id: '2261', name: 'Aragon Bitcoin', decimal: '6', symbol: 'ANT/BTC' },
    label: 'ANT/BTC, Aragon Bitcoin'
  },
  {
    value: { id: '2262', name: 'Aragon Ethereum', decimal: '6', symbol: 'ANT/ETH' },
    label: 'ANT/ETH, Aragon Ethereum'
  },
  {
    value: { id: '2265', name: 'AntiBitcoin Bitcoin', decimal: '8', symbol: 'ANTI/BTC' },
    label: 'ANTI/BTC, AntiBitcoin Bitcoin'
  },
  {
    value: { id: '2266', name: 'AntiBitcoin US Dollar', decimal: '6', symbol: 'ANTI/USD' },
    label: 'ANTI/USD, AntiBitcoin US Dollar'
  },
  {
    value: { id: '2267', name: 'Antimatter Bitcoin', decimal: '8', symbol: 'ANTX/BTC' },
    label: 'ANTX/BTC, Antimatter Bitcoin'
  },
  {
    value: { id: '2268', name: 'Antimatter US Dollar', decimal: '6', symbol: 'ANTX/USD' },
    label: 'ANTX/USD, Antimatter US Dollar'
  },
  {
    value: { id: '2269', name: 'Aurora Bitcoin', decimal: '8', symbol: 'AOAR/BTC' },
    label: 'AOAR/BTC, Aurora Bitcoin'
  },
  {
    value: { id: '2271', name: 'Aurora US Dollar', decimal: '6', symbol: 'AOAR/USD' },
    label: 'AOAR/USD, Aurora US Dollar'
  },
  {
    value: { id: '2273', name: 'APIS US Dollar', decimal: '4', symbol: 'APIS/USD' },
    label: 'APIS/USD, APIS US Dollar'
  },
  {
    value: { id: '2276', name: 'Apollo Currency US Dollar', decimal: '6', symbol: 'APL/USD' },
    label: 'APL/USD, Apollo Currency US Dollar'
  },
  {
    value: { id: '2278', name: 'AppCoins Bitcoin', decimal: '8', symbol: 'APPC/BTC' },
    label: 'APPC/BTC, AppCoins Bitcoin'
  },
  {
    value: { id: '2280', name: 'AppCoins US Dollar', decimal: '5', symbol: 'APPC/USD' },
    label: 'APPC/USD, AppCoins US Dollar'
  },
  {
    value: { id: '2281', name: 'APX Bitcoin', decimal: '6', symbol: 'APX/BTC' },
    label: 'APX/BTC, APX Bitcoin'
  },
  {
    value: { id: '2284', name: 'APX US Dollar', decimal: '4', symbol: 'APX/USD' },
    label: 'APX/USD, APX US Dollar'
  },
  {
    value: { id: '2285', name: 'ARbit Bitcoin', decimal: '8', symbol: 'ARB/BTC' },
    label: 'ARB/BTC, ARbit Bitcoin'
  },
  {
    value: { id: '2286', name: 'ARbit US Dollar', decimal: '6', symbol: 'ARB/USD' },
    label: 'ARB/USD, ARbit US Dollar'
  },
  {
    value: { id: '2288', name: 'ARBITRAGE US Dollar', decimal: '4', symbol: 'ARBI/USD' },
    label: 'ARBI/USD, ARBITRAGE US Dollar'
  },
  {
    value: {
      id: '2291',
      name: 'Advanced Technology Coin Ethereum',
      decimal: '2',
      symbol: 'ARC/ETH'
    },
    label: 'ARC/ETH, Advanced Technology Coin Ethereum'
  },
  {
    value: {
      id: '2293',
      name: 'Advanced Technology Coin US Dollar',
      decimal: '6',
      symbol: 'ARC/USD'
    },
    label: 'ARC/USD, Advanced Technology Coin US Dollar'
  },
  {
    value: { id: '2297', name: 'AquariusCoin US Dollar', decimal: '5', symbol: 'ARCO/USD' },
    label: 'ARCO/USD, AquariusCoin US Dollar'
  },
  {
    value: { id: '2299', name: 'Ardor Bitcoin', decimal: '8', symbol: 'ARDR/BTC' },
    label: 'ARDR/BTC, Ardor Bitcoin'
  },
  {
    value: { id: '2300', name: 'Ardor Ethereum', decimal: '8', symbol: 'ARDR/ETH' },
    label: 'ARDR/ETH, Ardor Ethereum'
  },
  {
    value: { id: '2301', name: 'Ardor Korean Won', decimal: '2', symbol: 'ARDR/KRW' },
    label: 'ARDR/KRW, Ardor Korean Won'
  },
  {
    value: { id: '2302', name: 'Ardor US Dollar', decimal: '5', symbol: 'ARDR/USD' },
    label: 'ARDR/USD, Ardor US Dollar'
  },
  {
    value: { id: '2306', name: 'Argentum US Dollar', decimal: '5', symbol: 'ARG/USD' },
    label: 'ARG/USD, Argentum US Dollar'
  },
  {
    value: { id: '2310', name: 'Argus US Dollar', decimal: '6', symbol: 'ARGUS/USD' },
    label: 'ARGUS/USD, Argus US Dollar'
  },
  {
    value: { id: '2311', name: 'Aricoin Bitcoin', decimal: '8', symbol: 'ARI/BTC' },
    label: 'ARI/BTC, Aricoin Bitcoin'
  },
  {
    value: { id: '2314', name: 'Aricoin US Dollar', decimal: '6', symbol: 'ARI/USD' },
    label: 'ARI/USD, Aricoin US Dollar'
  },
  {
    value: { id: '2315', name: 'Ark Australian Dollar', decimal: '5', symbol: 'ARK/AUD' },
    label: 'ARK/AUD, Ark Australian Dollar'
  },
  {
    value: { id: '2316', name: 'Ark Bitcoin', decimal: '6', symbol: 'ARK/BTC' },
    label: 'ARK/BTC, Ark Bitcoin'
  },
  {
    value: { id: '2319', name: 'Ark Korean Won', decimal: '2', symbol: 'ARK/KRW' },
    label: 'ARK/KRW, Ark Korean Won'
  },
  {
    value: { id: '2321', name: 'Ark US Dollar', decimal: '5', symbol: 'ARK/USD' },
    label: 'ARK/USD, Ark US Dollar'
  },
  {
    value: { id: '2324', name: 'Aeron US Dollar', decimal: '5', symbol: 'ARN/USD' },
    label: 'ARN/USD, Aeron US Dollar'
  },
  {
    value: { id: '2326', name: 'Maecenas Bitcoin', decimal: '7', symbol: 'ART/BTC' },
    label: 'ART/BTC, Maecenas Bitcoin'
  },
  {
    value: { id: '2328', name: 'Maecenas US Dollar', decimal: '5', symbol: 'ART/USD' },
    label: 'ART/USD, Maecenas US Dollar'
  },
  {
    value: { id: '2329', name: 'AllSafe Bitcoin', decimal: '8', symbol: 'ASAFE2/BTC' },
    label: 'ASAFE2/BTC, AllSafe Bitcoin'
  },
  {
    value: { id: '2330', name: 'AllSafe US Dollar', decimal: '6', symbol: 'ASAFE2/USD' },
    label: 'ASAFE2/USD, AllSafe US Dollar'
  },
  {
    value: { id: '2331', name: 'Aseancoin Bitcoin', decimal: '8', symbol: 'ASN/BTC' },
    label: 'ASN/BTC, Aseancoin Bitcoin'
  },
  {
    value: { id: '2332', name: 'Aseancoin US Dollar', decimal: '6', symbol: 'ASN/USD' },
    label: 'ASN/USD, Aseancoin US Dollar'
  },
  {
    value: { id: '2333', name: 'AirSwap Bitcoin', decimal: '8', symbol: 'AST/BTC' },
    label: 'AST/BTC, AirSwap Bitcoin'
  },
  {
    value: { id: '2336', name: 'Astro Ethereum', decimal: '6', symbol: 'ASTRO/ETH' },
    label: 'ASTRO/ETH, Astro Ethereum'
  },
  {
    value: { id: '2337', name: 'Astro US Dollar', decimal: '5', symbol: 'ASTRO/USD' },
    label: 'ASTRO/USD, Astro US Dollar'
  },
  {
    value: { id: '2338', name: 'ATBCoin Bitcoin', decimal: '8', symbol: 'ATB/BTC' },
    label: 'ATB/BTC, ATBCoin Bitcoin'
  },
  {
    value: { id: '2339', name: 'ATBCoin US Dollar', decimal: '6', symbol: 'ATB/USD' },
    label: 'ATB/USD, ATBCoin US Dollar'
  },
  {
    value: { id: '2341', name: 'ATC Coin US Dollar', decimal: '4', symbol: 'ATCC/USD' },
    label: 'ATCC/USD, ATC Coin US Dollar'
  },
  {
    value: { id: '2342', name: 'ATLANT Bitcoin', decimal: '8', symbol: 'ATL/BTC' },
    label: 'ATL/BTC, ATLANT Bitcoin'
  },
  {
    value: { id: '2344', name: 'ATLANT US Dollar', decimal: '6', symbol: 'ATL/USD' },
    label: 'ATL/USD, ATLANT US Dollar'
  },
  {
    value: { id: '2345', name: 'ATMChain Bitcoin', decimal: '8', symbol: 'ATM/BTC' },
    label: 'ATM/BTC, ATMChain Bitcoin'
  },
  {
    value: { id: '2348', name: 'Atonomi Ethereum', decimal: '8', symbol: 'ATMI/ETH' },
    label: 'ATMI/ETH, Atonomi Ethereum'
  },
  {
    value: { id: '2349', name: 'Atonomi US Dollar', decimal: '8', symbol: 'ATMI/USD' },
    label: 'ATMI/USD, Atonomi US Dollar'
  },
  {
    value: { id: '2353', name: 'Atmos US Dollar', decimal: '6', symbol: 'ATMS/USD' },
    label: 'ATMS/USD, Atmos US Dollar'
  },
  {
    value: { id: '2354', name: 'ATN Ethereum', decimal: '4', symbol: 'ATN/ETH' },
    label: 'ATN/ETH, ATN Ethereum'
  },
  {
    value: { id: '2355', name: 'ATN US Dollar', decimal: '4', symbol: 'ATN/USD' },
    label: 'ATN/USD, ATN US Dollar'
  },
  {
    value: { id: '2359', name: 'Atomic Coin US Dollar', decimal: '6', symbol: 'ATOM/USD' },
    label: 'ATOM/USD, Atomic Coin US Dollar'
  },
  {
    value: { id: '2361', name: 'Authorship US Dollar', decimal: '6', symbol: 'ATS/USD' },
    label: 'ATS/USD, Authorship US Dollar'
  },
  {
    value: { id: '2362', name: 'Artex Coin Bitcoin', decimal: '8', symbol: 'ATX/BTC' },
    label: 'ATX/BTC, Artex Coin Bitcoin'
  },
  {
    value: { id: '2363', name: 'Artex Coin US Dollar', decimal: '6', symbol: 'ATX/USD' },
    label: 'ATX/USD, Artex Coin US Dollar'
  },
  {
    value: { id: '2364', name: 'Aston Bitcoin', decimal: '8', symbol: 'ATXN/BTC' },
    label: 'ATXN/BTC, Aston Bitcoin'
  },
  {
    value: { id: '2365', name: 'Aston US Dollar', decimal: '6', symbol: 'ATXN/USD' },
    label: 'ATXN/USD, Aston US Dollar'
  },
  {
    value: { id: '2366', name: 'AurumCoin Bitcoin', decimal: '6', symbol: 'AU/BTC' },
    label: 'AU/BTC, AurumCoin Bitcoin'
  },
  {
    value: { id: '2369', name: 'AurumCoin US Dollar', decimal: '4', symbol: 'AU/USD' },
    label: 'AU/USD, AurumCoin US Dollar'
  },
  {
    value: { id: '2373', name: 'Auroracoin US Dollar', decimal: '5', symbol: 'AUR/USD' },
    label: 'AUR/USD, Auroracoin US Dollar'
  },
  {
    value: { id: '2374', name: 'Aurora-DAO Ethereum', decimal: '8', symbol: 'AURA/ETH' },
    label: 'AURA/ETH, Aurora-DAO Ethereum'
  },
  {
    value: { id: '2375', name: 'Aurora-DAO US Dollar', decimal: '8', symbol: 'AURA/USD' },
    label: 'AURA/USD, Aurora-DAO US Dollar'
  },
  {
    value: { id: '2378', name: 'Cube US Dollar', decimal: '6', symbol: 'AUTO/USD' },
    label: 'AUTO/USD, Cube US Dollar'
  },
  {
    value: { id: '2379', name: 'AvatarCoin Bitcoin', decimal: '8', symbol: 'AV/BTC' },
    label: 'AV/BTC, AvatarCoin Bitcoin'
  },
  {
    value: { id: '2380', name: 'AvatarCoin US Dollar', decimal: '6', symbol: 'AV/USD' },
    label: 'AV/USD, AvatarCoin US Dollar'
  },
  {
    value: { id: '2383', name: 'Aventus Ethereum', decimal: '6', symbol: 'AVT/ETH' },
    label: 'AVT/ETH, Aventus Ethereum'
  },
  {
    value: { id: '2384', name: 'Aventus US Dollar', decimal: '5', symbol: 'AVT/USD' },
    label: 'AVT/USD, Aventus US Dollar'
  },
  {
    value: { id: '2385', name: 'AWARE Bitcoin', decimal: '8', symbol: 'AWR/BTC' },
    label: 'AWR/BTC, AWARE Bitcoin'
  },
  {
    value: { id: '2388', name: 'AWARE US Dollar', decimal: '6', symbol: 'AWR/USD' },
    label: 'AWR/USD, AWARE US Dollar'
  },
  {
    value: { id: '2389', name: 'Axiom Bitcoin', decimal: '8', symbol: 'AXIOM/BTC' },
    label: 'AXIOM/BTC, Axiom Bitcoin'
  },
  {
    value: { id: '2390', name: 'Axiom US Dollar', decimal: '6', symbol: 'AXIOM/USD' },
    label: 'AXIOM/USD, Axiom US Dollar'
  },
  {
    value: { id: '2391', name: 'aXpire Bitcoin', decimal: '8', symbol: 'AXPR/BTC' },
    label: 'AXPR/BTC, aXpire Bitcoin'
  },
  {
    value: { id: '2392', name: 'aXpire Ethereum', decimal: '7', symbol: 'AXPR/ETH' },
    label: 'AXPR/ETH, aXpire Ethereum'
  },
  {
    value: { id: '2393', name: 'aXpire US Dollar', decimal: '6', symbol: 'AXPR/USD' },
    label: 'AXPR/USD, aXpire US Dollar'
  },
  {
    value: { id: '2396', name: 'B2BX US Dollar', decimal: '5', symbol: 'B2B/USD' },
    label: 'B2B/USD, B2BX US Dollar'
  },
  {
    value: { id: '2401', name: 'BitAlphaCoin Bitcoin', decimal: '8', symbol: 'BAC/BTC' },
    label: 'BAC/BTC, BitAlphaCoin Bitcoin'
  },
  {
    value: { id: '2403', name: 'BitAlphaCoin US Dollar', decimal: '6', symbol: 'BAC/USD' },
    label: 'BAC/USD, BitAlphaCoin US Dollar'
  },
  {
    value: { id: '2404', name: 'Banano Coin Bitcoin', decimal: '8', symbol: 'BAN/BTC' },
    label: 'BAN/BTC, Banano Coin Bitcoin'
  },
  {
    value: { id: '2405', name: 'Banano Coin US Dollar', decimal: '4', symbol: 'BAN/USD' },
    label: 'BAN/USD, Banano Coin US Dollar'
  },
  {
    value: { id: '2406', name: 'Banca Ethereum', decimal: '8', symbol: 'BANCA/ETH' },
    label: 'BANCA/ETH, Banca Ethereum'
  },
  {
    value: { id: '2407', name: 'Banca US Dollar', decimal: '8', symbol: 'BANCA/USD' },
    label: 'BANCA/USD, Banca US Dollar'
  },
  {
    value: { id: '2408', name: 'Titanium Blockchain Bitcoin', decimal: '8', symbol: 'BAR/BTC' },
    label: 'BAR/BTC, Titanium Blockchain Bitcoin'
  },
  {
    value: { id: '2410', name: 'Titanium Blockchain US Dollar', decimal: '6', symbol: 'BAR/USD' },
    label: 'BAR/USD, Titanium Blockchain US Dollar'
  },
  {
    value: { id: '2411', name: 'BitAsean Ethereum', decimal: '8', symbol: 'BAS/ETH' },
    label: 'BAS/ETH, BitAsean Ethereum'
  },
  {
    value: { id: '2412', name: 'BitAsean US Dollar', decimal: '6', symbol: 'BAS/USD' },
    label: 'BAS/USD, BitAsean US Dollar'
  },
  {
    value: { id: '2413', name: 'LuckChain Bitcoin', decimal: '8', symbol: 'BASH/BTC' },
    label: 'BASH/BTC, LuckChain Bitcoin'
  },
  {
    value: { id: '2414', name: 'LuckChain US Dollar', decimal: '6', symbol: 'BASH/USD' },
    label: 'BASH/USD, LuckChain US Dollar'
  },
  {
    value: {
      id: '2415',
      name: 'Basic Attention Token Binance Coin',
      decimal: '6',
      symbol: 'BAT/BNB'
    },
    label: 'BAT/BNB, Basic Attention Token Binance Coin'
  },
  {
    value: { id: '2416', name: 'Basic Attention Token Bitcoin', decimal: '8', symbol: 'BAT/BTC' },
    label: 'BAT/BTC, Basic Attention Token Bitcoin'
  },
  {
    value: { id: '2418', name: 'Basic Attention Token Ethereum', decimal: '6', symbol: 'BAT/ETH' },
    label: 'BAT/ETH, Basic Attention Token Ethereum'
  },
  {
    value: { id: '2421', name: 'Basic Attention Token US Dollar', decimal: '6', symbol: 'BAT/USD' },
    label: 'BAT/USD, Basic Attention Token US Dollar'
  },
  {
    value: { id: '2424', name: 'BABB US Dollar', decimal: '6', symbol: 'BAX/USD' },
    label: 'BAX/USD, BABB US Dollar'
  },
  {
    value: { id: '2425', name: 'BitBay Bitcoin', decimal: '8', symbol: 'BAY/BTC' },
    label: 'BAY/BTC, BitBay Bitcoin'
  },
  {
    value: { id: '2428', name: 'BitBay US Dollar', decimal: '6', symbol: 'BAY/USD' },
    label: 'BAY/USD, BitBay US Dollar'
  },
  {
    value: { id: '2430', name: 'TraDove B2BCoin US Dollar', decimal: '4', symbol: 'BBC/USD' },
    label: 'BBC/USD, TraDove B2BCoin US Dollar'
  },
  {
    value: { id: '2431', name: 'Brickblock Ethereum', decimal: '8', symbol: 'BBK/ETH' },
    label: 'BBK/ETH, Brickblock Ethereum'
  },
  {
    value: { id: '2432', name: 'Brickblock US Dollar', decimal: '8', symbol: 'BBK/USD' },
    label: 'BBK/USD, Brickblock US Dollar'
  },
  {
    value: { id: '2433', name: 'Boolberry Bitcoin', decimal: '6', symbol: 'BBR/BTC' },
    label: 'BBR/BTC, Boolberry Bitcoin'
  },
  {
    value: { id: '2434', name: 'Boolberry US Dollar', decimal: '5', symbol: 'BBR/USD' },
    label: 'BBR/USD, Boolberry US Dollar'
  },
  {
    value: { id: '2435', name: 'BitBoost Bitcoin', decimal: '8', symbol: 'BBT/BTC' },
    label: 'BBT/BTC, BitBoost Bitcoin'
  },
  {
    value: { id: '2437', name: 'BitBoost US Dollar', decimal: '6', symbol: 'BBT/USD' },
    label: 'BBT/USD, BitBoost US Dollar'
  },
  {
    value: { id: '2438', name: 'Bitcoin Atom Bitcoin', decimal: '6', symbol: 'BCA/BTC' },
    label: 'BCA/BTC, Bitcoin Atom Bitcoin'
  },
  {
    value: { id: '2439', name: 'Bitcoin Atom US Dollar', decimal: '3', symbol: 'BCA/USD' },
    label: 'BCA/USD, Bitcoin Atom US Dollar'
  },
  {
    value: { id: '2440', name: 'BCAP Ethereum', decimal: '6', symbol: 'BCAP/ETH' },
    label: 'BCAP/ETH, BCAP Ethereum'
  },
  {
    value: { id: '2441', name: 'BCAP US Dollar', decimal: '5', symbol: 'BCAP/USD' },
    label: 'BCAP/USD, BCAP US Dollar'
  },
  {
    value: { id: '2447', name: 'BitConnect US Dollar', decimal: '4', symbol: 'BCC/USD' },
    label: 'BCC/USD, BitConnect US Dollar'
  },
  {
    value: { id: '2448', name: 'Bitcoin Diamond Bitcoin', decimal: '6', symbol: 'BCD/BTC' },
    label: 'BCD/BTC, Bitcoin Diamond Bitcoin'
  },
  {
    value: {
      id: '2450',
      name: 'Bitcoin Diamond Indonesian Rupiah',
      decimal: '0',
      symbol: 'BCD/IDR'
    },
    label: 'BCD/IDR, Bitcoin Diamond Indonesian Rupiah'
  },
  {
    value: { id: '2451', name: 'Bitcoin Diamond Korean Won', decimal: '0', symbol: 'BCD/KRW' },
    label: 'BCD/KRW, Bitcoin Diamond Korean Won'
  },
  {
    value: { id: '2452', name: 'Bitcoin Diamond US Dollar', decimal: '5', symbol: 'BCD/USD' },
    label: 'BCD/USD, Bitcoin Diamond US Dollar'
  },
  {
    value: { id: '2454', name: 'BlockCDN Ethereum', decimal: '8', symbol: 'BCDN/ETH' },
    label: 'BCDN/ETH, BlockCDN Ethereum'
  },
  {
    value: { id: '2455', name: 'BlockCDN US Dollar', decimal: '6', symbol: 'BCDN/USD' },
    label: 'BCDN/USD, BlockCDN US Dollar'
  },
  {
    value: { id: '2456', name: 'Bitcoin Fast Bitcoin', decimal: '8', symbol: 'BCF/BTC' },
    label: 'BCF/BTC, Bitcoin Fast Bitcoin'
  },
  {
    value: { id: '2459', name: 'Bitcoin Fast US Dollar', decimal: '6', symbol: 'BCF/USD' },
    label: 'BCF/USD, Bitcoin Fast US Dollar'
  },
  {
    value: { id: '2460', name: 'Bitcoin Cash Brazil Real', decimal: '2', symbol: 'BCH/BRL' },
    label: 'BCH/BRL, Bitcoin Cash Brazil Real'
  },
  {
    value: { id: '2461', name: 'Bitcoin Cash Bitcoin', decimal: '5', symbol: 'BCH/BTC' },
    label: 'BCH/BTC, Bitcoin Cash Bitcoin'
  },
  {
    value: { id: '2462', name: 'Bitcoin Cash Canadian Dollar', decimal: '2', symbol: 'BCH/CAD' },
    label: 'BCH/CAD, Bitcoin Cash Canadian Dollar'
  },
  {
    value: { id: '2463', name: 'Bitcoin Cash Swiss Franc', decimal: '2', symbol: 'BCH/CHF' },
    label: 'BCH/CHF, Bitcoin Cash Swiss Franc'
  },
  {
    value: { id: '2464', name: 'Bitcoin Cash Chinese Yuan', decimal: '2', symbol: 'BCH/CNY' },
    label: 'BCH/CNY, Bitcoin Cash Chinese Yuan'
  },
  {
    value: { id: '2466', name: 'Bitcoin Cash Ethereum', decimal: '5', symbol: 'BCH/ETH' },
    label: 'BCH/ETH, Bitcoin Cash Ethereum'
  },
  {
    value: { id: '2467', name: 'Bitcoin Cash Euro', decimal: '2', symbol: 'BCH/EUR' },
    label: 'BCH/EUR, Bitcoin Cash Euro'
  },
  {
    value: { id: '2468', name: 'Bitcoin Cash British Pound', decimal: '2', symbol: 'BCH/GBP' },
    label: 'BCH/GBP, Bitcoin Cash British Pound'
  },
  {
    value: { id: '2469', name: 'Bitcoin Cash Hong Kong Dollar', decimal: '2', symbol: 'BCH/HKD' },
    label: 'BCH/HKD, Bitcoin Cash Hong Kong Dollar'
  },
  {
    value: { id: '2470', name: 'Bitcoin Cash Huobi Token', decimal: '6', symbol: 'BCH/HT' },
    label: 'BCH/HT, Bitcoin Cash Huobi Token'
  },
  {
    value: { id: '2471', name: 'Bitcoin Cash Israeli Shekel', decimal: '2', symbol: 'BCH/ILS' },
    label: 'BCH/ILS, Bitcoin Cash Israeli Shekel'
  },
  {
    value: {
      id: '2472',
      name: 'BCHABC/INR - Bitcoin Cash Indian Rupee',
      decimal: '0',
      symbol: 'BCH/INR'
    },
    label: 'BCH/INR, BCHABC/INR - Bitcoin Cash Indian Rupee'
  },
  {
    value: { id: '2473', name: 'Bitcoin Cash Japanese Yen', decimal: '0', symbol: 'BCH/JPY' },
    label: 'BCH/JPY, Bitcoin Cash Japanese Yen'
  },
  {
    value: { id: '2474', name: 'Bitcoin Cash Korean Won', decimal: '0', symbol: 'BCH/KRW' },
    label: 'BCH/KRW, Bitcoin Cash Korean Won'
  },
  {
    value: { id: '2476', name: 'Bitcoin Cash Mexican Peso', decimal: '2', symbol: 'BCH/MXN' },
    label: 'BCH/MXN, Bitcoin Cash Mexican Peso'
  },
  {
    value: { id: '2477', name: 'Bitcoin Cash Malaysian Ringgit', decimal: '2', symbol: 'BCH/MYR' },
    label: 'BCH/MYR, Bitcoin Cash Malaysian Ringgit'
  },
  {
    value: { id: '2478', name: 'Bitcoin Cash Polish Zloty', decimal: '2', symbol: 'BCH/PLN' },
    label: 'BCH/PLN, Bitcoin Cash Polish Zloty'
  },
  {
    value: { id: '2479', name: 'Bitcoin Cash Russian Ruble', decimal: '2', symbol: 'BCH/RUB' },
    label: 'BCH/RUB, Bitcoin Cash Russian Ruble'
  },
  {
    value: { id: '2480', name: 'Bitcoin Cash Saudi Riyal', decimal: '2', symbol: 'BCH/SAR' },
    label: 'BCH/SAR, Bitcoin Cash Saudi Riyal'
  },
  {
    value: { id: '2481', name: 'Bitcoin Cash Swedish Krona', decimal: '2', symbol: 'BCH/SEK' },
    label: 'BCH/SEK, Bitcoin Cash Swedish Krona'
  },
  {
    value: { id: '2482', name: 'Bitcoin Cash Singapore Dollar', decimal: '2', symbol: 'BCH/SGD' },
    label: 'BCH/SGD, Bitcoin Cash Singapore Dollar'
  },
  {
    value: { id: '2484', name: 'Bitcoin Cash Turkish Lira', decimal: '0', symbol: 'BCH/TRY' },
    label: 'BCH/TRY, Bitcoin Cash Turkish Lira'
  },
  {
    value: { id: '2485', name: 'Bitcoin Cash US Dollar', decimal: '2', symbol: 'BCH/USD' },
    label: 'BCH/USD, Bitcoin Cash US Dollar'
  },
  {
    value: { id: '2486', name: 'Bitcoin Cash Vietnamese Dong', decimal: '0', symbol: 'BCH/VND' },
    label: 'BCH/VND, Bitcoin Cash Vietnamese Dong'
  },
  {
    value: { id: '2488', name: 'Bitcoin Cash XRP', decimal: '6', symbol: 'BCH/XRP' },
    label: 'BCH/XRP, Bitcoin Cash XRP'
  },
  {
    value: { id: '2489', name: 'Bitcoin Cash South African Rand', decimal: '2', symbol: 'BCH/ZAR' },
    label: 'BCH/ZAR, Bitcoin Cash South African Rand'
  },
  {
    value: {
      id: '2490',
      name: 'Bitcoin Cash Australian Dollar',
      decimal: '2',
      symbol: 'BCHABC/AUD'
    },
    label: 'BCHABC/AUD, Bitcoin Cash Australian Dollar'
  },
  {
    value: {
      id: '2491',
      name: 'Bitcoin Cash Indonesian Rupiah',
      decimal: '0',
      symbol: 'BCHABC/IDR'
    },
    label: 'BCHABC/IDR, Bitcoin Cash Indonesian Rupiah'
  },
  {
    value: { id: '2492', name: 'Bitcoin SV Australian Dollar', decimal: '2', symbol: 'BCHSV/AUD' },
    label: 'BCHSV/AUD, Bitcoin SV Australian Dollar'
  },
  {
    value: { id: '2493', name: 'Bitcoin SV Bitcoin Cash', decimal: '8', symbol: 'BCHSV/BCH' },
    label: 'BCHSV/BCH, Bitcoin SV Bitcoin Cash'
  },
  {
    value: { id: '2494', name: 'Bitcoin SV Bitcoin', decimal: '8', symbol: 'BCHSV/BTC' },
    label: 'BCHSV/BTC, Bitcoin SV Bitcoin'
  },
  {
    value: { id: '2495', name: 'Bitcoin SV Dogecoin', decimal: '4', symbol: 'BCHSV/DOGE' },
    label: 'BCHSV/DOGE, Bitcoin SV Dogecoin'
  },
  {
    value: { id: '2496', name: 'Bitcoin SV Ethereum', decimal: '8', symbol: 'BCHSV/ETH' },
    label: 'BCHSV/ETH, Bitcoin SV Ethereum'
  },
  {
    value: { id: '2497', name: 'Bitcoin SV Indonesian Rupiah', decimal: '0', symbol: 'BCHSV/IDR' },
    label: 'BCHSV/IDR, Bitcoin SV Indonesian Rupiah'
  },
  {
    value: { id: '2498', name: 'Bitcoin SV Indian Rupee', decimal: '2', symbol: 'BCHSV/INR' },
    label: 'BCHSV/INR, Bitcoin SV Indian Rupee'
  },
  {
    value: { id: '2499', name: 'Bitcoin SV US Dollar', decimal: '2', symbol: 'BCHSV/USD' },
    label: 'BCHSV/USD, Bitcoin SV US Dollar'
  },
  {
    value: { id: '2503', name: 'Bytecoin Ethereum', decimal: '8', symbol: 'BCN/ETH' },
    label: 'BCN/ETH, Bytecoin Ethereum'
  },
  {
    value: { id: '2504', name: 'Bytecoin US Dollar', decimal: '6', symbol: 'BCN/USD' },
    label: 'BCN/USD, Bytecoin US Dollar'
  },
  {
    value: { id: '2506', name: 'BridgeCoin Bitcoin', decimal: '6', symbol: 'BCO/BTC' },
    label: 'BCO/BTC, BridgeCoin Bitcoin'
  },
  {
    value: { id: '2511', name: 'BridgeCoin US Dollar', decimal: '5', symbol: 'BCO/USD' },
    label: 'BCO/USD, BridgeCoin US Dollar'
  },
  {
    value: {
      id: '2514',
      name: 'BlockMason Credit Protocol Bitcoin',
      decimal: '8',
      symbol: 'BCPT/BTC'
    },
    label: 'BCPT/BTC, BlockMason Credit Protocol Bitcoin'
  },
  {
    value: {
      id: '2518',
      name: 'BlockMason Credit Protocol US Dollar',
      decimal: '5',
      symbol: 'BCPT/USD'
    },
    label: 'BCPT/USD, BlockMason Credit Protocol US Dollar'
  },
  {
    value: { id: '2519', name: 'BitcoinX Bitcoin', decimal: '8', symbol: 'BCX/BTC' },
    label: 'BCX/BTC, BitcoinX Bitcoin'
  },
  {
    value: { id: '2520', name: 'BitcoinX US Dollar', decimal: '6', symbol: 'BCX/USD' },
    label: 'BCX/USD, BitcoinX US Dollar'
  },
  {
    value: { id: '2523', name: 'Buggyra Coin Zero Bitcoin', decimal: '6', symbol: 'BCZERO/BTC' },
    label: 'BCZERO/BTC, Buggyra Coin Zero Bitcoin'
  },
  {
    value: { id: '2525', name: 'Buggyra Coin Zero US Dollar', decimal: '4', symbol: 'BCZERO/USD' },
    label: 'BCZERO/USD, Buggyra Coin Zero US Dollar'
  },
  {
    value: { id: '2526', name: 'BitDegree Bitcoin', decimal: '8', symbol: 'BDG/BTC' },
    label: 'BDG/BTC, BitDegree Bitcoin'
  },
  {
    value: { id: '2527', name: 'BitDegree Ethereum', decimal: '8', symbol: 'BDG/ETH' },
    label: 'BDG/ETH, BitDegree Ethereum'
  },
  {
    value: { id: '2528', name: 'BitDegree US Dollar', decimal: '6', symbol: 'BDG/USD' },
    label: 'BDG/USD, BitDegree US Dollar'
  },
  {
    value: { id: '2532', name: 'Bitdeal US Dollar', decimal: '6', symbol: 'BDL/USD' },
    label: 'BDL/USD, Bitdeal US Dollar'
  },
  {
    value: { id: '2533', name: 'Beam Bitcoin', decimal: '8', symbol: 'BEAM/BTC' },
    label: 'BEAM/BTC, Beam Bitcoin'
  },
  {
    value: { id: '2534', name: 'Beam Ethereum', decimal: '8', symbol: 'BEAM/ETH' },
    label: 'BEAM/ETH, Beam Ethereum'
  },
  {
    value: { id: '2535', name: 'Beam US Dollar', decimal: '6', symbol: 'BEAM/USD' },
    label: 'BEAM/USD, Beam US Dollar'
  },
  {
    value: { id: '2536', name: 'Bee Token Ethereum', decimal: '8', symbol: 'BEE/ETH' },
    label: 'BEE/ETH, Bee Token Ethereum'
  },
  {
    value: { id: '2537', name: 'Bee Token US Dollar', decimal: '8', symbol: 'BEE/USD' },
    label: 'BEE/USD, Bee Token US Dollar'
  },
  {
    value: { id: '2543', name: 'BenjiRolls US Dollar', decimal: '6', symbol: 'BENJI/USD' },
    label: 'BENJI/USD, BenjiRolls US Dollar'
  },
  {
    value: { id: '2544', name: 'BERNcash Bitcoin', decimal: '8', symbol: 'BERN/BTC' },
    label: 'BERN/BTC, BERNcash Bitcoin'
  },
  {
    value: { id: '2545', name: 'BERNcash US Dollar', decimal: '6', symbol: 'BERN/USD' },
    label: 'BERN/USD, BERNcash US Dollar'
  },
  {
    value: { id: '2546', name: 'Rentberry Bitcoin', decimal: '8', symbol: 'BERRY/BTC' },
    label: 'BERRY/BTC, Rentberry Bitcoin'
  },
  {
    value: { id: '2547', name: 'Rentberry Ethereum', decimal: '8', symbol: 'BERRY/ETH' },
    label: 'BERRY/ETH, Rentberry Ethereum'
  },
  {
    value: { id: '2548', name: 'Rentberry US Dollar', decimal: '6', symbol: 'BERRY/USD' },
    label: 'BERRY/USD, Rentberry US Dollar'
  },
  {
    value: { id: '2552', name: 'BestChain US Dollar', decimal: '6', symbol: 'BEST/USD' },
    label: 'BEST/USD, BestChain US Dollar'
  },
  {
    value: { id: '2553', name: 'BetaCoin Bitcoin', decimal: '8', symbol: 'BET/BTC' },
    label: 'BET/BTC, BetaCoin Bitcoin'
  },
  {
    value: { id: '2555', name: 'BetaCoin US Dollar', decimal: '6', symbol: 'BET/USD' },
    label: 'BET/USD, BetaCoin US Dollar'
  },
  {
    value: { id: '2556', name: 'Bezop Bitcoin', decimal: '8', symbol: 'BEZ/BTC' },
    label: 'BEZ/BTC, Bezop Bitcoin'
  },
  {
    value: { id: '2557', name: 'Bezop Ethereum', decimal: '8', symbol: 'BEZ/ETH' },
    label: 'BEZ/ETH, Bezop Ethereum'
  },
  {
    value: { id: '2558', name: 'Bezop US Dollar', decimal: '6', symbol: 'BEZ/USD' },
    label: 'BEZ/USD, Bezop US Dollar'
  },
  {
    value: { id: '2559', name: 'BnkToTheFuture Bitcoin', decimal: '8', symbol: 'BFT/BTC' },
    label: 'BFT/BTC, BnkToTheFuture Bitcoin'
  },
  {
    value: { id: '2560', name: 'BnkToTheFuture Ethereum', decimal: '8', symbol: 'BFT/ETH' },
    label: 'BFT/ETH, BnkToTheFuture Ethereum'
  },
  {
    value: { id: '2561', name: 'BnkToTheFuture US Dollar', decimal: '6', symbol: 'BFT/USD' },
    label: 'BFT/USD, BnkToTheFuture US Dollar'
  },
  {
    value: { id: '2562', name: 'Bongger Dogecoin', decimal: '5', symbol: 'BGR/DOGE' },
    label: 'BGR/DOGE, Bongger Dogecoin'
  },
  {
    value: { id: '2564', name: 'Bongger US Dollar', decimal: '6', symbol: 'BGR/USD' },
    label: 'BGR/USD, Bongger US Dollar'
  },
  {
    value: { id: '2565', name: 'BigUp Bitcoin', decimal: '8', symbol: 'BIGUP/BTC' },
    label: 'BIGUP/BTC, BigUp Bitcoin'
  },
  {
    value: { id: '2567', name: 'BigUp US Dollar', decimal: '8', symbol: 'BIGUP/USD' },
    label: 'BIGUP/USD, BigUp US Dollar'
  },
  {
    value: { id: '2568', name: 'BioBar Bitcoin', decimal: '8', symbol: 'BIOB/BTC' },
    label: 'BIOB/BTC, BioBar Bitcoin'
  },
  {
    value: { id: '2569', name: 'BioBar US Dollar', decimal: '6', symbol: 'BIOB/USD' },
    label: 'BIOB/USD, BioBar US Dollar'
  },
  {
    value: { id: '2570', name: 'BiosCrypto Bitcoin', decimal: '8', symbol: 'BIOS/BTC' },
    label: 'BIOS/BTC, BiosCrypto Bitcoin'
  },
  {
    value: { id: '2571', name: 'BiosCrypto US Dollar', decimal: '6', symbol: 'BIOS/USD' },
    label: 'BIOS/USD, BiosCrypto US Dollar'
  },
  {
    value: { id: '2572', name: 'BipCoin Bitcoin', decimal: '8', symbol: 'BIP/BTC' },
    label: 'BIP/BTC, BipCoin Bitcoin'
  },
  {
    value: { id: '2575', name: 'BipCoin US Dollar', decimal: '6', symbol: 'BIP/USD' },
    label: 'BIP/USD, BipCoin US Dollar'
  },
  {
    value: { id: '2576', name: 'Birds Bitcoin', decimal: '8', symbol: 'BIRDS/BTC' },
    label: 'BIRDS/BTC, Birds Bitcoin'
  },
  {
    value: { id: '2577', name: 'Birds US Dollar', decimal: '6', symbol: 'BIRDS/USD' },
    label: 'BIRDS/USD, Birds US Dollar'
  },
  {
    value: { id: '2581', name: 'Bismuth US Dollar', decimal: '5', symbol: 'BIS/USD' },
    label: 'BIS/USD, Bismuth US Dollar'
  },
  {
    value: { id: '2582', name: 'First Bitcoin Bitcoin', decimal: '8', symbol: 'BIT/BTC' },
    label: 'BIT/BTC, First Bitcoin Bitcoin'
  },
  {
    value: { id: '2583', name: 'First Bitcoin US Dollar', decimal: '6', symbol: 'BIT/USD' },
    label: 'BIT/USD, First Bitcoin US Dollar'
  },
  {
    value: { id: '2588', name: 'Bean Cash US Dollar', decimal: '6', symbol: 'BITB/USD' },
    label: 'BITB/USD, Bean Cash US Dollar'
  },
  {
    value: { id: '2589', name: 'BitCar Ethereum', decimal: '8', symbol: 'BITCAR/ETH' },
    label: 'BITCAR/ETH, BitCar Ethereum'
  },
  {
    value: { id: '2590', name: 'BitCar US Dollar', decimal: '6', symbol: 'BITCAR/USD' },
    label: 'BITCAR/USD, BitCar US Dollar'
  },
  {
    value: { id: '2592', name: 'BitGreen US Dollar', decimal: '5', symbol: 'BITG/USD' },
    label: 'BITG/USD, BitGreen US Dollar'
  },
  {
    value: { id: '2594', name: 'Bitok US Dollar', decimal: '8', symbol: 'BITOK/USD' },
    label: 'BITOK/USD, Bitok US Dollar'
  },
  {
    value: { id: '2598', name: 'Bitstar US Dollar', decimal: '6', symbol: 'BITS/USD' },
    label: 'BITS/USD, Bitstar US Dollar'
  },
  {
    value: { id: '2599', name: 'Bitz Bitcoin', decimal: '8', symbol: 'BITZ/BTC' },
    label: 'BITZ/BTC, Bitz Bitcoin'
  },
  {
    value: { id: '2600', name: 'Bitz US Dollar', decimal: '6', symbol: 'BITZ/USD' },
    label: 'BITZ/USD, Bitz US Dollar'
  },
  {
    value: { id: '2601', name: 'Bibox Token Bitcoin', decimal: '6', symbol: 'BIX/BTC' },
    label: 'BIX/BTC, Bibox Token Bitcoin'
  },
  {
    value: { id: '2602', name: 'Bibox Token Ethereum', decimal: '6', symbol: 'BIX/ETH' },
    label: 'BIX/ETH, Bibox Token Ethereum'
  },
  {
    value: { id: '2603', name: 'Bibox Token US Dollar', decimal: '5', symbol: 'BIX/USD' },
    label: 'BIX/USD, Bibox Token US Dollar'
  },
  {
    value: { id: '2604', name: 'BANKEX Ethereum', decimal: '8', symbol: 'BKX/ETH' },
    label: 'BKX/ETH, BANKEX Ethereum'
  },
  {
    value: { id: '2605', name: 'BANKEX US Dollar', decimal: '8', symbol: 'BKX/USD' },
    label: 'BKX/USD, BANKEX US Dollar'
  },
  {
    value: { id: '2606', name: 'BlazerCoin Bitcoin', decimal: '8', symbol: 'BLAZR/BTC' },
    label: 'BLAZR/BTC, BlazerCoin Bitcoin'
  },
  {
    value: { id: '2607', name: 'BlazerCoin US Dollar', decimal: '6', symbol: 'BLAZR/USD' },
    label: 'BLAZR/USD, BlazerCoin US Dollar'
  },
  {
    value: { id: '2611', name: 'Blakecoin US Dollar', decimal: '6', symbol: 'BLC/USD' },
    label: 'BLC/USD, Blakecoin US Dollar'
  },
  {
    value: { id: '2612', name: 'Blitzcash Bitcoin', decimal: '6', symbol: 'BLITZ/BTC' },
    label: 'BLITZ/BTC, Blitzcash Bitcoin'
  },
  {
    value: { id: '2613', name: 'Blitzcash US Dollar', decimal: '5', symbol: 'BLITZ/USD' },
    label: 'BLITZ/USD, Blitzcash US Dollar'
  },
  {
    value: { id: '2614', name: 'BlackCoin Bitcoin', decimal: '8', symbol: 'BLK/BTC' },
    label: 'BLK/BTC, BlackCoin Bitcoin'
  },
  {
    value: { id: '2620', name: 'Bolenum US Dollar', decimal: '6', symbol: 'BLN/USD' },
    label: 'BLN/USD, Bolenum US Dollar'
  },
  {
    value: { id: '2621', name: 'Blocknet Bitcoin', decimal: '6', symbol: 'BLOCK/BTC' },
    label: 'BLOCK/BTC, Blocknet Bitcoin'
  },
  {
    value: { id: '2622', name: 'Blocknet US Dollar', decimal: '4', symbol: 'BLOCK/USD' },
    label: 'BLOCK/USD, Blocknet US Dollar'
  },
  {
    value: { id: '2623', name: 'BillaryCoin Bitcoin', decimal: '8', symbol: 'BLRY/BTC' },
    label: 'BLRY/BTC, BillaryCoin Bitcoin'
  },
  {
    value: { id: '2624', name: 'BillaryCoin US Dollar', decimal: '6', symbol: 'BLRY/USD' },
    label: 'BLRY/USD, BillaryCoin US Dollar'
  },
  {
    value: { id: '2626', name: 'BlueCoin US Dollar', decimal: '6', symbol: 'BLU/USD' },
    label: 'BLU/USD, BlueCoin US Dollar'
  },
  {
    value: { id: '2629', name: 'BLUE US Dollar', decimal: '5', symbol: 'BLUE/USD' },
    label: 'BLUE/USD, BLUE US Dollar'
  },
  {
    value: { id: '2630', name: 'Blockchain Index Ethereum', decimal: '6', symbol: 'BLX/ETH' },
    label: 'BLX/ETH, Blockchain Index Ethereum'
  },
  {
    value: { id: '2631', name: 'Blockchain Index US Dollar', decimal: '5', symbol: 'BLX/USD' },
    label: 'BLX/USD, Blockchain Index US Dollar'
  },
  {
    value: { id: '2632', name: 'BlazeCoin Dogecoin', decimal: '5', symbol: 'BLZ/DOGE' },
    label: 'BLZ/DOGE, BlazeCoin Dogecoin'
  },
  {
    value: { id: '2634', name: 'BlazeCoin US Dollar', decimal: '6', symbol: 'BLZ/USD' },
    label: 'BLZ/USD, BlazeCoin US Dollar'
  },
  {
    value: { id: '2635', name: 'Bluzelle Binance Coin', decimal: '6', symbol: 'BLZE/BNB' },
    label: 'BLZE/BNB, Bluzelle Binance Coin'
  },
  {
    value: { id: '2636', name: 'Bluzelle Bitcoin', decimal: '8', symbol: 'BLZE/BTC' },
    label: 'BLZE/BTC, Bluzelle Bitcoin'
  },
  {
    value: { id: '2637', name: 'Bluzelle Ethereum', decimal: '6', symbol: 'BLZE/ETH' },
    label: 'BLZE/ETH, Bluzelle Ethereum'
  },
  {
    value: { id: '2638', name: 'Bluzelle US Dollar', decimal: '5', symbol: 'BLZE/USD' },
    label: 'BLZE/USD, Bluzelle US Dollar'
  },
  {
    value: { id: '2643', name: 'BMChain Bitcoin', decimal: '8', symbol: 'BMT/BTC' },
    label: 'BMT/BTC, BMChain Bitcoin'
  },
  {
    value: { id: '2644', name: 'BMChain Ethereum', decimal: '8', symbol: 'BMT/ETH' },
    label: 'BMT/ETH, BMChain Ethereum'
  },
  {
    value: { id: '2645', name: 'BMChain Russian Ruble', decimal: '4', symbol: 'BMT/RUB' },
    label: 'BMT/RUB, BMChain Russian Ruble'
  },
  {
    value: { id: '2646', name: 'BMChain US Dollar', decimal: '6', symbol: 'BMT/USD' },
    label: 'BMT/USD, BMChain US Dollar'
  },
  {
    value: { id: '2647', name: 'Binance Coin Bitcoin', decimal: '6', symbol: 'BNB/BTC' },
    label: 'BNB/BTC, Binance Coin Bitcoin'
  },
  {
    value: { id: '2648', name: 'Binance Coin Ethereum', decimal: '6', symbol: 'BNB/ETH' },
    label: 'BNB/ETH, Binance Coin Ethereum'
  },
  {
    value: { id: '2649', name: 'Binance Coin US Dollar', decimal: '4', symbol: 'BNB/USD' },
    label: 'BNB/USD, Binance Coin US Dollar'
  },
  {
    value: { id: '2650', name: 'Bankera Bitcoin', decimal: '8', symbol: 'BNK/BTC' },
    label: 'BNK/BTC, Bankera Bitcoin'
  },
  {
    value: { id: '2651', name: 'Bankera Ethereum', decimal: '8', symbol: 'BNK/ETH' },
    label: 'BNK/ETH, Bankera Ethereum'
  },
  {
    value: { id: '2652', name: 'Bankera US Dollar', decimal: '6', symbol: 'BNK/USD' },
    label: 'BNK/USD, Bankera US Dollar'
  },
  {
    value: { id: '2653', name: 'Bancor Bitcoin', decimal: '8', symbol: 'BNT/BTC' },
    label: 'BNT/BTC, Bancor Bitcoin'
  },
  {
    value: { id: '2654', name: 'Bancor Ethereum', decimal: '6', symbol: 'BNT/ETH' },
    label: 'BNT/ETH, Bancor Ethereum'
  },
  {
    value: { id: '2656', name: 'Bancor US Dollar', decimal: '4', symbol: 'BNT/USD' },
    label: 'BNT/USD, Bancor US Dollar'
  },
  {
    value: { id: '2658', name: 'Bounty0x Ethereum', decimal: '6', symbol: 'BNTY/ETH' },
    label: 'BNTY/ETH, Bounty0x Ethereum'
  },
  {
    value: { id: '2659', name: 'Bounty0x US Dollar', decimal: '6', symbol: 'BNTY/USD' },
    label: 'BNTY/USD, Bounty0x US Dollar'
  },
  {
    value: { id: '2660', name: 'BnrtxCoin Bitcoin', decimal: '8', symbol: 'BNX/BTC' },
    label: 'BNX/BTC, BnrtxCoin Bitcoin'
  },
  {
    value: { id: '2663', name: 'BnrtxCoin US Dollar', decimal: '6', symbol: 'BNX/USD' },
    label: 'BNX/USD, BnrtxCoin US Dollar'
  },
  {
    value: { id: '2664', name: 'BOAT Bitcoin', decimal: '8', symbol: 'BOAT/BTC' },
    label: 'BOAT/BTC, BOAT Bitcoin'
  },
  {
    value: { id: '2665', name: 'BOAT US Dollar', decimal: '6', symbol: 'BOAT/USD' },
    label: 'BOAT/USD, BOAT US Dollar'
  },
  {
    value: { id: '2669', name: 'Bolivarcoin US Dollar', decimal: '6', symbol: 'BOLI/USD' },
    label: 'BOLI/USD, Bolivarcoin US Dollar'
  },
  {
    value: { id: '2674', name: 'Bonpay US Dollar', decimal: '5', symbol: 'BON/USD' },
    label: 'BON/USD, Bonpay US Dollar'
  },
  {
    value: { id: '2677', name: 'BOScoin US Dollar', decimal: '6', symbol: 'BOS/USD' },
    label: 'BOS/USD, BOScoin US Dollar'
  },
  {
    value: { id: '2681', name: 'Bodhi US Dollar', decimal: '5', symbol: 'BOT/USD' },
    label: 'BOT/USD, Bodhi US Dollar'
  },
  {
    value: { id: '2682', name: 'ContentBox Bitcoin', decimal: '4', symbol: 'BOX/BTC' },
    label: 'BOX/BTC, ContentBox Bitcoin'
  },
  {
    value: { id: '2683', name: 'ContentBox US Dollar', decimal: '4', symbol: 'BOX/USD' },
    label: 'BOX/USD, ContentBox US Dollar'
  },
  {
    value: { id: '2684', name: 'Bitpark Coin Bitcoin', decimal: '8', symbol: 'BPC/BTC' },
    label: 'BPC/BTC, Bitpark Coin Bitcoin'
  },
  {
    value: { id: '2686', name: 'Bitpark Coin US Dollar', decimal: '6', symbol: 'BPC/USD' },
    label: 'BPC/USD, Bitpark Coin US Dollar'
  },
  {
    value: { id: '2687', name: 'Big Profit Coin Bitcoin', decimal: '8', symbol: 'BPCN/BTC' },
    label: 'BPCN/BTC, Big Profit Coin Bitcoin'
  },
  {
    value: { id: '2688', name: 'Big Profit Coin US Dollar', decimal: '6', symbol: 'BPCN/USD' },
    label: 'BPCN/USD, Big Profit Coin US Dollar'
  },
  {
    value: { id: '2689', name: 'Blockpool Bitcoin', decimal: '8', symbol: 'BPL/BTC' },
    label: 'BPL/BTC, Blockpool Bitcoin'
  },
  {
    value: { id: '2692', name: 'Blockpool US Dollar', decimal: '6', symbol: 'BPL/USD' },
    label: 'BPL/USD, Blockpool US Dollar'
  },
  {
    value: { id: '2693', name: 'bitqy Bitcoin', decimal: '8', symbol: 'BQ/BTC' },
    label: 'BQ/BTC, bitqy Bitcoin'
  },
  {
    value: { id: '2695', name: 'bitqy US Dollar', decimal: '6', symbol: 'BQ/USD' },
    label: 'BQ/USD, bitqy US Dollar'
  },
  {
    value: { id: '2696', name: 'Ethos US Dollar', decimal: '5', symbol: 'BQX/USD' },
    label: 'BQX/USD, Ethos US Dollar'
  },
  {
    value: { id: '2697', name: 'Braincoin Bitcoin', decimal: '8', symbol: 'BRAIN/BTC' },
    label: 'BRAIN/BTC, Braincoin Bitcoin'
  },
  {
    value: { id: '2698', name: 'Braincoin US Dollar', decimal: '6', symbol: 'BRAIN/USD' },
    label: 'BRAIN/USD, Braincoin US Dollar'
  },
  {
    value: { id: '2700', name: 'BROTHER US Dollar', decimal: '6', symbol: 'BRAT/USD' },
    label: 'BRAT/USD, BROTHER US Dollar'
  },
  {
    value: { id: '2701', name: 'Bread Binance Coin', decimal: '6', symbol: 'BRD/BNB' },
    label: 'BRD/BNB, Bread Binance Coin'
  },
  {
    value: { id: '2702', name: 'Bread Bitcoin', decimal: '7', symbol: 'BRD/BTC' },
    label: 'BRD/BTC, Bread Bitcoin'
  },
  {
    value: { id: '2703', name: 'Bread Ethereum', decimal: '6', symbol: 'BRD/ETH' },
    label: 'BRD/ETH, Bread Ethereum'
  },
  {
    value: { id: '2704', name: 'Bread US Dollar', decimal: '5', symbol: 'BRD/USD' },
    label: 'BRD/USD, Bread US Dollar'
  },
  {
    value: { id: '2705', name: 'BriaCoin Bitcoin', decimal: '8', symbol: 'BRIA/BTC' },
    label: 'BRIA/BTC, BriaCoin Bitcoin'
  },
  {
    value: { id: '2707', name: 'BriaCoin US Dollar', decimal: '5', symbol: 'BRIA/USD' },
    label: 'BRIA/USD, BriaCoin US Dollar'
  },
  {
    value: { id: '2708', name: 'BritCoin Bitcoin', decimal: '8', symbol: 'BRIT/BTC' },
    label: 'BRIT/BTC, BritCoin Bitcoin'
  },
  {
    value: { id: '2709', name: 'BritCoin US Dollar', decimal: '6', symbol: 'BRIT/USD' },
    label: 'BRIT/USD, BritCoin US Dollar'
  },
  {
    value: { id: '2711', name: 'Breakout US Dollar', decimal: '6', symbol: 'BRK/USD' },
    label: 'BRK/USD, Breakout US Dollar'
  },
  {
    value: { id: '2712', name: 'Bitradio Bitcoin', decimal: '8', symbol: 'BRO/BTC' },
    label: 'BRO/BTC, Bitradio Bitcoin'
  },
  {
    value: { id: '2715', name: 'Bitradio US Dollar', decimal: '6', symbol: 'BRO/USD' },
    label: 'BRO/USD, Bitradio US Dollar'
  },
  {
    value: { id: '2716', name: 'Breakout Stake Bitcoin', decimal: '6', symbol: 'BRX/BTC' },
    label: 'BRX/BTC, Breakout Stake Bitcoin'
  },
  {
    value: { id: '2717', name: 'Breakout Stake US Dollar', decimal: '5', symbol: 'BRX/USD' },
    label: 'BRX/USD, Breakout Stake US Dollar'
  },
  {
    value: { id: '2719', name: 'Breezecoin US Dollar', decimal: '6', symbol: 'BRZC/USD' },
    label: 'BRZC/USD, Breezecoin US Dollar'
  },
  {
    value: { id: '2720', name: 'BowsCoin Bitcoin', decimal: '8', symbol: 'BSC/BTC' },
    label: 'BSC/BTC, BowsCoin Bitcoin'
  },
  {
    value: { id: '2721', name: 'BowsCoin US Dollar', decimal: '6', symbol: 'BSC/USD' },
    label: 'BSC/USD, BowsCoin US Dollar'
  },
  {
    value: { id: '2723', name: 'Bastonet US Dollar', decimal: '6', symbol: 'BSN/USD' },
    label: 'BSN/USD, Bastonet US Dollar'
  },
  {
    value: { id: '2724', name: 'BitSoar Bitcoin', decimal: '8', symbol: 'BSR/BTC' },
    label: 'BSR/BTC, BitSoar Bitcoin'
  },
  {
    value: { id: '2725', name: 'BitSoar US Dollar', decimal: '6', symbol: 'BSR/USD' },
    label: 'BSR/USD, BitSoar US Dollar'
  },
  {
    value: { id: '2726', name: 'Blackstar Bitcoin', decimal: '8', symbol: 'BSTAR/BTC' },
    label: 'BSTAR/BTC, Blackstar Bitcoin'
  },
  {
    value: { id: '2727', name: 'Blackstar US Dollar', decimal: '7', symbol: 'BSTAR/USD' },
    label: 'BSTAR/USD, Blackstar US Dollar'
  },
  {
    value: { id: '2731', name: 'GlobalBoost-Y US Dollar', decimal: '6', symbol: 'BSTY/USD' },
    label: 'BSTY/USD, GlobalBoost-Y US Dollar'
  },
  {
    value: { id: '2733', name: 'Bitcoin SV Korean Won', decimal: '0', symbol: 'BSV/KRW' },
    label: 'BSV/KRW, Bitcoin SV Korean Won'
  },
  {
    value: { id: '2735', name: 'Bitcoin SV South African Rand', decimal: '2', symbol: 'BSV/ZAR' },
    label: 'BSV/ZAR, Bitcoin SV South African Rand'
  },
  {
    value: { id: '2736', name: 'BT2 [CST] Bitcoin', decimal: '6', symbol: 'BT2/BTC' },
    label: 'BT2/BTC, BT2 [CST] Bitcoin'
  },
  {
    value: { id: '2738', name: 'BT2 [CST] US Dollar', decimal: '4', symbol: 'BT2/USD' },
    label: 'BT2/USD, BT2 [CST] US Dollar'
  },
  {
    value: { id: '2742', name: 'Bata US Dollar', decimal: '6', symbol: 'BTA/USD' },
    label: 'BTA/USD, Bata US Dollar'
  },
  {
    value: { id: '2746', name: 'BitBar US Dollar', decimal: '4', symbol: 'BTB/USD' },
    label: 'BTB/USD, BitBar US Dollar'
  },
  {
    value: { id: '2747', name: 'Bitbase Bitcoin', decimal: '8', symbol: 'BTBc/BTC' },
    label: 'BTBc/BTC, Bitbase Bitcoin'
  },
  {
    value: { id: '2748', name: 'Bitbase US Dollar', decimal: '6', symbol: 'BTBc/USD' },
    label: 'BTBc/USD, Bitbase US Dollar'
  },
  {
    value: { id: '2749', name: 'Bitibu Coin Bitcoin', decimal: '8', symbol: 'BTBU/BTC' },
    label: 'BTBU/BTC, Bitibu Coin Bitcoin'
  },
  {
    value: { id: '2750', name: 'Bitibu Coin Ethereum', decimal: '8', symbol: 'BTBU/ETH' },
    label: 'BTBU/ETH, Bitibu Coin Ethereum'
  },
  {
    value: { id: '2751', name: 'Bitibu Coin US Dollar', decimal: '6', symbol: 'BTBU/USD' },
    label: 'BTBU/USD, Bitibu Coin US Dollar'
  },
  {
    value: { id: '2753', name: 'Bitcoin bitCNY', decimal: '0', symbol: 'BTC/BITCNY' },
    label: 'BTC/BITCNY, Bitcoin bitCNY'
  },
  {
    value: { id: '2755', name: 'Bitcoin Brazil Real', decimal: '0', symbol: 'BTC/BRL' },
    label: 'BTC/BRL, Bitcoin Brazil Real'
  },
  {
    value: { id: '2765', name: 'Bitcoin Indonesian Rupiah', decimal: '0', symbol: 'BTC/IDR' },
    label: 'BTC/IDR, Bitcoin Indonesian Rupiah'
  },
  {
    value: { id: '2766', name: 'Bitcoin Israeli Shekel', decimal: '2', symbol: 'BTC/ILS' },
    label: 'BTC/ILS, Bitcoin Israeli Shekel'
  },
  {
    value: { id: '2767', name: 'Bitcoin Indian Rupee', decimal: '0', symbol: 'BTC/INR' },
    label: 'BTC/INR, Bitcoin Indian Rupee'
  },
  {
    value: { id: '2769', name: 'Bitcoin Korean Won', decimal: '0', symbol: 'BTC/KRW' },
    label: 'BTC/KRW, Bitcoin Korean Won'
  },
  {
    value: { id: '2770', name: 'Bitcoin Mexican Peso', decimal: '0', symbol: 'BTC/MXN' },
    label: 'BTC/MXN, Bitcoin Mexican Peso'
  },
  {
    value: { id: '2771', name: 'Bitcoin Malaysian Ringgit', decimal: '2', symbol: 'BTC/MYR' },
    label: 'BTC/MYR, Bitcoin Malaysian Ringgit'
  },
  {
    value: { id: '2776', name: 'Bitcoin Polish Zloty', decimal: '2', symbol: 'BTC/PLN' },
    label: 'BTC/PLN, Bitcoin Polish Zloty'
  },
  {
    value: { id: '2777', name: 'Bitcoin Russian Ruble', decimal: '0', symbol: 'BTC/RUB' },
    label: 'BTC/RUB, Bitcoin Russian Ruble'
  },
  {
    value: { id: '2778', name: 'Bitcoin Saudi Riyal', decimal: '2', symbol: 'BTC/SAR' },
    label: 'BTC/SAR, Bitcoin Saudi Riyal'
  },
  {
    value: { id: '2779', name: 'Bitcoin Swedish Krona', decimal: '0', symbol: 'BTC/SEK' },
    label: 'BTC/SEK, Bitcoin Swedish Krona'
  },
  {
    value: { id: '2782', name: 'Bitcoin Turkish Lira', decimal: '2', symbol: 'BTC/TRY' },
    label: 'BTC/TRY, Bitcoin Turkish Lira'
  },
  {
    value: { id: '2783', name: 'Bitcoin Ukrainian Hryvnia', decimal: '0', symbol: 'BTC/UAH' },
    label: 'BTC/UAH, Bitcoin Ukrainian Hryvnia'
  },
  {
    value: { id: '2784', name: 'Bitcoin Tether', decimal: '2', symbol: 'BTC/USDT' },
    label: 'BTC/USDT, Bitcoin Tether'
  },
  {
    value: { id: '2785', name: 'Bitcoin Vietnamese Dong', decimal: '0', symbol: 'BTC/VND' },
    label: 'BTC/VND, Bitcoin Vietnamese Dong'
  },
  {
    value: { id: '2786', name: 'Bitcoin XRP', decimal: '4', symbol: 'BTC/XRP' },
    label: 'BTC/XRP, Bitcoin XRP'
  },
  {
    value: { id: '2787', name: 'Bitcoin2x Ethereum', decimal: '8', symbol: 'BTC2X/ETH' },
    label: 'BTC2X/ETH, Bitcoin2x Ethereum'
  },
  {
    value: { id: '2788', name: 'Bitcoin2x US Dollar', decimal: '6', symbol: 'BTC2X/USD' },
    label: 'BTC2X/USD, Bitcoin2x US Dollar'
  },
  {
    value: { id: '2795', name: 'BitcoinDark US Dollar', decimal: '3', symbol: 'BTCD/USD' },
    label: 'BTCD/USD, BitcoinDark US Dollar'
  },
  {
    value: { id: '2797', name: 'BTCMoon Bitcoin', decimal: '8', symbol: 'BTCM/BTC' },
    label: 'BTCM/BTC, BTCMoon Bitcoin'
  },
  {
    value: { id: '2799', name: 'BTCMoon US Dollar', decimal: '6', symbol: 'BTCM/USD' },
    label: 'BTCM/USD, BTCMoon US Dollar'
  },
  {
    value: { id: '2804', name: 'Bitcoin Private US Dollar', decimal: '4', symbol: 'BTCP/USD' },
    label: 'BTCP/USD, Bitcoin Private US Dollar'
  },
  {
    value: { id: '2805', name: 'Bitcurrency Bitcoin', decimal: '8', symbol: 'BTCR/BTC' },
    label: 'BTCR/BTC, Bitcurrency Bitcoin'
  },
  {
    value: { id: '2806', name: 'Bitcurrency US Dollar', decimal: '6', symbol: 'BTCR/USD' },
    label: 'BTCR/USD, Bitcurrency US Dollar'
  },
  {
    value: { id: '2807', name: 'Bitcoin Red Bitcoin', decimal: '8', symbol: 'BTCRED/BTC' },
    label: 'BTCRED/BTC, Bitcoin Red Bitcoin'
  },
  {
    value: { id: '2809', name: 'Bitcoin Red US Dollar', decimal: '6', symbol: 'BTCRED/USD' },
    label: 'BTCRED/USD, Bitcoin Red US Dollar'
  },
  {
    value: { id: '2814', name: 'Bitcoin Scrypt US Dollar', decimal: '6', symbol: 'BTCS/USD' },
    label: 'BTCS/USD, Bitcoin Scrypt US Dollar'
  },
  {
    value: { id: '2815', name: 'BitcoinZ Bitcoin', decimal: '8', symbol: 'BTCZ/BTC' },
    label: 'BTCZ/BTC, BitcoinZ Bitcoin'
  },
  {
    value: { id: '2816', name: 'BitcoinZ US Dollar', decimal: '6', symbol: 'BTCZ/USD' },
    label: 'BTCZ/USD, BitcoinZ US Dollar'
  },
  {
    value: { id: '2820', name: 'Bitcloud US Dollar', decimal: '6', symbol: 'BTDX/USD' },
    label: 'BTDX/USD, Bitcloud US Dollar'
  },
  {
    value: { id: '2821', name: 'BitSerial Bitcoin', decimal: '8', symbol: 'BTE/BTC' },
    label: 'BTE/BTC, BitSerial Bitcoin'
  },
  {
    value: { id: '2823', name: 'BitSerial US Dollar', decimal: '6', symbol: 'BTE/USD' },
    label: 'BTE/USD, BitSerial US Dollar'
  },
  {
    value: { id: '2824', name: 'Bitcoin Gold Australian Dollar', decimal: '3', symbol: 'BTG/AUD' },
    label: 'BTG/AUD, Bitcoin Gold Australian Dollar'
  },
  {
    value: { id: '2826', name: 'Bitcoin Gold Bitcoin', decimal: '6', symbol: 'BTG/BTC' },
    label: 'BTG/BTC, Bitcoin Gold Bitcoin'
  },
  {
    value: { id: '2827', name: 'Bitcoin Gold Canadian Dollar', decimal: '3', symbol: 'BTG/CAD' },
    label: 'BTG/CAD, Bitcoin Gold Canadian Dollar'
  },
  {
    value: { id: '2828', name: 'Bitcoin Gold Swiss Franc', decimal: '2', symbol: 'BTG/CHF' },
    label: 'BTG/CHF, Bitcoin Gold Swiss Franc'
  },
  {
    value: { id: '2829', name: 'Bitcoin Gold Chinese Yuan', decimal: '2', symbol: 'BTG/CNY' },
    label: 'BTG/CNY, Bitcoin Gold Chinese Yuan'
  },
  {
    value: { id: '2830', name: 'Bitcoin Gold Ethereum', decimal: '5', symbol: 'BTG/ETH' },
    label: 'BTG/ETH, Bitcoin Gold Ethereum'
  },
  {
    value: { id: '2831', name: 'Bitcoin Gold Euro', decimal: '3', symbol: 'BTG/EUR' },
    label: 'BTG/EUR, Bitcoin Gold Euro'
  },
  {
    value: { id: '2832', name: 'Bitcoin Gold Hong Kong Dollar', decimal: '2', symbol: 'BTG/HKD' },
    label: 'BTG/HKD, Bitcoin Gold Hong Kong Dollar'
  },
  {
    value: { id: '2833', name: 'Bitcoin Gold Israeli Shekel', decimal: '3', symbol: 'BTG/ILS' },
    label: 'BTG/ILS, Bitcoin Gold Israeli Shekel'
  },
  {
    value: { id: '2834', name: 'Bitcoin Gold Indian Rupee', decimal: '2', symbol: 'BTG/INR' },
    label: 'BTG/INR, Bitcoin Gold Indian Rupee'
  },
  {
    value: { id: '2835', name: 'Bitcoin Gold Korean Won', decimal: '0', symbol: 'BTG/KRW' },
    label: 'BTG/KRW, Bitcoin Gold Korean Won'
  },
  {
    value: { id: '2836', name: 'Bitcoin Gold Mexican Peso', decimal: '2', symbol: 'BTG/MXN' },
    label: 'BTG/MXN, Bitcoin Gold Mexican Peso'
  },
  {
    value: { id: '2837', name: 'Bitcoin Gold Malaysian Ringgit', decimal: '2', symbol: 'BTG/MYR' },
    label: 'BTG/MYR, Bitcoin Gold Malaysian Ringgit'
  },
  {
    value: { id: '2838', name: 'Bitcoin Gold Polish Zloty', decimal: '2', symbol: 'BTG/PLN' },
    label: 'BTG/PLN, Bitcoin Gold Polish Zloty'
  },
  {
    value: { id: '2839', name: 'Bitcoin Gold Russian Ruble', decimal: '2', symbol: 'BTG/RUB' },
    label: 'BTG/RUB, Bitcoin Gold Russian Ruble'
  },
  {
    value: { id: '2840', name: 'Bitcoin Gold Saudi Riyal', decimal: '2', symbol: 'BTG/SAR' },
    label: 'BTG/SAR, Bitcoin Gold Saudi Riyal'
  },
  {
    value: { id: '2841', name: 'Bitcoin Gold Swedish Krona', decimal: '2', symbol: 'BTG/SEK' },
    label: 'BTG/SEK, Bitcoin Gold Swedish Krona'
  },
  {
    value: { id: '2842', name: 'Bitcoin Gold Turkish Lira', decimal: '2', symbol: 'BTG/TRY' },
    label: 'BTG/TRY, Bitcoin Gold Turkish Lira'
  },
  {
    value: { id: '2843', name: 'Bitcoin Gold US Dollar', decimal: '2', symbol: 'BTG/USD' },
    label: 'BTG/USD, Bitcoin Gold US Dollar'
  },
  {
    value: { id: '2844', name: 'Bitcoin Gold Vietnamese Dong', decimal: '0', symbol: 'BTG/VND' },
    label: 'BTG/VND, Bitcoin Gold Vietnamese Dong'
  },
  {
    value: { id: '2845', name: 'Bitcoin Gold South African Rand', decimal: '2', symbol: 'BTG/ZAR' },
    label: 'BTG/ZAR, Bitcoin Gold South African Rand'
  },
  {
    value: { id: '2846', name: 'Bitcoin Turbo Koin Litecoin', decimal: '8', symbol: 'BTK/LTC' },
    label: 'BTK/LTC, Bitcoin Turbo Koin Litecoin'
  },
  {
    value: { id: '2847', name: 'Bitcoin Turbo Koin US Dollar', decimal: '7', symbol: 'BTK/USD' },
    label: 'BTK/USD, Bitcoin Turbo Koin US Dollar'
  },
  {
    value: { id: '2848', name: 'Bytom Bitcoin', decimal: '8', symbol: 'BTM/BTC' },
    label: 'BTM/BTC, Bytom Bitcoin'
  },
  {
    value: { id: '2850', name: 'Bytom Ethereum', decimal: '6', symbol: 'BTM/ETH' },
    label: 'BTM/ETH, Bytom Ethereum'
  },
  {
    value: { id: '2852', name: 'Bytom US Dollar', decimal: '5', symbol: 'BTM/USD' },
    label: 'BTM/USD, Bytom US Dollar'
  },
  {
    value: { id: '2853', name: 'Bitmark Bitcoin', decimal: '7', symbol: 'BTMA/BTC' },
    label: 'BTMA/BTC, Bitmark Bitcoin'
  },
  {
    value: { id: '2854', name: 'Bitmark US Dollar', decimal: '5', symbol: 'BTMA/USD' },
    label: 'BTMA/USD, Bitmark US Dollar'
  },
  {
    value: { id: '2856', name: 'Bottos Ethereum', decimal: '6', symbol: 'BTO/ETH' },
    label: 'BTO/ETH, Bottos Ethereum'
  },
  {
    value: { id: '2857', name: 'Bottos US Dollar', decimal: '6', symbol: 'BTO/USD' },
    label: 'BTO/USD, Bottos US Dollar'
  },
  {
    value: { id: '2858', name: 'Bitcoin Planet Bitcoin', decimal: '8', symbol: 'BTPL/BTC' },
    label: 'BTPL/BTC, Bitcoin Planet Bitcoin'
  },
  {
    value: { id: '2859', name: 'Bitcoin Planet US Dollar', decimal: '6', symbol: 'BTPL/USD' },
    label: 'BTPL/USD, Bitcoin Planet US Dollar'
  },
  {
    value: { id: '2861', name: 'BitShares Bitcoin', decimal: '8', symbol: 'BTS/BTC' },
    label: 'BTS/BTC, BitShares Bitcoin'
  },
  {
    value: { id: '2863', name: 'BitShares US Dollar', decimal: '5', symbol: 'BTS/USD' },
    label: 'BTS/USD, BitShares US Dollar'
  },
  {
    value: { id: '2865', name: 'BitTorrent Binance Coin', decimal: '8', symbol: 'BTTN/BNB' },
    label: 'BTTN/BNB, BitTorrent Binance Coin'
  },
  {
    value: { id: '2867', name: 'BitTorrent Ethereum', decimal: '8', symbol: 'BTTN/ETH' },
    label: 'BTTN/ETH, BitTorrent Ethereum'
  },
  {
    value: { id: '2868', name: 'BitTorrent Indonesian Rupiah', decimal: '0', symbol: 'BTTN/IDR' },
    label: 'BTTN/IDR, BitTorrent Indonesian Rupiah'
  },
  {
    value: { id: '2869', name: 'BitTorrent Indian Rupee', decimal: '4', symbol: 'BTTN/INR' },
    label: 'BTTN/INR, BitTorrent Indian Rupee'
  },
  {
    value: { id: '2870', name: 'BitTorrent Korean Won', decimal: '2', symbol: 'BTTN/KRW' },
    label: 'BTTN/KRW, BitTorrent Korean Won'
  },
  {
    value: { id: '2872', name: 'BitTorrent Turkish Lira', decimal: '4', symbol: 'BTTN/TRY' },
    label: 'BTTN/TRY, BitTorrent Turkish Lira'
  },
  {
    value: { id: '2873', name: 'BitTorrent US Dollar', decimal: '6', symbol: 'BTTN/USD' },
    label: 'BTTN/USD, BitTorrent US Dollar'
  },
  {
    value: { id: '2877', name: 'Bitcore Bitcoin', decimal: '6', symbol: 'BTX/BTC' },
    label: 'BTX/BTC, Bitcore Bitcoin'
  },
  {
    value: { id: '2881', name: 'Bitcore US Dollar', decimal: '3', symbol: 'BTX/USD' },
    label: 'BTX/USD, Bitcore US Dollar'
  },
  {
    value: { id: '2882', name: 'BUMO Ethereum', decimal: '8', symbol: 'BU/ETH' },
    label: 'BU/ETH, BUMO Ethereum'
  },
  {
    value: { id: '2883', name: 'BUMO US Dollar', decimal: '4', symbol: 'BU/USD' },
    label: 'BU/USD, BUMO US Dollar'
  },
  {
    value: { id: '2884', name: 'Bubble Bitcoin', decimal: '8', symbol: 'BUB/BTC' },
    label: 'BUB/BTC, Bubble Bitcoin'
  },
  {
    value: { id: '2885', name: 'Bubble US Dollar', decimal: '6', symbol: 'BUB/USD' },
    label: 'BUB/USD, Bubble US Dollar'
  },
  {
    value: { id: '2889', name: 'SwagBucks US Dollar', decimal: '6', symbol: 'BUCKS/USD' },
    label: 'BUCKS/USD, SwagBucks US Dollar'
  },
  {
    value: { id: '2893', name: 'BumbaCoin US Dollar', decimal: '6', symbol: 'BUMBA/USD' },
    label: 'BUMBA/USD, BumbaCoin US Dollar'
  },
  {
    value: { id: '2894', name: 'BunnyCoin Bitcoin', decimal: '8', symbol: 'BUN/BTC' },
    label: 'BUN/BTC, BunnyCoin Bitcoin'
  },
  {
    value: { id: '2897', name: 'BunnyCoin US Dollar', decimal: '8', symbol: 'BUN/USD' },
    label: 'BUN/USD, BunnyCoin US Dollar'
  },
  {
    value: { id: '2898', name: 'Burst Bitcoin', decimal: '8', symbol: 'BURST/BTC' },
    label: 'BURST/BTC, Burst Bitcoin'
  },
  {
    value: { id: '2899', name: 'Burst US Dollar', decimal: '6', symbol: 'BURST/USD' },
    label: 'BURST/USD, Burst US Dollar'
  },
  {
    value: { id: '2900', name: 'BuzzCoin Bitcoin', decimal: '8', symbol: 'BUZZ/BTC' },
    label: 'BUZZ/BTC, BuzzCoin Bitcoin'
  },
  {
    value: { id: '2901', name: 'BuzzCoin US Dollar', decimal: '6', symbol: 'BUZZ/USD' },
    label: 'BUZZ/USD, BuzzCoin US Dollar'
  },
  {
    value: { id: '2902', name: 'BeaverCoin Bitcoin', decimal: '8', symbol: 'BVC/BTC' },
    label: 'BVC/BTC, BeaverCoin Bitcoin'
  },
  {
    value: { id: '2903', name: 'BeaverCoin US Dollar', decimal: '6', symbol: 'BVC/USD' },
    label: 'BVC/USD, BeaverCoin US Dollar'
  },
  {
    value: { id: '2907', name: 'Bulwark US Dollar', decimal: '5', symbol: 'BWK/USD' },
    label: 'BWK/USD, Bulwark US Dollar'
  },
  {
    value: { id: '2908', name: 'Bitcedi Bitcoin', decimal: '8', symbol: 'BXC/BTC' },
    label: 'BXC/BTC, Bitcedi Bitcoin'
  },
  {
    value: { id: '2911', name: 'Bitcedi US Dollar', decimal: '5', symbol: 'BXC/USD' },
    label: 'BXC/USD, Bitcedi US Dollar'
  },
  {
    value: { id: '2912', name: 'BitTokens Bitcoin', decimal: '6', symbol: 'BXT/BTC' },
    label: 'BXT/BTC, BitTokens Bitcoin'
  },
  {
    value: { id: '2913', name: 'BitTokens US Dollar', decimal: '5', symbol: 'BXT/USD' },
    label: 'BXT/USD, BitTokens US Dollar'
  },
  {
    value: { id: '2914', name: 'Bytecent Bitcoin', decimal: '7', symbol: 'BYC/BTC' },
    label: 'BYC/BTC, Bytecent Bitcoin'
  },
  {
    value: { id: '2915', name: 'Bytecent US Dollar', decimal: '5', symbol: 'BYC/USD' },
    label: 'BYC/USD, Bytecent US Dollar'
  },
  {
    value: { id: '2916', name: 'BZEdge Bitcoin', decimal: '8', symbol: 'BZE/BTC' },
    label: 'BZE/BTC, BZEdge Bitcoin'
  },
  {
    value: { id: '2917', name: 'BZEdge US Dollar', decimal: '6', symbol: 'BZE/USD' },
    label: 'BZE/USD, BZEdge US Dollar'
  },
  {
    value: { id: '2918', name: 'Bezant Bitcoin', decimal: '8', symbol: 'BZNT/BTC' },
    label: 'BZNT/BTC, Bezant Bitcoin'
  },
  {
    value: { id: '2919', name: 'Bezant Ethereum', decimal: '8', symbol: 'BZNT/ETH' },
    label: 'BZNT/ETH, Bezant Ethereum'
  },
  {
    value: { id: '2920', name: 'Bezant Korean Won', decimal: '2', symbol: 'BZNT/KRW' },
    label: 'BZNT/KRW, Bezant Korean Won'
  },
  {
    value: { id: '2921', name: 'Bezant US Dollar', decimal: '4', symbol: 'BZNT/USD' },
    label: 'BZNT/USD, Bezant US Dollar'
  },
  {
    value: { id: '2922', name: 'Bitcoin Zero Bitcoin', decimal: '8', symbol: 'BZX/BTC' },
    label: 'BZX/BTC, Bitcoin Zero Bitcoin'
  },
  {
    value: { id: '2923', name: 'Bitcoin Zero US Dollar', decimal: '4', symbol: 'BZX/USD' },
    label: 'BZX/USD, Bitcoin Zero US Dollar'
  },
  {
    value: { id: '2927', name: 'Coin2.1 US Dollar', decimal: '6', symbol: 'C2/USD' },
    label: 'C2/USD, Coin2.1 US Dollar'
  },
  {
    value: { id: '2928', name: 'CRYPTO20 Bitcoin', decimal: '8', symbol: 'C20/BTC' },
    label: 'C20/BTC, CRYPTO20 Bitcoin'
  },
  {
    value: { id: '2929', name: 'CRYPTO20 Ethereum', decimal: '6', symbol: 'C20/ETH' },
    label: 'C20/ETH, CRYPTO20 Ethereum'
  },
  {
    value: { id: '2930', name: 'CRYPTO20 US Dollar', decimal: '4', symbol: 'C20/USD' },
    label: 'C20/USD, CRYPTO20 US Dollar'
  },
  {
    value: { id: '2931', name: 'Cabbage Bitcoin', decimal: '8', symbol: 'CAB/BTC' },
    label: 'CAB/BTC, Cabbage Bitcoin'
  },
  {
    value: { id: '2932', name: 'Cabbage US Dollar', decimal: '6', symbol: 'CAB/USD' },
    label: 'CAB/USD, Cabbage US Dollar'
  },
  {
    value: { id: '2933', name: 'CacheCoin Bitcoin', decimal: '8', symbol: 'CACH/BTC' },
    label: 'CACH/BTC, CacheCoin Bitcoin'
  },
  {
    value: { id: '2936', name: 'CacheCoin US Dollar', decimal: '6', symbol: 'CACH/USD' },
    label: 'CACH/USD, CacheCoin US Dollar'
  },
  {
    value: { id: '2940', name: 'Change US Dollar', decimal: '5', symbol: 'CAG/USD' },
    label: 'CAG/USD, Change US Dollar'
  },
  {
    value: { id: '2941', name: 'CaliphCoin Bitcoin', decimal: '8', symbol: 'CALC/BTC' },
    label: 'CALC/BTC, CaliphCoin Bitcoin'
  },
  {
    value: { id: '2942', name: 'CaliphCoin US Dollar', decimal: '6', symbol: 'CALC/USD' },
    label: 'CALC/USD, CaliphCoin US Dollar'
  },
  {
    value: { id: '2945', name: 'CanYaCoin US Dollar', decimal: '5', symbol: 'CAN/USD' },
    label: 'CAN/USD, CanYaCoin US Dollar'
  },
  {
    value: { id: '2949', name: 'CannabisCoin US Dollar', decimal: '6', symbol: 'CANN/USD' },
    label: 'CANN/USD, CannabisCoin US Dollar'
  },
  {
    value: { id: '2954', name: 'Cappasity US Dollar', decimal: '6', symbol: 'CAPP/USD' },
    label: 'CAPP/USD, Cappasity US Dollar'
  },
  {
    value: { id: '2955', name: 'Carboncoin Bitcoin', decimal: '8', symbol: 'CARBON/BTC' },
    label: 'CARBON/BTC, Carboncoin Bitcoin'
  },
  {
    value: { id: '2956', name: 'Carboncoin US Dollar', decimal: '6', symbol: 'CARBON/USD' },
    label: 'CARBON/USD, Carboncoin US Dollar'
  },
  {
    value: { id: '2957', name: 'Cardstack Ethereum', decimal: '8', symbol: 'CARD/ETH' },
    label: 'CARD/ETH, Cardstack Ethereum'
  },
  {
    value: { id: '2958', name: 'Cardstack US Dollar', decimal: '8', symbol: 'CARD/USD' },
    label: 'CARD/USD, Cardstack US Dollar'
  },
  {
    value: { id: '2961', name: 'Cashaa US Dollar', decimal: '6', symbol: 'CAS/USD' },
    label: 'CAS/USD, Cashaa US Dollar'
  },
  {
    value: { id: '2962', name: 'Cashcoin Ethereum', decimal: '8', symbol: 'CASH/ETH' },
    label: 'CASH/ETH, Cashcoin Ethereum'
  },
  {
    value: { id: '2963', name: 'Cashcoin US Dollar', decimal: '6', symbol: 'CASH/USD' },
    label: 'CASH/USD, Cashcoin US Dollar'
  },
  {
    value: { id: '2969', name: 'Catcoin Bitcoin', decimal: '8', symbol: 'CATC/BTC' },
    label: 'CATC/BTC, Catcoin Bitcoin'
  },
  {
    value: { id: '2970', name: 'Catcoin US Dollar', decimal: '6', symbol: 'CATC/USD' },
    label: 'CATC/USD, Catcoin US Dollar'
  },
  {
    value: { id: '2971', name: 'CBD Crystals Bitcoin', decimal: '8', symbol: 'CBD/BTC' },
    label: 'CBD/BTC, CBD Crystals Bitcoin'
  },
  {
    value: { id: '2972', name: 'CBD Crystals US Dollar', decimal: '6', symbol: 'CBD/USD' },
    label: 'CBD/USD, CBD Crystals US Dollar'
  },
  {
    value: { id: '2974', name: 'CommerceBlock US Dollar', decimal: '5', symbol: 'CBT/USD' },
    label: 'CBT/USD, CommerceBlock US Dollar'
  },
  {
    value: { id: '2975', name: 'Crypto Bullion Bitcoin', decimal: '6', symbol: 'CBX/BTC' },
    label: 'CBX/BTC, Crypto Bullion Bitcoin'
  },
  {
    value: { id: '2976', name: 'Crypto Bullion US Dollar', decimal: '5', symbol: 'CBX/USD' },
    label: 'CBX/USD, Crypto Bullion US Dollar'
  },
  {
    value: { id: '2980', name: 'Bullion US Dollar', decimal: '4', symbol: 'CBXN/USD' },
    label: 'CBXN/USD, Bullion US Dollar'
  },
  {
    value: { id: '2985', name: 'CannaCoin Bitcoin', decimal: '8', symbol: 'CCN/BTC' },
    label: 'CCN/BTC, CannaCoin Bitcoin'
  },
  {
    value: { id: '2988', name: 'CannaCoin US Dollar', decimal: '6', symbol: 'CCN/USD' },
    label: 'CCN/USD, CannaCoin US Dollar'
  },
  {
    value: { id: '2990', name: 'Ccore US Dollar', decimal: '5', symbol: 'CCO/USD' },
    label: 'CCO/USD, Ccore US Dollar'
  },
  {
    value: { id: '2991', name: 'CryptoCarbon Bitcoin', decimal: '8', symbol: 'CCRB/BTC' },
    label: 'CCRB/BTC, CryptoCarbon Bitcoin'
  },
  {
    value: { id: '2992', name: 'CryptoCarbon US Dollar', decimal: '6', symbol: 'CCRB/USD' },
    label: 'CCRB/USD, CryptoCarbon US Dollar'
  },
  {
    value: { id: '2993', name: 'Crystal Clear Bitcoin', decimal: '8', symbol: 'CCT/BTC' },
    label: 'CCT/BTC, Crystal Clear Bitcoin'
  },
  {
    value: { id: '2995', name: 'Crystal Clear US Dollar', decimal: '6', symbol: 'CCT/USD' },
    label: 'CCT/USD, Crystal Clear US Dollar'
  },
  {
    value: { id: '2996', name: 'Condominium Bitcoin', decimal: '8', symbol: 'CDM/BTC' },
    label: 'CDM/BTC, Condominium Bitcoin'
  },
  {
    value: { id: '2997', name: 'Condominium US Dollar', decimal: '4', symbol: 'CDM/USD' },
    label: 'CDM/USD, Condominium US Dollar'
  },
  {
    value: { id: '3001', name: 'Canada eCoin US Dollar', decimal: '6', symbol: 'CDN/USD' },
    label: 'CDN/USD, Canada eCoin US Dollar'
  },
  {
    value: { id: '3002', name: 'CoinDash Bitcoin', decimal: '8', symbol: 'CDT/BTC' },
    label: 'CDT/BTC, CoinDash Bitcoin'
  },
  {
    value: { id: '3003', name: 'CoinDash Ethereum', decimal: '6', symbol: 'CDT/ETH' },
    label: 'CDT/ETH, CoinDash Ethereum'
  },
  {
    value: { id: '3004', name: 'CoinDash US Dollar', decimal: '6', symbol: 'CDT/USD' },
    label: 'CDT/USD, CoinDash US Dollar'
  },
  {
    value: { id: '3005', name: 'CDX Network Bitcoin', decimal: '8', symbol: 'CDX/BTC' },
    label: 'CDX/BTC, CDX Network Bitcoin'
  },
  {
    value: { id: '3007', name: 'CDX Network US Dollar', decimal: '6', symbol: 'CDX/USD' },
    label: 'CDX/USD, CDX Network US Dollar'
  },
  {
    value: { id: '3008', name: 'CEEK VR Ethereum', decimal: '8', symbol: 'CEEK/ETH' },
    label: 'CEEK/ETH, CEEK VR Ethereum'
  },
  {
    value: { id: '3009', name: 'CEEK VR US Dollar', decimal: '8', symbol: 'CEEK/USD' },
    label: 'CEEK/USD, CEEK VR US Dollar'
  },
  {
    value: { id: '3011', name: 'CryptopiaFeeShares US Dollar', decimal: '2', symbol: 'CEFS/USD' },
    label: 'CEFS/USD, CryptopiaFeeShares US Dollar'
  },
  {
    value: { id: '3012', name: 'Celsius Ethereum', decimal: '8', symbol: 'CEL/ETH' },
    label: 'CEL/ETH, Celsius Ethereum'
  },
  {
    value: { id: '3013', name: 'Celsius US Dollar', decimal: '8', symbol: 'CEL/USD' },
    label: 'CEL/USD, Celsius US Dollar'
  },
  {
    value: { id: '3015', name: 'Centrality Ethereum', decimal: '8', symbol: 'CENNZ/ETH' },
    label: 'CENNZ/ETH, Centrality Ethereum'
  },
  {
    value: { id: '3016', name: 'Centrality US Dollar', decimal: '6', symbol: 'CENNZ/USD' },
    label: 'CENNZ/USD, Centrality US Dollar'
  },
  {
    value: { id: '3017', name: 'CoinEx Token Bitcoin Cash', decimal: '8', symbol: 'CET/BCH' },
    label: 'CET/BCH, CoinEx Token Bitcoin Cash'
  },
  {
    value: { id: '3018', name: 'CoinEx Token Bitcoin', decimal: '8', symbol: 'CET/BTC' },
    label: 'CET/BTC, CoinEx Token Bitcoin'
  },
  {
    value: { id: '3019', name: 'CoinEx Token Ethereum', decimal: '8', symbol: 'CET/ETH' },
    label: 'CET/ETH, CoinEx Token Ethereum'
  },
  {
    value: { id: '3020', name: 'CoinEx Token US Dollar', decimal: '8', symbol: 'CET/USD' },
    label: 'CET/USD, CoinEx Token US Dollar'
  },
  {
    value: { id: '3021', name: 'Californium Bitcoin', decimal: '8', symbol: 'CF/BTC' },
    label: 'CF/BTC, Californium Bitcoin'
  },
  {
    value: { id: '3022', name: 'Californium US Dollar', decimal: '6', symbol: 'CF/USD' },
    label: 'CF/USD, Californium US Dollar'
  },
  {
    value: { id: '3023', name: 'CoffeeCoin Bitcoin', decimal: '8', symbol: 'CFC/BTC' },
    label: 'CFC/BTC, CoffeeCoin Bitcoin'
  },
  {
    value: { id: '3024', name: 'CoffeeCoin US Dollar', decimal: '6', symbol: 'CFC/USD' },
    label: 'CFC/USD, CoffeeCoin US Dollar'
  },
  {
    value: { id: '3025', name: 'Confido Bitcoin', decimal: '8', symbol: 'CFD/BTC' },
    label: 'CFD/BTC, Confido Bitcoin'
  },
  {
    value: { id: '3027', name: 'Confido US Dollar', decimal: '5', symbol: 'CFD/USD' },
    label: 'CFD/USD, Confido US Dollar'
  },
  {
    value: { id: '3030', name: 'Cofound.it US Dollar', decimal: '6', symbol: 'CFI/USD' },
    label: 'CFI/USD, Cofound.it US Dollar'
  },
  {
    value: { id: '3031', name: 'CryptoForecast Bitcoin', decimal: '8', symbol: 'CFT/BTC' },
    label: 'CFT/BTC, CryptoForecast Bitcoin'
  },
  {
    value: { id: '3034', name: 'CryptoForecast US Dollar', decimal: '6', symbol: 'CFT/USD' },
    label: 'CFT/USD, CryptoForecast US Dollar'
  },
  {
    value: { id: '3036', name: 'CFun US Dollar', decimal: '6', symbol: 'CFUN/USD' },
    label: 'CFUN/USD, CFun US Dollar'
  },
  {
    value: { id: '3037', name: 'ChatCoin Bitcoin', decimal: '8', symbol: 'CHAT/BTC' },
    label: 'CHAT/BTC, ChatCoin Bitcoin'
  },
  {
    value: { id: '3038', name: 'ChatCoin Ethereum', decimal: '6', symbol: 'CHAT/ETH' },
    label: 'CHAT/ETH, ChatCoin Ethereum'
  },
  {
    value: { id: '3040', name: 'ChatCoin US Dollar', decimal: '5', symbol: 'CHAT/USD' },
    label: 'CHAT/USD, ChatCoin US Dollar'
  },
  {
    value: { id: '3041', name: 'ChainCoin Bitcoin', decimal: '8', symbol: 'CHC/BTC' },
    label: 'CHC/BTC, ChainCoin Bitcoin'
  },
  {
    value: { id: '3044', name: 'ChainCoin US Dollar', decimal: '6', symbol: 'CHC/USD' },
    label: 'CHC/USD, ChainCoin US Dollar'
  },
  {
    value: { id: '3045', name: 'Cheapcoin Bitcoin', decimal: '8', symbol: 'CHEAP/BTC' },
    label: 'CHEAP/BTC, Cheapcoin Bitcoin'
  },
  {
    value: { id: '3046', name: 'Cheapcoin US Dollar', decimal: '6', symbol: 'CHEAP/USD' },
    label: 'CHEAP/USD, Cheapcoin US Dollar'
  },
  {
    value: { id: '3050', name: 'ChessCoin US Dollar', decimal: '6', symbol: 'CHESS/USD' },
    label: 'CHESS/USD, ChessCoin US Dollar'
  },
  {
    value: { id: '3051', name: 'CHIPS Bitcoin', decimal: '8', symbol: 'CHIPS/BTC' },
    label: 'CHIPS/BTC, CHIPS Bitcoin'
  },
  {
    value: { id: '3052', name: 'CHIPS US Dollar', decimal: '5', symbol: 'CHIPS/USD' },
    label: 'CHIPS/USD, CHIPS US Dollar'
  },
  {
    value: { id: '3056', name: 'Cryptojacks US Dollar', decimal: '6', symbol: 'CJ/USD' },
    label: 'CJ/USD, Cryptojacks US Dollar'
  },
  {
    value: { id: '3060', name: 'Clams US Dollar', decimal: '4', symbol: 'CLAM/USD' },
    label: 'CLAM/USD, Clams US Dollar'
  },
  {
    value: { id: '3063', name: 'Cloud US Dollar', decimal: '6', symbol: 'CLD/USD' },
    label: 'CLD/USD, Cloud US Dollar'
  },
  {
    value: { id: '3064', name: 'Callisto Network Bitcoin', decimal: '8', symbol: 'CLO/BTC' },
    label: 'CLO/BTC, Callisto Network Bitcoin'
  },
  {
    value: { id: '3065', name: 'Callisto Network Ethereum', decimal: '8', symbol: 'CLO/ETH' },
    label: 'CLO/ETH, Callisto Network Ethereum'
  },
  {
    value: { id: '3066', name: 'Callisto Network US Dollar', decimal: '6', symbol: 'CLO/USD' },
    label: 'CLO/USD, Callisto Network US Dollar'
  },
  {
    value: { id: '3071', name: 'CloakCoin US Dollar', decimal: '4', symbol: 'CLOAK/USD' },
    label: 'CLOAK/USD, CloakCoin US Dollar'
  },
  {
    value: { id: '3072', name: 'ClubCoin Bitcoin', decimal: '6', symbol: 'CLUB/BTC' },
    label: 'CLUB/BTC, ClubCoin Bitcoin'
  },
  {
    value: { id: '3073', name: 'ClubCoin US Dollar', decimal: '5', symbol: 'CLUB/USD' },
    label: 'CLUB/USD, ClubCoin US Dollar'
  },
  {
    value: { id: '3074', name: 'Crowd Machine US Dollar', decimal: '4', symbol: 'CMCT/USD' },
    label: 'CMCT/USD, Crowd Machine US Dollar'
  },
  {
    value: { id: '3075', name: 'Cashme Bitcoin', decimal: '8', symbol: 'CME/BTC' },
    label: 'CME/BTC, Cashme Bitcoin'
  },
  {
    value: { id: '3076', name: 'Cashme US Dollar', decimal: '6', symbol: 'CME/USD' },
    label: 'CME/USD, Cashme US Dollar'
  },
  {
    value: { id: '3077', name: 'Compcoin Bitcoin', decimal: '6', symbol: 'CMP/BTC' },
    label: 'CMP/BTC, Compcoin Bitcoin'
  },
  {
    value: { id: '3080', name: 'Compcoin US Dollar', decimal: '5', symbol: 'CMP/USD' },
    label: 'CMP/USD, Compcoin US Dollar'
  },
  {
    value: { id: '3081', name: 'CampusCoin Bitcoin', decimal: '8', symbol: 'CMPCO/BTC' },
    label: 'CMPCO/BTC, CampusCoin Bitcoin'
  },
  {
    value: { id: '3084', name: 'CampusCoin US Dollar', decimal: '6', symbol: 'CMPCO/USD' },
    label: 'CMPCO/USD, CampusCoin US Dollar'
  },
  {
    value: { id: '3085', name: 'COMSA [ETH] Bitcoin', decimal: '8', symbol: 'CMS/BTC' },
    label: 'CMS/BTC, COMSA [ETH] Bitcoin'
  },
  {
    value: { id: '3086', name: 'COMSA [ETH] US Dollar', decimal: '5', symbol: 'CMS/USD' },
    label: 'CMS/USD, COMSA [ETH] US Dollar'
  },
  {
    value: { id: '3089', name: 'CyberMiles Ethereum', decimal: '6', symbol: 'CMT/ETH' },
    label: 'CMT/ETH, CyberMiles Ethereum'
  },
  {
    value: { id: '3090', name: 'CyberMiles US Dollar', decimal: '5', symbol: 'CMT/USD' },
    label: 'CMT/USD, CyberMiles US Dollar'
  },
  {
    value: { id: '3091', name: 'Comet Bitcoin', decimal: '8', symbol: 'CMTA/BTC' },
    label: 'CMTA/BTC, Comet Bitcoin'
  },
  {
    value: { id: '3094', name: 'Comet US Dollar', decimal: '6', symbol: 'CMTA/USD' },
    label: 'CMTA/USD, Comet US Dollar'
  },
  {
    value: { id: '3096', name: 'Cindicator Bitcoin', decimal: '8', symbol: 'CND/BTC' },
    label: 'CND/BTC, Cindicator Bitcoin'
  },
  {
    value: { id: '3097', name: 'Cindicator Ethereum', decimal: '6', symbol: 'CND/ETH' },
    label: 'CND/ETH, Cindicator Ethereum'
  },
  {
    value: { id: '3098', name: 'Cindicator US Dollar', decimal: '6', symbol: 'CND/USD' },
    label: 'CND/USD, Cindicator US Dollar'
  },
  {
    value: {
      id: '3099',
      name: 'Content Neutrality Network US Dollar',
      decimal: '4',
      symbol: 'CNN/USD'
    },
    label: 'CNN/USD, Content Neutrality Network US Dollar'
  },
  {
    value: { id: '3103', name: 'Cannation US Dollar', decimal: '6', symbol: 'CNNC/USD' },
    label: 'CNNC/USD, Cannation US Dollar'
  },
  {
    value: { id: '3107', name: 'Coin(O) US Dollar', decimal: '6', symbol: 'CNO/USD' },
    label: 'CNO/USD, Coin(O) US Dollar'
  },
  {
    value: { id: '3108', name: 'Centurion Bitcoin', decimal: '8', symbol: 'CNT/BTC' },
    label: 'CNT/BTC, Centurion Bitcoin'
  },
  {
    value: { id: '3109', name: 'Centurion US Dollar', decimal: '6', symbol: 'CNT/USD' },
    label: 'CNT/USD, Centurion US Dollar'
  },
  {
    value: { id: '3112', name: 'Cryptonex US Dollar', decimal: '4', symbol: 'CNX/USD' },
    label: 'CNX/USD, Cryptonex US Dollar'
  },
  {
    value: { id: '3116', name: 'BitCoal US Dollar', decimal: '6', symbol: 'COAL/USD' },
    label: 'COAL/USD, BitCoal US Dollar'
  },
  {
    value: { id: '3119', name: 'Cobinhood US Dollar', decimal: '6', symbol: 'COB/USD' },
    label: 'COB/USD, Cobinhood US Dollar'
  },
  {
    value: { id: '3120', name: 'CoinFi Bitcoin', decimal: '8', symbol: 'COFI/BTC' },
    label: 'COFI/BTC, CoinFi Bitcoin'
  },
  {
    value: { id: '3121', name: 'CoinFi Ethereum', decimal: '8', symbol: 'COFI/ETH' },
    label: 'COFI/ETH, CoinFi Ethereum'
  },
  {
    value: { id: '3122', name: 'CoinFi US Dollar', decimal: '4', symbol: 'COFI/USD' },
    label: 'COFI/USD, CoinFi US Dollar'
  },
  {
    value: { id: '3124', name: 'ColossusXT US Dollar', decimal: '6', symbol: 'COLX/USD' },
    label: 'COLX/USD, ColossusXT US Dollar'
  },
  {
    value: { id: '3128', name: 'PayCon US Dollar', decimal: '6', symbol: 'CON/USD' },
    label: 'CON/USD, PayCon US Dollar'
  },
  {
    value: { id: '3129', name: 'Concoin Bitcoin', decimal: '8', symbol: 'CONX/BTC' },
    label: 'CONX/BTC, Concoin Bitcoin'
  },
  {
    value: { id: '3130', name: 'Concoin US Dollar', decimal: '6', symbol: 'CONX/USD' },
    label: 'CONX/USD, Concoin US Dollar'
  },
  {
    value: { id: '3131', name: 'CORION Bitcoin', decimal: '8', symbol: 'COR/BTC' },
    label: 'COR/BTC, CORION Bitcoin'
  },
  {
    value: { id: '3134', name: 'CORION US Dollar', decimal: '6', symbol: 'COR/USD' },
    label: 'COR/USD, CORION US Dollar'
  },
  {
    value: { id: '3135', name: 'CorgiCoin Bitcoin', decimal: '8', symbol: 'CORG/BTC' },
    label: 'CORG/BTC, CorgiCoin Bitcoin'
  },
  {
    value: { id: '3136', name: 'CorgiCoin US Dollar', decimal: '6', symbol: 'CORG/USD' },
    label: 'CORG/USD, CorgiCoin US Dollar'
  },
  {
    value: { id: '3138', name: 'Cosmo Coin US Dollar', decimal: '4', symbol: 'COSM/USD' },
    label: 'COSM/USD, Cosmo Coin US Dollar'
  },
  {
    value: { id: '3140', name: 'COS US Dollar', decimal: '5', symbol: 'COSS/USD' },
    label: 'COSS/USD, COS US Dollar'
  },
  {
    value: { id: '3141', name: 'CoTrader Bancor', decimal: '8', symbol: 'COT/BNT' },
    label: 'COT/BNT, CoTrader Bancor'
  },
  {
    value: { id: '3142', name: 'CoTrader Ethereum', decimal: '8', symbol: 'COT/ETH' },
    label: 'COT/ETH, CoTrader Ethereum'
  },
  {
    value: { id: '3143', name: 'CoTrader US Dollar', decimal: '6', symbol: 'COT/USD' },
    label: 'COT/USD, CoTrader US Dollar'
  },
  {
    value: { id: '3144', name: 'Coupecoin Bitcoin', decimal: '8', symbol: 'COUPE/BTC' },
    label: 'COUPE/BTC, Coupecoin Bitcoin'
  },
  {
    value: { id: '3146', name: 'Coupecoin US Dollar', decimal: '7', symbol: 'COUPE/USD' },
    label: 'COUPE/USD, Coupecoin US Dollar'
  },
  {
    value: { id: '3147', name: 'Covesting Bitcoin', decimal: '4', symbol: 'COV/BTC' },
    label: 'COV/BTC, Covesting Bitcoin'
  },
  {
    value: { id: '3148', name: 'Covesting Ethereum', decimal: '7', symbol: 'COV/ETH' },
    label: 'COV/ETH, Covesting Ethereum'
  },
  {
    value: { id: '3149', name: 'Covesting US Dollar', decimal: '4', symbol: 'COV/USD' },
    label: 'COV/USD, Covesting US Dollar'
  },
  {
    value: { id: '3151', name: 'Circuits of Value US Dollar', decimal: '6', symbol: 'COVAL/USD' },
    label: 'COVAL/USD, Circuits of Value US Dollar'
  },
  {
    value: { id: '3152', name: 'Capricoin Bitcoin', decimal: '8', symbol: 'CPC/BTC' },
    label: 'CPC/BTC, Capricoin Bitcoin'
  },
  {
    value: { id: '3153', name: 'Capricoin Ethereum', decimal: '6', symbol: 'CPC/ETH' },
    label: 'CPC/ETH, Capricoin Ethereum'
  },
  {
    value: { id: '3154', name: 'Capricoin US Dollar', decimal: '5', symbol: 'CPC/USD' },
    label: 'CPC/USD, Capricoin US Dollar'
  },
  {
    value: { id: '3155', name: 'CPChain Bitcoin', decimal: '8', symbol: 'CPCH/BTC' },
    label: 'CPCH/BTC, CPChain Bitcoin'
  },
  {
    value: { id: '3156', name: 'CPChain Ethereum', decimal: '6', symbol: 'CPCH/ETH' },
    label: 'CPCH/ETH, CPChain Ethereum'
  },
  {
    value: { id: '3157', name: 'CPChain US Dollar', decimal: '6', symbol: 'CPCH/USD' },
    label: 'CPCH/USD, CPChain US Dollar'
  },
  {
    value: { id: '3158', name: 'CompuCoin Bitcoin', decimal: '8', symbol: 'CPN/BTC' },
    label: 'CPN/BTC, CompuCoin Bitcoin'
  },
  {
    value: { id: '3161', name: 'CompuCoin US Dollar', decimal: '6', symbol: 'CPN/USD' },
    label: 'CPN/USD, CompuCoin US Dollar'
  },
  {
    value: { id: '3162', name: 'Cryptaur Bitcoin', decimal: '4', symbol: 'CPT/BTC' },
    label: 'CPT/BTC, Cryptaur Bitcoin'
  },
  {
    value: { id: '3163', name: 'Cryptaur US Dollar', decimal: '4', symbol: 'CPT/USD' },
    label: 'CPT/USD, Cryptaur US Dollar'
  },
  {
    value: { id: '3170', name: 'Crave US Dollar', decimal: '5', symbol: 'CRAVE/USD' },
    label: 'CRAVE/USD, Crave US Dollar'
  },
  {
    value: { id: '3173', name: 'Creditbit US Dollar', decimal: '6', symbol: 'CRB/USD' },
    label: 'CRB/USD, Creditbit US Dollar'
  },
  {
    value: { id: '3174', name: 'CryCash Bitcoin', decimal: '8', symbol: 'CRCA/BTC' },
    label: 'CRCA/BTC, CryCash Bitcoin'
  },
  {
    value: { id: '3175', name: 'CryCash Dogecoin', decimal: '2', symbol: 'CRCA/DOGE' },
    label: 'CRCA/DOGE, CryCash Dogecoin'
  },
  {
    value: { id: '3176', name: 'CryCash Ethereum', decimal: '6', symbol: 'CRCA/ETH' },
    label: 'CRCA/ETH, CryCash Ethereum'
  },
  {
    value: { id: '3177', name: 'CryCash Russian Ruble', decimal: '3', symbol: 'CRCA/RUB' },
    label: 'CRCA/RUB, CryCash Russian Ruble'
  },
  {
    value: { id: '3178', name: 'CryCash US Dollar', decimal: '5', symbol: 'CRCA/USD' },
    label: 'CRCA/USD, CryCash US Dollar'
  },
  {
    value: { id: '3179', name: 'CryCash Waves', decimal: '6', symbol: 'CRCA/WAVES' },
    label: 'CRCA/WAVES, CryCash Waves'
  },
  {
    value: { id: '3180', name: 'Credence Coin Bitcoin', decimal: '8', symbol: 'CRDNC/BTC' },
    label: 'CRDNC/BTC, Credence Coin Bitcoin'
  },
  {
    value: { id: '3181', name: 'Credence Coin US Dollar', decimal: '6', symbol: 'CRDNC/USD' },
    label: 'CRDNC/USD, Credence Coin US Dollar'
  },
  {
    value: { id: '3182', name: 'CREA Bitcoin', decimal: '8', symbol: 'CREA/BTC' },
    label: 'CREA/BTC, CREA Bitcoin'
  },
  {
    value: { id: '3183', name: 'CREA US Dollar', decimal: '6', symbol: 'CREA/USD' },
    label: 'CREA/USD, CREA US Dollar'
  },
  {
    value: { id: '3184', name: 'Verify Bitcoin', decimal: '8', symbol: 'CRED/BTC' },
    label: 'CRED/BTC, Verify Bitcoin'
  },
  {
    value: { id: '3186', name: 'Verify US Dollar', decimal: '6', symbol: 'CRED/USD' },
    label: 'CRED/USD, Verify US Dollar'
  },
  {
    value: { id: '3189', name: 'Credo US Dollar', decimal: '6', symbol: 'CREDO/USD' },
    label: 'CREDO/USD, Credo US Dollar'
  },
  {
    value: { id: '3192', name: 'CrevaCoin US Dollar', decimal: '7', symbol: 'CREVA/USD' },
    label: 'CREVA/USD, CrevaCoin US Dollar'
  },
  {
    value: { id: '3194', name: 'Cream US Dollar', decimal: '6', symbol: 'CRM/USD' },
    label: 'CRM/USD, Cream US Dollar'
  },
  {
    value: { id: '3195', name: 'Crypto.com Chain Korean Won', decimal: '2', symbol: 'CRO/KRW' },
    label: 'CRO/KRW, Crypto.com Chain Korean Won'
  },
  {
    value: { id: '3196', name: 'Crypto.com Chain US Dollar', decimal: '4', symbol: 'CRO/USD' },
    label: 'CRO/USD, Crypto.com Chain US Dollar'
  },
  {
    value: { id: '3197', name: 'Crypterium Bitcoin', decimal: '7', symbol: 'CRPT/BTC' },
    label: 'CRPT/BTC, Crypterium Bitcoin'
  },
  {
    value: { id: '3198', name: 'Crypterium US Dollar', decimal: '5', symbol: 'CRPT/USD' },
    label: 'CRPT/USD, Crypterium US Dollar'
  },
  {
    value: { id: '3199', name: 'Corethum Ethereum', decimal: '8', symbol: 'CRTM/ETH' },
    label: 'CRTM/ETH, Corethum Ethereum'
  },
  {
    value: { id: '3200', name: 'Corethum US Dollar', decimal: '6', symbol: 'CRTM/USD' },
    label: 'CRTM/USD, Corethum US Dollar'
  },
  {
    value: { id: '3201', name: 'Crown Bitcoin', decimal: '7', symbol: 'CRW/BTC' },
    label: 'CRW/BTC, Crown Bitcoin'
  },
  {
    value: { id: '3202', name: 'Crown US Dollar', decimal: '5', symbol: 'CRW/USD' },
    label: 'CRW/USD, Crown US Dollar'
  },
  {
    value: { id: '3206', name: 'Chronos US Dollar', decimal: '6', symbol: 'CRX/USD' },
    label: 'CRX/USD, Chronos US Dollar'
  },
  {
    value: { id: '3207', name: 'CryptCoin Bitcoin', decimal: '8', symbol: 'CRYPT/BTC' },
    label: 'CRYPT/BTC, CryptCoin Bitcoin'
  },
  {
    value: { id: '3210', name: 'CryptCoin US Dollar', decimal: '6', symbol: 'CRYPT/USD' },
    label: 'CRYPT/USD, CryptCoin US Dollar'
  },
  {
    value: { id: '3211', name: 'Credits Bitcoin', decimal: '8', symbol: 'CS/BTC' },
    label: 'CS/BTC, Credits Bitcoin'
  },
  {
    value: { id: '3212', name: 'Credits Ethereum', decimal: '6', symbol: 'CS/ETH' },
    label: 'CS/ETH, Credits Ethereum'
  },
  {
    value: { id: '3213', name: 'Credits US Dollar', decimal: '5', symbol: 'CS/USD' },
    label: 'CS/USD, Credits US Dollar'
  },
  {
    value: { id: '3214', name: 'CasinoCoin Bitcoin', decimal: '8', symbol: 'CSC/BTC' },
    label: 'CSC/BTC, CasinoCoin Bitcoin'
  },
  {
    value: { id: '3215', name: 'CasinoCoin US Dollar', decimal: '6', symbol: 'CSC/USD' },
    label: 'CSC/USD, CasinoCoin US Dollar'
  },
  {
    value: { id: '3216', name: 'BitDice Bitcoin', decimal: '8', symbol: 'CSNO/BTC' },
    label: 'CSNO/BTC, BitDice Bitcoin'
  },
  {
    value: { id: '3218', name: 'BitDice US Dollar', decimal: '6', symbol: 'CSNO/USD' },
    label: 'CSNO/USD, BitDice US Dollar'
  },
  {
    value: { id: '3219', name: 'Coimatic 2.0 Bitcoin', decimal: '8', symbol: 'CTIC2/BTC' },
    label: 'CTIC2/BTC, Coimatic 2.0 Bitcoin'
  },
  {
    value: { id: '3220', name: 'Coimatic 2.0 US Dollar', decimal: '6', symbol: 'CTIC2/USD' },
    label: 'CTIC2/USD, Coimatic 2.0 US Dollar'
  },
  {
    value: { id: '3221', name: 'Coimatic 3.0 Bitcoin', decimal: '8', symbol: 'CTIC3/BTC' },
    label: 'CTIC3/BTC, Coimatic 3.0 Bitcoin'
  },
  {
    value: { id: '3224', name: 'Coimatic 3.0 US Dollar', decimal: '6', symbol: 'CTIC3/USD' },
    label: 'CTIC3/USD, Coimatic 3.0 US Dollar'
  },
  {
    value: { id: '3229', name: 'Centra US Dollar', decimal: '5', symbol: 'CTR/USD' },
    label: 'CTR/USD, Centra US Dollar'
  },
  {
    value: { id: '3231', name: 'CarTaxi Token Ethereum', decimal: '7', symbol: 'CTX/ETH' },
    label: 'CTX/ETH, CarTaxi Token Ethereum'
  },
  {
    value: { id: '3232', name: 'CarTaxi Token US Dollar', decimal: '6', symbol: 'CTX/USD' },
    label: 'CTX/USD, CarTaxi Token US Dollar'
  },
  {
    value: { id: '3234', name: 'Cortex Bitcoin', decimal: '8', symbol: 'CTXC/BTC' },
    label: 'CTXC/BTC, Cortex Bitcoin'
  },
  {
    value: { id: '3235', name: 'Cortex Ethereum', decimal: '8', symbol: 'CTXC/ETH' },
    label: 'CTXC/ETH, Cortex Ethereum'
  },
  {
    value: { id: '3236', name: 'Cortex US Dollar', decimal: '6', symbol: 'CTXC/USD' },
    label: 'CTXC/USD, Cortex US Dollar'
  },
  {
    value: { id: '3239', name: 'Curecoin Bitcoin', decimal: '8', symbol: 'CURE/BTC' },
    label: 'CURE/BTC, Curecoin Bitcoin'
  },
  {
    value: { id: '3240', name: 'Curecoin US Dollar', decimal: '5', symbol: 'CURE/USD' },
    label: 'CURE/USD, Curecoin US Dollar'
  },
  {
    value: { id: '3241', name: 'carVertical Bitcoin', decimal: '8', symbol: 'CV/BTC' },
    label: 'CV/BTC, carVertical Bitcoin'
  },
  {
    value: { id: '3242', name: 'carVertical Ethereum', decimal: '8', symbol: 'CV/ETH' },
    label: 'CV/ETH, carVertical Ethereum'
  },
  {
    value: { id: '3243', name: 'carVertical US Dollar', decimal: '6', symbol: 'CV/USD' },
    label: 'CV/USD, carVertical US Dollar'
  },
  {
    value: { id: '3244', name: 'Colossuscoin V2 Bitcoin', decimal: '8', symbol: 'CV2/BTC' },
    label: 'CV2/BTC, Colossuscoin V2 Bitcoin'
  },
  {
    value: { id: '3245', name: 'Colossuscoin V2 US Dollar', decimal: '7', symbol: 'CV2/USD' },
    label: 'CV2/USD, Colossuscoin V2 US Dollar'
  },
  {
    value: { id: '3247', name: 'Civic Bitcoin', decimal: '8', symbol: 'CVC/BTC' },
    label: 'CVC/BTC, Civic Bitcoin'
  },
  {
    value: { id: '3248', name: 'Civic Ethereum', decimal: '8', symbol: 'CVC/ETH' },
    label: 'CVC/ETH, Civic Ethereum'
  },
  {
    value: { id: '3249', name: 'Civic Korean Won', decimal: '2', symbol: 'CVC/KRW' },
    label: 'CVC/KRW, Civic Korean Won'
  },
  {
    value: { id: '3250', name: 'Civic Thai Baht', decimal: '2', symbol: 'CVC/THB' },
    label: 'CVC/THB, Civic Thai Baht'
  },
  {
    value: { id: '3251', name: 'Civic US Dollar', decimal: '5', symbol: 'CVC/USD' },
    label: 'CVC/USD, Civic US Dollar'
  },
  {
    value: { id: '3252', name: 'CyberVein Bitcoin', decimal: '8', symbol: 'CVT/BTC' },
    label: 'CVT/BTC, CyberVein Bitcoin'
  },
  {
    value: { id: '3253', name: 'CyberVein Ethereum', decimal: '6', symbol: 'CVT/ETH' },
    label: 'CVT/ETH, CyberVein Ethereum'
  },
  {
    value: { id: '3254', name: 'CyberVein US Dollar', decimal: '6', symbol: 'CVT/USD' },
    label: 'CVT/USD, CyberVein US Dollar'
  },
  {
    value: { id: '3255', name: 'CryptoWorldX Token Bitcoin', decimal: '8', symbol: 'CWXT/BTC' },
    label: 'CWXT/BTC, CryptoWorldX Token Bitcoin'
  },
  {
    value: { id: '3256', name: 'CryptoWorldX Token US Dollar', decimal: '6', symbol: 'CWXT/USD' },
    label: 'CWXT/USD, CryptoWorldX Token US Dollar'
  },
  {
    value: { id: '3260', name: 'Coinonat US Dollar', decimal: '6', symbol: 'CXT/USD' },
    label: 'CXT/USD, Coinonat US Dollar'
  },
  {
    value: { id: '3261', name: 'Cycling Coin Bitcoin', decimal: '8', symbol: 'CYC/BTC' },
    label: 'CYC/BTC, Cycling Coin Bitcoin'
  },
  {
    value: { id: '3262', name: 'Cycling Coin US Dollar', decimal: '6', symbol: 'CYC/USD' },
    label: 'CYC/USD, Cycling Coin US Dollar'
  },
  {
    value: { id: '3263', name: 'Cyder Bitcoin', decimal: '8', symbol: 'CYDER/BTC' },
    label: 'CYDER/BTC, Cyder Bitcoin'
  },
  {
    value: { id: '3264', name: 'Cyder US Dollar', decimal: '6', symbol: 'CYDER/USD' },
    label: 'CYDER/USD, Cyder US Dollar'
  },
  {
    value: { id: '3267', name: 'DADI US Dollar', decimal: '5', symbol: 'DADI/USD' },
    label: 'DADI/USD, DADI US Dollar'
  },
  {
    value: { id: '3269', name: 'Constellation US Dollar', decimal: '8', symbol: 'DAG/USD' },
    label: 'DAG/USD, Constellation US Dollar'
  },
  {
    value: { id: '3270', name: 'Dai Bitcoin', decimal: '7', symbol: 'DAI/BTC' },
    label: 'DAI/BTC, Dai Bitcoin'
  },
  {
    value: { id: '3271', name: 'Dai Ethereum', decimal: '8', symbol: 'DAI/ETH' },
    label: 'DAI/ETH, Dai Ethereum'
  },
  {
    value: { id: '3272', name: 'Dai US Dollar', decimal: '5', symbol: 'DAI/USD' },
    label: 'DAI/USD, Dai US Dollar'
  },
  {
    value: { id: '3277', name: 'Dalecoin US Dollar', decimal: '5', symbol: 'DALC/USD' },
    label: 'DALC/USD, Dalecoin US Dollar'
  },
  {
    value: { id: '3280', name: 'DAPS Token US Dollar', decimal: '4', symbol: 'DAPS/USD' },
    label: 'DAPS/USD, DAPS Token US Dollar'
  },
  {
    value: { id: '3281', name: 'Dash Australian Dollar', decimal: '2', symbol: 'DASH/AUD' },
    label: 'DASH/AUD, Dash Australian Dollar'
  },
  {
    value: { id: '3282', name: 'Dash Bitcoin Cash', decimal: '8', symbol: 'DASH/BCH' },
    label: 'DASH/BCH, Dash Bitcoin Cash'
  },
  {
    value: { id: '3283', name: 'Dash Bitcoin', decimal: '6', symbol: 'DASH/BTC' },
    label: 'DASH/BTC, Dash Bitcoin'
  },
  {
    value: { id: '3284', name: 'Dash Canadian Dollar', decimal: '2', symbol: 'DASH/CAD' },
    label: 'DASH/CAD, Dash Canadian Dollar'
  },
  {
    value: { id: '3286', name: 'Dash Chinese Yuan', decimal: '2', symbol: 'DASH/CNY' },
    label: 'DASH/CNY, Dash Chinese Yuan'
  },
  {
    value: { id: '3288', name: 'Dash Ethereum', decimal: '5', symbol: 'DASH/ETH' },
    label: 'DASH/ETH, Dash Ethereum'
  },
  {
    value: { id: '3289', name: 'Dash Euro', decimal: '2', symbol: 'DASH/EUR' },
    label: 'DASH/EUR, Dash Euro'
  },
  {
    value: { id: '3290', name: 'Dash Hong Kong Dollar', decimal: '2', symbol: 'DASH/HKD' },
    label: 'DASH/HKD, Dash Hong Kong Dollar'
  },
  {
    value: { id: '3291', name: 'Dash Israeli Shekel', decimal: '2', symbol: 'DASH/ILS' },
    label: 'DASH/ILS, Dash Israeli Shekel'
  },
  {
    value: { id: '3292', name: 'Dash Indian Rupee', decimal: '2', symbol: 'DASH/INR' },
    label: 'DASH/INR, Dash Indian Rupee'
  },
  {
    value: { id: '3294', name: 'Dash Korean Won', decimal: '0', symbol: 'DASH/KRW' },
    label: 'DASH/KRW, Dash Korean Won'
  },
  {
    value: { id: '3296', name: 'Dash Mexican Peso', decimal: '2', symbol: 'DASH/MXN' },
    label: 'DASH/MXN, Dash Mexican Peso'
  },
  {
    value: { id: '3297', name: 'Dash Malaysian Ringgit', decimal: '2', symbol: 'DASH/MYR' },
    label: 'DASH/MYR, Dash Malaysian Ringgit'
  },
  {
    value: { id: '3298', name: 'Dash Polish Zloty', decimal: '2', symbol: 'DASH/PLN' },
    label: 'DASH/PLN, Dash Polish Zloty'
  },
  {
    value: { id: '3299', name: 'Dash Russian Ruble', decimal: '0', symbol: 'DASH/RUB' },
    label: 'DASH/RUB, Dash Russian Ruble'
  },
  {
    value: { id: '3300', name: 'Dash Saudi Riyal', decimal: '2', symbol: 'DASH/SAR' },
    label: 'DASH/SAR, Dash Saudi Riyal'
  },
  {
    value: { id: '3301', name: 'Dash Swedish Krona', decimal: '2', symbol: 'DASH/SEK' },
    label: 'DASH/SEK, Dash Swedish Krona'
  },
  {
    value: { id: '3304', name: 'Dash Turkish Lira', decimal: '2', symbol: 'DASH/TRY' },
    label: 'DASH/TRY, Dash Turkish Lira'
  },
  {
    value: { id: '3305', name: 'Dash Vietnamese Dong', decimal: '0', symbol: 'DASH/VND' },
    label: 'DASH/VND, Dash Vietnamese Dong'
  },
  {
    value: { id: '3308', name: 'Dash South African Rand', decimal: '2', symbol: 'DASH/ZAR' },
    label: 'DASH/ZAR, Dash South African Rand'
  },
  {
    value: { id: '3309', name: 'Dash Green Bitcoin', decimal: '8', symbol: 'DASHG/BTC' },
    label: 'DASHG/BTC, Dash Green Bitcoin'
  },
  {
    value: { id: '3310', name: 'Dash Green US Dollar', decimal: '4', symbol: 'DASHG/USD' },
    label: 'DASHG/USD, Dash Green US Dollar'
  },
  {
    value: { id: '3311', name: 'Dashs Bitcoin', decimal: '8', symbol: 'DASHS/BTC' },
    label: 'DASHS/BTC, Dashs Bitcoin'
  },
  {
    value: { id: '3312', name: 'Dashs US Dollar', decimal: '6', symbol: 'DASHS/USD' },
    label: 'DASHS/USD, Dashs US Dollar'
  },
  {
    value: { id: '3313', name: 'Datum Bitcoin', decimal: '8', symbol: 'DAT/BTC' },
    label: 'DAT/BTC, Datum Bitcoin'
  },
  {
    value: { id: '3314', name: 'Datum Ethereum', decimal: '8', symbol: 'DAT/ETH' },
    label: 'DAT/ETH, Datum Ethereum'
  },
  {
    value: { id: '3315', name: 'Datum US Dollar', decimal: '6', symbol: 'DAT/USD' },
    label: 'DAT/USD, Datum US Dollar'
  },
  {
    value: { id: '3316', name: 'Streamr DATAcoin Bitcoin', decimal: '8', symbol: 'DATA/BTC' },
    label: 'DATA/BTC, Streamr DATAcoin Bitcoin'
  },
  {
    value: { id: '3317', name: 'Streamr DATAcoin Ethereum', decimal: '6', symbol: 'DATA/ETH' },
    label: 'DATA/ETH, Streamr DATAcoin Ethereum'
  },
  {
    value: { id: '3318', name: 'Streamr DATAcoin US Dollar', decimal: '6', symbol: 'DATA/USD' },
    label: 'DATA/USD, Streamr DATAcoin US Dollar'
  },
  {
    value: { id: '3319', name: 'DavorCoin Bitcoin', decimal: '8', symbol: 'DAV/BTC' },
    label: 'DAV/BTC, DavorCoin Bitcoin'
  },
  {
    value: { id: '3320', name: 'DavorCoin US Dollar', decimal: '6', symbol: 'DAV/USD' },
    label: 'DAV/USD, DavorCoin US Dollar'
  },
  {
    value: { id: '3321', name: 'DAEX Bitcoin', decimal: '8', symbol: 'DAX/BTC' },
    label: 'DAX/BTC, DAEX Bitcoin'
  },
  {
    value: { id: '3322', name: 'DAEX Ethereum', decimal: '8', symbol: 'DAX/ETH' },
    label: 'DAX/ETH, DAEX Ethereum'
  },
  {
    value: { id: '3323', name: 'DAEX US Dollar', decimal: '6', symbol: 'DAX/USD' },
    label: 'DAX/USD, DAEX US Dollar'
  },
  {
    value: { id: '3324', name: 'DaxxCoin Bitcoin', decimal: '8', symbol: 'DAXX/BTC' },
    label: 'DAXX/BTC, DaxxCoin Bitcoin'
  },
  {
    value: { id: '3327', name: 'DaxxCoin US Dollar', decimal: '6', symbol: 'DAXX/USD' },
    label: 'DAXX/USD, DaxxCoin US Dollar'
  },
  {
    value: { id: '3328', name: 'Chronologic Bitcoin', decimal: '6', symbol: 'DAY/BTC' },
    label: 'DAY/BTC, Chronologic Bitcoin'
  },
  {
    value: { id: '3329', name: 'Chronologic Ethereum', decimal: '2', symbol: 'DAY/ETH' },
    label: 'DAY/ETH, Chronologic Ethereum'
  },
  {
    value: { id: '3330', name: 'Chronologic US Dollar', decimal: '5', symbol: 'DAY/USD' },
    label: 'DAY/USD, Chronologic US Dollar'
  },
  {
    value: { id: '3331', name: 'DeepBrain Chain Bitcoin', decimal: '8', symbol: 'DBC/BTC' },
    label: 'DBC/BTC, DeepBrain Chain Bitcoin'
  },
  {
    value: { id: '3332', name: 'DeepBrain Chain Ethereum', decimal: '7', symbol: 'DBC/ETH' },
    label: 'DBC/ETH, DeepBrain Chain Ethereum'
  },
  {
    value: { id: '3333', name: 'DeepBrain Chain Indian Rupee', decimal: '3', symbol: 'DBC/INR' },
    label: 'DBC/INR, DeepBrain Chain Indian Rupee'
  },
  {
    value: { id: '3334', name: 'DeepBrain Chain NEO', decimal: '6', symbol: 'DBC/NEO' },
    label: 'DBC/NEO, DeepBrain Chain NEO'
  },
  {
    value: { id: '3335', name: 'DeepBrain Chain US Dollar', decimal: '6', symbol: 'DBC/USD' },
    label: 'DBC/USD, DeepBrain Chain US Dollar'
  },
  {
    value: { id: '3341', name: 'Digital Bullion Gold Bitcoin', decimal: '8', symbol: 'DBG/BTC' },
    label: 'DBG/BTC, Digital Bullion Gold Bitcoin'
  },
  {
    value: { id: '3342', name: 'Digital Bullion Gold US Dollar', decimal: '6', symbol: 'DBG/USD' },
    label: 'DBG/USD, Digital Bullion Gold US Dollar'
  },
  {
    value: { id: '3346', name: 'DubaiCoin US Dollar', decimal: '4', symbol: 'DBIX/USD' },
    label: 'DBIX/USD, DubaiCoin US Dollar'
  },
  {
    value: { id: '3347', name: 'Debitcoin Bitcoin', decimal: '8', symbol: 'DBTC/BTC' },
    label: 'DBTC/BTC, Debitcoin Bitcoin'
  },
  {
    value: { id: '3348', name: 'Debitcoin US Dollar', decimal: '6', symbol: 'DBTC/USD' },
    label: 'DBTC/USD, Debitcoin US Dollar'
  },
  {
    value: {
      id: '3349',
      name: 'Distributed Credit Chain Ethereum',
      decimal: '4',
      symbol: 'DCC/ETH'
    },
    label: 'DCC/ETH, Distributed Credit Chain Ethereum'
  },
  {
    value: {
      id: '3350',
      name: 'Distributed Credit Chain US Dollar',
      decimal: '4',
      symbol: 'DCC/USD'
    },
    label: 'DCC/USD, Distributed Credit Chain US Dollar'
  },
  {
    value: { id: '3353', name: 'Dentacoin Ethereum', decimal: '8', symbol: 'DCN/ETH' },
    label: 'DCN/ETH, Dentacoin Ethereum'
  },
  {
    value: { id: '3355', name: 'Dentacoin US Dollar', decimal: '6', symbol: 'DCN/USD' },
    label: 'DCN/USD, Dentacoin US Dollar'
  },
  {
    value: { id: '3356', name: 'Decred Bitcoin', decimal: '6', symbol: 'DCR/BTC' },
    label: 'DCR/BTC, Decred Bitcoin'
  },
  {
    value: { id: '3359', name: 'Decred US Dollar', decimal: '4', symbol: 'DCR/USD' },
    label: 'DCR/USD, Decred US Dollar'
  },
  {
    value: { id: '3360', name: 'DeltaCredits Bitcoin', decimal: '8', symbol: 'DCRE/BTC' },
    label: 'DCRE/BTC, DeltaCredits Bitcoin'
  },
  {
    value: { id: '3361', name: 'DeltaCredits US Dollar', decimal: '5', symbol: 'DCRE/USD' },
    label: 'DCRE/USD, DeltaCredits US Dollar'
  },
  {
    value: { id: '3362', name: 'DECENT Bitcoin', decimal: '7', symbol: 'DCT/BTC' },
    label: 'DCT/BTC, DECENT Bitcoin'
  },
  {
    value: { id: '3364', name: 'DECENT US Dollar', decimal: '5', symbol: 'DCT/USD' },
    label: 'DCT/USD, DECENT US Dollar'
  },
  {
    value: { id: '3368', name: 'Dinastycoin US Dollar', decimal: '6', symbol: 'DCY/USD' },
    label: 'DCY/USD, Dinastycoin US Dollar'
  },
  {
    value: { id: '3369', name: 'Scry.info Bitcoin', decimal: '8', symbol: 'DDD/BTC' },
    label: 'DDD/BTC, Scry.info Bitcoin'
  },
  {
    value: { id: '3370', name: 'Scry.info Ethereum', decimal: '8', symbol: 'DDD/ETH' },
    label: 'DDD/ETH, Scry.info Ethereum'
  },
  {
    value: { id: '3371', name: 'Scry.info US Dollar', decimal: '4', symbol: 'DDD/USD' },
    label: 'DDD/USD, Scry.info US Dollar'
  },
  {
    value: { id: '3374', name: 'DigitalDevelopersFund Ethereum', decimal: '8', symbol: 'DDF/ETH' },
    label: 'DDF/ETH, DigitalDevelopersFund Ethereum'
  },
  {
    value: { id: '3376', name: 'DigitalDevelopersFund US Dollar', decimal: '6', symbol: 'DDF/USD' },
    label: 'DDF/USD, DigitalDevelopersFund US Dollar'
  },
  {
    value: { id: '3377', name: 'DEEX Bitcoin', decimal: '8', symbol: 'DEEX/BTC' },
    label: 'DEEX/BTC, DEEX Bitcoin'
  },
  {
    value: { id: '3378', name: 'DEEX US Dollar', decimal: '4', symbol: 'DEEX/USD' },
    label: 'DEEX/USD, DEEX US Dollar'
  },
  {
    value: { id: '3382', name: 'Deutsche eMark US Dollar', decimal: '6', symbol: 'DEM/USD' },
    label: 'DEM/USD, Deutsche eMark US Dollar'
  },
  {
    value: { id: '3383', name: 'Dent Bitcoin', decimal: '8', symbol: 'DENT/BTC' },
    label: 'DENT/BTC, Dent Bitcoin'
  },
  {
    value: { id: '3384', name: 'Dent Ethereum', decimal: '8', symbol: 'DENT/ETH' },
    label: 'DENT/ETH, Dent Ethereum'
  },
  {
    value: { id: '3385', name: 'Dent Indian Rupee', decimal: '3', symbol: 'DENT/INR' },
    label: 'DENT/INR, Dent Indian Rupee'
  },
  {
    value: { id: '3389', name: 'Dero Bitcoin', decimal: '8', symbol: 'DERO/BTC' },
    label: 'DERO/BTC, Dero Bitcoin'
  },
  {
    value: { id: '3390', name: 'Dero US Dollar', decimal: '8', symbol: 'DERO/USD' },
    label: 'DERO/USD, Dero US Dollar'
  },
  {
    value: { id: '3391', name: 'Destiny Bitcoin', decimal: '8', symbol: 'DES/BTC' },
    label: 'DES/BTC, Destiny Bitcoin'
  },
  {
    value: { id: '3392', name: 'Destiny US Dollar', decimal: '6', symbol: 'DES/USD' },
    label: 'DES/USD, Destiny US Dollar'
  },
  {
    value: { id: '3393', name: 'DeusCoin Bitcoin', decimal: '8', symbol: 'DEUS/BTC' },
    label: 'DEUS/BTC, DeusCoin Bitcoin'
  },
  {
    value: { id: '3396', name: 'DeusCoin US Dollar', decimal: '6', symbol: 'DEUS/USD' },
    label: 'DEUS/USD, DeusCoin US Dollar'
  },
  {
    value: { id: '3400', name: 'DEW US Dollar', decimal: '5', symbol: 'DEW/USD' },
    label: 'DEW/USD, DEW US Dollar'
  },
  {
    value: { id: '3403', name: 'DEX US Dollar', decimal: '4', symbol: 'DEX/USD' },
    label: 'DEX/USD, DEX US Dollar'
  },
  {
    value: { id: '3404', name: 'DFSCoin Bitcoin', decimal: '8', symbol: 'DFS/BTC' },
    label: 'DFS/BTC, DFSCoin Bitcoin'
  },
  {
    value: { id: '3408', name: 'DFSCoin US Dollar', decimal: '6', symbol: 'DFS/USD' },
    label: 'DFS/USD, DFSCoin US Dollar'
  },
  {
    value: { id: '3409', name: 'DraftCoin Bitcoin', decimal: '8', symbol: 'DFT/BTC' },
    label: 'DFT/BTC, DraftCoin Bitcoin'
  },
  {
    value: { id: '3410', name: 'DraftCoin US Dollar', decimal: '5', symbol: 'DFT/USD' },
    label: 'DFT/USD, DraftCoin US Dollar'
  },
  {
    value: { id: '3411', name: 'DigiByte Australian Dollar', decimal: '6', symbol: 'DGB/AUD' },
    label: 'DGB/AUD, DigiByte Australian Dollar'
  },
  {
    value: { id: '3412', name: 'DigiByte Bitcoin', decimal: '8', symbol: 'DGB/BTC' },
    label: 'DGB/BTC, DigiByte Bitcoin'
  },
  {
    value: { id: '3413', name: 'DigiByte Swiss Franc', decimal: '6', symbol: 'DGB/CHF' },
    label: 'DGB/CHF, DigiByte Swiss Franc'
  },
  {
    value: { id: '3415', name: 'DigiByte Ethereum', decimal: '7', symbol: 'DGB/ETH' },
    label: 'DGB/ETH, DigiByte Ethereum'
  },
  {
    value: { id: '3417', name: 'DigiByte Turkish Lira', decimal: '6', symbol: 'DGB/TRY' },
    label: 'DGB/TRY, DigiByte Turkish Lira'
  },
  {
    value: { id: '3418', name: 'DigiByte US Dollar', decimal: '6', symbol: 'DGB/USD' },
    label: 'DGB/USD, DigiByte US Dollar'
  },
  {
    value: { id: '3422', name: 'Digitalcoin US Dollar', decimal: '6', symbol: 'DGC/USD' },
    label: 'DGC/USD, Digitalcoin US Dollar'
  },
  {
    value: { id: '3423', name: 'Digital Credits Bitcoin', decimal: '8', symbol: 'DGCS/BTC' },
    label: 'DGCS/BTC, Digital Credits Bitcoin'
  },
  {
    value: { id: '3424', name: 'Digital Credits US Dollar', decimal: '6', symbol: 'DGCS/USD' },
    label: 'DGCS/USD, Digital Credits US Dollar'
  },
  {
    value: { id: '3429', name: 'DigiPulse Bitcoin', decimal: '6', symbol: 'DGPT/BTC' },
    label: 'DGPT/BTC, DigiPulse Bitcoin'
  },
  {
    value: { id: '3433', name: 'DigiPulse US Dollar', decimal: '5', symbol: 'DGPT/USD' },
    label: 'DGPT/USD, DigiPulse US Dollar'
  },
  {
    value: { id: '3434', name: 'Digitex Futures Bitcoin', decimal: '8', symbol: 'DGTX/BTC' },
    label: 'DGTX/BTC, Digitex Futures Bitcoin'
  },
  {
    value: { id: '3435', name: 'Digitex Futures Ethereum', decimal: '8', symbol: 'DGTX/ETH' },
    label: 'DGTX/ETH, Digitex Futures Ethereum'
  },
  {
    value: { id: '3436', name: 'Digitex Futures US Dollar', decimal: '6', symbol: 'DGTX/USD' },
    label: 'DGTX/USD, Digitex Futures US Dollar'
  },
  {
    value: { id: '3439', name: 'DIBCOIN US Dollar', decimal: '6', symbol: 'DIBC/USD' },
    label: 'DIBC/USD, DIBCOIN US Dollar'
  },
  {
    value: { id: '3440', name: 'DAIKICOIN Bitcoin', decimal: '8', symbol: 'DIC/BTC' },
    label: 'DIC/BTC, DAIKICOIN Bitcoin'
  },
  {
    value: { id: '3441', name: 'DAIKICOIN US Dollar', decimal: '4', symbol: 'DIC/USD' },
    label: 'DIC/USD, DAIKICOIN US Dollar'
  },
  {
    value: { id: '3443', name: 'Etheroll US Dollar', decimal: '5', symbol: 'DICE/USD' },
    label: 'DICE/USD, Etheroll US Dollar'
  },
  {
    value: { id: '3444', name: 'Dignity Bitcoin', decimal: '8', symbol: 'DIG/BTC' },
    label: 'DIG/BTC, Dignity Bitcoin'
  },
  {
    value: { id: '3447', name: 'Dignity US Dollar', decimal: '6', symbol: 'DIG/USD' },
    label: 'DIG/USD, Dignity US Dollar'
  },
  {
    value: { id: '3448', name: 'Dimecoin Bitcoin', decimal: '8', symbol: 'DIME/BTC' },
    label: 'DIME/BTC, Dimecoin Bitcoin'
  },
  {
    value: { id: '3450', name: 'Dimecoin Ethereum', decimal: '8', symbol: 'DIME/ETH' },
    label: 'DIME/ETH, Dimecoin Ethereum'
  },
  {
    value: { id: '3452', name: 'Dimecoin US Dollar', decimal: '7', symbol: 'DIME/USD' },
    label: 'DIME/USD, Dimecoin US Dollar'
  },
  {
    value: { id: '3453', name: 'DarkLisk Bitcoin', decimal: '8', symbol: 'DISK/BTC' },
    label: 'DISK/BTC, DarkLisk Bitcoin'
  },
  {
    value: { id: '3454', name: 'DarkLisk US Dollar', decimal: '6', symbol: 'DISK/USD' },
    label: 'DISK/USD, DarkLisk US Dollar'
  },
  {
    value: { id: '3459', name: 'Divi US Dollar', decimal: '5', symbol: 'DIVX/USD' },
    label: 'DIVX/USD, Divi US Dollar'
  },
  {
    value: { id: '3460', name: 'Dollarcoin Bitcoin', decimal: '8', symbol: 'DLC/BTC' },
    label: 'DLC/BTC, Dollarcoin Bitcoin'
  },
  {
    value: { id: '3461', name: 'Dollarcoin US Dollar', decimal: '6', symbol: 'DLC/USD' },
    label: 'DLC/USD, Dollarcoin US Dollar'
  },
  {
    value: { id: '3462', name: 'DAPPSTER Bitcoin', decimal: '8', symbol: 'DLISK/BTC' },
    label: 'DLISK/BTC, DAPPSTER Bitcoin'
  },
  {
    value: { id: '3463', name: 'DAPPSTER US Dollar', decimal: '6', symbol: 'DLISK/USD' },
    label: 'DLISK/USD, DAPPSTER US Dollar'
  },
  {
    value: { id: '3465', name: 'Agrello Bitcoin', decimal: '8', symbol: 'DLT/BTC' },
    label: 'DLT/BTC, Agrello Bitcoin'
  },
  {
    value: { id: '3467', name: 'Agrello US Dollar', decimal: '6', symbol: 'DLT/USD' },
    label: 'DLT/USD, Agrello US Dollar'
  },
  {
    value: { id: '3469', name: 'Digital Money Bits US Dollar', decimal: '6', symbol: 'DMB/USD' },
    label: 'DMB/USD, Digital Money Bits US Dollar'
  },
  {
    value: { id: '3471', name: 'DynamicCoin US Dollar', decimal: '6', symbol: 'DMC/USD' },
    label: 'DMC/USD, DynamicCoin US Dollar'
  },
  {
    value: { id: '3473', name: 'Diamond US Dollar', decimal: '4', symbol: 'DMD/USD' },
    label: 'DMD/USD, Diamond US Dollar'
  },
  {
    value: { id: '3474', name: 'DMarket Bitcoin', decimal: '4', symbol: 'DMT/BTC' },
    label: 'DMT/BTC, DMarket Bitcoin'
  },
  {
    value: { id: '3475', name: 'DMarket US Dollar', decimal: '4', symbol: 'DMT/USD' },
    label: 'DMT/USD, DMarket US Dollar'
  },
  {
    value: { id: '3480', name: 'EncrypGen US Dollar', decimal: '6', symbol: 'DNA/USD' },
    label: 'DNA/USD, EncrypGen US Dollar'
  },
  {
    value: { id: '3485', name: 'Denarius US Dollar', decimal: '5', symbol: 'DNR/USD' },
    label: 'DNR/USD, Denarius US Dollar'
  },
  {
    value: { id: '3489', name: 'Dock Bitcoin', decimal: '8', symbol: 'DOCK/BTC' },
    label: 'DOCK/BTC, Dock Bitcoin'
  },
  {
    value: { id: '3491', name: 'Dock US Dollar', decimal: '6', symbol: 'DOCK/USD' },
    label: 'DOCK/USD, Dock US Dollar'
  },
  {
    value: { id: '3492', name: 'Dogecoin Brazil Real', decimal: '8', symbol: 'DOGE/BRL' },
    label: 'DOGE/BRL, Dogecoin Brazil Real'
  },
  {
    value: { id: '3493', name: 'Dogecoin Bitcoin', decimal: '8', symbol: 'DOGE/BTC' },
    label: 'DOGE/BTC, Dogecoin Bitcoin'
  },
  {
    value: { id: '3495', name: 'Dogecoin Ethereum', decimal: '8', symbol: 'DOGE/ETH' },
    label: 'DOGE/ETH, Dogecoin Ethereum'
  },
  {
    value: { id: '3497', name: 'Dogecoin Turkish Lira', decimal: '6', symbol: 'DOGE/TRY' },
    label: 'DOGE/TRY, Dogecoin Turkish Lira'
  },
  {
    value: { id: '3498', name: 'Dogecoin US Dollar', decimal: '6', symbol: 'DOGE/USD' },
    label: 'DOGE/USD, Dogecoin US Dollar'
  },
  {
    value: { id: '3500', name: 'Dollar Online Bitcoin', decimal: '8', symbol: 'DOLLAR/BTC' },
    label: 'DOLLAR/BTC, Dollar Online Bitcoin'
  },
  {
    value: { id: '3501', name: 'Dollar Online US Dollar', decimal: '6', symbol: 'DOLLAR/USD' },
    label: 'DOLLAR/USD, Dollar Online US Dollar'
  },
  {
    value: { id: '3502', name: 'Donationcoin Bitcoin', decimal: '8', symbol: 'DON/BTC' },
    label: 'DON/BTC, Donationcoin Bitcoin'
  },
  {
    value: { id: '3505', name: 'Donationcoin US Dollar', decimal: '6', symbol: 'DON/USD' },
    label: 'DON/USD, Donationcoin US Dollar'
  },
  {
    value: { id: '3509', name: 'DopeCoin US Dollar', decimal: '6', symbol: 'DOPE/USD' },
    label: 'DOPE/USD, DopeCoin US Dollar'
  },
  {
    value: { id: '3513', name: 'Dotcoin US Dollar', decimal: '6', symbol: 'DOT/USD' },
    label: 'DOT/USD, Dotcoin US Dollar'
  },
  {
    value: { id: '3515', name: 'Dovu US Dollar', decimal: '6', symbol: 'DOVU/USD' },
    label: 'DOVU/USD, Dovu US Dollar'
  },
  {
    value: { id: '3516', name: 'DigitalPrice Bitcoin', decimal: '8', symbol: 'DP/BTC' },
    label: 'DP/BTC, DigitalPrice Bitcoin'
  },
  {
    value: { id: '3519', name: 'DigitalPrice US Dollar', decimal: '6', symbol: 'DP/USD' },
    label: 'DP/USD, DigitalPrice US Dollar'
  },
  {
    value: { id: '3520', name: 'Delphy Ethereum', decimal: '6', symbol: 'DPY/ETH' },
    label: 'DPY/ETH, Delphy Ethereum'
  },
  {
    value: { id: '3521', name: 'Delphy US Dollar', decimal: '5', symbol: 'DPY/USD' },
    label: 'DPY/USD, Delphy US Dollar'
  },
  {
    value: { id: '3522', name: 'DreamTeam Token Bitcoin', decimal: '8', symbol: 'DREAM/BTC' },
    label: 'DREAM/BTC, DreamTeam Token Bitcoin'
  },
  {
    value: { id: '3524', name: 'DreamTeam Token US Dollar', decimal: '3', symbol: 'DREAM/USD' },
    label: 'DREAM/USD, DreamTeam Token US Dollar'
  },
  {
    value: { id: '3525', name: 'Dragon Coins Bitcoin', decimal: '8', symbol: 'DRG/BTC' },
    label: 'DRG/BTC, Dragon Coins Bitcoin'
  },
  {
    value: { id: '3526', name: 'Dragon Coins Ethereum', decimal: '8', symbol: 'DRG/ETH' },
    label: 'DRG/ETH, Dragon Coins Ethereum'
  },
  {
    value: { id: '3527', name: 'Dragon Coins US Dollar', decimal: '4', symbol: 'DRG/USD' },
    label: 'DRG/USD, Dragon Coins US Dollar'
  },
  {
    value: { id: '3528', name: 'Dragonchain Bitcoin', decimal: '8', symbol: 'DRGN/BTC' },
    label: 'DRGN/BTC, Dragonchain Bitcoin'
  },
  {
    value: { id: '3529', name: 'Dragonchain Ethereum', decimal: '6', symbol: 'DRGN/ETH' },
    label: 'DRGN/ETH, Dragonchain Ethereum'
  },
  {
    value: { id: '3530', name: 'Dragonchain NEO', decimal: '6', symbol: 'DRGN/NEO' },
    label: 'DRGN/NEO, Dragonchain NEO'
  },
  {
    value: { id: '3531', name: 'Dragonchain US Dollar', decimal: '5', symbol: 'DRGN/USD' },
    label: 'DRGN/USD, Dragonchain US Dollar'
  },
  {
    value: { id: '3532', name: 'Dreamcoin Bitcoin', decimal: '8', symbol: 'DRM/BTC' },
    label: 'DRM/BTC, Dreamcoin Bitcoin'
  },
  {
    value: { id: '3533', name: 'Dreamcoin US Dollar', decimal: '6', symbol: 'DRM/USD' },
    label: 'DRM/USD, Dreamcoin US Dollar'
  },
  {
    value: { id: '3536', name: 'Dropil US Dollar', decimal: '6', symbol: 'DROP/USD' },
    label: 'DROP/USD, Dropil US Dollar'
  },
  {
    value: { id: '3537', name: 'DCORP Utility Bitcoin', decimal: '6', symbol: 'DRP/BTC' },
    label: 'DRP/BTC, DCORP Utility Bitcoin'
  },
  {
    value: { id: '3541', name: 'DCORP Utility US Dollar', decimal: '5', symbol: 'DRP/USD' },
    label: 'DRP/USD, DCORP Utility US Dollar'
  },
  {
    value: { id: '3542', name: 'Digital Rupees Bitcoin', decimal: '8', symbol: 'DRS/BTC' },
    label: 'DRS/BTC, Digital Rupees Bitcoin'
  },
  {
    value: { id: '3543', name: 'Digital Rupees US Dollar', decimal: '6', symbol: 'DRS/USD' },
    label: 'DRS/USD, Digital Rupees US Dollar'
  },
  {
    value: { id: '3544', name: 'DomRaider Bitcoin', decimal: '8', symbol: 'DRT/BTC' },
    label: 'DRT/BTC, DomRaider Bitcoin'
  },
  {
    value: { id: '3546', name: 'DomRaider US Dollar', decimal: '6', symbol: 'DRT/USD' },
    label: 'DRT/USD, DomRaider US Dollar'
  },
  {
    value: { id: '3547', name: 'DROXNE Bitcoin', decimal: '8', symbol: 'DRXNE/BTC' },
    label: 'DRXNE/BTC, DROXNE Bitcoin'
  },
  {
    value: { id: '3550', name: 'DROXNE US Dollar', decimal: '6', symbol: 'DRXNE/USD' },
    label: 'DRXNE/USD, DROXNE US Dollar'
  },
  {
    value: { id: '3552', name: 'Desire US Dollar', decimal: '6', symbol: 'DSR/USD' },
    label: 'DSR/USD, Desire US Dollar'
  },
  {
    value: { id: '3553', name: 'DATA Bitcoin', decimal: '8', symbol: 'DTA/BTC' },
    label: 'DTA/BTC, DATA Bitcoin'
  },
  {
    value: { id: '3554', name: 'DATA Ethereum', decimal: '8', symbol: 'DTA/ETH' },
    label: 'DTA/ETH, DATA Ethereum'
  },
  {
    value: { id: '3555', name: 'DATA US Dollar', decimal: '6', symbol: 'DTA/USD' },
    label: 'DTA/USD, DATA US Dollar'
  },
  {
    value: { id: '3556', name: 'Databits Bitcoin', decimal: '8', symbol: 'DTB/BTC' },
    label: 'DTB/BTC, Databits Bitcoin'
  },
  {
    value: { id: '3557', name: 'Databits US Dollar', decimal: '5', symbol: 'DTB/USD' },
    label: 'DTB/USD, Databits US Dollar'
  },
  {
    value: { id: '3558', name: 'Dynamic Trading Rights Bitcoin', decimal: '8', symbol: 'DTR/BTC' },
    label: 'DTR/BTC, Dynamic Trading Rights Bitcoin'
  },
  {
    value: { id: '3559', name: 'Dynamic Trading Rights Ethereum', decimal: '7', symbol: 'DTR/ETH' },
    label: 'DTR/ETH, Dynamic Trading Rights Ethereum'
  },
  {
    value: {
      id: '3560',
      name: 'Dynamic Trading Rights US Dollar',
      decimal: '6',
      symbol: 'DTR/USD'
    },
    label: 'DTR/USD, Dynamic Trading Rights US Dollar'
  },
  {
    value: { id: '3561', name: 'Dubstep Bitcoin', decimal: '8', symbol: 'DUB/BTC' },
    label: 'DUB/BTC, Dubstep Bitcoin'
  },
  {
    value: { id: '3562', name: 'Dubstep US Dollar', decimal: '6', symbol: 'DUB/USD' },
    label: 'DUB/USD, Dubstep US Dollar'
  },
  {
    value: { id: '3566', name: 'ParallelCoin US Dollar', decimal: '5', symbol: 'DUO/USD' },
    label: 'DUO/USD, ParallelCoin US Dollar'
  },
  {
    value: { id: '3567', name: 'Dutch Coin Bitcoin', decimal: '8', symbol: 'DUTCH/BTC' },
    label: 'DUTCH/BTC, Dutch Coin Bitcoin'
  },
  {
    value: { id: '3568', name: 'Dutch Coin US Dollar', decimal: '6', symbol: 'DUTCH/USD' },
    label: 'DUTCH/USD, Dutch Coin US Dollar'
  },
  {
    value: { id: '3570', name: 'Dynamic US Dollar', decimal: '5', symbol: 'DYN/USD' },
    label: 'DYN/USD, Dynamic US Dollar'
  },
  {
    value: {
      id: '3573',
      name: 'Electronic Energy Coin US Dollar',
      decimal: '4',
      symbol: 'E2C/USD'
    },
    label: 'E2C/USD, Electronic Energy Coin US Dollar'
  },
  {
    value: { id: '3574', name: 'EarthCoin Bitcoin', decimal: '8', symbol: 'EAC/BTC' },
    label: 'EAC/BTC, EarthCoin Bitcoin'
  },
  {
    value: { id: '3575', name: 'EarthCoin US Dollar', decimal: '6', symbol: 'EAC/USD' },
    label: 'EAC/USD, EarthCoin US Dollar'
  },
  {
    value: { id: '3576', name: 'EagleCoin Ethereum', decimal: '7', symbol: 'EAGLE/ETH' },
    label: 'EAGLE/ETH, EagleCoin Ethereum'
  },
  {
    value: { id: '3577', name: 'EagleCoin US Dollar', decimal: '6', symbol: 'EAGLE/USD' },
    label: 'EAGLE/USD, EagleCoin US Dollar'
  },
  {
    value: { id: '3578', name: 'eBitcoinCash Ethereum', decimal: '6', symbol: 'EBCH/ETH' },
    label: 'EBCH/ETH, eBitcoinCash Ethereum'
  },
  {
    value: { id: '3579', name: 'eBitcoinCash US Dollar', decimal: '6', symbol: 'EBCH/USD' },
    label: 'EBCH/USD, eBitcoinCash US Dollar'
  },
  {
    value: { id: '3580', name: 'EthBet Ethereum', decimal: '6', symbol: 'EBET/ETH' },
    label: 'EBET/ETH, EthBet Ethereum'
  },
  {
    value: { id: '3581', name: 'EthBet US Dollar', decimal: '6', symbol: 'EBET/USD' },
    label: 'EBET/USD, EthBet US Dollar'
  },
  {
    value: { id: '3583', name: 'eBoost US Dollar', decimal: '5', symbol: 'EBST/USD' },
    label: 'EBST/USD, eBoost US Dollar'
  },
  {
    value: { id: '3584', name: 'Ebittree Coin Bitcoin', decimal: '8', symbol: 'EBT/BTC' },
    label: 'EBT/BTC, Ebittree Coin Bitcoin'
  },
  {
    value: { id: '3585', name: 'Ebittree Coin US Dollar', decimal: '6', symbol: 'EBT/USD' },
    label: 'EBT/USD, Ebittree Coin US Dollar'
  },
  {
    value: { id: '3588', name: 'eBitcoin US Dollar', decimal: '6', symbol: 'EBTC/USD' },
    label: 'EBTC/USD, eBitcoin US Dollar'
  },
  {
    value: { id: '3591', name: 'Electra US Dollar', decimal: '6', symbol: 'ECA/USD' },
    label: 'ECA/USD, Electra US Dollar'
  },
  {
    value: { id: '3592', name: 'Ethereum Cash Bitcoin', decimal: '8', symbol: 'ECASH/BTC' },
    label: 'ECASH/BTC, Ethereum Cash Bitcoin'
  },
  {
    value: { id: '3594', name: 'Ethereum Cash US Dollar', decimal: '6', symbol: 'ECASH/USD' },
    label: 'ECASH/USD, Ethereum Cash US Dollar'
  },
  {
    value: { id: '3596', name: 'ECC US Dollar', decimal: '6', symbol: 'ECC/USD' },
    label: 'ECC/USD, ECC US Dollar'
  },
  {
    value: { id: '3597', name: 'E-coin Bitcoin', decimal: '6', symbol: 'ECN/BTC' },
    label: 'ECN/BTC, E-coin Bitcoin'
  },
  {
    value: { id: '3600', name: 'E-coin US Dollar', decimal: '4', symbol: 'ECN/USD' },
    label: 'ECN/USD, E-coin US Dollar'
  },
  {
    value: { id: '3604', name: 'EcoCoin US Dollar', decimal: '6', symbol: 'ECO/USD' },
    label: 'ECO/USD, EcoCoin US Dollar'
  },
  {
    value: { id: '3608', name: 'Ecobit US Dollar', decimal: '6', symbol: 'ECOB/USD' },
    label: 'ECOB/USD, Ecobit US Dollar'
  },
  {
    value: { id: '3609', name: 'Edgeless Bitcoin', decimal: '7', symbol: 'EDG/BTC' },
    label: 'EDG/BTC, Edgeless Bitcoin'
  },
  {
    value: { id: '3615', name: 'Eidoo Bitcoin', decimal: '8', symbol: 'EDO/BTC' },
    label: 'EDO/BTC, Eidoo Bitcoin'
  },
  {
    value: { id: '3616', name: 'Eidoo Ethereum', decimal: '6', symbol: 'EDO/ETH' },
    label: 'EDO/ETH, Eidoo Ethereum'
  },
  {
    value: { id: '3617', name: 'Eidoo US Dollar', decimal: '5', symbol: 'EDO/USD' },
    label: 'EDO/USD, Eidoo US Dollar'
  },
  {
    value: { id: '3619', name: 'E-Dinar Coin US Dollar', decimal: '6', symbol: 'EDR/USD' },
    label: 'EDR/USD, E-Dinar Coin US Dollar'
  },
  {
    value: { id: '3623', name: 'EDRCoin US Dollar', decimal: '5', symbol: 'EDRC/USD' },
    label: 'EDRC/USD, EDRCoin US Dollar'
  },
  {
    value: { id: '3624', name: 'Endor Protocol Ethereum', decimal: '8', symbol: 'EDRL/ETH' },
    label: 'EDRL/ETH, Endor Protocol Ethereum'
  },
  {
    value: { id: '3625', name: 'Endor Protocol US Dollar', decimal: '8', symbol: 'EDRL/USD' },
    label: 'EDRL/USD, Endor Protocol US Dollar'
  },
  {
    value: { id: '3629', name: 'e-Gulden US Dollar', decimal: '6', symbol: 'EFL/USD' },
    label: 'EFL/USD, e-Gulden US Dollar'
  },
  {
    value: { id: '3630', name: 'ETHGAS Ethereum', decimal: '8', symbol: 'EGAS/ETH' },
    label: 'EGAS/ETH, ETHGAS Ethereum'
  },
  {
    value: { id: '3631', name: 'ETHGAS US Dollar', decimal: '6', symbol: 'EGAS/USD' },
    label: 'EGAS/USD, ETHGAS US Dollar'
  },
  {
    value: { id: '3635', name: 'EverGreenCoin US Dollar', decimal: '6', symbol: 'EGC/USD' },
    label: 'EGC/USD, EverGreenCoin US Dollar'
  },
  {
    value: { id: '3636', name: 'EggCoin Bitcoin', decimal: '8', symbol: 'EGG/BTC' },
    label: 'EGG/BTC, EggCoin Bitcoin'
  },
  {
    value: { id: '3637', name: 'EggCoin US Dollar', decimal: '6', symbol: 'EGG/USD' },
    label: 'EGG/USD, EggCoin US Dollar'
  },
  {
    value: { id: '3638', name: 'EGO Bitcoin', decimal: '8', symbol: 'EGO/BTC' },
    label: 'EGO/BTC, EGO Bitcoin'
  },
  {
    value: { id: '3639', name: 'EGO US Dollar', decimal: '6', symbol: 'EGO/USD' },
    label: 'EGO/USD, EGO US Dollar'
  },
  {
    value: { id: '3640', name: 'eGold Ethereum', decimal: '8', symbol: 'EGOLD/ETH' },
    label: 'EGOLD/ETH, eGold Ethereum'
  },
  {
    value: { id: '3641', name: 'eGold US Dollar', decimal: '6', symbol: 'EGOLD/USD' },
    label: 'EGOLD/USD, eGold US Dollar'
  },
  {
    value: { id: '3642', name: 'Egretia Ethereum', decimal: '8', symbol: 'EGT/ETH' },
    label: 'EGT/ETH, Egretia Ethereum'
  },
  {
    value: { id: '3643', name: 'Egretia US Dollar', decimal: '8', symbol: 'EGT/USD' },
    label: 'EGT/USD, Egretia US Dollar'
  },
  {
    value: { id: '3644', name: 'EDUCare Bitcoin', decimal: '4', symbol: 'EKT/BTC' },
    label: 'EKT/BTC, EDUCare Bitcoin'
  },
  {
    value: { id: '3645', name: 'EDUCare US Dollar', decimal: '4', symbol: 'EKT/USD' },
    label: 'EKT/USD, EDUCare US Dollar'
  },
  {
    value: { id: '3646', name: 'Elcoin Bitcoin', decimal: '8', symbol: 'EL/BTC' },
    label: 'EL/BTC, Elcoin Bitcoin'
  },
  {
    value: { id: '3647', name: 'Elcoin US Dollar', decimal: '5', symbol: 'EL/USD' },
    label: 'EL/USD, Elcoin US Dollar'
  },
  {
    value: { id: '3648', name: 'Elastos Bitcoin', decimal: '8', symbol: 'ELA/BTC' },
    label: 'ELA/BTC, Elastos Bitcoin'
  },
  {
    value: { id: '3649', name: 'Elastos Ethereum', decimal: '8', symbol: 'ELA/ETH' },
    label: 'ELA/ETH, Elastos Ethereum'
  },
  {
    value: { id: '3650', name: 'Elastos US Dollar', decimal: '4', symbol: 'ELA/USD' },
    label: 'ELA/USD, Elastos US Dollar'
  },
  {
    value: { id: '3654', name: 'Elacoin US Dollar', decimal: '5', symbol: 'ELC/USD' },
    label: 'ELC/USD, Elacoin US Dollar'
  },
  {
    value: { id: '3655', name: 'Elementrem Bitcoin', decimal: '8', symbol: 'ELE/BTC' },
    label: 'ELE/BTC, Elementrem Bitcoin'
  },
  {
    value: { id: '3656', name: 'Elementrem US Dollar', decimal: '6', symbol: 'ELE/USD' },
    label: 'ELE/USD, Elementrem US Dollar'
  },
  {
    value: { id: '3658', name: 'Electrify.Asia Ethereum', decimal: '8', symbol: 'ELEC/ETH' },
    label: 'ELEC/ETH, Electrify.Asia Ethereum'
  },
  {
    value: { id: '3659', name: 'Electrify.Asia US Dollar', decimal: '6', symbol: 'ELEC/USD' },
    label: 'ELEC/USD, Electrify.Asia US Dollar'
  },
  {
    value: { id: '3660', name: 'aelf Bitcoin', decimal: '7', symbol: 'ELF/BTC' },
    label: 'ELF/BTC, aelf Bitcoin'
  },
  {
    value: { id: '3661', name: 'aelf Ethereum', decimal: '6', symbol: 'ELF/ETH' },
    label: 'ELF/ETH, aelf Ethereum'
  },
  {
    value: { id: '3662', name: 'aelf US Dollar', decimal: '5', symbol: 'ELF/USD' },
    label: 'ELF/USD, aelf US Dollar'
  },
  {
    value: { id: '3663', name: 'Ethereum Lite Bitcoin', decimal: '8', symbol: 'ELITE/BTC' },
    label: 'ELITE/BTC, Ethereum Lite Bitcoin'
  },
  {
    value: { id: '3665', name: 'Ethereum Lite US Dollar', decimal: '5', symbol: 'ELITE/USD' },
    label: 'ELITE/USD, Ethereum Lite US Dollar'
  },
  {
    value: { id: '3666', name: 'Elixir Bitcoin', decimal: '8', symbol: 'ELIX/BTC' },
    label: 'ELIX/BTC, Elixir Bitcoin'
  },
  {
    value: { id: '3668', name: 'Elixir US Dollar', decimal: '5', symbol: 'ELIX/USD' },
    label: 'ELIX/USD, Elixir US Dollar'
  },
  {
    value: { id: '3672', name: 'Ellaism US Dollar', decimal: '6', symbol: 'ELLA/USD' },
    label: 'ELLA/USD, Ellaism US Dollar'
  },
  {
    value: { id: '3673', name: 'Elysium Bitcoin', decimal: '8', symbol: 'ELS/BTC' },
    label: 'ELS/BTC, Elysium Bitcoin'
  },
  {
    value: { id: '3674', name: 'Elysium US Dollar', decimal: '6', symbol: 'ELS/USD' },
    label: 'ELS/USD, Elysium US Dollar'
  },
  {
    value: { id: '3675', name: 'eLTC Ethereum', decimal: '8', symbol: 'ELTC2/ETH' },
    label: 'ELTC2/ETH, eLTC Ethereum'
  },
  {
    value: { id: '3676', name: 'eLTC US Dollar', decimal: '7', symbol: 'ELTC2/USD' },
    label: 'ELTC2/USD, eLTC US Dollar'
  },
  {
    value: { id: '3678', name: 'ELTCOIN US Dollar', decimal: '6', symbol: 'ELTCOIN/USD' },
    label: 'ELTCOIN/USD, ELTCOIN US Dollar'
  },
  {
    value: { id: '3679', name: 'ETHEREUM LYTE Ethereum', decimal: '6', symbol: 'ELYTE/ETH' },
    label: 'ELYTE/ETH, ETHEREUM LYTE Ethereum'
  },
  {
    value: { id: '3680', name: 'ETHEREUM LYTE US Dollar', decimal: '6', symbol: 'ELYTE/USD' },
    label: 'ELYTE/USD, ETHEREUM LYTE US Dollar'
  },
  {
    value: { id: '3686', name: 'Emercoin Ethereum', decimal: '6', symbol: 'EMC/ETH' },
    label: 'EMC/ETH, Emercoin Ethereum'
  },
  {
    value: { id: '3688', name: 'Emercoin US Dollar', decimal: '4', symbol: 'EMC/USD' },
    label: 'EMC/USD, Emercoin US Dollar'
  },
  {
    value: { id: '3690', name: 'Einsteinium Bitcoin', decimal: '8', symbol: 'EMC2/BTC' },
    label: 'EMC2/BTC, Einsteinium Bitcoin'
  },
  {
    value: { id: '3692', name: 'Einsteinium Korean Won', decimal: '2', symbol: 'EMC2/KRW' },
    label: 'EMC2/KRW, Einsteinium Korean Won'
  },
  {
    value: { id: '3694', name: 'Einsteinium US Dollar', decimal: '5', symbol: 'EMC2/USD' },
    label: 'EMC2/USD, Einsteinium US Dollar'
  },
  {
    value: { id: '3698', name: 'Emerald Crypto US Dollar', decimal: '6', symbol: 'EMD/USD' },
    label: 'EMD/USD, Emerald Crypto US Dollar'
  },
  {
    value: { id: '3699', name: 'Ethereum Movie Venture Ethereum', decimal: '6', symbol: 'EMV/ETH' },
    label: 'EMV/ETH, Ethereum Movie Venture Ethereum'
  },
  {
    value: {
      id: '3700',
      name: 'Ethereum Movie Venture US Dollar',
      decimal: '6',
      symbol: 'EMV/USD'
    },
    label: 'EMV/USD, Ethereum Movie Venture US Dollar'
  },
  {
    value: { id: '3701', name: 'Enigma Bitcoin', decimal: '8', symbol: 'ENG/BTC' },
    label: 'ENG/BTC, Enigma Bitcoin'
  },
  {
    value: { id: '3702', name: 'Enigma Ethereum', decimal: '6', symbol: 'ENG/ETH' },
    label: 'ENG/ETH, Enigma Ethereum'
  },
  {
    value: { id: '3703', name: 'Enigma Korean Won', decimal: '2', symbol: 'ENG/KRW' },
    label: 'ENG/KRW, Enigma Korean Won'
  },
  {
    value: { id: '3705', name: 'Enjin coin Bitcoin', decimal: '8', symbol: 'ENJ/BTC' },
    label: 'ENJ/BTC, Enjin coin Bitcoin'
  },
  {
    value: { id: '3707', name: 'Enjin coin Ethereum', decimal: '6', symbol: 'ENJ/ETH' },
    label: 'ENJ/ETH, Enjin coin Ethereum'
  },
  {
    value: { id: '3709', name: 'Enjin coin US Dollar', decimal: '6', symbol: 'ENJ/USD' },
    label: 'ENJ/USD, Enjin coin US Dollar'
  },
  {
    value: { id: '3712', name: 'Energycoin US Dollar', decimal: '6', symbol: 'ENRG/USD' },
    label: 'ENRG/USD, Energycoin US Dollar'
  },
  {
    value: { id: '3717', name: 'EOS Australian Dollar', decimal: '4', symbol: 'EOS/AUD' },
    label: 'EOS/AUD, EOS Australian Dollar'
  },
  {
    value: { id: '3718', name: 'EOS Bitcoin Cash', decimal: '8', symbol: 'EOS/BCH' },
    label: 'EOS/BCH, EOS Bitcoin Cash'
  },
  {
    value: { id: '3719', name: 'EOS Binance Coin', decimal: '4', symbol: 'EOS/BNB' },
    label: 'EOS/BNB, EOS Binance Coin'
  },
  {
    value: { id: '3720', name: 'EOS Brazil Real', decimal: '4', symbol: 'EOS/BRL' },
    label: 'EOS/BRL, EOS Brazil Real'
  },
  {
    value: { id: '3722', name: 'EOS Canadian Dollar', decimal: '4', symbol: 'EOS/CAD' },
    label: 'EOS/CAD, EOS Canadian Dollar'
  },
  {
    value: { id: '3723', name: 'EOS Chinese Yuan', decimal: '3', symbol: 'EOS/CNY' },
    label: 'EOS/CNY, EOS Chinese Yuan'
  },
  {
    value: { id: '3724', name: 'EOS Ethereum', decimal: '6', symbol: 'EOS/ETH' },
    label: 'EOS/ETH, EOS Ethereum'
  },
  {
    value: { id: '3725', name: 'EOS Euro', decimal: '4', symbol: 'EOS/EUR' },
    label: 'EOS/EUR, EOS Euro'
  },
  {
    value: { id: '3727', name: 'EOS Israeli Shekel', decimal: '3', symbol: 'EOS/ILS' },
    label: 'EOS/ILS, EOS Israeli Shekel'
  },
  {
    value: { id: '3728', name: 'EOS Indian Rupee', decimal: '2', symbol: 'EOS/INR' },
    label: 'EOS/INR, EOS Indian Rupee'
  },
  {
    value: { id: '3729', name: 'EOS Korean Won', decimal: '0', symbol: 'EOS/KRW' },
    label: 'EOS/KRW, EOS Korean Won'
  },
  {
    value: { id: '3730', name: 'EOS Mexican Peso', decimal: '2', symbol: 'EOS/MXN' },
    label: 'EOS/MXN, EOS Mexican Peso'
  },
  {
    value: { id: '3731', name: 'EOS Malaysian Ringgit', decimal: '3', symbol: 'EOS/MYR' },
    label: 'EOS/MYR, EOS Malaysian Ringgit'
  },
  {
    value: { id: '3732', name: 'EOS NEO', decimal: '6', symbol: 'EOS/NEO' },
    label: 'EOS/NEO, EOS NEO'
  },
  {
    value: { id: '3733', name: 'EOS Polish Zloty', decimal: '3', symbol: 'EOS/PLN' },
    label: 'EOS/PLN, EOS Polish Zloty'
  },
  {
    value: { id: '3734', name: 'EOS Russian Ruble', decimal: '2', symbol: 'EOS/RUB' },
    label: 'EOS/RUB, EOS Russian Ruble'
  },
  {
    value: { id: '3735', name: 'EOS Saudi Riyal', decimal: '3', symbol: 'EOS/SAR' },
    label: 'EOS/SAR, EOS Saudi Riyal'
  },
  {
    value: { id: '3736', name: 'EOS Swedish Krona', decimal: '3', symbol: 'EOS/SEK' },
    label: 'EOS/SEK, EOS Swedish Krona'
  },
  {
    value: { id: '3738', name: 'EOS Turkish Lira', decimal: '2', symbol: 'EOS/TRY' },
    label: 'EOS/TRY, EOS Turkish Lira'
  },
  {
    value: { id: '3739', name: 'EOS US Dollar', decimal: '4', symbol: 'EOS/USD' },
    label: 'EOS/USD, EOS US Dollar'
  },
  {
    value: { id: '3740', name: 'EOS Vietnamese Dong', decimal: '0', symbol: 'EOS/VND' },
    label: 'EOS/VND, EOS Vietnamese Dong'
  },
  {
    value: { id: '3742', name: 'EOS South African Rand', decimal: '2', symbol: 'EOS/ZAR' },
    label: 'EOS/ZAR, EOS South African Rand'
  },
  {
    value: { id: '3743', name: 'eosDAC Bitcoin', decimal: '8', symbol: 'EOSDAC/BTC' },
    label: 'EOSDAC/BTC, eosDAC Bitcoin'
  },
  {
    value: { id: '3744', name: 'eosDAC Ethereum', decimal: '8', symbol: 'EOSDAC/ETH' },
    label: 'EOSDAC/ETH, eosDAC Ethereum'
  },
  {
    value: { id: '3745', name: 'eosDAC US Dollar', decimal: '6', symbol: 'EOSDAC/USD' },
    label: 'EOSDAC/USD, eosDAC US Dollar'
  },
  {
    value: { id: '3746', name: 'EOT Token Bitcoin', decimal: '8', symbol: 'EOT/BTC' },
    label: 'EOT/BTC, EOT Token Bitcoin'
  },
  {
    value: { id: '3747', name: 'EOT Token US Dollar', decimal: '6', symbol: 'EOT/USD' },
    label: 'EOT/USD, EOT Token US Dollar'
  },
  {
    value: { id: '3750', name: 'Emphy US Dollar', decimal: '6', symbol: 'EPY/USD' },
    label: 'EPY/USD, Emphy US Dollar'
  },
  {
    value: { id: '3754', name: 'EquiTrader US Dollar', decimal: '6', symbol: 'EQT/USD' },
    label: 'EQT/USD, EquiTrader US Dollar'
  },
  {
    value: { id: '3755', name: 'EuropeCoin Bitcoin', decimal: '8', symbol: 'ERC/BTC' },
    label: 'ERC/BTC, EuropeCoin Bitcoin'
  },
  {
    value: { id: '3756', name: 'EuropeCoin US Dollar', decimal: '5', symbol: 'ERC/USD' },
    label: 'ERC/USD, EuropeCoin US Dollar'
  },
  {
    value: { id: '3757', name: 'ERC20 Ethereum', decimal: '8', symbol: 'ERC20/ETH' },
    label: 'ERC20/ETH, ERC20 Ethereum'
  },
  {
    value: { id: '3758', name: 'ERC20 US Dollar', decimal: '7', symbol: 'ERC20/USD' },
    label: 'ERC20/USD, ERC20 US Dollar'
  },
  {
    value: { id: '3759', name: 'Eroscoin Bitcoin', decimal: '8', symbol: 'ERO/BTC' },
    label: 'ERO/BTC, Eroscoin Bitcoin'
  },
  {
    value: { id: '3760', name: 'Eroscoin US Dollar', decimal: '6', symbol: 'ERO/USD' },
    label: 'ERO/USD, Eroscoin US Dollar'
  },
  {
    value: { id: '3764', name: 'Eryllium US Dollar', decimal: '6', symbol: 'ERY/USD' },
    label: 'ERY/USD, Eryllium US Dollar'
  },
  {
    value: { id: '3766', name: 'Espers Ethereum', decimal: '8', symbol: 'ESP/ETH' },
    label: 'ESP/ETH, Espers Ethereum'
  },
  {
    value: { id: '3767', name: 'Espers US Dollar', decimal: '6', symbol: 'ESP/USD' },
    label: 'ESP/USD, Espers US Dollar'
  },
  {
    value: { id: '3768', name: 'Essentia Ethereum', decimal: '8', symbol: 'ESS/ETH' },
    label: 'ESS/ETH, Essentia Ethereum'
  },
  {
    value: { id: '3769', name: 'Essentia US Dollar', decimal: '8', symbol: 'ESS/USD' },
    label: 'ESS/USD, Essentia US Dollar'
  },
  {
    value: { id: '3771', name: 'Etheera Ethereum', decimal: '8', symbol: 'ETA/ETH' },
    label: 'ETA/ETH, Etheera Ethereum'
  },
  {
    value: { id: '3772', name: 'Etheera US Dollar', decimal: '8', symbol: 'ETA/USD' },
    label: 'ETA/USD, Etheera US Dollar'
  },
  {
    value: { id: '3773', name: 'Ethbits Bitcoin', decimal: '6', symbol: 'ETBS/BTC' },
    label: 'ETBS/BTC, Ethbits Bitcoin'
  },
  {
    value: { id: '3775', name: 'Ethbits US Dollar', decimal: '5', symbol: 'ETBS/USD' },
    label: 'ETBS/USD, Ethbits US Dollar'
  },
  {
    value: { id: '3776', name: 'Ethereum Classic Bitcoin Cash', decimal: '8', symbol: 'ETC/BCH' },
    label: 'ETC/BCH, Ethereum Classic Bitcoin Cash'
  },
  {
    value: { id: '3777', name: 'Ethereum Classic Binance Coin', decimal: '4', symbol: 'ETC/BNB' },
    label: 'ETC/BNB, Ethereum Classic Binance Coin'
  },
  {
    value: { id: '3778', name: 'Ethereum Classic Brazil Real', decimal: '4', symbol: 'ETC/BRL' },
    label: 'ETC/BRL, Ethereum Classic Brazil Real'
  },
  {
    value: { id: '3779', name: 'Ethereum Classic Bitcoin', decimal: '6', symbol: 'ETC/BTC' },
    label: 'ETC/BTC, Ethereum Classic Bitcoin'
  },
  {
    value: {
      id: '3780',
      name: 'Ethereum Classic Canadian Dollar',
      decimal: '3',
      symbol: 'ETC/CAD'
    },
    label: 'ETC/CAD, Ethereum Classic Canadian Dollar'
  },
  {
    value: { id: '3781', name: 'Ethereum Classic Chinese Yuan', decimal: '2', symbol: 'ETC/CNY' },
    label: 'ETC/CNY, Ethereum Classic Chinese Yuan'
  },
  {
    value: { id: '3783', name: 'Ethereum Classic Ethereum', decimal: '6', symbol: 'ETC/ETH' },
    label: 'ETC/ETH, Ethereum Classic Ethereum'
  },
  {
    value: { id: '3784', name: 'Ethereum Classic Euro', decimal: '3', symbol: 'ETC/EUR' },
    label: 'ETC/EUR, Ethereum Classic Euro'
  },
  {
    value: { id: '3785', name: 'Ethereum Classic British Pound', decimal: '3', symbol: 'ETC/GBP' },
    label: 'ETC/GBP, Ethereum Classic British Pound'
  },
  {
    value: {
      id: '3786',
      name: 'Ethereum Classic Hong Kong Dollar',
      decimal: '2',
      symbol: 'ETC/HKD'
    },
    label: 'ETC/HKD, Ethereum Classic Hong Kong Dollar'
  },
  {
    value: {
      id: '3787',
      name: 'Ethereum Classic Indonesian Rupiah',
      decimal: '0',
      symbol: 'ETC/IDR'
    },
    label: 'ETC/IDR, Ethereum Classic Indonesian Rupiah'
  },
  {
    value: { id: '3788', name: 'Ethereum Classic Israeli Shekel', decimal: '3', symbol: 'ETC/ILS' },
    label: 'ETC/ILS, Ethereum Classic Israeli Shekel'
  },
  {
    value: { id: '3789', name: 'Ethereum Classic Indian Rupee', decimal: '2', symbol: 'ETC/INR' },
    label: 'ETC/INR, Ethereum Classic Indian Rupee'
  },
  {
    value: { id: '3790', name: 'Ethereum Classic Korean Won', decimal: '0', symbol: 'ETC/KRW' },
    label: 'ETC/KRW, Ethereum Classic Korean Won'
  },
  {
    value: { id: '3792', name: 'Ethereum Classic Mexican Peso', decimal: '2', symbol: 'ETC/MXN' },
    label: 'ETC/MXN, Ethereum Classic Mexican Peso'
  },
  {
    value: {
      id: '3793',
      name: 'Ethereum Classic Malaysian Ringgit',
      decimal: '3',
      symbol: 'ETC/MYR'
    },
    label: 'ETC/MYR, Ethereum Classic Malaysian Ringgit'
  },
  {
    value: { id: '3794', name: 'Ethereum Classic Polish Zloty', decimal: '3', symbol: 'ETC/PLN' },
    label: 'ETC/PLN, Ethereum Classic Polish Zloty'
  },
  {
    value: { id: '3795', name: 'Ethereum Classic Russian Ruble', decimal: '4', symbol: 'ETC/RUB' },
    label: 'ETC/RUB, Ethereum Classic Russian Ruble'
  },
  {
    value: { id: '3796', name: 'Ethereum Classic Saudi Riyal', decimal: '3', symbol: 'ETC/SAR' },
    label: 'ETC/SAR, Ethereum Classic Saudi Riyal'
  },
  {
    value: { id: '3797', name: 'Ethereum Classic Swedish Krona', decimal: '2', symbol: 'ETC/SEK' },
    label: 'ETC/SEK, Ethereum Classic Swedish Krona'
  },
  {
    value: { id: '3798', name: 'Ethereum Classic Turkish Lira', decimal: '3', symbol: 'ETC/TRY' },
    label: 'ETC/TRY, Ethereum Classic Turkish Lira'
  },
  {
    value: {
      id: '3799',
      name: 'Ethereum Classic Vietnamese Dong',
      decimal: '0',
      symbol: 'ETC/VND'
    },
    label: 'ETC/VND, Ethereum Classic Vietnamese Dong'
  },
  {
    value: { id: '3802', name: 'Ethereum Gold US Dollar', decimal: '6', symbol: 'ETG/USD' },
    label: 'ETG/USD, Ethereum Gold US Dollar'
  },
  {
    value: { id: '3803', name: 'Ethereum Australian Dollar', decimal: '2', symbol: 'ETH/AUD' },
    label: 'ETH/AUD, Ethereum Australian Dollar'
  },
  {
    value: { id: '3804', name: 'Ethereum bitCNY', decimal: '2', symbol: 'ETH/BITCNY' },
    label: 'ETH/BITCNY, Ethereum bitCNY'
  },
  {
    value: { id: '3805', name: 'Ethereum Brazil Real', decimal: '2', symbol: 'ETH/BRL' },
    label: 'ETH/BRL, Ethereum Brazil Real'
  },
  {
    value: { id: '3806', name: 'Ethereum Canadian Dollar', decimal: '2', symbol: 'ETH/CAD' },
    label: 'ETH/CAD, Ethereum Canadian Dollar'
  },
  {
    value: { id: '3807', name: 'Ethereum Chinese Yuan', decimal: '2', symbol: 'ETH/CNY' },
    label: 'ETH/CNY, Ethereum Chinese Yuan'
  },
  {
    value: { id: '3810', name: 'Ethereum Hong Kong Dollar', decimal: '2', symbol: 'ETH/HKD' },
    label: 'ETH/HKD, Ethereum Hong Kong Dollar'
  },
  {
    value: { id: '3811', name: 'Ethereum Indonesian Rupiah', decimal: '0', symbol: 'ETH/IDR' },
    label: 'ETH/IDR, Ethereum Indonesian Rupiah'
  },
  {
    value: { id: '3812', name: 'Ethereum Israeli Shekel', decimal: '2', symbol: 'ETH/ILS' },
    label: 'ETH/ILS, Ethereum Israeli Shekel'
  },
  {
    value: { id: '3813', name: 'Ethereum Indian Rupee', decimal: '0', symbol: 'ETH/INR' },
    label: 'ETH/INR, Ethereum Indian Rupee'
  },
  {
    value: { id: '3815', name: 'Ethereum Korean Won', decimal: '0', symbol: 'ETH/KRW' },
    label: 'ETH/KRW, Ethereum Korean Won'
  },
  {
    value: { id: '3816', name: 'Ethereum Litecoin', decimal: '4', symbol: 'ETH/LTC' },
    label: 'ETH/LTC, Ethereum Litecoin'
  },
  {
    value: { id: '3817', name: 'Ethereum Mexican Peso', decimal: '2', symbol: 'ETH/MXN' },
    label: 'ETH/MXN, Ethereum Mexican Peso'
  },
  {
    value: { id: '3818', name: 'Ethereum Malaysian Ringgit', decimal: '2', symbol: 'ETH/MYR' },
    label: 'ETH/MYR, Ethereum Malaysian Ringgit'
  },
  {
    value: { id: '3819', name: 'Ethereum Philippine Peso', decimal: '0', symbol: 'ETH/PHP' },
    label: 'ETH/PHP, Ethereum Philippine Peso'
  },
  {
    value: { id: '3820', name: 'Ethereum Polish Zloty', decimal: '2', symbol: 'ETH/PLN' },
    label: 'ETH/PLN, Ethereum Polish Zloty'
  },
  {
    value: { id: '3822', name: 'Ethereum Saudi Riyal', decimal: '2', symbol: 'ETH/SAR' },
    label: 'ETH/SAR, Ethereum Saudi Riyal'
  },
  {
    value: { id: '3823', name: 'Ethereum Swedish Krona', decimal: '2', symbol: 'ETH/SEK' },
    label: 'ETH/SEK, Ethereum Swedish Krona'
  },
  {
    value: { id: '3824', name: 'Ethereum Singapore Dollar', decimal: '2', symbol: 'ETH/SGD' },
    label: 'ETH/SGD, Ethereum Singapore Dollar'
  },
  {
    value: { id: '3826', name: 'Ethereum Turkish Lira', decimal: '2', symbol: 'ETH/TRY' },
    label: 'ETH/TRY, Ethereum Turkish Lira'
  },
  {
    value: { id: '3827', name: 'Ethereum Ukrainian Hryvnia', decimal: '2', symbol: 'ETH/UAH' },
    label: 'ETH/UAH, Ethereum Ukrainian Hryvnia'
  },
  {
    value: { id: '3829', name: 'Ethereum Vietnamese Dong', decimal: '0', symbol: 'ETH/VND' },
    label: 'ETH/VND, Ethereum Vietnamese Dong'
  },
  {
    value: { id: '3830', name: 'Ethereum XRP', decimal: '4', symbol: 'ETH/XRP' },
    label: 'ETH/XRP, Ethereum XRP'
  },
  {
    value: { id: '3831', name: 'Ethereum Dark Bitcoin', decimal: '8', symbol: 'ETHD/BTC' },
    label: 'ETHD/BTC, Ethereum Dark Bitcoin'
  },
  {
    value: { id: '3835', name: 'Ethereum Dark US Dollar', decimal: '6', symbol: 'ETHD/USD' },
    label: 'ETHD/USD, Ethereum Dark US Dollar'
  },
  {
    value: { id: '3836', name: 'Ethos Bitcoin', decimal: '2', symbol: 'ETHOS/BTC' },
    label: 'ETHOS/BTC, Ethos Bitcoin'
  },
  {
    value: { id: '3837', name: 'Ethos Ethereum', decimal: '6', symbol: 'ETHOS/ETH' },
    label: 'ETHOS/ETH, Ethos Ethereum'
  },
  {
    value: { id: '3838', name: 'Electroneum Australian Dollar', decimal: '6', symbol: 'ETN/AUD' },
    label: 'ETN/AUD, Electroneum Australian Dollar'
  },
  {
    value: { id: '3839', name: 'Electroneum Bitcoin', decimal: '8', symbol: 'ETN/BTC' },
    label: 'ETN/BTC, Electroneum Bitcoin'
  },
  {
    value: { id: '3841', name: 'Electroneum Ethereum', decimal: '7', symbol: 'ETN/ETH' },
    label: 'ETN/ETH, Electroneum Ethereum'
  },
  {
    value: { id: '3842', name: 'Electroneum Euro', decimal: '3', symbol: 'ETN/EUR' },
    label: 'ETN/EUR, Electroneum Euro'
  },
  {
    value: { id: '3845', name: 'Metaverse ETP Bitcoin', decimal: '6', symbol: 'ETP/BTC' },
    label: 'ETP/BTC, Metaverse ETP Bitcoin'
  },
  {
    value: { id: '3846', name: 'Metaverse ETP Ethereum', decimal: '6', symbol: 'ETP/ETH' },
    label: 'ETP/ETH, Metaverse ETP Ethereum'
  },
  {
    value: { id: '3848', name: 'Metaverse ETP US Dollar', decimal: '5', symbol: 'ETP/USD' },
    label: 'ETP/USD, Metaverse ETP US Dollar'
  },
  {
    value: { id: '3852', name: 'EncryptoTel [WAVES] US Dollar', decimal: '6', symbol: 'ETT/USD' },
    label: 'ETT/USD, EncryptoTel [WAVES] US Dollar'
  },
  {
    value: { id: '3856', name: 'Eurocoin US Dollar', decimal: '6', symbol: 'EUC/USD' },
    label: 'EUC/USD, Eurocoin US Dollar'
  },
  {
    value: { id: '3857', name: 'Euro Bitcoin', decimal: '6', symbol: 'EUR/BTC' },
    label: 'EUR/BTC, Euro Bitcoin'
  },
  {
    value: { id: '3858', name: 'STASIS EURS US Dollar', decimal: '4', symbol: 'EURS/USD' },
    label: 'EURS/USD, STASIS EURS US Dollar'
  },
  {
    value: { id: '3859', name: 'eUSD Ethereum', decimal: '8', symbol: 'EUSD/ETH' },
    label: 'EUSD/ETH, eUSD Ethereum'
  },
  {
    value: { id: '3860', name: 'eUSD US Dollar', decimal: '6', symbol: 'EUSD/USD' },
    label: 'EUSD/USD, eUSD US Dollar'
  },
  {
    value: { id: '3861', name: 'EventChain Bitcoin', decimal: '8', symbol: 'EVC/BTC' },
    label: 'EVC/BTC, EventChain Bitcoin'
  },
  {
    value: { id: '3863', name: 'EventChain US Dollar', decimal: '6', symbol: 'EVC/USD' },
    label: 'EVC/USD, EventChain US Dollar'
  },
  {
    value: { id: '3867', name: 'Evil Coin US Dollar', decimal: '6', symbol: 'EVIL/USD' },
    label: 'EVIL/USD, Evil Coin US Dollar'
  },
  {
    value: { id: '3870', name: 'EvenCoin Bitcoin', decimal: '8', symbol: 'EVNN/BTC' },
    label: 'EVNN/BTC, EvenCoin Bitcoin'
  },
  {
    value: { id: '3871', name: 'EvenCoin Ethereum', decimal: '8', symbol: 'EVNN/ETH' },
    label: 'EVNN/ETH, EvenCoin Ethereum'
  },
  {
    value: { id: '3872', name: 'EvenCoin US Dollar', decimal: '4', symbol: 'EVNN/USD' },
    label: 'EVNN/USD, EvenCoin US Dollar'
  },
  {
    value: { id: '3876', name: 'Evotion US Dollar', decimal: '6', symbol: 'EVO/USD' },
    label: 'EVO/USD, Evotion US Dollar'
  },
  {
    value: { id: '3880', name: 'Everus US Dollar', decimal: '6', symbol: 'EVR/USD' },
    label: 'EVR/USD, Everus US Dollar'
  },
  {
    value: { id: '3881', name: 'Everex Bitcoin', decimal: '7', symbol: 'EVX/BTC' },
    label: 'EVX/BTC, Everex Bitcoin'
  },
  {
    value: { id: '3882', name: 'Everex Ethereum', decimal: '6', symbol: 'EVX/ETH' },
    label: 'EVX/ETH, Everex Ethereum'
  },
  {
    value: { id: '3886', name: 'Eximchain Ethereum', decimal: '8', symbol: 'EXC/ETH' },
    label: 'EXC/ETH, Eximchain Ethereum'
  },
  {
    value: { id: '3887', name: 'Eximchain US Dollar', decimal: '8', symbol: 'EXC/USD' },
    label: 'EXC/USD, Eximchain US Dollar'
  },
  {
    value: { id: '3888', name: 'ExclusiveCoin Bitcoin', decimal: '7', symbol: 'EXCL/BTC' },
    label: 'EXCL/BTC, ExclusiveCoin Bitcoin'
  },
  {
    value: { id: '3889', name: 'ExclusiveCoin US Dollar', decimal: '5', symbol: 'EXCL/USD' },
    label: 'EXCL/USD, ExclusiveCoin US Dollar'
  },
  {
    value: { id: '3890', name: 'EXMR Ethereum', decimal: '7', symbol: 'EXMR/ETH' },
    label: 'EXMR/ETH, EXMR Ethereum'
  },
  {
    value: { id: '3891', name: 'EXMR US Dollar', decimal: '8', symbol: 'EXMR/USD' },
    label: 'EXMR/USD, EXMR US Dollar'
  },
  {
    value: { id: '3892', name: 'ExchangeN Bitcoin', decimal: '8', symbol: 'EXN/BTC' },
    label: 'EXN/BTC, ExchangeN Bitcoin'
  },
  {
    value: { id: '3894', name: 'ExchangeN US Dollar', decimal: '6', symbol: 'EXN/USD' },
    label: 'EXN/USD, ExchangeN US Dollar'
  },
  {
    value: { id: '3895', name: 'Expanse Bitcoin', decimal: '6', symbol: 'EXP/BTC' },
    label: 'EXP/BTC, Expanse Bitcoin'
  },
  {
    value: { id: '3898', name: 'Expanse US Dollar', decimal: '5', symbol: 'EXP/USD' },
    label: 'EXP/USD, Expanse US Dollar'
  },
  {
    value: { id: '3900', name: 'EXRNchain US Dollar', decimal: '7', symbol: 'EXRN/USD' },
    label: 'EXRN/USD, EXRNchain US Dollar'
  },
  {
    value: { id: '3901', name: 'FairCoin Bitcoin', decimal: '8', symbol: 'FAIR/BTC' },
    label: 'FAIR/BTC, FairCoin Bitcoin'
  },
  {
    value: { id: '3902', name: 'FairCoin US Dollar', decimal: '5', symbol: 'FAIR/USD' },
    label: 'FAIR/USD, FairCoin US Dollar'
  },
  {
    value: { id: '3903', name: 'FAPcoin Bitcoin', decimal: '8', symbol: 'FAP/BTC' },
    label: 'FAP/BTC, FAPcoin Bitcoin'
  },
  {
    value: { id: '3905', name: 'FAPcoin US Dollar', decimal: '6', symbol: 'FAP/USD' },
    label: 'FAP/USD, FAPcoin US Dollar'
  },
  {
    value: { id: '3909', name: 'Fazzcoin US Dollar', decimal: '6', symbol: 'FAZZ/USD' },
    label: 'FAZZ/USD, Fazzcoin US Dollar'
  },
  {
    value: { id: '3910', name: 'Facecoin Ethereum', decimal: '8', symbol: 'FC/ETH' },
    label: 'FC/ETH, Facecoin Ethereum'
  },
  {
    value: { id: '3911', name: 'Facecoin US Dollar', decimal: '6', symbol: 'FC/USD' },
    label: 'FC/USD, Facecoin US Dollar'
  },
  {
    value: { id: '3912', name: 'Fantomcoin Bitcoin', decimal: '8', symbol: 'FCN/BTC' },
    label: 'FCN/BTC, Fantomcoin Bitcoin'
  },
  {
    value: { id: '3915', name: 'Fantomcoin US Dollar', decimal: '5', symbol: 'FCN/USD' },
    label: 'FCN/USD, Fantomcoin US Dollar'
  },
  {
    value: { id: '3919', name: 'Factom US Dollar', decimal: '4', symbol: 'FCT/USD' },
    label: 'FCT/USD, Factom US Dollar'
  },
  {
    value: { id: '3920', name: 'Friendz Bitcoin', decimal: '8', symbol: 'FDZ/BTC' },
    label: 'FDZ/BTC, Friendz Bitcoin'
  },
  {
    value: { id: '3921', name: 'Friendz Ethereum', decimal: '8', symbol: 'FDZ/ETH' },
    label: 'FDZ/ETH, Friendz Ethereum'
  },
  {
    value: { id: '3922', name: 'Friendz US Dollar', decimal: '4', symbol: 'FDZ/USD' },
    label: 'FDZ/USD, Friendz US Dollar'
  },
  {
    value: { id: '3923', name: 'Fetch Binance Coin', decimal: '5', symbol: 'FET/BNB' },
    label: 'FET/BNB, Fetch Binance Coin'
  },
  {
    value: { id: '3924', name: 'Fetch Bitcoin', decimal: '8', symbol: 'FET/BTC' },
    label: 'FET/BTC, Fetch Bitcoin'
  },
  {
    value: { id: '3926', name: 'Fetch US Dollar', decimal: '4', symbol: 'FET/USD' },
    label: 'FET/USD, Fetch US Dollar'
  },
  {
    value: { id: '3927', name: 'FireFlyCoin Bitcoin', decimal: '8', symbol: 'FFC/BTC' },
    label: 'FFC/BTC, FireFlyCoin Bitcoin'
  },
  {
    value: { id: '3930', name: 'FireFlyCoin US Dollar', decimal: '6', symbol: 'FFC/USD' },
    label: 'FFC/USD, FireFlyCoin US Dollar'
  },
  {
    value: { id: '3931', name: 'Filecoin US Dollar', decimal: '4', symbol: 'FIL/USD' },
    label: 'FIL/USD, Filecoin US Dollar'
  },
  {
    value: { id: '3932', name: 'Firecoin Bitcoin', decimal: '6', symbol: 'FIRE/BTC' },
    label: 'FIRE/BTC, Firecoin Bitcoin'
  },
  {
    value: { id: '3933', name: 'Firecoin US Dollar', decimal: '5', symbol: 'FIRE/USD' },
    label: 'FIRE/USD, Firecoin US Dollar'
  },
  {
    value: { id: '3937', name: 'FujiCoin US Dollar', decimal: '6', symbol: 'FJC/USD' },
    label: 'FJC/USD, FujiCoin US Dollar'
  },
  {
    value: { id: '3941', name: 'Flash US Dollar', decimal: '6', symbol: 'FLASH/USD' },
    label: 'FLASH/USD, Flash US Dollar'
  },
  {
    value: { id: '3942', name: 'Flaxscript Bitcoin', decimal: '8', symbol: 'FLAX/BTC' },
    label: 'FLAX/BTC, Flaxscript Bitcoin'
  },
  {
    value: { id: '3945', name: 'Flaxscript US Dollar', decimal: '6', symbol: 'FLAX/USD' },
    label: 'FLAX/USD, Flaxscript US Dollar'
  },
  {
    value: { id: '3947', name: 'FoldingCoin US Dollar', decimal: '6', symbol: 'FLDC/USD' },
    label: 'FLDC/USD, FoldingCoin US Dollar'
  },
  {
    value: { id: '3948', name: 'FLiK Bitcoin', decimal: '8', symbol: 'FLIK/BTC' },
    label: 'FLIK/BTC, FLiK Bitcoin'
  },
  {
    value: { id: '3950', name: 'FLiK US Dollar', decimal: '6', symbol: 'FLIK/USD' },
    label: 'FLIK/USD, FLiK US Dollar'
  },
  {
    value: { id: '3953', name: 'Flixxo US Dollar', decimal: '6', symbol: 'FLIXX/USD' },
    label: 'FLIXX/USD, Flixxo US Dollar'
  },
  {
    value: { id: '3954', name: 'FolmCoin Bitcoin', decimal: '8', symbol: 'FLM/BTC' },
    label: 'FLM/BTC, FolmCoin Bitcoin'
  },
  {
    value: { id: '3955', name: 'FolmCoin US Dollar', decimal: '6', symbol: 'FLM/USD' },
    label: 'FLM/USD, FolmCoin US Dollar'
  },
  {
    value: { id: '3956', name: 'FLO Bitcoin', decimal: '8', symbol: 'FLO/BTC' },
    label: 'FLO/BTC, FLO Bitcoin'
  },
  {
    value: { id: '3957', name: 'FLO US Dollar', decimal: '6', symbol: 'FLO/USD' },
    label: 'FLO/USD, FLO US Dollar'
  },
  {
    value: { id: '3958', name: 'FlutterCoin Bitcoin', decimal: '8', symbol: 'FLT/BTC' },
    label: 'FLT/BTC, FlutterCoin Bitcoin'
  },
  {
    value: { id: '3961', name: 'FlutterCoin US Dollar', decimal: '6', symbol: 'FLT/USD' },
    label: 'FLT/USD, FlutterCoin US Dollar'
  },
  {
    value: { id: '3962', name: 'Fluz Fluz Ethereum', decimal: '8', symbol: 'FLUZ/ETH' },
    label: 'FLUZ/ETH, Fluz Fluz Ethereum'
  },
  {
    value: { id: '3963', name: 'Fluz Fluz US Dollar', decimal: '8', symbol: 'FLUZ/USD' },
    label: 'FLUZ/USD, Fluz Fluz US Dollar'
  },
  {
    value: { id: '3964', name: 'FlavorCoin Bitcoin', decimal: '8', symbol: 'FLVR/BTC' },
    label: 'FLVR/BTC, FlavorCoin Bitcoin'
  },
  {
    value: { id: '3965', name: 'FlavorCoin US Dollar', decimal: '6', symbol: 'FLVR/USD' },
    label: 'FLVR/USD, FlavorCoin US Dollar'
  },
  {
    value: { id: '3966', name: 'Flycoin Bitcoin', decimal: '6', symbol: 'FLY/BTC' },
    label: 'FLY/BTC, Flycoin Bitcoin'
  },
  {
    value: { id: '3967', name: 'Flycoin US Dollar', decimal: '5', symbol: 'FLY/USD' },
    label: 'FLY/USD, Flycoin US Dollar'
  },
  {
    value: { id: '3968', name: 'FinCoin Bitcoin', decimal: '6', symbol: 'FNC/BTC' },
    label: 'FNC/BTC, FinCoin Bitcoin'
  },
  {
    value: { id: '3970', name: 'FNKOS Ethereum', decimal: '4', symbol: 'FNKOS/ETH' },
    label: 'FNKOS/ETH, FNKOS Ethereum'
  },
  {
    value: { id: '3971', name: 'FNKOS US Dollar', decimal: '4', symbol: 'FNKOS/USD' },
    label: 'FNKOS/USD, FNKOS US Dollar'
  },
  {
    value: { id: '3972', name: 'Fintab Bitcoin', decimal: '8', symbol: 'FNTB/BTC' },
    label: 'FNTB/BTC, Fintab Bitcoin'
  },
  {
    value: { id: '3974', name: 'Fintab US Dollar', decimal: '6', symbol: 'FNTB/USD' },
    label: 'FNTB/USD, Fintab US Dollar'
  },
  {
    value: { id: '3976', name: 'FOIN US Dollar', decimal: '2', symbol: 'FOIN/USD' },
    label: 'FOIN/USD, FOIN US Dollar'
  },
  {
    value: { id: '3980', name: 'Fonziecoin US Dollar', decimal: '6', symbol: 'FONZ/USD' },
    label: 'FONZ/USD, Fonziecoin US Dollar'
  },
  {
    value: { id: '3981', name: 'FORCE Bitcoin', decimal: '8', symbol: 'FOR/BTC' },
    label: 'FOR/BTC, FORCE Bitcoin'
  },
  {
    value: { id: '3982', name: 'FORCE US Dollar', decimal: '6', symbol: 'FOR/USD' },
    label: 'FOR/USD, FORCE US Dollar'
  },
  {
    value: { id: '3983', name: 'Fortuna Bitcoin', decimal: '4', symbol: 'FOTA/BTC' },
    label: 'FOTA/BTC, Fortuna Bitcoin'
  },
  {
    value: { id: '3984', name: 'Fortuna US Dollar', decimal: '4', symbol: 'FOTA/USD' },
    label: 'FOTA/USD, Fortuna US Dollar'
  },
  {
    value: { id: '3985', name: 'Freicoin Bitcoin', decimal: '8', symbol: 'FRC/BTC' },
    label: 'FRC/BTC, Freicoin Bitcoin'
  },
  {
    value: { id: '3986', name: 'Freicoin US Dollar', decimal: '6', symbol: 'FRC/USD' },
    label: 'FRC/USD, Freicoin US Dollar'
  },
  {
    value: { id: '3987', name: 'Farad Ethereum', decimal: '8', symbol: 'FRD/ETH' },
    label: 'FRD/ETH, Farad Ethereum'
  },
  {
    value: { id: '3988', name: 'Farad US Dollar', decimal: '6', symbol: 'FRD/USD' },
    label: 'FRD/USD, Farad US Dollar'
  },
  {
    value: { id: '3989', name: 'Franko Bitcoin', decimal: '8', symbol: 'FRK/BTC' },
    label: 'FRK/BTC, Franko Bitcoin'
  },
  {
    value: { id: '3990', name: 'Franko US Dollar', decimal: '6', symbol: 'FRK/USD' },
    label: 'FRK/USD, Franko US Dollar'
  },
  {
    value: { id: '3994', name: 'Francs US Dollar', decimal: '6', symbol: 'FRN/USD' },
    label: 'FRN/USD, Francs US Dollar'
  },
  {
    value: { id: '3997', name: 'FirstCoin US Dollar', decimal: '6', symbol: 'FRST/USD' },
    label: 'FRST/USD, FirstCoin US Dollar'
  },
  {
    value: { id: '3998', name: 'FrankyWillCoin Bitcoin', decimal: '8', symbol: 'FRWC/BTC' },
    label: 'FRWC/BTC, FrankyWillCoin Bitcoin'
  },
  {
    value: { id: '3999', name: 'FrankyWillCoin US Dollar', decimal: '6', symbol: 'FRWC/USD' },
    label: 'FRWC/USD, FrankyWillCoin US Dollar'
  },
  {
    value: { id: '4000', name: 'Fusion Bitcoin', decimal: '8', symbol: 'FSN/BTC' },
    label: 'FSN/BTC, Fusion Bitcoin'
  },
  {
    value: { id: '4001', name: 'Fusion Ethereum', decimal: '8', symbol: 'FSN/ETH' },
    label: 'FSN/ETH, Fusion Ethereum'
  },
  {
    value: { id: '4002', name: 'Fusion US Dollar', decimal: '4', symbol: 'FSN/USD' },
    label: 'FSN/USD, Fusion US Dollar'
  },
  {
    value: { id: '4003', name: 'Fastcoin Bitcoin', decimal: '8', symbol: 'FST/BTC' },
    label: 'FST/BTC, Fastcoin Bitcoin'
  },
  {
    value: { id: '4006', name: 'Fastcoin US Dollar', decimal: '6', symbol: 'FST/USD' },
    label: 'FST/USD, Fastcoin US Dollar'
  },
  {
    value: { id: '4007', name: 'Fabric Token Ethereum', decimal: '8', symbol: 'FT/ETH' },
    label: 'FT/ETH, Fabric Token Ethereum'
  },
  {
    value: { id: '4008', name: 'Fabric Token US Dollar', decimal: '8', symbol: 'FT/USD' },
    label: 'FT/USD, Fabric Token US Dollar'
  },
  {
    value: { id: '4009', name: 'Feathercoin Bitcoin', decimal: '8', symbol: 'FTC/BTC' },
    label: 'FTC/BTC, Feathercoin Bitcoin'
  },
  {
    value: { id: '4012', name: 'Feathercoin US Dollar', decimal: '6', symbol: 'FTC/USD' },
    label: 'FTC/USD, Feathercoin US Dollar'
  },
  {
    value: { id: '4013', name: 'FuturoCoin Bitcoin', decimal: '6', symbol: 'FTO/BTC' },
    label: 'FTO/BTC, FuturoCoin Bitcoin'
  },
  {
    value: { id: '4014', name: 'FuturoCoin Dogecoin', decimal: '2', symbol: 'FTO/DOGE' },
    label: 'FTO/DOGE, FuturoCoin Dogecoin'
  },
  {
    value: { id: '4015', name: 'FuturoCoin Ethereum', decimal: '6', symbol: 'FTO/ETH' },
    label: 'FTO/ETH, FuturoCoin Ethereum'
  },
  {
    value: { id: '4016', name: 'FuturoCoin Russian Ruble', decimal: '2', symbol: 'FTO/RUB' },
    label: 'FTO/RUB, FuturoCoin Russian Ruble'
  },
  {
    value: { id: '4017', name: 'FuturoCoin US Dollar', decimal: '4', symbol: 'FTO/USD' },
    label: 'FTO/USD, FuturoCoin US Dollar'
  },
  {
    value: { id: '4018', name: 'FuturoCoin Waves', decimal: '4', symbol: 'FTO/WAVES' },
    label: 'FTO/WAVES, FuturoCoin Waves'
  },
  {
    value: { id: '4019', name: 'Flash Token Bitcoin', decimal: '8', symbol: 'FTOKEN/BTC' },
    label: 'FTOKEN/BTC, Flash Token Bitcoin'
  },
  {
    value: { id: '4020', name: 'Flash Token US Dollar', decimal: '6', symbol: 'FTOKEN/USD' },
    label: 'FTOKEN/USD, Flash Token US Dollar'
  },
  {
    value: { id: '4021', name: 'FuckToken Ethereum', decimal: '8', symbol: 'FUCK/ETH' },
    label: 'FUCK/ETH, FuckToken Ethereum'
  },
  {
    value: { id: '4022', name: 'FuckToken US Dollar', decimal: '7', symbol: 'FUCK/USD' },
    label: 'FUCK/USD, FuckToken US Dollar'
  },
  {
    value: { id: '4027', name: 'Etherparty US Dollar', decimal: '6', symbol: 'FUEL/USD' },
    label: 'FUEL/USD, Etherparty US Dollar'
  },
  {
    value: { id: '4028', name: 'FunFair Bitcoin', decimal: '8', symbol: 'FUN/BTC' },
    label: 'FUN/BTC, FunFair Bitcoin'
  },
  {
    value: { id: '4029', name: 'FunFair Ethereum', decimal: '7', symbol: 'FUN/ETH' },
    label: 'FUN/ETH, FunFair Ethereum'
  },
  {
    value: { id: '4033', name: 'FUNCoin US Dollar', decimal: '6', symbol: 'FUNC/USD' },
    label: 'FUNC/USD, FUNCoin US Dollar'
  },
  {
    value: { id: '4034', name: 'The Cypherfunks Dogecoin', decimal: '6', symbol: 'FUNK/DOGE' },
    label: 'FUNK/DOGE, The Cypherfunks Dogecoin'
  },
  {
    value: { id: '4036', name: 'The Cypherfunks US Dollar', decimal: '8', symbol: 'FUNK/USD' },
    label: 'FUNK/USD, The Cypherfunks US Dollar'
  },
  {
    value: { id: '4040', name: 'FuzzBalls US Dollar', decimal: '6', symbol: 'FUZZ/USD' },
    label: 'FUZZ/USD, FuzzBalls US Dollar'
  },
  {
    value: { id: '4041', name: 'FuturXe Bitcoin', decimal: '8', symbol: 'FXE/BTC' },
    label: 'FXE/BTC, FuturXe Bitcoin'
  },
  {
    value: { id: '4043', name: 'FuturXe US Dollar', decimal: '6', symbol: 'FXE/USD' },
    label: 'FXE/USD, FuturXe US Dollar'
  },
  {
    value: { id: '4044', name: 'FuzeX Ethereum', decimal: '8', symbol: 'FXT/ETH' },
    label: 'FXT/ETH, FuzeX Ethereum'
  },
  {
    value: { id: '4045', name: 'FuzeX US Dollar', decimal: '6', symbol: 'FXT/USD' },
    label: 'FXT/USD, FuzeX US Dollar'
  },
  {
    value: { id: '4046', name: 'FundYourselfNow Ethereum', decimal: '6', symbol: 'FYN/ETH' },
    label: 'FYN/ETH, FundYourselfNow Ethereum'
  },
  {
    value: { id: '4047', name: 'FundYourselfNow US Dollar', decimal: '5', symbol: 'FYN/USD' },
    label: 'FYN/USD, FundYourselfNow US Dollar'
  },
  {
    value: { id: '4049', name: 'FlypMe US Dollar', decimal: '5', symbol: 'FYP/USD' },
    label: 'FYP/USD, FlypMe US Dollar'
  },
  {
    value: { id: '4050', name: 'GAIA Bitcoin', decimal: '8', symbol: 'GAIA/BTC' },
    label: 'GAIA/BTC, GAIA Bitcoin'
  },
  {
    value: { id: '4053', name: 'GAIA US Dollar', decimal: '6', symbol: 'GAIA/USD' },
    label: 'GAIA/USD, GAIA US Dollar'
  },
  {
    value: { id: '4054', name: 'UGAIN Bitcoin', decimal: '8', symbol: 'GAIN/BTC' },
    label: 'GAIN/BTC, UGAIN Bitcoin'
  },
  {
    value: { id: '4055', name: 'UGAIN US Dollar', decimal: '6', symbol: 'GAIN/USD' },
    label: 'GAIN/USD, UGAIN US Dollar'
  },
  {
    value: { id: '4056', name: 'Gambit Bitcoin', decimal: '6', symbol: 'GAM/BTC' },
    label: 'GAM/BTC, Gambit Bitcoin'
  },
  {
    value: { id: '4057', name: 'Gambit US Dollar', decimal: '4', symbol: 'GAM/USD' },
    label: 'GAM/USD, Gambit US Dollar'
  },
  {
    value: { id: '4058', name: 'GameCredits Bitcoin', decimal: '7', symbol: 'GAME/BTC' },
    label: 'GAME/BTC, GameCredits Bitcoin'
  },
  {
    value: { id: '4060', name: 'GameCredits Euro', decimal: '5', symbol: 'GAME/EUR' },
    label: 'GAME/EUR, GameCredits Euro'
  },
  {
    value: { id: '4062', name: 'GameCredits Polish Zloty', decimal: '4', symbol: 'GAME/PLN' },
    label: 'GAME/PLN, GameCredits Polish Zloty'
  },
  {
    value: { id: '4063', name: 'GameCredits US Dollar', decimal: '5', symbol: 'GAME/USD' },
    label: 'GAME/USD, GameCredits US Dollar'
  },
  {
    value: { id: '4065', name: 'Gapcoin Dogecoin', decimal: '6', symbol: 'GAP/DOGE' },
    label: 'GAP/DOGE, Gapcoin Dogecoin'
  },
  {
    value: { id: '4066', name: 'Gapcoin US Dollar', decimal: '6', symbol: 'GAP/USD' },
    label: 'GAP/USD, Gapcoin US Dollar'
  },
  {
    value: { id: '4067', name: 'Gas Bitcoin', decimal: '6', symbol: 'GAS/BTC' },
    label: 'GAS/BTC, Gas Bitcoin'
  },
  {
    value: { id: '4071', name: 'Gas NEO', decimal: '5', symbol: 'GAS/NEO' },
    label: 'GAS/NEO, Gas NEO'
  },
  {
    value: { id: '4072', name: 'Gas US Dollar', decimal: '4', symbol: 'GAS/USD' },
    label: 'GAS/USD, Gas US Dollar'
  },
  {
    value: { id: '4073', name: 'GAY Money Bitcoin', decimal: '8', symbol: 'GAY/BTC' },
    label: 'GAY/BTC, GAY Money Bitcoin'
  },
  {
    value: { id: '4076', name: 'GAY Money US Dollar', decimal: '6', symbol: 'GAY/USD' },
    label: 'GAY/USD, GAY Money US Dollar'
  },
  {
    value: { id: '4077', name: 'GoldBlocks Bitcoin', decimal: '6', symbol: 'GB/BTC' },
    label: 'GB/BTC, GoldBlocks Bitcoin'
  },
  {
    value: { id: '4078', name: 'GoldBlocks US Dollar', decimal: '5', symbol: 'GB/USD' },
    label: 'GB/USD, GoldBlocks US Dollar'
  },
  {
    value: { id: '4079', name: 'GameBet Coin Bitcoin', decimal: '8', symbol: 'GBT/BTC' },
    label: 'GBT/BTC, GameBet Coin Bitcoin'
  },
  {
    value: { id: '4080', name: 'GameBet Coin US Dollar', decimal: '6', symbol: 'GBT/USD' },
    label: 'GBT/USD, GameBet Coin US Dollar'
  },
  {
    value: { id: '4084', name: 'GoByte US Dollar', decimal: '4', symbol: 'GBX/USD' },
    label: 'GBX/USD, GoByte US Dollar'
  },
  {
    value: { id: '4085', name: 'Obyte Bitcoin', decimal: '6', symbol: 'GBYTE/BTC' },
    label: 'GBYTE/BTC, Obyte Bitcoin'
  },
  {
    value: { id: '4088', name: 'Obyte US Dollar', decimal: '2', symbol: 'GBYTE/USD' },
    label: 'GBYTE/USD, Obyte US Dollar'
  },
  {
    value: { id: '4089', name: 'GuccioneCoin Bitcoin', decimal: '8', symbol: 'GCC/BTC' },
    label: 'GCC/BTC, GuccioneCoin Bitcoin'
  },
  {
    value: { id: '4090', name: 'GuccioneCoin US Dollar', decimal: '6', symbol: 'GCC/USD' },
    label: 'GCC/USD, GuccioneCoin US Dollar'
  },
  {
    value: { id: '4094', name: 'GCN Coin US Dollar', decimal: '8', symbol: 'GCN/USD' },
    label: 'GCN/USD, GCN Coin US Dollar'
  },
  {
    value: {
      id: '4096',
      name: 'Global Currency Reserve US Dollar',
      decimal: '6',
      symbol: 'GCR/USD'
    },
    label: 'GCR/USD, Global Currency Reserve US Dollar'
  },
  {
    value: { id: '4100', name: 'GeertCoin US Dollar', decimal: '6', symbol: 'GEERT/USD' },
    label: 'GEERT/USD, GeertCoin US Dollar'
  },
  {
    value: { id: '4101', name: 'DAOstack Ethereum', decimal: '8', symbol: 'GEN/ETH' },
    label: 'GEN/ETH, DAOstack Ethereum'
  },
  {
    value: { id: '4102', name: 'DAOstack US Dollar', decimal: '8', symbol: 'GEN/USD' },
    label: 'GEN/USD, DAOstack US Dollar'
  },
  {
    value: { id: '4103', name: 'GeoCoin Bitcoin', decimal: '6', symbol: 'GEO/BTC' },
    label: 'GEO/BTC, GeoCoin Bitcoin'
  },
  {
    value: { id: '4106', name: 'GeoCoin US Dollar', decimal: '5', symbol: 'GEO/USD' },
    label: 'GEO/USD, GeoCoin US Dollar'
  },
  {
    value: { id: '4107', name: 'Gimli Ethereum', decimal: '8', symbol: 'GIM/ETH' },
    label: 'GIM/ETH, Gimli Ethereum'
  },
  {
    value: { id: '4108', name: 'Gimli US Dollar', decimal: '6', symbol: 'GIM/USD' },
    label: 'GIM/USD, Gimli US Dollar'
  },
  {
    value: { id: '4110', name: 'GINcoin US Dollar', decimal: '4', symbol: 'GIN/USD' },
    label: 'GIN/USD, GINcoin US Dollar'
  },
  {
    value: { id: '4112', name: 'GoldCoin US Dollar', decimal: '6', symbol: 'GLC/USD' },
    label: 'GLC/USD, GoldCoin US Dollar'
  },
  {
    value: { id: '4113', name: 'GlobalCoin Bitcoin', decimal: '8', symbol: 'GLCn/BTC' },
    label: 'GLCn/BTC, GlobalCoin Bitcoin'
  },
  {
    value: { id: '4114', name: 'GlobalCoin US Dollar', decimal: '6', symbol: 'GLCn/USD' },
    label: 'GLCn/USD, GlobalCoin US Dollar'
  },
  {
    value: { id: '4115', name: 'GlassCoin Bitcoin', decimal: '8', symbol: 'GLS/BTC' },
    label: 'GLS/BTC, GlassCoin Bitcoin'
  },
  {
    value: { id: '4116', name: 'GlassCoin US Dollar', decimal: '5', symbol: 'GLS/USD' },
    label: 'GLS/USD, GlassCoin US Dollar'
  },
  {
    value: { id: '4119', name: 'GlobalToken US Dollar', decimal: '6', symbol: 'GLT/USD' },
    label: 'GLT/USD, GlobalToken US Dollar'
  },
  {
    value: { id: '4120', name: 'GameLeagueCoin Bitcoin', decimal: '8', symbol: 'GML/BTC' },
    label: 'GML/BTC, GameLeagueCoin Bitcoin'
  },
  {
    value: { id: '4121', name: 'GameLeagueCoin US Dollar', decimal: '6', symbol: 'GML/USD' },
    label: 'GML/USD, GameLeagueCoin US Dollar'
  },
  {
    value: { id: '4122', name: 'Mercury Protocol Ethereum', decimal: '8', symbol: 'GMT/ETH' },
    label: 'GMT/ETH, Mercury Protocol Ethereum'
  },
  {
    value: { id: '4123', name: 'Mercury Protocol US Dollar', decimal: '6', symbol: 'GMT/USD' },
    label: 'GMT/USD, Mercury Protocol US Dollar'
  },
  {
    value: { id: '4124', name: 'GoldMaxCoin Bitcoin', decimal: '8', symbol: 'GMX/BTC' },
    label: 'GMX/BTC, GoldMaxCoin Bitcoin'
  },
  {
    value: { id: '4125', name: 'GoldMaxCoin US Dollar', decimal: '6', symbol: 'GMX/USD' },
    label: 'GMX/USD, GoldMaxCoin US Dollar'
  },
  {
    value: { id: '4126', name: 'Gnosis Bitcoin', decimal: '6', symbol: 'GNO/BTC' },
    label: 'GNO/BTC, Gnosis Bitcoin'
  },
  {
    value: { id: '4133', name: 'Golem Australian Dollar', decimal: '5', symbol: 'GNT/AUD' },
    label: 'GNT/AUD, Golem Australian Dollar'
  },
  {
    value: { id: '4134', name: 'Golem Bitcoin', decimal: '8', symbol: 'GNT/BTC' },
    label: 'GNT/BTC, Golem Bitcoin'
  },
  {
    value: { id: '4136', name: 'Golem Ethereum', decimal: '8', symbol: 'GNT/ETH' },
    label: 'GNT/ETH, Golem Ethereum'
  },
  {
    value: { id: '4137', name: 'Golem Indian Rupee', decimal: '2', symbol: 'GNT/INR' },
    label: 'GNT/INR, Golem Indian Rupee'
  },
  {
    value: { id: '4138', name: 'Golem Korean Won', decimal: '2', symbol: 'GNT/KRW' },
    label: 'GNT/KRW, Golem Korean Won'
  },
  {
    value: { id: '4142', name: 'Genaro Network Bitcoin', decimal: '8', symbol: 'GNX/BTC' },
    label: 'GNX/BTC, Genaro Network Bitcoin'
  },
  {
    value: { id: '4143', name: 'Genaro Network Ethereum', decimal: '6', symbol: 'GNX/ETH' },
    label: 'GNX/ETH, Genaro Network Ethereum'
  },
  {
    value: { id: '4144', name: 'Genaro Network US Dollar', decimal: '5', symbol: 'GNX/USD' },
    label: 'GNX/USD, Genaro Network US Dollar'
  },
  {
    value: { id: '4145', name: 'GoChain Bitcoin', decimal: '8', symbol: 'GO/BTC' },
    label: 'GO/BTC, GoChain Bitcoin'
  },
  {
    value: { id: '4146', name: 'GoChain Ethereum', decimal: '7', symbol: 'GO/ETH' },
    label: 'GO/ETH, GoChain Ethereum'
  },
  {
    value: { id: '4147', name: 'GoChain US Dollar', decimal: '6', symbol: 'GO/USD' },
    label: 'GO/USD, GoChain US Dollar'
  },
  {
    value: { id: '4148', name: 'Bitcoin God Bitcoin', decimal: '6', symbol: 'GOD/BTC' },
    label: 'GOD/BTC, Bitcoin God Bitcoin'
  },
  {
    value: { id: '4149', name: 'Bitcoin God US Dollar', decimal: '4', symbol: 'GOD/USD' },
    label: 'GOD/USD, Bitcoin God US Dollar'
  },
  {
    value: { id: '4150', name: 'Golfcoin Bitcoin', decimal: '8', symbol: 'GOLF/BTC' },
    label: 'GOLF/BTC, Golfcoin Bitcoin'
  },
  {
    value: { id: '4151', name: 'Golfcoin US Dollar', decimal: '6', symbol: 'GOLF/USD' },
    label: 'GOLF/USD, Golfcoin US Dollar'
  },
  {
    value: { id: '4153', name: 'Golos US Dollar', decimal: '6', symbol: 'GOLOS/USD' },
    label: 'GOLOS/USD, Golos US Dollar'
  },
  {
    value: { id: '4154', name: 'Goodomy Bitcoin', decimal: '8', symbol: 'GOOD/BTC' },
    label: 'GOOD/BTC, Goodomy Bitcoin'
  },
  {
    value: { id: '4157', name: 'Goodomy US Dollar', decimal: '6', symbol: 'GOOD/USD' },
    label: 'GOOD/USD, Goodomy US Dollar'
  },
  {
    value: { id: '4158', name: 'GoNetwork Ethereum', decimal: '8', symbol: 'GOT/ETH' },
    label: 'GOT/ETH, GoNetwork Ethereum'
  },
  {
    value: { id: '4159', name: 'GoNetwork US Dollar', decimal: '8', symbol: 'GOT/USD' },
    label: 'GOT/USD, GoNetwork US Dollar'
  },
  {
    value: { id: '4163', name: 'GoldPieces US Dollar', decimal: '6', symbol: 'GP/USD' },
    label: 'GP/USD, GoldPieces US Dollar'
  },
  {
    value: { id: '4164', name: 'Gold Pressed Latinum Bitcoin', decimal: '8', symbol: 'GPL/BTC' },
    label: 'GPL/BTC, Gold Pressed Latinum Bitcoin'
  },
  {
    value: { id: '4167', name: 'Gold Pressed Latinum US Dollar', decimal: '5', symbol: 'GPL/USD' },
    label: 'GPL/USD, Gold Pressed Latinum US Dollar'
  },
  {
    value: { id: '4171', name: 'GPU Coin US Dollar', decimal: '6', symbol: 'GPU/USD' },
    label: 'GPU/USD, GPU Coin US Dollar'
  },
  {
    value: { id: '4175', name: 'GramCoin US Dollar', decimal: '6', symbol: 'GRAM/USD' },
    label: 'GRAM/USD, GramCoin US Dollar'
  },
  {
    value: { id: '4178', name: 'Greencoin Bitcoin', decimal: '8', symbol: 'GRE/BTC' },
    label: 'GRE/BTC, Greencoin Bitcoin'
  },
  {
    value: { id: '4179', name: 'Greencoin US Dollar', decimal: '6', symbol: 'GRE/USD' },
    label: 'GRE/USD, Greencoin US Dollar'
  },
  {
    value: { id: '4180', name: 'Graft Bitcoin', decimal: '8', symbol: 'GRFT/BTC' },
    label: 'GRFT/BTC, Graft Bitcoin'
  },
  {
    value: { id: '4181', name: 'Graft US Dollar', decimal: '6', symbol: 'GRFT/USD' },
    label: 'GRFT/USD, Graft US Dollar'
  },
  {
    value: { id: '4183', name: 'Grid+ US Dollar', decimal: '5', symbol: 'GRID/USD' },
    label: 'GRID/USD, Grid+ US Dollar'
  },
  {
    value: { id: '4184', name: 'Grin Bitcoin', decimal: '8', symbol: 'GRIN/BTC' },
    label: 'GRIN/BTC, Grin Bitcoin'
  },
  {
    value: { id: '4185', name: 'Grin Ethereum', decimal: '8', symbol: 'GRIN/ETH' },
    label: 'GRIN/ETH, Grin Ethereum'
  },
  {
    value: { id: '4186', name: 'Grin US Dollar', decimal: '4', symbol: 'GRIN/USD' },
    label: 'GRIN/USD, Grin US Dollar'
  },
  {
    value: { id: '4187', name: 'Granite Bitcoin', decimal: '8', symbol: 'GRN/BTC' },
    label: 'GRN/BTC, Granite Bitcoin'
  },
  {
    value: { id: '4190', name: 'Granite US Dollar', decimal: '6', symbol: 'GRN/USD' },
    label: 'GRN/USD, Granite US Dollar'
  },
  {
    value: { id: '4191', name: 'Groestlcoin Bitcoin', decimal: '7', symbol: 'GRS/BTC' },
    label: 'GRS/BTC, Groestlcoin Bitcoin'
  },
  {
    value: { id: '4194', name: 'Groestlcoin Korean Won', decimal: '2', symbol: 'GRS/KRW' },
    label: 'GRS/KRW, Groestlcoin Korean Won'
  },
  {
    value: { id: '4196', name: 'Groestlcoin US Dollar', decimal: '5', symbol: 'GRS/USD' },
    label: 'GRS/USD, Groestlcoin US Dollar'
  },
  {
    value: { id: '4197', name: 'Growers International Bitcoin', decimal: '7', symbol: 'GRWI/BTC' },
    label: 'GRWI/BTC, Growers International Bitcoin'
  },
  {
    value: {
      id: '4200',
      name: 'Growers International US Dollar',
      decimal: '5',
      symbol: 'GRWI/USD'
    },
    label: 'GRWI/USD, Growers International US Dollar'
  },
  {
    value: { id: '4201', name: 'GOLD Reward Token Bitcoin', decimal: '8', symbol: 'GRX/BTC' },
    label: 'GRX/BTC, GOLD Reward Token Bitcoin'
  },
  {
    value: { id: '4203', name: 'GOLD Reward Token US Dollar', decimal: '6', symbol: 'GRX/USD' },
    label: 'GRX/USD, GOLD Reward Token US Dollar'
  },
  {
    value: { id: '4204', name: 'GeyserCoin Bitcoin', decimal: '8', symbol: 'GSR/BTC' },
    label: 'GSR/BTC, GeyserCoin Bitcoin'
  },
  {
    value: { id: '4205', name: 'GeyserCoin US Dollar', decimal: '5', symbol: 'GSR/USD' },
    label: 'GSR/USD, GeyserCoin US Dollar'
  },
  {
    value: { id: '4206', name: 'Global Tour Coin Bitcoin', decimal: '8', symbol: 'GTC/BTC' },
    label: 'GTC/BTC, Global Tour Coin Bitcoin'
  },
  {
    value: { id: '4207', name: 'Global Tour Coin Ethereum', decimal: '7', symbol: 'GTC/ETH' },
    label: 'GTC/ETH, Global Tour Coin Ethereum'
  },
  {
    value: { id: '4209', name: 'Game.com Ethereum', decimal: '8', symbol: 'GTCG/ETH' },
    label: 'GTCG/ETH, Game.com Ethereum'
  },
  {
    value: { id: '4210', name: 'Game.com US Dollar', decimal: '6', symbol: 'GTCG/USD' },
    label: 'GTCG/USD, Game.com US Dollar'
  },
  {
    value: { id: '4211', name: 'Gifto bitCNY', decimal: '5', symbol: 'GTO/BITCNY' },
    label: 'GTO/BITCNY, Gifto bitCNY'
  },
  {
    value: { id: '4213', name: 'Gifto Bitcoin', decimal: '8', symbol: 'GTO/BTC' },
    label: 'GTO/BTC, Gifto Bitcoin'
  },
  {
    value: { id: '4216', name: 'Gifto US Dollar', decimal: '5', symbol: 'GTO/USD' },
    label: 'GTO/USD, Gifto US Dollar'
  },
  {
    value: { id: '4217', name: 'Peerguess Bitcoin', decimal: '8', symbol: 'GUESS/BTC' },
    label: 'GUESS/BTC, Peerguess Bitcoin'
  },
  {
    value: { id: '4218', name: 'Peerguess US Dollar', decimal: '6', symbol: 'GUESS/USD' },
    label: 'GUESS/USD, Peerguess US Dollar'
  },
  {
    value: { id: '4222', name: 'Guncoin US Dollar', decimal: '6', symbol: 'GUN/USD' },
    label: 'GUN/USD, Guncoin US Dollar'
  },
  {
    value: { id: '4223', name: 'Matchpool Bitcoin', decimal: '8', symbol: 'GUP/BTC' },
    label: 'GUP/BTC, Matchpool Bitcoin'
  },
  {
    value: { id: '4227', name: 'Gemini Dollar Ethereum', decimal: '8', symbol: 'GUSD/ETH' },
    label: 'GUSD/ETH, Gemini Dollar Ethereum'
  },
  {
    value: { id: '4231', name: 'Genesis Vision Bitcoin', decimal: '6', symbol: 'GVT/BTC' },
    label: 'GVT/BTC, Genesis Vision Bitcoin'
  },
  {
    value: { id: '4233', name: 'Genesis Vision US Dollar', decimal: '4', symbol: 'GVT/USD' },
    label: 'GVT/USD, Genesis Vision US Dollar'
  },
  {
    value: { id: '4234', name: 'GXChain Bitcoin', decimal: '6', symbol: 'GXS/BTC' },
    label: 'GXS/BTC, GXChain Bitcoin'
  },
  {
    value: { id: '4235', name: 'GXChain Ethereum', decimal: '6', symbol: 'GXS/ETH' },
    label: 'GXS/ETH, GXChain Ethereum'
  },
  {
    value: { id: '4236', name: 'GXC/USD - GXChain US Dollar', decimal: '4', symbol: 'GXS/USD' },
    label: 'GXS/USD, GXC/USD - GXChain US Dollar'
  },
  {
    value: { id: '4238', name: 'Hackspace Capital US Dollar', decimal: '6', symbol: 'HAC/USD' },
    label: 'HAC/USD, Hackspace Capital US Dollar'
  },
  {
    value: { id: '4239', name: 'Halcyon Bitcoin', decimal: '8', symbol: 'HAL/BTC' },
    label: 'HAL/BTC, Halcyon Bitcoin'
  },
  {
    value: { id: '4242', name: 'Halcyon US Dollar', decimal: '6', symbol: 'HAL/USD' },
    label: 'HAL/USD, Halcyon US Dollar'
  },
  {
    value: { id: '4245', name: 'Halloween Coin US Dollar', decimal: '6', symbol: 'HALLO/USD' },
    label: 'HALLO/USD, Halloween Coin US Dollar'
  },
  {
    value: { id: '4246', name: 'Hawala.Today Ethereum', decimal: '6', symbol: 'HAT/ETH' },
    label: 'HAT/ETH, Hawala.Today Ethereum'
  },
  {
    value: { id: '4247', name: 'Hawala.Today US Dollar', decimal: '5', symbol: 'HAT/USD' },
    label: 'HAT/USD, Hawala.Today US Dollar'
  },
  {
    value: { id: '4248', name: 'Havven US Dollar', decimal: '4', symbol: 'HAV/USD' },
    label: 'HAV/USD, Havven US Dollar'
  },
  {
    value: { id: '4249', name: 'HomeBlockCoin Bitcoin', decimal: '8', symbol: 'HBC/BTC' },
    label: 'HBC/BTC, HomeBlockCoin Bitcoin'
  },
  {
    value: { id: '4251', name: 'HomeBlockCoin US Dollar', decimal: '6', symbol: 'HBC/USD' },
    label: 'HBC/USD, HomeBlockCoin US Dollar'
  },
  {
    value: { id: '4252', name: 'HoboNickels Bitcoin', decimal: '8', symbol: 'HBN/BTC' },
    label: 'HBN/BTC, HoboNickels Bitcoin'
  },
  {
    value: { id: '4255', name: 'HoboNickels US Dollar', decimal: '6', symbol: 'HBN/USD' },
    label: 'HBN/USD, HoboNickels US Dollar'
  },
  {
    value: { id: '4257', name: 'Hubii Network US Dollar', decimal: '5', symbol: 'HBT/USD' },
    label: 'HBT/USD, Hubii Network US Dollar'
  },
  {
    value: { id: '4260', name: 'HBZ coin US Dollar', decimal: '6', symbol: 'HBZ/USD' },
    label: 'HBZ/USD, HBZ coin US Dollar'
  },
  {
    value: { id: '4261', name: 'Harvest Masternode Coin Bitcoin', decimal: '7', symbol: 'HC/BTC' },
    label: 'HC/BTC, Harvest Masternode Coin Bitcoin'
  },
  {
    value: {
      id: '4262',
      name: 'Harvest Masternode Coin US Dollar',
      decimal: '6',
      symbol: 'HC/USD'
    },
    label: 'HC/USD, Harvest Masternode Coin US Dollar'
  },
  {
    value: { id: '4263', name: 'HyperCash Bitcoin', decimal: '6', symbol: 'HCA/BTC' },
    label: 'HCA/BTC, HyperCash Bitcoin'
  },
  {
    value: { id: '4265', name: 'HyperCash US Dollar', decimal: '4', symbol: 'HCA/USD' },
    label: 'HCA/USD, HyperCash US Dollar'
  },
  {
    value: { id: '4266', name: 'Happy Creator Coin Bitcoin', decimal: '8', symbol: 'HCC/BTC' },
    label: 'HCC/BTC, Happy Creator Coin Bitcoin'
  },
  {
    value: { id: '4267', name: 'Happy Creator Coin US Dollar', decimal: '8', symbol: 'HCC/USD' },
    label: 'HCC/USD, Happy Creator Coin US Dollar'
  },
  {
    value: { id: '4268', name: 'Hedge Bitcoin', decimal: '6', symbol: 'HDG/BTC' },
    label: 'HDG/BTC, Hedge Bitcoin'
  },
  {
    value: { id: '4270', name: 'Hedge US Dollar', decimal: '5', symbol: 'HDG/USD' },
    label: 'HDG/USD, Hedge US Dollar'
  },
  {
    value: { id: '4271', name: 'HODL Bucks Bitcoin', decimal: '8', symbol: 'HDLB/BTC' },
    label: 'HDLB/BTC, HODL Bucks Bitcoin'
  },
  {
    value: { id: '4274', name: 'HODL Bucks US Dollar', decimal: '6', symbol: 'HDLB/USD' },
    label: 'HDLB/USD, HODL Bucks US Dollar'
  },
  {
    value: { id: '4279', name: 'HELPICO Bitcoin', decimal: '8', symbol: 'HELP/BTC' },
    label: 'HELP/BTC, HELPICO Bitcoin'
  },
  {
    value: { id: '4281', name: 'HELPICO Ethereum', decimal: '8', symbol: 'HELP/ETH' },
    label: 'HELP/ETH, HELPICO Ethereum'
  },
  {
    value: { id: '4283', name: 'HELPICO US Dollar', decimal: '2', symbol: 'HELP/USD' },
    label: 'HELP/USD, HELPICO US Dollar'
  },
  {
    value: { id: '4285', name: 'HeroNode US Dollar', decimal: '8', symbol: 'HER/USD' },
    label: 'HER/USD, HeroNode US Dollar'
  },
  {
    value: { id: '4288', name: 'HelloGold US Dollar', decimal: '6', symbol: 'HGT/USD' },
    label: 'HGT/USD, HelloGold US Dollar'
  },
  {
    value: { id: '4289', name: 'High Gain Bitcoin', decimal: '8', symbol: 'HIGH/BTC' },
    label: 'HIGH/BTC, High Gain Bitcoin'
  },
  {
    value: { id: '4290', name: 'High Gain US Dollar', decimal: '6', symbol: 'HIGH/USD' },
    label: 'HIGH/USD, High Gain US Dollar'
  },
  {
    value: { id: '4291', name: 'Hacken Bitcoin', decimal: '6', symbol: 'HKN/BTC' },
    label: 'HKN/BTC, Hacken Bitcoin'
  },
  {
    value: { id: '4292', name: 'Hacken US Dollar', decimal: '5', symbol: 'HKN/USD' },
    label: 'HKN/USD, Hacken US Dollar'
  },
  {
    value: { id: '4293', name: 'HarmonyCoin Bitcoin', decimal: '8', symbol: 'HMC/BTC' },
    label: 'HMC/BTC, HarmonyCoin Bitcoin'
  },
  {
    value: { id: '4296', name: 'HarmonyCoin US Dollar', decimal: '6', symbol: 'HMC/USD' },
    label: 'HMC/USD, HarmonyCoin US Dollar'
  },
  {
    value: { id: '4297', name: 'HempCoin Bitcoin', decimal: '8', symbol: 'HMP/BTC' },
    label: 'HMP/BTC, HempCoin Bitcoin'
  },
  {
    value: { id: '4298', name: 'HempCoin US Dollar', decimal: '8', symbol: 'HMP/USD' },
    label: 'HMP/USD, HempCoin US Dollar'
  },
  {
    value: { id: '4299', name: 'Humaniq Bitcoin', decimal: '8', symbol: 'HMQ/BTC' },
    label: 'HMQ/BTC, Humaniq Bitcoin'
  },
  {
    value: { id: '4301', name: 'Humaniq US Dollar', decimal: '6', symbol: 'HMQ/USD' },
    label: 'HMQ/USD, Humaniq US Dollar'
  },
  {
    value: { id: '4306', name: 'HOdlcoin US Dollar', decimal: '6', symbol: 'HODL/USD' },
    label: 'HODL/USD, HOdlcoin US Dollar'
  },
  {
    value: { id: '4307', name: 'Interstellar Holdings Bitcoin', decimal: '8', symbol: 'HOLD/BTC' },
    label: 'HOLD/BTC, Interstellar Holdings Bitcoin'
  },
  {
    value: {
      id: '4310',
      name: 'Interstellar Holdings US Dollar',
      decimal: '6',
      symbol: 'HOLD/USD'
    },
    label: 'HOLD/USD, Interstellar Holdings US Dollar'
  },
  {
    value: { id: '4311', name: 'Honey Bitcoin', decimal: '7', symbol: 'HONEY/BTC' },
    label: 'HONEY/BTC, Honey Bitcoin'
  },
  {
    value: { id: '4315', name: 'Honey US Dollar', decimal: '5', symbol: 'HONEY/USD' },
    label: 'HONEY/USD, Honey US Dollar'
  },
  {
    value: { id: '4316', name: 'Holo Binance Coin', decimal: '8', symbol: 'HOT/BNB' },
    label: 'HOT/BNB, Holo Binance Coin'
  },
  {
    value: { id: '4317', name: 'Holo Bitcoin', decimal: '8', symbol: 'HOT/BTC' },
    label: 'HOT/BTC, Holo Bitcoin'
  },
  {
    value: { id: '4318', name: 'Holo Ethereum', decimal: '8', symbol: 'HOT/ETH' },
    label: 'HOT/ETH, Holo Ethereum'
  },
  {
    value: { id: '4320', name: 'Holo Turkish Lira', decimal: '4', symbol: 'HOT/TRY' },
    label: 'HOT/TRY, Holo Turkish Lira'
  },
  {
    value: { id: '4321', name: 'Holo US Dollar', decimal: '5', symbol: 'HOT/USD' },
    label: 'HOT/USD, Holo US Dollar'
  },
  {
    value: { id: '4322', name: 'Hydro Protocol Bitcoin', decimal: '8', symbol: 'HOTL/BTC' },
    label: 'HOTL/BTC, Hydro Protocol Bitcoin'
  },
  {
    value: { id: '4323', name: 'Hydro Protocol Ethereum', decimal: '8', symbol: 'HOTL/ETH' },
    label: 'HOTL/ETH, Hydro Protocol Ethereum'
  },
  {
    value: { id: '4324', name: 'Hydro Protocol US Dollar', decimal: '7', symbol: 'HOTL/USD' },
    label: 'HOTL/USD, Hydro Protocol US Dollar'
  },
  {
    value: {
      id: '4325',
      name: 'High Performance Blockchain Bitcoin',
      decimal: '6',
      symbol: 'HPB/BTC'
    },
    label: 'HPB/BTC, High Performance Blockchain Bitcoin'
  },
  {
    value: {
      id: '4326',
      name: 'High Performance Blockchain Ethereum',
      decimal: '6',
      symbol: 'HPB/ETH'
    },
    label: 'HPB/ETH, High Performance Blockchain Ethereum'
  },
  {
    value: {
      id: '4327',
      name: 'High Performance Blockchain US Dollar',
      decimal: '4',
      symbol: 'HPB/USD'
    },
    label: 'HPB/USD, High Performance Blockchain US Dollar'
  },
  {
    value: { id: '4328', name: 'Happycoin Bitcoin', decimal: '8', symbol: 'HPC/BTC' },
    label: 'HPC/BTC, Happycoin Bitcoin'
  },
  {
    value: { id: '4329', name: 'Happycoin Ethereum', decimal: '7', symbol: 'HPC/ETH' },
    label: 'HPC/ETH, Happycoin Ethereum'
  },
  {
    value: { id: '4330', name: 'Happycoin US Dollar', decimal: '6', symbol: 'HPC/USD' },
    label: 'HPC/USD, Happycoin US Dollar'
  },
  {
    value: { id: '4340', name: 'Huobi Token Ethereum', decimal: '6', symbol: 'HT/ETH' },
    label: 'HT/ETH, Huobi Token Ethereum'
  },
  {
    value: { id: '4341', name: 'Huobi Token US Dollar', decimal: '4', symbol: 'HT/USD' },
    label: 'HT/USD, Huobi Token US Dollar'
  },
  {
    value: { id: '4342', name: 'HitCoin Bitcoin', decimal: '8', symbol: 'HTC/BTC' },
    label: 'HTC/BTC, HitCoin Bitcoin'
  },
  {
    value: { id: '4343', name: 'HitCoin US Dollar', decimal: '8', symbol: 'HTC/USD' },
    label: 'HTC/USD, HitCoin US Dollar'
  },
  {
    value: { id: '4349', name: 'HTMLCOIN US Dollar', decimal: '6', symbol: 'HTML/USD' },
    label: 'HTML/USD, HTMLCOIN US Dollar'
  },
  {
    value: { id: '4351', name: 'HTML5COIN Bitcoin', decimal: '8', symbol: 'HTML5/BTC' },
    label: 'HTML5/BTC, HTML5COIN Bitcoin'
  },
  {
    value: { id: '4352', name: 'HTML5COIN US Dollar', decimal: '7', symbol: 'HTML5/USD' },
    label: 'HTML5/USD, HTML5COIN US Dollar'
  },
  {
    value: { id: '4353', name: 'HunterCoin Bitcoin', decimal: '8', symbol: 'HUC/BTC' },
    label: 'HUC/BTC, HunterCoin Bitcoin'
  },
  {
    value: { id: '4354', name: 'HunterCoin US Dollar', decimal: '6', symbol: 'HUC/USD' },
    label: 'HUC/USD, HunterCoin US Dollar'
  },
  {
    value: { id: '4355', name: 'Huncoin Bitcoin', decimal: '8', symbol: 'HUNC/BTC' },
    label: 'HUNC/BTC, Huncoin Bitcoin'
  },
  {
    value: { id: '4356', name: 'Huncoin US Dollar', decimal: '8', symbol: 'HUNC/USD' },
    label: 'HUNC/USD, Huncoin US Dollar'
  },
  {
    value: { id: '4361', name: 'High Voltage Bitcoin', decimal: '8', symbol: 'HVCO/BTC' },
    label: 'HVCO/BTC, High Voltage Bitcoin'
  },
  {
    value: { id: '4362', name: 'High Voltage US Dollar', decimal: '6', symbol: 'HVCO/USD' },
    label: 'HVCO/USD, High Voltage US Dollar'
  },
  {
    value: { id: '4363', name: 'Hiveterminal Token Bitcoin', decimal: '8', symbol: 'HVN/BTC' },
    label: 'HVN/BTC, Hiveterminal Token Bitcoin'
  },
  {
    value: { id: '4364', name: 'Hiveterminal Token Ethereum', decimal: '7', symbol: 'HVN/ETH' },
    label: 'HVN/ETH, Hiveterminal Token Ethereum'
  },
  {
    value: { id: '4365', name: 'Hiveterminal Token US Dollar', decimal: '6', symbol: 'HVN/USD' },
    label: 'HVN/USD, Hiveterminal Token US Dollar'
  },
  {
    value: { id: '4367', name: 'HollyWoodCoin US Dollar', decimal: '5', symbol: 'HWC/USD' },
    label: 'HWC/USD, HollyWoodCoin US Dollar'
  },
  {
    value: { id: '4371', name: 'Hexx US Dollar', decimal: '4', symbol: 'HXX/USD' },
    label: 'HXX/USD, Hexx US Dollar'
  },
  {
    value: { id: '4372', name: 'Hydro Bitcoin', decimal: '8', symbol: 'HYDRO/BTC' },
    label: 'HYDRO/BTC, Hydro Bitcoin'
  },
  {
    value: { id: '4373', name: 'Hydro Ethereum', decimal: '8', symbol: 'HYDRO/ETH' },
    label: 'HYDRO/ETH, Hydro Ethereum'
  },
  {
    value: { id: '4374', name: 'Hydro US Dollar', decimal: '6', symbol: 'HYDRO/USD' },
    label: 'HYDRO/USD, Hydro US Dollar'
  },
  {
    value: { id: '4378', name: 'HyperStake US Dollar', decimal: '6', symbol: 'HYP/USD' },
    label: 'HYP/USD, HyperStake US Dollar'
  },
  {
    value: { id: '4379', name: 'Hyper Bitcoin', decimal: '8', symbol: 'HYPER/BTC' },
    label: 'HYPER/BTC, Hyper Bitcoin'
  },
  {
    value: { id: '4380', name: 'Hyper US Dollar', decimal: '6', symbol: 'HYPER/USD' },
    label: 'HYPER/USD, Hyper US Dollar'
  },
  {
    value: { id: '4381', name: 'Hyper TV Ethereum', decimal: '8', symbol: 'HYTV/ETH' },
    label: 'HYTV/ETH, Hyper TV Ethereum'
  },
  {
    value: { id: '4382', name: 'Hyper TV US Dollar', decimal: '6', symbol: 'HYTV/USD' },
    label: 'HYTV/USD, Hyper TV US Dollar'
  },
  {
    value: { id: '4383', name: 'I0Coin Bitcoin', decimal: '8', symbol: 'I0C/BTC' },
    label: 'I0C/BTC, I0Coin Bitcoin'
  },
  {
    value: { id: '4386', name: 'I0Coin US Dollar', decimal: '5', symbol: 'I0C/USD' },
    label: 'I0C/USD, I0Coin US Dollar'
  },
  {
    value: { id: '4387', name: 'iBank Bitcoin', decimal: '8', symbol: 'IBANK/BTC' },
    label: 'IBANK/BTC, iBank Bitcoin'
  },
  {
    value: { id: '4388', name: 'iBank US Dollar', decimal: '6', symbol: 'IBANK/USD' },
    label: 'IBANK/USD, iBank US Dollar'
  },
  {
    value: { id: '4390', name: 'iBTC US Dollar', decimal: '6', symbol: 'IBTC/USD' },
    label: 'IBTC/USD, iBTC US Dollar'
  },
  {
    value: { id: '4391', name: 'iDice Bitcoin', decimal: '8', symbol: 'ICE/BTC' },
    label: 'ICE/BTC, iDice Bitcoin'
  },
  {
    value: { id: '4392', name: 'iDice US Dollar', decimal: '6', symbol: 'ICE/USD' },
    label: 'ICE/USD, iDice US Dollar'
  },
  {
    value: { id: '4395', name: 'Iconomi US Dollar', decimal: '5', symbol: 'ICN/USD' },
    label: 'ICN/USD, Iconomi US Dollar'
  },
  {
    value: { id: '4400', name: 'ICOBID US Dollar', decimal: '6', symbol: 'ICOB/USD' },
    label: 'ICOB/USD, ICOBID US Dollar'
  },
  {
    value: { id: '4401', name: 'Iconic Bitcoin', decimal: '8', symbol: 'ICON/BTC' },
    label: 'ICON/BTC, Iconic Bitcoin'
  },
  {
    value: { id: '4402', name: 'Iconic US Dollar', decimal: '6', symbol: 'ICON/USD' },
    label: 'ICON/USD, Iconic US Dollar'
  },
  {
    value: { id: '4403', name: 'ICOS Bitcoin', decimal: '8', symbol: 'ICOS/BTC' },
    label: 'ICOS/BTC, ICOS Bitcoin'
  },
  {
    value: { id: '4407', name: 'ICON Australian Dollar', decimal: '4', symbol: 'ICX/AUD' },
    label: 'ICX/AUD, ICON Australian Dollar'
  },
  {
    value: { id: '4408', name: 'ICON Binance Coin', decimal: '5', symbol: 'ICX/BNB' },
    label: 'ICX/BNB, ICON Binance Coin'
  },
  {
    value: { id: '4409', name: 'ICON Bitcoin', decimal: '6', symbol: 'ICX/BTC' },
    label: 'ICX/BTC, ICON Bitcoin'
  },
  {
    value: { id: '4410', name: 'ICON Canadian Dollar', decimal: '4', symbol: 'ICX/CAD' },
    label: 'ICX/CAD, ICON Canadian Dollar'
  },
  {
    value: { id: '4411', name: 'ICON Chinese Yuan', decimal: '4', symbol: 'ICX/CNY' },
    label: 'ICX/CNY, ICON Chinese Yuan'
  },
  {
    value: { id: '4412', name: 'ICON Ethereum', decimal: '6', symbol: 'ICX/ETH' },
    label: 'ICX/ETH, ICON Ethereum'
  },
  {
    value: { id: '4413', name: 'ICON Euro', decimal: '5', symbol: 'ICX/EUR' },
    label: 'ICX/EUR, ICON Euro'
  },
  {
    value: { id: '4414', name: 'ICON Hong Kong Dollar', decimal: '4', symbol: 'ICX/HKD' },
    label: 'ICX/HKD, ICON Hong Kong Dollar'
  },
  {
    value: { id: '4415', name: 'ICON Israeli Shekel', decimal: '4', symbol: 'ICX/ILS' },
    label: 'ICX/ILS, ICON Israeli Shekel'
  },
  {
    value: { id: '4416', name: 'ICON Indian Rupee', decimal: '2', symbol: 'ICX/INR' },
    label: 'ICX/INR, ICON Indian Rupee'
  },
  {
    value: { id: '4417', name: 'ICON Korean Won', decimal: '2', symbol: 'ICX/KRW' },
    label: 'ICX/KRW, ICON Korean Won'
  },
  {
    value: { id: '4419', name: 'ICON Mexican Peso', decimal: '3', symbol: 'ICX/MXN' },
    label: 'ICX/MXN, ICON Mexican Peso'
  },
  {
    value: { id: '4420', name: 'ICON Malaysian Ringgit', decimal: '4', symbol: 'ICX/MYR' },
    label: 'ICX/MYR, ICON Malaysian Ringgit'
  },
  {
    value: { id: '4421', name: 'ICON Polish Zloty', decimal: '4', symbol: 'ICX/PLN' },
    label: 'ICX/PLN, ICON Polish Zloty'
  },
  {
    value: { id: '4422', name: 'ICON Russian Ruble', decimal: '2', symbol: 'ICX/RUB' },
    label: 'ICX/RUB, ICON Russian Ruble'
  },
  {
    value: { id: '4423', name: 'ICON Saudi Riyal', decimal: '4', symbol: 'ICX/SAR' },
    label: 'ICX/SAR, ICON Saudi Riyal'
  },
  {
    value: { id: '4424', name: 'ICON Swedish Krona', decimal: '4', symbol: 'ICX/SEK' },
    label: 'ICX/SEK, ICON Swedish Krona'
  },
  {
    value: { id: '4425', name: 'ICON Turkish Lira', decimal: '4', symbol: 'ICX/TRY' },
    label: 'ICX/TRY, ICON Turkish Lira'
  },
  {
    value: { id: '4426', name: 'ICON US Dollar', decimal: '4', symbol: 'ICX/USD' },
    label: 'ICX/USD, ICON US Dollar'
  },
  {
    value: { id: '4427', name: 'ICON Vietnamese Dong', decimal: '0', symbol: 'ICX/VND' },
    label: 'ICX/VND, ICON Vietnamese Dong'
  },
  {
    value: { id: '4428', name: 'ICON South African Rand', decimal: '3', symbol: 'ICX/ZAR' },
    label: 'ICX/ZAR, ICON South African Rand'
  },
  {
    value: { id: '4429', name: 'iEthereum Bitcoin', decimal: '8', symbol: 'IETH/BTC' },
    label: 'IETH/BTC, iEthereum Bitcoin'
  },
  {
    value: { id: '4431', name: 'iEthereum US Dollar', decimal: '6', symbol: 'IETH/USD' },
    label: 'IETH/USD, iEthereum US Dollar'
  },
  {
    value: { id: '4432', name: 'Infinitecoin Bitcoin', decimal: '8', symbol: 'IFC/BTC' },
    label: 'IFC/BTC, Infinitecoin Bitcoin'
  },
  {
    value: { id: '4433', name: 'Infinitecoin US Dollar', decimal: '7', symbol: 'IFC/USD' },
    label: 'IFC/USD, Infinitecoin US Dollar'
  },
  {
    value: { id: '4434', name: 'InflationCoin Bitcoin', decimal: '8', symbol: 'IFLT/BTC' },
    label: 'IFLT/BTC, InflationCoin Bitcoin'
  },
  {
    value: { id: '4437', name: 'InflationCoin US Dollar', decimal: '8', symbol: 'IFLT/USD' },
    label: 'IFLT/USD, InflationCoin US Dollar'
  },
  {
    value: { id: '4442', name: 'InvestFeed US Dollar', decimal: '6', symbol: 'IFT/USD' },
    label: 'IFT/USD, InvestFeed US Dollar'
  },
  {
    value: { id: '4443', name: 'Ignis Bitcoin', decimal: '8', symbol: 'IGNIS/BTC' },
    label: 'IGNIS/BTC, Ignis Bitcoin'
  },
  {
    value: { id: '4444', name: 'Ignis Ethereum', decimal: '8', symbol: 'IGNIS/ETH' },
    label: 'IGNIS/ETH, Ignis Ethereum'
  },
  {
    value: { id: '4445', name: 'Ignis Indonesian Rupiah', decimal: '0', symbol: 'IGNIS/IDR' },
    label: 'IGNIS/IDR, Ignis Indonesian Rupiah'
  },
  {
    value: { id: '4446', name: 'Ignis Korean Won', decimal: '2', symbol: 'IGNIS/KRW' },
    label: 'IGNIS/KRW, Ignis Korean Won'
  },
  {
    value: { id: '4447', name: 'Ignis US Dollar', decimal: '6', symbol: 'IGNIS/USD' },
    label: 'IGNIS/USD, Ignis US Dollar'
  },
  {
    value: {
      id: '4448',
      name: 'IHT Real Estate Protocol US Dollar',
      decimal: '4',
      symbol: 'IHT/USD'
    },
    label: 'IHT/USD, IHT Real Estate Protocol US Dollar'
  },
  {
    value: { id: '4449', name: 'ImpulseCoin Bitcoin', decimal: '8', symbol: 'IMPS/BTC' },
    label: 'IMPS/BTC, ImpulseCoin Bitcoin'
  },
  {
    value: { id: '4450', name: 'ImpulseCoin US Dollar', decimal: '6', symbol: 'IMPS/USD' },
    label: 'IMPS/USD, ImpulseCoin US Dollar'
  },
  {
    value: {
      id: '4454',
      name: 'Independent Money System US Dollar',
      decimal: '6',
      symbol: 'IMS/USD'
    },
    label: 'IMS/USD, Independent Money System US Dollar'
  },
  {
    value: { id: '4455', name: 'Impact Bitcoin', decimal: '8', symbol: 'IMX/BTC' },
    label: 'IMX/BTC, Impact Bitcoin'
  },
  {
    value: { id: '4456', name: 'Impact US Dollar', decimal: '6', symbol: 'IMX/USD' },
    label: 'IMX/USD, Impact US Dollar'
  },
  {
    value: { id: '4457', name: 'Insight Chain US Dollar', decimal: '4', symbol: 'INB/USD' },
    label: 'INB/USD, Insight Chain US Dollar'
  },
  {
    value: { id: '4458', name: 'Incent Bitcoin', decimal: '8', symbol: 'INCNT/BTC' },
    label: 'INCNT/BTC, Incent Bitcoin'
  },
  {
    value: { id: '4459', name: 'Incent US Dollar', decimal: '5', symbol: 'INCNT/USD' },
    label: 'INCNT/USD, Incent US Dollar'
  },
  {
    value: { id: '4461', name: 'Indorse Token Bitcoin', decimal: '8', symbol: 'IND/BTC' },
    label: 'IND/BTC, Indorse Token Bitcoin'
  },
  {
    value: { id: '4466', name: 'InfChain Bitcoin', decimal: '8', symbol: 'INF/BTC' },
    label: 'INF/BTC, InfChain Bitcoin'
  },
  {
    value: { id: '4467', name: 'InfChain US Dollar', decimal: '6', symbol: 'INF/USD' },
    label: 'INF/USD, InfChain US Dollar'
  },
  {
    value: { id: '4471', name: 'Influxcoin US Dollar', decimal: '5', symbol: 'INFX/USD' },
    label: 'INFX/USD, Influxcoin US Dollar'
  },
  {
    value: { id: '4472', name: 'Ink Bitcoin', decimal: '8', symbol: 'INK/BTC' },
    label: 'INK/BTC, Ink Bitcoin'
  },
  {
    value: { id: '4473', name: 'Ink Ethereum', decimal: '6', symbol: 'INK/ETH' },
    label: 'INK/ETH, Ink Ethereum'
  },
  {
    value: { id: '4475', name: 'Ink Qtum', decimal: '2', symbol: 'INK/QTUM' },
    label: 'INK/QTUM, Ink Qtum'
  },
  {
    value: { id: '4476', name: 'Ink US Dollar', decimal: '6', symbol: 'INK/USD' },
    label: 'INK/USD, Ink US Dollar'
  },
  {
    value: { id: '4480', name: 'Innova US Dollar', decimal: '5', symbol: 'INN/USD' },
    label: 'INN/USD, Innova US Dollar'
  },
  {
    value: { id: '4481', name: 'Insolar Bitcoin', decimal: '6', symbol: 'INS/BTC' },
    label: 'INS/BTC, Insolar Bitcoin'
  },
  {
    value: { id: '4483', name: 'Insolar US Dollar', decimal: '5', symbol: 'INS/USD' },
    label: 'INS/USD, Insolar US Dollar'
  },
  {
    value: { id: '4487', name: 'InsaneCoin US Dollar', decimal: '6', symbol: 'INSN/USD' },
    label: 'INSN/USD, InsaneCoin US Dollar'
  },
  {
    value: { id: '4488', name: 'Internet Node Token Bitcoin', decimal: '8', symbol: 'INT/BTC' },
    label: 'INT/BTC, Internet Node Token Bitcoin'
  },
  {
    value: { id: '4489', name: 'Internet Node Token Ethereum', decimal: '6', symbol: 'INT/ETH' },
    label: 'INT/ETH, Internet Node Token Ethereum'
  },
  {
    value: { id: '4490', name: 'Internet Node Token US Dollar', decimal: '5', symbol: 'INT/USD' },
    label: 'INT/USD, Internet Node Token US Dollar'
  },
  {
    value: { id: '4491', name: 'Investcoin Ethereum', decimal: '8', symbol: 'INVC/ETH' },
    label: 'INVC/ETH, Investcoin Ethereum'
  },
  {
    value: { id: '4492', name: 'Investcoin US Dollar', decimal: '6', symbol: 'INVC/USD' },
    label: 'INVC/USD, Investcoin US Dollar'
  },
  {
    value: { id: '4495', name: 'Internxt US Dollar', decimal: '4', symbol: 'INXT/USD' },
    label: 'INXT/USD, Internxt US Dollar'
  },
  {
    value: { id: '4496', name: 'I/O Coin Bitcoin', decimal: '7', symbol: 'IOC/BTC' },
    label: 'IOC/BTC, I/O Coin Bitcoin'
  },
  {
    value: { id: '4497', name: 'I/O Coin US Dollar', decimal: '5', symbol: 'IOC/USD' },
    label: 'IOC/USD, I/O Coin US Dollar'
  },
  {
    value: { id: '4498', name: 'ION Bitcoin', decimal: '6', symbol: 'ION/BTC' },
    label: 'ION/BTC, ION Bitcoin'
  },
  {
    value: { id: '4499', name: 'ION US Dollar', decimal: '5', symbol: 'ION/USD' },
    label: 'ION/USD, ION US Dollar'
  },
  {
    value: { id: '4501', name: 'Internet of People US Dollar', decimal: '5', symbol: 'IOP/USD' },
    label: 'IOP/USD, Internet of People US Dollar'
  },
  {
    value: { id: '4502', name: 'IOStoken Bitcoin', decimal: '8', symbol: 'IOST/BTC' },
    label: 'IOST/BTC, IOStoken Bitcoin'
  },
  {
    value: { id: '4503', name: 'IOStoken Ethereum', decimal: '8', symbol: 'IOST/ETH' },
    label: 'IOST/ETH, IOStoken Ethereum'
  },
  {
    value: { id: '4504', name: 'IOStoken US Dollar', decimal: '6', symbol: 'IOST/USD' },
    label: 'IOST/USD, IOStoken US Dollar'
  },
  {
    value: { id: '4505', name: 'IOTA British Pound', decimal: '5', symbol: 'IOT/GBP' },
    label: 'IOT/GBP, IOTA British Pound'
  },
  {
    value: { id: '4506', name: 'IOTA Australian Dollar', decimal: '5', symbol: 'IOTA/AUD' },
    label: 'IOTA/AUD, IOTA Australian Dollar'
  },
  {
    value: { id: '4507', name: 'IOTA Binance Coin', decimal: '5', symbol: 'IOTA/BNB' },
    label: 'IOTA/BNB, IOTA Binance Coin'
  },
  {
    value: { id: '4508', name: 'IOTA Bitcoin', decimal: '6', symbol: 'IOTA/BTC' },
    label: 'IOTA/BTC, IOTA Bitcoin'
  },
  {
    value: { id: '4509', name: 'IOTA Canadian Dollar', decimal: '5', symbol: 'IOTA/CAD' },
    label: 'IOTA/CAD, IOTA Canadian Dollar'
  },
  {
    value: { id: '4510', name: 'IOTA Chinese Yuan', decimal: '4', symbol: 'IOTA/CNY' },
    label: 'IOTA/CNY, IOTA Chinese Yuan'
  },
  {
    value: { id: '4511', name: 'IOTA Ethereum', decimal: '6', symbol: 'IOTA/ETH' },
    label: 'IOTA/ETH, IOTA Ethereum'
  },
  {
    value: { id: '4512', name: 'IOTA Euro', decimal: '5', symbol: 'IOTA/EUR' },
    label: 'IOTA/EUR, IOTA Euro'
  },
  {
    value: { id: '4513', name: 'IOTA Hong Kong Dollar', decimal: '4', symbol: 'IOTA/HKD' },
    label: 'IOTA/HKD, IOTA Hong Kong Dollar'
  },
  {
    value: { id: '4514', name: 'IOTA Israeli Shekel', decimal: '4', symbol: 'IOTA/ILS' },
    label: 'IOTA/ILS, IOTA Israeli Shekel'
  },
  {
    value: { id: '4515', name: 'IOTA Indian Rupee', decimal: '3', symbol: 'IOTA/INR' },
    label: 'IOTA/INR, IOTA Indian Rupee'
  },
  {
    value: { id: '4516', name: 'IOTA Korean Won', decimal: '2', symbol: 'IOTA/KRW' },
    label: 'IOTA/KRW, IOTA Korean Won'
  },
  {
    value: { id: '4517', name: 'IOTA Mexican Peso', decimal: '3', symbol: 'IOTA/MXN' },
    label: 'IOTA/MXN, IOTA Mexican Peso'
  },
  {
    value: { id: '4518', name: 'IOTA Malaysian Ringgit', decimal: '4', symbol: 'IOTA/MYR' },
    label: 'IOTA/MYR, IOTA Malaysian Ringgit'
  },
  {
    value: { id: '4519', name: 'IOTA Polish Zloty', decimal: '4', symbol: 'IOTA/PLN' },
    label: 'IOTA/PLN, IOTA Polish Zloty'
  },
  {
    value: { id: '4520', name: 'IOTA Russian Ruble', decimal: '3', symbol: 'IOTA/RUB' },
    label: 'IOTA/RUB, IOTA Russian Ruble'
  },
  {
    value: { id: '4521', name: 'IOTA Saudi Riyal', decimal: '4', symbol: 'IOTA/SAR' },
    label: 'IOTA/SAR, IOTA Saudi Riyal'
  },
  {
    value: { id: '4522', name: 'IOTA Swedish Krona', decimal: '4', symbol: 'IOTA/SEK' },
    label: 'IOTA/SEK, IOTA Swedish Krona'
  },
  {
    value: { id: '4523', name: 'IOTA Turkish Lira', decimal: '4', symbol: 'IOTA/TRY' },
    label: 'IOTA/TRY, IOTA Turkish Lira'
  },
  {
    value: { id: '4524', name: 'IOTA Vietnamese Dong', decimal: '2', symbol: 'IOTA/VND' },
    label: 'IOTA/VND, IOTA Vietnamese Dong'
  },
  {
    value: { id: '4525', name: 'IOTA South African Rand', decimal: '4', symbol: 'IOTA/ZAR' },
    label: 'IOTA/ZAR, IOTA South African Rand'
  },
  {
    value: { id: '4526', name: 'IoTeX Bitcoin', decimal: '8', symbol: 'IOTX/BTC' },
    label: 'IOTX/BTC, IoTeX Bitcoin'
  },
  {
    value: { id: '4527', name: 'IoTeX Ethereum', decimal: '7', symbol: 'IOTX/ETH' },
    label: 'IOTX/ETH, IoTeX Ethereum'
  },
  {
    value: { id: '4528', name: 'IoTeX US Dollar', decimal: '6', symbol: 'IOTX/USD' },
    label: 'IOTX/USD, IoTeX US Dollar'
  },
  {
    value: { id: '4536', name: 'imbrex US Dollar', decimal: '4', symbol: 'IREX/USD' },
    label: 'IREX/USD, imbrex US Dollar'
  },
  {
    value: { id: '4540', name: 'IrishCoin US Dollar', decimal: '6', symbol: 'IRL/USD' },
    label: 'IRL/USD, IrishCoin US Dollar'
  },
  {
    value: { id: '4541', name: 'IslaCoin Bitcoin', decimal: '8', symbol: 'ISL/BTC' },
    label: 'ISL/BTC, IslaCoin Bitcoin'
  },
  {
    value: { id: '4542', name: 'IslaCoin US Dollar', decimal: '5', symbol: 'ISL/USD' },
    label: 'ISL/USD, IslaCoin US Dollar'
  },
  {
    value: { id: '4543', name: 'IoT Chain Bitcoin', decimal: '7', symbol: 'ITC/BTC' },
    label: 'ITC/BTC, IoT Chain Bitcoin'
  },
  {
    value: { id: '4544', name: 'IoT Chain Ethereum', decimal: '6', symbol: 'ITC/ETH' },
    label: 'ITC/ETH, IoT Chain Ethereum'
  },
  {
    value: { id: '4545', name: 'IoT Chain US Dollar', decimal: '5', symbol: 'ITC/USD' },
    label: 'ITC/USD, IoT Chain US Dollar'
  },
  {
    value: { id: '4549', name: 'iTicoin US Dollar', decimal: '4', symbol: 'ITI/USD' },
    label: 'ITI/USD, iTicoin US Dollar'
  },
  {
    value: { id: '4553', name: 'Ivy US Dollar', decimal: '8', symbol: 'IVY/USD' },
    label: 'IVY/USD, Ivy US Dollar'
  },
  {
    value: { id: '4554', name: 'InvisibleCoin Bitcoin', decimal: '8', symbol: 'IVZ/BTC' },
    label: 'IVZ/BTC, InvisibleCoin Bitcoin'
  },
  {
    value: { id: '4555', name: 'InvisibleCoin US Dollar', decimal: '5', symbol: 'IVZ/USD' },
    label: 'IVZ/USD, InvisibleCoin US Dollar'
  },
  {
    value: { id: '4559', name: 'Ixcoin US Dollar', decimal: '5', symbol: 'IXC/USD' },
    label: 'IXC/USD, Ixcoin US Dollar'
  },
  {
    value: { id: '4562', name: 'iXledger US Dollar', decimal: '5', symbol: 'IXT/USD' },
    label: 'IXT/USD, iXledger US Dollar'
  },
  {
    value: { id: '4565', name: 'JET8 US Dollar', decimal: '6', symbol: 'J8T/USD' },
    label: 'J8T/USD, JET8 US Dollar'
  },
  {
    value: { id: '4568', name: 'Jetcoin US Dollar', decimal: '6', symbol: 'JET/USD' },
    label: 'JET/USD, Jetcoin US Dollar'
  },
  {
    value: { id: '4569', name: 'Jin Coin Bitcoin', decimal: '8', symbol: 'JIN/BTC' },
    label: 'JIN/BTC, Jin Coin Bitcoin'
  },
  {
    value: { id: '4570', name: 'Jin Coin US Dollar', decimal: '6', symbol: 'JIN/USD' },
    label: 'JIN/USD, Jin Coin US Dollar'
  },
  {
    value: { id: '4573', name: 'Jibrel Network US Dollar', decimal: '5', symbol: 'JNT/USD' },
    label: 'JNT/USD, Jibrel Network US Dollar'
  },
  {
    value: { id: '4575', name: 'JobsCoin US Dollar', decimal: '6', symbol: 'JOBS/USD' },
    label: 'JOBS/USD, JobsCoin US Dollar'
  },
  {
    value: { id: '4577', name: 'JavaScript Token US Dollar', decimal: '6', symbol: 'JS/USD' },
    label: 'JS/USD, JavaScript Token US Dollar'
  },
  {
    value: { id: '4578', name: 'JSECOIN Ethereum', decimal: '8', symbol: 'JSE/ETH' },
    label: 'JSE/ETH, JSECOIN Ethereum'
  },
  {
    value: { id: '4579', name: 'JSECOIN US Dollar', decimal: '4', symbol: 'JSE/USD' },
    label: 'JSE/USD, JSECOIN US Dollar'
  },
  {
    value: { id: '4580', name: 'Jewels Bitcoin', decimal: '8', symbol: 'JWL/BTC' },
    label: 'JWL/BTC, Jewels Bitcoin'
  },
  {
    value: { id: '4581', name: 'Jewels US Dollar', decimal: '6', symbol: 'JWL/USD' },
    label: 'JWL/USD, Jewels US Dollar'
  },
  {
    value: { id: '4582', name: 'Karmacoin Bitcoin', decimal: '8', symbol: 'KARMA/BTC' },
    label: 'KARMA/BTC, Karmacoin Bitcoin'
  },
  {
    value: { id: '4583', name: 'Karmacoin US Dollar', decimal: '8', symbol: 'KARMA/USD' },
    label: 'KARMA/USD, Karmacoin US Dollar'
  },
  {
    value: { id: '4584', name: 'KashhCoin Bitcoin', decimal: '8', symbol: 'KASHH/BTC' },
    label: 'KASHH/BTC, KashhCoin Bitcoin'
  },
  {
    value: { id: '4585', name: 'KashhCoin US Dollar', decimal: '8', symbol: 'KASHH/USD' },
    label: 'KASHH/USD, KashhCoin US Dollar'
  },
  {
    value: { id: '4586', name: 'Kayicoin Bitcoin', decimal: '8', symbol: 'KAYI/BTC' },
    label: 'KAYI/BTC, Kayicoin Bitcoin'
  },
  {
    value: { id: '4590', name: 'Kayicoin US Dollar', decimal: '6', symbol: 'KAYI/USD' },
    label: 'KAYI/USD, Kayicoin US Dollar'
  },
  {
    value: { id: '4591', name: 'B3Coin Bitcoin', decimal: '8', symbol: 'KB3/BTC' },
    label: 'KB3/BTC, B3Coin Bitcoin'
  },
  {
    value: { id: '4592', name: 'B3Coin US Dollar', decimal: '8', symbol: 'KB3/USD' },
    label: 'KB3/USD, B3Coin US Dollar'
  },
  {
    value: { id: '4595', name: 'Karatgold Coin US Dollar', decimal: '4', symbol: 'KBC/USD' },
    label: 'KBC/USD, Karatgold Coin US Dollar'
  },
  {
    value: { id: '4596', name: 'Kubera Coin Bitcoin', decimal: '8', symbol: 'KBR/BTC' },
    label: 'KBR/BTC, Kubera Coin Bitcoin'
  },
  {
    value: { id: '4599', name: 'Kubera Coin US Dollar', decimal: '6', symbol: 'KBR/USD' },
    label: 'KBR/USD, Kubera Coin US Dollar'
  },
  {
    value: { id: '4600', name: 'KuCoin Shares Bitcoin', decimal: '6', symbol: 'KCS/BTC' },
    label: 'KCS/BTC, KuCoin Shares Bitcoin'
  },
  {
    value: { id: '4601', name: 'KuCoin Shares Ethereum', decimal: '6', symbol: 'KCS/ETH' },
    label: 'KCS/ETH, KuCoin Shares Ethereum'
  },
  {
    value: { id: '4602', name: 'KuCoin Shares US Dollar', decimal: '4', symbol: 'KCS/USD' },
    label: 'KCS/USD, KuCoin Shares US Dollar'
  },
  {
    value: { id: '4603', name: 'Darsek Bitcoin', decimal: '8', symbol: 'KED/BTC' },
    label: 'KED/BTC, Darsek Bitcoin'
  },
  {
    value: { id: '4606', name: 'Darsek US Dollar', decimal: '6', symbol: 'KED/USD' },
    label: 'KED/USD, Darsek US Dollar'
  },
  {
    value: { id: '4610', name: 'KekCoin US Dollar', decimal: '6', symbol: 'KEK/USD' },
    label: 'KEK/USD, KekCoin US Dollar'
  },
  {
    value: { id: '4612', name: 'Selfkey Ethereum', decimal: '8', symbol: 'KEY/ETH' },
    label: 'KEY/ETH, Selfkey Ethereum'
  },
  {
    value: { id: '4620', name: 'Kin Litecoin', decimal: '8', symbol: 'KIN/LTC' },
    label: 'KIN/LTC, Kin Litecoin'
  },
  {
    value: { id: '4621', name: 'Kin US Dollar', decimal: '6', symbol: 'KIN/USD' },
    label: 'KIN/USD, Kin US Dollar'
  },
  {
    value: { id: '4622', name: 'KiloCoin Bitcoin', decimal: '8', symbol: 'KLC/BTC' },
    label: 'KLC/BTC, KiloCoin Bitcoin'
  },
  {
    value: { id: '4623', name: 'KiloCoin US Dollar', decimal: '6', symbol: 'KLC/USD' },
    label: 'KLC/USD, KiloCoin US Dollar'
  },
  {
    value: { id: '4624', name: 'Komodo Bitcoin', decimal: '6', symbol: 'KMD/BTC' },
    label: 'KMD/BTC, Komodo Bitcoin'
  },
  {
    value: { id: '4626', name: 'Komodo Ethereum', decimal: '6', symbol: 'KMD/ETH' },
    label: 'KMD/ETH, Komodo Ethereum'
  },
  {
    value: { id: '4627', name: 'Komodo Korean Won', decimal: '2', symbol: 'KMD/KRW' },
    label: 'KMD/KRW, Komodo Korean Won'
  },
  {
    value: { id: '4629', name: 'Komodo US Dollar', decimal: '5', symbol: 'KMD/USD' },
    label: 'KMD/USD, Komodo US Dollar'
  },
  {
    value: { id: '4630', name: 'Kyber Network Bitcoin', decimal: '6', symbol: 'KNC/BTC' },
    label: 'KNC/BTC, Kyber Network Bitcoin'
  },
  {
    value: { id: '4632', name: 'Kyber Network Ethereum', decimal: '6', symbol: 'KNC/ETH' },
    label: 'KNC/ETH, Kyber Network Ethereum'
  },
  {
    value: { id: '4633', name: 'Kyber Network Korean Won', decimal: '0', symbol: 'KNC/KRW' },
    label: 'KNC/KRW, Kyber Network Korean Won'
  },
  {
    value: { id: '4635', name: 'Kyber Network Thai Baht', decimal: '2', symbol: 'KNC/THB' },
    label: 'KNC/THB, Kyber Network Thai Baht'
  },
  {
    value: { id: '4636', name: 'Kyber Network US Dollar', decimal: '5', symbol: 'KNC/USD' },
    label: 'KNC/USD, Kyber Network US Dollar'
  },
  {
    value: { id: '4638', name: 'Kyber Network XRP', decimal: '3', symbol: 'KNC/XRP' },
    label: 'KNC/XRP, Kyber Network XRP'
  },
  {
    value: { id: '4642', name: 'Kobocoin US Dollar', decimal: '6', symbol: 'KOBO/USD' },
    label: 'KOBO/USD, Kobocoin US Dollar'
  },
  {
    value: { id: '4644', name: 'Kore US Dollar', decimal: '5', symbol: 'KORE/USD' },
    label: 'KORE/USD, Kore US Dollar'
  },
  {
    value: { id: '4648', name: 'Karbo US Dollar', decimal: '5', symbol: 'KRB/USD' },
    label: 'KRB/USD, Karbo US Dollar'
  },
  {
    value: { id: '4649', name: 'Kronecoin Bitcoin', decimal: '8', symbol: 'KRONE/BTC' },
    label: 'KRONE/BTC, Kronecoin Bitcoin'
  },
  {
    value: { id: '4652', name: 'Kronecoin US Dollar', decimal: '6', symbol: 'KRONE/USD' },
    label: 'KRONE/USD, Kronecoin US Dollar'
  },
  {
    value: { id: '4656', name: 'Kurrent US Dollar', decimal: '6', symbol: 'KURT/USD' },
    label: 'KURT/USD, Kurrent US Dollar'
  },
  {
    value: { id: '4660', name: 'KushCoin US Dollar', decimal: '6', symbol: 'KUSH/USD' },
    label: 'KUSH/USD, KushCoin US Dollar'
  },
  {
    value: { id: '4661', name: 'Almeela Ethereum', decimal: '8', symbol: 'KZE/ETH' },
    label: 'KZE/ETH, Almeela Ethereum'
  },
  {
    value: { id: '4662', name: 'Almeela US Dollar', decimal: '4', symbol: 'KZE/USD' },
    label: 'KZE/USD, Almeela US Dollar'
  },
  {
    value: { id: '4664', name: 'LATOKEN Ethereum', decimal: '6', symbol: 'LA/ETH' },
    label: 'LA/ETH, LATOKEN Ethereum'
  },
  {
    value: { id: '4665', name: 'LATOKEN US Dollar', decimal: '5', symbol: 'LA/USD' },
    label: 'LA/USD, LATOKEN US Dollar'
  },
  {
    value: { id: '4666', name: 'Lambo Coin Bitcoin', decimal: '8', symbol: 'LAMBO/BTC' },
    label: 'LAMBO/BTC, Lambo Coin Bitcoin'
  },
  {
    value: { id: '4667', name: 'Lambo Coin Ethereum', decimal: '8', symbol: 'LAMBO/ETH' },
    label: 'LAMBO/ETH, Lambo Coin Ethereum'
  },
  {
    value: { id: '4668', name: 'Lambo Coin Russian Ruble', decimal: '2', symbol: 'LAMBO/RUB' },
    label: 'LAMBO/RUB, Lambo Coin Russian Ruble'
  },
  {
    value: { id: '4669', name: 'Lambo Coin US Dollar', decimal: '4', symbol: 'LAMBO/USD' },
    label: 'LAMBO/USD, Lambo Coin US Dollar'
  },
  {
    value: { id: '4673', name: 'LanaCoin US Dollar', decimal: '6', symbol: 'LANA/USD' },
    label: 'LANA/USD, LanaCoin US Dollar'
  },
  {
    value: { id: '4674', name: 'Lazaruscoin Bitcoin', decimal: '8', symbol: 'LAZ/BTC' },
    label: 'LAZ/BTC, Lazaruscoin Bitcoin'
  },
  {
    value: { id: '4675', name: 'Lazaruscoin US Dollar', decimal: '6', symbol: 'LAZ/USD' },
    label: 'LAZ/USD, Lazaruscoin US Dollar'
  },
  {
    value: { id: '4676', name: 'Cred US Dollar', decimal: '4', symbol: 'LBA/USD' },
    label: 'LBA/USD, Cred US Dollar'
  },
  {
    value: { id: '4677', name: 'LBRY Credits Bitcoin', decimal: '8', symbol: 'LBC/BTC' },
    label: 'LBC/BTC, LBRY Credits Bitcoin'
  },
  {
    value: { id: '4680', name: 'LBRY Credits US Dollar', decimal: '5', symbol: 'LBC/USD' },
    label: 'LBC/USD, LBRY Credits US Dollar'
  },
  {
    value: { id: '4681', name: 'Lightning Bitcoin Bitcoin', decimal: '6', symbol: 'LBTC/BTC' },
    label: 'LBTC/BTC, Lightning Bitcoin Bitcoin'
  },
  {
    value: { id: '4684', name: 'Lightning Bitcoin US Dollar', decimal: '4', symbol: 'LBTC/USD' },
    label: 'LBTC/USD, Lightning Bitcoin US Dollar'
  },
  {
    value: { id: '4686', name: 'LiteBitcoin US Dollar', decimal: '6', symbol: 'LBTCX/USD' },
    label: 'LBTCX/USD, LiteBitcoin US Dollar'
  },
  {
    value: { id: '4687', name: 'Litecoin Cash Bitcoin', decimal: '8', symbol: 'LCC/BTC' },
    label: 'LCC/BTC, Litecoin Cash Bitcoin'
  },
  {
    value: { id: '4688', name: 'Litecoin Cash Ethereum', decimal: '8', symbol: 'LCC/ETH' },
    label: 'LCC/ETH, Litecoin Cash Ethereum'
  },
  {
    value: { id: '4689', name: 'Litecoin Cash US Dollar', decimal: '6', symbol: 'LCC/USD' },
    label: 'LCC/USD, Litecoin Cash US Dollar'
  },
  {
    value: { id: '4690', name: 'LitecoinExtreme Bitcoin', decimal: '8', symbol: 'LCE/BTC' },
    label: 'LCE/BTC, LitecoinExtreme Bitcoin'
  },
  {
    value: { id: '4691', name: 'LitecoinExtreme US Dollar', decimal: '6', symbol: 'LCE/USD' },
    label: 'LCE/USD, LitecoinExtreme US Dollar'
  },
  {
    value: { id: '4695', name: 'Litecoin Plus US Dollar', decimal: '5', symbol: 'LCP/USD' },
    label: 'LCP/USD, Litecoin Plus US Dollar'
  },
  {
    value: { id: '4699', name: 'LiteDoge Bitcoin', decimal: '8', symbol: 'LDOGE/BTC' },
    label: 'LDOGE/BTC, LiteDoge Bitcoin'
  },
  {
    value: { id: '4702', name: 'LiteDoge US Dollar', decimal: '7', symbol: 'LDOGE/USD' },
    label: 'LDOGE/USD, LiteDoge US Dollar'
  },
  {
    value: { id: '4703', name: 'LeaCoin Bitcoin', decimal: '8', symbol: 'LEA/BTC' },
    label: 'LEA/BTC, LeaCoin Bitcoin'
  },
  {
    value: { id: '4706', name: 'LeaCoin US Dollar', decimal: '6', symbol: 'LEA/USD' },
    label: 'LEA/USD, LeaCoin US Dollar'
  },
  {
    value: { id: '4707', name: 'ETHLend Bitcoin', decimal: '8', symbol: 'LEND/BTC' },
    label: 'LEND/BTC, ETHLend Bitcoin'
  },
  {
    value: { id: '4708', name: 'ETHLend Ethereum', decimal: '7', symbol: 'LEND/ETH' },
    label: 'LEND/ETH, ETHLend Ethereum'
  },
  {
    value: { id: '4709', name: 'ETHLend US Dollar', decimal: '6', symbol: 'LEND/USD' },
    label: 'LEND/USD, ETHLend US Dollar'
  },
  {
    value: { id: '4713', name: 'LePen Bitcoin', decimal: '8', symbol: 'LEPEN/BTC' },
    label: 'LEPEN/BTC, LePen Bitcoin'
  },
  {
    value: { id: '4716', name: 'LePen US Dollar', decimal: '8', symbol: 'LEPEN/USD' },
    label: 'LEPEN/USD, LePen US Dollar'
  },
  {
    value: { id: '4717', name: 'Legends Room Bitcoin', decimal: '7', symbol: 'LGD/BTC' },
    label: 'LGD/BTC, Legends Room Bitcoin'
  },
  {
    value: { id: '4718', name: 'Legends Room US Dollar', decimal: '5', symbol: 'LGD/USD' },
    label: 'LGD/USD, Legends Room US Dollar'
  },
  {
    value: { id: '4720', name: 'LGO Exchange US Dollar', decimal: '4', symbol: 'LGO/USD' },
    label: 'LGO/USD, LGO Exchange US Dollar'
  },
  {
    value: { id: '4728', name: 'Linda US Dollar', decimal: '6', symbol: 'LINDA/USD' },
    label: 'LINDA/USD, Linda US Dollar'
  },
  {
    value: { id: '4729', name: 'Chainlink Bitcoin', decimal: '7', symbol: 'LINK/BTC' },
    label: 'LINK/BTC, Chainlink Bitcoin'
  },
  {
    value: { id: '4730', name: 'Chainlink Ethereum', decimal: '6', symbol: 'LINK/ETH' },
    label: 'LINK/ETH, Chainlink Ethereum'
  },
  {
    value: { id: '4731', name: 'Chainlink US Dollar', decimal: '2', symbol: 'LINK/USD' },
    label: 'LINK/USD, Chainlink US Dollar'
  },
  {
    value: { id: '4735', name: 'Linx US Dollar', decimal: '6', symbol: 'LINX/USD' },
    label: 'LINX/USD, Linx US Dollar'
  },
  {
    value: { id: '4736', name: 'Lion Coin Ethereum', decimal: '6', symbol: 'LION/ETH' },
    label: 'LION/ETH, Lion Coin Ethereum'
  },
  {
    value: { id: '4737', name: 'Lion Coin US Dollar', decimal: '8', symbol: 'LION/USD' },
    label: 'LION/USD, Lion Coin US Dollar'
  },
  {
    value: { id: '4738', name: 'LetItRide Bitcoin', decimal: '8', symbol: 'LIR/BTC' },
    label: 'LIR/BTC, LetItRide Bitcoin'
  },
  {
    value: { id: '4739', name: 'LetItRide US Dollar', decimal: '6', symbol: 'LIR/USD' },
    label: 'LIR/USD, LetItRide US Dollar'
  },
  {
    value: { id: '4740', name: 'Lizus Bitcoin', decimal: '8', symbol: 'LIZ/BTC' },
    label: 'LIZ/BTC, Lizus Bitcoin'
  },
  {
    value: { id: '4741', name: 'Lizus US Dollar', decimal: '6', symbol: 'LIZ/USD' },
    label: 'LIZ/USD, Lizus US Dollar'
  },
  {
    value: { id: '4742', name: 'LIZA Bitcoin', decimal: '6', symbol: 'LIZA/BTC' },
    label: 'LIZA/BTC, LIZA Bitcoin'
  },
  {
    value: { id: '4743', name: 'LIZA US Dollar', decimal: '2', symbol: 'LIZA/USD' },
    label: 'LIZA/USD, LIZA US Dollar'
  },
  {
    value: { id: '4744', name: 'LinkedCoin Bitcoin', decimal: '8', symbol: 'LKC/BTC' },
    label: 'LKC/BTC, LinkedCoin Bitcoin'
  },
  {
    value: { id: '4745', name: 'LinkedCoin US Dollar', decimal: '6', symbol: 'LKC/USD' },
    label: 'LKC/USD, LinkedCoin US Dollar'
  },
  {
    value: { id: '4746', name: 'Lykke Swiss Franc', decimal: '6', symbol: 'LKK/CHF' },
    label: 'LKK/CHF, Lykke Swiss Franc'
  },
  {
    value: { id: '4747', name: 'Lykke US Dollar', decimal: '4', symbol: 'LKK/USD' },
    label: 'LKK/USD, Lykke US Dollar'
  },
  {
    value: { id: '4749', name: 'LLToken US Dollar', decimal: '2', symbol: 'LLT/USD' },
    label: 'LLT/USD, LLToken US Dollar'
  },
  {
    value: { id: '4750', name: 'LoMoCoin Bitcoin', decimal: '8', symbol: 'LMC/BTC' },
    label: 'LMC/BTC, LoMoCoin Bitcoin'
  },
  {
    value: { id: '4751', name: 'LoMoCoin US Dollar', decimal: '6', symbol: 'LMC/USD' },
    label: 'LMC/USD, LoMoCoin US Dollar'
  },
  {
    value: { id: '4752', name: 'Lendingblock Ethereum', decimal: '8', symbol: 'LND/ETH' },
    label: 'LND/ETH, Lendingblock Ethereum'
  },
  {
    value: { id: '4753', name: 'Lendingblock US Dollar', decimal: '8', symbol: 'LND/USD' },
    label: 'LND/USD, Lendingblock US Dollar'
  },
  {
    value: { id: '4754', name: 'Link Platform Bitcoin', decimal: '6', symbol: 'LNK/BTC' },
    label: 'LNK/BTC, Link Platform Bitcoin'
  },
  {
    value: { id: '4756', name: 'Link Platform US Dollar', decimal: '4', symbol: 'LNK/USD' },
    label: 'LNK/USD, Link Platform US Dollar'
  },
  {
    value: { id: '4757', name: 'LockTrip Bitcoin', decimal: '6', symbol: 'LOC/BTC' },
    label: 'LOC/BTC, LockTrip Bitcoin'
  },
  {
    value: { id: '4758', name: 'LockTrip Dogecoin', decimal: '2', symbol: 'LOC/DOGE' },
    label: 'LOC/DOGE, LockTrip Dogecoin'
  },
  {
    value: { id: '4759', name: 'LockTrip Ethereum', decimal: '6', symbol: 'LOC/ETH' },
    label: 'LOC/ETH, LockTrip Ethereum'
  },
  {
    value: { id: '4760', name: 'LockTrip Russian Ruble', decimal: '3', symbol: 'LOC/RUB' },
    label: 'LOC/RUB, LockTrip Russian Ruble'
  },
  {
    value: { id: '4761', name: 'LockTrip US Dollar', decimal: '5', symbol: 'LOC/USD' },
    label: 'LOC/USD, LockTrip US Dollar'
  },
  {
    value: { id: '4762', name: 'LockTrip Waves', decimal: '5', symbol: 'LOC/WAVES' },
    label: 'LOC/WAVES, LockTrip Waves'
  },
  {
    value: { id: '4764', name: 'Loom Network Bitcoin', decimal: '8', symbol: 'LOOM/BTC' },
    label: 'LOOM/BTC, Loom Network Bitcoin'
  },
  {
    value: { id: '4765', name: 'Loom Network Ethereum', decimal: '6', symbol: 'LOOM/ETH' },
    label: 'LOOM/ETH, Loom Network Ethereum'
  },
  {
    value: { id: '4766', name: 'Loom Network US Dollar', decimal: '5', symbol: 'LOOM/USD' },
    label: 'LOOM/USD, Loom Network US Dollar'
  },
  {
    value: { id: '4767', name: 'LottoCoin Dogecoin', decimal: '6', symbol: 'LOT/DOGE' },
    label: 'LOT/DOGE, LottoCoin Dogecoin'
  },
  {
    value: { id: '4769', name: 'LottoCoin US Dollar', decimal: '8', symbol: 'LOT/USD' },
    label: 'LOT/USD, LottoCoin US Dollar'
  },
  {
    value: { id: '4771', name: 'Lightpaycoin US Dollar', decimal: '6', symbol: 'LPC/USD' },
    label: 'LPC/USD, Lightpaycoin US Dollar'
  },
  {
    value: { id: '4772', name: 'Loopring Bitcoin', decimal: '7', symbol: 'LRC/BTC' },
    label: 'LRC/BTC, Loopring Bitcoin'
  },
  {
    value: { id: '4773', name: 'Loopring Ethereum', decimal: '6', symbol: 'LRC/ETH' },
    label: 'LRC/ETH, Loopring Ethereum'
  },
  {
    value: { id: '4774', name: 'Loopring US Dollar', decimal: '5', symbol: 'LRC/USD' },
    label: 'LRC/USD, Loopring US Dollar'
  },
  {
    value: { id: '4775', name: 'Lisk Australian Dollar', decimal: '4', symbol: 'LSK/AUD' },
    label: 'LSK/AUD, Lisk Australian Dollar'
  },
  {
    value: { id: '4777', name: 'Lisk Bitcoin', decimal: '6', symbol: 'LSK/BTC' },
    label: 'LSK/BTC, Lisk Bitcoin'
  },
  {
    value: { id: '4778', name: 'Lisk Canadian Dollar', decimal: '4', symbol: 'LSK/CAD' },
    label: 'LSK/CAD, Lisk Canadian Dollar'
  },
  {
    value: { id: '4779', name: 'Lisk Chinese Yuan', decimal: '3', symbol: 'LSK/CNY' },
    label: 'LSK/CNY, Lisk Chinese Yuan'
  },
  {
    value: { id: '4781', name: 'Lisk Euro', decimal: '4', symbol: 'LSK/EUR' },
    label: 'LSK/EUR, Lisk Euro'
  },
  {
    value: { id: '4782', name: 'Lisk Hong Kong Dollar', decimal: '3', symbol: 'LSK/HKD' },
    label: 'LSK/HKD, Lisk Hong Kong Dollar'
  },
  {
    value: { id: '4783', name: 'Lisk Israeli Shekel', decimal: '4', symbol: 'LSK/ILS' },
    label: 'LSK/ILS, Lisk Israeli Shekel'
  },
  {
    value: { id: '4784', name: 'Lisk Indian Rupee', decimal: '2', symbol: 'LSK/INR' },
    label: 'LSK/INR, Lisk Indian Rupee'
  },
  {
    value: { id: '4785', name: 'Lisk Korean Won', decimal: '2', symbol: 'LSK/KRW' },
    label: 'LSK/KRW, Lisk Korean Won'
  },
  {
    value: { id: '4786', name: 'Lisk Mexican Peso', decimal: '2', symbol: 'LSK/MXN' },
    label: 'LSK/MXN, Lisk Mexican Peso'
  },
  {
    value: { id: '4787', name: 'Lisk Malaysian Ringgit', decimal: '3', symbol: 'LSK/MYR' },
    label: 'LSK/MYR, Lisk Malaysian Ringgit'
  },
  {
    value: { id: '4788', name: 'Lisk Polish Zloty', decimal: '4', symbol: 'LSK/PLN' },
    label: 'LSK/PLN, Lisk Polish Zloty'
  },
  {
    value: { id: '4789', name: 'Lisk Russian Ruble', decimal: '2', symbol: 'LSK/RUB' },
    label: 'LSK/RUB, Lisk Russian Ruble'
  },
  {
    value: { id: '4790', name: 'Lisk Saudi Riyal', decimal: '4', symbol: 'LSK/SAR' },
    label: 'LSK/SAR, Lisk Saudi Riyal'
  },
  {
    value: { id: '4791', name: 'Lisk Swedish Krona', decimal: '3', symbol: 'LSK/SEK' },
    label: 'LSK/SEK, Lisk Swedish Krona'
  },
  {
    value: { id: '4792', name: 'Lisk Turkish Lira', decimal: '3', symbol: 'LSK/TRY' },
    label: 'LSK/TRY, Lisk Turkish Lira'
  },
  {
    value: { id: '4793', name: 'Lisk US Dollar', decimal: '3', symbol: 'LSK/USD' },
    label: 'LSK/USD, Lisk US Dollar'
  },
  {
    value: { id: '4794', name: 'Lisk Vietnamese Dong', decimal: '0', symbol: 'LSK/VND' },
    label: 'LSK/VND, Lisk Vietnamese Dong'
  },
  {
    value: { id: '4795', name: 'Lisk South African Rand', decimal: '3', symbol: 'LSK/ZAR' },
    label: 'LSK/ZAR, Lisk South African Rand'
  },
  {
    value: { id: '4799', name: 'LiteBar US Dollar', decimal: '5', symbol: 'LTB/USD' },
    label: 'LTB/USD, LiteBar US Dollar'
  },
  {
    value: { id: '4800', name: 'Litecoin Bitcoin Cash', decimal: '8', symbol: 'LTC/BCH' },
    label: 'LTC/BCH, Litecoin Bitcoin Cash'
  },
  {
    value: { id: '4801', name: 'Litecoin Binance Coin', decimal: '4', symbol: 'LTC/BNB' },
    label: 'LTC/BNB, Litecoin Binance Coin'
  },
  {
    value: { id: '4802', name: 'Litecoin Brazil Real', decimal: '2', symbol: 'LTC/BRL' },
    label: 'LTC/BRL, Litecoin Brazil Real'
  },
  {
    value: { id: '4805', name: 'Litecoin Chinese Yuan', decimal: '2', symbol: 'LTC/CNY' },
    label: 'LTC/CNY, Litecoin Chinese Yuan'
  },
  {
    value: { id: '4807', name: 'Litecoin EOS', decimal: '4', symbol: 'LTC/EOS' },
    label: 'LTC/EOS, Litecoin EOS'
  },
  {
    value: { id: '4808', name: 'Litecoin Ethereum', decimal: '4', symbol: 'LTC/ETH' },
    label: 'LTC/ETH, Litecoin Ethereum'
  },
  {
    value: { id: '4809', name: 'Litecoin Hong Kong Dollar', decimal: '2', symbol: 'LTC/HKD' },
    label: 'LTC/HKD, Litecoin Hong Kong Dollar'
  },
  {
    value: { id: '4810', name: 'Litecoin Indonesian Rupiah', decimal: '0', symbol: 'LTC/IDR' },
    label: 'LTC/IDR, Litecoin Indonesian Rupiah'
  },
  {
    value: { id: '4811', name: 'Litecoin Israeli Shekel', decimal: '2', symbol: 'LTC/ILS' },
    label: 'LTC/ILS, Litecoin Israeli Shekel'
  },
  {
    value: { id: '4812', name: 'Litecoin Indian Rupee', decimal: '2', symbol: 'LTC/INR' },
    label: 'LTC/INR, Litecoin Indian Rupee'
  },
  {
    value: { id: '4814', name: 'Litecoin Korean Won', decimal: '0', symbol: 'LTC/KRW' },
    label: 'LTC/KRW, Litecoin Korean Won'
  },
  {
    value: { id: '4816', name: 'Litecoin Mexican Peso', decimal: '2', symbol: 'LTC/MXN' },
    label: 'LTC/MXN, Litecoin Mexican Peso'
  },
  {
    value: { id: '4817', name: 'Litecoin Malaysian Ringgit', decimal: '2', symbol: 'LTC/MYR' },
    label: 'LTC/MYR, Litecoin Malaysian Ringgit'
  },
  {
    value: { id: '4818', name: 'Litecoin Polish Zloty', decimal: '2', symbol: 'LTC/PLN' },
    label: 'LTC/PLN, Litecoin Polish Zloty'
  },
  {
    value: { id: '4819', name: 'Litecoin Russian Ruble', decimal: '2', symbol: 'LTC/RUB' },
    label: 'LTC/RUB, Litecoin Russian Ruble'
  },
  {
    value: { id: '4820', name: 'Litecoin Saudi Riyal', decimal: '2', symbol: 'LTC/SAR' },
    label: 'LTC/SAR, Litecoin Saudi Riyal'
  },
  {
    value: { id: '4821', name: 'Litecoin Swedish Krona', decimal: '2', symbol: 'LTC/SEK' },
    label: 'LTC/SEK, Litecoin Swedish Krona'
  },
  {
    value: { id: '4823', name: 'Litecoin Turkish Lira', decimal: '2', symbol: 'LTC/TRY' },
    label: 'LTC/TRY, Litecoin Turkish Lira'
  },
  {
    value: { id: '4825', name: 'Litecoin Vietnamese Dong', decimal: '0', symbol: 'LTC/VND' },
    label: 'LTC/VND, Litecoin Vietnamese Dong'
  },
  {
    value: { id: '4828', name: 'Litecred Bitcoin', decimal: '8', symbol: 'LTCR/BTC' },
    label: 'LTCR/BTC, Litecred Bitcoin'
  },
  {
    value: { id: '4829', name: 'Litecred US Dollar', decimal: '6', symbol: 'LTCR/USD' },
    label: 'LTCR/USD, Litecred US Dollar'
  },
  {
    value: { id: '4833', name: 'LiteCoin Ultra US Dollar', decimal: '6', symbol: 'LTCU/USD' },
    label: 'LTCU/USD, LiteCoin Ultra US Dollar'
  },
  {
    value: { id: '4834', name: 'LiteCoin Gold Ethereum', decimal: '7', symbol: 'LTG/ETH' },
    label: 'LTG/ETH, LiteCoin Gold Ethereum'
  },
  {
    value: { id: '4835', name: 'LiteCoin Gold US Dollar', decimal: '6', symbol: 'LTG/USD' },
    label: 'LTG/USD, LiteCoin Gold US Dollar'
  },
  {
    value: { id: '4836', name: 'LAthaan Bitcoin', decimal: '8', symbol: 'LTH/BTC' },
    label: 'LTH/BTC, LAthaan Bitcoin'
  },
  {
    value: { id: '4837', name: 'LAthaan US Dollar', decimal: '6', symbol: 'LTH/USD' },
    label: 'LTH/USD, LAthaan US Dollar'
  },
  {
    value: { id: '4841', name: 'Luna Coin Bitcoin', decimal: '8', symbol: 'LUNA/BTC' },
    label: 'LUNA/BTC, Luna Coin Bitcoin'
  },
  {
    value: { id: '4842', name: 'Luna Coin US Dollar', decimal: '6', symbol: 'LUNA/USD' },
    label: 'LUNA/USD, Luna Coin US Dollar'
  },
  {
    value: { id: '4846', name: 'LUXCoin US Dollar', decimal: '4', symbol: 'LUX/USD' },
    label: 'LUX/USD, LUXCoin US Dollar'
  },
  {
    value: { id: '4847', name: 'LevoPlus Bitcoin', decimal: '8', symbol: 'LVPS/BTC' },
    label: 'LVPS/BTC, LevoPlus Bitcoin'
  },
  {
    value: { id: '4849', name: 'LevoPlus US Dollar', decimal: '6', symbol: 'LVPS/USD' },
    label: 'LVPS/USD, LevoPlus US Dollar'
  },
  {
    value: { id: '4852', name: 'LoyalCoin US Dollar', decimal: '6', symbol: 'LYL/USD' },
    label: 'LYL/USD, LoyalCoin US Dollar'
  },
  {
    value: { id: '4853', name: 'Lympo US Dollar', decimal: '4', symbol: 'LYM/USD' },
    label: 'LYM/USD, Lympo US Dollar'
  },
  {
    value: { id: '4854', name: 'Machinecoin Bitcoin', decimal: '8', symbol: 'MAC/BTC' },
    label: 'MAC/BTC, Machinecoin Bitcoin'
  },
  {
    value: { id: '4857', name: 'Machinecoin US Dollar', decimal: '6', symbol: 'MAC/USD' },
    label: 'MAC/USD, Machinecoin US Dollar'
  },
  {
    value: { id: '4858', name: 'Maggie Bitcoin', decimal: '8', symbol: 'MAG/BTC' },
    label: 'MAG/BTC, Maggie Bitcoin'
  },
  {
    value: { id: '4860', name: 'Maggie US Dollar', decimal: '6', symbol: 'MAG/USD' },
    label: 'MAG/USD, Maggie US Dollar'
  },
  {
    value: { id: '4861', name: 'MagicCoin Bitcoin', decimal: '8', symbol: 'MAGE/BTC' },
    label: 'MAGE/BTC, MagicCoin Bitcoin'
  },
  {
    value: { id: '4864', name: 'MagicCoin US Dollar', decimal: '5', symbol: 'MAGE/USD' },
    label: 'MAGE/USD, MagicCoin US Dollar'
  },
  {
    value: { id: '4865', name: 'Magnetcoin Bitcoin', decimal: '7', symbol: 'MAGN/BTC' },
    label: 'MAGN/BTC, Magnetcoin Bitcoin'
  },
  {
    value: { id: '4868', name: 'Magnetcoin US Dollar', decimal: '6', symbol: 'MAGN/USD' },
    label: 'MAGN/USD, Magnetcoin US Dollar'
  },
  {
    value: { id: '4869', name: 'Magnet Bitcoin', decimal: '8', symbol: 'MAGT/BTC' },
    label: 'MAGT/BTC, Magnet Bitcoin'
  },
  {
    value: { id: '4870', name: 'Magnet US Dollar', decimal: '6', symbol: 'MAGT/USD' },
    label: 'MAGT/USD, Magnet US Dollar'
  },
  {
    value: { id: '4871', name: 'MaidSafeCoin Bitcoin', decimal: '8', symbol: 'MAID/BTC' },
    label: 'MAID/BTC, MaidSafeCoin Bitcoin'
  },
  {
    value: { id: '4873', name: 'MaidSafeCoin Ethereum', decimal: '6', symbol: 'MAID/ETH' },
    label: 'MAID/ETH, MaidSafeCoin Ethereum'
  },
  {
    value: { id: '4875', name: 'MaidSafeCoin US Dollar', decimal: '5', symbol: 'MAID/USD' },
    label: 'MAID/USD, MaidSafeCoin US Dollar'
  },
  {
    value: { id: '4877', name: 'Matrix AI Network US Dollar', decimal: '8', symbol: 'MAN/USD' },
    label: 'MAN/USD, Matrix AI Network US Dollar'
  },
  {
    value: { id: '4878', name: 'Decentraland Bitcoin', decimal: '8', symbol: 'MANA/BTC' },
    label: 'MANA/BTC, Decentraland Bitcoin'
  },
  {
    value: { id: '4879', name: 'Decentraland Ethereum', decimal: '6', symbol: 'MANA/ETH' },
    label: 'MANA/ETH, Decentraland Ethereum'
  },
  {
    value: { id: '4882', name: 'Mao Zedong Bitcoin', decimal: '8', symbol: 'MAO/BTC' },
    label: 'MAO/BTC, Mao Zedong Bitcoin'
  },
  {
    value: { id: '4883', name: 'Mao Zedong US Dollar', decimal: '6', symbol: 'MAO/USD' },
    label: 'MAO/USD, Mao Zedong US Dollar'
  },
  {
    value: { id: '4884', name: 'Marijuanacoin Bitcoin', decimal: '8', symbol: 'MAR/BTC' },
    label: 'MAR/BTC, Marijuanacoin Bitcoin'
  },
  {
    value: { id: '4887', name: 'Marijuanacoin US Dollar', decimal: '6', symbol: 'MAR/USD' },
    label: 'MAR/USD, Marijuanacoin US Dollar'
  },
  {
    value: { id: '4891', name: 'Marscoin US Dollar', decimal: '6', symbol: 'MARS/USD' },
    label: 'MARS/USD, Marscoin US Dollar'
  },
  {
    value: { id: '4895', name: 'MarxCoin US Dollar', decimal: '6', symbol: 'MARX/USD' },
    label: 'MARX/USD, MarxCoin US Dollar'
  },
  {
    value: { id: '4896', name: 'Mavro Bitcoin', decimal: '8', symbol: 'MAVRO/BTC' },
    label: 'MAVRO/BTC, Mavro Bitcoin'
  },
  {
    value: { id: '4897', name: 'Mavro US Dollar', decimal: '6', symbol: 'MAVRO/USD' },
    label: 'MAVRO/USD, Mavro US Dollar'
  },
  {
    value: { id: '4898', name: 'MaxCoin Bitcoin', decimal: '8', symbol: 'MAX/BTC' },
    label: 'MAX/BTC, MaxCoin Bitcoin'
  },
  {
    value: { id: '4899', name: 'MaxCoin US Dollar', decimal: '6', symbol: 'MAX/USD' },
    label: 'MAX/USD, MaxCoin US Dollar'
  },
  {
    value: { id: '4900', name: 'Theresa May Coin Bitcoin', decimal: '8', symbol: 'MAY/BTC' },
    label: 'MAY/BTC, Theresa May Coin Bitcoin'
  },
  {
    value: { id: '4901', name: 'Theresa May Coin US Dollar', decimal: '6', symbol: 'MAY/USD' },
    label: 'MAY/USD, Theresa May Coin US Dollar'
  },
  {
    value: { id: '4902', name: 'MazaCoin Bitcoin', decimal: '8', symbol: 'MAZA/BTC' },
    label: 'MAZA/BTC, MazaCoin Bitcoin'
  },
  {
    value: { id: '4905', name: 'MazaCoin US Dollar', decimal: '6', symbol: 'MAZA/USD' },
    label: 'MAZA/USD, MazaCoin US Dollar'
  },
  {
    value: { id: '4906', name: 'Embers Bitcoin', decimal: '8', symbol: 'MBRS/BTC' },
    label: 'MBRS/BTC, Embers Bitcoin'
  },
  {
    value: { id: '4910', name: 'Embers US Dollar', decimal: '6', symbol: 'MBRS/USD' },
    label: 'MBRS/USD, Embers US Dollar'
  },
  {
    value: { id: '4911', name: 'MCAP Ethereum', decimal: '7', symbol: 'MCAP/ETH' },
    label: 'MCAP/ETH, MCAP Ethereum'
  },
  {
    value: { id: '4912', name: 'MCAP US Dollar', decimal: '5', symbol: 'MCAP/USD' },
    label: 'MCAP/USD, MCAP US Dollar'
  },
  {
    value: { id: '4913', name: 'Musiconomi Bitcoin', decimal: '8', symbol: 'MCI/BTC' },
    label: 'MCI/BTC, Musiconomi Bitcoin'
  },
  {
    value: { id: '4916', name: 'Musiconomi US Dollar', decimal: '6', symbol: 'MCI/USD' },
    label: 'MCI/USD, Musiconomi US Dollar'
  },
  {
    value: { id: '4918', name: 'Crypto.com Bitcoin', decimal: '6', symbol: 'MCO/BTC' },
    label: 'MCO/BTC, Crypto.com Bitcoin'
  },
  {
    value: { id: '4919', name: 'Crypto.com Ethereum', decimal: '6', symbol: 'MCO/ETH' },
    label: 'MCO/ETH, Crypto.com Ethereum'
  },
  {
    value: { id: '4923', name: 'Macro US Dollar', decimal: '6', symbol: 'MCR/USD' },
    label: 'MCR/USD, Macro US Dollar'
  },
  {
    value: { id: '4924', name: 'MACRON Bitcoin', decimal: '8', symbol: 'MCRN/BTC' },
    label: 'MCRN/BTC, MACRON Bitcoin'
  },
  {
    value: { id: '4927', name: 'MACRON US Dollar', decimal: '6', symbol: 'MCRN/USD' },
    label: 'MCRN/USD, MACRON US Dollar'
  },
  {
    value: { id: '4928', name: 'Moeda Loyalty Points Bitcoin', decimal: '7', symbol: 'MDA/BTC' },
    label: 'MDA/BTC, Moeda Loyalty Points Bitcoin'
  },
  {
    value: { id: '4930', name: 'Moeda Loyalty Points US Dollar', decimal: '3', symbol: 'MDA/USD' },
    label: 'MDA/USD, Moeda Loyalty Points US Dollar'
  },
  {
    value: { id: '4931', name: 'MediShares Bitcoin', decimal: '8', symbol: 'MDS/BTC' },
    label: 'MDS/BTC, MediShares Bitcoin'
  },
  {
    value: { id: '4932', name: 'MediShares Ethereum', decimal: '6', symbol: 'MDS/ETH' },
    label: 'MDS/ETH, MediShares Ethereum'
  },
  {
    value: { id: '4933', name: 'MediShares US Dollar', decimal: '6', symbol: 'MDS/USD' },
    label: 'MDS/USD, MediShares US Dollar'
  },
  {
    value: { id: '4934', name: 'Measurable Data Token Bitcoin', decimal: '8', symbol: 'MDT/BTC' },
    label: 'MDT/BTC, Measurable Data Token Bitcoin'
  },
  {
    value: { id: '4935', name: 'Measurable Data Token Ethereum', decimal: '7', symbol: 'MDT/ETH' },
    label: 'MDT/ETH, Measurable Data Token Ethereum'
  },
  {
    value: { id: '4936', name: 'Measurable Data Token US Dollar', decimal: '6', symbol: 'MDT/USD' },
    label: 'MDT/USD, Measurable Data Token US Dollar'
  },
  {
    value: { id: '4938', name: 'Megacoin US Dollar', decimal: '6', symbol: 'MEC/USD' },
    label: 'MEC/USD, Megacoin US Dollar'
  },
  {
    value: { id: '4940', name: 'MediBloc [QRC20] Ethereum', decimal: '8', symbol: 'MED/ETH' },
    label: 'MED/ETH, MediBloc [QRC20] Ethereum'
  },
  {
    value: { id: '4942', name: 'MediBloc [QRC20] US Dollar', decimal: '6', symbol: 'MED/USD' },
    label: 'MED/USD, MediBloc [QRC20] US Dollar'
  },
  {
    value: { id: '4943', name: 'MediBloc [ERC20] Bitcoin', decimal: '8', symbol: 'MEDX/BTC' },
    label: 'MEDX/BTC, MediBloc [ERC20] Bitcoin'
  },
  {
    value: { id: '4944', name: 'MediBloc [ERC20] Ethereum', decimal: '8', symbol: 'MEDX/ETH' },
    label: 'MEDX/ETH, MediBloc [ERC20] Ethereum'
  },
  {
    value: { id: '4947', name: 'Â Memetic / PepeCoin US Dollar', decimal: '5', symbol: 'MEME/USD' },
    label: 'MEME/USD, Â Memetic / PepeCoin US Dollar'
  },
  {
    value: { id: '4948', name: 'Mercury Bitcoin', decimal: '8', symbol: 'MER/BTC' },
    label: 'MER/BTC, Mercury Bitcoin'
  },
  {
    value: { id: '4951', name: 'Mercury US Dollar', decimal: '5', symbol: 'MER/USD' },
    label: 'MER/USD, Mercury US Dollar'
  },
  {
    value: { id: '4953', name: 'Merebel Bitcoin', decimal: '8', symbol: 'MERI/BTC' },
    label: 'MERI/BTC, Merebel Bitcoin'
  },
  {
    value: { id: '4954', name: 'Merebel US Dollar', decimal: '6', symbol: 'MERI/USD' },
    label: 'MERI/USD, Merebel US Dollar'
  },
  {
    value: { id: '4955', name: 'Metronome Ethereum', decimal: '8', symbol: 'MET/ETH' },
    label: 'MET/ETH, Metronome Ethereum'
  },
  {
    value: { id: '4956', name: 'Metronome US Dollar', decimal: '8', symbol: 'MET/USD' },
    label: 'MET/USD, Metronome US Dollar'
  },
  {
    value: { id: '4957', name: 'MetalCoin Bitcoin', decimal: '8', symbol: 'METAL/BTC' },
    label: 'METAL/BTC, MetalCoin Bitcoin'
  },
  {
    value: { id: '4958', name: 'MetalCoin US Dollar', decimal: '6', symbol: 'METAL/USD' },
    label: 'METAL/USD, MetalCoin US Dollar'
  },
  {
    value: { id: '4959', name: 'Mainframe Binance Coin', decimal: '6', symbol: 'MFT/BNB' },
    label: 'MFT/BNB, Mainframe Binance Coin'
  },
  {
    value: { id: '4960', name: 'Mainframe Bancor', decimal: '8', symbol: 'MFT/BNT' },
    label: 'MFT/BNT, Mainframe Bancor'
  },
  {
    value: { id: '4962', name: 'Mainframe Ethereum', decimal: '8', symbol: 'MFT/ETH' },
    label: 'MFT/ETH, Mainframe Ethereum'
  },
  {
    value: { id: '4963', name: 'Mainframe US Dollar', decimal: '6', symbol: 'MFT/USD' },
    label: 'MFT/USD, Mainframe US Dollar'
  },
  {
    value: { id: '4964', name: 'MergeCoin Bitcoin', decimal: '8', symbol: 'MGC/BTC' },
    label: 'MGC/BTC, MergeCoin Bitcoin'
  },
  {
    value: { id: '4965', name: 'MergeCoin US Dollar', decimal: '5', symbol: 'MGC/USD' },
    label: 'MGC/USD, MergeCoin US Dollar'
  },
  {
    value: { id: '4966', name: 'Magnum Bitcoin', decimal: '8', symbol: 'MGM/BTC' },
    label: 'MGM/BTC, Magnum Bitcoin'
  },
  {
    value: { id: '4967', name: 'Magnum US Dollar', decimal: '6', symbol: 'MGM/USD' },
    label: 'MGM/USD, Magnum US Dollar'
  },
  {
    value: { id: '4977', name: 'Mindexcoin US Dollar', decimal: '6', symbol: 'MIC/USD' },
    label: 'MIC/USD, Mindexcoin US Dollar'
  },
  {
    value: { id: '4978', name: 'MiloCoin Bitcoin', decimal: '8', symbol: 'MILO/BTC' },
    label: 'MILO/BTC, MiloCoin Bitcoin'
  },
  {
    value: { id: '4979', name: 'MiloCoin US Dollar', decimal: '6', symbol: 'MILO/USD' },
    label: 'MILO/USD, MiloCoin US Dollar'
  },
  {
    value: { id: '4984', name: 'Minex US Dollar', decimal: '6', symbol: 'MINEX/USD' },
    label: 'MINEX/USD, Minex US Dollar'
  },
  {
    value: { id: '4988', name: 'Mintcoin US Dollar', decimal: '6', symbol: 'MINT/USD' },
    label: 'MINT/USD, Mintcoin US Dollar'
  },
  {
    value: { id: '4989', name: 'Mithril Binance Coin', decimal: '5', symbol: 'MITH/BNB' },
    label: 'MITH/BNB, Mithril Binance Coin'
  },
  {
    value: { id: '4990', name: 'Mithril Bitcoin', decimal: '8', symbol: 'MITH/BTC' },
    label: 'MITH/BTC, Mithril Bitcoin'
  },
  {
    value: { id: '4991', name: 'Mithril Ethereum', decimal: '8', symbol: 'MITH/ETH' },
    label: 'MITH/ETH, Mithril Ethereum'
  },
  {
    value: { id: '4993', name: 'Mithril US Dollar', decimal: '6', symbol: 'MITH/USD' },
    label: 'MITH/USD, Mithril US Dollar'
  },
  {
    value: { id: '4994', name: 'Maker Bitcoin', decimal: '6', symbol: 'MKR/BTC' },
    label: 'MKR/BTC, Maker Bitcoin'
  },
  {
    value: { id: '4995', name: 'Maker Ethereum', decimal: '5', symbol: 'MKR/ETH' },
    label: 'MKR/ETH, Maker Ethereum'
  },
  {
    value: { id: '4996', name: 'Maker US Dollar', decimal: '2', symbol: 'MKR/USD' },
    label: 'MKR/USD, Maker US Dollar'
  },
  {
    value: { id: '5000', name: 'MMXVI Bitcoin', decimal: '8', symbol: 'MMXVI/BTC' },
    label: 'MMXVI/BTC, MMXVI Bitcoin'
  },
  {
    value: { id: '5001', name: 'MMXVI US Dollar', decimal: '6', symbol: 'MMXVI/USD' },
    label: 'MMXVI/USD, MMXVI US Dollar'
  },
  {
    value: { id: '5002', name: 'MindCoin Bitcoin', decimal: '8', symbol: 'MND/BTC' },
    label: 'MND/BTC, MindCoin Bitcoin'
  },
  {
    value: { id: '5003', name: 'MindCoin US Dollar', decimal: '6', symbol: 'MND/USD' },
    label: 'MND/USD, MindCoin US Dollar'
  },
  {
    value: { id: '5007', name: 'Minereum US Dollar', decimal: '6', symbol: 'MNE/USD' },
    label: 'MNE/USD, Minereum US Dollar'
  },
  {
    value: { id: '5011', name: 'Mineum US Dollar', decimal: '6', symbol: 'MNM/USD' },
    label: 'MNM/USD, Mineum US Dollar'
  },
  {
    value: { id: '5012', name: 'GoldMint Bitcoin', decimal: '7', symbol: 'MNTP/BTC' },
    label: 'MNTP/BTC, GoldMint Bitcoin'
  },
  {
    value: { id: '5013', name: 'GoldMint Ethereum', decimal: '6', symbol: 'MNTP/ETH' },
    label: 'MNTP/ETH, GoldMint Ethereum'
  },
  {
    value: { id: '5014', name: 'GoldMint US Dollar', decimal: '5', symbol: 'MNTP/USD' },
    label: 'MNTP/USD, GoldMint US Dollar'
  },
  {
    value: { id: '5017', name: 'MinexCoin US Dollar', decimal: '4', symbol: 'MNX/USD' },
    label: 'MNX/USD, MinexCoin US Dollar'
  },
  {
    value: { id: '5019', name: 'MOAC US Dollar', decimal: '2', symbol: 'MOAC/USD' },
    label: 'MOAC/USD, MOAC US Dollar'
  },
  {
    value: { id: '5020', name: 'Mobius US Dollar', decimal: '4', symbol: 'MOBI/USD' },
    label: 'MOBI/USD, Mobius US Dollar'
  },
  {
    value: { id: '5021', name: 'Modum Bitcoin', decimal: '6', symbol: 'MOD/BTC' },
    label: 'MOD/BTC, Modum Bitcoin'
  },
  {
    value: { id: '5025', name: 'Modum US Dollar', decimal: '5', symbol: 'MOD/USD' },
    label: 'MOD/USD, Modum US Dollar'
  },
  {
    value: { id: '5029', name: 'Moin US Dollar', decimal: '6', symbol: 'MOIN/USD' },
    label: 'MOIN/USD, Moin US Dollar'
  },
  {
    value: { id: '5033', name: 'MojoCoin US Dollar', decimal: '6', symbol: 'MOJO/USD' },
    label: 'MOJO/USD, MojoCoin US Dollar'
  },
  {
    value: { id: '5034', name: 'MonaCoin Bitcoin', decimal: '6', symbol: 'MONA/BTC' },
    label: 'MONA/BTC, MonaCoin Bitcoin'
  },
  {
    value: { id: '5036', name: 'MonaCoin Japanese Yen', decimal: '2', symbol: 'MONA/JPY' },
    label: 'MONA/JPY, MonaCoin Japanese Yen'
  },
  {
    value: { id: '5038', name: 'MonaCoin US Dollar', decimal: '5', symbol: 'MONA/USD' },
    label: 'MONA/USD, MonaCoin US Dollar'
  },
  {
    value: { id: '5040', name: 'Moneta Bitcoin', decimal: '8', symbol: 'MONETA/BTC' },
    label: 'MONETA/BTC, Moneta Bitcoin'
  },
  {
    value: { id: '5041', name: 'Moneta US Dollar', decimal: '6', symbol: 'MONETA/USD' },
    label: 'MONETA/USD, Moneta US Dollar'
  },
  {
    value: { id: '5042', name: 'MoneyCoin Bitcoin', decimal: '8', symbol: 'MONEY/BTC' },
    label: 'MONEY/BTC, MoneyCoin Bitcoin'
  },
  {
    value: { id: '5043', name: 'MoneyCoin US Dollar', decimal: '8', symbol: 'MONEY/USD' },
    label: 'MONEY/USD, MoneyCoin US Dollar'
  },
  {
    value: { id: '5047', name: 'Monkey Project US Dollar', decimal: '5', symbol: 'MONK/USD' },
    label: 'MONK/USD, Monkey Project US Dollar'
  },
  {
    value: { id: '5051', name: 'Mooncoin US Dollar', decimal: '7', symbol: 'MOON/USD' },
    label: 'MOON/USD, Mooncoin US Dollar'
  },
  {
    value: { id: '5054', name: 'Olympus Labs US Dollar', decimal: '5', symbol: 'MOT/USD' },
    label: 'MOT/USD, Olympus Labs US Dollar'
  },
  {
    value: { id: '5058', name: 'Motocoin US Dollar', decimal: '6', symbol: 'MOTO/USD' },
    label: 'MOTO/USD, Motocoin US Dollar'
  },
  {
    value: { id: '5059', name: 'GanjaCoin Bitcoin', decimal: '8', symbol: 'MRJA/BTC' },
    label: 'MRJA/BTC, GanjaCoin Bitcoin'
  },
  {
    value: { id: '5060', name: 'GanjaCoin US Dollar', decimal: '6', symbol: 'MRJA/USD' },
    label: 'MRJA/USD, GanjaCoin US Dollar'
  },
  {
    value: { id: '5062', name: 'Miners Reward Token US Dollar', decimal: '6', symbol: 'MRT/USD' },
    label: 'MRT/USD, Miners Reward Token US Dollar'
  },
  {
    value: { id: '5064', name: 'Master Swiscoin Bitcoin', decimal: '8', symbol: 'MSCN/BTC' },
    label: 'MSCN/BTC, Master Swiscoin Bitcoin'
  },
  {
    value: { id: '5066', name: 'Master Swiscoin US Dollar', decimal: '6', symbol: 'MSCN/USD' },
    label: 'MSCN/USD, Master Swiscoin US Dollar'
  },
  {
    value: { id: '5067', name: 'MSD Bitcoin', decimal: '8', symbol: 'MSD/BTC' },
    label: 'MSD/BTC, MSD Bitcoin'
  },
  {
    value: { id: '5069', name: 'MSD US Dollar', decimal: '6', symbol: 'MSD/USD' },
    label: 'MSD/USD, MSD US Dollar'
  },
  {
    value: { id: '5071', name: 'Mothership Bitcoin', decimal: '8', symbol: 'MSP/BTC' },
    label: 'MSP/BTC, Mothership Bitcoin'
  },
  {
    value: { id: '5075', name: 'Mothership US Dollar', decimal: '5', symbol: 'MSP/USD' },
    label: 'MSP/USD, Mothership US Dollar'
  },
  {
    value: { id: '5080', name: 'MustangCoin US Dollar', decimal: '5', symbol: 'MST/USD' },
    label: 'MST/USD, MustangCoin US Dollar'
  },
  {
    value: { id: '5081', name: 'doc.com Token Bitcoin', decimal: '8', symbol: 'MTC/BTC' },
    label: 'MTC/BTC, doc.com Token Bitcoin'
  },
  {
    value: { id: '5082', name: 'doc.com Token Ethereum', decimal: '7', symbol: 'MTC/ETH' },
    label: 'MTC/ETH, doc.com Token Ethereum'
  },
  {
    value: { id: '5083', name: 'doc.com Token US Dollar', decimal: '8', symbol: 'MTC/USD' },
    label: 'MTC/USD, doc.com Token US Dollar'
  },
  {
    value: { id: '5084', name: 'Monetha Bitcoin', decimal: '8', symbol: 'MTH/BTC' },
    label: 'MTH/BTC, Monetha Bitcoin'
  },
  {
    value: { id: '5088', name: 'Metal Bitcoin', decimal: '6', symbol: 'MTL/BTC' },
    label: 'MTL/BTC, Metal Bitcoin'
  },
  {
    value: { id: '5091', name: 'Metal Korean Won', decimal: '2', symbol: 'MTL/KRW' },
    label: 'MTL/KRW, Metal Korean Won'
  },
  {
    value: { id: '5093', name: 'Metal US Dollar', decimal: '5', symbol: 'MTL/USD' },
    label: 'MTL/USD, Metal US Dollar'
  },
  {
    value: { id: '5095', name: 'Metal Music Coin Bitcoin', decimal: '8', symbol: 'MTLMC3/BTC' },
    label: 'MTLMC3/BTC, Metal Music Coin Bitcoin'
  },
  {
    value: { id: '5096', name: 'Metal Music Coin US Dollar', decimal: '6', symbol: 'MTLMC3/USD' },
    label: 'MTLMC3/USD, Metal Music Coin US Dollar'
  },
  {
    value: { id: '5097', name: 'Medicalchain Bitcoin', decimal: '8', symbol: 'MTN/BTC' },
    label: 'MTN/BTC, Medicalchain Bitcoin'
  },
  {
    value: { id: '5099', name: 'Medicalchain US Dollar', decimal: '4', symbol: 'MTN/USD' },
    label: 'MTN/USD, Medicalchain US Dollar'
  },
  {
    value: { id: '5100', name: 'Masternodecoin Bitcoin', decimal: '8', symbol: 'MTNC/BTC' },
    label: 'MTNC/BTC, Masternodecoin Bitcoin'
  },
  {
    value: { id: '5103', name: 'Masternodecoin US Dollar', decimal: '6', symbol: 'MTNC/USD' },
    label: 'MTNC/USD, Masternodecoin US Dollar'
  },
  {
    value: { id: '5104', name: 'MonetaryUnit Bitcoin', decimal: '8', symbol: 'MUE/BTC' },
    label: 'MUE/BTC, MonetaryUnit Bitcoin'
  },
  {
    value: { id: '5106', name: 'MonetaryUnit US Dollar', decimal: '6', symbol: 'MUE/USD' },
    label: 'MUE/USD, MonetaryUnit US Dollar'
  },
  {
    value: { id: '5107', name: 'Musicoin Bitcoin', decimal: '8', symbol: 'MUSIC/BTC' },
    label: 'MUSIC/BTC, Musicoin Bitcoin'
  },
  {
    value: { id: '5110', name: 'Musicoin US Dollar', decimal: '6', symbol: 'MUSIC/USD' },
    label: 'MUSIC/USD, Musicoin US Dollar'
  },
  {
    value: { id: '5112', name: 'MVL Ethereum', decimal: '8', symbol: 'MVL/ETH' },
    label: 'MVL/ETH, MVL Ethereum'
  },
  {
    value: { id: '5113', name: 'MVL US Dollar', decimal: '6', symbol: 'MVL/USD' },
    label: 'MVL/USD, MVL US Dollar'
  },
  {
    value: { id: '5114', name: 'Restart Energy MWAT Bitcoin', decimal: '8', symbol: 'MWAT/BTC' },
    label: 'MWAT/BTC, Restart Energy MWAT Bitcoin'
  },
  {
    value: { id: '5115', name: 'Restart Energy MWAT Ethereum', decimal: '7', symbol: 'MWAT/ETH' },
    label: 'MWAT/ETH, Restart Energy MWAT Ethereum'
  },
  {
    value: { id: '5116', name: 'Restart Energy MWAT US Dollar', decimal: '6', symbol: 'MWAT/USD' },
    label: 'MWAT/USD, Restart Energy MWAT US Dollar'
  },
  {
    value: { id: '5118', name: 'Maximine Coin Ethereum', decimal: '8', symbol: 'MXM/ETH' },
    label: 'MXM/ETH, Maximine Coin Ethereum'
  },
  {
    value: { id: '5119', name: 'Maximine Coin US Dollar', decimal: '6', symbol: 'MXM/USD' },
    label: 'MXM/USD, Maximine Coin US Dollar'
  },
  {
    value: { id: '5121', name: 'MarteXcoin US Dollar', decimal: '5', symbol: 'MXT/USD' },
    label: 'MXT/USD, MarteXcoin US Dollar'
  },
  {
    value: { id: '5122', name: 'MyBit Bancor', decimal: '8', symbol: 'MYB/BNT' },
    label: 'MYB/BNT, MyBit Bancor'
  },
  {
    value: { id: '5125', name: 'MyBit US Dollar', decimal: '5', symbol: 'MYB/USD' },
    label: 'MYB/USD, MyBit US Dollar'
  },
  {
    value: { id: '5129', name: 'NamoCoin Bitcoin', decimal: '8', symbol: 'NAMO/BTC' },
    label: 'NAMO/BTC, NamoCoin Bitcoin'
  },
  {
    value: { id: '5132', name: 'NamoCoin US Dollar', decimal: '6', symbol: 'NAMO/USD' },
    label: 'NAMO/USD, NamoCoin US Dollar'
  },
  {
    value: { id: '5134', name: 'NANJCOIN US Dollar', decimal: '6', symbol: 'NANJ/USD' },
    label: 'NANJ/USD, NANJCOIN US Dollar'
  },
  {
    value: { id: '5136', name: 'Nano Bitcoin', decimal: '6', symbol: 'NANO/BTC' },
    label: 'NANO/BTC, Nano Bitcoin'
  },
  {
    value: { id: '5137', name: 'Nano Ethereum', decimal: '6', symbol: 'NANO/ETH' },
    label: 'NANO/ETH, Nano Ethereum'
  },
  {
    value: { id: '5139', name: 'Project-X Bitcoin', decimal: '4', symbol: 'NANOX/BTC' },
    label: 'NANOX/BTC, Project-X Bitcoin'
  },
  {
    value: { id: '5140', name: 'Project-X US Dollar', decimal: '0', symbol: 'NANOX/USD' },
    label: 'NANOX/USD, Project-X US Dollar'
  },
  {
    value: { id: '5142', name: 'Nebulas Bitcoin', decimal: '8', symbol: 'NAS/BTC' },
    label: 'NAS/BTC, Nebulas Bitcoin'
  },
  {
    value: { id: '5144', name: 'Nebulas US Dollar', decimal: '4', symbol: 'NAS/USD' },
    label: 'NAS/USD, Nebulas US Dollar'
  },
  {
    value: { id: '5151', name: 'netBit Bitcoin', decimal: '8', symbol: 'NBIT/BTC' },
    label: 'NBIT/BTC, netBit Bitcoin'
  },
  {
    value: { id: '5152', name: 'netBit US Dollar', decimal: '6', symbol: 'NBIT/USD' },
    label: 'NBIT/USD, netBit US Dollar'
  },
  {
    value: { id: '5153', name: 'Niobio Cash Bitcoin', decimal: '8', symbol: 'NBR/BTC' },
    label: 'NBR/BTC, Niobio Cash Bitcoin'
  },
  {
    value: { id: '5154', name: 'Niobio Cash US Dollar', decimal: '6', symbol: 'NBR/USD' },
    label: 'NBR/USD, Niobio Cash US Dollar'
  },
  {
    value: { id: '5157', name: 'Nucleus Vision Ethereum', decimal: '8', symbol: 'NCASH/ETH' },
    label: 'NCASH/ETH, Nucleus Vision Ethereum'
  },
  {
    value: { id: '5158', name: 'Nucleus Vision US Dollar', decimal: '6', symbol: 'NCASH/USD' },
    label: 'NCASH/USD, Nucleus Vision US Dollar'
  },
  {
    value: { id: '5159', name: 'Neblio Binance Coin', decimal: '5', symbol: 'NEBL/BNB' },
    label: 'NEBL/BNB, Neblio Binance Coin'
  },
  {
    value: { id: '5160', name: 'Neblio Bitcoin', decimal: '6', symbol: 'NEBL/BTC' },
    label: 'NEBL/BTC, Neblio Bitcoin'
  },
  {
    value: { id: '5164', name: 'Neblio US Dollar', decimal: '4', symbol: 'NEBL/USD' },
    label: 'NEBL/USD, Neblio US Dollar'
  },
  {
    value: { id: '5165', name: 'Nectar US Dollar', decimal: '4', symbol: 'NEC/USD' },
    label: 'NEC/USD, Nectar US Dollar'
  },
  {
    value: { id: '5166', name: 'NEO Australian Dollar', decimal: '3', symbol: 'NEO/AUD' },
    label: 'NEO/AUD, NEO Australian Dollar'
  },
  {
    value: { id: '5167', name: 'NEO Binance Coin', decimal: '4', symbol: 'NEO/BNB' },
    label: 'NEO/BNB, NEO Binance Coin'
  },
  {
    value: { id: '5169', name: 'NEO Canadian Dollar', decimal: '3', symbol: 'NEO/CAD' },
    label: 'NEO/CAD, NEO Canadian Dollar'
  },
  {
    value: { id: '5170', name: 'NEO Chinese Yuan', decimal: '2', symbol: 'NEO/CNY' },
    label: 'NEO/CNY, NEO Chinese Yuan'
  },
  {
    value: { id: '5172', name: 'NEO EOS', decimal: '5', symbol: 'NEO/EOS' },
    label: 'NEO/EOS, NEO EOS'
  },
  {
    value: { id: '5173', name: 'NEO Ethereum', decimal: '6', symbol: 'NEO/ETH' },
    label: 'NEO/ETH, NEO Ethereum'
  },
  {
    value: { id: '5174', name: 'NEO Euro', decimal: '4', symbol: 'NEO/EUR' },
    label: 'NEO/EUR, NEO Euro'
  },
  {
    value: { id: '5175', name: 'NEO British Pound', decimal: '4', symbol: 'NEO/GBP' },
    label: 'NEO/GBP, NEO British Pound'
  },
  {
    value: { id: '5176', name: 'NEO Hong Kong Dollar', decimal: '2', symbol: 'NEO/HKD' },
    label: 'NEO/HKD, NEO Hong Kong Dollar'
  },
  {
    value: { id: '5177', name: 'NEO Israeli Shekel', decimal: '2', symbol: 'NEO/ILS' },
    label: 'NEO/ILS, NEO Israeli Shekel'
  },
  {
    value: { id: '5178', name: 'NEO Indian Rupee', decimal: '2', symbol: 'NEO/INR' },
    label: 'NEO/INR, NEO Indian Rupee'
  },
  {
    value: { id: '5179', name: 'NEO Japanese Yen', decimal: '2', symbol: 'NEO/JPY' },
    label: 'NEO/JPY, NEO Japanese Yen'
  },
  {
    value: { id: '5180', name: 'NEO KuCoin Shares', decimal: '3', symbol: 'NEO/KCS' },
    label: 'NEO/KCS, NEO KuCoin Shares'
  },
  {
    value: { id: '5183', name: 'NEO Mexican Peso', decimal: '2', symbol: 'NEO/MXN' },
    label: 'NEO/MXN, NEO Mexican Peso'
  },
  {
    value: { id: '5184', name: 'NEO Malaysian Ringgit', decimal: '2', symbol: 'NEO/MYR' },
    label: 'NEO/MYR, NEO Malaysian Ringgit'
  },
  {
    value: { id: '5185', name: 'NEO Polish Zloty', decimal: '2', symbol: 'NEO/PLN' },
    label: 'NEO/PLN, NEO Polish Zloty'
  },
  {
    value: { id: '5186', name: 'NEO Russian Ruble', decimal: '2', symbol: 'NEO/RUB' },
    label: 'NEO/RUB, NEO Russian Ruble'
  },
  {
    value: { id: '5187', name: 'NEO Saudi Riyal', decimal: '2', symbol: 'NEO/SAR' },
    label: 'NEO/SAR, NEO Saudi Riyal'
  },
  {
    value: { id: '5188', name: 'NEO Swedish Krona', decimal: '2', symbol: 'NEO/SEK' },
    label: 'NEO/SEK, NEO Swedish Krona'
  },
  {
    value: { id: '5190', name: 'NEO Thai Baht', decimal: '2', symbol: 'NEO/THB' },
    label: 'NEO/THB, NEO Thai Baht'
  },
  {
    value: { id: '5191', name: 'NEO Turkish Lira', decimal: '2', symbol: 'NEO/TRY' },
    label: 'NEO/TRY, NEO Turkish Lira'
  },
  {
    value: { id: '5193', name: 'NEO Vietnamese Dong', decimal: '0', symbol: 'NEO/VND' },
    label: 'NEO/VND, NEO Vietnamese Dong'
  },
  {
    value: { id: '5194', name: 'NEO South African Rand', decimal: '2', symbol: 'NEO/ZAR' },
    label: 'NEO/ZAR, NEO South African Rand'
  },
  {
    value: { id: '5195', name: 'NEO GOLD Ethereum', decimal: '8', symbol: 'NEOG/ETH' },
    label: 'NEOG/ETH, NEO GOLD Ethereum'
  },
  {
    value: { id: '5196', name: 'NEO GOLD US Dollar', decimal: '6', symbol: 'NEOG/USD' },
    label: 'NEOG/USD, NEO GOLD US Dollar'
  },
  {
    value: { id: '5197', name: 'NeosCoin Bitcoin', decimal: '6', symbol: 'NEOS/BTC' },
    label: 'NEOS/BTC, NeosCoin Bitcoin'
  },
  {
    value: { id: '5198', name: 'NeosCoin US Dollar', decimal: '5', symbol: 'NEOS/USD' },
    label: 'NEOS/USD, NeosCoin US Dollar'
  },
  {
    value: { id: '5203', name: 'NetCoin US Dollar', decimal: '6', symbol: 'NET/USD' },
    label: 'NET/USD, NetCoin US Dollar'
  },
  {
    value: { id: '5207', name: 'Netko US Dollar', decimal: '6', symbol: 'NETKO/USD' },
    label: 'NETKO/USD, Netko US Dollar'
  },
  {
    value: { id: '5210', name: 'Nimiq Exchange Token US Dollar', decimal: '4', symbol: 'NETN/USD' },
    label: 'NETN/USD, Nimiq Exchange Token US Dollar'
  },
  {
    value: { id: '5211', name: 'Neumark Bitcoin', decimal: '7', symbol: 'NEU/BTC' },
    label: 'NEU/BTC, Neumark Bitcoin'
  },
  {
    value: { id: '5212', name: 'Neumark Ethereum', decimal: '6', symbol: 'NEU/ETH' },
    label: 'NEU/ETH, Neumark Ethereum'
  },
  {
    value: { id: '5213', name: 'Neumark Polish Zloty', decimal: '2', symbol: 'NEU/PLN' },
    label: 'NEU/PLN, Neumark Polish Zloty'
  },
  {
    value: { id: '5214', name: 'Neumark US Dollar', decimal: '5', symbol: 'NEU/USD' },
    label: 'NEU/USD, Neumark US Dollar'
  },
  {
    value: { id: '5218', name: 'NevaCoin US Dollar', decimal: '6', symbol: 'NEVA/USD' },
    label: 'NEVA/USD, NevaCoin US Dollar'
  },
  {
    value: { id: '5219', name: 'Newbium Ethereum', decimal: '8', symbol: 'NEWB/ETH' },
    label: 'NEWB/ETH, Newbium Ethereum'
  },
  {
    value: { id: '5220', name: 'Newbium US Dollar', decimal: '6', symbol: 'NEWB/USD' },
    label: 'NEWB/USD, Newbium US Dollar'
  },
  {
    value: { id: '5221', name: 'Nexo Bitcoin', decimal: '8', symbol: 'NEXO/BTC' },
    label: 'NEXO/BTC, Nexo Bitcoin'
  },
  {
    value: { id: '5222', name: 'Nexo Ethereum', decimal: '8', symbol: 'NEXO/ETH' },
    label: 'NEXO/ETH, Nexo Ethereum'
  },
  {
    value: { id: '5223', name: 'Nexo US Dollar', decimal: '5', symbol: 'NEXO/USD' },
    label: 'NEXO/USD, Nexo US Dollar'
  },
  {
    value: { id: '5224', name: 'NAGA Bitcoin', decimal: '7', symbol: 'NGC/BTC' },
    label: 'NGC/BTC, NAGA Bitcoin'
  },
  {
    value: { id: '5226', name: 'NAGA US Dollar', decimal: '5', symbol: 'NGC/USD' },
    label: 'NGC/USD, NAGA US Dollar'
  },
  {
    value: { id: '5227', name: 'Nimiq Bitcoin', decimal: '8', symbol: 'NIM/BTC' },
    label: 'NIM/BTC, Nimiq Bitcoin'
  },
  {
    value: { id: '5231', name: 'Nimiq US Dollar', decimal: '6', symbol: 'NIM/USD' },
    label: 'NIM/USD, Nimiq US Dollar'
  },
  {
    value: { id: '5233', name: 'IncaKoin Dogecoin', decimal: '6', symbol: 'NKA/DOGE' },
    label: 'NKA/DOGE, IncaKoin Dogecoin'
  },
  {
    value: { id: '5235', name: 'IncaKoin US Dollar', decimal: '7', symbol: 'NKA/USD' },
    label: 'NKA/USD, IncaKoin US Dollar'
  },
  {
    value: { id: '5236', name: 'NKN US Dollar', decimal: '4', symbol: 'NKN/USD' },
    label: 'NKN/USD, NKN US Dollar'
  },
  {
    value: { id: '5240', name: 'NoLimitCoin US Dollar', decimal: '6', symbol: 'NLC2/USD' },
    label: 'NLC2/USD, NoLimitCoin US Dollar'
  },
  {
    value: { id: '5241', name: 'Gulden Bitcoin', decimal: '8', symbol: 'NLG/BTC' },
    label: 'NLG/BTC, Gulden Bitcoin'
  },
  {
    value: { id: '5242', name: 'Gulden US Dollar', decimal: '6', symbol: 'NLG/USD' },
    label: 'NLG/USD, Gulden US Dollar'
  },
  {
    value: { id: '5246', name: 'Namecoin US Dollar', decimal: '4', symbol: 'NMC/USD' },
    label: 'NMC/USD, Namecoin US Dollar'
  },
  {
    value: { id: '5247', name: 'Numeraire Bitcoin', decimal: '6', symbol: 'NMR/BTC' },
    label: 'NMR/BTC, Numeraire Bitcoin'
  },
  {
    value: { id: '5249', name: 'Numeraire US Dollar', decimal: '4', symbol: 'NMR/USD' },
    label: 'NMR/USD, Numeraire US Dollar'
  },
  {
    value: { id: '5250', name: 'Numus Bitcoin', decimal: '8', symbol: 'NMS/BTC' },
    label: 'NMS/BTC, Numus Bitcoin'
  },
  {
    value: { id: '5251', name: 'Numus US Dollar', decimal: '5', symbol: 'NMS/USD' },
    label: 'NMS/USD, Numus US Dollar'
  },
  {
    value: { id: '5253', name: 'Noah Coin Ethereum', decimal: '8', symbol: 'NOAH/ETH' },
    label: 'NOAH/ETH, Noah Coin Ethereum'
  },
  {
    value: { id: '5254', name: 'Noah Coin US Dollar', decimal: '6', symbol: 'NOAH/USD' },
    label: 'NOAH/USD, Noah Coin US Dollar'
  },
  {
    value: { id: '5255', name: 'NobleCoin Bitcoin', decimal: '8', symbol: 'NOBL/BTC' },
    label: 'NOBL/BTC, NobleCoin Bitcoin'
  },
  {
    value: { id: '5258', name: 'NobleCoin US Dollar', decimal: '6', symbol: 'NOBL/USD' },
    label: 'NOBL/USD, NobleCoin US Dollar'
  },
  {
    value: { id: '5259', name: 'NodeCoin Bitcoin', decimal: '8', symbol: 'NODC/BTC' },
    label: 'NODC/BTC, NodeCoin Bitcoin'
  },
  {
    value: { id: '5260', name: 'NodeCoin US Dollar', decimal: '6', symbol: 'NODC/USD' },
    label: 'NODC/USD, NodeCoin US Dollar'
  },
  {
    value: { id: '5268', name: 'Pundi X Ethereum', decimal: '8', symbol: 'NPXS/ETH' },
    label: 'NPXS/ETH, Pundi X Ethereum'
  },
  {
    value: { id: '5271', name: 'Pundi X US Dollar', decimal: '6', symbol: 'NPXS/USD' },
    label: 'NPXS/USD, Pundi X US Dollar'
  },
  {
    value: { id: '5272', name: 'Energi Bitcoin', decimal: '8', symbol: 'NRG/BTC' },
    label: 'NRG/BTC, Energi Bitcoin'
  },
  {
    value: { id: '5274', name: 'Energi US Dollar', decimal: '2', symbol: 'NRG/USD' },
    label: 'NRG/USD, Energi US Dollar'
  },
  {
    value: { id: '5275', name: 'Neuro Bitcoin', decimal: '8', symbol: 'NRO/BTC' },
    label: 'NRO/BTC, Neuro Bitcoin'
  },
  {
    value: { id: '5276', name: 'Neuro US Dollar', decimal: '6', symbol: 'NRO/USD' },
    label: 'NRO/USD, Neuro US Dollar'
  },
  {
    value: { id: '5277', name: 'Nasdacoin Bitcoin', decimal: '8', symbol: 'NSD/BTC' },
    label: 'NSD/BTC, Nasdacoin Bitcoin'
  },
  {
    value: { id: '5278', name: 'Nasdacoin Ethereum', decimal: '8', symbol: 'NSD/ETH' },
    label: 'NSD/ETH, Nasdacoin Ethereum'
  },
  {
    value: { id: '5279', name: 'Nasdacoin US Dollar', decimal: '4', symbol: 'NSD/USD' },
    label: 'NSD/USD, Nasdacoin US Dollar'
  },
  {
    value: { id: '5280', name: 'Natcoin Bitcoin', decimal: '8', symbol: 'NTC/BTC' },
    label: 'NTC/BTC, Natcoin Bitcoin'
  },
  {
    value: { id: '5282', name: 'Natcoin US Dollar', decimal: '6', symbol: 'NTC/USD' },
    label: 'NTC/USD, Natcoin US Dollar'
  },
  {
    value: { id: '5283', name: 'Neurotoken Bitcoin', decimal: '8', symbol: 'NTK/BTC' },
    label: 'NTK/BTC, Neurotoken Bitcoin'
  },
  {
    value: { id: '5285', name: 'Neurotoken US Dollar', decimal: '5', symbol: 'NTK/USD' },
    label: 'NTK/USD, Neurotoken US Dollar'
  },
  {
    value: { id: '5286', name: 'Fujinto Bitcoin', decimal: '8', symbol: 'NTO/BTC' },
    label: 'NTO/BTC, Fujinto Bitcoin'
  },
  {
    value: { id: '5288', name: 'Fujinto US Dollar', decimal: '6', symbol: 'NTO/USD' },
    label: 'NTO/USD, Fujinto US Dollar'
  },
  {
    value: { id: '5292', name: 'Neutron US Dollar', decimal: '6', symbol: 'NTRN/USD' },
    label: 'NTRN/USD, Neutron US Dollar'
  },
  {
    value: { id: '5293', name: 'Network Token Ethereum', decimal: '8', symbol: 'NTWK/ETH' },
    label: 'NTWK/ETH, Network Token Ethereum'
  },
  {
    value: { id: '5294', name: 'Network Token US Dollar', decimal: '6', symbol: 'NTWK/USD' },
    label: 'NTWK/USD, Network Token US Dollar'
  },
  {
    value: { id: '5295', name: 'Nexty Ethereum', decimal: '8', symbol: 'NTY/ETH' },
    label: 'NTY/ETH, Nexty Ethereum'
  },
  {
    value: { id: '5296', name: 'Nexty US Dollar', decimal: '6', symbol: 'NTY/USD' },
    label: 'NTY/USD, Nexty US Dollar'
  },
  {
    value: { id: '5298', name: 'Nuls Bitcoin', decimal: '6', symbol: 'NULS/BTC' },
    label: 'NULS/BTC, Nuls Bitcoin'
  },
  {
    value: { id: '5299', name: 'Nuls Ethereum', decimal: '6', symbol: 'NULS/ETH' },
    label: 'NULS/ETH, Nuls Ethereum'
  },
  {
    value: { id: '5300', name: 'Nuls US Dollar', decimal: '4', symbol: 'NULS/USD' },
    label: 'NULS/USD, Nuls US Dollar'
  },
  {
    value: { id: '5304', name: 'Novacoin US Dollar', decimal: '4', symbol: 'NVC/USD' },
    label: 'NVC/USD, Novacoin US Dollar'
  },
  {
    value: { id: '5305', name: 'Nexium Bitcoin', decimal: '8', symbol: 'NXC/BTC' },
    label: 'NXC/BTC, Nexium Bitcoin'
  },
  {
    value: { id: '5306', name: 'Nexium US Dollar', decimal: '6', symbol: 'NXC/USD' },
    label: 'NXC/USD, Nexium US Dollar'
  },
  {
    value: { id: '5307', name: 'Nexus Bitcoin', decimal: '6', symbol: 'NXS/BTC' },
    label: 'NXS/BTC, Nexus Bitcoin'
  },
  {
    value: { id: '5310', name: 'Nexus US Dollar', decimal: '5', symbol: 'NXS/USD' },
    label: 'NXS/USD, Nexus US Dollar'
  },
  {
    value: { id: '5311', name: 'Nxt Bitcoin', decimal: '8', symbol: 'NXT/BTC' },
    label: 'NXT/BTC, Nxt Bitcoin'
  },
  {
    value: { id: '5312', name: 'Nxt Ethereum', decimal: '6', symbol: 'NXT/ETH' },
    label: 'NXT/ETH, Nxt Ethereum'
  },
  {
    value: { id: '5313', name: 'Nxt US Dollar', decimal: '6', symbol: 'NXT/USD' },
    label: 'NXT/USD, Nxt US Dollar'
  },
  {
    value: { id: '5318', name: 'Nyancoin US Dollar', decimal: '6', symbol: 'NYAN/USD' },
    label: 'NYAN/USD, Nyancoin US Dollar'
  },
  {
    value: { id: '5320', name: 'NewYorkCoin US Dollar', decimal: '6', symbol: 'NYC/USD' },
    label: 'NYC/USD, NewYorkCoin US Dollar'
  },
  {
    value: { id: '5321', name: 'OAX Bitcoin', decimal: '7', symbol: 'OAX/BTC' },
    label: 'OAX/BTC, OAX Bitcoin'
  },
  {
    value: { id: '5323', name: 'OAX US Dollar', decimal: '5', symbol: 'OAX/USD' },
    label: 'OAX/USD, OAX US Dollar'
  },
  {
    value: { id: '5324', name: 'OBITS Bitcoin', decimal: '7', symbol: 'OBITS/BTC' },
    label: 'OBITS/BTC, OBITS Bitcoin'
  },
  {
    value: { id: '5326', name: 'OBITS US Dollar', decimal: '5', symbol: 'OBITS/USD' },
    label: 'OBITS/USD, OBITS US Dollar'
  },
  {
    value: { id: '5327', name: 'Oceanlab Bitcoin', decimal: '8', symbol: 'OCL/BTC' },
    label: 'OCL/BTC, Oceanlab Bitcoin'
  },
  {
    value: { id: '5328', name: 'Oceanlab US Dollar', decimal: '6', symbol: 'OCL/USD' },
    label: 'OCL/USD, Oceanlab US Dollar'
  },
  {
    value: { id: '5330', name: 'Odyssey bitCNY', decimal: '3', symbol: 'OCN/BITCNY' },
    label: 'OCN/BITCNY, Odyssey bitCNY'
  },
  {
    value: { id: '5331', name: 'Odyssey Bitcoin', decimal: '8', symbol: 'OCN/BTC' },
    label: 'OCN/BTC, Odyssey Bitcoin'
  },
  {
    value: { id: '5332', name: 'Odyssey Ethereum', decimal: '8', symbol: 'OCN/ETH' },
    label: 'OCN/ETH, Odyssey Ethereum'
  },
  {
    value: { id: '5333', name: 'Odyssey US Dollar', decimal: '6', symbol: 'OCN/USD' },
    label: 'OCN/USD, Odyssey US Dollar'
  },
  {
    value: { id: '5334', name: 'OCOW Bitcoin', decimal: '8', symbol: 'OCOW/BTC' },
    label: 'OCOW/BTC, OCOW Bitcoin'
  },
  {
    value: { id: '5335', name: 'OCOW US Dollar', decimal: '6', symbol: 'OCOW/USD' },
    label: 'OCOW/USD, OCOW US Dollar'
  },
  {
    value: { id: '5336', name: 'OracleChain EOS', decimal: '6', symbol: 'OCT/EOS' },
    label: 'OCT/EOS, OracleChain EOS'
  },
  {
    value: { id: '5337', name: 'OracleChain US Dollar', decimal: '5', symbol: 'OCT/USD' },
    label: 'OCT/USD, OracleChain US Dollar'
  },
  {
    value: { id: '5338', name: 'ODEM Bitcoin', decimal: '8', symbol: 'ODE/BTC' },
    label: 'ODE/BTC, ODEM Bitcoin'
  },
  {
    value: { id: '5339', name: 'ODEM Ethereum', decimal: '8', symbol: 'ODE/ETH' },
    label: 'ODE/ETH, ODEM Ethereum'
  },
  {
    value: { id: '5340', name: 'ODEM US Dollar', decimal: '4', symbol: 'ODE/USD' },
    label: 'ODE/USD, ODEM US Dollar'
  },
  {
    value: { id: '5341', name: 'Obsidian Bitcoin', decimal: '8', symbol: 'ODN/BTC' },
    label: 'ODN/BTC, Obsidian Bitcoin'
  },
  {
    value: { id: '5344', name: 'Obsidian US Dollar', decimal: '6', symbol: 'ODN/USD' },
    label: 'ODN/USD, Obsidian US Dollar'
  },
  {
    value: { id: '5345', name: 'Cthulhu Offerings Bitcoin', decimal: '8', symbol: 'OFF/BTC' },
    label: 'OFF/BTC, Cthulhu Offerings Bitcoin'
  },
  {
    value: { id: '5348', name: 'Cthulhu Offerings US Dollar', decimal: '6', symbol: 'OFF/USD' },
    label: 'OFF/USD, Cthulhu Offerings US Dollar'
  },
  {
    value: { id: '5349', name: 'OKCash Bitcoin', decimal: '8', symbol: 'OK/BTC' },
    label: 'OK/BTC, OKCash Bitcoin'
  },
  {
    value: { id: '5352', name: 'OKCash US Dollar', decimal: '6', symbol: 'OK/USD' },
    label: 'OK/USD, OKCash US Dollar'
  },
  {
    value: { id: '5353', name: 'Olive Bitcoin', decimal: '8', symbol: 'OLE/BTC' },
    label: 'OLE/BTC, Olive Bitcoin'
  },
  {
    value: { id: '5354', name: 'Olive Ethereum', decimal: '8', symbol: 'OLE/ETH' },
    label: 'OLE/ETH, Olive Ethereum'
  },
  {
    value: { id: '5355', name: 'Olive US Dollar', decimal: '6', symbol: 'OLE/USD' },
    label: 'OLE/USD, Olive US Dollar'
  },
  {
    value: { id: '5356', name: 'OneLedger Ethereum', decimal: '8', symbol: 'OLT/ETH' },
    label: 'OLT/ETH, OneLedger Ethereum'
  },
  {
    value: { id: '5357', name: 'OneLedger US Dollar', decimal: '8', symbol: 'OLT/USD' },
    label: 'OLT/USD, OneLedger US Dollar'
  },
  {
    value: { id: '5358', name: 'Omicron Bitcoin', decimal: '8', symbol: 'OMC/BTC' },
    label: 'OMC/BTC, Omicron Bitcoin'
  },
  {
    value: { id: '5359', name: 'Omicron US Dollar', decimal: '6', symbol: 'OMC/USD' },
    label: 'OMC/USD, Omicron US Dollar'
  },
  {
    value: { id: '5360', name: 'OmiseGO Australian Dollar', decimal: '4', symbol: 'OMG/AUD' },
    label: 'OMG/AUD, OmiseGO Australian Dollar'
  },
  {
    value: { id: '5363', name: 'OmiseGO Ethereum', decimal: '6', symbol: 'OMG/ETH' },
    label: 'OMG/ETH, OmiseGO Ethereum'
  },
  {
    value: { id: '5364', name: 'OmiseGO Indian Rupee', decimal: '2', symbol: 'OMG/INR' },
    label: 'OMG/INR, OmiseGO Indian Rupee'
  },
  {
    value: { id: '5365', name: 'OmiseGO Korean Won', decimal: '2', symbol: 'OMG/KRW' },
    label: 'OMG/KRW, OmiseGO Korean Won'
  },
  {
    value: { id: '5368', name: 'OmiseGO US Dollar', decimal: '4', symbol: 'OMG/USD' },
    label: 'OMG/USD, OmiseGO US Dollar'
  },
  {
    value: { id: '5370', name: 'Omni US Dollar', decimal: '4', symbol: 'OMNI/USD' },
    label: 'OMNI/USD, Omni US Dollar'
  },
  {
    value: { id: '5372', name: 'SoMee.Social US Dollar', decimal: '6', symbol: 'ONG/USD' },
    label: 'ONG/USD, SoMee.Social US Dollar'
  },
  {
    value: { id: '5375', name: 'DeepOnion US Dollar', decimal: '5', symbol: 'ONION/USD' },
    label: 'ONION/USD, DeepOnion US Dollar'
  },
  {
    value: { id: '5376', name: 'On.Live Bitcoin', decimal: '8', symbol: 'ONL/BTC' },
    label: 'ONL/BTC, On.Live Bitcoin'
  },
  {
    value: { id: '5377', name: 'On.Live US Dollar', decimal: '6', symbol: 'ONL/USD' },
    label: 'ONL/USD, On.Live US Dollar'
  },
  {
    value: { id: '5378', name: 'Ontology Binance Coin', decimal: '5', symbol: 'ONT/BNB' },
    label: 'ONT/BNB, Ontology Binance Coin'
  },
  {
    value: { id: '5379', name: 'Ontology Bitcoin', decimal: '8', symbol: 'ONT/BTC' },
    label: 'ONT/BTC, Ontology Bitcoin'
  },
  {
    value: { id: '5380', name: 'Ontology Ethereum', decimal: '6', symbol: 'ONT/ETH' },
    label: 'ONT/ETH, Ontology Ethereum'
  },
  {
    value: { id: '5381', name: 'Ontology US Dollar', decimal: '4', symbol: 'ONT/USD' },
    label: 'ONT/USD, Ontology US Dollar'
  },
  {
    value: { id: '5382', name: 'Onix Bitcoin', decimal: '8', symbol: 'ONX/BTC' },
    label: 'ONX/BTC, Onix Bitcoin'
  },
  {
    value: { id: '5383', name: 'Onix US Dollar', decimal: '6', symbol: 'ONX/USD' },
    label: 'ONX/USD, Onix US Dollar'
  },
  {
    value: { id: '5384', name: 'Operand Bitcoin', decimal: '8', symbol: 'OP/BTC' },
    label: 'OP/BTC, Operand Bitcoin'
  },
  {
    value: { id: '5385', name: 'Operand US Dollar', decimal: '6', symbol: 'OP/USD' },
    label: 'OP/USD, Operand US Dollar'
  },
  {
    value: { id: '5389', name: 'Opal US Dollar', decimal: '6', symbol: 'OPAL/USD' },
    label: 'OPAL/USD, Opal US Dollar'
  },
  {
    value: { id: '5391', name: 'OP Coin US Dollar', decimal: '6', symbol: 'OPC/USD' },
    label: 'OPC/USD, OP Coin US Dollar'
  },
  {
    value: { id: '5392', name: 'Opescoin Bitcoin', decimal: '8', symbol: 'OPES/BTC' },
    label: 'OPES/BTC, Opescoin Bitcoin'
  },
  {
    value: { id: '5393', name: 'Opescoin US Dollar', decimal: '6', symbol: 'OPES/USD' },
    label: 'OPES/USD, Opescoin US Dollar'
  },
  {
    value: { id: '5394', name: 'Opus Bitcoin', decimal: '8', symbol: 'OPT/BTC' },
    label: 'OPT/BTC, Opus Bitcoin'
  },
  {
    value: { id: '5396', name: 'Opus US Dollar', decimal: '6', symbol: 'OPT/USD' },
    label: 'OPT/USD, Opus US Dollar'
  },
  {
    value: { id: '5397', name: 'OptiToken Bitcoin', decimal: '8', symbol: 'OPTI/BTC' },
    label: 'OPTI/BTC, OptiToken Bitcoin'
  },
  {
    value: { id: '5398', name: 'OptiToken US Dollar', decimal: '6', symbol: 'OPTI/USD' },
    label: 'OPTI/USD, OptiToken US Dollar'
  },
  {
    value: { id: '5402', name: 'Orbitcoin US Dollar', decimal: '5', symbol: 'ORB/USD' },
    label: 'ORB/USD, Orbitcoin US Dollar'
  },
  {
    value: { id: '5403', name: 'Orlycoin Bitcoin', decimal: '8', symbol: 'ORLY/BTC' },
    label: 'ORLY/BTC, Orlycoin Bitcoin'
  },
  {
    value: { id: '5404', name: 'Orlycoin US Dollar', decimal: '6', symbol: 'ORLY/USD' },
    label: 'ORLY/USD, Orlycoin US Dollar'
  },
  {
    value: { id: '5409', name: 'OsmiumCoin Bitcoin', decimal: '8', symbol: 'OS76/BTC' },
    label: 'OS76/BTC, OsmiumCoin Bitcoin'
  },
  {
    value: { id: '5410', name: 'OsmiumCoin US Dollar', decimal: '6', symbol: 'OS76/USD' },
    label: 'OS76/USD, OsmiumCoin US Dollar'
  },
  {
    value: { id: '5414', name: 'Simple Token US Dollar', decimal: '5', symbol: 'OST/USD' },
    label: 'OST/USD, Simple Token US Dollar'
  },
  {
    value: { id: '5419', name: 'OX Fina Bitcoin', decimal: '8', symbol: 'OX/BTC' },
    label: 'OX/BTC, OX Fina Bitcoin'
  },
  {
    value: { id: '5422', name: 'OX Fina US Dollar', decimal: '6', symbol: 'OX/USD' },
    label: 'OX/USD, OX Fina US Dollar'
  },
  {
    value: { id: '5425', name: 'Oxycoin US Dollar', decimal: '6', symbol: 'OXY/USD' },
    label: 'OXY/USD, Oxycoin US Dollar'
  },
  {
    value: { id: '5426', name: 'P7Coin Bitcoin', decimal: '8', symbol: 'P7C/BTC' },
    label: 'P7C/BTC, P7Coin Bitcoin'
  },
  {
    value: { id: '5427', name: 'P7Coin US Dollar', decimal: '6', symbol: 'P7C/USD' },
    label: 'P7C/USD, P7Coin US Dollar'
  },
  {
    value: { id: '5434', name: 'PCHAIN US Dollar', decimal: '8', symbol: 'PAI/USD' },
    label: 'PAI/USD, PCHAIN US Dollar'
  },
  {
    value: { id: '5435', name: 'Project Pai Bitcoin', decimal: '8', symbol: 'PAIp/BTC' },
    label: 'PAIp/BTC, Project Pai Bitcoin'
  },
  {
    value: { id: '5436', name: 'Project Pai Ethereum', decimal: '6', symbol: 'PAIp/ETH' },
    label: 'PAIp/ETH, Project Pai Ethereum'
  },
  {
    value: { id: '5437', name: 'Project Pai US Dollar', decimal: '6', symbol: 'PAIp/USD' },
    label: 'PAIp/USD, Project Pai US Dollar'
  },
  {
    value: { id: '5441', name: 'Pakcoin US Dollar', decimal: '6', symbol: 'PAK/USD' },
    label: 'PAK/USD, Pakcoin US Dollar'
  },
  {
    value: { id: '5442', name: 'Particl Bitcoin', decimal: '6', symbol: 'PART/BTC' },
    label: 'PART/BTC, Particl Bitcoin'
  },
  {
    value: { id: '5443', name: 'Particl US Dollar', decimal: '4', symbol: 'PART/USD' },
    label: 'PART/USD, Particl US Dollar'
  },
  {
    value: { id: '5445', name: 'Pascal Coin US Dollar', decimal: '5', symbol: 'PASC/USD' },
    label: 'PASC/USD, Pascal Coin US Dollar'
  },
  {
    value: { id: '5446', name: 'Pascal Lite Bitcoin', decimal: '8', symbol: 'PASL/BTC' },
    label: 'PASL/BTC, Pascal Lite Bitcoin'
  },
  {
    value: { id: '5449', name: 'Pascal Lite US Dollar', decimal: '6', symbol: 'PASL/USD' },
    label: 'PASL/USD, Pascal Lite US Dollar'
  },
  {
    value: { id: '5453', name: 'Paxos Standard Token Bitcoin', decimal: '8', symbol: 'PAX/BTC' },
    label: 'PAX/BTC, Paxos Standard Token Bitcoin'
  },
  {
    value: { id: '5454', name: 'Paxos Standard Token Ethereum', decimal: '8', symbol: 'PAX/ETH' },
    label: 'PAX/ETH, Paxos Standard Token Ethereum'
  },
  {
    value: { id: '5455', name: 'Paxos Standard Token US Dollar', decimal: '4', symbol: 'PAX/USD' },
    label: 'PAX/USD, Paxos Standard Token US Dollar'
  },
  {
    value: { id: '5456', name: 'Paxos Standard Token XRP', decimal: '4', symbol: 'PAX/XRP' },
    label: 'PAX/XRP, Paxos Standard Token XRP'
  },
  {
    value: { id: '5457', name: 'TenX Bitcoin', decimal: '6', symbol: 'PAY/BTC' },
    label: 'PAY/BTC, TenX Bitcoin'
  },
  {
    value: { id: '5459', name: 'TenX Ethereum', decimal: '6', symbol: 'PAY/ETH' },
    label: 'PAY/ETH, TenX Ethereum'
  },
  {
    value: { id: '5464', name: 'PayPeer Bitcoin', decimal: '8', symbol: 'PAYP/BTC' },
    label: 'PAYP/BTC, PayPeer Bitcoin'
  },
  {
    value: { id: '5465', name: 'PayPeer US Dollar', decimal: '8', symbol: 'PAYP/USD' },
    label: 'PAYP/USD, PayPeer US Dollar'
  },
  {
    value: { id: '5467', name: 'Paypex US Dollar', decimal: '4', symbol: 'PAYX/USD' },
    label: 'PAYX/USD, Paypex US Dollar'
  },
  {
    value: { id: '5468', name: 'Publica Bitcoin', decimal: '8', symbol: 'PBL/BTC' },
    label: 'PBL/BTC, Publica Bitcoin'
  },
  {
    value: { id: '5472', name: 'Publica US Dollar', decimal: '5', symbol: 'PBL/USD' },
    label: 'PBL/USD, Publica US Dollar'
  },
  {
    value: { id: '5474', name: 'Primalbase Token US Dollar', decimal: '2', symbol: 'PBT/USD' },
    label: 'PBT/USD, Primalbase Token US Dollar'
  },
  {
    value: { id: '5477', name: 'Peculium US Dollar', decimal: '8', symbol: 'PCL/USD' },
    label: 'PCL/USD, Peculium US Dollar'
  },
  {
    value: { id: '5480', name: 'PeepCoin US Dollar', decimal: '8', symbol: 'PCN/USD' },
    label: 'PCN/USD, PeepCoin US Dollar'
  },
  {
    value: { id: '5484', name: 'Pioneer Coin US Dollar', decimal: '6', symbol: 'PCOIN/USD' },
    label: 'PCOIN/USD, Pioneer Coin US Dollar'
  },
  {
    value: { id: '5485', name: 'Pabyosi Coin (Special) Bitcoin', decimal: '8', symbol: 'PCS/BTC' },
    label: 'PCS/BTC, Pabyosi Coin (Special) Bitcoin'
  },
  {
    value: {
      id: '5486',
      name: 'Pabyosi Coin (Special) US Dollar',
      decimal: '5',
      symbol: 'PCS/USD'
    },
    label: 'PCS/USD, Pabyosi Coin (Special) US Dollar'
  },
  {
    value: { id: '5487', name: 'Project Decorum Bitcoin', decimal: '8', symbol: 'PDC/BTC' },
    label: 'PDC/BTC, Project Decorum Bitcoin'
  },
  {
    value: { id: '5488', name: 'Project Decorum US Dollar', decimal: '6', symbol: 'PDC/USD' },
    label: 'PDC/USD, Project Decorum US Dollar'
  },
  {
    value: { id: '5489', name: 'Penguin Coin Bitcoin', decimal: '8', symbol: 'PENG/BTC' },
    label: 'PENG/BTC, Penguin Coin Bitcoin'
  },
  {
    value: { id: '5490', name: 'Penguin Coin Dogecoin', decimal: '8', symbol: 'PENG/DOGE' },
    label: 'PENG/DOGE, Penguin Coin Dogecoin'
  },
  {
    value: { id: '5491', name: 'Penguin Coin Litecoin', decimal: '8', symbol: 'PENG/LTC' },
    label: 'PENG/LTC, Penguin Coin Litecoin'
  },
  {
    value: { id: '5492', name: 'Penguin Coin US Dollar', decimal: '6', symbol: 'PENG/USD' },
    label: 'PENG/USD, Penguin Coin US Dollar'
  },
  {
    value: { id: '5496', name: 'PosEx Bitcoin', decimal: '8', symbol: 'PEX/BTC' },
    label: 'PEX/BTC, PosEx Bitcoin'
  },
  {
    value: { id: '5497', name: 'PosEx US Dollar', decimal: '6', symbol: 'PEX/USD' },
    label: 'PEX/USD, PosEx US Dollar'
  },
  {
    value: { id: '5498', name: 'Prime-Ex Perpetual Bitcoin', decimal: '8', symbol: 'PEXT/BTC' },
    label: 'PEXT/BTC, Prime-Ex Perpetual Bitcoin'
  },
  {
    value: { id: '5499', name: 'Prime-Ex Perpetual Dogecoin', decimal: '4', symbol: 'PEXT/DOGE' },
    label: 'PEXT/DOGE, Prime-Ex Perpetual Dogecoin'
  },
  {
    value: { id: '5500', name: 'Prime-Ex Perpetual Ethereum', decimal: '8', symbol: 'PEXT/ETH' },
    label: 'PEXT/ETH, Prime-Ex Perpetual Ethereum'
  },
  {
    value: {
      id: '5501',
      name: 'Prime-Ex Perpetual Russian Ruble',
      decimal: '5',
      symbol: 'PEXT/RUB'
    },
    label: 'PEXT/RUB, Prime-Ex Perpetual Russian Ruble'
  },
  {
    value: { id: '5502', name: 'Prime-Ex Perpetual US Dollar', decimal: '6', symbol: 'PEXT/USD' },
    label: 'PEXT/USD, Prime-Ex Perpetual US Dollar'
  },
  {
    value: { id: '5503', name: 'Prime-Ex Perpetual Waves', decimal: '6', symbol: 'PEXT/WAVES' },
    label: 'PEXT/WAVES, Prime-Ex Perpetual Waves'
  },
  {
    value: { id: '5506', name: 'Prospectors Gold Bitcoin', decimal: '8', symbol: 'PGL/BTC' },
    label: 'PGL/BTC, Prospectors Gold Bitcoin'
  },
  {
    value: { id: '5507', name: 'Prospectors Gold US Dollar', decimal: '6', symbol: 'PGL/USD' },
    label: 'PGL/USD, Prospectors Gold US Dollar'
  },
  {
    value: { id: '5509', name: 'Photon Litecoin', decimal: '8', symbol: 'PHO/LTC' },
    label: 'PHO/LTC, Photon Litecoin'
  },
  {
    value: { id: '5510', name: 'Photon US Dollar', decimal: '8', symbol: 'PHO/USD' },
    label: 'PHO/USD, Photon US Dollar'
  },
  {
    value: { id: '5514', name: 'Phore US Dollar', decimal: '5', symbol: 'PHR/USD' },
    label: 'PHR/USD, Phore US Dollar'
  },
  {
    value: { id: '5515', name: 'Philosopher Stones Bitcoin', decimal: '8', symbol: 'PHS/BTC' },
    label: 'PHS/BTC, Philosopher Stones Bitcoin'
  },
  {
    value: { id: '5518', name: 'Philosopher Stones US Dollar', decimal: '6', symbol: 'PHS/USD' },
    label: 'PHS/USD, Philosopher Stones US Dollar'
  },
  {
    value: { id: '5519', name: 'Red Pulse Phoenix Bitcoin', decimal: '8', symbol: 'PHX/BTC' },
    label: 'PHX/BTC, Red Pulse Phoenix Bitcoin'
  },
  {
    value: { id: '5521', name: 'Red Pulse Phoenix Euro', decimal: '6', symbol: 'PHX/EUR' },
    label: 'PHX/EUR, Red Pulse Phoenix Euro'
  },
  {
    value: { id: '5522', name: 'Red Pulse Phoenix US Dollar', decimal: '6', symbol: 'PHX/USD' },
    label: 'PHX/USD, Red Pulse Phoenix US Dollar'
  },
  {
    value: { id: '5523', name: 'PIECoin Bitcoin', decimal: '8', symbol: 'PIE/BTC' },
    label: 'PIE/BTC, PIECoin Bitcoin'
  },
  {
    value: { id: '5524', name: 'PIECoin US Dollar', decimal: '6', symbol: 'PIE/USD' },
    label: 'PIE/USD, PIECoin US Dollar'
  },
  {
    value: { id: '5525', name: 'Piggycoin Bitcoin', decimal: '8', symbol: 'PIGGY/BTC' },
    label: 'PIGGY/BTC, Piggycoin Bitcoin'
  },
  {
    value: { id: '5528', name: 'Piggycoin US Dollar', decimal: '6', symbol: 'PIGGY/USD' },
    label: 'PIGGY/USD, Piggycoin US Dollar'
  },
  {
    value: { id: '5529', name: 'CryptoPing Bitcoin', decimal: '8', symbol: 'PING/BTC' },
    label: 'PING/BTC, CryptoPing Bitcoin'
  },
  {
    value: { id: '5531', name: 'CryptoPing US Dollar', decimal: '5', symbol: 'PING/USD' },
    label: 'PING/USD, CryptoPing US Dollar'
  },
  {
    value: { id: '5533', name: 'Pinkcoin Bitcoin', decimal: '8', symbol: 'PINK/BTC' },
    label: 'PINK/BTC, Pinkcoin Bitcoin'
  },
  {
    value: { id: '5537', name: 'PiplCoin Bitcoin', decimal: '8', symbol: 'PIPL/BTC' },
    label: 'PIPL/BTC, PiplCoin Bitcoin'
  },
  {
    value: { id: '5539', name: 'PiplCoin US Dollar', decimal: '6', symbol: 'PIPL/USD' },
    label: 'PIPL/USD, PiplCoin US Dollar'
  },
  {
    value: { id: '5540', name: 'Pirl Bitcoin', decimal: '8', symbol: 'PIRL/BTC' },
    label: 'PIRL/BTC, Pirl Bitcoin'
  },
  {
    value: { id: '5543', name: 'Pirl US Dollar', decimal: '5', symbol: 'PIRL/USD' },
    label: 'PIRL/USD, Pirl US Dollar'
  },
  {
    value: { id: '5545', name: 'PIVX Bitcoin', decimal: '6', symbol: 'PIVX/BTC' },
    label: 'PIVX/BTC, PIVX Bitcoin'
  },
  {
    value: { id: '5550', name: 'PIVX US Dollar', decimal: '5', symbol: 'PIVX/USD' },
    label: 'PIVX/USD, PIVX US Dollar'
  },
  {
    value: { id: '5553', name: 'Lampix US Dollar', decimal: '6', symbol: 'PIX/USD' },
    label: 'PIX/USD, Lampix US Dollar'
  },
  {
    value: { id: '5556', name: 'ParkByte US Dollar', decimal: '6', symbol: 'PKB/USD' },
    label: 'PKB/USD, ParkByte US Dollar'
  },
  {
    value: { id: '5559', name: 'Playkey US Dollar', decimal: '5', symbol: 'PKT/USD' },
    label: 'PKT/USD, Playkey US Dollar'
  },
  {
    value: { id: '5560', name: 'PlayerCoin Bitcoin', decimal: '8', symbol: 'PLACO/BTC' },
    label: 'PLACO/BTC, PlayerCoin Bitcoin'
  },
  {
    value: { id: '5561', name: 'PlayerCoin US Dollar', decimal: '6', symbol: 'PLACO/USD' },
    label: 'PLACO/USD, PlayerCoin US Dollar'
  },
  {
    value: { id: '5562', name: 'Polybius Bitcoin', decimal: '6', symbol: 'PLBT/BTC' },
    label: 'PLBT/BTC, Polybius Bitcoin'
  },
  {
    value: { id: '5563', name: 'Polybius Ethereum', decimal: '6', symbol: 'PLBT/ETH' },
    label: 'PLBT/ETH, Polybius Ethereum'
  },
  {
    value: { id: '5564', name: 'Polybius US Dollar', decimal: '8', symbol: 'PLBT/USD' },
    label: 'PLBT/USD, Polybius US Dollar'
  },
  {
    value: { id: '5565', name: 'PlusCoin Bitcoin', decimal: '8', symbol: 'PLC/BTC' },
    label: 'PLC/BTC, PlusCoin Bitcoin'
  },
  {
    value: { id: '5569', name: 'PlusCoin US Dollar', decimal: '6', symbol: 'PLC/USD' },
    label: 'PLC/USD, PlusCoin US Dollar'
  },
  {
    value: { id: '5570', name: 'PLNcoin Bitcoin', decimal: '8', symbol: 'PLNC/BTC' },
    label: 'PLNC/BTC, PLNcoin Bitcoin'
  },
  {
    value: { id: '5571', name: 'PLNcoin US Dollar', decimal: '6', symbol: 'PLNC/USD' },
    label: 'PLNC/USD, PLNcoin US Dollar'
  },
  {
    value: { id: '5572', name: 'Pillar Bitcoin', decimal: '8', symbol: 'PLR/BTC' },
    label: 'PLR/BTC, Pillar Bitcoin'
  },
  {
    value: { id: '5574', name: 'Pillar Ethereum', decimal: '6', symbol: 'PLR/ETH' },
    label: 'PLR/ETH, Pillar Ethereum'
  },
  {
    value: { id: '5576', name: 'Pillar US Dollar', decimal: '5', symbol: 'PLR/USD' },
    label: 'PLR/USD, Pillar US Dollar'
  },
  {
    value: { id: '5579', name: 'PlatonCoin US Dollar', decimal: '6', symbol: 'PLTC/USD' },
    label: 'PLTC/USD, PlatonCoin US Dollar'
  },
  {
    value: { id: '5580', name: 'PlexCoin Bitcoin', decimal: '8', symbol: 'PLX/BTC' },
    label: 'PLX/BTC, PlexCoin Bitcoin'
  },
  {
    value: { id: '5584', name: 'PlexCoin US Dollar', decimal: '6', symbol: 'PLX/USD' },
    label: 'PLX/USD, PlexCoin US Dollar'
  },
  {
    value: { id: '5585', name: 'PumaPay Bitcoin', decimal: '8', symbol: 'PMA/BTC' },
    label: 'PMA/BTC, PumaPay Bitcoin'
  },
  {
    value: { id: '5586', name: 'PumaPay US Dollar', decimal: '5', symbol: 'PMA/USD' },
    label: 'PMA/USD, PumaPay US Dollar'
  },
  {
    value: { id: '5589', name: 'Paymon US Dollar', decimal: '8', symbol: 'PMNT/USD' },
    label: 'PMNT/USD, Paymon US Dollar'
  },
  {
    value: { id: '5594', name: 'Kleros Ethereum', decimal: '8', symbol: 'PNK/ETH' },
    label: 'PNK/ETH, Kleros Ethereum'
  },
  {
    value: { id: '5595', name: 'Kleros US Dollar', decimal: '8', symbol: 'PNK/USD' },
    label: 'PNK/USD, Kleros US Dollar'
  },
  {
    value: { id: '5597', name: 'POA Network Bitcoin', decimal: '8', symbol: 'POA/BTC' },
    label: 'POA/BTC, POA Network Bitcoin'
  },
  {
    value: { id: '5599', name: 'POA Network US Dollar', decimal: '5', symbol: 'POA/USD' },
    label: 'POA/USD, POA Network US Dollar'
  },
  {
    value: { id: '5600', name: 'Po.et Bitcoin', decimal: '8', symbol: 'POE/BTC' },
    label: 'POE/BTC, Po.et Bitcoin'
  },
  {
    value: { id: '5602', name: 'Po.et US Dollar', decimal: '6', symbol: 'POE/USD' },
    label: 'POE/USD, Po.et US Dollar'
  },
  {
    value: { id: '5603', name: 'PokeCoin Bitcoin', decimal: '8', symbol: 'POKE/BTC' },
    label: 'POKE/BTC, PokeCoin Bitcoin'
  },
  {
    value: { id: '5604', name: 'PokeCoin US Dollar', decimal: '8', symbol: 'POKE/USD' },
    label: 'POKE/USD, PokeCoin US Dollar'
  },
  {
    value: { id: '5611', name: 'Polymath Bitcoin', decimal: '8', symbol: 'POLY/BTC' },
    label: 'POLY/BTC, Polymath Bitcoin'
  },
  {
    value: { id: '5613', name: 'Polymath Korean Won', decimal: '2', symbol: 'POLY/KRW' },
    label: 'POLY/KRW, Polymath Korean Won'
  },
  {
    value: { id: '5614', name: 'Polymath US Dollar', decimal: '5', symbol: 'POLY/USD' },
    label: 'POLY/USD, Polymath US Dollar'
  },
  {
    value: { id: '5615', name: 'Polymath XRP', decimal: '3', symbol: 'POLY/XRP' },
    label: 'POLY/XRP, Polymath XRP'
  },
  {
    value: { id: '5616', name: 'PonziCoin Bitcoin', decimal: '8', symbol: 'PONZI/BTC' },
    label: 'PONZI/BTC, PonziCoin Bitcoin'
  },
  {
    value: { id: '5617', name: 'PonziCoin US Dollar', decimal: '6', symbol: 'PONZI/USD' },
    label: 'PONZI/USD, PonziCoin US Dollar'
  },
  {
    value: { id: '5621', name: 'PopularCoin US Dollar', decimal: '6', symbol: 'POP/USD' },
    label: 'POP/USD, PopularCoin US Dollar'
  },
  {
    value: { id: '5622', name: 'PoSToken Bitcoin', decimal: '8', symbol: 'POS/BTC' },
    label: 'POS/BTC, PoSToken Bitcoin'
  },
  {
    value: { id: '5624', name: 'PoSToken US Dollar', decimal: '6', symbol: 'POS/USD' },
    label: 'POS/USD, PoSToken US Dollar'
  },
  {
    value: { id: '5628', name: 'PostCoin US Dollar', decimal: '6', symbol: 'POST/USD' },
    label: 'POST/USD, PostCoin US Dollar'
  },
  {
    value: { id: '5636', name: 'PoSW Coin US Dollar', decimal: '6', symbol: 'POSW/USD' },
    label: 'POSW/USD, PoSW Coin US Dollar'
  },
  {
    value: { id: '5638', name: 'PotCoin Bitcoin', decimal: '8', symbol: 'POT/BTC' },
    label: 'POT/BTC, PotCoin Bitcoin'
  },
  {
    value: { id: '5642', name: 'Power Ledger Australian Dollar', decimal: '4', symbol: 'POWR/AUD' },
    label: 'POWR/AUD, Power Ledger Australian Dollar'
  },
  {
    value: { id: '5644', name: 'Power Ledger Bitcoin', decimal: '7', symbol: 'POWR/BTC' },
    label: 'POWR/BTC, Power Ledger Bitcoin'
  },
  {
    value: { id: '5646', name: 'Power Ledger Ethereum', decimal: '6', symbol: 'POWR/ETH' },
    label: 'POWR/ETH, Power Ledger Ethereum'
  },
  {
    value: { id: '5647', name: 'Power Ledger Korean Won', decimal: '2', symbol: 'POWR/KRW' },
    label: 'POWR/KRW, Power Ledger Korean Won'
  },
  {
    value: { id: '5650', name: 'Power Ledger US Dollar', decimal: '5', symbol: 'POWR/USD' },
    label: 'POWR/USD, Power Ledger US Dollar'
  },
  {
    value: { id: '5651', name: 'Peercoin Bitcoin', decimal: '6', symbol: 'PPC/BTC' },
    label: 'PPC/BTC, Peercoin Bitcoin'
  },
  {
    value: { id: '5654', name: 'Peercoin US Dollar', decimal: '6', symbol: 'PPC/USD' },
    label: 'PPC/USD, Peercoin US Dollar'
  },
  {
    value: { id: '5656', name: 'PayPie US Dollar', decimal: '5', symbol: 'PPP/USD' },
    label: 'PPP/USD, PayPie US Dollar'
  },
  {
    value: { id: '5657', name: 'Populous Bitcoin', decimal: '6', symbol: 'PPT/BTC' },
    label: 'PPT/BTC, Populous Bitcoin'
  },
  {
    value: { id: '5659', name: 'Populous Euro', decimal: '4', symbol: 'PPT/EUR' },
    label: 'PPT/EUR, Populous Euro'
  },
  {
    value: { id: '5661', name: 'Populous US Dollar', decimal: '4', symbol: 'PPT/USD' },
    label: 'PPT/USD, Populous US Dollar'
  },
  {
    value: { id: '5662', name: 'Peerplays Bitcoin', decimal: '6', symbol: 'PPY/BTC' },
    label: 'PPY/BTC, Peerplays Bitcoin'
  },
  {
    value: { id: '5663', name: 'Peerplays US Dollar', decimal: '4', symbol: 'PPY/USD' },
    label: 'PPY/USD, Peerplays US Dollar'
  },
  {
    value: { id: '5664', name: 'Prototanium Bitcoin', decimal: '6', symbol: 'PR/BTC' },
    label: 'PR/BTC, Prototanium Bitcoin'
  },
  {
    value: { id: '5667', name: 'Prototanium US Dollar', decimal: '5', symbol: 'PR/USD' },
    label: 'PR/USD, Prototanium US Dollar'
  },
  {
    value: { id: '5671', name: 'Presearch Bitcoin', decimal: '8', symbol: 'PRE/BTC' },
    label: 'PRE/BTC, Presearch Bitcoin'
  },
  {
    value: { id: '5673', name: 'Presearch US Dollar', decimal: '5', symbol: 'PRE/USD' },
    label: 'PRE/USD, Presearch US Dollar'
  },
  {
    value: { id: '5674', name: 'President Trump Bitcoin', decimal: '8', symbol: 'PRES/BTC' },
    label: 'PRES/BTC, President Trump Bitcoin'
  },
  {
    value: { id: '5675', name: 'President Trump US Dollar', decimal: '6', symbol: 'PRES/USD' },
    label: 'PRES/USD, President Trump US Dollar'
  },
  {
    value: { id: '5679', name: 'Primulon Bitcoin', decimal: '8', symbol: 'PRIMU/BTC' },
    label: 'PRIMU/BTC, Primulon Bitcoin'
  },
  {
    value: { id: '5680', name: 'Primulon US Dollar', decimal: '6', symbol: 'PRIMU/USD' },
    label: 'PRIMU/USD, Primulon US Dollar'
  },
  {
    value: { id: '5681', name: 'Privatix Bitcoin', decimal: '6', symbol: 'PRIX/BTC' },
    label: 'PRIX/BTC, Privatix Bitcoin'
  },
  {
    value: { id: '5683', name: 'Privatix US Dollar', decimal: '4', symbol: 'PRIX/USD' },
    label: 'PRIX/USD, Privatix US Dollar'
  },
  {
    value: { id: '5684', name: 'Oyster Pearl Bitcoin', decimal: '8', symbol: 'PRL/BTC' },
    label: 'PRL/BTC, Oyster Pearl Bitcoin'
  },
  {
    value: { id: '5689', name: 'Oyster Pearl US Dollar', decimal: '5', symbol: 'PRL/USD' },
    label: 'PRL/USD, Oyster Pearl US Dollar'
  },
  {
    value: { id: '5690', name: 'PrismChain Bitcoin', decimal: '8', symbol: 'PRM/BTC' },
    label: 'PRM/BTC, PrismChain Bitcoin'
  },
  {
    value: { id: '5691', name: 'PrismChain US Dollar', decimal: '6', symbol: 'PRM/USD' },
    label: 'PRM/USD, PrismChain US Dollar'
  },
  {
    value: { id: '5695', name: 'Protean US Dollar', decimal: '8', symbol: 'PRN/USD' },
    label: 'PRN/USD, Protean US Dollar'
  },
  {
    value: { id: '5702', name: 'ProCurrency US Dollar', decimal: '6', symbol: 'PROC/USD' },
    label: 'PROC/USD, ProCurrency US Dollar'
  },
  {
    value: { id: '5703', name: 'PressOne Bitcoin', decimal: '8', symbol: 'PRS/BTC' },
    label: 'PRS/BTC, PressOne Bitcoin'
  },
  {
    value: { id: '5704', name: 'PressOne Ethereum', decimal: '8', symbol: 'PRS/ETH' },
    label: 'PRS/ETH, PressOne Ethereum'
  },
  {
    value: { id: '5705', name: 'PressOne US Dollar', decimal: '5', symbol: 'PRS/USD' },
    label: 'PRS/USD, PressOne US Dollar'
  },
  {
    value: { id: '5706', name: 'Printerium Bitcoin', decimal: '8', symbol: 'PRX/BTC' },
    label: 'PRX/BTC, Printerium Bitcoin'
  },
  {
    value: { id: '5707', name: 'Printerium US Dollar', decimal: '6', symbol: 'PRX/USD' },
    label: 'PRX/USD, Printerium US Dollar'
  },
  {
    value: { id: '5708', name: 'Primas Bitcoin', decimal: '8', symbol: 'PST/BTC' },
    label: 'PST/BTC, Primas Bitcoin'
  },
  {
    value: { id: '5709', name: 'Primas Ethereum', decimal: '6', symbol: 'PST/ETH' },
    label: 'PST/ETH, Primas Ethereum'
  },
  {
    value: { id: '5710', name: 'Primas US Dollar', decimal: '5', symbol: 'PST/USD' },
    label: 'PST/USD, Primas US Dollar'
  },
  {
    value: { id: '5711', name: 'Psilocybin Bitcoin', decimal: '8', symbol: 'PSY/BTC' },
    label: 'PSY/BTC, Psilocybin Bitcoin'
  },
  {
    value: { id: '5712', name: 'Psilocybin US Dollar', decimal: '6', symbol: 'PSY/USD' },
    label: 'PSY/USD, Psilocybin US Dollar'
  },
  {
    value: { id: '5716', name: 'Pesetacoin US Dollar', decimal: '6', symbol: 'PTC/USD' },
    label: 'PTC/USD, Pesetacoin US Dollar'
  },
  {
    value: { id: '5717', name: 'Patientory Bitcoin', decimal: '8', symbol: 'PTOY/BTC' },
    label: 'PTOY/BTC, Patientory Bitcoin'
  },
  {
    value: { id: '5720', name: 'Proton Token Bitcoin', decimal: '8', symbol: 'PTT/BTC' },
    label: 'PTT/BTC, Proton Token Bitcoin'
  },
  {
    value: { id: '5721', name: 'Proton Token Ethereum', decimal: '8', symbol: 'PTT/ETH' },
    label: 'PTT/ETH, Proton Token Ethereum'
  },
  {
    value: { id: '5722', name: 'Proton Token US Dollar', decimal: '6', symbol: 'PTT/USD' },
    label: 'PTT/USD, Proton Token US Dollar'
  },
  {
    value: { id: '5723', name: 'Pulse Bitcoin', decimal: '8', symbol: 'PULSE/BTC' },
    label: 'PULSE/BTC, Pulse Bitcoin'
  },
  {
    value: { id: '5724', name: 'Pulse US Dollar', decimal: '6', symbol: 'PULSE/USD' },
    label: 'PULSE/USD, Pulse US Dollar'
  },
  {
    value: { id: '5725', name: 'Pura Bitcoin', decimal: '7', symbol: 'PURA/BTC' },
    label: 'PURA/BTC, Pura Bitcoin'
  },
  {
    value: { id: '5729', name: 'Pura US Dollar', decimal: '5', symbol: 'PURA/USD' },
    label: 'PURA/USD, Pura US Dollar'
  },
  {
    value: { id: '5730', name: 'Pure Bitcoin', decimal: '7', symbol: 'PURE/BTC' },
    label: 'PURE/BTC, Pure Bitcoin'
  },
  {
    value: { id: '5731', name: 'Pure US Dollar', decimal: '5', symbol: 'PURE/USD' },
    label: 'PURE/USD, Pure US Dollar'
  },
  {
    value: { id: '5737', name: 'PutinCoin US Dollar', decimal: '6', symbol: 'PUT/USD' },
    label: 'PUT/USD, PutinCoin US Dollar'
  },
  {
    value: { id: '5738', name: 'PX Bitcoin', decimal: '8', symbol: 'PX/BTC' },
    label: 'PX/BTC, PX Bitcoin'
  },
  {
    value: { id: '5739', name: 'PX US Dollar', decimal: '6', symbol: 'PX/USD' },
    label: 'PX/USD, PX US Dollar'
  },
  {
    value: { id: '5740', name: 'Phoenixcoin Bitcoin', decimal: '8', symbol: 'PXC/BTC' },
    label: 'PXC/BTC, Phoenixcoin Bitcoin'
  },
  {
    value: { id: '5743', name: 'Phoenixcoin US Dollar', decimal: '6', symbol: 'PXC/USD' },
    label: 'PXC/USD, Phoenixcoin US Dollar'
  },
  {
    value: { id: '5747', name: 'Prime-XI US Dollar', decimal: '6', symbol: 'PXI/USD' },
    label: 'PXI/USD, Prime-XI US Dollar'
  },
  {
    value: { id: '5748', name: 'PRIZM Bitcoin', decimal: '6', symbol: 'PZM/BTC' },
    label: 'PZM/BTC, PRIZM Bitcoin'
  },
  {
    value: { id: '5749', name: 'PRIZM US Dollar', decimal: '5', symbol: 'PZM/USD' },
    label: 'PZM/USD, PRIZM US Dollar'
  },
  {
    value: { id: '5753', name: 'QubitCoin US Dollar', decimal: '6', symbol: 'Q2C/USD' },
    label: 'Q2C/USD, QubitCoin US Dollar'
  },
  {
    value: { id: '5754', name: 'QASH Australian Dollar', decimal: '5', symbol: 'QASH/AUD' },
    label: 'QASH/AUD, QASH Australian Dollar'
  },
  {
    value: { id: '5755', name: 'QASH Bitcoin', decimal: '7', symbol: 'QASH/BTC' },
    label: 'QASH/BTC, QASH Bitcoin'
  },
  {
    value: { id: '5757', name: 'QASH Euro', decimal: '5', symbol: 'QASH/EUR' },
    label: 'QASH/EUR, QASH Euro'
  },
  {
    value: { id: '5759', name: 'QASH Japanese Yen', decimal: '3', symbol: 'QASH/JPY' },
    label: 'QASH/JPY, QASH Japanese Yen'
  },
  {
    value: { id: '5760', name: 'QASH Korean Won', decimal: '0', symbol: 'QASH/KRW' },
    label: 'QASH/KRW, QASH Korean Won'
  },
  {
    value: { id: '5761', name: 'QASH Singapore Dollar', decimal: '5', symbol: 'QASH/SGD' },
    label: 'QASH/SGD, QASH Singapore Dollar'
  },
  {
    value: { id: '5762', name: 'QASH US Dollar', decimal: '5', symbol: 'QASH/USD' },
    label: 'QASH/USD, QASH US Dollar'
  },
  {
    value: { id: '5763', name: 'Quantum Bitcoin', decimal: '6', symbol: 'QAU/BTC' },
    label: 'QAU/BTC, Quantum Bitcoin'
  },
  {
    value: { id: '5765', name: 'Quantum US Dollar', decimal: '6', symbol: 'QAU/USD' },
    label: 'QAU/USD, Quantum US Dollar'
  },
  {
    value: { id: '5766', name: 'Quebecoin Bitcoin', decimal: '8', symbol: 'QBC/BTC' },
    label: 'QBC/BTC, Quebecoin Bitcoin'
  },
  {
    value: { id: '5767', name: 'Quebecoin US Dollar', decimal: '6', symbol: 'QBC/USD' },
    label: 'QBC/USD, Quebecoin US Dollar'
  },
  {
    value: { id: '5770', name: 'Qbao Ethereum', decimal: '6', symbol: 'QBT/ETH' },
    label: 'QBT/ETH, Qbao Ethereum'
  },
  {
    value: { id: '5772', name: 'Qbao Qtum', decimal: '6', symbol: 'QBT/QTUM' },
    label: 'QBT/QTUM, Qbao Qtum'
  },
  {
    value: { id: '5773', name: 'Qbao US Dollar', decimal: '5', symbol: 'QBT/USD' },
    label: 'QBT/USD, Qbao US Dollar'
  },
  {
    value: { id: '5774', name: 'QuarkChain Bitcoin', decimal: '8', symbol: 'QKC/BTC' },
    label: 'QKC/BTC, QuarkChain Bitcoin'
  },
  {
    value: { id: '5775', name: 'QuarkChain Ethereum', decimal: '6', symbol: 'QKC/ETH' },
    label: 'QKC/ETH, QuarkChain Ethereum'
  },
  {
    value: { id: '5777', name: 'QuarkChain US Dollar', decimal: '6', symbol: 'QKC/USD' },
    label: 'QKC/USD, QuarkChain US Dollar'
  },
  {
    value: { id: '5782', name: 'QLC Chain US Dollar', decimal: '6', symbol: 'QLC/USD' },
    label: 'QLC/USD, QLC Chain US Dollar'
  },
  {
    value: { id: '5783', name: 'Quant Bitcoin', decimal: '8', symbol: 'QNT/BTC' },
    label: 'QNT/BTC, Quant Bitcoin'
  },
  {
    value: { id: '5785', name: 'Quant US Dollar', decimal: '2', symbol: 'QNT/USD' },
    label: 'QNT/USD, Quant US Dollar'
  },
  {
    value: { id: '5789', name: 'Quark US Dollar', decimal: '6', symbol: 'QRK/USD' },
    label: 'QRK/USD, Quark US Dollar'
  },
  {
    value: {
      id: '5790',
      name: 'Quantum Resistant Ledger Bitcoin',
      decimal: '7',
      symbol: 'QRL/BTC'
    },
    label: 'QRL/BTC, Quantum Resistant Ledger Bitcoin'
  },
  {
    value: {
      id: '5792',
      name: 'Quantum Resistant Ledger US Dollar',
      decimal: '5',
      symbol: 'QRL/USD'
    },
    label: 'QRL/USD, Quantum Resistant Ledger US Dollar'
  },
  {
    value: { id: '5795', name: 'Quantstamp Bitcoin', decimal: '8', symbol: 'QSP/BTC' },
    label: 'QSP/BTC, Quantstamp Bitcoin'
  },
  {
    value: { id: '5796', name: 'Quantstamp Ethereum', decimal: '6', symbol: 'QSP/ETH' },
    label: 'QSP/ETH, Quantstamp Ethereum'
  },
  {
    value: { id: '5797', name: 'Quantstamp US Dollar', decimal: '5', symbol: 'QSP/USD' },
    label: 'QSP/USD, Quantstamp US Dollar'
  },
  {
    value: { id: '5798', name: 'Quatloo Bitcoin', decimal: '8', symbol: 'QTL/BTC' },
    label: 'QTL/BTC, Quatloo Bitcoin'
  },
  {
    value: { id: '5801', name: 'Quatloo US Dollar', decimal: '6', symbol: 'QTL/USD' },
    label: 'QTL/USD, Quatloo US Dollar'
  },
  {
    value: { id: '5802', name: 'Qtum Australian Dollar', decimal: '4', symbol: 'QTUM/AUD' },
    label: 'QTUM/AUD, Qtum Australian Dollar'
  },
  {
    value: { id: '5805', name: 'Qtum Bitcoin', decimal: '6', symbol: 'QTUM/BTC' },
    label: 'QTUM/BTC, Qtum Bitcoin'
  },
  {
    value: { id: '5807', name: 'Qtum Chinese Yuan', decimal: '3', symbol: 'QTUM/CNY' },
    label: 'QTUM/CNY, Qtum Chinese Yuan'
  },
  {
    value: { id: '5809', name: 'Qtum Ethereum', decimal: '6', symbol: 'QTUM/ETH' },
    label: 'QTUM/ETH, Qtum Ethereum'
  },
  {
    value: { id: '5810', name: 'Qtum Euro', decimal: '8', symbol: 'QTUM/EUR' },
    label: 'QTUM/EUR, Qtum Euro'
  },
  {
    value: { id: '5811', name: 'Qtum Hong Kong Dollar', decimal: '3', symbol: 'QTUM/HKD' },
    label: 'QTUM/HKD, Qtum Hong Kong Dollar'
  },
  {
    value: { id: '5813', name: 'Qtum Israeli Shekel', decimal: '3', symbol: 'QTUM/ILS' },
    label: 'QTUM/ILS, Qtum Israeli Shekel'
  },
  {
    value: { id: '5814', name: 'Qtum Indian Rupee', decimal: '2', symbol: 'QTUM/INR' },
    label: 'QTUM/INR, Qtum Indian Rupee'
  },
  {
    value: { id: '5816', name: 'Qtum Korean Won', decimal: '2', symbol: 'QTUM/KRW' },
    label: 'QTUM/KRW, Qtum Korean Won'
  },
  {
    value: { id: '5817', name: 'Qtum Mexican Peso', decimal: '2', symbol: 'QTUM/MXN' },
    label: 'QTUM/MXN, Qtum Mexican Peso'
  },
  {
    value: { id: '5818', name: 'Qtum Malaysian Ringgit', decimal: '3', symbol: 'QTUM/MYR' },
    label: 'QTUM/MYR, Qtum Malaysian Ringgit'
  },
  {
    value: { id: '5820', name: 'Qtum Polish Zloty', decimal: '3', symbol: 'QTUM/PLN' },
    label: 'QTUM/PLN, Qtum Polish Zloty'
  },
  {
    value: { id: '5821', name: 'Qtum Russian Ruble', decimal: '2', symbol: 'QTUM/RUB' },
    label: 'QTUM/RUB, Qtum Russian Ruble'
  },
  {
    value: { id: '5822', name: 'Qtum Saudi Riyal', decimal: '3', symbol: 'QTUM/SAR' },
    label: 'QTUM/SAR, Qtum Saudi Riyal'
  },
  {
    value: { id: '5823', name: 'Qtum Swedish Krona', decimal: '3', symbol: 'QTUM/SEK' },
    label: 'QTUM/SEK, Qtum Swedish Krona'
  },
  {
    value: { id: '5825', name: 'Qtum Turkish Lira', decimal: '3', symbol: 'QTUM/TRY' },
    label: 'QTUM/TRY, Qtum Turkish Lira'
  },
  {
    value: { id: '5826', name: 'Qtum US Dollar', decimal: '4', symbol: 'QTUM/USD' },
    label: 'QTUM/USD, Qtum US Dollar'
  },
  {
    value: { id: '5827', name: 'Qtum Vietnamese Dong', decimal: '0', symbol: 'QTUM/VND' },
    label: 'QTUM/VND, Qtum Vietnamese Dong'
  },
  {
    value: { id: '5828', name: 'Qtum South African Rand', decimal: '2', symbol: 'QTUM/ZAR' },
    label: 'QTUM/ZAR, Qtum South African Rand'
  },
  {
    value: { id: '5829', name: 'Quantis Network Bitcoin', decimal: '8', symbol: 'QUAN/BTC' },
    label: 'QUAN/BTC, Quantis Network Bitcoin'
  },
  {
    value: { id: '5830', name: 'Quantis Network US Dollar', decimal: '6', symbol: 'QUAN/USD' },
    label: 'QUAN/USD, Quantis Network US Dollar'
  },
  {
    value: { id: '5831', name: 'QunQun Bitcoin', decimal: '8', symbol: 'QUN/BTC' },
    label: 'QUN/BTC, QunQun Bitcoin'
  },
  {
    value: { id: '5832', name: 'QunQun Ethereum', decimal: '8', symbol: 'QUN/ETH' },
    label: 'QUN/ETH, QunQun Ethereum'
  },
  {
    value: { id: '5833', name: 'QunQun US Dollar', decimal: '6', symbol: 'QUN/USD' },
    label: 'QUN/USD, QunQun US Dollar'
  },
  {
    value: { id: '5836', name: 'Qvolta US Dollar', decimal: '5', symbol: 'QVT/USD' },
    label: 'QVT/USD, Qvolta US Dollar'
  },
  {
    value: { id: '5837', name: 'Qwark Bitcoin', decimal: '8', symbol: 'QWARK/BTC' },
    label: 'QWARK/BTC, Qwark Bitcoin'
  },
  {
    value: { id: '5840', name: 'Qwark US Dollar', decimal: '6', symbol: 'QWARK/USD' },
    label: 'QWARK/USD, Qwark US Dollar'
  },
  {
    value: { id: '5841', name: 'Revain Bitcoin', decimal: '7', symbol: 'R/BTC' },
    label: 'R/BTC, Revain Bitcoin'
  },
  {
    value: { id: '5845', name: 'Revain US Dollar', decimal: '5', symbol: 'R/USD' },
    label: 'R/USD, Revain US Dollar'
  },
  {
    value: { id: '5846', name: 'Radium Bitcoin', decimal: '8', symbol: 'RADS/BTC' },
    label: 'RADS/BTC, Radium Bitcoin'
  },
  {
    value: { id: '5848', name: 'Condensate Bitcoin', decimal: '8', symbol: 'RAIN/BTC' },
    label: 'RAIN/BTC, Condensate Bitcoin'
  },
  {
    value: { id: '5851', name: 'Condensate US Dollar', decimal: '6', symbol: 'RAIN/USD' },
    label: 'RAIN/USD, Condensate US Dollar'
  },
  {
    value: { id: '5855', name: 'Rubies Bitcoin', decimal: '8', symbol: 'RBIES/BTC' },
    label: 'RBIES/BTC, Rubies Bitcoin'
  },
  {
    value: { id: '5856', name: 'Rubies US Dollar', decimal: '6', symbol: 'RBIES/USD' },
    label: 'RBIES/USD, Rubies US Dollar'
  },
  {
    value: { id: '5860', name: 'Rimbit US Dollar', decimal: '6', symbol: 'RBT/USD' },
    label: 'RBT/USD, Rimbit US Dollar'
  },
  {
    value: { id: '5864', name: 'Rubycoin US Dollar', decimal: '5', symbol: 'RBY/USD' },
    label: 'RBY/USD, Rubycoin US Dollar'
  },
  {
    value: { id: '5865', name: 'RussiaCoin Bitcoin', decimal: '6', symbol: 'RC/BTC' },
    label: 'RC/BTC, RussiaCoin Bitcoin'
  },
  {
    value: { id: '5869', name: 'RussiaCoin US Dollar', decimal: '5', symbol: 'RC/USD' },
    label: 'RC/USD, RussiaCoin US Dollar'
  },
  {
    value: { id: '5871', name: 'Ripio Credit Network Bitcoin', decimal: '8', symbol: 'RCN/BTC' },
    label: 'RCN/BTC, Ripio Credit Network Bitcoin'
  },
  {
    value: { id: '5874', name: 'ReddCoin Bitcoin', decimal: '8', symbol: 'RDD/BTC' },
    label: 'RDD/BTC, ReddCoin Bitcoin'
  },
  {
    value: { id: '5877', name: 'ReddCoin US Dollar', decimal: '6', symbol: 'RDD/USD' },
    label: 'RDD/USD, ReddCoin US Dollar'
  },
  {
    value: { id: '5879', name: 'Raiden Network Token Bitcoin', decimal: '6', symbol: 'RDN/BTC' },
    label: 'RDN/BTC, Raiden Network Token Bitcoin'
  },
  {
    value: { id: '5884', name: 'REAL US Dollar', decimal: '5', symbol: 'REAL/USD' },
    label: 'REAL/USD, REAL US Dollar'
  },
  {
    value: { id: '5885', name: 'Regalcoin Bitcoin', decimal: '8', symbol: 'REC/BTC' },
    label: 'REC/BTC, Regalcoin Bitcoin'
  },
  {
    value: { id: '5887', name: 'Regalcoin US Dollar', decimal: '5', symbol: 'REC/USD' },
    label: 'REC/USD, Regalcoin US Dollar'
  },
  {
    value: { id: '5888', name: 'RedCoin Bitcoin', decimal: '8', symbol: 'RED/BTC' },
    label: 'RED/BTC, RedCoin Bitcoin'
  },
  {
    value: { id: '5891', name: 'RedCoin US Dollar', decimal: '6', symbol: 'RED/USD' },
    label: 'RED/USD, RedCoin US Dollar'
  },
  {
    value: { id: '5895', name: 'Regacoin Bitcoin', decimal: '8', symbol: 'REGA/BTC' },
    label: 'REGA/BTC, Regacoin Bitcoin'
  },
  {
    value: { id: '5896', name: 'Regacoin US Dollar', decimal: '6', symbol: 'REGA/USD' },
    label: 'REGA/USD, Regacoin US Dollar'
  },
  {
    value: { id: '5897', name: 'Remme Ethereum', decimal: '8', symbol: 'REM/ETH' },
    label: 'REM/ETH, Remme Ethereum'
  },
  {
    value: { id: '5898', name: 'Remme US Dollar', decimal: '8', symbol: 'REM/USD' },
    label: 'REM/USD, Remme US Dollar'
  },
  {
    value: { id: '5899', name: 'Ren Ethereum', decimal: '8', symbol: 'REN/ETH' },
    label: 'REN/ETH, Ren Ethereum'
  },
  {
    value: { id: '5900', name: 'Ren US Dollar', decimal: '8', symbol: 'REN/USD' },
    label: 'REN/USD, Ren US Dollar'
  },
  {
    value: { id: '5901', name: 'REOSC Bitcoin', decimal: '8', symbol: 'REOSC/BTC' },
    label: 'REOSC/BTC, REOSC Bitcoin'
  },
  {
    value: { id: '5902', name: 'REOSC US Dollar', decimal: '6', symbol: 'REOSC/USD' },
    label: 'REOSC/USD, REOSC US Dollar'
  },
  {
    value: { id: '5904', name: 'Augur Bitcoin', decimal: '6', symbol: 'REP/BTC' },
    label: 'REP/BTC, Augur Bitcoin'
  },
  {
    value: { id: '5906', name: 'Augur Ethereum', decimal: '6', symbol: 'REP/ETH' },
    label: 'REP/ETH, Augur Ethereum'
  },
  {
    value: { id: '5907', name: 'Augur Euro', decimal: '3', symbol: 'REP/EUR' },
    label: 'REP/EUR, Augur Euro'
  },
  {
    value: { id: '5908', name: 'Augur Korean Won', decimal: '0', symbol: 'REP/KRW' },
    label: 'REP/KRW, Augur Korean Won'
  },
  {
    value: { id: '5911', name: 'Augur US Dollar', decimal: '2', symbol: 'REP/USD' },
    label: 'REP/USD, Augur US Dollar'
  },
  {
    value: { id: '5914', name: 'Request Bitcoin', decimal: '8', symbol: 'REQ/BTC' },
    label: 'REQ/BTC, Request Bitcoin'
  },
  {
    value: { id: '5917', name: 'REX Ethereum', decimal: '6', symbol: 'REX/ETH' },
    label: 'REX/ETH, REX Ethereum'
  },
  {
    value: { id: '5918', name: 'REX US Dollar', decimal: '5', symbol: 'REX/USD' },
    label: 'REX/USD, REX US Dollar'
  },
  {
    value: { id: '5924', name: 'RChain US Dollar', decimal: '5', symbol: 'RHOC/USD' },
    label: 'RHOC/USD, RChain US Dollar'
  },
  {
    value: { id: '5925', name: 'Riecoin Bitcoin', decimal: '8', symbol: 'RIC/BTC' },
    label: 'RIC/BTC, Riecoin Bitcoin'
  },
  {
    value: { id: '5926', name: 'Riecoin US Dollar', decimal: '6', symbol: 'RIC/USD' },
    label: 'RIC/USD, Riecoin US Dollar'
  },
  {
    value: { id: '5927', name: 'RichCoin Bitcoin', decimal: '8', symbol: 'RICHX/BTC' },
    label: 'RICHX/BTC, RichCoin Bitcoin'
  },
  {
    value: { id: '5928', name: 'RichCoin US Dollar', decimal: '6', symbol: 'RICHX/USD' },
    label: 'RICHX/USD, RichCoin US Dollar'
  },
  {
    value: { id: '5929', name: 'Ride My Car Bitcoin', decimal: '8', symbol: 'RIDE/BTC' },
    label: 'RIDE/BTC, Ride My Car Bitcoin'
  },
  {
    value: { id: '5930', name: 'Ride My Car US Dollar', decimal: '6', symbol: 'RIDE/USD' },
    label: 'RIDE/USD, Ride My Car US Dollar'
  },
  {
    value: { id: '5932', name: 'Rise US Dollar', decimal: '5', symbol: 'RISE/USD' },
    label: 'RISE/USD, Rise US Dollar'
  },
  {
    value: { id: '5933', name: 'Etheriya Bitcoin', decimal: '6', symbol: 'RIYA/BTC' },
    label: 'RIYA/BTC, Etheriya Bitcoin'
  },
  {
    value: { id: '5936', name: 'Etheriya US Dollar', decimal: '5', symbol: 'RIYA/USD' },
    label: 'RIYA/USD, Etheriya US Dollar'
  },
  {
    value: { id: '5937', name: 'Royal Kingdom Coin Bitcoin', decimal: '8', symbol: 'RKC/BTC' },
    label: 'RKC/BTC, Royal Kingdom Coin Bitcoin'
  },
  {
    value: { id: '5941', name: 'Royal Kingdom Coin US Dollar', decimal: '6', symbol: 'RKC/USD' },
    label: 'RKC/USD, Royal Kingdom Coin US Dollar'
  },
  {
    value: { id: '5942', name: 'Rock US Dollar', decimal: '4', symbol: 'RKT/USD' },
    label: 'RKT/USD, Rock US Dollar'
  },
  {
    value: { id: '5943', name: 'iExec RLC Binance Coin', decimal: '6', symbol: 'RLC/BNB' },
    label: 'RLC/BNB, iExec RLC Binance Coin'
  },
  {
    value: { id: '5944', name: 'iExec RLC Bitcoin', decimal: '6', symbol: 'RLC/BTC' },
    label: 'RLC/BTC, iExec RLC Bitcoin'
  },
  {
    value: { id: '5948', name: 'RouletteToken Bitcoin', decimal: '8', symbol: 'RLT/BTC' },
    label: 'RLT/BTC, RouletteToken Bitcoin'
  },
  {
    value: { id: '5949', name: 'RouletteToken US Dollar', decimal: '6', symbol: 'RLT/USD' },
    label: 'RLT/USD, RouletteToken US Dollar'
  },
  {
    value: { id: '5950', name: 'Russian Miner Coin Bitcoin', decimal: '8', symbol: 'RMC/BTC' },
    label: 'RMC/BTC, Russian Miner Coin Bitcoin'
  },
  {
    value: { id: '5952', name: 'Russian Miner Coin US Dollar', decimal: '6', symbol: 'RMC/USD' },
    label: 'RMC/USD, Russian Miner Coin US Dollar'
  },
  {
    value: { id: '5953', name: 'SureRemit US Dollar', decimal: '4', symbol: 'RMT/USD' },
    label: 'RMT/USD, SureRemit US Dollar'
  },
  {
    value: { id: '5954', name: 'SureRemit Stellar', decimal: '4', symbol: 'RMT/XLM' },
    label: 'RMT/XLM, SureRemit Stellar'
  },
  {
    value: { id: '5955', name: 'Renos Bitcoin', decimal: '8', symbol: 'RNS/BTC' },
    label: 'RNS/BTC, Renos Bitcoin'
  },
  {
    value: { id: '5958', name: 'Renos US Dollar', decimal: '6', symbol: 'RNS/USD' },
    label: 'RNS/USD, Renos US Dollar'
  },
  {
    value: { id: '5959', name: 'OneRoot Network US Dollar', decimal: '4', symbol: 'RNT/USD' },
    label: 'RNT/USD, OneRoot Network US Dollar'
  },
  {
    value: { id: '5960', name: 'BitRent US Dollar', decimal: '4', symbol: 'RNTB/USD' },
    label: 'RNTB/USD, BitRent US Dollar'
  },
  {
    value: { id: '5961', name: 'Rasputin Online Coin Ethereum', decimal: '6', symbol: 'ROC/ETH' },
    label: 'ROC/ETH, Rasputin Online Coin Ethereum'
  },
  {
    value: { id: '5962', name: 'Rasputin Online Coin US Dollar', decimal: '8', symbol: 'ROC/USD' },
    label: 'ROC/USD, Rasputin Online Coin US Dollar'
  },
  {
    value: { id: '5963', name: 'Roofs Bitcoin', decimal: '8', symbol: 'ROOFS/BTC' },
    label: 'ROOFS/BTC, Roofs Bitcoin'
  },
  {
    value: { id: '5964', name: 'Roofs US Dollar', decimal: '6', symbol: 'ROOFS/USD' },
    label: 'ROOFS/USD, Roofs US Dollar'
  },
  {
    value: { id: '5965', name: 'RoyalCoin Bitcoin', decimal: '8', symbol: 'ROYAL/BTC' },
    label: 'ROYAL/BTC, RoyalCoin Bitcoin'
  },
  {
    value: { id: '5966', name: 'RoyalCoin US Dollar', decimal: '6', symbol: 'ROYAL/USD' },
    label: 'ROYAL/USD, RoyalCoin US Dollar'
  },
  {
    value: { id: '5970', name: 'RonPaulCoin US Dollar', decimal: '5', symbol: 'RPC/USD' },
    label: 'RPC/USD, RonPaulCoin US Dollar'
  },
  {
    value: { id: '5972', name: 'RSGPcoin Bitcoin', decimal: '6', symbol: 'RSGP/BTC' },
    label: 'RSGP/BTC, RSGPcoin Bitcoin'
  },
  {
    value: { id: '5973', name: 'RSGPcoin US Dollar', decimal: '4', symbol: 'RSGP/USD' },
    label: 'RSGP/USD, RSGPcoin US Dollar'
  },
  {
    value: { id: '5975', name: 'RubleBit Bitcoin', decimal: '8', symbol: 'RUBIT/BTC' },
    label: 'RUBIT/BTC, RubleBit Bitcoin'
  },
  {
    value: { id: '5976', name: 'RubleBit US Dollar', decimal: '6', symbol: 'RUBIT/USD' },
    label: 'RUBIT/USD, RubleBit US Dollar'
  },
  {
    value: { id: '5977', name: 'Ruff Bitcoin', decimal: '8', symbol: 'RUFF/BTC' },
    label: 'RUFF/BTC, Ruff Bitcoin'
  },
  {
    value: { id: '5978', name: 'Ruff Ethereum', decimal: '8', symbol: 'RUFF/ETH' },
    label: 'RUFF/ETH, Ruff Ethereum'
  },
  {
    value: { id: '5979', name: 'Ruff US Dollar', decimal: '6', symbol: 'RUFF/USD' },
    label: 'RUFF/USD, Ruff US Dollar'
  },
  {
    value: { id: '5980', name: 'Runners Bitcoin', decimal: '8', symbol: 'RUNNERS/BTC' },
    label: 'RUNNERS/BTC, Runners Bitcoin'
  },
  {
    value: { id: '5981', name: 'Runners US Dollar', decimal: '6', symbol: 'RUNNERS/USD' },
    label: 'RUNNERS/USD, Runners US Dollar'
  },
  {
    value: { id: '5983', name: 'Rupee US Dollar', decimal: '6', symbol: 'RUP/USD' },
    label: 'RUP/USD, Rupee US Dollar'
  },
  {
    value: { id: '5984', name: 'Rupaya Bitcoin', decimal: '8', symbol: 'RUPX/BTC' },
    label: 'RUPX/BTC, Rupaya Bitcoin'
  },
  {
    value: { id: '5985', name: 'Rupaya US Dollar', decimal: '6', symbol: 'RUPX/USD' },
    label: 'RUPX/USD, Rupaya US Dollar'
  },
  {
    value: { id: '5986', name: 'Ravencoin Binance Coin', decimal: '6', symbol: 'RVN/BNB' },
    label: 'RVN/BNB, Ravencoin Binance Coin'
  },
  {
    value: { id: '5987', name: 'Ravencoin Bitcoin', decimal: '8', symbol: 'RVN/BTC' },
    label: 'RVN/BTC, Ravencoin Bitcoin'
  },
  {
    value: { id: '5988', name: 'Ravencoin US Dollar', decimal: '6', symbol: 'RVN/USD' },
    label: 'RVN/USD, Ravencoin US Dollar'
  },
  {
    value: { id: '5991', name: 'Rivetz US Dollar', decimal: '5', symbol: 'RVT/USD' },
    label: 'RVT/USD, Rivetz US Dollar'
  },
  {
    value: { id: '5992', name: 'ANRYZE Bitcoin', decimal: '8', symbol: 'RYZ/BTC' },
    label: 'RYZ/BTC, ANRYZE Bitcoin'
  },
  {
    value: { id: '5993', name: 'ANRYZE US Dollar', decimal: '6', symbol: 'RYZ/USD' },
    label: 'RYZ/USD, ANRYZE US Dollar'
  },
  {
    value: { id: '5996', name: 'Safe Exchange Coin Bitcoin', decimal: '8', symbol: 'SAFEX/BTC' },
    label: 'SAFEX/BTC, Safe Exchange Coin Bitcoin'
  },
  {
    value: { id: '5999', name: 'Safe Exchange Coin US Dollar', decimal: '6', symbol: 'SAFEX/USD' },
    label: 'SAFEX/USD, Safe Exchange Coin US Dollar'
  },
  {
    value: { id: '6000', name: 'SagaCoin Bitcoin', decimal: '8', symbol: 'SAGA/BTC' },
    label: 'SAGA/BTC, SagaCoin Bitcoin'
  },
  {
    value: { id: '6003', name: 'SagaCoin US Dollar', decimal: '5', symbol: 'SAGA/USD' },
    label: 'SAGA/USD, SagaCoin US Dollar'
  },
  {
    value: { id: '6004', name: 'Sharkcoin Bitcoin', decimal: '8', symbol: 'SAK/BTC' },
    label: 'SAK/BTC, Sharkcoin Bitcoin'
  },
  {
    value: { id: '6007', name: 'Sharkcoin US Dollar', decimal: '6', symbol: 'SAK/USD' },
    label: 'SAK/USD, Sharkcoin US Dollar'
  },
  {
    value: { id: '6015', name: 'Save and Gain Bitcoin', decimal: '8', symbol: 'SANDG/BTC' },
    label: 'SANDG/BTC, Save and Gain Bitcoin'
  },
  {
    value: { id: '6016', name: 'Save and Gain US Dollar', decimal: '6', symbol: 'SANDG/USD' },
    label: 'SANDG/USD, Save and Gain US Dollar'
  },
  {
    value: { id: '6017', name: 'StrikeBitClub Bitcoin', decimal: '8', symbol: 'SBC/BTC' },
    label: 'SBC/BTC, StrikeBitClub Bitcoin'
  },
  {
    value: { id: '6020', name: 'StrikeBitClub US Dollar', decimal: '6', symbol: 'SBC/USD' },
    label: 'SBC/USD, StrikeBitClub US Dollar'
  },
  {
    value: { id: '6021', name: 'Steem Dollars Korean Won', decimal: '2', symbol: 'SBDR/KRW' },
    label: 'SBDR/KRW, Steem Dollars Korean Won'
  },
  {
    value: { id: '6022', name: 'Steem Dollars US Dollar', decimal: '4', symbol: 'SBDR/USD' },
    label: 'SBDR/USD, Steem Dollars US Dollar'
  },
  {
    value: { id: '6023', name: 'Super Bitcoin Bitcoin', decimal: '7', symbol: 'SBTC/BTC' },
    label: 'SBTC/BTC, Super Bitcoin Bitcoin'
  },
  {
    value: { id: '6024', name: 'Super Bitcoin US Dollar', decimal: '4', symbol: 'SBTC/USD' },
    label: 'SBTC/USD, Super Bitcoin US Dollar'
  },
  {
    value: { id: '6025', name: 'Siacoin Binance Coin', decimal: '6', symbol: 'SC/BNB' },
    label: 'SC/BNB, Siacoin Binance Coin'
  },
  {
    value: { id: '6026', name: 'Siacoin Bitcoin', decimal: '8', symbol: 'SC/BTC' },
    label: 'SC/BTC, Siacoin Bitcoin'
  },
  {
    value: { id: '6027', name: 'Siacoin Ethereum', decimal: '8', symbol: 'SC/ETH' },
    label: 'SC/ETH, Siacoin Ethereum'
  },
  {
    value: { id: '6028', name: 'Siacoin Korean Won', decimal: '2', symbol: 'SC/KRW' },
    label: 'SC/KRW, Siacoin Korean Won'
  },
  {
    value: { id: '6029', name: 'Siacoin US Dollar', decimal: '6', symbol: 'SC/USD' },
    label: 'SC/USD, Siacoin US Dollar'
  },
  {
    value: { id: '6034', name: 'Social US Dollar', decimal: '5', symbol: 'SCL/USD' },
    label: 'SCL/USD, Social US Dollar'
  },
  {
    value: { id: '6035', name: 'Scorecoin Bitcoin', decimal: '8', symbol: 'SCORE/BTC' },
    label: 'SCORE/BTC, Scorecoin Bitcoin'
  },
  {
    value: { id: '6036', name: 'Scorecoin US Dollar', decimal: '6', symbol: 'SCORE/USD' },
    label: 'SCORE/USD, Scorecoin US Dollar'
  },
  {
    value: { id: '6038', name: 'SCRL Ethereum', decimal: '8', symbol: 'SCRL/ETH' },
    label: 'SCRL/ETH, SCRL Ethereum'
  },
  {
    value: { id: '6039', name: 'SCRL US Dollar', decimal: '6', symbol: 'SCRL/USD' },
    label: 'SCRL/USD, SCRL US Dollar'
  },
  {
    value: { id: '6040', name: 'Scorum Coins Ethereum', decimal: '8', symbol: 'SCRM/ETH' },
    label: 'SCRM/ETH, Scorum Coins Ethereum'
  },
  {
    value: { id: '6041', name: 'Scorum Coins US Dollar', decimal: '4', symbol: 'SCRM/USD' },
    label: 'SCRM/USD, Scorum Coins US Dollar'
  },
  {
    value: { id: '6042', name: 'SecretCoin Bitcoin', decimal: '8', symbol: 'SCRT/BTC' },
    label: 'SCRT/BTC, SecretCoin Bitcoin'
  },
  {
    value: { id: '6043', name: 'SecretCoin US Dollar', decimal: '6', symbol: 'SCRT/USD' },
    label: 'SCRT/USD, SecretCoin US Dollar'
  },
  {
    value: { id: '6044', name: 'Speedcash Bitcoin', decimal: '8', symbol: 'SCS/BTC' },
    label: 'SCS/BTC, Speedcash Bitcoin'
  },
  {
    value: { id: '6045', name: 'Speedcash US Dollar', decimal: '5', symbol: 'SCS/USD' },
    label: 'SCS/USD, Speedcash US Dollar'
  },
  {
    value: { id: '6048', name: 'Soma US Dollar', decimal: '5', symbol: 'SCT/USD' },
    label: 'SCT/USD, Soma US Dollar'
  },
  {
    value: { id: '6049', name: 'ShadowCash Bitcoin', decimal: '8', symbol: 'SDC/BTC' },
    label: 'SDC/BTC, ShadowCash Bitcoin'
  },
  {
    value: { id: '6050', name: 'ShadowCash US Dollar', decimal: '6', symbol: 'SDC/USD' },
    label: 'SDC/USD, ShadowCash US Dollar'
  },
  {
    value: { id: '6051', name: 'SydPak Bitcoin', decimal: '8', symbol: 'SDP/BTC' },
    label: 'SDP/BTC, SydPak Bitcoin'
  },
  {
    value: { id: '6052', name: 'SydPak US Dollar', decimal: '6', symbol: 'SDP/USD' },
    label: 'SDP/USD, SydPak US Dollar'
  },
  {
    value: { id: '6053', name: 'Senderon Bitcoin', decimal: '8', symbol: 'SDRN/BTC' },
    label: 'SDRN/BTC, Senderon Bitcoin'
  },
  {
    value: { id: '6056', name: 'Senderon US Dollar', decimal: '6', symbol: 'SDRN/USD' },
    label: 'SDRN/USD, Senderon US Dollar'
  },
  {
    value: { id: '6057', name: 'Seele Ethereum', decimal: '4', symbol: 'SEELE/ETH' },
    label: 'SEELE/ETH, Seele Ethereum'
  },
  {
    value: { id: '6058', name: 'Seele US Dollar', decimal: '4', symbol: 'SEELE/USD' },
    label: 'SEELE/USD, Seele US Dollar'
  },
  {
    value: { id: '6062', name: 'Sequence US Dollar', decimal: '6', symbol: 'SEQ/USD' },
    label: 'SEQ/USD, Sequence US Dollar'
  },
  {
    value: { id: '6063', name: 'Solarflarecoin Bitcoin', decimal: '8', symbol: 'SFC/BTC' },
    label: 'SFC/BTC, Solarflarecoin Bitcoin'
  },
  {
    value: { id: '6066', name: 'Solarflarecoin US Dollar', decimal: '6', symbol: 'SFC/USD' },
    label: 'SFC/USD, Solarflarecoin US Dollar'
  },
  {
    value: { id: '6069', name: 'Sugar Exchange Bitcoin', decimal: '8', symbol: 'SGR/BTC' },
    label: 'SGR/BTC, Sugar Exchange Bitcoin'
  },
  {
    value: { id: '6071', name: 'Sugar Exchange US Dollar', decimal: '6', symbol: 'SGR/USD' },
    label: 'SGR/USD, Sugar Exchange US Dollar'
  },
  {
    value: { id: '6072', name: 'Shilling Bitcoin', decimal: '8', symbol: 'SH/BTC' },
    label: 'SH/BTC, Shilling Bitcoin'
  },
  {
    value: { id: '6073', name: 'Shilling US Dollar', decimal: '6', symbol: 'SH/USD' },
    label: 'SH/USD, Shilling US Dollar'
  },
  {
    value: { id: '6074', name: 'SHACoin Bitcoin', decimal: '8', symbol: 'SHA/BTC' },
    label: 'SHA/BTC, SHACoin Bitcoin'
  },
  {
    value: { id: '6077', name: 'SHACoin US Dollar', decimal: '6', symbol: 'SHA/USD' },
    label: 'SHA/USD, SHACoin US Dollar'
  },
  {
    value: { id: '6078', name: 'Shadow Token Bitcoin', decimal: '8', symbol: 'SHDW/BTC' },
    label: 'SHDW/BTC, Shadow Token Bitcoin'
  },
  {
    value: { id: '6079', name: 'Shadow Token US Dollar', decimal: '6', symbol: 'SHDW/USD' },
    label: 'SHDW/USD, Shadow Token US Dollar'
  },
  {
    value: { id: '6080', name: 'ShellCoin Bitcoin', decimal: '8', symbol: 'SHELL/BTC' },
    label: 'SHELL/BTC, ShellCoin Bitcoin'
  },
  {
    value: { id: '6081', name: 'ShellCoin US Dollar', decimal: '6', symbol: 'SHELL/USD' },
    label: 'SHELL/USD, ShellCoin US Dollar'
  },
  {
    value: { id: '6083', name: 'Shift Ethereum', decimal: '6', symbol: 'SHIFT/ETH' },
    label: 'SHIFT/ETH, Shift Ethereum'
  },
  {
    value: { id: '6084', name: 'Shift US Dollar', decimal: '5', symbol: 'SHIFT/USD' },
    label: 'SHIFT/USD, Shift US Dollar'
  },
  {
    value: { id: '6085', name: 'ShipChain Bitcoin', decimal: '8', symbol: 'SHIP/BTC' },
    label: 'SHIP/BTC, ShipChain Bitcoin'
  },
  {
    value: { id: '6086', name: 'ShipChain US Dollar', decimal: '6', symbol: 'SHIP/USD' },
    label: 'SHIP/USD, ShipChain US Dollar'
  },
  {
    value: { id: '6087', name: 'Oyster Shell Bitcoin', decimal: '8', symbol: 'SHL/BTC' },
    label: 'SHL/BTC, Oyster Shell Bitcoin'
  },
  {
    value: { id: '6089', name: 'Oyster Shell US Dollar', decimal: '6', symbol: 'SHL/USD' },
    label: 'SHL/USD, Oyster Shell US Dollar'
  },
  {
    value: { id: '6091', name: 'StrongHands US Dollar', decimal: '8', symbol: 'SHND/USD' },
    label: 'SHND/USD, StrongHands US Dollar'
  },
  {
    value: { id: '6094', name: 'Shorty Bitcoin', decimal: '8', symbol: 'SHORTY/BTC' },
    label: 'SHORTY/BTC, Shorty Bitcoin'
  },
  {
    value: { id: '6095', name: 'Shorty US Dollar', decimal: '6', symbol: 'SHORTY/USD' },
    label: 'SHORTY/USD, Shorty US Dollar'
  },
  {
    value: { id: '6099', name: 'SIBCoin Bitcoin', decimal: '7', symbol: 'SIB/BTC' },
    label: 'SIB/BTC, SIBCoin Bitcoin'
  },
  {
    value: { id: '6102', name: 'SIBCoin US Dollar', decimal: '5', symbol: 'SIB/USD' },
    label: 'SIB/USD, SIBCoin US Dollar'
  },
  {
    value: {
      id: '6103',
      name: 'Smart Investment Fund Token Ethereum',
      decimal: '6',
      symbol: 'SIFT/ETH'
    },
    label: 'SIFT/ETH, Smart Investment Fund Token Ethereum'
  },
  {
    value: {
      id: '6104',
      name: 'Smart Investment Fund Token US Dollar',
      decimal: '5',
      symbol: 'SIFT/USD'
    },
    label: 'SIFT/USD, Smart Investment Fund Token US Dollar'
  },
  {
    value: { id: '6105', name: 'SIGMAcoin Ethereum', decimal: '6', symbol: 'SIGMA/ETH' },
    label: 'SIGMA/ETH, SIGMAcoin Ethereum'
  },
  {
    value: { id: '6106', name: 'SIGMAcoin US Dollar', decimal: '6', symbol: 'SIGMA/USD' },
    label: 'SIGMA/USD, SIGMAcoin US Dollar'
  },
  {
    value: { id: '6107', name: 'Signatum Bitcoin', decimal: '8', symbol: 'SIGT/BTC' },
    label: 'SIGT/BTC, Signatum Bitcoin'
  },
  {
    value: { id: '6108', name: 'Signatum US Dollar', decimal: '6', symbol: 'SIGT/USD' },
    label: 'SIGT/USD, Signatum US Dollar'
  },
  {
    value: { id: '6109', name: 'SISA Bitcoin', decimal: '8', symbol: 'SISA/BTC' },
    label: 'SISA/BTC, SISA Bitcoin'
  },
  {
    value: { id: '6111', name: 'SISA US Dollar', decimal: '6', symbol: 'SISA/USD' },
    label: 'SISA/USD, SISA US Dollar'
  },
  {
    value: { id: '6113', name: 'Storjcoin X Japanese Yen', decimal: '3', symbol: 'SJCX/JPY' },
    label: 'SJCX/JPY, Storjcoin X Japanese Yen'
  },
  {
    value: { id: '6114', name: 'Storjcoin X US Dollar', decimal: '5', symbol: 'SJCX/USD' },
    label: 'SJCX/USD, Storjcoin X US Dollar'
  },
  {
    value: { id: '6115', name: 'Sakura Bloom Bitcoin', decimal: '4', symbol: 'SKB/BTC' },
    label: 'SKB/BTC, Sakura Bloom Bitcoin'
  },
  {
    value: { id: '6116', name: 'Sakura Bloom US Dollar', decimal: '4', symbol: 'SKB/USD' },
    label: 'SKB/USD, Sakura Bloom US Dollar'
  },
  {
    value: { id: '6117', name: 'Skeincoin Bitcoin', decimal: '8', symbol: 'SKC/BTC' },
    label: 'SKC/BTC, Skeincoin Bitcoin'
  },
  {
    value: { id: '6120', name: 'Skeincoin US Dollar', decimal: '6', symbol: 'SKC/USD' },
    label: 'SKC/USD, Skeincoin US Dollar'
  },
  {
    value: { id: '6125', name: 'SkinCoin US Dollar', decimal: '6', symbol: 'SKIN/USD' },
    label: 'SKIN/USD, SkinCoin US Dollar'
  },
  {
    value: { id: '6127', name: 'Skrumble Network US Dollar', decimal: '8', symbol: 'SKM/USD' },
    label: 'SKM/USD, Skrumble Network US Dollar'
  },
  {
    value: { id: '6128', name: 'Sakuracoin Bitcoin', decimal: '8', symbol: 'SKR/BTC' },
    label: 'SKR/BTC, Sakuracoin Bitcoin'
  },
  {
    value: { id: '6132', name: 'Sakuracoin US Dollar', decimal: '6', symbol: 'SKR/USD' },
    label: 'SKR/USD, Sakuracoin US Dollar'
  },
  {
    value: { id: '6133', name: 'Pirate Blocks Bitcoin', decimal: '8', symbol: 'SKULL/BTC' },
    label: 'SKULL/BTC, Pirate Blocks Bitcoin'
  },
  {
    value: { id: '6134', name: 'Pirate Blocks US Dollar', decimal: '6', symbol: 'SKULL/USD' },
    label: 'SKULL/USD, Pirate Blocks US Dollar'
  },
  {
    value: { id: '6136', name: 'Skycoin Bitcoin', decimal: '8', symbol: 'SKY/BTC' },
    label: 'SKY/BTC, Skycoin Bitcoin'
  },
  {
    value: { id: '6138', name: 'Skycoin US Dollar', decimal: '4', symbol: 'SKY/USD' },
    label: 'SKY/USD, Skycoin US Dollar'
  },
  {
    value: { id: '6139', name: 'Slevin Bitcoin', decimal: '8', symbol: 'SLEVIN/BTC' },
    label: 'SLEVIN/BTC, Slevin Bitcoin'
  },
  {
    value: { id: '6140', name: 'Slevin US Dollar', decimal: '6', symbol: 'SLEVIN/USD' },
    label: 'SLEVIN/USD, Slevin US Dollar'
  },
  {
    value: { id: '6141', name: 'Selfiecoin Bitcoin', decimal: '8', symbol: 'SLFI/BTC' },
    label: 'SLFI/BTC, Selfiecoin Bitcoin'
  },
  {
    value: { id: '6142', name: 'Selfiecoin US Dollar', decimal: '8', symbol: 'SLFI/USD' },
    label: 'SLFI/USD, Selfiecoin US Dollar'
  },
  {
    value: { id: '6143', name: 'Sterlingcoin Bitcoin', decimal: '8', symbol: 'SLG/BTC' },
    label: 'SLG/BTC, Sterlingcoin Bitcoin'
  },
  {
    value: { id: '6146', name: 'Sterlingcoin US Dollar', decimal: '6', symbol: 'SLG/USD' },
    label: 'SLG/USD, Sterlingcoin US Dollar'
  },
  {
    value: { id: '6147', name: 'Sling Bitcoin', decimal: '8', symbol: 'SLING/BTC' },
    label: 'SLING/BTC, Sling Bitcoin'
  },
  {
    value: { id: '6148', name: 'Sling US Dollar', decimal: '6', symbol: 'SLING/USD' },
    label: 'SLING/USD, Sling US Dollar'
  },
  {
    value: { id: '6149', name: 'Alphaslot US Dollar', decimal: '4', symbol: 'SLOT/USD' },
    label: 'SLOT/USD, Alphaslot US Dollar'
  },
  {
    value: { id: '6150', name: 'Slothcoin Dogecoin', decimal: '6', symbol: 'SLOTH/DOGE' },
    label: 'SLOTH/DOGE, Slothcoin Dogecoin'
  },
  {
    value: { id: '6152', name: 'Slothcoin US Dollar', decimal: '8', symbol: 'SLOTH/USD' },
    label: 'SLOTH/USD, Slothcoin US Dollar'
  },
  {
    value: { id: '6154', name: 'SolarCoin US Dollar', decimal: '5', symbol: 'SLR/USD' },
    label: 'SLR/USD, SolarCoin US Dollar'
  },
  {
    value: { id: '6155', name: 'SaluS Bitcoin', decimal: '6', symbol: 'SLS/BTC' },
    label: 'SLS/BTC, SaluS Bitcoin'
  },
  {
    value: { id: '6156', name: 'SaluS US Dollar', decimal: '4', symbol: 'SLS/USD' },
    label: 'SLS/USD, SaluS US Dollar'
  },
  {
    value: { id: '6165', name: 'SmartCash Ethereum', decimal: '6', symbol: 'SMART/ETH' },
    label: 'SMART/ETH, SmartCash Ethereum'
  },
  {
    value: { id: '6166', name: 'SmartCash Euro', decimal: '4', symbol: 'SMART/EUR' },
    label: 'SMART/EUR, SmartCash Euro'
  },
  {
    value: { id: '6168', name: 'SmartCash Russian Ruble', decimal: '4', symbol: 'SMART/RUB' },
    label: 'SMART/RUB, SmartCash Russian Ruble'
  },
  {
    value: { id: '6169', name: 'SmartCash US Dollar', decimal: '6', symbol: 'SMART/USD' },
    label: 'SMART/USD, SmartCash US Dollar'
  },
  {
    value: { id: '6173', name: 'SmartCoin US Dollar', decimal: '6', symbol: 'SMC/USD' },
    label: 'SMC/USD, SmartCoin US Dollar'
  },
  {
    value: { id: '6174', name: 'SmartMesh Bitcoin', decimal: '8', symbol: 'SMT/BTC' },
    label: 'SMT/BTC, SmartMesh Bitcoin'
  },
  {
    value: { id: '6175', name: 'SmartMesh Ethereum', decimal: '7', symbol: 'SMT/ETH' },
    label: 'SMT/ETH, SmartMesh Ethereum'
  },
  {
    value: { id: '6176', name: 'SmartMesh US Dollar', decimal: '6', symbol: 'SMT/USD' },
    label: 'SMT/USD, SmartMesh US Dollar'
  },
  {
    value: { id: '6177', name: 'SunContract Bitcoin', decimal: '8', symbol: 'SNC/BTC' },
    label: 'SNC/BTC, SunContract Bitcoin'
  },
  {
    value: { id: '6178', name: 'SunContract Ethereum', decimal: '6', symbol: 'SNC/ETH' },
    label: 'SNC/ETH, SunContract Ethereum'
  },
  {
    value: { id: '6179', name: 'SunContract US Dollar', decimal: '6', symbol: 'SNC/USD' },
    label: 'SNC/USD, SunContract US Dollar'
  },
  {
    value: { id: '6180', name: 'Sand Coin Ethereum', decimal: '6', symbol: 'SND/ETH' },
    label: 'SND/ETH, Sand Coin Ethereum'
  },
  {
    value: { id: '6181', name: 'Sand Coin US Dollar', decimal: '5', symbol: 'SND/USD' },
    label: 'SND/USD, Sand Coin US Dollar'
  },
  {
    value: { id: '6185', name: 'Sport and Leisure Bitcoin', decimal: '8', symbol: 'SNL/BTC' },
    label: 'SNL/BTC, Sport and Leisure Bitcoin'
  },
  {
    value: { id: '6186', name: 'Sport and Leisure Ethereum', decimal: '8', symbol: 'SNL/ETH' },
    label: 'SNL/ETH, Sport and Leisure Ethereum'
  },
  {
    value: { id: '6188', name: 'SONM Bitcoin', decimal: '8', symbol: 'SNM/BTC' },
    label: 'SNM/BTC, SONM Bitcoin'
  },
  {
    value: { id: '6196', name: 'Synergy US Dollar', decimal: '5', symbol: 'SNRG/USD' },
    label: 'SNRG/USD, Synergy US Dollar'
  },
  {
    value: { id: '6197', name: 'Status Bitcoin', decimal: '8', symbol: 'SNT/BTC' },
    label: 'SNT/BTC, Status Bitcoin'
  },
  {
    value: { id: '6198', name: 'Status Ethereum', decimal: '6', symbol: 'SNT/ETH' },
    label: 'SNT/ETH, Status Ethereum'
  },
  {
    value: { id: '6199', name: 'Status Korean Won', decimal: '3', symbol: 'SNT/KRW' },
    label: 'SNT/KRW, Status Korean Won'
  },
  {
    value: { id: '6203', name: 'Silent Notary Ethereum', decimal: '8', symbol: 'SNTR/ETH' },
    label: 'SNTR/ETH, Silent Notary Ethereum'
  },
  {
    value: { id: '6204', name: 'Silent Notary US Dollar', decimal: '8', symbol: 'SNTR/USD' },
    label: 'SNTR/USD, Silent Notary US Dollar'
  },
  {
    value: { id: '6205', name: 'Soarcoin Bitcoin', decimal: '8', symbol: 'SOAR/BTC' },
    label: 'SOAR/BTC, Soarcoin Bitcoin'
  },
  {
    value: { id: '6206', name: 'Soarcoin US Dollar', decimal: '6', symbol: 'SOAR/USD' },
    label: 'SOAR/USD, Soarcoin US Dollar'
  },
  {
    value: { id: '6207', name: 'All Sports Bitcoin', decimal: '8', symbol: 'SOC/BTC' },
    label: 'SOC/BTC, All Sports Bitcoin'
  },
  {
    value: { id: '6208', name: 'All Sports Ethereum', decimal: '8', symbol: 'SOC/ETH' },
    label: 'SOC/ETH, All Sports Ethereum'
  },
  {
    value: { id: '6209', name: 'All Sports US Dollar', decimal: '4', symbol: 'SOC/USD' },
    label: 'SOC/USD, All Sports US Dollar'
  },
  {
    value: { id: '6210', name: 'SocialCoin Bitcoin', decimal: '8', symbol: 'SOCC/BTC' },
    label: 'SOCC/BTC, SocialCoin Bitcoin'
  },
  {
    value: { id: '6211', name: 'SocialCoin US Dollar', decimal: '6', symbol: 'SOCC/USD' },
    label: 'SOCC/USD, SocialCoin US Dollar'
  },
  {
    value: { id: '6212', name: 'SOILcoin Bitcoin', decimal: '8', symbol: 'SOIL/BTC' },
    label: 'SOIL/BTC, SOILcoin Bitcoin'
  },
  {
    value: { id: '6215', name: 'SOILcoin US Dollar', decimal: '6', symbol: 'SOIL/USD' },
    label: 'SOIL/USD, SOILcoin US Dollar'
  },
  {
    value: { id: '6219', name: 'SongCoin US Dollar', decimal: '6', symbol: 'SONG/USD' },
    label: 'SONG/USD, SongCoin US Dollar'
  },
  {
    value: { id: '6220', name: 'SoonCoin Bitcoin', decimal: '8', symbol: 'SOON/BTC' },
    label: 'SOON/BTC, SoonCoin Bitcoin'
  },
  {
    value: { id: '6223', name: 'SoonCoin US Dollar', decimal: '6', symbol: 'SOON/USD' },
    label: 'SOON/USD, SoonCoin US Dollar'
  },
  {
    value: { id: '6224', name: 'Phantasma Bitcoin', decimal: '8', symbol: 'SOUL/BTC' },
    label: 'SOUL/BTC, Phantasma Bitcoin'
  },
  {
    value: { id: '6225', name: 'Phantasma Ethereum', decimal: '8', symbol: 'SOUL/ETH' },
    label: 'SOUL/ETH, Phantasma Ethereum'
  },
  {
    value: { id: '6226', name: 'Phantasma NEO', decimal: '5', symbol: 'SOUL/NEO' },
    label: 'SOUL/NEO, Phantasma NEO'
  },
  {
    value: { id: '6227', name: 'Phantasma US Dollar', decimal: '4', symbol: 'SOUL/USD' },
    label: 'SOUL/USD, Phantasma US Dollar'
  },
  {
    value: { id: '6228', name: 'SpaceCoin Bitcoin', decimal: '8', symbol: 'SPACE/BTC' },
    label: 'SPACE/BTC, SpaceCoin Bitcoin'
  },
  {
    value: { id: '6231', name: 'SpaceCoin US Dollar', decimal: '6', symbol: 'SPACE/USD' },
    label: 'SPACE/USD, SpaceCoin US Dollar'
  },
  {
    value: { id: '6239', name: 'SpaceChain US Dollar', decimal: '6', symbol: 'SPC/USD' },
    label: 'SPC/USD, SpaceChain US Dollar'
  },
  {
    value: { id: '6243', name: 'SproutsExtreme Bitcoin', decimal: '8', symbol: 'SPEX/BTC' },
    label: 'SPEX/BTC, SproutsExtreme Bitcoin'
  },
  {
    value: { id: '6244', name: 'SproutsExtreme US Dollar', decimal: '8', symbol: 'SPEX/USD' },
    label: 'SPEX/USD, SproutsExtreme US Dollar'
  },
  {
    value: { id: '6247', name: 'SportyCo US Dollar', decimal: '6', symbol: 'SPF/USD' },
    label: 'SPF/USD, SportyCo US Dollar'
  },
  {
    value: { id: '6248', name: 'Sphere Bitcoin', decimal: '6', symbol: 'SPHR/BTC' },
    label: 'SPHR/BTC, Sphere Bitcoin'
  },
  {
    value: { id: '6249', name: 'Sphere US Dollar', decimal: '5', symbol: 'SPHR/USD' },
    label: 'SPHR/USD, Sphere US Dollar'
  },
  {
    value: { id: '6252', name: 'SophiaTX US Dollar', decimal: '5', symbol: 'SPHTX/USD' },
    label: 'SPHTX/USD, SophiaTX US Dollar'
  },
  {
    value: { id: '6253', name: 'SportsCoin Bitcoin', decimal: '8', symbol: 'SPORT/BTC' },
    label: 'SPORT/BTC, SportsCoin Bitcoin'
  },
  {
    value: { id: '6254', name: 'SportsCoin US Dollar', decimal: '6', symbol: 'SPORT/USD' },
    label: 'SPORT/USD, SportsCoin US Dollar'
  },
  {
    value: { id: '6258', name: 'SpreadCoin US Dollar', decimal: '5', symbol: 'SPR/USD' },
    label: 'SPR/USD, SpreadCoin US Dollar'
  },
  {
    value: { id: '6259', name: 'Sprouts Dogecoin', decimal: '6', symbol: 'SPRTS/DOGE' },
    label: 'SPRTS/DOGE, Sprouts Dogecoin'
  },
  {
    value: { id: '6260', name: 'Sprouts US Dollar', decimal: '8', symbol: 'SPRTS/USD' },
    label: 'SPRTS/USD, Sprouts US Dollar'
  },
  {
    value: { id: '6264', name: 'Spots US Dollar', decimal: '6', symbol: 'SPT/USD' },
    label: 'SPT/USD, Spots US Dollar'
  },
  {
    value: { id: '6265', name: 'SecureCoin Bitcoin', decimal: '8', symbol: 'SRC/BTC' },
    label: 'SRC/BTC, SecureCoin Bitcoin'
  },
  {
    value: { id: '6268', name: 'SecureCoin US Dollar', decimal: '6', symbol: 'SRC/USD' },
    label: 'SRC/USD, SecureCoin US Dollar'
  },
  {
    value: { id: '6269', name: 'SRCOIN Ethereum', decimal: '8', symbol: 'SRCOIN/ETH' },
    label: 'SRCOIN/ETH, SRCOIN Ethereum'
  },
  {
    value: { id: '6270', name: 'SRCOIN US Dollar', decimal: '6', symbol: 'SRCOIN/USD' },
    label: 'SRCOIN/USD, SRCOIN US Dollar'
  },
  {
    value: { id: '6271', name: 'SIRIN LABS Token Bitcoin', decimal: '8', symbol: 'SRN/BTC' },
    label: 'SRN/BTC, SIRIN LABS Token Bitcoin'
  },
  {
    value: { id: '6273', name: 'SIRIN LABS Token US Dollar', decimal: '5', symbol: 'SRN/USD' },
    label: 'SRN/USD, SIRIN LABS Token US Dollar'
  },
  {
    value: { id: '6274', name: 'Sharder Ethereum', decimal: '8', symbol: 'SS/ETH' },
    label: 'SS/ETH, Sharder Ethereum'
  },
  {
    value: { id: '6275', name: 'Sharder US Dollar', decimal: '8', symbol: 'SS/USD' },
    label: 'SS/USD, Sharder US Dollar'
  },
  {
    value: { id: '6276', name: 'Sharechain Bitcoin', decimal: '8', symbol: 'SSS/BTC' },
    label: 'SSS/BTC, Sharechain Bitcoin'
  },
  {
    value: { id: '6277', name: 'Sharechain US Dollar', decimal: '6', symbol: 'SSS/USD' },
    label: 'SSS/USD, Sharechain US Dollar'
  },
  {
    value: { id: '6278', name: 'Starta Bitcoin', decimal: '7', symbol: 'STA/BTC' },
    label: 'STA/BTC, Starta Bitcoin'
  },
  {
    value: { id: '6279', name: 'Starta US Dollar', decimal: '5', symbol: 'STA/USD' },
    label: 'STA/USD, Starta US Dollar'
  },
  {
    value: { id: '6282', name: 'Starbase US Dollar', decimal: '6', symbol: 'STAR/USD' },
    label: 'STAR/USD, Starbase US Dollar'
  },
  {
    value: { id: '6283', name: 'StarCash Network Bitcoin', decimal: '8', symbol: 'STARS/BTC' },
    label: 'STARS/BTC, StarCash Network Bitcoin'
  },
  {
    value: { id: '6284', name: 'StarCash Network US Dollar', decimal: '6', symbol: 'STARS/USD' },
    label: 'STARS/USD, StarCash Network US Dollar'
  },
  {
    value: { id: '6288', name: 'Startcoin US Dollar', decimal: '6', symbol: 'START/USD' },
    label: 'START/USD, Startcoin US Dollar'
  },
  {
    value: { id: '6291', name: 'Stakecoin Ethereum', decimal: '8', symbol: 'STCN/ETH' },
    label: 'STCN/ETH, Stakecoin Ethereum'
  },
  {
    value: { id: '6292', name: 'Stakecoin US Dollar', decimal: '6', symbol: 'STCN/USD' },
    label: 'STCN/USD, Stakecoin US Dollar'
  },
  {
    value: { id: '6293', name: 'Steem Binance Coin', decimal: '5', symbol: 'STEEM/BNB' },
    label: 'STEEM/BNB, Steem Binance Coin'
  },
  {
    value: { id: '6294', name: 'Steem Bitcoin', decimal: '6', symbol: 'STEEM/BTC' },
    label: 'STEEM/BTC, Steem Bitcoin'
  },
  {
    value: { id: '6296', name: 'Steem Korean Won', decimal: '2', symbol: 'STEEM/KRW' },
    label: 'STEEM/KRW, Steem Korean Won'
  },
  {
    value: { id: '6297', name: 'Steem US Dollar', decimal: '5', symbol: 'STEEM/USD' },
    label: 'STEEM/USD, Steem US Dollar'
  },
  {
    value: { id: '6299', name: 'SteepCoin Bitcoin', decimal: '8', symbol: 'STEEP/BTC' },
    label: 'STEEP/BTC, SteepCoin Bitcoin'
  },
  {
    value: { id: '6300', name: 'SteepCoin US Dollar', decimal: '6', symbol: 'STEEP/USD' },
    label: 'STEEP/USD, SteepCoin US Dollar'
  },
  {
    value: { id: '6301', name: 'Steps Bitcoin', decimal: '8', symbol: 'STEPS/BTC' },
    label: 'STEPS/BTC, Steps Bitcoin'
  },
  {
    value: { id: '6302', name: 'Steps US Dollar', decimal: '6', symbol: 'STEPS/USD' },
    label: 'STEPS/USD, Steps US Dollar'
  },
  {
    value: { id: '6303', name: 'STK Bitcoin', decimal: '8', symbol: 'STK/BTC' },
    label: 'STK/BTC, STK Bitcoin'
  },
  {
    value: { id: '6304', name: 'STK Ethereum', decimal: '7', symbol: 'STK/ETH' },
    label: 'STK/ETH, STK Ethereum'
  },
  {
    value: { id: '6305', name: 'STK US Dollar', decimal: '6', symbol: 'STK/USD' },
    label: 'STK/USD, STK US Dollar'
  },
  {
    value: { id: '6306', name: 'Steneum Coin Bitcoin', decimal: '8', symbol: 'STN/BTC' },
    label: 'STN/BTC, Steneum Coin Bitcoin'
  },
  {
    value: { id: '6307', name: 'Steneum Coin US Dollar', decimal: '6', symbol: 'STN/USD' },
    label: 'STN/USD, Steneum Coin US Dollar'
  },
  {
    value: { id: '6308', name: 'Storj Bitcoin', decimal: '7', symbol: 'STORJ/BTC' },
    label: 'STORJ/BTC, Storj Bitcoin'
  },
  {
    value: { id: '6310', name: 'Storj Korean Won', decimal: '2', symbol: 'STORJ/KRW' },
    label: 'STORJ/KRW, Storj Korean Won'
  },
  {
    value: { id: '6313', name: 'Storm Binance Coin', decimal: '6', symbol: 'STORM/BNB' },
    label: 'STORM/BNB, Storm Binance Coin'
  },
  {
    value: { id: '6314', name: 'Storm Bitcoin', decimal: '8', symbol: 'STORM/BTC' },
    label: 'STORM/BTC, Storm Bitcoin'
  },
  {
    value: { id: '6315', name: 'Storm Ethereum', decimal: '8', symbol: 'STORM/ETH' },
    label: 'STORM/ETH, Storm Ethereum'
  },
  {
    value: { id: '6316', name: 'Storm US Dollar', decimal: '6', symbol: 'STORM/USD' },
    label: 'STORM/USD, Storm US Dollar'
  },
  {
    value: { id: '6322', name: 'Storiqa US Dollar', decimal: '6', symbol: 'STQ/USD' },
    label: 'STQ/USD, Storiqa US Dollar'
  },
  {
    value: { id: '6323', name: 'Stratis Bitcoin', decimal: '6', symbol: 'STRAT/BTC' },
    label: 'STRAT/BTC, Stratis Bitcoin'
  },
  {
    value: { id: '6325', name: 'Stratis Ethereum', decimal: '6', symbol: 'STRAT/ETH' },
    label: 'STRAT/ETH, Stratis Ethereum'
  },
  {
    value: { id: '6328', name: 'Stratis US Dollar', decimal: '4', symbol: 'STRAT/USD' },
    label: 'STRAT/USD, Stratis US Dollar'
  },
  {
    value: { id: '6329', name: 'StarCredits Bitcoin', decimal: '8', symbol: 'STRC/BTC' },
    label: 'STRC/BTC, StarCredits Bitcoin'
  },
  {
    value: { id: '6332', name: 'StarCredits US Dollar', decimal: '5', symbol: 'STRC/USD' },
    label: 'STRC/USD, StarCredits US Dollar'
  },
  {
    value: { id: '6333', name: 'Stress Bitcoin', decimal: '8', symbol: 'STS/BTC' },
    label: 'STS/BTC, Stress Bitcoin'
  },
  {
    value: { id: '6334', name: 'Stress US Dollar', decimal: '6', symbol: 'STS/USD' },
    label: 'STS/USD, Stress US Dollar'
  },
  {
    value: { id: '6341', name: 'Sativacoin US Dollar', decimal: '6', symbol: 'STV/USD' },
    label: 'STV/USD, Sativacoin US Dollar'
  },
  {
    value: { id: '6345', name: 'Substratum Bitcoin', decimal: '8', symbol: 'SUB/BTC' },
    label: 'SUB/BTC, Substratum Bitcoin'
  },
  {
    value: { id: '6346', name: 'Substratum Ethereum', decimal: '6', symbol: 'SUB/ETH' },
    label: 'SUB/ETH, Substratum Ethereum'
  },
  {
    value: { id: '6353', name: 'Sumokoin US Dollar', decimal: '5', symbol: 'SUMO/USD' },
    label: 'SUMO/USD, Sumokoin US Dollar'
  },
  {
    value: { id: '6354', name: 'SuperCoin Bitcoin', decimal: '8', symbol: 'SUPER/BTC' },
    label: 'SUPER/BTC, SuperCoin Bitcoin'
  },
  {
    value: { id: '6355', name: 'SuperCoin US Dollar', decimal: '6', symbol: 'SUPER/USD' },
    label: 'SUPER/USD, SuperCoin US Dollar'
  },
  {
    value: { id: '6357', name: 'Suretly Ethereum', decimal: '6', symbol: 'SUR/ETH' },
    label: 'SUR/ETH, Suretly Ethereum'
  },
  {
    value: { id: '6360', name: 'SwftCoin Bitcoin', decimal: '8', symbol: 'SWFTC/BTC' },
    label: 'SWFTC/BTC, SwftCoin Bitcoin'
  },
  {
    value: { id: '6361', name: 'SwftCoin Ethereum', decimal: '8', symbol: 'SWFTC/ETH' },
    label: 'SWFTC/ETH, SwftCoin Ethereum'
  },
  {
    value: { id: '6362', name: 'SwftCoin US Dollar', decimal: '6', symbol: 'SWFTC/USD' },
    label: 'SWFTC/USD, SwftCoin US Dollar'
  },
  {
    value: { id: '6363', name: 'Bitswift Bitcoin', decimal: '8', symbol: 'SWIFT/BTC' },
    label: 'SWIFT/BTC, Bitswift Bitcoin'
  },
  {
    value: { id: '6364', name: 'Bitswift US Dollar', decimal: '5', symbol: 'SWIFT/USD' },
    label: 'SWIFT/USD, Bitswift US Dollar'
  },
  {
    value: { id: '6368', name: 'Swing US Dollar', decimal: '6', symbol: 'SWING/USD' },
    label: 'SWING/USD, Swing US Dollar'
  },
  {
    value: { id: '6369', name: 'Swarm Bitcoin', decimal: '4', symbol: 'SWM/BTC' },
    label: 'SWM/BTC, Swarm Bitcoin'
  },
  {
    value: { id: '6370', name: 'Swarm US Dollar', decimal: '4', symbol: 'SWM/USD' },
    label: 'SWM/USD, Swarm US Dollar'
  },
  {
    value: { id: '6371', name: 'Swapcoin Ethereum', decimal: '6', symbol: 'SWP/ETH' },
    label: 'SWP/ETH, Swapcoin Ethereum'
  },
  {
    value: { id: '6372', name: 'Swapcoin US Dollar', decimal: '5', symbol: 'SWP/USD' },
    label: 'SWP/USD, Swapcoin US Dollar'
  },
  {
    value: { id: '6374', name: 'Swarm City US Dollar', decimal: '5', symbol: 'SWT/USD' },
    label: 'SWT/USD, Swarm City US Dollar'
  },
  {
    value: { id: '6375', name: 'Switcheo US Dollar', decimal: '6', symbol: 'SWTH/USD' },
    label: 'SWTH/USD, Switcheo US Dollar'
  },
  {
    value: { id: '6379', name: 'Sexcoin US Dollar', decimal: '6', symbol: 'SXC/USD' },
    label: 'SXC/USD, Sexcoin US Dollar'
  },
  {
    value: {
      id: '6381',
      name: 'Spectre.ai Dividend Token US Dollar',
      decimal: '4',
      symbol: 'SXDT/USD'
    },
    label: 'SXDT/USD, Spectre.ai Dividend Token US Dollar'
  },
  {
    value: { id: '6385', name: 'Syndicate US Dollar', decimal: '5', symbol: 'SYNX/USD' },
    label: 'SYNX/USD, Syndicate US Dollar'
  },
  {
    value: { id: '6387', name: 'SysCoin Bitcoin', decimal: '8', symbol: 'SYS/BTC' },
    label: 'SYS/BTC, SysCoin Bitcoin'
  },
  {
    value: { id: '6389', name: 'SysCoin US Dollar', decimal: '5', symbol: 'SYS/USD' },
    label: 'SYS/USD, SysCoin US Dollar'
  },
  {
    value: { id: '6394', name: 'TagCoin Bitcoin', decimal: '8', symbol: 'TAG/BTC' },
    label: 'TAG/BTC, TagCoin Bitcoin'
  },
  {
    value: { id: '6395', name: 'TagCoin US Dollar', decimal: '6', symbol: 'TAG/USD' },
    label: 'TAG/USD, TagCoin US Dollar'
  },
  {
    value: { id: '6396', name: 'TAGRcoin Bitcoin', decimal: '8', symbol: 'TAGR/BTC' },
    label: 'TAGR/BTC, TAGRcoin Bitcoin'
  },
  {
    value: { id: '6397', name: 'TAGRcoin US Dollar', decimal: '6', symbol: 'TAGR/USD' },
    label: 'TAGR/USD, TAGRcoin US Dollar'
  },
  {
    value: { id: '6401', name: 'TajCoin US Dollar', decimal: '6', symbol: 'TAJ/USD' },
    label: 'TAJ/USD, TajCoin US Dollar'
  },
  {
    value: { id: '6402', name: 'BTCtalkcoin Bitcoin', decimal: '8', symbol: 'TALK/BTC' },
    label: 'TALK/BTC, BTCtalkcoin Bitcoin'
  },
  {
    value: { id: '6403', name: 'BTCtalkcoin US Dollar', decimal: '6', symbol: 'TALK/USD' },
    label: 'TALK/USD, BTCtalkcoin US Dollar'
  },
  {
    value: { id: '6404', name: 'Lamden Ethereum', decimal: '8', symbol: 'TAU/ETH' },
    label: 'TAU/ETH, Lamden Ethereum'
  },
  {
    value: { id: '6405', name: 'Lamden US Dollar', decimal: '8', symbol: 'TAU/USD' },
    label: 'TAU/USD, Lamden US Dollar'
  },
  {
    value: { id: '6406', name: 'The ChampCoin Bitcoin', decimal: '8', symbol: 'TCC/BTC' },
    label: 'TCC/BTC, The ChampCoin Bitcoin'
  },
  {
    value: { id: '6407', name: 'The ChampCoin Ethereum', decimal: '8', symbol: 'TCC/ETH' },
    label: 'TCC/ETH, The ChampCoin Ethereum'
  },
  {
    value: { id: '6408', name: 'The ChampCoin Indian Rupee', decimal: '4', symbol: 'TCC/INR' },
    label: 'TCC/INR, The ChampCoin Indian Rupee'
  },
  {
    value: { id: '6409', name: 'The ChampCoin US Dollar', decimal: '6', symbol: 'TCC/USD' },
    label: 'TCC/USD, The ChampCoin US Dollar'
  },
  {
    value: { id: '6411', name: 'Thore Cash Ethereum', decimal: '8', symbol: 'TCH/ETH' },
    label: 'TCH/ETH, Thore Cash Ethereum'
  },
  {
    value: { id: '6412', name: 'Thore Cash US Dollar', decimal: '6', symbol: 'TCH/USD' },
    label: 'TCH/USD, Thore Cash US Dollar'
  },
  {
    value: { id: '6413', name: 'ThoreCashTRX Bitcoin', decimal: '7', symbol: 'TCHTRX/BTC' },
    label: 'TCHTRX/BTC, ThoreCashTRX Bitcoin'
  },
  {
    value: { id: '6414', name: 'ThoreCashTRX US Dollar', decimal: '2', symbol: 'TCHTRX/USD' },
    label: 'TCHTRX/USD, ThoreCashTRX US Dollar'
  },
  {
    value: { id: '6415', name: 'T-coin Bitcoin', decimal: '8', symbol: 'TCOIN/BTC' },
    label: 'TCOIN/BTC, T-coin Bitcoin'
  },
  {
    value: { id: '6416', name: 'T-coin US Dollar', decimal: '7', symbol: 'TCOIN/USD' },
    label: 'TCOIN/USD, T-coin US Dollar'
  },
  {
    value: { id: '6417', name: 'TheCreed Bitcoin', decimal: '8', symbol: 'TCR/BTC' },
    label: 'TCR/BTC, TheCreed Bitcoin'
  },
  {
    value: { id: '6418', name: 'TheCreed US Dollar', decimal: '6', symbol: 'TCR/USD' },
    label: 'TCR/USD, TheCreed US Dollar'
  },
  {
    value: { id: '6419', name: 'TokenClub Bitcoin', decimal: '8', symbol: 'TCT/BTC' },
    label: 'TCT/BTC, TokenClub Bitcoin'
  },
  {
    value: { id: '6421', name: 'TokenClub US Dollar', decimal: '4', symbol: 'TCT/USD' },
    label: 'TCT/USD, TokenClub US Dollar'
  },
  {
    value: { id: '6422', name: 'TeamUp Bitcoin', decimal: '8', symbol: 'TEAM/BTC' },
    label: 'TEAM/BTC, TeamUp Bitcoin'
  },
  {
    value: { id: '6423', name: 'TeamUp US Dollar', decimal: '7', symbol: 'TEAM/USD' },
    label: 'TEAM/USD, TeamUp US Dollar'
  },
  {
    value: { id: '6424', name: 'TEAM (TokenStars) Bitcoin', decimal: '8', symbol: 'TEAMS/BTC' },
    label: 'TEAMS/BTC, TEAM (TokenStars) Bitcoin'
  },
  {
    value: { id: '6425', name: 'TEAM (TokenStars) Ethereum', decimal: '8', symbol: 'TEAMS/ETH' },
    label: 'TEAMS/ETH, TEAM (TokenStars) Ethereum'
  },
  {
    value: { id: '6426', name: 'TEAM (TokenStars) US Dollar', decimal: '4', symbol: 'TEAMS/USD' },
    label: 'TEAMS/USD, TEAM (TokenStars) US Dollar'
  },
  {
    value: { id: '6427', name: 'TEKcoin Bitcoin', decimal: '8', symbol: 'TEK/BTC' },
    label: 'TEK/BTC, TEKcoin Bitcoin'
  },
  {
    value: { id: '6430', name: 'TEKcoin US Dollar', decimal: '6', symbol: 'TEK/USD' },
    label: 'TEK/USD, TEKcoin US Dollar'
  },
  {
    value: { id: '6431', name: 'Telcoin Bitcoin', decimal: '8', symbol: 'TEL/BTC' },
    label: 'TEL/BTC, Telcoin Bitcoin'
  },
  {
    value: { id: '6432', name: 'Telcoin Ethereum', decimal: '8', symbol: 'TEL/ETH' },
    label: 'TEL/ETH, Telcoin Ethereum'
  },
  {
    value: { id: '6433', name: 'Telcoin US Dollar', decimal: '6', symbol: 'TEL/USD' },
    label: 'TEL/USD, Telcoin US Dollar'
  },
  {
    value: { id: '6434', name: 'Tellurion Bitcoin', decimal: '8', symbol: 'TELL/BTC' },
    label: 'TELL/BTC, Tellurion Bitcoin'
  },
  {
    value: { id: '6436', name: 'Tellurion US Dollar', decimal: '7', symbol: 'TELL/USD' },
    label: 'TELL/USD, Tellurion US Dollar'
  },
  {
    value: { id: '6438', name: 'Tokenomy US Dollar', decimal: '4', symbol: 'TEN/USD' },
    label: 'TEN/USD, Tokenomy US Dollar'
  },
  {
    value: { id: '6443', name: 'TerraNova US Dollar', decimal: '5', symbol: 'TER/USD' },
    label: 'TER/USD, TerraNova US Dollar'
  },
  {
    value: { id: '6444', name: 'Ternio US Dollar', decimal: '8', symbol: 'TERN/USD' },
    label: 'TERN/USD, Ternio US Dollar'
  },
  {
    value: { id: '6445', name: 'Ternio Stellar', decimal: '4', symbol: 'TERN/XLM' },
    label: 'TERN/XLM, Ternio Stellar'
  },
  {
    value: { id: '6450', name: 'TE-FOOD Ethereum', decimal: '8', symbol: 'TFD/ETH' },
    label: 'TFD/ETH, TE-FOOD Ethereum'
  },
  {
    value: { id: '6451', name: 'TE-FOOD US Dollar', decimal: '8', symbol: 'TFD/USD' },
    label: 'TFD/USD, TE-FOOD US Dollar'
  },
  {
    value: { id: '6452', name: 'TrueFlip Bitcoin', decimal: '7', symbol: 'TFL/BTC' },
    label: 'TFL/BTC, TrueFlip Bitcoin'
  },
  {
    value: { id: '6453', name: 'TrueFlip Ethereum', decimal: '6', symbol: 'TFL/ETH' },
    label: 'TFL/ETH, TrueFlip Ethereum'
  },
  {
    value: { id: '6454', name: 'TrueFlip US Dollar', decimal: '5', symbol: 'TFL/USD' },
    label: 'TFL/USD, TrueFlip US Dollar'
  },
  {
    value: { id: '6456', name: 'Truegame US Dollar', decimal: '8', symbol: 'TGAME/USD' },
    label: 'TGAME/USD, Truegame US Dollar'
  },
  {
    value: { id: '6457', name: 'Tigercoin Bitcoin', decimal: '8', symbol: 'TGC/BTC' },
    label: 'TGC/BTC, Tigercoin Bitcoin'
  },
  {
    value: { id: '6461', name: 'Tigercoin US Dollar', decimal: '6', symbol: 'TGC/USD' },
    label: 'TGC/USD, Tigercoin US Dollar'
  },
  {
    value: { id: '6462', name: 'Target Coin Bitcoin', decimal: '8', symbol: 'TGT/BTC' },
    label: 'TGT/BTC, Target Coin Bitcoin'
  },
  {
    value: { id: '6464', name: 'Target Coin US Dollar', decimal: '6', symbol: 'TGT/USD' },
    label: 'TGT/USD, Target Coin US Dollar'
  },
  {
    value: { id: '6466', name: 'HempCoin US Dollar', decimal: '6', symbol: 'THC/USD' },
    label: 'THC/USD, HempCoin US Dollar'
  },
  {
    value: { id: '6467', name: 'Thore Exchange Bitcoin', decimal: '8', symbol: 'THE/BTC' },
    label: 'THE/BTC, Thore Exchange Bitcoin'
  },
  {
    value: { id: '6468', name: 'Thore Exchange US Dollar', decimal: '6', symbol: 'THE/USD' },
    label: 'THE/USD, Thore Exchange US Dollar'
  },
  {
    value: { id: '6469', name: 'THETA Binance Coin', decimal: '5', symbol: 'THETA/BNB' },
    label: 'THETA/BNB, THETA Binance Coin'
  },
  {
    value: { id: '6470', name: 'THETA Bitcoin', decimal: '8', symbol: 'THETA/BTC' },
    label: 'THETA/BTC, THETA Bitcoin'
  },
  {
    value: { id: '6471', name: 'THETA Ethereum', decimal: '6', symbol: 'THETA/ETH' },
    label: 'THETA/ETH, THETA Ethereum'
  },
  {
    value: { id: '6472', name: 'THETA Korean Won', decimal: '2', symbol: 'THETA/KRW' },
    label: 'THETA/KRW, THETA Korean Won'
  },
  {
    value: { id: '6473', name: 'THETA US Dollar', decimal: '5', symbol: 'THETA/USD' },
    label: 'THETA/USD, THETA US Dollar'
  },
  {
    value: { id: '6474', name: 'ThoreCoin Bitcoin', decimal: '2', symbol: 'THR/BTC' },
    label: 'THR/BTC, ThoreCoin Bitcoin'
  },
  {
    value: { id: '6475', name: 'ThoreCoin Ethereum', decimal: '4', symbol: 'THR/ETH' },
    label: 'THR/ETH, ThoreCoin Ethereum'
  },
  {
    value: { id: '6476', name: 'ThoreCoin US Dollar', decimal: '4', symbol: 'THR/USD' },
    label: 'THR/USD, ThoreCoin US Dollar'
  },
  {
    value: { id: '6477', name: 'TechShares Bitcoin', decimal: '8', symbol: 'THS/BTC' },
    label: 'THS/BTC, TechShares Bitcoin'
  },
  {
    value: { id: '6480', name: 'ThoreNext Bitcoin', decimal: '8', symbol: 'THX/BTC' },
    label: 'THX/BTC, ThoreNext Bitcoin'
  },
  {
    value: { id: '6481', name: 'ThoreNext US Dollar', decimal: '4', symbol: 'THX/USD' },
    label: 'THX/USD, ThoreNext US Dollar'
  },
  {
    value: { id: '6484', name: 'TIES Network US Dollar', decimal: '6', symbol: 'TIE/USD' },
    label: 'TIE/USD, TIES Network US Dollar'
  },
  {
    value: { id: '6485', name: 'Chronobank Bitcoin', decimal: '6', symbol: 'TIME/BTC' },
    label: 'TIME/BTC, Chronobank Bitcoin'
  },
  {
    value: { id: '6486', name: 'Chronobank US Dollar', decimal: '4', symbol: 'TIME/USD' },
    label: 'TIME/USD, Chronobank US Dollar'
  },
  {
    value: { id: '6490', name: 'Trade Token US Dollar', decimal: '5', symbol: 'TIO/USD' },
    label: 'TIO/USD, Trade Token US Dollar'
  },
  {
    value: { id: '6494', name: 'FedoraCoin US Dollar', decimal: '8', symbol: 'TIPS/USD' },
    label: 'TIPS/USD, FedoraCoin US Dollar'
  },
  {
    value: { id: '6495', name: 'TittieCoin Bitcoin', decimal: '8', symbol: 'TIT/BTC' },
    label: 'TIT/BTC, TittieCoin Bitcoin'
  },
  {
    value: { id: '6496', name: 'TittieCoin US Dollar', decimal: '6', symbol: 'TIT/USD' },
    label: 'TIT/USD, TittieCoin US Dollar'
  },
  {
    value: { id: '6500', name: 'Titcoin US Dollar', decimal: '6', symbol: 'TITn/USD' },
    label: 'TITn/USD, Titcoin US Dollar'
  },
  {
    value: { id: '6506', name: 'Blocktix US Dollar', decimal: '5', symbol: 'TIX/USD' },
    label: 'TIX/USD, Blocktix US Dollar'
  },
  {
    value: { id: '6511', name: 'Tokes US Dollar', decimal: '5', symbol: 'TKS/USD' },
    label: 'TKS/USD, Tokes US Dollar'
  },
  {
    value: { id: '6513', name: 'THEKEY Bitcoin', decimal: '8', symbol: 'TKY/BTC' },
    label: 'TKY/BTC, THEKEY Bitcoin'
  },
  {
    value: { id: '6514', name: 'THEKEY US Dollar', decimal: '6', symbol: 'TKY/USD' },
    label: 'TKY/USD, THEKEY US Dollar'
  },
  {
    value: { id: '6515', name: 'Taler Coin Bitcoin', decimal: '8', symbol: 'TLR/BTC' },
    label: 'TLR/BTC, Taler Coin Bitcoin'
  },
  {
    value: { id: '6516', name: 'Taler Coin US Dollar', decimal: '6', symbol: 'TLR/USD' },
    label: 'TLR/USD, Taler Coin US Dollar'
  },
  {
    value: { id: '6517', name: 'Telex Ethereum', decimal: '6', symbol: 'TLX/ETH' },
    label: 'TLX/ETH, Telex Ethereum'
  },
  {
    value: { id: '6518', name: 'Telex US Dollar', decimal: '4', symbol: 'TLX/USD' },
    label: 'TLX/USD, Telex US Dollar'
  },
  {
    value: { id: '6519', name: 'Time New Bank Bitcoin', decimal: '8', symbol: 'TNB/BTC' },
    label: 'TNB/BTC, Time New Bank Bitcoin'
  },
  {
    value: { id: '6521', name: 'Time New Bank US Dollar', decimal: '6', symbol: 'TNB/USD' },
    label: 'TNB/USD, Time New Bank US Dollar'
  },
  {
    value: { id: '6522', name: 'Trinity Network Credit Bitcoin', decimal: '8', symbol: 'TNC/BTC' },
    label: 'TNC/BTC, Trinity Network Credit Bitcoin'
  },
  {
    value: { id: '6523', name: 'Trinity Network Credit Ethereum', decimal: '8', symbol: 'TNC/ETH' },
    label: 'TNC/ETH, Trinity Network Credit Ethereum'
  },
  {
    value: {
      id: '6524',
      name: 'Trinity Network Credit US Dollar',
      decimal: '6',
      symbol: 'TNC/USD'
    },
    label: 'TNC/USD, Trinity Network Credit US Dollar'
  },
  {
    value: { id: '6531', name: 'ToaCoin US Dollar', decimal: '6', symbol: 'TOA/USD' },
    label: 'TOA/USD, ToaCoin US Dollar'
  },
  {
    value: { id: '6532', name: 'TodayCoin Bitcoin', decimal: '8', symbol: 'TODAY/BTC' },
    label: 'TODAY/BTC, TodayCoin Bitcoin'
  },
  {
    value: { id: '6533', name: 'TodayCoin US Dollar', decimal: '6', symbol: 'TODAY/USD' },
    label: 'TODAY/USD, TodayCoin US Dollar'
  },
  {
    value: { id: '6534', name: 'Tokugawa Bitcoin', decimal: '8', symbol: 'TOK/BTC' },
    label: 'TOK/BTC, Tokugawa Bitcoin'
  },
  {
    value: { id: '6537', name: 'Tokugawa US Dollar', decimal: '5', symbol: 'TOK/USD' },
    label: 'TOK/USD, Tokugawa US Dollar'
  },
  {
    value: { id: '6538', name: 'TOKYO Bitcoin', decimal: '8', symbol: 'TOKC/BTC' },
    label: 'TOKC/BTC, TOKYO Bitcoin'
  },
  {
    value: { id: '6539', name: 'TOKYO US Dollar', decimal: '6', symbol: 'TOKC/USD' },
    label: 'TOKC/USD, TOKYO US Dollar'
  },
  {
    value: { id: '6540', name: 'SwapToken Bitcoin', decimal: '8', symbol: 'TOKEN/BTC' },
    label: 'TOKEN/BTC, SwapToken Bitcoin'
  },
  {
    value: { id: '6541', name: 'SwapToken US Dollar', decimal: '8', symbol: 'TOKEN/USD' },
    label: 'TOKEN/USD, SwapToken US Dollar'
  },
  {
    value: { id: '6542', name: 'TomoChain Bitcoin', decimal: '8', symbol: 'TOMO/BTC' },
    label: 'TOMO/BTC, TomoChain Bitcoin'
  },
  {
    value: { id: '6543', name: 'TomoChain Ethereum', decimal: '8', symbol: 'TOMO/ETH' },
    label: 'TOMO/ETH, TomoChain Ethereum'
  },
  {
    value: { id: '6544', name: 'TomoChain US Dollar', decimal: '8', symbol: 'TOMO/USD' },
    label: 'TOMO/USD, TomoChain US Dollar'
  },
  {
    value: { id: '6545', name: 'Topaz Coin Bitcoin', decimal: '8', symbol: 'TOPAZ/BTC' },
    label: 'TOPAZ/BTC, Topaz Coin Bitcoin'
  },
  {
    value: { id: '6546', name: 'Topaz Coin US Dollar', decimal: '5', symbol: 'TOPAZ/USD' },
    label: 'TOPAZ/USD, Topaz Coin US Dollar'
  },
  {
    value: { id: '6547', name: 'TopChain Bitcoin', decimal: '8', symbol: 'TOPC/BTC' },
    label: 'TOPC/BTC, TopChain Bitcoin'
  },
  {
    value: { id: '6548', name: 'TopChain Ethereum', decimal: '8', symbol: 'TOPC/ETH' },
    label: 'TOPC/ETH, TopChain Ethereum'
  },
  {
    value: { id: '6549', name: 'TopChain US Dollar', decimal: '6', symbol: 'TOPC/USD' },
    label: 'TOPC/USD, TopChain US Dollar'
  },
  {
    value: { id: '6550', name: 'Torcoin Bitcoin', decimal: '8', symbol: 'TOR/BTC' },
    label: 'TOR/BTC, Torcoin Bitcoin'
  },
  {
    value: { id: '6551', name: 'Torcoin US Dollar', decimal: '6', symbol: 'TOR/USD' },
    label: 'TOR/USD, Torcoin US Dollar'
  },
  {
    value: { id: '6552', name: 'TokenPay Bitcoin', decimal: '8', symbol: 'TPAY/BTC' },
    label: 'TPAY/BTC, TokenPay Bitcoin'
  },
  {
    value: { id: '6554', name: 'TokenPay Ethereum', decimal: '8', symbol: 'TPAY/ETH' },
    label: 'TPAY/ETH, TokenPay Ethereum'
  },
  {
    value: { id: '6556', name: 'TokenPay US Dollar', decimal: '6', symbol: 'TPAY/USD' },
    label: 'TPAY/USD, TokenPay US Dollar'
  },
  {
    value: { id: '6557', name: 'OriginTrail Ethereum', decimal: '8', symbol: 'TRAC/ETH' },
    label: 'TRAC/ETH, OriginTrail Ethereum'
  },
  {
    value: { id: '6558', name: 'OriginTrail US Dollar', decimal: '8', symbol: 'TRAC/USD' },
    label: 'TRAC/USD, OriginTrail US Dollar'
  },
  {
    value: { id: '6562', name: 'Terracoin US Dollar', decimal: '5', symbol: 'TRC/USD' },
    label: 'TRC/USD, Terracoin US Dollar'
  },
  {
    value: { id: '6563', name: 'Tracto Bitcoin', decimal: '8', symbol: 'TRCT/BTC' },
    label: 'TRCT/BTC, Tracto Bitcoin'
  },
  {
    value: { id: '6565', name: 'Tracto US Dollar', decimal: '6', symbol: 'TRCT/USD' },
    label: 'TRCT/USD, Tracto US Dollar'
  },
  {
    value: { id: '6567', name: 'Triangles Bitcoin', decimal: '6', symbol: 'TRI/BTC' },
    label: 'TRI/BTC, Triangles Bitcoin'
  },
  {
    value: { id: '6570', name: 'Triangles US Dollar', decimal: '4', symbol: 'TRI/USD' },
    label: 'TRI/USD, Triangles US Dollar'
  },
  {
    value: { id: '6571', name: 'Triaconta Ethereum', decimal: '6', symbol: 'TRIA/ETH' },
    label: 'TRIA/ETH, Triaconta Ethereum'
  },
  {
    value: { id: '6572', name: 'Triaconta US Dollar', decimal: '4', symbol: 'TRIA/USD' },
    label: 'TRIA/USD, Triaconta US Dollar'
  },
  {
    value: { id: '6573', name: 'TrickyCoin Bitcoin', decimal: '8', symbol: 'TRICK/BTC' },
    label: 'TRICK/BTC, TrickyCoin Bitcoin'
  },
  {
    value: { id: '6574', name: 'TrickyCoin US Dollar', decimal: '6', symbol: 'TRICK/USD' },
    label: 'TRICK/USD, TrickyCoin US Dollar'
  },
  {
    value: { id: '6576', name: 'TriggersÂ  Bitcoin', decimal: '7', symbol: 'TRIG/BTC' },
    label: 'TRIG/BTC, TriggersÂ  Bitcoin'
  },
  {
    value: { id: '6578', name: 'TriggersÂ  US Dollar', decimal: '5', symbol: 'TRIG/USD' },
    label: 'TRIG/USD, TriggersÂ  US Dollar'
  },
  {
    value: { id: '6582', name: 'Truckcoin US Dollar', decimal: '6', symbol: 'TRK/USD' },
    label: 'TRK/USD, Truckcoin US Dollar'
  },
  {
    value: { id: '6584', name: 'Trollcoin US Dollar', decimal: '6', symbol: 'TROLL/USD' },
    label: 'TROLL/USD, Trollcoin US Dollar'
  },
  {
    value: { id: '6588', name: 'TrueChain Bitcoin', decimal: '8', symbol: 'TRUE/BTC' },
    label: 'TRUE/BTC, TrueChain Bitcoin'
  },
  {
    value: { id: '6589', name: 'TrueChain Ethereum', decimal: '8', symbol: 'TRUE/ETH' },
    label: 'TRUE/ETH, TrueChain Ethereum'
  },
  {
    value: { id: '6590', name: 'TrueChain US Dollar', decimal: '4', symbol: 'TRUE/USD' },
    label: 'TRUE/USD, TrueChain US Dollar'
  },
  {
    value: { id: '6594', name: 'TrumpCoin US Dollar', decimal: '6', symbol: 'TRUMP/USD' },
    label: 'TRUMP/USD, TrumpCoin US Dollar'
  },
  {
    value: { id: '6595', name: 'TrustPlus Bitcoin', decimal: '8', symbol: 'TRUST/BTC' },
    label: 'TRUST/BTC, TrustPlus Bitcoin'
  },
  {
    value: { id: '6596', name: 'TrustPlus US Dollar', decimal: '6', symbol: 'TRUST/USD' },
    label: 'TRUST/USD, TrustPlus US Dollar'
  },
  {
    value: { id: '6597', name: 'TRON Australian Dollar', decimal: '6', symbol: 'TRX/AUD' },
    label: 'TRX/AUD, TRON Australian Dollar'
  },
  {
    value: { id: '6598', name: 'TRON bitCNY', decimal: '5', symbol: 'TRX/BITCNY' },
    label: 'TRX/BITCNY, TRON bitCNY'
  },
  {
    value: { id: '6600', name: 'TRON Canadian Dollar', decimal: '6', symbol: 'TRX/CAD' },
    label: 'TRX/CAD, TRON Canadian Dollar'
  },
  {
    value: { id: '6602', name: 'TRON Ethereum', decimal: '7', symbol: 'TRX/ETH' },
    label: 'TRX/ETH, TRON Ethereum'
  },
  {
    value: { id: '6603', name: 'TRON Euro', decimal: '6', symbol: 'TRX/EUR' },
    label: 'TRX/EUR, TRON Euro'
  },
  {
    value: { id: '6604', name: 'TRON Hong Kong Dollar', decimal: '5', symbol: 'TRX/HKD' },
    label: 'TRX/HKD, TRON Hong Kong Dollar'
  },
  {
    value: { id: '6605', name: 'TRON Israeli Shekel', decimal: '5', symbol: 'TRX/ILS' },
    label: 'TRX/ILS, TRON Israeli Shekel'
  },
  {
    value: { id: '6606', name: 'TRON Indian Rupee', decimal: '2', symbol: 'TRX/INR' },
    label: 'TRX/INR, TRON Indian Rupee'
  },
  {
    value: { id: '6607', name: 'TRON Korean Won', decimal: '2', symbol: 'TRX/KRW' },
    label: 'TRX/KRW, TRON Korean Won'
  },
  {
    value: { id: '6608', name: 'TRON Mexican Peso', decimal: '5', symbol: 'TRX/MXN' },
    label: 'TRX/MXN, TRON Mexican Peso'
  },
  {
    value: { id: '6609', name: 'TRON Malaysian Ringgit', decimal: '5', symbol: 'TRX/MYR' },
    label: 'TRX/MYR, TRON Malaysian Ringgit'
  },
  {
    value: { id: '6610', name: 'TRON Polish Zloty', decimal: '5', symbol: 'TRX/PLN' },
    label: 'TRX/PLN, TRON Polish Zloty'
  },
  {
    value: { id: '6611', name: 'TRON Russian Ruble', decimal: '4', symbol: 'TRX/RUB' },
    label: 'TRX/RUB, TRON Russian Ruble'
  },
  {
    value: { id: '6612', name: 'TRON Saudi Riyal', decimal: '5', symbol: 'TRX/SAR' },
    label: 'TRX/SAR, TRON Saudi Riyal'
  },
  {
    value: { id: '6613', name: 'TRON Swedish Krona', decimal: '5', symbol: 'TRX/SEK' },
    label: 'TRX/SEK, TRON Swedish Krona'
  },
  {
    value: { id: '6614', name: 'TRON Turkish Lira', decimal: '5', symbol: 'TRX/TRY' },
    label: 'TRX/TRY, TRON Turkish Lira'
  },
  {
    value: { id: '6615', name: 'TRON US Dollar', decimal: '6', symbol: 'TRX/USD' },
    label: 'TRX/USD, TRON US Dollar'
  },
  {
    value: { id: '6616', name: 'TRON Vietnamese Dong', decimal: '2', symbol: 'TRX/VND' },
    label: 'TRX/VND, TRON Vietnamese Dong'
  },
  {
    value: { id: '6617', name: 'TRON XRP', decimal: '6', symbol: 'TRX/XRP' },
    label: 'TRX/XRP, TRON XRP'
  },
  {
    value: { id: '6618', name: 'TRON South African Rand', decimal: '5', symbol: 'TRX/ZAR' },
    label: 'TRX/ZAR, TRON South African Rand'
  },
  {
    value: {
      id: '6621',
      name: 'Tattoocoin (Standard Edition) US Dollar',
      decimal: '6',
      symbol: 'TSE/USD'
    },
    label: 'TSE/USD, Tattoocoin (Standard Edition) US Dollar'
  },
  {
    value: { id: '6622', name: 'Energo Bitcoin', decimal: '8', symbol: 'TSL/BTC' },
    label: 'TSL/BTC, Energo Bitcoin'
  },
  {
    value: { id: '6624', name: 'Energo Qtum', decimal: '6', symbol: 'TSL/QTUM' },
    label: 'TSL/QTUM, Energo Qtum'
  },
  {
    value: { id: '6625', name: 'Energo US Dollar', decimal: '6', symbol: 'TSL/USD' },
    label: 'TSL/USD, Energo US Dollar'
  },
  {
    value: { id: '6626', name: 'Tristar Coin Bitcoin', decimal: '8', symbol: 'TSTR/BTC' },
    label: 'TSTR/BTC, Tristar Coin Bitcoin'
  },
  {
    value: { id: '6627', name: 'Tristar Coin US Dollar', decimal: '6', symbol: 'TSTR/USD' },
    label: 'TSTR/USD, Tristar Coin US Dollar'
  },
  {
    value: { id: '6628', name: 'TTC Ethereum', decimal: '4', symbol: 'TTCP/ETH' },
    label: 'TTCP/ETH, TTC Ethereum'
  },
  {
    value: { id: '6629', name: 'TTC US Dollar', decimal: '4', symbol: 'TTCP/USD' },
    label: 'TTCP/USD, TTC US Dollar'
  },
  {
    value: { id: '6633', name: 'TurboCoin Bitcoin', decimal: '8', symbol: 'TURBO/BTC' },
    label: 'TURBO/BTC, TurboCoin Bitcoin'
  },
  {
    value: { id: '6634', name: 'TurboCoin US Dollar', decimal: '7', symbol: 'TURBO/USD' },
    label: 'TURBO/USD, TurboCoin US Dollar'
  },
  {
    value: { id: '6638', name: 'TrueUSD US Dollar', decimal: '4', symbol: 'TUSD/USD' },
    label: 'TUSD/USD, TrueUSD US Dollar'
  },
  {
    value: { id: '6642', name: 'TransferCoin US Dollar', decimal: '5', symbol: 'TX/USD' },
    label: 'TX/USD, TransferCoin US Dollar'
  },
  {
    value: { id: '6646', name: 'TrezarCoin US Dollar', decimal: '6', symbol: 'TZC/USD' },
    label: 'TZC/USD, TrezarCoin US Dollar'
  },
  {
    value: { id: '6647', name: 'UAHPay Ethereum', decimal: '8', symbol: 'UAHPAY/ETH' },
    label: 'UAHPAY/ETH, UAHPay Ethereum'
  },
  {
    value: { id: '6648', name: 'UAHPay US Dollar', decimal: '8', symbol: 'UAHPAY/USD' },
    label: 'UAHPAY/USD, UAHPay US Dollar'
  },
  {
    value: { id: '6649', name: 'Ubiq Bitcoin', decimal: '6', symbol: 'UBQ/BTC' },
    label: 'UBQ/BTC, Ubiq Bitcoin'
  },
  {
    value: { id: '6652', name: 'Ubiq US Dollar', decimal: '5', symbol: 'UBQ/USD' },
    label: 'UBQ/USD, Ubiq US Dollar'
  },
  {
    value: { id: '6653', name: 'Unibright Ethereum', decimal: '8', symbol: 'UBT/ETH' },
    label: 'UBT/ETH, Unibright Ethereum'
  },
  {
    value: { id: '6654', name: 'Unibright US Dollar', decimal: '8', symbol: 'UBT/USD' },
    label: 'UBT/USD, Unibright US Dollar'
  },
  {
    value: { id: '6664', name: 'Uniform Fiscal Object Bitcoin', decimal: '8', symbol: 'UFO/BTC' },
    label: 'UFO/BTC, Uniform Fiscal Object Bitcoin'
  },
  {
    value: { id: '6665', name: 'Uniform Fiscal Object US Dollar', decimal: '6', symbol: 'UFO/USD' },
    label: 'UFO/USD, Uniform Fiscal Object US Dollar'
  },
  {
    value: { id: '6670', name: 'Upfiring US Dollar', decimal: '5', symbol: 'UFR/USD' },
    label: 'UFR/USD, Upfiring US Dollar'
  },
  {
    value: { id: '6677', name: 'Unitus US Dollar', decimal: '6', symbol: 'UIS/USD' },
    label: 'UIS/USD, Unitus US Dollar'
  },
  {
    value: { id: '6680', name: 'Unikoin Gold US Dollar', decimal: '6', symbol: 'UKG/USD' },
    label: 'UKG/USD, Unikoin Gold US Dollar'
  },
  {
    value: { id: '6681', name: 'Ulatech Bitcoin', decimal: '8', symbol: 'ULA/BTC' },
    label: 'ULA/BTC, Ulatech Bitcoin'
  },
  {
    value: { id: '6682', name: 'Ulatech US Dollar', decimal: '6', symbol: 'ULA/USD' },
    label: 'ULA/USD, Ulatech US Dollar'
  },
  {
    value: { id: '6683', name: 'UnbreakableCoin Bitcoin', decimal: '7', symbol: 'UNB/BTC' },
    label: 'UNB/BTC, UnbreakableCoin Bitcoin'
  },
  {
    value: { id: '6684', name: 'UnbreakableCoin US Dollar', decimal: '5', symbol: 'UNB/USD' },
    label: 'UNB/USD, UnbreakableCoin US Dollar'
  },
  {
    value: { id: '6685', name: 'UNCoin Bitcoin', decimal: '8', symbol: 'UNC/BTC' },
    label: 'UNC/BTC, UNCoin Bitcoin'
  },
  {
    value: { id: '6686', name: 'UNCoin US Dollar', decimal: '8', symbol: 'UNC/USD' },
    label: 'UNC/USD, UNCoin US Dollar'
  },
  {
    value: { id: '6687', name: 'Universe Bitcoin', decimal: '8', symbol: 'UNI/BTC' },
    label: 'UNI/BTC, Universe Bitcoin'
  },
  {
    value: { id: '6688', name: 'Universe US Dollar', decimal: '6', symbol: 'UNI/USD' },
    label: 'UNI/USD, Universe US Dollar'
  },
  {
    value: { id: '6689', name: 'UniCoin Bitcoin', decimal: '8', symbol: 'UNIC/BTC' },
    label: 'UNIC/BTC, UniCoin Bitcoin'
  },
  {
    value: { id: '6692', name: 'UniCoin US Dollar', decimal: '5', symbol: 'UNIC/USD' },
    label: 'UNIC/USD, UniCoin US Dollar'
  },
  {
    value: { id: '6696', name: 'Unify US Dollar', decimal: '6', symbol: 'UNIFY/USD' },
    label: 'UNIFY/USD, Unify US Dollar'
  },
  {
    value: { id: '6700', name: 'Universal Currency US Dollar', decimal: '5', symbol: 'UNIT/USD' },
    label: 'UNIT/USD, Universal Currency US Dollar'
  },
  {
    value: { id: '6704', name: 'GameUnits US Dollar', decimal: '6', symbol: 'UNITS/USD' },
    label: 'UNITS/USD, GameUnits US Dollar'
  },
  {
    value: { id: '6711', name: 'UniversalRoyalCoin US Dollar', decimal: '6', symbol: 'UNRC/USD' },
    label: 'UNRC/USD, UniversalRoyalCoin US Dollar'
  },
  {
    value: { id: '6712', name: 'Sentinel Protocol Ethereum', decimal: '8', symbol: 'UPP/ETH' },
    label: 'UPP/ETH, Sentinel Protocol Ethereum'
  },
  {
    value: { id: '6713', name: 'Sentinel Protocol US Dollar', decimal: '8', symbol: 'UPP/USD' },
    label: 'UPP/USD, Sentinel Protocol US Dollar'
  },
  {
    value: { id: '6715', name: 'Uquid Coin Bitcoin', decimal: '6', symbol: 'UQC/BTC' },
    label: 'UQC/BTC, Uquid Coin Bitcoin'
  },
  {
    value: { id: '6718', name: 'UR Bitcoin', decimal: '8', symbol: 'UR/BTC' },
    label: 'UR/BTC, UR Bitcoin'
  },
  {
    value: { id: '6721', name: 'UR US Dollar', decimal: '6', symbol: 'UR/USD' },
    label: 'UR/USD, UR US Dollar'
  },
  {
    value: { id: '6722', name: 'Unrealcoin Bitcoin', decimal: '8', symbol: 'URC/BTC' },
    label: 'URC/BTC, Unrealcoin Bitcoin'
  },
  {
    value: { id: '6723', name: 'Unrealcoin US Dollar', decimal: '6', symbol: 'URC/USD' },
    label: 'URC/USD, Unrealcoin US Dollar'
  },
  {
    value: { id: '6724', name: 'Uro Bitcoin', decimal: '8', symbol: 'URO/BTC' },
    label: 'URO/BTC, Uro Bitcoin'
  },
  {
    value: { id: '6725', name: 'Uro US Dollar', decimal: '6', symbol: 'URO/USD' },
    label: 'URO/USD, Uro US Dollar'
  },
  {
    value: { id: '6726', name: 'Ultimate Secure Cash Bitcoin', decimal: '8', symbol: 'USC/BTC' },
    label: 'USC/BTC, Ultimate Secure Cash Bitcoin'
  },
  {
    value: { id: '6727', name: 'Ultimate Secure Cash US Dollar', decimal: '6', symbol: 'USC/USD' },
    label: 'USC/USD, Ultimate Secure Cash US Dollar'
  },
  {
    value: { id: '6728', name: 'US Dollar Bancor', decimal: '5', symbol: 'USD/BNT' },
    label: 'USD/BNT, US Dollar Bancor'
  },
  {
    value: { id: '6731', name: 'US Dollar EOS', decimal: '5', symbol: 'USD/EOS' },
    label: 'USD/EOS, US Dollar EOS'
  },
  {
    value: { id: '6732', name: 'US Dollar HyperCash', decimal: '5', symbol: 'USD/HSR' },
    label: 'USD/HSR, US Dollar HyperCash'
  },
  {
    value: { id: '6733', name: 'US Dollar Litecoin', decimal: '6', symbol: 'USD/LTC' },
    label: 'USD/LTC, US Dollar Litecoin'
  },
  {
    value: { id: '6734', name: 'US Dollar Stellar', decimal: '4', symbol: 'USD/XLM' },
    label: 'USD/XLM, US Dollar Stellar'
  },
  {
    value: { id: '6737', name: 'USD Coin Ethereum', decimal: '8', symbol: 'USDC/ETH' },
    label: 'USDC/ETH, USD Coin Ethereum'
  },
  {
    value: { id: '6738', name: 'USD Coin Korean Won', decimal: '2', symbol: 'USDC/KRW' },
    label: 'USDC/KRW, USD Coin Korean Won'
  },
  {
    value: { id: '6739', name: 'USD Coin US Dollar', decimal: '6', symbol: 'USDC/USD' },
    label: 'USDC/USD, USD Coin US Dollar'
  },
  {
    value: { id: '6740', name: 'USDe Bitcoin', decimal: '8', symbol: 'USDE/BTC' },
    label: 'USDE/BTC, USDe Bitcoin'
  },
  {
    value: { id: '6741', name: 'USDe US Dollar', decimal: '7', symbol: 'USDE/USD' },
    label: 'USDE/USD, USDe US Dollar'
  },
  {
    value: { id: '6742', name: 'Tether Brazil Real', decimal: '3', symbol: 'USDT/BRL' },
    label: 'USDT/BRL, Tether Brazil Real'
  },
  {
    value: { id: '6743', name: 'Tether Russian Ruble', decimal: '3', symbol: 'USDT/RUB' },
    label: 'USDT/RUB, Tether Russian Ruble'
  },
  {
    value: { id: '6744', name: 'Tether Thai Baht', decimal: '3', symbol: 'USDT/THB' },
    label: 'USDT/THB, Tether Thai Baht'
  },
  {
    value: { id: '6746', name: 'Tether US Dollar', decimal: '4', symbol: 'USDT/USD' },
    label: 'USDT/USD, Tether US Dollar'
  },
  {
    value: { id: '6749', name: 'UltraCoin Bitcoin', decimal: '8', symbol: 'UTC/BTC' },
    label: 'UTC/BTC, UltraCoin Bitcoin'
  },
  {
    value: { id: '6752', name: 'UltraCoin US Dollar', decimal: '6', symbol: 'UTC/USD' },
    label: 'UTC/USD, UltraCoin US Dollar'
  },
  {
    value: { id: '6754', name: 'UTRUST Bitcoin', decimal: '8', symbol: 'UTK/BTC' },
    label: 'UTK/BTC, UTRUST Bitcoin'
  },
  {
    value: { id: '6755', name: 'UTRUST Ethereum', decimal: '6', symbol: 'UTK/ETH' },
    label: 'UTK/ETH, UTRUST Ethereum'
  },
  {
    value: { id: '6756', name: 'UTRUST US Dollar', decimal: '6', symbol: 'UTK/USD' },
    label: 'UTK/USD, UTRUST US Dollar'
  },
  {
    value: { id: '6759', name: 'Universa US Dollar', decimal: '6', symbol: 'UTNP/USD' },
    label: 'UTNP/USD, Universa US Dollar'
  },
  {
    value: { id: '6760', name: 'United Traders Token Bitcoin', decimal: '6', symbol: 'UTT/BTC' },
    label: 'UTT/BTC, United Traders Token Bitcoin'
  },
  {
    value: { id: '6761', name: 'United Traders Token Ethereum', decimal: '6', symbol: 'UTT/ETH' },
    label: 'UTT/ETH, United Traders Token Ethereum'
  },
  {
    value: { id: '6762', name: 'United Traders Token US Dollar', decimal: '4', symbol: 'UTT/USD' },
    label: 'UTT/USD, United Traders Token US Dollar'
  },
  {
    value: { id: '6766', name: 'Version US Dollar', decimal: '6', symbol: 'V/USD' },
    label: 'V/USD, Version US Dollar'
  },
  {
    value: { id: '6767', name: 'Valorbit Bitcoin', decimal: '8', symbol: 'VAL/BTC' },
    label: 'VAL/BTC, Valorbit Bitcoin'
  },
  {
    value: { id: '6768', name: 'Valorbit US Dollar', decimal: '8', symbol: 'VAL/USD' },
    label: 'VAL/USD, Valorbit US Dollar'
  },
  {
    value: { id: '6769', name: 'VPNCoin Bitcoin', decimal: '8', symbol: 'VASH/BTC' },
    label: 'VASH/BTC, VPNCoin Bitcoin'
  },
  {
    value: { id: '6770', name: 'VPNCoin US Dollar', decimal: '6', symbol: 'VASH/USD' },
    label: 'VASH/USD, VPNCoin US Dollar'
  },
  {
    value: { id: '6771', name: 'VirtualCoin Bitcoin', decimal: '8', symbol: 'VC/BTC' },
    label: 'VC/BTC, VirtualCoin Bitcoin'
  },
  {
    value: { id: '6772', name: 'VirtualCoin US Dollar', decimal: '6', symbol: 'VC/USD' },
    label: 'VC/USD, VirtualCoin US Dollar'
  },
  {
    value: { id: '6773', name: 'VectorAI Bitcoin', decimal: '8', symbol: 'VEC2/BTC' },
    label: 'VEC2/BTC, VectorAI Bitcoin'
  },
  {
    value: { id: '6774', name: 'VectorAI US Dollar', decimal: '6', symbol: 'VEC2/USD' },
    label: 'VEC2/USD, VectorAI US Dollar'
  },
  {
    value: { id: '6778', name: 'Veggie Bitcoin', decimal: '8', symbol: 'VEGI/BTC' },
    label: 'VEGI/BTC, Veggie Bitcoin'
  },
  {
    value: { id: '6779', name: 'Veggie US Dollar', decimal: '6', symbol: 'VEGI/USD' },
    label: 'VEGI/USD, Veggie US Dollar'
  },
  {
    value: { id: '6784', name: 'VeChain Australian Dollar', decimal: '4', symbol: 'VET/AUD' },
    label: 'VET/AUD, VeChain Australian Dollar'
  },
  {
    value: { id: '6785', name: 'VeChain Binance Coin', decimal: '5', symbol: 'VET/BNB' },
    label: 'VET/BNB, VeChain Binance Coin'
  },
  {
    value: { id: '6786', name: 'VeChain Bitcoin', decimal: '8', symbol: 'VET/BTC' },
    label: 'VET/BTC, VeChain Bitcoin'
  },
  {
    value: { id: '6787', name: 'VeChain Canadian Dollar', decimal: '4', symbol: 'VET/CAD' },
    label: 'VET/CAD, VeChain Canadian Dollar'
  },
  {
    value: { id: '6788', name: 'VeChain Chinese Yuan', decimal: '4', symbol: 'VET/CNY' },
    label: 'VET/CNY, VeChain Chinese Yuan'
  },
  {
    value: { id: '6789', name: 'VeChain Ethereum', decimal: '7', symbol: 'VET/ETH' },
    label: 'VET/ETH, VeChain Ethereum'
  },
  {
    value: { id: '6790', name: 'VeChain Euro', decimal: '4', symbol: 'VET/EUR' },
    label: 'VET/EUR, VeChain Euro'
  },
  {
    value: { id: '6791', name: 'VeChain Hong Kong Dollar', decimal: '3', symbol: 'VET/HKD' },
    label: 'VET/HKD, VeChain Hong Kong Dollar'
  },
  {
    value: { id: '6792', name: 'VeChain Israeli Shekel', decimal: '4', symbol: 'VET/ILS' },
    label: 'VET/ILS, VeChain Israeli Shekel'
  },
  {
    value: { id: '6793', name: 'VeChain Indian Rupee', decimal: '2', symbol: 'VET/INR' },
    label: 'VET/INR, VeChain Indian Rupee'
  },
  {
    value: { id: '6794', name: 'VeChain Korean Won', decimal: '2', symbol: 'VET/KRW' },
    label: 'VET/KRW, VeChain Korean Won'
  },
  {
    value: { id: '6795', name: 'VeChain Mexican Peso', decimal: '3', symbol: 'VET/MXN' },
    label: 'VET/MXN, VeChain Mexican Peso'
  },
  {
    value: { id: '6796', name: 'VeChain Malaysian Ringgit', decimal: '4', symbol: 'VET/MYR' },
    label: 'VET/MYR, VeChain Malaysian Ringgit'
  },
  {
    value: { id: '6797', name: 'VeChain Polish Zloty', decimal: '4', symbol: 'VET/PLN' },
    label: 'VET/PLN, VeChain Polish Zloty'
  },
  {
    value: { id: '6798', name: 'VeChain Russian Ruble', decimal: '2', symbol: 'VET/RUB' },
    label: 'VET/RUB, VeChain Russian Ruble'
  },
  {
    value: { id: '6799', name: 'VeChain Saudi Riyal', decimal: '4', symbol: 'VET/SAR' },
    label: 'VET/SAR, VeChain Saudi Riyal'
  },
  {
    value: { id: '6800', name: 'VeChain Swedish Krona', decimal: '3', symbol: 'VET/SEK' },
    label: 'VET/SEK, VeChain Swedish Krona'
  },
  {
    value: { id: '6801', name: 'VeChain Turkish Lira', decimal: '4', symbol: 'VET/TRY' },
    label: 'VET/TRY, VeChain Turkish Lira'
  },
  {
    value: { id: '6802', name: 'VeChain US Dollar', decimal: '5', symbol: 'VET/USD' },
    label: 'VET/USD, VeChain US Dollar'
  },
  {
    value: { id: '6803', name: 'VeChain Vietnamese Dong', decimal: '0', symbol: 'VET/VND' },
    label: 'VET/VND, VeChain Vietnamese Dong'
  },
  {
    value: { id: '6804', name: 'VeChain South African Rand', decimal: '3', symbol: 'VET/ZAR' },
    label: 'VET/ZAR, VeChain South African Rand'
  },
  {
    value: { id: '6805', name: 'Vexanium Bitcoin', decimal: '8', symbol: 'VEX/BTC' },
    label: 'VEX/BTC, Vexanium Bitcoin'
  },
  {
    value: { id: '6806', name: 'Vexanium Indonesian Rupiah', decimal: '0', symbol: 'VEX/IDR' },
    label: 'VEX/IDR, Vexanium Indonesian Rupiah'
  },
  {
    value: { id: '6807', name: 'Vexanium US Dollar', decimal: '4', symbol: 'VEX/USD' },
    label: 'VEX/USD, Vexanium US Dollar'
  },
  {
    value: { id: '6809', name: 'Viacoin Bitcoin', decimal: '6', symbol: 'VIA/BTC' },
    label: 'VIA/BTC, Viacoin Bitcoin'
  },
  {
    value: { id: '6811', name: 'Viacoin US Dollar', decimal: '5', symbol: 'VIA/USD' },
    label: 'VIA/USD, Viacoin US Dollar'
  },
  {
    value: { id: '6812', name: 'Viberate Bitcoin', decimal: '8', symbol: 'VIB/BTC' },
    label: 'VIB/BTC, Viberate Bitcoin'
  },
  {
    value: { id: '6813', name: 'Viberate Ethereum', decimal: '6', symbol: 'VIB/ETH' },
    label: 'VIB/ETH, Viberate Ethereum'
  },
  {
    value: { id: '6814', name: 'Viberate US Dollar', decimal: '5', symbol: 'VIB/USD' },
    label: 'VIB/USD, Viberate US Dollar'
  },
  {
    value: { id: '6815', name: 'VIBE Bitcoin', decimal: '8', symbol: 'VIBE/BTC' },
    label: 'VIBE/BTC, VIBE Bitcoin'
  },
  {
    value: { id: '6817', name: 'VIBE US Dollar', decimal: '6', symbol: 'VIBE/USD' },
    label: 'VIBE/USD, VIBE US Dollar'
  },
  {
    value: { id: '6821', name: 'PureVidz US Dollar', decimal: '6', symbol: 'VIDZ/USD' },
    label: 'VIDZ/USD, PureVidz US Dollar'
  },
  {
    value: { id: '6822', name: 'VIP Tokens Bitcoin', decimal: '8', symbol: 'VIP/BTC' },
    label: 'VIP/BTC, VIP Tokens Bitcoin'
  },
  {
    value: { id: '6823', name: 'VIP Tokens US Dollar', decimal: '6', symbol: 'VIP/USD' },
    label: 'VIP/USD, VIP Tokens US Dollar'
  },
  {
    value: { id: '6824', name: 'Visio Bitcoin', decimal: '8', symbol: 'VISIO/BTC' },
    label: 'VISIO/BTC, Visio Bitcoin'
  },
  {
    value: { id: '6825', name: 'Visio US Dollar', decimal: '6', symbol: 'VISIO/USD' },
    label: 'VISIO/USD, Visio US Dollar'
  },
  {
    value: { id: '6826', name: 'VITE Ethereum', decimal: '8', symbol: 'VITE/ETH' },
    label: 'VITE/ETH, VITE Ethereum'
  },
  {
    value: { id: '6827', name: 'VITE US Dollar', decimal: '8', symbol: 'VITE/USD' },
    label: 'VITE/USD, VITE US Dollar'
  },
  {
    value: { id: '6828', name: 'Viuly Bitcoin', decimal: '8', symbol: 'VIU/BTC' },
    label: 'VIU/BTC, Viuly Bitcoin'
  },
  {
    value: { id: '6830', name: 'Viuly US Dollar', decimal: '6', symbol: 'VIU/USD' },
    label: 'VIU/USD, Viuly US Dollar'
  },
  {
    value: { id: '6831', name: 'VIVO Bitcoin', decimal: '8', symbol: 'VIVO/BTC' },
    label: 'VIVO/BTC, VIVO Bitcoin'
  },
  {
    value: { id: '6834', name: 'VIVO US Dollar', decimal: '5', symbol: 'VIVO/USD' },
    label: 'VIVO/USD, VIVO US Dollar'
  },
  {
    value: { id: '6835', name: 'Veltor Bitcoin', decimal: '8', symbol: 'VLT/BTC' },
    label: 'VLT/BTC, Veltor Bitcoin'
  },
  {
    value: { id: '6836', name: 'Veltor US Dollar', decimal: '6', symbol: 'VLT/USD' },
    label: 'VLT/USD, Veltor US Dollar'
  },
  {
    value: { id: '6837', name: 'Vault Coin Bitcoin', decimal: '8', symbol: 'VLTC/BTC' },
    label: 'VLTC/BTC, Vault Coin Bitcoin'
  },
  {
    value: { id: '6838', name: 'Vault Coin US Dollar', decimal: '7', symbol: 'VLTC/USD' },
    label: 'VLTC/USD, Vault Coin US Dollar'
  },
  {
    value: { id: '6848', name: 'Bitvolt Bitcoin', decimal: '8', symbol: 'VOLT/BTC' },
    label: 'VOLT/BTC, Bitvolt Bitcoin'
  },
  {
    value: { id: '6849', name: 'Bitvolt US Dollar', decimal: '6', symbol: 'VOLT/USD' },
    label: 'VOLT/USD, Bitvolt US Dollar'
  },
  {
    value: { id: '6850', name: 'Voxels Bitcoin', decimal: '8', symbol: 'VOX/BTC' },
    label: 'VOX/BTC, Voxels Bitcoin'
  },
  {
    value: { id: '6852', name: 'Voxels US Dollar', decimal: '5', symbol: 'VOX/USD' },
    label: 'VOX/USD, Voxels US Dollar'
  },
  {
    value: { id: '6853', name: 'Voyacoin Bitcoin', decimal: '7', symbol: 'VOYA/BTC' },
    label: 'VOYA/BTC, Voyacoin Bitcoin'
  },
  {
    value: { id: '6854', name: 'Voyacoin US Dollar', decimal: '5', symbol: 'VOYA/USD' },
    label: 'VOYA/USD, Voyacoin US Dollar'
  },
  {
    value: { id: '6855', name: 'VapersCoin Bitcoin', decimal: '8', symbol: 'VPRC/BTC' },
    label: 'VPRC/BTC, VapersCoin Bitcoin'
  },
  {
    value: { id: '6858', name: 'VapersCoin US Dollar', decimal: '7', symbol: 'VPRC/USD' },
    label: 'VPRC/USD, VapersCoin US Dollar'
  },
  {
    value: { id: '6859', name: 'VeriCoin Bitcoin', decimal: '8', symbol: 'VRC/BTC' },
    label: 'VRC/BTC, VeriCoin Bitcoin'
  },
  {
    value: { id: '6862', name: 'VeriCoin US Dollar', decimal: '5', symbol: 'VRC/USD' },
    label: 'VRC/USD, VeriCoin US Dollar'
  },
  {
    value: { id: '6866', name: 'VeriumReserve US Dollar', decimal: '5', symbol: 'VRM/USD' },
    label: 'VRM/USD, VeriumReserve US Dollar'
  },
  {
    value: { id: '6869', name: 'Veros US Dollar', decimal: '6', symbol: 'VRS/USD' },
    label: 'VRS/USD, Veros US Dollar'
  },
  {
    value: { id: '6872', name: 'vSlice US Dollar', decimal: '6', symbol: 'VSL/USD' },
    label: 'VSL/USD, vSlice US Dollar'
  },
  {
    value: { id: '6874', name: 'Vsync Bitcoin', decimal: '8', symbol: 'VSX/BTC' },
    label: 'VSX/BTC, Vsync Bitcoin'
  },
  {
    value: { id: '6875', name: 'Vsync US Dollar', decimal: '6', symbol: 'VSX/USD' },
    label: 'VSX/USD, Vsync US Dollar'
  },
  {
    value: { id: '6876', name: 'V Systems Bitcoin', decimal: '8', symbol: 'VSYS/BTC' },
    label: 'VSYS/BTC, V Systems Bitcoin'
  },
  {
    value: { id: '6877', name: 'V Systems US Dollar', decimal: '6', symbol: 'VSYS/USD' },
    label: 'VSYS/USD, V Systems US Dollar'
  },
  {
    value: { id: '6878', name: 'Vertcoin Bitcoin', decimal: '6', symbol: 'VTC/BTC' },
    label: 'VTC/BTC, Vertcoin Bitcoin'
  },
  {
    value: { id: '6879', name: 'Vertcoin Korean Won', decimal: '2', symbol: 'VTC/KRW' },
    label: 'VTC/KRW, Vertcoin Korean Won'
  },
  {
    value: { id: '6880', name: 'Vertcoin US Dollar', decimal: '5', symbol: 'VTC/USD' },
    label: 'VTC/USD, Vertcoin US Dollar'
  },
  {
    value: { id: '6881', name: 'vTorrent Bitcoin', decimal: '7', symbol: 'VTR/BTC' },
    label: 'VTR/BTC, vTorrent Bitcoin'
  },
  {
    value: { id: '6882', name: 'vTorrent US Dollar', decimal: '5', symbol: 'VTR/USD' },
    label: 'VTR/USD, vTorrent US Dollar'
  },
  {
    value: { id: '6883', name: 'Virta Unique Coin Bitcoin', decimal: '8', symbol: 'VUC/BTC' },
    label: 'VUC/BTC, Virta Unique Coin Bitcoin'
  },
  {
    value: { id: '6886', name: 'Virta Unique Coin US Dollar', decimal: '6', symbol: 'VUC/USD' },
    label: 'VUC/USD, Virta Unique Coin US Dollar'
  },
  {
    value: { id: '6888', name: 'Vulcano US Dollar', decimal: '6', symbol: 'VULC/USD' },
    label: 'VULC/USD, Vulcano US Dollar'
  },
  {
    value: { id: '6889', name: 'WABnetwork Bitcoin', decimal: '4', symbol: 'WAB/BTC' },
    label: 'WAB/BTC, WABnetwork Bitcoin'
  },
  {
    value: { id: '6890', name: 'WABnetwork US Dollar', decimal: '4', symbol: 'WAB/USD' },
    label: 'WAB/USD, WABnetwork US Dollar'
  },
  {
    value: { id: '6891', name: 'Wabi Binance Coin', decimal: '5', symbol: 'WABI/BNB' },
    label: 'WABI/BNB, Wabi Binance Coin'
  },
  {
    value: { id: '6892', name: 'Wabi Bitcoin', decimal: '6', symbol: 'WABI/BTC' },
    label: 'WABI/BTC, Wabi Bitcoin'
  },
  {
    value: { id: '6894', name: 'Wabi US Dollar', decimal: '5', symbol: 'WABI/USD' },
    label: 'WABI/USD, Wabi US Dollar'
  },
  {
    value: { id: '6895', name: 'Wanchain Binance Coin', decimal: '5', symbol: 'WAN/BNB' },
    label: 'WAN/BNB, Wanchain Binance Coin'
  },
  {
    value: { id: '6896', name: 'Wanchain Bitcoin', decimal: '6', symbol: 'WAN/BTC' },
    label: 'WAN/BTC, Wanchain Bitcoin'
  },
  {
    value: { id: '6897', name: 'Wanchain Ethereum', decimal: '6', symbol: 'WAN/ETH' },
    label: 'WAN/ETH, Wanchain Ethereum'
  },
  {
    value: { id: '6898', name: 'Wanchain US Dollar', decimal: '4', symbol: 'WAN/USD' },
    label: 'WAN/USD, Wanchain US Dollar'
  },
  {
    value: { id: '6899', name: 'Wanchain XRP', decimal: '4', symbol: 'WAN/XRP' },
    label: 'WAN/XRP, Wanchain XRP'
  },
  {
    value: { id: '6900', name: 'WARP Bitcoin', decimal: '8', symbol: 'WARP/BTC' },
    label: 'WARP/BTC, WARP Bitcoin'
  },
  {
    value: { id: '6901', name: 'WARP US Dollar', decimal: '6', symbol: 'WARP/USD' },
    label: 'WARP/USD, WARP US Dollar'
  },
  {
    value: { id: '6902', name: 'Waves Binance Coin', decimal: '5', symbol: 'WAVES/BNB' },
    label: 'WAVES/BNB, Waves Binance Coin'
  },
  {
    value: { id: '6903', name: 'Waves Brazil Real', decimal: '8', symbol: 'WAVES/BRL' },
    label: 'WAVES/BRL, Waves Brazil Real'
  },
  {
    value: { id: '6904', name: 'Waves Bitcoin', decimal: '6', symbol: 'WAVES/BTC' },
    label: 'WAVES/BTC, Waves Bitcoin'
  },
  {
    value: { id: '6905', name: 'Waves Ethereum', decimal: '6', symbol: 'WAVES/ETH' },
    label: 'WAVES/ETH, Waves Ethereum'
  },
  {
    value: { id: '6906', name: 'Waves Indonesian Rupiah', decimal: '0', symbol: 'WAVES/IDR' },
    label: 'WAVES/IDR, Waves Indonesian Rupiah'
  },
  {
    value: { id: '6908', name: 'Waves Russian Ruble', decimal: '2', symbol: 'WAVES/RUB' },
    label: 'WAVES/RUB, Waves Russian Ruble'
  },
  {
    value: { id: '6910', name: 'WAX Bancor', decimal: '6', symbol: 'WAX/BNT' },
    label: 'WAX/BNT, WAX Bancor'
  },
  {
    value: { id: '6911', name: 'WAX Bitcoin', decimal: '8', symbol: 'WAX/BTC' },
    label: 'WAX/BTC, WAX Bitcoin'
  },
  {
    value: { id: '6912', name: 'WAX Ethereum', decimal: '6', symbol: 'WAX/ETH' },
    label: 'WAX/ETH, WAX Ethereum'
  },
  {
    value: { id: '6913', name: 'WAX US Dollar', decimal: '6', symbol: 'WAX/USD' },
    label: 'WAX/USD, WAX US Dollar'
  },
  {
    value: { id: '6914', name: 'WayGuide Bitcoin', decimal: '8', symbol: 'WAY/BTC' },
    label: 'WAY/BTC, WayGuide Bitcoin'
  },
  {
    value: { id: '6915', name: 'WayGuide US Dollar', decimal: '6', symbol: 'WAY/USD' },
    label: 'WAY/USD, WayGuide US Dollar'
  },
  {
    value: { id: '6916', name: 'Wild Beast Block Bitcoin', decimal: '8', symbol: 'WBB/BTC' },
    label: 'WBB/BTC, Wild Beast Block Bitcoin'
  },
  {
    value: { id: '6917', name: 'Wild Beast Block US Dollar', decimal: '6', symbol: 'WBB/USD' },
    label: 'WBB/USD, Wild Beast Block US Dollar'
  },
  {
    value: { id: '6921', name: 'WINCOIN US Dollar', decimal: '5', symbol: 'WC/USD' },
    label: 'WC/USD, WINCOIN US Dollar'
  },
  {
    value: { id: '6922', name: 'Winco Bitcoin', decimal: '8', symbol: 'WCO/BTC' },
    label: 'WCO/BTC, Winco Bitcoin'
  },
  {
    value: { id: '6923', name: 'Winco US Dollar', decimal: '6', symbol: 'WCO/USD' },
    label: 'WCO/USD, Winco US Dollar'
  },
  {
    value: { id: '6924', name: 'Waves Community Token Bitcoin', decimal: '6', symbol: 'WCT/BTC' },
    label: 'WCT/BTC, Waves Community Token Bitcoin'
  },
  {
    value: { id: '6925', name: 'Waves Community Token US Dollar', decimal: '5', symbol: 'WCT/USD' },
    label: 'WCT/USD, Waves Community Token US Dollar'
  },
  {
    value: { id: '6928', name: 'WorldCoin US Dollar', decimal: '6', symbol: 'WDC/USD' },
    label: 'WDC/USD, WorldCoin US Dollar'
  },
  {
    value: { id: '6929', name: 'Webchain Bitcoin', decimal: '8', symbol: 'WEB/BTC' },
    label: 'WEB/BTC, Webchain Bitcoin'
  },
  {
    value: { id: '6930', name: 'Webchain US Dollar', decimal: '6', symbol: 'WEB/USD' },
    label: 'WEB/USD, Webchain US Dollar'
  },
  {
    value: { id: '6931', name: 'WavesGo Bitcoin', decimal: '8', symbol: 'WGO/BTC' },
    label: 'WGO/BTC, WavesGo Bitcoin'
  },
  {
    value: { id: '6932', name: 'WavesGo US Dollar', decimal: '6', symbol: 'WGO/USD' },
    label: 'WGO/USD, WavesGo US Dollar'
  },
  {
    value: { id: '6934', name: 'Wagerr Bitcoin', decimal: '8', symbol: 'WGR/BTC' },
    label: 'WGR/BTC, Wagerr Bitcoin'
  },
  {
    value: { id: '6935', name: 'Wagerr US Dollar', decimal: '5', symbol: 'WGR/USD' },
    label: 'WGR/USD, Wagerr US Dollar'
  },
  {
    value: { id: '6937', name: 'Wi Coin Bitcoin', decimal: '8', symbol: 'WIC/BTC' },
    label: 'WIC/BTC, Wi Coin Bitcoin'
  },
  {
    value: { id: '6938', name: 'Wi Coin Ethereum', decimal: '6', symbol: 'WIC/ETH' },
    label: 'WIC/ETH, Wi Coin Ethereum'
  },
  {
    value: { id: '6939', name: 'Wi Coin US Dollar', decimal: '6', symbol: 'WIC/USD' },
    label: 'WIC/USD, Wi Coin US Dollar'
  },
  {
    value: { id: '6940', name: 'WaykiChain Bitcoin', decimal: '8', symbol: 'WICC/BTC' },
    label: 'WICC/BTC, WaykiChain Bitcoin'
  },
  {
    value: { id: '6941', name: 'WaykiChain Ethereum', decimal: '8', symbol: 'WICC/ETH' },
    label: 'WICC/ETH, WaykiChain Ethereum'
  },
  {
    value: { id: '6942', name: 'WaykiChain US Dollar', decimal: '4', symbol: 'WICC/USD' },
    label: 'WICC/USD, WaykiChain US Dollar'
  },
  {
    value: { id: '6947', name: 'Wild Crypto US Dollar', decimal: '6', symbol: 'WILD/USD' },
    label: 'WILD/USD, Wild Crypto US Dollar'
  },
  {
    value: { id: '6948', name: 'Wings Bitcoin', decimal: '7', symbol: 'WINGS/BTC' },
    label: 'WINGS/BTC, Wings Bitcoin'
  },
  {
    value: { id: '6952', name: 'Wink Bitcoin', decimal: '8', symbol: 'WINK/BTC' },
    label: 'WINK/BTC, Wink Bitcoin'
  },
  {
    value: { id: '6953', name: 'Wink US Dollar', decimal: '6', symbol: 'WINK/USD' },
    label: 'WINK/USD, Wink US Dollar'
  },
  {
    value: { id: '6958', name: 'MyWish US Dollar', decimal: '6', symbol: 'WISH/USD' },
    label: 'WISH/USD, MyWish US Dollar'
  },
  {
    value: { id: '6959', name: 'WMCoin Bitcoin', decimal: '8', symbol: 'WMC/BTC' },
    label: 'WMC/BTC, WMCoin Bitcoin'
  },
  {
    value: { id: '6960', name: 'WMCoin US Dollar', decimal: '6', symbol: 'WMC/USD' },
    label: 'WMC/USD, WMCoin US Dollar'
  },
  {
    value: { id: '6961', name: 'WomenCoin Bitcoin', decimal: '8', symbol: 'WOMEN/BTC' },
    label: 'WOMEN/BTC, WomenCoin Bitcoin'
  },
  {
    value: { id: '6962', name: 'WomenCoin US Dollar', decimal: '7', symbol: 'WOMEN/USD' },
    label: 'WOMEN/USD, WomenCoin US Dollar'
  },
  {
    value: { id: '6963', name: 'HealthyWormCoin Bitcoin', decimal: '8', symbol: 'WORM/BTC' },
    label: 'WORM/BTC, HealthyWormCoin Bitcoin'
  },
  {
    value: { id: '6964', name: 'HealthyWormCoin US Dollar', decimal: '6', symbol: 'WORM/USD' },
    label: 'WORM/USD, HealthyWormCoin US Dollar'
  },
  {
    value: { id: '6965', name: 'Wowcoin Bitcoin', decimal: '8', symbol: 'WOW/BTC' },
    label: 'WOW/BTC, Wowcoin Bitcoin'
  },
  {
    value: { id: '6967', name: 'Wowcoin US Dollar', decimal: '8', symbol: 'WOW/USD' },
    label: 'WOW/USD, Wowcoin US Dollar'
  },
  {
    value: { id: '6968', name: 'WePower Bitcoin', decimal: '8', symbol: 'WPR/BTC' },
    label: 'WPR/BTC, WePower Bitcoin'
  },
  {
    value: { id: '6974', name: 'WarCoin Bitcoin', decimal: '8', symbol: 'WRCO/BTC' },
    label: 'WRCO/BTC, WarCoin Bitcoin'
  },
  {
    value: { id: '6977', name: 'WarCoin US Dollar', decimal: '6', symbol: 'WRCO/USD' },
    label: 'WRCO/USD, WarCoin US Dollar'
  },
  {
    value: { id: '6978', name: 'WeAreSatoshi Bitcoin', decimal: '8', symbol: 'WSX/BTC' },
    label: 'WSX/BTC, WeAreSatoshi Bitcoin'
  },
  {
    value: { id: '6981', name: 'WeAreSatoshi US Dollar', decimal: '6', symbol: 'WSX/USD' },
    label: 'WSX/USD, WeAreSatoshi US Dollar'
  },
  {
    value: { id: '6982', name: 'Waltonchain Binance Coin', decimal: '5', symbol: 'WTC/BNB' },
    label: 'WTC/BNB, Waltonchain Binance Coin'
  },
  {
    value: { id: '6983', name: 'Waltonchain Bitcoin', decimal: '6', symbol: 'WTC/BTC' },
    label: 'WTC/BTC, Waltonchain Bitcoin'
  },
  {
    value: { id: '6984', name: 'Waltonchain Ethereum', decimal: '6', symbol: 'WTC/ETH' },
    label: 'WTC/ETH, Waltonchain Ethereum'
  },
  {
    value: { id: '6987', name: 'Waltonchain US Dollar', decimal: '4', symbol: 'WTC/USD' },
    label: 'WTC/USD, Waltonchain US Dollar'
  },
  {
    value: { id: '6989', name: 'Giga Watt Token US Dollar', decimal: '5', symbol: 'WTT/USD' },
    label: 'WTT/USD, Giga Watt Token US Dollar'
  },
  {
    value: { id: '6990', name: 'X2 Bitcoin', decimal: '8', symbol: 'X2/BTC' },
    label: 'X2/BTC, X2 Bitcoin'
  },
  {
    value: { id: '6991', name: 'X2 US Dollar', decimal: '6', symbol: 'X2/USD' },
    label: 'X2/USD, X2 US Dollar'
  },
  {
    value: { id: '6992', name: 'X8X Token Bancor', decimal: '6', symbol: 'X8X/BNT' },
    label: 'X8X/BNT, X8X Token Bancor'
  },
  {
    value: { id: '6993', name: 'X8X Token Ethereum', decimal: '8', symbol: 'X8X/ETH' },
    label: 'X8X/ETH, X8X Token Ethereum'
  },
  {
    value: { id: '6994', name: 'X8X Token US Dollar', decimal: '6', symbol: 'X8X/USD' },
    label: 'X8X/USD, X8X Token US Dollar'
  },
  {
    value: { id: '6998', name: 'Asch US Dollar', decimal: '5', symbol: 'XAS/USD' },
    label: 'XAS/USD, Asch US Dollar'
  },
  {
    value: { id: '7000', name: 'Xaurum US Dollar', decimal: '6', symbol: 'XAUR/USD' },
    label: 'XAUR/USD, Xaurum US Dollar'
  },
  {
    value: { id: '7005', name: 'Billionaire Token Bitcoin', decimal: '8', symbol: 'XBL/BTC' },
    label: 'XBL/BTC, Billionaire Token Bitcoin'
  },
  {
    value: { id: '7009', name: 'Billionaire Token US Dollar', decimal: '6', symbol: 'XBL/USD' },
    label: 'XBL/USD, Billionaire Token US Dollar'
  },
  {
    value: { id: '7010', name: 'Bitcoin 21 Bitcoin', decimal: '8', symbol: 'XBTC21/BTC' },
    label: 'XBTC21/BTC, Bitcoin 21 Bitcoin'
  },
  {
    value: { id: '7011', name: 'Bitcoin 21 US Dollar', decimal: '5', symbol: 'XBTC21/USD' },
    label: 'XBTC21/USD, Bitcoin 21 US Dollar'
  },
  {
    value: { id: '7012', name: 'Beatcoin Bitcoin', decimal: '8', symbol: 'XBTS/BTC' },
    label: 'XBTS/BTC, Beatcoin Bitcoin'
  },
  {
    value: { id: '7013', name: 'Beatcoin US Dollar', decimal: '6', symbol: 'XBTS/USD' },
    label: 'XBTS/USD, Beatcoin US Dollar'
  },
  {
    value: { id: '7017', name: 'XTRABYTES US Dollar', decimal: '6', symbol: 'XBY/USD' },
    label: 'XBY/USD, XTRABYTES US Dollar'
  },
  {
    value: { id: '7019', name: 'Cryptonite US Dollar', decimal: '6', symbol: 'XCN/USD' },
    label: 'XCN/USD, Cryptonite US Dollar'
  },
  {
    value: { id: '7023', name: 'X-Coin US Dollar', decimal: '6', symbol: 'XCO/USD' },
    label: 'XCO/USD, X-Coin US Dollar'
  },
  {
    value: { id: '7025', name: 'Counterparty Japanese Yen', decimal: '2', symbol: 'XCP/JPY' },
    label: 'XCP/JPY, Counterparty Japanese Yen'
  },
  {
    value: { id: '7026', name: 'Counterparty US Dollar', decimal: '4', symbol: 'XCP/USD' },
    label: 'XCP/USD, Counterparty US Dollar'
  },
  {
    value: { id: '7027', name: 'Copico Bitcoin', decimal: '8', symbol: 'XCPO/BTC' },
    label: 'XCPO/BTC, Copico Bitcoin'
  },
  {
    value: { id: '7030', name: 'Copico US Dollar', decimal: '6', symbol: 'XCPO/USD' },
    label: 'XCPO/USD, Copico US Dollar'
  },
  {
    value: { id: '7031', name: 'Creatio Bitcoin', decimal: '8', symbol: 'XCRE/BTC' },
    label: 'XCRE/BTC, Creatio Bitcoin'
  },
  {
    value: { id: '7034', name: 'Creatio US Dollar', decimal: '6', symbol: 'XCRE/USD' },
    label: 'XCRE/USD, Creatio US Dollar'
  },
  {
    value: { id: '7035', name: 'C-Bit Bitcoin', decimal: '8', symbol: 'XCT/BTC' },
    label: 'XCT/BTC, C-Bit Bitcoin'
  },
  {
    value: { id: '7038', name: 'C-Bit US Dollar', decimal: '6', symbol: 'XCT/USD' },
    label: 'XCT/USD, C-Bit US Dollar'
  },
  {
    value: { id: '7042', name: 'CoinonatX US Dollar', decimal: '6', symbol: 'XCXT/USD' },
    label: 'XCXT/USD, CoinonatX US Dollar'
  },
  {
    value: { id: '7043', name: 'XinFin Network Ethereum', decimal: '8', symbol: 'XDCE/ETH' },
    label: 'XDCE/ETH, XinFin Network Ethereum'
  },
  {
    value: { id: '7044', name: 'XinFin Network US Dollar', decimal: '8', symbol: 'XDCE/USD' },
    label: 'XDCE/USD, XinFin Network US Dollar'
  },
  {
    value: { id: '7045', name: 'XDE II Bitcoin', decimal: '6', symbol: 'XDE2/BTC' },
    label: 'XDE2/BTC, XDE II Bitcoin'
  },
  {
    value: { id: '7046', name: 'XDE II US Dollar', decimal: '4', symbol: 'XDE2/USD' },
    label: 'XDE2/USD, XDE II US Dollar'
  },
  {
    value: { id: '7047', name: 'DigitalNote Bitcoin', decimal: '8', symbol: 'XDN/BTC' },
    label: 'XDN/BTC, DigitalNote Bitcoin'
  },
  {
    value: { id: '7048', name: 'DigitalNote Ethereum', decimal: '8', symbol: 'XDN/ETH' },
    label: 'XDN/ETH, DigitalNote Ethereum'
  },
  {
    value: { id: '7049', name: 'DigitalNote US Dollar', decimal: '6', symbol: 'XDN/USD' },
    label: 'XDN/USD, DigitalNote US Dollar'
  },
  {
    value: { id: '7050', name: 'XEL Bitcoin', decimal: '8', symbol: 'XEL/BTC' },
    label: 'XEL/BTC, XEL Bitcoin'
  },
  {
    value: { id: '7051', name: 'XEL US Dollar', decimal: '5', symbol: 'XEL/USD' },
    label: 'XEL/USD, XEL US Dollar'
  },
  {
    value: { id: '7052', name: 'NEM Australian Dollar', decimal: '5', symbol: 'XEM/AUD' },
    label: 'XEM/AUD, NEM Australian Dollar'
  },
  {
    value: { id: '7053', name: 'NEM bitCNY', decimal: '5', symbol: 'XEM/BITCNY' },
    label: 'XEM/BITCNY, NEM bitCNY'
  },
  {
    value: { id: '7055', name: 'NEM Bitcoin', decimal: '8', symbol: 'XEM/BTC' },
    label: 'XEM/BTC, NEM Bitcoin'
  },
  {
    value: { id: '7056', name: 'NEM Canadian Dollar', decimal: '5', symbol: 'XEM/CAD' },
    label: 'XEM/CAD, NEM Canadian Dollar'
  },
  {
    value: { id: '7057', name: 'NEM Chinese Yuan', decimal: '5', symbol: 'XEM/CNY' },
    label: 'XEM/CNY, NEM Chinese Yuan'
  },
  {
    value: { id: '7059', name: 'NEM Ethereum', decimal: '8', symbol: 'XEM/ETH' },
    label: 'XEM/ETH, NEM Ethereum'
  },
  {
    value: { id: '7060', name: 'NEM Euro', decimal: '5', symbol: 'XEM/EUR' },
    label: 'XEM/EUR, NEM Euro'
  },
  {
    value: { id: '7061', name: 'NEM Hong Kong Dollar', decimal: '5', symbol: 'XEM/HKD' },
    label: 'XEM/HKD, NEM Hong Kong Dollar'
  },
  {
    value: { id: '7062', name: 'NEM Israeli Shekel', decimal: '5', symbol: 'XEM/ILS' },
    label: 'XEM/ILS, NEM Israeli Shekel'
  },
  {
    value: { id: '7063', name: 'NEM Indian Rupee', decimal: '4', symbol: 'XEM/INR' },
    label: 'XEM/INR, NEM Indian Rupee'
  },
  {
    value: { id: '7064', name: 'NEM Japanese Yen', decimal: '3', symbol: 'XEM/JPY' },
    label: 'XEM/JPY, NEM Japanese Yen'
  },
  {
    value: { id: '7065', name: 'NEM Korean Won', decimal: '2', symbol: 'XEM/KRW' },
    label: 'XEM/KRW, NEM Korean Won'
  },
  {
    value: { id: '7067', name: 'NEM Mexican Peso', decimal: '4', symbol: 'XEM/MXN' },
    label: 'XEM/MXN, NEM Mexican Peso'
  },
  {
    value: { id: '7068', name: 'NEM Malaysian Ringgit', decimal: '5', symbol: 'XEM/MYR' },
    label: 'XEM/MYR, NEM Malaysian Ringgit'
  },
  {
    value: { id: '7069', name: 'NEM Polish Zloty', decimal: '5', symbol: 'XEM/PLN' },
    label: 'XEM/PLN, NEM Polish Zloty'
  },
  {
    value: { id: '7070', name: 'NEM Russian Ruble', decimal: '4', symbol: 'XEM/RUB' },
    label: 'XEM/RUB, NEM Russian Ruble'
  },
  {
    value: { id: '7071', name: 'NEM Saudi Riyal', decimal: '5', symbol: 'XEM/SAR' },
    label: 'XEM/SAR, NEM Saudi Riyal'
  },
  {
    value: { id: '7072', name: 'NEM Swedish Krona', decimal: '5', symbol: 'XEM/SEK' },
    label: 'XEM/SEK, NEM Swedish Krona'
  },
  {
    value: { id: '7073', name: 'NEM Turkish Lira', decimal: '5', symbol: 'XEM/TRY' },
    label: 'XEM/TRY, NEM Turkish Lira'
  },
  {
    value: { id: '7074', name: 'NEM US Dollar', decimal: '5', symbol: 'XEM/USD' },
    label: 'XEM/USD, NEM US Dollar'
  },
  {
    value: { id: '7075', name: 'NEM Vietnamese Dong', decimal: '2', symbol: 'XEM/VND' },
    label: 'XEM/VND, NEM Vietnamese Dong'
  },
  {
    value: { id: '7076', name: 'NEM XRP', decimal: '6', symbol: 'XEM/XRP' },
    label: 'XEM/XRP, NEM XRP'
  },
  {
    value: { id: '7077', name: 'NEM South African Rand', decimal: '4', symbol: 'XEM/ZAR' },
    label: 'XEM/ZAR, NEM South African Rand'
  },
  {
    value: { id: '7078', name: 'ETERNAL TOKEN Bitcoin', decimal: '8', symbol: 'XET/BTC' },
    label: 'XET/BTC, ETERNAL TOKEN Bitcoin'
  },
  {
    value: { id: '7080', name: 'ETERNAL TOKEN US Dollar', decimal: '6', symbol: 'XET/USD' },
    label: 'XET/USD, ETERNAL TOKEN US Dollar'
  },
  {
    value: { id: '7081', name: 'Footy Cash Bitcoin', decimal: '8', symbol: 'XFT/BTC' },
    label: 'XFT/BTC, Footy Cash Bitcoin'
  },
  {
    value: { id: '7082', name: 'Footy Cash US Dollar', decimal: '5', symbol: 'XFT/USD' },
    label: 'XFT/USD, Footy Cash US Dollar'
  },
  {
    value: { id: '7088', name: 'GoldReserve Bitcoin', decimal: '8', symbol: 'XGR/BTC' },
    label: 'XGR/BTC, GoldReserve Bitcoin'
  },
  {
    value: { id: '7091', name: 'GoldReserve US Dollar', decimal: '6', symbol: 'XGR/USD' },
    label: 'XGR/USD, GoldReserve US Dollar'
  },
  {
    value: { id: '7092', name: 'HiCoin Bitcoin', decimal: '8', symbol: 'XHI/BTC' },
    label: 'XHI/BTC, HiCoin Bitcoin'
  },
  {
    value: { id: '7093', name: 'HiCoin US Dollar', decimal: '6', symbol: 'XHI/USD' },
    label: 'XHI/USD, HiCoin US Dollar'
  },
  {
    value: { id: '7094', name: 'Haven Protocol Bitcoin', decimal: '6', symbol: 'XHV/BTC' },
    label: 'XHV/BTC, Haven Protocol Bitcoin'
  },
  {
    value: { id: '7095', name: 'Haven Protocol US Dollar', decimal: '5', symbol: 'XHV/USD' },
    label: 'XHV/USD, Haven Protocol US Dollar'
  },
  {
    value: { id: '7096', name: 'Sphre AIR Bitcoin', decimal: '8', symbol: 'XID/BTC' },
    label: 'XID/BTC, Sphre AIR Bitcoin'
  },
  {
    value: { id: '7099', name: 'Sphre AIR US Dollar', decimal: '5', symbol: 'XID/USD' },
    label: 'XID/USD, Sphre AIR US Dollar'
  },
  {
    value: { id: '7100', name: 'Mixin Bitcoin', decimal: '6', symbol: 'XIN/BTC' },
    label: 'XIN/BTC, Mixin Bitcoin'
  },
  {
    value: { id: '7101', name: 'Mixin EOS', decimal: '3', symbol: 'XIN/EOS' },
    label: 'XIN/EOS, Mixin EOS'
  },
  {
    value: { id: '7102', name: 'Mixin Ethereum', decimal: '5', symbol: 'XIN/ETH' },
    label: 'XIN/ETH, Mixin Ethereum'
  },
  {
    value: { id: '7103', name: 'Mixin US Dollar', decimal: '2', symbol: 'XIN/USD' },
    label: 'XIN/USD, Mixin US Dollar'
  },
  {
    value: { id: '7104', name: 'Xios Bitcoin', decimal: '8', symbol: 'XIOS/BTC' },
    label: 'XIOS/BTC, Xios Bitcoin'
  },
  {
    value: { id: '7105', name: 'Xios US Dollar', decimal: '5', symbol: 'XIOS/USD' },
    label: 'XIOS/USD, Xios US Dollar'
  },
  {
    value: { id: '7109', name: 'Joulecoin US Dollar', decimal: '6', symbol: 'XJO/USD' },
    label: 'XJO/USD, Joulecoin US Dollar'
  },
  {
    value: { id: '7110', name: 'LeviarCoin Bitcoin', decimal: '8', symbol: 'XLC/BTC' },
    label: 'XLC/BTC, LeviarCoin Bitcoin'
  },
  {
    value: { id: '7113', name: 'LeviarCoin US Dollar', decimal: '6', symbol: 'XLC/USD' },
    label: 'XLC/USD, LeviarCoin US Dollar'
  },
  {
    value: { id: '7114', name: 'Stellar Australian Dollar', decimal: '5', symbol: 'XLM/AUD' },
    label: 'XLM/AUD, Stellar Australian Dollar'
  },
  {
    value: { id: '7115', name: 'Stellar Binance Coin', decimal: '6', symbol: 'XLM/BNB' },
    label: 'XLM/BNB, Stellar Binance Coin'
  },
  {
    value: { id: '7116', name: 'Stellar Bitcoin', decimal: '8', symbol: 'XLM/BTC' },
    label: 'XLM/BTC, Stellar Bitcoin'
  },
  {
    value: { id: '7117', name: 'Stellar Canadian Dollar', decimal: '5', symbol: 'XLM/CAD' },
    label: 'XLM/CAD, Stellar Canadian Dollar'
  },
  {
    value: { id: '7118', name: 'Stellar Swiss Franc', decimal: '5', symbol: 'XLM/CHF' },
    label: 'XLM/CHF, Stellar Swiss Franc'
  },
  {
    value: { id: '7120', name: 'Stellar Ethereum', decimal: '8', symbol: 'XLM/ETH' },
    label: 'XLM/ETH, Stellar Ethereum'
  },
  {
    value: { id: '7121', name: 'Stellar Euro', decimal: '5', symbol: 'XLM/EUR' },
    label: 'XLM/EUR, Stellar Euro'
  },
  {
    value: { id: '7122', name: 'Stellar Hong Kong Dollar', decimal: '5', symbol: 'XLM/HKD' },
    label: 'XLM/HKD, Stellar Hong Kong Dollar'
  },
  {
    value: { id: '7123', name: 'Stellar Indonesian Rupiah', decimal: '2', symbol: 'XLM/IDR' },
    label: 'XLM/IDR, Stellar Indonesian Rupiah'
  },
  {
    value: { id: '7124', name: 'Stellar Israeli Shekel', decimal: '5', symbol: 'XLM/ILS' },
    label: 'XLM/ILS, Stellar Israeli Shekel'
  },
  {
    value: { id: '7125', name: 'Stellar Indian Rupee', decimal: '4', symbol: 'XLM/INR' },
    label: 'XLM/INR, Stellar Indian Rupee'
  },
  {
    value: { id: '7126', name: 'Stellar Korean Won', decimal: '2', symbol: 'XLM/KRW' },
    label: 'XLM/KRW, Stellar Korean Won'
  },
  {
    value: { id: '7127', name: 'Stellar Mexican Peso', decimal: '4', symbol: 'XLM/MXN' },
    label: 'XLM/MXN, Stellar Mexican Peso'
  },
  {
    value: { id: '7128', name: 'Stellar Malaysian Ringgit', decimal: '5', symbol: 'XLM/MYR' },
    label: 'XLM/MYR, Stellar Malaysian Ringgit'
  },
  {
    value: { id: '7129', name: 'Stellar Polish Zloty', decimal: '5', symbol: 'XLM/PLN' },
    label: 'XLM/PLN, Stellar Polish Zloty'
  },
  {
    value: { id: '7130', name: 'Stellar Russian Ruble', decimal: '4', symbol: 'XLM/RUB' },
    label: 'XLM/RUB, Stellar Russian Ruble'
  },
  {
    value: { id: '7131', name: 'Stellar Saudi Riyal', decimal: '5', symbol: 'XLM/SAR' },
    label: 'XLM/SAR, Stellar Saudi Riyal'
  },
  {
    value: { id: '7132', name: 'Stellar Swedish Krona', decimal: '5', symbol: 'XLM/SEK' },
    label: 'XLM/SEK, Stellar Swedish Krona'
  },
  {
    value: { id: '7133', name: 'Stellar Thai Baht', decimal: '2', symbol: 'XLM/THB' },
    label: 'XLM/THB, Stellar Thai Baht'
  },
  {
    value: { id: '7134', name: 'Stellar Turkish Lira', decimal: '2', symbol: 'XLM/TRY' },
    label: 'XLM/TRY, Stellar Turkish Lira'
  },
  {
    value: { id: '7135', name: 'Stellar US Dollar', decimal: '4', symbol: 'XLM/USD' },
    label: 'XLM/USD, Stellar US Dollar'
  },
  {
    value: { id: '7136', name: 'Stellar Vietnamese Dong', decimal: '2', symbol: 'XLM/VND' },
    label: 'XLM/VND, Stellar Vietnamese Dong'
  },
  {
    value: { id: '7137', name: 'Stellar South African Rand', decimal: '4', symbol: 'XLM/ZAR' },
    label: 'XLM/ZAR, Stellar South African Rand'
  },
  {
    value: { id: '7144', name: 'Monoeci US Dollar', decimal: '5', symbol: 'XMCC/USD' },
    label: 'XMCC/USD, Monoeci US Dollar'
  },
  {
    value: { id: '7148', name: 'Magi US Dollar', decimal: '5', symbol: 'XMG/USD' },
    label: 'XMG/USD, Magi US Dollar'
  },
  {
    value: { id: '7149', name: 'Monero Australian Dollar', decimal: '2', symbol: 'XMR/AUD' },
    label: 'XMR/AUD, Monero Australian Dollar'
  },
  {
    value: { id: '7150', name: 'Monero Bitcoin', decimal: '6', symbol: 'XMR/BTC' },
    label: 'XMR/BTC, Monero Bitcoin'
  },
  {
    value: { id: '7151', name: 'Monero Canadian Dollar', decimal: '2', symbol: 'XMR/CAD' },
    label: 'XMR/CAD, Monero Canadian Dollar'
  },
  {
    value: { id: '7152', name: 'Monero Chinese Yuan', decimal: '2', symbol: 'XMR/CNY' },
    label: 'XMR/CNY, Monero Chinese Yuan'
  },
  {
    value: { id: '7154', name: 'Monero Ethereum', decimal: '5', symbol: 'XMR/ETH' },
    label: 'XMR/ETH, Monero Ethereum'
  },
  {
    value: { id: '7155', name: 'Monero Euro', decimal: '2', symbol: 'XMR/EUR' },
    label: 'XMR/EUR, Monero Euro'
  },
  {
    value: { id: '7156', name: 'Monero Hong Kong Dollar', decimal: '2', symbol: 'XMR/HKD' },
    label: 'XMR/HKD, Monero Hong Kong Dollar'
  },
  {
    value: { id: '7157', name: 'Monero Israeli Shekel', decimal: '2', symbol: 'XMR/ILS' },
    label: 'XMR/ILS, Monero Israeli Shekel'
  },
  {
    value: { id: '7158', name: 'Monero Indian Rupee', decimal: '2', symbol: 'XMR/INR' },
    label: 'XMR/INR, Monero Indian Rupee'
  },
  {
    value: { id: '7161', name: 'Monero Mexican Peso', decimal: '2', symbol: 'XMR/MXN' },
    label: 'XMR/MXN, Monero Mexican Peso'
  },
  {
    value: { id: '7162', name: 'Monero Malaysian Ringgit', decimal: '2', symbol: 'XMR/MYR' },
    label: 'XMR/MYR, Monero Malaysian Ringgit'
  },
  {
    value: { id: '7163', name: 'Monero Polish Zloty', decimal: '2', symbol: 'XMR/PLN' },
    label: 'XMR/PLN, Monero Polish Zloty'
  },
  {
    value: { id: '7164', name: 'Monero Russian Ruble', decimal: '2', symbol: 'XMR/RUB' },
    label: 'XMR/RUB, Monero Russian Ruble'
  },
  {
    value: { id: '7165', name: 'Monero Saudi Riyal', decimal: '2', symbol: 'XMR/SAR' },
    label: 'XMR/SAR, Monero Saudi Riyal'
  },
  {
    value: { id: '7166', name: 'Monero Swedish Krona', decimal: '2', symbol: 'XMR/SEK' },
    label: 'XMR/SEK, Monero Swedish Krona'
  },
  {
    value: { id: '7167', name: 'Monero Turkish Lira', decimal: '2', symbol: 'XMR/TRY' },
    label: 'XMR/TRY, Monero Turkish Lira'
  },
  {
    value: { id: '7168', name: 'Monero Vietnamese Dong', decimal: '0', symbol: 'XMR/VND' },
    label: 'XMR/VND, Monero Vietnamese Dong'
  },
  {
    value: { id: '7169', name: 'Monero South African Rand', decimal: '2', symbol: 'XMR/ZAR' },
    label: 'XMR/ZAR, Monero South African Rand'
  },
  {
    value: { id: '7170', name: 'Myriad Bitcoin', decimal: '8', symbol: 'XMY/BTC' },
    label: 'XMY/BTC, Myriad Bitcoin'
  },
  {
    value: { id: '7173', name: 'Myriad US Dollar', decimal: '6', symbol: 'XMY/USD' },
    label: 'XMY/USD, Myriad US Dollar'
  },
  {
    value: { id: '7174', name: 'Xenon Ethereum', decimal: '8', symbol: 'XNN/ETH' },
    label: 'XNN/ETH, Xenon Ethereum'
  },
  {
    value: { id: '7175', name: 'Xenon US Dollar', decimal: '6', symbol: 'XNN/USD' },
    label: 'XNN/USD, Xenon US Dollar'
  },
  {
    value: { id: '7176', name: 'Xonecoin Bitcoin', decimal: '8', symbol: 'XOC/BTC' },
    label: 'XOC/BTC, Xonecoin Bitcoin'
  },
  {
    value: { id: '7177', name: 'Xonecoin US Dollar', decimal: '6', symbol: 'XOC/USD' },
    label: 'XOC/USD, Xonecoin US Dollar'
  },
  {
    value: { id: '7181', name: 'Experience Points US Dollar', decimal: '6', symbol: 'XP/USD' },
    label: 'XP/USD, Experience Points US Dollar'
  },
  {
    value: { id: '7185', name: 'Primecoin Bitcoin', decimal: '7', symbol: 'XPM/BTC' },
    label: 'XPM/BTC, Primecoin Bitcoin'
  },
  {
    value: { id: '7188', name: 'Primecoin US Dollar', decimal: '6', symbol: 'XPM/USD' },
    label: 'XPM/USD, Primecoin US Dollar'
  },
  {
    value: { id: '7192', name: 'PlatinumBAR US Dollar', decimal: '5', symbol: 'XPTX/USD' },
    label: 'XPTX/USD, PlatinumBAR US Dollar'
  },
  {
    value: { id: '7193', name: 'ProximaX Bitcoin', decimal: '8', symbol: 'XPX/BTC' },
    label: 'XPX/BTC, ProximaX Bitcoin'
  },
  {
    value: { id: '7194', name: 'ProximaX Ethereum', decimal: '8', symbol: 'XPX/ETH' },
    label: 'XPX/ETH, ProximaX Ethereum'
  },
  {
    value: { id: '7195', name: 'ProximaX US Dollar', decimal: '6', symbol: 'XPX/USD' },
    label: 'XPX/USD, ProximaX US Dollar'
  },
  {
    value: { id: '7196', name: 'PayCoin Bitcoin', decimal: '8', symbol: 'XPY/BTC' },
    label: 'XPY/BTC, PayCoin Bitcoin'
  },
  {
    value: { id: '7197', name: 'PayCoin US Dollar', decimal: '6', symbol: 'XPY/USD' },
    label: 'XPY/USD, PayCoin US Dollar'
  },
  {
    value: { id: '7198', name: 'Quotient Bitcoin', decimal: '8', symbol: 'XQN/BTC' },
    label: 'XQN/BTC, Quotient Bitcoin'
  },
  {
    value: { id: '7199', name: 'Quotient US Dollar', decimal: '6', symbol: 'XQN/USD' },
    label: 'XQN/USD, Quotient US Dollar'
  },
  {
    value: { id: '7203', name: 'Ratecoin US Dollar', decimal: '6', symbol: 'XRA/USD' },
    label: 'XRA/USD, Ratecoin US Dollar'
  },
  {
    value: { id: '7204', name: 'Rawcoin Bitcoin', decimal: '8', symbol: 'XRC/BTC' },
    label: 'XRC/BTC, Rawcoin Bitcoin'
  },
  {
    value: { id: '7205', name: 'Rawcoin US Dollar', decimal: '4', symbol: 'XRC/USD' },
    label: 'XRC/USD, Rawcoin US Dollar'
  },
  {
    value: { id: '7206', name: 'RevolverCoin Bitcoin', decimal: '8', symbol: 'XRE/BTC' },
    label: 'XRE/BTC, RevolverCoin Bitcoin'
  },
  {
    value: { id: '7209', name: 'RevolverCoin US Dollar', decimal: '6', symbol: 'XRE/USD' },
    label: 'XRE/USD, RevolverCoin US Dollar'
  },
  {
    value: { id: '7212', name: 'Rialto US Dollar', decimal: '5', symbol: 'XRL/USD' },
    label: 'XRL/USD, Rialto US Dollar'
  },
  {
    value: { id: '7213', name: 'XRP UAE Dirham', decimal: '4', symbol: 'XRP/AED' },
    label: 'XRP/AED, XRP UAE Dirham'
  },
  {
    value: { id: '7214', name: 'XRP Australian Dollar', decimal: '5', symbol: 'XRP/AUD' },
    label: 'XRP/AUD, XRP Australian Dollar'
  },
  {
    value: { id: '7215', name: 'XRP Brazil Real', decimal: '2', symbol: 'XRP/BRL' },
    label: 'XRP/BRL, XRP Brazil Real'
  },
  {
    value: { id: '7217', name: 'XRP Chinese Yuan', decimal: '4', symbol: 'XRP/CNY' },
    label: 'XRP/CNY, XRP Chinese Yuan'
  },
  {
    value: { id: '7218', name: 'XRP EOS', decimal: '6', symbol: 'XRP/EOS' },
    label: 'XRP/EOS, XRP EOS'
  },
  {
    value: { id: '7219', name: 'XRP Ethereum', decimal: '6', symbol: 'XRP/ETH' },
    label: 'XRP/ETH, XRP Ethereum'
  },
  {
    value: { id: '7220', name: 'XRP Hong Kong Dollar', decimal: '4', symbol: 'XRP/HKD' },
    label: 'XRP/HKD, XRP Hong Kong Dollar'
  },
  {
    value: { id: '7221', name: 'XRP Indonesian Rupiah', decimal: '2', symbol: 'XRP/IDR' },
    label: 'XRP/IDR, XRP Indonesian Rupiah'
  },
  {
    value: { id: '7222', name: 'XRP Israeli Shekel', decimal: '5', symbol: 'XRP/ILS' },
    label: 'XRP/ILS, XRP Israeli Shekel'
  },
  {
    value: { id: '7223', name: 'XRP Indian Rupee', decimal: '3', symbol: 'XRP/INR' },
    label: 'XRP/INR, XRP Indian Rupee'
  },
  {
    value: { id: '7224', name: 'XRP Japanese Yen', decimal: '3', symbol: 'XRP/JPY' },
    label: 'XRP/JPY, XRP Japanese Yen'
  },
  {
    value: { id: '7225', name: 'XRP Korean Won', decimal: '2', symbol: 'XRP/KRW' },
    label: 'XRP/KRW, XRP Korean Won'
  },
  {
    value: { id: '7226', name: 'XRP Mexican Peso', decimal: '4', symbol: 'XRP/MXN' },
    label: 'XRP/MXN, XRP Mexican Peso'
  },
  {
    value: { id: '7227', name: 'XRP Malaysian Ringgit', decimal: '5', symbol: 'XRP/MYR' },
    label: 'XRP/MYR, XRP Malaysian Ringgit'
  },
  {
    value: { id: '7228', name: 'XRP Polish Zloty', decimal: '5', symbol: 'XRP/PLN' },
    label: 'XRP/PLN, XRP Polish Zloty'
  },
  {
    value: { id: '7229', name: 'XRP Russian Ruble', decimal: '3', symbol: 'XRP/RUB' },
    label: 'XRP/RUB, XRP Russian Ruble'
  },
  {
    value: { id: '7230', name: 'XRP Saudi Riyal', decimal: '5', symbol: 'XRP/SAR' },
    label: 'XRP/SAR, XRP Saudi Riyal'
  },
  {
    value: { id: '7231', name: 'XRP Swedish Krona', decimal: '4', symbol: 'XRP/SEK' },
    label: 'XRP/SEK, XRP Swedish Krona'
  },
  {
    value: { id: '7233', name: 'XRP TRON', decimal: '4', symbol: 'XRP/TRX' },
    label: 'XRP/TRX, XRP TRON'
  },
  {
    value: { id: '7234', name: 'XRP Turkish Lira', decimal: '4', symbol: 'XRP/TRY' },
    label: 'XRP/TRY, XRP Turkish Lira'
  },
  {
    value: { id: '7236', name: 'XRP Vietnamese Dong', decimal: '2', symbol: 'XRP/VND' },
    label: 'XRP/VND, XRP Vietnamese Dong'
  },
  {
    value: { id: '7237', name: 'Royalties Dogecoin', decimal: '6', symbol: 'XRY/DOGE' },
    label: 'XRY/DOGE, Royalties Dogecoin'
  },
  {
    value: { id: '7239', name: 'Royalties US Dollar', decimal: '8', symbol: 'XRY/USD' },
    label: 'XRY/USD, Royalties US Dollar'
  },
  {
    value: { id: '7244', name: 'SHIELD US Dollar', decimal: '6', symbol: 'XSH/USD' },
    label: 'XSH/USD, SHIELD US Dollar'
  },
  {
    value: { id: '7247', name: 'Stakenet Bitcoin', decimal: '7', symbol: 'XSN/BTC' },
    label: 'XSN/BTC, Stakenet Bitcoin'
  },
  {
    value: { id: '7248', name: 'Stakenet Ethereum', decimal: '6', symbol: 'XSN/ETH' },
    label: 'XSN/ETH, Stakenet Ethereum'
  },
  {
    value: { id: '7249', name: 'Stakenet US Dollar', decimal: '5', symbol: 'XSN/USD' },
    label: 'XSN/USD, Stakenet US Dollar'
  },
  {
    value: { id: '7253', name: 'Spectrecoin US Dollar', decimal: '5', symbol: 'XSPEC/USD' },
    label: 'XSPEC/USD, Spectrecoin US Dollar'
  },
  {
    value: { id: '7254', name: 'Stealthcoin Bitcoin', decimal: '8', symbol: 'XST/BTC' },
    label: 'XST/BTC, Stealthcoin Bitcoin'
  },
  {
    value: { id: '7257', name: 'Stealthcoin US Dollar', decimal: '5', symbol: 'XST/USD' },
    label: 'XST/USD, Stealthcoin US Dollar'
  },
  {
    value: { id: '7258', name: 'Safe Trade Coin Bitcoin', decimal: '8', symbol: 'XSTC/BTC' },
    label: 'XSTC/BTC, Safe Trade Coin Bitcoin'
  },
  {
    value: { id: '7259', name: 'Safe Trade Coin US Dollar', decimal: '6', symbol: 'XSTC/USD' },
    label: 'XSTC/USD, Safe Trade Coin US Dollar'
  },
  {
    value: { id: '7260', name: 'XTD Coin Bitcoin', decimal: '8', symbol: 'XTD/BTC' },
    label: 'XTD/BTC, XTD Coin Bitcoin'
  },
  {
    value: { id: '7261', name: 'XTD Coin US Dollar', decimal: '7', symbol: 'XTD/USD' },
    label: 'XTD/USD, XTD Coin US Dollar'
  },
  {
    value: { id: '7262', name: 'Tao Bitcoin', decimal: '8', symbol: 'XTO/BTC' },
    label: 'XTO/BTC, Tao Bitcoin'
  },
  {
    value: { id: '7263', name: 'Tao US Dollar', decimal: '5', symbol: 'XTO/USD' },
    label: 'XTO/USD, Tao US Dollar'
  },
  {
    value: { id: '7264', name: 'TurkeyEnergyToken Bitcoin', decimal: '8', symbol: 'XTRL/BTC' },
    label: 'XTRL/BTC, TurkeyEnergyToken Bitcoin'
  },
  {
    value: { id: '7265', name: 'TurkeyEnergyToken Ethereum', decimal: '8', symbol: 'XTRL/ETH' },
    label: 'XTRL/ETH, TurkeyEnergyToken Ethereum'
  },
  {
    value: { id: '7266', name: 'TurkeyEnergyToken US Dollar', decimal: '6', symbol: 'XTRL/USD' },
    label: 'XTRL/USD, TurkeyEnergyToken US Dollar'
  },
  {
    value: { id: '7269', name: 'Tezos Ethereum', decimal: '6', symbol: 'XTZ/ETH' },
    label: 'XTZ/ETH, Tezos Ethereum'
  },
  {
    value: { id: '7270', name: 'Tezos Euro', decimal: '4', symbol: 'XTZ/EUR' },
    label: 'XTZ/EUR, Tezos Euro'
  },
  {
    value: { id: '7271', name: 'Tezos Korean Won', decimal: '0', symbol: 'XTZ/KRW' },
    label: 'XTZ/KRW, Tezos Korean Won'
  },
  {
    value: { id: '7272', name: 'Tezos US Dollar', decimal: '4', symbol: 'XTZ/USD' },
    label: 'XTZ/USD, Tezos US Dollar'
  },
  {
    value: { id: '7273', name: 'Exchange Union Bitcoin', decimal: '6', symbol: 'XUC/BTC' },
    label: 'XUC/BTC, Exchange Union Bitcoin'
  },
  {
    value: { id: '7274', name: 'Exchange Union Ethereum', decimal: '6', symbol: 'XUC/ETH' },
    label: 'XUC/ETH, Exchange Union Ethereum'
  },
  {
    value: { id: '7275', name: 'Exchange Union US Dollar', decimal: '4', symbol: 'XUC/USD' },
    label: 'XUC/USD, Exchange Union US Dollar'
  },
  {
    value: { id: '7276', name: 'Vcash Bitcoin', decimal: '8', symbol: 'XVC/BTC' },
    label: 'XVC/BTC, Vcash Bitcoin'
  },
  {
    value: { id: '7277', name: 'Vcash US Dollar', decimal: '6', symbol: 'XVC/USD' },
    label: 'XVC/USD, Vcash US Dollar'
  },
  {
    value: { id: '7278', name: 'The Vegan Initiative Bitcoin', decimal: '8', symbol: 'XVE/BTC' },
    label: 'XVE/BTC, The Vegan Initiative Bitcoin'
  },
  {
    value: { id: '7279', name: 'The Vegan Initiative US Dollar', decimal: '6', symbol: 'XVE/USD' },
    label: 'XVE/USD, The Vegan Initiative US Dollar'
  },
  {
    value: { id: '7280', name: 'Verge Australian Dollar', decimal: '6', symbol: 'XVG/AUD' },
    label: 'XVG/AUD, Verge Australian Dollar'
  },
  {
    value: { id: '7281', name: 'Verge Bitcoin', decimal: '8', symbol: 'XVG/BTC' },
    label: 'XVG/BTC, Verge Bitcoin'
  },
  {
    value: { id: '7283', name: 'Verge Ethereum', decimal: '7', symbol: 'XVG/ETH' },
    label: 'XVG/ETH, Verge Ethereum'
  },
  {
    value: { id: '7285', name: 'Verge US Dollar', decimal: '6', symbol: 'XVG/USD' },
    label: 'XVG/USD, Verge US Dollar'
  },
  {
    value: { id: '7288', name: 'WhiteCoin US Dollar', decimal: '5', symbol: 'XWC/USD' },
    label: 'XWC/USD, WhiteCoin US Dollar'
  },
  {
    value: { id: '7289', name: 'Swap Bitcoin', decimal: '8', symbol: 'XWP/BTC' },
    label: 'XWP/BTC, Swap Bitcoin'
  },
  {
    value: { id: '7290', name: 'Swap US Dollar', decimal: '4', symbol: 'XWP/USD' },
    label: 'XWP/USD, Swap US Dollar'
  },
  {
    value: { id: '7291', name: 'XYO Ethereum', decimal: '8', symbol: 'XYO/ETH' },
    label: 'XYO/ETH, XYO Ethereum'
  },
  {
    value: { id: '7292', name: 'XYO US Dollar', decimal: '8', symbol: 'XYO/USD' },
    label: 'XYO/USD, XYO US Dollar'
  },
  {
    value: { id: '7294', name: 'Zcoin Bitcoin', decimal: '6', symbol: 'XZC/BTC' },
    label: 'XZC/BTC, Zcoin Bitcoin'
  },
  {
    value: { id: '7296', name: 'Zcoin Ethereum', decimal: '6', symbol: 'XZC/ETH' },
    label: 'XZC/ETH, Zcoin Ethereum'
  },
  {
    value: { id: '7297', name: 'Zcoin Indonesian Rupiah', decimal: '0', symbol: 'XZC/IDR' },
    label: 'XZC/IDR, Zcoin Indonesian Rupiah'
  },
  {
    value: { id: '7300', name: 'Zcoin US Dollar', decimal: '4', symbol: 'XZC/USD' },
    label: 'XZC/USD, Zcoin US Dollar'
  },
  {
    value: { id: '7302', name: 'Yacoin Bitcoin', decimal: '8', symbol: 'YAC/BTC' },
    label: 'YAC/BTC, Yacoin Bitcoin'
  },
  {
    value: { id: '7303', name: 'Yacoin US Dollar', decimal: '6', symbol: 'YAC/USD' },
    label: 'YAC/USD, Yacoin US Dollar'
  },
  {
    value: { id: '7304', name: 'Yee Bitcoin', decimal: '8', symbol: 'YEE/BTC' },
    label: 'YEE/BTC, Yee Bitcoin'
  },
  {
    value: { id: '7305', name: 'Yee Ethereum', decimal: '8', symbol: 'YEE/ETH' },
    label: 'YEE/ETH, Yee Ethereum'
  },
  {
    value: { id: '7306', name: 'Yee US Dollar', decimal: '6', symbol: 'YEE/USD' },
    label: 'YEE/USD, Yee US Dollar'
  },
  {
    value: { id: '7307', name: 'Yellow Token Ethereum', decimal: '8', symbol: 'YEL/ETH' },
    label: 'YEL/ETH, Yellow Token Ethereum'
  },
  {
    value: { id: '7308', name: 'Yellow Token US Dollar', decimal: '6', symbol: 'YEL/USD' },
    label: 'YEL/USD, Yellow Token US Dollar'
  },
  {
    value: { id: '7309', name: 'Yescoin Bitcoin', decimal: '8', symbol: 'YES/BTC' },
    label: 'YES/BTC, Yescoin Bitcoin'
  },
  {
    value: { id: '7310', name: 'Yescoin US Dollar', decimal: '8', symbol: 'YES/USD' },
    label: 'YES/USD, Yescoin US Dollar'
  },
  {
    value: { id: '7311', name: 'Yocoin Bitcoin', decimal: '8', symbol: 'YOC/BTC' },
    label: 'YOC/BTC, Yocoin Bitcoin'
  },
  {
    value: { id: '7312', name: 'Yocoin Ethereum', decimal: '7', symbol: 'YOC/ETH' },
    label: 'YOC/ETH, Yocoin Ethereum'
  },
  {
    value: { id: '7313', name: 'Yocoin US Dollar', decimal: '6', symbol: 'YOC/USD' },
    label: 'YOC/USD, Yocoin US Dollar'
  },
  {
    value: { id: '7315', name: 'YOYOW Bitcoin', decimal: '8', symbol: 'YOYOW/BTC' },
    label: 'YOYOW/BTC, YOYOW Bitcoin'
  },
  {
    value: { id: '7318', name: 'YOYOW US Dollar', decimal: '5', symbol: 'YOYOW/USD' },
    label: 'YOYOW/USD, YOYOW US Dollar'
  },
  {
    value: { id: '7319', name: 'Crowdholding Ethereum', decimal: '8', symbol: 'YUP/ETH' },
    label: 'YUP/ETH, Crowdholding Ethereum'
  },
  {
    value: { id: '7320', name: 'Crowdholding US Dollar', decimal: '8', symbol: 'YUP/USD' },
    label: 'YUP/USD, Crowdholding US Dollar'
  },
  {
    value: { id: '7322', name: 'Zap US Dollar', decimal: '6', symbol: 'ZAP/USD' },
    label: 'ZAP/USD, Zap US Dollar'
  },
  {
    value: { id: '7323', name: 'Zilbercoin Bitcoin', decimal: '8', symbol: 'ZBC/BTC' },
    label: 'ZBC/BTC, Zilbercoin Bitcoin'
  },
  {
    value: { id: '7325', name: 'Zilbercoin US Dollar', decimal: '4', symbol: 'ZBC/USD' },
    label: 'ZBC/USD, Zilbercoin US Dollar'
  },
  {
    value: { id: '7332', name: 'ZClassic US Dollar', decimal: '4', symbol: 'ZCL/USD' },
    label: 'ZCL/USD, ZClassic US Dollar'
  },
  {
    value: { id: '7333', name: '0Chain Ethereum', decimal: '8', symbol: 'ZCN/ETH' },
    label: 'ZCN/ETH, 0Chain Ethereum'
  },
  {
    value: { id: '7334', name: '0Chain US Dollar', decimal: '8', symbol: 'ZCN/USD' },
    label: 'ZCN/USD, 0Chain US Dollar'
  },
  {
    value: { id: '7337', name: 'Zebi US Dollar', decimal: '8', symbol: 'ZCO/USD' },
    label: 'ZCO/USD, Zebi US Dollar'
  },
  {
    value: { id: '7338', name: 'Zcash Bitcoin', decimal: '6', symbol: 'ZEC/BTC' },
    label: 'ZEC/BTC, Zcash Bitcoin'
  },
  {
    value: { id: '7339', name: 'Zcash Swiss Franc', decimal: '2', symbol: 'ZEC/CHF' },
    label: 'ZEC/CHF, Zcash Swiss Franc'
  },
  {
    value: { id: '7341', name: 'Zcash Ethereum', decimal: '5', symbol: 'ZEC/ETH' },
    label: 'ZEC/ETH, Zcash Ethereum'
  },
  {
    value: { id: '7342', name: 'Zcash Euro', decimal: '2', symbol: 'ZEC/EUR' },
    label: 'ZEC/EUR, Zcash Euro'
  },
  {
    value: { id: '7343', name: 'Zcash Korean Won', decimal: '0', symbol: 'ZEC/KRW' },
    label: 'ZEC/KRW, Zcash Korean Won'
  },
  {
    value: { id: '7345', name: 'Zcash Russian Ruble', decimal: '2', symbol: 'ZEC/RUB' },
    label: 'ZEC/RUB, Zcash Russian Ruble'
  },
  {
    value: { id: '7346', name: 'Zcash Turkish Lira', decimal: '2', symbol: 'ZEC/TRY' },
    label: 'ZEC/TRY, Zcash Turkish Lira'
  },
  {
    value: { id: '7353', name: 'Zeitcoin US Dollar', decimal: '7', symbol: 'ZEIT/USD' },
    label: 'ZEIT/USD, Zeitcoin US Dollar'
  },
  {
    value: { id: '7354', name: 'ZenCash Bitcoin', decimal: '6', symbol: 'ZEN/BTC' },
    label: 'ZEN/BTC, ZenCash Bitcoin'
  },
  {
    value: { id: '7357', name: 'ZenCash US Dollar', decimal: '4', symbol: 'ZEN/USD' },
    label: 'ZEN/USD, ZenCash US Dollar'
  },
  {
    value: { id: '7358', name: 'Zennies Bitcoin', decimal: '8', symbol: 'ZENI/BTC' },
    label: 'ZENI/BTC, Zennies Bitcoin'
  },
  {
    value: { id: '7359', name: 'Zennies US Dollar', decimal: '6', symbol: 'ZENI/USD' },
    label: 'ZENI/USD, Zennies US Dollar'
  },
  {
    value: { id: '7363', name: 'Zero US Dollar', decimal: '5', symbol: 'ZER/USD' },
    label: 'ZER/USD, Zero US Dollar'
  },
  {
    value: { id: '7364', name: 'Zetacoin Bitcoin', decimal: '8', symbol: 'ZET/BTC' },
    label: 'ZET/BTC, Zetacoin Bitcoin'
  },
  {
    value: { id: '7367', name: 'Zetacoin US Dollar', decimal: '6', symbol: 'ZET/USD' },
    label: 'ZET/USD, Zetacoin US Dollar'
  },
  {
    value: { id: '7368', name: 'Zilliqa Binance Coin', decimal: '6', symbol: 'ZIL/BNB' },
    label: 'ZIL/BNB, Zilliqa Binance Coin'
  },
  {
    value: { id: '7369', name: 'Zilliqa Bitcoin', decimal: '8', symbol: 'ZIL/BTC' },
    label: 'ZIL/BTC, Zilliqa Bitcoin'
  },
  {
    value: { id: '7370', name: 'Zilliqa Ethereum', decimal: '7', symbol: 'ZIL/ETH' },
    label: 'ZIL/ETH, Zilliqa Ethereum'
  },
  {
    value: { id: '7371', name: 'Zilliqa US Dollar', decimal: '6', symbol: 'ZIL/USD' },
    label: 'ZIL/USD, Zilliqa US Dollar'
  },
  {
    value: { id: '7372', name: 'ZetaMicron Bitcoin', decimal: '8', symbol: 'ZMC/BTC' },
    label: 'ZMC/BTC, ZetaMicron Bitcoin'
  },
  {
    value: { id: '7373', name: 'ZetaMicron US Dollar', decimal: '7', symbol: 'ZMC/USD' },
    label: 'ZMC/USD, ZetaMicron US Dollar'
  },
  {
    value: { id: '7374', name: 'Zonecoin Bitcoin', decimal: '8', symbol: 'ZNE/BTC' },
    label: 'ZNE/BTC, Zonecoin Bitcoin'
  },
  {
    value: { id: '7375', name: 'Zonecoin US Dollar', decimal: '6', symbol: 'ZNE/USD' },
    label: 'ZNE/USD, Zonecoin US Dollar'
  },
  {
    value: { id: '7377', name: 'Bitzeny US Dollar', decimal: '6', symbol: 'ZNY/USD' },
    label: 'ZNY/USD, Bitzeny US Dollar'
  },
  {
    value: { id: '7378', name: 'Zoin Bitcoin', decimal: '8', symbol: 'ZOI/BTC' },
    label: 'ZOI/BTC, Zoin Bitcoin'
  },
  {
    value: { id: '7381', name: 'Zoin US Dollar', decimal: '5', symbol: 'ZOI/USD' },
    label: 'ZOI/USD, Zoin US Dollar'
  },
  {
    value: { id: '7387', name: 'ZrCoin Bitcoin', decimal: '6', symbol: 'ZRC/BTC' },
    label: 'ZRC/BTC, ZrCoin Bitcoin'
  },
  {
    value: { id: '7389', name: 'ZrCoin US Dollar', decimal: '5', symbol: 'ZRC/USD' },
    label: 'ZRC/USD, ZrCoin US Dollar'
  },
  {
    value: { id: '7391', name: '0x Bitcoin', decimal: '6', symbol: 'ZRX/BTC' },
    label: 'ZRX/BTC, 0x Bitcoin'
  },
  {
    value: { id: '7392', name: '0x Ethereum', decimal: '8', symbol: 'ZRX/ETH' },
    label: 'ZRX/ETH, 0x Ethereum'
  },
  {
    value: { id: '7393', name: '0x Euro', decimal: '5', symbol: 'ZRX/EUR' },
    label: 'ZRX/EUR, 0x Euro'
  },
  {
    value: { id: '7394', name: '0x Indian Rupee', decimal: '2', symbol: 'ZRX/INR' },
    label: 'ZRX/INR, 0x Indian Rupee'
  },
  {
    value: { id: '7395', name: '0x Turkish Lira', decimal: '3', symbol: 'ZRX/TRY' },
    label: 'ZRX/TRY, 0x Turkish Lira'
  },
  {
    value: { id: '7396', name: '0x US Dollar', decimal: '5', symbol: 'ZRX/USD' },
    label: 'ZRX/USD, 0x US Dollar'
  },
  {
    value: { id: '7397', name: '0x XRP', decimal: '3', symbol: 'ZRX/XRP' },
    label: 'ZRX/XRP, 0x XRP'
  },
  {
    value: { id: '7399', name: 'Zeusshield US Dollar', decimal: '6', symbol: 'ZSC/USD' },
    label: 'ZSC/USD, Zeusshield US Dollar'
  },
  {
    value: { id: '7400', name: 'ZSEcoin Bitcoin', decimal: '8', symbol: 'ZSE/BTC' },
    label: 'ZSE/BTC, ZSEcoin Bitcoin'
  },
  {
    value: { id: '7403', name: 'ZSEcoin US Dollar', decimal: '6', symbol: 'ZSE/USD' },
    label: 'ZSE/USD, ZSEcoin US Dollar'
  },
  {
    value: { id: '7404', name: 'Zurcoin Bitcoin', decimal: '8', symbol: 'ZUR/BTC' },
    label: 'ZUR/BTC, Zurcoin Bitcoin'
  },
  {
    value: { id: '7405', name: 'Zurcoin US Dollar', decimal: '6', symbol: 'ZUR/USD' },
    label: 'ZUR/USD, Zurcoin US Dollar'
  },
  {
    value: { id: '7406', name: 'Zayedcoin Bitcoin', decimal: '8', symbol: 'ZYD/BTC' },
    label: 'ZYD/BTC, Zayedcoin Bitcoin'
  },
  {
    value: { id: '7407', name: 'Zayedcoin US Dollar', decimal: '6', symbol: 'ZYD/USD' },
    label: 'ZYD/USD, Zayedcoin US Dollar'
  },
  {
    value: { id: '7408', name: 'ZoZoCoin Bitcoin', decimal: '7', symbol: 'ZZC/BTC' },
    label: 'ZZC/BTC, ZoZoCoin Bitcoin'
  },
  {
    value: { id: '7410', name: 'ZoZoCoin US Dollar', decimal: '5', symbol: 'ZZC/USD' },
    label: 'ZZC/USD, ZoZoCoin US Dollar'
  },
  {
    value: { id: '7411', name: 'UNUS SED LEO Bitcoin', decimal: '8', symbol: 'LEOu/BTC' },
    label: 'LEOu/BTC, UNUS SED LEO Bitcoin'
  },
  {
    value: { id: '7412', name: 'UNUS SED LEO Ethereum', decimal: '6', symbol: 'LEOu/ETH' },
    label: 'LEOu/ETH, UNUS SED LEO Ethereum'
  },
  {
    value: { id: '7413', name: 'UNUS SED LEO US Dollar', decimal: '4', symbol: 'LEOu/USD' },
    label: 'LEOu/USD, UNUS SED LEO US Dollar'
  },
  {
    value: { id: '7414', name: 'Cosmos US Dollar', decimal: '4', symbol: 'ATOM/USD' },
    label: 'ATOM/USD, Cosmos US Dollar'
  },
  {
    value: { id: '7415', name: 'HedgeTrade Bitcoin', decimal: '8', symbol: 'HEDG/BTC' },
    label: 'HEDG/BTC, HedgeTrade Bitcoin'
  },
  {
    value: { id: '7416', name: 'HedgeTrade Ethereum', decimal: '6', symbol: 'HEDG/ETH' },
    label: 'HEDG/ETH, HedgeTrade Ethereum'
  },
  {
    value: { id: '7417', name: 'HedgeTrade US Dollar', decimal: '4', symbol: 'HEDG/USD' },
    label: 'HEDG/USD, HedgeTrade US Dollar'
  },
  {
    value: { id: '7418', name: 'Algorand Bitcoin', decimal: '8', symbol: 'ALGO/BTC' },
    label: 'ALGO/BTC, Algorand Bitcoin'
  },
  {
    value: { id: '7419', name: 'Algorand Ethereum', decimal: '6', symbol: 'ALGO/ETH' },
    label: 'ALGO/ETH, Algorand Ethereum'
  },
  {
    value: { id: '7420', name: 'Algorand Turkish Lira', decimal: '2', symbol: 'ALGO/TRY' },
    label: 'ALGO/TRY, Algorand Turkish Lira'
  },
  {
    value: { id: '7421', name: 'Algorand US Dollar', decimal: '4', symbol: 'ALGO/USD' },
    label: 'ALGO/USD, Algorand US Dollar'
  },
  {
    value: { id: '7841', name: 'Ethereum US Dollar', decimal: '2', symbol: 'ETH/USD' },
    label: 'ETH/USD, Ethereum US Dollar'
  },
  {
    value: { id: '7842', name: '0xBitcoin Bitcoin', decimal: '8', symbol: '0xBTC/BTC' },
    label: '0xBTC/BTC, 0xBitcoin Bitcoin'
  },
  {
    value: { id: '7843', name: '0xBitcoin Ethereum', decimal: '8', symbol: '0xBTC/ETH' },
    label: '0xBTC/ETH, 0xBitcoin Ethereum'
  },
  {
    value: { id: '7844', name: '0xBitcoin US Dollar', decimal: '6', symbol: '0xBTC/USD' },
    label: '0xBTC/USD, 0xBitcoin US Dollar'
  },
  {
    value: { id: '7845', name: 'Elite US Dollar', decimal: '6', symbol: '1337/USD' },
    label: '1337/USD, Elite US Dollar'
  },
  {
    value: { id: '7846', name: 'FirstBlood Ethereum', decimal: '6', symbol: '1ST/ETH' },
    label: '1ST/ETH, FirstBlood Ethereum'
  },
  {
    value: { id: '7847', name: 'FirstBlood US Dollar', decimal: '6', symbol: '1ST/USD' },
    label: '1ST/USD, FirstBlood US Dollar'
  },
  {
    value: { id: '7848', name: '2GIVE Bitcoin', decimal: '8', symbol: '2GIVE/BTC' },
    label: '2GIVE/BTC, 2GIVE Bitcoin'
  },
  {
    value: { id: '7849', name: 'OctoCoin Bitcoin', decimal: '8', symbol: '888/BTC' },
    label: '888/BTC, OctoCoin Bitcoin'
  },
  {
    value: { id: '7850', name: '999 Ethereum', decimal: '8', symbol: '999/ETH' },
    label: '999/ETH, 999 Ethereum'
  },
  {
    value: { id: '7851', name: '999 US Dollar', decimal: '2', symbol: '999/USD' },
    label: '999/USD, 999 US Dollar'
  },
  {
    value: { id: '7852', name: 'Acute Angle Cloud Bitcoin', decimal: '8', symbol: 'AAC/BTC' },
    label: 'AAC/BTC, Acute Angle Cloud Bitcoin'
  },
  {
    value: { id: '7853', name: 'Arcblock Bitcoin', decimal: '8', symbol: 'ABT/BTC' },
    label: 'ABT/BTC, Arcblock Bitcoin'
  },
  {
    value: { id: '7854', name: 'ArtByte Bitcoin', decimal: '8', symbol: 'ABY/BTC' },
    label: 'ABY/BTC, ArtByte Bitcoin'
  },
  {
    value: { id: '7855', name: 'AsiaCoin Dogecoin', decimal: '5', symbol: 'AC/DOGE' },
    label: 'AC/DOGE, AsiaCoin Dogecoin'
  },
  {
    value: { id: '7856', name: 'Alphacat Ethereum', decimal: '8', symbol: 'ACAT/ETH' },
    label: 'ACAT/ETH, Alphacat Ethereum'
  },
  {
    value: { id: '7857', name: 'Acoin Bitcoin', decimal: '8', symbol: 'ACOIN/BTC' },
    label: 'ACOIN/BTC, Acoin Bitcoin'
  },
  {
    value: { id: '7858', name: 'Achain Ethereum', decimal: '6', symbol: 'ACT/ETH' },
    label: 'ACT/ETH, Achain Ethereum'
  },
  {
    value: { id: '7859', name: 'Cardano Brazil Real', decimal: '6', symbol: 'ADA/BRL' },
    label: 'ADA/BRL, Cardano Brazil Real'
  },
  {
    value: { id: '7860', name: 'Cardano Korean Won', decimal: '2', symbol: 'ADA/KRW' },
    label: 'ADA/KRW, Cardano Korean Won'
  },
  {
    value: { id: '7861', name: 'AudioCoin Bitcoin', decimal: '8', symbol: 'ADC/BTC' },
    label: 'ADC/BTC, AudioCoin Bitcoin'
  },
  {
    value: { id: '7862', name: 'Adshares Bitcoin', decimal: '8', symbol: 'ADS/BTC' },
    label: 'ADS/BTC, Adshares Bitcoin'
  },
  {
    value: { id: '7863', name: 'Adshares Litecoin', decimal: '6', symbol: 'ADS/LTC' },
    label: 'ADS/LTC, Adshares Litecoin'
  },
  {
    value: { id: '7864', name: 'adToken Korean Won', decimal: '2', symbol: 'ADT/KRW' },
    label: 'ADT/KRW, adToken Korean Won'
  },
  {
    value: { id: '7865', name: 'AdEx Korean Won', decimal: '0', symbol: 'ADX/KRW' },
    label: 'ADX/KRW, AdEx Korean Won'
  },
  {
    value: { id: '7866', name: 'AdEx US Dollar', decimal: '5', symbol: 'ADX/USD' },
    label: 'ADX/USD, AdEx US Dollar'
  },
  {
    value: { id: '7867', name: 'Adzcoin Bitcoin', decimal: '8', symbol: 'ADZ/BTC' },
    label: 'ADZ/BTC, Adzcoin Bitcoin'
  },
  {
    value: { id: '7868', name: 'Adzcoin US Dollar', decimal: '6', symbol: 'ADZ/USD' },
    label: 'ADZ/USD, Adzcoin US Dollar'
  },
  {
    value: { id: '7869', name: 'Aeternity Ethereum', decimal: '6', symbol: 'AE/ETH' },
    label: 'AE/ETH, Aeternity Ethereum'
  },
  {
    value: { id: '7870', name: 'SingularityNET Ethereum', decimal: '6', symbol: 'AGI/ETH' },
    label: 'AGI/ETH, SingularityNET Ethereum'
  },
  {
    value: { id: '7871', name: 'AI Doctor US Dollar', decimal: '6', symbol: 'AIDOC/USD' },
    label: 'AIDOC/USD, AI Doctor US Dollar'
  },
  {
    value: { id: '7872', name: 'Aigang Bancor', decimal: '6', symbol: 'AIX/BNT' },
    label: 'AIX/BNT, Aigang Bancor'
  },
  {
    value: { id: '7873', name: 'Algorand Ethereum', decimal: '6', symbol: 'ALGO/ETH' },
    label: 'ALGO/ETH, Algorand Ethereum'
  },
  {
    value: { id: '7874', name: 'ALIS Bitcoin', decimal: '8', symbol: 'ALIS/BTC' },
    label: 'ALIS/BTC, ALIS Bitcoin'
  },
  {
    value: { id: '7875', name: 'Ambrosus Ethereum', decimal: '6', symbol: 'AMB/ETH' },
    label: 'AMB/ETH, Ambrosus Ethereum'
  },
  {
    value: { id: '7876', name: 'MicroMoney Bitcoin', decimal: '8', symbol: 'AMM/BTC' },
    label: 'AMM/BTC, MicroMoney Bitcoin'
  },
  {
    value: { id: '7877', name: 'MicroMoney Ethereum', decimal: '6', symbol: 'AMM/ETH' },
    label: 'AMM/ETH, MicroMoney Ethereum'
  },
  {
    value: { id: '7878', name: 'MicroMoney US Dollar', decimal: '6', symbol: 'AMM/USD' },
    label: 'AMM/USD, MicroMoney US Dollar'
  },
  {
    value: { id: '7879', name: 'Ampleforth Bitcoin', decimal: '8', symbol: 'AMPL/BTC' },
    label: 'AMPL/BTC, Ampleforth Bitcoin'
  },
  {
    value: { id: '7880', name: 'Ampleforth Ethereum', decimal: '6', symbol: 'AMPL/ETH' },
    label: 'AMPL/ETH, Ampleforth Ethereum'
  },
  {
    value: { id: '7881', name: 'Ampleforth US Dollar', decimal: '4', symbol: 'AMPL/USD' },
    label: 'AMPL/USD, Ampleforth US Dollar'
  },
  {
    value: { id: '7882', name: 'Ankr Bitcoin', decimal: '8', symbol: 'ANKR/BTC' },
    label: 'ANKR/BTC, Ankr Bitcoin'
  },
  {
    value: { id: '7883', name: 'Ankr Korean Won', decimal: '2', symbol: 'ANKR/KRW' },
    label: 'ANKR/KRW, Ankr Korean Won'
  },
  {
    value: { id: '7884', name: 'Ankr US Dollar', decimal: '6', symbol: 'ANKR/USD' },
    label: 'ANKR/USD, Ankr US Dollar'
  },
  {
    value: { id: '7885', name: 'Aragon Korean Won', decimal: '0', symbol: 'ANT/KRW' },
    label: 'ANT/KRW, Aragon Korean Won'
  },
  {
    value: { id: '7886', name: 'Aragon US Dollar', decimal: '5', symbol: 'ANT/USD' },
    label: 'ANT/USD, Aragon US Dollar'
  },
  {
    value: { id: '7887', name: 'APIS Bitcoin', decimal: '8', symbol: 'APIS/BTC' },
    label: 'APIS/BTC, APIS Bitcoin'
  },
  {
    value: { id: '7888', name: 'Apollo Currency Bitcoin', decimal: '8', symbol: 'APL/BTC' },
    label: 'APL/BTC, Apollo Currency Bitcoin'
  },
  {
    value: { id: '7889', name: 'Apollo Currency Ethereum', decimal: '8', symbol: 'APL/ETH' },
    label: 'APL/ETH, Apollo Currency Ethereum'
  },
  {
    value: { id: '7890', name: 'AppCoins Ethereum', decimal: '6', symbol: 'APPC/ETH' },
    label: 'APPC/ETH, AppCoins Ethereum'
  },
  {
    value: { id: '7891', name: 'ARBITRAGE Bitcoin', decimal: '8', symbol: 'ARBI/BTC' },
    label: 'ARBI/BTC, ARBITRAGE Bitcoin'
  },
  {
    value: { id: '7892', name: 'AquariusCoin Bitcoin', decimal: '8', symbol: 'ARCO/BTC' },
    label: 'ARCO/BTC, AquariusCoin Bitcoin'
  },
  {
    value: { id: '7893', name: 'Argentum Bitcoin', decimal: '8', symbol: 'ARG/BTC' },
    label: 'ARG/BTC, Argentum Bitcoin'
  },
  {
    value: { id: '7894', name: 'Argus Bitcoin', decimal: '8', symbol: 'ARGUS/BTC' },
    label: 'ARGUS/BTC, Argus Bitcoin'
  },
  {
    value: { id: '7895', name: 'Aeron Bitcoin', decimal: '8', symbol: 'ARNX/BTC' },
    label: 'ARNX/BTC, Aeron Bitcoin'
  },
  {
    value: { id: '7896', name: 'Aeron Ethereum', decimal: '6', symbol: 'ARNX/ETH' },
    label: 'ARNX/ETH, Aeron Ethereum'
  },
  {
    value: { id: '7897', name: 'ARPA Chain Bitcoin', decimal: '8', symbol: 'ARPA/BTC' },
    label: 'ARPA/BTC, ARPA Chain Bitcoin'
  },
  {
    value: { id: '7898', name: 'ARPA Chain US Dollar', decimal: '5', symbol: 'ARPA/USD' },
    label: 'ARPA/USD, ARPA Chain US Dollar'
  },
  {
    value: { id: '7899', name: 'AirSwap US Dollar', decimal: '6', symbol: 'AST/USD' },
    label: 'AST/USD, AirSwap US Dollar'
  },
  {
    value: { id: '7900', name: 'ATC Coin Bitcoin', decimal: '8', symbol: 'ATCC/BTC' },
    label: 'ATCC/BTC, ATC Coin Bitcoin'
  },
  {
    value: { id: '7901', name: 'ATLANT Ethereum', decimal: '6', symbol: 'ATL/ETH' },
    label: 'ATL/ETH, ATLANT Ethereum'
  },
  {
    value: { id: '7902', name: 'ATMChain Bitcoin', decimal: '8', symbol: 'ATM/BTC' },
    label: 'ATM/BTC, ATMChain Bitcoin'
  },
  {
    value: { id: '7903', name: 'ATMChain US Dollar', decimal: '6', symbol: 'ATM/USD' },
    label: 'ATM/USD, ATMChain US Dollar'
  },
  {
    value: { id: '7904', name: 'ATMOS/BTC - Atmos Bitcoin', decimal: '8', symbol: 'ATMS/BTC' },
    label: 'ATMS/BTC, ATMOS/BTC - Atmos Bitcoin'
  },
  {
    value: { id: '7905', name: 'Cosmos Binance Coin', decimal: '4', symbol: 'ATOM/BNB' },
    label: 'ATOM/BNB, Cosmos Binance Coin'
  },
  {
    value: { id: '7906', name: 'Cosmos Bitcoin', decimal: '8', symbol: 'ATOM/BTC' },
    label: 'ATOM/BTC, Cosmos Bitcoin'
  },
  {
    value: { id: '7907', name: 'Cosmos Ethereum', decimal: '8', symbol: 'ATOM/ETH' },
    label: 'ATOM/ETH, Cosmos Ethereum'
  },
  {
    value: { id: '7908', name: 'Cosmos Turkish Lira', decimal: '2', symbol: 'ATOM/TRY' },
    label: 'ATOM/TRY, Cosmos Turkish Lira'
  },
  {
    value: { id: '7909', name: 'Atomic Coin Dogecoin', decimal: '4', symbol: 'ATOMc/DOGE' },
    label: 'ATOMc/DOGE, Atomic Coin Dogecoin'
  },
  {
    value: { id: '7910', name: 'Authorship Bancor', decimal: '6', symbol: 'ATS/BNT' },
    label: 'ATS/BNT, Authorship Bancor'
  },
  {
    value: { id: '7911', name: 'Auroracoin Bitcoin', decimal: '8', symbol: 'AUR/BTC' },
    label: 'AUR/BTC, Auroracoin Bitcoin'
  },
  {
    value: { id: '7912', name: 'Cube Bitcoin', decimal: '8', symbol: 'AUTO/BTC' },
    label: 'AUTO/BTC, Cube Bitcoin'
  },
  {
    value: { id: '7913', name: 'Avalanche Bitcoin', decimal: '8', symbol: 'AVAX/BTC' },
    label: 'AVAX/BTC, Avalanche Bitcoin'
  },
  {
    value: { id: '7914', name: 'Avalanche Turkish Lira', decimal: '2', symbol: 'AVAX/TRY' },
    label: 'AVAX/TRY, Avalanche Turkish Lira'
  },
  {
    value: { id: '7915', name: 'Avalanche US Dollar', decimal: '4', symbol: 'AVAX/USD' },
    label: 'AVAX/USD, Avalanche US Dollar'
  },
  {
    value: { id: '7916', name: 'Aventus Bitcoin', decimal: '8', symbol: 'AVT/BTC' },
    label: 'AVT/BTC, Aventus Bitcoin'
  },
  {
    value: { id: '7917', name: 'B2BX Bitcoin', decimal: '7', symbol: 'B2B/BTC' },
    label: 'B2B/BTC, B2BX Bitcoin'
  },
  {
    value: { id: '7918', name: 'SegWit2x Bitcoin', decimal: '6', symbol: 'B2X/BTC' },
    label: 'B2X/BTC, SegWit2x Bitcoin'
  },
  {
    value: { id: '7919', name: 'SegWit2x US Dollar', decimal: '4', symbol: 'B2X/USD' },
    label: 'B2X/USD, SegWit2x US Dollar'
  },
  {
    value: { id: '7920', name: 'Band Protocol Binance Coin', decimal: '5', symbol: 'BAND/BNB' },
    label: 'BAND/BNB, Band Protocol Binance Coin'
  },
  {
    value: { id: '7921', name: 'Band Protocol Bitcoin', decimal: '8', symbol: 'BAND/BTC' },
    label: 'BAND/BTC, Band Protocol Bitcoin'
  },
  {
    value: { id: '7922', name: 'Basic Attention Token Euro', decimal: '5', symbol: 'BAT/EUR' },
    label: 'BAT/EUR, Basic Attention Token Euro'
  },
  {
    value: {
      id: '7923',
      name: 'Basic Attention Token Mexican Peso',
      decimal: '2',
      symbol: 'BAT/MXN'
    },
    label: 'BAT/MXN, Basic Attention Token Mexican Peso'
  },
  {
    value: {
      id: '7924',
      name: 'Basic Attention Token Turkish Lira',
      decimal: '2',
      symbol: 'BAT/TRY'
    },
    label: 'BAT/TRY, Basic Attention Token Turkish Lira'
  },
  {
    value: { id: '7925', name: 'Basic Attention Token US Dollar', decimal: '5', symbol: 'BAT/USD' },
    label: 'BAT/USD, Basic Attention Token US Dollar'
  },
  {
    value: { id: '7926', name: 'Basic Attention Token USD Coin', decimal: '6', symbol: 'BAT/USDC' },
    label: 'BAT/USDC, Basic Attention Token USD Coin'
  },
  {
    value: { id: '7927', name: 'BABB Ethereum', decimal: '8', symbol: 'BAX/ETH' },
    label: 'BAX/ETH, BABB Ethereum'
  },
  {
    value: { id: '7928', name: 'TraDove B2BCoin Bitcoin', decimal: '8', symbol: 'BBC/BTC' },
    label: 'BBC/BTC, TraDove B2BCoin Bitcoin'
  },
  {
    value: { id: '7929', name: 'Brickblock Bitcoin', decimal: '8', symbol: 'BBK/BTC' },
    label: 'BBK/BTC, Brickblock Bitcoin'
  },
  {
    value: { id: '7930', name: 'Bitcoin Diamond Ethereum', decimal: '7', symbol: 'BCD/ETH' },
    label: 'BCD/ETH, Bitcoin Diamond Ethereum'
  },
  {
    value: { id: '7931', name: 'Bitcoin Cash Thai Baht', decimal: '2', symbol: 'BCH/THB' },
    label: 'BCH/THB, Bitcoin Cash Thai Baht'
  },
  {
    value: { id: '7932', name: 'Bitcoin Cash Turkish Lira', decimal: '2', symbol: 'BCH/TRY' },
    label: 'BCH/TRY, Bitcoin Cash Turkish Lira'
  },
  {
    value: { id: '7933', name: 'Bitcoin Cash Indian Rupee', decimal: '2', symbol: 'BCHABC/INR' },
    label: 'BCHABC/INR, Bitcoin Cash Indian Rupee'
  },
  {
    value: { id: '7934', name: 'Bitcoin Interest Bitcoin', decimal: '8', symbol: 'BCI/BTC' },
    label: 'BCI/BTC, Bitcoin Interest Bitcoin'
  },
  {
    value: { id: '7935', name: 'Bitcoin Interest US Dollar', decimal: '5', symbol: 'BCI/USD' },
    label: 'BCI/USD, Bitcoin Interest US Dollar'
  },
  {
    value: { id: '7936', name: 'Bytecoin Bitcoin', decimal: '8', symbol: 'BCN/BTC' },
    label: 'BCN/BTC, Bytecoin Bitcoin'
  },
  {
    value: {
      id: '7937',
      name: 'Blockmason Credit Protocol Binance Coin',
      decimal: '6',
      symbol: 'BCPT/BNB'
    },
    label: 'BCPT/BNB, Blockmason Credit Protocol Binance Coin'
  },
  {
    value: {
      id: '7938',
      name: 'Blockmason Credit Protocol Ethereum',
      decimal: '8',
      symbol: 'BCPT/ETH'
    },
    label: 'BCPT/ETH, Blockmason Credit Protocol Ethereum'
  },
  {
    value: { id: '7939', name: 'BitCapitalVendor Bitcoin', decimal: '8', symbol: 'BCV/BTC' },
    label: 'BCV/BTC, BitCapitalVendor Bitcoin'
  },
  {
    value: { id: '7940', name: 'BitCapitalVendor US Dollar', decimal: '6', symbol: 'BCV/USD' },
    label: 'BCV/USD, BitCapitalVendor US Dollar'
  },
  {
    value: { id: '7941', name: 'Bitdeal Bitcoin', decimal: '8', symbol: 'BDL/BTC' },
    label: 'BDL/BTC, Bitdeal Bitcoin'
  },
  {
    value: { id: '7942', name: 'Beam Ethereum', decimal: '6', symbol: 'BEAM/ETH' },
    label: 'BEAM/ETH, Beam Ethereum'
  },
  {
    value: { id: '7943', name: 'Bela Bitcoin', decimal: '8', symbol: 'BELA/BTC' },
    label: 'BELA/BTC, Bela Bitcoin'
  },
  {
    value: { id: '7944', name: 'Bela US Dollar', decimal: '6', symbol: 'BELA/USD' },
    label: 'BELA/USD, Bela US Dollar'
  },
  {
    value: { id: '7945', name: 'BenjiRolls Bitcoin', decimal: '8', symbol: 'BENJI/BTC' },
    label: 'BENJI/BTC, BenjiRolls Bitcoin'
  },
  {
    value: { id: '7946', name: 'BestChain Bitcoin', decimal: '8', symbol: 'BEST/BTC' },
    label: 'BEST/BTC, BestChain Bitcoin'
  },
  {
    value: {
      id: '7947',
      name: 'Bitpanda Ecosystem Token Bitcoin',
      decimal: '8',
      symbol: 'BESTb/BTC'
    },
    label: 'BESTb/BTC, Bitpanda Ecosystem Token Bitcoin'
  },
  {
    value: { id: '7948', name: 'Bitpanda Ecosystem Token Euro', decimal: '4', symbol: 'BESTb/EUR' },
    label: 'BESTb/EUR, Bitpanda Ecosystem Token Euro'
  },
  {
    value: {
      id: '7949',
      name: 'Bitpanda Ecosystem Token US Dollar',
      decimal: '6',
      symbol: 'BESTb/USD'
    },
    label: 'BESTb/USD, Bitpanda Ecosystem Token US Dollar'
  },
  {
    value: { id: '7950', name: 'Bismuth Bitcoin', decimal: '7', symbol: 'BIS/BTC' },
    label: 'BIS/BTC, Bismuth Bitcoin'
  },
  {
    value: { id: '7951', name: 'Bismuth Ethereum', decimal: '6', symbol: 'BIS/ETH' },
    label: 'BIS/ETH, Bismuth Ethereum'
  },
  {
    value: { id: '7952', name: 'Bean Cash Bitcoin', decimal: '8', symbol: 'BITB/BTC' },
    label: 'BITB/BTC, Bean Cash Bitcoin'
  },
  {
    value: { id: '7953', name: 'BitGreen Bitcoin', decimal: '8', symbol: 'BITG/BTC' },
    label: 'BITG/BTC, BitGreen Bitcoin'
  },
  {
    value: { id: '7954', name: 'Bitok Ethereum', decimal: '8', symbol: 'BITOK/ETH' },
    label: 'BITOK/ETH, Bitok Ethereum'
  },
  {
    value: { id: '7955', name: 'Bitstar Bitcoin', decimal: '8', symbol: 'BITS/BTC' },
    label: 'BITS/BTC, Bitstar Bitcoin'
  },
  {
    value: { id: '7956', name: 'Blakecoin Bitcoin', decimal: '8', symbol: 'BLC/BTC' },
    label: 'BLC/BTC, Blakecoin Bitcoin'
  },
  {
    value: { id: '7957', name: 'BlackCoin US Dollar', decimal: '6', symbol: 'BLK/USD' },
    label: 'BLK/USD, BlackCoin US Dollar'
  },
  {
    value: { id: '7958', name: 'Bolenum Bitcoin', decimal: '8', symbol: 'BLN/BTC' },
    label: 'BLN/BTC, Bolenum Bitcoin'
  },
  {
    value: { id: '7959', name: 'BlueCoin Bitcoin', decimal: '8', symbol: 'BLU/BTC' },
    label: 'BLU/BTC, BlueCoin Bitcoin'
  },
  {
    value: { id: '7960', name: 'Blue Protocol Bitcoin', decimal: '8', symbol: 'BLUE/BTC' },
    label: 'BLUE/BTC, Blue Protocol Bitcoin'
  },
  {
    value: { id: '7961', name: 'Blue Protocol Ethereum', decimal: '6', symbol: 'BLUE/ETH' },
    label: 'BLUE/ETH, Blue Protocol Ethereum'
  },
  {
    value: { id: '7962', name: 'Blackmoon Bitcoin', decimal: '7', symbol: 'BMC/BTC' },
    label: 'BMC/BTC, Blackmoon Bitcoin'
  },
  {
    value: { id: '7963', name: 'Blackmoon Ethereum', decimal: '6', symbol: 'BMC/ETH' },
    label: 'BMC/ETH, Blackmoon Ethereum'
  },
  {
    value: { id: '7964', name: 'Blackmoon US Dollar', decimal: '5', symbol: 'BMC/USD' },
    label: 'BMC/USD, Blackmoon US Dollar'
  },
  {
    value: { id: '7965', name: 'Binance Coin Turkish Lira', decimal: '2', symbol: 'BNB/TRY' },
    label: 'BNB/TRY, Binance Coin Turkish Lira'
  },
  {
    value: { id: '7966', name: 'BNS Token Bitcoin', decimal: '8', symbol: 'BNS/BTC' },
    label: 'BNS/BTC, BNS Token Bitcoin'
  },
  {
    value: { id: '7967', name: 'BNS Token US Dollar', decimal: '6', symbol: 'BNS/USD' },
    label: 'BNS/USD, BNS Token US Dollar'
  },
  {
    value: { id: '7968', name: 'Blockium Bitcoin', decimal: '8', symbol: 'BOK/BTC' },
    label: 'BOK/BTC, Blockium Bitcoin'
  },
  {
    value: { id: '7969', name: 'Blockium US Dollar', decimal: '5', symbol: 'BOK/USD' },
    label: 'BOK/USD, Blockium US Dollar'
  },
  {
    value: { id: '7970', name: 'Bolivarcoin Bitcoin', decimal: '8', symbol: 'BOLI/BTC' },
    label: 'BOLI/BTC, Bolivarcoin Bitcoin'
  },
  {
    value: { id: '7971', name: 'BROTHER Bitcoin', decimal: '8', symbol: 'BRAT/BTC' },
    label: 'BRAT/BTC, BROTHER Bitcoin'
  },
  {
    value: { id: '7972', name: 'Breakout Bitcoin', decimal: '8', symbol: 'BRK/BTC' },
    label: 'BRK/BTC, Breakout Bitcoin'
  },
  {
    value: { id: '7973', name: 'Breezecoin Bitcoin', decimal: '8', symbol: 'BRZE/BTC' },
    label: 'BRZE/BTC, Breezecoin Bitcoin'
  },
  {
    value: { id: '7974', name: 'Bastonet Bitcoin', decimal: '8', symbol: 'BSN/BTC' },
    label: 'BSN/BTC, Bastonet Bitcoin'
  },
  {
    value: { id: '7975', name: 'BlockStamp Bitcoin', decimal: '8', symbol: 'BST/BTC' },
    label: 'BST/BTC, BlockStamp Bitcoin'
  },
  {
    value: { id: '7976', name: 'BlockStamp US Dollar', decimal: '6', symbol: 'BST/USD' },
    label: 'BST/USD, BlockStamp US Dollar'
  },
  {
    value: { id: '7977', name: 'GlobalBoost-Y Bitcoin', decimal: '8', symbol: 'BSTY/BTC' },
    label: 'BSTY/BTC, GlobalBoost-Y Bitcoin'
  },
  {
    value: { id: '7978', name: 'Bitcoin SV Euro', decimal: '2', symbol: 'BSV/EUR' },
    label: 'BSV/EUR, Bitcoin SV Euro'
  },
  {
    value: { id: '7979', name: 'Bitcoin SV Thai Baht', decimal: '2', symbol: 'BSV/THB' },
    label: 'BSV/THB, Bitcoin SV Thai Baht'
  },
  {
    value: { id: '7980', name: 'Bata Bitcoin', decimal: '8', symbol: 'BTA/BTC' },
    label: 'BTA/BTC, Bata Bitcoin'
  },
  {
    value: { id: '7981', name: 'BitBar Bitcoin', decimal: '8', symbol: 'BTB/BTC' },
    label: 'BTB/BTC, BitBar Bitcoin'
  },
  {
    value: { id: '7982', name: 'Bitcoin Argentinian Peso', decimal: '2', symbol: 'BTC/ARS' },
    label: 'BTC/ARS, Bitcoin Argentinian Peso'
  },
  {
    value: { id: '7984', name: 'Bitcoin Chinese Yuan', decimal: '2', symbol: 'BTC/CNY' },
    label: 'BTC/CNY, Bitcoin Chinese Yuan'
  },
  {
    value: { id: '7985', name: 'Bitcoin Ethereum', decimal: '2', symbol: 'BTC/ETH' },
    label: 'BTC/ETH, Bitcoin Ethereum'
  },
  {
    value: { id: '7986', name: 'Bitcoin Hong Kong Dollar', decimal: '0', symbol: 'BTC/HKD' },
    label: 'BTC/HKD, Bitcoin Hong Kong Dollar'
  },
  {
    value: { id: '7987', name: 'Bitcoin Nigerian Naira', decimal: '0', symbol: 'BTC/NGN' },
    label: 'BTC/NGN, Bitcoin Nigerian Naira'
  },
  {
    value: { id: '7988', name: 'Bitcoin Singapore Dollar', decimal: '2', symbol: 'BTC/SGD' },
    label: 'BTC/SGD, Bitcoin Singapore Dollar'
  },
  {
    value: { id: '7989', name: 'Bitcoin Thai Baht', decimal: '0', symbol: 'BTC/THB' },
    label: 'BTC/THB, Bitcoin Thai Baht'
  },
  {
    value: { id: '7990', name: 'Bitcoin Ugandan Shilling', decimal: '0', symbol: 'BTC/UGX' },
    label: 'BTC/UGX, Bitcoin Ugandan Shilling'
  },
  {
    value: { id: '7991', name: 'Bitcoin Zambia Kwacha', decimal: '0', symbol: 'BTC/ZMW' },
    label: 'BTC/ZMW, Bitcoin Zambia Kwacha'
  },
  {
    value: {
      id: '7992',
      name: 'Bitcoin Private South African Rand',
      decimal: '2',
      symbol: 'BTCP/ZAR'
    },
    label: 'BTCP/ZAR, Bitcoin Private South African Rand'
  },
  {
    value: { id: '7993', name: 'Bitcoin Scrypt Bitcoin', decimal: '8', symbol: 'BTCS/BTC' },
    label: 'BTCS/BTC, Bitcoin Scrypt Bitcoin'
  },
  {
    value: { id: '7994', name: 'Bitcoin Vault Bitcoin', decimal: '8', symbol: 'BTCV/BTC' },
    label: 'BTCV/BTC, Bitcoin Vault Bitcoin'
  },
  {
    value: { id: '7995', name: 'Bitcoin Vault US Dollar', decimal: '2', symbol: 'BTCV/USD' },
    label: 'BTCV/USD, Bitcoin Vault US Dollar'
  },
  {
    value: { id: '7996', name: 'Bitcloud Bitcoin', decimal: '8', symbol: 'BTDX/BTC' },
    label: 'BTDX/BTC, Bitcloud Bitcoin'
  },
  {
    value: { id: '7997', name: 'Bottos Bitcoin', decimal: '8', symbol: 'BTO/BTC' },
    label: 'BTO/BTC, Bottos Bitcoin'
  },
  {
    value: { id: '7998', name: 'BitShares Ethereum', decimal: '8', symbol: 'BTS/ETH' },
    label: 'BTS/ETH, BitShares Ethereum'
  },
  {
    value: { id: '7999', name: 'BitTorrent Bitcoin', decimal: '8', symbol: 'BTTN/BTC' },
    label: 'BTTN/BTC, BitTorrent Bitcoin'
  },
  {
    value: { id: '8000', name: 'BitTorrent TRON', decimal: '6', symbol: 'BTTN/TRX' },
    label: 'BTTN/TRX, BitTorrent TRON'
  },
  {
    value: { id: '8001', name: 'BitTorrent Turkish Lira', decimal: '6', symbol: 'BTTN/TRY' },
    label: 'BTTN/TRY, BitTorrent Turkish Lira'
  },
  {
    value: { id: '8002', name: 'BTU Protocol Bitcoin', decimal: '8', symbol: 'BTUp/BTC' },
    label: 'BTUp/BTC, BTU Protocol Bitcoin'
  },
  {
    value: { id: '8003', name: 'BTU Protocol US Dollar', decimal: '6', symbol: 'BTUp/USD' },
    label: 'BTUp/USD, BTU Protocol US Dollar'
  },
  {
    value: { id: '8004', name: 'BitWhite Bitcoin', decimal: '8', symbol: 'BTW/BTC' },
    label: 'BTW/BTC, BitWhite Bitcoin'
  },
  {
    value: { id: '8005', name: 'BitWhite US Dollar', decimal: '6', symbol: 'BTW/USD' },
    label: 'BTW/USD, BitWhite US Dollar'
  },
  {
    value: { id: '8006', name: 'SwagBucks Bitcoin', decimal: '8', symbol: 'BUCKS/BTC' },
    label: 'BUCKS/BTC, SwagBucks Bitcoin'
  },
  {
    value: { id: '8007', name: 'Bulleon Bitcoin', decimal: '8', symbol: 'BUL/BTC' },
    label: 'BUL/BTC, Bulleon Bitcoin'
  },
  {
    value: { id: '8008', name: 'Bulleon US Dollar', decimal: '6', symbol: 'BUL/USD' },
    label: 'BUL/USD, Bulleon US Dollar'
  },
  {
    value: { id: '8009', name: 'BumbaCoin Bitcoin', decimal: '8', symbol: 'BUMBA/BTC' },
    label: 'BUMBA/BTC, BumbaCoin Bitcoin'
  },
  {
    value: { id: '8010', name: 'Bulwark Bitcoin', decimal: '8', symbol: 'BWK/BTC' },
    label: 'BWK/BTC, Bulwark Bitcoin'
  },
  {
    value: { id: '8011', name: 'Bezant Binance Coin', decimal: '6', symbol: 'BZNT/BNB' },
    label: 'BZNT/BNB, Bezant Binance Coin'
  },
  {
    value: { id: '8012', name: 'Coin2.1 Bitcoin', decimal: '8', symbol: 'C2/BTC' },
    label: 'C2/BTC, Coin2.1 Bitcoin'
  },
  {
    value: { id: '8013', name: 'CRYPTO20 Bitcoin', decimal: '7', symbol: 'C20/BTC' },
    label: 'C20/BTC, CRYPTO20 Bitcoin'
  },
  {
    value: { id: '8014', name: 'CRYPTO20 US Dollar', decimal: '5', symbol: 'C20/USD' },
    label: 'C20/USD, CRYPTO20 US Dollar'
  },
  {
    value: { id: '8015', name: 'Change Bitcoin', decimal: '8', symbol: 'CAG/BTC' },
    label: 'CAG/BTC, Change Bitcoin'
  },
  {
    value: { id: '8016', name: 'Change Ethereum', decimal: '6', symbol: 'CAG/ETH' },
    label: 'CAG/ETH, Change Ethereum'
  },
  {
    value: { id: '8017', name: 'CanYaCoin Binance Coin', decimal: '8', symbol: 'CAN/BNB' },
    label: 'CAN/BNB, CanYaCoin Binance Coin'
  },
  {
    value: { id: '8018', name: 'CannabisCoin Bitcoin', decimal: '8', symbol: 'CANN/BTC' },
    label: 'CANN/BTC, CannabisCoin Bitcoin'
  },
  {
    value: { id: '8019', name: 'Cappasity Bitcoin', decimal: '8', symbol: 'CAPP/BTC' },
    label: 'CAPP/BTC, Cappasity Bitcoin'
  },
  {
    value: { id: '8020', name: 'Cappasity Ethereum', decimal: '8', symbol: 'CAPP/ETH' },
    label: 'CAPP/ETH, Cappasity Ethereum'
  },
  {
    value: { id: '8021', name: 'Cardstack Bitcoin', decimal: '8', symbol: 'CARD/BTC' },
    label: 'CARD/BTC, Cardstack Bitcoin'
  },
  {
    value: { id: '8022', name: 'BlockCAT Bitcoin', decimal: '8', symbol: 'CAT/BTC' },
    label: 'CAT/BTC, BlockCAT Bitcoin'
  },
  {
    value: { id: '8023', name: 'BlockCAT US Dollar', decimal: '5', symbol: 'CAT/USD' },
    label: 'CAT/USD, BlockCAT US Dollar'
  },
  {
    value: { id: '8024', name: 'CryptoBossCoin Bitcoin', decimal: '8', symbol: 'CBC/BTC' },
    label: 'CBC/BTC, CryptoBossCoin Bitcoin'
  },
  {
    value: { id: '8025', name: 'CryptoBossCoin Ethereum', decimal: '8', symbol: 'CBC/ETH' },
    label: 'CBC/ETH, CryptoBossCoin Ethereum'
  },
  {
    value: { id: '8026', name: 'CryptoBossCoin US Dollar', decimal: '6', symbol: 'CBC/USD' },
    label: 'CBC/USD, CryptoBossCoin US Dollar'
  },
  {
    value: { id: '8027', name: 'CommerceBlock Bitcoin', decimal: '8', symbol: 'CBT/BTC' },
    label: 'CBT/BTC, CommerceBlock Bitcoin'
  },
  {
    value: { id: '8028', name: 'Bullion Bitcoin', decimal: '8', symbol: 'CBXN/BTC' },
    label: 'CBXN/BTC, Bullion Bitcoin'
  },
  {
    value: { id: '8029', name: 'Ccore Ethereum', decimal: '6', symbol: 'CCO/ETH' },
    label: 'CCO/ETH, Ccore Ethereum'
  },
  {
    value: { id: '8030', name: 'CryptoCarbon Bitcoin', decimal: '8', symbol: 'CCRB/BTC' },
    label: 'CCRB/BTC, CryptoCarbon Bitcoin'
  },
  {
    value: { id: '8031', name: 'Canada eCoin Bitcoin', decimal: '8', symbol: 'CDN/BTC' },
    label: 'CDN/BTC, Canada eCoin Bitcoin'
  },
  {
    value: { id: '8032', name: 'Celer Network Binance Coin', decimal: '6', symbol: 'CELR/BNB' },
    label: 'CELR/BNB, Celer Network Binance Coin'
  },
  {
    value: { id: '8033', name: 'Celer Network Bitcoin', decimal: '8', symbol: 'CELR/BTC' },
    label: 'CELR/BTC, Celer Network Bitcoin'
  },
  {
    value: { id: '8034', name: 'Celer Network Ethereum', decimal: '8', symbol: 'CELR/ETH' },
    label: 'CELR/ETH, Celer Network Ethereum'
  },
  {
    value: { id: '8035', name: 'Celer Network US Dollar', decimal: '5', symbol: 'CELR/USD' },
    label: 'CELR/USD, Celer Network US Dollar'
  },
  {
    value: { id: '8036', name: 'Centrality Bitcoin', decimal: '8', symbol: 'CENNZ/BTC' },
    label: 'CENNZ/BTC, Centrality Bitcoin'
  },
  {
    value: { id: '8037', name: 'ChessCoin Bitcoin', decimal: '8', symbol: 'CHESS/BTC' },
    label: 'CHESS/BTC, ChessCoin Bitcoin'
  },
  {
    value: { id: '8038', name: 'SwissBorg Bitcoin', decimal: '8', symbol: 'CHSB/BTC' },
    label: 'CHSB/BTC, SwissBorg Bitcoin'
  },
  {
    value: { id: '8039', name: 'SwissBorg Ethereum', decimal: '8', symbol: 'CHSB/ETH' },
    label: 'CHSB/ETH, SwissBorg Ethereum'
  },
  {
    value: { id: '8040', name: 'SwissBorg US Dollar', decimal: '6', symbol: 'CHSB/USD' },
    label: 'CHSB/USD, SwissBorg US Dollar'
  },
  {
    value: { id: '8041', name: 'Chiliz Brazil Real', decimal: '5', symbol: 'CHZ/BRL' },
    label: 'CHZ/BRL, Chiliz Brazil Real'
  },
  {
    value: { id: '8042', name: 'Chiliz Bitcoin', decimal: '8', symbol: 'CHZ/BTC' },
    label: 'CHZ/BTC, Chiliz Bitcoin'
  },
  {
    value: { id: '8043', name: 'Chiliz Turkish Lira', decimal: '4', symbol: 'CHZ/TRY' },
    label: 'CHZ/TRY, Chiliz Turkish Lira'
  },
  {
    value: { id: '8044', name: 'Chiliz US Dollar', decimal: '6', symbol: 'CHZ/USD' },
    label: 'CHZ/USD, Chiliz US Dollar'
  },
  {
    value: {
      id: '8045',
      name: 'Cryptoindex.com 100 US Dollar',
      decimal: '6',
      symbol: 'CIX100/USD'
    },
    label: 'CIX100/USD, Cryptoindex.com 100 US Dollar'
  },
  {
    value: { id: '8046', name: 'Cryptojacks Bitcoin', decimal: '8', symbol: 'CJ/BTC' },
    label: 'CJ/BTC, Cryptojacks Bitcoin'
  },
  {
    value: { id: '8047', name: 'Clams Bitcoin', decimal: '6', symbol: 'CLAM/BTC' },
    label: 'CLAM/BTC, Clams Bitcoin'
  },
  {
    value: { id: '8048', name: 'Callisto Network Litecoin', decimal: '8', symbol: 'CLO/LTC' },
    label: 'CLO/LTC, Callisto Network Litecoin'
  },
  {
    value: { id: '8049', name: 'CloakCoin Bitcoin', decimal: '6', symbol: 'CLOAK/BTC' },
    label: 'CLOAK/BTC, CloakCoin Bitcoin'
  },
  {
    value: { id: '8050', name: 'Crowd Machine Bitcoin', decimal: '8', symbol: 'CMCT/BTC' },
    label: 'CMCT/BTC, Crowd Machine Bitcoin'
  },
  {
    value: { id: '8051', name: 'Crowd Machine Ethereum', decimal: '8', symbol: 'CMCT/ETH' },
    label: 'CMCT/ETH, Crowd Machine Ethereum'
  },
  {
    value: { id: '8052', name: 'CyberMiles Bitcoin', decimal: '8', symbol: 'CMT/BTC' },
    label: 'CMT/BTC, CyberMiles Bitcoin'
  },
  {
    value: { id: '8053', name: 'Cannation Bitcoin', decimal: '8', symbol: 'CNNC/BTC' },
    label: 'CNNC/BTC, Cannation Bitcoin'
  },
  {
    value: { id: '8054', name: 'Coin(O) Bitcoin', decimal: '8', symbol: 'CNO/BTC' },
    label: 'CNO/BTC, Coin(O) Bitcoin'
  },
  {
    value: { id: '8055', name: 'Cryptonex US Dollar', decimal: '5', symbol: 'CNX/USD' },
    label: 'CNX/USD, Cryptonex US Dollar'
  },
  {
    value: { id: '8056', name: 'BitCoal Bitcoin', decimal: '8', symbol: 'COAL/BTC' },
    label: 'COAL/BTC, BitCoal Bitcoin'
  },
  {
    value: { id: '8057', name: 'Cobinhood Bitcoin', decimal: '8', symbol: 'COB/BTC' },
    label: 'COB/BTC, Cobinhood Bitcoin'
  },
  {
    value: { id: '8058', name: 'Cocos-BCX US Dollar', decimal: '6', symbol: 'COCOS/USD' },
    label: 'COCOS/USD, Cocos-BCX US Dollar'
  },
  {
    value: { id: '8059', name: 'ColossusXT Bitcoin', decimal: '8', symbol: 'COLX/BTC' },
    label: 'COLX/BTC, ColossusXT Bitcoin'
  },
  {
    value: { id: '8060', name: 'Compound Bitcoin', decimal: '6', symbol: 'COMP/BTC' },
    label: 'COMP/BTC, Compound Bitcoin'
  },
  {
    value: { id: '8061', name: 'PayCon Bitcoin', decimal: '8', symbol: 'CON/BTC' },
    label: 'CON/BTC, PayCon Bitcoin'
  },
  {
    value: { id: '8062', name: 'COS Ethereum', decimal: '6', symbol: 'COS/ETH' },
    label: 'COS/ETH, COS Ethereum'
  },
  {
    value: { id: '8063', name: 'Cosmo Coin Korean Won', decimal: '2', symbol: 'COSM/KRW' },
    label: 'COSM/KRW, Cosmo Coin Korean Won'
  },
  {
    value: { id: '8064', name: 'COTI Bitcoin', decimal: '8', symbol: 'COTI/BTC' },
    label: 'COTI/BTC, COTI Bitcoin'
  },
  {
    value: { id: '8065', name: 'COTI US Dollar', decimal: '5', symbol: 'COTI/USD' },
    label: 'COTI/USD, COTI US Dollar'
  },
  {
    value: { id: '8066', name: 'Circuits of Value Bitcoin', decimal: '8', symbol: 'COVAL/BTC' },
    label: 'COVAL/BTC, Circuits of Value Bitcoin'
  },
  {
    value: { id: '8067', name: 'Crave Bitcoin', decimal: '8', symbol: 'CRAVE/BTC' },
    label: 'CRAVE/BTC, Crave Bitcoin'
  },
  {
    value: { id: '8068', name: 'CRBIT/BTC - Creditbit Bitcoin', decimal: '8', symbol: 'CRB/BTC' },
    label: 'CRB/BTC, CRBIT/BTC - Creditbit Bitcoin'
  },
  {
    value: { id: '8069', name: 'Credo Ethereum', decimal: '8', symbol: 'CREDO/ETH' },
    label: 'CREDO/ETH, Credo Ethereum'
  },
  {
    value: { id: '8070', name: 'CrevaCoin Bitcoin', decimal: '8', symbol: 'CREVA/BTC' },
    label: 'CREVA/BTC, CrevaCoin Bitcoin'
  },
  {
    value: { id: '8071', name: 'Cream Bitcoin', decimal: '8', symbol: 'CRM/BTC' },
    label: 'CRM/BTC, Cream Bitcoin'
  },
  {
    value: { id: '8072', name: 'Crypto.com Coin Bitcoin', decimal: '8', symbol: 'CRO/BTC' },
    label: 'CRO/BTC, Crypto.com Coin Bitcoin'
  },
  {
    value: {
      id: '8073',
      name: 'Crypto.com Coin Indonesian Rupiah',
      decimal: '0',
      symbol: 'CRO/IDR'
    },
    label: 'CRO/IDR, Crypto.com Coin Indonesian Rupiah'
  },
  {
    value: { id: '8074', name: 'Crypterium Ethereum', decimal: '8', symbol: 'CRPT/ETH' },
    label: 'CRPT/ETH, Crypterium Ethereum'
  },
  {
    value: { id: '8075', name: 'Chronos Bitcoin', decimal: '8', symbol: 'CRX/BTC' },
    label: 'CRX/BTC, Chronos Bitcoin'
  },
  {
    value: { id: '8076', name: 'Cartesi Binance Coin', decimal: '6', symbol: 'CTSI/BNB' },
    label: 'CTSI/BNB, Cartesi Binance Coin'
  },
  {
    value: { id: '8077', name: 'Cartesi Bitcoin', decimal: '8', symbol: 'CTSI/BTC' },
    label: 'CTSI/BTC, Cartesi Bitcoin'
  },
  {
    value: { id: '8078', name: 'Cartesi US Dollar', decimal: '6', symbol: 'CTSI/USD' },
    label: 'CTSI/USD, Cartesi US Dollar'
  },
  {
    value: { id: '8079', name: 'Coinonat Bitcoin', decimal: '8', symbol: 'CXT/BTC' },
    label: 'CXT/BTC, Coinonat Bitcoin'
  },
  {
    value: { id: '8080', name: 'Denarius Bitcoin', decimal: '8', symbol: 'D/BTC' },
    label: 'D/BTC, Denarius Bitcoin'
  },
  {
    value: { id: '8081', name: 'Constellation Bitcoin', decimal: '8', symbol: 'DAG/BTC' },
    label: 'DAG/BTC, Constellation Bitcoin'
  },
  {
    value: { id: '8082', name: 'Constellation Ethereum', decimal: '8', symbol: 'DAG/ETH' },
    label: 'DAG/ETH, Constellation Ethereum'
  },
  {
    value: { id: '8083', name: 'Dalecoin Bitcoin', decimal: '7', symbol: 'DALC/BTC' },
    label: 'DALC/BTC, Dalecoin Bitcoin'
  },
  {
    value: { id: '8084', name: 'DAPS Coin Ethereum', decimal: '8', symbol: 'DAPS/ETH' },
    label: 'DAPS/ETH, DAPS Coin Ethereum'
  },
  {
    value: { id: '8085', name: 'Dash Binance Coin', decimal: '3', symbol: 'DASH/BNB' },
    label: 'DASH/BNB, Dash Binance Coin'
  },
  {
    value: { id: '8086', name: 'Dash Japanese Yen', decimal: '0', symbol: 'DASH/JPY' },
    label: 'DASH/JPY, Dash Japanese Yen'
  },
  {
    value: { id: '8087', name: 'Chronologic Ethereum', decimal: '8', symbol: 'DAY/ETH' },
    label: 'DAY/ETH, Chronologic Ethereum'
  },
  {
    value: { id: '8088', name: 'DubaiCoin Bitcoin', decimal: '8', symbol: 'DBIX/BTC' },
    label: 'DBIX/BTC, DubaiCoin Bitcoin'
  },
  {
    value: { id: '8089', name: 'Decred Bitcoin Cash', decimal: '4', symbol: 'DCR/BCH' },
    label: 'DCR/BCH, Decred Bitcoin Cash'
  },
  {
    value: { id: '8090', name: 'Dinastycoin Bitcoin', decimal: '8', symbol: 'DCY/BTC' },
    label: 'DCY/BTC, Dinastycoin Bitcoin'
  },
  {
    value: { id: '8091', name: 'DDKoin Bitcoin', decimal: '8', symbol: 'DDK/BTC' },
    label: 'DDK/BTC, DDKoin Bitcoin'
  },
  {
    value: { id: '8092', name: 'DDKoin Ethereum', decimal: '8', symbol: 'DDK/ETH' },
    label: 'DDK/ETH, DDKoin Ethereum'
  },
  {
    value: { id: '8093', name: 'DDKoin US Dollar', decimal: '4', symbol: 'DDK/USD' },
    label: 'DDK/USD, DDKoin US Dollar'
  },
  {
    value: { id: '8094', name: 'Deutsche eMark Bitcoin', decimal: '8', symbol: 'DEM/BTC' },
    label: 'DEM/BTC, Deutsche eMark Bitcoin'
  },
  {
    value: { id: '8095', name: 'Dent Turkish Lira', decimal: '5', symbol: 'DENT/TRY' },
    label: 'DENT/TRY, Dent Turkish Lira'
  },
  {
    value: { id: '8096', name: 'Dent US Dollar', decimal: '6', symbol: 'DENT/USD' },
    label: 'DENT/USD, Dent US Dollar'
  },
  {
    value: { id: '8097', name: 'DEW Ethereum', decimal: '6', symbol: 'DEW/ETH' },
    label: 'DEW/ETH, DEW Ethereum'
  },
  {
    value: { id: '8098', name: 'DEX Ethereum', decimal: '8', symbol: 'DEX/ETH' },
    label: 'DEX/ETH, DEX Ethereum'
  },
  {
    value: { id: '8099', name: 'DigiByte Bitcoin Cash', decimal: '6', symbol: 'DGB/BCH' },
    label: 'DGB/BCH, DigiByte Bitcoin Cash'
  },
  {
    value: { id: '8100', name: 'Digitalcoin Bitcoin', decimal: '8', symbol: 'DGC/BTC' },
    label: 'DGC/BTC, Digitalcoin Bitcoin'
  },
  {
    value: { id: '8101', name: 'DigixDAO Bitcoin', decimal: '6', symbol: 'DGD/BTC' },
    label: 'DGD/BTC, DigixDAO Bitcoin'
  },
  {
    value: { id: '8102', name: 'DigixDAO Ethereum', decimal: '5', symbol: 'DGD/ETH' },
    label: 'DGD/ETH, DigixDAO Ethereum'
  },
  {
    value: { id: '8103', name: 'DigixDAO US Dollar', decimal: '3', symbol: 'DGD/USD' },
    label: 'DGD/USD, DigixDAO US Dollar'
  },
  {
    value: { id: '8104', name: 'Etheroll Ethereum', decimal: '6', symbol: 'DICE/ETH' },
    label: 'DICE/ETH, Etheroll Ethereum'
  },
  {
    value: { id: '8105', name: 'Dimecoin US Dollar', decimal: '8', symbol: 'DIME/USD' },
    label: 'DIME/USD, Dimecoin US Dollar'
  },
  {
    value: { id: '8106', name: 'Divi Bitcoin', decimal: '8', symbol: 'DIVI/BTC' },
    label: 'DIVI/BTC, Divi Bitcoin'
  },
  {
    value: { id: '8107', name: 'Divi XRP', decimal: '6', symbol: 'DIVI/XRP' },
    label: 'DIVI/XRP, Divi XRP'
  },
  {
    value: { id: '8108', name: 'Digital Money Bits Bitcoin', decimal: '8', symbol: 'DMB/BTC' },
    label: 'DMB/BTC, Digital Money Bits Bitcoin'
  },
  {
    value: { id: '8109', name: 'DMM: Governance Ethereum', decimal: '6', symbol: 'DMG/ETH' },
    label: 'DMG/ETH, DMM: Governance Ethereum'
  },
  {
    value: { id: '8110', name: 'DMM: Governance US Dollar', decimal: '4', symbol: 'DMG/USD' },
    label: 'DMG/USD, DMM: Governance US Dollar'
  },
  {
    value: { id: '8111', name: 'EncrypGen Ethereum', decimal: '6', symbol: 'DNA/ETH' },
    label: 'DNA/ETH, EncrypGen Ethereum'
  },
  {
    value: { id: '8112', name: 'district0x Bitcoin', decimal: '8', symbol: 'DNT/BTC' },
    label: 'DNT/BTC, district0x Bitcoin'
  },
  {
    value: { id: '8113', name: 'district0x Ethereum', decimal: '7', symbol: 'DNT/ETH' },
    label: 'DNT/ETH, district0x Ethereum'
  },
  {
    value: { id: '8114', name: 'district0x US Dollar', decimal: '6', symbol: 'DNT/USD' },
    label: 'DNT/USD, district0x US Dollar'
  },
  {
    value: { id: '8115', name: 'district0x XRP', decimal: '6', symbol: 'DNT/XRP' },
    label: 'DNT/XRP, district0x XRP'
  },
  {
    value: { id: '8116', name: 'Dock Ethereum', decimal: '7', symbol: 'DOCK/ETH' },
    label: 'DOCK/ETH, Dock Ethereum'
  },
  {
    value: { id: '8117', name: 'Dogecoin Chinese Yuan', decimal: '5', symbol: 'DOGE/CNY' },
    label: 'DOGE/CNY, Dogecoin Chinese Yuan'
  },
  {
    value: { id: '8118', name: 'Dogecoin Litecoin', decimal: '8', symbol: 'DOGE/LTC' },
    label: 'DOGE/LTC, Dogecoin Litecoin'
  },
  {
    value: { id: '8119', name: 'Dogecoin Turkish Lira', decimal: '4', symbol: 'DOGE/TRY' },
    label: 'DOGE/TRY, Dogecoin Turkish Lira'
  },
  {
    value: { id: '8120', name: 'DopeCoin Bitcoin', decimal: '8', symbol: 'DOPE/BTC' },
    label: 'DOPE/BTC, DopeCoin Bitcoin'
  },
  {
    value: { id: '8121', name: 'Dovu Bitcoin', decimal: '8', symbol: 'DOV/BTC' },
    label: 'DOV/BTC, Dovu Bitcoin'
  },
  {
    value: { id: '8122', name: 'Dovu Ethereum', decimal: '7', symbol: 'DOV/ETH' },
    label: 'DOV/ETH, Dovu Ethereum'
  },
  {
    value: { id: '8123', name: 'DREP Bitcoin', decimal: '8', symbol: 'DREP/BTC' },
    label: 'DREP/BTC, DREP Bitcoin'
  },
  {
    value: { id: '8124', name: 'DREP US Dollar', decimal: '6', symbol: 'DREP/USD' },
    label: 'DREP/USD, DREP US Dollar'
  },
  {
    value: { id: '8125', name: 'Dropil Ethereum', decimal: '8', symbol: 'DROP/ETH' },
    label: 'DROP/ETH, Dropil Ethereum'
  },
  {
    value: { id: '8126', name: 'DomRaider Ethereum', decimal: '8', symbol: 'DRT/ETH' },
    label: 'DRT/ETH, DomRaider Ethereum'
  },
  {
    value: { id: '8127', name: 'Desire Bitcoin', decimal: '8', symbol: 'DSR/BTC' },
    label: 'DSR/BTC, Desire Bitcoin'
  },
  {
    value: { id: '8128', name: 'DECOIN Bitcoin', decimal: '8', symbol: 'DTEP/BTC' },
    label: 'DTEP/BTC, DECOIN Bitcoin'
  },
  {
    value: { id: '8129', name: 'DECOIN US Dollar', decimal: '6', symbol: 'DTEP/USD' },
    label: 'DTEP/USD, DECOIN US Dollar'
  },
  {
    value: { id: '8130', name: 'ParallelCoin Bitcoin', decimal: '6', symbol: 'DUO/BTC' },
    label: 'DUO/BTC, ParallelCoin Bitcoin'
  },
  {
    value: { id: '8131', name: 'ParallelCoin Dogecoin', decimal: '2', symbol: 'DUO/DOGE' },
    label: 'DUO/DOGE, ParallelCoin Dogecoin'
  },
  {
    value: { id: '8132', name: 'ParallelCoin Ethereum', decimal: '8', symbol: 'DUO/ETH' },
    label: 'DUO/ETH, ParallelCoin Ethereum'
  },
  {
    value: { id: '8133', name: 'Dynamic Bitcoin', decimal: '8', symbol: 'DYN/BTC' },
    label: 'DYN/BTC, Dynamic Bitcoin'
  },
  {
    value: { id: '8134', name: 'Dynamite Bitcoin', decimal: '7', symbol: 'DYNMT/BTC' },
    label: 'DYNMT/BTC, Dynamite Bitcoin'
  },
  {
    value: { id: '8135', name: 'Dynamite Ethereum', decimal: '6', symbol: 'DYNMT/ETH' },
    label: 'DYNMT/ETH, Dynamite Ethereum'
  },
  {
    value: { id: '8136', name: 'Dynamite US Dollar', decimal: '5', symbol: 'DYNMT/USD' },
    label: 'DYNMT/USD, Dynamite US Dollar'
  },
  {
    value: { id: '8137', name: 'Electronic Energy Coin Ethereum', decimal: '8', symbol: 'E2C/ETH' },
    label: 'E2C/ETH, Electronic Energy Coin Ethereum'
  },
  {
    value: { id: '8138', name: 'eBoost Binance Coin', decimal: '6', symbol: 'EBST/BNB' },
    label: 'EBST/BNB, eBoost Binance Coin'
  },
  {
    value: { id: '8139', name: 'eBitcoin Ethereum', decimal: '6', symbol: 'EBTC/ETH' },
    label: 'EBTC/ETH, eBitcoin Ethereum'
  },
  {
    value: { id: '8140', name: 'Electra Bitcoin', decimal: '8', symbol: 'ECA/BTC' },
    label: 'ECA/BTC, Electra Bitcoin'
  },
  {
    value: { id: '8141', name: 'ECC Bitcoin', decimal: '8', symbol: 'ECC/BTC' },
    label: 'ECC/BTC, ECC Bitcoin'
  },
  {
    value: { id: '8142', name: 'EcoCoin Bitcoin', decimal: '8', symbol: 'ECO/BTC' },
    label: 'ECO/BTC, EcoCoin Bitcoin'
  },
  {
    value: { id: '8143', name: 'Ecobit Bitcoin', decimal: '8', symbol: 'ECOB/BTC' },
    label: 'ECOB/BTC, Ecobit Bitcoin'
  },
  {
    value: { id: '8144', name: 'EurocoinToken Bitcoin', decimal: '8', symbol: 'ECTE/BTC' },
    label: 'ECTE/BTC, EurocoinToken Bitcoin'
  },
  {
    value: { id: '8145', name: 'EurocoinToken US Dollar', decimal: '6', symbol: 'ECTE/USD' },
    label: 'ECTE/USD, EurocoinToken US Dollar'
  },
  {
    value: { id: '8146', name: 'EDC Blockchain Bitcoin', decimal: '8', symbol: 'EDC/BTC' },
    label: 'EDC/BTC, EDC Blockchain Bitcoin'
  },
  {
    value: { id: '8147', name: 'EDC Blockchain US Dollar', decimal: '6', symbol: 'EDC/USD' },
    label: 'EDC/USD, EDC Blockchain US Dollar'
  },
  {
    value: { id: '8148', name: 'Edgeless Ethereum', decimal: '6', symbol: 'EDG/ETH' },
    label: 'EDG/ETH, Edgeless Ethereum'
  },
  {
    value: { id: '8149', name: 'Edgeless US Dollar', decimal: '5', symbol: 'EDG/USD' },
    label: 'EDG/USD, Edgeless US Dollar'
  },
  {
    value: { id: '8150', name: 'EDRCoin Bitcoin', decimal: '8', symbol: 'EDRC/BTC' },
    label: 'EDRC/BTC, EDRCoin Bitcoin'
  },
  {
    value: { id: '8151', name: 'Endor Protocol Bitcoin', decimal: '8', symbol: 'EDRL/BTC' },
    label: 'EDRL/BTC, Endor Protocol Bitcoin'
  },
  {
    value: { id: '8152', name: 'Ethereum eRush Bitcoin', decimal: '8', symbol: 'EER/BTC' },
    label: 'EER/BTC, Ethereum eRush Bitcoin'
  },
  {
    value: { id: '8153', name: 'Ethereum eRush US Dollar', decimal: '6', symbol: 'EER/USD' },
    label: 'EER/USD, Ethereum eRush US Dollar'
  },
  {
    value: { id: '8154', name: 'e-Gulden Bitcoin', decimal: '8', symbol: 'EFL/BTC' },
    label: 'EFL/BTC, e-Gulden Bitcoin'
  },
  {
    value: { id: '8155', name: 'EverGreenCoin Bitcoin', decimal: '8', symbol: 'EGC/BTC' },
    label: 'EGC/BTC, EverGreenCoin Bitcoin'
  },
  {
    value: { id: '8156', name: 'Elrond Binance Coin', decimal: '8', symbol: 'EGLD/BNB' },
    label: 'EGLD/BNB, Elrond Binance Coin'
  },
  {
    value: { id: '8157', name: 'Elrond Bitcoin', decimal: '8', symbol: 'EGLD/BTC' },
    label: 'EGLD/BTC, Elrond Bitcoin'
  },
  {
    value: { id: '8158', name: 'Egretia Bitcoin', decimal: '8', symbol: 'EGT/BTC' },
    label: 'EGT/BTC, Egretia Bitcoin'
  },
  {
    value: { id: '8159', name: 'Egretia Ethereum', decimal: '8', symbol: 'EGT/ETH' },
    label: 'EGT/ETH, Egretia Ethereum'
  },
  {
    value: { id: '8160', name: 'EDUCare Bitcoin', decimal: '8', symbol: 'EKT/BTC' },
    label: 'EKT/BTC, EDUCare Bitcoin'
  },
  {
    value: { id: '8161', name: 'EDUCare Ethereum', decimal: '8', symbol: 'EKT/ETH' },
    label: 'EKT/ETH, EDUCare Ethereum'
  },
  {
    value: { id: '8162', name: 'EDUCare US Dollar', decimal: '6', symbol: 'EKT/USD' },
    label: 'EKT/USD, EDUCare US Dollar'
  },
  {
    value: { id: '8163', name: 'Elacoin Bitcoin', decimal: '8', symbol: 'ELC/BTC' },
    label: 'ELC/BTC, Elacoin Bitcoin'
  },
  {
    value: { id: '8164', name: 'Electrify.Asia Bitcoin', decimal: '8', symbol: 'ELEC/BTC' },
    label: 'ELEC/BTC, Electrify.Asia Bitcoin'
  },
  {
    value: { id: '8165', name: 'Ellaism Bitcoin', decimal: '8', symbol: 'ELLA/BTC' },
    label: 'ELLA/BTC, Ellaism Bitcoin'
  },
  {
    value: { id: '8166', name: 'ELTCOIN Ethereum', decimal: '8', symbol: 'ELTCOIN/ETH' },
    label: 'ELTCOIN/ETH, ELTCOIN Ethereum'
  },
  {
    value: { id: '8167', name: 'Emerald Crypto Bitcoin', decimal: '8', symbol: 'EMD/BTC' },
    label: 'EMD/BTC, Emerald Crypto Bitcoin'
  },
  {
    value: { id: '8168', name: 'Enigma US Dollar', decimal: '5', symbol: 'ENG/USD' },
    label: 'ENG/USD, Enigma US Dollar'
  },
  {
    value: { id: '8169', name: 'Enjin Coin Korean Won', decimal: '2', symbol: 'ENJ/KRW' },
    label: 'ENJ/KRW, Enjin Coin Korean Won'
  },
  {
    value: { id: '8170', name: 'Energycoin Bitcoin', decimal: '8', symbol: 'ENRG/BTC' },
    label: 'ENRG/BTC, Energycoin Bitcoin'
  },
  {
    value: { id: '8171', name: 'Eternity Bitcoin', decimal: '8', symbol: 'ENT/BTC' },
    label: 'ENT/BTC, Eternity Bitcoin'
  },
  {
    value: { id: '8172', name: 'Eternity US Dollar', decimal: '6', symbol: 'ENT/USD' },
    label: 'ENT/USD, Eternity US Dollar'
  },
  {
    value: { id: '8173', name: 'EOS Bitcoin', decimal: '7', symbol: 'EOS/BTC' },
    label: 'EOS/BTC, EOS Bitcoin'
  },
  {
    value: { id: '8174', name: 'EOS Hong Kong Dollar', decimal: '3', symbol: 'EOS/HKD' },
    label: 'EOS/HKD, EOS Hong Kong Dollar'
  },
  {
    value: { id: '8175', name: 'Emphy Ethereum', decimal: '8', symbol: 'EPY/ETH' },
    label: 'EPY/ETH, Emphy Ethereum'
  },
  {
    value: { id: '8176', name: 'EquiTrader Bitcoin', decimal: '8', symbol: 'EQT/BTC' },
    label: 'EQT/BTC, EquiTrader Bitcoin'
  },
  {
    value: { id: '8177', name: 'Eryllium Bitcoin', decimal: '8', symbol: 'ERY/BTC' },
    label: 'ERY/BTC, Eryllium Bitcoin'
  },
  {
    value: { id: '8178', name: 'Essentia Bitcoin', decimal: '8', symbol: 'ESS/BTC' },
    label: 'ESS/BTC, Essentia Bitcoin'
  },
  {
    value: { id: '8179', name: 'Ethereum Gold Ethereum', decimal: '7', symbol: 'ETG/ETH' },
    label: 'ETG/ETH, Ethereum Gold Ethereum'
  },
  {
    value: { id: '8180', name: 'Ethereum Brazil Real', decimal: '2', symbol: 'ETH/BRL' },
    label: 'ETH/BRL, Ethereum Brazil Real'
  },
  {
    value: { id: '8181', name: 'Ethereum Dai', decimal: '2', symbol: 'ETH/DAI' },
    label: 'ETH/DAI, Ethereum Dai'
  },
  {
    value: { id: '8182', name: 'Ethereum Nigerian Naira', decimal: '0', symbol: 'ETH/NGN' },
    label: 'ETH/NGN, Ethereum Nigerian Naira'
  },
  {
    value: { id: '8183', name: 'Ethereum Russian Ruble', decimal: '2', symbol: 'ETH/RUB' },
    label: 'ETH/RUB, Ethereum Russian Ruble'
  },
  {
    value: { id: '8184', name: 'Ethereum Thai Baht', decimal: '2', symbol: 'ETH/THB' },
    label: 'ETH/THB, Ethereum Thai Baht'
  },
  {
    value: { id: '8185', name: 'Ethereum Meta Ethereum', decimal: '8', symbol: 'ETHM/ETH' },
    label: 'ETHM/ETH, Ethereum Meta Ethereum'
  },
  {
    value: { id: '8186', name: 'Ethereum Meta US Dollar', decimal: '6', symbol: 'ETHM/USD' },
    label: 'ETHM/USD, Ethereum Meta US Dollar'
  },
  {
    value: {
      id: '8187',
      name: 'BQX/BTC - Voyager Token Bitcoin',
      decimal: '7',
      symbol: 'ETHOS/BTC'
    },
    label: 'ETHOS/BTC, BQX/BTC - Voyager Token Bitcoin'
  },
  {
    value: {
      id: '8188',
      name: 'BQX/ETH - Voyager Token Ethereum',
      decimal: '6',
      symbol: 'ETHOS/ETH'
    },
    label: 'ETHOS/ETH, BQX/ETH - Voyager Token Ethereum'
  },
  {
    value: { id: '8189', name: 'Electroneum US Dollar', decimal: '6', symbol: 'ETN/USD' },
    label: 'ETN/USD, Electroneum US Dollar'
  },
  {
    value: { id: '8190', name: 'EncryptoTel [WAVES] Bitcoin', decimal: '8', symbol: 'ETT/BTC' },
    label: 'ETT/BTC, EncryptoTel [WAVES] Bitcoin'
  },
  {
    value: { id: '8191', name: 'Eurocoin Bitcoin', decimal: '8', symbol: 'EUC/BTC' },
    label: 'EUC/BTC, Eurocoin Bitcoin'
  },
  {
    value: { id: '8192', name: 'STASIS EURO Euro', decimal: '4', symbol: 'EURS/EUR' },
    label: 'EURS/EUR, STASIS EURO Euro'
  },
  {
    value: { id: '8193', name: 'EventChain Ethereum', decimal: '6', symbol: 'EVC/ETH' },
    label: 'EVC/ETH, EventChain Ethereum'
  },
  {
    value: { id: '8194', name: 'Evil Coin Bitcoin', decimal: '8', symbol: 'EVIL/BTC' },
    label: 'EVIL/BTC, Evil Coin Bitcoin'
  },
  {
    value: { id: '8195', name: 'Evotion Bitcoin', decimal: '8', symbol: 'EVO/BTC' },
    label: 'EVO/BTC, Evotion Bitcoin'
  },
  {
    value: { id: '8196', name: 'Everex Ethereum', decimal: '6', symbol: 'EVX/ETH' },
    label: 'EVX/ETH, Everex Ethereum'
  },
  {
    value: { id: '8197', name: 'Everex US Dollar', decimal: '5', symbol: 'EVX/USD' },
    label: 'EVX/USD, Everex US Dollar'
  },
  {
    value: { id: '8198', name: 'EXRNchain Ethereum', decimal: '8', symbol: 'EXRN/ETH' },
    label: 'EXRN/ETH, EXRNchain Ethereum'
  },
  {
    value: { id: '8199', name: 'Fazzcoin Bitcoin', decimal: '8', symbol: 'FAZZ/BTC' },
    label: 'FAZZ/BTC, Fazzcoin Bitcoin'
  },
  {
    value: { id: '8200', name: 'Factom Bitcoin', decimal: '6', symbol: 'FCT/BTC' },
    label: 'FCT/BTC, Factom Bitcoin'
  },
  {
    value: { id: '8201', name: 'Fetch.ai Ethereum', decimal: '8', symbol: 'FET/ETH' },
    label: 'FET/ETH, Fetch.ai Ethereum'
  },
  {
    value: { id: '8202', name: 'Fidyo US Dollar', decimal: '6', symbol: 'FIDYO/USD' },
    label: 'FIDYO/USD, Fidyo US Dollar'
  },
  {
    value: { id: '8203', name: 'Fidyo Waves', decimal: '6', symbol: 'FIDYO/WAVES' },
    label: 'FIDYO/WAVES, Fidyo Waves'
  },
  {
    value: { id: '8204', name: 'FIO Protocol Binance Coin', decimal: '5', symbol: 'FIO/BNB' },
    label: 'FIO/BNB, FIO Protocol Binance Coin'
  },
  {
    value: { id: '8205', name: 'FIO Protocol Bitcoin', decimal: '8', symbol: 'FIO/BTC' },
    label: 'FIO/BTC, FIO Protocol Bitcoin'
  },
  {
    value: { id: '8206', name: 'FIO Protocol US Dollar', decimal: '5', symbol: 'FIO/USD' },
    label: 'FIO/USD, FIO Protocol US Dollar'
  },
  {
    value: { id: '8207', name: 'FujiCoin Bitcoin', decimal: '8', symbol: 'FJC/BTC' },
    label: 'FJC/BTC, FujiCoin Bitcoin'
  },
  {
    value: { id: '8208', name: 'Flash Bitcoin', decimal: '8', symbol: 'FLASH/BTC' },
    label: 'FLASH/BTC, Flash Bitcoin'
  },
  {
    value: { id: '8209', name: 'FoldingCoin Bitcoin', decimal: '8', symbol: 'FLDC/BTC' },
    label: 'FLDC/BTC, FoldingCoin Bitcoin'
  },
  {
    value: { id: '8210', name: 'Flixxo Ethereum', decimal: '8', symbol: 'FLIXX/ETH' },
    label: 'FLIXX/ETH, Flixxo Ethereum'
  },
  {
    value: { id: '8211', name: 'FinCoin US Dollar', decimal: '6', symbol: 'FNC/USD' },
    label: 'FNC/USD, FinCoin US Dollar'
  },
  {
    value: { id: '8212', name: 'FOIN Bitcoin', decimal: '8', symbol: 'FOIN/BTC' },
    label: 'FOIN/BTC, FOIN Bitcoin'
  },
  {
    value: { id: '8213', name: 'Fonziecoin Bitcoin', decimal: '8', symbol: 'FONZ/BTC' },
    label: 'FONZ/BTC, Fonziecoin Bitcoin'
  },
  {
    value: { id: '8214', name: 'Francs Bitcoin', decimal: '8', symbol: 'FRN/BTC' },
    label: 'FRN/BTC, Francs Bitcoin'
  },
  {
    value: { id: '8215', name: 'FirstCoin Bitcoin', decimal: '7', symbol: 'FRST/BTC' },
    label: 'FRST/BTC, FirstCoin Bitcoin'
  },
  {
    value: { id: '8216', name: 'FirstCoin Ethereum', decimal: '6', symbol: 'FRST/ETH' },
    label: 'FRST/ETH, FirstCoin Ethereum'
  },
  {
    value: { id: '8217', name: 'Fusion Binance Coin', decimal: '6', symbol: 'FSN/BNB' },
    label: 'FSN/BNB, Fusion Binance Coin'
  },
  {
    value: { id: '8218', name: 'Fantom Binance Coin', decimal: '6', symbol: 'FTM/BNB' },
    label: 'FTM/BNB, Fantom Binance Coin'
  },
  {
    value: { id: '8219', name: 'Fantom Bitcoin', decimal: '8', symbol: 'FTM/BTC' },
    label: 'FTM/BTC, Fantom Bitcoin'
  },
  {
    value: { id: '8220', name: 'Fantom Ethereum', decimal: '8', symbol: 'FTM/ETH' },
    label: 'FTM/ETH, Fantom Ethereum'
  },
  {
    value: { id: '8221', name: 'Fantom US Dollar', decimal: '6', symbol: 'FTM/USD' },
    label: 'FTM/USD, Fantom US Dollar'
  },
  {
    value: { id: '8222', name: 'FTX Token Bitcoin', decimal: '8', symbol: 'FTT/BTC' },
    label: 'FTT/BTC, FTX Token Bitcoin'
  },
  {
    value: { id: '8223', name: 'Etherparty Ethereum', decimal: '8', symbol: 'FUEL/ETH' },
    label: 'FUEL/ETH, Etherparty Ethereum'
  },
  {
    value: { id: '8224', name: 'FunFair Turkish Lira', decimal: '4', symbol: 'FUN/TRY' },
    label: 'FUN/TRY, FunFair Turkish Lira'
  },
  {
    value: { id: '8225', name: 'FunFair US Dollar', decimal: '6', symbol: 'FUN/USD' },
    label: 'FUN/USD, FunFair US Dollar'
  },
  {
    value: { id: '8226', name: 'FuzzBalls Bitcoin', decimal: '8', symbol: 'FUZZ/BTC' },
    label: 'FUZZ/BTC, FuzzBalls Bitcoin'
  },
  {
    value: { id: '8227', name: 'Function X Bitcoin', decimal: '8', symbol: 'FX/BTC' },
    label: 'FX/BTC, Function X Bitcoin'
  },
  {
    value: { id: '8228', name: 'Function X Ethereum', decimal: '8', symbol: 'FX/ETH' },
    label: 'FX/ETH, Function X Ethereum'
  },
  {
    value: { id: '8229', name: 'Function X US Dollar', decimal: '6', symbol: 'FX/USD' },
    label: 'FX/USD, Function X US Dollar'
  },
  {
    value: { id: '8230', name: 'Flexacoin Ethereum', decimal: '8', symbol: 'FXC/ETH' },
    label: 'FXC/ETH, Flexacoin Ethereum'
  },
  {
    value: { id: '8231', name: 'Flexacoin US Dollar', decimal: '6', symbol: 'FXC/USD' },
    label: 'FXC/USD, Flexacoin US Dollar'
  },
  {
    value: { id: '8232', name: 'FlypMe Bitcoin', decimal: '8', symbol: 'FYP/BTC' },
    label: 'FYP/BTC, FlypMe Bitcoin'
  },
  {
    value: { id: '8233', name: 'Gas Ethereum', decimal: '6', symbol: 'GAS/ETH' },
    label: 'GAS/ETH, Gas Ethereum'
  },
  {
    value: { id: '8234', name: 'GoldBlocks Bitcoin', decimal: '8', symbol: 'GB/BTC' },
    label: 'GB/BTC, GoldBlocks Bitcoin'
  },
  {
    value: { id: '8235', name: 'GoByte Bitcoin', decimal: '8', symbol: 'GBX/BTC' },
    label: 'GBX/BTC, GoByte Bitcoin'
  },
  {
    value: { id: '8236', name: 'GCN Coin Dogecoin', decimal: '6', symbol: 'GCN/DOGE' },
    label: 'GCN/DOGE, GCN Coin Dogecoin'
  },
  {
    value: { id: '8237', name: 'Global Currency Reserve Bitcoin', decimal: '8', symbol: 'GCR/BTC' },
    label: 'GCR/BTC, Global Currency Reserve Bitcoin'
  },
  {
    value: { id: '8238', name: 'GeertCoin Bitcoin', decimal: '8', symbol: 'GEERT/BTC' },
    label: 'GEERT/BTC, GeertCoin Bitcoin'
  },
  {
    value: { id: '8239', name: 'GINcoin Ethereum', decimal: '8', symbol: 'GIN/ETH' },
    label: 'GIN/ETH, GINcoin Ethereum'
  },
  {
    value: { id: '8240', name: 'Goldcoin Bitcoin', decimal: '8', symbol: 'GLC/BTC' },
    label: 'GLC/BTC, Goldcoin Bitcoin'
  },
  {
    value: { id: '8241', name: 'Golem US Dollar', decimal: '5', symbol: 'GLM/USD' },
    label: 'GLM/USD, Golem US Dollar'
  },
  {
    value: { id: '8242', name: 'GlobalToken Bitcoin', decimal: '8', symbol: 'GLT/BTC' },
    label: 'GLT/BTC, GlobalToken Bitcoin'
  },
  {
    value: { id: '8243', name: 'Gnosis Ethereum', decimal: '5', symbol: 'GNO/ETH' },
    label: 'GNO/ETH, Gnosis Ethereum'
  },
  {
    value: { id: '8244', name: 'Gnosis Euro', decimal: '2', symbol: 'GNO/EUR' },
    label: 'GNO/EUR, Gnosis Euro'
  },
  {
    value: { id: '8245', name: 'Gnosis US Dollar', decimal: '2', symbol: 'GNO/USD' },
    label: 'GNO/USD, Gnosis US Dollar'
  },
  {
    value: { id: '8246', name: 'GoChain US Dollar', decimal: '6', symbol: 'GO/USD' },
    label: 'GO/USD, GoChain US Dollar'
  },
  {
    value: { id: '8247', name: 'GoNetwork Bitcoin', decimal: '8', symbol: 'GOT/BTC' },
    label: 'GOT/BTC, GoNetwork Bitcoin'
  },
  {
    value: { id: '8248', name: 'GoldPieces Bitcoin', decimal: '8', symbol: 'GP/BTC' },
    label: 'GP/BTC, GoldPieces Bitcoin'
  },
  {
    value: { id: '8249', name: 'GPU Coin Bitcoin', decimal: '8', symbol: 'GPU/BTC' },
    label: 'GPU/BTC, GPU Coin Bitcoin'
  },
  {
    value: { id: '8250', name: 'GridCoin Bitcoin', decimal: '8', symbol: 'GRC/BTC' },
    label: 'GRC/BTC, GridCoin Bitcoin'
  },
  {
    value: { id: '8251', name: 'GridCoin US Dollar', decimal: '6', symbol: 'GRC/USD' },
    label: 'GRC/USD, GridCoin US Dollar'
  },
  {
    value: { id: '8252', name: 'Groestlcoin Ethereum', decimal: '6', symbol: 'GRS/ETH' },
    label: 'GRS/ETH, Groestlcoin Ethereum'
  },
  {
    value: { id: '8253', name: 'The Graph Bitcoin', decimal: '8', symbol: 'GRT/BTC' },
    label: 'GRT/BTC, The Graph Bitcoin'
  },
  {
    value: { id: '8254', name: 'The Graph US Dollar', decimal: '5', symbol: 'GRT/USD' },
    label: 'GRT/USD, The Graph US Dollar'
  },
  {
    value: { id: '8255', name: 'Gravium Bitcoin', decimal: '8', symbol: 'GRV/BTC' },
    label: 'GRV/BTC, Gravium Bitcoin'
  },
  {
    value: { id: '8256', name: 'Gravium US Dollar', decimal: '6', symbol: 'GRV/USD' },
    label: 'GRV/USD, Gravium US Dollar'
  },
  {
    value: { id: '8257', name: 'Global Tour Coin Bitcoin', decimal: '8', symbol: 'GTC/BTC' },
    label: 'GTC/BTC, Global Tour Coin Bitcoin'
  },
  {
    value: { id: '8258', name: 'Global Tour Coin US Dollar', decimal: '6', symbol: 'GTC/USD' },
    label: 'GTC/USD, Global Tour Coin US Dollar'
  },
  {
    value: { id: '8259', name: 'Gifto Ethereum', decimal: '6', symbol: 'GTO/ETH' },
    label: 'GTO/ETH, Gifto Ethereum'
  },
  {
    value: { id: '8260', name: 'Guncoin Bitcoin', decimal: '8', symbol: 'GUN/BTC' },
    label: 'GUN/BTC, Guncoin Bitcoin'
  },
  {
    value: { id: '8261', name: 'Matchpool US Dollar', decimal: '6', symbol: 'GUP/USD' },
    label: 'GUP/USD, Matchpool US Dollar'
  },
  {
    value: { id: '8262', name: 'Gemini Dollar US Dollar', decimal: '4', symbol: 'GUSD/USD' },
    label: 'GUSD/USD, Gemini Dollar US Dollar'
  },
  {
    value: { id: '8263', name: 'Genesis Vision Ethereum', decimal: '6', symbol: 'GVT/ETH' },
    label: 'GVT/ETH, Genesis Vision Ethereum'
  },
  {
    value: { id: '8264', name: 'Hackspace Capital Bitcoin', decimal: '8', symbol: 'HAC/BTC' },
    label: 'HAC/BTC, Hackspace Capital Bitcoin'
  },
  {
    value: { id: '8265', name: 'Halloween Coin Waves', decimal: '8', symbol: 'HALLO/WAVES' },
    label: 'HALLO/WAVES, Halloween Coin Waves'
  },
  {
    value: { id: '8266', name: 'Hedera Hashgraph Binance Coin', decimal: '6', symbol: 'HBAR/BNB' },
    label: 'HBAR/BNB, Hedera Hashgraph Binance Coin'
  },
  {
    value: { id: '8267', name: 'Hedera Hashgraph Bitcoin', decimal: '8', symbol: 'HBAR/BTC' },
    label: 'HBAR/BTC, Hedera Hashgraph Bitcoin'
  },
  {
    value: { id: '8268', name: 'Hedera Hashgraph Korean Won', decimal: '2', symbol: 'HBAR/KRW' },
    label: 'HBAR/KRW, Hedera Hashgraph Korean Won'
  },
  {
    value: { id: '8269', name: 'HyperCash Ethereum', decimal: '6', symbol: 'HCA/ETH' },
    label: 'HCA/ETH, HyperCash Ethereum'
  },
  {
    value: { id: '8270', name: 'Hedge Ethereum', decimal: '6', symbol: 'HDG/ETH' },
    label: 'HDG/ETH, Hedge Ethereum'
  },
  {
    value: { id: '8271', name: 'Helpico Bitcoin', decimal: '8', symbol: 'HELP/BTC' },
    label: 'HELP/BTC, Helpico Bitcoin'
  },
  {
    value: { id: '8272', name: 'Helpico US Dollar', decimal: '6', symbol: 'HELP/USD' },
    label: 'HELP/USD, Helpico US Dollar'
  },
  {
    value: { id: '8273', name: 'HeroNode Ethereum', decimal: '8', symbol: 'HER/ETH' },
    label: 'HER/ETH, HeroNode Ethereum'
  },
  {
    value: { id: '8274', name: 'HelloGold Bitcoin', decimal: '8', symbol: 'HGT/BTC' },
    label: 'HGT/BTC, HelloGold Bitcoin'
  },
  {
    value: { id: '8275', name: 'HelloGold Ethereum', decimal: '8', symbol: 'HGT/ETH' },
    label: 'HGT/ETH, HelloGold Ethereum'
  },
  {
    value: { id: '8276', name: 'Humaniq Ethereum', decimal: '8', symbol: 'HMQ/ETH' },
    label: 'HMQ/ETH, Humaniq Ethereum'
  },
  {
    value: { id: '8277', name: 'Hellenic Coin Bitcoin', decimal: '8', symbol: 'HNC/BTC' },
    label: 'HNC/BTC, Hellenic Coin Bitcoin'
  },
  {
    value: { id: '8278', name: 'Hellenic Coin US Dollar', decimal: '6', symbol: 'HNC/USD' },
    label: 'HNC/USD, Hellenic Coin US Dollar'
  },
  {
    value: { id: '8279', name: 'HOdlcoin Waves', decimal: '6', symbol: 'HODL/WAVES' },
    label: 'HODL/WAVES, HOdlcoin Waves'
  },
  {
    value: { id: '8280', name: 'Holo XRP', decimal: '6', symbol: 'HOT/XRP' },
    label: 'HOT/XRP, Holo XRP'
  },
  {
    value: { id: '8281', name: 'Decision Token Bitcoin', decimal: '8', symbol: 'HST/BTC' },
    label: 'HST/BTC, Decision Token Bitcoin'
  },
  {
    value: { id: '8282', name: 'Decision Token US Dollar', decimal: '5', symbol: 'HST/USD' },
    label: 'HST/USD, Decision Token US Dollar'
  },
  {
    value: { id: '8283', name: 'Hexx Bitcoin', decimal: '7', symbol: 'HXX/BTC' },
    label: 'HXX/BTC, Hexx Bitcoin'
  },
  {
    value: { id: '8284', name: 'HyperStake Bitcoin', decimal: '8', symbol: 'HYP/BTC' },
    label: 'HYP/BTC, HyperStake Bitcoin'
  },
  {
    value: { id: '8285', name: 'iBTC Ethereum', decimal: '8', symbol: 'IBTC/ETH' },
    label: 'IBTC/ETH, iBTC Ethereum'
  },
  {
    value: { id: '8286', name: 'ICOBID Bitcoin', decimal: '8', symbol: 'ICOB/BTC' },
    label: 'ICOB/BTC, ICOBID Bitcoin'
  },
  {
    value: { id: '8287', name: 'ICOS US Dollar', decimal: '4', symbol: 'ICOS/USD' },
    label: 'ICOS/USD, ICOS US Dollar'
  },
  {
    value: { id: '8288', name: 'iEthereum Ethereum', decimal: '8', symbol: 'IETH/ETH' },
    label: 'IETH/ETH, iEthereum Ethereum'
  },
  {
    value: { id: '8289', name: 'InvestFeed Bitcoin', decimal: '8', symbol: 'IFT/BTC' },
    label: 'IFT/BTC, InvestFeed Bitcoin'
  },
  {
    value: {
      id: '8290',
      name: 'Independent Money System Bitcoin',
      decimal: '8',
      symbol: 'IMS/BTC'
    },
    label: 'IMS/BTC, Independent Money System Bitcoin'
  },
  {
    value: { id: '8291', name: 'Indorse Token Ethereum', decimal: '6', symbol: 'IND/ETH' },
    label: 'IND/ETH, Indorse Token Ethereum'
  },
  {
    value: { id: '8292', name: 'Indorse Token US Dollar', decimal: '6', symbol: 'IND/USD' },
    label: 'IND/USD, Indorse Token US Dollar'
  },
  {
    value: { id: '8293', name: 'Influxcoin Bitcoin', decimal: '8', symbol: 'INFX/BTC' },
    label: 'INFX/BTC, Influxcoin Bitcoin'
  },
  {
    value: { id: '8294', name: 'Innova Bitcoin', decimal: '8', symbol: 'INN/BTC' },
    label: 'INN/BTC, Innova Bitcoin'
  },
  {
    value: { id: '8295', name: 'InsaneCoin Bitcoin', decimal: '8', symbol: 'INSN/BTC' },
    label: 'INSN/BTC, InsaneCoin Bitcoin'
  },
  {
    value: { id: '8296', name: 'Internxt Bitcoin', decimal: '6', symbol: 'INXT/BTC' },
    label: 'INXT/BTC, Internxt Bitcoin'
  },
  {
    value: { id: '8297', name: 'Internet of People Bitcoin', decimal: '8', symbol: 'IOP/BTC' },
    label: 'IOP/BTC, Internet of People Bitcoin'
  },
  {
    value: { id: '8298', name: 'Tachyon Protocol Bitcoin', decimal: '8', symbol: 'IPX/BTC' },
    label: 'IPX/BTC, Tachyon Protocol Bitcoin'
  },
  {
    value: { id: '8299', name: 'Tachyon Protocol Korean Won', decimal: '2', symbol: 'IPX/KRW' },
    label: 'IPX/KRW, Tachyon Protocol Korean Won'
  },
  {
    value: { id: '8300', name: 'Tachyon Protocol US Dollar', decimal: '6', symbol: 'IPX/USD' },
    label: 'IPX/USD, Tachyon Protocol US Dollar'
  },
  {
    value: { id: '8301', name: 'IQeon Bitcoin', decimal: '7', symbol: 'IQN/BTC' },
    label: 'IQN/BTC, IQeon Bitcoin'
  },
  {
    value: { id: '8302', name: 'IQeon Ethereum', decimal: '7', symbol: 'IQN/ETH' },
    label: 'IQN/ETH, IQeon Ethereum'
  },
  {
    value: { id: '8303', name: 'IQeon US Dollar', decimal: '6', symbol: 'IQN/USD' },
    label: 'IQN/USD, IQeon US Dollar'
  },
  {
    value: { id: '8304', name: 'imbrex Bitcoin', decimal: '8', symbol: 'IREX/BTC' },
    label: 'IREX/BTC, imbrex Bitcoin'
  },
  {
    value: { id: '8305', name: 'imbrex Ethereum', decimal: '8', symbol: 'IREX/ETH' },
    label: 'IREX/ETH, imbrex Ethereum'
  },
  {
    value: { id: '8306', name: 'IRISnet Bitcoin', decimal: '8', symbol: 'IRIS/BTC' },
    label: 'IRIS/BTC, IRISnet Bitcoin'
  },
  {
    value: { id: '8307', name: 'IRISnet US Dollar', decimal: '6', symbol: 'IRIS/USD' },
    label: 'IRIS/USD, IRISnet US Dollar'
  },
  {
    value: { id: '8308', name: 'IrishCoin Bitcoin', decimal: '8', symbol: 'IRL/BTC' },
    label: 'IRL/BTC, IrishCoin Bitcoin'
  },
  {
    value: { id: '8309', name: 'IoT Chain Ethereum', decimal: '6', symbol: 'ITC/ETH' },
    label: 'ITC/ETH, IoT Chain Ethereum'
  },
  {
    value: { id: '8310', name: 'iTicoin Bitcoin', decimal: '6', symbol: 'ITI/BTC' },
    label: 'ITI/BTC, iTicoin Bitcoin'
  },
  {
    value: { id: '8311', name: 'Ivy Ethereum', decimal: '7', symbol: 'IVY/ETH' },
    label: 'IVY/ETH, Ivy Ethereum'
  },
  {
    value: { id: '8312', name: 'Ixcoin Bitcoin', decimal: '8', symbol: 'IXC/BTC' },
    label: 'IXC/BTC, Ixcoin Bitcoin'
  },
  {
    value: { id: '8313', name: 'IXT Bitcoin', decimal: '7', symbol: 'IXT/BTC' },
    label: 'IXT/BTC, IXT Bitcoin'
  },
  {
    value: { id: '8314', name: 'IXT Ethereum', decimal: '8', symbol: 'IXT/ETH' },
    label: 'IXT/ETH, IXT Ethereum'
  },
  {
    value: { id: '8315', name: 'CoinJanitor Bitcoin', decimal: '8', symbol: 'JAN/BTC' },
    label: 'JAN/BTC, CoinJanitor Bitcoin'
  },
  {
    value: { id: '8316', name: 'CoinJanitor US Dollar', decimal: '6', symbol: 'JAN/USD' },
    label: 'JAN/USD, CoinJanitor US Dollar'
  },
  {
    value: { id: '8317', name: 'Jetcoin Bitcoin', decimal: '8', symbol: 'JET/BTC' },
    label: 'JET/BTC, Jetcoin Bitcoin'
  },
  {
    value: { id: '8318', name: 'Jibrel Network Bitcoin', decimal: '8', symbol: 'JNT/BTC' },
    label: 'JNT/BTC, Jibrel Network Bitcoin'
  },
  {
    value: { id: '8319', name: 'Jibrel Network Ethereum', decimal: '6', symbol: 'JNT/ETH' },
    label: 'JNT/ETH, Jibrel Network Ethereum'
  },
  {
    value: { id: '8320', name: 'JobsCoin Ethereum', decimal: '8', symbol: 'JOBS/ETH' },
    label: 'JOBS/ETH, JobsCoin Ethereum'
  },
  {
    value: { id: '8321', name: 'JavaScript Token Bitcoin', decimal: '8', symbol: 'JS/BTC' },
    label: 'JS/BTC, JavaScript Token Bitcoin'
  },
  {
    value: { id: '8322', name: 'Kala US Dollar', decimal: '5', symbol: 'KALA/USD' },
    label: 'KALA/USD, Kala US Dollar'
  },
  {
    value: { id: '8323', name: 'Kava.io Binance Coin', decimal: '5', symbol: 'KAVA/BNB' },
    label: 'KAVA/BNB, Kava.io Binance Coin'
  },
  {
    value: { id: '8324', name: 'Kava.io Bitcoin', decimal: '8', symbol: 'KAVA/BTC' },
    label: 'KAVA/BTC, Kava.io Bitcoin'
  },
  {
    value: { id: '8325', name: 'Kava.io US Dollar', decimal: '4', symbol: 'KAVA/USD' },
    label: 'KAVA/USD, Kava.io US Dollar'
  },
  {
    value: { id: '8326', name: 'Karatgold Coin Bitcoin', decimal: '8', symbol: 'KBC/BTC' },
    label: 'KBC/BTC, Karatgold Coin Bitcoin'
  },
  {
    value: { id: '8327', name: 'Karatgold Coin Ethereum', decimal: '6', symbol: 'KBC/ETH' },
    label: 'KBC/ETH, Karatgold Coin Ethereum'
  },
  {
    value: { id: '8328', name: 'KekCoin Bitcoin', decimal: '8', symbol: 'KEK/BTC' },
    label: 'KEK/BTC, KekCoin Bitcoin'
  },
  {
    value: { id: '8329', name: 'Selfkey Bitcoin', decimal: '8', symbol: 'KEY/BTC' },
    label: 'KEY/BTC, Selfkey Bitcoin'
  },
  {
    value: { id: '8330', name: 'Selfkey US Dollar', decimal: '6', symbol: 'KEY/USD' },
    label: 'KEY/USD, Selfkey US Dollar'
  },
  {
    value: { id: '8331', name: 'KickToken US Dollar', decimal: '6', symbol: 'KICK/USD' },
    label: 'KICK/USD, KickToken US Dollar'
  },
  {
    value: { id: '8332', name: 'Kin Chinese Yuan', decimal: '5', symbol: 'KIN/CNY' },
    label: 'KIN/CNY, Kin Chinese Yuan'
  },
  {
    value: { id: '8333', name: 'Kin Ethereum', decimal: '8', symbol: 'KIN/ETH' },
    label: 'KIN/ETH, Kin Ethereum'
  },
  {
    value: { id: '8334', name: 'Kin US Dollar', decimal: '6', symbol: 'KIN/USD' },
    label: 'KIN/USD, Kin US Dollar'
  },
  {
    value: { id: '8335', name: 'Komodo Bitcoin Cash', decimal: '6', symbol: 'KMD/BCH' },
    label: 'KMD/BCH, Komodo Bitcoin Cash'
  },
  {
    value: { id: '8336', name: 'Komodo Bitcoin', decimal: '6', symbol: 'KMD/BTC' },
    label: 'KMD/BTC, Komodo Bitcoin'
  },
  {
    value: { id: '8337', name: 'Kobocoin Bitcoin', decimal: '8', symbol: 'KOBO/BTC' },
    label: 'KOBO/BTC, Kobocoin Bitcoin'
  },
  {
    value: { id: '8338', name: 'Kore Bitcoin', decimal: '8', symbol: 'KORE/BTC' },
    label: 'KORE/BTC, Kore Bitcoin'
  },
  {
    value: { id: '8339', name: 'Kusama Bitcoin', decimal: '6', symbol: 'KSM/BTC' },
    label: 'KSM/BTC, Kusama Bitcoin'
  },
  {
    value: { id: '8340', name: 'Kusama US Dollar', decimal: '4', symbol: 'KSM/USD' },
    label: 'KSM/USD, Kusama US Dollar'
  },
  {
    value: { id: '8341', name: 'Kurrent Bitcoin', decimal: '8', symbol: 'KURT/BTC' },
    label: 'KURT/BTC, Kurrent Bitcoin'
  },
  {
    value: { id: '8342', name: 'KushCoin Bitcoin', decimal: '8', symbol: 'KUSH/BTC' },
    label: 'KUSH/BTC, KushCoin Bitcoin'
  },
  {
    value: { id: '8343', name: 'LATOKEN Bitcoin', decimal: '8', symbol: 'LA/BTC' },
    label: 'LA/BTC, LATOKEN Bitcoin'
  },
  {
    value: { id: '8344', name: 'LanaCoin Bitcoin', decimal: '8', symbol: 'LANA/BTC' },
    label: 'LANA/BTC, LanaCoin Bitcoin'
  },
  {
    value: { id: '8345', name: 'LiteBitcoin Bitcoin', decimal: '8', symbol: 'LBTCX/BTC' },
    label: 'LBTCX/BTC, LiteBitcoin Bitcoin'
  },
  {
    value: { id: '8346', name: 'Litecoin Plus Bitcoin', decimal: '8', symbol: 'LCP/BTC' },
    label: 'LCP/BTC, Litecoin Plus Bitcoin'
  },
  {
    value: { id: '8347', name: 'Leadcoin Bancor', decimal: '8', symbol: 'LDC/BNT' },
    label: 'LDC/BNT, Leadcoin Bancor'
  },
  {
    value: { id: '8348', name: 'Leadcoin US Dollar', decimal: '6', symbol: 'LDC/USD' },
    label: 'LDC/USD, Leadcoin US Dollar'
  },
  {
    value: { id: '8349', name: 'LGO Token Ethereum', decimal: '8', symbol: 'LGO/ETH' },
    label: 'LGO/ETH, LGO Token Ethereum'
  },
  {
    value: { id: '8350', name: 'Linda Bitcoin', decimal: '8', symbol: 'LINDA/BTC' },
    label: 'LINDA/BTC, Linda Bitcoin'
  },
  {
    value: { id: '8351', name: 'Chainlink Euro', decimal: '4', symbol: 'LINK/EUR' },
    label: 'LINK/EUR, Chainlink Euro'
  },
  {
    value: { id: '8352', name: 'Chainlink Turkish Lira', decimal: '2', symbol: 'LINK/TRY' },
    label: 'LINK/TRY, Chainlink Turkish Lira'
  },
  {
    value: { id: '8353', name: 'Chainlink XRP', decimal: '4', symbol: 'LINK/XRP' },
    label: 'LINK/XRP, Chainlink XRP'
  },
  {
    value: { id: '8354', name: 'Linx Bitcoin', decimal: '8', symbol: 'LINX/BTC' },
    label: 'LINX/BTC, Linx Bitcoin'
  },
  {
    value: { id: '8355', name: 'LKRCoin Bitcoin', decimal: '8', symbol: 'LKRc/BTC' },
    label: 'LKRc/BTC, LKRCoin Bitcoin'
  },
  {
    value: { id: '8356', name: 'LKRCoin US Dollar', decimal: '6', symbol: 'LKRc/USD' },
    label: 'LKRc/USD, LKRCoin US Dollar'
  },
  {
    value: { id: '8357', name: 'LNX Protocol US Dollar', decimal: '4', symbol: 'LNX/USD' },
    label: 'LNX/USD, LNX Protocol US Dollar'
  },
  {
    value: { id: '8358', name: 'Loki Bitcoin', decimal: '8', symbol: 'LOKI/BTC' },
    label: 'LOKI/BTC, Loki Bitcoin'
  },
  {
    value: { id: '8359', name: 'Loki Ethereum', decimal: '8', symbol: 'LOKI/ETH' },
    label: 'LOKI/ETH, Loki Ethereum'
  },
  {
    value: { id: '8360', name: 'Loki US Dollar', decimal: '6', symbol: 'LOKI/USD' },
    label: 'LOKI/USD, Loki US Dollar'
  },
  {
    value: { id: '8361', name: 'Loom Network Korean Won', decimal: '2', symbol: 'LOOM/KRW' },
    label: 'LOOM/KRW, Loom Network Korean Won'
  },
  {
    value: { id: '8362', name: 'Lightpaycoin Bitcoin', decimal: '8', symbol: 'LPC/BTC' },
    label: 'LPC/BTC, Lightpaycoin Bitcoin'
  },
  {
    value: { id: '8363', name: 'Loopring Korean Won', decimal: '0', symbol: 'LRC/KRW' },
    label: 'LRC/KRW, Loopring Korean Won'
  },
  {
    value: { id: '8364', name: 'Lisk Ethereum', decimal: '6', symbol: 'LSK/ETH' },
    label: 'LSK/ETH, Lisk Ethereum'
  },
  {
    value: { id: '8365', name: 'LiteBar Bitcoin', decimal: '8', symbol: 'LTB/BTC' },
    label: 'LTB/BTC, LiteBar Bitcoin'
  },
  {
    value: { id: '8366', name: 'Litecoin Nigerian Naira', decimal: '0', symbol: 'LTC/NGN' },
    label: 'LTC/NGN, Litecoin Nigerian Naira'
  },
  {
    value: { id: '8367', name: 'Litecoin Thai Baht', decimal: '2', symbol: 'LTC/THB' },
    label: 'LTC/THB, Litecoin Thai Baht'
  },
  {
    value: { id: '8368', name: 'LiteCoin Ultra Bitcoin', decimal: '8', symbol: 'LTCU/BTC' },
    label: 'LTCU/BTC, LiteCoin Ultra Bitcoin'
  },
  {
    value: { id: '8369', name: 'Lunyr Bitcoin', decimal: '6', symbol: 'LUN/BTC' },
    label: 'LUN/BTC, Lunyr Bitcoin'
  },
  {
    value: { id: '8370', name: 'Lunyr Ethereum', decimal: '6', symbol: 'LUN/ETH' },
    label: 'LUN/ETH, Lunyr Ethereum'
  },
  {
    value: { id: '8371', name: 'Lunyr US Dollar', decimal: '4', symbol: 'LUN/USD' },
    label: 'LUN/USD, Lunyr US Dollar'
  },
  {
    value: { id: '8372', name: 'Luna Coin Bitcoin', decimal: '8', symbol: 'LUNA/BTC' },
    label: 'LUNA/BTC, Luna Coin Bitcoin'
  },
  {
    value: { id: '8373', name: 'LUXCoin Bitcoin', decimal: '8', symbol: 'LUX/BTC' },
    label: 'LUX/BTC, LUXCoin Bitcoin'
  },
  {
    value: { id: '8374', name: 'LoyalCoin Bitcoin', decimal: '8', symbol: 'LYL/BTC' },
    label: 'LYL/BTC, LoyalCoin Bitcoin'
  },
  {
    value: { id: '8375', name: 'Lympo Bitcoin', decimal: '8', symbol: 'LYM/BTC' },
    label: 'LYM/BTC, Lympo Bitcoin'
  },
  {
    value: { id: '8376', name: 'Lympo Ethereum', decimal: '8', symbol: 'LYM/ETH' },
    label: 'LYM/ETH, Lympo Ethereum'
  },
  {
    value: { id: '8377', name: 'Matrix AI Network Bitcoin', decimal: '8', symbol: 'MAN/BTC' },
    label: 'MAN/BTC, Matrix AI Network Bitcoin'
  },
  {
    value: { id: '8378', name: 'Matrix AI Network Ethereum', decimal: '6', symbol: 'MAN/ETH' },
    label: 'MAN/ETH, Matrix AI Network Ethereum'
  },
  {
    value: { id: '8379', name: 'Decentraland US Dollar', decimal: '4', symbol: 'MANA/USD' },
    label: 'MANA/USD, Decentraland US Dollar'
  },
  {
    value: { id: '8380', name: 'Mchain Bitcoin', decimal: '8', symbol: 'MARc/BTC' },
    label: 'MARc/BTC, Mchain Bitcoin'
  },
  {
    value: { id: '8381', name: 'Mchain Ethereum', decimal: '8', symbol: 'MARc/ETH' },
    label: 'MARc/ETH, Mchain Ethereum'
  },
  {
    value: { id: '8382', name: 'Mchain US Dollar', decimal: '6', symbol: 'MARc/USD' },
    label: 'MARc/USD, Mchain US Dollar'
  },
  {
    value: { id: '8383', name: 'Marscoin Bitcoin', decimal: '8', symbol: 'MARS/BTC' },
    label: 'MARS/BTC, Marscoin Bitcoin'
  },
  {
    value: { id: '8384', name: 'MarxCoin Bitcoin', decimal: '8', symbol: 'MARX/BTC' },
    label: 'MARX/BTC, MarxCoin Bitcoin'
  },
  {
    value: { id: '8385', name: 'Matic Network Binance Coin', decimal: '6', symbol: 'MATIC/BNB' },
    label: 'MATIC/BNB, Matic Network Binance Coin'
  },
  {
    value: { id: '8386', name: 'Matic Network Bitcoin', decimal: '8', symbol: 'MATIC/BTC' },
    label: 'MATIC/BTC, Matic Network Bitcoin'
  },
  {
    value: { id: '8387', name: 'Matic Network US Dollar', decimal: '5', symbol: 'MATIC/USD' },
    label: 'MATIC/USD, Matic Network US Dollar'
  },
  {
    value: { id: '8388', name: 'MCO Bitcoin', decimal: '6', symbol: 'MCO/BTC' },
    label: 'MCO/BTC, MCO Bitcoin'
  },
  {
    value: { id: '8389', name: 'MCO Ethereum', decimal: '6', symbol: 'MCO/ETH' },
    label: 'MCO/ETH, MCO Ethereum'
  },
  {
    value: { id: '8390', name: 'MCO US Dollar', decimal: '4', symbol: 'MCO/USD' },
    label: 'MCO/USD, MCO US Dollar'
  },
  {
    value: { id: '8391', name: 'Macro Bitcoin', decimal: '8', symbol: 'MCR/BTC' },
    label: 'MCR/BTC, Macro Bitcoin'
  },
  {
    value: { id: '8392', name: 'Moeda Loyalty Points Ethereum', decimal: '6', symbol: 'MDA/ETH' },
    label: 'MDA/ETH, Moeda Loyalty Points Ethereum'
  },
  {
    value: { id: '8393', name: 'Megacoin Bitcoin', decimal: '8', symbol: 'MEC/BTC' },
    label: 'MEC/BTC, Megacoin Bitcoin'
  },
  {
    value: { id: '8394', name: 'MediBloc [ERC20] US Dollar', decimal: '6', symbol: 'MEDX/USD' },
    label: 'MEDX/USD, MediBloc [ERC20] US Dollar'
  },
  {
    value: { id: '8395', name: 'Metronome Bitcoin', decimal: '8', symbol: 'MET/BTC' },
    label: 'MET/BTC, Metronome Bitcoin'
  },
  {
    value: { id: '8396', name: 'MEXC Token Bitcoin', decimal: '8', symbol: 'MEXC/BTC' },
    label: 'MEXC/BTC, MEXC Token Bitcoin'
  },
  {
    value: { id: '8397', name: 'MEXC Token US Dollar', decimal: '6', symbol: 'MEXC/USD' },
    label: 'MEXC/USD, MEXC Token US Dollar'
  },
  {
    value: { id: '8398', name: 'Mainframe Bitcoin', decimal: '8', symbol: 'MFT/BTC' },
    label: 'MFT/BTC, Mainframe Bitcoin'
  },
  {
    value: { id: '8399', name: 'Mainframe Korean Won', decimal: '2', symbol: 'MFT/KRW' },
    label: 'MFT/KRW, Mainframe Korean Won'
  },
  {
    value: { id: '8400', name: 'MobileGo US Dollar', decimal: '5', symbol: 'MGO/USD' },
    label: 'MGO/USD, MobileGo US Dollar'
  },
  {
    value: { id: '8401', name: '#MetaHash Bitcoin', decimal: '8', symbol: 'MHC/BTC' },
    label: 'MHC/BTC, #MetaHash Bitcoin'
  },
  {
    value: { id: '8402', name: '#MetaHash Ethereum', decimal: '8', symbol: 'MHC/ETH' },
    label: 'MHC/ETH, #MetaHash Ethereum'
  },
  {
    value: { id: '8403', name: '#MetaHash Euro', decimal: '4', symbol: 'MHC/EUR' },
    label: 'MHC/EUR, #MetaHash Euro'
  },
  {
    value: { id: '8404', name: '#MetaHash British Pound', decimal: '4', symbol: 'MHC/GBP' },
    label: 'MHC/GBP, #MetaHash British Pound'
  },
  {
    value: { id: '8405', name: '#MetaHash US Dollar', decimal: '6', symbol: 'MHC/USD' },
    label: 'MHC/USD, #MetaHash US Dollar'
  },
  {
    value: { id: '8406', name: 'Mindexcoin Bitcoin', decimal: '8', symbol: 'MIC/BTC' },
    label: 'MIC/BTC, Mindexcoin Bitcoin'
  },
  {
    value: { id: '8407', name: 'MINDOL Bitcoin', decimal: '6', symbol: 'MIN/BTC' },
    label: 'MIN/BTC, MINDOL Bitcoin'
  },
  {
    value: { id: '8408', name: 'MINDOL US Dollar', decimal: '2', symbol: 'MIN/USD' },
    label: 'MIN/USD, MINDOL US Dollar'
  },
  {
    value: { id: '8409', name: 'Minex Bitcoin', decimal: '8', symbol: 'MINEX/BTC' },
    label: 'MINEX/BTC, Minex Bitcoin'
  },
  {
    value: { id: '8410', name: 'MintCoin Bitcoin', decimal: '8', symbol: 'MINT/BTC' },
    label: 'MINT/BTC, MintCoin Bitcoin'
  },
  {
    value: { id: '8411', name: 'MintMe.com Coin Bitcoin', decimal: '8', symbol: 'MINTME/BTC' },
    label: 'MINTME/BTC, MintMe.com Coin Bitcoin'
  },
  {
    value: { id: '8412', name: 'MintMe.com Coin US Dollar', decimal: '6', symbol: 'MINTME/USD' },
    label: 'MINTME/USD, MintMe.com Coin US Dollar'
  },
  {
    value: { id: '8413', name: 'Maker Turkish Lira', decimal: '2', symbol: 'MKR/TRY' },
    label: 'MKR/TRY, Maker Turkish Lira'
  },
  {
    value: { id: '8414', name: 'Melon Bitcoin', decimal: '6', symbol: 'MLN/BTC' },
    label: 'MLN/BTC, Melon Bitcoin'
  },
  {
    value: { id: '8415', name: 'Melon Ethereum', decimal: '6', symbol: 'MLN/ETH' },
    label: 'MLN/ETH, Melon Ethereum'
  },
  {
    value: { id: '8416', name: 'Melon US Dollar', decimal: '4', symbol: 'MLN/USD' },
    label: 'MLN/USD, Melon US Dollar'
  },
  {
    value: { id: '8417', name: 'MMOCoin Bitcoin', decimal: '8', symbol: 'MMO/BTC' },
    label: 'MMO/BTC, MMOCoin Bitcoin'
  },
  {
    value: { id: '8418', name: 'MMOCoin Dogecoin', decimal: '3', symbol: 'MMO/DOGE' },
    label: 'MMO/DOGE, MMOCoin Dogecoin'
  },
  {
    value: { id: '8419', name: 'MMOCoin Ethereum', decimal: '8', symbol: 'MMO/ETH' },
    label: 'MMO/ETH, MMOCoin Ethereum'
  },
  {
    value: { id: '8420', name: 'MMOCoin US Dollar', decimal: '5', symbol: 'MMO/USD' },
    label: 'MMO/USD, MMOCoin US Dollar'
  },
  {
    value: { id: '8421', name: 'Mineum Bitcoin', decimal: '8', symbol: 'MNM/BTC' },
    label: 'MNM/BTC, Mineum Bitcoin'
  },
  {
    value: { id: '8422', name: 'MOAC Ethereum', decimal: '6', symbol: 'MOAC/ETH' },
    label: 'MOAC/ETH, MOAC Ethereum'
  },
  {
    value: { id: '8423', name: 'Moin Bitcoin', decimal: '8', symbol: 'MOIN/BTC' },
    label: 'MOIN/BTC, Moin Bitcoin'
  },
  {
    value: { id: '8424', name: 'MojoCoin Bitcoin', decimal: '8', symbol: 'MOJO/BTC' },
    label: 'MOJO/BTC, MojoCoin Bitcoin'
  },
  {
    value: { id: '8425', name: 'Monkey Project Bitcoin', decimal: '8', symbol: 'MONK/BTC' },
    label: 'MONK/BTC, Monkey Project Bitcoin'
  },
  {
    value: { id: '8426', name: 'Mooncoin Litecoin', decimal: '8', symbol: 'MOON/LTC' },
    label: 'MOON/LTC, Mooncoin Litecoin'
  },
  {
    value: { id: '8427', name: 'Motocoin Bitcoin', decimal: '8', symbol: 'MOTO/BTC' },
    label: 'MOTO/BTC, Motocoin Bitcoin'
  },
  {
    value: { id: '8428', name: "Miners' Reward Token Waves", decimal: '6', symbol: 'MRT/WAVES' },
    label: "MRT/WAVES, Miners' Reward Token Waves"
  },
  {
    value: { id: '8429', name: 'Metrix Coin Bitcoin', decimal: '8', symbol: 'MRX/BTC' },
    label: 'MRX/BTC, Metrix Coin Bitcoin'
  },
  {
    value: { id: '8430', name: 'Metrix Coin US Dollar', decimal: '6', symbol: 'MRX/USD' },
    label: 'MRX/USD, Metrix Coin US Dollar'
  },
  {
    value: { id: '8431', name: 'MustangCoin Bitcoin', decimal: '8', symbol: 'MST/BTC' },
    label: 'MST/BTC, MustangCoin Bitcoin'
  },
  {
    value: { id: '8432', name: 'Monetha Bitcoin', decimal: '8', symbol: 'MTH/BTC' },
    label: 'MTH/BTC, Monetha Bitcoin'
  },
  {
    value: { id: '8433', name: 'Monetha Ethereum', decimal: '7', symbol: 'MTH/ETH' },
    label: 'MTH/ETH, Monetha Ethereum'
  },
  {
    value: { id: '8434', name: 'Monetha US Dollar', decimal: '6', symbol: 'MTH/USD' },
    label: 'MTH/USD, Monetha US Dollar'
  },
  {
    value: { id: '8435', name: 'Metal Bitcoin', decimal: '7', symbol: 'MTL/BTC' },
    label: 'MTL/BTC, Metal Bitcoin'
  },
  {
    value: { id: '8436', name: 'Metal Ethereum', decimal: '6', symbol: 'MTL/ETH' },
    label: 'MTL/ETH, Metal Ethereum'
  },
  {
    value: { id: '8437', name: 'Medicalchain Ethereum', decimal: '6', symbol: 'MTN/ETH' },
    label: 'MTN/ETH, Medicalchain Ethereum'
  },
  {
    value: { id: '8438', name: 'MVL Bitcoin', decimal: '8', symbol: 'MVL/BTC' },
    label: 'MVL/BTC, MVL Bitcoin'
  },
  {
    value: { id: '8439', name: 'MVL Korean Won', decimal: '2', symbol: 'MVL/KRW' },
    label: 'MVL/KRW, MVL Korean Won'
  },
  {
    value: { id: '8440', name: 'MarteXcoin Bitcoin', decimal: '8', symbol: 'MXT/BTC' },
    label: 'MXT/BTC, MarteXcoin Bitcoin'
  },
  {
    value: { id: '8441', name: 'Mysterium Bitcoin', decimal: '8', symbol: 'MYST/BTC' },
    label: 'MYST/BTC, Mysterium Bitcoin'
  },
  {
    value: { id: '8442', name: 'Mysterium Ethereum', decimal: '6', symbol: 'MYST/ETH' },
    label: 'MYST/ETH, Mysterium Ethereum'
  },
  {
    value: { id: '8443', name: 'Mysterium US Dollar', decimal: '5', symbol: 'MYST/USD' },
    label: 'MYST/USD, Mysterium US Dollar'
  },
  {
    value: { id: '8444', name: 'NANJCOIN Ethereum', decimal: '8', symbol: 'NANJ/ETH' },
    label: 'NANJ/ETH, NANJCOIN Ethereum'
  },
  {
    value: { id: '8445', name: 'Nano Dogecoin', decimal: '2', symbol: 'NANO/DOGE' },
    label: 'NANO/DOGE, Nano Dogecoin'
  },
  {
    value: { id: '8446', name: 'Nano Euro', decimal: '4', symbol: 'NANO/EUR' },
    label: 'NANO/EUR, Nano Euro'
  },
  {
    value: { id: '8447', name: 'Nano US Dollar', decimal: '4', symbol: 'NANO/USD' },
    label: 'NANO/USD, Nano US Dollar'
  },
  {
    value: { id: '8448', name: 'Nebulas Ethereum', decimal: '6', symbol: 'NAS/ETH' },
    label: 'NAS/ETH, Nebulas Ethereum'
  },
  {
    value: { id: '8449', name: 'NavCoin Bitcoin', decimal: '8', symbol: 'NAV/BTC' },
    label: 'NAV/BTC, NavCoin Bitcoin'
  },
  {
    value: { id: '8450', name: 'NavCoin US Dollar', decimal: '5', symbol: 'NAV/USD' },
    label: 'NAV/USD, NavCoin US Dollar'
  },
  {
    value: { id: '8451', name: 'Nucleus Vision Bitcoin', decimal: '8', symbol: 'NCASH/BTC' },
    label: 'NCASH/BTC, Nucleus Vision Bitcoin'
  },
  {
    value: { id: '8452', name: 'Neblio Ethereum', decimal: '6', symbol: 'NEBL/ETH' },
    label: 'NEBL/ETH, Neblio Ethereum'
  },
  {
    value: { id: '8453', name: 'Neo Bitcoin', decimal: '6', symbol: 'NEO/BTC' },
    label: 'NEO/BTC, Neo Bitcoin'
  },
  {
    value: { id: '8454', name: 'Neo Korean Won', decimal: '2', symbol: 'NEO/KRW' },
    label: 'NEO/KRW, Neo Korean Won'
  },
  {
    value: { id: '8455', name: 'NetCoin Bitcoin', decimal: '8', symbol: 'NET/BTC' },
    label: 'NET/BTC, NetCoin Bitcoin'
  },
  {
    value: { id: '8456', name: 'Netko Bitcoin', decimal: '8', symbol: 'NETKO/BTC' },
    label: 'NETKO/BTC, Netko Bitcoin'
  },
  {
    value: { id: '8457', name: 'NevaCoin Bitcoin', decimal: '8', symbol: 'NEVA/BTC' },
    label: 'NEVA/BTC, NevaCoin Bitcoin'
  },
  {
    value: { id: '8458', name: 'Nexo XRP', decimal: '6', symbol: 'NEXO/XRP' },
    label: 'NEXO/XRP, Nexo XRP'
  },
  {
    value: { id: '8459', name: 'NAGA Ethereum', decimal: '6', symbol: 'NGC/ETH' },
    label: 'NGC/ETH, NAGA Ethereum'
  },
  {
    value: { id: '8460', name: 'Nicash Bitcoin', decimal: '8', symbol: 'NICASH/BTC' },
    label: 'NICASH/BTC, Nicash Bitcoin'
  },
  {
    value: { id: '8461', name: 'Nicash Ethereum', decimal: '8', symbol: 'NICASH/ETH' },
    label: 'NICASH/ETH, Nicash Ethereum'
  },
  {
    value: { id: '8462', name: 'Nicash US Dollar', decimal: '5', symbol: 'NICASH/USD' },
    label: 'NICASH/USD, Nicash US Dollar'
  },
  {
    value: { id: '8463', name: 'Nimiq Ethereum', decimal: '8', symbol: 'NIM/ETH' },
    label: 'NIM/ETH, Nimiq Ethereum'
  },
  {
    value: { id: '8464', name: 'NoLimitCoin Bitcoin', decimal: '8', symbol: 'NLC2/BTC' },
    label: 'NLC2/BTC, NoLimitCoin Bitcoin'
  },
  {
    value: { id: '8465', name: 'Namecoin Bitcoin', decimal: '6', symbol: 'NMC/BTC' },
    label: 'NMC/BTC, Namecoin Bitcoin'
  },
  {
    value: { id: '8466', name: 'DNotes Bitcoin', decimal: '8', symbol: 'NOTE/BTC' },
    label: 'NOTE/BTC, DNotes Bitcoin'
  },
  {
    value: { id: '8467', name: 'DNotes Ethereum', decimal: '8', symbol: 'NOTE/ETH' },
    label: 'NOTE/ETH, DNotes Ethereum'
  },
  {
    value: { id: '8468', name: 'DNotes US Dollar', decimal: '6', symbol: 'NOTE/USD' },
    label: 'NOTE/USD, DNotes US Dollar'
  },
  {
    value: { id: '8469', name: 'New Power Coin US Dollar', decimal: '4', symbol: 'NPW/USD' },
    label: 'NPW/USD, New Power Coin US Dollar'
  },
  {
    value: { id: '8470', name: 'Pundi X Bitcoin', decimal: '8', symbol: 'NPXS/BTC' },
    label: 'NPXS/BTC, Pundi X Bitcoin'
  },
  {
    value: { id: '8471', name: 'Pundi X Korean Won', decimal: '2', symbol: 'NPXS/KRW' },
    label: 'NPXS/KRW, Pundi X Korean Won'
  },
  {
    value: { id: '8472', name: 'Pundi X Turkish Lira', decimal: '5', symbol: 'NPXS/TRY' },
    label: 'NPXS/TRY, Pundi X Turkish Lira'
  },
  {
    value: { id: '8473', name: 'Pundi X XRP', decimal: '6', symbol: 'NPXS/XRP' },
    label: 'NPXS/XRP, Pundi X XRP'
  },
  {
    value: { id: '8474', name: 'Neurotoken Ethereum', decimal: '6', symbol: 'NTK/ETH' },
    label: 'NTK/ETH, Neurotoken Ethereum'
  },
  {
    value: { id: '8475', name: 'Neutron Bitcoin', decimal: '8', symbol: 'NTRN/BTC' },
    label: 'NTRN/BTC, Neutron Bitcoin'
  },
  {
    value: { id: '8476', name: 'Novacoin Bitcoin', decimal: '6', symbol: 'NVC/BTC' },
    label: 'NVC/BTC, Novacoin Bitcoin'
  },
  {
    value: { id: '8477', name: 'Novacoin US Dollar', decimal: '4', symbol: 'NVC/USD' },
    label: 'NVC/USD, Novacoin US Dollar'
  },
  {
    value: { id: '8478', name: 'Nyancoin Bitcoin', decimal: '8', symbol: 'NYAN/BTC' },
    label: 'NYAN/BTC, Nyancoin Bitcoin'
  },
  {
    value: { id: '8479', name: 'NewYorkCoin Bitcoin', decimal: '8', symbol: 'NYC/BTC' },
    label: 'NYC/BTC, NewYorkCoin Bitcoin'
  },
  {
    value: { id: '8480', name: 'OAX Ethereum', decimal: '6', symbol: 'OAX/ETH' },
    label: 'OAX/ETH, OAX Ethereum'
  },
  {
    value: { id: '8481', name: 'Ocean Protocol Bitcoin', decimal: '8', symbol: 'OCEANp/BTC' },
    label: 'OCEANp/BTC, Ocean Protocol Bitcoin'
  },
  {
    value: { id: '8482', name: 'Ocean Protocol US Dollar', decimal: '4', symbol: 'OCEANp/USD' },
    label: 'OCEANp/USD, Ocean Protocol US Dollar'
  },
  {
    value: { id: '8483', name: 'Origin Protocol Bitcoin', decimal: '8', symbol: 'OGN/BTC' },
    label: 'OGN/BTC, Origin Protocol Bitcoin'
  },
  {
    value: { id: '8484', name: 'Origin Protocol US Dollar', decimal: '4', symbol: 'OGN/USD' },
    label: 'OGN/USD, Origin Protocol US Dollar'
  },
  {
    value: { id: '8485', name: 'OKB Bitcoin', decimal: '8', symbol: 'OKB/BTC' },
    label: 'OKB/BTC, OKB Bitcoin'
  },
  {
    value: { id: '8486', name: 'OKB US Dollar', decimal: '4', symbol: 'OKB/USD' },
    label: 'OKB/USD, OKB US Dollar'
  },
  {
    value: { id: '8487', name: 'OneLedger Bitcoin', decimal: '8', symbol: 'OLT/BTC' },
    label: 'OLT/BTC, OneLedger Bitcoin'
  },
  {
    value: { id: '8488', name: 'OMG Network Bitcoin', decimal: '6', symbol: 'OMG/BTC' },
    label: 'OMG/BTC, OMG Network Bitcoin'
  },
  {
    value: { id: '8489', name: 'OMG Network Euro', decimal: '5', symbol: 'OMG/EUR' },
    label: 'OMG/EUR, OMG Network Euro'
  },
  {
    value: { id: '8490', name: 'OMG Network Thai Baht', decimal: '2', symbol: 'OMG/THB' },
    label: 'OMG/THB, OMG Network Thai Baht'
  },
  {
    value: { id: '8491', name: 'Omni Bitcoin', decimal: '8', symbol: 'OMNI/BTC' },
    label: 'OMNI/BTC, Omni Bitcoin'
  },
  {
    value: { id: '8492', name: 'Harmony Binance Coin', decimal: '6', symbol: 'ONE/BNB' },
    label: 'ONE/BNB, Harmony Binance Coin'
  },
  {
    value: { id: '8493', name: 'Harmony Bitcoin', decimal: '8', symbol: 'ONE/BTC' },
    label: 'ONE/BTC, Harmony Bitcoin'
  },
  {
    value: { id: '8494', name: 'Harmony US Dollar', decimal: '6', symbol: 'ONE/USD' },
    label: 'ONE/USD, Harmony US Dollar'
  },
  {
    value: { id: '8495', name: 'DeepOnion Bitcoin', decimal: '8', symbol: 'ONION/BTC' },
    label: 'ONION/BTC, DeepOnion Bitcoin'
  },
  {
    value: { id: '8496', name: 'Ontology Turkish Lira', decimal: '2', symbol: 'ONT/TRY' },
    label: 'ONT/TRY, Ontology Turkish Lira'
  },
  {
    value: { id: '8497', name: 'Opal Bitcoin', decimal: '8', symbol: 'OPAL/BTC' },
    label: 'OPAL/BTC, Opal Bitcoin'
  },
  {
    value: { id: '8498', name: 'OP Coin Dogecoin', decimal: '6', symbol: 'OPC/DOGE' },
    label: 'OPC/DOGE, OP Coin Dogecoin'
  },
  {
    value: { id: '8499', name: 'Opacity Bitcoin', decimal: '8', symbol: 'OPQ/BTC' },
    label: 'OPQ/BTC, Opacity Bitcoin'
  },
  {
    value: { id: '8500', name: 'Opacity Ethereum', decimal: '8', symbol: 'OPQ/ETH' },
    label: 'OPQ/ETH, Opacity Ethereum'
  },
  {
    value: { id: '8501', name: 'Opacity US Dollar', decimal: '6', symbol: 'OPQ/USD' },
    label: 'OPQ/USD, Opacity US Dollar'
  },
  {
    value: { id: '8502', name: 'Orbitcoin Bitcoin', decimal: '8', symbol: 'ORB/BTC' },
    label: 'ORB/BTC, Orbitcoin Bitcoin'
  },
  {
    value: {
      id: '8503',
      name: 'ORMEUS/BTC - Ormeus Coin Bitcoin',
      decimal: '8',
      symbol: 'ORME/BTC'
    },
    label: 'ORME/BTC, ORMEUS/BTC - Ormeus Coin Bitcoin'
  },
  {
    value: { id: '8504', name: 'Ormeus Coin US Dollar', decimal: '5', symbol: 'ORMEUS/USD' },
    label: 'ORMEUS/USD, Ormeus Coin US Dollar'
  },
  {
    value: { id: '8505', name: 'Open Trading Network Bitcoin', decimal: '8', symbol: 'OTN/BTC' },
    label: 'OTN/BTC, Open Trading Network Bitcoin'
  },
  {
    value: { id: '8506', name: 'Open Trading Network US Dollar', decimal: '5', symbol: 'OTN/USD' },
    label: 'OTN/USD, Open Trading Network US Dollar'
  },
  {
    value: { id: '8507', name: 'Orchid Bitcoin', decimal: '8', symbol: 'OXT/BTC' },
    label: 'OXT/BTC, Orchid Bitcoin'
  },
  {
    value: { id: '8508', name: 'Orchid Euro', decimal: '5', symbol: 'OXT/EUR' },
    label: 'OXT/EUR, Orchid Euro'
  },
  {
    value: { id: '8509', name: 'Orchid US Dollar', decimal: '5', symbol: 'OXT/USD' },
    label: 'OXT/USD, Orchid US Dollar'
  },
  {
    value: { id: '8510', name: 'PAC Global Bitcoin', decimal: '8', symbol: 'PAC/BTC' },
    label: 'PAC/BTC, PAC Global Bitcoin'
  },
  {
    value: { id: '8511', name: 'PAC Global Dogecoin', decimal: '4', symbol: 'PAC/DOGE' },
    label: 'PAC/DOGE, PAC Global Dogecoin'
  },
  {
    value: { id: '8512', name: 'PAC Global Litecoin', decimal: '8', symbol: 'PAC/LTC' },
    label: 'PAC/LTC, PAC Global Litecoin'
  },
  {
    value: { id: '8513', name: 'PAC Global US Dollar', decimal: '6', symbol: 'PAC/USD' },
    label: 'PAC/USD, PAC Global US Dollar'
  },
  {
    value: { id: '8514', name: 'Project Pai Ethereum', decimal: '8', symbol: 'PAIp/ETH' },
    label: 'PAIp/ETH, Project Pai Ethereum'
  },
  {
    value: { id: '8515', name: 'Pakcoin Bitcoin', decimal: '8', symbol: 'PAK/BTC' },
    label: 'PAK/BTC, Pakcoin Bitcoin'
  },
  {
    value: { id: '8516', name: 'Pascal Bitcoin', decimal: '8', symbol: 'PASC/BTC' },
    label: 'PASC/BTC, Pascal Bitcoin'
  },
  {
    value: { id: '8517', name: 'TenX US Dollar', decimal: '5', symbol: 'PAY/USD' },
    label: 'PAY/USD, TenX US Dollar'
  },
  {
    value: { id: '8518', name: 'Paypex Bitcoin', decimal: '8', symbol: 'PAYX/BTC' },
    label: 'PAYX/BTC, Paypex Bitcoin'
  },
  {
    value: { id: '8519', name: 'Paypex Ethereum', decimal: '8', symbol: 'PAYX/ETH' },
    label: 'PAYX/ETH, Paypex Ethereum'
  },
  {
    value: { id: '8520', name: 'Primalbase Token Bitcoin', decimal: '6', symbol: 'PBT/BTC' },
    label: 'PBT/BTC, Primalbase Token Bitcoin'
  },
  {
    value: { id: '8521', name: 'Peculium Bitcoin', decimal: '8', symbol: 'PCL/BTC' },
    label: 'PCL/BTC, Peculium Bitcoin'
  },
  {
    value: { id: '8522', name: 'Peculium Ethereum', decimal: '8', symbol: 'PCL/ETH' },
    label: 'PCL/ETH, Peculium Ethereum'
  },
  {
    value: { id: '8523', name: 'PeepCoin Dogecoin', decimal: '6', symbol: 'PCN/DOGE' },
    label: 'PCN/DOGE, PeepCoin Dogecoin'
  },
  {
    value: { id: '8524', name: 'Pioneer Coin Ethereum', decimal: '8', symbol: 'PCOIN/ETH' },
    label: 'PCOIN/ETH, Pioneer Coin Ethereum'
  },
  {
    value: { id: '8525', name: 'Polkadot Bitcoin', decimal: '5', symbol: 'pDOTn/BTC' },
    label: 'pDOTn/BTC, Polkadot Bitcoin'
  },
  {
    value: { id: '8526', name: 'Polkadot Euro', decimal: '5', symbol: 'pDOTn/EUR' },
    label: 'pDOTn/EUR, Polkadot Euro'
  },
  {
    value: { id: '8527', name: 'Polkadot Turkish Lira', decimal: '2', symbol: 'pDOTn/TRY' },
    label: 'pDOTn/TRY, Polkadot Turkish Lira'
  },
  {
    value: { id: '8528', name: 'Polkadot US Dollar', decimal: '5', symbol: 'pDOTn/USD' },
    label: 'pDOTn/USD, Polkadot US Dollar'
  },
  {
    value: { id: '8529', name: 'Phore Bitcoin', decimal: '8', symbol: 'PHR/BTC' },
    label: 'PHR/BTC, Phore Bitcoin'
  },
  {
    value: { id: '8530', name: 'Phoenix Global Ethereum', decimal: '8', symbol: 'PHX/ETH' },
    label: 'PHX/ETH, Phoenix Global Ethereum'
  },
  {
    value: { id: '8531', name: 'PCHAIN Ethereum', decimal: '8', symbol: 'PI/ETH' },
    label: 'PI/ETH, PCHAIN Ethereum'
  },
  {
    value: { id: '8532', name: 'Pinkcoin US Dollar', decimal: '6', symbol: 'PINK/USD' },
    label: 'PINK/USD, Pinkcoin US Dollar'
  },
  {
    value: { id: '8533', name: 'PIVX Ethereum', decimal: '6', symbol: 'PIVX/ETH' },
    label: 'PIVX/ETH, PIVX Ethereum'
  },
  {
    value: { id: '8534', name: 'Lampix Bitcoin', decimal: '8', symbol: 'PIX/BTC' },
    label: 'PIX/BTC, Lampix Bitcoin'
  },
  {
    value: { id: '8535', name: 'ParkByte Bitcoin', decimal: '7', symbol: 'PKB/BTC' },
    label: 'PKB/BTC, ParkByte Bitcoin'
  },
  {
    value: { id: '8536', name: 'Playkey Bitcoin', decimal: '8', symbol: 'PKT/BTC' },
    label: 'PKT/BTC, Playkey Bitcoin'
  },
  {
    value: { id: '8537', name: 'Playkey Ethereum', decimal: '6', symbol: 'PKT/ETH' },
    label: 'PKT/ETH, Playkey Ethereum'
  },
  {
    value: { id: '8538', name: 'Plair US Dollar', decimal: '6', symbol: 'PLA/USD' },
    label: 'PLA/USD, Plair US Dollar'
  },
  {
    value: { id: '8539', name: 'Polybius US Dollar', decimal: '6', symbol: 'PLBT/USD' },
    label: 'PLBT/USD, Polybius US Dollar'
  },
  {
    value: { id: '8540', name: 'Add.xyz Ethereum', decimal: '8', symbol: 'PLT/ETH' },
    label: 'PLT/ETH, Add.xyz Ethereum'
  },
  {
    value: { id: '8541', name: 'Add.xyz US Dollar', decimal: '5', symbol: 'PLT/USD' },
    label: 'PLT/USD, Add.xyz US Dollar'
  },
  {
    value: { id: '8542', name: 'PlatonCoin Bitcoin', decimal: '8', symbol: 'PLTC/BTC' },
    label: 'PLTC/BTC, PlatonCoin Bitcoin'
  },
  {
    value: { id: '8543', name: 'PlatonCoin Ethereum', decimal: '8', symbol: 'PLTC/ETH' },
    label: 'PLTC/ETH, PlatonCoin Ethereum'
  },
  {
    value: { id: '8544', name: 'PumaPay Ethereum', decimal: '8', symbol: 'PMA/ETH' },
    label: 'PMA/ETH, PumaPay Ethereum'
  },
  {
    value: { id: '8545', name: 'Paymon Bitcoin', decimal: '8', symbol: 'PMNT/BTC' },
    label: 'PMNT/BTC, Paymon Bitcoin'
  },
  {
    value: { id: '8546', name: 'Pandacoin Ethereum', decimal: '8', symbol: 'PND/ETH' },
    label: 'PND/ETH, Pandacoin Ethereum'
  },
  {
    value: { id: '8547', name: 'Pandacoin US Dollar', decimal: '6', symbol: 'PND/USD' },
    label: 'PND/USD, Pandacoin US Dollar'
  },
  {
    value: { id: '8548', name: 'POA Ethereum', decimal: '6', symbol: 'POA/ETH' },
    label: 'POA/ETH, POA Ethereum'
  },
  {
    value: { id: '8549', name: 'Po.et Ethereum', decimal: '8', symbol: 'POE/ETH' },
    label: 'POE/ETH, Po.et Ethereum'
  },
  {
    value: { id: '8550', name: 'Polymath Ethereum', decimal: '6', symbol: 'POLY/ETH' },
    label: 'POLY/ETH, Polymath Ethereum'
  },
  {
    value: { id: '8551', name: 'PopularCoin Ethereum', decimal: '8', symbol: 'POP/ETH' },
    label: 'POP/ETH, PopularCoin Ethereum'
  },
  {
    value: { id: '8552', name: 'PostCoin Bitcoin', decimal: '8', symbol: 'POST/BTC' },
    label: 'POST/BTC, PostCoin Bitcoin'
  },
  {
    value: { id: '8553', name: 'PoSW Coin Bitcoin', decimal: '7', symbol: 'POSW/BTC' },
    label: 'POSW/BTC, PoSW Coin Bitcoin'
  },
  {
    value: { id: '8554', name: 'PotCoin US Dollar', decimal: '6', symbol: 'POT/USD' },
    label: 'POT/USD, PotCoin US Dollar'
  },
  {
    value: { id: '8555', name: 'PayPie Bitcoin', decimal: '8', symbol: 'PPP/BTC' },
    label: 'PPP/BTC, PayPie Bitcoin'
  },
  {
    value: { id: '8556', name: 'PayPie Ethereum', decimal: '6', symbol: 'PPP/ETH' },
    label: 'PPP/ETH, PayPie Ethereum'
  },
  {
    value: { id: '8557', name: 'Populous Ethereum', decimal: '6', symbol: 'PPT/ETH' },
    label: 'PPT/ETH, Populous Ethereum'
  },
  {
    value: { id: '8558', name: 'Populous Turkish Lira', decimal: '2', symbol: 'PPT/TRY' },
    label: 'PPT/TRY, Populous Turkish Lira'
  },
  {
    value: { id: '8559', name: 'Presearch Ethereum', decimal: '8', symbol: 'PRE/ETH' },
    label: 'PRE/ETH, Presearch Ethereum'
  },
  {
    value: { id: '8560', name: 'Paragon Bitcoin', decimal: '8', symbol: 'PRG/BTC' },
    label: 'PRG/BTC, Paragon Bitcoin'
  },
  {
    value: { id: '8561', name: 'Paragon Ethereum', decimal: '6', symbol: 'PRG/ETH' },
    label: 'PRG/ETH, Paragon Ethereum'
  },
  {
    value: { id: '8562', name: 'Paragon US Dollar', decimal: '6', symbol: 'PRG/USD' },
    label: 'PRG/USD, Paragon US Dollar'
  },
  {
    value: { id: '8563', name: 'PRiVCY Bitcoin', decimal: '8', symbol: 'PRIV/BTC' },
    label: 'PRIV/BTC, PRiVCY Bitcoin'
  },
  {
    value: { id: '8564', name: 'PRiVCY Ethereum', decimal: '8', symbol: 'PRIV/ETH' },
    label: 'PRIV/ETH, PRiVCY Ethereum'
  },
  {
    value: { id: '8565', name: 'PRiVCY US Dollar', decimal: '6', symbol: 'PRIV/USD' },
    label: 'PRIV/USD, PRiVCY US Dollar'
  },
  {
    value: { id: '8566', name: 'Privatix Bitcoin', decimal: '6', symbol: 'PRIX/BTC' },
    label: 'PRIX/BTC, Privatix Bitcoin'
  },
  {
    value: { id: '8567', name: 'Protean Bitcoin', decimal: '8', symbol: 'PRN/BTC' },
    label: 'PRN/BTC, Protean Bitcoin'
  },
  {
    value: { id: '8568', name: 'Propy Bitcoin', decimal: '7', symbol: 'PRO/BTC' },
    label: 'PRO/BTC, Propy Bitcoin'
  },
  {
    value: { id: '8569', name: 'Propy Ethereum', decimal: '6', symbol: 'PRO/ETH' },
    label: 'PRO/ETH, Propy Ethereum'
  },
  {
    value: { id: '8570', name: 'Propy US Dollar', decimal: '5', symbol: 'PRO/USD' },
    label: 'PRO/USD, Propy US Dollar'
  },
  {
    value: { id: '8571', name: 'ProCurrency Bitcoin', decimal: '8', symbol: 'PROC/BTC' },
    label: 'PROC/BTC, ProCurrency Bitcoin'
  },
  {
    value: { id: '8572', name: 'Pesetacoin Bitcoin', decimal: '8', symbol: 'PTC/BTC' },
    label: 'PTC/BTC, Pesetacoin Bitcoin'
  },
  {
    value: { id: '8573', name: 'Patientory Ethereum', decimal: '8', symbol: 'PTOY/ETH' },
    label: 'PTOY/ETH, Patientory Ethereum'
  },
  {
    value: { id: '8574', name: 'Patientory US Dollar', decimal: '6', symbol: 'PTOY/USD' },
    label: 'PTOY/USD, Patientory US Dollar'
  },
  {
    value: { id: '8575', name: 'Prime-XI Bitcoin', decimal: '8', symbol: 'PXI/BTC' },
    label: 'PXI/BTC, Prime-XI Bitcoin'
  },
  {
    value: { id: '8576', name: 'PRIZM Ethereum', decimal: '6', symbol: 'PZM/ETH' },
    label: 'PZM/ETH, PRIZM Ethereum'
  },
  {
    value: { id: '8577', name: 'PRIZM Russian Ruble', decimal: '2', symbol: 'PZM/RUB' },
    label: 'PZM/RUB, PRIZM Russian Ruble'
  },
  {
    value: { id: '8578', name: 'QubitCoin Bitcoin', decimal: '8', symbol: 'Q2C/BTC' },
    label: 'Q2C/BTC, QubitCoin Bitcoin'
  },
  {
    value: { id: '8579', name: 'QASH Ethereum', decimal: '8', symbol: 'QASH/ETH' },
    label: 'QASH/ETH, QASH Ethereum'
  },
  {
    value: { id: '8580', name: 'Qubitica Bitcoin', decimal: '7', symbol: 'QBIT/BTC' },
    label: 'QBIT/BTC, Qubitica Bitcoin'
  },
  {
    value: { id: '8581', name: 'Qubitica Ethereum', decimal: '6', symbol: 'QBIT/ETH' },
    label: 'QBIT/ETH, Qubitica Ethereum'
  },
  {
    value: { id: '8582', name: 'Qubitica US Dollar', decimal: '2', symbol: 'QBIT/USD' },
    label: 'QBIT/USD, Qubitica US Dollar'
  },
  {
    value: { id: '8583', name: 'QuarkChain Korean Won', decimal: '2', symbol: 'QKC/KRW' },
    label: 'QKC/KRW, QuarkChain Korean Won'
  },
  {
    value: { id: '8584', name: 'QuarkChain XRP', decimal: '6', symbol: 'QKC/XRP' },
    label: 'QKC/XRP, QuarkChain XRP'
  },
  {
    value: { id: '8585', name: 'QLC Chain Bitcoin', decimal: '8', symbol: 'QLC/BTC' },
    label: 'QLC/BTC, QLC Chain Bitcoin'
  },
  {
    value: { id: '8586', name: 'QLC Chain Ethereum', decimal: '6', symbol: 'QLC/ETH' },
    label: 'QLC/ETH, QLC Chain Ethereum'
  },
  {
    value: { id: '8587', name: 'Quant Ethereum', decimal: '8', symbol: 'QNT/ETH' },
    label: 'QNT/ETH, Quant Ethereum'
  },
  {
    value: { id: '8588', name: 'Quark Bitcoin', decimal: '8', symbol: 'QRK/BTC' },
    label: 'QRK/BTC, Quark Bitcoin'
  },
  {
    value: { id: '8589', name: 'Qtum Canadian Dollar', decimal: '4', symbol: 'QTUM/CAD' },
    label: 'QTUM/CAD, Qtum Canadian Dollar'
  },
  {
    value: { id: '8590', name: 'Radium US Dollar', decimal: '5', symbol: 'RADS/USD' },
    label: 'RADS/USD, Radium US Dollar'
  },
  {
    value: { id: '8591', name: 'RabbitCoin US Dollar', decimal: '8', symbol: 'RBBT/USD' },
    label: 'RBBT/USD, RabbitCoin US Dollar'
  },
  {
    value: { id: '8592', name: 'Rubies Bitcoin', decimal: '8', symbol: 'RBIES/BTC' },
    label: 'RBIES/BTC, Rubies Bitcoin'
  },
  {
    value: { id: '8593', name: 'Rimbit Bitcoin', decimal: '8', symbol: 'RBT/BTC' },
    label: 'RBT/BTC, Rimbit Bitcoin'
  },
  {
    value: { id: '8594', name: 'Rubycoin Bitcoin', decimal: '7', symbol: 'RBY/BTC' },
    label: 'RBY/BTC, Rubycoin Bitcoin'
  },
  {
    value: { id: '8595', name: 'Ripio Credit Network Ethereum', decimal: '7', symbol: 'RCN/ETH' },
    label: 'RCN/ETH, Ripio Credit Network Ethereum'
  },
  {
    value: { id: '8596', name: 'Ripio Credit Network US Dollar', decimal: '6', symbol: 'RCN/USD' },
    label: 'RCN/USD, Ripio Credit Network US Dollar'
  },
  {
    value: { id: '8597', name: 'Raiden Network Token Ethereum', decimal: '6', symbol: 'RDN/ETH' },
    label: 'RDN/ETH, Raiden Network Token Ethereum'
  },
  {
    value: { id: '8598', name: 'Raiden Network Token US Dollar', decimal: '5', symbol: 'RDN/USD' },
    label: 'RDN/USD, Raiden Network Token US Dollar'
  },
  {
    value: { id: '8599', name: 'REAL Bancor', decimal: '6', symbol: 'REAL/BNT' },
    label: 'REAL/BNT, REAL Bancor'
  },
  {
    value: { id: '8600', name: 'Remme Bitcoin', decimal: '8', symbol: 'REM/BTC' },
    label: 'REM/BTC, Remme Bitcoin'
  },
  {
    value: { id: '8601', name: 'Ren Bitcoin', decimal: '8', symbol: 'REN/BTC' },
    label: 'REN/BTC, Ren Bitcoin'
  },
  {
    value: { id: '8602', name: 'Ren Ethereum', decimal: '6', symbol: 'REN/ETH' },
    label: 'REN/ETH, Ren Ethereum'
  },
  {
    value: { id: '8603', name: 'Request Ethereum', decimal: '6', symbol: 'REQ/ETH' },
    label: 'REQ/ETH, Request Ethereum'
  },
  {
    value: { id: '8604', name: 'Request Korean Won', decimal: '2', symbol: 'REQ/KRW' },
    label: 'REQ/KRW, Request Korean Won'
  },
  {
    value: { id: '8605', name: 'Request US Dollar', decimal: '6', symbol: 'REQ/USD' },
    label: 'REQ/USD, Request US Dollar'
  },
  {
    value: { id: '8606', name: 'RChain Ethereum', decimal: '8', symbol: 'REV/ETH' },
    label: 'REV/ETH, RChain Ethereum'
  },
  {
    value: { id: '8607', name: 'Refereum Bitcoin', decimal: '8', symbol: 'RFR/BTC' },
    label: 'RFR/BTC, Refereum Bitcoin'
  },
  {
    value: { id: '8608', name: 'Refereum Ethereum', decimal: '8', symbol: 'RFR/ETH' },
    label: 'RFR/ETH, Refereum Ethereum'
  },
  {
    value: { id: '8609', name: 'Refereum Korean Won', decimal: '2', symbol: 'RFR/KRW' },
    label: 'RFR/KRW, Refereum Korean Won'
  },
  {
    value: { id: '8610', name: 'Refereum US Dollar', decimal: '6', symbol: 'RFR/USD' },
    label: 'RFR/USD, Refereum US Dollar'
  },
  {
    value: { id: '8611', name: 'Ride My Car Waves', decimal: '6', symbol: 'RIDE/WAVES' },
    label: 'RIDE/WAVES, Ride My Car Waves'
  },
  {
    value: { id: '8612', name: 'Rise Bitcoin', decimal: '8', symbol: 'RISE/BTC' },
    label: 'RISE/BTC, Rise Bitcoin'
  },
  {
    value: { id: '8613', name: 'iExec RLC Ethereum', decimal: '6', symbol: 'RLC/ETH' },
    label: 'RLC/ETH, iExec RLC Ethereum'
  },
  {
    value: { id: '8614', name: 'iExec RLC US Dollar', decimal: '5', symbol: 'RLC/USD' },
    label: 'RLC/USD, iExec RLC US Dollar'
  },
  {
    value: { id: '8615', name: 'RON Bitcoin', decimal: '8', symbol: 'RONc/BTC' },
    label: 'RONc/BTC, RON Bitcoin'
  },
  {
    value: { id: '8616', name: 'RON US Dollar', decimal: '6', symbol: 'RONc/USD' },
    label: 'RONc/USD, RON US Dollar'
  },
  {
    value: { id: '8617', name: 'ROOBEE Bitcoin', decimal: '8', symbol: 'ROOBEE/BTC' },
    label: 'ROOBEE/BTC, ROOBEE Bitcoin'
  },
  {
    value: { id: '8618', name: 'ROOBEE US Dollar', decimal: '6', symbol: 'ROOBEE/USD' },
    label: 'ROOBEE/USD, ROOBEE US Dollar'
  },
  {
    value: { id: '8619', name: 'RonPaulCoin Bitcoin', decimal: '8', symbol: 'RPC/BTC' },
    label: 'RPC/BTC, RonPaulCoin Bitcoin'
  },
  {
    value: { id: '8620', name: 'THORChain Binance Coin', decimal: '5', symbol: 'RUNE/BNB' },
    label: 'RUNE/BNB, THORChain Binance Coin'
  },
  {
    value: { id: '8621', name: 'THORChain Bitcoin', decimal: '8', symbol: 'RUNE/BTC' },
    label: 'RUNE/BTC, THORChain Bitcoin'
  },
  {
    value: { id: '8622', name: 'THORChain US Dollar', decimal: '5', symbol: 'RUNE/USD' },
    label: 'RUNE/USD, THORChain US Dollar'
  },
  {
    value: { id: '8623', name: 'Rupee Bitcoin', decimal: '8', symbol: 'RUP/BTC' },
    label: 'RUP/BTC, Rupee Bitcoin'
  },
  {
    value: { id: '8624', name: 'Ravencoin Bitcoin Cash', decimal: '6', symbol: 'RVN/BCH' },
    label: 'RVN/BCH, Ravencoin Bitcoin Cash'
  },
  {
    value: { id: '8625', name: 'Ravencoin Turkish Lira', decimal: '3', symbol: 'RVN/TRY' },
    label: 'RVN/TRY, Ravencoin Turkish Lira'
  },
  {
    value: { id: '8626', name: 'Ryo Currency Bitcoin', decimal: '8', symbol: 'RYO/BTC' },
    label: 'RYO/BTC, Ryo Currency Bitcoin'
  },
  {
    value: { id: '8627', name: 'Ryo Currency US Dollar', decimal: '6', symbol: 'RYO/USD' },
    label: 'RYO/USD, Ryo Currency US Dollar'
  },
  {
    value: { id: '8628', name: 'SALT Bitcoin', decimal: '7', symbol: 'SALT/BTC' },
    label: 'SALT/BTC, SALT Bitcoin'
  },
  {
    value: { id: '8629', name: 'SALT Ethereum', decimal: '6', symbol: 'SALT/ETH' },
    label: 'SALT/ETH, SALT Ethereum'
  },
  {
    value: { id: '8630', name: 'SALT US Dollar', decimal: '5', symbol: 'SALT/USD' },
    label: 'SALT/USD, SALT US Dollar'
  },
  {
    value: { id: '8631', name: 'Santiment Network Token Bitcoin', decimal: '7', symbol: 'SAN/BTC' },
    label: 'SAN/BTC, Santiment Network Token Bitcoin'
  },
  {
    value: {
      id: '8632',
      name: 'Santiment Network Token Ethereum',
      decimal: '6',
      symbol: 'SAN/ETH'
    },
    label: 'SAN/ETH, Santiment Network Token Ethereum'
  },
  {
    value: {
      id: '8633',
      name: 'Santiment Network Token US Dollar',
      decimal: '5',
      symbol: 'SAN/USD'
    },
    label: 'SAN/USD, Santiment Network Token US Dollar'
  },
  {
    value: { id: '8634', name: 'Social Bitcoin', decimal: '8', symbol: 'SCL/BTC' },
    label: 'SCL/BTC, Social Bitcoin'
  },
  {
    value: { id: '8635', name: 'Soma Ethereum', decimal: '8', symbol: 'SCT/ETH' },
    label: 'SCT/ETH, Soma Ethereum'
  },
  {
    value: { id: '8636', name: 'Seele-N Bitcoin', decimal: '8', symbol: 'SEELE/BTC' },
    label: 'SEELE/BTC, Seele-N Bitcoin'
  },
  {
    value: { id: '8637', name: 'Seele-N Ethereum', decimal: '6', symbol: 'SEELE/ETH' },
    label: 'SEELE/ETH, Seele-N Ethereum'
  },
  {
    value: { id: '8638', name: 'Seele-N US Dollar', decimal: '6', symbol: 'SEELE/USD' },
    label: 'SEELE/USD, Seele-N US Dollar'
  },
  {
    value: { id: '8639', name: 'Sequence Bitcoin', decimal: '8', symbol: 'SEQ/BTC' },
    label: 'SEQ/BTC, Sequence Bitcoin'
  },
  {
    value: { id: '8640', name: 'Show Bitcoin', decimal: '8', symbol: 'SHOW/BTC' },
    label: 'SHOW/BTC, Show Bitcoin'
  },
  {
    value: { id: '8641', name: 'Show US Dollar', decimal: '6', symbol: 'SHOW/USD' },
    label: 'SHOW/USD, Show US Dollar'
  },
  {
    value: { id: '8642', name: 'SafeInsure Bitcoin', decimal: '8', symbol: 'SINS/BTC' },
    label: 'SINS/BTC, SafeInsure Bitcoin'
  },
  {
    value: { id: '8643', name: 'SafeInsure US Dollar', decimal: '6', symbol: 'SINS/USD' },
    label: 'SINS/USD, SafeInsure US Dollar'
  },
  {
    value: { id: '8644', name: 'Sakura Bloom Ethereum', decimal: '8', symbol: 'SKB/ETH' },
    label: 'SKB/ETH, Sakura Bloom Ethereum'
  },
  {
    value: { id: '8645', name: 'SkinCoin Ethereum', decimal: '8', symbol: 'SKIN/ETH' },
    label: 'SKIN/ETH, SkinCoin Ethereum'
  },
  {
    value: { id: '8646', name: 'Skrumble Network Bitcoin', decimal: '8', symbol: 'SKM/BTC' },
    label: 'SKM/BTC, Skrumble Network Bitcoin'
  },
  {
    value: { id: '8647', name: 'Skrumble Network Ethereum', decimal: '8', symbol: 'SKM/ETH' },
    label: 'SKM/ETH, Skrumble Network Ethereum'
  },
  {
    value: { id: '8648', name: 'Silverway Binance Coin', decimal: '8', symbol: 'SLV/BNB' },
    label: 'SLV/BNB, Silverway Binance Coin'
  },
  {
    value: { id: '8649', name: 'Silverway US Dollar', decimal: '6', symbol: 'SLV/USD' },
    label: 'SLV/USD, Silverway US Dollar'
  },
  {
    value: { id: '8650', name: 'SmartCash Bitcoin', decimal: '8', symbol: 'SMART/BTC' },
    label: 'SMART/BTC, SmartCash Bitcoin'
  },
  {
    value: { id: '8651', name: 'SmartCoin Bitcoin', decimal: '8', symbol: 'SMC/BTC' },
    label: 'SMC/BTC, SmartCoin Bitcoin'
  },
  {
    value: { id: '8652', name: 'SingularDTV Bitcoin', decimal: '8', symbol: 'SNGLS/BTC' },
    label: 'SNGLS/BTC, SingularDTV Bitcoin'
  },
  {
    value: { id: '8653', name: 'SingularDTV US Dollar', decimal: '6', symbol: 'SNGLS/USD' },
    label: 'SNGLS/USD, SingularDTV US Dollar'
  },
  {
    value: { id: '8654', name: 'Sport and Leisure US Dollar', decimal: '6', symbol: 'SNL/USD' },
    label: 'SNL/USD, Sport and Leisure US Dollar'
  },
  {
    value: { id: '8655', name: 'SONM US Dollar', decimal: '6', symbol: 'SNM/USD' },
    label: 'SNM/USD, SONM US Dollar'
  },
  {
    value: { id: '8656', name: 'Synergy Bitcoin', decimal: '6', symbol: 'SNRG/BTC' },
    label: 'SNRG/BTC, Synergy Bitcoin'
  },
  {
    value: { id: '8657', name: 'Status US Dollar', decimal: '6', symbol: 'SNT/USD' },
    label: 'SNT/USD, Status US Dollar'
  },
  {
    value: { id: '8658', name: 'Sentivate Bitcoin', decimal: '8', symbol: 'SNTVT/BTC' },
    label: 'SNTVT/BTC, Sentivate Bitcoin'
  },
  {
    value: { id: '8659', name: 'Sentivate Ethereum', decimal: '8', symbol: 'SNTVT/ETH' },
    label: 'SNTVT/ETH, Sentivate Ethereum'
  },
  {
    value: { id: '8660', name: 'Sentivate US Dollar', decimal: '6', symbol: 'SNTVT/USD' },
    label: 'SNTVT/USD, Sentivate US Dollar'
  },
  {
    value: { id: '8661', name: 'Synthetix Network Token Bitcoin', decimal: '8', symbol: 'SNX/BTC' },
    label: 'SNX/BTC, Synthetix Network Token Bitcoin'
  },
  {
    value: {
      id: '8662',
      name: 'Synthetix Network Token Ethereum',
      decimal: '6',
      symbol: 'SNX/ETH'
    },
    label: 'SNX/ETH, Synthetix Network Token Ethereum'
  },
  {
    value: { id: '8663', name: 'Solana Binance Coin', decimal: '5', symbol: 'SOL/BNB' },
    label: 'SOL/BNB, Solana Binance Coin'
  },
  {
    value: { id: '8664', name: 'Solana Bitcoin', decimal: '8', symbol: 'SOL/BTC' },
    label: 'SOL/BTC, Solana Bitcoin'
  },
  {
    value: { id: '8665', name: 'Solana US Dollar', decimal: '5', symbol: 'SOL/USD' },
    label: 'SOL/USD, Solana US Dollar'
  },
  {
    value: { id: '8666', name: 'Sologenic US Dollar', decimal: '5', symbol: 'SOLO/USD' },
    label: 'SOLO/USD, Sologenic US Dollar'
  },
  {
    value: { id: '8667', name: 'SOLVE Bitcoin', decimal: '8', symbol: 'SOLVE/BTC' },
    label: 'SOLVE/BTC, SOLVE Bitcoin'
  },
  {
    value: { id: '8668', name: 'SOLVE Ethereum', decimal: '6', symbol: 'SOLVE/ETH' },
    label: 'SOLVE/ETH, SOLVE Ethereum'
  },
  {
    value: { id: '8669', name: 'SOLVE US Dollar', decimal: '6', symbol: 'SOLVE/USD' },
    label: 'SOLVE/USD, SOLVE US Dollar'
  },
  {
    value: { id: '8670', name: 'SongCoin Bitcoin', decimal: '8', symbol: 'SONG/BTC' },
    label: 'SONG/BTC, SongCoin Bitcoin'
  },
  {
    value: { id: '8671', name: 'SpankChain US Dollar', decimal: '6', symbol: 'SPANK/USD' },
    label: 'SPANK/USD, SpankChain US Dollar'
  },
  {
    value: { id: '8672', name: 'SpaceChain Bitcoin', decimal: '8', symbol: 'SPC/BTC' },
    label: 'SPC/BTC, SpaceChain Bitcoin'
  },
  {
    value: { id: '8673', name: 'SportyCo Bitcoin', decimal: '8', symbol: 'SPF/BTC' },
    label: 'SPF/BTC, SportyCo Bitcoin'
  },
  {
    value: { id: '8674', name: 'SpreadCoin Bitcoin', decimal: '8', symbol: 'SPR/BTC' },
    label: 'SPR/BTC, SpreadCoin Bitcoin'
  },
  {
    value: { id: '8675', name: 'Spots Bitcoin', decimal: '8', symbol: 'SPT/BTC' },
    label: 'SPT/BTC, Spots Bitcoin'
  },
  {
    value: { id: '8676', name: 'SocialRemit US Dollar', decimal: '4', symbol: 'SREUR/USD' },
    label: 'SREUR/USD, SocialRemit US Dollar'
  },
  {
    value: { id: '8677', name: 'Serum Binance Coin', decimal: '5', symbol: 'SRM/BNB' },
    label: 'SRM/BNB, Serum Binance Coin'
  },
  {
    value: { id: '8678', name: 'Serum Bitcoin', decimal: '8', symbol: 'SRM/BTC' },
    label: 'SRM/BTC, Serum Bitcoin'
  },
  {
    value: { id: '8679', name: 'Serum US Dollar', decimal: '4', symbol: 'SRM/USD' },
    label: 'SRM/USD, Serum US Dollar'
  },
  {
    value: { id: '8680', name: 'SIRIN LABS Token Ethereum', decimal: '6', symbol: 'SRN/ETH' },
    label: 'SRN/ETH, SIRIN LABS Token Ethereum'
  },
  {
    value: { id: '8681', name: 'SIRIN LABS Token Korean Won', decimal: '2', symbol: 'SRN/KRW' },
    label: 'SRN/KRW, SIRIN LABS Token Korean Won'
  },
  {
    value: { id: '8682', name: 'Sharder Bitcoin', decimal: '8', symbol: 'SS/BTC' },
    label: 'SS/BTC, Sharder Bitcoin'
  },
  {
    value: { id: '8683', name: 'Starbase Ethereum', decimal: '8', symbol: 'STAR/ETH' },
    label: 'STAR/ETH, Starbase Ethereum'
  },
  {
    value: { id: '8684', name: 'Startcoin Bitcoin', decimal: '8', symbol: 'START/BTC' },
    label: 'START/BTC, Startcoin Bitcoin'
  },
  {
    value: { id: '8685', name: 'StarChain US Dollar', decimal: '6', symbol: 'STC/USD' },
    label: 'STC/USD, StarChain US Dollar'
  },
  {
    value: { id: '8686', name: 'Steem Ethereum', decimal: '6', symbol: 'STEEM/ETH' },
    label: 'STEEM/ETH, Steem Ethereum'
  },
  {
    value: { id: '8687', name: 'Streamity Ethereum', decimal: '8', symbol: 'STM/ETH' },
    label: 'STM/ETH, Streamity Ethereum'
  },
  {
    value: { id: '8688', name: 'Streamity US Dollar', decimal: '5', symbol: 'STM/USD' },
    label: 'STM/USD, Streamity US Dollar'
  },
  {
    value: { id: '8689', name: 'Storj Ethereum', decimal: '6', symbol: 'STORJ/ETH' },
    label: 'STORJ/ETH, Storj Ethereum'
  },
  {
    value: { id: '8690', name: 'Storj US Dollar', decimal: '5', symbol: 'STORJ/USD' },
    label: 'STORJ/USD, Storj US Dollar'
  },
  {
    value: { id: '8691', name: 'Storiqa Ethereum', decimal: '8', symbol: 'STQ/ETH' },
    label: 'STQ/ETH, Storiqa Ethereum'
  },
  {
    value: { id: '8692', name: 'Stratis Korean Won', decimal: '2', symbol: 'STRAX/KRW' },
    label: 'STRAX/KRW, Stratis Korean Won'
  },
  {
    value: { id: '8693', name: 'Sativacoin Bitcoin', decimal: '8', symbol: 'STV/BTC' },
    label: 'STV/BTC, Sativacoin Bitcoin'
  },
  {
    value: { id: '8694', name: 'Stox Bitcoin', decimal: '8', symbol: 'STX/BTC' },
    label: 'STX/BTC, Stox Bitcoin'
  },
  {
    value: { id: '8695', name: 'Stox Ethereum', decimal: '6', symbol: 'STX/ETH' },
    label: 'STX/ETH, Stox Ethereum'
  },
  {
    value: { id: '8696', name: 'Stox US Dollar', decimal: '5', symbol: 'STX/USD' },
    label: 'STX/USD, Stox US Dollar'
  },
  {
    value: { id: '8697', name: 'Blockstack Bitcoin', decimal: '8', symbol: 'STXk/BTC' },
    label: 'STXk/BTC, Blockstack Bitcoin'
  },
  {
    value: { id: '8698', name: 'Substratum Indian Rupee', decimal: '2', symbol: 'SUB/INR' },
    label: 'SUB/INR, Substratum Indian Rupee'
  },
  {
    value: { id: '8699', name: 'Substratum US Dollar', decimal: '5', symbol: 'SUB/USD' },
    label: 'SUB/USD, Substratum US Dollar'
  },
  {
    value: { id: '8700', name: 'Suretly Bitcoin', decimal: '6', symbol: 'SUR/BTC' },
    label: 'SUR/BTC, Suretly Bitcoin'
  },
  {
    value: { id: '8701', name: 'Suretly US Dollar', decimal: '4', symbol: 'SUR/USD' },
    label: 'SUR/USD, Suretly US Dollar'
  },
  {
    value: { id: '8702', name: 'SushiSwap Bitcoin', decimal: '8', symbol: 'SUSHI/BTC' },
    label: 'SUSHI/BTC, SushiSwap Bitcoin'
  },
  {
    value: { id: '8703', name: 'SushiSwap US Dollar', decimal: '4', symbol: 'SUSHI/USD' },
    label: 'SUSHI/USD, SushiSwap US Dollar'
  },
  {
    value: { id: '8704', name: 'Swing Bitcoin', decimal: '8', symbol: 'SWING/BTC' },
    label: 'SWING/BTC, Swing Bitcoin'
  },
  {
    value: { id: '8705', name: 'Swarm City Bitcoin', decimal: '6', symbol: 'SWT/BTC' },
    label: 'SWT/BTC, Swarm City Bitcoin'
  },
  {
    value: { id: '8706', name: 'Switcheo Ethereum', decimal: '8', symbol: 'SWTH/ETH' },
    label: 'SWTH/ETH, Switcheo Ethereum'
  },
  {
    value: { id: '8707', name: 'Switcheo Neo', decimal: '6', symbol: 'SWTH/NEO' },
    label: 'SWTH/NEO, Switcheo Neo'
  },
  {
    value: { id: '8708', name: 'Sexcoin Bitcoin', decimal: '8', symbol: 'SXC/BTC' },
    label: 'SXC/BTC, Sexcoin Bitcoin'
  },
  {
    value: {
      id: '8709',
      name: 'Spectre.ai Dividend Token Bitcoin',
      decimal: '8',
      symbol: 'SXDT/BTC'
    },
    label: 'SXDT/BTC, Spectre.ai Dividend Token Bitcoin'
  },
  {
    value: { id: '8710', name: 'Swipe Bitcoin', decimal: '8', symbol: 'SXP/BTC' },
    label: 'SXP/BTC, Swipe Bitcoin'
  },
  {
    value: { id: '8711', name: 'Syndicate Bitcoin', decimal: '6', symbol: 'SYNX/BTC' },
    label: 'SYNX/BTC, Syndicate Bitcoin'
  },
  {
    value: { id: '8712', name: 'TaaS Bitcoin', decimal: '6', symbol: 'TAAS/BTC' },
    label: 'TAAS/BTC, TaaS Bitcoin'
  },
  {
    value: { id: '8713', name: 'TaaS US Dollar', decimal: '5', symbol: 'TAAS/USD' },
    label: 'TAAS/USD, TaaS US Dollar'
  },
  {
    value: { id: '8714', name: 'TAGZ5 Ethereum', decimal: '8', symbol: 'TAGZ5/ETH' },
    label: 'TAGZ5/ETH, TAGZ5 Ethereum'
  },
  {
    value: { id: '8715', name: 'TAGZ5 US Dollar', decimal: '6', symbol: 'TAGZ5/USD' },
    label: 'TAGZ5/USD, TAGZ5 US Dollar'
  },
  {
    value: { id: '8716', name: 'TajCoin Bitcoin', decimal: '8', symbol: 'TAJ/BTC' },
    label: 'TAJ/BTC, TajCoin Bitcoin'
  },
  {
    value: { id: '8717', name: 'Thore Cash Bitcoin', decimal: '8', symbol: 'TCH/BTC' },
    label: 'TCH/BTC, Thore Cash Bitcoin'
  },
  {
    value: { id: '8718', name: 'TokenClub Ethereum', decimal: '8', symbol: 'TCT/ETH' },
    label: 'TCT/ETH, TokenClub Ethereum'
  },
  {
    value: { id: '8719', name: 'TEKcoin Dogecoin', decimal: '6', symbol: 'TEK/DOGE' },
    label: 'TEK/DOGE, TEKcoin Dogecoin'
  },
  {
    value: { id: '8720', name: 'Tokenomy Bitcoin', decimal: '8', symbol: 'TEN/BTC' },
    label: 'TEN/BTC, Tokenomy Bitcoin'
  },
  {
    value: { id: '8721', name: 'TerraNova Bitcoin', decimal: '7', symbol: 'TER/BTC' },
    label: 'TER/BTC, TerraNova Bitcoin'
  },
  {
    value: { id: '8722', name: 'TE-FOOD Bitcoin', decimal: '8', symbol: 'TFD/BTC' },
    label: 'TFD/BTC, TE-FOOD Bitcoin'
  },
  {
    value: { id: '8723', name: 'Theta Fuel Korean Won', decimal: '2', symbol: 'TFEUL/KRW' },
    label: 'TFEUL/KRW, Theta Fuel Korean Won'
  },
  {
    value: { id: '8724', name: 'Theta Fuel Bitcoin', decimal: '8', symbol: 'TFUEL/BTC' },
    label: 'TFUEL/BTC, Theta Fuel Bitcoin'
  },
  {
    value: { id: '8725', name: 'Theta Fuel Ethereum', decimal: '8', symbol: 'TFUEL/ETH' },
    label: 'TFUEL/ETH, Theta Fuel Ethereum'
  },
  {
    value: { id: '8726', name: 'Theta Fuel US Dollar', decimal: '5', symbol: 'TFUEL/USD' },
    label: 'TFUEL/USD, Theta Fuel US Dollar'
  },
  {
    value: { id: '8727', name: 'Truegame Ethereum', decimal: '8', symbol: 'TGAME/ETH' },
    label: 'TGAME/ETH, Truegame Ethereum'
  },
  {
    value: { id: '8728', name: 'HempCoin Bitcoin', decimal: '8', symbol: 'THC/BTC' },
    label: 'THC/BTC, HempCoin Bitcoin'
  },
  {
    value: { id: '8729', name: 'TechShares US Dollar', decimal: '6', symbol: 'THS/USD' },
    label: 'THS/USD, TechShares US Dollar'
  },
  {
    value: { id: '8730', name: 'Ties.DB Bitcoin', decimal: '8', symbol: 'TIE/BTC' },
    label: 'TIE/BTC, Ties.DB Bitcoin'
  },
  {
    value: { id: '8731', name: 'Chronobank Bitcoin', decimal: '6', symbol: 'TIME/BTC' },
    label: 'TIME/BTC, Chronobank Bitcoin'
  },
  {
    value: { id: '8732', name: 'Titcoin Bitcoin', decimal: '8', symbol: 'TITn/BTC' },
    label: 'TITn/BTC, Titcoin Bitcoin'
  },
  {
    value: { id: '8733', name: 'Blocktix Bitcoin', decimal: '8', symbol: 'TIX/BTC' },
    label: 'TIX/BTC, Blocktix Bitcoin'
  },
  {
    value: { id: '8734', name: 'Monolith US Dollar', decimal: '5', symbol: 'TKN/USD' },
    label: 'TKN/USD, Monolith US Dollar'
  },
  {
    value: { id: '8735', name: 'Tokes Waves', decimal: '6', symbol: 'TKS/WAVES' },
    label: 'TKS/WAVES, Tokes Waves'
  },
  {
    value: { id: '8736', name: 'THEKEY Ethereum', decimal: '7', symbol: 'TKY/ETH' },
    label: 'TKY/ETH, THEKEY Ethereum'
  },
  {
    value: { id: '8737', name: 'Time New Bank Ethereum', decimal: '8', symbol: 'TNB/ETH' },
    label: 'TNB/ETH, Time New Bank Ethereum'
  },
  {
    value: { id: '8738', name: 'Tierion Bitcoin', decimal: '8', symbol: 'TNT/BTC' },
    label: 'TNT/BTC, Tierion Bitcoin'
  },
  {
    value: { id: '8739', name: 'Tierion Ethereum', decimal: '7', symbol: 'TNT/ETH' },
    label: 'TNT/ETH, Tierion Ethereum'
  },
  {
    value: { id: '8740', name: 'Tierion US Dollar', decimal: '6', symbol: 'TNT/USD' },
    label: 'TNT/USD, Tierion US Dollar'
  },
  {
    value: { id: '8741', name: 'ToaCoin Bitcoin', decimal: '8', symbol: 'TOA/BTC' },
    label: 'TOA/BTC, ToaCoin Bitcoin'
  },
  {
    value: { id: '8742', name: 'TomoChain Binance Coin', decimal: '6', symbol: 'TOMO/BNB' },
    label: 'TOMO/BNB, TomoChain Binance Coin'
  },
  {
    value: { id: '8743', name: 'TomoChain Ethereum', decimal: '7', symbol: 'TOMO/ETH' },
    label: 'TOMO/ETH, TomoChain Ethereum'
  },
  {
    value: { id: '8744', name: 'OriginTrail Bitcoin', decimal: '8', symbol: 'TRAC/BTC' },
    label: 'TRAC/BTC, OriginTrail Bitcoin'
  },
  {
    value: { id: '8745', name: 'Terracoin Bitcoin', decimal: '8', symbol: 'TRC/BTC' },
    label: 'TRC/BTC, Terracoin Bitcoin'
  },
  {
    value: { id: '8746', name: 'Truckcoin Bitcoin', decimal: '8', symbol: 'TRK/BTC' },
    label: 'TRK/BTC, Truckcoin Bitcoin'
  },
  {
    value: { id: '8747', name: 'Trollcoin Bitcoin', decimal: '8', symbol: 'TROLL/BTC' },
    label: 'TROLL/BTC, Trollcoin Bitcoin'
  },
  {
    value: { id: '8748', name: 'TrueChain Binance Coin', decimal: '6', symbol: 'TRUE/BNB' },
    label: 'TRUE/BNB, TrueChain Binance Coin'
  },
  {
    value: { id: '8749', name: 'TrumpCoin Bitcoin', decimal: '8', symbol: 'TRUMP/BTC' },
    label: 'TRUMP/BTC, TrumpCoin Bitcoin'
  },
  {
    value: { id: '8750', name: 'TRON Bitcoin', decimal: '8', symbol: 'TRX/BTC' },
    label: 'TRX/BTC, TRON Bitcoin'
  },
  {
    value: { id: '8751', name: 'TRON Chinese Yuan', decimal: '5', symbol: 'TRX/CNY' },
    label: 'TRX/CNY, TRON Chinese Yuan'
  },
  {
    value: {
      id: '8752',
      name: 'Tattoocoin (Standard Edition) Bitcoin',
      decimal: '8',
      symbol: 'TSE/BTC'
    },
    label: 'TSE/BTC, Tattoocoin (Standard Edition) Bitcoin'
  },
  {
    value: {
      id: '8753',
      name: 'Tattoocoin (Standard Edition) US Dollar',
      decimal: '6',
      symbol: 'TSE/USD'
    },
    label: 'TSE/USD, Tattoocoin (Standard Edition) US Dollar'
  },
  {
    value: { id: '8754', name: 'Tesra US Dollar', decimal: '5', symbol: 'TSR/USD' },
    label: 'TSR/USD, Tesra US Dollar'
  },
  {
    value: { id: '8755', name: 'BitTube Bitcoin', decimal: '8', symbol: 'TUBE/BTC' },
    label: 'TUBE/BTC, BitTube Bitcoin'
  },
  {
    value: { id: '8756', name: 'BitTube US Dollar', decimal: '6', symbol: 'TUBE/USD' },
    label: 'TUBE/USD, BitTube US Dollar'
  },
  {
    value: { id: '8757', name: 'TrueUSD Bitcoin', decimal: '8', symbol: 'TUSD/BTC' },
    label: 'TUSD/BTC, TrueUSD Bitcoin'
  },
  {
    value: { id: '8758', name: 'TrueUSD Ethereum', decimal: '8', symbol: 'TUSD/ETH' },
    label: 'TUSD/ETH, TrueUSD Ethereum'
  },
  {
    value: { id: '8759', name: 'TransferCoin Bitcoin', decimal: '7', symbol: 'TX/BTC' },
    label: 'TX/BTC, TransferCoin Bitcoin'
  },
  {
    value: { id: '8760', name: 'TrezarCoin Bitcoin', decimal: '8', symbol: 'TZC/BTC' },
    label: 'TZC/BTC, TrezarCoin Bitcoin'
  },
  {
    value: { id: '8761', name: 'Unibright Bitcoin', decimal: '8', symbol: 'UBT/BTC' },
    label: 'UBT/BTC, Unibright Bitcoin'
  },
  {
    value: { id: '8762', name: 'United Bitcoin Bitcoin', decimal: '6', symbol: 'UBTC/BTC' },
    label: 'UBTC/BTC, United Bitcoin Bitcoin'
  },
  {
    value: { id: '8763', name: 'United Bitcoin US Dollar', decimal: '4', symbol: 'UBTC/USD' },
    label: 'UBTC/USD, United Bitcoin US Dollar'
  },
  {
    value: { id: '8764', name: 'UCA Coin Bitcoin', decimal: '8', symbol: 'UCA/BTC' },
    label: 'UCA/BTC, UCA Coin Bitcoin'
  },
  {
    value: { id: '8765', name: 'UCA Coin US Dollar', decimal: '6', symbol: 'UCA/USD' },
    label: 'UCA/USD, UCA Coin US Dollar'
  },
  {
    value: { id: '8766', name: 'ugChain Bitcoin', decimal: '8', symbol: 'UGC/BTC' },
    label: 'UGC/BTC, ugChain Bitcoin'
  },
  {
    value: { id: '8767', name: 'ugChain US Dollar', decimal: '6', symbol: 'UGC/USD' },
    label: 'UGC/USD, ugChain US Dollar'
  },
  {
    value: { id: '8768', name: 'Unitus Bitcoin', decimal: '8', symbol: 'UIS/BTC' },
    label: 'UIS/BTC, Unitus Bitcoin'
  },
  {
    value: { id: '8769', name: 'Unikoin Gold Bitcoin', decimal: '8', symbol: 'UKG/BTC' },
    label: 'UKG/BTC, Unikoin Gold Bitcoin'
  },
  {
    value: { id: '8770', name: 'UMA Bitcoin', decimal: '8', symbol: 'UMA/BTC' },
    label: 'UMA/BTC, UMA Bitcoin'
  },
  {
    value: { id: '8771', name: 'UMA US Dollar', decimal: '4', symbol: 'UMA/USD' },
    label: 'UMA/USD, UMA US Dollar'
  },
  {
    value: { id: '8772', name: 'Unify Bitcoin', decimal: '8', symbol: 'UNIFY/BTC' },
    label: 'UNIFY/BTC, Unify Bitcoin'
  },
  {
    value: { id: '8773', name: 'Uniswap Bitcoin', decimal: '8', symbol: 'UNIs/BTC' },
    label: 'UNIs/BTC, Uniswap Bitcoin'
  },
  {
    value: { id: '8774', name: 'Uniswap US Dollar', decimal: '4', symbol: 'UNIs/USD' },
    label: 'UNIs/USD, Uniswap US Dollar'
  },
  {
    value: { id: '8775', name: 'Universal Currency Bitcoin', decimal: '6', symbol: 'UNIT/BTC' },
    label: 'UNIT/BTC, Universal Currency Bitcoin'
  },
  {
    value: { id: '8776', name: 'GameUnits Bitcoin', decimal: '8', symbol: 'UNITS/BTC' },
    label: 'UNITS/BTC, GameUnits Bitcoin'
  },
  {
    value: { id: '8777', name: 'Ultimate Secure Cash Bitcoin', decimal: '8', symbol: 'USC/BTC' },
    label: 'USC/BTC, Ultimate Secure Cash Bitcoin'
  },
  {
    value: { id: '8778', name: 'US Dollar Binance Coin', decimal: '6', symbol: 'USD/BNB' },
    label: 'USD/BNB, US Dollar Binance Coin'
  },
  {
    value: { id: '8779', name: 'US Dollar Waves', decimal: '4', symbol: 'USD/WAVES' },
    label: 'USD/WAVES, US Dollar Waves'
  },
  {
    value: { id: '8780', name: 'USD Coin Bitcoin', decimal: '8', symbol: 'USDC/BTC' },
    label: 'USDC/BTC, USD Coin Bitcoin'
  },
  {
    value: { id: '8781', name: 'Tether Turkish Lira', decimal: '2', symbol: 'USDT/TRY' },
    label: 'USDT/TRY, Tether Turkish Lira'
  },
  {
    value: { id: '8782', name: 'NuBits US Dollar', decimal: '5', symbol: 'USNBT/USD' },
    label: 'USNBT/USD, NuBits US Dollar'
  },
  {
    value: { id: '8783', name: 'Universa Bitcoin', decimal: '8', symbol: 'UTNP/BTC' },
    label: 'UTNP/BTC, Universa Bitcoin'
  },
  {
    value: { id: '8784', name: 'Universa Ethereum', decimal: '8', symbol: 'UTNP/ETH' },
    label: 'UTNP/ETH, Universa Ethereum'
  },
  {
    value: { id: '8785', name: 'Version Bitcoin', decimal: '8', symbol: 'V/BTC' },
    label: 'V/BTC, Version Bitcoin'
  },
  {
    value: { id: '8786', name: 'BLOCKv Bitcoin', decimal: '8', symbol: 'VEE/BTC' },
    label: 'VEE/BTC, BLOCKv Bitcoin'
  },
  {
    value: { id: '8787', name: 'BLOCKv US Dollar', decimal: '6', symbol: 'VEE/USD' },
    label: 'VEE/USD, BLOCKv US Dollar'
  },
  {
    value: { id: '8788', name: 'Veritaseum Bitcoin', decimal: '6', symbol: 'VERI/BTC' },
    label: 'VERI/BTC, Veritaseum Bitcoin'
  },
  {
    value: { id: '8789', name: 'Veritaseum Ethereum', decimal: '6', symbol: 'VERI/ETH' },
    label: 'VERI/ETH, Veritaseum Ethereum'
  },
  {
    value: { id: '8790', name: 'Veritaseum US Dollar', decimal: '3', symbol: 'VERI/USD' },
    label: 'VERI/USD, Veritaseum US Dollar'
  },
  {
    value: { id: '8791', name: 'PureVidz Bitcoin', decimal: '8', symbol: 'VIDZ/BTC' },
    label: 'VIDZ/BTC, PureVidz Bitcoin'
  },
  {
    value: { id: '8792', name: 'VITE Bitcoin', decimal: '8', symbol: 'VITE/BTC' },
    label: 'VITE/BTC, VITE Bitcoin'
  },
  {
    value: { id: '8793', name: 'V-Dimension Bitcoin', decimal: '8', symbol: 'VOLLAR/BTC' },
    label: 'VOLLAR/BTC, V-Dimension Bitcoin'
  },
  {
    value: { id: '8794', name: 'V-Dimension Ethereum', decimal: '6', symbol: 'VOLLAR/ETH' },
    label: 'VOLLAR/ETH, V-Dimension Ethereum'
  },
  {
    value: { id: '8795', name: 'V-Dimension US Dollar', decimal: '4', symbol: 'VOLLAR/USD' },
    label: 'VOLLAR/USD, V-Dimension US Dollar'
  },
  {
    value: { id: '8796', name: 'VeriumReserve Bitcoin', decimal: '6', symbol: 'VRM/BTC' },
    label: 'VRM/BTC, VeriumReserve Bitcoin'
  },
  {
    value: { id: '8797', name: 'vSlice Bitcoin', decimal: '8', symbol: 'VSL/BTC' },
    label: 'VSL/BTC, vSlice Bitcoin'
  },
  {
    value: { id: '8798', name: 'VULCANO Bitcoin', decimal: '8', symbol: 'VULC/BTC' },
    label: 'VULC/BTC, VULCANO Bitcoin'
  },
  {
    value: { id: '8799', name: 'Waves Bitcoin Cash', decimal: '5', symbol: 'WAVES/BCH' },
    label: 'WAVES/BCH, Waves Bitcoin Cash'
  },
  {
    value: { id: '8800', name: 'Waves Euro', decimal: '4', symbol: 'WAVES/EUR' },
    label: 'WAVES/EUR, Waves Euro'
  },
  {
    value: { id: '8801', name: 'Waves Korean Won', decimal: '2', symbol: 'WAVES/KRW' },
    label: 'WAVES/KRW, Waves Korean Won'
  },
  {
    value: { id: '8802', name: 'Waves Turkish Lira', decimal: '2', symbol: 'WAVES/TRY' },
    label: 'WAVES/TRY, Waves Turkish Lira'
  },
  {
    value: { id: '8803', name: 'Waves US Dollar', decimal: '4', symbol: 'WAVES/USD' },
    label: 'WAVES/USD, Waves US Dollar'
  },
  {
    value: { id: '8804', name: 'Wrapped Bitcoin Bitcoin', decimal: '4', symbol: 'WBTC/BTC' },
    label: 'WBTC/BTC, Wrapped Bitcoin Bitcoin'
  },
  {
    value: { id: '8805', name: 'Wrapped Bitcoin US Dollar', decimal: '2', symbol: 'WBTC/USD' },
    label: 'WBTC/USD, Wrapped Bitcoin US Dollar'
  },
  {
    value: { id: '8806', name: 'WiBX Brazil Real', decimal: '5', symbol: 'WBX/BRL' },
    label: 'WBX/BRL, WiBX Brazil Real'
  },
  {
    value: { id: '8807', name: 'WiBX Bitcoin', decimal: '8', symbol: 'WBX/BTC' },
    label: 'WBX/BTC, WiBX Bitcoin'
  },
  {
    value: { id: '8808', name: 'WiBX US Dollar', decimal: '6', symbol: 'WBX/USD' },
    label: 'WBX/USD, WiBX US Dollar'
  },
  {
    value: { id: '8809', name: 'WINCOIN Bitcoin', decimal: '8', symbol: 'WC/BTC' },
    label: 'WC/BTC, WINCOIN Bitcoin'
  },
  {
    value: { id: '8810', name: 'WorldCoin Bitcoin', decimal: '8', symbol: 'WDC/BTC' },
    label: 'WDC/BTC, WorldCoin Bitcoin'
  },
  {
    value: { id: '8811', name: 'WaykiChain Binance Coin', decimal: '6', symbol: 'WICC/BNB' },
    label: 'WICC/BNB, WaykiChain Binance Coin'
  },
  {
    value: { id: '8812', name: 'Wild Crypto Bitcoin', decimal: '8', symbol: 'WILD/BTC' },
    label: 'WILD/BTC, Wild Crypto Bitcoin'
  },
  {
    value: { id: '8813', name: 'Wild Crypto Ethereum', decimal: '8', symbol: 'WILD/ETH' },
    label: 'WILD/ETH, Wild Crypto Ethereum'
  },
  {
    value: { id: '8814', name: 'Wings Ethereum', decimal: '6', symbol: 'WINGS/ETH' },
    label: 'WINGS/ETH, Wings Ethereum'
  },
  {
    value: { id: '8815', name: 'Wings US Dollar', decimal: '5', symbol: 'WINGS/USD' },
    label: 'WINGS/USD, Wings US Dollar'
  },
  {
    value: { id: '8816', name: 'MyWish Binance Coin', decimal: '6', symbol: 'WISH/BNB' },
    label: 'WISH/BNB, MyWish Binance Coin'
  },
  {
    value: { id: '8817', name: 'EFFORCE Ethereum', decimal: '7', symbol: 'WOZX/ETH' },
    label: 'WOZX/ETH, EFFORCE Ethereum'
  },
  {
    value: { id: '8818', name: 'EFFORCE US Dollar', decimal: '4', symbol: 'WOZX/USD' },
    label: 'WOZX/USD, EFFORCE US Dollar'
  },
  {
    value: { id: '8819', name: 'WePower Indian Rupee', decimal: '2', symbol: 'WPR/INR' },
    label: 'WPR/INR, WePower Indian Rupee'
  },
  {
    value: { id: '8820', name: 'WePower US Dollar', decimal: '6', symbol: 'WPR/USD' },
    label: 'WPR/USD, WePower US Dollar'
  },
  {
    value: { id: '8821', name: 'Worldcore Bitcoin', decimal: '8', symbol: 'WRC/BTC' },
    label: 'WRC/BTC, Worldcore Bitcoin'
  },
  {
    value: { id: '8822', name: 'Worldcore Ethereum', decimal: '8', symbol: 'WRC/ETH' },
    label: 'WRC/ETH, Worldcore Ethereum'
  },
  {
    value: { id: '8823', name: 'Worldcore US Dollar', decimal: '6', symbol: 'WRC/USD' },
    label: 'WRC/USD, Worldcore US Dollar'
  },
  {
    value: { id: '8824', name: 'WazirX Bitcoin', decimal: '8', symbol: 'WRX/BTC' },
    label: 'WRX/BTC, WazirX Bitcoin'
  },
  {
    value: { id: '8825', name: 'WazirX US Dollar', decimal: '6', symbol: 'WRX/USD' },
    label: 'WRX/USD, WazirX US Dollar'
  },
  {
    value: { id: '8826', name: 'Waltonchain XRP', decimal: '3', symbol: 'WTC/XRP' },
    label: 'WTC/XRP, Waltonchain XRP'
  },
  {
    value: { id: '8827', name: 'Giga Watt Token Ethereum', decimal: '6', symbol: 'WTT/ETH' },
    label: 'WTT/ETH, Giga Watt Token Ethereum'
  },
  {
    value: { id: '8828', name: 'Wirex Token Bitcoin', decimal: '8', symbol: 'WXT/BTC' },
    label: 'WXT/BTC, Wirex Token Bitcoin'
  },
  {
    value: { id: '8829', name: 'Wirex Token US Dollar', decimal: '6', symbol: 'WXT/USD' },
    label: 'WXT/USD, Wirex Token US Dollar'
  },
  {
    value: { id: '8830', name: 'X2 Russian Ruble', decimal: '5', symbol: 'X2/RUB' },
    label: 'X2/RUB, X2 Russian Ruble'
  },
  {
    value: { id: '8831', name: 'Asch Bitcoin', decimal: '8', symbol: 'XAS/BTC' },
    label: 'XAS/BTC, Asch Bitcoin'
  },
  {
    value: { id: '8832', name: 'Xaurum Bitcoin', decimal: '8', symbol: 'XAUR/BTC' },
    label: 'XAUR/BTC, Xaurum Bitcoin'
  },
  {
    value: { id: '8833', name: 'Bitcoin Plus Bitcoin', decimal: '6', symbol: 'XBC/BTC' },
    label: 'XBC/BTC, Bitcoin Plus Bitcoin'
  },
  {
    value: { id: '8834', name: 'Bitcoin Plus US Dollar', decimal: '4', symbol: 'XBC/USD' },
    label: 'XBC/USD, Bitcoin Plus US Dollar'
  },
  {
    value: { id: '8835', name: 'XTRABYTES Bitcoin', decimal: '8', symbol: 'XBY/BTC' },
    label: 'XBY/BTC, XTRABYTES Bitcoin'
  },
  {
    value: { id: '8836', name: 'Cryptonite Bitcoin', decimal: '8', symbol: 'XCN/BTC' },
    label: 'XCN/BTC, Cryptonite Bitcoin'
  },
  {
    value: { id: '8837', name: 'X-Coin Bitcoin', decimal: '8', symbol: 'XCO/BTC' },
    label: 'XCO/BTC, X-Coin Bitcoin'
  },
  {
    value: { id: '8838', name: 'CoinonatX Bitcoin', decimal: '8', symbol: 'XCXT/BTC' },
    label: 'XCXT/BTC, CoinonatX Bitcoin'
  },
  {
    value: { id: '8839', name: 'XGOX US Dollar', decimal: '6', symbol: 'XGOX/USD' },
    label: 'XGOX/USD, XGOX US Dollar'
  },
  {
    value: { id: '8840', name: 'Joulecoin Bitcoin', decimal: '8', symbol: 'XJO/BTC' },
    label: 'XJO/BTC, Joulecoin Bitcoin'
  },
  {
    value: { id: '8841', name: 'Stellar Brazil Real', decimal: '6', symbol: 'XLM/BRL' },
    label: 'XLM/BRL, Stellar Brazil Real'
  },
  {
    value: { id: '8842', name: 'Stellar Chinese Yuan', decimal: '5', symbol: 'XLM/CNY' },
    label: 'XLM/CNY, Stellar Chinese Yuan'
  },
  {
    value: { id: '8843', name: 'Stellar British Pound', decimal: '5', symbol: 'XLM/GBP' },
    label: 'XLM/GBP, Stellar British Pound'
  },
  {
    value: { id: '8844', name: 'ALQO Bitcoin', decimal: '8', symbol: 'XLQ/BTC' },
    label: 'XLQ/BTC, ALQO Bitcoin'
  },
  {
    value: { id: '8845', name: 'Monoeci Bitcoin', decimal: '8', symbol: 'XMCC/BTC' },
    label: 'XMCC/BTC, Monoeci Bitcoin'
  },
  {
    value: { id: '8846', name: 'Magi Bitcoin', decimal: '8', symbol: 'XMG/BTC' },
    label: 'XMG/BTC, Magi Bitcoin'
  },
  {
    value: { id: '8847', name: 'Monero Binance Coin', decimal: '3', symbol: 'XMR/BNB' },
    label: 'XMR/BNB, Monero Binance Coin'
  },
  {
    value: { id: '8848', name: 'Insolar Bitcoin', decimal: '8', symbol: 'XNS/BTC' },
    label: 'XNS/BTC, Insolar Bitcoin'
  },
  {
    value: { id: '8849', name: 'Experience Points Bitcoin', decimal: '8', symbol: 'XP/BTC' },
    label: 'XP/BTC, Experience Points Bitcoin'
  },
  {
    value: { id: '8850', name: 'PlatinumBAR Bitcoin', decimal: '6', symbol: 'XPTX/BTC' },
    label: 'XPTX/BTC, PlatinumBAR Bitcoin'
  },
  {
    value: { id: '8851', name: 'Ratecoin Bitcoin', decimal: '8', symbol: 'XRA/BTC' },
    label: 'XRA/BTC, Ratecoin Bitcoin'
  },
  {
    value: { id: '8852', name: 'Rialto Bitcoin', decimal: '8', symbol: 'XRL/BTC' },
    label: 'XRL/BTC, Rialto Bitcoin'
  },
  {
    value: { id: '8853', name: 'XRP Argentinian Peso', decimal: '2', symbol: 'XRP/ARS' },
    label: 'XRP/ARS, XRP Argentinian Peso'
  },
  {
    value: { id: '8854', name: 'XRP Bitcoin', decimal: '8', symbol: 'XRP/BTC' },
    label: 'XRP/BTC, XRP Bitcoin'
  },
  {
    value: { id: '8855', name: 'XRP Nigerian Naira', decimal: '2', symbol: 'XRP/NGN' },
    label: 'XRP/NGN, XRP Nigerian Naira'
  },
  {
    value: { id: '8856', name: 'XRP Thai Baht', decimal: '2', symbol: 'XRP/THB' },
    label: 'XRP/THB, XRP Thai Baht'
  },
  {
    value: { id: '8857', name: 'SHIELD Bitcoin', decimal: '8', symbol: 'XSH/BTC' },
    label: 'XSH/BTC, SHIELD Bitcoin'
  },
  {
    value: { id: '8858', name: 'Tezos Brazil Real', decimal: '4', symbol: 'XTZ/BRL' },
    label: 'XTZ/BRL, Tezos Brazil Real'
  },
  {
    value: { id: '8859', name: 'Tezos Bitcoin', decimal: '8', symbol: 'XTZ/BTC' },
    label: 'XTZ/BTC, Tezos Bitcoin'
  },
  {
    value: { id: '8860', name: 'Tezos Canadian Dollar', decimal: '4', symbol: 'XTZ/CAD' },
    label: 'XTZ/CAD, Tezos Canadian Dollar'
  },
  {
    value: { id: '8861', name: 'Tezos Turkish Lira', decimal: '2', symbol: 'XTZ/TRY' },
    label: 'XTZ/TRY, Tezos Turkish Lira'
  },
  {
    value: { id: '8862', name: 'Verge Bitcoin Cash', decimal: '6', symbol: 'XVG/BCH' },
    label: 'XVG/BCH, Verge Bitcoin Cash'
  },
  {
    value: { id: '8863', name: 'Verge Bitcoin', decimal: '8', symbol: 'XVG/BTC' },
    label: 'XVG/BTC, Verge Bitcoin'
  },
  {
    value: { id: '8864', name: 'XYO Bitcoin', decimal: '8', symbol: 'XYO/BTC' },
    label: 'XYO/BTC, XYO Bitcoin'
  },
  {
    value: { id: '8865', name: 'Zcoin Thai Baht', decimal: '2', symbol: 'XZC/THB' },
    label: 'XZC/THB, Zcoin Thai Baht'
  },
  {
    value: { id: '8866', name: 'yearn.finance Bitcoin', decimal: '6', symbol: 'YFI/BTC' },
    label: 'YFI/BTC, yearn.finance Bitcoin'
  },
  {
    value: { id: '8867', name: 'yearn.finance US Dollar', decimal: '2', symbol: 'YFI/USD' },
    label: 'YFI/USD, yearn.finance US Dollar'
  },
  {
    value: { id: '8868', name: 'Zap Bitcoin', decimal: '8', symbol: 'ZAP/BTC' },
    label: 'ZAP/BTC, Zap Bitcoin'
  },
  {
    value: { id: '8869', name: 'ZB Token US Dollar', decimal: '4', symbol: 'ZB/USD' },
    label: 'ZB/USD, ZB Token US Dollar'
  },
  {
    value: { id: '8870', name: 'ZClassic Bitcoin', decimal: '8', symbol: 'ZCL/BTC' },
    label: 'ZCL/BTC, ZClassic Bitcoin'
  },
  {
    value: { id: '8871', name: 'Zebi Ethereum', decimal: '8', symbol: 'ZCO/ETH' },
    label: 'ZCO/ETH, Zebi Ethereum'
  },
  {
    value: { id: '8872', name: 'Zeitcoin Dogecoin', decimal: '6', symbol: 'ZEIT/DOGE' },
    label: 'ZEIT/DOGE, Zeitcoin Dogecoin'
  },
  {
    value: { id: '8873', name: 'Zero Bitcoin', decimal: '8', symbol: 'ZER/BTC' },
    label: 'ZER/BTC, Zero Bitcoin'
  },
  {
    value: { id: '8874', name: 'Zilliqa Korean Won', decimal: '2', symbol: 'ZIL/KRW' },
    label: 'ZIL/KRW, Zilliqa Korean Won'
  },
  {
    value: { id: '8875', name: 'Zilliqa Thai Baht', decimal: '2', symbol: 'ZIL/THB' },
    label: 'ZIL/THB, Zilliqa Thai Baht'
  },
  {
    value: { id: '8876', name: 'Zenon Bitcoin', decimal: '8', symbol: 'ZNN/BTC' },
    label: 'ZNN/BTC, Zenon Bitcoin'
  },
  {
    value: { id: '8877', name: 'Zenon US Dollar', decimal: '2', symbol: 'ZNN/USD' },
    label: 'ZNN/USD, Zenon US Dollar'
  },
  {
    value: { id: '8878', name: 'Bitzeny Bitcoin', decimal: '8', symbol: 'ZNY/BTC' },
    label: 'ZNY/BTC, Bitzeny Bitcoin'
  },
  {
    value: { id: '8879', name: 'Zeepin US Dollar', decimal: '5', symbol: 'ZPT/USD' },
    label: 'ZPT/USD, Zeepin US Dollar'
  },
  {
    value: { id: '8880', name: '0x Turkish Lira', decimal: '3', symbol: 'ZRX/TRY' },
    label: 'ZRX/TRY, 0x Turkish Lira'
  },
  {
    value: { id: '8881', name: 'Zeusshield Ethereum', decimal: '8', symbol: 'ZSC/ETH' },
    label: 'ZSC/ETH, Zeusshield Ethereum'
  },
  {
    value: { id: '8882', name: 'SHIBA INU US Dollar', decimal: '8', symbol: 'SHIB/USD' },
    label: 'SHIB/USD, SHIBA INU US Dollar'
  }
];

export default cryptoOptions;
