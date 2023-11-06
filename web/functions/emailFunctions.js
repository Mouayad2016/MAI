function createEmail(email) {
  return {
    from: process.env.INFO_EMAIL,
    to: email,
    subject: 'Välkommen till MouayadAI – Bekräftelse på Registrering',
    text: `Hej,
  
  Tack för att du har registrerat dig för tidig åtkomst till MouayadAI. Vi är glada att ha dig ombord och ser fram emot att erbjuda dig en banbrytande AI-upplevelse.
  
  När vi närmar oss lanseringen av vår första version kommer du att vara bland de första som får veta detta! Vi kommer att skicka dig ett e-postmeddelande med detaljerade instruktioner om hur du kan komma åt våra tjänster så snart de är tillgängliga.
  
  Om du har några frågor eller behöver mer information, tveka inte att kontakta oss via denna e-postadress.
  
  Vänliga hälsningar,
  MouayadAI-teamet
  `,
  };
}

module.exports = { createEmail };
