console.log("press 1 if you hate Corona virus")

var upToTen = [1,2,3,4,5,6,7,8,9,10];

console.log(upToTen)

function tuesdayHomework(firstArgument, secondArgument) {
            firstArgument.push(secondArgument);
                return firstArgument;
        }


        console.log(tuesdayHomework(upToTen,"Hello"))
// problem five
            function sliceThis(firstArgument){
             var answer = firstArgument.slice(0,3);
             return answer
            }

                console.log(sliceThis(upToTen))

                // problem six

                function spliceThis(firstArgument) {
                    firstArgument.splice(6,5)
                    return firstArgument
                }
                            console.log(spliceThis(upToTen));

                
