function getTransitInfo() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      const res = JSON.parse(this.response);
      const { response } = res;

      console.log({ response });

      $('.body').empty();

      const wrapper = $('<div/>');
      wrapper.addClass('wrapper');
      response.map((transit) => {
        const { mapRoute, name } = transit;
        const bus = `<div class="cisloAutobusu">${mapRoute.lineNumber}</div><br />`;
        const leaveTime = `<div class="casOdchodu">o <b>${
          mapRoute.departure_time
        }</b> minúty</div><br />`;
        const numberTimeWrapper = $('<div/>');
        numberTimeWrapper.addClass('numberTimeWrapper');
        numberTimeWrapper.append(bus, leaveTime);
        const stop = `<div class="zastavka">${
          mapRoute.departure_stop
        } --> </div><br /><div class="zastavka"> ${name} </div><br /><br/>`;
        const content = $('<div/>');
        content.addClass('content');
        content.append(numberTimeWrapper, stop);
        wrapper.append(content);
      });
      const header = `<h1 class="header">MHD app</h1>`;
      $('.body').prepend(header);
      $('.body').append(wrapper);
    }
  };

  xhttp.open('GET', 'http://studentapp.kpi.fei.tuke.sk:5000/transit-request', true);
  xhttp.send();
}

getTransitInfo();
