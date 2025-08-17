# Norges Bondelag – Amedia Parallax Annonse

Dette prosjektet er en digital annonse laget for bruk i Amedia sine aviser. Annonsematerialet benytter en **fullskjerms iframe-løsning**, og er optimalisert for ytelse og lav vekt i henhold til mediehusets krav.

## 🎯 Formål

Annonsen ble laget i jobbsammenheng som digital designer og inngår i min portefølje for frontendutvikling. Den kombinerer visuelt design med koding og viser evnen til å produsere modulært og distribuerbart annonsemateriell.

---

## 🧱 Teknologi og innhold

- **HTML / CSS** for struktur og design
- **JavaScript** for dynamisk innlasting via `<script>`
- **Iframe**-basert leveranse (for integrasjon i tredjeparts nettsider)
- **Responsivt og optimalisert** for ulike skjermstørrelser
- **TypeKit-font** fra Adobe inkludert

---

## 📦 Filoversikt

| Fil/Mappe        | Beskrivelse                                      |
|------------------|--------------------------------------------------|
| `custom.html`    | Selve annonsen som vises i iframe                |
| `script.js`      | Script som laster inn `custom.html` i en iframe |
| `examples/`      | Eksempelbilder og test-asset                     |
| `package.json`   | Brukt for evt. utviklingsverktøy (ikke påkrevd) |

---

## 🚀 Hvordan bruke annonsen

Du kan bruke denne annonsen ved å legge inn følgende script-tagg på en nettside:

```html
<script src="https://bompilez.github.io/Norges-bondelag/script.js?clickUrlParam=%%CLICK_URL_ESC%%"></script>
