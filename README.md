# Moje portfolio — WDAI

Rozwijam tę stronę w ramach projektu z aplikacji internetowych. Przygotowuję osobiste portfolio, w którym przedstawiam swoje projekty, doświadczenie i notatki z nauki frontendu.

## Zawartość projektu

Mój projekt składa się z pięciu podstron:

- **Start** — przedstawiam siebie i wybrane projekty.
- **Projekty** — prezentuję galerię ilustracji i materiał wideo.
- **Doświadczenie** — zamieszczam tabelę doświadczenia i edukacji.
- **Notatnik** — publikuję artykuł o tworzeniu pierwszej strony internetowej.
- **Kontakt** — udostępniam formularz z polem e-mail, wyborem tematu i wiadomością.

Na podstronach stosuję wspólną nawigację, stopkę i arkusz stylów.

## Technologie

W projekcie wykorzystuję:

- HTML5 do struktury strony i semantycznego oznaczania treści;
- CSS3, Grid, Flexbox i media queries do wyglądu oraz dostosowania układu do różnych ekranów;
- JavaScript do pokazywania dodatkowego menu po przewinięciu głównego nagłówka poza ekran.

Korzystam z lokalnych obrazów i filmu, bez zewnętrznych bibliotek frontendowych.

## Formularz kontaktowy

W formularzu wykorzystuję walidację przeglądarki: wymagane pola, typ `email` oraz ograniczenia długości wiadomości.

Na tym etapie formularz służy do demonstracji. Po poprawnym uzupełnieniu pól wyświetlam potwierdzenie walidacji, ale wiadomość nie jest wysyłana. Dane formularza trafiają do adresu URL, dlatego do testów używam danych przykładowych.

## Uruchomienie lokalne

Po pobraniu plików strony otwieram `index.html` w przeglądarce. Mogę też uruchomić serwer w katalogu zawierającym ten plik:

```powershell
py -m http.server 8000 --bind 127.0.0.1
```

Następnie otwieram adres http://127.0.0.1:8000.

## Stan repozytorium

Na razie dodałem do repozytorium tylko ten opis. Pliki HTML, CSS, JavaScript i media znajdują się jeszcze poza repozytorium. Aby można było pobrać i uruchomić cały projekt, muszę również je tutaj wgrać.

Nie opublikowałem jeszcze strony przez GitHub Pages, dlatego nie zamieszczam na razie linku do działającej wersji.

## Dalsze prace

Planuję uzupełnić repozytorium o pliki strony, sprawdzić układ na telefonie, tablecie i komputerze oraz dopracować galerię, opisy obrazów i hierarchię nagłówków. Następnie opublikuję stronę i dodam tutaj jej adres.

## Media

Wykorzystuję ilustracje SVG z materiałów projektu oraz przykładowy film kwiatów udostępniony jako CC0 w materiałach MDN:

https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4

## Autor

Szymon Firek
