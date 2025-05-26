(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
  [35024],
  {
    /***/ 738083: function (_, __, __webpack_require__) {
      __webpack_require__.n_x = __webpack_require__.n;
      const __web_req__ = __webpack_require__;
      __web_req__(813110);
      self._7ccc7343da2ae983607b3819c7bc1f93 =
        self._7ccc7343da2ae983607b3819c7bc1f93 || {};
      (function (__c) {
        var PH = __c.PH;
        var Sc = __c.Sc;
        var P = __c.P;
        var zu = __c.zu;
        var O = __c.O;
        var mx = __c.mx;
        var bu = __c.bu;
        var D = __c.D;
        var E = __c.E;
        var U4 = function (a, b) {
            switch (b.reference.type) {
              case 0:
                const c = a.MR(b.reference.Zh);
                a = a.uV(b.reference.ii);
                return c != null && a != null;
              case 1:
                return a.MR(b.reference.Zh) != null;
              case 2:
                return a.uV(b.reference.ii) != null;
              case 3:
                return !1;
              default:
                throw new E(b.reference);
            }
          },
          J1b = function (a, b, c) {
            switch (c.type) {
              case "invalid":
                return !1;
              case "canonical":
                if (c.ea.length > 0) return !1;
                a = a.bF(c.DY.slice(1).trim());
                return a.result !== "success"
                  ? !1
                  : __c.SD(new __c.VD(), a.iH).filter((d) => {
                      switch (d.type) {
                        case 0:
                          return U4(b, d);
                        case 1:
                          return U4(b, d.start) && U4(b, d.end);
                        default:
                          throw new E(d);
                      }
                    }).length > 0;
              default:
                throw new E(c);
            }
          },
          K1b = function (a, b, c, d) {
            const e = [];
            for (const k of c)
              for (const l of d) {
                c = k.na;
                var f = l.column,
                  g = a.layout.cells.get(c, f);
                if (
                  !g ||
                  (k.boundary === "start" ? g.span.Qb === c : g.span.Sc === c)
                )
                  if (
                    ((c = b.get(`${f.id}:${c.id}`)),
                    (c =
                      k.boundary === "start"
                        ? c === null || c === void 0
                          ? void 0
                          : c.ra
                        : c === null || c === void 0
                        ? void 0
                        : c.Fa))
                  ) {
                    g = e[e.length - 1];
                    f = (f = a.layout.cols.next(f))
                      ? { column: f, boundary: "start" }
                      : { column: D(a.layout.cols.last()), boundary: "end" };
                    var h;
                    if ((h = g))
                      (h = g.hpa),
                        (h =
                          h.column === l.column && h.boundary === l.boundary);
                    h &&
                      ((h = g.dXa),
                      (h = h.na === k.na && h.boundary === k.boundary));
                    h &&
                    g.color === c.color &&
                    g.weight === c.weight &&
                    g.kc === c.kc &&
                    g.kc === 0
                      ? (g.hpa = f)
                      : e.push({
                          dXa: k,
                          Dsb: l,
                          hpa: f,
                          color: c.color,
                          weight: c.weight,
                          kc: c.kc,
                        });
                  }
              }
            return e;
          },
          L1b = function (a, b, c, d, e) {
            const f = [];
            for (const l of d)
              for (const m of c) {
                var g = m.na,
                  h = l.column;
                d = a.layout.cells.get(g, h);
                if (
                  !d ||
                  (l.boundary === "start" ? d.span.Mb === h : d.span.Gc === h)
                )
                  if (
                    ((d = b.get(`${h.id}:${g.id}`)),
                    (d =
                      l.boundary === "start"
                        ? d === null || d === void 0
                          ? void 0
                          : d.qa
                        : d === null || d === void 0
                        ? void 0
                        : d.Ka) &&
                      (l.boundary !== "start" || e(g, h) !== 1))
                  ) {
                    h = f[f.length - 1];
                    g = (g = a.layout.rows.next(g))
                      ? { na: g, boundary: "start" }
                      : { na: D(a.layout.rows.last()), boundary: "end" };
                    var k;
                    if ((k = h))
                      (k = h.lIa),
                        (k =
                          k.column === l.column && k.boundary === l.boundary);
                    k &&
                      ((k = h.lpa),
                      (k = k.na === m.na && k.boundary === m.boundary));
                    k &&
                    h.color === d.color &&
                    h.weight === d.weight &&
                    h.kc === d.kc &&
                    h.kc === 0
                      ? (h.lpa = g)
                      : f.push({
                          lIa: l,
                          Osb: m,
                          lpa: g,
                          color: d.color,
                          weight: d.weight,
                          kc: d.kc,
                        });
                  }
              }
            return f;
          },
          M1b = function (a, b, c, d, e) {
            const f = a.XYa.H9a(c, b.layout.rows.last(), b.layout.cols.last());
            a = (q, r) => {
              const t = f.get(q) || 0,
                v = f.get(r) || 0;
              return t <= v ? q : r;
            };
            const g = new Map();
            if (d.length === 0 || e.length === 0) return g;
            var h = [],
              k = b.layout.cols.Ub(e[0].column);
            k && h.push({ column: k, boundary: "start" });
            h.push(...e);
            (e = b.layout.cols.next(e[e.length - 1].column)) &&
              h.push({ column: e, boundary: "start" });
            e = [];
            (k = b.layout.rows.Ub(d[0].na)) &&
              e.push({ na: k, boundary: "start" });
            e.push(...d);
            (d = b.layout.rows.next(d[d.length - 1].na)) &&
              e.push({ na: d, boundary: "start" });
            for (const q of h) {
              h = (d = q.boundary === "start" ? q.column : void 0)
                ? b.layout.cols.Ub(d)
                : b.layout.cols.last();
              for (const r of e) {
                var l = r.boundary === "start" ? r.na : void 0;
                k = l ? b.layout.rows.Ub(l) : b.layout.rows.last();
                var m = d && l && c.get(`${d.id}:${l.id}`),
                  n = d && k && c.get(`${d.id}:${k.id}`);
                l = h && l && c.get(`${h.id}:${l.id}`);
                var p = h && k && c.get(`${h.id}:${k.id}`);
                k =
                  q.boundary === "end"
                    ? l === null || l === void 0
                      ? void 0
                      : l.Ka
                    : m === null || m === void 0
                    ? void 0
                    : m.qa;
                m =
                  r.boundary === "end"
                    ? n === null || n === void 0
                      ? void 0
                      : n.Fa
                    : m === null || m === void 0
                    ? void 0
                    : m.ra;
                n =
                  q.boundary === "end"
                    ? p === null || p === void 0
                      ? void 0
                      : p.Ka
                    : n === null || n === void 0
                    ? void 0
                    : n.qa;
                l =
                  r.boundary === "end"
                    ? p === null || p === void 0
                      ? void 0
                      : p.Fa
                    : l === null || l === void 0
                    ? void 0
                    : l.ra;
                p = __c.gEa({ ra: n, Fa: k, qa: l, Ka: m }, a);
                let t;
                switch (p) {
                  case "blockStart":
                    t = n;
                    break;
                  case "blockEnd":
                    t = k;
                    break;
                  case "inlineStart":
                    t = l;
                    break;
                  case "inlineEnd":
                    t = m;
                    break;
                  default:
                    t = void 0;
                }
                const { height: v, width: u } =
                  (t === null || t === void 0 ? void 0 : t.kc) === 1
                    ? { height: t.weight, width: t.weight }
                    : {
                        height: Math.max(
                          (l === null || l === void 0 ? void 0 : l.weight) || 0,
                          (m === null || m === void 0 ? void 0 : m.weight) || 0
                        ),
                        width: Math.max(
                          (n === null || n === void 0 ? void 0 : n.weight) || 0,
                          (k === null || k === void 0 ? void 0 : k.weight) || 0
                        ),
                      };
                g.set(V4(q, r), __c.uE(p, v / 2, u / 2));
              }
            }
            return g;
          },
          N1b = function (a, b, c, d, e, f) {
            if (d.length === 0 || e.length === 0) return [];
            const g = K1b(b, c, d, e);
            f = L1b(b, c, d, e, f);
            const h = M1b(a, b, c, d, e),
              k = a.Meb(b),
              l = a.feb(b),
              m = b.direction === "rtl";
            a = g
              .map((n) => {
                var p,
                  q,
                  r = n.Dsb,
                  t = n.hpa,
                  v = n.dXa;
                const u = n.color,
                  x = n.weight;
                n = n.kc;
                const y = m ? -1 : 1,
                  A =
                    (p = h.get(V4(r, v))) === null || p === void 0
                      ? void 0
                      : p.Ka;
                p =
                  (q = h.get(V4(t, v))) === null || q === void 0
                    ? void 0
                    : q.qa;
                if (A != null && p != null) {
                  q = D(k.get(v.na));
                  var z = D(l.get(r.column));
                  r = D(l.get(t.column));
                  v = v.boundary === "start" ? q.start : q.end;
                  q = z.start;
                  t = t.boundary === "start" ? r.start : r.end;
                  return {
                    color: u,
                    weight: x,
                    kc: n,
                    p1: new bu(q + A * y, v),
                    p2: new bu(t + p * y, v),
                    ...__c.zE((t - q) * y, n * x, A),
                  };
                }
              })
              .filter(__c.Ib);
            return [
              ...f
                .map((n) => {
                  var p,
                    q,
                    r = n.lIa,
                    t = n.Osb,
                    v = n.lpa;
                  const u = n.color,
                    x = n.weight;
                  n = n.kc;
                  const y =
                    (p = h.get(V4(r, t))) === null || p === void 0
                      ? void 0
                      : p.Fa;
                  p =
                    (q = h.get(V4(r, v))) === null || q === void 0
                      ? void 0
                      : q.ra;
                  if (y != null && p != null) {
                    q = D(l.get(r.column));
                    var A = D(k.get(t.na));
                    t = D(k.get(v.na));
                    r = r.boundary === "start" ? q.start : q.end;
                    q = A.start;
                    v = v.boundary === "start" ? t.start : t.end;
                    return {
                      color: u,
                      weight: x,
                      kc: n,
                      p1: new bu(r, q + y),
                      p2: new bu(r, v + p),
                      ...__c.zE(v - q, n * x, y),
                    };
                  }
                })
                .filter(__c.Ib),
              ...a,
            ];
          },
          O1b = function (a) {
            const b = [];
            a = a.filter((c) => c.weight !== 0 && c.color != null);
            a = __c.vd(a, (c) => c.weight);
            a = Array.from(a.entries()).sort(([c], [d]) => c - d);
            for (const [c, d] of a) {
              a = __c.vd(d, (e) => `${e.ck}_${e.dk}`);
              for (const [, e] of a) {
                const { dk: f, ck: g } = e[0];
                a = __c.vd(e, (h) => h.color);
                for (const [h, k] of a)
                  b.push({ weight: c, color: h, lines: k, ck: g, dk: f });
              }
            }
            return b;
          },
          P1b = function (a, b, c, d) {
            var e = __c.Sub;
            const f = b.get().flatMap((k) =>
                a.layout.rows.last() === k
                  ? [
                      { na: k, boundary: "start" },
                      { na: k, boundary: "end" },
                    ]
                  : [{ na: k, boundary: "start" }]
              ),
              g = c.get().flatMap((k) =>
                a.layout.cols.last() === k
                  ? [
                      { column: k, boundary: "start" },
                      { column: k, boundary: "end" },
                    ]
                  : [{ column: k, boundary: "start" }]
              ),
              h = new Map();
            for (const k of b.get())
              for (const l of c.get())
                (b = l && k ? e.XYa.aqb(a, l, k) : void 0),
                  b && h.set(`${l.id}:${k.id}`, b);
            c = N1b(e, a, h, f, g, d);
            return O1b(c);
          },
          W4 = function () {
            const [a] = (0, __c.xb)(() => mx());
            return a;
          },
          Q1b = function (a) {
            switch (a) {
              case 2:
                return O("ibdecg");
              case 7:
                return O("446quA");
              case 5:
                return O("j1fbqg");
              case 1:
                return O("O5i4AQ");
              case 6:
                return O("C0VHsg");
              case 4:
                return O("9ND0kg");
              case -1:
                return O("RWqnLA");
              case 9:
                return O("nQR/7w");
              case -2:
                return O("P23rtA");
              case 3:
                return O("+IXmVg");
              default:
                throw new E(a);
            }
          },
          R1b = function (a, b, c) {
            const d = [a];
            for (; a != null && a !== b; ) (a = c.next(a)) && d.push(a);
            return d;
          },
          S1b = function (a) {
            const b =
                a.direction === "rtl"
                  ? -(0, __c.Vub)(a) / 2
                  : -(0, __c.Tub)(a) / 2,
              c = -(0, __c.Uub)(a) / 2,
              d = a.width + (0, __c.Tub)(a) / 2 + (0, __c.Vub)(a) / 2;
            a = a.height + (0, __c.Uub)(a) / 2 + (0, __c.Wub)(a) / 2;
            return zu({
              top: 0,
              left: 0,
              width: d,
              height: a,
              rotation: 0,
            }).translate(b, c);
          },
          T1b = function (a) {
            return (b) => ({ type: "react", node: (0, __c.N)(a, { ...b }) });
          },
          V1b = function (a) {
            var b;
            const c = a.dz;
            var d = a.content;
            const e = a.context;
            a = a.ep;
            __c.C(
              (d === null || d === void 0
                ? void 0
                : (b = d.cg) === null || b === void 0
                ? void 0
                : b.type) === "formula"
            );
            b = d.hk;
            const f = { type: "dom", render: (h) => (h.innerText = "") };
            switch (b.type) {
              case 9:
                d = f;
                break;
              case 6:
                var g;
                d =
                  (g = c.Vja) === null || g === void 0
                    ? void 0
                    : g.call(c, {
                        content: __c.re(__c.F7a, {
                          ...__c.$db,
                          value: b.value,
                        }),
                        context: e,
                        ep: a,
                      });
                break;
              case 1:
              case 3:
              case 4:
              case 2:
              case 7:
              case 8:
                d = U1b(c, e, d.Wz, d.hk.type);
                break;
              case 0:
                d = {
                  type: "react",
                  node: X4(__c.LR, {
                    label: Q1b(b.error),
                    children: X4(__c.oy, {
                      width: "full",
                      display: "flex",
                      justifyContent: "center",
                      children: X4(__c.$Eb, { tone: "critical" }),
                    }),
                  }),
                };
                break;
              default:
                throw new E(b);
            }
            return d !== null && d !== void 0 ? d : f;
          },
          U1b = function (a, b, c, d) {
            var e;
            return (e = a.Yja) === null || e === void 0
              ? void 0
              : e.call(a, { context: b, value: c, valueType: d });
          },
          Y1b = function (a) {
            const b = a.dz,
              c = a.Cf,
              d = a.xtb,
              e = a.Ua;
            b.Yja = (f) => __c.pLa({ ...f, Ua: e });
            b.bFa = (f) => V1b({ ...f, dz: b });
            b.Vja = T1b(W1b({ Cf: c, BQ: void 0 }));
            b.dFa = X1b(d, e);
            b.eFa = T1b((f) => X4(Y4, { ...f, Ua: e }));
          },
          Z1b = function ({
            label: a,
            Ta: b,
            width: c,
            height: d,
            scale: e,
            uIa: f,
          }) {
            return X4("div", {
              style: { width: c, height: d, transform: `scale(${e})` },
              className: "bx74uQ",
              children: Z4(__c.ly, {
                className: $4("ivlMMQ", a5(f)),
                size: "small",
                alignment: "center",
                children: [b && X4(b, { size: "small" }), a],
              }),
            });
          },
          a5 = function (a) {
            return {
              _2BX0vg: a === "primary-default",
              JfW_Cg: a === "primary-low",
              isMgNg: a === "primary-active",
              xwWDeQ: a === "secondary-default",
              w0EyUQ: a === "secondary-low",
              _8p5AIA: a === "secondary-active",
            };
          },
          a2b = function ({ ud: a, ANa: b, scale: c, Po: d, Qo: e, E2a: f }) {
            const g = b5(() => {
                const m = d === null || d === void 0 ? void 0 : d.get();
                if (m != null && m.length !== 0) return new __c.jE(m);
              }, [d]),
              h = e(1),
              k = e(c),
              l = { ssE9Tg: !a, OkifGQ: a };
            return X4(__c.my, {
              Yp: "light",
              light: "light",
              Ws: "light",
              dark: "light",
              children: (m) =>
                X4("div", {
                  className: $4("ze9QCQ", l, m.className),
                  style: { width: k, height: k },
                  children: X4("div", {
                    style: { width: h, height: h, transform: `scale(${c})` },
                    className: $4("N7J3UA", l),
                    ref: g === null || g === void 0 ? void 0 : g.Yl,
                    children: X4(__c.PR, {
                      className: $4("m8CFdg", l, { G6wL4w: f, W_E0wA: b }),
                      ariaLabel: O("ruWN9A"),
                      children: X4($1b, { size: "tiny" }),
                    }),
                  }),
                }),
            });
          },
          c2b = function () {
            const a = new b2b(),
              b = new __c.qS(),
              c = c5((f) => {
                const {
                    scale: g = 1,
                    vNa: h,
                    size: k = "small",
                    E2a: l = !0,
                  } = f,
                  m = d5((n) => a.Qo({ scale: n, size: k, Dta: h }), [k, h]);
                return X4(a2b, {
                  ...f,
                  scale: h ? Math.max(g, h) : g,
                  ud: f.sheet.direction === "rtl",
                  ANa: f.selection != null && a.aib(f.sheet, f.selection),
                  Qo: m,
                  E2a: l,
                });
              }),
              d = c5((f) => {
                const {
                    scale: g = 1,
                    vNa: h,
                    size: k = "small",
                    sheet: l,
                    selection: m,
                    Hqb: n,
                  } = f,
                  p = d5((u) => a.Qo({ scale: u, size: k, Dta: h }), [k, h]),
                  q = h ? Math.max(g, h) : g,
                  r = d5((u) => m != null && a.Kxa(m).has(u), [m]),
                  t = d5((u) => m != null && a.Mfb(l, m).has(u), [l, m]),
                  v = d5(
                    (u) => {
                      const x =
                        n != null &&
                        l.layout.cols.Ie(u, n.Mb) >= 0 &&
                        l.layout.cols.Ie(u, n.Gc) <= 0;
                      return r(u)
                        ? x
                          ? "secondary-active"
                          : "primary-active"
                        : t(u)
                        ? x
                          ? "secondary-low"
                          : "primary-low"
                        : x
                        ? "secondary-default"
                        : "primary-default";
                    },
                    [l, n, t, r]
                  );
                return X4(e5, { ...f, gd: g, Ad: q, Qo: p, bE: v, OE: b });
              }),
              e = c5((f) => {
                const {
                    scale: g = 1,
                    vNa: h,
                    size: k = "small",
                    sheet: l,
                    selection: m,
                    Hqb: n,
                  } = f,
                  p = d5((u) => a.Qo({ scale: u, size: k, Dta: h }), [k, h]),
                  q = h ? Math.max(g, h) : g,
                  r = d5((u) => m != null && a.Mxa(m).has(u), [m]),
                  t = d5((u) => m != null && a.Nfb(l, m).has(u), [l, m]),
                  v = d5(
                    (u) => {
                      const x =
                        n != null &&
                        l.layout.rows.Ie(u, n.Qb) >= 0 &&
                        l.layout.rows.Ie(u, n.Sc) <= 0;
                      return r(u)
                        ? x
                          ? "secondary-active"
                          : "primary-active"
                        : t(u)
                        ? x
                          ? "secondary-low"
                          : "primary-low"
                        : x
                        ? "secondary-default"
                        : "primary-default";
                    },
                    [l, n, t, r]
                  );
                return X4(f5, { ...f, gd: q, Ad: g, Qo: p, bE: v, OE: b });
              });
            return { f3a: c, e3a: d, g3a: e };
          },
          d2b = function (a) {
            const b = a.Jp,
              c = () => null;
            return __c.wx((d) => X4(g5, { ...d, Jp: b, Bh: c }));
          },
          e2b = function ({ sheet: a, Y: b, range: c, Fd: d }) {
            h5(
              () =>
                i5(() => {
                  if (d.current != null) {
                    var e,
                      f =
                        (e = b === null || b === void 0 ? void 0 : b.get()) !==
                          null && e !== void 0
                          ? e
                          : 1;
                    e = a.direction === "rtl";
                    e = c ? a.qa(c.Mb) * f * (e ? 1 : -1) : 0;
                    var g = c ? -a.ra(c.Qb) * f : 0;
                    d.current.style.transform = `translate(${e}px, ${g}px)`;
                    d.current.style.width = `${a.width * f}px`;
                    d.current.style.height = `${a.height * f}px`;
                  }
                }),
              [a, c, d, b]
            );
          },
          h2b = function ({ onScroll: a }) {
            const b = new f2b(a);
            return {
              UB: b,
              Fja: c5((c) =>
                X4(g2b, { sheet: c.sheet, UB: b, children: c.children })
              ),
            };
          },
          k2b = function (a) {
            const b = a.Jp,
              c = a.ke,
              d = a.YYa,
              e = ({ children: k }) => k,
              { UB: f, Fja: g } = h2b({ onScroll: a.onScroll });
            class h extends i2b {
              get TK() {
                const k = this.props.fa.rv;
                switch (k) {
                  case "screen":
                    return g;
                  case "print":
                    return e;
                  default:
                    throw new E(k);
                }
              }
              componentDidMount() {
                d.HYa(this.props.item, {
                  Lb: this.props.Lb,
                  fa: this.props.fa,
                });
              }
              componentWillUnmount() {
                d.v8a(this.props.item, {
                  Lb: this.props.Lb,
                  fa: this.props.fa,
                });
              }
              render() {
                d.HYa(this.props.item, {
                  Lb: this.props.Lb,
                  fa: this.props.fa,
                });
                return X4(j2b, {
                  ...this.props,
                  Y: this.Y,
                  Jp: b,
                  TK: this.TK,
                  Bh: this.Bh,
                  YYa: d,
                  UB: f,
                });
              }
              constructor(...k) {
                super(...k);
                this.Y = j5(() => {
                  const l = this.props.item;
                  var m = this.props.fa,
                    n = m.rv;
                  m = m.zoom;
                  switch (n) {
                    case "screen":
                      return m;
                    case "print":
                      n = d.Qeb(l);
                      if (!n) return 1;
                      ({ width: n } = new __c.JE(l, n.Lb, { zoom: m }));
                      return n / l.config.width;
                    default:
                      throw new E(n);
                  }
                });
                this.Bh = c5((l) =>
                  X4("div", {
                    className: "wKvivQ",
                    children: X4(__c.xLa, { ...this.props, ...l, ke: c }),
                  })
                );
              }
            }
            return { NEa: h, UB: f };
          },
          l2b = function (a, b) {
            if (
              b != null &&
              b.Mb != null &&
              b.Qb != null &&
              b.Gc != null &&
              b.Sc != null
            ) {
              var c = a.qa(b.Mb),
                d = a.ra(b.Qb),
                e = a.qa(b.Gc) + b.Gc.width - c;
              a = a.ra(b.Sc) + b.Sc.height - d;
              return zu({ top: d, left: c, width: e, height: a });
            }
          },
          n2b = function (a) {
            const b = a.Jp,
              c = () => null;
            return (d) => X4(m2b, { ...d, Jp: b, Bh: c });
          },
          r2b = function (a) {
            const b = { transform: "translate(-1000px, -1000px) scale(0)" },
              c = { KHa: b, jv: b, Ha: {}, rn: {} },
              d = k5(
                () => a.lz.style || c,
                (h) => {
                  var k;
                  Object.assign(a.K8.style, h.KHa);
                  Object.assign(a.pL.style, h.jv);
                  Object.assign(a.kD.style, h.Ha);
                  Object.assign(a.pD.style, h.rn);
                  h =
                    h === null || h === void 0
                      ? void 0
                      : (k = h.Ha) === null || k === void 0
                      ? void 0
                      : k.textDecoration;
                  a.kD.classList.toggle("OQx3PQ", h === "underline");
                  a.kD.classList.toggle("_99ezUA", h === "line-through");
                  a.kD.classList.toggle(
                    "kppAqQ",
                    h === "underline line-through"
                  );
                },
                { fireImmediately: !0, equals: o2b }
              ),
              e = k5(
                () => a.xsa,
                (h) => {
                  a.kD.classList.toggle("_84KvRA", !h);
                  a.K8.classList.toggle("_84KvRA", !h);
                  a.pL.classList.toggle("TL_RLA", !h);
                },
                { fireImmediately: !0 }
              ),
              f = k5(
                () => a.renderer,
                (h) => {
                  a.x9 &&
                  (h === null || h === void 0 ? void 0 : h.type) !== "react"
                    ? ((a.x9 = void 0), a.G3.remove())
                    : (a.pD.innerHTML = "");
                  switch (h === null || h === void 0 ? void 0 : h.type) {
                    case "react":
                      a.x9 = p2b(h.node, a.G3);
                      a.pD.appendChild(a.G3);
                      break;
                    case "dom":
                      h.render(a.pD);
                      break;
                    case void 0:
                      break;
                    default:
                      throw new E(h);
                  }
                  a.yua();
                },
                { fireImmediately: !0 }
              ),
              g = q2b
                ? k5(
                    () => a.Vqa,
                    (h) => {
                      a.kD.classList.toggle("qxD1GA", h);
                    },
                    { fireImmediately: !0 }
                  )
                : void 0;
            return () => {
              d();
              e();
              f();
              g === null || g === void 0 || g();
            };
          },
          o2b = function (a, b) {
            return JSON.stringify(a) === JSON.stringify(b);
          },
          t2b = function (a) {
            const b = a.ez,
              c = a.aC,
              d = a.zC,
              e = a.$1a,
              f = a.An,
              g = new s2b(c),
              h = (k, l) => (f ? J1b(f, k, l) : !1);
            return (k) =>
              X4(l5, {
                ...k,
                hN: h,
                zC: d,
                aC: c,
                ez: b,
                Wra: g,
                $1a: e === null || e === void 0 ? void 0 : e.get(),
              });
          },
          V4 = (a, b) =>
            `${a.column.id}-${a.boundary}:${b.na.id}-${b.boundary}`,
          W1b =
            ({ Cf: a, BQ: b }) =>
            (c) =>
              (0, __c.N)(__c.Yub, { ...c, Cf: a, BQ: b }),
          m5 = __webpack_require__(443763),
          u2b = m5.Fragment,
          X4 = m5.jsx,
          Z4 = m5.jsxs;
        var v2b = __webpack_require__(358579).Z;
        var w2b = __webpack_require__,
          x2b = w2b(993864),
          $4 = w2b.n_x(x2b)();
        var c5 = __webpack_require__(446474).Pi;
        var n5 = __webpack_require__(875604),
          o5 = n5.Component,
          i2b = n5.PureComponent,
          d5 = n5.useCallback,
          h5 = n5.useEffect,
          y2b = n5.useLayoutEffect,
          b5 = n5.useMemo,
          p5 = n5.useRef,
          z2b = n5.useState;
        var q5 = __webpack_require__(635872),
          r5 = q5.Om,
          A2b = q5.kq,
          B2b = q5.YN;
        var s5 = __webpack_require__(519427),
          t5 = s5.action,
          i5 = s5.autorun,
          u5 = s5.comparer,
          j5 = s5.computed,
          C2b = s5.createAtom,
          v5 = s5.observable,
          k5 = s5.reaction,
          D2b = s5.untracked;
        var w5 = __webpack_require__(937763)._;
        var x5 = __webpack_require__(161563)._;
        var p2b = __webpack_require__(36281).createPortal;
        var E2b = c5((a) => {
            var b,
              c,
              d = a.sheet.direction === "rtl";
            d = { H2wykw: !d, UweldA: d };
            const [e] = z2b(() => mx()),
              f = {
                get: d5(() => {
                  var g;
                  const h =
                    e === null || e === void 0
                      ? void 0
                      : (g = e.current) === null || g === void 0
                      ? void 0
                      : g.getBoundingClientRect();
                  var k, l;
                  g = {
                    top: 0,
                    left: 0,
                    width:
                      (k = h === null || h === void 0 ? void 0 : h.width) !==
                        null && k !== void 0
                        ? k
                        : 0,
                    height:
                      (l = h === null || h === void 0 ? void 0 : h.height) !==
                        null && l !== void 0
                        ? l
                        : 0,
                  };
                  return zu(g);
                }, [e]),
              };
            return Z4("div", {
              className: $4("nMvVqA", d),
              children: [
                Z4("div", {
                  ref: v2b(a.Fd, e),
                  className: "_0YOFPg",
                  children: [
                    X4(a.Jp, { ...a, viewport: f }),
                    X4("div", {
                      className: $4("Gdl7fQ", d),
                      children:
                        (c = a.pEa) === null || c === void 0
                          ? void 0
                          : (b = c.get()) === null || b === void 0
                          ? void 0
                          : b.map((g, h) => X4(g, {}, h)),
                    }),
                  ],
                }),
                a.fGb === "visible" &&
                  Z4(u2b, {
                    children: [
                      X4("div", {
                        className: $4("_32sKQw", d),
                        children: X4(a.Z4a, { ...a }),
                      }),
                      X4("div", {
                        className: $4("xdIsTQ", d),
                        children: X4(a.b5a, { ...a }),
                      }),
                      X4("div", {
                        className: $4("rsTRSA", d),
                        children: X4(a.a5a, { ...a }),
                      }),
                    ],
                  }),
              ],
            });
          }),
          F2b = c5((a) => {
            a = a.content;
            __c.w(a.type === "text2" || a.type === "text3");
            switch (a.type) {
              case "text2":
                return a.value.aa;
              case "text3":
                return __c.br.ka(a.value).cells.aa();
              default:
                throw new E(a);
            }
          });
        var X1b = (a, b) =>
            __c.bLa((c, d) => {
              const e = c.content;
              c = c.context;
              if (e.value.isEmpty) for (; d.lastChild; ) d.lastChild.remove();
              else
                ({ Ng: c } = __c.tg(__c.ah, c.attrs)),
                  c === "wrap" &&
                    ((d = d.appendChild(document.createElement("div"))),
                    (d.className = "dt4Dlg")),
                  a.render({
                    container: d,
                    text: e.value,
                    nb: void 0,
                    writingMode: 1,
                    rd: "start",
                    mg: G2b(e, c),
                    Ua: b,
                  });
            }),
          G2b = r5(
            (a, b) => {
              if (b === "wrap") return [];
              a = a.value.aa.split("\n").map((c) => c.length + 1);
              a.pop();
              return a;
            },
            { equals: u5.structural }
          );
        var H2b, I2b, J2b, Y4;
        new ((H2b = class extends w5 {
          constructor() {
            super(Y4);
            I2b();
          }
        }),
        (() => {
          class a extends (J2b = o5) {
            static A(b) {
              P(b, { Ng: j5 });
            }
            get Ng() {
              return __c.tg(__c.ah, this.props.context.attrs).Ng;
            }
            render() {
              var b = this.props.content;
              const c = this.props.context;
              if (b.value.isEmpty) return null;
              b = X4(this.props.Bh, {
                content: b,
                na: c.container.na,
                col: c.container.column,
                Ng: this.Ng,
              });
              return this.Ng === "wrap"
                ? X4("div", { className: "dt4Dlg", children: b })
                : b;
            }
            constructor(...b) {
              super(...b);
              a.A(this);
            }
          }
          ({
            c: [Y4, I2b],
          } = x5(a, [], [Sc], J2b));
        })(),
        H2b)();
        var b2b = class {
          Qo({ size: a, scale: b, Dta: c }) {
            b = c ? Math.max(c, b) : b;
            return a === "large" ? __c.UV * b : __c.QDb * b;
          }
          constructor() {
            this.aib = r5((a, b) => {
              var c, d;
              b = b.get();
              return (
                b != null &&
                a.layout.rows.count() ===
                  (((c = b.rows) === null || c === void 0 ? void 0 : c.size) ||
                    0) &&
                a.layout.cols.count() ===
                  (((d = b.columns) === null || d === void 0
                    ? void 0
                    : d.size) || 0)
              );
            });
            this.Kxa = A2b(
              (a) => {
                var b;
                return new Set(
                  ((b = a.get()) === null || b === void 0
                    ? void 0
                    : b.columns) || []
                );
              },
              { equals: __c.Jr }
            );
            this.Mxa = A2b(
              (a) => {
                var b;
                return new Set(
                  ((b = a.get()) === null || b === void 0 ? void 0 : b.rows) ||
                    []
                );
              },
              { equals: __c.Jr }
            );
            this.Mfb = r5(
              (a, b) => {
                var { cells: c } = b.get() || {};
                if (!c) return new Set();
                if (this.Mxa(b).size > 0) return new Set(a.layout.cols);
                b = this.Kxa(b);
                const d = new Set();
                for (const e of c) {
                  c = a.layout.cells.get(e.na, e.column);
                  for (const f of R1b(
                    c ? c.span.Mb : e.column,
                    c ? c.span.Gc : e.column,
                    a.layout.cols
                  ))
                    (b.size === 0 || b.has(f)) && d.add(f);
                }
                return d;
              },
              { equals: __c.Jr }
            );
            this.Nfb = r5(
              (a, b) => {
                var { cells: c } = b.get() || {};
                if (!c) return new Set();
                if (this.Kxa(b).size > 0) return new Set(a.layout.rows);
                b = this.Mxa(b);
                const d = new Set();
                for (const e of c) {
                  c = a.layout.cells.get(e.na, e.column);
                  for (const f of R1b(
                    c ? c.span.Qb : e.na,
                    c ? c.span.Sc : e.na,
                    a.layout.rows
                  ))
                    (b.size === 0 || b.has(f)) && d.add(f);
                }
                return d;
              },
              { equals: __c.Jr }
            );
          }
        };
        var K2b,
          L2b,
          M2b,
          N2b,
          O2b,
          P2b,
          Q2b = parseInt("4px", 10) || 4,
          e5;
        new ((K2b = class extends w5 {
          constructor() {
            super(e5);
            M2b();
          }
        }),
        (() => {
          class a extends (N2b = o5) {
            static A(b) {
              P(b, { ud: j5, lq: j5, e5: j5 });
            }
            get ud() {
              return this.props.sheet.direction === "rtl";
            }
            get lq() {
              var b;
              const c =
                (b = this.props.Po) === null || b === void 0 ? void 0 : b.get();
              if (c != null && c.length !== 0) return new __c.jE(c);
            }
            get e5() {
              var b, c, d;
              return (c = (d = this.props).sqa) === null || c === void 0
                ? void 0
                : (b = c.call(d)) === null || b === void 0
                ? void 0
                : b.get();
            }
            render() {
              return X4(__c.my, {
                Yp: "light",
                light: "light",
                Ws: "light",
                dark: "light",
                children: this.M8a,
              });
            }
            constructor(...b) {
              super(...b);
              this.onMouseMove =
                (e5.A(this),
                t5((c) => {
                  const { onMouseMove: d, sheet: e, gd: f = 1 } = this.props;
                  d === null || d === void 0 || d(c, e, "column", f);
                }));
              this.onMouseLeave = t5((c) => {
                var d, e;
                (d = (e = this.props).onMouseLeave) === null ||
                  d === void 0 ||
                  d.call(e, c);
              });
              this.AWa = (c, d, e) => {
                const {
                    sheet: f,
                    Qo: g,
                    bE: h,
                    pGb: k,
                    gd: l = 1,
                    Ad: m = 1,
                  } = this.props,
                  n = { jNbTIg: !this.ud, gtA7Dw: this.ud },
                  p = (e === null || e === void 0 ? 0 : e.sticky)
                    ? this.ud
                      ? { right: 0 }
                      : { left: 0 }
                    : void 0;
                var q;
                const r = (e === null || e === void 0 ? 0 : e.sticky)
                  ? (q = this.e5) !== null && q !== void 0
                    ? q
                    : p
                  : void 0;
                let t = -1;
                return Z4("div", {
                  style: r,
                  className: $4("Vt2_4w", n, {
                    Tn3nUw: e === null || e === void 0 ? void 0 : e.sticky,
                  }),
                  onMouseMove: this.onMouseMove,
                  onMouseLeave: this.onMouseLeave,
                  children: [
                    f.layout.cols.map((v) => {
                      var u;
                      t++;
                      if (
                        !(
                          (c && f.layout.cols.Ie(v, c) < 0) ||
                          (d && f.layout.cols.Ie(v, d) > 0)
                        )
                      )
                        return X4(
                          R2b,
                          {
                            col: v,
                            label: __c.LA(t),
                            Ta:
                              k === null || k === void 0
                                ? void 0
                                : (u = k.get()) === null || u === void 0
                                ? void 0
                                : u.get(v),
                            Qo: g,
                            bE: h,
                            gd: l,
                            Ad: m,
                          },
                          v.id
                        );
                    }),
                    (e === null || e === void 0 ? void 0 : e.sticky) &&
                      X4("div", {
                        style: { width: Q2b * l },
                        className: $4("HBvlug", "ru3tFQ", n),
                      }),
                  ],
                });
              };
              this.M8a = (c) => {
                var d;
                const e = this.props.sheet,
                  f = e.view.freeze.VG
                    ? e.layout.Nd.get(e.view.freeze.VG)
                    : void 0,
                  g = { jNbTIg: !this.ud, gtA7Dw: this.ud };
                return Z4("div", {
                  ref: (d = this.lq) === null || d === void 0 ? void 0 : d.Yl,
                  className: $4("xhBZaw", g, c.className),
                  children: [
                    f && this.AWa(void 0, f, { sticky: !0 }),
                    this.AWa(f ? e.cols.next(f) : void 0),
                  ],
                });
              };
            }
          }
          ({
            c: [e5, M2b],
          } = x5(a, [], [Sc], N2b));
        })(),
        K2b)();
        var f5;
        new ((L2b = class extends w5 {
          constructor() {
            super(f5);
            O2b();
          }
        }),
        (() => {
          class a extends (P2b = o5) {
            static A(b) {
              P(b, { ud: j5, lq: j5, e5: j5 });
            }
            get ud() {
              return this.props.sheet.direction === "rtl";
            }
            get lq() {
              var b;
              const c =
                (b = this.props.Po) === null || b === void 0 ? void 0 : b.get();
              if (c != null && c.length !== 0) return new __c.jE(c);
            }
            get e5() {
              var b, c, d;
              return (c = (d = this.props).sqa) === null || c === void 0
                ? void 0
                : (b = c.call(d)) === null || b === void 0
                ? void 0
                : b.get();
            }
            render() {
              return X4(__c.my, {
                Yp: "light",
                light: "light",
                Ws: "light",
                dark: "light",
                children: this.rqb,
              });
            }
            constructor(...b) {
              super(...b);
              this.onMouseMove =
                (f5.A(this),
                t5((c) => {
                  const { onMouseMove: d, sheet: e, Ad: f = 1 } = this.props;
                  d === null || d === void 0 || d(c, e, "row", f);
                }));
              this.onMouseLeave = t5((c) => {
                var d, e;
                (d = (e = this.props).onMouseLeave) === null ||
                  d === void 0 ||
                  d.call(e, c);
              });
              this.GWa = (c, d, e) => {
                const {
                    sheet: f,
                    Qo: g,
                    bE: h,
                    gd: k = 1,
                    Ad: l = 1,
                  } = this.props,
                  m = { jNbTIg: !this.ud, gtA7Dw: this.ud },
                  n = (e === null || e === void 0 ? 0 : e.sticky)
                    ? { top: 0 }
                    : void 0;
                var p;
                const q = (e === null || e === void 0 ? 0 : e.sticky)
                  ? (p = this.e5) !== null && p !== void 0
                    ? p
                    : n
                  : void 0;
                let r = -1;
                return Z4("div", {
                  style: q,
                  className: $4("_93roJg", m, {
                    Tn3nUw: e === null || e === void 0 ? void 0 : e.sticky,
                  }),
                  onMouseMove: this.onMouseMove,
                  onMouseLeave: this.onMouseLeave,
                  children: [
                    f.rows.map((t) => {
                      r++;
                      if (
                        !(
                          (c && f.rows.Ie(t, c) < 0) ||
                          (d && f.rows.Ie(t, d) > 0)
                        )
                      )
                        return X4(
                          S2b,
                          {
                            na: t,
                            label: `${r + 1}`,
                            bE: h,
                            Qo: g,
                            gd: k,
                            Ad: l,
                          },
                          t.id
                        );
                    }),
                    (e === null || e === void 0 ? void 0 : e.sticky) &&
                      X4("div", {
                        style: { height: Q2b * l },
                        className: $4("HBvlug", "koz2Hg"),
                      }),
                  ],
                });
              };
              this.rqb = (c) => {
                var d;
                const e = this.props.sheet,
                  f = e.view.freeze.vV
                    ? e.layout.$d.get(e.view.freeze.vV)
                    : void 0,
                  g = { jNbTIg: !this.ud, gtA7Dw: this.ud };
                return Z4("div", {
                  ref: (d = this.lq) === null || d === void 0 ? void 0 : d.Yl,
                  className: $4("An9VeA", g, c.className),
                  children: [
                    f && this.GWa(void 0, f, { sticky: !0 }),
                    this.GWa(f ? e.rows.next(f) : void 0),
                  ],
                });
              };
            }
          }
          ({
            c: [f5, O2b],
          } = x5(a, [], [Sc], P2b));
        })(),
        L2b)();
        var R2b = c5((a) => {
            const b = a.label,
              c = a.Ta,
              d = a.col,
              e = a.bE,
              f = a.Qo,
              g = a.gd;
            a = a.Ad;
            const h = f(a),
              k = B2b(() => e(d));
            return X4("div", {
              className: $4("_83Rssw", "d2uLIA", a5(k)),
              style: { width: d.width * g, height: h },
              children: X4(Z1b, {
                label: b,
                Ta: c,
                width: d.width,
                height: f(1),
                scale: a,
                uIa: k,
              }),
            });
          }),
          S2b = c5((a) => {
            const b = a.label,
              c = a.na,
              d = a.Qo,
              e = a.bE,
              f = a.gd;
            a = a.Ad;
            const g = d(f),
              h = B2b(() => e(c));
            return X4("div", {
              className: $4("_83Rssw", "JhBzyw", a5(h)),
              style: { width: g, height: c.height * a },
              children: X4(Z1b, {
                label: b,
                width: d(1),
                height: c.height,
                scale: f,
                uIa: h,
              }),
            });
          });
        var T2b =
          '<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><circle stroke="currentColor" cx="6" cy="6" r="5.5"/></svg>';
        var U2b =
          '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle stroke="currentColor" cx="12" cy="12" r="9.25" stroke-width="1.5"/></svg>';
        var $1b = __c.ER({ io: T2b, medium: U2b });
        var V2b, W2b, X2b, g5;
        new ((V2b = class extends w5 {
          constructor() {
            super(g5);
            W2b();
          }
        }),
        (() => {
          class a extends (X2b = o5) {
            static A(b) {
              P(b, { le: j5.struct });
            }
            render() {
              const b = this.props.element;
              return X4(this.props.Jp, {
                sheet: b.ha.config,
                container: b,
                p8: "visible",
                Po: this.props.Po,
                Dt: this.props.Dt,
                Ht: this.props.Ht,
                Y: this.props.Y,
                le: this.le,
                Bh: this.props.Bh,
                rG: void 0,
              });
            }
            get le() {
              return __c.TA(this.props.element.ha.Ma, this.props.Ge);
            }
            constructor(...b) {
              super(...b);
              a.A(this);
            }
          }
          ({
            c: [g5, W2b],
          } = x5(a, [], [Sc], X2b));
        })(),
        V2b)();
        var Y2b = class {
          constructor() {
            this.xga = new WeakMap();
            this.Qeb = (a) => this.xga.get(a);
            this.HYa = (a, b) => {
              this.xga.set(a, b);
            };
            this.v8a = (a, b) => {
              const c = this.xga.get(a);
              c && c.fa === b.fa && c.Lb === b.Lb && this.xga.delete(a);
            };
          }
        };
        var y5 = parseInt("4px", 10) || 4,
          Z2b = c5(({ sheet: a, Y: b, range: c, xv: d, yv: e }) => {
            if (c != null && (d || e)) {
              var f;
              b =
                (f = b === null || b === void 0 ? void 0 : b.get()) !== null &&
                f !== void 0
                  ? f
                  : 1;
              f = a.direction === "rtl";
              var g = { ZJ0G6w: !f, dOI_jA: f };
              if (d && e)
                return (
                  (d = a.ra(c.Sc) + c.Sc.height),
                  (a = a.qa(c.Gc) + c.Gc.width),
                  X4("div", {
                    style: { top: d * b, width: a * b, height: y5 * b },
                    className: $4("aX8dhQ", "VGcLng"),
                  })
                );
              if (d)
                return (
                  (c = a.qa(c.Gc) + c.Gc.width),
                  X4("div", {
                    style: {
                      width: y5 * b,
                      height: a.height * b,
                      ...(f ? { right: c * b } : { left: c * b }),
                    },
                    className: $4("aX8dhQ", "gl1RPg", g),
                  })
                );
              if (e)
                return (
                  (c = a.ra(c.Sc) + c.Sc.height),
                  X4("div", {
                    style: { top: c * b, width: a.width * b, height: y5 * b },
                    className: $4("aX8dhQ", "VGcLng"),
                  })
                );
            }
          });
        var z5 = ({ sheet: a, range: b, Y: c, children: d }) => {
            const e = W4();
            e2b({ sheet: a, Y: c, range: b, Fd: e });
            return X4("div", {
              ref: e,
              className: $4(
                "nstn2A",
                a.direction === "rtl" ? "NgnL2Q" : "f8jAGQ"
              ),
              children: d,
            });
          },
          $2b = ({ sheet: a, range: b, Y: c, children: d }) => {
            const e = W4();
            e2b({ sheet: a, Y: c, range: b, Fd: e });
            a = a.direction === "rtl" ? "NgnL2Q" : "f8jAGQ";
            return X4("div", {
              className: $4("nstn2A", a, "_9sodyg"),
              children: X4("div", {
                ref: e,
                className: $4("nstn2A", a),
                children: d,
              }),
            });
          };
        var g2b = c5(({ sheet: a, children: b, UB: c }) => {
            const d = d5(
                (f) => {
                  c.hya(a, f);
                },
                [c, a]
              ),
              e = d5(
                (f) => {
                  f != null ? c.VB.set(a, f) : c.VB.delete(a);
                },
                [c, a]
              );
            return X4(__c.Jyb, {
              direction: a.config.direction === "rtl" ? "rtl" : "ltr",
              onScroll: d,
              ou: e,
              children: b,
            });
          }),
          f2b = class {
            hya(a, b) {
              this.onScroll && this.onScroll(a);
              this.o4.set(a, b);
            }
            constructor(a) {
              this.onScroll = a;
              this.VB = new WeakMap();
              this.o4 = v5.map(new Map(), { deep: !1 });
              this.scrollTo = t5((b, c) => {
                b = this.VB.get(b);
                b === null ||
                  b === void 0 ||
                  b.scrollTo({ left: Math.floor(c) });
              });
            }
          };
        var j2b = c5((a) => {
          const b = a.item,
            c = a.Po,
            d = a.Qf,
            e = a.measureRef,
            f = a.Y,
            g = a.yOa,
            h = a.Lb,
            k = a.Dt,
            l = a.Ht,
            m = a.Jp,
            n = a.TK,
            p = a.Bh,
            q = a.Ge,
            r = a.UB;
          a = b5(() => __c.TA(b.Ma, q), [b, q]);
          const t = b5(
              () =>
                c5(({ sheet: y, range: A, xv: z, yv: B }) =>
                  X4(z5, {
                    sheet: y,
                    range: A,
                    Y: f,
                    children: X4(Z2b, {
                      sheet: y,
                      Y: f,
                      range: A,
                      xv: z,
                      yv: B,
                    }),
                  })
                ),
              [f]
            ),
            v = S1b(b.config),
            u = f.get(),
            x = Math.min(v.width * u, h.width);
          h5(
            () =>
              i5(() => {
                var y = b.config.view.freeze.VG
                  ? b.config.layout.Nd.get(b.config.view.freeze.VG)
                  : void 0;
                if (y != null)
                  if (b.config.qa(y) + y.width > x) {
                    if ((y = r.VB.get(b))) y.style.overflowX = "hidden";
                  } else if ((y = r.VB.get(b))) y.style.overflowX = "scroll";
              }),
            [b, h.width, r, u, x]
          );
          return X4("div", {
            ref: e,
            className: "E8r86A",
            style: { width: x },
            children: X4(n, {
              sheet: b,
              children: X4("div", {
                ref: g,
                className: "cXTiJA",
                style: { width: v.width * u, height: v.height * u },
                children: X4("div", {
                  className: "W1ir5A",
                  children: X4(m, {
                    container: d.yj(b),
                    sheet: b.config,
                    p8: "visible",
                    Po: c,
                    Y: f,
                    Dt: k,
                    Ht: l,
                    le: a,
                    Bh: p,
                    rG: t,
                  }),
                }),
              }),
            }),
          });
        });
        var a3b = c5(({ page: a, range: b, OB: c }) => {
          const d = l2b(a.sheet, b);
          return X4("div", {
            className: "Gi9pfA",
            children: a.elements.map((e, f) =>
              d == null ? c(e, f) : __c.xu(zu(e)).Uo(d) && c(e, f)
            ),
          });
        });
        var b3b = new __c.qS(),
          A5 = (a) => __c.UV * a,
          c3b = () => "primary-default",
          m2b = c5(
            ({
              container: a,
              Po: b,
              Dt: c,
              Ht: d,
              Y_: e,
              Y: f,
              viewport: g,
              fsb: h,
              Jp: k,
              Bh: l,
              OB: m,
              Jfa: n,
              qyb: p,
              dxb: q,
              cxb: r,
            }) => {
              const t = a.page,
                v = b5(
                  () =>
                    c5(({ sheet: u, range: x, xv: y, yv: A }) =>
                      Z4(u2b, {
                        children: [
                          X4(z5, {
                            sheet: t.sheet,
                            range: x,
                            Y: f,
                            children: X4(Z2b, {
                              sheet: u,
                              Y: f,
                              range: x,
                              xv: y,
                              yv: A,
                            }),
                          }),
                          Z4($2b, {
                            sheet: t.sheet,
                            range: x,
                            Y: f,
                            children: [
                              p && X4(p, {}),
                              m && X4(a3b, { page: t, OB: m, range: x }),
                              r && X4(r, {}),
                              n && n(),
                            ],
                          }),
                          q &&
                            x &&
                            X4(z5, {
                              sheet: t.sheet,
                              range: x,
                              Y: f,
                              children: X4(q, { range: x }),
                            }),
                        ],
                      })
                    ),
                  [t, f, p, m, r, n, q]
                );
              return h
                ? X4(d3b, {
                    container: a,
                    viewport: g,
                    Y: f,
                    Po: b,
                    Dt: c,
                    Ht: d,
                    Jp: k,
                    Bh: l,
                    rG: v,
                  })
                : X4(k, {
                    sheet: t.sheet,
                    container: a,
                    p8: "hidden",
                    Po: b,
                    Dt: c,
                    Ht: d,
                    Y_: e,
                    Y: f,
                    viewport: g,
                    Bh: l,
                    rG: v,
                  });
            }
          ),
          d3b = c5((a) => {
            const b = a.container,
              c = a.Y,
              d = a.viewport,
              e = a.Po,
              f = a.Dt,
              g = a.Ht,
              h = a.Jp,
              k = a.Bh;
            a = a.rG;
            const l = b.page,
              m = l.sheet.direction === "rtl",
              n = p5(null),
              p = p5(null),
              q = p5(null);
            h5(() => {
              const y = B5({
                sheet: l.sheet,
                $ga: !0,
                aha: !0,
                Y: c,
                viewport: d,
              });
              return k5(
                () => (y === null || y === void 0 ? void 0 : y.get()),
                (A) => {
                  const z = n.current;
                  if (A && z) {
                    var B = l.sheet.direction === "rtl",
                      G;
                    z.style.position =
                      (G = A.position) !== null && G !== void 0 ? G : "sticky";
                    var H;
                    z.style.top =
                      (H = A.top) !== null && H !== void 0 ? H : "0px";
                    var I, K;
                    B
                      ? (z.style.right =
                          (I = A.right) !== null && I !== void 0 ? I : "0px")
                      : (z.style.left =
                          (K = A.left) !== null && K !== void 0 ? K : "0px");
                    var M;
                    z.style.transform =
                      (M = A.transform) !== null && M !== void 0 ? M : "";
                  }
                }
              );
            }, [l.sheet, c, d]);
            h5(() => {
              const y = B5({
                sheet: l.sheet,
                $ga: !1,
                aha: !0,
                Y: c,
                viewport: d,
              });
              return k5(
                () => (y === null || y === void 0 ? void 0 : y.get()),
                (A) => {
                  const z = q.current;
                  if (A && z) {
                    var B;
                    z.style.position =
                      (B = A.position) !== null && B !== void 0 ? B : "sticky";
                    var G;
                    z.style.top =
                      (G = A.top) !== null && G !== void 0 ? G : "0px";
                    var H;
                    z.style.transform =
                      (H = A.transform) !== null && H !== void 0 ? H : "";
                  }
                }
              );
            }, [l.sheet, c, d]);
            h5(() => {
              const y = B5({
                sheet: l.sheet,
                $ga: !0,
                aha: !1,
                Y: c,
                viewport: d,
              });
              return k5(
                () => (y === null || y === void 0 ? void 0 : y.get()),
                (A) => {
                  const z = p.current;
                  if (A && z) {
                    var B = l.sheet.direction === "rtl",
                      G;
                    z.style.position =
                      (G = A.position) !== null && G !== void 0 ? G : "sticky";
                    var H, I;
                    B
                      ? (z.style.right =
                          (H = A.right) !== null && H !== void 0 ? H : "0px")
                      : (z.style.left =
                          (I = A.left) !== null && I !== void 0 ? I : "0px");
                    var K;
                    z.style.transform =
                      (K = A.transform) !== null && K !== void 0 ? K : "";
                  }
                }
              );
            }, [l.sheet, c, d]);
            const r = d5(
                (y, A, z) =>
                  B5({ sheet: y, $ga: A, aha: z, Y: c, viewport: d }),
                [c, d]
              ),
              t = b5(
                () => (r ? () => r(l.sheet, !0, !1) : void 0),
                [r, l.sheet]
              ),
              v = b5(
                () => (r ? () => r(l.sheet, !1, !0) : void 0),
                [r, l.sheet]
              );
            var u;
            const x =
              (u = c === null || c === void 0 ? void 0 : c.get()) !== null &&
              u !== void 0
                ? u
                : 1;
            return Z4("div", {
              className: $4("OsKKIQ", "cbOp6Q"),
              children: [
                X4("div", {
                  className: "VDFv_A",
                  children: X4(h, {
                    sheet: l.sheet,
                    container: b,
                    p8: "hidden",
                    Po: e,
                    Dt: f,
                    Ht: g,
                    Y_: r,
                    Y: c,
                    viewport: d,
                    Bh: k,
                    rG: a,
                  }),
                }),
                X4("div", {
                  ref: n,
                  className: "_688KWg",
                  children: X4(a2b, { ud: m, ANa: !1, Qo: A5, scale: x }),
                }),
                X4("div", {
                  ref: q,
                  className: "m0cT1w",
                  children: X4(e5, {
                    sheet: l.sheet,
                    gd: x,
                    Ad: x,
                    Qo: A5,
                    bE: c3b,
                    OE: b3b,
                    sqa: t,
                  }),
                }),
                X4("div", {
                  ref: p,
                  className: "zm537g",
                  children: X4(f5, {
                    sheet: l.sheet,
                    gd: x,
                    Ad: x,
                    Qo: A5,
                    bE: c3b,
                    OE: b3b,
                    sqa: v,
                  }),
                }),
              ],
            });
          }),
          B5 = ({ sheet: a, $ga: b, aha: c, Y: d, viewport: e }) =>
            j5(() => {
              var f = e === null || e === void 0 ? void 0 : __c.Hu(e.get()),
                g;
              const h =
                (g = d === null || d === void 0 ? void 0 : d.get()) !== null &&
                g !== void 0
                  ? g
                  : 1;
              if (!f) return {};
              g = {};
              f = new bu(f.left, f.top);
              const k = a.direction === "rtl";
              g.position = "relative";
              c && (g.top = "0px");
              b && (k ? (g.right = "0px") : (g.left = "0px"));
              g.transform = `translate(${b ? f.x * h : 0}px, ${
                c ? f.y * h : 0
              }px)`;
              return g;
            });
        var s2b = class {
          constructor(a) {
            this.aC = a;
            this.g8a = __c.fU;
            this.veb = r5((b, c, d, e) => {
              d = d.get();
              const f = new WeakMap();
              for (let t = 0; t < d.length; t++) {
                var g = d[t],
                  h = this.peb(b, c, g);
                if (h) {
                  switch (h) {
                    case "start":
                    case "justify":
                      var k = d[t + 1];
                      if (k == null || !PH(b, c, k)) continue;
                      break;
                    case "center":
                      k = d[t + 1];
                      if (k == null || !PH(b, c, k)) continue;
                      k = d[t - 1];
                      if (k == null || !PH(b, c, k)) continue;
                      break;
                    case "end":
                      k = d[t - 1];
                      if (k == null || !PH(b, c, k)) continue;
                      break;
                    default:
                      throw new E(h);
                  }
                  if ((k = e(c, g))) {
                    var l = k.width + (h === "center" ? 0 : this.g8a);
                    if (!(g.width > l)) {
                      switch (h) {
                        case "start":
                        case "justify":
                          h = b.qa(g);
                          k = h + l;
                          break;
                        case "center":
                          k = b.qa(g) + g.width / 2;
                          h = k - l / 2;
                          k += l / 2;
                          break;
                        case "end":
                          k = b.qa(g) + g.width;
                          h = k - l;
                          break;
                        default:
                          throw new E(h);
                      }
                      for (l = d.indexOf(g); l >= 0; l--) {
                        var m = d[l],
                          n = l - 1 < 0 || PH(b, c, d[l - 1]),
                          p;
                        if ((p = m === g || PH(b, c, m))) {
                          p = h;
                          var q = k,
                            r = b.qa(m);
                          p = p < r && r < q;
                        }
                        if (p && n) f.set(m, 1);
                        else break;
                      }
                      for (g = d.indexOf(g) + 1; g < d.length; g++) {
                        l = d[g];
                        if ((m = PH(b, c, l)))
                          (m = h), (n = k), (p = b.qa(l)), (m = m < p && p < n);
                        if (m) f.set(l, 1);
                        else break;
                      }
                    }
                  }
                }
              }
              return f;
            });
            this.peb = (b, c, d) => {
              var e, f;
              const g = b.layout.cells.get(c, d);
              if (
                g &&
                (g.ref.content.ref || g.ref.Aa.ref) &&
                g.span.Qb === g.span.Sc &&
                g.span.Mb === g.span.Gc
              ) {
                var h = this.aC.zv(b, c, d);
                b = this.aC.mqa(
                  b,
                  c,
                  d,
                  __c.bh({ Ng: void 0, textAlign: void 0 })
                );
                var { Ng: k, textAlign: l } = __c.tg(__c.ah, b);
                if (k === "overflow")
                  return __c.cLa(
                    l,
                    (e = g.ref.content.ref) === null || e === void 0
                      ? void 0
                      : e.type,
                    (f = g.ref.Aa.ref) === null || f === void 0
                      ? void 0
                      : f.type,
                    h ? () => h.hk.type : void 0
                  );
              }
            };
          }
        };
        var e3b = c5(function (a) {
          const b = a.sheet;
          var c = a.Zg;
          const d = a.Ivb,
            e = a.Y,
            f = a.Wra,
            g = a.deb;
          a = a.overflow;
          const h = W4();
          y2b(
            () =>
              i5(() => {
                const p = D(h.current);
                var q;
                const r =
                  (q = e === null || e === void 0 ? void 0 : e.get()) !==
                    null && q !== void 0
                    ? q
                    : 1;
                q = b.height;
                p.style.width = `${b.width * r}px`;
                p.style.height = `${q * r}px`;
              }),
            [h, e, b]
          );
          const k = d5((p) => f.veb(b, p, d, g), [f, b, d, g]);
          var l = d5(
            (p, q) => {
              var r, t;
              return (t =
                (r = k(p)) === null || r === void 0 ? void 0 : r.get(q)) !==
                null && t !== void 0
                ? t
                : 0;
            },
            [k]
          );
          c = P1b(b, c, d, l);
          l = b.width;
          const m = b.height,
            n = b.direction === "rtl";
          return X4("svg", {
            ref: h,
            role: "presentation",
            className: $4("c6a1eQ", {
              H_CtIQ: !n,
              _8_56PQ: n,
              _3NnFzw: a === "visible",
              JMH1ng: a === "hidden",
            }),
            viewBox: `0 0 ${l} ${m}`,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            children: c.map(({ lines: p, color: q, weight: r, ck: t, dk: v }) =>
              X4(
                "path",
                {
                  stroke: q,
                  strokeDasharray: t,
                  strokeDashoffset: v,
                  strokeWidth: r,
                  d: p
                    .map(
                      ({ p1: u, p2: x }) => `M ${u.x} ${u.y} L ${x.x} ${x.y}`
                    )
                    .join(" "),
                },
                `${q}-${r}-${t}-${v}`
              )
            ),
          });
        });
        var f3b;
        f3b = Symbol.iterator;
        var g3b = class {
          get size() {
            return this.Jga;
          }
          get([a, b]) {
            return (a = this.AE.get(a)) ? a.get(b) : void 0;
          }
          has([a, b]) {
            a = this.AE.get(a);
            return a == null ? !1 : a.has(b);
          }
          set([a, b], c) {
            let d = this.AE.get(a);
            d == null && ((d = new Map()), this.AE.set(a, d));
            d.set(b, c);
            this.Jga++;
            return this;
          }
          clear() {
            this.AE.clear();
            this.Jga = 0;
          }
          delete([a, b]) {
            const c = this.AE.get(a);
            if (c == null || !c.delete(b)) return !1;
            this.Jga--;
            c.size === 0 && this.AE.delete(a);
            return !0;
          }
          forEach(a) {
            for (const [b, c] of this.AE) for (const [d, e] of c) a([b, d], e);
          }
          *[f3b]() {
            for (const [a, b] of this.AE)
              for (const [c, d] of b) yield [[a, c], d];
          }
          constructor() {
            this.Jga = 0;
            this.AE = new Map();
          }
        };
        var h3b,
          i3b,
          j3b,
          k3b,
          l3b,
          m3b,
          n3b,
          q2b = __c.Hw("285688d5", !1),
          o3b,
          p3b = class extends o5 {
            render() {
              const { Baa: a, ...b } = this.props,
                c = this.props.sheet;
              return Z4("div", {
                ref: this.$Ya,
                className: $4(
                  "ZTz_iA",
                  c.direction === "ltr" ? "TA4X7w" : "WvuqMw"
                ),
                children: [
                  (a === null || a === void 0 ? void 0 : a.aHa) &&
                    X4(C5, {
                      ...b,
                      sheet: c,
                      range: a.aHa.range,
                      xv: !0,
                      yv: !0,
                      className: "_0C8M3w",
                    }),
                  (a === null || a === void 0 ? void 0 : a.j2a) &&
                    X4(C5, {
                      ...b,
                      sheet: c,
                      range: a.j2a.range,
                      xv: !1,
                      yv: !0,
                      className: "_7n44yg",
                    }),
                  (a === null || a === void 0 ? void 0 : a.DNa) &&
                    X4(C5, {
                      ...b,
                      sheet: c,
                      range: a.DNa.range,
                      xv: !0,
                      yv: !1,
                      className: "fF5r6w",
                    }),
                  (a === null || a === void 0 ? void 0 : a.X0a) &&
                    X4(C5, {
                      ...b,
                      sheet: c,
                      range: a.X0a.range,
                      xv: !1,
                      yv: !1,
                      className: "llILYw",
                    }),
                ],
              });
            }
            componentDidMount() {
              const a = i5(() => {
                var b = this.props,
                  c = b.Y;
                b = b.sheet;
                const d = this.$Ya.current;
                d &&
                  ((c = c ? c.get() : 1),
                  (d.style.width = `${b.width * c}px`),
                  (d.style.height = `${b.height * c}px`));
              });
              __c.Cc(this, [a]);
            }
            constructor(...a) {
              super(...a);
              this.$Ya = mx();
            }
          };
        ({
          c: [o3b, j3b],
        } = x5(p3b, [], [Sc], o5));
        j3b();
        var C5;
        new ((h3b = class extends w5 {
          constructor() {
            super(C5);
            k3b();
          }
        }),
        (() => {
          class a extends (l3b = o5) {
            static A(b) {
              P(b, { vya: j5, bounds: j5 });
            }
            get vya() {
              const b = this.props.viewport,
                c = this.props.xv,
                d = this.props.yv;
              return b == null || (!c && !d)
                ? b
                : j5(() => {
                    const e = __c.Hu(b.get());
                    return zu({
                      top: d ? 0 : e.top,
                      left: c ? 0 : e.left,
                      width: e.width,
                      height: e.height,
                    });
                  });
            }
            render() {
              const b = this.props.hN,
                c = this.props.sheet,
                d = this.props.container,
                e = this.props.range,
                f = this.props.rG,
                g = this.props.xv,
                h = this.props.yv;
              return Z4("div", {
                ref: this.Iva,
                className: $4("i0YQww", this.props.className),
                children: [
                  X4("div", {
                    ref: this.IUa,
                    className: "vUKoKg",
                    children: X4("div", {
                      ref: this.JUa,
                      children: X4(D5, {
                        hN: b,
                        sheet: c,
                        container: d,
                        bounds: e,
                        Po: this.props.Po,
                        zC: this.props.zC,
                        Bh: this.props.Bh,
                        lZ: this.props.lZ,
                        Y: this.props.Y,
                        Zg: this.Zg,
                        D6: this.D6,
                        XR: this.XR,
                      }),
                    }),
                  }),
                  X4(this.Hja, {}),
                  f && X4(f, { sheet: c, range: e, xv: g, yv: h }),
                ],
              });
            }
            componentDidMount() {
              const b = i5(() => {
                  var h = this.props,
                    k = h.Y,
                    l = h.sheet;
                  const m = h.range;
                  var n = this.Iva.current;
                  const p = this.IUa.current;
                  h = this.JUa.current;
                  k = k ? k.get() : 1;
                  const q = m ? l.qa(m.Gc) + m.Gc.width - l.qa(m.Mb) : l.width,
                    r = m ? l.ra(m.Sc) + m.Sc.height - l.ra(m.Qb) : l.height;
                  n &&
                    ((n.style.width = `${q * k}px`),
                    (n.style.height = `${r * k}px`));
                  p &&
                    ((p.style.width = `${q * k}px`),
                    (p.style.height = `${r * k}px`));
                  n = l.direction === "rtl";
                  n = m ? l.qa(m.Mb) * k * (n ? 1 : -1) : 0;
                  l = m ? -l.ra(m.Qb) * k : 0;
                  h && (h.style.transform = `translate(${n}px, ${l}px)`);
                }),
                c = this.props.sheet;
              var d = this.props.Y_;
              const e = this.props.xv,
                f = this.props.yv,
                g =
                  e || f
                    ? d === null || d === void 0
                      ? void 0
                      : d(c, e, f)
                    : void 0;
              d = i5(() => {
                const h = this.Iva.current;
                if (h != null) {
                  var k = e || f ? "sticky" : "relative",
                    l = f ? "0px" : "unset",
                    m = e ? "0px" : "unset",
                    n = e ? "0px" : "unset",
                    p = c.direction === "rtl";
                  if (g == null)
                    (h.style.position = k),
                      (h.style.top = l),
                      (h.style.left = p ? "unset" : m),
                      (h.style.right = p ? n : "unset");
                  else {
                    const x = g.get();
                    var q;
                    h.style.position =
                      (q = x.position) !== null && q !== void 0 ? q : k;
                    var r;
                    h.style.top = (r = x.top) !== null && r !== void 0 ? r : l;
                    var t;
                    h.style.left = p
                      ? "unset"
                      : (t = x.left) !== null && t !== void 0
                      ? t
                      : m;
                    var v;
                    h.style.right = p
                      ? (v = x.right) !== null && v !== void 0
                        ? v
                        : n
                      : "unset";
                    var u;
                    h.style.transform =
                      (u = x.transform) !== null && u !== void 0 ? u : "unset";
                  }
                }
              });
              __c.Cc(this, [b, d]);
            }
            get bounds() {
              const b = this.props.sheet,
                c = this.props.range;
              if (b.layout.cols.empty || b.layout.rows.empty)
                return { Mb: void 0, Gc: void 0, Qb: void 0, Sc: void 0 };
              var d, e, f, g;
              return {
                Mb:
                  (d = c === null || c === void 0 ? void 0 : c.Mb) !== null &&
                  d !== void 0
                    ? d
                    : b.layout.cols.first(),
                Gc:
                  (e = c === null || c === void 0 ? void 0 : c.Gc) !== null &&
                  e !== void 0
                    ? e
                    : b.layout.cols.last(),
                Qb:
                  (f = c === null || c === void 0 ? void 0 : c.Qb) !== null &&
                  f !== void 0
                    ? f
                    : b.layout.rows.first(),
                Sc:
                  (g = c === null || c === void 0 ? void 0 : c.Sc) !== null &&
                  g !== void 0
                    ? g
                    : b.layout.rows.last(),
              };
            }
            constructor(...b) {
              super(...b);
              this.Iva = (C5.A(this), mx());
              this.IUa = mx();
              this.JUa = mx();
              this.XR = new q3b();
              this.Jvb = j5(
                () =>
                  [...this.Zg.get().keys()].sort((c, d) =>
                    this.props.sheet.layout.rows.Ie(c, d)
                  ),
                { equals: __c.Kr() }
              );
              this.Hvb = j5(
                () =>
                  [...this.D6.get().keys()].sort((c, d) =>
                    this.props.sheet.layout.cols.Ie(c, d)
                  ),
                { equals: __c.Kr() }
              );
              this.Hja = c5(() =>
                X4(this.props.Y4a, {
                  Zg: this.Jvb,
                  Ivb: this.Hvb,
                  deb: this.XR.meb,
                  range: this.props.range,
                })
              );
              this.Zg = j5(
                () => {
                  var c;
                  const d = this.props.sheet;
                  var e = this.props.Y,
                    f =
                      (c = this.vya) === null || c === void 0
                        ? void 0
                        : c.get();
                  if (f && (f.height <= 0 || f.width <= 0)) return new Map();
                  c = this.bounds;
                  e = e.get();
                  var g = 50 * e;
                  const h = f ? f.la.y - g : c.Qb ? d.ra(c.Qb) : 0;
                  f = f ? f.br.y + g : c.Sc ? d.ra(c.Sc) + c.Sc.height : 0;
                  g = new Map();
                  for (
                    let k = c.Qb;
                    k != null && c.Sc != null && d.layout.rows.Ie(k, c.Sc) <= 0;
                    k = d.layout.rows.next(k)
                  ) {
                    const l = d.ra(k);
                    if (!(l + k.height < h)) {
                      if (l > f) break;
                      g.set(k, l * e);
                    }
                  }
                  return g;
                },
                { equals: u5.shallow }
              );
              this.D6 = j5(
                () => {
                  var c;
                  const d = this.props.sheet;
                  var e = this.props.Y,
                    f =
                      (c = this.vya) === null || c === void 0
                        ? void 0
                        : c.get();
                  if (f && (f.height <= 0 || f.width <= 0)) return new Map();
                  c = this.bounds;
                  e = e.get();
                  var g = 50 * e;
                  const h = f ? f.la.x - g : c.Mb ? d.qa(c.Mb) : 0;
                  f = f ? f.br.x + g : c.Gc ? d.qa(c.Gc) + c.Gc.width : 0;
                  g = new Map();
                  for (
                    let k = c.Mb;
                    k != null && c.Gc != null && d.layout.cols.Ie(k, c.Gc) <= 0;
                    k = d.layout.cols.next(k)
                  ) {
                    const l = d.qa(k);
                    if (!(l + k.width < h)) {
                      if (l > f) break;
                      g.set(k, l * e);
                    }
                  }
                  return g;
                },
                { equals: u5.shallow }
              );
            }
          }
          ({
            c: [C5, k3b],
          } = x5(a, [], [Sc], l3b));
        })(),
        h3b)();
        var q3b = class {
            constructor() {
              this.cells = new g3b();
              this.Qwa = (a, b, c) => {
                let d = this.cells.get([a, b]);
                d == null &&
                  ((d = v5.box(void 0, { deep: !1 })),
                  this.cells.set([a, b], d));
                d.set(c);
                return () => {
                  const e = this.cells.get([a, b]);
                  e === d && (e.set(void 0), this.cells.delete([a, b]));
                };
              };
              this.meb = (a, b) => {
                var c;
                let d = this.cells.get([a, b]);
                d == null &&
                  ((d = v5.box(void 0, { deep: !1 })),
                  this.cells.set([a, b], d));
                return (c = d.get()) === null || c === void 0 ? void 0 : c.UIa;
              };
            }
          },
          D5;
        new ((i3b = class extends w5 {
          constructor() {
            super(D5);
            m3b();
          }
        }),
        (() => {
          class a extends (n3b = o5) {
            static A(b) {
              P(b, { CK: v5.shallow, lq: j5, EGa: t5, G9: t5.bound });
            }
            get lq() {
              var b;
              const c =
                (b = this.props.Po) === null || b === void 0 ? void 0 : b.get();
              if (c != null && c.length !== 0) return new __c.jE(c);
            }
            render() {
              var b;
              return Z4("div", {
                ref: v2b(
                  this.Fd,
                  (b = this.lq) === null || b === void 0 ? void 0 : b.Yl
                ),
                children: [
                  X4("div", { ref: this.vma, className: "_5YlOqQ" }),
                  X4("div", { ref: this.xma, className: "_XCmKw" }),
                  this.CK.map((c) => c.Aob),
                ],
              });
            }
            componentDidMount() {
              const b = k5(
                  () => [
                    this.props.sheet,
                    this.props.D6.get(),
                    this.props.Zg.get(),
                  ],
                  ([e, f, g], h) => {
                    [h] = h || [];
                    e !== h && this.w8a();
                    this.EGa(f, g);
                  },
                  { fireImmediately: !0 }
                ),
                c = i5(() => {
                  var e = this.props,
                    f = e.Y;
                  e = e.sheet;
                  const g = this.Fd.current;
                  g &&
                    ((f = f ? f.get() : 1),
                    (g.style.width = `${e.width * f}px`),
                    (g.style.height = `${e.height * f}px`));
                }),
                d = this.CK.map((e) => r2b(e));
              __c.Cc(this, [c, b, ...d]);
            }
            w8a() {
              const b = D(this.vma.current),
                c = D(this.xma.current);
              b.innerHTML = "";
              c.innerHTML = "";
              this.SCa.length = 0;
              this.CK.length = 0;
            }
            EGa(b, c) {
              const d = D(this.vma.current),
                e = D(this.xma.current),
                f = [],
                g = new Map();
              for (const h of this.SCa)
                c.has(h.na) ? g.set(h.na, h) : f.push(h);
              for (const [h, k] of c)
                (c = g.get(h) || f.pop()),
                  c ||
                    ((c = new r3b(this.G9, h)),
                    d.appendChild(c.L8),
                    e.appendChild(c.N8),
                    this.SCa.push(c)),
                  c.update(k, h, b);
              for (const h of f) h.hide();
            }
            G9(b, c) {
              const d = this.props.lZ,
                e = this.props.sheet,
                f = this.props.container,
                g = this.props.XR;
              b = new s3b(
                this.props.hN,
                this.props.zC,
                this.props.Bh,
                d(b, c),
                e,
                b,
                c,
                f,
                g.Qwa,
                this.Saa,
                this.Raa
              );
              __c.Cc(this, r2b(b));
              this.CK.push(b);
              return b;
            }
            constructor(...b) {
              super(...b);
              this.Fd = (D5.A(this), mx());
              this.vma = mx();
              this.xma = mx();
              this.SCa = [];
              this.CK = [];
              this.Saa = r5((c) => {
                const d = this.props.Zg.get();
                return c === "first"
                  ? d.keys().next().value
                  : [...d.keys()].pop();
              });
              this.Raa = r5((c) => {
                const d = this.props.D6.get();
                return c === "first"
                  ? d.keys().next().value
                  : [...d.keys()].pop();
              });
            }
          }
          ({
            c: [D5, m3b],
          } = x5(a, [], [Sc], n3b));
        })(),
        i3b)();
        var r3b = class {
            static A(a) {
              P(a, { update: t5 });
            }
            update(a, b, c) {
              [this.L8, this.N8].forEach((d) => {
                d.style.transform = `translateY(${a}px)`;
                d.classList.add("FPpqvg");
              });
              this.na = b;
              for (const [d] of c)
                (c = this.CK.get(d)),
                  c ||
                    ((c = this.G9(d, b)),
                    this.CK.set(d, c),
                    this.L8.appendChild(c.K8),
                    this.N8.appendChild(c.pL)),
                  c.update(b);
            }
            hide() {
              [this.L8, this.N8].forEach((a) => {
                a.style.transform = "translate(-1000px, -1000px) scale(0)";
              });
            }
            constructor(a, b) {
              this.G9 = a;
              this.na = b;
              this.L8 = (r3b.A(this), document.createElement("div"));
              this.N8 = document.createElement("div");
              this.CK = new Map();
            }
          },
          s3b = class {
            static A(a) {
              P(a, {
                x9: v5.ref,
                na: v5.ref,
                Vqa: j5,
                update: t5,
                Us: j5,
                attrs: j5.struct,
                xsa: j5,
                jv: j5,
                renderer: j5,
                UIa: j5.struct,
              });
            }
            get Vqa() {
              if (!q2b) return !1;
              const a = this.Us;
              return a == null ||
                a.content.ref == null ||
                a.content.ref.type !== "formula"
                ? !1
                : this.hN(this.sheet, a.content.ref.value);
            }
            update(a) {
              a !== this.na &&
                ((this.na = a),
                (this.lz.na = a),
                this.soa && this.soa(),
                (this.soa = this.Qwa(this.na, this.col, this)));
            }
            get Aob() {
              return this.x9;
            }
            get Us() {
              const a = this.sheet.layout.cells.get(this.na, this.col);
              return a ? a.ref : void 0;
            }
            get attrs() {
              const a = this.lz.attrs;
              return {
                Ng: a === null || a === void 0 ? void 0 : a.Ng,
                textAlign: a === null || a === void 0 ? void 0 : a.textAlign,
                direction: a === null || a === void 0 ? void 0 : a.direction,
                link: a === null || a === void 0 ? void 0 : a.link,
              };
            }
            get xsa() {
              var a = this.lz.span;
              if (!a) return !1;
              if (a.Qb === a.Sc && a.Mb === a.Gc) return !0;
              var b = this.Saa("first");
              const c = this.Saa("last"),
                d = this.Raa("first"),
                e = this.Raa("last");
              if (!(b && c && d && e)) return !1;
              b =
                this.sheet.layout.rows.Ie(a.Qb, b) >= 0 &&
                this.sheet.layout.rows.Ie(a.Qb, c) <= 0
                  ? a.Qb
                  : b;
              a =
                this.sheet.layout.cols.Ie(a.Mb, d) >= 0 &&
                this.sheet.layout.cols.Ie(a.Mb, e) <= 0
                  ? a.Mb
                  : d;
              return b === this.na && a === this.col;
            }
            get jv() {
              const a = this.sheet,
                b = this.na,
                c = this.col;
              if (!this.container)
                return { type: void 0, sheet: a, na: b, column: c };
              switch (this.container.type) {
                case "fixed-page":
                  return this.container.Pnb.Hd(c, b);
                case "sheet-item":
                  return this.container.uya.Hd(c, b);
                case "sheet-element":
                  return this.container.Vrb.Hd(c, b);
                default:
                  throw new E(this.container);
              }
            }
            get renderer() {
              const a = this.Us;
              if (a && this.xsa && (a.content.ref || a.Aa.ref))
                return this.zC({
                  context: { container: this.jv, attrs: this.attrs },
                  ep: this.yua,
                  Bh: this.Bh,
                });
            }
            get UIa() {
              this.VIa.reportObserved();
              var a = D2b(() => this.renderer);
              if (
                a &&
                ((a = a.type === "react" ? this.G3 : this.pD),
                a.childNodes.length !== 0 &&
                  ((a = a.childNodes[0]), a instanceof HTMLElement))
              )
                return { width: a.clientWidth, height: a.clientHeight };
            }
            constructor(a, b, c, d, e, f, g, h, k, l, m) {
              var n, p, q, r, t, v;
              this.hN = a;
              this.zC = b;
              this.lz = d;
              this.sheet = e;
              this.col = f;
              this.container = h;
              this.Qwa = k;
              this.Saa = l;
              this.Raa = m;
              this.K8 = (s3b.A(this), document.createElement("div"));
              this.pL = document.createElement("div");
              this.kD = document.createElement("div");
              this.pD = document.createElement("div");
              this.G3 = document.createElement("div");
              this.VIa = C2b("content size atom");
              this.yua = t5(() => this.VIa.reportChanged());
              this.na = g;
              this.K8.className = "_2JFriw";
              this.pL.className = "imy9ug";
              this.kD.className = $4("pDMp7w", {
                _0yZ6Qg:
                  ((p = this.Us) === null || p === void 0
                    ? void 0
                    : (n = p.content.ref) === null || n === void 0
                    ? void 0
                    : n.type) !== "text3",
                qhF5uA:
                  ((r = this.Us) === null || r === void 0
                    ? void 0
                    : (q = r.content.ref) === null || q === void 0
                    ? void 0
                    : q.type) !== "text3" &&
                  ((v = this.Us) === null || v === void 0
                    ? void 0
                    : (t = v.content.ref) === null || t === void 0
                    ? void 0
                    : t.type) !== "text2",
                qxD1GA: this.Vqa,
              });
              this.pD.className = "_30B9pw";
              this.kD.appendChild(this.pD);
              this.pL.appendChild(this.kD);
              this.G3.className = "G7zH2w";
              this.soa = k(this.na, this.col, this);
              this.Bh = (u) => X4(c, { ...u, ep: this.yua });
            }
          };
        var t3b, u3b, v3b, l5;
        new ((t3b = class extends w5 {
          constructor() {
            super(l5);
            u3b();
          }
        }),
        (() => {
          class a extends (v3b = o5) {
            static A(b) {
              P(b, { Baa: j5 });
            }
            render() {
              const {
                hN: b,
                sheet: c,
                container: d,
                Po: e,
                Y_: f,
                zC: g,
                le: h,
                Bh: k,
                viewport: l,
                rG: m,
                $1a: n = !1,
              } = this.props;
              if (!c.layout.cols.empty && !c.layout.rows.empty)
                return X4("div", {
                  className: $4(
                    "SNkrHw",
                    c.direction === "ltr" ? "TA4X7w" : "WvuqMw",
                    { RaA0Nw: n }
                  ),
                  ...h,
                  children: X4(o3b, {
                    hN: b,
                    zC: g,
                    Bh: k,
                    Y4a: this.Hja,
                    lZ: this.lZ,
                    sheet: c,
                    container: d,
                    Po: e,
                    Y_: f,
                    Y: this.Y,
                    viewport: l,
                    rG: m,
                    Baa: this.Baa,
                  }),
                });
            }
            get Baa() {
              var b = this.props.sheet;
              const c = {},
                d = b.view.freeze.vV
                  ? b.layout.$d.get(b.view.freeze.vV)
                  : void 0,
                e = b.view.freeze.VG
                  ? b.layout.Nd.get(b.view.freeze.VG)
                  : void 0,
                f = b.layout.rows.first(),
                g = b.layout.rows.last(),
                h = b.layout.cols.first(),
                k = b.layout.cols.last();
              if (f != null && g != null && h != null && k != null) {
                var l = e ? b.layout.cols.next(e) : h;
                b = d ? b.layout.rows.next(d) : f;
                d && e && (c.aHa = { range: { Mb: h, Qb: f, Gc: e, Sc: d } });
                d && l && (c.j2a = { range: { Mb: l, Qb: f, Gc: k, Sc: d } });
                e && b && (c.DNa = { range: { Mb: h, Qb: b, Gc: e, Sc: g } });
                b && l && (c.X0a = { range: { Mb: l, Qb: b, Gc: k, Sc: g } });
                return c;
              }
            }
            get Y() {
              return this.props.Y ? this.props.Y : j5(() => 1);
            }
            constructor(...b) {
              super(...b);
              this.Hja =
                (l5.A(this),
                c5((c) => {
                  const {
                    sheet: d,
                    Wra: e,
                    Y: f,
                    p8: g = "hidden",
                  } = this.props;
                  return X4(z5, {
                    sheet: d,
                    range: c.range,
                    Y: f,
                    children: X4(e3b, {
                      ...c,
                      sheet: d,
                      Y: this.Y,
                      Wra: e,
                      overflow: g,
                    }),
                  });
                }));
              this.lZ = (c, d) =>
                new __c.vLa(
                  this.props.aC,
                  this.props.ez,
                  this.props.sheet,
                  c,
                  d,
                  this.Y,
                  this.Dt,
                  this.Ht
                );
              this.Dt = (c, d) => {
                var e, f;
                return (e = (f = this.props).Dt) === null || e === void 0
                  ? void 0
                  : e.call(f, this.props.sheet, c, d);
              };
              this.Ht = (c, d) => {
                var e, f;
                return (e = (f = this.props).Ht) === null || e === void 0
                  ? void 0
                  : e.call(f, this.props.sheet, c, d);
              };
            }
          }
          ({
            c: [l5, u3b],
          } = x5(a, [], [Sc], v3b));
        })(),
        t3b)();
        __c.CLa = {
          Ugb: function (a) {
            const b = a.zn,
              c = a.Gd,
              d = a.fd,
              e = a.Wl,
              f = a.aC,
              g = a.ez,
              h = a.kX;
            Y1b({ dz: a.dz, Cf: a.Cf, xtb: a.OO, Ua: a.Ua });
            const k = t2b({ zC: h, aC: f, ez: g, An: void 0 });
            b.bka = n2b({ Jp: k });
            c.Ija = d2b({ Jp: k });
            ({ NEa: a } = k2b({ Jp: k, ke: e(), YYa: new Y2b() }));
            d.Qp.aka = a;
            const { f3a: l, g3a: m, e3a: n } = c2b();
            return {
              OEa: c5((p) =>
                X4(E2b, {
                  ...p,
                  container: void 0,
                  Jp: k,
                  a5a: l,
                  b5a: m,
                  Z4a: n,
                  Bh: F2b,
                })
              ),
            };
          },
        };
      }.call(self, self._7ccc7343da2ae983607b3819c7bc1f93));
    },
  },
]);
//# sourceMappingURL=sourcemaps/a069edfd9df1696b.js.map
