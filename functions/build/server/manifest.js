const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.BdQPjymh.js","app":"_app/immutable/entry/app.D0sEFz5d.js","imports":["_app/immutable/entry/start.BdQPjymh.js","_app/immutable/chunks/entry.0-3npzez.js","_app/immutable/chunks/runtime.C2i9DcWR.js","_app/immutable/entry/app.D0sEFz5d.js","_app/immutable/chunks/runtime.C2i9DcWR.js","_app/immutable/chunks/render.BQc3hvKV.js","_app/immutable/chunks/disclose-version.D7UMpawt.js","_app/immutable/chunks/events.BoXAamLX.js","_app/immutable/chunks/this.un-sdsvK.js","_app/immutable/chunks/props.CTSSmEyv.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-BRdZ1srl.js')),
			__memo(() => import('./chunks/1-BKcKAa90.js')),
			__memo(() => import('./chunks/3-BYqqTcyD.js'))
		],
		routes: [
			{
				id: "/mySecondPage",
				pattern: /^\/mySecondPage\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set(["/"]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
