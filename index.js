const msort = (arr) => {
    if (arr.length === 1) {
        return arr;
    }

    const half = Math.ceil(arr.length / 2);
    const leftHalf = msort(arr.slice(0, half));
    const rigthHalf = msort(arr.slice(half));

    const newArr = [];

    const merge = (leftIndex, rightIndex) => {
        if (leftIndex >= half || rightIndex >= half) {
            if (leftIndex >= half) {
                for (let i = rightIndex; i < half; i++) {
                    newArr.push(rigthHalf[i]);

                    return;
                }
            } else {
                for (let i = leftIndex; i < half; i++) {
                    newArr.push(leftHalf[i]);

                    return;
                }
            }
        }

        if (leftHalf.length === 1) {
            if (leftHalf[0] < rigthHalf[0]) {
                newArr.push(leftHalf[0]);
                newArr.push(rigthHalf[0]);

                return;
            } else {
                newArr.push(rigthHalf[0]);
                newArr.push(leftHalf[0]);

                return;
            }
        }
        if (leftHalf[leftIndex] < rigthHalf[rightIndex]) {
            newArr.push(leftHalf[leftIndex]);
            merge(leftIndex + 1, rightIndex);
        } else {
            newArr.push(rigthHalf[rightIndex]);
            merge(leftIndex, rightIndex + 1);
        }
    };

    merge(0, 0);
    return newArr;
};
