=== Niji Citeo Plugin ===
Contributors:      The WordPress Contributors
Tags:              block, gutenberg, carrousel, faq, map
Tested up to:      6.1
Stable tag:        0.1.0
License:           GPL-2.0-or-later
License URI:       https://www.gnu.org/licenses/gpl-2.0.html

Ajoute plusieurs blocs personnalisés pour l’éditeur Gutenberg : carrousel, FAQ, carte de France, formulaire popin, etc.

== Description ==

Ce plugin propose une collection de blocs Gutenberg personnalisés pour enrichir vos pages WordPress :
- Section deux colonnes
- Carrousel d’images
- Bouton stylisé
- Bloc FAQ
- Carte de France interactive
- Formulaire popin
- Démo PanelColorSettings

Chaque bloc est optimisé pour l’éditeur et le front, avec chargement conditionnel des scripts.

== Installation ==

1. Placez le dossier du plugin dans `/wp-content/plugins/niji-citeo-plugin-v1/`
2. Activez-le depuis le menu Extensions de WordPress.
3. (Si vous utilisez Docker) Montez le dossier dans le conteneur WordPress via le volume `./wp-content:/var/www/html/wp-content`.

== Frequently Asked Questions ==

= Pourquoi mon bloc n’apparaît pas dans l’éditeur ? =
Assurez-vous d’avoir exécuté `npm run build` dans le dossier du plugin.

= Comment ajouter un nouveau bloc ? =
Ajoutez un dossier dans `src/`, mettez à jour le fichier principal PHP pour l’enregistrer, puis rebuild.

== Screenshots ==

1. Bloc carrousel dans l’éditeur
2. Bloc FAQ sur le front

== Changelog ==

= 0.1.0 =
* Première version : ajout des blocs principaux.

== Support ==
Pour toute question, contactez l’équipe Niji ou ouvrez une issue sur le dépôt Git.
