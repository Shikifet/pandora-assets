DefineAsset({
	name: 'E-stim Breasts Pads',
	size: 'small',
	requireFreeHandsToUseDefault: false,
	graphics: 'graphics.json',
	colorization: {
		pads: {
			name: 'Pads',
			default: '#FF5EE3',
		},
	},
	//roomDeployment: {
	//	autoDeployRelativePosition: [50, -60, 0],
	//},
	preview: null,//'preview.png',
	attributes: {
		provides: [
			'Toy'
		],
	},
	modules: {
		pads: {
			type: 'typed',
			name: 'Pads',
			variants: [
				{
					id: 'none',
					name: 'None',
					default: true,
				},
				{
					id: 'left',
					name: 'Left',
				},
				{
					id: 'right',
					name: 'Right',
				},
				{
					id: 'both',
					name: 'Both',
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
