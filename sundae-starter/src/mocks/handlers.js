import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('http://localhost:3030/scoops', () => {
    return HttpResponse.json([
      {
        name: 'Chocolate scoop', imagePath: '/images/chocolate.png',
      },
      {
        name: 'Vanilla scoop', imagePath: '/images/vanilla.png',
      },
    ])
  }),
  http.get('http://localhost:3030/toppings', () => {
    return HttpResponse.json([
      {
        name: 'Cherries', imagePath: '/images/cherries.png',
      },
      {
        name: 'Hot fudge', imagePath: '/images/hot-fudge.png',
      },
    ])
  }),
];
