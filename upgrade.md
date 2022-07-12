# Upgrade Guide

- [Upgrade to Farmart 1.3](#version_1_3)
- [Upgrade to Farmart 1.2](#version_1_2)
- [Upgrade to Farmart 1.1](#version_1_1)

<a name="version_1_3"></a>
## Upgrade to version 1.3

- Option 1 (Auto update): Go to Admin -> System Administration -> System Updater and click "Download & install update".

- Option 2 (Manual update):
    - Override folder `app`, `database`, `config`, `platform`, `public/themes`, `public/vendor`, `bootstrap`, `vendor`, `composer.json`, `composer.lock` and `public/index.php` from the latest version.
    - Move folder `resources/lang` to `lang`.
    - Go to Admin -> Platform Administration -> Cache management then clear all caches.
    - Go to Admin -> Plugins: deactivate plugin `Blog`, `FAQ`, `Language`, `Language Advanced`, `Ecommerce` & `Marketplace` then activate them again.
    - Go to Admin -> Translations -> Other translations then click on `Import group` to update translations.

<a name="version_1_2"></a>
## Upgrade to version 1.2

- Option 1 (Auto update): Go to Admin -> System Administration -> System Updater and click "Download & install update".

- Option 2 (Manual update):
  - Override folder `app`, `database`, `config`, `platform`, `public/themes`, `public/vendor`, `bootstrap`, `vendor`, `composer.json`, `composer.lock` and `public/index.php` from the latest version.
  - Go to Admin -> Platform Administration -> Cache management then clear all caches.
  - Go to Admin -> Plugins: deactivate plugin `Blog`, `FAQ`, `Language`, `Language Advanced`, `Ecommerce` & `Marketplace` then activate them again.
  - Go to Admin -> Translations -> Other translations then click on `Import group` to update translations.


<a name="version_1_1"></a>
## Upgrade to version 1.1

- Option 1 (Auto update): Go to Admin -> System Administration -> System Updater and click "Download & install update".

- Option 2 (Manual update):
    - Override folder `app`, `database`, `config`, `platform`, `public/themes`, `public/vendor`, `bootstrap`, `vendor`, `composer.json`, `composer.lock` and `public/index.php` from the latest version.
    - Go to Admin -> Platform Administration -> Cache management then clear all caches.
    - Go to Admin -> Plugins: deactivate plugin `Blog`, `FAQ`, `Language`, `Language Advanced`, `Ecommerce` & `Marketplace` then activate them again.
    - Go to Admin -> Translations -> Other translations then click on `Import group` to update translations.
