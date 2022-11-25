const element = document.getElementById('turtle-canvas');

const ctx = element.getContext('2d', {
  willReadFrequently: true,
});

const turtle = new BetterTurtle.Turtle(ctx, {
  width: 4,
  defaultColor: 'red',
});

const StepTypes = BetterTurtle.StepType;

turtle.expose(window);

console.log('🐢 Turtle JS !!!');

// Action list

const actionIcons = {
  [StepTypes.Forward]: '⬆️ ',
  [StepTypes.Left]: '↪️ ',
  [StepTypes.Right]: '↩️ ',
  [StepTypes.Goto]: '📍 ',
  [StepTypes.Hide]: '🕶️ ',
  [StepTypes.Show]: '👁️ ',
  [StepTypes.SetColor]: '🎨 ',
  [StepTypes.SetWidth]: '📏 ',
  [StepTypes.SetAngle]: '📐 ',
  [StepTypes.Reset]: '🔄 ',
  [StepTypes.PenUp]: '✏️ ',
  [StepTypes.PenDown]: '📝 ',
  [StepTypes.Clear]: '🧹 ',
  [StepTypes.SetLineCap]: '🖋️',
};

function makeActionElement(step) {
  // Round numbers
  const args = step.args
    ? step.args.map((val) => {
        return isNaN(val) ? val : Math.round(val);
      })
    : [];

  let stepName = StepTypes[step.type];
  stepName = stepName.charAt(0).toLowerCase() + stepName.slice(1);

  const listElement = document.createElement('li');

  let textElement = document.createTextNode(
    `${actionIcons[step.type] ?? ''}${stepName}(`
  );
  listElement.appendChild(textElement);

  for (let i = 0; i < args.length; i++) {
    let arg = args[i];
    const spanElement = document.createElement('span');

    if (typeof arg === 'string') arg = `"${arg}"`;

    spanElement.innerText = arg;

    if (typeof arg === 'string') spanElement.className = 'code-string';
    if (typeof arg === 'number') spanElement.className = 'code-integer';

    listElement.append(spanElement);

    if (i + 1 < args.length) {
      textElement = document.createTextNode(', ');
      listElement.appendChild(textElement);
    }
  }

  textElement = document.createTextNode(')');
  listElement.appendChild(textElement);

  return listElement;
}

const actionsList = document.getElementById('action-list');

turtle.on('step', (step) => {
  const listElement = makeActionElement(step);

  actionsList.prepend(listElement);

  if (actionsList.children.length > 15) {
    actionsList.removeChild(actionsList.lastChild);
  }
});

const saveButton = document.getElementById('save-button');

saveButton.addEventListener('click', function () {
  const link = document.createElement('a');
  link.download = 'turtle.png';
  link.href = element.toDataURL();
  link.click();
});
