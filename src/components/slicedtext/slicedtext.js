import React from 'react'
import './slicedtext.css'
export default function Slicedtext(props) {
  return (
    <div>
      <div class="wrapper">
  <div class="top">{props.text}</div>
  <div class="bottom" aria-hidden="true">{props.text}</div>
</div>
    </div>
  )
}
