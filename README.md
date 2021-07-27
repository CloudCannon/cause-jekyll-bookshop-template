# Justice

Justice is a Marketing site template for Jekyll. Browse through a [live demo](https://proper-gull.cloudvent.net/).
Increase the web presence of your brand with this configurable theme.

![Justice template screenshot](images/_screenshot.png)

Justice was made by [CloudCannon](http://cloudcannon.com/), the Cloud CMS for Jekyll and Hugo.
The component library is built and maintained for use with [Bookshop](https://github.com/cloudcannon/bookshop/)

Find more templates, themes and step-by-step Jekyll tutorials at [CloudCannon Community](https://cloudcannon.com/community/).

## Features

* Contact form
* Pre-built pages
* Pre-styled components
* Blog
* Post category pages
* Staff and author system
* Configurable footer
* Optimised for editing in [CloudCannon](http://cloudcannon.com/)
* RSS/Atom feed
* SEO Improvements
* Google Analytics

## Setup

1. Open *Website Settings > General Settings*
2. Add your website name and live domain URL
3. Add an author to the Staff Members collection
4. Build and adjust your website locally, or with live visual editing on [CloudCannon](https://app.cloudcannon.com/)
5. Add the remaining options to *Website Settings > General Settings* if required

## Develop

Justice was built with [Jekyll](http://jekyllrb.com/) version 4.2.0, but should support newer versions as well.

Install the dependencies for Bookshop:

~~~bash
$ npm install
~~~

Install the Jekyll dependencies with [Bundler](http://bundler.io/):

~~~bash
$ cd site
$ bundle install
~~~

Run the website:

~~~bash
$ cd ../
$ npm start
~~~

## Editing

Justice is already optimised for adding, updating and removing pages, and components in CloudCannon.

### Posts

* Add, update or remove a post in the *Posts* collection.
* The **Staff Author** field links to members in the **Staff Members** collection.
* Change the defaults when new posts are created in `_posts/_defaults.md`.

## Collections
* When adding or removing collections, update the Explore View options within the `_config.yml` file. For more information see CloudCannon's documentation on [Explore Groups](https://cloudcannon.com/documentation/edit/interfaces/explore/#keyword:_explore).

### Contact Form

* Preconfigured to work with CloudCannon, but easily changed to another provider (e.g. [FormSpree](https://formspree.io/)).
* Sends email to the address defined within the component.

### Staff

* Reused around the site to save multiple editing locations.

### Navigation

* Managed as a data file to give clients better access.
* Set in the *Website Settings > Navigation* section.

### Footer

* Managed as a data file to give clients better access.
* Set in the *Website Settings > Footer* section.
