const { init } = require('../handler.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set([]),
	_: {
		mime: {},
		entry: {"file":"start-f4658897.js","js":["start-f4658897.js","chunks/vendor-c07d283b.js"],"css":[]},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js')),
			() => Promise.resolve().then(() => require('../server/nodes/2.js')),
			() => Promise.resolve().then(() => require('../server/nodes/3.js')),
			() => Promise.resolve().then(() => require('../server/nodes/4.js'))
		],
		routes: [
			{
				type: 'page',
				pattern: /^\/$/,
				params: null,
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'endpoint',
				pattern: /^\/pokemon\/favicon\/?$/,
				params: null,
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/pokemon/favicon.png.js'))
			},
			{
				type: 'page',
				pattern: /^\/pokemon\/([^/]+?)\/?$/,
				params: (m) => ({ id: m[1]}),
				path: null,
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/about\/?$/,
				params: null,
				path: "/about",
				shadow: null,
				a: [0,4],
				b: [1]
			},
			{
				type: 'endpoint',
				pattern: /^\/api\/pokemon\/?$/,
				params: null,
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/api/pokemon/index.js'))
			},
			{
				type: 'endpoint',
				pattern: /^\/api\/pokemon\/([^/]+?)\/?$/,
				params: (m) => ({ id: m[1]}),
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/api/pokemon/_id_.js'))
			}
		]
	}
});
