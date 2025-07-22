DefineRoomDeviceAsset({
	name: 'Winch Line',
	size: 'huge',
	//preview: 'preview.png',
	colorization: {
		cable: {
			name: 'Cable',
			default: '#8E8E8E',
		},
		pulley: {
			name: 'Pulley',
			default: '#ACACAC',
		},
		chains: {
			name: 'Chains',
			default: '#CECECE',
		},
		bar: {
			name: 'Bar',
			default: '#595757',
		},
	},
	staticAttributes: ['Play_furniture'],
	slots: {
		under_winch: {
			name: 'Under the Winch',
			asset: {
				name: 'Winch',
				size: 'huge',
				poseLimits: {
					legs: {
						pose: ['standing', 'kneeling'],
					},
				},
			},
		},
	},
	modules: {
		position: {
			type: 'typed',
			name: 'Position',
			staticConfig: { slotName: 'under_winch' },
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
									legs: {
										pose: ['standing', 'kneeling'],
									},
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
									legs: {
										pose: ['standing', 'kneeling'],
									},
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
		cable: {
			type: 'typed',
			name: 'Cable',
			staticConfig: { slotName: 'under_winch' },
			variants: [
				{
					id: 'retracted',
					name: 'Retracted',
					default: true,
				},
				{
					id: 'extended',
					name: 'Extended',
				},
			],
		},
		attachment: {
			type: 'typed',
			name: 'Attachment',
			staticConfig: { slotName: 'under_winch' },
			variants: [
				{
					id: 'none',
					name: 'None',
					default: true
				},
				{
					id: 'spreader_bar',
					name: 'Spreader Bar',
					properties: {
						slotProperties: {
							under_winch: {
								stateFlags: {
									provides: ['spread_bar'],
								},
							},
						},
					},
				},
				{
					id: 'carabiner',
					name: 'Carabiner',
					properties: {
						slotProperties: {
							under_winch: {
								stateFlags: {
									provides: ['carabiner'],
								},
							},
						},
					},
				},
			],
		},
		spreader_bar: {
			type: 'typed',
			name: 'Spreader Bar',
			staticConfig: { slotName: 'under_winch' },
			variants: [
				{
					id: 'none',
					name: 'None',
					default: true,
				},
				{
					id: 'wrists_cuffed',
					name: 'Wrists Cuffed',
					properties: {
						slotProperties: {
							under_winch: {
								poseLimits: {
									bones: {
										arm_l: -70,
										elbow_l: -20,
										arm_r: -70,
										elbow_r: -20,
									},
								},
								attributes: {
									requires: [
										'Wrist_cuffs',
									],
								},
								stateFlags: {
									requires: {
										spread_bar: 'Wrists cannot be cuffed without a spreader bar attached to winch',
									},
								},
							},
						},
					},
				},
				{
					id: 'ankles_cuffed',
					name: 'Ankles Cuffed',
					properties: {
						slotProperties: {
							under_winch: {
								poseLimits: {
									bones: {
										character_rotation: 180,
										leg_l: -16,
										leg_r: -16,
									},
									legs: {
										pose: ['standing'],
									},
								},
								attributes: {
									requires: [
										'Ankle_cuffs',
									],
								},
								stateFlags: {
									requires: {
										spread_bar: 'Ankles cannot be cuffed without a spreader bar attached to winch',
									},
								},
							},
						},
					},
				},
			],
		},
		carabiner: {
			type: 'typed',
			name: 'Carabiner',
			staticConfig: { slotName: 'under_winch' },
			variants: [
				{
					id: 'none',
					name: 'None',
					default: true,
				},
				{
					id: 'wrist_tied',
					name: 'Wrist tied',
					properties: {
						slotProperties: {
							under_winch: {
								poseLimits: {
									bones: {
										arm_l: -90,
										elbow_l: -25,
										arm_r: -90,
										elbow_r: -25,
									},
								},
								attributes: {
									requires: [
										'Wrist_cuffs',
									],
								},
								stateFlags: {
									requires: {
										carabiner: 'Wrist cannot be cuffed without a carabiner attached to winch',
									},
								},
							},
						},
					},
				},
				{
					id: 'ankles_tied',
					name: 'Ankle tied',
					properties: {
						slotProperties: {
							under_winch: {
								poseLimits: {
									bones: {
										character_rotation: 180,
										leg_l: -2,
										leg_r: -2,
									},
									legs: {
										pose: ['standing'],
									},
								},
								attributes: {
									requires: [
										'Ankle_cuffs',
									],
								},
								stateFlags: {
									requires: {
										carabiner: 'Ankles cannot be cuffed without a carabiner attached to winch',
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
			type: 'slot',
			slot: 'under_winch',
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
						offsetY: -1700,
						disablePoseOffset: true,
					},
					condition: [
						[
							{
								module: 'cable',
								operator: '=',
								value: 'retracted',
							},
							{
								module: 'spreader_bar',
								operator: '=',
								value: 'ankles_cuffed',
							},
						],
						[
							{
								module: 'cable',
								operator: '=',
								value: 'retracted',
							},
							{
								module: 'carabiner',
								operator: '=',
								value: 'ankles_tied',
							},
						],
					],
				},
				{
					position: {
						offsetX: 0,
						offsetY: 0,
						disablePoseOffset: true,
						pivotOffset: {
							x: 0,
							y: 500,
						},
					},
					condition: [
						[
							{
								module: 'cable',
								operator: '=',
								value: 'retracted',
							},
							{
								module: 'spreader_bar',
								operator: '!=',
								value: 'none',
							},
						],
						[
							{
								module: 'cable',
								operator: '=',
								value: 'retracted',
							},
							{
								module: 'carabiner',
								operator: '!=',
								value: 'none',
							},
						],
					],
				},
				{
					position: {
						offsetX: 0,
						offsetY: -1200,
						disablePoseOffset: true,
					},
					condition: [
						[
							{
								module: 'spreader_bar',
								operator: '=',
								value: 'ankles_cuffed',
							},
						],
						[
							{
								module: 'carabiner',
								operator: '=',
								value: 'ankles_tied',
							},
						],
					],
				},
				{
					position: {
						offsetX: 0,
						offsetY: 0,
						disablePoseOffset: true,
					},
					condition: [
						[
							{
								module: 'spreader_bar',
								operator: '!=',
								value: 'none',
							},
						],
						[
							{
								module: 'carabiner',
								operator: '!=',
								value: 'none',
							},
						],
					],
				},
			],
		},
		{
			type: 'sprite',
			image: 'winch_cable.png',
			clipToRoom: true,
			colorizationKey: 'cable',
			offset: {
				x: -15,
				y: -950,
			},
			offsetOverrides: [
				{
					offset: { x: -15, y: -1450 },
					condition: [
						[
							{
								module: 'cable',
								operator: '=',
								value: 'retracted',
							},
						],
					],
				},
			],
		},
		{
			type: 'sprite',
			image: '',
			colorizationKey: 'bar',
			offset: {
				x: -250,
				y: 0,
			},
			imageOverrides: [
				{
					image: 'winch_bar.png',
					condition: [
						[
							{
								module: 'attachment',
								operator: '=',
								value: 'spreader_bar',
							},
						],
					],
				},
			],
			offsetOverrides: [
				{
					offset: { x: -250, y: -500 },
					condition: [
						[
							{
								module: 'cable',
								operator: '=',
								value: 'retracted',
							},
						],
					],
				},
			],
		},
		{
			type: 'sprite',
			image: '',
			colorizationKey: 'chains',
			offset: {
				x: -250,
				y: 0,
			},
			imageOverrides: [
				{
					image: 'winch_bar_carabiners.png',
					condition: [
						[
							{
								module: 'attachment',
								operator: '=',
								value: 'spreader_bar',
							},
							{
								module: 'spreader_bar',
								operator: '!=',
								value: 'none',
							},
						],
					],
				},
			],
			offsetOverrides: [
				{
					offset: { x: -250, y: -500 },
					condition: [
						[
							{
								module: 'cable',
								operator: '=',
								value: 'retracted',
							},
						],
					],
				},
			],
		},
		{
			type: 'sprite',
			image: '',
			colorizationKey: 'chains',
			offset: {
				x: -250,
				y: 0,
			},
			imageOverrides: [
				{
					image: 'winch_carabiner_chains.png',
					condition: [
						[
							{
								module: 'attachment',
								operator: '=',
								value: 'carabiner',
							},
							{
								module: 'carabiner',
								operator: '=',
								value: 'wrist_tied',
							},
						],
					],
				},
				{
					image: 'winch_carabiner_chains_ankles.png',
					condition: [
						[
							{
								module: 'attachment',
								operator: '=',
								value: 'carabiner',
							},
							{
								module: 'carabiner',
								operator: '=',
								value: 'ankles_tied',
							},
						],
					],
				},
			],
			offsetOverrides: [
				{
					offset: { x: -250, y: -500 },
					condition: [
						[
							{
								module: 'cable',
								operator: '=',
								value: 'retracted',
							},
						],
					],
				},
			],
		},
		{
			type: 'sprite',
			image: 'winch_pulley.png',
			colorizationKey: 'pulley',
			offset: {
				x: -25,
				y: 5,
			},
			offsetOverrides: [
				{
					offset: { x: -25, y: -495 },
					condition: [
						[
							{
								module: 'cable',
								operator: '=',
								value: 'retracted',
							},
						],
					],
				},
			],
		},
	],
	pivot: {
		x: 0,
		y: 1350,
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
