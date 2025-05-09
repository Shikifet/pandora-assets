import { ItemInteractionType } from 'pandora-common';

DefineAsset({
	name: 'Dildo Gag',
	size: 'medium',
	requireFreeHandsToUseDefault: true,
	graphics: 'graphics.json',
	colorization: {
		gag: {
			name: 'Gag',
			default: '#484F5B',
		},
		straps: {
			name: 'Straps',
			default: '#444444',
		},
	},
	preview: 'dildo_preview.png',
	attributes: {
		provides: [
			'Restraint',
			'Restraint_mouth',
			'Mouth_item',
			'Mouth_insert',
			'Mouth_insert_deep',
			'Mouth_cover',
		],
		requires: [
			'Mouth_open_wide',
			'!Mouth_tongue_out',
			'!Mouth_protruding',
			'!Mouth_cover',
		],
		covers: [
			'Mouth_item',
		],
	},
	modules: {
		lock: {
			type: 'lockSlot',
			name: 'Lock',
			lockedProperties: {
				blockAddRemove: true,
			},
		},
		gagType: {
			type: 'typed',
			name: 'Gag Type',
			interactionType: ItemInteractionType.ADD_REMOVE,
			variants: [
				{
					id: 'standard',
					name: 'Standard',
					default: true,
				},
				{
					id: 'thigh',
					name: 'Harness',
				},
			],
		},
	},
	effects: {
		lipsTouch: 9,
		jawMove: 9,
		tongueRoof: 7,
		mouthBreath: 6,
		throatBreath: 4,
		coherency: 7,
		stimulus: 6,
	},
	chat: {
		actionAdd: 'SOURCE_CHARACTER pushed ITEM_ASSET_NAME into TARGET_CHARACTER_DYNAMIC_POSSESSIVE mouth, strapping it tight.',
		actionRemove: 'SOURCE_CHARACTER loosened and then removed ITEM_ASSET_NAME from TARGET_CHARACTER_DYNAMIC_POSSESSIVE mouth.',
	},
	ownership: {
		responsibleContributor: 'ClaudiaMia <99583892+ClaudiaMia@users.noreply.github.com>',
		credits: ['ClaudiaMia'],
		modificationPolicy: `Fixes and New uses, otherwise ask`,
		reusePolicy: 'Ask first',
		licensing: [
			{
				source: 'Self-Made',
				copyrightHolder: 'ClaudiaMia',
				editedBy: 'ClaudiaMia',
				license: 'Pandora-Use-Only-v1-or-later',
			},
		],
	},
});
