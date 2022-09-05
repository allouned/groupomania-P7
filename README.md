## Projet 7 Groupomania - OPC


### Backend

- Node.js 
- Express 
- JsonWebToken 
- Multer 
- Bcrypt 
- Dotenv  
- Prisma 

### Frontend

- Vue JS 
- Bootstrap

### Déploiement de la base de données 
La base de données relationnelle SQL est hébergée sur PlanetScale. 

Donc vous pouvez créer votre base de données sur https://planetscale.com/.
Une fois que vous avez créer votre base de donnnées , vous devez mentionner l'accès dans le fichier .env (DATABASE_URL) à la fin du chemin d'accès mentionner 
`?sslaccept=strict` celà va permettre d'interagir avec la base de données dépuis n'importe quelle machine.

Les schémas de la base de données se trouve dans le fichier `schema.prisma`. Pour créer ce schéma dans votre base de données créee dans le dossier backend effectuez la commande : `npx prisma db push` 

### Procédure pour lancer le projet sur votre machine

1. Clonez le repository github
2. Dans chaque dossier `frontend` et  `backend` effectuez la commande `npm intall`  afin d'installer les dépendances
3. Créer un dossier `images` dans le dossier backend
4. Renommez les fichiers `.env.copy` en `.env` puis remplissez-les avec vos variables d'environnement personnelles
5. Exécutez la commande `npm run dev` dans le terminal côté back et, côté front.
