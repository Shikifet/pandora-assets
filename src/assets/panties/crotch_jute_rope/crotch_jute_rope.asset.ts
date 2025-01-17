DefineAsset({
	name: 'Crotch Jute Rope',
	size: 'small',
	graphics: 'graphics.json',
	colorization: {
		rope: {
			name: 'Rope',
			default: '#D7AC4D',
		},
	},
	modules: {
		crotch: {
			type: 'typed',
			name: 'Crotch',
			variants: [
				{
					id: 'open',
					name: 'Open'

				},
				{
					id: 'rope',
					name: 'Rope',
					default: true,
					properties: {
						attributes: {
							provides: [
								'Vulva_cover',
								'Vulva_rope_anchor_point'
							],
							covers: [
								'Vulva_item',
							],
						}
					}
				},
				{
					id: 'knot',
					name: 'Knot',
					properties: {
						attributes: {
							provides: [
								'Vulva_cover',
								'Vulva_rope_anchor_point'
							],
							covers: [
								'Vulva_item',
							],
						}
					}
				}
			]
		},
		hips: {
			type: 'typed',
			name: 'Hips',
			variants: [
				{
					id: 'none',
					name: 'None',
					default: true
				},
				{
					id: 'single',
					name: 'Single'
				}
			]
		},
		legs: {
			type: 'typed',
			name: 'Thighs',
			variants: [
				{
					id: 'none',
					name: 'None',
					default: true
				},
				{
					id: 'attached',
					name: 'Attached'
				}
			]
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
