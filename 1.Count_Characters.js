//Q-1. Count Characters

//You are given a string S,
//and your task is to return an array B having a size of 2,where
// B[0] contains the count of character A (uppercase) in Strings S and B[1] contains the count of character D(uppercase) in string s.

const countCharacters = (S) => 
{
  let count = [0,0];
  for(let i = 0; i<S.length; i++)
  {
    if(S[i] == 'A')
    {
      count[0]++;
    }
    else if(S[i] == 'D')
    {
      count[1]++;
    }
  }
  return count;
};
console.log(countCharacters("AbaDd"));