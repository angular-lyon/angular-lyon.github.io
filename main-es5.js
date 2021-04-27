(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "+x+M":
    /*!***********************************!*\
      !*** ./src/app/home.component.ts ***!
      \***********************************/

    /*! exports provided: HomeComponent, HomeModule */

    /***/
    function xM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
        return HomeComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeModule", function () {
        return HomeModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _rx_angular_template__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @rx-angular/template */
      "YPP4");
      /* harmony import */


      var _meetup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./meetup.component */
      "VOWc");
      /* harmony import */


      var _slider_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./slider.component */
      "VZsp");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _meetup_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./meetup.service */
      "cJlu");

      function HomeComponent_app_meetup_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-meetup", 3);
        }

        if (rf & 2) {
          var event_r4 = ctx.ngIf;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("event", event_r4);
        }
      }

      function HomeComponent_ng_template_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Pas d'\xE9v\xE8nement pr\xE9vu prochainement, patience. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function HomeComponent_app_meetup_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-meetup", 3);
        }

        if (rf & 2) {
          var event_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("event", event_r5);
        }
      }

      var HomeComponent = /*#__PURE__*/function () {
        function HomeComponent(meetupService) {
          _classCallCheck(this, HomeComponent);

          this.meetupService = meetupService;
          this.upcomingEvent$ = this.meetupService.getUpcomingEvent();
          this.pastEvents$ = this.meetupService.getPastEvents();
        }

        _createClass(HomeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return HomeComponent;
      }();

      HomeComponent.ɵfac = function HomeComponent_Factory(t) {
        return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_meetup_service__WEBPACK_IMPORTED_MODULE_5__["MeetupService"]));
      };

      HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: HomeComponent,
        selectors: [["app-home"]],
        decls: 18,
        vars: 9,
        consts: [[3, "event", 4, "ngIf", "ngIfElse"], ["placeholder", ""], [3, "event", 4, "ngFor", "ngForOf"], [3, "event"], [1, "card"], [1, "placeholder"]],
        template: function HomeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Communaut\xE9");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Notre focus au travers du groupe :");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "app-slider");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Prochain \xE9v\xE8nement");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, HomeComponent_app_meetup_9_Template, 1, 1, "app-meetup", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](10, "push");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, HomeComponent_ng_template_11_Template, 3, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "\xC9v\xE8nements pass\xE9s");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, HomeComponent_app_meetup_16_Template, 1, 1, "app-meetup", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](17, "push");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](10, 3, ctx.upcomingEvent$, "native"))("ngIfElse", _r1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](17, 6, ctx.pastEvents$, "native"));
          }
        },
        directives: [_slider_component__WEBPACK_IMPORTED_MODULE_3__["SliderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgForOf"], _meetup_component__WEBPACK_IMPORTED_MODULE_2__["MeetupComponent"]],
        pipes: [_rx_angular_template__WEBPACK_IMPORTED_MODULE_1__["PushPipe"]],
        styles: ["[_nghost-%COMP%] {\n        width: 100%;\n        display: block;\n      }\n\n      .card[_ngcontent-%COMP%] {\n        margin: 12px 0;\n      }\n\n      app-slider[_ngcontent-%COMP%], section[_ngcontent-%COMP%] {\n        margin-top: 38px;\n      }\n\n      section[_ngcontent-%COMP%]:first-child {\n        margin-top: 58px;\n      }\n\n      section[_ngcontent-%COMP%]:last-child   .card[_ngcontent-%COMP%] {\n        margin-bottom: 0;\n      }"],
        changeDetection: 0
      });

      var HomeModule = function HomeModule() {
        _classCallCheck(this, HomeModule);
      };

      HomeModule.ɵfac = function HomeModule_Factory(t) {
        return new (t || HomeModule)();
      };

      HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: HomeModule
      });
      HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _rx_angular_template__WEBPACK_IMPORTED_MODULE_1__["PushModule"], _slider_component__WEBPACK_IMPORTED_MODULE_3__["SliderModule"], _meetup_component__WEBPACK_IMPORTED_MODULE_2__["MeetupModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](HomeModule, {
          declarations: [HomeComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _rx_angular_template__WEBPACK_IMPORTED_MODULE_1__["PushModule"], _slider_component__WEBPACK_IMPORTED_MODULE_3__["SliderModule"], _meetup_component__WEBPACK_IMPORTED_MODULE_2__["MeetupModule"]],
          exports: [HomeComponent]
        });
      })();
      /***/

    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /home/edouard/work/angular-lyon.github.io/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "6i++":
    /*!****************************************!*\
      !*** ./src/app/autofocus.directive.ts ***!
      \****************************************/

    /*! exports provided: AutofocusDirective, AutofocusModule */

    /***/
    function i(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AutofocusDirective", function () {
        return AutofocusDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AutofocusModule", function () {
        return AutofocusModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AutofocusDirective = /*#__PURE__*/function () {
        function AutofocusDirective(el) {
          _classCallCheck(this, AutofocusDirective);

          this.el = el;
          this.autofocus = false;
        }

        _createClass(AutofocusDirective, [{
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (changes.autofocus.currentValue === true) {
              this.el.nativeElement && this.el.nativeElement.focus({
                preventScroll: true
              });
            }
          }
        }]);

        return AutofocusDirective;
      }();

      AutofocusDirective.ɵfac = function AutofocusDirective_Factory(t) {
        return new (t || AutofocusDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]));
      };

      AutofocusDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: AutofocusDirective,
        selectors: [["", "autofocus", ""]],
        inputs: {
          autofocus: "autofocus"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
      });

      var AutofocusModule = function AutofocusModule() {
        _classCallCheck(this, AutofocusModule);
      };

      AutofocusModule.ɵfac = function AutofocusModule_Factory(t) {
        return new (t || AutofocusModule)();
      };

      AutofocusModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AutofocusModule
      });
      AutofocusModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AutofocusModule, {
          declarations: [AutofocusDirective],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]],
          exports: [AutofocusDirective]
        });
      })();
      /***/

    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "Php1":
    /*!**************************************!*\
      !*** ./src/app/toolbar.component.ts ***!
      \**************************************/

    /*! exports provided: ToolbarComponent, ToolbarModule */

    /***/
    function Php1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function () {
        return ToolbarComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToolbarModule", function () {
        return ToolbarModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ToolbarComponent = /*#__PURE__*/function () {
        function ToolbarComponent() {
          _classCallCheck(this, ToolbarComponent);
        }

        _createClass(ToolbarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ToolbarComponent;
      }();

      ToolbarComponent.ɵfac = function ToolbarComponent_Factory(t) {
        return new (t || ToolbarComponent)();
      };

      ToolbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ToolbarComponent,
        selectors: [["app-toolbar"]],
        decls: 15,
        vars: 0,
        consts: [["role", "banner", 1, "toolbar"], [1, "brand"], ["width", "40", "alt", "Angular Logo", "src", "/assets/angular_white.svg"], [1, "spacer"], [1, "socials"], ["aria-label", "Angular Lyon on Twitter", "href", "https://twitter.com/angular_lyon", "title", "Twitter de Angular Lyon"], ["src", "/assets/twitter.svg", "alt", "Twitter icon"], ["aria-label", "Angular Lyon on Slack", "href", "https://angular-lyon.slack.com/", "title", "Slack de Angular Lyon"], ["src", "/assets/slack.svg", "alt", "Slack icon"], ["aria-label", "Angular Lyon on GitHub", "href", "https://github.com/angular-lyon", "title", "GitHub de Angular Lyon"], ["src", "/assets/github.svg", "alt", "GitHub icon"]],
        template: function ToolbarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Angular Lyon");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Nous retrouver");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "img", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "img", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "img", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }
        },
        styles: [".toolbar[_ngcontent-%COMP%] {\n        height: 60px;\n        display: flex;\n        align-items: center;\n        background-color: #191919;\n        color: white;\n      }\n\n      .socials[_ngcontent-%COMP%] {\n        margin-right: 16px;\n        margin-left: 8px;\n      }\n\n      .socials[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n        height: 22px;\n        width: 22px;\n        margin: 0 6px;\n      }\n\n      .brand[_ngcontent-%COMP%] {\n        display: flex;\n        align-items: center;\n        margin: 0 16px;\n      }\n\n      .brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n        margin-right: 8px;\n      }"],
        changeDetection: 0
      });

      var ToolbarModule = function ToolbarModule() {
        _classCallCheck(this, ToolbarModule);
      };

      ToolbarModule.ɵfac = function ToolbarModule_Factory(t) {
        return new (t || ToolbarModule)();
      };

      ToolbarModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: ToolbarModule
      });
      ToolbarModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ToolbarModule, {
          declarations: [ToolbarComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]],
          exports: [ToolbarComponent]
        });
      })();
      /***/

    },

    /***/
    "RZ5r":
    /*!*************************************!*\
      !*** ./src/app/platform.service.ts ***!
      \*************************************/

    /*! exports provided: PlatformService */

    /***/
    function RZ5r(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PlatformService", function () {
        return PlatformService;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var PlatformService = /*#__PURE__*/function () {
        function PlatformService(platformId) {
          _classCallCheck(this, PlatformService);

          this.platformId = platformId;
        }

        _createClass(PlatformService, [{
          key: "isPlatformBrowser",
          value: function isPlatformBrowser() {
            return Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["isPlatformBrowser"])(this.platformId);
          }
        }]);

        return PlatformService;
      }();

      PlatformService.ɵfac = function PlatformService_Factory(t) {
        return new (t || PlatformService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]));
      };

      PlatformService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: PlatformService,
        factory: PlatformService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _toolbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./toolbar.component */
      "Php1");
      /* harmony import */


      var _banner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./banner.component */
      "dix6");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent() {
          _classCallCheck(this, AppComponent);
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AppComponent;
      }();

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 7,
        vars: 0,
        consts: [["role", "main", 1, "content"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-toolbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-banner");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "main", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Communaut\xE9 Angular Lyon.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_toolbar_component__WEBPACK_IMPORTED_MODULE_1__["ToolbarComponent"], _banner_component__WEBPACK_IMPORTED_MODULE_2__["BannerComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]],
        styles: ["footer[_ngcontent-%COMP%] {\n        margin-top: 28px;\n        padding: 2rem 0;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        line-height: 20px;\n        background-color: #eee;\n        width: 100%;\n      }"],
        changeDetection: 0
      });
      /***/
    },

    /***/
    "VOWc":
    /*!*************************************!*\
      !*** ./src/app/meetup.component.ts ***!
      \*************************************/

    /*! exports provided: MeetupComponent, MeetupModule */

    /***/
    function VOWc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MeetupComponent", function () {
        return MeetupComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MeetupModule", function () {
        return MeetupModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var MeetupComponent = /*#__PURE__*/function () {
        function MeetupComponent() {
          _classCallCheck(this, MeetupComponent);
        }

        _createClass(MeetupComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return MeetupComponent;
      }();

      MeetupComponent.ɵfac = function MeetupComponent_Factory(t) {
        return new (t || MeetupComponent)();
      };

      MeetupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: MeetupComponent,
        selectors: [["app-meetup"]],
        inputs: {
          event: "event"
        },
        decls: 4,
        vars: 3,
        consts: [[1, "card"], [3, "href"], [3, "innerHTML"]],
        template: function MeetupComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "article", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx.event.link, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.event.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx.event.description, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
          }
        },
        styles: [".card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        font-weight: bold;\n        display: block;\n        margin-bottom: 8px;\n      }"],
        changeDetection: 0
      });

      var MeetupModule = function MeetupModule() {
        _classCallCheck(this, MeetupModule);
      };

      MeetupModule.ɵfac = function MeetupModule_Factory(t) {
        return new (t || MeetupModule)();
      };

      MeetupModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: MeetupModule
      });
      MeetupModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MeetupModule, {
          declarations: [MeetupComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]],
          exports: [MeetupComponent]
        });
      })();
      /***/

    },

    /***/
    "VZsp":
    /*!*************************************!*\
      !*** ./src/app/slider.component.ts ***!
      \*************************************/

    /*! exports provided: SliderComponent, SliderModule */

    /***/
    function VZsp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SliderComponent", function () {
        return SliderComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SliderModule", function () {
        return SliderModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _autofocus_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./autofocus.directive */
      "6i++");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _platform_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./platform.service */
      "RZ5r");

      function SliderComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SliderComponent_div_1_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4);

            var index_r2 = ctx.index;

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r3.setActive(index_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var slide_r1 = ctx.$implicit;
          var index_r2 = ctx.index;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("autofocus", index_r2 === ctx_r0.activeIndex ? true : false);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-pressed", index_r2 === ctx_r0.activeIndex ? true : false);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](slide_r1.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](slide_r1.description);
        }
      }

      var SliderComponent = /*#__PURE__*/function () {
        function SliderComponent(cd, platform) {
          var _this = this;

          _classCallCheck(this, SliderComponent);

          this.cd = cd;
          this.platform = platform;
          this.slides = [{
            value: "discussions",
            description: "Discussions libres.",
            detail: "Des discussions libres pour les gurus, les rookies ou simplement les curieux.",
            icon: "👥"
          }, {
            value: "talks",
            description: "Talks sur des sujets associés à Angular.",
            detail: "Des talks à propos d'Angular et son écosystème.",
            icon: "🗣"
          }, {
            value: "workshops",
            description: "Workshops autour d'Angular.",
            detail: "La pratique d'un sujet en particulier au travers de travaux guidés.",
            icon: "🛠"
          }, {
            value: "bring-your-problem",
            description: "Ramène ton problème.",
            detail: "On réfléchi à une solution ensemble, puis on propose un workshop pour le résoudre.",
            icon: "🐞"
          }];
          this.activeIndex = 0;
          this.timer$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(5000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function () {
            _this.setActive(_this.activeIndex + 1 > _this.slides.length - 1 ? 0 : _this.activeIndex + 1);

            _this.cd.detectChanges();
          }));
        }

        _createClass(SliderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.platform.isPlatformBrowser()) {
              this.timer$.subscribe();
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.platform.isPlatformBrowser()) {
              this.slideSub && this.slideSub.unsubscribe();
            }
          }
        }, {
          key: "setActive",
          value: function setActive(index) {
            this.activeIndex = index;
            this.slideSub && this.slideSub.unsubscribe();
            this.slideSub = this.timer$.subscribe();
          }
        }]);

        return SliderComponent;
      }();

      SliderComponent.ɵfac = function SliderComponent_Factory(t) {
        return new (t || SliderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_platform_service__WEBPACK_IMPORTED_MODULE_5__["PlatformService"]));
      };

      SliderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: SliderComponent,
        selectors: [["app-slider"]],
        decls: 4,
        vars: 2,
        consts: [[1, "card-container"], ["class", "card", "role", "button", "tabindex", "0", 3, "autofocus", "click", 4, "ngFor", "ngForOf"], [1, "details"], ["role", "button", "tabindex", "0", 1, "card", 3, "autofocus", "click"], [1, "icon"]],
        template: function SliderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, SliderComponent_div_1_Template, 5, 4, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.slides);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.slides[ctx.activeIndex].detail, " ");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["NgForOf"], _autofocus_directive__WEBPACK_IMPORTED_MODULE_3__["AutofocusDirective"]],
        styles: ["[_nghost-%COMP%] {\n        display: block;\n      }\n\n      .card-container[_ngcontent-%COMP%] {\n        display: flex;\n        justify-content: center;\n      }\n\n      .card[_ngcontent-%COMP%]:first-child {\n        margin-left: 0;\n      }\n\n      .card[_ngcontent-%COMP%]:last-child {\n        margin-right: 0;\n      }\n\n      .card[_ngcontent-%COMP%] {\n        display: flex;\n        flex-direction: column;\n        flex-basis: 180px;\n        text-align: center;\n        cursor: pointer;\n      }\n\n      .icon[_ngcontent-%COMP%] {\n        display: block;\n        margin-bottom: 8px;\n        text-align: center;\n        font-size: 22px;\n      }\n\n      .card[_ngcontent-%COMP%]:focus {\n        transform: translateY(-3px);\n        background: #fff;\n        box-shadow: 0 2px 10px rgb(0 0 0 / 11%);\n        outline: none;\n      }\n\n      .details[_ngcontent-%COMP%] {\n        margin: 20px 0;\n        font-size: 1.4rem;\n        font-style: italic;\n      }"],
        changeDetection: 0
      });

      var SliderModule = function SliderModule() {
        _classCallCheck(this, SliderModule);
      };

      SliderModule.ɵfac = function SliderModule_Factory(t) {
        return new (t || SliderModule)();
      };

      SliderModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: SliderModule
      });
      SliderModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _autofocus_directive__WEBPACK_IMPORTED_MODULE_3__["AutofocusModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](SliderModule, {
          declarations: [SliderComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _autofocus_directive__WEBPACK_IMPORTED_MODULE_3__["AutofocusModule"]],
          exports: [SliderComponent]
        });
      })();
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _nguniversal_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @nguniversal/common */
      "rsbC");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _banner_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./banner.component */
      "dix6");
      /* harmony import */


      var _home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./home.component */
      "+x+M");
      /* harmony import */


      var _toolbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./toolbar.component */
      "Php1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵfac = function AppModule_Factory(t) {
        return new (t || AppModule)();
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"].withServerTransition({
          appId: 'serverApp'
        }), _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserTransferStateModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientJsonpModule"], _nguniversal_common__WEBPACK_IMPORTED_MODULE_3__["TransferHttpCacheModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot([{
          path: '',
          component: _home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
          pathMatch: 'full'
        }]), _toolbar_component__WEBPACK_IMPORTED_MODULE_7__["ToolbarModule"], _banner_component__WEBPACK_IMPORTED_MODULE_5__["BannerModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserTransferStateModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientJsonpModule"], _nguniversal_common__WEBPACK_IMPORTED_MODULE_3__["TransferHttpCacheModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _toolbar_component__WEBPACK_IMPORTED_MODULE_7__["ToolbarModule"], _banner_component__WEBPACK_IMPORTED_MODULE_5__["BannerModule"]]
        });
      })();
      /***/

    },

    /***/
    "cJlu":
    /*!***********************************!*\
      !*** ./src/app/meetup.service.ts ***!
      \***********************************/

    /*! exports provided: MeetupService */

    /***/
    function cJlu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MeetupService", function () {
        return MeetupService;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _platform_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./platform.service */
      "RZ5r");

      var MeetupService = /*#__PURE__*/function () {
        function MeetupService(http, platform) {
          _classCallCheck(this, MeetupService);

          this.http = http;
          this.platform = platform;
          this.baseUrl = "https://api.meetup.com";
        }
        /** Weird trick used below :
         *  Because of CORS restrictions jsonp is used in dev without prerender.
         *  In production only one GET request is executed on the server-side during the prerender process
         *  because of the TransferHttpCacheModule, it would prevent sending another GET request client-side
         *  and fail for CORS reasons. */


        _createClass(MeetupService, [{
          key: "getUpcomingEvent",
          value: function getUpcomingEvent() {
            if (this.platform.isPlatformBrowser() && src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production === false) {
              return this.http.jsonp(this.baseUrl + "/Angular-Lyon/events", "callback").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (_ref) {
                var _ref$data = _slicedToArray(_ref.data, 1),
                    event = _ref$data[0];

                return event !== null && event !== void 0 ? event : null;
              }));
            }

            return this.http.get(this.baseUrl + "/Angular-Lyon/events").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (_ref2) {
              var _ref3 = _slicedToArray(_ref2, 1),
                  event = _ref3[0];

              return event !== null && event !== void 0 ? event : null;
            }));
          }
        }, {
          key: "getPastEvents",
          value: function getPastEvents() {
            if (this.platform.isPlatformBrowser() && src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production === false) {
              return this.http.jsonp(this.baseUrl + "/Angular-Lyon/events?status=past", "callback").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (_ref4) {
                var data = _ref4.data;
                return data;
              }));
            }

            return this.http.get(this.baseUrl + "/Angular-Lyon/events?status=past");
          }
        }]);

        return MeetupService;
      }();

      MeetupService.ɵfac = function MeetupService_Factory(t) {
        return new (t || MeetupService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_platform_service__WEBPACK_IMPORTED_MODULE_4__["PlatformService"]));
      };

      MeetupService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: MeetupService,
        factory: MeetupService.ɵfac,
        providedIn: "root"
      });
      /***/
    },

    /***/
    "dix6":
    /*!*************************************!*\
      !*** ./src/app/banner.component.ts ***!
      \*************************************/

    /*! exports provided: BannerComponent, BannerModule */

    /***/
    function dix6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BannerComponent", function () {
        return BannerComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BannerModule", function () {
        return BannerModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var BannerComponent = /*#__PURE__*/function () {
        function BannerComponent() {
          _classCallCheck(this, BannerComponent);
        }

        _createClass(BannerComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return BannerComponent;
      }();

      BannerComponent.ɵfac = function BannerComponent_Factory(t) {
        return new (t || BannerComponent)();
      };

      BannerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: BannerComponent,
        selectors: [["app-banner"]],
        decls: 6,
        vars: 0,
        consts: [["role", "img", 1, "cover"], ["role", "main", 1, "content"], [1, "card", "highlight-card"], ["alt", "Angular Logo", "src", "/assets/angular.svg", 1, "logo"]],
        template: function BannerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Anim\xE9e par des d\xE9veloppeurs passionn\xE9s, la communaut\xE9 Angular Lyon se concentre sur le partage d'exp\xE8rience, d'erreurs, et des bonnes pratiques. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }
        },
        styles: ["[_nghost-%COMP%] {\n        display: block;\n      }\n\n      .content[_ngcontent-%COMP%] {\n        margin-top: -50px;\n      }\n\n      .highlight-card[_ngcontent-%COMP%] {\n        background-color: #1976d2;\n        text-align: center;\n        color: white;\n        border: none;\n        display: flex;\n        flex-direction: row;\n        justify-content: center;\n        align-items: center;\n        width: auto;\n        margin: auto;\n        max-width: 650px;\n        min-width: 30%;\n        box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);\n        padding: 1.2rem 16px 16px;\n      }\n\n      .card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n        line-height: 28px;\n        font-size: 1.2rem;\n      }\n\n      .logo[_ngcontent-%COMP%] {\n        position: absolute;\n        width: 136px;\n        top: -115px;\n        filter: drop-shadow( 0px 3px 4px rgba(0, 0, 0, .7));\n      }\n\n      .cover[_ngcontent-%COMP%] {\n        background-image: url(\"/assets/cover_800.jpg\");\n        background-image: -webkit-image-set(\n          url(\"/assets/cover_1200.jpg\") 1x,\n          url(\"/assets/cover_1900.jpg\") 2x,\n          url(\"/assets/cover_2400.jpg\") 3x,\n          url(\"/assets/cover_3200.jpg\") 4x\n        );\n        background-image: image-set(\n          url(\"/assets/cover_1200.jpg\") 1x,\n          url(\"/assets/cover_1900.jpg\") 2x,\n          url(\"/assets/cover_2400.jpg\") 3x,\n          url(\"/assets/cover_3200.jpg\") 4x\n        );\n        background-position: 50% 50%;\n        background-repeat: no-repeat;\n        background-size: cover;\n        height: 524px;\n      }\n\n      @media screen and (max-width: 767px) {\n        .cover[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n          width: 100%;\n        }\n      }"],
        changeDetection: 0
      });

      var BannerModule = function BannerModule() {
        _classCallCheck(this, BannerModule);
      };

      BannerModule.ɵfac = function BannerModule_Factory(t) {
        return new (t || BannerModule)();
      };

      BannerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: BannerModule
      });
      BannerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](BannerModule, {
          declarations: [BannerComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]],
          exports: [BannerComponent]
        });
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
      }

      document.addEventListener('DOMContentLoaded', function () {
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
          return console.error(err);
        });
      });
      /***/
    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map