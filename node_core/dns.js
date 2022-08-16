import dns from 'dns';

dns.lookup('example.org', (err, address, family) => {
    console.log('address: %j family: IPv%s', address, family);
  });

  dns.resolve('example.org', 'Ns', (err, records) => {
    console.log(records);
  });