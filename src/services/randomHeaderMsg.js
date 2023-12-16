function randomHeaderMsg() {
  
  const headerMsgs = [
    'JavaScript is my friend',
    'I hope you find this site usefull',
    'Here\'s Jonny (in a good way)!',
    'Have a Great Day!',
    'I\'m gentle and friendly, Not a Tech Bro!',
    'Let\'s use our powers for good!',
    'Let\'s use our powers for good!',
    'Great Job!',
    'I love Linux!',
    'DevOps Engineering Wizard',
    'Yoga is good for brain and body!',
    'Meditation is good for you!',
    'You\'ve reached Level 99!',
    'JavaScript is my friend',
    'Avid Vegetable Gardener!',
    'I like the rain!',
    'Thanks for visiting!',
    'Have a Great Day!',
    'You\'ve reached level 999'
  ];
  
  let randomIndex = Math.floor(Math.random() * (headerMsgs.length - 1));
  const selectedMsg = headerMsgs[randomIndex];
  return selectedMsg;
}

export default randomHeaderMsg;
