DefineAsset({
	name: 'Crotch Jute Ropes',
	size: 'small',
	graphics: 'graphics.json',
	colorization: {
		rope: {
			name: 'Rope',
			default: '#D7AC4D',
		},
	},
	attributes: {
		provides: [
			'Restraint',
			'Restraint_legs',
			'Chastity',
		],
		requires: [
			'!Penis',
		],
	},
	// size:260, y:560, centered
	preview: 'preview.png',
	modules: {
		waist: {
			type: 'typed',
			name: 'Waist',
			variants: [
				{
					id: 'none',
					name: 'No',
					default: true,
				},
				{
					id: 'rope',
					name: 'Rope',
					properties: {
						attributes: {
							provides: [
								'Waist_rope_anchor_point',
							],
						},
					},
				},
			],
		},
		crotch: {
			type: 'typed',
			name: 'Crotch',
			variants: [
				{
					id: 'open',
					name: 'Open',

				},
				{
					id: 'rope',
					name: 'Rope',
					default: true,
					properties: {
						attributes: {
							provides: [
								'Vulva_cover',
								'Vulva_rope_anchor_point',
							],
							covers: [
								'Vulva_item',
							],
						},
					},
				},
				{
					id: 'knot',
					name: 'Knot',
					properties: {
						attributes: {
							provides: [
								'Vulva_cover',
								'Vulva_rope_anchor_point',
							],
							covers: [
								'Vulva_item',
							],
						},
					},
				},
			],
		},
		hips: {
			type: 'typed',
			name: 'Hips',
			variants: [
				{
					id: 'none',
					name: 'None',
					default: true,
					properties: {
						stateFlags: {
							requires: {
								thigs_free: 'Rope over hips not tied to thighs',
							},
						},
					},
				},
				{
					id: 'single',
					name: 'Single',
				},
			],
		},
		legs: {
			type: 'typed',
			name: 'Thighs',
			variants: [
				{
					id: 'none',
					name: 'None',
					default: true,
					properties: {
						stateFlags: {
							provides: [
								'thigs_free',
							],
						},
					},
				},
				{
					id: 'attached',
					name: 'Attached',
					properties: {
						attributes: {
							requires: [
								'Thight_rope_anchor_point',
							],
						},
					},
				},
			],
		},
	},
	chat: {
		actionAdd: 'SOURCE_CHARACTER tied Crotch Jute Ropes around TARGET_CHARACTER_DYNAMIC_POSSESSIVE body.',
		actionRemove: 'SOURCE_CHARACTER removed the Crotch Jute Ropes from TARGET_CHARACTER_DYNAMIC_POSSESSIVE body.',
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
