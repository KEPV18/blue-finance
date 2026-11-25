# Blue Finance

A personal finance dashboard I built to track spending, goals and monthly comparisons in one place. This public copy runs on **synthetic demo data only**.

Live demo: https://dashboardpublic-cyan.vercel.app (login: `demo` / `demo`)

## What it does

- Bilingual interface (Arabic and English) with a language toggle
- Login screen, then a tabbed dashboard: home overview, cards, goals, transport, transactions, period comparison and quick expense entry
- Charts for spending by period (Chart.js)
- Debt repayment calculator and goal timelines
- Quick expense entry saved in the browser (localStorage)
- PDF export of a report

## Stack

Plain HTML, CSS and vanilla JavaScript. No build step and no backend. Data is loaded from `data.json`.

## Run it locally

Serve the folder with any static server, for example `python3 -m http.server`, then open it in a browser and sign in with `demo` / `demo`.

## About the data

The original version used my own figures. They were removed before this repo was shown publicly. Everything in `data.json` is made up for the demo, and the demo login is not tied to any real account.

## Notes

- Built with AI assistance, then adjusted and tested by me.
- This is a personal project and a front-end demo, not a production financial product. The login is a front-end screen only and is not real authentication.
