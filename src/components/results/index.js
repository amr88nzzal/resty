import React from 'react';
import "./results.scss";
export default function Results(props) {
  return (
    <section>
        <pre className="response" data-testid="results">{props.data ? JSON.stringify(props.data, undefined, 2) : null}</pre>
      </section>
  )
}
