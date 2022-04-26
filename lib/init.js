const element = document.getElementById('turtle-canvas');

const ctx = element.getContext('2d');

const turtle = new BetterTurtle.Turtle(ctx, {
  width: 4,
  defaultColor: 'red',
});

turtle.setSpeed(200).expose(window);

console.log('🐢 Turtle JS !!!');
