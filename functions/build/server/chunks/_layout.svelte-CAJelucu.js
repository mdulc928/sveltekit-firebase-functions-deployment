import { f as slot } from './index2-iQrtVJ5P.js';

function default_slot($$props) {
  var children = $$props.$$slots?.default;
  if (children === true) {
    return $$props.children;
  } else {
    return children;
  }
}

function _layout($$payload, $$props) {
  $$payload.out += `<a href="/mySecondPage" class="underline hover:cursor-pointer hover:text-blue-300">My second Page</a> <!---->`;
  slot($$payload, default_slot($$props), {});
  $$payload.out += `<!---->`;
}

export { _layout as default };
//# sourceMappingURL=_layout.svelte-CAJelucu.js.map
