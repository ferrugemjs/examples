webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./app": 4,
	"./app.js": 4,
	"./hello-world/hello-world": 9,
	"./hello-world/hello-world.js": 9,
	"./hello-world/hello-world.pug": 12,
	"./hello-world/sec-b": 10,
	"./hello-world/sec-b.pug": 10,
	"./hello-world/test-a": 11,
	"./hello-world/test-a.pug": 11
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 5;

/***/ }),
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TodoList = exports.TodoList = function () {
  function TodoList() {
    _classCallCheck(this, TodoList);

    this.todos = ['do a test'];
  }

  _createClass(TodoList, [{
    key: 'desc',
    set: function set(desc) {
      if (desc.trim()) {
        this.todos.push(desc);
      }
    }
  }]);

  return TodoList;
}();

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(0), __webpack_require__(3)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, _idom, _libfjs_mod_) {
	var __mod__ZCuxAhtgd2krrKHmTKJ8ik_tmp = "_tmp_constructor_no_view__mod__ZCuxAhtgd2krrKHmTKJ8ik";
	exports.default = function (super_clazz) {
		function _clazz_sub_sGwkV9k1TZtLmtt1eBD7Xm_tmp() {
			super_clazz.call(this);
		};
		_clazz_sub_sGwkV9k1TZtLmtt1eBD7Xm_tmp.prototype = Object.create(super_clazz.prototype);
		_clazz_sub_sGwkV9k1TZtLmtt1eBD7Xm_tmp.prototype.constructor = _clazz_sub_sGwkV9k1TZtLmtt1eBD7Xm_tmp;
		_clazz_sub_sGwkV9k1TZtLmtt1eBD7Xm_tmp.prototype._$attrs$_ = { "name": "div", "static": ["class", "pug"], "dinamic": "\"\"" };
		_clazz_sub_sGwkV9k1TZtLmtt1eBD7Xm_tmp.prototype.render = function ($_this_$) {
			_idom.elementOpen("h4", null, [""], "");

			_idom.text("a basic example of pug222222");

			_idom.elementClose("h4");

			(function () {
				if (true) {
					console.log('power of pug');
					setTimeout(function () {
						return console.log('ops pug');
					}, 2000);
				}
			}).bind($_this_$)();
		};
		return _clazz_sub_sGwkV9k1TZtLmtt1eBD7Xm_tmp;
	}(function () {});
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(0), __webpack_require__(3), __webpack_require__(10)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, _idom, _libfjs_mod_, _sec_b) {
	var __mod__VwJftbJ2SFZhHKihWcu5p7_tmp = "_tmp_constructor_no_view__mod__VwJftbJ2SFZhHKihWcu5p7";
	exports.default = function (super_clazz) {
		function _clazz_sub_maa_nLR_K5cSE3liVivKMn_tmp() {
			super_clazz.call(this);
		};
		_clazz_sub_maa_nLR_K5cSE3liVivKMn_tmp.prototype = Object.create(super_clazz.prototype);
		_clazz_sub_maa_nLR_K5cSE3liVivKMn_tmp.prototype.constructor = _clazz_sub_maa_nLR_K5cSE3liVivKMn_tmp;
		_clazz_sub_maa_nLR_K5cSE3liVivKMn_tmp.prototype._$attrs$_ = { "name": "div", "static": ["class", "pug"], "dinamic": "\"\"" };
		_clazz_sub_maa_nLR_K5cSE3liVivKMn_tmp.prototype.render = function ($_this_$) {
			_idom.elementOpen("h1", null, [""], "");

			_idom.text("a basic example of pug");

			_idom.elementClose("h1");

			(function () {
				var _$_inst_$_ = _libfjs_mod_.default.build({ "classFactory": _sec_b.default, "tag": "div", "alias": "sec-b", "target": "", "hostVars": {}, "staticVars": { "key:id": "tmp_key_inst_custom_compLxBo3cjiLcLhfLd32kNTAp", "is": "sec-b" } });

				_libfjs_mod_.default.reDraw.call(_$_inst_$_);
			})();
		};
		return _clazz_sub_maa_nLR_K5cSE3liVivKMn_tmp;
	}(function () {});
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(0), __webpack_require__(3), __webpack_require__(9)], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, _idom, _libfjs_mod_, _hello_world) {
	var __hello_world_tmp = Object.keys(_hello_world)[0];
	exports.default = function (super_clazz) {
		function _clazz_sub_ajadj7nkRVhoOSm4OVIdBG_tmp() {
			super_clazz.call(this);
		};
		_clazz_sub_ajadj7nkRVhoOSm4OVIdBG_tmp.prototype = Object.create(super_clazz.prototype);
		_clazz_sub_ajadj7nkRVhoOSm4OVIdBG_tmp.prototype.constructor = _clazz_sub_ajadj7nkRVhoOSm4OVIdBG_tmp;
		_clazz_sub_ajadj7nkRVhoOSm4OVIdBG_tmp.prototype._$attrs$_ = { "name": "div", "static": [], "dinamic": "\"\"" };
		_clazz_sub_ajadj7nkRVhoOSm4OVIdBG_tmp.prototype.render = function ($_this_$) {
			_idom.elementOpen("ol", null, [""], "");

			$_this_$.todos.forEach(function (todo, $key_tmp_eVndpB3aJEvNaIuDKeETzs) {
				_idom.elementOpen("li", null, [""], "");

				_idom.elementOpen("em", null, [""], "");

				_idom.text("" + todo + "");

				_idom.elementClose("em");

				_idom.elementClose("li");
			});

			_idom.elementClose("ol");

			_idom.elementOpen("input", null, ["type", "text"], "value", new String(''), "onchange", function ($evt) {
				$_this_$.refresh({ "desc": $evt.target.value });
			});

			_idom.elementClose("input");
		};
		return _clazz_sub_ajadj7nkRVhoOSm4OVIdBG_tmp;
	}(_hello_world[__hello_world_tmp]);
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })
]);