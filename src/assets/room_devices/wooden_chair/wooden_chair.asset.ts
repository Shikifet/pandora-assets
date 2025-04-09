DefineRoomDeviceAsset({
	name: 'Wooden Chair',
	size: 'huge',
	preview: 'preview.png',
	colorization: {
		chair: {
			name: 'Chair',
			default: '#FF8E31',
		},
		cushion: {
			name: 'Cushion',
			default: '#ED2828',
		},
		rope: {
			name: 'Rope',
			default: '#D7AC4D',
		},
	},
	staticAttributes: ['Play_furniture'],
	slots: {
		seated: {
			name: 'Seated',
			asset: {
				name: 'Wooden Chair',
				size: 'huge',
				poseLimits: {
					legs: ['sitting'],
				},
			},
		},
	},
	modules: {
		armrests: {
			type: 'typed',
			name: 'Armrests',
			staticConfig: { slotName: 'seated' },
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
						stateFlags: {
							provides: ['armrests'],
						},
					},
				},
			],
		},
		accessories: {
			type: 'typed',
			name: 'Accessories',
			staticConfig: { slotName: 'seated' },
			variants: [
				{
					id: 'none',
					name: 'None',
					default: true,
				},
				{
					id: 'cushion',
					name: 'Cushion',
				},
			],
		},
		body: {
			type: 'typed',
			name: 'Body',
			staticConfig: { slotName: 'seated' },
			variants: [
				{
					id: 'free',
					name: 'Free',
					default: true,
				},
				{
					id: 'tied',
					name: 'Tied',
					properties: {
						slotProperties: {
							seated: {
								poseLimits: {
									bones: {
										arm_l: 90,
										arm_r: 90,
										elbow_l: [[-80, 90]],
										elbow_r: [[-80, 90]],
									},
								},
							},
						},
					},
				},
			],
		},
		wrists: {
			type: 'typed',
			name: 'Wrists',
			staticConfig: { slotName: 'seated' },
			variants: [
				{
					id: 'free',
					name: 'Free',
					default: true,
				},
				{
					id: 'tied',
					name: 'Tied',
					properties: {
						slotProperties: {
							seated: {
								poseLimits: {
									arms: {
										position: 'back',
									},
									bones: {
										arm_l: 90,
										arm_r: 90,
										elbow_l: -50,
										elbow_r: -50,
									},
								},
							},
						},
						stateFlags: {
							provides: ['tied_wrists'],
							requires: {
								armrests: 'Wrists cannot be tied without armrests',
							},
						},
					},
				},
			],
		},

		ankles: {
			type: 'typed',
			name: 'Ankles',
			staticConfig: { slotName: 'seated' },
			variants: [
				{
					id: 'free',
					name: 'Free',
					default: true,
				},
				{
					id: 'split',
					name: 'Split',
					properties: {
						slotProperties: {
							seated: {
								poseLimits: {
									bones: {
										leg_l: -16,
										leg_r: -16,
									},
								},
							},
						},
					},
				},
			],
		},
	},
	graphicsLayers: [
		{
			type: 'sprite',
			image: 'chair_base.png@432x811',
			colorizationKey: 'chair',
			offset: { x: -216, y: -745 },
		},
		{
			type: 'sprite',
			image: '',
			colorizationKey: 'chair',
			offset: { x: -216, y: -745 },
			imageOverrides: [
				{
					image: 'cushion_normal_shadow.png@432x811',
					condition: [
						[
							{
								module: 'accessories',
								operator: '=',
								value: 'cushion',
							},
							{
								module: 'armrests',
								operator: '=',
								value: 'no',
							},
						],
					],
				},
				{
					image: 'cushion_arms_shadow.png@432x811',
					condition: [
						[
							{
								module: 'accessories',
								operator: '=',
								value: 'cushion',
							},
							{
								module: 'armrests',
								operator: '=',
								value: 'yes',
							},
						],
					],
				},
			],
		},
		{
			type: 'sprite',
			image: '',
			colorizationKey: 'cushion',
			offset: { x: -216, y: -745 },
			imageOverrides: [
				{
					image: 'cushion_normal.png@432x811',
					condition: [
						[
							{
								module: 'accessories',
								operator: '=',
								value: 'cushion',
							},
							{
								module: 'armrests',
								operator: '=',
								value: 'no',
							},
						],
					],
				},
				{
					image: 'cushion_arms.png@432x811',
					condition: [
						[
							{
								module: 'accessories',
								operator: '=',
								value: 'cushion',
							},
							{
								module: 'armrests',
								operator: '=',
								value: 'yes',
							},
						],
					],
				},
			],
		},
		{
			type: 'sprite',
			image: '',
			colorizationKey: 'rope',
			offset: { x: -216, y: -740 },
			imageOverrides: [
				{
					image: 'wrists_armrests_back.png',
					condition: [
						[
							{
								module: 'wrists',
								operator: '=',
								value: 'tied',
							},
						],
					],
				},
			],
		},
		{
			type: 'sprite',
			image: '',
			colorizationKey: 'chair',
			offset: { x: -216, y: -740 },
			imageOverrides: [
				{
					image: 'chair_arms.png@432x811',
					condition: [
						[
							{
								module: 'armrests',
								operator: '=',
								value: 'yes',
							},
						],
					],
				},
			],
		},
		{
			type: 'slot',
			slot: 'seated',
			characterPosition: {
				offsetX: 0,
				offsetY: 0,
				relativeScale: 1,

			},

			characterPositionOverrides: [
				{
					position: {
						offsetX: 0,
						offsetY: 0,
						disablePoseOffset: true,
						pivotOffset: {
							x: 0,
							y: 0,
						},
					},
					condition: [

					],
				},
			],
		},
		{
			type: 'sprite',
			image: '',
			colorizationKey: 'rope',
			offset: { x: -216, y: -740 },
			imageOverrides: [
				{
					image: 'body.png',
					condition: [
						[
							{
								module: 'body',
								operator: '=',
								value: 'tied',
							},
						],
					],
				},
			],
		},
		{
			type: 'sprite',
			image: '',
			colorizationKey: 'rope',
			offset: { x: -216, y: -740 },
			imageOverrides: [
				{
					image: 'wrists_armrests.png',
					condition: [
						[
							{
								module: 'wrists',
								operator: '=',
								value: 'tied',
							},
						],
					],
				},
			],
		},
		{
			type: 'sprite',
			image: '',
			colorizationKey: 'rope',
			offset: { x: -216, y: -740 },
			imageOverrides: [
				{
					image: 'ankles_split.png@432x811',
					condition: [
						[
							{
								module: 'ankles',
								operator: '=',
								value: 'split',
							},
						],
					],
				},
			],
		},
	],
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
