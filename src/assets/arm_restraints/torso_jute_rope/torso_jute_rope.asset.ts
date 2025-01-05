DefineAsset({
	name: 'Jute rope',
	size: 'small',
	graphics: 'graphics.json',
	colorization: {
		rope: {
			name: 'Rope',
			default: '#C79A32',
		},
	},
	preview: 'takate_kote_front_v2_over.png',
	poseLimits: {
		arms: {
			position: 'back',
			rotation: 'forward',
		},
		bones: {
			arm_r: 90,
			arm_l: 90,
			elbow_r: 145,
			elbow_l: 145,
		},
		armsOrder: {
			upper: 'right',
		},
	},
	attributes: {
		provides: [
			'Restraint',
			'Restraint_arms',
		],
	},
	modules: {
		cinch: {
			type: 'typed',
			name: 'Cinch',
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
			]
		},
		front: {
			type: 'typed',
			name: 'Cinch',
			variants: [
				{
					id: 'arms_only',
					name: 'Arms Only',
				},
				{
					id: 'over_shoulder',
					name: 'Over Shoulder',
					default: true,
				},
			]
		}
	},
	effects: {
		blockHands: true,
	},
	blockSelfAddRemove: true,
	chat: {
		actionAdd: 'SOURCE_CHARACTER tied up a harness over TARGET_CHARACTER_DYNAMIC_POSSESSIVE, tightening it over the chest.',
		actionRemove: 'SOURCE_CHARACTER loosened and then removed the harness from TARGET_CHARACTER_DYNAMIC_POSSESSIVE.',
	},
	ownership: {
		responsibleContributor: 'shikifet@gmail.com',
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
