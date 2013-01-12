# A Custom Google StreetView

## Introduction

I work at an awesome co-working space in Cambridge called Intrepid Labs(http://http://intrepid-labs.com/). I have always wanted to play with the Google Streetview API, and this was a perfect chance to do it!

![alt text](http://brightredchilli.github.com/labs-streetview/gh-pages-resources/preview.png "Logo Title Text 1")


## API
The street view API(as of January 2013)a can be found here : https://developers.google.com/maps/documentation/javascript/StreetView

It is well documented and very easy to use. For those of you who are confused, like I was, you need to link to their API dynamically like so:

```html
    <head>
        <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?sensor=false"></script>    
        ... 
    </head>
```

## Approach

The following project was created using the 360 panorama iPhone app and an iPhone 5.

## Issues

1. The panorama app is AMAZING, but it is still a handheld panorama. The next iteration of this project will require some better panorama software.
2. For 5 discrete locations it is possible to hardcode them, but a real custom map of an indoor space requires a model to express how each panorama and how it relates to each other.

Of these two issues, the model is definitely more interesting, and I hope at a later date I can provide an insight into how to design a lightweight and quick model to express google streetview panorama data. If anyone has any ideas, feel free to reach me here on github or on twitter at @brightredchilli



