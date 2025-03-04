DefineAsset({
	name: 'Kigurumi Mask',
	size: 'medium',
	requireFreeHandsToUseDefault: true,
	graphics: 'graphics.json',
	colorization: {
		mask: {
			name: 'Mask',
			//default: '#ECC7BA',
			//default: '#F1CCB3',
			default: '#FFE3D2',
		},
		eyebrows: {
			name: 'Eyebrows',
			default: '#555555',
		},
		eyeColor: {
			name: 'Eye Color',
			default: '#2D589B',
		},
		lashes: {
			name: 'Eyelashes',
			default: '#555555',
		},
		eyeBackground: {
			name: 'Eye Background',
			default: '#FFFFFF',
		},
		shine: {
			name: 'Eye Shine',
			default: '#A8CEE4CC',
			minAlpha: 0,
		},
		nose: {
			name: 'Nose',
			default: '#FFCEBECC',
			minAlpha: 0.1,
		},
		lips: {
			name: 'Lips',
			default: '#FCB6B4',
			minAlpha: 0,
		},

	},
	// size:200, y:197, centered
	preview: null,
	attributes: {
		hides: [
			'Hair',
			'Wig',
			'Ears',
			'Fantasy_ears',
			//'Mouth'
		],
	},
	modules: {
		mask: {
			type: 'typed',
			name: 'Mask',
			variants: [
				{
					id: 'open',
					name: 'Open',
					default: true,
				},
				{
					id: 'closed',
					name: 'Closed',
				},
			],
		},
	},

	chat: {
		actionAdd: 'SOURCE_CHARACTER put ITEM_ASSET_NAME over TARGET_CHARACTER_DYNAMIC_POSSESSIVE face.',
		actionRemove: 'SOURCE_CHARACTER removed ITEM_ASSET_NAME from TARGET_CHARACTER_DYNAMIC_POSSESSIVE face.',
	},
	ownership: {
		responsibleContributor: 'Shikifet <shikifet@gmail.com>',
		credits: ['Shikifet'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				source: 'Self-Made',
				copyrightHolder: 'Shikifet',
				editedBy: 'Shikifet',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
