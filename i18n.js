// KnowMi — traduction de l'interface (français / anglais).
// Langue : choix mémorisé > paramètre ?lang=fr|en > langue du téléphone ou du navigateur (anglais si elle commence par « en »).
// Les textes français servent de clés : KM.t("Texte français {0}", valeur) renvoie la version de la langue choisie.
// Le HTML statique est traduit une seule fois au chargement, avant l'affichage des données : le contenu saisi
// par les partenaires (noms, fiches, messages) n'est jamais traduit.
(function () {
  "use strict";
  var KEY = "knowmi.lang";
  function detect() {
    try { var q = new URLSearchParams(location.search).get("lang"); if (q === "fr" || q === "en") { try { localStorage.setItem(KEY, q); } catch (e) {} return q; } } catch (e) {}
    try { var s = localStorage.getItem(KEY); if (s === "fr" || s === "en") return s; } catch (e) {}
    var l = (navigator.languages && navigator.languages[0]) || navigator.language || "fr";
    return /^en\b/i.test(l) ? "en" : "fr";
  }
  var LANG = detect();

  // ---------- Textes anglais (clé = texte français) ----------
  var EN = {
    // --- Commun ---
    "Informations vérifiées par l'établissement": "Information verified by the organisation",
    "Chargement…": "Loading…",
    "Connexion impossible. Vérifiez votre accès à Internet.": "Unable to connect. Please check your Internet access.",
    "Connexion impossible. Réessayez.": "Unable to connect. Please try again.",
    "Connexion impossible. Vérifiez votre accès à Internet puis rechargez la page.": "Unable to connect. Check your Internet access, then reload the page.",
    "Annuler": "Cancel",
    "Enregistrer": "Save",
    "Modifier": "Edit",
    "Confidentialité": "Privacy",
    "Conditions": "Terms",

    // --- Page visiteur ---
    "KnowMi · Accueil": "KnowMi · Welcome",
    "Page indisponible": "Page unavailable",
    "Ce code QR n'est pas actif ou a été désactivé. Renseignez-vous directement auprès de l'accueil.": "This QR code is not active or has been disabled. Please ask the reception desk directly.",
    "✓ Informations validées par l'établissement": "✓ Information approved by the organisation",
    "Posez votre question": "Ask your question",
    "Ex. Quels sont vos horaires ?": "E.g. What are your opening hours?",
    "Votre question": "Your question",
    "Envoyer": "Send",
    "Toutes les informations": "All information",
    "Une remarque, une information manquante ?": "A comment, or missing information?",
    "Votre message à l'établissement": "Your message to the organisation",
    "Pour être recontacté (facultatif)": "To be contacted back (optional)",
    "Téléphone ou e-mail": "Phone or e-mail",
    "Envoyer le message": "Send message",
    "En cas d'urgence, rendez-vous immédiatement aux urgences ou appelez les secours.": "In an emergency, go to the emergency department immediately or call emergency services.",
    "Les réponses proviennent uniquement des informations publiées par l'établissement ; elles ne remplacent pas une consultation. Vos questions ne sont pas enregistrées.": "Answers come only from information published by the organisation; they do not replace a consultation. Your questions are not stored.",
    "Bienvenue. Posez vos questions pratiques, je réponds avec les informations validées par l'établissement.": "Welcome. Ask your practical questions: I answer with the information approved by the organisation.",
    "Bonjour ! Je suis l'assistant de {0}. Je réponds uniquement avec les informations validées par l'établissement. Que souhaitez-vous savoir ?": "Hello! I am the assistant of {0}. I only answer with information approved by the organisation. What would you like to know?",
    "Source : « {0} », validée le {1}": "Source: “{0}”, approved on {1}",
    "Validée le {0}": "Approved on {0}",
    "Réponse en cours": "Answer in progress",
    "Le service reçoit beaucoup de questions aujourd'hui. Consultez les informations ci-dessous ou contactez directement l'établissement.": "The service is receiving many questions today. See the information below or contact the organisation directly.",
    "Le chat n'est pas encore activé pour cet établissement. Consultez les informations ci-dessous.": "The chat is not yet enabled for this organisation. See the information below.",
    "Ce code QR n'est plus actif.": "This QR code is no longer active.",
    "Votre question doit faire entre 2 et 500 caractères.": "Your question must be between 2 and 500 characters.",
    "Le service est momentanément indisponible. Réessayez dans un instant ou consultez les informations ci-dessous.": "The service is temporarily unavailable. Try again in a moment or see the information below.",
    "Merci, votre message a bien été transmis (référence {0}).": "Thank you, your message has been sent (reference {0}).",
    "Le message n'a pas pu être transmis. Vérifiez son contenu.": "The message could not be sent. Please check its content.",
    // Voix
    "Parler": "Speak",
    "Poser la question à voix haute": "Ask your question out loud",
    "Je vous écoute…": "Listening…",
    "Arrêter l'écoute": "Stop listening",
    "Lire les réponses à voix haute": "Read answers aloud",
    "Écouter": "Listen",
    "Écouter la réponse": "Listen to the answer",
    "Arrêter la lecture": "Stop reading",
    "Je n'ai rien entendu. Touchez le micro et parlez près du téléphone.": "I didn't hear anything. Tap the microphone and speak close to the phone.",
    "Le micro est bloqué. Autorisez-le dans les réglages du navigateur pour poser vos questions à voix haute.": "The microphone is blocked. Allow it in your browser settings to ask questions out loud.",
    "La dictée vocale n'a pas fonctionné. Réessayez ou écrivez votre question.": "Voice input did not work. Try again or type your question.",
    "La dictée vocale utilise la reconnaissance vocale de votre téléphone ou de votre navigateur.": "Voice input uses the speech recognition of your phone or browser.",

    // --- Espace partenaire : en-tête et connexion ---
    "Espace KnowMi": "KnowMi partner space",
    "Espace partenaire": "Partner space",
    "Se déconnecter": "Sign out",
    "Connexion": "Sign in",
    "Pas de mot de passe : vous recevez un e-mail de connexion à chaque fois. Le compte est créé automatiquement la première fois.": "No password: you receive a sign-in e-mail each time. Your account is created automatically the first time.",
    "Votre adresse e-mail": "Your e-mail address",
    "nom@exemple.com": "name@example.com",
    "Recevoir l'e-mail de connexion": "Send me the sign-in e-mail",
    "Collez ici le lien de l'e-mail ou l'adresse de la page ouverte": "Paste the link from the e-mail, or the address of the page that opened",
    "Collez ici": "Paste here",
    "Valider": "Confirm",
    "Changer d'adresse": "Use another address",
    "Connexion avec mot de passe (compte de démonstration)": "Sign in with a password (demo account)",
    "Adresse e-mail": "E-mail address",
    "Mot de passe": "Password",
    "Se connecter": "Sign in",
    "Saisissez ci-dessous le code reçu par e-mail. ": "Enter below the code you received by e-mail. ",
    "Ouvrez l'e-mail et cliquez simplement sur « Sign in » : vous reviendrez ici, connecté. ": "Open the e-mail and simply click “Sign in”: you will come back here, signed in. ",
    "E-mail envoyé à {0} (expéditeur Supabase, objet « Your sign-in link »). Regardez aussi dans les courriers indésirables.": "E-mail sent to {0} (sender Supabase, subject “Your sign-in link”). Also check your spam folder.",
    "Code reçu par e-mail": "Code received by e-mail",
    "Adresse incomplète. Copiez toute l'adresse de la page, du début à la fin.": "Incomplete address. Copy the whole page address, from start to end.",
    "Ce lien n'est pas valide. Copiez à nouveau l'adresse du lien depuis l'e-mail.": "This link is not valid. Copy the link address from the e-mail again.",
    "Ce lien ne vient pas d'un e-mail de connexion KnowMi.": "This link does not come from a KnowMi sign-in e-mail.",
    "Adresse ou mot de passe incorrect.": "Incorrect e-mail address or password.",
    "Erreur inconnue": "Unknown error",
    "Trop de tentatives. Patientez quelques minutes puis réessayez.": "Too many attempts. Wait a few minutes, then try again.",
    "Code incorrect ou expiré. Demandez un nouveau code.": "Incorrect or expired code. Request a new code.",
    "Impossible de charger le module de connexion. Vérifiez votre accès à Internet puis rechargez la page.": "Unable to load the sign-in module. Check your Internet access, then reload the page.",
    "Action impossible": "Action not possible",

    // --- Accueil, organisations ---
    "Mes organisations": "My organisations",
    "← Mes organisations": "← My organisations",
    "Opérateur": "Operator",
    "Inscrire une organisation": "Register an organisation",
    "Entreprise, établissement de santé, institution, ONG ou professionnel. Vous en devenez le propriétaire.": "Company, health facility, institution, NGO or professional. You become its owner.",
    "Nom": "Name",
    "Ex. Clinique Les Palmiers": "E.g. Palm Tree Clinic",
    "Type": "Type",
    "Santé": "Health",
    "Entreprise": "Company",
    "Institution": "Institution",
    "ONG / association": "NGO / association",
    "Professionnel indépendant": "Independent professional",
    "ONG": "NGO",
    "Professionnel": "Professional",
    "Pays": "Country",
    "Code pays (2 lettres)": "Country code (2 letters)",
    "Monnaie (3 lettres)": "Currency (3 letters)",
    "Ex. RW": "E.g. RW",
    "Ex. RWF": "E.g. RWF",
    "Créer l'organisation": "Create the organisation",
    "J'ai reçu un code d'invitation": "I received an invitation code",
    "Le code ne fonctionne qu'avec l'adresse e-mail à laquelle il a été destiné.": "The code only works with the e-mail address it was sent to.",
    "Code d'invitation": "Invitation code",
    "Rejoindre": "Join",
    "Autre pays…": "Other country…",
    "Aucune organisation pour l'instant. Inscrivez la vôtre ci-dessous, ou rejoignez une équipe avec un code d'invitation.": "No organisation yet. Register yours below, or join a team with an invitation code.",
    "Indiquez un code pays de 2 lettres et une monnaie de 3 lettres.": "Enter a 2-letter country code and a 3-letter currency.",
    "Organisation créée. Ouvrez-la pour activer l'accès et inviter votre équipe.": "Organisation created. Open it to activate access and invite your team.",
    "Bienvenue dans l'équipe !": "Welcome to the team!",
    "Propriétaire": "Owner",
    "Rédaction": "Editor",
    "Validation": "Approver",
    "Suggestions": "Suggestions",
    "En attente de paiement": "Awaiting payment",
    "Actif": "Active",
    "Suspendu": "Suspended",
    "{0} · {1} · {2} · votre rôle : {3}": "{0} · {1} · {2} · your role: {3}",

    // --- Opérateur ---
    "Paiements à vérifier": "Payments to verify",
    "Demandes saisies par les clients d'un revendeur. Avant de confirmer, vérifiez la référence auprès du revendeur (et le reversement de votre part).": "Requests entered by a reseller's customers. Before confirming, check the reference with the reseller (and that your share was paid).",
    "Enregistrer une vente revendeur": "Record a reseller sale",
    "Active l'organisation pour la durée vendue. Une référence ne peut servir qu'une fois.": "Activates the organisation for the period sold. A reference can only be used once.",
    "Organisation": "Organisation",
    "Formule": "Plan",
    "Période": "Period",
    "Essentiel": "Essential",
    "Établissement": "Organisation",
    "Mois": "Month",
    "Année": "Year",
    "Référence revendeur": "Reseller reference",
    "Montant encaissé": "Amount received",
    "Devise": "Currency",
    "Ex. 25000": "E.g. 25000",
    "Ex. NG-2026-001": "E.g. NG-2026-001",
    "Enregistrer et activer": "Save and activate",
    "Indiquez le montant encaissé par le revendeur.": "Enter the amount received by the reseller.",
    "Cette référence a déjà été utilisée.": "This reference has already been used.",
    "Vente refusée ({0}).": "Sale refused ({0}).",
    "Vente enregistrée : organisation active jusqu'au {0}.": "Sale recorded: organisation active until {0}.",
    "Aucune demande en attente.": "No pending requests.",
    "Réf. {0} · {1} · {2}": "Ref. {0} · {1} · {2}",
    "Paiement vérifié : activer": "Payment verified: activate",
    "Rejeter": "Reject",
    "Confirmer l'activation": "Confirm activation",
    "Confirmer le rejet": "Confirm rejection",
    "{0} est activée.": "{0} is now active.",
    "Demande rejetée.": "Request rejected.",

    // --- Suppression du compte ---
    "Supprimer mon compte": "Delete my account",
    "Pour confirmer, tapez SUPPRIMER": "To confirm, type DELETE",
    "SUPPRIMER": "DELETE",
    "Supprimer définitivement": "Delete permanently",
    "Tapez exactement SUPPRIMER pour confirmer.": "Type exactly DELETE to confirm.",
    "Votre compte a été supprimé. Merci d'avoir utilisé KnowMi.": "Your account has been deleted. Thank you for using KnowMi.",

    // --- Abonnement ---
    "Abonnement": "Subscription",
    "Mensuelle": "Monthly",
    "Annuelle (2 mois offerts)": "Yearly (2 months free)",
    "Payer en F CFA · Mobile Money, carte, Wave": "Pay in CFA francs · Mobile Money, card, Wave",
    "Payer en $ · carte, PayPal (international)": "Pay in $ · card, PayPal (international)",
    "Formules et conditions :": "Plans and terms:",
    "tarifs": "pricing",
    "remboursement": "refunds",
    "J'ai payé auprès d'un revendeur agréé": "I paid an approved reseller",
    "Saisissez la référence figurant sur le reçu du revendeur. L'équipe KnowMi vérifie et active votre accès.": "Enter the reference shown on the reseller's receipt. The KnowMi team checks it and activates your access.",
    "Référence de vente": "Sale reference",
    "Ex. référence figurant sur le reçu": "E.g. the reference on the receipt",
    "Envoyer pour vérification": "Send for verification",
    "{0} questions IA / jour": "{0} AI questions / day",
    "Formule {0} — payée jusqu'au {1}.": "{0} plan — paid until {1}.",
    "Formule {0} — échue depuis le {1}.": "{0} plan — expired on {1}.",
    "Formule {0} — échue depuis le {1}. Renouvelez pour garder votre page active.": "{0} plan — expired on {1}. Renew to keep your page active.",
    "Accès actif (activation manuelle, sans échéance).": "Access active (manual activation, no end date).",
    "Aucun abonnement actif pour cette organisation.": "No active subscription for this organisation.",
    "Choisissez une formule et payez : votre accès est activé automatiquement dès la confirmation du paiement.": "Choose a plan and pay: your access is activated automatically as soon as payment is confirmed.",
    "Afrique : {0} · International : ${1} par mois": "Africa: {0} · International: ${1} per month",
    "Afrique : {0} · International : ${1} par an": "Africa: {0} · International: ${1} per year",
    "Paiement international bientôt disponible": "International payment coming soon",
    "Paiement reçu, vérification en cours…": "Payment received, checking…",
    "Paiement confirmé ✓ Votre accès est actif jusqu'au {0}.": "Payment confirmed ✓ Your access is active until {0}.",
    "Le paiement n'a pas encore pu être confirmé. S'il a bien été débité, il sera pris en compte automatiquement dans quelques minutes ; sinon écrivez à knowmi.contact@gmail.com avec la référence {0}.": "The payment could not be confirmed yet. If you were charged, it will be taken into account automatically within a few minutes; otherwise write to knowmi.contact@gmail.com with reference {0}.",
    "Le paiement Mobile Money sera ouvert très prochainement.": "Mobile Money payment will open very soon.",
    "La page de paiement sécurisée s'est ouverte dans un nouvel onglet. Une fois le paiement fait, revenez ici : votre accès s'active automatiquement (rechargez la page après une minute).": "The secure payment page opened in a new tab. Once you have paid, come back here: your access activates automatically (reload the page after a minute).",
    "Demande envoyée. Votre accès sera activé dès que le paiement aura été vérifié.": "Request sent. Your access will be activated once the payment has been verified.",

    // --- Page publique ---
    "Page publique": "Public page",
    "C'est ce que voit le visiteur après avoir scanné le code QR : votre nom, un message d'accueil, vos fiches et le chat.": "This is what visitors see after scanning the QR code: your name, a welcome message, your information cards and the chat.",
    "Nom affiché aux visiteurs": "Name shown to visitors",
    "Message d'accueil": "Welcome message",
    "Ex. Bienvenue ! Posez vos questions pratiques : horaires, rendez-vous, services, tarifs…": "E.g. Welcome! Ask your practical questions: opening hours, appointments, services, prices…",
    "Créez d'abord votre page publique.": "First create your public page.",
    "La page publique n'est pas encore créée.": "The public page has not been created yet.",
    "(pas de message d'accueil)": "(no welcome message)",
    "Page publique enregistrée.": "Public page saved.",
    "En ligne · {0} fiche publiée": "Online · {0} card published",
    "En ligne · {0} fiches publiées": "Online · {0} cards published",
    "Hors ligne : compte non activé": "Offline: account not activated",
    "Hors ligne : aucune fiche publiée": "Offline: no card published",

    // --- Fiches ---
    "Fiches d'information": "Information cards",
    "Thème": "Topic",
    "Ex. Horaires": "E.g. Opening hours",
    "Question type d'un visiteur": "Typical visitor question",
    "Réponse validée": "Approved answer",
    "Valable jusqu'au": "Valid until",
    "Enregistrer en brouillon": "Save as draft",
    "+ Nouvelle fiche": "+ New card",
    "Brouillon": "Draft",
    "À valider": "To approve",
    "Approuvée": "Approved",
    "Publiée": "Published",
    "Retirée": "Withdrawn",
    "Expirée": "Expired",
    "Fiche enregistrée en brouillon. Soumettez-la puis publiez-la pour qu'elle apparaisse.": "Card saved as a draft. Submit it, then publish it so that it appears.",
    "Thème : {0} · valable jusqu'au {1}": "Topic: {0} · valid until {1}",
    " · la version {0} reste publiée en attendant": " · version {0} stays published in the meantime",
    "Publier maintenant": "Publish now",
    "Soumettre pour validation": "Submit for approval",
    "Approuver et publier": "Approve and publish",
    "Renvoyer en brouillon": "Send back to draft",
    "Publier": "Publish",
    "Retirer": "Withdraw",
    "Modifier (nouvelle version)": "Edit (new version)",
    "Aucune fiche pour l'instant. Commencez par les thèmes proposés ci-dessus.": "No cards yet. Start with the suggested topics above.",

    // --- Codes QR ---
    "Codes QR": "QR codes",
    "Chaque code ouvre votre page publique. Vous pouvez en créer plusieurs (accueil, salle d'attente, maternité…) et en désactiver un à tout moment.": "Each code opens your public page. You can create several (reception, waiting room, maternity…) and disable one at any time.",
    "Créer un code QR": "Create a QR code",
    "Scannez pour poser vos questions": "Scan to ask your questions",
    "Le module QR n'a pas pu se charger. Vérifiez votre connexion et rechargez la page.": "The QR module could not load. Check your connection and reload the page.",
    "Télécharger l'image": "Download image",
    "Partage ouvert…": "Sharing opened…",
    "Partage indisponible : faites une capture d'écran du code QR.": "Sharing unavailable: take a screenshot of the QR code.",
    "Désactivé": "Disabled",
    "Désactiver": "Disable",
    "Réactiver": "Re-enable",
    "Confirmer la désactivation": "Confirm disabling",
    "Aucun code QR pour l'instant.": "No QR code yet.",
    "Questions posées au chat aujourd'hui : {0} (plafond : 300 par jour).": "Questions asked to the chat today: {0} (limit: 300 per day).",
    "Code QR créé.": "QR code created.",

    // --- Suggestions ---
    "Suggestions des visiteurs": "Visitor suggestions",
    "Messages laissés par les visiteurs depuis la page publique. Ils sont visibles uniquement par le propriétaire et les membres ayant le rôle « Suggestions ». Le message du visiteur ne peut pas être modifié.": "Messages left by visitors from the public page. Only the owner and members with the “Suggestions” role can see them. A visitor's message cannot be edited.",
    "À traiter": "To handle",
    "Traitées": "Handled",
    "Archivées": "Archived",
    "Nouvelle": "New",
    "En lecture": "Being read",
    "En cours": "In progress",
    "Traitée": "Handled",
    "Archivée": "Archived",
    "Abusive": "Abusive",
    "{0} nouvelle": "{0} new",
    "{0} nouvelles": "{0} new",
    "Aucune nouvelle": "None new",
    "Aucune suggestion à traiter. Les messages des visiteurs apparaîtront ici.": "No suggestions to handle. Visitors' messages will appear here.",
    "Rien dans cette rubrique.": "Nothing in this section.",
    "Réf. SG-{0}": "Ref. SG-{0}",
    "Pour recontacter : ": "Contact back: ",
    "Appeler": "Call",
    "Écrire": "Write",
    "Statut": "Status",
    "Note interne (non visible du visiteur)": "Internal note (not visible to the visitor)",
    "Suggestion mise à jour.": "Suggestion updated.",

    // --- Équipe ---
    "Équipe": "Team",
    " (vous)": " (you)",
    "Confirmer le retrait": "Confirm removal",
    "{0} a été retiré de l'équipe.": "{0} has been removed from the team.",
    "Inviter un membre": "Invite a member",
    "Adresse e-mail de la personne": "The person's e-mail address",
    "Rôles": "Roles",
    "Créer le code d'invitation": "Create the invitation code",
    "Invitations en attente": "Pending invitations",
    "Choisissez au moins un rôle.": "Choose at least one role.",
    "Copier le message": "Copy the message",
    "Bonjour, vous êtes invité(e) à rejoindre « {0} » sur KnowMi. Connectez-vous avec l'adresse {1}, puis saisissez ce code d'invitation : {2} (valable 7 jours).": "Hello, you are invited to join “{0}” on KnowMi. Sign in with the address {1}, then enter this invitation code: {2} (valid for 7 days).",
    "Copié ✓": "Copied ✓",
    "Sélectionnez le code ci-dessus": "Select the code above",
    "Transmettez ce code à {0} (SMS, WhatsApp…). Il ne sera plus affiché ensuite.": "Send this code to {0} (SMS, WhatsApp…). It will not be shown again.",
    "Aucune invitation en attente.": "No pending invitations.",
    "{0} · expire le {1}": "{0} · expires on {1}",
    "Retirer le membre": "Remove member",
    "KnowMi · données hébergées dans l'Union européenne (Paris)": "KnowMi · data hosted in the European Union (Paris)",


    // --- Messages renvoyés par le serveur (première lettre en majuscule) ---
    "Accès refusé": "Access denied",
    "Authentification requise": "Sign-in required",
    "Cette invitation est destinée à une autre adresse e-mail": "This invitation is for another e-mail address",
    "Cette personne est déjà membre": "This person is already a member",
    "Choisissez au moins un rôle": "Choose at least one role",
    "Code d'invitation invalide, expiré ou déjà utilisé": "Invitation code invalid, expired or already used",
    "Confirmation invalide : tapez SUPPRIMER": "Invalid confirmation: type DELETE",
    "Connectez-vous d'abord": "Please sign in first",
    "Date de validité invalide": "Invalid validity date",
    "Demande introuvable ou déjà traitée": "Request not found or already handled",
    "Formule inconnue": "Unknown plan",
    "Formule ou période invalide": "Invalid plan or period",
    "Identifiant de fiche manquant": "Missing card identifier",
    "Langue ou fuseau horaire invalide": "Invalid language or time zone",
    "Le compte opérateur KnowMi ne peut pas être supprimé depuis l'application": "The KnowMi operator account cannot be deleted from the app",
    "Le dernier propriétaire ne peut pas être retiré sans transfert": "The last owner cannot be removed without a transfer",
    "Limite de 20 codes QR actifs atteinte": "Limit of 20 active QR codes reached",
    "Membre introuvable": "Member not found",
    "Moyen de paiement invalide": "Invalid payment method",
    "Nombre maximal d'espaces atteint, contactez le support": "Maximum number of spaces reached, please contact support",
    "Paiement international pas encore disponible": "International payment not yet available",
    "Période invalide": "Invalid period",
    "Référence de vente requise": "Sale reference required",
    "Référence de vente trop courte": "Sale reference too short",
    "Réservé à l'opérateur": "Operator only",
    "Seul le propriétaire gère les membres": "Only the owner manages members",
    "Seul le propriétaire peut demander l'activation": "Only the owner can request activation",
    "Seul le propriétaire peut inviter": "Only the owner can invite",
    "Seul le propriétaire peut payer l'abonnement": "Only the owner can pay for the subscription",
    "Une demande est déjà en cours de vérification": "A request is already being verified",
    "Validité dépassée": "Validity exceeded",
    "Validité maximale : 2 ans": "Maximum validity: 2 years",
    "Version figée : créez une nouvelle version": "Locked version: create a new version",
    "Vous avez déjà 3 espaces en attente de paiement : finalisez-en un avant d'en créer un autre": "You already have 3 spaces awaiting payment: complete one before creating another",

    // --- Pays ---
    "Bénin": "Benin", "Côte d'Ivoire": "Côte d'Ivoire", "Guinée-Bissau": "Guinea-Bissau", "Sénégal": "Senegal",
    "Cameroun": "Cameroon", "Centrafrique": "Central African Republic", "Guinée équatoriale": "Equatorial Guinea",
    "Tchad": "Chad", "RD Congo": "DR Congo", "Guinée": "Guinea", "Maroc": "Morocco", "Algérie": "Algeria",
    "Tunisie": "Tunisia", "Belgique": "Belgium", "Suisse": "Switzerland", "États-Unis": "United States", "Royaume-Uni": "United Kingdom",

    // --- Modèles de fiches ---
    "Horaires": "Opening hours",
    "Quels sont vos horaires d'ouverture ?": "What are your opening hours?",
    "Adresse et accès": "Address and directions",
    "Où êtes-vous situés et comment venir ?": "Where are you located and how do I get there?",
    "Où êtes-vous situés ?": "Where are you located?",
    "Contacts et urgences": "Contacts and emergencies",
    "Comment vous joindre, y compris en urgence ?": "How can I reach you, including in an emergency?",
    "Contacts": "Contacts",
    "Comment vous joindre ?": "How can I reach you?",
    "Services": "Services",
    "Quels services et spécialités proposez-vous ?": "Which services and specialities do you offer?",
    "Quels services proposez-vous ?": "Which services do you offer?",
    "Rendez-vous": "Appointments",
    "Comment prendre rendez-vous ?": "How do I make an appointment?",
    "Tarifs et paiement": "Prices and payment",
    "Quels sont vos tarifs et moyens de paiement ?": "What are your prices and payment methods?",
    "Assurances": "Insurance",
    "Acceptez-vous les assurances et mutuelles ?": "Do you accept insurance and health plans?",
    "Documents à apporter": "Documents to bring",
    "Quels documents dois-je apporter ?": "Which documents should I bring?"
  };

  // Blocs avec mise en forme (texte rédigé par KnowMi, jamais par un utilisateur)
  var EN_HTML = {
    "code-help": "<b>Two ways to do it:</b><br>• <b>Without clicking</b>: in the e-mail, right-click the “Sign in” button → “Copy link address”, then paste it here.<br>• <b>If you already clicked</b>: a “This site can't be reached” page (localhost) opened. That's normal. Click the address bar of that page, copy the whole address (Ctrl+A then Ctrl+C), then paste it here.",
    "del-text": "This action is <b>permanent</b>. Your account is deleted immediately. Organisations you are the sole owner of are closed: their cards, QR codes, invitations and suggestions are erased, and their QR codes stop working. Payment references are kept for accounting obligations. <a href=\"suppression-compte.html\">Learn more</a>",
    "entries-intro": "The chat answers <b>only</b> with published cards. A card goes through: draft → to approve → published. Nothing is visible until it is published.",
    "notice": "<b>In an emergency, go to the emergency department immediately or call emergency services.</b><br>Answers come only from information published by the organisation; they do not replace a consultation. Your questions are not stored."
  };

  var norm = function (s) { return s.replace(/\s+/g, " ").trim(); };
  function t(fr) {
    var s = (LANG === "en" && Object.prototype.hasOwnProperty.call(EN, fr)) ? EN[fr] : fr;
    for (var i = 1; i < arguments.length; i++) s = s.split("{" + (i - 1) + "}").join(String(arguments[i]));
    return s;
  }
  function translateDom(root) {
    if (LANG === "fr") return;
    root.querySelectorAll("[data-i18n-html]").forEach(function (n) { var h = EN_HTML[n.getAttribute("data-i18n-html")]; if (h) n.innerHTML = h; });
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        var p = n.parentNode && n.parentNode.closest ? n.parentNode : null;
        if (!p || p.closest("script,style,[data-i18n-skip]")) return NodeFilter.FILTER_REJECT;
        return norm(n.nodeValue) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    });
    var nodes = []; while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(function (n) {
      var key = norm(n.nodeValue);
      if (Object.prototype.hasOwnProperty.call(EN, key)) {
        var lead = /^\s/.test(n.nodeValue) ? " " : "", tail = /\s$/.test(n.nodeValue) ? " " : "";
        n.nodeValue = lead + EN[key] + tail;
      }
    });
    root.querySelectorAll("[placeholder],[aria-label],[title]").forEach(function (n) {
      ["placeholder", "aria-label", "title"].forEach(function (a) {
        var v = n.getAttribute(a); if (v && Object.prototype.hasOwnProperty.call(EN, norm(v))) n.setAttribute(a, EN[norm(v)]);
      });
    });
    var tt = norm(document.title); if (Object.prototype.hasOwnProperty.call(EN, tt)) document.title = EN[tt];
  }
  function setLang(l) {
    if (l !== "fr" && l !== "en") return;
    try { localStorage.setItem(KEY, l); } catch (e) {}
    var u = new URL(location.href); u.searchParams.set("lang", l); u.hash = "";
    location.replace(u.toString());
  }
  // Bouton de langue : affiche l'autre langue (« EN » quand la page est en français)
  function langButton(btn) {
    if (!btn) return;
    btn.textContent = LANG === "en" ? "FR" : "EN";
    btn.setAttribute("aria-label", LANG === "en" ? "Passer en français" : "Switch to English");
    btn.setAttribute("lang", LANG === "en" ? "fr" : "en");
    btn.onclick = function () { setLang(LANG === "en" ? "fr" : "en"); };
  }

  document.documentElement.lang = LANG;
  window.KM = {
    lang: LANG,
    locale: LANG === "en" ? "en-GB" : "fr-FR",
    speech: LANG === "en" ? "en-GB" : "fr-FR",
    t: t, setLang: setLang, langButton: langButton, translateDom: translateDom
  };
  if (document.body) translateDom(document.body);
})();
