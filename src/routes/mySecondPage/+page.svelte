<script lang="ts">
	import { enhance } from '$app/forms';
	export let form;
</script>

<div class="flex flex-col gap-2 py-2 px-3">
	<form method="post" action="?/sayHello" use:enhance>
		<input placeholder="Your name" name="name" class="border rounded" />
	</form>

	Message: {form?.message ?? ''}
</div>
