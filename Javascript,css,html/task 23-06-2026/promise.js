//promise.all()
const p1 = Promise.resolve("HTML");
const p2 = Promise.resolve("CSS");
const p3 = Promise.resolve("JavaScript");

Promise.all([p1, p2, p3])
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    });

// promise.race()
const p4 = new Promise(resolve =>
    setTimeout(() => resolve("Fast"), 1000)
);

const p5 = new Promise(resolve =>
    setTimeout(() => resolve("Slow"), 3000)
);

Promise.race([p4, p5])
    .then(result => console.log(result));

//promise.allsettled()
const p6 = Promise.resolve("Success");
const p7 = Promise.reject("Failed");
const p8 = Promise.resolve("Completed");

Promise.allSettled([p6, p7, p8])
    .then(results => console.log(results));

//promise.any()
const p9 = Promise.reject("Error 1");

const p10 = new Promise(resolve =>
    setTimeout(() => resolve("Success"), 1000)
);

const p11 = Promise.reject("Error 2");

Promise.any([p9, p10, p11])
    .then(result => console.log(result))
    .catch(error => console.log(error));