/// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

const nums = [2,7,11,15];
const target = 9;

const newFun = () => {
    let arr = [];
    let shouldSkip = false;
    nums.forEach((e) => {
        if (shouldSkip) {
            return;
        }
        const e1 = Math.abs(e - target);
        const e1Index = nums.findIndex((el) => el === e);
        const e2 = nums.find((e) => e === e1);
        const findNumIndex = nums.findIndex((e) => e === e1);
        if (e1Index != findNumIndex && findNumIndex >= 0) {
            arr.push(e1Index, findNumIndex);
            shouldSkip = true;
        } else if (e1Index === findNumIndex && findNumIndex >= 0) {
            const newNums = nums.splice(e1Index, 1);
            const newIndex = nums.findIndex((e) => e === e1);
            console.log(newIndex,'wedwe')
            if (newIndex >= 0) {
                console.log("Hit me");
                arr.push(e1Index, (newIndex + 1));
                shouldSkip = true;
            } else {
                console.log("font hwef")
                nums.forEach((e) => {
                    if (shouldSkip) {
                        return;
                    }
                    const eNew = Math.abs(e - target);
                    const e1NewIndex = nums.findIndex((el) => el === e);
                    const e2 = nums.find((e) => e === eNew);
                    const findNumNewIndex = nums.findIndex((e) => e === eNew);
                    if (findNumNewIndex > 0) {
                        arr.push((e1NewIndex + 1), (findNumNewIndex + 1));
                        shouldSkip = true;
                    }
                })
            }
        }

    });
    return arr;

}

const arr1 = newFun();
console.log(arr1);