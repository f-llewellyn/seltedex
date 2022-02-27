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
  default: () => Routes,
  load: () => load
});
var import_index_13c0de55 = require("../../chunks/index-13c0de55.js");
const PokemanCard = (0, import_index_13c0de55.c)(($$result, $$props, $$bindings, slots) => {
  let { pokeman } = $$props;
  if ($$props.pokeman === void 0 && $$bindings.pokeman && pokeman !== void 0)
    $$bindings.pokeman(pokeman);
  return `<a class="${"p-6 bg-gray-100 text-gray-800 text-center rounded-md shadow-sm hover:shadow-md flex flex-col items-center"}"${(0, import_index_13c0de55.a)("href", `/pokemon/${pokeman.id}`, 0)}><img class="${"h-40 w-40"}"${(0, import_index_13c0de55.a)("src", pokeman.image, 0)}${(0, import_index_13c0de55.a)("alt", pokeman.name, 0)}>
	<h2 class="${"uppercase text-2xl"}">${(0, import_index_13c0de55.e)(pokeman.id)}. ${(0, import_index_13c0de55.e)(pokeman.name)}</h2></a>`;
});
async function load({ params }) {
  const url = "https://pokeapi.co/api/v2/pokemon?limit=150";
  const res = await fetch(url);
  const data = await res.json();
  const loadedPokemon = data.results.map((data2, index) => {
    return {
      name: data2.name,
      id: index + 1,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
    };
  });
  return { props: { pokemon: loadedPokemon } };
}
const Routes = (0, import_index_13c0de55.c)(($$result, $$props, $$bindings, slots) => {
  let { pokemon } = $$props;
  let searchTerm = "";
  let filteredPokemon = [];
  if ($$props.pokemon === void 0 && $$bindings.pokemon && pokemon !== void 0)
    $$bindings.pokemon(pokemon);
  {
    {
      {
        filteredPokemon = [...pokemon];
      }
    }
  }
  return `${$$result.head += `${$$result.title = `<title>Sveltedex | Home</title>`, ""}`, ""}

<h1 class="${"text-4xl text-center my-8 uppercase"}">Sveltedex</h1>

<input class="${"w-full rounded-md text-lg p-4 border-2 border-gray-200"}" type="${"text"}" placeholder="${"Search Pokemon"}"${(0, import_index_13c0de55.a)("value", searchTerm, 0)}>

<div class="${"grid gap-4 md:grid-cols-2 grid-cols-1 py-4"}">${(0, import_index_13c0de55.b)(filteredPokemon, (pokeman) => {
    return `${(0, import_index_13c0de55.v)(PokemanCard, "PokemanCard").$$render($$result, { pokeman }, {}, {})}`;
  })}</div>`;
});
module.exports = __toCommonJS(stdin_exports);
