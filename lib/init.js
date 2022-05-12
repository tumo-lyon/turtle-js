const element = document.getElementById('turtle-canvas');

const ctx = element.getContext('2d');

const turtle = new BetterTurtle.Turtle(ctx, {
  width: 4,
  defaultColor: 'red',
});

const StepTypes = BetterTurtle.StepType;

turtle.expose(window);

console.log('🐢 Turtle JS !!!');

// Action list

const actions = {
  Forward: {
    makeText: (distance) => `forward(${distance})`,
  },
};

const actionsList = document.getElementById('action-list');

turtle.on('step', (step) => {
  // Round numbers
  const args = step.args
    ? step.args.map((val) => {
        return isNaN(val) ? val : Math.round(val);
      })
    : [];
  const text = `${StepTypes[step.type]}(${args.join(', ')})`;
  const listElement = document.createElement('li');
  const textElement = document.createTextNode(text);

  listElement.appendChild(textElement);
  actionsList.prepend(listElement);

  if (actionsList.children.length > 15) {
    actionsList.removeChild(actionsList.lastChild);
  }
});
