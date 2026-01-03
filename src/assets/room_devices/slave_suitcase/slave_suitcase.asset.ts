DefineRoomDeviceAsset({
	name: 'Slave Transport System',
	size: 'huge',
	preview: null,// 'preview.png',
	colorization: {
		suitcase: {
			name: 'Suitcase',
			default: '#CECECEFF',
		},
		text: {
			name: 'Label',
			default: '#404040ff',
		},
		suitcase_background: {
			name: 'Suitcase Bottom',
			default: '#CECECEFF',
		},
		filler: {
			name: 'Filler',
			default: '#646464ff',
		},
		belts: {
			name: 'Belts',
			default: '#484848ff',
		},
		belts_buckles: {
			name: 'Belts Buckles',
			default: '#d7d7d7ff',
		},
		dildo: {
			name: 'Suitcase',
			default: '#d000bfff',
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
			name: 'Filler insert',
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
		door: {
			type: 'typed',
			name: 'Door',
			staticConfig: { slotName: 'inside' },
			variants: [
				{
					id: 'closed',
					name: 'Closed',
					properties: {
						stateFlags: {
							provides: ['closed_door'],
						},
					},
				},
				{
					id: 'open',
					name: 'Open',
					default: true,
				},
			],
		},
		door_type: {
			type: 'typed',
			name: 'Door Type',
			staticConfig: { slotName: 'inside' },
			variants: [
				{
					id: 'opaque',
					name: 'Opaque',
					properties: {
						stateFlags: {
							provides: ['blindness'],
						},
					},
				},
				{
					id: 'translucent',
					name: 'Translucent Window',
					default: true,
				},
			],
		},
		text: {
			type: 'text',
			name: 'Label',
			staticConfig: { slotName: 'inside' },
		},
		gag: {
			type: 'typed',
			name: 'Gag',
			staticConfig: { slotName: 'inside' },
			variants: [
				{
					id: 'none',
					name: 'None',
					default: true,
				},
				{
					id: 'dildo',
					name: 'Dildo',
					properties: {
						stateFlags: {
							provides: ['gagged'],
						},
						slotProperties: {
							inside: {
								effects: {
									lipsTouch: 9,
									jawMove: 9,
									tongueRoof: 7,
									mouthBreath: 6,
									throatBreath: 4,
									coherency: 7,
									stimulus: 6,
								},
							},
						},
					},
				}
			],
		},
		toys: {
			type: 'typed',
			name: 'Toys',
			staticConfig: { slotName: 'inside' },
			variants: [
				{
					id: 'none',
					name: 'None',
					default: true,
				},
				{
					id: 'dildo',
					name: 'Dildo',
					properties: {
						stateFlags: {
							provides: ['dildo'],
						},
					},
				}
			],
		},
		restraints: {
			type: 'typed',
			name: 'Filler insert',
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
					id: 'filler',
					name: 'Filler',
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
		filler: {
			type: 'typed',
			name: 'Filler Type',
			staticConfig: { slotName: 'inside' },
			variants: [
				{
					id: 'basic',
					name: 'Basic',
					default: true,
				},
				{
					id: 'foam',
					name: 'Foam',
				},
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
			requiredFlags: ['closed_door', 'gagged'],
			properties: {
				slotProperties: {
					inside: {
						attributes: {
							provides: [
								'Restraint',
								'Restraint_mouth',
								'Mouth_item',
								'Mouth_insert',
								'Mouth_insert_deep',
								'Mouth_cover',
							],
							requires: [
								'Mouth_open_wide',
								'!Mouth_tongue_out',
								'!Mouth_protruding',
								'!Mouth_cover',
							],
							covers: [
								'Mouth_item',
							],
						},
					},
				},
			},
		},
		{
			requiredFlags: ['closed_door', 'dildo'],
			properties: {
				slotProperties: {
					inside: {
						attributes: {
							provides: [
								'Toy',
								'Vulva_item',
								'Vulva_insert',
								'Vulva_insert_deep',
								'Crotch_protruding',
							],
							requires: ['Vulva_spread', '!Vulva_cover'],
						},
					},
				},
			},
		},
		{
			requiredFlags: ['closed_door', 'blindness'],
			properties: {
				slotProperties: {
					inside: {
						effects: {
							blind: 10,
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
