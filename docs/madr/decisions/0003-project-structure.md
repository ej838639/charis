# Cloud Project Structure Decision

* Status: accepted

## Context and Problem Statement
Determine how many projects to use for apps and prod/dev

## Considered Options
Different project for prod and dev
Same project for prod and dev with api name differences

## Decision Outcome
Same project for prod and dev with api name differences

charis-app-prod
charis-app-dev

Different projects for prod and dev are better when there are many apps and multiple groups using them. This project currently only has one app and one person using it, so it will be simplier to use one project. See the following for more pros/cons.

https://cloud.google.com/appengine/docs/legacy/standard/php/creating-separate-dev-environments
