DefineRoomDeviceAsset({
	name: 'Sybian',
	size: 'huge',
	preview: 'preview.png',
	colorization: {
		base: {
			name: 'Base',
			default: '#2F2F2F',
		},
		cover: {
			name: 'Cover',
			default: '#D51B1B',
		},
		ring: {
			name: 'Ring',
			default: '#D0D0D0',
		},
		dildo: {
			name: 'Dildo',
			default: '#FFFFFF',
		},
	},
	staticAttributes: ['Furniture', 'Play_furniture'],
	slots: {
		seated: {
			name: 'Seated',
			asset: {
				name: 'Sybian',
				size: 'huge',
				poseLimits: {
					legs: 'kneeling',
					view: 'front',
					bones: {
						leg_l: [[-180, -30]],
						leg_r: [[-180, -30]],
					},
				},
			},
		},
	},
	modules: {
		front_ring: {
			type: 'typed',
			name: 'Front_ring',
			staticConfig: { slotName: 'seated' },
			variants: [
				{
					id: 'hide',
					name: 'Hide',
				},
				{
					id: 'show',
					name: 'Show',
					default: true,
				},
				{
					id: 'attached',
					name: 'Attached to Collar',
					properties: {
						blockSlotsEnterLeave: ['seated'],
						slotProperties: {
							seated: {
								attributes: {
									requires: ['Collar_front_ring'],
								},
							},
						},
					},
				},
			],
		},
		lock_right: {
			type: 'lockSlot',
			name: 'Front ring lock',
			staticConfig: { slotName: 'seated' },
			lockedProperties: {
				blockModules: ['front_ring'],
			},
		},
		vibration: {
			type: 'typed',
			name: 'Vibration',
			staticConfig: { slotName: 'seated' },
			variants: [
				{
					id: 'crotch',
					name: 'Crotch',
					default: true,
				},
				{
					id: 'dildo',
					name: 'Dildo',
					properties: {
						slotProperties: {
							seated: {
								attributes: {
									provides: [
										'Toy',
										'Vulva_item',
										'Vulva_insert',
										'Vulva_insert_deep',
										'Crotch_protruding',
									],
									requires: ['Vulva_spread', '!Vulva_cover'],
								},
							},
						},
					},
				},
			],
		},
		brand: {
			type: 'typed',
			name: 'Accessories',
			staticConfig: { slotName: 'seated' },
			variants: [
				{
					id: 'hide',
					name: 'Hide',
					default: true,
				},
				{
					id: 'show',
					name: 'Show',
				},
			],
		},
	},
	graphicsLayers: [
		{
			type: 'sprite',
			image: 'base.png',
			colorizationKey: 'base',
			offset: { x: -500, y: -900 },
		},
		{
			type: 'sprite',
			image: 'top.png',
			colorizationKey: 'cover',
			offset: { x: -500, y: -900 },
		},
		{
			type: 'sprite',
			image: 'front.png',
			colorizationKey: 'base',
			offset: { x: -500, y: -900 },
		},
		{
			type: 'sprite',
			image: '',
			colorizationKey: 'ring',
			offset: { x: -500, y: -900 },
			imageOverrides: [
				{
					image: 'ring_front_down.png',
					condition: [
						[
							{
								module: 'front_ring',
								operator: '=',
								value: 'show',
							},
						],
					],
				},
				{
					image: 'ring_front_up.png',
					condition: [
						[
							{
								module: 'front_ring',
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
			image: '',
			offset: { x: -500, y: -900 },
			imageOverrides: [
				{
					image: 'label.png',
					condition: [
						[
							{
								module: 'brand',
								operator: '=',
								value: 'show',
							},
						],
					],
				},
			],
		},
		{
			type: 'sprite',
			image: 'vibration_base.png',
			colorizationKey: 'dildo',
			offset: { x: -500, y: -900 },
		},
		{
			type: 'sprite',
			image: '',
			colorizationKey: 'dildo',
			offset: { x: -500, y: -900 },
			imageOverrides: [
				{
					image: 'dildo.png',
					condition: [
						[
							{
								module: 'vibration',
								operator: '=',
								value: 'dildo',
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
			image: '',
			offset: { x: -500, y: -900 },
			imageOverrides: [
				{
					image: 'chain_collar.png',
					condition: [
						[
							{
								module: 'front_ring',
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
