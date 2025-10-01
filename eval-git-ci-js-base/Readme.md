# Arthur L'AFFÉTER
# Tom LEPRIEUR

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
