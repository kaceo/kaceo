async function fetchUserData(x) {
  // do some async things
  // check the network
  return {
    host: x.name,
    status: true,
  };
}

const mysites = [
  {
    name: 'bigben.telematiq.org'
  },
  {
    name: 'laksa.telematiq.org'
  },

]



module.exports = async function() {
  var rc=[]

  for (x of mysites) {
    let u = await fetchUserData(x);
    //console.log ('Sent ',x, 'received ', u)
    rc.push (u)
  }

  return rc

};
