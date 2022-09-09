const msort = (arr) => {
    if (arr.length === 1) {
        return arr;
    }

    const half = Math.ceil(arr.length / 2);
    const leftHalf = arr.slice(0, half);
    const rigthHalf = arr.slice(half);

    msort(leftHalf);
    msort(rigthHalf);

    const newArr = [];
    for (let i = 0; i < half; i++) {
        if (leftHalf[i] < rigthHalf[i]) {
            newArr.push(leftHalf[i]);
            newArr.push(rigthHalf[i]);
        } else {
            newArr.push(rigthHalf[i]);
            newArr.push(leftHalf[i]);
        }
    }

    return newArr;
};

msort([4, 6, 5, 1, 3, 2, 8, 7]);
