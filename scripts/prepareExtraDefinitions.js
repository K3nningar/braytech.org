// Used to extract node information from lowlines' helpful API endpoint
// at https://lowlidev.com.au/destiny/api/v2/map/supported so that we don't
// need to embed the entire file inside the application.

const fs = require('fs');
const fetch = require('node-fetch');

const outputPath = lang => `src/data/manifest/${lang}/DestinyHistoricalStatsDefinition/index.json`;

let langs = [];

function historicalStats() {
  langs.forEach(lang => {
    try {
      fetch(`https://api.tyra-karn.com/DestinyManifest/mobileWorldContentPaths/${lang}/DestinyHistoricalStatsDefinition`, {
        headers: {
          accept: 'application/json'
        }
      })
        .then(res => res.json())
        .catch(e => console.warn(`${lang}: ${e}`))
        .then(json => {
          fs.writeFileSync(outputPath(lang), JSON.stringify(json), { flag: 'w' });
        });
    } catch (e) {
      console.warn(`${lang}: ${e}`);
    }
  });
}

fetch(`https://api.tyra-karn.com/DestinyManifest/`, {
  headers: {
    accept: 'application/json'
  }
})
  .then(res => res.json())
  .then(json => {
    langs = Object.keys(json.jsonWorldContentPaths);
    historicalStats();
  });

fetch(`https://api.tyra-karn.com/DestinyManifest/mobileClanBannerDatabasePath`, {
  headers: {
    accept: 'application/json'
  }
})
  .then(res => res.json())
  .then(json => {
    fs.writeFileSync(`src/data/manifest/en/DestinyClanBannerDefinition/index.json`, JSON.stringify(json._embedded), { flag: 'w' });
  });