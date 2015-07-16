---
layout: page1
title: Programme
permalink: /programme/
---
<div class="row pad3">
  <div class="large-12 small-12 columns ">
<h3>ScheduleThursday 19th November</h3>
<p>Below you'll find the schedule for the ENTSO-E Annual Conference. And we have some surprises for you - but they are not included in the schedule as yet. <a href="http://twitter.com/ENTSO_E">Stay Updated</a></p>
</div>
</div>
<div class="row">
  <div class="large-12 small-12 large-centered columns ">
    {% for post in site.categories.programme reversed %}
    <div class="row programme-row {{post.type | lowercase }}">
      <div class="small-1 medium-1 large-1 columns">
        <strong>{{post.start_time}}</strong>
      </div>
      <div class="small-12 medium-8 large-6 columns">
        <a href="{{post.url | prepend: site.baseurl}}">
        <strong>
          <span class="sub-title dot  fill-{{post.type | lowercase }}" style="padding:5px;"></span>
          {{post.title}}
        </strong>
        </a>
          {% assign content = post.content | strip_newlines %}
          {% unless content == ""  %}
          <div class="talk-body">
            {{post.content}}
          </div>
          {% endunless %}
      </div>
      <div class="small-12 medium-2 large-3 columns last text-center speakers">
        {% for s in site.speakers %}
        
        {% if post.tags contains s.name %}
        <a href="{{ s.url | prepend: site.baseurl }}">
          <img src="{{s.thumb}}" style="max-width:100px; padding-top:1em;">
          <figcaption>
            <h4 class="title">{{s.name}}</h4>
            <span class="sub-title">{{s.wtitle}}</span>
            <span class="sub-title">{{s.org}}</span>
          
          </figcaption>
        </a>

        
        {% endif %}
        {% endfor %}
      </div>
    </div>    
    {% endfor %}
  </div>
</div>