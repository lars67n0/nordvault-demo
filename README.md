# NordVault

> A proof-of-concept demonstrating how selected controls from our Secure Software Development Lifecycle can be operationalised through GitHub and GitHub Actions.

NordVault was created as part of a project exploring how a Secure Software Development Lifecycle (SSDLC) can move beyond documentation and be integrated into the development workflow.

As part of the project, we designed our own SSDLC covering the software lifecycle from planning and risk classification through development, release, operations and continuous improvement.

This repository is **not a complete technical implementation of that SSDLC**. Instead, it implements a limited selection of controls to demonstrate how suitable SSDLC requirements can be translated into practical mechanisms such as CI/CD checks, risk-based approval gates, security scanning, SBOM generation and automatically produced evidence.

The application in `src/` is deliberately small. Its purpose is to provide a realistic codebase for the security controls in `.github/` and the supporting SSDLC documentation in [`docs/`](./docs) to operate against.

---

## Project goal

The underlying question behind NordVault is:

> How can security requirements defined in an SSDLC become part of the development workflow rather than remaining only as documented process requirements?

Not every SSDLC requirement should be automated.

Activities such as architecture decisions, threat modelling, risk acceptance, governance, incident response and organisational responsibilities still require human judgement and processes outside CI/CD.

However, some requirements can be technically supported or enforced.

NordVault demonstrates that potential by implementing selected controls from our SSDLC in GitHub.

The implementation focuses particularly on three principles.

### Enforcement where appropriate

Where a requirement can reasonably be evaluated automatically, it can become a workflow check or gate rather than relying solely on developers remembering to perform it.

Examples in this repository include automated testing, dependency review, static analysis and risk-based review requirements.

### Proportionality

Not every software change carries the same level of risk.

The demonstrated risk classification mechanism allows additional security review to be introduced for higher-risk changes without applying the same process overhead to every pull request.

### Traceability

Security activities should leave evidence behind as part of the normal development process.

Workflow runs, pull-request history, coverage reports, security scan results and generated SBOMs provide examples of evidence being produced alongside development rather than reconstructed afterwards.

---

## Our SSDLC

The SSDLC developed for the project divides the software lifecycle into seven phases:

1. **Planning and Risk Classification**
2. **Requirements and Acceptance Criteria**
3. **Architecture and Design**
4. **Implementation and Secure Coding**
5. **Testing and Verification**
6. **Controlled Release and Deployment**
7. **Operations, Monitoring and Continuous Improvement**

The complete SSDLC contains considerably more than what is implemented in this repository.

The phase documentation in [`docs/`](./docs) describes the wider lifecycle, including responsibilities, security activities, risk considerations and expected evidence.

NordVault should therefore be understood as a **reference implementation of selected controls from the SSDLC**, rather than an implementation of the entire lifecycle.

---

## What has been implemented

The repository demonstrates several examples of how requirements from the SSDLC can be connected to development tooling.

| Control | Implementation | Purpose |
|---|---|---|
| Risk classification | `risk-gate.yml` | Introduces risk-based workflow requirements |
| Security review | Risk Gate + pull-request reviews | Introduces a Security Engineer approval requirement for elevated-risk changes |
| Build verification | `ci.yml` | Ensures the project builds successfully |
| Linting | `ci.yml` | Detects code-quality and consistency issues |
| Automated testing | `ci.yml` | Runs the Jest test suite automatically |
| Test coverage | Jest + `ci.yml` | Generates and retains a coverage report as part of CI |
| Static analysis | CodeQL | Performs SAST against application and workflow code |
| Dependency review | `dependency-review.yml` | Detects vulnerable dependencies introduced by a pull request |
| Dependency maintenance | Dependabot | Creates automated dependency update pull requests |
| SBOM generation | `sbom.yml` | Produces CycloneDX and SPDX software inventories |
| Evidence retention | GitHub Actions artifacts | Retains selected outputs from security and verification activities |
| Path ownership | `CODEOWNERS` | Connects responsibility to security-sensitive parts of the repository |
| Vulnerability disclosure | `SECURITY.md` | Defines a route for reporting security vulnerabilities |

These controls represent only a subset of the requirements described by our SSDLC.

---

## Risk-based workflow

One of the main implementation experiments in NordVault is the Risk Gate.

Software changes are assigned a risk classification through pull-request labels.

The intended model is:

| Classification | Additional Security Engineer approval |
|---|---|
| `risk:low` | No |
| `risk:medium` | Yes |
| `risk:high` | Yes |

A low-risk change can continue through the normal automated checks without requiring an additional security approval.

Medium- and high-risk changes introduce an additional review requirement.

This demonstrates the proportionality principle in our SSDLC: security process can increase with the risk of the change rather than treating every change identically.

The gate is re-evaluated when relevant pull-request events occur, including changes to labels, new commits and review activity.

See:

```text
.github/workflows/risk-gate.yml
```

for the implementation.

The pull-request template also provides structured fields for documenting information such as risk and security considerations.

Some of this information remains a **human process requirement rather than an automatically validated condition**. That distinction is intentional: the repository demonstrates how automation can support an SSDLC without assuming that every security decision can be reduced to CI logic.

---

## CI and automated verification

The primary CI workflow runs:

```text
Install dependencies
        │
        ▼
      Lint
        │
        ▼
      Build
        │
        ▼
 Automated tests
        │
        ▼
 Coverage report
```

Dependencies are installed using:

```bash
npm ci
```

so the pipeline follows the versions recorded in `package-lock.json`.

The application must then pass linting, TypeScript compilation and automated testing.

Test coverage is also generated and retained as a workflow artifact.

This provides a simple example of how verification requirements in an SSDLC can become repeatable pipeline activities.

---

## Static application security testing

CodeQL is used as the project's SAST implementation.

The workflow analyses:

```text
javascript-typescript
actions
```

Scanning the GitHub Actions language is particularly relevant to this project because the workflows themselves form part of the demonstrated security-control layer.

The CodeQL configuration therefore considers both the application and parts of the automation used to evaluate it.

The project currently uses the additional:

```text
security-extended
security-and-quality
```

query suites.

---

## Dependency security

Dependency security is demonstrated through two complementary mechanisms.

### Dependency Review

Pull requests are analysed using GitHub's Dependency Review Action.

The current demonstration is configured to fail when a newly introduced dependency reaches the configured severity threshold.

This provides an example of evaluating dependency risk **before a change is merged**.

### Dependabot

Dependabot monitors both:

```text
npm dependencies
GitHub Actions
```

and creates update pull requests automatically.

Minor and patch updates can be grouped to reduce unnecessary pull-request noise, while larger updates can remain independently reviewable.

The purpose is not simply dependency automation itself, but to demonstrate how dependency maintenance can become part of the normal SSDLC workflow.

---

## Software Bill of Materials

The project automatically generates Software Bills of Materials in two formats:

```text
CycloneDX JSON
SPDX JSON
```

The SBOM workflow runs for pull requests and releases.

The generated files are uploaded as GitHub Actions artifacts and associated with the workflow execution that produced them.

This demonstrates the idea of producing component inventory and technical evidence as a **by-product of the development pipeline** rather than creating it manually later.

Example output:

```text
sbom.cyclonedx.json
sbom.spdx.json
```

The current artifact retention configuration is intended for demonstration purposes and should not be interpreted as a complete long-term archival solution.

---

## Ownership and review

`CODEOWNERS` is used to demonstrate how responsibilities defined in our SSDLC can be associated with parts of the repository.

For example, security-sensitive areas such as authentication and input validation are associated with the Security Engineer role.

General application code can be associated with an Engineering Lead role, while security-relevant development infrastructure can have multiple designated owners.

This provides a connection between:

```text
SSDLC responsibility
        ↓
Repository path
        ↓
Pull-request reviewer
```

`CODEOWNERS` itself does not replace organisational role management or segregation-of-duty controls. It is used here as one example of how ownership defined by an SSDLC can be represented in development tooling.

---

## Enforcement depends on repository configuration

A workflow only becomes an effective merge gate when the repository is configured to treat it as one.

For a deployment of this model, repository rules or branch protection should be configured so relevant controls cannot simply be ignored.

Examples include:

- requiring pull requests before changes reach `main`;
- requiring selected status checks to pass;
- requiring appropriate pull-request approval;
- requiring Code Owner review where applicable;
- dismissing stale approvals after relevant changes;
- restricting the ability to bypass repository protections.

Examples of checks that can form part of such a ruleset include:

```text
Build, lint og test
risk-gate
Analyze (javascript-typescript)
Analyze (actions)
dependency-review
```

This distinction is important.

The workflow contains the **control logic**, while repository configuration determines whether that result is actually **enforced as a merge condition**.

### A worked example of that dependency

The Risk Gate reads approvals through the reviews API and accepts any review currently in state `APPROVED`.

If **dismiss stale pull request approvals when new commits are pushed** is disabled, an approval granted at one commit survives a later push to the same branch. The gate would then pass on code the Security Engineer never saw.

The control logic is unchanged in both cases. What differs is a repository setting that cannot be observed from the source tree at all.

This is a concrete illustration of the gap between a control that is documented and a control that actually holds, which is one of the questions the project set out to examine.

---

## Evidence as a development by-product

A recurring principle in our SSDLC is that evidence should, where practical, be generated by performing the security activity itself.

For example:

```text
Developer opens PR
       │
       ├── CI executes ───────────────► workflow history
       │
       ├── Tests execute ─────────────► coverage report
       │
       ├── CodeQL executes ───────────► analysis results
       │
       ├── Dependency review executes ► dependency result
       │
       ├── Risk gate executes ────────► gate result
       │
       └── SBOM generation executes ──► CycloneDX / SPDX
```

This does not make the resulting evidence automatically audit-ready.

It demonstrates the technical foundation for maintaining traceability between software changes, security activities and their outputs.

Additional governance would still be required to define evidence ownership, retention, approval and long-term storage.

---

## Relationship to the Cyber Resilience Act

The SSDLC was designed with the Cyber Resilience Act (CRA) as one of its regulatory considerations.

NordVault demonstrates selected technical mechanisms that could contribute to CRA-related software security activities.

Examples include:

| Area | Demonstrated mechanism |
|---|---|
| Software component visibility | SBOM generation |
| Vulnerability detection | CodeQL and dependency analysis |
| Dependency maintenance | Dependabot |
| Security testing | CI and automated testing |
| Vulnerability disclosure | `SECURITY.md` |
| Risk-based development | Risk classification and approval gate |
| Technical evidence | Workflow history and retained artifacts |

This mapping is **illustrative**.

NordVault does not represent a CRA conformity assessment, nor does implementing these workflows by itself establish CRA compliance.

Many CRA-related responsibilities exist outside a source-code repository, including organisational governance, vulnerability handling, reporting, product support, documentation, risk management and post-market processes.

The purpose of this project is instead to demonstrate how selected requirements arising from a broader compliance and security framework can influence the technical development process.

---

## What is intentionally not implemented

NordVault does **not** attempt to automate the complete SSDLC.

Examples of activities that remain outside or only partially represented by the repository include:

- organisational risk acceptance;
- formal threat-modelling workshops;
- architecture review;
- stakeholder approval;
- compliance interpretation;
- security requirements definition;
- incident response;
- vulnerability triage and remediation decisions;
- release authorisation;
- monitoring of deployed production infrastructure;
- product-support processes;
- long-term regulatory evidence storage;
- formal CRA conformity assessment.

These activities remain part of the wider SSDLC even when they cannot reasonably be represented by a GitHub Action.

---

## Repository structure

```text
.github/
├── workflows/
│   ├── ci.yml
│   ├── codeql.yml
│   ├── dependency-review.yml
│   ├── risk-gate.yml
│   └── sbom.yml
│
├── ISSUE_TEMPLATE/
├── CODEOWNERS
├── PULL_REQUEST_TEMPLATE.md
└── dependabot.yml

docs/
├── README.md                 Phase index, risk model, CRA scope
├── fase-1-planlaegning.md    …through fase-7-operations.md
├── security/                 Intended location for threat models and test reports
└── releases/                 Intended location for release notes

src/
└── Demo application used by the security workflows

tests/
└── Automated test suite

SECURITY.md
└── Vulnerability disclosure information
```

The main substance of the repository is therefore not the demonstration application itself, but the relationship between:

```text
docs/
    ↓
SSDLC requirements
    ↓
.github/
    ↓
Development controls
```

---

## Running locally

The project requires Node.js 24 or later.

Install the locked dependencies:

```bash
npm ci
```

Run linting:

```bash
npm run lint
```

Build the application:

```bash
npm run build
```

Run the tests:

```bash
npm test
```

Start the development application:

```bash
npm run dev
```

---

## Scope and limitations

NordVault ApS is a fictional company used as the context for the project.

The application exists primarily to provide something realistic for the SSDLC controls to operate against.

This repository should therefore be interpreted as:

> **A proof-of-concept implementation showing how selected controls from our SSDLC can be operationalised in a development platform.**

It should not be interpreted as:

> A production-ready application, a complete implementation of the SSDLC, or evidence of regulatory conformity.

The distinction is deliberate.

The wider SSDLC defines **what should happen across the lifecycle**.

NordVault demonstrates **how selected parts of that model could be implemented technically**.

---

## Language

The SSDLC documentation and several operational artifacts are written in Danish because the original project was produced in a Danish context.

The application code and this README primarily use English.
