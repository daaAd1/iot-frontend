function getTransitInfo() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      // const res = JSON.parse(this.response);
      // const { response } = res;
      const response = [
        {
          name: 'Stanica',
          value: 'stanicne+namestie',
          mapRoute: {
            arrival_stop: 'Staničné námestie',
            arrival_time: '4:03pm',
            departure_time: '3:53pm',
            departure_stop: 'Technická univerzita',
            lineNumber: '19',
          },
        },
        {
          name: 'Barca',
          value: 'barca',
          mapRoute: {
            arrival_stop: 'Barca, kostoly',
            arrival_time: '4:29pm',
            departure_time: '4:02pm',
            departure_stop: 'Technická univerzita',
            lineNumber: '12',
          },
        },
        {
          name: 'Nad jazerom',
          value: 'stanicne+namestie',
          mapRoute: {
            arrival_stop: 'Staničné námestie',
            arrival_time: '4:03pm',
            departure_time: '3:53pm',
            departure_stop: 'Technická univerzita',
            lineNumber: '19',
          },
        },
        {
          name: 'Terasa',
          value: 'kino+druzba',
          mapRoute: {
            arrival_stop: 'Nám. Maratónu mieru',
            arrival_time: '3:53pm',
            departure_time: '3:49pm',
            departure_stop: 'Amfiteáter',
            lineNumber: '6',
          },
        },
        {
          name: 'Námestie osloboditeľov',
          value: 'namestie+osloboditelov',
          mapRoute: {
            arrival_stop: 'Nám. osloboditeľov',
            arrival_time: '4:12pm',
            departure_time: '3:53pm',
            departure_stop: 'Amfiteáter',
            lineNumber: '6',
          },
        },
        {
          name: 'Stará nemocnica',
          value: 'stara+nemocnica',
          mapRoute: {
            arrival_stop: 'Stará nemocnica',
            arrival_time: '4:11pm',
            departure_time: '3:58pm',
            departure_stop: 'Poliklinika Sever',
            lineNumber: '4',
          },
        },
      ];
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

  // xhttp.open('GET', 'http://localhost:5000/transit', true);
  xhttp.open('GET', 'https://google.sk', true);
  xhttp.send();
}

getTransitInfo();
