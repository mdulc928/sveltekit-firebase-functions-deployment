import './index-BIAFQWR9.js';

const actions = {
  sayHello: async ({ request }) => {
    const formData = await request.formData();
    const name = formData.get("name");
    console.log("name", name);
    return { message: `Hello, ${name}` };
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions
});

const index = 3;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-D0DIPDg4.js')).default;
const server_id = "src/routes/mySecondPage/+page.server.ts";
const imports = ["_app/immutable/nodes/3.DNpy5O4X.js","_app/immutable/chunks/disclose-version.D7UMpawt.js","_app/immutable/chunks/runtime.C2i9DcWR.js","_app/immutable/chunks/render.BQc3hvKV.js","_app/immutable/chunks/events.BoXAamLX.js","_app/immutable/chunks/lifecycle.CIB9LcBL.js","_app/immutable/chunks/props.CTSSmEyv.js","_app/immutable/chunks/entry.0-3npzez.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=3-BYqqTcyD.js.map
