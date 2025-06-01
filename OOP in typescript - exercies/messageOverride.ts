class Message {
  send(): string {
    return `Sending message...`;
  }
}

class EmailMessage extends Message {
  public override send(): string {
    return `Sending email...`;
  }
}

class SMSMessage extends EmailMessage {
  public override send(): string {
    return `Sending SMS...`;
  }
}

const messages: Message[] = [
  new Message(),
  new EmailMessage(),
  new SMSMessage(),
];

messages.forEach((msg) => {
  console.log(msg.send());
});
