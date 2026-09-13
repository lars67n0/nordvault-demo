# Fase 6: Kontrolleret Release og Deployment

> Del af NordVaults SSDLC. Se [faseoversigten](./README.md) for de øvrige faser.

| Rolle | RACI | Overordnet ansvar i fasen |
| --- | --- | --- |
| Engineering Lead | A/R | Ejer releaseprocessen og er ansvarlig for at alle exit criteria fra fase 5 er opfyldt inden release godkendes |
| DevOps/Ops | R | Gennemfører den tekniske deployment og vedligeholder releaseprocessen |
| Security Engineer | C/A ved middel/høj risiko | Validerer sikkerhedstilstanden og godkender release fra et sikkerhedsmæssigt perspektiv |
| System/Solution Architect | C | Rådgiver ved arkitekturrelaterede deploymentproblemer |
| Tester/QA | C | Bekræfter at testrapport og acceptkriterier er opfyldt som grundlag for releasebeslutningen |
| Product Owner | A | Godkender release fra et forretningsmæssigt perspektiv |

## 1. Formål

Fase 6 er det kontrollerede overgangsled mellem verificeret kode og produktionsmiljø. Fasens formål er at sikre at ingen ændring deployes til produktion uden at sikkerhedstilstanden er dokumenteret, godkendt og sporbar. Det er her releasebeslutningen formaliseres, releasenotater udarbejdes, og deployment gennemføres på en kontrolleret måde der kan reproduceres og auditeres.

Fasen eksisterer i SSDLC'en fordi deployment uden et formaliseret godkendelsestrin er en velkendt årsag til at sikkerhedsrelaterede problemer når produktion. En kontrolleret releaseproces sikrer at evidensen fra de foregående faser samles og godkendes som et samlet grundlag, inden ændringen eksponeres for slutbrugere. Det er samtidig her at SBOM'en og øvrige releaseartefakter arkiveres på en måde der understøtter CRA-relaterede dokumentationskrav.

## 2. Roller og Ansvar

### 2.1 Engineering Lead

- Ejer releaseprocessen og sammenstiller releasenotater og releaseartefakter
- Verificerer at alle exit criteria fra fase 5 er opfyldt inden releasebeslutningen træffes
- Koordinerer godkendelsesrunden inden deployment påbegyndes
- Godkendelsesautoritet for den tekniske releasebeslutning

**Ansvarlig for følgende:**

- Releasenotater dokumenteret med reference til tilknyttede issues og ændringer
- Bekræftelse af at exit criteria fra fase 5 er opfyldt dokumenteret som issue-kommentar
- Koordinering af godkendelseskommentarer inden deployment

### 2.2 DevOps/Ops

- Gennemfører den tekniske deployment til produktionsmiljøet
- Vedligeholder og konfigurerer releaseprocessen og deployment-pipelines
- Overvåger deployment og verificerer at ændringen er korrekt deployet
- Ruller deployment tilbage ved kritiske problemer efter deployment

**Ansvarlig for følgende:**

- Deployment gennemført og verificeret
- Deployment-log dokumenteret som pipeline-artefakt
- Eventuel rollback dokumenteret med begrundelse

### 2.3 Security Engineer

- Gennemgår sikkerhedstilstanden inden release ved middel og høj risiko
- Verificerer at alle sikkerhedsfund fra fase 4 og 5 er håndteret eller formelt accepteret
- Godkendelsesautoritet for sikkerhedsmæssig releasegodkendelse ved middel/høj risiko

**Ansvarlig for følgende:**

- Sikkerhedsmæssig releasegodkendelse dokumenteret som issue-kommentar ved middel/høj risiko
- Bekræftelse af at åbne sikkerhedsfund er håndteret eller formelt accepteret

### 2.4 System/Solution Architect

- Rådgiver ved arkitekturrelaterede deploymentproblemer
- Godkender eventuelle last-minute designafvigelser der opstår under deployment

**Ansvarlig for følgende:**

- Godkendelse af arkitekturafvigelser dokumenteret som issue-kommentar

### 2.5 Tester/QA

- Bekræfter at testrapport og acceptkriterier fra fase 5 er opfyldt som grundlag for releasebeslutningen
- Gennemfører smoke test efter deployment for at verificere at kritisk funktionalitet fungerer i produktionsmiljøet

**Ansvarlig for følgende:**

- Bekræftelse af testrapport som releasegrundlag dokumenteret som issue-kommentar
- Smoke test efter deployment dokumenteret med resultat

### 2.6 Product Owner

- Godkender release fra et forretningsmæssigt perspektiv
- Tager stilling til eventuelle åbne risici der præsenteres inden release
- Godkendelsesautoritet for forretningsmæssig releasebeslutning

**Ansvarlig for følgende:**

- Forretningsmæssig releasegodkendelse dokumenteret som issue-kommentar
- Eventuel accept af åbne risici dokumenteret med begrundelse

## 3. Scope

Fasen gælder for alle ændringer der har gennemgået og bestået fase 5 med en godkendt testrapport. Omfanget af godkendelsesrunden skaleres efter risikoklassificeringen fra fase 1.

For lavrisiko ændringer er godkendelse fra **Engineering Lead** og **Product Owner** tilstrækkelig inden deployment. Smoke test efter deployment er obligatorisk for alle risikoniveauer.

For middel og høj risiko ændringer er sikkerhedsmæssig releasegodkendelse fra **Security Engineer** obligatorisk inden deployment påbegyndes. Releasenotater skal dokumentere sikkerhedstilstanden eksplicit, og SBOM'en arkiveres sammen med releasen.

## 4. Entry & Exit Criteria

### 4.1 Entry Criteria

- Fase 5 er afsluttet med godkendt og komplet testrapport
- Alle kritiske og høje sikkerhedsfund er håndteret eller formelt accepteret
- **Security Engineer** har godkendt sikkerhedsmæssig teststatus ved middel/høj risiko
- **Product Owner** har godkendt funktionel teststatus
- Releasenotater er udarbejdet og klar til godkendelse

### 4.2 Exit Criteria

- Releasebeslutning er godkendt af **Engineering Lead**, **Product Owner** og **Security Engineer** ved middel/høj risiko
- Deployment er gennemført og verificeret i produktionsmiljøet
- Smoke test efter deployment er gennemført og bestået
- Releasenotater er færdiggjort og arkiveret med reference til tilknyttede issues
- SBOM er arkiveret og koblet til den specifikke release
- Deployment-log er gemt som sporbar evidens
- Eventuelle deploymentproblemer er dokumenteret og håndteret

## 5. Process Trigger

Fasen udløses når:

- Fase 5 er afsluttet med godkendt testrapport og alle exit criteria er opfyldt
- En planlagt release er godkendt til deployment
- En kritisk sikkerhedsopdatering kræver accelereret release efter godkendelse fra **Security Engineer**
- En hotfix skal deployes som følge af en kritisk sårbarhed eller driftshændelse

## 6. Obligatoriske aktiviteter

### 6.1 Sammenstilling af releaseartefakter

**Engineering Lead** sammenstiller de releaseartefakter der udgør grundlaget for releasebeslutningen. Det omfatter testrapport fra fase 5, SBOM fra fase 4, sikkerhedsfund og deres håndtering, samt øvrige relevante artefakter fra de foregående faser. Formålet er at sikre at releasebeslutningen hviler på et komplet og dokumenteret grundlag der kan auditeres efterfølgende.

**Artefakter fra aktiviteten:**

- Samlet releaseartefaktpakke med reference til testrapport, SBOM og sikkerhedsfund
- Bekræftelse af at exit criteria fra fase 5 er opfyldt dokumenteret som issue-kommentar

### 6.2 Udarbejdelse af releasenotater

**Engineering Lead** udarbejder releasenotater der beskriver hvad der er ændret, hvilke sikkerhedsrelevante ændringer der er foretaget, og hvilken sikkerhedstilstand releasen er godkendt med. For middel og høj risiko ændringer dokumenteres sikkerhedstilstanden eksplicit i releasenotaterne, herunder hvilke sikkerhedskrav der er verificeret og hvilke eventuelle åbne risici der er accepteret. Releasenotaterne udgør den primære kommunikation til interne interessenter og til kunder ved distribution af opdateringer.

**Artefakter fra aktiviteten:**

- Releasenotater dokumenteret med ændringslog, sikkerhedsrelevante ændringer og sikkerhedstilstand
- Releasenotater gemt i repositoryets [`/docs/releases/`](./releases/)-mappe med reference til versionsnummer

### 6.3 Godkendelsesrunde inden deployment

Inden deployment påbegyndes gennemføres en struktureret godkendelsesrunde i GitHub. **Engineering Lead** bekræfter at alle exit criteria er opfyldt. **Product Owner** godkender releasen forretningsmæssigt. **Security Engineer** godkender sikkerhedstilstanden ved middel og høj risiko. Godkendelserne dokumenteres som issue-kommentarer på det tilknyttede release-issue. Deployment må ikke påbegyndes før alle påkrævede godkendelser er på plads.

**Artefakter fra aktiviteten:**

- Godkendelseskommentarer fra **Engineering Lead**, **Product Owner** og **Security Engineer** i GitHub Issue
- Release-issue markeret som godkendt til deployment

### 6.4 Deployment til produktionsmiljø

**DevOps/Ops** gennemfører deployment til produktionsmiljøet via den konfigurerede deployment-pipeline. Deployment sker på baggrund af den godkendte release og følger NordVaults deployment-procedure. Pipelinen genererer automatisk en deployment-log der dokumenterer hvad der er deployet, hvornår og af hvem. Ved deployment af den self-hostede variant distribueres releaseartefakterne til kunder via den etablerede distributionskanal.

**Artefakter fra aktiviteten:**

- Deployment-log genereret og uploadet som pipeline-artefakt
- Bekræftelse af succesfuld deployment dokumenteret

### 6.5 Smoke test efter deployment

**Tester/QA** gennemfører en smoke test i produktionsmiljøet umiddelbart efter deployment for at verificere at kritisk funktionalitet fungerer som forventet. Smoke testen dækker de mest centrale brugerflows og sikkerhedsrelevante funktioner, herunder autentifikation og adgangskontrol. Hvis smoke testen identificerer kritiske problemer initieres rollback-proceduren af **DevOps/Ops**.

**Artefakter fra aktiviteten:**

- Smoke test-resultat dokumenteret med bestået eller ikke bestået
- Eventuel rollback dokumenteret med begrundelse og tidspunkt

### 6.6 Arkivering af releaseartefakter

Efter succesfuld deployment arkiverer **DevOps/Ops** og **Engineering Lead** de primære releaseartefakter med kobling til det specifikke versionsnummer. SBOM'en arkiveres som et centralt artefakt der dokumenterer softwarens sammensætning på releasetidspunktet og udgør evidens i forhold til CRA-relaterede krav om software supply chain security. Arkiveringen sikrer at det er muligt at rekonstruere sikkerhedstilstanden for enhver given release i produktets supportperiode.

**Artefakter fra aktiviteten:**

- SBOM arkiveret og koblet til versionsnummer i GitHub Releases
- Testrapport arkiveret med reference til versionsnummer
- Releasenotater publiceret og arkiveret

## 7. Artefakter og Exit Gate

### 7.1 Artefakter

De primære artefakter fra fase 6 er:

- Releasenotater med ændringslog og sikkerhedstilstand
- Godkendelseskommentarer fra **Engineering Lead**, **Product Owner** og **Security Engineer**
- Deployment-log uploadet som pipeline-artefakt
- Smoke test-resultat dokumenteret
- SBOM arkiveret og koblet til versionsnummer
- Testrapport arkiveret med reference til release

### 7.2 Exit Gate

Fasen er først afsluttet når deployment er gennemført og verificeret, smoke test er bestået, alle releaseartefakter er arkiveret med korrekte referencer, og godkendelseskommentarerne fra de påkrævede roller er dokumenteret i GitHub. En release der ikke har gennemgået den fulde godkendelsesrunde betragtes ikke som kontrolleret og må ikke distribueres til kunder.

## 8. Compliance & Enforcement

Enforcement i fase 6 er delt mellem automatiserede mekanismer der udløses af selve release-handlingen, og proceduremæssige krav der håndhæves af rolleindehaverne.

På pipeline-niveau er SBOM-genereringen koblet direkte til release-begivenheden. Workflowet `sbom.yml` kører på `release: published` og genererer både CycloneDX- og SPDX-output med releasens tag-navn som reference. Arkiveringskravet i §6.6 er dermed en automatisk konsekvens af at publicere en release og ikke et manuelt skridt der kan glemmes.

På repository-niveau gates selve deployment-handlingen af et GitHub Environment med required reviewers. Deployment-jobbet kan ikke køre før en udpeget rolleindehaver har godkendt kørslen, og godkendelsen registreres i kørselsloggen. Det er den eneste del af godkendelsesrunden i §6.3 der håndhæves teknisk.

Releasenotater er versionerede filer i `/docs/releases/` og kan kun ændres gennem en pull request. De arver dermed hele enforcement-laget fra fase 4, herunder required status checks og code owner-review.

### 8.1 Kendte begrænsninger

Godkendelsesrunden i §6.3 dokumenteres som issue-kommentarer og håndhæves ikke af GitHub. En release kan teknisk publiceres uden at kommentarerne findes. Environment protection rules reducerer risikoen for den self-hostede distribution, men ikke for selve tag- og release-oprettelsen. Kontrollen er proceduremæssig, og **Engineering Lead** er ansvarlig for at verificere den inden release-issuet lukkes.

GitHub Actions-artefakter har en begrænset opbevaringstid, i dette repository 90 dage for SBOM'en. CRA stiller krav om at teknisk dokumentation kan fremvises i mindst ti år eller hele supportperioden, alt efter hvad der er længst. SBOM'en skal derfor også vedhæftes som asset på den tilhørende GitHub Release, så den overlever artefakt-retentionen. Så længe SBOM'en kun findes som pipeline-artefakt, er arkiveringskravet i §6.6 opfyldt på kort sigt men ikke over produktets supportperiode.
