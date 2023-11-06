// * See a full list of supported
// *  triggers at https: //firebase.google.com/docs/functions

const functions = require('firebase-functions');
const { onValueCreated } = require('firebase-functions/v2/database');
var admin = require('firebase-admin');
var serviceAccount = require(`./firebase-adminsdk.json`);
const { transporter } = require('./nodeMailerConfig');
const { createEmail } = require('./emailFunctions');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL:
    'https://mouayadai-default-rtdb.europe-west1.firebasedatabase.app',
});

exports.sendEmailOnNewEntry = onValueCreated(
  { region: 'europe-west1', ref: 'emailList/{emailId}' },
  async (event) => {
    const snapshot = event.data;
    if (!snapshot) {
      return;
    }
    const email = snapshot.val().email;
    if (email) {
      const messageToCient = createEmail(email);
      try {
        await transporter.sendMail(messageToCient);
        console.log(`Email sent to ${email}`);
      } catch (error) {
        throw new functions.https.HttpsError(
          'internal',
          `Error sending email:${error.message}`,
        );
      }
    }
    return null;
  },
);
