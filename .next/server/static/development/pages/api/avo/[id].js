module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./cors-middleware.ts":
/*!****************************!*\
  !*** ./cors-middleware.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_0__);\n\n\n/**\n * Hey there you curious :)\n *\n * By default, NextJS APIs are same-site origin only.\n * But since *I needed the main project*\n * to have public API access, I had to configure CORS.\n *\n * @see https://github.com/vercel/next.js/tree/canary/examples/api-routes-cors\n * @see https://github.com/expressjs/cors#configuration-options\n */\nconst CORS_OPTIONS = {\n  methods: ['GET', 'OPTIONS']\n};\n\nfunction promisifyMiddleware(middleware) {\n  return (req, res) => new Promise((resolve, reject) => {\n    middleware(req, res, result => {\n      if (result instanceof Error) {\n        return reject(result);\n      }\n\n      return resolve(result);\n    });\n  });\n} // Initialize the cors middleware\n\n\nconst cors = promisifyMiddleware(cors__WEBPACK_IMPORTED_MODULE_0___default()(CORS_OPTIONS));\n/* harmony default export */ __webpack_exports__[\"default\"] = (cors);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb3JzLW1pZGRsZXdhcmUudHM/NzU2NyJdLCJuYW1lcyI6WyJDT1JTX09QVElPTlMiLCJtZXRob2RzIiwicHJvbWlzaWZ5TWlkZGxld2FyZSIsIm1pZGRsZXdhcmUiLCJyZXEiLCJyZXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlc3VsdCIsIkVycm9yIiwiY29ycyIsImNvcnNXcmFwcGVyIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFHQTs7Ozs7Ozs7OztBQVVBLE1BQU1BLFlBQVksR0FBRztBQUNuQkMsU0FBTyxFQUFFLENBQUMsS0FBRCxFQUFRLFNBQVI7QUFEVSxDQUFyQjs7QUFJQSxTQUFTQyxtQkFBVCxDQUE2QkMsVUFBN0IsRUFBeUQ7QUFDdkQsU0FBTyxDQUFDQyxHQUFELEVBQVdDLEdBQVgsS0FDTCxJQUFJQyxPQUFKLENBQVksQ0FBQ0MsT0FBRCxFQUFVQyxNQUFWLEtBQXFCO0FBQy9CTCxjQUFVLENBQUNDLEdBQUQsRUFBTUMsR0FBTixFQUFZSSxNQUFELElBQTZCO0FBQ2hELFVBQUlBLE1BQU0sWUFBWUMsS0FBdEIsRUFBNkI7QUFDM0IsZUFBT0YsTUFBTSxDQUFDQyxNQUFELENBQWI7QUFDRDs7QUFDRCxhQUFPRixPQUFPLENBQUNFLE1BQUQsQ0FBZDtBQUNELEtBTFMsQ0FBVjtBQU1ELEdBUEQsQ0FERjtBQVNELEMsQ0FFRDs7O0FBQ0EsTUFBTUUsSUFBSSxHQUFHVCxtQkFBbUIsQ0FBQ1UsMkNBQVcsQ0FBQ1osWUFBRCxDQUFaLENBQWhDO0FBRWVXLG1FQUFmIiwiZmlsZSI6Ii4vY29ycy1taWRkbGV3YXJlLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvcnNXcmFwcGVyIGZyb20gJ2NvcnMnXG5pbXBvcnQgeyBSZXF1ZXN0SGFuZGxlciB9IGZyb20gJ2V4cHJlc3MnXG5cbi8qKlxuICogSGV5IHRoZXJlIHlvdSBjdXJpb3VzIDopXG4gKlxuICogQnkgZGVmYXVsdCwgTmV4dEpTIEFQSXMgYXJlIHNhbWUtc2l0ZSBvcmlnaW4gb25seS5cbiAqIEJ1dCBzaW5jZSAqSSBuZWVkZWQgdGhlIG1haW4gcHJvamVjdCpcbiAqIHRvIGhhdmUgcHVibGljIEFQSSBhY2Nlc3MsIEkgaGFkIHRvIGNvbmZpZ3VyZSBDT1JTLlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3ZlcmNlbC9uZXh0LmpzL3RyZWUvY2FuYXJ5L2V4YW1wbGVzL2FwaS1yb3V0ZXMtY29yc1xuICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vZXhwcmVzc2pzL2NvcnMjY29uZmlndXJhdGlvbi1vcHRpb25zXG4gKi9cbmNvbnN0IENPUlNfT1BUSU9OUyA9IHtcbiAgbWV0aG9kczogWydHRVQnLCAnT1BUSU9OUyddLFxufVxuXG5mdW5jdGlvbiBwcm9taXNpZnlNaWRkbGV3YXJlKG1pZGRsZXdhcmU6IFJlcXVlc3RIYW5kbGVyKSB7XG4gIHJldHVybiAocmVxOiBhbnksIHJlczogYW55KSA9PlxuICAgIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIG1pZGRsZXdhcmUocmVxLCByZXMsIChyZXN1bHQ6IEVycm9yIHwgdW5rbm93bikgPT4ge1xuICAgICAgICBpZiAocmVzdWx0IGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gcmVqZWN0KHJlc3VsdClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzb2x2ZShyZXN1bHQpXG4gICAgICB9KVxuICAgIH0pXG59XG5cbi8vIEluaXRpYWxpemUgdGhlIGNvcnMgbWlkZGxld2FyZVxuY29uc3QgY29ycyA9IHByb21pc2lmeU1pZGRsZXdhcmUoY29yc1dyYXBwZXIoQ09SU19PUFRJT05TKSlcblxuZXhwb3J0IGRlZmF1bHQgY29yc1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./cors-middleware.ts\n");

/***/ }),

/***/ "./database/data.ts":
/*!**************************!*\
  !*** ./database/data.ts ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst data = {\n  '2zd33b8c': {\n    name: 'Maluma Hass Avocado',\n    id: '2zd33b8c',\n    sku: 'NUR72KCM',\n    price: 1.15,\n    image: '/images/maluma.jpg',\n    attributes: {\n      description: 'A relatively new cultivar, it was, the pretty boy baby, discovered in South Africa in the early 1990s by Mr. A.G. (Dries) Joubert. Maluma Babyy. It is a chance seedling of unknown parentage',\n      shape: 'Oval',\n      hardiness: '1 °C',\n      taste: 'Catchy, is an avocado'\n    }\n  },\n  '6trfgkkj': {\n    name: 'Fuerte Avocado',\n    id: '6trfgkkj',\n    sku: 'AX4M8SJV',\n    price: 1.21,\n    image: '/images/fuerte.jpg',\n    attributes: {\n      description: 'The Fuerte avocado is the second largest commercial variety behind Hass. It is a long time California commercial variety valued for its winter season ripening and its B-Type blossom type which most growers plant adjacent to the Hass for a more consistent production cycle. This avocado tends to produce heavily in alternate years.',\n      shape: 'Pear',\n      hardiness: '-1 °C',\n      taste: 'Magnificent, is a strong avocado'\n    }\n  },\n  '7bcr49em': {\n    name: 'Gwen Hass Avocado',\n    id: '7bcr49em',\n    sku: 'HYA78F6J',\n    price: 1.25,\n    image: '/images/gwen.jpg',\n    attributes: {\n      description: \"A seedling bred from 'Hass' x 'Thille' in 1982, 'Gwen' is higher yielding and more dwarfing than 'Hass' in California. The fruit has an oval shape, slightly smaller than 'Hass' (100–200 g or 3.5–7.1 oz), with a rich, nutty flavor. The skin texture is more finely pebbled than 'Hass', and is dull green when ripe. It is frost-hardy down to −1 °C (30 °F)\",\n      shape: 'Plump',\n      hardiness: '−1 °C',\n      taste: 'Superb, is an avocado'\n    }\n  },\n  '098323ks': {\n    name: 'Bacon Avocado',\n    id: '098323ks',\n    sku: 'BXD100BLK',\n    price: 1.51,\n    image: '/images/bacon.jpg',\n    attributes: {\n      description: 'Developed by a farmer, James Bacon, in 1954, Bacon has medium-sized fruit with smooth, green skin with yellow-green, light-tasting flesh. When ripe, the skin remains green, but darkens slightly, and fruit yields to gentle pressure. It is cold-hardy down to −5 °C (23 °F)',\n      shape: 'Oval',\n      hardiness: '−5 °C',\n      taste: 'Creamy, is an avocado'\n    }\n  },\n  b8uthe2y: {\n    name: 'Hass Avocado',\n    id: 'b8uthe2y',\n    sku: 'RMRCZN7E',\n    price: 1.39,\n    image: '/images/hass.jpg',\n    attributes: {\n      description: \"The 'Hass' is the most common cultivar of avocado. It produces fruit year-round and accounts for 80% of cultivated avocados in the world.[21][55] All 'Hass' trees are descended from a single 'mother tree' raised by a mail carrier named Rudolph Hass, of La Habra Heights, California.[20][55] Hass patented the productive tree in 1935. The 'mother tree', of uncertain subspecies, died of root rot and was cut down in September 2002.[21][55][56] 'Hass' trees have medium-sized (150–250 g or 5.3–8.8 oz), ovate fruit with a black, pebbled skin. The flesh has a nutty, rich flavor with 19% oil. A hybrid Guatemalan type can withstand temperatures to −1 °C (30 °F)\",\n      shape: 'Oval',\n      hardiness: '−1 °C',\n      taste: 'Gorgeous, is an avocado'\n    }\n  },\n  ewxsd6xb: {\n    name: 'Lamb Hass Avocado',\n    id: 'ewxsd6xb',\n    sku: 'N55229ZA',\n    price: 1.34,\n    image: '/images/lamb.jpg',\n    attributes: {\n      description: 'The Lamb Hass avocado is a cross between a Hass and Gwen avocado. The fruits are larger in size and later maturing than Hass. It is gaining in popularity as a commercial and backyard variety due to its exceptional flavor and easy peeling qualities. The tree has an upright, compact habit.',\n      shape: 'Obovate',\n      hardiness: '-2 °C',\n      taste: 'Great, is an avocado'\n    }\n  },\n  fpr72m9k: {\n    name: 'Pinkerton Avocado',\n    id: 'fpr72m9k',\n    sku: 'B4HZ42TM',\n    price: 1.27,\n    image: '/images/pinkerton.jpg',\n    attributes: {\n      description: \"First grown on the Pinkerton Ranch in Saticoy, California, in the early 1970s, 'Pinkerton' is a seedling of 'Hass' x 'Rincon'. The large fruit has a small seed, and its green skin deepens in color as it ripens. The thick flesh has a smooth, creamy texture, pale green color, good flavor, and high oil content. It shows some cold tolerance, to −1 °C (30 °F) and bears consistently heavy crops. A hybrid Guatemalan type, it has excellent peeling characteristics\",\n      shape: 'Long pear',\n      hardiness: '−1 °C',\n      taste: 'Marvelous, is an avocado'\n    }\n  },\n  t9dv25gs: {\n    name: 'Reed Avocado',\n    id: 't9dv25gs',\n    sku: 'ZY3T9XXC',\n    price: 1.18,\n    image: '/images/reed.jpg',\n    attributes: {\n      description: 'Developed from a chance seedling found in 1948 by James S. Reed in California, this cultivar has large, round, green fruit with a smooth texture and dark, thick, glossy skin. Smooth and delicate, the flesh has a slightly nutty flavor. The skin ripens green. A Guatemalan type, it is hardy to −1 °C (30 °F). Tree size is about 5 by 4 m (16.4 by 13.1 ft)',\n      shape: 'Round',\n      hardiness: '−1 °C',\n      taste: 'Exquisite, is an avocado'\n    }\n  },\n  t345w48y: {\n    name: 'Zutano Avocado',\n    id: 't345w48y',\n    sku: 'MW79ZZ6Y',\n    price: 1.25,\n    image: '/images/zutano.jpg',\n    attributes: {\n      description: 'The Zutano avocado is a cold hardy, consistent producing avocado variety. It resembles the Fuerte in appearance but is less flavorful but more cold hardy. The green fruits are obovate in shape with waxy bumps on the skin. The flesh has a low oil but high water content which causes it to have a more fibrous texture.',\n      shape: 'Pear',\n      hardiness: '-5 °C',\n      taste: 'Splendid, is an avocado'\n    }\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (data);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kYXRhYmFzZS9kYXRhLnRzPzcxMWEiXSwibmFtZXMiOlsiZGF0YSIsIm5hbWUiLCJpZCIsInNrdSIsInByaWNlIiwiaW1hZ2UiLCJhdHRyaWJ1dGVzIiwiZGVzY3JpcHRpb24iLCJzaGFwZSIsImhhcmRpbmVzcyIsInRhc3RlIiwiYjh1dGhlMnkiLCJld3hzZDZ4YiIsImZwcjcybTlrIiwidDlkdjI1Z3MiLCJ0MzQ1dzQ4eSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxNQUFNQSxJQUFrQyxHQUFHO0FBQ3pDLGNBQVk7QUFDVkMsUUFBSSxFQUFFLHFCQURJO0FBRVZDLE1BQUUsRUFBRSxVQUZNO0FBR1ZDLE9BQUcsRUFBRSxVQUhLO0FBSVZDLFNBQUssRUFBRSxJQUpHO0FBS1ZDLFNBQUssRUFBRSxvQkFMRztBQU1WQyxjQUFVLEVBQUU7QUFDVkMsaUJBQVcsRUFDVCwrTEFGUTtBQUdWQyxXQUFLLEVBQUUsTUFIRztBQUlWQyxlQUFTLEVBQUUsTUFKRDtBQUtWQyxXQUFLLEVBQUU7QUFMRztBQU5GLEdBRDZCO0FBZXpDLGNBQVk7QUFDVlQsUUFBSSxFQUFFLGdCQURJO0FBRVZDLE1BQUUsRUFBRSxVQUZNO0FBR1ZDLE9BQUcsRUFBRSxVQUhLO0FBSVZDLFNBQUssRUFBRSxJQUpHO0FBS1ZDLFNBQUssRUFBRSxvQkFMRztBQU1WQyxjQUFVLEVBQUU7QUFDVkMsaUJBQVcsRUFDVCw0VUFGUTtBQUdWQyxXQUFLLEVBQUUsTUFIRztBQUlWQyxlQUFTLEVBQUUsT0FKRDtBQUtWQyxXQUFLLEVBQUU7QUFMRztBQU5GLEdBZjZCO0FBNkJ6QyxjQUFZO0FBQ1ZULFFBQUksRUFBRSxtQkFESTtBQUVWQyxNQUFFLEVBQUUsVUFGTTtBQUdWQyxPQUFHLEVBQUUsVUFISztBQUlWQyxTQUFLLEVBQUUsSUFKRztBQUtWQyxTQUFLLEVBQUUsa0JBTEc7QUFNVkMsY0FBVSxFQUFFO0FBQ1ZDLGlCQUFXLEVBQ1Qsa1dBRlE7QUFHVkMsV0FBSyxFQUFFLE9BSEc7QUFJVkMsZUFBUyxFQUFFLE9BSkQ7QUFLVkMsV0FBSyxFQUFFO0FBTEc7QUFORixHQTdCNkI7QUEyQ3pDLGNBQVk7QUFDVlQsUUFBSSxFQUFFLGVBREk7QUFFVkMsTUFBRSxFQUFFLFVBRk07QUFHVkMsT0FBRyxFQUFFLFdBSEs7QUFJVkMsU0FBSyxFQUFFLElBSkc7QUFLVkMsU0FBSyxFQUFFLG1CQUxHO0FBTVZDLGNBQVUsRUFBRTtBQUNWQyxpQkFBVyxFQUNULGdSQUZRO0FBR1ZDLFdBQUssRUFBRSxNQUhHO0FBSVZDLGVBQVMsRUFBRSxPQUpEO0FBS1ZDLFdBQUssRUFBRTtBQUxHO0FBTkYsR0EzQzZCO0FBeUR6Q0MsVUFBUSxFQUFFO0FBQ1JWLFFBQUksRUFBRSxjQURFO0FBRVJDLE1BQUUsRUFBRSxVQUZJO0FBR1JDLE9BQUcsRUFBRSxVQUhHO0FBSVJDLFNBQUssRUFBRSxJQUpDO0FBS1JDLFNBQUssRUFBRSxrQkFMQztBQU1SQyxjQUFVLEVBQUU7QUFDVkMsaUJBQVcsRUFDVCxvcEJBRlE7QUFHVkMsV0FBSyxFQUFFLE1BSEc7QUFJVkMsZUFBUyxFQUFFLE9BSkQ7QUFLVkMsV0FBSyxFQUFFO0FBTEc7QUFOSixHQXpEK0I7QUF1RXpDRSxVQUFRLEVBQUU7QUFDUlgsUUFBSSxFQUFFLG1CQURFO0FBRVJDLE1BQUUsRUFBRSxVQUZJO0FBR1JDLE9BQUcsRUFBRSxVQUhHO0FBSVJDLFNBQUssRUFBRSxJQUpDO0FBS1JDLFNBQUssRUFBRSxrQkFMQztBQU1SQyxjQUFVLEVBQUU7QUFDVkMsaUJBQVcsRUFDVCxrU0FGUTtBQUdWQyxXQUFLLEVBQUUsU0FIRztBQUlWQyxlQUFTLEVBQUUsT0FKRDtBQUtWQyxXQUFLLEVBQUU7QUFMRztBQU5KLEdBdkUrQjtBQXFGekNHLFVBQVEsRUFBRTtBQUNSWixRQUFJLEVBQUUsbUJBREU7QUFFUkMsTUFBRSxFQUFFLFVBRkk7QUFHUkMsT0FBRyxFQUFFLFVBSEc7QUFJUkMsU0FBSyxFQUFFLElBSkM7QUFLUkMsU0FBSyxFQUFFLHVCQUxDO0FBTVJDLGNBQVUsRUFBRTtBQUNWQyxpQkFBVyxFQUNULDZjQUZRO0FBR1ZDLFdBQUssRUFBRSxXQUhHO0FBSVZDLGVBQVMsRUFBRSxPQUpEO0FBS1ZDLFdBQUssRUFBRTtBQUxHO0FBTkosR0FyRitCO0FBbUd6Q0ksVUFBUSxFQUFFO0FBQ1JiLFFBQUksRUFBRSxjQURFO0FBRVJDLE1BQUUsRUFBRSxVQUZJO0FBR1JDLE9BQUcsRUFBRSxVQUhHO0FBSVJDLFNBQUssRUFBRSxJQUpDO0FBS1JDLFNBQUssRUFBRSxrQkFMQztBQU1SQyxjQUFVLEVBQUU7QUFDVkMsaUJBQVcsRUFDVCxrV0FGUTtBQUdWQyxXQUFLLEVBQUUsT0FIRztBQUlWQyxlQUFTLEVBQUUsT0FKRDtBQUtWQyxXQUFLLEVBQUU7QUFMRztBQU5KLEdBbkcrQjtBQWlIekNLLFVBQVEsRUFBRTtBQUNSZCxRQUFJLEVBQUUsZ0JBREU7QUFFUkMsTUFBRSxFQUFFLFVBRkk7QUFHUkMsT0FBRyxFQUFFLFVBSEc7QUFJUkMsU0FBSyxFQUFFLElBSkM7QUFLUkMsU0FBSyxFQUFFLG9CQUxDO0FBTVJDLGNBQVUsRUFBRTtBQUNWQyxpQkFBVyxFQUNULDhUQUZRO0FBR1ZDLFdBQUssRUFBRSxNQUhHO0FBSVZDLGVBQVMsRUFBRSxPQUpEO0FBS1ZDLFdBQUssRUFBRTtBQUxHO0FBTko7QUFqSCtCLENBQTNDO0FBaUllVixtRUFBZiIsImZpbGUiOiIuL2RhdGFiYXNlL2RhdGEudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBkYXRhOiBSZWNvcmQ8VFByb2R1Y3RJZCwgVFByb2R1Y3Q+ID0ge1xuICAnMnpkMzNiOGMnOiB7XG4gICAgbmFtZTogJ01hbHVtYSBIYXNzIEF2b2NhZG8nLFxuICAgIGlkOiAnMnpkMzNiOGMnLFxuICAgIHNrdTogJ05VUjcyS0NNJyxcbiAgICBwcmljZTogMS4xNSxcbiAgICBpbWFnZTogJy9pbWFnZXMvbWFsdW1hLmpwZycsXG4gICAgYXR0cmlidXRlczoge1xuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICdBIHJlbGF0aXZlbHkgbmV3IGN1bHRpdmFyLCBpdCB3YXMsIHRoZSBwcmV0dHkgYm95IGJhYnksIGRpc2NvdmVyZWQgaW4gU291dGggQWZyaWNhIGluIHRoZSBlYXJseSAxOTkwcyBieSBNci4gQS5HLiAoRHJpZXMpIEpvdWJlcnQuIE1hbHVtYSBCYWJ5eS4gSXQgaXMgYSBjaGFuY2Ugc2VlZGxpbmcgb2YgdW5rbm93biBwYXJlbnRhZ2UnLFxuICAgICAgc2hhcGU6ICdPdmFsJyxcbiAgICAgIGhhcmRpbmVzczogJzEgwrBDJyxcbiAgICAgIHRhc3RlOiAnQ2F0Y2h5LCBpcyBhbiBhdm9jYWRvJyxcbiAgICB9LFxuICB9LFxuICAnNnRyZmdra2onOiB7XG4gICAgbmFtZTogJ0Z1ZXJ0ZSBBdm9jYWRvJyxcbiAgICBpZDogJzZ0cmZna2tqJyxcbiAgICBza3U6ICdBWDRNOFNKVicsXG4gICAgcHJpY2U6IDEuMjEsXG4gICAgaW1hZ2U6ICcvaW1hZ2VzL2Z1ZXJ0ZS5qcGcnLFxuICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAnVGhlIEZ1ZXJ0ZSBhdm9jYWRvIGlzIHRoZSBzZWNvbmQgbGFyZ2VzdCBjb21tZXJjaWFsIHZhcmlldHkgYmVoaW5kIEhhc3MuIEl0IGlzIGEgbG9uZyB0aW1lIENhbGlmb3JuaWEgY29tbWVyY2lhbCB2YXJpZXR5IHZhbHVlZCBmb3IgaXRzIHdpbnRlciBzZWFzb24gcmlwZW5pbmcgYW5kIGl0cyBCLVR5cGUgYmxvc3NvbSB0eXBlIHdoaWNoIG1vc3QgZ3Jvd2VycyBwbGFudCBhZGphY2VudCB0byB0aGUgSGFzcyBmb3IgYSBtb3JlIGNvbnNpc3RlbnQgcHJvZHVjdGlvbiBjeWNsZS4gVGhpcyBhdm9jYWRvIHRlbmRzIHRvIHByb2R1Y2UgaGVhdmlseSBpbiBhbHRlcm5hdGUgeWVhcnMuJyxcbiAgICAgIHNoYXBlOiAnUGVhcicsXG4gICAgICBoYXJkaW5lc3M6ICctMSDCsEMnLFxuICAgICAgdGFzdGU6ICdNYWduaWZpY2VudCwgaXMgYSBzdHJvbmcgYXZvY2FkbycsXG4gICAgfSxcbiAgfSxcbiAgJzdiY3I0OWVtJzoge1xuICAgIG5hbWU6ICdHd2VuIEhhc3MgQXZvY2FkbycsXG4gICAgaWQ6ICc3YmNyNDllbScsXG4gICAgc2t1OiAnSFlBNzhGNkonLFxuICAgIHByaWNlOiAxLjI1LFxuICAgIGltYWdlOiAnL2ltYWdlcy9nd2VuLmpwZycsXG4gICAgYXR0cmlidXRlczoge1xuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgIFwiQSBzZWVkbGluZyBicmVkIGZyb20gJ0hhc3MnIHggJ1RoaWxsZScgaW4gMTk4MiwgJ0d3ZW4nIGlzIGhpZ2hlciB5aWVsZGluZyBhbmQgbW9yZSBkd2FyZmluZyB0aGFuICdIYXNzJyBpbiBDYWxpZm9ybmlhLiBUaGUgZnJ1aXQgaGFzIGFuIG92YWwgc2hhcGUsIHNsaWdodGx5IHNtYWxsZXIgdGhhbiAnSGFzcycgKDEwMOKAkzIwMCBnIG9yIDMuNeKAkzcuMSBveiksIHdpdGggYSByaWNoLCBudXR0eSBmbGF2b3IuIFRoZSBza2luIHRleHR1cmUgaXMgbW9yZSBmaW5lbHkgcGViYmxlZCB0aGFuICdIYXNzJywgYW5kIGlzIGR1bGwgZ3JlZW4gd2hlbiByaXBlLiBJdCBpcyBmcm9zdC1oYXJkeSBkb3duIHRvIOKIkjEgwrBDICgzMCDCsEYpXCIsXG4gICAgICBzaGFwZTogJ1BsdW1wJyxcbiAgICAgIGhhcmRpbmVzczogJ+KIkjEgwrBDJyxcbiAgICAgIHRhc3RlOiAnU3VwZXJiLCBpcyBhbiBhdm9jYWRvJyxcbiAgICB9LFxuICB9LFxuICAnMDk4MzIza3MnOiB7XG4gICAgbmFtZTogJ0JhY29uIEF2b2NhZG8nLFxuICAgIGlkOiAnMDk4MzIza3MnLFxuICAgIHNrdTogJ0JYRDEwMEJMSycsXG4gICAgcHJpY2U6IDEuNTEsXG4gICAgaW1hZ2U6ICcvaW1hZ2VzL2JhY29uLmpwZycsXG4gICAgYXR0cmlidXRlczoge1xuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICdEZXZlbG9wZWQgYnkgYSBmYXJtZXIsIEphbWVzIEJhY29uLCBpbiAxOTU0LCBCYWNvbiBoYXMgbWVkaXVtLXNpemVkIGZydWl0IHdpdGggc21vb3RoLCBncmVlbiBza2luIHdpdGggeWVsbG93LWdyZWVuLCBsaWdodC10YXN0aW5nIGZsZXNoLiBXaGVuIHJpcGUsIHRoZSBza2luIHJlbWFpbnMgZ3JlZW4sIGJ1dCBkYXJrZW5zIHNsaWdodGx5LCBhbmQgZnJ1aXQgeWllbGRzIHRvIGdlbnRsZSBwcmVzc3VyZS4gSXQgaXMgY29sZC1oYXJkeSBkb3duIHRvIOKIkjUgwrBDICgyMyDCsEYpJyxcbiAgICAgIHNoYXBlOiAnT3ZhbCcsXG4gICAgICBoYXJkaW5lc3M6ICfiiJI1IMKwQycsXG4gICAgICB0YXN0ZTogJ0NyZWFteSwgaXMgYW4gYXZvY2FkbycsXG4gICAgfSxcbiAgfSxcbiAgYjh1dGhlMnk6IHtcbiAgICBuYW1lOiAnSGFzcyBBdm9jYWRvJyxcbiAgICBpZDogJ2I4dXRoZTJ5JyxcbiAgICBza3U6ICdSTVJDWk43RScsXG4gICAgcHJpY2U6IDEuMzksXG4gICAgaW1hZ2U6ICcvaW1hZ2VzL2hhc3MuanBnJyxcbiAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgXCJUaGUgJ0hhc3MnIGlzIHRoZSBtb3N0IGNvbW1vbiBjdWx0aXZhciBvZiBhdm9jYWRvLiBJdCBwcm9kdWNlcyBmcnVpdCB5ZWFyLXJvdW5kIGFuZCBhY2NvdW50cyBmb3IgODAlIG9mIGN1bHRpdmF0ZWQgYXZvY2Fkb3MgaW4gdGhlIHdvcmxkLlsyMV1bNTVdIEFsbCAnSGFzcycgdHJlZXMgYXJlIGRlc2NlbmRlZCBmcm9tIGEgc2luZ2xlICdtb3RoZXIgdHJlZScgcmFpc2VkIGJ5IGEgbWFpbCBjYXJyaWVyIG5hbWVkIFJ1ZG9scGggSGFzcywgb2YgTGEgSGFicmEgSGVpZ2h0cywgQ2FsaWZvcm5pYS5bMjBdWzU1XSBIYXNzIHBhdGVudGVkIHRoZSBwcm9kdWN0aXZlIHRyZWUgaW4gMTkzNS4gVGhlICdtb3RoZXIgdHJlZScsIG9mIHVuY2VydGFpbiBzdWJzcGVjaWVzLCBkaWVkIG9mIHJvb3Qgcm90IGFuZCB3YXMgY3V0IGRvd24gaW4gU2VwdGVtYmVyIDIwMDIuWzIxXVs1NV1bNTZdICdIYXNzJyB0cmVlcyBoYXZlIG1lZGl1bS1zaXplZCAoMTUw4oCTMjUwIGcgb3IgNS4z4oCTOC44IG96KSwgb3ZhdGUgZnJ1aXQgd2l0aCBhIGJsYWNrLCBwZWJibGVkIHNraW4uIFRoZSBmbGVzaCBoYXMgYSBudXR0eSwgcmljaCBmbGF2b3Igd2l0aCAxOSUgb2lsLiBBIGh5YnJpZCBHdWF0ZW1hbGFuIHR5cGUgY2FuIHdpdGhzdGFuZCB0ZW1wZXJhdHVyZXMgdG8g4oiSMSDCsEMgKDMwIMKwRilcIixcbiAgICAgIHNoYXBlOiAnT3ZhbCcsXG4gICAgICBoYXJkaW5lc3M6ICfiiJIxIMKwQycsXG4gICAgICB0YXN0ZTogJ0dvcmdlb3VzLCBpcyBhbiBhdm9jYWRvJyxcbiAgICB9LFxuICB9LFxuICBld3hzZDZ4Yjoge1xuICAgIG5hbWU6ICdMYW1iIEhhc3MgQXZvY2FkbycsXG4gICAgaWQ6ICdld3hzZDZ4YicsXG4gICAgc2t1OiAnTjU1MjI5WkEnLFxuICAgIHByaWNlOiAxLjM0LFxuICAgIGltYWdlOiAnL2ltYWdlcy9sYW1iLmpwZycsXG4gICAgYXR0cmlidXRlczoge1xuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICdUaGUgTGFtYiBIYXNzIGF2b2NhZG8gaXMgYSBjcm9zcyBiZXR3ZWVuIGEgSGFzcyBhbmQgR3dlbiBhdm9jYWRvLiBUaGUgZnJ1aXRzIGFyZSBsYXJnZXIgaW4gc2l6ZSBhbmQgbGF0ZXIgbWF0dXJpbmcgdGhhbiBIYXNzLiBJdCBpcyBnYWluaW5nIGluIHBvcHVsYXJpdHkgYXMgYSBjb21tZXJjaWFsIGFuZCBiYWNreWFyZCB2YXJpZXR5IGR1ZSB0byBpdHMgZXhjZXB0aW9uYWwgZmxhdm9yIGFuZCBlYXN5IHBlZWxpbmcgcXVhbGl0aWVzLiBUaGUgdHJlZSBoYXMgYW4gdXByaWdodCwgY29tcGFjdCBoYWJpdC4nLFxuICAgICAgc2hhcGU6ICdPYm92YXRlJyxcbiAgICAgIGhhcmRpbmVzczogJy0yIMKwQycsXG4gICAgICB0YXN0ZTogJ0dyZWF0LCBpcyBhbiBhdm9jYWRvJyxcbiAgICB9LFxuICB9LFxuICBmcHI3Mm05azoge1xuICAgIG5hbWU6ICdQaW5rZXJ0b24gQXZvY2FkbycsXG4gICAgaWQ6ICdmcHI3Mm05aycsXG4gICAgc2t1OiAnQjRIWjQyVE0nLFxuICAgIHByaWNlOiAxLjI3LFxuICAgIGltYWdlOiAnL2ltYWdlcy9waW5rZXJ0b24uanBnJyxcbiAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgXCJGaXJzdCBncm93biBvbiB0aGUgUGlua2VydG9uIFJhbmNoIGluIFNhdGljb3ksIENhbGlmb3JuaWEsIGluIHRoZSBlYXJseSAxOTcwcywgJ1BpbmtlcnRvbicgaXMgYSBzZWVkbGluZyBvZiAnSGFzcycgeCAnUmluY29uJy4gVGhlIGxhcmdlIGZydWl0IGhhcyBhIHNtYWxsIHNlZWQsIGFuZCBpdHMgZ3JlZW4gc2tpbiBkZWVwZW5zIGluIGNvbG9yIGFzIGl0IHJpcGVucy4gVGhlIHRoaWNrIGZsZXNoIGhhcyBhIHNtb290aCwgY3JlYW15IHRleHR1cmUsIHBhbGUgZ3JlZW4gY29sb3IsIGdvb2QgZmxhdm9yLCBhbmQgaGlnaCBvaWwgY29udGVudC4gSXQgc2hvd3Mgc29tZSBjb2xkIHRvbGVyYW5jZSwgdG8g4oiSMSDCsEMgKDMwIMKwRikgYW5kIGJlYXJzIGNvbnNpc3RlbnRseSBoZWF2eSBjcm9wcy4gQSBoeWJyaWQgR3VhdGVtYWxhbiB0eXBlLCBpdCBoYXMgZXhjZWxsZW50IHBlZWxpbmcgY2hhcmFjdGVyaXN0aWNzXCIsXG4gICAgICBzaGFwZTogJ0xvbmcgcGVhcicsXG4gICAgICBoYXJkaW5lc3M6ICfiiJIxIMKwQycsXG4gICAgICB0YXN0ZTogJ01hcnZlbG91cywgaXMgYW4gYXZvY2FkbycsXG4gICAgfSxcbiAgfSxcbiAgdDlkdjI1Z3M6IHtcbiAgICBuYW1lOiAnUmVlZCBBdm9jYWRvJyxcbiAgICBpZDogJ3Q5ZHYyNWdzJyxcbiAgICBza3U6ICdaWTNUOVhYQycsXG4gICAgcHJpY2U6IDEuMTgsXG4gICAgaW1hZ2U6ICcvaW1hZ2VzL3JlZWQuanBnJyxcbiAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgJ0RldmVsb3BlZCBmcm9tIGEgY2hhbmNlIHNlZWRsaW5nIGZvdW5kIGluIDE5NDggYnkgSmFtZXMgUy4gUmVlZCBpbiBDYWxpZm9ybmlhLCB0aGlzIGN1bHRpdmFyIGhhcyBsYXJnZSwgcm91bmQsIGdyZWVuIGZydWl0IHdpdGggYSBzbW9vdGggdGV4dHVyZSBhbmQgZGFyaywgdGhpY2ssIGdsb3NzeSBza2luLiBTbW9vdGggYW5kIGRlbGljYXRlLCB0aGUgZmxlc2ggaGFzIGEgc2xpZ2h0bHkgbnV0dHkgZmxhdm9yLiBUaGUgc2tpbiByaXBlbnMgZ3JlZW4uIEEgR3VhdGVtYWxhbiB0eXBlLCBpdCBpcyBoYXJkeSB0byDiiJIxIMKwQyAoMzAgwrBGKS4gVHJlZSBzaXplIGlzIGFib3V0IDUgYnkgNCBtICgxNi40IGJ5IDEzLjEgZnQpJyxcbiAgICAgIHNoYXBlOiAnUm91bmQnLFxuICAgICAgaGFyZGluZXNzOiAn4oiSMSDCsEMnLFxuICAgICAgdGFzdGU6ICdFeHF1aXNpdGUsIGlzIGFuIGF2b2NhZG8nLFxuICAgIH0sXG4gIH0sXG4gIHQzNDV3NDh5OiB7XG4gICAgbmFtZTogJ1p1dGFubyBBdm9jYWRvJyxcbiAgICBpZDogJ3QzNDV3NDh5JyxcbiAgICBza3U6ICdNVzc5Wlo2WScsXG4gICAgcHJpY2U6IDEuMjUsXG4gICAgaW1hZ2U6ICcvaW1hZ2VzL3p1dGFuby5qcGcnLFxuICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAnVGhlIFp1dGFubyBhdm9jYWRvIGlzIGEgY29sZCBoYXJkeSwgY29uc2lzdGVudCBwcm9kdWNpbmcgYXZvY2FkbyB2YXJpZXR5LiBJdCByZXNlbWJsZXMgdGhlIEZ1ZXJ0ZSBpbiBhcHBlYXJhbmNlIGJ1dCBpcyBsZXNzIGZsYXZvcmZ1bCBidXQgbW9yZSBjb2xkIGhhcmR5LiBUaGUgZ3JlZW4gZnJ1aXRzIGFyZSBvYm92YXRlIGluIHNoYXBlIHdpdGggd2F4eSBidW1wcyBvbiB0aGUgc2tpbi4gVGhlIGZsZXNoIGhhcyBhIGxvdyBvaWwgYnV0IGhpZ2ggd2F0ZXIgY29udGVudCB3aGljaCBjYXVzZXMgaXQgdG8gaGF2ZSBhIG1vcmUgZmlicm91cyB0ZXh0dXJlLicsXG4gICAgICBzaGFwZTogJ1BlYXInLFxuICAgICAgaGFyZGluZXNzOiAnLTUgwrBDJyxcbiAgICAgIHRhc3RlOiAnU3BsZW5kaWQsIGlzIGFuIGF2b2NhZG8nLFxuICAgIH0sXG4gIH0sXG59XG5cbmV4cG9ydCBkZWZhdWx0IGRhdGFcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./database/data.ts\n");

/***/ }),

/***/ "./database/db.ts":
/*!************************!*\
  !*** ./database/db.ts ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ \"./database/data.ts\");\n// Oh you curious...\n// This is not a real database,\n// But let's imagine it is one :)\n\n\nclass Database {\n  constructor() {}\n\n  async getAll() {\n    const asArray = Object.values(_data__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n    await randomDelay();\n    return asArray;\n  }\n\n  async getById(id) {\n    if (!Object.prototype.hasOwnProperty.call(_data__WEBPACK_IMPORTED_MODULE_0__[\"default\"], id)) {\n      return null;\n    }\n\n    const entry = _data__WEBPACK_IMPORTED_MODULE_0__[\"default\"][id];\n    await randomDelay();\n    return entry;\n  }\n\n} // Let's also add a delay to make it a bit closer to reality\n\n\nconst randomDelay = () => new Promise(resolve => {\n  const max = 350;\n  const min = 100;\n  const delay = Math.floor(Math.random() * (max - min + 1)) + min;\n  setTimeout(resolve, delay);\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Database);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kYXRhYmFzZS9kYi50cz9kMmZlIl0sIm5hbWVzIjpbIkRhdGFiYXNlIiwiY29uc3RydWN0b3IiLCJnZXRBbGwiLCJhc0FycmF5IiwiT2JqZWN0IiwidmFsdWVzIiwiYWxsRGF0YSIsInJhbmRvbURlbGF5IiwiZ2V0QnlJZCIsImlkIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiZW50cnkiLCJQcm9taXNlIiwicmVzb2x2ZSIsIm1heCIsIm1pbiIsImRlbGF5IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwic2V0VGltZW91dCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLFFBQU4sQ0FBZTtBQUNiQyxhQUFXLEdBQUcsQ0FBRTs7QUFFaEIsUUFBTUMsTUFBTixHQUFvQztBQUNsQyxVQUFNQyxPQUFPLEdBQUdDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjQyw2Q0FBZCxDQUFoQjtBQUNBLFVBQU1DLFdBQVcsRUFBakI7QUFDQSxXQUFPSixPQUFQO0FBQ0Q7O0FBRUQsUUFBTUssT0FBTixDQUFjQyxFQUFkLEVBQW9EO0FBQ2xELFFBQUksQ0FBQ0wsTUFBTSxDQUFDTSxTQUFQLENBQWlCQyxjQUFqQixDQUFnQ0MsSUFBaEMsQ0FBcUNOLDZDQUFyQyxFQUE4Q0csRUFBOUMsQ0FBTCxFQUF3RDtBQUN0RCxhQUFPLElBQVA7QUFDRDs7QUFFRCxVQUFNSSxLQUFLLEdBQUdQLDZDQUFPLENBQUNHLEVBQUQsQ0FBckI7QUFDQSxVQUFNRixXQUFXLEVBQWpCO0FBQ0EsV0FBT00sS0FBUDtBQUNEOztBQWpCWSxDLENBb0JmOzs7QUFDQSxNQUFNTixXQUFXLEdBQUcsTUFDbEIsSUFBSU8sT0FBSixDQUFhQyxPQUFELElBQWE7QUFDdkIsUUFBTUMsR0FBRyxHQUFHLEdBQVo7QUFDQSxRQUFNQyxHQUFHLEdBQUcsR0FBWjtBQUNBLFFBQU1DLEtBQUssR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxNQUFpQkwsR0FBRyxHQUFHQyxHQUFOLEdBQVksQ0FBN0IsQ0FBWCxJQUE4Q0EsR0FBNUQ7QUFFQUssWUFBVSxDQUFDUCxPQUFELEVBQVVHLEtBQVYsQ0FBVjtBQUNELENBTkQsQ0FERjs7QUFTZWxCLHVFQUFmIiwiZmlsZSI6Ii4vZGF0YWJhc2UvZGIudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBPaCB5b3UgY3VyaW91cy4uLlxuLy8gVGhpcyBpcyBub3QgYSByZWFsIGRhdGFiYXNlLFxuLy8gQnV0IGxldCdzIGltYWdpbmUgaXQgaXMgb25lIDopXG5pbXBvcnQgYWxsRGF0YSBmcm9tICcuL2RhdGEnXG5cbmNsYXNzIERhdGFiYXNlIHtcbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIGFzeW5jIGdldEFsbCgpOiBQcm9taXNlPFRQcm9kdWN0W10+IHtcbiAgICBjb25zdCBhc0FycmF5ID0gT2JqZWN0LnZhbHVlcyhhbGxEYXRhKVxuICAgIGF3YWl0IHJhbmRvbURlbGF5KClcbiAgICByZXR1cm4gYXNBcnJheVxuICB9XG5cbiAgYXN5bmMgZ2V0QnlJZChpZDogc3RyaW5nKTogUHJvbWlzZTxUUHJvZHVjdCB8IG51bGw+IHtcbiAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChhbGxEYXRhLCBpZCkpIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgY29uc3QgZW50cnkgPSBhbGxEYXRhW2lkXVxuICAgIGF3YWl0IHJhbmRvbURlbGF5KClcbiAgICByZXR1cm4gZW50cnlcbiAgfVxufVxuXG4vLyBMZXQncyBhbHNvIGFkZCBhIGRlbGF5IHRvIG1ha2UgaXQgYSBiaXQgY2xvc2VyIHRvIHJlYWxpdHlcbmNvbnN0IHJhbmRvbURlbGF5ID0gKCkgPT5cbiAgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICBjb25zdCBtYXggPSAzNTBcbiAgICBjb25zdCBtaW4gPSAxMDBcbiAgICBjb25zdCBkZWxheSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW5cblxuICAgIHNldFRpbWVvdXQocmVzb2x2ZSwgZGVsYXkpXG4gIH0pXG5cbmV4cG9ydCBkZWZhdWx0IERhdGFiYXNlXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./database/db.ts\n");

/***/ }),

/***/ "./pages/api/avo/[id].ts":
/*!*******************************!*\
  !*** ./pages/api/avo/[id].ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @database */ \"./database/db.ts\");\n/* harmony import */ var _cors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @cors */ \"./cors-middleware.ts\");\n\n\n\nconst AvoDetail = async (req, res) => {\n  try {\n    // Generally, you would not want this in your apps.\n    // See more in 'cors.js'\n    await Object(_cors__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(req, res);\n    const db = new _database__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    const avoId = req.query.id;\n    const avo = await db.getById(avoId); // Notice: We're using Next.JS response helpers here :)\n    // https://nextjs.org/docs/api-routes/response-helpers\n\n    res.status(200).json(avo);\n  } catch (e) {\n    console.error(e);\n    res.status(404).end();\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AvoDetail);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvYXZvLy50cz8xZjdhIl0sIm5hbWVzIjpbIkF2b0RldGFpbCIsInJlcSIsInJlcyIsImVuYWJsZVB1YmxpY0FjY2VzcyIsImRiIiwiREIiLCJhdm9JZCIsInF1ZXJ5IiwiaWQiLCJhdm8iLCJnZXRCeUlkIiwic3RhdHVzIiwianNvbiIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJlbmQiXSwibWFwcGluZ3MiOiJBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBRUEsTUFBTUEsU0FBUyxHQUFHLE9BQU9DLEdBQVAsRUFBNEJDLEdBQTVCLEtBQXFEO0FBQ3JFLE1BQUk7QUFDRjtBQUNBO0FBQ0EsVUFBTUMscURBQWtCLENBQUNGLEdBQUQsRUFBTUMsR0FBTixDQUF4QjtBQUVBLFVBQU1FLEVBQUUsR0FBRyxJQUFJQyxpREFBSixFQUFYO0FBQ0EsVUFBTUMsS0FBSyxHQUFHTCxHQUFHLENBQUNNLEtBQUosQ0FBVUMsRUFBeEI7QUFFQSxVQUFNQyxHQUFHLEdBQUcsTUFBTUwsRUFBRSxDQUFDTSxPQUFILENBQVdKLEtBQVgsQ0FBbEIsQ0FSRSxDQVVGO0FBQ0E7O0FBQ0FKLE9BQUcsQ0FBQ1MsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCSCxHQUFyQjtBQUNELEdBYkQsQ0FhRSxPQUFPSSxDQUFQLEVBQVU7QUFDVkMsV0FBTyxDQUFDQyxLQUFSLENBQWNGLENBQWQ7QUFDQVgsT0FBRyxDQUFDUyxNQUFKLENBQVcsR0FBWCxFQUFnQkssR0FBaEI7QUFDRDtBQUNGLENBbEJEOztBQW9CZWhCLHdFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL2F2by9baWRdLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnXG5pbXBvcnQgREIgZnJvbSAnQGRhdGFiYXNlJ1xuaW1wb3J0IGVuYWJsZVB1YmxpY0FjY2VzcyBmcm9tICdAY29ycydcblxuY29uc3QgQXZvRGV0YWlsID0gYXN5bmMgKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSA9PiB7XG4gIHRyeSB7XG4gICAgLy8gR2VuZXJhbGx5LCB5b3Ugd291bGQgbm90IHdhbnQgdGhpcyBpbiB5b3VyIGFwcHMuXG4gICAgLy8gU2VlIG1vcmUgaW4gJ2NvcnMuanMnXG4gICAgYXdhaXQgZW5hYmxlUHVibGljQWNjZXNzKHJlcSwgcmVzKVxuXG4gICAgY29uc3QgZGIgPSBuZXcgREIoKVxuICAgIGNvbnN0IGF2b0lkID0gcmVxLnF1ZXJ5LmlkIGFzIHN0cmluZ1xuXG4gICAgY29uc3QgYXZvID0gYXdhaXQgZGIuZ2V0QnlJZChhdm9JZClcblxuICAgIC8vIE5vdGljZTogV2UncmUgdXNpbmcgTmV4dC5KUyByZXNwb25zZSBoZWxwZXJzIGhlcmUgOilcbiAgICAvLyBodHRwczovL25leHRqcy5vcmcvZG9jcy9hcGktcm91dGVzL3Jlc3BvbnNlLWhlbHBlcnNcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbihhdm8pXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmVycm9yKGUpXG4gICAgcmVzLnN0YXR1cyg0MDQpLmVuZCgpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXZvRGV0YWlsXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/avo/[id].ts\n");

/***/ }),

/***/ 6:
/*!*************************************!*\
  !*** multi ./pages/api/avo/[id].ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jomicega/projects/courses/pl/nextJs/platzi-market/pages/api/avo/[id].ts */"./pages/api/avo/[id].ts");


/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JzXCI/N2U5ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJjb3JzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///cors\n");

/***/ })

/******/ });