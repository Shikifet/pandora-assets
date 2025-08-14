DefineRoomDeviceAsset({
	name: 'Pillar',
	size: 'huge',
	preview: null,//'preview.png',
	colorization: {
		hashira: {
			name: 'Pillar',
			default: '#C28858',
		},
		rope: {
			name: 'Rope',
			default: '#D7AC4D',
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
				graphics: 'front.json',
			},
		},
	},
	modules: {
		model: {
			type: 'typed',
			name: 'Model',
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
		saddle: {
			type: 'typed',
			name: 'Saddle',
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
		chest: {
			type: 'typed',
			name: 'Chest',
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
		waist: {
			type: 'typed',
			name: 'Waist',
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
		legs: {
			type: 'typed',
			name: 'Legs',
			staticConfig: { slotName: 'front' },
			variants: [
				{
					id: 'none',
					name: 'None',
					default: true,
				},
				{
					id: 'futomomo',
					name: 'Futomomo',
					properties: {
						blockSlotsEnterLeave: ['front'],
						slotProperties: {
							front: {
								poseLimits: {
									legs: {
										pose: ['kneeling'],
									},
									bones: {
										leg_l: [[-100, -2]],
										leg_r: [[-100, -2]],
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
			image: 'hashira.png',
			clipToRoom: true,
			colorizationKey: 'hashira',
			offset: { x: -142, y: -3584 },
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
		/*
				{
					type: 'sprite',
					image: 'hashira_base.png',
					colorizationKey: 'hashira',
					offset: { x: -142, y: -180 },
				},
		*/
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
								module: 'chest',
								operator: '=',
								value: 'attached',
							},
						],
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
