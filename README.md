# NordVault

> An operationalised SSDLC in GitHub Actions. A worked example of turning Cyber Resilience Act obligations into controls that block a merge, rather than into a policy document nobody reads.

The application code in `src/` is deliberately small. The substance of this repository is everything in `.github/` and [`docs/`](./docs).

---

## What this demonstrates

Most secure development frameworks describe what should happen. This one enforces it. Each phase requirement in the [underlying SSDLC framework](./docs) is bound to a mechanism that fails the pipeline when the requirement is not met, so a pull request cannot reach `main` without satisfying it.

Three ideas are being tested.

**Enforcement over advice.**
A control that notifies is a liveness mechanism. A control that blocks is an execution monitor. Anything that matters here is an execution monitor.

**Proportionality.**
Security process that applies uniformly gets routed around. Risk classification decides how much process a change attracts, so low risk changes stay cheap and high risk changes carry the full weight.

**Traceability.**
Every gate leaves an artifact behind. Coverage reports and SBOMs are retained against the pull request or release that produced them, so evidence exists after the fact rather than being reconstructed during an audit.

---

## The risk gate

Every pull request must carry exactly one risk label. The gate fails if none is set, and fails if more than one is set. Classification is not optional and it is not a free text field.

| Label | Threat model notes in PR | Security Engineer approval | Result |
| --- | --- | --- | --- |
| `risk:low` | Not required | Not required | Merges once the standard checks pass |
| `risk:medium` | Required | Required | Blocked until a Security Engineer approval is recorded |
| `risk:high` | Required | Required | Blocked until a Security Engineer approval is recorded |

The gate re-evaluates on label changes, new commits, and review submission or dismissal, so the decision cannot be made once at open time and then invalidated by a later push.

See [`.github/workflows/risk-gate.yml`](./.github/workflows/risk-gate.yml) for the logic and [`.github/PULL_REQUEST_TEMPLATE.md`](./.github/PULL_REQUEST_TEMPLATE.md) for what the author is required to state.

---

## Enforcement layers

No single mechanism provides complete mediation. Each event in the pull request lifecycle needs its own monitor.

| Workflow | What it checks | Fails on |
| --- | --- | --- |
| `ci.yml` | Build, lint, and test with coverage | Type error, lint violation, failing test |
| `codeql.yml` | SAST across TypeScript and the workflow files themselves, using `security-extended` and `security-and-quality` | New security alerts |
| `dependency-review.yml` | SCA against the dependency diff of the pull request | A new dependency at high severity or above |
| `sbom.yml` | CycloneDX and SPDX generation on every pull request and release | SBOM generation producing no output |
| `risk-gate.yml` | Risk classification and role based approval | Missing or duplicate label, absent Security Engineer approval |

CodeQL scans the `actions` language as well as the application code, so the pipeline that enforces the controls is itself in scope.

Dependabot covers both the npm dependencies and the GitHub Actions versions, and every Dependabot pull request passes through the same required checks as a human one.

---

## Role ownership

`CODEOWNERS` maps the role responsibilities defined in the [SSDLC phase documents](./docs) onto concrete file paths, so ownership is enforced by GitHub rather than remembered by people.

Authentication, authorisation, and input validation paths require Security Engineer review. Workflow and Dependabot configuration is co-owned, because a change there can disable the enforcement layer itself. `CODEOWNERS`, the pull request template, and `SECURITY.md` are also co-owned, so neither role can unilaterally remove the other's oversight.

---

## Required repository settings

The workflows above are only enforcement if the repository is configured to treat them that way. These settings live in repository administration and are not visible in the source tree, so they are documented here to be verifiable rather than assumed.

**Branch protection on `main`**

- Require a pull request before merging
- Require at least one approval
- Require review from Code Owners
- Dismiss stale pull request approvals when new commits are pushed
- Require branches to be up to date before merging
- Do not allow bypassing the above settings

**Required status checks**

- `Build, lint og test`
- `risk-gate`
- `Analyze (javascript-typescript)`
- `Analyze (actions)`
- `dependency-review`

**Repository security settings**

- Dependabot alerts and security updates enabled
- CodeQL code scanning enabled
- Private vulnerability reporting enabled

### Known residual risks

**Stale approvals.**
The risk gate reads approvals through the reviews API and accepts any review currently in state `APPROVED`. If **Dismiss stale pull request approvals when new commits are pushed** is disabled, an approval granted at one commit survives a later push to the same branch, and the gate will pass on code the Security Engineer never saw.

The gate's guarantee therefore depends on a setting that cannot be observed from the repository contents. That dependency is the reason the settings above are written down rather than assumed, and it is a concrete instance of the gap between a control that is documented and a control that actually holds.

**Artifact retention.**
SBOMs are uploaded as GitHub Actions artifacts with a 90 day retention. CRA technical documentation must remain available for at least ten years or the full support period, whichever is longer. Until the SBOM is also attached as a release asset, the archival requirement is met in the short term but not across the product lifetime.

---

## Cyber Resilience Act mapping

| Artifact | Reference | Obligation |
| --- | --- | --- |
| `sbom.yml` | Annex I Part II(1) | Identify and document components, including a machine readable SBOM covering at least top level dependencies |
| `dependabot.yml`, `dependency-review.yml` | Annex I Part II(2) | Address and remediate vulnerabilities without delay |
| `ci.yml`, `codeql.yml` | Annex I Part II(3) | Apply effective and regular tests and reviews of product security |
| `SECURITY.md` | Annex I Part II(5) and II(6) | Coordinated vulnerability disclosure policy and a contact route for reports |
| `risk-gate.yml`, pull request template, `CODEOWNERS` | Annex I Part I | Products designed and developed with an appropriate level of cybersecurity |
| Retained SBOM and coverage artifacts | Article 31 and Annex VII | Evidence supporting technical documentation |

This mapping is indicative and reflects the framework author's reading of the regulation. It is not a conformity assessment.

The Article 14 reporting obligations, in force since 11 September 2026, are deliberately out of scope here. Meeting a 24 hour early warning clock is an organisational incident process, not a repository control. What this repository contributes to it is the component inventory and dependency visibility without which a manufacturer cannot determine whether a reported vulnerability affects its product at all.

---

## Repository layout

```text
.github/
├── workflows/              Five enforcement workflows
├── ISSUE_TEMPLATE/         Bug report, change request, security finding
├── CODEOWNERS              Role ownership mapped to file paths
├── PULL_REQUEST_TEMPLATE.md
└── dependabot.yml

docs/
├── README.md               Phase index, risk model, CRA scope
├── fase-1-planlaegning.md  …through fase-7-operations.md
├── security/               Threat models, secure coding guidelines, test reports
└── releases/               Release notes tied to version numbers

src/                        Demo API: auth, document access, validation
tests/                      Jest test suite
SECURITY.md                 Vulnerability disclosure policy
```

---

## Running locally

Requires Node 24 or later.

```bash
npm ci
npm run lint
npm run build
npm test
npm run dev
```

---

## A note on language

The operational artifacts are written in Danish, because the framework was produced for a Danish organisation and the phase documents it references are Danish. The code, the workflow names, and this README are in English.

---

## Scope

NordVault ApS is a fictional company used as the context for a bachelor thesis on operationalising an SSDLC under the Cyber Resilience Act. The application code exists only to give the pipeline something real to act on. This is not a production system.
