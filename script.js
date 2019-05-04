function getTransitInfo() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      const res = JSON.parse(this.response);
      const { response } = res;
      console.log({ response });
      console.log($('.body'));
      $('.body').empty();

      response.map((transit) => {
        const { mapRoute, name } = transit;
        const bus = `<div class="cisloAutobusu">${mapRoute.lineNumber}</div>`;
        const leaveTime = `<div class="casOdchodu">${mapRoute.departure_time}</div>`;
        const stop = `<div class="zastavka">${mapRoute.departure_stop} --> ${name} </div>`;
        const content = $('<div/>');
        content.addClass('content');
        content.append(bus, leaveTime, stop);
        $('.body').append(content);
      });
      const header = `<h1 class="header">MHD app</h1>`;
      $('.body').prepend(header);
    }
  };

  xhttp.open('GET', 'http://localhost:5000/transit', true);
  xhttp.send();
}

getTransitInfo();
