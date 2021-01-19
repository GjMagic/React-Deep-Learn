/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/React/CreateElement/index.js":
/*!******************************************!*\
  !*** ./src/React/CreateElement/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ createElement
/* harmony export */ });
function createElement(type, props) {
  var _ref;

  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }

  var childElement = (_ref = []).concat.apply(_ref, children).reduce(function (result, child) {
    if (child !== false && child !== true && child !== null) {
      if (child instanceof Object) {
        result.push(child);
      } else {
        result.push(createElement('text', {
          textContent: child
        }));
      }
    }

    return result;
  }, []);

  return {
    type: type,
    props: Object.assign({
      children: childElement
    }, props)
  };
}

/***/ }),

/***/ "./src/React/DOM/createDOMElement.js":
/*!*******************************************!*\
  !*** ./src/React/DOM/createDOMElement.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ createDOMElement
/* harmony export */ });
/* harmony import */ var _updateNodeElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updateNodeElement */ "./src/React/DOM/updateNodeElement.js");

function createDOMElement(virtualDOM) {
  var newElement = null;

  if (virtualDOM.type === 'text') {
    // 文本节点
    newElement = document.createTextNode(virtualDOM.props.textContent);
  } else {
    // 元素节点
    newElement = document.createElement(virtualDOM.type);
    (0,_updateNodeElement__WEBPACK_IMPORTED_MODULE_0__.default)(newElement, virtualDOM);
  }

  return newElement;
}

/***/ }),

/***/ "./src/React/DOM/index.js":
/*!********************************!*\
  !*** ./src/React/DOM/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createDOMElement": () => /* reexport safe */ _createDOMElement__WEBPACK_IMPORTED_MODULE_0__.default,
/* harmony export */   "updateNodeElement": () => /* reexport safe */ _updateNodeElement__WEBPACK_IMPORTED_MODULE_1__.default
/* harmony export */ });
/* harmony import */ var _createDOMElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createDOMElement */ "./src/React/DOM/createDOMElement.js");
/* harmony import */ var _updateNodeElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updateNodeElement */ "./src/React/DOM/updateNodeElement.js");



/***/ }),

/***/ "./src/React/DOM/updateNodeElement.js":
/*!********************************************!*\
  !*** ./src/React/DOM/updateNodeElement.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ updateNodeElement
/* harmony export */ });
function updateNodeElement(newElement, virtualDOM) {
  var oldVirtualDOM = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  // 获取节点对应的属性对象
  var newProps = virtualDOM.props || {};
  var oldProps = oldVirtualDOM.props || {};
  Object.keys(newProps).forEach(function (propsName) {
    // 获取属性值
    var newPropsValue = newProps[propsName];
    var oldPropsValue = oldProps[propsName];

    if (newPropsValue !== oldPropsValue) {
      // 判断属性是否是事件属性，onClick => click
      if (propsName.slice(0, 2) === 'on') {
        // 事件名
        var eventName = propsName.toLowerCase().slice(2); // 为元素添加事件

        newElement.addEventListener(eventName, newPropsValue); // 删除原有事件的事件处理函数

        if (oldPropsValue) {
          newElement.removeEventListener(eventName, oldPropsValue);
        }
      } else if (propsName === 'value' || propsName === 'checked') {
        newElement[propsName] = newPropsValue;
      } else if (propsName !== 'children') {
        if (propsName === 'className') {
          newElement.setAttribute('class', newPropsValue);
        } else {
          newElement.setAttribute(propsName, newPropsValue);
        }
      }
    }
  }); // 判断属性被删除的情况

  Object.keys(oldProps).forEach(function (propsName) {
    var newPropsValue = newProps[propsName];
    var oldPropsValue = oldProps[propsName];

    if (!newPropsValue) {
      // 属性被删了
      if (propsName.slice(0, 2) === 'on') {
        var eventName = propsName.toLowerCase().slice(2);
        newElement.removeEventListener(eventName, oldPropsValue);
      } else if (propsName !== 'children') {
        newElement.removeAttribute(propsName);
      }
    }
  });
}

/***/ }),

/***/ "./src/React/Misc/Arrified/index.js":
/*!******************************************!*\
  !*** ./src/React/Misc/Arrified/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
var arrified = function arrified(children) {
  return Array.isArray(children) ? children : [children];
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (arrified);

/***/ }),

/***/ "./src/React/Misc/CreateStateNode/index.js":
/*!*************************************************!*\
  !*** ./src/React/Misc/CreateStateNode/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../DOM */ "./src/React/DOM/index.js");


var createStateNode = function createStateNode(fiber) {
  if (fiber.tag === 'host_component') {
    return (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)(fiber);
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createStateNode);

/***/ }),

/***/ "./src/React/Misc/CreateTaskQueue/index.js":
/*!*************************************************!*\
  !*** ./src/React/Misc/CreateTaskQueue/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
var createTaskQueue = function createTaskQueue() {
  var taskQueue = [];
  return {
    // 向任务队列添加任务
    push: function push(item) {
      return taskQueue.push(item);
    },
    // 从任务队列获取任务
    pop: function pop() {
      return taskQueue.shift();
    },
    isEmpty: function isEmpty() {
      return taskQueue.length === 0;
    }
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTaskQueue);

/***/ }),

/***/ "./src/React/Misc/GetTag/index.js":
/*!****************************************!*\
  !*** ./src/React/Misc/GetTag/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
var getTag = function getTag(vdom) {
  if (typeof vdom.type === 'string') {
    return 'host_component';
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getTag);

/***/ }),

/***/ "./src/React/Misc/index.js":
/*!*********************************!*\
  !*** ./src/React/Misc/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTaskQueue": () => /* reexport safe */ _CreateTaskQueue__WEBPACK_IMPORTED_MODULE_0__.default,
/* harmony export */   "arrified": () => /* reexport safe */ _Arrified__WEBPACK_IMPORTED_MODULE_1__.default,
/* harmony export */   "createStateNode": () => /* reexport safe */ _CreateStateNode__WEBPACK_IMPORTED_MODULE_2__.default,
/* harmony export */   "getTag": () => /* reexport safe */ _GetTag__WEBPACK_IMPORTED_MODULE_3__.default
/* harmony export */ });
/* harmony import */ var _CreateTaskQueue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreateTaskQueue */ "./src/React/Misc/CreateTaskQueue/index.js");
/* harmony import */ var _Arrified__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Arrified */ "./src/React/Misc/Arrified/index.js");
/* harmony import */ var _CreateStateNode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CreateStateNode */ "./src/React/Misc/CreateStateNode/index.js");
/* harmony import */ var _GetTag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GetTag */ "./src/React/Misc/GetTag/index.js");





/***/ }),

/***/ "./src/React/Reconciliaton/index.js":
/*!******************************************!*\
  !*** ./src/React/Reconciliaton/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* binding */ render
/* harmony export */ });
/* harmony import */ var _Misc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Misc */ "./src/React/Misc/index.js");

var taskQueue = (0,_Misc__WEBPACK_IMPORTED_MODULE_0__.createTaskQueue)();
var subTask = null;

var getFirstTask = function getFirstTask() {
  // 从任务队列中获取任务
  var task = taskQueue.pop();
  var props = task.props,
      dom = task.dom; // 返回最外层节点的fiber对象

  return {
    props: props,
    stateNode: dom,
    tag: 'host_root',
    effects: [],
    child: null
  };
};

var reconcileChildren = function reconcileChildren(fiber, children) {
  // children可能是对象也可能是数组，将children转换成数组
  var arrifiedChildren = (0,_Misc__WEBPACK_IMPORTED_MODULE_0__.arrified)(children);
  var index = 0;
  var numberOfElements = arrifiedChildren.length;
  var element = null;
  var newFiber = null;
  var prevFiber = null;

  while (index < numberOfElements) {
    element = arrifiedChildren[index];
    var _element = element,
        type = _element.type,
        props = _element.props;
    newFiber = {
      type: type,
      props: props,
      tag: (0,_Misc__WEBPACK_IMPORTED_MODULE_0__.getTag)(element),
      effects: [],
      effectsTag: 'placement',
      parent: fiber
    };
    newFiber.stateNode = (0,_Misc__WEBPACK_IMPORTED_MODULE_0__.createStateNode)(newFiber); // 为父级fiber添加子集fiber

    if (index === 0) {
      fiber.child = newFiber;
    } else {
      prevFiber.sibling = newFiber;
    }

    prevFiber = newFiber;
    index++;
  }
};

var executeTask = function executeTask(fiber) {
  reconcileChildren(fiber, fiber.props.children);
  console.log(fiber);
};

var workLoop = function workLoop(deadline) {
  // 如果子任务不存在，就去获取子任务
  if (!subTask) {
    subTask = getFirstTask();
  } // 如果任务存在且浏览器有空余时间，就调用executeTask方法执行任务，接受任务 返回新任务


  while (subTask && deadline.timeRemaining() > 1) {
    subTask = executeTask(subTask);
  }
};

var performTask = function performTask(deadline) {
  // 执行任务
  workLoop(deadline); // 若任务存在或者任务队列里还有任务时，再次利用浏览器空闲时间执行任务

  if (subTask || !taskQueue.isEmpty) {
    requestIdleCallback(performTask);
  }
};

var render = function render(element, dom) {
  /*
    1、向任务队列中添加任务
    2、指定在浏览器空闲时执行任务
  */
  // 通过virtualDOM对象创建Fiber对象
  taskQueue.push({
    dom: dom,
    props: {
      children: element
    }
  }); // 利用浏览器空闲时间执行任务

  requestIdleCallback(performTask);
};

/***/ }),

/***/ "./src/React/index.js":
/*!****************************!*\
  !*** ./src/React/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* reexport safe */ _Reconciliaton__WEBPACK_IMPORTED_MODULE_1__.render,
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _CreateElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreateElement */ "./src/React/CreateElement/index.js");
/* harmony import */ var _Reconciliaton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Reconciliaton */ "./src/React/Reconciliaton/index.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  createElement: _CreateElement__WEBPACK_IMPORTED_MODULE_0__.default
});

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _React__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./React */ "./src/React/index.js");

var root = document.getElementById('root');
var jsx = /*#__PURE__*/_React__WEBPACK_IMPORTED_MODULE_0__.default.createElement("div", null, /*#__PURE__*/_React__WEBPACK_IMPORTED_MODULE_0__.default.createElement("p", null, "Hello React"));
(0,_React__WEBPACK_IMPORTED_MODULE_0__.render)(jsx, root);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=bundle.js.map