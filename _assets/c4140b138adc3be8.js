(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
  [86783],
  {
    /***/ 910906: function (_, __, __webpack_require__) {
      __webpack_require__.n_x = __webpack_require__.n;
      const __web_req__ = __webpack_require__;
      __web_req__(813110);
      self._7ccc7343da2ae983607b3819c7bc1f93 =
        self._7ccc7343da2ae983607b3819c7bc1f93 || {};
      (function (__c) {
        var n7b = function (a) {
            a.VK && (a.VK(), (a.VK = null));
            const b = a.props.Jab;
            b.forEach((c) => {
              window.addEventListener(c, a.rFa);
            });
            a.VK = () => {
              b.forEach((c) => {
                window.removeEventListener(c, a.rFa);
              });
            };
          },
          t7b = function (a) {
            return o7b((b) => {
              const [{ store: c, va: d }] = p7b(() => {
                const e = new q7b(),
                  f = new r7b(e);
                return { store: e, va: f };
              });
              return C6(s7b, {
                R2: d.reset,
                children: C6(__c.sqb, {
                  $gb: d,
                  ahb: c,
                  ePa: a.vv.contains(b.url),
                  children: ({ uo: e }) =>
                    C6(__c.cC, {
                      url: b.url,
                      store: a.vv,
                      Yn: a.vt,
                      Hx: a.Hx,
                      Um: a.Um,
                      uo: e,
                      wB: b.wB,
                      AU: b.AU,
                    }),
                }),
              });
            });
          },
          v7b = function (a) {
            return u7b(function (b) {
              return C6("div", {
                style: { width: "100%", height: "100%", all: "initial" },
                children: C6(a.ke, {
                  text: b.text,
                  animation: void 0,
                  rd: void 0,
                  nb: void 0,
                  Ua: void 0,
                  mg: [],
                  writingMode: 1,
                }),
              });
            });
          },
          C6 = __webpack_require__(443763).jsx;
        var D6 = __webpack_require__(875604),
          w7b = D6.Component,
          u7b = D6.memo,
          p7b = D6.useState;
        var x7b = __webpack_require__(519427),
          E6 = x7b.action,
          y7b = x7b.observable;
        var o7b = __webpack_require__(446474).Pi;
        var z7b = class extends w7b {
          render() {
            const {
              children: a,
              component: b = "div",
              hpb: c,
              Tda: d,
            } = this.props;
            let e = {};
            d &&
              (e = c.reduce((f, g) => {
                f[g] = this.D5a;
                return f;
              }, {}));
            return C6(b, { className: "_kI3Pw", ...e, children: a });
          }
          componentDidMount() {
            this.props.Tda && n7b(this);
          }
          componentDidUpdate() {
            this.props.Tda && n7b(this);
          }
          componentWillUnmount() {
            this.VK && (this.VK(), (this.VK = null));
          }
          constructor(...a) {
            super(...a);
            this.qka = this.VK = null;
            this.D5a = (b) => {
              this.qka = b.nativeEvent;
            };
            this.rFa = (b) => {
              const c = this.props.Tda,
                d = this.qka === b;
              c && !d && c(b);
              this.qka = null;
            };
          }
        };
        var s7b = (a) =>
          C6(z7b, {
            hpb: ["onMouseDown", "onTouchStart"],
            Jab: ["mousedown", "touchstart"],
            Tda: a.R2,
            children: a.children,
          });
        var q7b = class {
            static A(a) {
              __c.P(a, { uo: y7b.ref });
            }
            constructor() {
              this.uo = (q7b.A(this), !0);
            }
          },
          r7b = class {
            static A(a) {
              __c.P(a, {
                onDoubleClick: E6.bound,
                onTouchEnd: E6.bound,
                reset: E6.bound,
              });
            }
            onDoubleClick() {
              this.store.uo = !1;
            }
            onTouchEnd(a) {
              a.touches.length > 0 ||
                (this.vP
                  ? (window.clearTimeout(this.vP),
                    (this.vP = void 0),
                    (this.store.uo = !1))
                  : (this.vP = window.setTimeout(
                      () => (this.vP = void 0),
                      300
                    )));
            }
            reset() {
              this.store.uo = !0;
            }
            HR() {
              this.vP && window.clearTimeout(this.vP);
            }
            constructor(a) {
              this.store = a;
              this.vP = (r7b.A(this), void 0);
            }
          };
        __c.XQa = {
          Xgb: function (a) {
            const b = t7b({
                Hx: (d, e) =>
                  a.H.error(d, {
                    qe: "widget: ",
                    extra: new Map(Object.entries(e)),
                  }),
                Um: a.Um,
                vv: a.vv,
                vt: a.vt,
              }),
              c = v7b({ ke: a.ke });
            return { f4a: b, R4a: c };
          },
        };
      }.call(self, self._7ccc7343da2ae983607b3819c7bc1f93));
    },
  },
]);
//# sourceMappingURL=sourcemaps/c4140b138adc3be8.js.map
