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
		bolts: {
			name: 'Bolts',
			default: '#DADADA',
		},
	},
	//roomDeployment: {
	//autoDeployRelativePosition: [75, -40, 0],
	//},
	// size:450, y:377, centered
	preview: 'preview_white.png',
	attributes: {
		provides: [
			'Restraint',
			'Restraint_torso',
		],
	},
	modules: {
		...baseModules,
		chest: {
			type: 'typed',
			name: 'Chest',
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
		waist: {
			type: 'typed',
			name: 'Waist Extension',
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
						stateFlags: {
							provides: ['waist_ring'],
						},
					},
				},
			],
		},
		hips: {
			type: 'typed',
			name: 'Hips',
			variants: [
				{
					id: 'no',
					name: 'No',
					default: true,
				},
				{
					id: 'basic',
					name: 'Basic',
				},
				{
					id: 'center_ring',
					name: 'Center Ring',
					properties: {
						stateFlags: {
							requires: {
								waist_ring: 'Hips center ring requires waist ring',
							},
						},
					},
				},
			],
		},
		thighs: {
			type: 'typed',
			name: 'Thighs',
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
