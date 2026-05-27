---
name: NordVault - Ændring / Feature Request
about: "... Test"
title: "[Item-ID/Name]"
labels: ''
assignees: ''

---

▶️ Fase 1 – Planlægning og Risikoklassificering
📋 1. Ændringsbeskrivelse
Formål:
<!-- Beskriv hvad ændringen skal opnå og hvorfor -->
Scope:
<!-- Hvad er inden for og uden for scope -->
Forretningsmæssig begrundelse:

📋 2. Funktionelle krav
<!-- Overordnet niveau — fuld specificering sker i Fase 2 -->

[ ]
[ ]


📋 3. Ikke-funktionelle krav
<!-- Ydeevne, skalerbarhed, tilgængelighed, vedligeholdbarhed — markeret som draft -->

[ ]
[ ]


🔒 4. Indledende sikkerhedskrav

⚠️ Udfyldes af Security Engineer

Dataklassificering:
<!-- Hvilken type data behandles? -->

 Personoplysninger
 Løndata
 Identitetsdokumenter
 Interne compliance-dokumenter
 Andet:

Relevante sikkerhedsområder:

 Autentifikation
 Autorisation
 Inputvalidering
 Kryptering
 Sessionshåndtering
 Andet:


🔒 5. Komponent- og dataflow-oversigt

⚠️ Udfyldes af System/Solution Architect

Berørte komponenter:
Berørte dataflows:
Trust boundary ændringer:

 Ingen
 Ja — beskriv:


📋 6. Acceptkriterier (draft)
<!-- Markér sikkerhedsrelaterede kriterier med [SEC] — fuld specificering i Fase 2 -->
#KriterieType1⬜ Funktionel   ⬜ [SEC] Sikkerhed2⬜ Funktionel   ⬜ [SEC] Sikkerhed3⬜ Funktionel   ⬜ [SEC] Sikkerhed

🔒 7. Risikoklassificering

⚠️ Udfyldes og godkendes af Security Engineer — påsæt label på Issue

NiveauKarakteristikarisk:lowIngen ændringer i sikkerhedsrelevante komponenter, autentifikation, autorisation eller eksponerede interfaces. Ingen behandling af følsomme data.risk:mediumÆndringer i eksisterende sikkerhedsrelevante flows, nye integrationer, udvidelse af databehandling eller ændringer i adgangskontrol.risk:highÆndringer i autentifikation, autorisation, kryptering, eksponering af nye API-endpoints mod følsomme data, ændringer i trust boundaries, eller behandling af særligt følsomme personoplysninger.
Klassificering: <!-- lav / middel / høj -->
Begrundelse:

🔒 8. Obligatoriske sikkerhedsaktiviteter i efterfølgende faser

⚠️ Dokumenteres af Security Engineer som Issue-kommentar

FaseAktivitetObligatoriskFase 2Fuld sikkerhedskravsspecificering⬜ Ja   ⬜ NejFase 3Trusselsmodellering (STRIDE)⬜ Ja   ⬜ NejFase 3Opdateret arkitekturdiagram⬜ Ja   ⬜ NejFase 5Sikkerhedstest og verifikation⬜ Ja   ⬜ Nej

📋 9. Driftsmæssige krav og CI/CD-påvirkning

Udfyldes af DevOps/Ops — angiv Ingen påvirkning hvis ikke relevant





<details>
<summary>▶️ <strong>Fase 2 – Krav og Acceptkriterier</strong> &nbsp;⚠️ Fold ud når Fase 1 er godkendt</summary>
<br>
📋 1. Funktionelle krav

Udfyldes af Engineering Lead og Product Owner
Opret child issues og link herunder hvis nødvendigt

IDSom...Ønsker jeg...Så jeg kan...PrioritetF-1⬜ Høj   ⬜ Middel   ⬜ LavF-2⬜ Høj   ⬜ Middel   ⬜ LavF-3⬜ Høj   ⬜ Middel   ⬜ Lav
Linkede child issues:






📋 2. Ikke-funktionelle krav

Udfyldes af Engineering Lead med bidrag fra System/Solution Architect

KategoriKravMålbar grænseYdeevneSkalerbarhedTilgængelighedVedligeholdbarhed

🔒 3. Sikkerhedskrav

⚠️ Udfyldes af Security Engineer
Hvert krav skal kunne verificeres i Fase 5
Ved risk:low: noter "Ingen yderligere sikkerhedskrav identificeret ud over Fase 1"

IDSikkerhedskravKobling til funktionelt kravOWASP ASVS ref.S-1S-2S-3

📋 4. Acceptkriterier

Udfyldes af Tester/QA og Engineering Lead i samarbejde med Product Owner
Markér sikkerhedsrelaterede kriterier med [SEC]

IDKrav ref.AcceptkriterieTypeVerifikationAC-1⬜ Funktionel   ⬜ [SEC]⬜ Auto   ⬜ ManuelAC-2⬜ Funktionel   ⬜ [SEC]⬜ Auto   ⬜ ManuelAC-3⬜ Funktionel   ⬜ [SEC]⬜ Auto   ⬜ Manuel

📋 5. Indledende testscenarier

Udfyldes af Tester/QA





Linket test-issue: #
</details>

<details>
<summary>▶️ <strong>Fase 3 – Arkitektur og Design</strong> &nbsp;⚠️ Fold ud når Fase 2 er godkendt</summary>
<br>
<!--
  Obligatorisk for risk:medium og risk:high
  Obligatorisk for risk:low der introducerer nye komponenter, ændrer dataflows eller påvirker integrationer
  risk:low uden arkitekturpåvirkning: kort vurdering som Issue-kommentar er tilstrækkeligt
-->
📋 1. Arkitekturdiagram

⚠️ Udfyldes af System/Solution Architect

Diagramlink:
<!-- Link til opdateret diagram i /docs/security/ -->
Ændringer i forhold til tidligere version:
Trust boundary ændringer:

 Ingen
 Ja — beskriv:


🔒 2. Trusselsmodellering (STRIDE)

⚠️ Udfyldes af System/Solution Architect og Security Engineer
Gem som /docs/security/threat-model-[issue-id]-[dato].md

Link til trusselsmodel:
IDSTRIDETrusselBerørt aktivSandsynlighedKonsekvensKontrolT-1⬜ Lav   ⬜ Middel   ⬜ Høj⬜ Lav   ⬜ Middel   ⬜ HøjT-2⬜ Lav   ⬜ Middel   ⬜ Høj⬜ Lav   ⬜ Middel   ⬜ HøjT-3⬜ Lav   ⬜ Middel   ⬜ Høj⬜ Lav   ⬜ Middel   ⬜ Høj

🔒 3. Sikkerhedsarkitekturdesign

⚠️ Udfyldes af System/Solution Architect

OmrådeDesignvalgBegrundelseAutentifikationAutorisationKrypteringInputvalideringSessions og tokens
Mapping: Sikkerhedskrav → Kontroller
SikkerhedskravKonkret kontrolS-1S-2
Link til sikkerhedsarkitekturdokument:

🔒 4. Restrisici

⚠️ Udfyldes af Security Engineer — skal formelt accepteres af Product Owner
⚠️ En udokumenteret restrisiko er ikke en accepteret restrisiko

IDRestrisikoÅrsagAccepteretRR-1⬜ Ja   ⬜ Nej

 ✅ Ingen restrisici identificeret


📋 5. Drifts- og deploymentovervejelser

Udfyldes af DevOps/Ops — angiv Ingen påvirkning hvis ikke relevant




</details>
