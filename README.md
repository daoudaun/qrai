# QR AI

Pages publiques de la plateforme QR AI (hébergées sur GitHub Pages) :

- `index.html` : page visiteur ouverte par un code QR (`?c=SAN-XXXXXXX`) — informations validées, chat, boîte à suggestions.
- `espace.html` : espace partenaire — connexion par e-mail, organisation, équipe, fiches, codes QR, opérateur.

La clé Supabase présente dans ces pages est la clé *publishable* (publique par conception) ; l'accès aux données est protégé par les règles de sécurité de la base (RLS) et des fonctions contrôlées côté serveur.
