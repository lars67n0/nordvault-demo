# NordVault Demo

Demo repository for SSDLC operationalization, created as part of a bachelor thesis on practical Secure Software Development Lifecycle in the Cyber Resilience Act context.

This repository is **not a production system**. It exists to demonstrate how an SSDLC can be operationalized in GitHub through pull request templates, branch protection, required status checks, SAST, SCA and secret scanning.

## Application scope

A minimal Express.js + TypeScript REST API for document management:

- `POST /auth/login` returns a JWT token
- `GET /documents` lists the authenticated user's documents
- `POST /documents` creates a new document
- `GET /documents/:id` retrieves a single document
- `DELETE /documents/:id` deletes a document

SQLite is used as the data layer for demo simplicity. A production deployment of the actual NordVault product would use PostgreSQL. The SSDLC controls demonstrated here are stack-agnostic.

## Prerequisites

- Node.js 20 or later
- npm 10 or later

## Setup

```bash
git clone https://github.com/<your-org>/nordvault-demo.git
cd nordvault-demo
npm install
cp .env.example .env
```

Generate a secure JWT secret and put it in `.env`:

```bash
openssl rand -hex 32
```

## Available scripts

| Script | Description |
|---|---|
| `npm run build` | Compile TypeScript to `dist/` |
| `npm run dev` | Run the API in development mode with ts-node |
| `npm start` | Run the compiled API |
| `npm test` | Run the test suite with Jest |
| `npm run test:coverage` | Run tests with coverage report |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Run ESLint with auto-fix |

## SSDLC controls demonstrated

The following SSDLC controls are or will be configured in this repository:

- Pull request template for structured change submission
- `CODEOWNERS` for role-based review enforcement
- Branch protection on `main` with required reviews and required status checks
- CI workflow for build, lint and tests
- CodeQL for static analysis (planned)
- Dependabot for dependency scanning (planned)
- Secret scanning with push protection (built-in for public repos)

See the accompanying bachelor thesis for the academic context behind these controls.

## License

MIT. See [LICENSE](LICENSE).
