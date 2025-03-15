DefineRoomDeviceAsset({
	name: 'Suspension Ring',
	size: 'huge',
	preview: 'preview.png',
	colorization: {
		ring: {
			name: 'Ring',
			default: '#E3E3E3',
		},
		rope: {
			name: 'Rope',
			default: '#D7AC4D',
		},
	},
	staticAttributes: ['Play_furniture'],
	slots: {
		under_ring: {
			name: 'Under the Ring',
			asset: {
				name: 'Suspension Ring',
				size: 'huge',
				poseLimits: {
					legs: ['standing', 'kneeling'],
				},
			},
		},
	},
	modules: {
		position: {
			type: 'typed',
			name: 'Position',
			staticConfig: { slotName: 'under_ring' },
			variants: [
				{
					id: 'front',
					name: 'Front-facing',
					default: true,
					properties: {
						slotProperties: {
							under_ring: {
								poseLimits: {
									view: 'front',
									legs: ['standing', 'kneeling'],
								},
								stateFlags: {
									provides: ['front_view'],
								},
							},
						},
					},
				},
				{
					id: 'back',
					name: 'Back-facing',
					properties: {
						slotProperties: {
							under_ring: {
								poseLimits: {
									view: 'back',
									legs: ['standing', 'kneeling'],
								},
								stateFlags: {
									provides: ['back_view'],
								},
							},
						},
					},
				},
			],
		},
		chest_line: {
			type: 'typed',
			name: 'Chest Line',
			staticConfig: { slotName: 'under_ring' },
			variants: [
				{
					id: 'none',
					name: 'None',
					default: true,
				},
				{
					id: 'kneeling',
					name: 'Floor',
					properties: {
						blockSlotsEnterLeave: ['under_ring'],
						slotProperties: {
							under_ring: {
								attributes: {
									requires: [
										'Back_knot_anchor_point',
									],
								},
								poseLimits: {
									legs: 'kneeling',
									bones: {
										character_rotation: 0,
										leg_l: [[-25, 6]],
										leg_r: [[-25, 6]],
									},
								},
							},
						},
					},
				},
				{
					id: 'suspended',
					name: 'Suspended',
					properties: {
						blockSlotsEnterLeave: ['under_ring'],
						slotProperties: {
							under_ring: {
								attributes: {
									requires: [
										'Back_knot_anchor_point',
									],
								},
								poseLimits: {
									legs: ['standing', 'kneeling'],
								},
								stateFlags: {
									provides: ['suspension_chest'],
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
			image: 'ceiling_line.png',
			colorizationKey: 'rope',
			offset: { x: 483, y: -580 },

		},
		{
			type: 'sprite',
			image: '',
			colorizationKey: 'ring',
			imageOverrides: [
				{
					image: 'metal_ring.png',
					condition: [
						[
							{
								module: 'position',
								operator: '=',
								value: 'front',
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
			imageOverrides: [
				{
					image: 'rope_ring_top.png',
					condition: [
						[
							{
								module: 'position',
								operator: '=',
								value: 'front',
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
			imageOverrides: [
				{
					image: 'chest_line_kneeling.png',
					condition: [
						[
							{
								module: 'position',
								operator: '=',
								value: 'front',
							},
							{
								module: 'chest_line',
								operator: '=',
								value: 'kneeling',
							},
						],
					],
				},
				{
					image: 'chest_line_center.png',
					condition: [
						[
							{
								module: 'position',
								operator: '=',
								value: 'front',
							},
							{
								module: 'chest_line',
								operator: '=',
								value: 'suspended',
							},
						],
					],
				},
			],
		},

		{
			type: 'slot',
			slot: 'under_ring',
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
								module: 'chest_line',
								operator: '=',
								value: 'suspended',
							},
						],
					],
				},
			],
		},
		{
			type: 'sprite',
			image: '',
			colorizationKey: 'ring',
			imageOverrides: [
				{
					image: 'metal_ring.png',
					condition: [
						[
							{
								module: 'position',
								operator: '=',
								value: 'back',
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
			imageOverrides: [
				{
					image: 'rope_ring_top.png',
					condition: [
						[
							{
								module: 'position',
								operator: '=',
								value: 'back',
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
			imageOverrides: [
				{
					image: 'chest_line_kneeling.png',
					condition: [
						[
							{
								module: 'position',
								operator: '=',
								value: 'back',
							},
							{
								module: 'chest_line',
								operator: '=',
								value: 'kneeling',
							},
						],
					],
				},
				{
					image: 'chest_line_center.png',
					condition: [
						[
							{
								module: 'position',
								operator: '=',
								value: 'back',
							},
							{
								module: 'chest_line',
								operator: '=',
								value: 'suspended',
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
			imageOverrides: [

			],
		},
	],
	pivot: {
		x: 500,
		y: 1750,
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
