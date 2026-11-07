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

## Fiches-modèles par métier

`modeles.js` contient 18 exemples de fiches (santé, commerce, services, écoles, institutions, événements), en français et en anglais. Dans l'espace partenaire, étape « Vos informations », le choix **« Partir d'un exemple »** pré-remplit les thèmes ; tout ce qui est `[entre crochets]` doit être remplacé ou effacé avant de pouvoir continuer. `{org}` dans un message d'accueil est remplacé par le nom de l'organisation.

Les versions Word (`modeles/<id>.docx`) sont générées à partir du même fichier :

```
node outils/build-modeles.js modeles.js <qr-playstore.png> modeles
```

Pour ajouter un métier : ajoutez une entrée dans `modeles.js`, puis régénérez les fiches Word.
