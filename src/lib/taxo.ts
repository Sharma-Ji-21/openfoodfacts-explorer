export type LocalizedString = Record<string, string>;

export function getOrDefault<T>(localized: Record<string, T>, lang: string): T | undefined {
	return localized[lang] ?? localized['en'] ?? Object.values(localized)[0];
}

export type Taxonomy<T extends TaxoNode = TaxoNode> = Record<string, T | undefined>;

export type TaxoNode = {
	name: LocalizedString;
	parents?: string[];
	children?: string[];
	wikidata_category?: LocalizedString;
	wikidata?: LocalizedString;
	synonyms?: Record<string, string[]>;
};

export type Label = TaxoNode & {
	country: LocalizedString;
	auth_url: LocalizedString;
};

export type Category = TaxoNode & {
	agribalyse_food_code?: LocalizedString;
	ciqual_food_name?: LocalizedString;
};

export type Store = TaxoNode & {};

export type Brand = TaxoNode & {};
