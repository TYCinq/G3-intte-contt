## compte rendu intégration continue 



Nous avons créé plusieurs branch dans une optique de développement continue : 
-main
-dev

Nous avons aussi créé des branch indépendante pour des scripts cruciaux au site : 
-local storage
-Connexion(My-SQL)

Nous avons aussi créer des branches temporaires dans l’optique de tester des fonctionnalité sans pour autant les appliquer directement sur des branches plus “stable”
-TYCinq-patch-2
-feature-thomas

Avec cette mise en place, nous avons pu faire une ébauche de notre site, disponible dans la branche “dev” qui, une fois débugger pourra être merge dans “main” pour avoir notre premier livrable.

Nous avons en parallèle mis en place Github Action pour permettre la vérification du code.
(actuellement nous n’avons pas de code qui passe les vérifications)
