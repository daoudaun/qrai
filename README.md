# QR AI

Pages publiques de la plateforme QR AI (hébergées sur GitHub Pages) :

- `index.html` : page visiteur ouverte par un code QR (`?c=SAN-XXXXXXX`) — informations validées, chat, boîte à suggestions.
- `espace.html` : espace partenaire — connexion par e-mail, organisation, équipe, fiches, codes QR, opérateur.

La clé Supabase présente dans ces pages est la clé *publishable* (publique par conception) ; l'accès aux données est protégé par les règles de sécurité de la base (RLS) et des fonctions contrôlées côté serveur.

## Fonctions serveur (Supabase)

- `supabase/functions/extract-info` : prépare les fiches d'une organisation à partir de sa fiche d'informations
  (Word, PDF, photo) ou des pages de son site internet. Rien n'est publié : le partenaire relit et valide.
  Réservé au propriétaire et aux membres « Rédaction » ; 15 lectures par organisation et par jour.
  Nécessite le secret `ANTHROPIC_API_KEY` (le même que la fonction `ask`).
- `fiche-knowmi.docx` : modèle de fiche d'informations à télécharger depuis l'espace partenaire.
