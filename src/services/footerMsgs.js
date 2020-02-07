function footerMsg() {
  const randomMsgPick = Math.floor(Math.random() * 2);
  
  const headerMsgs = [
    'The unexamined code is not worth writing.',
    'You\'ve made it to the bottom of the page! Congratulations!',
    'It\'s been a long day & you deserve a break!',
    'You\'ve reached level 999',
  ];

  const selectedMsg = headerMsgs[randomMsgPick];
  return selectedMsg;
}

export default footerMsg;
