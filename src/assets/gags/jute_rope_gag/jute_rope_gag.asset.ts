DefineAsset({
	name: 'Jute Rope Gag',
	size: 'small',
	requireFreeHandsToUseDefault: true,
	graphics: 'graphics.json',
	colorization: {
		rope: {
			name: 'Rope',
			default: '#D7AC4D',
		},
	},
	// size:200, y:197, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Restraint',
			'Restraint_mouth',
			'Mouth_item',
			'Mouth_insert',
			'Mouth_cover',
		],
		requires: [
			'Mouth_open_wide',
			'!Mouth_protruding',
			'!Mouth_tongue_out',
			'!Mouth_cover',
		],
		covers: [
			'Mouth_item',
		],
	},
	modules: {
		gagType: {
			type: 'typed',
			name: 'Gag Type',
			variants: [
				{
					id: 'rope',
					name: 'Rope',
					properties: {
						effects: {
							lipsTouch: 2,
							jawMove: 3,
							tongueRoof: 3,
							mouthBreath: 4,
							throatBreath: 2,
							coherency: 2,
							stimulus: 1,
						},
					},
				},
				{
					id: 'knot',
					name: 'Knot',
					properties: {
						effects: {
							lipsTouch: 7,
							jawMove: 8,
							tongueRoof: 6,
							mouthBreath: 3,
							throatBreath: 2,
							coherency: 4,
							stimulus: 2,
						},
					},
				},
				{
					id: 'bit',
					name: 'Bit',
					default: true,
					properties: {
						effects: {
							lipsTouch: 8,
							jawMove: 9,
							tongueRoof: 7,
							mouthBreath: 4,
							throatBreath: 3,
							coherency: 5,
							stimulus: 2,
						},
					},
				},
			],
		},
	},
	effects: {
		lipsTouch: 6,
		jawMove: 3,
		tongueRoof: 2,
		mouthBreath: 2,
		throatBreath: 1,
		coherency: 2,
		stimulus: 1,
	},
	chat: {
		actionAdd: 'SOURCE_CHARACTER tied a Bamboo Gag tightly between TARGET_CHARACTER_DYNAMIC_POSSESSIVE teeth.',
		actionRemove: 'SOURCE_CHARACTER loosened and then removed the Bamboo Gag from TARGET_CHARACTER_DYNAMIC_POSSESSIVE mouth.',
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
