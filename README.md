# Eesti.ee Cypress UI Testid

## 📌 Kirjeldus

See projekt sisaldab automatiseeritud UI teste [eesti.ee](https://www.eesti.ee) veebilehe jaoks, kasutades [Cypress](https://www.cypress.io/) tööriista. Testide eesmärk on kontrollida veebilehe põhilist funktsionaalsust, nagu otsing, navigeerimine, kontaktivorm ja keelevahetus.

Kodutöö on tehtud individuaalselt vastavalt õppeülesandele loengus *E2E testimine*.

---

## ✅ Tehtud testid

### 1. `01-homepage.cy.js` – Avalehe otsing

- Kontrollib, et otsingukast on nähtav ja sinna saab teksti sisestada
- Kontrollib, et peale teksti sisestamist kuvatakse tulemused

### 2. `02-navigation.cy.js` – Lehe navigatsioon

- Kontrollib, et saab liikuda peamenüü kaudu alalehtedele:
  - Kodanikule
  - Ettevõtjale
  - Ametnikule

### 3. `03-contact.cy.js` – Kontaktivorm

- Avab "Kirjuta meile" vormi
- Kontrollib, et vormi sisestusväljad on olemas (nimi, e-post, sõnum)

### 4. `04-language.cy.js` – Keelevahetus

- Kontrollib, et kasutaja saab vahetada keelt (eesti ↔ inglise)
- Veendub, et sisu ja URL muutuvad vastavalt

---

## 🚀 Paigaldamine ja käivitamine

1. Paigalda sõltuvused:
   ```bash
   npm install

