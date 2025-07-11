function compareArrays(arr1, arr2) {
  return arr1.length === arr2.length && arr1.every((element, index) => element === arr2[index]);
}

function getUsersNamesInAgeRange(users, gender) {
  const result = users
    .filter(user => user.gender === gender)
    .reduce((acc, user, index, arr) => {
      acc += user.age;
      if (index === arr.length - 1) {
      return acc / arr.length;
     }
      return acc;
     }, 0)
    return result;
}