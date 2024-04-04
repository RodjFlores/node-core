const os = require('os');

//info about current user

/*
{
  uid: -1,
  gid: -1,
  username: 'alean',
  homedir: 'C:\\Users\\alean',
  shell: null
}
*/
const user = os.userInfo()
console.log(user)

//uptime in seconds
const uptime = os.uptime();
console.log(uptime)

const currentOS =  {
    name:os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    freemem:os.freemem()
}

console.log(currentOS)