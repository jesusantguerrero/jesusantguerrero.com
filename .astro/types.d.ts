declare module 'astro:content' {
	interface Render {
		'.md': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[]
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[]
	): Promise<CollectionEntry<C>[]>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"projects": {
"loger.md": {
	id: "loger.md";
  slug: "loger";
  body: string;
  collection: "projects";
  data: InferEntrySchema<"projects">
} & { render(): Render[".md"] };
};
"seeds": {
"advanced-app-structure-in-vue.md": {
	id: "advanced-app-structure-in-vue.md";
  slug: "advanced-app-structure-in-vue";
  body: string;
  collection: "seeds";
  data: InferEntrySchema<"seeds">
} & { render(): Render[".md"] };
"atomic-design-in-vue.md": {
	id: "atomic-design-in-vue.md";
  slug: "atomic-design-in-vue";
  body: string;
  collection: "seeds";
  data: InferEntrySchema<"seeds">
} & { render(): Render[".md"] };
"deploying-full-stack-apps.md": {
	id: "deploying-full-stack-apps.md";
  slug: "deploying-full-stack-apps";
  body: string;
  collection: "seeds";
  data: InferEntrySchema<"seeds">
} & { render(): Render[".md"] };
"dia-de-independencia-2021.md": {
	id: "dia-de-independencia-2021.md";
  slug: "dia-de-independencia-2021";
  body: string;
  collection: "seeds";
  data: InferEntrySchema<"seeds">
} & { render(): Render[".md"] };
"digital-home-management.md": {
	id: "digital-home-management.md";
  slug: "digital-home-management";
  body: string;
  collection: "seeds";
  data: InferEntrySchema<"seeds">
} & { render(): Render[".md"] };
"error-fundacion-dominicana.md": {
	id: "error-fundacion-dominicana.md";
  slug: "error-fundacion-dominicana";
  body: string;
  collection: "seeds";
  data: InferEntrySchema<"seeds">
} & { render(): Render[".md"] };
"franken-php-with-laravel.md": {
	id: "franken-php-with-laravel.md";
  slug: "franken-php-with-laravel";
  body: string;
  collection: "seeds";
  data: InferEntrySchema<"seeds">
} & { render(): Render[".md"] };
"js-under-the-hood.md": {
	id: "js-under-the-hood.md";
  slug: "js-under-the-hood";
  body: string;
  collection: "seeds";
  data: InferEntrySchema<"seeds">
} & { render(): Render[".md"] };
"my-roadmap-on-web3.md": {
	id: "my-roadmap-on-web3.md";
  slug: "my-roadmap-on-web3";
  body: string;
  collection: "seeds";
  data: InferEntrySchema<"seeds">
} & { render(): Render[".md"] };
"no-ha-habido-un-presidente-bueno-en-rd.md": {
	id: "no-ha-habido-un-presidente-bueno-en-rd.md";
  slug: "no-ha-habido-un-presidente-bueno-en-rd";
  body: string;
  collection: "seeds";
  data: InferEntrySchema<"seeds">
} & { render(): Render[".md"] };
"pillars-of-web3.md": {
	id: "pillars-of-web3.md";
  slug: "pillars-of-web3";
  body: string;
  collection: "seeds";
  data: InferEntrySchema<"seeds">
} & { render(): Render[".md"] };
"sobre-dios.md": {
	id: "sobre-dios.md";
  slug: "sobre-dios";
  body: string;
  collection: "seeds";
  data: InferEntrySchema<"seeds">
} & { render(): Render[".md"] };
"state-management-in-vue.md": {
	id: "state-management-in-vue.md";
  slug: "state-management-in-vue";
  body: string;
  collection: "seeds";
  data: InferEntrySchema<"seeds">
} & { render(): Render[".md"] };
"the-perfect-productivity-system-should-have-no-more-than-3-views.md": {
	id: "the-perfect-productivity-system-should-have-no-more-than-3-views.md";
  slug: "the-perfect-productivity-system-should-have-no-more-than-3-views";
  body: string;
  collection: "seeds";
  data: InferEntrySchema<"seeds">
} & { render(): Render[".md"] };
"the-perfect-productivity-system-should-have-short-steps.md": {
	id: "the-perfect-productivity-system-should-have-short-steps.md";
  slug: "the-perfect-productivity-system-should-have-short-steps";
  body: string;
  collection: "seeds";
  data: InferEntrySchema<"seeds">
} & { render(): Render[".md"] };
"the-perfect-productivity-system.md": {
	id: "the-perfect-productivity-system.md";
  slug: "the-perfect-productivity-system";
  body: string;
  collection: "seeds";
  data: InferEntrySchema<"seeds">
} & { render(): Render[".md"] };
"thoughts-on-web-3.md": {
	id: "thoughts-on-web-3.md";
  slug: "thoughts-on-web-3";
  body: string;
  collection: "seeds";
  data: InferEntrySchema<"seeds">
} & { render(): Render[".md"] };
"vue-path.md": {
	id: "vue-path.md";
  slug: "vue-path";
  body: string;
  collection: "seeds";
  data: InferEntrySchema<"seeds">
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		"bookmarks": {
};
"books": {
};
"playlist": {
};
"posts": {
};

	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("./../src/content/config.js");
}
