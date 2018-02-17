const ireland = ['Dublin', 'Galway', 'Cork'];

const love = ireland.map(function(name) {
    return 'I love ' + name + '!';
});

const loveArrow = ireland.map((name) => {
    return 'I love ' + name + '!';
});

const loveSingle = ireland.map(name => {
    return 'I love ' + name + '!';
});

const loveArrowOneLine = ireland.map(name => 'I love ' + name + '!');

console.log(love);
console.log(loveArrow);
console.log(loveSingle);
console.log(loveArrowOneLine);

const loveChan = ireland
                    .filter(name => name === 'Dublin')
                    .map(name => 'I love ' + name + '!');

console.log(loveChan);

