DefineAsset({
	name: 'Bamboo Stick',
	size: 'medium',
	graphics: 'graphics.json',
	colorization: {
		bamboo: {
			name: 'Bamboo',
			default: '#EFCA7B',
		},
		rope: {
			name: 'Rope',
			default: '#D7AC4D',
		},
	},
	// size:350, y:455, centered
	preview: 'preview.png',
	attributes: {
		provides: [
			'Restraint',
			'Restraint_arms',
		],
	},
	poseLimits: {
		arms: {
			position: 'front',
		},
		armsOrder: {
			upper: 'left',
		},
	},
	modules: {
		hands: {
			type: 'typed',
			name: 'Hands',
			variants: [
				{
					id: 'free',
					name: 'Untied',
					default: true,
					properties: {
						poseLimits: {
							bones: {
								arm_r: 80,
								arm_l: 80,
								elbow_r: [[-80, 95]],
								elbow_l: [[-80, 95]],
							},
						},
					},
				},
				{
					id: 'tied_front',
					name: 'Cuffed',
					properties: {
						poseLimits: {
							bones: {
								arm_r: 80,
								arm_l: 80,
								elbow_r: 27,
								elbow_l: 27,
							},
						},
						effects: {
							blockHands: true,
						},
					},
				},
				{
					id: 'tied_thighs',
					name: 'Tied to Thighs',
					properties: {
						poseLimits: {
							bones: {
								arm_r: 80,
								arm_l: 80,
								elbow_r: 27,
								elbow_l: 27,
							},
						},
						effects: {
							blockHands: true,
						},
					},
				},
			],
		},
		vertical_bamboo: {
			type: 'typed',
			name: 'Vertical Bamboo',
			variants: [
				{
					id: 'no',
					name: 'No',
					default: true,
				},
				{
					id: 'yes',
					name: 'Yes',
					properties: {
						attributes: {
							requires: [
								'Back_knot_anchor_point',
							],
						},
					},
				},
			],
		},
	},
	chat: {
		actionAdd: 'SOURCE_CHARACTER tied Bamboo between TARGET_CHARACTER_DYNAMIC_POSSESSIVE body and arms.',
		actionRemove: 'SOURCE_CHARACTER removed the bamboo from TARGET_CHARACTER_DYNAMIC_POSSESSIVE body.',
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
