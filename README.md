# Portfolio — projekt lokalny

Otwórz http://127.0.0.1:8000. Ponowne uruchomienie z folderu `lab2`:

```powershell
py -m http.server 8000 --bind 127.0.0.1
```

Można też otworzyć `index.html` bez serwera. Strona nie wymaga instalowania bibliotek, dostępu do internetu ani JavaScriptu. Wszystkie style są w `style.css`.

## Zakres

- Pięć stron ze wspólną nawigacją, oznaczeniem bieżącej strony, semantycznym HTML i stopką.
- Treść artykułu, doświadczenia oraz ilustracja laptopa zaadaptowane z ZIP, bez zmieniania oryginalnego archiwum ani folderu lab1.
- Formularz: e-mail, wybór tematu, wiadomość, etykiety, wymagane pola i walidacja przeglądarki. Przycisk otwiera lokalny komunikat demonstracyjny. Nie wysyła poczty. Dane formularza trafiają do adresu URL lokalnej strony; nie należy wpisywać poufnych informacji.
- Galeria lokalnych obrazów SVG i lokalny film MP4 z kontrolkami.
- Układy Grid i Flexbox, media queries, obsługa klawiatury, widoczny fokus oraz ograniczenie ruchu zgodnie z preferencjami systemowymi.

## Granice względem pełnej specyfikacji

Zgodnie z prośbą nie dodano JavaScriptu (osobne kryterium za 2 pkt). Strona działa lokalnie, nie została publicznie opublikowana (osobne kryterium za 0,5 pkt). Tych kryteriów nie można uznać za spełnione samym CSS. Ostateczna ocena pozostałych kryteriów należy do prowadzącego.

Nazwisko i treść doświadczenia pochodzą z dotychczasowej pracy: Szymon Firek. Należy podmienić je na własne, jeśli są przykładowe.

## Media

- `images/workspace.svg`: ilustracja z dostarczonego archiwum.
- `images/project-*.svg`, `images/favicon.svg`: lokalne ilustracje przygotowane do tego projektu.
- `media/inspiration.mp4`: przykładowy film kwiatów CC0 z MDN: https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4.

Sprawdzono odpowiedzi HTTP pięciu stron, odnośniki do lokalnych plików, obecność głównych elementów semantycznych, teksty alternatywne i nagłówek pliku MP4. Podgląd wizualny w przeglądarce nie był dostępny w sesji wykonawczej.
