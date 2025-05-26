(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
  [4143],
  {
    /***/ 994944: function (_, __, __webpack_require__) {
      __webpack_require__.n_x = __webpack_require__.n;
      const __web_req__ = __webpack_require__;
      __web_req__(813110);
      __web_req__(59534);
      self._7ccc7343da2ae983607b3819c7bc1f93 =
        self._7ccc7343da2ae983607b3819c7bc1f93 || {};
      (function (__c) {
        var E = __c.E;
        var P = __c.P;
        var y0b = function (a, b = "medium") {
            if (a !== null && a !== void 0 && a.length) {
              var c = window.devicePixelRatio || 1,
                d = (typeof b === "number" ? b : x0b(b)) * c;
              return [...a].sort((e, f) => {
                e = e.width;
                f = f.width;
                return e > d && f < d
                  ? -1
                  : e < d && f > d
                  ? 1
                  : Math.abs(e - d) - Math.abs(f - d);
              })[0].url;
            }
          },
          E0b = function (a, b) {
            class c {
              static A(d) {
                P(d, { Ee: G4, Kka: G4 });
              }
              get Ee() {
                switch (this.Kka) {
                  case "date":
                    return new z0b(this.rn, b.language || "en-AU");
                  case "select":
                    return new A0b(this.rn);
                  case "mention":
                    return new B0b(this.rn);
                  case "embed":
                    return new C0b(this.rn);
                  case "plain_number":
                  case "currency":
                  case "percentage":
                  case void 0:
                    break;
                  default:
                    throw new E(this.Kka);
                }
              }
              get Kka() {
                var d;
                return (d = this.rn.Jo) === null || d === void 0
                  ? void 0
                  : d.type;
              }
              constructor(d) {
                this.context = d;
                this.rn = (c.A(this), void 0);
                this.rn = __c.D(a.zv(d.sheet, d.na, d.column));
              }
            }
            return D0b((d) => new c(d).Ee);
          },
          G0b = function () {
            const a = H4(() => new Map(), []);
            return {
              Jeb: (b) => {
                if (a.has(b)) return __c.D(a.get(b));
                const c = F0b();
                a.set(b, c);
                return c;
              },
            };
          },
          H0b = function (a, b) {
            return H4(() => {
              const c = new Map();
              return (d) => {
                if (c.has(d)) return __c.D(c.get(d));
                const e = a(d);
                c.set(d, e);
                return e;
              };
            }, b);
          },
          O0b = function ({
            children: a,
            keyFrame: b,
            CZa: c,
            ariaLive: d,
            xPa: e = !1,
            o6a: f,
            hna: g,
            ebb: h,
            GCb: k,
            MIa: l,
            KKa: m,
            ECb: n,
            nub: p,
          }) {
            const { Jeb: q } = G0b(),
              { Jdb: r, Cpb: t } = I0b(b, a),
              v = H0b(
                (u) => () => {
                  (e === !1 || (typeof e === "function" && !e(u))) && t(u);
                },
                [t, e]
              );
            return I4("div", {
              className: J4(g, "_9GxJfQ", {
                KwB0XQ: l === "hidden",
                WV1Mmw: c === "fill-height",
                _2uSJxw: c === "flex-grow",
              }),
              children: I4("div", {
                className: J4("m2VaAA", h),
                "aria-live": d,
                style: k,
                role: "region",
                children: [
                  ...r.map(({ key: u, element: x }) =>
                    I4(
                      J0b,
                      {
                        in: u === b,
                        timeout: f,
                        classNames: p,
                        mountOnEnter: !0,
                        unmountOnExit: !e,
                        nodeRef: q(u),
                        onExited: v(u),
                        children: (y) =>
                          I4(K0b.Provider, {
                            value: y,
                            children: I4("div", {
                              className: J4("KxXR9g", n, {
                                KwB0XQ: m === "hidden",
                              }),
                              ref: q(u),
                              "aria-hidden":
                                y === L0b || y === M0b || y === N0b,
                              children: u === b ? a : x,
                            }),
                          }),
                      },
                      u
                    )
                  ),
                  r.every((u) => u.key !== b) &&
                    I4(
                      J0b,
                      {
                        in: !1,
                        timeout: f,
                        classNames: p,
                        mountOnEnter: !0,
                        unmountOnExit: !e,
                        nodeRef: q(b),
                        onExited: e ? void 0 : v(b),
                        children: (u) =>
                          I4(K0b.Provider, {
                            value: u,
                            children: I4("div", {
                              className: J4("KxXR9g", n),
                              ref: q(b),
                              "aria-hidden":
                                u === L0b || u === M0b || u === N0b,
                              children: a,
                            }),
                          }),
                      },
                      b
                    ),
                ],
              }),
            });
          },
          I0b = function (a, b) {
            const [c, d] = P0b(() => [{ key: a, element: b }]);
            Q0b(() => {
              d((f) =>
                f.every((g) => g.key !== a)
                  ? f.concat({ key: a, element: b })
                  : f.map((g) => (g.key === a ? { key: a, element: b } : g))
              );
            }, [a, b]);
            const e = K4((f) => {
              d((g) => g.filter((h) => h.key !== f));
            }, []);
            return { Jdb: c, Cpb: e };
          },
          R0b = function (a) {
            switch (a.type) {
              case "mention":
                return "bCAtqw";
              case "embed":
                return "BTcT3w";
              case "date":
                return "McKQgg";
              case "select":
                return "V2E5nQ";
              default:
                throw new E(a);
            }
          },
          V0b = function (a, b) {
            switch (a.type) {
              case "mention":
                return I4(S0b, {
                  Fq: a.user ? b.O_(a.user) : void 0,
                  text: a.text,
                  backgroundColor: a.user ? b.$db(a.user).background : void 0,
                });
              case "embed":
                const c = !a.url;
                a = b.NKa.ZZ.get(a.url);
                return I4(T0b, { icon: a, Uhb: c });
              case "date":
                return a.text ? void 0 : I4(U0b, {});
              case "select":
                break;
              default:
                throw new E(a);
            }
          },
          X0b = function (a, b) {
            switch (a.type) {
              case "mention":
              case "embed":
              case "date":
                break;
              case "select":
                return I4(W0b, { selected: !!b.aXa });
              default:
                throw new E(a);
            }
          },
          L4 = function (a) {
            return (/Mac/.test(navigator.platform) ? a.metaKey : a.ctrlKey)
              ? !0
              : a instanceof KeyboardEvent
              ? a.key === "Meta" || ["91", "224"].includes(a.code)
              : !1;
          },
          Y0b = function (a) {
            __c.w(!0, "chunkLength must be positive");
            const b = [];
            for (let c = 0; c < a.length; c += 50) b.push(a.slice(c, c + 50));
            return b;
          },
          Z0b = function (a, b, c) {
            if (c) {
              var d = y0b(c.images, "medium"),
                e = y0b(c.images, "xxxlarge");
              if (d && e) {
                c = new Image();
                c.src = d;
                var f = new Image();
                f.src = e;
                f.onload = M4(() => a.q6.set(b, e));
                f.onerror = M4(() => a.q6.set(b, void 0));
                !f.complete && c.complete ? a.q6.set(b, d) : (c.src = "");
              }
            } else a.q6.set(b, void 0);
          },
          a1b = function (a, { url: b, id: c, extension: d }) {
            if (!a.promises.has(b)) {
              const e = new Promise((f) => {
                a.Eg
                  ? a.Eg.CFb(new $0b({ id: c, extension: d }))
                      .then(({ document: g }) => {
                        const h = g.Ff.content.title;
                        h
                          ? (N4(() => a.Q_a.set(b, { status: 1, title: h })),
                            f(h))
                          : f(void 0);
                      })
                      .catch(() => {
                        N4(() => a.Q_a.set(b, { status: 2 }));
                        f(void 0);
                      })
                  : f(void 0);
              });
              a.promises.set(b, e);
            }
            return a.promises.get(b);
          },
          x0b = (a) =>
            a.endsWith("rem") ? parseFloat(a) * 10 : __c.py * __c.FLb[a],
          O4 = __webpack_require__(519427),
          M4 = O4.action,
          b1b = O4.comparer,
          G4 = O4.computed,
          c1b = O4.observable,
          P4 = O4.ObservableMap,
          N4 = O4.runInAction;
        var D0b = __webpack_require__(635872).Om;
        var Q4 = __webpack_require__(875604),
          d1b = Q4.createContext,
          F0b = Q4.createRef,
          e1b = Q4.lazy,
          R4 = Q4.memo,
          K4 = Q4.useCallback,
          Q0b = Q4.useEffect,
          f1b = Q4.useLayoutEffect,
          H4 = Q4.useMemo,
          P0b = Q4.useState;
        var g1b = __webpack_require__(443763),
          I4 = g1b.jsx,
          h1b = g1b.jsxs;
        var i1b = __webpack_require__,
          j1b = i1b(993864),
          J4 = i1b.n_x(j1b)();
        var J0b = __webpack_require__(460876).Z;
        var S4 = __webpack_require__(223826),
          N0b = S4.Wj,
          L0b = S4.Ix,
          M0b = S4.$r;
        var T4 = __webpack_require__(446474).Pi;
        var k1b = class {
            static A(a) {
              P(a, { text: G4, user: G4, brand: G4 });
            }
            get text() {
              return this.Ee.text;
            }
            get user() {
              return this.Ee.user;
            }
            get brand() {
              return this.Ee.brand;
            }
            constructor(a) {
              this.Ee = a;
              this.type = (k1b.A(this), "mention");
            }
          },
          l1b = class {
            static A(a) {
              P(a, { text: G4, url: G4 });
            }
            get text() {
              return this.Ee.text;
            }
            get url() {
              return this.Ee.url;
            }
            constructor(a) {
              this.Ee = a;
              this.type = (l1b.A(this), "embed");
            }
          },
          m1b = class {
            static A(a) {
              P(a, { text: G4, language: G4, style: G4, date: G4 });
            }
            get text() {
              return this.Ee.text;
            }
            get language() {
              return this.Ee.language;
            }
            get style() {
              return this.Ee.style;
            }
            get date() {
              return this.Ee.date;
            }
            constructor(a) {
              this.Ee = a;
              this.type = (m1b.A(this), "date");
            }
          },
          n1b = class {
            static A(a) {
              P(a, { text: G4, options: G4, gf: G4, OR: G4 });
            }
            get text() {
              return this.Ee.text;
            }
            get options() {
              return this.Ee.options.map((a) => a);
            }
            get gf() {
              return this.Ee.gf;
            }
            get OR() {
              var a;
              return (a = this.Ee.options.first((b) => b.id === this.Ee.gf)) ===
                null || a === void 0
                ? void 0
                : a.fill.color;
            }
            constructor(a) {
              this.Ee = a;
              this.type = (n1b.A(this), "select");
            }
          },
          o1b = D0b((a) => {
            switch (a.type) {
              case "mention":
                return new k1b(a);
              case "embed":
                return new l1b(a);
              case "date":
                return new m1b(a);
              case "select":
                return new n1b(a);
              default:
                throw new E(a);
            }
          });
        var z0b = class {
            static A(a) {
              P(a, { style: G4, date: G4, text: G4 });
            }
            get style() {
              return 2;
            }
            get date() {
              var a;
              (a = this.no.hk.type === 2 ? this.no.hk.date : void 0) ||
                ((a = new Date()),
                (a = __c.Oz(a)),
                (a = {
                  year: a.getFullYear(),
                  month: a.getMonth() + 1,
                  day: a.getDate(),
                  Qfb: a.getHours(),
                  Okb: a.getMinutes(),
                }));
              return a;
            }
            get text() {
              return this.no.Wz;
            }
            constructor(a, b) {
              this.no = a;
              this.language = b;
              this.type = (z0b.A(this), "date");
            }
          },
          p1b = class {
            get label() {
              return this.option.label;
            }
            get fill() {
              return this.option.fill;
            }
            constructor(a, b) {
              this.option = a;
              this.id = b;
            }
          },
          A0b = class {
            static A(a) {
              P(a, {
                options: G4,
                gf: G4,
                OR: G4,
                text: G4,
                iMa: G4({ equals: b1b.shallow }),
              });
            }
            get options() {
              return this.iMa.map((a, b) => new p1b(a, b));
            }
            get gf() {
              var a;
              return (a = this.options.find((b) => b.label === this.text)) ===
                null || a === void 0
                ? void 0
                : a.id;
            }
            get OR() {
              var a;
              return (a = this.options.find((b) => b.id === this.gf)) ===
                null || a === void 0
                ? void 0
                : a.fill.color;
            }
            get text() {
              return this.no.Wz;
            }
            get iMa() {
              var a, b;
              __c.C(
                ((a = this.no.Jo) === null || a === void 0
                  ? void 0
                  : a.type) === "select"
              );
              return (b = this.no.Jo) === null || b === void 0
                ? void 0
                : b.options;
            }
            constructor(a) {
              this.no = a;
              this.type = (A0b.A(this), "select");
            }
          },
          B0b = class {
            static A(a) {
              P(a, { pM: G4 });
            }
            get text() {
              return this.pM ? this.pM.text : "";
            }
            get user() {
              return this.pM ? this.pM.user : "";
            }
            get brand() {
              return this.pM ? this.pM.brand : "";
            }
            get pM() {
              if (this.no.hk.type !== 9)
                return (
                  __c.C(this.no.hk.type === 7),
                  this.no.hk ? this.no.hk.value[0] : void 0
                );
            }
            constructor(a) {
              this.no = a;
              this.type = (B0b.A(this), "mention");
            }
          },
          C0b = class {
            static A(a) {
              P(a, { u_: G4 });
            }
            get text() {
              return this.u_ ? this.u_.embed.text : "";
            }
            get url() {
              return this.u_ ? this.u_.embed.url : "";
            }
            get u_() {
              if (this.no.hk.type !== 9)
                return (
                  __c.C(this.no.hk.type === 8),
                  this.no.hk ? this.no.hk.value[0] : void 0
                );
            }
            constructor(a) {
              this.no = a;
              this.type = (C0b.A(this), "embed");
            }
          };
        var q1b = class {
          zpa(a) {
            this.zla.zpa(a);
          }
          D4(a, b) {
            this.zla.D4(a, b);
          }
          O_(a) {
            return this.zla.O_(a);
          }
          wpa(a) {
            this.NKa.wpa(a);
          }
          constructor(a, b, c, d) {
            this.zla = a;
            this.NKa = b;
            this.Ua = c;
            this.vt = d;
            this.BCa = new __c.pxb();
            this.$db = (e) => __c.vKa(this.BCa, e);
          }
        };
        var K0b = d1b(void 0);
        var r1b = Number.parseInt("300ms", 10),
          s1b = {
            enter: "_QukmA",
            enterActive: "_5_06KQ",
            enterDone: void 0,
            exitActive: "a952jg",
            exitDone: "orZOEA",
          },
          t1b = R4(function ({
            yr: a = !1,
            children: b,
            keyFrame: c,
            CZa: d,
            MIa: e = "hidden",
            KKa: f = "hidden",
            ariaLive: g,
            xPa: h,
            gGb: k = "none",
          }) {
            a = __c.Db() && !a;
            return O0b({
              children: b,
              keyFrame: c,
              CZa: d,
              ariaLive: g,
              MIa: e,
              KKa: f,
              xPa: h,
              o6a: a ? r1b : 0,
              ebb: J4({
                _1niDPQ: a,
                Q6kGbg: k === "none",
                _9j7ODw: k === "layout",
              }),
              nub: s1b,
            });
          });
        var u1b =
          '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.25 3.5a.75.75 0 0 0-1.5 0V5H7a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4h-.75V3.5a.75.75 0 0 0-1.5 0V5h-5.5V3.5Zm5.5 4v-1h-5.5v1a.75.75 0 0 1-1.5 0v-1H7A2.5 2.5 0 0 0 4.5 9v1h15V9A2.5 2.5 0 0 0 17 6.5h-.75v1a.75.75 0 0 1-1.5 0Zm4.75 4h-15V17A2.5 2.5 0 0 0 7 19.5h10a2.5 2.5 0 0 0 2.5-2.5v-5.5Z" fill="currentColor"/></svg>';
        var v1b =
          '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-1.288-.244-2.52-.687-3.65v-.1h-.04A10.003 10.003 0 0 0 12 2C6.477 2 2 6.477 2 12Zm12.653-8.078A8.526 8.526 0 0 1 19.63 8.25h-3.457c-.317-1.74-.848-3.236-1.52-4.328ZM20.2 9.75h-3.813c.075.723.114 1.476.114 2.25s-.04 1.527-.114 2.25h3.813A8.51 8.51 0 0 0 20.5 12a8.51 8.51 0 0 0-.301-2.25Zm-.569 6h-3.457c-.317 1.74-.848 3.236-1.52 4.328a8.526 8.526 0 0 0 4.977-4.328Zm-4.755-1.5a20.109 20.109 0 0 0 0-4.5h-5.75a20.116 20.116 0 0 0 0 4.5h5.75Zm-5.519 1.5h5.288C14.08 18.593 12.953 20.5 12 20.5c-.953 0-2.081-1.907-2.644-4.75Zm-1.529 0c.317 1.74.848 3.236 1.52 4.328A8.526 8.526 0 0 1 4.37 15.75h3.457Zm-.213-1.5H3.801A8.51 8.51 0 0 1 3.5 12c0-.779.105-1.533.301-2.25h3.813A21.9 21.9 0 0 0 7.5 12c0 .774.04 1.527.114 2.25ZM12 3.5c.953 0 2.081 1.907 2.644 4.75H9.356C9.92 5.407 11.047 3.5 12 3.5ZM4.37 8.25h3.457c.317-1.74.848-3.236 1.52-4.328A8.525 8.525 0 0 0 4.37 8.25Z" fill="currentColor"/></svg>';
        var w1b =
          '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M8.64 16.5a4.87 4.87 0 0 0 4.11 2.25h4.5a4.88 4.88 0 0 0 0-9.75h-4.5a4.88 4.88 0 0 0-4.5 3h1.7c.6-.9 1.63-1.5 2.8-1.5h4.5a3.38 3.38 0 0 1 0 6.75h-4.5c-.8 0-1.54-.28-2.12-.75H8.64zm7.1-9a4.87 4.87 0 0 0-4.12-2.25h-4.5a4.87 4.87 0 1 0 0 9.75h4.5a4.88 4.88 0 0 0 4.5-3h-1.69c-.6.9-1.63 1.5-2.8 1.5h-4.5a3.38 3.38 0 0 1 0-6.75h4.5c.8 0 1.54.28 2.12.75h1.98z"/></svg>';
        var x1b =
          '<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.374 7.572A3.5 3.5 0 1 0 5.6 7.548a5.365 5.365 0 0 0-2.928 3.968 1.5 1.5 0 0 0 .592 1.441 7.9 7.9 0 0 0 4.7 1.543 7.9 7.9 0 0 0 4.698-1.542 1.5 1.5 0 0 0 .592-1.442 5.364 5.364 0 0 0-2.88-3.944ZM10 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-5.847 6.75a3.858 3.858 0 0 1 7.62 0A6.4 6.4 0 0 1 7.963 13a6.4 6.4 0 0 1-3.81-1.25Z" fill="currentColor"/></svg>';
        var y1b = R4((a) => {
            const b = a.link,
              c = a.className,
              d = a.ariaLabel,
              e = a.OR,
              f = a.oab,
              g = a.I4a,
              h = a.i5a,
              k = a.measureRef,
              l = a.onPointerDown,
              m = a.onMouseEnter,
              n = a.onMouseLeave,
              p = J4({ EdewNw: !!g, _6ZpPrw: !!h, pzXyUA: a.text.length > 0 });
            a = a.text.length > 0 ? a.text : "\ufeff";
            return h1b("span", {
              className: J4(c, "FedJ0Q"),
              "aria-label": d || a,
              children: [
                I4("span", {
                  className: J4("_2Lr6pQ", p),
                  children: I4("span", { className: "Z_WvzQ", children: a }),
                }),
                h1b("span", {
                  className: J4("XemTdQ", p),
                  ref: k,
                  style: e ? { color: e } : void 0,
                  onPointerDown: l,
                  onMouseEnter: m,
                  onMouseLeave: n,
                  children: [
                    g,
                    I4("span", {
                      className: J4("U_QH_A", { C9XL8g: !f }),
                      children: b
                        ? I4("a", { className: "vgTP5Q", ...b, children: a })
                        : a,
                    }),
                    h,
                  ],
                }),
              ],
            });
          }),
          S0b = R4((a) => {
            const b = a.backgroundColor,
              c = a.Fq;
            a = a.text;
            const d = { width: "0.9em", height: "0.9em" };
            return I4(t1b, {
              keyFrame: c ? "show" : "hide",
              children: a
                ? I4(__c.JLb, {
                    name: a,
                    style: d,
                    backgroundColor: b,
                    Fq: c,
                    borderColor: c ? void 0 : b,
                  })
                : I4("span", {
                    "aria-hidden": "true",
                    className: "_tFJqA",
                    dangerouslySetInnerHTML: { __html: x1b },
                  }),
            });
          }),
          T0b = R4((a) => {
            const b = a.icon;
            a = a.Uhb;
            return I4(t1b, {
              keyFrame: b ? "favicon" : "placeholder",
              children: b
                ? I4("span", {
                    className: "_tFJqA",
                    children: I4("img", { src: b, className: "qpbYdw" }),
                  })
                : I4("span", {
                    "aria-hidden": "true",
                    className: "_tFJqA",
                    dangerouslySetInnerHTML: { __html: a ? w1b : v1b },
                  }),
            });
          }),
          U0b = R4(() =>
            I4("span", {
              "aria-hidden": "true",
              className: "_tFJqA",
              dangerouslySetInnerHTML: { __html: u1b },
            })
          ),
          W0b = R4(({ selected: a }) =>
            I4("div", {
              className: J4("whph4A", { zgzjww: a }),
              children: I4(__c.BL, {
                size: "medium",
                style: { width: "0.9em", height: "0.9em" },
                className: "_tFJqA",
              }),
            })
          ),
          z1b = T4((a) => {
            const {
              Ee: b,
              aXa: c,
              Wva: d,
              mode: e = "viewable",
              measureRef: f,
              ep: g,
              onPointerDown: h,
            } = a;
            a = b.text || "\u00a0".repeat(16);
            const k = b.type === "embed" ? d.Ua(b.url) : void 0,
              [l, m] = P0b(!1),
              n = K4((t) => m(L4(t)), [m]),
              p = K4((t) => m(!L4(t)), [m]),
              q = K4(
                (t) => {
                  m(L4(t.nativeEvent));
                  document.addEventListener("keydown", n);
                  document.addEventListener("keyup", p);
                },
                [m, n, p]
              ),
              r = K4(() => {
                m(!1);
                document.removeEventListener("keydown", n);
                document.removeEventListener("keyup", p);
              }, [m, n, p]);
            Q0b(() => {
              N4(() => {
                switch (b.type) {
                  case "mention":
                    b.user && d.zpa(b.user);
                    break;
                  case "embed":
                    d.wpa(b.url);
                }
              });
            }, [b, d]);
            f1b(() => {
              g === null || g === void 0 || g();
            }, [b.type, a, g]);
            return I4(y1b, {
              text: a,
              link: e === "viewable" || l ? k : void 0,
              oab: b.text.length === 0,
              ariaLabel: b.text || "",
              className: R0b(b),
              OR: b.OR,
              I4a: V0b(b, d),
              i5a: X0b(b, { aXa: c }),
              measureRef: f,
              onPointerDown: h,
              onMouseEnter: b.type === "embed" && e === "editable" ? q : void 0,
              onMouseLeave: b.type === "embed" && e === "editable" ? r : void 0,
            });
          });
        var A1b = __c.L(() => ({
          OGb: __c.KM(11),
          mode: __c.F("A?", 1, "BY_USER_IDS"),
          kvb: __c.JM(1),
        }));
        var B1b = class {
            static A(a) {
              P(a, { RP: c1b.shallow, zLa: M4 });
            }
            O_(a) {
              return this.TGa.O_(a);
            }
            zpa(a) {
              this.ACa.has(a) || this.RP.has(a) || (this.RP.add(a), this.Q$a());
            }
            D4(a, b) {
              this.ACa.has(a) ||
                (this.ACa.set(a, b), this.RP.delete(a), Z0b(this.TGa, a, b));
            }
            async zLa() {
              if (this.RP.size !== 0) {
                var a = [...this.RP.values()];
                this.RP.clear();
                if (this.UGa) {
                  var b = await this.UGa;
                  await Promise.all(
                    Y0b(a).map(async (c) => {
                      const d = new A1b({ kvb: c }),
                        { Fzb: e } = await b.eFb(d);
                      N4(() => c.forEach((f) => this.D4(f, e.get(f))));
                    })
                  );
                } else a.forEach((c) => this.D4(c));
              }
            }
            constructor(a, b) {
              this.UGa = a;
              this.ACa = (B1b.A(this), new P4());
              this.RP = new Set();
              this.TGa = new C1b();
              this.Q$a = __c.Xc(() => this.zLa(), 200);
              N4(() => {
                b === null ||
                  b === void 0 ||
                  b.forEach((c, d) => this.D4(d, c));
              });
            }
          },
          C1b = class {
            O_(a) {
              return this.q6.get(a);
            }
            constructor() {
              this.q6 = new P4();
            }
          };
        var $0b = __c.L(() => ({
          id: __c.X("id", 1),
          extension: __c.Y("extension", 3),
          UWa: __c.FM("revision", 5),
          version: __c.FM("version", 2),
          vGb: __c.FM("imagesetsLimit", 6),
        }));
        var D1b = class {
          static A(a) {
            P(a, { Jcb: M4 });
          }
          async Jcb(a) {
            if (this.Eg) {
              var b = new URL(a).pathname;
              {
                const c =
                  /design\/(D[a-zA-Z0-9_-]{10})\/?([a-zA-Z0-9_-]+)?/g.exec(b);
                c == null || c.length < 2
                  ? (b = void 0)
                  : ((b = c[2]),
                    new Set(["edit", "remix", "view", "watch"]).has(c[2]) &&
                      (b = void 0),
                    (b = { id: c[1], extension: b }));
              }
              if (b) return await a1b(this, { url: a, ...b });
            }
          }
          constructor(a) {
            this.Eg = a;
            this.Q_a = (D1b.A(this), new P4());
            this.promises = new Map();
          }
        };
        var E1b = class {
          static A(a) {
            P(a, { ZZ: c1b.shallow });
          }
          async wpa(a) {
            const b = new Image();
            let c;
            try {
              var d;
              const e = await ((d = this.vt) === null || d === void 0
                ? void 0
                : d.M7(a));
              c = e === null || e === void 0 ? void 0 : e.Icb;
            } catch (e) {}
            c
              ? ((b.src = c),
                (b.onload = M4(() => this.ZZ.set(a, c))),
                (b.onerror = M4(() => this.ZZ.set(a, void 0))))
              : N4(() => this.ZZ.set(a, void 0));
          }
          constructor(a) {
            this.vt = a;
            this.ZZ = (E1b.A(this), new Map());
          }
        };
        __c.dHa = {
          Qgb: function (a) {
            const b = a.document,
              c = a.Eg,
              d = a.Ua,
              e = a.vt;
            var f = a.f8;
            const g = a.fd,
              h = a.Pg,
              k = a.dz,
              l = a.QW;
            a = a.HGb;
            f = new B1b(a === null || a === void 0 ? void 0 : a(), f);
            a = new E1b(e);
            new D1b(c);
            const m = new q1b(f, a, d, e),
              n = E0b(l, b);
            g.Qp.Xja = T4(({ item: q, measureRef: r }) => {
              const t = H4(() => o1b(q.Ee), [q.Ee]);
              return I4(z1b, { Ee: t, Wva: m, measureRef: r });
            });
            const p = T4(({ context: q, ep: r }) => {
              const t = H4(() => __c.D(n(q.container)), [q]);
              f1b(r, [r, q.container.column.width]);
              return I4(z1b, { Ee: t, Wva: m, ep: r });
            });
            k.cFa = ({ context: q, ep: r }) => ({
              type: "react",
              node: I4(p, { context: q, ep: r }),
            });
            h &&
              (h.sEa = e1b(() =>
                __webpack_require__
                  .me(365475)
                  .then(() => __c.w0b)
                  .then(({ U9a: q }) => ({ default: q() }))
              ));
            return { Wva: m };
          },
        };
      }.call(self, self._7ccc7343da2ae983607b3819c7bc1f93));
    },
  },
]);
//# sourceMappingURL=sourcemaps/3cda06672f4ee8da.js.map
