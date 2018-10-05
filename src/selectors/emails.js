// SELECT EMAILS
export default (emails, { text }) => {
  return emails.filter((email) => {
    const fromTextMatch = email.from.toLowerCase().includes(text.toLowerCase());
    const toTextMatch = email.to.toLowerCase().includes(text.toLowerCase());
    const subjectTextMatch = email.subject.toLowerCase().includes(text.toLowerCase());
    const bodyTextMatch = email.body.toLowerCase().includes(text.toLowerCase());

    return fromTextMatch || toTextMatch || subjectTextMatch || bodyTextMatch;
  });
};
