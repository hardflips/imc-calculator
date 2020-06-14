import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		progressData: {
			low: {
				range: 18.4,
				limit: 18.4
			},
			normal: {
				range: 6.5,
				limit: 24.9,
			},
			override: {
				range: 5,
				limit: 29.9,
			},
			obesity: {
				range: 9,
				limit: 38.9
			},
			morbid: {
				range: null,
				limit: 39
			}
		},
		idealWeightData: {
			female: [
				{
					weight: '41 - 51',
					height: 1.44
				},
				{
					weight: '42 - 52',
					height: 1.45
				},
				{
					weight: '43 - 53',
					height: 1.47
				},
				{
					weight: '44 - 56',
					height: 1.50
				},
				{
					weight: '46 - 57',
					height: 1.52
				},
				{
					weight: '47 - 59',
					height: 1.55
				},
				{
					weight: '48 - 61',
					height: 1.57
				},
				{
					weight: '50 - 63',
					height: 1.60
				},
				{
					weight: '51 - 65',
					height: 1.62
				},
				{
					weight: '53 - 67',
					height: 1.65
				},
				{
					weight: '55 - 69',
					height: 1.67
				},
				{
					weight: '57 - 59',
					height: 1.70
				},
				{
					weight: '58 - 72',
					height: 1.72
				},
				{
					weight: '60 - 76',
					height: 1.75
				},
				{
					weight: '62 - 78',
					height: 1.77
				},
				{
					weight: '65 - 80',
					height: 1.80
				},
				{
					weight: '68 - 83',
					height: 1.83
				}
			],
			male: [
				{
					weight: '50 - 59',
					height: 1.55
				},
				{
					weight: '52 - 61',
					height: 1.57
				},
				{
					weight: '53 - 63',
					height: 1.60
				},
				{
					weight: '54 - 65',
					height: 1.62
				},
				{
					weight: '56 - 67',
					height: 1.65
				},
				{
					weight: '57 - 69',
					height: 1.67
				},
				{
					weight: '59 - 72',
					height: 1.70
				},
				{
					weight: '61 - 74',
					height: 1.72
				},
				{
					weight: '63 - 76',
					height: 1.75
				},
				{
					weight: '64 - 78',
					height: 1.77
				},
				{
					weight: '66 - 80',
					height: 1.80
				},
				{
					weight: '68 - 82',
					height: 1.82
				},
				{
					weight: '70 - 85',
					height: 1.85
				},
				{
					weight: '73 - 88',
					height: 1.88
				},
				{
					weight: '76 - 90',
					height: 1.90
				},
				{
					weight: '79 - 92',
					height: 1.93
				}
			]
		}
	}
});

export default app;