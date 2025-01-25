DefineRoomDeviceAsset({
	name: 'Suspension Bamboo',
	size: 'huge',
	colorization: {
		frame: {
			name: 'Frame',
			default: '#AB8120',
		},
		bamboo: {
			name: 'Bamboo',
			default: '#EFCA7B',
		},
		rope: {
			name: 'Rope',
			default: '#D7AC4D',
		},
	},
	staticAttributes: ['Play_furniture'],
	slots: {
		under_bamboo: {
			name: 'Under the Bamboo',
			asset: {
				name: 'Suspension Bamboo',
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
			staticConfig: { slotName: 'under_bamboo' },
			variants: [
				{
					id: 'front',
					name: 'Front-facing',
					default: true,
					properties: {
						slotProperties: {
							under_bamboo: {
								poseLimits: {
									view: 'front',
									legs: ['standing']
								},
							}
						}
					}
				},
				{
					id: 'back',
					name: 'Back-facing',
					properties: {
						slotProperties: {
							under_bamboo: {
								poseLimits: {
									view: 'back',
									legs: ['standing']
								},
							}
						}
					}
				},
			]
		},

		configuration: {
			type: 'typed',
			name: "Chest Line",
			staticConfig: { slotName: 'under_bamboo' },
			variants: [
				{
					id: 'frame',
					name: 'Frame',
					default: true,
				},
				{
					id: 'hanging',
					name: 'Hanging',
				},
			]
		},
		chest_line: {
			type: 'typed',
			name: "Chest Line",
			staticConfig: { slotName: 'under_bamboo' },
			variants: [
				{
					id: 'none',
					name: 'None',
					default: true,
				},
				{
					id: 'standing',
					name: 'Standing',
					properties: {
						blockSlotsEnterLeave: ['under_bamboo'],
						slotProperties: {
							under_bamboo: {
								poseLimits: {
									legs: ['standing'],
									bones: {
										character_rotation: 0,
									}
								},
							}
						}
					}
				},
			]
		},
	},
	graphicsLayers: [
		{
			type: 'sprite',
			image: 'bamboo.png',
			colorizationKey: 'bamboo',
		},
		{
			type: 'sprite',
			image: '',
			colorizationKey: 'rope',
			imageOverrides: [
				{
					image: 'long_vertical_rope.png@64x1150',
					condition: [
						[
							{
								module: 'configuration',
								operator: '=',
								value: 'hanging',
							},
						],
					],
				}
			],

			offsetOverrides: [
				{
					offset: { x: 115, y: -1100 },
					condition: [
						[
							{
								module: 'configuration',
								operator: '=',
								value: 'hanging',
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
					image: 'long_vertical_rope.png@64x1150',
					condition: [
						[
							{
								module: 'configuration',
								operator: '=',
								value: 'hanging',
							},
						],
					],
				}
			],
			offsetOverrides: [
				{
					offset: { x: 1338, y: -1100 },
					condition: [
						[
							{
								module: 'configuration',
								operator: '=',
								value: 'hanging',
							},
						],
					],
				},
			],
		},
		{
			type: 'sprite',
			image: '',
			colorizationKey: 'frame',
			imageOverrides: [
				{
					image: 'bamboo_frame.png@2000x1650',
					condition: [
						[
							{
								module: 'configuration',
								operator: '=',
								value: 'frame',
							},
						],
					],
				}
			],

			offsetOverrides: [
				{
					offset: { x: -240, y: -250 },
					condition: [
						[
							{
								module: 'configuration',
								operator: '=',
								value: 'frame',
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
					image: 'bamboo_rope_frame.png@2020x350',
					condition: [
						[
							{
								module: 'configuration',
								operator: '=',
								value: 'frame',
							},
						],
					],
				}
			],
			offsetOverrides: [
				{
					offset: { x: -250, y: -250 },
					condition: [
						[
							{
								module: 'configuration',
								operator: '=',
								value: 'frame',
							},
						],
					],
				},
			],
		},
		{
			type: 'sprite',
			image: 'bamboo_rope_sides.png',
			colorizationKey: 'rope',
		},
		{
			type: 'sprite',
			image: '',
			colorizationKey: 'rope',
			imageOverrides: [
				{
					image: 'bamboo_rope_chest_line_standing.png',
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
								value: 'standing',
							},
						],
					],
				}
			],
		},
		{
			type: 'slot',
			slot: 'under_bamboo',
			characterPosition: {
				offsetX: 0,
				offsetY: 0,
				relativeScale: 1,
				pivotOffset: {
					x: 0,
					y: 0,
				},
			},
		},
		{
			type: 'sprite',
			image: '',
			colorizationKey: 'rope',
			imageOverrides: [
				{
					image: 'bamboo_rope_chest_line_standing.png',
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
								value: 'standing',
							},
						],
					],
				}
			],
		},


	],
	pivot: {
		x: 750,
		y: 1300,
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
