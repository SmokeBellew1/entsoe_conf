---
layout: page1
title: "Register"
permalink: /register/
---
<script type="text/javascript" src="//cdn.rawgit.com/Gavin-Paolucci-Kleinow/ie-truth/master/ie-truth.min.js"></script>
<script type="text/javascript">
window.onload = function() {
    var IE = IeVersion();
if(IE.IsIE){
$('.ie').html('<a class="button large expand success" href="https://ti.to/entso-e/entso-e-annual-conference-2015">Continue</a>')
}
}
</script>


<style type="text/css">
    .tito-ticket.row .row:before, .tito-ticket.row.row .tito-ticket.row.row:after {content: none;
    display: table;}
    .tito-ticket.row.row:before, .tito-ticket.row.row:after{content: none;
    display: table;}
    .tito-ticket input{width:45px !important;display:inline-block;margin:5px 0;}
    .tito-wrapper {background: #ecfaff!important;}
</style>

<div style="background: #000 url({{ '/img/vision.jpg' | prepend: site.baseurl }}) center top no-repeat; background-size:cover; padding:5em 0;">
<div class="row">
  <div class="large-6 small-10 small-centered large-uncentered medium-uncentered columns ">
    <h3 style="
    line-height: 1;
    background-color: #2c296b;
    color: #FFF;
    padding: 1em;
">Register for Conference</h3>
  </div>
</div>
</div>

<div style="margin-top:2em;">
<div class="large-4 columns panel prose" markdown="1" >
### Key Dates

Registration Opens: <br>
__September 14th, 2015__

Registration Closes: <br>
__November 15th, 2015__

<!--RSVP Conference Dinner: <br>
__November 19th, 2015__-->

</div>
<div class="large-8 columns prose" markdown="1">
<h3>Tickets</h3>

By clicking **Continue** you confirm that you have read and agree with the [**ENTSO-E Privacy Policy**](https://www.entsoe.eu/disclaimer/annual_conference_privacy_policy/) for this event.
{:class="warning alert-box radius"}

<div class="ie"></div>
<!--[if IE]>
<a class="button large expand success" href="https://ti.to/entso-e/entso-e-annual-conference-2015">Continue</a>
<![endif]-->
<!-- place this in your head tag -->
<script src='https://js.tito.io/v1' async></script>
<link rel="stylesheet" type="text/css" href='https://css.tito.io/v1' />

<!-- Place this where you want the widget to appear -->
<tito-widget event="entso-e/entso-e-annual-conference-2015"></tito-widget>

The conference registration fee will be waived if you fit the following criteria: 

- A member of an EU Institutions or permanent representation

- A members of the media

- An ENTSO-E member

**In order to avail of this waiver please contact [**annualconference@entsoe.eu**](mailto:annualconference@entsoe.eu) for further details.**


</div>
</div>