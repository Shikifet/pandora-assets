DefineRoomDeviceAsset({
	name: 'Bar Stool',
	size: 'huge',
	preview: null,//'preview.png',
	colorization: {
		chair: {
			name: 'Chair',
			default: '#AC784E',
		},
		metal: {
			name: 'Metal',
			default: '#b1b1b1ff',
		},
		belts: {
			name: 'Belts',
			default: '#111111ff',
		},
	},
	staticAttributes: ['Play_furniture'],
	slots: {
		seated: {
			name: 'Sitting on the Bar Stool',
			asset: {
				name: 'Bar Stool',
				size: 'huge',
				poseLimits: {
					bones: {
						leg_l: -42,
						leg_r: -42,
					},
					legs: {
						pose: 'sitting',
					},
					view: 'front',
				},
				graphics: 'seated.json',
			},
		},
		kneeling: {
			name: 'Kneeling under Bar Stool',
			asset: {
				name: 'Bar Stool',
				size: 'huge',
				poseLimits: {
					legs: {
						pose: 'kneeling',
					},
					bones: {
						arm_l: [[81, 120]],
						arm_r: [[81, 120]],
						leg_l: [[-9, 6]],
						leg_r: [[-9, 6]],
					},
					view: 'back',
				},
				graphics: 'kneeling.json',
			},
		},
	},
	modules: {
		pillory: {
			type: 'typed',
			name: 'Pillory',
			staticConfig: { slotName: 'kneeling' },
			variants: [
				{
					id: 'open',
					name: 'Open',
				},
				{
					id: 'closed',
					name: 'Closed',
					default: true,
					properties: {
						slotProperties: {
							kneeling: {
								attributes: {
									hides: [
										'Hair_front',
									],
								},
							},
						},
						blockSlotsEnterLeave: ['kneeling'],
					},
				},
			],
		},
		kneeling_belts: {
			type: 'typed',
			name: 'Kneeling Slot: Belts',
			staticConfig: { slotName: 'kneeling' },
			variants: [
				{
					id: 'none',
					name: 'None',
					default: true,
				},
				{
					id: 'attached',
					name: 'Attached',
					properties: {
						slotProperties: {
							kneeling: {
								poseLimits: {
									arms: {
										position: 'back',
										rotation: 'forward',
									},
									bones: {
										arm_r: 104,
										arm_l: 104,
										elbow_r: -4,
										elbow_l: -4,
									},
									armsOrder: {
										upper: 'right',
									},
								},
							},
						},
						blockSlotsEnterLeave: ['kneeling'],
					},
				},
				{
					id: 'tight',
					name: 'Tight',
					properties: {
						slotProperties: {
							kneeling: {
								poseLimits: {
									arms: {
										position: 'back',
										rotation: 'forward',
									},
									bones: {
										arm_r: 110,
										arm_l: 110,
										elbow_r: -15,
										elbow_l: -15,
									},
									armsOrder: {
										upper: 'right',
									},
								},
							},
						},
						blockSlotsEnterLeave: ['kneeling'],
					},
				},
			],
		},
	},

	graphicsLayers: [
		{
			type: 'sprite',
			image: 'base.png',
			colorizationKey: 'metal',
			offset: { x: -500, y: -1500 },
		},
		{
			type: 'sprite',
			image: 'base_back_extra.png',
			colorizationKey: 'metal',
			offset: { x: -500, y: -1500 },
		},
		{
			type: 'sprite',
			image: 'base_back.png',
			colorizationKey: 'metal',
			offset: { x: -500, y: -1500 },
		},
		{
			type: 'sprite',
			image: 'base_front.png',
			colorizationKey: 'metal',
			offset: { x: -500, y: -1500 },
		},
		{
			type: 'sprite',
			image: 'chair_base.png',
			colorizationKey: 'chair',
			offset: { x: -500, y: -1500 },
		},
		{
			type: 'sprite',
			image: '',
			colorizationKey: 'chair',
			offset: { x: -500, y: -1500 },

			imageOverrides: [
				{
					image: 'chair_pillory.png',
					condition: [
						[
							{
								module: 'pillory',
								operator: '=',
								value: 'closed',
							},
						],
					],
				},
			]
		},


		{
			type: 'slot',
			slot: 'seated',
			characterPosition: {
				offsetX: 0,
				offsetY: -285,
				relativeScale: 1,
				disablePoseOffset: true,
				pivotOffset: {
					x: 0,
					y: 0,
				},
			},
			characterPositionOverrides: [

			],
		},

		{
			type: 'slot',
			slot: 'kneeling',
			characterPosition: {
				offsetX: 0,
				offsetY: 195,
				disablePoseOffset: true,
				pivotOffset: {
					x: 0,
					y: 0,
				},
			},
			characterPositionOverrides: [

			],
		},
	],
	pivot: {
		x: 8,
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
