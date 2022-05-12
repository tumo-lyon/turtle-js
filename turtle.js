setSpeed(300);

setWidth(4);

function semiCircle(x, y, size) {
  setAngle(-90);

  for (let i = 0; i < 18; i++) {
    goto(x, y);
    forward(size);
    right(180 / 17);
  }
}

semiCircle(0, 0, 100);

setColor('blue');

semiCircle(-284, 120, 60);

setColor('green');

semiCircle(150, -207, 130);

setColor('purple');

semiCircle(-108, -178, 40);

setColor('orange');

semiCircle(-217, -218, 35);

hide();
