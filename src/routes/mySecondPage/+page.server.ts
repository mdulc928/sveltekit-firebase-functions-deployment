import { type Actions } from '@sveltejs/kit'
export const actions: Actions = {
  sayHello: async ({ request }) => {
    const formData = await request.formData()
    const name = formData.get('name');
    console.log("name", name)
    return { message: `Hello, ${name}` }
  }
}