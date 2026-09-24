# Deployment

Ferrite Web is a static Astro build served by the included production container.

## Local

```powershell
pnpm install
pnpm build
pnpm preview
```

## Docker

```powershell
docker build -t ferrite-web .
docker run --rm -p 8080:80 ferrite-web
```

The container serves the generated `dist/` directory on port 80 with gzip compression and long-lived immutable caching for hashed assets. HTML and route fallbacks remain short-lived.

## Coolify

- Create a Docker-based application from `https://github.com/ferrite-client/ferrite-web`.
- Use the repository `Dockerfile`; no runtime environment variables are required.
- Expose container port `80`.
- Set the domain to `https://ferrite.emkacz.dev` and let Coolify manage HTTPS.
- Use `/` as the health check path.
- Deploy only after the production build and container smoke test pass.
