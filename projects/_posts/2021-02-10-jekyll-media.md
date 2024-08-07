---
layout: post
title: Jekyll Media Embeds
comments: true
tags: blog jekyll youtube soundcloud
---

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

{% include youtube_embed.html id="Jr_kxwRRapY" %}

## Soundcloud

```
<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/{% raw %}{{ include.id }}{% endraw %}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
```

```
{% raw %}{% include soundcloud_embed.html id=1050991303 %}{% endraw %}
```

{% include soundcloud_embed.html id="1050991303" %}

## Spotify

```
{% raw %}<iframe src="https://open.spotify.com/embed/track/{{ include.id }}" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>{% endraw %}
```

```
{% raw %}{% include spotify_embed.html id=1n7omixiROWs5q6xpWiQuL %}{% endraw %}
```

{% include spotify_embed.html id="1n7omixiROWs5q6xpWiQuL" %}

## Hydra

Check out [The hydra-synth github](https://github.com/hydra-synth/hydra-synth) for more information.

{% include hydra_header.html %}

{% include hydra_embed.html id="whatever2" audio="false" script="osc(4, 0.1, 1.2).out()" %}

{% include hydra_embed.html id="whatever3" audio="false" script="osc(20, 0.1, 2.1).out()" %}