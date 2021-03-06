(function ( $ ) {
    const corrently_api_endpoint = 'https://api.corrently.io/';
    let account_cache=[];
    $.fn.account = function() {
     return this.each(function(i,e) {
       const displayField = function() {
           let d = account_cache[address];

       }
        let parent = $(e);
        let address=parent.attr('data-account');
        if(typeof account_cache[address] == "undefined") {
           $.getJSON(corrently_api_endpoint+'accountInfo?account='+address,function(d) {
                 account_cache[address]=d.result;
                 parent.html(d.result[parent.attr('data-field')]);
           });
        } else {
            parent.html(account_cache[address][parent.attr('data-field')]);
        }
     });
    };

    $.fn.iot = function() {
     return this.each(function(d,e) {
        let parent = $(e);
        e.refresh = function() {
            $.getJSON(corrently_api_endpoint+'iot?account='+parent.attr('data-iot'),function(d) {
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
        e.subscribe = function(seconds) {
            setTimeout(function() {
                e.refresh();
            },(seconds*1000)+Math.round(Math.random()*1000));
        }
        e.refresh();
        if(typeof parent.attr('data-subscribe') != 'undefined') {
            e.subscribe( parent.attr('data-subscribe'));
        }
        return e;
      });
};
}( jQuery ));
