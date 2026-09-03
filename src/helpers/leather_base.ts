export function CreateLeatherColor(): {
	colorization: NonNullable<IntermediateBodypartAssetDefinition['colorization']>;
	modules: NonNullable<IntermediateBodypartAssetDefinition['modules']>;
} {
	const colorization: NonNullable<IntermediateBodypartAssetDefinition['colorization']> = {
		leather: {
			name: 'Leather',
			group: 'leather',
		},
		buckles: {
			name: 'Buckles',
			group: 'buckles',
		},
	};
	const modules: NonNullable<IntermediateBodypartAssetDefinition['modules']> = {
		colorGroupLeather: {
			type: 'typed',
			name: 'Group Leather Color',
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
						overrideColorKey: ['leather', 'buckles'],
					},
				},
			],
		},
	};
	return { colorization, modules };
}
