# Arthur L'AFFÉTER
# Tom LEPRIEUR

Description:

Pour ajouter de nouvelles fonctionnalités au dépôt gitcidevA, nous avons d’abord forké le dépôt sur le compte de Tom, puis chacun l’a cloné en local. Nous avons travaillé sur des branches distinctes pour chaque fonctionnalité, en utilisant git checkout -b.

Après avoir codé nos fonctionnalités, nous avons installé Jest et rédigé des tests unitaires structurés en deux parties : l’arrange (initialisation des données et objets mockés) et le test (exécution de la fonction et vérification du résultat attendu).

Nous avons ensuite mis en place l’intégration continue via un fichier ci.yaml, configuré pour installer les dépendances Node et lancer les tests à chaque push ou pull request. Un fichier .gitignore a également été ajouté pour exclure les fichiers liés à Node.

Après avoir poussé nos branches (git push origin), nous avons ouvert des pull requests, ce qui a déclenché les tests automatisés. Une fois les tests validés, nous avons pu fusionner les branches dans main.

Un conflit lié à module.exports est survenu lors de la deuxième fonctionnalité, que nous avons résolu en combinant nos deux fonctions dans l’export. La fusion a ensuite été effectuée avec succès.

Commandes:

git clone
git checkout -b feature/nom-de-la-feature
npm install jest
git add .
git commit -m "[sufixe]: description"
git push origin feature/nom-de-la-feature
git pull origin main

| Commande        | Usage principal                                      | Effet sur la branche/historique                              | Autres caractéristiques                   |
|-----------------|-----------------------------------------------------|-------------------------------------------------------------|-------------------------------------------|
| git switch      | Changer de branche                                  | Ne modifie pas d'autres fichiers                            | Simple, usage recommandé pour bascule     |
| git checkout    | Changer de branche ou restaurer des fichiers        | Permet restauration de fichiers et de commits               | Plus polyvalent, usages plus avancés      |
| git fetch       | Récupérer références distantes                      | Ne modifie pas la branche locale                            | Idéal pour vérifier avant de fusionner    |
| git pull        | Récupérer et fusionner les changements              | Met à jour la branche locale directement                    | Combine fetch & merge/rebase              |
| git rebase      | Rejouer des commits sur une autre base              | Réécrit l'historique de la branche, linéarise les commits   | À utiliser avant fusion, maintient linéarité|
| git revert      | Annuler des commits par des commits inverses        | Conserve l'historique en créant un nouveau commit d'annulation | Permet d'annuler sans réécrire l'historique |

## Autres commandes Git importantes

- **git tag** : crée et gère des tags, qui sont des marqueurs fixes sur des commits importants, souvent utilisés pour désigner des versions.

- **git stash** : sauvegarde temporairement les modifications en cours non commises, permettant de revenir à un état propre du projet puis de les réappliquer plus tard.

- **release** : ce terme ne correspond pas à une commande Git native. Il désigne généralement une version stable publiée, souvent associée à un tag, et gérée via des outils externes ou scripts.


