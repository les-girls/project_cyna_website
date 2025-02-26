# project_cyna_website

# Structure 
-  Configuration + lancement application Next.js : [Dossier cyna](./cyna/README.md)
-  Configuration + lancement API de traduction (voir en dessous)
- [Documentation API de traduction](./translate/README.md)
# API de traduction

## Installation et mise en place
### Mettre en place un environnement virtuel python.
```bash
cd translate 
python -m venv virtualenv
```
### Lancer l'environnement virtuel
Lancer l'environnement à chaque fois qu'on souhaite lancer l'API de traduction
- Sur windows
```bash
virtualenv\Scripts\activate
```
- Sur Mac
```bash
source virtualenv/bin/activate
```
### Installer les dépendances python
La première fois qu'on lance l'environnement virtuel, il faut installer les dépendances.
```bash
pip install libretranslate
```

### (Bonus) Pour désactiver l'environnement virtuel
```bash
deactivate
```

## Lancement de l'API
Pour lancer l'application, 
```bash
libretranslate --load-only en,es,fr
```

Le serveur est accessible à l'adresse [http://localhost:5000](http://localhost:5000).

# Autrice
Les girls 