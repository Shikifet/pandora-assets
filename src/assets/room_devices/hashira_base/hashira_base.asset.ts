DefineRoomDeviceAsset({
	name: 'Pillar (Base)',
	size: 'huge',
	preview: 'preview.png',
	colorization: {
		hashira: {
			name: 'Pillar (Base)',
			default: '#AC784E',
		},
	},
	staticAttributes: ['Floor'],
	slots: {},
	modules: {
		model: {
			type: 'typed',
			name: 'Model',
			staticConfig: { slotName: null },
			variants: [
				{
					id: 'basic',
					name: 'Basic',
					default: true,
				},
				{
					id: 'extra_base',
					name: 'Extra Base',
				},
			],
		},
	},
	graphicsLayers: [
		{
			type: 'sprite',
			image: 'hashira_base.png',
			colorizationKey: 'hashira',
			offset: { x: -142, y: -180 },

			imageOverrides: [
				{
					image: 'hashira_base_big.png',
					condition: [
						[
							{
								module: 'model',
								operator: '=',
								value: 'extra_base',
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
