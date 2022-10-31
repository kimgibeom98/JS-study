const members = ['egoing', 'k8805', 'hoya'];
members[1];

let i = 0;
while(i < members.length){
  console.log(members[i]);
  i = i + 1;
}

const roles = {
  'programmer': 'egoing',
  'designer': 'k8805',
  'manager': 'hoya'
};

roles.designer;

for(const name in roles){
  console.log(name)
  console.log(roles[name])
}