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
		colorGroupHair: {
			type: 'typed',
			name: 'Group Rope Color',
			variants: [
				{
					id: 'no',
					name: 'No',
				},
				{
					id: 'yes',
					name: 'Yes',
					default: true,
					properties: {
						overrideColorKey: ['rope'],
					},
				},
			],
		},
	};
	return { colorization, modules };
}
