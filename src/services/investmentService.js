import axios from 'axios';
import usStockSymbols from './data/usStocksFCS';
import cryptoSymbols from './data/cryptoFCS';

const serverURL = `${process.env.REACT_APP_SERVER_URL}/api/v1/assets/`;

const getOwnedAssets = () => {
  return axios.get(serverURL);
};

// Configure asset object based on type
const addAsset = (assetData) => {
  return axios.post(serverURL, assetData);
};

const findStockSymbol = (keyword) => {
  const key = keyword.toLowerCase();
  const results = usStockSymbols.filter(
    function (stock) {
      if (
        this.count < 10 &&
        (stock.name.toLowerCase().startsWith(key) || stock.short_name.toLowerCase().startsWith(key))
      ) {
        this.count++;
        return true;
      }
      return false;
    },
    { count: 0 }
  );
  return results.length > 0 ? results : null;
};

const findCryptoSymbol = (keyword) => {
  const key = keyword.toLowerCase();
  const results = cryptoSymbols.filter(
    function (coin) {
      if (
        this.count < 10 &&
        (coin.name.toLowerCase().startsWith(key) || coin.symbol.toLowerCase().startsWith(key))
      ) {
        this.count++;
        return true;
      }
      return false;
    },
    { count: 0 }
  );
  return results.length > 0 ? results : null;
};

// Not the best practice of using API key in URL, but it is free (temporary solution)
const searchStockAPI = (keyword) => {
  const url = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${keyword}&apikey=${process.env.REACT_APP_ALPHA_KEY}`;
  // { headers: { 'User-Agent': 'request' } }
  return axios.get(url);
};

const searchCryptoAPI = (keyword) => {
  return axios.get(`https://api.coingecko.com/api/v3/search?query=${keyword}`);
};

const trendingCrypto = () => axios.get('https://api.coingecko.com/api/v3/search/trending');

export {
  findCryptoSymbol,
  findStockSymbol,
  searchStockAPI,
  searchCryptoAPI,
  trendingCrypto,
  getOwnedAssets,
  addAsset,
  serverURL
};
