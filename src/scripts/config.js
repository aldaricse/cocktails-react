
// url
const url = 'https://www.thecocktaildb.com';

const urlAPI = `${url}/api/json/v1/1`;
const urlStorage = `${url}/storage`;

// host local
const host= '//' + window.location.host;

const urlLocalAPI = `${ host }/assets/data`;
const urlStorageLocal = `${ host }/assets/storage`;
const urlImageLocal = `${ host }/assets/images`;

export {
  url,
  urlAPI,
  urlStorage,
  urlLocalAPI,
  urlStorageLocal,
  urlImageLocal
}
