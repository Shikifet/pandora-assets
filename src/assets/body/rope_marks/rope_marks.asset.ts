import { ItemInteractionType } from 'pandora-common';

DefineBodypart({
	name: 'Rope Marks',
	bodypart: 'bodymarks',
	allowRandomizerUsage: false,
	graphics: 'graphics.json',
	colorization: {
		mark: {
			name: 'Color',
			default: '#F94B3356',
			minAlpha: 0.1,
		},
	},
	// size:400, y:440, centered
	preview: null,//'preview.png',
	attributes: {
		provides: [
			'Body_texture',
			'Bodymark',
		],
	},
	modules: {
		forearms: {
			type: 'typed',
			name: 'Fore Arms Marks',
			expression: 'Left Butt Marks',
			interactionType: ItemInteractionType.ACCESS_ONLY,
			variants: [
				{
					id: 'none',
					name: 'None',
					default: true,
				},
				{
					id: 'wrists',
					name: 'Wrists',
				},
				{
					id: 'fore',
					name: 'Fore Arms',
				},
			],
		},
		upperarms: {
			type: 'typed',
			name: 'Upper Arms Marks',
			expression: 'Left Butt Marks',
			interactionType: ItemInteractionType.ACCESS_ONLY,
			variants: [
				{
					id: 'none',
					name: 'None',
					default: true,
				},
				{
					id: 'upper',
					name: 'Upper Arms',
				},
			],
		},
		chest: {
			type: 'typed',
			name: 'Chest Marks',
			expression: 'Chest Marks',
			interactionType: ItemInteractionType.ACCESS_ONLY,
			variants: [
				{
					id: 'none',
					name: 'None',
					default: true,
				},
				{
					id: 'over',
					name: 'Over Breast',
				},
				{
					id: 'below',
					name: 'Below Breast',
				},
				{
					id: 'both',
					name: 'Both',
				},
			],
		},
		thighs: {
			type: 'typed',
			name: 'Thighs Marks',
			expression: 'Thighs Marks',
			interactionType: ItemInteractionType.ACCESS_ONLY,
			variants: [
				{
					id: 'none',
					name: 'None',
					default: true,
				},
				{
					id: 'one',
					name: 'One',
				},
				{
					id: 'two',
					name: 'Two',
				},
				{
					id: 'three',
					name: 'Three',
				},
			],
		},
		legs: {
			type: 'typed',
			name: 'Legs Marks',
			expression: 'Legs Marks',
			interactionType: ItemInteractionType.ACCESS_ONLY,
			variants: [
				{
					id: 'none',
					name: 'None',
					default: true,
				},
				{
					id: 'one',
					name: 'One',
				},
				{
					id: 'two',
					name: 'Two',
				},
				{
					id: 'three',
					name: 'Three',
				},
				{
					id: 'four',
					name: 'Four',
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
