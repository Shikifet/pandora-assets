DefineRoomDeviceAsset({
	name: 'Ishidaki Board',
	size: 'huge',
	preview: null,//'preview.png',
	colorization: {
		soroban: {
			name: 'Soroban',
			default: '#AC784E',
		},
		rope: {
			name: 'Rope',
			default: '#D7AC4D',
		},
	},
	staticAttributes: ['Play_furniture'],
	slots: {
		over_board: {
			name: 'Kneeling over Soroban',
			asset: {
				name: 'Soroban',
				size: 'huge',
				poseLimits: {
					legs: {
						pose: 'kneeling',
					},
					bones: {
						leg_l: [[-12, 4]],
						leg_r: [[-12, 4]],
						character_rotation: 0,
					},
				},
			},
		},
	},
	graphics: 'roomDeviceGraphics.json',
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
