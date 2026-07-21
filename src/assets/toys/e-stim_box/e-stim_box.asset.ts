DefineAsset({
	name: 'E-stim Box',
	size: 'small',
	requireFreeHandsToUseDefault: false,
	graphics: 'graphics.json',
	colorization: {
		belt: {
			name: 'Belt',
			default: '#444444',
		},
		box_base: {
			name: 'Box',
			default: '#000000',
		},
		box_details: {
			name: 'Box Details',
			default: '#c4c100',
		},
		box_leds: {
			name: 'Leds',
			default: '#c70000'
		},
		wires: {
			name: 'Wires',
			default: '#ffffff'
		},
	},
	//roomDeployment: {
	//	autoDeployRelativePosition: [50, -60, 0],
	//},
	preview: null,//'preview.png',
	attributes: {
		provides: [
			'Toy',
		],
	},
	modules: {
		power: {
			type: 'typed',
			name: 'Output A',
			variants: [
				{
					id: 'none',
					name: 'None',
					default: true,
				},
				{
					id: 'power_a',
					name: 'Output A',
				},
				{
					id: 'power_b',
					name: 'Output B',
				},
				{
					id: 'power_ab',
					name: 'Output A+B',
				},
			],
		},
		output_a: {
			type: 'typed',
			name: 'Output A',
			variants: [
				{
					id: 'no',
					name: 'No',
					default: true,
					properties: {
						stateFlags: {
							provides: ['none_a'],
						},
					},
				},
				{
					id: 'cage',
					name: 'Cage',
					properties: {
						attributes: {
							requires: ['Chastity_cage_estim_node'],
						},
						stateFlags: {
							provides: ['cage_a'],
						},
					},
				},
				{
					id: 'plug',
					name: 'Plug',
					properties: {
						stateFlags: {
							provides: ['plug_a'],
						},
					},
				},
			],
		},
		output_b: {
			type: 'typed',
			name: 'Output B',
			variants: [
				{
					id: 'no',
					name: 'No',
					default: true,
					properties: {
						stateFlags: {
							provides: ['none_b'],
						},
					},
				},
				{
					id: 'cage',
					name: 'Cage',
					properties: {
						attributes: {
							requires: ['Chastity_cage_estim_node'],
						},
						stateFlags: {
							provides: ['cage_b'],
						},
					},
				},
				{
					id: 'plug',
					name: 'Plug',
					properties: {
						stateFlags: {
							provides: ['plug_b'],
						},
					},
				},
			],
		},
	},
	stateFlagCombinations: [
		{
			requiredFlags: ['cage_a', 'cage_b'],
			properties: {
				stateFlags: {
					requires: {
						none_a: 'Cage already attached to power',
					},
				},
			},
		},
		{
			requiredFlags: ['plug_a', 'plug_b'],
			properties: {
				stateFlags: {
					requires: {
						none_a: 'Plug already attached to power',
					},
				},
			},
		},
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
