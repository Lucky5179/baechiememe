(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
  [60060],
  {
    /***/ 82986: function (_, __, __webpack_require__) {
      __webpack_require__.n_x = __webpack_require__.n;
      const __web_req__ = __webpack_require__;
      __web_req__(813110);
      __web_req__(914242);
      self._7ccc7343da2ae983607b3819c7bc1f93 =
        self._7ccc7343da2ae983607b3819c7bc1f93 || {};
      (function (__c) {
        var CM = __c.CM;
        var X = __c.X;
        var L = __c.L;
        var Ha = __c.Ha;
        var m4b, p4b, s4b, t4b, v4b, u4b, x4b, A4b, z4b, D4b, T5;
        __c.O5 = function (a) {
          return { type: 1, Component: a };
        };
        __c.P5 = function () {
          return (a) => a;
        };
        __c.Q5 = function (a, b, c) {
          return { key: a, tVa: b, type: "string", AJ: c, tSa: 0 };
        };
        __c.R5 = function (a) {
          return () => ({ ...k4b, ...a });
        };
        m4b = function ({ element: a }) {
          var b = l4b.get(a.Kla);
          if (!b) throw Error(`Blueprint ${a.Kla} not found`);
          b = b.variants.find((c) => c.TP === a.TP);
          if (!b)
            throw Error(`Variant ${a.TP} not found for blueprint ${a.Kla}`);
          return { Na: b.Na };
        };
        p4b = function (a, b) {
          var c = n4b,
            d = o4b;
          a.handle("SET_CONFIG", async (e) => {
            if (e === void 0)
              throw new S5({
                code: "internal_error",
                message: "SET_CONFIG: request cannot be undefined.",
              });
            e = c.Zc(e);
            e = await b(e);
            if (d) return d.xd(e);
          });
        };
        s4b = async function (a, b) {
          a = await a.yIa.request("RENDER_ELEMENT", q4b.xd(b));
          if (!a.ok)
            throw Error(
              `Encountered an error while sending ${"RENDER_ELEMENT"} request: ${
                a.error
              }`
            );
          if (a.value == null)
            throw Error("RENDER_ELEMENT: Result cannot be empty");
          return r4b.Zc(a.value);
        };
        t4b = function (a) {
          p4b(a.yIa, (b) => a.handler.wfb(b));
        };
        v4b = async function (a, b) {
          const c = b.requestId,
            d = b.path;
          b = b.Rl;
          const e = a.requestHandler.get(d);
          if (e) {
            a.t2.yY.send({ type: "ack", requestId: c });
            var f = setInterval(
              () => a.t2.yY.send({ type: "ack", requestId: c }),
              9e3
            );
            try {
              var g = await e(b);
              clearInterval(f);
              a.t2.yY.send({ type: "response", requestId: c, payload: g });
            } catch (k) {
              clearInterval(f);
              g = "internal_error";
              b =
                "Something went wrong on our end, if this issue persists please contact us.";
              if (k instanceof S5) {
                var h = k;
                k.code === "internal_error"
                  ? a.H.Db(k, {
                      qe: "Internal error in comms handler",
                      tags: new Map([
                        ["type", "request"],
                        ["path", d],
                      ]),
                    })
                  : ((g = k.code), (b = k.gpb));
              } else
                a.Tpb
                  ? a.H.Db(k, {
                      qe: "Unexpected error type thrown from comms handler",
                      tags: new Map([
                        ["type", "request"],
                        ["path", d],
                      ]),
                    })
                  : a.kab.error(k);
              g = u4b(a.t2, c, g, b);
              g.ok ||
                a.H.PL(g.error, {
                  qe: "unable to send error response",
                  tags: new Map([
                    ["type", "request"],
                    ["path", d],
                  ]),
                });
            }
            if (h != null)
              for (const k of a.gcb)
                try {
                  k(h);
                } catch (l) {
                  a.H.gQ(l, { qe: "Error executing errorObserver" });
                }
          } else
            (h = u4b(
              a.t2,
              c,
              "internal_error",
              `No request handler configured for path: "${d}".`
            )),
              h.ok ||
                a.H.PL(h.error, {
                  qe: "unable to send error response",
                  tags: new Map([
                    ["type", "request"],
                    ["path", d],
                  ]),
                });
        };
        u4b = function (a, b, c, d) {
          return a.yY.send({
            type: "error",
            requestId: b,
            code: c,
            message: d,
          });
        };
        x4b = function ({ src: a, srcdoc: b, sandbox: c }) {
          if (b.length !== 0 || !c.contains("allow-same-origin")) return w4b;
          a = new URL(a).origin;
          return a === "null" ? w4b : { ECa: a, PXa: a };
        };
        A4b = async function (
          a,
          b,
          c,
          { addEventListener: d, removeEventListener: e } = window
        ) {
          const f = new y4b(6e4),
            g = x4b(c),
            h = c.contentWindow;
          if (!h)
            throw new S5({
              code: "internal_error",
              message: "contentWindow is missing from iFrame",
            });
          c = ({ data: k, source: l, origin: m }) => {
            var n;
            (k === null || k === void 0
              ? 0
              : (n = k.source) === null || n === void 0
              ? 0
              : n.startsWith("react-")) ||
              (m !== g.ECa
                ? z4b(m) ||
                  b.info("received message event from an unexpected origin", {
                    extra: new Map([
                      ["expected", g.ECa],
                      ["actual", m],
                    ]),
                  })
                : l !== h
                ? l !== window &&
                  b.info("source and content window do not match", {
                    extra: new Map([
                      [
                        "data.source",
                        k === null || k === void 0 ? void 0 : k.source,
                      ],
                    ]),
                  })
                : ((l = k
                    ? k.source
                      ? k.source !== "iframe"
                        ? Ha("invalid source")
                        : (0, __c.Ga)()
                      : Ha("'source' is missing in MessageEvent data object")
                    : Ha("missing 'data' field in MessageEvent")),
                  l.ok
                    ? (h.postMessage({ source: "parent" }, g.PXa, [a]),
                      f.resolve(void 0))
                    : b.HK(l.error, {
                        extra: new Map([
                          [
                            "data.source",
                            k === null || k === void 0 ? void 0 : k.source,
                          ],
                        ]),
                      })));
          };
          d("message", c);
          try {
            await f.promise();
          } finally {
            e("message", c);
          }
        };
        z4b = function (a) {
          return B4b.some((b) => a.endsWith(b));
        };
        D4b = function ({ H: a }) {
          const b = new C4b(a);
          return __c.P5()(() => ({
            element: __c.O5(({ data: { element: c }, sC: { f4a: d } }) =>
              T5(d, { url: c.url, wB: (e) => b.wB(e, c), AU: (e) => b.AU(e) })
            ),
          }));
        };
        __c.rd.prototype.PL = __c.fa(3, function (a, b) {
          this.console.error(...__c.qd(this, "critical", a, b));
        });
        __c.dM.prototype.PL = __c.fa(2, function (a, b) {
          this.bt.PL(a, b);
          __c.bM(this, a, "critical", b);
        });
        __c.U5 = {};
        T5 = __webpack_require__(443763).jsx;
        var E4b = __webpack_require__(446474).Pi;
        var F4b = __webpack_require__(875604).memo;
        var V5 = __webpack_require__(519427),
          G4b = V5.ObservableMap,
          H4b = V5.reaction,
          I4b = V5.runInAction;
        var k4b = Object.freeze({
          document: Object.freeze({}),
          element: Object.freeze({}),
        });
        var J4b = __c.R5({ element: __c.U5 }),
          K4b = {
            lH: __c.P5()(() => ({
              element: __c.O5(E4b(() => T5("div", { children: "3D Widget" }))),
            })),
            mH: J4b,
          };
        var l4b = new G4b(),
          L4b = __c.R5({
            element: {
              Kla: __c.Q5("blueprintId", 0),
              TP: __c.Q5("variantId", 0),
            },
          });
        var M4b = {
          lH: __c.P5()(() => ({ element: { type: 0, vD: m4b } })),
          mH: L4b,
        };
        var S5 = class extends Error {
          constructor(a) {
            a.code = a.code;
            const b = a.message.endsWith(".") ? "" : ".";
            super(`[${a.code}]:  ${a.message}${b}`.trim());
            this.code = a.code;
            this.name = "CanvaError";
            this.gpb = a.message;
            Object.setPrototypeOf(this, S5.prototype);
          }
        };
        var q4b = L(() => ({ config: __c.Y(1) }));
        var N4b = L(() => ({ color: X(1) }));
        var O4b = L(() => ({
          type: __c.F("A?", 1, "RECOLORABLE"),
          id: X(1),
          value: __c.Sa(2, N4b),
        }));
        var P4b = L(() => ({ borderRadius: CM(1), borderWidth: CM(2) }));
        var Q4b = L(() => ({
          type: __c.F("A?", 2, "BORDERABLE"),
          id: X(1),
          value: __c.Sa(2, P4b),
        }));
        var r4b = L(() => ({
          config: X(1),
          width: CM(2),
          height: CM(3),
          jV: __c.Ua(4, O4b),
          x7a: __c.Ua(5, Q4b),
        }));
        var n4b = L(() => ({
          config: X(1),
          width: CM(2),
          height: CM(3),
          jV: __c.Ua(4, O4b),
          x7a: __c.Ua(5, Q4b),
        }));
        var o4b = L(() => ({}));
        var R4b = class {
          constructor(a, b) {
            this.yIa = a;
            this.handler = b;
            t4b(this);
          }
        };
        var S4b = class {
          constructor(a, b, c) {
            this.handler = a;
            this.port = b;
            this.H = c;
            this.send = (d) => {
              try {
                return this.port.postMessage(d), (0, __c.Ga)();
              } catch (e) {
                return this.H.Db(e), Ha(e);
              }
            };
            this.Emb = (d) => {
              this.H.Db(d);
            };
            this.onMessage = ({ data: d }) => {
              if (d)
                try {
                  this.handler.lpb(d);
                } catch (e) {
                  this.H.Db(e);
                }
              else
                this.H.error(
                  new S5({
                    code: "internal_error",
                    message: "missing data in 'MessageEvent'",
                  })
                );
            };
            this.port.onmessage = this.onMessage;
            this.port.onmessageerror = this.Emb;
          }
        };
        var T4b = class extends Error {
            constructor() {
              super("[internal_error] Comms promise timed out.");
            }
          },
          y4b = class {
            reset(a) {
              a && (this.timeoutMs = a);
              this.setTimeout();
            }
            resolve(a) {
              clearTimeout(this.Ld);
              this.bqb(a);
            }
            reject(a) {
              clearTimeout(this.Ld);
              this.tWa(a);
            }
            promise() {
              return this.p;
            }
            setTimeout() {
              clearTimeout(this.Ld);
              this.Ld = setTimeout(() => {
                this.tWa(new T4b());
              }, this.timeoutMs);
            }
            constructor(a) {
              this.timeoutMs = a;
              this.p = new Promise((b, c) => {
                this.bqb = b;
                this.tWa = c;
              });
              this.setTimeout();
            }
          };
        var U4b = class {
          request(a, b) {
            const c = this.XUa,
              d = new y4b(5e3),
              e = this.Vpb(),
              f = (async function () {
                c.set(e, d);
                try {
                  const g = await d.promise();
                  return (0, __c.Ga)(g);
                } catch (g) {
                  return g instanceof T4b
                    ? Ha(
                        new S5({
                          code: "internal_error",
                          message: `Comms promise timed out (${a}).`,
                        })
                      )
                    : Ha(g);
                } finally {
                  c.delete(e);
                }
              })();
            b = this.send(e, a, b);
            b.ok ||
              (this.H.Db(b.error, {
                qe: "unable to send request",
                tags: new Map([
                  ["type", "request"],
                  ["path", a],
                ]),
              }),
              d.reject(b.error));
            return f;
          }
          constructor(a, b) {
            this.send = a;
            this.H = b;
            this.Vpb = __c.as;
            this.XUa = new Map();
          }
        };
        var V4b = class {
          handle(a, b) {
            if (this.requestHandler.has(a))
              throw new S5({
                code: "internal_error",
                message: `Handler for '${a}' is already defined.`,
              });
            this.requestHandler.set(a, b);
          }
          constructor(a, b) {
            var c = console;
            this.t2 = a;
            this.H = b;
            this.Tpb = !0;
            this.kab = c;
            this.requestHandler = new Map();
            this.gcb = new Set();
          }
        };
        var X4b = class {
            constructor(a, b) {
              this.request = (c, d) => this.client.request(c, d);
              this.handle = (c, d) => this.requestHandler.handle(c, d);
              a = new W4b(
                (c) => {
                  switch (c.type) {
                    case "ack":
                    case "error":
                    case "response":
                      var d = this.client;
                      const e = c.requestId,
                        f = c.type,
                        g = d.XUa.get(e);
                      if (g)
                        switch (f) {
                          case "response":
                            g.resolve(c.Rl);
                            break;
                          case "ack":
                            g.reset(2e4);
                            break;
                          case "error":
                            g.reject(
                              new S5({ code: c.code, message: c.message })
                            );
                            break;
                          default:
                            throw new __c.E(c);
                        }
                      else
                        f !== "ack" &&
                          d.H.error(
                            "request has already been handled and resolved or was not sent from this client",
                            {
                              tags: new Map([
                                ["type", f],
                                ["requestId", `${e}`],
                              ]),
                            }
                          );
                      break;
                    case "request":
                      v4b(this.requestHandler, c);
                      break;
                    default:
                      throw new __c.E(c);
                  }
                },
                a,
                b.sg("bus")
              );
              this.client = new U4b(a.bz, b.sg("client"));
              this.requestHandler = new V4b(a, b.sg("requestHandler"));
            }
          },
          W4b = class {
            constructor(a, b, c) {
              this.Zaa = a;
              this.bz = (d, e, f) =>
                this.yY.send({
                  type: "request",
                  requestId: d,
                  path: e,
                  payload: f,
                });
              this.Qmb = (d) => {
                switch (d.type) {
                  case "ack":
                    this.Zaa({ type: "ack", requestId: d.requestId });
                    break;
                  case "error":
                    this.Zaa({
                      type: "error",
                      requestId: d.requestId,
                      code: d.code,
                      message: d.message,
                    });
                    break;
                  case "response":
                    this.Zaa({
                      type: "response",
                      requestId: d.requestId,
                      Rl: d.payload,
                    });
                    break;
                  case "request":
                    this.Zaa({
                      type: "request",
                      requestId: d.requestId,
                      path: d.path,
                      Rl: d.payload,
                    });
                    break;
                  default:
                    throw new __c.E(d);
                }
              };
              this.yY = new S4b({ lpb: this.Qmb }, b, c);
            }
          };
        var w4b = { ECa: "null", PXa: "*" };
        var B4b =
          "canva-dev.com canva-dev.cn canva-staging.com canva-staging.cn canva.com canva.cn canva-apps.com canva-apps.cn canva-apps-dev.com canva-apps-dev.cn canva-apps-staging.com canva-apps-staging.cn".split(
            " "
          );
        var C4b = class {
          async wB(a, b) {
            const { port1: c, port2: d } = new MessageChannel();
            var e = new X4b(c, this.H);
            await A4b(d, this.H, a, window);
            const f = new R4b(e, {
              wfb: (g) => {
                I4b(() => (b.config = g.config));
                return new o4b();
              },
            });
            e = H4b(
              () => b.config,
              async (g) => {
                const h = await s4b(f, { config: g });
                h.config && h.config !== g && I4b(() => (b.config = h.config));
              },
              { fireImmediately: !0 }
            );
            this.gh.set(a, e);
          }
          AU(a) {
            var b;
            (b = this.gh.get(a)) === null || b === void 0 || b();
            this.gh.delete(a);
          }
          constructor(a) {
            this.H = a;
            this.gh = new Map();
          }
        };
        var Y4b = __c.R5({
          element: { url: __c.Q5("url", 0), config: __c.Q5("config", 1) },
        });
        var Z4b = __c.R5({ element: __c.U5 });
        var $4b = F4b(function () {
          return T5("div", {
            style: {
              width: "100%",
              height: "100%",
              display: "flex",
              backgroundColor: "#fFfFfF",
              justifyContent: "center",
              alignItems: "center",
            },
            children: "FORM V2 Widget",
          });
        });
        var a5b = {
          lH: (function (a) {
            return __c.P5()(() => ({ element: __c.O5(a) }));
          })(E4b(() => T5($4b, { state: {} }))),
          mH: Z4b,
        };
        __c.ZQa = {
          Wgb: function (a) {
            function b(e, f) {
              const g = c.Tgb(e, f.mH());
              f = d.Sgb(e, g, f.lH());
              return { id: e, lw: g, JLb: f };
            }
            const c = a.jDa,
              d = a.I6;
            return {
              Ozb: b("w:wnJF5T87v", M4b),
              CBb: a.rbb
                ? Promise.all([
                    __webpack_require__.me(697956).then(() => __c.b5b),
                    __webpack_require__.me(411625).then(() => __c.c5b),
                    __webpack_require__.me(305660).then(() => __c.d5b),
                    __webpack_require__.me(696820).then(() => __c.e5b),
                  ]).then(([e, f, g, h]) => ({
                    yBb: b("w:cm9wgGptP", e),
                    zBb: b("w:yLMS4dWnl", f),
                    ABb: b("w:2flp30CGQ", g),
                    BBb: b("w:1Nv6K6Dtv", h),
                  }))
                : void 0,
              rAb: b("w:JR4G8hDDg", { mH: Y4b, lH: D4b({ H: a.H }) }),
              form: b("w:6JG6DxspF", a5b),
              LNb: a.Pbb ? b("w:2pbXJMtm1", K4b) : void 0,
            };
          },
        };
      }.call(self, self._7ccc7343da2ae983607b3819c7bc1f93));
    },
  },
]);
//# sourceMappingURL=sourcemaps/fbc4bbb857be4437.js.map
