const friends = [
  {
    name: "John",
    speed: 10,
    run: 6,
    rest: 20,
    state: 1,
    countdown: 6,
    distance: 0,
  },
  {
    name: "James",
    speed: 8,
    run: 8,
    rest: 25,
    state: 1,
    countdown: 8,
    distance: 0,
  },
  {
    name: "Jenna",
    speed: 12,
    run: 5,
    rest: 16,
    state: 1,
    countdown: 5,
    distance: 0,
  },
  {
    name: "Josh",
    speed: 7,
    run: 7,
    rest: 23,
    state: 1,
    countdown: 7,
    distance: 0,
  },
  {
    name: "Jacob",
    speed: 9,
    run: 4,
    rest: 32,
    state: 1,
    countdown: 4,
    distance: 0,
  },
  {
    name: "Jerry",
    speed: 5,
    run: 9,
    rest: 18,
    state: 1,
    countdown: 9,
    distance: 0,
  },
];

let example = [
  {
    name: "John",
    speed: 10,
    run: 6,
    rest: 20,
    state: 1,
    countdown: 6,
    distance: 0,
  },
  {
    name: "James",
    speed: 8,
    run: 8,
    rest: 25,
    state: 1,
    countdown: 8,
    distance: 0,
  },
];
// example.map((a) => (a.countdown = a.run));
// console.group(example);
function checkDistance(arr, time) {
  for (let i = 0; i < time; i++) {
    arr.forEach((a) => {
      if (a.state === 1) {
        if (a.countdown === 0) {
          a.state = 0;
          a.countdown = a.rest;
        } else if (a.countdown > 0) {
          a.distance += a.speed;
        }
      } else if (a.state === 0) {
        if (a.countdown === 0) {
          a.state = 1;
          a.countdown = a.run;
          a.distance += a.speed;
        }
      }
      a.countdown--;
    });
    //   console.log(i, example[0]);
  }
  arr.sort((a, b) => b.distance - a.distance);
  return arr;
}

let totalDistance = checkDistance(friends, 1234);
console.log("Friends race for 1234 seconds");
totalDistance.forEach((a) => {
  console.log(a.name, a.distance);
});
console.log("Example race for 100 seconds");
totalDistance = checkDistance(example, 100);
totalDistance.forEach((a) => {
  console.log(a.name, a.distance);
});
