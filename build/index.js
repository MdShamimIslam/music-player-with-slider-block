/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../Components/utils/functions.js":
/*!****************************************!*\
  !*** ../Components/utils/functions.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getBoxValue: () => (/* binding */ getBoxValue),
/* harmony export */   getImageSizes: () => (/* binding */ getImageSizes),
/* harmony export */   tabController: () => (/* binding */ tabController)
/* harmony export */ });
const getBoxValue = object => Object.values(object).join(' ');
const getImageSizes = (image, imageSizes) => {
  if (!image) return [];
  let options = [];
  const sizes = image.media_details.sizes;
  for (const key in sizes) {
    const imageSize = imageSizes.find(s => s.slug === key);
    if (imageSize) {
      options.push({
        label: imageSize.name,
        value: sizes[key].source_url
      });
    }
  }
  return options;
};
const tabController = () => {
  setTimeout(() => {
    const panelBodies = document.querySelectorAll('.components-panel__body-title button');
    panelBodies.forEach(item => {
      item.addEventListener('click', clickEveryItem);
    });
    function clickEveryItem() {
      this.removeEventListener('click', clickEveryItem);
      panelBodies.forEach(item => {
        if (item.getAttribute('aria-expanded') === 'true' && !item.isEqualNode(this)) {
          item.click();
        }
      });
      setTimeout(() => {
        this.addEventListener('click', clickEveryItem);
      }, 500);
    }
  }, 500);
};

/***/ }),

/***/ "./src/Components/Backend/Edit.js":
/*!****************************************!*\
  !*** ./src/Components/Backend/Edit.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Common_Style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Common/Style */ "./src/Components/Common/Style.js");
/* harmony import */ var _Settings_Settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Settings/Settings */ "./src/Components/Backend/Settings/Settings.js");
/* harmony import */ var _MusicPlayerBack_MusicPlayerBack__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MusicPlayerBack/MusicPlayerBack */ "./src/Components/Backend/MusicPlayerBack/MusicPlayerBack.js");





const Edit = props => {
  const {
    attributes,
    setAttributes,
    clientId
  } = props;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Settings_Settings__WEBPACK_IMPORTED_MODULE_3__["default"], {
    attributes,
    setAttributes
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)()
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Common_Style__WEBPACK_IMPORTED_MODULE_2__["default"], {
    attributes: attributes,
    id: `block-${clientId}`
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bBlocksMusicPlayer"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MusicPlayerBack_MusicPlayerBack__WEBPACK_IMPORTED_MODULE_4__["default"], {
    attributes: attributes,
    setAttributes: setAttributes
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./src/Components/Backend/MusicPlayerBack/MusicPlayerBack.js":
/*!*******************************************************************!*\
  !*** ./src/Components/Backend/MusicPlayerBack/MusicPlayerBack.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/icons */ "./src/utils/icons.js");
/* harmony import */ var _utils_options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/options */ "./src/utils/options.js");




const MusicPlayerBack = ({
  attributes,
  setAttributes
}) => {
  const [isPlaying, setIsPlaying] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    currentMusicIndex
  } = attributes;
  const audioRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const [progress, setProgress] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (audio.paused) {
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };
  const changeMusic = direction => {
    const audio = audioRef.current;
    let newIndex = currentMusicIndex;
    if (direction === "forward") {
      newIndex = (currentMusicIndex + 1) % _utils_options__WEBPACK_IMPORTED_MODULE_2__.musics.length;
    } else if (direction === "backward") {
      newIndex = (currentMusicIndex - 1 + _utils_options__WEBPACK_IMPORTED_MODULE_2__.musics.length) % _utils_options__WEBPACK_IMPORTED_MODULE_2__.musics.length;
    }
    setAttributes({
      currentMusicIndex: newIndex
    });
    audio.src = _utils_options__WEBPACK_IMPORTED_MODULE_2__.musics[newIndex].source;
    if (isPlaying) {
      audio.play();
    }
  };
  const updateProgress = () => {
    const audio = audioRef.current;
    const currentTime = audio.currentTime;
    const duration = audio.duration;
    const progress = currentTime / duration * 100;
    setProgress(progress);
  };
  const handleSeek = event => {
    const audio = audioRef.current;
    const seekTime = event.target.value / 100 * audio.duration;
    audio.currentTime = seekTime;
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "mainMusicPlayer"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "swiper-wrapper"
  }, _utils_options__WEBPACK_IMPORTED_MODULE_2__.musics.map((music, idx) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    key: idx,
    className: "swiper-slide"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: music.img
  })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "music-player"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, _utils_options__WEBPACK_IMPORTED_MODULE_2__.musics[currentMusicIndex].title), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, _utils_options__WEBPACK_IMPORTED_MODULE_2__.musics[currentMusicIndex].name), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("audio", {
    id: "song",
    ref: audioRef,
    onTimeUpdate: updateProgress,
    onEnded: () => changeMusic('forward')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("source", {
    src: _utils_options__WEBPACK_IMPORTED_MODULE_2__.musics[currentMusicIndex].source,
    type: "audio/mpeg"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    value: progress ? progress : 0,
    onChange: handleSeek,
    defaultValue: "0",
    id: "progress",
    type: "range"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "controls"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "backward",
    onClick: () => changeMusic('backward')
  }, " ", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_utils_icons__WEBPACK_IMPORTED_MODULE_1__.FaBackward, null)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "play-pause-btn",
    onClick: togglePlayPause
  }, isPlaying ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_utils_icons__WEBPACK_IMPORTED_MODULE_1__.FaPause, {
    id: "controlIcon"
  }) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_utils_icons__WEBPACK_IMPORTED_MODULE_1__.FaPlay, {
    id: "controlIcon"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "forward",
    onClick: () => changeMusic('forward')
  }, " ", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_utils_icons__WEBPACK_IMPORTED_MODULE_1__.FaForward, null))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MusicPlayerBack);

/***/ }),

/***/ "./src/Components/Backend/Settings/General/General.js":
/*!************************************************************!*\
  !*** ./src/Components/Backend/Settings/General/General.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);




const General = () => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    className: "bPlPanelBody",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('General Settings', 'b-blocks'),
    initialOpen: false
  }, "General"));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (General);

/***/ }),

/***/ "./src/Components/Backend/Settings/Settings.js":
/*!*****************************************************!*\
  !*** ./src/Components/Backend/Settings/Settings.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_options__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/options */ "./src/utils/options.js");
/* harmony import */ var _Components_utils_functions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../Components/utils/functions */ "../Components/utils/functions.js");
/* harmony import */ var _General_General__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./General/General */ "./src/Components/Backend/Settings/General/General.js");
/* harmony import */ var _Style_Style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Style/Style */ "./src/Components/Backend/Settings/Style/Style.js");








const Settings = ({
  attributes,
  setAttributes
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TabPanel, {
    className: "bPlTabPanel",
    activeClass: "activeTab",
    tabs: _utils_options__WEBPACK_IMPORTED_MODULE_3__.generalStyleTabs,
    onSelect: _Components_utils_functions__WEBPACK_IMPORTED_MODULE_4__.tabController
  }, tab => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, 'general' === tab.name && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_General_General__WEBPACK_IMPORTED_MODULE_5__["default"], {
    attributes,
    setAttributes
  })), 'style' === tab.name && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Style_Style__WEBPACK_IMPORTED_MODULE_6__["default"], {
    attributes,
    setAttributes
  }))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Settings);

/***/ }),

/***/ "./src/Components/Backend/Settings/Style/Style.js":
/*!********************************************************!*\
  !*** ./src/Components/Backend/Settings/Style/Style.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);




const Style = () => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    className: "bPlPanelBody",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Style Settings', 'b-blocks'),
    initialOpen: false
  }, "Style"));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Style);

/***/ }),

/***/ "./src/Components/Common/Style.js":
/*!****************************************!*\
  !*** ./src/Components/Common/Style.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Style = ({
  id
}) => {
  const mainSl = `#${id}`;
  const blockSl = `${mainSl} .bBlocksMusicPlayer`;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", {
    dangerouslySetInnerHTML: {
      __html: `

				${blockSl} {
					
				}

	    `
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Style);

/***/ }),

/***/ "./src/utils/icons.js":
/*!****************************!*\
  !*** ./src/utils/icons.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FaBackward: () => (/* binding */ FaBackward),
/* harmony export */   FaForward: () => (/* binding */ FaForward),
/* harmony export */   FaPause: () => (/* binding */ FaPause),
/* harmony export */   FaPlay: () => (/* binding */ FaPlay),
/* harmony export */   FaYoutube: () => (/* binding */ FaYoutube),
/* harmony export */   blockIcon: () => (/* binding */ blockIcon)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const iconColor = '#4527a4';
const blockIcon = {
  src: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    viewBox: "0 0 512 512",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M256 80C149.9 80 62.4 159.4 49.6 262c9.4-3.8 19.6-6 30.4-6c26.5 0 48 21.5 48 48l0 128c0 26.5-21.5 48-48 48c-44.2 0-80-35.8-80-80l0-16 0-48 0-48C0 146.6 114.6 32 256 32s256 114.6 256 256l0 48 0 48 0 16c0 44.2-35.8 80-80 80c-26.5 0-48-21.5-48-48l0-128c0-26.5 21.5-48 48-48c10.8 0 21 2.1 30.4 6C449.6 159.4 362.1 80 256 80z"
  })),
  foreground: iconColor
};
function FaForward(props) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    stroke: "currentColor",
    fill: "currentColor",
    strokeWidth: 0,
    viewBox: "0 0 512 512",
    height: "1em",
    width: "1em",
    ...props
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M500.5 231.4l-192-160C287.9 54.3 256 68.6 256 96v320c0 27.4 31.9 41.8 52.5 24.6l192-160c15.3-12.8 15.3-36.4 0-49.2zm-256 0l-192-160C31.9 54.3 0 68.6 0 96v320c0 27.4 31.9 41.8 52.5 24.6l192-160c15.3-12.8 15.3-36.4 0-49.2z"
  }));
}
function FaBackward(props) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    stroke: "currentColor",
    fill: "currentColor",
    strokeWidth: 0,
    viewBox: "0 0 512 512",
    height: "1em",
    width: "1em",
    ...props
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M11.5 280.6l192 160c20.6 17.2 52.5 2.8 52.5-24.6V96c0-27.4-31.9-41.8-52.5-24.6l-192 160c-15.3 12.8-15.3 36.4 0 49.2zm256 0l192 160c20.6 17.2 52.5 2.8 52.5-24.6V96c0-27.4-31.9-41.8-52.5-24.6l-192 160c-15.3 12.8-15.3 36.4 0 49.2z"
  }));
}
function FaPlay(props) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    stroke: "currentColor",
    fill: "currentColor",
    strokeWidth: 0,
    viewBox: "0 0 448 512",
    height: "1em",
    width: "1em",
    ...props
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"
  }));
}
function FaPause(props) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    stroke: "currentColor",
    fill: "currentColor",
    strokeWidth: 0,
    viewBox: "0 0 448 512",
    height: "1em",
    width: "1em",
    ...props
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48z"
  }));
}
function FaYoutube(props) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    stroke: "currentColor",
    fill: "currentColor",
    strokeWidth: 0,
    viewBox: "0 0 576 512",
    height: "1em",
    width: "1em",
    ...props
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
  }));
}

/***/ }),

/***/ "./src/utils/options.js":
/*!******************************!*\
  !*** ./src/utils/options.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generalStyleTabs: () => (/* binding */ generalStyleTabs),
/* harmony export */   musics: () => (/* binding */ musics)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);

const generalStyleTabs = [{
  name: 'general',
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('General', 'music-player')
}, {
  name: 'style',
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Style', 'music-player')
}];
const musics = [{
  title: "Symphony",
  name: "Clean Bandit ft. Zara Larsson",
  source: "https://github.com/ecemgo/mini-samples-great-tricks/raw/main/song-list/Clean-Bandit-Symphony.mp3",
  img: "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/d3ca28bf-e1b7-467e-a00b-c7785be8e397",
  link: "https://www.youtube.com/watch?v=aatr_2MstrI&ab_channel=CleanBandit"
}, {
  title: "Pawn It All",
  name: "Alicia Keys",
  source: "https://github.com/ecemgo/mini-samples-great-tricks/raw/main/song-list/Pawn-It-All.mp3",
  img: "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/1afe4c6a-0287-43f0-9076-92f8be49d9dc",
  link: "https://www.youtube.com/watch?v=qEnfeG8uBRY&ab_channel=AliciaKeys-Topic"
}, {
  title: "Seni Dert Etmeler",
  name: "Madrigal",
  source: "https://github.com/ecemgo/mini-samples-great-tricks/raw/main/song-list/Madrigal-Seni-Dert-Etmeler.mp3",
  img: "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/abaa23bd-8c93-4219-a3ef-0d0cb6f12566",
  link: "https://www.youtube.com/watch?v=LgsaD-vNJ9M"
}, {
  title: "Instant Crush",
  name: "Daft Punk ft. Julian Casablancas",
  source: "https://github.com/ecemgo/mini-samples-great-tricks/raw/main/song-list/Daft-Punk-Instant-Crush.mp3",
  img: "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/bd9bcc80-a9ab-4d54-a460-ffdb77f22a72",
  link: "https://www.youtube.com/watch?v=a5uQMwRMHcs&ab_channel=DaftPunkVEVO"
}, {
  title: "As It Was",
  name: "Harry Styles",
  source: "https://github.com/ecemgo/mini-samples-great-tricks/raw/main/song-list/Harry-Styles-As-It-Was.mp3",
  img: "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/18bc2436-740b-44c4-9dd8-fd7be51a07ad",
  link: "https://www.youtube.com/watch?v=H5v3kku4y6Q&ab_channel=HarryStylesVEVO"
}, {
  title: "Physical",
  name: "Dua Lipa",
  source: "https://github.com/ecemgo/mini-samples-great-tricks/raw/main/song-list/Dua-Lipa-Physical.mp3",
  img: "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/4c5c1727-8b32-48c1-91de-b0496ccf10f6",
  link: "https://www.youtube.com/watch?v=9HDEHj2yzew&ab_channel=DuaLipa"
}, {
  title: "Delicate",
  name: "Taylor Swift",
  source: "https://github.com/ecemgo/mini-samples-great-tricks/raw/main/song-list/Taylor-Swift-Delicate.mp3",
  img: "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/23e440e5-a0fa-4a85-8175-bcc485a20ee6",
  link: "https://www.youtube.com/watch?v=tCXGJQYZ9JA&ab_channel=TaylorSwiftVEVO"
}];

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./src/block.json":
/*!************************!*\
  !*** ./src/block.json ***!
  \************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"mpws/music-player","version":"1.0.0","title":"Music Player with Slider","category":"widgets","description":"Add a customizable music player with an interactive slider to your WordPress posts and pages.","keywords":["music","player","music player","music player","music slider"],"textdomain":"music-player","attributes":{"align":{"type":"string","default":""},"currentMusicIndex":{"type":"string","default":0}},"supports":{"align":["wide","full"],"html":false},"example":{"attributes":{}},"editorScript":"file:./index.js","editorStyle":"file:./style-index.css","style":"file:./style-view.css","render":"file:./render.php","viewScript":["file:./view.js","react","react-dom"]}');

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
/******/ 			return cachedModule.exports;
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ "./src/index.scss");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block.json */ "./src/block.json");
/* harmony import */ var _Components_Backend_Edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Components/Backend/Edit */ "./src/Components/Backend/Edit.js");
/* harmony import */ var _utils_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/icons */ "./src/utils/icons.js");





(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_2__, {
  icon: _utils_icons__WEBPACK_IMPORTED_MODULE_4__.blockIcon,
  edit: _Components_Backend_Edit__WEBPACK_IMPORTED_MODULE_3__["default"]
});
/******/ })()
;
//# sourceMappingURL=index.js.map