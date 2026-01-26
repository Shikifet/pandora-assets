export function CreateRopeColor(): {
	colorization: NonNullable<IntermediateBodypartAssetDefinition['colorization']>;
	modules: NonNullable<IntermediateBodypartAssetDefinition['modules']>;
} {
	const colorization: NonNullable<IntermediateBodypartAssetDefinition['colorization']> = {
		rope: {
			name: 'Rope',
			group: 'rope',
		},
	};
	const modules: NonNullable<IntermediateBodypartAssetDefinition['modules']> = {
		colorGroupRope: {
			type: 'typed',
			name: 'Group Rope Color',
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
						overrideColorKey: ['rope'],
					},
				},
			],
		},
	};
	return { colorization, modules };
}
