(function ( $ ) {
    $.fn.iot = function() {
     const api_endpoint = 'https://app.corrently.de/api/iot';
     return this.each(function(d,e) {
         let parent = $(e);
        this.refresh = function() {
            $.getJSON(api_endpoint+'?account='+parent.attr('data-iot'),function(d) {
               parent.attr('title',new Date(d.result.timeStamp).toLocaleString());
               parent.attr('data-nonce',d.result.nonce);
               parent.attr('data',d.result.value);
               if(typeof parent.attr('data-multiply') != 'undefined') {
                 parent.html(d.result.value*parent.attr('data-multiply'));
               } else {
                 parent.html(d.result.value);
               }
            });
        }
        this.subscribe = function(seconds) {
            setInterval(function() {
                parent.refresh();
            },(seconds*1000)+Math.round(Math.random()*1000));
        }
        this.refresh();
        if(typeof parent.attr('data-subscribe') != 'undefined') {
            this.subscribe( parent.attr('data-subscribe'));
        }
        return this;
      });
};
}( jQuery ));
