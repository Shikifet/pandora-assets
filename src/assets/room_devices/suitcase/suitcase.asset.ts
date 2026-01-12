DefineAsset({
	name: 'Suitcase',
	size: 'large',
	graphics: 'graphics.json',
	colorization: {
		suitcase: {
			name: 'Suitcase',
			default: '#D5D5D5',
		},
		restraints_support: {
			name: 'Restraints Support',
			default: '#E6E6E6',
		},
		restraints_belts: {
			name: 'Belts',
			default: '#363636ff',
		},
		restraints_belts_buckles: {
			name: 'Belts Buckles',
			default: '#9f9f9fff',
		}
	},
	// size:350, y:455, centered
	preview: null,//'preview.png',
	attributes: {
		provides: [
			'Restraint',
		],
	},
	poseLimits: {

	},
	modules: {
		status: {
			type: 'typed',
			name: 'Suitcase status',
			variants: [
				{
					id: 'closed',
					name: 'Closed',
					default: true,
				},
				{
					id: 'opened',
					name: 'Opened',
					properties: {
						poseLimits: {
							view: 'front',
							bones: {
								leg_r: -60,
								leg_l: -60,
								arm_r: [[75, 140]],
								elbow_r: [[-180, -125], [-15, 180]],
								arm_l: [[75, 140]],
								elbow_l: [[-180, -125], [-15, 180]],
							},
						},
					},
				},
			],
		},
	},
	chat: {
		actionAdd: 'SOURCE_CHARACTER put TARGET_CHARACTER_DYNAMIC_POSSESSIVE inside a ITEM_ASSET_NAME',
		actionRemove: 'SOURCE_CHARACTER take off TARGET_CHARACTER_DYNAMIC_POSSESSIVE from ITEM_ASSET_NAME',
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
