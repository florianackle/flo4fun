# :video_game: flo4fun

Schulprojekt von Florian Ackle

---

# :bookmark: Aktuelle Version

v0.1

---

# :construction_worker: Ausgangslage

Als Softwareentwickler ist es essenziell, Projekte sauber strukturiert, dokumentiert und testbar aufzubauen. Ziel dieses Projekts ist es, verschiedene APIs und Interaktionen mit Vue 3 und TypeScript zu trainieren und Best Practices der modernen Webentwicklung umzusetzen.

---

# :sparkles: Was kann die App "flo4fun"?

"flo4fun" ist eine unterhaltsame Web-App, die mehrere Mini-Funktionen integriert:

- Ein Quiz namens **"Who is that Pokémon?"**
- Die Anzeige von **Chuck-Norris-Witzen**, abrufbar via API
- Eine personalisierte **"Games Wishlist"**, in der Spiele inkl. Plattformen gespeichert und verwaltet werden können

#### It's all fun and games! :joystick: :zap: :sparkles:

---

# :building_construction: Projektstruktur

## :rocket: Frontend
- Vue 3 mit Vite + TypeScript + Pinia + TailwindCSS
- Struktur:
    - `src/components/` – wiederverwendbare Komponenten wie `CustomCard`, `AddGameModal`, `NavBar`
    - `src/views/` – Seiten wie `PokemonView.vue`, `ChuckView.vue`, `WishlistView.vue`
    - `src/services/` – z.B. API-Anfragen an PokeAPI und ChuckNorris API
    - `src/composables/` – abstrahierte Logik (z. B. `usePokemonQuiz`, `useChuckNorris`)
    - `src/router/` – Seitenrouting inkl. Pfade: `/`, `/pokemon`, `/chuck`, `/games`

## :gear: Tools & Konfiguration
- ESLint & Prettier für konsistenten Code-Style
- Vitest für Unit Testing
- TailwindCSS für Styling
- Vite für schnellen Build & HMR

## :floppy_disk: Datenhaltung
- Spiele-Wishlist wird im LocalStorage gespeichert (persistente Speicherung)
- Externe Daten via HTTP von:
    - [PokeAPI](https://pokeapi.co/)
    - [Chuck Norris API](https://api.chucknorris.io)

---

# :rocket: Projekt starten

```bash
# Projekt klonen
git clone https://github.com/florianackle/flo4fun.git
cd flo4fun

# Abhängigkeiten installieren
npm install

# Dev-Server starten
npm run dev
```

Optional:
```bash
# Produktion bauen
npm run build

# Tests ausführen
npm run test:unit

# Code checken & linter ausführen
npm run lint
```

---

# :hourglass: Wenn ich mehr Zeit hätte...

- Weitere Kategorien oder Filteroptionen in der Wishlist
- Integration einer "Game Search API" für automatische Vorschläge
- Login-System für Benutzer und deren Listen

---

# :lock: Copyright

Bitte kopiere diesen Code nicht... ausser du gibst mir einen :cookie:
</br>
Sonst... lass die Finger davon :point_left:.

---

# :date: Letztes Update

> 31.03.2025

# :busts_in_silhouette: Autor

- [@florianackle](https://www.github.com/florianackle)

# :tada: Viel Spass!

