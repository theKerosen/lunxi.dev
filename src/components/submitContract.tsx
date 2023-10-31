import webhook from "webhook-discord";

function verifyForm() {
  const nameInput = document.getElementById("name-2") as HTMLInputElement;
  const emailInput = document.getElementById("email-2") as HTMLInputElement;
  const messageInput = document.getElementById("message-2") as HTMLInputElement;
  const alertBoxColor = document.getElementById("alertbox") as HTMLInputElement;
  const alertBox = document
    .getElementById("alertbox")
    ?.querySelector("span") as HTMLInputElement;

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  if (name.length === 0 || email.length === 0 || message.length === 0) {
    alertBoxColor.style.backgroundColor = "#ff7575";
    alertBoxColor.style.borderColor = "#dc3545";
    alertBox.style.color = "#680000";
    return (alertBox.textContent =
      "Os valores inseridos não são válidos ou estão vazios.");
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alertBoxColor.style.backgroundColor = "#ff7575";
    alertBoxColor.style.borderColor = "#dc3545";
    alertBox.style.color = "#680000";
    emailInput.value = "";
    return (alertBox.textContent = "O E-mail não é válido.");
  }
  return true;
}

async function handleSubmit() {
  const nameInput = document.getElementById("name-2") as HTMLInputElement;
  const emailInput = document.getElementById("email-2") as HTMLInputElement;
  const messageInput = document.getElementById("message-2") as HTMLInputElement;
  const alertBoxColor = document.getElementById("alertbox") as HTMLInputElement;
  const alertBox = document
    .getElementById("alertbox")
    ?.querySelector("span") as HTMLInputElement;

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();
  
  alertBoxColor.style.backgroundColor = "#d1e7dd";
  alertBoxColor.style.borderColor = "#badbcc";
  alertBox.style.color = "#0f5132";
  nameInput.value = "";
  emailInput.value = "";
  messageInput.value = "";
  alertBox.textContent =
    "Mensagem diretamente enviada para Lunxi com sucesso! Obrigado.";

  const hook = new webhook.Webhook(import.meta.env.VITE_WEBHOOK_URL);
  const embed = new webhook.MessageBuilder()
    .setName("Contratos")
    .setColor("#0f0214")
    .addField("Nome", name)
    .addField("Email", email)
    .addField("Mensagem", `\`\`\`${message}\`\`\``);

  hook.send(embed);
}

export { handleSubmit, verifyForm };
