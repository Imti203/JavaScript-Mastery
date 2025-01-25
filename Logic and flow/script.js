
/// IF , ELSE IF and ELSE statement///

    // const age = 18;
    // const age = 16;
    // const age = 26;

    // if (age >= 18) {
    //     console.log('You may enter!')
    // }else if (age === 18) {
    //     console.log('You just turned 18, Welcome!')
    // }else {
    //     console.log('Grow up!')
    // }  

// /Truthy and Falsy value ///

    // const dogs = 5;

    // if (0) {
    //     console.log(`You have ${dogs} dogs`)
    // }else {
    //     console.log(`You have no dogs`)
    // }

    // Falsy value
        
        // 0
        // NaN
        // Undefined
        // null
        // false
        // ''

    // Truthy value 

        // Everything are truthy value only without are falsy value

        // const cats = 5;

        // if (1) {
        //     console.log(`You have ${cats} dogs`)
        // }else {
        //     console.log(`You have no dogs`)
        // }

/// Logical opeator part 2 ///

    // AND '&&' OPERATOR
    console.log('Truthy' && 1 && 'test' && 999) // because of here everything are tru than last item 999 is print
    console.log('Truthy' && 0 && 'test' && 999) // 0 is false that's why 0 is print 

    // OR '||' OPERATOR 
    console.log('' || 0 || null || undefined || 1) // true value is print 
    console.log('' || 0 || null || undefined) // all values are false that's why undefined is print 


    // NOT '!' OPERATOR
    const value = true ;

    if (!value) {
        console.log('Value is true')
    }else {
        console.log( 'Value is false ')
    }

/// SWITCH STATEMENT 

    const superHero = 'Bad Man'

    switch(superHero) {
        case 'Iron Man':
            console.log('I am a Iron Man!');
            break;
        case 'Captain America':
            console.log('Never give up!');
            break;
        default:
            console.log('You are a King of your kingdom!')
    }



