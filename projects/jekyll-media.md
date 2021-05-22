---
layout: post
title: Jekyll Media Embeds
tags: blog jekyll youtube soundcloud
---

# Jekyll Media Embeds

I just made some quick embeds for media stuff.


## Youtube

Put this in your `_includes` folder

```
{% raw %}<iframe width="560" height="315" src="https://www.youtube.com/embed/{{ include.id }}" frameborder="0" allowfullscreen></iframe>{% endraw %}
```

And insert this where you want the player

```
{% raw %}{% include youtube_embed.html id="Jr_kxwRRapY" %}{% endraw %}
```

## Soundcloud

```
<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/{% raw %}{{ include.id }}{% endraw %}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
```

```
{% raw %}{% include soundcloud_embed.html id=1050991303 %}{% endraw %}
```