DefineRoomDeviceAsset({
	name: 'One Bar Prison',
	size: 'huge',
	preview: null,//'preview.png',
	colorization: {
		dildo: {
			name: 'Dildo',
			default: '#606060ff',
		},
		bar: {
			name: 'Bar',
			default: '#F4F4F4',
		},
		base: {
			name: 'Base',
			default: '#F4F4F4',
		},

	},
	staticAttributes: ['Play_furniture'],
	slots: {
		over: {
			name: 'Over',
			asset: {
				name: 'One Bar Prison',
				size: 'huge',
				poseLimits: {
					legs: {
						pose: 'standing',
					},
					bones: {
						character_rotation: 0,
					},
				},
			},
		},
	},
	modules: {
		bar: {
			type: 'typed',
			name: 'Bar position',
			staticConfig: { slotName: 'over' },
			variants: [
				{
					id: 'retracted',
					name: 'Retracted',
					default: true,
					properties: {
						slotProperties: {
							over: {
								poseLimits: {
									bones: {
										leg_r: [[-37, 5]],
										leg_l: [[-37, 5]],
									},
								},
							},
						},
					},
				},
				{
					id: 'extended',
					name: 'Extended (Normal)',
					properties: {
						blockSlotsEnterLeave: ['over'],
						slotProperties: {
							over: {
								poseLimits: {
									bones: {
										leg_r: [[-6, 5]],
										leg_l: [[-6, 5]],
									},
								},
							},
						},
					},
				},
				{
					id: 'extendedMax',
					name: 'Extended (Tiptoeing)',
					properties: {
						blockSlotsEnterLeave: ['over'],
						slotProperties: {
							over: {
								poseLimits: {
									bones: {
										tiptoeing: [[160, 180]],
										leg_r: [[-6, 5]],
										leg_l: [[-6, 5]],
									},
								},
							},
						},
					},
				},
			],
		},
		lock_back: {
			type: 'lockSlot',
			name: 'Bar Lock',
			staticConfig: { slotName: 'over' },
			lockedProperties: {
				blockModules: ['bar'],
			},
		},
	},
	graphics: 'roomDeviceGraphics.json',
	pivot: {
		x: 0,
		y: 0,
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
