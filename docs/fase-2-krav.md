# Fase 2: Krav og Acceptkriterier

> Del af NordVaults SSDLC. Se [faseoversigten](./README.md) for de øvrige faser.

| Rolle | RACI | Overordnet ansvar i fasen |
| --- | --- | --- |
| Product Owner | A/R | Ejer de funktionelle krav og godkender at acceptkriterier matcher forretningsformålet |
| Engineering Lead | R | Specificerer ikke-funktionelle krav og tekniske acceptkriterier |
| System/Solution Architect | C/A ved middel/høj risiko | Vurderer kravenes arkitekturmæssige konsekvenser og trust boundary-påvirkning |
| Security Engineer | C/A ved middel/høj risiko | Specificerer og validerer sikkerhedskrav og sikkerhedsrelaterede acceptkriterier |
| Tester/QA | C/R | Godkender at acceptkriterier er testbare og udleder indledende testscenarier |
| DevOps/Ops | C | Bidrager til krav vedrørende logging, monitorering og driftsmæssig observabilitet |

## 1. Formål

Fase 2 omsætter de overordnede krav og risikoklassificeringen fra fase 1 til et fuldt specificeret og verificerbart kravgrundlag. Det indebærer at konkretisere funktionelle krav til user stories og backlog items, specificere sikkerhedskrav på et niveau der kan verificeres i fase 5, og formulere acceptkriterier der kan bruges som direkte grundlag for test og releasevalidering.

Fasen eksisterer i SSDLC'en fordi sporbarhed fra krav til test til release forudsætter, at kravene er formuleret præcist nok til at blive verificeret. Krav der er for løse eller ikke kobles eksplicit til sikkerhedsrelaterede acceptkriterier kan ikke spores fremad i udviklingsforløbet og mister deres dokumentationsværdi som evidens.

## 2. Roller og Ansvar

### 2.1 Product Owner

- Ejer og prioriterer de funktionelle krav
- Godkender at acceptkriterier afspejler forretningsformålet og det ønskede udkomme
- Godkendelsesautoritet for kravenes scope og prioritering

**Ansvarlig for følgende:**

- Godkendte funktionelle krav dokumenteret i GitHub Issues
- Godkendelse af acceptkriterier dokumenteret som issue-kommentar

### 2.2 Engineering Lead

- Specificerer ikke-funktionelle krav, herunder ydeevne, skalerbarhed og vedligeholdbarhed
- Formulerer tekniske acceptkriterier på implementeringsniveau
- Identificerer tekniske afhængigheder og begrænsninger der påvirker implementeringen

**Ansvarlig for følgende:**

- Ikke-funktionelle krav dokumenteret i GitHub Issue
- Tekniske acceptkriterier dokumenteret per krav

### 2.3 System/Solution Architect

- Vurderer om kravene introducerer nye arkitekturmæssige implikationer der ikke var identificeret i fase 1
- Identificerer krav der berører systemgrænser, integrationer eller trust boundaries
- Godkendelsesautoritet for arkitekturpåvirkende krav ved middel/høj risiko

**Ansvarlig for følgende:**

- Eventuelle arkitekturmæssige bemærkninger dokumenteret som issue-kommentar
- Opdatering af komponent- og dataflowoversigt fra fase 1 hvis nye krav ændrer billedet

### 2.4 Security Engineer

- Specificerer sikkerhedskrav på et konkret og verificerbart niveau med reference til relevante OWASP ASVS-kontrolkrav hvor det er relevant
- Kobler sikkerhedskrav eksplicit til de funktionelle krav de adresserer
- Formulerer sikkerhedsrelaterede acceptkriterier og markerer dem tydeligt
- Godkendelsesautoritet for sikkerhedskrav ved middel/høj risiko

**Ansvarlig for følgende:**

- Sikkerhedskrav dokumenteret i GitHub Issue med kobling til funktionelle krav
- Sikkerhedsrelaterede acceptkriterier markeret og dokumenteret separat

### 2.5 Tester/QA

- Gennemgår alle acceptkriterier og vurderer om de er testbare og entydige
- Udleder indledende testscenarier og identificerer krav til testdata
- Markerer acceptkriterier der kræver manuel verifikation frem for automatiseret test

**Ansvarlig for følgende:**

- Godkendelse af acceptkriterier som testbare, dokumenteret som issue-kommentar
- Indledende testscenarier dokumenteret i issue eller som tilknyttet test-issue

### 2.6 DevOps/Ops

- Bidrager til krav vedrørende logging, monitorering, alerting og auditbarhed hvor ændringen påvirker driften
- Identificerer krav til observabilitet der skal implementeres som del af ændringen

**Ansvarlig for følgende:**

- Drifts- og observabilitetsrelaterede krav dokumenteret som afsnit eller kommentar i GitHub Issue

## 3. Scope

Fasen gælder for alle ændringer der gennemgik fase 1 med en godkendt risikoklassificering. Indholdet skaleres efter klassificeringen.

For lavrisiko ændringer kan krav og acceptkriterier specificeres direkte i det eksisterende issue fra fase 1 uden at oprette separate child issues. Sikkerhedskrav dokumenteres i et kortfattet afsnit, og acceptkriterierne behøver ikke opdeles yderligere end det formål og scope der allerede er beskrevet.

For middel og høj risiko ændringer skal sikkerhedskrav specificeres eksplicit på kontrolniveau, acceptkriterier skal formuleres per krav og markeres tydeligt som henholdsvis funktionelle og sikkerhedsrelaterede, og **Security Engineer** skal godkende kravgrundlaget inden fasen afsluttes.

## 4. Entry & Exit Criteria

### 4.1 Entry Criteria

- Fase 1 er afsluttet og godkendt med risikoklassificering, begrundelse og beslutning om obligatoriske sikkerhedsaktiviteter
- GitHub Issue med formål, scope og overordnede krav eksisterer og er godkendt af **Product Owner**

### 4.2 Exit Criteria

- Funktionelle krav er specificeret som user stories eller backlog items og dokumenteret i GitHub
- Ikke-funktionelle krav er specificeret og dokumenteret
- Sikkerhedskrav er specificeret og eksplicit koblet til de funktionelle krav de adresserer
- Alle acceptkriterier er dokumenteret per krav og godkendt som testbare af **Tester/QA**
- Sikkerhedsrelaterede acceptkriterier er markeret og kan genfindes i fase 5
- **Security Engineer** har godkendt sikkerhedskrav ved middel/høj risiko
- Eventuelle nye arkitekturpåvirkninger er noteret og vurderet af **System/Solution Architect**

## 5. Process Trigger

Fasen udløses når:

- Fase 1 er afsluttet med godkendt risikoklassificering
- En ændring er godkendt til videre specificering af **Product Owner**
- En eksisterende feature skal udvides på en måde der kræver respecificering af krav og acceptkriterier
- **Security Engineer** har i fase 1 identificeret sikkerhedskrav der kræver detaljeret udspecificering inden design og implementering påbegyndes

## 6. Obligatoriske aktiviteter

### 6.1 Specificering af funktionelle krav

**Engineering Lead** og **Product Owner** specificerer de funktionelle krav i fællesskab. De overordnede krav fra fase 1 nedbrydes til konkrete user stories og backlog items. Hvert krav dokumenteres i GitHub som et selvstændigt issue eller som strukturerede afsnit i parent issue og tildeles den milestone ændringen tilhører.

**Artefakter fra aktiviteten:**

- User stories og backlog items dokumenteret i GitHub med kobling til parent issue
- Funktionelle krav prioriteret og tildelt milestone

### 6.2 Specificering af ikke-funktionelle krav

**Engineering Lead** specificerer ikke-funktionelle krav med bidrag fra **System/Solution Architect** ved arkitekturrelevante krav. Krav til ydeevne, skalerbarhed, tilgængelighed og vedligeholdbarhed dokumenteres eksplicit, da de kan have direkte konsekvenser for sikkerhedsarkitekturen i fase 3.

**Artefakter fra aktiviteten:**

- Ikke-funktionelle krav dokumenteret i GitHub Issue

### 6.3 Specificering af sikkerhedskrav

**Security Engineer** specificerer de konkrete sikkerhedskrav baseret på risikoklassificeringen og de obligatoriske sikkerhedsaktiviteter besluttet i fase 1. Kravene formuleres på et niveau der er specifikt nok til at kunne verificeres i fase 5. For ændringer der berører autentifikation, autorisation, inputvalidering eller databehandling refereres relevante OWASP ASVS-kontrolkrav eksplicit.

Hvert sikkerhedskrav kobles til det eller de funktionelle krav det adresserer, så sporbarhed er etableret fra dag ét. Ved lavrisiko ændringer dokumenteres det eksplicit at ingen yderligere sikkerhedskrav er identificeret ud over dem der allerede fremgår af fase 1.

**Artefakter fra aktiviteten:**

- Sikkerhedskrav dokumenteret i GitHub Issue med eksplicit kobling til funktionelle krav
- OWASP ASVS-referencer noteret ved relevante krav
- Eksplicit notat ved lavrisiko ændringer uden yderligere sikkerhedskrav

### 6.4 Formulering af acceptkriterier

**Tester/QA** og **Engineering Lead** formulerer acceptkriterier per krav i samarbejde med **Product Owner**. Hvert acceptkriterie skal være specifikt, verificerbart og entydigt. Sikkerhedsrelaterede acceptkriterier formuleres med input fra **Security Engineer** og markeres tydeligt, så de kan identificeres og verificeres målrettet i fase 5.

Acceptkriterier der forudsætter manuel verifikation frem for automatiseret test markeres separat af **Tester/QA**.

**Artefakter fra aktiviteten:**

- Acceptkriterier dokumenteret per krav i GitHub Issue
- Sikkerhedsrelaterede acceptkriterier markeret og adskilt fra funktionelle
- Notat om manuel eller automatiseret verifikation per kriterie

### 6.5 Kravvalidering og godkendelse

Inden fasen afsluttes gennemgår **Security Engineer** sikkerhedskravene og de sikkerhedsrelaterede acceptkriterier og bekræfter at de er tilstrækkelige i forhold til risikoklassificeringen. **Product Owner** godkender det samlede kravgrundlag som afspejlende forretningsformålet. **Tester/QA** bekræfter at alle acceptkriterier er testbare. Godkendelserne dokumenteres som issue-kommentarer fra de respektive roller.

**Artefakter fra aktiviteten:**

- Issue-kommentar fra **Security Engineer** med godkendelse af sikkerhedskrav ved middel/høj risiko
- Issue-kommentar fra **Product Owner** med godkendelse af kravgrundlag
- Issue-kommentar fra **Tester/QA** med bekræftelse af testbarhed

## 7. Artefakter og Exit Gate

### 7.1 Artefakter

De primære artefakter fra fase 2 er dokumenteret i GitHub:

- User stories og backlog items med kobling til parent issue
- Ikke-funktionelle krav
- Sikkerhedskrav med eksplicit kobling til funktionelle krav og OWASP ASVS-referencer hvor relevant
- Acceptkriterier per krav med markering af sikkerhedsrelaterede kriterier
- Godkendelseskommentarer fra **Product Owner**, **Security Engineer** og **Tester/QA**

### 7.2 Exit Gate

Fasen er først afsluttet når alle krav er dokumenteret og godkendt i GitHub, sikkerhedskrav er valideret af **Security Engineer** ved middel/høj risiko, og samtlige acceptkriterier er bekræftet testbare af **Tester/QA**. Ingen ændring må gå videre til fase 3 uden at dette er på plads.

## 8. Compliance & Enforcement

Fase 2 håndhæves gennem GitHub Issues og den godkendelsesstruktur der er beskrevet under roller og ansvar. Issue template for fase 2 indeholder obligatoriske afsnit for funktionelle krav, ikke-funktionelle krav, sikkerhedskrav og acceptkriterier. Afsnit der efterlades tomme skal indeholde en eksplicit begrundelse, eksempelvis en notering om at ingen yderligere sikkerhedskrav er identificeret ved lavrisiko ændringer.

Ved middel og høj risiko er godkendelseskommentarer fra **Security Engineer** og **Tester/QA** påkrævede exit-krav. **Engineering Lead** er ansvarlig for at verificere at alle afsnit er udfyldt og at godkendelseskommentarerne er på plads inden issue lukkes og ændringen flyttes til fase 3.

Der er ikke etableret automatiseret enforcement på dette stadie, da kravspecificering er en manuel aktivitet der forudsætter menneskelig vurdering. Enforcement sker i stedet gennem fasens exit gate og den dokumenterede godkendelsesstruktur.
