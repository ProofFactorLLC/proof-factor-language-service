import * as ES6Promise from 'es6-promise';
ES6Promise.polyfill();
import * as timeago from 'timeago.js';
var ProofFactorLanguageService = /** @class */ (function () {
    function ProofFactorLanguageService() {
        this.registeredLocales = [];
    }
    ProofFactorLanguageService.ago = function (value, locale) {
        return locale ? timeago.format(value, locale) : timeago.format(value);
    };
    ProofFactorLanguageService.loadLocaleFunction = function (locale) {
        switch (locale) {
            case 'de':
                return import(/* webpackChunkName: "i18n-time-de" */ './i18n/time/de');
            case 'ar':
                return import(
                /* webpackChunkName: "i18n-time-ar" */ 'timeago.js/lib/lang/ar');
            case 'be':
                return import(
                /* webpackChunkName: "i18n-time-be" */ 'timeago.js/lib/lang/be');
            case 'bg':
                return import(
                /* webpackChunkName: "i18n-time-bg" */ 'timeago.js/lib/lang/bg');
            case 'bn_IN':
                return import(
                /* webpackChunkName: "i18n-time-bn_IN" */ 'timeago.js/lib/lang/bn_IN');
            case 'ca':
                return import(
                /* webpackChunkName: "i18n-time-ca" */ 'timeago.js/lib/lang/ca');
            case 'da':
                return import(
                /* webpackChunkName: "i18n-time-da" */ 'timeago.js/lib/lang/da');
            case 'el':
                return import(
                /* webpackChunkName: "i18n-time-el" */ 'timeago.js/lib/lang/el');
            case 'en_short':
                return import(
                /* webpackChunkName: "i18n-time-en_short" */ 'timeago.js/lib/lang/en_short');
            case 'es':
                return import(
                /* webpackChunkName: "i18n-time-es" */ 'timeago.js/lib/lang/es');
            case 'eu':
                return import(
                /* webpackChunkName: "i18n-time-eu" */ 'timeago.js/lib/lang/eu');
            case 'fa':
                return import(
                /* webpackChunkName: "i18n-time-fa" */ 'timeago.js/lib/lang/fa');
            case 'fi':
                return import(
                /* webpackChunkName: "i18n-time-fi" */ 'timeago.js/lib/lang/fi');
            case 'fr':
                return import(
                /* webpackChunkName: "i18n-time-fr" */ 'timeago.js/lib/lang/fr');
            case 'gl':
                return import(
                /* webpackChunkName: "i18n-time-gl" */ 'timeago.js/lib/lang/gl');
            case 'he':
                return import(
                /* webpackChunkName: "i18n-time-he" */ 'timeago.js/lib/lang/he');
            case 'hi_IN':
                return import(
                /* webpackChunkName: "i18n-time-hi_IN" */ 'timeago.js/lib/lang/hi_IN');
            case 'hu':
                return import(
                /* webpackChunkName: "i18n-time-hu" */ 'timeago.js/lib/lang/hu');
            case 'it':
                return import(
                /* webpackChunkName: "i18n-time-it" */ 'timeago.js/lib/lang/it');
            case 'ja':
                return import(
                /* webpackChunkName: "i18n-time-ja" */ 'timeago.js/lib/lang/ja');
            case 'ka':
                return import(
                /* webpackChunkName: "i18n-time-ka" */ 'timeago.js/lib/lang/ka');
            case 'ko':
                return import(
                /* webpackChunkName: "i18n-time-ko" */ 'timeago.js/lib/lang/ko');
            case 'ml':
                return import(
                /* webpackChunkName: "i18n-time-ml" */ 'timeago.js/lib/lang/ml');
            case 'my':
                return import(
                /* webpackChunkName: "i18n-time-my" */ 'timeago.js/lib/lang/my');
            case 'nb_NO':
                return import(
                /* webpackChunkName: "i18n-time-nb_NO" */ 'timeago.js/lib/lang/nb_NO');
            case 'nl':
                return import(
                /* webpackChunkName: "i18n-time-nl" */ 'timeago.js/lib/lang/nl');
            case 'nn_NO':
                return import(
                /* webpackChunkName: "i18n-time-nn_NO" */ 'timeago.js/lib/lang/nn_NO');
            case 'pl':
                return import(
                /* webpackChunkName: "i18n-time-pl" */ 'timeago.js/lib/lang/pl');
            case 'pt_BR':
                return import(
                /* webpackChunkName: "i18n-time-pt_BR" */ 'timeago.js/lib/lang/pt_BR');
            case 'ro':
                return import(
                /* webpackChunkName: "i18n-time-ro" */ 'timeago.js/lib/lang/ro');
            case 'ru':
                return import(
                /* webpackChunkName: "i18n-time-ru" */ 'timeago.js/lib/lang/ru');
            case 'sq':
                return import(
                /* webpackChunkName: "i18n-time-sq" */ 'timeago.js/lib/lang/sq');
            case 'sr':
                return import(
                /* webpackChunkName: "i18n-time-sr" */ 'timeago.js/lib/lang/sr');
            case 'sv':
                return import(
                /* webpackChunkName: "i18n-time-sv" */ 'timeago.js/lib/lang/sv');
            case 'ta':
                return import(
                /* webpackChunkName: "i18n-time-ta" */ 'timeago.js/lib/lang/ta');
            case 'th':
                return import(
                /* webpackChunkName: "i18n-time-th" */ 'timeago.js/lib/lang/th');
            case 'tr':
                return import(
                /* webpackChunkName: "i18n-time-tr" */ 'timeago.js/lib/lang/tr');
            case 'uk':
                return import(
                /* webpackChunkName: "i18n-time-uk" */ 'timeago.js/lib/lang/uk');
            case 'vi':
                return import(
                /* webpackChunkName: "i18n-time-vi" */ 'timeago.js/lib/lang/vi');
            case 'zh_CN':
                return import(
                /* webpackChunkName: "i18n-time-zh_CN" */ 'timeago.js/lib/lang/zh_CN');
            case 'zh_TW':
                return import(
                /* webpackChunkName: "i18n-time-zh_TW" */ 'timeago.js/lib/lang/zh_TW');
            default:
                return new Promise(function (resolve, reject) {
                    resolve();
                });
        }
    };
    ProofFactorLanguageService.loadI18n = function (lang) {
        switch (lang) {
            case 'de':
                return import(/* webpackChunkName: "i18n-de" */ './i18n/de');
            case 'es':
                return import(/* webpackChunkName: "i18n-fr" */ './i18n/es');
            case 'pt_BR':
                return import(/* webpackChunkName: "i18n-fr" */ './i18n/pt_BR');
            case 'fr':
                return import(/* webpackChunkName: "i18n-fr" */ './i18n/fr');
            case 'ar':
                return import(/* webpackChunkName: "i18n-ar" */ './i18n/ar');
            case 'ru':
                return import(/* webpackChunkName: "i18n-ru" */ './i18n/ru');
            case 'uk':
                return import(/* webpackChunkName: "i18n-uk" */ './i18n/uk');
            case 'it':
                return import(/* webpackChunkName: "i18n-uk" */ './i18n/it');
            case 'en':
            default:
                return import(/* webpackChunkName: "i18n-en" */ './i18n/en');
        }
    };
    ProofFactorLanguageService.prototype.registerLocale = function (locale) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.registeredLocales.includes(locale)) {
                resolve();
            }
            ProofFactorLanguageService.loadLocaleFunction(locale)
                .then(function (module) {
                var localeFunction = module.default;
                if (localeFunction) {
                    _this.registeredLocales.push(locale);
                    timeago.register(locale, localeFunction);
                }
                resolve();
            })
                .catch(function () { return resolve(); });
        });
    };
    return ProofFactorLanguageService;
}());
export { ProofFactorLanguageService };
//# sourceMappingURL=index.js.map