# 🇳🇴 Norges Bondelag – Amedia Parallax Annonse

Dette prosjektet er en digital annonse utviklet for bruk i Amedia sine nettaviser. Annonsematerialet benytter en **fullskjerms iframe-løsning** og er optimalisert for ytelse og lav filstørrelse i henhold til mediehusets krav.

---

## 🎯 Formål

Annonsen ble laget i jobbsammenheng som digital designer. Den kombinerer visuelt design med koding og demonstrerer evne til å produsere modulært og distribuerbart annonsemateriell til redaksjonelle miljøer.

---

## 🧱 Teknologi og innhold

- **HTML / CSS** – Struktur og design
- **JavaScript** – Dynamisk innlasting via `<script>`
- **Iframe-basert leveranse** – For enkel integrasjon på tredjeparts nettsider
- **Responsiv og optimalisert** – Fungerer på alle skjermstørrelser
- **Adobe Fonts (Typekit)** – Tilpasset typografi

---

## 📦 Filoversikt

| Fil/Mappe        | Beskrivelse                                      |
|------------------|--------------------------------------------------|
| `custom.html`    | Selve annonsen som vises i iframe                |
| `script.js`      | Script som laster inn `custom.html` i en iframe  |
| `examples/`      | Innhold i annonsen, inkludert bilder og grafikk  |
| `package.json`   | Brukt ved lokal utvikling og verktøy             |

---

## 🚀 Hvordan bruke annonsen

Du kan bruke denne annonsen ved å legge inn følgende script-tagg på en nettside:

```html
<script src="https://bompilez.github.io/Norges-bondelag/script.js?clickUrlParam=%%CLICK_URL_ESC%%"></script>

🌐 For testvisning uten script

https://bompilez.github.io/Norges-bondelag/custom.html?click=https://www.bondelaget.no/merennmat/

📄 Lisens

🔒 Gjenbruk, modifikasjon eller kommersiell bruk er ikke tillatt uten skriftlig tillatelse fra oppdragsgiver.
