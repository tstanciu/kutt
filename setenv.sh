#!/bin/bash

echo "setenv.sh"
# creates .env file for next.config.js
for param in \
    BASE_PATH \
    SITE_NAME \
    DEFAULT_DOMAIN \
    RECAPTCHA_SITE_KEY \
    GOOGLE_ANALYTICS \
    REPORT_EMAIL \
    DISALLOW_ANONYMOUS_LINKS \
    DISALLOW_REGISTRATION \
    SENTRY_PUBLIC_DSN \
    CONTACT_EMAIL \
    GITHUB_URL \
    FOOTER_MESSAGE \
    FOOTER_LINK \
    FOOTER_LINK_TITLE \
    ; do
    if [ -n "${!param}" ] ; then
        echo "$param=\"${!param}\"" >>.env
    fi
done

echo "Running $@"
exec "$@"