import { _ as _export_sfc, a as __nuxt_component_0$1 } from './server.mjs';
import { useSSRContext, resolveComponent, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderList, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'ufo';
import 'h3';
import '@unhead/vue';
import '@unhead/dom';
import 'vue-router';
import './node-server.mjs';
import 'node-fetch-native/polyfill';
import 'http';
import 'https';
import 'destr';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'ohash';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';

const _sfc_main$i = {
  data() {
    return {
      enableMenu: false
    };
  },
  methods: {
    handleClickMenu() {
      this.enableMenu = !this.enableMenu;
    }
  }
};
function _sfc_ssrRender$i(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "header_section header" }, _attrs))} data-v-f9a524d0><div class="header__menu menu" data-v-f9a524d0></div><div class="${ssrRenderClass([{ active: this.enableMenu }, "menu_expand"])}" data-v-f9a524d0><div class="dropdown menu__item" data-v-f9a524d0><div class="dropdown-toggle" type="button" id="dropdownMenuButton" data-mdb-toggle="dropdown" aria-expanded="false" data-v-f9a524d0> Giao d\u1ECBch </div><ul class="dropdown-menu" aria-labelledby="dropdownMenuButton" data-v-f9a524d0><li data-v-f9a524d0><a class="dropdown-item" href="#" data-v-f9a524d0>Action</a></li><li data-v-f9a524d0><a class="dropdown-item" href="#" data-v-f9a524d0>Another action</a></li><li data-v-f9a524d0><a class="dropdown-item" href="#" data-v-f9a524d0>Something else here</a></li></ul></div><div class="dropdown menu__item" data-v-f9a524d0><div class="dropdown-toggle" type="button" id="dropdownMenuButton" data-mdb-toggle="dropdown" aria-expanded="false" data-v-f9a524d0> H\u1ED7 tr\u1EE3 </div><ul class="dropdown-menu" aria-labelledby="dropdownMenuButton" data-v-f9a524d0><li data-v-f9a524d0><a class="dropdown-item" href="#" data-v-f9a524d0>Action</a></li><li data-v-f9a524d0><a class="dropdown-item" href="#" data-v-f9a524d0>Another action</a></li><li data-v-f9a524d0><a class="dropdown-item" href="#" data-v-f9a524d0>Something else here</a></li></ul></div></div><div class="header__logo logo" data-v-f9a524d0>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="logo__content" data-v-f9a524d0${_scopeId}>VinEX</span>`);
      } else {
        return [
          createVNode("span", { class: "logo__content" }, "VinEX")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="header__action action" data-v-f9a524d0><button class="action__wallet_linked" data-v-f9a524d0> Li\xEAn k\u1EBFt v\xED </button></div></div>`);
}
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/mobile/header/index.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const Header$1 = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["ssrRender", _sfc_ssrRender$i], ["__scopeId", "data-v-f9a524d0"]]);
const aboutus = [
  {
    label: "Th\xF4ng tin th\xEAm",
    link: "/#"
  },
  {
    label: "C\u01A1 h\u1ED9i ngh\u1EC1 nghi\u1EC7p",
    link: "/#"
  },
  {
    label: "H\u1EE3p t\xE1c kinh doanh",
    link: "/#"
  },
  {
    label: "C\u1ED9ng \u0111\u1ED3ng",
    link: "/#"
  },
  {
    label: "Blog",
    link: "/#"
  },
  {
    label: "\u0110i\u1EC1u kho\u1EA3n",
    link: "/#"
  },
  {
    label: "Ri\xEAng t\u01B0",
    link: "/#"
  },
  {
    label: "C\u1EA3nh b\xE1o r\u1EE7i ro",
    link: "/#"
  }
];
const products = [
  {
    label: "Exchange",
    link: "/#"
  },
  {
    label: "Card",
    link: "/#"
  },
  {
    label: "Trust Wallet",
    link: "/#"
  }
];
const service = [
  {
    label: "\u0110\u0103ng k\xFD th\u01B0\u01A1ng nh\xE2n P2P",
    link: "/#"
  },
  {
    label: "Card",
    link: "/#"
  },
  {
    label: "Trust Wallet",
    link: "/#"
  }
];
const support = [
  {
    label: "Ph\u1EA3n h\u1ED3i",
    link: "/#"
  },
  {
    label: "Trung t\xE2m tr\u1EE3 gi\xFAp",
    link: "/#"
  },
  {
    label: "Ph\xED giao d\u1ECBch",
    link: "/#"
  }
];
const _sfc_main$h = {
  setup() {
    const aboutUsList = aboutus;
    const productList = products;
    const serviceList = service;
    const supportList = support;
    return {
      aboutUsList,
      productList,
      serviceList,
      supportList
    };
  }
};
function _sfc_ssrRender$h(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0$1;
  _push(`<!--[--><div class="footer_section" data-v-0bd0028e><div class="footer_section__item" data-v-0bd0028e><div class="title" data-v-0bd0028e>V\u1EC1 ch\xFAng t\xF4i</div><!--[-->`);
  ssrRenderList($setup.aboutUsList, (about) => {
    _push(`<div class="label" data-v-0bd0028e>`);
    _push(ssrRenderComponent(_component_nuxt_link, {
      to: about.link
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(about.label)}`);
        } else {
          return [
            createTextVNode(toDisplayString(about.label), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</div>`);
  });
  _push(`<!--]--></div><div class="footer_section__item" data-v-0bd0028e><div class="title" data-v-0bd0028e>S\u1EA3n ph\u1EA9m</div><!--[-->`);
  ssrRenderList($setup.productList, (product) => {
    _push(`<div class="label" data-v-0bd0028e>`);
    _push(ssrRenderComponent(_component_nuxt_link, {
      to: product.link
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(product.label)}`);
        } else {
          return [
            createTextVNode(toDisplayString(product.label), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</div>`);
  });
  _push(`<!--]--></div><div class="footer_section__item" data-v-0bd0028e><div class="title" data-v-0bd0028e>D\u1ECBch v\u1EE5</div><!--[-->`);
  ssrRenderList($setup.serviceList, (service2) => {
    _push(`<div class="label" data-v-0bd0028e>`);
    _push(ssrRenderComponent(_component_nuxt_link, {
      to: service2.link
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(service2.label)}`);
        } else {
          return [
            createTextVNode(toDisplayString(service2.label), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</div>`);
  });
  _push(`<!--]--></div><div class="footer_section__item" data-v-0bd0028e><div class="title" data-v-0bd0028e>H\u1ED7 tr\u1EE3</div><!--[-->`);
  ssrRenderList($setup.supportList, (support2) => {
    _push(`<div class="label" data-v-0bd0028e>`);
    _push(ssrRenderComponent(_component_nuxt_link, {
      to: support2.link
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(support2.label)}`);
        } else {
          return [
            createTextVNode(toDisplayString(support2.label), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</div>`);
  });
  _push(`<!--]--></div></div><div class="end_footer" data-v-0bd0028e>VinEX \xA9 2022</div><!--]-->`);
}
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/mobile/footer/index.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const Footer$1 = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["ssrRender", _sfc_ssrRender$h], ["__scopeId", "data-v-0bd0028e"]]);
const _imports_0$2 = "" + globalThis.__buildAssetsURL("homepage-landing.5c2200fa.png");
const _sfc_main$g = {};
function _sfc_ssrRender$g(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "homepage_landing" }, _attrs))} data-v-1d292c87><img${ssrRenderAttr("src", _imports_0$2)} data-v-1d292c87></div>`);
}
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/mobile/landing/index.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const HomePageLanding$1 = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["ssrRender", _sfc_ssrRender$g], ["__scopeId", "data-v-1d292c87"]]);
const _imports_0$1 = "" + globalThis.__buildAssetsURL("logo.5c346a7d.svg");
const _sfc_main$f = {};
function _sfc_ssrRender$f(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "discovery-section" }, _attrs))} data-v-c1d05f58><div class="discovery container" data-v-c1d05f58><div class="discovery__content" data-v-c1d05f58><div class="title" data-v-c1d05f58> Mua &amp; B\xE1n ti\u1EC1n m\xE3 ho\xE1 ch\u1EC9 trong v\xE0i ph\xFAt </div><div class="body_content" data-v-c1d05f58> Tham gia s\xE0n giao d\u1ECBch ti\u1EC1n m\xE3 ho\xE1 nhanh ch\xF3ng v\xE0 an to\xE0n nh\u1EA5t <br data-v-c1d05f58> Vi\u1EC7t Nam </div><button class="submid_button" data-v-c1d05f58>Kh\xE1m ph\xE1</button></div><div class="discovery__logo" data-v-c1d05f58><img${ssrRenderAttr("src", _imports_0$1)} data-v-c1d05f58></div></div></div>`);
}
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/mobile/discovery/index.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const DiscoveryPage$1 = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["ssrRender", _sfc_ssrRender$f], ["__scopeId", "data-v-c1d05f58"]]);
const reasonable = [
  {
    title: "N\u1EC1n t\u1EA3ng An to\xE0n & B\u1EA3o m\u1EADt",
    content: "T\xEDnh b\u1EA3o m\u1EADt v\xE0 \u1ED5n \u0111\u1ECBnh t\xE0i ch\xEDnh h\xE0ng \u0111\u1EA7u trong ng\xE0nh c\u1EE7a ch\xFAng t\xF4i gi\xFAp gi\u1EEF cho danh t\xEDnh v\xE0 ti\u1EC1n c\u1EE7a b\u1EA1n an to\xE0n v\xE0 b\u1EA3o m\u1EADt.",
    imgSrc: "_nuxt/assets/images/security-platform.png"
  },
  {
    title: "Giao d\u1ECBch v\u1EDBi m\u1EE9c gi\xE1 b\u1EA1n mong mu\u1ED1n",
    content: "S\xE0n giao d\u1ECBch gi\u1EEFa c\xE1 nh\xE2n v\u1EDBi c\xE1 nh\xE2n (P2P) cho ph\xE9p ng\u01B0\u1EDDi d\xF9ng t\u1EF1 do giao d\u1ECBch ti\u1EC1n m\xE3 h\xF3a v\u1EDBi m\u1EE9c gi\xE1 mong mu\u1ED1n. Tr\xEAn VinEx, b\u1EA1n kh\xF4ng ch\u1EC9 c\xF3 th\u1EC3 mua ho\u1EB7c b\xE1n ti\u1EC1n m\xE3 h\xF3a t\u1EEB c\xE1c l\u1EDDi m\u1EDDi giao d\u1ECBch hi\u1EC7n c\xF3 m\xE0 c\xF2n c\xF3 th\u1EC3 t\u1EA1o qu\u1EA3ng c\xE1o giao d\u1ECBch \u0111\u1EC3 \u0111\u1EB7t m\u1EE9c gi\xE1 c\u1EE7a ri\xEAng m\xECnh.",
    imgSrc: "_nuxt/assets/images/nice-trade.png"
  },
  {
    title: "Nhi\u1EC1u lo\u1EA1i ti\u1EC1n \u0111i\u1EC7n t\u1EED",
    content: "Ch\xFAng t\xF4i x\u1EBFp h\u1EA1ng h\xE0ng \u0111\u1EA7u trong s\u1ED1 c\xE1c s\xE0n giao d\u1ECBch c\u1EA5p m\u1ED9t v\u1EDBi s\u1ED1 l\u01B0\u1EE3ng ti\u1EC1n \u0111i\u1EC7n t\u1EED \u0111\u01B0\u1EE3c ni\xEAm y\u1EBFt cao nh\u1EA5t.",
    imgSrc: "_nuxt/assets/images/variety.png"
  }
];
const _sfc_main$e = {
  setup() {
    const reasonList = reasonable;
    return {
      reasonList
    };
  }
};
function _sfc_ssrRender$e(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "reason-section container" }, _attrs))} data-v-8b4f10c0><div class="title" data-v-8b4f10c0><div class="title__content" data-v-8b4f10c0>T\u1EA1i sao ch\u1ECDn VinEx?</div><div class="title__note" data-v-8b4f10c0> Ch\xFAng t\xF4i cung c\u1EA5p cho b\u1EA1n s\u1EF1 an to\xE0n, hi\u1EC7u qu\u1EA3 v\xE0 \u0111a d\u1EA1ng. </div></div><div class="main-content" data-v-8b4f10c0><!--[-->`);
  ssrRenderList($setup.reasonList, (item) => {
    _push(`<div class="content_item" data-v-8b4f10c0><div class="item_img" data-v-8b4f10c0><img${ssrRenderAttr("src", item.imgSrc)} data-v-8b4f10c0></div><div class="item_title" data-v-8b4f10c0>${ssrInterpolate(item.title)}</div><div class="item_content" data-v-8b4f10c0>${ssrInterpolate(item.content)}</div></div>`);
  });
  _push(`<!--]--></div></div>`);
}
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/mobile/reasonable/index.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const Reasonable$1 = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["ssrRender", _sfc_ssrRender$e], ["__scopeId", "data-v-8b4f10c0"]]);
const tradings = [
  {
    imgSrc: "_nuxt/assets/images/recovery-convert.svg",
    title: "Mua/b\xE1n b\u1EB1ng VND",
    content: "Mua v\xE0 b\xE1n TetherUS m\u1ED9t c\xE1ch an to\xE0n v\xE0 d\u1EC5 d\xE0ng tr\xEAn VinEX P2P. T\xECm \u01B0u \u0111\xE3i t\u1ED1t nh\u1EA5t b\xEAn d\u01B0\u1EDBi, mua v\xE0 b\xE1n USDT b\u1EB1ng c\xE1c ph\u01B0\u01A1ng th\u1EE9c thanh to\xE1n \u01B0a th\xEDch c\u1EE7a b\u1EA1n ngay h\xF4m nay.",
    link: "/#"
  },
  {
    imgSrc: "_nuxt/assets/images/percentage-square.svg",
    title: "Ph\xED giao d\u1ECBch th\u1EA5p nh\u1EA5t",
    content: "VinEX d\u1EABn \u0111\u1EA7u v\u1EDBi ph\xED giao d\u1ECBch th\u1EA5p v\xE0 ch\u01B0\u01A1ng tr\xECnh VIP h\u1EA5p d\u1EABn. H\xE3y t\u1EADn h\u01B0\u1EDFng m\u1EE9c ph\xED giao d\u1ECBch th\u1EA5p nh\u1EA5t th\u1ECB tr\u01B0\u1EDDng.",
    link: "/#"
  },
  {
    imgSrc: "_nuxt/assets/images/shield-security.svg",
    title: "B\u1EA3o m\u1EADt cao",
    content: "C\xE1c bi\u1EC7n ph\xE1p b\u1EA3o m\u1EADt cao c\u1EA5p c\xF9ng c\xF9ng qu\u1EF9 s\xE0n c\u1EE7a VinEX s\u1EBD b\u1EA3o v\u1EC7 d\u1EEF li\u1EC7u v\xE0 t\xE0i s\u1EA3n c\u1EE7a b\u1EA1n tr\u01B0\u1EDBc r\u1EE7i ro.",
    link: "/#"
  },
  {
    imgSrc: "_nuxt/assets/images/24-support.svg",
    title: "H\u1ED7 tr\u1EE3 kh\xE1ch h\xE0ng 24/7",
    content: "\u0110\u1ED9i ng\u0169 h\u1ED7 tr\u1EE3 nhi\u1EC1u kinh nghi\u1EC7m c\u1EE7a VinEX lu\xF4n t\xFAc tr\u1EF1c 24/7 \u0111\u1EC3 s\u1EB5n s\xE0ng tr\u1EE3 gi\xFAp b\u1EA1n.",
    link: "/#"
  }
];
const _sfc_main$d = {
  setup() {
    const tradingList = tradings;
    return {
      tradingList
    };
  }
};
function _sfc_ssrRender$d(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "trading-section" }, _attrs))} data-v-e38d6596><div class="trading container" data-v-e38d6596><div class="trading__title" data-v-e38d6596>\u0110\u1ED1i t\xE1c \u0111\xE1ng tin c\u1EADy cho h\xE0nh tr\xECnh c\u1EE7a b\u1EA1n</div><div class="trading__note" data-v-e38d6596>Giao d\u1ECBch b\u1EB1ng VND v\u1EDBi ph\xED 0\u0111</div><div class="trading__package" data-v-e38d6596><!--[-->`);
  ssrRenderList($setup.tradingList, (item) => {
    _push(`<div class="item" data-v-e38d6596><div class="item__img" data-v-e38d6596><img${ssrRenderAttr("src", item.imgSrc)}${ssrRenderAttr("alt", item.title)} data-v-e38d6596></div><div class="item__title" data-v-e38d6596>${ssrInterpolate(item.title)}</div><div class="item__content" data-v-e38d6596>${ssrInterpolate(item.content)}</div><div class="item__trade" data-v-e38d6596>`);
    _push(ssrRenderComponent(_component_nuxt_link, {
      to: item.link
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<button class="trade_btn" data-v-e38d6596${_scopeId}>Giao d\u1ECBch ngay</button>`);
        } else {
          return [
            createVNode("button", { class: "trade_btn" }, "Giao d\u1ECBch ngay")
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</div></div>`);
  });
  _push(`<!--]--></div></div></div>`);
}
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/mobile/trading/index.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const Trading$1 = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["ssrRender", _sfc_ssrRender$d], ["__scopeId", "data-v-e38d6596"]]);
const qanda = [
  {
    question: "\u0110\u0103ng k\xFD v\xE0 x\xE1c minh t\xE0i kho\u1EA3n tr\xEAn VinEX nh\u01B0 th\u1EBF n\xE0o?",
    anwser: ""
  },
  {
    question: "Ph\xED giao d\u1ECBch tr\xEAn VinEx l\xE0 bao nhi\xEAu?",
    anwser: ""
  },
  {
    question: "L\xE0m sao \u0111\u1EC3 mua b\xE1n ti\u1EC1n m\xE3 ho\xE1 b\u1EB1ng VND tr\xEAn VinEX P2P?",
    anwser: ""
  },
  {
    question: "L\xE0m sao \u0111\u1EC3 tr\u1EDF th\xE0nh nh\xE0 giao d\u1ECBch VIP tr\xEAn VinEx? ",
    anwser: ""
  }
];
const _imports_0 = "" + globalThis.__buildAssetsURL("qa.1d38a921.svg");
const _sfc_main$c = {
  setup() {
    const questionList = qanda;
    return {
      questionList
    };
  }
};
function _sfc_ssrRender$c(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "q_a_section" }, _attrs))} data-v-9eda994d><div class="q_a container" data-v-9eda994d><div class="q_a__title" data-v-9eda994d>H\u1ECFi &amp; \u0111\xE1p</div><div class="q_a__list" data-v-9eda994d></div><div class="q_a__note note" data-v-9eda994d><div class="note__content" data-v-9eda994d><div class="title" data-v-9eda994d> Giao d\u1ECBch m\u1ECDi l\xFAc, m\u1ECDi n\u01A1i. </div><div class="content" data-v-9eda994d> T\u01B0\u01A1ng th\xEDch v\u1EDBi nhi\u1EC1u thi\u1EBFt b\u1ECB, b\u1EAFt \u0111\u1EA7u giao d\u1ECBch an to\xE0n v\xE0 ti\u1EC7n l\u1EE3i. To\xE0n b\u1ED9 s\u1EE9c m\u1EA1nh c\u1EE7a s\xE0n giao d\u1ECBch ti\u1EC1n m\xE3 ho\xE1 VinEX gi\u1EDD n\u1EB1m g\u1ECDn trong b\xE0n tay c\u1EE7a b\u1EA1n. </div></div><div class="note__img" data-v-9eda994d><img${ssrRenderAttr("src", _imports_0)} data-v-9eda994d></div></div></div></div>`);
}
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/mobile/Q&A/index.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const QAndA$1 = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["ssrRender", _sfc_ssrRender$c], ["__scopeId", "data-v-9eda994d"]]);
const _sfc_main$b = {};
function _sfc_ssrRender$b(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "trade_now_section" }, _attrs))} data-v-bf73bb7c><div class="trade_now container" data-v-bf73bb7c><div class="trade_now__title" data-v-bf73bb7c>B\u1EAFt \u0111\u1EA7u giao d\u1ECBch ngay</div><div class="trade_now__action" data-v-bf73bb7c><button class="trade_now__action--button" data-v-bf73bb7c>B\u1EAFt \u0111\u1EA7u</button></div></div></div>`);
}
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/mobile/trade-now/index.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const TradeNow$1 = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["ssrRender", _sfc_ssrRender$b], ["__scopeId", "data-v-bf73bb7c"]]);
const _sfc_main$a = {
  components: {
    Header: Header$1,
    Footer: Footer$1,
    DiscoveryPage: DiscoveryPage$1,
    Reasonable: Reasonable$1,
    Trading: Trading$1,
    QAndA: QAndA$1,
    TradeNow: TradeNow$1,
    HomePageLanding: HomePageLanding$1
  },
  name: "index"
};
function _sfc_ssrRender$a(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Header = resolveComponent("Header");
  const _component_DiscoveryPage = resolveComponent("DiscoveryPage");
  const _component_Reasonable = resolveComponent("Reasonable");
  const _component_Trading = resolveComponent("Trading");
  const _component_QAndA = resolveComponent("QAndA");
  const _component_TradeNow = resolveComponent("TradeNow");
  const _component_HomePageLanding = resolveComponent("HomePageLanding");
  const _component_Footer = resolveComponent("Footer");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "mobile_container" }, _attrs))} data-v-c5021469>`);
  _push(ssrRenderComponent(_component_Header, null, null, _parent));
  _push(ssrRenderComponent(_component_DiscoveryPage, null, null, _parent));
  _push(ssrRenderComponent(_component_Reasonable, null, null, _parent));
  _push(ssrRenderComponent(_component_Trading, null, null, _parent));
  _push(ssrRenderComponent(_component_QAndA, null, null, _parent));
  _push(ssrRenderComponent(_component_TradeNow, null, null, _parent));
  _push(ssrRenderComponent(_component_HomePageLanding, null, null, _parent));
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/mobile/index.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender$a], ["__scopeId", "data-v-c5021469"]]);
const _sfc_main$9 = {
  methods: {
    handleTestPinia() {
      this.$router.replace("/test");
    }
  }
};
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "header_section header" }, _attrs))} data-v-14304e3c><div class="header__logo logo" data-v-14304e3c>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="logo__content" data-v-14304e3c${_scopeId}>VinEX</span>`);
      } else {
        return [
          createVNode("span", { class: "logo__content" }, "VinEX")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="header__menu menu" data-v-14304e3c><div class="dropdown menu__item" data-v-14304e3c><div class="dropdown-toggle" type="button" id="dropdownMenuButton" data-mdb-toggle="dropdown" aria-expanded="false" data-v-14304e3c> Giao d\u1ECBch </div><ul class="dropdown-menu" aria-labelledby="dropdownMenuButton" data-v-14304e3c><li data-v-14304e3c><a class="dropdown-item" href="#" data-v-14304e3c>Action</a></li><li data-v-14304e3c><a class="dropdown-item" href="#" data-v-14304e3c>Another action</a></li><li data-v-14304e3c><a class="dropdown-item" href="#" data-v-14304e3c>Something else here</a></li></ul></div><div class="dropdown menu__item" data-v-14304e3c><div class="dropdown-toggle" type="button" id="dropdownMenuButton" data-mdb-toggle="dropdown" aria-expanded="false" data-v-14304e3c> H\u1ED7 tr\u1EE3 </div><ul class="dropdown-menu" aria-labelledby="dropdownMenuButton" data-v-14304e3c><li data-v-14304e3c><a class="dropdown-item" href="#" data-v-14304e3c>Action</a></li><li data-v-14304e3c><a class="dropdown-item" href="#" data-v-14304e3c>Another action</a></li><li data-v-14304e3c><a class="dropdown-item" href="#" data-v-14304e3c>Something else here</a></li></ul></div></div><div class="header__action action" data-v-14304e3c><button class="action__wallet_linked" data-v-14304e3c> Li\xEAn k\u1EBFt v\xED </button></div></div>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/desktop/header/index.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const Header = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$9], ["__scopeId", "data-v-14304e3c"]]);
const _sfc_main$8 = {
  setup() {
    const aboutUsList = aboutus;
    const productList = products;
    const serviceList = service;
    const supportList = support;
    return {
      aboutUsList,
      productList,
      serviceList,
      supportList
    };
  }
};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0$1;
  _push(`<!--[--><div class="footer_section" data-v-87aa2461><div class="footer_section__item" data-v-87aa2461><div class="title" data-v-87aa2461>V\u1EC1 ch\xFAng t\xF4i</div><!--[-->`);
  ssrRenderList($setup.aboutUsList, (about) => {
    _push(`<div class="label" data-v-87aa2461>`);
    _push(ssrRenderComponent(_component_nuxt_link, {
      to: about.link
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(about.label)}`);
        } else {
          return [
            createTextVNode(toDisplayString(about.label), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</div>`);
  });
  _push(`<!--]--></div><div class="footer_section__item" data-v-87aa2461><div class="title" data-v-87aa2461>S\u1EA3n ph\u1EA9m</div><!--[-->`);
  ssrRenderList($setup.productList, (product) => {
    _push(`<div class="label" data-v-87aa2461>`);
    _push(ssrRenderComponent(_component_nuxt_link, {
      to: product.link
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(product.label)}`);
        } else {
          return [
            createTextVNode(toDisplayString(product.label), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</div>`);
  });
  _push(`<!--]--></div><div class="footer_section__item" data-v-87aa2461><div class="title" data-v-87aa2461>D\u1ECBch v\u1EE5</div><!--[-->`);
  ssrRenderList($setup.serviceList, (service2) => {
    _push(`<div class="label" data-v-87aa2461>`);
    _push(ssrRenderComponent(_component_nuxt_link, {
      to: service2.link
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(service2.label)}`);
        } else {
          return [
            createTextVNode(toDisplayString(service2.label), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</div>`);
  });
  _push(`<!--]--></div><div class="footer_section__item" data-v-87aa2461><div class="title" data-v-87aa2461>H\u1ED7 tr\u1EE3</div><!--[-->`);
  ssrRenderList($setup.supportList, (support2) => {
    _push(`<div class="label" data-v-87aa2461>`);
    _push(ssrRenderComponent(_component_nuxt_link, {
      to: support2.link
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(support2.label)}`);
        } else {
          return [
            createTextVNode(toDisplayString(support2.label), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</div>`);
  });
  _push(`<!--]--></div></div><div class="end_footer" data-v-87aa2461>VinEX \xA9 2022</div><!--]-->`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/desktop/footer/index.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const Footer = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$8], ["__scopeId", "data-v-87aa2461"]]);
const _sfc_main$7 = {};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "homeopage_landing" }, _attrs))}><img${ssrRenderAttr("src", _imports_0$2)}></div>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/desktop/landing/index.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const HomePageLanding = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$7]]);
const _sfc_main$6 = {};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "discovery-section" }, _attrs))} data-v-5d06227f><div class="discovery container" data-v-5d06227f><div class="discovery__content" data-v-5d06227f><div class="title" data-v-5d06227f> Mua &amp; B\xE1n ti\u1EC1n m\xE3 <br data-v-5d06227f> ho\xE1 ch\u1EC9 trong v\xE0i ph\xFAt </div><div class="body_content" data-v-5d06227f> Tham gia s\xE0n giao d\u1ECBch ti\u1EC1n m\xE3 ho\xE1 nhanh ch\xF3ng v\xE0 an to\xE0n nh\u1EA5t <br data-v-5d06227f> Vi\u1EC7t Nam </div><button class="submid_button" data-v-5d06227f>Kh\xE1m ph\xE1</button></div><div class="discovery__logo" data-v-5d06227f><img${ssrRenderAttr("src", _imports_0$1)} data-v-5d06227f></div></div></div>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/desktop/discovery/index.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const DiscoveryPage = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$6], ["__scopeId", "data-v-5d06227f"]]);
const _sfc_main$5 = {
  setup() {
    const reasonList = reasonable;
    return {
      reasonList
    };
  }
};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "reason-section container" }, _attrs))} data-v-23d244a2><div class="title" data-v-23d244a2><div class="title__content" data-v-23d244a2>T\u1EA1i sao ch\u1ECDn VinEx?</div><div class="title__note" data-v-23d244a2> Ch\xFAng t\xF4i cung c\u1EA5p cho b\u1EA1n s\u1EF1 an to\xE0n, hi\u1EC7u qu\u1EA3 v\xE0 \u0111a d\u1EA1ng. </div></div><div class="main-content" data-v-23d244a2><!--[-->`);
  ssrRenderList($setup.reasonList, (item) => {
    _push(`<div class="content_item" data-v-23d244a2><div class="item_img" data-v-23d244a2><img${ssrRenderAttr("src", item.imgSrc)} data-v-23d244a2></div><div class="item_title" data-v-23d244a2>${ssrInterpolate(item.title)}</div><div class="item_content" data-v-23d244a2>${ssrInterpolate(item.content)}</div></div>`);
  });
  _push(`<!--]--></div></div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/desktop/reasonable/index.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const Reasonable = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5], ["__scopeId", "data-v-23d244a2"]]);
const _sfc_main$4 = {
  setup() {
    const tradingList = tradings;
    return {
      tradingList
    };
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "trading-section" }, _attrs))} data-v-71145b45><div class="trading container" data-v-71145b45><div class="trading__title" data-v-71145b45>\u0110\u1ED1i t\xE1c \u0111\xE1ng tin c\u1EADy cho h\xE0nh tr\xECnh c\u1EE7a b\u1EA1n</div><div class="trading__note" data-v-71145b45>Giao d\u1ECBch b\u1EB1ng VND v\u1EDBi ph\xED 0\u0111</div><div class="trading__package" data-v-71145b45><!--[-->`);
  ssrRenderList($setup.tradingList, (item) => {
    _push(`<div class="item" data-v-71145b45><div class="item__img" data-v-71145b45><img${ssrRenderAttr("src", item.imgSrc)}${ssrRenderAttr("alt", item.title)} data-v-71145b45></div><div class="item__title" data-v-71145b45>${ssrInterpolate(item.title)}</div><div class="item__content" data-v-71145b45>${ssrInterpolate(item.content)}</div><div class="item__trade" data-v-71145b45>`);
    _push(ssrRenderComponent(_component_nuxt_link, {
      to: item.link
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<button class="trade_btn" data-v-71145b45${_scopeId}>Giao d\u1ECBch ngay</button>`);
        } else {
          return [
            createVNode("button", { class: "trade_btn" }, "Giao d\u1ECBch ngay")
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</div></div>`);
  });
  _push(`<!--]--></div></div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/desktop/trading/index.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const Trading = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4], ["__scopeId", "data-v-71145b45"]]);
const _sfc_main$3 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "q_a_section" }, _attrs))} data-v-906873d1><div class="q_a container" data-v-906873d1><div class="q_a__title" data-v-906873d1>H\u1ECFi &amp; \u0111\xE1p</div><div class="q_a__list" data-v-906873d1></div><div class="q_a__note note" data-v-906873d1><div class="note__img" data-v-906873d1><img${ssrRenderAttr("src", _imports_0)} data-v-906873d1></div><div class="note__content" data-v-906873d1><div class="title" data-v-906873d1> Giao d\u1ECBch m\u1ECDi l\xFAc, m\u1ECDi n\u01A1i. </div><div class="content" data-v-906873d1> T\u01B0\u01A1ng th\xEDch v\u1EDBi nhi\u1EC1u thi\u1EBFt b\u1ECB, b\u1EAFt \u0111\u1EA7u giao d\u1ECBch an to\xE0n v\xE0 ti\u1EC7n l\u1EE3i. To\xE0n b\u1ED9 s\u1EE9c m\u1EA1nh c\u1EE7a s\xE0n giao d\u1ECBch ti\u1EC1n m\xE3 ho\xE1 VinEX gi\u1EDD n\u1EB1m g\u1ECDn trong b\xE0n tay c\u1EE7a b\u1EA1n. </div></div></div></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/desktop/Q&A/index.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const QAndA = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-906873d1"]]);
const _sfc_main$2 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "trade_now_section" }, _attrs))} data-v-1abfbab9><div class="trade_now container" data-v-1abfbab9><div class="trade_now__title" data-v-1abfbab9>B\u1EAFt \u0111\u1EA7u giao d\u1ECBch ngay</div><div class="trade_now__action" data-v-1abfbab9><button class="trade_now__action--button" data-v-1abfbab9>B\u1EAFt \u0111\u1EA7u</button></div></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/desktop/trade-now/index.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const TradeNow = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-1abfbab9"]]);
const _sfc_main$1 = {
  components: {
    Header,
    Footer,
    DiscoveryPage,
    Reasonable,
    Trading,
    QAndA,
    TradeNow,
    HomePageLanding
  },
  name: "index"
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Header = resolveComponent("Header");
  const _component_DiscoveryPage = resolveComponent("DiscoveryPage");
  const _component_Reasonable = resolveComponent("Reasonable");
  const _component_Trading = resolveComponent("Trading");
  const _component_QAndA = resolveComponent("QAndA");
  const _component_TradeNow = resolveComponent("TradeNow");
  const _component_HomePageLanding = resolveComponent("HomePageLanding");
  const _component_Footer = resolveComponent("Footer");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "desktop_container" }, _attrs))} data-v-395b8b0f>`);
  _push(ssrRenderComponent(_component_Header, null, null, _parent));
  _push(ssrRenderComponent(_component_DiscoveryPage, null, null, _parent));
  _push(ssrRenderComponent(_component_Reasonable, null, null, _parent));
  _push(ssrRenderComponent(_component_Trading, null, null, _parent));
  _push(ssrRenderComponent(_component_QAndA, null, null, _parent));
  _push(ssrRenderComponent(_component_TradeNow, null, null, _parent));
  _push(ssrRenderComponent(_component_HomePageLanding, null, null, _parent));
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/desktop/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-395b8b0f"]]);
const _sfc_main = {
  components: {
    Desktop: __nuxt_component_1,
    Mobile: __nuxt_component_0
  },
  mounted() {
    if (window.innerWidth <= 768) {
      this.isMobile = true;
    }
    window.addEventListener("resize", this.onResize);
  },
  data() {
    return {
      isMobile: false
    };
  },
  methods: {
    onResize() {
      if (window.innerWidth <= 768)
        this.isMobile = true;
      else
        this.isMobile = false;
    }
  },
  name: "index"
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Mobile = __nuxt_component_0;
  const _component_Desktop = __nuxt_component_1;
  if ($data.isMobile) {
    _push(`<div${ssrRenderAttrs(_attrs)}>`);
    _push(ssrRenderComponent(_component_Mobile, null, null, _parent));
    _push(`</div>`);
  } else {
    _push(`<div${ssrRenderAttrs(_attrs)}>`);
    _push(ssrRenderComponent(_component_Desktop, null, null, _parent));
    _push(`</div>`);
  }
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index.6a8793f7.mjs.map
