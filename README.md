# Navigation-Concepts
Web-Implementierung für Beispiel-Navigationen von *Saleh Chaaban*

Das vorliegende Projekt gehört inhaltlich zum Thema Navigationskonzepte und ist dem Modul Programmieren graphischer Oberflächen der Hochschule Worms gewidmet.

## Voraussetzungen
Um die hier verwendeten Befehle nutzen zu können, wird eine Installation von [NodeJS](https://nodejs.org/de/download/) benötigt, welcher den npm Paket-Manager enthält.

## Verwendung

### Abhängigkeiten installieren
Navigiere in das jeweilige Implementierungsverzeichnis und führe als erstes folgenden Befehl aus, um alle Abhängigkeiten herunterzuladen:

```
npm install
```

### Erzeugung der Produktivversion
Führe anschließend fort mit Befehl:

```
npm run build
```

Damit hast du eine optimierte Produktivversion mit dem Verzeichnisnamen build/  erzeugt.

### Ausführung der Produktivversion
Um die Produktivversion auszuführen, muss zuletzt noch folgender Befehl verwendet werden:

```
serve -s build
```

### Öffnen eines Beispiels
Anschließend ist das jeweilige Beispiel mit hoher Wahrscheinlichkeit über localhost:5000 verfügbar. Falls der Port bereits in Verwendung ist, zeigt das Kommandozeilenprogramm den verwendeten Port über die Konsolenausgabe an.

### Schließen eines Beispiels
Um die Ausführung des Implementierungs-Beispiel auf dem Port zu stoppen, ist nachfolgende Tastenkombination notwendig:

```
Ctrl+C
```

Alternativ kann das jeweilige Kommandozeilenprogramm einfach geschlossen werden, was ebenfalls zu einer Beendigung führt.