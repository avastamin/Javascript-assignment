function usersComparator(userA, userB) {

    if(userA.active !== userB.active) {
      return userA.active - userB.active;   // or userA.active ? 1 : -1;
    }

    if(userA.registrationDate !== userB.registrationDate) {
        return userA.registrationDate - userB.registrationDate;
    }
    return userA.requestedAmount - userB.requestedAmount;
}

function sortUsers(users) {
    return users.sort(usersComparator);
}

let res = sortUsers([
    {id: 2, active: false, registrationDate: new Date(2016, 11, 1), requestedAmount: 10000},
    {id: 1, active: false, registrationDate: new Date(2016, 10, 15), requestedAmount: 5000},
    {id: 3, active: true,  registrationDate: new Date(2016, 10, 14), requestedAmount: 5000},
    {id: 5, active: true,  registrationDate: new Date(2017, 0, 2), requestedAmount: 5000},
    {id: 4, active: true,  registrationDate: new Date(2016, 10, 14), requestedAmount: 5500},
]);

console.log(res);

let jsonStr =JSON.stringify(res,null, 4);
document.body.innerHTML = jsonStr;
