import { NextResponse } from 'next/server'

const redirectToRickRoll = (req, ev) =>
  NextResponse.redirect("https://www.youtube.com/watch?v=dQw4w9WgXcQ");

export default redirectToRickRoll;

