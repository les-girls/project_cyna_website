# project_cyna

## Prérequis
-  [Next.js](https://nextjs.org)
-  [supabase](https://supabase.com/docs)

## Installation et configuration

- Récupérer la clé anon et l'url de la base de donnée sur le projet supabase. 
- Ensuite créer un fichier .env à la racine du projet à partir du .env.example.
- Remplir le fichier avec ces deux variables d'environnement en mettant les bonnes clés.
```js
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```
## Lancement du serveur

Tout d'abord lancer le serveur de développement

```bash
cd project_cyna
npm i
npm run dev
```

Ouvrez l'application à l'adresse [http://localhost:3000](http://localhost:3000).



## Mettre à jour le schéma de type de données

Avec typescript, lorque'on crée un client de base de données, on doit lui préciser le schéma de cette dernière ([Schéma](./types/database.types.ts)). Si on modifie un élement dans la base de données, ce schéma doit être mis à jour.
- Il faut d'abord se connecter à supabase
```bash
npx supabase login
```
- Ensuite, on peut génerer le fichier de type. **nom_schema** étant le nom de la base de donnée et **project_id** est l'id du projet qu'on peut retrouver dans les paramètres du projet sur supabase.
```bash
npx supabase gen types typescript --project-id [project_id] --schema [nom_schema] > ./types/database.types.ts
```

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


## Auteurs

Les girls