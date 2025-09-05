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

		seated: {
			type: 'typed',
			name: 'Seated One',
			staticConfig: { slotName: 'seated' },
			variants: [
				{
					id: 'normal',
					name: 'Normal',
				},
				{
					id: 'hands_tied',
					name: 'Behind Backrest',
					default: true,
					properties: {
						slotProperties: {
							seated: {
								poseLimits: {
									arms: {
										position: 'back',
									},
									/*bones: {
										arm_l: [[81, 120]],
										arm_r: [[81, 120]],
										elbow_l: [[-35, 15]],
										elbow_r: [[-35, 15]],
									},
									rightArm: {
										fingers: 'fist',
									},
									leftArm: {
										fingers: 'fist',
									},*/
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
			image: 'chair_base.png',
			colorizationKey: 'chair',
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
		{
			type: 'slot',
			slot: 'seated',
			characterPosition: {
				offsetX: 0,
				offsetY: 0,
				relativeScale: 0,
				disablePoseOffset: true,
				pivotOffset: {
					x: 0,
					y: 0,
				},
			},
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
