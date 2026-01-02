DefineRoomDeviceAsset({
	name: 'Slave Transport System',
	size: 'huge',
	preview: null,// 'preview.png',
	colorization: {
		suitcase: {
			name: 'Suitcase',
			default: '#a5a5a5ff',
		},
		belts: {
			name: 'Belts',
			default: '#484848ff',
		},
		belts_buckles: {
			name: 'Belts Buckles',
			default: '#d7d7d7ff',
		},

	},
	staticAttributes: ['Play_furniture'],
	slots: {
		inside: {
			name: 'Inside',
			asset: {
				name: 'Slave Transport System',
				size: 'huge',
				poseLimits: {
					legs: {
						pose: 'kneeling',
					},
					bones: {
						character_rotation: 0,
						arm_l: 45,
						arm_r: 45,
						elbow_l: -130,
						elbow_r: -130,
						leg_l: -40,
						leg_r: -40,
					},
				},
			},
		},
	},
	modules: {
		/*position: {
			type: 'typed',
			name: 'Foam insert',
			staticConfig: { slotName: 'inside' },
			variants: [
				{
					id: 'legs_spread',
					name: 'Legs Spread',
					default: true,
					properties: {

					},
				},
				{
					id: 'legs_together',
					name: 'Legs Together',
					properties: {

					},
				}
			],
		},
		*/
		restraints: {
			type: 'typed',
			name: 'Foam insert',
			staticConfig: { slotName: 'inside' },
			variants: [
				{
					id: 'belts',
					name: 'Belts',
					default: true,
					properties: {

					},
				},
				{
					id: 'foam',
					name: 'Foam',
					properties: {

					},
				},
				{
					id: 'both',
					name: 'Both',
					properties: {

					},
				}
			],
		},
	},
	graphics: 'roomDeviceGraphics.json',
	pivot: {
		x: 0,
		y: 0,
	},
	stateFlagCombinations: [
		{
			requiredFlags: [],
			properties: {
				slotProperties: {
					inside: {
						attributes: {
							provides: [
							],
							requires: [],
						},
					},
				},
			},
		},
	],
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
