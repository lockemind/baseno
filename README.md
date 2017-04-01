![BASENO](http://lockemind.github.io/baseno/images/baseno_logo.png)

###This is BASENO's website repository.

It's build using [Jekyll](https://jekyllrb.com/docs/home/) and GitHub pages for hosting.

####So what is Jekyll, exactly?
[Jekyll](https://jekyllrb.com/docs/home/) is a simple, blog-aware, static site generator. 
It takes a template directory containing raw text files 
in various formats, runs it through a converter (like [Markdown](https://daringfireball.net/projects/markdown/)) 
and our [Liquid](https://github.com/Shopify/liquid/wiki) renderer, and spits out a complete, 
ready-to-publish static website suitable for serving with 
your favorite web server. Jekyll also happens to be the engine 
behind [GitHub Pages](https://pages.github.com/), which means you can use Jekyll 
to host your project’s page, blog, or website 
from GitHub’s servers for free.


As such all the code actually used to generate the website is on the ```gh-pages``` branch.
only changes there will reflect on the actual website.

#####Site at http://lockemind.github.io/baseno.


To develop locally you have to install Jekyll to generate and serve the site.

required:
[Jekyll install instructions](https://jekyllrb.com/docs/installation/)


####Website Structure

The website itself is divided into: 
* index.html
* work.html
* expertise.html
* about.html
* contact.html


each of these are jekyll page,
e.g. about.html: 

```json

 ---
 layout: default
 title: About
 ---
 
 {% include about.html %}
 {% include team.html %}
 {% include blog.html %}
 ```

The top portion indicates which layout to use: ```layout: default```, the default in this case.
and the page title (```title: About```). 

The bottom part is the page code added this specific page.
Several snippets where created so that we can repeat them throughout the different pages.
they are in the ```/_includes``` section. 
In this page we have an about, team and blog section.





