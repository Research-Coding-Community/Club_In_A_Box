#!/usr/bin/env bash
set -euo pipefail

mkdir -p downloads
rm -f downloads/*.zip

zip -qr downloads/templates.zip templates
zip -qr downloads/guides-and-playbooks.zip docs playbooks
zip -qr downloads/launch-kit.zip \
  docs/quickstart.md \
  docs/facilitation-guide.md \
  docs/inclusion-and-accessibility.md \
  playbooks/launch-a-club.md \
  playbooks/run-a-session.md \
  templates/club-canvas.md \
  templates/club-charter.md \
  templates/session-plan.md \
  templates/event-announcement.md \
  templates/accessibility-checklist.md \
  templates/feedback-form.md
zip -qr downloads/club-in-a-box-resources.zip \
  README.md \
  ATTRIBUTION.md \
  AI_NOTICE.md \
  CONTRIBUTING.md \
  CODE_OF_CONDUCT.md \
  GOVERNANCE.md \
  ACKNOWLEDGEMENTS.md \
  LICENSE.md \
  assets/Club_In_A_Box_Logo.png \
  assets/Icon_Club_In_A_Box_Logo.png \
  docs \
  playbooks \
  templates \
  examples \
  LICENSES
