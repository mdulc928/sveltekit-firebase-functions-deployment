import { g as escape_html, k as bind_props, e as pop, p as push } from './index2-iQrtVJ5P.js';
import './client-BUusD8wq.js';
import './exports-BGi7-Rnc.js';

function _page($$payload, $$props) {
  push();
  let form = $$props["form"];
  $$payload.out += `<div class="flex flex-col gap-2 py-2 px-3"><form method="post" action="?/sayHello"><input placeholder="Your name" name="name" class="border rounded"></form> Message: ${escape_html(form?.message ?? "")}</div>`;
  bind_props($$props, { form });
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-D0DIPDg4.js.map
