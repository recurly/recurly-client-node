var anchorJS = require('anchor-js');
var anchors = new anchorJS();

/* global anchors */

// add anchor links to headers
anchors.options.placement = 'left';
anchors.add('h3');

// Filter UI
var tocElements = document.getElementById('toc').getElementsByTagName('a');

document.getElementById('filter-input').addEventListener('keyup', function(e) {
  var i, element, children;

  // enter key
  if (e.keyCode === 13) {
    // go to the first displayed item in the toc
    for (i = 0; i < tocElements.length; i++) {
      element = tocElements[i];
      if (!element.classList.contains('display-none')) {
        location.replace(element.firstChild.href);
        return e.preventDefault();
      }
    }
  }

  var match = function() {
    return true;
  };

  var value = this.value.toLowerCase();

  if (!value.match(/^\s*$/)) {
    match = function(element) {
      var html = element.firstChild.innerHTML || element.textContent;
      return html && html.toLowerCase().indexOf(value) !== -1;
    };
  }

  for (i = 0; i < tocElements.length; i++) {
    element = tocElements[i];
    children = Array.from(element.getElementsByTagName('a'));
    if (match(element) || children.some(match)) {
      element.classList.remove('display-none');
    } else {
      element.classList.add('display-none');
    }
  }
});

var items = document.getElementsByClassName('toggle-sibling');
for (var j = 0; j < items.length; j++) {
  items[j].addEventListener('click', toggleSibling);
}

function toggleSibling() {
  var stepSibling = this.nextElementSibling;
  var icon = this.getElementsByClassName('icon')[0];
  var klass = 'display-none';
  if (stepSibling.classList.contains(klass)) {
    stepSibling.classList.remove(klass);
    icon.innerHTML = '▾';
  } else {
    stepSibling.classList.add(klass);
    icon.innerHTML = '▸';
  }
}

function showHashTarget(targetId) {
  if (targetId) {
    var hashTarget = document.getElementById(targetId);
    // new target is hidden
    if (
      hashTarget &&
      hashTarget.offsetHeight === 0 &&
      hashTarget.parentNode.parentNode.classList.contains('display-none')
    ) {
      hashTarget.parentNode.parentNode.classList.remove('display-none');
    }
  }
}

function scrollIntoView(targetId) {
  // Only scroll to element if we don't have a stored scroll position.
  if (targetId && !history.state) {
    var hashTarget = document.getElementById(targetId);
    if (hashTarget) {
      hashTarget.scrollIntoView();
    }
  }
}

function gotoCurrentTarget() {
  showHashTarget(location.hash.substring(1));
  scrollIntoView(location.hash.substring(1));
}

window.addEventListener('hashchange', gotoCurrentTarget);
gotoCurrentTarget();

var toclinks = document.getElementsByClassName('pre-open');
for (var k = 0; k < toclinks.length; k++) {
  toclinks[k].addEventListener('mousedown', preOpen, false);
}

function preOpen() {
  showHashTarget(this.hash.substring(1));
}

// Chrome doesn't remember scroll position properly so do it ourselves.
// Also works on Firefox and Edge.

function updateState() {
  history.replaceState(
    {},
    document.title
  );
}

function loadState(ev) {
  if (ev) {
    // Edge doesn't replace change history.state on popstate.
    history.replaceState(ev.state, document.title);
  }
}

window.addEventListener('load', function() {
  // Restore after Firefox scrolls to hash.
  setTimeout(function() {
    loadState();
    // Update with initial scroll position.
    updateState();
    // Update scroll positions only after we've loaded because Firefox
    // emits an initial scroll event with 0.
  }, 1);
});

window.addEventListener('popstate', loadState);
