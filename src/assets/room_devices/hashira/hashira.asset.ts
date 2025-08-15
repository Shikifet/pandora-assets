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
					name: 'Tied to Pillar',
				},
				{
					id: 'suspended',
					name: 'Suspended',
					properties: {
						slotProperties: {
							front: {
								attributes: {
									requires: [
										'Back_knot_anchor_point',
									],
								},
							},
						},
					},
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
					name: 'Tied to Pillar',
				},
			],
		},
		thighs: {
			type: 'typed',
			name: 'Thighs',
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
								stateFlags: {
									provides: ['futomomo'],
								},
							},
						},
					},
				},
			],
		},
		futomomo: {
			type: 'typed',
			name: 'Futomomo Rope to Pillar',
			staticConfig: { slotName: 'front' },
			variants: [
				{
					id: 'none',
					name: 'None',
					default: true,
					properties: {
						blockSlotsEnterLeave: ['front'],
						slotProperties: {
							front: {
								stateFlags: {
									requires: {
										futomomo: 'This pose require thighs tied in futomomo position',
									},
								},
							},
						},
					},
				},
				{
					id: 'loose',
					name: 'Loose',
					properties: {
						blockSlotsEnterLeave: ['front'],
						slotProperties: {
							front: {
								stateFlags: {
									requires: {
										futomomo: 'This pose require thighs tied in futomomo position',
									},
								},
							},
						},
					},
				},
				{
					id: 'medium',
					name: 'Medium',
					properties: {
						blockSlotsEnterLeave: ['front'],
						slotProperties: {
							front: {
								poseLimits: {
									bones: {
										leg_l: [[-100, -40]],
										leg_r: [[-100, -40]],
									},
								},
								stateFlags: {
									requires: {
										futomomo: 'This pose require thighs tied in futomomo position',
									},
								},
							},
						},
					},
				},
				{
					id: 'short',
					name: 'Short',
					properties: {
						blockSlotsEnterLeave: ['front'],
						slotProperties: {
							front: {
								poseLimits: {
									bones: {
										leg_l: [[-100, -60]],
										leg_r: [[-100, -60]],
									},
								},
								stateFlags: {
									requires: {
										futomomo: 'This pose require thighs tied in futomomo position',
									},
								},
							},
						},
					},
				},
				{
					id: 'very_short',
					name: 'Very Short',
					properties: {
						blockSlotsEnterLeave: ['front'],
						slotProperties: {
							front: {
								poseLimits: {
									bones: {
										leg_l: -80,
										leg_r: -80,
									},
								},
								stateFlags: {
									requires: {
										futomomo: 'This pose require thighs tied in futomomo position',
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
			type: 'sprite',
			image: '',
			colorizationKey: 'rope',
			offset: { x: -500, y: -2000 },

			imageOverrides: [
				{
					image: 'hashira_rope_top_link.png',
					condition: [
						[
							{
								module: 'chest',
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
								value: 'suspended',
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

		{
			type: 'sprite',
			image: 'hashira_rope_top_normal.png',
			colorizationKey: 'rope',
			offset: { x: -500, y: -2000 },

			imageOverrides: [
				{
					image: 'hashira_rope_top.png',
					condition: [
						[
							{
								module: 'chest',
								operator: '=',
								value: 'suspended',
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
