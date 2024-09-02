/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./worker/index.js":
/*!*************************!*\
  !*** ./worker/index.js ***!
  \*************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\nself.addEventListener(\"push\", function(event) {\n    const data = JSON.parse(event.data.text());\n    console.log(data);\n    event.waitUntil(registration.showNotification(data.title, {\n        body: data.message\n    }));\n});\nself.addEventListener(\"notificationclick\", function(event) {\n    event.notification.close();\n    event.waitUntil(clients.matchAll({\n        type: \"window\",\n        includeUncontrolled: true\n    }).then(function(clientList) {\n        if (clientList.length > 0) {\n            let client = clientList[0];\n            for(let i = 0; i < clientList.length; i++){\n                if (clientList[i].focused) {\n                    client = clientList[i];\n                }\n            }\n            return client.focus();\n        }\n        return clients.openWindow(\"/\");\n    }));\n}) // self.addEventListener('pushsubscriptionchange', function(event) {\n //   event.waitUntil(\n //       Promise.all([\n //           Promise.resolve(event.oldSubscription ? deleteSubscription(event.oldSubscription) : true),\n //           Promise.resolve(event.newSubscription ? event.newSubscription : subscribePush(registration))\n //               .then(function(sub) { return saveSubscription(sub) })\n //       ])\n //   )\n // })\n;\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                /* unsupported import.meta.webpackHot */ undefined.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi93b3JrZXIvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFFQUEsS0FBS0MsZ0JBQWdCLENBQUMsUUFBUSxTQUFVQyxLQUFLO0lBQzNDLE1BQU1DLE9BQU9DLEtBQUtDLEtBQUssQ0FBQ0gsTUFBTUMsSUFBSSxDQUFDRyxJQUFJO0lBQ3ZDQyxRQUFRQyxHQUFHLENBQUNMO0lBQ1pELE1BQU1PLFNBQVMsQ0FDYkMsYUFBYUMsZ0JBQWdCLENBQUNSLEtBQUtTLEtBQUssRUFBRTtRQUN4Q0MsTUFBTVYsS0FBS1csT0FBTztJQUNwQjtBQUVKO0FBRUFkLEtBQUtDLGdCQUFnQixDQUFDLHFCQUFxQixTQUFVQyxLQUFLO0lBQ3hEQSxNQUFNYSxZQUFZLENBQUNDLEtBQUs7SUFDeEJkLE1BQU1PLFNBQVMsQ0FDYlEsUUFBUUMsUUFBUSxDQUFDO1FBQUVDLE1BQU07UUFBVUMscUJBQXFCO0lBQUssR0FBR0MsSUFBSSxDQUFDLFNBQVVDLFVBQVU7UUFDdkYsSUFBSUEsV0FBV0MsTUFBTSxHQUFHLEdBQUc7WUFDekIsSUFBSUMsU0FBU0YsVUFBVSxDQUFDLEVBQUU7WUFDMUIsSUFBSyxJQUFJRyxJQUFJLEdBQUdBLElBQUlILFdBQVdDLE1BQU0sRUFBRUUsSUFBSztnQkFDMUMsSUFBSUgsVUFBVSxDQUFDRyxFQUFFLENBQUNDLE9BQU8sRUFBRTtvQkFDekJGLFNBQVNGLFVBQVUsQ0FBQ0csRUFBRTtnQkFDeEI7WUFDRjtZQUNBLE9BQU9ELE9BQU9HLEtBQUs7UUFDckI7UUFDQSxPQUFPVixRQUFRVyxVQUFVLENBQUM7SUFDNUI7QUFFSixHQUVBLG9FQUFvRTtDQUNwRSxxQkFBcUI7Q0FDckIsc0JBQXNCO0NBQ3RCLHVHQUF1RztDQUN2Ryx5R0FBeUc7Q0FDekcsc0VBQXNFO0NBQ3RFLFdBQVc7Q0FDWCxNQUFNO0NBQ04sS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi93b3JrZXIvaW5kZXguanM/ODA1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxuc2VsZi5hZGRFdmVudExpc3RlbmVyKCdwdXNoJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKGV2ZW50LmRhdGEudGV4dCgpKVxuICBjb25zb2xlLmxvZyhkYXRhKVxuICBldmVudC53YWl0VW50aWwoXG4gICAgcmVnaXN0cmF0aW9uLnNob3dOb3RpZmljYXRpb24oZGF0YS50aXRsZSwge1xuICAgICAgYm9keTogZGF0YS5tZXNzYWdlXG4gICAgfSlcbiAgKVxufSlcblxuc2VsZi5hZGRFdmVudExpc3RlbmVyKCdub3RpZmljYXRpb25jbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuICBldmVudC5ub3RpZmljYXRpb24uY2xvc2UoKVxuICBldmVudC53YWl0VW50aWwoXG4gICAgY2xpZW50cy5tYXRjaEFsbCh7IHR5cGU6ICd3aW5kb3cnLCBpbmNsdWRlVW5jb250cm9sbGVkOiB0cnVlIH0pLnRoZW4oZnVuY3Rpb24gKGNsaWVudExpc3QpIHtcbiAgICAgIGlmIChjbGllbnRMaXN0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgbGV0IGNsaWVudCA9IGNsaWVudExpc3RbMF1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjbGllbnRMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKGNsaWVudExpc3RbaV0uZm9jdXNlZCkge1xuICAgICAgICAgICAgY2xpZW50ID0gY2xpZW50TGlzdFtpXVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2xpZW50LmZvY3VzKClcbiAgICAgIH1cbiAgICAgIHJldHVybiBjbGllbnRzLm9wZW5XaW5kb3coJy8nKVxuICAgIH0pXG4gIClcbn0pXG5cbi8vIHNlbGYuYWRkRXZlbnRMaXN0ZW5lcigncHVzaHN1YnNjcmlwdGlvbmNoYW5nZScsIGZ1bmN0aW9uKGV2ZW50KSB7XG4vLyAgIGV2ZW50LndhaXRVbnRpbChcbi8vICAgICAgIFByb21pc2UuYWxsKFtcbi8vICAgICAgICAgICBQcm9taXNlLnJlc29sdmUoZXZlbnQub2xkU3Vic2NyaXB0aW9uID8gZGVsZXRlU3Vic2NyaXB0aW9uKGV2ZW50Lm9sZFN1YnNjcmlwdGlvbikgOiB0cnVlKSxcbi8vICAgICAgICAgICBQcm9taXNlLnJlc29sdmUoZXZlbnQubmV3U3Vic2NyaXB0aW9uID8gZXZlbnQubmV3U3Vic2NyaXB0aW9uIDogc3Vic2NyaWJlUHVzaChyZWdpc3RyYXRpb24pKVxuLy8gICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbihzdWIpIHsgcmV0dXJuIHNhdmVTdWJzY3JpcHRpb24oc3ViKSB9KVxuLy8gICAgICAgXSlcbi8vICAgKVxuLy8gfSlcbiJdLCJuYW1lcyI6WyJzZWxmIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiZGF0YSIsIkpTT04iLCJwYXJzZSIsInRleHQiLCJjb25zb2xlIiwibG9nIiwid2FpdFVudGlsIiwicmVnaXN0cmF0aW9uIiwic2hvd05vdGlmaWNhdGlvbiIsInRpdGxlIiwiYm9keSIsIm1lc3NhZ2UiLCJub3RpZmljYXRpb24iLCJjbG9zZSIsImNsaWVudHMiLCJtYXRjaEFsbCIsInR5cGUiLCJpbmNsdWRlVW5jb250cm9sbGVkIiwidGhlbiIsImNsaWVudExpc3QiLCJsZW5ndGgiLCJjbGllbnQiLCJpIiwiZm9jdXNlZCIsImZvY3VzIiwib3BlbldpbmRvdyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./worker/index.js\n"));

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/trusted types policy */
/******/ 	!function() {
/******/ 		var policy;
/******/ 		__webpack_require__.tt = function() {
/******/ 			// Create Trusted Type policy if Trusted Types are available and the policy doesn't exist yet.
/******/ 			if (policy === undefined) {
/******/ 				policy = {
/******/ 					createScript: function(script) { return script; }
/******/ 				};
/******/ 				if (typeof trustedTypes !== "undefined" && trustedTypes.createPolicy) {
/******/ 					policy = trustedTypes.createPolicy("nextjs#bundler", policy);
/******/ 				}
/******/ 			}
/******/ 			return policy;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/trusted types script */
/******/ 	!function() {
/******/ 		__webpack_require__.ts = function(script) { return __webpack_require__.tt().createScript(script); };
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/react refresh */
/******/ 	!function() {
/******/ 		if (__webpack_require__.i) {
/******/ 		__webpack_require__.i.push(function(options) {
/******/ 			var originalFactory = options.factory;
/******/ 			options.factory = function(moduleObject, moduleExports, webpackRequire) {
/******/ 				var hasRefresh = typeof self !== "undefined" && !!self.$RefreshInterceptModuleExecution$;
/******/ 				var cleanup = hasRefresh ? self.$RefreshInterceptModuleExecution$(moduleObject.id) : function() {};
/******/ 				try {
/******/ 					originalFactory.call(this, moduleObject, moduleExports, webpackRequire);
/******/ 				} finally {
/******/ 					cleanup();
/******/ 				}
/******/ 			}
/******/ 		})
/******/ 		}
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	
/******/ 	// noop fns to prevent runtime errors during initialization
/******/ 	if (typeof self !== "undefined") {
/******/ 		self.$RefreshReg$ = function () {};
/******/ 		self.$RefreshSig$ = function () {
/******/ 			return function (type) {
/******/ 				return type;
/******/ 			};
/******/ 		};
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./worker/index.js");
/******/ 	
/******/ })()
;