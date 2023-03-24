function randomHeaderMsg() {
  
  const headerMsgs = [
    'JavaScript is my friend',
    'I hope you find this site usefull',
    'Here\'s Jonny (in a good way)!',
    'Have a Great Day!',
    'The internet stops here',
    'Let\'s use our powers for good!',
    'Let\'s use our powers for good!',
    'Great Job!',
    'I hope you consider hiring me!',
    'Aspiring JavaScript Wizard',
    'I recently took up yoga!',
    'Meditation is good for you!',
    'You\'ve reached Level 99!',
    'JavaScript is my friend',
    'I like gardening!',
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
