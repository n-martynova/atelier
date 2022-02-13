import Vue from 'vue';
import YmapPlugin from 'vue-yandex-maps';

export default ({ $config: { yandexApiKey } }) => {
  const settings = {
    apiKey: yandexApiKey,
    lang: 'ru_RU',
    coordorder: 'latlong',
    enterprise: false,
    version: '2.1.79'
  };

  Vue.use(YmapPlugin, settings);
};
