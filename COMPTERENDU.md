# Compte rendu intégration continue 

| Membre du groupe | Rôle |
| --- | --- |
| LOUIS Jérémy | Mainteneur, Développeur |
| BARBIER Thierry | Propriétaire, Mainteneur, Développeur |
| LASSAL Justin | Mainteneur, Développeur |
| HAMILCARO Thomas | Mainteneur, Développeur |

## Gestion Projet

Nous avons créé plusieurs branches dans une optique de développement continue : 
- `main`
- `dev`

Nous avons aussi créé des branches indépendante pour des scripts cruciaux au site : 
- `local storage`
- `Connexion(My-SQL)`

## Reflexion test

Nous avons aussi créé des branches temporaires dans l’optique de tester des fonctionnalités sans pour autant les appliquer directement sur des branches plus “stable”
- `TYCinq-patch-2`
- `feature-thomas`

Nous avons en parallèle mis en place Github Action pour permettre la vérification du code.

## Mise en place intégration continue

Avec cette mise en place, nous avons pu faire une ébauche de notre site, disponible dans la branche “ `dev` ” qui, une fois débugger pourra être merge (implémentée) dans “ `main` ” pour avoir notre premier livrable.
