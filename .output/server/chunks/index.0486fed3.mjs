import { ref, useSSRContext } from 'vue';
import { d as defineStore, _ as _export_sfc } from './server.mjs';
import { ssrRenderAttr, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
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

const products = [
  {
    name: "Product 1",
    price: 12
  },
  {
    name: "Product 2",
    price: 19
  },
  {
    name: "Product 3",
    price: 4
  },
  {
    name: "Product 4",
    price: 9
  }
];
const useProductsStore = defineStore("ProductStore", {
  state: () => ({
    products
  }),
  getters: {
    getAllProducts() {
      return this.products;
    },
    searchProduct(searchText) {
      return this.products.filter((product) => product.name.toLowerCase().indexOf(searchText.toLowerCase()) > 0);
    }
  },
  actions: {
    addNewProduct(product) {
      this.products.push(product);
    }
  }
});
const _sfc_main = {
  async setup() {
    const productsStore = useProductsStore();
    const name = ref("first");
    const mountains = await fetch("https://api.nuxtjs.dev/mountains").then((res) => {
      debugger;
      return res.json();
    });
    const handleClick = () => {
      const nextIndex = productsStore.products.length + 1;
      productsStore.addNewProduct({
        name: "Product " + nextIndex,
        price: Math.floor(Math.random() * 10)
      });
    };
    const handleClearData = () => {
      productsStore.$patch({ products: [] });
    };
    return {
      productsStore,
      handleClick,
      handleClearData,
      name,
      mountains
    };
  },
  methods: {
    handleBackHome() {
      this.$router.replace("/");
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--><button>Home</button><button class="bg-blue">Add new</button><button>Clear all</button><input${ssrRenderAttr("value", $setup.name)}><div>${ssrInterpolate($setup.name)}</div><!--[-->`);
  ssrRenderList($setup.productsStore.products, (product, index2) => {
    _push(`<h1 class="text-blue-500">${ssrInterpolate(product.name)} : ${ssrInterpolate(product.price)}</h1>`);
  });
  _push(`<!--]--><h2>${ssrInterpolate($setup.mountains)}</h2><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/test/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index.0486fed3.mjs.map
