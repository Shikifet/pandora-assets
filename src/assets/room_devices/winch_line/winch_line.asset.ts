DefineRoomDeviceAsset({
	name: 'Winch Line',
	size: 'huge',
	//preview: 'preview.png',
	colorization: {
		bar: {
			name: 'Bar',
			default: '#8E8E8E',
		},
		cable: {
			name: 'Cable',
			default: '#8E8E8E',
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
					name: 'Retracted',
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
						offsetY: 0,
						disablePoseOffset: true,
						pivotOffset: {
							x: 0,
							y: 0,
						},
					},
					condition: [
						[

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
				x: -16,
				y: -950,
			},
			imageOverrides: [
			],
		},
		{
			type: 'sprite',
			image: 'winch_carabiner.png',
			colorizationKey: 'bar',
			offset: {
				x: -24,
				y: 10,
			},
			imageOverrides: [
			],
		},
		{
			type: 'sprite',
			image: 'winch_bar.png',
			colorizationKey: 'bar',
			offset: {
				x: -250,
				y: 0,
			},
			imageOverrides: [
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
