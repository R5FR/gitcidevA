Afin de proposer de nouvelles fonctionnalités au dépôt https://github.com/MaDesOcr/gitcidevA, nous avons commencé par faire un fork du dépôt sur le compte de Tom.
Il m’a ajouté en tant que contributeur, puis nous avons chacun cloné le dépôt en local.

Nous avons créé une branche par fonctionnalité (git checkout -b feature/nom-de-la-feature), puis effectué les modifications du code. Une fois la fonctionnalité terminée, nous avons installé Jest avec npm, puis réalisé les tests unitaires sur nos fonctionnalités.

Les tests se découpent en deux parties :

- L'arrange, dans lequel on initialise les données et on mock les objets dont dépend notre fonctionnalité,

- Le test proprement dit, où l’on exécute la fonction puis on attend un résultat particulier.

Par exemple, pour toggleTask :

Arrange : on crée une liste dans laquelle on ajoute une tâche,

Test : on appelle la fonction et on attend que l’attribut done de la tâche soit mis à true.

Une fois les tests rédigés, nous avons créé le fichier ci.yaml, puis nous l’avons configuré pour installer les packages Node et lancer les tests sur la machine virtuelle Ubuntu à chaque push et pull request.

Nous avons ensuite créé un fichier .gitignore dans lequel nous avons exclu les fichiers de packages Node.

Une fois nos branches respectives prêtes à être poussées, nous avons fait git push origin feature/nom-de-la-feature. Cela a créé des branches distantes équivalentes à nos branches locales sur GitHub.

Nous avons ensuite ouvert une pull request par branche. Cette dernière a déclenché les tests, ce qui nous a permis d’ajuster notre code pour qu’il passe les tests avec succès.

Une fois la pull request validée, nous avons pu fusionner la branche feature distante avec la branche main distante.

Dans le cas de la deuxième fonctionnalité, le module.exports a créé des conflits, puisque chez Tom il exportait sa fonction, et moi la mienne. Nous avons pu résoudre le conflit en ajoutant les deux fonctions dans module.exports.

Après avoir commit les modifications, nous avons pu fusionner la pull request avec succès.