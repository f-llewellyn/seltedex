var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => U5Bidu5D,
  load: () => load
});
var import_index_13c0de55 = require("../../../chunks/index-13c0de55.js");
async function load({ params }) {
  const id = params.id;
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const pokeman = await res.json();
  return { props: { pokeman } };
}
const U5Bidu5D = (0, import_index_13c0de55.c)(($$result, $$props, $$bindings, slots) => {
  let { pokeman } = $$props;
  let types = [];
  pokeman.types.forEach((element) => types.push(element.type.name));
  if ($$props.pokeman === void 0 && $$bindings.pokeman && pokeman !== void 0)
    $$bindings.pokeman(pokeman);
  return `<div class="${"flex flex-col items-center"}"><h1 class="${"text-4xl text-center my-8 uppercase"}">${(0, import_index_13c0de55.e)(pokeman.name)}</h1>
	<p>Type: <strong class="${"capitalize"}">${(0, import_index_13c0de55.e)(types)}</strong> | Height:
		<strong>${(0, import_index_13c0de55.e)(pokeman.height)}</strong>
		| Weight: <strong>${(0, import_index_13c0de55.e)(pokeman.weight)}</strong></p>
	<img class="${"card-image"}"${(0, import_index_13c0de55.a)("src", pokeman.sprites["front_default"], 0)}${(0, import_index_13c0de55.a)("alt", pokeman.name, 0)}></div>`;
});
module.exports = __toCommonJS(stdin_exports);
