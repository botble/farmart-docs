# Introduction

## Requirement

- Apache, nginx, or another compatible web server.
- PHP >= 8.0.2 >> Higher
- MySQL Database server
- BCMath PHP Extension
- Ctype PHP Extension
- Fileinfo PHP extension
- JSON PHP Extension
- Mbstring PHP Extension
- OpenSSL PHP Extension
- PDO PHP Extension
- GD PHP Extension
- Tokenizer PHP Extension
- XML PHP Extension
- Exif PHP Extension
- Module Re_write server
- PHP_CURL Module Enable

## PHP Configuration

Open your php configuration file php.ini and change the following settings.

```ini
memory_limit = 128M
max_execution_time = 300
```

If you are using Cpanel, you can follow this article to change your PHP memory limit
settings https://chemicloud.com/kb/article/how-to-increase-the-php-memory-limit-in-cpanel/

::: warning
On this project, we're using the latest Laravel version (currently 9.x). Please go
to [Laravel documentation page](https://laravel.com/docs/9.x) for more information.
:::

## Install on hosting

::: warning
If you're a Laravel developer and you want to customize our source code in `platform/core` and `platform/packages`, you
need to delete folder `/vendor` then run command `composer install` to reinstall vendor packages.
:::

### Video tutorial

Farmart is based on our Botble CMS, check video for installation on https://www.youtube.com/watch?v=zFbWYpjuFJk

<iframe width="560" height="315" src="https://www.youtube.com/embed/zFbWYpjuFJk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

- Upload all files into the root folder of your hosting (normally, it is`public_html`).
- Create a database and import data from `database.sql` (it's located in source code).
  ![Database](https://live.staticflickr.com/65535/51715319985_2256877c79_b.jpg)
- Update your database credentials and `APP_URL` in `.env`.
  ![Env](https://live.staticflickr.com/65535/50848231176_5a3ba243e7_b.jpg)
- Go to `/admin` to access to admin panel.
- The default admin account is `botble` - `159357`.
  ![Login](https://live.staticflickr.com/65535/51715117999_420ed1fcbd_b.jpg)

## Install locally or in VPS

::: warning
If you're a Laravel developer and you want to customize our source code in `platform/core` and `platform/packages`, you
need to delete folder `/vendor` then run command `composer install` to reinstall vendor packages.
:::

- Update your database credentials and `APP_URL` in `.env`.
  ![Env](https://live.staticflickr.com/65535/50848231176_5a3ba243e7_b.jpg)

- Using sample data:
    - Import database from `database.sql`.

- Don't use sample data:
    - Run `php artisan migrate` to create database structure.

    - Run `php artisan cms:user:create` to create admin user.

    - Run `php artisan cms:theme:activate farmart`

- If you're pulled source code from GIT server:
    - Run `php artisan cms:publish:assets`

- Run web locally:
    - Change `APP_URL` in `.env` to `APP_URL=http://localhost:8000`
    - Run `php artisan serve`. Open `http://localhost:8000`, you should see the homepage.
    - Go to `/admin` to access to admin panel.
    - If you're using sample data, the default admin account is `botble` - `159357`.
    - If you don't use sample data, you need to go to Admin -> Plugins then activate all plugins.

## Config to work on sub-folder

::: warning
It’s based on Laravel framework, the root folder for it is /public so if you install it in a sub-folder, you need to
access your-domain.com/sub-folder/public. To remove /public, check below video.
:::

<iframe width="560" height="315" src="https://www.youtube.com/embed/XdAYETd04iA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Setup cron job

Cronjob is used to send emails abandoned carts notification automatically every week. You can ignore this step if you
don't need that feature.

```bash
* * * * * /usr/local/bin/php /path-to-your-project/artisan schedule:run >> /dev/null 2>&1
```

Setup cron job in cPanel: https://www.youtube.com/watch?v=t5mjWGegE-g.
