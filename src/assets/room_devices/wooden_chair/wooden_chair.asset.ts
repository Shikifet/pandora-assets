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
		arms: {
			type: 'typed',
			name: 'Arms',
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
								module: 'arms',
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
								module: 'arms',
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
								module: 'arms',
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
								module: 'arms',
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
			colorizationKey: 'chair',
			offset: { x: -216, y: -740 },
			imageOverrides: [
				{
					image: 'chair_arms.png@432x811',
					condition: [
						[
							{
								module: 'arms',
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
