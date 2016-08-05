var nconf = require('nconf');
process.env['store-cassandra:config:hosts'] = 'MyHost:MyPort';
process.env['redis:host'] = 'MyRedisHost';
process.env['redis:port'] = 'MyRedisPort';

var whitelist = [ 'store-cassandra', 'redis', 'help' ];
var defaultVals = {
  'store-cassandra': {
    config: {
      hosts: '192.168.168.192'
    }
  },
  redis: {
    host: '192.168.192.168',
    port: 13579
  }
};
nconf.add('memory')
  .env(whitelist)
  .argv()
  .defaults(defaultVals);

var cass_store = nconf.get('store-cassandra');
var redis_store = nconf.get('redis');
console.log(1, cass_store);
console.log(2, redis_store);

console.log(3, 'I expected store-cassandra to be:', { config: { hosts: 'MyHost:MyPort' } });
console.log(4, 'I expected redis to be:', { host: 'MyRedisHost', post: 'MyRedisPort' });
