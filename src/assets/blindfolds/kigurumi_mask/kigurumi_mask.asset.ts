DefineAsset({
	name: 'Kigurumi Mask',
	size: 'medium',
	requireFreeHandsToUseDefault: true,
	graphics: 'graphics.json',
	colorization: {
		mask: {
			name: 'Mask',
			//default: '#ECC7BA',
			//default: '#F1CCB3',
			default: '#FFE3D2',
		},
		latches: {
			name: 'Latches',
			default: '#D5D5D5',
		},
		eyebrows: {
			name: 'Eyebrows',
			default: '#555555',
		},
		eyeColor: {
			name: 'Eye Color',
			default: '#2D589B',
		},
		lashes: {
			name: 'Eyelashes',
			default: '#555555',
		},
		eyeBackground: {
			name: 'Eye Background',
			default: '#FFFFFFD9',
			minAlpha: 0.85,
		},
		shine: {
			name: 'Eye Shine',
			default: '#A8CEE4CC',
			minAlpha: 0,
		},
		nose: {
			name: 'Nose',
			default: '#FFCEBECC',
			minAlpha: 0.1,
		},
		lips: {
			name: 'Lips',
			default: '#FCB6B4',
			minAlpha: 0,
		},

	},
	// size:200, y:197, centered
	preview: null,
	attributes: {
		provides: [
			'Restraint',
			'Headgear',
			'Headgear_hood',
			'Ear_item',
			'Ear_cover',
		],
		hides: [
			'Hair',
			'Wig',
			'Ears',
			'Fantasy_ears',
		],
		covers: [
			'Ear_item',
		],
	},
	modules: {
		mask: {
			type: 'typed',
			name: 'Mask',
			variants: [
				{
					id: 'open',
					name: 'Open',
					default: true,
				},
				{
					id: 'closed',
					name: 'Closed',
					properties: {
						attributes: {
							provides: [
								'Mouth_cover',
							],
						},
						stateFlags: {
							provides: [
								'mask_on'
							],
						},
					},
				},
			],
		},
		latches: {
			type: 'typed',
			name: 'Latches',
			variants: [
				{
					id: 'no',
					name: 'No',
				},
				{
					id: 'yes',
					name: 'Yes',
					default: true,
				},
			],
		},
		holes: {
			type: 'typed',
			name: 'Helmet Holes',
			variants: [
				{
					id: 'no',
					name: 'No',
				},
				{
					id: 'yes',
					name: 'Yes',
					default: true,
				},
			],
		},
		lenses: {
			type: 'typed',
			name: 'Lenses',
			variants: [
				{
					id: 'transparent',
					name: 'Transparent',
					default: true,
					properties: {
						attributes: {
							provides: [
								'Restraint_eyes',
							],
						},
					},
				},
				{
					id: 'translucent',
					name: 'Translucent',
					properties: {
						effects: {
							blind: 7,
						},
						attributes: {
							provides: [
								'Restraint_eyes',
							],
						},
						stateFlags: {
							requires: {
								mask_on: 'Lenses cannot be used without mask.'
							},
						},
					},
				},
				{
					id: 'opaque',
					name: 'Opaque',
					properties: {
						effects: {
							blind: 10,
						},
						attributes: {
							provides: [
								'Restraint_eyes',
							],
						},
						stateFlags: {
							requires: {
								mask_on: 'Lenses cannot be used without mask.'
							},
						},
					},
				},
			],
		},
		mouth: {
			type: 'typed',
			name: 'Mouth',
			variants: [
				{
					id: 'smile',
					name: 'Smile',
					default: true,
				},
				{
					id: 'grin',
					name: 'Grin',
					default: true,
				},
			],
		},
		gag: {
			type: 'typed',
			name: 'Gag',
			variants: [
				{
					id: 'no',
					name: 'No',
					default: true,
				},
				{
					id: 'dildo',
					name: 'Dildo',
					properties: {
						attributes: {
							requires: [
								'Mouth_open_wide',
								'!Mouth_tongue_out',
								'!Mouth_protruding',
								'!Mouth_cover',
							],
							provides: [
								'Restraint',
								'Restraint_mouth',
								'Mouth_item',
								'Mouth_insert',
								'Mouth_insert_deep',
							],
						},
						stateFlags: {
							requires: {
								mask_on: 'Gag cannot be used without mask'
							},
						},
						effects: {
							lipsTouch: 9,
							jawMove: 9,
							tongueRoof: 7,
							mouthBreath: 6,
							throatBreath: 4,
							coherency: 7,
							stimulus: 6,
						},
					},
				},
			],
		},
		lock: {
			type: 'lockSlot',
			name: 'Lock',
			lockedProperties: {
				blockAddRemove: true,
				blockModules: [
					'mask',
					'lenses',
					'gag',
				],
			},
		},
	},
	chat: {
		actionAdd: 'SOURCE_CHARACTER put ITEM_ASSET_NAME over TARGET_CHARACTER_DYNAMIC_POSSESSIVE face.',
		actionRemove: 'SOURCE_CHARACTER removed ITEM_ASSET_NAME from TARGET_CHARACTER_DYNAMIC_POSSESSIVE face.',
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
