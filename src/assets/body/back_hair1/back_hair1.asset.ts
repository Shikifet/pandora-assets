import { DefineAsset } from '../../../tools';

DefineAsset({
	name: 'Back hair 1',
	bodypart: 'backhair',
	graphics: 'graphics.json',
	colorization: [
		{
			name: 'Hair',
			default: '#555555',
		},
		{
			name: 'Hair shine',
			default: '#AAAAAA',
		},
	],
});
