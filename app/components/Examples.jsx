var React = require('react');
var {Link} = require('react-router')

var Examples = (props) => {
  return(
    <div>
      <h1 className="text-center page-title">Examples</h1>
      <p> Here are a few example location to try</p>
      <ol>
        <li>
          <Link to="/?location=chicago">Chicago</Link>
        </li>
        <li>
          <Link to="/?location=pune">Pune</Link>
        </li>
      </ol>
    </div>
  )
}

module.exports = Examples;
