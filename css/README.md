## Synopsis and Motivation

This brief project is submitted to Holiday Extras. It is a tech test completed by Shane Oston Stowe. The application calls a Flickr API that "grabs" a random sample of public flickr photos and displays the details of the posted photo.

## Installation

Fork or clone the project, run ```npm install```, and ```npm start```.

## API Reference

The application is written in Angular 2, rc 1.  It has a simple implementation of a single component that calls the Flickr API, reformats the response, and applies the re-formatted response's data to the view template.  It is worth noting that the original response was unusable as it contained extraneous data and character escapes that prevented its immediate use.  The response is run through a method to properly format it to a format that could be used by Angular2's 'ngFor'.
