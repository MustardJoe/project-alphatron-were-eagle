function footerMsg() {
  const footerMsgs = [
    'The unexamined code is not worth writing.',
    'The unexamined code is not worth writing.',
    'The unexamined cloud infrastructure is not worth building.',
    'The unexamined cloud infrastructure is not worth building.',
    'Please be kind to others and remember to be kind you yourself as well.',
    'You\'ve made it to the bottom of the page! Congratulations!',
    'It\'s been a long day & you deserve a break!',
    'You\'ve reached level 999',
  ];
  
  const randomMsgPick = Math.floor(Math.random() * (footerMsgs.length - 1));
  const selectedMsg = footerMsgs[randomMsgPick];
  return selectedMsg;
}

export default footerMsg;
