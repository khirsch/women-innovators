import './sass/style.scss';
import data from './js/data';

console.log(data);

$(document).ready(function() {
  // Generate Options
  const innovators = new Array();
  const select = $('#innovators');

  data.forEach(function(item, i) {
    innovators[i] = item;
    const name = item.name;
    select.append(`<option value="${name}">${name}</option>`);
  });

  // Define Elements
  const description = $('#details-right p');
  const title = $('#details-right h2');
  const image = $('#details-left img');
  const link = $('#details');

  function showDetails(i) {
    title.text(innovators[i].name);
    description.text(innovators[i].description);
    image
      .attr('src', './images/' + innovators[i].image)
      .attr('alt', innovators[i].altText);
    link.attr('href', innovators[i].url);
  }

  // Default State
  showDetails(0);

  // Show Selected
  select.on('change', function() {
    const value = $(this).find('option:selected').val();

    if (value == 'Margaret Hamilton') {
      showDetails(0);
    } else if (value == 'Grace Hopper') {
      showDetails(1);
    } else if (value == 'Katherine Johnson') {
      showDetails(2)
    } else if (value == 'Ada Lovelace') {
      showDetails(3);
    } else if (value == 'Carol Shaw') {
      showDetails(4);
    }

  });

});

// Animation
$(window).on('load', function() {
  $('#icon').addClass('animated');
});