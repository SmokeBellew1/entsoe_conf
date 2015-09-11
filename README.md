# [conference.entsoe.eu](http://conference.entsoe.eu/)

Repository containing jekyll site powering the the ENTSO-E 2015 Annual Conference website.

[**View conference.entsoe.eu**](http://conference.entsoe.eu/)

## Run Locally:

```
git clone https://github.com/rustyb/entsoe_conf.git
bundle install
bundel exec jekyll serve
open localhost:4000

```

## Key Folders

- [Speakers](https://github.com/rustyb/entsoe_conf/tree/gh-pages/_speakers) - all speakers have their own file here containing various metadata used to power the other pages.
- [Schedule](https://github.com/rustyb/entsoe_conf/tree/gh-pages/_posts/schedule) - all items for the programme are ordered by start time.
- [Pages](https://github.com/rustyb/entsoe_conf/tree/gh-pages/pages) - the pages (Programme, Register, Speakers, Venue) are stored here.