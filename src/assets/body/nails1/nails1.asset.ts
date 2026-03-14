import { ItemInteractionType } from 'pandora-common';

DefineBodypart({
	name: 'Nails',
	bodypart: 'bodymarks',
	allowRandomizerUsage: false,
	graphics: 'graphics.json',
	colorization: {
		nails: {
			name: 'Color',
			default: '#D61800'
		},
	},
	// size:320, y:383, centered
	preview: null,//'preview.png',
	attributes: {
		provides: [
			'Body_texture',
		],
	},
	modules: {
		toenails: {
			type: 'typed',
			name: 'Toenails',
			expression: 'Toenails',
			interactionType: ItemInteractionType.ACCESS_ONLY,
			variants: [
				{
					id: 'natural',
					name: 'Natural',
					default: true,
				},
				{
					id: 'painted',
					name: 'Painted',
				},
			],
		},
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
