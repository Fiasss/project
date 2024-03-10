import './App.css';
import React, { useEffect } from 'react';



function App() {

  useEffect(() => {

    
    let selector = document.getElementById('selector')
    let xhr = new XMLHttpRequest()

    xhr.open('GET', './options.json')
    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        let data = JSON.parse(xhr.responseText)
        changeSelector(selector, data.options);
      }
    };

    xhr.send()

    function changeSelector(selector, options) {
      selector.innerHTML = ""
      options.forEach(
        function (option) {
          let optionElement = document.createElement('option');
          optionElement.text = option.text;
          selector.appendChild(optionElement);
        }
      )
    }
  }, [])

  return (
    <div className="app">
      <select id = "selector"></select>
    </div>
  );
}

export default App;