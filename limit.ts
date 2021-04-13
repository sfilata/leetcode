interface CustomRequest {
  url: string;
  timeout: number;
}
const urls: CustomRequest[] = [
  {
    url: 'image1',
    timeout: 1200
  },
  {
    url: 'image2',
    timeout: 3000
  },
  {
    url: 'image3',
    timeout: 1000
  },
  {
    url: 'image4',
    timeout: 800
  },
  {
    url: 'image5',
    timeout: 1500
  },
  {
    url: 'image6',
    timeout: 4000
  },
  {
    url: 'image7',
    timeout: 200
  },
  {
    url: 'image8',
    timeout: 1300
  }
];

function handler(data: CustomRequest) {
  return new Promise((resolve, reject) => {
    console.log(`Loading ${data.url} start!`);
    setTimeout(() => {
      console.log(`Loading ${data.url} ok!`);
      resolve('Success');
    }, data.timeout);
  });
}

function limit(urls: CustomRequest[], handler: Function, limit: number) {
  const requests = [...urls];

  const requestPool = requests.splice(0, limit).map((item, index) => {
    return handler(item).then(() => {
      return index;
    });
  });

  let p = Promise.race(requestPool);

  for (let i = 0; i < requests.length; i++) {
    p = p.then((res) => {
      requestPool[res] = handler(requests[i]).then(() => {
        return res;
      });
      return Promise.race(requestPool);
    });
  }
}

limit(urls, handler, 3);
