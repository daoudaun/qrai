// KnowMi — fiches-modèles par métier.
// Chaque partenaire part d'un exemple et l'adapte : tout ce qui est [entre crochets] doit être remplacé
// par ses vraies informations (ou supprimé) avant la publication. Rien n'est publié tel quel.
// Format d'un thème : [libellé FR, question FR, réponse FR, libellé EN, question EN, réponse EN]
// Les libellés « Adresse et accès » et « Contacts… » reprennent automatiquement l'adresse et le téléphone saisis à l'étape 1.
(function () {
  const G = {
    sante: ["Santé", "Health"],
    commerce: ["Commerce et restauration", "Shops and food"],
    services: ["Services", "Services"],
    education: ["Écoles et formation", "Schools and training"],
    public: ["Institutions et associations", "Public bodies and NGOs"],
    evenement: ["Événements", "Events"]
  };
  const ADR = ["Adresse et accès", "Où êtes-vous situés et comment venir ?", "", "Address and access", "Where are you located and how do I get there?", ""];
  const T = [
    // ---------------- SANTÉ ----------------
    { id: "clinique", g: "sante", kinds: ["health"],
      name: ["Clinique / maternité", "Clinic / maternity"],
      desc: ["Consultations, CPN, accouchements, urgences", "Consultations, antenatal care, deliveries, emergencies"],
      welcome: ["Bienvenue chez {org}. Posez vos questions sur nos horaires, nos services, nos tarifs ou la préparation de votre accouchement.", "Welcome to {org}. Ask about our opening hours, services, fees or how to prepare for your delivery."],
      topics: [
        ["Horaires", "Quels sont vos horaires d'ouverture ?", "Consultations : du lundi au vendredi de [7 h 30] à [18 h 30], le samedi de [8 h] à [13 h].\nUrgences, maternité et garde : 24 h/24, 7 j/7.", "Opening hours", "What are your opening hours?", "Consultations: Monday to Friday [7:30 am] to [6:30 pm], Saturday [8 am] to [1 pm].\nEmergencies, maternity and on-call: 24/7."],
        ADR,
        ["Contacts et urgences", "Comment vous joindre, y compris en urgence ?", "Accueil : [+229 01 00 00 00 00]\nUrgences et maternité 24 h/24 : [+229 01 00 00 00 00]\nWhatsApp (pas pour les urgences) : [+229 01 00 00 00 00]", "Contacts and emergencies", "How can I reach you, including in an emergency?", "Reception: [+229 01 00 00 00 00]\nEmergencies and maternity 24/7: [+229 01 00 00 00 00]\nWhatsApp (not for emergencies): [+229 01 00 00 00 00]"],
        ["Services", "Quels services et spécialités proposez-vous ?", "Gynécologie, consultation prénatale (CPN), échographie, accouchement, césarienne, planification familiale, pédiatrie, laboratoire. [Ajoutez ou retirez selon votre clinique.]", "Services", "Which services and specialties do you offer?", "Gynaecology, antenatal care, ultrasound, delivery, caesarean section, family planning, paediatrics, laboratory. [Add or remove to match your clinic.]"],
        ["Rendez-vous", "Comment prendre rendez-vous ?", "Par téléphone ou WhatsApp au [numéro], ou directement à l'accueil. Les consultations sans rendez-vous sont reçues par ordre d'arrivée, de [7 h 30] à [11 h].", "Appointments", "How do I book an appointment?", "By phone or WhatsApp on [number], or at the reception desk. Walk-in patients are seen in order of arrival from [7:30 am] to [11 am]."],
        ["Tarifs et paiement", "Quels sont vos tarifs et moyens de paiement ?", "Consultation de gynécologie : [10 000] F CFA. Consultation prénatale : [5 000] F CFA. Échographie obstétricale : [15 000] F CFA. Accouchement normal : à partir de [60 000] F CFA.\nPaiement : espèces, MTN Mobile Money, Moov Money, Celtiis Cash.", "Fees and payment", "What are your fees and payment methods?", "Gynaecology consultation: [10,000] CFA francs. Antenatal visit: [5,000] CFA francs. Obstetric ultrasound: [15,000] CFA francs. Normal delivery: from [60,000] CFA francs.\nPayment: cash, MTN Mobile Money, Moov Money, Celtiis Cash."],
        ["Assurances", "Acceptez-vous les assurances et mutuelles ?", "Oui : [liste de vos assurances et mutuelles]. Présentez votre carte à l'accueil avant la consultation.", "Insurance", "Do you accept insurance and health mutuals?", "Yes: [list of your insurers and mutuals]. Show your card at the reception desk before the consultation."],
        ["Kit d'accouchement", "Que faut-il apporter pour l'accouchement ?", "Carnet de CPN, pièce d'identité, [4] pagnes, layette (bonnet, chaussettes, brassières), serviettes hygiéniques, savon, seau et bassine. [Adaptez à votre liste.]", "Delivery kit", "What should I bring for the delivery?", "Antenatal booklet, ID, [4] wraps, baby clothes (hat, socks, vests), sanitary pads, soap, bucket and basin. [Adapt to your list.]"]
      ] },
    { id: "pharmacie", g: "sante", kinds: ["health"],
      name: ["Pharmacie", "Pharmacy"],
      desc: ["Horaires, gardes, disponibilité, paiement", "Hours, on-call duty, availability, payment"],
      welcome: ["Bienvenue chez {org}. Demandez nos horaires, nos jours de garde ou comment vérifier la disponibilité d'un produit.", "Welcome to {org}. Ask about our hours, on-call days or how to check whether a product is available."],
      topics: [
        ["Horaires", "Quels sont vos horaires d'ouverture ?", "Du lundi au samedi de [7 h 30] à [21 h]. Dimanche et jours fériés : uniquement quand nous sommes de garde.", "Opening hours", "What are your opening hours?", "Monday to Saturday [7:30 am] to [9 pm]. Sundays and public holidays: only when we are on duty."],
        ["Pharmacie de garde", "Êtes-vous de garde cette semaine ?", "Nous sommes de garde [la semaine du … au …]. Le tableau des gardes de [votre ville] est affiché à l'entrée de la pharmacie. Pendant la garde, sonnez à la porte de nuit.", "On-call duty", "Are you on duty this week?", "We are on duty [the week of … to …]. The on-call schedule for [your town] is posted at the pharmacy entrance. During on-call nights, ring the night bell."],
        ADR,
        ["Contacts", "Comment vous joindre ?", "Téléphone : [+229 01 00 00 00 00]\nWhatsApp : [+229 01 00 00 00 00]", "Contacts", "How can I reach you?", "Phone: [+229 01 00 00 00 00]\nWhatsApp: [+229 01 00 00 00 00]"],
        ["Disponibilité des produits", "Comment savoir si un médicament est disponible ?", "Envoyez une photo de l'ordonnance ou le nom du produit sur WhatsApp au [numéro] : nous vous répondons et pouvons le mettre de côté [24 h]. Les médicaments sur ordonnance ne sont remis que sur présentation de l'ordonnance originale.", "Product availability", "How can I check whether a medicine is in stock?", "Send a photo of the prescription or the product name on WhatsApp to [number]: we will reply and can set it aside for [24 hours]. Prescription medicines are only handed over against the original prescription."],
        ["Paiement et assurances", "Quels moyens de paiement et assurances acceptez-vous ?", "Espèces, MTN Mobile Money, Moov Money, Celtiis Cash, carte bancaire. Assurances acceptées : [liste].", "Payment and insurance", "Which payment methods and insurers do you accept?", "Cash, MTN Mobile Money, Moov Money, Celtiis Cash, bank card. Insurers accepted: [list]."],
        ["Autres services", "Quels autres services proposez-vous ?", "Prise de tension, mesure de la glycémie, parapharmacie, produits pour bébé. [Adaptez à votre pharmacie.]", "Other services", "What other services do you offer?", "Blood pressure check, blood sugar test, health and beauty products, baby care. [Adapt to your pharmacy.]"]
      ] },
    { id: "laboratoire", g: "sante", kinds: ["health"],
      name: ["Laboratoire d'analyses", "Medical laboratory"],
      desc: ["Prélèvements, préparation, délais, résultats", "Sampling, preparation, turnaround, results"],
      welcome: ["Bienvenue chez {org}. Demandez nos horaires de prélèvement, comment vous préparer ou quand récupérer vos résultats.", "Welcome to {org}. Ask about sampling hours, how to prepare or when to collect your results."],
      topics: [
        ["Horaires", "Quels sont vos horaires de prélèvement ?", "Prélèvements du lundi au vendredi de [7 h] à [12 h], le samedi de [7 h] à [11 h]. Retrait des résultats jusqu'à [18 h].", "Opening hours", "When can I come for a blood test?", "Sampling Monday to Friday [7 am] to [12 noon], Saturday [7 am] to [11 am]. Results can be collected until [6 pm]."],
        ADR,
        ["Contacts", "Comment vous joindre ?", "Téléphone : [+229 01 00 00 00 00]\nWhatsApp : [+229 01 00 00 00 00]", "Contacts", "How can I reach you?", "Phone: [+229 01 00 00 00 00]\nWhatsApp: [+229 01 00 00 00 00]"],
        ["Examens réalisés", "Quels examens faites-vous ?", "Numération formule sanguine, glycémie, bilan lipidique, groupe sanguin, sérologies, test de grossesse, examens d'urine et de selles. [Adaptez à votre liste.]", "Tests available", "Which tests do you perform?", "Full blood count, blood sugar, lipid profile, blood group, serology, pregnancy test, urine and stool tests. [Adapt to your list.]"],
        ["Préparation", "Faut-il venir à jeun ?", "Pour la glycémie et le bilan lipidique, venez à jeun depuis [8 à 12 heures] (l'eau est permise). Pour les autres examens, renseignez-vous à l'accueil ou au [numéro].", "Preparation", "Do I need to fast?", "For blood sugar and lipid tests, fast for [8 to 12 hours] beforehand (water is allowed). For other tests, ask the reception desk or call [number]."],
        ["Délais des résultats", "Quand aurai-je mes résultats ?", "La plupart des résultats sont prêts le jour même après [16 h]. Certains examens spécialisés prennent [2 à 5 jours]. Les résultats sont remis au patient ou envoyés à son médecin.", "Turnaround", "When will my results be ready?", "Most results are ready the same day after [4 pm]. Some specialised tests take [2 to 5 days]. Results are handed to the patient or sent to their doctor."],
        ["Tarifs et paiement", "Quels sont vos tarifs et moyens de paiement ?", "Les tarifs dépendent de l'ordonnance : [exemples de prix]. Paiement : espèces, MTN Mobile Money, Moov Money. Assurances acceptées : [liste].", "Fees and payment", "What are your fees and payment methods?", "Prices depend on the prescription: [sample prices]. Payment: cash, MTN Mobile Money, Moov Money. Insurers accepted: [list]."]
      ] },

    // ---------------- COMMERCE ----------------
    { id: "restaurant", g: "commerce", kinds: ["company", "pro"],
      name: ["Restaurant / maquis", "Restaurant"],
      desc: ["Menu, réservations, livraison, paiement", "Menu, bookings, delivery, payment"],
      welcome: ["Bienvenue chez {org} ! Demandez le menu du jour, nos horaires ou comment vous faire livrer.", "Welcome to {org}! Ask for today's menu, our opening hours or how to order a delivery."],
      topics: [
        ["Horaires", "Quels sont vos horaires d'ouverture ?", "Tous les jours de [11 h] à [23 h]. Fermé le [jour de fermeture].", "Opening hours", "What are your opening hours?", "Every day from [11 am] to [11 pm]. Closed on [closing day]."],
        ADR,
        ["Contacts", "Comment vous joindre ?", "Téléphone et WhatsApp : [+229 01 00 00 00 00]", "Contacts", "How can I reach you?", "Phone and WhatsApp: [+229 01 00 00 00 00]"],
        ["Menu et prix", "Que proposez-vous et à quel prix ?", "Plats du jour à partir de [2 500] F CFA : [pâte rouge et poulet bicyclette, amiwo, riz au gras, poisson braisé…]. Boissons à partir de [500] F CFA. [Mettez votre carte.]", "Menu and prices", "What do you serve and at what price?", "Dishes of the day from [2,500] CFA francs: [your dishes]. Drinks from [500] CFA francs. [Add your menu.]"],
        ["Réservations et groupes", "Peut-on réserver une table ou un repas de groupe ?", "Oui, par téléphone ou WhatsApp au [numéro], au moins [24 h] à l'avance pour les groupes de plus de [10] personnes. Salle privée de [30] places disponible.", "Bookings and groups", "Can I book a table or a group meal?", "Yes, by phone or WhatsApp on [number], at least [24 hours] ahead for groups of more than [10]. Private room for [30] guests available."],
        ["Livraison et à emporter", "Livrez-vous ? Peut-on emporter ?", "Plats à emporter : oui. Livraison à [quartiers / ville] de [11 h] à [21 h], frais de [500 à 1 500] F CFA selon la distance. Commandes au [numéro].", "Delivery and takeaway", "Do you deliver? Can I take food away?", "Takeaway: yes. Delivery to [areas / town] from [11 am] to [9 pm], fee [500 to 1,500] CFA francs depending on distance. Orders on [number]."],
        ["Paiement", "Quels moyens de paiement acceptez-vous ?", "Espèces, MTN Mobile Money, Moov Money, Celtiis Cash. [Carte bancaire : oui / non.]", "Payment", "Which payment methods do you accept?", "Cash, MTN Mobile Money, Moov Money, Celtiis Cash. [Bank card: yes / no.]"]
      ] },
    { id: "hotel", g: "commerce", kinds: ["company"],
      name: ["Hôtel / auberge", "Hotel / guesthouse"],
      desc: ["Chambres, prix, arrivée, services", "Rooms, rates, check-in, amenities"],
      welcome: ["Bienvenue chez {org}. Demandez nos chambres et tarifs, les horaires d'arrivée et de départ, ou nos services.", "Welcome to {org}. Ask about rooms and rates, check-in and check-out times, or our services."],
      topics: [
        ["Chambres et tarifs", "Quelles chambres proposez-vous et à quel prix ?", "Chambre ventilée : [15 000] F CFA la nuit. Chambre climatisée : [25 000] F CFA. Suite : [45 000] F CFA. Petit-déjeuner : [inclus / 3 000 F CFA].", "Rooms and rates", "Which rooms do you offer and at what price?", "Fan room: [15,000] CFA francs per night. Air-conditioned room: [25,000] CFA francs. Suite: [45,000] CFA francs. Breakfast: [included / 3,000 CFA francs]."],
        ["Arrivée et départ", "À quelle heure peut-on arriver et partir ?", "Arrivée à partir de [12 h], départ avant [11 h]. Réception ouverte 24 h/24.", "Check-in and check-out", "What are check-in and check-out times?", "Check-in from [12 noon], check-out before [11 am]. Reception open 24/7."],
        ["Réservation", "Comment réserver ?", "Par téléphone ou WhatsApp au [numéro]. Un acompte de [50 %] par Mobile Money confirme la réservation. Annulation gratuite jusqu'à [48 h] avant l'arrivée.", "Booking", "How do I book?", "By phone or WhatsApp on [number]. A [50%] Mobile Money deposit confirms the booking. Free cancellation up to [48 hours] before arrival."],
        ADR,
        ["Contacts", "Comment vous joindre ?", "Réception 24 h/24 : [+229 01 00 00 00 00]\nE-mail : [contact@…]", "Contacts", "How can I reach you?", "Reception 24/7: [+229 01 00 00 00 00]\nEmail: [contact@…]"],
        ["Services", "Quels services proposez-vous ?", "Wi-Fi gratuit, parking gardé, restaurant, piscine, blanchisserie, salle de conférence de [50] places, navette [aéroport / gare] sur demande. [Adaptez.]", "Amenities", "Which services do you offer?", "Free Wi-Fi, guarded parking, restaurant, pool, laundry, meeting room for [50], [airport / station] shuttle on request. [Adapt.]"],
        ["Paiement", "Quels moyens de paiement acceptez-vous ?", "Espèces, MTN Mobile Money, Moov Money, carte bancaire [Visa / Mastercard], virement pour les entreprises.", "Payment", "Which payment methods do you accept?", "Cash, MTN Mobile Money, Moov Money, bank card [Visa / Mastercard], bank transfer for companies."]
      ] },
    { id: "boutique", g: "commerce", kinds: ["company", "pro"],
      name: ["Boutique / supermarché", "Shop / supermarket"],
      desc: ["Produits, prix, livraison, retours", "Products, prices, delivery, returns"],
      welcome: ["Bienvenue chez {org}. Demandez nos horaires, nos produits, la livraison ou les conditions d'échange.", "Welcome to {org}. Ask about our opening hours, products, delivery or exchange policy."],
      topics: [
        ["Horaires", "Quels sont vos horaires d'ouverture ?", "Du lundi au samedi de [8 h] à [21 h], le dimanche de [9 h] à [14 h].", "Opening hours", "What are your opening hours?", "Monday to Saturday [8 am] to [9 pm], Sunday [9 am] to [2 pm]."],
        ADR,
        ["Contacts", "Comment vous joindre ?", "Téléphone et WhatsApp : [+229 01 00 00 00 00]", "Contacts", "How can I reach you?", "Phone and WhatsApp: [+229 01 00 00 00 00]"],
        ["Produits", "Que vendez-vous ?", "[Alimentation, boissons, produits d'entretien, cosmétiques, articles pour bébé, fournitures scolaires…] Demandez un produit précis sur WhatsApp : nous vous disons s'il est disponible.", "Products", "What do you sell?", "[Groceries, drinks, household products, cosmetics, baby items, school supplies…] Ask for a specific product on WhatsApp and we will tell you if it is in stock."],
        ["Livraison", "Livrez-vous ?", "Oui, à [quartiers / ville], du lundi au samedi. Frais : [1 000] F CFA, gratuit dès [25 000] F CFA d'achat. Commandes sur WhatsApp au [numéro].", "Delivery", "Do you deliver?", "Yes, to [areas / town], Monday to Saturday. Fee: [1,000] CFA francs, free from [25,000] CFA francs. Orders on WhatsApp at [number]."],
        ["Échanges et retours", "Peut-on échanger un article ?", "Échange sous [7] jours avec le ticket de caisse, article non utilisé et dans son emballage. Les produits alimentaires ne sont ni repris ni échangés.", "Exchanges and returns", "Can I exchange an item?", "Exchange within [7] days with the receipt, item unused and in its packaging. Food products cannot be returned or exchanged."],
        ["Paiement", "Quels moyens de paiement acceptez-vous ?", "Espèces, MTN Mobile Money, Moov Money, Celtiis Cash, carte bancaire.", "Payment", "Which payment methods do you accept?", "Cash, MTN Mobile Money, Moov Money, Celtiis Cash, bank card."]
      ] },

    // ---------------- SERVICES ----------------
    { id: "salon", g: "services", kinds: ["company", "pro"],
      name: ["Salon de coiffure / beauté", "Hair and beauty salon"],
      desc: ["Prestations, prix, rendez-vous", "Treatments, prices, appointments"],
      welcome: ["Bienvenue chez {org} ! Demandez nos prestations, nos prix ou un rendez-vous.", "Welcome to {org}! Ask about our services, prices or an appointment."],
      topics: [
        ["Horaires", "Quels sont vos horaires d'ouverture ?", "Du mardi au samedi de [8 h] à [20 h], le dimanche de [14 h] à [19 h]. Fermé le lundi.", "Opening hours", "What are your opening hours?", "Tuesday to Saturday [8 am] to [8 pm], Sunday [2 pm] to [7 pm]. Closed on Mondays."],
        ADR,
        ["Contacts", "Comment vous joindre ?", "Téléphone et WhatsApp : [+229 01 00 00 00 00]", "Contacts", "How can I reach you?", "Phone and WhatsApp: [+229 01 00 00 00 00]"],
        ["Prestations et prix", "Quelles prestations proposez-vous et à quel prix ?", "Tresses : à partir de [5 000] F CFA. Tissage : [7 000] F CFA. Coupe homme : [1 500] F CFA. Manucure : [3 000] F CFA. Maquillage : [10 000] F CFA. [Mettez vos tarifs.]", "Services and prices", "Which services do you offer and at what price?", "Braids: from [5,000] CFA francs. Weave: [7,000] CFA francs. Men's cut: [1,500] CFA francs. Manicure: [3,000] CFA francs. Make-up: [10,000] CFA francs. [Add your prices.]"],
        ["Rendez-vous", "Faut-il prendre rendez-vous ?", "Conseillé pour les tresses, tissages et mariages : WhatsApp au [numéro]. Sans rendez-vous pour les coupes, selon l'attente.", "Appointments", "Do I need an appointment?", "Recommended for braids, weaves and weddings: WhatsApp on [number]. Walk-ins welcome for haircuts, depending on the wait."],
        ["Mariages et événements", "Vous déplacez-vous pour les mariages ?", "Oui, coiffure et maquillage de la mariée et du cortège, à domicile ou sur le lieu de l'événement. Devis sur demande, acompte de [30 %].", "Weddings and events", "Do you travel for weddings?", "Yes, hair and make-up for the bride and her party, at home or at the venue. Quote on request, [30%] deposit."],
        ["Paiement", "Quels moyens de paiement acceptez-vous ?", "Espèces, MTN Mobile Money, Moov Money.", "Payment", "Which payment methods do you accept?", "Cash, MTN Mobile Money, Moov Money."]
      ] },
    { id: "garage", g: "services", kinds: ["company", "pro"],
      name: ["Garage auto / moto", "Car / motorbike garage"],
      desc: ["Réparations, devis, délais, garantie", "Repairs, quotes, turnaround, warranty"],
      welcome: ["Bienvenue chez {org}. Demandez nos services, un devis ou le délai de réparation.", "Welcome to {org}. Ask about our services, a quote or how long a repair takes."],
      topics: [
        ["Horaires", "Quels sont vos horaires d'ouverture ?", "Du lundi au samedi de [7 h 30] à [19 h].", "Opening hours", "What are your opening hours?", "Monday to Saturday [7:30 am] to [7 pm]."],
        ADR,
        ["Contacts", "Comment vous joindre ?", "Téléphone et WhatsApp : [+229 01 00 00 00 00]", "Contacts", "How can I reach you?", "Phone and WhatsApp: [+229 01 00 00 00 00]"],
        ["Services", "Quelles réparations faites-vous ?", "Vidange, freins, embrayage, mécanique moteur, électricité auto, diagnostic par valise, climatisation, tôlerie et peinture. Véhicules : [voitures, motos, camions].", "Services", "Which repairs do you do?", "Oil change, brakes, clutch, engine work, auto electrics, computer diagnostics, air conditioning, bodywork and paint. Vehicles: [cars, motorbikes, trucks]."],
        ["Devis et tarifs", "Combien coûte une réparation ?", "Diagnostic : [5 000] F CFA, déduit si vous faites la réparation chez nous. Vidange : à partir de [15 000] F CFA pièces comprises. Pour le reste, devis gratuit avant tout travail.", "Quotes and prices", "How much does a repair cost?", "Diagnostics: [5,000] CFA francs, deducted if we do the repair. Oil change: from [15,000] CFA francs including parts. Everything else: free quote before any work."],
        ["Délais", "Combien de temps dure une réparation ?", "Vidange et petites réparations : le jour même. Grosses réparations : [2 à 5 jours] selon la disponibilité des pièces. Nous vous appelons dès que le véhicule est prêt.", "Turnaround", "How long does a repair take?", "Oil change and small repairs: same day. Major repairs: [2 to 5 days] depending on parts. We call you as soon as the vehicle is ready."],
        ["Paiement et garantie", "Comment payer ? Les travaux sont-ils garantis ?", "Espèces, MTN Mobile Money, Moov Money. Main-d'œuvre garantie [1 mois]. Pièces neuves : garantie du fournisseur.", "Payment and warranty", "How do I pay? Is the work guaranteed?", "Cash, MTN Mobile Money, Moov Money. Labour guaranteed for [1 month]. New parts: supplier's warranty."]
      ] },
    { id: "autoecole", g: "services", kinds: ["company"],
      name: ["Auto-école", "Driving school"],
      desc: ["Inscription, dossier, coût, examen", "Enrolment, documents, cost, exam"],
      welcome: ["Bienvenue chez {org}. Demandez les pièces à fournir, le coût de la formation ou le déroulement du permis.", "Welcome to {org}. Ask about required documents, course fees or how the licence process works."],
      topics: [
        ["Horaires", "Quels sont vos horaires ?", "Bureau : du lundi au samedi de [8 h] à [18 h]. Cours de code : [lundi, mercredi, vendredi de 17 h à 19 h]. Conduite sur rendez-vous.", "Opening hours", "What are your opening hours?", "Office: Monday to Saturday [8 am] to [6 pm]. Theory classes: [Mon, Wed, Fri 5–7 pm]. Driving lessons by appointment."],
        ADR,
        ["Contacts", "Comment vous joindre ?", "Téléphone et WhatsApp : [+229 01 00 00 00 00]", "Contacts", "How can I reach you?", "Phone and WhatsApp: [+229 01 00 00 00 00]"],
        ["Permis préparés", "Quels permis préparez-vous ?", "Permis [A (moto), B (voiture), C (poids lourd)]. [Adaptez.]", "Licences", "Which licences do you prepare for?", "Licence [A (motorbike), B (car), C (truck)]. [Adapt.]"],
        ["Dossier d'inscription", "Quelles pièces faut-il fournir ?", "[Copie de la pièce d'identité ou de l'acte de naissance, photos d'identité, certificat médical, …] Vérifiez la liste à jour à notre bureau.", "Enrolment documents", "Which documents are required?", "[Copy of ID or birth certificate, passport photos, medical certificate, …] Check the up-to-date list at our office."],
        ["Coût et paiement", "Combien coûte la formation ?", "Permis B (code + conduite) : [150 000] F CFA, payable en [2 ou 3] tranches. Frais d'examen : [montant]. Paiement : espèces, MTN Mobile Money, Moov Money.", "Fees and payment", "How much does the course cost?", "Licence B (theory + driving): [150,000] CFA francs, payable in [2 or 3] instalments. Exam fee: [amount]. Payment: cash, MTN Mobile Money, Moov Money."],
        ["Durée et examen", "Combien de temps dure la formation ?", "Environ [2 à 3 mois] selon votre disponibilité. Nous vous inscrivons à la session d'examen quand le moniteur vous juge prêt.", "Duration and exam", "How long does training take?", "About [2 to 3 months] depending on your availability. We register you for the exam when your instructor judges you ready."]
      ] },
    { id: "cabinet", g: "services", kinds: ["pro", "company"],
      name: ["Cabinet (avocat, notaire, comptable)", "Professional office (law, notary, accounting)"],
      desc: ["Domaines, rendez-vous, honoraires", "Practice areas, appointments, fees"],
      welcome: ["Bienvenue chez {org}. Demandez nos domaines d'intervention, comment prendre rendez-vous ou les pièces à apporter.", "Welcome to {org}. Ask about our practice areas, how to book an appointment or which documents to bring."],
      topics: [
        ["Horaires", "Quels sont vos horaires ?", "Du lundi au vendredi de [8 h] à [17 h 30], sur rendez-vous de préférence.", "Opening hours", "What are your opening hours?", "Monday to Friday [8 am] to [5:30 pm], preferably by appointment."],
        ADR,
        ["Contacts", "Comment vous joindre ?", "Secrétariat : [+229 01 00 00 00 00]\nE-mail : [contact@…]", "Contacts", "How can I reach you?", "Secretariat: [+229 01 00 00 00 00]\nEmail: [contact@…]"],
        ["Domaines d'intervention", "Dans quels domaines intervenez-vous ?", "[Droit des affaires, création d'entreprise, foncier, successions, contrats, fiscalité, tenue de comptabilité…] [Adaptez à votre activité.]", "Practice areas", "Which areas do you cover?", "[Business law, company formation, land, inheritance, contracts, tax, bookkeeping…] [Adapt to your practice.]"],
        ["Rendez-vous", "Comment prendre rendez-vous ?", "Par téléphone ou e-mail auprès du secrétariat. Premier rendez-vous sous [48 h] en général.", "Appointments", "How do I book an appointment?", "By phone or email with the secretariat. First appointment usually within [48 hours]."],
        ["Honoraires", "Combien coûte une consultation ?", "Première consultation : [montant] F CFA. Pour un dossier, les honoraires sont fixés par écrit avant de commencer.", "Fees", "How much does a consultation cost?", "First consultation: [amount] CFA francs. For a case, fees are agreed in writing before work starts."],
        ["Pièces à apporter", "Que dois-je apporter au premier rendez-vous ?", "Votre pièce d'identité et tous les documents liés à votre dossier (contrats, titres, courriers, relevés). Nous ne donnons pas d'avis juridique par ce service : il est réservé au rendez-vous.", "What to bring", "What should I bring to the first meeting?", "Your ID and all documents related to your matter (contracts, titles, letters, statements). We do not give legal advice through this service: that is reserved for the appointment."]
      ] },
    { id: "transport", g: "services", kinds: ["company"],
      name: ["Compagnie de transport", "Bus / transport company"],
      desc: ["Lignes, départs, prix, bagages", "Routes, departures, fares, luggage"],
      welcome: ["Bienvenue chez {org}. Demandez nos lignes, les heures de départ, les prix ou les règles pour les bagages.", "Welcome to {org}. Ask about routes, departure times, fares or luggage rules."],
      topics: [
        ["Lignes et départs", "Quelles villes desservez-vous et à quelle heure ?", "[Cotonou – Parakou] : départs à [6 h, 9 h, 14 h]. [Cotonou – Lomé] : départ à [7 h]. [Ajoutez vos lignes.] Présentez-vous [30 min] avant le départ.", "Routes and departures", "Which towns do you serve and when?", "[Cotonou – Parakou]: departures at [6 am, 9 am, 2 pm]. [Cotonou – Lomé]: departure at [7 am]. [Add your routes.] Be there [30 min] before departure."],
        ["Prix des billets", "Combien coûte le billet ?", "[Cotonou – Parakou] : [8 000] F CFA. [Cotonou – Lomé] : [6 000] F CFA. Enfants de moins de [5 ans] sur les genoux : gratuit.", "Fares", "How much is a ticket?", "[Cotonou – Parakou]: [8,000] CFA francs. [Cotonou – Lomé]: [6,000] CFA francs. Children under [5] on a lap: free."],
        ["Réservation", "Comment réserver une place ?", "À la gare ou par WhatsApp au [numéro], avec paiement Mobile Money. Le billet est valable uniquement pour le départ choisi.", "Booking", "How do I book a seat?", "At the station or on WhatsApp at [number], paying by Mobile Money. Tickets are only valid for the chosen departure."],
        ["Gares", "Où se trouvent vos gares ?", "[Cotonou : …, à côté de …]\n[Parakou : …]", "Stations", "Where are your stations?", "[Cotonou: …, next to …]\n[Parakou: …]"],
        ["Contacts", "Comment vous joindre ?", "Service client : [+229 01 00 00 00 00]", "Contacts", "How can I reach you?", "Customer service: [+229 01 00 00 00 00]"],
        ["Bagages et colis", "Quelles sont les règles pour les bagages et colis ?", "[1] bagage de [20 kg] inclus. Excédent : [500] F CFA par kg. Envoi de colis entre nos gares : à partir de [2 000] F CFA, retrait sur pièce d'identité.", "Luggage and parcels", "What are the luggage and parcel rules?", "[1] bag of [20 kg] included. Excess: [500] CFA francs per kg. Parcels between our stations: from [2,000] CFA francs, collected with ID."]
      ] },

    // ---------------- ÉCOLES ----------------
    { id: "ecole", g: "education", kinds: ["institution", "company"],
      name: ["École / collège privé", "Private school"],
      desc: ["Inscriptions, scolarité, horaires, cantine", "Admissions, fees, timetable, canteen"],
      welcome: ["Bienvenue chez {org}. Demandez les conditions d'inscription, les frais de scolarité, les horaires ou le calendrier.", "Welcome to {org}. Ask about admissions, school fees, timetables or the calendar."],
      topics: [
        ["Niveaux", "Quelles classes proposez-vous ?", "[Maternelle, primaire (CI au CM2), collège (6e à 3e), lycée (2nde à Tle)]. [Adaptez.]", "Levels", "Which classes do you offer?", "[Nursery, primary, lower secondary, upper secondary]. [Adapt.]"],
        ["Inscription", "Comment inscrire mon enfant et quelles pièces fournir ?", "Inscriptions du [date] au [date] au secrétariat. Pièces : acte de naissance, bulletins de l'année précédente, [2] photos d'identité, carnet de vaccination (maternelle et primaire). [Test d'entrée : oui / non.]", "Admissions", "How do I enrol my child and which documents are needed?", "Enrolment from [date] to [date] at the office. Documents: birth certificate, previous year's reports, [2] passport photos, vaccination card (nursery and primary). [Entrance test: yes / no.]"],
        ["Frais de scolarité", "Combien coûte la scolarité ?", "Frais d'inscription : [15 000] F CFA. Scolarité annuelle : primaire [150 000] F CFA, collège [200 000] F CFA, payable en [3] tranches (octobre, janvier, avril). Paiement : [banque, Mobile Money].", "School fees", "How much are the fees?", "Registration: [15,000] CFA francs. Annual fees: primary [150,000] CFA francs, secondary [200,000] CFA francs, payable in [3] instalments (October, January, April). Payment: [bank, Mobile Money]."],
        ["Horaires", "Quels sont les horaires des cours ?", "Du lundi au vendredi de [7 h 30] à [12 h] et de [15 h] à [17 h 30]. Mercredi après-midi : [activités / libre]. Secrétariat ouvert de [8 h] à [17 h].", "Timetable", "What are school hours?", "Monday to Friday [7:30 am] to [12 noon] and [3 pm] to [5:30 pm]. Wednesday afternoon: [activities / free]. Office open [8 am] to [5 pm]."],
        ADR,
        ["Contacts", "Comment joindre l'école ?", "Secrétariat : [+229 01 00 00 00 00]\nE-mail : [contact@…]", "Contacts", "How can I reach the school?", "Office: [+229 01 00 00 00 00]\nEmail: [contact@…]"],
        ["Cantine et transport", "Y a-t-il une cantine et un transport scolaire ?", "Cantine : [oui, 10 000 F CFA par mois]. Bus scolaire : [quartiers desservis, prix mensuel]. [Adaptez.]", "Canteen and transport", "Is there a canteen and a school bus?", "Canteen: [yes, 10,000 CFA francs per month]. School bus: [areas served, monthly price]. [Adapt.]"]
      ] },
    { id: "formation", g: "education", kinds: ["institution", "company"],
      name: ["Université / centre de formation", "University / training centre"],
      desc: ["Filières, admission, frais, calendrier", "Programmes, admission, fees, calendar"],
      welcome: ["Bienvenue chez {org}. Demandez nos filières, les conditions d'admission, les frais ou le calendrier.", "Welcome to {org}. Ask about our programmes, admission requirements, fees or calendar."],
      topics: [
        ["Filières", "Quelles formations proposez-vous ?", "[Licence en gestion, informatique, communication ; BTS ; formations courtes certifiantes…] Diplômes [reconnus par … / agrément n° …].", "Programmes", "Which programmes do you offer?", "[Bachelor in management, IT, communication; vocational diplomas; short certified courses…] Degrees [recognised by … / licence no. …]."],
        ["Admission", "Quelles sont les conditions d'admission ?", "Licence : baccalauréat [séries acceptées]. Dossier : copie du bac légalisée, relevé de notes, acte de naissance, [4] photos. [Test ou entretien : oui / non.]", "Admission", "What are the admission requirements?", "Bachelor: secondary school diploma [accepted streams]. File: certified copy of diploma, transcript, birth certificate, [4] photos. [Test or interview: yes / no.]"],
        ["Frais", "Combien coûte la formation ?", "Inscription : [25 000] F CFA. Scolarité : [350 000] F CFA par an, payable en [3] tranches. Bourses ou réductions : [conditions].", "Fees", "How much does it cost?", "Registration: [25,000] CFA francs. Tuition: [350,000] CFA francs per year, payable in [3] instalments. Scholarships or discounts: [conditions]."],
        ["Calendrier", "Quand ont lieu les inscriptions et la rentrée ?", "Inscriptions du [date] au [date]. Rentrée le [date]. Cours du soir et du week-end : [oui / non].", "Calendar", "When are enrolment and the start of classes?", "Enrolment from [date] to [date]. Classes start on [date]. Evening and weekend classes: [yes / no]."],
        ADR,
        ["Contacts", "Comment vous joindre ?", "Scolarité : [+229 01 00 00 00 00]\nE-mail : [scolarite@…]\nSite : [www…]", "Contacts", "How can I reach you?", "Student office: [+229 01 00 00 00 00]\nEmail: [admissions@…]\nWebsite: [www…]"],
        ["Stages et emploi", "Aidez-vous à trouver un stage ?", "Oui, stage obligatoire de [2 mois] en [année], avec nos entreprises partenaires : [exemples].", "Internships and jobs", "Do you help find internships?", "Yes, a compulsory [2-month] internship in [year], with partner companies: [examples]."]
      ] },

    // ---------------- INSTITUTIONS ----------------
    { id: "mairie", g: "public", kinds: ["institution"],
      name: ["Mairie / état civil", "Town hall / civil registry"],
      desc: ["Actes, légalisations, délais, coûts", "Certificates, authentication, delays, fees"],
      welcome: ["Bienvenue à la mairie de [commune]. Demandez comment obtenir un acte, faire légaliser un document ou préparer un mariage.", "Welcome to [town] town hall. Ask how to get a certificate, have a document authenticated or prepare a wedding."],
      topics: [
        ["Horaires", "Quels sont les horaires d'ouverture ?", "Du lundi au vendredi de [8 h] à [12 h 30] et de [15 h] à [18 h 30].", "Opening hours", "What are the opening hours?", "Monday to Friday [8 am] to [12:30 pm] and [3 pm] to [6:30 pm]."],
        ADR,
        ["Contacts", "Comment joindre la mairie ?", "Standard : [+229 01 00 00 00 00]\nÉtat civil : [+229 01 00 00 00 00]", "Contacts", "How can I reach the town hall?", "Switchboard: [+229 01 00 00 00 00]\nCivil registry: [+229 01 00 00 00 00]"],
        ["Acte de naissance", "Comment obtenir une copie d'acte de naissance ?", "Au service de l'état civil, avec [références de l'acte ou ancienne copie] et une pièce d'identité. Délai : [48 h]. Coût : [montant] F CFA. [Indiquez si la demande se fait aussi en ligne sur le portail officiel.]", "Birth certificate", "How do I get a copy of a birth certificate?", "At the civil registry, with [certificate references or an old copy] and ID. Turnaround: [48 hours]. Fee: [amount] CFA francs. [Say if the request can also be made on the official online portal.]"],
        ["Légalisation", "Comment faire légaliser un document ?", "Apportez l'original et les copies, avec votre pièce d'identité. Signature devant l'agent pour la légalisation de signature. Coût : [montant] F CFA par document. Délai : [immédiat / 24 h].", "Authentication", "How do I have a document authenticated?", "Bring the original and copies, with your ID. Sign in front of the officer for signature authentication. Fee: [amount] CFA francs per document. Turnaround: [same day / 24 hours]."],
        ["Mariage civil", "Comment préparer un mariage civil ?", "Dépôt du dossier au moins [1 mois] avant la date : actes de naissance des époux, pièces d'identité, certificats de résidence, pièces des témoins. [Complétez avec la liste officielle de la commune.] Publication des bans pendant [10 jours].", "Civil wedding", "How do I prepare a civil wedding?", "File the application at least [1 month] before the date: birth certificates of both spouses, IDs, residence certificates, witnesses' IDs. [Complete with the town's official list.] Banns are published for [10 days]."],
        ["Autres services", "Quels autres services propose la mairie ?", "Certificat de résidence, certificat de vie, permis de construire, [autres services]. Renseignez-vous au bureau d'accueil pour les pièces à fournir.", "Other services", "Which other services does the town hall offer?", "Residence certificate, proof of life, building permits, [other services]. Ask the front desk which documents are required."]
      ] },
    { id: "ong", g: "public", kinds: ["ngo"],
      name: ["ONG / association", "NGO / association"],
      desc: ["Missions, bénéficiaires, bénévolat, dons", "Mission, beneficiaries, volunteering, donations"],
      welcome: ["Bienvenue chez {org}. Découvrez nos actions, qui peut en bénéficier et comment nous soutenir.", "Welcome to {org}. Learn about our work, who can benefit and how to support us."],
      topics: [
        ["Notre mission", "Que fait votre organisation ?", "[Nom] agit depuis [année] pour [votre mission : santé des femmes, scolarisation des filles, accès à l'eau…] dans [zones d'intervention].", "Our mission", "What does your organisation do?", "[Name] has worked since [year] on [your mission] in [areas]."],
        ["Bénéficiaires", "Qui peut bénéficier de vos actions ?", "[Public visé et conditions.] Pour en bénéficier : [démarche : venir au bureau, contacter un relais communautaire…].", "Beneficiaries", "Who can benefit from your programmes?", "[Target group and criteria.] To benefit: [process: visit the office, contact a community worker…]."],
        ["Activités en cours", "Quels projets menez-vous en ce moment ?", "[Projet 1 : …, jusqu'en …]\n[Projet 2 : …]", "Current activities", "Which projects are you running now?", "[Project 1: …, until …]\n[Project 2: …]"],
        ADR,
        ["Contacts", "Comment vous joindre ?", "Téléphone : [+229 01 00 00 00 00]\nE-mail : [contact@…]", "Contacts", "How can I reach you?", "Phone: [+229 01 00 00 00 00]\nEmail: [contact@…]"],
        ["Bénévolat", "Comment devenir bénévole ?", "Envoyez une courte présentation et vos disponibilités à [e-mail]. Nous organisons une rencontre d'accueil [chaque mois].", "Volunteering", "How can I volunteer?", "Send a short introduction and your availability to [email]. We hold an induction meeting [every month]."],
        ["Faire un don", "Comment vous soutenir ?", "Dons par Mobile Money au [numéro, au nom de …] ou par virement [banque, IBAN]. Un reçu est remis pour chaque don. Dons en nature : [ce que vous acceptez].", "Donations", "How can I support you?", "Donations by Mobile Money to [number, in the name of …] or bank transfer [bank, account]. A receipt is issued for every donation. In-kind gifts: [what you accept]."]
      ] },

    // ---------------- ÉVÉNEMENTS ----------------
    { id: "conference", g: "evenement", kinds: ["institution", "ngo", "company", "health", "pro"],
      name: ["Conférence / séminaire / EPU", "Conference / seminar / CME"],
      desc: ["Programme, lieu, inscription, attestation", "Programme, venue, registration, certificate"],
      welcome: ["Bienvenue à [nom de l'événement]. Demandez le programme, le lieu, les modalités d'inscription ou l'attestation de participation.", "Welcome to [event name]. Ask about the programme, venue, registration or attendance certificate."],
      topics: [
        ["Date et horaires", "Quand a lieu l'événement ?", "Le [date], de [8 h 30] à [17 h]. Accueil et émargement à partir de [7 h 45].", "Date and times", "When is the event?", "On [date], from [8:30 am] to [5 pm]. Registration desk opens at [7:45 am]."],
        ["Lieu et accès", "Où se déroule l'événement ?", "[Nom de la salle / de l'hôtel], [quartier, ville], [repère connu]. Parking : [oui / non].", "Venue", "Where does the event take place?", "[Venue / hotel name], [area, town], [landmark]. Parking: [yes / no]."],
        ["Programme", "Quel est le programme ?", "[8 h 30] Ouverture\n[9 h] [Thème 1 – intervenant]\n[11 h] [Thème 2 – intervenant]\n[13 h] Déjeuner\n[14 h] [Atelier / table ronde]\n[16 h 30] Clôture", "Programme", "What is the programme?", "[8:30] Opening\n[9:00] [Topic 1 – speaker]\n[11:00] [Topic 2 – speaker]\n[1:00 pm] Lunch\n[2:00 pm] [Workshop / panel]\n[4:30 pm] Closing"],
        ["Inscription et frais", "Comment s'inscrire et combien ça coûte ?", "Inscription : [montant] F CFA ([gratuit pour les étudiants / membres]). Paiement par Mobile Money au [numéro, au nom de …] puis envoi de la capture sur WhatsApp. Inscription sur place : [possible / non].", "Registration and fees", "How do I register and how much does it cost?", "Registration: [amount] CFA francs ([free for students / members]). Pay by Mobile Money to [number, in the name of …] then send the screenshot on WhatsApp. On-site registration: [yes / no]."],
        ["Attestation", "Recevrai-je une attestation ?", "Oui, une attestation de participation [et des crédits de formation continue] est remise aux participants présents toute la journée et ayant émargé.", "Certificate", "Will I receive a certificate?", "Yes, an attendance certificate [and CME credits] is given to participants who signed in and attended the whole day."],
        ["Contacts", "Qui contacter ?", "Comité d'organisation : [nom], [+229 01 00 00 00 00]", "Contacts", "Who should I contact?", "Organising committee: [name], [+229 01 00 00 00 00]"],
        ["Restauration", "Les repas sont-ils prévus ?", "Pause-café et déjeuner [inclus dans l'inscription / à la charge des participants].", "Catering", "Are meals provided?", "Coffee break and lunch [included in registration / at participants' expense]."]
      ] },
    { id: "mariage", g: "evenement", kinds: ["pro", "company", "ngo", "institution", "health"],
      name: ["Mariage / cérémonie familiale", "Wedding / family ceremony"],
      desc: ["Programme, lieux, tenue, plan d'accès", "Schedule, venues, dress code, directions"],
      welcome: ["Bienvenue au mariage de [prénoms des mariés] ! Demandez le programme, les lieux, la tenue ou le plan d'accès.", "Welcome to the wedding of [names]! Ask about the schedule, venues, dress code or directions."],
      topics: [
        ["Programme", "Quel est le programme de la journée ?", "[Vendredi : dot / mariage coutumier, 15 h, chez …]\n[Samedi 10 h : mairie de …]\n[Samedi 13 h : bénédiction à …]\n[Samedi 19 h : soirée à …]", "Schedule", "What is the schedule?", "[Friday: traditional ceremony, 3 pm, at …]\n[Saturday 10 am: town hall of …]\n[Saturday 1 pm: blessing at …]\n[Saturday 7 pm: reception at …]"],
        ["Lieux et accès", "Où se déroulent les cérémonies ?", "[Lieu de chaque cérémonie, quartier, repère connu.] Parking : [indications].", "Venues and directions", "Where do the ceremonies take place?", "[Each venue, area, landmark.] Parking: [details]."],
        ["Tenue", "Quelle tenue porter ?", "Tissu du mariage (aso-ebi) : [couleur / motif], disponible auprès de [contact] à [prix] F CFA. Soirée : tenue de soirée, couleurs [à préciser].", "Dress code", "What should I wear?", "Wedding fabric: [colour / pattern], available from [contact] at [price] CFA francs. Evening: formal wear, colours [to specify]."],
        ["Invitation", "Faut-il une invitation pour la soirée ?", "La soirée est sur invitation : présentez votre carte à l'entrée. [Enfants : oui / non.]", "Invitation", "Do I need an invitation for the reception?", "The reception is by invitation only: show your card at the entrance. [Children: yes / no.]"],
        ["Contacts", "Qui contacter le jour J ?", "Protocole : [nom], [+229 01 00 00 00 00]", "Contacts", "Who do I contact on the day?", "Protocol: [name], [+229 01 00 00 00 00]"],
        ["Hébergement", "Où loger pour ceux qui viennent de loin ?", "Hôtels proches : [nom – prix – contact]. [Tarif négocié pour les invités : oui / non.]", "Accommodation", "Where can out-of-town guests stay?", "Nearby hotels: [name – price – contact]. [Negotiated rate for guests: yes / no.]"],
        ["Cadeaux", "Y a-t-il une liste de cadeaux ?", "[Liste de cadeaux / cagnotte Mobile Money au numéro …, au nom de … / pas de liste.]", "Gifts", "Is there a gift list?", "[Gift list / Mobile Money pot at number …, in the name of … / no list.]"]
      ] },
    { id: "festival", g: "evenement", kinds: ["company", "ngo", "institution", "pro"],
      name: ["Concert / festival / foire", "Concert / festival / fair"],
      desc: ["Billets, programme, accès, règles", "Tickets, line-up, access, rules"],
      welcome: ["Bienvenue à [nom de l'événement] ! Demandez le programme, les billets, l'accès ou ce qui est autorisé sur le site.", "Welcome to [event name]! Ask about the line-up, tickets, access or what is allowed on site."],
      topics: [
        ["Dates et horaires", "Quand a lieu l'événement ?", "Du [date] au [date]. Ouverture des portes à [16 h], fin à [minuit].", "Dates and times", "When is the event?", "From [date] to [date]. Gates open at [4 pm], ends at [midnight]."],
        ["Lieu et accès", "Où se déroule l'événement et comment y aller ?", "[Lieu, ville, repère]. Parking [gardé, 500 F CFA]. Zémidjans et taxis à l'entrée principale.", "Venue and access", "Where is it and how do I get there?", "[Venue, town, landmark]. [Guarded] parking [500 CFA francs]. Motorbike taxis and cabs at the main gate."],
        ["Programme", "Qui passe et à quelle heure ?", "[Jour 1 : artiste – heure]\n[Jour 2 : artiste – heure]\nProgramme susceptible de changer : consultez cette page le jour même.", "Line-up", "Who is performing and when?", "[Day 1: artist – time]\n[Day 2: artist – time]\nThe line-up may change: check this page on the day."],
        ["Billets", "Combien coûtent les billets et où les acheter ?", "Normal : [5 000] F CFA. VIP : [20 000] F CFA. Prévente par Mobile Money au [numéro] ou aux points de vente : [liste]. Sur place : [prix majoré / dans la limite des places].", "Tickets", "How much are tickets and where can I buy them?", "Standard: [5,000] CFA francs. VIP: [20,000] CFA francs. Pre-sale by Mobile Money on [number] or at outlets: [list]. At the gate: [higher price / while available]."],
        ["Règles du site", "Qu'est-ce qui est interdit ?", "Interdits : armes, objets tranchants, boissons et nourriture venant de l'extérieur, [autres]. Fouille à l'entrée. Enfants de moins de [12 ans] accompagnés d'un adulte.", "Site rules", "What is not allowed?", "Not allowed: weapons, sharp objects, outside food and drinks, [others]. Bag checks at the gate. Children under [12] must be with an adult."],
        ["Contacts et secours", "Qui contacter sur place ?", "Organisation : [+229 01 00 00 00 00]. Poste de secours : [emplacement]. Objets perdus : [stand d'accueil].", "Contacts and first aid", "Who do I contact on site?", "Organisers: [+229 01 00 00 00 00]. First-aid post: [location]. Lost and found: [welcome desk]."],
        ["Exposants", "Comment réserver un stand ?", "Stand de [9 m²] : [100 000] F CFA pour toute la durée. Réservation auprès de [contact] avant le [date].", "Exhibitors", "How do I book a stand?", "[9 m²] stand: [100,000] CFA francs for the whole event. Book with [contact] before [date]."]
      ] }
  ];
  window.KM_MODELES = { groups: G, list: T };
})();
