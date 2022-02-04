function removeConsecutiveDuplicates(s) {
  const words = [];
  s = s.split(' ');

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== s[i - 1]) {
      words.push(s[i]);
    }
  }

  return words.join(' ');
}
