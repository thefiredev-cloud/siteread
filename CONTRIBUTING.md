# Contributing to SiteRead

Thank you for your interest in contributing to SiteRead.

## Code of Conduct

Be respectful. Be constructive. We're building something real.

## How to Contribute

### Reporting Bugs

Open a GitHub issue with:
- Clear description of the bug
- Steps to reproduce
- Expected vs actual behavior
- Environment details (OS, Node version, GPU if applicable)

### Feature Requests

Open a GitHub issue with the `enhancement` label. Describe the use case, not just the feature.

### Pull Requests

1. Fork the repository
2. Create a branch: `git checkout -b feat/your-feature` or `fix/your-bug`
3. Make your changes
4. Add tests for new functionality
5. Ensure all tests pass: `npm test`
6. Ensure linting passes: `npm run lint`
7. Commit with conventional commits: `feat:`, `fix:`, `docs:`, `refactor:`, `test:`
8. Push and open a PR against `main`

### Development Setup

```bash
git clone https://github.com/thefiredev/siteread.git
cd siteread
npm install
cp .env.example .env
docker-compose up -d
npm run dev
```

### Commit Convention

We follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` — new feature
- `fix:` — bug fix
- `docs:` — documentation only
- `refactor:` — code change that's neither bug nor feature
- `test:` — adding or updating tests
- `chore:` — build process or tooling changes

### Testing

```bash
npm test           # run all tests
npm run test:unit  # unit tests only
npm run test:e2e   # end-to-end tests
npm run coverage   # coverage report
```

## Questions?

Join our [Discord](https://discord.gg/thefiredev) or open a GitHub Discussion.
