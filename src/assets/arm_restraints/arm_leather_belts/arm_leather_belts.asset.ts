import { CreateLeatherColor } from '../../../helpers/leather_base.ts';
const { colorization: baseColorization, modules: baseModules } = CreateLeatherColor();

DefineAsset({
	name: 'Arm Leather Belts',
	size: 'small',
	graphics: 'graphics.json',
	colorization: {
		...baseColorization,
		buckles: {
			name: 'Buckles',
			default: '#DADADA',
		}
	},
	// size:450, y:377, centered
	preview: null,
	attributes: {
		provides: [
			'Restraint',
			'Restraint_arms',
		],
	},
	modules: {
		...baseModules,
		shoulders: {
			type: 'typed',
			name: 'Shoulders',
			variants: [
				{
					id: 'no',
					name: 'No',
					default: true,
				},
				{
					id: 'yes',
					name: 'Yes',
				},
			],
		},
		elbows: {
			type: 'typed',
			name: 'Elbows',
			variants: [
				{
					id: 'no',
					name: 'No',
					default: true,
				},
				{
					id: 'yes',
					name: 'Yes',
				},
			],
		},
		forearms: {
			type: 'typed',
			name: 'Forearms',
			variants: [
				{
					id: 'no',
					name: 'No',
					default: true,
				},
				{
					id: 'yes',
					name: 'Yes',
				},
			],
		},
		wrists: {
			type: 'typed',
			name: 'Wrists',
			variants: [
				{
					id: 'no',
					name: 'No',
					default: true,
				},
				{
					id: 'yes',
					name: 'Yes',
					properties: {
						poseLimits: {
							arms: {
								position: 'back',
								rotation: 'forward',
							},
							bones: {
								arm_r: 110,
								arm_l: 110,
								elbow_r: -15,
								elbow_l: -15,
							},
							armsOrder: {
								upper: 'right',
							},
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
				blockModules: ['colorGroupLeather', 'shoulders', 'elbows', 'forearms', 'wrists'],
			},
		},
	},
	stateFlagCombinations: [

	],
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
