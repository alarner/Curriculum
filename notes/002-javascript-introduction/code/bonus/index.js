const prompt = require('prompt-promise');
const words = require('./words');
const types = ['string', 'number', 'boolean'];

function randomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const operations = {
    string: {
        '+': {
            args: 2,
            fn: ([a, ae], [b, be]) => ({
                value: a+b,
                display: `(${ae} + ${be})`,
            }),
            returns: 'string',
        },
        'length': {
            args: 1,
            fn: ([a, ae]) => ({
                value: a.length,
                display: `${ae}.length`,
            }),
            returns: 'number',
        },
        'charAt': {
            args: 1,
            fn: ([a, ae]) => {
                const pos = Math.floor(Math.random() * a.length);
                return {
                    value: a.charAt(pos),
                    display: `${ae}.charAt(${pos})`,
                }
            },
            returns: 'string',
        },
        'substr': {
            args: 1,
            fn: ([a, ae]) => {
                const pos = Math.floor(Math.random() * a.length);
                const len = Math.floor(Math.random() * a.length - pos);
                return {
                    value: a.substr(pos, len),
                    display: `${ae}.substr(${pos}, ${len})`,
                }
            },
            returns: 'string',
        },
        'indexOf': {
            args: 1,
            fn: ([a, ae]) => {
                const charCode = randomNum(97, 122);
                const char = String.fromCharCode(charCode);
                return {
                    value: a.indexOf(char),
                    display: `${ae}.indexOf('${char}')`,
                }
            },
            returns: 'number',
        },
        '>': {
            args: 2,
            fn: ([a, ae], [b, be]) => {
                const char = String.fromCharCode(randomNum(65, 123));
                return {
                    value: a > b,
                    display: `(${ae} > ${be})`,
                }
            },
            returns: 'boolean',
        },
        '<': {
            args: 2,
            fn: ([a, ae], [b, be]) => {
                const char = String.fromCharCode(randomNum(65, 123));
                return {
                    value: a < b,
                    display: `(${ae} < ${be})`,
                }
            },
            returns: 'boolean',
        },
        '!': {
            args: 1,
            fn: ([a, ae]) => ({
                value: !a,
                display: `!${ae}`,
            }),
            returns: 'boolean',
        },
    },
    boolean: {
        '&&': {
            args: 2,
            fn: ([a, ae], [b, be]) => ({
                value: a && b,
                display: `(${ae} && ${be})`,
            }),
            returns: 'boolean',
        },
        '||': {
            args: 2,
            fn: ([a, ae], [b, be]) => ({
                value: a || b,
                display: `(${ae} || ${be})`,
            }),
            returns: 'boolean',
        },
        '!': {
            args: 1,
            fn: ([a, ae]) => ({
                value: !a,
                display: `!${ae}`,
            }),
            returns: 'boolean',
        },
        '===': {
            args: 2,
            fn: ([a, ae], [b, be]) => ({
                value: a === b,
                display: `(${ae} === ${be})`,
            }),
            returns: 'boolean',
        },
        'toString': {
            args: 1,
            fn: ([a, ae]) => ({
                value: a.toString(),
                display: `(${ae}).toString()`,
            }),
            returns: 'string',
        },
        '+': {
            args: 1,
            fn: ([a, ae]) => {
                const num = randomNum(-5, 5);
                return {
                    value: a + num,
                    display: `(${ae} + ${num})`,
                };
            },
            returns: 'number',
        },
    },
    number: {
        '+': {
            args: 2,
            fn: ([a, ae], [b, be]) => ({
                value: a+b,
                display: `(${ae} + ${be})`,
            }),
            returns: 'number',
        },
        '-': {
            args: 2,
            fn: ([a, ae], [b, be]) => ({
                value: a-b,
                display: `(${ae} - ${be})`,
            }),
            returns: 'number',
        },
        '/': {
            args: 2,
            fn: ([a, ae], [b, be]) => ({
                value: a/b,
                display: `(${ae} / ${be})`,
            }),
            returns: 'number',
        },
        '*': {
            args: 2,
            fn: ([a, ae], [b, be]) => ({
                value: a*b,
                display: `(${ae} * ${be})`,
            }),
            returns: 'number',
        },
        '>': {
            args: 2,
            fn: ([a, ae], [b, be]) => ({
                value: a>b,
                display: `(${ae} > ${be})`,
            }),
            returns: 'boolean',
        },
        '<': {
            args: 2,
            fn: ([a, ae], [b, be]) => ({
                value: a<b,
                display: `(${ae} < ${be})`,
            }),
            returns: 'boolean',
        },
        'Math.floor': {
            args: 1,
            fn: ([a, ae]) => ({
                value: Math.floor(a),
                display: `Math.floor(${ae})`,
            }),
            returns: 'number',
        },
        'Math.ceil': {
            args: 1,
            fn: ([a, ae]) => ({
                value: Math.ceil(a),
                display: `Math.ceil(${ae})`,
            }),
            returns: 'number',
        },
        'Math.abs()': {
            args: 1,
            fn: ([a, ae]) => ({
                value: Math.abs(a),
                display: `Math.abs(${ae})`,
            }),
            returns: 'number',
        },
        '!': {
            args: 1,
            fn: ([a, ae]) => ({
                value: !a,
                display: `!${ae}`,
            }),
            returns: 'boolean',
        },
        'toString': {
            args: 1,
            fn: ([a, ae]) => ({
                value: a.toString(),
                display: `(${ae}).toString()`,
            }),
            returns: 'string',
        }
    }
};

const randomWord = () => words[randomNum(0, words.length)];

const randomData = (type) => {
    if(type === 'string') {
        const numWords = randomNum(0, 4);
        const words = [];
        for(let i=0; i<numWords; i++) {
            words.push(randomWord());
        }
        const val = words.join(' ');
        return [val, `'${val.replace('\'', '\\\'')}'`];
    }
    else if(type === 'number') {
        const category = randomNum(-1, 1);
        if(category === 0) {
            return [0, '0'];
        }
        const decimal = randomNum(0, 1);
        let val = Math.random() * 100 * category;
        if(!decimal) {
            val = Math.round(val);
        }
        return [val, val < 0 ? `(${val.toString()})` : val.toString()];
    }
    else if(type === 'boolean') {
        const val = !!randomNum(0, 1);
        return [val, val ? 'true' : 'false'];
    }
}

const convertToType = (type, expression) => {
    const currentType = expression.type;
    const availableOperations = Object.keys(operations[currentType]).filter(k => 
        operations[currentType][k].returns === type &&
        operations[currentType][k].args === 1
    );
    if(!availableOperations.length) {
        console.log({currentType, type})
    }
    const opKey = availableOperations[randomNum(0, availableOperations.length-1)];
    const { fn, returns } = operations[currentType][opKey];
    const { value, display } = fn([expression.value, expression.display]);
    return {
        value,
        display,
        type: returns,
    };
}

const convertToExpression = (type, e1, e2) => {
    const availableOperations = Object.keys(operations[type]).filter(k => 
        operations[type][k].args === 2
    );
    const opKey = availableOperations[randomNum(0, availableOperations.length-1)];
    const { fn, returns } = operations[type][opKey];
    const { value, display } = fn([e1.value, e1.display], [e2.value, e2.display]);
    return {
        value,
        display,
        type: returns,
    };
}

const generateExpression = (depth, currentDepth=0) => {
    let e1 = null;
    let e2 = null;
    if(depth === currentDepth) {
        const pair = [];
        for(let j=0; j<2; j++) {
            const type = types[randomNum(0, 2)];
            const availableOperations = Object.keys(operations[type]);
            const opKey = availableOperations[randomNum(0, availableOperations.length-1)];
            const { fn, args, returns } = operations[type][opKey];
            const generatedArgs = [];
            for(let argi=0; argi<args; argi++) {
                generatedArgs.push(randomData(type));
            }
            const { value, display } = fn.apply(this, generatedArgs);
            pair.push({
                value,
                display,
                type: returns,
            });
        }
        e1 = pair[0];
        e2 = pair[1];
    }
    else {
        e1 = generateExpression(depth, currentDepth+1);
        e2 = generateExpression(depth, currentDepth+1);
    }

    const combinedType = e1.type;
    if (e2.type !== combinedType) {
        e2 = convertToType(combinedType, e2);
    }

    return convertToExpression(combinedType, e1, e2);
};

(async () => {
    let correct = true;
    let count = 0;
    do {
        count++;
        const tree = generateExpression(Math.ceil(count / 5));
        console.log(tree.display);
        const type = await prompt('type: ');
        const value = await prompt('value: ');
        if(type !== tree.type) {
            console.log(`Sorry! The type was actually a ${tree.type}`);
            correct = false;
        }
        else {
            if(tree.type === 'string' && value !== tree.value) {
                console.log(`Sorry! The value was actually "${tree.value}"`);
                correct = false;
            }
            else if(tree.type === 'number' && Math.abs(tree.value - parseFloat(value)) > 0.1) {
                console.log(`Sorry! The value was actually ${tree.value}`);
                correct = false;
            }
            else if(tree.type === 'boolean') {
                if(tree.value && value.toLowerCase() !== 'true') {
                    console.log(`Sorry! The value was actually true`);
                    correct = false;
                }
                if(!tree.value && value.toLowerCase() !== 'false') {
                    console.log(`Sorry! The value was actually false`);
                    correct = false;
                }
            }
        }
        if(correct) {
            console.log('Well I guess you got it right this time...\n\n');
            correct++;
        }
        else {
            console.log(`You got ${count-1} correct`);
        }
    } while(correct);
})().then(() => process.exit(0));