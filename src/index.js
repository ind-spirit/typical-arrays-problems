exports.min = function min(array) {
    if (array !== undefined) {
        if (array.length > 0) {
            let min = array[0];
            for (let i = 0; i < array.length; i++) {
                if (array[i] < min) {
                    min = array[i];
                }
            }
            return min;
        } else {
            return 0;
        }
    } else {
        return 0;
    }
}

exports.max = function max(array) {
    if (array !== undefined) {
        if (array.length > 0) {
            let max = array[0];
            for (let i = 0; i < array.length; i++) {
                if (array[i] > max) {
                    max = array[i];
                }
            }
            return max;
        } else {
            return 0;
        }
    } else {
        return 0;
    }
}

exports.avg = function avg(array) {
    if (array !== undefined) {
        if (array.length > 0) {
            let avg = 0,
                i;

            for (i = 0; i < array.length; i++) {
                avg += array[i];
            }
            avg /= i;

            return avg;
        } else {
            return 0;
        }
    } else {
        return 0;
    }
}