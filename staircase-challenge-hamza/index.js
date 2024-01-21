/**
 * Good Approach
 */

var staircaseMaker = function (num) {
    // for (let i = num; i > 0; i--) {
    //     for (let j = 0; j < num; j++) {
    //         if(j < i - 1){
    //             process.stdout.write(' ')
    //         }else{
    //             process.stdout.write('#')
    //         }
    //     }
    //     process.stdout.write('\n')
    // }
    for (let i = num; i > 0; i--) {
        for (let j = 0; j < num; j++) {
            if (j < i - 1) {
                process.stdout.write(' ')
            } else {
                process.stdout.write('#')
            }
        }
        process.stdout.write('\n')
    }
};

staircaseMaker(6)