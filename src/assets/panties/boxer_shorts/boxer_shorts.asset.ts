DefineAsset({
	name: 'Boxer Shorts',
	size: 'medium',
	graphics: 'graphics.json',
	colorization: {
		waistBand: {
			name: 'Waistband',
			default: '#CDCDCD',
		},
		shorts: {
			name: 'Shorts',
			default: '#ECECEC',
		},
	},
	// size:270, y:585, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Clothing',
			'Underwear',
			'Underwear_pants',
		],
		hides: ['Penis'],
	},
	ownership: {
		responsibleContributor: 'Kane <59668834+Kane-678@users.noreply.github.com>',
		credits: ['Kane'],
		modificationPolicy: 'Fixes only, otherwise ask',
		reusePolicy: 'Ask first',
		licensing: [
			{
				source: 'Self-Made',
				copyrightHolder: 'Kane',
				editedBy: 'Kane',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
