let assistantOn = true;

function updateAssistantOn() {
  if (assistantOn) {
    assistantOn = false;
  } else assistantOn = true;
}

function isAssistantOn() {
  return assistantOn;
}

export { updateAssistantOn, isAssistantOn };
