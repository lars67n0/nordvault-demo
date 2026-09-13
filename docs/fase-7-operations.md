# Fase 7: Operations, Monitorering og Kontinuerlig Forbedring

> Del af NordVaults SSDLC. Se [faseoversigten](./README.md) for de øvrige faser.

| Rolle | RACI | Overordnet ansvar i fasen |
| --- | --- | --- |
| DevOps/Ops | A/R | Ejer driftsovervågning, monitorering og den løbende sårbarhedshåndteringsproces |
| Security Engineer | R/A | Vurderer sikkerhedshændelser og sikkerhedsfund og koordinerer sårbarhedshåndtering |
| Engineering Lead | R | Håndterer tekniske rettelser og sikkerhedsopdateringer |
| System/Solution Architect | C | Rådgiver ved fund der kræver arkitekturmæssige ændringer |
| Tester/QA | C | Verificerer rettelser og sikkerhedsopdateringer inden de releases |
| Product Owner | C/A | Godkender prioritering af sikkerhedsopdateringer og accepterede restrisici |

## 1. Formål

Fase 7 dækker produktets liv efter release. Fasens formål er at sikre at sikkerhed ikke ophører ved deployment, men forbliver en aktiv og dokumenteret proces gennem hele produktets supportperiode. Det indebærer løbende monitorering af produktionsmiljøet, struktureret håndtering af identificerede sårbarheder, distribution af sikkerhedsopdateringer og en systematisk tilbagekobling af erfaringer fra drift til de tidligere faser i SSDLC'en.

Fasen er særligt relevant i forhold til CRA, fordi forordningen stiller krav om at producenter aktivt håndterer sårbarheder og leverer sikkerhedsopdateringer i hele produktets supportperiode. En udokumenteret eller reaktiv sårbarhedshåndteringsproces er ikke tilstrækkelig. Det skal kunne dokumenteres hvordan sårbarheder identificeres, prioriteres, håndteres og lukkes, og hvordan processen fungerer konsistent over tid.

## 2. Roller og Ansvar

### 2.1 DevOps/Ops

- Ejer driftsovervågningen og er ansvarlig for at monitoreringen fungerer og genererer relevante alerts
- Håndterer driftshændelser og koordinerer med **Security Engineer** ved sikkerhedsrelevante hændelser
- Vedligeholder og opdaterer monitorerings- og loggingkonfiguration
- Godkendelsesautoritet for driftsmæssige ændringer og konfigurationsopdateringer

**Ansvarlig for følgende:**

- Monitorerings- og loggingkonfiguration dokumenteret og versioneret
- Driftshændelser dokumenteret som GitHub Issues med korrekte labels
- Alerting-konfiguration vedligeholdt og testet

### 2.2 Security Engineer

- Ejer sårbarhedshåndteringsprocessen og er ansvarlig for at identificerede sårbarheder håndteres struktureret
- Vurderer og prioriterer sikkerhedsfund fra monitorering, Dependabot-alerts og eksterne rapporteringer
- Koordinerer håndtering af aktivt udnyttede sårbarheder og alvorlige hændelser
- Godkendelsesautoritet for prioritering og accepterede restrisici i sårbarhedshåndteringen

**Ansvarlig for følgende:**

- Sårbarhedshåndteringslog opdateret løbende med status på identificerede sårbarheder
- Sikkerhedsfund dokumenteret som GitHub Issues med label `sikkerhedsfund` og prioritering
- Rapportering af aktivt udnyttede sårbarheder i overensstemmelse med CRA artikel 14

### 2.3 Engineering Lead

- Håndterer tekniske rettelser af identificerede sårbarheder
- Prioriterer sikkerhedsopdateringer i backlog i samarbejde med **Product Owner** og **Security Engineer**
- Sikrer at rettelser gennemgår den relevante del af SSDLC'en fra fase 2 eller fase 4 afhængigt af rettelsens omfang

**Ansvarlig for følgende:**

- Rettelser implementeret som pull requests med reference til sårbarhedsissue
- Backlog opdateret med sikkerhedsopdateringer og prioritering

### 2.4 System/Solution Architect

- Vurderer fund der kræver arkitekturmæssige ændringer frem for isolerede rettelser
- Rådgiver om rettelsesstrategier ved komplekse eller systemomspændende sårbarheder

**Ansvarlig for følgende:**

- Arkitekturmæssige anbefalinger dokumenteret som issue-kommentar ved relevante fund

### 2.5 Tester/QA

- Verificerer rettelser og sikkerhedsopdateringer inden de gennemgår fase 6
- Gennemfører regressionstest ved rettelser der påvirker eksisterende funktionalitet

**Ansvarlig for følgende:**

- Testresultater for rettelser dokumenteret med reference til sårbarhedsissue

### 2.6 Product Owner

- Godkender prioritering af sikkerhedsopdateringer i forhold til øvrig backlog
- Tager stilling til accepterede restrisici der præsenteres af **Security Engineer**
- Godkendelsesautoritet for forretningsmæssig prioritering af sikkerhedsopdateringer

**Ansvarlig for følgende:**

- Godkendelse af prioritering dokumenteret som issue-kommentar
- Accept af restrisici dokumenteret eksplicit med begrundelse

## 3. Scope

Fasen er kontinuerlig og løber parallelt med de øvrige faser i SSDLC'en. Den dækker alle produkter og releases der er i aktiv supportperiode hos NordVault.

Fasen omfatter løbende monitorering og alerting, håndtering af sårbarheder identificeret gennem automatiserede scanninger, Dependabot-alerts, interne reviews eller ekstern rapportering, samt distribution af sikkerhedsopdateringer til kunder. Den omfatter desuden den periodiske tilbagekobling af erfaringer fra drift til SSDLC'ens tidligere faser.

Hotfixes og kritiske sikkerhedsopdateringer der kræver accelereret behandling gennemgår en forkortet version af SSDLC'en fra fase 4, med obligatorisk sikkerhedsfokuseret code review fra **Security Engineer** og godkendelse fra **Engineering Lead** inden release. Ændringer der er komplekse eller introducerer nye komponenter genoptager SSDLC'en fra fase 1.

## 4. Entry & Exit Criteria

### 4.1 Entry Criteria

- Fase 6 er afsluttet med succesfuld deployment og arkiverede releaseartefakter
- Monitorerings- og loggingkonfiguration er aktiv og konfigureret korrekt
- Sårbarhedshåndteringsproces er etableret og kommunikeret til relevante roller
- Dependabot og øvrige automatiserede scanningsværktøjer er aktive for den deployede release

### 4.2 Exit Criteria

Fase 7 har ikke et afgrænset exit i traditionel forstand, da fasen er kontinuerlig. Fasen afsluttes når produktet udgår af aktiv support. Det der kan auditeres løbende er:

- Alle identificerede sårbarheder er dokumenteret i sårbarhedshåndteringsloggen med status
- Kritiske og høje sårbarheder er håndteret inden for de definerede svartider
- Sikkerhedsopdateringer er distribueret til kunder inden for supportperiodens krav
- Aktivt udnyttede sårbarheder og alvorlige hændelser er rapporteret i overensstemmelse med CRA artikel 14
- Periodisk tilbagekobling til SSDLC'en er gennemført og dokumenteret

## 5. Process Trigger

Fasen udløses løbende ved:

- Identificeret sårbarhed i deployet software via Dependabot-alert, SAST-scanning, ekstern rapportering eller intern review
- Sikkerhedsrelevant driftshændelse identificeret via monitorering eller alerting
- Ny CVE der påvirker en afhængighed i NordVaults produkter
- Periodisk sårbarhedsgennemgang initieret af **Security Engineer**
- Tilbagekoblingspunkt ved afslutning af en større release eller efter en sikkerhedshændelse

## 6. Obligatoriske aktiviteter

### 6.1 Løbende monitorering og alerting

**DevOps/Ops** vedligeholder en monitorerings- og loggingkonfiguration der dækker produktionsmiljøets sikkerhedsrelevante hændelser. Det omfatter applikationslogning, fejllogning, adgangsforsøg og anomalidetektering. Alerts konfigureres til at notificere **Security Engineer** og **DevOps/Ops** ved sikkerhedsrelevante hændelser. Monitoreringskonfigurationen er versioneret i repository og gennemgås periodisk for at sikre at den afspejler produktets aktuelle angrebsoverflade.

**Artefakter fra aktiviteten:**

- Monitorerings- og loggingkonfiguration dokumenteret og versioneret i repository
- Alerting-konfiguration dokumenteret med tærskelværdier og notifikationsruter

### 6.2 Sårbarhedshåndtering

**Security Engineer** ejer sårbarhedshåndteringsprocessen og sikrer at alle identificerede sårbarheder behandles struktureret. Når en sårbarhed identificeres, dokumenteres den som et GitHub Issue med label `sikkerhedsfund`, tildeles en prioritering baseret på CVSS-score og kontekstuel risikovurdering, og en ansvarlig rolleindehaver tildeles. Svartider for håndtering følger nedenstående skema:

| Prioritering | Karakteristika | Svartid for rettelse |
| --- | --- | --- |
| Kritisk | CVSS 9.0-10.0 eller aktivt udnyttet | 72 timer |
| Høj | CVSS 7.0-8.9 | 14 dage |
| Middel | CVSS 4.0-6.9 | 90 dage |
| Lav | CVSS 0.1-3.9 | Næste planlagte release |

Sårbarheder der ikke kan rettes inden for svartiden dokumenteres med en begrundelse og en accepteret restrisiko godkendt af **Product Owner**.

**Artefakter fra aktiviteten:**

- Sårbarhedshåndteringslog opdateret med alle identificerede sårbarheder, prioritering og status
- GitHub Issues med label `sikkerhedsfund` oprettet per sårbarhed
- Accepterede restrisici dokumenteret med begrundelse og godkendelse fra **Product Owner**

### 6.3 Håndtering af Dependabot-alerts og afhængighedsopdateringer

**Security Engineer** og **Engineering Lead** gennemgår løbende Dependabot-alerts og vurderer hvilke der kræver øjeblikkelig handling og hvilke der kan indgå i den næste planlagte release. Kritiske og høje Dependabot-alerts behandles som sikkerhedsfund og håndteres inden for de definerede svartider. Opdateringer af afhængigheder gennemgår en forkortet version af fase 4 med automatiserede scanninger og code review inden de merges.

**Artefakter fra aktiviteten:**

- Dependabot-alerts dokumenteret og prioriteret i GitHub
- Afhængighedsopdateringer implementeret som pull requests med reference til Dependabot-alert

### 6.4 Distribution af sikkerhedsopdateringer

Når en sårbarhed er rettet og verificeret distribueres en sikkerhedsopdatering til kunder via NordVaults etablerede distributionskanal. For den self-hostede variant betyder det at en ny release publiceres med releasenotater der eksplicit beskriver hvilke sårbarheder der er adresseret. Distributionen dokumenteres med tidspunkt og versionsnummer så det kan verificeres at opdateringen er distribueret inden for de svartider der er defineret i sårbarhedshåndteringsprocessen.

**Artefakter fra aktiviteten:**

- Sikkerhedsopdatering publiceret som GitHub Release med releasenotater
- Distributionstidspunkt og versionsnummer dokumenteret
- SBOM opdateret og arkiveret for den nye release

### 6.5 Rapportering i henhold til CRA artikel 14

Ved aktivt udnyttede sårbarheder eller alvorlige sikkerhedshændelser er **Security Engineer** ansvarlig for at rapportering sker i overensstemmelse med CRA artikel 14. Det indebærer en indledende notifikation til relevante myndigheder inden for 24 timer efter hændelsen er identificeret, samt en opfølgende rapport inden for 72 timer. Rapporteringen dokumenteres internt med tidspunkt, hændelsesdetaljer og de foranstaltninger der er iværksat.

**Artefakter fra aktiviteten:**

- Intern hændelsesrapport dokumenteret med tidspunkt og hændelsesdetaljer
- Ekstern rapportering dokumenteret med afsendelsestidspunkt og modtager

### 6.6 Periodisk tilbagekobling til SSDLC'en

**Security Engineer** og **Engineering Lead** gennemfører en periodisk gennemgang af erfaringer fra drift, håndterede sårbarheder og sikkerhedshændelser med henblik på at identificere mønstre der bør føre til opdatering af SSDLC'ens tidligere faser. Det kan eksempelvis være sikkerhedsfund der gentager sig og indikerer mangler i trusselsmodelleringen, sårbarhedstyper der ikke fanges af de eksisterende automatiserede scanninger, eller accepterede restrisici der bør genovervejes. Tilbagekoblingen dokumenteres og omsættes til konkrete backlog items i SSDLC'en.

**Artefakter fra aktiviteten:**

- Tilbagekoblingsrapport dokumenteret med identificerede mønstre og anbefalinger
- Backlog items oprettet med reference til tilbagekoblingsrapporten

## 7. Artefakter og Exit Gate

### 7.1 Artefakter

De primære artefakter fra fase 7 er:

- Sårbarhedshåndteringslog med alle identificerede sårbarheder, prioritering og status
- GitHub Issues med label `sikkerhedsfund` per identificeret sårbarhed
- Dependabot-alerts dokumenteret og prioriteret
- Sikkerhedsopdateringer publiceret som GitHub Releases med releasenotater og opdateret SBOM
- Interne hændelsesrapporter ved sikkerhedsrelevante hændelser
- Ekstern rapporteringsdokumentation ved hændelser omfattet af CRA artikel 14
- Tilbagekoblingsrapporter med anbefalinger til SSDLC'en

### 7.2 Exit Gate

Fase 7 afsluttes når produktet udgår af aktiv support. Løbende kan følgende auditeres som evidens for at fasen fungerer som forventet: sårbarhedshåndteringsloggen er opdateret og komplet, kritiske og høje sårbarheder er håndteret inden for de definerede svartider, sikkerhedsopdateringer er distribueret og dokumenteret, og tilbagekoblinger til SSDLC'en er gennemført og sporbare.

## 8. Compliance & Enforcement

Fase 7 adskiller sig fra de øvrige faser ved at der ikke findes en merge eller en release der kan blokeres. Enforcement består derfor dels af automatiserede mekanismer der holdes kørende, dels af proceduremæssige kontroller med eksplicit dokumenteret status.

Den løbende scanning er automatiseret og uafhængig af udviklingsaktivitet. CodeQL kører planlagt på main-branch ugentligt og ikke kun ved pull request, så kode der allerede er released fortsat analyseres mod nye regler. Dependabot kører ugentligt mod både npm-afhængigheder og GitHub Actions-versioner. Sikkerhedsopdateringer fra Dependabot aktiveres separat i repository-indstillingerne og åbner pull requests der gennemgår de samme required status checks som enhver anden ændring.

Scanningskonfigurationen er selv beskyttet. `dependabot.yml` og `/.github/workflows/` er co-ownede i `CODEOWNERS`, så overvågningen ikke kan deaktiveres uden review fra både **Engineering Lead** og **Security Engineer**. Det forhindrer at fase 7's grundlag fjernes stille.

Sårbarhedshåndteringsloggen føres som GitHub Issues med label `sikkerhedsfund`. Hvert issue kobles til den pull request der retter sårbarheden, og den pull request kobles til den release der distribuerer rettelsen. Kæden fra identificeret sårbarhed til distribueret opdatering er dermed sporbar uden en separat log.

Den eksterne indgang til sårbarhedsrapportering er `SECURITY.md` sammen med GitHubs private vulnerability reporting. Det udgør den kanal og det kontaktpunkt som CRA bilag I del II kræver, og rapporter herfra behandles efter samme proces som interne fund.

### 8.1 Kendte begrænsninger

Svartiderne i §6.2 håndhæves ikke teknisk. GitHub blokerer ikke noget når en frist for et `sikkerhedsfund` overskrides, og der findes ingen automatisk eskalering. Kontrollen håndhæves gennem den periodiske sårbarhedsgennemgang, og overskredne frister skal dokumenteres eksplicit som accepteret restrisiko med godkendelse fra **Product Owner**. Kontrollen er dermed ikke stærkere end gennemgangens kadence, og kadencen skal være fastlagt og overholdt for at svartiderne har reel effekt.

Rapporteringen efter CRA artikel 14 i §6.5 kan ikke håndhæves i et repository. Den er en organisatorisk beredskabsproces med en 24-timers frist der løber fra det øjeblik NordVault bliver bekendt med en aktivt udnyttet sårbarhed. Det repositoryet bidrager med er komponentoversigten, altså SBOM'en og afhængighedsgrafen, der gør det muligt at afgøre inden for fristen om en rapporteret sårbarhed overhovedet rammer produktet. En producent kan ikke rapportere det den ikke kan se, og det er derfor SBOM-genereringen i fase 4 og arkiveringen i fase 6 er en forudsætning for at denne fase kan fungere.
