import { CreateLeatherColor } from '../../../helpers/leather_base.ts';
const { colorization: baseColorization, modules: baseModules } = CreateLeatherColor();

DefineAsset({
	name: 'Leather Harness',
	size: 'small',
	graphics: 'graphics.json',
	colorization: {
		...baseColorization,
		rings: {
			name: 'Rings',
			default: '#DADADA',
		},
	},
	//roomDeployment: {
	//	autoDeployRelativePosition: [75, -40, 0],
	//},
	// size:200, y:400, centered
	preview: null,//'preview.png',
	attributes: {
		provides: [
			'Restraint_torso',
		],
	},
	modules: {
		...baseModules,
		chest: {
			type: 'typed',
			name: 'Chest Model',
			variants: [
				{
					id: 'a',
					name: 'A',
					default: true,
				},
				{
					id: 'b',
					name: 'B',
				},

			],
		},
		waist: {
			type: 'typed',
			name: 'Chest Model',
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
