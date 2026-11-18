# ServeurJavaDjango — Site web de la station météo « MeetCANADA »

Site web **Django** qui affiche en temps réel les mesures d'une station météo **ESP32** (température et humidité) et l'historique des dernières lectures. Les données sont enregistrées dans PostgreSQL par la passerelle [ServeurJava](https://github.com/EdNganji/ServeurJava).

## Fonctionnalités

- **Accueil** (`/`) : dernière mesure de température et d'humidité.
- **Historique** (`/historique/`) : les 20 dernières mesures, de la plus récente à la plus ancienne.
- Interface d'administration Django (`/admin/`).
- Client MQTT (`webproject/mqtt.py`, bibliothèque `paho-mqtt`) prêt à recevoir des messages sur le topic `django/mqtt`.

## Technologies

- Python 3.10, Django 4.2
- PostgreSQL (`psycopg2`)
- paho-mqtt
- HTML, CSS, Bootstrap, jQuery

## Structure

```
webproject/        # Configuration Django (settings, urls, client MQTT)
bathurst/          # Application principale
├── models.py      # Modèle Capteurs (température, humidité, date, heure)
├── views.py       # Vues home et historique
├── templates/     # Pages HTML
└── static/        # CSS et JavaScript
mqtt.toml          # Exemple de configuration de broker MQTT
```

## Installation

```bash
python -m venv venv
source venv/bin/activate          # Windows : venv\Scripts\activate
pip install "django>=4.2,<5" psycopg2-binary paho-mqtt
```

1. Créer une base PostgreSQL et adapter la section `DATABASES` de `webproject/settings.py`.
2. Appliquer les migrations et lancer le serveur :

```bash
python manage.py migrate
python manage.py createsuperuser   # facultatif, pour /admin
python manage.py runserver
```

3. Ouvrir http://127.0.0.1:8000/

## Auteur

**Daniel Nganjip** — projet réalisé en 2023.
