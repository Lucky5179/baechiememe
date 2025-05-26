(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
  [49222],
  {
    /***/ 78999: function (_, __, __webpack_require__) {
      __webpack_require__.n_x = __webpack_require__.n;
      const __web_req__ = __webpack_require__;
      __web_req__(813110);
      __web_req__(841629);
      self._7ccc7343da2ae983607b3819c7bc1f93 =
        self._7ccc7343da2ae983607b3819c7bc1f93 || {};
      (function (__c) {
        var E = __c.E;
        var C = __c.C;
        var C3b = function (a, b, c, d) {
            c = new B3b(c, d);
            C(a.count() === 1, "Only single widget root element is supported");
            a = a.first();
            C(
              a != null && a.type === "layout",
              `Unexpected widget root found: ${
                a === null || a === void 0 ? void 0 : a.type
              }`
            );
            c.Cia(a, b);
          },
          E3b = function (a) {
            return {
              ...__c.meb,
              ...E5,
              top: 0,
              left: 0,
              width: a.width,
              height: a.height,
              viewBox: {
                top: 0,
                left: 0,
                width: a.xia.width,
                height: a.xia.height,
              },
              lb: a.lb.map(D3b),
            };
          },
          F3b = function (a) {
            switch (a.lC) {
              case 0:
                var b = __c.Dk.vc().attrs({
                  "font-size": a.fontSize,
                  leading: a.lineHeight ? a.lineHeight * 1e3 : void 0,
                  "text-align": a.textAlign || "start",
                  "font-weight": a.fontWeight,
                  "font-family": a.fontFamily,
                  "font-kerning": "normal",
                  "font-feature-liga": "on",
                  "font-feature-clig": "on",
                  "font-feature-calt": "on",
                  direction: a.direction,
                });
                a.color && b.bg("color", a.color);
                b = b
                  .bc(a.text.endsWith("\n") ? a.text : `${a.text}\n`)
                  .build();
                var c;
                return {
                  ...__c.QK,
                  ...F5,
                  ...E5,
                  Ia: (c = a.Ia) !== null && c !== void 0 ? c : 0,
                  text: b,
                  Kg: 2,
                };
              case 1:
                return (
                  (b = a.text), { ...__c.QK, ...F5, ...E5, text: b, Kg: 2 }
                );
              default:
                throw new E(a);
            }
          },
          J5 = function ({ content: a, fill: b, border: c, X: d }) {
            b = { ...__c.Ydb, fill: G5(b), border: H5(c), X: I5(d) };
            switch (a.type) {
              case "shape":
                return { ...b, element: E3b(a) };
              case "text":
                return { ...b, element: F3b(a) };
              case "layout":
                return { ...b, element: G3b(a) };
              default:
                throw new E(a);
            }
          },
          G3b = function ({
            cells: a,
            border: b,
            fill: c,
            X: d,
            gridTemplateColumns: e,
            gridTemplateRows: f,
            columnGap: g,
            rowGap: h,
          }) {
            return {
              ...__c.Zdb,
              ...F5,
              ...E5,
              J: F5.width,
              W: F5.height,
              fill: G5(c),
              border: H5(b),
              direction: 1,
              X: I5(d),
              cells: new Map(a.map((k) => [k.id, J5(k)])),
              behavior: {
                rules: [
                  {
                    Lg: void 0,
                    grid: {
                      gridTemplateColumns: e,
                      gridTemplateRows: f,
                      columnGap: g !== null && g !== void 0 ? g : 0,
                      rowGap: h !== null && h !== void 0 ? h : 0,
                      dh: H3b(a),
                    },
                  },
                ],
              },
              Te: void 0,
            };
          },
          H3b = function (a) {
            return new Map(a.map((b) => [b.id, I3b(b)]));
          },
          I3b = function (a) {
            const b = a.placement.padding;
            return {
              ...__c.YCa,
              ...a.placement,
              alignSelf: "center",
              padding: {
                ...__c.ZQ,
                ...(b != null ? (typeof b === "number" ? { all: b } : b) : {}),
              },
            };
          },
          H5 = function (a) {
            var b;
            const c =
              (b = a === null || a === void 0 ? void 0 : a.color) !== null &&
              b !== void 0
                ? b
                : "#000000";
            var d;
            return {
              ...__c.bE,
              all: a
                ? {
                    ...__c.OQ,
                    weight: (d = a.weight) !== null && d !== void 0 ? d : 1,
                    color: c,
                    Pf: !0,
                  }
                : void 0,
            };
          },
          I5 = function (a) {
            return {
              ...__c.YQ,
              ...(a != null ? (typeof a === "number" ? { all: a } : a) : {}),
            };
          },
          D3b = function (a) {
            return {
              ...__c.neb,
              ...a,
              fill: G5(a.fill),
              stroke: J3b(a.stroke),
            };
          },
          J3b = function (a) {
            return a ? { ...__c.OQ, color: a.color, weight: a.weight } : void 0;
          },
          G5 = function (a) {
            var b;
            const c = {
              ...__c.Bv,
              Ia:
                (b = a === null || a === void 0 ? void 0 : a.Ia) !== null &&
                b !== void 0
                  ? b
                  : 0,
            };
            switch (a === null || a === void 0 ? void 0 : a.type) {
              case "color":
                return { ...c, color: a.color };
              case "gradient":
                return { ...c, eb: a.eb };
              case void 0:
                return c;
              default:
                throw new E(a);
            }
          },
          P3b = function (a, b) {
            const c = new Map(b.cells.map((e) => [e.id, e]));
            K3b(
              a.cells,
              c,
              (e, f) => {
                let g = !1;
                L3b(e.element, f.content, () => {
                  a.cells.delete(f.id);
                  a.cells.set(f.id, J5(f));
                  g = !0;
                });
                g ||
                  (K5(e.fill, f.fill), M3b(e.border, f.border), N3b(e.X, f.X));
              },
              (e) => J5(e)
            );
            O3b(a.behavior, b, c);
            K5(a.fill, b.fill);
            N3b(a.X, b.X);
            M3b(a.border, b.border);
            var d;
            a.Ia = (d = b.Ia) !== null && d !== void 0 ? d : 0;
          },
          O3b = function (a, b, c) {
            L5(
              a.rules,
              [b],
              (d) => {
                Q3b(d.grid.gridTemplateColumns, b.gridTemplateColumns) ||
                  (d.grid.gridTemplateColumns = b.gridTemplateColumns);
                Q3b(d.grid.gridTemplateRows, b.gridTemplateRows) ||
                  (d.grid.gridTemplateRows = b.gridTemplateRows);
                var e;
                d.grid.columnGap =
                  (e = b.columnGap) !== null && e !== void 0 ? e : 0;
                var f;
                d.grid.rowGap = (f = b.rowGap) !== null && f !== void 0 ? f : 0;
                K3b(
                  d.grid.dh,
                  c,
                  (g, h) => {
                    const k = h.placement.padding,
                      l = h.placement.gridColumnEnd,
                      m = h.placement.gridRowStart,
                      n = h.placement.gridRowEnd,
                      p = h.placement.alignSelf;
                    g.gridColumnStart = h.placement.gridColumnStart;
                    g.gridColumnEnd = l;
                    g.gridRowStart = m;
                    g.gridRowEnd = n;
                    typeof k === "number" && g.padding.all !== k
                      ? (g.padding.all = k)
                      : typeof k !== "number" &&
                        ((g.padding.ra =
                          k === null || k === void 0 ? void 0 : k.ra),
                        (g.padding.Fa =
                          k === null || k === void 0 ? void 0 : k.Fa),
                        (g.padding.qa =
                          k === null || k === void 0 ? void 0 : k.qa),
                        (g.padding.Ka =
                          k === null || k === void 0 ? void 0 : k.Ka));
                    g.alignSelf = p;
                  },
                  (g) => I3b(g)
                );
              },
              (d) => {
                var e, f;
                return {
                  Lg: void 0,
                  grid: {
                    gridTemplateColumns: b.gridTemplateColumns,
                    gridTemplateRows: b.gridTemplateRows,
                    columnGap:
                      (e = b.columnGap) !== null && e !== void 0 ? e : 0,
                    rowGap: (f = b.rowGap) !== null && f !== void 0 ? f : 0,
                    dh: H3b(d.cells),
                  },
                };
              }
            );
          },
          R3b = function (a, b) {
            L5(
              a.lb,
              b.lb,
              (e, f) => {
                e.d = f.d;
                K5(e.fill, f.fill);
                e.stroke.ref && f.stroke
                  ? ((e = e.stroke.ref),
                    (f = f.stroke),
                    (e.color = f.color),
                    (e.weight = f.weight))
                  : e.stroke.set(J3b(f.stroke));
              },
              (e) => D3b(e)
            );
            const { viewBox: c, width: d } = E3b(b);
            a.width = d;
            __c.zu(a.viewBox).equals(__c.zu(c)) || (a.viewBox = c);
          },
          L3b = function (a, b, c) {
            switch (b.type) {
              case "shape":
                a.type === "shape" ? R3b(a, b) : c();
                break;
              case "text":
                (a.type === "text" &&
                  __c.Dk.domain.Nb(__c.Dk.ka(a.text), F3b(b).text)) ||
                  c();
                break;
              case "layout":
                a.type === "layout" ? P3b(a, b) : c();
                break;
              default:
                throw new E(b);
            }
          },
          K3b = function (a, b, c, d) {
            const e = new Set(a.keys());
            for (const [f, g] of b)
              (b = a.get(f)) ? (e.delete(f), c(b, g)) : a.set(f, d(g));
            e.forEach((f) => a.delete(f));
          },
          L5 = function (a, b, c, d) {
            const e = a.toArray();
            for (let f = 0; f < Math.max(e.length, b.length); f++)
              if (f < e.length && f < b.length) c(e[f], b[f]);
              else if (f < e.length && f >= b.length) a.delete(e[f]);
              else if (f >= e.length && f < b.length) {
                const g = d(b[f]);
                a.append(g);
              }
          },
          K5 = function (a, b) {
            switch (b === null || b === void 0 ? void 0 : b.type) {
              case "color":
                a.color = b.color;
                a.eb.set(void 0);
                var c;
                a.Ia = (c = b.Ia) !== null && c !== void 0 ? c : 0;
                break;
              case "gradient":
                if (a.eb.ref && __c.d4a.domain.Nb(a.eb.ref, b.eb)) break;
                a.color = void 0;
                a.eb.set(b.eb);
                var d;
                a.Ia = (d = b.Ia) !== null && d !== void 0 ? d : 0;
                break;
              default:
                (a.color = void 0), a.eb.set(void 0);
            }
          },
          N3b = function (a, b) {
            b = I5(b);
            a.all = b.all;
            a.dD = b.dD;
            a.bD = b.bD;
            a.cD = b.cD;
            a.aD = b.aD;
          },
          M3b = function (a, b) {
            b = H5(b).all;
            var c;
            if ((c = b))
              (c = a.all.ref),
                (c = !(c && b ? __c.cE.domain.Nb(__c.cE.ka(c), b) : !c && !b));
            c && a.all.set(b);
          },
          Q3b = function (a, b) {
            return a.length === b.length && a.every((c) => b.includes(c));
          },
          T3b = function (a, b, c, d) {
            let e = a.CWa.get(b);
            if (e) return e;
            e = {
              vx: new S3b(c.lw, b, d, c.Bra),
              xGa: void 0,
              lQa: void 0,
              kSa: __c.OV.mode,
            };
            a.CWa.set(b, e);
            return e;
          },
          V3b = function (a, b, c, d, e) {
            var f, g;
            e = T3b(a, c, b, e);
            const h = e.vx,
              k = e.lQa,
              l = e.xGa,
              m = e.kSa;
            c = __c.RP.ka(c);
            const n =
              ((f = (g = a.Gz).Jqa) === null || f === void 0
                ? void 0
                : f.call(g, d)) || __c.OV;
            (h.Ej === k && U3b.structural(c, l) && n.mode === m) ||
              ((e.xGa = c),
              (e.lQa = h.Ej),
              (e.kSa = n.mode),
              (b = b.render(h, n)),
              a.Skb.update(d, b),
              C3b(
                d,
                b,
                (p, q) => a.XP.Sra.set(p, q),
                (p, q, r) => a.XP.refs.set(p, { ref: q, key: r })
              ));
          },
          Y3b = function (a, b) {
            const c = [],
              d = () => c.forEach((e) => e());
            c.push(a.Flb());
            c.push(
              W3b(
                () => {
                  a: {
                    var e = new X3b();
                    for (const f of b)
                      if ((e.bQ(f), e.Hpa)) {
                        e = e.Hpa;
                        break a;
                      }
                    e = void 0;
                  }
                  return e && (a.Xb.isLoaded(e) || a.Msa.has(e));
                },
                (e) => {
                  if (e) {
                    for (const f of b) C(f.type === "layout"), a.xk.yfa(f);
                    d();
                  }
                }
              )
            );
            return d;
          },
          Z3b = function (a, b) {
            return {
              vD: ({ Vi: c }) => {
                var d;
                const { vx: e } = T3b(a.renderer, c, b, a.Y1),
                  f = __c.TP.create([]),
                  g = [];
                g.push(Y3b(a.ndb, f));
                g.push(
                  W3b(
                    () => {
                      var k, l;
                      return [
                        (k = (l = a.Gz).Jqa) === null || k === void 0
                          ? void 0
                          : k.call(l, f),
                        __c.RP.ka(c),
                        e.Ej,
                      ];
                    },
                    () => {
                      V3b(a.renderer, b, c, f, a.Y1);
                    },
                    { fireImmediately: !0, equals: U3b.structural }
                  )
                );
                const h =
                  (d = b.qua) === null || d === void 0
                    ? void 0
                    : d.call(b, { vx: e });
                h && g.push(h);
                return {
                  Na: f,
                  cu: () => {
                    g.forEach((k) => k());
                  },
                };
              },
            };
          },
          M5 = __webpack_require__(519427),
          U3b = M5.comparer,
          $3b = M5.computed,
          N5 = M5.observable,
          W3b = M5.reaction,
          a4b = M5.runInAction;
        var b4b = class {
          static A(a) {
            __c.P(a, { qnb: N5.ref, Ceb: N5.ref });
          }
          constructor() {
            this.Jqa = (b4b.A(this), void 0);
          }
        };
        var c4b = class {
            constructor() {
              this.sources = new WeakMap();
            }
          },
          S3b = class {
            static A(a) {
              __c.P(a, { Oe: $3b });
            }
            get mQa() {
              var a = this.Y1,
                b = this.Vi,
                c = this.Bra;
              let d = a.sources.get(b);
              d || ((d = N5.box(c)), a.sources.set(b, d));
              return d;
            }
            get Ej() {
              return this.mQa.get();
            }
            get Oe() {
              return this.lw.Eu({ type: "dict", value: this.Vi });
            }
            Xl(a) {
              this.mQa.set(
                a instanceof Function
                  ? { ...this.Ej, ...a() }
                  : { ...this.Ej, ...a }
              );
            }
            constructor(a, b, c, d) {
              this.lw = a;
              this.Vi = b;
              this.Y1 = c;
              this.Bra = d;
              S3b.A(this);
            }
          };
        var B3b = class {
          F6(a, b) {
            this.qWa(a, b);
            b.ref && this.Rwa(a, b.ref, b.key);
          }
          eQ(a, b) {
            b.ref && this.Rwa(a.text, b.ref, b.key);
          }
          dDa(a, b) {
            switch (b.content.type) {
              case "shape":
                C(a.element.type === "shape");
                this.F6(a.element, b.content);
                break;
              case "text":
                C(a.element.type === "text");
                this.eQ(a.element, b.content);
                break;
              case "layout":
                C(a.element.type === "layout");
                this.Cia(a.element, b.content);
                break;
              default:
                throw new E(b.content);
            }
          }
          Cia(a, b) {
            this.qWa(a, b);
            b.ref && this.Rwa(a, b.ref, b.key);
            for (const [c, d] of a.cells)
              (a = b.cells.find((e) => e.id === c)),
                C(!!d && !!a),
                this.dDa(d, a);
          }
          constructor(a, b) {
            this.qWa = a;
            this.Rwa = b;
          }
        };
        var E5 = { locked: !0, Ck: { eZ: !1, hW: !1 }, fi: !0 },
          F5 = { top: 0, left: 0, width: 1, height: 1 };
        var d4b = class {
          constructor(a) {
            this.xk = a;
            this.update = (b, c) => {
              L5(
                b,
                [c],
                (d, e) => {
                  switch (d.type) {
                    case "layout":
                      P3b(d, e);
                      break;
                    default:
                      throw Error(`Not supported element type: ${d.type}`);
                  }
                },
                (d) => {
                  a: switch (d.type) {
                    case "layout":
                      d = {
                        ...G3b(d),
                        ...E5,
                        width: d.minWidth,
                        height: d.minHeight,
                        J: d.minWidth,
                        W: d.minHeight,
                      };
                      break a;
                    default:
                      throw new E(d.type);
                  }
                  return d;
                }
              );
              for (const d of b)
                C(d.type === "layout"),
                  (d.width = c.minWidth),
                  (d.height = c.minHeight),
                  (d.J = c.minWidth),
                  (d.W = c.minHeight),
                  c.direction && (d.direction = c.direction),
                  this.xk.yfa(d);
            };
          }
        };
        var e4b = class {
          constructor(a, b, c) {
            this.Skb = a;
            this.XP = b;
            this.Gz = c;
            this.CWa = new WeakMap();
          }
        };
        var f4b = class {
            static A(a) {
              __c.P(a, { Msa: N5.shallow });
            }
            constructor(a, b) {
              this.Xb = a;
              this.xk = b;
              this.Msa = (f4b.A(this), new Set());
              this.Spa = new Set();
              this.Flb = () => {
                this.raa ||
                  (this.raa = __c.Xga(this.Xb).subscribe((d) => {
                    a4b(() => {
                      this.Msa.add(d.id);
                    });
                  }));
                const c = Symbol();
                this.Spa.add(c);
                return () => {
                  this.Spa.delete(c);
                  this.Spa.size <= 0 &&
                    this.raa &&
                    (this.raa.unsubscribe(), (this.raa = void 0));
                };
              };
            }
          },
          X3b = class extends __c.AC {
            bQ(a, b) {
              this.Hpa || super.bQ(a, b);
            }
            eQ(a) {
              this.Hpa =
                (a = a.text
                  .Ox("font-family")
                  ["font-family"].values()
                  .next().value) && __c.Xr(a).id;
            }
          };
        var g4b = !1,
          h4b = class {
            register(a, b) {
              this.oD.has(a) ||
                (this.oD.set(a, b),
                g4b || (__c.SP.set(a, Z3b(this, b)), (g4b = !0)));
            }
            get(a) {
              return this.oD.get(a);
            }
            constructor(a, b, c, d, e) {
              this.renderer = a;
              this.Y1 = b;
              this.Gz = c;
              this.Xb = d;
              this.xk = e;
              this.oD = new Map();
              this.ndb = new f4b(this.Xb, this.xk);
            }
          };
        var i4b = class {
            constructor() {
              this.Sra = new __c.YF();
              this.refs = new __c.YF();
            }
          },
          j4b = class {
            getContext(a) {
              return this.XP.refs.get(a);
            }
            BM(a) {
              return this.XP.Sra.get(a);
            }
            constructor(a, b, c) {
              this.XP = a;
              this.Y1 = b;
              this.renderer = c;
            }
          };
        __c.UQa = {
          Zgb: function (a) {
            const b = new b4b(),
              c = new i4b(),
              d = new e4b(new d4b(a.xk), c, b),
              e = new c4b();
            a = new h4b(d, e, b, a.Xb, a.xk);
            return { Gz: b, lPb: new j4b(c, e, d), I6: a, XP: c };
          },
        };
      }.call(self, self._7ccc7343da2ae983607b3819c7bc1f93));
    },
  },
]);
//# sourceMappingURL=sourcemaps/9447ca03dc913e25.js.map
