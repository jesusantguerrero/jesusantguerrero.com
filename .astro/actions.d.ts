declare module "astro:actions" {
	type Actions = typeof import("C:/Users/MOON/Workspace/thelab/astroboy/src/actions")["server"];

	export const actions: Actions;
}