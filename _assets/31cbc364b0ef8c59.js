(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
  [70911],
  {
    /***/ 88780: function (_, __, __webpack_require__) {
      __webpack_require__.n_x = __webpack_require__.n;
      const __web_req__ = __webpack_require__;
      __web_req__(813110);
      __web_req__(878415);
      __web_req__(914242);
      self._7ccc7343da2ae983607b3819c7bc1f93 =
        self._7ccc7343da2ae983607b3819c7bc1f93 || {};
      (function (__c) {
        var Kf = __c.Kf;
        var E = __c.E;
        var w = __c.w;
        var s5b = function (a) {
            var b = { element: void 0 };
            const c = new Map();
            for (const d in b) a[d].TY.forEach((e, f) => c.set(f, e));
            return {
              TY: c,
              apply: (d) => {
                const e = new Map(),
                  f = {},
                  g = {};
                for (const h in d) {
                  const k = a[h].apply(d[h]);
                  k.uxa.forEach((l, m) => e.set(m, l));
                  f[h] = k.data;
                  g[h] = k.Pta;
                }
                return { uxa: e, data: f, Pta: g };
              },
            };
          },
          t5b = function (a) {
            return () => a;
          },
          Z5 = function (a, b, c, d) {
            return new u5b(a, b, c, d);
          },
          $5 = function (a, b) {
            return a === b || b.map((c) => a.Zra(v5b(c)));
          },
          x5b = function (a, b) {
            return a.Sta(b).map((c) => new w5b(c, (d) => d.props[b]));
          },
          v5b = function (a) {
            w(a instanceof a6);
            return a;
          },
          c6 = function (a, b) {
            if (a === b) return !0;
            switch (typeof a) {
              case "string":
              case "number":
              case "boolean":
              case "undefined":
                return !1;
              case "object":
                if (typeof b !== "object" || a.kind !== b.kind) return !1;
                switch (a.kind) {
                  case "array":
                    return b.kind === "array" && b6(a.items, b.items);
                  case "set":
                    var c;
                    if ((c = b.kind === "set"))
                      (a = a.items),
                        (b = b.items),
                        (c =
                          a === b
                            ? !0
                            : a.size !== b.size
                            ? !1
                            : b6([...a], [...b]));
                    return c;
                  case "map":
                    if ((c = b.kind === "map"))
                      (a = a.items),
                        (b = b.items),
                        (c =
                          a === b
                            ? !0
                            : a.size !== b.size
                            ? !1
                            : b6(
                                [...a.keys(), ...a.values()],
                                [...b.keys(), ...b.values()]
                              ));
                    return c;
                  case "record":
                    return b.kind === "record" && y5b(a.fields, b.fields);
                  case "instance":
                    return b.kind === "instance" && a.instance === b.instance;
                  default:
                    throw new E(a);
                }
              default:
                throw new E(a);
            }
          },
          b6 = function (a, b) {
            if (a === b) return !0;
            if (a.length !== b.length) return !1;
            for (let c = 0; c < a.length; c++) if (!c6(a[c], b[c])) return !1;
            return !0;
          },
          y5b = function (a, b) {
            if (a === b) return !0;
            const c = Object.keys(a),
              d = Object.keys(b),
              e = new Set([...c, ...d]);
            if (c.length !== e.size || d.length !== e.size) return !1;
            for (const f of e) if (!c6(a[f], b[f])) return !1;
            return !0;
          },
          d6 = function (a) {
            return typeof a === "string" ? JSON.stringify(a) : String(a);
          },
          A5b = function (a, b) {
            return a.map((c) => b.map((d) => z5b[0](c, d)));
          },
          C5b = function (a, b, c) {
            return b.map((d) => B5b[a](d, c));
          },
          e6 = function (a, b, c) {
            switch (c.kind) {
              case 0:
                return D5b(c.value);
              case 1:
                const e = e6(a, b, c.Zu);
                return E5b[c.name].map((v) => f6(v, e));
              case 2:
                const f = e6(a, b, c.x6a),
                  g = e6(a, b, c.y6a);
                return F5b[c.name].map((v) => G5b(v, f, g));
              case 3:
                const h = c.args.map((v) =>
                  v.kind !== 13
                    ? new H5b(e6(a, b, v))
                    : new I5b(e6(a, b, v.bHb))
                );
                c = c.name;
                switch (c) {
                  case 0:
                  case 1:
                    var d = h.map((v) =>
                      v.Kpa(
                        (u) => u.type,
                        (u) => u.type.pN()
                      )
                    );
                    return g6
                      .union(...d)
                      .map(J5b[c])
                      .map((v) => K5b(v, h));
                  default:
                    return L5b[c].map((v) => K5b(v, h));
                }
              case 4:
                d = c.name;
                const k = c.param,
                  l = c.body,
                  m = e6(a, b, c.j9);
                c = m.type.pN();
                const n = c.map((v) => M5b(b, k, v, (u) => e6(a, u, l)));
                return C5b(d, c, n.resultType).map((v) => N5b(v, m, n));
              case 5:
                const p = c.entries.map(([v, u]) => [e6(a, b, v), e6(a, b, u)]);
                c = g6.union(...p.map(([v]) => v.type));
                d = g6.union(...p.map(([, v]) => v.type));
                if (!$5(c, g6.primitive))
                  throw Error(`key type is not a primitive: ${c}`);
                return A5b(c, d).map((v) => O5b(v, p));
              case 6:
                const q = Kf(c.fields, (v) => e6(a, b, v));
                c = Kf(q, (v) => v.type);
                return (0, P5b[0])(c).map((v) => Q5b(v, q));
              case 7:
                d = a.types.resolve(c.name);
                if (!d)
                  throw Error(`cannot instantiate unknown type: ${c.name}`);
                const r = e6(a, b, { kind: 6, fields: c.args });
                return d.hlb.map((v) => f6(v, r, { zq: !0 }));
              case 8:
                return (d = e6(a, b, c.base)), R5b(d, c.lLb);
              case 9:
                return S5b(b, c.name);
              case 10:
                return (
                  (d = __c.ud(c.defs, (v) => e6(a, b, v))), T5b(a, b, d, c.body)
                );
              case 11:
                d = e6(a, b, c.test).as(g6.Yh);
                const t = e6(a, b, c.IAb);
                c = e6(a, b, c.alternate);
                return U5b(d, t, c);
              case 12:
                return e6(a, b, c.body).computed();
              default:
                throw new E(c);
            }
          },
          D5b = function (a) {
            switch (typeof a) {
              case "string":
                return h6(g6.string, a);
              case "number":
                return h6(g6.number, a);
              case "boolean":
                return h6(g6.Yh, a);
              case "undefined":
                return h6(g6.undefined, a);
              default:
                throw new E(a);
            }
          },
          R5b = function (a, b) {
            return a.map((c) =>
              x5b(c, b).map(({ type: d, get: e }) => f6(new i6(c, d, e), a))
            );
          },
          S5b = function (a, b) {
            return a.resolve(b).map((c) => j6.of(c, (d) => d.resolve(b)));
          },
          T5b = function (a, b, c, d) {
            const e = __c.ud(c, (g) => g.type),
              f = __c.ud(c, (g) => g.evaluate);
            return V5b(e6(a, new k6(new Map(e), b), d), (g) => {
              const h = __c.ud(f, (k) => k(g));
              return new k6(new Map(h), g);
            });
          },
          U5b = function (a, b, c) {
            return b.map((d, e) =>
              c.map((f, g) => {
                f = g6.union(d, f);
                return j6.of(f, (h) => {
                  const k = a(h),
                    l = e(h),
                    m = g(h);
                  return () => (k() ? l() : m());
                });
              })
            );
          },
          f6 = function ({ ila: a, resultType: b, apply: c }, d, e) {
            const f = d.as(a);
            return new j6(b, (g) => {
              const h = f(g);
              if (e === null || e === void 0 ? 0 : e.zq) {
                const k = W5b(c);
                return () => k(h());
              }
              return () => c(h());
            });
          },
          G5b = function ({ ila: a, z6a: b, resultType: c, apply: d }, e, f) {
            const g = e.as(a),
              h = f.as(b);
            return new j6(c, (k) => {
              const l = g(k),
                m = h(k);
              return () => d(l(), m());
            });
          },
          K5b = function ({ B6a: a, resultType: b, apply: c }, d) {
            let e;
            const f = d.map((g) =>
              g.Ila(
                (h) => h.as(a),
                (h) => h.as(e !== null && e !== void 0 ? e : (e = g6.j9(a)))
              )
            );
            return new j6(b, (g) => {
              const h = (l) => l(g),
                k = f.map((l) => l.Ila(h, h));
              return () => {
                const l = [];
                k.forEach((m) => {
                  m.Kpa(
                    (n) => l.push(n()),
                    (n) => l.push(...n())
                  );
                });
                return c(l);
              };
            });
          },
          N5b = function (
            { itemType: a, V6a: b, resultType: c, reduce: d },
            e,
            f
          ) {
            const g = f.as(a, b),
              h = e.as(g6.j9(a));
            return j6.of(c, (k) => {
              const l = h(k),
                m = g(k),
                n = W5b((p) => {
                  p = p.map(t5b);
                  return [p, p.map(m)];
                });
              return () => {
                const [p, q] = n(l());
                return d(p, q);
              };
            });
          },
          O5b = function (
            { keyType: a, valueType: b, resultType: c, apply: d },
            e
          ) {
            const f = e.map(([g, h]) => [g.as(a), h.as(b)]);
            return new j6(c, (g) => {
              const h = f.map(([k, l]) => [k(g), l(g)]);
              return () => d(h.map(([k, l]) => [k(), l()]));
            });
          },
          Q5b = function ({ A6a: a, resultType: b, apply: c }, d) {
            const e = Object.keys(a).filter((g) => !d.hasOwnProperty(g));
            if (e.length) throw Error(`too few arguments (missing ${e})`);
            const f = X5b(a, (g, h) => d[h].as(g));
            return new j6(b, (g) => {
              const h = Y5b(f, (k) => k(g));
              return () => c(Z5b(h, (k) => k()));
            });
          },
          h6 = function (a, b) {
            const c = t5b(b);
            return new j6(a, () => c);
          },
          V5b = function (a, b) {
            const c = a.evaluate;
            return new j6(a.type, (d) => c(b(d)));
          },
          M5b = function (a, b, c, d) {
            return d(a.define(b, c)).map(
              (e, f) => new $5b(c, e, (g) => (h) => f(g.define(b, h)))
            );
          },
          W5b = function (a) {
            let b;
            return (c) => {
              if (b && l6.bh(b.u, c)) return b.v;
              const d = a(c);
              b = { u: c, v: d };
              return d;
            };
          },
          X5b = function (a, b) {
            return Kf(a, b);
          },
          Y5b = function (a, b) {
            return Kf(a, b);
          },
          Z5b = function (a, b) {
            return Kf(a, b);
          },
          e6b = function (a) {
            const b = a.types,
              c = a.values;
            class d {
              optional() {
                const H = this.Iha,
                  I = this.vfa,
                  K = this.qDa,
                  M = b.union(this.type, b.undefined);
                return new d(
                  M,
                  (Q) => (Q != null ? H(Q) : void 0),
                  (Q, T, V) => (V != null ? I(Q, T, V) : void 0),
                  (Q, T, V, ba) => (V != null ? K(Q, T, V, ba) : ba.delete(T))
                );
              }
              MB() {
                return new d(this.type, this.Iha, this.vfa, (H, I) => {
                  throw H.error(I, "read-only field");
                });
              }
              s6(H) {
                return H
                  ? new d(
                      this.type,
                      this.Iha,
                      (I, K, M) => {
                        M = this.vfa(I, K, M);
                        M != null && H(I, K, M);
                        return M;
                      },
                      (I, K, M, Q) => {
                        M != null && H(I, K, M);
                        this.qDa(I, K, M, Q);
                      }
                    )
                  : this;
              }
              Stb(H, I) {
                const K = this.Iha,
                  M = this.vfa,
                  Q = this.qDa;
                return a6b(this.type, (T) => {
                  const V = () => M(H, I, T.get(I));
                  return {
                    Web: () => K(V()),
                    EMa: V,
                    zrb: (ba) => Q(H, I, ba, T),
                  };
                });
              }
              constructor(H, I, K, M) {
                this.type = H;
                this.Iha = I;
                this.vfa = K;
                this.qDa = M;
              }
            }
            a = new d(
              b.string,
              (H) => H,
              m6("string", (H) => H.value),
              n6("string")
            );
            const e = new d(
                b.Yh,
                (H) => H,
                m6("boolean", (H) => H.value),
                n6("boolean")
              ),
              f = new d(
                b.number,
                (H) => H,
                m6("int32", (H) => H.value),
                n6("int32")
              ).s6((H) => Number.isInteger(H)),
              g = new d(
                b.number,
                (H) => H,
                m6("double", (H) => H.value),
                n6("double")
              ).s6((H) => Number.isFinite(H)),
              h = new d(
                b.instance("Fill"),
                (H) => c.instance("Fill", H),
                m6("fill", (H) => H.value),
                n6("fill")
              ),
              k = a.optional(),
              l = e.optional(),
              m = f.optional(),
              n = g.optional(),
              p = h.optional(),
              q = a.MB(),
              r = e.MB(),
              t = f.MB(),
              v = g.MB(),
              u = h.MB(),
              x = k.MB(),
              y = l.MB(),
              A = m.MB(),
              z = n.MB(),
              B = p.MB(),
              G = {
                [0]: {
                  [0]: { string: a, boolean: e, int32: f, double: g, fill: h },
                  [1]: { string: q, boolean: r, int32: t, double: v, fill: u },
                },
                [1]: {
                  [0]: { string: k, boolean: l, int32: m, double: n, fill: p },
                  [1]: { string: x, boolean: y, int32: A, double: z, fill: B },
                },
              };
            return (H, I) => {
              const K = new b6b(H),
                M = Kf(I, (T) => T.key),
                Q = Kf(I, (T) => {
                  var V = T.tVa;
                  const ba = T.tSa;
                  switch (T.type) {
                    case "string":
                      V = G[V][ba].string.s6(c6b(T.AJ));
                      break;
                    case "boolean":
                      V = G[V][ba]["boolean"];
                      break;
                    case "double":
                      V = G[V][ba]["double"].s6(d6b(T.range));
                      break;
                    case "int32":
                      V = G[V][ba].int32.s6(d6b(T.range));
                      break;
                    case "fill":
                      V = G[V][ba].fill;
                      break;
                    default:
                      throw new E(T);
                  }
                  return V.Stb(K, T.key);
                });
              return {
                TY: new Map(Object.entries(Q).map(([T, V]) => [M[T], V.type])),
                apply: (T) => {
                  const V = Kf(Q, (ka) => ka.eval(T)),
                    ba = Kf(V, (ka) => ({ get: ka.EMa })),
                    ea = Kf(V, (ka) => ({ get: ka.EMa, set: ka.zrb }));
                  return {
                    uxa: new Map(
                      Object.entries(V).map(([ka, oa]) => [M[ka], oa.Web])
                    ),
                    data: Object.create(null, ba),
                    Pta: Object.create(null, ea),
                  };
                },
              };
            };
          },
          m6 = function (a, b) {
            return (c, d, e) => {
              if (e == null) throw c.error(d, "not found");
              if (e.type !== a)
                throw c.error(d, `type error: expected ${a}, was ${e.type}`);
              return b(e);
            };
          },
          n6 = function (a) {
            return (b, c, d, e) => {
              if (d == null) throw b.error(a, "value is nullish");
              if (
                (a === "string" && typeof d === "string") ||
                (a === "boolean" && typeof d === "boolean") ||
                (a === "double" && typeof d === "number") ||
                (a === "int32" && typeof d === "number")
              )
                b = { type: a, value: d };
              else {
                if (a === "fill" && typeof d === "object")
                  throw b.error(a, "Write for fill is not yet supported");
                throw b.error(
                  a,
                  `type error: expected ${a}, but received ${typeof d}`
                );
              }
              e.set(c, b);
            };
          },
          d6b = function (a) {
            if (a) {
              var b = a.min,
                c = a.max;
              w(b == null || c == null || b <= c);
              return (d, e, f) => {
                if (b != null && f < b)
                  throw d.error(e, `value below min ${b}: ${f}`);
                if (c != null && f > c)
                  throw d.error(e, `value above max ${b}: ${f}`);
              };
            }
          },
          c6b = function (a) {
            if (a)
              return (b, c, d) => {
                if (!a.test(d))
                  throw b.error(c, `value does not match regex ${a}: '${d}'`);
              };
          },
          a6b = function (a, b) {
            return { type: a, eval: b };
          },
          g6b = function () {
            return new f6b({})
              .add((a, b) => ({
                Fill: new a("Fill", { color: b.string }, (c) =>
                  __c.OO.create({ ...__c.Bv, color: c.color })
                ),
              }))
              .add((a, b) => ({
                RectElement: new a(
                  "RectElement",
                  {
                    top: b.number,
                    left: b.number,
                    width: b.number,
                    height: b.number,
                    rotation: b.union(b.number, b.undefined),
                    fill: b.instance("Fill"),
                    X: b.union(b.array(b.number), b.undefined),
                  },
                  (c) => {
                    var d, e, f;
                    const g = __c.zv.create({
                      ...__c.Av,
                      top: c.top,
                      left: c.left,
                      width: c.width,
                      height: c.height,
                      rotation:
                        (e = c.rotation) !== null && e !== void 0
                          ? e
                          : __c.Av.rotation,
                      fill: __c.Bv,
                      X:
                        (f =
                          (d = c.X) === null || d === void 0
                            ? void 0
                            : d.items) !== null && f !== void 0
                          ? f
                          : __c.Av.X,
                    });
                    Object.defineProperties(g, {
                      fill: { value: c.fill.instance },
                    });
                    return g;
                  }
                ),
              }));
          },
          o6 = function () {
            throw Error("ref not found");
          },
          i6b = function (a, b) {
            return class extends h6b {
              componentDidCatch(c) {
                a.error(c);
                this.setState({ hasError: !0 });
              }
              render() {
                return this.state.hasError
                  ? p6(__c.oy, {
                      background: "criticalLow",
                      width: "full",
                      height: "full",
                      padding: "0.25u",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      role: "alert",
                      children: p6(__c.ly, {
                        size: "xsmall",
                        alignment: "center",
                        children: __c.O("Q6XSow"),
                      }),
                    })
                  : p6(b, { ...this.props });
              }
              constructor(...c) {
                super(...c);
                this.state = { hasError: !1 };
              }
            };
          },
          n6b = function (a, b, c) {
            const d = (f) => ({ element: f.ha.Vi });
            b = s5b(b);
            switch (c.type) {
              case 0:
                c = c.vD;
                if (typeof c === "object") {
                  var e = a.N0a.types;
                  e = e.j9(e.instance("RectElement"));
                  return j6b(
                    a,
                    d,
                    b,
                    e,
                    c,
                    (f) => new k6b(() => f().map((g) => g.instance))
                  );
                }
                return l6b(d, b, c);
              case 1:
                return m6b(a, d, b, c.Component);
              default:
                throw new E(c);
            }
          },
          j6b = function (a, b, c, d, e, f) {
            const g = a.una(a.N0a, c, d).compile(e);
            return { type: 0, vD: (h) => ({ Na: f(g.apply(b(h))) }) };
          },
          l6b = function (a, b, c) {
            return { type: 0, vD: (d) => c(b.apply(a(d)).data) };
          },
          m6b = function (a, b, c, d) {
            return {
              type: 1,
              Component: i6b(
                a.H,
                o6b(({ model: e }) => {
                  const [f] = p6b(() => c.apply(b(e)).Pta);
                  return p6(d, { data: f, sC: a.sC });
                })
              ),
            };
          },
          r6b = function (a) {
            return { TY: a.TY, apply: q6b(a.apply) };
          },
          q6b = function (a) {
            const b = new WeakMap();
            return (c) => {
              let d = b.get(c);
              d || ((d = a(c)), b.set(c, d));
              return d;
            };
          },
          s6b = __webpack_require__(519427),
          q6 = s6b.computed,
          t6b = s6b.observable;
        var p6 = __webpack_require__(443763).jsx;
        var r6 = __webpack_require__(875604),
          o6b = r6.memo,
          h6b = r6.PureComponent,
          p6b = r6.useState;
        var i6 = class {
            map(a) {
              return a(this);
            }
            constructor(a, b, c) {
              this.ila = a;
              this.resultType = b;
              this.apply = c;
            }
          },
          s6 = class {
            map(a) {
              return a(this);
            }
            constructor(a, b, c, d) {
              this.ila = a;
              this.z6a = b;
              this.resultType = c;
              this.apply = d;
            }
          },
          t6 = class {
            map(a) {
              return a(this);
            }
            constructor(a, b, c) {
              this.B6a = a;
              this.resultType = b;
              this.apply = c;
            }
          },
          v6b = class {
            map(a) {
              return a(this);
            }
            constructor(a, b, c) {
              var d = u6b;
              this.keyType = a;
              this.valueType = b;
              this.resultType = c;
              this.apply = d;
            }
          },
          x6b = class {
            map(a) {
              return a(this);
            }
            constructor(a, b) {
              var c = w6b;
              this.A6a = a;
              this.resultType = b;
              this.apply = c;
            }
          },
          u5b = class {
            map(a) {
              return a(this);
            }
            constructor(a, b, c, d) {
              this.itemType = a;
              this.V6a = b;
              this.resultType = c;
              this.reduce = d;
            }
          };
        var y6b = class {},
          H5b = class extends y6b {
            Ila(a) {
              return new H5b(a(this.value));
            }
            Kpa(a) {
              return a(this.value);
            }
            constructor(a) {
              super();
              this.value = this.value = a;
            }
          },
          I5b = class extends y6b {
            Ila(a, b) {
              return new I5b(b(this.value));
            }
            Kpa(a, b) {
              return b(this.value);
            }
            constructor(a) {
              super();
              this.value = this.value = a;
            }
          };
        var w5b = class {
          map(a) {
            return a(this);
          }
          constructor(a, b) {
            this.type = a;
            this.get = b;
          }
        };
        var a6 = class {
            map(a) {
              return a(this);
            }
          },
          u6 = class extends a6 {
            Zra(a) {
              return this === a || a.Iya((b) => this.$0(b));
            }
            pN() {
              throw Error(`${this} is not iterable`);
            }
            Sta(a) {
              var b;
              const c =
                (b = this.propTypes) !== null && b !== void 0
                  ? b
                  : (this.propTypes = this.Nca());
              if (!c) throw Error(`${this} is not navigable"`);
              if (!c.hasOwnProperty(a))
                throw Error(`${this} has no navigable property "${a}"`);
              return c[a];
            }
            Nca() {
              throw Error(`${this} is not navigable`);
            }
            Tpa(a) {
              a(this);
            }
            Iya(a) {
              return a(this);
            }
            constructor() {
              super();
              this.kind = "simple";
              this.propTypes = void 0;
            }
          },
          v6 = class extends u6 {
            $0(a) {
              return a instanceof v6 && this.name === a.name;
            }
            toString() {
              return this.name;
            }
            constructor(a) {
              super();
              this.name = a;
            }
          },
          w6 = class extends u6 {
            $0(a) {
              return a instanceof w6 && this.xD === a.xD;
            }
            toString() {
              return this.xD.name;
            }
            constructor(a) {
              super();
              this.xD = a;
            }
          },
          x6 = class extends u6 {
            $0(a) {
              return a instanceof x6 && this.xD === a.xD && $5(this.Zu, a.Zu);
            }
            toString() {
              return `${this.xD}<${this.Zu}>`;
            }
            constructor(a, b) {
              super();
              this.xD = a;
              this.Zu = b;
            }
          },
          z6b = class extends x6 {
            pN() {
              return this.Zu;
            }
            Nca() {
              const a = this.Zu;
              return {
                size: g6.number,
                empty: g6.Yh,
                get first() {
                  return g6.optional(a);
                },
              };
            }
            constructor(a) {
              super("array", a);
            }
          },
          A6b = class extends x6 {
            pN() {
              return this.Zu;
            }
            Nca() {
              const a = this.Zu;
              return {
                size: g6.number,
                empty: g6.Yh,
                get first() {
                  return g6.optional(a);
                },
              };
            }
            constructor(a) {
              super("set", a);
            }
          },
          B6b = class extends u6 {
            $0(a) {
              return (
                a instanceof B6b &&
                $5(this.key, a.key) &&
                $5(this.value, a.value)
              );
            }
            toString() {
              return `map<${this.key}, ${this.value}>`;
            }
            constructor(a, b) {
              super();
              this.key = a;
              this.value = b;
            }
          },
          C6b = class extends u6 {
            $0(a) {
              return a instanceof C6b
                ? Object.entries(a.fields).every(
                    ([b, c]) =>
                      this.fields.hasOwnProperty(b) && $5(this.fields[b], c)
                  )
                : !1;
            }
            Nca() {
              return this.fields;
            }
            toString() {
              const a = Object.entries(this.fields);
              return a.length
                ? `{ ${a.map(([b, c]) => `${b}: ${c}`).join(", ")} }`
                : "{}";
            }
            constructor(a) {
              super();
              this.fields = a;
            }
          },
          y6 = class extends a6 {
            Zra(a) {
              return this === a || this.sm.every((b) => b.Zra(a));
            }
            pN() {
              return g6.union(...this.sm.map((a) => a.pN()));
            }
            Sta(a) {
              return g6.union(...this.sm.map((b) => b.Sta(a)));
            }
            Tpa(a) {
              this.sm.forEach((b) => b.Tpa(a));
            }
            Iya(a) {
              return this.sm.some((b) => b.Iya(a));
            }
            toString() {
              return this.sm.length
                ? this.sm.map((a) => a.toString()).join(" | ")
                : "never";
            }
            constructor(a) {
              super();
              this.sm = a;
              this.kind = "disjunction";
              w(a.length !== 1);
            }
          },
          z6 = new y6([]),
          D6b = new v6("string"),
          E6b = new v6("number"),
          F6b = new v6("boolean"),
          G6b = new v6("undefined"),
          H6b = new y6([D6b, E6b, F6b]),
          I6b = class {
            get never() {
              return z6;
            }
            get string() {
              return D6b;
            }
            get number() {
              return E6b;
            }
            get Yh() {
              return F6b;
            }
            get undefined() {
              return G6b;
            }
            get primitive() {
              return H6b;
            }
            optional(a) {
              return g6.union(a, g6.undefined);
            }
            array(a) {
              return new z6b(a);
            }
            set(a) {
              return new A6b(a);
            }
            j9(a) {
              return new y6([new z6b(a), new A6b(a)]);
            }
            map(a, b) {
              return new B6b(a, b);
            }
            Wc(a) {
              return new C6b({ ...a });
            }
            union(...a) {
              if (a.length === 0) return z6;
              if (a.length === 1) return a[0];
              const b = new Set();
              for (const d of a) v5b(d).Tpa((e) => b.add(e));
              a = [...b];
              if (a.length === 0) return z6;
              if (a.length === 1) return a[0];
              if (a.length === 2) {
                const [d, e] = a;
                return $5(d, e) ? e : $5(e, d) ? d : new y6(a);
              }
              const c = new Set();
              for (const d of a)
                [...c].some((e) => $5(d, e)) ||
                  (c.forEach((e) => $5(e, d) && c.delete(e)), c.add(d));
              return c.size === 1 ? [...c][0] : new y6([...c]);
            }
          },
          J6b = class extends I6b {
            instance(a) {
              return new w6(a);
            }
          },
          g6 = new J6b(),
          K6b = class extends I6b {
            instance(a) {
              return new w6(__c.D(this.classes[a]));
            }
            constructor(a) {
              super();
              this.classes = a;
            }
          };
        var L6b,
          M6b,
          A6 = Symbol("value"),
          B6 = class {
            get props() {
              var a;
              return (a = this.M5a) !== null && a !== void 0
                ? a
                : (this.M5a = this.kla());
            }
          },
          N6b = class {
            get size() {
              return this[A6].length;
            }
            get empty() {
              return this[A6].length === 0;
            }
            get first() {
              return this[A6][0];
            }
            constructor(a) {
              this[A6] = a;
            }
          };
        L6b = Symbol.iterator;
        var O6b = class extends B6 {
            kla() {
              return new N6b(this.items);
            }
            map(a) {
              return this.items.map(a);
            }
            [L6b]() {
              return this.items[Symbol.iterator]();
            }
            toString() {
              return this.items.length
                ? `[${Array.from(this.items, d6).join(", ")}]`
                : "[]";
            }
            constructor(a) {
              super();
              this.kind = "array";
              this.items = [...a];
            }
          },
          P6b = class {
            get size() {
              return this[A6].size;
            }
            get empty() {
              return this[A6].size === 0;
            }
            get first() {
              return this[A6][Symbol.iterator]().next().value;
            }
            constructor(a) {
              this[A6] = a;
            }
          };
        M6b = Symbol.iterator;
        var Q6b = class extends B6 {
            kla() {
              return new P6b(this.items);
            }
            map(a) {
              return Array.from(this.items, a);
            }
            [M6b]() {
              return this.items[Symbol.iterator]();
            }
            toString() {
              return this.items.size
                ? `Set [${Array.from(this.items, d6).join(", ")}]`
                : "Set []";
            }
            constructor(a) {
              super();
              this.kind = "set";
              this.items = new Set(a);
            }
          },
          R6b = class {
            toString() {
              return this.items.size
                ? `Map {${Array.from(
                    this.items,
                    ([a, b]) => `[${d6(a)}]: ${d6(b)}`
                  ).join(", ")}}`
                : "Map {}";
            }
            constructor(a) {
              this.items = a;
              this.kind = "map";
            }
          },
          S6b = class extends B6 {
            kla() {
              return this.fields;
            }
            toString() {
              const a = Object.entries(this.fields);
              return a.length
                ? `{ ${[...a].map(([b, c]) => `${b}: ${d6(c)}`).join(", ")} }`
                : "{}";
            }
            constructor(a) {
              super();
              this.fields = a;
              this.kind = "record";
            }
          },
          T6b = class {
            toString() {
              return `[instance ${this.xD.name}]`;
            }
            constructor(a, b) {
              this.xD = a;
              this.instance = b;
              this.kind = "instance";
            }
          },
          U6b = class {
            array(a) {
              return new O6b(a);
            }
            arrayOf(...a) {
              return new O6b(a);
            }
            set(a) {
              return new Q6b(a);
            }
            map(a) {
              return new R6b(new Map(a));
            }
            Wc(a) {
              return new S6b({ ...a });
            }
          },
          V6b = class extends U6b {
            instance(a, b) {
              return new T6b(a, b);
            }
            stringify(a) {
              return d6(a);
            }
            constructor() {
              super();
              this.bh = c6;
            }
          },
          l6 = new V6b(),
          W6b = class extends U6b {
            instance(a, b) {
              a = __c.D(this.classes[a]);
              return new T6b(a, b);
            }
            constructor(a) {
              super();
              this.classes = a;
            }
          };
        var E5b = {
            [0]: new i6(g6.number, g6.number, (a) => -a),
            [1]: new i6(g6.string, g6.number, (a) => a.length),
            [2]: new i6(g6.Yh, g6.Yh, (a) => !a),
          },
          F5b = {
            [0]: new s6(g6.number, g6.number, g6.number, (a, b) => a + b),
            [1]: new s6(g6.number, g6.number, g6.number, (a, b) => a - b),
            [2]: new s6(g6.number, g6.number, g6.number, (a, b) => a * b),
            [3]: new s6(g6.number, g6.number, g6.number, (a, b) => a / b),
            [4]: new s6(g6.number, g6.number, g6.number, (a, b) => a % b),
            [5]: new s6(g6.string, g6.string, g6.string, (a, b) => a + b),
            [6]: new s6(g6.number, g6.number, g6.Yh, (a, b) => a === b),
            [7]: new s6(g6.number, g6.number, g6.Yh, (a, b) => a !== b),
            [8]: new s6(g6.number, g6.number, g6.Yh, (a, b) => a < b),
            [9]: new s6(g6.number, g6.number, g6.Yh, (a, b) => a <= b),
            [10]: new s6(g6.number, g6.number, g6.Yh, (a, b) => a > b),
            [11]: new s6(g6.number, g6.number, g6.Yh, (a, b) => a >= b),
            [12]: new s6(g6.Yh, g6.Yh, g6.Yh, (a, b) => a && b),
            [13]: new s6(g6.Yh, g6.Yh, g6.Yh, (a, b) => a || b),
          },
          L5b = {
            [2]: new t6(g6.number, g6.number, (a) =>
              a.reduce((b, c) => b + c, 0)
            ),
            [3]: new t6(g6.number, g6.number, (a) =>
              a.reduce((b, c) => b * c, 1)
            ),
            [4]: new t6(g6.number, g6.number, (a) => Math.max(...a)),
            [5]: new t6(g6.number, g6.number, (a) => Math.min(...a)),
            [6]: new t6(g6.string, g6.string, (a) => a.join("")),
          },
          X6b = (a) => l6.array(a),
          Y6b = (a) => l6.set(a),
          J5b = {
            [0]: (a) => new t6(a, g6.array(a), X6b),
            [1]: (a) => new t6(a, g6.set(a), Y6b),
          },
          u6b = (a) => l6.map(a),
          z5b = { [0]: (a, b) => new v6b(a, b, g6.map(a, b)) },
          w6b = (a) => l6.Wc(a),
          P5b = { [0]: (a) => new x6b(a, g6.Wc(a)) },
          Z6b = (a, b) => l6.array(b.map((c) => c())),
          $6b = (a, b) => l6.array(b.flatMap((c) => c().items)),
          a7b = (a, b) => l6.array(a.filter((c, d) => b[d]()).map((c) => c())),
          b7b = (a, b) => b.some((c) => c()),
          c7b = (a, b) => b.every((c) => c()),
          d7b = (a, b) => {
            var c;
            return (c = a.find((d, e) => b[e]())) === null || c === void 0
              ? void 0
              : c();
          },
          B5b = {
            [0]: (a, b) => b.map((c) => Z5(a, c, g6.array(c), Z6b)),
            [1]: (a, b) =>
              b.pN().map((c) => Z5(a, g6.array(c), g6.array(c), $6b)),
            [2]: (a) => Z5(a, g6.Yh, g6.array(a), a7b),
            [3]: (a) => Z5(a, g6.Yh, g6.Yh, b7b),
            [4]: (a) => Z5(a, g6.Yh, g6.Yh, c7b),
            [5]: (a) => Z5(a, g6.Yh, g6.optional(a), d7b),
          };
        var k6 = class {
          define(a, b) {
            return new k6(new Map([[a, b]]), this);
          }
          resolve(a) {
            const b = this.defs.get(a);
            if (b) return b;
            if (this.parent) return this.parent.resolve(a);
            throw Error(`undefined symbol: ${a}`);
          }
          constructor(a, b) {
            this.defs = a;
            this.parent = b;
          }
        };
        var f7b = (a, b, c) => {
            const d = new k6(new Map(b.TY)),
              e = new e7b(a);
            return {
              compile: (f) => {
                const g = e6(e, d, f).as(c);
                return {
                  apply: (h) => {
                    h = new k6(new Map(b.apply(h).uxa));
                    return g(h);
                  },
                };
              },
            };
          },
          e7b = class {
            constructor(a) {
              this.types = a;
            }
          },
          j6 = class {
            static of(a, b) {
              return new j6(a, b);
            }
            as(a) {
              if (!$5(this.type, a))
                throw Error(
                  `inferred type ${this.type} does not match expected type: ${a}`
                );
              return this.evaluate;
            }
            computed() {
              const a = this.evaluate;
              return new j6(this.type, (b) => {
                const c = q6(a(b), { equals: l6.bh });
                return () => c.get();
              });
            }
            map(a) {
              return a(this.type, this.evaluate);
            }
            constructor(a, b) {
              this.type = a;
              this.evaluate = b;
            }
          },
          $5b = class {
            as(a, b) {
              if (!$5(a, this.jla))
                throw Error(
                  `argument type ${a} is not assignable to parameter type: ${this.jla}`
                );
              if (!$5(this.resultType, b))
                throw Error(
                  `return type ${this.resultType} is not assignable to expected type: ${b}`
                );
              return this.evaluate;
            }
            map(a) {
              return a(this.jla, this.resultType, this.evaluate);
            }
            constructor(a, b, c) {
              this.jla = a;
              this.resultType = b;
              this.evaluate = c;
            }
          };
        var f6b = class {
            add(a) {
              a = a(g7b, this.types);
              return new f6b({ ...this.classes, ...a });
            }
            resolve(a) {
              return this.classes[a];
            }
            constructor(a) {
              this.classes = a;
              this.types = new K6b(this.classes);
              this.values = new W6b(this.classes);
            }
          },
          g7b = class {
            constructor(a, b, c) {
              this.name = a;
              this.create = c;
              this.hlb = new i6(g6.Wc(b), g6.instance(this), (d) =>
                l6.instance(this, c(d.fields))
              );
            }
          };
        var b6b = class {
          error(a, b) {
            return Error(
              `widget '${this.Xvb}': schema error on key '${a}': ${b}`
            );
          }
          constructor(a) {
            this.Xvb = a;
          }
        };
        var h7b = Object.freeze({
          empty: !0,
          count() {
            return 0;
          },
          toArray() {
            return [];
          },
          vs() {
            return new Map();
          },
          first() {},
          last() {},
          next() {
            o6();
          },
          Ub() {
            o6();
          },
          Ie() {
            o6();
          },
          SA() {
            o6();
          },
          has() {
            return !1;
          },
          Ct() {
            return this;
          },
          map() {
            return [];
          },
          flatMap() {
            return [];
          },
          filter() {
            return [];
          },
          forEach() {},
          reduce(a, b) {
            return b;
          },
          some() {
            return !1;
          },
          every() {
            return !0;
          },
          [Symbol.iterator]() {
            return [][Symbol.iterator]();
          },
        });
        var i7b;
        i7b = Symbol.iterator;
        var k6b = class {
          static A(a) {
            __c.P(a, { Be: q6, Sx: q6 });
          }
          get Be() {
            return this.G6a().map((a) => {
              let b = this.KNa.get(a);
              b == null && ((b = `${this.Wfb++}`), this.KNa.set(a, b));
              return { id: b, ref: a };
            });
          }
          get Sx() {
            const a = new Map();
            this.Be.forEach((b, c) => b && a.set(b.ref, c));
            return a;
          }
          Kl(a) {
            return __c.D(this.Sx.get(a), "ref not found");
          }
          get empty() {
            return !this.Be.length;
          }
          count() {
            return this.Be.length;
          }
          toArray() {
            return this.Be.map((a) => a.ref);
          }
          vs() {
            return new Map(this.map((a, b) => [b, a]));
          }
          get daa() {
            const a = this.Be[0];
            return a && a.ref;
          }
          get wca() {
            const a = this.Be[this.Be.length - 1];
            return a && a.ref;
          }
          first(a) {
            if (!a) return this.daa;
            const b = this.Be.find((c) => a(c.ref));
            return b && b.ref;
          }
          last(a) {
            if (!a) return this.wca;
            const b = this.Be;
            for (let c = b.length - 1; c >= 0; c--) {
              const d = b[c];
              if (a(d.ref)) return d.ref;
            }
          }
          next(a, b) {
            const c = this.Be;
            for (a = this.Kl(a) + 1; a < c.length; a++) {
              const d = c[a];
              if (!b || b(d.ref)) return d.ref;
            }
          }
          Ub(a, b) {
            const c = this.Be;
            for (a = this.Kl(a) - 1; a >= 0; a--) {
              const d = c[a];
              if (!b || b(d.ref)) return d.ref;
            }
          }
          Ie(a, b) {
            a = this.Sx.get(a);
            b = this.Sx.get(b);
            w(a != null);
            w(b != null);
            return a < b ? -1 : a > b ? 1 : 0;
          }
          SA(a) {
            return this.Be[this.Kl(a)].id;
          }
          has(a) {
            return this.Sx.has(a);
          }
          Ct(a) {
            return new __c.MN(this, a);
          }
          map(a) {
            return this.Be.map(({ ref: b, id: c }) => a(b, c));
          }
          flatMap(a) {
            return this.Be.flatMap(({ ref: b, id: c }) => a(b, c));
          }
          filter(a) {
            return this.Be.filter((b) => a(b.ref, b.id)).map((b) => b.ref);
          }
          forEach(a) {
            this.Be.forEach((b, c) => a(b.ref, b.id, c));
          }
          reduce(a, b) {
            return this.Be.reduce((c, d) => a(c, d.ref, d.id), b);
          }
          some(a) {
            return this.Be.some((b) => a(b.ref, b.id));
          }
          every(a) {
            return this.Be.every((b) => a(b.ref, b.id));
          }
          [i7b]() {
            return this.toArray()[Symbol.iterator]();
          }
          constructor(a) {
            this.G6a = a;
            this.Wfb = (k6b.A(this), 0);
            this.KNa = new WeakMap();
          }
        };
        var j7b = new Set(),
          k7b = { vD: () => ({ Na: h7b }) },
          l7b = class {
            static A(a) {
              __c.P(a, { Lfa: t6b.shallow });
            }
            Sgb(a, b, { element: c }) {
              const d = __c.D(this.yqb.Yfa.get(a));
              w(d.element === b.element);
              w(!this.Lfa.has(a));
              b = { element: n6b(this, b, c) };
              this.Lfa.set(a, b);
              j7b.has(a) || (__c.SP.set(a, k7b), j7b.add(a));
              return b;
            }
            Rcb(a) {
              var b;
              return (b = this.Lfa.get(a)) === null || b === void 0
                ? void 0
                : b.element;
            }
            constructor(a, b, c, d, e) {
              this.yqb = a;
              this.N0a = b;
              this.una = c;
              this.H = d;
              this.sC = e;
              this.Lfa = (l7b.A(this), new Map());
            }
          };
        var m7b = class {
          static A(a) {
            __c.P(a, { Yfa: t6b.shallow });
          }
          Tgb(a, b) {
            w(!this.Yfa.has(a));
            b = {
              document: r6b(this.qJa(a, b.document)),
              element: r6b(this.qJa(a, b.element)),
            };
            this.Yfa.set(a, b);
            return b;
          }
          constructor(a) {
            this.qJa = a;
            this.Yfa = (m7b.A(this), new Map());
          }
        };
        __c.YQa = {
          Ygb: function (a) {
            var b = a.H;
            a = a.Yvb;
            var c = { Yn: g6b(), una: f7b };
            const { Yn: d, una: e } = c;
            c = new m7b(e6b(d));
            b = new l7b(c, d, e, b, a);
            return { jDa: c, mPb: c, I6: b, H6: b };
          },
        };
      }.call(self, self._7ccc7343da2ae983607b3819c7bc1f93));
    },
  },
]);
//# sourceMappingURL=sourcemaps/31cbc364b0ef8c59.js.map
