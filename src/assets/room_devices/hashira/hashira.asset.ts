DefineRoomDeviceAsset({
	name: 'Pillar',
	size: 'huge',
	preview: null,//'preview.png',
	colorization: {
		hashira: {
			name: 'Pillar',
			default: '#C28858',
		},

	},
	staticAttributes: ['Play_furniture'],
	slots: {
		front: {
			name: 'In front of pillar',
			asset: {
				name: 'Pillar',
				size: 'huge',
				poseLimits: {
					legs: {
						pose: ['standing', 'kneeling'],
					},
				},
				attributes: {
					provides: ['Hashira'],
				},
			},
		},
	},
	modules: {
		model: {
			type: 'typed',
			name: 'base',
			staticConfig: { slotName: 'front' },
			variants: [
				{
					id: 'indoor',
					name: 'Indoor',
					default: true,
				},
				{
					id: 'outdoor',
					name: 'Outdoor',
				},
			],
		},
		base: {
			type: 'typed',
			name: 'base',
			staticConfig: { slotName: 'front' },
			variants: [
				{
					id: 'none',
					name: 'None',
					default: true,
				},
				{
					id: 'show',
					name: 'Show',
				},
			],
		},
		saddle: {
			type: 'typed',
			name: 'saddle',
			staticConfig: { slotName: 'front' },
			variants: [
				{
					id: 'none',
					name: 'None',
					default: true,
				},
				{
					id: 'attached',
					name: 'Attached',
				},
			],
		},

	},

	graphicsLayers: [

		{
			type: 'sprite',
			image: 'hashira.png',
			clipToRoom: false,
			colorizationKey: 'hashira',
			offset: { x: -142, y: -3072 },
			imageOverrides: [
				{
					image: 'hashira_outdoor.png',
					condition: [
						[
							{
								module: 'model',
								operator: '=',
								value: 'outdoor',
							},
						],
					],
				},
			],
			offsetOverrides: [
				{
					offset: { x: -142, y: -1600 },
					condition: [
						[
							{
								module: 'model',
								operator: '=',
								value: 'outdoor',
							},
						],
					],
				},
			],
		},
		{
			type: 'sprite',
			image: '',
			colorizationKey: 'hashira',
			offset: { x: -142, y: -200 },
			imageOverrides: [
				{
					image: 'hashira_base.png',
					condition: [
						[
							{
								module: 'base',
								operator: '=',
								value: 'show',
							},
						],
					],
				},
			],
		},
		{
			type: 'slot',
			slot: 'front',
			characterPosition: {
				offsetX: 0,
				offsetY: 0,
				relativeScale: 1,
				pivotOffset: {
					x: 0,
					y: 0,
				},
			},

			characterPositionOverrides: [
				{
					position: {
						offsetX: 0,
						offsetY: 0,
						disablePoseOffset: true,
					},
					condition: [
						[
							{
								module: 'saddle',
								operator: '=',
								value: 'attached',
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
