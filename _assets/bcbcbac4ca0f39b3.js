(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
  [26489],
  {
    /***/ 59534: function (_, __, __webpack_require__) {
      __webpack_require__.n_x = __webpack_require__.n;
      const __web_req__ = __webpack_require__;
      __web_req__(813110);
      self._7ccc7343da2ae983607b3819c7bc1f93 =
        self._7ccc7343da2ae983607b3819c7bc1f93 || {};
      (function (__c) {
        var tLb = function (a) {
            var b = ["rgb(255, 255, 255)", "rgb(13, 18, 22)"];
            try {
              const c = __c.ct(a),
                d = c instanceof __c.dt ? c.Ep() : c;
              return __c.Sr(b, (e) => {
                e = __c.ct(e);
                e = e instanceof __c.dt ? __c.LH(e, d) : e;
                return Math.abs(__c.rt(e, d));
              });
            } catch (c) {
              if (
                c instanceof Error &&
                c.message === `unrecognized color: ${b[0]}`
              )
                return b[0];
              throw c;
            }
          },
          uLb = function (a) {
            return a
              .trim()
              .split(/\s+/, 2)
              .map((b) => __c.ys(b)[0])
              .join("");
          },
          xLb = function (a = "") {
            a = vLb(a);
            a = Math.floor(a() * wLb.length);
            return wLb[a];
          },
          yLb = __webpack_require__(875604),
          zLb = yLb.memo,
          ALb = yLb.useId;
        var vLb = __webpack_require__(503216);
        var BLb = __webpack_require__(443763),
          EZ = BLb.jsx,
          CLb = BLb.jsxs;
        var DLb = __webpack_require__,
          ELb = DLb(993864),
          FZ = DLb.n_x(ELb)();
        __c.FLb = {
          xxsmall: 2,
          xsmall: 3,
          small: 4,
          medium: 5,
          large: 6,
          xlarge: 8,
          xxlarge: 10,
          xxxlarge: 20,
        };
        var wLb = [
          "rgb(0, 126, 182)",
          "rgb(248, 72, 86)",
          "rgb(251, 190, 40)",
          "rgb(68, 133, 25)",
          "rgb(125, 42, 232)",
        ].map((a) => {
          try {
            return __c.et(__c.Ys(a));
          } catch (b) {
            return "#8e8e8e";
          }
        });
        var GLb = zLb((a) => {
          const {
            name: b,
            borderColor: c,
            backgroundColor: d,
            pR: e,
            role: f,
            ariaLabel: g,
            className: h,
            style: k,
            shape: l = "circle",
            ...m
          } = a;
          if (d) {
            a = __c.ct(d);
            var n = a instanceof __c.dt ? __c.ft(a) : __c.et(a);
          } else n = e ? xLb(e) : "#8e8e8e";
          var p = ALb();
          switch (l) {
            case "circle":
              a = EZ("defs", {
                children: EZ("clipPath", {
                  id: p,
                  children: EZ("circle", {
                    id: `${p}-path`,
                    cx: "50%",
                    cy: "50%",
                    r: "50%",
                  }),
                }),
              });
              break;
            case "square":
              a = EZ("defs", {
                children: EZ("clipPath", {
                  id: p,
                  children: EZ("rect", {
                    id: `${p}-path`,
                    width: "100%",
                    height: "100%",
                  }),
                }),
              });
              break;
            default:
              throw new __c.E(l);
          }
          switch (l) {
            case "circle":
              p = EZ("circle", {
                cx: "50%",
                cy: "50%",
                fill: n,
                shapeRendering: "geometricPrecision",
                clipPath: `url(#${p})`,
                stroke: c,
                className: FZ("yCT70Q", { _2LVP_g: c }),
              });
              break;
            case "square":
              p = EZ("rect", {
                width: "100%",
                height: "100%",
                fill: n,
                shapeRendering: "geometricPrecision",
                clipPath: `url(#${p})`,
                stroke: c,
                className: FZ("cUFFRA", { _2LVP_g: c }),
              });
              break;
            default:
              throw new __c.E(l);
          }
          n = tLb(n);
          return EZ("span", {
            role: f,
            "aria-label": g,
            className: FZ("VaW8_A", { cUFFRA: l === "square" }),
            style: { "--pDK9Gw": n },
            ...m,
            children: CLb("svg", {
              className: h,
              style: k,
              children: [
                a,
                p,
                EZ("text", {
                  x: "50%",
                  y: "50%",
                  "aria-hidden": "true",
                  textAnchor: "middle",
                  fill: n,
                  fontWeight: "500",
                  fontSize: "50%",
                  dominantBaseline: "central",
                  letterSpacing: "0.01rem",
                  dy: "-0.04em",
                  children: uLb(b).toUpperCase(),
                }),
              ],
            }),
          });
        });
        var HLb =
          __webpack_require__.p + "images/5c0e58707f218438bf0f73d47db2ce50.svg";
        var ILb = ({
          borderColor: a,
          eVa: b,
          ariaLabel: c,
          className: d,
          style: e,
          role: f,
          ...g
        }) =>
          EZ("span", {
            className: FZ(d, { JwH6AA: a, QJpRHw: !a }),
            style: {
              backgroundImage: `url(${b})`,
              borderColor: a && `${a}`,
              ...e,
            },
            role: f,
            "aria-label": f === "img" ? c : void 0,
            ...g,
          });
        __c.JLb = ({
          name: a,
          D6a: b,
          ariaLabel: c,
          pR: d,
          backgroundColor: e,
          borderColor: f,
          Fq: g,
          className: h,
          style: k,
          shape: l = "circle",
          ...m
        }) => {
          h = FZ("n8XGZg", "f4qJng fs-hide", h, { P3N3Pw: l === "square" });
          b = b || "presentation";
          return g
            ? EZ(ILb, {
                className: h,
                style: k,
                borderColor: f,
                eVa: g,
                ariaLabel: c,
                role: b,
                ...m,
              })
            : a
            ? EZ(GLb, {
                className: h,
                style: k,
                borderColor: f,
                name: a,
                shape: l,
                pR: d,
                backgroundColor: e,
                role: b,
                ariaLabel: c,
                ...m,
              })
            : EZ(ILb, {
                className: h,
                style: k,
                borderColor: f,
                eVa: HLb,
                ariaLabel: c,
                role: b,
                ...m,
              });
        };
      }.call(self, self._7ccc7343da2ae983607b3819c7bc1f93));
    },
  },
]);
//# sourceMappingURL=sourcemaps/bcbcbac4ca0f39b3.js.map
