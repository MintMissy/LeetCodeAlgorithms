export function reverseWords(str: string): string {
  // your code here
  return str.split(' ').map(word => word.split('').reverse().join('')).join(' ');
}