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
					weight: '45 - 52',
					height: 1.50
				},
				{
					weight: '44 - 46',
					height: 1.52
				},
				{
					weight: '47 - 48',
					height: 1.55
				},
				{
					weight: '48 - 51',
					height: 1.57
				},
				{
					weight: '49 - 53',
					height: 1.60
				},
				{
					weight: '51 - 56',
					height: 1.63
				},
				{
					weight: '52 - 59',
					height: 1.65
				},
				{
					weight: '53 - 62',
					height: 1.68
				},
				{
					weight: '55 - 64',
					height: 1.70
				},
				{
					weight: '56 - 67',
					height: 1.73
				},
				{
					weight: '58 - 69',
					height: 1.75
				},
				{
					weight: '60 - 76',
					height: 1.78
				},
				{
					weight: '61 - 77',
					height: 1.80
				},
				{
					weight: '63 - 80',
					height: 1.83
				},
				{
					weight: '65 - 82',
					height: 1.85
				}
			],
			male: [
				{
					weight: '52 - 55',
					height: 1.57
				},
				{
					weight: '54 - 58',
					height: 1.60
				},
				{
					weight: '57 - 62',
					height: 1.63
				},
				{
					weight: '59 - 66',
					height: 1.65
				},
				{
					weight: '61 - 69',
					height: 1.68
				},
				{
					weight: '63 - 73',
					height: 1.70
				},
				{
					weight: '66 - 77',
					height: 1.73
				},
				{
					weight: '68 - 79',
					height: 1.75
				},
				{
					weight: '70 - 80',
					height: 1.78
				},
				{
					weight: '64 - 81',
					height: 1.80
				},
				{
					weight: '75 - 91',
					height: 1.83
				},
				{
					weight: '77 - 95',
					height: 1.85
				},
				{
					weight: '79 - 98',
					height: 1.88
				},
				{
					weight: '82 - 102',
					height: 1.91
				},
				{
					weight: '84 - 106',
					height: 1.93
				}
			]
		}
	}
});

export default app;