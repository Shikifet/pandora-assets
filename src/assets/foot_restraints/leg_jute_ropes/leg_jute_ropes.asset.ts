DefineAsset({
	name: 'Leg Jute ropes',
	size: 'small',
	graphics: 'graphics.json',

	colorization: {
		rope: {
			name: 'Rope',
			default: '#C79A32',
		},
	},
	// size:415, y:940, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Restraint',
			'Restraint_legs',
		],

	},
	poseLimits: {
		options: [
			{
				legs: 'standing',
				bones: {
					leg_r: 2,
					leg_l: 2,
				},
			},
			{
				legs: 'sitting',
				bones: {
					leg_r: 2,
					leg_l: 2,
				},
			},
			{
				legs: 'kneeling',
				bones: {
					leg_r: 5,
					leg_l: 5,
				},
			},
		],
	},
	modules: {
		legs: {
			type: 'typed',
			name: 'Legs',
			variants: [
				{
					id: 'single',
					name: 'Single',

					default: true
				},
				{
					id: 'double',
					name: 'Double'
				},
				{
					id: 'complex',
					name: 'Complex'
				},
				{
					id: 'full',
					name: 'Full'
				}
			]
		},
		link: {
			type: 'typed',
			name: 'Link',
			variants: [
				{
					id: 'cinched',
					name: 'Cinched',
					default: true,
				},
				{
					id: 'linked',
					name: 'Linked',
				},
			]
		},
	},
	effects: {
		blockHands: true,
	},
	blockSelfAddRemove: true,
	chat: {
		actionAdd: 'SOURCE_CHARACTER tied Leg Jute Ropes around TARGET_CHARACTER_DYNAMIC_POSSESSIVE body.',
		actionRemove: 'SOURCE_CHARACTER removed the Leg Jute Ropes from TARGET_CHARACTER_DYNAMIC_POSSESSIVE body.',
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
