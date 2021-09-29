import { Types } from "../constants/types";

/* 
** determine win or lose
*/
export const compareTypes = (left, right) => {
    if (left.localeCompare(right) === 0) {
        return 0;
    } else if (Types.find(e=>e.name === left).win.includes(right)) {
        return 1;
    } else {
        return -1;
    }
};