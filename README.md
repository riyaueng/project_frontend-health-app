# 🥗 Nutritionist – Health App

Nutritionist ist eine Landing-Page mit integriertem Kalorienrechner für personalisiertes Ernährungscoaching. Die Plattform richtet sich an Menschen, die Gewicht, Ernährung oder allgemeine Gesundheit verbessern möchten und dabei Wert auf professionelle Expertenbetreuung legen.

<img width="1240" height="808" alt="nutritionist_start" src="https://github.com/user-attachments/assets/40c5904a-96ff-40fe-a8a6-c985d5793584" />


---

## 📋 Über das Projekt

Die Webanwendung verspricht mit einem funktionalen Tool zur Berechnung des täglichen Kalorienbedarfs (BMR und TDEE) auch maßgeschneiderte Ernährungspläne, die persönliche Bedürfnisse, Vorlieben und gesundheitliche Bedingungen berücksichtigen. Als Übungsprojekt aus meiner Weiterbildung zeigt es, wie man ansprechendes Landing-Page-Design mit praktischer Funktionalität umsetzen kann – responsiv mit Vanilla JavaScript und separaten CSS-Dateien für verschiedene Bildschirmgrößen.

---

## 🛠️ Technologien

- **HTML5** - Semantische Struktur (header, main, sections, footer) für Accessibility
- **CSS3** - Responsive Design mit separaten Stylesheets
- **JavaScript (ES Modules)** - Formularverarbeitung und DOM-Manipulation
- **CSS Variables** - Konsistentes Theming über `:root`
- **Custom Fonts** - Lokale Font-Integration via @font-face
- **Progressive Enhancement** - Mobile-First-Ansatz mit Media Queries

---

## ✨ Features

### Kalorienrechner
- ✅ **BMR-Berechnung** - Grundumsatz basierend auf Größe, Alter, Gewicht und Geschlecht
- ✅ **TDEE-Berechnung** - Gesamtumsatz unter Berücksichtigung des Aktivitätsfaktors
- ✅ **Dual-Unit-Anzeige** - Ergebnisse in kcal und kJ
- ✅ **Geschlechtsspezifische Formeln** - Unterschiedliche BMR-Berechnungen für männlich/weiblich


### Technische Features
- ✅ **Responsive Design** - Separate Stylesheets für Mobile, Tablet, Desktop 
- ✅ **Progressive Enhancement** - Mobile-First-Ansatz mit schrittweisen Layout-Verbesserungen
- ✅ **CSS Grid Layout** - Strukturierte Ergebnis-Darstellung
- ✅ **Form Validation** - Numerische Konvertierung mit `parseFloat()` und Fehlerbehandlung
- ✅ **Dynamic UI** - Ergebnis-Box mit `display: none` initial, erscheint nach Berechnung
- ✅ **Event Handling** - `preventDefault()` für Single-Page-Verhalten ohne Reload
- ✅ **Gezielte DOM-Selektion** - `querySelector` für präzise Element-Auswahl
- ✅ **Numerische Präzision** - `toFixed()` für formatierte Ausgabe der Kalorienwerte

---

## 📚 Was ich gelernt habe

- **Form Handling mit preventDefault**: Single-Page-Verhalten ohne Seitenreload bei Submit
- **CSS Variables für Theming**: Zentrale Steuerung von Farben und Typografie über `:root`
- **DOM-Manipulation**: Gezielte Element-Selektion mit `querySelector` und dynamisches Styling
- **Numerische Präzision**: `parseFloat()` + `toFixed()` für exakte Berechnungen und formatierte Ausgabe
- **BMR/TDEE-Formeln**: Geschlechtsspezifische Berechnungen und Aktivitätsfaktoren
- **Einheitenumrechnung**: kcal zu kJ-Konvertierung

---

## 📸 Screenshots

<img width="1240" height="808" alt="nutritionist_responsive_design" src="https://github.com/user-attachments/assets/143dc8ae-9de8-4f96-8f27-5f38eed5b83b" />

---

## 🧩 Mögliche Erweiterungen

- [ ] **Erweiterte Validierung** - Error-Messages für ungültige Inputs
- [ ] **BMI-Berechnung** - Zusätzliche Gesundheits-Metriken
- [ ] **Export-Feature** - PDF-Download der Ergebnisse
- [ ] **Dark Mode** - Alternative Farbpalette
- [ ] **Hover-Effekte** - Bessertes UI-Design
