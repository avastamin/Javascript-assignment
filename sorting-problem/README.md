# 1. Fix our sorting function

## Demo
You can see result in console.log as well.
Run from [here](http://sorting.surge.sh/).

This is the current implementation of our sort function, which is lacking some to be implemented functionality:

```js
function usersComparator(userA, userB) {
    if(userA.registrationDate !== userB.registrationDate) {
        return userA.registrationDate - userB.registrationDate;
    }
    return userA.requestedAmount - userB.requestedAmount;
}

function sortUsers(users) {
    return users.sort(usersComparator);
}
```

Please extend and / or correct the implementation so that it also respects the `active` flag of our users.
The output of sortUsers should return the passed elements in the following order: `1,2,3,4,5`

```js
sortUsers([
    {id: 2, active: false, registrationDate: new Date(2016, 11, 1), requestedAmount: 10000},
    {id: 1, active: false, registrationDate: new Date(2016, 10, 15), requestedAmount: 5000},
    {id: 3, active: true,  registrationDate: new Date(2016, 10, 14), requestedAmount: 5000},
    {id: 5, active: true,  registrationDate: new Date(2017, 0, 2), requestedAmount: 5000},
    {id: 4, active: true,  registrationDate: new Date(2016, 10, 14), requestedAmount: 5500},
]);
```
