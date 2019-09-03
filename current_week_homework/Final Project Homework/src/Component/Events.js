import React from 'react';

import request from 'superagent'

const CALENDAR_ID = 'vt.edu_7gi6oejgps1m926hc8c7n3mcus@group.calendar.google.com'
const API_KEY = 'AIzaSyDDD1czbJu8WPkVNrGuS7Y6wAkLpb-VfG0'
let url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`

export function getEvents (callback) {
  request
    .get(url)
    .end((err, resp) => {
      if (!err) {
        const events = []
        JSON.parse(resp.text).items.map((event) => {
          events.push({
            start: event.start.date || event.start.dateTime,
            end: event.end.date || event.end.dateTime,
            title: event.summary,
          })
        })
        callback(events)
      }
    })
}
